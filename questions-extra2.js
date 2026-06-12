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
          c: "Standard pair (frequency shift): $\\mathcal{L}\\{t^n e^{at}\\} = \\dfrac{n!}{(s-a)^{n+1}}$. Here $n=1$, $a=-2$.",
          s: ["$\\mathcal{L}\\{te^{-2t}\\} = \\dfrac{1!}{(s-(-2))^{1+1}} = \\dfrac{1}{(s+2)^2}$."],
          a: "$\\dfrac{1}{(s+2)^2}$",
          v: "Pole at $s=-2$ with multiplicity 2 → solution has form $te^{-2t}$ in time."
        }),
        ref: "Handbook p.56" },
      { q: "Inverse Laplace of $F(s) = \\dfrac{2s+1}{s^2+s}$:",
        choices: ["$1 + e^{-t}$", "$2 + e^{-t}$", "$1 - e^{-t}$", "$e^{-t}$"],
        correct: 0,
        solution: S({
          c: "Partial fractions: $\\dfrac{2s+1}{s(s+1)} = \\dfrac{A}{s} + \\dfrac{B}{s+1}$.",
          s: [
            "Multiply out: $2s+1 = A(s+1) + Bs$.",
            "Set $s=0$: $1 = A$. Set $s=-1$: $-1 = -B \\Rightarrow B = 1$.",
            "$F(s) = 1/s + 1/(s+1)$. Inverse: $1 + e^{-t}$."
          ],
          a: "$f(t) = 1 + e^{-t}$",
          v: "DC term (1) + decay $(e^{-t})$. At $t\\to\\infty$: $f \\to 1$."
        }),
        ref: "Handbook p.56" },
      { q: "A bandpass filter centered at 100 Hz with Q=10. Bandwidth?",
        choices: ["$10$ Hz", "$1000$ Hz", "$100$ Hz", "$1$ Hz"],
        correct: 0,
        solution: S({
          c: "$BW = f_0/Q$.",
          s: ["$BW = 100/10 = 10$ Hz."],
          a: "$BW = 10$ Hz",
          v: "High Q → narrow BW → more selective."
        }),
        ref: "Handbook p.361" },
      { q: "Time constant of $H(s) = 5/(2s+10)$:",
        choices: ["$0.2$ s", "$2$ s", "$10$ s", "$5$ s"],
        correct: 0,
        solution: S({
          c: "Standard form: rewrite as $H(s) = K/(\\tau s + 1)$. Compare.",
          s: [
            "Factor: $H(s) = 5/[10(0.2s+1)] = 0.5/(0.2s+1)$.",
            "Time constant $\\tau = 0.2$ s."
          ],
          a: "$\\tau = 0.2$ s",
          v: "Pole at $s = -1/0.2 = -5$, so $\\tau = 1/5 = 0.2$ s ✓"
        }),
        ref: "Handbook p.365" },
      { q: "A 2nd-order system has poles at $-1 \\pm j2$. Damping ratio $\\zeta$:",
        choices: ["$\\approx 0.447$", "$0.5$", "$0.707$", "$1.0$"],
        correct: 0,
        solution: S({
          c: "Standard form poles at $s = -\\zeta\\omega_n \\pm j\\omega_n\\sqrt{1-\\zeta^2}$. Read off $\\omega_n$ and $\\zeta$.",
          s: [
            "Real part: $-\\zeta\\omega_n = -1$.",
            "Imag part: $\\omega_n\\sqrt{1-\\zeta^2} = 2$.",
            "$\\omega_n = \\sqrt{1 + 4} = \\sqrt{5} \\approx 2.236$ (since $\\omega_n^2 = (\\zeta\\omega_n)^2 + (\\omega_n\\sqrt{1-\\zeta^2})^2$).",
            "$\\zeta = 1/\\omega_n = 1/\\sqrt{5} \\approx 0.447$."
          ],
          a: "$\\zeta \\approx 0.447$",
          v: "Under-damped (between 0 and 1) → step response oscillates."
        }),
        ref: "Handbook p.366" },
      { q: "Settling time (2%) of a system with $\\zeta=0.5$, $\\omega_n = 10$ rad/s:",
        choices: ["$\\approx 0.8$ s", "$\\approx 2$ s", "$\\approx 0.1$ s", "$\\approx 4$ s"],
        correct: 0,
        solution: S({
          c: "$t_s \\approx 4/(\\zeta\\omega_n)$ for 2% settling.",
          s: [
            "$\\zeta\\omega_n = 0.5 \\cdot 10 = 5$.",
            "$t_s = 4/5 = 0.8$ s."
          ],
          a: "$t_s \\approx 0.8$ s",
          v: "$\\zeta\\omega_n$ controls envelope decay rate; not affected by $\\omega_d$."
        }),
        ref: "Handbook p.366" },
    ],

    // ====================== Ch 8: Signal Processing — +7 ======================
    8: [
      { q: "Voltage gain 100 in dB:",
        choices: ["$40$ dB", "$20$ dB", "$100$ dB", "$2$ dB"],
        correct: 0,
        solution: S({
          c: "Voltage dB: $20\\log_{10}(\\text{ratio})$.",
          s: ["$20\\log 100 = 20 \\cdot 2 = 40$ dB."],
          a: "$40$ dB",
          v: "Voltage ×100 = +40 dB. Power ×100 = +20 dB. Always note voltage vs power!"
        }),
        ref: "Handbook p.375" },
      { q: "Decibel gain of -6 dB corresponds to voltage ratio:",
        choices: ["$\\approx 0.5$", "$0.1$", "$0.3$", "$0.01$"],
        correct: 0,
        solution: S({
          c: "$\\text{dB} = 20\\log_{10}(V_2/V_1) \\Rightarrow V_2/V_1 = 10^{(\\text{dB}/20)}$.",
          s: [
            "$10^{(-6/20)} = 10^{-0.3} = 0.501$."
          ],
          a: "ratio ≈ 0.5",
          v: "Memorize: -6 dB = ×0.5; -20 dB = ×0.1; +3 dB power = ×2."
        }),
        ref: "Handbook p.375" },
      { q: "An 8 kHz audio sampled at 16 kHz. After sampling, can the signal be perfectly reconstructed?",
        choices: ["Only if anti-alias filter rolls off well below 8 kHz", "Yes always", "No, sampling rate too low", "No, need 32 kHz"],
        correct: 0,
        solution: S({
          c: "Nyquist: $f_s > 2 f_{max}$ <i>strictly</i>. $f_s = 16$ kHz means signals up to exactly 8 kHz alias to themselves. In practice, real anti-aliasing filter has finite roll-off, so $f_{max}$ must be set below 8 kHz.",
          s: [
            "Strict Nyquist allows up to $f_s/2 = 8$ kHz (boundary).",
            "Real filters can't be perfectly sharp, so leave guard band.",
            "If anti-alias filter cuts off at 7.5 kHz, sampling at 16 kHz is safe."
          ],
          a: "Only with proper anti-alias filter (cutting below 8 kHz).",
          v: "CD audio uses 44.1 kHz for 20 kHz max signal — 10% guard band."
        }),
        ref: "Handbook p.375" },
      { q: "Inverse Z-transform of $X(z) = z/(z - 0.5)$:",
        choices: ["$0.5^n$ (for $n \\ge 0$)", "$0.5^n u[n-1]$", "$\\delta[n]$", "$2^n$"],
        correct: 0,
        solution: S({
          c: "Standard pair: $\\mathcal{Z}\\{a^n u[n]\\} = z/(z-a) = 1/(1-az^{-1})$.",
          s: [
            "Match with $a = 0.5$.",
            "Inverse: $x[n] = (0.5)^n u[n]$."
          ],
          a: "$x[n] = 0.5^n$ for $n \\ge 0$",
          v: "Pole at $z = 0.5$ inside unit circle → stable signal (decays)."
        }),
        ref: "Handbook p.376" },
      { q: "An IIR filter with transfer function $H(z) = 1/(1 - 0.9 z^{-1})$ is:",
        choices: ["Stable (pole inside unit circle)", "Unstable", "Marginally stable", "Causes oscillation"],
        correct: 0,
        solution: S({
          c: "Digital system stable iff all poles inside unit circle $|z| < 1$.",
          s: [
            "Pole: $1 - 0.9 z^{-1} = 0 \\Rightarrow z = 0.9$.",
            "$|0.9| < 1$ → stable."
          ],
          a: "Stable",
          v: "If coefficient were $\\ge 1$: $H(z) = 1/(1-1.1 z^{-1})$ would have pole at $z=1.1$ outside circle → unstable."
        }),
        ref: "Handbook p.376" },
      { q: "Convolution of $\\{1, 2\\}$ and $\\{1, 1\\}$ yields:",
        choices: ["$\\{1, 3, 2\\}$", "$\\{2, 3\\}$", "$\\{1, 2, 1\\}$", "$\\{3, 3\\}$"],
        correct: 0,
        solution: S({
          c: "Convolution: $y[n] = \\sum_k x[k] h[n-k]$. Like polynomial multiplication.",
          s: [
            "Treat sequences as polynomials: $(1 + 2x)(1 + x) = 1 + x + 2x + 2x^2 = 1 + 3x + 2x^2$.",
            "Result: $\\{1, 3, 2\\}$."
          ],
          a: "$\\{1, 3, 2\\}$",
          v: "Output length: $L_x + L_h - 1 = 2+2-1 = 3$ ✓"
        }),
        ref: "Handbook p.376" },
      { q: "A Butterworth filter is characterized by:",
        choices: ["Maximally flat passband", "Ripple in passband", "Ripple in stopband", "Linear phase"],
        correct: 0,
        solution: S({
          c: "Filter families: <b>Butterworth</b> — flat passband, monotonic rolloff. <b>Chebyshev</b> — ripple in either pass or stop band, steeper rolloff. <b>Bessel</b> — linear phase but slower rolloff.",
          s: [
            "Butterworth is most common where flatness matters more than sharp cutoff.",
            "Tradeoff: butterworth slower rolloff than equiripple."
          ],
          a: "Maximally flat passband",
          v: "Higher-order Butterworth → sharper rolloff but more components."
        }),
        ref: "Handbook p.375" },
    ],

    // ====================== Ch 9: Electronics — +12 ======================
    9: [
      { q: "An ideal op-amp has slew rate of:",
        choices: ["Infinite", "$1$ V/µs", "$10$ V/µs", "$0$"],
        correct: 0,
        solution: S({
          c: "Ideal op-amp assumptions: infinite gain, infinite input impedance, zero output impedance, infinite bandwidth, infinite slew rate.",
          s: [
            "Real op-amps have finite slew rate (e.g., 0.5-50 V/µs typical).",
            "Slew rate limits how fast the output can change."
          ],
          a: "Infinite (ideal)",
          v: "Slow op-amp + fast signal → triangular distortion of square wave."
        }),
        ref: "Handbook p.380" },
      { q: "Op-amp follower (voltage buffer): $v_{out}/v_{in}$ =",
        choices: ["$1$", "$\\infty$", "$-1$", "$0$"],
        correct: 0,
        solution: S({
          c: "Voltage follower = non-inverting amp with feedback = direct connection (no $R_f$, $R_{in}$ infinite or absent). Gain $= 1$.",
          s: [
            "Special case of non-inverting: $1 + R_f/R_{in}$ with $R_f = 0$, $R_{in} = \\infty$ → gain = 1."
          ],
          a: "Gain = 1 (unity)",
          v: "Use: impedance matching/isolation. Very high input Z, very low output Z."
        }),
        ref: "Handbook p.380" },
      { q: "An op-amp differentiator: input $v_{in}(t) = 3t$ V (ramp), $R = 1$ k$\\Omega$, $C = 1$ µF. Output:",
        choices: ["$-3$ mV (constant)", "$+3$ V", "$0$", "Ramp output"],
        correct: 0,
        solution: S({
          c: "Op-amp differentiator: $v_{out} = -RC \\cdot (dv_{in}/dt)$.",
          s: [
            "$dv_{in}/dt = 3$ V/s.",
            "$RC = 10^3 \\cdot 10^{-6} = 10^{-3}$.",
            "$v_{out} = -10^{-3} \\cdot 3 = -3 \\times 10^{-3}$ V = $-3$ mV."
          ],
          a: "$v_{out} = -3$ mV",
          v: "Differentiator has issues with high-frequency noise — usually avoided in favor of integrator + math."
        }),
        ref: "Handbook p.380" },
      { q: "BJT in saturation: $V_{CE}$ is approximately:",
        choices: ["$0.2$ V", "$0.7$ V", "$5$ V", "Equal to $V_{CC}$"],
        correct: 0,
        solution: S({
          c: "Three BJT regions: <b>Cut-off</b> ($V_{BE}<0.6$, no $I_C$); <b>Active</b> ($V_{BE}\\approx 0.7$, $V_{CE}>V_{CE,sat}$, $I_C = \\beta I_B$); <b>Saturation</b> ($V_{CE}\\approx 0.2$ V, $I_C < \\beta I_B$).",
          s: [
            "Saturation: both junctions forward biased; $V_{CE,sat} \\approx 0.2$ V."
          ],
          a: "$V_{CE,sat} \\approx 0.2$ V",
          v: "Switch use: cut-off = OFF, saturation = ON (low drop)."
        }),
        ref: "Handbook p.384" },
      { q: "Emitter-follower (common-collector) voltage gain:",
        choices: ["≈1 (slightly less)", "≈$\\beta$", "$\\beta+1$", "$\\beta R_E/r_e$"],
        correct: 0,
        solution: S({
          c: "CC config: output across $R_E$ tracks input minus $V_{BE}$. Voltage gain $\\approx R_E/(R_E + r_e) \\approx 1$ for large $R_E$.",
          s: [
            "Useful for current gain ($\\beta$) and low output impedance (~$r_e$).",
            "Often used as buffer between high-Z source and low-Z load."
          ],
          a: "Voltage gain ≈ 1",
          v: "Current gain still large ($\\beta+1$) — that's the value."
        }),
        ref: "Handbook p.384" },
      { q: "A 5V Zener regulator with 220Ω resistor from 12V source feeding a 1k load. Current through Zener (assume ideal):",
        choices: ["$\\approx 26.8$ mA", "$31.8$ mA", "$\\approx 5$ mA", "$\\approx 12$ mA"],
        correct: 0,
        solution: S({
          c: "$I_{Zener} = I_{series} - I_{load}$. Zener absorbs the difference.",
          s: [
            "$V_R = 12 - 5 = 7$ V; $I_R = 7/220 = 31.8$ mA.",
            "$I_{load} = 5/1000 = 5$ mA.",
            "$I_Z = 31.8 - 5 = 26.8$ mA."
          ],
          a: "$I_Z \\approx 26.8$ mA",
          v: "Designer must ensure $I_Z$ stays in valid Zener range under input + load variation."
        }),
        ref: "Handbook p.383" },
      { q: "Standard 7805 voltage regulator IC has output of:",
        choices: ["$5$ V (positive)", "$-5$ V", "$7$ V", "Variable"],
        correct: 0,
        solution: S({
          c: "78xx series = positive linear regulators where xx is output voltage. 79xx = negative.",
          s: [
            "7805: +5V at up to 1.5A typical.",
            "7812: +12V; 7905: -5V; 7912: -12V.",
            "Dropout voltage: ~2V — input must be ≥7V for stable 5V output."
          ],
          a: "+5V",
          v: "LDO (low-dropout) variants need only ~0.5V dropout."
        }),
        ref: "Handbook p.383" },
      { q: "A common-source MOSFET amp: small-signal gain $A_v$ ≈ ",
        choices: ["$-g_m R_D$", "$+R_D/r_o$", "$+1$", "$-\\beta R_D$"],
        correct: 0,
        solution: S({
          c: "CS MOSFET amp (ignoring $r_o$, source bypassed): $A_v = -g_m R_D$.",
          s: [
            "$g_m$ = transconductance (A/V), increases with bias current.",
            "Negative → inverting.",
            "$\\beta$ is a BJT parameter, doesn't apply."
          ],
          a: "$A_v = -g_m R_D$",
          v: "$g_m$ for MOSFET: $g_m = 2I_D/(V_{GS}-V_{th}) = \\sqrt{2 k I_D}$."
        }),
        ref: "Handbook p.386" },
      { q: "Full-wave bridge rectifier: number of diodes needed:",
        choices: ["$4$", "$2$", "$1$", "$8$"],
        correct: 0,
        solution: S({
          c: "Bridge rectifier uses 4 diodes in a diamond configuration. Two conduct each half-cycle.",
          s: [
            "Half-wave: 1 diode.",
            "Center-tapped full-wave: 2 diodes + center-tapped transformer.",
            "Bridge full-wave: 4 diodes, no center tap needed."
          ],
          a: "4 diodes",
          v: "Bridge has lower transformer cost but two diode drops per half-cycle (~1.4V loss)."
        }),
        ref: "Handbook p.383" },
      { q: "Buck converter: $V_{out}/V_{in}$ = ",
        choices: ["Duty cycle $D$", "$1/D$", "$D/(1-D)$", "$1-D$"],
        correct: 0,
        solution: S({
          c: "Buck (step-down) converter: continuous-conduction output is $V_{out} = D \\cdot V_{in}$ where $D$ = duty cycle (0 to 1).",
          s: [
            "Higher duty → higher output.",
            "Boost: $V_{out} = V_{in}/(1-D)$ — choice B.",
            "Buck-boost: $V_{out} = -V_{in} \\cdot D/(1-D)$ — choice C."
          ],
          a: "$V_{out} = D \\cdot V_{in}$",
          v: "Battery charger: PWM gates the buck, duty controlled to regulate output."
        }),
        ref: "Handbook p.383" },
      { q: "Common-emitter amp with bypass capacitor on emitter resistor: at low frequencies, gain:",
        choices: ["Decreases (high-pass behavior)", "Increases", "Stays constant", "Goes to zero exactly"],
        correct: 0,
        solution: S({
          c: "Bypass cap shorts emitter resistor at high freq → full gain. At low freq, cap reactance is high → emitter degeneration reduces gain.",
          s: [
            "$X_C = 1/(\\omega C)$ — large at low freq.",
            "At very low freq: gain limited by $R_C / (r_e + R_E)$.",
            "At high freq: gain rises to $R_C/r_e$ (much larger)."
          ],
          a: "Decreases at low freq (high-pass shape)",
          v: "Coupling caps also create low-freq cutoff — typical audio amps have BW from ~20 Hz to ~20 kHz."
        }),
        ref: "Handbook p.384" },
      { q: "JFET in pinch-off (saturation) operates with:",
        choices: ["$V_{DS} \\ge V_{GS} - V_p$", "Any $V_{DS}$", "$V_{DS} = 0$", "$V_{GS} > 0$ (n-ch)"],
        correct: 0,
        solution: S({
          c: "JFET saturation (pinch-off): $V_{DS} \\ge V_{GS} - V_p$ where $V_p$ is the pinch-off voltage. Channel pinched at drain end; current ~constant.",
          s: [
            "n-channel JFET: $V_{GS}$ is negative or zero ($V_p < 0$).",
            "In ohmic region: $V_{DS}$ small, $I_D$ varies linearly.",
            "$I_D = I_{DSS}(1 - V_{GS}/V_p)^2$ in saturation."
          ],
          a: "$V_{DS} \\ge V_{GS} - V_p$",
          v: "JFETs are depletion-mode devices — conduct at $V_{GS} = 0$, off when $V_{GS} = V_p$."
        }),
        ref: "Handbook p.386" },
    ],

    // ====================== Ch 10: Power — +12 ======================
    10: [
      { q: "A 3-phase wye load has $V_{LN}=277$ V and $Z_\\phi = 10 + j6\\ \\Omega$. Line current:",
        choices: ["$\\approx 23.8$ A", "$\\approx 27.7$ A", "$\\approx 41.3$ A", "$\\approx 100$ A"],
        correct: 0,
        solution: S({
          c: "Wye: $I_L = I_\\phi = V_{LN}/|Z_\\phi|$.",
          s: [
            "$|Z| = \\sqrt{100 + 36} = \\sqrt{136} \\approx 11.66\\ \\Omega$.",
            "$I_L = 277/11.66 \\approx 23.76$ A."
          ],
          a: "$I_L \\approx 23.8$ A",
          v: "Line current equals phase current for Y configuration."
        }),
        ref: "Handbook p.363" },
      { q: "Per-phase power for the load above ($V_{LN}=277$, $Z=10+j6$):",
        choices: ["$\\approx 5.65$ kW", "$\\approx 8.0$ kW", "$\\approx 3.4$ kW", "$11.5$ kW"],
        correct: 0,
        solution: S({
          c: "$P_\\phi = I_\\phi^2 \\cdot R$ (real power in phase impedance).",
          s: [
            "$I_\\phi = 23.76$ A.",
            "$P_\\phi = 23.76^2 \\cdot 10 = 5644$ W $\\approx 5.64$ kW."
          ],
          a: "$P_\\phi \\approx 5.65$ kW",
          v: "Total 3-φ power: $3 \\cdot 5.64 = 16.93$ kW."
        }),
        ref: "Handbook p.363" },
      { q: "Step-up transformer 11 kV / 132 kV. Turns ratio:",
        choices: ["$1:12$", "$12:1$", "$121:1$", "$1:11$"],
        correct: 0,
        solution: S({
          c: "Turns ratio = $V_1:V_2$.",
          s: [
            "$N_1/N_2 = V_1/V_2 = 11/132 = 1/12$, so ratio is $1:12$ (primary:secondary)."
          ],
          a: "$1:12$ (step-up)",
          v: "Step-up: more secondary turns, higher V, lower I. Used at generator → transmission."
        }),
        ref: "Handbook p.364" },
      { q: "Transformer efficiency at full load: copper losses = 200 W; iron losses = 100 W; output = 9700 W. Efficiency:",
        choices: ["$\\approx 97\\%$", "$\\approx 99\\%$", "$\\approx 90\\%$", "$\\approx 98\\%$"],
        correct: 0,
        solution: S({
          c: "$\\eta = P_{out}/(P_{out} + losses)$.",
          s: [
            "Total losses: $200+100=300$ W.",
            "$P_{in} = 9700 + 300 = 10000$ W.",
            "$\\eta = 9700/10000 = 0.97 = 97\\%$."
          ],
          a: "$\\eta \\approx 97\\%$",
          v: "Maximum efficiency occurs when copper = iron loss; here they're not equal, so we're not at peak."
        }),
        ref: "Handbook p.364" },
      { q: "Synchronous generator: 6-pole machine at 60 Hz. RPM:",
        choices: ["$1200$", "$3600$", "$900$", "$1800$"],
        correct: 0,
        solution: S({
          c: "$n_s = 120f/p$.",
          s: ["$n_s = 120(60)/6 = 1200$ rpm."],
          a: "$n_s = 1200$ rpm",
          v: "Wind turbines often have many poles (e.g., 96 pole at 6 rpm = same 1200 rpm equivalent)."
        }),
        ref: "Handbook p.365" },
      { q: "Power factor of pure resistor in AC circuit:",
        choices: ["$1.0$ (unity)", "$0$", "$0.707$", "Negative"],
        correct: 0,
        solution: S({
          c: "Resistor: V and I in phase, $\\theta = 0$, $pf = \\cos 0 = 1$.",
          s: ["Pure R: no reactive component, all power is real."],
          a: "$pf = 1$",
          v: "Pure L or C alone: $pf = 0$ (90° phase shift), no real power."
        }),
        ref: "Handbook p.362" },
      { q: "An induction motor's <b>starting</b> current is typically:",
        choices: ["5-7× rated full-load current", "Same as FL", "1.2× FL", "Less than FL"],
        correct: 0,
        solution: S({
          c: "At start, slip $s=1$, rotor impedance is mostly resistive and low. Locked-rotor current is much larger than FL.",
          s: [
            "Typical: 5-7× rated at start.",
            "Mitigation: soft starters, VFDs, autotransformer starters reduce inrush.",
            "Voltage sag on lights when fridges/AC start is from this."
          ],
          a: "5-7× rated FL current",
          v: "Why circuit breakers must withstand momentary inrush without nuisance tripping."
        }),
        ref: "Handbook p.365" },
      { q: "Wye to Delta voltage relation, line voltage:",
        choices: ["$V_{LL,\\Delta} = V_{LL,Y}$ if same line", "$V_{LL,\\Delta} = \\sqrt{3}\\,V_{LL,Y}$", "$V_{LL,\\Delta} = V_{LL,Y}/\\sqrt{3}$", "Always equal"],
        correct: 0,
        solution: S({
          c: "Both Y and $\\Delta$ on the same 3-wire system see the <b>same line-to-line voltage</b>. What differs is the phase voltage (= $V_{LL}/\\sqrt{3}$ in Y, = $V_{LL}$ in $\\Delta$).",
          s: [
            "Line voltage is fixed by the source.",
            "Y phase voltage: $V_{LN} = V_{LL}/\\sqrt{3}$.",
            "$\\Delta$ phase voltage: $V_\\phi = V_{LL}$."
          ],
          a: "$V_{LL}$ same — both connect to same lines.",
          v: "Source vs load configurations independent. Δ-Y transformer is common."
        }),
        ref: "Handbook p.363" },
      { q: "A 3-φ load draws $P = 15$ kW at $pf = 0.8$ lagging. Reactive power $Q$:",
        choices: ["$\\approx 11.25$ kVAR", "$\\approx 18.75$ kVAR", "$\\approx 15$ kVAR", "$\\approx 9$ kVAR"],
        correct: 0,
        solution: S({
          c: "$Q = P \\cdot \\tan\\theta$ where $\\theta = \\arccos(pf)$.",
          s: [
            "$\\theta = \\arccos 0.8 = 36.87°$.",
            "$\\tan 36.87° = 0.75$.",
            "$Q = 15 \\cdot 0.75 = 11.25$ kVAR."
          ],
          a: "$Q \\approx 11.25$ kVAR",
          v: "Check: $|S| = P/pf = 15/0.8 = 18.75$ kVA. $|S|^2 = P^2 + Q^2$ → $351.6 = 225 + 126.6$ ✓"
        }),
        ref: "Handbook p.362" },
      { q: "A primary side has 100 A AC and secondary has 5 A. Step-up or step-down?",
        choices: ["Step-up (V increases, I decreases)", "Step-down", "Cannot tell", "1:1 isolation"],
        correct: 0,
        solution: S({
          c: "Step-up: secondary V > primary, so secondary I < primary (power conserved).",
          s: [
            "Primary 100 A; Secondary 5 A (less).",
            "Lower I on secondary → higher V on secondary → step-UP."
          ],
          a: "Step-up",
          v: "Turn ratio: $a = I_2/I_1 = 5/100 = 1/20$ (this is the ratio defined as $V_1/V_2$, equivalent to $1:20$ step-up)."
        }),
        ref: "Handbook p.364" },
      { q: "A DC motor with $V_a = 240$ V, $R_a = 0.5\\ \\Omega$, drawing $I_a = 30$ A. Back EMF:",
        choices: ["$225$ V", "$240$ V", "$15$ V", "$255$ V"],
        correct: 0,
        solution: S({
          c: "DC motor: $V_a = E_b + I_a R_a$ (terminal voltage = back EMF + armature drop).",
          s: [
            "$E_b = V_a - I_a R_a = 240 - 30(0.5) = 240 - 15 = 225$ V."
          ],
          a: "$E_b = 225$ V",
          v: "Speed: $E_b \\propto \\omega$. As load increases, $I_a$ rises, $E_b$ drops, motor slows."
        }),
        ref: "Handbook p.365" },
      { q: "An induction motor at full load: efficiency 90%, $pf = 0.85$. Input power for 10 hp output:",
        choices: ["$\\approx 8.29$ kW", "$7.46$ kW", "$\\approx 8.78$ kW", "$\\approx 12$ kW"],
        correct: 0,
        solution: S({
          c: "$P_{in} = P_{out}/\\eta$. ($pf$ not needed for $P_{in}$ — it relates real vs apparent.)",
          s: [
            "1 hp = 746 W → 10 hp = 7460 W output.",
            "$P_{in} = 7460/0.9 = 8289$ W $\\approx 8.29$ kW."
          ],
          a: "$P_{in} \\approx 8.29$ kW",
          v: "Apparent input: $|S| = P_{in}/pf = 8289/0.85 = 9752$ VA. Utility bills you for kVA, not kW!"
        }),
        ref: "Handbook p.365" },
    ],

    // ====================== Ch 11: EM — +5 ======================
    11: [
      { q: "Speed of EM wave in vacuum:",
        choices: ["$3 \\times 10^8$ m/s", "$3 \\times 10^6$ m/s", "$1.5 \\times 10^8$ m/s", "Depends on frequency"],
        correct: 0,
        solution: S({
          c: "$c = 1/\\sqrt{\\mu_0 \\varepsilon_0} \\approx 2.998 \\times 10^8$ m/s in vacuum. Independent of frequency.",
          s: ["Memorize: $c \\approx 3 \\times 10^8$ m/s = 300,000 km/s."],
          a: "$c = 3 \\times 10^8$ m/s",
          v: "Wavelength: $\\lambda = c/f$. At 60 Hz: $\\lambda = 5000$ km. At 1 GHz: $\\lambda = 30$ cm."
        }),
        ref: "Handbook p.355" },
      { q: "Skin depth $\\delta$ in good conductor decreases as:",
        choices: ["Frequency increases", "Frequency decreases", "Conductivity decreases", "Independent of frequency"],
        correct: 0,
        solution: S({
          c: "Skin depth: $\\delta = 1/\\sqrt{\\pi f \\mu \\sigma}$. Higher $f$ or higher $\\sigma$ → smaller $\\delta$.",
          s: [
            "At 60 Hz in Cu: $\\delta \\approx 8.5$ mm.",
            "At 1 MHz in Cu: $\\delta \\approx 65$ µm.",
            "Why high-freq RF needs tube/Litz wire — current only flows in thin outer layer."
          ],
          a: "Decreases with $f$",
          v: "Beyond a few $\\delta$, current is essentially zero (exponential decay)."
        }),
        ref: "Handbook p.368" },
      { q: "Force on a 10 cm wire carrying 5 A in a 0.2 T magnetic field (perpendicular):",
        choices: ["$0.1$ N", "$1$ N", "$0.01$ N", "$10$ N"],
        correct: 0,
        solution: S({
          c: "$F = BIL$ for wire perpendicular to B. (General: $\\vec{F} = I \\vec{L} \\times \\vec{B}$.)",
          s: ["$F = (0.2)(5)(0.1) = 0.1$ N."],
          a: "$F = 0.1$ N",
          v: "This is how motors work — repeatedly applied to a coil rotor."
        }),
        ref: "Handbook p.355" },
      { q: "Maxwell's law $\\nabla \\cdot \\vec{B} = 0$ means:",
        choices: ["No magnetic monopoles", "B-field has no divergence-free part", "$\\vec{B} = 0$ everywhere", "Charge is conserved"],
        correct: 0,
        solution: S({
          c: "Gauss's law for magnetism: magnetic flux through any closed surface is zero. Magnetic field lines have no beginning or end.",
          s: [
            "Equivalent to: no isolated magnetic charge (monopole).",
            "Magnetic field lines always close on themselves."
          ],
          a: "No isolated magnetic monopoles",
          v: "Active research areas search for monopoles. If found, this law would need modification."
        }),
        ref: "Handbook p.355" },
      { q: "Wavelength of a 100 MHz FM radio wave:",
        choices: ["$3$ m", "$30$ m", "$30$ cm", "$0.3$ km"],
        correct: 0,
        solution: S({
          c: "$\\lambda = c/f$.",
          s: ["$\\lambda = (3\\times 10^8)/(10^8) = 3$ m."],
          a: "$\\lambda = 3$ m",
          v: "FM antennas are often quarter-wave: $\\lambda/4 = 75$ cm — matches typical car antenna length."
        }),
        ref: "Handbook p.368" },
    ],

    // ====================== Ch 12: Control — +7 ======================
    12: [
      { q: "A unity feedback system has $G(s)H(s) = K/(s(s+2))$. For the closed-loop step input, steady-state error is zero because this is:",
        choices: ["Type 1 system", "Type 0", "Type 2", "Type -1"],
        correct: 0,
        solution: S({
          c: "System type = number of integrators (poles at origin) in $G(s)H(s)$. Type-1 → zero step error.",
          s: [
            "$G(s)H(s) = K/(s(s+2))$ has one $s$ in denominator → type 1.",
            "Type-1 to step: $e_{ss} = 0$ (one free integrator).",
            "Type-1 to ramp: $e_{ss} = 1/K_v$ (finite)."
          ],
          a: "Type 1",
          v: "To zero out ramp error, you need Type-2 (two integrators)."
        }),
        ref: "Handbook p.366" },
      { q: "Open-loop transfer function $G(s) = 10/(s+1)(s+5)$. DC gain ($s=0$):",
        choices: ["$2$", "$10$", "$50$", "$0.5$"],
        correct: 0,
        solution: S({
          c: "Substitute $s=0$.",
          s: ["$G(0) = 10/((1)(5)) = 10/5 = 2$."],
          a: "$2$",
          v: "Open-loop step error at infinity: $1/(1+K_p) = 1/3$ if no feedback compensation."
        }),
        ref: "Handbook p.365" },
      { q: "A PI controller has transfer function $K_p + K_i/s$. Effect of integral term:",
        choices: ["Eliminates steady-state error", "Speeds up response", "Reduces overshoot", "Adds damping"],
        correct: 0,
        solution: S({
          c: "Integral term provides cumulative correction → eliminates DC error. Adds a pole at origin (raises type).",
          s: [
            "Proportional: gain only, can't fully eliminate offset.",
            "Integral: continues correcting until error is zero.",
            "Derivative: anticipates change, adds damping/speed."
          ],
          a: "Eliminates steady-state error",
          v: "Tradeoff: integral can cause overshoot and integral windup if not tuned."
        }),
        ref: "Handbook p.366" },
      { q: "Phase shift of a $G(s) = 1/(s+10)$ at $\\omega = 10$ rad/s:",
        choices: ["$-45°$", "$0°$", "$-90°$", "$45°$"],
        correct: 0,
        solution: S({
          c: "$G(j\\omega) = 1/(j\\omega + 10)$. Phase = $-\\arctan(\\omega/10)$.",
          s: [
            "At $\\omega = 10$: $\\arctan(1) = 45°$.",
            "Phase: $-45°$ (negative because pole)."
          ],
          a: "$-45°$",
          v: "At pole frequency $\\omega = a$: magnitude is $-3$ dB, phase is $-45°$. As $\\omega \\to \\infty$, phase $\\to -90°$."
        }),
        ref: "Handbook p.366" },
      { q: "Lead compensator: $C(s) = (s+z)/(s+p)$ with $z < p$. Effect on phase:",
        choices: ["Adds phase lead (positive phase shift)", "Adds phase lag", "Cancels original phase", "No effect"],
        correct: 0,
        solution: S({
          c: "Lead: $z < p$ — zero at lower freq than pole. Net phase positive over frequencies between $z$ and $p$.",
          s: [
            "Used to add phase margin → improves transient response.",
            "Lag: $z > p$ — reverse, adds gain at low freq, reduces error.",
            "Lead-lag: combines both effects."
          ],
          a: "Adds phase lead",
          v: "Max phase lead: $\\phi_{max} = \\arcsin((p-z)/(p+z))$, at $\\omega = \\sqrt{pz}$."
        }),
        ref: "Handbook p.366" },
      { q: "Open-loop system $G(s)H(s)$ has 2 RHP zeros and 1 RHP pole. Closed-loop with no encirclement: Nyquist says how many RHP closed-loop poles?",
        choices: ["$1$ (still unstable)", "$0$ (stable)", "$2$", "Cannot tell"],
        correct: 0,
        solution: S({
          c: "Nyquist criterion: $N = P - Z$ where $N$ is clockwise encirclements of $-1$, $P$ is open-loop RHP poles, $Z$ is closed-loop RHP poles. Solve for $Z$.",
          s: [
            "Given: $N = 0$ (no encirclement), $P = 1$.",
            "$Z = P - N = 1 - 0 = 1$.",
            "1 RHP closed-loop pole → unstable."
          ],
          a: "1 RHP pole (unstable)",
          v: "Stability requires $Z = 0$, so we'd need $N = P = 1$ encirclement."
        }),
        ref: "Handbook p.365" },
      { q: "A system with $G(s) = K(s+2)/(s(s+5)(s+10))$ — number of branches on root locus:",
        choices: ["$3$ (equal to # poles)", "$2$ (# zeros)", "$1$", "$5$"],
        correct: 0,
        solution: S({
          c: "Root locus has $n = \\max(P, Z)$ branches, where $P$ is # poles, $Z$ is # zeros (counted in extended complex plane). Usually = # poles.",
          s: [
            "Poles: $s = 0, -5, -10$. Three poles.",
            "Zeros: $s = -2$. One finite zero (two at infinity).",
            "Branches: 3 (matches # poles)."
          ],
          a: "3 branches",
          v: "One branch ends at $s=-2$ (the zero), two go to infinity along asymptotes."
        }),
        ref: "Handbook p.366" },
    ],

    // ====================== Ch 13: Comm — +7 ======================
    13: [
      { q: "Bandwidth efficiency = ",
        choices: ["bits/sec per Hz", "Hz per bit", "Bits absolute", "Power per Hz"],
        correct: 0,
        solution: S({
          c: "Spectral (bandwidth) efficiency: information rate per unit bandwidth.",
          s: [
            "Higher modulation order (QAM > QPSK > BPSK) → higher bps/Hz but requires higher SNR.",
            "BPSK: ~1 bps/Hz; QPSK: ~2; 16-QAM: ~4; 64-QAM: ~6."
          ],
          a: "bits/sec per Hz",
          v: "5G aims for >5 bps/Hz spectral efficiency."
        }),
        ref: "Handbook p.371" },
      { q: "Single-Sideband (SSB) AM vs DSB-LC, bandwidth:",
        choices: ["Half (only $f_m$)", "Same ($2 f_m$)", "Double", "Independent"],
        correct: 0,
        solution: S({
          c: "SSB transmits only one sideband → bandwidth equals message bandwidth. DSB-LC transmits both sidebands plus carrier → BW = $2f_m$.",
          s: [
            "SSB: $BW = f_m$ (half of DSB).",
            "Tradeoff: SSB needs more complex receiver but uses half spectrum + no carrier waste."
          ],
          a: "Half ($f_m$)",
          v: "Why amateur radio uses SSB for voice — efficient spectrum use."
        }),
        ref: "Handbook p.371" },
      { q: "Information rate for a 4-level signal at symbol rate 5 kbaud:",
        choices: ["$10$ kbps", "$5$ kbps", "$20$ kbps", "$2.5$ kbps"],
        correct: 0,
        solution: S({
          c: "Bits per symbol: $\\log_2(M)$ where $M$ = number of levels. Bit rate = symbol rate × bits/symbol.",
          s: [
            "$M = 4 \\Rightarrow \\log_2 4 = 2$ bits/symbol.",
            "$R_b = 5000 \\cdot 2 = 10{,}000$ bps."
          ],
          a: "10 kbps",
          v: "Baud = symbols/sec; bps = bits/sec. They're equal only for binary signaling."
        }),
        ref: "Handbook p.371" },
      { q: "TDM combines two 64 kbps channels onto a single line. Minimum line rate:",
        choices: ["$128$ kbps", "$64$ kbps", "$32$ kbps", "$256$ kbps"],
        correct: 0,
        solution: S({
          c: "TDM: alternating samples on a single line. Total rate = sum of individual rates (plus minor overhead).",
          s: [
            "$2 \\cdot 64 = 128$ kbps minimum."
          ],
          a: "128 kbps",
          v: "DS1 (T-carrier) line is 1.544 Mbps for 24 voice channels (24×64 + framing overhead)."
        }),
        ref: "Handbook p.371" },
      { q: "BPSK requires SNR of about ___ for $10^{-5}$ BER:",
        choices: ["$\\approx 9.6$ dB", "$\\approx 0$ dB", "$\\approx 30$ dB", "$\\approx -10$ dB"],
        correct: 0,
        solution: S({
          c: "BPSK theoretical BER vs SNR: $BER = Q(\\sqrt{2 E_b/N_0})$. For BER = $10^{-5}$, $E_b/N_0 \\approx 9.6$ dB.",
          s: [
            "$Q(x) = 10^{-5} \\Rightarrow x \\approx 4.265$.",
            "$\\sqrt{2 E_b/N_0} = 4.265 \\Rightarrow E_b/N_0 \\approx 9.1$ (in linear units) $\\approx 9.6$ dB."
          ],
          a: "$\\approx 9.6$ dB",
          v: "Higher-order modulations need more SNR for same BER (more constellation points → smaller min distance)."
        }),
        ref: "Handbook p.371" },
      { q: "AM modulator output for $m=0$ is:",
        choices: ["Just the carrier (no info)", "Zero signal", "Both sidebands only", "Audio only"],
        correct: 0,
        solution: S({
          c: "AM: $s(t) = A_c[1 + m\\cos(\\omega_m t)]\\cos(\\omega_c t)$. With $m=0$: $s(t) = A_c \\cos(\\omega_c t)$ — pure carrier.",
          s: [
            "No modulation, only carrier transmitted.",
            "No info → no sidebands."
          ],
          a: "Just the carrier",
          v: "$m$ controls how much the envelope varies. Past $m=1$ → over-modulation (distortion)."
        }),
        ref: "Handbook p.371" },
      { q: "Nyquist signaling theorem (for ISI-free): max symbol rate over BW $B$ is:",
        choices: ["$2B$ symbols/sec", "$B$", "$B/2$", "$4B$"],
        correct: 0,
        solution: S({
          c: "Nyquist's noiseless channel capacity: $C = 2B$ symbols/sec for an ideal channel of bandwidth $B$.",
          s: [
            "This is different from Shannon (which includes noise).",
            "For $M$-level signaling with no noise: $C = 2B \\log_2(M)$ bps."
          ],
          a: "$2B$ symbols/sec",
          v: "Real systems use raised-cosine pulse shaping; bandwidth must include rolloff factor."
        }),
        ref: "Handbook p.371" },
    ],

    // ====================== Ch 14: Networks — +5 ======================
    14: [
      { q: "Standard HTTP port:",
        choices: ["$80$", "$8080$", "$443$", "$25$"],
        correct: 0,
        solution: S({
          c: "Well-known ports (0-1023) are reserved for standard services.",
          s: [
            "HTTP: 80",
            "HTTPS: 443",
            "SSH: 22",
            "SMTP: 25",
            "FTP: 21",
            "DNS: 53"
          ],
          a: "Port 80",
          v: "Port 8080 is commonly used for unprivileged dev/test web servers."
        }),
        ref: "Handbook p.394" },
      { q: "IPv4 address space size:",
        choices: ["$2^{32}$ (≈4.3 billion)", "$2^{64}$", "$2^{16}$", "$2^{128}$"],
        correct: 0,
        solution: S({
          c: "IPv4: 32-bit address. IPv6: 128-bit.",
          s: [
            "$2^{32} = 4,294,967,296$ addresses.",
            "Many reserved (private, multicast, loopback), so usable on public internet is less.",
            "IPv6: $2^{128} \\approx 3.4 \\times 10^{38}$ — practically unlimited."
          ],
          a: "$2^{32}$",
          v: "Internet's IPv4 address pool exhaustion led to IPv6 adoption."
        }),
        ref: "Handbook p.393" },
      { q: "Private (RFC1918) IP block in 10.x.x.x. Total addresses:",
        choices: ["$2^{24}$ (~16.7M)", "$2^{16}$", "$2^{8}$", "$2^{32}$"],
        correct: 0,
        solution: S({
          c: "10.0.0.0/8 is the largest private block: 8 network bits, 24 host bits.",
          s: [
            "$2^{24} = 16{,}777{,}216$ addresses.",
            "Other private: 172.16.0.0/12, 192.168.0.0/16."
          ],
          a: "$2^{24} \\approx 16.7$ million",
          v: "Most home routers use 192.168.x.x because /24 fits ~250 hosts (plenty for home)."
        }),
        ref: "Handbook p.394" },
      { q: "Difference between L2 broadcast domain and L3 broadcast domain:",
        choices: ["L2 contained by router; L3 = local subnet", "Same thing", "L3 contained by switch", "Both span the whole internet"],
        correct: 0,
        solution: S({
          c: "Broadcast domain at L2: limited by routers (they don't forward L2 broadcasts). At L3: a subnet — IP broadcast goes to all hosts in same subnet.",
          s: [
            "L2: broadcasts to MAC FF:FF:FF:FF:FF:FF stay in VLAN/switch network.",
            "L3: IP broadcast (e.g., 192.168.1.255 for /24) reaches all hosts in subnet."
          ],
          a: "L2 contained by router; L3 = local subnet",
          v: "Routers segment broadcast domains — limits broadcast storms."
        }),
        ref: "Handbook p.399" },
      { q: "VLAN tag adds ___ bytes to Ethernet frame:",
        choices: ["$4$", "$2$", "$8$", "$1$"],
        correct: 0,
        solution: S({
          c: "IEEE 802.1Q VLAN tagging inserts 4 bytes (32 bits): 16-bit TPID (0x8100) + 16-bit TCI (priority + VLAN ID).",
          s: [
            "Total Ethernet frame: 14 byte header + payload + 4 byte FCS. With VLAN: +4 bytes.",
            "Original frame minus tag still passes checksum recomputation."
          ],
          a: "4 bytes",
          v: "VLAN ID is 12 bits → 4096 possible VLANs (with 0 and 4095 reserved)."
        }),
        ref: "Handbook p.399" },
    ],

    // ====================== Ch 15: Digital — +10 ======================
    15: [
      { q: "Convert binary 11011 to decimal:",
        choices: ["$27$", "$25$", "$29$", "$30$"],
        correct: 0,
        solution: S({
          c: "Place values from right: 1, 2, 4, 8, 16, ...",
          s: ["1·16 + 1·8 + 0·4 + 1·2 + 1·1 = 16 + 8 + 2 + 1 = 27."],
          a: "27",
          v: "Check: 27 = 16+8+2+1 ✓"
        }),
        ref: "Handbook p.388" },
      { q: "Octal 175 in decimal:",
        choices: ["$125$", "$175$", "$240$", "$93$"],
        correct: 0,
        solution: S({
          c: "Octal place values: 1, 8, 64, 512, ...",
          s: ["1·64 + 7·8 + 5·1 = 64 + 56 + 5 = 125."],
          a: "125",
          v: "Octal historically used for Unix permissions (3 bits per octal digit ↔ rwx)."
        }),
        ref: "Handbook p.388" },
      { q: "$10110_2 + 1101_2$ (binary addition):",
        choices: ["$100011_2 = 35_{10}$", "$11011_2$", "$11111_2$", "$100111_2$"],
        correct: 0,
        solution: S({
          c: "Add bit by bit with carry. Or convert to decimal, add, convert back.",
          s: [
            "10110 = 22; 1101 = 13. Sum = 35.",
            "35 in binary: $32+2+1 = 100011$."
          ],
          a: "$100011_2$",
          v: "Verify by bitwise add: 10110 + 01101 = 100011 (with carries) ✓"
        }),
        ref: "Handbook p.388" },
      { q: "Boolean function $F = AB + A'C$. With $A=1, B=0, C=1$:",
        choices: ["$F = 0$", "$F = 1$", "$F = A$", "Undefined"],
        correct: 0,
        solution: S({
          c: "Substitute and evaluate.",
          s: [
            "$AB = 1 \\cdot 0 = 0$.",
            "$A'C = 0 \\cdot 1 = 0$.",
            "$F = 0 + 0 = 0$."
          ],
          a: "$F = 0$",
          v: "Test other cases: A=1, B=1: F=1 (regardless of C); A=0, C=1: F=1; etc."
        }),
        ref: "Handbook p.389" },
      { q: "XOR truth table: $A \\oplus B$ = 1 when:",
        choices: ["Inputs differ", "Both 1", "Both 0", "Either is 1"],
        correct: 0,
        solution: S({
          c: "XOR is 1 when inputs are different. Equivalent to $AB' + A'B$.",
          s: [
            "Truth: 0⊕0=0, 0⊕1=1, 1⊕0=1, 1⊕1=0.",
            "Uses: parity, addition (carry handled separately), encryption."
          ],
          a: "When inputs differ",
          v: "XOR with constant 1 = NOT (acts as conditional inverter)."
        }),
        ref: "Handbook p.389" },
      { q: "Number of inputs for a 4-to-1 multiplexer's select lines:",
        choices: ["$2$", "$4$", "$3$", "$1$"],
        correct: 0,
        solution: S({
          c: "MUX select lines: $\\log_2(N)$ for $N$ data inputs.",
          s: [
            "$\\log_2 4 = 2$ select lines.",
            "Inputs: 4 data + 2 select = 6 total inputs."
          ],
          a: "2 select lines",
          v: "8:1 MUX needs 3 select lines; 16:1 needs 4."
        }),
        ref: "Handbook p.390" },
      { q: "A 4-bit ripple counter clocked at 10 MHz: output frequency of MSB?",
        choices: ["$625$ kHz", "$10$ MHz", "$2.5$ MHz", "$1.25$ MHz"],
        correct: 0,
        solution: S({
          c: "Each flip-flop divides frequency by 2. $n$ flip-flops divide by $2^n$.",
          s: ["MSB frequency: $10\\text{ MHz}/2^4 = 10/16 = 0.625$ MHz $= 625$ kHz."],
          a: "625 kHz",
          v: "After 16 input clock cycles, MSB completes one full period (low + high)."
        }),
        ref: "Handbook p.391" },
      { q: "Hexadecimal $\\text{2B}_{16}$ in decimal:",
        choices: ["$43$", "$31$", "$53$", "$23$"],
        correct: 0,
        solution: S({
          c: "Hex: digit × 16^pos. B = 11.",
          s: ["$2 \\cdot 16 + 11 \\cdot 1 = 32 + 11 = 43$."],
          a: "$43_{10}$",
          v: "Convert back: 43 = 2·16 + 11 = 2B₁₆ ✓"
        }),
        ref: "Handbook p.388" },
      { q: "Decimal $-5$ in 4-bit two's complement:",
        choices: ["$1011$", "$0101$", "$1101$", "$1010$"],
        correct: 0,
        solution: S({
          c: "Two's complement: write +5 in binary, flip bits, add 1.",
          s: [
            "+5 in 4-bit: 0101.",
            "Flip: 1010.",
            "Add 1: 1011.",
            "Check: 1011 = -8+0+2+1 = -5 (as signed 4-bit) ✓"
          ],
          a: "1011",
          v: "4-bit signed range: -8 to +7."
        }),
        ref: "Handbook p.389" },
      { q: "K-map for $F(A,B,C,D)$ has 1s in cells $\\{1,3,5,7\\}$ (binary positions). Simplified:",
        choices: ["$F = D$ (essentially)", "$F = B$", "$F = A$", "$F = ABCD$"],
        correct: 0,
        solution: S({
          c: "Cells 1, 3, 5, 7 in 4-var K-map correspond to ABCD = 0001, 0011, 0101, 0111 — all have $D=1$. So $F$ doesn't depend on A, B, C.",
          s: [
            "$0001 = ABCD = 0001 \\Rightarrow D=1$.",
            "$0011 = 0011 \\Rightarrow D=1$.",
            "$0101 = 0101 \\Rightarrow D=1$.",
            "$0111 = 0111 \\Rightarrow D=1$.",
            "All have $D=1$. So $F = D$ in this simplification (though some of these also have $C$ varying)."
          ],
          a: "$F = D$ (in this specific case)",
          v: "More rigorously: also $C=1$ in all four. Verify which simplification covers all minterms minimally."
        }),
        ref: "Handbook p.390" },
    ],

    // ====================== Ch 16: CompSys — +6 ======================
    16: [
      { q: "RAM access type: requires periodic refresh:",
        choices: ["DRAM", "SRAM", "Flash", "ROM"],
        correct: 0,
        solution: S({
          c: "DRAM (Dynamic) uses tiny capacitors that leak — must be refreshed every few ms. SRAM (Static) uses bistable latches, no refresh.",
          s: [
            "DRAM: 1 transistor + 1 capacitor per bit. Dense, cheap, but needs refresh.",
            "SRAM: 6 transistors per bit. Faster, no refresh, but expensive.",
            "Used as: DRAM for main memory; SRAM for caches."
          ],
          a: "DRAM",
          v: "Refresh overhead in DRAM is ~1-3% of memory bandwidth."
        }),
        ref: "Handbook p.407" },
      { q: "USB 2.0 max speed:",
        choices: ["$480$ Mbps", "$12$ Mbps", "$5$ Gbps", "$100$ Mbps"],
        correct: 0,
        solution: S({
          c: "USB versions: 1.0 (12 Mbps Full Speed), 2.0 (480 Mbps Hi-Speed), 3.0 (5 Gbps SuperSpeed), 3.1/3.2 (10 Gbps), 4 (40 Gbps).",
          s: ["USB 2.0: 480 Mbps theoretical, ~280 Mbps practical."],
          a: "480 Mbps",
          v: "USB 2.0 still common — works with most hubs/devices despite being old."
        }),
        ref: "Handbook p.407" },
      { q: "A 4-stage pipeline has theoretical speedup of:",
        choices: ["$4$×", "$2$×", "$8$×", "$0.25$×"],
        correct: 0,
        solution: S({
          c: "Ideal speedup = pipeline depth. Real-world: less due to hazards.",
          s: [
            "4 stages = 4× ideal speedup.",
            "Reality: data hazards, branch mispredictions reduce to 2-3× typical.",
            "Modern CPUs have 10-20+ stages."
          ],
          a: "$4$× (ideal)",
          v: "Pipeline depth tradeoff: deeper → higher clock + better throughput, but worse branch mis-predict penalty."
        }),
        ref: "Handbook p.408" },
      { q: "Cache miss types include:",
        choices: ["Compulsory, capacity, conflict", "Hit, miss, write", "Read, write, execute", "L1, L2, L3"],
        correct: 0,
        solution: S({
          c: "3 Cs of cache misses: <b>Compulsory</b> (cold, first access), <b>Capacity</b> (cache too small for working set), <b>Conflict</b> (associativity insufficient).",
          s: [
            "Compulsory: unavoidable for cold cache.",
            "Capacity: reduce by larger cache.",
            "Conflict: reduce by higher associativity."
          ],
          a: "Compulsory, capacity, conflict",
          v: "Some authors add 4th: <b>Coherence</b> misses in multiprocessor systems."
        }),
        ref: "Handbook p.407" },
      { q: "Little-endian: 32-bit value 0x12345678 stored at addresses 100-103. Byte at address 100:",
        choices: ["$\\text{0x78}$ (least significant)", "$\\text{0x12}$", "$\\text{0x34}$", "$\\text{0x56}$"],
        correct: 0,
        solution: S({
          c: "Little-endian: LSB at lowest address.",
          s: [
            "Address 100: 0x78 (LSB).",
            "Address 101: 0x56.",
            "Address 102: 0x34.",
            "Address 103: 0x12 (MSB)."
          ],
          a: "0x78",
          v: "x86, ARM: little-endian. Network protocols: big-endian."
        }),
        ref: "Handbook p.408" },
      { q: "Direct-mapped cache: a memory address maps to:",
        choices: ["Exactly one cache line", "Any cache line", "Two cache lines (2-way)", "Random line"],
        correct: 0,
        solution: S({
          c: "Cache mapping: <b>Direct</b> (1-way, fixed mapping), <b>Set-associative</b> (N-way, picks from N), <b>Fully associative</b> (any line).",
          s: [
            "Direct: simple, fast, but conflict-prone.",
            "N-way: balance complexity and miss rate.",
            "Fully: lowest miss but expensive to search."
          ],
          a: "Exactly one cache line",
          v: "Typical L1: 4-8 way set associative. L2/L3: 8-16 way."
        }),
        ref: "Handbook p.407" },
    ],

    // ====================== Ch 17: Software — +5 ======================
    17: [
      { q: "Selection sort time complexity:",
        choices: ["$O(n^2)$", "$O(n\\log n)$", "$O(n)$", "$O(\\log n)$"],
        correct: 0,
        solution: S({
          c: "Selection sort: find min, swap to front; repeat. Always $O(n^2)$ — even best case (already sorted).",
          s: [
            "Outer loop: $n$ times.",
            "Inner loop: $O(n)$ to find min in unsorted portion.",
            "Total: $O(n^2)$."
          ],
          a: "$O(n^2)$",
          v: "Like bubble and insertion — all $O(n^2)$ comparison sorts. Use only for small lists."
        }),
        ref: "Handbook p.415" },
      { q: "Hash table collision is handled by:",
        choices: ["Chaining or open addressing", "Stack overflow", "Recursion", "Allocation error"],
        correct: 0,
        solution: S({
          c: "When two keys hash to the same bucket: <b>Chaining</b> (linked list at each bucket) or <b>Open addressing</b> (probe sequence to find empty slot).",
          s: [
            "Chaining: simple, handles high load factor.",
            "Open addressing: better cache locality, but degrades when full."
          ],
          a: "Chaining or open addressing",
          v: "Modern hash tables (Python dict, Java HashMap) use variations of these."
        }),
        ref: "Handbook p.415" },
      { q: "BFS (breadth-first search) typically uses:",
        choices: ["Queue", "Stack", "Heap", "Hashtable"],
        correct: 0,
        solution: S({
          c: "BFS: explore nodes level by level. Use FIFO queue to process oldest-discovered first.",
          s: [
            "DFS uses stack (explicit or recursion).",
            "BFS uses queue.",
            "Both are O(V+E) time."
          ],
          a: "Queue (FIFO)",
          v: "BFS finds shortest path in unweighted graphs. Dijkstra uses priority queue (min-heap)."
        }),
        ref: "Handbook p.415" },
      { q: "Big-O of inserting at the end of a dynamic array (amortized):",
        choices: ["$O(1)$ amortized", "$O(n)$ always", "$O(\\log n)$", "$O(n^2)$"],
        correct: 0,
        solution: S({
          c: "Dynamic array: doubles size when full. Most inserts are $O(1)$, occasional resize is $O(n)$. Amortized analysis: $O(1)$ per insert.",
          s: [
            "Single insert: usually O(1), occasionally O(n).",
            "Amortized: average over many inserts is O(1).",
            "Linked list insertion at end: O(1) if tail pointer, else O(n)."
          ],
          a: "$O(1)$ amortized",
          v: "C++ std::vector, Python list, Java ArrayList all use this strategy."
        }),
        ref: "Handbook p.415" },
      { q: "A binary search tree has $n$ nodes. Average search time (balanced):",
        choices: ["$O(\\log n)$", "$O(n)$", "$O(1)$", "$O(n \\log n)$"],
        correct: 0,
        solution: S({
          c: "Balanced BST has depth $O(\\log n)$. Each search visits one node per level.",
          s: [
            "Balanced: $O(\\log n)$.",
            "Worst case (unbalanced, like inserting sorted): $O(n)$ — degenerates to linked list.",
            "Self-balancing (AVL, red-black): always $O(\\log n)$."
          ],
          a: "$O(\\log n)$",
          v: "Why std::map (C++) and TreeMap (Java) use red-black trees — guarantees $O(\\log n)$."
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
