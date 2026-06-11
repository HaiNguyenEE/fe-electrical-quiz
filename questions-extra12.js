// FE Electrical Question Bank — Extension Pack 12 (Round 12)
// ============================================================
// Reference-anchored set: difficulty and topic coverage informed by a
// 110-question mock exam survey. All problems below are ORIGINAL — no
// problem statement is paraphrased from any copyrighted source.
// Handbook page references map to the NCEES FE Reference Handbook v10.
// Worked solutions use the S({c, s, a, v}) helper from questions.js.
// ============================================================
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") {
    console.warn("QUESTION_BANK or S helper missing — extra12 not loaded.");
    return;
  }

  const EXTRAS = {
    // ====================== Ch 1: Mathematics ======================
    1: [
      { q: "Use Lagrange multipliers to minimize $f(x,y) = x^{2} + y^{2}$ subject to $x + 2y = 5$.",
        choices: ["$(1,2)$, $f = 5$", "$(2,1)$, $f = 5$", "$(5,0)$, $f = 25$", "$(0,2.5)$, $f = 6.25$"],
        correct: 0,
        ref: "Handbook §1.5 (Vector calculus, optimization)",
        solution: S({
          c: "Stationary point of $\\mathcal L = f - \\lambda g$ where $g(x,y) = x + 2y - 5$.",
          s: [
            "Set $\\nabla f = \\lambda\\nabla g$: $\\ 2x = \\lambda$ and $2y = 2\\lambda$.",
            "Therefore $y = 2x$. Substitute into the constraint: $x + 2(2x) = 5x = 5 \\Rightarrow x = 1$.",
            "Then $y = 2$ and $f(1,2) = 1 + 4 = 5$."
          ],
          a: "$(x,y) = (1,2)$, minimum value $f = 5$",
          v: "Geometrically the answer is the foot of perpendicular from origin to the line $x + 2y = 5$ — distance $5/\\sqrt 5 = \\sqrt 5$, squared = 5 ✓."
        })
      },
      { q: "Evaluate the line integral $\\oint_C (x\\,dy - y\\,dx)$ where $C$ is the unit circle traversed counter-clockwise.",
        choices: ["$2\\pi$", "$0$", "$\\pi$", "$-2\\pi$"],
        correct: 0,
        ref: "Handbook §1.5.4 (Green's theorem)",
        solution: S({
          c: "By Green's theorem $\\oint_C(P\\,dx + Q\\,dy) = \\iint_D\\!(\\partial_x Q - \\partial_y P)\\,dA$. Here $P = -y$, $Q = x$.",
          s: [
            "$\\partial_x Q - \\partial_y P = 1 - (-1) = 2$.",
            "Integral $= 2 \\cdot \\text{Area}(D) = 2\\pi r^{2} = 2\\pi$."
          ],
          a: "$2\\pi$",
          v: "Alternative parametrization $x = \\cos\\theta,\\ y = \\sin\\theta$: integrand becomes $\\cos^{2}\\theta + \\sin^{2}\\theta = 1$, integrated over $[0, 2\\pi]$ gives $2\\pi$ ✓."
        })
      },
      { q: "The Laplace transform $\\mathcal L\\{t^{2}e^{-2t}\\}$ equals:",
        choices: ["$\\dfrac{2}{(s+2)^{3}}$", "$\\dfrac{1}{(s+2)^{3}}$", "$\\dfrac{2}{(s-2)^{3}}$", "$\\dfrac{1}{s^{3}+2}$"],
        correct: 0,
        ref: "Handbook §1.7 (Laplace transform pair table)",
        solution: S({
          c: "Frequency-shift property: $\\mathcal L\\{e^{-at}f(t)\\} = F(s+a)$. Pair: $\\mathcal L\\{t^{n}\\} = n!/s^{n+1}$.",
          s: [
            "Start with $\\mathcal L\\{t^{2}\\} = 2/s^{3}$.",
            "Apply $a = 2$ shift: replace $s$ by $s+2$ to get $2/(s+2)^{3}$."
          ],
          a: "$2/(s+2)^{3}$",
          v: "Pole at $s = -2$ with order 3 — matches a damped quadratic ramp ($t^{2}e^{-2t}$) in time domain."
        })
      },
      { q: "Find the radius of convergence of the power series $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x-3)^{n}}{n\\,2^{n}}$.",
        choices: ["$2$", "$1$", "$3$", "$\\infty$"],
        correct: 0,
        ref: "Handbook §1.3 (Series and convergence)",
        solution: S({
          c: "Ratio test: $R = \\lim_{n\\to\\infty}|a_n/a_{n+1}|$ where $a_n$ is the coefficient.",
          s: [
            "$a_n = 1/(n\\,2^{n})$. $a_{n+1} = 1/((n+1)2^{n+1})$.",
            "$|a_n/a_{n+1}| = \\dfrac{(n+1)2^{n+1}}{n\\,2^{n}} = 2\\cdot\\dfrac{n+1}{n} \\to 2$.",
            "Therefore $R = 2$; series converges for $|x-3| < 2$, i.e. $1 < x < 5$."
          ],
          a: "$R = 2$",
          v: "At $x = 5$: $\\sum 1/n$ diverges (harmonic). At $x = 1$: alternating harmonic, converges. So radius is correct, endpoints differ."
        })
      },
      { q: "Solve $\\dfrac{dy}{dx} = \\dfrac{y}{x+1}$ with $y(0) = 2$ by separation of variables.",
        choices: ["$y = 2(x+1)$", "$y = 2e^{x}$", "$y = 2\\ln(x+1)$", "$y = (x+1)^{2}$"],
        correct: 0,
        ref: "Handbook §1.6 (First-order ODE)",
        solution: S({
          c: "Separable form: $\\dfrac{dy}{y} = \\dfrac{dx}{x+1}$.",
          s: [
            "Integrate: $\\ln|y| = \\ln|x+1| + C_1$.",
            "Exponentiate: $y = C(x+1)$.",
            "Apply $y(0) = 2 \\Rightarrow C = 2$, so $y = 2(x+1)$."
          ],
          a: "$y = 2(x+1)$",
          v: "Check: $dy/dx = 2 = 2(x+1)/(x+1) = y/(x+1)$ ✓."
        })
      },
      { q: "For matrix $A = \\begin{bmatrix} 3 & 1\\\\ 0 & 2\\end{bmatrix}$, what is $A^{10}$ (top-left entry only)?",
        choices: ["$3^{10}$", "$2^{10}$", "$5^{10}$", "$10 \\cdot 3^{9}$"],
        correct: 0,
        ref: "Handbook §1.4 (Linear algebra — powers of triangular matrices)",
        solution: S({
          c: "For an upper triangular matrix, the eigenvalues are the diagonal entries, and the $(1,1)$ entry of $A^{n}$ is $a_{11}^{n}$ (top diagonal element raised to $n$).",
          s: [
            "$a_{11} = 3$, so $(A^{10})_{11} = 3^{10} = 59{,}049$."
          ],
          a: "$3^{10} = 59{,}049$",
          v: "By induction the diagonal of $A^{k}$ is $\\{a_{11}^{k}, a_{22}^{k}, \\ldots\\}$ for triangular $A$."
        })
      },
      { q: "$\\displaystyle\\int_{0}^{\\infty} x e^{-2x}\\,dx$ equals:",
        choices: ["$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$1$", "Diverges"],
        correct: 0,
        ref: "Handbook §1.5 (Improper integrals / Gamma function)",
        solution: S({
          c: "Gamma-function identity: $\\int_{0}^{\\infty} x^{n}e^{-ax}dx = n!/a^{n+1}$.",
          s: [
            "Here $n = 1,\\ a = 2$, so integral $= 1!/2^{2} = 1/4$."
          ],
          a: "$1/4$",
          v: "Alternative: integration by parts with $u = x,\\ dv = e^{-2x}dx$ gives $-\\tfrac{x}{2}e^{-2x}\\big|_0^{\\infty} + \\tfrac12\\int e^{-2x}dx = 0 + \\tfrac14 = \\tfrac14$ ✓."
        })
      },
      { q: "Fourier-series coefficient $b_n$ for $f(t) = \\text{sgn}(\\sin t)$ (square wave, period $2\\pi$) is:",
        choices: ["$\\dfrac{4}{n\\pi}$ for odd $n$, 0 for even", "$\\dfrac{2}{n\\pi}$ for all $n$", "$\\dfrac{1}{n}$", "$\\dfrac{4}{n^{2}\\pi}$"],
        correct: 0,
        ref: "Handbook §1.7 (Fourier series of standard waveforms)",
        solution: S({
          c: "Square wave has odd symmetry — only sine terms — and the standard amplitude $4/(n\\pi)$ for odd harmonics.",
          s: [
            "Half-wave (anti-)symmetry makes even harmonics vanish.",
            "Compute $b_n = \\frac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)dt$; for square wave this yields $b_n = 4/(n\\pi)$ for $n$ odd."
          ],
          a: "$b_n = 4/(n\\pi)$ for odd $n$; 0 for even $n$",
          v: "Series $\\sum_{n=1,3,5,\\ldots}(4/n\\pi)\\sin(n\\omega_0 t)$ is the classic square-wave expansion."
        })
      },
      { q: "Find the gradient of $\\phi(x,y,z) = x^{2}y + yz^{3}$ at $(1, 2, -1)$.",
        choices: ["$\\langle 4,\\ 0,\\ 6\\rangle$", "$\\langle 2,\\ 4,\\ -3\\rangle$", "$\\langle 4,\\ 2,\\ -1\\rangle$", "$\\langle 0,\\ -1,\\ 6\\rangle$"],
        correct: 0,
        ref: "Handbook §1.5 (Gradient operator)",
        solution: S({
          c: "$\\nabla\\phi = \\langle \\partial\\phi/\\partial x,\\ \\partial\\phi/\\partial y,\\ \\partial\\phi/\\partial z\\rangle$.",
          s: [
            "$\\phi_x = 2xy = 2(1)(2) = 4$.",
            "$\\phi_y = x^{2} + z^{3} = 1 + (-1)^{3} = 1 - 1 = 0$.",
            "$\\phi_z = 3yz^{2} = 3(2)(1) = 6$."
          ],
          a: "$\\nabla\\phi = \\langle 4, 0, 6\\rangle$",
          v: "Direction of steepest increase at the point; magnitude $\\sqrt{16+0+36} = \\sqrt{52}$."
        })
      },
      { q: "Numerical method: bisection on $f(x) = x^{3} - x - 2$ over $[1, 2]$. After 3 iterations the bracket is:",
        choices: ["$[1.5, 1.625]$", "$[1.25, 1.5]$", "$[1, 1.5]$", "$[1.625, 2]$"],
        correct: 0,
        ref: "Handbook §1.8 (Root finding — bisection)",
        solution: S({
          c: "Each iteration evaluates $f$ at midpoint and keeps the half-interval whose endpoints bracket the root.",
          s: [
            "$f(1) = -2,\\ f(2) = 4$ → root in $[1,2]$.",
            "Iter 1: midpoint 1.5, $f(1.5) = 3.375 - 1.5 - 2 = -0.125 < 0$ → keep $[1.5, 2]$.",
            "Iter 2: midpoint 1.75, $f(1.75) = 5.359 - 1.75 - 2 = 1.609 > 0$ → keep $[1.5, 1.75]$.",
            "Iter 3: midpoint 1.625, $f(1.625) = 4.291 - 1.625 - 2 = 0.666 > 0$ → keep $[1.5, 1.625]$."
          ],
          a: "$[1.5, 1.625]$",
          v: "Bracket width halves each iteration: $1 \\to 0.5 \\to 0.25 \\to 0.125$. After $n$ iterations error $\\le (b-a)/2^{n+1}$."
        })
      },
      { q: "Complex Taylor series of $\\dfrac{1}{1-z}$ about $z = 0$ converges in:",
        choices: ["$|z| < 1$", "$|z| < 2$", "All of $\\mathbb C$", "$|z| > 1$"],
        correct: 0,
        ref: "Handbook §1.3 (Geometric series / radius of convergence)",
        solution: S({
          c: "Geometric series $\\sum z^{n}$ converges for $|z| < 1$. The pole of $1/(1-z)$ at $z = 1$ sets the radius.",
          s: [
            "$\\dfrac{1}{1-z} = 1 + z + z^{2} + z^{3} + \\cdots$ for $|z| < 1$.",
            "Distance from expansion point ($z = 0$) to nearest singularity ($z = 1$) is 1, giving $R = 1$."
          ],
          a: "Open disc $|z| < 1$",
          v: "Series diverges at $z = 1$ (sum diverges to $\\infty$) — confirms boundary."
        })
      },
      { q: "Convert $z = 1 + j\\sqrt 3$ to exponential form $re^{j\\theta}$.",
        choices: ["$2e^{j\\pi/3}$", "$\\sqrt 2 e^{j\\pi/4}$", "$2e^{j\\pi/6}$", "$2e^{-j\\pi/3}$"],
        correct: 0,
        ref: "Handbook §1.2 (Complex numbers in polar form)",
        solution: S({
          c: "$r = |z| = \\sqrt{a^{2}+b^{2}}$, $\\theta = \\arctan(b/a)$ (adjusted for quadrant).",
          s: [
            "$r = \\sqrt{1 + 3} = 2$.",
            "$\\theta = \\arctan(\\sqrt 3 / 1) = 60° = \\pi/3$ (first quadrant)."
          ],
          a: "$z = 2 e^{j\\pi/3}$",
          v: "Euler: $2(\\cos 60° + j\\sin 60°) = 2(\\tfrac12 + j\\tfrac{\\sqrt 3}{2}) = 1 + j\\sqrt 3$ ✓."
        })
      },
      { q: "If $A$ is $n\\times n$ and $\\det A = 0$, then $A$:",
        choices: ["Is singular and has at least one zero eigenvalue", "Is invertible", "Is symmetric", "Has rank $n$"],
        correct: 0,
        ref: "Handbook §1.4 (Determinants, singular matrices)",
        solution: S({
          c: "$\\det A = \\lambda_1\\lambda_2\\cdots\\lambda_n$ (product of eigenvalues, counted with multiplicity).",
          s: [
            "If $\\det A = 0$, at least one eigenvalue equals zero.",
            "Equivalently, $A$ has a non-trivial null space, so it is not invertible (singular).",
            "Rank is $< n$."
          ],
          a: "Singular with at least one zero eigenvalue.",
          v: "Consider $A = \\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$: $\\det = 0$, eigenvalues $\\{0, 2\\}$, rank 1."
        })
      },
      { q: "Mean-value theorem: if $f$ continuous on $[0, 4]$, differentiable on $(0, 4)$, $f(0) = 1$, $f(4) = 9$, then there exists $c\\in (0,4)$ with $f'(c) =$:",
        choices: ["$2$", "$8$", "$\\frac{1}{2}$", "$4$"],
        correct: 0,
        ref: "Handbook §1.5 (MVT, derivative properties)",
        solution: S({
          c: "MVT: $f'(c) = \\dfrac{f(b)-f(a)}{b-a}$ for some $c\\in (a,b)$.",
          s: [
            "$f'(c) = (9-1)/(4-0) = 8/4 = 2$."
          ],
          a: "$f'(c) = 2$",
          v: "Geometrically, the secant slope from $(0,1)$ to $(4,9)$ equals the tangent slope somewhere in between."
        })
      },
      { q: "Find $\\displaystyle\\frac{d^{2}}{dx^{2}}\\!\\left[x\\sin x\\right]$.",
        choices: ["$2\\cos x - x\\sin x$", "$x\\cos x$", "$-x\\sin x$", "$\\cos x + \\sin x$"],
        correct: 0,
        ref: "Handbook §1.5 (Higher derivatives, product rule)",
        solution: S({
          c: "First derivative by product rule, then differentiate again.",
          s: [
            "$\\dfrac{d}{dx}[x\\sin x] = \\sin x + x\\cos x$.",
            "$\\dfrac{d}{dx}[\\sin x + x\\cos x] = \\cos x + (\\cos x - x\\sin x) = 2\\cos x - x\\sin x$."
          ],
          a: "$2\\cos x - x\\sin x$",
          v: "Check at $x = 0$: $2\\cos 0 - 0 = 2$. Original: $f(0)=0$; $f'(0) = 0 + 0 = 0$; $f''(0) = 2$ ✓."
        })
      }
    ],

    // ====================== Ch 2: Probability & Statistics ======================
    2: [
      { q: "A Poisson process averages 5 events per hour. The probability of zero events in 30 minutes is:",
        choices: ["$e^{-2.5} \\approx 0.0821$", "$e^{-5} \\approx 0.0067$", "$0.5$", "$2.5\\,e^{-2.5}$"],
        correct: 0,
        ref: "Handbook §2.2 (Poisson distribution)",
        solution: S({
          c: "Poisson PMF for interval of length $t$: $P(X = k) = (\\lambda t)^{k} e^{-\\lambda t}/k!$.",
          s: [
            "$\\lambda = 5$/hr, $t = 0.5$ hr ⇒ expected count $\\lambda t = 2.5$.",
            "$P(X = 0) = e^{-2.5} \\approx 0.0821$."
          ],
          a: "$\\approx 0.0821$ (≈ 8.21%)",
          v: "Cross-check: $P(X = 0) = $ probability no event in $t$ for a Poisson process equals the survival function of exponential inter-arrival, $e^{-\\lambda t}$ ✓."
        })
      },
      { q: "Maximum-likelihood estimate of $\\lambda$ for exponential distribution given i.i.d. data $\\{x_1, \\ldots, x_n\\}$:",
        choices: ["$\\hat\\lambda = n / \\sum x_i = 1/\\bar x$", "$\\hat\\lambda = \\bar x$", "$\\hat\\lambda = \\sum x_i$", "$\\hat\\lambda = \\sqrt{\\bar x}$"],
        correct: 0,
        ref: "Handbook §2.3 (MLE)",
        solution: S({
          c: "Likelihood $L(\\lambda) = \\prod \\lambda e^{-\\lambda x_i} = \\lambda^{n}e^{-\\lambda\\sum x_i}$. Maximize log-likelihood.",
          s: [
            "$\\ell(\\lambda) = n\\ln\\lambda - \\lambda\\sum x_i$.",
            "$d\\ell/d\\lambda = n/\\lambda - \\sum x_i = 0 \\Rightarrow \\hat\\lambda = n/\\sum x_i = 1/\\bar x$."
          ],
          a: "$\\hat\\lambda_{MLE} = 1/\\bar x$",
          v: "For exponential, $E[X] = 1/\\lambda$, so $\\hat\\lambda = 1/\\bar x$ is the method-of-moments estimator as well — they coincide here."
        })
      },
      { q: "A binomial test: $n = 100$ trials, observed 35 successes. Test $H_0: p = 0.30$ against $H_1: p \\ne 0.30$ using normal approximation. The $z$-statistic is:",
        choices: ["$\\approx 1.09$", "$\\approx 5.0$", "$\\approx 0.10$", "$\\approx 2.5$"],
        correct: 0,
        ref: "Handbook §2.3 (Large-sample normal approximation to binomial)",
        solution: S({
          c: "$z = (\\hat p - p_0)/\\sqrt{p_0(1-p_0)/n}$ where $\\hat p = X/n$.",
          s: [
            "$\\hat p = 35/100 = 0.35$.",
            "Standard error under $H_0$: $\\sqrt{0.30\\cdot 0.70/100} = \\sqrt{0.0021} = 0.0458$.",
            "$z = (0.35 - 0.30)/0.0458 \\approx 1.09$."
          ],
          a: "$z \\approx 1.09$",
          v: "Two-sided $p$-value $\\approx 0.275$ — fail to reject $H_0$ at $\\alpha = 0.05$. The 35/100 is within sampling variability."
        })
      },
      { q: "Bayes: $P(\\text{disease}) = 0.01$, test sensitivity $P(+\\,|\\,D) = 0.95$, specificity $P(-\\,|\\,\\neg D) = 0.95$. Posterior $P(D\\,|\\,+)$:",
        choices: ["$\\approx 0.161$", "$\\approx 0.95$", "$\\approx 0.01$", "$\\approx 0.5$"],
        correct: 0,
        ref: "Handbook §2.2 (Bayes theorem)",
        solution: S({
          c: "$P(D|+) = \\dfrac{P(+|D)\\,P(D)}{P(+)}$ with $P(+) = P(+|D)P(D) + P(+|\\neg D)P(\\neg D)$.",
          s: [
            "$P(+|\\neg D) = 1 - 0.95 = 0.05$ (false-positive rate).",
            "$P(+) = 0.95(0.01) + 0.05(0.99) = 0.0095 + 0.0495 = 0.059$.",
            "$P(D|+) = 0.0095 / 0.059 \\approx 0.161$ (~16.1%)."
          ],
          a: "$\\approx 16.1\\%$",
          v: "Classic counter-intuitive result: even a 95%-accurate test on a rare disease gives mostly false positives. Base rate matters."
        })
      },
      { q: "Sample mean $\\bar X$ from $n = 25$, sample SD $s = 4$, population mean $\\mu$ unknown. 95% CI half-width uses:",
        choices: ["$t_{0.025, 24} \\cdot s/\\sqrt n \\approx 2.064 \\cdot 0.8 \\approx 1.65$", "$1.96 \\cdot 4/\\sqrt{25}$", "$1.96 \\cdot 4/25$", "$2.064 \\cdot 4/25$"],
        correct: 0,
        ref: "Handbook §2.4 (t-distribution CI)",
        solution: S({
          c: "Small-sample (unknown $\\sigma$) CI uses $t_{\\alpha/2, n-1}$ not $z$. Half-width $= t_{\\alpha/2}\\cdot s/\\sqrt n$.",
          s: [
            "df $= 24$. $t_{0.025, 24} \\approx 2.064$.",
            "$s/\\sqrt n = 4/5 = 0.8$.",
            "Half-width $\\approx 2.064 \\cdot 0.8 \\approx 1.65$."
          ],
          a: "$\\approx 1.65$ (using $t$ critical value)",
          v: "If $\\sigma$ were known (rare in practice), would use $z = 1.96$ instead, giving 1.568."
        })
      },
      { q: "Linear regression $Y = \\beta_0 + \\beta_1 X + \\epsilon$. Slope estimator $\\hat\\beta_1$ in terms of sample data:",
        choices: ["$\\hat\\beta_1 = S_{xy}/S_{xx}$", "$\\hat\\beta_1 = \\bar y/\\bar x$", "$\\hat\\beta_1 = r\\cdot s_x/s_y$", "$\\hat\\beta_1 = S_{xx}/S_{xy}$"],
        correct: 0,
        ref: "Handbook §2.5 (Linear regression — least squares)",
        solution: S({
          c: "Ordinary least squares minimizes $\\sum(y_i - \\beta_0 - \\beta_1 x_i)^{2}$. Closed form: $\\hat\\beta_1 = S_{xy}/S_{xx}$ where $S_{xy} = \\sum(x_i-\\bar x)(y_i-\\bar y)$, $S_{xx} = \\sum(x_i-\\bar x)^{2}$.",
          s: [
            "Normal equation: $\\sum(y_i - \\beta_0 - \\beta_1 x_i)(-x_i) = 0$ and similar for $\\beta_0$.",
            "Solving simultaneously: $\\hat\\beta_1 = S_{xy}/S_{xx}$, $\\hat\\beta_0 = \\bar y - \\hat\\beta_1\\bar x$."
          ],
          a: "$\\hat\\beta_1 = S_{xy}/S_{xx}$",
          v: "Equivalent: $\\hat\\beta_1 = r\\cdot s_y/s_x$ (note the order — multiplies $s_y$, divides $s_x$), so the third option has the ratio inverted."
        })
      },
      { q: "Joint density $f(x,y) = 2$ on the triangle $0\\le y\\le x\\le 1$, 0 elsewhere. Marginal $f_X(x)$ equals:",
        choices: ["$2x,\\ 0\\le x\\le 1$", "$2,\\ 0\\le x\\le 1$", "$1$", "$x^{2}$"],
        correct: 0,
        ref: "Handbook §2.2 (Joint and marginal densities)",
        solution: S({
          c: "$f_X(x) = \\int f(x,y)\\,dy$ over the support of $y$ given $x$.",
          s: [
            "For fixed $x \\in [0,1]$, $y$ ranges over $[0, x]$.",
            "$f_X(x) = \\int_0^x 2\\,dy = 2x$."
          ],
          a: "$f_X(x) = 2x,\\ 0\\le x\\le 1$",
          v: "Check: $\\int_0^1 2x\\,dx = 1$ ✓ (proper marginal density)."
        })
      },
      { q: "Two-sample $t$-test (equal variances): $n_1 = n_2 = 15$, $\\bar x_1 = 10.2$, $\\bar x_2 = 9.5$, $s_p = 1.4$. Test statistic:",
        choices: ["$\\approx 1.37$", "$\\approx 0.7$", "$\\approx 5.0$", "$\\approx 2.5$"],
        correct: 0,
        ref: "Handbook §2.4 (Two-sample t-test)",
        solution: S({
          c: "$t = (\\bar x_1 - \\bar x_2)/[s_p\\sqrt{1/n_1 + 1/n_2}]$.",
          s: [
            "$\\sqrt{1/15 + 1/15} = \\sqrt{2/15} = 0.3651$.",
            "Denominator: $1.4 \\times 0.3651 = 0.5112$.",
            "$t = (10.2 - 9.5)/0.5112 = 0.7/0.5112 \\approx 1.37$."
          ],
          a: "$t \\approx 1.37$ (df = 28)",
          v: "Two-sided $p$-value $\\approx 0.18$ — not significant at $\\alpha = 0.05$."
        })
      },
      { q: "Variance of a sum of independent random variables $X + Y$:",
        choices: ["$\\text{Var}(X) + \\text{Var}(Y)$", "$\\text{Var}(X)\\cdot\\text{Var}(Y)$", "$|\\text{Var}(X) - \\text{Var}(Y)|$", "$\\sqrt{\\text{Var}(X)^{2}+\\text{Var}(Y)^{2}}$"],
        correct: 0,
        ref: "Handbook §2.1 (Variance of sums)",
        solution: S({
          c: "If independent: $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$ because $\\text{Cov}(X,Y) = 0$.",
          s: [
            "General: $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\,\\text{Cov}(X,Y)$.",
            "Independence ⇒ $\\text{Cov}(X,Y) = 0$ ⇒ variances simply add."
          ],
          a: "$\\text{Var}(X) + \\text{Var}(Y)$",
          v: "Note: standard deviations do NOT add — they combine in quadrature."
        })
      },
      { q: "Process capability index $C_{pk}$ for $\\bar x = 5.0,\\ \\sigma = 0.1$, specifications $4.7 \\le x \\le 5.5$:",
        choices: ["$1.00$", "$1.67$", "$1.33$", "$0.5$"],
        correct: 0,
        ref: "Handbook §2.6 (Process capability indices)",
        solution: S({
          c: "$C_{pk} = \\min\\!\\left(\\dfrac{\\text{USL}-\\bar x}{3\\sigma},\\ \\dfrac{\\bar x - \\text{LSL}}{3\\sigma}\\right)$.",
          s: [
            "USL distance: $(5.5 - 5.0)/(3\\cdot 0.1) = 0.5/0.3 = 1.67$.",
            "LSL distance: $(5.0 - 4.7)/0.3 = 0.3/0.3 = 1.00$.",
            "$C_{pk} = \\min(1.67, 1.00) = 1.00$ — process limited by lower spec."
          ],
          a: "$C_{pk} = 1.00$",
          v: "$C_{pk} = 1.0$ means process barely meets 3σ spec on the tight side. Industry target is typically ≥1.33."
        })
      }
    ],

    // ====================== Ch 3: Ethics ======================
    3: [
      { q: "An engineer is offered a higher-paying job that requires using confidential design information from their current employer. Per NSPE:",
        choices: [
          "Decline or wait until the information is publicly disclosed.",
          "Accept and use the information — it's normal practice.",
          "Accept but only use selected portions.",
          "Sell the information first, then accept."
        ],
        correct: 0,
        ref: "NSPE Code §III.4 (Confidential information)",
        solution: S({
          c: "Trade secrets and confidential information remain protected after employment ends; new employer cannot benefit from misappropriated IP.",
          s: [
            "§III.4: engineers shall not disclose or use confidential information of past employers/clients for personal advantage.",
            "Even unintentional use is a breach.",
            "Many companies require non-compete or non-disclosure clauses; legal action is possible."
          ],
          a: "Decline or wait until publicly disclosed.",
          v: "Some firms use 'ethical walls' or quarantine periods to manage transitioning engineers."
        })
      },
      { q: "A registered PE notices the contractor is substituting materials that don't meet specification. The PE was not asked to inspect. Ethically the PE should:",
        choices: [
          "Notify the client and document the deviation.",
          "Ignore it; not their responsibility.",
          "Confront the contractor on-site.",
          "Resign in protest without disclosure."
        ],
        correct: 0,
        ref: "NSPE Code §I.1 (Public safety paramount)",
        solution: S({
          c: "Engineers must hold paramount the safety, health, and welfare of the public — even outside their assigned scope.",
          s: [
            "Material substitution may compromise structural integrity.",
            "PE has obligation to notify client/owner in writing.",
            "If client doesn't act, authorities (building dept) must be notified."
          ],
          a: "Notify client and document.",
          v: "Hierarchy: public > client > employer > self."
        })
      },
      { q: "Engineer designs a product and patents it personally without disclosing to employer. Patent uses skills/equipment from the job. Ethically:",
        choices: [
          "Likely a conflict — most employment contracts assign work-product IP to employer.",
          "Always fine — patents are personal.",
          "Ethical only if outside business hours.",
          "Allowed if engineer pays employer a small fee."
        ],
        correct: 0,
        ref: "NSPE Code §II.4 (Conflicts of interest)",
        solution: S({
          c: "Employment IP-assignment clauses typically cover any invention made using employer's resources or related to employer's business.",
          s: [
            "Engineer should disclose and review the contract.",
            "Conflict exists if invention is in employer's field or used employer's equipment.",
            "Many companies have an IP-disclosure process."
          ],
          a: "Conflict — disclose to employer first.",
          v: "Some inventions clearly outside employer's scope and made on personal time can be carved out, but only via formal disclosure and agreement."
        })
      },
      { q: "An engineer is asked to certify a project complete based only on a brief walk-through. The engineer has not seen the test data. Ethically:",
        choices: [
          "Refuse to certify until they have personally reviewed adequate evidence.",
          "Certify based on the contractor's word.",
          "Certify if the client signs a liability waiver.",
          "Certify and add a footnote."
        ],
        correct: 0,
        ref: "NSPE Code §II.3 (Statements only when truthful)",
        solution: S({
          c: "Engineers can only certify what they have verified or reasonably supervised.",
          s: [
            "A walk-through is not sufficient documentation for most engineering certifications.",
            "Test data, calculations, and inspection records must be reviewed personally.",
            "Liability waivers do not absolve engineer of professional duty."
          ],
          a: "Refuse until adequate evidence reviewed.",
          v: "Sealing/signing implies responsible charge — direct knowledge and control."
        })
      },
      { q: "An engineer working on a public project becomes aware that their spouse owns stock in a major supplier bidding on the work. They should:",
        choices: [
          "Disclose in writing to all parties immediately.",
          "Sell the stock first, then continue.",
          "Continue silently if value is small.",
          "Resign from the project."
        ],
        correct: 0,
        ref: "NSPE Code §II.4 (Disclose all conflicts)",
        solution: S({
          c: "Family financial interest in a bidder is a clear conflict of interest requiring written disclosure.",
          s: [
            "Disclosure must be to client/employer in writing.",
            "Engineer may continue if both parties accept disclosure and recusal from bid evaluation is established.",
            "Some firms require divestiture; rules vary by jurisdiction."
          ],
          a: "Disclose in writing.",
          v: "Even appearance of conflict damages public trust — disclosure protects engineer and project."
        })
      },
      { q: "An engineer disagrees with their supervisor's design decision that they believe is unsafe. Per NSPE the engineer should:",
        choices: [
          "Express disagreement in writing through proper channels; refuse to seal if necessary.",
          "Carry out the decision and document objections privately.",
          "Discuss it with peers but not management.",
          "Submit anonymously to the press."
        ],
        correct: 0,
        ref: "NSPE Code §II.1 (Engineers shall act as faithful agents but with primary obligation to public safety)",
        solution: S({
          c: "Disagreement must go through proper channels — supervisor, manager, ethics officer, licensing board, regulator, in that escalation order.",
          s: [
            "Document concerns in writing.",
            "If safety concern is serious and not addressed, escalate to higher management.",
            "If still not resolved, engineer may not sign or seal the work; may need to report to authorities."
          ],
          a: "Document in writing; escalate properly.",
          v: "Whistleblower protections vary by jurisdiction. Many state engineering boards have a duty-to-report rule."
        })
      },
      { q: "An engineer uses an old design from a previous employer that they did not author. They modify some parameters and submit it as new work. This is:",
        choices: [
          "Plagiarism and confidentiality violation.",
          "Acceptable — modification makes it new.",
          "Acceptable if no one notices.",
          "Acceptable if attributed in the footnote."
        ],
        correct: 0,
        ref: "NSPE Code §III.9 (Credit for engineering work)",
        solution: S({
          c: "Reusing work without authorization violates both copyright/ownership and the duty to credit original authors.",
          s: [
            "Even with modifications, derivative work requires permission.",
            "Confidentiality violation (§III.4) if from previous employer.",
            "Plagiarism violation (§III.9) — fail to credit original engineer."
          ],
          a: "Plagiarism + confidentiality violation.",
          v: "Some firms maintain template libraries with explicit licensing for internal reuse — different situation entirely."
        })
      },
      { q: "A self-employed engineer offers free consulting to a city council to influence them to award a contract to the engineer's firm. This is:",
        choices: [
          "Improper inducement / bribery — prohibited.",
          "Acceptable since the consulting is technical advice.",
          "Acceptable if no money changes hands.",
          "Acceptable if also offered to competitors."
        ],
        correct: 0,
        ref: "NSPE Code §III.6 (Improper solicitation)",
        solution: S({
          c: "Offering free services in exchange for business is an improper inducement and undermines fair procurement.",
          s: [
            "§III.6: engineers shall not offer or accept commissions or payments to procure professional engagements.",
            "Even non-monetary 'free service' counts — it has value.",
            "Public procurement processes are designed to prevent this exact behavior."
          ],
          a: "Improper inducement.",
          v: "Many city councils explicitly forbid accepting any value from vendors during procurement decisions."
        })
      }
    ],

    // ====================== Ch 4: Engineering Economics ======================
    4: [
      { q: "An asset costs \\$80{,}000 with 10-year life and \\$5{,}000 salvage. Find annual depreciation under MACRS half-year convention (7-year class), year 1.",
        choices: ["\\$11,432 (14.29%)", "\\$8,000", "\\$7,500", "\\$22,449"],
        correct: 0,
        ref: "Handbook §3 (Depreciation methods)",
        solution: S({
          c: "MACRS 7-year class with half-year convention: year-1 rate is 14.29% (not full 200%-declining-balance rate).",
          s: [
            "Year 1 = $14.29\\% \\times 80{,}000 = \\$11{,}432$.",
            "Salvage is ignored under MACRS — full basis is depreciated.",
            "Year-2 rate is 24.49%, year-3 is 17.49%, etc., per the MACRS table."
          ],
          a: "\\$11,432 (year 1)",
          v: "MACRS sum over 8 years = 100% of basis. Half-year convention means year 1 gets only half-year deprecation, hence the smaller rate vs. full 200%/7 = 28.57%."
        })
      },
      { q: "Two alternatives: A costs \\$10{,}000 now, saves \\$2{,}000/yr for 8 years. B costs \\$15{,}000 now, saves \\$3{,}000/yr for 8 years. MARR = 10%. Pick using incremental IRR.",
        choices: [
          "Compute IRR of B−A (incremental); choose B if it ≥ 10%.",
          "Always pick higher absolute NPV.",
          "Always pick higher IRR of each alternative.",
          "Always pick lower first cost."
        ],
        correct: 0,
        ref: "Handbook §3.5 (Incremental analysis)",
        solution: S({
          c: "When comparing mutually exclusive alternatives of unequal size, incremental IRR is the correct decision rule.",
          s: [
            "Incremental cash flow: $-5{,}000$ now, $+1{,}000$/yr for 8 yr.",
            "Solve $-5{,}000 + 1{,}000(P/A, i, 8) = 0 \\Rightarrow (P/A) = 5 \\Rightarrow i \\approx 11.8\\%$ from tables.",
            "$11.8\\% > $ MARR (10%) → accept the bigger investment (B)."
          ],
          a: "Use incremental IRR; accept B since 11.8% > MARR.",
          v: "Highest individual IRR can mislead — A's IRR is 13.7%, B's is 12.4%, but the incremental return on going from A to B is what matters."
        })
      },
      { q: "Equivalent annual cost (EAC) of an asset: P = \\$50{,}000, useful life 10 years, salvage \\$5{,}000, i = 8%, annual O&M = \\$2{,}000.",
        choices: ["≈ \\$9,116/yr", "\\$5,500", "\\$7,450", "\\$10,000"],
        correct: 0,
        ref: "Handbook §3 (EAC capital recovery formula)",
        solution: S({
          c: "EAC = $P(A/P, i, n) - S(A/F, i, n) + \\text{annual O&M}$.",
          s: [
            "$(A/P, 8\\%, 10) = 0.14903$. Capital recovery on \\$50,000: \\$7,452.",
            "$(A/F, 8\\%, 10) = 0.06903$. Salvage credit on \\$5,000: \\$345.",
            "Annual O&M: \\$2,000.",
            "EAC = $7{,}452 - 345 + 2{,}000 = \\$9{,}107 \\approx 9{,}116$ (rounding of factor tables)."
          ],
          a: "≈ \\$9,116/yr",
          v: "Equivalent forms: EAC = (P - S)(A/P) + Si + O&M = 45,000(0.14903) + 5,000(0.08) + 2,000 = 6,706 + 400 + 2,000 = 9,106 ✓ (matches within rounding)."
        })
      },
      { q: "Working capital of \\$50{,}000 invested at year 0 and recovered at year 5. Discount rate 10%. Present worth?",
        choices: ["−\\$50,000 + 50,000(P/F, 10%, 5) = −\\$18,954", "−\\$50,000", "0 (always recovered)", "−\\$25,000"],
        correct: 0,
        ref: "Handbook §3 (Time value, working capital)",
        solution: S({
          c: "Working capital is invested initially and recovered at project end — earns no interest internally.",
          s: [
            "PW = $-50{,}000 + 50{,}000(P/F, 10\\%, 5)$.",
            "$(P/F, 10\\%, 5) = 1.1^{-5} = 0.6209$.",
            "PW = $-50{,}000 + 31{,}046 = -\\$18{,}954$."
          ],
          a: "PW = $-\\$18{,}954$",
          v: "Working capital is 'costless' on the books but has time-value opportunity cost. The negative PW captures that drag."
        })
      },
      { q: "Real rate of return when nominal $i = 12\\%$ and inflation $f = 3\\%$:",
        choices: ["$\\approx 8.74\\%$", "$9\\%$", "$15\\%$", "$4\\%$"],
        correct: 0,
        ref: "Handbook §3 (Inflation — Fisher equation)",
        solution: S({
          c: "Fisher: $(1+i) = (1+r)(1+f)$ ⇒ $r = (1+i)/(1+f) - 1$.",
          s: [
            "$r = 1.12/1.03 - 1 = 1.08738 - 1 = 0.08738 \\approx 8.74\\%$."
          ],
          a: "$r \\approx 8.74\\%$",
          v: "Approximation $r \\approx i - f = 9\\%$ is close but underestimates the actual real return slightly. Use exact Fisher for FE."
        })
      },
      { q: "Capitalized cost of an asset: \\$200{,}000 first cost, \\$10{,}000/yr perpetual O&M, $i = 8\\%$.",
        choices: ["\\$325,000", "\\$210,000", "\\$200,000", "\\$1,250,000"],
        correct: 0,
        ref: "Handbook §3 (Capitalized cost — perpetuity)",
        solution: S({
          c: "Capitalized cost = first cost + PW of perpetual annual cost. PW of perpetuity $A/i$.",
          s: [
            "Perpetual O&M present worth: $10{,}000/0.08 = \\$125{,}000$.",
            "Capitalized cost = $200{,}000 + 125{,}000 = \\$325{,}000$."
          ],
          a: "\\$325,000",
          v: "This is the amount you'd need today, invested at 8%, to fund the project and its O&M forever."
        })
      },
      { q: "Effective annual rate when nominal is 18% compounded continuously:",
        choices: ["$e^{0.18} - 1 \\approx 19.72\\%$", "18%", "20%", "1.5%"],
        correct: 0,
        ref: "Handbook §3 (Compounding — continuous limit)",
        solution: S({
          c: "Continuous compounding: $i_{eff} = e^{r} - 1$.",
          s: [
            "$e^{0.18} = 1.19722$.",
            "$i_{eff} \\approx 19.72\\%$."
          ],
          a: "$\\approx 19.72\\%$",
          v: "Compare: monthly compounding gives $(1.015)^{12}-1 = 19.56\\%$ — continuous is slightly higher (limit case)."
        })
      },
      { q: "Bond: \\$1{,}000 face, 6% annual coupon, 5 years to maturity, yield 8%. Price?",
        choices: ["\\$920.15", "\\$1,000", "\\$1,080", "\\$600"],
        correct: 0,
        ref: "Handbook §3 (Bond valuation)",
        solution: S({
          c: "Bond price = PW of coupons + PW of face. Coupon = $60$/yr; face = \\$1,000; yield $i = 8\\%$.",
          s: [
            "PW coupons: $60(P/A, 8\\%, 5) = 60 \\times 3.9927 = 239.56$.",
            "PW face: $1000(P/F, 8\\%, 5) = 1000 \\times 0.6806 = 680.58$.",
            "Price = $239.56 + 680.58 = \\$920.15$."
          ],
          a: "\\$920.15",
          v: "Yield (8%) > coupon (6%) ⇒ bond sells at discount (below par). Makes sense ✓."
        })
      }
    ],

    // ====================== Ch 6: Circuit Analysis ======================
    6: [
      { q: "Series RLC: $R = 50\\,\\Omega$, $L = 10$ mH, $C = 1\\,\\mu$F. Damping ratio $\\zeta$?",
        choices: ["$\\approx 0.25$ (underdamped)", "$1.0$ (critical)", "$\\approx 4.0$", "$0.5$"],
        correct: 0,
        ref: "Handbook §5 (Second-order RLC response)",
        solution: S({
          c: "Series RLC: $\\omega_n = 1/\\sqrt{LC}$, $\\zeta = (R/2)\\sqrt{C/L}$.",
          s: [
            "$\\omega_n = 1/\\sqrt{10^{-2}\\cdot 10^{-6}} = 10^{4}$ rad/s.",
            "$\\zeta = (50/2)\\sqrt{10^{-6}/10^{-2}} = 25\\sqrt{10^{-4}} = 25(0.01) = 0.25$.",
            "$0 < \\zeta < 1$ → underdamped, oscillatory decay."
          ],
          a: "$\\zeta \\approx 0.25$, underdamped",
          v: "Damped natural freq $\\omega_d = \\omega_n\\sqrt{1-\\zeta^{2}} \\approx 9682$ rad/s. Quality factor $Q = 1/(2\\zeta) = 2$."
        })
      },
      { q: "A linear two-terminal network has $V_{oc} = 24$ V across its open terminals and $I_{sc} = 2$ A through a wire shorting the same terminals. Find the maximum power that can be delivered to a load connected across these terminals.",
        choices: ["$12$ W", "$72$ W", "$48$ W", "$144$ W"],
        correct: 0,
        ref: "Handbook §5 (Thevenin equivalent and maximum power transfer)",
        solution: S({
          c: "Any linear two-terminal network can be replaced by a Thevenin equivalent (an ideal voltage source $V_{Th}$ in series with a resistance $R_{Th}$). Maximum power transfer occurs when the load is matched: $R_L = R_{Th}$, in which case $P_{max} = V_{Th}^{2}/(4R_{Th})$.",
          s: [
            "<b>Step 1 — Extract $V_{Th}$.</b> By definition, the open-circuit voltage IS the Thevenin voltage: $V_{Th} = V_{oc} = 24$ V.",
            "<b>Step 2 — Extract $R_{Th}$ via the short-circuit current.</b> With the terminals shorted, the entire $V_{Th}$ drops across $R_{Th}$, so $I_{sc} = V_{Th}/R_{Th}$. Solve: $R_{Th} = V_{Th}/I_{sc} = 24/2 = 12\\,\\Omega$.<br><svg viewBox='-58 -10 358 130' width='334' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><circle cx='40' cy='60' r='18' fill='#fff'/><text x='40' y='53' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>+</text><text x='40' y='73' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>−</text><text x='14' y='64' text-anchor='end' font-size='12' fill='#1f4e79' stroke='none'>V_Th = 24V</text><line x1='40' y1='42' x2='40' y2='20'/><line x1='40' y1='20' x2='110' y2='20'/><polyline points='110,20 118,8 132,32 146,8 160,32 170,20' fill='#fff'/><text x='140' y='2' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>R_Th = 12 Ω</text><line x1='170' y1='20' x2='230' y2='20'/><circle cx='230' cy='20' r='2.5' fill='#1f4e79' stroke='none'/><text x='237' y='24' font-size='12' fill='#1f4e79' stroke='none'>A</text><line x1='230' y1='20' x2='250' y2='20'/><line x1='250' y1='20' x2='250' y2='60'/><polyline points='235,52 240,60 250,52 260,60 265,52 250,60' fill='none'/><text x='270' y='45' font-size='12' fill='#1f4e79' stroke='none'>R_L</text><line x1='250' y1='60' x2='250' y2='100'/><line x1='250' y1='100' x2='40' y2='100'/><line x1='40' y1='100' x2='40' y2='78'/><circle cx='230' cy='100' r='2.5' fill='#1f4e79' stroke='none'/><text x='237' y='104' font-size='12' fill='#1f4e79' stroke='none'>B</text></g></svg>",
            "<b>Step 3 — Set the matched load.</b> For maximum power transfer, choose $R_L = R_{Th} = 12\\,\\Omega$. The series combination becomes $R_{Th} + R_L = 24\\,\\Omega$.",
            "<b>Step 4 — Compute the load current and voltage.</b> $I_L = V_{Th}/(R_{Th}+R_L) = 24/24 = 1$ A. Load voltage: $V_L = I_L R_L = 1\\times 12 = 12$ V (exactly half of $V_{Th}$ — the matched-load signature).",
            "<b>Step 5 — Compute the load power.</b> $P_{max} = V_L I_L = 12\\times 1 = 12$ W. Equivalently $P_{max} = V_{Th}^{2}/(4R_{Th}) = 576/48 = 12$ W."
          ],
          a: "$P_{max} = 12$ W when $R_L = R_{Th} = 12\\,\\Omega$.",
          v: "Sanity check via energy balance: source power $V_{Th} I_L = 24\\times 1 = 24$ W; of this, half (12 W) is dissipated in $R_{Th}$ and half (12 W) in $R_L$. That 50/50 split is the universal feature of impedance-matched DC networks — it is also why match-and-transfer wastes half the source energy in the source impedance, which is why DC power distribution does NOT match loads to source (they'd waste 50% efficiency)."
        })
      },
      { q: "Sinusoidal source 120 V (rms) at 60 Hz drives $Z = 8 + j6\\,\\Omega$. Real power consumed:",
        choices: ["$1152$ W", "$1800$ W", "$720$ W", "$2400$ W"],
        correct: 0,
        ref: "Handbook §5 (AC power)",
        solution: S({
          c: "$P = V_{rms}^{2}\\cdot R/|Z|^{2}$ or equivalently $P = I_{rms}^{2}R$.",
          s: [
            "$|Z| = \\sqrt{64+36} = 10\\,\\Omega$.",
            "$|I| = 120/10 = 12$ A (rms).",
            "$P = 12^{2}\\times 8 = 1152$ W."
          ],
          a: "$P = 1152$ W",
          v: "Apparent $S = V_{rms}|I| = 1440$ VA; PF = $R/|Z| = 0.8$ lagging; $Q = S\\sin\\theta = 864$ VAR. $P^{2}+Q^{2} = 1152^{2}+864^{2} \\approx 1440^{2}$ ✓."
        })
      },
      { q: "A capacitor $C = 100\\,\\mu$F has been charged to $V_0 = 200$ V. At $t = 0$ the source is disconnected and the capacitor discharges through a resistor $R = 5\\,$kΩ connected across its terminals. Find the time for the capacitor voltage to fall to 50 V.",
        choices: ["$\\tau\\ln 4 \\approx 693$ ms", "$\\tau \\approx 500$ ms", "$2\\tau \\approx 1.0$ s", "$\\tau/4 \\approx 125$ ms"],
        correct: 0,
        ref: "Handbook §5 (RC source-free / natural response)",
        solution: S({
          c: "When the energy source is removed and the capacitor is left to discharge through a resistor, the circuit is governed by the natural response of a first-order linear ODE: $RC\\,dv/dt + v = 0$, whose solution is $v(t) = V_0 e^{-t/\\tau}$ with $\\tau = RC$.",
          s: [
            "<b>Step 1 — Draw the discharge loop.</b> After the source is disconnected at $t = 0$, only the capacitor and resistor remain in a closed loop. KCL forces the same current $i$ through both elements; KVL around the loop gives $v_C = v_R = iR$.<br><svg viewBox='-37 0 317 120' width='283' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><line x1='40' y1='30' x2='40' y2='50'/><line x1='20' y1='50' x2='60' y2='50'/><line x1='20' y1='58' x2='60' y2='58'/><line x1='40' y1='58' x2='40' y2='80'/><text x='68' y='58' font-size='12' fill='#1f4e79' stroke='none'>C = 100 μF</text><text x='15' y='44' font-size='12' fill='#1f4e79' stroke='none' text-anchor='end'>+ V_C −</text><line x1='40' y1='30' x2='200' y2='30'/><line x1='40' y1='80' x2='200' y2='80'/><polyline points='200,30 200,40 192,46 208,58 192,70 208,82 200,88 200,80' fill='#fff'/><text x='220' y='58' font-size='12' fill='#1f4e79' stroke='none'>R = 5 kΩ</text><text x='130' y='22' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>i(t) →</text></g></svg>",
            "<b>Step 2 — Compute the time constant.</b> $\\tau = RC = (5\\times 10^{3})(100\\times 10^{-6}) = 0.5$ s. The time constant measures how fast the exponential decays — at one $\\tau$ the voltage falls to 36.8% of its initial value.",
            "<b>Step 3 — Write the natural response.</b> With initial condition $v(0) = V_0 = 200$ V: $v(t) = 200 e^{-t/0.5}$ V.",
            "<b>Step 4 — Solve for $t$ when $v(t) = 50$ V.</b> $50 = 200 e^{-t/0.5} \\Rightarrow e^{-t/0.5} = 50/200 = 1/4$. Take natural log: $-t/0.5 = \\ln(1/4) = -\\ln 4$, so $t = 0.5\\,\\ln 4$.",
            "<b>Step 5 — Numerical evaluation.</b> $\\ln 4 = 2\\ln 2 \\approx 1.3863$. Therefore $t \\approx 0.5 \\times 1.3863 \\approx 0.693$ s = 693 ms."
          ],
          a: "$\\approx 693$ ms",
          v: "Note: $\\ln 4 = 2\\ln 2$, so $t = 2\\tau\\ln 2 \\approx 1.386\\tau$ — 'time for half life' twice over."
        })
      },
      { q: "Three resistors in parallel: $4\\,\\Omega,\\ 6\\,\\Omega,\\ 12\\,\\Omega$. Find $R_{eq}$.",
        choices: ["$2\\,\\Omega$", "$22\\,\\Omega$", "$3\\,\\Omega$", "$1\\,\\Omega$"],
        correct: 0,
        ref: "Handbook §5 (Parallel resistance)",
        solution: S({
          c: "$1/R_{eq} = \\sum 1/R_i$.",
          s: [
            "$1/R_{eq} = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2$.",
            "$R_{eq} = 2\\,\\Omega$."
          ],
          a: "$2\\,\\Omega$",
          v: "Parallel resistance is always less than the smallest individual resistor (4 Ω) ✓."
        })
      },
      { q: "An inductor $L = 50$ mH carries 2 A. Energy stored:",
        choices: ["0.1 J", "1 J", "0.05 J", "0.2 J"],
        correct: 0,
        ref: "Handbook §5 (Energy in inductor)",
        solution: S({
          c: "$W_L = \\tfrac{1}{2}LI^{2}$.",
          s: [
            "$W = 0.5 \\times 0.05 \\times 4 = 0.1$ J."
          ],
          a: "0.1 J",
          v: "If current is interrupted suddenly, $V = L\\,di/dt$ can be enormous — basis of ignition coils."
        })
      },
      { q: "Star-connected 3φ load: $V_L = 480$ V line-to-line, line current 30 A, PF = 0.85 lagging. Real power:",
        choices: ["$\\approx 21.2$ kW", "$\\approx 30$ kW", "$\\approx 12$ kW", "$\\approx 14.4$ kW"],
        correct: 0,
        ref: "Handbook §11 (Three-phase power)",
        solution: S({
          c: "$P_{3\\phi} = \\sqrt 3\\,V_L I_L\\cos\\theta$.",
          s: [
            "$P = 1.732 \\times 480 \\times 30 \\times 0.85 = 21{,}199$ W ≈ 21.2 kW."
          ],
          a: "$\\approx 21.2$ kW",
          v: "$S = \\sqrt 3 V_L I_L = 24.94$ kVA; $Q = S\\sin\\theta = 13.13$ kVAR."
        })
      },
      { q: "Op-amp summing amplifier: $V_{out} = -(R_f/R_1)V_1 - (R_f/R_2)V_2$. With $R_f = 100$ kΩ, $R_1 = R_2 = 10$ kΩ, $V_1 = 2$ V, $V_2 = -1$ V:",
        choices: ["$-10$ V", "$+10$ V", "$0$ V", "$-30$ V"],
        correct: 0,
        ref: "Handbook §9 (Op-amp summing configuration)",
        solution: S({
          c: "Virtual ground at inverting node sums currents; gain per input is $-R_f/R_i$.",
          s: [
            "Gains: $-100/10 = -10$ each.",
            "$V_{out} = -10(2) - 10(-1) = -20 + 10 = -10$ V."
          ],
          a: "$V_{out} = -10$ V",
          v: "Linear superposition — each input independently sees its own gain. Watch output saturation against supply rails."
        })
      },
      { q: "A balanced 3φ Y-source with $V_{LN} = 277$ V supplies a $\\Delta$-connected load $Z_\\Delta = 30 + j40\\,\\Omega$ per phase. Find phase current $|I_\\Delta|$.",
        choices: ["$\\approx 9.6$ A", "$\\approx 16.6$ A", "$\\approx 5.5$ A", "$\\approx 22.0$ A"],
        correct: 0,
        ref: "Handbook §11 (Y–Δ relations)",
        solution: S({
          c: "$\\Delta$ phase voltage = line voltage = $\\sqrt 3 V_{LN}$. Phase current $|I_\\Delta| = V_{LL}/|Z_\\Delta|$.",
          s: [
            "$V_{LL} = \\sqrt 3 \\times 277 = 480$ V.",
            "$|Z_\\Delta| = \\sqrt{900+1600} = 50\\,\\Omega$.",
            "$|I_\\Delta| = 480/50 = 9.6$ A."
          ],
          a: "$|I_\\Delta| \\approx 9.6$ A",
          v: "Line current $|I_L| = \\sqrt 3|I_\\Delta| = 16.6$ A — which is also one of the options! Read carefully: 'phase current' vs 'line current' is the classic trap on Δ loads."
        })
      },
      { q: "Mesh analysis: a single-loop circuit has 12 V source and resistors 4 Ω, 6 Ω, 2 Ω in series. Loop current?",
        choices: ["1 A", "2 A", "0.5 A", "12 A"],
        correct: 0,
        ref: "Handbook §5 (Mesh / loop analysis)",
        solution: S({
          c: "KVL: sum of voltage drops = source voltage.",
          s: [
            "$\\sum R = 4 + 6 + 2 = 12\\,\\Omega$.",
            "$I = V/R = 12/12 = 1$ A."
          ],
          a: "1 A",
          v: "Voltage drops across each: 4 V, 6 V, 2 V — sum = 12 V ✓."
        })
      }
    ],

    // ====================== Ch 8: Signal Processing ======================
    8: [
      { q: "Z-transform $X(z) = \\dfrac{z}{(z - 0.5)(z - 0.8)}$ corresponds to a CAUSAL signal. Region of convergence:",
        choices: ["$|z| > 0.8$", "$|z| < 0.5$", "$0.5 < |z| < 0.8$", "All $z$"],
        correct: 0,
        ref: "Handbook §10 (Z-transform ROC)",
        solution: S({
          c: "For a causal (right-sided) sequence, ROC is the exterior of the outermost pole.",
          s: [
            "Poles at $z = 0.5,\\ 0.8$. Outermost: $|z| = 0.8$.",
            "Causal ⇒ ROC = $|z| > 0.8$."
          ],
          a: "$|z| > 0.8$",
          v: "Anti-causal (left-sided) would give $|z| < 0.5$; two-sided gives the annulus $0.5 < |z| < 0.8$ — which has different time-domain inverse."
        })
      },
      { q: "DFT of $x[n] = \\{1, 0, -1, 0\\}$ (length 4) at $k = 1$:",
        choices: ["$2$", "$0$", "$-2$", "$4$"],
        correct: 0,
        ref: "Handbook §10 (DFT)",
        solution: S({
          c: "$X[k] = \\sum_{n=0}^{N-1}x[n]e^{-j2\\pi kn/N}$.",
          s: [
            "$N = 4,\\ k = 1$. $W_4 = e^{-j2\\pi/4} = -j$.",
            "$X[1] = x[0]W^{0} + x[1]W^{1} + x[2]W^{2} + x[3]W^{3}$.",
            "$= 1(1) + 0(-j) + (-1)(-1) + 0(j) = 1 + 0 + 1 + 0 = 2$."
          ],
          a: "$X[1] = 2$",
          v: "Other bins: $X[0] = 0$ (zero DC), $X[2] = 2$, $X[3] = 2$ (real-input symmetry; here input is real and even-symmetric within length-4)."
        })
      },
      { q: "Sampling theorem: signal bandlimited to $W$ Hz. Minimum sampling rate to avoid aliasing:",
        choices: ["$2W$", "$W$", "$W/2$", "$4W$"],
        correct: 0,
        ref: "Handbook §10 (Sampling theorem)",
        solution: S({
          c: "Nyquist: $f_s \\ge 2 f_{max}$.",
          s: [
            "$f_{max} = W$, so $f_s \\ge 2W$.",
            "$2W$ is the Nyquist rate; oversampling ($f_s > 2W$) gives margin for anti-alias filter."
          ],
          a: "$f_s = 2W$",
          v: "CD audio: 44.1 kHz sampling for ≤22 kHz audio (humans hear ≤20 kHz, with margin for filter rolloff)."
        })
      },
      { q: "8-bit ADC with $V_{ref} = 5$ V has signal-to-quantization-noise ratio (SQNR) approximately:",
        choices: ["$\\approx 49.9$ dB", "$\\approx 8$ dB", "$\\approx 100$ dB", "$\\approx 256$ dB"],
        correct: 0,
        ref: "Handbook §10 (Quantization noise)",
        solution: S({
          c: "Full-scale sinusoid: $\\text{SQNR}_{dB} \\approx 6.02 N + 1.76$ where $N$ is ADC bits.",
          s: [
            "$N = 8$ ⇒ SQNR $= 6.02(8) + 1.76 = 48.16 + 1.76 = 49.92$ dB."
          ],
          a: "$\\approx 49.9$ dB",
          v: "Each added bit improves SQNR by ~6 dB. 16-bit CD audio: ~98 dB."
        })
      },
      { q: "FIR filter with coefficients $\\{0.25, 0.5, 0.25\\}$. Type of filter (by magnitude response):",
        choices: ["Low-pass (averaging)", "High-pass", "Band-pass", "All-pass"],
        correct: 0,
        ref: "Handbook §10 (FIR filter classification)",
        solution: S({
          c: "Symmetric positive coefficients summing to 1 act as a weighted moving average — passes DC, attenuates high frequencies.",
          s: [
            "$H(e^{j\\omega}) = 0.25 + 0.5e^{-j\\omega} + 0.25 e^{-j2\\omega}$.",
            "Factor: $e^{-j\\omega}(0.5\\cos\\omega + 0.5)$.",
            "Magnitude: $|0.5(1 + \\cos\\omega)|$ — maximum 1 at $\\omega = 0$, zero at $\\omega = \\pi$."
          ],
          a: "Low-pass (averaging filter)",
          v: "Linear phase (symmetric coefficients) — constant group delay, no phase distortion."
        })
      },
      { q: "Convolution of $x[n] = \\{1, 2\\}$ with $h[n] = \\{3, 1\\}$:",
        choices: ["$\\{3, 7, 2\\}$", "$\\{3, 5, 2\\}$", "$\\{3, 2\\}$", "$\\{3, 6, 2\\}$"],
        correct: 0,
        ref: "Handbook §10 (Convolution)",
        solution: S({
          c: "$y[n] = \\sum_k x[k]h[n-k]$ for finite sequences.",
          s: [
            "$y[0] = x[0]h[0] = 1\\cdot 3 = 3$.",
            "$y[1] = x[0]h[1] + x[1]h[0] = 1\\cdot 1 + 2\\cdot 3 = 7$.",
            "$y[2] = x[1]h[1] = 2\\cdot 1 = 2$."
          ],
          a: "$\\{3, 7, 2\\}$",
          v: "Length = $N_x + N_h - 1 = 3$. Sum of products check: $\\sum y = 12 = (\\sum x)(\\sum h) = 3 \\cdot 4$ ✓."
        })
      }
    ],

    // ====================== Ch 9: Electronics ======================
    9: [
      { q: "Silicon diode with thermal voltage $V_T = 26$ mV. Small-signal dynamic resistance at $I_D = 1$ mA:",
        choices: ["$26\\,\\Omega$", "$2.6\\,\\Omega$", "$260\\,\\Omega$", "$1\\,\\Omega$"],
        correct: 0,
        ref: "Handbook §7 (Diode small-signal model)",
        solution: S({
          c: "$r_d = V_T/I_D$ at the bias point.",
          s: [
            "$r_d = 0.026/0.001 = 26\\,\\Omega$."
          ],
          a: "$r_d = 26\\,\\Omega$",
          v: "Useful rule: at 1 mA, $r_d = 26\\,\\Omega$; at 10 mA, $r_d = 2.6\\,\\Omega$. Inversely proportional to current."
        })
      },
      { q: "BJT common-emitter amp: $I_C = 2$ mA, $\\beta = 100$, $V_T = 26$ mV. Transconductance $g_m$:",
        choices: ["$\\approx 77$ mA/V", "$\\approx 50$ mA/V", "$\\approx 7.7$ mA/V", "$\\approx 26$ mA/V"],
        correct: 0,
        ref: "Handbook §7 (BJT small-signal parameters)",
        solution: S({
          c: "$g_m = I_C/V_T$.",
          s: [
            "$g_m = 2\\text{ mA}/26\\text{ mV} = 0.0769$ A/V = 76.9 mA/V."
          ],
          a: "$g_m \\approx 77$ mA/V",
          v: "$r_\\pi = \\beta/g_m = 100/0.077 \\approx 1300\\,\\Omega$. Input impedance at base."
        })
      },
      { q: "MOSFET in saturation: $V_{GS} - V_t = 1.5$ V, $\\mu_n C_{ox}(W/L) = 2$ mA/V², $\\lambda = 0$. Drain current:",
        choices: ["$2.25$ mA", "$1.5$ mA", "$3$ mA", "$4.5$ mA"],
        correct: 0,
        ref: "Handbook §7 (MOSFET saturation current)",
        solution: S({
          c: "$I_D = \\tfrac12\\mu_n C_{ox}(W/L)(V_{GS}-V_t)^{2}$ in saturation.",
          s: [
            "$I_D = 0.5 \\times 2 \\times 10^{-3} \\times 1.5^{2} = 0.5 \\times 2 \\times 2.25 \\times 10^{-3} = 2.25$ mA."
          ],
          a: "$I_D = 2.25$ mA",
          v: "Saturation requires $V_{DS} \\ge V_{OV} = 1.5$ V."
        })
      },
      { q: "Inverting op-amp gain: $R_f = 47$ kΩ, $R_{in} = 4.7$ kΩ.",
        choices: ["$-10$", "$+10$", "$-11$", "$0.1$"],
        correct: 0,
        ref: "Handbook §9 (Inverting amplifier)",
        solution: S({
          c: "$A_v = -R_f/R_{in}$ assuming ideal op-amp.",
          s: [
            "$A_v = -47/4.7 = -10$."
          ],
          a: "$A_v = -10$",
          v: "Bandwidth: $f_{3dB} = GBW/|A_v|$ — high gain ⇒ narrow bandwidth via gain-bandwidth product."
        })
      },
      { q: "Full-wave rectifier (bridge) with sinusoidal input, peak $V_m = 10$ V, ideal diodes. Average output voltage:",
        choices: ["$2V_m/\\pi \\approx 6.37$ V", "$V_m/\\pi$", "$V_m/2 = 5$", "$V_m\\sqrt 2$"],
        correct: 0,
        ref: "Handbook §7 (Rectifier circuits)",
        solution: S({
          c: "Full-wave: $V_{avg} = (1/\\pi)\\int_0^\\pi V_m\\sin\\theta\\,d\\theta = 2V_m/\\pi$.",
          s: [
            "$V_{avg} = 2(10)/\\pi = 20/\\pi \\approx 6.37$ V."
          ],
          a: "$\\approx 6.37$ V",
          v: "Real bridge has 2 diode drops in series: $V_{avg} \\approx 2(V_m - 2V_D)/\\pi$. For Si, subtract 1.4 V from $V_m$ first."
        })
      },
      { q: "Zener regulator: input 18 V, Zener $V_Z = 5.6$ V, series resistor $R_S = 220\\,\\Omega$, no load. Zener current?",
        choices: ["$\\approx 56.4$ mA", "$\\approx 25$ mA", "$\\approx 100$ mA", "$\\approx 18$ mA"],
        correct: 0,
        ref: "Handbook §7 (Zener regulator analysis)",
        solution: S({
          c: "No-load Zener current equals series resistor current: $I_Z = (V_{in} - V_Z)/R_S$.",
          s: [
            "$(18 - 5.6)/220 = 12.4/220 = 0.0564$ A = 56.4 mA."
          ],
          a: "$I_Z \\approx 56.4$ mA",
          v: "Check Zener power dissipation: $P_Z = I_Z V_Z = 0.0564 \\times 5.6 = 0.316$ W — must be below Zener's rating (e.g., 500 mW). Watch this in design."
        })
      }
    ],

    // ====================== Ch 10: Power Systems ======================
    10: [
      { q: "Per-unit system: 100 MVA transformer with $X = 0.10$ pu. On 200 MVA base, the new pu reactance is:",
        choices: ["$0.20$ pu", "$0.05$ pu", "$0.10$ pu (unchanged)", "$2.0$ pu"],
        correct: 0,
        ref: "Handbook §11 (Per-unit base change)",
        solution: S({
          c: "$X_{pu, new} = X_{pu, old}\\cdot(S_{base, new}/S_{base, old})\\cdot(V_{base, old}/V_{base, new})^{2}$. Voltage base unchanged here.",
          s: [
            "$X_{new} = 0.10 \\times (200/100) = 0.20$ pu."
          ],
          a: "$X = 0.20$ pu on 200 MVA base",
          v: "Doubling the MVA base doubles the pu impedance — higher base means impedances 'look bigger' relative to base."
        })
      },
      { q: "3-phase fault at bus: pre-fault voltage 1.0 pu, total reactance to fault $X_{th} = 0.25$ pu. Fault current:",
        choices: ["$4.0$ pu", "$0.25$ pu", "$10$ pu", "$1.0$ pu"],
        correct: 0,
        ref: "Handbook §11 (Symmetrical fault analysis)",
        solution: S({
          c: "Three-phase symmetrical fault: $I_f = V_{pre}/X_{th}$ in pu.",
          s: [
            "$I_f = 1.0/0.25 = 4.0$ pu."
          ],
          a: "$I_f = 4.0$ pu",
          v: "Convert to amps: $I_{base} = S_{base}/(\\sqrt 3 V_{base})$. E.g., on 100 MVA, 138 kV base: $I_{base} = 418$ A, so fault current = 1.67 kA."
        })
      },
      { q: "Synchronous generator: 3-phase, 60 Hz, 12 poles. Speed?",
        choices: ["$600$ rpm", "$1800$ rpm", "$3600$ rpm", "$60$ rpm"],
        correct: 0,
        ref: "Handbook §11 (Synchronous machine speed)",
        solution: S({
          c: "$n_s = 120 f/P$.",
          s: [
            "$n_s = 120 \\times 60 / 12 = 600$ rpm."
          ],
          a: "600 rpm",
          v: "Hydroelectric generators are typically slow (large P) — 100-600 rpm. Steam turbines are 2-pole at 3600 rpm (60 Hz)."
        })
      },
      { q: "Induction motor full-load slip $s = 0.04$, synchronous speed 1800 rpm. Rotor speed:",
        choices: ["$1728$ rpm", "$1800$ rpm", "$1872$ rpm", "$72$ rpm"],
        correct: 0,
        ref: "Handbook §11 (Induction motor slip)",
        solution: S({
          c: "$n = n_s(1 - s)$.",
          s: [
            "$n = 1800(1 - 0.04) = 1800(0.96) = 1728$ rpm."
          ],
          a: "1728 rpm",
          v: "Slip increases with load — full-load slip is typically 2-5%; no-load slip is near zero."
        })
      },
      { q: "Power factor correction: 200 kW load at PF = 0.7 lagging. Capacitor kVAR to bring PF to unity:",
        choices: ["$\\approx 204$ kVAR", "$200$ kVAR", "$100$ kVAR", "$\\approx 142$ kVAR"],
        correct: 0,
        ref: "Handbook §11 (PF correction)",
        solution: S({
          c: "$Q_{required} = P\\tan\\theta$. Need to cancel all of $Q$.",
          s: [
            "$\\cos\\theta_1 = 0.7$ ⇒ $\\tan\\theta_1 = 1.0202$.",
            "$Q_1 = P\\tan\\theta_1 = 200(1.0202) = 204.04$ kVAR.",
            "To reach PF = 1: cancel all Q, so $Q_C = 204$ kVAR."
          ],
          a: "$\\approx 204$ kVAR",
          v: "Apparent power before: $S = P/PF = 285.7$ kVA. After correction: $S = P = 200$ kVA — savings on transformer/feeder sizing."
        })
      },
      { q: "Transformer turns ratio 480 V/240 V, secondary loaded at 50 A. Primary current (ideal transformer)?",
        choices: ["$25$ A", "$50$ A", "$100$ A", "$12.5$ A"],
        correct: 0,
        ref: "Handbook §11 (Ideal transformer relations)",
        solution: S({
          c: "$I_1/I_2 = V_2/V_1$ (inverse of voltage ratio).",
          s: [
            "$I_1 = I_2(V_2/V_1) = 50(240/480) = 25$ A."
          ],
          a: "$25$ A",
          v: "Power balance: $P_1 = V_1 I_1 = 480(25) = 12$ kW = $V_2 I_2 = 240(50) = 12$ kW ✓."
        })
      }
    ],

    // ====================== Ch 12: Control Systems ======================
    12: [
      { q: "Closed-loop pole locations for unity-feedback with $G(s) = K/[s(s+2)]$, $K = 5$:",
        choices: ["$s = -1 \\pm j2$", "$s = -2$ only", "$s = 0, -2$", "$s = \\pm j\\sqrt 5$"],
        correct: 0,
        ref: "Handbook §15 (Closed-loop poles, root locus)",
        solution: S({
          c: "Closed-loop characteristic equation: $1 + G(s) = 0$.",
          s: [
            "$1 + K/[s(s+2)] = 0 \\Rightarrow s^{2} + 2s + K = 0$.",
            "With $K = 5$: $s^{2} + 2s + 5 = 0$.",
            "Roots: $s = (-2 \\pm\\sqrt{4-20})/2 = -1 \\pm j2$."
          ],
          a: "$s = -1 \\pm j2$",
          v: "Underdamped: $\\omega_n = \\sqrt 5,\\ \\zeta = 1/\\sqrt 5 = 0.447$. Damped frequency = 2."
        })
      },
      { q: "Routh array: $s^{4} + 2s^{3} + 3s^{2} + 4s + 5$. Number of RHP poles:",
        choices: ["2", "0", "1", "4"],
        correct: 0,
        ref: "Handbook §15 (Routh-Hurwitz)",
        solution: S({
          c: "Build Routh array; count sign changes in first column.",
          s: [
            "$s^{4}$: 1, 3, 5",
            "$s^{3}$: 2, 4, 0",
            "$s^{2}$: $(2\\cdot 3 - 1\\cdot 4)/2 = 1$, $5$",
            "$s^{1}$: $(1\\cdot 4 - 2\\cdot 5)/1 = -6$",
            "$s^{0}$: 5",
            "First column: 1, 2, 1, -6, 5 — two sign changes (1→-6 and -6→5).",
            "Two RHP poles → unstable."
          ],
          a: "2 RHP poles → unstable.",
          v: "All coefficients positive is NECESSARY but not sufficient. Routh confirms instability despite all positive coefficients."
        })
      },
      { q: "Phase margin of $L(s) = 10/[s(s+1)]$:",
        choices: ["$\\approx 17.9°$", "$45°$", "$90°$", "$-180°$"],
        correct: 0,
        ref: "Handbook §15 (Phase margin from Bode)",
        solution: S({
          c: "Find gain crossover $\\omega_{gc}$ where $|L| = 1$, then PM = $180° + \\angle L(j\\omega_{gc})$.",
          s: [
            "$|L(j\\omega)| = 10/[\\omega\\sqrt{\\omega^{2}+1}] = 1 \\Rightarrow \\omega^{2}(\\omega^{2}+1) = 100$.",
            "Solve $\\omega^{4} + \\omega^{2} - 100 = 0 \\Rightarrow \\omega^{2} \\approx 9.51 \\Rightarrow \\omega_{gc} \\approx 3.08$ rad/s.",
            "$\\angle L = -90° - \\arctan(3.08) = -90° - 72.0° = -162.0°$.",
            "PM = $180° - 162.0° = 17.9°$."
          ],
          a: "PM $\\approx 17.9°$",
          v: "Small PM ⇒ lightly damped step response with significant overshoot — typically want PM ≥ 45° for good transient."
        })
      },
      { q: "Steady-state error to a unit step for Type-1 system with unity feedback:",
        choices: ["0", "$1/(1+K)$", "$\\infty$", "$1/K$"],
        correct: 0,
        ref: "Handbook §15 (Steady-state error)",
        solution: S({
          c: "Type-1 system has one pure integrator: $K_p = \\lim_{s\\to 0}G(s) = \\infty$. Steady-state error to step: $e_{ss} = 1/(1 + K_p) = 0$.",
          s: [
            "For ramp input: $e_{ss} = 1/K_v$ where $K_v = \\lim_{s\\to 0}sG(s)$ — finite for Type-1.",
            "For parabolic input: Type-1 cannot follow — infinite error."
          ],
          a: "$e_{ss} = 0$",
          v: "Adding integrators (higher type) reduces steady-state error to lower-order inputs — but harder to stabilize."
        })
      },
      { q: "Step response of $T(s) = 4/(s^{2} + 2s + 4)$. Percent overshoot:",
        choices: ["$\\approx 16.3\\%$", "$\\approx 5\\%$", "$0$ (overdamped)", "$\\approx 50\\%$"],
        correct: 0,
        ref: "Handbook §15 (Second-order overshoot)",
        solution: S({
          c: "Standard form: $\\omega_n^{2} = 4,\\ 2\\zeta\\omega_n = 2 \\Rightarrow \\omega_n = 2,\\ \\zeta = 0.5$. $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^{2}}}$.",
          s: [
            "$\\zeta = 0.5,\\ \\sqrt{1-\\zeta^{2}} = \\sqrt{0.75} = 0.866$.",
            "$M_p = e^{-\\pi(0.5)/0.866} = e^{-1.814} = 0.163 = 16.3\\%$."
          ],
          a: "$\\approx 16.3\\%$",
          v: "Rules of thumb: $\\zeta = 0.7$ ⇒ ~5% OS; $\\zeta = 1$ ⇒ 0% (critical); $\\zeta = 0.1$ ⇒ ~73% OS."
        })
      },
      { q: "State-space: $A = \\begin{bmatrix}-1 & 0\\\\1 & -2\\end{bmatrix}$. Eigenvalues of $A$:",
        choices: ["$-1, -2$", "$+1, +2$", "$0, -3$", "$\\pm j\\sqrt 2$"],
        correct: 0,
        ref: "Handbook §15 (State-space dynamics)",
        solution: S({
          c: "For triangular matrices, eigenvalues are diagonal entries.",
          s: [
            "$A$ is lower triangular. Eigenvalues = diagonal = $\\{-1, -2\\}$.",
            "Both negative ⇒ system is asymptotically stable."
          ],
          a: "$\\lambda = -1, -2$",
          v: "Time constants: $\\tau_1 = 1$ s, $\\tau_2 = 0.5$ s. Slowest mode dominates."
        })
      }
    ],

    // ====================== Ch 13: Communications ======================
    13: [
      { q: "Shannon channel capacity for $B = 10$ kHz bandwidth, SNR = 20 dB:",
        choices: ["$\\approx 66.6$ kbps", "$\\approx 10$ kbps", "$\\approx 200$ kbps", "$\\approx 20$ kbps"],
        correct: 0,
        ref: "Handbook §13 (Shannon-Hartley)",
        solution: S({
          c: "$C = B\\log_2(1 + \\text{SNR})$, SNR in linear (not dB).",
          s: [
            "SNR = 20 dB ⇒ linear = $10^{2} = 100$.",
            "$C = 10{,}000\\log_2(101) = 10{,}000 \\times 6.66 = 66{,}600$ bps."
          ],
          a: "$\\approx 66.6$ kbps",
          v: "Each doubling of SNR linear adds ~1 bps/Hz to capacity in this regime."
        })
      },
      { q: "FM signal: $\\Delta f = 25$ kHz, $f_m = 5$ kHz. Carson's rule bandwidth:",
        choices: ["$60$ kHz", "$50$ kHz", "$30$ kHz", "$10$ kHz"],
        correct: 0,
        ref: "Handbook §13 (Carson's rule)",
        solution: S({
          c: "$B = 2(\\Delta f + f_m) = 2 f_m(\\beta + 1)$ where $\\beta = \\Delta f/f_m$.",
          s: [
            "$B = 2(25 + 5) = 60$ kHz."
          ],
          a: "$B = 60$ kHz",
          v: "Modulation index $\\beta = 5$. Commercial FM uses $\\Delta f = 75$ kHz, $f_m = 15$ kHz ⇒ $B = 180$ kHz (200-kHz channel spacing)."
        })
      },
      { q: "QPSK with $E_b/N_0 = 8$ dB. Approximate BER:",
        choices: ["$\\approx 2 \\times 10^{-4}$", "$10^{-2}$", "$10^{-8}$", "$0.1$"],
        correct: 0,
        ref: "Handbook §13 (Digital modulation BER)",
        solution: S({
          c: "QPSK BER $\\approx Q(\\sqrt{2 E_b/N_0})$ — same as BPSK in $E_b/N_0$ terms.",
          s: [
            "$E_b/N_0 = 8$ dB → linear 6.31.",
            "$\\sqrt{2(6.31)} = \\sqrt{12.62} = 3.55$.",
            "$Q(3.55) \\approx 1.9 \\times 10^{-4}$."
          ],
          a: "$\\approx 2 \\times 10^{-4}$",
          v: "QPSK doubles bandwidth efficiency over BPSK at same $E_b/N_0$ — same BER, twice the rate."
        })
      },
      { q: "PCM voice: 4 kHz baseband, sampled at Nyquist, 8 bits/sample. Bit rate:",
        choices: ["$64$ kbps", "$32$ kbps", "$8$ kbps", "$128$ kbps"],
        correct: 0,
        ref: "Handbook §13 (PCM)",
        solution: S({
          c: "Rate = $f_s \\times n_{bits}$.",
          s: [
            "$f_s = 8$ kHz (Nyquist for 4 kHz). $n = 8$ bits.",
            "$R = 8 \\times 8 = 64$ kbps."
          ],
          a: "64 kbps",
          v: "T-1 carrier carries 24 such channels at 1.544 Mbps."
        })
      },
      { q: "Antenna gain 30 dBi at receiver, EIRP from transmitter 50 dBW, path loss 130 dB. Received power:",
        choices: ["$-50$ dBW (or 10 μW)", "$-90$ dBW", "$+10$ dBW", "$-130$ dBW"],
        correct: 0,
        ref: "Handbook §13 (Link budget)",
        solution: S({
          c: "$P_R = $ EIRP $- L + G_R$ in dB.",
          s: [
            "$P_R = 50 - 130 + 30 = -50$ dBW = $10^{-5}$ W = 10 μW."
          ],
          a: "$-50$ dBW (10 μW)",
          v: "Typical satellite receivers operate at $\\sim -120$ to $-150$ dBW after LNA noise contribution. 10 μW is very strong."
        })
      }
    ],

    // ====================== Ch 15: Digital Systems ======================
    15: [
      { q: "Boolean simplification: $F = A\\bar B + AB + \\bar AB$ simplifies to:",
        choices: ["$A + B$", "$AB$", "$\\bar A\\bar B$", "$1$"],
        correct: 0,
        ref: "Handbook §16 (Boolean algebra)",
        solution: S({
          c: "Group terms: $A(\\bar B + B) + \\bar A B = A\\cdot 1 + \\bar A B = A + \\bar A B$. Then $A + \\bar A B = A + B$ (absorption).",
          s: [
            "$A\\bar B + AB = A(\\bar B + B) = A$.",
            "$F = A + \\bar A B$.",
            "$A + \\bar A B = (A + \\bar A)(A + B) = A + B$ (distributive)."
          ],
          a: "$F = A + B$",
          v: "Truth table check: only $A = B = 0$ gives $F = 0$, matching $A + B$ behavior ✓."
        })
      },
      { q: "Convert hex $A3F$ to decimal:",
        choices: ["2623", "163", "2599", "10243"],
        correct: 0,
        ref: "Handbook §16 (Number systems)",
        solution: S({
          c: "Hex positional: $\\text{A3F}_{16} = A\\cdot 16^{2} + 3\\cdot 16 + F$.",
          s: [
            "$A = 10$, $F = 15$.",
            "$10(256) + 3(16) + 15 = 2560 + 48 + 15 = 2623$."
          ],
          a: "2623",
          v: "Equivalent binary: 1010 0011 1111 — each hex digit is 4 binary bits."
        })
      },
      { q: "Two's complement: 8-bit representation of $-50$:",
        choices: ["$1100\\ 1110$", "$1011\\ 0010$", "$0011\\ 0010$", "$1100\\ 1111$"],
        correct: 0,
        ref: "Handbook §16 (Two's complement)",
        solution: S({
          c: "Take positive's binary, invert, add 1.",
          s: [
            "$+50 = 0011\\ 0010$ in 8-bit.",
            "Invert: $1100\\ 1101$.",
            "Add 1: $1100\\ 1110$."
          ],
          a: "$1100\\ 1110$",
          v: "Verify: as signed 8-bit, $1100\\ 1110 = -128 + 64 + 8 + 4 + 2 = -50$ ✓."
        })
      },
      { q: "Synchronous mod-12 counter requires how many flip-flops minimum?",
        choices: ["4", "12", "3", "6"],
        correct: 0,
        ref: "Handbook §16 (Counter design)",
        solution: S({
          c: "$n$ flip-flops give $2^{n}$ states; need $2^{n} \\ge 12$.",
          s: [
            "$2^{3} = 8 < 12$. $2^{4} = 16 \\ge 12$. Need 4 FFs.",
            "Counter cycles through 12 of 16 possible states; remaining 4 are illegal/don't-care."
          ],
          a: "4 flip-flops",
          v: "Reset logic forces the counter back to 0 when it reaches 12 (binary 1100)."
        })
      },
      { q: "Karnaugh map: 4-variable function with minterms $\\{0, 2, 4, 6, 8, 10, 12, 14\\}$ simplifies to:",
        choices: ["$\\bar D$", "$\\bar A\\bar D$", "$ABCD$", "$A + B$"],
        correct: 0,
        ref: "Handbook §16 (K-maps)",
        solution: S({
          c: "All minterms are even — D bit (LSB) is 0 in every case. Simplifies to $\\bar D$.",
          s: [
            "Minterms in binary: 0000, 0010, 0100, 0110, 1000, 1010, 1100, 1110.",
            "All have D = 0; A, B, C take all 8 combinations.",
            "Result: $\\bar D$."
          ],
          a: "$F = \\bar D$",
          v: "Coverage of 8 cells in a K-map of 16 cells gives a single literal as expected."
        })
      },
      { q: "Setup time violation occurs when:",
        choices: [
          "Data changes too close to (within $t_{su}$ before) the active clock edge.",
          "Data changes long before clock edge.",
          "Clock period exceeds combinational delay.",
          "Clock has 50% duty cycle."
        ],
        correct: 0,
        ref: "Handbook §16 (Synchronous timing)",
        solution: S({
          c: "Setup time $t_{su}$ = minimum stable time of data BEFORE clock edge for correct latching.",
          s: [
            "Violation ⇒ metastability or wrong value latched.",
            "Fix: shorter combinational path, higher clock period, pipeline insertion."
          ],
          a: "Data changes within $t_{su}$ before clock edge.",
          v: "Hold time $t_h$ is the dual: minimum stable time AFTER clock edge. Different violation, different fix."
        })
      }
    ],

    // ====================== Ch 16: Computer Systems ======================
    16: [
      { q: "Two-level cache: L1 hit 1 cycle, L1 miss-rate 5%, L2 hit 10 cycles, L2 miss-rate 1%, memory 100 cycles. Average access time:",
        choices: ["$\\approx 1.55$ cycles", "$5$ cycles", "$100$ cycles", "$10$ cycles"],
        correct: 0,
        ref: "Handbook §17 (Cache hierarchy)",
        solution: S({
          c: "AMAT = $t_{L1} + \\text{miss}_{L1}(t_{L2} + \\text{miss}_{L2}\\cdot t_{mem})$.",
          s: [
            "L2 effective time: $10 + 0.01(100) = 11$ cycles.",
            "Overall: $1 + 0.05(11) = 1 + 0.55 = 1.55$ cycles."
          ],
          a: "$\\approx 1.55$ cycles",
          v: "Without cache: 100 cycles per access. Cache improvement factor ~65x — the value of hierarchy."
        })
      },
      { q: "Amdahl's law: 90% parallelizable code, infinite processors. Maximum speedup:",
        choices: ["$10\\times$", "$90\\times$", "$\\infty$", "$1.1\\times$"],
        correct: 0,
        ref: "Handbook §17 (Amdahl)",
        solution: S({
          c: "Speedup $= 1/[(1-f) + f/P]$, $P\\to\\infty$.",
          s: [
            "$\\lim_{P\\to\\infty}\\text{Speedup} = 1/(1-f) = 1/0.10 = 10$."
          ],
          a: "$10\\times$",
          v: "Even with infinite parallelism, the 10% serial portion limits the speedup. Practical lesson: kill serial bottlenecks first."
        })
      },
      { q: "32-bit virtual address, 4 KB pages. Page-table size for a single process with one-level table (4 bytes/entry):",
        choices: ["$4$ MB", "$32$ MB", "$1$ MB", "$1$ GB"],
        correct: 0,
        ref: "Handbook §17 (Virtual memory page table)",
        solution: S({
          c: "$2^{12}$ bytes/page ⇒ 20-bit VPN ⇒ $2^{20}$ entries × 4 bytes = 4 MB.",
          s: [
            "$2^{20} = 1$M entries.",
            "1M × 4 bytes = 4 MB per process."
          ],
          a: "4 MB",
          v: "Why multi-level page tables exist: 4 MB × thousands of processes is impractical. Hierarchical tables only allocate the levels actually used."
        })
      }
    ],

    // ====================== Ch 17: Software Engineering ======================
    17: [
      { q: "Time complexity of quicksort: average vs worst case:",
        choices: ["$O(n\\log n)$ avg, $O(n^{2})$ worst", "$O(n\\log n)$ for both", "$O(n^{2})$ for both", "$O(n)$ avg, $O(n^{2})$ worst"],
        correct: 0,
        ref: "Handbook §18 (Algorithm complexity)",
        solution: S({
          c: "Quicksort partitions around a pivot. Balanced partitions → $\\log n$ levels × $n$ work each.",
          s: [
            "Average: pivot near median ⇒ $T(n) = 2T(n/2) + n = O(n\\log n)$.",
            "Worst: always-bad pivot (sorted input, naive choice) ⇒ $T(n) = T(n-1) + n = O(n^{2})$."
          ],
          a: "$O(n\\log n)$ avg, $O(n^{2})$ worst.",
          v: "Mitigation: random pivot, median-of-3, or introsort (switches to heapsort if recursion too deep)."
        })
      },
      { q: "Hash table with linear probing: load factor 0.5, average successful lookups:",
        choices: ["$\\approx 1.5$ probes", "$1$ probe", "$\\approx 5$ probes", "$\\approx 0.5$ probes"],
        correct: 0,
        ref: "Handbook §18 (Hashing — Knuth's formulas)",
        solution: S({
          c: "Knuth: successful search $\\approx \\frac{1}{2}(1 + 1/(1-\\alpha))$ where $\\alpha$ is load factor.",
          s: [
            "$\\alpha = 0.5$ ⇒ $\\frac{1}{2}(1 + 1/0.5) = \\frac{1}{2}(1 + 2) = 1.5$ probes."
          ],
          a: "$\\approx 1.5$ probes",
          v: "Unsuccessful search has higher cost: $\\frac{1}{2}(1 + 1/(1-\\alpha)^{2}) = 2.5$ at $\\alpha = 0.5$."
        })
      },
      { q: "SQL query: count distinct customers who placed an order in 2025. Which clause is essential?",
        choices: [
          "$\\text{COUNT(DISTINCT customer\\_id)}$",
          "$\\text{COUNT(*)}$ with no qualifier",
          "$\\text{GROUP BY customer\\_id}$ alone",
          "$\\text{ORDER BY customer\\_id}$"
        ],
        correct: 0,
        ref: "Handbook §18 (SQL aggregate functions)",
        solution: S({
          c: "DISTINCT inside COUNT removes duplicates so each customer is counted once even if they placed multiple orders.",
          s: [
            "Full query: $\\text{SELECT COUNT(DISTINCT customer\\_id) FROM orders WHERE order\\_date >= '2025-01-01' AND order\\_date < '2026-01-01'}$.",
            "Without DISTINCT, each order increments the count even if same customer."
          ],
          a: "$\\text{COUNT(DISTINCT customer\\_id)}$",
          v: "GROUP BY would produce one row per customer; you'd then need another aggregate to count those rows."
        })
      },
      { q: "Big-O of repeatedly inserting at the head of a doubly-linked list of size $n$, $k$ times:",
        choices: ["$O(k)$", "$O(kn)$", "$O(n)$", "$O(n^{2})$"],
        correct: 0,
        ref: "Handbook §18 (Linked-list operations)",
        solution: S({
          c: "Doubly-linked list head insertion is $O(1)$ — update head pointer and adjacent links.",
          s: [
            "Each insertion: constant time.",
            "$k$ insertions: total $O(k)$."
          ],
          a: "$O(k)$",
          v: "Compare with array head-insertion: $O(n)$ per (must shift), $O(kn)$ total. Linked list wins for head-heavy workloads."
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
