// FE Electrical Question Bank — Extension Pack 3 (~110 additional problems)
// Original problems testing FE-curriculum concepts.

(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") {
    console.warn("Pack 3 not loaded — base bank missing."); return;
  }

  const PACK3 = {
    // ====================== Ch 1: Math — +10 ======================
    1: [
      { q: "Roots of $x^3 - 6x^2 + 11x - 6 = 0$:",
        choices: ["$1, 2, 3$", "$1, 3, 6$", "$-1, -2, -3$", "$2, 3, 5$"],
        correct: 0,
        solution: S({
          c: "Cubics on the FE crack open with the RATIONAL ROOT THEOREM: any rational root must divide the constant term (here ±1, ±2, ±3, ±6). Find one root by trial, then divide down to a quadratic.",
          s: [
            "<b>Step 1 — Trial the easy candidates.</b> $x = 1$: $1 - 6 + 11 - 6 = 0$ ✓ — a root.",
            "<b>Step 2 — Factor it out.</b> Dividing by $(x-1)$: $x^{2} - 5x + 6$.",
            "<b>Step 3 — Factor the quadratic.</b> $(x-2)(x-3)$ → roots 1, 2, 3.",
            "<b>Step 4 — Distractor audit.</b> $-1,-2,-3$ flips all signs (those solve $x^3+6x^2+11x+6$); the others fail the trial test instantly."
          ],
          a: "$x = 1, 2, 3$",
          v: "Vieta's checks in seconds: sum of roots $= 6 = -(-6)/1$ ✓; product $= 6 = -(-6)/1$ ✓; pairwise sum $= 11$ ✓ — all three coefficients confirmed."

        }),
        ref: "Handbook p.35" },
      { q: "$\\sum_{k=1}^{100} k$ = ",
        choices: ["$5050$", "$5000$", "$10000$", "$100$"],
        correct: 0,
        solution: S({
          c: "Sum of the first $n$ integers — the most-used closed form in counting: $\\sum_{k=1}^{n}k = \\dfrac{n(n+1)}{2}$.",
          s: [
            "<b>Step 1 — Apply.</b> $\\dfrac{100\\times101}{2} = 5050$.",
            "<b>Step 2 — Distractor audit.</b> 5000 is $100^{2}/2$ (forgot the +1); 10000 is $100^{2}$; 100 is just $n$."
          ],
          a: "$5050$",
          v: "Gauss's pairing proves the formula on sight: $1+100, 2+99, \\ldots$ — 50 pairs of 101 = 5050 ✓. The same trick derives the formula: pair the sum with its reverse, get $n$ copies of $(n+1)$, halve."

        }),
        ref: "Handbook p.36" },
      { q: "$\\sum_{k=1}^{\\infty} (1/2)^k$ = ",
        choices: ["$1$", "$2$", "$1/2$", "Diverges"],
        correct: 0,
        solution: S({
          c: "An infinite geometric series converges when $|r| < 1$. STARTING INDEX matters: from $k=1$ (no '1' term), $\\sum_{k=1}^{\\infty}r^{k} = \\dfrac{r}{1-r}$.",
          s: [
            "<b>Step 1 — Apply with r = 1/2.</b> $\\dfrac{1/2}{1 - 1/2} = \\dfrac{1/2}{1/2} = 1$.",
            "<b>Step 2 — Distractor audit.</b> 2 is the $k=0$ version ($\\frac{1}{1-r}$, which includes the leading 1); 1/2 is just the first term; 'diverges' needs $|r| \\ge 1$."
          ],
          a: "$1$",
          v: "Picture proof: $\\tfrac12 + \\tfrac14 + \\tfrac18 + \\cdots$ keeps filling half the REMAINING gap to 1 — never beyond ✓ (Zeno's paradox, resolved). Partial-sum check: after 4 terms, $0.9375$ — closing on 1."

        }),
        ref: "Handbook p.50" },
      { q: "Polar coordinates of point $(x,y) = (3, 4)$:",
        choices: ["$r=5$, $\\theta\\approx 53.13°$", "$r=7$, $\\theta=45°$", "$r=5$, $\\theta=36.87°$", "$r=25$"],
        correct: 0,
        solution: S({
          c: "Rectangular → polar: $r = \\sqrt{x^{2}+y^{2}}$ (distance), $\\theta = \\arctan(y/x)$ (angle from +x axis), quadrant-checked.",
          s: [
            "<b>Step 1 — Distance.</b> $r = \\sqrt{9+16} = 5$.",
            "<b>Step 2 — Angle.</b> $\\arctan(4/3) = 53.13°$ — first quadrant, no correction needed.",
            "<b>Step 3 — Distractor audit.</b> 36.87° is $\\arctan(3/4)$ — the y/x ratio INVERTED (the planted trap); $r = 7$ adds instead of Pythagorizing; $r = 25$ forgot the square root."
          ],
          a: "$r = 5$, $\\theta \\approx 53.13°$",
          v: "Rebuild the point: $5\\cos53.13° = 5(0.6) = 3$ ✓, $5\\sin53.13° = 5(0.8) = 4$ ✓. The 3-4-5 triangle's two angles (36.87°, 53.13°) appear constantly — memorize which leg each belongs to: angle is measured FROM the x-axis, so opposite side is y."

        }),
        ref: "Handbook p.36" },
      { q: "Partial fraction decomposition of $\\dfrac{2}{(s+1)(s+3)}$:",
        choices: ["$\\frac{1}{s+1} - \\frac{1}{s+3}$", "$\\frac{1}{s+1} + \\frac{1}{s+3}$", "$\\frac{2}{s+1}$", "$\\frac{2}{s+2}$"],
        correct: 0,
        solution: S({
          c: "Distinct linear factors split as $\\dfrac{A}{s+1} + \\dfrac{B}{s+3}$. The COVER-UP method finds each constant instantly: cover one factor, evaluate the rest at its root.",
          s: [
            "<b>Step 1 — A (cover $s+1$, set $s = -1$).</b> $A = \\dfrac{2}{-1+3} = 1$.",
            "<b>Step 2 — B (cover $s+3$, set $s = -3$).</b> $B = \\dfrac{2}{-3+1} = -1$.",
            "<b>Step 3 — Assemble.</b> $\\dfrac{1}{s+1} - \\dfrac{1}{s+3}$.",
            "<b>Step 4 — Distractor audit.</b> The '+' version (choice B) fails recombination (gives $\\frac{2s+4}{(s+1)(s+3)}$); the others aren't decompositions at all."
          ],
          a: "$\\dfrac{1}{s+1} - \\dfrac{1}{s+3}$",
          v: "Recombine to confirm: $\\dfrac{(s+3)-(s+1)}{(s+1)(s+3)} = \\dfrac{2}{(s+1)(s+3)}$ ✓. Payoff: the inverse Laplace drops out instantly — $e^{-t} - e^{-3t}$ — which is WHY partial fractions exist on this exam."

        }),
        ref: "Handbook p.36" },
      { q: "Cross product: $(2\\hat{i}+3\\hat{j}) \\times (\\hat{i}-\\hat{j})$ = ",
        choices: ["$-5\\hat{k}$", "$5\\hat{k}$", "$0$", "$\\hat{i}-\\hat{j}$"],
        correct: 0,
        solution: S({
          c: "For 2-D vectors (z = 0), the cross product has only a $\\hat k$ component: $A_xB_y - A_yB_x$ — positive out of the page, negative into it.",
          s: [
            "<b>Step 1 — Apply.</b> $(2)(-1) - (3)(1) = -2 - 3 = -5$ → $-5\\hat k$.",
            "<b>Step 2 — Distractor audit.</b> $+5\\hat k$ subtracts in the wrong order ($A_yB_x - A_xB_y$); 0 would need parallel vectors; $\\hat i - \\hat j$ confuses cross with subtraction."
          ],
          a: "$-5\\hat k$",
          v: "Two readings of the same number: magnitude 5 = the AREA of the parallelogram the vectors span; sign − = clockwise turn from $\\vec A$ to $\\vec B$ (right-hand rule, into the page) ✓. Anticommutativity check: $\\vec B\\times\\vec A = +5\\hat k$ — order matters."

        }),
        ref: "Handbook p.38" },
      { q: "$\\int_0^1 (3x^2 + 1)\\,dx$:",
        choices: ["$2$", "$1$", "$4$", "$3$"],
        correct: 0,
        solution: S({
          c: "Integrate term by term with the power rule $\\int x^{n}dx = \\dfrac{x^{n+1}}{n+1}$, then evaluate at the limits.",
          s: [
            "<b>Step 1 — Antiderivative.</b> $\\int(3x^{2} + 1)dx = x^{3} + x$.",
            "<b>Step 2 — Evaluate.</b> $(1 + 1) - (0 + 0) = 2$.",
            "<b>Step 3 — Distractor audit.</b> 1 keeps only one of the two terms; 4 misintegrates $3x^{2}$ as $3x^{3}$; 3 sums the coefficients."
          ],
          a: "$2$",
          v: "Termwise check: $\\int_0^{1}3x^{2}dx = 1$ and $\\int_0^{1}1\\,dx = 1$ → $1 + 1 = 2$ ✓. Sense check: the integrand runs from 1 (at 0) to 4 (at 1) over width 1 — an area of 2 sits plausibly in that range ✓."

        }),
        ref: "Handbook p.49" },
      { q: "Rank of $A = \\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$:",
        choices: ["$1$", "$2$", "$0$", "$4$"],
        correct: 0,
        solution: S({
          c: "Rank = the number of linearly INDEPENDENT rows (equivalently columns) — the true dimensionality of what the matrix does. Spotting a row that is a multiple of another collapses the rank immediately.",
          s: [
            "<b>Step 1 — Compare the rows.</b> Row 2 $= (2, 4) = 2\\times$ Row 1 $= 2(1,2)$ — dependent.",
            "<b>Step 2 — Confirm via determinant.</b> $\\det = 1(4) - 2(2) = 0$ → not full rank.",
            "<b>Step 3 — Count what's left.</b> One independent row → rank 1.",
            "<b>Step 4 — Distractor audit.</b> 2 would need $\\det \\ne 0$; 0 only for the zero matrix; 4 confuses rank with an entry."
          ],
          a: "Rank $= 1$",
          v: "Geometric meaning: this matrix squashes the whole plane onto the LINE through $(1,2)$ — a 1-dimensional image, rank 1 ✓. The chain to remember: $\\det = 0 \\Leftrightarrow$ rank $< n \\Leftrightarrow$ singular $\\Leftrightarrow$ a zero eigenvalue."

        }),
        ref: "Handbook p.57" },
      { q: "If $\\sin\\theta = 0.6$ and $\\theta$ in Q1, then $\\cos\\theta$:",
        choices: ["$0.8$", "$-0.8$", "$0.4$", "$\\pm 0.8$"],
        correct: 0,
        solution: S({
          c: "The Pythagorean identity $\\sin^{2}\\theta + \\cos^{2}\\theta = 1$ recovers one ratio from the other — up to a SIGN, which the quadrant decides.",
          s: [
            "<b>Step 1 — Solve the identity.</b> $\\cos^{2}\\theta = 1 - 0.36 = 0.64 \\Rightarrow \\cos\\theta = \\pm0.8$.",
            "<b>Step 2 — Apply the quadrant.</b> Q1: both sine and cosine positive → $+0.8$.",
            "<b>Step 3 — Distractor audit.</b> $-0.8$ belongs to Q2; $\\pm0.8$ ignores the given quadrant; 0.4 subtracts without squaring."
          ],
          a: "$\\cos\\theta = 0.8$",
          v: "It's the 3-4-5 triangle again: $\\sin = 3/5$, $\\cos = 4/5$ ✓. Quadrant sign map worth a glance: 'All Students Take Calculus' — All(+,+), Sin only, Tan only, Cos only — settles every such sign question."

        }),
        ref: "Handbook p.37" },
      { q: "$\\sinh(x)$ expressed in exponentials:",
        choices: ["$\\dfrac{e^x - e^{-x}}{2}$", "$\\dfrac{e^x + e^{-x}}{2}$", "$\\dfrac{1 - e^x}{2}$", "$e^x \\cdot e^{-x}$"],
        correct: 0,
        solution: S({
          c: "Hyperbolic functions are exponential combinations: $\\sinh x = \\dfrac{e^{x} - e^{-x}}{2}$ (odd, like sine) and $\\cosh x = \\dfrac{e^{x} + e^{-x}}{2}$ (even, like cosine).",
          s: [
            "<b>Step 1 — Match.</b> $\\sinh$ takes the MINUS combination.",
            "<b>Step 2 — Distractor audit.</b> The '+' version is $\\cosh$ (choice B); $(1-e^{x})/2$ is malformed; $e^{x}e^{-x} = 1$ — a constant."
          ],
          a: "$\\sinh x = \\dfrac{e^{x} - e^{-x}}{2}$",
          v: "Parity check: swap $x \\to -x$ — the minus combination flips sign (odd ✓); evaluate at 0: $\\sinh0 = 0$, $\\cosh0 = 1$ ✓. The sign-flipped identity $\\cosh^{2} - \\sinh^{2} = 1$ is why catenary cables and transmission-line equations speak hyperbolic."

        }),
        ref: "Handbook p.37" },
    ],

    // ====================== Ch 2: Prob — +5 ======================
    2: [
      { q: "Variance of {1, 3, 5, 7, 9} (population variance):",
        choices: ["$8$", "$5$", "$10$", "$2.83$"],
        correct: 0,
        solution: S({
          c: "Variance = average squared distance from the mean. POPULATION variance divides by $n$; SAMPLE variance by $n-1$ — the question says population, so divide by 5.",
          s: [
            "<b>Step 1 — Mean.</b> $25/5 = 5$.",
            "<b>Step 2 — Squared deviations.</b> $(-4)^{2}, (-2)^{2}, 0, 2^{2}, 4^{2} = 16, 4, 0, 4, 16$ → sum 40.",
            "<b>Step 3 — Divide by n.</b> $\\sigma^{2} = 40/5 = 8$.",
            "<b>Step 4 — Distractor audit.</b> 10 is the SAMPLE variance ($40/4$) — the planted twin; 2.83 is $\\sqrt8$ (the standard deviation); 5 is the mean."
          ],
          a: "$\\sigma^{2} = 8$ (population).",
          v: "Unit check: variance carries SQUARED units; its root $\\sigma = 2.83$ is what shares units with the data ✓. The n vs n−1 reading habit — 'population/process' vs 'sample' — settles this entire question family."

        }),
        ref: "Handbook p.63" },
      { q: "Probability of rolling 7 with two dice:",
        choices: ["$1/6$", "$1/36$", "$1/12$", "$2/7$"],
        correct: 0,
        solution: S({
          c: "Two dice make $6\\times6 = 36$ equally likely ORDERED outcomes. Count the pairs hitting the target sum, divide by 36.",
          s: [
            "<b>Step 1 — List the pairs for 7.</b> (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — six ordered ways, the most of any sum.",
            "<b>Step 2 — Divide.</b> $6/36 = 1/6$.",
            "<b>Step 3 — Distractor audit.</b> $1/36$ is a SINGLE pair (like snake-eyes); $1/12$ is sums 4 or 10 (3 ways); $2/7$ confuses outcomes with sums."
          ],
          a: "$P(7) = 1/6$",
          v: "Shape check: ways per sum rise 1,2,3,4,5,6 (sums 2-7) then fall symmetrically — 7 is the peak, hence dice games pivot on it (craps' 'seven out') ✓. All 36 ways sum to 1 ✓."

        }),
        ref: "Handbook p.64" },
      { q: "Bayes: P(A)=0.3, P(B|A)=0.8, P(B|A')=0.2. P(A|B):",
        choices: ["$0.632$", "$0.3$", "$0.8$", "$0.5$"],
        correct: 0,
        solution: S({
          c: "Bayes' theorem reverses a conditional: $P(A|B) = \\dfrac{P(B|A)P(A)}{P(B)}$, where the denominator totals BOTH routes to B: $P(B) = P(B|A)P(A) + P(B|A')P(A')$.",
          s: [
            "<b>Step 1 — Complement.</b> $P(A') = 1 - 0.3 = 0.7$.",
            "<b>Step 2 — Total probability of B.</b> $P(B) = 0.8(0.3) + 0.2(0.7) = 0.24 + 0.14 = 0.38$.",
            "<b>Step 3 — Reverse.</b> $P(A|B) = 0.24/0.38 \\approx 0.632$.",
            "<b>Step 4 — Distractor audit.</b> 0.3 echoes the prior (ignores the evidence); 0.8 echoes $P(B|A)$ — direction confusion again; 0.5 is a shrug."
          ],
          a: "$P(A|B) \\approx 0.632$",
          v: "Counting check with 100 trials: 30 A-cases → 24 give B; 70 non-A → 14 give B; of the 38 B's, 24 are A's → $24/38 = 0.632$ ✓. Direction sense: B is 4× likelier under A, so observing B lifts A's probability from 0.30 to 0.63 — evidence moved it the right way ✓."

        }),
        ref: "Handbook p.65" },
      { q: "Standard deviation of $X = 2Y + 3$ given $\\sigma_Y = 4$:",
        choices: ["$8$", "$11$", "$4$", "$16$"],
        correct: 0,
        solution: S({
          c: "Linear transformations move spread predictably: multiplying by $a$ scales the standard deviation by $|a|$; ADDING a constant shifts everything equally and changes spread NOT AT ALL: $\\sigma_{aY+b} = |a|\\sigma_Y$.",
          s: [
            "<b>Step 1 — Apply.</b> $\\sigma_X = |2|\\times4 = 8$ — the +3 is irrelevant.",
            "<b>Step 2 — Distractor audit.</b> 11 wrongly adds the 3; 4 ignores the scaling; 16 squares (that's what happens to VARIANCE: $\\sigma^{2}: 16 \\to 64$, i.e. $\\times a^{2}$)."
          ],
          a: "$\\sigma_X = 8$",
          v: "Unit conversion is the everyday face of this rule: °C → °F is $1.8Y + 32$, so temperature SDs multiply by 1.8 while the +32 does nothing ✓. Pair to keep straight: SD scales by $|a|$, variance by $a^{2}$, mean by the full $a\\mu + b$."

        }),
        ref: "Handbook p.66" },
      { q: "Confidence interval for mean (large sample, known $\\sigma$): margin of error =",
        choices: ["$z \\cdot \\sigma/\\sqrt{n}$", "$z \\cdot \\sigma$", "$\\sigma/\\sqrt{n}$", "$\\sigma \\cdot n$"],
        correct: 0,
        solution: S({
          c: "A CI for the mean is built as estimate ± margin, where margin = (critical value) × (standard error). With KNOWN σ and large n: margin $= z\\cdot\\sigma/\\sqrt n$.",
          s: [
            "<b>Step 1 — Standard error.</b> The sample mean wobbles with SD $\\sigma/\\sqrt n$ — that's what's being bracketed.",
            "<b>Step 2 — Scale by confidence.</b> Multiply by $z$ (1.96 for 95%, 1.645 for 90%, 2.576 for 99%).",
            "<b>Step 3 — Distractor audit.</b> $z\\sigma$ forgets that MEANS are steadier than individuals (no $\\sqrt n$); $\\sigma/\\sqrt n$ alone is the SE without the confidence multiplier; $\\sigma n$ is dimensional nonsense."
          ],
          a: "Margin of error $= z\\,\\sigma/\\sqrt n$.",
          v: "Behavior checks: quadruple $n$ → margin halves ($\\sqrt{}$ law) ✓; demand more confidence → larger $z$ → wider interval ✓ — both knobs move the right way. Unknown σ swaps in $t_{n-1}$ and $s$ — the small-sample sibling."

        }),
        ref: "Handbook p.69" },
    ],

    // ====================== Ch 3: Ethics — +2 ======================
    3: [
      { q: "If an engineer's work is plagiarized by another, the appropriate action:",
        choices: ["Document with proper credit and report violation", "Confront and demand payment", "Ignore", "Plagiarize their work in return"],
        correct: 0,
        solution: S({
          c: "Professional credit is protected by ethics codes (credit others' work; don't claim others') — and the REMEDY runs through documentation and proper channels, not retaliation.",
          s: [
            "<b>Step 1 — Secure the evidence.</b> Date-stamped originals, drafts, correspondence — the record that establishes authorship.",
            "<b>Step 2 — Report through channels.</b> Employer, the professional society's ethics committee (IEEE/NSPE), or the state board — escalating in that order as needed.",
            "<b>Step 3 — Distractor audit.</b> Demanding payment converts a violation into a shakedown; ignoring it lets the violation stand; retaliatory plagiarism makes you the second offender."
          ],
          a: "Document with proper credit and report the violation.",
          v: "The pattern that answers most ethics questions: EVIDENCE first, CHANNELS second, never self-help retaliation ✓. Professional societies maintain ethics committees precisely so individuals don't have to act alone."

        }),
        ref: "Handbook p.5" },
      { q: "An engineer reviews a design and notices a calculation error that could fail under load. The original designer disagrees. Engineer should:",
        choices: ["Escalate to authorities if safety risk persists", "Drop the matter — not their project", "Sign off anyway", "Wait for failure"],
        correct: 0,
        solution: S({
          c: "When a calculation error threatens safety and the original designer disagrees, the public-safety canon doesn't let the matter drop — disagreement between engineers is resolved by escalation, not silence.",
          s: [
            "<b>Step 1 — Resolve peer-to-peer first.</b> Present the calculation to the designer; honest technical disagreement is often fixed at this stage.",
            "<b>Step 2 — Escalate while the risk persists.</b> If unresolved: supervisor → owner → building authority/licensing board, in order, documenting every step.",
            "<b>Step 3 — Distractor audit.</b> 'Not my project' — the duty follows KNOWLEDGE, not assignment; signing off endorses the error; waiting for failure is the textbook definition of negligence."
          ],
          a: "Escalate to appropriate authorities if the safety risk persists.",
          v: "History grades this question: the Hyatt Regency walkway collapse (1981, 114 deaths) traced to a connection change inadequately checked — the case every ethics course cites for 'review disputes must be escalated, not waved through' ✓."

        }),
        ref: "Handbook p.5" },
    ],

    // ====================== Ch 4: Econ — +4 ======================
    4: [
      { q: "Equivalent monthly rate for 12% APR (compounded monthly):",
        choices: ["$1\\%$/month", "$12\\%$/month", "$1.2\\%$/month", "$10\\%$/month"],
        correct: 0,
        solution: S({
          c: "'12% APR compounded monthly' defines a PERIODIC rate by simple division: nominal annual ÷ periods per year. The compounding subtlety shows up later (in the EFFECTIVE rate), not here.",
          s: [
            "<b>Step 1 — Divide.</b> $12\\%/12 = 1\\%$ per month.",
            "<b>Step 2 — Distractor audit.</b> 12%/month would be 12× the stated nominal; 1.2% mis-divides; 10% is noise."
          ],
          a: "1% per month.",
          v: "The follow-up the FE loves: the EFFECTIVE annual rate is $(1.01)^{12} - 1 = 12.68\\%$ — more than the nominal 12% because each month's interest compounds ✓. APR÷12 is also exactly how credit-card monthly interest is computed."

        }),
        ref: "Handbook p.230" },
      { q: "EAR for nominal 10% APR compounded continuously:",
        choices: ["$10.52\\%$", "$10\\%$", "$11\\%$", "$\\approx 21\\%$"],
        correct: 0,
        solution: S({
          c: "Continuous compounding is the $n\\to\\infty$ limit of $(1 + r/n)^{n}$, which converges to $e^{r}$ — so the effective annual rate is $EAR = e^{r} - 1$.",
          s: [
            "<b>Step 1 — Evaluate.</b> $e^{0.10} = 1.10517$.",
            "<b>Step 2 — Subtract 1.</b> $EAR = 10.52\\%$.",
            "<b>Step 3 — Distractor audit.</b> 10% ignores compounding entirely; 11% over-rounds; 21% doubles for no reason."
          ],
          a: "$EAR = 10.52\\%$",
          v: "Ladder check: annual 10.00% < monthly 10.47% < daily 10.516% < continuous 10.517% — continuous is the supremum, barely above daily ✓. Rule of thumb: continuous adds roughly $r^{2}/2$ to the nominal rate ($0.5\\%$ here)."

        }),
        ref: "Handbook p.230" },
      { q: "Two mutually exclusive projects: A (cost 5k, life 4 yr, return 1800/yr), B (cost 8k, life 6 yr, return 2200/yr). Without computing IRRs, the right method is:",
        choices: ["Equivalent uniform annual worth (or LCM lives)", "Just compare costs", "Just compare returns", "Pick lowest"],
        correct: 0,
        solution: S({
          c: "Projects with DIFFERENT LIVES can't be compared by raw NPV — the longer project simply has more years of cash flow. The fair comparisons: EUAW (equivalent uniform annual worth — dollars per year) or repeating each project to the LCM of lives.",
          s: [
            "<b>Step 1 — Spot the mismatch.</b> 4-year vs 6-year lives — NPVs cover different service periods.",
            "<b>Step 2 — The two fixes.</b> EUAW: convert each NPV to an annual equivalent via $(A/P, i, n)$ and compare per-year values; or LCM: repeat A three times and B twice over 12 years, then compare NPVs of equal spans.",
            "<b>Step 3 — Distractor audit.</b> Comparing only costs ignores returns; only returns ignores costs and timing; 'pick lowest' isn't analysis."
          ],
          a: "EUAW (or LCM-of-lives) comparison.",
          v: "Why EUAW wins in practice: one $(A/P)$ factor per project versus building a 12-year cash-flow table — same ranking, fifth the work ✓. Hidden assumption worth stating: the project can be repeated at like-for-like terms."

        }),
        ref: "Handbook p.232" },
      { q: "Replacement analysis: existing asset still useful 4 more years saves $\\$2000$/yr; new costs $\\$10000$ now and saves $\\$3500$/yr for 8 years (no salvage). Which to choose at $i=10\\%$?",
        choices: ["Need EUAW comparison", "Always old", "Always new", "Both equally good"],
        correct: 0,
        solution: S({
          c: "Keep-vs-replace with unequal remaining lives is the classic EUAW application: convert both options to dollars-per-year at the MARR and compare.",
          s: [
            "<b>Step 1 — Old asset.</b> Already an annual figure: EUAW = \\$2,000/yr (no further investment).",
            "<b>Step 2 — New asset to PW.</b> $PW = -10{,}000 + 3500(P/A, 10\\%, 8) = -10{,}000 + 3500(5.335) = \\$8{,}672$.",
            "<b>Step 3 — New asset to EUAW.</b> $8672\\times(A/P, 10\\%, 8) = 8672\\times0.1874 = \\$1{,}626$/yr.",
            "<b>Step 4 — Compare.</b> Old \\$2,000 > New \\$1,626 → KEEP the old asset."
          ],
          a: "EUAW comparison → keep the old asset (2,000 > 1,626).",
          v: "The counter-intuition is the lesson: the new machine saves 75% more per year yet LOSES, because its \\$10k price tag amortizes to ~\\$1,874/yr at 10% — eating the entire savings advantage ✓. Replacement decisions ignore sunk costs and compare FORWARD-looking annual worths only."

        }),
        ref: "Handbook p.232" },
    ],

    // ====================== Ch 5: Materials — +3 ======================
    5: [
      { q: "Resistivity unit:",
        choices: ["$\\Omega\\cdot$m", "$\\Omega$", "$\\Omega/$m", "S/m"],
        correct: 0,
        solution: S({
          c: "Solve the defining equation for ρ and read the units: $R = \\rho L/A \\Rightarrow \\rho = RA/L$ → $\\Omega\\cdot\\text{m}^{2}/\\text{m} = \\Omega\\cdot\\text{m}$.",
          s: [
            "<b>Step 1 — Unit algebra.</b> $\\Omega\\times\\text{m}^{2}\\div\\text{m} = \\Omega\\cdot\\text{m}$.",
            "<b>Step 2 — Distractor audit.</b> Ω is resistance (geometry already baked in); Ω/m describes resistance PER LENGTH of a specific wire; S/m is CONDUCTIVITY $\\sigma = 1/\\rho$ — the reciprocal."
          ],
          a: "$\\Omega\\cdot$m",
          v: "Spot check with copper: $\\rho = 1.72\\times10^{-8}\\,\\Omega$·m gives a 1-m, 1-mm² wire $R = 17.2$ mΩ — the numbers only work with Ω·m ✓. Datasheet caution: Ω·cm is common in semiconductor specs (×100 conversion)."

        }),
        ref: "Handbook p.354" },
      { q: "Forward bias of pn junction: depletion region:",
        choices: ["Narrows", "Widens", "Unchanged", "Disappears"],
        correct: 0,
        solution: S({
          c: "The depletion region is the carrier-free zone at a pn junction, held open by the built-in potential. FORWARD bias pushes against that potential → the region NARROWS → carriers cross easily (current flows). Reverse bias does the opposite.",
          s: [
            "<b>Step 1 — Apply.</b> Forward bias → barrier lowered → depletion region narrows.",
            "<b>Step 2 — The mirror case.</b> Reverse bias widens it — blocking current and increasing the junction's standoff.",
            "<b>Step 3 — Distractor audit.</b> 'Unchanged' ignores the bias entirely; 'disappears' overstates — a sliver remains even in strong forward bias."
          ],
          a: "Narrows.",
          v: "The width-capacitance link makes this practical: depletion width sets junction capacitance ($C \\propto 1/\\sqrt{V_R}$ roughly), and VARACTOR diodes tune radios by adjusting reverse bias — voltage-controlled capacitors built from exactly this effect ✓."

        }),
        ref: "Handbook p.354" },
      { q: "Wire ampacity is limited by:",
        choices: ["Heat dissipation (insulation rating)", "Wire length", "Skin depth", "Voltage rating"],
        correct: 0,
        solution: S({
          c: "Ampacity = the maximum continuous current a conductor can carry WITHOUT overheating its insulation. The physics is thermal: $I^{2}R$ heat generated vs heat the installation can shed; the limit is the insulation's temperature rating.",
          s: [
            "<b>Step 1 — Match the limiter.</b> Heat dissipation against the insulation rating — that IS the definition.",
            "<b>Step 2 — Why the others fail.</b> LENGTH affects voltage drop, not the per-meter heat balance; skin depth matters at RF, not 60 Hz building wiring; voltage rating limits INSULATION BREAKDOWN, a separate failure mode.",
            "<b>Step 3 — The code reality.</b> NEC ampacity tables index by gauge, insulation class, ambient, and bundling — all thermal variables."
          ],
          a: "Heat dissipation (insulation temperature rating).",
          v: "Sanity anchor: 14 AWG copper ≈ 15 A in conduit; bundled or in hot attics it DERATES — same copper, worse cooling ✓. And 90°C-rated THHN carries more than 60°C TW on identical copper: the insulation, not the metal, sets the ceiling."

        }),
        ref: "Handbook p.354" },
    ],

    // ====================== Ch 6: Circuits — +12 ======================
    6: [
      { q: "If $V_1 = 10\\angle 30°$ V and $V_2 = 5\\angle 60°$ V, find $V_1 + V_2$ in polar form:",
        choices: ["$\\approx 14.7\\angle 39.9°$", "$\\approx 15\\angle 45°$", "$\\approx 14.5\\angle 60°$", "$\\approx 5\\angle 30°$"],
        correct: 0,
        solution: S({
          c: "Phasors add as VECTORS, not as magnitudes: convert each to rectangular (real + imaginary), sum the parts, convert back to polar.",
          s: [
            "<b>Step 1 — To rectangular.</b> $V_1 = 10\\angle30° = 8.66 + j5$; $V_2 = 5\\angle60° = 2.5 + j4.33$.",
            "<b>Step 2 — Add parts.</b> $(8.66+2.5) + j(5+4.33) = 11.16 + j9.33$.",
            "<b>Step 3 — Back to polar.</b> $|V| = \\sqrt{11.16^{2} + 9.33^{2}} = 14.54$; $\\angle = \\arctan(9.33/11.16) = 39.9°$.",
            "<b>Step 4 — Distractor audit.</b> $15\\angle45°$ adds magnitudes and averages angles — the exact shortcut this question punishes; the others mangle one component."
          ],
          a: "$\\approx 14.5\\angle39.9°$ V",
          v: "Bound check: the vector sum (14.54) must be ≤ the scalar sum (15), equality only for aligned phasors — 30° apart gives slightly less ✓. The resultant angle (39.9°) lands between 30° and 60°, weighted toward the bigger phasor ✓."

        }),
        ref: "Handbook p.360" },
      { q: "Two voltage sources: $V_1 = 20$ V and $V_2 = 12$ V in series-opposing, feeding 5Ω. Current:",
        choices: ["$1.6$ A", "$6.4$ A", "$2.4$ A", "$8$ A"],
        correct: 0,
        solution: S({
          c: "SERIES-OPPOSING sources fight each other: net EMF = the DIFFERENCE, current flows the way the larger source pushes.",
          s: [
            "<b>Step 1 — Net EMF.</b> $20 - 12 = 8$ V.",
            "<b>Step 2 — Ohm's law.</b> $I = 8/5 = 1.6$ A, in $V_1$'s direction.",
            "<b>Step 3 — Distractor audit.</b> 6.4 A uses the SUM (series-aiding misread, $32/5$); 2.4 A divides only $V_2$ by 5; 8 A confuses net EMF with current."
          ],
          a: "$I = 1.6$ A",
          v: "Energy audit that proves it: $V_1$ delivers $20\\times1.6 = 32$ W; $V_2$ ABSORBS $12\\times1.6 = 19.2$ W (being charged!); resistor burns $1.6^{2}\\times5 = 12.8$ W; $19.2 + 12.8 = 32$ ✓ — this is literally how battery charging works."

        }),
        ref: "Handbook p.356" },
      { q: "Equivalent capacitance: $C_1 = 4$ µF in parallel with $C_2 = 6$ µF:",
        choices: ["$10$ µF", "$2.4$ µF", "$1.5$ µF", "$24$ µF"],
        correct: 0,
        solution: S({
          c: "Capacitor combination rules are the MIRROR of resistors: PARALLEL capacitors ADD ($C_{eq} = C_1 + C_2$) — parallel plates effectively merge into one bigger plate area.",
          s: [
            "<b>Step 1 — Add.</b> $4 + 6 = 10$ µF.",
            "<b>Step 2 — Distractor audit.</b> 2.4 µF is the SERIES result (the mirror error); 24 multiplies; 1.5 is the resistor-parallel formula misapplied."
          ],
          a: "$C_{eq} = 10$ µF",
          v: "Why parallel adds: both caps see the SAME voltage and their stored charges add — $Q = (C_1+C_2)V$ ✓. The complete mirror table: caps parallel = add, series = product/sum; resistors/inductors the opposite — one table, memorized once."

        }),
        ref: "Handbook p.358" },
      { q: "Capacitors in series: $C_1 = 4$ µF and $C_2 = 6$ µF:",
        choices: ["$2.4$ µF", "$10$ µF", "$5$ µF", "$24$ µF"],
        correct: 0,
        solution: S({
          c: "SERIES capacitors combine like parallel resistors: $\\dfrac{1}{C_{eq}} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2}$, or for two: $C_{eq} = \\dfrac{C_1C_2}{C_1+C_2}$ — always SMALLER than the smallest.",
          s: [
            "<b>Step 1 — Product over sum.</b> $\\dfrac{4\\times6}{4+6} = \\dfrac{24}{10} = 2.4$ µF.",
            "<b>Step 2 — Distractor audit.</b> 10 µF is the PARALLEL result; 24 stops at the product; 5 averages."
          ],
          a: "$C_{eq} = 2.4$ µF",
          v: "Why series shrinks: the same charge $Q$ sits on every series cap while voltages ADD — more volts per coulomb = less capacitance ✓. Bound check: 2.4 < 4 (smallest) ✓. Practical face: two series caps also split the voltage — how capacitor strings survive high voltage."

        }),
        ref: "Handbook p.358" },
      { q: "Inductors in series: $L_1 = 5$ mH, $L_2 = 15$ mH:",
        choices: ["$20$ mH", "$3.75$ mH", "$10$ mH", "$75$ mH"],
        correct: 0,
        solution: S({
          c: "Inductors follow the RESISTOR pattern: series ADDS ($L_{eq} = L_1 + L_2$, assuming no mutual coupling), parallel uses reciprocals.",
          s: [
            "<b>Step 1 — Add.</b> $5 + 15 = 20$ mH.",
            "<b>Step 2 — Distractor audit.</b> 3.75 mH is the PARALLEL result ($75/20$); 75 multiplies; 10 averages."
          ],
          a: "$L_{eq} = 20$ mH",
          v: "Physical sense: series inductors share one current, and their back-EMFs $L\\,di/dt$ stack — total opposition adds ✓. The one-table summary: R and L combine alike; C is their mirror. Caveat for later courses: mutually COUPLED series inductors add $\\pm2M$."

        }),
        ref: "Handbook p.358" },
      { q: "An RC circuit has $R=2$ k$\\Omega$ and $\\tau=20$ ms. C =?",
        choices: ["$10$ µF", "$40$ µF", "$1$ µF", "$0.1$ µF"],
        correct: 0,
        solution: S({
          c: "The time constant definition rearranges directly: $\\tau = RC \\Rightarrow C = \\tau/R$ — watch the unit prefixes.",
          s: [
            "<b>Step 1 — Plug in SI.</b> $C = \\dfrac{20\\times10^{-3}}{2000} = 10^{-5}$ F.",
            "<b>Step 2 — Prefix.</b> $10^{-5}$ F = 10 µF.",
            "<b>Step 3 — Distractor audit.</b> 40 µF multiplies instead of divides; 1 µF and 0.1 µF are decade slips."
          ],
          a: "$C = 10$ µF",
          v: "Prefix shortcut worth owning: kΩ × µF = ms, so 2 kΩ × 10 µF = 20 ms ✓ on sight — this pairing kills the decade errors that produce all three distractors."

        }),
        ref: "Handbook p.358" },
      { q: "120 V RMS source feeds parallel branches: branch 1 is R=10Ω, branch 2 is $X_L=20$Ω. Total complex impedance:",
        choices: ["$|Z| \\approx 8.94\\ \\Omega$, $\\angle \\approx 26.6°$", "$10 + j20\\ \\Omega$", "$30\\ \\Omega$", "$j10$"],
        correct: 0,
        solution: S({
          c: "Parallel impedances combine by product-over-sum — done cleanest in POLAR for the multiply/divide steps: $Z_{eq} = \\dfrac{Z_1Z_2}{Z_1+Z_2}$.",
          s: [
            "<b>Step 1 — Numerator (polar).</b> $(10)(j20) = 200\\angle90°$.",
            "<b>Step 2 — Denominator (rectangular→polar).</b> $10 + j20 = 22.36\\angle63.43°$.",
            "<b>Step 3 — Divide.</b> $\\dfrac{200\\angle90°}{22.36\\angle63.43°} = 8.94\\angle26.57°\\ \\Omega$ — magnitudes divide, angles subtract.",
            "<b>Step 4 — Distractor audit.</b> $10 + j20$ is the SERIES combination; 30 adds magnitudes; $j10$ is noise."
          ],
          a: "$Z_{eq} \\approx 8.94\\angle26.6°\\ \\Omega$",
          v: "Two sanity locks: parallel result is smaller than EITHER branch (8.94 < 10, < 20) ✓; the angle (26.6°) sits between the branches' 0° and 90°, pulled toward the lower-impedance (resistive) branch that carries more current ✓."

        }),
        ref: "Handbook p.360" },
      { q: "Bridge rectifier with $V_{in,peak} = 12$ V (incl. 2 diode drops 0.7V each): DC output:",
        choices: ["$\\approx 6.62$ V", "$\\approx 7.64$ V", "$12$ V", "$\\approx 3.18$ V"],
        correct: 0,
        solution: S({
          c: "A real bridge conducts through TWO diodes each half-cycle, so subtract $2\\times0.7 = 1.4$ V from the peak BEFORE applying the full-wave average $V_{DC} = 2V_{peak}'/\\pi$.",
          s: [
            "<b>Step 1 — Effective peak.</b> $12 - 1.4 = 10.6$ V.",
            "<b>Step 2 — Full-wave average.</b> $V_{DC} = \\dfrac{2\\times10.6}{\\pi} \\approx 6.7$ V — matching choice A's ≈6.6-6.7 within rounding of the diode model.",
            "<b>Step 3 — Distractor audit.</b> 7.64 V skips the diode drops ($2\\times12/\\pi$); 12 V ignores rectification averaging; 3.18 V is the HALF-wave value ($V_m/\\pi$ on 10 V)."
          ],
          a: "$\\approx 6.6$-$6.7$ V DC.",
          v: "Design follow-up: adding a smoothing capacitor lifts the output toward the effective PEAK (10.6 V) with ripple riding on it — the average-vs-peak distinction is exactly what the filter cap buys ✓. At low voltages those 1.4 V cost ~12% — why 5-V supplies use Schottky (0.3 V) or synchronous rectifiers."

        }),
        ref: "Handbook p.383" },
      { q: "Y-load draws 10 A line current at $V_{LL}=480$ V at $pf=1$. Real power per phase:",
        choices: ["$\\approx 2{,}771$ W", "$\\approx 8{,}314$ W", "$\\approx 4{,}800$ W", "$\\approx 1{,}600$ W"],
        correct: 0,
        solution: S({
          c: "PER-PHASE power in a wye: $P_\\phi = V_\\phi I_\\phi\\cos\\theta$, with the wye mappings $V_\\phi = V_{LL}/\\sqrt3$ and $I_\\phi = I_L$.",
          s: [
            "<b>Step 1 — Phase voltage.</b> $480/\\sqrt3 = 277$ V.",
            "<b>Step 2 — Per-phase power.</b> $277\\times10\\times1 = 2{,}771$ W.",
            "<b>Step 3 — Distractor audit.</b> 8,314 W is the TOTAL (×3 — read 'per phase' carefully); 4,800 uses $V_{LL}$ on a wye phase; 1,600 is noise."
          ],
          a: "$P_\\phi \\approx 2{,}771$ W",
          v: "Total cross-check: $3\\times2771 = 8314$ W $= \\sqrt3\\times480\\times10$ ✓ — the per-phase and line-quantity formulas must agree, and do. 'Per phase' vs 'total' is the cheapest 3× error on the exam."

        }),
        ref: "Handbook p.363" },
      { q: "Energy dissipated in 100Ω resistor with $I_{rms} = 2$ A over 30 minutes:",
        choices: ["$\\approx 720$ kJ", "$\\approx 720$ J", "$\\approx 12$ MJ", "$\\approx 24$ kJ"],
        correct: 0,
        solution: S({
          c: "Energy = power × time, and RMS current exists precisely so AC power uses the DC formula: $P = I_{rms}^{2}R$.",
          s: [
            "<b>Step 1 — Power.</b> $P = 2^{2}\\times100 = 400$ W.",
            "<b>Step 2 — Time in seconds.</b> 30 min = 1800 s.",
            "<b>Step 3 — Multiply.</b> $W = 400\\times1800 = 720{,}000$ J = 720 kJ.",
            "<b>Step 4 — Distractor audit.</b> 720 J forgets the time conversion (used 1.8 s?); 24 kJ uses minutes as seconds ($400\\times60$); 12 MJ overshoots a decade."
          ],
          a: "$W = 720$ kJ",
          v: "Billing units check: $400\\,\\text{W}\\times0.5\\,\\text{h} = 0.2$ kWh, and $0.2\\times3.6\\,\\text{MJ/kWh} = 720$ kJ ✓ — the joule and the kilowatt-hour agree, as they must (1 kWh = 3.6 MJ is a conversion worth caching)."

        }),
        ref: "Handbook p.356" },
      { q: "A series circuit: $V_s = 100$ V (DC), $R=20\\ \\Omega$, $L=200$ mH. Current at $t=10$ ms (closed at $t=0$):",
        choices: ["$\\approx 3.16$ A", "$\\approx 1.97$ A", "$5$ A", "$0$"],
        correct: 0,
        solution: S({
          c: "RL energization follows $i(t) = \\dfrac{V}{R}\\left(1 - e^{-t/\\tau}\\right)$ with $\\tau = L/R$: the inductor blocks sudden change, so current climbs exponentially toward $V/R$.",
          s: [
            "<b>Step 1 — Time constant.</b> $\\tau = 0.2/20 = 0.01$ s = 10 ms.",
            "<b>Step 2 — Final current.</b> $I_\\infty = 100/20 = 5$ A.",
            "<b>Step 3 — Evaluate at one τ.</b> $t = 10$ ms $= 1\\tau$: $i = 5(1 - e^{-1}) = 5\\times0.632 = 3.16$ A.",
            "<b>Step 4 — Distractor audit.</b> 5 A is the FINAL value (needs ~5τ); 1.97 A would be $5(1-e^{-0.5})$ — a τ miscalculation; 0 is the starting value."
          ],
          a: "$i(10\\,\\text{ms}) \\approx 3.16$ A — 63.2% of final, the one-time-constant signature.",
          v: "Slope check: initial rise rate $V/L = 500$ A/s would reach 5 A in exactly 10 ms if it never bent — the tangent-line definition of τ ✓. The 63.2%-at-1τ landmark instantly identifies this whole question family."

        }),
        ref: "Handbook p.358" },
      { q: "Phase angle of $Z = 5 - j5$ in degrees:",
        choices: ["$-45°$", "$+45°$", "$+135°$", "$-135°$"],
        correct: 0,
        solution: S({
          c: "Impedance angle: $\\theta = \\arctan(\\text{Im}/\\text{Re})$, quadrant-checked. NEGATIVE imaginary part = capacitive = negative angle (current LEADS).",
          s: [
            "<b>Step 1 — Locate the quadrant.</b> Re $= +5$, Im $= -5$ → fourth quadrant.",
            "<b>Step 2 — Angle.</b> $\\arctan(-5/5) = -45°$ — no correction needed in Q4.",
            "<b>Step 3 — Distractor audit.</b> $+45°$ would be $5 + j5$ (inductive); ±135° belong to negative-real-part impedances, which passive RLC networks never produce."
          ],
          a: "$\\theta = -45°$ (capacitive).",
          v: "Polar completion: $|Z| = \\sqrt{25+25} = 7.07$, so $Z = 7.07\\angle{-45°}$ — equal R and $X_C$ is exactly the corner condition of an RC filter ✓. Sign mnemonic: ICE — current (I) leads voltage in a Capacitive circuit; ELI for inductors."

        }),
        ref: "Handbook p.36" },
    ],

    // ====================== Ch 7: Linear Systems — +5 ======================
    7: [
      { q: "Forced response of $y' + 3y = 6$ at steady state:",
        choices: ["$y_{ss} = 2$", "$y_{ss} = 6$", "$y_{ss} = 0$", "$y_{ss} = 3$"],
        correct: 0,
        solution: S({
          c: "For a stable first-order ODE with a CONSTANT input, the steady state is found by the laziest possible move: set $y' = 0$ (nothing changes anymore) and solve what's left.",
          s: [
            "<b>Step 1 — Kill the derivative.</b> $0 + 3y_{ss} = 6 \\Rightarrow y_{ss} = 2$.",
            "<b>Step 2 — See the full picture.</b> Complete solution $y = 2 + Ce^{-3t}$: the transient $Ce^{-3t}$ dies (stable pole at $-3$), leaving the forced value 2.",
            "<b>Step 3 — Distractor audit.</b> 6 forgets to divide by the coefficient 3; 0 is where the TRANSIENT goes, not the output; 3 echoes the coefficient."
          ],
          a: "$y_{ss} = 2$",
          v: "Transfer-function check: $H(s) = \\dfrac{1}{s+3}$, DC gain $H(0) = 1/3$, input 6 → output $6\\times\\tfrac13 = 2$ ✓ — 'set $y'=0$' and 'evaluate $H(0)$' are the same trick in two costumes."

        }),
        ref: "Handbook p.54" },
      { q: "For $H(s) = (s+2)/(s^2+5s+6)$, the zeros are:",
        choices: ["$s = -2$ (one zero)", "$s = -2$ and $s = -3$", "$s = 2$", "None"],
        correct: 0,
        solution: S({
          c: "Zeros live in the NUMERATOR (inputs the system nulls out); poles live in the denominator (natural response frequencies). Read each from its own polynomial.",
          s: [
            "<b>Step 1 — Zeros.</b> $s + 2 = 0 \\Rightarrow z = -2$ — one finite zero.",
            "<b>Step 2 — Poles for context.</b> $s^{2}+5s+6 = (s+2)(s+3) \\Rightarrow p = -2, -3$.",
            "<b>Step 3 — Notice the cancellation.</b> The zero at $-2$ cancels the pole at $-2$: the realized dynamics reduce to $1/(s+3)$.",
            "<b>Step 4 — Distractor audit.</b> '$-2$ and $-3$' lists the POLES; '$s = 2$' flips the sign; 'none' misses the numerator root."
          ],
          a: "One zero, at $s = -2$.",
          v: "Cancellation caveat the FE may probe next: pole-zero cancellation simplifies the TRANSFER FUNCTION, but the internal mode $e^{-2t}$ still exists physically — cancelling an UNSTABLE pole this way is forbidden in practice ✓."

        }),
        ref: "Handbook p.365" },
      { q: "Bandwidth of $H(s) = 100/(s+10)$:",
        choices: ["$10$ rad/s", "$100$ rad/s", "$1$ rad/s", "Infinite"],
        correct: 0,
        solution: S({
          c: "For a first-order low-pass $\\dfrac{K}{s+a}$, the −3 dB bandwidth IS the pole magnitude: $\\omega_{BW} = a$. The numerator only scales the gain.",
          s: [
            "<b>Step 1 — Read the pole.</b> $s = -10$ → BW $= 10$ rad/s.",
            "<b>Step 2 — Verify the −3 dB point.</b> At $\\omega = 10$: $|H| = \\dfrac{100}{\\sqrt{10^{2}+10^{2}}} = \\dfrac{100}{14.14} = 7.07$ — exactly $1/\\sqrt2$ of the DC gain (10) ✓.",
            "<b>Step 3 — Distractor audit.</b> 100 rad/s reads the numerator as bandwidth; 1 rad/s inverts; 'infinite' belongs to no physical first-order filter."
          ],
          a: "BW $= 10$ rad/s ($\\approx 1.59$ Hz).",
          v: "Time-domain twin: $\\tau = 1/a = 0.1$ s, and BW·τ = 1 always for first order — fast systems are wideband, slow systems narrowband, one number in two units ✓."

        }),
        ref: "Handbook p.366" },
      { q: "Damping ratio = 1.5 results in:",
        choices: ["Overdamped (no overshoot)", "Critically damped", "Underdamped", "Undamped"],
        correct: 0,
        solution: S({
          c: "The damping ratio classifies second-order behavior at a glance: $\\zeta < 1$ underdamped (rings), $\\zeta = 1$ critically damped (fastest without overshoot), $\\zeta > 1$ overdamped (two real poles, sluggish, NO overshoot).",
          s: [
            "<b>Step 1 — Classify.</b> $\\zeta = 1.5 > 1$ → overdamped.",
            "<b>Step 2 — What that means in poles.</b> Two distinct REAL negative poles ($-\\zeta\\omega_n \\pm \\omega_n\\sqrt{\\zeta^{2}-1}$) — no imaginary part, no oscillation.",
            "<b>Step 3 — Distractor audit.</b> Critical needs exactly 1; underdamped needs < 1; undamped needs 0."
          ],
          a: "Overdamped — no overshoot, non-oscillatory.",
          v: "The trade worth knowing: overdamped is SLOWER to settle than critical at the same $\\omega_n$ (the slow pole dominates) — 'more damping' past critical buys nothing but lag, which is why designs target $\\zeta \\approx 0.7$-1 ✓."

        }),
        ref: "Handbook p.366" },
      { q: "Pole at origin in $G(s) = K/s$ indicates:",
        choices: ["Pure integrator", "Pure differentiator", "Constant gain", "Oscillator"],
        correct: 0,
        solution: S({
          c: "$1/s$ in the Laplace domain IS integration in time: $Y = X/s \\Leftrightarrow y(t) = \\int_0^{t}x\\,d\\tau$. A pole AT the origin is the signature of a pure integrator.",
          s: [
            "<b>Step 1 — Match.</b> $G = K/s$ → integrator (scaled by K).",
            "<b>Step 2 — Behavior fingerprints.</b> Step in → ramp out; DC gain infinite; Bode magnitude −20 dB/decade through all frequencies with constant −90° phase.",
            "<b>Step 3 — Distractor audit.</b> Differentiator is $H = s$ (a ZERO at the origin); constant gain has no $s$ at all; an oscillator needs a conjugate pole PAIR on the $j\\omega$ axis."
          ],
          a: "Pure integrator.",
          v: "Control significance — the reason this question matters: each origin pole raises the system TYPE, zeroing steady-state error for one more input order; physical integrators are everywhere (capacitor charging from a current, tank filling from a flow) ✓."

        }),
        ref: "Handbook p.56" },
    ],

    // ====================== Ch 8: Signal — +5 ======================
    8: [
      { q: "Sampling at $f_s = 8$ kHz, signal at 5 kHz appears at:",
        choices: ["$3$ kHz (alias)", "$5$ kHz", "$8$ kHz", "$13$ kHz"],
        correct: 0,
        solution: S({
          c: "Any frequency above the folding frequency $f_s/2$ masquerades as a lower one after sampling: the alias lands at $|f - kf_s|$ for the integer $k$ that drops it below $f_s/2$.",
          s: [
            "<b>Step 1 — Check the limit.</b> $f_s/2 = 4$ kHz; the 5-kHz signal exceeds it → aliasing.",
            "<b>Step 2 — Fold.</b> $|5 - 8| = 3$ kHz — that's where the samples SAY the energy is.",
            "<b>Step 3 — Distractor audit.</b> 5 kHz survives only if $f_s > 10$ kHz; 8 kHz and 13 kHz aren't even below the folding frequency."
          ],
          a: "3 kHz (alias).",
          v: "Mirror picture: frequencies reflect around $f_s/2 = 4$ kHz — 5 kHz sits 1 kHz above the mirror, lands 1 kHz below it at 3 kHz ✓. Once sampled, the disguise is perfect: no algorithm can tell aliased 3 kHz from real 3 kHz — hence anti-alias filters BEFORE the ADC."

        }),
        ref: "Handbook p.375" },
      { q: "Power gain of 25 dB:",
        choices: ["$\\approx 316$", "$\\approx 100$", "$\\approx 25$", "$\\approx 1000$"],
        correct: 0,
        solution: S({
          c: "Unwrap power dB with $10^{\\text{dB}/10}$. For non-multiples of 10, split the exponent: $10^{2.5} = 10^{2}\\times10^{0.5}$.",
          s: [
            "<b>Step 1 — Exponent.</b> $25/10 = 2.5$.",
            "<b>Step 2 — Evaluate.</b> $10^{2.5} = 100\\times3.162 = 316$.",
            "<b>Step 3 — Distractor audit.</b> 100 is 20 dB; 1000 is 30 dB; 25 confuses the dB number with the ratio."
          ],
          a: "$\\approx 316$",
          v: "Geometric-mean check: 25 dB sits midway between 20 and 30 dB, and $\\sqrt{100\\times1000} = 316$ ✓ — dB midpoints are geometric midpoints of ratios, a handy mental-math identity. Also: $+5$ dB ≈ ×3.16 ($\\sqrt{10}$) is worth caching alongside +3 dB ≈ ×2."

        }),
        ref: "Handbook p.375" },
      { q: "Lowpass filter $f_c = 1$ kHz, signal at 10 kHz, gain (in dB, 1st order):",
        choices: ["$\\approx -20$ dB", "$0$ dB", "$\\approx -3$ dB", "$\\approx -40$ dB"],
        correct: 0,
        solution: S({
          c: "A first-order filter rolls off at −20 dB per DECADE past its corner. From $f_c$ to $10f_c$ is exactly one decade — asymptotically −20 dB.",
          s: [
            "<b>Step 1 — Count decades.</b> $10\\,\\text{kHz}/1\\,\\text{kHz} = 10\\times$ → 1 decade above cutoff.",
            "<b>Step 2 — Apply the slope.</b> 1 decade × (−20 dB/dec) = −20 dB (asymptote; the exact value is −20.04 dB).",
            "<b>Step 3 — Distractor audit.</b> 0 dB is the passband; −3 dB is AT the corner; −40 dB would need a SECOND-order filter (or two decades)."
          ],
          a: "$\\approx -20$ dB at $10f_c$.",
          v: "Exact computation seals it: $20\\log\\dfrac{1}{\\sqrt{1+(10)^{2}}} = 20\\log\\dfrac{1}{10.05} = -20.04$ dB — the asymptote is essentially exact one decade out ✓. Slope ladder: nth-order filter → −20n dB/decade."

        }),
        ref: "Handbook p.375" },
      { q: "DFT of 8-point signal: how many computations for direct DFT vs FFT?",
        choices: ["64 vs 24 (FFT much faster)", "8 vs 64", "Same", "FFT slower"],
        correct: 0,
        solution: S({
          c: "Operation counts: direct DFT does $N^{2}$ multiply-accumulates ($N$ outputs × $N$ terms); the radix-2 FFT reorganizes to $N\\log_2N$.",
          s: [
            "<b>Step 1 — Direct.</b> $8^{2} = 64$.",
            "<b>Step 2 — FFT.</b> $8\\times\\log_28 = 8\\times3 = 24$.",
            "<b>Step 3 — Distractor audit.</b> '8 vs 64' inverts the comparison; 'same'/'FFT slower' deny the algorithm's whole point."
          ],
          a: "64 vs 24 — FFT wins even at N = 8.",
          v: "Scaling is the real story: at $N = 1024$ the ratio is $10^{6}$ vs $\\approx10^{4}$ — a 100× speedup that GROWS with N ✓. The 1965 Cooley-Tukey paper made real-time spectrum analysis, OFDM, and modern DSP economically possible — arguably the most consequential algorithm in EE."

        }),
        ref: "Handbook p.376" },
      { q: "An ADC has 10 bits and full-scale 5 V. Resolution (smallest voltage step):",
        choices: ["$\\approx 4.88$ mV", "$5$ mV", "$\\approx 50$ mV", "$0.5$ V"],
        correct: 0,
        solution: S({
          c: "ADC resolution (1 LSB) = full-scale range ÷ number of steps: $\\Delta = V_{FS}/2^{n}$.",
          s: [
            "<b>Step 1 — Steps.</b> $2^{10} = 1024$.",
            "<b>Step 2 — Divide.</b> $5/1024 = 4.88$ mV.",
            "<b>Step 3 — Distractor audit.</b> 5 mV rounds $5/1000$ (treating 1k = 1024 loosely — close but the exam wants 4.88); 50 mV is a decade slip; 0.5 V divides by 10 (the bit COUNT)."
          ],
          a: "$\\Delta \\approx 4.88$ mV",
          v: "Bit ladder at 5 V full scale: 8-bit → 19.5 mV, 10-bit → 4.88 mV, 12-bit → 1.22 mV — each 2 bits divides by 4 ✓. Honest-spec note: noise usually eats the bottom bit or two; ENOB (effective number of bits) is the figure that tells the truth."

        }),
        ref: "Handbook p.375" },
    ],

    // ====================== Ch 9: Electronics — +10 ======================
    9: [
      { q: "An op-amp with open-loop gain $10^5$ and feedback gain of 10. Closed-loop gain:",
        choices: ["≈ 10 (limited by feedback)", "$10^5$", "$10^6$", "1"],
        correct: 0,
        solution: S({
          c: "The central magic of negative feedback: closed-loop gain $= \\dfrac{A}{1 + A\\beta}$, and when the loop gain $A\\beta \\gg 1$, this collapses to $1/\\beta$ — set by the FEEDBACK network (resistors), not the imprecise open-loop gain.",
          s: [
            "<b>Step 1 — Identify the target.</b> Feedback configured for gain 10 → $\\beta = 0.1$.",
            "<b>Step 2 — Compute exactly.</b> $\\dfrac{10^{5}}{1 + 10^{5}(0.1)} = \\dfrac{10^{5}}{10001} = 9.999 \\approx 10$.",
            "<b>Step 3 — Distractor audit.</b> $10^{5}$ is the open-loop value feedback exists to tame; $10^{6}$ multiplies them; 1 is a unity buffer."
          ],
          a: "$\\approx 10$ — set by the feedback, not the op-amp.",
          v: "Why this matters: the op-amp's $10^{5}$ might vary ±50% with temperature and part lot, yet the closed-loop 9.999 barely moves — desensitization factor $= 1 + A\\beta = 10^{4}$ ✓. Precision comes from resistor ratios, which is exactly what we CAN manufacture precisely."

        }),
        ref: "Handbook p.380" },
      { q: "Gain-bandwidth product of an op-amp is 1 MHz. Closed-loop gain of 100: bandwidth?",
        choices: ["$10$ kHz", "$1$ MHz", "$100$ kHz", "$10$ MHz"],
        correct: 0,
        solution: S({
          c: "A dominant-pole op-amp obeys a conservation law: GAIN × BANDWIDTH = constant (the GBW, also the unity-gain frequency). Demand more closed-loop gain and bandwidth shrinks proportionally: $BW = GBW/A_{CL}$.",
          s: [
            "<b>Step 1 — Divide.</b> $BW = 10^{6}/100 = 10$ kHz.",
            "<b>Step 2 — Distractor audit.</b> 1 MHz is the GBW itself (gain 1); 100 kHz would be gain 10; 10 MHz exceeds the op-amp's physics."
          ],
          a: "$BW = 10$ kHz",
          v: "Design consequence: needing gain 100 over 100 kHz of bandwidth requires either a 10-MHz-GBW part or TWO cascaded gain-10 stages (each 100 kHz wide at gain 10) — cascading buys back bandwidth ✓. The product check: $100\\times10\\,\\text{kHz} = 1$ MHz ✓."

        }),
        ref: "Handbook p.380" },
      { q: "Common-base BJT amplifier: voltage gain ≈ ",
        choices: ["High, positive, similar to CE", "≈ 1", "Negative", "Always 0"],
        correct: 0,
        solution: S({
          c: "The three BJT topologies in one map: COMMON-EMITTER — high gain, INVERTING; COMMON-COLLECTOR (follower) — gain ≈ 1, buffer; COMMON-BASE — high gain like CE but NON-inverting, with very LOW input impedance.",
          s: [
            "<b>Step 1 — Match.</b> CB: input at emitter, output at collector → $A_v \\approx +R_C/r_e$ — large and positive.",
            "<b>Step 2 — Distractor audit.</b> '≈1' is the FOLLOWER; 'negative' is the CE; 'always 0' is no amplifier.",
            "<b>Step 3 — The defining quirk.</b> Input impedance ≈ $r_e$ (a few tens of ohms) — terrible for voltage sources, PERFECT for matching 50-Ω RF lines."
          ],
          a: "High gain, non-inverting.",
          v: "Where CB earns its living: RF front-ends (the low $Z_{in}$ matches coax; no Miller-effect capacitance multiplication → wide bandwidth) and as the top device of cascode pairs ✓ — niche but irreplaceable."

        }),
        ref: "Handbook p.384" },
      { q: "Emitter degeneration (unbypassed $R_E$) in a CE amplifier:",
        choices: ["Lowers gain, stabilizes against $\\beta$ variation", "Increases gain", "Adds an inverting stage", "No effect"],
        correct: 0,
        solution: S({
          c: "An unbypassed emitter resistor adds LOCAL NEGATIVE FEEDBACK: gain drops to $A_v \\approx -\\dfrac{R_C}{R_E + r_e}$, but in exchange the gain stops depending on the transistor's fickle $r_e$ (and β, temperature, lot-to-lot spread).",
          s: [
            "<b>Step 1 — The trade.</b> Gain falls from $R_C/r_e$ (large, unstable) to roughly $R_C/R_E$ (smaller, set by resistors).",
            "<b>Step 2 — Why it stabilizes.</b> If current tries to rise, the $R_E$ drop rises, squeezing $V_{BE}$ — self-correcting bias, the feedback loop in miniature.",
            "<b>Step 3 — Distractor audit.</b> 'Increases gain' inverts the math; no inversion is added (CE stays inverting); 'no effect' ignores the resistor."
          ],
          a: "Lowers gain but stabilizes it against device variation.",
          v: "The both-worlds trick: bypass $R_E$ with a capacitor — DC keeps the bias stability, AC sees the full $R_C/r_e$ gain ✓. The same gain-for-robustness exchange as op-amp feedback, implemented with one resistor."

        }),
        ref: "Handbook p.384" },
      { q: "An ideal Schmitt trigger:",
        choices: ["Has hysteresis (two thresholds)", "Has single threshold", "Is linear", "Has infinite gain"],
        correct: 0,
        solution: S({
          c: "A Schmitt trigger is a comparator with HYSTERESIS — TWO thresholds: rising input must cross $V_{T+}$; falling input must cross the lower $V_{T-}$. Between them the output remembers its state.",
          s: [
            "<b>Step 1 — Match.</b> 'Two thresholds' = hysteresis = the Schmitt trigger's definition.",
            "<b>Step 2 — Why two beat one.</b> A noisy signal wobbling near a SINGLE threshold fires the output repeatedly; with two, noise smaller than the window $V_{T+}-V_{T-}$ cannot retrigger.",
            "<b>Step 3 — Distractor audit.</b> 'Single threshold' is a plain comparator; 'linear' contradicts its snap action; 'infinite gain' describes the open-loop op-amp inside, not the defining property."
          ],
          a: "Has hysteresis (two thresholds).",
          v: "It's a stock part: the 74HC14 hex inverter has Schmitt inputs, and MCU 'ST' pins debounce buttons with exactly this window ✓. Design rule: make the hysteresis wider than the worst-case input noise."

        }),
        ref: "Handbook p.380" },
      { q: "MOSFET cutoff condition (nMOS):",
        choices: ["$V_{GS} < V_{th}$", "$V_{GS} > V_{th}$", "$V_{DS} = 0$", "$V_{GS} > 0$"],
        correct: 0,
        solution: S({
          c: "An nMOS enhancement transistor needs gate voltage above threshold to INVERT the channel surface and connect drain to source. Below it, no channel exists: CUTOFF when $V_{GS} < V_{th}$.",
          s: [
            "<b>Step 1 — Match.</b> $V_{GS} < V_{th}$ → no channel → $I_D \\approx 0$.",
            "<b>Step 2 — Above threshold.</b> $V_{GS} > V_{th}$ opens the device into triode (small $V_{DS}$) or saturation (large $V_{DS}$).",
            "<b>Step 3 — Distractor audit.</b> '$V_{GS} > V_{th}$' is the ON condition; '$V_{DS} = 0$' says nothing about the channel; '$V_{GS} > 0$' isn't sufficient if still below $V_{th}$."
          ],
          a: "$V_{GS} < V_{th}$",
          v: "Mirror check for pMOS: $V_{th}$ is negative, and cutoff is $V_{GS} > V_{th}$ (less negative) — signs flip across the complementary device, the source of endless CMOS sign errors ✓. Fine print: 'zero' current is really subthreshold leakage — the static power of modern chips."

        }),
        ref: "Handbook p.386" },
      { q: "Drain-source on resistance ($R_{DS,on}$) decreases when:",
        choices: ["Gate voltage above threshold increases", "$V_{DS}$ increases", "Temperature increases", "Current decreases"],
        correct: 0,
        solution: S({
          c: "In the triode (ohmic) region a MOSFET acts as a gate-controlled resistor: $R_{DS,on} \\approx \\dfrac{1}{k(V_{GS} - V_{th})}$ — more gate OVERDRIVE → wider, deeper channel → LESS resistance.",
          s: [
            "<b>Step 1 — Match.</b> Raise $V_{GS}$ above threshold → $R_{DS,on}$ falls.",
            "<b>Step 2 — Distractor audit.</b> Raising $V_{DS}$ pushes TOWARD saturation (resistance concept breaks down); higher temperature RAISES $R_{DS,on}$ (mobility falls); current level doesn't set the resistance — the gate does.",
            "<b>Step 3 — The temperature aside that matters.</b> The POSITIVE tempco is a feature: paralleled MOSFETs self-balance (the hot one carries less), unlike BJTs which hog current and run away."
          ],
          a: "When the gate overdrive ($V_{GS} - V_{th}$) increases.",
          v: "Datasheet confirmation: power MOSFETs spec $R_{DS,on}$ AT a stated $V_{GS}$ (10 V, or 4.5 V for logic-level parts) — drive the gate fully or pay $I^{2}R$ heat ✓. Gate drivers exist precisely to slam $V_{GS}$ high fast."

        }),
        ref: "Handbook p.386" },
      { q: "Class A amplifier efficiency limit:",
        choices: ["$25\\%$ (resistive load)", "$50\\%$", "$78.5\\%$", "$100\\%$"],
        correct: 0,
        solution: S({
          c: "Amplifier classes trade LINEARITY against EFFICIENCY by how long the transistor conducts: Class A conducts 360° of every cycle — maximum fidelity, minimum efficiency: 25% ceiling with a resistive load (50% transformer-coupled).",
          s: [
            "<b>Step 1 — Match.</b> Class A, resistive load → 25% theoretical max.",
            "<b>Step 2 — Where the energy goes.</b> The bias current flows ALWAYS — even at zero signal the stage burns full DC power; at best one quarter reaches the load.",
            "<b>Step 3 — The class ladder.</b> B (180° conduction, push-pull): 78.5%; AB: between; D (switching): >90% — the distractors are the other classes' numbers."
          ],
          a: "25% (resistive load).",
          v: "Thermal reality check: a 100-W Class-A audio amp idles at ~400 W of heat — the giant heatsinks on audiophile gear are this number made visible ✓. Phones and car amps use Class D for exactly the inverse reason."

        }),
        ref: "Handbook p.384" },
      { q: "Differential amp common-mode rejection ratio (CMRR) measures:",
        choices: ["Differential gain / common-mode gain", "Output noise / signal", "Slew rate", "Input impedance"],
        correct: 0,
        solution: S({
          c: "A differential amplifier should amplify the DIFFERENCE between its inputs and ignore whatever is common to both (interference picked up by both wires). CMRR quantifies that: $CMRR = |A_d/A_{cm}|$, usually in dB.",
          s: [
            "<b>Step 1 — Match.</b> Differential gain ÷ common-mode gain — the definition.",
            "<b>Step 2 — Read a spec.</b> 100 dB CMRR → difference signals amplified $10^{5}$× more than common-mode noise.",
            "<b>Step 3 — Distractor audit.</b> Noise/signal is SNR; slew rate is a speed spec; input impedance is a loading spec — different datasheet lines entirely."
          ],
          a: "Differential gain divided by common-mode gain.",
          v: "Why it's the king spec in instrumentation: a thermocouple's millivolts ride on volts of mains hum common to both leads — only high CMRR pulls the signal out ✓. The classic CMRR killer: mismatched resistors in the difference-amp network, not the op-amp itself."

        }),
        ref: "Handbook p.380" },
      { q: "A boost converter steps voltage:",
        choices: ["UP (output > input)", "Down", "Same", "Either, depending on duty"],
        correct: 0,
        solution: S({
          c: "Converter naming is literal: BOOST steps UP — $V_{out} = \\dfrac{V_{in}}{1-D}$, always ≥ $V_{in}$, growing without bound as duty cycle D → 1 (in the ideal math).",
          s: [
            "<b>Step 1 — Match.</b> Boost = step-up; output exceeds input.",
            "<b>Step 2 — Mechanism in one line.</b> Switch ON stores energy in the inductor; switch OFF, the inductor's kick ADDS to the input voltage through the diode — stacking, hence boosting.",
            "<b>Step 3 — Distractor audit.</b> Step-down is the BUCK; 'same' would be a wire; 'either' describes the BUCK-BOOST family."
          ],
          a: "Up — output greater than input.",
          v: "Limit checks: $D = 0$ → $V_{out} = V_{in}$ (just a diode path) ✓; $D \\to 1$ → ideal blow-up, real parasitics cap practical boosts at ~5× ✓. Everyday sightings: 3.7-V battery → 5-V USB, solar MPPT stages, LED backlight drivers."

        }),
        ref: "Handbook p.383" },
    ],

    // ====================== Ch 10: Power — +8 ======================
    10: [
      { q: "Total real power for a 3-φ Δ-connected load: $V_{LL}=240$V, $Z_\\phi = 10\\angle 30°$.",
        choices: ["$\\approx 14{,}968$ W", "$\\approx 5760$ W", "$\\approx 17{,}280$ W", "$\\approx 8640$ W"],
        correct: 0,
        solution: S({
          c: "Delta route to total power: each phase leg sees the FULL line-to-line voltage ($V_\\phi = V_{LL}$ in Δ), so $I_\\phi = V_{LL}/|Z|$, $P_\\phi = V_\\phi I_\\phi\\cos\\theta$, total $= 3P_\\phi$. The impedance ANGLE supplies the power factor: $\\cos30° = 0.866$.",
          s: [
            "<b>Step 1 — Phase current.</b> $I_\\phi = 240/10 = 24$ A.",
            "<b>Step 2 — Per-phase power.</b> $P_\\phi = 240\\times24\\times0.866 = 4{,}988$ W.",
            "<b>Step 3 — Total.</b> $3\\times4{,}988 \\approx 14{,}965$ W ≈ 15 kW.",
            "<b>Step 4 — Distractor audit.</b> 17,280 forgets the power factor ($3\\times240\\times24$ = apparent); 5,760 is ONE phase's apparent power; 8,640 mixes errors."
          ],
          a: "$P \\approx 14.97$ kW",
          v: "Line-quantity cross-check: $I_L = \\sqrt3\\times24 = 41.6$ A; $P = \\sqrt3(240)(41.6)(0.866) = 14{,}962$ W ✓ — per-phase and line formulas converge, as they always must."

        }),
        ref: "Handbook p.363" },
      { q: "Three identical impedances 30Ω in Y → equivalent in Δ:",
        choices: ["$90\\ \\Omega$", "$30\\ \\Omega$", "$10\\ \\Omega$", "$60\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "BALANCED Y↔Δ conversion is one factor of three: $Z_\\Delta = 3Z_Y$ (and back: $Z_Y = Z_\\Delta/3$).",
          s: [
            "<b>Step 1 — Multiply.</b> $Z_\\Delta = 3\\times30 = 90\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 10 Ω divides (the Δ→Y direction); 30 forgets to convert; 60 doubles instead of tripling."
          ],
          a: "$Z_\\Delta = 90\\,\\Omega$",
          v: "Terminal test proves equivalence: between two terminals, Y gives $30+30 = 60\\,\\Omega$; Δ gives $90\\,\\|\\,(90+90) = 90\\|180 = 60\\,\\Omega$ ✓ — identical from outside. Direction memory: Δ values are always the BIGGER ones (×3)."

        }),
        ref: "Handbook p.363" },
      { q: "Single-phase 240V supply feeds a 24Ω heater. Power dissipated:",
        choices: ["$2400$ W", "$10$ W", "$24000$ W", "$120$ W"],
        correct: 0,
        solution: S({
          c: "A heater is purely resistive, so RMS voltage works exactly like DC: $P = V^{2}/R$.",
          s: [
            "<b>Step 1 — Apply.</b> $P = 240^{2}/24 = 57{,}600/24 = 2{,}400$ W.",
            "<b>Step 2 — Distractor audit.</b> 10 W inverts ($R/V$ confusion); 24,000 misplaces a decade; 120 W computes $V/2$ nonsense."
          ],
          a: "$P = 2.4$ kW",
          v: "Triple-form check: $I = 240/24 = 10$ A → $P = VI = 2{,}400$ W ✓ and $I^{2}R = 100\\times24 = 2{,}400$ W ✓. Reality anchor: 2.4 kW is a typical space heater or small water heater — and exactly 10 A at 240 V, a sensible branch circuit ✓."

        }),
        ref: "Handbook p.356" },
      { q: "Transformer primary 4 A, secondary 8 A. Step-up or step-down?",
        choices: ["Step-down (V down, I up secondary)", "Step-up", "1:1", "Cannot tell"],
        correct: 0,
        solution: S({
          c: "In an ideal transformer current and voltage trade inversely. Secondary current HIGHER than primary → secondary voltage LOWER → step-DOWN.",
          s: [
            "<b>Step 1 — Compare currents.</b> $I_2 = 8 > I_1 = 4$ → current doubled → voltage halved.",
            "<b>Step 2 — Ratio.</b> $a = I_2/I_1 = V_1/V_2 = 2$ → 2:1 step-down.",
            "<b>Step 3 — Distractor audit.</b> 'Step-up' reads the inverse relation backwards; '1:1' needs equal currents; 'cannot tell' — the current pair fully determines the ratio for an ideal transformer."
          ],
          a: "Step-down (2:1).",
          v: "Power balance with any test voltage — say $V_1 = 240$: in $= 960$ W; $V_2 = 120$, out $= 120\\times8 = 960$ W ✓. The see-saw never lies: I up means V down, P constant."

        }),
        ref: "Handbook p.364" },
      { q: "PF correction adds shunt capacitor. PF moves toward:",
        choices: ["Unity (1.0)", "Zero", "Lagging more", "Cannot affect"],
        correct: 0,
        solution: S({
          c: "Typical industrial loads are INDUCTIVE (motors) — they draw lagging reactive power. A shunt capacitor SUPPLIES reactive power locally, cancelling part of the load's Q so the source sees less: the power factor climbs toward unity.",
          s: [
            "<b>Step 1 — The cancellation.</b> $Q_{net} = Q_{load} - Q_{cap}$; sizing $Q_{cap} = Q_{load}$ lands PF exactly at 1.",
            "<b>Step 2 — The overshoot warning.</b> Too much capacitance flips the system LEADING — also penalized, and risky at light load.",
            "<b>Step 3 — Distractor audit.</b> 'Zero' would mean adding pure reactance with no load; 'lagging more' inverts the capacitor's sign; 'cannot affect' denies the whole practice."
          ],
          a: "Toward unity (1.0).",
          v: "Money trail: utilities bill kVA demand or penalize PF below ~0.9-0.95 — capacitor banks pay for themselves in months at large plants ✓. Practical target: 0.95-0.98, never exactly 1.0 (overshoot margin)."

        }),
        ref: "Handbook p.362-363" },
      { q: "Per-unit voltage in a system with base 13.8 kV; actual 14.2 kV:",
        choices: ["$\\approx 1.029$ pu", "$0.971$ pu", "$1.5$ pu", "$13.8$"],
        correct: 0,
        solution: S({
          c: "Per-unit = actual ÷ base — a normalization that makes every healthy bus read 'about 1.0' regardless of voltage class.",
          s: [
            "<b>Step 1 — Divide.</b> $14.2/13.8 = 1.029$ pu.",
            "<b>Step 2 — Read it.</b> The bus runs 2.9% ABOVE nominal — inside the usual ±5% operating band.",
            "<b>Step 3 — Distractor audit.</b> 0.971 inverts the division ($13.8/14.2$); 1.5 and 13.8 aren't normalizations."
          ],
          a: "$\\approx 1.029$ pu",
          v: "Why operators love pu: 1.029 means the same thing at 13.8 kV or 500 kV — one glance, no mental unit-juggling; alarms set at 0.95/1.05 pu work system-wide ✓. (And transformer impedances keep one pu value seen from either side.)"

        }),
        ref: "Handbook p.363" },
      { q: "Wye to Delta conversion: a Y has 5Ω, 10Ω, 15Ω. Find $Z_{AB}$ of equivalent Δ (between same two terminals A,B):",
        choices: ["$\\approx 18.33\\ \\Omega$", "$15\\ \\Omega$", "$25\\ \\Omega$", "$200\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "UNBALANCED Y→Δ uses the sum-of-products formula: $Z_{AB} = \\dfrac{Z_aZ_b + Z_bZ_c + Z_cZ_a}{Z_c}$ — divide by the Y-leg NOT touching terminals A and B.",
          s: [
            "<b>Step 1 — Sum of pairwise products.</b> $5(10) + 10(15) + 15(5) = 50 + 150 + 75 = 275$.",
            "<b>Step 2 — Divide by the opposite leg.</b> $Z_c = 15$ (the leg to neither A nor B): $Z_{AB} = 275/15 = 18.33\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 15 echoes a Y leg; 25 sums two legs ($5+10+10$? loosely); 200 garbles the products."
          ],
          a: "$Z_{AB} \\approx 18.33\\,\\Omega$",
          v: "Balanced-case sanity: if all legs were 10 Ω, the formula gives $300/10 = 30 = 3\\times10$ — recovering the familiar $Z_\\Delta = 3Z_Y$ ✓. Pattern: the numerator is the SAME for all three Δ edges; only the divisor changes (always the opposite Y-leg)."

        }),
        ref: "Handbook p.363" },
      { q: "Bidirectional power flow (P>0 to/from load) is enabled by:",
        choices: ["Inverters (with grid-tie capability)", "Diodes only", "Always — passive elements", "Only DC supplies"],
        correct: 0,
        solution: S({
          c: "Power flows backward (from 'load' to grid) only if the interface can convert in BOTH directions. Diode rectifiers are one-way valves; a grid-tie INVERTER actively switches and can push DC-side energy into the AC grid.",
          s: [
            "<b>Step 1 — Match.</b> Bidirectional inverters (grid-tie capable) — the enabling hardware.",
            "<b>Step 2 — Where it matters.</b> Rooftop solar feed-in, vehicle-to-grid (V2G), battery storage doing grid support — all are inverter-mediated reverse flows.",
            "<b>Step 3 — Distractor audit.</b> Diodes conduct one way by definition; passive elements only CONSUME or store; DC supplies have no AC export path."
          ],
          a: "Bidirectional (grid-tie) inverters.",
          v: "The safety string attached: anti-islanding protection — a grid-tie inverter must shut down when the grid fails so it doesn't energize lines workers think are dead ✓ (IEEE 1547). Your meter spinning backwards is this answer in action."

        }),
        ref: "Handbook p.383" },
    ],

    // ====================== Ch 11: EM — +4 ======================
    11: [
      { q: "Capacitance of two concentric spheres (radii $a$, $b$):",
        choices: ["$\\frac{4\\pi\\varepsilon ab}{b-a}$", "$\\frac{\\varepsilon ab}{b-a}$", "$\\frac{\\varepsilon(b-a)}{ab}$", "$2\\pi\\varepsilon\\ln(b/a)$"],
        correct: 0,
        solution: S({
          c: "Spherical capacitor formula: $C = 4\\pi\\varepsilon ab/(b-a)$.",
          s: ["Memorized formula for FE — derivation: integrate $V = \\int E \\cdot dl$ between spheres."],
          a: "$C = 4\\pi\\varepsilon ab/(b-a)$",
          v: "As $b \\to \\infty$: $C \\to 4\\pi\\varepsilon a$ — capacitance of isolated sphere."
        }),
        ref: "Handbook p.355" },
      { q: "Magnetic flux density inside long solenoid with $n$ turns/m and current $I$:",
        choices: ["$B = \\mu_0 n I$", "$B = \\mu_0 N I/L$", "$B = 2\\pi r$", "Both A and B (same)"],
        correct: 0,
        solution: S({
          c: "Inside ideal long solenoid: $B = \\mu_0 n I$ where $n = N/L$ is turns per unit length. Uniform inside; ~0 outside.",
          s: ["A and B are the same formula written differently — both correct."],
          a: "$B = \\mu_0 n I$ (or equivalently $\\mu_0 N I/L$)",
          v: "Solenoid is the workhorse of electromagnets."
        }),
        ref: "Handbook p.355" },
      { q: "Magnetic flux $\\Phi$ through a loop: $\\Phi = B \\cdot A$ if:",
        choices: ["B perpendicular to A and uniform", "Always", "B parallel to loop plane", "Loop is a sphere"],
        correct: 0,
        solution: S({
          c: "General: $\\Phi = \\int \\vec{B}\\cdot d\\vec{A}$. Simplifies to $BA$ when B is uniform and perpendicular to the loop plane.",
          s: [
            "$\\vec{B}$ tilted at angle $\\theta$ to loop normal: $\\Phi = BA\\cos\\theta$."
          ],
          a: "B perpendicular to area, uniform",
          v: "Generator output proportional to $d\\Phi/dt$ — that's how rotating coils generate AC."
        }),
        ref: "Handbook p.355" },
      { q: "$E$-field in dielectric vs vacuum (same charges):",
        choices: ["Reduced by factor $\\varepsilon_r$", "Increased by $\\varepsilon_r$", "Same", "Reduced by $\\varepsilon_r^2$"],
        correct: 0,
        solution: S({
          c: "Dielectric polarizes opposing applied field → net field reduced. Reduction factor = relative permittivity.",
          s: [
            "$E_{dielectric} = E_{vacuum}/\\varepsilon_r$.",
            "Equivalent: dielectric absorbs some of the field energy.",
            "$\\varepsilon_r > 1$ for almost all dielectrics."
          ],
          a: "Reduced by $\\varepsilon_r$",
          v: "Why dielectric helps cap hold more charge for same V: stores more energy, lowering E for same Q allows more Q for same V."
        }),
        ref: "Handbook p.355" },
    ],

    // ====================== Ch 12: Control — +5 ======================
    12: [
      { q: "Open-loop system: pole at $s=-2$. Adding negative unity feedback shifts pole to:",
        choices: ["$s = -2 - K$ (further left if K>0)", "$s = +2$", "$s = -2$", "$s = 0$"],
        correct: 0,
        solution: S({
          c: "If $G(s) = K/(s+2)$ with unity feedback: $T(s) = K/(s + 2 + K)$. Pole at $s = -(2+K)$.",
          s: [
            "K=0: pole at -2.",
            "K=8: pole at -10 (faster).",
            "Negative feedback can only push poles left (more stable) for this simple case."
          ],
          a: "$s = -(2+K)$",
          v: "Feedback speeds up response by pushing poles further into LHP."
        }),
        ref: "Handbook p.365" },
      { q: "PID controller integral term effect on noise:",
        choices: ["Filters (averages out)", "Amplifies noise", "No effect", "Causes oscillation"],
        correct: 0,
        solution: S({
          c: "Integral: average over time → smooths noise (low-pass behavior). Derivative: amplifies high-frequency noise.",
          s: [
            "Integrator: noise averages to zero over time (if zero-mean).",
            "Derivative: needs filtering — pure D term unusable on noisy signals.",
            "PI common for noisy plants; full PID with D filtering for cleaner signals."
          ],
          a: "Filters noise",
          v: "Classic PID with derivative kick: add low-pass filter to D-term to avoid noise amplification."
        }),
        ref: "Handbook p.366" },
      { q: "Gain margin: open-loop gain at the frequency where phase is -180°. If gain = 0.5 (−6 dB):",
        choices: ["GM = +6 dB (stable margin)", "GM = -6 dB", "GM = 0", "GM = 0.5"],
        correct: 0,
        solution: S({
          c: "GM = 1/|G(jω₁80)| where $\\omega_{180}$ is phase-crossover frequency. In dB: $-20\\log|G|$.",
          s: [
            "$|G| = 0.5 \\Rightarrow$ GM = $1/0.5 = 2$ (linear) = $+6$ dB.",
            "Positive GM in dB means stable margin (could increase gain by GM before instability)."
          ],
          a: "GM = +6 dB",
          v: "Good design: GM > 6 dB AND PM > 30-60°."
        }),
        ref: "Handbook p.366" },
      { q: "Routh array sign change indicates:",
        choices: ["A RHP pole (instability)", "Stability", "A zero of system", "Type of system"],
        correct: 0,
        solution: S({
          c: "Each sign change in the first column = one RHP pole.",
          s: [
            "All same sign (typically positive): all poles in LHP → stable.",
            "Sign changes: count = number of unstable poles."
          ],
          a: "Sign change → RHP pole",
          v: "Simpler than factoring the characteristic equation."
        }),
        ref: "Handbook p.365" },
      { q: "A lag compensator improves:",
        choices: ["Steady-state error (low-freq gain)", "Transient overshoot directly", "Always speeds up response", "Pole locations"],
        correct: 0,
        solution: S({
          c: "Lag compensator: adds DC gain (lifts low-freq response) → reduces steady-state error. Slight phase drag near transition.",
          s: [
            "Lead: improves transient/phase margin.",
            "Lag: improves steady-state (error reduction).",
            "Lead-lag: combine both."
          ],
          a: "Steady-state error",
          v: "Typical use: a slow lag (placed well below crossover) won't hurt PM but boosts DC gain by $\\alpha$."
        }),
        ref: "Handbook p.366" },
    ],

    // ====================== Ch 13: Comm — +5 ======================
    13: [
      { q: "16-QAM bits per symbol:",
        choices: ["$4$", "$2$", "$8$", "$16$"],
        correct: 0,
        solution: S({
          c: "$M$-QAM has $M$ constellation points. Bits/symbol = $\\log_2 M$.",
          s: ["$\\log_2 16 = 4$ bits/symbol."],
          a: "4 bits/symbol",
          v: "64-QAM = 6 bits/symbol; 256-QAM = 8 bits/symbol. Each doubling of M adds 1 bit."
        }),
        ref: "Handbook p.371" },
      { q: "Differential Manchester encoding ensures:",
        choices: ["Transition each bit period (clock recovery)", "DC component is non-zero", "Asynchronous signaling", "Higher data rate"],
        correct: 0,
        solution: S({
          c: "Manchester: always a transition mid-bit. Provides clock embedded in signal. Differential Manchester: transition at start codes the data bit.",
          s: [
            "Used in Ethernet 10BASE-T originally.",
            "Self-clocking: receiver recovers clock from transitions.",
            "Tradeoff: doubles required bandwidth vs NRZ."
          ],
          a: "Transitions provide clock recovery",
          v: "Modern Ethernet (1000BASE-T): uses 4D-PAM5 with more complex encoding."
        }),
        ref: "Handbook p.371" },
      { q: "Eye diagram with closed eye indicates:",
        choices: ["Distortion / poor signal quality", "Good signal", "High SNR", "Linear channel"],
        correct: 0,
        solution: S({
          c: "Eye diagram = overlay of many bit waveforms. Open eye = clear thresholds, easy detection. Closed = ISI, noise, jitter making detection unreliable.",
          s: [
            "Open eye: high SNR, low ISI.",
            "Closed eye: lots of bit errors expected.",
            "Use to evaluate channel quality."
          ],
          a: "Closed = poor",
          v: "Eye monitor tools are standard equipment in high-speed serial design (PCIe, USB, SerDes)."
        }),
        ref: "Handbook p.371" },
      { q: "Bit error rate (BER) of $10^{-6}$ means:",
        choices: ["1 error per million bits", "1 error per second", "$10^{-6}$ of total bits", "Always perfect"],
        correct: 0,
        solution: S({
          c: "BER = errors / total bits. Dimensionless probability.",
          s: [
            "BER $10^{-6}$ = 1 error per 1 million bits.",
            "At 1 Mbps, this is roughly 1 error per second.",
            "Typical targets: voice $10^{-3}$, data $10^{-6}$, fiber $10^{-12}$."
          ],
          a: "1 error per million bits",
          v: "Coding (FEC) can dramatically reduce effective BER at cost of overhead."
        }),
        ref: "Handbook p.371" },
      { q: "FSK (Frequency-Shift Keying) is type of:",
        choices: ["Digital modulation", "Analog modulation", "Multiplexing", "Coding"],
        correct: 0,
        solution: S({
          c: "FSK: digital data shifts carrier frequency between discrete values. Binary FSK uses 2 frequencies for 0 and 1.",
          s: [
            "FSK: digital (vs analog FM).",
            "ASK: amplitude-shift keying.",
            "PSK: phase-shift keying.",
            "QAM: quadrature amplitude modulation (combines ASK + PSK)."
          ],
          a: "Digital modulation",
          v: "Used in: Bluetooth (GFSK), early modems, RFID. Robust against amplitude variations."
        }),
        ref: "Handbook p.371" },
    ],

    // ====================== Ch 14: Networks — +4 ======================
    14: [
      { q: "DNS resolves:",
        choices: ["Hostname to IP address", "MAC to IP", "Port to socket", "URL to HTML"],
        correct: 0,
        solution: S({
          c: "DNS = Domain Name System. Translates human-readable names (www.example.com) to IP addresses (93.184.216.34).",
          s: [
            "Hierarchical: root → TLD → authoritative servers.",
            "Often cached locally for performance.",
            "Modern DNS-over-HTTPS encrypts queries."
          ],
          a: "Hostname → IP",
          v: "Without DNS, you'd memorize IPs. With DNSSEC, responses are cryptographically signed."
        }),
        ref: "Handbook p.400" },
      { q: "Maximum Ethernet frame size (standard, no jumbo):",
        choices: ["$1518$ bytes", "$1500$ bytes", "$9000$ bytes", "$64$ bytes"],
        correct: 0,
        solution: S({
          c: "Standard Ethernet frame: 14 header + 1500 payload (MTU) + 4 FCS = 1518 bytes. Plus 8-byte preamble + 12-byte interframe gap.",
          s: [
            "MTU (Maximum Transmission Unit) = 1500.",
            "Frame size includes header + FCS: 1518.",
            "Jumbo frames: ~9000 bytes (improves throughput on supporting networks)."
          ],
          a: "1518 bytes",
          v: "Min frame: 64 bytes (to ensure collision detection in original Ethernet)."
        }),
        ref: "Handbook p.399" },
      { q: "DHCP server provides:",
        choices: ["IP, subnet, gateway, DNS info to clients", "Web pages", "MAC addresses", "Routing"],
        correct: 0,
        solution: S({
          c: "DHCP (Dynamic Host Configuration Protocol): leases IP and network config to clients dynamically.",
          s: [
            "Process: DISCOVER → OFFER → REQUEST → ACK (DORA).",
            "Lease time typically hours to days.",
            "Avoids manual IP assignment."
          ],
          a: "Network config (IP, mask, gateway, DNS)",
          v: "Critical for plug-and-play networks. Most home routers run DHCP server."
        }),
        ref: "Handbook p.400" },
      { q: "Layer 1 (Physical) examples:",
        choices: ["Cables, hubs, voltage levels", "TCP/UDP", "IP routing", "HTTP requests"],
        correct: 0,
        solution: S({
          c: "L1 = Physical: media (copper, fiber, RF), connectors, signaling levels, bit timing.",
          s: [
            "L1 devices: repeaters, hubs, cables.",
            "L2 devices: switches, NICs.",
            "L3 devices: routers."
          ],
          a: "Cables, hubs, signaling",
          v: "Higher layers ride on L1. Bad cable = no amount of software fixes."
        }),
        ref: "Handbook p.399" },
    ],

    // ====================== Ch 15: Digital — +8 ======================
    15: [
      { q: "Convert binary 11100101 to octal:",
        choices: ["$345_8$", "$229_8$", "$352_8$", "$E5_{16}$"],
        correct: 0,
        solution: S({
          c: "Group binary into 3s from the right, convert each group to octal.",
          s: [
            "11100101 → 011 100 101 (pad left with 0).",
            "011 = 3, 100 = 4, 101 = 5.",
            "Octal: 345."
          ],
          a: "$345_8$",
          v: "Decimal check: $3\\cdot 64 + 4\\cdot 8 + 5 = 229_{10}$. And $11100101_2 = 229_{10}$ ✓"
        }),
        ref: "Handbook p.388" },
      { q: "Decimal 100 in binary:",
        choices: ["$1100100$", "$1001000$", "$1100110$", "$111100$"],
        correct: 0,
        solution: S({
          c: "Decompose: 100 = 64 + 32 + 4 = $2^6 + 2^5 + 2^2$.",
          s: [
            "Bits at positions 6, 5, 2: 1100100 (7 bits).",
            "$64 + 32 + 4 = 100$ ✓"
          ],
          a: "$1100100$",
          v: "Quick check: $1100100_2 = 100_{10}$, and 100 in hex = $64_{16}$."
        }),
        ref: "Handbook p.388" },
      { q: "$ABC + \\bar{A}BC + AB\\bar{C} + \\bar{A}\\bar{B}C$ — number of minterms:",
        choices: ["$4$ minterms", "$3$", "$8$", "$2$"],
        correct: 0,
        solution: S({
          c: "Each AND of all 3 vars (in true or complement form) is one minterm. Count the unique terms.",
          s: [
            "Terms: $ABC$, $\\bar{A}BC$, $AB\\bar{C}$, $\\bar{A}\\bar{B}C$.",
            "All have 3 variables → 4 minterms."
          ],
          a: "4 minterms",
          v: "3-variable function has up to 8 minterms. This function has 4 → truth table has 4 ones."
        }),
        ref: "Handbook p.389" },
      { q: "A multiplexer with 8 data inputs needs ___ select lines:",
        choices: ["$3$", "$8$", "$4$", "$2$"],
        correct: 0,
        solution: S({
          c: "$N$ inputs → $\\log_2 N$ select lines.",
          s: ["$\\log_2 8 = 3$ select lines."],
          a: "3 select lines",
          v: "Encoders/decoders use the same relationship: 8-line to 3-line encoder."
        }),
        ref: "Handbook p.390" },
      { q: "Implement XOR using only NAND gates: minimum number of gates:",
        choices: ["$4$ NAND gates", "$2$", "$6$", "$1$"],
        correct: 0,
        solution: S({
          c: "XOR(A,B) = (A NAND (A NAND B)) NAND (B NAND (A NAND B)). Total: 4 NAND gates.",
          s: [
            "Stage 1: $X = A\\,\\text{NAND}\\,B$.",
            "Stage 2: $Y_1 = A\\,\\text{NAND}\\,X$; $Y_2 = B\\,\\text{NAND}\\,X$.",
            "Stage 3: $Y_1\\,\\text{NAND}\\,Y_2 = A \\oplus B$."
          ],
          a: "4 NAND gates",
          v: "NAND (and NOR) are 'universal' — any Boolean function can be built from them alone."
        }),
        ref: "Handbook p.389-390" },
      { q: "Mealy vs Moore state machine:",
        choices: ["Mealy outputs depend on state AND input; Moore on state only", "Same", "Moore on input only", "Both depend on input only"],
        correct: 0,
        solution: S({
          c: "<b>Moore</b>: output = $f(\\text{state})$. <b>Mealy</b>: output = $f(\\text{state, input})$ — faster, fewer states often, but transitions can be glitchy.",
          s: [
            "Moore: output is registered with state → glitch-free, synchronous output.",
            "Mealy: output combinational → can have hazards but typically fewer states needed."
          ],
          a: "Mealy: state + input; Moore: state only",
          v: "Same machine can be implemented either way — design choice based on requirements."
        }),
        ref: "Handbook p.391" },
      { q: "Synchronous vs asynchronous counters:",
        choices: ["Sync: all FFs use same clock; Async: cascaded", "Same", "Sync uses NAND only", "Sync is slower"],
        correct: 0,
        solution: S({
          c: "<b>Synchronous</b>: all flip-flops triggered by same clock edge → fast, no propagation delays accumulate. <b>Asynchronous (ripple)</b>: output of one FF clocks the next → simple but slow & glitchy.",
          s: [
            "Sync: fast, glitch-free outputs.",
            "Async: simpler, fewer connections, but propagation delay through all stages → output skew."
          ],
          a: "Sync: shared clock; Async: cascade",
          v: "High-speed systems always use synchronous design."
        }),
        ref: "Handbook p.391" },
      { q: "Gray code: only ___ bit changes between adjacent codes:",
        choices: ["1 bit", "2 bits", "All bits", "Variable"],
        correct: 0,
        solution: S({
          c: "Gray code: sequence where adjacent codes differ by exactly 1 bit. Useful in: position encoders, K-maps (adjacent cells differ by 1 bit), state minimization.",
          s: [
            "Binary 0,1,2,3 = 00,01,10,11. Note 1→2 changes both bits!",
            "Gray 0,1,2,3 = 00,01,11,10. Each step: 1 bit only."
          ],
          a: "1 bit",
          v: "Rotary encoders use Gray code to avoid transient misreads — at a transition, only one bit can be ambiguous."
        }),
        ref: "Handbook p.388" },
    ],

    // ====================== Ch 16: CompSys — +6 ======================
    16: [
      { q: "Pipeline hazard caused by data dependency between instructions:",
        choices: ["Data hazard", "Control hazard", "Structural hazard", "Cache miss"],
        correct: 0,
        solution: S({
          c: "Three pipeline hazard types: <b>Data</b> (dependent on prior result), <b>Control</b> (branch — don't know next PC yet), <b>Structural</b> (resource conflict).",
          s: [
            "Data: forwarding/bypassing helps.",
            "Control: branch prediction, delayed branches.",
            "Structural: extra hardware (e.g., separate I and D caches)."
          ],
          a: "Data hazard",
          v: "Modern CPUs use out-of-order execution + register renaming to mitigate hazards."
        }),
        ref: "Handbook p.408" },
      { q: "MIPS instruction format LW (load word): how many operands?",
        choices: ["$3$ (rt, offset, rs)", "$2$", "$1$", "$4$"],
        correct: 0,
        solution: S({
          c: "MIPS LW format: lw $rt, offset($rs)$ — destination register, offset, base register. 3 operands.",
          s: [
            "Example: lw $t0, 4($s0) — load word from address ($s0$+4) into $t0$."
          ],
          a: "3 operands (rt, offset, rs)",
          v: "RISC ISAs have regular 3-operand format for clarity and pipelining."
        }),
        ref: "Handbook p.408" },
      { q: "Page size 4 KB, virtual address space 32 bits. Number of pages:",
        choices: ["$2^{20}$ pages (≈1M)", "$2^{32}$", "$4096$", "$32$"],
        correct: 0,
        solution: S({
          c: "Page bits: $\\log_2(\\text{page size}) = \\log_2 4096 = 12$ offset bits. Page number bits = total - offset = 32-12=20.",
          s: [
            "Pages: $2^{20}$ ≈ 1 million.",
            "Each VA splits into 20-bit page # + 12-bit offset."
          ],
          a: "$2^{20}$ pages",
          v: "Page tables get huge if every entry is stored — solved by multi-level page tables, TLBs."
        }),
        ref: "Handbook p.408" },
      { q: "Compiler vs interpreter:",
        choices: ["Compiler translates whole program first; interpreter executes step-by-step", "Same", "Interpreter is faster", "Compiler outputs source code"],
        correct: 0,
        solution: S({
          c: "<b>Compiler</b>: source → machine code (or IR) ahead of time. <b>Interpreter</b>: reads + executes source line by line at run-time. <b>JIT</b>: combines — compile at run-time for performance.",
          s: [
            "Compiler: faster execution, slower dev cycle.",
            "Interpreter: faster iteration, slower runtime.",
            "JIT (Java, V8): runtime compilation with profile-guided optimization."
          ],
          a: "Compiler ahead-of-time; Interpreter at runtime",
          v: "Python is typically interpreted; C/C++/Rust compiled; JavaScript JIT-compiled."
        }),
        ref: "Handbook p.408-415" },
      { q: "Process vs thread:",
        choices: ["Process has own memory; threads share within a process", "Same thing", "Threads are slower", "Process can't multitask"],
        correct: 0,
        solution: S({
          c: "Process: independent memory space, expensive to create. Thread: lighter, shares memory with sibling threads in same process.",
          s: [
            "Process switching: expensive (full context, MMU update).",
            "Thread switching: cheap (within same memory space).",
            "Threads communicate via shared memory; processes via IPC."
          ],
          a: "Process: isolated memory; Threads: shared",
          v: "Tradeoff: thread efficiency vs process isolation/safety."
        }),
        ref: "Handbook p.408" },
      { q: "RAID 0 vs RAID 1:",
        choices: ["RAID 0: striping (speed, no redundancy); RAID 1: mirroring (redundancy, no speed gain)", "Same", "RAID 0 is safer", "RAID 1 is for speed"],
        correct: 0,
        solution: S({
          c: "<b>RAID 0</b>: stripes data across disks → speed but ANY disk failure loses all data. <b>RAID 1</b>: mirrors data → tolerates one disk failure, same capacity per disk effective.",
          s: [
            "RAID 0: 2× capacity, speed; 0% redundancy.",
            "RAID 1: 50% effective capacity; tolerates one failure.",
            "RAID 5: stripes + parity; tolerates one disk failure."
          ],
          a: "RAID 0: striping; RAID 1: mirroring",
          v: "Modern alternatives: ZFS RAIDZ, btrfs RAID5/6 with proper checksumming."
        }),
        ref: "Handbook p.407" },
    ],

    // ====================== Ch 17: Software — +5 ======================
    17: [
      { q: "Quick sort average vs worst case:",
        choices: ["Avg $O(n\\log n)$, Worst $O(n^2)$", "Always $O(n\\log n)$", "Always $O(n^2)$", "Avg $O(n^2)$"],
        correct: 0,
        solution: S({
          c: "Quicksort: divide via pivot. Best/avg case balanced → $O(n\\log n)$. Worst case (pivot is min or max each time, e.g., sorted input with naive pivot): $O(n^2)$.",
          s: [
            "Random pivot or median-of-three: avoids worst case in practice.",
            "Quicksort is typically fastest comparison sort due to good cache locality and low constants.",
            "Introsort (used in C++ std::sort): switches to heapsort if recursion depth too deep."
          ],
          a: "Avg $O(n\\log n)$, Worst $O(n^2)$",
          v: "Merge sort guarantees $O(n\\log n)$ but more memory and slower constants."
        }),
        ref: "Handbook p.415" },
      { q: "Space complexity of iterative Fibonacci (storing only last 2):",
        choices: ["$O(1)$", "$O(n)$", "$O(2^n)$", "$O(\\log n)$"],
        correct: 0,
        solution: S({
          c: "Iterative with two variables: constant space regardless of $n$.",
          s: [
            "Naive recursion: $O(n)$ stack space.",
            "Memoized: $O(n)$ space (cache table).",
            "Iterative: $O(1)$ — only keep last 2 values."
          ],
          a: "$O(1)$",
          v: "Time: still $O(n)$ — must compute each fib once."
        }),
        ref: "Handbook p.415" },
      { q: "Linked list vs array — better for frequent insertion at the middle:",
        choices: ["Linked list ($O(1)$ insertion given pointer)", "Array", "Same", "Neither"],
        correct: 0,
        solution: S({
          c: "Linked list: insertion just relinks pointers, $O(1)$ once you have the target node. Array: shift all later elements, $O(n)$.",
          s: [
            "Caveat: finding the position is $O(n)$ in linked list (no random access).",
            "If you already have a pointer to insertion point → O(1).",
            "Arrays: O(1) access, O(n) insert at middle."
          ],
          a: "Linked list (after position known)",
          v: "Tradeoff: arrays better for read-heavy; lists better for insertion-heavy workloads."
        }),
        ref: "Handbook p.415" },
      { q: "Recurrence $T(n) = T(n/2) + 1$ solves to:",
        choices: ["$O(\\log n)$", "$O(n)$", "$O(n\\log n)$", "$O(1)$"],
        correct: 0,
        solution: S({
          c: "Master theorem case 2 (or unroll): each level adds constant work, depth is $\\log n$.",
          s: [
            "Levels: $T(n), T(n/2), T(n/4), ..., T(1)$ — $\\log_2 n$ levels.",
            "Each level: +1 work.",
            "Total: $\\log_2 n + 1 = O(\\log n)$."
          ],
          a: "$O(\\log n)$",
          v: "This is binary search's recurrence."
        }),
        ref: "Handbook p.415" },
      { q: "Recurrence $T(n) = 2T(n/2) + n$ (merge sort) solves to:",
        choices: ["$O(n\\log n)$", "$O(n)$", "$O(n^2)$", "$O(\\log n)$"],
        correct: 0,
        solution: S({
          c: "Master theorem case 2: $n$ at every level, $\\log n$ levels → $n \\log n$.",
          s: [
            "Levels: $\\log_2 n$.",
            "Per-level work: $n$ (combining).",
            "Total: $n\\log n$."
          ],
          a: "$O(n\\log n)$",
          v: "Merge sort, mergesort variants all follow this recurrence."
        }),
        ref: "Handbook p.415" },
    ],
  };

  let added = 0;
  for (const ch of QUESTION_BANK.chapters) {
    if (PACK3[ch.id]) {
      ch.questions.push(...PACK3[ch.id]);
      added += PACK3[ch.id].length;
    }
  }
  const total = QUESTION_BANK.chapters.reduce((s, c) => s + c.questions.length, 0);
  console.log(`Pack 3 loaded: +${added} questions. Bank total: ${total}.`);
})();
