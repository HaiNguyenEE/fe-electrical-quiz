# FE Workshop — Question-Bank Progress Tracker

> Internal note: **not** referenced from the live site. Used by Hai + Claude to track
> what has been added and what is still missing toward the 3,000-question target.

## Current state (last updated: session of 2026-05-17)

| Ch | Topic                                  | Bank | NCEES range | Notes |
|---:|----------------------------------------|-----:|------------:|-------|
| 1  | Mathematics                            | 140  | 11–17       | Added 10 new in extra11 (Taylor, ODE, complex, projection, line integral, eigenvalues). |
| 2  | Probability & Statistics               | 102  | 4–6         | Added 10 (Bayes, Poisson, normal CDF, regression, CI semantics). |
| 3  | Ethics & Professional Practice         |  46  | 4–6         | Added 10 (gifts, safety, competence, certification, conflicts, advertising). |
| 4  | Engineering Economics                  |  80  | 5–8         | Added 10 (PW, FW of annuity, depreciation, EAR, NPV, IRR, B/C, capitalized cost). |
| 5  | Properties of Electrical Materials     |  55  | 4–6         | Added 10 (resistivity, capacitance, $\alpha_T$, energy storage, $n_i$, Hall, ACSR, Curie). |
| 6  | Circuit Analysis (DC & AC)             | 188  | 11–17       | Added 10 (RLC resonance/Q, 3-phase, time constant, Norton↔Thevenin, op-amp gain). |
| 7  | Linear Systems                         |  89  | 5–8         | Added 10 (BIBO, TF poles/zeros, FVT, convolution, bandwidth, time-shift). |
| 8  | Signal Processing                      |  85  | 5–8         | Added 10 (Nyquist, ADC quantization, $z$-transform, FIR ops, FFT cost, bilinear). |
| 9  | Electronics                            | 154  | 7–11        | Added 10 (Shockley, BJT/MOSFET active, op-amps, rectifier, CE gain, CMOS, Zener, Schmitt). |
| 10 | Power Systems                          | 135  | 8–12        | Added 10 (3-phase power, PF correction, transformer ratios, synchronous speed, slip, per-unit). |
| 11 | Electromagnetics                       |  67  | 4–6         | Added 10 (Coulomb, $E$ point, $F=BIL$, Faraday, $c$, $\eta_0$, BC, skin depth). |
| 12 | Control Systems                        | 103  | 6–9         | Added 10 (closed-loop, ss-error, Bode, Routh, phase margin, PID, root locus, state-space). |
| 13 | Communications                         |  85  | 5–8         | Added 10 (AM/FM index, Shannon, QPSK, NF, BER, TDM/FDM, cellular reuse, DSB-SC, PCM). |
| 14 | Computer Networks                      |  68  | 4–6         | Added 10 (OSI L3, CIDR, TCP, ports, BDP, CSMA/CD, Hamming, DNS, MAC, IPv4). |
| 15 | Digital Systems                        | 131  | 8–12        | Added 10 (binary, two's complement, Boolean simplification, XOR, K-map, setup/hold, latch vs FF). |
| 16 | Computer Systems                       |  85  | 5–8         | Added 10 (cache EAT, pipeline, virtual memory, Amdahl, RISC/CISC, endianness, DMA, MIPS). |
| 17 | Software Engineering                   |  75  | 4–6         | Added 10 (big-O, hash, stack, mergesort, encapsulation, agile, linked list, CC, SQL JOIN, race). |

**Total in bank: 1,823 questions** (1,518 from earlier sessions + 170 in extra11 + 93 in extra12 + 42 in extra13).

### Round 12 (extra12.js — 93 questions, reference-anchored)
Sampled 7 question screenshots from the user-supplied practice mock to map topic coverage and FE-level difficulty (Poisson MLE, Lagrange multipliers, Z-transform ROC, Routh array, EUAC lease-vs-buy, BJT small-signal, Bayes posterior, line integrals via Green's theorem, etc.). Wrote **original problems** at matching difficulty — no problem statement is a paraphrase of the screenshots. Each problem cites an NCEES handbook section in `ref`.

### Round 13 (extra13.js — 42 questions, coverage gaps)
Targets topic areas under-represented in earlier rounds: Stokes' theorem, eigenvectors, Euler's method, Markov chain stationary distribution, sum of normals, conditional expectation under independence, χ² goodness-of-fit, breakeven, sensitivity analysis, dielectric strength, Ampere's law for solenoid, two-port ABCD parameters, mutual inductance, Sallen-Key active filter, differential amplifier CMRR, buck converter duty cycle, symmetrical-components `a` operator, single-line-to-ground fault sequence connection, motor soft-starting, transmission-line Γ and VSWR, wave impedance in dielectric, antenna effective aperture, discrete-time stability, Ziegler-Nichols PI tuning, lead compensator role, free-space path loss formula, Hamming (7,4) distance, NAT layering, TCP three-way handshake, Moore vs Mealy FSM, shift register simulation, FFT bit-reversal, pipeline data hazard, MESI invalid state, BST in-order, LCS DP complexity, graph BFS.

## Target

3,000+ questions. Remaining gap to target: **~1,312 questions**.

## Reference library available

Folder `/Volumes/Extreme SSD 1/Clauds/FE` contains 374 JPG pages of the FE Electrical & Computer reference handbook (`FE Electrical and Com_Page_003.jpg` .. `_Page_376.jpg`) plus 122 PNG screenshots of practice problems. Every future round MUST draw from these — paraphrase the problems, vary the numbers, and keep the spirit of the original to match real FE difficulty/style. Do not copy verbatim.

## Roadmap (suggested batches for future sessions)

1. **Round 12 (~250–300 q) — Reference-anchored:** For each chapter, open the handbook JPGs covering that chapter, pick 15–20 worked examples, then write fresh problems where the numbers are changed but the underlying principle and step structure match. Each problem MUST have:
   - A short concept callout explaining *why* this formula applies.
   - Step-by-step worked numbers (no “left to the reader”).
   - An inline SVG diagram where the problem is naturally diagrammatic (any circuit, transmission line, gate network, antenna pattern, block diagram). Reuse the SVG helpers in `questions-extra10.js`; extend with new helpers when needed (op-amp, voltage divider, three-phase Y/Δ, T-network, transformer, transmission-line stub).
   - A verification check.
   - Vietnamese gloss on the key sentence where helpful.

2. **Round 13 (~250 q) — Tricky-distractor set:** Same framework, but every wrong answer is engineered from the most common student mistake on that problem type (sign error, factor-of-2π, RMS vs peak, lagging vs leading, Y vs Δ, decimal/hex, off-by-one in CIDR).

3. **Round 14 (~250 q) — Diagram-heavy:** Inline SVG figures dominate. Push schematic complexity up — multi-loop circuits, op-amp filters, three-phase phasor diagrams, magnetic circuits, Karnaugh maps drawn out, Bode-plot asymptotes.

4. **Round 15 (~200 q) — Two new full timed mocks:** 110 questions each, mirroring NCEES distribution exactly. Curated from the existing pool with fresh framing; become “Mock 3” and “Mock 4” preset modes in the UI.

5. **Round 16+ — Continue until 3,000+ total.** Re-balance bank counts against NCEES weight column after every round.

## To continue in a future session

1. Mount both folders:
   - Project: `/Volumes/Extreme SSD 1/Long Beach/FE PE/fe-electrical-quiz`
   - Reference: `/Volumes/Extreme SSD 1/Clauds/FE` (handbook JPGs + practice screenshots)
2. Tell Claude: **"continue the FE workshop — read progress.md and start Round 12"**.
3. Claude will read this file, see what was last added, scan the handbook JPGs for the relevant chapter, then write a fresh `questions-extra12.js` with reference-anchored problems + SVG figures, following the same format.

## Conventions reminder

- New files go in `questions-extra<N>.js` and register themselves by appending to `QUESTION_BANK` in place.
- Add a `<script src="questions-extra<N>.js"></script>` line to `index.html` for each new file.
- Every question uses the `S({c, s, a, v})` helper for structured solutions.
- `correct: 0` always — the engine shuffles choices.
- Bilingual EN / VN content is encouraged (use a `/` separator).

## Solution-format upgrade log

- **2026-06-11 — Pilot:** 3 Circuits solutions (extra12 ×2, extra13 ×1) rewritten to the detailed
  multi-step standard: Step 1–N narrative, sub-circuit SVG, distractor audit, multi-point
  verification. Bug fix: Thevenin max-power `correct: 0` now points to 12 W. SVG viewBox
  clipping fixed across all 3 pilot diagrams.
- **2026-06-11 — extra13 complete:** all 42 solutions in `questions-extra13.js` now follow the
  detailed standard. 9 inline SVGs total (Thevenin/RL pilots, solenoid Amperian path, ABCD
  series-Z two-port, coupled coils, buck power stage, SLG sequence-network series connection,
  transmission-line reflection, z-plane unit circle, 4-bit SIPO shift register). File grew
  37 KB → 81 KB. Deployed via `gh api` git-data flow (blobs → tree → commit → ref) — no more
  web-upload drag-drop needed.
- **Next upgrade targets:** extra12 (91 solutions), then extra11 (170) and earlier rounds.
