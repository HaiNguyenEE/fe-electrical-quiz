# FE Electrical & Computer — Exam Workshop

A bilingual (English / Vietnamese) interactive practice workshop for the **NCEES FE Electrical & Computer Exam**, aligned with the FE Reference Handbook v10.0 (effective July 2020).

🌐 **Live demo:** _will appear here after GitHub Pages deploy (see below)_

---

## What it does

| Feature | Description |
|---|---|
| **3 practice modes** | Full timed mock matching the real FE distribution · Chapter drill on any single topic · Quick 20-question warm-up |
| **Real exam timing** | Configurable countdown timer · color-coded warnings as time runs short · the workshop keeps running after time so you can finish learning the questions |
| **15-minute break** | One tap to pause the main clock — matches the real FE’s optional break. Full-screen countdown overlay, resume early at any time, or auto-resume after 15 minutes. |
| **Submit → Reveal** | Click an answer, press **Submit**, and only then does the worked solution appear. Forces a real commitment before the explanation. |
| **Randomized every attempt** | Both the question order and the answer-choice order reshuffle on every run, so position never gives anything away. |
| **Structured worked solutions** | Every problem ships with a **Concept → Numbered steps → Final answer → Verification check** layout — the same depth as a textbook example, not a one-line answer. |
| **Per-chapter scorecard** | Total score plus a breakdown by topic and time used, shown at the end of every session. |
| **MathJax rendering** | LaTeX formulas render cleanly on phone, tablet, and desktop. |
| **Dark / light theme** | Toggle in the top-right; preference saved in `localStorage`. |
| **Bilingual EN / VN** | Statement, concept, steps, answer, and check are all written in both languages where helpful. |
| **Continuously growing question bank** | All 17 FE Electrical chapters are covered. New problems are added regularly in additional `questions-extra*.js` files — drop them in and they’re picked up automatically. |
| **Responsive** | Works on phone, tablet, desktop. |
| **Zero build step** | Pure HTML/CSS/JS. Drop on GitHub Pages, on Netlify, or just open `index.html` locally. |

---

## Topic coverage

The workshop spans the full NCEES FE Electrical & Computer specification:

| # | Topic | NCEES range |
|---|---|---:|
| 1 | Mathematics | 11–17 |
| 2 | Probability & Statistics | 4–6 |
| 3 | Ethics & Professional Practice | 4–6 |
| 4 | Engineering Economics | 5–8 |
| 5 | Properties of Electrical Materials | 4–6 |
| 6 | Circuit Analysis (DC & AC) | 11–17 |
| 7 | Linear Systems | 5–8 |
| 8 | Signal Processing | 5–8 |
| 9 | Electronics | 7–11 |
| 10 | Power Systems | 8–12 |
| 11 | Electromagnetics | 4–6 |
| 12 | Control Systems | 6–9 |
| 13 | Communications | 5–8 |
| 14 | Computer Networks | 4–6 |
| 15 | Digital Systems | 8–12 |
| 16 | Computer Systems | 5–8 |
| 17 | Software Engineering | 4–6 |

---

## Deploy to GitHub Pages

### Option A — Web UI

1. Create a new GitHub repo (e.g. `fe-electrical-quiz`).
2. Upload every file in this folder to the repo root (drag-and-drop in GitHub web UI works).
3. **Settings → Pages → Source = "Deploy from a branch" → Branch = `main` / `(root)` → Save.**
4. After ~1 minute the workshop is live at `https://<your-username>.github.io/fe-electrical-quiz/`.

### Option B — git command line

```bash
git init
git add .
git commit -m "FE Electrical & Computer Exam Workshop"
git branch -M main
git remote add origin https://github.com/<your-username>/fe-electrical-quiz.git
git push -u origin main
# Then on GitHub: Settings → Pages → Source = main / (root) → Save
```

### Option C — Custom domain

After Pages is working, add a `CNAME` file at the repo root containing your domain (e.g. `fequiz.example.com`) and add a CNAME DNS record at your registrar pointing to `<your-username>.github.io`.

---

## Local development

No build step. Open `index.html` in any modern browser, or run a local static server so MathJax and relative paths behave as in production:

```bash
# Python 3
python3 -m http.server 8000
# Visit http://localhost:8000

# Node
npx serve .
```

---

## Adding new questions

The bank lives across `questions.js` (chapter scaffolding) and `questions-extra*.js` (extension packs). To add more, append to an existing extension pack or create `questions-extra<N+1>.js` following the same pattern, then add a `<script>` tag in `index.html` to load it.

Schema:

```js
{
  q: "Your question text, supports $LaTeX$ inline and $$display$$.",
  choices: ["correct answer", "distractor 1", "distractor 2", "distractor 3"],
  correct: 0,
  solution: S({
    c: "Concept — why this formula applies, in one or two sentences.",
    s: [
      "Step 1 — what you compute first, with formula $x = \\ldots$",
      "Step 2 — next step",
      "Step 3 — combine"
    ],
    a: "Final boxed answer.",
    v: "Sanity check or verification (optional but encouraged)."
  })
}
```

Always set `correct: 0`. The quiz engine reshuffles choices at runtime, so position is never a hint.

### Tips for good questions

- **Plausible distractors.** Common mistakes (sign error, off-by-one, unit slip) make stronger wrong answers than random numbers.
- **Cite the handbook page when relevant.** Helps the reader trace the formula source.
- **Use LaTeX.** Wrap inline math in `$ … $`. Use `$$ … $$` for centered display math.
- **Bilingual statements** where a translation aids comprehension.

---

## Feedback channel

The workshop ships with a built-in feedback page (`feedback.html`) and a floating button at the bottom-right of every page. Users can attach screenshots, video clips, or any file up to **10 MB per file** (25 MB total per message). The form supports three convenience features beyond a basic file picker:

- **Take screenshot** button — uses the browser’s `getDisplayMedia` API to capture a screen region and auto-attach it (no native screenshot tool needed).
- **Paste from clipboard** — press `Cmd`/`Ctrl`+`V` anywhere on the feedback page to paste an image you copied from any screenshot tool.
- **Drag &amp; drop** — drop any file onto the dotted area.

### One-time recipient setup

The form posts to [FormSubmit.co](https://formsubmit.co), a free relay service that works on static hosting (GitHub Pages, Netlify, etc.). The recipient email is base64-obfuscated in page source to deter spam crawlers. To upgrade to FormSubmit’s **fully hidden** mode:

1. Push the site live and submit one test message through the feedback form.
2. FormSubmit emails the recipient address with an activation link — click it.
3. After activation FormSubmit reveals a random hash, e.g. `https://formsubmit.co/abc123xyz`.
4. Open `feedback.js`, set `USE_HASH = true` and paste the hash into `RECIPIENT_HASH`.
5. Commit and push. The email address is now completely absent from the public page source.

## License & disclaimer

- Not affiliated with NCEES, with any review provider, or with any examination body.
- For personal study use only. Please continue to use the official FE Reference Handbook and licensed prep materials as your authoritative source.
- Question content is original or paraphrased from public-domain examples; no NCEES exam content is reproduced.
- Code: MIT License — fork it, extend it, deploy your own.

---

## Credits

Curated by **Hai Nguyen** — B.S. Electrical Engineering, California State University, Long Beach. Built while preparing for the FE Electrical & Computer exam. LaTeX rendering by [MathJax 3](https://www.mathjax.org/). The structured-solution template is inspired by, but does not copy from, the layout conventions of commercial review courses.

If you find a typo or a wrong answer, open an issue or send a pull request — every correction helps the next reader.

> *"Excellence lives in the details — practice deliberately, understand deeply, and walk into the exam with quiet confidence."*
