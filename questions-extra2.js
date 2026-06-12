// FE Electrical Question Bank — Extension Pack 2 (~150 additional problems)
// Original problems testing FE-curriculum concepts. Loaded after questions.js + extra pack 1.

(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") {
    console.warn("Pack 2 not loaded — base bank missing."); return;
  }

  const PACK2 = {
    // ====================== Ch 1: Mathematics — +12 ======================
    1: [
      { q: "Solve for $x$: $\\log_{10}(x) + \\log_{10}(x-3) = 1$.",
        choices: ["$x = 5$", "$x = 3$", "$x = 10$", "$x = 13$"],
        correct: 0,
        solution: S({
          c: "Two log tools: the product rule $\\log A + \\log B = \\log(AB)$ merges the terms, and the definition of a log unwraps it: $\\log_{10}(Y) = 1$ means $Y = 10^{1}$. One hidden duty: solutions must keep every log's argument POSITIVE.",
          s: [
            "<b>Step 1 — Merge.</b> $\\log_{10}[x(x-3)] = 1$.",
            "<b>Step 2 — Unwrap.</b> $x(x-3) = 10 \\Rightarrow x^{2} - 3x - 10 = 0$.",
            "<b>Step 3 — Factor.</b> $(x-5)(x+2) = 0 \\Rightarrow x = 5$ or $x = -2$.",
            "<b>Step 4 — Domain check (the trap).</b> $x = -2$ makes $\\log(x)$ undefined — reject. Only $x = 5$ survives."
          ],
          a: "$x = 5$",
          v: "Substitute: $\\log 5 + \\log 2 = \\log 10 = 1$ ✓. The rejected root is why distractors exist: solving the quadratic is half the problem; the domain check is the other half."

        }),
        ref: "Handbook p.36" },
      { q: "Magnitude of complex number $z = 3 - j4$:",
        choices: ["$5$", "$\\sqrt{7}$", "$1$", "$25$"],
        correct: 0,
        solution: S({
          c: "A complex number $a + jb$ is a point in the plane; its magnitude is the straight-line distance from the origin — Pythagoras: $|z| = \\sqrt{a^{2} + b^{2}}$. The SIGN of $b$ never matters (it gets squared).",
          s: [
            "<b>Step 1 — Square and add.</b> $3^{2} + (-4)^{2} = 9 + 16 = 25$.",
            "<b>Step 2 — Root.</b> $|z| = 5$ — the classic 3-4-5 triangle.",
            "<b>Step 3 — Distractor audit.</b> $\\sqrt7$ subtracts inside the root; 25 forgets the square root; 1 subtracts magnitudes."
          ],
          a: "$|z| = 5$",
          v: "Polar pairing: $z = 5\\angle(-53.13°)$ — the magnitude feeds straight into every phasor calculation, e.g. $|V|/|Z|$ in AC circuits ✓."

        }),
        ref: "Handbook p.36" },
      { q: "$\\sin(75°) \\cos(15°) - \\cos(75°)\\sin(15°)$ equals:",
        choices: ["$\\sin 60°$", "$\\cos 60°$", "$1$", "$\\sin 90°$"],
        correct: 0,
        solution: S({
          c: "Recognize the FINGERPRINT of a trig identity: the pattern $\\sin A\\cos B - \\cos A\\sin B$ is exactly the right side of $\\sin(A - B)$ — the problem is testing identity recognition, not calculator work.",
          s: [
            "<b>Step 1 — Match the pattern.</b> $A = 75°$, $B = 15°$: the expression IS $\\sin(75° - 15°)$.",
            "<b>Step 2 — Evaluate.</b> $\\sin 60° = \\sqrt3/2 \\approx 0.866$.",
            "<b>Step 3 — Distractor audit.</b> $\\cos 60° = 0.5$ comes from misremembering which identity has the minus sign (cosine-difference uses $+$: $\\cos A\\cos B + \\sin A\\sin B$); $\\sin 90° = 1$ adds the angles instead."
          ],
          a: "$\\sin 60° = \\sqrt3/2$",
          v: "Numeric confirmation: $0.966\\times0.966 - 0.259\\times0.259 = 0.933 - 0.067 = 0.866$ ✓. Sign memory hook: SINE difference keeps the minus visible; COSINE difference flips it."

        }),
        ref: "Handbook p.37" },
      { q: "Determinant of $A = \\begin{pmatrix}a&b\\\\0&d\\end{pmatrix}$ (upper triangular):",
        choices: ["$ad$", "$abd$", "$a+d$", "$0$"],
        correct: 0,
        solution: S({
          c: "For any TRIANGULAR matrix (all zeros below — or above — the diagonal), the determinant is just the PRODUCT of the diagonal entries. No cofactor grinding needed.",
          s: [
            "<b>Step 1 — Apply the 2×2 formula to see it.</b> $|A| = ad - b\\cdot0 = ad$ — the off-diagonal $b$ is multiplied by the 0 and vanishes.",
            "<b>Step 2 — Distractor audit.</b> $abd$ drags in the irrelevant $b$; $a + d$ is the TRACE (a different invariant); 0 would need a zero ON the diagonal."
          ],
          a: "$|A| = ad$",
          v: "Generalization worth banking: $n\\times n$ triangular → $|A| = \\prod a_{ii}$, and the eigenvalues ARE the diagonal entries — two facts that turn many FE matrix questions into read-offs ✓."

        }),
        ref: "Handbook p.57" },
      { q: "Find $\\frac{d}{dx}[e^{2x}\\cos(3x)]$:",
        choices: ["$e^{2x}[2\\cos 3x - 3\\sin 3x]$", "$2e^{2x}\\cos 3x$", "$-3e^{2x}\\sin 3x$", "$e^{2x}\\sin 3x$"],
        correct: 0,
        solution: S({
          c: "A PRODUCT of two functions needs the product rule $(uv)' = u'v + uv'$, and each factor here also hides a chain rule (the $2x$ and $3x$ insides).",
          s: [
            "<b>Step 1 — Differentiate each factor.</b> $u = e^{2x} \\to u' = 2e^{2x}$ (chain: ×2); $v = \\cos3x \\to v' = -3\\sin3x$ (chain: ×3, and cosine → negative sine).",
            "<b>Step 2 — Assemble.</b> $u'v + uv' = 2e^{2x}\\cos3x - 3e^{2x}\\sin3x = e^{2x}(2\\cos3x - 3\\sin3x)$.",
            "<b>Step 3 — Distractor audit.</b> The other choices each keep only ONE of the two product-rule terms — the most common slip."
          ],
          a: "$e^{2x}(2\\cos3x - 3\\sin3x)$",
          v: "Spot check at $x = 0$: formula gives $1\\cdot(2 - 0) = 2$; numerically, $[e^{0.02}\\cos0.03 - 1]/0.01 \\approx 2.0$ ✓."

        }),
        ref: "Handbook p.47" },
      { q: "$\\int x e^x \\, dx$ equals:",
        choices: ["$(x-1)e^x + C$", "$xe^x + C$", "$x^2 e^x/2 + C$", "$e^x + C$"],
        correct: 0,
        solution: S({
          c: "Integration by parts — the product rule run backwards: $\\int u\\,dv = uv - \\int v\\,du$. Choose $u$ as the factor that gets SIMPLER when differentiated (here $x$), and $dv$ as what integrates easily ($e^{x}dx$).",
          s: [
            "<b>Step 1 — Assign parts.</b> $u = x \\Rightarrow du = dx$; $dv = e^{x}dx \\Rightarrow v = e^{x}$.",
            "<b>Step 2 — Apply.</b> $\\int xe^{x}dx = xe^{x} - \\int e^{x}dx = xe^{x} - e^{x} + C$.",
            "<b>Step 3 — Factor.</b> $(x - 1)e^{x} + C$.",
            "<b>Step 4 — Distractor audit.</b> $xe^{x}$ stops after the first term; $x^{2}e^{x}/2$ wrongly treats $e^{x}$ as a constant; $e^{x}$ drops the $x$ entirely."
          ],
          a: "$(x-1)e^{x} + C$",
          v: "Differentiate back (the universal antiderivative check): $\\dfrac{d}{dx}[(x-1)e^{x}] = e^{x} + (x-1)e^{x} = xe^{x}$ ✓."

        }),
        ref: "Handbook p.49" },
      { q: "Solve $y' = 2xy$ with $y(0) = 3$.",
        choices: ["$y = 3e^{x^2}$", "$y = 3e^{2x}$", "$y = 3x^2$", "$y = 3+x^2$"],
        correct: 0,
        solution: S({
          c: "Separable ODE: all $y$'s to the left, all $x$'s to the right — $\\dfrac{dy}{y} = 2x\\,dx$ — then integrate each side independently.",
          s: [
            "<b>Step 1 — Integrate.</b> $\\ln|y| = x^{2} + C$.",
            "<b>Step 2 — Exponentiate.</b> $y = Ae^{x^{2}}$ (where $A = e^{C}$ absorbs the constant).",
            "<b>Step 3 — Initial condition.</b> $y(0) = A = 3$ → $y = 3e^{x^{2}}$.",
            "<b>Step 4 — Distractor audit.</b> $3e^{2x}$ integrates $2x\\,dx$ as if it were a constant 2 — the exponent must be $x^{2}$; $3x^{2}$ and $3 + x^{2}$ forget the exponential structure entirely."
          ],
          a: "$y = 3e^{x^{2}}$",
          v: "Substitute back: $y' = 3e^{x^{2}}\\cdot2x$ and $2xy = 2x\\cdot3e^{x^{2}}$ — identical ✓; and $y(0) = 3$ ✓."

        }),
        ref: "Handbook p.55" },
      { q: "$\\nabla \\cdot \\vec{F}$ for $\\vec{F} = x^2\\hat{i} + xy\\hat{j} + z\\hat{k}$:",
        choices: ["$2x + x + 1$", "$x^2 + xy + z$", "$3x$", "$2$"],
        correct: 0,
        solution: S({
          c: "Divergence measures net OUTFLOW per unit volume — a SCALAR built by differentiating each component with respect to ITS OWN variable: $\\nabla\\cdot\\vec F = \\partial_xF_x + \\partial_yF_y + \\partial_zF_z$.",
          s: [
            "<b>Step 1 — Component derivatives.</b> $\\partial_x(x^{2}) = 2x$; $\\partial_y(xy) = x$; $\\partial_z(z) = 1$.",
            "<b>Step 2 — Sum.</b> $2x + x + 1 = 3x + 1$ — choice A lists the unsummed form of exactly this.",
            "<b>Step 3 — Distractor audit.</b> '$x^{2}+xy+z$' just re-adds the components (no derivatives); $3x$ drops the constant; 2 keeps only one term."
          ],
          a: "$\\nabla\\cdot\\vec F = 2x + x + 1 = 3x + 1$",
          v: "Type check (catches half of all vector-calc errors): divergence of a VECTOR field is a SCALAR; curl is a VECTOR ✓. Physical read: at points where $3x+1 > 0$ the field acts as a net source."

        }),
        ref: "Handbook p.38" },
      { q: "$\\nabla \\times \\vec{F}$ at origin for $\\vec{F} = y\\hat{i} - x\\hat{j}$:",
        choices: ["$-2\\hat{k}$", "$2\\hat{k}$", "$0$", "$\\hat{i}+\\hat{j}$"],
        correct: 0,
        solution: S({
          c: "Curl measures local ROTATION — a vector computed from the determinant pattern. For a 2-D field ($F_z = 0$, no $z$-dependence), only the $\\hat k$ component survives: $(\\nabla\\times\\vec F)_z = \\partial_xF_y - \\partial_yF_x$.",
          s: [
            "<b>Step 1 — The two partials.</b> $\\partial_x(-x) = -1$; $\\partial_y(y) = 1$.",
            "<b>Step 2 — Subtract.</b> $-1 - 1 = -2$ → curl $= -2\\hat k$ (everywhere, including the origin).",
            "<b>Step 3 — Distractor audit.</b> $+2\\hat k$ subtracts in the wrong order; 0 would mean an irrotational field — but this one visibly swirls."
          ],
          a: "$-2\\hat k$",
          v: "Picture check: $\\vec F = y\\hat i - x\\hat j$ at point (1,0) points in $-\\hat j$… tracing a few arrows shows CLOCKWISE rotation, and by the right-hand rule clockwise = curl INTO the page = $-\\hat k$ ✓."

        }),
        ref: "Handbook p.38" },
      { q: "$\\binom{8}{3}$ = ",
        choices: ["$56$", "$28$", "$112$", "$336$"],
        correct: 0,
        solution: S({
          c: "The binomial coefficient $\\binom{n}{k}$ counts ways to CHOOSE $k$ items from $n$ (order irrelevant): $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$ — in practice, $k$ descending factors over $k!$.",
          s: [
            "<b>Step 1 — Shortcut form.</b> $\\binom{8}{3} = \\dfrac{8\\times7\\times6}{3\\times2\\times1} = \\dfrac{336}{6} = 56$.",
            "<b>Step 2 — Distractor audit.</b> 336 is the PERMUTATION count $P(8,3)$ (forgot to divide by $3!$); 28 is $\\binom{8}{2}$; 112 doubles."
          ],
          a: "$\\binom{8}{3} = 56$",
          v: "Two cross-checks: symmetry $\\binom{8}{3} = \\binom{8}{5} = 56$ ✓, and Pascal's row 8 reads 1, 8, 28, 56, 70, … ✓."

        }),
        ref: "Handbook p.64" },
      { q: "$\\lim_{x\\to\\infty} \\dfrac{3x^2 + 5x}{x^2 - 1}$:",
        choices: ["$3$", "$0$", "$\\infty$", "$-5$"],
        correct: 0,
        solution: S({
          c: "Limits of rational functions at infinity are decided by the HIGHEST powers — everything else fades. Equal degrees top and bottom → the limit is the ratio of leading coefficients.",
          s: [
            "<b>Step 1 — Compare degrees.</b> Numerator degree 2, denominator degree 2 — equal.",
            "<b>Step 2 — Ratio of leaders.</b> $3/1 = 3$.",
            "<b>Step 3 — Distractor audit.</b> 0 would need a BIGGER denominator degree; $\\infty$ a bigger numerator; −5 plucks a lower-order coefficient."
          ],
          a: "$3$",
          v: "Rigorous route (same answer): divide everything by $x^{2}$ → $\\dfrac{3 + 5/x}{1 - 1/x^{2}} \\to \\dfrac{3+0}{1-0} = 3$ ✓. The three-case rule: deg top < bottom → 0; equal → coefficient ratio; greater → ±∞."

        }),
        ref: "Handbook p.47" },
      { q: "Convert $250°$ to radians.",
        choices: ["$\\approx 4.36$ rad", "$\\approx 2.18$ rad", "$\\approx 8.72$ rad", "$\\approx 1.39$ rad"],
        correct: 0,
        solution: S({
          c: "Degrees and radians measure the same angle in different units: a full circle is $360° = 2\\pi$ rad, so the conversion factor is $\\pi/180$ per degree.",
          s: [
            "<b>Step 1 — Multiply.</b> $250 \\times \\pi/180 = 250 \\times 0.017453 = 4.363$ rad.",
            "<b>Step 2 — Distractor audit.</b> 2.18 halves (factor $\\pi/360$); 8.72 doubles; 1.39 divides by 180 without the $\\pi$."
          ],
          a: "$\\approx 4.36$ rad",
          v: "Proportion check: $250°$ is $250/360 = 69.4\\%$ of a circle, and $4.36/6.283 = 69.4\\%$ of $2\\pi$ ✓. Anchors to carry: $90° = \\pi/2 \\approx 1.571$, $180° = \\pi$, $360° = 2\\pi \\approx 6.283$."

        }),
        ref: "Handbook p.37" },
    ],

    // ====================== Ch 2: Probability — +8 ======================
    2: [
      { q: "Mean of {2, 4, 4, 6, 8, 10}:",
        choices: ["$5.67$", "$6.0$", "$4.5$", "$5.0$"],
        correct: 0,
        solution: S({
          c: "The mean (average) is total ÷ count: $\\bar x = \\sum x_i/n$ — the balance point of the data.",
          s: [
            "<b>Step 1 — Sum.</b> $2+4+4+6+8+10 = 34$.",
            "<b>Step 2 — Divide by n = 6.</b> $\\bar x = 34/6 = 5.667$.",
            "<b>Step 3 — Distractor audit.</b> 6.0 miscounts the sum; 5.0 is the MEDIAN ($(4+6)/2$); 4.5 is a partial average."
          ],
          a: "$\\bar x \\approx 5.67$",
          v: "Family portrait of this dataset: mean 5.67, median 5, mode 4 — mean sits highest because the 10 drags it up; skewed data pulls the mean toward the tail, a favorite FE concept ✓."

        }),
        ref: "Handbook p.63" },
      { q: "If $P(A) = 0.4$, $P(B) = 0.5$, $P(A \\cap B) = 0.2$. Are A, B independent?",
        choices: ["Yes — $P(A)P(B) = P(A \\cap B)$", "No", "Cannot tell", "Yes — $P(A)+P(B)=1$"],
        correct: 0,
        solution: S({
          c: "Independence has a precise TEST, not a vibe: events A and B are independent if and only if $P(A\\cap B) = P(A)\\,P(B)$ — knowing one happened changes nothing about the other.",
          s: [
            "<b>Step 1 — Compute the product.</b> $P(A)P(B) = 0.4\\times0.5 = 0.20$.",
            "<b>Step 2 — Compare with the joint.</b> $P(A\\cap B) = 0.20$ — equal → independent.",
            "<b>Step 3 — Distractor audit.</b> '$P(A)+P(B) = 1$' is not any independence criterion (sums relate to unions, and only with more work); 'cannot tell' ignores that we have all three numbers."
          ],
          a: "Yes — independent, because $P(A\\cap B) = P(A)P(B)$.",
          v: "Equivalent check through conditioning: $P(A|B) = 0.2/0.5 = 0.4 = P(A)$ — learning B occurred leaves A's probability untouched ✓. Don't confuse independent with mutually exclusive: EXCLUSIVE events ($P(A\\cap B) = 0$) are maximally DEpendent."

        }),
        ref: "Handbook p.64" },
      { q: "5 cards drawn from a deck. P(all hearts)?",
        choices: ["$\\binom{13}{5}/\\binom{52}{5} \\approx 0.0005$", "$13/52$", "$(1/4)^5$", "$5/52$"],
        correct: 0,
        solution: S({
          c: "Drawing WITHOUT replacement from a finite deck is hypergeometric counting: $P = \\dfrac{\\text{favorable selections}}{\\text{total selections}} = \\dfrac{\\binom{13}{5}}{\\binom{52}{5}}$.",
          s: [
            "<b>Step 1 — Favorable.</b> Choose 5 of the 13 hearts: $\\binom{13}{5} = 1287$.",
            "<b>Step 2 — Total.</b> $\\binom{52}{5} = 2{,}598{,}960$.",
            "<b>Step 3 — Divide.</b> $1287/2{,}598{,}960 \\approx 0.000495 \\approx 0.05\\%$.",
            "<b>Step 4 — Distractor audit.</b> $(1/4)^{5} \\approx 0.098\\%$ is the WITH-replacement approximation (close but wrong model); $13/52$ is one card's probability; $5/52$ is numerology."
          ],
          a: "$\\approx 0.05\\%$ — about 1 in 2,000.",
          v: "Sequential cross-check: $\\dfrac{13}{52}\\cdot\\dfrac{12}{51}\\cdot\\dfrac{11}{50}\\cdot\\dfrac{10}{49}\\cdot\\dfrac{9}{48} = 0.000495$ ✓ — the multiplication chain and the combination ratio are the same computation in two costumes."

        }),
        ref: "Handbook p.64-65" },
      { q: "A normal distribution with $\\mu = 100$, $\\sigma = 15$. P(X between 85 and 115)?",
        choices: ["$\\approx 68\\%$", "$\\approx 95\\%$", "$\\approx 99\\%$", "$50\\%$"],
        correct: 0,
        solution: S({
          c: "The empirical (68-95-99.7) rule for normal distributions: about 68% of outcomes fall within ±1σ of the mean, 95% within ±2σ, 99.7% within ±3σ — worth instant recall on the FE.",
          s: [
            "<b>Step 1 — Express the range in σ units.</b> $85 = 100 - 15 = \\mu - \\sigma$; $115 = \\mu + \\sigma$ — exactly ±1σ.",
            "<b>Step 2 — Apply the rule.</b> $P \\approx 68\\%$.",
            "<b>Step 3 — Distractor audit.</b> 95% belongs to ±2σ (70-130 here); 99% ≈ ±2.6σ; 50% is just 'above/below the mean'."
          ],
          a: "$\\approx 68\\%$",
          v: "Exact value: $P(|Z| < 1) = 0.6827$ ✓. These are IQ-test numbers ($\\mu = 100$, $\\sigma = 15$) — so roughly two-thirds of people score 85-115, a handy reality anchor for the rule."

        }),
        ref: "Handbook p.67" },
      { q: "10 coins flipped. Probability of exactly 5 heads?",
        choices: ["$\\binom{10}{5}/2^{10} \\approx 24.6\\%$", "$50\\%$", "$5\\%$", "$1/2^{10}$"],
        correct: 0,
        solution: S({
          c: "Counting heads in fair coin flips is binomial: $P(k) = \\binom{n}{k}p^{k}(1-p)^{n-k}$. For $p = \\tfrac12$ this simplifies beautifully: every specific sequence has probability $1/2^{n}$, so $P(k) = \\binom{n}{k}/2^{n}$.",
          s: [
            "<b>Step 1 — Count the favorable sequences.</b> $\\binom{10}{5} = 252$ ways to place 5 heads among 10 flips.",
            "<b>Step 2 — Divide by all sequences.</b> $2^{10} = 1024$ → $P = 252/1024 \\approx 24.6\\%$.",
            "<b>Step 3 — The intuition correction.</b> 'Exactly half heads' feels like it should be 50% — but 50% is the EXPECTED FRACTION, not the probability of hitting it exactly; outcomes spread over 4, 5, 6… heads."
          ],
          a: "$\\approx 24.6\\%$",
          v: "Neighbor check: $P(4) = P(6) = 210/1024 \\approx 20.5\\%$ each — the distribution peaks at 5 but only gently ✓. Scaling insight: for $2n$ flips, $P(\\text{exactly }n) \\approx 1/\\sqrt{\\pi n}$ — it SHRINKS as the experiment grows."

        }),
        ref: "Handbook p.66" },
      { q: "Median of {12, 7, 9, 15, 10, 8, 11}:",
        choices: ["$10$", "$9$", "$11$", "$10.29$"],
        correct: 0,
        solution: S({
          c: "The median is the middle value of the SORTED data — half the observations below, half above. With an odd count, it's the single center value; with an even count, average the two middles.",
          s: [
            "<b>Step 1 — Sort.</b> 7, 8, 9, 10, 11, 12, 15.",
            "<b>Step 2 — Locate the middle.</b> $n = 7$ → the 4th value → 10.",
            "<b>Step 3 — Distractor audit.</b> 10.29 is the MEAN ($72/7$); 9 and 11 are the neighbors of the true middle."
          ],
          a: "Median $= 10$",
          v: "Why both statistics exist: the 15 pulls the mean up to 10.29 but cannot budge the median — the median resists outliers (why income statistics quote medians) ✓."

        }),
        ref: "Handbook p.63" },
      { q: "If sample size doubles from 100 to 400, the standard error of the sample mean:",
        choices: ["Halves", "Doubles", "Stays same", "Quadruples"],
        correct: 0,
        solution: S({
          c: "The standard error of a sample mean — how much $\\bar x$ wobbles between samples — shrinks with the SQUARE ROOT of sample size: $SE = \\sigma/\\sqrt n$. (Careful reading: the question quadruples $n$ from 100 to 400.)",
          s: [
            "<b>Step 1 — Before.</b> $SE_{100} = \\sigma/\\sqrt{100} = \\sigma/10$.",
            "<b>Step 2 — After.</b> $SE_{400} = \\sigma/\\sqrt{400} = \\sigma/20$.",
            "<b>Step 3 — Compare.</b> $\\sigma/20$ is HALF of $\\sigma/10$ → SE halves.",
            "<b>Step 4 — Distractor audit.</b> 'Doubles' inverts; 'stays same' ignores $n$; 'quadruples' applies the change to the wrong side."
          ],
          a: "Halves.",
          v: "The diminishing-returns law of statistics: halving uncertainty costs 4× the data; cutting it to a tenth costs 100× ✓ — exactly why polls stop near $n \\approx 1000$ (±3%) instead of paying for millions."

        }),
        ref: "Handbook p.69" },
      { q: "A drug claims 80% effectiveness. In 200 patients, expected number cured + std deviation:",
        choices: ["$\\mu=160$, $\\sigma\\approx 5.66$", "$\\mu=80$, $\\sigma=20$", "$\\mu=160$, $\\sigma=40$", "$\\mu=200$, $\\sigma=8$"],
        correct: 0,
        solution: S({
          c: "A yes/no outcome repeated $n$ times is binomial, with two formulas to recall together: mean $\\mu = np$, standard deviation $\\sigma = \\sqrt{np(1-p)}$ — note the $(1-p)$ inside the root.",
          s: [
            "<b>Step 1 — Mean.</b> $\\mu = 200\\times0.8 = 160$ cured.",
            "<b>Step 2 — Standard deviation.</b> $\\sigma = \\sqrt{200\\times0.8\\times0.2} = \\sqrt{32} \\approx 5.66$.",
            "<b>Step 3 — Distractor audit.</b> $\\sigma = 40$ uses $np(1-p)$ WITHOUT the square root... ($32$, not $40$ — it garbles further); $\\mu = 80$ halves; $\\mu = 200$ forgets $p$."
          ],
          a: "$\\mu = 160$, $\\sigma \\approx 5.66$",
          v: "Useful read-out: ~95% of trials should cure $160 \\pm 2(5.66) \\approx 149$-171 patients — observing, say, 130 cures would be strong evidence AGAINST the 80% claim ✓ (this mean±2σ reasoning is the backbone of hypothesis testing)."

        }),
        ref: "Handbook p.66" },
    ],

    // ====================== Ch 3: Ethics — +3 ======================
    3: [
      { q: "An engineer is offered a bonus by a contractor in exchange for specifying their product. Most ethical response:",
        choices: ["Refuse — accepting bonus violates faithful agent duty", "Accept but disclose to client", "Accept if product is good", "Negotiate higher bonus"],
        correct: 0,
        solution: S({
          c: "Engineers act as FAITHFUL AGENTS of their clients: recommendations must serve the client's interest only. A vendor's bonus-for-specification ties the engineer's personal gain to the choice — a conflict of interest that corrupts (or appears to corrupt) the judgment the client is paying for.",
          s: [
            "<b>Step 1 — Name the transaction.</b> Money in exchange for specifying a product = a kickback, whatever it is labeled.",
            "<b>Step 2 — Apply the rule.</b> Refuse outright — the only action leaving zero bias and zero appearance of bias.",
            "<b>Step 3 — Distractor audit.</b> 'Accept but disclose' still leaves the engineer paid by two masters; 'if the product is good' — the bonus makes that very judgment untrustworthy; negotiating a bigger kickback compounds the violation."
          ],
          a: "Refuse the bonus.",
          v: "Litmus test that resolves every gift question: would the client, knowing everything, still trust the recommendation? Practical norms agree — most firms cap vendor courtesies at trivial value (a coffee, a pen) and many at zero ✓."

        }),
        ref: "Handbook p.4" },
      { q: "An engineer's signature/seal on a document indicates:",
        choices: ["Personal responsibility for the work", "Approval by employer", "Just authentication of identity", "Optional courtesy"],
        correct: 0,
        solution: S({
          c: "The seal is the licensure system's accountability anchor: it asserts that the named, licensed individual prepared the work or supervised it in RESPONSIBLE CHARGE — and personally answers for its technical adequacy.",
          s: [
            "<b>Step 1 — What it claims.</b> 'I am professionally responsible for this document' — to the client, the public, and the licensing board.",
            "<b>Step 2 — What it is NOT.</b> Not an employer's corporate sign-off (liability is personal and follows the engineer between jobs); not mere identity authentication (that's what a notary does); never optional on public-safety documents — permits require it by law.",
            "<b>Step 3 — Practical consequence.</b> Boards discipline the SEALING engineer for deficient work regardless of who actually drafted it."
          ],
          a: "Personal responsibility for the work.",
          v: "This is the entire logic of licensure: the public cannot evaluate engineering quality, so the state pins accountability to one identifiable, licensed person — which is also why sealing unreviewed work ('plan stamping') is treated as fraud ✓."

        }),
        ref: "Handbook p.5" },
      { q: "Public welfare obligation vs. employer confidentiality — which prevails?",
        choices: ["Public welfare", "Confidentiality", "Whichever has stronger contract clause", "Always negotiate"],
        correct: 0,
        solution: S({
          c: "The first canon — hold paramount the safety, health, and welfare of the public — outranks every other duty, including confidentiality owed to an employer. No contract clause can buy exemption from it.",
          s: [
            "<b>Step 1 — Apply the hierarchy.</b> PUBLIC > client/employer > self. When secrecy would conceal a public hazard, secrecy loses.",
            "<b>Step 2 — How to act on it.</b> Raise internally first; escalate to the responsible authority if unaddressed — ordered escalation, documented in writing.",
            "<b>Step 3 — Distractor audit.</b> 'Stronger contract clause' — private contracts cannot override professional law; 'always negotiate' treats a safety duty as a bargaining chip."
          ],
          a: "Public welfare prevails.",
          v: "The Challenger case anchors this canon: engineer Roger Boisjoly documented the O-ring danger and escalated; management overrode him — the disaster that followed reshaped engineering-ethics teaching and whistleblower protections ✓."

        }),
        ref: "Handbook p.4-5" },
    ],

    // ====================== Ch 4: Economics — +5 ======================
    4: [
      { q: "$10{,}000 invested for 30 years at 6% annual compounded. Future value:",
        choices: ["$\\approx \\$57{,}435$", "$\\$28{,}000$", "$\\$100{,}000$", "$\\$60{,}000$"],
        correct: 0,
        solution: S({
          c: "Compound interest grows a lump sum geometrically: $F = P(1+i)^{n}$ — each year multiplies by $(1+i)$, and over decades the multiplication dominates.",
          s: [
            "<b>Step 1 — Growth factor.</b> $(1.06)^{30} = 5.7435$.",
            "<b>Step 2 — Scale.</b> $F = 10{,}000 \\times 5.7435 = \\$57{,}435$.",
            "<b>Step 3 — Distractor audit.</b> \\$28,000 is SIMPLE interest ($10{,}000(1 + 0.06\\times30)$) — the planted contrast; \\$60,000 and \\$100,000 are round-number guesses."
          ],
          a: "$F \\approx \\$57{,}435$",
          v: "Rule-of-72 check: at 6%, money doubles every ~12 years → 30 years = 2.5 doublings → $2^{2.5} \\approx 5.7\\times$ ✓ — exactly the factor computed. The \\$29k gap between simple and compound IS the 'interest on interest'."

        }),
        ref: "Handbook p.230" },
      { q: "Present worth of $\\$5000$ received 8 years from now at 5%:",
        choices: ["$\\approx \\$3{,}385$", "$\\$3{,}000$", "$\\$4{,}500$", "$\\$5{,}500$"],
        correct: 0,
        solution: S({
          c: "Discounting runs compound growth backwards: a future amount is worth less today because today's money could grow at $i$: $P = F/(1+i)^{n}$.",
          s: [
            "<b>Step 1 — Growth factor.</b> $(1.05)^{8} = 1.4775$.",
            "<b>Step 2 — Divide.</b> $P = 5000/1.4775 = \\$3{,}385$.",
            "<b>Step 3 — Distractor audit.</b> \\$4,500 under-discounts (≈2 years' worth); \\$3,000 over-rounds; \\$5,500 goes the WRONG DIRECTION (that's a future value)."
          ],
          a: "$P \\approx \\$3{,}385$",
          v: "Round trip: $3385\\times(1.05)^{8} = 3385\\times1.4775 = \\$5{,}001$ ✓. Sense check: ~5% for 8 years should shave roughly a third off — and $3385/5000 = 68\\%$ ✓."

        }),
        ref: "Handbook p.230" },
      { q: "Annual maintenance $\\$500$/yr forever (perpetuity) at $i=8\\%$. Present worth:",
        choices: ["$\\$6{,}250$", "$\\$500$", "$\\$8{,}000$", "$\\$10{,}000$"],
        correct: 0,
        solution: S({
          c: "A perpetuity — equal payments FOREVER — has a finite present worth because distant payments discount toward zero. The formula collapses beautifully: $P = A/i$ (the fund whose interest alone pays $A$ each year).",
          s: [
            "<b>Step 1 — Divide.</b> $P = 500/0.08 = \\$6{,}250$.",
            "<b>Step 2 — Why it works.</b> \\$6,250 at 8% earns exactly \\$500/yr — pay it out and the principal survives untouched, forever.",
            "<b>Step 3 — Distractor audit.</b> \\$500 confuses one payment with the fund; \\$8,000 and \\$10,000 misuse the 8%."
          ],
          a: "$P = \\$6{,}250$",
          v: "Convergence intuition: the payments sum to infinity NOMINALLY, but $\\sum 500/(1.08)^{n}$ is a geometric series with ratio < 1 — finite ✓. This $A/i$ building block is the engine of capitalized-cost problems for long-lived public works."

        }),
        ref: "Handbook p.231" },
      { q: "Loan $\\$50k$ at $i=4\\%$ monthly compounded over 5 years. Monthly payment:",
        choices: ["$\\approx \\$921$", "$\\$833$", "$\\$1041$", "$\\$700$"],
        correct: 0,
        solution: S({
          c: "A loan payment is the capital-recovery factor in action: $A = P\\cdot\\dfrac{i(1+i)^{n}}{(1+i)^{n}-1}$ — and for monthly payments BOTH the rate and the period count must be monthly: $i = 0.04/12$, $n = 60$.",
          s: [
            "<b>Step 1 — Monthly parameters.</b> $i = 0.003333$/mo; $n = 60$ payments.",
            "<b>Step 2 — Growth factor.</b> $(1.003333)^{60} = 1.2210$.",
            "<b>Step 3 — Capital-recovery factor.</b> $\\dfrac{0.003333\\times1.2210}{0.2210} = 0.01842$.",
            "<b>Step 4 — Payment.</b> $A = 50{,}000\\times0.01842 = \\$921$/month.",
            "<b>Step 5 — Distractor audit.</b> \\$833 is $50{,}000/60$ — zero-interest amortization; \\$1041 ≈ uses 4% PER MONTH territory errors; \\$700 has no route."
          ],
          a: "$\\approx \\$921$ per month.",
          v: "Total-cost read: $60\\times921 = \\$55{,}260$ → \\$5,260 of interest on \\$50k over 5 years at 4% — plausible (roughly 'average balance \\$26k × 4% × 5yr ≈ \\$5.2k') ✓. The annual↔monthly rate conversion is where most loan-problem points are lost."

        }),
        ref: "Handbook p.232" },
      { q: "ROR for $\\$1000$ now to $\\$2000$ in 6 years:",
        choices: ["$\\approx 12.2\\%$", "$10\\%$", "$\\approx 16.7\\%$", "$33.3\\%$"],
        correct: 0,
        solution: S({
          c: "Rate of return for a single doubling: solve $F = P(1+i)^{n}$ for the rate — $i = (F/P)^{1/n} - 1$, the geometric average growth per year.",
          s: [
            "<b>Step 1 — Ratio.</b> $F/P = 2$.",
            "<b>Step 2 — Sixth root.</b> $2^{1/6} = 1.1225$.",
            "<b>Step 3 — Rate.</b> $i = 12.25\\%$.",
            "<b>Step 4 — Distractor audit.</b> $16.7\\% = 100\\%/6$ is the SIMPLE-interest answer (linear thinking); $33.3\\%$ has no route; 10% under-shoots (would take 7.3 years to double)."
          ],
          a: "$i \\approx 12.25\\%$",
          v: "Rule-of-72 confirmation: $72/12.25 = 5.9$ years to double ≈ the stated 6 ✓. The compound-vs-simple gap (12.25% vs 16.7%) is exactly what the distractors test."

        }),
        ref: "Handbook p.230" },
    ],

    // ====================== Ch 5: Materials — +4 ======================
    5: [
      { q: "Holes have ____ mobility than electrons in silicon.",
        choices: ["Lower", "Higher", "Same", "Zero"],
        correct: 0,
        solution: S({
          c: "Mobility ($\\mu$) measures how fast a charge carrier drifts per unit electric field. In silicon, ELECTRONS move freely through the conduction band, but HOLES 'move' only as neighboring valence electrons hop into the vacancy — an inherently clumsier process.",
          s: [
            "<b>Step 1 — The benchmark numbers.</b> Si at 300 K: $\\mu_n \\approx 1350$ cm²/V·s, $\\mu_p \\approx 480$ cm²/V·s.",
            "<b>Step 2 — Compare.</b> $\\mu_n/\\mu_p \\approx 2.8$ — holes are roughly 3× SLOWER.",
            "<b>Step 3 — Distractor audit.</b> 'Higher' inverts the physics; 'same' ignores the different conduction mechanisms; 'zero' would mean p-type silicon can't conduct at all."
          ],
          a: "Lower — about 3× lower than electron mobility.",
          v: "Design consequence you can verify on any CMOS datasheet: pMOS transistors are made ~2-3× WIDER than nMOS to deliver equal current — directly compensating this mobility gap ✓."

        }),
        ref: "Handbook p.354" },
      { q: "Aluminum vs copper conductors of same dimensions: aluminum has ___ resistance.",
        choices: ["Higher (about 1.6×)", "Lower", "Same", "Zero"],
        correct: 0,
        solution: S({
          c: "With identical geometry, resistance is proportional to the material's resistivity: $R = \\rho L/A$. Copper: $\\rho = 1.72\\times10^{-8}$ Ω·m; aluminum: $\\rho \\approx 2.82\\times10^{-8}$ Ω·m.",
          s: [
            "<b>Step 1 — Take the ratio.</b> $2.82/1.72 \\approx 1.64$ — aluminum has ~1.6× the resistance, same dimensions.",
            "<b>Step 2 — Distractor audit.</b> 'Lower' inverts the materials; 'same' ignores resistivity; 'zero' is superconductor fantasy.",
            "<b>Step 3 — Why aluminum still wins overhead.</b> It is ~3.3× lighter per volume — per unit of CONDUCTANCE, aluminum weighs about half of copper, which decides transmission-line economics."
          ],
          a: "Higher — about 1.6×.",
          v: "Practical rule that follows: to carry the same current, aluminum wire is sized ~2 gauge numbers larger than copper ✓. Buildings stay copper (compact, better terminations); long spans go aluminum (weight, cost)."

        }),
        ref: "Handbook p.354" },
      { q: "Diffusion current density driven by concentration gradient ($n$ varies in $x$):",
        choices: ["$J = qD_n\\,dn/dx$", "$J = q n\\mu E$", "$J = -q\\sigma$", "$J = 0$"],
        correct: 0,
        solution: S({
          c: "Semiconductors carry current TWO ways: DRIFT (charges pushed by an electric field, $J = qn\\mu E$) and DIFFUSION (charges spreading from crowded regions to empty ones — no field needed). Diffusion follows Fick's law: $J_n = qD_n\\,dn/dx$ for electrons.",
          s: [
            "<b>Step 1 — Match the mechanism to the question.</b> 'Driven by concentration gradient' = diffusion → $J = qD_n\\,dn/dx$.",
            "<b>Step 2 — Decode the symbols.</b> $D_n$ = diffusion coefficient (cm²/s); $dn/dx$ = how steeply the carrier density varies; sign for holes flips ($J_p = -qD_p\\,dp/dx$) because their charge is positive.",
            "<b>Step 3 — Distractor audit.</b> $qn\\mu E$ is DRIFT — field-driven, the other mechanism; the rest are not current expressions."
          ],
          a: "$J = qD_n\\,dn/dx$ — Fick's law of diffusion.",
          v: "The Einstein relation ties the two mechanisms together: $D = \\mu V_T$ ($V_T \\approx 26$ mV at 300 K) — so $D_n \\approx 1350\\times0.026 \\approx 35$ cm²/s ✓. In a pn junction at equilibrium, diffusion and drift currents exactly cancel — that balance builds the depletion region."

        }),
        ref: "Handbook p.354" },
      { q: "Insulator breakdown strength of air is approximately:",
        choices: ["$3$ kV/mm", "$0.3$ kV/mm", "$30$ kV/mm", "$300$ kV/mm"],
        correct: 0,
        solution: S({
          c: "Dielectric strength = the maximum field an insulator withstands before it ionizes and arcs. For air at standard conditions: ≈3 kV/mm (same number as 3 MV/m or 30 kV/cm — unit juggling is the whole question).",
          s: [
            "<b>Step 1 — Recall the benchmark.</b> Air ≈ 3 kV/mm.",
            "<b>Step 2 — Distractor audit.</b> 0.3, 30, 300 kV/mm are decade shifts; 30 kV/mm is roughly SF₆-class gas, far beyond air.",
            "<b>Step 3 — Use it.</b> A 10-mm air gap holds off ≈30 kV — the arithmetic behind clearance tables in switchgear and busbar design."
          ],
          a: "≈ 3 kV/mm.",
          v: "Comparative ladder: air 3, transformer oil 12-15, SF₆ ~9 (at 1 bar; better when pressurized), mylar ~280 kV/mm — engineered insulation exists precisely because air is the weakest common dielectric ✓."

        }),
        ref: "Handbook p.354" },
    ],

    // ====================== Ch 6: Circuits — +15 ======================
    6: [
      { q: "Two batteries (10V, 6V) in series-aiding with internal resistances 1Ω and 2Ω respectively, feeding a 7Ω load. Current?",
        choices: ["$1.6$ A", "$2$ A", "$1.0$ A", "$0.8$ A"],
        correct: 0,
        solution: S({
          c: "'Series-aiding' means the EMFs push current the SAME way, so they add; every resistance in the single loop — including each battery's INTERNAL resistance — adds too. Then plain Ohm's law.",
          s: [
            "<b>Step 1 — Total EMF.</b> $10 + 6 = 16$ V.",
            "<b>Step 2 — Total resistance.</b> $1 + 2 + 7 = 10\\,\\Omega$ (internal resistances are in the loop whether you like it or not).",
            "<b>Step 3 — Current.</b> $I = 16/10 = 1.6$ A.",
            "<b>Step 4 — Distractor audit.</b> 2 A forgets the internal resistances ($16/8$... actually $16/7 = 2.3$ — variants of dropping them); 1.0 and 0.8 A halve things arbitrarily."
          ],
          a: "$I = 1.6$ A",
          v: "Voltage bookkeeping: drops are $1.6, 3.2, 11.2$ V across 1, 2, 7 Ω — summing to 16 V ✓. Contrast: series-OPPOSING would net $10 - 6 = 4$ V → 0.4 A — the wiring direction matters as much as the values."

        }),
        ref: "Handbook p.356" },
      { q: "Wheatstone bridge: $R_1=100$, $R_2=200$, $R_3=300$. For balance, $R_4$ = ?",
        choices: ["$600\\ \\Omega$", "$150\\ \\Omega$", "$200\\ \\Omega$", "$66.7\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "A Wheatstone bridge is two voltage dividers side by side; it is BALANCED when both dividers split the source identically, so no current crosses the middle. Balance condition: $\\dfrac{R_1}{R_2} = \\dfrac{R_3}{R_4}$.",
          s: [
            "<b>Step 1 — Solve for the unknown.</b> $R_4 = \\dfrac{R_2R_3}{R_1} = \\dfrac{200\\times300}{100} = 600\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 150 Ω inverts the ratio ($R_1R_3/R_2$); 66.7 Ω inverts twice; 200 Ω just copies $R_2$.",
            "<b>Step 3 — Check the balance.</b> $R_1/R_2 = 0.5$ and $R_3/R_4 = 300/600 = 0.5$ ✓ — both dividers at the same fraction."
          ],
          a: "$R_4 = 600\\,\\Omega$",
          v: "Why this circuit is everywhere: at balance the detector reads exactly zero, so tiny resistance changes (strain gauges, RTDs) unbalance it measurably — precision measurement by NULL rather than by meter accuracy ✓."

        }),
        ref: "Handbook p.357" },
      { q: "An ideal current source (5 A) drives parallel resistors 4Ω and 6Ω. Current through 4Ω resistor:",
        choices: ["$3$ A", "$2$ A", "$5$ A", "$0.5$ A"],
        correct: 0,
        solution: S({
          c: "The current divider: parallel resistors share a fixed total current in INVERSE proportion to their resistance — more current takes the easier path. Two-resistor form: $I_1 = I_{total}\\cdot\\dfrac{R_2}{R_1+R_2}$ (note: the OTHER resistor on top).",
          s: [
            "<b>Step 1 — Apply.</b> $I_{4\\Omega} = 5\\times\\dfrac{6}{4+6} = 5\\times0.6 = 3$ A.",
            "<b>Step 2 — Sanity of direction.</b> The smaller resistor (4 Ω) carries the LARGER share (3 of 5 A) ✓.",
            "<b>Step 3 — Distractor audit.</b> 2 A is the 6-Ω branch (used the same-resistor numerator — the classic flip); 5 A puts everything in one branch; 0.5 A misapplies Ohm's law."
          ],
          a: "$I_{4\\Omega} = 3$ A",
          v: "KCL closure: $I_{6\\Omega} = 5\\times0.4 = 2$ A and $3 + 2 = 5$ A ✓. Voltage cross-check: both branches see $V = 3\\times4 = 2\\times6 = 12$ V — equal, as parallel demands ✓."

        }),
        ref: "Handbook p.356" },
      { q: "Find equivalent resistance of three 6Ω resistors: two in parallel, the result in series with the third.",
        choices: ["$9\\ \\Omega$", "$12\\ \\Omega$", "$2\\ \\Omega$", "$18\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Mixed networks reduce in stages: collapse the innermost parallel/series group, redraw, repeat. Two equal resistors in parallel halve: $R\\|R = R/2$.",
          s: [
            "<b>Step 1 — The parallel pair.</b> $6\\|6 = 3\\,\\Omega$.",
            "<b>Step 2 — Series with the third.</b> $3 + 6 = 9\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 18 Ω treats all three as series; 2 Ω treats all three as parallel ($6/3$); 12 Ω adds two and ignores one."
          ],
          a: "$R_{eq} = 9\\,\\Omega$",
          v: "Bounds check: the answer must land between the all-parallel extreme (2 Ω) and the all-series extreme (18 Ω) — 9 Ω does ✓. The halving shortcut ($N$ equal resistors in parallel = $R/N$) saves time on every FE resistor network."

        }),
        ref: "Handbook p.356" },
      { q: "$Z = 20\\angle -60°$ Ω at 120 V RMS. Apparent, real, reactive power:",
        choices: ["$|S|=720$, $P=360$, $Q=-624$", "$|S|=720$, $P=360$, $Q=624$", "$|S|=360$, $P=720$, $Q=0$", "All zero"],
        correct: 0,
        solution: S({
          c: "AC power from impedance: current magnitude first, then the power triangle. $|S| = V_{rms}I_{rms}$; $P = |S|\\cos\\theta$; $Q = |S|\\sin\\theta$ — where θ is the IMPEDANCE angle, and a NEGATIVE angle means capacitive (current leads).",
          s: [
            "<b>Step 1 — Current.</b> $I = 120/20 = 6$ A rms.",
            "<b>Step 2 — Apparent power.</b> $|S| = 120\\times6 = 720$ VA.",
            "<b>Step 3 — Real and reactive.</b> $P = 720\\cos(-60°) = 360$ W; $Q = 720\\sin(-60°) = -624$ VAR — negative because the load is capacitive.",
            "<b>Step 4 — Distractor audit.</b> Choice B flips Q's sign (treats the load as inductive); C swaps P and S."
          ],
          a: "$|S| = 720$ VA, $P = 360$ W, $Q \\approx -624$ VAR (capacitive).",
          v: "Triangle closure: $\\sqrt{360^{2} + 624^{2}} = 720$ ✓. Sign convention to lock in: inductive loads CONSUME reactive power (Q > 0), capacitive loads SUPPLY it (Q < 0) — exactly why capacitor banks correct lagging power factor."

        }),
        ref: "Handbook p.362" },
      { q: "Series RC: $R=1$ k$\\Omega$, $C=1$ µF. Cutoff frequency:",
        choices: ["$\\approx 159$ Hz", "$10$ kHz", "$1000$ Hz", "$0.16$ Hz"],
        correct: 0,
        solution: S({
          c: "Every first-order RC filter corners at the same place: $f_c = \\dfrac{1}{2\\pi RC}$ — the frequency where capacitive reactance equals resistance and the output is 3 dB down.",
          s: [
            "<b>Step 1 — RC product.</b> $(10^{3})(10^{-6}) = 10^{-3}$ s.",
            "<b>Step 2 — Evaluate.</b> $f_c = \\dfrac{1}{2\\pi\\times10^{-3}} \\approx 159$ Hz.",
            "<b>Step 3 — Distractor audit.</b> 1000 Hz is $1/RC$ left in rad/s and mislabeled Hz (the perennial $2\\pi$ trap); 10 kHz and 0.16 Hz are decade slips."
          ],
          a: "$f_c \\approx 159$ Hz",
          v: "Reactance check at 159 Hz: $X_C = \\dfrac{1}{2\\pi(159)(10^{-6})} \\approx 1000\\,\\Omega = R$ ✓ — equal magnitudes is exactly the corner condition. Same RC: output across C = low-pass; across R = high-pass."

        }),
        ref: "Handbook p.375" },
      { q: "Parallel RLC: $R=10$ k$\\Omega$, $L=100$ mH, $C=100$ nF. Resonant frequency?",
        choices: ["$\\approx 1591$ Hz", "$10$ kHz", "$159$ Hz", "$5$ kHz"],
        correct: 0,
        solution: S({
          c: "Resonant frequency depends only on L and C — never on R: $f_0 = \\dfrac{1}{2\\pi\\sqrt{LC}}$. (R sets the SHARPNESS, not the location.)",
          s: [
            "<b>Step 1 — LC product.</b> $(0.1)(10^{-7}) = 10^{-8}$.",
            "<b>Step 2 — Root and invert.</b> $\\sqrt{LC} = 10^{-4}$ → $\\omega_0 = 10^{4}$ rad/s.",
            "<b>Step 3 — To Hz.</b> $f_0 = 10^{4}/2\\pi \\approx 1591$ Hz.",
            "<b>Step 4 — Distractor audit.</b> 159 Hz and 10 kHz are decade/2π slips; 5 kHz has no route."
          ],
          a: "$f_0 \\approx 1591$ Hz",
          v: "Behavior at resonance — the part exams probe: a PARALLEL tank's impedance peaks (≈R, here 10 kΩ — nearly open), opposite to a SERIES RLC whose impedance dips to R ✓. Tanks select frequencies in oscillators; series resonators pass them in filters."

        }),
        ref: "Handbook p.361" },
      { q: "Capacitor charged to 100V through $R=1$ k$\\Omega$. Time to reach 95% of source voltage:",
        choices: ["$\\approx 3\\tau$", "$1\\tau$", "$\\approx 5\\tau$", "Infinite"],
        correct: 0,
        solution: S({
          c: "Charging follows $v_C(t) = V_{final}(1 - e^{-t/\\tau})$ — the mirror of discharge. To find when it reaches a fraction $f$: solve $e^{-t/\\tau} = 1 - f$, i.e. $t = -\\tau\\ln(1-f)$.",
          s: [
            "<b>Step 1 — Set the target.</b> 95% → $e^{-t/\\tau} = 0.05$.",
            "<b>Step 2 — Solve.</b> $t/\\tau = -\\ln(0.05) = 3.0$ — three time constants, almost exactly.",
            "<b>Step 3 — Distractor audit.</b> 1τ reaches only 63.2%; 5τ reaches 99.3% (the 'fully charged' convention — a different milestone); 'infinite' confuses asymptote with practical arrival."
          ],
          a: "$\\approx 3\\tau$",
          v: "The milestone table worth owning: 1τ → 63.2%, 2τ → 86.5%, 3τ → 95.0%, 4τ → 98.2%, 5τ → 99.3% ✓ — and check: $1 - e^{-3} = 0.9502$, dead on 95%."

        }),
        ref: "Handbook p.358" },
      { q: "Three resistors 10Ω, 20Ω, 30Ω in parallel. Equivalent R:",
        choices: ["$\\approx 5.45\\ \\Omega$", "$60\\ \\Omega$", "$10\\ \\Omega$", "$20\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Parallel resistors: conductances (reciprocals) add — $\\dfrac{1}{R_{eq}} = \\dfrac{1}{10} + \\dfrac{1}{20} + \\dfrac{1}{30}$. A common denominator keeps it exact.",
          s: [
            "<b>Step 1 — Common denominator 60.</b> $\\dfrac{6}{60} + \\dfrac{3}{60} + \\dfrac{2}{60} = \\dfrac{11}{60}$.",
            "<b>Step 2 — Invert.</b> $R_{eq} = \\dfrac{60}{11} \\approx 5.45\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 60 Ω is the SERIES sum; 10 Ω forgets the other branches; 20 Ω averages."
          ],
          a: "$R_{eq} \\approx 5.45\\,\\Omega$",
          v: "Bound check: result must be below the smallest branch (10 Ω) ✓. Current view at 60 V: branches draw 6 + 3 + 2 = 11 A → $R = 60/11$ ✓ — same fraction, physical meaning attached."

        }),
        ref: "Handbook p.356" },
      { q: "5 V DC source feeds 10 Ω. Power dissipated:",
        choices: ["$2.5$ W", "$50$ W", "$0.5$ W", "$5$ W"],
        correct: 0,
        solution: S({
          c: "Power in a resistor across a known voltage: $P = V^{2}/R$ — one of the three interchangeable forms ($P = VI = I^{2}R = V^{2}/R$); pick whichever uses the data you already have.",
          s: [
            "<b>Step 1 — Apply.</b> $P = 5^{2}/10 = 25/10 = 2.5$ W.",
            "<b>Step 2 — Distractor audit.</b> 50 W multiplies $V^{2}R$; 0.5 W is the current (0.5 A) mislabeled as power; 5 W is $V\\times1$."
          ],
          a: "$P = 2.5$ W",
          v: "Triple-form check: $I = 5/10 = 0.5$ A → $P = VI = 2.5$ W ✓ and $P = I^{2}R = 0.25\\times10 = 2.5$ W ✓ — all three formulas, one answer, zero doubt."

        }),
        ref: "Handbook p.356" },
      { q: "AC voltage $v(t) = 50\\cos(377t + 30°)$ V. Frequency in Hz:",
        choices: ["$60$ Hz", "$377$ Hz", "$50$ Hz", "$30$ Hz"],
        correct: 0,
        solution: S({
          c: "Read a sinusoid like a sentence: $v(t) = V_m\\cos(\\omega t + \\phi)$ — amplitude $V_m$, angular frequency $\\omega$ (rad/s), phase $\\phi$. Hz comes from $f = \\omega/2\\pi$.",
          s: [
            "<b>Step 1 — Extract ω.</b> The number multiplying $t$: $\\omega = 377$ rad/s.",
            "<b>Step 2 — Convert.</b> $f = 377/(2\\pi) = 60$ Hz.",
            "<b>Step 3 — Distractor audit.</b> 377 Hz reports ω in the wrong unit; 50 is the AMPLITUDE (volts, not Hz); 30 is the PHASE (degrees)."
          ],
          a: "$f = 60$ Hz",
          v: "Numbers worth recognizing on sight: 377 rad/s ↔ 60 Hz (US grid), 314 rad/s ↔ 50 Hz (EU) ✓ — they appear constantly and identifying them instantly saves exam time."

        }),
        ref: "Handbook p.360" },
      { q: "Effective (RMS) value of $v(t) = 20\\cos(\\omega t) + 10$ V (sinusoid + DC offset):",
        choices: ["$\\approx 17.32$ V", "$30$ V", "$\\approx 14.14$ V", "$\\approx 22.36$ V"],
        correct: 0,
        solution: S({
          c: "RMS of a MIXED signal (DC offset + sinusoid): the components' powers add, so the RMS values combine in QUADRATURE: $V_{rms} = \\sqrt{V_{DC}^{2} + V_{AC,rms}^{2}}$ — never by direct addition.",
          s: [
            "<b>Step 1 — RMS of the sinusoid alone.</b> $20/\\sqrt2 = 14.14$ V.",
            "<b>Step 2 — Combine with the DC.</b> $\\sqrt{14.14^{2} + 10^{2}} = \\sqrt{200 + 100} = \\sqrt{300} = 17.32$ V.",
            "<b>Step 3 — Distractor audit.</b> 30 V adds peak + DC linearly; 14.14 V ignores the DC; 22.36 V ($\\sqrt{500}$) wrongly uses the 20-V PEAK in the quadrature."
          ],
          a: "$V_{rms} \\approx 17.32$ V",
          v: "Why quadrature: heating power in a resistor is $V_{rms}^{2}/R$, and over a full cycle the DC×AC cross-term averages to zero — only the squares survive ✓. ($300/R$ watts here, from $100/R$ DC + $200/R$ AC.)"

        }),
        ref: "Handbook p.360" },
      { q: "Norton current source $I_N = 3$ A, $R_N = 6\\ \\Omega$. Converting to Thevenin: $V_{Th}$ and $R_{Th}$:",
        choices: ["$V_{Th} = 18$ V, $R_{Th} = 6\\ \\Omega$", "$V_{Th} = 3$ V, $R_{Th} = 6\\ \\Omega$", "$V_{Th} = 18$ V, $R_{Th} = 0.5\\ \\Omega$", "$V_{Th} = 0.5$ V, $R_{Th} = 6\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Norton → Thevenin source transformation: $V_{Th} = I_NR_N$, resistance unchanged ($R_{Th} = R_N$). The two forms are indistinguishable from the terminals.",
          s: [
            "<b>Step 1 — Convert.</b> $V_{Th} = 3\\times6 = 18$ V; $R_{Th} = 6\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> '$V_{Th} = 3$ V' copies the current as a voltage; the 0.5 variants divide instead of multiplying."
          ],
          a: "$V_{Th} = 18$ V, $R_{Th} = 6\\,\\Omega$",
          v: "Two-point equivalence test: open-circuit — Norton's 3 A through 6 Ω gives 18 V = $V_{Th}$ ✓; short-circuit — Thevenin gives $18/6 = 3$ A = $I_N$ ✓. Matching at both extremes ⇒ matching for every load."

        }),
        ref: "Handbook p.357" },
      { q: "An inductor has $V = L(di/dt)$. If $L=2$ mH and current rises 4 A in 100 µs, voltage across:",
        choices: ["$80$ V", "$8$ V", "$200$ mV", "$0.5$ V"],
        correct: 0,
        solution: S({
          c: "An inductor resists changes in current; the faster the change, the larger the voltage it develops: $V_L = L\\,\\dfrac{di}{dt}$. Steady current → zero volts; abrupt change → big spike.",
          s: [
            "<b>Step 1 — Rate of change.</b> $\\dfrac{di}{dt} = \\dfrac{4}{100\\times10^{-6}} = 4\\times10^{4}$ A/s.",
            "<b>Step 2 — Multiply by L.</b> $V = (2\\times10^{-3})(4\\times10^{4}) = 80$ V.",
            "<b>Step 3 — Distractor audit.</b> 8 V and 200 mV are decade slips in the µs conversion; 0.5 V has no route."
          ],
          a: "$V_L = 80$ V",
          v: "The takeaway hiding in the numbers: a measly 2-mH coil generates 80 V from a moderately fast current ramp — interrupt the current in microseconds and the spike reaches kilovolts. That physics is why relay coils get flyback diodes and why switches arc ✓."

        }),
        ref: "Handbook p.358" },
      { q: "Energy stored in 100 µF capacitor at 200 V:",
        choices: ["$2$ J", "$20$ mJ", "$10$ J", "$0.04$ J"],
        correct: 0,
        solution: S({
          c: "Capacitor field energy: $W = \\tfrac12CV^{2}$ — quadratic in voltage, so doubling V quadruples the stored energy.",
          s: [
            "<b>Step 1 — Square the voltage.</b> $200^{2} = 40{,}000$.",
            "<b>Step 2 — Evaluate.</b> $W = 0.5\\times10^{-4}\\times4\\times10^{4} = 2$ J.",
            "<b>Step 3 — Distractor audit.</b> 20 mJ slips two decades; 10 J drops the ½ and a step; 0.04 J forgets to square."
          ],
          a: "$W = 2$ J",
          v: "Charge route: $Q = CV = 0.02$ C, $W = \\tfrac12QV = 0.5(0.02)(200) = 2$ J ✓. Safety scale: 2 J at 200 V is a painful, potentially dangerous discharge — the reason power-supply caps carry bleed resistors and 'discharge before servicing' labels ✓."

        }),
        ref: "Handbook p.358" },
    ],

    // ====================== Ch 7: Linear Systems — +6 ======================
    7: [
      { q: "Laplace transform of $f(t) = t e^{-2t}$:",
        choices: ["$1/(s+2)^2$", "$1/(s-2)^2$", "$2/(s^2+4)$", "$1/(s+2)$"],
        correct: 0,
        solution: S({
          c: "Two table facts combine: the power pair $\\mathcal L\\{t\\} = 1/s^{2}$, and the frequency-shift rule — multiplying by $e^{-at}$ in time replaces every $s$ with $s+a$: $\\mathcal L\\{t^{n}e^{-at}\\} = \\dfrac{n!}{(s+a)^{n+1}}$.",
          s: [
            "<b>Step 1 — Transform $t$ alone.</b> $\\mathcal L\\{t\\} = 1/s^{2}$.",
            "<b>Step 2 — Apply the shift for $e^{-2t}$.</b> $s \\to s+2$: result $\\dfrac{1}{(s+2)^{2}}$.",
            "<b>Step 3 — Distractor audit.</b> $1/(s-2)^{2}$ shifts the wrong way (that is the GROWING $te^{+2t}$); $1/(s+2)$ is plain $e^{-2t}$ without the $t$; $2/(s^{2}+4)$ is $\\sin 2t$'s pair."
          ],
          a: "$\\dfrac{1}{(s+2)^{2}}$",
          v: "Pole reading: a DOUBLE pole at $s = -2$ always signals a $te^{-2t}$-type term — repeated poles add the polynomial factor ✓. Initial-value check: $\\lim_{s\\to\\infty}sF(s) = 0 = f(0)$ ✓."

        }),
        ref: "Handbook p.56" },
      { q: "Inverse Laplace of $F(s) = \\dfrac{2s+1}{s^2+s}$:",
        choices: ["$1 + e^{-t}$", "$2 + e^{-t}$", "$1 - e^{-t}$", "$e^{-t}$"],
        correct: 0,
        solution: S({
          c: "Partial fractions turn a complicated transform into a sum of table entries: factor the denominator, split, then invert each piece ($1/s \\to 1$, $1/(s+1) \\to e^{-t}$).",
          s: [
            "<b>Step 1 — Factor and set up.</b> $\\dfrac{2s+1}{s(s+1)} = \\dfrac{A}{s} + \\dfrac{B}{s+1}$.",
            "<b>Step 2 — Cover-up method.</b> At $s = 0$: $A = \\dfrac{2(0)+1}{0+1} = 1$. At $s = -1$: $B = \\dfrac{2(-1)+1}{-1} = 1$.",
            "<b>Step 3 — Invert term by term.</b> $f(t) = 1 + e^{-t}$.",
            "<b>Step 4 — Distractor audit.</b> $1 - e^{-t}$ flips B's sign; $2 + e^{-t}$ misreads the numerator's 2; bare $e^{-t}$ loses the DC term."
          ],
          a: "$f(t) = 1 + e^{-t}$",
          v: "Endpoint checks (always available): initial value $\\lim_{s\\to\\infty}sF = 2 = f(0) = 1 + 1$ ✓; final value $\\lim_{s\\to0}sF = 1 = f(\\infty)$ ✓ — both theorems confirm the inversion."

        }),
        ref: "Handbook p.56" },
      { q: "A bandpass filter centered at 100 Hz with Q=10. Bandwidth?",
        choices: ["$10$ Hz", "$1000$ Hz", "$100$ Hz", "$1$ Hz"],
        correct: 0,
        solution: S({
          c: "Q (quality factor) measures a bandpass filter's selectivity: $Q = f_0/BW$, so the −3 dB bandwidth is $BW = f_0/Q$ — the higher the Q, the skinnier the passband.",
          s: [
            "<b>Step 1 — Apply.</b> $BW = 100/10 = 10$ Hz — passband roughly 95-105 Hz.",
            "<b>Step 2 — Distractor audit.</b> 1000 Hz multiplies instead of divides; 100 Hz echoes $f_0$; 1 Hz divides twice."
          ],
          a: "$BW = 10$ Hz",
          v: "Anchor application: a radio IF stage at 455 kHz needing a 10-kHz channel needs $Q \\approx 45$ — same relation, real numbers ✓. The trade: high Q rings longer in time (narrow in frequency ↔ slow in time, the uncertainty principle in circuit form)."

        }),
        ref: "Handbook p.361" },
      { q: "Time constant of $H(s) = 5/(2s+10)$:",
        choices: ["$0.2$ s", "$2$ s", "$10$ s", "$5$ s"],
        correct: 0,
        solution: S({
          c: "Time constant lives in the STANDARD form $\\dfrac{K}{\\tau s + 1}$ — so the denominator's constant term must be normalized to 1 before reading τ. Don't read coefficients off an unnormalized transfer function.",
          s: [
            "<b>Step 1 — Normalize.</b> $\\dfrac{5}{2s+10} = \\dfrac{5}{10(0.2s+1)} = \\dfrac{0.5}{0.2s+1}$.",
            "<b>Step 2 — Read off.</b> $\\tau = 0.2$ s (and DC gain $K = 0.5$).",
            "<b>Step 3 — Distractor audit.</b> 2 s reads the raw $s$-coefficient; 10 and 5 s read other raw coefficients — all symptoms of skipping normalization."
          ],
          a: "$\\tau = 0.2$ s",
          v: "Pole cross-check (normalization-proof route): $2s + 10 = 0 \\Rightarrow s = -5$, and $\\tau = 1/|pole| = 0.2$ s ✓ — if the two methods disagree, the normalization slipped."

        }),
        ref: "Handbook p.365" },
      { q: "A 2nd-order system has poles at $-1 \\pm j2$. Damping ratio $\\zeta$:",
        choices: ["$\\approx 0.447$", "$0.5$", "$0.707$", "$1.0$"],
        correct: 0,
        solution: S({
          c: "Complex poles $s = -\\sigma \\pm j\\omega_d$ encode the 2nd-order parameters geometrically: $\\omega_n$ is the DISTANCE from the origin, and $\\zeta = \\sigma/\\omega_n$ — the cosine of the pole's angle from the negative real axis.",
          s: [
            "<b>Step 1 — Distance to origin.</b> $\\omega_n = \\sqrt{1^{2} + 2^{2}} = \\sqrt5 \\approx 2.236$ rad/s.",
            "<b>Step 2 — Damping ratio.</b> $\\zeta = \\dfrac{\\sigma}{\\omega_n} = \\dfrac{1}{\\sqrt5} \\approx 0.447$.",
            "<b>Step 3 — Distractor audit.</b> 0.5 guesses from the real part alone; 0.707 is the famous 45°-pole value (poles at $-1\\pm j1$); 1.0 would mean repeated REAL poles."
          ],
          a: "$\\zeta \\approx 0.447$",
          v: "Reassembly check: $-\\zeta\\omega_n = -1$ ✓ and $\\omega_d = \\omega_n\\sqrt{1-\\zeta^{2}} = \\sqrt5\\cdot\\sqrt{0.8} = 2$ ✓ — the given poles regenerate exactly. Geometric rule worth keeping: poles closer to the imaginary axis (smaller angle-cosine) ring more."

        }),
        ref: "Handbook p.366" },
      { q: "Settling time (2%) of a system with $\\zeta=0.5$, $\\omega_n = 10$ rad/s:",
        choices: ["$\\approx 0.8$ s", "$\\approx 2$ s", "$\\approx 0.1$ s", "$\\approx 4$ s"],
        correct: 0,
        solution: S({
          c: "Settling time is governed by the ENVELOPE $e^{-\\zeta\\omega_nt}$ that bounds the ringing. The 2% criterion needs the envelope down to 0.02: $e^{-\\zeta\\omega_nt_s} = 0.02 \\Rightarrow t_s \\approx \\dfrac{4}{\\zeta\\omega_n}$ (since $\\ln 50 \\approx 3.9 \\approx 4$).",
          s: [
            "<b>Step 1 — Decay rate.</b> $\\zeta\\omega_n = 0.5\\times10 = 5$ s⁻¹.",
            "<b>Step 2 — Apply.</b> $t_s = 4/5 = 0.8$ s.",
            "<b>Step 3 — Distractor audit.</b> 2 s ≈ uses $\\omega_n$'s reciprocal scaled wrong; 0.1 s is $1/\\omega_n$; 4 s forgets the rate is 5, not 1."
          ],
          a: "$t_s \\approx 0.8$ s",
          v: "Insight the formula encodes: settling depends ONLY on the poles' REAL part ($\\zeta\\omega_n = 5$, poles at $-5 \\pm j8.66$) — the imaginary part sets ring FREQUENCY, not decay ✓. Cousin criterion: 5% settling uses $3/(\\zeta\\omega_n) = 0.6$ s."

        }),
        ref: "Handbook p.366" },
    ],

    // ====================== Ch 8: Signal Processing — +7 ======================
    8: [
      { q: "Voltage gain 100 in dB:",
        choices: ["$40$ dB", "$20$ dB", "$100$ dB", "$2$ dB"],
        correct: 0,
        solution: S({
          c: "Decibels for VOLTAGE (or current) ratios use $20\\log_{10}$ — because power goes as voltage SQUARED, and $10\\log(V^{2}) = 20\\log V$.",
          s: [
            "<b>Step 1 — Apply.</b> $20\\log_{10}100 = 20\\times2 = 40$ dB.",
            "<b>Step 2 — Distractor audit.</b> 20 dB applies the POWER formula ($10\\log$) to a voltage ratio — the classic mix-up; 100 dB confuses ratio with dB; 2 dB is just the log."
          ],
          a: "40 dB",
          v: "Consistency proof of the 10-vs-20 rule: voltage ×100 into a fixed resistor → power ×10,000 → $10\\log10^{4} = 40$ dB — SAME number either way, as it must be ✓. Pocket pairs: ×10 V = +20 dB; ×2 V = +6 dB."

        }),
        ref: "Handbook p.375" },
      { q: "Decibel gain of -6 dB corresponds to voltage ratio:",
        choices: ["$\\approx 0.5$", "$0.1$", "$0.3$", "$0.01$"],
        correct: 0,
        solution: S({
          c: "Unwrapping voltage dB: $V_2/V_1 = 10^{\\text{dB}/20}$. Negative dB = attenuation (ratio below 1).",
          s: [
            "<b>Step 1 — Apply.</b> $10^{-6/20} = 10^{-0.3} = 0.501 \\approx 0.5$.",
            "<b>Step 2 — Distractor audit.</b> 0.1 is −20 dB; 0.3 misreads the exponent as the answer; 0.01 is −40 dB."
          ],
          a: "$\\approx 0.5$",
          v: "The memorized lattice (voltage): ±6 dB = ×2 or ×½, ±20 dB = ×10 or ×0.1 — and they compose: −26 dB = 0.5×0.1 = 0.05 ✓. '−6 dB per octave' rolloff language in filters comes straight from this halving."

        }),
        ref: "Handbook p.375" },
      { q: "An 8 kHz audio sampled at 16 kHz. After sampling, can the signal be perfectly reconstructed?",
        choices: ["Only if anti-alias filter rolls off well below 8 kHz", "Yes always", "No, sampling rate too low", "No, need 32 kHz"],
        correct: 0,
        solution: S({
          c: "Nyquist's fine print: $f_s > 2f_{max}$ is a STRICT inequality, and real anti-alias filters aren't brick walls. Sampling at exactly twice the band edge leaves zero guard band for the filter's rolloff.",
          s: [
            "<b>Step 1 — The boundary problem.</b> $f_s = 16$ kHz puts the folding frequency at exactly 8 kHz — content AT 8 kHz is marginal, and anything the filter lets through ABOVE 8 kHz folds back into the audio.",
            "<b>Step 2 — The practical condition.</b> Reconstruction works iff the anti-alias filter attenuates everything approaching 8 kHz — i.e., its cutoff sits comfortably BELOW 8 kHz (e.g. 7.5 kHz), sacrificing a sliver of bandwidth for clean sampling.",
            "<b>Step 3 — Distractor audit.</b> 'Yes always' ignores filter reality; 'rate too low' is false in principle (16 = 2×8 satisfies the theorem's boundary); 'need 32 kHz' over-corrects by a full octave."
          ],
          a: "Only if the anti-alias filter rolls off below 8 kHz.",
          v: "Industry mirror: CD audio samples 20-kHz content at 44.1 kHz — a ~10% guard band (20 → 22.05) provided precisely so an implementable filter can do its job ✓."

        }),
        ref: "Handbook p.375" },
      { q: "Inverse Z-transform of $X(z) = z/(z - 0.5)$:",
        choices: ["$0.5^n$ (for $n \\ge 0$)", "$0.5^n u[n-1]$", "$\\delta[n]$", "$2^n$"],
        correct: 0,
        solution: S({
          c: "THE z-transform pair to know cold: $a^{n}u[n] \\leftrightarrow \\dfrac{z}{z-a}$ (equivalently $\\dfrac{1}{1-az^{-1}}$), valid for $|z| > |a|$.",
          s: [
            "<b>Step 1 — Pattern match.</b> $X(z) = \\dfrac{z}{z-0.5}$ → $a = 0.5$.",
            "<b>Step 2 — Invert.</b> $x[n] = (0.5)^{n}u[n]$: the sequence 1, 0.5, 0.25, 0.125, …",
            "<b>Step 3 — Distractor audit.</b> $0.5^{n}u[n-1]$ delays one sample (drops the leading 1 — that pair is $\\frac{1}{z-a}$ territory); $\\delta[n]$ would need $X = 1$; $2^{n}$ flips the pole to 2."
          ],
          a: "$x[n] = 0.5^{n}$ for $n \\ge 0$.",
          v: "Long-division check of the first terms: $\\dfrac{z}{z-0.5} = 1 + 0.5z^{-1} + 0.25z^{-2} + \\cdots$ — coefficients 1, 0.5, 0.25 = the claimed sequence ✓. Pole at 0.5, inside the unit circle → decaying (stable) ✓."

        }),
        ref: "Handbook p.376" },
      { q: "An IIR filter with transfer function $H(z) = 1/(1 - 0.9 z^{-1})$ is:",
        choices: ["Stable (pole inside unit circle)", "Unstable", "Marginally stable", "Causes oscillation"],
        correct: 0,
        solution: S({
          c: "Digital (discrete-time) stability lives on the unit circle: a causal IIR filter is stable iff every pole satisfies $|z| < 1$. Find the poles, measure their distance from the origin.",
          s: [
            "<b>Step 1 — Locate the pole.</b> $1 - 0.9z^{-1} = 0 \\Rightarrow z = 0.9$.",
            "<b>Step 2 — Test.</b> $|0.9| < 1$ — inside the circle → stable; impulse response $0.9^{n}$ decays.",
            "<b>Step 3 — Distractor audit.</b> 'Unstable' would need $|z| > 1$; 'marginally stable' needs $|z| = 1$ exactly; 'oscillation' needs complex poles ON the circle."
          ],
          a: "Stable — pole at $z = 0.9$, inside the unit circle.",
          v: "Sensitivity note that makes IIR design careful: nudging the coefficient from 0.9 to 1.1 (pole outside) turns the filter into an exponential amplifier — quantized coefficients in fixed-point hardware must respect this margin ✓. (The 0.9-pole filter is the classic 'leaky integrator' / smoothing filter.)"

        }),
        ref: "Handbook p.376" },
      { q: "Convolution of $\\{1, 2\\}$ and $\\{1, 1\\}$ yields:",
        choices: ["$\\{1, 3, 2\\}$", "$\\{2, 3\\}$", "$\\{1, 2, 1\\}$", "$\\{3, 3\\}$"],
        correct: 0,
        solution: S({
          c: "Discrete convolution IS polynomial multiplication: treat each sequence's samples as coefficients, multiply the polynomials, read the result's coefficients.",
          s: [
            "<b>Step 1 — Multiply.</b> $(1 + 2x)(1 + x) = 1 + x + 2x + 2x^{2} = 1 + 3x + 2x^{2}$.",
            "<b>Step 2 — Read coefficients.</b> $y = \\{1, 3, 2\\}$.",
            "<b>Step 3 — Distractor audit.</b> $\\{2,3\\}$ and $\\{3,3\\}$ have the wrong LENGTH (must be $2+2-1 = 3$); $\\{1,2,1\\}$ is $\\{1,1\\}*\\{1,1\\}$."
          ],
          a: "$\\{1, 3, 2\\}$",
          v: "Sum rule: $\\sum y = 6 = (\\sum x)(\\sum h) = 3\\times2$ ✓ — a one-second check that catches most convolution arithmetic errors. The middle term ($1\\cdot1 + 2\\cdot1 = 3$) is where the overlap happens."

        }),
        ref: "Handbook p.376" },
      { q: "A Butterworth filter is characterized by:",
        choices: ["Maximally flat passband", "Ripple in passband", "Ripple in stopband", "Linear phase"],
        correct: 0,
        solution: S({
          c: "The classic filter families trade three goods — passband flatness, rolloff steepness, phase linearity — and each family maximizes one: BUTTERWORTH = maximally flat passband; CHEBYSHEV = steepest rolloff (paid for with ripple); BESSEL = most linear phase (paid for with lazy rolloff).",
          s: [
            "<b>Step 1 — Match.</b> Butterworth's defining property is the maximally flat magnitude response: $|H| = \\dfrac{1}{\\sqrt{1 + (\\omega/\\omega_c)^{2n}}}$ — all derivatives zero at DC, no ripple anywhere.",
            "<b>Step 2 — Distractor audit.</b> Passband ripple = Chebyshev type I; stopband ripple = Chebyshev type II / elliptic; linear phase = Bessel (analog) or symmetric FIR (digital)."
          ],
          a: "Maximally flat passband.",
          v: "Selection logic to carry into practice: measurement/audio chains (flatness matters) → Butterworth; tight channel selection (steepness matters) → Chebyshev/elliptic; pulse/waveform fidelity (phase matters) → Bessel ✓. All trade-offs ease with higher order $n$ — at higher component cost."

        }),
        ref: "Handbook p.375" },
    ],

    // ====================== Ch 9: Electronics — +12 ======================
    9: [
      { q: "An ideal op-amp has slew rate of:",
        choices: ["Infinite", "$1$ V/µs", "$10$ V/µs", "$0$"],
        correct: 0,
        solution: S({
          c: "The IDEAL op-amp is a list of infinities/zeros that make circuit analysis trivial: infinite gain, infinite input impedance, zero output impedance, infinite bandwidth — and infinite SLEW RATE (the maximum speed, in V/µs, the output can change).",
          s: [
            "<b>Step 1 — Apply the idealization.</b> Ideal → output can jump instantaneously → slew rate infinite.",
            "<b>Step 2 — Why the parameter exists.</b> REAL op-amps charge internal compensation capacitors with limited current, capping $dv/dt$ at typically 0.5-50 V/µs.",
            "<b>Step 3 — Distractor audit.</b> 1 and 10 V/µs are REAL device specs (LM741 ≈ 0.5, TL081 ≈ 13); zero would mean a frozen output."
          ],
          a: "Infinite (for the ideal model).",
          v: "Why it matters practically: a 10-V peak sine at frequency $f$ needs slew $\\ge 2\\pi f V_p$ — at 100 kHz that is 6.3 V/µs, beyond a 741 ✓. The symptom of slew limiting: sine waves leave as triangles."

        }),
        ref: "Handbook p.380" },
      { q: "Op-amp follower (voltage buffer): $v_{out}/v_{in}$ =",
        choices: ["$1$", "$\\infty$", "$-1$", "$0$"],
        correct: 0,
        solution: S({
          c: "The voltage follower (buffer) feeds the output straight back to the inverting input — 100% feedback. The virtual-short rule ($V_- = V_+$) then forces $v_{out} = v_{in}$ exactly: gain 1.",
          s: [
            "<b>Step 1 — See it as the non-inverting limit.</b> $A_v = 1 + R_f/R_g$ with $R_f = 0$ (wire) → $A_v = 1$.",
            "<b>Step 2 — Then why use it?</b> It transforms IMPEDANCE, not voltage: near-infinite input impedance (doesn't load the source), near-zero output impedance (drives any load).",
            "<b>Step 3 — Distractor audit.</b> ∞ is the OPEN-loop gain (no feedback); −1 is an inverting unity stage (different circuit); 0 is no circuit at all."
          ],
          a: "Gain $= 1$ (unity).",
          v: "Canonical use case: a high-impedance sensor (pH probe, ~GΩ) cannot drive a 10-kΩ ADC input directly — inserting a follower preserves the voltage while supplying the current ✓. Voltage unchanged; CAPABILITY transformed."

        }),
        ref: "Handbook p.380" },
      { q: "An op-amp differentiator: input $v_{in}(t) = 3t$ V (ramp), $R = 1$ k$\\Omega$, $C = 1$ µF. Output:",
        choices: ["$-3$ mV (constant)", "$+3$ V", "$0$", "Ramp output"],
        correct: 0,
        solution: S({
          c: "An op-amp differentiator (input C, feedback R, inverting) outputs the input's rate of change, scaled and inverted: $v_{out} = -RC\\,\\dfrac{dv_{in}}{dt}$. A RAMP input has a CONSTANT slope, so the output is a constant level.",
          s: [
            "<b>Step 1 — Slope of the input.</b> $v_{in} = 3t \\Rightarrow dv/dt = 3$ V/s.",
            "<b>Step 2 — Scale factor.</b> $RC = (10^{3})(10^{-6}) = 10^{-3}$ s.",
            "<b>Step 3 — Output.</b> $v_{out} = -10^{-3}\\times3 = -3$ mV, constant.",
            "<b>Step 4 — Distractor audit.</b> +3 V drops both the RC scale and the inversion; 'ramp output' belongs to the INTEGRATOR (the inverse block); 0 would require a constant input."
          ],
          a: "$v_{out} = -3$ mV (constant).",
          v: "Dimension check: (s)·(V/s) = V ✓. Design reality: differentiators amplify high-frequency noise (gain rises with f), so practice prefers integrators plus algebra — worth one sentence of any FE answer ✓."

        }),
        ref: "Handbook p.380" },
      { q: "BJT in saturation: $V_{CE}$ is approximately:",
        choices: ["$0.2$ V", "$0.7$ V", "$5$ V", "Equal to $V_{CC}$"],
        correct: 0,
        solution: S({
          c: "A BJT lives in one of three regions — cutoff (off), active (amplifier, $I_C = \\beta I_B$), saturation (switch fully ON). In SATURATION both junctions are forward-biased and the collector-emitter voltage collapses to a small residual: $V_{CE,sat} \\approx 0.2$ V.",
          s: [
            "<b>Step 1 — Recall the benchmark.</b> $V_{CE,sat} \\approx 0.2$ V (0.1-0.3 V depending on current).",
            "<b>Step 2 — Distractor audit.</b> 0.7 V is the BASE-emitter forward drop $V_{BE}$ — the most-confused pair in transistor land; 5 V / '$= V_{CC}$' describe CUTOFF, the opposite corner.",
            "<b>Step 3 — How you know you're in saturation.</b> The circuit demands more collector current than $\\beta I_B$ can supply — $I_C < \\beta I_B$ becomes the region's signature."
          ],
          a: "$V_{CE,sat} \\approx 0.2$ V",
          v: "Switching payoff: ON-state power $= I_C\\times0.2$ V is small — a 100-mA load costs only 20 mW in the transistor ✓. The 0.2 vs 0.7 distinction also explains why saturated BJT logic (old TTL) had ~0.2-V lows."

        }),
        ref: "Handbook p.384" },
      { q: "Emitter-follower (common-collector) voltage gain:",
        choices: ["≈1 (slightly less)", "≈$\\beta$", "$\\beta+1$", "$\\beta R_E/r_e$"],
        correct: 0,
        solution: S({
          c: "The emitter follower (common-collector) takes input at the base, output at the emitter. The emitter 'follows' the base one diode-drop below, so the VOLTAGE gain is just under 1 — its value lies elsewhere: current gain and impedance transformation.",
          s: [
            "<b>Step 1 — The exact gain.</b> $A_v = \\dfrac{R_E}{R_E + r_e} \\approx 1$ when $R_E \\gg r_e$ (e.g. $1000/(1000+25) = 0.976$).",
            "<b>Step 2 — What it DOES amplify.</b> Current, by $\\beta + 1$; equivalently it shows the source a high impedance ($\\approx\\beta R_E$) and the load a low one ($\\approx r_e$).",
            "<b>Step 3 — Distractor audit.</b> $\\beta$ and $\\beta+1$ are its CURRENT gain; $\\beta R_E/r_e$ mixes formulas."
          ],
          a: "Voltage gain ≈ 1 (slightly less).",
          v: "Role check: it is the BJT's answer to the op-amp follower — same buffering job, one transistor ✓. Typical placement: between a voltage-divider bias network and a heavy load, or as the output stage of audio amplifiers (current muscle, no voltage change)."

        }),
        ref: "Handbook p.384" },
      { q: "A 5V Zener regulator with 220Ω resistor from 12V source feeding a 1k load. Current through Zener (assume ideal):",
        choices: ["$\\approx 26.8$ mA", "$31.8$ mA", "$\\approx 5$ mA", "$\\approx 12$ mA"],
        correct: 0,
        solution: S({
          c: "A loaded Zener regulator splits the series-resistor current two ways: $I_R = I_Z + I_{load}$. The Zener absorbs whatever the load doesn't take — that absorption IS the regulation.",
          s: [
            "<b>Step 1 — Series-resistor current.</b> $V_R = 12 - 5 = 7$ V → $I_R = 7/220 = 31.8$ mA (fixed, since both ends are pinned).",
            "<b>Step 2 — Load current.</b> $I_L = 5/1000 = 5$ mA.",
            "<b>Step 3 — Zener gets the rest.</b> $I_Z = 31.8 - 5 = 26.8$ mA.",
            "<b>Step 4 — Distractor audit.</b> 31.8 mA is the NO-LOAD Zener current (forgot the load steals some); 5 mA is the load's share; 12 mA is numerology."
          ],
          a: "$I_Z \\approx 26.8$ mA",
          v: "Regulation-limit check (the design question hiding here): the load can grow until it wants all 31.8 mA — beyond that ($R_L < 157\\,\\Omega$), the Zener starves ($I_Z \\to 0$) and regulation collapses ✓. Power: $P_Z = 5\\times0.0268 = 134$ mW — quarter-watt part territory."

        }),
        ref: "Handbook p.383" },
      { q: "Standard 7805 voltage regulator IC has output of:",
        choices: ["$5$ V (positive)", "$-5$ V", "$7$ V", "Variable"],
        correct: 0,
        solution: S({
          c: "The 78xx/79xx family encodes its function in the part number: 78 = POSITIVE linear regulator, 79 = negative; the last two digits = the output voltage. 7805 → +5 V.",
          s: [
            "<b>Step 1 — Decode.</b> 78|05 = positive, 5 V (up to ~1-1.5 A with heatsinking).",
            "<b>Step 2 — The operating condition.</b> Dropout ≈ 2 V: input must stay ≥ ~7 V for a stable 5-V output.",
            "<b>Step 3 — Distractor audit.</b> −5 V is the 7905; 7 V misreads the prefix as the output; 'variable' describes the LM317 family."
          ],
          a: "+5 V.",
          v: "Family check: 7812 → +12 V, 7912 → −12 V — the naming holds across the line ✓. Efficiency caveat worth one line: a linear regulator burns $(V_{in}-V_{out})\\times I$ as heat (12→5 V at 1 A = 7 W!), which is why bucks replaced 78xx in efficiency-critical designs; LDOs cut the 2-V dropout to ~0.3 V."

        }),
        ref: "Handbook p.383" },
      { q: "A common-source MOSFET amp: small-signal gain $A_v$ ≈ ",
        choices: ["$-g_m R_D$", "$+R_D/r_o$", "$+1$", "$-\\beta R_D$"],
        correct: 0,
        solution: S({
          c: "The common-source stage is the MOSFET's standard voltage amplifier (input at gate, output at drain): the gate voltage modulates drain current via transconductance $g_m$, and that current develops the output across $R_D$ — giving $A_v = -g_mR_D$, inverting.",
          s: [
            "<b>Step 1 — The chain.</b> $v_{gs} \\to i_d = g_mv_{gs} \\to v_{out} = -i_dR_D$ (drain rises when current falls — hence the minus).",
            "<b>Step 2 — Distractor audit.</b> $+R_D/r_o$ garbles the output-resistance term; +1 is the source-FOLLOWER's gain; $-\\beta R_D$ borrows a BJT parameter MOSFETs don't have."
          ],
          a: "$A_v = -g_mR_D$",
          v: "Useful $g_m$ forms for follow-up questions: $g_m = \\dfrac{2I_D}{V_{OV}} = \\sqrt{2kI_D}$ — bias current is the gain knob ✓. Topology map worth memorizing: CS ↔ CE (voltage gain, inverting), CD/source-follower ↔ CC (buffer), CG ↔ CB (current buffer/high-frequency)."

        }),
        ref: "Handbook p.386" },
      { q: "Full-wave bridge rectifier: number of diodes needed:",
        choices: ["$4$", "$2$", "$1$", "$8$"],
        correct: 0,
        solution: S({
          c: "The diode-count taxonomy of rectifiers: half-wave = 1 diode (wastes half the cycle); center-tapped full-wave = 2 diodes + a special transformer; BRIDGE full-wave = 4 diodes in a diamond, no center tap.",
          s: [
            "<b>Step 1 — Recall the bridge.</b> 4 diodes; on each half-cycle a diagonal PAIR conducts, steering current through the load in the same direction.",
            "<b>Step 2 — Distractor audit.</b> 2 belongs to the center-tap design; 1 to half-wave; 8 to nothing standard (a 3-phase bridge uses 6)."
          ],
          a: "4 diodes.",
          v: "The engineering trade hidden in the count: bridge saves the costly center-tapped transformer but pays TWO diode drops (~1.4 V) per half-cycle vs one — negligible at 120 V, painful at 5 V (where synchronous MOSFET rectifiers take over) ✓."

        }),
        ref: "Handbook p.383" },
      { q: "Buck converter: $V_{out}/V_{in}$ = ",
        choices: ["Duty cycle $D$", "$1/D$", "$D/(1-D)$", "$1-D$"],
        correct: 0,
        solution: S({
          c: "Switching-converter conversion ratios all come from inductor volt-second balance; the results to memorize: BUCK (step-down) $V_{out} = DV_{in}$; BOOST (step-up) $V_{out} = V_{in}/(1-D)$; BUCK-BOOST (inverting) $V_{out} = -V_{in}D/(1-D)$.",
          s: [
            "<b>Step 1 — Match.</b> Buck → ratio = $D$, the fraction of each cycle the switch connects input to inductor.",
            "<b>Step 2 — Sense check.</b> $D$ runs 0→1, so $V_{out}$ runs 0→$V_{in}$ — strictly step-DOWN, as 'buck' promises.",
            "<b>Step 3 — Distractor audit.</b> $1/D$ is nothing standard; $D/(1-D)$ is buck-boost's magnitude; $1-D$ would mean output FALLS as duty rises — backwards."
          ],
          a: "$V_{out}/V_{in} = D$.",
          v: "Endpoint checks: $D = 1$ (switch always on) → output = input ✓; $D = 0$ → zero ✓ — the formula respects both limits. Application anchor: every USB charger and CPU VRM is a buck running exactly this control law, with feedback adjusting $D$."

        }),
        ref: "Handbook p.383" },
      { q: "Common-emitter amp with bypass capacitor on emitter resistor: at low frequencies, gain:",
        choices: ["Decreases (high-pass behavior)", "Increases", "Stays constant", "Goes to zero exactly"],
        correct: 0,
        solution: S({
          c: "The emitter BYPASS capacitor is a frequency-dependent short: at high frequencies its reactance is tiny, shorting out $R_E$ → full gain $R_C/r_e$; at low frequencies it looks open, leaving $R_E$ in the emitter → reduced gain $\\approx R_C/(r_e + R_E)$.",
          s: [
            "<b>Step 1 — Trace the mechanism.</b> $X_C = 1/(2\\pi fC)$ grows as $f$ falls → emitter degeneration returns → gain drops.",
            "<b>Step 2 — Name the shape.</b> Gain low at low frequency, high above a corner — HIGH-PASS behavior for the gain (one of the amplifier's low-frequency cutoffs).",
            "<b>Step 3 — Distractor audit.</b> 'Increases' inverts the reactance trend; 'constant' ignores the capacitor; 'exactly zero' is too strong — gain falls to the degenerated value, not zero."
          ],
          a: "Decreases at low frequencies (high-pass shape).",
          v: "Full-amp picture: bypass cap + input/output COUPLING caps each contribute a low-frequency corner; the highest of them sets the amp's bass limit — the reason audio amps spec '20 Hz' ✓. Design lever: want flat gain to 20 Hz? Size $C$ so $X_C \\ll r_e$ at 20 Hz — that's a BIG capacitor."

        }),
        ref: "Handbook p.384" },
      { q: "JFET in pinch-off (saturation) operates with:",
        choices: ["$V_{DS} \\ge V_{GS} - V_p$", "Any $V_{DS}$", "$V_{DS} = 0$", "$V_{GS} > 0$ (n-ch)"],
        correct: 0,
        solution: S({
          c: "A JFET is a DEPLETION-mode device: fully conducting at $V_{GS} = 0$, progressively choked as the gate reverse-biases toward the pinch-off voltage $V_p$ (negative for n-channel). Its 'saturation' (constant-current) region requires the drain end of the channel pinched: $V_{DS} \\ge V_{GS} - V_p$.",
          s: [
            "<b>Step 1 — Match the condition.</b> Pinch-off operation ⇔ $V_{DS} \\ge V_{GS} - V_p$ (with $V_p < 0$, this is a positive threshold).",
            "<b>Step 2 — Below it.</b> Smaller $V_{DS}$ → ohmic/triode region, where the JFET acts as a voltage-controlled resistor.",
            "<b>Step 3 — Distractor audit.</b> 'Any $V_{DS}$' ignores the regions; $V_{DS} = 0$ is the resistor regime's origin; '$V_{GS} > 0$' would forward-bias the gate junction — forbidden for JFETs."
          ],
          a: "$V_{DS} \\ge V_{GS} - V_p$",
          v: "Current law in pinch-off: $I_D = I_{DSS}(1 - V_{GS}/V_p)^{2}$ — check the endpoints: $V_{GS} = 0 \\to I_{DSS}$ (max) ✓, $V_{GS} = V_p \\to 0$ (off) ✓. Niche where JFETs still shine: ultra-low-noise, high-impedance front ends (instrumentation, audio preamps)."

        }),
        ref: "Handbook p.386" },
    ],

    // ====================== Ch 10: Power — +12 ======================
    10: [
      { q: "A 3-phase wye load has $V_{LN}=277$ V and $Z_\\phi = 10 + j6\\ \\Omega$. Line current:",
        choices: ["$\\approx 23.8$ A", "$\\approx 27.7$ A", "$\\approx 41.3$ A", "$\\approx 100$ A"],
        correct: 0,
        solution: S({
          c: "In a WYE (star) connection, each phase impedance sits between one line and the neutral — so the phase sees $V_{LN}$, and line current EQUALS phase current: $I_L = I_\\phi = V_{LN}/|Z_\\phi|$.",
          s: [
            "<b>Step 1 — Impedance magnitude.</b> $|Z| = \\sqrt{10^{2} + 6^{2}} = \\sqrt{136} = 11.66\\,\\Omega$.",
            "<b>Step 2 — Current.</b> $I_L = 277/11.66 \\approx 23.8$ A.",
            "<b>Step 3 — Distractor audit.</b> 27.7 A divides by 10 (uses R, not |Z|); 41.3 A uses $480/11.66$ (line-to-LINE voltage on a wye phase — the classic mistake); 100 A is noise."
          ],
          a: "$I_L \\approx 23.8$ A",
          v: "Configuration discipline: wye phases get $V_{LN}$ (277 V on a 480-V system); DELTA phases get the full $V_{LL}$ (480 V) — choosing the wrong voltage is the #1 three-phase error ✓."

        }),
        ref: "Handbook p.363" },
      { q: "Per-phase power for the load above ($V_{LN}=277$, $Z=10+j6$):",
        choices: ["$\\approx 5.65$ kW", "$\\approx 8.0$ kW", "$\\approx 3.4$ kW", "$11.5$ kW"],
        correct: 0,
        solution: S({
          c: "Real power dissipates only in the RESISTIVE part of the impedance: $P_\\phi = I_\\phi^{2}R$ — the reactance ($j6$) stores and returns energy but burns none.",
          s: [
            "<b>Step 1 — Take the current from before.</b> $I_\\phi = 23.76$ A.",
            "<b>Step 2 — Apply.</b> $P_\\phi = (23.76)^{2}\\times10 = 5644$ W $\\approx 5.65$ kW.",
            "<b>Step 3 — Distractor audit.</b> 8.0 kW ≈ uses $|Z|$ wrongly... actually $I^2|Z| = 6.58$ kVA is the apparent power per phase; 3.4 kW uses $X$ (that is $Q_\\phi$); 11.5 kW doubles."
          ],
          a: "$P_\\phi \\approx 5.65$ kW (total 3-phase: $\\times3 = 16.9$ kW).",
          v: "Cross-route check: PF $= R/|Z| = 10/11.66 = 0.857$; $P_\\phi = V_{LN}I\\cos\\theta = 277\\times23.76\\times0.857 = 5.64$ kW ✓ — two formulas, one answer."

        }),
        ref: "Handbook p.363" },
      { q: "Step-up transformer 11 kV / 132 kV. Turns ratio:",
        choices: ["$1:12$", "$12:1$", "$121:1$", "$1:11$"],
        correct: 0,
        solution: S({
          c: "Turns ratio mirrors voltage ratio: $N_1/N_2 = V_1/V_2$. A step-UP transformer has MORE secondary turns — ratio written primary:secondary comes out less than 1.",
          s: [
            "<b>Step 1 — Compute.</b> $V_1/V_2 = 11/132 = 1/12$ → ratio 1:12.",
            "<b>Step 2 — Distractor audit.</b> 12:1 reads the ratio backwards (that's a step-DOWN); 121:1 squares; 1:11 misdivides."
          ],
          a: "1:12 (primary:secondary) — step-up.",
          v: "Current consequence: secondary current is 1/12 of primary, so $I^{2}R$ line losses drop by ~144× — the entire reason generation (11-25 kV) is stepped up to transmission voltages (132-765 kV) before traveling ✓."

        }),
        ref: "Handbook p.364" },
      { q: "Transformer efficiency at full load: copper losses = 200 W; iron losses = 100 W; output = 9700 W. Efficiency:",
        choices: ["$\\approx 97\\%$", "$\\approx 99\\%$", "$\\approx 90\\%$", "$\\approx 98\\%$"],
        correct: 0,
        solution: S({
          c: "Efficiency = useful out over total in, and the input is output PLUS losses: $\\eta = \\dfrac{P_{out}}{P_{out} + P_{Cu} + P_{Fe}}$. Copper losses ($I^{2}R$, load-dependent) and iron losses (core hysteresis/eddy, constant) are the two buckets.",
          s: [
            "<b>Step 1 — Total losses.</b> $200 + 100 = 300$ W.",
            "<b>Step 2 — Input.</b> $9700 + 300 = 10{,}000$ W.",
            "<b>Step 3 — Divide.</b> $\\eta = 9700/10{,}000 = 97\\%$.",
            "<b>Step 4 — Distractor audit.</b> 99% and 98% undercount losses; 90% over-penalizes."
          ],
          a: "$\\eta = 97\\%$",
          v: "The classic follow-up fact: efficiency PEAKS at the load where copper loss equals iron loss — here Cu (200) > Fe (100), so this transformer would be MOST efficient somewhat below full load (at $\\sqrt{100/200} = 71\\%$ load) ✓."

        }),
        ref: "Handbook p.364" },
      { q: "Synchronous generator: 6-pole machine at 60 Hz. RPM:",
        choices: ["$1200$", "$3600$", "$900$", "$1800$"],
        correct: 0,
        solution: S({
          c: "Synchronous speed locks to the grid: $n_s = \\dfrac{120f}{p}$ rpm — frequency and pole count are the only inputs.",
          s: [
            "<b>Step 1 — Plug in.</b> $n_s = \\dfrac{120\\times60}{6} = 1200$ rpm.",
            "<b>Step 2 — Distractor audit.</b> 3600 is 2-pole; 1800 is 4-pole; 900 is 8-pole — the standard 60-Hz ladder."
          ],
          a: "$1200$ rpm",
          v: "The ladder to memorize (60 Hz): 2P-3600, 4P-1800, 6P-1200, 8P-900 ✓. Design logic: slow prime movers (hydro turbines) get MANY poles so the shaft can creep while the electricity stays at 60 Hz — some hydro units run 72+ poles at 100 rpm."

        }),
        ref: "Handbook p.365" },
      { q: "Power factor of pure resistor in AC circuit:",
        choices: ["$1.0$ (unity)", "$0$", "$0.707$", "Negative"],
        correct: 0,
        solution: S({
          c: "Power factor $= \\cos\\theta$, where θ is the phase angle between voltage and current. In a pure resistor they rise and fall TOGETHER — θ = 0 — so pf = 1: every volt-ampere does real work.",
          s: [
            "<b>Step 1 — Apply.</b> $\\theta = 0 \\Rightarrow pf = \\cos0 = 1.0$.",
            "<b>Step 2 — The contrast cases.</b> Pure L or pure C: current shifted ±90° → pf = 0 — current flows, energy sloshes, NOTHING is consumed.",
            "<b>Step 3 — Distractor audit.</b> 0.707 is the 45° case (R = X mix); 'negative' pf describes power FLOWING BACKWARD (generation), not a resistor."
          ],
          a: "$pf = 1.0$ (unity).",
          v: "Anchor the two extremes and every load fits between: heaters/incandescents ≈ 1.0; motors 0.8-0.9 lagging; idle magnetics worse ✓. Utilities charge penalties as pf drops because the wires carry amperes that do no billable work."

        }),
        ref: "Handbook p.362" },
      { q: "An induction motor's <b>starting</b> current is typically:",
        choices: ["5-7× rated full-load current", "Same as FL", "1.2× FL", "Less than FL"],
        correct: 0,
        solution: S({
          c: "At the instant of starting, slip $s = 1$: the rotor is stationary while the field spins at full synchronous speed, transformer-coupling maximum current into a low-impedance rotor. The result — LOCKED-ROTOR (inrush) current of typically 5-7× the full-load rating.",
          s: [
            "<b>Step 1 — Recall the multiple.</b> 5-7× FLA is the standard locked-rotor range (NEMA code letters on the nameplate encode the exact value).",
            "<b>Step 2 — Why it decays.</b> As the rotor accelerates, slip falls, rotor-induced EMF and current fall with it — current drops toward FLA as speed approaches rated.",
            "<b>Step 3 — Distractor audit.</b> 'Same as FL' and '1.2×' describe a motor already running; 'less than FL' inverts the physics."
          ],
          a: "5-7× rated full-load current.",
          v: "You have SEEN this fact: house lights dim for a half-second when the AC compressor kicks on — that is 6× inrush dragging the line voltage down ✓. Mitigation toolbox: soft starters, autotransformer starts, or VFDs (which also fix the torque profile)."

        }),
        ref: "Handbook p.365" },
      { q: "Wye to Delta voltage relation, line voltage:",
        choices: ["$V_{LL,\\Delta} = V_{LL,Y}$ if same line", "$V_{LL,\\Delta} = \\sqrt{3}\\,V_{LL,Y}$", "$V_{LL,\\Delta} = V_{LL,Y}/\\sqrt{3}$", "Always equal"],
        correct: 0,
        solution: S({
          c: "Line-to-line voltage is a property of the THREE WIRES, not of any load hung on them. A wye load and a delta load on the same lines see the SAME $V_{LL}$ — what differs is each topology's PHASE voltage: $V_{LL}/\\sqrt3$ inside a wye, $V_{LL}$ itself inside a delta.",
          s: [
            "<b>Step 1 — Fix what the source fixes.</b> The lines carry one $V_{LL}$ — identical for any load connected to them.",
            "<b>Step 2 — Where √3 actually lives.</b> Inside the WYE: each winding spans line-to-NEUTRAL → $V_\\phi = V_{LL}/\\sqrt3$. Inside the DELTA: each winding spans line-to-line → $V_\\phi = V_{LL}$.",
            "<b>Step 3 — Distractor audit.</b> Options B and C bolt the √3 onto the line voltage itself — the factor never belongs there."
          ],
          a: "Same line-to-line voltage — both connect to the same three lines.",
          v: "Practical consequence: the SAME motor can be wired delta on a 230-V system or wye on a 400-V system and its windings see identical voltage — exactly how dual-voltage motor nameplates (230Δ/400Y) work ✓."

        }),
        ref: "Handbook p.363" },
      { q: "A 3-φ load draws $P = 15$ kW at $pf = 0.8$ lagging. Reactive power $Q$:",
        choices: ["$\\approx 11.25$ kVAR", "$\\approx 18.75$ kVAR", "$\\approx 15$ kVAR", "$\\approx 9$ kVAR"],
        correct: 0,
        solution: S({
          c: "From real power and power factor to reactive power: $Q = P\\tan\\theta$ with $\\theta = \\arccos(pf)$. The 0.8-0.6 right triangle makes this one mental math: $pf = 0.8 \\Rightarrow \\tan\\theta = 0.6/0.8 = 0.75$.",
          s: [
            "<b>Step 1 — Angle.</b> $\\arccos0.8 = 36.87°$ (the 3-4-5 angle).",
            "<b>Step 2 — Tangent shortcut.</b> $\\sin\\theta = 0.6$, so $\\tan\\theta = 0.75$.",
            "<b>Step 3 — Reactive power.</b> $Q = 15\\times0.75 = 11.25$ kVAR.",
            "<b>Step 4 — Distractor audit.</b> 18.75 is the APPARENT power $S = P/pf$; 15 echoes P; 9 multiplies by 0.6 (that gives $Q$ only via $S$, i.e. $18.75\\times0.6 = 11.25$ — done wrong it lands at 9)."
          ],
          a: "$Q = 11.25$ kVAR",
          v: "Triangle closure: $\\sqrt{15^{2} + 11.25^{2}} = 18.75 = S$ ✓ — P, Q, S in the exact 4-3-5 proportion the 0.8 power factor promises. To correct to unity pf, capacitors would supply exactly these 11.25 kVAR."

        }),
        ref: "Handbook p.362" },
      { q: "A primary side has 100 A AC and secondary has 5 A. Step-up or step-down?",
        choices: ["Step-up (V increases, I decreases)", "Step-down", "Cannot tell", "1:1 isolation"],
        correct: 0,
        solution: S({
          c: "An ideal transformer conserves power, so voltage and current trade places: where current goes DOWN, voltage went UP. Comparing currents alone reveals the direction.",
          s: [
            "<b>Step 1 — Compare.</b> Primary 100 A → secondary 5 A: current fell by 20×.",
            "<b>Step 2 — Conclude.</b> Secondary voltage must be 20× HIGHER → step-UP (1:20).",
            "<b>Step 3 — Distractor audit.</b> 'Step-down' reads the current ratio backwards; 'cannot tell' — current ratio alone IS sufficient for an ideal transformer; '1:1' would keep currents equal."
          ],
          a: "Step-up, 1:20.",
          v: "Power check: pick any primary voltage, say 240 V: in = 24 kW; secondary then sits at 4800 V × 5 A = 24 kW ✓ — equal, as conservation demands. Memory hook: transformers are see-saws — V up, I down, P level."

        }),
        ref: "Handbook p.364" },
      { q: "A DC motor with $V_a = 240$ V, $R_a = 0.5\\ \\Omega$, drawing $I_a = 30$ A. Back EMF:",
        choices: ["$225$ V", "$240$ V", "$15$ V", "$255$ V"],
        correct: 0,
        solution: S({
          c: "A spinning DC motor GENERATES a voltage opposing its supply — the back EMF $E_b$ (proportional to speed). The armature circuit obeys $V_a = E_b + I_aR_a$: supply = back EMF + resistive drop.",
          s: [
            "<b>Step 1 — Rearrange.</b> $E_b = V_a - I_aR_a$.",
            "<b>Step 2 — Plug in.</b> $E_b = 240 - 30\\times0.5 = 240 - 15 = 225$ V.",
            "<b>Step 3 — Distractor audit.</b> 240 V ignores the armature drop; 15 V IS the drop, mislabeled; 255 V adds instead of subtracting."
          ],
          a: "$E_b = 225$ V",
          v: "The feedback loop this equation encodes: load up the shaft → speed dips → $E_b$ falls → $I_a = (V_a - E_b)/R_a$ rises → more torque — the motor self-regulates ✓. Startup corollary: at standstill $E_b = 0$, so inrush $= 240/0.5 = 480$ A — why big DC motors start through resistors."

        }),
        ref: "Handbook p.365" },
      { q: "An induction motor at full load: efficiency 90%, $pf = 0.85$. Input power for 10 hp output:",
        choices: ["$\\approx 8.29$ kW", "$7.46$ kW", "$\\approx 8.78$ kW", "$\\approx 12$ kW"],
        correct: 0,
        solution: S({
          c: "Two different ratios, two different jobs: EFFICIENCY (η) links real power out to real power in ($P_{in} = P_{out}/\\eta$); POWER FACTOR links real to APPARENT power ($S = P/pf$). For input real power, only η matters — the pf in the problem is a decoy for this part.",
          s: [
            "<b>Step 1 — Convert the output.</b> $10\\,\\text{hp} = 10\\times746 = 7460$ W.",
            "<b>Step 2 — Apply efficiency.</b> $P_{in} = 7460/0.9 = 8289$ W $\\approx 8.29$ kW.",
            "<b>Step 3 — Distractor audit.</b> 7.46 kW is the OUTPUT (skipped η); 8.78 kW ≈ divides by pf instead of η; 12 kW divides by both."
          ],
          a: "$P_{in} \\approx 8.29$ kW",
          v: "Where the pf DOES matter: apparent power drawn $S = 8289/0.85 = 9.75$ kVA — that's the number that sizes the wiring, breaker, and transformer ✓. Loss check: $8.29 - 7.46 = 0.83$ kW of heat — a motor frame's worth of fins."

        }),
        ref: "Handbook p.365" },
    ],

    // ====================== Ch 11: EM — +5 ======================
    11: [
      { q: "Speed of EM wave in vacuum:",
        choices: ["$3 \\times 10^8$ m/s", "$3 \\times 10^6$ m/s", "$1.5 \\times 10^8$ m/s", "Depends on frequency"],
        correct: 0,
        solution: S({
          c: "All electromagnetic waves — radio, light, X-rays — travel through vacuum at the same speed: $c = 1/\\sqrt{\\mu_0\\varepsilon_0} \\approx 3\\times10^{8}$ m/s, INDEPENDENT of frequency (vacuum is non-dispersive).",
          s: [
            "<b>Step 1 — Recall.</b> $c \\approx 3\\times10^{8}$ m/s = 300,000 km/s.",
            "<b>Step 2 — Distractor audit.</b> $3\\times10^{6}$ and $1.5\\times10^{8}$ are decade/half slips ($c/2$ happens in $\\varepsilon_r = 4$ dielectric, not vacuum); 'depends on frequency' is true in MATERIALS (dispersion — why prisms split light) but never in vacuum."
          ],
          a: "$c = 3\\times10^{8}$ m/s, frequency-independent.",
          v: "The companion that converts it to engineering: $\\lambda = c/f$ — 60 Hz → 5000 km (why power lines aren't antennas), 1 GHz → 30 cm, 100 MHz → 3 m ✓. Engineer's ruler: light moves ~30 cm per nanosecond."

        }),
        ref: "Handbook p.355" },
      { q: "Skin depth $\\delta$ in good conductor decreases as:",
        choices: ["Frequency increases", "Frequency decreases", "Conductivity decreases", "Independent of frequency"],
        correct: 0,
        solution: S({
          c: "AC current crowds toward a conductor's surface; the skin depth $\\delta = \\dfrac{1}{\\sqrt{\\pi f\\mu\\sigma}}$ marks where current density has fallen to $1/e$. Every term sits under the root in the DENOMINATOR — raise $f$, $\\mu$, or $\\sigma$ and the skin gets thinner.",
          s: [
            "<b>Step 1 — Read the formula.</b> $\\delta \\propto 1/\\sqrt f$ → frequency UP, depth DOWN.",
            "<b>Step 2 — Feel the numbers.</b> Copper: 8.5 mm at 60 Hz → 65 µm at 1 MHz → ~2 µm at 1 GHz.",
            "<b>Step 3 — Distractor audit.</b> 'Frequency decreases' inverts; 'conductivity decreases' ALSO inverts ($\\sigma$ down → δ UP); 'independent' contradicts the formula."
          ],
          a: "Decreases as frequency increases ($\\delta \\propto 1/\\sqrt f$).",
          v: "Hardware this explains: Litz wire (many insulated strands) for switching supplies, silver-plated and even hollow conductors at RF — past a few δ the copper inside carries nothing, so why pay for it ✓."

        }),
        ref: "Handbook p.368" },
      { q: "Force on a 10 cm wire carrying 5 A in a 0.2 T magnetic field (perpendicular):",
        choices: ["$0.1$ N", "$1$ N", "$0.01$ N", "$10$ N"],
        correct: 0,
        solution: S({
          c: "A current-carrying wire in a magnetic field feels $F = BIL\\sin\\theta$; perpendicular ($\\theta = 90°$) gives the maximum, $F = BIL$. Convert the length to meters before plugging in.",
          s: [
            "<b>Step 1 — Units.</b> $L = 10$ cm $= 0.1$ m.",
            "<b>Step 2 — Multiply.</b> $F = 0.2\\times5\\times0.1 = 0.1$ N.",
            "<b>Step 3 — Distractor audit.</b> 1 N keeps L in 'decimeters of confusion' (×10); 0.01 N double-converts; 10 N is two decades off."
          ],
          a: "$F = 0.1$ N",
          v: "Unit check: T·A·m = N ✓ (1 T = 1 N per amp-meter, literally defined by this force). Scale-up intuition: a motor multiplies this same force by hundreds of turns and a lever arm — 0.1 N per wire becomes real torque ✓."

        }),
        ref: "Handbook p.355" },
      { q: "Maxwell's law $\\nabla \\cdot \\vec{B} = 0$ means:",
        choices: ["No magnetic monopoles", "B-field has no divergence-free part", "$\\vec{B} = 0$ everywhere", "Charge is conserved"],
        correct: 0,
        solution: S({
          c: "Each Maxwell equation is a physical statement. $\\nabla\\cdot\\vec B = 0$ (Gauss's law for magnetism) says the magnetic field has NO sources or sinks: zero net flux out of ANY closed surface — there is no magnetic 'charge' for field lines to start or end on.",
          s: [
            "<b>Step 1 — Translate the math.</b> Zero divergence everywhere ⇔ field lines never begin or end — they form closed loops (or extend to infinity).",
            "<b>Step 2 — Name the consequence.</b> No magnetic MONOPOLES: cut a bar magnet in half and you get two dipoles, never an isolated north.",
            "<b>Step 3 — Distractor audit.</b> '$\\vec B = 0$ everywhere' confuses zero divergence with zero field; 'charge conservation' belongs to the continuity equation; choice B is word salad."
          ],
          a: "No magnetic monopoles exist.",
          v: "Contrast with its electric twin nails the meaning: $\\nabla\\cdot\\vec E = \\rho/\\varepsilon_0$ — electric lines DO start on charges; magnetic lines cannot ✓. (Monopole searches continue; a confirmed find would rewrite this equation — and electromagnetics textbooks.)"

        }),
        ref: "Handbook p.355" },
      { q: "Wavelength of a 100 MHz FM radio wave:",
        choices: ["$3$ m", "$30$ m", "$30$ cm", "$0.3$ km"],
        correct: 0,
        solution: S({
          c: "Wavelength from frequency: $\\lambda = c/f$ — the distance one cycle occupies in space.",
          s: [
            "<b>Step 1 — Plug in.</b> $\\lambda = \\dfrac{3\\times10^{8}}{100\\times10^{6}} = 3$ m.",
            "<b>Step 2 — Distractor audit.</b> 30 m belongs to 10 MHz; 30 cm to 1 GHz; 0.3 km misplaces a decade."
          ],
          a: "$\\lambda = 3$ m",
          v: "The antenna check that makes it real: a quarter-wave whip for FM is $3/4 = 0.75$ m — exactly the length of a classic car radio antenna ✓. FM's 88-108 MHz band spans λ of 3.4 down to 2.8 m, so one antenna serves the whole band tolerably."

        }),
        ref: "Handbook p.368" },
    ],

    // ====================== Ch 12: Control — +7 ======================
    12: [
      { q: "A unity feedback system has $G(s)H(s) = K/(s(s+2))$. For the closed-loop step input, steady-state error is zero because this is:",
        choices: ["Type 1 system", "Type 0", "Type 2", "Type -1"],
        correct: 0,
        solution: S({
          c: "System TYPE = how many pure integrators ($1/s$ factors) sit in the open loop. Each integrator zeroes the steady-state error for one more input order: Type 1 → step error 0, ramp error finite.",
          s: [
            "<b>Step 1 — Count integrators.</b> $\\dfrac{K}{s(s+2)}$ has exactly one factor of $s$ in the denominator → Type 1.",
            "<b>Step 2 — Why the step error vanishes.</b> The integrator accumulates ANY persistent error without bound — the loop can only settle when error = 0 exactly.",
            "<b>Step 3 — Distractor audit.</b> Type 0 (no integrator) leaves step error $\\frac{1}{1+K_p}$; Type 2 would ALSO zero ramp error; 'Type −1' doesn't exist."
          ],
          a: "Type 1.",
          v: "The error table in one line per type: T0 — step $\\frac{1}{1+K_p}$, ramp ∞; T1 — step 0, ramp $\\frac{1}{K_v}$; T2 — step 0, ramp 0 ✓. Here $K_v = \\lim sG = K/2$, so the ramp error would be $2/K$ — a nice follow-up to anticipate."

        }),
        ref: "Handbook p.366" },
      { q: "Open-loop transfer function $G(s) = 10/(s+1)(s+5)$. DC gain ($s=0$):",
        choices: ["$2$", "$10$", "$50$", "$0.5$"],
        correct: 0,
        solution: S({
          c: "DC gain = the transfer function evaluated at $s = 0$ — what the system multiplies a CONSTANT input by, once everything settles.",
          s: [
            "<b>Step 1 — Substitute.</b> $G(0) = \\dfrac{10}{(0+1)(0+5)} = \\dfrac{10}{5} = 2$.",
            "<b>Step 2 — Distractor audit.</b> 10 reads the numerator only; 50 MULTIPLIES the pole constants into the numerator; 0.5 inverts."
          ],
          a: "$G(0) = 2$",
          v: "In dB: $20\\log2 = 6$ dB — the Bode plot's low-frequency flat level ✓. Feedback follow-up: closing unity feedback gives $K_p = 2$ → step error $= 1/(1+2) = 1/3$, exactly the kind of chained question the FE likes."

        }),
        ref: "Handbook p.365" },
      { q: "A PI controller has transfer function $K_p + K_i/s$. Effect of integral term:",
        choices: ["Eliminates steady-state error", "Speeds up response", "Reduces overshoot", "Adds damping"],
        correct: 0,
        solution: S({
          c: "Each letter of P-I-D has ONE signature contribution. INTEGRAL ($K_i/s$) accumulates error over time — it keeps pushing until the error is EXACTLY zero, which is why it eliminates steady-state error (structurally: it adds a pole at the origin, raising the system type).",
          s: [
            "<b>Step 1 — Match the role.</b> Integral term → zero steady-state error. That is its defining job.",
            "<b>Step 2 — Why P alone can't.</b> Proportional needs a nonzero error to produce any output — so a residual offset always survives.",
            "<b>Step 3 — Distractor audit.</b> 'Speeds up response' is mostly P (and D); 'reduces overshoot'/'adds damping' is D — integral actually WORSENS overshoot if over-applied."
          ],
          a: "Eliminates steady-state error.",
          v: "The cost side (every FE answer should know it): integral action erodes phase margin and can 'wind up' when actuators saturate — real controllers add anti-windup clamps ✓. PI is the workhorse: ~80% of industrial loops run PI, not PID."

        }),
        ref: "Handbook p.366" },
      { q: "Phase shift of a $G(s) = 1/(s+10)$ at $\\omega = 10$ rad/s:",
        choices: ["$-45°$", "$0°$", "$-90°$", "$45°$"],
        correct: 0,
        solution: S({
          c: "A single real pole at $s = -a$ contributes phase $-\\arctan(\\omega/a)$: 0° at DC, $-45°$ exactly AT the corner $\\omega = a$, sliding to $-90°$ far above it.",
          s: [
            "<b>Step 1 — Identify the corner.</b> Pole at 10 → corner $\\omega = 10$ rad/s — the question asks exactly there.",
            "<b>Step 2 — Evaluate.</b> $-\\arctan(10/10) = -\\arctan1 = -45°$.",
            "<b>Step 3 — Distractor audit.</b> 0° is the DC limit; −90° the high-frequency limit; +45° would require a ZERO, not a pole."
          ],
          a: "$-45°$ at the corner frequency.",
          v: "The corner-frequency twin facts to bank: at $\\omega = a$ a pole gives −3 dB magnitude AND −45° phase, simultaneously ✓. Zeros mirror everything positive: +3 dB-ish... (+45° phase) — sign of the contribution follows pole vs zero."

        }),
        ref: "Handbook p.366" },
      { q: "Lead compensator: $C(s) = (s+z)/(s+p)$ with $z < p$. Effect on phase:",
        choices: ["Adds phase lead (positive phase shift)", "Adds phase lag", "Cancels original phase", "No effect"],
        correct: 0,
        solution: S({
          c: "Compensator taxonomy by pole-zero order: zero BELOW pole ($z < p$) = LEAD — the zero's +90° arrives before the pole's −90°, leaving net POSITIVE phase in between; zero above pole = LAG.",
          s: [
            "<b>Step 1 — Match.</b> $z < p$ → phase lead, peaking at the geometric mean $\\omega_m = \\sqrt{zp}$ with $\\phi_{max} = \\arcsin\\dfrac{p-z}{p+z}$.",
            "<b>Step 2 — What it buys.</b> Inject that lead near gain crossover → bigger phase margin → less overshoot, faster settling, wider bandwidth.",
            "<b>Step 3 — Distractor audit.</b> 'Phase lag' is the $z > p$ design (used for steady-state accuracy); 'cancels phase'/'no effect' contradict the pole-zero asymmetry."
          ],
          a: "Adds phase lead (positive phase) between $z$ and $p$.",
          v: "Design numbers for intuition: $p/z = 10$ buys $\\phi_{max} = \\arcsin(9/11) \\approx 55°$ — about the practical per-stage ceiling; need more, cascade two ✓. Lead ↔ the D of PID; lag ↔ the I — compensators are PID in pole-zero clothing."

        }),
        ref: "Handbook p.366" },
      { q: "Open-loop system $G(s)H(s)$ has 2 RHP zeros and 1 RHP pole. Closed-loop with no encirclement: Nyquist says how many RHP closed-loop poles?",
        choices: ["$1$ (still unstable)", "$0$ (stable)", "$2$", "Cannot tell"],
        correct: 0,
        solution: S({
          c: "The Nyquist criterion counts closed-loop RHP poles without solving anything: $Z = P - N$, where $P$ = OPEN-loop RHP poles, $N$ = counterclockwise encirclements of $-1$ by the Nyquist plot, $Z$ = CLOSED-loop RHP poles. (RHP ZEROS of the open loop never enter the formula — the question plants them as a decoy.)",
          s: [
            "<b>Step 1 — Inventory.</b> $P = 1$ (the RHP pole); $N = 0$ (no encirclements); the 2 RHP zeros are irrelevant.",
            "<b>Step 2 — Apply.</b> $Z = P - N = 1 - 0 = 1$.",
            "<b>Step 3 — Conclude.</b> One closed-loop RHP pole → the closed loop is UNSTABLE."
          ],
          a: "1 RHP closed-loop pole — still unstable.",
          v: "What stability would have required: $N = P = 1$ encirclement of $-1$ — an open-loop-unstable plant NEEDS its Nyquist plot to wrap the critical point to be saved by feedback ✓. (The RHP zeros do matter elsewhere: they limit achievable bandwidth — non-minimum-phase behavior.)"

        }),
        ref: "Handbook p.365" },
      { q: "A system with $G(s) = K(s+2)/(s(s+5)(s+10))$ — number of branches on root locus:",
        choices: ["$3$ (equal to # poles)", "$2$ (# zeros)", "$1$", "$5$"],
        correct: 0,
        solution: S({
          c: "Root-locus structure rules: the locus has one BRANCH per closed-loop pole = max(#poles, #zeros) of the open loop — in practice, the pole count. Branches START at open-loop poles ($K = 0$) and END at zeros, with the excess heading to infinity along asymptotes.",
          s: [
            "<b>Step 1 — Count poles.</b> $s = 0, -5, -10$ → three poles → 3 branches.",
            "<b>Step 2 — Map the destinations.</b> One branch terminates on the finite zero at $-2$; the other two ride asymptotes to infinity at $\\pm90°$ (angles $(2k+1)180°/(P-Z) = (2k+1)180°/2$).",
            "<b>Step 3 — Distractor audit.</b> 2 counts zeros; 1 and 5 are noise."
          ],
          a: "3 branches.",
          v: "Asymptote centroid for the full sketch: $\\sigma = \\dfrac{(0-5-10) - (-2)}{3-1} = \\dfrac{-13}{2} = -6.5$ — the two infinite branches go vertical through $-6.5$ ✓. Counting branches is always the FIRST sanity check of any root-locus sketch."

        }),
        ref: "Handbook p.366" },
    ],

    // ====================== Ch 13: Comm — +7 ======================
    13: [
      { q: "Bandwidth efficiency = ",
        choices: ["bits/sec per Hz", "Hz per bit", "Bits absolute", "Power per Hz"],
        correct: 0,
        solution: S({
          c: "Spectral (bandwidth) efficiency answers 'how many bits per second can I squeeze through each hertz of spectrum?' — units: bits/sec per Hz. It is THE figure of merit when spectrum is the scarce resource.",
          s: [
            "<b>Step 1 — Match the definition.</b> Information rate ÷ bandwidth = bps/Hz.",
            "<b>Step 2 — See the ladder.</b> BPSK ≈ 1 bps/Hz, QPSK ≈ 2, 16-QAM ≈ 4, 64-QAM ≈ 6 — denser constellations pack more bits per symbol, paid for with higher SNR demands.",
            "<b>Step 3 — Distractor audit.</b> 'Hz per bit' inverts; 'bits absolute' drops the per-bandwidth normalization; 'power per Hz' is spectral DENSITY (a different per-Hz quantity)."
          ],
          a: "Bits per second per hertz (bps/Hz).",
          v: "Shannon ties the ceiling to SNR: max bps/Hz $= \\log_2(1 + SNR)$ — at 30 dB that is ~10 bps/Hz, which is why 1024-QAM (10 bps/Hz) demands pristine links ✓. Wi-Fi/5G marketing numbers are mostly this metric multiplied by bandwidth and antenna streams."

        }),
        ref: "Handbook p.371" },
      { q: "Single-Sideband (SSB) AM vs DSB-LC, bandwidth:",
        choices: ["Half (only $f_m$)", "Same ($2 f_m$)", "Double", "Independent"],
        correct: 0,
        solution: S({
          c: "Plain AM (DSB-LC) transmits a mirror-image PAIR of sidebands around the carrier — the same information twice — occupying $2f_m$. SSB strips the carrier AND one redundant sideband, leaving exactly the message bandwidth $f_m$.",
          s: [
            "<b>Step 1 — Compare bandwidths.</b> DSB: $2f_m$; SSB: $f_m$ — exactly HALF.",
            "<b>Step 2 — What it costs.</b> No carrier to lock onto and no envelope to detect — the receiver must regenerate the carrier precisely (frequency error makes voices sound like ducks).",
            "<b>Step 3 — Distractor audit.</b> 'Same' describes DSB-SC (carrier removed, both sidebands kept); 'double' inverts; 'independent' ignores the arithmetic."
          ],
          a: "Half the bandwidth ($f_m$).",
          v: "The efficiency double-win that made SSB the amateur/military voice standard: half the spectrum AND no power wasted on a carrier — a 100-W SSB rig competes with a several-hundred-watt AM rig ✓."

        }),
        ref: "Handbook p.371" },
      { q: "Information rate for a 4-level signal at symbol rate 5 kbaud:",
        choices: ["$10$ kbps", "$5$ kbps", "$20$ kbps", "$2.5$ kbps"],
        correct: 0,
        solution: S({
          c: "Baud vs bits — the distinction this question exists to teach: BAUD counts SYMBOLS per second; each symbol of an $M$-level alphabet carries $\\log_2M$ BITS. Bit rate $= R_{symbol}\\times\\log_2M$.",
          s: [
            "<b>Step 1 — Bits per symbol.</b> $M = 4 \\Rightarrow \\log_24 = 2$ bits.",
            "<b>Step 2 — Multiply.</b> $5000\\times2 = 10$ kbps.",
            "<b>Step 3 — Distractor audit.</b> 5 kbps equates baud with bps (true only for binary); 20 kbps uses $M$ instead of $\\log_2M$; 2.5 kbps divides."
          ],
          a: "$R_b = 10$ kbps.",
          v: "Sanity ladder: binary at 5 kbaud → 5 kbps; 4-level → 10; 16-level → 20 ✓ — doubling LEVELS adds only ONE bit per symbol (logarithmic), which is why constellations grow exponentially for linear rate gains."

        }),
        ref: "Handbook p.371" },
      { q: "TDM combines two 64 kbps channels onto a single line. Minimum line rate:",
        choices: ["$128$ kbps", "$64$ kbps", "$32$ kbps", "$256$ kbps"],
        correct: 0,
        solution: S({
          c: "Time-division multiplexing interleaves channels into time slots on one line — nothing is compressed, so the line must carry the SUM of the tributary rates (plus framing overhead in real systems).",
          s: [
            "<b>Step 1 — Add.</b> $2\\times64 = 128$ kbps minimum.",
            "<b>Step 2 — Distractor audit.</b> 64 kbps would force the channels to take turns at half speed; 32 halves; 256 doubles needlessly."
          ],
          a: "128 kbps.",
          v: "Scaling to the real thing: T-1 = 24 channels × 64k = 1.536 M + 8k framing = 1.544 Mbps — the same addition, plus the overhead the 'minimum' in this question waves away ✓."

        }),
        ref: "Handbook p.371" },
      { q: "BPSK requires SNR of about ___ for $10^{-5}$ BER:",
        choices: ["$\\approx 9.6$ dB", "$\\approx 0$ dB", "$\\approx 30$ dB", "$\\approx -10$ dB"],
        correct: 0,
        solution: S({
          c: "The BPSK waterfall has a few benchmark points worth memorizing, and $10^{-5}$ BER ↔ $E_b/N_0 \\approx 9.6$ dB is the most-quoted one. It comes from inverting $BER = Q(\\sqrt{2E_b/N_0})$.",
          s: [
            "<b>Step 1 — Invert the Q-function.</b> $Q(x) = 10^{-5} \\Rightarrow x \\approx 4.27$.",
            "<b>Step 2 — Solve for the ratio.</b> $\\sqrt{2E_b/N_0} = 4.27 \\Rightarrow E_b/N_0 = 9.1$ linear $= 9.6$ dB.",
            "<b>Step 3 — Distractor audit.</b> 0 dB sits near BER $10^{-1.5}$ — unusable; 30 dB is far more than needed; −10 dB is below even coded-system thresholds."
          ],
          a: "$\\approx 9.6$ dB for $10^{-5}$ BER.",
          v: "Anchor points to carry: $10^{-3}$ @ ~6.8 dB, $10^{-5}$ @ 9.6, $10^{-6}$ @ ~10.5 — about +1 dB per decade in this region ✓. Modern codes (LDPC/turbo) reach $10^{-5}$ within ~1 dB of the Shannon limit — the 9.6 dB benchmark is the UNCODED reference."

        }),
        ref: "Handbook p.371" },
      { q: "AM modulator output for $m=0$ is:",
        choices: ["Just the carrier (no info)", "Zero signal", "Both sidebands only", "Audio only"],
        correct: 0,
        solution: S({
          c: "Read the AM equation at the boundary: $s(t) = A_c[1 + m\\cos\\omega_mt]\\cos\\omega_ct$. Set $m = 0$ and the bracket collapses to 1 — leaving $A_c\\cos\\omega_ct$, a bare unmodulated carrier.",
          s: [
            "<b>Step 1 — Substitute.</b> $m = 0 \\Rightarrow s(t) = A_c\\cos\\omega_ct$.",
            "<b>Step 2 — Spectrum view.</b> Sideband amplitude scales with $m$ — at zero, the sidebands vanish; only the carrier spike remains. Power still transmitted, information zero.",
            "<b>Step 3 — Distractor audit.</b> 'Zero signal' confuses no MODULATION with no CARRIER; 'sidebands only' is DSB-SC (the opposite suppression); 'audio only' never exists at RF."
          ],
          a: "Just the carrier — no information.",
          v: "This is literally what you hear between words on an AM station: full carrier, silent program ✓ — and it is AM's power-efficiency indictment: the transmitter burns full carrier power even when saying nothing (motivating DSB-SC/SSB)."

        }),
        ref: "Handbook p.371" },
      { q: "Nyquist signaling theorem (for ISI-free): max symbol rate over BW $B$ is:",
        choices: ["$2B$ symbols/sec", "$B$", "$B/2$", "$4B$"],
        correct: 0,
        solution: S({
          c: "Two different 'capacity' theorems share Nyquist's name-space — keep them straight: NYQUIST (noiseless) limits SYMBOL rate to $2B$ symbols/s through bandwidth $B$ without inter-symbol interference; SHANNON (noisy) limits BIT rate via SNR.",
          s: [
            "<b>Step 1 — State it.</b> Max ISI-free signaling rate $= 2B$ symbols/sec for an ideal brick-wall channel of bandwidth $B$.",
            "<b>Step 2 — Extend to bits.</b> With $M$ levels: $C = 2B\\log_2M$ bps — multilevel signaling beats $2B$ bits, but never $2B$ SYMBOLS.",
            "<b>Step 3 — Distractor audit.</b> $B$ and $B/2$ undersell by 2× and 4×; $4B$ violates the theorem."
          ],
          a: "$2B$ symbols per second.",
          v: "Concrete: a 4-kHz telephone channel supports up to 8 kbaud ideally — real modems ran ~3.4 kbaud with raised-cosine shaping (the rolloff eats margin) and stacked bits per symbol instead ✓. Noise then caps the LEVELS via Shannon — the two theorems work in series."

        }),
        ref: "Handbook p.371" },
    ],

    // ====================== Ch 14: Networks — +5 ======================
    14: [
      { q: "Standard HTTP port:",
        choices: ["$80$", "$8080$", "$443$", "$25$"],
        correct: 0,
        solution: S({
          c: "Well-known ports (0-1023) give standard services fixed addresses so clients know where to connect. The short list the FE expects: HTTP 80, HTTPS 443, SSH 22, SMTP 25, FTP 21, DNS 53.",
          s: [
            "<b>Step 1 — Recall.</b> HTTP = port 80.",
            "<b>Step 2 — Distractor audit.</b> 8080 is the common UNPRIVILEGED dev/proxy alternative; 443 is HTTPS (encrypted sibling); 25 is SMTP mail."
          ],
          a: "Port 80.",
          v: "Browser behavior confirms: http://site.com silently means :80, https:// means :443 — explicit ports appear only when deviating ✓. Why 1024 matters: binding below it traditionally requires root privileges, which is why dev servers squat on 8080."

        }),
        ref: "Handbook p.394" },
      { q: "IPv4 address space size:",
        choices: ["$2^{32}$ (≈4.3 billion)", "$2^{64}$", "$2^{16}$", "$2^{128}$"],
        correct: 0,
        solution: S({
          c: "An IPv4 address is a 32-bit number, so the space holds $2^{32} \\approx 4.29$ billion addresses — large in 1981, exhausted by ~2011-2019 (registry by registry).",
          s: [
            "<b>Step 1 — Recall.</b> 32 bits → $2^{32} = 4{,}294{,}967{,}296$.",
            "<b>Step 2 — Why usable is less.</b> Private blocks, multicast (224/4), loopback (127/8), and other reservations carve out big chunks.",
            "<b>Step 3 — Distractor audit.</b> $2^{128}$ is IPv6; $2^{64}$ is neither; $2^{16}$ is a port-number space."
          ],
          a: "$2^{32}$ — about 4.3 billion.",
          v: "Scale contrast that explains the migration: IPv6's $2^{128} \\approx 3.4\\times10^{38}$ — about $5\\times10^{28}$ addresses per human ✓. IPv4 survives today largely thanks to NAT rationing."

        }),
        ref: "Handbook p.393" },
      { q: "Private (RFC1918) IP block in 10.x.x.x. Total addresses:",
        choices: ["$2^{24}$ (~16.7M)", "$2^{16}$", "$2^{8}$", "$2^{32}$"],
        correct: 0,
        solution: S({
          c: "RFC 1918 reserves three blocks for PRIVATE use (never routed on the public internet): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Address count = $2^{\\text{host bits}}$, and a /8 leaves $32-8 = 24$ host bits.",
          s: [
            "<b>Step 1 — Host bits.</b> /8 → 24 bits free.",
            "<b>Step 2 — Count.</b> $2^{24} = 16{,}777{,}216$ — about 16.7 million.",
            "<b>Step 3 — Distractor audit.</b> $2^{16}$ is the 192.168/16 block; $2^{8}$ is one /24; $2^{32}$ is all of IPv4."
          ],
          a: "$2^{24} \\approx 16.7$ million addresses.",
          v: "Usage pattern check: enterprises with thousands of subnets pick 10/8 for room; home routers default to 192.168.x.x because ~250 hosts is plenty ✓. These addresses reach the internet only through NAT — the pairing that keeps IPv4 alive."

        }),
        ref: "Handbook p.394" },
      { q: "Difference between L2 broadcast domain and L3 broadcast domain:",
        choices: ["L2 contained by router; L3 = local subnet", "Same thing", "L3 contained by switch", "Both span the whole internet"],
        correct: 0,
        solution: S({
          c: "A BROADCAST DOMAIN is 'everyone who hears a broadcast'. At Layer 2, switches FORWARD broadcasts (MAC FF:FF:FF:FF:FF:FF) but routers DO NOT — so routers are the walls of an L2 broadcast domain. At Layer 3, the analogous scope is the local SUBNET (its directed broadcast, e.g. 192.168.1.255).",
          s: [
            "<b>Step 1 — L2 boundary.</b> Switches flood broadcasts to every port (within a VLAN); the propagation stops at a router.",
            "<b>Step 2 — L3 scope.</b> An IP broadcast targets all hosts of ONE subnet — by design coterminous with the L2 domain in typical networks.",
            "<b>Step 3 — Distractor audit.</b> 'Same thing' blurs the layers; 'L3 contained by switch' inverts the devices; nothing broadcasts across the whole internet (by deliberate design)."
          ],
          a: "L2 broadcast domain is bounded by routers; L3 broadcast scope is the local subnet.",
          v: "Why the boundary matters operationally: one chattering NIC can flood an entire L2 domain (broadcast storm) — segmenting with routers/VLANs contains the blast radius ✓. VLANs are exactly 'multiple L2 broadcast domains on one physical switch'."

        }),
        ref: "Handbook p.399" },
      { q: "VLAN tag adds ___ bytes to Ethernet frame:",
        choices: ["$4$", "$2$", "$8$", "$1$"],
        correct: 0,
        solution: S({
          c: "IEEE 802.1Q tags a frame by INSERTING a 4-byte field after the source MAC: 2 bytes TPID (0x8100, 'this is tagged') + 2 bytes TCI (3-bit priority + 12-bit VLAN ID).",
          s: [
            "<b>Step 1 — Recall.</b> 4 bytes (32 bits) added.",
            "<b>Step 2 — What's inside.</b> The 12-bit VLAN ID gives 4096 VLANs (0 and 4095 reserved → 4094 usable); the 3 priority bits carry QoS (802.1p).",
            "<b>Step 3 — Distractor audit.</b> 2 bytes is just the TPID half; 8 would be QinQ DOUBLE tagging; 1 byte can't hold the fields."
          ],
          a: "4 bytes.",
          v: "Frame-size consequence: max tagged frame grows 1518 → 1522 bytes, and switches must expect it ✓. The 4094-VLAN ceiling is also why data centers outgrew 802.1Q into VXLAN (24-bit IDs ≈ 16 million segments)."

        }),
        ref: "Handbook p.399" },
    ],

    // ====================== Ch 15: Digital — +10 ======================
    15: [
      { q: "Convert binary 11011 to decimal:",
        choices: ["$27$", "$25$", "$29$", "$30$"],
        correct: 0,
        solution: S({
          c: "Binary place values double from the right: 1, 2, 4, 8, 16. Add the values where a 1 appears.",
          s: [
            "<b>Step 1 — Weight each bit.</b> $1\\,1\\,0\\,1\\,1 \\to 16, 8, 0, 2, 1$.",
            "<b>Step 2 — Sum.</b> $16 + 8 + 2 + 1 = 27$.",
            "<b>Step 3 — Distractor audit.</b> 25 drops the 2; 29 adds a phantom 4 (misreads the 0); 30 misweights."
          ],
          a: "$11011_2 = 27_{10}$",
          v: "Reverse check: $27 = 16 + 11 = 16 + 8 + 3 = 16+8+2+1$ → 11011 ✓. Speed habit: 11111 would be 31 ($2^{5}-1$), and we're missing only the 4 → $31 - 4 = 27$ ✓ — complement counting is often faster."

        }),
        ref: "Handbook p.388" },
      { q: "Octal 175 in decimal:",
        choices: ["$125$", "$175$", "$240$", "$93$"],
        correct: 0,
        solution: S({
          c: "Octal is base-8: place values 1, 8, 64, 512 from the right, digits 0-7 only.",
          s: [
            "<b>Step 1 — Weight.</b> $1\\times64 + 7\\times8 + 5\\times1$.",
            "<b>Step 2 — Sum.</b> $64 + 56 + 5 = 125$.",
            "<b>Step 3 — Distractor audit.</b> 175 reads the octal as decimal; 93 and 240 misweight positions."
          ],
          a: "$175_8 = 125_{10}$",
          v: "Binary route (each octal digit = 3 bits): $1\\,7\\,5 \\to 001\\,111\\,101 = 1111101_2 = 64+32+16+8+4+1 = 125$ ✓. Where octal survives: Unix permissions — 755 means rwxr-xr-x, three bits per digit."

        }),
        ref: "Handbook p.388" },
      { q: "$10110_2 + 1101_2$ (binary addition):",
        choices: ["$100011_2 = 35_{10}$", "$11011_2$", "$11111_2$", "$100111_2$"],
        correct: 0,
        solution: S({
          c: "Binary addition works like decimal with carries at 2 instead of 10 — or, on a timed exam, convert → add in decimal → convert back, then spot-check one carry.",
          s: [
            "<b>Step 1 — Convert.</b> $10110_2 = 22$; $1101_2 = 13$.",
            "<b>Step 2 — Add.</b> $22 + 13 = 35$.",
            "<b>Step 3 — Back to binary.</b> $35 = 32 + 2 + 1 = 100011_2$.",
            "<b>Step 4 — Distractor audit.</b> $11011 = 27$ and $11111 = 31$ are too small (dropped carries); $100111 = 39$ added a stray 4."
          ],
          a: "$100011_2$ ($= 35_{10}$)",
          v: "Bitwise confirmation (right to left): $0+1=1$; $1+0=1$; $1+1=0$ carry 1; $0+1+1=0$ carry 1; $1+1=0$ carry 1; final carry → 100011 ✓ — both routes agree."

        }),
        ref: "Handbook p.388" },
      { q: "Boolean function $F = AB + A'C$. With $A=1, B=0, C=1$:",
        choices: ["$F = 0$", "$F = 1$", "$F = A$", "Undefined"],
        correct: 0,
        solution: S({
          c: "Evaluating a Boolean expression is substitution plus the operator rules: AND = both must be 1, OR = either suffices, prime (′) = NOT.",
          s: [
            "<b>Step 1 — First term.</b> $AB = 1\\cdot0 = 0$.",
            "<b>Step 2 — Second term.</b> $A' = 0$, so $A'C = 0\\cdot1 = 0$.",
            "<b>Step 3 — OR them.</b> $F = 0 + 0 = 0$.",
            "<b>Step 4 — Distractor audit.</b> 1 requires either AB or A′C true — neither is; '$F = A$' confuses evaluation with simplification; 'undefined' — Boolean functions are total."
          ],
          a: "$F = 0$",
          v: "Structure read: this expression is a 2-to-1 MULTIPLEXER — A selects between B (when A=1) and C (when A=0). At A=1 it outputs B=0 ✓ — recognizing mux patterns turns evaluation into a one-glance answer."

        }),
        ref: "Handbook p.389" },
      { q: "XOR truth table: $A \\oplus B$ = 1 when:",
        choices: ["Inputs differ", "Both 1", "Both 0", "Either is 1"],
        correct: 0,
        solution: S({
          c: "XOR (exclusive OR) = the DIFFERENCE detector: output 1 exactly when the inputs DISAGREE. Algebraically $A\\oplus B = A\\bar B + \\bar AB$.",
          s: [
            "<b>Step 1 — Table.</b> 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0 — ones where inputs differ.",
            "<b>Step 2 — Distractor audit.</b> 'Both 1' is AND; 'both 0' is NOR; 'either is 1' is OR (which stays 1 at 1,1 — XOR's defining difference from OR)."
          ],
          a: "When the inputs differ.",
          v: "The toggling identities that make XOR ubiquitous: $X\\oplus0 = X$, $X\\oplus1 = \\bar X$ (controlled inverter), $X\\oplus Y\\oplus Y = X$ (self-canceling — basis of parity, checksums, RAID, simple ciphers) ✓."

        }),
        ref: "Handbook p.389" },
      { q: "Number of inputs for a 4-to-1 multiplexer's select lines:",
        choices: ["$2$", "$4$", "$3$", "$1$"],
        correct: 0,
        solution: S({
          c: "A multiplexer routes ONE of $N$ data inputs to the output; the select lines form a binary address naming which input — so you need $\\log_2N$ of them.",
          s: [
            "<b>Step 1 — Apply.</b> $\\log_24 = 2$ select lines (addresses 00, 01, 10, 11).",
            "<b>Step 2 — Distractor audit.</b> 4 counts the data inputs; 3 would address an 8:1 mux; 1 only reaches a 2:1."
          ],
          a: "2 select lines.",
          v: "The ladder: 2:1→1, 4:1→2, 8:1→3, 16:1→4 ✓. Bonus identity the FE likes: an $N$:1 mux can implement ANY $\\log_2N$-variable logic function by wiring constants to the data inputs — a mux is a tiny lookup table."

        }),
        ref: "Handbook p.390" },
      { q: "A 4-bit ripple counter clocked at 10 MHz: output frequency of MSB?",
        choices: ["$625$ kHz", "$10$ MHz", "$2.5$ MHz", "$1.25$ MHz"],
        correct: 0,
        solution: S({
          c: "Each counter flip-flop toggles half as often as the one before — every stage divides frequency by 2, so $n$ stages divide by $2^{n}$. The MSB of a 4-bit counter runs at $f_{clk}/16$.",
          s: [
            "<b>Step 1 — Divide.</b> $10\\,\\text{MHz}/2^{4} = 10/16 = 0.625$ MHz $= 625$ kHz.",
            "<b>Step 2 — Distractor audit.</b> 2.5 MHz is ÷4 (2 stages); 1.25 MHz is ÷8 (3 stages); 10 MHz forgot to divide."
          ],
          a: "625 kHz.",
          v: "Period view: the MSB completes one low-high cycle per 16 input clocks — $16\\times100\\,\\text{ns} = 1.6$ µs → 625 kHz ✓. 'Ripple' caveat worth knowing: stage delays accumulate, so very fast clocks need SYNCHRONOUS counters instead."

        }),
        ref: "Handbook p.391" },
      { q: "Hexadecimal $\\text{2B}_{16}$ in decimal:",
        choices: ["$43$", "$31$", "$53$", "$23$"],
        correct: 0,
        solution: S({
          c: "Hex digits run 0-9 then A=10 … F=15; place values are powers of 16.",
          s: [
            "<b>Step 1 — Decode.</b> $2\\times16 + \\text{B}(=11)\\times1 = 32 + 11 = 43$.",
            "<b>Step 2 — Distractor audit.</b> 31 reads B as 15... ($2\\times16+15 = 47$, so 31 actually mixes bases); 23 reads '2B' as decimal-ish; 53 misweights."
          ],
          a: "$\\text{2B}_{16} = 43_{10}$",
          v: "Reverse: $43 \\div 16 = 2$ remainder $11 = \\text{B}$ → 2B ✓. Binary bridge: 2B = 0010 1011 — each hex digit is exactly 4 bits, the reason hex dominates addresses and registers."

        }),
        ref: "Handbook p.388" },
      { q: "Decimal $-5$ in 4-bit two's complement:",
        choices: ["$1011$", "$0101$", "$1101$", "$1010$"],
        correct: 0,
        solution: S({
          c: "Two's complement in 4 bits: write the positive value, invert all bits, add 1. The MSB then carries weight $-8$, making arithmetic uniform for both signs.",
          s: [
            "<b>Step 1 — Positive.</b> $+5 = 0101$.",
            "<b>Step 2 — Invert.</b> $1010$.",
            "<b>Step 3 — Add one.</b> $1011$.",
            "<b>Step 4 — Distractor audit.</b> 1010 stops at one's complement; 1101 is $-3$; 0101 is $+5$ itself."
          ],
          a: "$-5 = 1011_2$",
          v: "Weighted read: $-8 + 0 + 2 + 1 = -5$ ✓; additive check: $0101 + 1011 = 1\\,0000$ → 0 in 4 bits ✓. Range reminder: 4-bit signed spans $-8$ to $+7$ — asymmetric by one, a classic exam factoid."

        }),
        ref: "Handbook p.389" },
      { q: "K-map for $F(A,B,C,D)$ has 1s in cells $\\{1,3,5,7\\}$ (binary positions). Simplified:",
        choices: ["$F = A'D$", "$F = D$", "$F = B$", "$F = ABCD$"],
        correct: 0,
        solution: S({
          c: "Decode each minterm number into ABCD bits, then find which variables stay CONSTANT across all the 1-cells — a group of $2^{k}$ cells eliminates exactly $k$ variables, keeping the constant ones.",
          s: [
            "<b>Step 1 — Decode.</b> $1 = 0001$, $3 = 0011$, $5 = 0101$, $7 = 0111$ (A as MSB).",
            "<b>Step 2 — Scan each variable.</b> A: always 0 → keep as $A'$. D: always 1 → keep as $D$. B and C: take all four combinations → eliminated.",
            "<b>Step 3 — Assemble.</b> Four cells $= 2^{2}$ → drop 2 variables → $F = A'D$.",
            "<b>Step 4 — Distractor audit.</b> $F = D$ alone would need EIGHT cells (1,3,5,7,9,11,13,15) — cells 9-15 (where A=1) are absent; $B$ and $ABCD$ contradict the pattern."
          ],
          a: "$F = A'D$",
          v: "Spot-checks: cell 9 ($1001$, A=1, D=1) is NOT in the list, and $A'D$ correctly gives 0 there — while plain $D$ would wrongly fire ✓; cell 5 ($0101$): $A'D = 1\\cdot1 = 1$ ✓. Group-size rule: 4 cells → 2 literals survive, exactly $A'$ and $D$."

        }),
        ref: "Handbook p.390" },
    ],

    // ====================== Ch 16: CompSys — +6 ======================
    16: [
      { q: "RAM access type: requires periodic refresh:",
        choices: ["DRAM", "SRAM", "Flash", "ROM"],
        correct: 0,
        solution: S({
          c: "The two RAM families store bits differently: DRAM keeps each bit as charge on a tiny capacitor (1 transistor + 1 cap — dense and cheap, but the charge LEAKS, demanding refresh every few ms); SRAM holds bits in a 6-transistor latch (fast, stable, expensive).",
          s: [
            "<b>Step 1 — Match the property.</b> 'Requires periodic refresh' = DRAM, by construction.",
            "<b>Step 2 — Place the others.</b> SRAM: no refresh (bistable latch); Flash/ROM: NON-volatile — they hold data with power off, no refresh concept at all.",
            "<b>Step 3 — Where each lives.</b> DRAM = main memory (GBs, density wins); SRAM = caches (speed wins)."
          ],
          a: "DRAM.",
          v: "Cost logic check: 1T+1C vs 6T per bit explains why you buy gigabytes of DRAM but only megabytes of cache ✓. Refresh overhead steals only ~1-3% of bandwidth — a cheap price for 6× density."

        }),
        ref: "Handbook p.407" },
      { q: "USB 2.0 max speed:",
        choices: ["$480$ Mbps", "$12$ Mbps", "$5$ Gbps", "$100$ Mbps"],
        correct: 0,
        solution: S({
          c: "USB generations by headline speed: 1.x = 12 Mbps (Full Speed), 2.0 = 480 Mbps (Hi-Speed), 3.0 = 5 Gbps (SuperSpeed), 3.1/3.2 = 10-20 Gbps, USB4 = 40 Gbps.",
          s: [
            "<b>Step 1 — Recall.</b> USB 2.0 = 480 Mbps theoretical.",
            "<b>Step 2 — Distractor audit.</b> 12 Mbps is USB 1.x; 5 Gbps is USB 3.0; 100 Mbps is Fast Ethernet sneaking into the wrong list."
          ],
          a: "480 Mbps.",
          v: "Practical throughput runs ~280-320 Mbps (~35-40 MB/s) after protocol overhead — the reason copying a movie to a USB-2 stick crawls while the box says '480' ✓. The ratio between marketing rate and real rate is itself a classic exam-day sanity skill."

        }),
        ref: "Handbook p.407" },
      { q: "A 4-stage pipeline has theoretical speedup of:",
        choices: ["$4$×", "$2$×", "$8$×", "$0.25$×"],
        correct: 0,
        solution: S({
          c: "Pipelining overlaps instruction phases like an assembly line: with $k$ stages, up to $k$ instructions execute simultaneously — IDEAL speedup = the pipeline depth $k$.",
          s: [
            "<b>Step 1 — Apply.</b> 4 stages → 4× ideal speedup.",
            "<b>Step 2 — Why 'ideal'.</b> Hazards spoil it: data dependencies stall, branch mispredictions flush — real gains land nearer 2.5-3× for a 4-stage design.",
            "<b>Step 3 — Distractor audit.</b> 2× undersells; 8× doubles; 0.25× inverts."
          ],
          a: "4× (ideal).",
          v: "Asymptotic check via the time formula: $(N+k-1)t$ vs $Nkt$ — ratio → $k$ as $N$ grows ✓. Depth trade-off worth quoting: deeper pipelines clock faster but pay bigger flush penalties — why the 31-stage Pentium 4 lost to shallower, smarter designs."

        }),
        ref: "Handbook p.408" },
      { q: "Cache miss types include:",
        choices: ["Compulsory, capacity, conflict", "Hit, miss, write", "Read, write, execute", "L1, L2, L3"],
        correct: 0,
        solution: S({
          c: "The '3 Cs' taxonomy sorts cache misses by ROOT CAUSE, each with its own cure: COMPULSORY (first-ever access — unavoidable cold start), CAPACITY (working set bigger than the cache), CONFLICT (too many addresses competing for the same set).",
          s: [
            "<b>Step 1 — Match.</b> Compulsory, capacity, conflict — the canonical triple.",
            "<b>Step 2 — Map cause to cure.</b> Compulsory → prefetching; capacity → bigger cache; conflict → higher associativity.",
            "<b>Step 3 — Distractor audit.</b> 'Hit/miss/write' mixes outcomes with events; 'read/write/execute' are permissions; 'L1/L2/L3' are LEVELS, not miss types."
          ],
          a: "Compulsory, capacity, conflict.",
          v: "Diagnostic power is the point: simulate with a fully-associative cache of the same size — remaining misses are compulsory+capacity; the difference from your real cache is conflict ✓. Multiprocessors add a 4th C: COHERENCE misses from other cores' writes."

        }),
        ref: "Handbook p.407" },
      { q: "Little-endian: 32-bit value 0x12345678 stored at addresses 100-103. Byte at address 100:",
        choices: ["$\\text{0x78}$ (least significant)", "$\\text{0x12}$", "$\\text{0x34}$", "$\\text{0x56}$"],
        correct: 0,
        solution: S({
          c: "Little-endian stores the LEAST significant byte at the LOWEST address — the number is laid down 'little end first'. 0x12345678 splits into bytes 12|34|56|78, most→least significant.",
          s: [
            "<b>Step 1 — Identify the LSB.</b> 0x78.",
            "<b>Step 2 — Place it.</b> Lowest address (100) gets 0x78; then 101→0x56, 102→0x34, 103→0x12.",
            "<b>Step 3 — Distractor audit.</b> 0x12 at 100 would be BIG-endian; 0x34/0x56 are middle bytes."
          ],
          a: "0x78 at address 100.",
          v: "Read-back check: bytes at 100-103 are 78 56 34 12 — reassembled little-endian, that is 0x12345678 ✓. Where it bites: hex dumps of x86 memory look 'backwards', and network code must convert (htonl) because the wire is big-endian."

        }),
        ref: "Handbook p.408" },
      { q: "Direct-mapped cache: a memory address maps to:",
        choices: ["Exactly one cache line", "Any cache line", "Two cache lines (2-way)", "Random line"],
        correct: 0,
        solution: S({
          c: "Cache placement policies form a spectrum of freedom: DIRECT-MAPPED — each address has exactly ONE legal line (index bits decide); N-WAY SET-ASSOCIATIVE — one set of N candidate lines; FULLY ASSOCIATIVE — anywhere.",
          s: [
            "<b>Step 1 — Match.</b> Direct-mapped = exactly one cache line per address.",
            "<b>Step 2 — The trade.</b> One choice = simplest, fastest lookup, but two hot addresses sharing an index evict each other forever (conflict misses).",
            "<b>Step 3 — Distractor audit.</b> 'Any line' is fully associative; 'two lines' is 2-way; 'random' confuses placement with REPLACEMENT policy."
          ],
          a: "Exactly one cache line.",
          v: "The pathological case that justifies associativity: two arrays whose addresses differ by exactly the cache size will thrash a direct-mapped cache at every access — a 2-way design absorbs it ✓. Real CPUs: L1 typically 4-8-way, LLC 12-16-way."

        }),
        ref: "Handbook p.407" },
    ],

    // ====================== Ch 17: Software — +5 ======================
    17: [
      { q: "Selection sort time complexity:",
        choices: ["$O(n^2)$", "$O(n\\log n)$", "$O(n)$", "$O(\\log n)$"],
        correct: 0,
        solution: S({
          c: "Selection sort repeatedly scans the unsorted remainder for its minimum and swaps it into place. The scan shrinks by one each pass but stays linear — total comparisons $\\approx n^{2}/2$, i.e. $O(n^{2})$, and ALWAYS so: it never notices the data is already sorted.",
          s: [
            "<b>Step 1 — Count the structure.</b> Outer loop $n$ passes × inner scan $O(n)$ → $O(n^{2})$.",
            "<b>Step 2 — Best = worst.</b> The min-scan runs fully regardless of order — no early exit, so even sorted input costs $O(n^{2})$ (unlike insertion sort's $O(n)$ best case).",
            "<b>Step 3 — Distractor audit.</b> $O(n\\log n)$ is merge/quick/heap territory; $O(n)$ violates the comparison-sort bound; $O(\\log n)$ couldn't read the input."
          ],
          a: "$O(n^{2})$ — best, average, and worst.",
          v: "Its one redeeming stat: exactly $n-1$ SWAPS, the minimum possible — occasionally useful when writes are expensive (flash) ✓. Rule of thumb: the $O(n^{2})$ trio (bubble, selection, insertion) is fine below ~1000 items, libraries use hybrids beyond."

        }),
        ref: "Handbook p.415" },
      { q: "Hash table collision is handled by:",
        choices: ["Chaining or open addressing", "Stack overflow", "Recursion", "Allocation error"],
        correct: 0,
        solution: S({
          c: "Collisions — two keys hashing to one bucket — are inevitable (pigeonhole principle), so every hash table ships a resolution strategy: CHAINING (each bucket holds a linked list) or OPEN ADDRESSING (probe a sequence of alternative slots until one is free).",
          s: [
            "<b>Step 1 — Match.</b> Chaining or open addressing — the two canonical families.",
            "<b>Step 2 — The trade.</b> Chaining: simple, tolerates load factor > 1, but pointer-chasing hurts cache. Open addressing: contiguous memory (cache-friendly), but performance collapses as the table fills (hence resize near α ≈ 0.7).",
            "<b>Step 3 — Distractor audit.</b> Stack overflow, recursion, allocation errors are unrelated failure modes."
          ],
          a: "Chaining or open addressing.",
          v: "Real-world census: Python dict and Rust HashMap use open addressing; Java HashMap chains (upgrading hot chains to red-black trees since Java 8 — capping worst case at $O(\\log n)$) ✓."

        }),
        ref: "Handbook p.415" },
      { q: "BFS (breadth-first search) typically uses:",
        choices: ["Queue", "Stack", "Heap", "Hashtable"],
        correct: 0,
        solution: S({
          c: "BFS explores a graph LEVEL by level — all distance-1 nodes, then distance-2, … That ordering requires processing vertices in the order discovered: a FIFO QUEUE.",
          s: [
            "<b>Step 1 — Match structure to traversal.</b> BFS ↔ queue; DFS ↔ stack (explicit or the recursion stack).",
            "<b>Step 2 — Why it matters.</b> The queue ordering is exactly what guarantees BFS finds SHORTEST paths (fewest edges) in unweighted graphs.",
            "<b>Step 3 — Distractor audit.</b> Heap = priority queue → Dijkstra (weighted shortest path); hash table only tracks 'visited', it doesn't order anything."
          ],
          a: "Queue (FIFO).",
          v: "Swap test that locks the pairing: take BFS code and replace the queue with a stack — you get DFS, literally ✓. Family tree: BFS (unit weights) → Dijkstra (positive weights, min-heap) → A* (heuristics) — same skeleton, smarter ordering."

        }),
        ref: "Handbook p.415" },
      { q: "Big-O of inserting at the end of a dynamic array (amortized):",
        choices: ["$O(1)$ amortized", "$O(n)$ always", "$O(\\log n)$", "$O(n^2)$"],
        correct: 0,
        solution: S({
          c: "A dynamic array (vector/ArrayList/Python list) usually has spare capacity — append is a plain $O(1)$ write. When full, it DOUBLES capacity and copies everything ($O(n)$) — but doubling makes those copies rare enough that the AVERAGE per append stays constant: $O(1)$ amortized.",
          s: [
            "<b>Step 1 — The accounting.</b> After a resize to $2n$, the next $n$ appends are free of copying — the $O(n)$ copy cost spreads over $n$ cheap operations → $O(1)$ each.",
            "<b>Step 2 — Geometric is the trick.</b> Total copy work for $n$ appends: $1+2+4+\\cdots+n < 2n$ → $O(n)$ total → $O(1)$ amortized. (Growing by a FIXED amount instead would give $O(n)$ per append — the distractor's world.)",
            "<b>Step 3 — Distractor audit.</b> '$O(n)$ always' describes only the resize instants; $O(\\log n)$ and $O(n^{2})$ have no mechanism."
          ],
          a: "$O(1)$ amortized.",
          v: "Implementation census: C++ vector (×2 or ×1.5), Java ArrayList (×1.5), Python list (~×1.125 over-allocation) — every mainstream language relies on exactly this analysis ✓. Caveat: any SINGLE append might still pause for a copy — real-time code pre-reserves."

        }),
        ref: "Handbook p.415" },
      { q: "A binary search tree has $n$ nodes. Average search time (balanced):",
        choices: ["$O(\\log n)$", "$O(n)$", "$O(1)$", "$O(n \\log n)$"],
        correct: 0,
        solution: S({
          c: "Search in a BST walks one node per LEVEL, discarding half the remaining tree at each comparison — so cost = tree height. BALANCED trees keep height at $O(\\log n)$.",
          s: [
            "<b>Step 1 — Apply.</b> Balanced → height $\\approx\\log_2n$ → average search $O(\\log n)$.",
            "<b>Step 2 — The fine print.</b> UNBALANCED worst case (inserting sorted data) degenerates to a linked list: height $n$, search $O(n)$ — the reason self-balancing variants (AVL, red-black) exist.",
            "<b>Step 3 — Distractor audit.</b> $O(n)$ is that degenerate case mislabeled 'average-balanced'; $O(1)$ is hashing's promise; $O(n\\log n)$ is a SORT cost, not a search."
          ],
          a: "$O(\\log n)$ for a balanced tree.",
          v: "Scale feel: $n = 10^{6}$ → ~20 comparisons ✓. The BST-vs-hash decision in one line: hash wins raw lookup ($O(1)$), BST wins ORDER — range queries, min/max, sorted iteration — which is why databases index with trees (B-trees), not hashes."

        }),
        ref: "Handbook p.415" },
    ],
  };

  let added = 0;
  for (const ch of QUESTION_BANK.chapters) {
    if (PACK2[ch.id]) {
      ch.questions.push(...PACK2[ch.id]);
      added += PACK2[ch.id].length;
    }
  }
  console.log(`Pack 2 loaded: +${added} questions. Bank total: ${QUESTION_BANK.chapters.reduce((s, c) => s + c.questions.length, 0)}.`);
})();
