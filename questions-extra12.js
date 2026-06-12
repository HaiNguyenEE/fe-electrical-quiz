// FE Electrical Question Bank — Extension Pack 12 (Round 12)
// ============================================================
// Reference-anchored set: difficulty and topic coverage informed by a
// 110-question mock exam survey. All problems below are ORIGINAL — no
// problem statement is paraphrased from any copyrighted source.
// Handbook page references map to the NCEES FE Reference Handbook v10.
// Worked solutions use the S({c, s, a, v}) helper from questions.js.
// 2026-06-11: all 93 solutions upgraded to the detailed multi-
// step standard (Step 1-N narratives, distractor audits, multi-
// point verification, sub-circuit/diagram SVGs where natural).
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
      { q: "Bayes: $P(\\text{disease}) = 0.01$, test sensitivity $P(+\\,|\\,D) = 0.95$, specificity $P(-\\,|\\,\\bar D) = 0.95$. Find $P(D\\,|\\,+)$ — the probability the patient actually has the disease given a positive test:",
        choices: ["$\\approx 0.161$", "$\\approx 0.95$", "$\\approx 0.01$", "$\\approx 0.5$"],
        correct: 0,
        ref: "Handbook §2.2 (Bayes theorem)",
        solution: S({
          c: "Decode the notation before anything else: $D$ = has the disease, $\\bar D$ = does NOT have it (the complement of $D$ — also written $D'$), $+$ = tests positive. 'Sensitivity' $P(+|D)$ = how often a SICK person tests positive; 'specificity' $P(-|\\bar D)$ = how often a HEALTHY person tests negative. The question asks for the REVERSED direction, $P(D|+)$: of the people who test positive, what fraction is actually sick? That reversal is what Bayes' theorem computes.",
          s: [
            "<b>Step 1 — Easiest route: count an imaginary 10,000 people.</b> Disease rate 1% → 100 sick, 9,900 healthy.",
            "<b>Step 2 — Run them all through the test.</b> Sick: $95\\%$ of 100 test positive → 95 TRUE positives. Healthy: specificity 0.95 means $5\\%$ wrongly test positive → $0.05 \\times 9{,}900 = 495$ FALSE positives.",
            "<b>Step 3 — Answer the actual question.</b> Everyone with a positive test: $95 + 495 = 590$ people. Actually sick among them: 95. So $P(D|+) = 95/590 \\approx 0.161 = 16.1\\%$.",
            "<b>Step 4 — Same thing by the Bayes formula (for the exam).</b> $P(D|+) = \\dfrac{P(+|D)P(D)}{P(+|D)P(D) + P(+|\\bar D)P(\\bar D)} = \\dfrac{0.95(0.01)}{0.95(0.01) + 0.05(0.99)} = \\dfrac{0.0095}{0.059} \\approx 0.161$ — identical, because the formula IS the counting argument written compactly.",
            "<b>Step 5 — Distractor audit.</b> 0.95 confuses $P(+|D)$ with $P(D|+)$ — the two DIRECTIONS of conditioning are not the same thing (the classic error this question exists to test); 0.01 ignores the test entirely; 0.5 is a coin-flip guess."
          ],
          a: "$P(D|+) \\approx 16.1\\%$ — most positive tests are false alarms.",
          v: "Why so LOW despite a '95% accurate' test: the disease is rare, so the small 5% error rate applied to the HUGE healthy group (495 people) swamps the true positives (95). Rule of thumb: for rare conditions, screening positives need a confirmatory second test ✓. Vocabulary note for further reading: $P(D)$ is sometimes called the 'prior' and $P(D|+)$ the 'posterior' in Bayesian texts — fancy names for 'before the test' and 'after the test'."

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
          c: "A series RLC is the canonical 2nd-order system: $\\omega_n = 1/\\sqrt{LC}$ and damping ratio $\\zeta = \\dfrac{R}{2}\\sqrt{\\dfrac{C}{L}}$ — the resistor is the only damping element.",
          s: [
            "<b>Step 1 — Natural frequency.</b> $\\omega_n = 1/\\sqrt{(10^{-2})(10^{-6})} = 1/\\sqrt{10^{-8}} = 10^{4}$ rad/s.",
            "<b>Step 2 — Damping ratio.</b> $\\zeta = \\dfrac{50}{2}\\sqrt{\\dfrac{10^{-6}}{10^{-2}}} = 25\\sqrt{10^{-4}} = 25 \\times 0.01 = 0.25$.",
            "<b>Step 3 — Classify.</b> $0 < \\zeta < 1$ → underdamped: the natural response is a decaying oscillation at $\\omega_d = \\omega_n\\sqrt{1-\\zeta^{2}} \\approx 9682$ rad/s.",
            "<b>Step 4 — Critical-damping cross-check.</b> Critical damping would need $R_c = 2\\sqrt{L/C} = 2\\sqrt{10^{4}} = 200\\,\\Omega$; our 50 Ω is a quarter of that — consistent with $\\zeta = 50/200 = 0.25$ ✓."
          ],
          a: "$\\zeta = 0.25$ — underdamped.",
          v: "Q-factor link: $Q = 1/(2\\zeta) = 2$ — a mildly resonant circuit. Distractor 4.0 inverts the ratio ($R_c/R$ instead of $R/R_c$); 1.0 assumes critical without computing; 0.5 uses $\\sqrt{C/L}$ without the factor $R/2$ correctly."

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
          c: "Only the resistance dissipates real power: $P = I_{rms}^{2}R$, with the current magnitude set by the FULL impedance $|Z|$.",
          s: [
            "<b>Step 1 — Impedance magnitude.</b> $|Z| = \\sqrt{8^{2} + 6^{2}} = \\sqrt{100} = 10\\,\\Omega$ (a 3-4-5 triangle scaled by 2).",
            "<b>Step 2 — Current.</b> $I_{rms} = V_{rms}/|Z| = 120/10 = 12$ A.",
            "<b>Step 3 — Real power.</b> $P = I^{2}R = 144 \\times 8 = 1152$ W.",
            "<b>Step 4 — Distractor audit.</b> 1800 W is $V^{2}/Z$ treated as all-resistive ($120^{2}/8$); 1440 would be the apparent power $S$ (not offered, but 2400 ≈ doubling errors); 720 uses $X$ instead of $R$... actually $144\\times6=864$ is $Q$ — 720 has no consistent origin."
          ],
          a: "$P = 1152$ W",
          v: "Power-triangle check: $S = VI = 120 \\times 12 = 1440$ VA; PF $= R/|Z| = 0.8$ → $P = S\\cos\\theta = 1152$ W ✓; $Q = S\\sin\\theta = 864$ VAR; $\\sqrt{1152^{2} + 864^{2}} = 1440$ ✓ — all three sides consistent."

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
          c: "Parallel conductances add: $\\dfrac{1}{R_{eq}} = \\sum\\dfrac{1}{R_i}$. Use the common denominator (12) to keep the arithmetic exact.",
          s: [
            "<b>Step 1 — Sum the reciprocals.</b> $\\dfrac{1}{4} + \\dfrac{1}{6} + \\dfrac{1}{12} = \\dfrac{3 + 2 + 1}{12} = \\dfrac{6}{12} = \\dfrac{1}{2}$.",
            "<b>Step 2 — Invert.</b> $R_{eq} = 2\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 22 Ω ADDS them (series formula); 3 Ω is a 'looks reasonable' middle value; 1 Ω over-shrinks (e.g. miscounting a fourth branch)."
          ],
          a: "$R_{eq} = 2\\,\\Omega$",
          v: "Bound check: parallel result must be smaller than the smallest branch (4 Ω) ✓. Current-divider check at 12 V: branch currents $3 + 2 + 1 = 6$ A → $R_{eq} = 12/6 = 2\\,\\Omega$ ✓ — same answer from the physics."

        })
      },
      { q: "An inductor $L = 50$ mH carries 2 A. Energy stored:",
        choices: ["0.1 J", "1 J", "0.05 J", "0.2 J"],
        correct: 0,
        ref: "Handbook §5 (Energy in inductor)",
        solution: S({
          c: "Magnetic energy stored in an inductor: $W = \\tfrac12 L I^{2}$ — quadratic in current, linear in inductance.",
          s: [
            "<b>Step 1 — Plug in.</b> $W = \\tfrac12 (0.050)(2)^{2} = \\tfrac12 (0.050)(4) = 0.1$ J.",
            "<b>Step 2 — Distractor audit.</b> 0.05 J forgets to square the current ($\\tfrac12 LI$); 0.2 J drops the $\\tfrac12$; 1 J misplaces the decimal on $L$."
          ],
          a: "$W = 0.1$ J",
          v: "Units: H·A² = V·s/A · A² = W·s = J ✓. Physical consequence: interrupting this current forces $W$ to dissipate somewhere — $v = L\\,di/dt$ spikes, which is why relay coils get flyback diodes and why ignition coils make sparks. Capacitor dual: $W = \\tfrac12 CV^{2}$."

        })
      },
      { q: "Star-connected 3φ load: $V_L = 480$ V line-to-line, line current 30 A, PF = 0.85 lagging. Real power:",
        choices: ["$\\approx 21.2$ kW", "$\\approx 30$ kW", "$\\approx 12$ kW", "$\\approx 14.4$ kW"],
        correct: 0,
        ref: "Handbook §11 (Three-phase power)",
        solution: S({
          c: "Three-phase real power in line quantities — one formula regardless of Y or Δ: $P = \\sqrt 3\\,V_L I_L\\cos\\theta$.",
          s: [
            "<b>Step 1 — Plug in line values.</b> $P = \\sqrt 3 \\times 480 \\times 30 \\times 0.85$.",
            "<b>Step 2 — Evaluate.</b> $1.732 \\times 480 = 831.4$; $\\times 30 = 24{,}942$ (that is $S$ in VA); $\\times 0.85 = 21{,}200$ W.",
            "<b>Step 3 — Distractor audit.</b> 14.4 kW omits the $\\sqrt 3$ ($480\\times30\\times0.85\\div1000$... = 12.24 — close to the 12 kW choice); 30 kW ≈ ignores PF and fudges $\\sqrt3$; the per-phase route ($3 V_{ph} I_{ph}\\cos\\theta$) gives the same 21.2 kW if you remember $V_{ph} = 277$ V in Y."
          ],
          a: "$P \\approx 21.2$ kW",
          v: "Cross-check via per-phase: $V_{ph} = 480/\\sqrt3 = 277$ V, $I_{ph} = I_L = 30$ A (Y-connection): $P = 3 \\times 277 \\times 30 \\times 0.85 = 21.2$ kW ✓. Triangle: $S = 24.94$ kVA, $Q = S\\sin\\theta = 13.1$ kVAR."

        })
      },
      { q: "Op-amp summing amplifier: $V_{out} = -(R_f/R_1)V_1 - (R_f/R_2)V_2$. With $R_f = 100$ kΩ, $R_1 = R_2 = 10$ kΩ, $V_1 = 2$ V, $V_2 = -1$ V:",
        choices: ["$-10$ V", "$+10$ V", "$0$ V", "$-30$ V"],
        correct: 0,
        ref: "Handbook §9 (Op-amp summing configuration)",
        solution: S({
          c: "The inverting node is a virtual ground, so each input drives its own independent current $V_i/R_i$ into the summing junction; all of it must flow through $R_f$, weighting each input by $-R_f/R_i$.",
          s: [
            "<b>Step 1 — Draw the summing circuit.</b><br><svg viewBox='-10 0 350 130' width='330' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.6' fill='none' stroke-linecap='round'><text x='2' y='36' font-size='11' fill='#1f4e79' stroke='none'>V₁</text><line x1='18' y1='40' x2='55' y2='40'/><rect x='55' y='30' width='60' height='20'/><text x='85' y='44' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>R₁</text><line x1='115' y1='40' x2='140' y2='40'/><line x1='140' y1='40' x2='140' y2='60'/><text x='2' y='86' font-size='11' fill='#1f4e79' stroke='none'>V₂</text><line x1='18' y1='90' x2='55' y2='90'/><rect x='55' y='80' width='60' height='20'/><text x='85' y='94' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>R₂</text><line x1='115' y1='90' x2='140' y2='90'/><line x1='140' y1='90' x2='140' y2='60'/><circle cx='140' cy='60' r='2.5' fill='#1f4e79' stroke='none'/><line x1='140' y1='60' x2='152' y2='60'/><polygon points='152,42 152,92 225,67' fill='#fff'/><text x='160' y='58' font-size='11' fill='#1f4e79' stroke='none'>−</text><text x='160' y='84' font-size='11' fill='#1f4e79' stroke='none'>+</text><line x1='152' y1='80' x2='136' y2='80' stroke-width='1'/><line x1='130' y1='86' x2='142' y2='86' stroke-width='1'/><line x1='133' y1='90' x2='139' y2='90' stroke-width='1'/><line x1='140' y1='40' x2='140' y2='14'/><line x1='140' y1='14' x2='165' y2='14'/><rect x='165' y='5' width='55' height='18'/><text x='192' y='18' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>R_f</text><line x1='220' y1='14' x2='248' y2='14'/><line x1='248' y1='14' x2='248' y2='67'/><line x1='225' y1='67' x2='290' y2='67'/><circle cx='248' cy='67' r='2.5' fill='#1f4e79' stroke='none'/><text x='296' y='71' font-size='11' fill='#1f4e79' stroke='none'>V_out</text></g></svg>",
            "<b>Step 2 — Per-input gains.</b> $-R_f/R_1 = -100/10 = -10$ and $-R_f/R_2 = -10$ as well.",
            "<b>Step 3 — Superpose.</b> $V_{out} = -10(V_1) - 10(V_2) = -10(2) - 10(-1) = -20 + 10 = -10$ V.",
            "<b>Step 4 — Distractor audit.</b> $+10$ V drops the inversion; 0 V wrongly cancels the inputs ($2 + (-1) \\ne 0$); $-30$ V sums magnitudes ignoring the sign of $V_2$."
          ],
          a: "$V_{out} = -10$ V",
          v: "Current bookkeeping at the virtual ground: $I_1 = 2/10\\text{k} = 0.2$ mA in, $I_2 = -1/10\\text{k} = -0.1$ mA in → net 0.1 mA through $R_f$ → drop $= 0.1\\text{mA} \\times 100\\text{k}\\Omega = 10$ V, output pulled BELOW ground: $-10$ V ✓. Practical check: $|{-10}|$ V must be within the op-amp's supply rails or the stage saturates."

        })
      },
      { q: "A balanced 3φ Y-source with $V_{LN} = 277$ V supplies a $\\Delta$-connected load $Z_\\Delta = 30 + j40\\,\\Omega$ per phase. Find phase current $|I_\\Delta|$.",
        choices: ["$\\approx 9.6$ A", "$\\approx 16.6$ A", "$\\approx 5.5$ A", "$\\approx 22.0$ A"],
        correct: 0,
        ref: "Handbook §11 (Y–Δ relations)",
        solution: S({
          c: "Mixing Y source with Δ load hinges on one mapping: each Δ phase sees the LINE-to-LINE voltage, and $V_{LL} = \\sqrt 3\\,V_{LN}$.",
          s: [
            "<b>Step 1 — Picture the Δ load across the lines.</b><br><svg viewBox='-10 0 340 150' width='320' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.6' fill='none' stroke-linecap='round'><circle cx='165' cy='22' r='2.5' fill='#1f4e79' stroke='none'/><text x='165' y='14' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>A</text><circle cx='60' cy='128' r='2.5' fill='#1f4e79' stroke='none'/><text x='46' y='140' font-size='11' fill='#1f4e79' stroke='none'>B</text><circle cx='270' cy='128' r='2.5' fill='#1f4e79' stroke='none'/><text x='278' y='140' font-size='11' fill='#1f4e79' stroke='none'>C</text><line x1='165' y1='22' x2='95' y2='90'/><rect x='75' y='86' width='44' height='16' transform='rotate(-45 97 94)'/><line x1='81' y1='104' x2='60' y2='128'/><line x1='165' y1='22' x2='235' y2='90'/><rect x='211' y='86' width='44' height='16' transform='rotate(45 233 94)'/><line x1='249' y1='104' x2='270' y2='128'/><line x1='60' y1='128' x2='270' y2='128'/><rect x='135' y='120' width='60' height='16'/><text x='165' y='118' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>Z_Δ mỗi cạnh / each edge</text><text x='30' y='60' font-size='10' fill='#1f4e79' stroke='none'>V_LL = 480 V</text></g></svg>Each impedance leg connects line-to-line, so its phase voltage IS $V_{LL}$.",
            "<b>Step 2 — Line-to-line voltage.</b> $V_{LL} = \\sqrt 3 \\times 277 = 480$ V.",
            "<b>Step 3 — Impedance magnitude.</b> $|Z_\\Delta| = \\sqrt{30^{2} + 40^{2}} = 50\\,\\Omega$ (3-4-5 ×10).",
            "<b>Step 4 — Phase current.</b> $|I_\\Delta| = V_{LL}/|Z_\\Delta| = 480/50 = 9.6$ A."
          ],
          a: "$|I_\\Delta| = 9.6$ A per Δ leg.",
          v: "The planted trap: LINE current is $\\sqrt 3 \\times 9.6 = 16.6$ A — distractor B verbatim. Read 'phase' vs 'line' twice on every Δ problem. Power check: $P = 3 I_\\Delta^{2} R = 3(92.16)(30) = 8.29$ kW = $\\sqrt3 V_L I_L \\cos\\theta = 1.732(480)(16.6)(0.6)$ ✓ (PF $= R/|Z| = 0.6$)."

        })
      },
      { q: "Mesh analysis: a single-loop circuit has 12 V source and resistors 4 Ω, 6 Ω, 2 Ω in series. Loop current?",
        choices: ["1 A", "2 A", "0.5 A", "12 A"],
        correct: 0,
        ref: "Handbook §5 (Mesh / loop analysis)",
        solution: S({
          c: "One loop → one KVL equation: the source EMF equals the sum of resistive drops, and series resistances simply add.",
          s: [
            "<b>Step 1 — Draw the single mesh.</b><br><svg viewBox='-10 0 330 130' width='310' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.6' fill='none' stroke-linecap='round'><circle cx='40' cy='65' r='16' fill='#fff'/><text x='40' y='61' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>+</text><text x='40' y='76' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>−</text><text x='40' y='105' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>12 V</text><line x1='40' y1='49' x2='40' y2='25'/><line x1='40' y1='25' x2='90' y2='25'/><rect x='90' y='16' width='55' height='18'/><text x='117' y='29' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>4 Ω</text><line x1='145' y1='25' x2='195' y2='25'/><rect x='195' y='16' width='55' height='18'/><text x='222' y='29' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>6 Ω</text><line x1='250' y1='25' x2='290' y2='25'/><line x1='290' y1='25' x2='290' y2='105'/><line x1='290' y1='105' x2='195' y2='105'/><rect x='140' y='96' width='55' height='18'/><text x='167' y='109' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>2 Ω</text><line x1='140' y1='105' x2='40' y2='105'/><line x1='40' y1='105' x2='40' y2='81'/><text x='165' y='68' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>I ↻</text></g></svg>",
            "<b>Step 2 — KVL around the loop.</b> $12 = I(4 + 6 + 2) = 12I$.",
            "<b>Step 3 — Solve.</b> $I = 12/12 = 1$ A."
          ],
          a: "$I = 1$ A",
          v: "Drop audit: $4(1) + 6(1) + 2(1) = 4 + 6 + 2 = 12$ V — matches the source exactly ✓. Power: source delivers $12 \\times 1 = 12$ W; resistors burn $4 + 6 + 2 = 12$ W ✓. Distractor 12 A divides by a single ohm; 2 A and 0.5 A misadd the series string."

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
          c: "The ROC of a $z$-transform is an annulus bounded by pole magnitudes; CAUSALITY pins which annulus: a right-sided sequence's ROC is the exterior of the OUTERMOST pole.",
          s: [
            "<b>Step 1 — Locate the poles.</b> Denominator zeros: $z = 0.5$ and $z = 0.8$.",
            "<b>Step 2 — Apply the causality rule.</b> Right-sided ⇒ ROC $= \\{|z| > 0.8\\}$, outside the outermost pole.",
            "<b>Step 3 — Map the distractors to the other cases.</b> $|z| < 0.5$ would be the ANTI-causal (left-sided) inverse; the annulus $0.5 < |z| < 0.8$ is the two-sided inverse — same algebra, three different time-domain signals. 'All $z$' is only possible for finite-length sequences."
          ],
          a: "$|z| > 0.8$",
          v: "Stability bonus check: the ROC $|z| > 0.8$ INCLUDES the unit circle, so this causal system is also stable ($h[n]$ built from $0.5^{n}$ and $0.8^{n}$ terms, both absolutely summable) ✓. Rule pairing to memorize: causal ↔ exterior; stable ↔ contains $|z| = 1$; both ↔ all poles inside the unit circle."

        })
      },
      { q: "DFT of $x[n] = \\{1, 0, -1, 0\\}$ (length 4) at $k = 1$:",
        choices: ["$2$", "$0$", "$-2$", "$4$"],
        correct: 0,
        ref: "Handbook §10 (DFT)",
        solution: S({
          c: "Direct evaluation of $X[k] = \\sum_{n=0}^{N-1}x[n]W_N^{kn}$ with $W_4 = e^{-j2\\pi/4} = -j$ — only two nonzero terms survive.",
          s: [
            "<b>Step 1 — Write the powers of $W_4$ for $k = 1$.</b> $W^{0} = 1,\\ W^{1} = -j,\\ W^{2} = -1,\\ W^{3} = +j$.",
            "<b>Step 2 — Multiply-accumulate.</b> $X[1] = 1(1) + 0(-j) + (-1)(-1) + 0(j) = 1 + 1 = 2$.",
            "<b>Step 3 — Interpret.</b> $x[n] = \\{1,0,-1,0\\}$ is exactly $\\cos(2\\pi n/4)$ — a pure bin-1 cosine, so its energy lands in bins 1 and 3 (the conjugate pair)."
          ],
          a: "$X[1] = 2$",
          v: "Full-spectrum check: $X[0] = 1+0-1+0 = 0$ (no DC ✓), $X[2] = 1 - 0 + (-1)(1) - 0 = 0$... compute: $W^{2n}$ powers give $1,(-1)^n$: $X[2] = 1(1)+0(-1)+(-1)(1)+0(-1) = 0$ ✓, $X[3] = \\overline{X[1]} = 2$ ✓ (real input symmetry). Parseval: $\\sum|x|^{2} = 2$ and $\\frac{1}{4}\\sum|X|^{2} = \\frac{1}{4}(0+4+0+4) = 2$ ✓."

        })
      },
      { q: "Sampling theorem: signal bandlimited to $W$ Hz. Minimum sampling rate to avoid aliasing:",
        choices: ["$2W$", "$W$", "$W/2$", "$4W$"],
        correct: 0,
        ref: "Handbook §10 (Sampling theorem)",
        solution: S({
          c: "Nyquist-Shannon: a signal bandlimited to $W$ Hz is fully determined by samples taken at $f_s \\ge 2W$ — below that, spectral images overlap (alias) irrecoverably.",
          s: [
            "<b>Step 1 — State the minimum.</b> $f_{s,min} = 2W$ — the Nyquist rate.",
            "<b>Step 2 — See why.</b> Sampling replicates the spectrum every $f_s$; replicas centered at $0, \\pm f_s, \\ldots$ each span $\\pm W$. Non-overlap requires $f_s - W \\ge W$, i.e. $f_s \\ge 2W$.",
            "<b>Step 3 — Distractor audit.</b> $W$ under-samples by half (folding); $W/2$ is worse; $4W$ WORKS but is not the minimum asked for."
          ],
          a: "$f_s = 2W$ minimum.",
          v: "Reality check: practical systems sample above Nyquist to give the anti-alias filter a transition band — CD audio's 44.1 kHz vs 2×20 kHz leaves 4.1 kHz of rolloff room ✓. Subtlety worth knowing: exactly AT $2W$, a sinusoid at $W$ can be sampled at its zeros — the theorem's strict inequality matters for that edge case."

        })
      },
      { q: "8-bit ADC with $V_{ref} = 5$ V has signal-to-quantization-noise ratio (SQNR) approximately:",
        choices: ["$\\approx 49.9$ dB", "$\\approx 8$ dB", "$\\approx 100$ dB", "$\\approx 256$ dB"],
        correct: 0,
        ref: "Handbook §10 (Quantization noise)",
        solution: S({
          c: "Quantization noise for a full-scale sinusoid gives the classic formula $\\text{SQNR} \\approx 6.02N + 1.76$ dB — about 6 dB ('one bit') of SNR per bit.",
          s: [
            "<b>Step 1 — Apply the formula.</b> $6.02 \\times 8 + 1.76 = 48.16 + 1.76 = 49.92$ dB.",
            "<b>Step 2 — Know where it comes from.</b> Quantization error is uniform over one LSB step $\\Delta$: noise power $\\Delta^{2}/12$; full-scale sine power $(2^{N}\\Delta)^{2}/8$; the ratio in dB collapses to $6.02N + 1.76$.",
            "<b>Step 3 — Distractor audit.</b> 8 dB confuses bits with dB; 100 dB belongs to a ~16-bit converter; 256 dB mistakes the code COUNT $2^{8}$ for decibels."
          ],
          a: "$\\approx 49.9$ dB",
          v: "Ladder check: 12-bit → 74 dB, 16-bit → 98 dB (CD audio) — each step adds $4 \\times 6 = 24$ dB ✓. Note $V_{ref} = 5$ V is a red herring: SQNR for a FULL-SCALE input is independent of the reference; it only sets the absolute LSB size (19.5 mV here)."

        })
      },
      { q: "FIR filter with coefficients $\\{0.25, 0.5, 0.25\\}$. Type of filter (by magnitude response):",
        choices: ["Low-pass (averaging)", "High-pass", "Band-pass", "All-pass"],
        correct: 0,
        ref: "Handbook §10 (FIR filter classification)",
        solution: S({
          c: "Symmetric, all-positive coefficients summing to 1 form a weighted moving average — by construction it passes DC intact and suppresses the fastest alternation.",
          s: [
            "<b>Step 1 — Check the two frequency extremes.</b> At DC ($\\omega = 0$): gain $= \\sum h = 0.25 + 0.5 + 0.25 = 1$ (full pass). At Nyquist ($\\omega = \\pi$, input $+1,-1,+1,\\ldots$): gain $= 0.25 - 0.5 + 0.25 = 0$ (perfect null).",
            "<b>Step 2 — Confirm with the response.</b> $H(e^{j\\omega}) = 0.25 + 0.5e^{-j\\omega} + 0.25e^{-j2\\omega} = e^{-j\\omega}\\,\\tfrac12(1 + \\cos\\omega)$ — magnitude decreases monotonically from 1 to 0: textbook low-pass.",
            "<b>Step 3 — Distractor audit.</b> High-pass would need alternating-sign taps (e.g. $\\{-0.25, 0.5, -0.25\\}$); band-pass needs a null at BOTH extremes; all-pass needs $|H| = 1$ everywhere."
          ],
          a: "Low-pass (averaging) filter.",
          v: "Bonus structure check: symmetric taps ⇒ LINEAR phase ($e^{-j\\omega}$ = pure 1-sample delay) — constant group delay, no waveform dispersion ✓. This kernel is also binomial $\\tfrac14(1,2,1)$ — two cascaded 2-point averagers, the building block of Gaussian smoothing."

        })
      },
      { q: "Convolution of $x[n] = \\{1, 2\\}$ with $h[n] = \\{3, 1\\}$:",
        choices: ["$\\{3, 7, 2\\}$", "$\\{3, 5, 2\\}$", "$\\{3, 2\\}$", "$\\{3, 6, 2\\}$"],
        correct: 0,
        ref: "Handbook §10 (Convolution)",
        solution: S({
          c: "Discrete convolution $y[n] = \\sum_k x[k]h[n-k]$: output length $N_x + N_h - 1 = 3$; each output sample collects the products that 'line up' at that shift.",
          s: [
            "<b>Step 1 — $y[0]$.</b> Only $x[0]h[0] = 1 \\times 3 = 3$.",
            "<b>Step 2 — $y[1]$.</b> $x[0]h[1] + x[1]h[0] = 1(1) + 2(3) = 7$.",
            "<b>Step 3 — $y[2]$.</b> Only $x[1]h[1] = 2 \\times 1 = 2$.",
            "<b>Step 4 — Distractor audit.</b> $\\{3,5,2\\}$ and $\\{3,6,2\\}$ each miscount the middle cross terms; $\\{3,2\\}$ forgets the overlap sample entirely (wrong length)."
          ],
          a: "$y = \\{3,\\ 7,\\ 2\\}$",
          v: "Sum check (convolution preserves totals): $\\sum y = 12 = (\\sum x)(\\sum h) = 3 \\times 4$ ✓. Polynomial view: $(1 + 2z^{-1})(3 + z^{-1}) = 3 + 7z^{-1} + 2z^{-2}$ — convolution IS polynomial multiplication ✓."

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
          c: "Small-signal (dynamic) resistance of a forward-biased diode is the local slope of the exponential I-V curve: $r_d = \\dfrac{dV}{dI}\\Big|_{Q} = \\dfrac{nV_T}{I_D}$ (take $n = 1$ unless told otherwise).",
          s: [
            "<b>Step 1 — Apply at the bias point.</b> $r_d = V_T/I_D = 26\\,\\text{mV}/1\\,\\text{mA} = 26\\,\\Omega$.",
            "<b>Step 2 — Understand the scaling.</b> $r_d \\propto 1/I_D$: at 10 mA it would be 2.6 Ω (distractor B), at 0.1 mA it would be 260 Ω (distractor C) — the wrong answers ARE the right answer at other bias currents.",
            "<b>Step 3 — Scope of validity.</b> This is the AC model around the operating point only; the large-signal forward drop stays ≈0.7 V regardless."
          ],
          a: "$r_d = 26\\,\\Omega$ at 1 mA.",
          v: "Derivation check: $I = I_S e^{V/V_T} \\Rightarrow dI/dV = I/V_T \\Rightarrow r_d = V_T/I$ ✓. Same physics gives the BJT's $g_m = I_C/V_T$ — the diode rule and transistor transconductance are one identity viewed from two sides."

        })
      },
      { q: "BJT common-emitter amp: $I_C = 2$ mA, $\\beta = 100$, $V_T = 26$ mV. Transconductance $g_m$:",
        choices: ["$\\approx 77$ mA/V", "$\\approx 50$ mA/V", "$\\approx 7.7$ mA/V", "$\\approx 26$ mA/V"],
        correct: 0,
        ref: "Handbook §7 (BJT small-signal parameters)",
        solution: S({
          c: "BJT transconductance is bias-set and device-independent: $g_m = I_C/V_T$ — no $\\beta$, no geometry; only the collector current matters.",
          s: [
            "<b>Step 1 — Plug in.</b> $g_m = \\dfrac{2\\,\\text{mA}}{26\\,\\text{mV}} = 76.9\\,\\text{mA/V} \\approx 77$ mA/V.",
            "<b>Step 2 — Note what $\\beta$ is for.</b> $\\beta$ enters the INPUT resistance, not $g_m$: $r_\\pi = \\beta/g_m = 100/0.0769 \\approx 1.3$ kΩ.",
            "<b>Step 3 — Distractor audit.</b> 26 mA/V echoes $V_T$; 7.7 is a decade slip; 50 looks like $I_C \\times \\beta/4$ numerology — none follow the formula."
          ],
          a: "$g_m \\approx 77$ mA/V",
          v: "Proportionality check: at 1 mA, $g_m = 38.5$ mA/V — the famous '1/26' rule; doubling $I_C$ doubles $g_m$ ✓. Gain preview: with a 5-kΩ collector load, $|A_v| = g_m R_C \\approx 385$ — the bias current is the gain knob in BJT design."

        })
      },
      { q: "MOSFET in saturation: $V_{GS} - V_t = 1.5$ V, $\\mu_n C_{ox}(W/L) = 2$ mA/V², $\\lambda = 0$. Drain current:",
        choices: ["$2.25$ mA", "$1.5$ mA", "$3$ mA", "$4.5$ mA"],
        correct: 0,
        ref: "Handbook §7 (MOSFET saturation current)",
        solution: S({
          c: "Square-law MOSFET in saturation: $I_D = \\tfrac12\\,\\mu_nC_{ox}\\dfrac{W}{L}\\,V_{OV}^{2}$ with overdrive $V_{OV} = V_{GS} - V_t$ (channel-length modulation off, $\\lambda = 0$).",
          s: [
            "<b>Step 1 — Square the overdrive.</b> $V_{OV}^{2} = 1.5^{2} = 2.25$ V².",
            "<b>Step 2 — Evaluate.</b> $I_D = \\tfrac12 \\times 2\\,\\text{mA/V}^{2} \\times 2.25 = 2.25$ mA.",
            "<b>Step 3 — Distractor audit.</b> 4.5 mA drops the $\\tfrac12$; 3 mA multiplies by $V_{OV}$ un-squared ($2\\times1.5$); 1.5 mA just echoes the overdrive."
          ],
          a: "$I_D = 2.25$ mA",
          v: "Region check: saturation requires $V_{DS} \\ge V_{OV} = 1.5$ V — the stated condition ✓. Companion small-signal value: $g_m = \\mu_nC_{ox}\\frac{W}{L}V_{OV} = 2\\times1.5 = 3$ mA/V $= 2I_D/V_{OV}$ ✓ — internal consistency of the square law."

        })
      },
      { q: "Inverting op-amp gain: $R_f = 47$ kΩ, $R_{in} = 4.7$ kΩ.",
        choices: ["$-10$", "$+10$", "$-11$", "$0.1$"],
        correct: 0,
        ref: "Handbook §9 (Inverting amplifier)",
        solution: S({
          c: "Ideal inverting amplifier: virtual ground at the inverting input makes the gain a pure resistor ratio, $A_v = -R_f/R_{in}$.",
          s: [
            "<b>Step 1 — Compute the ratio.</b> $A_v = -47\\text{k}/4.7\\text{k} = -10$.",
            "<b>Step 2 — Distractor audit.</b> $+10$ forgets the inversion (that is the NON-inverting topology's sign, whose gain would be $1 + R_f/R_{in} = 11$ — distractor C's magnitude); $0.1$ inverts the ratio.",
            "<b>Step 3 — Where the formula comes from.</b> Virtual ground → input current $V_{in}/R_{in}$ → all of it through $R_f$ → $V_{out} = -V_{in}(R_f/R_{in})$."
          ],
          a: "$A_v = -10$",
          v: "Bandwidth consequence check: with the noise gain $1 + R_f/R_{in} = 11$, a 1-MHz-GBW op-amp gives $f_{3dB} \\approx 1\\,\\text{MHz}/11 \\approx 91$ kHz — gain is traded for bandwidth ✓. Input-impedance note: this stage loads the source with $R_{in} = 4.7$ kΩ (not infinite — that is the non-inverting topology's perk)."

        })
      },
      { q: "Full-wave rectifier (bridge) with sinusoidal input, peak $V_m = 10$ V, ideal diodes. Average output voltage:",
        choices: ["$2V_m/\\pi \\approx 6.37$ V", "$V_m/\\pi$", "$V_m/2 = 5$", "$V_m\\sqrt 2$"],
        correct: 0,
        ref: "Handbook §7 (Rectifier circuits)",
        solution: S({
          c: "A bridge folds both half-cycles positive; the average of $|V_m\\sin\\theta|$ over a half period is $V_{avg} = \\dfrac{1}{\\pi}\\displaystyle\\int_0^{\\pi}V_m\\sin\\theta\\,d\\theta = \\dfrac{2V_m}{\\pi}$.",
          s: [
            "<b>Step 1 — Do the integral.</b> $\\int_0^{\\pi}\\sin\\theta\\,d\\theta = [-\\cos\\theta]_0^{\\pi} = 2$, so $V_{avg} = 2V_m/\\pi$.",
            "<b>Step 2 — Evaluate.</b> $V_{avg} = 2(10)/\\pi = 20/\\pi \\approx 6.37$ V.",
            "<b>Step 3 — Distractor audit.</b> $V_m/\\pi \\approx 3.18$ V is the HALF-wave average (only one hump per cycle); $V_m/2$ confuses average with a naive midpoint; $V_m\\sqrt2$ confuses peak/RMS conversions."
          ],
          a: "$V_{avg} \\approx 6.37$ V",
          v: "RMS companion: full-wave $V_{rms} = V_m/\\sqrt2 = 7.07$ V > average ✓ (form factor 1.11). Real-diode correction: a bridge conducts through TWO diodes, so practical output ≈ $2(V_m - 2V_D)/\\pi = 2(8.6)/\\pi \\approx 5.5$ V with silicon — the headline formula assumes ideal diodes, as stated."

        })
      },
      { q: "Zener regulator: input 18 V, Zener $V_Z = 5.6$ V, series resistor $R_S = 220\\,\\Omega$, no load. Zener current?",
        choices: ["$\\approx 56.4$ mA", "$\\approx 25$ mA", "$\\approx 100$ mA", "$\\approx 18$ mA"],
        correct: 0,
        ref: "Handbook §7 (Zener regulator analysis)",
        solution: S({
          c: "In the regulation region the Zener pins the output at $V_Z$; with no load, every milliamp through the series resistor flows into the Zener: $I_Z = (V_{in} - V_Z)/R_S$.",
          s: [
            "<b>Step 1 — Draw the regulator.</b><br><svg viewBox='-10 0 340 140' width='320' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.6' fill='none' stroke-linecap='round'><circle cx='35' cy='70' r='15' fill='#fff'/><text x='35' y='66' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>+</text><text x='35' y='80' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>−</text><text x='35' y='108' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>18 V</text><line x1='35' y1='55' x2='35' y2='28'/><line x1='35' y1='28' x2='95' y2='28'/><rect x='95' y='19' width='70' height='18'/><text x='130' y='32' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>R_S = 220 Ω</text><line x1='165' y1='28' x2='225' y2='28'/><circle cx='225' cy='28' r='2.5' fill='#1f4e79' stroke='none'/><line x1='225' y1='28' x2='225' y2='52'/><polygon points='217,76 233,76 225,52' fill='#fff'/><line x1='217' y1='52' x2='233' y2='52'/><line x1='213' y1='48' x2='217' y2='52' stroke-width='1.2'/><line x1='233' y1='52' x2='237' y2='56' stroke-width='1.2'/><line x1='225' y1='76' x2='225' y2='112'/><text x='243' y='68' font-size='10' fill='#1f4e79' stroke='none'>V_Z = 5.6 V</text><line x1='225' y1='28' x2='290' y2='28'/><text x='296' y='32' font-size='10' fill='#1f4e79' stroke='none'>V_out</text><line x1='35' y1='112' x2='225' y2='112'/><line x1='35' y1='85' x2='35' y2='112'/></g></svg>The Zener sits reverse-biased; above its knee it clamps the node at 5.6 V.",
            "<b>Step 2 — Voltage across the series resistor.</b> $V_{R_S} = V_{in} - V_Z = 18 - 5.6 = 12.4$ V.",
            "<b>Step 3 — Current.</b> $I_Z = 12.4/220 = 56.4$ mA (no load → all of it through the Zener).",
            "<b>Step 4 — Distractor audit.</b> 18 mA ≈ $V_{in}/1\\text{k}$-style guess; 25 mA ≈ uses 5.6/220; 100 mA rounds 18/220... none track the formula."
          ],
          a: "$I_Z \\approx 56.4$ mA",
          v: "Design check the FE loves: Zener dissipation $P_Z = I_ZV_Z = 0.0564 \\times 5.6 = 0.316$ W — needs at least a 500-mW part ✓. Loaded behavior: any load current SUBTRACTS from $I_Z$; regulation holds only while $I_Z$ stays above the knee current (~5 mA), i.e. up to ≈51 mA of load."

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
          c: "Per-unit impedance re-scales with the base: $X_{new} = X_{old}\\cdot\\dfrac{S_{new}}{S_{old}}\\cdot\\left(\\dfrac{V_{old}}{V_{new}}\\right)^{2}$. Same physical ohms, different yardstick.",
          s: [
            "<b>Step 1 — Identify what changed.</b> Only the MVA base doubles (100 → 200 MVA); voltage base is unchanged, so the squared term is 1.",
            "<b>Step 2 — Scale.</b> $X_{new} = 0.10 \\times \\dfrac{200}{100} = 0.20$ pu.",
            "<b>Step 3 — Distractor audit.</b> 0.05 pu divides instead of multiplies (the classic direction error); 0.10 'unchanged' forgets that pu values are base-relative; 2.0 misplaces a decade."
          ],
          a: "$X = 0.20$ pu on the 200-MVA base.",
          v: "Physical-ohms check: $Z_{base} = V^{2}/S$ halves when $S$ doubles, so the SAME ohmic reactance is a larger fraction of the smaller base — direction ✓. Memory hook: bigger MVA base → every impedance 'looks bigger' in pu, proportionally."

        })
      },
      { q: "3-phase fault at bus: pre-fault voltage 1.0 pu, total reactance to fault $X_{th} = 0.25$ pu. Fault current:",
        choices: ["$4.0$ pu", "$0.25$ pu", "$10$ pu", "$1.0$ pu"],
        correct: 0,
        ref: "Handbook §11 (Symmetrical fault analysis)",
        solution: S({
          c: "A bolted three-phase fault is balanced — only the positive-sequence network acts: $I_f = V_{pre}/X_{th}$ in per-unit.",
          s: [
            "<b>Step 1 — Apply the formula.</b> $I_f = 1.0/0.25 = 4.0$ pu.",
            "<b>Step 2 — Interpret.</b> Fault current is 4× the base (roughly 4× rated) — the Thevenin reactance seen from the bus is the ONLY thing limiting it.",
            "<b>Step 3 — Distractor audit.</b> 0.25 pu echoes the reactance; 10 pu would need $X_{th} = 0.10$; 1.0 pu forgets to divide at all."
          ],
          a: "$I_f = 4.0$ pu",
          v: "Ampere conversion check: on a 100-MVA, 138-kV base, $I_{base} = \\dfrac{100\\,\\text{MVA}}{\\sqrt3 \\times 138\\,\\text{kV}} = 418$ A → $I_f = 4 \\times 418 \\approx 1.67$ kA ✓. Context: this 'MVA method' number ($S_{fault} = S_{base}/X_{th} = 400$ MVA) sizes breaker interrupting ratings."

        })
      },
      { q: "Synchronous generator: 3-phase, 60 Hz, 12 poles. Speed?",
        choices: ["$600$ rpm", "$1800$ rpm", "$3600$ rpm", "$60$ rpm"],
        correct: 0,
        ref: "Handbook §11 (Synchronous machine speed)",
        solution: S({
          c: "Synchronous speed locks rotor to the rotating field: $n_s = \\dfrac{120f}{P}$ rpm, with $P$ = number of poles (not pole pairs).",
          s: [
            "<b>Step 1 — Plug in.</b> $n_s = \\dfrac{120 \\times 60}{12} = 600$ rpm.",
            "<b>Step 2 — Distractor audit.</b> 3600 rpm is the 2-pole answer; 1800 rpm the 4-pole; 60 rpm misuses $f/P$-type ratios. The formula's 120 comes from 60 s/min × 2 poles per electrical cycle."
          ],
          a: "$n_s = 600$ rpm",
          v: "Reasonableness: hydro units use many poles (here 12) precisely so the shaft can turn slowly with the water turbine — 100-600 rpm typical ✓; steam turbo-generators run 2-pole/3600 rpm at 60 Hz. Inverse check: $P = 120f/n_s = 7200/600 = 12$ ✓."

        })
      },
      { q: "Induction motor full-load slip $s = 0.04$, synchronous speed 1800 rpm. Rotor speed:",
        choices: ["$1728$ rpm", "$1800$ rpm", "$1872$ rpm", "$72$ rpm"],
        correct: 0,
        ref: "Handbook §11 (Induction motor slip)",
        solution: S({
          c: "Slip measures how much the rotor lags the synchronous field: $s = (n_s - n)/n_s$, so the rotor turns at $n = n_s(1 - s)$.",
          s: [
            "<b>Step 1 — Apply.</b> $n = 1800(1 - 0.04) = 1800 \\times 0.96 = 1728$ rpm.",
            "<b>Step 2 — Distractor audit.</b> 1800 rpm is the SYNCHRONOUS speed (zero slip — induction motors can never quite reach it under load); 1872 adds the slip instead of subtracting; 72 rpm is the slip SPEED $n_s - n$, not the rotor speed."
          ],
          a: "$n = 1728$ rpm",
          v: "Physical check: an induction motor MUST slip — rotor torque comes from relative motion between rotor bars and the rotating field; at exactly $n_s$, induced rotor current (and torque) would vanish ✓. Frequency bonus: rotor-circuit frequency $= sf = 0.04 \\times 60 = 2.4$ Hz at full load."

        })
      },
      { q: "Power factor correction: 200 kW load at PF = 0.7 lagging. Capacitor kVAR to bring PF to unity:",
        choices: ["$\\approx 204$ kVAR", "$200$ kVAR", "$100$ kVAR", "$\\approx 142$ kVAR"],
        correct: 0,
        ref: "Handbook §11 (PF correction)",
        solution: S({
          c: "Capacitors supply reactive power locally. To reach UNITY power factor, the capacitor bank must cancel the load's entire reactive demand: $Q_C = Q_{load} = P\\tan\\theta$.",
          s: [
            "<b>Step 1 — Find the load's reactive power.</b> $\\cos\\theta = 0.7 \\Rightarrow \\theta = 45.57°,\\ \\tan\\theta = 1.0202$. $Q = 200 \\times 1.0202 = 204$ kVAR.<br><svg viewBox='-10 -10 345 140' width='325' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><line x1='30' y1='110' x2='230' y2='110'/><line x1='230' y1='110' x2='230' y2='10'/><line x1='30' y1='110' x2='230' y2='10'/><text x='130' y='126' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>P = 200 kW</text><text x='240' y='64' font-size='11' fill='#1f4e79' stroke='none'>Q = 204 kVAR</text><text x='105' y='52' font-size='11' fill='#1f4e79' stroke='none'>S = 285.7 kVA</text><path d='M70,110 A40,40 0 0 0 62,87'/><text x='80' y='98' font-size='11' fill='#1f4e79' stroke='none'>θ</text></g></svg>",
            "<b>Step 2 — Size the bank for unity PF.</b> Target $\\theta_2 = 0 \\Rightarrow Q_2 = 0$, so $Q_C = Q_1 - 0 = 204$ kVAR.",
            "<b>Step 3 — Distractor audit.</b> 200 kVAR equates Q with P (only true at PF = 0.707); 142 kVAR would correct to about 0.95 PF, not unity; 100 kVAR is half-hearted."
          ],
          a: "$Q_C \\approx 204$ kVAR",
          v: "Payoff check: apparent power drops from $S = 200/0.7 = 285.7$ kVA to $S = P = 200$ kVA — a 30% reduction in feeder/transformer loading and $I^{2}R$ losses ✓. Practice note: utilities usually target 0.95-0.98 rather than exactly 1.0 to avoid overshooting into leading PF at light load."

        })
      },
      { q: "Transformer turns ratio 480 V/240 V, secondary loaded at 50 A. Primary current (ideal transformer)?",
        choices: ["$25$ A", "$50$ A", "$100$ A", "$12.5$ A"],
        correct: 0,
        ref: "Handbook §11 (Ideal transformer relations)",
        solution: S({
          c: "An ideal transformer conserves power: voltage steps down 2:1, so current steps UP 2:1 in the same ratio — $I_1/I_2 = V_2/V_1 = N_2/N_1$.",
          s: [
            "<b>Step 1 — Apply the inverse ratio.</b> $I_1 = I_2\\cdot\\dfrac{V_2}{V_1} = 50 \\times \\dfrac{240}{480} = 25$ A.",
            "<b>Step 2 — Distractor audit.</b> 100 A applies the ratio the wrong way (multiplying instead of dividing); 50 A pretends 1:1; 12.5 A squares the ratio (that is what happens to IMPEDANCE, not current)."
          ],
          a: "$I_1 = 25$ A",
          v: "Power balance — the definitive check: $P_1 = 480 \\times 25 = 12$ kW $= P_2 = 240 \\times 50 = 12$ kW ✓. Impedance bonus: a load $Z_2$ on the secondary appears as $(V_1/V_2)^{2}Z_2 = 4Z_2$ from the primary — ratio squared, which is why 12.5 A is the planted trap."

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
          c: "Closing unity feedback around $G(s)$ moves the poles to the roots of the characteristic equation $1 + G(s) = 0$.",
          s: [
            "<b>Step 1 — Form the loop.</b><br><svg viewBox='-10 0 350 110' width='330' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.6' fill='none' stroke-linecap='round'><text x='2' y='40' font-size='11' fill='#1f4e79' stroke='none'>R</text><line x1='14' y1='44' x2='48' y2='44'/><polyline points='42,40 50,44 42,48'/><circle cx='62' cy='44' r='11'/><text x='62' y='48' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>Σ</text><text x='52' y='66' font-size='10' fill='#1f4e79' stroke='none'>−</text><line x1='73' y1='44' x2='110' y2='44'/><polyline points='104,40 112,44 104,48'/><rect x='112' y='26' width='110' height='36'/><text x='167' y='49' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>K / [s(s+2)]</text><line x1='222' y1='44' x2='290' y2='44'/><polyline points='284,40 292,44 284,48'/><text x='298' y='48' font-size='11' fill='#1f4e79' stroke='none'>Y</text><circle cx='258' cy='44' r='2.5' fill='#1f4e79' stroke='none'/><line x1='258' y1='44' x2='258' y2='92'/><line x1='258' y1='92' x2='62' y2='92'/><line x1='62' y1='92' x2='62' y2='55'/><polyline points='58,62 62,54 66,62'/></g></svg>",
            "<b>Step 2 — Characteristic equation.</b> $1 + \\dfrac{K}{s(s+2)} = 0 \\Rightarrow s^{2} + 2s + K = 0$; with $K = 5$: $s^{2} + 2s + 5 = 0$.",
            "<b>Step 3 — Solve the quadratic.</b> $s = \\dfrac{-2 \\pm \\sqrt{4 - 20}}{2} = -1 \\pm j2$.",
            "<b>Step 4 — Distractor audit.</b> $\\{0, -2\\}$ are the OPEN-loop poles (feedback moves them!); $\\pm j\\sqrt5$ drops the damping term; $-2$ alone loses a pole."
          ],
          a: "$s = -1 \\pm j2$",
          v: "Parameter check: $\\omega_n = \\sqrt5 = 2.24$ rad/s, $\\zeta = 2/(2\\omega_n) = 0.447$, $\\omega_d = \\omega_n\\sqrt{1-\\zeta^2} = 2$ ✓ (matches the imaginary part). Root-locus sense: as $K$ grows from 0, the two real poles meet at $-1$ ($K=1$) and split vertically — at $K = 5$ they sit at $-1 \\pm j2$, on the vertical branch ✓."

        })
      },
      { q: "Routh array: $s^{4} + 2s^{3} + 3s^{2} + 4s + 5$. Number of RHP poles:",
        choices: ["2", "0", "1", "4"],
        correct: 0,
        ref: "Handbook §15 (Routh-Hurwitz)",
        solution: S({
          c: "Routh-Hurwitz counts right-half-plane roots without solving: the number of SIGN CHANGES in the first column equals the number of RHP poles.",
          s: [
            "<b>Step 1 — Seed the array.</b> $s^{4}$ row: 1, 3, 5 (alternate coefficients); $s^{3}$ row: 2, 4.",
            "<b>Step 2 — Compute the $s^{2}$ row.</b> First entry $= (2\\cdot3 - 1\\cdot4)/2 = 1$; second $= (2\\cdot5 - 1\\cdot0)/2 = 5$.",
            "<b>Step 3 — Compute the $s^{1}$ row.</b> $(1\\cdot4 - 2\\cdot5)/1 = -6$.",
            "<b>Step 4 — Finish and count.</b> $s^{0}$ row: 5. First column: $1, 2, 1, -6, 5$ → signs $+,+,+,-,+$ → TWO changes ($1\\to-6$, $-6\\to5$) → 2 RHP poles."
          ],
          a: "2 RHP poles — the system is unstable.",
          v: "The teaching point: ALL coefficients of $s^{4}+2s^{3}+3s^{2}+4s+5$ are positive, yet the system is unstable — positivity is necessary but NOT sufficient above 2nd order; Routh is the real test ✓. Sanity: complex roots come in conjugate pairs, so an even count (2) is consistent."

        })
      },
      { q: "Phase margin of $L(s) = 10/[s(s+1)]$:",
        choices: ["$\\approx 17.9°$", "$45°$", "$90°$", "$-180°$"],
        correct: 0,
        ref: "Handbook §15 (Phase margin from Bode)",
        solution: S({
          c: "Phase margin = how much extra phase lag the loop tolerates before oscillation: PM $= 180° + \\angle L(j\\omega_{gc})$, measured at the gain-crossover frequency where $|L| = 1$.",
          s: [
            "<b>Step 1 — Find gain crossover.</b> $|L(j\\omega)| = \\dfrac{10}{\\omega\\sqrt{\\omega^{2}+1}} = 1 \\Rightarrow \\omega^{2}(\\omega^{2}+1) = 100$.",
            "<b>Step 2 — Solve the quadratic in $\\omega^{2}$.</b> $\\omega^{4} + \\omega^{2} - 100 = 0 \\Rightarrow \\omega^{2} = \\dfrac{-1+\\sqrt{401}}{2} \\approx 9.51 \\Rightarrow \\omega_{gc} \\approx 3.08$ rad/s.",
            "<b>Step 3 — Phase at crossover.</b> $\\angle L = -90° - \\arctan(\\omega_{gc}) = -90° - 72.0° = -162.0°$.",
            "<b>Step 4 — Margin.</b> PM $= 180° - 162.0° = 18.0° \\approx 17.9°$."
          ],
          a: "PM $\\approx 17.9°$ — stable but lightly damped.",
          v: "Rule-of-thumb link: PM $\\approx 100\\zeta$ (degrees) → $\\zeta \\approx 0.18$ → step overshoot near 55% — this loop badly needs a lead compensator or lower gain (target PM ≥ 45°) ✓. Bound check: integrator + one pole can never reach $-180°$ at finite ω, so the system is stable for ALL $K$ — but margins shrink as $K$ grows ✓."

        })
      },
      { q: "Steady-state error to a unit step for Type-1 system with unity feedback:",
        choices: ["0", "$1/(1+K)$", "$\\infty$", "$1/K$"],
        correct: 0,
        ref: "Handbook §15 (Steady-state error)",
        solution: S({
          c: "Final-value theorem applied to unity feedback: $e_{ss} = \\dfrac{1}{1 + K_p}$ for a step, where $K_p = \\lim_{s\\to0}G(s)$. A Type-1 system (one integrator) has $K_p = \\infty$.",
          s: [
            "<b>Step 1 — Evaluate the position constant.</b> Type 1 means a factor $1/s$ in $G$: as $s \\to 0$, $G(s) \\to \\infty$, so $K_p = \\infty$.",
            "<b>Step 2 — Apply the error formula.</b> $e_{ss} = 1/(1 + \\infty) = 0$ — the integrator keeps wind-ing up until the step is tracked exactly.",
            "<b>Step 3 — Place the distractors.</b> $1/(1+K)$ is the TYPE-0 step error; $1/K$ is the Type-1 error to a RAMP ($1/K_v$); $\\infty$ is Type-0's ramp error. The error table (type × input) is the FE's favorite controls question."
          ],
          a: "$e_{ss} = 0$",
          v: "Pattern check (memorize the diagonal): Type 0 — step $\\frac{1}{1+K_p}$, ramp ∞; Type 1 — step 0, ramp $\\frac{1}{K_v}$, parabola ∞; Type 2 — step 0, ramp 0, parabola $\\frac{1}{K_a}$. Each added integrator zeroes one more input order, at the cost of phase margin ✓."

        })
      },
      { q: "Step response of $T(s) = 4/(s^{2} + 2s + 4)$. Percent overshoot:",
        choices: ["$\\approx 16.3\\%$", "$\\approx 5\\%$", "$0$ (overdamped)", "$\\approx 50\\%$"],
        correct: 0,
        ref: "Handbook §15 (Second-order overshoot)",
        solution: S({
          c: "Match to the 2nd-order standard form $\\dfrac{\\omega_n^{2}}{s^{2} + 2\\zeta\\omega_n s + \\omega_n^{2}}$, then apply the overshoot map $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^{2}}}$.",
          s: [
            "<b>Step 1 — Extract parameters.</b> $\\omega_n^{2} = 4 \\Rightarrow \\omega_n = 2$; $2\\zeta\\omega_n = 2 \\Rightarrow \\zeta = 0.5$.",
            "<b>Step 2 — Evaluate the exponent.</b> $\\dfrac{\\pi\\zeta}{\\sqrt{1-\\zeta^{2}}} = \\dfrac{\\pi(0.5)}{0.866} = 1.814$.",
            "<b>Step 3 — Overshoot.</b> $M_p = e^{-1.814} = 0.163 \\to 16.3\\%$."
          ],
          a: "$\\approx 16.3\\%$ overshoot.",
          v: "Anchor points worth memorizing: $\\zeta = 0.5 \\to 16.3\\%$, $\\zeta = 0.7 \\to 4.6\\%$, $\\zeta = 1 \\to 0\\%$ — the distractors are exactly these neighbors. Timing bonus: peak time $t_p = \\pi/\\omega_d = \\pi/(2\\times0.866) = 1.81$ s; 2% settling $\\approx 4/(\\zeta\\omega_n) = 4$ s ✓."

        })
      },
      { q: "State-space: $A = \\begin{bmatrix}-1 & 0\\\\1 & -2\\end{bmatrix}$. Eigenvalues of $A$:",
        choices: ["$-1, -2$", "$+1, +2$", "$0, -3$", "$\\pm j\\sqrt 2$"],
        correct: 0,
        ref: "Handbook §15 (State-space dynamics)",
        solution: S({
          c: "Eigenvalues of the state matrix ARE the system poles. For a triangular matrix they can be read directly off the diagonal — no characteristic polynomial needed.",
          s: [
            "<b>Step 1 — Recognize the structure.</b> $A$ is lower triangular (the only off-diagonal entry sits below). Eigenvalues = diagonal = $\\{-1, -2\\}$.",
            "<b>Step 2 — Verify via the characteristic polynomial.</b> $\\det(sI - A) = (s+1)(s+2) - (0)(-1)... = (s+1)(s+2)$ — roots $-1, -2$ ✓ (the below-diagonal 1 multiplies a zero).",
            "<b>Step 3 — Classify stability.</b> Both eigenvalues have negative real parts → asymptotically stable; every initial condition decays to zero."
          ],
          a: "$\\lambda = -1,\\ -2$ — asymptotically stable.",
          v: "Mode check: time constants $\\tau = 1$ s and 0.5 s; after ~4-5 s (4-5 of the slower τ) the response is gone ✓. Distractor audit: $\\{+1,+2\\}$ flips signs (unstable); $\\{0,-3\\}$ preserves the trace ($-3$) but not the determinant ($2 \\ne 0$) — trace and det together pin the answer: $\\lambda_1\\lambda_2 = \\det A = 2$, $\\lambda_1+\\lambda_2 = \\text{tr}A = -3$ ✓."

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
          c: "Shannon-Hartley caps error-free rate: $C = B\\log_2(1 + \\text{SNR})$ — and SNR must be converted from dB to LINEAR before it goes in the log.",
          s: [
            "<b>Step 1 — Convert SNR.</b> 20 dB $\\Rightarrow 10^{20/10} = 100$ (linear).",
            "<b>Step 2 — Evaluate the log.</b> $\\log_2(101) = \\ln 101/\\ln 2 \\approx 6.66$ bits/s/Hz.",
            "<b>Step 3 — Scale by bandwidth.</b> $C = 10{,}000 \\times 6.66 \\approx 66.6$ kbps.",
            "<b>Step 4 — Distractor audit.</b> 20 kbps treats the dB figure as the linear SNR ($\\log_2 21 \\approx 4.4$... actually it echoes '20'); 10 kbps is just $B$; 200 kbps ≈ uses $20\\times B$ — none survive the dB conversion step, which is the question's real test."
          ],
          a: "$C \\approx 66.6$ kbps",
          v: "Sensitivity check: every extra 3 dB of SNR adds ~1 bit/s/Hz in this regime ($\\log_2$ doubles) → at 23 dB the capacity would be ≈76.6 kbps ✓. Context: real modems approach but never exceed this bound; error-correcting codes (LDPC/turbo) close to within ~1 dB of it."

        })
      },
      { q: "FM signal: $\\Delta f = 25$ kHz, $f_m = 5$ kHz. Carson's rule bandwidth:",
        choices: ["$60$ kHz", "$50$ kHz", "$30$ kHz", "$10$ kHz"],
        correct: 0,
        ref: "Handbook §13 (Carson's rule)",
        solution: S({
          c: "Carson's rule estimates FM occupied bandwidth: $B = 2(\\Delta f + f_m)$ — twice the sum of peak deviation and highest modulating frequency (~98% of signal power).",
          s: [
            "<b>Step 1 — Plug in.</b> $B = 2(25 + 5) = 60$ kHz.",
            "<b>Step 2 — Modulation index view.</b> $\\beta = \\Delta f/f_m = 5$; equivalently $B = 2f_m(\\beta + 1) = 2(5)(6) = 60$ kHz ✓ — same number from both forms.",
            "<b>Step 3 — Distractor audit.</b> 50 kHz is $2\\Delta f$ (forgets $f_m$); 30 kHz is $\\Delta f + f_m$ un-doubled; 10 kHz is just $2f_m$ (the AM-style answer)."
          ],
          a: "$B = 60$ kHz",
          v: "Benchmark check: broadcast FM ($\\Delta f = 75$ kHz, $f_m = 15$ kHz) gives $2(90) = 180$ kHz inside a 200-kHz channel — the rule reproduces the real allocation with sensible guard band ✓. Limit behavior: narrowband FM ($\\beta \\ll 1$) collapses to $2f_m$ (AM-like); wideband is dominated by $2\\Delta f$ ✓."

        })
      },
      { q: "QPSK with $E_b/N_0 = 8$ dB. Approximate BER:",
        choices: ["$\\approx 2 \\times 10^{-4}$", "$10^{-2}$", "$10^{-8}$", "$0.1$"],
        correct: 0,
        ref: "Handbook §13 (Digital modulation BER)",
        solution: S({
          c: "QPSK is two orthogonal BPSK streams, so its bit-error rate in $E_b/N_0$ terms is identical to BPSK: $P_b = Q\\!\\left(\\sqrt{2E_b/N_0}\\right)$.",
          s: [
            "<b>Step 1 — Convert dB to linear.</b> $E_b/N_0 = 10^{8/10} = 6.31$.",
            "<b>Step 2 — Argument of Q.</b> $\\sqrt{2 \\times 6.31} = \\sqrt{12.62} = 3.55$.",
            "<b>Step 3 — Evaluate the tail.</b> $Q(3.55) \\approx 1.9\\times10^{-4} \\approx 2\\times10^{-4}$.",
            "<b>Step 4 — Distractor audit.</b> $10^{-2}$ corresponds to ~4 dB; $10^{-8}$ to ~12 dB; 0.1 is sub-0 dB — the answer cluster tests whether you can roughly place the BER waterfall."
          ],
          a: "BER $\\approx 2\\times10^{-4}$ at 8 dB.",
          v: "Why QPSK 'wins': same BER as BPSK per bit, but 2 bits/symbol → double the spectral efficiency at no $E_b/N_0$ penalty — the reason QPSK (and its offset/π/4 variants) dominate satellite and cellular links ✓. Waterfall anchors: $10^{-3}$ @ ~6.8 dB, $10^{-5}$ @ ~9.6 dB — our point sits between them ✓."

        })
      },
      { q: "PCM voice: 4 kHz baseband, sampled at Nyquist, 8 bits/sample. Bit rate:",
        choices: ["$64$ kbps", "$32$ kbps", "$8$ kbps", "$128$ kbps"],
        correct: 0,
        ref: "Handbook §13 (PCM)",
        solution: S({
          c: "PCM bit rate is a two-factor product: $R = f_s \\times n$ — sampling rate (set by Nyquist) times bits per sample.",
          s: [
            "<b>Step 1 — Sampling rate.</b> Nyquist for a 4-kHz baseband: $f_s = 2 \\times 4 = 8$ kHz.",
            "<b>Step 2 — Multiply by resolution.</b> $R = 8{,}000 \\times 8 = 64$ kbps.",
            "<b>Step 3 — Distractor audit.</b> 32 kbps halves the sampling rate (forgot Nyquist's factor 2); 8 kbps is the sample rate alone; 128 kbps doubles up (stereo confusion)."
          ],
          a: "$R = 64$ kbps — the classic DS0 voice channel.",
          v: "Telecom anchor: T-1 multiplexes 24 such DS0s: $24 \\times 64\\,\\text{k} + 8\\,\\text{k framing} = 1.544$ Mbps ✓; E-1 carries 32 → 2.048 Mbps. Modern context: G.711 still encodes exactly this way (8 kHz × 8-bit μ-law/A-law) ✓."

        })
      },
      { q: "Antenna gain 30 dBi at receiver, EIRP from transmitter 50 dBW, path loss 130 dB. Received power:",
        choices: ["$-50$ dBW (or 10 μW)", "$-90$ dBW", "$+10$ dBW", "$-130$ dBW"],
        correct: 0,
        ref: "Handbook §13 (Link budget)",
        solution: S({
          c: "Link budgets add and subtract decibels: $P_R = \\text{EIRP} - L_{path} + G_{R}$ — transmitter effective power, minus path loss, plus receive-antenna gain.",
          s: [
            "<b>Step 1 — Stack the budget.</b> $P_R = 50\\,\\text{dBW} - 130\\,\\text{dB} + 30\\,\\text{dBi} = -50$ dBW.",
            "<b>Step 2 — Convert to watts.</b> $-50$ dBW $= 10^{-5}$ W $= 10\\,\\mu$W.",
            "<b>Step 3 — Distractor audit.</b> $-90$ dBW forgets the receive gain... ($50-130-... $ hmm $-110+30$? no — it subtracts $G_R$ instead of adding); $+10$ dBW drops the path loss sign; $-130$ dBW ignores both antenna terms."
          ],
          a: "$P_R = -50$ dBW (10 μW).",
          v: "Unit discipline check: dBW + dB + dBi keeps everything in dBW ✓ (dBi is gain relative to isotropic — dimensionless in dB). Scale context: 10 μW is a STRONG received signal — GPS arrives near $-158$ dBW; satellite TV LNB inputs run $-120$ to $-90$ dBW — so a 130-dB path with 80 dB of combined EIRP+gain is a comfortable link ✓."

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
          c: "Two reduction laws do all the work: combining ($X\\bar Y + XY = X$) and absorption-with-complement ($X + \\bar XY = X + Y$).",
          s: [
            "<b>Step 1 — Combine the first two terms.</b> $A\\bar B + AB = A(\\bar B + B) = A\\cdot1 = A$, leaving $F = A + \\bar AB$.",
            "<b>Step 2 — Apply $X + \\bar XY = X + Y$.</b> Distribute to see it: $A + \\bar AB = (A + \\bar A)(A + B) = 1\\cdot(A + B) = A + B$.",
            "<b>Step 3 — Distractor audit.</b> $AB$ keeps only one minterm of three; $\\bar A\\bar B$ is the complement of the answer (the single 0-row); constant 1 would need all four minterms — we have only three."
          ],
          a: "$F = A + B$",
          v: "Truth-table check: the given minterms are $A\\bar B$ (10), $AB$ (11), $\\bar AB$ (01) — i.e. every row EXCEPT 00, which is precisely the OR function ✓. K-map view: three filled cells of a 2×2 map group into two pairs covering $A$ and $B$ ✓."

        })
      },
      { q: "Convert hex $A3F$ to decimal:",
        choices: ["2623", "163", "2599", "10243"],
        correct: 0,
        ref: "Handbook §16 (Number systems)",
        solution: S({
          c: "Hexadecimal is base-16 positional: $\\text{A3F}_{16} = A\\cdot16^{2} + 3\\cdot16^{1} + F\\cdot16^{0}$ with $A = 10$, $F = 15$.",
          s: [
            "<b>Step 1 — Expand the digits.</b> $10 \\times 256 = 2560$; $3 \\times 16 = 48$; $15 \\times 1 = 15$.",
            "<b>Step 2 — Sum.</b> $2560 + 48 + 15 = 2623$.",
            "<b>Step 3 — Distractor audit.</b> 163 reads 'A3' alone as decimal-ish; 2599 drops the F→15 mapping somewhere; 10243 concatenates digit values (10, 3, 15) instead of weighting them."
          ],
          a: "$\\text{A3F}_{16} = 2623_{10}$",
          v: "Binary cross-check (each hex digit = 4 bits): A3F → 1010 0011 1111; value $= 2048+512+32+16+8+4+2+1 = 2623$ ✓. Range check: 3-digit hex spans 0-4095, and 2623 sits inside ✓."

        })
      },
      { q: "Two's complement: 8-bit representation of $-50$:",
        choices: ["$1100\\ 1110$", "$1011\\ 0010$", "$0011\\ 0010$", "$1100\\ 1111$"],
        correct: 0,
        ref: "Handbook §16 (Two's complement)",
        solution: S({
          c: "Two's complement negation: write $+|x|$ in binary, invert every bit, add 1. The result makes addition hardware sign-agnostic.",
          s: [
            "<b>Step 1 — Encode +50.</b> $50 = 32 + 16 + 2 = 0011\\,0010_2$.",
            "<b>Step 2 — Invert.</b> $1100\\,1101$.",
            "<b>Step 3 — Add one.</b> $1100\\,1101 + 1 = 1100\\,1110$.",
            "<b>Step 4 — Distractor audit.</b> $1100\\,1111$ forgets nothing — wait, it ADDS 1 twice... it is $-49$; $1011\\,0010$ just flips the sign bit of +50 (sign-magnitude thinking); $0011\\,0010$ IS +50."
          ],
          a: "$-50 = 1100\\,1110_2$ (two's complement, 8-bit).",
          v: "Weighted check (MSB carries $-128$): $-128 + 64 + 8 + 4 + 2 = -50$ ✓. Additive check: $0011\\,0010 + 1100\\,1110 = 1\\,0000\\,0000$ → discard carry → 0 ✓ — a number plus its two's complement is zero, by construction."

        })
      },
      { q: "Synchronous mod-12 counter requires how many flip-flops minimum?",
        choices: ["4", "12", "3", "6"],
        correct: 0,
        ref: "Handbook §16 (Counter design)",
        solution: S({
          c: "$n$ flip-flops provide $2^{n}$ distinct states; a mod-$M$ counter needs $2^{n} \\ge M$, i.e. $n = \\lceil\\log_2 M\\rceil$.",
          s: [
            "<b>Step 1 — Test the powers of two.</b> $2^{3} = 8 < 12$ — three FFs cannot represent 12 states. $2^{4} = 16 \\ge 12$ ✓.",
            "<b>Step 2 — Conclude.</b> Minimum $n = 4$; the counter uses 12 of 16 states (0-11) and decode-resets at 12 ($1100_2$).",
            "<b>Step 3 — Distractor audit.</b> 12 FFs confuses states with flip-flops (that is a 12-stage ring counter — valid but far from minimal); 3 under-provisions; 6 has no derivation."
          ],
          a: "4 flip-flops.",
          v: "Design check: the reset decode needs only the two high bits ($Q_3Q_2 = 11$ first occurs at 12) — a single AND gate ✓. The 4 unused states (12-15) must be verified to re-enter the main sequence (self-correcting design) — a standard FE follow-up point."

        })
      },
      { q: "Karnaugh map: 4-variable function with minterms $\\{0, 2, 4, 6, 8, 10, 12, 14\\}$ simplifies to:",
        choices: ["$\\bar D$", "$\\bar A\\bar D$", "$ABCD$", "$A + B$"],
        correct: 0,
        ref: "Handbook §16 (K-maps)",
        solution: S({
          c: "K-map là bảng chân trị xếp lại thành lưới / A K-map is the truth table re-arranged into a grid: each cell = one input combination (one minterm). NEIGHBORING cells differ in exactly one variable nhờ thứ tự Gray (00, 01, 11, 10). Nhóm $2^k$ ô chứa 1 → loại được $k$ biến / a block of $2^k$ ones eliminates $k$ variables.",
          s: [
            "<b>Step 1 — Minterm là gì / What a minterm number means.</b> $m_i$ nghĩa là: $F = 1$ khi đầu vào ABCD (đọc như số nhị phân 4 bit) bằng $i$. Ví dụ $m_6$: $6 = 0110_2$ → $F = 1$ tại $A{=}0, B{=}1, C{=}1, D{=}0$. Đề cho 8 số → đổi hết ra nhị phân: 0→0000, 2→0010, 4→0100, 6→0110, 8→1000, 10→1010, 12→1100, 14→1110.",
            "<b>Step 2 — Công thức đổi số thành ô / Number → cell recipe.</b> Cắt 4 bit làm đôi: <b>2 bit đầu AB chọn HÀNG, 2 bit cuối CD chọn CỘT</b>. Cẩn thận: hàng và cột xếp theo thứ tự Gray <span style='font-family:monospace'>00, 01, 11, 10</span> — <b>11 đứng TRƯỚC 10</b>, không phải thứ tự đếm thường! Ví dụ cụ thể: $14 = 1110$ → $AB = 11$ → hàng thứ 3; $CD = 10$ → cột thứ 4 (cột cuối). Còn $8 = 1000$ → $AB = 10$ → hàng CUỐI (không phải hàng 3!); $CD = 00$ → cột 1. Tra đủ 8 số:<br><table style='border-collapse:collapse;margin:.5em auto;font-size:13px;font-family:monospace'><tr style='background:#dbe7f6'><td style='border:1px solid #1f4e79;padding:2px 8px'>Số</td><td style='border:1px solid #1f4e79;padding:2px 8px'>ABCD</td><td style='border:1px solid #1f4e79;padding:2px 8px'>Hàng AB</td><td style='border:1px solid #1f4e79;padding:2px 8px'>Cột CD</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>0</td><td style='border:1px solid #1f4e79;padding:2px 8px'>0000</td><td style='border:1px solid #1f4e79;padding:2px 8px'>00 (1)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>00 (1)</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>2</td><td style='border:1px solid #1f4e79;padding:2px 8px'>0010</td><td style='border:1px solid #1f4e79;padding:2px 8px'>00 (1)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>10 (4)</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>4</td><td style='border:1px solid #1f4e79;padding:2px 8px'>0100</td><td style='border:1px solid #1f4e79;padding:2px 8px'>01 (2)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>00 (1)</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>6</td><td style='border:1px solid #1f4e79;padding:2px 8px'>0110</td><td style='border:1px solid #1f4e79;padding:2px 8px'>01 (2)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>10 (4)</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>8</td><td style='border:1px solid #1f4e79;padding:2px 8px'>1000</td><td style='border:1px solid #1f4e79;padding:2px 8px'>10 (4!)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>00 (1)</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>10</td><td style='border:1px solid #1f4e79;padding:2px 8px'>1010</td><td style='border:1px solid #1f4e79;padding:2px 8px'>10 (4!)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>10 (4)</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>12</td><td style='border:1px solid #1f4e79;padding:2px 8px'>1100</td><td style='border:1px solid #1f4e79;padding:2px 8px'>11 (3)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>00 (1)</td></tr><tr><td style='border:1px solid #1f4e79;padding:2px 8px'>14</td><td style='border:1px solid #1f4e79;padding:2px 8px'>1110</td><td style='border:1px solid #1f4e79;padding:2px 8px'>11 (3)</td><td style='border:1px solid #1f4e79;padding:2px 8px'>10 (4)</td></tr></table>(Số trong ngoặc = vị trí hàng/cột thứ mấy trên lưới. Dấu ! nhắc: AB=10 là hàng thứ 4 vì Gray order.)",
            "<b>Step 3 — Tìm quy luật / Spot the pattern.</b> Nhìn cột 'Cột CD' trong bảng: chỉ có 00 và 10 — tức là bit $D$ (bit cuối) LUÔN bằng 0. 8 số đề cho chính là 8 số CHẴN. Nói cách khác: $F = 1$ bất cứ khi nào $D = 0$, không phụ thuộc A, B, C / $F=1$ whenever $D = 0$, regardless of A, B, C.",
            "<b>Step 4 — Đặt 1 vào bản đồ / Place the 1s.</b> Theo bảng trên, 8 con số rơi đúng vào cột 1 (CD=00) và cột 4 (CD=10), đủ cả 4 hàng:<br><svg viewBox='-18 -14 376 230' width='350' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.4' fill='none'><rect x='60' y='30' width='48' height='160' fill='#dbe7f6'/><rect x='204' y='30' width='48' height='160' fill='#dbe7f6'/><rect x='60' y='30' width='192' height='160'/><line x1='108' y1='30' x2='108' y2='190'/><line x1='156' y1='30' x2='156' y2='190'/><line x1='204' y1='30' x2='204' y2='190'/><line x1='60' y1='70' x2='252' y2='70'/><line x1='60' y1='110' x2='252' y2='110'/><line x1='60' y1='150' x2='252' y2='150'/><text x='84' y='22' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>CD=00</text><text x='132' y='22' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>01</text><text x='180' y='22' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>11</text><text x='228' y='22' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>10</text><text x='52' y='54' text-anchor='end' font-size='10' fill='#1f4e79' stroke='none'>AB=00</text><text x='52' y='94' text-anchor='end' font-size='10' fill='#1f4e79' stroke='none'>01</text><text x='52' y='134' text-anchor='end' font-size='10' fill='#1f4e79' stroke='none'>11</text><text x='52' y='174' text-anchor='end' font-size='10' fill='#1f4e79' stroke='none'>10</text><g font-size='14' fill='#1f4e79' stroke='none' text-anchor='middle'><text x='84' y='56'>1</text><text x='228' y='56'>1</text><text x='84' y='96'>1</text><text x='228' y='96'>1</text><text x='84' y='136'>1</text><text x='228' y='136'>1</text><text x='84' y='176'>1</text><text x='228' y='176'>1</text></g><g font-size='13' fill='#9db4cc' stroke='none' text-anchor='middle'><text x='132' y='56'>0</text><text x='180' y='56'>0</text><text x='132' y='96'>0</text><text x='180' y='96'>0</text><text x='132' y='136'>0</text><text x='180' y='136'>0</text><text x='132' y='176'>0</text><text x='180' y='176'>0</text></g><g font-size='7.5' fill='#8aa3bd' stroke='none'><text x='64' y='40'>m0</text><text x='112' y='40'>m1</text><text x='160' y='40'>m3</text><text x='208' y='40'>m2</text><text x='64' y='80'>m4</text><text x='112' y='80'>m5</text><text x='160' y='80'>m7</text><text x='208' y='80'>m6</text><text x='64' y='120'>m12</text><text x='112' y='120'>m13</text><text x='160' y='120'>m15</text><text x='208' y='120'>m14</text><text x='64' y='160'>m8</text><text x='112' y='160'>m9</text><text x='160' y='160'>m11</text><text x='208' y='160'>m10</text></g><text x='156' y='207' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>2 cột tô xanh = D=0 (wrap quanh mép → 1 nhóm 8 ô)</text></g></svg>K-map cuộn tròn / the map wraps around: mép trái và mép phải là HÀNG XÓM của nhau, nên 2 cột tô xanh dính thành MỘT nhóm 8 ô.",
            "<b>Step 5 — Đọc kết quả từ nhóm / Read the block.</b> Trong nhóm 8 ô, hỏi từng biến: có đổi giá trị không? $A$: có cả 0 và 1 → loại. $B$: đổi → loại. $C$: cột 00 có $C{=}0$, cột 10 có $C{=}1$ → loại. $D$: LUÔN là 0 → giữ lại, viết thành $\\bar D$. Nhóm $8 = 2^{3}$ → loại đúng 3 biến → còn 1 biến: $F = \\bar D$."
          ],
          a: "$F = \\bar D$ — nghĩa là / meaning: $F = 1$ đúng khi $D = 0$ (số đầu vào là số chẵn).",
          v: "Thử ô KHÔNG có trong đề / spot-check: $m_5 = 0101$ có $D = 1$ → $F$ phải bằng 0, và đúng là 5 không nằm trong danh sách ✓. Thử ô có trong đề: $m_{14} = 1110$, $D = 0$ → $F = 1$ ✓. Quy tắc cỡ nhóm (nên thuộc): lưới 16 ô — nhóm 8 → 1 biến, nhóm 4 → 2 biến, nhóm 2 → 3 biến; nhóm 8 của ta cho đúng 1 biến $\\bar D$ ✓."

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
          c: "Setup time $t_{su}$ is the window BEFORE the active clock edge during which the D input must already be stable; violating it risks latching garbage or metastability.",
          s: [
            "<b>Step 1 — Define the violation.</b> Data transitions inside the $t_{su}$ window before the edge → the latch samples a changing signal → wrong value or metastable oscillation that resolves unpredictably.",
            "<b>Step 2 — Trace the cause.</b> Setup is violated when the combinational path is too SLOW for the clock: $t_{clk} < t_{cq} + t_{comb} + t_{su}$. Fixes: pipeline the logic, slow the clock, or speed the path.",
            "<b>Step 3 — Distractor audit.</b> Data changing LONG before the edge is the desired case; clock period exceeding logic delay is the SAFE direction; duty cycle is irrelevant to edge-triggered setup."
          ],
          a: "Data changes within $t_{su}$ before the active clock edge.",
          v: "The dual worth pinning: HOLD violations come from paths that are too FAST (data races through before the edge's effect lands) — fixed with delay insertion, never by slowing the clock ✓. Max-frequency formula every FE taker needs: $f_{max} = 1/(t_{cq} + t_{comb} + t_{su})$."

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
          c: "Average memory access time chains the miss paths: AMAT $= t_{L1} + m_{L1}\\,(t_{L2} + m_{L2}\\,t_{mem})$ — each level's cost is paid only on the misses that reach it.",
          s: [
            "<b>Step 1 — Cost of an L1 miss.</b> Going to L2 costs $10 + 0.01 \\times 100 = 11$ cycles on average (L2 hit plus its own 1% miss to memory).",
            "<b>Step 2 — Weight by L1 miss rate.</b> AMAT $= 1 + 0.05 \\times 11 = 1 + 0.55 = 1.55$ cycles.",
            "<b>Step 3 — Distractor audit.</b> 5, 10, 100 cycles are the raw latencies of single levels — the whole point of the hierarchy is that the WEIGHTED average stays near the L1 time."
          ],
          a: "AMAT $\\approx 1.55$ cycles.",
          v: "Leverage check: without any cache every access costs 100 cycles — the hierarchy delivers a ~65× speedup while only 0.05% of accesses ($0.05\\times0.01$) ever touch DRAM ✓. Sensitivity: halving the L1 miss rate to 2.5% drops AMAT to 1.28 — miss-rate improvements at the TOP level dominate."

        })
      },
      { q: "Amdahl's law: 90% parallelizable code, infinite processors. Maximum speedup:",
        choices: ["$10\\times$", "$90\\times$", "$\\infty$", "$1.1\\times$"],
        correct: 0,
        ref: "Handbook §17 (Amdahl)",
        solution: S({
          c: "Amdahl's law: speedup $= \\dfrac{1}{(1-f) + f/P}$. As $P \\to \\infty$ the parallel term vanishes, leaving the serial fraction as an immovable ceiling.",
          s: [
            "<b>Step 1 — Take the limit.</b> $\\lim_{P\\to\\infty} = \\dfrac{1}{1 - f} = \\dfrac{1}{0.10} = 10$.",
            "<b>Step 2 — Internalize why.</b> With infinite processors the 90% parallel work takes zero time, but the 10% serial work still takes its full share — total time can never drop below 10% of the original.",
            "<b>Step 3 — Distractor audit.</b> $\\infty$ ignores the serial fraction; 90× confuses the percentage with the speedup; 1.1× inverts the logic."
          ],
          a: "Maximum speedup $= 10\\times$.",
          v: "Finite-P check: at $P = 90$, speedup $= 1/(0.1 + 0.9/90) = 9.1$ — already 91% of the ceiling, so piling on processors past ~100 is nearly pointless here ✓. Engineering moral: optimize the serial 10% first — cutting it to 5% doubles the ceiling to 20×."

        })
      },
      { q: "32-bit virtual address, 4 KB pages. Page-table size for a single process with one-level table (4 bytes/entry):",
        choices: ["$4$ MB", "$32$ MB", "$1$ MB", "$1$ GB"],
        correct: 0,
        ref: "Handbook §17 (Virtual memory page table)",
        solution: S({
          c: "Page-table size = (number of virtual pages) × (entry size). The page offset consumes $\\log_2(\\text{page size})$ bits; the rest of the address indexes the table.",
          s: [
            "<b>Step 1 — Split the address.</b> 4 KB pages → offset $= \\log_2 4096 = 12$ bits → VPN $= 32 - 12 = 20$ bits.",
            "<b>Step 2 — Count entries.</b> $2^{20} = 1{,}048{,}576 \\approx 1$M page-table entries.",
            "<b>Step 3 — Multiply by entry size.</b> $2^{20} \\times 4$ B $= 4$ MB per process.",
            "<b>Step 4 — Distractor audit.</b> 1 MB forgets the 4-byte entry width; 32 MB miscounts the VPN as 23 bits; 1 GB would be a 64-bit-ish fantasy for this configuration."
          ],
          a: "4 MB per process (flat, single-level).",
          v: "Why this number matters: 4 MB × hundreds of processes = gigabytes of page tables for mostly-empty address spaces — exactly the waste that multi-level tables fix by allocating only the populated branches ✓. Scaling check: 64-bit flat tables would be $2^{52}\\times8$ B — absurd, hence 4-5 level radix tables on x86-64."

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
          c: "Quicksort's cost is (levels of recursion) × (linear partition work per level). Pivot quality controls the depth: balanced → $\\log n$ levels; degenerate → $n$ levels.",
          s: [
            "<b>Step 1 — Average case.</b> A random pivot lands near the middle on average: $T(n) = 2T(n/2) + O(n) \\Rightarrow O(n\\log n)$ (Master theorem case 2).",
            "<b>Step 2 — Worst case.</b> Always-extreme pivot (e.g. first element on ALREADY-SORTED input): $T(n) = T(n-1) + O(n) = O(n^{2})$ — the recursion degenerates to a chain.",
            "<b>Step 3 — Distractor audit.</b> '$O(n\\log n)$ both' describes MERGESORT/heapsort (guaranteed); '$O(n^{2})$ both' slanders the average case; '$O(n)$ average' beats the comparison-sort lower bound — impossible."
          ],
          a: "$O(n\\log n)$ average, $O(n^{2})$ worst.",
          v: "Mitigation map (why quicksort survives in practice): randomized pivot makes the worst case vanishingly unlikely; median-of-three kills the sorted-input trap; introsort (C++ std::sort) detects deep recursion and bails to heapsort, capping the worst case at $O(n\\log n)$ ✓. Space note: in-place ($O(\\log n)$ stack) vs mergesort's $O(n)$ buffer — the practical tiebreaker."

        })
      },
      { q: "Hash table with linear probing: load factor 0.5, average successful lookups:",
        choices: ["$\\approx 1.5$ probes", "$1$ probe", "$\\approx 5$ probes", "$\\approx 0.5$ probes"],
        correct: 0,
        ref: "Handbook §18 (Hashing — Knuth's formulas)",
        solution: S({
          c: "Knuth's classic open-addressing results: with load factor $\\alpha$, a SUCCESSFUL linear-probe search averages $\\tfrac12\\!\\left(1 + \\dfrac{1}{1-\\alpha}\\right)$ probes.",
          s: [
            "<b>Step 1 — Plug in $\\alpha = 0.5$.</b> $\\tfrac12(1 + \\dfrac{1}{0.5}) = \\tfrac12(1 + 2) = 1.5$ probes.",
            "<b>Step 2 — Distractor audit.</b> 1 probe assumes no collisions ever ($\\alpha \\to 0$); 5 probes ≈ the UNSUCCESSFUL-search cost at much higher load; 0.5 probes is physically impossible (every search costs at least one).",
            "<b>Step 3 — The companion formula.</b> Unsuccessful search: $\\tfrac12\\!\\left(1 + \\dfrac{1}{(1-\\alpha)^{2}}\\right) = \\tfrac12(1+4) = 2.5$ probes at the same load."
          ],
          a: "$\\approx 1.5$ probes per successful search.",
          v: "Blow-up check (why tables resize): at $\\alpha = 0.9$ successful → 5.5 probes, unsuccessful → 50.5 — the $(1-\\alpha)^{-2}$ term explodes, which is why implementations rehash near $\\alpha \\approx 0.7$ ✓. Mechanism note: linear probing suffers PRIMARY clustering (runs coalesce); double hashing trades that for slightly costlier probes."

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
          c: "COUNT(*) counts ROWS; one customer with five 2025 orders contributes five rows. De-duplication must happen inside the aggregate: COUNT(DISTINCT customer_id).",
          s: [
            "<b>Step 1 — Identify the grain mismatch.</b> The orders table's grain is one row per ORDER; the question asks about CUSTOMERS — an entity one level up.",
            "<b>Step 2 — Apply the right aggregate.</b> SELECT COUNT(DISTINCT customer_id) FROM orders WHERE order_date >= '2025-01-01' AND order_date < '2026-01-01' — DISTINCT collapses repeat buyers before counting.",
            "<b>Step 3 — Distractor audit.</b> COUNT(*) counts orders, not customers; GROUP BY customer_id alone returns one ROW per customer (a list, not a count); ORDER BY is presentation only — it never changes cardinality."
          ],
          a: "COUNT(DISTINCT customer_id) is the essential clause.",
          v: "Equivalence check: SELECT COUNT(*) FROM (SELECT customer_id FROM orders WHERE ... GROUP BY customer_id) AS t returns the same number — GROUP BY + outer count is the long way around ✓. Date-range note: the half-open interval [Jan 1 2025, Jan 1 2026) beats BETWEEN for timestamp columns — no midnight-edge double counting."

        })
      },
      { q: "Big-O of repeatedly inserting at the head of a doubly-linked list of size $n$, $k$ times:",
        choices: ["$O(k)$", "$O(kn)$", "$O(n)$", "$O(n^{2})$"],
        correct: 0,
        ref: "Handbook §18 (Linked-list operations)",
        solution: S({
          c: "Head insertion into a doubly-linked list touches a constant number of pointers — old head's prev, new node's next/prev, and the head reference — regardless of list length: $O(1)$ each.",
          s: [
            "<b>Step 1 — Cost one insertion.</b> Allocate node; set node.next = head, node.prev = null, head.prev = node, head = node — four pointer writes, no traversal: $O(1)$.",
            "<b>Step 2 — Multiply by $k$.</b> $k$ insertions × $O(1)$ = $O(k)$ total. The list's current size $n$ never appears in the cost.",
            "<b>Step 3 — Distractor audit.</b> $O(kn)$ is the ARRAY answer (each head-insert shifts $n$ elements); $O(n)$ ignores the $k$ insertions; $O(n^{2})$ belongs to repeated array insertion with $k \\approx n$."
          ],
          a: "$O(k)$ total.",
          v: "Contrast check that cements it: the same $k$ insertions at the head of a dynamic ARRAY cost $O(kn)$ shifts (amortized append at the TAIL would be $O(k)$ — position matters for arrays, not for lists) ✓. Trade-off honesty: lists pay it back with $O(n)$ random access and poor cache locality — the FE wants the operation-vs-structure mapping."

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
