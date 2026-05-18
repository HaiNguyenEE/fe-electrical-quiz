// ============================================================
// FE Workshop — Floating feedback button (FAB)
// Opens the feedback MODAL on the current page (does NOT navigate
// to feedback.html, so the underlying quiz remains visible and
// available for in-page region-screenshot capture).
// Falls back to feedback.html if feedback-modal.js isn't loaded.
// ============================================================
(function () {
  "use strict";

  // Don't draw the FAB on the standalone feedback page
  if (/feedback\.html(\?|#|$)/.test(location.pathname + location.search)) return;

  // ---- Styles ----
  const css = `
    .feq-fab {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 9997;
      display: inline-flex;
      align-items: center;
      gap: .55rem;
      padding: .6rem .95rem .6rem .55rem;
      background:
        radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.30) 0%, transparent 55%),
        linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 35%, #155e75 75%, #134e4a 100%);
      color: #fff;
      text-decoration: none;
      border: 1px solid rgba(165, 243, 252, 0.32);
      border-radius: 999px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: .92rem;
      font-weight: 700;
      letter-spacing: 0.1px;
      cursor: pointer;
      box-shadow:
        0 0 22px rgba(34, 211, 238, 0.42),
        0 0 14px rgba(167, 139, 250, 0.32),
        0 8px 22px rgba(8, 12, 38, 0.45),
        inset 0 1px 0 rgba(255,255,255,0.10);
      transition: transform .15s ease, box-shadow .2s ease;
    }
    .feq-fab:hover { transform: translateY(-2px) scale(1.04);
      box-shadow:
        0 0 32px rgba(34, 211, 238, 0.62),
        0 0 20px rgba(167, 139, 250, 0.46),
        0 14px 30px rgba(8, 12, 38, 0.55),
        inset 0 1px 0 rgba(255,255,255,0.14);
    }
    .feq-fab:active { transform: translateY(0) scale(0.98); }
    .feq-fab .ic {
      width: 36px; height: 36px;
      display: inline-flex; align-items: center; justify-content: center;
      background:
        radial-gradient(circle at 30% 30%, rgba(165, 243, 252, 0.40) 0%, transparent 60%),
        rgba(8, 12, 38, 0.45);
      border-radius: 50%;
      border: 1px solid rgba(165, 243, 252, 0.45);
      flex-shrink: 0;
      box-shadow: inset 0 0 8px rgba(34, 211, 238, 0.30);
    }
    .feq-fab .ic svg { width: 22px; height: 22px; display: block; }
    .feq-fab .lbl {
      max-width: 0;
      overflow: hidden;
      white-space: nowrap;
      opacity: 0;
      transition: max-width .25s ease, opacity .2s ease;
    }
    .feq-fab:hover .lbl, .feq-fab:focus .lbl { max-width: 220px; opacity: 1; }
    @media (max-width: 480px) {
      .feq-fab { right: 12px; bottom: 12px; padding: .5rem .55rem; }
      .feq-fab .lbl { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      .feq-fab, .feq-fab .lbl { transition: none !important; }
    }
  `;
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ---- Icon: EE-themed mini schematic (resistor zigzag + capacitor) ----
  const iconSvg = `
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- wire in -->
        <line x1="2" y1="14" x2="6" y2="14"/>
        <!-- resistor zigzag -->
        <polyline points="6,14 8,9 11,19 14,9 17,19 19,14"/>
        <!-- wire to capacitor -->
        <line x1="19" y1="14" x2="22" y2="14"/>
        <!-- capacitor plates -->
        <line x1="22" y1="9" x2="22" y2="19"/>
        <line x1="25" y1="9" x2="25" y2="19"/>
        <!-- wire out -->
        <line x1="25" y1="14" x2="27" y2="14"/>
      </g>
    </svg>`;

  function inject() {
    if (document.querySelector(".feq-fab")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "feq-fab";
    btn.setAttribute("aria-label", "Send feedback");
    btn.title = "Send feedback / Gửi phản hồi";
    btn.innerHTML = `<span class="ic">${iconSvg}</span><span class="lbl">Send feedback</span>`;
    btn.addEventListener("click", () => {
      // Preferred: open the in-page modal (allows region screenshot of this page)
      if (window.FE_Feedback && typeof window.FE_Feedback.open === "function") {
        window.FE_Feedback.open();
      } else {
        // Fallback: navigate to the standalone page
        location.href = "feedback.html";
      }
    });
    document.body.appendChild(btn);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
