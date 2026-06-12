// FE Electrical Question Bank — Extension Pack
// Additional original questions covering FE-tested concepts.
// Loaded after questions.js — appends to QUESTION_BANK in place.

(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") {
    console.warn("QUESTION_BANK or S helper missing — questions-extra not loaded.");
    return;
  }

  // Map of chapter ID → array of new questions
  const EXTRAS = {
    // ====================== Ch 1: Mathematics ======================
    1: [
      { q: "Find the angle (in degrees) of complex number $z = -4 + j3$.",
        choices: ["$143.1°$", "$36.9°$", "$-36.9°$", "$53.1°$"],
        correct: 0,
        solution: S({
          c: "A complex number $a + jb$ is a point on a 2-D plane (real axis right, imaginary axis up). Its angle is measured counterclockwise from the +real axis — and the calculator's $\\arctan(b/a)$ alone is NOT enough: you must check WHICH QUADRANT the point sits in.",
          s: [
            "<b>Step 1 — Locate the quadrant.</b> Real part $-4 < 0$, imaginary $+3 > 0$ → Quadrant II (upper left).",
            "<b>Step 2 — Reference angle.</b> $\\arctan(|3|/|{-4}|) = \\arctan(0.75) = 36.87°$.",
            "<b>Step 3 — Adjust for Quadrant II.</b> $\\theta = 180° - 36.87° = 143.13°$.",
            "<b>Step 4 — Distractor audit.</b> 36.9° is the raw arctan (ignores quadrant); −36.9° is what a calculator returns for $\\arctan(3/(-4))$ — Quadrant IV, wrong; 53.1° is the complementary angle."
          ],
          a: "$\\theta \\approx 143.1°$",
          v: "Rebuild the number from polar: $5\\cos143.13° = 5(-0.8) = -4$ ✓ and $5\\sin143.13° = 5(0.6) = 3$ ✓ (magnitude $\\sqrt{16+9} = 5$). Calculator habit that prevents this whole error class: use rectangular→polar conversion (or atan2), never bare arctan."

        }),
        ref: "Handbook p.36" },

      { q: "Divide $(8+j6) / (1+j)$. Result in $a+jb$ form:",
        choices: ["$7 - j$", "$7 + j$", "$1 - j7$", "$14 + j2$"],
        correct: 0,
        solution: S({
          c: "To divide complex numbers, make the denominator REAL: multiply top and bottom by the denominator's CONJUGATE (same real part, flipped imaginary sign) — because $(1+j)(1-j) = 1 - j^{2} = 2$, a plain real number.",
          s: [
            "<b>Step 1 — Multiply by the conjugate.</b> $\\dfrac{8+j6}{1+j}\\cdot\\dfrac{1-j}{1-j}$.",
            "<b>Step 2 — Expand the numerator.</b> $(8+j6)(1-j) = 8 - j8 + j6 - j^{2}6 = 8 + 6 + j(-8+6) = 14 - j2$ (remember $j^{2} = -1$ flips the sign).",
            "<b>Step 3 — Denominator and divide.</b> $(1+j)(1-j) = 2$, so the quotient is $(14 - j2)/2 = 7 - j$.",
            "<b>Step 4 — Distractor audit.</b> $7+j$ drops a sign in the expansion; $14+j2$ forgets to divide by 2; $1-j7$ swaps the parts."
          ],
          a: "$7 - j$",
          v: "Polar cross-check: $|8+j6| = 10$ at $36.87°$; $|1+j| = \\sqrt2$ at $45°$ → quotient $= 10/\\sqrt2 = 7.07$ at $-8.13°$, and indeed $|7-j| = \\sqrt{50} = 7.07$, angle $\\arctan(-1/7) = -8.13°$ ✓ — magnitudes divide, angles subtract."

        }),
        ref: "Handbook p.36" },

      { q: "Solve the 3×3 system $x+y+z=6$, $2x+y-z=1$, $x-y+2z=5$. Find $z$.",
        choices: ["$3$", "$2$", "$1$", "$0$"],
        correct: 0,
        solution: S({
          c: "Cramer's rule solves linear systems with determinants: $z = |A_z|/|A|$, where $A_z$ is the coefficient matrix with its z-COLUMN replaced by the constants. (For 3×3 on a timed exam, substitution-check of a candidate answer is often faster — use both.)",
          s: [
            "<b>Step 1 — Coefficient determinant.</b> $|A| = 1(1\\cdot2 - (-1)(-1)) - 1(2\\cdot2 - (-1)\\cdot1) + 1(2(-1) - 1\\cdot1) = 1(1) - 1(5) + 1(-3) = -7$.",
            "<b>Step 2 — Replace column 3 with (6, 1, 5).</b> $|A_z| = 1(1\\cdot5 - 1(-1)) - 1(2\\cdot5 - 1\\cdot1) + 6(2(-1) - 1\\cdot1) = 6 - 9 - 18 = -21$.",
            "<b>Step 3 — Divide.</b> $z = \\dfrac{-21}{-7} = 3$.",
            "<b>Step 4 — Find the full solution for the check.</b> Back-substituting gives $x = 1, y = 2, z = 3$."
          ],
          a: "$z = 3$",
          v: "Substitute into all three originals: $1+2+3 = 6$ ✓; $2(1)+2-3 = 1$ ✓; $1-2+2(3) = 5$ ✓ — every equation satisfied, so $z = 3$ beyond doubt. Exam tactic: when Cramer's arithmetic feels shaky, verify by substitution — 30 seconds buys certainty."

        }),
        ref: "Handbook p.57" },

      { q: "Compute $\\int_0^{\\pi/2} \\cos x \\, dx$.",
        choices: ["$1$", "$0$", "$\\pi/2$", "$-1$"],
        correct: 0,
        solution: S({
          c: "The Fundamental Theorem of Calculus turns a definite integral into an antiderivative evaluation: $\\int_a^b f\\,dx = F(b) - F(a)$. The antiderivative of $\\cos x$ is $\\sin x$ (derivative of sine is cosine — this pair must be automatic).",
          s: [
            "<b>Step 1 — Antiderivative.</b> $\\int\\cos x\\,dx = \\sin x + C$.",
            "<b>Step 2 — Evaluate at the limits.</b> $\\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.",
            "<b>Step 3 — Distractor audit.</b> 0 would be the integral over a FULL period symmetric interval; $\\pi/2$ confuses the limit with the answer; −1 flips the orientation."
          ],
          a: "$1$",
          v: "Geometric sense: the cosine hump from 0 to $\\pi/2$ has average height $2/\\pi \\approx 0.64$ over width $\\pi/2 \\approx 1.57$ → area $\\approx 1$ ✓. Sister results worth caching: $\\int_0^{\\pi/2}\\sin = 1$ too; over $0$ to $\\pi$, sine gives 2, cosine gives 0."

        }),
        ref: "Handbook p.49" },

      { q: "Find $\\dfrac{d}{dx}\\left[\\sin(x^2)\\right]$ at $x = 1$.",
        choices: ["$2\\cos(1)$", "$\\cos(1)$", "$2\\sin(1)$", "$1$"],
        correct: 0,
        solution: S({
          c: "The chain rule handles functions INSIDE functions: $\\dfrac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)$ — differentiate the outer shell (leaving the inside alone), then multiply by the inside's derivative.",
          s: [
            "<b>Step 1 — Identify the layers.</b> Outer $f(u) = \\sin u$; inner $g(x) = x^{2}$.",
            "<b>Step 2 — Differentiate each.</b> $f'(u) = \\cos u$; $g'(x) = 2x$. Chain: $\\dfrac{d}{dx}\\sin(x^{2}) = 2x\\cos(x^{2})$.",
            "<b>Step 3 — Evaluate at $x = 1$.</b> $2(1)\\cos(1) = 2\\cos(1) \\approx 1.081$ — note $\\cos(1)$ means 1 RADIAN ($\\approx 0.540$), not 1 degree.",
            "<b>Step 4 — Distractor audit.</b> $\\cos(1)$ forgets the inner derivative $2x$; $2\\sin(1)$ differentiates the wrong layer; 1 is a guess."
          ],
          a: "$2\\cos(1) \\approx 1.08$",
          v: "Numeric slope check: $\\sin(1.01^{2}) - \\sin(0.99^{2}) = \\sin(1.0201) - \\sin(0.9801) \\approx 0.8527 - 0.8307 = 0.0216$ over $\\Delta x = 0.02$ → slope $\\approx 1.08$ ✓. Calculator-mode discipline: radians, always, in calculus."

        }),
        ref: "Handbook p.47" },
    ],

    // ====================== Ch 2: Probability & Statistics ======================
    2: [
      { q: "In how many ways can 5 books be arranged on a shelf?",
        choices: ["$120$", "$5$", "$25$", "$3125$"],
        correct: 0,
        solution: S({
          c: "Arranging $n$ DISTINCT objects in a row, where ORDER MATTERS, is a permutation count: $n!$ — first position has $n$ choices, next has $n-1$, and so on down to 1.",
          s: [
            "<b>Step 1 — Multiply the choices.</b> $5! = 5\\times4\\times3\\times2\\times1 = 120$.",
            "<b>Step 2 — Distractor audit.</b> 5 counts the books, not the arrangements; 25 is $5^{2}$; 3125 is $5^{5}$ — that would allow REUSING a book in multiple slots (with-replacement counting)."
          ],
          a: "$120$ arrangements.",
          v: "The two questions to always ask in counting: (1) does order matter? (yes → permutation); (2) can items repeat? (no → factorial-style, not powers). Contrast: choosing 5 of 5 with order irrelevant gives $C(5,5) = 1$ — same books, one SET ✓."

        }),
        ref: "Handbook p.64" },

      { q: "Choose 3 students from a class of 10. How many combinations?",
        choices: ["$120$", "$30$", "$720$", "$1000$"],
        correct: 0,
        solution: S({
          c: "Choosing a GROUP where order does not matter is a combination: $C(n,k) = \\dfrac{n!}{k!(n-k)!}$ — the $k!$ in the denominator removes the orderings of the chosen group, since {Anna, Bob, Cara} is the same committee in any order.",
          s: [
            "<b>Step 1 — Apply.</b> $C(10,3) = \\dfrac{10\\times9\\times8}{3\\times2\\times1} = \\dfrac{720}{6} = 120$.",
            "<b>Step 2 — Distractor audit.</b> 720 is the PERMUTATION count $P(10,3)$ (order-mattering version — exactly $3! = 6$ times larger); 30 is $10\\times3$; 1000 is $10^{3}$ (with replacement)."
          ],
          a: "$120$ combinations.",
          v: "The permutation-combination bridge in one line: $P(10,3) = C(10,3)\\times3!$, i.e. $720 = 120\\times6$ ✓ — pick the group, then order it. Symmetry bonus: $C(10,3) = C(10,7) = 120$ (choosing 3 to include = choosing 7 to exclude)."

        }),
        ref: "Handbook p.64" },

      { q: "A bag has 4 red and 6 blue marbles. Two drawn without replacement — P(both red)?",
        choices: ["$2/15$", "$4/25$", "$1/3$", "$1/5$"],
        correct: 0,
        solution: S({
          c: "WITHOUT replacement, the second draw's odds change because the first marble is gone — dependent events. Chain rule of probability: $P(A\\text{ then }B) = P(A)\\times P(B\\,|\\,A)$.",
          s: [
            "<b>Step 1 — First draw.</b> $P(\\text{red}_1) = 4/10 = 2/5$.",
            "<b>Step 2 — Second draw given the first.</b> 3 reds remain among 9 marbles: $P = 3/9 = 1/3$.",
            "<b>Step 3 — Multiply.</b> $\\dfrac{2}{5}\\times\\dfrac{1}{3} = \\dfrac{2}{15} \\approx 13.3\\%$.",
            "<b>Step 4 — Distractor audit.</b> $4/25 = (2/5)^{2}$ is the WITH-replacement answer; $1/3$ is the bare conditional; $1/5$ is numerology."
          ],
          a: "$P = 2/15$",
          v: "Combination cross-check: $\\dbinom{4}{2}\\big/\\dbinom{10}{2} = 6/45 = 2/15$ ✓ — two different mental models, identical answer. Direction check: without replacement is slightly LESS likely than with ($13.3\\% < 16\\%$) because the first success depletes the pool ✓."

        }),
        ref: "Handbook p.65" },

      { q: "A factory produces parts; 5% are defective. In a sample of 100, expected number defective?",
        choices: ["$5$", "$50$", "$10$", "$1$"],
        correct: 0,
        solution: S({
          c: "Each part is an independent pass/fail trial (a Bernoulli trial); the defect count over $n$ parts is BINOMIAL, and its expected value is the simplest formula there is: $E[X] = np$.",
          s: [
            "<b>Step 1 — Multiply.</b> $E[X] = 100\\times0.05 = 5$ defectives expected.",
            "<b>Step 2 — Distractor audit.</b> 50 misreads 5% as 50%; 10 doubles; 1 misplaces the decimal."
          ],
          a: "$E[X] = 5$",
          v: "Spread context: variance $= np(1-p) = 4.75$, SD $\\approx 2.2$ — typical batches run 5 ± 2 defectives, so finding 8 isn't alarming but 15 would be ✓. 'Expected' is a long-run average; individual batches vary."

        }),
        ref: "Handbook p.66" },
    ],

    // ====================== Ch 3: Ethics ======================
    3: [
      { q: "An engineer is asked to sign and seal drawings prepared by an unlicensed colleague. The most ethical action is:",
        choices: ["Decline unless the engineer thoroughly reviews and is responsible for the work", "Sign as a favor — colleagues help each other", "Sign and charge a small fee", "Sign without review since it's just paperwork"],
        correct: 0,
        solution: S({
          c: "A PE's seal certifies the work was prepared by them or under their RESPONSIBLE CHARGE — direct supervision and control. Sealing work you neither did nor thoroughly reviewed is 'plan stamping', prohibited by every state board.",
          s: [
            "<b>Step 1 — What the seal legally asserts.</b> Personal professional responsibility for the technical content — not a notarization, not a favor.",
            "<b>Step 2 — The compliant path.</b> The engineer may seal ONLY after a thorough independent review deep enough to genuinely take ownership — checking calculations, assumptions, and code compliance as if it were their own work.",
            "<b>Step 3 — Distractor audit.</b> 'As a favor' and 'just paperwork' deny the seal's meaning; charging a fee makes the fraud commercial, not acceptable."
          ],
          a: "Decline unless the engineer thoroughly reviews and takes full responsibility.",
          v: "Why boards prosecute this hardest: plan stamping launders unlicensed work into the permitting system, defeating licensure's entire public-protection purpose. Review must be REAL — boards ask sealing engineers to explain the design; 'I trusted my colleague' is an admission, not a defense."

        }),
        ref: "Handbook p.5" },

      { q: "An engineer discovers a safety defect in a previous project. The client asks them to keep quiet to avoid lawsuit. The engineer should:",
        choices: ["Report the defect through proper channels — public safety overrides client confidentiality", "Stay silent — client confidentiality is paramount", "Negotiate a payment for silence", "Resign quietly"],
        correct: 0,
        solution: S({
          c: "Canon I.1 — public safety, health, and welfare are PARAMOUNT — sits above client confidentiality (a real but subordinate duty). When the two collide over a known safety defect, disclosure wins.",
          s: [
            "<b>Step 1 — Classify the conflict.</b> Known safety defect + client demanding silence = the textbook confidentiality-vs-safety collision the code already settled.",
            "<b>Step 2 — Act through channels.</b> Inform the client of the duty to disclose; report to the asset owner and, if needed, the authority having jurisdiction. Orderly escalation honors both duties as far as possible.",
            "<b>Step 3 — Distractor audit.</b> 'Confidentiality is paramount' inverts the canon; payment-for-silence converts an ethics breach into corruption; quiet resignation abandons the public while preserving the hazard."
          ],
          a: "Report through proper channels — public safety overrides client confidentiality.",
          v: "Legal backstop: many states protect (and some compel) engineers who report genuine hazards — board rules can discipline FAILURE to report. The fee a client pays buys engineering services, never silence about danger."

        }),
        ref: "Handbook p.5" },

      { q: "Which IP protects an algorithm whose source code is kept confidential and inside a compiled product?",
        choices: ["Trade secret", "Patent", "Copyright", "Trademark"],
        correct: 0,
        solution: S({
          c: "Four IP tools protect different things: PATENT = disclosed invention, ~20-yr monopoly; COPYRIGHT = the expression (code text), not the idea; TRADEMARK = brand identifiers; TRADE SECRET = anything valuable kept confidential, protected exactly as long as secrecy holds.",
          s: [
            "<b>Step 1 — Match the facts.</b> Algorithm kept confidential, shipped only compiled → the protection IS the secrecy → trade secret.",
            "<b>Step 2 — Why not the others.</b> A patent REQUIRES public disclosure (defeating the described strategy); copyright covers the source text but not the algorithmic idea, and clean-room reimplementation can lawfully reproduce behavior; trademark protects names/logos only.",
            "<b>Step 3 — The maintenance duty.</b> Trade-secret status demands 'reasonable measures': NDAs, access controls, compiled-only distribution — exactly what the question describes."
          ],
          a: "Trade secret.",
          v: "Famous standing examples: Google's ranking algorithm, the Coca-Cola formula, WD-40 — all unpatented BY CHOICE, because patents expire but secrets can last forever (the trade-off: zero protection if independently discovered or reverse-engineered lawfully)."

        }),
        ref: "Handbook p.11" },
    ],

    // ====================== Ch 4: Engineering Economics ======================
    4: [
      { q: "A project costs $\\$10{,}000$ today and returns $\\$3{,}000$ each year for 5 years. Approximate IRR?",
        choices: ["$\\approx 15\\%$", "$\\approx 5\\%$", "$\\approx 30\\%$", "$\\approx 50\\%$"],
        correct: 0,
        solution: S({
          c: "IRR (internal rate of return) is the discount rate at which a project's NPV equals zero — the 'interest rate the project itself pays'. For an annuity-style project: solve $P = A\\cdot(P/A, i, n)$ for $i$ by trial with the factor tables.",
          s: [
            "<b>Step 1 — Set up the target factor.</b> $(P/A, i, 5) = 10{,}000/3{,}000 = 3.333$.",
            "<b>Step 2 — Bracket with trials.</b> At $i = 15\\%$: $(P/A) = 3.352$ — a touch high (rate slightly low). At $i = 16\\%$: 3.274 — too low.",
            "<b>Step 3 — Conclude.</b> IRR sits just above 15% (≈15.2%) → 'approximately 15%'.",
            "<b>Step 4 — Distractor audit.</b> 5% is far too cheap (factor would be 4.33); 30% way too high (2.44); 50% absurd."
          ],
          a: "IRR $\\approx 15\\%$",
          v: "Sanity anchor: undiscounted, the project returns \\$15k on \\$10k over 5 years ≈ 10%/yr simple — IRR lands above that because early cash flows are worth more ✓. Decision use: accept if IRR ≥ MARR; at MARR 12%, this passes."

        }),
        ref: "Handbook p.230-232" },

      { q: "Equipment cost $\\$60k$; salvage $\\$10k$ after 5 yr life. Year-3 book value via MACRS-like 200% DB (1.5-yr convention skipped — use straight-line for simplicity):",
        choices: ["$\\$30k$", "$\\$24k$", "$\\$36k$", "$\\$20k$"],
        correct: 0,
        solution: S({
          c: "Book value = original cost minus accumulated depreciation: $BV_t = C - tD$ under straight-line, where $D = (C - SV)/n$ spreads the depreciable amount evenly.",
          s: [
            "<b>Step 1 — Annual depreciation.</b> $D = (60{,}000 - 10{,}000)/5 = \\$10{,}000$/yr.",
            "<b>Step 2 — Accumulate 3 years.</b> $BV_3 = 60{,}000 - 3(10{,}000) = \\$30{,}000$.",
            "<b>Step 3 — Distractor audit.</b> \\$24k and \\$36k resemble declining-balance year-3 values (different method); \\$20k subtracts four years."
          ],
          a: "$BV_3 = \\$30{,}000$",
          v: "End-of-life check: $BV_5 = 60 - 5(10) = \\$10$k = salvage exactly ✓ — straight-line always lands on SV at year $n$, a built-in self-test. (The question's title mentions DB but directs straight-line — read the parenthetical instructions on the FE carefully.)"

        }),
        ref: "Handbook p.230" },

      { q: "Choose between (A) $\\$5000$ now or (B) $\\$1200$/year for 5 years. Use $i = 8\\%$. Which is better?",
        choices: ["A has higher present worth", "B has higher present worth", "Equal", "Need more info"],
        correct: 0,
        solution: S({
          c: "Compare money offers on a COMMON time basis: discount the annuity to present worth with $(P/A, i, n) = \\dfrac{1-(1+i)^{-n}}{i}$ and compare against the lump sum.",
          s: [
            "<b>Step 1 — Price option B today.</b> $(P/A, 8\\%, 5) = \\dfrac{1 - 1.08^{-5}}{0.08} = 3.993$ → $PW_B = 1200\\times3.993 = \\$4{,}792$.",
            "<b>Step 2 — Compare.</b> $PW_A = \\$5{,}000 > \\$4{,}792 = PW_B$ → A (cash now) is better at 8%.",
            "<b>Step 3 — Why intuition misleads.</b> B's NOMINAL total is \\$6,000 — but dollars arriving years from now are worth less; at 8% the discount eats the \\$1,000 advantage and more."
          ],
          a: "A has the higher present worth (\\$5,000 vs ≈\\$4,792).",
          v: "Break-even insight (the real lesson): solving $(P/A, i, 5) = 5000/1200 = 4.167$ gives $i \\approx 6.4\\%$ — BELOW 6.4% the annuity wins, above it the lump sum wins ✓. The right answer depends on the rate; at the stated 8%, A."

        }),
        ref: "Handbook p.231" },
    ],

    // ====================== Ch 5: Materials ======================
    5: [
      { q: "Resistance of a copper conductor at 75°C vs. its value at 20°C (assume $\\alpha = 0.00393$/°C):",
        choices: ["About 22% higher", "About 75% higher", "About the same", "About 22% lower"],
        correct: 0,
        solution: S({
          c: "Metal resistance rises with temperature (hotter lattice scatters electrons more): $R_T = R_0[1 + \\alpha(T - T_0)]$ with copper's $\\alpha \\approx 0.00393$/°C referenced to 20°C.",
          s: [
            "<b>Step 1 — Temperature rise.</b> $\\Delta T = 75 - 20 = 55$°C.",
            "<b>Step 2 — Scale factor.</b> $1 + 0.00393\\times55 = 1.216$ — about 21.6% higher.",
            "<b>Step 3 — Distractor audit.</b> '75% higher' confuses the temperature with the change; 'about the same' ignores the physics; '22% lower' inverts the direction — metals NEVER conduct better hot."
          ],
          a: "About 22% higher.",
          v: "Rate anchor: copper ≈ +0.39%/°C, so 55° → ~21.6% ✓. Engineering consequence: ampacity tables de-rate conductors in hot ambients precisely because $I^{2}R$ losses grow with this factor — and the loss heats the wire further (a mild feedback loop designers must respect)."

        }),
        ref: "Handbook p.354" },

      { q: "Energy bandgap of silicon at room temperature:",
        choices: ["$\\approx 1.12$ eV", "$\\approx 0.67$ eV", "$\\approx 1.42$ eV", "$\\approx 5$ eV"],
        correct: 0,
        solution: S({
          c: "The bandgap $E_g$ is the energy needed to lift an electron from the valence band (bound) to the conduction band (mobile) — it defines whether a material is a conductor (no gap), semiconductor (~1 eV), or insulator (>4 eV). The FE expects the key values memorized.",
          s: [
            "<b>Step 1 — Recall.</b> Silicon: $E_g \\approx 1.12$ eV at 300 K.",
            "<b>Step 2 — Place the distractors.</b> 0.67 eV is GERMANIUM (smaller gap → leakier, why Si replaced it); 1.42 eV is GaAs (direct gap → LEDs/lasers); ~5 eV is diamond/insulator territory."
          ],
          a: "$E_g(\\text{Si}) \\approx 1.12$ eV",
          v: "Photon link that makes it useful: $\\lambda = 1240/E_g$ nm/eV → $1240/1.12 \\approx 1107$ nm (near-infrared) — silicon absorbs all visible light plus some IR, exactly why Si solar cells work for sunlight ✓."

        }),
        ref: "Handbook p.354" },
    ],

    // ====================== Ch 6: Circuit Analysis ======================
    6: [
      { q: "Use superposition: in a circuit with a 12V source and a 2A current source, the current through $R$ from the voltage source alone is 1A, from the current source alone is 0.5A (in same direction). Total current?",
        choices: ["$1.5$ A", "$2.5$ A", "$0.5$ A", "$1.0$ A"],
        correct: 0,
        solution: S({
          c: "Superposition — the superpower of LINEAR circuits: with multiple independent sources, compute each source's contribution ALONE (others zeroed: voltage sources → shorts, current sources → opens), then ADD the contributions algebraically.",
          s: [
            "<b>Step 1 — Collect the given contributions.</b> Voltage source alone: 1 A; current source alone: 0.5 A — stated to be in the SAME direction.",
            "<b>Step 2 — Add.</b> $I = 1 + 0.5 = 1.5$ A.",
            "<b>Step 3 — Distractor audit.</b> 0.5 A subtracts (would be right if directions OPPOSED — always check direction); 2.5 adds the 2-A source value itself; 1.0 ignores the second source."
          ],
          a: "$I = 1.5$ A",
          v: "The fine print that exams probe: superposition works for voltage and current (linear quantities) but NOT directly for POWER ($P \\propto I^{2}$ — cross terms appear; here $1.5^{2} \\ne 1^{2} + 0.5^{2}$). Compute total current first, then power ✓."

        }),
        ref: "Handbook p.357" },

      { q: "Convert a Thévenin source ($V_{Th} = 20$ V, $R_{Th} = 4\\ \\Omega$) to Norton equivalent. $I_N$ and $R_N$:",
        choices: ["$I_N = 5$ A, $R_N = 4\\ \\Omega$", "$I_N = 80$ A, $R_N = 4\\ \\Omega$", "$I_N = 5$ A, $R_N = 0.25\\ \\Omega$", "$I_N = 20$ A, $R_N = 4\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Thevenin (voltage source + series R) and Norton (current source + parallel R) are interchangeable masks for the same two-terminal circuit: $I_N = V_{Th}/R_{Th}$ and the resistance carries over unchanged, $R_N = R_{Th}$.",
          s: [
            "<b>Step 1 — Convert the source.</b> $I_N = 20/4 = 5$ A.",
            "<b>Step 2 — Carry the resistance.</b> $R_N = 4\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 80 A multiplies instead of divides; $R_N = 0.25\\,\\Omega$ wrongly inverts the resistance; 20 A echoes $V_{Th}$."
          ],
          a: "$I_N = 5$ A, $R_N = 4\\,\\Omega$",
          v: "Equivalence test at both extremes: shorted terminals — Thevenin delivers $20/4 = 5$ A, Norton delivers $I_N = 5$ A ✓; open terminals — Thevenin shows 20 V, Norton shows $5\\times4 = 20$ V ✓. Same behavior at both ends ⇒ same behavior for every load in between."

        }),
        ref: "Handbook p.357" },

      { q: "A 100 µF capacitor charged to 50 V discharges through 1 kΩ. Voltage after 0.1 s:",
        choices: ["$\\approx 18.4$ V", "$50$ V", "$\\approx 31.6$ V", "$0$ V"],
        correct: 0,
        solution: S({
          c: "A capacitor draining through a resistor follows the universal exponential decay $v(t) = V_0e^{-t/\\tau}$ with time constant $\\tau = RC$ — after one $\\tau$, 36.8% of the voltage remains.",
          s: [
            "<b>Step 1 — Time constant.</b> $\\tau = (10^{3})(100\\times10^{-6}) = 0.1$ s.",
            "<b>Step 2 — How many time constants elapsed.</b> $t/\\tau = 0.1/0.1 = 1$ — exactly one.",
            "<b>Step 3 — Evaluate.</b> $v = 50e^{-1} = 50\\times0.368 = 18.4$ V.",
            "<b>Step 4 — Distractor audit.</b> 50 V means no time passed; 31.6 V is $50(1 - e^{-1})$ — the CHARGING value at one τ (complementary trap); 0 V needs ~5τ."
          ],
          a: "$v_C(0.1\\,\\text{s}) \\approx 18.4$ V",
          v: "The decay ladder to memorize: 1τ → 36.8% left, 2τ → 13.5%, 3τ → 5%, 5τ → 0.7% (≈done) ✓. Energy check: voltage fell to 36.8% → stored energy fell to $0.368^{2} = 13.5\\%$ — the resistor burned 86% of $\\tfrac12CV_0^{2} = 0.125$ J in that first time constant."

        }),
        ref: "Handbook p.358" },

      { q: "Total power delivered by a 24V source feeding two parallel resistors $R_1 = 4\\ \\Omega$ and $R_2 = 12\\ \\Omega$:",
        choices: ["$192$ W", "$48$ W", "$144$ W", "$72$ W"],
        correct: 0,
        solution: S({
          c: "Parallel resistors each see the FULL source voltage, so each dissipates $V^{2}/R$ independently; the source supplies the sum — equivalently $V^{2}/R_{eq}$.",
          s: [
            "<b>Step 1 — Per-resistor powers.</b> $P_1 = 24^{2}/4 = 144$ W; $P_2 = 24^{2}/12 = 48$ W.",
            "<b>Step 2 — Sum.</b> $P = 144 + 48 = 192$ W.",
            "<b>Step 3 — Equivalent-resistance route (same answer).</b> $R_{eq} = \\dfrac{4\\times12}{4+12} = 3\\,\\Omega$ → $P = 576/3 = 192$ W ✓.",
            "<b>Step 4 — Distractor audit.</b> 144 and 48 are the individual resistors mistaken for the total; 72 has no consistent route."
          ],
          a: "$P_{total} = 192$ W",
          v: "Counter-intuition worth fixing now: in PARALLEL, the SMALLER resistor burns MORE power (it draws more current at the same voltage) — here 4 Ω takes 144 of the 192 W ✓. In SERIES it flips: the larger R dissipates more."

        }),
        ref: "Handbook p.356" },

      { q: "AC source $v(t) = 100\\cos(\\omega t)$ V drives series RL: $R=30\\ \\Omega$, $X_L=40\\ \\Omega$. Peak current?",
        choices: ["$2.0$ A", "$1.41$ A", "$3.33$ A", "$2.5$ A"],
        correct: 0,
        solution: S({
          c: "In AC phasor analysis, resistance and reactance combine at RIGHT ANGLES (they shift current differently in time), so the total opposition is $|Z| = \\sqrt{R^{2} + X_L^{2}}$ — never a plain sum. Then Ohm's law: $I_m = V_m/|Z|$.",
          s: [
            "<b>Step 1 — Impedance magnitude.</b> $|Z| = \\sqrt{30^{2} + 40^{2}} = \\sqrt{2500} = 50\\,\\Omega$ (the 3-4-5 triangle, scaled).",
            "<b>Step 2 — Peak current.</b> $I_m = 100/50 = 2.0$ A.",
            "<b>Step 3 — Distractor audit.</b> 1.41 A divides by $\\sqrt2$ unnecessarily (peak→rms confusion — the question gives and asks PEAK); 3.33 A uses only R; 2.5 A uses only $X_L$."
          ],
          a: "$I_m = 2.0$ A",
          v: "Adding R and X arithmetically (70 Ω → 1.43 A) is THE classic error — the right-angle combination exists because the resistor's voltage peaks WITH the current while the inductor's leads it by 90°. Phase here: current lags by $\\arctan(40/30) = 53.1°$ ✓."

        }),
        ref: "Handbook p.360" },
    ],

    // ====================== Ch 7: Linear Systems ======================
    7: [
      { q: "Final-value theorem: for $Y(s) = \\dfrac{10}{s(s+5)}$, $\\lim_{t\\to\\infty} y(t) =$",
        choices: ["$2$", "$10$", "$0$", "$\\infty$"],
        correct: 0,
        solution: S({
          c: "The final-value theorem reads a signal's steady state directly from its Laplace transform: $\\lim_{t\\to\\infty}y(t) = \\lim_{s\\to0}sY(s)$ — valid ONLY if all poles of $sY(s)$ are in the left half-plane (the limit must exist).",
          s: [
            "<b>Step 1 — Multiply by s.</b> $sY(s) = \\dfrac{10}{s+5}$.",
            "<b>Step 2 — Check validity.</b> Pole of $sY$ at $-5$ — LHP ✓, theorem applies.",
            "<b>Step 3 — Take the limit.</b> $s\\to0$: $10/5 = 2$.",
            "<b>Step 4 — Distractor audit.</b> 10 forgets the denominator's 5; 0 misjudges the integrator; $\\infty$ would need a RHP or repeated origin pole."
          ],
          a: "$y(\\infty) = 2$",
          v: "Full confirmation by partial fractions: $Y = \\dfrac{2}{s} - \\dfrac{2}{s+5} \\Rightarrow y(t) = 2 - 2e^{-5t} \\to 2$ ✓. Always run the validity check first: applying FVT to an oscillator ($\\omega$-axis poles) yields a confident, wrong number."

        }),
        ref: "Handbook p.56" },

      { q: "Initial-value theorem: for $Y(s) = \\dfrac{3s}{s^2+4s+3}$, $y(0^+) =$",
        choices: ["$3$", "$0$", "$1$", "$\\infty$"],
        correct: 0,
        solution: S({
          c: "The initial-value theorem is FVT's mirror: $y(0^{+}) = \\lim_{s\\to\\infty}sY(s)$ — the high-$s$ behavior of the transform encodes the signal's earliest instants (high frequency ↔ fast time).",
          s: [
            "<b>Step 1 — Multiply by s.</b> $sY(s) = \\dfrac{3s^{2}}{s^{2} + 4s + 3}$.",
            "<b>Step 2 — Take $s\\to\\infty$.</b> Divide top and bottom by $s^{2}$: $\\dfrac{3}{1 + 4/s + 3/s^{2}} \\to 3$.",
            "<b>Step 3 — Distractor audit.</b> 0 would need the numerator a degree lower; $\\infty$ a degree higher; 1 drops the coefficient 3."
          ],
          a: "$y(0^{+}) = 3$",
          v: "Cross-check via inversion: $Y = \\dfrac{3s}{(s+1)(s+3)} = \\dfrac{-1.5}{s+1} + \\dfrac{4.5}{s+3}$ → $y(t) = -1.5e^{-t} + 4.5e^{-3t}$ → $y(0) = 3$ ✓. Degree rule of thumb: equal degrees of $sY$'s numerator/denominator → finite nonzero start."

        }),
        ref: "Handbook p.56" },

      { q: "A parallel RLC with $R=100\\ \\Omega$, $L=10$ mH, $C=10\\ \\mu$F. Q factor at resonance:",
        choices: ["$\\approx 3.16$", "$1.0$", "$10$", "$0.32$"],
        correct: 0,
        solution: S({
          c: "Quality factor measures resonance sharpness. CAUTION — the parallel formula INVERTS the series one: parallel $Q = \\dfrac{R}{\\omega_0L} = \\omega_0RC = R\\sqrt{C/L}$ (big parallel R = light loading = HIGH Q), while series $Q = \\omega_0L/R$.",
          s: [
            "<b>Step 1 — Resonant frequency.</b> $LC = (10^{-2})(10^{-5}) = 10^{-7}$ → $\\omega_0 = 1/\\sqrt{10^{-7}} = 3162$ rad/s.",
            "<b>Step 2 — Apply the parallel-Q formula.</b> $Q = R\\sqrt{C/L} = 100\\sqrt{10^{-5}/10^{-2}} = 100\\sqrt{10^{-3}} = 100\\times0.0316 = 3.16$.",
            "<b>Step 3 — Cross-check via the other form.</b> $Q = R/(\\omega_0L) = 100/(3162\\times0.01) = 100/31.6 = 3.16$ ✓ — both forms agree.",
            "<b>Step 4 — Distractor audit.</b> 1.0 comes from miscomputing $\\omega_0$ as $10^{4}$ (using $LC = 10^{-8}$); 10 and 0.32 are square-root slips."
          ],
          a: "$Q \\approx 3.16$",
          v: "Bandwidth read-out: $\\Delta\\omega = \\omega_0/Q = 1000$ rad/s around 3162 — a moderately selective tank ✓. The series/parallel inversion is the exam's favorite trap: same R, L, C values give $Q_{series} = 1/Q_{parallel}\\cdot(R^2C/L)$... safest is memorizing both forms separately."

        }),
        ref: "Handbook p.361" },
    ],

    // ====================== Ch 8: Signal Processing ======================
    8: [
      { q: "Convert power gain $P_{out}/P_{in} = 1000$ to dB:",
        choices: ["$30$ dB", "$60$ dB", "$10$ dB", "$3$ dB"],
        correct: 0,
        solution: S({
          c: "Decibels compress ratios logarithmically — but the formula depends on WHAT you measure: POWER ratios use $10\\log_{10}$; voltage/current ratios use $20\\log_{10}$ (because power goes as the square of amplitude).",
          s: [
            "<b>Step 1 — Identify the quantity.</b> $P_{out}/P_{in}$ is a POWER ratio → use $10\\log$.",
            "<b>Step 2 — Evaluate.</b> $10\\log_{10}(1000) = 10\\times3 = 30$ dB.",
            "<b>Step 3 — Distractor audit.</b> 60 dB applies the voltage formula ($20\\log$) to a power ratio — THE classic dB error; 10 dB is a factor of 10 only; 3 dB is a factor of 2."
          ],
          a: "30 dB",
          v: "The pocket table: ×2 power = +3 dB, ×10 = +10 dB; ×2 voltage = +6 dB, ×10 = +20 dB — and they're consistent because doubling voltage quadruples power (+6 dB) ✓. Chain bonus: gains in dB ADD (30 dB + 30 dB = ×10⁶), which is the whole point of the unit."

        }),
        ref: "Handbook p.375" },

      { q: "An anti-aliasing LPF has cutoff $f_c = 4.8$ kHz. Minimum sampling frequency to capture signal correctly:",
        choices: ["$> 9.6$ kHz", "$= 4.8$ kHz", "$= 2.4$ kHz", "$> 1$ MHz"],
        correct: 0,
        solution: S({
          c: "An anti-aliasing low-pass filter guarantees the signal entering the ADC contains nothing above its cutoff $f_c$. Nyquist then sets the sampling floor: $f_s > 2f_{max} = 2f_c$.",
          s: [
            "<b>Step 1 — Post-filter bandwidth.</b> After the LPF, $f_{max} = 4.8$ kHz.",
            "<b>Step 2 — Apply Nyquist.</b> $f_s > 2\\times4.8 = 9.6$ kHz.",
            "<b>Step 3 — Distractor audit.</b> 4.8 kHz samples at the signal's own top frequency (one sample/cycle — hopeless); 2.4 kHz is half that; 1 MHz works but is wasteful overkill, not the minimum."
          ],
          a: "$f_s > 9.6$ kHz.",
          v: "Practical margin: real filters roll off gradually, so designs run $f_s \\approx 2.2$-$2.5\\times f_c$ (here 10.5-12 kHz) so the filter's transition band still lands below $f_s/2$ ✓ — the same reason CD audio is 44.1 kHz for 20-kHz sound, not 40."

        }),
        ref: "Handbook p.375" },

      { q: "FIR filter $y[n] = 0.5\\,x[n] + 0.5\\,x[n-1]$. If $x[n] = \\{2, 4, 6\\}$ starting at $n=0$, find $y[1]$.",
        choices: ["$3$", "$5$", "$1$", "$10$"],
        correct: 0,
        solution: S({
          c: "An FIR filter's output is a weighted sum of the current and previous input samples — here $y[n] = 0.5x[n] + 0.5x[n-1]$, a 2-tap moving average. Evaluating it is pure bookkeeping: plug in the right samples.",
          s: [
            "<b>Step 1 — Identify the samples for n = 1.</b> $x[1] = 4$ (current), $x[0] = 2$ (one step back).",
            "<b>Step 2 — Weighted sum.</b> $y[1] = 0.5(4) + 0.5(2) = 2 + 1 = 3$.",
            "<b>Step 3 — Distractor audit.</b> 5 averages $x[1]$ and $x[2]$ (looking FORWARD — not causal); 1 subtracts; 10 sums without the weights."
          ],
          a: "$y[1] = 3$",
          v: "Meaning check: 3 is exactly the average of 2 and 4 — what a 2-tap averager should produce ✓. Full output for practice: $y[0] = 0.5(2) + 0.5(0) = 1$ (assumes zero before the signal starts), $y[1] = 3$, $y[2] = 5$, $y[3] = 3$ — smooth rise and fall."

        }),
        ref: "Handbook p.376" },
    ],

    // ====================== Ch 9: Electronics ======================
    9: [
      { q: "An op-amp integrator with $R=10$ k$\\Omega$ and $C=1\\ \\mu$F gets a step input $v_{in} = 1$ V at $t=0$. $v_{out}(t)$ at $t = 10$ ms (assume $v_{out}(0)=0$, ideal):",
        choices: ["$-1$ V", "$+1$ V", "$-0.1$ V", "$0$ V"],
        correct: 0,
        solution: S({
          c: "An op-amp integrator (input resistor R, feedback capacitor C, inverting configuration) outputs the running integral of its input, scaled and inverted: $v_{out}(t) = -\\dfrac{1}{RC}\\displaystyle\\int_0^{t}v_{in}\\,d\\tau + v_{out}(0)$. The minus sign comes from the inverting topology.",
          s: [
            "<b>Step 1 — Time constant.</b> $RC = (10^{4})(10^{-6}) = 0.01$ s = 10 ms.",
            "<b>Step 2 — Integrate the step.</b> A constant 1 V over 10 ms accumulates $\\int = 1\\times0.01 = 0.01$ V·s.",
            "<b>Step 3 — Scale and invert.</b> $v_{out} = -\\dfrac{0.01}{0.01} = -1$ V.",
            "<b>Step 4 — Distractor audit.</b> +1 V drops the inversion; −0.1 V slips a decade in RC; 0 V forgets the integration entirely."
          ],
          a: "$v_{out}(10\\,\\text{ms}) = -1$ V",
          v: "Slope view: the output ramps at $-V_{in}/RC = -100$ V/s — after 10 ms that is exactly −1 V ✓. Practical limit: the ramp continues until the op-amp saturates near its supply rail; real integrators add a large parallel feedback resistor to bleed off DC drift."

        }),
        ref: "Handbook p.380" },

      { q: "Zener diode rated 5.1 V is used with a 270Ω resistor from a 9 V source. Current through Zener (no load):",
        choices: ["$\\approx 14.4$ mA", "$\\approx 33$ mA", "$\\approx 5$ mA", "$\\approx 50$ mA"],
        correct: 0,
        solution: S({
          c: "In a Zener shunt regulator the diode clamps its node at $V_Z$; the series resistor absorbs the rest of the input voltage. With no load, all the resistor current flows through the Zener: $I_Z = (V_{in} - V_Z)/R$.",
          s: [
            "<b>Step 1 — Voltage across the resistor.</b> $9 - 5.1 = 3.9$ V.",
            "<b>Step 2 — Current.</b> $I_Z = 3.9/270 = 14.4$ mA.",
            "<b>Step 3 — Distractor audit.</b> 33 mA divides the full 9 V by 270; 5 mA and 50 mA bracket as guesses."
          ],
          a: "$I_Z \\approx 14.4$ mA",
          v: "Power check (the design follow-up): $P_Z = 5.1\\times0.0144 = 74$ mW — comfortably inside a 250-mW part ✓. Loaded behavior: a load steals current from the Zener; regulation survives only while $I_Z$ stays above the knee (~1-5 mA), so this design tolerates up to ~10 mA of load."

        }),
        ref: "Handbook p.383" },

      { q: "MOSFET in saturation: $V_{GS}=3$ V, threshold $V_{th}=1$ V, $k = 0.5$ mA/V². Find $I_D$.",
        choices: ["$1$ mA", "$2$ mA", "$0.5$ mA", "$4$ mA"],
        correct: 0,
        solution: S({
          c: "Saturation-region MOSFET follows the square law — note THIS problem writes it with the k-parameter convention: $I_D = \\dfrac{k}{2}(V_{GS} - V_{th})^{2}$, where the 'overdrive' $V_{GS} - V_{th}$ is how far the gate sits above threshold.",
          s: [
            "<b>Step 1 — Overdrive.</b> $V_{OV} = 3 - 1 = 2$ V.",
            "<b>Step 2 — Apply.</b> $I_D = \\dfrac{0.5\\,\\text{mA/V}^{2}}{2}\\times(2)^{2} = 0.25\\times4 = 1$ mA.",
            "<b>Step 3 — Distractor audit.</b> 2 mA drops the ÷2; 0.5 mA forgets to square; 4 mA does both."
          ],
          a: "$I_D = 1$ mA",
          v: "Square-law feel: raising $V_{GS}$ to 5 V (overdrive 4) would QUADRUPLE the current to 4 mA — gate voltage is a sensitive throttle ✓. Validity reminder: stay in saturation requires $V_{DS} \\ge V_{OV} = 2$ V; below that the device slides into triode and the formula changes."

        }),
        ref: "Handbook p.386" },

      { q: "Common-emitter BJT amplifier with $\\beta = 200$, $R_C = 5$ k$\\Omega$, $r_e = 25\\ \\Omega$. Voltage gain $|A_v|$ ≈",
        choices: ["$200$", "$25$", "$40$", "$1000$"],
        correct: 0,
        solution: S({
          c: "A handy small-signal form of the common-emitter gain uses the intrinsic emitter resistance $r_e = V_T/I_E$: $|A_v| \\approx R_C/r_e$ (emitter at AC ground). It is the same physics as $g_mR_C$, since $g_m \\approx 1/r_e$.",
          s: [
            "<b>Step 1 — Apply the ratio.</b> $|A_v| = \\dfrac{R_C}{r_e} = \\dfrac{5000}{25} = 200$.",
            "<b>Step 2 — Note what $\\beta$ does NOT do.</b> $\\beta = 200$ matching the answer is a coincidence-trap — $\\beta$ sets the INPUT resistance ($r_\\pi = \\beta r_e = 5$ kΩ), not this gain.",
            "<b>Step 3 — Distractor audit.</b> 25 echoes $r_e$; 40 ≈ $1000/25$ decade slip; 1000 multiplies $\\beta$ by 5."
          ],
          a: "$|A_v| \\approx 200$, inverting (output 180° out of phase).",
          v: "Equivalence check: $r_e = 25\\,\\Omega$ implies $I_E \\approx 1$ mA and $g_m = 40$ mA/V; $g_mR_C = 0.04\\times5000 = 200$ ✓ — same answer through the transconductance route. Stabilization note: an unbypassed emitter resistor $R_E$ changes the gain to $\\approx R_C/(r_e + R_E)$ — less gain, more consistency."

        }),
        ref: "Handbook p.384-385" },
    ],

    // ====================== Ch 10: Power Systems ======================
    10: [
      { q: "Convert delta-connected $Z_\\Delta = 30\\ \\Omega$ (per branch) to equivalent wye-connected $Z_Y$:",
        choices: ["$10\\ \\Omega$", "$30\\ \\Omega$", "$90\\ \\Omega$", "$17.3\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Balanced Δ↔Y conversion is a single factor of 3: $Z_Y = Z_\\Delta/3$ (and back: $Z_\\Delta = 3Z_Y$). Intuition: between any two terminals, the Y path uses TWO impedances in series while the Δ offers one branch paralleled with the other two in series — equality forces the 1:3 ratio.",
          s: [
            "<b>Step 1 — Apply.</b> $Z_Y = 30/3 = 10\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 90 Ω multiplies (wrong direction); 30 Ω forgets to convert; 17.3 Ω divides by $\\sqrt3$ — the factor that belongs to VOLTAGE relationships, not impedance conversion."
          ],
          a: "$Z_Y = 10\\,\\Omega$",
          v: "Terminal-impedance check: Δ between two terminals: $30\\parallel(30+30) = 20\\,\\Omega$; Y between the same terminals: $10 + 10 = 20\\,\\Omega$ ✓ — identical from outside, which is the definition of equivalence. The √3 vs 3 confusion is the planted trap: 3 for impedances, √3 for voltages/currents."

        }),
        ref: "Handbook p.363" },

      { q: "3-phase induction motor: synchronous speed 1800 rpm, full-load 1750 rpm. Slip:",
        choices: ["$2.78\\%$", "$5\\%$", "$0.028\\%$", "$50\\%$"],
        correct: 0,
        solution: S({
          c: "Slip is the induction motor's defining number — the fractional speed lag behind the rotating field: $s = \\dfrac{n_s - n_r}{n_s}$. Without lag there is no induced rotor current and no torque.",
          s: [
            "<b>Step 1 — Slip speed.</b> $1800 - 1750 = 50$ rpm.",
            "<b>Step 2 — Normalize.</b> $s = 50/1800 = 0.0278 = 2.78\\%$.",
            "<b>Step 3 — Distractor audit.</b> 5% rounds carelessly; 0.028% drops the percent conversion; 50% reads the slip SPEED as a percent."
          ],
          a: "$s \\approx 2.78\\%$",
          v: "Plausibility: standard industrial motors run 2-5% slip at full load ✓. Two useful follow-ons: rotor frequency $= sf = 1.67$ Hz; and a nameplate speed like 1750 rpm instantly reveals a 4-pole/60-Hz machine (synchronous 1800) — nameplates encode the pole count."

        }),
        ref: "Handbook p.365" },

      { q: "A motor delivers 5 hp output with efficiency 85%. Input electrical power (W)?",
        choices: ["$\\approx 4{,}386$ W", "$3{,}730$ W", "$5{,}000$ W", "$\\approx 3{,}170$ W"],
        correct: 0,
        solution: S({
          c: "Efficiency relates what you pay for to what you get: $\\eta = P_{out}/P_{in}$. Motors are rated by OUTPUT (shaft) power — and 1 hp = 746 W is a conversion the FE expects cold.",
          s: [
            "<b>Step 1 — Convert the output.</b> $P_{out} = 5\\times746 = 3730$ W.",
            "<b>Step 2 — Divide by efficiency.</b> $P_{in} = 3730/0.85 = 4388$ W.",
            "<b>Step 3 — Distractor audit.</b> 3730 W is the OUTPUT (forgot efficiency); 3170 W MULTIPLIES by 0.85 (efficiency applied backwards); 5000 W is a round-number decoy."
          ],
          a: "$P_{in} \\approx 4{,}386$ W",
          v: "Direction check: input must EXCEED output (you can't get out more than you put in) — 4.39 kW > 3.73 kW ✓. The 656-W difference becomes heat in windings, bearings, and iron — why motor frames have fins and fans, and why efficiency matters at utility scale."

        }),
        ref: "Handbook p.365" },

      { q: "A 230 V single-phase load draws 8 A at $pf = 0.75$ lagging. Reactive power Q:",
        choices: ["$\\approx 1{,}217$ VAR", "$\\approx 1{,}380$ VAR", "$\\approx 1{,}840$ VAR", "$0$"],
        correct: 0,
        solution: S({
          c: "AC power splits into a right triangle: apparent $S = VI$ (what the wires carry), real $P = S\\cos\\theta$ (what does work), reactive $Q = S\\sin\\theta$ (what sloshes in fields). The power factor gives $\\theta = \\arccos(pf)$.",
          s: [
            "<b>Step 1 — Apparent power.</b> $S = 230\\times8 = 1840$ VA.",
            "<b>Step 2 — Angle and sine.</b> $\\theta = \\arccos(0.75) = 41.4°$; $\\sin\\theta = 0.661$.",
            "<b>Step 3 — Reactive power.</b> $Q = 1840\\times0.661 = 1217$ VAR.",
            "<b>Step 4 — Distractor audit.</b> 1380 is the REAL power $P = S\\times0.75$; 1840 is $S$ itself; 0 would require unity power factor."
          ],
          a: "$Q \\approx 1{,}217$ VAR",
          v: "Triangle closure: $\\sqrt{1380^{2} + 1217^{2}} = \\sqrt{3.38\\times10^{6}} = 1840$ ✓. Shortcut worth knowing: $\\sin\\theta = \\sqrt{1 - pf^{2}} = \\sqrt{1 - 0.5625} = 0.661$ — no inverse-cosine needed on a calculator."

        }),
        ref: "Handbook p.362" },
    ],

    // ====================== Ch 11: Electromagnetics ======================
    11: [
      { q: "Two parallel wires 1 m apart, each carrying 50 A in the same direction. Force per meter between them:",
        choices: ["Attractive, $5\\times 10^{-4}$ N/m", "Repulsive, $5\\times 10^{-4}$ N/m", "Zero", "Attractive, $1$ N/m"],
        correct: 0,
        solution: S({
          c: "Each wire's current creates a magnetic field that pushes on the other wire's current: $\\dfrac{F}{L} = \\dfrac{\\mu_0I_1I_2}{2\\pi d}$. Direction rule worth engraving: SAME-direction currents ATTRACT; opposite repel.",
          s: [
            "<b>Step 1 — Plug in.</b> $\\dfrac{F}{L} = \\dfrac{(4\\pi\\times10^{-7})(50)(50)}{2\\pi(1)}$.",
            "<b>Step 2 — Simplify.</b> $= 2\\times10^{-7}\\times2500 = 5\\times10^{-4}$ N/m.",
            "<b>Step 3 — Direction.</b> Same direction → attractive.",
            "<b>Step 4 — Distractor audit.</b> 'Repulsive' flips the rule; zero ignores the interaction; 1 N/m is off by three decades."
          ],
          a: "Attractive, $5\\times10^{-4}$ N/m.",
          v: "Historical anchor: this formula DEFINED the ampere until 2019 (1 A = the current giving $2\\times10^{-7}$ N/m at 1 m) — plug $I_1 = I_2 = 1$ A and the constant pops right out ✓. Where it matters: bus bars in switchgear see enormous forces during short circuits (current² scaling) and must be braced for it."

        }),
        ref: "Handbook p.355" },

      { q: "Coaxial cable: inner conductor radius $a = 1$ mm, outer $b = 3$ mm, dielectric $\\varepsilon_r = 2.2$. Capacitance per meter:",
        choices: ["$\\approx 111$ pF/m", "$\\approx 50$ pF/m", "$\\approx 200$ pF/m", "$\\approx 30$ pF/m"],
        correct: 0,
        solution: S({
          c: "A coax is a cylindrical capacitor: field lines run radially from inner to outer conductor through the dielectric. Per unit length: $C' = \\dfrac{2\\pi\\varepsilon_0\\varepsilon_r}{\\ln(b/a)}$ — only the RATIO $b/a$ matters, logarithmically.",
          s: [
            "<b>Step 1 — Log of the ratio.</b> $\\ln(3/1) = 1.0986$.",
            "<b>Step 2 — Numerator.</b> $2\\pi(8.854\\times10^{-12})(2.2) = 1.224\\times10^{-10}$ F/m.",
            "<b>Step 3 — Divide.</b> $C' = 1.224\\times10^{-10}/1.0986 = 1.11\\times10^{-10}$ F/m $\\approx 111$ pF/m.",
            "<b>Step 4 — Distractor audit.</b> 50 pF/m halves (lost the $\\varepsilon_r$); 200 doubles; 30 misplaces the log."
          ],
          a: "$C' \\approx 111$ pF/m",
          v: "Reality check: RG-58 (similar geometry and dielectric) is specified at ~100 pF/m — our number lands right on the real product ✓. Same $\\ln(b/a)$ appears inverted in the inductance $L' = \\frac{\\mu_0}{2\\pi}\\ln(b/a)$, which is why $Z_0 = \\sqrt{L'/C'}$ of such a cable computes to ~50 Ω."

        }),
        ref: "Handbook p.368" },
    ],

    // ====================== Ch 12: Control Systems ======================
    12: [
      { q: "A second-order system has natural frequency $\\omega_n = 10$ rad/s and damping ratio $\\zeta = 0.4$. Peak time of step response:",
        choices: ["$\\approx 0.343$ s", "$\\approx 0.628$ s", "$\\approx 0.1$ s", "$\\approx 1.0$ s"],
        correct: 0,
        solution: S({
          c: "An underdamped 2nd-order step response overshoots and rings at the DAMPED frequency $\\omega_d = \\omega_n\\sqrt{1-\\zeta^{2}}$ (slightly slower than $\\omega_n$ because damping drags). The first peak arrives at half a ring period: $t_p = \\pi/\\omega_d$.",
          s: [
            "<b>Step 1 — Damped frequency.</b> $\\sqrt{1 - 0.4^{2}} = \\sqrt{0.84} = 0.9165$ → $\\omega_d = 10\\times0.9165 = 9.165$ rad/s.",
            "<b>Step 2 — Peak time.</b> $t_p = \\pi/9.165 = 0.343$ s.",
            "<b>Step 3 — Distractor audit.</b> 0.628 s uses $2\\pi/\\omega_n$ (a full period); 0.1 s is $1/\\omega_n$; 1.0 s is a guess."
          ],
          a: "$t_p \\approx 0.343$ s",
          v: "Companion numbers for the same system (the usual exam follow-ups): overshoot $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^{2}}} = e^{-1.37} \\approx 25\\%$; 2% settling $\\approx 4/(\\zeta\\omega_n) = 1$ s ✓ — peak comes early, settling takes three more rings."

        }),
        ref: "Handbook p.366" },

      { q: "Routh array test: characteristic equation $s^3 + 4s^2 + 5s + K = 0$. Range of $K$ for stability?",
        choices: ["$0 < K < 20$", "$K > 0$", "$K < 0$", "$K > 20$"],
        correct: 0,
        solution: S({
          c: "With a tunable gain $K$ in the characteristic polynomial, Routh-Hurwitz turns into a design tool: build the array with $K$ symbolic, then demand every first-column entry be positive — the inequalities bound the stable range of $K$.",
          s: [
            "<b>Step 1 — Seed the array.</b> $s^{3}$ row: 1, 5; $s^{2}$ row: 4, K.",
            "<b>Step 2 — The $s^{1}$ entry.</b> $\\dfrac{4(5) - 1(K)}{4} = \\dfrac{20 - K}{4} > 0 \\Rightarrow K < 20$.",
            "<b>Step 3 — The $s^{0}$ entry.</b> $K > 0$.",
            "<b>Step 4 — Intersect.</b> $0 < K < 20$ — both conditions must hold simultaneously."
          ],
          a: "$0 < K < 20$",
          v: "The boundary case is physically meaningful: at $K = 20$ the $s^{1}$ row zeroes → poles ON the $j\\omega$ axis at $\\pm j\\sqrt5$ → sustained oscillation — this is exactly the 'ultimate gain' $K_u$ that Ziegler-Nichols tuning hunts for ✓. Above 20, the loop rings itself unstable."

        }),
        ref: "Handbook p.365" },

      { q: "Steady-state error to a ramp input for a Type-1 system with $K_v = 4$:",
        choices: ["$1/4$", "$0$", "$\\infty$", "$1$"],
        correct: 0,
        solution: S({
          c: "The error-constant table, ramp column: a Type-1 system (one integrator) tracks a ramp with a FINITE lag error $e_{ss} = 1/K_v$, where $K_v = \\lim_{s\\to0}sG(s)$ is the velocity constant.",
          s: [
            "<b>Step 1 — Apply.</b> $e_{ss} = 1/K_v = 1/4 = 0.25$.",
            "<b>Step 2 — Place the neighbors.</b> Type 0 chasing a ramp falls behind without bound ($\\infty$); Type 2 catches it exactly (0) — the question sits in the finite middle cell of the table.",
            "<b>Step 3 — Distractor audit.</b> 0 and $\\infty$ belong to the other types; 1 ignores $K_v$."
          ],
          a: "$e_{ss} = 0.25$",
          v: "Physical picture: the output ramps at the SAME slope as the input but lags a constant 0.25 units behind — a position offset, not a growing one ✓. The full table to memorize (type vs input): step/ramp/parabola errors are 1/(1+Kp), ∞, ∞ for Type 0; 0, 1/Kv, ∞ for Type 1; 0, 0, 1/Ka for Type 2."

        }),
        ref: "Handbook p.366" },
    ],

    // ====================== Ch 13: Communications ======================
    13: [
      { q: "An audio channel has SNR = 30 dB. Convert to ratio:",
        choices: ["$1000$", "$30$", "$10$", "$100$"],
        correct: 0,
        solution: S({
          c: "Decibels are a logarithmic wrapper around a ratio. To unwrap a POWER quantity like SNR: $\\text{ratio} = 10^{\\text{dB}/10}$.",
          s: [
            "<b>Step 1 — Apply.</b> $10^{30/10} = 10^{3} = 1000$.",
            "<b>Step 2 — Distractor audit.</b> 30 confuses the dB value with the ratio; 10 and 100 unwrap 10 dB and 20 dB respectively."
          ],
          a: "SNR ratio $= 1000$.",
          v: "The ladder to keep at your fingertips: 0 dB = 1, 3 dB ≈ 2, 10 dB = 10, 20 dB = 100, 30 dB = 1000 — each +10 dB multiplies by 10 ✓. This conversion is the FIRST step of every Shannon-capacity problem; doing the log on the dB number directly is the classic error."

        }),
        ref: "Handbook p.371" },

      { q: "Shannon channel capacity: bandwidth 3 kHz, SNR = 30 dB. Max bit rate:",
        choices: ["$\\approx 29{,}900$ bps", "$3{,}000$ bps", "$30{,}000$ bps", "$\\approx 100{,}000$ bps"],
        correct: 0,
        solution: S({
          c: "Shannon-Hartley caps the error-free bit rate of ANY scheme on a noisy channel: $C = B\\log_2(1 + S/N)$ — bandwidth times bits-per-Hz, with SNR in LINEAR form (not dB).",
          s: [
            "<b>Step 1 — Convert SNR.</b> 30 dB → 1000.",
            "<b>Step 2 — Bits per Hz.</b> $\\log_2(1001) \\approx 9.97$.",
            "<b>Step 3 — Scale by bandwidth.</b> $C = 3000\\times9.97 \\approx 29{,}900$ bps ≈ 30 kbps.",
            "<b>Step 4 — Distractor audit.</b> 3,000 bps echoes B; 30,000 is the right ballpark arrived at sloppily (acceptable mental math, but A is the computed value); 100,000 has no route."
          ],
          a: "$C \\approx 29.9$ kbps",
          v: "History validates the formula: 3-kHz phone lines + ~30 dB SNR capped analog modems at 33.6 kbps — engineers pushed to within a whisker of this exact ceiling and stopped, because Shannon says stop ✓."

        }),
        ref: "Handbook p.371" },

      { q: "AM total transmitted power with carrier $P_c = 100$ W, $m = 0.8$. Total $P_{AM}$:",
        choices: ["$132$ W", "$100$ W", "$32$ W", "$164$ W"],
        correct: 0,
        solution: S({
          c: "An AM signal carries the carrier PLUS two sidebands. With modulation index $m$, total power is $P_{AM} = P_c\\left(1 + \\dfrac{m^{2}}{2}\\right)$ — the carrier term is fixed; only the $m^{2}/2$ part holds the message.",
          s: [
            "<b>Step 1 — Sideband fraction.</b> $m^{2}/2 = 0.64/2 = 0.32$.",
            "<b>Step 2 — Total.</b> $P_{AM} = 100(1 + 0.32) = 132$ W.",
            "<b>Step 3 — Distractor audit.</b> 100 W is the carrier alone; 32 W is the sidebands alone; 164 W doubles the sideband term (forgetting the /2)."
          ],
          a: "$P_{AM} = 132$ W",
          v: "Efficiency lesson hiding in the numbers: only $32/132 = 24\\%$ of the transmitted power carries information, even at a healthy $m = 0.8$; at $m = 1$ the ceiling is 33% — THE motivation for DSB-SC and SSB, which delete the wasteful carrier ✓."

        }),
        ref: "Handbook p.371" },
    ],

    // ====================== Ch 14: Computer Networks ======================
    14: [
      { q: "How many subnets and usable hosts for a /20 subnet?",
        choices: ["1 subnet, 4094 hosts", "16 subnets, 254 hosts each", "256 subnets, 16 hosts each", "1 subnet, 1024 hosts"],
        correct: 0,
        solution: S({
          c: "A /20 prefix claims 20 bits for the network, leaving $32 - 20 = 12$ bits to number hosts. Host capacity $= 2^{(\\text{host bits})} - 2$ — minus the all-zeros (network) and all-ones (broadcast) addresses.",
          s: [
            "<b>Step 1 — Host bits.</b> $32 - 20 = 12$.",
            "<b>Step 2 — Count.</b> $2^{12} = 4096$ total → $4096 - 2 = 4094$ usable.",
            "<b>Step 3 — Distractor audit.</b> '16 subnets × 254' describes SPLITTING the /20 into /24s — a different question; '256 × 16' garbles further; 1024 mistakes $2^{10}$."
          ],
          a: "One /20 subnet = 4,094 usable hosts.",
          v: "Sizing ladder: /24 → 254, /22 → 1022, /20 → 4094, /16 → 65,534 — each bit borrowed from hosts halves capacity ✓. The −2 caveat: modern point-to-point /31s (RFC 3021) skip it, but the FE expects the classic subtraction."

        }),
        ref: "Handbook p.393" },

      { q: "What protocol resolves IP address to MAC address on a local network?",
        choices: ["ARP", "DNS", "DHCP", "TCP"],
        correct: 0,
        solution: S({
          c: "Delivering a packet on the LOCAL network needs the destination's hardware (MAC) address, but applications only know IPs. ARP (Address Resolution Protocol) bridges the gap: broadcast 'who has 192.168.1.5?' — the owner replies with its MAC.",
          s: [
            "<b>Step 1 — Match the job.</b> IP→MAC on a local segment = ARP, by definition.",
            "<b>Step 2 — Sort the look-alikes.</b> DNS maps NAMES→IP (a different translation, network-wide); DHCP HANDS OUT IP addresses (assignment, not resolution); TCP is transport — no addressing role.",
            "<b>Step 3 — Mechanics.</b> Request is broadcast (everyone hears), reply is unicast; results cached in the ARP table to avoid re-asking."
          ],
          a: "ARP.",
          v: "Self-check with the journey of a packet: DNS finds the server's IP → routing finds the next hop → ARP finds THAT hop's MAC → the frame goes out. Three lookups, three protocols, three layers ✓. (IPv6 replaces ARP with NDP — same job, new name.)"

        }),
        ref: "Handbook p.399" },

      { q: "Latency vs. throughput: a satellite link has 300 ms one-way latency and 100 Mbps throughput. Bandwidth-delay product (bits in flight):",
        choices: ["$3 \\times 10^7$ bits", "$3 \\times 10^4$ bits", "$10^8$ bits", "$3 \\times 10^{10}$ bits"],
        correct: 0,
        solution: S({
          c: "Bandwidth-delay product = how many bits are physically 'in the pipe' at once: BDP $= \\text{rate}\\times\\text{delay}$. A fast link with long latency holds an enormous amount of unacknowledged data in flight.",
          s: [
            "<b>Step 1 — Multiply (one-way, as the problem frames it).</b> $100\\times10^{6}\\,\\text{bps}\\times0.3\\,\\text{s} = 3\\times10^{7}$ bits.",
            "<b>Step 2 — Humanize.</b> 30 Mbit ≈ 3.75 MB continuously airborne between ground and satellite.",
            "<b>Step 3 — Distractor audit.</b> $3\\times10^{4}$ and $3\\times10^{10}$ are ±3-decade slips; $10^{8}$ is the raw bandwidth mislabeled."
          ],
          a: "$3\\times10^{7}$ bits (≈30 Mb) in flight.",
          v: "Why satellite TCP needs help: a sender limited to a 64-KB window (≈0.5 Mbit) can fill only ~2% of this pipe — throughput collapses to ~1.7 Mbps regardless of the 100-Mbps link ✓. Cures: window scaling, or performance-enhancing proxies."

        }),
        ref: "Handbook p.399" },
    ],

    // ====================== Ch 15: Digital Systems ======================
    15: [
      { q: "Simplify $F = A'B + AB$ using K-map or algebra:",
        choices: ["$B$", "$A$", "$AB$", "$A + B$"],
        correct: 0,
        solution: S({
          c: "Boolean factoring works like algebra: both terms share $B$, so pull it out and let the complement law ($A' + A = 1$) finish the job.",
          s: [
            "<b>Step 1 — Factor.</b> $A'B + AB = B(A' + A)$.",
            "<b>Step 2 — Complement law.</b> $A' + A = 1$, so $F = B\\cdot1 = B$.",
            "<b>Step 3 — Distractor audit.</b> $A$ factors the wrong variable; $AB$ keeps only one term; $A+B$ over-includes (true at $A{=}1, B{=}0$, where $F$ is actually 0)."
          ],
          a: "$F = B$",
          v: "Truth-table sweep: $F = 1$ exactly at $(A,B) = (0,1)$ and $(1,1)$ — precisely 'whenever $B = 1$' ✓. Hardware payoff: two AND gates + an OR collapse to a single wire — Boolean simplification IS cost reduction."

        }),
        ref: "Handbook p.389-390" },

      { q: "How many cells in a 4-variable K-map?",
        choices: ["$16$", "$8$", "$4$", "$32$"],
        correct: 0,
        solution: S({
          c: "A K-map is the truth table folded into a grid — one cell per input combination (minterm). With $n$ variables there are $2^{n}$ combinations, hence $2^{n}$ cells.",
          s: [
            "<b>Step 1 — Apply.</b> $2^{4} = 16$ cells.",
            "<b>Step 2 — Distractor audit.</b> 8 is the 3-variable map; 4 the 2-variable; 32 would be 5 variables."
          ],
          a: "16 cells.",
          v: "The ladder: 2-var → 4 cells, 3-var → 8 (2×4 grid), 4-var → 16 (4×4), 5-var → two stacked 4×4 maps ✓. Why the grid beats the table: Gray-ordered rows/columns make logically adjacent minterms physically adjacent, so simplification groups become visible rectangles."

        }),
        ref: "Handbook p.390" },

      { q: "An n-bit binary counter cycles through how many states before repeating?",
        choices: ["$2^n$", "$n$", "$n^2$", "$2n$"],
        correct: 0,
        solution: S({
          c: "Each flip-flop stores one bit, and every added bit DOUBLES the number of representable values: $n$ bits → $2^{n}$ states, counted 0 through $2^{n}-1$ before wrapping.",
          s: [
            "<b>Step 1 — Apply.</b> $2^{n}$ states per full cycle.",
            "<b>Step 2 — Distractor audit.</b> $n$ counts the flip-flops; $n^{2}$ and $2n$ grow polynomially — state spaces grow EXPONENTIALLY."
          ],
          a: "$2^{n}$ states.",
          v: "Concrete anchors: 4-bit → 16 states (0-15), 8-bit → 256, 16-bit → 65,536 ✓. Frequency-divider view: the MSB toggles once per full cycle, so an $n$-bit counter also divides the clock frequency by $2^{n}$ — counters and dividers are the same hardware."

        }),
        ref: "Handbook p.391" },

      { q: "Hex subtraction: $\\text{B5}_{16} - \\text{4A}_{16}$ = ?",
        choices: ["$\\text{6B}_{16}$", "$\\text{FB}_{16}$", "$\\text{6A}_{16}$", "$\\text{75}_{16}$"],
        correct: 0,
        solution: S({
          c: "Hexadecimal is base-16 with digits 0-9 then A=10…F=15. The safest exam route for arithmetic: convert to decimal, compute, convert back.",
          s: [
            "<b>Step 1 — To decimal.</b> $\\text{B5} = 11\\times16 + 5 = 181$; $\\text{4A} = 4\\times16 + 10 = 74$.",
            "<b>Step 2 — Subtract.</b> $181 - 74 = 107$.",
            "<b>Step 3 — Back to hex.</b> $107 = 6\\times16 + 11 = \\text{6B}$.",
            "<b>Step 4 — Distractor audit.</b> 6A is off by one (borrow slip); 75 subtracts digit-wise without borrowing (5−A 'borrowed' wrong); FB ignores the borrow direction entirely."
          ],
          a: "$\\text{B5}_{16} - \\text{4A}_{16} = \\text{6B}_{16}$",
          v: "Additive check: $\\text{6B} + \\text{4A} = 107 + 74 = 181 = \\text{B5}$ ✓. Direct-hex alternative for speed: $5 - \\text{A}$ needs a borrow → $21_{16}... $ i.e. $(16+5)-10 = 11 = \\text{B}$, then $\\text{A}-4 = 6$ → 6B — same answer, one line."

        }),
        ref: "Handbook p.388" },
    ],

    // ====================== Ch 16: Computer Systems ======================
    16: [
      { q: "A program runs in 100 s. Profiling shows 80% can be parallelized. With 4 cores, Amdahl's law gives total time of:",
        choices: ["$\\approx 40$ s", "$25$ s", "$\\approx 50$ s", "$80$ s"],
        correct: 0,
        solution: S({
          c: "Amdahl's law with a FINITE core count: speedup $= \\dfrac{1}{(1-p) + p/n}$ — the serial part runs at full length while the parallel part divides by $n$.",
          s: [
            "<b>Step 1 — Split the time.</b> Serial: $0.2\\times100 = 20$ s (unchangeable); parallel: 80 s of work.",
            "<b>Step 2 — Divide the parallel part by 4 cores.</b> $80/4 = 20$ s.",
            "<b>Step 3 — Total.</b> $20 + 20 = 40$ s (speedup $= 2.5\\times$).",
            "<b>Step 4 — Distractor audit.</b> 25 s divides EVERYTHING by 4 (ignores the serial part); 50 s halves arbitrarily; 80 s only removes the serial portion."
          ],
          a: "$\\approx 40$ s.",
          v: "Ceiling check: even infinite cores leave the 20-s serial floor — so 4 cores already deliver half the theoretically possible gain ✓. The practical reading: past a few cores, effort is better spent shrinking the serial fraction than adding hardware."

        }),
        ref: "Handbook p.408" },

      { q: "Cache size: 64 KB; cache line: 64 bytes. Number of cache lines:",
        choices: ["$1024$", "$64$", "$256$", "$4096$"],
        correct: 0,
        solution: S({
          c: "A cache is divided into fixed-size LINES (blocks) — the unit of transfer with memory. Line count = total capacity ÷ line size.",
          s: [
            "<b>Step 1 — Divide.</b> $\\dfrac{64\\,\\text{KB}}{64\\,\\text{B}} = \\dfrac{65{,}536}{64} = 1024$ lines.",
            "<b>Step 2 — Distractor audit.</b> 64 confuses the two 64s; 256 and 4096 are factor-of-4 slips ($2^{8}$, $2^{12}$ instead of $2^{10}$)."
          ],
          a: "1024 lines.",
          v: "Power-of-two check: $64\\text{K} = 2^{16}$, line $= 2^{6}$ → $2^{16-6} = 2^{10} = 1024$ ✓ — cache arithmetic is exponent subtraction. Address-field consequence: a direct-mapped version of this cache needs exactly 10 index bits and 6 offset bits."

        }),
        ref: "Handbook p.407" },

      { q: "Stack operations: push A, push B, push C, pop, pop, push D. Top of stack now contains:",
        choices: ["$D$", "$A$", "$C$", "$B$"],
        correct: 0,
        solution: S({
          c: "A stack is LIFO — the only accessible item is the TOP. To answer any push/pop sequence question, simply replay the operations while tracking the contents.",
          s: [
            "<b>Step 1 — Replay.</b> push A → [A]; push B → [A,B]; push C → [A,B,C].",
            "<b>Step 2 — The pops.</b> pop removes C → [A,B]; pop removes B → [A]. Note pops always take the MOST RECENT survivor.",
            "<b>Step 3 — Final push.</b> push D → [A, D] — top is D.",
            "<b>Step 4 — Distractor audit.</b> C and B were already popped; A is at the BOTTOM, buried under D."
          ],
          a: "Top of stack = D (contents bottom→top: A, D).",
          v: "Pattern worth noticing: after equal pushes and pops in any legal order, the stack holds the items never popped, in their original relative order — here A then D ✓. This replay discipline answers every stack-trace exam question mechanically."

        }),
        ref: "Handbook p.408" },
    ],

    // ====================== Ch 17: Software Engineering ======================
    17: [
      { q: "Time complexity of recursive Fibonacci (naive, no memoization)?",
        choices: ["$O(2^n)$", "$O(n)$", "$O(n^2)$", "$O(n \\log n)$"],
        correct: 0,
        solution: S({
          c: "Naive recursive Fibonacci recomputes the same values over and over: fib(n) calls fib(n−1) AND fib(n−2), each of which branches again — a binary tree of calls that grows EXPONENTIALLY: $O(2^{n})$.",
          s: [
            "<b>Step 1 — See the explosion.</b> The recurrence $T(n) = T(n-1) + T(n-2) + O(1)$ itself grows like Fibonacci — exponentially ($\\approx\\varphi^{n}$, loosely bounded by $2^{n}$).",
            "<b>Step 2 — Spot the waste.</b> fib(5) computes fib(3) twice, fib(2) three times — identical subproblems, recomputed.",
            "<b>Step 3 — The fixes.</b> Memoization (cache each result): $O(n)$ time; iteration with two variables: $O(n)$ time, $O(1)$ space.",
            "<b>Step 4 — Distractor audit.</b> $O(n)$ describes the FIXED versions; $O(n^{2})$ and $O(n\\log n)$ underestimate the branching."
          ],
          a: "$O(2^{n})$ for the naive recursion.",
          v: "Feel the difference: fib(40) naive ≈ $10^{9}$ calls (seconds of CPU); memoized: 40 lookups (microseconds) ✓. This is THE canonical motivation for dynamic programming: overlapping subproblems + caching = exponential→linear."

        }),
        ref: "Handbook p.415" },

      { q: "Queue data structure follows:",
        choices: ["FIFO", "LIFO", "Priority", "Random"],
        correct: 0,
        solution: S({
          c: "A queue is FIFO — first in, first out — like a checkout line: items join at the BACK (enqueue) and leave from the FRONT (dequeue), preserving arrival order.",
          s: [
            "<b>Step 1 — Match the definition.</b> FIFO is the queue's defining discipline.",
            "<b>Step 2 — Where it appears.</b> Breadth-first search, task schedulers, print spoolers, network packet buffers — anywhere fairness/order of arrival matters.",
            "<b>Step 3 — Distractor audit.</b> LIFO is the STACK; priority order is a priority queue/heap (a different structure despite the name); random access is an array."
          ],
          a: "FIFO.",
          v: "The algorithm pairing that locks both in: queue↔BFS (explore level by level), stack↔DFS (dive deep first) — choosing the container chooses the traversal ✓. Implementation note: a ring buffer gives O(1) enqueue and dequeue."

        }),
        ref: "Handbook p.415" },

      { q: "Doubly linked list: which operation is $O(1)$ given pointer to the target node?",
        choices: ["Delete the node", "Search by value", "Reverse the list", "Get the length"],
        correct: 0,
        solution: S({
          c: "A doubly-linked list gives every node BOTH next and prev pointers. The payoff: holding a pointer to any node, you can splice it out in constant time — no hunt for its predecessor.",
          s: [
            "<b>Step 1 — The O(1) deletion.</b> node.prev.next = node.next; node.next.prev = node.prev — two pointer writes, done, regardless of list length.",
            "<b>Step 2 — Why the singly-linked version can't.</b> Deleting needs the PREDECESSOR's next rewired, and a singly-linked node doesn't know its predecessor → $O(n)$ walk to find it.",
            "<b>Step 3 — Distractor audit.</b> Search by value must traverse → $O(n)$; reversing visits every node → $O(n)$; length requires traversal or a maintained counter."
          ],
          a: "Delete the node (given its pointer) — $O(1)$.",
          v: "Where this exact property earns its keep: LRU caches pair a hash map (find the node in O(1)) with a doubly-linked list (move/evict it in O(1)) — the textbook composite structure built on this answer ✓."

        }),
        ref: "Handbook p.415" },
    ],
  };

  // Merge extras into the question bank
  let added = 0;
  for (const ch of QUESTION_BANK.chapters) {
    if (EXTRAS[ch.id]) {
      ch.questions.push(...EXTRAS[ch.id]);
      added += EXTRAS[ch.id].length;
    }
  }
  console.log(`Question bank extended with ${added} additional questions. Total: ${QUESTION_BANK.chapters.reduce((s, c) => s + c.questions.length, 0)} questions.`);
})();
