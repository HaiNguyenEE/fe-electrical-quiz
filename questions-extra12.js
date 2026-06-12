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
          c: "Constrained optimization: at the optimum, the gradient of the objective is parallel to the gradient of the constraint — $\\nabla f = \\lambda\\nabla g$ with $g(x,y) = x + 2y - 5 = 0$.",
          s: [
            "<b>Step 1 — Write the multiplier equations.</b> $\\nabla f = (2x, 2y)$, $\\nabla g = (1, 2)$. Setting $\\nabla f = \\lambda\\nabla g$: $2x = \\lambda$ and $2y = 2\\lambda$.",
            "<b>Step 2 — Eliminate $\\lambda$.</b> From the pair: $2y = 2(2x) \\Rightarrow y = 2x$. The optimum lies along this ray.",
            "<b>Step 3 — Enforce the constraint.</b> $x + 2(2x) = 5x = 5 \\Rightarrow x = 1$, $y = 2$.",
            "<b>Step 4 — Evaluate.</b> $f(1,2) = 1 + 4 = 5$. It is a minimum because $f$ grows without bound along the constraint line in both directions."
          ],
          a: "$(x,y) = (1,2)$ with $f_{min} = 5$.",
          v: "Geometric check: minimizing $x^{2}+y^{2}$ on a line finds the closest point to the origin. Distance from origin to $x+2y=5$ is $|{-5}|/\\sqrt{1^{2}+2^{2}} = 5/\\sqrt 5 = \\sqrt 5$, and $(\\sqrt 5)^{2} = 5$ ✓. Distractor $(2,1)$ also gives $f = 5$ but is NOT on the gradient-parallel condition ($2+2 = 4 \\ne 5$ constraint ✓ wait: $2+2(1)=4\\ne5$ — it violates the constraint entirely)."

        })
      },
      { q: "Evaluate the line integral $\\oint_C (x\\,dy - y\\,dx)$ where $C$ is the unit circle traversed counter-clockwise.",
        choices: ["$2\\pi$", "$0$", "$\\pi$", "$-2\\pi$"],
        correct: 0,
        ref: "Handbook §1.5.4 (Green's theorem)",
        solution: S({
          c: "Green's theorem converts a closed line integral to a double integral: $\\oint_C(P\\,dx + Q\\,dy) = \\iint_D(\\partial_x Q - \\partial_y P)\\,dA$. Here $P = -y$, $Q = x$.",
          s: [
            "<b>Step 1 — Compute the integrand.</b> $\\partial_x Q - \\partial_y P = 1 - (-1) = 2$ — a constant.",
            "<b>Step 2 — Integrate over the disc.</b> $\\iint_D 2\\,dA = 2\\,\\text{Area} = 2\\pi(1)^{2} = 2\\pi$.",
            "<b>Step 3 — Note the orientation.</b> Counter-clockwise traversal is the positive orientation Green's theorem assumes; clockwise would flip the sign to $-2\\pi$ (distractor D)."
          ],
          a: "$2\\pi$",
          v: "Direct parametrization check: $x = \\cos\\theta$, $y = \\sin\\theta$ gives $x\\,dy - y\\,dx = (\\cos^{2}\\theta + \\sin^{2}\\theta)\\,d\\theta = d\\theta$, and $\\int_0^{2\\pi}d\\theta = 2\\pi$ ✓. Memorable identity: $\\tfrac12\\oint(x\\,dy - y\\,dx)$ = enclosed area — the planimeter formula."

        })
      },
      { q: "The Laplace transform $\\mathcal L\\{t^{2}e^{-2t}\\}$ equals:",
        choices: ["$\\dfrac{2}{(s+2)^{3}}$", "$\\dfrac{1}{(s+2)^{3}}$", "$\\dfrac{2}{(s-2)^{3}}$", "$\\dfrac{1}{s^{3}+2}$"],
        correct: 0,
        ref: "Handbook §1.7 (Laplace transform pair table)",
        solution: S({
          c: "Two table entries compose the answer: the power pair $\\mathcal L\\{t^{n}\\} = n!/s^{n+1}$ and the frequency-shift (damping) property $\\mathcal L\\{e^{-at}f(t)\\} = F(s+a)$.",
          s: [
            "<b>Step 1 — Transform the power factor.</b> $\\mathcal L\\{t^{2}\\} = 2!/s^{3} = 2/s^{3}$.",
            "<b>Step 2 — Apply the shift for $e^{-2t}$.</b> Multiplying by $e^{-2t}$ in time shifts every $s$ to $s + 2$: $F(s+2) = 2/(s+2)^{3}$.",
            "<b>Step 3 — Distractor audit.</b> $1/(s+2)^{3}$ drops the $2! = 2$; $2/(s-2)^{3}$ shifts the wrong way (that is $e^{+2t}$, a GROWING signal); $1/(s^{3}+2)$ is not a valid transform shape at all."
          ],
          a: "$\\dfrac{2}{(s+2)^{3}}$",
          v: "Pole check: a triple pole at $s = -2$ matches a $t^{2}$-weighted decaying exponential ✓. Initial-value theorem: $\\lim_{s\\to\\infty} sF(s) = 0 = f(0^{+})$ ✓ ($t^{2}e^{-2t}$ starts at zero)."

        })
      },
      { q: "Find the radius of convergence of the power series $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{(x-3)^{n}}{n\\,2^{n}}$.",
        choices: ["$2$", "$1$", "$3$", "$\\infty$"],
        correct: 0,
        ref: "Handbook §1.3 (Series and convergence)",
        solution: S({
          c: "For a power series $\\sum a_n(x - x_0)^{n}$, the ratio test gives $R = \\lim|a_n/a_{n+1}|$. The center here is $x_0 = 3$.",
          s: [
            "<b>Step 1 — Identify coefficients.</b> $a_n = \\dfrac{1}{n\\,2^{n}}$.",
            "<b>Step 2 — Form the ratio.</b> $\\left|\\dfrac{a_n}{a_{n+1}}\\right| = \\dfrac{(n+1)\\,2^{n+1}}{n\\,2^{n}} = 2\\cdot\\dfrac{n+1}{n} \\xrightarrow{n\\to\\infty} 2$.",
            "<b>Step 3 — State the interval.</b> $R = 2$: converges for $|x - 3| < 2$, i.e. $1 < x < 5$, with endpoints needing separate tests."
          ],
          a: "$R = 2$",
          v: "Endpoint check (confirms $R$ is exactly 2): at $x = 5$ the series is $\\sum 1/n$ — divergent harmonic; at $x = 1$ it is $\\sum(-1)^{n}/n$ — convergent alternating harmonic. One endpoint in, one out — classic ✓. The $1/n$ factor affects endpoints only, never the radius (set by the geometric $2^{n}$)."

        })
      },
      { q: "Solve $\\dfrac{dy}{dx} = \\dfrac{y}{x+1}$ with $y(0) = 2$ by separation of variables.",
        choices: ["$y = 2(x+1)$", "$y = 2e^{x}$", "$y = 2\\ln(x+1)$", "$y = (x+1)^{2}$"],
        correct: 0,
        ref: "Handbook §1.6 (First-order ODE)",
        solution: S({
          c: "The equation is separable: move all $y$ dependence left, all $x$ dependence right — $\\dfrac{dy}{y} = \\dfrac{dx}{x+1}$ — then integrate both sides.",
          s: [
            "<b>Step 1 — Integrate.</b> $\\ln|y| = \\ln|x+1| + C_1$.",
            "<b>Step 2 — Exponentiate.</b> $y = C(x+1)$ where $C = \\pm e^{C_1}$ absorbs the sign.",
            "<b>Step 3 — Apply the initial condition.</b> $y(0) = C(1) = 2 \\Rightarrow C = 2$, so $y = 2(x+1)$.",
            "<b>Step 4 — Distractor audit.</b> $2e^{x}$ solves $y' = y$ (wrong denominator); $2\\ln(x+1)$ comes from integrating the wrong side; $(x+1)^{2}$ solves $y' = 2y/(x+1)$."
          ],
          a: "$y = 2(x+1)$",
          v: "Substitute back: $y' = 2$ and $\\dfrac{y}{x+1} = \\dfrac{2(x+1)}{x+1} = 2$ — identical ✓. The solution is a straight line through $(0,2)$ with slope 2; the ODE's slope field is indeed constant along it."

        })
      },
      { q: "For matrix $A = \\begin{bmatrix} 3 & 1\\\\ 0 & 2\\end{bmatrix}$, what is $A^{10}$ (top-left entry only)?",
        choices: ["$3^{10}$", "$2^{10}$", "$5^{10}$", "$10 \\cdot 3^{9}$"],
        correct: 0,
        ref: "Handbook §1.4 (Linear algebra — powers of triangular matrices)",
        solution: S({
          c: "Powers of a triangular matrix stay triangular, and each diagonal entry simply gets raised to the power: $(A^{n})_{ii} = a_{ii}^{n}$.",
          s: [
            "<b>Step 1 — Recognize the structure.</b> $A$ is upper triangular with diagonal $\\{3, 2\\}$ — its eigenvalues.",
            "<b>Step 2 — Multiply once to see the pattern.</b> $A^{2} = \\begin{bmatrix}9 & 5\\\\0 & 4\\end{bmatrix}$: diagonal is $\\{3^{2}, 2^{2}\\}$; only the off-diagonal mixes.",
            "<b>Step 3 — Apply at $n = 10$.</b> $(A^{10})_{11} = 3^{10} = 59{,}049$."
          ],
          a: "$3^{10} = 59{,}049$",
          v: "Induction: if $(A^{k})_{11} = 3^{k}$, then $(A^{k+1})_{11} = 3\\cdot 3^{k}$ because row 1 of $A$ hits column 1 of $A^{k}$, whose below-diagonal entry is 0 ✓. Distractor $5^{10}$ baits with $3 + 2$; $10\\cdot 3^{9}$ resembles a derivative rule, not matrix power."

        })
      },
      { q: "$\\displaystyle\\int_{0}^{\\infty} x e^{-2x}\\,dx$ equals:",
        choices: ["$\\dfrac{1}{4}$", "$\\dfrac{1}{2}$", "$1$", "Diverges"],
        correct: 0,
        ref: "Handbook §1.5 (Improper integrals / Gamma function)",
        solution: S({
          c: "Gamma-function template: $\\displaystyle\\int_0^{\\infty}x^{n}e^{-ax}dx = \\dfrac{n!}{a^{n+1}}$ — worth memorizing for the FE.",
          s: [
            "<b>Step 1 — Match parameters.</b> $n = 1$, $a = 2$.",
            "<b>Step 2 — Evaluate.</b> $\\dfrac{1!}{2^{2}} = \\dfrac{1}{4}$.",
            "<b>Step 3 — Convergence sanity.</b> The exponential decay dominates the linear growth, so the improper integral converges — 'diverges' is bait for sign confusion."
          ],
          a: "$1/4$",
          v: "Integration-by-parts check: $u = x$, $dv = e^{-2x}dx$ → $\\left[-\\tfrac{x}{2}e^{-2x}\\right]_0^{\\infty} + \\tfrac12\\int_0^{\\infty}e^{-2x}dx = 0 + \\tfrac12\\cdot\\tfrac12 = \\tfrac14$ ✓. Probability view: this is $E[X]/2$... more directly, it equals $E[X]\\cdot\\tfrac12$ where $X\\sim$Exp(2) has mean $\\tfrac12$ — i.e. $\\tfrac12\\times\\tfrac12 = \\tfrac14$ ✓."

        })
      },
      { q: "Fourier-series coefficient $b_n$ for $f(t) = \\text{sgn}(\\sin t)$ (square wave, period $2\\pi$) is:",
        choices: ["$\\dfrac{4}{n\\pi}$ for odd $n$, 0 for even", "$\\dfrac{2}{n\\pi}$ for all $n$", "$\\dfrac{1}{n}$", "$\\dfrac{4}{n^{2}\\pi}$"],
        correct: 0,
        ref: "Handbook §1.7 (Fourier series of standard waveforms)",
        solution: S({
          c: "A ±1 square wave is odd and half-wave symmetric: only SINE terms survive, only ODD harmonics appear, and the classic amplitude is $b_n = 4/(n\\pi)$.",
          s: [
            "<b>Step 1 — Use symmetry to kill terms.</b> Odd function ⇒ all $a_n = 0$ (no cosines, no DC). Half-wave symmetry $f(t + T/2) = -f(t)$ ⇒ even harmonics vanish.",
            "<b>Step 2 — Compute a surviving coefficient.</b> $b_n = \\dfrac{2}{\\pi}\\displaystyle\\int_0^{\\pi}\\sin(nt)\\,dt = \\dfrac{2}{n\\pi}[1 - \\cos n\\pi]$ — equals $\\dfrac{4}{n\\pi}$ for odd $n$, 0 for even.",
            "<b>Step 3 — Distractor audit.</b> $4/(n^{2}\\pi)$ is the TRIANGLE wave's decay (smoother signal → faster rolloff); $2/(n\\pi)$ for all $n$ describes a sawtooth's magnitude pattern."
          ],
          a: "$b_n = 4/(n\\pi)$ for odd $n$; zero for even $n$.",
          v: "Amplitude check: fundamental $4/\\pi \\approx 1.273 > 1$ — the first harmonic overshoots the square wave's level, which is why partial sums show Gibbs ears ✓. Decay rate $1/n$ matches the rule: discontinuous signal → coefficients fall as $1/n$."

        })
      },
      { q: "Find the gradient of $\\phi(x,y,z) = x^{2}y + yz^{3}$ at $(1, 2, -1)$.",
        choices: ["$\\langle 4,\\ 0,\\ 6\\rangle$", "$\\langle 2,\\ 4,\\ -3\\rangle$", "$\\langle 4,\\ 2,\\ -1\\rangle$", "$\\langle 0,\\ -1,\\ 6\\rangle$"],
        correct: 0,
        ref: "Handbook §1.5 (Gradient operator)",
        solution: S({
          c: "The gradient collects the three partial derivatives: $\\nabla\\phi = \\langle\\phi_x, \\phi_y, \\phi_z\\rangle$, then evaluate at the point.",
          s: [
            "<b>Step 1 — $x$-partial.</b> $\\phi_x = 2xy \\Rightarrow 2(1)(2) = 4$.",
            "<b>Step 2 — $y$-partial.</b> $\\phi_y = x^{2} + z^{3} \\Rightarrow 1 + (-1) = 0$ (note $(-1)^{3} = -1$ — sign trap).",
            "<b>Step 3 — $z$-partial.</b> $\\phi_z = 3yz^{2} \\Rightarrow 3(2)(1) = 6$ (here $z^{2} = +1$ — the square kills the sign)."
          ],
          a: "$\\nabla\\phi(1,2,-1) = \\langle 4,\\ 0,\\ 6\\rangle$",
          v: "The two sign traps are the whole question: $z^{3}$ keeps the minus, $z^{2}$ discards it — mixing them up produces the distractors. Magnitude if needed: $|\\nabla\\phi| = \\sqrt{16 + 36} = \\sqrt{52} \\approx 7.2$, the steepest-ascent rate at that point ✓."

        })
      },
      { q: "Numerical method: bisection on $f(x) = x^{3} - x - 2$ over $[1, 2]$. After 3 iterations the bracket is:",
        choices: ["$[1.5, 1.625]$", "$[1.25, 1.5]$", "$[1, 1.5]$", "$[1.625, 2]$"],
        correct: 0,
        ref: "Handbook §1.8 (Root finding — bisection)",
        solution: S({
          c: "Bisection keeps whichever half-interval still brackets the root (endpoints with opposite signs of $f$), halving the bracket each iteration.",
          s: [
            "<b>Step 1 — Confirm the starting bracket.</b> $f(1) = 1 - 1 - 2 = -2 < 0$; $f(2) = 8 - 2 - 2 = 4 > 0$ → root in $[1, 2]$.",
            "<b>Step 2 — Iteration 1.</b> Midpoint 1.5: $f(1.5) = 3.375 - 3.5 = -0.125 < 0$. Sign change is now between 1.5 and 2 → keep $[1.5,\\ 2]$.",
            "<b>Step 3 — Iteration 2.</b> Midpoint 1.75: $f(1.75) = 5.359 - 3.75 = +1.609 > 0$ → keep $[1.5,\\ 1.75]$.",
            "<b>Step 4 — Iteration 3.</b> Midpoint 1.625: $f(1.625) = 4.291 - 3.625 = +0.666 > 0$ → keep $[1.5,\\ 1.625]$."
          ],
          a: "$[1.5,\\ 1.625]$ after three iterations.",
          v: "Width check: $1 \\to 0.5 \\to 0.25 \\to 0.125$ — exactly $(b-a)/2^{3}$ ✓. The true root is $\\approx 1.5214$, which indeed lies inside $[1.5, 1.625]$ ✓. Error bound after $n$ iterations: $(b-a)/2^{n+1}$ — guaranteed, if slow (1 bit per iteration)."

        })
      },
      { q: "Complex Taylor series of $\\dfrac{1}{1-z}$ about $z = 0$ converges in:",
        choices: ["$|z| < 1$", "$|z| < 2$", "All of $\\mathbb C$", "$|z| > 1$"],
        correct: 0,
        ref: "Handbook §1.3 (Geometric series / radius of convergence)",
        solution: S({
          c: "A complex Taylor series converges inside the largest disc (centered at the expansion point) that avoids every singularity. $1/(1-z)$ has one pole, at $z = 1$.",
          s: [
            "<b>Step 1 — Write the series.</b> $\\dfrac{1}{1-z} = 1 + z + z^{2} + \\cdots$ — the geometric series, convergent when the ratio satisfies $|z| < 1$.",
            "<b>Step 2 — Confirm with the singularity rule.</b> Distance from center $z=0$ to the nearest (only) pole $z = 1$ is 1 → $R = 1$. The two arguments agree, as they must.",
            "<b>Step 3 — Distractor audit.</b> 'All of $\\mathbb C$' would require an entire function (no poles); $|z| > 1$ describes a LAURENT series about infinity — different expansion; $|z| < 2$ has no singularity at distance 2 to justify it."
          ],
          a: "Open disc $|z| < 1$.",
          v: "Boundary behavior: at $z = 1$ the terms are all 1 — series diverges; at $z = -1$ the partial sums oscillate 1, 0, 1, 0 — also no convergence. So nothing on $|z| = 1$ converges here, consistent with $R = 1$ ✓."

        })
      },
      { q: "Convert $z = 1 + j\\sqrt 3$ to exponential form $re^{j\\theta}$.",
        choices: ["$2e^{j\\pi/3}$", "$\\sqrt 2 e^{j\\pi/4}$", "$2e^{j\\pi/6}$", "$2e^{-j\\pi/3}$"],
        correct: 0,
        ref: "Handbook §1.2 (Complex numbers in polar form)",
        solution: S({
          c: "Polar conversion: $r = \\sqrt{a^{2} + b^{2}}$ and $\\theta = \\arctan(b/a)$, with the quadrant checked from the signs of $(a, b)$.",
          s: [
            "<b>Step 1 — Magnitude.</b> $r = \\sqrt{1^{2} + (\\sqrt 3)^{2}} = \\sqrt 4 = 2$.",
            "<b>Step 2 — Angle.</b> $\\theta = \\arctan(\\sqrt 3/1) = 60° = \\pi/3$; both parts positive → first quadrant, no correction needed.",
            "<b>Step 3 — Assemble.</b> $z = 2e^{j\\pi/3}$. Distractors: $\\pi/6$ swaps the roles of the parts ($\\arctan(1/\\sqrt3)$); $-\\pi/3$ is the conjugate $1 - j\\sqrt3$; $\\sqrt2 e^{j\\pi/4}$ belongs to $1+j$."
          ],
          a: "$z = 2e^{j\\pi/3}$",
          v: "Euler check: $2(\\cos 60° + j\\sin 60°) = 2(\\tfrac12 + j\\tfrac{\\sqrt3}{2}) = 1 + j\\sqrt3$ ✓. This form makes powers trivial: e.g. $z^{3} = 8e^{j\\pi} = -8$ by De Moivre."

        })
      },
      { q: "If $A$ is $n\\times n$ and $\\det A = 0$, then $A$:",
        choices: ["Is singular and has at least one zero eigenvalue", "Is invertible", "Is symmetric", "Has rank $n$"],
        correct: 0,
        ref: "Handbook §1.4 (Determinants, singular matrices)",
        solution: S({
          c: "The determinant equals the product of the eigenvalues: $\\det A = \\lambda_1\\lambda_2\\cdots\\lambda_n$. A zero product forces at least one zero factor.",
          s: [
            "<b>Step 1 — Zero eigenvalue.</b> $\\det A = 0 \\Rightarrow$ some $\\lambda_i = 0$, i.e. $A\\vec v = 0$ has a non-trivial solution $\\vec v$.",
            "<b>Step 2 — Singularity.</b> A non-trivial null space means $A$ cannot be inverted (two different inputs map to the same output) — $A$ is singular, rank $< n$.",
            "<b>Step 3 — Eliminate distractors.</b> Invertible requires $\\det \\ne 0$ — direct contradiction. Symmetry is unrelated to the determinant's value. Rank $n$ (full rank) is equivalent to invertibility — also contradicted."
          ],
          a: "Singular, with at least one zero eigenvalue (rank $< n$).",
          v: "Concrete check: $A = \\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$ has $\\det = 0$, eigenvalues $\\{0, 2\\}$ (product 0 ✓), rank 1, null vector $(1,-1)^{T}$ ✓. Equivalence chain worth memorizing: $\\det A = 0 \\Leftrightarrow$ singular $\\Leftrightarrow$ rank $< n \\Leftrightarrow$ $0 \\in$ spectrum $\\Leftrightarrow$ columns linearly dependent."

        })
      },
      { q: "Mean-value theorem: if $f$ continuous on $[0, 4]$, differentiable on $(0, 4)$, $f(0) = 1$, $f(4) = 9$, then there exists $c\\in (0,4)$ with $f'(c) =$:",
        choices: ["$2$", "$8$", "$\\frac{1}{2}$", "$4$"],
        correct: 0,
        ref: "Handbook §1.5 (MVT, derivative properties)",
        solution: S({
          c: "MVT: under continuity on $[a,b]$ and differentiability on $(a,b)$, some interior point $c$ has $f'(c)$ equal to the SECANT slope $\\dfrac{f(b)-f(a)}{b-a}$.",
          s: [
            "<b>Step 1 — Compute the secant slope.</b> $\\dfrac{f(4) - f(0)}{4 - 0} = \\dfrac{9 - 1}{4} = 2$.",
            "<b>Step 2 — Apply the theorem.</b> Hypotheses hold, so $\\exists\\,c \\in (0,4)$ with $f'(c) = 2$. The theorem guarantees existence — it does not locate $c$.",
            "<b>Step 3 — Distractor audit.</b> 8 is the rise alone (forgot to divide); $\\tfrac12$ inverts the ratio; 4 is the run."
          ],
          a: "$f'(c) = 2$",
          v: "Concrete instance: if $f(x) = \\tfrac12 x^{2} + 1$ (which satisfies the endpoint data: $f(0)=1$, $f(4)=9$), then $f'(x) = x = 2$ at $c = 2 \\in (0,4)$ ✓. MVT is the engine behind error bounds in numerical methods — it converts function differences into derivative values."

        })
      },
      { q: "Find $\\displaystyle\\frac{d^{2}}{dx^{2}}\\!\\left[x\\sin x\\right]$.",
        choices: ["$2\\cos x - x\\sin x$", "$x\\cos x$", "$-x\\sin x$", "$\\cos x + \\sin x$"],
        correct: 0,
        ref: "Handbook §1.5 (Higher derivatives, product rule)",
        solution: S({
          c: "Differentiate twice with the product rule: $(uv)' = u'v + uv'$, applied carefully at each stage.",
          s: [
            "<b>Step 1 — First derivative.</b> $\\dfrac{d}{dx}[x\\sin x] = (1)\\sin x + x\\cos x = \\sin x + x\\cos x$.",
            "<b>Step 2 — Second derivative.</b> Differentiate each piece: $\\dfrac{d}{dx}\\sin x = \\cos x$; $\\dfrac{d}{dx}[x\\cos x] = \\cos x - x\\sin x$. Sum: $2\\cos x - x\\sin x$.",
            "<b>Step 3 — Distractor audit.</b> $-x\\sin x$ drops the $2\\cos x$ cross terms (the most common slip); $x\\cos x$ stops after a partial first derivative."
          ],
          a: "$2\\cos x - x\\sin x$",
          v: "Spot check at $x = 0$: formula gives $2\\cos 0 - 0 = 2$. Independent check via Taylor: $x\\sin x = x^{2} - x^{4}/6 + \\cdots$, so $f''(x) = 2 - 2x^{2} + \\cdots \\to 2$ at $x=0$ ✓. Structure check: even function (product of two odds), and $2\\cos x - x\\sin x$ is indeed even ✓."

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
          c: "For a Poisson process, the count in an interval of length $t$ is Poisson with mean $\\lambda t$: $P(X = k) = (\\lambda t)^{k}e^{-\\lambda t}/k!$.",
          s: [
            "<b>Step 1 — Scale the rate to the interval.</b> $\\lambda = 5$/hr over $t = 0.5$ hr gives expected count $\\lambda t = 2.5$ — the single most common slip is using 5 instead of 2.5 (distractor B).",
            "<b>Step 2 — Evaluate at $k = 0$.</b> $P(X = 0) = \\dfrac{(2.5)^{0}e^{-2.5}}{0!} = e^{-2.5}$.",
            "<b>Step 3 — Numerics.</b> $e^{-2.5} \\approx 0.0821$ — about an 8% chance of a fully quiet half hour."
          ],
          a: "$e^{-2.5} \\approx 0.0821$",
          v: "Cross-check via inter-arrival times: 'zero events in $[0, t]$' is the same event as 'first arrival later than $t$', and exponential inter-arrivals give $P(T_1 > t) = e^{-\\lambda t} = e^{-2.5}$ ✓. Distractor $2.5e^{-2.5}$ is $P(X = 1)$, not $P(X=0)$."

        })
      },
      { q: "Maximum-likelihood estimate of $\\lambda$ for exponential distribution given i.i.d. data $\\{x_1, \\ldots, x_n\\}$:",
        choices: ["$\\hat\\lambda = n / \\sum x_i = 1/\\bar x$", "$\\hat\\lambda = \\bar x$", "$\\hat\\lambda = \\sum x_i$", "$\\hat\\lambda = \\sqrt{\\bar x}$"],
        correct: 0,
        ref: "Handbook §2.3 (MLE)",
        solution: S({
          c: "MLE maximizes the joint likelihood. For exponential data, $L(\\lambda) = \\prod_i\\lambda e^{-\\lambda x_i} = \\lambda^{n}e^{-\\lambda\\sum x_i}$ — work with its logarithm.",
          s: [
            "<b>Step 1 — Log-likelihood.</b> $\\ell(\\lambda) = n\\ln\\lambda - \\lambda\\sum x_i$.",
            "<b>Step 2 — Stationary point.</b> $\\dfrac{d\\ell}{d\\lambda} = \\dfrac{n}{\\lambda} - \\sum x_i = 0 \\Rightarrow \\hat\\lambda = \\dfrac{n}{\\sum x_i} = \\dfrac{1}{\\bar x}$.",
            "<b>Step 3 — Confirm a maximum.</b> $\\ell''(\\lambda) = -n/\\lambda^{2} < 0$ everywhere — concave, so the stationary point is the global max."
          ],
          a: "$\\hat\\lambda_{MLE} = 1/\\bar x$",
          v: "Consistency check: exponential mean is $1/\\lambda$, so estimating $\\lambda$ by the reciprocal of the sample mean is exactly method-of-moments too — the two estimators coincide here ✓. Units check: $\\lambda$ is a rate (1/time) and $1/\\bar x$ has units 1/time ✓; distractor $\\bar x$ has the wrong units entirely."

        })
      },
      { q: "A binomial test: $n = 100$ trials, observed 35 successes. Test $H_0: p = 0.30$ against $H_1: p \\ne 0.30$ using normal approximation. The $z$-statistic is:",
        choices: ["$\\approx 1.09$", "$\\approx 5.0$", "$\\approx 0.10$", "$\\approx 2.5$"],
        correct: 0,
        ref: "Handbook §2.3 (Large-sample normal approximation to binomial)",
        solution: S({
          c: "Large-sample test of a proportion: $z = \\dfrac{\\hat p - p_0}{\\sqrt{p_0(1-p_0)/n}}$ — the standard error uses the NULL value $p_0$, not $\\hat p$.",
          s: [
            "<b>Step 1 — Sample proportion.</b> $\\hat p = 35/100 = 0.35$.",
            "<b>Step 2 — Null standard error.</b> $SE_0 = \\sqrt{0.30 \\times 0.70/100} = \\sqrt{0.0021} \\approx 0.0458$.",
            "<b>Step 3 — Standardize.</b> $z = (0.35 - 0.30)/0.0458 \\approx 1.09$.",
            "<b>Step 4 — Decision context.</b> $|z| = 1.09 < 1.96$: two-sided $p \\approx 0.275$ — the data are compatible with $p = 0.30$."
          ],
          a: "$z \\approx 1.09$ — fail to reject $H_0$ at $\\alpha = 0.05$.",
          v: "Normal-approximation validity: $np_0 = 30$ and $n(1-p_0) = 70$, both $\\ge 10$ ✓. Distractor 5.0 comes from forgetting the square root in the SE; 0.10 from using $SE = p_0(1-p_0)$ unsquare-rooted differently. A 5-point excess on $n = 100$ is just over one SD of sampling noise — intuition matches the math ✓."

        })
      },
      { q: "Bayes: $P(\\text{disease}) = 0.01$, test sensitivity $P(+\\,|\\,D) = 0.95$, specificity $P(-\\,|\\,\\neg D) = 0.95$. Posterior $P(D\\,|\\,+)$:",
        choices: ["$\\approx 0.161$", "$\\approx 0.95$", "$\\approx 0.01$", "$\\approx 0.5$"],
        correct: 0,
        ref: "Handbook §2.2 (Bayes theorem)",
        solution: S({
          c: "Bayes' theorem with the law of total probability: $P(D\\,|\\,+) = \\dfrac{P(+|D)P(D)}{P(+|D)P(D) + P(+|\\neg D)P(\\neg D)}$. The base rate $P(D) = 0.01$ dominates the result.",
          s: [
            "<b>Step 1 — False-positive rate.</b> Specificity 0.95 ⇒ $P(+|\\neg D) = 1 - 0.95 = 0.05$.",
            "<b>Step 2 — Total probability of testing positive.</b> $P(+) = 0.95(0.01) + 0.05(0.99) = 0.0095 + 0.0495 = 0.059$ — note the false positives (0.0495) outnumber the true positives (0.0095) five to one.",
            "<b>Step 3 — Posterior.</b> $P(D|+) = 0.0095/0.059 \\approx 0.161$."
          ],
          a: "$\\approx 16.1\\%$ — most positives are false positives.",
          v: "Frequency check (often clearer): per 10,000 people — 100 diseased → 95 true positives; 9,900 healthy → 495 false positives; $95/(95+495) = 95/590 = 16.1\\%$ ✓. Distractor 0.95 confuses $P(+|D)$ with $P(D|+)$ — the classic 'prosecutor's fallacy' this question is built to test."

        })
      },
      { q: "Sample mean $\\bar X$ from $n = 25$, sample SD $s = 4$, population mean $\\mu$ unknown. 95% CI half-width uses:",
        choices: ["$t_{0.025, 24} \\cdot s/\\sqrt n \\approx 2.064 \\cdot 0.8 \\approx 1.65$", "$1.96 \\cdot 4/\\sqrt{25}$", "$1.96 \\cdot 4/25$", "$2.064 \\cdot 4/25$"],
        correct: 0,
        ref: "Handbook §2.4 (t-distribution CI)",
        solution: S({
          c: "Unknown population $\\sigma$ with small $n$ → Student's $t$: half-width $= t_{\\alpha/2,\\,n-1}\\cdot s/\\sqrt n$. Using $z = 1.96$ is the trap.",
          s: [
            "<b>Step 1 — Degrees of freedom and critical value.</b> df $= n - 1 = 24$; $t_{0.025,24} \\approx 2.064$ (wider than $z = 1.96$ to pay for estimating $\\sigma$).",
            "<b>Step 2 — Standard error.</b> $s/\\sqrt n = 4/\\sqrt{25} = 4/5 = 0.8$.",
            "<b>Step 3 — Half-width.</b> $2.064 \\times 0.8 \\approx 1.65$."
          ],
          a: "$\\approx 1.65$ (via $t_{0.025,24}$).",
          v: "Distractor audit: $1.96\\times 0.8 = 1.57$ uses $z$ — only correct if $\\sigma$ were KNOWN; the two choices dividing by 25 instead of $\\sqrt{25}$ misuse the SE formula. Behavior check: as $n$ grows, $t_{0.025,n-1} \\to 1.96$ — at $n = 25$ the difference is already only ~5% ✓."

        })
      },
      { q: "Linear regression $Y = \\beta_0 + \\beta_1 X + \\epsilon$. Slope estimator $\\hat\\beta_1$ in terms of sample data:",
        choices: ["$\\hat\\beta_1 = S_{xy}/S_{xx}$", "$\\hat\\beta_1 = \\bar y/\\bar x$", "$\\hat\\beta_1 = r\\cdot s_x/s_y$", "$\\hat\\beta_1 = S_{xx}/S_{xy}$"],
        correct: 0,
        ref: "Handbook §2.5 (Linear regression — least squares)",
        solution: S({
          c: "Ordinary least squares minimizes $\\sum(y_i - \\beta_0 - \\beta_1x_i)^{2}$; setting both partial derivatives to zero (the normal equations) yields the closed form $\\hat\\beta_1 = S_{xy}/S_{xx}$.",
          s: [
            "<b>Step 1 — Normal equations.</b> $\\partial/\\partial\\beta_1 = 0$ gives $\\sum x_i(y_i - \\beta_0 - \\beta_1 x_i) = 0$; $\\partial/\\partial\\beta_0 = 0$ gives $\\sum(y_i - \\beta_0 - \\beta_1 x_i) = 0$.",
            "<b>Step 2 — Solve.</b> Eliminating $\\beta_0$ leaves $\\hat\\beta_1 = \\dfrac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^{2}} = \\dfrac{S_{xy}}{S_{xx}}$, then $\\hat\\beta_0 = \\bar y - \\hat\\beta_1\\bar x$.",
            "<b>Step 3 — Distractor audit.</b> $\\bar y/\\bar x$ forces the line through the origin (no intercept); $r\\,s_x/s_y$ INVERTS the correct correlation form ($\\hat\\beta_1 = r\\,s_y/s_x$); $S_{xx}/S_{xy}$ is the reciprocal."
          ],
          a: "$\\hat\\beta_1 = S_{xy}/S_{xx}$",
          v: "Units check: $S_{xy}$ carries units of $x\\cdot y$, $S_{xx}$ of $x^{2}$ — ratio has units $y/x$, correct for a slope ✓. Equivalent form check: $r\\,s_y/s_x = \\dfrac{S_{xy}}{\\sqrt{S_{xx}S_{yy}}}\\cdot\\dfrac{\\sqrt{S_{yy}}}{\\sqrt{S_{xx}}} = S_{xy}/S_{xx}$ ✓."

        })
      },
      { q: "Joint density $f(x,y) = 2$ on the triangle $0\\le y\\le x\\le 1$, 0 elsewhere. Marginal $f_X(x)$ equals:",
        choices: ["$2x,\\ 0\\le x\\le 1$", "$2,\\ 0\\le x\\le 1$", "$1$", "$x^{2}$"],
        correct: 0,
        ref: "Handbook §2.2 (Joint and marginal densities)",
        solution: S({
          c: "Marginalize by integrating the joint density over the other variable — but the integration LIMITS come from the support shape (the triangle), not from $[0,1]$ blindly.",
          s: [
            "<b>Step 1 — Read the support.</b> On the triangle $0 \\le y \\le x \\le 1$: for a fixed $x$, $y$ runs only from 0 to $x$.",
            "<b>Step 2 — Integrate.</b> $f_X(x) = \\displaystyle\\int_0^{x}2\\,dy = 2x$ for $0 \\le x \\le 1$.",
            "<b>Step 3 — Interpret.</b> The marginal grows linearly: larger $x$ values sit above a longer slice of the triangle, so they carry more probability."
          ],
          a: "$f_X(x) = 2x$ on $[0, 1]$.",
          v: "Normalization check: $\\int_0^{1}2x\\,dx = 1$ ✓. Distractor '2' integrates $y$ over $[0,1]$ regardless of $x$ — ignoring the triangular support is THE classic error this problem tests. Companion result: $f_Y(y) = 2(1-y)$, also integrating to 1 ✓."

        })
      },
      { q: "Two-sample $t$-test (equal variances): $n_1 = n_2 = 15$, $\\bar x_1 = 10.2$, $\\bar x_2 = 9.5$, $s_p = 1.4$. Test statistic:",
        choices: ["$\\approx 1.37$", "$\\approx 0.7$", "$\\approx 5.0$", "$\\approx 2.5$"],
        correct: 0,
        ref: "Handbook §2.4 (Two-sample t-test)",
        solution: S({
          c: "Pooled two-sample $t$: $t = \\dfrac{\\bar x_1 - \\bar x_2}{s_p\\sqrt{1/n_1 + 1/n_2}}$, df $= n_1 + n_2 - 2$.",
          s: [
            "<b>Step 1 — Standard error.</b> $\\sqrt{1/15 + 1/15} = \\sqrt{0.1333} = 0.3651$; $SE = s_p \\times 0.3651 = 1.4 \\times 0.3651 = 0.5112$.",
            "<b>Step 2 — Test statistic.</b> $t = \\dfrac{10.2 - 9.5}{0.5112} = \\dfrac{0.7}{0.5112} \\approx 1.37$ with df $= 28$.",
            "<b>Step 3 — Decision.</b> $t_{0.025,28} \\approx 2.048 > 1.37$ → fail to reject; two-sided $p \\approx 0.18$."
          ],
          a: "$t \\approx 1.37$ (df = 28) — not significant at the 5% level.",
          v: "Distractor audit: 0.7 is the raw mean difference (forgot to divide by SE); 5.0 ≈ dividing by $s_p\\sqrt{2}/15$-type unit slip; 2.5 has no consistent origin. Magnitude sense: the difference (0.7) is exactly half a pooled SD (1.4) — with only 15 per group, that is well inside noise ✓."

        })
      },
      { q: "Variance of a sum of independent random variables $X + Y$:",
        choices: ["$\\text{Var}(X) + \\text{Var}(Y)$", "$\\text{Var}(X)\\cdot\\text{Var}(Y)$", "$|\\text{Var}(X) - \\text{Var}(Y)|$", "$\\sqrt{\\text{Var}(X)^{2}+\\text{Var}(Y)^{2}}$"],
        correct: 0,
        ref: "Handbook §2.1 (Variance of sums)",
        solution: S({
          c: "General rule: $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\,\\text{Cov}(X,Y)$. Independence zeroes the covariance term.",
          s: [
            "<b>Step 1 — Drop the covariance.</b> $X \\perp Y \\Rightarrow \\text{Cov}(X,Y) = 0$, leaving $\\text{Var}(X) + \\text{Var}(Y)$.",
            "<b>Step 2 — Distractor audit.</b> Product of variances has wrong units (units$^4$); $|\\text{Var}X - \\text{Var}Y|$ would allow zero variance from two noisy sources — absurd; the square-root form confuses variances with standard deviations.",
            "<b>Step 3 — The SD corollary.</b> Standard deviations combine in quadrature: $\\sigma_{X+Y} = \\sqrt{\\sigma_X^{2} + \\sigma_Y^{2}}$ — they never simply add (unless perfectly correlated)."
          ],
          a: "$\\text{Var}(X) + \\text{Var}(Y)$",
          v: "Quick numeric check: two fair dice, each Var $= 35/12$; sum of two dice has Var $= 35/6$ — exactly double ✓. Engineering use: independent noise sources add in POWER (variance), which is why uncorrelated noise contributions are root-sum-squared in error budgets."

        })
      },
      { q: "Process capability index $C_{pk}$ for $\\bar x = 5.0,\\ \\sigma = 0.1$, specifications $4.7 \\le x \\le 5.5$:",
        choices: ["$1.00$", "$1.67$", "$1.33$", "$0.5$"],
        correct: 0,
        ref: "Handbook §2.6 (Process capability indices)",
        solution: S({
          c: "$C_{pk}$ measures how many 3σ half-widths fit between the process mean and the NEAREST spec limit: $C_{pk} = \\min\\!\\left(\\dfrac{USL - \\bar x}{3\\sigma},\\ \\dfrac{\\bar x - LSL}{3\\sigma}\\right)$.",
          s: [
            "<b>Step 1 — Upper side.</b> $(5.5 - 5.0)/(3 \\times 0.1) = 0.5/0.3 \\approx 1.67$.",
            "<b>Step 2 — Lower side.</b> $(5.0 - 4.7)/0.3 = 0.3/0.3 = 1.00$.",
            "<b>Step 3 — Take the minimum.</b> $C_{pk} = \\min(1.67, 1.00) = 1.00$ — capability is throttled by the lower spec because the mean sits off-center (closer to LSL)."
          ],
          a: "$C_{pk} = 1.00$",
          v: "Interpretation check: $C_{pk} = 1.0$ means the nearest limit is exactly 3σ away → ~1,350 ppm defective on that side (one-tailed). Industry minimum is typically 1.33 (4σ). Distractor 1.67 reports the GOOD side only — ignoring the min() is the standard mistake; centering the mean at 5.1 would balance both sides at 1.33 ✓."

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
          c: "NSPE Code §III.4: engineers shall not disclose or use confidential information from a present or former employer or client without consent — the duty SURVIVES the end of employment.",
          s: [
            "<b>Step 1 — Identify the protected interest.</b> The design information belongs to the current employer as a trade secret; changing jobs does not transfer or extinguish that ownership.",
            "<b>Step 2 — Apply the rule.</b> Accepting a role premised on using that information makes the breach a condition of employment — the only compliant options are to decline, or to wait until the information becomes public through legitimate disclosure.",
            "<b>Step 3 — Audit the distractors.</b> 'Normal practice' does not exist as an ethics defense; using 'selected portions' is still misappropriation; selling the information adds a second, graver violation."
          ],
          a: "Decline the role, or wait until the information is publicly disclosed.",
          v: "Practical corollary: beyond the ethics code, trade-secret law (e.g. DTSA/UTSA) exposes both engineer and new employer to litigation — which is why firms use clean-room teams and quarantine periods when hiring from competitors."

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
          c: "NSPE Code §I.1: hold paramount the safety, health, and welfare of the public. This duty attaches to what the engineer KNOWS, not to what they were hired to inspect.",
          s: [
            "<b>Step 1 — Recognize the duty trigger.</b> Off-spec material substitution can compromise structural capacity — public-safety duty activates regardless of assigned scope.",
            "<b>Step 2 — Take the proportionate first action.</b> Notify the client/owner in writing and document the observed deviation (what, where, when) — written notice creates accountability and a record.",
            "<b>Step 3 — Know the escalation path.</b> If the client fails to act on a genuine safety issue, the obligation escalates to the building official / authority having jurisdiction. Ignoring it, a site confrontation with no record, or silent resignation all fail the duty."
          ],
          a: "Notify the client and document the deviation.",
          v: "Hierarchy worth memorizing for the FE: public > client/employer > profession > self. A quiet resignation (distractor D) is specifically called out in ethics case law (NSPE BER) as inadequate — leaving does not discharge knowledge of a hazard."

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
          c: "NSPE Code §II.4 (conflicts of interest) plus standard employment IP-assignment law: inventions made with employer resources or within the employer's business scope presumptively belong to the employer.",
          s: [
            "<b>Step 1 — Spot the two taints.</b> The invention (a) used employer skills/equipment and (b) was filed WITHOUT disclosure — each independently creates the conflict.",
            "<b>Step 2 — The compliant path.</b> Disclose the invention to the employer, review the employment agreement's IP-assignment clause, and resolve ownership before filing.",
            "<b>Step 3 — Audit the distractors.</b> 'Patents are personal' ignores assignment clauses; 'outside business hours' does not cure use of employer equipment or field overlap; paying a 'small fee' is not how IP ownership is settled."
          ],
          a: "Likely a conflict — disclose to the employer first.",
          v: "Nuance that keeps the rule honest: a truly unrelated invention, made on personal time with personal resources, can legitimately remain the engineer's (some states, e.g. CA Labor Code §2870, protect this) — but that determination is reached THROUGH formal disclosure, never by skipping it."

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
          c: "NSPE Code §II.3: issue statements only in an objective and truthful manner; a PE may certify only work they have personally reviewed or that was performed under their responsible charge.",
          s: [
            "<b>Step 1 — Measure the evidence against the act.</b> A certification asserts verified completion. A walk-through with no test data provides no verification — the assertion would be untruthful regardless of intent.",
            "<b>Step 2 — The compliant action.</b> Refuse until test data, calculations, and inspection records are personally reviewed (or until tests are re-witnessed).",
            "<b>Step 3 — Audit the distractors.</b> The contractor's word is hearsay, not verification; a liability waiver shifts money, not professional duty — the engineer's seal still vouches to the public; a 'footnote' contradicting the certification makes the document self-impeaching."
          ],
          a: "Refuse to certify until adequate evidence is personally reviewed.",
          v: "The seal/signature legally implies 'responsible charge' — direct supervision and control. Boards discipline engineers for 'plan stamping' (sealing unreviewed work) more than almost any other violation; the same logic applies to completion certificates."

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
          c: "NSPE Code §II.4: disclose all known or potential conflicts of interest that could influence — or merely APPEAR to influence — judgment. Family financial interest in a bidder is a textbook case.",
          s: [
            "<b>Step 1 — Recognize the conflict.</b> A spouse's stock in a bidding supplier ties household finances to the bid outcome — an interest the engineer cannot un-know.",
            "<b>Step 2 — The required act is disclosure.</b> Promptly, in writing, to employer/client and relevant parties. Disclosure converts a hidden bias into a managed one; the parties can then recuse the engineer from bid evaluation or accept the conflict knowingly.",
            "<b>Step 3 — Audit the distractors.</b> Quietly selling the stock destroys the record and looks like concealment (possibly insider-timing too); 'small value' is not an exemption — materiality is for the PARTIES to judge after disclosure; resignation is disproportionate when recusal handles it."
          ],
          a: "Disclose in writing to all parties immediately.",
          v: "The appearance standard does the heavy lifting on public projects: even a conflict that never changes a decision erodes public trust if discovered undisclosed. Written disclosure protects the engineer as much as the project."

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
          c: "Two NSPE duties intersect: faithful agency to the employer (§II.1 family) and the paramount duty to public safety (§I.1). Safety concerns are raised through proper channels, in writing, with escalation as needed.",
          s: [
            "<b>Step 1 — Document first.</b> Put the technical disagreement and its safety basis in writing to the supervisor — a paper trail is both ethically required and self-protective.",
            "<b>Step 2 — Escalate in order.</b> Supervisor → higher management/ethics officer → client/owner where appropriate → licensing board or regulator if the hazard persists. Each step is taken only if the previous one fails.",
            "<b>Step 3 — Hold the personal line.</b> The engineer must not seal or sign work they believe unsafe — the seal is personal, not corporate. Distractors fail: silent private objections protect no one; peer-only griping changes nothing; going straight to the press skips every channel that could actually fix the design."
          ],
          a: "Express disagreement in writing through proper channels; refuse to seal if necessary.",
          v: "Whistleblower statutes (and some state boards' duty-to-report rules) protect engineers who escalate properly — protection is strongest precisely when the written-channel record exists. The FE answer pattern: document + escalate + never certify what you believe unsafe."

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
          c: "Two simultaneous violations: §III.9 (take credit only for your own work; credit others) and §III.4 (confidential information of a former employer). Parameter tweaks do not launder either one.",
          s: [
            "<b>Step 1 — The plagiarism prong.</b> The engineer did not author the design; presenting it as new work claims another engineer's intellectual effort — §III.9 violation regardless of modification.",
            "<b>Step 2 — The confidentiality prong.</b> The design belongs to the former employer; taking and reusing it is misappropriation under §III.4 (and likely trade-secret law).",
            "<b>Step 3 — Audit the distractors.</b> 'Modification makes it new' fails — a derivative work still requires rights to the original; 'if no one notices' is concealment, not ethics; a footnote attribution cures neither ownership nor confidentiality."
          ],
          a: "Plagiarism AND a confidentiality violation.",
          v: "Contrast case that sharpens the rule: firms legitimately reuse their OWN template libraries because the firm owns them and authorship is internal — ownership plus authorization is exactly what is missing here."

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
          c: "NSPE Code §III.6: do not give (or promise) anything of value to secure work. 'Free' services rendered to a decision-maker during procurement ARE a thing of value — an inducement.",
          s: [
            "<b>Step 1 — Name the transaction.</b> Free consulting → council goodwill → contract award: value exchanged for influence over procurement. That is the structure of an improper inducement, whatever it is called.",
            "<b>Step 2 — Why the no-cash framing fails.</b> The code tests VALUE, not currency — professional services have a clear market price; waiving it for the buyer's decision-makers is the gift.",
            "<b>Step 3 — Audit the remaining distractors.</b> 'Technical advice' describes the content, not the impropriety of its targeting and timing; offering the same freebie to competitors just multiplies the violation — fair procurement requires no vendor gifts to deciders at all."
          ],
          a: "Improper inducement — prohibited.",
          v: "Mirror-image rule: public officials are typically barred from ACCEPTING such services during procurement, so the offer endangers the councilors too. Legitimate channel that does exist: responding to a published RFP/RFQ with qualifications — competing on merit, not on gifts."

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
          c: "MACRS prescribes fixed percentage tables by property class. Two rules dominate: salvage value is IGNORED (full basis depreciates), and the half-year convention sets the year-1 rate of the 7-year class at 14.29%.",
          s: [
            "<b>Step 1 — Apply the table rate.</b> Year-1 depreciation $= 14.29\\% \\times \\$80{,}000 = \\$11{,}432$.",
            "<b>Step 2 — See where 14.29% comes from.</b> 200% declining balance on 7 years is $2/7 = 28.57\\%$/yr; the half-year convention grants only half a year in year 1: $28.57/2 = 14.29\\%$.",
            "<b>Step 3 — Audit the distractors.</b> \\$22,449 jumps to the year-2 rate (24.49%); \\$7,500 is straight-line on $(80{,}000-5{,}000)/10$ — wrong method AND wrongly uses salvage; \\$8,000 is $80{,}000/10$ straight-line."
          ],
          a: "\\$11,432 in year 1.",
          v: "Consistency check: the 7-year MACRS schedule (14.29, 24.49, 17.49, 12.49, 8.93, 8.92, 8.93, 4.46) sums to 100.00% of basis over 8 calendar years — the trailing half year is the year-1 half deferred ✓."

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
          c: "For mutually exclusive alternatives of different size, rank by the return on the INCREMENTAL investment: compute IRR of (B − A) cash flows and accept the larger project if that incremental IRR ≥ MARR.",
          s: [
            "<b>Step 1 — Form the increment.</b> B − A: extra cost \\$5,000 now; extra savings \\$1,000/yr for 8 years.",
            "<b>Step 2 — Solve for the incremental IRR.</b> $-5000 + 1000(P/A, i, 8) = 0 \\Rightarrow (P/A, i, 8) = 5.0$; interest tables give $i \\approx 11.8\\%$.",
            "<b>Step 3 — Decide.</b> $11.8\\% > $ MARR $= 10\\%$ → the extra \\$5,000 earns more than the hurdle → choose B.",
            "<b>Step 4 — Why not individual IRRs?</b> A's own IRR (≈13.7%) beats B's (≈12.4%), yet B is correct — picking by individual IRR leaves \\$5,000 earning 11.8% on the table, above MARR. Size matters; increments decide."
          ],
          a: "Compute IRR of (B−A); since ≈11.8% ≥ MARR, choose B.",
          v: "NPV cross-check (the gold standard): at 10%, $(P/A, 10\\%, 8) = 5.335$; NPV(A) $= -10{,}000 + 2000(5.335) = +\\$670$; NPV(B) $= -15{,}000 + 3000(5.335) = +\\$1{,}005$. B has the higher NPV ✓ — incremental IRR and NPV agree, as they always do when applied correctly."

        })
      },
      { q: "Equivalent annual cost (EAC) of an asset: P = \\$50{,}000, useful life 10 years, salvage \\$5{,}000, i = 8%, annual O&M = \\$2{,}000.",
        choices: ["≈ \\$9,116/yr", "\\$5,500", "\\$7,450", "\\$10,000"],
        correct: 0,
        ref: "Handbook §3 (EAC capital recovery formula)",
        solution: S({
          c: "EAC spreads ownership cost into a level annual amount: $\\text{EAC} = P(A/P, i, n) - S(A/F, i, n) + \\text{O\\&M}$.",
          s: [
            "<b>Step 1 — Capital recovery on first cost.</b> $(A/P, 8\\%, 10) = 0.14903$: $50{,}000 \\times 0.14903 = \\$7{,}452$/yr.",
            "<b>Step 2 — Salvage credit.</b> $(A/F, 8\\%, 10) = 0.06903$: $5{,}000 \\times 0.06903 = \\$345$/yr recovered.",
            "<b>Step 3 — Add O&M and total.</b> $7{,}452 - 345 + 2{,}000 = \\$9{,}107 \\approx \\$9{,}116$ (small spread is factor-table rounding)."
          ],
          a: "≈ \\$9,116 per year.",
          v: "Independent identity check: EAC $= (P-S)(A/P) + S\\,i + \\text{O\\&M} = 45{,}000(0.14903) + 5{,}000(0.08) + 2{,}000 = 6{,}706 + 400 + 2{,}000 = \\$9{,}106$ ✓ — the two standard formulas agree. Relationship check: $(A/P) - (A/F) = i$, i.e. $0.14903 - 0.06903 = 0.08$ ✓."

        })
      },
      { q: "Working capital of \\$50{,}000 invested at year 0 and recovered at year 5. Discount rate 10%. Present worth?",
        choices: ["−\\$50,000 + 50,000(P/F, 10%, 5) = −\\$18,954", "−\\$50,000", "0 (always recovered)", "−\\$25,000"],
        correct: 0,
        ref: "Handbook §3 (Time value, working capital)",
        solution: S({
          c: "Working capital ties up cash at $t = 0$ and returns the SAME nominal amount at project end — it earns nothing in between, so its present worth is negative by exactly the time-value drag.",
          s: [
            "<b>Step 1 — Set up the two cash flows.</b> $-\\$50{,}000$ at $t=0$; $+\\$50{,}000$ at $t=5$.",
            "<b>Step 2 — Discount the recovery.</b> $(P/F, 10\\%, 5) = 1.1^{-5} = 0.6209$: PW of recovery $= \\$31{,}046$.",
            "<b>Step 3 — Net.</b> PW $= -50{,}000 + 31{,}046 = -\\$18{,}954$."
          ],
          a: "PW $= -\\$18{,}954$",
          v: "Distractor audit: '0, always recovered' ignores time value — the central lesson of the problem; $-50{,}000$ ignores the recovery entirely; $-25{,}000$ is an unsupported halving. Interpretation: the \\$18,954 is the opportunity cost of capital parked in inventory/receivables for 5 years at 10% — real money in project evaluation ✓."

        })
      },
      { q: "Real rate of return when nominal $i = 12\\%$ and inflation $f = 3\\%$:",
        choices: ["$\\approx 8.74\\%$", "$9\\%$", "$15\\%$", "$4\\%$"],
        correct: 0,
        ref: "Handbook §3 (Inflation — Fisher equation)",
        solution: S({
          c: "Fisher equation: $(1 + i) = (1 + r)(1 + f)$ — nominal return compounds the real return WITH inflation, so the real rate is $r = \\dfrac{1+i}{1+f} - 1$.",
          s: [
            "<b>Step 1 — Apply the exact formula.</b> $r = \\dfrac{1.12}{1.03} - 1 = 1.08738 - 1 = 8.74\\%$.",
            "<b>Step 2 — See why subtraction is only approximate.</b> $i \\approx r + f + rf$; the cross-term $rf \\approx 0.26\\%$ is exactly the gap between 9% (naive $12-3$) and the true 8.74%.",
            "<b>Step 3 — Audit the remaining distractors.</b> 15% ADDS inflation (backwards); 4% has no consistent derivation."
          ],
          a: "$r \\approx 8.74\\%$",
          v: "Round-trip check: $(1.0874)(1.03) = 1.1200$ ✓. Buying-power interpretation: \\$1 grows to \\$1.12, but the basket costing \\$1 now costs \\$1.03 — purchasing power grew by $1.12/1.03 = 1.0874$ ✓. The FE expects the exact Fisher form when choices are this close."

        })
      },
      { q: "Capitalized cost of an asset: \\$200{,}000 first cost, \\$10{,}000/yr perpetual O&M, $i = 8\\%$.",
        choices: ["\\$325,000", "\\$210,000", "\\$200,000", "\\$1,250,000"],
        correct: 0,
        ref: "Handbook §3 (Capitalized cost — perpetuity)",
        solution: S({
          c: "Capitalized cost = present worth of owning something FOREVER: first cost plus the perpetuity value of recurring costs, $P + A/i$.",
          s: [
            "<b>Step 1 — Perpetuity of O&M.</b> $A/i = 10{,}000/0.08 = \\$125{,}000$ — the fund that yields \\$10,000/yr at 8% indefinitely.",
            "<b>Step 2 — Add first cost.</b> $200{,}000 + 125{,}000 = \\$325{,}000$.",
            "<b>Step 3 — Audit the distractors.</b> \\$210,000 adds just one year of O&M; \\$200,000 ignores O&M; \\$1,250,000 is $100{,}000/0.08$ — a misplaced decimal on the annual cost."
          ],
          a: "\\$325,000",
          v: "Endowment check: \\$125,000 invested at 8% throws off exactly $0.08 \\times 125{,}000 = \\$10{,}000$ every year without touching principal ✓. Public-works context: capitalized cost is the standard comparison metric for very-long-life assets (dams, rights-of-way) where $n \\to \\infty$ makes ordinary PW awkward."

        })
      },
      { q: "Effective annual rate when nominal is 18% compounded continuously:",
        choices: ["$e^{0.18} - 1 \\approx 19.72\\%$", "18%", "20%", "1.5%"],
        correct: 0,
        ref: "Handbook §3 (Compounding — continuous limit)",
        solution: S({
          c: "Continuous compounding is the limit of $m$ periods per year as $m \\to \\infty$: $\\left(1 + \\frac{r}{m}\\right)^{m} \\to e^{r}$, so $i_{eff} = e^{r} - 1$.",
          s: [
            "<b>Step 1 — Evaluate.</b> $i_{eff} = e^{0.18} - 1 = 1.19722 - 1 = 19.72\\%$.",
            "<b>Step 2 — Sanity-bound it.</b> Effective rate must EXCEED the nominal 18% (compounding helps) but by a finite margin — 18% and 20% bracket it; 1.5% is the monthly rate $18/12$, a units trap."
          ],
          a: "$i_{eff} = e^{0.18} - 1 \\approx 19.72\\%$",
          v: "Ladder check (effective rate rises with compounding frequency): annual 18.00% → monthly $(1.015)^{12}-1 = 19.56\\%$ → daily 19.71% → continuous 19.72% — a tight ceiling just above the daily figure ✓."

        })
      },
      { q: "Bond: \\$1{,}000 face, 6% annual coupon, 5 years to maturity, yield 8%. Price?",
        choices: ["\\$920.15", "\\$1,000", "\\$1,080", "\\$600"],
        correct: 0,
        ref: "Handbook §3 (Bond valuation)",
        solution: S({
          c: "A bond's price is the present worth of its promised cash flows at the market yield: annuity of coupons plus the discounted face value.",
          s: [
            "<b>Step 1 — Coupon stream.</b> Coupon $= 6\\% \\times 1000 = \\$60$/yr. PW $= 60(P/A, 8\\%, 5) = 60 \\times 3.9927 = \\$239.56$.",
            "<b>Step 2 — Face value.</b> PW $= 1000(P/F, 8\\%, 5) = 1000 \\times 0.6806 = \\$680.58$.",
            "<b>Step 3 — Price.</b> $239.56 + 680.58 = \\$920.15$."
          ],
          a: "\\$920.15",
          v: "Direction check: yield (8%) > coupon (6%) → price BELOW par ✓ (a buyer demands a discount to lift the 6% coupon up to an 8% total return); distractor \\$1,080 has it backwards (premium), \\$1,000 would mean yield = coupon. Magnitude check: the ~\\$80 discount amortized over 5 years ≈ \\$16/yr extra return on ~\\$920 ≈ 1.7%, closing most of the 2-point coupon-yield gap ✓."

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
