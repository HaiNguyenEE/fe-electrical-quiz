// ============================================================
// FE Workshop — Feedback Modal + Region Capture
// ------------------------------------------------------------
// Self-contained: injects its own CSS + HTML, exposes
//   window.FE_Feedback.open()  / .close()
//
// Flow:
//   1. FAB click → open modal overlay on current page (quiz still
//      underneath the modal, never navigated away).
//   2. User clicks "📸 Capture region of this page" → modal shrinks
//      into a small pill at bottom-right; full-screen crosshair
//      overlay activates on the underlying page.
//   3. User drags a rectangle → html2canvas captures *just* that
//      region (NOT the modal, NOT the pill).
//   4. Modal restores with the screenshot pre-attached. User keeps
//      filling out the form normally.
//
// html2canvas is lazy-loaded from cdnjs the first time region
// capture is requested.
// ============================================================
(function () {
  "use strict";

  // Skip on feedback.html itself — that page already has its own form
  if (/feedback\.html(\?|#|$)/.test(location.pathname + location.search)) return;

  // ---- Configuration (Web3Forms — same recipient as feedback.html) ----
  // Web3Forms binds the recipient email to the access key on its side —
  // the email address never appears in this page source. Access keys are
  // public-safe (rate-limited, domain-locked on the Web3Forms dashboard).
  const ACCESS_KEY      = "49bf5f26-bacf-48e0-824b-57e18a3cf28c";
  const ACTION_URL      = "https://api.web3forms.com/submit";
  const HTML2CANVAS_URL = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

  const MAX_FILE_BYTES  = 10 * 1024 * 1024;
  const MAX_TOTAL_BYTES = 25 * 1024 * 1024;
  const MAX_FILE_COUNT  = 10;

  // ============================================================
  // CSS injection
  // ============================================================
  const css = `
    .feq-modal-root {
      position: fixed; inset: 0; z-index: 10000;
      pointer-events: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .feq-backdrop {
      position: absolute; inset: 0;
      background: rgba(7, 18, 24, 0.55);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      opacity: 0;
      transition: opacity .22s ease;
      pointer-events: none;
    }
    .feq-modal-root.open .feq-backdrop { opacity: 1; pointer-events: auto; }
    .feq-modal-root.minimized .feq-backdrop { opacity: 0; pointer-events: none; }

    .feq-card {
      position: absolute;
      left: 50%; top: 50%;
      transform: translate(-50%, -50%) scale(0.96);
      width: min(720px, 92vw);
      max-height: 88vh;
      overflow-y: auto;
      background: #ffffff;
      color: #1c2733;
      border-radius: 16px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.32), 0 12px 30px rgba(0,0,0,0.18);
      opacity: 0;
      transition: opacity .22s ease, transform .26s cubic-bezier(0.2, 0.8, 0.2, 1.05),
                  width .28s ease, height .28s ease, left .28s ease, top .28s ease,
                  border-radius .28s ease;
      pointer-events: none;
    }
    [data-theme="dark"] .feq-card { background: #1c2533; color: #e7eaf0; }
    .feq-modal-root.open .feq-card {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      pointer-events: auto;
    }
    .feq-modal-root.minimized .feq-card {
      left: auto; top: auto;
      right: 18px; bottom: 18px;
      transform: none !important;
      width: 270px; height: 64px;
      max-height: 64px;
      overflow: hidden;
      border-radius: 999px;
      box-shadow: 0 10px 26px rgba(0,0,0,0.28);
      cursor: pointer;
    }
    .feq-modal-root.minimized .feq-card .feq-body,
    .feq-modal-root.minimized .feq-card .feq-header-title-block { display: none; }
    .feq-modal-root.minimized .feq-card .feq-mini-pill { display: flex; }

    /* ---- Header ---- */
    .feq-header {
      display: flex; align-items: center; gap: .8rem;
      padding: 1.05rem 1.2rem 0.9rem;
      border-bottom: 1px solid rgba(0,0,0,0.08);
      background: linear-gradient(135deg, #c92a2f 0%, #caa845 50%, #159968 100%);
      color: #fff;
      border-radius: 16px 16px 0 0;
    }
    [data-theme="dark"] .feq-header { border-bottom-color: rgba(255,255,255,0.06); }
    .feq-modal-root.minimized .feq-header { border-radius: 999px; padding: 0; border: none; height: 64px; }
    .feq-header-title-block { flex: 1; }
    .feq-header h2 {
      margin: 0; font-size: 1.18rem; font-weight: 800; letter-spacing: -0.2px;
      text-shadow: 0 1px 3px rgba(0,0,0,0.15);
    }
    .feq-header .sub {
      margin-top: 2px; font-size: .82rem; opacity: 0.96; font-weight: 500;
      text-shadow: 0 1px 2px rgba(0,0,0,0.12);
    }
    .feq-header-actions { display: flex; gap: .4rem; align-items: center; }
    .feq-icon-btn {
      background: rgba(255,255,255,0.16);
      border: 1px solid rgba(255,255,255,0.32);
      color: #fff;
      width: 32px; height: 32px; border-radius: 50%;
      cursor: pointer;
      display: inline-flex; align-items: center; justify-content: center;
      font-size: 1rem;
      transition: all .15s;
      backdrop-filter: blur(4px);
    }
    .feq-icon-btn:hover { background: rgba(255,255,255,0.28); transform: scale(1.06); }
    .feq-icon-btn:focus { outline: 2px solid rgba(255,255,255,0.55); outline-offset: 1px; }

    /* ---- Minimized pill content ---- */
    .feq-mini-pill {
      display: none; align-items: center; gap: .55rem;
      padding: 0 1rem; width: 100%; height: 64px;
      color: #fff; font-weight: 700; font-size: .92rem;
      background: linear-gradient(135deg, #c92a2f 0%, #caa845 50%, #159968 100%);
      border-radius: 999px;
    }
    .feq-mini-pill .icon {
      width: 30px; height: 30px; border-radius: 50%;
      background: rgba(255,255,255,0.22);
      display: inline-flex; align-items: center; justify-content: center;
      font-size: 1.05rem;
      flex-shrink: 0;
    }
    .feq-mini-pill .lbl { flex: 1; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .feq-mini-pill small { display: block; font-weight: 500; font-size: .76rem; opacity: 0.88; }

    /* ---- Body ---- */
    .feq-body { padding: 1.1rem 1.3rem 1.3rem; }
    .feq-row { margin: 0.9rem 0 0.5rem; }
    .feq-row.two-col {
      display: grid; grid-template-columns: 1fr 1fr; gap: .85rem;
    }
    @media (max-width: 540px) { .feq-row.two-col { grid-template-columns: 1fr; } }
    .feq-row label.lab {
      display: block; font-weight: 700; font-size: 0.92rem;
      margin-bottom: .3rem; color: inherit;
    }
    .feq-row label.lab .vn { font-weight: 500; opacity: 0.7; font-size: .85em; }
    .feq-row label.lab .req { color: #d04848; font-weight: 700; margin-left: .15em; }
    .feq-row label.lab .opt { opacity: 0.6; font-weight: 500; font-size: .78em; font-style: italic; }

    .feq-card input[type="text"],
    .feq-card input[type="email"],
    .feq-card select,
    .feq-card textarea {
      width: 100%;
      padding: .58rem .8rem;
      font: inherit;
      font-size: .98rem;
      border-radius: 8px;
      border: 1.5px solid rgba(0,0,0,0.14);
      background: #ffffff;
      color: #1c2733;
      transition: all .15s;
    }
    [data-theme="dark"] .feq-card input[type="text"],
    [data-theme="dark"] .feq-card input[type="email"],
    [data-theme="dark"] .feq-card select,
    [data-theme="dark"] .feq-card textarea {
      background: #0f1620; color: #e7eaf0; border-color: rgba(255,255,255,0.18);
    }
    .feq-card input:focus, .feq-card select:focus, .feq-card textarea:focus {
      outline: none; border-color: #2e75b6;
      box-shadow: 0 0 0 3px rgba(46, 117, 182, 0.20);
    }
    .feq-card textarea { resize: vertical; min-height: 110px; line-height: 1.55; }

    .feq-cat-grid {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: .5rem;
    }
    .feq-cat {
      cursor: pointer; position: relative;
    }
    .feq-cat input { position: absolute; opacity: 0; pointer-events: none; }
    .feq-cat > span {
      display: flex; flex-direction: column;
      padding: .65rem .8rem;
      border: 2px solid rgba(0,0,0,0.12);
      border-radius: 9px;
      background: rgba(0,0,0,0.02);
      font-weight: 700; font-size: .92rem;
      transition: all .15s;
    }
    [data-theme="dark"] .feq-cat > span { border-color: rgba(255,255,255,0.16); background: rgba(255,255,255,0.04); }
    .feq-cat > span small { display: block; font-weight: 500; font-size: .75rem; opacity: 0.66; margin-top: .15rem; }
    .feq-cat:hover > span { border-color: #2e75b6; }
    .feq-cat input:checked + span {
      border-color: #2e7d32;
      background: rgba(46, 125, 50, 0.10);
      box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.18);
    }
    [data-theme="dark"] .feq-cat input:checked + span {
      background: rgba(102, 187, 106, 0.14);
      box-shadow: 0 0 0 2px rgba(102, 187, 106, 0.22);
    }

    /* ---- Attachment area ---- */
    .feq-attach-bar {
      display: flex; flex-wrap: wrap; gap: .45rem; margin-bottom: .5rem;
    }
    .feq-btn-attach {
      background: rgba(0,0,0,0.04);
      border: 1.5px solid rgba(0,0,0,0.14);
      color: inherit;
      padding: .5rem .8rem;
      border-radius: 8px;
      cursor: pointer;
      font: inherit; font-size: .9rem; font-weight: 600;
      transition: all .15s;
    }
    [data-theme="dark"] .feq-btn-attach { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.18); }
    .feq-btn-attach:hover { border-color: #2e75b6; transform: translateY(-1px); }
    .feq-btn-attach.primary {
      background: linear-gradient(135deg, #c92a2f 0%, #159968 100%);
      color: #fff; border-color: transparent;
      box-shadow: 0 3px 10px rgba(122, 18, 22, 0.18), 0 3px 10px rgba(15, 122, 82, 0.18);
    }
    .feq-btn-attach.primary:hover { transform: translateY(-2px); }

    .feq-drop {
      border: 2px dashed rgba(0,0,0,0.18);
      border-radius: 10px;
      padding: 0.9rem;
      background: rgba(0,0,0,0.02);
      min-height: 80px;
      transition: all .2s;
    }
    [data-theme="dark"] .feq-drop { border-color: rgba(255,255,255,0.20); background: rgba(255,255,255,0.03); }
    .feq-drop.drag-over { border-color: #2e7d32; background: rgba(46,125,50,0.07); }
    .feq-drop-empty { text-align: center; opacity: 0.72; font-size: .88rem; padding: .3rem 0; }
    .feq-drop-empty kbd { background: rgba(0,0,0,0.08); border-radius: 4px; padding: 1px 5px; font-size: .78em; }
    [data-theme="dark"] .feq-drop-empty kbd { background: rgba(255,255,255,0.10); }
    .feq-thumbs { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: .6rem; }
    .feq-thumb {
      position: relative;
      background: #fff; border: 1.5px solid rgba(0,0,0,0.12);
      border-radius: 8px; padding: .45rem; overflow: hidden;
    }
    [data-theme="dark"] .feq-thumb { background: #0f1620; border-color: rgba(255,255,255,0.16); }
    .feq-thumb img, .feq-thumb video {
      width: 100%; height: 78px; object-fit: cover; border-radius: 5px; background: #000;
      display: block;
    }
    .feq-thumb .fb {
      width: 100%; height: 78px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,0,0,0.05); border-radius: 5px; font-size: 1.5rem;
    }
    [data-theme="dark"] .feq-thumb .fb { background: rgba(255,255,255,0.05); }
    .feq-thumb .nm {
      font-size: .76rem; margin-top: .35rem; font-weight: 600;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .feq-thumb .sz { font-size: .7rem; opacity: 0.65; }
    .feq-thumb .sz.over { color: #d04848; font-weight: 700; opacity: 1; }
    .feq-thumb .rm {
      position: absolute; top: 4px; right: 4px;
      width: 22px; height: 22px; border-radius: 50%;
      background: rgba(0,0,0,0.55); color: #fff;
      border: none; cursor: pointer; font-size: .8rem; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
    }
    .feq-thumb .rm:hover { background: #d04848; }
    .feq-attach-meta { font-size: .82rem; opacity: 0.7; margin-top: .4rem; }

    /* ---- Submit row ---- */
    .feq-submit-row {
      display: flex; gap: .65rem; align-items: center;
      margin-top: 1.3rem; padding-top: 1rem;
      border-top: 1px solid rgba(0,0,0,0.10);
    }
    [data-theme="dark"] .feq-submit-row { border-top-color: rgba(255,255,255,0.10); }
    .feq-btn-primary {
      background: linear-gradient(135deg, #c92a2f 0%, #159968 100%);
      color: #fff; border: none; padding: .72rem 1.4rem;
      border-radius: 9px; font: inherit; font-size: 1rem; font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(122, 18, 22, 0.18), 0 4px 14px rgba(15, 122, 82, 0.18);
      transition: all .15s;
    }
    .feq-btn-primary:hover { transform: translateY(-2px); }
    .feq-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
    .feq-link {
      color: inherit; opacity: 0.65; text-decoration: none; font-weight: 500;
      padding: .5rem .8rem; cursor: pointer; font-size: .92rem;
    }
    .feq-link:hover { opacity: 1; text-decoration: underline; }

    .feq-status {
      margin-top: 1rem; padding: .8rem 1rem;
      border-radius: 8px; font-weight: 600; font-size: .94rem;
    }
    .feq-status.success { background: rgba(46,125,50,0.12); color: #2e7d32; border-left: 4px solid #2e7d32; }
    .feq-status.error   { background: rgba(208,72,72,0.10); color: #d04848; border-left: 4px solid #d04848; }
    .feq-status.info    { background: rgba(46,117,182,0.10); color: #2e75b6; border-left: 4px solid #2e75b6; }
    [data-theme="dark"] .feq-status.success { color: #66bb6a; background: rgba(102,187,106,0.14); border-left-color: #66bb6a; }
    [data-theme="dark"] .feq-status.error   { color: #ef5350; background: rgba(239,83,80,0.13); border-left-color: #ef5350; }
    [data-theme="dark"] .feq-status.info    { color: #4fc3f7; background: rgba(79,195,247,0.13); border-left-color: #4fc3f7; }

    .feq-privacy { margin-top: .9rem; font-size: .82rem; opacity: 0.72; line-height: 1.55; }
    .feq-privacy a { color: #2e75b6; }

    /* ============================================================
       REGION SELECTOR OVERLAY  (active while modal is minimized)
       ============================================================ */
    .feq-region-overlay {
      position: fixed; inset: 0; z-index: 9998;
      cursor: crosshair;
      background: rgba(7, 18, 24, 0.42);
      user-select: none; -webkit-user-select: none;
    }
    .feq-region-banner {
      position: fixed; top: 18px; left: 50%; transform: translateX(-50%);
      background: rgba(20, 28, 38, 0.94);
      color: #fff;
      padding: .55rem 1rem;
      border-radius: 999px;
      font-size: .9rem; font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-shadow: 0 6px 18px rgba(0,0,0,0.30);
      pointer-events: none;
      z-index: 9999;
    }
    .feq-region-banner kbd { background: rgba(255,255,255,0.18); border-radius: 4px; padding: 1px 6px; font-size: .8em; }
    .feq-region-rect {
      position: absolute;
      border: 2px solid #20c997;
      background: rgba(32, 201, 151, 0.10);
      box-shadow: 0 0 0 9999px rgba(7, 18, 24, 0.36);
      pointer-events: none;
    }
    .feq-region-dims {
      position: absolute;
      background: #20c997; color: #04201a;
      padding: 2px 8px; border-radius: 5px;
      font-size: .78rem; font-weight: 700;
      font-family: 'SF Mono', Menlo, monospace;
      pointer-events: none;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    }
  `;
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ============================================================
  // Modal DOM
  // ============================================================
  const CHAPTERS = [
    [1, "Mathematics"], [2, "Probability & Statistics"], [3, "Ethics & Professional Practice"],
    [4, "Engineering Economics"], [5, "Properties of Electrical Materials"],
    [6, "Circuit Analysis (DC & AC)"], [7, "Linear Systems"], [8, "Signal Processing"],
    [9, "Electronics"], [10, "Power Systems"], [11, "Electromagnetics"],
    [12, "Control Systems"], [13, "Communications"], [14, "Computer Networks"],
    [15, "Digital Systems"], [16, "Computer Systems"], [17, "Software Engineering"]
  ];
  const chapterOptions = `<option value="(general)">— General / Không thuộc chương cụ thể —</option>` +
    CHAPTERS.map(([n, name]) => `<option value="${n} — ${name}">${n} — ${name}</option>`).join("");

  const modalHtml = `
    <div class="feq-backdrop" data-close="bg"></div>
    <form class="feq-card" id="feqForm" method="POST" enctype="multipart/form-data" novalidate>
      <input type="hidden" name="access_key" value="${ACCESS_KEY}">
      <input type="hidden" name="subject" value="FE Workshop — User feedback">
      <input type="hidden" name="from_name" value="FE Workshop">
      <input type="hidden" name="redirect" id="feqNextUrl" value="">
      <input type="hidden" name="page_url" id="feqPageUrl" value="">
      <input type="hidden" name="user_agent" id="feqUserAgent" value="">
      <input type="hidden" name="quiz_question_id" id="feqAutoQid" value="">
      <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">

      <div class="feq-header">
        <div class="feq-mini-pill" id="feqMiniPill" title="Click to restore the feedback panel">
          <span class="icon">🎯</span>
          <span class="lbl">Selecting region…<small>Esc to cancel · click to restore</small></span>
        </div>
        <div class="feq-header-title-block">
          <h2>💬 Send feedback</h2>
          <div class="sub">Spotted a wrong answer or have an idea? Tell me here.</div>
        </div>
        <div class="feq-header-actions">
          <button type="button" class="feq-icon-btn" id="feqMinBtn" title="Minimize">_</button>
          <button type="button" class="feq-icon-btn" id="feqCloseBtn" title="Close">✕</button>
        </div>
      </div>

      <div class="feq-body">

        <div class="feq-row">
          <label class="lab">What is this about? <span class="vn">/ Loại phản hồi</span> <span class="req">*</span></label>
          <div class="feq-cat-grid">
            <label class="feq-cat"><input type="radio" name="category" value="Wrong answer" required><span>📐 Wrong answer<small>Đáp án / lời giải sai</small></span></label>
            <label class="feq-cat"><input type="radio" name="category" value="Typo / display bug"><span>🐛 Typo / display<small>Lỗi chữ hoặc hiển thị</small></span></label>
            <label class="feq-cat"><input type="radio" name="category" value="Suggestion"><span>💡 Suggestion<small>Ý tưởng cải tiến</small></span></label>
            <label class="feq-cat"><input type="radio" name="category" value="Other"><span>✉️ Other<small>Khác</small></span></label>
          </div>
        </div>

        <div class="feq-row two-col">
          <div>
            <label class="lab" for="feqChapter">Chapter <span class="vn">/ Chương</span></label>
            <select id="feqChapter" name="chapter">${chapterOptions}</select>
          </div>
          <div>
            <label class="lab" for="feqQid">Question ID <span class="vn">/ Mã câu</span></label>
            <input type="text" id="feqQid" name="question_id" placeholder="auto-filled if available">
          </div>
        </div>

        <div class="feq-row">
          <label class="lab" for="feqTitle">Short title <span class="vn">/ Tiêu đề</span> <span class="req">*</span></label>
          <input type="text" id="feqTitle" name="title" maxlength="120" required placeholder="One-line summary">
        </div>

        <div class="feq-row">
          <label class="lab" for="feqMessage">Details <span class="vn">/ Mô tả chi tiết</span> <span class="req">*</span></label>
          <textarea id="feqMessage" name="message" rows="5" required placeholder="What went wrong? What would make this better?"></textarea>
        </div>

        <div class="feq-row">
          <label class="lab" for="feqReply">Your email <span class="vn">/ Email phản hồi</span> <span class="opt">optional · for reply only</span></label>
          <input type="email" id="feqReply" name="reply_email" placeholder="you@example.com — leave blank to stay anonymous">
        </div>

        <div class="feq-row">
          <label class="lab">Attachments <span class="vn">/ Tệp đính kèm</span> <span class="opt">10 MB / file · 25 MB total</span></label>
          <div class="feq-attach-bar">
            <button type="button" class="feq-btn-attach primary" id="feqRegionBtn">📸 Capture region of this page</button>
            <button type="button" class="feq-btn-attach" id="feqFullBtn">🖥 Capture another window</button>
            <button type="button" class="feq-btn-attach" id="feqPickBtn">📎 Choose files</button>
            <button type="button" class="feq-btn-attach" id="feqPasteHint">📋 Paste (⌘/Ctrl-V)</button>
            <input type="file" id="feqPicker" multiple accept="image/*,video/*" hidden>
          </div>
          <div class="feq-drop" id="feqDrop">
            <div class="feq-drop-empty" id="feqDropEmpty">
              Drag &amp; drop files here · or use the buttons above · paste with <kbd>⌘/Ctrl</kbd>+<kbd>V</kbd>
            </div>
            <div class="feq-thumbs" id="feqThumbs"></div>
          </div>
          <div class="feq-attach-meta">
            <span id="feqCount">0 file(s) attached</span> · <span id="feqSize">0.00 MB total</span>
          </div>
        </div>

        <div class="feq-submit-row">
          <button type="submit" class="feq-btn-primary" id="feqSubmit">📨 Send feedback</button>
          <span class="feq-link" data-close="cancel">Cancel</span>
        </div>

        <div id="feqStatus" class="feq-status" hidden></div>

        <p class="feq-privacy">
          <b>Privacy.</b> Messages are routed through <a href="https://web3forms.com" target="_blank" rel="noopener">Web3Forms</a>.
          The recipient email is bound to the access key on Web3Forms' side and never appears in this page source. Your email, if you provide it, is used only to reply — never published.
        </p>
      </div>
    </form>
  `;

  // Defer DOM injection until needed
  let root = null;
  function ensureRoot() {
    if (root) return root;
    root = document.createElement("div");
    root.className = "feq-modal-root";
    root.innerHTML = modalHtml;
    document.body.appendChild(root);
    wire(root);
    return root;
  }

  // ============================================================
  // Wiring
  // ============================================================
  const state = {
    attachments: [],
    nextId: 1,
    minimized: false
  };
  const fmtMB = b => (b / (1024 * 1024)).toFixed(2) + " MB";
  const q = sel => root.querySelector(sel);

  function wire(root) {
    // Form action
    const form = root.querySelector("#feqForm");
    form.action = ACTION_URL;
    root.querySelector("#feqNextUrl").value = location.href.split("?")[0] + "?fb=ok";
    root.querySelector("#feqPageUrl").value = location.href;
    root.querySelector("#feqUserAgent").value = navigator.userAgent;

    // Auto-detect current quiz question id, if any
    const qChip = document.querySelector(".flag.primary, .q-meta + .q-statement");
    const qLabel = document.querySelector(".progress-text span:first-child");
    if (qLabel) root.querySelector("#feqAutoQid").value = qLabel.textContent.trim();

    // Header buttons
    root.querySelector("#feqCloseBtn").addEventListener("click", close);
    root.querySelector("#feqMinBtn").addEventListener("click", toggleMinimize);
    root.querySelector(".feq-backdrop").addEventListener("click", e => {
      if (state.minimized) return;
      close();
    });
    root.querySelector('[data-close="cancel"]').addEventListener("click", close);

    // Click on minimized pill restores
    root.querySelector("#feqMiniPill").addEventListener("click", e => {
      // Only restore if no region-selection is active
      if (!document.querySelector(".feq-region-overlay")) restore();
    });

    // Esc to close (or cancel region selection — handled separately)
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && root.classList.contains("open") && !document.querySelector(".feq-region-overlay")) {
        close();
      }
    });

    // File picker
    root.querySelector("#feqPickBtn").addEventListener("click", () => root.querySelector("#feqPicker").click());
    root.querySelector("#feqPicker").addEventListener("change", e => {
      addFiles(e.target.files); e.target.value = "";
    });

    // Drag & drop
    const drop = root.querySelector("#feqDrop");
    ["dragenter", "dragover"].forEach(evt => drop.addEventListener(evt, e => {
      e.preventDefault(); e.stopPropagation(); drop.classList.add("drag-over");
    }));
    ["dragleave", "drop"].forEach(evt => drop.addEventListener(evt, e => {
      e.preventDefault(); e.stopPropagation(); drop.classList.remove("drag-over");
    }));
    drop.addEventListener("drop", e => { if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files); });

    // Paste
    document.addEventListener("paste", e => {
      if (!root.classList.contains("open") || state.minimized) return;
      if (!e.clipboardData) return;
      const files = [];
      for (const it of e.clipboardData.items) {
        if (it.kind === "file") {
          const f = it.getAsFile(); if (f) files.push(f);
        }
      }
      if (files.length) {
        e.preventDefault();
        addFiles(files);
        showStatus("info", `📋 Pasted ${files.length} item(s) from clipboard.`);
      }
    });

    root.querySelector("#feqPasteHint").addEventListener("click", () => {
      showStatus("info", "Press <kbd>⌘/Ctrl</kbd>+<kbd>V</kbd> with the panel open to paste a screenshot.");
    });

    // 📸 Region capture (the new flow)
    root.querySelector("#feqRegionBtn").addEventListener("click", captureRegion);

    // 🖥 Full screen / another tab capture
    root.querySelector("#feqFullBtn").addEventListener("click", captureFullScreen);

    // Submit handler
    form.addEventListener("submit", onSubmit);
  }

  // ============================================================
  // Attachment management
  // ============================================================
  function refreshThumbs() {
    const grid = q("#feqThumbs");
    const empty = q("#feqDropEmpty");
    grid.innerHTML = "";
    if (!state.attachments.length) {
      empty.style.display = "";
    } else {
      empty.style.display = "none";
      for (const a of state.attachments) {
        const div = document.createElement("div");
        div.className = "feq-thumb";
        let preview = "";
        if (a.type.startsWith("image/")) preview = `<img src="${a.url}" alt="">`;
        else if (a.type.startsWith("video/")) preview = `<video src="${a.url}" muted></video>`;
        else preview = `<div class="fb">📎</div>`;
        const over = a.size > MAX_FILE_BYTES;
        div.innerHTML = `${preview}
          <div class="nm" title="${a.name}">${a.name}</div>
          <div class="sz ${over ? "over" : ""}">${fmtMB(a.size)}${over ? " · too big" : ""}</div>
          <button type="button" class="rm" data-id="${a.id}" title="Remove">✕</button>`;
        grid.appendChild(div);
      }
    }
    q("#feqCount").textContent = `${state.attachments.length} file(s) attached`;
    const total = state.attachments.reduce((s, a) => s + a.size, 0);
    q("#feqSize").textContent = `${fmtMB(total)} total`;
    grid.querySelectorAll(".rm").forEach(b => b.addEventListener("click", () => {
      const id = +b.dataset.id;
      const i = state.attachments.findIndex(a => a.id === id);
      if (i >= 0) {
        URL.revokeObjectURL(state.attachments[i].url);
        state.attachments.splice(i, 1);
        refreshThumbs();
      }
    }));
  }
  function addFiles(list) {
    for (const f of list) {
      if (state.attachments.length >= MAX_FILE_COUNT) break;
      const url = URL.createObjectURL(f);
      state.attachments.push({
        id: state.nextId++, file: f, url,
        type: f.type || "application/octet-stream",
        name: f.name || `paste-${Date.now()}.png`,
        size: f.size
      });
    }
    refreshThumbs();
  }
  function showStatus(kind, html) {
    const el = q("#feqStatus");
    el.className = "feq-status " + kind;
    el.innerHTML = html;
    el.hidden = false;
  }
  function clearStatus() { const el = q("#feqStatus"); if (el) el.hidden = true; }

  // ============================================================
  // Open / Close / Minimize
  // ============================================================
  function open() {
    ensureRoot();
    clearStatus();
    root.classList.add("open");
    state.minimized = false;
    root.classList.remove("minimized");
    setTimeout(() => { const t = q("#feqTitle"); t && t.focus(); }, 250);
  }
  function close() {
    if (!root) return;
    root.classList.remove("open");
    root.classList.remove("minimized");
    state.minimized = false;
  }
  function minimize() {
    if (!root) return;
    state.minimized = true;
    root.classList.add("minimized");
  }
  function restore() {
    if (!root) return;
    state.minimized = false;
    root.classList.remove("minimized");
  }
  function toggleMinimize() { state.minimized ? restore() : minimize(); }

  // ============================================================
  // Region capture using html2canvas
  // ============================================================
  let _h2cLoading = null;
  function loadHtml2Canvas() {
    if (typeof window.html2canvas === "function") return Promise.resolve();
    if (_h2cLoading) return _h2cLoading;
    _h2cLoading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = HTML2CANVAS_URL;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("Failed to load html2canvas from CDN"));
      document.head.appendChild(s);
    });
    return _h2cLoading;
  }

  async function captureRegion() {
    clearStatus();
    try {
      await loadHtml2Canvas();
    } catch (e) {
      showStatus("error", "Could not load screenshot library (check your internet). Use Paste or Choose files instead.");
      return;
    }

    // Hide modal completely (not just minimize) so it isn't in the screenshot
    // We'll show our minimized pill via a separate floating element.
    minimize();
    // Move the minimized pill out of the screenshot area is unnecessary —
    // html2canvas captures a region of the page coords, and the pill is in
    // the corner. To be safe, we hide the entire modal root during capture:
    root.style.visibility = "hidden";

    const sel = await selectRegion();

    if (!sel) {
      // user cancelled
      root.style.visibility = "";
      restore();
      showStatus("info", "Region capture cancelled.");
      return;
    }

    // Capture
    showStatus("info", "📸 Capturing region…");
    try {
      const canvas = await window.html2canvas(document.body, {
        x: sel.x, y: sel.y,
        width: sel.width, height: sel.height,
        useCORS: true,
        logging: false,
        backgroundColor: null,
        scale: window.devicePixelRatio || 1,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      });
      const blob = await new Promise(r => canvas.toBlob(r, "image/png", 0.92));
      const file = new File([blob], `region-${Date.now()}.png`, { type: "image/png" });
      addFiles([file]);
      root.style.visibility = "";
      restore();
      showStatus("success", `✅ Captured ${sel.width}×${sel.height} px region.`);
    } catch (e) {
      console.error(e);
      root.style.visibility = "";
      restore();
      showStatus("error", "Capture failed: " + (e.message || e) + ". Try Paste or Choose files.");
    }
  }

  function selectRegion() {
    return new Promise(resolve => {
      const overlay = document.createElement("div");
      overlay.className = "feq-region-overlay";
      const banner = document.createElement("div");
      banner.className = "feq-region-banner";
      banner.innerHTML = `🎯 <b>Drag</b> to select an area · <kbd>Esc</kbd> to cancel`;
      const rect = document.createElement("div");
      rect.className = "feq-region-rect";
      rect.style.display = "none";
      const dims = document.createElement("div");
      dims.className = "feq-region-dims";
      dims.style.display = "none";

      overlay.appendChild(rect);
      document.body.appendChild(overlay);
      document.body.appendChild(banner);
      document.body.appendChild(dims);

      let dragging = false, startX = 0, startY = 0;

      function cleanup() {
        overlay.remove(); banner.remove(); dims.remove();
        document.removeEventListener("keydown", onKey);
      }
      function onMouseDown(e) {
        if (e.button !== 0) return;
        startX = e.clientX; startY = e.clientY;
        dragging = true;
        rect.style.display = "block";
        rect.style.left = startX + "px";
        rect.style.top = startY + "px";
        rect.style.width = "0px";
        rect.style.height = "0px";
        dims.style.display = "block";
      }
      function onMouseMove(e) {
        if (!dragging) return;
        const x = Math.min(startX, e.clientX);
        const y = Math.min(startY, e.clientY);
        const w = Math.abs(e.clientX - startX);
        const h = Math.abs(e.clientY - startY);
        rect.style.left = x + "px"; rect.style.top = y + "px";
        rect.style.width = w + "px"; rect.style.height = h + "px";
        dims.textContent = `${w} × ${h}`;
        // place dims label near cursor but inside viewport
        dims.style.left = Math.min(e.clientX + 14, window.innerWidth - 80) + "px";
        dims.style.top  = Math.max(e.clientY - 28, 6) + "px";
      }
      function onMouseUp(e) {
        if (!dragging) return;
        dragging = false;
        const x = Math.min(startX, e.clientX);
        const y = Math.min(startY, e.clientY);
        const w = Math.abs(e.clientX - startX);
        const h = Math.abs(e.clientY - startY);
        if (w < 12 || h < 12) {
          // too small — let user try again
          rect.style.display = "none";
          dims.style.display = "none";
          return;
        }
        cleanup();
        resolve({
          x: x + window.scrollX,
          y: y + window.scrollY,
          width: w, height: h
        });
      }
      function onKey(e) {
        if (e.key === "Escape") { cleanup(); resolve(null); }
      }

      overlay.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp, { once: false });
      document.addEventListener("keydown", onKey);
    });
  }

  // ============================================================
  // Full-screen / other-window capture (getDisplayMedia)
  // ============================================================
  async function captureFullScreen() {
    clearStatus();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
      showStatus("error", "Your browser does not support window capture. Use Paste or Choose files.");
      return;
    }
    minimize();
    root.style.visibility = "hidden";
    let stream;
    try {
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: "browser", cursor: "always" },
        audio: false
      });
    } catch (err) {
      root.style.visibility = ""; restore();
      showStatus("info", "Capture cancelled.");
      return;
    }
    try {
      const video = document.createElement("video");
      video.srcObject = stream; video.muted = true;
      await video.play();
      await new Promise(r => setTimeout(r, 200));
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      stream.getTracks().forEach(t => t.stop());
      const blob = await new Promise(r => canvas.toBlob(r, "image/png", 0.92));
      const file = new File([blob], `screen-${Date.now()}.png`, { type: "image/png" });
      addFiles([file]);
      root.style.visibility = ""; restore();
      showStatus("success", "🖥 Screen captured and attached.");
    } catch (e) {
      try { stream && stream.getTracks().forEach(t => t.stop()); } catch (_) {}
      root.style.visibility = ""; restore();
      showStatus("error", "Capture failed: " + (e.message || e));
    }
  }

  // ============================================================
  // Submit
  // ============================================================
  function onSubmit(e) {
    const form = e.target;
    // Validate sizes
    if (state.attachments.some(a => a.size > MAX_FILE_BYTES)) {
      e.preventDefault();
      showStatus("error", "⚠ Some attachments exceed 10 MB. Remove or compress them, then try again.");
      return;
    }
    const total = state.attachments.reduce((s, a) => s + a.size, 0);
    if (total > MAX_TOTAL_BYTES) {
      e.preventDefault();
      showStatus("error", `⚠ Total attachment size ${fmtMB(total)} exceeds the 25 MB cap.`);
      return;
    }

    // Attach files to form via DataTransfer
    form.querySelectorAll('input[type="file"][name="attachment"]').forEach(n => n.remove());
    if (state.attachments.length) {
      const inp = document.createElement("input");
      inp.type = "file"; inp.name = "attachment"; inp.multiple = true; inp.style.display = "none";
      const dt = new DataTransfer();
      state.attachments.forEach(a => dt.items.add(a.file));
      inp.files = dt.files;
      form.appendChild(inp);
    }

    // Lock submit button
    const btn = q("#feqSubmit");
    btn.disabled = true;
    btn.innerHTML = "⏳ Sending…";
    showStatus("info", "Sending your feedback…");
    // form submits natively to api.web3forms.com
  }

  // ============================================================
  // Auto-show success banner if ?fb=ok in URL
  // ============================================================
  if (new URLSearchParams(location.search).get("fb") === "ok") {
    history.replaceState({}, "", location.pathname);
    setTimeout(() => {
      open();
      showStatus("success", "✅ <b>Thanks!</b> Your feedback was sent.");
    }, 300);
  }

  // ============================================================
  // Cross-page capture mode — invoked when feedback.html opens
  // this page in a popup with ?fb_capture=1. We bypass the modal
  // entirely, show a banner with instructions, and wait for the
  // user to drag-select a region of THIS page. The captured PNG
  // is posted back to the opener (feedback.html) via postMessage
  // and then we close the popup.
  // ============================================================
  if (new URLSearchParams(location.search).get("fb_capture") === "1" && window.opener) {
    runCaptureForOpener();
  }

  async function runCaptureForOpener() {
    // Banner with clear instructions
    const banner = document.createElement("div");
    banner.style.cssText = `
      position:fixed; top:14px; left:50%; transform:translateX(-50%);
      background: linear-gradient(135deg,#0c1023,#1e1b4b);
      color:#fff; padding:.6rem 1.1rem; border-radius:999px;
      font-size:.92rem; font-weight:600;
      box-shadow:0 0 24px rgba(34,211,238,0.45), 0 8px 22px rgba(0,0,0,0.35);
      border:1px solid rgba(165,243,252,0.32);
      z-index:99999;
      font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;
    banner.innerHTML = `🎯 <b>Navigate to the question you want to report</b>, then drag-select the region. <span style="opacity:.7">· Esc to cancel</span>`;
    document.body.appendChild(banner);

    // Give the user a moment to navigate (e.g. start a quiz, scroll to a question)
    // — don't activate cursor immediately. Add a "Start capture now" button.
    const startBtn = document.createElement("button");
    startBtn.textContent = "📸 Start region selection";
    startBtn.style.cssText = `
      position:fixed; bottom:18px; right:18px; z-index:99999;
      background: linear-gradient(135deg,#1e3a8a,#155e75);
      color:#fff; border:1px solid rgba(165,243,252,0.45);
      padding:.7rem 1.2rem; border-radius:999px;
      font:inherit; font-weight:700; font-size:.96rem; cursor:pointer;
      box-shadow:0 0 22px rgba(34,211,238,0.45), 0 8px 20px rgba(0,0,0,0.30);
    `;
    document.body.appendChild(startBtn);

    startBtn.addEventListener("click", async () => {
      startBtn.remove();
      banner.innerHTML = `🎯 <b>Drag to select the area</b> · <span style="opacity:.75">Esc to cancel</span>`;
      try {
        await loadHtml2Canvas();
      } catch (e) {
        banner.innerHTML = "❌ Could not load screenshot library — check your internet.";
        return;
      }
      const sel = await selectRegion();
      if (!sel) {
        banner.innerHTML = "Capture cancelled · closing this window…";
        setTimeout(() => window.close(), 800);
        return;
      }
      banner.innerHTML = "📸 Capturing…";
      try {
        const canvas = await window.html2canvas(document.body, {
          x: sel.x, y: sel.y, width: sel.width, height: sel.height,
          useCORS: true, logging: false, backgroundColor: null,
          scale: window.devicePixelRatio || 1,
          windowWidth: document.documentElement.scrollWidth,
          windowHeight: document.documentElement.scrollHeight
        });
        const dataUrl = canvas.toDataURL("image/png");
        try {
          window.opener.postMessage({ type: "feq-region-capture", dataUrl }, location.origin);
          banner.innerHTML = "✅ Sent to feedback window · closing…";
        } catch (err) {
          banner.innerHTML = "❌ Could not post back to feedback window: " + err.message;
        }
        setTimeout(() => window.close(), 700);
      } catch (e) {
        banner.innerHTML = "❌ Capture failed: " + (e.message || e);
      }
    });

    // Also let Esc cancel before user starts
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && document.body.contains(startBtn)) {
        banner.innerHTML = "Cancelled · closing…";
        setTimeout(() => window.close(), 500);
      }
    });
  }

  // Expose API
  window.FE_Feedback = { open, close, minimize, restore };
})();
