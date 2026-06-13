// FE Electrical Question Bank — Extension Pack 5 (~200 problems)
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") return;

  const P = {
    // Math — +20
    1: [
      { q: "Roots of $x^2-6x+10=0$:", choices: ["$3\\pm j$", "$3\\pm 2$", "$5,1$", "$\\pm 10$"], correct: 0,
        solution: S({
          c: "The quadratic formula $x = \\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ solves any $ax^2+bx+c=0$. When the discriminant $b^2-4ac$ is NEGATIVE, the roots are a complex-conjugate pair.",
          s: [
            "<b>Step 1 — Discriminant.</b> $\\Delta = (-6)^2 - 4(1)(10) = 36 - 40 = -4 < 0$ → complex roots.",
            "<b>Step 2 — Apply formula.</b> $x = \\dfrac{6 \\pm \\sqrt{-4}}{2} = \\dfrac{6 \\pm 2j}{2} = 3 \\pm j$.",
            "<b>Step 3 — Distractor audit.</b> $3\\pm2$ pretends $\\Delta$ was $+4$; $5,1$ would need $\\Delta=16$; $\\pm10$ ignores the formula."
          ],
          a: "$x = 3 \\pm j$",
          v: "Vieta check: sum of roots $= 6 = -b/a$ ✓ and product $= (3+j)(3-j) = 9+1 = 10 = c/a$ ✓. Negative discriminant ALWAYS gives conjugate pairs — real coefficients guarantee it."

        }), ref: "p.35" },
      { q: "$\\sin 75° = ?$ (use $\\sin(A+B)$):", choices: ["$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", "$\\sqrt{2}/2$", "$1$"], correct: 0,
        solution: S({
          c: "The angle-addition identity $\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$ lets you find exact values of 'odd' angles by splitting them into known ones (here 75° = 45° + 30°).",
          s: [
            "<b>Step 1 — Split.</b> $\\sin 75° = \\sin(45°+30°) = \\sin45\\cos30 + \\cos45\\sin30$.",
            "<b>Step 2 — Plug exact values.</b> $= \\dfrac{\\sqrt2}{2}\\cdot\\dfrac{\\sqrt3}{2} + \\dfrac{\\sqrt2}{2}\\cdot\\dfrac{1}{2} = \\dfrac{\\sqrt6 + \\sqrt2}{4}$.",
            "<b>Step 3 — Distractor audit.</b> $(\\sqrt6-\\sqrt2)/4$ is $\\sin15°$ (sign flipped); $\\sqrt2/2$ is $\\sin45°$; 1 is $\\sin90°$."
          ],
          a: "$\\dfrac{\\sqrt6+\\sqrt2}{4} \\approx 0.966$",
          v: "Sanity: 75° is near 90°, so the sine should be near 1 — and 0.966 is ✓. The companion $\\sin15° = (\\sqrt6-\\sqrt2)/4 \\approx 0.259$ uses the same split with subtraction."

        }), ref: "p.37" },
      { q: "Express $5\\cos\\omega t - 12\\sin\\omega t$ as $A\\cos(\\omega t + \\phi)$. Find A:",
        choices: ["$13$", "$17$", "$7$", "$\\sqrt{119}$"], correct: 0,
        solution: S({
          c: "Any sum $a\\cos x - b\\sin x$ combines into a single sinusoid $R\\cos(x+\\phi)$ with amplitude $R = \\sqrt{a^2+b^2}$ and phase $\\tan\\phi = b/a$ — the phasor-addition trick used constantly in AC analysis.",
          s: [
            "<b>Step 1 — Amplitude.</b> $R = \\sqrt{5^2 + 12^2} = \\sqrt{25+144} = \\sqrt{169} = 13$.",
            "<b>Step 2 — Distractor audit.</b> 17 adds the coefficients ($5+12$); 7 subtracts them; $\\sqrt{119}$ wrongly uses $12^2-5^2$ under the root."
          ],
          a: "$A = 13$",
          v: "It's the 5-12-13 Pythagorean triple ✓ — the two orthogonal components (cosine and sine) add like perpendicular legs. Phase: $\\phi = \\arctan(12/5) \\approx 67.4°$."

        }), ref: "p.37" },
      { q: "If $z = 2e^{j\\pi/4}$, find $z^2$:",
        choices: ["$4 e^{j\\pi/2} = 4j$", "$4 + j$", "$2\\sqrt{2}$", "$4 e^{j\\pi/4}$"], correct: 0,
        solution: S({
          c: "In polar form, raising a complex number to a power is easy: $z^n = r^n e^{jn\\theta}$ — magnitude gets powered, angle gets multiplied (De Moivre's theorem).",
          s: [
            "<b>Step 1 — Power the magnitude, multiply the angle.</b> $z^2 = 2^2 e^{j\\cdot2\\cdot\\pi/4} = 4e^{j\\pi/2}$.",
            "<b>Step 2 — Convert to rectangular.</b> $e^{j\\pi/2} = \\cos90° + j\\sin90° = j$, so $z^2 = 4j$.",
            "<b>Step 3 — Distractor audit.</b> $4+j$ mishandles the conversion; $2\\sqrt2$ is just $|z^2|$-ish nonsense; $4e^{j\\pi/4}$ forgot to double the angle."
          ],
          a: "$z^2 = 4e^{j\\pi/2} = 4j$",
          v: "Polar makes powers/roots trivial while rectangular makes addition easy — knowing when to switch is the whole game ✓. Multiplying by $j$ = rotating 90° CCW, which is exactly what doubling a 45° angle to 90° does."

        }), ref: "p.36" },
      { q: "Magnitude of vector $\\vec{v} = 2\\hat{i}+3\\hat{j}+6\\hat{k}$:",
        choices: ["$7$", "$11$", "$\\sqrt{41}$", "$49$"], correct: 0,
        solution: S({
          c: "A vector's magnitude (length) is the root-sum-of-squares of its components: $|\\vec v| = \\sqrt{x^2+y^2+z^2}$ — the Pythagorean theorem in 3-D.",
          s: [
            "<b>Step 1 — Square and sum.</b> $2^2 + 3^2 + 6^2 = 4 + 9 + 36 = 49$.",
            "<b>Step 2 — Root.</b> $\\sqrt{49} = 7$.",
            "<b>Step 3 — Distractor audit.</b> 11 adds the components ($2+3+6$); $\\sqrt{41}$ drops the largest term; $49$ is the sum of squares before taking the root."
          ],
          a: "$|\\vec v| = 7$",
          v: "It's a 2-3-6-7 Pythagorean quadruple ✓. The formula generalizes the 2-D hypotenuse: each added dimension just contributes one more squared term under the root."

        }), ref: "p.38" },
      { q: "Unit vector in direction of $\\vec{v} = 6\\hat{i}+8\\hat{j}$:",
        choices: ["$(0.6, 0.8)$", "$(6, 8)$", "$(1, 1)$", "$(3, 4)$"], correct: 0,
        solution: S({
          c: "A UNIT vector points the same way but has length 1: divide the vector by its own magnitude, $\\hat u = \\vec v/|\\vec v|$.",
          s: [
            "<b>Step 1 — Magnitude.</b> $|\\vec v| = \\sqrt{6^2+8^2} = \\sqrt{100} = 10$ (a 6-8-10 triangle).",
            "<b>Step 2 — Divide each component.</b> $\\hat u = (6/10,\\ 8/10) = (0.6,\\ 0.8)$.",
            "<b>Step 3 — Distractor audit.</b> $(6,8)$ is the original (length 10); $(1,1)$ isn't even unit length; $(3,4)$ is $\\vec v/2$ (length 5)."
          ],
          a: "$\\hat u = (0.6,\\ 0.8)$",
          v: "Confirm length 1: $\\sqrt{0.6^2+0.8^2} = \\sqrt{0.36+0.64} = \\sqrt1 = 1$ ✓. Unit vectors carry pure DIRECTION — multiply by any scalar to get a vector of that length pointing the same way."

        }), ref: "p.38" },
      { q: "$\\dfrac{d}{dx}[\\sin^2 x]$ = ",
        choices: ["$2\\sin x \\cos x = \\sin 2x$", "$2\\cos x$", "$\\sin 2x/2$", "$2\\sin x$"], correct: 0,
        solution: S({
          c: "The chain rule differentiates a composed function: $\\dfrac{d}{dx}u^2 = 2u\\dfrac{du}{dx}$. Here the outer function is 'square', the inner is $\\sin x$.",
          s: [
            "<b>Step 1 — Apply.</b> With $u=\\sin x$: $2\\sin x\\cdot\\cos x$.",
            "<b>Step 2 — Simplify.</b> $2\\sin x\\cos x = \\sin 2x$ (double-angle identity).",
            "<b>Step 3 — Distractor audit.</b> $2\\cos x$ forgets the inner derivative chain; $\\sin2x/2$ halves wrongly; $2\\sin x$ drops the $\\cos x$ factor."
          ],
          a: "$2\\sin x\\cos x = \\sin 2x$",
          v: "Both forms are identical — the question rewards knowing the double-angle identity ✓. Forgetting the inner $\\cos x$ (chain rule) is the single most common derivative mistake."

        }), ref: "p.47" },
      { q: "$\\int \\sec^2 x \\, dx$:",
        choices: ["$\\tan x + C$", "$\\sec x + C$", "$\\cot x + C$", "$-\\cos x + C$"], correct: 0,
        solution: S({
          c: "Integration is reverse differentiation — recognize $\\sec^2 x$ as the KNOWN derivative of $\\tan x$, so its antiderivative is $\\tan x$.",
          s: [
            "<b>Step 1 — Recall.</b> $\\dfrac{d}{dx}\\tan x = \\sec^2 x$, hence $\\int\\sec^2 x\\,dx = \\tan x + C$.",
            "<b>Step 2 — Distractor audit.</b> $\\sec x + C$ is wrong (that pairs with $\\sec x\\tan x$); $\\cot x$ pairs with $-\\csc^2 x$; $-\\cos x$ pairs with $\\sin x$."
          ],
          a: "$\\tan x + C$",
          v: "Differentiate back: $\\dfrac{d}{dx}\\tan x = \\sec^2 x$ ✓. The '+C' matters — every indefinite integral has an arbitrary constant since the derivative of a constant is zero."

        }), ref: "p.49" },
      { q: "Maclaurin series of $\\sin x$, first 3 nonzero terms:",
        choices: ["$x - x^3/6 + x^5/120$", "$1 + x + x^2/2$", "$\\cos 0 + ...$", "$x + x^2/2$"], correct: 0,
        solution: S({
          c: "A Maclaurin series expresses a function as an infinite polynomial about $x=0$. For sine: $\\sin x = x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\cdots$ — odd powers only, alternating signs.",
          s: [
            "<b>Step 1 — Write the first three terms.</b> $x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120}$ (since $3!=6$, $5!=120$).",
            "<b>Step 2 — Distractor audit.</b> $1+x+x^2/2$ is $e^x$; the others are malformed or truncated cosine-like series."
          ],
          a: "$x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120}$",
          v: "The famous small-angle approximation $\\sin x \\approx x$ is just the FIRST term ✓ — valid because higher terms shrink fast when $x$ is small (e.g. at $x=0.1$, the $x^3/6$ term is only $1.7\\times10^{-4}$)."

        }), ref: "p.50" },
      { q: "Solve $\\dfrac{dy}{dx} = y$, $y(0) = 2$:",
        choices: ["$y = 2e^x$", "$y = e^{2x}$", "$y = 2x$", "$y = 2+x$"], correct: 0,
        solution: S({
          c: "This is a SEPARABLE first-order ODE: gather all $y$ on one side, all $x$ on the other, integrate both. The classic result is exponential growth.",
          s: [
            "<b>Step 1 — Separate and integrate.</b> $\\dfrac{dy}{y} = dx \\Rightarrow \\ln y = x + C \\Rightarrow y = Ae^x$.",
            "<b>Step 2 — Apply initial condition.</b> $y(0) = Ae^0 = A = 2$, so $y = 2e^x$.",
            "<b>Step 3 — Distractor audit.</b> $e^{2x}$ solves $y'=2y$ (wrong rate); $2x$ and $2+x$ aren't exponential at all."
          ],
          a: "$y = 2e^x$",
          v: "Check: $y' = 2e^x = y$ ✓ and $y(0)=2$ ✓. 'Rate of change proportional to amount' is the signature of exponential behavior — RC/RL circuits, radioactive decay, and population growth all share this ODE."

        }), ref: "p.54" },
      { q: "Rank-nullity for $3\\times 4$ matrix with rank 2: nullity =",
        choices: ["$2$", "$1$", "$3$", "$4$"], correct: 0,
        solution: S({
          c: "The rank-nullity theorem: for any $m\\times n$ matrix, $\\text{rank} + \\text{nullity} = n$ (number of COLUMNS). Rank = dimension of the column space (independent outputs); nullity = dimension of the null space (solutions to $Ax=0$).",
          s: [
            "<b>Step 1 — Identify n.</b> A $3\\times4$ matrix has $n=4$ columns.",
            "<b>Step 2 — Solve.</b> $\\text{rank} + \\text{nullity} = 4 \\Rightarrow 2 + \\text{nullity} = 4 \\Rightarrow \\text{nullity} = 2$.",
            "<b>Step 3 — Distractor audit.</b> Using ROWS (3) instead of columns gives wrong answers; 4 forgets to subtract the rank."
          ],
          a: "Nullity = 2",
          v: "Meaning: the system $Ax=0$ has a 2-parameter family of solutions ✓. Use COLUMNS not rows — the theorem counts the input-space dimension, which equals the number of columns."

        }), ref: "p.57" },
      { q: "Eigenvector for $A = \\begin{pmatrix}3&0\\\\0&5\\end{pmatrix}$ corresponding to $\\lambda=3$:",
        choices: ["$\\binom{1}{0}$", "$\\binom{0}{1}$", "$\\binom{1}{1}$", "$\\binom{3}{5}$"], correct: 0,
        solution: S({
          c: "An eigenvector $v$ satisfies $Av = \\lambda v$ — the matrix only STRETCHES it, no rotation. For a DIAGONAL matrix, the standard basis vectors are the eigenvectors, with the diagonal entries as eigenvalues.",
          s: [
            "<b>Step 1 — Match eigenvalue to position.</b> $\\lambda=3$ sits in the first diagonal slot → eigenvector $e_1 = (1,0)^T$.",
            "<b>Step 2 — Distractor audit.</b> $(0,1)^T$ goes with $\\lambda=5$; $(1,1)^T$ mixes both directions (not an eigenvector); $(3,5)^T$ confuses eigenvalues with the vector."
          ],
          a: "$(1,\\ 0)^T$",
          v: "Verify: $A(1,0)^T = (3\\cdot1,\\ 5\\cdot0)^T = (3,0)^T = 3(1,0)^T$ ✓. Diagonal matrices are the easiest eigen-problems — the work is already done; you just read off the answer."

        }), ref: "p.58" },
      { q: "Length of curve $y=x^{3/2}$ from $x=0$ to $1$:",
        choices: ["$\\frac{13\\sqrt{13}-8}{27} \\approx 1.44$", "$1$", "$\\sqrt{2}$", "$2$"], correct: 0,
        solution: S({
          c: "Arc length of a curve $y=f(x)$ is $L = \\int_a^b \\sqrt{1 + (dy/dx)^2}\\,dx$ — summing tiny hypotenuses $\\sqrt{dx^2+dy^2}$ along the curve.",
          s: [
            "<b>Step 1 — Derivative.</b> $dy/dx = \\tfrac32 x^{1/2}$, so $(dy/dx)^2 = \\tfrac94 x$.",
            "<b>Step 2 — Set up.</b> $L = \\int_0^1 \\sqrt{1 + \\tfrac94 x}\\,dx$.",
            "<b>Step 3 — Integrate.</b> $= \\tfrac{8}{27}\\big[(1+\\tfrac94 x)^{3/2}\\big]_0^1 = \\tfrac{8}{27}\\big[(13/4)^{3/2} - 1\\big] = \\dfrac{13\\sqrt{13}-8}{27} \\approx 1.44$.",
            "<b>Step 4 — Distractor audit.</b> 1 is the straight x-distance; $\\sqrt2\\approx1.41$ is the chord-ish guess; 2 overshoots."
          ],
          a: "$\\approx 1.44$",
          v: "Sanity: the curve rises from $(0,0)$ to $(1,1)$, so its length must EXCEED the straight chord $\\sqrt2\\approx1.41$ — and 1.44 does ✓, by just the right small margin for a gently bending curve."

        }), ref: "p.49" },
      { q: "$\\lim_{x\\to\\infty} (1 + 1/x)^x$:",
        choices: ["$e$", "$1$", "$0$", "$\\infty$"], correct: 0,
        solution: S({
          c: "This is the LIMIT that DEFINES Euler's number $e \\approx 2.718$. It's an indeterminate $1^\\infty$ form — resolve it by taking the logarithm.",
          s: [
            "<b>Step 1 — Take log.</b> $\\ln L = \\lim_{x\\to\\infty} x\\ln(1+1/x)$.",
            "<b>Step 2 — Evaluate.</b> For large $x$, $\\ln(1+1/x)\\approx 1/x$, so $x\\cdot(1/x) = 1$. Thus $\\ln L = 1 \\Rightarrow L = e$.",
            "<b>Step 3 — Distractor audit.</b> 1 is the naive '$1^\\infty=1$' trap (it's indeterminate, not 1); 0 and ∞ misjudge the competing effects."
          ],
          a: "$e$",
          v: "The tension that makes it nontrivial: the base $\\to1$ (would give 1) while the exponent $\\to\\infty$ (would give ∞) — they balance exactly at $e$ ✓. This limit underlies continuous compound interest: $e^{rt}$."

        }), ref: "p.47" },
      { q: "Number of solutions to $x^2 = -4$ in real numbers:",
        choices: ["$0$ (none)", "$1$", "$2$", "$\\infty$"], correct: 0,
        solution: S({
          c: "The square of any REAL number is non-negative ($x^2 \\ge 0$), so it can never equal a negative value. Real solutions: none.",
          s: [
            "<b>Step 1 — Reason over the reals.</b> $x^2 \\ge 0$ for all real $x$, but $-4 < 0$ → no real $x$ works.",
            "<b>Step 2 — Distractor audit.</b> 1, 2, ∞ all assume real solutions exist. (Over the COMPLEX numbers there are exactly two: $x = \\pm2j$.)"
          ],
          a: "0 real solutions",
          v: "The complex picture completes it: $x = \\pm2j$ since $(2j)^2 = 4j^2 = -4$ ✓. This gap — real equations with no real roots — is precisely why complex numbers were invented."

        }), ref: "p.35" },
      { q: "$\\int 0^\\infty e^{-x}\\,dx$:",
        choices: ["$1$", "$0$", "$\\infty$", "$e$"], correct: 0,
        solution: S({
          c: "An IMPROPER integral with an infinite limit: evaluate the antiderivative and take the limit at $\\infty$. Here $\\int e^{-x}dx = -e^{-x}$.",
          s: [
            "<b>Step 1 — Antiderivative.</b> $\\int_0^\\infty e^{-x}dx = \\big[-e^{-x}\\big]_0^\\infty$.",
            "<b>Step 2 — Evaluate limits.</b> At $\\infty$: $-e^{-\\infty} = 0$. At 0: $-e^0 = -1$. Difference: $0 - (-1) = 1$.",
            "<b>Step 3 — Distractor audit.</b> 0 forgets the lower limit; ∞ misjudges the decay; $e$ is unrelated."
          ],
          a: "1",
          v: "The integral CONVERGES because $e^{-x}$ decays fast enough to enclose finite area ✓. This unit-area exponential is the backbone of the exponential probability distribution (rate 1)."

        }), ref: "p.49" },
      { q: "Gradient $\\nabla (x^2 + y^2)$ at $(1, 2)$:",
        choices: ["$(2, 4)$", "$(1, 2)$", "$(2, 2)$", "$(5)$"], correct: 0,
        solution: S({
          c: "The gradient $\\nabla f = (\\partial f/\\partial x,\\ \\partial f/\\partial y)$ is the vector of partial derivatives — it points in the direction of STEEPEST increase of $f$.",
          s: [
            "<b>Step 1 — Partials.</b> $\\partial/\\partial x(x^2+y^2) = 2x$; $\\partial/\\partial y = 2y$.",
            "<b>Step 2 — Evaluate at (1,2).</b> $(2\\cdot1,\\ 2\\cdot2) = (2,\\ 4)$.",
            "<b>Step 3 — Distractor audit.</b> $(1,2)$ is the point itself; $(2,2)$ mis-differentiates; $(5)$ is the scalar value $f(1,2)=5$, not the gradient."
          ],
          a: "$(2,\\ 4)$",
          v: "The gradient points 'uphill' — from $(1,2)$ the function climbs fastest toward $(2,4)$ direction, radially outward from the origin ✓, which makes sense for the bowl-shaped $x^2+y^2$."

        }), ref: "p.38" },
      { q: "$\\vec{F}=2\\hat{i}+3\\hat{j}$, $\\vec{G}=\\hat{i}-\\hat{j}$. $\\vec{F}\\cdot\\vec{G}$:",
        choices: ["$-1$", "$5$", "$2$", "$1$"], correct: 0,
        solution: S({
          c: "The DOT product multiplies matching components and sums: $\\vec F\\cdot\\vec G = F_xG_x + F_yG_y$. It yields a SCALAR and measures alignment.",
          s: [
            "<b>Step 1 — Multiply components.</b> $(2)(1) + (3)(-1) = 2 - 3 = -1$.",
            "<b>Step 2 — Distractor audit.</b> 5 forgets the minus sign on $G_y$; 2 and 1 drop a term."
          ],
          a: "$\\vec F\\cdot\\vec G = -1$",
          v: "The NEGATIVE result means the vectors point more than 90° apart (obtuse angle) ✓ — since $\\vec F\\cdot\\vec G = |F||G|\\cos\\theta$, a negative dot product signals $\\cos\\theta<0$. A zero dot product would mean perpendicular."

        }), ref: "p.38" },
      { q: "Newton's method iteration $x_{n+1} = x_n - f(x_n)/f'(x_n)$: useful for:",
        choices: ["Finding roots numerically", "Definite integrals", "Eigenvalues only", "Matrix inversion"], correct: 0,
        solution: S({
          c: "Newton's method finds ROOTS of $f(x)=0$ numerically: from a guess $x_n$, it follows the tangent line down to the axis: $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
          s: [
            "<b>Step 1 — Match.</b> Finding roots numerically.",
            "<b>Step 2 — Distractor audit.</b> Definite integrals use quadrature (trapezoidal/Simpson); eigenvalues and matrix inversion use other algorithms — Newton is specifically a root-finder."
          ],
          a: "Finding roots of equations numerically.",
          v: "It converges QUADRATICALLY (digits of accuracy roughly double each step) near a simple root ✓ — but needs a good initial guess and $f'\\ne0$, or it can diverge. The power-flow Newton-Raphson solver is the multivariable version."

        }), ref: "p.61" },
      { q: "Volume of revolution: $y = x$ rotated about x-axis from 0 to 1:",
        choices: ["$\\pi/3$", "$\\pi$", "$\\pi/2$", "$\\pi/4$"], correct: 0,
        solution: S({
          c: "The DISK method finds the volume of a solid of revolution about the x-axis: $V = \\pi\\int_a^b y^2\\,dx$ — stacking thin circular disks of radius $y$, each with area $\\pi y^2$.",
          s: [
            "<b>Step 1 — Set up.</b> $y=x$, so $V = \\pi\\int_0^1 x^2\\,dx$.",
            "<b>Step 2 — Integrate.</b> $\\pi\\big[x^3/3\\big]_0^1 = \\pi/3$.",
            "<b>Step 3 — Distractor audit.</b> $\\pi$ forgets to integrate; $\\pi/2$ and $\\pi/4$ use wrong powers."
          ],
          a: "$V = \\pi/3$",
          v: "The solid is a cone (radius 1, height 1); the geometry formula $V = \\tfrac13\\pi r^2 h = \\tfrac13\\pi(1)(1) = \\pi/3$ ✓ matches the calculus exactly — a satisfying cross-check."

        }), ref: "p.49" },
    ],

    // Prob — +10
    2: [
      { q: "Two dice rolled. P(sum = 11):", choices: ["$2/36 = 1/18$", "$1/36$", "$3/36$", "$1/6$"], correct: 0,
        solution: S({
          c: "Probability of an event = (favorable outcomes)/(total outcomes). Two dice give $6\\times6 = 36$ equally-likely ordered outcomes.",
          s: [
            "<b>Step 1 — List favorable.</b> Sum 11 comes only from (5,6) and (6,5) → 2 ways.",
            "<b>Step 2 — Divide.</b> $P = 2/36 = 1/18$.",
            "<b>Step 3 — Distractor audit.</b> $1/36$ counts only one ordering; $3/36$ over-counts; $1/6$ is a single die's face probability."
          ],
          a: "$P = 1/18$",
          v: "Order matters here — (5,6) and (6,5) are distinct rolls ✓. Only the sum of 7 has more combinations (six), making it the most likely two-dice total; 11 is near the rare high end."

        }), ref: "p.64" },
      { q: "Coin flipped 5 times. P(4 heads):", choices: ["$5/32$", "$1/32$", "$1/5$", "$4/5$"], correct: 0,
        solution: S({
          c: "The BINOMIAL formula gives the probability of exactly $k$ successes in $n$ independent trials: $P = \\binom{n}{k}p^k(1-p)^{n-k}$. For a fair coin $p=0.5$.",
          s: [
            "<b>Step 1 — Count arrangements.</b> $\\binom{5}{4} = 5$ ways to place 4 heads among 5 flips.",
            "<b>Step 2 — Probability of each.</b> $(0.5)^5 = 1/32$ (every specific 5-flip sequence is equally likely).",
            "<b>Step 3 — Multiply.</b> $5\\times1/32 = 5/32$.",
            "<b>Step 4 — Distractor audit.</b> $1/32$ forgets the $\\binom{5}{4}$ count; $1/5$ and $4/5$ aren't binomial."
          ],
          a: "$P = 5/32 \\approx 0.156$",
          v: "Symmetry check: $P(4\\text{ heads}) = P(1\\text{ head})$ for a fair coin, both $5/32$ ✓. The $\\binom{n}{k}$ factor is the key — it counts the DIFFERENT orderings that give the same head count."

        }), ref: "p.66" },
      { q: "Standard normal: $P(-1 < Z < 1)$:", choices: ["$\\approx 68\\%$", "$\\approx 95\\%$", "$50\\%$", "$\\approx 99.7\\%$"], correct: 0,
        solution: S({
          c: "The EMPIRICAL (68-95-99.7) rule for a normal distribution: about 68% of values fall within $\\pm1\\sigma$ of the mean, 95% within $\\pm2\\sigma$, 99.7% within $\\pm3\\sigma$.",
          s: [
            "<b>Step 1 — Apply.</b> $-1<Z<1$ is exactly $\\pm1\\sigma$ → ≈68%.",
            "<b>Step 2 — Distractor audit.</b> 95% is $\\pm2\\sigma$; 99.7% is $\\pm3\\sigma$; 50% is just one side of the mean."
          ],
          a: "$\\approx 68\\%$",
          v: "These three numbers are worth memorizing cold — they appear constantly in quality control, measurement error, and confidence intervals ✓. The precise value is 68.27%."

        }), ref: "p.67" },
      { q: "Sample of 10, mean 50, std 5. 95% CI on mean (z-based):",
        choices: ["$50 \\pm 3.1$", "$50 \\pm 5$", "$50 \\pm 10$", "$50 \\pm 50$"], correct: 0,
        solution: S({
          c: "A confidence interval for the mean is $\\bar x \\pm z\\cdot\\dfrac{s}{\\sqrt n}$. The $\\sqrt n$ in the denominator (the STANDARD ERROR) shrinks the interval as samples grow. For 95%, $z = 1.96$.",
          s: [
            "<b>Step 1 — Standard error.</b> $s/\\sqrt n = 5/\\sqrt{10} = 5/3.162 = 1.581$.",
            "<b>Step 2 — Margin.</b> $1.96\\times1.581 = 3.10$.",
            "<b>Step 3 — Interval.</b> $50 \\pm 3.1$.",
            "<b>Step 4 — Distractor audit.</b> $\\pm5$ forgets to divide by $\\sqrt n$; $\\pm10$ and $\\pm50$ are way off."
          ],
          a: "$50 \\pm 3.1$",
          v: "Note the $\\sqrt n$ effect: quadrupling the sample to 40 would HALVE the margin to ~1.55 ✓ — diminishing returns, which is why precision is expensive. (Strictly, small $n$ uses the t-distribution, but the problem specifies z.)"

        }), ref: "p.69" },
      { q: "Probability density function (PDF) integrates to:", choices: ["$1$ over its support", "$0$", "Variable", "$\\infty$"], correct: 0,
        solution: S({
          c: "A probability density function describes a continuous random variable. Its DEFINING property: the total area under it equals 1 — something must happen with certainty.",
          s: [
            "<b>Step 1 — State.</b> $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$ over its support.",
            "<b>Step 2 — Distractor audit.</b> 0 would mean nothing happens; 'variable' or ∞ violate the normalization requirement."
          ],
          a: "1 (over its support).",
          v: "This is why a PDF's height can exceed 1 (it's a DENSITY, not a probability) as long as the total AREA is 1 ✓ — probabilities come from integrating over an interval, not from reading the curve's height."

        }), ref: "p.66" },
      { q: "Median splits data into:", choices: ["Two equal halves by count", "Equal sum halves", "Quartiles", "Random"], correct: 0,
        solution: S({
          c: "The median is the MIDDLE value (50th percentile) when data is sorted — half the data points fall below it, half above, by COUNT.",
          s: [
            "<b>Step 1 — Match.</b> Two equal halves by count.",
            "<b>Step 2 — Distractor audit.</b> 'Equal sum halves' isn't the median's definition; quartiles split into four; 'random' is wrong."
          ],
          a: "Two equal halves by count.",
          v: "The median's superpower: it's ROBUST to outliers — one billionaire doesn't move the median income, but wrecks the mean ✓. That's why 'median household income' is the standard economic measure."

        }), ref: "p.63" },
      { q: "Range of distribution = ", choices: ["Max - Min", "$\\sigma^2$", "$\\bar{x}$", "Median - Mode"], correct: 0,
        solution: S({
          c: "The RANGE is the simplest measure of spread: the difference between the largest and smallest values.",
          s: [
            "<b>Step 1 — Match.</b> $R = x_{max} - x_{min}$.",
            "<b>Step 2 — Distractor audit.</b> $\\sigma^2$ is variance; $\\bar x$ is the mean (center, not spread); median−mode isn't a standard measure."
          ],
          a: "$\\text{Max} - \\text{Min}$",
          v: "Range's weakness: it depends on only TWO points, so a single outlier dominates it ✓ — which is why the more robust IQR (75th − 25th percentile) is often preferred for describing spread."

        }), ref: "p.63" },
      { q: "Pearson's $r = 0.95$ between X and Y. Interpretation:",
        choices: ["Strong positive linear relationship", "No relationship", "Causation", "X causes Y"], correct: 0,
        solution: S({
          c: "Pearson's correlation coefficient $r$ ranges from $-1$ to $+1$ and measures LINEAR association. Near $+1$ means a strong positive linear relationship (as X rises, Y rises).",
          s: [
            "<b>Step 1 — Interpret 0.95.</b> Very close to +1 → strong positive linear relationship.",
            "<b>Step 2 — Distractor audit.</b> 'No relationship' would be $r\\approx0$; 'causation' / 'X causes Y' are the cardinal error — correlation is NOT causation."
          ],
          a: "Strong positive linear correlation.",
          v: "Critical caveat: high $r$ could come from a hidden common cause, coincidence, or reverse causation ✓ — establishing causation needs controlled experiments, not just correlation. Also, $r$ only catches LINEAR patterns."

        }), ref: "p.69" },
      { q: "Standard deviation vs variance:",
        choices: ["$\\sigma = \\sqrt{\\sigma^2}$", "Same", "$\\sigma$ squared", "Always related as ratio"], correct: 0,
        solution: S({
          c: "Variance $\\sigma^2$ is the average squared deviation from the mean; standard deviation $\\sigma$ is its square root — so $\\sigma = \\sqrt{\\sigma^2}$.",
          s: [
            "<b>Step 1 — Match.</b> $\\sigma = \\sqrt{\\sigma^2}$.",
            "<b>Step 2 — Distractor audit.</b> 'Same' is false; '$\\sigma$ squared' reverses the relationship; 'always a ratio' is meaningless."
          ],
          a: "$\\sigma = \\sqrt{\\sigma^2}$",
          v: "Why we report SD over variance: SD shares the data's UNITS (meters, volts), while variance is in units² ✓ — so SD is directly comparable to the mean, e.g. '50 ± 5 V'."

        }), ref: "p.63" },
      { q: "Combinations $C(n,r)$ formula:", choices: ["$n!/[r!(n-r)!]$", "$n!/r!$", "$n^r$", "$r!$"], correct: 0,
        solution: S({
          c: "Combinations count selections where ORDER DOESN'T matter: $C(n,r) = \\dfrac{n!}{r!(n-r)!}$. The $r!$ in the denominator removes the orderings that permutations would over-count.",
          s: [
            "<b>Step 1 — Match.</b> $n!/[r!(n-r)!]$.",
            "<b>Step 2 — Distractor audit.</b> $n!/r!$ is incomplete; $n^r$ is for ordered-with-repetition; $r!$ alone is just orderings of $r$ items."
          ],
          a: "$C(n,r) = \\dfrac{n!}{r!(n-r)!}$",
          v: "Compare with PERMUTATIONS $P(n,r) = n!/(n-r)!$ where order matters — combinations divide that by $r!$ ✓. Picking a committee = combination; ranking 1st/2nd/3rd = permutation."

        }), ref: "p.64" },
    ],

    // Ethics — +4
    3: [
      { q: "An engineer accepting a bonus from a supplier for selecting their product violates:",
        choices: ["Conflict of interest rule", "No rule", "Patent law", "Antitrust"], correct: 0,
        solution: S({
          c: "A core engineering-ethics canon: the engineer acts as a FAITHFUL AGENT for the client/employer. Taking payment from a supplier to favor their product corrupts that duty — a conflict of interest.",
          s: [
            "<b>Step 1 — Match.</b> Conflict of interest.",
            "<b>Step 2 — Distractor audit.</b> Patent law and antitrust govern different issues; 'no rule' is wrong — this is a textbook violation."
          ],
          a: "Conflict of interest.",
          v: "The fix is disclosure and recusal: an engineer must reveal any outside interest that could bias a professional judgment, and step aside if needed ✓ — appearance of bias is itself a problem, not just actual bias."

        }), ref: "p.4" },
      { q: "PE working in a state without license: must:",
        choices: ["Obtain license or comity from that state", "Continue with existing license", "Notify NCEES", "Stop all work"], correct: 0,
        solution: S({
          c: "Engineering licensure is regulated STATE BY STATE. To practice (and stamp documents) as a PE in a given state, you must hold that state's license — usually obtainable by COMITY (reciprocity) if you're already licensed elsewhere.",
          s: [
            "<b>Step 1 — Match.</b> Obtain that state's license or comity.",
            "<b>Step 2 — Distractor audit.</b> An existing out-of-state license doesn't automatically extend; notifying NCEES isn't sufficient; 'stop all work' is overkill (comity exists)."
          ],
          a: "Get licensed in that state (via comity).",
          v: "Comity streamlines it — states recognize each other's PEs with paperwork rather than re-examination ✓. NCEES maintains a records system that makes multi-state licensure far easier."

        }), ref: "p.11" },
      { q: "Reporting a colleague's incompetence:",
        choices: ["Required when public safety threatened", "Optional always", "Forbidden", "Only after firing"], correct: 0,
        solution: S({
          c: "The FIRST canon of engineering ethics: hold paramount the safety, health, and welfare of the PUBLIC. This duty OVERRIDES loyalty to a colleague or employer when public safety is genuinely threatened.",
          s: [
            "<b>Step 1 — Match.</b> Required when public safety is at risk.",
            "<b>Step 2 — Distractor audit.</b> 'Optional always' and 'forbidden' subordinate safety to loyalty; 'only after firing' delays a safety duty."
          ],
          a: "Required when public safety is threatened.",
          v: "The professional path: document concerns, attempt internal resolution first, then escalate to the state board if unaddressed ✓ — 'whistleblowing' is a last resort, but mandatory when lives are at stake."

        }), ref: "p.5" },
      { q: "Plagiarism in engineering reports:",
        choices: ["Ethics violation (must cite sources)", "Acceptable if same firm", "OK for figures", "Allowed in drafts"], correct: 0,
        solution: S({
          c: "Engineering work demands giving CREDIT where due. Presenting others' work, data, or designs as your own is both an ethics violation (honesty/integrity canon) and a copyright issue.",
          s: [
            "<b>Step 1 — Match.</b> Ethics violation — must cite sources.",
            "<b>Step 2 — Distractor audit.</b> 'Acceptable if same firm', 'OK for figures', 'allowed in drafts' all rationalize uncredited copying — none are valid."
          ],
          a: "Ethics violation (cite your sources).",
          v: "Professional integrity isn't just academic — misattributed analysis in a sealed engineering report can carry legal liability and license consequences ✓, on top of the ethical breach."

        }), ref: "p.5" },
    ],

    // Econ — +8
    4: [
      { q: "Bond: face value $1000, coupon 5%, YTM 6%, 10 years. Price:",
        choices: ["Below $1000 (premium pricing inverted)", "Above $1000", "Exactly $1000", "Cannot determine"], correct: 0,
        solution: S({
          c: "A bond's price is the present value of its future cash flows (coupons + face value), discounted at the YIELD TO MATURITY. The key rule: when YTM > coupon rate, the bond sells at a DISCOUNT (below par).",
          s: [
            "<b>Step 1 — Compare rates.</b> YTM 6% > coupon 5% → discount bond.",
            "<b>Step 2 — Why.</b> The fixed 5% coupons look stingy next to the 6% market rate, so buyers will only pay LESS than $1000 to make up the difference.",
            "<b>Step 3 — Distractor audit.</b> 'Above $1000' is a premium (would need YTM < coupon); 'exactly $1000' needs YTM = coupon."
          ],
          a: "Below par (under $1000).",
          v: "The inverse price-yield relationship is the bedrock of bond math: rates UP → prices DOWN, always ✓. It's why rising interest rates hurt existing bondholders."

        }), ref: "p.230" },
      { q: "Effective annual rate of 12% nominal, compounded quarterly:",
        choices: ["$\\approx 12.55\\%$", "$12\\%$", "$13\\%$", "$\\approx 12.68\\%$"], correct: 0,
        solution: S({
          c: "Compounding more often than annually makes the EFFECTIVE rate exceed the nominal: $EAR = (1 + r/m)^m - 1$, where $m$ = compounding periods per year.",
          s: [
            "<b>Step 1 — Per-period rate.</b> $r/m = 12\\%/4 = 3\\%$ per quarter.",
            "<b>Step 2 — Compound.</b> $EAR = (1.03)^4 - 1 = 1.1255 - 1 = 12.55\\%$.",
            "<b>Step 3 — Distractor audit.</b> 12% ignores compounding; 12.68% is continuous compounding ($e^{0.12}-1$); 13% is a round guess."
          ],
          a: "$EAR \\approx 12.55\\%$",
          v: "The gap (12.55 vs 12) is interest earning interest ✓. More frequent compounding raises EAR toward the continuous limit $e^r - 1 = 12.75\\%$ — the ceiling no finite schedule can pass."

        }), ref: "p.230" },
      { q: "Sinking fund factor $(A/F, i, n)$:",
        choices: ["$i/((1+i)^n - 1)$", "$(1+i)^n - 1$", "$i(1+i)^n$", "$1/(1+i)^n$"], correct: 0,
        solution: S({
          c: "The sinking-fund factor $(A/F)$ finds the equal ANNUAL deposit $A$ needed to accumulate a future sum $F$. It's the reciprocal of the uniform-series compound-amount factor $(F/A)$.",
          s: [
            "<b>Step 1 — Recall $(F/A)$.</b> $(F/A) = \\dfrac{(1+i)^n - 1}{i}$.",
            "<b>Step 2 — Invert.</b> $(A/F) = \\dfrac{i}{(1+i)^n - 1}$.",
            "<b>Step 3 — Distractor audit.</b> $(1+i)^n-1$ is part of $(F/A)$; $i(1+i)^n$ is the capital-recovery numerator; $1/(1+i)^n$ is the single-payment $(P/F)$."
          ],
          a: "$(A/F) = \\dfrac{i}{(1+i)^n - 1}$",
          v: "Real use: 'how much to set aside each year to replace a $50k machine in 10 years?' ✓ — that's a sinking fund. The $(A/F)$ and $(F/A)$ factors are reciprocals, an easy memory anchor."

        }), ref: "p.231" },
      { q: "Internal rate of return (IRR) is found by:",
        choices: ["Solving NPV = 0 for $i$", "Setting cash flows to zero", "Maximizing NPV", "Adding all returns"], correct: 0,
        solution: S({
          c: "The IRR is the discount rate that makes a project's NET PRESENT VALUE equal to zero — the breakeven rate where discounted inflows exactly offset outflows.",
          s: [
            "<b>Step 1 — Match.</b> Solve NPV = 0 for $i$.",
            "<b>Step 2 — Distractor audit.</b> 'Setting cash flows to zero' is meaningless; 'maximizing NPV' is a different criterion; 'adding all returns' ignores time value."
          ],
          a: "The rate $i$ that makes NPV = 0.",
          v: "Decision rule: accept if IRR > MARR (minimum acceptable rate) ✓. IRR usually needs ITERATIVE solving (no closed form), and watch out — non-conventional cash flows can produce multiple IRRs."

        }), ref: "p.232" },
      { q: "MACRS depreciation: advantage over straight-line:",
        choices: ["Accelerated (front-loaded) tax shield", "Slower", "Simpler", "Required by law"], correct: 0,
        solution: S({
          c: "MACRS (Modified Accelerated Cost Recovery System) front-loads depreciation: bigger deductions in early years. That accelerates the TAX SHIELD — tax savings arrive sooner.",
          s: [
            "<b>Step 1 — Match.</b> Accelerated (front-loaded) tax shield.",
            "<b>Step 2 — Why sooner is better.</b> Time value of money: a tax dollar saved this year is worth more than one saved in 5 years.",
            "<b>Step 3 — Distractor audit.</b> It's not slower or simpler than straight-line; 'required by law' is wrong (it's the standard, but the ADVANTAGE asked is the timing)."
          ],
          a: "Accelerated tax savings (front-loaded).",
          v: "The total depreciation is the SAME as straight-line — only the TIMING differs ✓. Pulling deductions forward boosts a project's NPV without changing the lifetime tax total."

        }), ref: "p.230" },
      { q: "$\\$5{,}000$ now vs $\\$3{,}000$ now + $\\$3{,}000$ in 2 years at $i = 5\\%$. Which is bigger PW?",
        choices: ["$5{,}000$ vs $\\$5{,}721$ → second option", "Same", "First option", "Need IRR"], correct: 0,
        solution: S({
          c: "To compare cash flows at different times, bring them to a common point — here PRESENT WORTH, discounting future amounts by $1/(1+i)^n$.",
          s: [
            "<b>Step 1 — PW of option 1.</b> $\\$5{,}000$ (already present).",
            "<b>Step 2 — PW of option 2.</b> $3000 + \\dfrac{3000}{(1.05)^2} = 3000 + 2721 = \\$5{,}721$.",
            "<b>Step 3 — Compare.</b> $5721 > 5000$ → option 2 wins.",
            "<b>Step 4 — Distractor audit.</b> 'Same' ignores discounting; 'first option' forgets option 2's total is larger nominally; IRR isn't needed for a PW comparison."
          ],
          a: "Second option (PW $5,721 > $5,000).",
          v: "Even though $3000$ now plus $3000$ later DISCOUNTS to $5721$, its nominal total is $6000$ ✓ — splitting and delaying still beats a smaller lump sum here because the delayed portion is only lightly discounted at 5%."

        }), ref: "p.231" },
      { q: "Salvage value at end of life is treated as:",
        choices: ["Cash inflow at year n", "Initial cost reduction", "Always zero", "Tax-free always"], correct: 0,
        solution: S({
          c: "Salvage value is the recoverable worth of an asset at disposal. In cash-flow analysis it's a positive INFLOW occurring at the end of the project (year $n$).",
          s: [
            "<b>Step 1 — Match.</b> Cash inflow at year $n$.",
            "<b>Step 2 — Distractor audit.</b> It's not an initial cost reduction (it happens at the END); not always zero; not always tax-free (depreciation recapture may apply)."
          ],
          a: "An inflow at year $n$.",
          v: "Tax subtlety: if you sell ABOVE book value, the gain is taxable (depreciation recapture) ✓ — so salvage's after-tax value can be less than the sale price. It's discounted back like any future cash flow."

        }), ref: "p.232" },
      { q: "Benefit-cost ratio (BCR) > 1 means:",
        choices: ["Project economically justified", "Project loses money", "Indifferent", "Need IRR"], correct: 0,
        solution: S({
          c: "The benefit-cost ratio is $BCR = \\dfrac{PV(\\text{benefits})}{PV(\\text{costs})}$. A ratio above 1 means discounted benefits exceed discounted costs — the project is economically justified.",
          s: [
            "<b>Step 1 — Match.</b> Economically justified.",
            "<b>Step 2 — Distractor audit.</b> 'Loses money' would be BCR < 1; 'indifferent' is BCR = 1; IRR isn't required to read a BCR."
          ],
          a: "The project is economically justified.",
          v: "BCR is the standard tool for PUBLIC projects (highways, dams) where benefits and costs accrue to society ✓. Caveat: BCR ranks poorly for mutually-exclusive projects of different scale — use incremental analysis there."

        }), ref: "p.232" },
    ],

    // Materials — +5
    5: [
      { q: "Doping silicon with boron (Group III) creates:",
        choices: ["p-type (holes as majority)", "n-type", "Intrinsic", "Insulator"], correct: 0,
        solution: S({
          c: "Doping adds impurity atoms to control conductivity. Boron (Group III, 3 valence electrons) replacing a silicon atom (4 valence) leaves a 'missing electron' = a HOLE. Holes are positive majority carriers → p-type.",
          s: [
            "<b>Step 1 — Count valence electrons.</b> B has 3 vs Si's 4 → one bond short → a hole.",
            "<b>Step 2 — Match.</b> p-type (holes majority).",
            "<b>Step 3 — Distractor audit.</b> n-type needs Group V (P, As) donors; 'intrinsic' is undoped; doping never makes an insulator."
          ],
          a: "p-type (holes are majority carriers).",
          v: "Mnemonic: Boron = 'aBsent electron' = positive holes = p-type ✓. Group V donors (one EXTRA electron) make n-type — and a p-n junction of the two is the diode/transistor foundation."

        }), ref: "p.354" },
      { q: "Intrinsic Si carrier density at 300K vs 400K:",
        choices: ["Much higher at 400K (exponential)", "Lower", "Same", "Linearly higher"], correct: 0,
        solution: S({
          c: "Intrinsic carrier concentration depends STRONGLY (exponentially) on temperature: $n_i \\propto T^{3/2}e^{-E_g/(2kT)}$. Heating gives electrons enough thermal energy to jump the band gap.",
          s: [
            "<b>Step 1 — Identify the dominant term.</b> The exponential $e^{-E_g/2kT}$ dwarfs the $T^{3/2}$ factor.",
            "<b>Step 2 — Conclude.</b> 400 K → far MORE carriers than 300 K (exponentially, not linearly).",
            "<b>Step 3 — Distractor audit.</b> 'Lower' and 'same' contradict the physics; 'linearly higher' understates the exponential rise."
          ],
          a: "Exponentially higher at 400 K.",
          v: "This is exactly why chip leakage current soars with temperature and why power devices need cooling ✓ — and why germanium (small band gap) was abandoned for silicon, which tolerates heat better."

        }), ref: "p.354" },
      { q: "Resistivity of insulator typically:",
        choices: ["$> 10^8$ Ω·m", "$\\sim 1$ Ω·m", "$\\sim 10^{-8}$ Ω·m", "Zero"], correct: 0,
        solution: S({
          c: "Resistivity $\\rho$ spans an enormous range across material classes: conductors $\\sim10^{-8}$ Ω·m, semiconductors $\\sim10^{-4}$ to $10^3$, insulators $>10^8$ Ω·m.",
          s: [
            "<b>Step 1 — Match.</b> $> 10^8$ Ω·m for insulators.",
            "<b>Step 2 — Distractor audit.</b> $\\sim1$ Ω·m is semiconductor-ish; $\\sim10^{-8}$ is a metal (e.g. copper); zero would be a superconductor."
          ],
          a: "$> 10^8$ Ω·m",
          v: "The 16+ order-of-magnitude span from copper ($10^{-8}$) to good insulators ($10^{8}$+) is one of the widest ranges of any physical property ✓ — semiconductors sit in the controllable middle, which is what makes them useful."

        }), ref: "p.354" },
      { q: "Hall effect measures:",
        choices: ["Carrier type and density", "Resistance", "Capacitance", "Voltage"], correct: 0,
        solution: S({
          c: "The Hall effect: pass current through a conductor in a perpendicular magnetic field, and the Lorentz force pushes carriers sideways, creating a transverse 'Hall voltage'. Its SIGN reveals carrier TYPE; its magnitude gives carrier DENSITY.",
          s: [
            "<b>Step 1 — Match.</b> Carrier type and density.",
            "<b>Step 2 — Distractor audit.</b> Resistance, capacitance, and plain voltage are measured by other means — the Hall effect's unique payoff is identifying the carriers themselves."
          ],
          a: "Carrier type and concentration.",
          v: "The sign of the Hall voltage was the historical PROOF that current in p-type material is carried by positive holes ✓. Hall sensors are also everywhere today — position, speed, and current sensing in motors and phones."

        }), ref: "p.354" },
      { q: "Permittivity of free space $\\varepsilon_0$:",
        choices: ["$8.85\\times 10^{-12}$ F/m", "$1$ F/m", "$8.85 \\times 10^{-9}$", "$10^{-7}$"], correct: 0,
        solution: S({
          c: "The permittivity of free space $\\varepsilon_0 = 8.85\\times10^{-12}$ F/m is a fundamental constant linking electric fields to their sources — it appears in Coulomb's law, capacitance, and wave propagation.",
          s: [
            "<b>Step 1 — Match.</b> $8.85\\times10^{-12}$ F/m.",
            "<b>Step 2 — Distractor audit.</b> The exponent is the trap: $10^{-9}$ and $10^{-7}$ are off by orders of magnitude; 1 F/m is absurdly large."
          ],
          a: "$\\varepsilon_0 = 8.85\\times10^{-12}$ F/m",
          v: "Worth memorizing alongside its partner $\\mu_0 = 4\\pi\\times10^{-7}$ H/m — together they set the speed of light: $c = 1/\\sqrt{\\mu_0\\varepsilon_0} \\approx 3\\times10^8$ m/s ✓. A parallel-plate capacitor's $C = \\varepsilon_0\\varepsilon_r A/d$ uses it directly."

        }), ref: "p.355" },
    ],

    // Circuits — +25
    6: [
      { q: "Two AC voltage sources in series add as:",
        choices: ["Phasors (complex addition)", "Magnitudes", "Subtraction", "Multiplication"], correct: 0,
        solution: S({
          c: "AC voltages have both magnitude AND phase, so they must be added as PHASORS (complex numbers), not as plain magnitudes — unless they happen to be perfectly in phase.",
          s: [
            "<b>Step 1 — Match.</b> Phasor (complex) addition.",
            "<b>Step 2 — Why magnitudes fail.</b> $10\\angle0° + 10\\angle90°$ gives $\\sqrt{10^2+10^2}\\angle45° = 14.14\\angle45°$, NOT 20.",
            "<b>Step 3 — Distractor audit.</b> Subtraction/multiplication aren't how series sources combine; plain magnitude addition only works at identical phase."
          ],
          a: "Phasor (complex) addition.",
          v: "The 90° case shows it starkly: two 10-V sources can sum to 14.1 V, not 20 ✓ — phase matters. Only when phases are equal does the phasor sum reduce to simple magnitude addition."

        }), ref: "p.360" },
      { q: "Capacitor $C = 50$ µF, voltage 100V. Stored charge:",
        choices: ["$5$ mC", "$5000$ C", "$0.5$ C", "$50$ µC"], correct: 0,
        solution: S({
          c: "Capacitance relates stored charge to voltage by the defining equation $Q = CV$.",
          s: [
            "<b>Step 1 — Plug in.</b> $Q = (50\\times10^{-6})(100) = 5\\times10^{-3}$ C.",
            "<b>Step 2 — Express.</b> $= 5$ mC.",
            "<b>Step 3 — Distractor audit.</b> 5000 C mishandles the µ (×10⁻⁶); 0.5 C is off by 10; 50 µC ignores the voltage."
          ],
          a: "$Q = 5$ mC",
          v: "Units: F×V = (C/V)×V = C ✓. Watch the micro prefix — 50 µF means $50\\times10^{-6}$ F, the most common slip in capacitor problems."

        }), ref: "p.358" },
      { q: "Resistors form Wheatstone bridge in <b>balance</b>:",
        choices: ["No current through galvanometer", "Maximum current", "Half current", "Random"], correct: 0,
        solution: S({
          c: "A Wheatstone bridge is BALANCED when the ratio of resistances in its two arms is equal ($R_1/R_2 = R_3/R_4$). At balance, both midpoints sit at the same potential → ZERO current through the galvanometer.",
          s: [
            "<b>Step 1 — Match.</b> No current through the galvanometer.",
            "<b>Step 2 — Distractor audit.</b> Maximum/half/random current all describe unbalanced states — balance is specifically the null condition."
          ],
          a: "Zero galvanometer current.",
          v: "The null method is extremely precise — detecting ZERO current is easier and more accurate than measuring a value ✓. To find an unknown R, adjust a known leg until the galvanometer reads zero, then compute from the ratio. Strain gauges run slightly OFF balance to read tiny changes."

        }), ref: "p.357" },
      { q: "Two batteries 6V each in parallel (ideal): output:",
        choices: ["$6$ V", "$12$ V", "$3$ V", "$0$"], correct: 0,
        solution: S({
          c: "Ideal voltage sources of EQUAL voltage in parallel simply present that same voltage — paralleling doesn't add voltage (that's series).",
          s: [
            "<b>Step 1 — Match.</b> 6 V.",
            "<b>Step 2 — What parallel DOES add.</b> Current capacity / runtime, not voltage.",
            "<b>Step 3 — Distractor audit.</b> 12 V would be SERIES; 3 V and 0 have no basis for equal sources."
          ],
          a: "6 V",
          v: "Important caveat: paralleling sources of UNEQUAL voltage is dangerous — even tiny differences drive large circulating currents limited only by internal resistance ✓. That's why you don't parallel mismatched batteries."

        }), ref: "p.356" },
      { q: "If $i(t) = 5\\sin(2\\pi 60 t)$ A through 10Ω resistor, instantaneous power at $t = 1/240$ s:",
        choices: ["$250$ W (peak at this t)", "$125$ W", "$0$ W", "$50$ W"], correct: 0,
        solution: S({
          c: "INSTANTANEOUS power in a resistor is $p(t) = i^2(t)\\,R$ — evaluated at the specific instant, using the current's value right then.",
          s: [
            "<b>Step 1 — Find the phase angle.</b> $\\omega t = 2\\pi(60)(1/240) = \\pi/2$.",
            "<b>Step 2 — Current at that instant.</b> $i = 5\\sin(\\pi/2) = 5(1) = 5$ A (the peak).",
            "<b>Step 3 — Power.</b> $p = 5^2\\times10 = 250$ W.",
            "<b>Step 4 — Distractor audit.</b> 125 W is the AVERAGE power (a different question); 0 would need $\\sin=0$; 50 W misuses the formula."
          ],
          a: "$p = 250$ W (instantaneous peak).",
          v: "At $t=1/240$ s the sine peaks, so this is the MAXIMUM instantaneous power ✓ — exactly twice the 125-W average, which is the general relationship for a resistor on a sinusoid ($p_{peak} = 2P_{avg}$)."

        }), ref: "p.356" },
      { q: "Average power dissipated by previous circuit (5A peak in 10Ω):",
        choices: ["$125$ W", "$250$ W", "$25$ W", "$10$ W"], correct: 0,
        solution: S({
          c: "AVERAGE power in a resistor on a sinusoid uses the RMS current: $P_{avg} = I_{rms}^2 R = \\dfrac{I_{peak}^2}{2}R$ (since $I_{rms} = I_{peak}/\\sqrt2$).",
          s: [
            "<b>Step 1 — RMS current.</b> $I_{rms} = 5/\\sqrt2 = 3.54$ A.",
            "<b>Step 2 — Average power.</b> $P_{avg} = (25/2)(10) = 125$ W.",
            "<b>Step 3 — Distractor audit.</b> 250 W is the PEAK instantaneous (forgot the factor of 2); 25 W and 10 W misapply the formula."
          ],
          a: "$P_{avg} = 125$ W",
          v: "The factor-of-2 link: average power is exactly HALF the peak instantaneous power for a resistor on a sine ✓. RMS exists precisely so AC power formulas look like DC ones — $I_{rms}^2R$ delivers the same heating as that DC current."

        }), ref: "p.362" },
      { q: "Impedance of a $100$ mH inductor at 1 kHz:",
        choices: ["$\\approx 628\\ \\Omega$ (purely reactive)", "$100\\ \\Omega$", "$1000\\ \\Omega$", "$6.28\\ \\Omega$"], correct: 0,
        solution: S({
          c: "An inductor's impedance is purely reactive: $X_L = 2\\pi f L = \\omega L$ — it rises with frequency (inductors resist fast changes).",
          s: [
            "<b>Step 1 — Plug in.</b> $X_L = 2\\pi(1000)(0.1) = 200\\pi \\approx 628\\ \\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 100 Ω and 1000 Ω ignore the $2\\pi f$ scaling; 6.28 Ω drops three decades."
          ],
          a: "$X_L \\approx 628\\ \\Omega$ (purely reactive).",
          v: "Frequency dependence is the key: at DC ($f=0$) an inductor is a short (0 Ω); at high frequency it's nearly open ✓ — the opposite of a capacitor. This is why inductors block AC and pass DC."

        }), ref: "p.360" },
      { q: "Mesh analysis: 2 loops, 2 unknown currents. Method:",
        choices: ["Write KVL around each loop, solve linear system", "Use KCL at nodes", "Use Thévenin", "Trial and error"], correct: 0,
        solution: S({
          c: "Mesh analysis assigns a circulating CURRENT to each loop, writes Kirchhoff's Voltage Law (sum of voltage drops = 0) around each, and solves the resulting linear system.",
          s: [
            "<b>Step 1 — Match.</b> Write KVL per loop, solve the linear system.",
            "<b>Step 2 — Distractor audit.</b> KCL at nodes is NODAL analysis (the dual method); Thévenin reduces a network but isn't the systematic solve; trial-and-error isn't a method."
          ],
          a: "KVL around each loop → solve linear equations.",
          v: "Key detail: a branch SHARED by two meshes carries the algebraic DIFFERENCE of the two mesh currents ✓. Choose mesh vs nodal by counting unknowns — fewer loops than nodes favors mesh."

        }), ref: "p.357" },
      { q: "Nodal analysis: identify reference node, write KCL at each unknown node, in matrix form:",
        choices: ["Y · V = I", "V · I = R", "K = V/I", "Random"], correct: 0,
        solution: S({
          c: "Nodal (node-voltage) analysis picks a reference (ground) node, then writes KCL (sum of currents = 0) at each remaining node. In matrix form this is $\\mathbf{Y}\\mathbf{V} = \\mathbf{I}$ — admittance matrix × node voltages = source currents.",
          s: [
            "<b>Step 1 — Match.</b> $\\mathbf{Y}\\mathbf{V} = \\mathbf{I}$.",
            "<b>Step 2 — Distractor audit.</b> 'V·I = R' is dimensional nonsense; 'K = V/I' isn't a system; 'random' is wrong."
          ],
          a: "$\\mathbf{Y}\\mathbf{V} = \\mathbf{I}$",
          v: "For $N+1$ nodes you get $N$ equations ✓, and $\\mathbf{Y}$ is symmetric for circuits of resistors and independent sources. It's the matrix form behind every SPICE simulator and power-flow solver."

        }), ref: "p.357" },
      { q: "Norton-to-Thévenin conversion: $I_N = 4$ A, $R_N = 10$Ω. $V_{Th}$:",
        choices: ["$40$ V", "$0.4$ V", "$4$ V", "$10$ V"], correct: 0,
        solution: S({
          c: "Norton and Thévenin equivalents are interchangeable: same source resistance $R$, and the voltages/currents relate by Ohm's law: $V_{Th} = I_N R_N$.",
          s: [
            "<b>Step 1 — Apply.</b> $V_{Th} = I_N R_N = 4\\times10 = 40$ V.",
            "<b>Step 2 — Distractor audit.</b> 0.4 V divides instead of multiplying; 4 V and 10 V each drop one factor."
          ],
          a: "$V_{Th} = 40$ V",
          v: "Both equivalents share the SAME $R$ ($R_{Th}=R_N=10\\ \\Omega$) ✓. A Norton (current source ∥ R) and a Thévenin (voltage source + series R) are indistinguishable from outside the terminals — pick whichever simplifies the math."

        }), ref: "p.357" },
      { q: "Power factor improvement: 100 kW load at $pf=0.6$ lagging. Need $Q_C$ for $pf=1$:",
        choices: ["$\\approx 133$ kVAR", "$100$ kVAR", "$60$ kVAR", "$167$ kVAR"], correct: 0,
        solution: S({
          c: "To correct power factor, add a capacitor supplying reactive power $Q_C$ to cancel the load's lagging $Q$. The load's reactive demand is $Q_{load} = P\\tan\\theta$, where $\\theta = \\cos^{-1}(pf)$.",
          s: [
            "<b>Step 1 — Find the angle.</b> $\\theta = \\cos^{-1}(0.6) = 53.13°$.",
            "<b>Step 2 — Load reactive power.</b> $Q_{load} = 100\\tan(53.13°) = 100\\times1.333 = 133.3$ kVAR.",
            "<b>Step 3 — For unity pf.</b> Total Q must be 0, so $Q_C = Q_{load} = 133.3$ kVAR.",
            "<b>Step 4 — Distractor audit.</b> 100 kVAR confuses Q with P; 60 misuses pf; 167 is the apparent power S, not Q."
          ],
          a: "$Q_C \\approx 133$ kVAR",
          v: "After correction, the source delivers only the 100 kW of REAL power — current drops, $I^2R$ losses fall, and the utility stops penalizing low pf ✓. The capacitor 'recycles' the reactive energy the motor needs locally."

        }), ref: "p.362" },
      { q: "Resonance: $L = 50$ mH, $C = 0.2$ µF. Resonant freq:",
        choices: ["$\\approx 1591$ Hz", "$1$ kHz", "$10$ kHz", "$159$ Hz"], correct: 0,
        solution: S({
          c: "An LC circuit resonates where inductive and capacitive reactances cancel, at $f_0 = \\dfrac{1}{2\\pi\\sqrt{LC}}$.",
          s: [
            "<b>Step 1 — Product LC.</b> $(0.05)(0.2\\times10^{-6}) = 10^{-8}$, so $\\sqrt{LC} = 10^{-4}$.",
            "<b>Step 2 — Frequency.</b> $f_0 = \\dfrac{1}{2\\pi\\times10^{-4}} \\approx 1591$ Hz.",
            "<b>Step 3 — Distractor audit.</b> 1 kHz, 10 kHz, 159 Hz are off — usually from dropping the $2\\pi$ or a power-of-ten slip in LC."
          ],
          a: "$f_0 \\approx 1591$ Hz",
          v: "At $f_0$, $X_L = X_C$ so they cancel and the circuit looks purely resistive ✓ — the basis of every radio tuner, oscillator, and filter. Note $f_0$ depends only on the PRODUCT LC, not on R."

        }), ref: "p.361" },
      { q: "Parallel resonance impedance:",
        choices: ["Maximum at $f_0$ (purely R)", "Minimum at $f_0$", "Always low", "Always high"], correct: 0,
        solution: S({
          c: "A PARALLEL LC 'tank' at resonance has its branch reactances cancel, leaving a very HIGH impedance (ideally infinite — only the small resistance limits it). This is the OPPOSITE of series resonance.",
          s: [
            "<b>Step 1 — Match.</b> Maximum impedance at $f_0$ (purely resistive).",
            "<b>Step 2 — Contrast.</b> SERIES resonance gives MINIMUM impedance (= R); parallel gives maximum.",
            "<b>Step 3 — Distractor audit.</b> 'Minimum at f0' is the series case; 'always low/high' ignore the frequency dependence."
          ],
          a: "Maximum (high) impedance at resonance.",
          v: "Because the tank blocks current at $f_0$, it passes everything ELSE — making it a band-stop element, or a band-pass when used right ✓. Internally, large currents circulate between L and C even though little flows from the source."

        }), ref: "p.361" },
      { q: "Power dissipation in 240V single-phase resistive load 5 kW. Current:",
        choices: ["$\\approx 20.8$ A", "$1200$ A", "$5$ A", "$50$ A"], correct: 0,
        solution: S({
          c: "For a resistive load, real power $P = VI$, so the current is $I = P/V$.",
          s: [
            "<b>Step 1 — Divide.</b> $I = 5000/240 = 20.83$ A.",
            "<b>Step 2 — Distractor audit.</b> 1200 A forgets to divide; 5 A and 50 A misplace the decimal."
          ],
          a: "$I \\approx 20.8$ A",
          v: "Practical check: 20.8 A on a 240-V circuit needs a 30-A breaker (the 80% rule caps continuous load at 24 A) ✓ — typical for a dryer or small EV charger."

        }), ref: "p.356" },
      { q: "Three R in parallel: 6Ω, 12Ω, 24Ω:",
        choices: ["$\\approx 3.43\\ \\Omega$", "$7\\ \\Omega$", "$2\\ \\Omega$", "$42\\ \\Omega$"], correct: 0,
        solution: S({
          c: "Parallel resistances combine by RECIPROCALS: $\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1}+\\dfrac{1}{R_2}+\\dfrac{1}{R_3}$. The result is always SMALLER than the smallest resistor.",
          s: [
            "<b>Step 1 — Sum reciprocals.</b> Common denominator 24: $\\dfrac{4}{24}+\\dfrac{2}{24}+\\dfrac{1}{24} = \\dfrac{7}{24}$.",
            "<b>Step 2 — Invert.</b> $R_{eq} = 24/7 \\approx 3.43\\ \\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 7 Ω inverts wrong; 42 Ω adds them (series mistake); 2 Ω overshoots below the floor."
          ],
          a: "$R_{eq} \\approx 3.43\\ \\Omega$",
          v: "Sanity: 3.43 < 6 (the smallest resistor) ✓ — parallel paths always lower resistance because they add conductance. More current routes available means less total opposition."

        }), ref: "p.356" },
      { q: "Voltage across cap charging through R from $V_s$: at $t = 2\\tau$:",
        choices: ["$\\approx 0.865 V_s$", "$0.5 V_s$", "$0.632 V_s$", "$0.99 V_s$"], correct: 0,
        solution: S({
          c: "A charging capacitor follows $v_C(t) = V_s(1 - e^{-t/\\tau})$, where $\\tau = RC$. After $n$ time constants, the fraction charged is $1 - e^{-n}$.",
          s: [
            "<b>Step 1 — At $t = 2\\tau$.</b> $1 - e^{-2} = 1 - 0.135 = 0.865$.",
            "<b>Step 2 — Distractor audit.</b> 0.632 is ONE $\\tau$ ($1-e^{-1}$); 0.5 is roughly $0.7\\tau$; 0.99 is about $4.6\\tau$."
          ],
          a: "$\\approx 0.865\\,V_s$",
          v: "Memorize the charge-up ladder: $1\\tau$→63%, $2\\tau$→86.5%, $3\\tau$→95%, $5\\tau$→99.3% (effectively done) ✓. The '5τ rule' is why engineers treat a capacitor as fully charged after five time constants."

        }), ref: "p.358" },
      { q: "Current through inductor at $t = 0^+$ if it was zero just before, V applied:",
        choices: ["$0$ (continuous)", "$V/R$ immediately", "$\\infty$", "$V$"], correct: 0,
        solution: S({
          c: "An inductor's current CANNOT change instantaneously (it would require infinite voltage, $v = L\\,di/dt$). So $i_L(0^+) = i_L(0^-)$ — the current right after switching equals the current right before.",
          s: [
            "<b>Step 1 — Apply.</b> It was 0 just before, so $i_L(0^+) = 0$.",
            "<b>Step 2 — Distractor audit.</b> $V/R$ immediately ignores the inductor's inertia; ∞ and $V$ violate continuity."
          ],
          a: "0 (current is continuous).",
          v: "The dual rule completes the pair: a CAPACITOR's voltage can't jump (current can), an INDUCTOR's current can't jump (voltage can) ✓. These continuity rules set every initial condition in transient analysis."

        }), ref: "p.358" },
      { q: "AC sinusoid in 60 Hz: phase shift of 1 ms equivalent to:",
        choices: ["$21.6°$", "$60°$", "$90°$", "$1°$"], correct: 0,
        solution: S({
          c: "A time delay maps to a phase angle by what fraction of the PERIOD it represents: $\\theta = 360°\\times\\dfrac{\\Delta t}{T}$, with $T = 1/f$.",
          s: [
            "<b>Step 1 — Period.</b> $T = 1/60 = 16.67$ ms.",
            "<b>Step 2 — Fraction.</b> $\\Delta t/T = 1/16.67 = 0.06$.",
            "<b>Step 3 — Angle.</b> $360°\\times0.06 = 21.6°$.",
            "<b>Step 4 — Distractor audit.</b> 60° and 90° overstate it; 1° understates."
          ],
          a: "$21.6°$",
          v: "Cross-check via $\\theta = \\omega\\Delta t = 2\\pi(60)(0.001) = 0.377$ rad $= 21.6°$ ✓. A full cycle (16.67 ms) is 360°, so 1 ms is a small slice — useful for relating scope time-shifts to phase."

        }), ref: "p.360" },
      { q: "Power dissipated in a $\\Delta$-connected load: $V_{LL}=400$V, $Z_\\phi=20\\ \\Omega$ (resistive):",
        choices: ["$24$ kW", "$8$ kW", "$48$ kW", "$2.4$ kW"], correct: 0,
        solution: S({
          c: "In a DELTA connection, each phase impedance sees the full LINE voltage ($V_\\phi = V_{LL}$). Per-phase power $P_\\phi = V_\\phi^2/R$; total is three phases: $P_{total} = 3P_\\phi$.",
          s: [
            "<b>Step 1 — Per-phase power.</b> $P_\\phi = 400^2/20 = 8000$ W.",
            "<b>Step 2 — Total.</b> $3\\times8000 = 24$ kW.",
            "<b>Step 3 — Distractor audit.</b> 8 kW stops at one phase; 48 kW doubles wrongly; 2.4 kW slips a decade."
          ],
          a: "$P_{total} = 24$ kW",
          v: "The delta rule $V_\\phi = V_{LL}$ is the key — in WYE you'd divide by $\\sqrt3$ first, cutting power to a THIRD ✓. That 3:1 ratio is exactly what the Y-Δ motor starter exploits."

        }), ref: "p.363" },
      { q: "Energy stored in $L=20$ mH at $I = 5$ A:",
        choices: ["$0.25$ J", "$25$ mJ", "$2.5$ J", "$0.5$ J"], correct: 0,
        solution: S({
          c: "Energy stored in an inductor's magnetic field: $W = \\tfrac12 L I^2$.",
          s: [
            "<b>Step 1 — Plug in.</b> $W = \\tfrac12(0.02)(5^2) = \\tfrac12(0.02)(25) = 0.25$ J.",
            "<b>Step 2 — Distractor audit.</b> 25 mJ forgets the $I^2$ properly; 2.5 J is off by 10; 0.5 J forgets the ½."
          ],
          a: "$W = 0.25$ J",
          v: "Note energy scales with $I^2$ — doubling current QUADRUPLES stored energy ✓. The capacitor analog is $W = \\tfrac12 CV^2$; both store energy in fields (magnetic for L, electric for C)."

        }), ref: "p.358" },
      { q: "AC circuit: $V = 100∠0°$, $Z = 25∠-30°$. Current:",
        choices: ["$4∠30°$ A", "$4∠-30°$ A", "$2500∠-30°$", "$100∠30°$"], correct: 0,
        solution: S({
          c: "Ohm's law in phasor form: $I = V/Z$. Divide the MAGNITUDES, SUBTRACT the angles.",
          s: [
            "<b>Step 1 — Magnitude.</b> $|I| = 100/25 = 4$ A.",
            "<b>Step 2 — Angle.</b> $\\angle I = 0° - (-30°) = +30°$.",
            "<b>Step 3 — Distractor audit.</b> $4\\angle-30°$ adds the angle instead of subtracting; $2500\\angle-30°$ multiplies magnitudes; $100\\angle30°$ forgets to divide."
          ],
          a: "$I = 4\\angle30°$ A",
          v: "Current LEADS voltage (positive angle) → the load is CAPACITIVE, consistent with $Z$'s negative angle ✓ ('ICE': in a Capacitor, I leads E). Phasor division is just polar arithmetic — divide magnitudes, subtract angles."

        }), ref: "p.360" },
      { q: "Apparent power $|S| = 10$ kVA, $P = 8$ kW. Q:",
        choices: ["$6$ kVAR", "$2$ kVAR", "$18$ kVAR", "$8$ kVAR"], correct: 0,
        solution: S({
          c: "The power triangle: apparent power S (kVA), real power P (kW), and reactive power Q (kVAR) form a right triangle with $|S|^2 = P^2 + Q^2$.",
          s: [
            "<b>Step 1 — Solve for Q.</b> $Q = \\sqrt{|S|^2 - P^2} = \\sqrt{10^2 - 8^2} = \\sqrt{100-64} = \\sqrt{36} = 6$ kVAR.",
            "<b>Step 2 — Distractor audit.</b> 2 kVAR subtracts instead of using Pythagoras; 18 adds wrongly; 8 just echoes P."
          ],
          a: "$Q = 6$ kVAR",
          v: "It's a 6-8-10 right triangle ✓, and the power factor is $P/|S| = 8/10 = 0.8$. The three powers ALWAYS relate by this triangle — knowing any two gives the third."

        }), ref: "p.362" },
      { q: "Open circuit voltage between A and B, after removing load: this is...",
        choices: ["Thévenin voltage $V_{Th}$", "Norton current", "Short-circuit current", "Reactance"], correct: 0,
        solution: S({
          c: "The Thévenin equivalent of any linear network is a voltage source $V_{Th}$ in series with $R_{Th}$. $V_{Th}$ is defined as the OPEN-CIRCUIT voltage at the terminals (load removed).",
          s: [
            "<b>Step 1 — Match.</b> Thévenin voltage $V_{Th}$.",
            "<b>Step 2 — Distractor audit.</b> Norton current is the SHORT-circuit current (the dual); short-circuit current isn't the open-circuit voltage; reactance is unrelated."
          ],
          a: "$V_{Th}$ (open-circuit terminal voltage).",
          v: "The companion measurement: short the terminals to get $I_N$ (Norton), and $R_{Th} = V_{Th}/I_N$ ✓ — two measurements fully characterize any linear two-terminal network."

        }), ref: "p.357" },
      { q: "Short-circuit current at terminals = ",
        choices: ["Norton current $I_N$", "Thévenin voltage", "Resistance", "Zero"], correct: 0,
        solution: S({
          c: "Shorting the output terminals (zero load impedance) forces all available current through the short — this is the NORTON current $I_N$, the dual of Thévenin's open-circuit voltage.",
          s: [
            "<b>Step 1 — Match.</b> Norton current $I_N$.",
            "<b>Step 2 — Distractor audit.</b> Thévenin voltage is the OPEN-circuit case; resistance and zero aren't the short-circuit current."
          ],
          a: "$I_N$ (Norton current).",
          v: "Together the pair defines the source: $R_{Th} = R_N = V_{Th}/I_N$ ✓. Open-circuit gives the voltage source; short-circuit gives the current source — same network, two viewpoints."

        }), ref: "p.357" },
      { q: "Time constant of RL circuit: $R=100$, $L = 2$ H:",
        choices: ["$0.02$ s = 20 ms", "$200$ s", "$0.005$ s", "$50$ ms"], correct: 0,
        solution: S({
          c: "An RL circuit's time constant is $\\tau = L/R$ (contrast with RC's $\\tau = RC$). It sets how fast the current rises or decays.",
          s: [
            "<b>Step 1 — Divide.</b> $\\tau = L/R = 2/100 = 0.02$ s = 20 ms.",
            "<b>Step 2 — Distractor audit.</b> 200 s multiplies instead of dividing; 0.005 s and 50 ms invert or mis-scale."
          ],
          a: "$\\tau = 20$ ms",
          v: "Don't mix the forms: RL uses $L/R$, RC uses $RC$ ✓ — both give seconds. After $5\\tau$ (here 100 ms) the inductor current has essentially reached its final steady value $V/R$."

        }), ref: "p.358" },
    ],

    // Linear Sys — +10
    7: [
      { q: "Laplace transform of $e^{-3t}\\sin 4t$:",
        choices: ["$\\dfrac{4}{(s+3)^2+16}$", "$\\dfrac{s}{s^2+16}$", "$\\dfrac{4}{s^2+16}$", "$\\dfrac{1}{s+3}$"], correct: 0,
        solution: S({
          c: "The FREQUENCY-SHIFT property: multiplying a function by $e^{-at}$ in time replaces $s$ with $s+a$ in the transform: $\\mathcal L\\{e^{-at}f(t)\\} = F(s+a)$.",
          s: [
            "<b>Step 1 — Base transform.</b> $\\mathcal L\\{\\sin 4t\\} = \\dfrac{4}{s^2+16}$.",
            "<b>Step 2 — Apply the shift.</b> Replace $s\\to s+3$: $\\dfrac{4}{(s+3)^2+16}$.",
            "<b>Step 3 — Distractor audit.</b> $s/(s^2+16)$ is $\\cos4t$; $4/(s^2+16)$ forgot the shift; $1/(s+3)$ is $e^{-3t}$ alone."
          ],
          a: "$\\dfrac{4}{(s+3)^2+16}$",
          v: "The $e^{-3t}$ envelope makes a DECAYING sinusoid — physically a damped oscillation ✓, and the $+3$ shift moves the poles left into the stable region, exactly mirroring that decay."

        }), ref: "p.56" },
      { q: "DC gain of $H(s) = K/(s^2+as+b)$:", choices: ["$K/b$", "$K$", "$K/a$", "$K \\cdot b$"], correct: 0,
        solution: S({
          c: "DC gain = the transfer function's value at $s=0$ (zero frequency, steady state): substitute $s=0$ into $H(s)$.",
          s: [
            "<b>Step 1 — Set s = 0.</b> $H(0) = \\dfrac{K}{0+0+b} = \\dfrac{K}{b}$.",
            "<b>Step 2 — Distractor audit.</b> $K$ forgets the denominator constant; $K/a$ uses the wrong coefficient; $Kb$ multiplies instead of dividing."
          ],
          a: "$K/b$",
          v: "Physically, DC gain is the steady-state output for a constant (step) input ✓ — apply 1 V DC and the output settles to $K/b$. The $a$ (damping) term vanishes at DC because it multiplies $s$."

        }), ref: "p.366" },
      { q: "Final value $\\lim_{t\\to\\infty}y(t)$ for $Y(s) = 10/[s(s+5)]$:",
        choices: ["$2$", "$10$", "$0$", "$\\infty$"], correct: 0,
        solution: S({
          c: "The Final Value Theorem gets the steady-state value WITHOUT inverting the transform: $\\lim_{t\\to\\infty}y(t) = \\lim_{s\\to0}sY(s)$ — valid only if the system is stable.",
          s: [
            "<b>Step 1 — Multiply by s.</b> $sY(s) = \\dfrac{10}{s+5}$.",
            "<b>Step 2 — Let s→0.</b> $\\dfrac{10}{5} = 2$.",
            "<b>Step 3 — Distractor audit.</b> 10 forgets to evaluate the limit; 0 misreads; ∞ would need an unstable pole."
          ],
          a: "$y(\\infty) = 2$",
          v: "The $1/s$ factor in $Y(s)$ signals a STEP input; the system settles to 2 ✓. FVT is a huge shortcut for steady-state — but check stability first (all poles in the left half-plane), or it gives nonsense."

        }), ref: "p.56" },
      { q: "$H(s) = 1/(s^2 + 2s + 1) = 1/(s+1)^2$. Pole multiplicity at $s=-1$:",
        choices: ["$2$ (double pole)", "$1$", "$0$", "$\\infty$"], correct: 0,
        solution: S({
          c: "A pole's MULTIPLICITY is how many times its factor repeats. $(s+1)^2$ means $s=-1$ is a root TWICE → a double (repeated) pole.",
          s: [
            "<b>Step 1 — Factor.</b> $s^2+2s+1 = (s+1)^2$ → root $s=-1$ with multiplicity 2.",
            "<b>Step 2 — Distractor audit.</b> 1 would be a simple pole; 0 means no pole there; ∞ is meaningless."
          ],
          a: "Multiplicity 2 (double pole).",
          v: "Repeated poles change the time response: a double pole at $-1$ gives $(A + Bt)e^{-t}$ — note the extra $te^{-t}$ term ✓. This is the critically-damped case (fastest settling without overshoot)."

        }), ref: "p.55" },
      { q: "Frequency where 1st-order LPF gain drops by half (-6 dB):",
        choices: ["$\\sqrt{3}\\,\\omega_c$", "$\\omega_c/2$", "$2\\omega_c$", "$\\omega_c$"], correct: 0,
        solution: S({
          c: "A first-order low-pass filter has $|H(j\\omega)|^2 = \\dfrac{1}{1+(\\omega/\\omega_c)^2}$. 'Half the gain' (−6 dB) means $|H| = 1/2$, so $|H|^2 = 1/4$.",
          s: [
            "<b>Step 1 — Set up.</b> $\\dfrac{1}{1+(\\omega/\\omega_c)^2} = \\dfrac14$.",
            "<b>Step 2 — Solve.</b> $1+(\\omega/\\omega_c)^2 = 4 \\Rightarrow (\\omega/\\omega_c)^2 = 3 \\Rightarrow \\omega = \\sqrt3\\,\\omega_c$.",
            "<b>Step 3 — Distractor audit.</b> $\\omega_c$ itself is the −3 dB point (gain $1/\\sqrt2$, not 1/2); $\\omega_c/2$ and $2\\omega_c$ don't satisfy the equation."
          ],
          a: "$\\omega = \\sqrt3\\,\\omega_c$",
          v: "Don't confuse −3 dB (the CUTOFF, gain $1/\\sqrt2 \\approx 0.707$) with −6 dB (gain exactly 1/2) ✓. The cutoff $\\omega_c$ is where power halves; −6 dB is where amplitude halves, a bit higher in frequency."

        }), ref: "p.366" },
      { q: "Q factor for parallel RLC with $L=10$ mH, $C=10$ nF, $R=10$ kΩ:",
        choices: ["$10$", "$1$", "$100$", "$0.1$"], correct: 0,
        solution: S({
          c: "For a PARALLEL RLC circuit, quality factor $Q = R\\sqrt{C/L}$ (note: this is the INVERSE form of the series $Q = \\tfrac1R\\sqrt{L/C}$).",
          s: [
            "<b>Step 1 — Ratio C/L.</b> $\\sqrt{10^{-8}/10^{-2}} = \\sqrt{10^{-6}} = 10^{-3}$.",
            "<b>Step 2 — Multiply by R.</b> $Q = 10^4\\times10^{-3} = 10$.",
            "<b>Step 3 — Distractor audit.</b> 1, 100, 0.1 come from power-of-ten slips or using the series formula by mistake."
          ],
          a: "$Q = 10$",
          v: "Higher Q = sharper resonance / narrower bandwidth ✓. Crucially, for PARALLEL RLC bigger R gives HIGHER Q (less damping), the opposite of series RLC where bigger R lowers Q — a frequent trap."

        }), ref: "p.361" },
      { q: "Half-power frequencies: separated by:", choices: ["BW = $\\omega_0/Q$", "$2\\pi$", "$Q\\omega_0$", "Fixed"], correct: 0,
        solution: S({
          c: "The bandwidth of a resonant circuit — the gap between its two half-power (−3 dB) frequencies — is $BW = \\omega_0/Q$. High Q → narrow band.",
          s: [
            "<b>Step 1 — Match.</b> $BW = \\omega_0/Q$.",
            "<b>Step 2 — Distractor audit.</b> $2\\pi$ is just a constant; $Q\\omega_0$ inverts the relationship; 'fixed' ignores Q's role."
          ],
          a: "$BW = \\omega_0/Q$",
          v: "This is WHY Q matters for selectivity: a radio tuner needs high Q to pull one station out of many — $BW = \\omega_0/Q$ means doubling Q halves the bandwidth ✓, sharpening the filter."

        }), ref: "p.361" },
      { q: "$\\mathcal{L}\\{t\\}$ = ",
        choices: ["$1/s^2$", "$1/s$", "$s$", "$s^2$"], correct: 0,
        solution: S({
          c: "Standard Laplace pair: $\\mathcal L\\{t^n\\} = \\dfrac{n!}{s^{n+1}}$. For $n=1$ this gives $1/s^2$.",
          s: [
            "<b>Step 1 — Apply with n=1.</b> $\\dfrac{1!}{s^{1+1}} = \\dfrac{1}{s^2}$.",
            "<b>Step 2 — Distractor audit.</b> $1/s$ is the transform of a constant (1 or step); $s$ and $s^2$ are differentiators, not these signals."
          ],
          a: "$1/s^2$",
          v: "Build the ladder: $1\\to1/s$, $t\\to1/s^2$, $t^2\\to2/s^3$ ✓ — each integration in time adds a power of $s$ in the denominator. A ramp $t$ corresponds to $1/s^2$."

        }), ref: "p.56" },
      { q: "Inverse Laplace of $1/s^2$:", choices: ["$t$", "$\\sin t$", "$e^t$", "$1$"], correct: 0,
        solution: S({
          c: "Inverse Laplace just reads the table backward: $1/s^2 \\leftrightarrow t$ (the unit ramp).",
          s: [
            "<b>Step 1 — Match.</b> $\\mathcal L^{-1}\\{1/s^2\\} = t$.",
            "<b>Step 2 — Distractor audit.</b> $\\sin t \\leftrightarrow 1/(s^2+1)$; $e^t \\leftrightarrow 1/(s-1)$; $1 \\leftrightarrow 1/s$."
          ],
          a: "$t$",
          v: "Forward and inverse are the same table, used in opposite directions ✓ — $t$ in time is $1/s^2$ in s, and vice versa. The repeated $s$ in the denominator is the signature of the ramp."

        }), ref: "p.56" },
      { q: "Transient response decays slower if pole is:",
        choices: ["Closer to imaginary axis (smaller |real|)", "Far left", "At origin", "Complex"], correct: 0,
        solution: S({
          c: "A pole at $s = \\sigma$ contributes a term $e^{\\sigma t}$. The DECAY RATE is set by $|\\text{Re(pole)}|$: the SMALLER that magnitude (closer to the imaginary axis), the slower the decay.",
          s: [
            "<b>Step 1 — Match.</b> Closer to the imaginary axis (smaller $|\\text{real part}|$).",
            "<b>Step 2 — Distractor audit.</b> 'Far left' = fast decay (opposite); 'at origin' = no decay (marginal); 'complex' affects oscillation, not decay rate."
          ],
          a: "Closer to the jω-axis → slower decay.",
          v: "Numbers make it vivid: pole at $-0.1$ gives $\\tau = 10$ s (sluggish); pole at $-100$ gives $\\tau = 0.01$ s (snappy) ✓. The DOMINANT (slowest) pole — nearest the axis — governs the overall settling time."

        }), ref: "p.365" },
    ],

    // Signal — +10
    8: [
      { q: "Bandwidth of $H(s) = 100/(s+10)$:", choices: ["$10$ rad/s", "$100$ rad/s", "$1$", "$50$"], correct: 0,
        solution: S({
          c: "For a first-order low-pass filter, the bandwidth equals the −3 dB cutoff, which sits at the POLE location: $\\omega_c = |\\text{pole}|$.",
          s: [
            "<b>Step 1 — Find the pole.</b> $s+10=0 \\Rightarrow s=-10$.",
            "<b>Step 2 — Bandwidth.</b> $BW = 10$ rad/s.",
            "<b>Step 3 — Distractor audit.</b> 100 is the DC gain numerator (not bandwidth); 1 and 50 have no basis."
          ],
          a: "$BW = 10$ rad/s",
          v: "The numerator (100) sets the GAIN, the pole (−10) sets the BANDWIDTH — independent properties ✓. DC gain here is $100/10 = 10$; the cutoff is where it falls to $10/\\sqrt2$."

        }), ref: "p.366" },
      { q: "Sample rate of CD audio:", choices: ["$44.1$ kHz", "$48$ kHz", "$8$ kHz", "$96$ kHz"], correct: 0,
        solution: S({
          c: "CD audio is standardized at 44.1 kHz sampling. By Nyquist, that captures frequencies up to 22.05 kHz — just above the ~20 kHz limit of human hearing.",
          s: [
            "<b>Step 1 — Match.</b> 44.1 kHz.",
            "<b>Step 2 — Distractor audit.</b> 48 kHz is the video/DVD standard; 8 kHz is telephone; 96 kHz is high-res studio audio."
          ],
          a: "44.1 kHz",
          v: "The choice flows from Nyquist: to reproduce 20 kHz you need >40 kHz sampling, and 44.1 leaves margin for the anti-alias filter's rolloff ✓. Full CD stream: 44.1k × 16-bit × 2 channels = 1411 kbps."

        }), ref: "p.375" },
      { q: "Digital audio bit rate: 44.1 kHz × 16 bit × 2 channels:",
        choices: ["$1411$ kbps", "$705$ kbps", "$176$ kbps", "$88$ kbps"], correct: 0,
        solution: S({
          c: "Uncompressed PCM bit rate = sample rate × bits per sample × number of channels.",
          s: [
            "<b>Step 1 — Multiply.</b> $44{,}100 \\times 16 \\times 2 = 1{,}411{,}200$ bps.",
            "<b>Step 2 — Express.</b> ≈ 1411 kbps.",
            "<b>Step 3 — Distractor audit.</b> 705 kbps is one channel (mono); 176 and 88 drop further factors."
          ],
          a: "$\\approx 1411$ kbps",
          v: "This is why a 3-minute CD track is ~30 MB uncompressed ✓ — and why MP3 (lossy, ~128-320 kbps) was revolutionary, shrinking files ~10× by discarding perceptually inaudible detail."

        }), ref: "p.375" },
      { q: "Lossy compression (MP3, JPEG) sacrifices:",
        choices: ["Some accuracy for smaller files", "Bandwidth", "Memory only", "Time only"], correct: 0,
        solution: S({
          c: "LOSSY compression discards information judged perceptually unimportant, trading some ACCURACY for much smaller files. The original cannot be perfectly recovered.",
          s: [
            "<b>Step 1 — Match.</b> Some accuracy for smaller files.",
            "<b>Step 2 — Distractor audit.</b> It doesn't sacrifice 'bandwidth' or 'time'; 'memory only' misses that fidelity is the thing given up."
          ],
          a: "Accuracy, in exchange for size.",
          v: "Contrast LOSSLESS (FLAC, PNG, ZIP) — perfect reconstruction, ~2× compression — with lossy's 10-20× ✓. Lossy works because human eyes/ears don't notice the removed detail; it's wrong for data that must be exact (text, code)."

        }), ref: "p.371" },
      { q: "Spectrum analyzer measures:", choices: ["Frequency content of a signal", "Voltage only", "Time domain", "Phase only"], correct: 0,
        solution: S({
          c: "A spectrum analyzer displays a signal's power versus FREQUENCY — the frequency-domain view — revealing which frequency components are present and how strong.",
          s: [
            "<b>Step 1 — Match.</b> Frequency content of a signal.",
            "<b>Step 2 — Distractor audit.</b> Time-domain (voltage vs time) is the OSCILLOSCOPE's job; 'phase only' is too narrow."
          ],
          a: "Frequency content (power vs frequency).",
          v: "Scope and spectrum analyzer are Fourier duals — same signal, two views (time vs frequency) ✓. A vector signal analyzer shows both. Spectrum analyzers find harmonics, noise, and interference invisible on a scope."

        }), ref: "p.371" },
      { q: "Aliased frequency from 13 kHz sampled at 10 kHz:",
        choices: ["$3$ kHz", "$13$ kHz", "$10$ kHz", "$2$ kHz"], correct: 0,
        solution: S({
          c: "When a signal exceeds the Nyquist frequency (half the sample rate), it ALIASES — folds back to a lower false frequency: $f_{alias} = |f - nf_s|$ for the integer $n$ that lands it in $[0, f_s/2]$.",
          s: [
            "<b>Step 1 — Nyquist.</b> $f_s/2 = 5$ kHz; 13 kHz exceeds it → aliasing.",
            "<b>Step 2 — Fold.</b> $|13 - 10| = 3$ kHz (within 0-5 kHz).",
            "<b>Step 3 — Distractor audit.</b> 13 kHz ignores aliasing; 10 kHz is the sample rate; 2 kHz miscomputes the fold."
          ],
          a: "3 kHz",
          v: "This is exactly why ADCs need an ANTI-ALIAS low-pass filter BEFORE sampling ✓ — once a 13-kHz tone aliases to 3 kHz, it's indistinguishable from a real 3-kHz signal and can't be removed. (The wagon-wheel effect in film is the same phenomenon.)"

        }), ref: "p.375" },
      { q: "Bode magnitude of $H(s) = (s+10)/(s+1)$ at $\\omega = 100$:",
        choices: ["$\\approx 0$ dB", "$20$ dB", "$-20$ dB", "$40$ dB"], correct: 0,
        solution: S({
          c: "Bode magnitude of a zero-pole pair: build it from the corner frequencies. Here the POLE is at $\\omega=1$, the ZERO at $\\omega=10$. Below the pole it's flat at the DC gain; the pole tilts it down −20 dB/dec, the zero levels it back off.",
          s: [
            "<b>Step 1 — DC gain.</b> $|H(0)| = 10/1 = 10 = +20$ dB (flat for $\\omega<1$).",
            "<b>Step 2 — Pole then zero.</b> From $\\omega=1$ to $10$: slope −20 dB/dec, dropping 20 dB → reaches 0 dB at $\\omega=10$. Above $\\omega=10$ the zero cancels the slope → flat at 0 dB.",
            "<b>Step 3 — At ω=100.</b> Well above both corners → 0 dB. (Exact: $\\sqrt{100^2+10^2}/\\sqrt{100^2+1^2} \\approx 1.005 \\approx 0$ dB.)",
            "<b>Step 4 — Distractor audit.</b> 20 dB is the LOW-frequency gain (below ω=1); −20 dB and 40 dB don't occur."
          ],
          a: "$\\approx 0$ dB",
          v: "Sanity via the asymptotes: this is a lead-network shape — gain 10 (20 dB) at low freq, dropping to gain 1 (0 dB) at high freq, with the transition between the pole (1) and zero (10) ✓. At ω=100 we're firmly in the high-frequency flat region."

        }), ref: "p.366" },
      { q: "Impulse function $\\delta(t)$ has area:", choices: ["$1$", "$0$", "$\\infty$", "Variable"], correct: 0,
        solution: S({
          c: "The Dirac delta $\\delta(t)$ is an idealized impulse: zero width, infinite height, but UNIT area — $\\int_{-\\infty}^{\\infty}\\delta(t)\\,dt = 1$.",
          s: [
            "<b>Step 1 — Match.</b> Area = 1.",
            "<b>Step 2 — Distractor audit.</b> 0 contradicts its defining integral; ∞ confuses the (infinite) height with area; 'variable' is wrong."
          ],
          a: "1",
          v: "The unit area is what makes it the 'identity' for convolution: $f*\\delta = f$ ✓. Its Laplace transform is exactly 1, and a system's response to it — the impulse response — fully characterizes the system."

        }), ref: "p.56" },
      { q: "DAC reconstruction filter is:", choices: ["Lowpass", "Highpass", "Bandpass", "Notch"], correct: 0,
        solution: S({
          c: "A DAC outputs a stair-stepped signal containing spectral IMAGES (copies) above the baseband. A reconstruction filter — a LOW-PASS — smooths the steps by removing those high-frequency images.",
          s: [
            "<b>Step 1 — Match.</b> Lowpass.",
            "<b>Step 2 — Distractor audit.</b> Highpass/bandpass/notch would remove the wanted baseband or pass the images — the opposite of what's needed."
          ],
          a: "Lowpass (cutoff just below Nyquist).",
          v: "It mirrors the ADC's anti-alias filter: anti-alias LPF before sampling, reconstruction LPF after conversion ✓ — both keep the system inside the Nyquist band. Without it, the DAC's staircase output carries audible/visible image artifacts."

        }), ref: "p.375" },
      { q: "An FIR filter is always:", choices: ["Stable", "Unstable", "Causal", "Linear phase"], correct: 0,
        solution: S({
          c: "An FIR (Finite Impulse Response) filter has only ZEROS — all its poles sit at the origin of the z-plane, inside the unit circle. So it is ALWAYS stable, unconditionally.",
          s: [
            "<b>Step 1 — Match.</b> Always stable.",
            "<b>Step 2 — Distractor audit.</b> 'Unstable' is impossible for FIR; 'causal' and 'linear phase' are common but NOT guaranteed (depend on design) — stability is the guaranteed property."
          ],
          a: "Always stable.",
          v: "Contrast IIR (Infinite Impulse Response): it has feedback poles that CAN fall outside the unit circle → instability ✓. FIR's guaranteed stability and easy linear phase are why it's favored despite needing more taps than IIR for the same sharpness."

        }), ref: "p.376" },
    ],

    // Electronics — +20
    9: [
      { q: "BJT operating region with $V_{BE} = 0.7$V, $V_{CE} = 5$V:", choices: ["Active (linear)", "Saturation", "Cutoff", "Breakdown"], correct: 0,
        solution: S({
          c: "A BJT has three regions: CUTOFF (both junctions off, no current), ACTIVE (base-emitter forward ~0.7 V, collector-base reverse — the amplifying region), and SATURATION (both forward, $V_{CE}$ collapses to ~0.2 V). $V_{BE}=0.7$ V with $V_{CE}=5$ V (well above 0.2) means ACTIVE.",
          s: [
            "<b>Step 1 — Check $V_{BE}$.</b> 0.7 V → base-emitter is forward-biased (on).",
            "<b>Step 2 — Check $V_{CE}$.</b> 5 V $> V_{CE,sat}\\approx0.2$ V → not saturated → active.",
            "<b>Step 3 — Distractor audit.</b> Saturation needs $V_{CE}\\approx0.2$ V; cutoff needs $V_{BE}<0.6$ V; breakdown needs excessive reverse voltage."
          ],
          a: "Active (linear) region.",
          v: "Active is the ONLY region for linear amplification — the transistor acts as a current-controlled current source ($I_C=\\beta I_B$) ✓. Switching circuits instead toggle between cutoff (off) and saturation (on)."

        }), ref: "p.384" },
      { q: "Effect of negative feedback on input impedance (series-shunt):",
        choices: ["Increases $Z_{in}$", "Decreases", "No effect", "Variable"], correct: 0,
        solution: S({
          c: "Negative feedback reshapes impedances by the factor $(1+A\\beta)$. SERIES feedback at the input RAISES $Z_{in}$; SHUNT (parallel) feedback LOWERS it. Series-shunt (voltage-series) topology → higher input impedance.",
          s: [
            "<b>Step 1 — Match.</b> Increases $Z_{in}$ (by $1+A\\beta$).",
            "<b>Step 2 — Distractor audit.</b> 'Decreases' is the SHUNT-input case; 'no effect' / 'variable' miss the systematic $1+A\\beta$ scaling."
          ],
          a: "Increases $Z_{in}$.",
          v: "The mnemonic: how feedback SAMPLES and MIXES sets the effect — series mixing at input raises $Z_{in}$; shunt sampling at output lowers $Z_{out}$ ✓. This is why feedback amplifiers approach the ideal (huge $Z_{in}$, tiny $Z_{out}$)."

        }), ref: "p.380" },
      { q: "Op-amp Schmitt trigger output:", choices: ["Hysteretic — two thresholds", "Linear", "Sine wave", "Always positive"], correct: 0,
        solution: S({
          c: "A Schmitt trigger uses POSITIVE feedback to create HYSTERESIS — two different switching thresholds. The output snaps high or low, and the input must cross a different level to switch back.",
          s: [
            "<b>Step 1 — Match.</b> Hysteretic — two thresholds.",
            "<b>Step 2 — Distractor audit.</b> 'Linear' needs NEGATIVE feedback; 'sine wave' and 'always positive' aren't comparator behaviors."
          ],
          a: "Hysteretic (two trip points).",
          v: "The gap between thresholds gives NOISE IMMUNITY — a noisy signal crossing one level won't chatter back and forth ✓. Schmitt triggers clean up slow or noisy edges into crisp digital transitions (e.g., squaring a sine)."

        }), ref: "p.380" },
      { q: "Common-source MOSFET amplifier input impedance:",
        choices: ["Very high (≈ gate is insulated)", "Low", "$1$ Ω", "Resistive"], correct: 0,
        solution: S({
          c: "A MOSFET's gate is separated from the channel by an insulating OXIDE layer, so essentially NO DC current flows into it → the input impedance is extremely high (megohms to gigohms).",
          s: [
            "<b>Step 1 — Match.</b> Very high (gate is insulated).",
            "<b>Step 2 — Distractor audit.</b> 'Low' / '1 Ω' describe bipolar or current-input devices; 'resistive' understates the near-open gate."
          ],
          a: "Very high (~MΩ-GΩ).",
          v: "This is the MOSFET's signature advantage over the BJT (whose base draws real current) ✓ — it barely loads the source. Real gates have tiny pA leakage, and the gate's capacitance becomes the limiting factor at high frequency, not resistance."

        }), ref: "p.386" },
      { q: "Common-drain (source follower) gain:", choices: ["$\\approx 1$, non-inverting", "$-g_m R_D$", "$+\\beta$", "$0$"], correct: 0,
        solution: S({
          c: "The common-drain (source-follower) configuration: input at gate, output at source. The source FOLLOWS the gate, giving voltage gain just under 1, non-inverting — the MOSFET analog of the BJT emitter follower.",
          s: [
            "<b>Step 1 — Match.</b> $\\approx 1$, non-inverting.",
            "<b>Step 2 — Distractor audit.</b> $-g_mR_D$ is the common-SOURCE (inverting) gain; $+\\beta$ is a BJT current gain; 0 is wrong."
          ],
          a: "$A_v \\approx 1$ (non-inverting).",
          v: "Like all followers, it's a BUFFER: high input impedance, low output impedance, unity gain ✓ — used to drive heavy loads without loading the source. Gain ≈ 1 means it provides current/power gain, not voltage gain."

        }), ref: "p.386" },
      { q: "Buck converter inductor stores energy during:", choices: ["Switch ON, then releases during OFF", "Switch OFF only", "Always", "Never"], correct: 0,
        solution: S({
          c: "In a buck (step-down) converter, the inductor cycles energy: during switch-ON it charges (current ramps up as $V_{in}-V_{out}$ is applied), during switch-OFF it discharges through the freewheeling diode into the load.",
          s: [
            "<b>Step 1 — Switch ON.</b> $V_{in}-V_{out}$ across L → current ramps up → energy STORED.",
            "<b>Step 2 — Switch OFF.</b> L maintains current through the diode → energy RELEASED to load.",
            "<b>Step 3 — Distractor audit.</b> 'OFF only', 'always', 'never' all miss the two-phase store/release cycle."
          ],
          a: "Stores during ON, releases during OFF.",
          v: "This energy shuttling is why switching converters are EFFICIENT (>90%) — the inductor transfers energy rather than dissipating it ✓. Output voltage follows $V_{out}=D\\,V_{in}$, set by the ON-time duty cycle D."

        }), ref: "p.383" },
      { q: "Op-amp differentiator gain at $\\omega$:", choices: ["$|A| = \\omega RC$", "Constant", "$1/(\\omega RC)$", "Zero"], correct: 0,
        solution: S({
          c: "An op-amp differentiator has transfer function $H(j\\omega) = -j\\omega RC$, so its gain MAGNITUDE rises linearly with frequency: $|A| = \\omega RC$.",
          s: [
            "<b>Step 1 — Match.</b> $|A| = \\omega RC$.",
            "<b>Step 2 — Distractor audit.</b> 'Constant' is an amplifier; $1/(\\omega RC)$ is the INTEGRATOR (gain falls with ω); 'zero' is wrong."
          ],
          a: "$|A| = \\omega RC$ (rises with frequency).",
          v: "The rising gain is a PROBLEM: high-frequency noise gets amplified most ✓ — so practical differentiators add a series resistor or feedback cap to cap the gain. The integrator (gain $\\propto 1/\\omega$) is its well-behaved opposite."

        }), ref: "p.380" },
      { q: "Voltage divider biasing for BJT: purpose:", choices: ["Stable Q-point (less sensitive to $\\beta$)", "Higher gain", "Switch faster", "Linear region"], correct: 0,
        solution: S({
          c: "Voltage-divider bias sets the base voltage with two resistors and adds an emitter resistor. The goal: a STABLE Q-point (operating point) that barely shifts when $\\beta$ or temperature varies between transistors.",
          s: [
            "<b>Step 1 — Match.</b> Stable Q-point, insensitive to $\\beta$.",
            "<b>Step 2 — Distractor audit.</b> It doesn't raise gain, speed up switching, or by itself set the active region — its job is bias STABILITY."
          ],
          a: "Stable bias (β-independent Q-point).",
          v: "Why it works: the emitter resistor provides local negative feedback — if $I_C$ tries to drift up, $V_E$ rises, reducing $V_{BE}$ and pushing $I_C$ back down ✓. This self-correction is what makes the design manufacturable across β spreads of 2:1 or more."

        }), ref: "p.384" },
      { q: "Transformer-coupled Class A amp efficiency limit:",
        choices: ["$50\\%$", "$25\\%$", "$78.5\\%$", "$100\\%$"], correct: 0,
        solution: S({
          c: "A Class A amplifier conducts over the full cycle. Direct-coupled, its max efficiency is just 25%; TRANSFORMER coupling doubles the achievable output swing, lifting the ceiling to 50%.",
          s: [
            "<b>Step 1 — Match.</b> 50%.",
            "<b>Step 2 — Why double.</b> The transformer lets the collector swing above the supply (to ~$2V_{CC}$), doubling deliverable power without more DC draw.",
            "<b>Step 3 — Distractor audit.</b> 25% is DIRECT-coupled Class A; 78.5% is Class B; 100% is unattainable for linear stages."
          ],
          a: "50%.",
          v: "Even at its best, Class A wastes half the power as heat (it draws full bias current even with no signal) ✓ — which is why efficiency-critical designs use Class B/AB (78.5%) or Class D switching (>90%). Class A survives for its low distortion."

        }), ref: "p.384" },
      { q: "Crystal oscillator vs RC oscillator: crystal has:",
        choices: ["Much better frequency stability/accuracy", "Higher frequency only", "Wider tuning range", "Lower cost"], correct: 0,
        solution: S({
          c: "A quartz crystal resonates mechanically with an extremely sharp, stable frequency. Crystal oscillators achieve ppm-level (parts-per-million) accuracy and stability — vastly better than RC oscillators (±5-10%).",
          s: [
            "<b>Step 1 — Match.</b> Much better frequency stability/accuracy.",
            "<b>Step 2 — Distractor audit.</b> Not 'higher frequency only' (crystals are limited in range), not 'wider tuning' (they're nearly fixed), not 'lower cost' (RC is cheaper)."
          ],
          a: "Far better frequency stability and accuracy.",
          v: "The trade is tunability for precision: a crystal is locked near one frequency but holds it to ppm ✓ — which is why every clock, microcontroller, and RF reference uses one. RC oscillators are cheap and tunable but drift with temperature and component tolerance."

        }), ref: "p.380" },
      { q: "DAC R-2R ladder advantages:", choices: ["Uses only 2 resistor values; scales well", "Highest speed", "Lowest power", "Built into all chips"], correct: 0,
        solution: S({
          c: "An R-2R ladder DAC builds binary-weighted currents using only TWO resistor values (R and 2R). That's far easier to fabricate precisely than a binary-weighted DAC needing R, 2R, 4R, 8R, … across many decades.",
          s: [
            "<b>Step 1 — Match.</b> Uses only 2 resistor values; scales well.",
            "<b>Step 2 — Distractor audit.</b> It's not the fastest or lowest-power architecture, and isn't 'built into all chips' — its specific virtue is resistor simplicity/matching."
          ],
          a: "Only two resistor values, easily scaled.",
          v: "Matched resistors are the key to DAC accuracy, and matching two identical-ratio values on-chip is far easier than matching values spanning 256:1 ✓ — which is why R-2R dominates precision DACs."

        }), ref: "p.388" },
      { q: "Crowbar circuit protects against:", choices: ["Over-voltage", "Under-voltage", "Over-current only", "EMI"], correct: 0,
        solution: S({
          c: "A crowbar is an over-voltage protection circuit: if the supply voltage exceeds a safe level, an SCR fires and SHORTS the supply, blowing the fuse and protecting downstream electronics.",
          s: [
            "<b>Step 1 — Match.</b> Over-voltage.",
            "<b>Step 2 — Distractor audit.</b> Under-voltage and EMI need different protections; 'over-current only' misses that the trigger is VOLTAGE (though the resulting short does blow a current fuse)."
          ],
          a: "Over-voltage.",
          v: "The name is literal — like dropping a crowbar across the rails to force a hard short ✓. It's a deliberate sacrifice: blow the fuse to save the expensive load from a regulator failure that would otherwise let dangerous voltage through."

        }), ref: "p.383" },
      { q: "Photodiode vs LED:", choices: ["Photodiode detects light → current; LED converts current → light", "Same thing", "Photodiode emits", "LED amplifies"], correct: 0,
        solution: S({
          c: "Photodiode and LED are reverse roles of the same p-n junction physics. A PHOTODIODE converts incoming light into current (a sensor); an LED converts current into emitted light (a source).",
          s: [
            "<b>Step 1 — Match.</b> Photodiode detects (light→current); LED emits (current→light).",
            "<b>Step 2 — Distractor audit.</b> 'Same thing' / 'photodiode emits' / 'LED amplifies' all scramble the roles."
          ],
          a: "Photodiode = detector; LED = emitter.",
          v: "Both are p-n junctions, optimized oppositely — and remarkably, an LED can even work weakly as a photodetector ✓. The pairing (LED emitter + photodiode receiver) is the heart of optocouplers, remote controls, and fiber-optic links."

        }), ref: "p.383" },
      { q: "Hysteresis voltage in Schmitt: difference between trip points:",
        choices: ["$V_{TH+} - V_{TH-}$", "$V_{ref}$", "$V_{out}$", "Variable"], correct: 0,
        solution: S({
          c: "The hysteresis voltage of a Schmitt trigger is the WIDTH of its dead band — the difference between the upper trip point and the lower trip point: $V_H = V_{T+} - V_{T-}$.",
          s: [
            "<b>Step 1 — Match.</b> $V_{T+} - V_{T-}$.",
            "<b>Step 2 — Distractor audit.</b> $V_{ref}$, $V_{out}$, 'variable' aren't the threshold gap."
          ],
          a: "$V_H = V_{T+} - V_{T-}$",
          v: "It's a trade-off knob: a WIDER window gives better noise immunity (harder to false-trigger) but coarser threshold precision ✓. Designers size it to exceed the expected noise amplitude on the input signal."

        }), ref: "p.380" },
      { q: "Phase margin tells about closed-loop:", choices: ["Stability robustness", "Bandwidth only", "DC gain", "Slew rate"], correct: 0,
        solution: S({
          c: "Phase margin measures STABILITY ROBUSTNESS: how much additional phase lag the loop can tolerate at the unity-gain (gain-crossover) frequency before it hits the −180° that causes oscillation.",
          s: [
            "<b>Step 1 — Match.</b> Stability robustness.",
            "<b>Step 2 — Distractor audit.</b> Bandwidth, DC gain, and slew rate are separate specs — phase margin specifically quantifies the stability cushion."
          ],
          a: "Stability robustness (margin before oscillation).",
          v: "Rule of thumb: PM > 45° is comfortably stable, ~60° is the sweet spot (fast with little overshoot); low PM means a ringing, near-unstable response ✓. It's the frequency-domain partner of damping ratio."

        }), ref: "p.366" },
      { q: "BJT $h_{FE}$ same as:", choices: ["$\\beta$ (DC current gain)", "$\\alpha$", "$g_m$", "$h_{ie}$"], correct: 0,
        solution: S({
          c: "In BJT h-parameter notation, $h_{FE}$ IS the DC current gain $\\beta = I_C/I_B$ — the factor by which base current is amplified into collector current.",
          s: [
            "<b>Step 1 — Match.</b> $\\beta$ (DC current gain).",
            "<b>Step 2 — Distractor audit.</b> $\\alpha = I_C/I_E \\approx 1$ (different gain); $g_m$ is transconductance; $h_{ie}$ is input resistance."
          ],
          a: "$\\beta$ (DC current gain).",
          v: "Lowercase $h_{fe}$ is the AC (small-signal) version, usually close to the DC $h_{FE}$ ✓. The related $\\alpha = \\beta/(\\beta+1)$ is the common-base gain, always just under 1."

        }), ref: "p.384" },
      { q: "Power MOSFET vs signal MOSFET:", choices: ["Power version handles much higher current/voltage", "Same", "Signal is bigger", "Power has less gain"], correct: 0,
        solution: S({
          c: "A power MOSFET is built to handle large current and voltage with low on-resistance ($R_{DS,on}$); a signal MOSFET is small and fast for low-current logic/analog use.",
          s: [
            "<b>Step 1 — Match.</b> Power version handles much higher current/voltage.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; signal MOSFETs are SMALLER, not bigger; the power device isn't lower-gain in the relevant sense — it's built for current."
          ],
          a: "Power MOSFET handles high current/voltage.",
          v: "The price of power handling is SPEED and gate charge — big power FETs switch slower and need stout gate drivers ✓. Low $R_{DS,on}$ is the headline spec, since conduction loss is $I^2R_{DS,on}$."

        }), ref: "p.386" },
      { q: "JFET vs MOSFET: structural difference:", choices: ["JFET has p-n junction gate; MOSFET has oxide-insulated gate", "Same", "JFET is bigger", "Different materials"], correct: 0,
        solution: S({
          c: "The gate construction differs. A JFET's gate is a reverse-biased p-n JUNCTION; a MOSFET's gate is a metal/poly electrode separated from the channel by an insulating OXIDE.",
          s: [
            "<b>Step 1 — Match.</b> JFET = p-n junction gate; MOSFET = oxide-insulated gate.",
            "<b>Step 2 — Distractor audit.</b> 'Same' is false; size and material aren't the defining structural difference — the gate isolation is."
          ],
          a: "Junction gate (JFET) vs oxide-insulated gate (MOSFET).",
          v: "Consequence: the JFET's junction can conduct gate current if forward-biased (so it stays reverse-biased, depletion-mode only), while the MOSFET's oxide blocks DC gate current entirely → even higher input impedance ✓."

        }), ref: "p.386" },
      { q: "Operational transconductance amplifier (OTA) output is:",
        choices: ["Current proportional to differential input voltage", "Voltage", "Charge", "Power"], correct: 0,
        solution: S({
          c: "An OTA is a voltage-to-CURRENT amplifier: its output is a current proportional to the differential input voltage, $I_{out} = g_m(V_+ - V_-)$. (A regular op-amp outputs a voltage.)",
          s: [
            "<b>Step 1 — Match.</b> Current proportional to differential input voltage.",
            "<b>Step 2 — Distractor audit.</b> Voltage is a standard op-amp; charge and power aren't OTA outputs."
          ],
          a: "An output current, $I_{out}=g_m(V_+-V_-)$.",
          v: "The current output and electronically-tunable $g_m$ make OTAs ideal for switched-capacitor filters, variable-gain stages, and integrators ✓ — drive a capacitor with its current output and you get a $g_m/C$ integrator."

        }), ref: "p.380" },
      { q: "An IGBT combines:", choices: ["BJT (high current) + MOSFET (voltage-controlled gate)", "Two BJTs", "Diode + transistor", "JFET + BJT"], correct: 0,
        solution: S({
          c: "An IGBT (Insulated-Gate Bipolar Transistor) is a hybrid: a MOSFET-style insulated gate (easy voltage control, no gate current) driving a BJT-style output stage (high current, low conduction drop).",
          s: [
            "<b>Step 1 — Match.</b> BJT high-current output + MOSFET voltage-controlled gate.",
            "<b>Step 2 — Distractor audit.</b> Not two BJTs, not diode+transistor, not JFET+BJT — it's specifically the MOS-gate-drives-BJT combination."
          ],
          a: "MOSFET gate + BJT output (best of both).",
          v: "It gets the easy gate drive of a MOSFET with the low conduction loss of a BJT at high voltage ✓ — which is why IGBTs dominate motor drives, EV inverters, and induction heating (>600 V, >100 A, moderate switching frequency)."

        }), ref: "p.386" },
    ],

    // Power — +20
    10: [
      { q: "Voltage drop calculation: $V_{drop} = I \\cdot Z_{line}$. For 100 A on $0.1+j0.05$ Ω/km line over 5 km:",
        choices: ["$|V_{drop}| \\approx 55.9$ V", "$50$ V", "$25$ V", "$500$ V"], correct: 0,
        solution: S({
          c: "Line voltage drop is the phasor product $V = I\\cdot Z_{line}$, where $Z$ is complex ($R+jX$). Total impedance = per-km impedance × length; magnitude uses $|Z| = \\sqrt{R^2+X^2}$.",
          s: [
            "<b>Step 1 — Total impedance.</b> $(0.1+j0.05)\\times5 = 0.5+j0.25\\ \\Omega$.",
            "<b>Step 2 — Magnitude of Z.</b> $|Z| = \\sqrt{0.5^2+0.25^2} = \\sqrt{0.3125} = 0.559\\ \\Omega$.",
            "<b>Step 3 — Drop.</b> $|V| = 100\\times0.559 = 55.9$ V.",
            "<b>Step 4 — Distractor audit.</b> 50 V uses only R; 25 V uses only X; 500 V slips a decade."
          ],
          a: "$|V_{drop}| \\approx 55.9$ V",
          v: "Both R and X matter — ignoring the reactance (using just 50 V) underestimates the drop by ~12% ✓. On real transmission lines X often EXCEEDS R, so the reactive part dominates voltage regulation."

        }), ref: "p.363" },
      { q: "Transformer kVA rating limited by:", choices: ["Heat dissipation (winding/core)", "Voltage only", "Customer demand", "Phase"], correct: 0,
        solution: S({
          c: "A transformer's kVA rating is set by HEAT — the $I^2R$ copper losses and core losses must not raise winding temperature past what the insulation can tolerate long-term.",
          s: [
            "<b>Step 1 — Match.</b> Heat dissipation (winding/core).",
            "<b>Step 2 — Distractor audit.</b> Voltage is a SEPARATE rating (insulation breakdown); customer demand and phase aren't the physical limit on the device."
          ],
          a: "Heat (thermal limit of insulation).",
          v: "This is why transformers are rated in kVA (apparent power, which sets the CURRENT) not kW — heating depends on current regardless of power factor ✓. Better cooling (oil, forced air) directly raises the safe kVA."

        }), ref: "p.364" },
      { q: "Auto-transformer vs isolation transformer:", choices: ["Auto shares winding; isolation has separate", "Same", "Auto bigger", "Isolation cheaper"], correct: 0,
        solution: S({
          c: "An AUTOTRANSFORMER uses a single tapped winding shared between primary and secondary; an ISOLATION transformer has two electrically separate windings, providing galvanic isolation.",
          s: [
            "<b>Step 1 — Match.</b> Auto shares one winding; isolation has separate windings.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; the autotransformer is actually SMALLER/lighter for a given rating; cost isn't the defining difference."
          ],
          a: "Shared winding (auto) vs separate windings (isolation).",
          v: "The trade: autotransformers are smaller, cheaper, and more efficient but offer NO isolation (a fault couples through) ✓ — fine for modest voltage ratios (variac, motor starting), unsafe where isolation is required for safety."

        }), ref: "p.364" },
      { q: "Three-phase open delta (V-V) capacity vs full delta:",
        choices: ["About $57.7\\%$ ($1/\\sqrt{3}$)", "$50\\%$", "$100\\%$", "$67\\%$"], correct: 0,
        solution: S({
          c: "An open-delta (V-V) bank uses only TWO single-phase transformers to serve a three-phase load. It still delivers 3-phase power but at reduced capacity: $1/\\sqrt3 \\approx 57.7\\%$ of the full three-transformer delta.",
          s: [
            "<b>Step 1 — Match.</b> ≈57.7% ($1/\\sqrt3$).",
            "<b>Step 2 — Distractor audit.</b> 50% is the naive 2-of-3 guess; 67% and 100% overstate it — the actual factor is $1/\\sqrt3$, not 2/3."
          ],
          a: "≈ 58% of full-delta capacity.",
          v: "It's a useful fallback: if one of three transformers fails, the other two keep 3-phase service running at 58% ✓ — or it's a deliberate economy for small/growing 3-phase loads with room to add the third unit later."

        }), ref: "p.364" },
      { q: "Y-connection with neutral wire purpose:",
        choices: ["Return path for unbalanced load", "Just additional ground", "Increases voltage", "Decreases"], correct: 0,
        solution: S({
          c: "In a wye (Y) system, the neutral provides a RETURN PATH for unbalanced phase currents. With a perfectly balanced load the three phase currents cancel and neutral current is ~zero.",
          s: [
            "<b>Step 1 — Match.</b> Return path for unbalanced load.",
            "<b>Step 2 — Distractor audit.</b> It's more than 'just a ground'; it doesn't increase or decrease voltage."
          ],
          a: "Return path for unbalanced currents.",
          v: "The neutral is what lets single-phase loads (at $V_{LN}$) tap a three-phase service ✓ — your 120-V outlets pull from one phase to neutral. Balanced three-phase needs no neutral current, which is why transmission can omit it."

        }), ref: "p.363" },
      { q: "Surge protective device (SPD) clamps voltage:",
        choices: ["At certain peak (e.g., MOV trigger)", "Linearly", "To zero", "Doubles"], correct: 0,
        solution: S({
          c: "An SPD (often a metal-oxide varistor, MOV) has a non-linear V-I curve: nearly open below its clamp voltage, but suddenly conducting heavily ABOVE it — shunting surge energy away to hold the voltage near a safe peak.",
          s: [
            "<b>Step 1 — Match.</b> Clamps at a threshold peak (MOV trigger).",
            "<b>Step 2 — Distractor audit.</b> 'Linearly' describes a resistor (an MOV is non-linear); 'to zero' would be a short; 'doubles' is wrong."
          ],
          a: "Clamps voltage above a threshold.",
          v: "MOVs are SACRIFICIAL — each surge degrades them slightly until they eventually fail ✓, which is why surge strips wear out. Placed close to sensitive gear, they divert lightning/switching transients to ground."

        }), ref: "p.354" },
      { q: "Synchronous motor speed depends on:", choices: ["Line frequency and pole count only", "Load", "Voltage", "Slip"], correct: 0,
        solution: S({
          c: "A synchronous motor's rotor LOCKS to the rotating stator field, so its speed is fixed by line frequency and pole count alone: $N_s = 120f/P$. No slip, regardless of load.",
          s: [
            "<b>Step 1 — Match.</b> Line frequency and pole count only.",
            "<b>Step 2 — Distractor audit.</b> Load, voltage, and slip affect INDUCTION motors, not the locked speed of a synchronous one (slip = 0 by definition)."
          ],
          a: "$N_s = 120f/P$ — frequency and poles.",
          v: "This rock-steady speed makes synchronous motors ideal for constant-speed drives and clocks ✓; the trade-off is they don't self-start and need separate starting means. Induction motors, by contrast, slip a few percent under load."

        }), ref: "p.365" },
      { q: "Induction motor efficiency degrades when:", choices: ["Lightly loaded (well below FL)", "Fully loaded", "Started", "At sync speed"], correct: 0,
        solution: S({
          c: "An induction motor is most efficient near FULL load. Lightly loaded, the FIXED losses (core hysteresis/eddy, friction, windage) become a large fraction of the small output → efficiency drops.",
          s: [
            "<b>Step 1 — Match.</b> Lightly loaded (well below full load).",
            "<b>Step 2 — Distractor audit.</b> Fully loaded is the EFFICIENT regime; starting is transient; at sync speed it produces no torque (induction motors run slightly below sync)."
          ],
          a: "When lightly loaded.",
          v: "This is why oversizing motors wastes energy — a motor at 25% load runs well below its efficiency peak ✓. Variable-frequency drives help by matching speed/torque to the actual load, trimming fixed losses."

        }), ref: "p.365" },
      { q: "Generator excitation (field current) controls:",
        choices: ["Terminal voltage (and reactive power)", "Frequency", "Active power", "Speed"], correct: 0,
        solution: S({
          c: "A synchronous generator's FIELD current (excitation) sets the magnetic flux and thus the induced EMF — controlling TERMINAL VOLTAGE and REACTIVE power output. Active power and frequency come from the prime mover instead.",
          s: [
            "<b>Step 1 — Match.</b> Terminal voltage and reactive power (Q).",
            "<b>Step 2 — Distractor audit.</b> Frequency and speed are set by the prime mover/grid; active power P comes from mechanical input torque — not excitation."
          ],
          a: "Terminal voltage / reactive power Q.",
          v: "The clean division: prime mover → P and frequency; excitation → V and Q ✓. An over-excited generator supplies reactive power (looks capacitive to the grid); under-excited, it absorbs it. The AVR automates this."

        }), ref: "p.365" },
      { q: "Three-phase symmetrical fault current is computed via:",
        choices: ["Per-phase analysis (positive sequence)", "All three phases separately", "Average", "Single-phase analysis only"], correct: 0,
        solution: S({
          c: "A balanced (symmetrical) three-phase fault keeps all three phases identical, so only the POSITIVE-sequence network matters — a single per-phase (one-line) analysis suffices.",
          s: [
            "<b>Step 1 — Match.</b> Per-phase / positive-sequence analysis.",
            "<b>Step 2 — Distractor audit.</b> Analyzing all three separately is redundant for a balanced fault; 'average' and 'single-phase load analysis' miss the symmetry tool."
          ],
          a: "Positive-sequence (per-phase) analysis.",
          v: "UNsymmetrical faults (line-to-ground, line-to-line) break the balance and require symmetrical COMPONENTS — decomposing into positive, negative, and zero sequence networks ✓. The symmetric 3-phase fault is the easy case and often the worst-case magnitude."

        }), ref: "p.363" },
      { q: "AC and DC fuse difference:",
        choices: ["DC fuse must handle longer arc time (no zero-crossings)", "Same", "AC fuse easier to break", "DC has no fuses"], correct: 0,
        solution: S({
          c: "AC current naturally passes through ZERO 100-120 times a second, which helps an arc self-extinguish. DC has no zero-crossings, so a DC fuse/breaker must FORCE the arc out — needing larger gaps or special arc-quenching design.",
          s: [
            "<b>Step 1 — Match.</b> DC fuse must handle a longer, harder-to-quench arc.",
            "<b>Step 2 — Distractor audit.</b> 'Same' is false; AC is EASIER to break (zero-crossings help); 'DC has no fuses' is wrong."
          ],
          a: "DC is harder to interrupt (no zero-crossings).",
          v: "This is a real safety issue in solar/battery (DC) systems — a DC breaker rated for the same current is bigger and pricier than its AC cousin ✓, and using an AC-only device on DC can let a sustained arc start a fire."

        }), ref: "p.364" },
      { q: "Three-phase Y source voltage to ground for $V_{LL}=480$ V:",
        choices: ["$\\approx 277$ V", "$480$ V", "$240$ V", "$120$ V"], correct: 0,
        solution: S({
          c: "In a wye system, line-to-neutral (phase) voltage is the line-to-line voltage divided by $\\sqrt3$: $V_{LN} = V_{LL}/\\sqrt3$.",
          s: [
            "<b>Step 1 — Divide.</b> $V_{LN} = 480/\\sqrt3 = 277$ V.",
            "<b>Step 2 — Distractor audit.</b> 480 V is the line-to-line (delta phase); 240 and 120 are other common voltages, not this ratio."
          ],
          a: "$V_{LN} \\approx 277$ V",
          v: "480Y/277 is THE standard US commercial system — 480 V three-phase for motors, 277 V line-to-neutral for fluorescent/LED lighting ✓. The $\\sqrt3$ factor between line and phase voltage is wye's signature (in delta they're equal)."

        }), ref: "p.363" },
      { q: "Power factor (PF) in transmission affects:",
        choices: ["Line loss (lower PF → more line current → more loss)", "Frequency", "Insulation", "Tower height"], correct: 0,
        solution: S({
          c: "For a fixed real power P, a LOWER power factor means a larger apparent power S and thus MORE line current ($I = S/V$). Since losses are $I^2R$, low PF directly increases transmission losses.",
          s: [
            "<b>Step 1 — Match.</b> Line losses (lower PF → more current → more $I^2R$).",
            "<b>Step 2 — Distractor audit.</b> PF doesn't change frequency, insulation, or tower height — it's about current and loss."
          ],
          a: "Line losses (via increased current).",
          v: "This is exactly why utilities PENALIZE industrial customers for poor power factor ✓ — the extra reactive current heats their lines and transformers without delivering useful power. Capacitor banks correct PF and cut that waste."

        }), ref: "p.363" },
      { q: "Single-phase transformer 240V/24V, 100VA. Maximum primary current:",
        choices: ["$\\approx 0.417$ A", "$4.17$ A", "$0.1$ A", "$1$ A"], correct: 0,
        solution: S({
          c: "A transformer's VA rating caps the current on each side: $I = S/V$. On the primary, $I_1 = S/V_1$.",
          s: [
            "<b>Step 1 — Divide.</b> $I_1 = 100/240 = 0.417$ A.",
            "<b>Step 2 — Distractor audit.</b> 4.17 A uses the SECONDARY voltage (24 V) by mistake; 0.1 A and 1 A are arbitrary."
          ],
          a: "$I_1 \\approx 0.42$ A",
          v: "Cross-check the secondary: $I_2 = 100/24 = 4.17$ A — exactly 10× the primary, matching the 240/24 = 10:1 turns ratio ✓ (low-voltage side carries proportionally more current). VA is conserved across the transformer."

        }), ref: "p.364" },
      { q: "Power triangle: tan θ =",
        choices: ["$Q/P$", "$P/Q$", "$S/P$", "$P/S$"], correct: 0,
        solution: S({
          c: "The power triangle: real power P (horizontal), reactive power Q (vertical), apparent power S (hypotenuse). The angle θ between P and S satisfies $\\tan\\theta = Q/P$.",
          s: [
            "<b>Step 1 — Match.</b> $\\tan\\theta = Q/P$ (opposite over adjacent).",
            "<b>Step 2 — Distractor audit.</b> $P/Q$ inverts it; $S/P$ is $1/\\cos\\theta$ (=$\\sec\\theta$); $P/S$ is $\\cos\\theta$ (the power factor)."
          ],
          a: "$\\tan\\theta = Q/P$",
          v: "The companion relations: $\\cos\\theta = P/S$ is the power factor, $\\sin\\theta = Q/S$ ✓. Knowing the triangle lets you convert between P, Q, S, and PF — the core of AC power and pf-correction problems."

        }), ref: "p.362" },
      { q: "Three-phase service main breaker rated at 200 A. Max balanced load (480 V):",
        choices: ["$\\approx 166$ kVA", "$96$ kVA", "$33$ kVA", "$580$ kVA"], correct: 0,
        solution: S({
          c: "Maximum three-phase apparent power from a given line current: $|S| = \\sqrt3\\,V_{LL}\\,I_L$.",
          s: [
            "<b>Step 1 — Apply.</b> $\\sqrt3\\times480\\times200 = 166{,}277$ VA.",
            "<b>Step 2 — Express.</b> ≈ 166 kVA.",
            "<b>Step 3 — Distractor audit.</b> 96 kVA drops the $\\sqrt3$ (and mis-scales); 33 kVA is way low; 580 kVA over-multiplies."
          ],
          a: "$|S| \\approx 166$ kVA",
          v: "The $\\sqrt3$ is the three-phase signature — single-phase would just be $V\\times I$ ✓. In practice the continuous load is derated to 80% (≈133 kVA) per code, but the breaker's instantaneous capacity is the full 166 kVA."

        }), ref: "p.363" },
      { q: "Service factor (SF) on motor nameplate of 1.15 means:",
        choices: ["Can run at 115% of nameplate HP continuously (with derating)", "Always 15% extra", "Starts at 1.15× speed", "PF of 1.15"], correct: 0,
        solution: S({
          c: "A motor's SERVICE FACTOR is the overload margin built into it. SF = 1.15 means the motor can run continuously at 115% of its nameplate horsepower (with some derating of life/temperature).",
          s: [
            "<b>Step 1 — Match.</b> Can run at 115% of rated HP continuously.",
            "<b>Step 2 — Distractor audit.</b> It's not 'always 15% extra' (it's a ceiling, with caveats), not a speed multiplier, not a power factor."
          ],
          a: "115% continuous capacity (with derating).",
          v: "Running in the service-factor zone shortens insulation life and lowers efficiency/PF, so it's for occasional overloads, not steady use ✓. SF 1.0 means no margin; 1.15-1.25 is typical for general-purpose industrial motors."

        }), ref: "p.365" },
      { q: "Motor torque-speed curve: starting (locked-rotor) torque vs full-load torque:",
        choices: ["Usually higher (150-300% of FLT)", "Lower", "Same", "Zero"], correct: 0,
        solution: S({
          c: "A standard induction motor's LOCKED-ROTOR (starting) torque is HIGHER than its full-load torque — typically 150-300% of FLT — so it can overcome inertia and break the load free at startup.",
          s: [
            "<b>Step 1 — Match.</b> Higher (150-300% of full-load torque).",
            "<b>Step 2 — Distractor audit.</b> 'Lower', 'same', 'zero' would leave the motor unable to start under load."
          ],
          a: "Higher than full-load torque (150-300%).",
          v: "NEMA design classes (A/B/C/D) tailor the torque-speed shape: Design C/D give high starting torque for hard-starting loads (conveyors, crushers) ✓. The high starting torque comes with high inrush CURRENT (6-8× FLC), which is why soft-starters exist."

        }), ref: "p.365" },
      { q: "DC motor speed control via:",
        choices: ["Armature voltage (below base) or field weakening (above)", "Frequency", "Phase", "Pole switching"], correct: 0,
        solution: S({
          c: "DC motor speed has two control regimes: BELOW base speed, vary the ARMATURE voltage (constant-torque); ABOVE base speed, weaken the FIELD current (constant-power, reduced torque).",
          s: [
            "<b>Step 1 — Match.</b> Armature voltage (below base) or field weakening (above).",
            "<b>Step 2 — Distractor audit.</b> Frequency/phase/pole-switching are AC-motor methods — DC motors run on DC, so frequency is irrelevant."
          ],
          a: "Armature voltage, then field weakening.",
          v: "The two regimes give a wide speed range: armature control holds full torque up to base speed, then field weakening trades torque for extra speed ✓ — the classic constant-torque-then-constant-power profile used in traction and machine tools."

        }), ref: "p.365" },
      { q: "Wye load with $V_{LL}=400$V, balanced, $Z_\\phi = 100\\angle 30°$. Total real power:",
        choices: ["$\\approx 1{,}386$ W", "$1600$ W", "$2000$ W", "$\\approx 800$ W"], correct: 0,
        solution: S({
          c: "Per-phase three-phase power: find phase voltage $V_\\phi = V_{LL}/\\sqrt3$, phase current $I_\\phi = V_\\phi/|Z|$, then $P = 3V_\\phi I_\\phi\\cos\\theta$ where θ is the impedance angle.",
          s: [
            "<b>Step 1 — Phase voltage.</b> $V_\\phi = 400/\\sqrt3 = 231$ V.",
            "<b>Step 2 — Phase current.</b> $I_\\phi = 231/100 = 2.31$ A.",
            "<b>Step 3 — Power.</b> $P = 3\\times231\\times2.31\\times\\cos30° = 3\\times462\\times0.866 = 1386$ W.",
            "<b>Step 4 — Distractor audit.</b> 1600 W forgets $\\cos30°$; 2000 W ignores both the angle and details; 800 W mis-scales."
          ],
          a: "$P \\approx 1386$ W",
          v: "The $\\cos30° = 0.866$ power factor (from the 30° impedance angle) is essential — without it you'd overstate power by 15% ✓. Reactive power here is $Q = 3V_\\phi I_\\phi\\sin30° = 800$ VAR."

        }), ref: "p.363" },
    ],

    // EM — +10
    11: [
      { q: "Magnetic flux through 100-turn coil increases from 0 to 0.01 Wb in 0.1 s. EMF:",
        choices: ["$10$ V", "$0.01$ V", "$1$ V", "$100$ V"], correct: 0,
        solution: S({
          c: "Faraday's law of induction: a coil of $N$ turns develops EMF $= N\\,d\\Phi/dt$ — the number of turns times the rate of flux change.",
          s: [
            "<b>Step 1 — Rate of change.</b> $d\\Phi/dt = 0.01/0.1 = 0.1$ Wb/s.",
            "<b>Step 2 — Multiply by turns.</b> $|EMF| = 100\\times0.1 = 10$ V.",
            "<b>Step 3 — Distractor audit.</b> 0.01 V and 1 V forget the turns or the time; 100 V over-multiplies."
          ],
          a: "$|EMF| = 10$ V",
          v: "Two levers raise induced voltage: more TURNS or faster flux CHANGE ✓ — the basis of every generator and transformer. The minus sign (Lenz) just says the induced current opposes the change."

        }), ref: "p.355" },
      { q: "Inductor L stores energy proportional to:", choices: ["$I^2$", "$I$", "$V^2$", "$Q^2$"], correct: 0,
        solution: S({
          c: "Energy in an inductor's magnetic field is $W = \\tfrac12 LI^2$ — proportional to the SQUARE of current.",
          s: [
            "<b>Step 1 — Match.</b> $\\propto I^2$.",
            "<b>Step 2 — Distractor audit.</b> $\\propto I$ misses the square; $V^2$ is the CAPACITOR's law; $Q^2$ isn't the inductor's variable."
          ],
          a: "$W \\propto I^2$ (specifically $\\tfrac12 LI^2$).",
          v: "The $I^2$ means doubling current QUADRUPLES stored energy ✓ — and abruptly interrupting that current releases it as a high-voltage spike ($v=L\\,di/dt$), the reason flyback diodes protect switches driving inductive loads."

        }), ref: "p.355" },
      { q: "Capacitor C stores energy proportional to:", choices: ["$V^2$", "$V$", "$I$", "$Q$"], correct: 0,
        solution: S({
          c: "Energy in a capacitor's electric field is $W = \\tfrac12 CV^2 = Q^2/(2C)$ — proportional to the SQUARE of voltage.",
          s: [
            "<b>Step 1 — Match.</b> $\\propto V^2$.",
            "<b>Step 2 — Distractor audit.</b> $\\propto V$ misses the square; $I$ is the inductor's variable; $Q$ alone is linear (the energy goes as $Q^2$)."
          ],
          a: "$W \\propto V^2$ (specifically $\\tfrac12 CV^2$).",
          v: "Note the duality: inductor stores $\\tfrac12 LI^2$ (current), capacitor stores $\\tfrac12 CV^2$ (voltage) ✓. The $V^2$ is why high-voltage capacitor banks store dangerous energy even at modest capacitance."

        }), ref: "p.358" },
      { q: "Magnetic permeability of iron core (relative):",
        choices: ["$\\mu_r$ several hundred to thousands", "$\\mu_r = 1$", "$\\mu_r < 1$", "$\\mu_r = 0$"], correct: 0,
        solution: S({
          c: "Relative permeability $\\mu_r$ compares a material's magnetic response to vacuum. FERROMAGNETIC materials (iron, steel) have $\\mu_r$ in the hundreds to thousands, hugely concentrating magnetic flux.",
          s: [
            "<b>Step 1 — Match.</b> Several hundred to thousands.",
            "<b>Step 2 — Distractor audit.</b> $\\mu_r=1$ is non-magnetic (air, copper); $\\mu_r<1$ is weak diamagnetism; $\\mu_r=0$ is a perfect diamagnet (superconductor)."
          ],
          a: "Hundreds to thousands.",
          v: "This is WHY transformers and motors use iron cores — the high $\\mu_r$ multiplies inductance and channels flux where you want it ✓. Special alloys (Permalloy, mu-metal) reach tens of thousands for magnetic shielding."

        }), ref: "p.355" },
      { q: "EM wave: E and B fields are:", choices: ["Perpendicular to each other and direction of propagation", "Parallel", "Inclined 45°", "Opposite directions"], correct: 0,
        solution: S({
          c: "An electromagnetic wave is TRANSVERSE: the electric field E, magnetic field B, and propagation direction k are mutually PERPENDICULAR, forming a right-handed triad.",
          s: [
            "<b>Step 1 — Match.</b> Perpendicular to each other and to propagation.",
            "<b>Step 2 — Distractor audit.</b> 'Parallel', '45°', 'opposite' all violate the transverse orthogonal structure of EM waves."
          ],
          a: "Mutually perpendicular (E ⊥ B ⊥ k).",
          v: "The cross product $\\vec E\\times\\vec B$ points along propagation — that's the Poynting vector, the direction of energy flow ✓. This orthogonality is a direct consequence of Maxwell's equations in free space."

        }), ref: "p.355" },
      { q: "Ampere's law: $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I_{enc}$. Useful for:",
        choices: ["Symmetric current distributions", "Random distributions", "Linear charges", "Point charges"], correct: 0,
        solution: S({
          c: "Ampère's law $\\oint\\vec B\\cdot d\\vec l = \\mu_0 I_{enc}$ relates the magnetic field circulation to enclosed current. It's most USEFUL when SYMMETRY (cylindrical, planar, toroidal) lets you pull B out of the integral.",
          s: [
            "<b>Step 1 — Match.</b> Symmetric current distributions.",
            "<b>Step 2 — Distractor audit.</b> Random distributions lack the symmetry to evaluate the integral; line/point CHARGES are electrostatics (Gauss's law territory)."
          ],
          a: "Symmetric current distributions.",
          v: "Classic uses: long straight wire ($B = \\mu_0 I/2\\pi r$), solenoid ($B = \\mu_0 nI$), toroid ✓ — each has a symmetry that makes B constant along a chosen loop. It's the magnetic analog of how Gauss's law exploits symmetry for E."

        }), ref: "p.355" },
      { q: "Skin depth in copper at 60 Hz:", choices: ["$\\approx 8.5$ mm", "$0.5$ mm", "$10$ µm", "$100$ m"], correct: 0,
        solution: S({
          c: "At AC, current crowds toward a conductor's surface. The SKIN DEPTH $\\delta = \\sqrt{2/(\\mu\\sigma\\omega)}$ is where current density falls to 1/e of the surface value — and it SHRINKS as frequency rises. For copper at 60 Hz, $\\delta \\approx 8.5$ mm.",
          s: [
            "<b>Step 1 — Match.</b> ≈ 8.5 mm.",
            "<b>Step 2 — Distractor audit.</b> 0.5 mm and 10 µm are skin depths at much HIGHER frequencies; 100 m is absurd for a conductor."
          ],
          a: "$\\delta \\approx 8.5$ mm",
          v: "At 60 Hz, 8.5 mm means current is nearly uniform in ordinary wires (radius < ~16 mm) ✓ — skin effect barely matters. But at MHz frequencies $\\delta$ drops to microns, which is why RF conductors are hollow tubes or use litz wire."

        }), ref: "p.368" },
      { q: "Charge stored when 5V applied to 10µF capacitor:",
        choices: ["$50$ µC", "$5$ µC", "$2$ µC", "$50$ C"], correct: 0,
        solution: S({
          c: "Capacitor charge follows $Q = CV$.",
          s: [
            "<b>Step 1 — Multiply.</b> $Q = (10\\times10^{-6})(5) = 50\\times10^{-6}$ C = 50 µC.",
            "<b>Step 2 — Distractor audit.</b> 5 µC and 2 µC mishandle the multiply; 50 C forgets the micro prefix entirely."
          ],
          a: "$Q = 50$ µC",
          v: "Units: µF × V = µC ✓ — the micro prefix carries straight through. The stored energy here is $\\tfrac12 CV^2 = \\tfrac12(10\\,\\mu F)(25) = 125$ µJ."

        }), ref: "p.358" },
      { q: "Mutual inductance: two coils with $L_1$, $L_2$, coupling $k=1$:",
        choices: ["$M = \\sqrt{L_1 L_2}$", "$M = L_1+L_2$", "$M = 0$", "$M$ undefined"], correct: 0,
        solution: S({
          c: "Mutual inductance between two coupled coils is $M = k\\sqrt{L_1 L_2}$, where the coupling coefficient $k$ (0 to 1) measures what fraction of flux is shared. Perfect coupling ($k=1$) gives $M = \\sqrt{L_1 L_2}$.",
          s: [
            "<b>Step 1 — Apply k=1.</b> $M = \\sqrt{L_1 L_2}$.",
            "<b>Step 2 — Distractor audit.</b> $L_1+L_2$ is series-aiding self-inductance, not mutual; $M=0$ is zero coupling; 'undefined' is wrong."
          ],
          a: "$M = \\sqrt{L_1 L_2}$",
          v: "$k=1$ (all flux linked) is the ideal transformer limit ✓ — real transformers reach $k > 0.99$ with tight iron cores, while loosely-coupled air-core coils may have $k < 0.5$. Leakage inductance is the unshared part."

        }), ref: "p.355" },
      { q: "Force on charged particle in E and B field (Lorentz):",
        choices: ["$\\vec{F} = q(\\vec{E} + \\vec{v}\\times\\vec{B})$", "$qE$ only", "$qvB$ only", "$0$"], correct: 0,
        solution: S({
          c: "The Lorentz force is the complete force on a charge: $\\vec F = q(\\vec E + \\vec v\\times\\vec B)$ — an electric part (along E) plus a magnetic part (perpendicular to both velocity and B).",
          s: [
            "<b>Step 1 — Match.</b> $q(\\vec E + \\vec v\\times\\vec B)$.",
            "<b>Step 2 — Distractor audit.</b> '$qE$ only' drops the magnetic force; '$qvB$ only' drops the electric force; 0 is wrong."
          ],
          a: "$\\vec F = q(\\vec E + \\vec v\\times\\vec B)$",
          v: "Key insight: the magnetic force does NO work (it's always ⊥ to velocity) — it bends the path but can't change speed ✓. This is why cyclotrons use B to steer and E to accelerate. It also explains the motor force $F = BIL$."

        }), ref: "p.355" },
    ],

    // Control — +12
    12: [
      { q: "Closed-loop pole location of $G(s)=K/(s(s+10))$ for $K = 25$ (unity feedback):",
        choices: ["$s = -5 \\pm j0$ (critically damped, double pole)", "$s = \\pm 5j$", "$s = -10, 0$", "$s = -25$"], correct: 0,
        solution: S({
          c: "For unity feedback, closed-loop poles are roots of $1+G(s)=0$. Here that gives $s^2+10s+K=0$. The discriminant $100-4K$ decides the response type: >0 overdamped, =0 critically damped, <0 underdamped.",
          s: [
            "<b>Step 1 — Characteristic equation.</b> $s(s+10)+K = s^2+10s+K = 0$.",
            "<b>Step 2 — Discriminant at K=25.</b> $100-4(25) = 0$ → a repeated (double) real root.",
            "<b>Step 3 — Pole.</b> $s = -10/2 = -5$ (double).",
            "<b>Step 4 — Distractor audit.</b> $\\pm5j$ needs $K>25$; $-10,0$ are the OPEN-loop poles; $-25$ ignores the quadratic."
          ],
          a: "$s = -5$ (double pole, critically damped).",
          v: "K=25 is exactly the critical-damping boundary: below it the poles are real/distinct (overdamped, sluggish), above it complex (underdamped, overshoot) ✓ — critical damping gives the fastest response with NO overshoot."

        }), ref: "p.366" },
      { q: "Type-0, $K_p = 4$. Step error:", choices: ["$1/5 = 0.2$", "$1/4$", "$0$", "$4$"], correct: 0,
        solution: S({
          c: "A Type-0 system (no integrators) has a finite steady-state error to a step input: $e_{ss} = \\dfrac{1}{1+K_p}$, where $K_p$ is the static position error constant.",
          s: [
            "<b>Step 1 — Apply.</b> $e_{ss} = 1/(1+4) = 1/5 = 0.2$.",
            "<b>Step 2 — Distractor audit.</b> $1/4$ forgets the +1; 0 would need an integrator (Type-1); 4 is just $K_p$."
          ],
          a: "$e_{ss} = 0.2$",
          v: "20% steady error is large — it's why Type-0 systems need high gain (or an added integrator) for accuracy ✓. Adding one integrator makes it Type-1, driving step error to exactly zero (at the cost of a finite ramp error)."

        }), ref: "p.366" },
      { q: "Bode plot first-order pole at 100 rad/s: at $\\omega=1000$:",
        choices: ["$\\approx -20$ dB and $-84°$ phase", "$0$ dB", "$-3$ dB", "$+20$ dB"], correct: 0,
        solution: S({
          c: "A first-order pole contributes −20 dB/decade magnitude rolloff and −90° of phase (asymptotically) above its corner frequency. One DECADE above the pole (1000 vs 100), magnitude is ≈ −20 dB and phase ≈ −84°.",
          s: [
            "<b>Step 1 — Magnitude.</b> 1 decade past the 100 rad/s corner → −20 dB.",
            "<b>Step 2 — Phase.</b> Phase reaches −45° AT the corner and approaches −90° far above; one decade up it's about −84°.",
            "<b>Step 3 — Distractor audit.</b> 0 dB and −3 dB are near/at the corner; +20 dB is a zero, not a pole."
          ],
          a: "$\\approx -20$ dB and $-84°$.",
          v: "Memorize the corner landmarks: AT the pole, −3 dB and −45°; a decade BELOW, ~0 dB/0°; a decade ABOVE, ~−20 dB/−84° ✓. The phase changes gradually over two decades around the corner, lagging the magnitude transition."

        }), ref: "p.366" },
      { q: "Pure delay $e^{-\\tau s}$ in time domain:", choices: ["Shifts signal by $\\tau$ later", "Differentiates", "Integrates", "Inverts"], correct: 0,
        solution: S({
          c: "Multiplying by $e^{-\\tau s}$ in the Laplace domain corresponds to a pure TIME DELAY: the output is the input shifted later by $\\tau$ — $\\mathcal L\\{x(t-\\tau)\\} = e^{-\\tau s}X(s)$.",
          s: [
            "<b>Step 1 — Match.</b> Shifts the signal $\\tau$ later in time.",
            "<b>Step 2 — Distractor audit.</b> Differentiation is $\\times s$; integration is $\\div s$; inversion is a sign change — none is a delay."
          ],
          a: "A time shift by $\\tau$ (later).",
          v: "Pure delay is a control engineer's nemesis: it adds phase lag without attenuation, eroding phase margin and destabilizing loops ✓ — transport lag in pipelines, network latency, and dead time all behave this way."

        }), ref: "p.56" },
      { q: "Bode phase of $e^{-\\tau s}$:", choices: ["Linearly decreasing: $-\\omega\\tau$", "Constant -90°", "Zero", "Linearly increasing"], correct: 0,
        solution: S({
          c: "A pure delay $e^{-\\tau s}$ has unit magnitude but phase $\\angle e^{-j\\omega\\tau} = -\\omega\\tau$ — phase lag that grows LINEARLY (and without bound) with frequency.",
          s: [
            "<b>Step 1 — Match.</b> Linearly decreasing: $-\\omega\\tau$.",
            "<b>Step 2 — Distractor audit.</b> Constant −90° is an integrator; zero ignores the delay; 'increasing' has the wrong sign."
          ],
          a: "$\\angle = -\\omega\\tau$ (linear lag).",
          v: "Magnitude stays 1 (a delay doesn't attenuate), but the ever-growing phase lag is what makes delays so destabilizing ✓ — at high frequency the lag becomes enormous, which is why dead time so sharply limits achievable bandwidth."

        }), ref: "p.56" },
      { q: "PID with too high $K_p$:", choices: ["Oscillation or instability", "Fast and stable", "Slow", "No effect"], correct: 0,
        solution: S({
          c: "Cranking proportional gain $K_p$ too high pushes the loop's gain crossover up where phase lag is large → phase margin collapses → the system oscillates or goes unstable.",
          s: [
            "<b>Step 1 — Match.</b> Oscillation or instability.",
            "<b>Step 2 — Distractor audit.</b> 'Fast and stable' ignores the margin loss; 'slow' and 'no effect' are wrong — high gain speeds response but at stability's expense."
          ],
          a: "Oscillation or instability.",
          v: "This is literally the basis of Ziegler-Nichols tuning: raise $K_p$ until sustained oscillation (the ULTIMATE gain), then back off ✓. The trade — more gain means faster response but less stability margin — is the central tension in controller design."

        }), ref: "p.366" },
      { q: "Ziegler-Nichols method:", choices: ["Empirical PID tuning rules", "Theoretical optimal", "Adaptive control", "Robust control"], correct: 0,
        solution: S({
          c: "Ziegler-Nichols (1942) is a set of EMPIRICAL PID tuning rules — formulas based on the measured ultimate gain and oscillation period (or an open-loop step response), not on a theoretical optimum.",
          s: [
            "<b>Step 1 — Match.</b> Empirical PID tuning rules.",
            "<b>Step 2 — Distractor audit.</b> Not 'theoretical optimal'; not adaptive or robust control — those are distinct, more advanced approaches."
          ],
          a: "Empirical PID tuning rules.",
          v: "Z-N gives a quick starting point but tends to be aggressive (oscillatory) ✓ — engineers then fine-tune, or use gentler modern methods (IMC, lambda tuning, relay auto-tuning) for less overshoot."

        }), ref: "p.366" },
      { q: "Cascade control structure:", choices: ["Inner fast loop + outer slower loop", "Single loop", "Parallel paths", "Random"], correct: 0,
        solution: S({
          c: "Cascade control nests two loops: a fast INNER loop regulates a secondary variable, and a slower OUTER loop sets the inner loop's setpoint. The inner loop rejects disturbances before they reach the main output.",
          s: [
            "<b>Step 1 — Match.</b> Inner fast loop + outer slower loop.",
            "<b>Step 2 — Distractor audit.</b> Single loop, parallel paths, and 'random' don't capture the nested setpoint structure."
          ],
          a: "Nested inner (fast) + outer (slow) loops.",
          v: "Classic example: a temperature (outer) loop commands a flow (inner) loop — the fast flow loop squashes supply-pressure upsets before they disturb temperature ✓. The inner loop must be several times faster than the outer for cascade to help."

        }), ref: "p.365" },
      { q: "State-space representation of order 2 system: number of state variables:",
        choices: ["$2$", "$1$", "$3$", "Variable"], correct: 0,
        solution: S({
          c: "In state-space form, the number of STATE VARIABLES equals the system ORDER (the number of independent energy-storage elements, or the highest derivative). A 2nd-order system has 2 states.",
          s: [
            "<b>Step 1 — Match.</b> 2 state variables.",
            "<b>Step 2 — Distractor audit.</b> 1 and 3 mismatch the order; 'variable' is wrong — it's fixed by the order."
          ],
          a: "2 state variables.",
          v: "Typical choice for a mechanical 2nd-order system: position and velocity ✓ — two independent quantities you need to predict the future. Each capacitor or inductor in a circuit, or each integrator in a block diagram, adds one state."

        }), ref: "p.365" },
      { q: "Observability of a system: can:", choices: ["Reconstruct full state from outputs and inputs", "Predict future inputs", "Reverse time", "Always controllable"], correct: 0,
        solution: S({
          c: "OBSERVABILITY asks: can you reconstruct the system's full internal STATE just from measuring its outputs (and knowing the inputs)? If yes over some interval, the system is observable.",
          s: [
            "<b>Step 1 — Match.</b> Reconstruct full state from outputs and inputs.",
            "<b>Step 2 — Distractor audit.</b> It's not about predicting future inputs or reversing time; 'always controllable' confuses it with the DUAL property."
          ],
          a: "Reconstruct the internal state from outputs.",
          v: "Test: the observability matrix must have full rank ✓. Its dual is CONTROLLABILITY (can inputs drive the state anywhere?). Observability is what makes state ESTIMATORS (Kalman filters, observers) possible when you can't measure every state directly."

        }), ref: "p.365" },
      { q: "Step response overshoot vs $\\zeta$: $\\zeta = 0.4$ gives:",
        choices: ["$\\approx 25\\%$ overshoot", "$5\\%$", "$0\\%$", "$50\\%$"], correct: 0,
        solution: S({
          c: "Percent overshoot of a 2nd-order step response depends only on damping ratio: $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$.",
          s: [
            "<b>Step 1 — Radical.</b> $\\sqrt{1-0.16} = \\sqrt{0.84} = 0.917$.",
            "<b>Step 2 — Exponent.</b> $-\\pi(0.4)/0.917 = -1.37$.",
            "<b>Step 3 — Overshoot.</b> $e^{-1.37} = 0.254 \\to 25\\%$.",
            "<b>Step 4 — Distractor audit.</b> 5% is ζ≈0.69; 0% needs ζ≥1; 50% is ζ≈0.22."
          ],
          a: "$\\approx 25\\%$ overshoot.",
          v: "Calibration ladder worth memorizing: ζ=0.4→25%, 0.5→16%, 0.6→9.5%, 0.707→4.3% ✓ — lower damping means bigger overshoot. ζ=0.7 is the popular design target (small overshoot, fast settling)."

        }), ref: "p.366" },
      { q: "Discrete-time controller sampling period $T_s$. Effect on stability:",
        choices: ["Larger $T_s$ → less stable (digital delay)", "Smaller is worse", "No effect", "Always stable"], correct: 0,
        solution: S({
          c: "Sampling introduces an effective DELAY of about $T_s/2$, which eats into phase margin. A LARGER sampling period $T_s$ → more delay → LESS stable.",
          s: [
            "<b>Step 1 — Match.</b> Larger $T_s$ → less stable (digital delay).",
            "<b>Step 2 — Distractor audit.</b> 'Smaller is worse' is backwards; 'no effect' and 'always stable' ignore the sampling delay."
          ],
          a: "Larger $T_s$ reduces stability.",
          v: "Design rule of thumb: sample at least 10× faster than the closed-loop bandwidth ($T_s \\le T_{rise}/10$) so the digital controller behaves like its continuous design ✓. Too slow a sample rate can destabilize an otherwise-fine controller."

        }), ref: "p.376" },
    ],

    // Comm — +12
    13: [
      { q: "BPSK constellation has __ points:", choices: ["$2$", "$4$", "$8$", "$16$"], correct: 0,
        solution: S({
          c: "A constellation diagram plots the distinct symbols of a digital modulation. BPSK (Binary Phase-Shift Keying) uses just two phases (0 and π) → 2 points, 1 bit per symbol.",
          s: [
            "<b>Step 1 — Match.</b> 2 points.",
            "<b>Step 2 — Distractor audit.</b> 4 is QPSK, 8 is 8-PSK, 16 is 16-QAM — each packs more bits per symbol."
          ],
          a: "2 points (1 bit/symbol).",
          v: "Maximum points apart for a given power → BPSK is the most ROBUST (lowest bit-error rate at a given SNR) but slowest ✓. The constellation-size ladder ($2^n$ points = n bits/symbol) trades robustness for data rate."

        }), ref: "p.371" },
      { q: "QPSK constellation:", choices: ["$4$ points (2 bits each)", "$16$", "$2$", "$8$"], correct: 0,
        solution: S({
          c: "QPSK (Quadrature PSK) uses four phases, giving 4 constellation points and $\\log_2 4 = 2$ bits per symbol.",
          s: [
            "<b>Step 1 — Match.</b> 4 points (2 bits each).",
            "<b>Step 2 — Distractor audit.</b> 2 is BPSK, 8 is 8-PSK, 16 is 16-QAM."
          ],
          a: "4 points (2 bits/symbol).",
          v: "QPSK doubles BPSK's data rate in the SAME bandwidth with the same energy-per-bit performance ✓ — a free win, which is why it's ubiquitous (satellite, cellular, Wi-Fi). Beyond it, denser constellations need more SNR."

        }), ref: "p.371" },
      { q: "Effect of doubling bandwidth on Shannon capacity (constant SNR):",
        choices: ["Capacity doubles (linear in B)", "Quadruples", "Halves", "No change"], correct: 0,
        solution: S({
          c: "Shannon capacity $C = B\\log_2(1+S/N)$ is LINEAR in bandwidth B (which sits outside the log). At constant SNR, doubling B doubles C.",
          s: [
            "<b>Step 1 — Apply.</b> $2B\\log_2(1+S/N) = 2C$.",
            "<b>Step 2 — Distractor audit.</b> 'Quadruples' would need B²; 'halves' is backwards; 'no change' ignores the linear term."
          ],
          a: "Capacity doubles.",
          v: "Bandwidth is the cheap lever — it scales capacity linearly, while SNR only helps logarithmically ✓. This is why 5G chases wide mmWave bands: adding spectrum beats fighting for marginal SNR gains."

        }), ref: "p.371" },
      { q: "Repeater function:", choices: ["Amplifies/regenerates signal in long links", "Stores data", "Encrypts", "Routes packets"], correct: 0,
        solution: S({
          c: "A repeater combats ATTENUATION over long links by boosting the signal. Analog repeaters amplify; DIGITAL repeaters (regenerators) detect the bits and retransmit clean copies.",
          s: [
            "<b>Step 1 — Match.</b> Amplifies/regenerates the signal.",
            "<b>Step 2 — Distractor audit.</b> Storing data is a buffer; encryption and packet routing are different functions."
          ],
          a: "Signal amplification/regeneration.",
          v: "Digital regeneration's advantage: it removes accumulated NOISE entirely by reconstructing the bits, so quality doesn't degrade over many hops ✓ — whereas analog amplifiers boost the noise along with the signal."

        }), ref: "p.371" },
      { q: "AM band frequencies:", choices: ["530-1700 kHz", "88-108 MHz", "1-30 MHz", "300-3000 MHz"], correct: 0,
        solution: S({
          c: "Standard US broadcast AM occupies roughly 530-1700 kHz (medium wave).",
          s: [
            "<b>Step 1 — Match.</b> 530-1700 kHz.",
            "<b>Step 2 — Distractor audit.</b> 88-108 MHz is FM; 1-30 MHz is shortwave; 300-3000 MHz is UHF."
          ],
          a: "≈ 0.5-1.7 MHz.",
          v: "AM's low frequency gives long wavelengths that follow the ground and bounce off the ionosphere at night — hence AM stations heard hundreds of miles away after dark ✓. FM's higher band gives better fidelity but line-of-sight range."

        }), ref: "p.371" },
      { q: "Microwaves frequency range:", choices: ["~$0.3-300$ GHz", "$<1$ MHz", "$300$ THz", "Visible light"], correct: 0,
        solution: S({
          c: "The microwave band spans roughly 0.3-300 GHz, corresponding to wavelengths from 1 m down to 1 mm.",
          s: [
            "<b>Step 1 — Match.</b> ~0.3-300 GHz.",
            "<b>Step 2 — Distractor audit.</b> <1 MHz is RF/longwave; 300 THz is infrared/visible; visible light is far above microwave."
          ],
          a: "0.3-300 GHz.",
          v: "This band carries radar, satellite links, Wi-Fi (2.4/5 GHz), and 5G ✓ — wide bandwidths and antennas small enough to be practical. Above it lies mm-wave (the new 5G frontier) then infrared."

        }), ref: "p.371" },
      { q: "Direct-sequence spread spectrum (DSSS) benefit:",
        choices: ["Resistance to narrow-band interference, multipath", "Higher data rate only", "Lower power", "Smaller bandwidth"], correct: 0,
        solution: S({
          c: "DSSS multiplies the data by a fast pseudo-noise (PN) code, SPREADING it over a much wider bandwidth. Spread signals resist narrow-band interference and multipath, since a jammer at one frequency only dents a fraction of the spread energy.",
          s: [
            "<b>Step 1 — Match.</b> Resistance to narrow-band interference and multipath.",
            "<b>Step 2 — Distractor audit.</b> It doesn't raise raw data rate, lower power, or shrink bandwidth — it deliberately WIDENS bandwidth for robustness."
          ],
          a: "Interference and multipath resistance.",
          v: "The despreading at the receiver concentrates the wanted signal while spreading any interferer — a processing gain ✓. DSSS underlies GPS (works below the noise floor), CDMA cellular, and early Wi-Fi."

        }), ref: "p.371" },
      { q: "OFDM:", choices: ["Orthogonal Frequency-Division Multiplexing", "Optical Frequency Detector", "Off-the-shelf Decoder", "Other"], correct: 0,
        solution: S({
          c: "OFDM = Orthogonal Frequency-Division Multiplexing: data is split across many closely-spaced ORTHOGONAL subcarriers, each carrying a slow stream. The orthogonality lets them overlap without interfering.",
          s: [
            "<b>Step 1 — Match.</b> Orthogonal Frequency-Division Multiplexing.",
            "<b>Step 2 — Distractor audit.</b> The other expansions are invented."
          ],
          a: "Orthogonal Frequency-Division Multiplexing.",
          v: "Splitting one fast stream into many slow ones makes each symbol long compared to channel echoes → strong resistance to MULTIPATH fading ✓. That's why OFDM powers Wi-Fi (a/g/n/ac/ax), 4G/5G, DVB-T, and ADSL."

        }), ref: "p.371" },
      { q: "$E_b/N_0$ vs SNR: relationship:",
        choices: ["$E_b/N_0 = (S/N)(B/R_b)$", "Same", "Reciprocal", "Unrelated"], correct: 0,
        solution: S({
          c: "$E_b/N_0$ (energy per bit over noise spectral density) is the normalized SNR used to compare digital systems fairly. Since $S = E_b R_b$ and $N = N_0 B$: $\\dfrac{E_b}{N_0} = \\dfrac{S}{N}\\cdot\\dfrac{B}{R_b}$.",
          s: [
            "<b>Step 1 — Substitute.</b> $E_b/N_0 = (S/R_b)/(N/B) = (S/N)(B/R_b)$.",
            "<b>Step 2 — Distractor audit.</b> 'Same' ignores the $B/R_b$ factor; 'reciprocal' and 'unrelated' are wrong."
          ],
          a: "$E_b/N_0 = (S/N)(B/R_b)$",
          v: "$E_b/N_0$ lets you compare modulation schemes independent of bandwidth and bit rate ✓ — it's the x-axis of every BER curve. The Shannon LIMIT puts a floor at $E_b/N_0 = -1.6$ dB, below which error-free comms is impossible."

        }), ref: "p.371" },
      { q: "FSK Bessel function bandwidth (modulation index large):",
        choices: ["Approaches $2(\\Delta f + f_m)$ Carson's rule", "Same as ASK", "$f_m$", "$2f_m$"], correct: 0,
        solution: S({
          c: "For wideband FM/FSK, Carson's rule estimates the occupied bandwidth: $BW \\approx 2(\\Delta f + f_m)$, where $\\Delta f$ is the peak frequency deviation and $f_m$ the modulating frequency.",
          s: [
            "<b>Step 1 — Match.</b> Approaches $2(\\Delta f + f_m)$ (Carson's rule).",
            "<b>Step 2 — Distractor audit.</b> 'Same as ASK' is false; $f_m$ and $2f_m$ describe NARROWband FSK (β≪1), not wideband."
          ],
          a: "$BW \\approx 2(\\Delta f + f_m)$ (Carson's rule).",
          v: "FM/FSK bandwidth grows with DEVIATION — wider deviation buys noise immunity at the cost of spectrum ✓. Narrowband FSK ($\\beta\\ll1$) collapses to $\\approx2f_m$, like AM; wideband FM (broadcast) is dominated by the deviation term."

        }), ref: "p.371" },
      { q: "Optical fiber bandwidth advantage:", choices: ["THz range (vs MHz/GHz for copper)", "Cheaper", "Easier to install", "Better at low power"], correct: 0,
        solution: S({
          c: "Optical fiber carries light at ~$10^{14}$ Hz (hundreds of THz), so even a tiny fractional bandwidth is enormous in absolute terms — vastly more than copper's MHz-GHz.",
          s: [
            "<b>Step 1 — Match.</b> THz-range bandwidth (vs MHz/GHz for copper).",
            "<b>Step 2 — Distractor audit.</b> Fiber isn't cheaper or easier to install, and 'better at low power' isn't its headline advantage — raw BANDWIDTH is."
          ],
          a: "Enormous (THz-class) bandwidth.",
          v: "Wavelength-division multiplexing (WDM) sends many colors down one fiber, reaching terabits/sec ✓. Fiber also beats copper on low loss (long spans without repeaters) and immunity to electromagnetic interference."

        }), ref: "p.371" },
      { q: "ADC sampling theorem: signal max freq $f_{max}$, must sample at:",
        choices: ["$f_s > 2 f_{max}$", "$f_s = f_{max}$", "$f_s = f_{max}/2$", "Any rate"], correct: 0,
        solution: S({
          c: "The Nyquist-Shannon sampling theorem: to capture a signal whose highest frequency is $f_{max}$ without aliasing, you must sample at MORE than twice that: $f_s > 2f_{max}$.",
          s: [
            "<b>Step 1 — Match.</b> $f_s > 2f_{max}$.",
            "<b>Step 2 — Distractor audit.</b> $f_s = f_{max}$ and $f_{max}/2$ are far too slow (severe aliasing); 'any rate' ignores the theorem."
          ],
          a: "$f_s > 2f_{max}$ (Nyquist).",
          v: "Sample at or below $2f_{max}$ and high frequencies alias into false low ones, unrecoverably ✓ — which is why CD audio uses 44.1 kHz for a 20-kHz limit, and why an anti-alias filter precedes every ADC."

        }), ref: "p.375" },
    ],

    // Networks — +8
    14: [
      { q: "Class C IPv4 network range:", choices: ["192.0.0.0 - 223.255.255.255", "10.x.x.x", "172.16.x.x", "127.x.x.x"], correct: 0,
        solution: S({
          c: "Classful IPv4 sorts addresses by leading bits. Class C starts with bits 110, putting its first octet in the range 192-223 (192.0.0.0 - 223.255.255.255).",
          s: [
            "<b>Step 1 — Match.</b> 192.0.0.0 - 223.255.255.255.",
            "<b>Step 2 — Distractor audit.</b> 10.x is Class A private; 172.16.x is Class B private; 127.x is loopback."
          ],
          a: "First octet 192-223.",
          v: "The class ladder: A (1-126, /8), B (128-191, /16), C (192-223, /24) ✓. Classful addressing is largely replaced by CIDR today, but the ranges still appear on exams and in legacy docs."

        }), ref: "p.393" },
      { q: "RFC 1918 private addresses:", choices: ["10.0.0.0/8, 172.16/12, 192.168/16", "All Class A", "Routable", "Random"], correct: 0,
        solution: S({
          c: "RFC 1918 reserves three address blocks for PRIVATE networks — not routable on the public internet: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.",
          s: [
            "<b>Step 1 — Match.</b> 10/8, 172.16/12, 192.168/16.",
            "<b>Step 2 — Distractor audit.</b> Not 'all Class A'; private addresses are specifically NON-routable (not 'routable'); not random."
          ],
          a: "10/8, 172.16/12, 192.168/16.",
          v: "These let every home and office reuse the same internal addresses (192.168.1.x is everywhere) ✓ — NAT translates them to a shared public IP at the gateway, conserving the scarce public IPv4 space."

        }), ref: "p.394" },
      { q: "NAT (Network Address Translation):", choices: ["Maps private IPs to public for internet access", "Encrypts traffic", "Routes only", "DNS service"], correct: 0,
        solution: S({
          c: "NAT lets many devices on a private network share one (or a few) public IP addresses. The gateway rewrites private source addresses to its public address on the way out, and reverses it on replies.",
          s: [
            "<b>Step 1 — Match.</b> Maps private IPs to public for internet access.",
            "<b>Step 2 — Distractor audit.</b> NAT doesn't encrypt, isn't just routing, and isn't DNS — it's address translation."
          ],
          a: "Private↔public address mapping.",
          v: "NAT is the main reason IPv4 hasn't fully run out — billions of devices hide behind shared public IPs ✓. A side benefit is a basic firewall effect (unsolicited inbound traffic has nowhere to go); IPv6's huge space reduces the need for it."

        }), ref: "p.400" },
      { q: "Routing protocols: OSPF type:", choices: ["Link-state (interior)", "Distance-vector", "Path-vector", "Bridge"], correct: 0,
        solution: S({
          c: "OSPF (Open Shortest Path First) is a LINK-STATE interior gateway protocol: every router learns the full network topology and runs Dijkstra's algorithm to compute shortest paths.",
          s: [
            "<b>Step 1 — Match.</b> Link-state (interior).",
            "<b>Step 2 — Distractor audit.</b> Distance-vector is RIP; path-vector is BGP; 'bridge' is Layer 2."
          ],
          a: "Link-state (interior gateway protocol).",
          v: "Link-state converges faster and avoids the routing loops that plague distance-vector protocols ✓ — each router has the whole map, not just neighbor rumors. OSPF runs WITHIN an autonomous system; BGP handles routing BETWEEN them."

        }), ref: "p.400" },
      { q: "BGP (Border Gateway Protocol) used for:", choices: ["Inter-AS routing on internet", "Within a single network", "Layer 2", "DNS"], correct: 0,
        solution: S({
          c: "BGP is the internet's inter-domain routing protocol: it exchanges reachability between AUTONOMOUS SYSTEMS (ISPs, large networks), deciding how traffic flows across the global internet.",
          s: [
            "<b>Step 1 — Match.</b> Inter-AS routing on the internet.",
            "<b>Step 2 — Distractor audit.</b> Within a single network you'd use OSPF/RIP (interior protocols); BGP isn't Layer 2 or DNS."
          ],
          a: "Inter-AS (between autonomous systems) routing.",
          v: "BGP is a PATH-VECTOR protocol — it tracks the AS path to avoid loops and apply policy ✓. It's the glue of the internet, but its trust-based design means a misconfiguration can cause global outages (route leaks/hijacks)."

        }), ref: "p.400" },
      { q: "Switch loop prevention:", choices: ["Spanning Tree Protocol (STP)", "VLAN", "Port mirror", "DHCP"], correct: 0,
        solution: S({
          c: "Redundant links between switches can form LOOPS, where broadcast frames circulate forever (a broadcast storm). The Spanning Tree Protocol (STP) detects loops and disables enough links to leave a loop-free tree.",
          s: [
            "<b>Step 1 — Match.</b> Spanning Tree Protocol (STP).",
            "<b>Step 2 — Distractor audit.</b> VLANs segment traffic, port mirror copies it, DHCP assigns addresses — none prevent loops."
          ],
          a: "Spanning Tree Protocol (STP).",
          v: "Without STP, a single accidental loop melts the network in seconds as frames multiply ✓ — STP keeps backup links on standby, activating them only if the primary fails (rapid STP recovers in milliseconds)."

        }), ref: "p.399" },
      { q: "Cat 6 Ethernet cable supports up to:", choices: ["$10$ Gbps (short runs)", "$100$ Mbps", "$1$ Gbps", "$40$ Gbps"], correct: 0,
        solution: S({
          c: "Category-6 twisted-pair supports 1 Gbps over full 100 m runs, and up to 10 Gbps over SHORTER runs (typically <55 m). Cat 6a extends 10 Gbps to the full 100 m.",
          s: [
            "<b>Step 1 — Match.</b> 10 Gbps (short runs).",
            "<b>Step 2 — Distractor audit.</b> 100 Mbps is Cat 5; 1 Gbps is Cat 5e (and Cat 6 at full length); 40 Gbps needs Cat 8."
          ],
          a: "10 Gbps over short runs.",
          v: "The cabling ladder: Cat 5e → 1 Gbps, Cat 6 → 10 Gbps short / 1 Gbps long, Cat 6a → 10 Gbps full, Cat 8 → 25-40 Gbps ✓. Higher categories add shielding/tighter twists to fight crosstalk at high frequencies."

        }), ref: "p.399" },
      { q: "DNS recursive vs authoritative:", choices: ["Recursive: queries on user's behalf; Authoritative: holds the data", "Same", "Recursive is faster", "Authoritative is local"], correct: 0,
        solution: S({
          c: "A RECURSIVE resolver does the legwork — querying down the DNS tree on the user's behalf until it gets an answer. An AUTHORITATIVE server actually HOLDS the records for a domain and gives the definitive reply.",
          s: [
            "<b>Step 1 — Match.</b> Recursive queries on your behalf; authoritative holds the data.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; speed/locality aren't the defining distinction — it's WHO does the work vs who owns the records."
          ],
          a: "Recursive (does lookups) vs authoritative (holds records).",
          v: "Your ISP's or 8.8.8.8's recursive resolver walks root → TLD → authoritative, then CACHES the result for speed on repeat lookups ✓. The authoritative server (run by the domain owner) is the source of truth."

        }), ref: "p.400" },
    ],

    // Digital — +15
    15: [
      { q: "Sum of products (SOP) vs product of sums (POS):",
        choices: ["SOP: OR of ANDs; POS: AND of ORs", "Same", "POS only for NAND", "SOP is for 2-input"], correct: 0,
        solution: S({
          c: "Two canonical ways to write a Boolean function. SOP (Sum of Products) = OR of AND-terms (e.g. $AB + C\\bar D$). POS (Product of Sums) = AND of OR-terms (e.g. $(A+B)(\\bar C+D)$).",
          s: [
            "<b>Step 1 — Match.</b> SOP = OR of ANDs; POS = AND of ORs.",
            "<b>Step 2 — Distractor audit.</b> They're not 'the same'; POS isn't NAND-only; SOP isn't limited to 2 inputs."
          ],
          a: "SOP: OR of ANDs; POS: AND of ORs.",
          v: "Pick whichever is simpler: SOP groups the 1s of a K-map, POS groups the 0s ✓. SOP maps naturally to AND-OR (or NAND-NAND) gate networks; POS to OR-AND (or NOR-NOR)."

        }), ref: "p.389" },
      { q: "K-map identifies 4 adjacent cells with output 1: corresponds to:",
        choices: ["Term with 2 variables (3 vars eliminated)", "Single variable", "All 4 variables", "Constant"], correct: 0,
        solution: S({
          c: "On a Karnaugh map, grouping $2^k$ adjacent 1-cells eliminates $k$ variables. With $n$ total variables, the resulting product term has $n-k$ variables.",
          s: [
            "<b>Step 1 — Cells to k.</b> 4 cells $= 2^2$ → $k=2$ variables eliminated.",
            "<b>Step 2 — Remaining.</b> In a 4-variable map, $4-2 = 2$ variables remain in the term.",
            "<b>Step 3 — Distractor audit.</b> 'Single variable' would need 8 cells; 'all 4' would be 1 cell; 'constant' would be all 16 cells."
          ],
          a: "A term with $n-2$ variables (2 eliminated).",
          v: "Bigger groups = simpler logic: each doubling of the group drops one more variable ✓. The whole point of K-maps is to find the LARGEST legal groupings, which give the minimal (cheapest) gate implementation."

        }), ref: "p.390" },
      { q: "Number of states in synchronous counter with 4 FFs:",
        choices: ["$16$", "$4$", "$8$", "$32$"], correct: 0,
        solution: S({
          c: "Each flip-flop stores one bit, so $n$ flip-flops represent $2^n$ distinct states.",
          s: [
            "<b>Step 1 — Apply.</b> $2^4 = 16$ states.",
            "<b>Step 2 — Distractor audit.</b> 4 confuses FFs with states; 8 is $2^3$; 32 is $2^5$."
          ],
          a: "16 states.",
          v: "A 4-bit counter cycles 0→15 then wraps ✓. To make a counter that stops at a non-power-of-2 (say, mod-10 for BCD), you add logic to reset early — but the raw FF capacity is always $2^n$."

        }), ref: "p.391" },
      { q: "Half adder outputs:", choices: ["Sum and Carry", "Just sum", "Sum and Borrow", "Carry and Subtract"], correct: 0,
        solution: S({
          c: "A HALF adder adds two single bits A and B, producing a SUM (= A XOR B) and a CARRY (= A AND B). It has no carry-IN.",
          s: [
            "<b>Step 1 — Match.</b> Sum and Carry.",
            "<b>Step 2 — Distractor audit.</b> 'Just sum' omits the carry; 'borrow' and 'subtract' belong to subtractors, not adders."
          ],
          a: "Sum and Carry.",
          v: "The limitation: no carry-in means you can't chain half adders for multi-bit addition ✓ — that needs the FULL adder (A, B, and $C_{in}$ → Sum, $C_{out}$), which is two half adders plus an OR gate."

        }), ref: "p.390" },
      { q: "Full adder Sum logic:", choices: ["$A \\oplus B \\oplus C_{in}$", "$AB + C$", "$A+B+C$", "$ABC$"], correct: 0,
        solution: S({
          c: "A FULL adder sums three bits (A, B, and carry-in). Its SUM output is the XOR of all three: $S = A \\oplus B \\oplus C_{in}$ (sum is 1 when an ODD number of inputs are 1).",
          s: [
            "<b>Step 1 — Match.</b> $A \\oplus B \\oplus C_{in}$.",
            "<b>Step 2 — Distractor audit.</b> $AB+C$, $A+B+C$, $ABC$ are not the XOR-parity that sum requires."
          ],
          a: "$S = A \\oplus B \\oplus C_{in}$",
          v: "The carry-out completes it: $C_{out} = AB + C_{in}(A\\oplus B)$ — carry when at least two inputs are 1 ✓. Chain $n$ full adders, carry to carry, and you get an $n$-bit ripple adder."

        }), ref: "p.390" },
      { q: "Encoder (n-to-log n):", choices: ["Converts $2^n$ input lines to an $n$-bit code — the reverse of a decoder", "Converts an $n$-bit code to $2^n$ output lines", "Passes the input through unchanged", "Outputs a random code"], correct: 0,
        solution: S({
          c: "An ENCODER is the reverse of a decoder: given one active line out of $2^n$ inputs, it outputs the $n$-bit binary code identifying WHICH input is active.",
          s: [
            "<b>Step 1 — Match.</b> An encoder maps $2^n$ input lines down to an $n$-bit code — equivalently, it is the reverse of a decoder. Both phrasings describe the one correct option.",
            "<b>Step 2 — Distractor audit.</b> 'Converts an $n$-bit code to $2^n$ lines' is the DECODER (opposite direction); 'passes through unchanged' is a buffer; 'random code' is nonsense.",
          ],
          a: "Maps $2^n$ inputs → $n$-bit code (the reverse of a decoder).",
          v: "A PRIORITY encoder handles the realistic case of multiple simultaneous active inputs by outputting the highest-priority one ✓ — used in interrupt controllers to pick which of many pending interrupts to service first."

        }), ref: "p.390" },
      { q: "ROM vs RAM:", choices: ["ROM read-only after programming; RAM read/write", "Same", "RAM is permanent", "ROM is faster"], correct: 0,
        solution: S({
          c: "ROM (Read-Only Memory) is non-volatile and generally read-only after programming; RAM (Random-Access Memory) is volatile and supports full read/write at high speed.",
          s: [
            "<b>Step 1 — Match.</b> ROM read-only (after programming); RAM read/write.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; RAM is VOLATILE not permanent; ROM isn't faster than RAM."
          ],
          a: "ROM = read-only/non-volatile; RAM = read/write/volatile.",
          v: "Modern FLASH blurs the line — it's re-writable non-volatile 'ROM' ✓. The key trade: RAM is fast but loses data on power-off (working memory); ROM/flash persists (firmware, storage)."

        }), ref: "p.407" },
      { q: "Flash memory cell stores data as:",
        choices: ["Charge on floating gate", "Magnetic field", "Optical state", "Mechanical"], correct: 0,
        solution: S({
          c: "A flash cell is a floating-gate transistor: charge trapped on an electrically isolated 'floating' gate shifts the transistor's threshold voltage, which encodes the stored bit(s).",
          s: [
            "<b>Step 1 — Match.</b> Charge on a floating gate.",
            "<b>Step 2 — Distractor audit.</b> Magnetic is hard-disk/tape; optical is CD/DVD; mechanical isn't a memory mechanism."
          ],
          a: "Trapped charge on a floating gate.",
          v: "The trapped charge persists with no power (non-volatile), but each program/erase cycle slightly damages the oxide ✓ — which is why flash and SSDs WEAR OUT after thousands-to-millions of cycles, and use wear-leveling to spread the damage."

        }), ref: "p.407" },
      { q: "BCD (Binary-Coded Decimal): each decimal digit takes:",
        choices: ["$4$ bits", "$8$ bits", "$3$ bits", "$10$ bits"], correct: 0,
        solution: S({
          c: "BCD encodes each decimal digit (0-9) in its own 4-bit binary group. Four bits cover 0-15, enough for 0-9 (with 10-15 unused/wasted).",
          s: [
            "<b>Step 1 — Match.</b> 4 bits per digit.",
            "<b>Step 2 — Distractor audit.</b> 3 bits only reach 7; 8 and 10 bits are more than one decimal digit needs."
          ],
          a: "4 bits per decimal digit.",
          v: "BCD trades efficiency for easy decimal display/conversion ✓ — slight waste (6 of 16 codes unused) but no binary↔decimal rounding, which is why it appears in calculators, digital clocks, and some financial systems."

        }), ref: "p.388" },
      { q: "Gray code 4-bit: how many bits change between consecutive codes?",
        choices: ["$1$", "$2$", "Variable", "$4$"], correct: 0,
        solution: S({
          c: "Gray code (reflected binary) is designed so that consecutive values differ in EXACTLY ONE bit.",
          s: [
            "<b>Step 1 — Match.</b> 1 bit.",
            "<b>Step 2 — Distractor audit.</b> Ordinary binary changes MANY bits at some steps (e.g. 0111→1000 flips all 4); 'variable' and '4' describe binary, not Gray."
          ],
          a: "Exactly 1 bit.",
          v: "The single-bit change is what makes Gray code essential for ROTARY ENCODERS and ADCs ✓ — if multiple bits changed at once, transient misreads during the transition could give wildly wrong positions. One bit = no ambiguous intermediate states."

        }), ref: "p.388" },
      { q: "Hexadecimal place values:", choices: ["1, 16, 256, ...", "1, 8, 64, ...", "1, 10, 100, ...", "1, 2, 4, ..."], correct: 0,
        solution: S({
          c: "Hexadecimal is base-16, so digit position $i$ (from the right, starting at 0) has place value $16^i$: 1, 16, 256, 4096, …",
          s: [
            "<b>Step 1 — Match.</b> 1, 16, 256, …",
            "<b>Step 2 — Distractor audit.</b> 1,8,64 is octal (base 8); 1,10,100 is decimal; 1,2,4 is binary."
          ],
          a: "$16^0, 16^1, 16^2, \\ldots$ = 1, 16, 256, …",
          v: "Each hex digit = exactly 4 bits, which is why hex is the compact shorthand for binary ✓ — one hex digit per nibble, two per byte (so 0xFF = 255 = one byte of all 1s)."

        }), ref: "p.388" },
      { q: "Edge-triggered FF vs level-triggered latch:",
        choices: ["FF samples at edge (transition); latch transparent during level", "Same", "Latch is faster", "FF can't be clocked"], correct: 0,
        solution: S({
          c: "A LATCH is level-sensitive: its output follows the input the whole time the enable is asserted (transparent). A FLIP-FLOP is edge-triggered: it samples the input only at the clock EDGE (rising or falling).",
          s: [
            "<b>Step 1 — Match.</b> FF samples at the edge; latch is transparent during the level.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; latch isn't reliably 'faster' in a useful sense; FFs are definitely clockable."
          ],
          a: "Edge-triggered (FF) vs level-transparent (latch).",
          v: "Edge-triggering makes FFs glitch-tolerant and the backbone of synchronous design ✓ — inputs only matter at the clock instant, so combinational glitches between edges are ignored. Latches are simpler/smaller but trickier to time."

        }), ref: "p.391" },
      { q: "Asynchronous reset:", choices: ["Independent of clock — immediate", "Edge-triggered", "Synchronous to clock", "Variable timing"], correct: 0,
        solution: S({
          c: "An ASYNCHRONOUS reset forces the output to 0 IMMEDIATELY whenever asserted, independent of the clock — it doesn't wait for an edge.",
          s: [
            "<b>Step 1 — Match.</b> Independent of clock — immediate.",
            "<b>Step 2 — Distractor audit.</b> 'Edge-triggered' / 'synchronous to clock' describe SYNCHRONOUS reset; 'variable timing' is wrong."
          ],
          a: "Clock-independent, immediate.",
          v: "Async reset is great for power-on initialization (works before the clock is even running) ✓ — but its RELEASE must be timed away from the clock edge to avoid metastability, a classic FPGA design gotcha."

        }), ref: "p.391" },
      { q: "Multiplexer truth table for 2-to-1 with select S:",
        choices: ["Output = A if S=0, B if S=1", "Output = always A", "Output = A AND B", "Output = $\\bar{S}$"], correct: 0,
        solution: S({
          c: "A 2-to-1 multiplexer routes one of two data inputs to the output based on the select line: output = A when S=0, B when S=1. Boolean: $Y = \\bar S A + S B$.",
          s: [
            "<b>Step 1 — Match.</b> Output = A if S=0, B if S=1.",
            "<b>Step 2 — Distractor audit.</b> 'Always A' ignores the select; 'A AND B' is a gate, not a MUX; '$\\bar S$' is just the inverted select."
          ],
          a: "S selects A (S=0) or B (S=1).",
          v: "MUXes are universal building blocks — a 2:1 MUX can even implement any logic gate ✓, and they're how CPUs steer data (register selection, ALU input routing). The select line is the 'traffic cop'."

        }), ref: "p.390" },
      { q: "Convert $\\text{1A}_{16}$ to octal:", choices: ["$32_8$", "$26_8$", "$12_8$", "$42_8$"], correct: 0,
        solution: S({
          c: "Convert between non-decimal bases via BINARY as a bridge: hex digit → 4 bits, then regroup the bits into 3s for octal.",
          s: [
            "<b>Step 1 — Hex to binary.</b> 1A₁₆ = 0001 1010.",
            "<b>Step 2 — Regroup in 3s (from right).</b> 011 010.",
            "<b>Step 3 — Each group to octal.</b> 011=3, 010=2 → 32₈.",
            "<b>Step 4 — Distractor audit.</b> 26₈, 12₈, 42₈ come from regrouping errors."
          ],
          a: "32₈",
          v: "Decimal cross-check: 1A₁₆ = 1×16+10 = 26₁₀ = 3×8+2 = 32₈ ✓. Binary is the universal bridge — hex groups bits in 4s, octal in 3s, so going hex↔octal directly is error-prone; route through binary."

        }), ref: "p.388" },
    ],

    // CompSys — +10
    16: [
      { q: "Page replacement algorithm LRU:", choices: ["Least Recently Used", "Last Read Update", "Long-Running Unit", "Other"], correct: 0,
        solution: S({
          c: "When memory is full and a new page is needed, a page-replacement algorithm picks a victim to evict. LRU = Least Recently Used: evict the page that hasn't been accessed for the longest time.",
          s: [
            "<b>Step 1 — Match.</b> Least Recently Used.",
            "<b>Step 2 — Distractor audit.</b> The other expansions are invented."
          ],
          a: "Least Recently Used.",
          v: "LRU exploits LOCALITY — recently-used pages are likely to be used again ✓, approximating the optimal (but unrealizable) 'evict what's needed furthest in the future' policy. Exact LRU is costly to track, so real systems use approximations (clock/second-chance)."

        }), ref: "p.408" },
      { q: "Cache write policy: write-through vs write-back:",
        choices: ["Through: writes immediately to memory; back: only on eviction", "Same", "Back is slower", "Through is for caches"], correct: 0,
        solution: S({
          c: "WRITE-THROUGH updates main memory on every write (simple, always consistent, but slow). WRITE-BACK updates only the cache, marking it 'dirty', and writes to memory only when the line is evicted (fast, but needs coherency care).",
          s: [
            "<b>Step 1 — Match.</b> Through = immediate to memory; back = deferred until eviction.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; write-back is FASTER (fewer memory writes); both are cache policies."
          ],
          a: "Write-through (immediate) vs write-back (deferred).",
          v: "Write-back wins on performance by coalescing repeated writes to the same line ✓, but the dirty data living only in cache complicates multi-core coherency and crash recovery — which write-through avoids at a speed cost."

        }), ref: "p.407" },
      { q: "CPU clock speed effect on power:",
        choices: ["Roughly proportional to clock (linear)", "Squared", "Cubed", "No relation"], correct: 0,
        solution: S({
          c: "Dynamic CPU power is $P = CV^2 f$ — LINEAR in clock frequency $f$ (at fixed voltage). More switching per second means proportionally more power.",
          s: [
            "<b>Step 1 — Match.</b> Roughly proportional to clock (linear in f).",
            "<b>Step 2 — Distractor audit.</b> Squared/cubed overstate the direct frequency dependence; 'no relation' is wrong."
          ],
          a: "Linear in $f$ (at constant V).",
          v: "But there's a catch: pushing higher $f$ usually requires higher $V$, and power goes as $V^2$ — so real frequency increases cost MORE than linearly (toward cubic) ✓. This is exactly why CPUs went multi-core instead of just clocking ever higher."

        }), ref: "p.408" },
      { q: "Two-level cache (L1 + L2): typical sizes:",
        choices: ["L1: tens of KB; L2: hundreds KB to MBs", "Both 1 MB", "L1 bigger", "Same"], correct: 0,
        solution: S({
          c: "The cache hierarchy trades size for speed: L1 is tiny and fastest (tens of KB per core), L2 is larger and slightly slower (hundreds of KB to ~1 MB per core), L3 is large and shared (MBs).",
          s: [
            "<b>Step 1 — Match.</b> L1 tens of KB; L2 hundreds KB to MBs.",
            "<b>Step 2 — Distractor audit.</b> 'Both 1 MB' and 'L1 bigger' invert the hierarchy; 'same' ignores the size/speed gradient."
          ],
          a: "L1 small (~32-64 KB), L2 medium (256 KB-1 MB).",
          v: "Each level trades capacity for latency: L1 ~1-4 cycles, L2 ~10, L3 ~40, DRAM ~200+ ✓. Small-and-fast close to the core, big-and-slower further out — the same principle as the whole memory hierarchy."

        }), ref: "p.407" },
      { q: "Branch predictor accuracy in modern CPUs:",
        choices: ["95-99% typically", "50% (random)", "Always 100%", "Below 70%"], correct: 0,
        solution: S({
          c: "Modern branch predictors (TAGE, perceptron-based) achieve 95-99% accuracy on typical workloads by learning branch history patterns.",
          s: [
            "<b>Step 1 — Match.</b> 95-99%.",
            "<b>Step 2 — Distractor audit.</b> 50% would be random (useless); 100% is unattainable; below 70% would cripple a deep pipeline."
          ],
          a: "95-99% typically.",
          v: "Why such high accuracy is vital: each misprediction flushes the pipeline at a cost of ~15-20 cycles ✓ — so even the residual 1-5% miss rate is a major performance factor, and a 1% accuracy gain is worth real silicon."

        }), ref: "p.408" },
      { q: "DMA (Direct Memory Access):", choices: ["I/O device writes to memory without CPU", "CPU controls all I/O", "Faster CPU", "Memory expansion"], correct: 0,
        solution: S({
          c: "DMA lets an I/O device transfer data directly to/from memory WITHOUT the CPU moving each byte. A DMA controller handles the transfer, freeing the CPU for other work.",
          s: [
            "<b>Step 1 — Match.</b> I/O device writes to memory without CPU.",
            "<b>Step 2 — Distractor audit.</b> 'CPU controls all I/O' is the opposite (programmed I/O); DMA isn't a faster CPU or memory expansion."
          ],
          a: "I/O ↔ memory transfer without CPU involvement.",
          v: "Without DMA, the CPU would waste cycles copying every byte from disk/network ✓ — DMA offloads that, signaling the CPU with an interrupt only when the whole block is done. Essential for high-throughput disk, network, and audio."

        }), ref: "p.408" },
      { q: "Interrupt latency:", choices: ["Time from event to handler start", "Total interrupt processing time", "Memory access", "Variable always"], correct: 0,
        solution: S({
          c: "Interrupt latency is the time from when the hardware event SIGNALS to when the interrupt service routine (ISR) actually STARTS executing.",
          s: [
            "<b>Step 1 — Match.</b> Time from event to handler start.",
            "<b>Step 2 — Distractor audit.</b> 'Total processing time' is the full ISR duration (a different metric); memory access and 'variable always' aren't the definition."
          ],
          a: "Event-to-handler-start delay.",
          v: "Low, predictable latency is critical in REAL-TIME systems (motor control, safety) ✓ — it's affected by higher-priority pending interrupts, whether interrupts are currently disabled, and CPU pipeline state. Deterministic latency matters more than raw speed for control."

        }), ref: "p.408" },
      { q: "Memory address ' 0x1000 ' in decimal:", choices: ["$4096$", "$1000$", "$10$", "$256$"], correct: 0,
        solution: S({
          c: "0x1000 is hexadecimal. The leading 1 sits in the $16^3$ place: $1\\times16^3 = 4096$.",
          s: [
            "<b>Step 1 — Evaluate.</b> $1\\times16^3 + 0 + 0 + 0 = 4096$.",
            "<b>Step 2 — Distractor audit.</b> 1000 reads it as decimal; 10 and 256 mis-place the digit (256 = $16^2$)."
          ],
          a: "4096.",
          v: "Worth memorizing the hex landmarks: 0x100 = 256, 0x400 = 1024 (1 KB), 0x1000 = 4096 (4 KB — a common page size) ✓. That's why memory pages and alignment boundaries are quoted in round hex numbers."

        }), ref: "p.388" },
      { q: "Spin lock vs sleep-based lock:",
        choices: ["Spin: busy-wait; sleep: yield to OS scheduler", "Same", "Sleep is busy", "Spin is for memory"], correct: 0,
        solution: S({
          c: "A SPINLOCK busy-waits — the thread loops checking the lock, burning CPU but reacting instantly. A SLEEP-based lock yields to the OS scheduler, wasting no CPU but incurring wake-up latency.",
          s: [
            "<b>Step 1 — Match.</b> Spin = busy-wait; sleep = yield to scheduler.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; sleep is NOT busy; spinlocks are for CPU sync, not memory."
          ],
          a: "Spin = busy-wait; sleep = yield.",
          v: "Use a spinlock only for VERY short critical sections where the wake-up overhead would exceed the wait ✓ — common in kernel/multicore code. For longer waits, sleeping is far better than wasting a core spinning."

        }), ref: "p.408" },
      { q: "Multicore CPU sharing L3 cache:", choices: ["Each core has private L1/L2; shared L3", "All private", "Single cache", "L1 shared"], correct: 0,
        solution: S({
          c: "In a modern multicore CPU, each core has its own private L1 and L2 (for low-latency local access), while the larger L3 is SHARED across all cores (for capacity and inter-core data sharing).",
          s: [
            "<b>Step 1 — Match.</b> Private L1/L2 per core; shared L3.",
            "<b>Step 2 — Distractor audit.</b> 'All private' misses the shared L3; 'single cache' and 'L1 shared' don't match real designs."
          ],
          a: "Private L1/L2, shared L3.",
          v: "The shared L3 lets cores exchange data without going to slow DRAM ✓, but it raises CACHE COHERENCY challenges — protocols like MESI keep each core's private caches consistent when they touch the same memory."

        }), ref: "p.407" },
    ],

    // Software — +10
    17: [
      { q: "Hash function should be:",
        choices: ["Uniform distribution + deterministic + fast", "Slow", "Random", "Just unique"], correct: 0,
        solution: S({
          c: "A good (non-cryptographic) hash function is DETERMINISTIC (same input → same output), DISTRIBUTES keys uniformly (minimizing collisions), and is FAST to compute.",
          s: [
            "<b>Step 1 — Match.</b> Uniform distribution + deterministic + fast.",
            "<b>Step 2 — Distractor audit.</b> 'Slow' is undesirable; 'random' breaks determinism (you couldn't find the key again); 'just unique' is impossible in general (pigeonhole)."
          ],
          a: "Uniform, deterministic, and fast.",
          v: "Uniformity keeps hash-table operations near $O(1)$ by avoiding collision pileups ✓. CRYPTOGRAPHIC hashes add more requirements (irreversibility, collision-resistance) at the cost of speed — a different tool for a different job."

        }), ref: "p.415" },
      { q: "Greedy algorithm characteristic:", choices: ["Locally optimal choice each step", "Considers all options globally", "Random", "Recursion"], correct: 0,
        solution: S({
          c: "A GREEDY algorithm makes the locally-optimal choice at each step, hoping it leads to a global optimum. It's simple and fast but doesn't always find the best overall solution.",
          s: [
            "<b>Step 1 — Match.</b> Locally optimal choice each step.",
            "<b>Step 2 — Distractor audit.</b> 'Considers all options globally' is brute force/DP; 'random' and 'recursion' aren't the defining trait."
          ],
          a: "Locally-optimal choice at each step.",
          v: "Greedy is PROVABLY optimal for some problems (Dijkstra, Kruskal/Prim MST, Huffman coding) but FAILS others (0-1 knapsack, TSP) ✓ — knowing which is which is the skill. When greedy fails, dynamic programming usually rescues it."

        }), ref: "p.415" },
      { q: "Dynamic programming benefit over plain recursion:",
        choices: ["Avoids re-computing same subproblems (memoization)", "Always uses less code", "Faster I/O", "Removes recursion"], correct: 0,
        solution: S({
          c: "Dynamic programming solves each subproblem ONCE and caches the result (memoization), avoiding the exponential re-computation that plain recursion suffers on overlapping subproblems.",
          s: [
            "<b>Step 1 — Match.</b> Avoids re-computing the same subproblems.",
            "<b>Step 2 — Distractor audit.</b> DP isn't about less code, faster I/O, or removing recursion (it can BE recursive, just memoized)."
          ],
          a: "Memoization (reuse of subproblem results).",
          v: "The Fibonacci example is dramatic: naive recursion is $O(2^n)$, DP is $O(n)$ ✓ — same recursion tree, but caching collapses the repeated branches. DP applies when a problem has overlapping subproblems AND optimal substructure."

        }), ref: "p.415" },
      { q: "Linear search vs binary search:",
        choices: ["Linear $O(n)$ unsorted; Binary $O(\\log n)$ requires sorted", "Same", "Binary always faster", "Linear for sorted only"], correct: 0,
        solution: S({
          c: "LINEAR search scans every element — $O(n)$ — and works on ANY array. BINARY search halves the search space each step — $O(\\log n)$ — but REQUIRES sorted input.",
          s: [
            "<b>Step 1 — Match.</b> Linear $O(n)$ on unsorted; binary $O(\\log n)$ requires sorted.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; binary isn't 'always faster' (needs sorting first); the sorted-requirement is on BINARY, not linear."
          ],
          a: "Linear $O(n)$ (any); binary $O(\\log n)$ (sorted).",
          v: "The trade: if you search once, linear may win (no sort needed); if you search REPEATEDLY, sort once ($O(n\\log n)$) then binary-search many times ✓. Binary search on a million items takes only ~20 comparisons."

        }), ref: "p.415" },
      { q: "Stack memory typical size for a thread:",
        choices: ["Few KB to MBs (OS-dependent)", "Always 1 GB", "Always 64 bytes", "Unlimited"], correct: 0,
        solution: S({
          c: "Each thread gets a fixed stack, typically a few KB to a few MB (Linux default ~8 MB; embedded systems much smaller). It holds local variables and call frames.",
          s: [
            "<b>Step 1 — Match.</b> Few KB to MBs (OS-dependent).",
            "<b>Step 2 — Distractor audit.</b> 'Always 1 GB' is far too large; '64 bytes' far too small; 'unlimited' is wrong — stacks are bounded."
          ],
          a: "Few KB to MBs (OS/config-dependent).",
          v: "This bound is why deep recursion causes STACK OVERFLOW ✓ — each call consumes a frame, and runaway depth exhausts the fixed stack. Heavy data should go on the heap (dynamically sized) instead."

        }), ref: "p.408" },
      { q: "Iterative vs recursive: factorial:",
        choices: ["Iterative more memory-efficient; recursive more readable", "Same", "Recursive is faster", "Iterative is slower"], correct: 0,
        solution: S({
          c: "Computing factorial iteratively (a loop) uses constant memory; recursively it's cleaner to read but each call adds a stack frame (memory overhead, risk of overflow).",
          s: [
            "<b>Step 1 — Match.</b> Iterative is more memory-efficient; recursive is more readable.",
            "<b>Step 2 — Distractor audit.</b> Not 'same'; recursion isn't faster (call overhead); iteration isn't slower in any meaningful way here."
          ],
          a: "Iterative: less memory; recursive: cleaner.",
          v: "In languages with TAIL-CALL optimization, tail-recursion compiles to a loop — erasing the memory penalty ✓. Otherwise, deep recursion risks stack overflow, so iteration is the safe choice for large inputs."

        }), ref: "p.415" },
      { q: "Big-O of sum of arithmetic series $1+2+...+n$:",
        choices: ["$O(1)$ closed form, but $O(n)$ if computed iteratively", "$O(n^2)$ always", "$O(\\log n)$", "$O(n!)$"], correct: 0,
        solution: S({
          c: "The sum $1+2+\\cdots+n$ has the CLOSED FORM $n(n+1)/2$, computable in $O(1)$ (constant time). Only if you loop and add term-by-term is it $O(n)$.",
          s: [
            "<b>Step 1 — Match.</b> $O(1)$ with the formula; $O(n)$ if summed iteratively.",
            "<b>Step 2 — Distractor audit.</b> $O(n^2)$, $O(\\log n)$, $O(n!)$ don't describe either approach."
          ],
          a: "$O(1)$ via the closed-form formula.",
          v: "This is the classic lesson that a smarter ALGORITHM beats brute force: Gauss's $n(n+1)/2$ turns an n-step loop into one multiplication ✓ — recognizing closed forms can collapse complexity dramatically."

        }), ref: "p.415" },
      { q: "Object-oriented programming pillars (4):",
        choices: ["Encapsulation, Inheritance, Polymorphism, Abstraction", "Speed, Stability, Security, Scale", "Code, Data, Files, Network", "Bits, Bytes, Words, Pages"], correct: 0,
        solution: S({
          c: "The four pillars of OOP: ENCAPSULATION (hide internal data behind interfaces), INHERITANCE (derive new classes from existing ones), POLYMORPHISM (one interface, many implementations), ABSTRACTION (expose only essential features).",
          s: [
            "<b>Step 1 — Match.</b> Encapsulation, Inheritance, Polymorphism, Abstraction.",
            "<b>Step 2 — Distractor audit.</b> The other lists are invented buzzwords."
          ],
          a: "Encapsulation, Inheritance, Polymorphism, Abstraction.",
          v: "Together they manage COMPLEXITY: encapsulation protects state, inheritance reuses code, polymorphism enables flexible extension, abstraction hides detail ✓ — the foundation of Java, C++, Python class design."

        }), ref: "p.415" },
      { q: "Linked list reverse: time complexity:",
        choices: ["$O(n)$", "$O(1)$", "$O(\\log n)$", "$O(n^2)$"], correct: 0,
        solution: S({
          c: "Reversing a singly-linked list requires visiting each node once and re-pointing its 'next' link — a single pass, $O(n)$, with $O(1)$ extra space.",
          s: [
            "<b>Step 1 — Match.</b> $O(n)$.",
            "<b>Step 2 — Distractor audit.</b> $O(1)$ is impossible (every node's pointer must change); $O(\\log n)$ and $O(n^2)$ misjudge the single pass."
          ],
          a: "$O(n)$.",
          v: "It's done in-place with three pointers (prev, curr, next) — $O(n)$ time, $O(1)$ space ✓, a favorite interview question. You can't beat $O(n)$ since every node's link must be touched."

        }), ref: "p.415" },
      { q: "Recursive descent parser used for:",
        choices: ["Recursive grammar parsing", "Iterative algorithms", "Memory management", "OS scheduling"], correct: 0,
        solution: S({
          c: "A recursive-descent parser is a top-down parser built from a set of mutually-recursive functions, one per grammar rule. It's used to parse structured, recursively-defined languages.",
          s: [
            "<b>Step 1 — Match.</b> Recursive grammar parsing.",
            "<b>Step 2 — Distractor audit.</b> It's not for iterative algorithms, memory management, or OS scheduling — it's a PARSING technique."
          ],
          a: "Parsing recursive grammars (top-down).",
          v: "Each grammar production becomes a function that calls others — naturally handling nested structure ✓. It's how many compilers, interpreters, and JSON/XML/expression parsers are built by hand (for grammars without left-recursion)."

        }), ref: "p.415" },
    ],
  };

  let added = 0;
  for (const ch of QUESTION_BANK.chapters) {
    if (P[ch.id]) {
      ch.questions.push(...P[ch.id]);
      added += P[ch.id].length;
    }
  }
  const total = QUESTION_BANK.chapters.reduce((s, c) => s + c.questions.length, 0);
  console.log(`Pack 5: +${added} → bank total ${total}`);
})();
