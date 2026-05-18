// ============================================================
// FE Workshop — Feedback page logic
// Screenshot capture · clipboard paste · drag-drop · size guard
// Submits via Web3Forms (free, GitHub-Pages compatible)
// ============================================================
(function () {
  "use strict";

  // ----- Web3Forms config -----
  // Form submissions are routed through api.web3forms.com. The recipient
  // email is bound to the access key on Web3Forms' side — it never appears
  // in this page source. Access keys are public-safe by design (rate-limited
  // and domain-locked on the Web3Forms dashboard).
  const ACCESS_KEY  = "49bf5f26-bacf-48e0-824b-57e18a3cf28c";
  const ACTION_URL  = "https://api.web3forms.com/submit";

  const MAX_FILE_BYTES   = 10 * 1024 * 1024;    // 10 MB per file
  const MAX_TOTAL_BYTES  = 25 * 1024 * 1024;    // 25 MB total (Web3Forms cap)
  const MAX_FILE_COUNT   = 10;

  // ----- Helpers -----
  const $ = sel => document.querySelector(sel);
  const fmtMB = bytes => (bytes / (1024 * 1024)).toFixed(2) + " MB";

  // ----- Theme toggle (reuses approach from quiz.js) -----
  const themeBtn = $("#themeBtn");
  const initialTheme = localStorage.getItem("feq_theme") || "light";
  document.documentElement.setAttribute("data-theme", initialTheme);
  themeBtn.textContent = initialTheme === "dark" ? "☀ Light" : "🌙 Dark";
  themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    themeBtn.textContent = next === "dark" ? "☀ Light" : "🌙 Dark";
    localStorage.setItem("feq_theme", next);
  });

  // ----- Wire form action + diagnostics fields -----
  const form = $("#feedbackForm");
  form.action = ACTION_URL;
  // Ensure access_key hidden input present (in case markup was edited)
  if (!form.querySelector('input[name="access_key"]')) {
    const k = document.createElement("input");
    k.type = "hidden"; k.name = "access_key"; k.value = ACCESS_KEY;
    form.appendChild(k);
  }

  $("#nextUrl").value = location.origin + location.pathname.replace(/feedback\.html.*$/, "feedback.html") + "?sent=1";
  $("#pageUrl").value = document.referrer || location.href;
  $("#userAgent").value = navigator.userAgent;

  // ----- Show success banner if redirected back with ?sent=1 -----
  if (new URLSearchParams(location.search).get("sent") === "1") {
    const banner = document.createElement("div");
    banner.className = "form-status success";
    banner.innerHTML = "✅ <b>Thanks!</b> Your feedback has been sent. / Phản hồi đã được gửi thành công.";
    banner.removeAttribute("hidden");
    form.parentNode.insertBefore(banner, form);
    history.replaceState({}, "", location.pathname);
  }

  // ============================================================
  // Attachment state
  // ============================================================
  const attachments = [];      // [{ id, file, url, type, name, size }]
  let nextAttachId = 1;

  function refreshAttachUI() {
    const grid = $("#thumbGrid");
    const empty = $("#dropEmptyMsg");
    grid.innerHTML = "";
    if (!attachments.length) {
      empty.classList.remove("hidden");
    } else {
      empty.classList.add("hidden");
      for (const a of attachments) {
        const div = document.createElement("div");
        div.className = "thumb-item";
        const isImg = a.type.startsWith("image/");
        const isVid = a.type.startsWith("video/");
        let previewHtml = "";
        if (isImg) {
          previewHtml = `<img class="thumb-preview" src="${a.url}" alt="">`;
        } else if (isVid) {
          previewHtml = `<video class="thumb-preview" src="${a.url}" muted></video>`;
        } else {
          previewHtml = `<div class="thumb-preview-fallback">📎</div>`;
        }
        const overLimit = a.size > MAX_FILE_BYTES;
        div.innerHTML = `
          ${previewHtml}
          <div class="thumb-name" title="${a.name}">${a.name}</div>
          <div class="thumb-size ${overLimit ? "over-limit" : ""}">${fmtMB(a.size)}${overLimit ? " · TOO BIG" : ""}</div>
          <button class="thumb-remove" type="button" data-id="${a.id}" title="Remove">✕</button>`;
        grid.appendChild(div);
      }
    }
    // Counter line
    $("#attachCount").textContent = `${attachments.length} file(s) attached`;
    const total = attachments.reduce((sum, a) => sum + a.size, 0);
    $("#attachSize").textContent = `${fmtMB(total)} total`;

    // Hook remove buttons
    grid.querySelectorAll(".thumb-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = +btn.dataset.id;
        const idx = attachments.findIndex(a => a.id === id);
        if (idx >= 0) {
          URL.revokeObjectURL(attachments[idx].url);
          attachments.splice(idx, 1);
          refreshAttachUI();
        }
      });
    });
  }

  function showStatus(kind, html) {
    const el = $("#formStatus");
    el.className = "form-status " + kind;
    el.innerHTML = html;
    el.hidden = false;
  }
  function clearStatus() { $("#formStatus").hidden = true; }

  function addFiles(fileList) {
    let added = 0, skippedSize = 0, skippedCount = 0;
    for (const f of fileList) {
      if (attachments.length + added >= MAX_FILE_COUNT) { skippedCount++; continue; }
      if (f.size > MAX_FILE_BYTES) { skippedSize++; }
      const url = URL.createObjectURL(f);
      attachments.push({
        id: nextAttachId++,
        file: f,
        url,
        type: f.type || "application/octet-stream",
        name: f.name || `paste-${Date.now()}.png`,
        size: f.size
      });
      added++;
    }
    refreshAttachUI();
    if (skippedSize > 0) {
      showStatus("error", `⚠ ${skippedSize} file(s) exceed the 10 MB / file limit and will block submission. Remove or compress them.`);
    } else if (skippedCount > 0) {
      showStatus("info", `Only the first ${MAX_FILE_COUNT} attachments are accepted per submission.`);
    } else {
      clearStatus();
    }
  }

  // ============================================================
  // File picker
  // ============================================================
  $("#btnPickFile").addEventListener("click", () => $("#filePicker").click());
  $("#filePicker").addEventListener("change", e => {
    addFiles(e.target.files);
    e.target.value = "";  // allow re-selecting the same file
  });

  // ============================================================
  // Drag and drop
  // ============================================================
  const dropZone = $("#dropZone");
  ["dragenter", "dragover"].forEach(evt => dropZone.addEventListener(evt, e => {
    e.preventDefault(); e.stopPropagation();
    dropZone.classList.add("drag-over");
  }));
  ["dragleave", "drop"].forEach(evt => dropZone.addEventListener(evt, e => {
    e.preventDefault(); e.stopPropagation();
    dropZone.classList.remove("drag-over");
  }));
  dropZone.addEventListener("drop", e => {
    if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  });

  // ============================================================
  // Clipboard paste anywhere on the page
  // ============================================================
  document.addEventListener("paste", e => {
    if (!e.clipboardData) return;
    const files = [];
    for (const item of e.clipboardData.items) {
      if (item.kind === "file") {
        const f = item.getAsFile();
        if (f) files.push(f);
      }
    }
    if (files.length) {
      e.preventDefault();
      addFiles(files);
      showStatus("info", `📋 Pasted ${files.length} file(s) from clipboard.`);
    }
  });

  $("#btnPasteHint").addEventListener("click", () => {
    showStatus("info", "Press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>+<kbd>V</kbd> anywhere on this page to paste a screenshot from your clipboard.");
  });

  // ============================================================
  // Take screenshot — cross-page region capture
  // Opens the quiz page in a small popup with ?fb_capture=1 so the
  // user can navigate to the offending question and select a region
  // with their cursor. The popup posts the resulting PNG back here
  // via postMessage, then closes itself.
  // ============================================================
  $("#btnScreenshot").addEventListener("click", () => {
    // Determine which page to open — prefer the referrer if it's this site,
    // else fall back to index.html.
    const sameSite = u => { try { return new URL(u).origin === location.origin; } catch (_) { return false; } };
    const target = (document.referrer && sameSite(document.referrer))
      ? document.referrer.split("#")[0]
      : "index.html";
    const sep = target.includes("?") ? "&" : "?";
    const url = target + sep + "fb_capture=1";

    const w = Math.min(window.screen.availWidth  - 60, 1280);
    const h = Math.min(window.screen.availHeight - 80, 900);
    const popup = window.open(url, "fe-quiz-capture",
      `width=${w},height=${h},menubar=no,toolbar=no,location=yes,resizable=yes,scrollbars=yes`);
    if (!popup) {
      showStatus("error", "Popup blocked. Allow pop-ups for this site, or use <b>Paste</b> / <b>Choose files</b> instead.");
      return;
    }
    showStatus("info", "📸 A popup window opened with the quiz — go to the page you want to report, drag-select the region, and it will be attached here automatically.");

    function onMsg(e) {
      if (e.source !== popup) return;
      if (!e.data || e.data.type !== "feq-region-capture") return;
      try {
        // e.data.dataUrl is a PNG data URL
        const bin = atob(e.data.dataUrl.split(",")[1]);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        const blob = new Blob([arr], { type: "image/png" });
        const file = new File([blob], `region-${Date.now()}.png`, { type: "image/png" });
        addFiles([file]);
        showStatus("success", "✅ Region captured and attached.");
      } catch (err) {
        showStatus("error", "Could not decode the captured image: " + err.message);
      }
      window.removeEventListener("message", onMsg);
      try { popup.close(); } catch (_) {}
    }
    window.addEventListener("message", onMsg);

    // If popup closed without sending an image, drop the listener
    const watcher = setInterval(() => {
      if (popup.closed) {
        clearInterval(watcher);
        window.removeEventListener("message", onMsg);
      }
    }, 800);
  });

  // ============================================================
  // Submission — inject attachments into the form before submit
  // ============================================================
  form.addEventListener("submit", e => {
    // Pre-flight: size guards
    if (attachments.some(a => a.size > MAX_FILE_BYTES)) {
      e.preventDefault();
      showStatus("error", "⚠ Some attachments exceed 10 MB. Remove or compress them, then try again.");
      return;
    }
    const total = attachments.reduce((sum, a) => sum + a.size, 0);
    if (total > MAX_TOTAL_BYTES) {
      e.preventDefault();
      showStatus("error", `⚠ Total attachment size ${fmtMB(total)} exceeds the 25 MB submission cap. Remove a file or attach fewer.`);
      return;
    }

    // Re-attach files via the form's own DataTransfer machinery —
    // FormSubmit reads files from <input type="file" name="attachment">.
    // We replace any previous attachment input with one carrying all selected files.
    document.querySelectorAll('input[type="file"][name="attachment"]').forEach(n => n.remove());
    if (attachments.length) {
      const realInput = document.createElement("input");
      realInput.type = "file";
      realInput.name = "attachment";
      realInput.multiple = true;
      realInput.style.display = "none";
      const dt = new DataTransfer();
      attachments.forEach(a => dt.items.add(a.file));
      realInput.files = dt.files;
      form.appendChild(realInput);
    }

    // Disable submit so user doesn't double-click while upload happens
    const btn = $("#btnSubmit");
    btn.disabled = true;
    btn.innerHTML = "⏳ Sending…";
    showStatus("info", "Sending your feedback — this may take a few seconds if you attached files.");
    // Let the form submit normally (multipart/form-data, native POST)
  });

  // First paint
  refreshAttachUI();
})();
