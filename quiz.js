// FE Electrical Quiz Engine v2 — with timer + submit-then-reveal flow
// (c) Hai Nguyen — open for personal study use

(function () {
  "use strict";

  // ============================================================
  // State
  // ============================================================
  const BREAK_DURATION = 15 * 60; // 15 minutes

  let state = {
    mode: null,                  // "fullMock" | "chapter" | "quick"
    selectedChapters: [],
    questions: [],
    currentIdx: 0,
    answers: [],                 // { selected, correct, chapterId, elapsedAtAnswer }
    tentativeSelection: null,    // index of choice user has clicked but not yet submitted
    revealed: false,             // whether current question's solution is shown
    theme: localStorage.getItem("feq_theme") || "light",
    // Timer
    timerSeconds: 0,             // total allowed for this mode (0 = no limit)
    elapsedSeconds: 0,           // counts up from 0
    timerInterval: null,
    warningsFired: new Set(),    // which warning thresholds have already fired
    // Break state
    isOnBreak: false,
    breakInterval: null,
    breakRemaining: 0,           // seconds remaining in current break
    breaksUsed: 0,               // count of breaks taken
    totalBreakTime: 0,           // total seconds spent on breaks
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  // ============================================================
  // Utilities
  // ============================================================
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function randInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function sample(pool, n) { return shuffle(pool).slice(0, Math.min(n, pool.length)); }
  function fmtTime(sec) {
    const neg = sec < 0;
    sec = Math.abs(sec);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    const str = h > 0
      ? `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`
      : `${m}:${String(s).padStart(2,"0")}`;
    return (neg ? "+" : "") + str;
  }

  // ============================================================
  // Question selection
  // ============================================================
  function pickFullMockQuestions() {
    const all = [];
    for (const ch of QUESTION_BANK.chapters) {
      const n = randInt(ch.fe_count[0], ch.fe_count[1]);
      const picked = sample(ch.questions, n);
      for (const q of picked) {
        all.push({ ...q, chapterId: ch.id, chapterName: ch.name_en, chapterNameVN: ch.name_vn });
      }
    }
    return shuffle(all);
  }
  function pickChapterQuestions(chapterIds) {
    const all = [];
    for (const ch of QUESTION_BANK.chapters) {
      if (!chapterIds.includes(ch.id)) continue;
      const picked = sample(ch.questions, ch.questions.length);
      for (const q of picked) {
        all.push({ ...q, chapterId: ch.id, chapterName: ch.name_en, chapterNameVN: ch.name_vn });
      }
    }
    return shuffle(all);
  }
  function pickQuickQuestions(n = 20) {
    const all = [];
    for (const ch of QUESTION_BANK.chapters) {
      for (const q of ch.questions) {
        all.push({ ...q, chapterId: ch.id, chapterName: ch.name_en, chapterNameVN: ch.name_vn });
      }
    }
    return sample(all, n);
  }
  function prepareQuestion(q) {
    const indices = shuffle([0, 1, 2, 3]);
    const displayChoices = indices.map(i => q.choices[i]);
    const displayCorrect = indices.indexOf(q.correct);
    return { ...q, displayChoices, displayCorrect };
  }

  // ============================================================
  // MathJax helper
  // ============================================================
  function typesetMath(elem) {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise(elem ? [elem] : undefined).catch((e) => console.warn("MathJax err", e));
    }
  }

  // ============================================================
  // Theme
  // ============================================================
  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("feq_theme", theme);
    $("#themeBtn").textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
  }

  // ============================================================
  // Timer
  // ============================================================
  function timerLimitForMode() {
    if (state.mode === "fullMock") return 5.5 * 3600;       // 5.5 hours = 19,800 s
    if (state.mode === "chapter")  return state.questions.length * 180; // 3 min/Q
    if (state.mode === "quick")    return 20 * 180;          // 60 min
    return 0;
  }

  function startTimer() {
    state.timerSeconds = timerLimitForMode();
    state.elapsedSeconds = 0;
    state.warningsFired = new Set();
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(tickTimer, 1000);
    renderTimer();
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function tickTimer() {
    state.elapsedSeconds++;
    renderTimer();
    const remaining = state.timerSeconds - state.elapsedSeconds;
    // Warnings — unobtrusive toasts
    if (remaining === 1800 && !state.warningsFired.has(1800)) { // 30 min
      state.warningsFired.add(1800);
      showToast("⏰ 30 minutes remaining / Còn 30 phút", "");
    } else if (remaining === 600 && !state.warningsFired.has(600)) { // 10 min
      state.warningsFired.add(600);
      showToast("⏰ 10 minutes remaining / Còn 10 phút", "danger");
    } else if (remaining === 60 && !state.warningsFired.has(60)) {  // 1 min
      state.warningsFired.add(60);
      showToast("⚠️ 1 minute remaining / Còn 1 phút", "danger");
    } else if (remaining === 0 && !state.warningsFired.has(0)) {   // hết giờ
      state.warningsFired.add(0);
      showToast("🛎️ Time's up — bạn có thể tiếp tục để học, nhưng đã hết giờ thi thật.", "over");
    }
  }

  function renderTimer() {
    let timerEl = document.getElementById("feqTimer");
    if (!timerEl) {
      timerEl = document.createElement("div");
      timerEl.id = "feqTimer";
      timerEl.className = "timer";
      document.body.appendChild(timerEl);
    }
    const total = state.timerSeconds;
    if (total <= 0) { timerEl.remove(); return; }
    const remaining = total - state.elapsedSeconds;
    if (state.isOnBreak) {
      timerEl.className = "timer paused";
      timerEl.innerHTML = `<span class="label">⏸ Paused</span><span class="clock">${fmtTime(remaining)}</span>`;
      return;
    }
    timerEl.className = "timer" +
      (remaining < 0 ? " over" :
       remaining <= 600 ? " danger" :
       remaining <= 1800 ? " warn" : "");
    const label = remaining < 0 ? "Overtime" : "Time left";
    timerEl.innerHTML = `<span class="label">${label}</span><span class="clock">${fmtTime(remaining)}</span>`;
  }

  function removeTimer() {
    stopTimer();
    const el = document.getElementById("feqTimer");
    if (el) el.remove();
  }

  // ============================================================
  // Break (15 minutes, pauses main timer)
  // ============================================================
  function startBreak() {
    if (state.isOnBreak) return;
    state.isOnBreak = true;
    state.breakRemaining = BREAK_DURATION;
    state.breaksUsed++;
    stopTimer(); // pause main timer
    renderBreakOverlay();
    state.breakInterval = setInterval(tickBreak, 1000);
    renderTimer(); // update timer chip to show "Paused"
  }

  function tickBreak() {
    state.breakRemaining--;
    state.totalBreakTime++;
    updateBreakOverlay();
    if (state.breakRemaining <= 0) {
      endBreak(true); // auto-end
    }
  }

  function endBreak(auto = false) {
    if (!state.isOnBreak) return;
    if (state.breakInterval) {
      clearInterval(state.breakInterval);
      state.breakInterval = null;
    }
    state.isOnBreak = false;
    // Remove overlay
    const overlay = document.getElementById("breakOverlay");
    if (overlay) overlay.remove();
    // Resume main timer
    if (state.timerSeconds > 0 && !state.timerInterval) {
      state.timerInterval = setInterval(tickTimer, 1000);
    }
    renderTimer();
    if (auto) {
      showToast("⏰ Break ended automatically — quiz resumed / Hết giờ nghỉ — đã tiếp tục", "");
    }
    // Re-typeset math in case overlay covered up rendered content
    typesetMath();
  }

  function renderBreakOverlay() {
    // If overlay already exists, just update
    if (document.getElementById("breakOverlay")) return;
    const overlay = document.createElement("div");
    overlay.className = "break-overlay";
    overlay.id = "breakOverlay";
    overlay.innerHTML = `
      <div class="break-card">
        <div class="icon">☕</div>
        <h2>Break time / Giờ nghỉ giải lao</h2>
        <div class="subtitle">
          Stretch, grab water, breathe. Main quiz timer is paused.
          <br><i>Thư giãn một chút. Đồng hồ thi đã được tạm dừng.</i>
        </div>
        <div class="countdown" id="breakCountdown">${fmtTime(state.breakRemaining)}</div>
        <div class="progress-bar"><div class="progress-fill" id="breakProgress" style="width:100%"></div></div>
        <button class="resume-btn" id="resumeBtn">▶ Resume quiz / Tiếp tục thi</button>
        <div class="quote" id="breakQuote">${pickBreakQuote()}</div>
      </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById("resumeBtn").addEventListener("click", () => endBreak(false));
  }

  function updateBreakOverlay() {
    const cdEl = document.getElementById("breakCountdown");
    const pgEl = document.getElementById("breakProgress");
    if (!cdEl) return;
    cdEl.textContent = fmtTime(state.breakRemaining);
    cdEl.className = "countdown" +
      (state.breakRemaining <= 60 ? " danger" :
       state.breakRemaining <= 180 ? " warn" : "");
    if (pgEl) {
      const pct = (state.breakRemaining / BREAK_DURATION) * 100;
      pgEl.style.width = pct + "%";
    }
  }

  function pickBreakQuote() {
    const quotes = [
      "“Rest when you're weary. Refresh and renew yourself.” — Ralph Marston",
      "“Take rest; a field that has rested gives a bountiful crop.” — Ovid",
      "“Sometimes the most productive thing you can do is relax.” — Mark Black",
      "“Almost everything will work again if you unplug it for a few minutes, including you.” — Anne Lamott",
      "“Học mà không nghỉ là cách phí phạm sức học hiệu quả nhất.” — proverb",
      "“Eat. Drink water. Stand up. Stretch your back. You'll thank yourself.” — your future self",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // ============================================================
  // Toast notification (auto-dismiss, non-blocking)
  // ============================================================
  function showToast(message, severity = "") {
    const toast = document.createElement("div");
    toast.className = "toast" + (severity ? " " + severity : "");
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5200);
  }

  // ============================================================
  // Home
  // ============================================================
  function renderHome() {
    removeTimer();
    state.mode = null;
    state.selectedChapters = [];
    $("#main").innerHTML = `
      <div class="card">
        <h2>🎯 Chọn chế độ luyện thi / Choose mode</h2>
        <p style="color:var(--text-soft);font-size:.95rem">
          Mọi câu hỏi và đáp án sẽ <b>random lại mỗi lần</b> — bạn có thể luyện đi luyện lại mà không bị thuộc lòng.
          <br><i>Questions and answers are randomized each attempt — practice deeply without memorizing.</i>
        </p>

        <div class="mode-grid">
          <div class="mode-card" data-mode="fullMock">
            <div class="title">📝 Full FE Mock Exam (~110 câu, 5h30')</div>
            <div class="desc">
              Bài thi mô phỏng đúng FE thật: 11–17 Math, 11–17 Circuits, ... mỗi chương random trong FE range. <b>Timer 5.5 giờ</b> + cảnh báo 30/10/1 phút.
              <br>Full simulation matching FE distribution. Section + overall scorecard at the end.
            </div>
          </div>
          <div class="mode-card" data-mode="chapter">
            <div class="title">📚 Chapter Practice (chọn chương)</div>
            <div class="desc">
              Chọn 1 hoặc nhiều chương để luyện sâu. Timer 3 phút/câu (có thể vượt nếu cần).
              <br>Drill specific chapters. All questions from selected chapters, randomized.
            </div>
          </div>
          <div class="mode-card" data-mode="quick">
            <div class="title">⚡ Quick Quiz (20 câu, 60 phút)</div>
            <div class="desc">
              20 câu random từ toàn bộ bank — phù hợp ôn nhanh ~10–15 phút.
              <br>Fast warm-up. 20 random questions across all chapters.
            </div>
          </div>
        </div>

        <div id="chapterPicker" class="hidden">
          <h3 style="margin-top:1rem">📂 Chọn chương / Pick chapters</h3>
          <div class="chapter-grid" id="chapterGrid"></div>
          <div class="hint">Click vào chương để chọn / Click chapters to toggle. Total selected: <b id="chapCount">0</b></div>
        </div>

        <div class="btn-row" id="startRow" style="display:none">
          <button class="btn" id="startBtn">▶ Bắt đầu / Start</button>
          <button class="btn-outline btn" id="resetBtn">↺ Reset</button>
        </div>
      </div>

      <div class="card">
        <h3>📋 How the quiz works / Cách hoạt động</h3>
        <p style="font-size:.93rem;line-height:1.65;color:var(--text-soft)">
          <b>1.</b> Click vào lựa chọn A/B/C/D → câu trả lời chỉ <b>được ghi nhận</b> sau khi bạn nhấn <b>Submit</b>.
          <br><b>2.</b> Sau khi submit → ngay lập tức xem <b>solution chi tiết</b> (concept, steps, answer, check).
          <br><b>3.</b> Timer hiện góc trên-phải, đổi màu khi gần hết giờ. Hết giờ vẫn tiếp tục được — chỉ là practice.
          <br><b>4.</b> Submit → bài chấm theo từng chương + tổng điểm.
        </p>
      </div>

      <div class="card">
        <h3>ℹ️ About this quiz</h3>
        <p style="font-size:.93rem;line-height:1.65">
          Comprehensive coverage of all <b>17 FE Electrical & Computer topics</b>,
          based on <b>${QUESTION_BANK.meta.handbook}</b>.
          Each question matches FE-style breadth and difficulty, with detailed step-by-step solutions.
          <br><br>
          <span class="flag primary">Submit → Reveal</span>
          <span class="flag primary">5.5 hr timer</span>
          <span class="flag warn">Bilingual EN/VN</span>
          <span class="flag primary">MathJax</span>
        </p>
      </div>
    `;

    $$(".mode-card").forEach(card => {
      card.addEventListener("click", () => {
        $$(".mode-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        const mode = card.dataset.mode;
        state.mode = mode;
        $("#chapterPicker").classList.toggle("hidden", mode !== "chapter");
        if (mode === "chapter") {
          renderChapterPicker();
          updateStartRow();
        } else {
          $("#startRow").style.display = "flex";
        }
      });
    });

    $("#startBtn") && $("#startBtn").addEventListener("click", startQuiz);
    $("#resetBtn") && $("#resetBtn").addEventListener("click", () => location.reload());

    typesetMath($("#main"));
  }

  function renderChapterPicker() {
    const grid = $("#chapterGrid");
    grid.innerHTML = "";
    for (const ch of QUESTION_BANK.chapters) {
      const chip = document.createElement("div");
      chip.className = "chapter-chip";
      chip.dataset.id = ch.id;
      chip.innerHTML = `
        <b>${ch.id}. ${ch.name_en}</b>
        <span class="meta">${ch.name_vn} · ${ch.questions.length} câu</span>`;
      chip.addEventListener("click", () => {
        const id = ch.id;
        if (state.selectedChapters.includes(id)) {
          state.selectedChapters = state.selectedChapters.filter(x => x !== id);
          chip.classList.remove("selected");
        } else {
          state.selectedChapters.push(id);
          chip.classList.add("selected");
        }
        $("#chapCount").textContent = state.selectedChapters.length;
        updateStartRow();
      });
      grid.appendChild(chip);
    }
  }
  function updateStartRow() {
    const row = $("#startRow");
    if (!row) return;
    row.style.display = (state.mode === "chapter" && state.selectedChapters.length === 0) ? "none" : "flex";
  }

  function startQuiz() {
    let raw;
    if (state.mode === "fullMock") raw = pickFullMockQuestions();
    else if (state.mode === "chapter") raw = pickChapterQuestions(state.selectedChapters);
    else raw = pickQuickQuestions(20);

    if (raw.length === 0) { alert("Không có câu hỏi! / No questions."); return; }

    state.questions = raw.map(prepareQuestion);
    state.currentIdx = 0;
    state.answers = [];
    state.tentativeSelection = null;
    state.revealed = false;
    state.isOnBreak = false;
    state.breaksUsed = 0;
    state.totalBreakTime = 0;
    startTimer();
    renderQuestion();
  }

  // ============================================================
  // Question rendering
  // ============================================================
  function renderQuestion() {
    state.tentativeSelection = null;
    state.revealed = false;
    const total = state.questions.length;
    const idx = state.currentIdx;
    const q = state.questions[idx];
    const pct = ((idx) / total) * 100;
    const letters = ["A", "B", "C", "D"];

    $("#main").innerHTML = `
      <div class="card">
        <div class="progress-text">
          <span>Câu ${idx + 1} / ${total}</span>
          <span><span class="flag primary">Ch ${q.chapterId}: ${q.chapterName}</span></span>
        </div>
        <div class="progress"><div class="progress-fill" style="width:${pct}%"></div></div>

        <div class="q-meta">${q.chapterNameVN}</div>
        <div class="q-statement" id="qStatement">${q.q}</div>

        <div class="choices" id="choicesBox">
          ${q.displayChoices.map((c, i) => `
            <div class="choice" data-idx="${i}">
              <span class="letter">${letters[i]}</span>
              <span class="text">${c}</span>
            </div>`).join("")}
        </div>

        <div id="feedbackBox"></div>

        <div class="btn-row" id="qBtnRow">
          <button class="btn btn-submit" id="submitBtn" disabled>📝 Submit answer / Nộp đáp án</button>
          <button class="btn btn-outline" id="skipBtn">⏭ Skip</button>
          <button class="btn btn-break" id="breakBtn">☕ Break 15'</button>
          <button class="btn btn-outline" id="exitBtn">🛑 End quiz</button>
        </div>
        <div class="hint" id="hintLine">Chọn A/B/C/D rồi nhấn <b>Submit</b> để xem lời giải. / Pick a choice, then click <b>Submit</b> to reveal the solution.</div>
      </div>
    `;

    $$("#choicesBox .choice").forEach(el => {
      el.addEventListener("click", () => {
        if (state.revealed) return; // can't change after submit
        const picked = parseInt(el.dataset.idx, 10);
        state.tentativeSelection = picked;
        $$("#choicesBox .choice").forEach(e => e.classList.remove("pending"));
        el.classList.add("pending");
        $("#submitBtn").disabled = false;
      });
    });

    $("#submitBtn").addEventListener("click", () => {
      if (state.tentativeSelection === null) return;
      submitAnswer(state.tentativeSelection);
    });

    $("#skipBtn").addEventListener("click", () => {
      // Skip = no answer recorded as wrong (selected: -1)
      state.answers.push({ selected: -1, correct: false, chapterId: q.chapterId, elapsedAtAnswer: state.elapsedSeconds });
      next();
    });

    $("#exitBtn").addEventListener("click", () => {
      if (confirm("Kết thúc quiz và xem kết quả? / End and view results?")) {
        renderResults();
      }
    });

    $("#breakBtn").addEventListener("click", startBreak);

    typesetMath($("#main"));
  }

  // Commit answer + reveal solution
  function submitAnswer(picked) {
    const q = state.questions[state.currentIdx];
    const correct = picked === q.displayCorrect;
    state.answers.push({
      selected: picked,
      correct,
      chapterId: q.chapterId,
      elapsedAtAnswer: state.elapsedSeconds,
    });
    state.revealed = true;

    // Style choices to show right/wrong
    $$("#choicesBox .choice").forEach(el => {
      const i = parseInt(el.dataset.idx, 10);
      el.classList.remove("pending");
      el.classList.add("disabled");
      if (i === q.displayCorrect) el.classList.add("correct");
      else if (i === picked) el.classList.add("wrong");
    });

    const letters = ["A", "B", "C", "D"];
    const isLast = state.currentIdx === state.questions.length - 1;

    $("#feedbackBox").innerHTML = `
      <div class="solution-box">
        <div class="feedback-line ${correct ? "right" : "wrong"}">
          ${correct
            ? "✅ Correct! / Chính xác!"
            : `❌ Incorrect. / Sai rồi. Correct answer: <b>${letters[q.displayCorrect]}</b>`}
        </div>
        <div class="title">💡 Solution / Lời giải chi tiết</div>
        <div id="solutionContent">${q.solution}</div>
        <div class="ref">📖 ${q.ref || "FE Reference Handbook"}</div>
      </div>
    `;

    $("#qBtnRow").innerHTML = `
      <button class="btn" id="nextBtn">${isLast ? "🏁 Xem kết quả / See results" : "➡ Câu tiếp / Next question"}</button>
      <button class="btn btn-break" id="breakBtn2">☕ Break 15'</button>
      <button class="btn btn-outline" id="exitBtn2">🛑 End quiz</button>
    `;
    $("#nextBtn").addEventListener("click", next);
    $("#breakBtn2").addEventListener("click", startBreak);
    $("#exitBtn2").addEventListener("click", () => {
      if (confirm("Kết thúc và xem kết quả?")) renderResults();
    });
    const hintLine = $("#hintLine");
    if (hintLine) hintLine.remove();

    typesetMath($("#main"));
  }

  function next() {
    if (state.currentIdx >= state.questions.length - 1) {
      renderResults();
    } else {
      state.currentIdx++;
      renderQuestion();
    }
  }

  // ============================================================
  // Results page
  // ============================================================
  function renderResults() {
    stopTimer();
    const total = state.answers.length;
    const correct = state.answers.filter(a => a.correct).length;
    const skipped = state.answers.filter(a => a.selected === -1).length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    const gradeClass = pct >= 70 ? "good" : pct >= 50 ? "warn" : "bad";
    const verdict = pct >= 70 ? "🎉 Excellent! Pass-ready"
                  : pct >= 50 ? "👍 Good progress — keep practicing"
                  : "📚 Needs more review — don't give up!";

    // Per-chapter breakdown
    const perCh = {};
    for (const a of state.answers) {
      perCh[a.chapterId] = perCh[a.chapterId] || { correct: 0, total: 0 };
      perCh[a.chapterId].total++;
      if (a.correct) perCh[a.chapterId].correct++;
    }
    const chapMap = Object.fromEntries(QUESTION_BANK.chapters.map(c => [c.id, c]));
    const tableRows = Object.keys(perCh)
      .map(id => parseInt(id, 10))
      .sort((a, b) => a - b)
      .map(id => {
        const ch = chapMap[id];
        const r = perCh[id];
        const p = Math.round((r.correct / r.total) * 100);
        const cls = p >= 70 ? "good" : p >= 50 ? "warn" : "bad";
        return `<tr>
          <td>${id}. ${ch.name_en} <span style="color:var(--text-soft)">— ${ch.name_vn}</span></td>
          <td style="text-align:center">${r.correct} / ${r.total}</td>
          <td class="score-cell ${cls}" style="text-align:right">${p}%</td>
        </tr>`;
      }).join("");

    // Time stats
    const usedTime = state.elapsedSeconds;
    const limitTime = state.timerSeconds;
    const overTime = limitTime > 0 && usedTime > limitTime;

    $("#main").innerHTML = `
      <div class="card">
        <h2>🏁 Kết quả / Quiz Results</h2>
        <div class="score-summary">
          <div class="score-tile ${gradeClass}"><div class="num">${pct}%</div><div class="label">Total Score</div></div>
          <div class="score-tile good"><div class="num">${correct}</div><div class="label">Correct</div></div>
          <div class="score-tile bad"><div class="num">${total - correct - skipped}</div><div class="label">Wrong</div></div>
          <div class="score-tile warn"><div class="num">${skipped}</div><div class="label">Skipped</div></div>
        </div>
        <p style="font-size:1.05rem;text-align:center;margin:1rem 0;font-weight:600;color:var(--primary)">${verdict}</p>
        ${limitTime > 0 ? `
        <div style="text-align:center;color:${overTime ? 'var(--bad)' : 'var(--text-soft)'};font-size:.95rem;margin-top:.5rem">
          ⏱ Time used: <b>${fmtTime(usedTime)}</b> of <b>${fmtTime(limitTime)}</b>
          ${overTime ? ` — <b>over by ${fmtTime(usedTime - limitTime)}</b>` : ` (${Math.round(usedTime/limitTime*100)}% of allotted)`}
        </div>
        ${state.breaksUsed > 0 ? `
        <div style="text-align:center;color:var(--text-soft);font-size:.92rem;margin-top:.35rem">
          ☕ Breaks taken: <b>${state.breaksUsed}</b> (total ${fmtTime(state.totalBreakTime)})
        </div>` : ""}` : ""}
      </div>

      <div class="card">
        <h3>📊 Per-chapter breakdown / Theo từng chương</h3>
        <table class="section-table">
          <thead><tr><th>Chapter</th><th style="text-align:center">Score</th><th style="text-align:right">%</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>

      <div class="card">
        <h3>↻ Tiếp tục luyện / Continue practicing</h3>
        <p style="color:var(--text-soft)">
          Bắt đầu lại để random một set câu hỏi mới — questions sẽ được trộn lại, choices cũng sẽ shuffle khác.
          <br><i>Start again — questions and choices reshuffle.</i>
        </p>
        <div class="btn-row">
          <button class="btn" id="againBtn">↻ Làm lại cùng mode / Retry same mode</button>
          <button class="btn-outline btn" id="homeBtn">🏠 Về Home / Back to home</button>
        </div>
      </div>
    `;

    $("#againBtn").addEventListener("click", startQuiz);
    $("#homeBtn").addEventListener("click", renderHome);
    removeTimer();
  }

  // ============================================================
  // Init
  // ============================================================
  document.addEventListener("DOMContentLoaded", () => {
    setTheme(state.theme);
    $("#themeBtn").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
    renderHome();
  });
})();
