// FE Electrical Question Bank — Extension Pack 11
// Highly detailed step-by-step worked solutions, bilingual EN / VN
// Each problem: concept callout → numbered steps with substituted numbers →
// formula reasoning → final answer → verification check.
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") {
    console.warn("QUESTION_BANK or S helper missing — questions-extra11 not loaded.");
    return;
  }

  const EXTRAS = {
    // ====================== Ch 1: Mathematics ======================
    1: [
      { q: "Evaluate $\\displaystyle\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^{2}}$.",
        choices: ["$\\tfrac{1}{2}$", "$0$", "$1$", "Does not exist"],
        correct: 0,
        solution: S({
          c: "This is a $0/0$ indeterminate form: plugging $x = 0$ gives $\\frac{1-1}{0} = \\frac{0}{0}$, which is meaningless — so we need a tool: Taylor series (expand the function near 0) or L'Hospital's rule (differentiate top and bottom).",
          s: [
            "<b>Step 1 — Why direct substitution fails.</b> $\\cos 0 = 1$, so numerator $\\to 0$ and denominator $\\to 0$. The limit may still exist — it measures HOW FAST each side approaches zero.",
            "<b>Step 2 — Expand $\\cos x$ near 0 (Taylor).</b> $\\cos x = 1 - \\dfrac{x^{2}}{2} + \\dfrac{x^{4}}{24} - \\cdots$ — for tiny $x$, cosine dips below 1 like a parabola. So $1 - \\cos x = \\dfrac{x^{2}}{2} - \\dfrac{x^{4}}{24} + \\cdots$",
            "<b>Step 3 — Divide by $x^{2}$.</b> $\\dfrac{1-\\cos x}{x^{2}} = \\dfrac{1}{2} - \\dfrac{x^{2}}{24} + \\cdots$ As $x \\to 0$, every term with $x$ in it dies, leaving $\\dfrac12$.",
            "<b>Step 4 — Distractor audit.</b> 0 assumes the top vanishes 'faster' (it doesn't — same $x^{2}$ order); 1 misremembers the limit $\\frac{\\sin x}{x} \\to 1$; 'does not exist' confuses indeterminate (needs work) with undefined (no answer)."
          ],
          a: "$\\dfrac{1}{2}$",
          v: "L'Hospital cross-check (differentiate top & bottom): $\\dfrac{\\sin x}{2x}$ — still $0/0$, apply again → $\\dfrac{\\cos x}{2} \\to \\dfrac12$ ✓. Numeric check: $x = 0.1$: $(1-\\cos 0.1)/0.01 = 0.49958$ — already hugging 0.5 ✓."

        })
      },
      { q: "If $f(x,y) = x^{2}y + 3xy^{2}$, find $f_{xy}$ (mixed partial).",
        choices: ["$2x+6y$", "$2x+3y^{2}$", "$x^{2}+6xy$", "$6y+x^{2}$"],
        correct: 0,
        solution: S({
          c: "A partial derivative treats every OTHER variable as a frozen constant. $f_{xy}$ means: differentiate by $x$ first, then differentiate the result by $y$. (Clairaut's theorem: for smooth functions the order doesn't matter — $f_{xy} = f_{yx}$.)",
          s: [
            "<b>Step 1 — Differentiate by $x$ (treat $y$ as a number).</b> $\\dfrac{\\partial}{\\partial x}(x^{2}y) = 2xy$ (the $y$ rides along like a coefficient); $\\dfrac{\\partial}{\\partial x}(3xy^{2}) = 3y^{2}$. So $f_x = 2xy + 3y^{2}$.",
            "<b>Step 2 — Now differentiate $f_x$ by $y$ (treat $x$ as a number).</b> $\\dfrac{\\partial}{\\partial y}(2xy) = 2x$; $\\dfrac{\\partial}{\\partial y}(3y^{2}) = 6y$. So $f_{xy} = 2x + 6y$.",
            "<b>Step 3 — Distractor audit.</b> $2x + 3y^{2}$ stops halfway (differentiates the first term twice, the second not at all); $x^{2} + 6xy$ is $f_y$ — only ONE derivative taken; $6y + x^{2}$ mixes pieces of both."
          ],
          a: "$f_{xy} = 2x + 6y$",
          v: "Clairaut check — do it in the OTHER order: $f_y = x^{2} + 6xy$, then $\\partial/\\partial x$ gives $2x + 6y$ — identical ✓. This symmetry is also a great self-check on any exam: if the two orders disagree, you made an arithmetic slip."

        })
      },
      { q: "Solve $\\dfrac{dy}{dx} + 2y = 6e^{x}$ with $y(0)=0$ using an integrating factor.",
        choices: ["$y = 2(e^{x} - e^{-2x})$", "$y = 2e^{x} - 2$", "$y = 3e^{x}$", "$y = 6(1-e^{-2x})$"],
        correct: 0,
        solution: S({
          c: "Integrating-factor method: any first-order linear ODE $y' + P(x)y = Q(x)$ can be solved by multiplying through by $\\mu = e^{\\int P\\,dx}$ — chosen precisely so the left side collapses into the derivative of ONE product, $(\\mu y)'$.",
          s: [
            "<b>Step 1 — Match the standard form.</b> $y' + 2y = 6e^{x}$ → $P = 2$, $Q = 6e^{x}$.",
            "<b>Step 2 — Build the integrating factor.</b> $\\mu = e^{\\int 2\\,dx} = e^{2x}$.",
            "<b>Step 3 — Multiply and collapse.</b> $e^{2x}y' + 2e^{2x}y = 6e^{3x}$. The left side is EXACTLY $(e^{2x}y)'$ by the product rule — that was the whole point of choosing $\\mu$.",
            "<b>Step 4 — Integrate both sides.</b> $e^{2x}y = \\int 6e^{3x}dx = 2e^{3x} + C$, so $y = 2e^{x} + Ce^{-2x}$.",
            "<b>Step 5 — Apply the initial condition.</b> $y(0) = 2 + C = 0 \\Rightarrow C = -2$. Final: $y = 2(e^{x} - e^{-2x})$."
          ],
          a: "$y = 2(e^{x} - e^{-2x})$",
          v: "Substitute back: $y' = 2e^{x} + 4e^{-2x}$; then $y' + 2y = 2e^{x} + 4e^{-2x} + 4e^{x} - 4e^{-2x} = 6e^{x}$ ✓ and $y(0) = 0$ ✓. Structure check: $2e^{x}$ is the forced (particular) response, $-2e^{-2x}$ is the natural response that enforces the initial condition — every linear ODE answer splits this way."

        })
      },
      { q: "Find the Fourier-series fundamental angular frequency of $f(t) = 3\\cos(50\\pi t) + 5\\sin(100\\pi t)$.",
        choices: ["$50\\pi$ rad/s", "$100\\pi$ rad/s", "$25\\pi$ rad/s", "$\\pi$ rad/s"],
        correct: 0,
        solution: S({
          c: "The fundamental $\\omega_0$ is the largest angular frequency such that EVERY component in the signal is an integer multiple (harmonic) of it — mathematically, the GCD of the component frequencies. The signal then repeats with period $T_0 = 2\\pi/\\omega_0$.",
          s: [
            "<b>Step 1 — List the component frequencies.</b> $3\\cos(50\\pi t)$ → $\\omega_1 = 50\\pi$; $5\\sin(100\\pi t)$ → $\\omega_2 = 100\\pi$ rad/s.",
            "<b>Step 2 — Take the greatest common divisor.</b> $\\gcd(50\\pi, 100\\pi) = 50\\pi$: the first term is harmonic $n=1$, the second is $n=2$. Both fit.",
            "<b>Step 3 — Distractor audit.</b> $100\\pi$ fails — $50\\pi$ is NOT an integer multiple of $100\\pi$ (it would be harmonic ½); $25\\pi$ works mathematically but is not the LARGEST such frequency (it would make the components harmonics 2 and 4, wastefully); $\\pi$ same problem, worse."
          ],
          a: "$\\omega_0 = 50\\pi$ rad/s ($f_0 = 25$ Hz, $T_0 = 40$ ms).",
          v: "Periodicity check: shift $t$ by $T_0 = 2\\pi/50\\pi = 0.04$ s — first term advances by exactly $2\\pi$ (one full cycle), second by $4\\pi$ (two cycles) → signal unchanged ✓. Rule to keep: fundamental = GCD of frequencies; period = LCM of periods — the two statements are equivalent."

        })
      },
      { q: "Matrix $A$ has $\\det A = 6$. What is $\\det(2A)$ if $A$ is $3\\times 3$?",
        choices: ["48", "12", "24", "6"],
        correct: 0,
        solution: S({
          c: "Rule: $\\det(kA) = k^{n}\\det A$ for an $n\\times n$ matrix. Why $k^{n}$ and not $k$? Multiplying $A$ by $k$ scales EVERY one of the $n$ rows, and the determinant is linear in each row separately — so the factor $k$ comes out once per row.",
          s: [
            "<b>Step 1 — Identify $k$ and $n$.</b> $k = 2$; $A$ is $3\\times3$ so $n = 3$.",
            "<b>Step 2 — Apply.</b> $\\det(2A) = 2^{3}\\det A = 8 \\times 6 = 48$.",
            "<b>Step 3 — Distractor audit.</b> 12 uses $k^{1}$ (forgets it scales every row); 24 uses $k^{2}$ (off by one row); 6 forgets the scaling entirely."
          ],
          a: "$\\det(2A) = 48$",
          v: "Concrete mini-check with $2\\times2$: $\\det\\begin{bmatrix}2&0\\\\0&2\\end{bmatrix} = 4 = 2^{2}$ times $\\det I = 1$ ✓ — the identity matrix doubled has determinant $2^{n}$, not 2. Geometric meaning: determinant = volume scale factor, and doubling every edge of a 3-D box multiplies volume by 8 ✓."

        })
      },
      { q: "Find all $x$ in $[0, 2\\pi)$ satisfying $\\sin x = \\cos x$.",
        choices: ["$\\pi/4$ and $5\\pi/4$", "$\\pi/4$ only", "$\\pi/2$ and $3\\pi/2$", "$0$ and $\\pi$"],
        correct: 0,
        solution: S({
          c: "Divide both sides by $\\cos x$ (legal wherever $\\cos x \\neq 0$) to get a single-function equation: $\\tan x = 1$. Then use the periodicity of tangent (period $\\pi$, NOT $2\\pi$) to collect all solutions.",
          s: [
            "<b>Step 1 — Reduce to tangent.</b> $\\sin x = \\cos x \\Rightarrow \\tan x = 1$.",
            "<b>Step 2 — Principal solution.</b> $\\tan x = 1$ at $x = \\pi/4$ (45°, where sine and cosine are both $\\sqrt2/2$).",
            "<b>Step 3 — Add the period.</b> Tangent repeats every $\\pi$: next solution $= \\pi/4 + \\pi = 5\\pi/4$. Adding $\\pi$ again leaves $[0,2\\pi)$ → exactly two solutions.",
            "<b>Step 4 — Check the division was safe.</b> Points where $\\cos x = 0$ ($\\pi/2, 3\\pi/2$): there $\\sin x = \\pm1 \\ne 0$, so the original equation fails anyway — no solutions lost."
          ],
          a: "$x = \\pi/4$ and $5\\pi/4$.",
          v: "Plug in: $\\sin(5\\pi/4) = \\cos(5\\pi/4) = -\\sqrt2/2$ — equal (both negative) ✓. Geometric view: $\\sin = \\cos$ on the unit circle exactly where the point lies on the line $y = x$ — which crosses the circle twice ✓. Distractor $\\pi/4$ only forgets tangent's $\\pi$-period."

        })
      },
      { q: "Find the projection of $\\vec u = \\langle 3, 4 \\rangle$ onto $\\vec v = \\langle 1, 0 \\rangle$.",
        choices: ["$\\langle 3, 0 \\rangle$", "$\\langle 0, 4 \\rangle$", "$\\langle 3, 4 \\rangle$", "$\\langle 1, 0 \\rangle$"],
        correct: 0,
        solution: S({
          c: "The projection of $\\vec u$ onto $\\vec v$ is the 'shadow' of $\\vec u$ along $\\vec v$'s direction: $\\text{proj}_{\\vec v}\\vec u = \\dfrac{\\vec u\\cdot\\vec v}{|\\vec v|^{2}}\\,\\vec v$ — a SCALAR times $\\vec v$, so the result always points along $\\vec v$.",
          s: [
            "<b>Step 1 — Dot product (how aligned are they?).</b> $\\vec u\\cdot\\vec v = 3(1) + 4(0) = 3$.",
            "<b>Step 2 — Squared length of the target.</b> $|\\vec v|^{2} = 1^{2} + 0^{2} = 1$.",
            "<b>Step 3 — Assemble.</b> $\\text{proj} = \\dfrac{3}{1}\\langle1,0\\rangle = \\langle3,0\\rangle$.",
            "<b>Step 4 — Distractor audit.</b> $\\langle0,4\\rangle$ is the part of $\\vec u$ PERPENDICULAR to $\\vec v$ (the rejection); $\\langle3,4\\rangle$ is $\\vec u$ itself; $\\langle1,0\\rangle$ forgets to scale."
          ],
          a: "$\\langle 3, 0\\rangle$",
          v: "Geometric sanity: $\\vec v$ points along the x-axis, so the shadow of $(3,4)$ on the x-axis is just its x-part, $(3,0)$ ✓. Decomposition check: $\\vec u = \\underbrace{(3,0)}_{\\parallel \\vec v} + \\underbrace{(0,4)}_{\\perp \\vec v}$, and $(3,0)\\cdot(0,4) = 0$ ✓."

        })
      },
      { q: "If $z = 2(\\cos 30° + j\\sin 30°)$, find $z^{3}$.",
        choices: ["$8j$", "$8$", "$-8j$", "$8\\angle 90°$ both correct ($8j = 8\\angle 90°$)"],
        correct: 0,
        solution: S({
          c: "De Moivre's theorem: in polar form, powering a complex number is easy — $(r\\angle\\theta)^{n} = r^{n}\\angle(n\\theta)$. Raise the LENGTH to the power, MULTIPLY the angle.",
          s: [
            "<b>Step 1 — Read off polar form.</b> $z = 2(\\cos30° + j\\sin30°) = 2\\angle30°$: length 2, angle 30°.",
            "<b>Step 2 — Apply De Moivre with $n = 3$.</b> Length: $2^{3} = 8$. Angle: $3 \\times 30° = 90°$.",
            "<b>Step 3 — Convert back to rectangular.</b> $8\\angle90° = 8(\\cos90° + j\\sin90°) = 8(0 + j) = 8j$ — a vector of length 8 pointing straight up the imaginary axis."
          ],
          a: "$z^{3} = 8j$",
          v: "Brute-force check: $z = \\sqrt3 + j$; $z^{2} = 3 + 2\\sqrt3 j - 1 = 2 + 2\\sqrt3 j$; $z^{3} = (\\sqrt3+j)(2+2\\sqrt3 j) = 2\\sqrt3 + 6j + 2j - 2\\sqrt3 = 8j$ ✓ — De Moivre saves all that algebra. Note choice D ($8\\angle90°$) is the SAME number in polar dress; the exam wants the simplest listed form, A."

        })
      },
      { q: "Evaluate the line integral $\\int_C 2x\\,dx + 3y\\,dy$ along the straight line from $(0,0)$ to $(2,3)$.",
        choices: ["$35/2$", "$27/2$", "$13/2$", "$6$"],
        correct: 0,
        solution: S({
          c: "A line integral $\\int_C P\\,dx + Q\\,dy$ adds up little contributions along a path. Special case: if the integrand is an EXACT differential (it is the derivative of some potential function $F$), the answer depends only on the ENDPOINTS — the path itself is irrelevant.",
          s: [
            "<b>Step 1 — Test for exactness.</b> $2x\\,dx = d(x^{2})$ and $3y\\,dy = d\\!\\left(\\tfrac{3}{2}y^{2}\\right)$ — each term is already a perfect derivative, so $F(x,y) = x^{2} + \\tfrac{3}{2}y^{2}$ is a potential for the whole integrand.",
            "<b>Step 2 — Evaluate potential at the endpoints.</b> $F(2,3) = 2^{2} + \\tfrac{3}{2}(3)^{2} = 4 + \\tfrac{27}{2}$; $F(0,0) = 0$.",
            "<b>Step 3 — Subtract.</b> $\\int_C = F(2,3) - F(0,0) = 4 + \\dfrac{27}{2} = \\dfrac{8 + 27}{2} = \\dfrac{35}{2}$.",
            "<b>Step 4 — Distractor audit.</b> $27/2$ drops the $x^{2}$ term; $13/2$ comes from wrongly using $\\tfrac12 y^{2}$ (forgot the 3); 6 multiplies the endpoint coordinates."
          ],
          a: "$\\dfrac{35}{2} = 17.5$",
          v: "Path check (must agree since exact): parametrize $x = 2t, y = 3t$, $t \\in [0,1]$: $\\int_0^1[2(2t)(2) + 3(3t)(3)]dt = \\int_0^1(8t + 27t)\\,dt = \\dfrac{35}{2}$ ✓ — same answer through the explicit route, confirming path-independence."

        })
      },
      { q: "Solve $y'' + 2y' + 5y = 0$, where $\\omega_n$ and $\\zeta$ characterize an underdamped system.",
        choices: ["$\\omega_n = \\sqrt{5},\\ \\zeta = 1/\\sqrt{5}$", "$\\omega_n = 2,\\ \\zeta = 0.5$", "$\\omega_n = 5,\\ \\zeta = 0.2$", "Critically damped"],
        correct: 0,
        solution: S({
          c: "Match the ODE against the standard 2nd-order template $y'' + 2\\zeta\\omega_n y' + \\omega_n^{2}y = 0$: the LAST coefficient gives $\\omega_n^{2}$ (natural frequency squared), the MIDDLE one gives $2\\zeta\\omega_n$ (damping).",
          s: [
            "<b>Step 1 — Match the constant term.</b> $\\omega_n^{2} = 5 \\Rightarrow \\omega_n = \\sqrt5 \\approx 2.236$ rad/s.",
            "<b>Step 2 — Match the middle term.</b> $2\\zeta\\omega_n = 2 \\Rightarrow \\zeta = \\dfrac{1}{\\omega_n} = \\dfrac{1}{\\sqrt5} \\approx 0.447$.",
            "<b>Step 3 — Classify.</b> $0 < \\zeta < 1$ → underdamped: the response is a sinusoid inside a decaying envelope. ($\\zeta = 1$ would be critical, $\\zeta > 1$ overdamped — no oscillation in either.)",
            "<b>Step 4 — Distractor audit.</b> $(\\omega_n, \\zeta) = (2, 0.5)$ reads the middle coefficient as $\\omega_n$; $(5, 0.2)$ forgets the square root; 'critically damped' would need $\\zeta = 1$ exactly."
          ],
          a: "$\\omega_n = \\sqrt5$ rad/s, $\\zeta = 1/\\sqrt5 \\approx 0.447$ — underdamped.",
          v: "Root check: characteristic equation $s^{2} + 2s + 5 = 0$ → $s = -1 \\pm j2$. Real part $-\\zeta\\omega_n = -1$ ✓; imaginary part $\\omega_d = \\omega_n\\sqrt{1-\\zeta^{2}} = \\sqrt5\\sqrt{4/5} = 2$ ✓ — both pieces of the root match the extracted parameters."

        })
      }
    ],

    // ====================== Ch 2: Probability & Statistics ======================
    2: [
      { q: "A fair die is rolled twice. Probability the sum is exactly 8?",
        choices: ["$5/36$", "$1/6$", "$1/9$", "$8/36$"],
        correct: 0,
        solution: S({
          c: "Sample space: two distinguishable dice give $6 \\times 6 = 36$ equally likely ORDERED outcomes, each with probability $1/36$. Probability = (favorable count)/36.",
          s: [
            "<b>Step 1 — List the ordered pairs summing to 8.</b> (2,6), (3,5), (4,4), (5,3), (6,2) — note (3,5) and (5,3) count separately because die #1 and die #2 are distinct, but (4,4) appears once.",
            "<b>Step 2 — Count and divide.</b> 5 favorable / 36 total $= 5/36 \\approx 0.139$.",
            "<b>Step 3 — Distractor audit.</b> $1/6 = 6/36$ is the count for sum = 7 (the most likely sum); $8/36$ misreads 'sum 8' as '8 ways'; $1/9 = 4/36$ undercounts by missing (4,4)... actually by missing one ordered pair."
          ],
          a: "$5/36$",
          v: "Pattern check: the number of ways to roll sum $s$ rises 1,2,3,4,5,6 for $s = 2..7$ then falls 5,4,3,2,1 for $s = 8..12$ — sum 8 sits one step past the peak with 5 ways ✓; total $36/36 = 1$ ✓."

        })
      },
      { q: "Continuous random variable $X \\sim \\mathcal{N}(\\mu = 50, \\sigma = 5)$. Find $P(X > 60)$.",
        choices: ["$\\approx 2.28\\%$", "$\\approx 5\\%$", "$\\approx 16\\%$", "$\\approx 0.13\\%$"],
        correct: 0,
        solution: S({
          c: "Standardize: any normal variable converts to the STANDARD normal $Z$ (mean 0, SD 1) via $Z = (X-\\mu)/\\sigma$ — 'how many standard deviations above the mean?'. Then read the tail from the Z-table.",
          s: [
            "<b>Step 1 — Compute the z-score.</b> $Z = \\dfrac{60 - 50}{5} = 2$ — the value 60 sits exactly 2 SDs above the mean.",
            "<b>Step 2 — Look up the cumulative value.</b> $\\Phi(2) = 0.9772$ means 97.72% of outcomes fall BELOW 60.",
            "<b>Step 3 — Take the upper tail.</b> $P(X > 60) = 1 - 0.9772 = 0.0228 = 2.28\\%$.",
            "<b>Step 4 — Distractor audit.</b> 16% is the tail at 1 SD; 0.13% is the tail at 3 SD; 5% loosely quotes the TWO-sided 2σ rule — the choices are the classic z-values shuffled."
          ],
          a: "$P(X>60) \\approx 2.28\\%$",
          v: "Empirical-rule check (68-95-99.7): ±2σ holds ~95%, leaving ~5% split between two tails → ~2.5% each — our exact 2.28% sits right there ✓."

        })
      },
      { q: "Sample $\\{4, 6, 8, 10, 12\\}$. Sample standard deviation $s$ equals:",
        choices: ["$\\sqrt{10} \\approx 3.16$", "$\\sqrt{8} \\approx 2.83$", "$2$", "$\\sqrt{40}$"],
        correct: 0,
        solution: S({
          c: "SAMPLE standard deviation divides by $n-1$ (not $n$): $s = \\sqrt{\\frac{1}{n-1}\\sum(x_i - \\bar x)^{2}}$. Why $n-1$? Using the SAMPLE mean $\\bar x$ (instead of the unknown true mean) makes deviations artificially small; dividing by $n-1$ corrects the bias.",
          s: [
            "<b>Step 1 — Mean.</b> $\\bar x = (4+6+8+10+12)/5 = 40/5 = 8$.",
            "<b>Step 2 — Deviations and squares.</b> $-4, -2, 0, 2, 4$ → squared: $16, 4, 0, 4, 16$ → sum $= 40$.",
            "<b>Step 3 — Divide by $n-1 = 4$.</b> $s^{2} = 40/4 = 10$.",
            "<b>Step 4 — Square root.</b> $s = \\sqrt{10} \\approx 3.16$."
          ],
          a: "$s = \\sqrt{10} \\approx 3.16$",
          v: "The planted twin: dividing by $n = 5$ gives the POPULATION formula $\\sigma = \\sqrt 8 \\approx 2.83$ — distractor B exactly. The FE will tell you 'sample' or 'population'; the word 'sample' here forces $n-1$ ✓. Scale check: data span ±4 around the mean; an SD of ~3 is plausible ✓."

        })
      },
      { q: "Box contains 4 red and 6 blue balls. Draw 2 without replacement. Probability both red?",
        choices: ["$2/15$", "$4/25$", "$1/5$", "$3/10$"],
        correct: 0,
        solution: S({
          c: "WITHOUT replacement means the second draw's probabilities change after the first: use the chain rule $P(A \\text{ then } B) = P(A)\\cdot P(B\\,|\\,A)$.",
          s: [
            "<b>Step 1 — First draw.</b> $P(\\text{red}_1) = 4/10 = 2/5$ (4 reds among 10 balls).",
            "<b>Step 2 — Second draw, GIVEN the first was red.</b> Now 3 reds remain among 9 balls: $P(\\text{red}_2|\\text{red}_1) = 3/9 = 1/3$.",
            "<b>Step 3 — Multiply.</b> $P(\\text{both red}) = \\dfrac{2}{5}\\times\\dfrac{1}{3} = \\dfrac{2}{15} \\approx 0.133$.",
            "<b>Step 4 — Distractor audit.</b> $4/25 = (2/5)^{2}$ is the WITH-replacement answer (forgetting the ball stays out); $3/10$ and $1/5$ are partial fractions from the setup."
          ],
          a: "$2/15$",
          v: "Combinatorial cross-check (order-free): $\\dbinom{4}{2}\\Big/\\dbinom{10}{2} = \\dfrac{6}{45} = \\dfrac{2}{15}$ ✓ — choosing 2 of 4 reds out of all ways to choose 2 of 10. Two different mental models, one answer — the best kind of verification."

        })
      },
      { q: "Manufacturing defect rate is 2%. In a batch of 50 units, expected number of defects?",
        choices: ["$1$", "$2$", "$5$", "$0.1$"],
        correct: 0,
        solution: S({
          c: "Each unit is an independent yes/no trial (defective or not) — a binomial setting. Its expected count has the simplest formula in probability: $E[X] = np$.",
          s: [
            "<b>Step 1 — Identify parameters.</b> $n = 50$ units, $p = 0.02$ defect probability each.",
            "<b>Step 2 — Multiply.</b> $E[X] = 50 \\times 0.02 = 1$ defect expected per batch.",
            "<b>Step 3 — Distractor audit.</b> 2 confuses the 2% with a count; 5 misplaces the decimal ($50\\times0.1$); 0.1 misplaces it the other way."
          ],
          a: "$E[X] = 1$",
          v: "Interpretation guard: 'expected 1' does NOT mean every batch has exactly 1 — $P(X=0) = 0.98^{50} \\approx 36\\%$ of batches are defect-free. Variance bonus: $np(1-p) = 0.98$, so SD ≈ 0.99 — mean ≈ variance, the signature of a low-$p$ binomial (it is nearly Poisson with $\\lambda = 1$) ✓."

        })
      },
      { q: "Poisson process averages 3 calls/minute. Probability of exactly 5 calls in one minute?",
        choices: ["$\\dfrac{3^{5}e^{-3}}{5!} \\approx 0.1008$", "$0.05$", "$0.20$", "$0.84$"],
        correct: 0,
        solution: S({
          c: "The Poisson distribution gives probabilities for the COUNT of random arrivals in a window when arrivals are independent and average $\\lambda$ per window: $P(X=k) = \\dfrac{\\lambda^{k}e^{-\\lambda}}{k!}$.",
          s: [
            "<b>Step 1 — Identify $\\lambda$ and $k$.</b> Average rate $\\lambda = 3$ calls/min; we want exactly $k = 5$ in one minute.",
            "<b>Step 2 — Plug into the PMF.</b> $P(X=5) = \\dfrac{3^{5}e^{-3}}{5!} = \\dfrac{243 \\times 0.0498}{120}$.",
            "<b>Step 3 — Evaluate.</b> $= \\dfrac{12.10}{120} \\approx 0.1008$ — about a 10% chance.",
            "<b>Step 4 — Why each ingredient is there.</b> $\\lambda^{k}$ favors counts near the average, $k!$ punishes large counts, $e^{-\\lambda}$ normalizes the whole distribution to sum to 1."
          ],
          a: "$P(X=5) \\approx 0.1008$",
          v: "Shape check: the most likely count is $k = 3$ (= $\\lambda$), with $P(X=3) \\approx 0.224$; asking for 5 — two above the peak — should be noticeably less likely, and 0.10 < 0.22 ✓. Neighbor check: $P(X=4) \\approx 0.168$ sits between them ✓."

        })
      },
      { q: "Linear regression yields $r = 0.85$. What fraction of variance in $y$ is explained by $x$?",
        choices: ["$72.25\\%$", "$85\\%$", "$50\\%$", "$15\\%$"],
        correct: 0,
        solution: S({
          c: "The correlation $r$ measures how tightly points hug a line; its SQUARE $r^{2}$ (coefficient of determination) is the fraction of the variance in $y$ that the regression on $x$ explains.",
          s: [
            "<b>Step 1 — Square the correlation.</b> $r^{2} = (0.85)^{2} = 0.7225$.",
            "<b>Step 2 — State as percentage.</b> 72.25% of the variability in $y$ is accounted for by $x$; the remaining 27.75% is residual scatter (noise, other factors).",
            "<b>Step 3 — Distractor audit.</b> 85% reports $r$ itself — the single most common confusion; 15% is $1-r$ (meaningless); 50% is a guess."
          ],
          a: "$r^{2} = 72.25\\%$",
          v: "Boundary anchors: $r = \\pm1$ → $r^{2} = 100\\%$ (perfect line, zero residual); $r = 0$ → 0% explained ✓. Caution worth remembering: high $r^{2}$ shows association, not causation, and says nothing about whether the LINEAR form is right — always plot residuals."

        })
      },
      { q: "Conditional probability: $P(A) = 0.4$, $P(B) = 0.5$, $P(A \\cap B) = 0.3$. Find $P(A\\,|\\,B)$.",
        choices: ["$0.6$", "$0.3$", "$0.75$", "$0.12$"],
        correct: 0,
        solution: S({
          c: "Conditional probability re-scales the world to cases where $B$ happened: $P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}$ — 'of the times $B$ occurs, what fraction also has $A$?'.",
          s: [
            "<b>Step 1 — Plug in.</b> $P(A|B) = \\dfrac{0.3}{0.5} = 0.6$.",
            "<b>Step 2 — Read it.</b> $B$ happens 50% of the time; in 30% (of all trials) BOTH happen — so within $B$'s world, $A$ shows up $0.3/0.5 = 60\\%$ of the time.",
            "<b>Step 3 — Distractor audit.</b> 0.3 reports the joint, unscaled; 0.75 is $P(B|A) = 0.3/0.4$ — conditioning in the WRONG direction; 0.12 is $P(A)P(B)$, which would only equal the joint if the events were independent (they're not: $0.12 \\ne 0.3$)."
          ],
          a: "$P(A|B) = 0.6$",
          v: "Direction matters: $P(A|B) = 0.6$ but $P(B|A) = 0.75$ — not equal, and they never have to be (that asymmetry IS Bayes' theorem). Dependence check: $P(A|B) = 0.6 > P(A) = 0.4$ — knowing $B$ happened makes $A$ MORE likely; the events are positively dependent ✓."

        })
      },
      { q: "If two events are independent and $P(A) = 0.3,\\ P(B) = 0.4$, find $P(A \\cup B)$.",
        choices: ["$0.58$", "$0.70$", "$0.12$", "$0.42$"],
        correct: 0,
        solution: S({
          c: "Two tools combine: independence gives the overlap ($P(A\\cap B) = P(A)P(B)$), and inclusion-exclusion assembles the union: $P(A\\cup B) = P(A) + P(B) - P(A\\cap B)$ — subtract the overlap so it isn't counted twice.",
          s: [
            "<b>Step 1 — Overlap from independence.</b> $P(A\\cap B) = 0.3 \\times 0.4 = 0.12$.",
            "<b>Step 2 — Inclusion-exclusion.</b> $P(A\\cup B) = 0.3 + 0.4 - 0.12 = 0.58$.",
            "<b>Step 3 — Distractor audit.</b> 0.70 just adds (double-counts the overlap — only valid for MUTUALLY EXCLUSIVE events, the opposite of independent ones); 0.12 reports the intersection; 0.42 is $0.7\\times0.6$ numerology."
          ],
          a: "$P(A\\cup B) = 0.58$",
          v: "Complement route (often faster): $P(\\text{neither}) = P(\\bar A)P(\\bar B) = 0.7\\times0.6 = 0.42$, so $P(A\\cup B) = 1 - 0.42 = 0.58$ ✓ — same answer by a totally different path. Bounds: must lie between $\\max(0.3,0.4) = 0.4$ and $0.3+0.4 = 0.7$ ✓."

        })
      },
      { q: "A 95% confidence interval is reported as $(48, 52)$ for a mean. What does this mean?",
        choices: [
          "If we repeated the procedure many times, 95% of such intervals would contain the true mean.",
          "There is a 95% probability the true mean is in $(48, 52)$.",
          "95% of the data lie between 48 and 52.",
          "The sample mean is exactly 50 with 95% certainty."
        ],
        correct: 0,
        solution: S({
          c: "What a confidence interval really claims: the PROCEDURE, repeated over many samples, produces intervals that capture the true mean 95% of the time. The true mean $\\mu$ is a fixed (unknown) number — it does not 'have a probability' of being anywhere.",
          s: [
            "<b>Step 1 — Identify what is random.</b> $\\mu$ is fixed; the DATA (and therefore the interval endpoints 48 and 52) are random. A new sample gives a different interval.",
            "<b>Step 2 — State the guarantee correctly.</b> 95% of intervals built this way (across hypothetical repeated samples) contain $\\mu$. THIS particular interval either contains it or not — we just don't know which.",
            "<b>Step 3 — Demolish the distractors.</b> (B) '95% probability $\\mu$ is in (48,52)' treats $\\mu$ as random — that is a Bayesian CREDIBLE interval, a different framework; (C) confuses a CI for the MEAN with a range containing 95% of individual DATA points (a prediction/tolerance interval, typically much wider); (D) invents certainty about the point estimate."
          ],
          a: "Choice A — the long-run capture-rate (frequentist) interpretation.",
          v: "Width intuition that exposes (C): a CI for the mean shrinks like $s/\\sqrt n$ — with $n$ large enough it can be far narrower than the data spread, so it cannot possibly contain 95% of the data ✓. The FE exam tests exactly this A-vs-B distinction; when in doubt, pick the sentence about REPEATED procedures."

        })
      }
    ],

    // ====================== Ch 3: Ethics & Professional Practice ======================
    3: [
      { q: "An engineer is offered a free vacation by a vendor whose products the engineer recommends to clients. According to NSPE Code, the engineer should:",
        choices: [
          "Decline the gift to avoid conflict of interest.",
          "Accept since it’s not a cash payment.",
          "Accept but disclose only to the vendor.",
          "Accept if the client doesn’t ask."
        ],
        correct: 0,
        solution: S({
          c: "Background for every NSPE question: the Code of Ethics is organized as Fundamental Canons (I), Rules of Practice (II), and Professional Obligations (III). Here §III.5 applies: engineers shall not accept gifts of more than nominal value from parties who benefit from their professional decisions — because a paid-for recommendation is no longer an engineering judgment.",
          s: [
            "<b>Step 1 — Name the relationship.</b> The engineer RECOMMENDS this vendor's products to clients. Any gift from that vendor ties the engineer's personal benefit to the recommendation — a conflict of interest by definition (a personal interest that could bias professional judgment).",
            "<b>Step 2 — Test the gift's size.</b> A coffee mug is nominal; a vacation is substantial value. Substantial gifts from interested parties are prohibited outright — not merely 'disclose and continue'.",
            "<b>Step 3 — Eliminate the distractors.</b> 'Not cash' changes nothing — value is value; disclosing only to the VENDOR tells the one party who already knows (the client is the deceived party); 'accept if the client doesn't ask' is concealment, which compounds the violation."
          ],
          a: "Decline the gift.",
          v: "Practical litmus test (works on every gift question): would your client still trust your recommendation if they knew about the gift? If the answer is no — or even 'maybe not' — decline. The Code protects the APPEARANCE of integrity as much as the fact of it, because public trust is the profession's asset."

        })
      },
      { q: "An engineer-of-record discovers a design flaw after construction has started. The flaw could be a safety hazard. The engineer should:",
        choices: [
          "Notify the client and authorities; halt unsafe work immediately.",
          "Wait until construction is complete to assess fully.",
          "Notify only if asked.",
          "Quietly redesign without disclosure to avoid blame."
        ],
        correct: 0,
        solution: S({
          c: "Canon I.1 — the FIRST and highest rule of the entire code: engineers shall hold paramount the safety, health, and welfare of the public. 'Paramount' means it outranks every other duty: to client, to employer, to self, to schedule, to budget.",
          s: [
            "<b>Step 1 — Classify the situation.</b> A known design flaw + active construction + potential safety hazard = the exact scenario Canon I.1 exists for. Time matters: every day of construction builds more of the flawed design.",
            "<b>Step 2 — Apply the required actions in order.</b> (1) Notify the client/owner immediately, in writing; (2) stop work on the affected (unsafe) portions; (3) if the client will not act, notify the building authority — the engineer's duty does not end with telling the client.",
            "<b>Step 3 — Eliminate the distractors.</b> 'Wait until complete' lets the hazard get built; 'notify only if asked' inverts the duty (the engineer must come forward); 'quietly redesign without disclosure' hides a safety event from the people legally entitled to know — it violates §III.3 (deception) on top of I.1."
          ],
          a: "Notify the client and authorities; halt unsafe work immediately.",
          v: "Memorize the obligation hierarchy — it answers half of all FE ethics questions: PUBLIC > client > employer > self. Real-world anchor: the Citicorp Center engineer (1978) who discovered his own building's wind-bracing flaw, disclosed it, and ran emergency retrofits is the profession's model of this duty done right."

        })
      },
      { q: "May an EE who is licensed PE sign and seal mechanical drawings for an HVAC system?",
        choices: [
          "No — only practice in areas of demonstrated competence.",
          "Yes — a PE may sign anything within the engineering profession.",
          "Yes — if the project is small.",
          "Yes — with another engineer’s informal review."
        ],
        correct: 0,
        solution: S({
          c: "A PE license is NOT a license to practice all engineering. §II.2.a: perform services only in areas of your competence — your education and experience in that SPECIFIC field. The seal tells the public 'a qualified expert verified this'; sealing outside your field makes that statement false.",
          s: [
            "<b>Step 1 — Compare the field to the qualification.</b> HVAC design lives on thermodynamics, refrigeration cycles, psychrometrics, duct/fluid design — a mechanical engineering body of knowledge an EE typically has never studied or practiced.",
            "<b>Step 2 — Apply the competence rule.</b> No demonstrated competence → may not seal, period. The legal mechanism agrees: state boards discipline 'practice outside area of competence' even when the license itself is valid.",
            "<b>Step 3 — Eliminate the distractors.</b> 'A PE may sign anything' confuses license SCOPE with license EXISTENCE; 'small project' — size does not create expertise; 'informal review' — responsibility cannot be borrowed; the mechanical PE who actually reviewed it must be the one to seal it."
          ],
          a: "No — a PE may only practice (and seal) within demonstrated competence.",
          v: "The rule cuts within disciplines too: a power-systems PE should not seal a complex RF/microwave design either. Correct staffing: each discipline's drawings sealed by that discipline's PE — multi-discipline projects routinely carry several seals ✓."

        })
      },
      { q: "An engineer’s employer asks them to certify compliance with a code, but the engineer believes the design does not comply. The engineer should:",
        choices: [
          "Refuse to certify; document concerns in writing.",
          "Certify with a private mental reservation.",
          "Certify because the employer takes responsibility.",
          "Resign immediately and don’t inform anyone."
        ],
        correct: 0,
        solution: S({
          c: "Two rules converge: §II.3 — issue public statements only in an objective and truthful manner; §III.3.b — do not falsify or misrepresent. A certification IS a formal factual statement: signing it while believing it false is professional fraud, regardless of who asked.",
          s: [
            "<b>Step 1 — See what a certification is.</b> 'I certify compliance' = a professional's sworn factual claim that the design meets the code. Believing it does NOT comply while signing makes the statement knowingly false.",
            "<b>Step 2 — Take the required actions.</b> Refuse to certify; put the technical concerns in writing to the employer (creates the record, forces a real engineering resolution); escalate if pressured — ultimately to the licensing board if the employer insists on a false certification.",
            "<b>Step 3 — Eliminate the distractors.</b> 'Private mental reservation' — the signature is what the public sees; reservations don't transmit; 'employer takes responsibility' — they legally CANNOT take over your professional truthfulness (the license and the lie are both personally yours); 'resign and tell no one' abandons the public-safety dimension and the documentation duty."
          ],
          a: "Refuse to certify; document the concerns in writing.",
          v: "Self-protection bonus: the written record is also the engineer's legal shield if the dispute surfaces later — ethics and self-interest point the same way here. Pattern to remember: an engineer's signature/seal/certification can never be delegated, purchased, or excused by orders from above."

        })
      },
      { q: "Two competing firms are bidding on a project. Engineer A learns confidential bid details from a former employer who is one of the bidders. What is the ethical action?",
        choices: [
          "Recuse from the project entirely.",
          "Use the information to win the bid.",
          "Share with their current employer only.",
          "Pretend they don’t know."
        ],
        correct: 0,
        solution: S({
          c: "§III.4: engineers shall not use confidential information from a former employer or client for anyone's advantage. Bid amounts during active procurement are among the most sensitive secrets a firm has — knowing a rival's number lets you under-bid by a dollar.",
          s: [
            "<b>Step 1 — Recognize the taint.</b> The engineer KNOWS the former employer's confidential bid. That knowledge cannot be un-known, and any participation in the competing bid is now contaminated — even unconscious use is use.",
            "<b>Step 2 — Apply the only clean remedy.</b> Recuse: step out of the project/bid entirely, and tell the current employer WHY only in terms that don't leak the secret ('I have a confidentiality conflict from prior employment').",
            "<b>Step 3 — Eliminate the distractors.</b> Using the info to win = straightforward misappropriation (and likely illegal bid-rigging); sharing with the current employer just spreads the breach to more people; 'pretend not to know' fails because bias operates anyway — recusal exists precisely because pretending doesn't work."
          ],
          a: "Recuse from the project entirely.",
          v: "Industry practice mirrors the rule: firms build 'ethical walls' and screen new hires off matters involving their former employers — institutionalized recusal. Time note: the duty survives indefinitely; it does not expire when the engineer changes jobs ✓."

        })
      },
      { q: "Per most state laws and the NSPE Code, who is ultimately responsible for the technical accuracy of sealed engineering documents?",
        choices: [
          "The engineer who seals the documents.",
          "The contractor who builds the project.",
          "The owner who commissions the work.",
          "The firm’s legal counsel."
        ],
        correct: 0,
        solution: S({
          c: "The seal is a personal professional act, not a corporate one. Licensure law in every state ties responsibility for sealed work to the individual licensee who sealed it — the concept is called 'responsible charge': direct control and personal supervision of the work.",
          s: [
            "<b>Step 1 — What sealing asserts.</b> 'I prepared this work, or it was prepared under my responsible charge, and I take professional responsibility for its technical content.'",
            "<b>Step 2 — Trace the accountability.</b> If the design fails: the state board disciplines the SEALING engineer (license suspension/revocation); civil liability also lands on the engineer/firm — but the professional accountability never transfers to contractor, owner, or lawyers.",
            "<b>Step 3 — Eliminate the distractors.</b> The contractor is responsible for BUILDING per the documents (means and methods), not for their engineering content; the owner commissions and pays but exercises no engineering judgment; legal counsel advises on law, not on load paths."
          ],
          a: "The engineer who seals the documents.",
          v: "Corollary the FE loves: a junior engineer may draft every sheet, but the sealing PE answers for all of it — which is why 'plan stamping' (sealing work you never supervised) is among the most-disciplined violations in every state. Responsible charge requires the ABILITY to answer for the work, not just the willingness ✓."

        })
      },
      { q: "Engineer A is paid by both the client and a contractor on the same project, without disclosing to either party. This is:",
        choices: [
          "A conflict of interest violation — must disclose to all parties.",
          "Acceptable if both payments are reasonable.",
          "Acceptable as long as work quality is high.",
          "Encouraged because it builds relationships."
        ],
        correct: 0,
        solution: S({
          c: "§II.4.a-b: disclose all known or potential conflicts of interest in writing, and do not accept compensation from more than one party for services on the same project — unless the circumstances are fully disclosed and agreed to by ALL interested parties.",
          s: [
            "<b>Step 1 — See why dual pay is a conflict.</b> Client and contractor have structurally opposed interests on the same project (cost, schedule, change orders, quality acceptance). An engineer paid by both serves two masters whose interests collide — judgment for one is bias against the other.",
            "<b>Step 2 — Note the aggravator: secrecy.</b> The payments are undisclosed. Even the narrow exception (dual compensation WITH informed written consent of everyone) is unavailable — concealment converts a manageable conflict into a violation.",
            "<b>Step 3 — Eliminate the distractors.</b> 'Reasonable amounts' — size doesn't cure divided loyalty; 'work quality is high' — the harm is to trust and fair dealing, not necessarily to the calculations; 'builds relationships' mistakes the corruption mechanism for a feature."
          ],
          a: "Conflict of interest — written disclosure to all parties (and consent) is mandatory; hidden dual pay is prohibited.",
          v: "Generalization worth keeping: COMPENSATION follows DISCLOSURE in the code — every fee, commission, or benefit connected to your professional role must be visible to the parties it could influence. The same logic governs academic peer review and government procurement ✓."

        })
      },
      { q: "An engineer is asked to advertise their services. Which is ethical per NSPE §III.3?",
        choices: [
          "Factual statements about services, qualifications, and experience.",
          "Exaggerated claims about ‘guaranteed best results’.",
          "Comparisons that disparage other engineers personally.",
          "Anonymous testimonials with no verification."
        ],
        correct: 0,
        solution: S({
          c: "§III.3: avoid all conduct or practice that deceives the public — advertising included. The test for engineering ads is simple: factual, verifiable, dignified. Engineers may inform; they may not puff, guarantee, or disparage.",
          s: [
            "<b>Step 1 — Apply the test to each choice.</b> Factual statements of services, qualifications, and experience: verifiable facts → permitted (clients NEED this to select competent help).",
            "<b>Step 2 — Why the others fail.</b> 'Guaranteed best results' promises an OUTCOME — engineering work manages uncertainty and cannot honestly guarantee results (deceptive); personal disparagement of other engineers violates §III.7 (do not injure others' professional reputation maliciously); anonymous unverifiable testimonials fail the truthfulness test by construction.",
            "<b>Step 3 — The principle behind the rule.</b> Engineering services are 'credence goods' — clients cannot easily judge quality before (or even after) buying. Truthful advertising is the only kind that doesn't exploit that asymmetry."
          ],
          a: "Factual statements about services, qualifications, and experience.",
          v: "Quick screen for any ad-ethics question: could every sentence be proven true from records? 'We designed 40 MW of solar interconnections' — provable ✓. 'We are the best in the state' — not provable ✗. Provable wins."

        })
      },
      { q: "An engineer signs a contract for personal services and then realizes they will be too busy to perform. Ethically, they should:",
        choices: [
          "Notify the client promptly and arrange alternate help or release.",
          "Subcontract without notifying the client.",
          "Perform poorly and hope client doesn’t notice.",
          "Ignore the contract."
        ],
        correct: 0,
        solution: S({
          c: "Honesty and fair dealing (§II.4 family, §III.6... the fair-dealing obligations) extend to BUSINESS conduct, not just calculations: an engineer who cannot deliver what they promised must say so — promptly, to the person owed the promise.",
          s: [
            "<b>Step 1 — Identify the duty the moment capacity changes.</b> The client contracted for THIS engineer's personal services. Discovering you cannot perform creates an immediate duty to inform — silence converts a scheduling problem into a deception.",
            "<b>Step 2 — Offer remedies in good faith.</b> Recommend qualified colleagues, renegotiate scope/schedule, or release the client from the contract. The client — the injured party — chooses among them.",
            "<b>Step 3 — Eliminate the distractors.</b> Subcontracting WITHOUT consent substitutes a different (unvetted) engineer for the one the client chose — most service contracts expressly forbid it; performing poorly harms the client and the profession; ignoring the contract is breach plus concealment."
          ],
          a: "Notify the client promptly and arrange alternate help or release.",
          v: "Pattern across the whole ethics chapter: when circumstances change against you, the ethical move is always PROMPT + WRITTEN + TO THE AFFECTED PARTY. Late disclosure is the second-most-common aggravator in board discipline cases, right after no disclosure ✓."

        })
      },
      { q: "Public safety vs. client confidentiality: which generally wins under NSPE Code?",
        choices: [
          "Public safety always takes precedence.",
          "Client confidentiality, since clients pay.",
          "It depends on the dollar value involved.",
          "Whichever the engineer’s manager prefers."
        ],
        correct: 0,
        solution: S({
          c: "The canons are ORDERED on purpose. Canon I.1 (public safety, health, welfare — 'paramount') sits above the duties of faithful agency and confidentiality owed to clients (II.1.c, III.4). When they collide head-on, safety wins — every time.",
          s: [
            "<b>Step 1 — Understand 'paramount'.</b> The word means 'above all others' — the code's authors chose it to settle exactly this conflict in advance. Confidentiality is a REAL duty, but it is subordinate.",
            "<b>Step 2 — Apply the escalation discipline.</b> Winning doesn't mean leaking first: notify the client of the hazard and the intent to disclose; give them the chance to fix or report it themselves; THEN go to the authorities if they refuse. Ordered escalation honors both duties as far as possible.",
            "<b>Step 3 — Eliminate the distractors.</b> 'Clients pay' — payment buys services, not silence about hazards; 'dollar value' — the code has no monetary threshold on human safety; 'manager's preference' — ethical duties are personal to the licensee and cannot be reassigned by org chart."
          ],
          a: "Public safety always takes precedence.",
          v: "License-level check: state boards can revoke a PE license for FAILING to report a known public hazard — the law enforces the same priority the code declares. The hierarchy to memorize: PUBLIC > client > employer > self; expect 2-3 FE questions to reduce to exactly this line ✓."

        })
      }
    ],

    // ====================== Ch 4: Engineering Economics ======================
    4: [
      { q: "Present worth of \\$1,000 received in 5 years at 8% annual interest, compounded annually.",
        choices: ["\\$680.58", "\\$1,469.33", "\\$925.93", "\\$1,000"],
        correct: 0,
        solution: S({
          c: "Time value of money — the foundation of this chapter: a dollar later is worth less than a dollar now, because money in hand can earn interest. 'Present worth' asks: how much must I invest TODAY at rate $i$ to grow into $F$ after $n$ years? $P = F(1+i)^{-n}$.",
          s: [
            "<b>Step 1 — Identify the pieces.</b> $F = \\$1{,}000$; $i = 8\\% = 0.08$/yr; $n = 5$ years.",
            "<b>Step 2 — Growth factor.</b> $(1.08)^{5} = 1.4693$ — a dollar grows ~47% in 5 years at 8%.",
            "<b>Step 3 — Discount (divide).</b> $P = 1000/1.4693 = \\$680.58$.",
            "<b>Step 4 — Distractor audit.</b> \\$1,469.33 goes the WRONG direction (that is the future value of \\$1,000); \\$925.93 discounts only one year; \\$1,000 ignores time value."
          ],
          a: "$P = \\$680.58$",
          v: "Round trip: $680.58 \\times 1.4693 = \\$1{,}000$ ✓. Rule-of-72 anchor: at 8% money doubles in ~9 yr, so 5 years is most of a half-doubling — \\$680 → \\$1,000 fits ✓."

        })
      },
      { q: "Equal annual deposits of \\$200 are made into an account earning 6%/yr for 10 years. Future worth?",
        choices: ["\\$2,636.16", "\\$2,000", "\\$3,200", "\\$1,800"],
        correct: 0,
        solution: S({
          c: "A uniform series (annuity) = equal payments $A$ at the END of each period. Future worth adds every deposit PLUS the interest each one earns: $F = A\\cdot\\dfrac{(1+i)^{n}-1}{i}$ — the (F/A, i, n) factor.",
          s: [
            "<b>Step 1 — Pieces.</b> $A = \\$200$, $i = 6\\%$, $n = 10$.",
            "<b>Step 2 — Factor.</b> $(1.06)^{10} = 1.7908 \\Rightarrow (F/A) = (1.7908-1)/0.06 = 13.181$.",
            "<b>Step 3 — Scale.</b> $F = 200 \\times 13.181 = \\$2{,}636.16$.",
            "<b>Step 4 — Where the formula comes from.</b> First deposit compounds 9 years, second 8, … last 0 — the factor is that geometric series in closed form."
          ],
          a: "$F = \\$2{,}636.16$",
          v: "Bounds: with zero interest $F$ = \\$2,000 (total deposits); a \\$2,000 lump sum for 10 yr at 6% would beat \\$3,500. An annuity must land between — \\$2,636 does ✓; the \\$636 is accumulated interest."

        })
      },
      { q: "A machine costs \\$50,000, has 5-year life, \\$5,000 salvage. Straight-line annual depreciation?",
        choices: ["\\$9,000", "\\$10,000", "\\$45,000", "\\$8,000"],
        correct: 0,
        solution: S({
          c: "Depreciation spreads an asset's cost over its life for accounting/taxes. STRAIGHT-LINE: equal amount every year, and you depreciate only what is truly lost — cost minus salvage: $D = (P - S)/n$.",
          s: [
            "<b>Step 1 — Depreciable amount.</b> $P - S = 50{,}000 - 5{,}000 = \\$45{,}000$ (the \\$5,000 salvage comes back at the end — never 'lost').",
            "<b>Step 2 — Divide by life.</b> $D = 45{,}000/5 = \\$9{,}000$/yr.",
            "<b>Step 3 — Distractor audit.</b> \\$10,000 forgets salvage; \\$45,000 is the TOTAL, not annual; \\$8,000 has no derivation."
          ],
          a: "$D = \\$9{,}000$ per year.",
          v: "Book-value walk: 50k → 41 → 32 → 23 → 14 → 5k — lands exactly on salvage after 5 years ✓. Exam contrast: MACRS ignores salvage and front-loads via table percentages; straight-line is the only equal-every-year method."

        })
      },
      { q: "Nominal annual rate is 12% compounded monthly. Effective annual rate?",
        choices: ["12.68%", "12%", "13%", "1%"],
        correct: 0,
        solution: S({
          c: "'12% compounded monthly' does NOT mean 12% per year actually earned. It means 1% per month — and because each month's interest itself earns interest, the true (EFFECTIVE) annual rate is higher: $i_{eff} = (1 + r/m)^{m} - 1$.",
          s: [
            "<b>Step 1 — Per-period rate.</b> $r/m = 0.12/12 = 0.01$ (1%/month).",
            "<b>Step 2 — Compound 12 times.</b> $(1.01)^{12} = 1.12683$.",
            "<b>Step 3 — Subtract 1.</b> $i_{eff} = 12.68\\%$.",
            "<b>Step 4 — Distractor audit.</b> 12% is the NOMINAL rate (the planted trap); 1% is the monthly rate; 13% over-rounds."
          ],
          a: "$i_{eff} = 12.68\\%$",
          v: "Ordering check: annual 12.00% < monthly 12.68% < continuous $e^{0.12}-1 = 12.75\\%$ — more frequent compounding always raises the effective rate, with continuous as the ceiling ✓."

        })
      },
      { q: "Project A: NPV = +\\$10,000. Project B: NPV = +\\$8,000. Mutually exclusive. Which to choose (ignoring scale)?",
        choices: ["Project A", "Project B", "Both", "Neither"],
        correct: 0,
        solution: S({
          c: "NPV (net present value) = the wealth a project adds, measured in today's dollars. Decision rules: INDEPENDENT projects — accept all with NPV > 0; MUTUALLY EXCLUSIVE (only one can be chosen) — pick the LARGEST NPV.",
          s: [
            "<b>Step 1 — Apply the rule.</b> NPV(A) = +\\$10,000 > NPV(B) = +\\$8,000 → choose A; choosing B forfeits \\$2,000 of value.",
            "<b>Step 2 — Why not 'both'.</b> Mutually exclusive means selecting one forecloses the other (same site/budget/function) — 'both' contradicts the premise.",
            "<b>Step 3 — The waved-off caveat.</b> 'Ignoring scale' matters: with very different investment sizes you would also check incremental return. Similar scale → NPV decides directly."
          ],
          a: "Project A — higher NPV.",
          v: "Why NPV outranks IRR for ranking: NPV measures DOLLARS added at your real cost of capital; IRR is a percentage that can rank a tiny project above a wealth-maximizing big one. When they conflict, follow NPV ✓."

        })
      },
      { q: "An investment doubles in 9 years. Approximate annual interest rate (rule of 72)?",
        choices: ["~8%", "~5%", "~12%", "~15%"],
        correct: 0,
        solution: S({
          c: "Rule of 72 — the standard mental shortcut for compound growth: doubling time $\\approx 72/i$ (i in percent). It works because $\\ln 2 = 0.693$, and the small-rate correction pushes 69.3 to ~72 in the 5-12% range.",
          s: [
            "<b>Step 1 — Invert.</b> $T_2 = 9$ yr → $i \\approx 72/9 = 8\\%$.",
            "<b>Step 2 — Distractor audit.</b> 5% doubles in ~14 yr, 12% in ~6 yr, 15% in ~5 yr — only 8% gives 9 years."
          ],
          a: "$i \\approx 8\\%$",
          v: "Exact check: $2^{1/9} - 1 = 8.01\\%$ — the rule is good to a hundredth of a point here ✓. Handy pairs to remember: 72/6 = 12 yr, 72/8 = 9 yr, 72/9 = 8 yr."

        })
      },
      { q: "Capitalized cost of an asset costing \\$100,000 with \\$20,000 perpetual annual maintenance at $i = 10\\%$ is:",
        choices: ["\\$300,000", "\\$120,000", "\\$200,000", "\\$1,200,000"],
        correct: 0,
        solution: S({
          c: "Capitalized cost = the single sum needed TODAY to buy an asset and fund its upkeep FOREVER. The 'forever' part is a perpetuity: a fund of $A/i$ pays out exactly $A$ every year at rate $i$ without ever shrinking.",
          s: [
            "<b>Step 1 — Price the perpetual maintenance.</b> $A/i = 20{,}000/0.10 = \\$200{,}000$.",
            "<b>Step 2 — Add first cost.</b> $CC = 100{,}000 + 200{,}000 = \\$300{,}000$.",
            "<b>Step 3 — Distractor audit.</b> \\$120,000 adds only ONE year of maintenance; \\$200,000 forgets the asset itself; \\$1.2M misplaces a decimal."
          ],
          a: "$CC = \\$300{,}000$",
          v: "Endowment check: \\$200,000 at 10% yields \\$20,000/yr with principal intact — the definition of perpetual funding ✓. Use case: agencies evaluate dams/bridges/rights-of-way this way because their lives are effectively infinite."

        })
      },
      { q: "Cash flow: $-\\$1{,}000$ at year 0, then $+\\$300$/yr for 5 years. At $i = 10\\%$, NPV is:",
        choices: ["+\\$137.24", "+\\$500", "+\\$1,500", "$-\\$200$"],
        correct: 0,
        solution: S({
          c: "NPV of invest-then-collect: subtract the initial cost from the present worth of the equal annual inflows, priced with the (P/A) factor: $(P/A, i, n) = \\dfrac{1-(1+i)^{-n}}{i}$.",
          s: [
            "<b>Step 1 — Factor.</b> $(P/A, 10\\%, 5) = (1 - 1.1^{-5})/0.1 = (1 - 0.6209)/0.1 = 3.7908$ — five future \\$1 payments are worth \\$3.79 today.",
            "<b>Step 2 — Price the inflows.</b> $300 \\times 3.7908 = \\$1{,}137.24$.",
            "<b>Step 3 — Net.</b> NPV $= -1{,}000 + 1{,}137.24 = +\\$137.24$ → accept.",
            "<b>Step 4 — Distractor audit.</b> +\\$500 is undiscounted ($5\\times300-1000$); +\\$1,500 forgets the cost; $-\\$200$ over-discounts."
          ],
          a: "NPV $= +\\$137.24$ — accept.",
          v: "Bracket: at $i = 0$ NPV would be +\\$500 (ceiling); at high $i$ it goes negative — +\\$137 in between is consistent ✓. Read-through: NPV > 0 at 10% ⇒ IRR > 10% (actual ≈ 15.2%)."

        })
      },
      { q: "Benefit/Cost ratio of a project with PW(benefits) = \\$50,000 and PW(costs) = \\$40,000:",
        choices: ["1.25", "0.8", "1.0", "10,000"],
        correct: 0,
        solution: S({
          c: "The benefit-cost ratio — standard for PUBLIC-sector projects — compares what society receives to what it pays, both in present worth: $B/C = PW(\\text{benefits})/PW(\\text{costs})$; accept when $B/C \\ge 1$.",
          s: [
            "<b>Step 1 — Divide.</b> $B/C = 50{,}000/40{,}000 = 1.25$.",
            "<b>Step 2 — Interpret.</b> Each \\$1 of cost returns \\$1.25 of benefit → justified.",
            "<b>Step 3 — Distractor audit.</b> 0.8 inverts the ratio; 1.0 is the break-even THRESHOLD, not this project's value; 10,000 is the difference $B-C$ mislabeled as a ratio."
          ],
          a: "$B/C = 1.25$ — economically justified.",
          v: "Consistency: $B/C > 1 \\Leftrightarrow B-C > 0 \\Leftrightarrow$ NPV $= +\\$10{,}000 > 0$ — the criteria always agree on accept/reject ✓. Exam caution: COMPARING alternatives requires INCREMENTAL B/C (like IRR), never 'pick the biggest ratio'."

        })
      },
      { q: "Two alternatives have IRRs of 14% and 18%. MARR is 12%. Which is selected?",
        choices: [
          "Cannot decide from IRRs alone — need incremental analysis.",
          "Alternative with 18% IRR (always pick highest IRR).",
          "Alternative with 14% IRR.",
          "Neither, since IRR ≠ MARR."
        ],
        correct: 0,
        solution: S({
          c: "IRR = the discount rate making NPV zero — a PERCENTAGE measure. The trap: a small project can have a high percentage but add less total wealth than a big project with a lower one. Percentages alone cannot rank mutually exclusive choices.",
          s: [
            "<b>Step 1 — Screen against MARR.</b> 14% and 18% both clear MARR = 12% — both acceptable alone; the question is which is BETTER.",
            "<b>Step 2 — Why 'highest IRR' fails.</b> If the 18% project is small and the 14% one is large, the extra dollars in the large project may still earn above 12% — wealth forfeited by chasing the higher percentage.",
            "<b>Step 3 — Correct procedure.</b> Form the incremental cash flow (larger minus smaller investment), compute the IRR of THAT, accept the larger iff incremental IRR ≥ MARR. (Equivalently: compare NPVs at 12%.)"
          ],
          a: "Cannot decide from individual IRRs — incremental analysis is required.",
          v: "One-line numeric proof: A = \\$1k at 18% adds ~\\$60 of NPV; B = \\$100k at 14% adds ~\\$2,000 at MARR 12%. Highest-IRR picks A; wealth picks B ✓. FE answer pattern: any 'always pick highest IRR' option is bait."

        })
      }
    ],

    // ====================== Ch 5: Properties of Electrical Materials ======================
    5: [
      { q: "Copper has resistivity $\\rho = 1.72\\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Find resistance of a 100-m wire with cross-section $1\\,\\text{mm}^{2}$.",
        choices: ["$1.72\\,\\Omega$", "$0.172\\,\\Omega$", "$17.2\\,\\Omega$", "$172\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "Resistance of a uniform conductor: $R = \\rho L/A$. Intuition: resistivity $\\rho$ is the material's intrinsic opposition; doubling LENGTH doubles $R$ (longer obstacle course), doubling AREA halves it (more parallel lanes for electrons).",
          s: [
            "<b>Step 1 — Convert the area to SI.</b> $1\\,\\text{mm}^{2} = (10^{-3}\\,\\text{m})^{2} = 10^{-6}\\,\\text{m}^{2}$ — the classic trap is writing $10^{-3}$.",
            "<b>Step 2 — Plug in.</b> $R = \\dfrac{(1.72\\times10^{-8})(100)}{10^{-6}}$.",
            "<b>Step 3 — Evaluate.</b> $= \\dfrac{1.72\\times10^{-6}}{10^{-6}} = 1.72\\,\\Omega$.",
            "<b>Step 4 — Distractor audit.</b> 0.172 / 17.2 / 172 are all decade slips from that single unit conversion."
          ],
          a: "$R = 1.72\\,\\Omega$",
          v: "Anchor worth memorizing: copper ≈ 17.2 mΩ per meter per mm² → 100 m of 1 mm² wire = 1.72 Ω ✓. Practical feel: at 10 A this wire would drop 17 V and burn 172 W — why long runs use fatter conductors."

        })
      },
      { q: "Capacitance of a parallel-plate capacitor: plate area $A=10\\,\\text{cm}^{2}$, gap $d=1\\,\\text{mm}$, vacuum. ($\\varepsilon_0=8.854\\times 10^{-12}$ F/m)",
        choices: ["$8.85\\,\\text{pF}$", "$88.5\\,\\text{pF}$", "$0.885\\,\\text{pF}$", "$8.85\\,\\text{nF}$"],
        correct: 0,
        solution: S({
          c: "Parallel-plate capacitance: $C = \\varepsilon_0\\varepsilon_r A/d$. Bigger plates (A↑) store more charge at the same voltage; a smaller gap (d↓) increases the field's grip. Vacuum → $\\varepsilon_r = 1$.",
          s: [
            "<b>Step 1 — Convert units.</b> $A = 10\\,\\text{cm}^{2} = 10\\times10^{-4} = 10^{-3}\\,\\text{m}^{2}$; $d = 1\\,\\text{mm} = 10^{-3}$ m.",
            "<b>Step 2 — Plug in.</b> $C = \\dfrac{(8.854\\times10^{-12})(10^{-3})}{10^{-3}} = 8.854\\times10^{-12}$ F — here $A/d$ happens to equal 1, so the answer is $\\varepsilon_0$ itself.",
            "<b>Step 3 — Name the prefix.</b> $10^{-12}$ F = picofarad → 8.85 pF.",
            "<b>Step 4 — Distractor audit.</b> 88.5 pF and 0.885 pF are one-decade slips in the cm² conversion; 8.85 nF is three decades off."
          ],
          a: "$C \\approx 8.85$ pF",
          v: "Scale feel: air-gap plate capacitors are always pF-class — to reach μF, real parts use thin dielectrics, huge rolled areas, or electrolytes. Dielectric check: mylar ($\\varepsilon_r = 3.2$) in the gap scales C to ~28 pF ✓."

        })
      },
      { q: "Temperature coefficient of copper $\\alpha_{20} = 0.00393\\,/°C$. A 10-Ω wire at 20°C heats to 80°C. New resistance?",
        choices: ["$12.36\\,\\Omega$", "$10\\,\\Omega$", "$14.7\\,\\Omega$", "$8.0\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "Metal resistance RISES with temperature: a hotter lattice vibrates more and scatters electrons more often. Linear model: $R_T = R_{ref}[1 + \\alpha(T - T_{ref})]$, with $\\alpha$ the fractional change per °C from the reference (20°C here).",
          s: [
            "<b>Step 1 — Temperature rise.</b> $\\Delta T = 80 - 20 = 60$°C.",
            "<b>Step 2 — Fractional increase.</b> $\\alpha\\Delta T = 0.00393\\times60 = 0.2358$ → +23.6%.",
            "<b>Step 3 — Scale.</b> $R = 10(1.2358) = 12.36\\,\\Omega$.",
            "<b>Step 4 — Distractor audit.</b> 10 Ω ignores heating; 8 Ω goes the WRONG direction (semiconductors drop with heat, metals rise); 14.7 over-multiplies."
          ],
          a: "$R \\approx 12.36\\,\\Omega$",
          v: "Rate anchor: copper ≈ +0.39%/°C ✓. Engineering relevance: windings run 60-100°C hot, so loss calculations must use HOT resistance — a >20% correction; the same physics is how RTD thermometers measure temperature."

        })
      },
      { q: "Energy stored in a 100-μF capacitor charged to 50 V:",
        choices: ["$125\\,\\text{mJ}$", "$5\\,\\text{mJ}$", "$2.5\\,\\text{J}$", "$0.5\\,\\text{J}$"],
        correct: 0,
        solution: S({
          c: "A charged capacitor stores energy in its electric field: $W = \\tfrac12CV^{2}$. The square matters — doubling voltage QUADRUPLES the energy.",
          s: [
            "<b>Step 1 — Convert.</b> $C = 100\\,\\mu\\text{F} = 10^{-4}$ F.",
            "<b>Step 2 — Square the voltage.</b> $V^{2} = 2500$.",
            "<b>Step 3 — Evaluate.</b> $W = 0.5\\times10^{-4}\\times2500 = 0.125$ J $= 125$ mJ.",
            "<b>Step 4 — Distractor audit.</b> 5 mJ ≈ forgetting to square; 0.5 J and 2.5 J are decade/half slips."
          ],
          a: "$W = 125$ mJ",
          v: "Cross-check via charge: $Q = CV = 5$ mC, $W = \\tfrac12QV = \\tfrac12(0.005)(50) = 0.125$ J ✓ — two formulas, one answer. The dual pair to memorize: capacitor $\\tfrac12CV^{2}$ ↔ inductor $\\tfrac12LI^{2}$."

        })
      },
      { q: "An inductor stores 0.5 J with $I = 2$ A flowing. Find $L$.",
        choices: ["$0.25\\,\\text{H}$", "$0.5\\,\\text{H}$", "$1\\,\\text{H}$", "$2\\,\\text{H}$"],
        correct: 0,
        solution: S({
          c: "An inductor stores energy in its MAGNETIC field — the exact dual of the capacitor: $W = \\tfrac12LI^{2}$, with current in the role of voltage.",
          s: [
            "<b>Step 1 — Rearrange.</b> $L = 2W/I^{2}$.",
            "<b>Step 2 — Plug in.</b> $L = \\dfrac{2(0.5)}{4} = 0.25$ H.",
            "<b>Step 3 — Distractor audit.</b> 0.5 H drops the factor 2; 1 H forgets to square the current; 2 H does both."
          ],
          a: "$L = 0.25$ H",
          v: "Forward check: $\\tfrac12(0.25)(2^{2}) = 0.5$ J ✓. Duality table (half of transient intuition): capacitor — resists VOLTAGE change, DC steady state = open; inductor — resists CURRENT change, DC steady state = short."

        })
      },
      { q: "A semiconductor’s intrinsic carrier concentration $n_i$ at room temperature in silicon is approximately:",
        choices: ["$1.5\\times 10^{10}\\,\\text{cm}^{-3}$", "$1.5\\times 10^{15}\\,\\text{cm}^{-3}$", "$2.5\\times 10^{19}\\,\\text{cm}^{-3}$", "$1\\times 10^{6}\\,\\text{cm}^{-3}$"],
        correct: 0,
        solution: S({
          c: "An INTRINSIC (undoped) semiconductor has only thermally generated carriers: heat occasionally kicks an electron across the band gap, leaving a hole behind. The room-temperature count is a benchmark constant: for silicon $n_i \\approx 1.5\\times10^{10}\\,\\text{cm}^{-3}$.",
          s: [
            "<b>Step 1 — Recall the benchmark.</b> Si at 300 K: $n_i \\approx 1.5\\times10^{10}$/cm³ — tiny, because the 1.12-eV gap is ~45× the thermal energy $kT \\approx 26$ meV.",
            "<b>Step 2 — Place the distractors.</b> $1.5\\times10^{15}$ is a typical light DOPING level; $2.5\\times10^{19}$ is effective-density-of-states territory; $10^{6}$ is GaAs's much-smaller $n_i$ (wider gap).",
            "<b>Step 3 — Why it matters.</b> Any practical doping ($10^{14}$-$10^{18}$) swamps $n_i$ — exactly why doping gives such precise control of silicon devices."
          ],
          a: "$n_i \\approx 1.5\\times10^{10}\\ \\text{cm}^{-3}$",
          v: "Perspective: silicon has $5\\times10^{22}$ atoms/cm³ — only ~1 atom in $3\\times10^{12}$ contributes a carrier; intrinsic Si is nearly an insulator ✓. Companion law (mass action): $np = n_i^{2}$ — dope to $N_D = 10^{16}$ and minority holes fall to ~$2\\times10^{4}$/cm³."

        })
      },
      { q: "Hall effect coefficient $R_H = -V_H t / (I B)$. For n-type material, $R_H$ is:",
        choices: ["Negative", "Positive", "Zero", "Imaginary"],
        correct: 0,
        solution: S({
          c: "Hall effect: drive current through a slab in a magnetic field, and the Lorentz force $q\\vec v\\times\\vec B$ pushes the moving carriers toward one edge. The SIGN of the resulting transverse (Hall) voltage exposes the sign of the carriers: $R_H = 1/(nq)$.",
          s: [
            "<b>Step 1 — Identify the carriers.</b> n-type: majority carriers are electrons, $q = -e$.",
            "<b>Step 2 — Apply the sign.</b> $R_H = 1/(n(-e)) < 0$.",
            "<b>Step 3 — Picture.</b> Electrons drift opposite conventional current, but the magnetic push still piles them on one specific edge — that edge goes negative, opposite to a p-type sample's polarity."
          ],
          a: "Negative for n-type material.",
          v: "Why famous: conductivity alone cannot distinguish electrons from holes — the Hall SIGN can; it is the standard wafer-typing measurement ✓. Bonus: $|R_H| = 1/(ne)$ also yields the carrier density; phone compasses and motor sensors are Hall devices."

        })
      },
      { q: "Resistance of a 1 km transmission cable with ACSR conductor of $\\rho = 2.83\\times 10^{-8}\\,\\Omega\\cdot$m and $A = 100\\,\\text{mm}^{2}$.",
        choices: ["$0.283\\,\\Omega/\\text{km}$", "$2.83\\,\\Omega/\\text{km}$", "$28.3\\,\\Omega/\\text{km}$", "$0.0283\\,\\Omega/\\text{km}$"],
        correct: 0,
        solution: S({
          c: "Same law as any wire: $R = \\rho L/A$. ACSR = Aluminum Conductor, Steel Reinforced — the standard overhead transmission line: aluminum strands carry current, the steel core carries mechanical tension.",
          s: [
            "<b>Step 1 — Convert the area.</b> $100\\,\\text{mm}^{2} = 10^{-4}\\,\\text{m}^{2}$.",
            "<b>Step 2 — Plug in for 1 km.</b> $R = \\dfrac{(2.83\\times10^{-8})(1000)}{10^{-4}} = 0.283\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 2.83, 0.0283, 28.3 — all decade slips from the mm²→m² conversion."
          ],
          a: "$R \\approx 0.283\\,\\Omega$/km",
          v: "Material logic: aluminum's ρ is ~1.6× copper's, but per unit of conductance it is far lighter and cheaper — every overhead line is aluminum ✓. Loss feel: 300 A over 100 km dissipates $I^{2}R = 300^{2}\\times28.3 \\approx 2.5$ MW — the reason transmission uses high voltage to keep current low."

        })
      },
      { q: "Magnetic flux density $B = 1.2$ T inside a core. Cross-section $A = 0.01$ m². Magnetic flux?",
        choices: ["$0.012$ Wb", "$120$ Wb", "$1.2$ Wb", "$0.12$ Wb"],
        correct: 0,
        solution: S({
          c: "Flux vs flux density — the most-confused pair in magnetics: $B$ (tesla) is how DENSE the field lines are; $\\Phi$ (weber) is how MANY lines cross a given area: $\\Phi = BA$ for a uniform perpendicular field.",
          s: [
            "<b>Step 1 — Multiply.</b> $\\Phi = 1.2\\times0.01 = 0.012$ Wb = 12 mWb.",
            "<b>Step 2 — Unit check.</b> T·m² = Wb by definition ✓.",
            "<b>Step 3 — Distractor audit.</b> 1.2 Wb echoes $B$; 0.12 and 120 are decade slips on the area."
          ],
          a: "$\\Phi = 0.012$ Wb (12 mWb)",
          v: "Realism anchor: 1.2 T is typical working flux density for transformer steel (saturates ~1.7 T) ✓. Why flux matters: Faraday's law $v = N\\,d\\Phi/dt$ runs on Φ — collapse this flux through 100 turns in 10 ms and you generate 120 V."

        })
      },
      { q: "Curie temperature of a ferromagnetic material is the temperature at which:",
        choices: [
          "Spontaneous magnetization disappears (becomes paramagnetic).",
          "Resistance becomes zero (superconducting transition).",
          "Material melts.",
          "Dielectric breakdown begins."
        ],
        correct: 0,
        solution: S({
          c: "Ferromagnetism exists because neighboring atomic spins lock parallel (quantum exchange coupling). Heat fights the alignment; the CURIE TEMPERATURE $T_C$ is where thermal agitation wins and spontaneous magnetization collapses.",
          s: [
            "<b>Step 1 — Below vs above.</b> Below $T_C$: spins align in domains → ferromagnetic. Above $T_C$: orientations randomize → merely PARAMAGNETIC (weak attraction, no permanent magnetism), with $\\chi \\propto 1/(T-T_C)$ (Curie-Weiss).",
            "<b>Step 2 — Eliminate the distractors.</b> Zero resistance = SUPERCONDUCTING transition (different physics, usually cryogenic); melting is structural and far hotter (Fe: $T_C$ = 770°C, melts 1538°C); dielectric breakdown belongs to insulators under field."
          ],
          a: "The temperature where spontaneous magnetization disappears — ferromagnet → paramagnet.",
          v: "Recognizable values: Fe 1043 K, Ni 627 K, Co 1394 K. Applications: rice cookers shut off via a magnet releasing at its Curie point; magnetic storage must stay well below $T_C$ ✓. Reversible: cool down and ferromagnetism returns — a phase transition, not damage."

        })
      }
    ],

    // ====================== Ch 6: Circuit Analysis ======================
    6: [
      { q: "Series RLC: $R=10\\,\\Omega$, $L=1$ mH, $C=10\\,\\mu$F. Resonant frequency $f_0$?",
        choices: ["$\\approx 1591$ Hz", "$\\approx 159$ Hz", "$\\approx 15.9$ kHz", "$\\approx 50$ Hz"],
        correct: 0,
        solution: S({
          c: "Resonance in a series RLC: the inductor's reactance ($X_L = \\omega L$, grows with frequency) and the capacitor's ($X_C = 1/\\omega C$, shrinks with frequency) are equal and CANCEL — the circuit looks purely resistive. Setting $X_L = X_C$ gives $\\omega_0 = 1/\\sqrt{LC}$, i.e. $f_0 = \\dfrac{1}{2\\pi\\sqrt{LC}}$.",
          s: [
            "<b>Step 1 — Compute LC.</b> $LC = (10^{-3})(10^{-5}) = 10^{-8}$ s².",
            "<b>Step 2 — Square root.</b> $\\sqrt{LC} = 10^{-4}$ s → $\\omega_0 = 10^{4}$ rad/s.",
            "<b>Step 3 — Convert to Hz.</b> $f_0 = \\omega_0/2\\pi = 10^{4}/6.283 \\approx 1591$ Hz.",
            "<b>Step 4 — Distractor audit.</b> 159 Hz and 15.9 kHz are decade slips; 50 Hz is a 'sounds familiar' mains-frequency bait. Note $R$ plays NO role in where resonance occurs — only in how sharp it is."
          ],
          a: "$f_0 \\approx 1591$ Hz",
          v: "Reactance check at $\\omega_0$: $X_L = 10^{4}\\times10^{-3} = 10\\,\\Omega$ and $X_C = 1/(10^{4}\\times10^{-5}) = 10\\,\\Omega$ — equal ✓. At resonance the impedance collapses to just $R = 10\\,\\Omega$, so current peaks there."

        })
      },
      { q: "For the same RLC circuit ($R=10$, $L=1$ mH, $C=10\\,\\mu$F), quality factor $Q$ is:",
        choices: ["$1$", "$10$", "$100$", "$0.1$"],
        correct: 0,
        solution: S({
          c: "Quality factor $Q$ measures how SHARP a resonance is — the ratio of energy stored to energy lost per cycle. For a series RLC: $Q = \\dfrac{\\omega_0 L}{R} = \\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}}$ — small $R$ (less loss) → high $Q$ → narrow peak.",
          s: [
            "<b>Step 1 — Use the R-free form.</b> $\\sqrt{L/C} = \\sqrt{10^{-3}/10^{-5}} = \\sqrt{100} = 10\\,\\Omega$ (the 'characteristic impedance' of the LC pair).",
            "<b>Step 2 — Divide by R.</b> $Q = 10/10 = 1$.",
            "<b>Step 3 — Interpret.</b> $Q = 1$ is a LOW-Q, heavily damped resonator — broad, gentle peak rather than a sharp spike."
          ],
          a: "$Q = 1$",
          v: "Cross-form check: $Q = \\omega_0L/R = (10^{4})(10^{-3})/10 = 1$ ✓ — both formulas agree. Bandwidth consequence: $\\Delta f = f_0/Q = 1591$ Hz — as wide as the center frequency itself. Radio tuners need $Q$ of 50-100+; damping link: $Q = 1/(2\\zeta)$, so $\\zeta = 0.5$ here."

        })
      },
      { q: "Three resistors $4\\,\\Omega$, $6\\,\\Omega$, $12\\,\\Omega$ in parallel. Equivalent resistance?",
        choices: ["$2\\,\\Omega$", "$22\\,\\Omega$", "$0.45\\,\\Omega$", "$6\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "Parallel resistors share the same voltage, and their CURRENTS add — so CONDUCTANCES (1/R) add: $\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dfrac{1}{R_3}$.",
          s: [
            "<b>Step 1 — Common denominator (12).</b> $\\dfrac{1}{4} + \\dfrac{1}{6} + \\dfrac{1}{12} = \\dfrac{3+2+1}{12} = \\dfrac{6}{12} = \\dfrac{1}{2}$.",
            "<b>Step 2 — Invert.</b> $R_{eq} = 2\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 22 Ω ADDS them — the series rule; 6 Ω is a middle-value guess; 0.45 Ω inverts at the wrong step ($1/22$ misused)."
          ],
          a: "$R_{eq} = 2\\,\\Omega$",
          v: "Sanity rule: a parallel combination is always SMALLER than its smallest member (here < 4 Ω) — adding paths can only make current flow easier ✓. Physics check at 12 V: branch currents $3+2+1 = 6$ A → $R = 12/6 = 2\\,\\Omega$ ✓."

        })
      },
      { q: "A 120 V (rms) source drives a load $Z = 30+j40\\,\\Omega$. Find real power consumed.",
        choices: ["$172.8$ W", "$288$ W", "$480$ W", "$240$ W"],
        correct: 0,
        solution: S({
          c: "Only the RESISTIVE part of an impedance dissipates real power; the reactive part just sloshes energy back and forth. Reliable route: find the current magnitude from the FULL impedance, then $P = I_{rms}^{2}R$.",
          s: [
            "<b>Step 1 — Impedance magnitude.</b> $|Z| = \\sqrt{30^{2}+40^{2}} = 50\\,\\Omega$ (the 3-4-5 triangle ×10).",
            "<b>Step 2 — Current.</b> $I = 120/50 = 2.4$ A rms.",
            "<b>Step 3 — Real power.</b> $P = (2.4)^{2}\\times30 = 5.76\\times30 = 172.8$ W.",
            "<b>Step 4 — Distractor audit.</b> 288 W is the APPARENT power $S = VI$ (forgot the power factor); 480 W uses $V^{2}/R$ as if the load were purely resistive; 240 W has no consistent route."
          ],
          a: "$P = 172.8$ W",
          v: "Power-triangle check: PF $= R/|Z| = 0.6$; $P = S\\cos\\theta = 288\\times0.6 = 172.8$ W ✓; $Q = 288\\times0.8 = 230.4$ VAR, and $\\sqrt{172.8^{2}+230.4^{2}} = 288$ ✓ — all three sides consistent."

        })
      },
      { q: "Source: $v_s(t) = 100\\cos(1000t)$ V, drives $L = 50$ mH in series with $R = 30$ Ω. Steady-state current amplitude?",
        choices: ["$1.71$ A", "$2.0$ A", "$3.33$ A", "$1.0$ A"],
        correct: 0,
        solution: S({
          c: "Phasor method: at a single frequency, an RL series pair acts like one complex impedance $Z = R + j\\omega L$, and Ohm's law works with magnitudes: $|I| = V_m/|Z|$.",
          s: [
            "<b>Step 1 — Inductive reactance.</b> $\\omega = 1000$ rad/s (read off the cosine argument) → $X_L = \\omega L = 1000\\times0.05 = 50\\,\\Omega$.",
            "<b>Step 2 — Impedance magnitude.</b> $|Z| = \\sqrt{30^{2} + 50^{2}} = \\sqrt{3400} \\approx 58.31\\,\\Omega$.",
            "<b>Step 3 — Current amplitude.</b> $|I| = 100/58.31 \\approx 1.71$ A.",
            "<b>Step 4 — Distractor audit.</b> 3.33 A uses only $R$ ($100/30$); 2.0 A uses only $X_L$; 1.0 A adds R and X arithmetically ($100/80$ — the classic 'forgot the square root' error... actually $100/80 = 1.25$; 1.0 rounds a wrong route)."
          ],
          a: "$|I| \\approx 1.71$ A",
          v: "Phase bonus: current LAGS voltage by $\\arctan(50/30) = 59°$ — inductors always make current lag ('ELI': voltage E leads current I in an L). Limit check: at DC ($\\omega\\to0$) the inductor vanishes and $|I| \\to 100/30 = 3.33$ A — distractor C is the DC answer ✓."

        })
      },
      { q: "Time constant of an RC circuit with $R=2$ kΩ and $C=10\\,\\mu$F:",
        choices: ["$20$ ms", "$200$ ms", "$2$ ms", "$2$ s"],
        correct: 0,
        solution: S({
          c: "Every first-order circuit settles exponentially with a single time constant: $\\tau = RC$ for resistor-capacitor, $\\tau = L/R$ for resistor-inductor. $\\tau$ is the time to cover 63.2% of any remaining change.",
          s: [
            "<b>Step 1 — Multiply.</b> $\\tau = (2\\times10^{3})(10\\times10^{-6}) = 2\\times10^{-2}$ s $= 20$ ms.",
            "<b>Step 2 — Unit check.</b> Ω·F = (V/A)(C/V) = C/A = s ✓.",
            "<b>Step 3 — Distractor audit.</b> 2 ms and 200 ms are decade slips on the μF conversion; 2 s is three decades off."
          ],
          a: "$\\tau = 20$ ms",
          v: "Settling table worth memorizing: 1τ → 63.2%, 2τ → 86.5%, 3τ → 95.0%, 4τ → 98.2%, 5τ → 99.3% ('fully settled' by engineering convention). Here: full settling ≈ 100 ms ✓."

        })
      },
      { q: "Norton equivalent: $I_N = 5$ A, $R_N = 10$ Ω. What is the corresponding Thevenin voltage?",
        choices: ["$50$ V", "$10$ V", "$0.5$ V", "$5$ V"],
        correct: 0,
        solution: S({
          c: "Thevenin and Norton are two costumes for the SAME circuit: a voltage source $V_{Th}$ in series with $R_{Th}$ ↔ a current source $I_N$ in parallel with $R_N$. Conversion: $V_{Th} = I_N R_N$, and the resistance is identical ($R_{Th} = R_N$).",
          s: [
            "<b>Step 1 — Apply the conversion.</b> $V_{Th} = I_N R_N = 5\\times10 = 50$ V.",
            "<b>Step 2 — Why it works.</b> Open-circuit the Norton source: all 5 A flows through the 10-Ω resistor → terminal voltage $= 50$ V — which is by definition $V_{oc} = V_{Th}$.",
            "<b>Step 3 — Distractor audit.</b> 10 V echoes $R_N$; 0.5 V divides instead of multiplying; 5 V echoes $I_N$."
          ],
          a: "$V_{Th} = 50$ V (with $R_{Th} = 10\\,\\Omega$).",
          v: "Short-circuit cross-check: Thevenin's $I_{sc} = V_{Th}/R_{Th} = 50/10 = 5$ A — exactly the Norton current we started from ✓. Both descriptions deliver identical voltage/current to ANY load — that is the meaning of 'equivalent'."

        })
      },
      { q: "An ideal op-amp with $V_+ = 2$ V, $V_- = 1.9$ V, supplies $\\pm 15$ V. Output voltage?",
        choices: ["$+15$ V (saturated)", "$+0.1$ V", "$-15$ V", "$0$ V"],
        correct: 0,
        solution: S({
          c: "An op-amp amplifies the DIFFERENCE between its two inputs with enormous gain ($10^{5}$-$10^{6}$, idealized as infinite). WITHOUT feedback, even a millivolt of difference demands an output beyond the supply rails — so the output simply slams into the nearest rail (saturation).",
          s: [
            "<b>Step 1 — Compute the differential input.</b> $V_+ - V_- = 2.0 - 1.9 = +0.1$ V — positive.",
            "<b>Step 2 — Multiply by the open-loop gain.</b> $0.1\\text{ V} \\times 10^{5} = 10{,}000$ V demanded — impossible; the output clips at the positive supply.",
            "<b>Step 3 — Conclude.</b> $V_{out} \\approx +15$ V (positive saturation).",
            "<b>Step 4 — Distractor audit.</b> +0.1 V forgets the gain entirely; −15 V flips the sign of the comparison; 0 V would need $V_+ = V_-$ exactly."
          ],
          a: "$V_{out} \\approx +15$ V — saturated high.",
          v: "The lesson behind the question: 'virtual short' ($V_+ \\approx V_-$) is NOT an op-amp property — it is a property of NEGATIVE FEEDBACK. No feedback → comparator behavior, output always at a rail. This open-loop mode is exactly how comparators and Schmitt triggers operate ✓."

        })
      },
      { q: "Inverting op-amp: $R_f = 100$ kΩ, $R_{in} = 10$ kΩ. Voltage gain?",
        choices: ["$-10$", "$+10$", "$-11$", "$-0.1$"],
        correct: 0,
        solution: S({
          c: "A Schmitt trigger is a comparator with HYSTERESIS: two different thresholds depending on direction — rising input must cross $V_{T+}$ to flip high; falling input must cross the LOWER $V_{T-}$ to flip back. Between them, the output holds its state.",
          s: [
            "<b>Step 1 — The problem it solves.</b> A slow or noisy edge through a single-threshold comparator wiggles across the threshold many times → output chatters (multiple false transitions).",
            "<b>Step 2 — How hysteresis fixes it.</b> After the first crossing of $V_{T+}$, noise must exceed the full hysteresis window $V_{T+} - V_{T-}$ to cause a false flip — small noise can no longer retrigger.",
            "<b>Step 3 — Distractor audit.</b> Linear amplification is the opposite of its snap-action behavior; sine generation needs an oscillator (a Schmitt + RC can MAKE one, but the trigger itself doesn't); frequency multiplication is unrelated."
          ],
          a: "Clean noisy or slow edges via hysteresis.",
          v: "Design rule: hysteresis width must exceed the peak-to-peak noise riding on the signal ✓. Everyday sightings: thermostats (heat on at 19°, off at 21° — temperature hysteresis), push-button debouncing, and the gate symbol with the little hysteresis loop drawn inside."

        })
      },
      { q: "Three-phase Y-connected source: line-to-line voltage $V_L = 480$ V (rms). Line-to-neutral voltage?",
        choices: ["$277$ V", "$480$ V", "$240$ V", "$830$ V"],
        correct: 0,
        solution: S({
          c: "In a Y (star) connection, each phase winding sits between one LINE and the NEUTRAL. Two line terminals are two phase voltages 120° apart, and their (phasor) difference is $\\sqrt3$ times bigger: $V_{LL} = \\sqrt3\\,V_{LN}$.",
          s: [
            "<b>Step 1 — Invert the relation.</b> $V_{LN} = V_{LL}/\\sqrt3 = 480/1.732 \\approx 277$ V.",
            "<b>Step 2 — Where √3 comes from.</b> Two unit phasors 120° apart differ by $2\\sin(60°) = \\sqrt3$ — geometry, not magic.",
            "<b>Step 3 — Distractor audit.</b> 480 V confuses line with phase; 240 V halves instead of dividing by √3; 830 V MULTIPLIES by √3 (direction flipped)."
          ],
          a: "$V_{LN} \\approx 277$ V",
          v: "Real-world anchor: the US commercial '480Y/277' system — motors take 480 V line-to-line, fluorescent/LED lighting runs on 277 V line-to-neutral ✓. Same math gives residential 208Y/120: $120 \\times \\sqrt3 = 208$ V."

        })
      }
    ],

    // ====================== Ch 7: Linear Systems ======================
    7: [
      { q: "A linear time-invariant system has impulse response $h(t) = e^{-2t}u(t)$. The system is:",
        choices: ["Stable (BIBO)", "Unstable", "Marginally stable", "Cannot determine"],
        correct: 0,
        solution: S({
          c: "BIBO stability (bounded-in, bounded-out) for a continuous LTI system has one test: the impulse response must be absolutely integrable, $\\int|h(t)|\\,dt < \\infty$. (The $u(t)$ factor just means $h$ starts at $t = 0$ — a causal system.)",
          s: [
            "<b>Step 1 — Integrate.</b> $\\int_0^{\\infty}e^{-2t}dt = \\left[-\\tfrac12e^{-2t}\\right]_0^{\\infty} = \\tfrac12$ — finite.",
            "<b>Step 2 — Conclude.</b> Finite area → every bounded input produces a bounded output → BIBO stable.",
            "<b>Step 3 — Distractor audit.</b> 'Unstable' would need a growing $h$; 'marginally stable' is the borderline case (e.g. a pure oscillator, $h = \\sin t$) where the integral barely diverges; 'cannot determine' — the test is decisive."
          ],
          a: "BIBO stable.",
          v: "Pole view (the fast route): $\\mathcal L\\{e^{-2t}u\\} = 1/(s+2)$, single pole at $s = -2$, strictly in the left half-plane → stable ✓. Equivalence to remember: decaying $h$ ↔ LHP poles ↔ finite $\\int|h|$ — three faces of one fact."

        })
      },
      { q: "Transfer function $H(s) = \\dfrac{s+1}{s^{2}+3s+2}$. The poles are:",
        choices: ["$-1$ and $-2$", "$+1$ and $+2$", "$-1$ and $+2$", "$\\pm j\\sqrt{2}$"],
        correct: 0,
        solution: S({
          c: "Poles = roots of the DENOMINATOR (frequencies where the response blows up); zeros = roots of the numerator. Poles control stability and transient shape.",
          s: [
            "<b>Step 1 — Factor the denominator.</b> $s^{2}+3s+2 = (s+1)(s+2)$.",
            "<b>Step 2 — Read the roots.</b> $s = -1$ and $s = -2$ — both real, both negative → stable, non-oscillatory (overdamped-type) behavior.",
            "<b>Step 3 — Distractor audit.</b> $+1, +2$ flips signs (unstable RHP poles); $-1, +2$ mixes; $\\pm j\\sqrt2$ would need denominator $s^{2}+2$."
          ],
          a: "Poles at $s = -1$ and $s = -2$.",
          v: "Sharp-eye bonus: the zero at $s = -1$ (numerator) CANCELS the pole at $-1$, so the visible dynamics reduce to $H = 1/(s+2)$ — first-order with τ = 0.5 s. Exam caution: report the poles of the original TF as asked, then mention cancellation ✓."

        })
      },
      { q: "Step response of $H(s) = 1/(s+2)$ at $t \\to \\infty$ is (final-value theorem):",
        choices: ["$0.5$", "$0$", "$\\infty$", "$1$"],
        correct: 0,
        solution: S({
          c: "The final-value theorem reads the steady state straight from the transform — no inverse needed: $\\lim_{t\\to\\infty}y(t) = \\lim_{s\\to0}sY(s)$, VALID only when the system is stable (all poles of $sY$ in the LHP).",
          s: [
            "<b>Step 1 — Build Y(s).</b> Step input means $X(s) = 1/s$, so $Y(s) = \\dfrac{1}{s(s+2)}$.",
            "<b>Step 2 — Multiply by s and take the limit.</b> $sY(s) = \\dfrac{1}{s+2} \\to \\dfrac{1}{2}$ as $s\\to0$.",
            "<b>Step 3 — Validity check (required!).</b> Pole of $sY$ at $-2$ — LHP ✓, theorem applies."
          ],
          a: "$y(\\infty) = 0.5$",
          v: "Time-domain confirmation: $y(t) = \\tfrac12(1 - e^{-2t})$, which indeed → 0.5 ✓. Shortcut to internalize: steady-state output to a unit step = DC gain $H(0) = 1/(0+2) = 0.5$ — the FVT formalizes exactly that."

        })
      },
      { q: "Convolution: if $h(t) = e^{-t}u(t)$ and $x(t) = u(t)$, then $y(t)$ for $t>0$ is:",
        choices: ["$1 - e^{-t}$", "$e^{-t}$", "$1$", "$t e^{-t}$"],
        correct: 0,
        solution: S({
          c: "Convolution computes an LTI system's output: $y(t) = \\int_0^{t}h(\\tau)x(t-\\tau)\\,d\\tau$ (limits 0 to $t$ because both signals are causal). With a step input, the integral simply ACCUMULATES the impulse response.",
          s: [
            "<b>Step 1 — Set up.</b> $x(t-\\tau) = u(t-\\tau) = 1$ for all $\\tau \\le t$, so $y(t) = \\int_0^{t}e^{-\\tau}d\\tau$.",
            "<b>Step 2 — Integrate.</b> $\\left[-e^{-\\tau}\\right]_0^{t} = 1 - e^{-t}$.",
            "<b>Step 3 — Distractor audit.</b> $e^{-t}$ is $h$ itself (impulse response, not step response); 1 is only the final value; $te^{-t}$ would come from convolving $e^{-t}$ with ITSELF."
          ],
          a: "$y(t) = 1 - e^{-t}$ for $t > 0$.",
          v: "Laplace cross-check: $Y = \\dfrac{1}{s+1}\\cdot\\dfrac{1}{s} = \\dfrac{1}{s} - \\dfrac{1}{s+1} \\Rightarrow y = 1 - e^{-t}$ ✓. General fact used here: step response = integral of impulse response ✓ (boundaries: $y(0)=0$, $y(\\infty)=1$ both sensible)."

        })
      },
      { q: "If $H(j\\omega) = 5/(1+j\\omega/100)$, the bandwidth (−3 dB point) is at:",
        choices: ["$\\omega = 100$ rad/s", "$\\omega = 50$ rad/s", "$\\omega = 5$ rad/s", "$\\omega = 200$ rad/s"],
        correct: 0,
        solution: S({
          c: "A first-order low-pass $H = \\dfrac{K}{1 + j\\omega/\\omega_c}$ has its corner (−3 dB) frequency where the real and imaginary parts of the denominator are EQUAL — there the magnitude falls to $1/\\sqrt2$ of the DC value (half power).",
          s: [
            "<b>Step 1 — Match the template.</b> $H = \\dfrac{5}{1 + j\\omega/100}$ → $K = 5$, $\\omega_c = 100$ rad/s by inspection.",
            "<b>Step 2 — Verify the −3 dB condition.</b> At $\\omega = 100$: $|1 + j1| = \\sqrt2$ → $|H| = 5/\\sqrt2 = 3.54$ — exactly 3 dB below the DC gain of 5.",
            "<b>Step 3 — Distractor audit.</b> 5 rad/s confuses the GAIN with the corner; 50 and 200 are factor-of-2 slips."
          ],
          a: "$\\omega_c = 100$ rad/s ($f_c \\approx 15.9$ Hz).",
          v: "Why '−3 dB = half power': $20\\log_{10}(1/\\sqrt2) = -3.01$ dB, and power ∝ amplitude² → $1/2$ ✓. Bode intuition: flat at 14 dB ($20\\log5$) until ~100 rad/s, then −20 dB/decade."

        })
      },
      { q: "Time-shifted signal $x(t-3)$ corresponds in Laplace to:",
        choices: ["$e^{-3s}X(s)$", "$X(s)/e^{3s}$ (same thing)", "$X(s) - 3$", "$3X(s)$"],
        correct: 0,
        solution: S({
          c: "Laplace time-shift theorem: delaying a signal by $a$ multiplies its transform by $e^{-as}$: $\\mathcal L\\{x(t-a)u(t-a)\\} = e^{-as}X(s)$. A delay does not change WHAT the signal is — only WHEN — and that timing lives in the complex exponential.",
          s: [
            "<b>Step 1 — Apply with a = 3.</b> $x(t-3) \\leftrightarrow e^{-3s}X(s)$.",
            "<b>Step 2 — Distractor audit.</b> $X(s) - 3$ confuses shifting with subtraction; $3X(s)$ confuses it with scaling; choice B, $X(s)/e^{3s}$, is actually the SAME thing as A ($e^{-3s} = 1/e^{3s}$) — the exam wants the standard form."
          ],
          a: "$e^{-3s}X(s)$",
          v: "Frequency-domain meaning: on the $j\\omega$ axis, $|e^{-3j\\omega}| = 1$ — a pure delay changes NO amplitudes, only adds linear phase $-3\\omega$ ✓. Discrete-time cousin: a $k$-sample delay multiplies the z-transform by $z^{-k}$ — same idea, different domain."

        })
      },
      { q: "A causal LTI system has all poles strictly in the left-half $s$-plane. It is:",
        choices: ["BIBO stable", "Unstable", "Marginally stable", "Insufficient information"],
        correct: 0,
        solution: S({
          c: "For a CAUSAL LTI system, stability is read directly off the pole map: all poles strictly inside the left half of the s-plane ⇔ BIBO stable. Each pole $s = -\\sigma + j\\omega$ contributes a term $e^{-\\sigma t}e^{j\\omega t}$ — negative real part means it decays.",
          s: [
            "<b>Step 1 — Apply the criterion.</b> All poles strictly LHP → every natural-response term decays exponentially → $\\int|h| < \\infty$ → BIBO stable.",
            "<b>Step 2 — Distractor audit.</b> 'Marginally stable' is reserved for simple poles ON the $j\\omega$-axis (sustained oscillation — bounded but not decaying); 'unstable' needs an RHP pole or repeated $j\\omega$-axis poles; 'insufficient information' — the pole map IS sufficient for causal LTI."
          ],
          a: "BIBO stable.",
          v: "The three-zone map to memorize: LHP = decay (stable), $j\\omega$-axis = sustained (marginal), RHP = growth (unstable). Discrete-time twin: inside / on / outside the unit circle — identical logic after the $z = e^{sT}$ mapping ✓."

        })
      },
      { q: "Differential equation $y' + 2y = x(t)$ has transfer function:",
        choices: ["$\\dfrac{1}{s+2}$", "$\\dfrac{s+2}{1}$", "$\\dfrac{1}{s-2}$", "$\\dfrac{s}{s+2}$"],
        correct: 0,
        solution: S({
          c: "From differential equation to transfer function in one move: Laplace-transform both sides with ZERO initial conditions (the TF convention), using $\\mathcal L\\{y'\\} = sY(s)$. Derivatives become multiplications by $s$ — that is the whole point of the transform.",
          s: [
            "<b>Step 1 — Transform.</b> $y' + 2y = x \\Rightarrow sY + 2Y = X$.",
            "<b>Step 2 — Factor and solve.</b> $(s+2)Y = X \\Rightarrow H(s) = \\dfrac{Y}{X} = \\dfrac{1}{s+2}$.",
            "<b>Step 3 — Distractor audit.</b> $(s+2)/1$ inverts the ratio (that maps output to input); $1/(s-2)$ flips the sign — an UNSTABLE system; $s/(s+2)$ adds a differentiator that the equation doesn't contain."
          ],
          a: "$H(s) = \\dfrac{1}{s+2}$",
          v: "Readback checks: pole at $s = -2$ ↔ natural response $e^{-2t}$ ↔ the homogeneous solution of the original ODE ✓; DC gain $H(0) = 1/2$ ↔ steady state of $y' + 2y = 1$ is $y = 1/2$ ✓."

        })
      },
      { q: "Convolution of $x(t) = \\delta(t-2)$ with $h(t)$ is:",
        choices: ["$h(t-2)$", "$h(t+2)$", "$h(t)\\delta(t-2)$", "$0$"],
        correct: 0,
        solution: S({
          c: "The impulse $\\delta(t)$ is the IDENTITY element of convolution: $h * \\delta = h$. A SHIFTED impulse therefore just shifts the partner: $h(t) * \\delta(t-a) = h(t-a)$ — the sifting property in action.",
          s: [
            "<b>Step 1 — Apply with a = 2.</b> $h(t)*\\delta(t-2) = h(t-2)$ — the impulse response, delayed 2 seconds.",
            "<b>Step 2 — See it from the integral.</b> $\\int h(\\tau)\\,\\delta(t-2-\\tau)\\,d\\tau$ — the delta 'sifts out' the single value $\\tau = t-2$, leaving $h(t-2)$.",
            "<b>Step 3 — Distractor audit.</b> $h(t+2)$ ADVANCES instead of delaying; $h(t)\\delta(t-2)$ is a PRODUCT, not a convolution — different operation; 0 would need orthogonal signals, not an impulse."
          ],
          a: "$h(t-2)$",
          v: "System interpretation: feeding an impulse at $t = 2$ into an LTI system yields the impulse response starting at $t = 2$ — time-invariance in its purest form ✓. Laplace check: $e^{-2s}\\cdot H(s) \\leftrightarrow h(t-2)$ — consistent with the time-shift theorem."

        })
      },
      { q: "A system has $H(s) = 10/(s^{2}+2s+10)$. Damping ratio $\\zeta$?",
        choices: ["$\\approx 0.316$", "$0.5$", "$1.0$", "$\\sqrt{10}$"],
        correct: 0,
        solution: S({
          c: "Match against the universal 2nd-order template $\\dfrac{\\omega_n^{2}}{s^{2} + 2\\zeta\\omega_n s + \\omega_n^{2}}$: the constant term gives the natural frequency, the middle term then yields the damping ratio.",
          s: [
            "<b>Step 1 — Natural frequency.</b> $\\omega_n^{2} = 10 \\Rightarrow \\omega_n = \\sqrt{10} \\approx 3.162$ rad/s.",
            "<b>Step 2 — Damping ratio.</b> $2\\zeta\\omega_n = 2 \\Rightarrow \\zeta = 1/\\omega_n = 1/\\sqrt{10} \\approx 0.316$.",
            "<b>Step 3 — Classify.</b> $0 < \\zeta < 1$: underdamped — oscillatory step response with visible overshoot.",
            "<b>Step 4 — Distractor audit.</b> 0.5 misreads the middle coefficient as $\\zeta$ directly; 1.0 assumes critical damping; $\\sqrt{10}$ is $\\omega_n$, not $\\zeta$."
          ],
          a: "$\\zeta \\approx 0.316$",
          v: "Consequence check: $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^{2}}} = e^{-1.05} \\approx 35\\%$ overshoot — a lightly damped response, consistent with the small ζ ✓. Poles: $s = -1 \\pm j3$ — real part $-\\zeta\\omega_n = -1$ ✓."

        })
      }
    ],

    // ====================== Ch 8: Signal Processing ======================
    8: [
      { q: "Sampling theorem: a signal band-limited to 8 kHz must be sampled at minimum:",
        choices: ["$16$ kHz", "$8$ kHz", "$32$ kHz", "$4$ kHz"],
        correct: 0,
        solution: S({
          c: "Sampling turns a continuous signal into snapshots taken $f_s$ times per second. The Nyquist-Shannon theorem says the snapshots capture EVERYTHING only if $f_s \\ge 2f_{max}$ — at least two samples per cycle of the fastest component; below that, high frequencies masquerade as low ones (aliasing).",
          s: [
            "<b>Step 1 — Apply.</b> $f_{max} = 8$ kHz → minimum $f_s = 2\\times8 = 16$ kHz (the Nyquist rate).",
            "<b>Step 2 — Why 2×.</b> A sinusoid needs at least one sample in each half-cycle to pin down its frequency; fewer, and a slower sinusoid fits the same samples exactly.",
            "<b>Step 3 — Distractor audit.</b> 8 kHz samples once per cycle (every sample identical — looks like DC); 4 kHz is worse; 32 kHz WORKS but is not the minimum asked."
          ],
          a: "$f_s = 16$ kHz minimum.",
          v: "Practice note: real designs sample a bit above Nyquist (e.g. 2.2×) so the anti-alias filter has room to roll off — that is exactly why CD audio uses 44.1 kHz for 20-kHz audio ✓."

        })
      },
      { q: "An 8-bit ADC has reference $V_{ref} = 5$ V. Step size (resolution)?",
        choices: ["$\\approx 19.5$ mV", "$\\approx 5$ mV", "$0.625$ V", "$1$ V"],
        correct: 0,
        solution: S({
          c: "An $n$-bit ADC slices its input range into $2^{n}$ equal steps. The step size (1 LSB — least significant bit) is $\\Delta = V_{ref}/2^{n}$: the smallest voltage change the converter can distinguish.",
          s: [
            "<b>Step 1 — Count the levels.</b> $2^{8} = 256$ steps.",
            "<b>Step 2 — Divide.</b> $\\Delta = 5/256 = 0.01953$ V $\\approx 19.5$ mV per LSB.",
            "<b>Step 3 — Distractor audit.</b> 5 mV would need ~10 bits; 0.625 V is $5/8$ (divided by the BIT COUNT, not $2^{8}$ — the classic error); 1 V has no route."
          ],
          a: "$\\Delta \\approx 19.5$ mV/LSB.",
          v: "Rule of thumb: each added bit halves the step. 10-bit → 4.9 mV, 12-bit → 1.22 mV at 5 V ✓. Quantization error sits within ±Δ/2 ≈ ±9.8 mV — the noise floor this converter can never beat."

        })
      },
      { q: "$z$-transform of $x[n] = a^{n}u[n]$:",
        choices: ["$\\dfrac{z}{z-a}$", "$\\dfrac{1}{1-a z}$", "$\\dfrac{z}{z+a}$", "$\\dfrac{1}{z-a}$"],
        correct: 0,
        solution: S({
          c: "The z-transform is the discrete-time cousin of Laplace: $X(z) = \\sum_n x[n]z^{-n}$. For the geometric sequence $a^{n}u[n]$ the sum is a geometric series — THE pair to memorize.",
          s: [
            "<b>Step 1 — Write the sum.</b> $X(z) = \\sum_{n=0}^{\\infty}a^{n}z^{-n} = \\sum_{n=0}^{\\infty}(a/z)^{n}$.",
            "<b>Step 2 — Sum the geometric series.</b> Converges when $|a/z| < 1$: $X(z) = \\dfrac{1}{1 - a/z} = \\dfrac{z}{z-a}$, with region of convergence $|z| > |a|$.",
            "<b>Step 3 — Distractor audit.</b> $1/(1-az)$ misplaces the $z$ (that is the transform written in $z^{-1}$ with the wrong sign pattern); $z/(z+a)$ flips the pole's sign (the sequence $(-a)^{n}$); $1/(z-a)$ is the pair for $a^{n-1}u[n-1]$."
          ],
          a: "$X(z) = \\dfrac{z}{z-a}$, ROC $|z| > |a|$.",
          v: "Spot check at $a = 0$: sequence becomes $\\delta[n]$, formula gives $z/z = 1$ ✓ (the transform of an impulse). Stability read: pole at $z = a$ — the sequence decays iff $|a| < 1$, i.e. pole inside the unit circle ✓."

        })
      },
      { q: "An FIR filter has 5 taps. Maximum number of complex multiplications per output sample?",
        choices: ["$5$", "$25$", "$10$", "$1$"],
        correct: 0,
        solution: S({
          c: "A direct-form FIR filter computes each output as a weighted sum of the last $N$ inputs: $y[n] = \\sum_{k=0}^{N-1}h[k]\\,x[n-k]$. Each tap (coefficient) costs exactly ONE multiplication per output sample.",
          s: [
            "<b>Step 1 — Count.</b> 5 taps × 1 multiply each = 5 multiplications (plus 4 additions) per output sample.",
            "<b>Step 2 — Distractor audit.</b> 25 squares the count ($N^{2}$ thinking — that is per-N-OUTPUTS reasoning misapplied); 10 doubles it; 1 ignores the sum structure."
          ],
          a: "5 multiplications per output sample.",
          v: "Scaling context: FIR cost is $O(N)$ per sample, so a 500-tap filter at 48 kHz needs 24 M multiplies/s — why long filters use FFT-based fast convolution instead. Symmetric (linear-phase) FIRs can also fold pairs to halve the multiplies — a common hardware trick ✓."

        })
      },
      { q: "DFT of $N$-point signal requires which number of complex multiplications using FFT?",
        choices: ["$\\tfrac{N}{2}\\log_2 N$", "$N^{2}$", "$N\\log N$", "$N$"],
        correct: 0,
        solution: S({
          c: "The DFT computed directly costs $N^{2}$ complex multiplications ($N$ outputs × $N$ terms each). The FFT (Cooley-Tukey, radix-2) reorganizes it into $\\log_2 N$ stages of $N/2$ 'butterfly' operations — total $(N/2)\\log_2 N$ multiplications.",
          s: [
            "<b>Step 1 — The structure.</b> Each stage pairs values into butterflies (one multiply each); there are $N/2$ butterflies per stage and $\\log_2 N$ stages.",
            "<b>Step 2 — Multiply out.</b> Total $= \\dfrac{N}{2}\\log_2 N$.",
            "<b>Step 3 — Distractor audit.</b> $N^{2}$ is the DIRECT DFT (what FFT avoids); $N\\log N$ is the loose 'big-O' rounding (right order, wrong constant for the exact count asked); $N$ is too cheap."
          ],
          a: "$\\dfrac{N}{2}\\log_2 N$ complex multiplications.",
          v: "Feel the win at $N = 1024$: direct $= 1024^{2} \\approx 10^{6}$; FFT $= 512\\times10 = 5120$ — a ~200× speedup, growing with N ✓. This single algorithm is why real-time spectrum analysis, OFDM (Wi-Fi/LTE), and MP3 are computationally possible."

        })
      },
      { q: "Aliasing in a sampled signal occurs when:",
        choices: [
          "Signal frequency exceeds $f_s/2$.",
          "Sample rate exceeds the Nyquist rate.",
          "ADC quantization is too fine.",
          "Anti-aliasing filter cutoff is below the signal bandwidth (this also causes attenuation, not aliasing)."
        ],
        correct: 0,
        solution: S({
          c: "Aliasing = a too-fast signal wearing a slow signal's disguise. Sampling at $f_s$ makes copies of the spectrum every $f_s$; any content above $f_s/2$ (the 'folding' frequency) lands on top of legitimate low frequencies and becomes indistinguishable from them.",
          s: [
            "<b>Step 1 — State the condition.</b> Aliasing occurs when the signal contains frequencies ABOVE $f_s/2$.",
            "<b>Step 2 — Where the alias lands.</b> A component at $f$ shows up at $|f - kf_s|$ — e.g. 7 kHz sampled at 10 kHz masquerades as 3 kHz.",
            "<b>Step 3 — Distractor audit.</b> Sampling ABOVE Nyquist is the cure, not the cause; fine quantization concerns amplitude, not frequency; a too-low anti-alias cutoff causes attenuation of wanted signal — annoying but not aliasing."
          ],
          a: "Signal frequency exceeds $f_s/2$.",
          v: "Everyday demonstration: wagon wheels spinning backwards on film — the wheel's spoke frequency exceeds half the 24 fps frame rate ✓. Defense: an analog low-pass (anti-alias) filter BEFORE the ADC; after sampling, the disguise is perfect and nothing can undo it."

        })
      },
      { q: "Discrete-time impulse response $h[n] = (1/2)^{n}u[n]$. System is stable because:",
        choices: [
          "$\\sum|h[n]| = 2$ (finite).",
          "$h[n]$ is causal.",
          "$h[n]$ is real-valued.",
          "$h[n]$ is monotonically decreasing."
        ],
        correct: 0,
        solution: S({
          c: "Discrete-time BIBO stability has one test: absolute summability, $\\sum_n|h[n]| < \\infty$. If the impulse response has finite total 'weight', a bounded input can only excite a bounded output.",
          s: [
            "<b>Step 1 — Sum the geometric series.</b> $\\sum_{n=0}^{\\infty}(1/2)^{n} = \\dfrac{1}{1 - 1/2} = 2$ — finite.",
            "<b>Step 2 — Conclude.</b> Absolutely summable → BIBO stable.",
            "<b>Step 3 — Why the other properties don't cut it.</b> Causality (B) is about WHEN the system responds, not how big; real-valuedness (C) is irrelevant to boundedness; monotone decrease (D) isn't sufficient — $1/(n+1)$ decreases monotonically yet sums to infinity (harmonic series)."
          ],
          a: "Because $\\sum|h[n]| = 2 < \\infty$.",
          v: "Pole view: $h[n] = (1/2)^{n}u[n] \\leftrightarrow z/(z-\\tfrac12)$, pole at $0.5$ inside the unit circle ✓ — the two stability tests always agree. Distractor (D)'s counterexample is worth keeping: monotone decay is NOT enough; it must decay fast enough to have finite area."

        })
      },
      { q: "FIR filter coefficients $\\{0.25, 0.5, 0.25\\}$ — what type of filter?",
        choices: ["Low-pass (averaging)", "High-pass", "Band-pass", "All-pass"],
        correct: 0,
        solution: S({
          c: "Read a small FIR's character from two frequency probes: DC gain $= \\sum h[k]$ (a constant input scaled by the coefficient sum) and Nyquist gain $= \\sum(-1)^{k}h[k]$ (response to the fastest alternation $+1,-1,+1,\\ldots$).",
          s: [
            "<b>Step 1 — DC probe.</b> $0.25 + 0.5 + 0.25 = 1$ → passes DC at full strength.",
            "<b>Step 2 — Nyquist probe.</b> $0.25 - 0.5 + 0.25 = 0$ → completely kills the fastest alternation.",
            "<b>Step 3 — Conclude.</b> Full pass at low frequency, null at high frequency, smooth in between ($|H| = 0.5 + 0.5\\cos\\omega$) — a low-pass, specifically a weighted moving AVERAGE (and averaging always smooths).",
            "<b>Step 4 — Distractor audit.</b> High-pass would need alternating-sign taps like $\\{-0.25, 0.5, -0.25\\}$; band-pass needs nulls at BOTH ends; all-pass needs $|H| = 1$ everywhere."
          ],
          a: "Low-pass (averaging) filter.",
          v: "Bonus property: symmetric coefficients → LINEAR phase → every frequency delayed equally (1 sample here) → no waveform distortion ✓. This $\\tfrac14(1,2,1)$ kernel is two 2-point averagers cascaded — the building block of binomial/Gaussian smoothing."

        })
      },
      { q: "Bilinear transform maps $s$-plane to $z$-plane via:",
        choices: [
          "$s = \\dfrac{2}{T}\\dfrac{z-1}{z+1}$",
          "$z = e^{sT}$",
          "$s = \\dfrac{z-1}{T}$",
          "$z = s + 1$"
        ],
        correct: 0,
        solution: S({
          c: "To build a digital (z-domain) filter from an analog (s-domain) prototype you need a map between the planes. The BILINEAR transform $s = \\dfrac{2}{T}\\cdot\\dfrac{z-1}{z+1}$ is the standard choice: it squeezes the ENTIRE left half s-plane into the unit circle one-to-one — so stability is preserved and nothing aliases.",
          s: [
            "<b>Step 1 — Identify the form.</b> $s = (2/T)(z-1)/(z+1)$ — a Möbius (bilinear) fraction, hence the name.",
            "<b>Step 2 — Know its price.</b> The infinite analog frequency axis gets compressed into the finite digital one, warping frequencies: $\\omega_a = (2/T)\\tan(\\omega_d T/2)$. Designers 'pre-warp' the critical frequency so the cutoff lands exactly right.",
            "<b>Step 3 — Distractor audit.</b> $z = e^{sT}$ is the EXACT map (impulse invariance) but many-to-one — it aliases; $s = (z-1)/T$ is the forward-Euler approximation (can map stable to unstable); $z = s+1$ is not a plane mapping at all."
          ],
          a: "$s = \\dfrac{2}{T}\\cdot\\dfrac{z-1}{z+1}$",
          v: "Sanity probes: $z = 1$ (digital DC) → $s = 0$ (analog DC) ✓; $z = -1$ (Nyquist) → $s \\to \\infty$ ✓ — the whole analog axis fits, which is exactly why nothing can fold over. Standard use: digitizing Butterworth/Chebyshev prototypes into IIR filters."

        })
      },
      { q: "An ideal LPF has zero phase. Practical FIR LPFs achieve linear phase if:",
        choices: [
          "Coefficients are symmetric (or antisymmetric).",
          "All coefficients are positive.",
          "Filter length is prime.",
          "Cutoff is below $f_s/4$."
        ],
        correct: 0,
        solution: S({
          c: "Linear phase means the filter delays EVERY frequency by the same time (constant group delay) — the waveform shape passes through undistorted. For FIR filters there is a clean structural guarantee: impulse-response SYMMETRY.",
          s: [
            "<b>Step 1 — The condition.</b> $h[k] = h[N-1-k]$ (symmetric) or $h[k] = -h[N-1-k]$ (antisymmetric) → phase is exactly linear, group delay $= (N-1)/2$ samples.",
            "<b>Step 2 — Why it works.</b> A symmetric kernel pairs each tap with its mirror; their phase contributions combine into a pure delay times a REAL amplitude function — no frequency-dependent phase twisting.",
            "<b>Step 3 — Distractor audit.</b> All-positive coefficients (e.g. $\\{0.5, 0.3, 0.2\\}$) need not be symmetric; prime length is numerology; cutoff below $f_s/4$ constrains the passband, not the phase."
          ],
          a: "Symmetric (or antisymmetric) coefficients.",
          v: "Why audio/data systems care: nonlinear phase smears transients (different frequencies of an edge arrive at different times). IIR filters can NEVER be exactly linear-phase (poles break the symmetry) — the big reason FIR survives despite costing more taps ✓."

        })
      }
    ],

    // ====================== Ch 9: Electronics ======================
    9: [
      { q: "Silicon diode with thermal voltage $V_T = 26$ mV, $I_S = 10$ fA. Find diode current at $V_D = 0.6$ V.",
        choices: ["$\\approx 107\\,\\mu$A", "$\\approx 0.107$ A", "$10\\,\\mu$A", "$1$ mA"],
        correct: 0,
        solution: S({
          c: "The Shockley equation describes a diode's exponential turn-on: $I_D = I_S\\left(e^{V_D/V_T} - 1\\right) \\approx I_S\\,e^{V_D/V_T}$ once $V_D$ is several times $V_T$. $I_S$ (the saturation current) is astronomically small — the exponential does all the lifting.",
          s: [
            "<b>Step 1 — Exponent.</b> $V_D/V_T = 0.6/0.026 = 23.08$.",
            "<b>Step 2 — Evaluate the exponential.</b> $e^{23.08} \\approx 1.07\\times10^{10}$.",
            "<b>Step 3 — Scale by $I_S$.</b> $I_D = (10\\times10^{-15})(1.07\\times10^{10}) = 1.07\\times10^{-4}$ A $= 107\\,\\mu$A.",
            "<b>Step 4 — Distractor audit.</b> 0.107 A is a 1000× decade slip (mA vs μA bookkeeping); 10 μA and 1 mA bracket the answer to punish loose estimation."
          ],
          a: "$I_D \\approx 107\\,\\mu$A",
          v: "The 60-mV/decade rule confirms the scale: current grows 10× for every ~60 mV of bias. From 0.6 V, adding 0.12 V (two decades) would give ~10 mA — consistent with a real diode hitting tens of mA around 0.7 V ✓."

        })
      },
      { q: "BJT in active region: $\\beta = 100$, $I_B = 20\\,\\mu$A. Find $I_C$.",
        choices: ["$2$ mA", "$200\\,\\mu$A", "$20$ mA", "$20\\,\\mu$A"],
        correct: 0,
        solution: S({
          c: "In the ACTIVE region a BJT is a current amplifier: a small base current controls a collector current $\\beta$ times larger — $I_C = \\beta I_B$. (Active requires the base-emitter junction forward biased and base-collector reverse biased.)",
          s: [
            "<b>Step 1 — Multiply.</b> $I_C = 100 \\times 20\\,\\mu\\text{A} = 2000\\,\\mu\\text{A} = 2$ mA.",
            "<b>Step 2 — Distractor audit.</b> 200 μA uses $\\beta = 10$; 20 mA uses $\\beta = 1000$; 20 μA forgets the amplification entirely."
          ],
          a: "$I_C = 2$ mA",
          v: "Completing the picture: $I_E = I_C + I_B = 2.02$ mA (KCL through the device) and $\\alpha = \\beta/(\\beta+1) = 0.990$ — the emitter carries everything, the base only 1% ✓. Caveat the FE tests: $I_C = \\beta I_B$ holds ONLY in active mode; in saturation $I_C$ is set by the external circuit instead."

        })
      },
      { q: "MOSFET (NMOS) in saturation: $V_{GS} = 3$ V, $V_t = 1$ V, $\\mu_n C_{ox}(W/L) = 1$ mA/V². Find $I_D$.",
        choices: ["$2$ mA", "$1$ mA", "$4$ mA", "$8$ mA"],
        correct: 0,
        solution: S({
          c: "A MOSFET in SATURATION acts as a voltage-controlled current source obeying the square law: $I_D = \\tfrac12\\mu_nC_{ox}\\dfrac{W}{L}(V_{GS}-V_t)^{2}$. The 'overdrive' $V_{OV} = V_{GS} - V_t$ is how far the gate is above threshold — the knob that sets the current.",
          s: [
            "<b>Step 1 — Overdrive.</b> $V_{OV} = 3 - 1 = 2$ V.",
            "<b>Step 2 — Square it.</b> $V_{OV}^{2} = 4$ V².",
            "<b>Step 3 — Evaluate.</b> $I_D = 0.5 \\times 1\\,\\text{mA/V}^{2} \\times 4 = 2$ mA.",
            "<b>Step 4 — Distractor audit.</b> 4 mA drops the ½; 1 mA forgets to square ($0.5\\times1\\times2$); 8 mA does both errors in the same direction."
          ],
          a: "$I_D = 2$ mA",
          v: "Region check (always verify!): saturation requires $V_{DS} \\ge V_{OV} = 2$ V — assumed by the problem statement ✓. Square-law feel: raising $V_{GS}$ to 4 V (overdrive 3) would give $4.5$ mA — current grows with the SQUARE, not linearly."

        })
      },
      { q: "Op-amp non-inverting amplifier: $R_f = 90$ kΩ, $R_g = 10$ kΩ (to ground). Gain $A_v$?",
        choices: ["$+10$", "$-10$", "$+9$", "$+11$"],
        correct: 0,
        solution: S({
          c: "Non-inverting amplifier: input drives the + terminal; feedback through $R_f$ and $R_g$ feeds a fraction of the output back to −. The feedback forces $V_- = V_+$ (virtual short), giving $A_v = 1 + \\dfrac{R_f}{R_g}$ — always at least 1, never inverting.",
          s: [
            "<b>Step 1 — Apply the formula.</b> $A_v = 1 + 90/10 = 1 + 9 = 10$.",
            "<b>Step 2 — Where it comes from.</b> The output divides through $R_f$-$R_g$; the − pin sees $V_{out}\\cdot\\dfrac{R_g}{R_g+R_f}$. Setting that equal to $V_{in}$: $V_{out} = V_{in}(R_g+R_f)/R_g = V_{in}(1 + R_f/R_g)$.",
            "<b>Step 3 — Distractor audit.</b> $+9$ forgets the '+1' (uses the INVERTING magnitude $R_f/R_g$); $-10$ wrong topology; $+11$ adds 1 to the wrong number ($90/10+1$ done as $90/(10-1)$-style slip)."
          ],
          a: "$A_v = +10$",
          v: "Boundary check: $R_f = 0$ (or $R_g = \\infty$) gives $A_v = 1$ — the unity-gain buffer, the formula's floor ✓. Perk vs the inverting cousin: input impedance is essentially infinite (signal enters the op-amp gate directly) — the reason this topology buffers sensors."

        })
      },
      { q: "Half-wave rectifier with ideal diode, sinusoidal source $V_m = 10$ V, load $R$. Average output voltage?",
        choices: ["$V_m/\\pi = 3.18$ V", "$V_m/2 = 5$ V", "$V_m = 10$ V", "$V_m\\sqrt{2}/\\pi$"],
        correct: 0,
        solution: S({
          c: "A half-wave rectifier passes only the positive half-cycles (the diode blocks the negative ones). Its DC (average) value integrates one positive hump over the WHOLE period: $V_{avg} = \\dfrac{1}{2\\pi}\\int_0^{\\pi}V_m\\sin\\theta\\,d\\theta = \\dfrac{V_m}{\\pi}$.",
          s: [
            "<b>Step 1 — Do the integral.</b> $\\int_0^{\\pi}\\sin\\theta\\,d\\theta = 2$, so $V_{avg} = \\dfrac{V_m\\cdot2}{2\\pi} = \\dfrac{V_m}{\\pi}$.",
            "<b>Step 2 — Evaluate.</b> $V_{avg} = 10/\\pi \\approx 3.18$ V.",
            "<b>Step 3 — Distractor audit.</b> $V_m/2 = 5$ V is a naive 'half of peak'; 10 V ignores rectification; $V_m\\sqrt2/\\pi$ garbles RMS into the average formula."
          ],
          a: "$V_{avg} \\approx 3.18$ V",
          v: "Consistency ladder: full-wave average $= 2V_m/\\pi = 6.37$ V — exactly double, because it fills in the missing half-cycles ✓. RMS companion (different quantity!): half-wave $V_{rms} = V_m/2 = 5$ V — note how distractor B is the RMS masquerading as the average."

        })
      },
      { q: "Common-emitter BJT amplifier with $R_C = 5$ kΩ, $I_C = 1$ mA, transconductance $g_m = I_C/V_T$. Voltage gain magnitude?",
        choices: ["$\\approx 192$", "$\\approx 50$", "$\\approx 5000$", "$\\approx 26$"],
        correct: 0,
        solution: S({
          c: "The common-emitter stage converts input voltage to collector current via transconductance $g_m = I_C/V_T$, then back to voltage across $R_C$: $|A_v| = g_mR_C$ (no emitter degeneration).",
          s: [
            "<b>Step 1 — Transconductance.</b> $g_m = 1\\,\\text{mA}/26\\,\\text{mV} = 38.5$ mA/V.",
            "<b>Step 2 — Multiply by the load.</b> $|A_v| = 0.0385 \\times 5000 = 192$.",
            "<b>Step 3 — Distractor audit.</b> 50 ≈ guessing $\\beta/2$; 5000 multiplies by $R_C$ without converting $g_m$ units; 26 echoes $V_T$ in mV."
          ],
          a: "$|A_v| \\approx 192$",
          v: "Slick shortcut: $g_mR_C = \\dfrac{I_CR_C}{V_T}$ = (DC voltage across $R_C$)/(26 mV) $= 5\\,\\text{V}/26\\,\\text{mV} \\approx 192$ ✓ — gain is just the bias drop measured in thermal-voltage units. Design note: adding emitter resistance $R_E$ tames this to $\\approx R_C/R_E$, trading gain for linearity and stability."

        })
      },
      { q: "Logical inverter (CMOS): static power dissipation in steady state is approximately:",
        choices: ["Near zero (only leakage)", "$V_{DD}^{2}/R$", "$V_{DD}\\cdot I_{avg}$", "Equal to dynamic power"],
        correct: 0,
        solution: S({
          c: "A CMOS inverter pairs a PMOS (pulls output HIGH) with an NMOS (pulls it LOW). In EITHER steady logic state, one of the two is fully OFF — so there is no conducting path from supply to ground, and essentially no static current.",
          s: [
            "<b>Step 1 — Trace each state.</b> Input LOW: NMOS off, PMOS on → output high, path blocked by the NMOS. Input HIGH: PMOS off → path blocked again. Either way: no DC current.",
            "<b>Step 2 — What remains.</b> Only leakage (subthreshold conduction, gate tunneling) — nano- to micro-watts per gate, the 'near zero' of the answer.",
            "<b>Step 3 — Distractor audit.</b> $V_{DD}^{2}/R$ describes a resistive divider (old NMOS-load logic, which is why CMOS replaced it); 'equal to dynamic' is wrong by orders of magnitude in steady state."
          ],
          a: "Near zero — only leakage current.",
          v: "The power that DOES matter is dynamic: $P = \\alpha C_LV_{DD}^{2}f$, burned only while switching — this is why CMOS conquered digital electronics, and why idle circuits clock-gate ✓. Modern caveat: at nm nodes leakage has crept back up to a significant fraction of total power — hence power gating."

        })
      },
      { q: "Zener diode shunt regulator: input 12 V, Zener $V_Z = 5.1$ V, $R_S$ chosen for $I_Z = 10$ mA at no load. Compute $R_S$.",
        choices: ["$690\\,\\Omega$", "$510\\,\\Omega$", "$120\\,\\Omega$", "$1\\,$ kΩ"],
        correct: 0,
        solution: S({
          c: "A Zener shunt regulator drops the excess input voltage across a series resistor $R_S$ while the Zener clamps the output at $V_Z$. With NO load, every milliamp through $R_S$ enters the Zener — so $R_S$ is chosen to set that current: $R_S = (V_{in} - V_Z)/I_Z$.",
          s: [
            "<b>Step 1 — Voltage across $R_S$.</b> $12 - 5.1 = 6.9$ V.",
            "<b>Step 2 — Divide by the design current.</b> $R_S = 6.9/0.010 = 690\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 510 Ω divides $V_Z$ by $I_Z$ (wrong voltage); 120 Ω uses 1.2 V somewhere; 1 kΩ rounds 12 V/10 mA (forgot to subtract $V_Z$)."
          ],
          a: "$R_S = 690\\,\\Omega$",
          v: "Power checks a designer must run: $P_{R_S} = 6.9\\times0.01 = 69$ mW; $P_Z = 5.1\\times0.01 = 51$ mW — small parts suffice ✓. Loaded operation: load current STEALS from the Zener ($I_Z = I_{R_S} - I_{load}$), so regulation holds only while $I_Z$ stays above the knee (~1-5 mA) — size $I_Z$ for the worst-case load."

        })
      },
      { q: "RC low-pass filter cutoff frequency $f_c$ for $R = 1$ kΩ, $C = 1\\,\\mu$F:",
        choices: ["$\\approx 159$ Hz", "$\\approx 1$ kHz", "$\\approx 1000\\,$rad/s", "$\\approx 16$ Hz"],
        correct: 0,
        solution: S({
          c: "A series-R, shunt-C divider passes low frequencies (capacitor looks open) and shunts high ones to ground (capacitor looks short). The crossover — where output falls to $1/\\sqrt2$ (−3 dB) — is at $f_c = \\dfrac{1}{2\\pi RC}$.",
          s: [
            "<b>Step 1 — RC product.</b> $RC = (10^{3})(10^{-6}) = 10^{-3}$ s.",
            "<b>Step 2 — Evaluate.</b> $f_c = \\dfrac{1}{2\\pi\\times10^{-3}} = 159$ Hz.",
            "<b>Step 3 — Distractor audit.</b> 1 kHz forgets the $2\\pi$ (that is $1/RC$ misread as Hz); 1000 rad/s is CORRECT in rad/s but the question asks Hz — unit discipline; 16 Hz is a decade slip."
          ],
          a: "$f_c \\approx 159$ Hz",
          v: "The rad/s vs Hz pair to lock in: $\\omega_c = 1/RC = 1000$ rad/s and $f_c = \\omega_c/2\\pi = 159$ Hz describe the SAME corner ✓. Behavior recap: below $f_c$ ≈ flat; above, −20 dB/decade; phase −45° exactly at $f_c$."

        })
      },
      { q: "Schmitt trigger is used to:",
        choices: [
          "Clean noisy edges via hysteresis.",
          "Amplify analog signals linearly.",
          "Generate a sinusoidal output.",
          "Multiply input frequency."
        ],
        correct: 0,
        solution: S({
          c: "Schmitt trigger has two thresholds (V_T+ and V_T−) — output stays in one state until input crosses the other threshold.",
          s: [
            "Hysteresis prevents multiple transitions on a slow or noisy edge.",
            "Common application: square up sensor outputs before logic gates."
          ],
          a: "Clean noisy edges via hysteresis.",
          v: "Hysteresis width = $V_{T+} - V_{T-}$ — must exceed peak-to-peak noise."
        })
      }
    ],

    // ====================== Ch 10: Power Systems ======================
    10: [
      { q: "Three-phase load: line voltage 480 V, line current 100 A, PF = 0.85 lagging. Real power?",
        choices: ["$\\approx 70.7$ kW", "$\\approx 40.8$ kW", "$\\approx 48$ kW", "$\\approx 83.1$ kW"],
        correct: 0,
        solution: S({
          c: "The one three-phase power formula that handles BOTH Y and Δ, using line quantities: $P = \\sqrt3\\,V_LI_L\\cos\\theta$. The $\\sqrt3$ comes from combining three phases' worth of power into line-level measurements; $\\cos\\theta$ (power factor) keeps only the REAL power.",
          s: [
            "<b>Step 1 — Plug in.</b> $P = 1.732 \\times 480 \\times 100 \\times 0.85$.",
            "<b>Step 2 — Evaluate in stages.</b> $1.732 \\times 480 = 831.4$; $\\times 100 = 83{,}140$ (this is $S$ in VA); $\\times 0.85 = 70{,}658$ W.",
            "<b>Step 3 — Distractor audit.</b> 40.8 kW drops $\\sqrt3$; 48 kW is $V\\times I\\times PF$ single-phase style; 83.1 kW is the APPARENT power $S$ (forgot the power factor)."
          ],
          a: "$P \\approx 70.7$ kW",
          v: "Triangle closure: $S = 83.1$ kVA, $Q = S\\sin\\theta = 83.1\\times0.527 = 43.8$ kVAR, and $\\sqrt{70.7^{2} + 43.8^{2}} = 83.1$ ✓ — P, Q, S form a right triangle, always."

        })
      },
      { q: "Power factor correction: load takes 100 kW at PF = 0.7 lagging. Capacitor kVAR to correct to PF = 0.95?",
        choices: ["$\\approx 69$ kVAR", "$\\approx 30$ kVAR", "$\\approx 100$ kVAR", "$\\approx 50$ kVAR"],
        correct: 0,
        solution: S({
          c: "Power-factor correction sizing: real power $P$ stays fixed; capacitors only remove reactive power $Q$. Since $Q = P\\tan\\theta$, the capacitor bank must supply the DIFFERENCE: $Q_C = P(\\tan\\theta_1 - \\tan\\theta_2)$.",
          s: [
            "<b>Step 1 — Initial reactive power.</b> $\\theta_1 = \\cos^{-1}0.7 = 45.6°$, $\\tan\\theta_1 = 1.020$ → $Q_1 = 100\\times1.020 = 102$ kVAR.",
            "<b>Step 2 — Target reactive power.</b> $\\theta_2 = \\cos^{-1}0.95 = 18.2°$, $\\tan\\theta_2 = 0.329$ → $Q_2 = 32.9$ kVAR.",
            "<b>Step 3 — Capacitor bank.</b> $Q_C = 102 - 32.9 \\approx 69$ kVAR.",
            "<b>Step 4 — Distractor audit.</b> 100 kVAR ≈ full correction to unity; 30 kVAR ≈ the residual $Q_2$ mistaken for the bank; 50 is a midpoint guess."
          ],
          a: "$Q_C \\approx 69$ kVAR",
          v: "Payoff check: apparent power falls from $100/0.7 = 142.9$ kVA to $100/0.95 = 105.3$ kVA — 26% less current through every transformer and feeder upstream ✓. Why stop at 0.95: utilities bill penalties below ~0.9-0.95, and over-correcting risks LEADING PF at light load."

        })
      },
      { q: "Ideal transformer: $N_1/N_2 = 10$. Primary voltage 2000 V (rms). Secondary voltage?",
        choices: ["$200$ V", "$20{,}000$ V", "$100$ V", "$2000$ V"],
        correct: 0,
        solution: S({
          c: "An ideal transformer is a voltage lever: voltage scales WITH the turns ratio ($V_1/V_2 = N_1/N_2$), current scales AGAINST it, and power passes through unchanged.",
          s: [
            "<b>Step 1 — Apply.</b> $V_2 = V_1\\cdot\\dfrac{N_2}{N_1} = \\dfrac{2000}{10} = 200$ V.",
            "<b>Step 2 — Distractor audit.</b> 20,000 V multiplies instead of divides (a step-UP misread); 100 V over-divides (ratio 20); 2000 V pretends 1:1."
          ],
          a: "$V_2 = 200$ V",
          v: "Power-balance check: with a load drawing $I_2 = 10$ A, $P_2 = 2$ kW; the primary draws $I_1 = 1$ A at 2000 V → $P_1 = 2$ kW ✓ — same power, traded between voltage and current. That trade IS the entire grid: step up to transmit (low current, low $I^{2}R$ loss), step down to use."

        })
      },
      { q: "Synchronous speed of a 4-pole machine at 60 Hz:",
        choices: ["$1800$ rpm", "$3600$ rpm", "$900$ rpm", "$1500$ rpm"],
        correct: 0,
        solution: S({
          c: "A 3-phase stator creates a rotating magnetic field. Its speed — the SYNCHRONOUS speed — depends only on supply frequency and pole count: $n_s = \\dfrac{120f}{P}$ rpm (the 120 = 60 s/min × 2, since each pole PAIR spans one electrical cycle).",
          s: [
            "<b>Step 1 — Plug in.</b> $n_s = \\dfrac{120\\times60}{4} = 1800$ rpm.",
            "<b>Step 2 — Distractor audit.</b> 3600 rpm is the 2-pole value; 900 rpm the 8-pole; 1500 rpm is the 4-pole answer at 50 Hz (Europe) — a units-of-frequency trap."
          ],
          a: "$n_s = 1800$ rpm",
          v: "The 60-Hz ladder worth memorizing: 2P→3600, 4P→1800, 6P→1200, 8P→900 rpm — halve and step. Synchronous machines turn at exactly $n_s$; induction motors run slightly BELOW it (slip) ✓."

        })
      },
      { q: "Induction motor slip $s = (n_s - n)/n_s$. If $n_s = 1800$ rpm and $n = 1764$ rpm, slip is:",
        choices: ["$2\\%$", "$10\\%$", "$0.02\\%$", "$5\\%$"],
        correct: 0,
        solution: S({
          c: "Slip measures how far an induction motor's rotor lags the rotating field, as a fraction: $s = \\dfrac{n_s - n}{n_s}$. Slip is WHY torque exists — rotor conductors must cut field lines to carry induced current.",
          s: [
            "<b>Step 1 — Slip speed.</b> $n_s - n = 1800 - 1764 = 36$ rpm.",
            "<b>Step 2 — Normalize.</b> $s = 36/1800 = 0.02 = 2\\%$.",
            "<b>Step 3 — Distractor audit.</b> 10% misreads 36/360; 0.02% forgets the percent conversion is already done; 5% is a plausibility decoy."
          ],
          a: "$s = 2\\%$",
          v: "Range check: full-load slip for standard induction motors runs 2-5%, no-load near 0.1-1% — 2% sits exactly in the full-load band ✓. Rotor frequency bonus: $f_r = sf = 0.02\\times60 = 1.2$ Hz — rotor currents are nearly DC at running speed."

        })
      },
      { q: "Per-unit system: a 100 MVA transformer with $X = 0.1$ pu has actual reactance on a 100 kV base of:",
        choices: ["$10\\,\\Omega$", "$1\\,\\Omega$", "$100\\,\\Omega$", "$1000\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "Per-unit values are fractions of a chosen base. To get back to real ohms: $Z_{actual} = Z_{pu}\\times Z_{base}$, where the impedance base is built from the voltage and power bases: $Z_{base} = V_{base}^{2}/S_{base}$.",
          s: [
            "<b>Step 1 — Impedance base.</b> $Z_{base} = \\dfrac{(100\\times10^{3})^{2}}{100\\times10^{6}} = \\dfrac{10^{10}}{10^{8}} = 100\\,\\Omega$.",
            "<b>Step 2 — Scale.</b> $Z = 0.1 \\times 100 = 10\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 100 Ω forgets to apply the pu value; 1 Ω and 1000 Ω are decade slips in $V^{2}/S$."
          ],
          a: "$X = 10\\,\\Omega$",
          v: "Reverse check: $10\\,\\Omega/100\\,\\Omega = 0.1$ pu ✓. Why engineers bother with pu: a transformer's pu impedance is the SAME from either side (the $V^{2}$ in $Z_{base}$ exactly cancels the turns-ratio-squared transformation) — multi-voltage networks collapse into one clean diagram."

        })
      },
      { q: "Transmission line short-circuit current at fault: source EMF 1.0 pu, source X = 0.1 pu, line X = 0.05 pu. Fault current?",
        choices: ["$\\approx 6.67$ pu", "$\\approx 10$ pu", "$\\approx 20$ pu", "$\\approx 1$ pu"],
        correct: 0,
        solution: S({
          c: "For a bolted three-phase fault, all the limiting happens in series reactances between the source and the fault: $I_f = \\dfrac{V_{pre}}{X_{total}}$ in per-unit.",
          s: [
            "<b>Step 1 — Total the series reactance.</b> $X = X_{src} + X_{line} = 0.1 + 0.05 = 0.15$ pu.",
            "<b>Step 2 — Divide.</b> $I_f = 1.0/0.15 = 6.67$ pu.",
            "<b>Step 3 — Distractor audit.</b> 10 pu uses the source X only; 20 pu uses the line X only; 1 pu forgets to divide."
          ],
          a: "$I_f \\approx 6.67$ pu",
          v: "Reading: fault current is 6.67× rated — breakers must interrupt it, conductors must survive it thermally until they do ✓. Location insight: a fault FARTHER down the line (more X in the path) draws LESS current — distance protection relays exploit exactly that."

        })
      },
      { q: "A single-phase transformer is rated 10 kVA, 240/120 V. Full-load primary current?",
        choices: ["$\\approx 41.7$ A", "$\\approx 83.3$ A", "$\\approx 100$ A", "$\\approx 10$ A"],
        correct: 0,
        solution: S({
          c: "A transformer's kVA rating is the apparent power it can carry continuously. Full-load current on each side is simply $I = S/V$ for single-phase — same $S$, different $V$, hence different currents.",
          s: [
            "<b>Step 1 — Primary current.</b> $I_1 = \\dfrac{10{,}000}{240} = 41.7$ A.",
            "<b>Step 2 — Secondary for context.</b> $I_2 = \\dfrac{10{,}000}{120} = 83.3$ A — distractor B is the SECONDARY current; read which side the question asks.",
            "<b>Step 3 — Distractor audit.</b> 100 A and 10 A are decade-ish slips with no consistent route."
          ],
          a: "$I_1 \\approx 41.7$ A",
          v: "Turns-ratio check: $I_2/I_1 = 83.3/41.7 = 2 = V_1/V_2$ ✓ — current ratio inverts the voltage ratio. Practical note: ratings use kVA (not kW) because the transformer's heating depends on CURRENT regardless of the load's power factor."

        })
      },
      { q: "Three-phase $\\Delta$-connected source: phase voltage 240 V. Line voltage?",
        choices: ["$240$ V", "$416$ V", "$139$ V", "$480$ V"],
        correct: 0,
        solution: S({
          c: "Connection geometry decides which quantities match: in a DELTA, each winding bridges two lines directly, so LINE voltage EQUALS phase voltage ($V_L = V_\\phi$); the $\\sqrt3$ shows up in the CURRENTS instead ($I_L = \\sqrt3 I_\\phi$).",
          s: [
            "<b>Step 1 — Apply the Δ rule.</b> $V_L = V_\\phi = 240$ V — no conversion needed.",
            "<b>Step 2 — Distractor audit.</b> 416 V applies the Y-rule ($\\sqrt3\\times240$) to a Δ; 139 V divides by $\\sqrt3$ (also Y-thinking, wrong direction); 480 V doubles for no reason."
          ],
          a: "$V_L = 240$ V",
          v: "The complete pairing to memorize: Y → $V_L = \\sqrt3V_\\phi$, $I_L = I_\\phi$; Δ → $V_L = V_\\phi$, $I_L = \\sqrt3I_\\phi$ — the $\\sqrt3$ always lands on exactly one of the two, never both ✓. Power comes out identical either way: $\\sqrt3V_LI_L\\cos\\theta$."

        })
      },
      { q: "A motor draws 50 A at 480 V (3φ) with 0.8 PF lagging. Real power?",
        choices: ["$\\approx 33.3$ kW", "$\\approx 24$ kW", "$\\approx 41.6$ kW", "$\\approx 60$ kW"],
        correct: 0,
        solution: S({
          c: "Same workhorse formula: $P = \\sqrt3\\,V_LI_L\\cos\\theta$ — line voltage, line current, power factor; works for any balanced three-phase load including motors.",
          s: [
            "<b>Step 1 — Plug in.</b> $P = 1.732\\times480\\times50\\times0.8$.",
            "<b>Step 2 — Evaluate.</b> $1.732\\times480 = 831.4$; $\\times50 = 41{,}570$ ($S$ in VA); $\\times0.8 = 33{,}255$ W.",
            "<b>Step 3 — Distractor audit.</b> 41.6 kW is the apparent power $S$ (skipped PF); 24 kW drops $\\sqrt3$ ($480\\times50\\times0.8\\div1000 = 19.2$... close-ish decoy family); 60 kW has no route."
          ],
          a: "$P \\approx 33.3$ kW",
          v: "Triangle: $S = 41.6$ kVA, $Q = S\\times0.6 = 24.9$ kVAR; $33.3^{2} + 24.9^{2} = 41.6^{2}$ ✓. Mechanical context: 33 kW ≈ 45 hp delivered (minus motor losses) — a mid-size industrial motor, sensible at 480 V/50 A."

        })
      }
    ],

    // ====================== Ch 11: Electromagnetics ======================
    11: [
      { q: "Coulomb force between two charges $Q_1 = 1\\,\\mu$C and $Q_2 = 2\\,\\mu$C separated by 10 cm in air:",
        choices: ["$1.8$ N", "$0.18$ N", "$18$ N", "$0.018$ N"],
        correct: 0,
        solution: S({
          c: "Coulomb's law — the gravitational law of charges: $F = k\\dfrac{|Q_1Q_2|}{r^{2}}$ with $k = \\dfrac{1}{4\\pi\\varepsilon_0} = 8.99\\times10^{9}$ N·m²/C². Double the distance → quarter the force.",
          s: [
            "<b>Step 1 — Charge product.</b> $Q_1Q_2 = (1\\times10^{-6})(2\\times10^{-6}) = 2\\times10^{-12}$ C².",
            "<b>Step 2 — Distance squared (in meters!).</b> $r = 10$ cm $= 0.1$ m → $r^{2} = 0.01$ m².",
            "<b>Step 3 — Assemble.</b> $F = \\dfrac{(8.99\\times10^{9})(2\\times10^{-12})}{0.01} = \\dfrac{1.8\\times10^{-2}}{10^{-2}} = 1.8$ N.",
            "<b>Step 4 — Distractor audit.</b> 0.18, 18, 0.018 N are all decade slips — usually from leaving $r$ in cm or mishandling the μC exponents."
          ],
          a: "$F \\approx 1.8$ N",
          v: "Scale feel: 1.8 N (~180 grams-force) from microcoulombs at hand distance — electrostatics is VIOLENTLY strong; we rarely notice only because matter stays neutral. Sign note: magnitude is the same whether the charges attract (opposite signs) or repel (same) ✓."

        })
      },
      { q: "Electric field due to a point charge $Q$ at distance $r$:",
        choices: ["$E = kQ/r^{2}$", "$E = kQ/r$", "$E = Q/r^{2}$", "$E = kQr$"],
        correct: 0,
        solution: S({
          c: "The electric field is force per unit test charge: $\\vec E = \\vec F/q_{test}$. Dividing Coulomb's law by $q_{test}$ leaves $E = \\dfrac{kQ}{r^{2}}$, pointing radially (outward for positive $Q$).",
          s: [
            "<b>Step 1 — Derive from Coulomb.</b> $F = kQq/r^{2}$ on a test charge $q$ → $E = F/q = kQ/r^{2}$.",
            "<b>Step 2 — Distractor audit.</b> $kQ/r$ is the POTENTIAL $V$ (one power of $r$ less — the classic mix-up); $Q/r^{2}$ drops the constant $k$; $kQr$ grows with distance — unphysical for a point source."
          ],
          a: "$E = kQ/r^{2}$",
          v: "Unit check: N/C = V/m ✓ (two names for the same field unit). The $1/r^{2}$ vs $1/r$ pairing to lock in: FIELD falls as $1/r^{2}$, POTENTIAL as $1/r$, and $E = -dV/dr$ connects them — differentiate $kQ/r$ and you get exactly $kQ/r^{2}$ ✓."

        })
      },
      { q: "Magnetic force on a conductor: $F = BIL\\sin\\theta$. For $B = 0.5$ T, $I = 10$ A, $L = 1$ m, $\\theta = 90°$:",
        choices: ["$5$ N", "$0.5$ N", "$10$ N", "$50$ N"],
        correct: 0,
        solution: S({
          c: "A current-carrying wire in a magnetic field feels the collective Lorentz force of its moving charges: $\\vec F = I\\vec L\\times\\vec B$, magnitude $F = BIL\\sin\\theta$ — maximal when wire ⊥ field, zero when parallel.",
          s: [
            "<b>Step 1 — Evaluate at θ = 90°.</b> $\\sin90° = 1$: $F = 0.5\\times10\\times1 = 5$ N.",
            "<b>Step 2 — Direction.</b> Right-hand rule: fingers along current, curl toward $\\vec B$, thumb gives $\\vec F$ — perpendicular to both.",
            "<b>Step 3 — Distractor audit.</b> 0.5 N drops the current decade; 10 N drops $B$; 50 N multiplies all three carelessly ($0.5\\times10\\times1 = 5$, not 50)."
          ],
          a: "$F = 5$ N",
          v: "Unit check: T·A·m = (V·s/m²)(A)(m) = W·s/m... cleanly, 1 T = 1 N/(A·m), so T·A·m = N ✓. This force is the operating principle of every motor and loudspeaker; its reciprocal twin (move the wire, get EMF) is every generator."

        })
      },
      { q: "Faraday’s law: induced EMF in a coil of 100 turns when flux changes from 0.01 to 0.05 Wb in 0.1 s:",
        choices: ["$-40$ V", "$-4$ V", "$-0.04$ V", "$40$ V"],
        correct: 0,
        solution: S({
          c: "Faraday's law: a CHANGING magnetic flux through a coil induces voltage, one contribution per turn: $\\mathcal E = -N\\dfrac{d\\Phi}{dt}$. The minus sign is Lenz's law — the induced current opposes the change that created it.",
          s: [
            "<b>Step 1 — Rate of flux change.</b> $\\dfrac{d\\Phi}{dt} = \\dfrac{0.05 - 0.01}{0.1} = 0.4$ Wb/s.",
            "<b>Step 2 — Scale by turns.</b> $\\mathcal E = -100\\times0.4 = -40$ V.",
            "<b>Step 3 — Distractor audit.</b> −4 V forgets the 100 turns; −0.04 V divides by them; +40 V drops Lenz's sign (the listed answer keeps the conventional negative)."
          ],
          a: "$\\mathcal E = -40$ V",
          v: "Sanity on the sign: flux is INCREASING, so the induced current circulates to push flux back DOWN (opposing) — that opposition is what the minus encodes; it is also why generators resist being turned under load ✓. Unit check: Wb/s = V by definition of the weber."

        })
      },
      { q: "Speed of light in vacuum: $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$. Approximate value:",
        choices: ["$3\\times 10^{8}$ m/s", "$3\\times 10^{6}$ m/s", "$3\\times 10^{10}$ m/s", "$3\\times 10^{5}$ m/s"],
        correct: 0,
        solution: S({
          c: "Maxwell's great unification: electromagnetic waves travel at $c = \\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$ — a speed built entirely from electric and magnetic constants. Computing it gives $3\\times10^{8}$ m/s — the measured speed of light, proving light IS an EM wave.",
          s: [
            "<b>Step 1 — Plug in the constants.</b> $\\mu_0 = 4\\pi\\times10^{-7}$ H/m, $\\varepsilon_0 = 8.854\\times10^{-12}$ F/m.",
            "<b>Step 2 — Multiply and root.</b> $\\mu_0\\varepsilon_0 = 1.113\\times10^{-17}$ → $\\sqrt{\\ } = 3.34\\times10^{-9}$ s/m.",
            "<b>Step 3 — Invert.</b> $c = 1/(3.34\\times10^{-9}) = 2.998\\times10^{8}$ m/s.",
            "<b>Step 4 — Distractor audit.</b> The wrong options are decade shifts; $3\\times10^{5}$ is km/s dressed as m/s."
          ],
          a: "$c \\approx 3\\times10^{8}$ m/s",
          v: "In a material the same formula picks up the relative constants: $v = c/\\sqrt{\\varepsilon_r\\mu_r}$ — e.g. glass ($\\varepsilon_r \\approx 2.25$) slows light to $2\\times10^{8}$ m/s, which IS the refractive index $n = 1.5$ ✓. Engineering feel: 30 cm per nanosecond — the ruler of high-speed PCB design."

        })
      },
      { q: "Characteristic impedance of free space:",
        choices: ["$377\\,\\Omega$", "$50\\,\\Omega$", "$75\\,\\Omega$", "$120\\pi\\,\\Omega$ — same as A"],
        correct: 0,
        solution: S({
          c: "A traveling EM wave carries E and H fields in a fixed ratio set by the medium: $\\eta = \\sqrt{\\mu/\\varepsilon}$. For vacuum: $\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} = 120\\pi \\approx 377\\,\\Omega$ — the 'impedance' space presents to a wave.",
          s: [
            "<b>Step 1 — Evaluate.</b> $\\sqrt{(4\\pi\\times10^{-7})/(8.854\\times10^{-12})} = \\sqrt{1.42\\times10^{5}} = 376.7\\,\\Omega$.",
            "<b>Step 2 — The exact form.</b> $\\eta_0 = \\mu_0c = 120\\pi\\,\\Omega$ — so choices A (377) and D ($120\\pi$) are THE SAME NUMBER; pick the listed standard form A.",
            "<b>Step 3 — Distractor audit.</b> 50 Ω and 75 Ω are CABLE impedances (coax geometry), not properties of space — a deliberate confusion of transmission-line $Z_0$ with wave impedance of a medium."
          ],
          a: "$\\eta_0 \\approx 377\\,\\Omega$ ($= 120\\pi$)",
          v: "Meaning check: for a plane wave in air, $|E|/|H| = 377$ — e.g. a 1-V/m field travels with $H = 2.65$ mA/m ✓. Antenna relevance: radiation resistance formulas are full of $120\\pi$ because the antenna must 'match into' this impedance of space."

        })
      },
      { q: "Boundary condition: tangential $E$-field at the surface between two perfect dielectrics is:",
        choices: ["Continuous (equal on both sides)", "Discontinuous", "Zero", "Infinite"],
        correct: 0,
        solution: S({
          c: "Where two materials meet, Maxwell's equations force matching rules on the fields. The four to memorize: tangential E continuous; tangential H continuous (no surface current); normal D continuous (no surface charge); normal B continuous — always.",
          s: [
            "<b>Step 1 — Apply to tangential E.</b> Across a charge-free dielectric-dielectric boundary: $E_{1t} = E_{2t}$ — CONTINUOUS, no exceptions for perfect dielectrics.",
            "<b>Step 2 — Why.</b> Faraday's law around a vanishingly thin loop straddling the surface: the loop encloses no changing flux in the limit, so the tangential components must cancel — i.e. match.",
            "<b>Step 3 — Distractor audit.</b> 'Discontinuous' describes the NORMAL E component (since $\\varepsilon_1E_{1n} = \\varepsilon_2E_{2n}$, normal E jumps when ε differs); 'zero' applies at a PERFECT CONDUCTOR surface, not a dielectric; 'infinite' is never a boundary value."
          ],
          a: "Continuous across the boundary.",
          v: "This pair of rules (tangential E continuous, normal E jumping) is exactly why light BENDS at an interface — Snell's law is the boundary conditions applied to a plane wave ✓. Conductor contrast worth keeping: at a perfect conductor, tangential E = 0, which is why fields meet metal walls at right angles."

        })
      },
      { q: "Capacitance of a parallel-plate capacitor doubles if:",
        choices: ["Plate area doubles (gap unchanged)", "Gap doubles", "Dielectric is removed", "Voltage doubles"],
        correct: 0,
        solution: S({
          c: "Parallel-plate capacitance is pure geometry and material: $C = \\dfrac{\\varepsilon A}{d}$ — proportional to plate area, inversely proportional to gap, scaled by the dielectric. Notably ABSENT: voltage.",
          s: [
            "<b>Step 1 — Test each option against the formula.</b> Double $A$ → $C$ doubles ✓ (twice the charge-storing surface at the same field).",
            "<b>Step 2 — The others.</b> Double $d$ → $C$ HALVES (weaker grip across a wider gap); removing a dielectric divides by $\\varepsilon_r$ → $C$ DROPS; doubling voltage changes the stored CHARGE ($Q = CV$), but $C$ itself doesn't budge — capacitance is a property of the device, not the operating point."
          ],
          a: "Plate area doubles (gap unchanged).",
          v: "Energy consequence: at fixed $V$, doubling $C$ doubles $W = \\tfrac12CV^{2}$ ✓. The voltage-independence is worth internalizing: a 10-μF capacitor is 10 μF at 1 V or 100 V — what changes with voltage is charge and energy, never the capacitance (ideal case)."

        })
      },
      { q: "A plane wave in air has wavelength 30 cm. Frequency?",
        choices: ["$1$ GHz", "$100$ MHz", "$10$ MHz", "$3$ GHz"],
        correct: 0,
        solution: S({
          c: "For any wave, speed = frequency × wavelength. EM waves in air travel at $c$, so $f = c/\\lambda$.",
          s: [
            "<b>Step 1 — Convert.</b> $\\lambda = 30$ cm $= 0.3$ m.",
            "<b>Step 2 — Divide.</b> $f = \\dfrac{3\\times10^{8}}{0.3} = 10^{9}$ Hz $= 1$ GHz.",
            "<b>Step 3 — Distractor audit.</b> 100 MHz and 10 MHz are decade slips (likely cm→m errors); 3 GHz multiplies by $c$'s mantissa twice."
          ],
          a: "$f = 1$ GHz",
          v: "Anchor pairs worth memorizing: 1 GHz ↔ 30 cm, 3 GHz ↔ 10 cm, 300 MHz ↔ 1 m — all from $\\lambda f = 3\\times10^{8}$ ✓. Context: 1 GHz sits among cellular bands; antenna sizing flows from this (λ/4 monopole at 1 GHz ≈ 7.5 cm — phone-sized, not coincidentally)."

        })
      },
      { q: "Skin depth $\\delta = \\sqrt{2/(\\omega\\mu\\sigma)}$ in copper at 60 Hz ($\\mu = \\mu_0$, $\\sigma = 5.8\\times 10^{7}$ S/m):",
        choices: ["$\\approx 8.5$ mm", "$\\approx 85$ mm", "$\\approx 0.85$ mm", "$\\approx 1$ cm"],
        correct: 0,
        solution: S({
          c: "AC currents do not fill a conductor uniformly — induced eddy fields push current toward the SURFACE. The skin depth $\\delta = \\sqrt{\\dfrac{2}{\\omega\\mu\\sigma}}$ is where current density has fallen to $1/e$ (37%); most current flows within a few δ of the surface.",
          s: [
            "<b>Step 1 — Angular frequency.</b> $\\omega = 2\\pi(60) = 377$ rad/s.",
            "<b>Step 2 — Build the denominator.</b> $\\omega\\mu\\sigma = 377 \\times (4\\pi\\times10^{-7}) \\times (5.8\\times10^{7}) = 2.75\\times10^{4}$.",
            "<b>Step 3 — Evaluate.</b> $\\delta = \\sqrt{2/2.75\\times10^{4}} = \\sqrt{7.28\\times10^{-5}} = 8.5$ mm.",
            "<b>Step 4 — Distractor audit.</b> 85 mm and 0.85 mm are square-root decade slips (forgetting that √ halves the exponent); 1 cm is a rounding decoy."
          ],
          a: "$\\delta \\approx 8.5$ mm at 60 Hz.",
          v: "Scaling check ($\\delta \\propto 1/\\sqrt f$): at 6 kHz → 0.85 mm; at 1 GHz → ~2 μm ✓ — why RF conductors are silver-plated (only the skin matters) and why high-current 60-Hz bus bars beyond ~1.5 cm thick waste copper in the middle (hence hollow/laminated designs)."

        })
      }
    ],

    // ====================== Ch 12: Control Systems ======================
    12: [
      { q: "Closed-loop transfer function for unity-feedback with $G(s) = 10/(s+1)$:",
        choices: ["$\\dfrac{10}{s+11}$", "$\\dfrac{10}{s+1}$", "$\\dfrac{1}{s+11}$", "$\\dfrac{10}{s+10}$"],
        correct: 0,
        solution: S({
          c: "Feedback wraps a loop around the plant: the output is fed back, subtracted from the reference, and the error drives $G$. For unity feedback the closed-loop transfer function is $T(s) = \\dfrac{G}{1+G}$ — the '1' in the denominator is the feedback path.",
          s: [
            "<b>Step 1 — Build $1 + G$.</b> $1 + \\dfrac{10}{s+1} = \\dfrac{s + 1 + 10}{s+1} = \\dfrac{s+11}{s+1}$.",
            "<b>Step 2 — Divide.</b> $T = \\dfrac{10/(s+1)}{(s+11)/(s+1)} = \\dfrac{10}{s+11}$ — the $(s+1)$ factors cancel.",
            "<b>Step 3 — Distractor audit.</b> $10/(s+1)$ is the OPEN loop unchanged; $1/(s+11)$ loses the gain; $10/(s+10)$ forgets the '+1' from the feedback sum."
          ],
          a: "$T(s) = \\dfrac{10}{s+11}$",
          v: "What feedback bought: the pole moved from $-1$ to $-11$ — the closed-loop system responds 11× faster (τ from 1 s to 91 ms); DC gain dropped from 10 to $10/11 \\approx 0.91$. Speed for gain — feedback's classic trade ✓."

        })
      },
      { q: "Steady-state error for a step input on a Type-0 system with $K_p = 10$:",
        choices: ["$1/11$", "$0$", "$\\infty$", "$1/10$"],
        correct: 0,
        solution: S({
          c: "System TYPE = number of pure integrators ($1/s$ factors) in the open loop. Type 0 has none, so a step input leaves a permanent error: $e_{ss} = \\dfrac{1}{1 + K_p}$, where $K_p = \\lim_{s\\to0}G(s)$ is the position constant.",
          s: [
            "<b>Step 1 — Plug in.</b> $e_{ss} = \\dfrac{1}{1+10} = \\dfrac{1}{11} \\approx 9.1\\%$.",
            "<b>Step 2 — Why the error persists.</b> With no integrator, holding a nonzero output requires a nonzero error feeding it — the system settles where error × gain = output needed.",
            "<b>Step 3 — Distractor audit.</b> 0 would need Type 1 (an integrator accumulates until error vanishes); $\\infty$ is Type 0's RAMP error; $1/10$ forgets the '+1'."
          ],
          a: "$e_{ss} = 1/11$",
          v: "Knob check: raising $K_p$ shrinks the error ($K_p = 100$ → 1%) but never zeroes it, and high gain erodes stability margins — the structural fix is adding an integrator (PI control), which changes the TYPE ✓."

        })
      },
      { q: "Bode plot of $G(s) = 100/(s+10)$ DC gain (dB):",
        choices: ["$20$ dB", "$10$ dB", "$40$ dB", "$0$ dB"],
        correct: 0,
        solution: S({
          c: "Bode plots graph gain in DECIBELS: $\\text{dB} = 20\\log_{10}|G|$. The DC gain is just $|G(0)|$ converted: every factor of 10 in gain = 20 dB.",
          s: [
            "<b>Step 1 — Evaluate at DC.</b> $G(0) = 100/10 = 10$.",
            "<b>Step 2 — Convert.</b> $20\\log_{10}10 = 20$ dB.",
            "<b>Step 3 — Distractor audit.</b> 40 dB would be gain 100 (forgot the denominator's 10); 10 dB confuses the gain value with its dB; 0 dB is gain 1."
          ],
          a: "DC gain $= 20$ dB.",
          v: "Sketch check: flat at +20 dB out to the corner at $\\omega = 10$ rad/s, then −20 dB/decade. One decade later ($\\omega = 100$): $|G| = 100/\\sqrt{10100} \\approx 1 = 0$ dB — fell exactly 20 dB in one decade ✓. dB anchors: ×10 = +20 dB, ×2 ≈ +6 dB, $1/\\sqrt2$ = −3 dB."

        })
      },
      { q: "Routh–Hurwitz: characteristic polynomial $s^{3} + 4s^{2} + 5s + 2 = 0$ — system is:",
        choices: ["Stable", "Unstable", "Marginally stable", "Oscillatory"],
        correct: 0,
        solution: S({
          c: "Routh-Hurwitz tests stability WITHOUT solving for roots: build the Routh array from the polynomial's coefficients; the system is stable iff every entry in the FIRST COLUMN is positive (each sign change = one right-half-plane root).",
          s: [
            "<b>Step 1 — Seed rows from coefficients.</b> $s^{3}$ row: 1, 5 (odd-position coefficients); $s^{2}$ row: 4, 2 (even-position).",
            "<b>Step 2 — Compute the $s^{1}$ entry.</b> Cross-multiply pattern: $\\dfrac{4(5) - 1(2)}{4} = \\dfrac{18}{4} = 4.5$.",
            "<b>Step 3 — Last row.</b> $s^{0}$: 2 (the constant term carries down).",
            "<b>Step 4 — Read the column.</b> $1, 4, 4.5, 2$ — all positive, zero sign changes → no RHP roots → STABLE."
          ],
          a: "Stable.",
          v: "Root check (factorable here): $s^{3}+4s^{2}+5s+2 = (s+1)^{2}(s+2)$ — roots $-1, -1, -2$, all LHP ✓. Reminder of why Routh matters: for higher orders, all-positive coefficients alone do NOT guarantee stability — the array is the real test."

        })
      },
      { q: "Phase margin definition:",
        choices: [
          "$180° + \\angle G(j\\omega_{gc})$, where $\\omega_{gc}$ is gain crossover.",
          "Frequency at which $|G| = 1$.",
          "$180° - \\angle G(j\\omega_{pc})$.",
          "Gain at phase $= -180°$."
        ],
        correct: 0,
        solution: S({
          c: "A feedback loop turns unstable when the loop gain reaches magnitude 1 at phase $-180°$ (the feedback becomes perfectly self-reinforcing). PHASE MARGIN measures the safety distance in phase at the frequency where the magnitude crosses 1.",
          s: [
            "<b>Step 1 — Find gain crossover.</b> $\\omega_{gc}$: the frequency where $|G(j\\omega)| = 1$ (0 dB).",
            "<b>Step 2 — Measure the margin.</b> PM $= 180° + \\angle G(j\\omega_{gc})$ — how many more degrees of lag the loop could absorb before hitting $-180°$. Positive PM → stable.",
            "<b>Step 3 — Distractor audit.</b> (B) defines the crossover FREQUENCY, not the margin; (C) plugs in the phase-crossover frequency — that belongs to GAIN margin; (D) describes gain margin's ingredient."
          ],
          a: "PM $= 180° + \\angle G(j\\omega_{gc})$ at the gain-crossover frequency.",
          v: "The companion to keep straight: GAIN margin = how much extra gain fits before instability, measured at the PHASE crossover ($\\angle G = -180°$). Design targets: PM 45-60° gives well-damped responses (rough map: $\\zeta \\approx$ PM/100) ✓."

        })
      },
      { q: "PID controller transfer function:",
        choices: ["$K_p + K_i/s + K_d s$", "$K_p s + K_i + K_d/s$", "$K_p/s$", "$K_p K_i K_d$"],
        correct: 0,
        solution: S({
          c: "PID = the workhorse controller: three corrective actions in PARALLEL, each fixing a different weakness. Proportional ($K_p$) reacts to the present error; Integral ($K_i/s$) accumulates the past, erasing steady-state error; Derivative ($K_ds$) anticipates the future, damping overshoot.",
          s: [
            "<b>Step 1 — Sum the three paths.</b> $C(s) = K_p + \\dfrac{K_i}{s} + K_ds$ — parallel branches add.",
            "<b>Step 2 — Distractor audit.</b> Option B swaps the roles ($K_ps + K_i$...) — integral must be $1/s$ (accumulation), derivative must be $s$ (rate); $K_p/s$ alone is just an integrator; a product $K_pK_iK_d$ is meaningless structurally.",
            "<b>Step 3 — Practical footnote.</b> Real derivative terms are filtered — $\\dfrac{K_ds}{\\tau s+1}$ — because a pure $s$ amplifies high-frequency noise without bound."
          ],
          a: "$C(s) = K_p + K_i/s + K_ds$",
          v: "Role-by-role check against time response: P alone leaves offset; adding I removes offset but can slow/overshoot; adding D restores damping — the standard tuning story (and why PI and PID cover most industrial loops) ✓."

        })
      },
      { q: "Pole at $s = +2$ in a closed-loop system means:",
        choices: ["Unstable", "Stable", "Marginally stable", "Critically damped"],
        correct: 0,
        solution: S({
          c: "Each pole $s = p$ contributes a term $e^{pt}$ to the response. A pole with POSITIVE real part means a growing exponential — the definition of instability.",
          s: [
            "<b>Step 1 — Translate the pole.</b> $s = +2$ → response contains $e^{2t}$, doubling roughly every 0.35 s — diverges.",
            "<b>Step 2 — Conclude.</b> One RHP pole is enough: the system is UNSTABLE no matter how well-behaved the other poles are.",
            "<b>Step 3 — Distractor audit.</b> 'Marginally stable' is poles ON the imaginary axis (sustained oscillation); 'critically damped' describes a REPEATED negative-real pole — opposite half-plane."
          ],
          a: "Unstable.",
          v: "Context that makes it concrete: an inverted pendulum's linearized model has exactly such a RHP pole — physically, it falls over unless feedback actively catches it. Feedback design's whole job here is dragging that pole into the left half-plane ✓."

        })
      },
      { q: "A first-order system $G(s) = K/(\\tau s + 1)$ has time constant determined by:",
        choices: ["$\\tau$ (the denominator coefficient)", "$K$", "$K\\tau$", "$1/K$"],
        correct: 0,
        solution: S({
          c: "The standard first-order form $G(s) = \\dfrac{K}{\\tau s+1}$ separates two independent properties: $K$ = how MUCH the output eventually moves (DC gain); $\\tau$ = how FAST it gets there (time constant).",
          s: [
            "<b>Step 1 — Read the step response.</b> $y(t) = K(1 - e^{-t/\\tau})$ — the exponential's clock is $\\tau$, nothing else.",
            "<b>Step 2 — Milestones.</b> $t = \\tau$: 63.2% of the way; $3\\tau$: 95%; $5\\tau$: 99% (settled).",
            "<b>Step 3 — Distractor audit.</b> $K$ scales the final VALUE, not the speed; $K\\tau$ and $1/K$ mix the two properties."
          ],
          a: "$\\tau$ — the coefficient multiplying $s$ in the denominator.",
          v: "Frequency-domain twin: bandwidth $\\omega_b = 1/\\tau$ — fast systems (small τ) are wide-band, slow systems narrow-band; the time and frequency views are reciprocals of each other ✓. Pole location: $s = -1/\\tau$."

        })
      },
      { q: "State-space form $\\dot x = Ax + Bu$, $y = Cx + Du$. The system is controllable if:",
        choices: [
          "Controllability matrix $[B,\\ AB,\\ A^{2}B,\\ \\ldots,\\ A^{n-1}B]$ has rank $n$.",
          "$A$ is invertible.",
          "$B$ is positive.",
          "$D = 0$."
        ],
        correct: 0,
        solution: S({
          c: "Controllability asks: can the input $u(t)$ steer the state $x$ anywhere in state space? Kalman's rank test answers it algebraically: build $\\mathcal C = [B\\ \\ AB\\ \\ A^{2}B\\ \\cdots\\ A^{n-1}B]$ and check whether it has full rank $n$.",
          s: [
            "<b>Step 1 — What the columns mean.</b> $B$ is where the input pushes directly; $AB$ is where that push propagates after the dynamics act once; higher powers reach deeper. Together they span every direction the input can influence.",
            "<b>Step 2 — The test.</b> rank $\\mathcal C = n$ (full) → every state direction reachable → controllable. Rank deficit → some mode is beyond the input's reach.",
            "<b>Step 3 — Distractor audit.</b> Invertible $A$ is about the dynamics, not the input's reach; '$B$ positive' is not a meaningful condition; $D$ is the direct feedthrough — irrelevant to steering states."
          ],
          a: "Controllability matrix $[B\\ AB\\ \\cdots\\ A^{n-1}B]$ has rank $n$.",
          v: "Why engineers care: pole placement (choosing closed-loop dynamics freely) is possible IF AND ONLY IF the system is controllable. The mirror concept: OBSERVABILITY uses the dual matrix built from $C$ and $A$ — can the sensor SEE every mode ✓."

        })
      },
      { q: "Root-locus starts (at $K = 0$) from:",
        choices: ["Open-loop poles", "Open-loop zeros", "Origin", "Infinity"],
        correct: 0,
        solution: S({
          c: "The root locus traces the closed-loop poles as the gain $K$ sweeps from 0 to ∞. The characteristic equation $1 + KG = 0$ explains both ends: at $K = 0$ it reduces to the open-loop POLES; as $K\\to\\infty$ the closed-loop poles migrate to the open-loop ZEROS (or off to infinity).",
          s: [
            "<b>Step 1 — Evaluate at K = 0.</b> $1 + KG = 0$ becomes 'denominator of G = 0' — the open-loop poles. Branches START there.",
            "<b>Step 2 — The journey.</b> Number of branches = number of poles; excess branches (poles minus zeros) head to infinity along asymptotes at angles $(2k+1)180°/(P-Z)$.",
            "<b>Step 3 — Distractor audit.</b> Zeros are the DESTINATION, not the start; origin and infinity are special locations, not general starting points."
          ],
          a: "At the open-loop poles.",
          v: "Worked micro-example: $G = 1/[s(s+2)]$ — locus starts at $0$ and $-2$, the branches meet at $-1$ and split vertically; at $K = 5$ the poles sit at $-1\\pm j2$ ✓ (matching the earlier closed-loop computation). The plot IS gain-tuning made visible."

        })
      }
    ],

    // ====================== Ch 13: Communications ======================
    13: [
      { q: "AM signal: $s(t) = [1 + m\\cos(\\omega_m t)]\\cos(\\omega_c t)$. With $m = 0.5$, modulation index is:",
        choices: ["$0.5$ (50%)", "$1.0$ (100%)", "$50$", "$0.25$"],
        correct: 0,
        solution: S({
          c: "Amplitude modulation rides the message on the carrier's ENVELOPE: $s(t) = [1 + m\\cos\\omega_mt]\\cos\\omega_ct$. The modulation index $m$ is how deeply the message swings the envelope — from $(1-m)$ to $(1+m)$ times the carrier amplitude.",
          s: [
            "<b>Step 1 — Read it off.</b> The given form is already standard: $m = 0.5$ → 50% modulation; envelope swings between 0.5 and 1.5 of the carrier.",
            "<b>Step 2 — Why $m \\le 1$ matters.</b> Over-modulation ($m > 1$) pinches the envelope through zero — phase reversals corrupt simple envelope detection.",
            "<b>Step 3 — Distractor audit.</b> 100% would need $m = 1$; '50' confuses percent with the index value; 0.25 squares it for no reason."
          ],
          a: "$m = 0.5$ (50% modulation).",
          v: "Power breakdown at $m = 0.5$: total $= P_c(1 + m^{2}/2) = 1.125P_c$ — sidebands (the only part carrying information) hold just 11% of transmitted power. That inefficiency is AM's price for dirt-cheap envelope-detector receivers ✓."

        })
      },
      { q: "FM modulation index $\\beta = \\Delta f/f_m$. With $\\Delta f = 75$ kHz, $f_m = 15$ kHz:",
        choices: ["$5$", "$0.2$", "$1125$", "$15$"],
        correct: 0,
        solution: S({
          c: "In FM the message wiggles the carrier's FREQUENCY, not its amplitude. The modulation index compares the peak frequency swing to the message rate: $\\beta = \\Delta f/f_m$.",
          s: [
            "<b>Step 1 — Divide.</b> $\\beta = 75/15 = 5$ — wideband FM (β ≫ 1).",
            "<b>Step 2 — Bandwidth payoff (Carson).</b> $B = 2(\\beta+1)f_m = 2(6)(15) = 180$ kHz.",
            "<b>Step 3 — Distractor audit.</b> 0.2 inverts the ratio; 1125 multiplies; 15 echoes $f_m$."
          ],
          a: "$\\beta = 5$",
          v: "Recognize the numbers: $\\Delta f = 75$ kHz and $f_m = 15$ kHz are exactly the US broadcast-FM standard, and the 180-kHz Carson bandwidth fits the 200-kHz channel spacing with guard band ✓. Why bother with wideband: FM trades bandwidth for noise immunity — SNR improves ~$\\beta^{2}$ over AM."

        })
      },
      { q: "Information capacity (Shannon): bandwidth 4 kHz, SNR = 30 dB. Channel capacity?",
        choices: ["$\\approx 39.9$ kbps", "$\\approx 12$ kbps", "$\\approx 120$ kbps", "$\\approx 4$ kbps"],
        correct: 0,
        solution: S({
          c: "Shannon-Hartley sets the speed limit of any channel: $C = B\\log_2(1 + \\text{SNR})$ bits/s — no modulation or coding scheme can beat it. Convert dB to LINEAR before the logarithm.",
          s: [
            "<b>Step 1 — Convert SNR.</b> 30 dB → $10^{30/10} = 1000$.",
            "<b>Step 2 — Bits per second per Hz.</b> $\\log_2(1001) \\approx 9.97$ bits/s/Hz.",
            "<b>Step 3 — Scale by bandwidth.</b> $C = 4000 \\times 9.97 \\approx 39.9$ kbps.",
            "<b>Step 4 — Distractor audit.</b> 12 kbps ≈ uses 30 (dB) as the linear SNR ($\\log_2 31 \\approx 5$); 120 kbps ≈ 30 × B; 4 kbps echoes the bandwidth."
          ],
          a: "$C \\approx 39.9$ kbps",
          v: "History check: this IS the telephone line ($B = 4$ kHz, ~30 dB) — and dial-up modems plateaued at 33.6 kbps analog, brushing the Shannon ceiling; '56k' worked only by skipping one analog conversion ✓. Per 10 dB of SNR you gain ~3.3 bits/s/Hz."

        })
      },
      { q: "PSK with M = 4 (QPSK). Bits per symbol:",
        choices: ["$2$", "$1$", "$4$", "$\\log_2 16 = 4$"],
        correct: 0,
        solution: S({
          c: "M-ary modulation packs bits into symbols: with $M$ distinct symbols (here 4 phase angles), each symbol selects one of $M$ patterns → $\\log_2M$ bits per symbol.",
          s: [
            "<b>Step 1 — Apply.</b> $\\log_2 4 = 2$ bits/symbol (the four phases map to 00, 01, 11, 10).",
            "<b>Step 2 — Distractor audit.</b> 1 bit is BPSK ($M = 2$); 4 bits would need $M = 16$ (16-PSK/16-QAM) — note distractor D even shows $\\log_216 = 4$, the right formula applied to the wrong M."
          ],
          a: "2 bits per symbol.",
          v: "Throughput consequence: at the same symbol rate, QPSK carries 2× BPSK's bit rate in the SAME bandwidth, at (ideally) the same energy per bit — the rare free lunch, which is why QPSK is everywhere from satellites to LTE ✓. Beyond M=4, the constellation points crowd: more bits/symbol but more SNR needed."

        })
      },
      { q: "Noise figure: amplifier $G = 20$ dB, $NF = 3$ dB. Input SNR = 30 dB, output SNR is:",
        choices: ["$27$ dB", "$33$ dB", "$53$ dB", "$30$ dB"],
        correct: 0,
        solution: S({
          c: "Every real amplifier adds noise of its own. NOISE FIGURE quantifies the damage: $NF = \\dfrac{SNR_{in}}{SNR_{out}}$ in linear terms — or, beautifully simple in dB: $SNR_{out} = SNR_{in} - NF$.",
          s: [
            "<b>Step 1 — Subtract in dB.</b> $SNR_{out} = 30 - 3 = 27$ dB.",
            "<b>Step 2 — Note what gain does NOT do.</b> The 20-dB gain amplifies signal AND noise together — it cannot restore the SNR already lost; it never enters this calculation.",
            "<b>Step 3 — Distractor audit.</b> 33 dB adds NF (wrong direction — noise never helps); 53 dB adds the gain; 30 dB pretends the amplifier is noiseless."
          ],
          a: "$SNR_{out} = 27$ dB",
          v: "Physical meaning of NF = 3 dB: the amplifier adds as much noise as was already there (doubles the noise power). System design consequence (Friis cascade formula): the FIRST stage's NF dominates the whole receiver — why a low-noise amplifier (LNA) sits right at the antenna ✓."

        })
      },
      { q: "Bit error rate (BER) for BPSK with $E_b/N_0 = 10$ dB approximately:",
        choices: ["$\\approx 3.9\\times 10^{-6}$", "$10^{-2}$", "$10^{-12}$", "$0.1$"],
        correct: 0,
        solution: S({
          c: "$E_b/N_0$ — energy per bit over noise density — is digital comms' universal quality axis. For BPSK the bit-error rate is $P_b = Q\\!\\left(\\sqrt{2E_b/N_0}\\right)$, where $Q(x)$ is the Gaussian tail probability.",
          s: [
            "<b>Step 1 — Convert dB to linear.</b> $10$ dB → $10$.",
            "<b>Step 2 — Argument of Q.</b> $\\sqrt{2\\times10} = \\sqrt{20} = 4.47$.",
            "<b>Step 3 — Tail value.</b> $Q(4.47) \\approx 3.9\\times10^{-6}$ — about four errors per million bits.",
            "<b>Step 4 — Distractor audit.</b> $10^{-2}$ belongs near 4 dB; $10^{-12}$ near 14 dB; 0.1 is sub-0-dB territory — the options test whether you can place yourself on the BER waterfall."
          ],
          a: "$P_b \\approx 3.9\\times10^{-6}$",
          v: "Waterfall steepness: in this region every +1 dB cuts BER by ~an order of magnitude (compare $10^{-5}$ at ~9.6 dB) — tiny link improvements buy huge error reductions ✓. BPSK/QPSK share this curve per-bit; coding (LDPC/turbo) shifts it several dB left toward the Shannon limit."

        })
      },
      { q: "TDM vs. FDM: which uses time slots to multiplex users?",
        choices: ["TDM", "FDM", "Both", "Neither"],
        correct: 0,
        solution: S({
          c: "Two classic ways to share one channel among many users: slice TIME or slice FREQUENCY. TDM (time-division multiplexing) gives each user the FULL band for a short recurring slot; FDM gives each user a NARROW band all the time.",
          s: [
            "<b>Step 1 — Match the question.</b> 'Time slots' is the literal definition of TDM.",
            "<b>Step 2 — Concrete anchors.</b> TDM: T-1 carrier — 24 voice channels take turns 8000 times/s. FDM: broadcast radio/cable TV — stations parked at different frequencies simultaneously.",
            "<b>Step 3 — Distractor audit.</b> FDM is the frequency-slicing dual; 'both' and 'neither' dodge the definition."
          ],
          a: "TDM.",
          v: "Modern synthesis worth knowing: OFDM (Wi-Fi, LTE, 5G) slices BOTH ways — many subcarriers (frequency) × symbol intervals (time) — and schedulers assign users tiles in that 2-D grid (OFDMA) ✓. CDMA adds a third axis: codes."

        })
      },
      { q: "Frequency reuse factor of 7 in cellular means:",
        choices: [
          "Same frequencies repeat every 7 cells.",
          "Bandwidth divided by 7.",
          "7 users per cell.",
          "7 antennas per tower."
        ],
        correct: 0,
        solution: S({
          c: "Cellular's founding idea: the same frequencies can serve MANY cities' worth of users if reused at a safe distance. The reuse (cluster) factor $N$ = how many adjacent cells share out the full spectrum before the pattern repeats.",
          s: [
            "<b>Step 1 — Decode N = 7.</b> The spectrum is split among 7 neighboring cells; cell #8 (one cluster away) reuses cell #1's channels.",
            "<b>Step 2 — The geometry guarantee.</b> Co-channel cells sit $D = R\\sqrt{3N} = 4.58R$ apart — far enough that interference stays tolerable.",
            "<b>Step 3 — Distractor audit.</b> 'Bandwidth ÷ 7' is the per-cell SHARE, not the meaning of reuse; '7 users/cell' and '7 antennas' are numerology."
          ],
          a: "The same frequencies repeat every 7 cells.",
          v: "The capacity trade: smaller $N$ → each cell gets more spectrum → more capacity, but co-channel cells move closer → more interference. Evolution check: LTE/5G run $N = 1$ (every cell uses everything) and manage the interference actively — the old trade-off attacked with signal processing ✓."

        })
      },
      { q: "DSB-SC AM: $s(t) = m(t)\\cos(\\omega_c t)$. Spectrum compared to standard AM:",
        choices: [
          "No carrier component, 50% power saving.",
          "Wider bandwidth.",
          "Lower bandwidth.",
          "Identical to AM."
        ],
        correct: 0,
        solution: S({
          c: "Standard AM transmits a big carrier tone PLUS two sidebands — but the carrier carries NO information. DSB-SC (double-sideband, suppressed carrier) deletes it: $s(t) = m(t)\\cos\\omega_ct$ — same sidebands, no carrier line in the spectrum.",
          s: [
            "<b>Step 1 — Spectrum comparison.</b> Both occupy the same bandwidth ($2f_m$, two sidebands); DSB-SC just lacks the carrier spike — so 'wider/lower bandwidth' are out.",
            "<b>Step 2 — Power accounting.</b> In standard AM at full modulation, the carrier eats at least 2/3 of the power; suppressing it saves ~50% or more for the same sideband strength.",
            "<b>Step 3 — The price.</b> Envelope detection no longer works (the envelope is $|m(t)|$, not $m(t)$); the receiver must regenerate the carrier in phase — coherent (synchronous) detection."
          ],
          a: "No carrier component — ~50% power saving, same bandwidth.",
          v: "The family tree to keep: AM (carrier + 2 SB, cheapest receiver) → DSB-SC (2 SB, saves power) → SSB (1 SB, saves power AND half the bandwidth, hardest receiver) — each step trades receiver complexity for efficiency ✓."

        })
      },
      { q: "PCM bit rate: voice band 0–4 kHz, sampled at 8 kHz, quantized 8 bits/sample. Bit rate:",
        choices: ["$64$ kbps", "$32$ kbps", "$8$ kbps", "$128$ kbps"],
        correct: 0,
        solution: S({
          c: "PCM (pulse-code modulation) digitizes voice in two steps — sample, then quantize — and the bit rate is simply their product: $R = f_s \\times n$.",
          s: [
            "<b>Step 1 — Verify the sampling rate.</b> 4-kHz voice band → Nyquist minimum $2\\times4 = 8$ kHz ✓ (the standard choice).",
            "<b>Step 2 — Multiply.</b> $R = 8000 \\times 8 = 64$ kbps.",
            "<b>Step 3 — Distractor audit.</b> 32 kbps halves the sampling rate; 8 kbps is samples/s alone; 128 kbps doubles (stereo thinking)."
          ],
          a: "$R = 64$ kbps — the classic DS0 channel.",
          v: "Hierarchy check: T-1 = 24 × 64k + 8k framing = 1.544 Mbps; E-1 = 32 × 64k = 2.048 Mbps — telephone infrastructure is built in multiples of exactly this number ✓. G.711 (μ-law/A-law) still encodes calls this way."

        })
      }
    ],

    // ====================== Ch 14: Computer Networks ======================
    14: [
      { q: "OSI layer responsible for routing packets between networks:",
        choices: ["Network (Layer 3)", "Data Link (Layer 2)", "Transport (Layer 4)", "Physical (Layer 1)"],
        correct: 0,
        solution: S({
          c: "OSI 7-layer model — Network layer handles logical addressing and routing.",
          s: [
            "Network (L3): IP, ICMP — routing.",
            "Data Link (L2): MAC addresses, switching within a LAN.",
            "Transport (L4): TCP/UDP — end-to-end communication."
          ],
          a: "Network (Layer 3).",
          v: "Routers operate at L3; switches at L2."
        })
      },
      { q: "Subnet mask /24 in CIDR notation corresponds to:",
        choices: ["$255.255.255.0$", "$255.0.0.0$", "$255.255.0.0$", "$0.0.0.255$"],
        correct: 0,
        solution: S({
          c: "CIDR /n means n bits of network prefix.",
          s: [
            "/24 = 24 ones = 11111111.11111111.11111111.00000000 = 255.255.255.0.",
            "Hosts available: $2^{8} - 2 = 254$ (subtract network and broadcast addresses)."
          ],
          a: "$255.255.255.0$",
          v: "/16 = 255.255.0.0 (65,534 hosts), /8 = 255.0.0.0 (16M hosts)."
        })
      },
      { q: "TCP vs UDP: which provides reliable, ordered delivery?",
        choices: ["TCP", "UDP", "Both", "Neither"],
        correct: 0,
        solution: S({
          c: "TCP is connection-oriented with acknowledgments, sequence numbers, retransmission.",
          s: [
            "TCP: handshake (SYN-SYN/ACK-ACK), reliable, ordered, flow control.",
            "UDP: connectionless, best-effort, low overhead — good for streaming, DNS."
          ],
          a: "TCP.",
          v: "QUIC (HTTP/3 transport) is built on UDP but adds TCP-like reliability in userspace."
        })
      },
      { q: "Default port for HTTPS:",
        choices: ["443", "80", "22", "8080"],
        correct: 0,
        solution: S({
          c: "Well-known ports under 1024 are reserved for standard services.",
          s: [
            "HTTP = 80, HTTPS = 443, SSH = 22, FTP = 21, DNS = 53."
          ],
          a: "443.",
          v: "Browsers default to 443 for HTTPS; 8080 is a common alternative HTTP port."
        })
      },
      { q: "Bandwidth-delay product for 1 Gbps link with 50 ms RTT:",
        choices: ["$50$ Mbit (≈6.25 MB)", "$1$ Mbit", "$1$ kbit", "$50$ Gbit"],
        correct: 0,
        solution: S({
          c: "BDP = bandwidth × RTT — amount of data ‘in flight’ in a fully utilized pipe.",
          s: [
            "$BDP = 10^{9} \\times 0.05 = 5\\times 10^{7}$ bits = 50 Mbit = 6.25 MB."
          ],
          a: "50 Mbit (~6.25 MB).",
          v: "TCP window must be ≥ BDP to fully utilize the link; default 64 KB window is too small for long-fat-network links."
        })
      },
      { q: "CSMA/CD is used by:",
        choices: ["Legacy half-duplex Ethernet", "Wi-Fi", "Token Ring", "ATM"],
        correct: 0,
        solution: S({
          c: "Carrier Sense Multiple Access with Collision Detection — listen before transmit, abort on collision.",
          s: [
            "Used by 10/100 Mbps Ethernet on shared coax/hub.",
            "Modern switched full-duplex Ethernet doesn’t need CSMA/CD (no collisions).",
            "Wi-Fi uses CSMA/CA (collision avoidance) since detection isn’t feasible wirelessly."
          ],
          a: "Legacy half-duplex Ethernet.",
          v: "Switches with full-duplex links eliminate collision domains entirely."
        })
      },
      { q: "Hamming distance between codewords 10110 and 11011:",
        choices: ["$3$", "$2$", "$5$", "$1$"],
        correct: 0,
        solution: S({
          c: "Hamming distance = number of differing bit positions.",
          s: [
            "Position 1: 1=1 ✓; pos 2: 0≠1 ✗; pos 3: 1=0 ✗; pos 4: 1=1 ✓; pos 5: 0≠1 ✗.",
            "3 differences."
          ],
          a: "3.",
          v: "Minimum Hamming distance $d_{min}$ determines error-correcting capability: $\\lfloor(d_{min}-1)/2\\rfloor$ errors correctable."
        })
      },
      { q: "DNS query goes from client to:",
        choices: ["Recursive resolver, then root/TLD/auth servers", "Web server directly", "Default gateway", "ISP modem"],
        correct: 0,
        solution: S({
          c: "DNS uses a hierarchical resolution: client → recursive resolver → root → TLD → authoritative.",
          s: [
            "Resolver caches answers to reduce upstream queries (TTL-based).",
            "Common resolvers: 8.8.8.8 (Google), 1.1.1.1 (Cloudflare)."
          ],
          a: "Recursive resolver, then hierarchy.",
          v: "DNSSEC adds cryptographic authentication to prevent spoofing."
        })
      },
      { q: "MAC address is how many bits?",
        choices: ["$48$", "$32$", "$64$", "$128$"],
        correct: 0,
        solution: S({
          c: "Ethernet MAC address: 48 bits (6 bytes), often written as hex e.g. 00:1A:2B:3C:4D:5E.",
          s: [
            "First 3 bytes: OUI (manufacturer).",
            "Last 3 bytes: device-specific."
          ],
          a: "48 bits.",
          v: "IPv4: 32 bits. IPv6: 128 bits. Don’t confuse MAC with IP addressing."
        })
      },
      { q: "An IPv4 packet header is at minimum how many bytes?",
        choices: ["20", "60", "8", "40"],
        correct: 0,
        solution: S({
          c: "IPv4 header: 20–60 bytes (5–15 words of 32 bits).",
          s: [
            "Minimum: 5 words × 4 bytes = 20 bytes (no options).",
            "Maximum with options: 60 bytes."
          ],
          a: "20 bytes.",
          v: "IPv6 fixed header is 40 bytes (no options field, extension headers instead)."
        })
      }
    ],

    // ====================== Ch 15: Digital Systems ======================
    15: [
      { q: "Convert binary 1101.011 to decimal:",
        choices: ["$13.375$", "$13.75$", "$11.375$", "$13.3$"],
        correct: 0,
        solution: S({
          c: "Binary positional value: $\\sum b_i\\cdot 2^{i}$, with negative powers for fractional bits.",
          s: [
            "Integer 1101 = 8+4+0+1 = 13.",
            "Fraction .011 = 0/2 + 1/4 + 1/8 = 0.25 + 0.125 = 0.375.",
            "Total: 13.375."
          ],
          a: "13.375.",
          v: "Quick check: 1101 binary obviously bigger than 1100 (12), so 13 is in the right ballpark."
        })
      },
      { q: "Two’s complement of 8-bit binary 00010110:",
        choices: ["11101010", "11101001", "10010110", "00010111"],
        correct: 0,
        solution: S({
          c: "Two’s complement = bitwise NOT then add 1 — represents the negative.",
          s: [
            "00010110 → invert → 11101001 → +1 → 11101010.",
            "Verify: 00010110 = +22 decimal; -22 in 8-bit two’s complement is 234 in unsigned = 11101010 ✓."
          ],
          a: "11101010.",
          v: "Sum check: 00010110 + 11101010 = 100000000 (carry-out, lower 8 bits zero) — confirms it’s the negative."
        })
      },
      { q: "Simplify Boolean expression: $\\overline{AB} + AB$",
        choices: ["$1$", "$A + B$", "$\\overline{A} + B$", "$0$"],
        correct: 0,
        solution: S({
          c: "Tautology: $X + \\overline X = 1$ for any logical expression $X$.",
          s: [
            "Let $X = AB$. Then $\\overline{AB} + AB = \\overline X + X = 1$."
          ],
          a: "$1$.",
          v: "Truth table: any combination of A,B gives 1 ✓."
        })
      },
      { q: "Truth table for XOR (A⊕B): output is 1 when:",
        choices: ["A ≠ B (exactly one is 1)", "Both A and B are 1", "Both A and B are 0", "A = B"],
        correct: 0,
        solution: S({
          c: "XOR (exclusive OR) outputs 1 when inputs differ.",
          s: [
            "A=0,B=0: 0; A=0,B=1: 1; A=1,B=0: 1; A=1,B=1: 0.",
            "$A\\oplus B = A\\overline B + \\overline A B$."
          ],
          a: "A ≠ B.",
          v: "Used in parity generators, comparators, and CRC computations."
        })
      },
      { q: "Number of distinct inputs to a function of 4 Boolean variables:",
        choices: ["$16$", "$8$", "$4$", "$32$"],
        correct: 0,
        solution: S({
          c: "$2^{n}$ rows in truth table for $n$ binary variables.",
          s: [
            "$2^{4} = 16$."
          ],
          a: "16.",
          v: "Number of distinct $n$-variable Boolean functions: $2^{2^{n}} = 2^{16} = 65536$ for $n=4$."
        })
      },
      { q: "Setup time violation in a flip-flop occurs when:",
        choices: [
          "Data changes too close to (before) the clock edge.",
          "Data changes too long before clock edge.",
          "Clock skew is zero.",
          "Hold time exceeds setup time."
        ],
        correct: 0,
        solution: S({
          c: "Setup time $t_{su}$ is the minimum time data must be stable BEFORE the clock edge.",
          s: [
            "If data arrives later than $t_{clk} - t_{su}$, flip-flop may enter metastable state.",
            "Fix: reduce combinational delay, increase clock period, or pipeline."
          ],
          a: "Data changes too close to clock edge (within $t_{su}$ window).",
          v: "Hold time $t_h$ is the minimum time data must remain stable AFTER the clock edge."
        })
      },
      { q: "Number of bits needed to address $4$ K words of memory:",
        choices: ["$12$", "$4$", "$10$", "$1024$"],
        correct: 0,
        solution: S({
          c: "Address bits $n$ satisfies $2^{n} \\geq$ number of locations.",
          s: [
            "$4\\text{K} = 4096 = 2^{12}$.",
            "Need $n = 12$ bits."
          ],
          a: "12 bits.",
          v: "Each additional bit doubles addressable memory: $2^{20}$ = 1 M, $2^{30}$ = 1 G, $2^{32}$ = 4 G."
        })
      },
      { q: "K-map simplification of $F(A,B,C) = \\sum m(0,2,4,6)$:",
        choices: ["$\\overline C$", "$\\overline A\\overline C$", "$\\overline B\\overline C$", "$ABC$"],
        correct: 0,
        solution: S({
          c: "All minterms have C=0 (even-indexed in standard ordering ABC: 000, 010, 100, 110).",
          s: [
            "Each minterm has bit 0 (C) = 0.",
            "Other variables (A, B) take all combinations → don’t cares.",
            "Simplifies to $\\overline C$."
          ],
          a: "$F = \\overline C$.",
          v: "Truth table: $F$ is 1 whenever C=0, regardless of A,B — exactly $\\overline C$."
        })
      },
      { q: "A 3-bit synchronous counter has how many states?",
        choices: ["$8$", "$3$", "$6$", "$16$"],
        correct: 0,
        solution: S({
          c: "$2^{n}$ states with $n$ flip-flops.",
          s: [
            "$2^{3} = 8$ states (000 to 111)."
          ],
          a: "8 states.",
          v: "Modulo-N counter resets early (e.g., mod-6 uses 3 FFs but cycles through 6 states)."
        })
      },
      { q: "Difference between latch and flip-flop:",
        choices: [
          "Latch is level-sensitive, flip-flop is edge-triggered.",
          "Latch is faster.",
          "Flip-flop has more outputs.",
          "They are identical."
        ],
        correct: 0,
        solution: S({
          c: "Latch transparently passes data when enable is asserted (level). Flip-flop changes only on clock edge.",
          s: [
            "D-latch: $Q$ follows $D$ while CLK = 1, holds when CLK = 0.",
            "D flip-flop: $Q$ captures $D$ only on rising (or falling) edge."
          ],
          a: "Latch level-sensitive; flip-flop edge-triggered.",
          v: "Sequential ASIC design prefers edge-triggered flip-flops for simpler timing analysis."
        })
      }
    ],

    // ====================== Ch 16: Computer Systems ======================
    16: [
      { q: "Cache hit ratio is 0.95, hit time 1 ns, miss penalty 100 ns. Effective access time?",
        choices: ["$\\approx 6$ ns", "$1$ ns", "$100$ ns", "$\\approx 50$ ns"],
        correct: 0,
        solution: S({
          c: "Effective access time $= \\text{hit time} + \\text{miss rate}\\times\\text{miss penalty}$.",
          s: [
            "Miss rate = 1 - 0.95 = 0.05.",
            "EAT = 1 + 0.05×100 = 1 + 5 = 6 ns."
          ],
          a: "$\\approx 6$ ns.",
          v: "Without cache: 100 ns per access. Cache improvement factor $\\approx 16\\times$."
        })
      },
      { q: "Pipelining: a 5-stage pipeline with stage time 2 ns processes 1000 instructions in approximately:",
        choices: ["$\\approx 2008$ ns", "$10{,}000$ ns", "$5000$ ns", "$2$ ms"],
        correct: 0,
        solution: S({
          c: "Pipeline time $= (N + k - 1)\\cdot t_{stage}$, where $N$ = instructions, $k$ = stages.",
          s: [
            "$T = (1000 + 5 - 1) \\times 2 = 1004 \\times 2 = 2008$ ns."
          ],
          a: "2008 ns.",
          v: "Ideal pipeline speedup approaches $k=5$ for large $N$; here 5000/2008 ≈ 2.49× speedup over non-pipelined."
        })
      },
      { q: "Number of registers an 8-bit ISA can directly reference with a 3-bit register field:",
        choices: ["$8$", "$3$", "$256$", "$16$"],
        correct: 0,
        solution: S({
          c: "$2^{n}$ items addressable with $n$ bits.",
          s: [
            "$2^{3} = 8$ registers (R0–R7)."
          ],
          a: "8 registers.",
          v: "RISC ISAs commonly use 5-bit register fields (32 registers) — better compiler register allocation."
        })
      },
      { q: "Virtual memory page size 4 KB. Address split for 32-bit address:",
        choices: ["20-bit VPN + 12-bit offset", "16-bit VPN + 16-bit offset", "12-bit VPN + 20-bit offset", "4-bit VPN + 28-bit offset"],
        correct: 0,
        solution: S({
          c: "Page size $2^{p}$ bytes → offset is $p$ bits; remaining bits select page.",
          s: [
            "4 KB = $2^{12}$ → 12 offset bits.",
            "32 - 12 = 20 VPN bits."
          ],
          a: "20-bit VPN + 12-bit offset.",
          v: "Page table size: $2^{20}$ entries × 4 bytes/entry = 4 MB per process — why multi-level page tables are used."
        })
      },
      { q: "Direct-mapped cache with 16 lines and 64-byte lines. For 32-bit address, tag bits:",
        choices: ["$22$", "$26$", "$10$", "$4$"],
        correct: 0,
        solution: S({
          c: "Address split: tag | index | block offset.",
          s: [
            "Block offset: $\\log_2 64 = 6$ bits.",
            "Index: $\\log_2 16 = 4$ bits.",
            "Tag: $32 - 6 - 4 = 22$ bits."
          ],
          a: "22 tag bits.",
          v: "Set-associative cache reuses the same address split with index choosing the set."
        })
      },
      { q: "Amdahl’s law: if 80% of code is parallelizable, maximum speedup with ∞ processors?",
        choices: ["$5\\times$", "$10\\times$", "$80\\times$", "$1.25\\times$"],
        correct: 0,
        solution: S({
          c: "Speedup $= 1/[(1-f) + f/P]$ where $f$ is parallel fraction, $P$ is processor count.",
          s: [
            "As $P\\to\\infty$: speedup $\\to 1/(1-f) = 1/0.2 = 5$."
          ],
          a: "$5\\times$.",
          v: "Bottleneck is the 20% serial portion; need to reduce that fraction to scale further."
        })
      },
      { q: "RISC vs CISC: RISC instructions typically:",
        choices: [
          "Fixed-length, simple, single-cycle, register-to-register.",
          "Variable-length, complex, multi-cycle.",
          "Use only memory operands.",
          "Are slower than CISC."
        ],
        correct: 0,
        solution: S({
          c: "RISC philosophy: simple instructions executed at high frequency, easier to pipeline.",
          s: [
            "Examples: MIPS, ARM, RISC-V.",
            "CISC: x86 — variable length, microcoded, but heavily pipelined internally."
          ],
          a: "Fixed-length, simple, single-cycle.",
          v: "Modern x86 cores decode CISC into RISC-like micro-ops internally."
        })
      },
      { q: "Big-endian byte order stores most significant byte at:",
        choices: [
          "Lowest memory address.",
          "Highest memory address.",
          "Doesn’t matter.",
          "In reverse on every other byte."
        ],
        correct: 0,
        solution: S({
          c: "Endianness affects multi-byte representation.",
          s: [
            "Big-endian: MSB at low address (network byte order, IBM, SPARC).",
            "Little-endian: LSB at low address (x86, ARM by default)."
          ],
          a: "Lowest address.",
          v: "Network protocols use big-endian — htonl/ntohl functions convert."
        })
      },
      { q: "DMA controller’s primary advantage:",
        choices: [
          "Transfer data without CPU intervention per byte.",
          "Increases clock speed.",
          "Reduces memory size needed.",
          "Eliminates need for buses."
        ],
        correct: 0,
        solution: S({
          c: "Direct Memory Access offloads block I/O transfers from CPU.",
          s: [
            "CPU initiates DMA, then continues other work.",
            "DMA controller arbitrates bus and signals interrupt on completion."
          ],
          a: "Free CPU during bulk transfer.",
          v: "Modern PCIe uses bus-mastering DMA for high-throughput peripherals (NVMe SSDs, GPUs)."
        })
      },
      { q: "MIPS performance metric for a 2 GHz CPU executing 1.5 IPC (instructions per cycle):",
        choices: ["$3000$ MIPS", "$1500$ MIPS", "$2000$ MIPS", "$750$ MIPS"],
        correct: 0,
        solution: S({
          c: "MIPS = $f_{clk}\\text{ (MHz)} \\times IPC$.",
          s: [
            "$f_{clk} = 2000$ MHz, $IPC = 1.5$ ⇒ MIPS = 3000."
          ],
          a: "3000 MIPS.",
          v: "Modern CPUs achieve higher IPC via superscalar/out-of-order execution; SPECint is more meaningful than raw MIPS."
        })
      }
    ],

    // ====================== Ch 17: Software Engineering ======================
    17: [
      { q: "Big-O complexity of binary search on a sorted array of $n$ items:",
        choices: ["$O(\\log n)$", "$O(n)$", "$O(n^{2})$", "$O(1)$"],
        correct: 0,
        solution: S({
          c: "Each comparison halves the search range.",
          s: [
            "Maximum comparisons $= \\lceil\\log_2 n\\rceil$.",
            "For $n = 10^{6}$: only ~20 comparisons!"
          ],
          a: "$O(\\log n)$.",
          v: "Requires sorted input; building/maintaining sort is $O(n\\log n)$ — amortize over many queries."
        })
      },
      { q: "Hash-table operations average-case complexity:",
        choices: ["$O(1)$ amortized", "$O(\\log n)$", "$O(n)$", "$O(n^{2})$"],
        correct: 0,
        solution: S({
          c: "Hashing provides constant-time average lookup, given good hash function and adequate table size.",
          s: [
            "Worst case (all collisions): $O(n)$ for a chained table.",
            "Modern implementations resize dynamically and use cryptographic-quality hashes."
          ],
          a: "$O(1)$ amortized.",
          v: "Java HashMap, Python dict, C++ unordered_map all rely on this property."
        })
      },
      { q: "Stack data structure follows:",
        choices: ["LIFO (last in, first out)", "FIFO (first in, first out)", "Random access", "Priority order"],
        correct: 0,
        solution: S({
          c: "Stack: push to top, pop from top — last item pushed is first popped.",
          s: [
            "Used for function call frames, undo histories, expression evaluation."
          ],
          a: "LIFO.",
          v: "FIFO describes a queue. Both have $O(1)$ push/pop with proper implementation."
        })
      },
      { q: "Merge sort time complexity:",
        choices: ["$O(n\\log n)$", "$O(n)$", "$O(n^{2})$", "$O(\\log n)$"],
        correct: 0,
        solution: S({
          c: "Divide-and-conquer: $\\log n$ levels, $O(n)$ merge per level.",
          s: [
            "Recurrence: $T(n) = 2T(n/2) + O(n) = O(n\\log n)$ by Master Theorem."
          ],
          a: "$O(n\\log n)$.",
          v: "Stable sort with $O(n)$ extra space. Quicksort same average, $O(n^{2})$ worst."
        })
      },
      { q: "OOP principle: hiding internal data from outside access:",
        choices: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
        correct: 0,
        solution: S({
          c: "Encapsulation bundles data with methods and restricts direct access using access modifiers (private, protected).",
          s: [
            "Inheritance: reusing one class to derive another.",
            "Polymorphism: same interface, different implementation."
          ],
          a: "Encapsulation.",
          v: "Encapsulation enables refactoring of internals without breaking external API."
        })
      },
      { q: "Agile vs Waterfall: Agile emphasizes:",
        choices: [
          "Iterative development with frequent stakeholder feedback.",
          "Fixed scope upfront with sequential phases.",
          "Long upfront design and infrequent releases.",
          "Single-person teams."
        ],
        correct: 0,
        solution: S({
          c: "Agile values working software, individuals/interactions, customer collaboration, responding to change.",
          s: [
            "Sprints typically 1–4 weeks; demo to stakeholders at end of each sprint.",
            "Waterfall is linear, prefers upfront planning, late-stage testing."
          ],
          a: "Iterative + frequent feedback.",
          v: "Most modern teams use Scrum/Kanban variants; hybrid models exist for regulated industries."
        })
      },
      { q: "Linked list: which operation is $O(1)$ (singly-linked)?",
        choices: ["Insert at head", "Random access by index", "Search for value", "Sort"],
        correct: 0,
        solution: S({
          c: "Linked list: insertion/deletion at known position is constant; traversal is linear.",
          s: [
            "Insert at head: update new node’s next, update head pointer — $O(1)$.",
            "Random access: must traverse from head — $O(n)$.",
            "Search: linear scan — $O(n)$."
          ],
          a: "Insert at head.",
          v: "Doubly-linked lists also support O(1) deletion of a known node."
        })
      },
      { q: "Cyclomatic complexity counts:",
        choices: [
          "Independent paths through code (decision points + 1).",
          "Lines of code.",
          "Number of functions.",
          "Lines of comments."
        ],
        correct: 0,
        solution: S({
          c: "McCabe’s metric: a measure of testing complexity.",
          s: [
            "CC = E - N + 2P for control flow graph (edges, nodes, components).",
            "Equivalently: count of decision points + 1.",
            "Rule of thumb: CC ≤ 10 per function for maintainability."
          ],
          a: "Independent paths (decision points + 1).",
          v: "Higher CC indicates more test cases needed for full path coverage."
        })
      },
      { q: "SQL JOIN that returns only matching rows from both tables:",
        choices: ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
        correct: 0,
        solution: S({
          c: "INNER JOIN keeps only rows where the join condition holds in both tables.",
          s: [
            "LEFT JOIN: all left rows, matched right (or NULLs).",
            "FULL OUTER: all rows, NULLs for unmatched on either side.",
            "CROSS JOIN: Cartesian product."
          ],
          a: "INNER JOIN.",
          v: "Implicit JOIN syntax: SELECT … FROM A, B WHERE A.id = B.aid is the same as INNER JOIN."
        })
      },
      { q: "Race condition occurs in concurrent code when:",
        choices: [
          "Two threads access shared state without synchronization, and the result depends on timing.",
          "A thread runs longer than expected.",
          "CPU clock is unstable.",
          "Variables are too small."
        ],
        correct: 0,
        solution: S({
          c: "Race condition: non-deterministic behavior caused by unsynchronized concurrent access.",
          s: [
            "Example: two threads incrementing a counter without locking can lose updates.",
            "Fix: mutex, atomic operations, or message passing."
          ],
          a: "Unsynchronized shared-state access with timing-dependent outcome.",
          v: "Subtle bugs: may pass tests on one machine and fail on another with different scheduling."
        })
      }
    ]
  };

  // ============================================================
  // Append to QUESTION_BANK in place
  // ============================================================
  for (const chapter of QUESTION_BANK.chapters) {
    const extras = EXTRAS[chapter.id];
    if (extras && Array.isArray(extras)) {
      chapter.questions = chapter.questions.concat(extras);
    }
  }
})();
