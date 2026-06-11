// FE Electrical Question Bank — Extension Pack 13 (Round 13)
// ============================================================
// Coverage-gap set: original problems on FE topics that were
// under-represented in Rounds 1–12 — transmission lines (VSWR,
// Smith chart), symmetrical components, state-machine design,
// link budget, FFT bit-reversal, active filters (Sallen-Key),
// power electronics (buck/boost), discrete-time control, trees
// and graphs, etc. All problem statements are ORIGINAL.
// 2026-06-11: all 42 solutions upgraded to the detailed multi-
// step standard (Step 1-N narratives, distractor audits, multi-
// point verification, sub-circuit/diagram SVGs where natural).
// ============================================================
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") {
    console.warn("QUESTION_BANK or S helper missing — extra13 not loaded.");
    return;
  }

  const EXTRAS = {
    // ====================== Ch 1: Mathematics ======================
    1: [
      { q: "Stokes' theorem relates a line integral around a closed curve $C$ to a surface integral over $S$ bounded by $C$. The integrand on the surface side is:",
        choices: ["$(\\nabla \\times \\vec F)\\cdot d\\vec S$", "$(\\nabla \\cdot \\vec F)\\,dV$", "$\\vec F\\cdot d\\vec r$", "$\\nabla\\phi\\,dS$"],
        correct: 0,
        ref: "Handbook §1.5 (Stokes' theorem)",
        solution: S({
          c: "Stokes' theorem converts the circulation of a vector field around a closed curve into the flux of its curl through any surface bounded by that curve: $\\oint_C\\vec F\\cdot d\\vec r = \\iint_S(\\nabla\\times\\vec F)\\cdot d\\vec S$.",
          s: [
            "<b>Step 1 — Identify the two sides of the identity.</b> The line-integral side carries the integrand $\\vec F\\cdot d\\vec r$ (circulation). The surface side must therefore carry whatever measures local rotation of $\\vec F$ — that is the curl.",
            "<b>Step 2 — Read off the surface integrand.</b> The flux element through $S$ is $(\\nabla\\times\\vec F)\\cdot d\\vec S$, where $d\\vec S = \\hat n\\,dS$ is oriented by the right-hand rule relative to the direction of travel around $C$.",
            "<b>Step 3 — Eliminate the distractors.</b> $(\\nabla\\cdot\\vec F)\\,dV$ belongs to the <i>divergence</i> theorem (closed surface ↔ volume, a different identity). $\\vec F\\cdot d\\vec r$ is the line side itself, not the surface side. $\\nabla\\phi\\,dS$ mixes a gradient with a scalar area element — dimensionally and structurally meaningless here."
          ],
          a: "$(\\nabla\\times\\vec F)\\cdot d\\vec S$ — circulation around $C$ equals curl flux through $S$.",
          v: "Consistency checks: (1) if $\\vec F$ is conservative, $\\nabla\\times\\vec F = 0$ and both sides vanish ✓. (2) Green's theorem is the planar special case with $\\hat n = \\hat z$: $\\oint(P\\,dx+Q\\,dy) = \\iint(\\partial_x Q - \\partial_y P)\\,dA$ ✓."

        })
      },
      { q: "An eigenvector of $A = \\begin{bmatrix}2&1\\\\0&3\\end{bmatrix}$ corresponding to $\\lambda = 3$ is:",
        choices: ["$\\begin{bmatrix}1\\\\1\\end{bmatrix}$", "$\\begin{bmatrix}1\\\\0\\end{bmatrix}$", "$\\begin{bmatrix}0\\\\1\\end{bmatrix}$", "$\\begin{bmatrix}1\\\\-1\\end{bmatrix}$"],
        correct: 0,
        ref: "Handbook §1.4 (Eigenvectors)",
        solution: S({
          c: "An eigenvector $\\vec v$ of $A$ for eigenvalue $\\lambda$ satisfies $A\\vec v = \\lambda\\vec v$, i.e. it solves the homogeneous system $(A-\\lambda I)\\vec v = \\vec 0$.",
          s: [
            "<b>Step 1 — Form $A - \\lambda I$ for $\\lambda = 3$.</b> Subtract 3 from each diagonal entry: $A - 3I = \\begin{bmatrix}2-3 & 1\\\\0 & 3-3\\end{bmatrix} = \\begin{bmatrix}-1 & 1\\\\0 & 0\\end{bmatrix}$.",
            "<b>Step 2 — Solve the null-space equation.</b> The bottom row is all zeros (this MUST happen — it confirms $\\lambda = 3$ really is an eigenvalue). The top row gives $-v_1 + v_2 = 0$, so $v_2 = v_1$.",
            "<b>Step 3 — Pick any non-zero representative.</b> Setting $v_1 = 1$ gives $\\vec v = (1,1)^{T}$. Any scalar multiple is equally valid — eigenvectors define a direction, not a length."
          ],
          a: "$\\vec v = (1,1)^{T}$",
          v: "Direct check: $A\\vec v = (2\\cdot1 + 1\\cdot1,\\ 0 + 3\\cdot1)^{T} = (3,3)^{T} = 3\\,(1,1)^{T}$ ✓. Distractor insight: $(1,0)^{T}$ is the eigenvector of the OTHER eigenvalue $\\lambda = 2$ (upper-triangular matrix ⇒ eigenvalues are the diagonal entries 2 and 3)."

        })
      },
      { q: "Euler's method on $y' = y$, $y(0) = 1$, step $h = 0.1$. Estimate of $y(0.3)$:",
        choices: ["$\\approx 1.331$", "$\\approx 1.349$ (exact)", "$\\approx 1.300$", "$\\approx 1.500$"],
        correct: 0,
        ref: "Handbook §1.8 (Euler's method)",
        solution: S({
          c: "Euler's method advances the solution along the local tangent line: $y_{n+1} = y_n + h\\,f(t_n, y_n)$. For $y' = y$ this collapses to a simple geometric update $y_{n+1} = y_n(1+h)$.",
          s: [
            "<b>Step 1 — Specialize the update rule.</b> With $f(t,y) = y$ and $h = 0.1$: $y_{n+1} = y_n + 0.1\\,y_n = 1.1\\,y_n$. Three steps of size 0.1 reach $t = 0.3$.",
            "<b>Step 2 — Iterate.</b> $y_1 = 1.1(1) = 1.1$ (at $t=0.1$); $y_2 = 1.1(1.1) = 1.21$ (at $t=0.2$); $y_3 = 1.1(1.21) = 1.331$ (at $t=0.3$).",
            "<b>Step 3 — Recognize the pattern.</b> $y_3 = (1.1)^{3} = 1.331$ exactly — Euler on $y'=y$ is compound growth at rate $h$ per step.",
            "<b>Step 4 — Beware the 'exact' distractor.</b> The question asks for the EULER estimate, not the true solution $e^{0.3} \\approx 1.3499$. Choice B quotes the exact value precisely to trap readers who solve the ODE analytically instead of running the method."
          ],
          a: "$y(0.3) \\approx 1.331$ by Euler's method.",
          v: "Error check: true value $e^{0.3} = 1.3499$; Euler underestimates by 1.4% because each tangent step ignores the curvature of the growing exponential (local truncation error $O(h^{2})$, global $O(h)$). Halving $h$ would roughly halve the error; RK4 would nail 4-5 digits at the same step size."

        })
      },
      { q: "Curl of $\\vec F = \\langle y z, x z, x y\\rangle$:",
        choices: ["$\\vec 0$", "$\\langle x, y, z\\rangle$", "$\\langle 1, 1, 1\\rangle$", "$\\langle z, x, y\\rangle$"],
        correct: 0,
        ref: "Handbook §1.5 (Curl)",
        solution: S({
          c: "$\\nabla\\times\\vec F = \\left(\\partial_y F_z - \\partial_z F_y,\\ \\partial_z F_x - \\partial_x F_z,\\ \\partial_x F_y - \\partial_y F_x\\right)$ — compute each component from the determinant rule.",
          s: [
            "<b>Step 1 — x-component.</b> $\\partial_y F_z - \\partial_z F_y = \\partial_y(xy) - \\partial_z(xz) = x - x = 0$.",
            "<b>Step 2 — y-component.</b> $\\partial_z F_x - \\partial_x F_z = \\partial_z(yz) - \\partial_x(xy) = y - y = 0$.",
            "<b>Step 3 — z-component.</b> $\\partial_x F_y - \\partial_y F_x = \\partial_x(xz) - \\partial_y(yz) = z - z = 0$.",
            "<b>Step 4 — Conclude.</b> Every component cancels identically: $\\nabla\\times\\vec F = \\vec 0$ everywhere — the field is irrotational."
          ],
          a: "$\\vec 0$ (irrotational field)",
          v: "Deeper check: $\\vec F = \\nabla(xyz)$ — a gradient field, and the curl of any gradient is identically zero. Consequences: line integrals of $\\vec F$ are path-independent and $\\oint_C \\vec F\\cdot d\\vec r = 0$ on every closed loop (consistent with Stokes' theorem)."

        })
      },
      { q: "Recursive sequence $a_n = a_{n-1} + a_{n-2}$, $a_0 = 0$, $a_1 = 1$ (Fibonacci). Closed-form ratio $a_{n+1}/a_n$ approaches:",
        choices: ["Golden ratio $\\varphi = (1+\\sqrt 5)/2 \\approx 1.618$", "$2$", "$\\sqrt 2$", "$1$"],
        correct: 0,
        ref: "Handbook §1.3 (Recurrences, characteristic equation)",
        solution: S({
          c: "Linear recurrences with constant coefficients are solved through the characteristic equation: substituting $a_n = r^{n}$ into $a_n = a_{n-1} + a_{n-2}$ gives $r^{2} = r + 1$.",
          s: [
            "<b>Step 1 — Solve the characteristic equation.</b> $r^{2} - r - 1 = 0 \\Rightarrow r = \\dfrac{1 \\pm \\sqrt 5}{2}$, i.e. $\\varphi = \\dfrac{1+\\sqrt 5}{2} \\approx 1.618$ and $\\psi = \\dfrac{1-\\sqrt 5}{2} \\approx -0.618$.",
            "<b>Step 2 — Write the general solution.</b> $a_n = A\\varphi^{n} + B\\psi^{n}$, with $A, B$ fixed by $a_0 = 0,\\ a_1 = 1$ (Binet: $A = -B = 1/\\sqrt 5$).",
            "<b>Step 3 — Take the ratio limit.</b> $\\dfrac{a_{n+1}}{a_n} = \\dfrac{A\\varphi^{n+1} + B\\psi^{n+1}}{A\\varphi^{n} + B\\psi^{n}}$. Since $|\\psi| \\approx 0.618 < 1$, the $\\psi^{n}$ terms die out geometrically, leaving the ratio $\\to \\varphi$."
          ],
          a: "$\\varphi = (1+\\sqrt 5)/2 \\approx 1.618$ — the golden ratio.",
          v: "Numerical check: $13/8 = 1.625$, $21/13 \\approx 1.6154$, $34/21 \\approx 1.6190$ — oscillating convergence toward 1.618 ✓ (alternation comes from the negative sign of $\\psi$). Binet's closed form $a_n = (\\varphi^{n}-\\psi^{n})/\\sqrt 5$ reproduces 0, 1, 1, 2, 3, 5, 8… exactly."

        })
      }
    ],

    // ====================== Ch 2: Probability & Statistics ======================
    2: [
      { q: "Markov chain transition matrix $P = \\begin{bmatrix}0.8 & 0.2\\\\ 0.3 & 0.7\\end{bmatrix}$. Stationary distribution $\\pi$ satisfies $\\pi P = \\pi$:",
        choices: ["$\\pi = (0.6, 0.4)$", "$\\pi = (0.5, 0.5)$", "$\\pi = (0.8, 0.2)$", "$\\pi = (0.3, 0.7)$"],
        correct: 0,
        ref: "Handbook §2.2 (Markov chains)",
        solution: S({
          c: "A stationary distribution is a probability row vector that the chain maps to itself: $\\pi P = \\pi$ with $\\pi_1 + \\pi_2 = 1$. It is the long-run fraction of time spent in each state.",
          s: [
            "<b>Step 1 — Write the balance equation for state 1.</b> $\\pi_1 = 0.8\\pi_1 + 0.3\\pi_2$ (stay in 1 with prob. 0.8, or arrive from 2 with prob. 0.3).",
            "<b>Step 2 — Simplify.</b> $0.2\\pi_1 = 0.3\\pi_2$ — in equilibrium, probability flow $1\\to2$ equals flow $2\\to1$ (detailed balance for a 2-state chain). Hence $\\pi_2 = \\tfrac{2}{3}\\pi_1$.",
            "<b>Step 3 — Normalize.</b> $\\pi_1 + \\tfrac{2}{3}\\pi_1 = 1 \\Rightarrow \\tfrac{5}{3}\\pi_1 = 1 \\Rightarrow \\pi_1 = 0.6$, $\\pi_2 = 0.4$."
          ],
          a: "$\\pi = (0.6,\\ 0.4)$",
          v: "Verify by multiplying: $\\pi P = (0.6(0.8) + 0.4(0.3),\\ 0.6(0.2) + 0.4(0.7)) = (0.48+0.12,\\ 0.12+0.28) = (0.6, 0.4)$ ✓. Intuition: state 1 is 'stickier' (0.8 vs 0.7 self-loop), so it carries more long-run weight. Distractor $(0.8, 0.2)$ is just the first row of $P$ — a classic mix-up."

        })
      },
      { q: "$X$ and $Y$ are independent normal: $X\\sim\\mathcal N(0, 1),\\ Y\\sim\\mathcal N(0, 4)$. Distribution of $X + Y$:",
        choices: ["$\\mathcal N(0, 5)$", "$\\mathcal N(0, 2)$", "$\\mathcal N(0, \\sqrt 5)$", "Not normal"],
        correct: 0,
        ref: "Handbook §2.2 (Sum of independent normals)",
        solution: S({
          c: "Normality is closed under independent sums: if $X$ and $Y$ are independent normals, $X+Y$ is normal with mean $\\mu_X + \\mu_Y$ and variance $\\sigma_X^{2} + \\sigma_Y^{2}$.",
          s: [
            "<b>Step 1 — Means add.</b> $E[X+Y] = 0 + 0 = 0$.",
            "<b>Step 2 — Variances add (independence!).</b> $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y) = 1 + 4 = 5$. The covariance cross-term $2\\,\\text{Cov}(X,Y)$ vanishes because $X \\perp Y$.",
            "<b>Step 3 — Name the distribution.</b> $X + Y \\sim \\mathcal N(0, 5)$ in the (mean, variance) convention used by the handbook. The standard deviation is $\\sqrt 5 \\approx 2.236$ — not 3."
          ],
          a: "$\\mathcal N(0,\\ 5)$ — mean 0, variance 5.",
          v: "Pitfall audit: SDs do NOT add ($1 + 2 = 3$ would wrongly suggest variance 9). 'Not normal' is false — the sum of independent normals is always exactly normal (it is the defining stability property of the Gaussian family). If $X, Y$ were correlated, variance would become $5 + 2\\rho\\sigma_X\\sigma_Y$."

        })
      },
      { q: "Conditional expectation: $E[Y\\,|\\,X = x]$ for joint density that is uniform on the unit square. Then $E[Y\\,|\\,X = 0.3]$:",
        choices: ["$0.5$", "$0.3$", "$0$", "$1$"],
        correct: 0,
        ref: "Handbook §2.2 (Conditional expectation)",
        solution: S({
          c: "For a joint density uniform on the unit square, the density factorizes: $f(x,y) = 1 = f_X(x)f_Y(y)$ — so $X$ and $Y$ are independent uniforms on $[0,1]$.",
          s: [
            "<b>Step 1 — Establish independence.</b> Uniform on $[0,1]^{2}$ means $f(x,y) = 1$ on the square, which equals the product of two $U(0,1)$ marginals. Independence is structural here, not assumed.",
            "<b>Step 2 — Apply the independence shortcut.</b> Conditioning on $X = 0.3$ gives no information about $Y$: $E[Y \\mid X = 0.3] = E[Y]$.",
            "<b>Step 3 — Evaluate.</b> $Y \\sim U(0,1) \\Rightarrow E[Y] = 1/2$."
          ],
          a: "$E[Y \\mid X = 0.3] = 0.5$",
          v: "Contrast check (shows the answer is NOT automatic): if instead the joint were uniform on the triangle $\\{0 \\le y \\le x \\le 1\\}$, then $Y \\mid X = 0.3 \\sim U(0, 0.3)$ and $E[Y \\mid X=0.3] = 0.15$. The square's product structure is what makes conditioning irrelevant. Distractor 0.3 baits readers into echoing the conditioning value."

        })
      },
      { q: "Chi-squared goodness-of-fit test for fairness of a die: rolled 60 times, expected 10 per face. Test statistic $\\chi^{2} = \\sum (O_i - E_i)^{2}/E_i$ is compared to:",
        choices: ["$\\chi^{2}_{0.05, 5}$ (5 degrees of freedom)", "$\\chi^{2}_{0.05, 6}$", "$z_{0.05}$", "$t_{0.05, 59}$"],
        correct: 0,
        ref: "Handbook §2.4 (Goodness-of-fit)",
        solution: S({
          c: "Degrees of freedom for a $\\chi^{2}$ goodness-of-fit test: df $= (k - 1) - m$, where $k$ = number of categories and $m$ = number of parameters estimated from the data.",
          s: [
            "<b>Step 1 — Count categories.</b> A die has $k = 6$ faces. The '−1' accounts for the constraint that all category counts must sum to 60 (one count is determined by the others).",
            "<b>Step 2 — Count estimated parameters.</b> The fairness hypothesis fully specifies every cell probability ($p_i = 1/6$); nothing is estimated from the data, so $m = 0$.",
            "<b>Step 3 — Assemble.</b> df $= 6 - 1 - 0 = 5$, so the statistic is compared against $\\chi^{2}_{0.05,\\,5} = 11.07$. Reject fairness if $\\sum(O_i - E_i)^{2}/E_i > 11.07$."
          ],
          a: "$\\chi^{2}_{0.05,\\,5}$ — five degrees of freedom.",
          v: "Distractor audit: df $= 6$ forgets the sum constraint. $z$ and $t$ statistics apply to means, not multinomial count tables. If a parameter HAD been estimated (e.g. fitting a binomial $p$ first), df would drop to $k - 2 = 4$ — each fitted parameter costs one degree of freedom."

        })
      }
    ],

    // ====================== Ch 4: Engineering Economics ======================
    4: [
      { q: "Breakeven analysis: fixed cost \\$50{,}000, variable cost \\$15 per unit, selling price \\$25 per unit. Breakeven quantity:",
        choices: ["5,000 units", "2,000 units", "10,000 units", "3,333 units"],
        correct: 0,
        ref: "Handbook §3 (Breakeven)",
        solution: S({
          c: "Breakeven is where total revenue equals total cost: $pQ = F + vQ$. Solving gives $Q^{*} = F/(p - v)$ — fixed cost divided by the contribution margin per unit.",
          s: [
            "<b>Step 1 — Compute the contribution margin.</b> Each unit sold contributes $p - v = 25 - 15 = \\$10$ toward covering fixed costs (the \\$15 variable cost is consumed making the unit).",
            "<b>Step 2 — Divide fixed cost by contribution.</b> $Q^{*} = 50{,}000 / 10 = 5{,}000$ units.",
            "<b>Step 3 — Audit the distractors.</b> 2,000 = $F/p$ (ignores variable cost); 3,333 = $F/v$ (divides by the wrong cost); 10,000 doubles the true answer (e.g. using \\$5 margin by subtracting in the wrong direction)."
          ],
          a: "$Q^{*} = 5{,}000$ units",
          v: "P&L check at 5,000 units: revenue $= 25 \\times 5000 = \\$125{,}000$; total cost $= 50{,}000 + 15 \\times 5000 = \\$125{,}000$ — exactly equal ✓. Beyond breakeven, profit grows at \\$10/unit: a \\$30,000 profit target needs $5{,}000 + 3{,}000 = 8{,}000$ units."

        })
      },
      { q: "Sensitivity analysis: project NPV at $i = 10\\%$ is +\\$5,000. At $i = 12\\%$ it is -\\$2,000. Approximate IRR by linear interpolation:",
        choices: ["$\\approx 11.4\\%$", "$11.0\\%$", "$12\\%$", "$10.4\\%$"],
        correct: 0,
        ref: "Handbook §3 (IRR by interpolation)",
        solution: S({
          c: "IRR is the discount rate where NPV $= 0$. With NPV known at two rates that bracket zero, linearly interpolate: $\\text{IRR} \\approx i_1 + (i_2 - i_1)\\dfrac{NPV_1}{NPV_1 - NPV_2}$.",
          s: [
            "<b>Step 1 — Confirm the bracket.</b> NPV(10%) $= +5000 > 0$ and NPV(12%) $= -2000 < 0$, so the root lies between 10% and 12%.",
            "<b>Step 2 — Set up similar triangles.</b> Over the 2-point spread, NPV falls by $5000 - (-2000) = 7000$. The zero crossing sits $5000/7000 = 5/7$ of the way from 10% toward 12%.",
            "<b>Step 3 — Interpolate.</b> $\\text{IRR} \\approx 10 + 2 \\times \\dfrac{5000}{7000} = 10 + 1.43 = 11.43\\%$."
          ],
          a: "$\\text{IRR} \\approx 11.4\\%$",
          v: "Position check: the larger NPV magnitude at 10% (+5000 vs −2000) pushes the crossing closer to 12% — and 11.43% is indeed nearer 12 ✓. Caveat: NPV vs $i$ is convex, so linear interpolation slightly misplaces the root, but over a 2% gap the error is typically under 0.1%."

        })
      },
      { q: "Decision under uncertainty: alternative A has expected NPV \\$100k with SD \\$20k; alternative B has expected \\$90k with SD \\$5k. A risk-averse engineer prefers:",
        choices: [
          "B — lower variability, only slightly less expected value (if utility is concave).",
          "A — always higher expected.",
          "Always indifferent.",
          "Insufficient information."
        ],
        correct: 0,
        ref: "Handbook §3 (Decision under risk)",
        solution: S({
          c: "Risk aversion means concave utility: a risk-averse decision-maker values an uncertain payoff at its certainty equivalent (CE), which sits BELOW the expected value by a risk premium that grows with variance.",
          s: [
            "<b>Step 1 — Lay out the trade.</b> A: $\\mu = \\$100$k, $\\sigma = \\$20$k. B: $\\mu = \\$90$k, $\\sigma = \\$5$k. A offers \\$10k more expectation but 4× the spread.",
            "<b>Step 2 — Apply certainty equivalents.</b> For a concave utility, CE $\\approx \\mu - \\tfrac{1}{2}\\lambda\\sigma^{2}$ (λ = risk-aversion coefficient). A's penalty term scales with $\\sigma^{2} = 400$; B's with only 25. Even moderate risk aversion drops A's CE below \\$90k while B's CE stays near \\$90k.",
            "<b>Step 3 — Decide.</b> The risk-averse engineer takes B: nearly the same expected value with far less exposure to a bad outcome."
          ],
          a: "B — lower variability for a small sacrifice in expected value.",
          v: "Attitude cross-check: risk-NEUTRAL (linear utility) picks A on expectation alone; risk-SEEKING also picks A. The answer hinges entirely on the stated risk aversion — which is the realistic posture in engineering practice, where downside tails (failures, overruns) are penalized disproportionately."

        })
      }
    ],

    // ====================== Ch 5: Properties of Electrical Materials ======================
    5: [
      { q: "Dielectric strength of air at standard pressure is approximately:",
        choices: ["$3$ MV/m (3 kV/mm)", "$30$ MV/m", "$300$ kV/m", "$3$ kV/m"],
        correct: 0,
        ref: "Handbook §6 (Material properties)",
        solution: S({
          c: "Dielectric strength is the maximum electric field a material withstands before breakdown (avalanche ionization). For dry air at standard temperature and pressure it is $\\approx 3$ MV/m.",
          s: [
            "<b>Step 1 — State the benchmark value.</b> $E_{bd}(\\text{air}) \\approx 3 \\times 10^{6}$ V/m. This is THE number to memorize for the FE.",
            "<b>Step 2 — Convert to practical units.</b> $3$ MV/m $= 3$ kV/mm $= 30$ kV/cm — a 1 cm spark gap holds off roughly 30 kV.",
            "<b>Step 3 — Sanity-scale the distractors.</b> 30 MV/m is 10× too strong (approaching transformer-oil/solid-dielectric territory); 300 kV/m and 3 kV/m are 10× and 1000× too weak — ordinary appliances would arc continuously if air broke down at 3 kV/m."
          ],
          a: "$\\approx 3$ MV/m (3 kV/mm, 30 kV/cm)",
          v: "Cross-reference: transformer oil $\\sim$12 MV/m, SF₆ $\\sim$9 MV/m (HV switchgear), mylar $\\sim$280 MV/m. Practical check: 120-V household wiring with $\\sim$1 mm spacing experiences $\\sim$0.12 MV/m — a 25× safety margin below breakdown ✓. Humidity, pressure, and gap geometry shift the effective value (Paschen's law)."

        })
      },
      { q: "Magnetic field intensity in a long solenoid with $N$ turns over length $\\ell$, current $I$:",
        choices: ["$H = NI/\\ell$", "$H = N\\ell/I$", "$H = NI\\ell$", "$H = I/(N\\ell)$"],
        correct: 0,
        ref: "Handbook §6 (Ampere's law — solenoid)",
        solution: S({
          c: "Apply Ampere's law $\\oint \\vec H\\cdot d\\vec\\ell = I_{enc}$ to a rectangular path with one side inside the solenoid (where $H$ is uniform and axial) and one side outside (where $H \\approx 0$).",
          s: [
            "<b>Step 1 — Draw the Amperian loop.</b><br><svg viewBox='-10 -12 330 140' width='320' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><text x='150' y='0' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>N turns over length ℓ, current I</text><circle cx='60' cy='40' r='9'/><circle cx='86' cy='40' r='9'/><circle cx='112' cy='40' r='9'/><circle cx='138' cy='40' r='9'/><circle cx='164' cy='40' r='9'/><circle cx='190' cy='40' r='9'/><circle cx='216' cy='40' r='9'/><circle cx='242' cy='40' r='9'/><rect x='45' y='58' width='212' height='48' stroke-dasharray='5,4' stroke-width='1.2'/><line x1='60' y1='82' x2='230' y2='82'/><polyline points='222,77 232,82 222,87'/><text x='146' y='98' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>H inside (axial)</text><text x='285' y='86' font-size='11' fill='#1f4e79' stroke='none'>H≈0</text></g></svg>Only the inside leg of the dashed path picks up any $\\oint H\\,d\\ell$; the outside leg sees $H \\approx 0$ and the two short legs are perpendicular to $\\vec H$.",
            "<b>Step 2 — Count enclosed current.</b> The loop links every turn that pierces it. With $N$ turns over length $\\ell$, a loop of axial length $\\ell$ encloses $I_{enc} = NI$.",
            "<b>Step 3 — Solve Ampere's law.</b> $H\\,\\ell = NI \\Rightarrow H = NI/\\ell$ — often written $H = nI$ with $n = N/\\ell$ turns per meter. Units: A/m ✓.",
            "<b>Step 4 — Get B if needed.</b> Flux density follows from the material: $B = \\mu_0\\mu_r H = \\mu_0\\mu_r (N/\\ell) I$ — an iron core multiplies $B$ by $\\mu_r$ without changing $H$."
          ],
          a: "$H = NI/\\ell$ (A-turns per meter of length)",
          v: "Dimensional check: A·turns/m ✓ (turns are dimensionless). Distractor audit: $NI\\ell$ and $N\\ell/I$ fail dimensionally; $I/(N\\ell)$ shrinks with more turns — backwards. Toroid cross-check: same physics on a circular path gives $H = NI/(2\\pi r)$, where $2\\pi r$ plays the role of $\\ell$ ✓."

        })
      }
    ],

    // ====================== Ch 6: Circuit Analysis ======================
    6: [
      { q: "Two-port network ABCD parameters: for a series impedance $Z$, the ABCD matrix is:",
        choices: ["$\\begin{bmatrix}1 & Z\\\\0 & 1\\end{bmatrix}$", "$\\begin{bmatrix}1 & 0\\\\Z & 1\\end{bmatrix}$", "$\\begin{bmatrix}Z & 0\\\\0 & 1/Z\\end{bmatrix}$", "$\\begin{bmatrix}0 & 1\\\\1 & Z\\end{bmatrix}$"],
        correct: 0,
        ref: "Handbook §5 (Two-port networks)",
        solution: S({
          c: "ABCD (transmission) parameters relate input port to output port: $\\begin{bmatrix}V_1\\\\I_1\\end{bmatrix} = \\begin{bmatrix}A & B\\\\C & D\\end{bmatrix}\\begin{bmatrix}V_2\\\\I_2\\end{bmatrix}$, with $I_2$ defined flowing OUT of port 2. Derive each entry from KVL/KCL on the actual element.",
          s: [
            "<b>Step 1 — Draw the series-impedance two-port.</b><br><svg viewBox='-10 0 330 120' width='320' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><circle cx='30' cy='30' r='2.5' fill='#1f4e79' stroke='none'/><circle cx='30' cy='90' r='2.5' fill='#1f4e79' stroke='none'/><circle cx='280' cy='30' r='2.5' fill='#1f4e79' stroke='none'/><circle cx='280' cy='90' r='2.5' fill='#1f4e79' stroke='none'/><line x1='30' y1='30' x2='120' y2='30'/><rect x='120' y='18' width='70' height='24'/><text x='155' y='35' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>Z</text><line x1='190' y1='30' x2='280' y2='30'/><line x1='30' y1='90' x2='280' y2='90'/><text x='70' y='20' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>I₁ →</text><text x='240' y='20' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>→ I₂</text><text x='38' y='64' font-size='12' fill='#1f4e79' stroke='none'>V₁</text><text x='258' y='64' font-size='12' fill='#1f4e79' stroke='none'>V₂</text></g></svg>One series element in the top rail; the bottom rail is a straight through-connection.",
            "<b>Step 2 — KCL.</b> The same current flows straight through: $I_1 = I_2$. Matching against $I_1 = C V_2 + D I_2$ gives $C = 0,\\ D = 1$.",
            "<b>Step 3 — KVL around the top path.</b> $V_1 = Z I_2 + V_2$ (drop across $Z$ plus the output voltage). Matching against $V_1 = A V_2 + B I_2$ gives $A = 1,\\ B = Z$."
          ],
          a: "$\\begin{bmatrix}1 & Z\\\\0 & 1\\end{bmatrix}$",
          v: "Reciprocity check: $AD - BC = 1\\cdot1 - Z\\cdot0 = 1$ ✓ (required for any reciprocal passive network). Dual element: shunt admittance $Y$ gives $\\begin{bmatrix}1 & 0\\\\Y & 1\\end{bmatrix}$. Power of the method: cascade blocks multiply — e.g. series-Z then shunt-Y (an L-network) is the matrix product of the two."

        })
      },
      { q: "Mutual inductance: two coils with self-inductances $L_1 = 4$ mH, $L_2 = 9$ mH, coupling coefficient $k = 0.5$. Mutual inductance $M$:",
        choices: ["$3$ mH", "$6$ mH", "$13$ mH", "$0.5$ mH"],
        correct: 0,
        ref: "Handbook §5 (Coupled inductors)",
        solution: S({
          c: "The coupling coefficient bounds mutual inductance: $M = k\\sqrt{L_1 L_2}$ with $0 \\le k \\le 1$ — geometry sets what fraction of one coil's flux actually links the other.",
          s: [
            "<b>Step 1 — Picture the coupled pair.</b><br><svg viewBox='-10 0 320 140' width='310' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><path d='M115,35 a10,11 0 0 1 0,22 a10,11 0 0 1 0,22 a10,11 0 0 1 0,22'/><path d='M185,35 a10,11 0 0 0 0,22 a10,11 0 0 0 0,22 a10,11 0 0 0 0,22'/><line x1='146' y1='28' x2='146' y2='108'/><line x1='154' y1='28' x2='154' y2='108'/><line x1='115' y1='35' x2='115' y2='20'/><line x1='115' y1='101' x2='115' y2='116'/><line x1='185' y1='35' x2='185' y2='20'/><line x1='185' y1='101' x2='185' y2='116'/><text x='100' y='130' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>L₁ = 4 mH</text><text x='205' y='130' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>L₂ = 9 mH</text><text x='150' y='12' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>k = 0.5</text></g></svg>Two windings share a common magnetic path (parallel bars); $k$ measures how completely flux from one links the other.",
            "<b>Step 2 — Compute the geometric mean.</b> $\\sqrt{L_1 L_2} = \\sqrt{4 \\times 9} = \\sqrt{36} = 6$ mH — this is the MAXIMUM possible $M$ (perfect coupling, $k = 1$).",
            "<b>Step 3 — Scale by k.</b> $M = 0.5 \\times 6 = 3$ mH."
          ],
          a: "$M = 3$ mH",
          v: "Bound check: $M \\le \\sqrt{L_1L_2} = 6$ mH — 3 mH respects the energy-positivity limit ✓ (violating it would allow negative stored energy). Distractor audit: 6 mH assumes $k=1$; 13 mH adds $4+9$ (inductances in series with no coupling); 0.5 mH just echoes $k$. Typical hardware: power transformers achieve $k = 0.95$–0.99; loosely coupled wireless-charging pads run $k \\sim 0.1$–0.5."

        })
      },
      { q: "RL circuit step response: switch closes at $t = 0$ connecting $V_S = 20$ V to series $R = 4\\,\\Omega$, $L = 2$ H. Current at $t = 0.5$ s:",
        choices: ["$\\approx 3.16$ A", "$5$ A", "$\\approx 1.97$ A", "$\\approx 4$ A"],
        correct: 0,
        ref: "Handbook §5 (RL transient response)",
        solution: S({
          c: "First-order RL transient: an inductor opposes any change in current, so the current ramps exponentially from its initial value to its new steady-state value with time constant $\\tau = L/R$. The general step response is $i(t) = i(\\infty) + [i(0^{+}) - i(\\infty)]e^{-t/\\tau}$.",
          s: [
            "<b>Step 1 — Initial condition.</b> Before the switch closes ($t<0$), the source is disconnected and no current can flow: <span style='font-family:monospace'>i_L(0⁻) = 0</span>. Current through an inductor cannot change instantaneously, so the continuity rule gives $i_L(0^{-}) = i_L(0^{+}) = 0$ A.",
            "<b>Step 2 — Final value (steady state at $t \\to \\infty$).</b> In DC steady state, an inductor behaves as a short circuit (zero voltage drop). The simplified circuit is therefore a 20-V source driving the 4-Ω resistor alone:<br><svg viewBox='-17 0 327 140' width='327' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><circle cx='40' cy='80' r='18' fill='#fff'/><text x='40' y='72' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>+</text><text x='40' y='94' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>−</text><text x='14' y='84' text-anchor='end' font-size='12' fill='#1f4e79' stroke='none'>20 V</text><line x1='40' y1='62' x2='40' y2='30'/><line x1='40' y1='30' x2='240' y2='30'/><polyline points='100,30 108,18 122,42 136,18 150,42 160,30' fill='#fff'/><text x='130' y='12' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>R = 4 Ω</text><line x1='240' y1='30' x2='240' y2='62'/><text x='245' y='80' font-size='12' fill='#1f4e79' stroke='none'>L → short</text><line x1='240' y1='98' x2='240' y2='130'/><line x1='240' y1='130' x2='40' y2='130'/><line x1='40' y1='130' x2='40' y2='98'/></g></svg>By Ohm's law on the simplified loop: $i(\\infty) = V_S / R = 20/4 = 5$ A.",
            "<b>Step 3 — Time constant.</b> $\\tau = L/R = 2 / 4 = 0.5$ s.",
            "<b>Step 4 — Assemble the response.</b> Plugging $i(0^{+}) = 0$ and $i(\\infty) = 5$ into the general step formula: $i(t) = 5 + (0 - 5)e^{-t/0.5} = 5(1 - e^{-2t})$ A.",
            "<b>Step 5 — Evaluate at $t = 0.5$ s.</b> $t/\\tau = 0.5/0.5 = 1$, so $i(0.5) = 5(1 - e^{-1}) = 5(1 - 0.3679) = 5 \\times 0.6321 \\approx 3.16$ A."
          ],
          a: "$i(0.5) \\approx 3.16$ A — equal to 63.2% of the final 5 A value, which is the textbook signature of evaluating an RL or RC transient at exactly one time constant.",
          v: "Sanity checks: (1) Units — $V/R$ gives amps ✓; $L/R = H/\\Omega = s$ ✓. (2) Boundary values — $i(0) = 0$ ✓, $i(\\infty) = 5$ ✓. (3) Initial slope — $di/dt|_{0^+} = V_S/L = 20/2 = 10$ A/s, which extrapolates linearly to reach 5 A in $\\tau = 0.5$ s ✓. (4) Power balance at steady state: $P_R = i^{2}R = 25 \\times 4 = 100$ W = $V_S \\cdot i = 20 \\times 5 = 100$ W ✓."
        })
      }
    ],

    // ====================== Ch 9: Electronics ======================
    9: [
      { q: "Sallen-Key low-pass filter with $R_1 = R_2 = 10\\,$kΩ, $C_1 = C_2 = 10$ nF. Cutoff frequency:",
        choices: ["$\\approx 1.59$ kHz", "$\\approx 159$ Hz", "$\\approx 100$ Hz", "$\\approx 10$ kHz"],
        correct: 0,
        ref: "Handbook §7 (Active filters — Sallen-Key)",
        solution: S({
          c: "The Sallen-Key is the standard unity-gain active 2nd-order filter. With equal resistors and equal capacitors the cutoff (natural) frequency reduces to the familiar $f_c = 1/(2\\pi RC)$.",
          s: [
            "<b>Step 1 — Identify the design case.</b> $R_1 = R_2 = R = 10$ kΩ and $C_1 = C_2 = C = 10$ nF. General form $f_c = 1/(2\\pi\\sqrt{R_1R_2C_1C_2})$ collapses to $1/(2\\pi RC)$ when both pairs are equal.",
            "<b>Step 2 — Compute the RC product.</b> $RC = (10^{4}\\,\\Omega)(10\\times10^{-9}\\,\\text{F}) = 10^{-4}$ s.",
            "<b>Step 3 — Evaluate.</b> $f_c = \\dfrac{1}{2\\pi \\times 10^{-4}} = 1591\\,\\text{Hz} \\approx 1.59$ kHz.",
            "<b>Step 4 — Distractor audit.</b> 159 Hz is a decade slip (using $RC = 10^{-3}$); 10 kHz quotes $\\omega_c$-style numbers or drops the $2\\pi$; 100 Hz has no consistent derivation."
          ],
          a: "$f_c \\approx 1.59$ kHz",
          v: "Units: $\\Omega\\cdot$F $=$ s, so $1/(2\\pi RC)$ is Hz ✓. Damping note: equal-R/equal-C at unity gain yields $Q = 0.5$ (well-damped, slightly droopy knee); a Butterworth response ($Q = 0.707$) needs either $C_1 = 2C_2$ or amplifier gain $K \\approx 1.586$. Cutoff moves only with the $RC$ product; Q moves with the ratios."

        })
      },
      { q: "Differential amplifier with $R_C = 5$ kΩ, tail current $I_{EE} = 1$ mA. Differential gain $A_d$ (approx, at room temp):",
        choices: ["$\\approx 96$", "$\\approx 50$", "$\\approx 192$", "$\\approx 1000$"],
        correct: 0,
        ref: "Handbook §7 (Differential pair)",
        solution: S({
          c: "BJT differential pair: each transistor idles at half the tail current, transconductance $g_m = I_C/V_T$, and the differential gain is $A_d = g_m R_C$ (single-ended input, differential output) or $g_m R_C/2$ taking output from one collector.",
          s: [
            "<b>Step 1 — Bias point.</b> The tail current splits evenly at balance: $I_C = I_{EE}/2 = 0.5$ mA per device.",
            "<b>Step 2 — Transconductance.</b> $g_m = I_C/V_T = 0.5\\,\\text{mA} / 26\\,\\text{mV} = 19.2$ mA/V at room temperature.",
            "<b>Step 3 — Apply the gain convention.</b> Differential output across both collectors: $A_d = g_m R_C = (19.2\\,\\text{mA/V})(5\\,\\text{k}\\Omega) = 96$. Single-ended output from one collector halves it: $A_d = g_m R_C/2 = 48$.",
            "<b>Step 4 — Match the choices.</b> 96 is offered (and 48 is its half-circuit sibling); 192 doubles the full answer, 1000 is an op-amp-level fantasy for one stage."
          ],
          a: "$A_d \\approx 96$ (differential output) — or 48 single-ended; the convention determines the factor of 2.",
          v: "Sanity: gain $= g_m R_C = (I_C R_C)/V_T = (0.5\\,\\text{mA}\\times5\\,\\text{k}\\Omega)/26\\,\\text{mV} = 2.5\\,\\text{V}/26\\,\\text{mV} \\approx 96$ — i.e. DC drop across $R_C$ divided by the thermal voltage, a handy mental shortcut ✓. CMRR depends on the tail source: ideal current source → infinite CMRR; real mirrors give 60–100 dB."

        })
      },
      { q: "Buck converter: $V_{in} = 24$ V, duty cycle $D = 0.4$, ideal switches. Output voltage:",
        choices: ["$9.6$ V", "$14.4$ V", "$60$ V", "$24$ V"],
        correct: 0,
        ref: "Handbook §7 (DC-DC converters)",
        solution: S({
          c: "In continuous conduction, the inductor's average voltage over one switching period must be zero (volt-second balance) — that single constraint fixes the buck conversion ratio at $V_{out} = D\\,V_{in}$.",
          s: [
            "<b>Step 1 — Draw the power stage.</b><br><svg viewBox='-10 -12 360 162' width='340' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><circle cx='35' cy='75' r='16' fill='#fff'/><text x='35' y='70' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>+</text><text x='35' y='88' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>−</text><text x='35' y='120' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>24 V</text><line x1='35' y1='59' x2='35' y2='30'/><line x1='35' y1='30' x2='78' y2='30'/><line x1='78' y1='30' x2='102' y2='16'/><text x='90' y='8' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>S, D = 0.4</text><line x1='104' y1='30' x2='150' y2='30'/><circle cx='150' cy='30' r='2.5' fill='#1f4e79' stroke='none'/><polygon points='143,80 157,80 150,64' fill='#fff'/><line x1='143' y1='62' x2='157' y2='62'/><line x1='150' y1='30' x2='150' y2='62'/><line x1='150' y1='80' x2='150' y2='118'/><text x='163' y='76' font-size='11' fill='#1f4e79' stroke='none'>D</text><path d='M168,30 a8,8 0 0 1 16,0 a8,8 0 0 1 16,0 a8,8 0 0 1 16,0'/><line x1='150' y1='30' x2='168' y2='30'/><line x1='216' y1='30' x2='248' y2='30'/><text x='192' y='14' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>L</text><circle cx='248' cy='30' r='2.5' fill='#1f4e79' stroke='none'/><line x1='248' y1='30' x2='248' y2='58'/><line x1='240' y1='58' x2='256' y2='58'/><line x1='240' y1='66' x2='256' y2='66'/><line x1='248' y1='66' x2='248' y2='118'/><text x='262' y='66' font-size='11' fill='#1f4e79' stroke='none'>C</text><line x1='248' y1='30' x2='310' y2='30'/><polyline points='310,45 302,52 318,60 302,68 318,76 302,84 310,91' fill='none'/><line x1='310' y1='30' x2='310' y2='45'/><line x1='310' y1='91' x2='310' y2='118'/><text x='326' y='72' font-size='11' fill='#1f4e79' stroke='none'>R</text><line x1='35' y1='118' x2='310' y2='118'/><line x1='35' y1='91' x2='35' y2='118'/><text x='280' y='18' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>V_out</text></g></svg>Switch S chops the input; diode D freewheels the inductor current when S is off.",
            "<b>Step 2 — Volt-second balance on L.</b> S on (fraction $D$): $v_L = V_{in} - V_{out}$. S off (fraction $1-D$): $v_L = -V_{out}$. Zero average: $(V_{in} - V_{out})D = V_{out}(1 - D)$.",
            "<b>Step 3 — Solve.</b> $V_{in}D = V_{out}D + V_{out}(1-D) = V_{out} \\Rightarrow V_{out} = D\\,V_{in} = 0.4 \\times 24 = 9.6$ V."
          ],
          a: "$V_{out} = 9.6$ V",
          v: "Bounds check: a buck can only step DOWN, so $V_{out} < 24$ V eliminates 60 V (that is the BOOST answer $V_{in}/(1-D) = 40$… and 60 V corresponds to $D = 0.6$) and 24 V ($D = 1$, switch always on). Current direction: average inductor current equals load current; ripple is set by $L$, $f_{sw}$ — the ratio $V_{out}/V_{in}$ is independent of both in CCM."

        })
      }
    ],

    // ====================== Ch 10: Power Systems ======================
    10: [
      { q: "Symmetrical components: 'a' operator $a = e^{j120°}$. The value of $1 + a + a^{2}$ is:",
        choices: ["$0$", "$1$", "$3$", "$3e^{j120°}$"],
        correct: 0,
        ref: "Handbook §11 (Symmetrical components)",
        solution: S({
          c: "$1,\\ a,\\ a^{2}$ (with $a = e^{j120°}$) are the three cube roots of unity — three unit phasors spaced 120° apart. Three equal-length vectors at equal angles close into a triangle: their sum is zero.",
          s: [
            "<b>Step 1 — Write each term in rectangular form.</b> $1 = 1 + j0$; $a = e^{j120°} = -0.5 + j0.866$; $a^{2} = e^{j240°} = -0.5 - j0.866$.",
            "<b>Step 2 — Add real and imaginary parts.</b> Real: $1 - 0.5 - 0.5 = 0$. Imaginary: $0 + 0.866 - 0.866 = 0$. Sum $= 0$.",
            "<b>Step 3 — See it algebraically too.</b> $1 + a + a^{2} = \\dfrac{a^{3} - 1}{a - 1}$, and $a^{3} = e^{j360°} = 1$, so the numerator vanishes while $a \\ne 1$ keeps the expression well-defined: identically zero."
          ],
          a: "$1 + a + a^{2} = 0$",
          v: "This identity IS the reason a balanced three-phase set has zero neutral current: $I_a + I_b + I_c = I(1 + a^{2} + a) = 0$ ✓. It also underpins the symmetrical-component transform's invertibility. Distractor 3 would be the sum if all three phasors pointed the SAME way ($1+1+1$) — i.e. the zero-sequence case."

        })
      },
      { q: "Line-to-ground fault on a Y-grounded system: which sequence networks connect in series?",
        choices: ["Positive, negative, and zero sequence", "Only positive", "Only zero", "Positive and zero only"],
        correct: 0,
        ref: "Handbook §11 (Unbalanced fault analysis)",
        solution: S({
          c: "Each unbalanced fault type maps to a specific interconnection of the sequence networks. The single-line-to-ground (SLG) fault forces all three sequence currents equal — which is precisely a SERIES connection.",
          s: [
            "<b>Step 1 — Write the fault constraints (phase a faulted).</b> $V_a = Z_f I_a$ at the fault, $I_b = I_c = 0$.",
            "<b>Step 2 — Transform to sequence quantities.</b> With $I_b = I_c = 0$: $I_{a0} = I_{a1} = I_{a2} = I_a/3$ — equal currents through all three networks is the defining signature of a series circuit.",
            "<b>Step 3 — Draw the connection.</b><br><svg viewBox='-10 0 340 120' width='330' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><rect x='30' y='30' width='62' height='28'/><text x='61' y='49' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>Z₁ (+E)</text><line x1='92' y1='44' x2='122' y2='44'/><rect x='122' y='30' width='56' height='28'/><text x='150' y='49' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>Z₂</text><line x1='178' y1='44' x2='208' y2='44'/><rect x='208' y='30' width='56' height='28'/><text x='236' y='49' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>Z₀</text><line x1='264' y1='44' x2='294' y2='44'/><rect x='254' y='74' width='62' height='26'/><text x='285' y='92' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>3Z_f</text><line x1='294' y1='44' x2='294' y2='74'/><line x1='285' y1='100' x2='285' y2='110'/><line x1='30' y1='44' x2='16' y2='44'/><line x1='16' y1='44' x2='16' y2='110'/><line x1='16' y1='110' x2='285' y2='110'/><text x='150' y='20' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>I₁ = I₂ = I₀ (series loop)</text></g></svg>The loop equation gives $I_{a1} = \\dfrac{V_{pre}}{Z_1 + Z_2 + Z_0 + 3Z_f}$ and fault current $I_f = 3I_{a1}$."
          ],
          a: "Positive, negative, AND zero sequence networks — connected in series.",
          v: "Cross-check against the other fault types: line-to-line → positive and negative in PARALLEL (no zero sequence, no ground path); three-phase → positive only (balanced). Physical sense: an SLG fault needs a ground return, so $Z_0$ must participate — and a high grounding impedance (large $3Z_f$ or ungrounded neutral) correctly chokes the fault current toward zero ✓."

        })
      },
      { q: "Motor starting: induction motor with full-load current 50 A draws ~6× starting current. With a soft-starter limiting inrush to 3× FLA:",
        choices: ["$150$ A start", "$300$ A start", "$50$ A start", "$200$ A start"],
        correct: 0,
        ref: "Handbook §11 (Motor protection / starting)",
        solution: S({
          c: "An induction motor at standstill looks like a transformer with a shorted secondary — locked-rotor inrush is typically 6× full-load amps (FLA). A soft-starter ramps the applied voltage to cap that inrush at a programmed multiple.",
          s: [
            "<b>Step 1 — Baseline numbers.</b> FLA $= 50$ A; uncontrolled across-the-line start draws $\\approx 6 \\times 50 = 300$ A.",
            "<b>Step 2 — Apply the soft-start limit.</b> Programmed ceiling of 3× FLA: $I_{start} = 3 \\times 50 = 150$ A.",
            "<b>Step 3 — Eliminate distractors.</b> 300 A is the UNCONTROLLED inrush; 50 A would mean starting at full-load current only (no motor accelerates a real load that gently from rest); 200 A corresponds to 4×, not the stated 3×."
          ],
          a: "$150$ A starting current with the soft-starter.",
          v: "Engineering trade-off check: starting torque scales as $V^{2}$, and current scales as $V$ — limiting current to 50% (3×/6×) means applying ~50% voltage, leaving only ~25% of locked-rotor torque. The motor must still develop enough torque to break the load away, or the start stalls — which is why high-inertia loads sometimes need autotransformer or VFD starts instead ✓."

        })
      }
    ],

    // ====================== Ch 11: Electromagnetics ======================
    11: [
      { q: "Transmission line: $Z_0 = 50\\,\\Omega$, load $Z_L = 100\\,\\Omega$. Voltage reflection coefficient $\\Gamma$:",
        choices: ["$1/3$", "$-1/3$", "$2$", "$0$"],
        correct: 0,
        ref: "Handbook §12 (Transmission line — reflection coefficient)",
        solution: S({
          c: "At a load termination, the mismatch between line and load creates a reflected wave: $\\Gamma = \\dfrac{Z_L - Z_0}{Z_L + Z_0}$ — the complex ratio of reflected to incident voltage at the load plane.",
          s: [
            "<b>Step 1 — Picture the setup.</b><br><svg viewBox='-10 0 340 120' width='330' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.8' fill='none' stroke-linecap='round'><circle cx='32' cy='60' r='14' fill='#fff'/><text x='32' y='64' text-anchor='middle' font-size='10' fill='#1f4e79' stroke='none'>~</text><line x1='46' y1='60' x2='70' y2='60'/><rect x='70' y='46' width='160' height='28'/><text x='150' y='65' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>Z₀ = 50 Ω</text><line x1='230' y1='60' x2='254' y2='60'/><rect x='254' y='40' width='52' height='40'/><text x='280' y='64' text-anchor='middle' font-size='12' fill='#1f4e79' stroke='none'>Z_L</text><line x1='110' y1='28' x2='190' y2='28'/><polyline points='182,23 192,28 182,33'/><text x='150' y='18' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>V⁺ incident</text><line x1='190' y1='98' x2='110' y2='98'/><polyline points='118,93 108,98 118,103'/><text x='150' y='114' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>V⁻ = Γ V⁺ reflected</text></g></svg>",
            "<b>Step 2 — Plug in.</b> $\\Gamma = \\dfrac{100 - 50}{100 + 50} = \\dfrac{50}{150} = \\dfrac{1}{3}$.",
            "<b>Step 3 — Interpret the sign.</b> $\\Gamma > 0$ (real, positive): $Z_L > Z_0$, so the reflected voltage wave is in phase with the incident wave at the load — a voltage maximum sits at the load."
          ],
          a: "$\\Gamma = 1/3$",
          v: "Limit checks anchor the formula: matched load $Z_L = 50 \\Rightarrow \\Gamma = 0$ (no reflection); open circuit $\\Rightarrow \\Gamma = +1$; short $\\Rightarrow \\Gamma = -1$ — our 1/3 sits sensibly between matched and open ✓. Follow-ons: VSWR $= (1+1/3)/(1-1/3) = 2$; return loss $= -20\\log_{10}(1/3) \\approx 9.5$ dB; reflected power fraction $= |\\Gamma|^{2} = 11\\%$."

        })
      },
      { q: "VSWR for $|\\Gamma| = 0.5$:",
        choices: ["$3$", "$2$", "$1.5$", "$0.5$"],
        correct: 0,
        ref: "Handbook §12 (VSWR)",
        solution: S({
          c: "Standing waves form when incident and reflected waves superpose: maxima $\\propto (1 + |\\Gamma|)$, minima $\\propto (1 - |\\Gamma|)$. Their ratio is the VSWR: $\\text{VSWR} = \\dfrac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
          s: [
            "<b>Step 1 — Plug in $|\\Gamma| = 0.5$.</b> Numerator $1 + 0.5 = 1.5$; denominator $1 - 0.5 = 0.5$.",
            "<b>Step 2 — Evaluate.</b> $\\text{VSWR} = 1.5/0.5 = 3$.",
            "<b>Step 3 — Physical reading.</b> Along the line, voltage peaks are 3× the troughs. Reflected power is $|\\Gamma|^{2} = 25\\%$ of incident — a fairly serious mismatch."
          ],
          a: "$\\text{VSWR} = 3$",
          v: "Boundary anchors: $\\Gamma = 0 \\Rightarrow$ VSWR $= 1$ (flat line, perfect match); $|\\Gamma| \\to 1 \\Rightarrow$ VSWR $\\to \\infty$ (total reflection from open/short). Inverse check: VSWR $= 3 \\Rightarrow |\\Gamma| = (3-1)/(3+1) = 0.5$ ✓. Practical RF spec: antennas usually target VSWR $< 1.5$ ($|\\Gamma| < 0.2$, $< 4\\%$ power reflected)."

        })
      },
      { q: "Antenna gain over isotropic = 100 (20 dBi). Effective aperture at 1 GHz ($\\lambda = 0.3$ m):",
        choices: ["$\\approx 0.717$ m²", "$\\approx 7.96$ m²", "$\\approx 30$ m²", "$\\approx 0.09$ m²"],
        correct: 0,
        ref: "Handbook §12 (Antenna effective aperture)",
        solution: S({
          c: "Gain and effective aperture are two faces of the same antenna property, linked universally by $A_e = \\dfrac{G\\lambda^{2}}{4\\pi}$ — an antenna 'collects' from an area proportional to gain and to wavelength squared.",
          s: [
            "<b>Step 1 — Gather inputs.</b> $G = 100$ (i.e. $10\\log_{10}100 = 20$ dBi ✓ consistent with the statement); $\\lambda = c/f = (3\\times10^{8})/(10^{9}) = 0.3$ m.",
            "<b>Step 2 — Square the wavelength.</b> $\\lambda^{2} = 0.09$ m².",
            "<b>Step 3 — Evaluate.</b> $A_e = \\dfrac{100 \\times 0.09}{4\\pi} = \\dfrac{9}{12.566} \\approx 0.716$ m²."
          ],
          a: "$A_e \\approx 0.716$ m²",
          v: "Distractor audit: 7.96 m² forgets the gain is 100 but uses $G\\lambda^{2}/(4\\pi)$ with $\\lambda = 1$ ($f$ misread); 0.09 m² is just $\\lambda^{2}$ (dropped $G/4\\pi$); 30 m² has no consistent origin. Frequency intuition: at fixed gain, aperture shrinks as $f^{2}$ — which is why millimeter-wave links need very high-gain (dish/array) antennas to close a budget. Friis check: received power $P_r = S \\cdot A_e$ where $S$ is incident flux ✓."

        })
      },
      { q: "Wave impedance in lossless dielectric with $\\varepsilon_r = 4$, $\\mu_r = 1$:",
        choices: ["$\\approx 188.5\\,\\Omega$", "$\\approx 377\\,\\Omega$", "$\\approx 50\\,\\Omega$", "$\\approx 1508\\,\\Omega$"],
        correct: 0,
        ref: "Handbook §12 (Wave impedance in media)",
        solution: S({
          c: "Wave (intrinsic) impedance of a medium: $\\eta = \\sqrt{\\mu/\\varepsilon} = \\eta_0\\sqrt{\\mu_r/\\varepsilon_r}$, with free-space $\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} \\approx 377\\,\\Omega$.",
          s: [
            "<b>Step 1 — Apply the scaling law.</b> $\\eta = 377\\sqrt{\\mu_r/\\varepsilon_r} = 377\\sqrt{1/4}$.",
            "<b>Step 2 — Evaluate.</b> $\\eta = 377 \\times \\tfrac{1}{2} = 188.5\\,\\Omega$.",
            "<b>Step 3 — Companion effects of $\\varepsilon_r = 4$.</b> Phase velocity halves: $v = c/\\sqrt{\\varepsilon_r\\mu_r} = c/2$; wavelength halves too ($\\lambda = \\lambda_0/2$). Dielectrics slow the wave AND lower the field-ratio $|E|/|H|$."
          ],
          a: "$\\eta \\approx 188.5\\,\\Omega$",
          v: "Distractor audit: 377 Ω ignores the dielectric; 1508 Ω multiplies instead of divides ($377\\times4$); 50 Ω confuses wave impedance of a MEDIUM with the characteristic impedance of a coax line (a geometry-dependent circuit quantity). Sanity: higher $\\varepsilon_r$ stores more electric energy per unit field, pulling $|E|/|H|$ down — direction of change ✓."

        })
      }
    ],

    // ====================== Ch 12: Control Systems ======================
    12: [
      { q: "Discrete-time system $H(z) = z/(z - 0.9)$. The system is:",
        choices: ["Stable, pole inside unit circle", "Unstable", "Marginally stable", "Cannot determine"],
        correct: 0,
        ref: "Handbook §15 (Discrete-time stability)",
        solution: S({
          c: "A discrete-time LTI system is BIBO stable if and only if every pole lies strictly INSIDE the unit circle $|z| = 1$ — the DT analog of 'all poles in the left half s-plane'.",
          s: [
            "<b>Step 1 — Locate the poles.</b> $H(z) = \\dfrac{z}{z - 0.9}$ has a single pole where the denominator vanishes: $z = 0.9$ (and a zero at $z = 0$, which never affects stability).",
            "<b>Step 2 — Test against the unit circle.</b> $|0.9| = 0.9 < 1$ — the pole is inside.<br><svg viewBox='-10 -10 295 170' width='283' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.6' fill='none' stroke-linecap='round'><circle cx='130' cy='85' r='60' stroke-dasharray='5,4'/><line x1='50' y1='85' x2='215' y2='85'/><polyline points='208,81 216,85 208,89'/><text x='226' y='89' font-size='11' fill='#1f4e79' stroke='none'>Re</text><line x1='130' y1='155' x2='130' y2='18'/><polyline points='126,25 130,17 134,25'/><text x='139' y='24' font-size='11' fill='#1f4e79' stroke='none'>Im</text><line x1='179' y1='80' x2='189' y2='90'/><line x1='189' y1='80' x2='179' y2='90'/><text x='190' y='72' font-size='11' fill='#1f4e79' stroke='none'>pole z = 0.9</text><text x='66' y='40' font-size='11' fill='#1f4e79' stroke='none'>|z| = 1</text></g></svg>",
            "<b>Step 3 — Confirm in the time domain.</b> $h[n] = (0.9)^{n}u[n]$ — a geometric decay. It is absolutely summable: $\\sum_{n=0}^{\\infty}0.9^{n} = 10 < \\infty$, which is the formal BIBO condition."
          ],
          a: "Stable — single pole at $z = 0.9$, inside the unit circle.",
          v: "Boundary taxonomy: pole ON the circle ($z = 1$, an accumulator) → marginally stable, bounded input like a step already produces unbounded output; pole OUTSIDE ($|z|>1$) → $h[n]$ grows geometrically → unstable. Mapping intuition: $z = e^{sT}$ sends the left half s-plane to the unit disk — the criteria are the same condition in two coordinate systems ✓."

        })
      },
      { q: "Continuous-time PID controller tuning by Ziegler-Nichols: ultimate gain $K_u = 8$, ultimate period $T_u = 2$ s. PI controller settings:",
        choices: ["$K_p = 3.6,\\ T_i = 1.67$ s", "$K_p = 8,\\ T_i = 0.5$ s", "$K_p = 4,\\ T_i = 1$ s", "$K_p = 0.5,\\ T_i = T_u$"],
        correct: 0,
        ref: "Handbook §15 (Ziegler-Nichols)",
        solution: S({
          c: "Ziegler-Nichols ultimate-cycle tuning: push proportional-only gain up to $K_u$ where the loop oscillates steadily with period $T_u$, then back off using the ZN table. For a PI controller: $K_p = 0.45K_u$, $T_i = T_u/1.2$.",
          s: [
            "<b>Step 1 — Identify the measured ultimate parameters.</b> $K_u = 8$ (gain at sustained oscillation), $T_u = 2$ s (oscillation period).",
            "<b>Step 2 — Apply the PI row of the ZN table.</b> $K_p = 0.45 \\times 8 = 3.6$.",
            "<b>Step 3 — Integral time.</b> $T_i = T_u/1.2 = 2/1.2 \\approx 1.67$ s (integral gain $K_i = K_p/T_i \\approx 2.16$ s⁻¹).",
            "<b>Step 4 — Distractor audit.</b> $K_p = 8$ reuses $K_u$ directly (that is the sustained-oscillation gain — useless as-is); $K_p = 4, T_i = 1$ resembles a garbled PID row; $K_p = 0.5K_u$ with $T_i = T_u$ matches no standard ZN row."
          ],
          a: "$K_p = 3.6,\\ T_i \\approx 1.67$ s",
          v: "Table cross-check: P-only row gives $K_p = 0.5K_u = 4$; classic PID row gives $K_p = 0.6K_u = 4.8$, $T_i = T_u/2 = 1$ s, $T_d = T_u/8 = 0.25$ s — the PI row is deliberately gentler ($0.45K_u$) because integral action erodes phase margin ✓. Caution: ZN targets quarter-amplitude decay, which many processes find aggressively underdamped — fine for the FE, often detuned in practice."

        })
      },
      { q: "Lead compensator $C(s) = K\\dfrac{s+z}{s+p}$ with $p > z$ provides:",
        choices: ["Phase lead — improves transient response, increases bandwidth", "Phase lag — reduces steady-state error", "Pure integrator", "Pure differentiator"],
        correct: 0,
        ref: "Handbook §15 (Lead/lag compensators)",
        solution: S({
          c: "With $p > z$, the zero sits closer to the origin than the pole, so rising frequency picks up the zero's $+90°$ before the pole's $-90°$ — the network contributes net positive (lead) phase, peaking at $\\omega_m = \\sqrt{zp}$.",
          s: [
            "<b>Step 1 — Read the pole-zero geometry.</b> Zero at $-z$, pole at $-p$, $p > z$: at frequencies between them the zero's phase boost dominates. Maximum lead $\\phi_m = \\sin^{-1}\\dfrac{p - z}{p + z}$ occurs at the geometric mean $\\omega_m = \\sqrt{zp}$.",
            "<b>Step 2 — Use it at crossover.</b> Centering $\\omega_m$ near the gain-crossover frequency injects phase margin, which directly reduces overshoot and ringing; the added high-frequency gain also pushes crossover (bandwidth) up — faster rise and settling.",
            "<b>Step 3 — Eliminate the distractors.</b> Phase LAG needs $p < z$ (pole nearer origin) and serves steady-state accuracy, not transients. A pure integrator is $1/s$ and a pure differentiator is $s$ — a lead network only APPROXIMATES differentiation over its mid-band; its high-frequency gain flattens at $K\\,(p/z)$ instead of growing without bound."
          ],
          a: "Phase lead — adds phase margin near crossover, improving transient response and increasing bandwidth.",
          v: "Trade-off check: lead's high-frequency boost amplifies sensor noise — practical designs cap the ratio $p/z \\lesssim 10$ (≈55° max lead per stage; cascade two for more). Lag counterpart: boosts LOW-frequency gain to shrink steady-state error while hiding its phase penalty well below crossover. Lead = transient/PM tool; lag = accuracy tool ✓."

        })
      }
    ],

    // ====================== Ch 13: Communications ======================
    13: [
      { q: "Free-space path loss formula in dB: $L = 20\\log f + 20\\log d + K$. For $f$ in MHz, $d$ in km, $K = $:",
        choices: ["$32.4$", "$20$", "$92.4$", "$-32.4$"],
        correct: 0,
        ref: "Handbook §13 (Free-space path loss)",
        solution: S({
          c: "FSPL comes from spherical spreading plus the receive antenna's $\\lambda^{2}$ aperture: $L = 20\\log_{10}(4\\pi d/\\lambda)$. Folding the unit conversions for $f$ in MHz and $d$ in km into the constant yields $K = 32.4$ dB.",
          s: [
            "<b>Step 1 — Expand the dB form.</b> $L = 20\\log f + 20\\log d + 20\\log\\dfrac{4\\pi}{c}\\cdot(\\text{unit factors})$ — the last term is a pure constant once units are fixed.",
            "<b>Step 2 — Evaluate the constant for MHz + km.</b> $20\\log_{10}\\left(\\dfrac{4\\pi\\times10^{6}\\times10^{3}}{3\\times10^{8}}\\right) = 20\\log_{10}(41.9) \\approx 32.4$ dB.",
            "<b>Step 3 — Sanity example.</b> 2.4 GHz ($f = 2400$ MHz) at $d = 1$ km: $L = 20\\log 2400 + 20\\log 1 + 32.4 = 67.6 + 0 + 32.4 = 100$ dB — the well-known Wi-Fi-band figure."
          ],
          a: "$K = 32.4$ (with $f$ in MHz, $d$ in km)",
          v: "Unit-trap audit (the FE loves these): $f$ in GHz + $d$ in km → $K = 92.4$ (distractor C — right number, wrong units); $f$ in MHz + $d$ in miles → $K \\approx 36.6$; $-32.4$ flips the sign of a LOSS. Structure check: +6 dB for every doubling of either $f$ or $d$ ✓ — higher frequency loses more only because the receive aperture $A_e = G\\lambda^{2}/4\\pi$ shrinks, not because space absorbs anything."

        })
      },
      { q: "Hamming code (7,4): minimum distance and error correcting capability:",
        choices: ["$d_{min} = 3$, corrects 1 error", "$d_{min} = 2$, detects 1", "$d_{min} = 4$, corrects 1", "$d_{min} = 7$, corrects 3"],
        correct: 0,
        ref: "Handbook §13 (Error-correcting codes)",
        solution: S({
          c: "Code capability is set by minimum Hamming distance: detect $d_{min} - 1$ errors, correct $\\lfloor(d_{min}-1)/2\\rfloor$. The classic (7,4) Hamming code is built to have $d_{min} = 3$.",
          s: [
            "<b>Step 1 — Structure of (7,4).</b> 7 total bits = 4 data + 3 parity. The 3 parity checks are arranged so every single-bit error produces a unique non-zero syndrome (3 bits → $2^{3}-1 = 7$ patterns, exactly one per bit position).",
            "<b>Step 2 — Minimum distance.</b> The unique-syndrome construction forces every pair of codewords to differ in at least 3 positions: $d_{min} = 3$.",
            "<b>Step 3 — Capability.</b> Correct $\\lfloor(3-1)/2\\rfloor = 1$ error (syndrome points at the flipped bit); alternatively detect up to 2 errors if used in detect-only mode. Code rate $= 4/7 \\approx 0.57$."
          ],
          a: "$d_{min} = 3$ — single-error correcting.",
          v: "Perfect-code check: spheres of radius 1 around each codeword contain $1 + 7 = 8$ words; $2^{4}$ codewords $\\times 8 = 128 = 2^{7}$ — the spheres tile the space exactly, which is why (7,4) is called a PERFECT code ✓. Extension: adding one overall parity bit gives (8,4) with $d_{min} = 4$ — SECDED (corrects 1, detects 2 simultaneously), the standard for ECC memory."

        })
      }
    ],

    // ====================== Ch 14: Computer Networks ======================
    14: [
      { q: "NAT (Network Address Translation) operates at:",
        choices: ["Layer 3 + 4 (uses IP and port info)", "Layer 2 only", "Layer 7", "Layer 1"],
        correct: 0,
        ref: "Handbook §14 (Network address translation)",
        solution: S({
          c: "NAT rewrites packet headers at the network layer (IP addresses, L3), and its ubiquitous PAT variant also rewrites transport-layer ports (TCP/UDP, L4) so thousands of private hosts can share one public address.",
          s: [
            "<b>Step 1 — What gets rewritten.</b> Outbound: source IP (private → public) at L3. PAT additionally maps source PORT at L4, keying a connection table entry internal IP:port ↔ external port.",
            "<b>Step 2 — Why L4 is needed.</b> With only one public IP, returning packets must be demultiplexed back to the right internal host — the translated port number is the only available discriminator, so the device MUST operate at layer 4 as well.",
            "<b>Step 3 — Eliminate distractors.</b> L2-only devices (switches) never touch IP headers. L7 would mean parsing application payloads (that is a proxy/ALG, not core NAT). L1 is cabling and signaling."
          ],
          a: "Layers 3 + 4 — IP addresses plus transport ports.",
          v: "Consequence check: NAT breaks IP's end-to-end model — inbound connections need port-forwarding rules, and protocols that embed IPs in payloads (FTP active mode, SIP) need helpers ✓. Stateful nature: the translation table is connection state; entries expire on timeout. The address-scarcity pressure NAT relieves is also why IPv6 reduces (but does not eliminate) the need for it."

        })
      },
      { q: "TCP three-way handshake sequence:",
        choices: ["SYN → SYN-ACK → ACK", "SYN → ACK → SYN", "FIN → ACK → RST", "PUSH → ACK → PUSH"],
        correct: 0,
        ref: "Handbook §14 (TCP)",
        solution: S({
          c: "TCP connection setup must synchronize BOTH directions' initial sequence numbers (ISNs). Each direction needs a SYN and an ACK; piggybacking the server's two into one segment yields exactly three messages.",
          s: [
            "<b>Step 1 — Client → Server: SYN.</b> Client proposes its ISN ($\\text{seq} = x$). Half the synchronization is done.",
            "<b>Step 2 — Server → Client: SYN-ACK.</b> One segment does double duty: ACKs the client's ISN ($\\text{ack} = x+1$) and proposes the server's own ISN ($\\text{seq} = y$).",
            "<b>Step 3 — Client → Server: ACK.</b> Client confirms the server's ISN ($\\text{ack} = y+1$). Both sides now agree on both sequence spaces — connection ESTABLISHED.",
            "<b>Step 4 — Eliminate distractors.</b> SYN→ACK→SYN breaks the piggyback pattern; FIN/RST are teardown/abort flags; PUSH affects delivery timing of data, not connection setup."
          ],
          a: "SYN → SYN-ACK → ACK",
          v: "Symmetry check: teardown needs FOUR messages (FIN, ACK, FIN, ACK) because each direction closes independently and there is rarely anything to piggyback ✓. Security note: a half-open flood (SYN flood) exploits step 2's state allocation — mitigated by SYN cookies, which encode the connection state in the ISN itself."

        })
      }
    ],

    // ====================== Ch 15: Digital Systems ======================
    15: [
      { q: "FSM design — Moore vs Mealy: which has output that depends only on current state?",
        choices: ["Moore", "Mealy", "Both", "Neither"],
        correct: 0,
        ref: "Handbook §16 (FSM models)",
        solution: S({
          c: "The two canonical FSM models differ in one wire: Moore outputs are a function of the current STATE only; Mealy outputs are a function of state AND current input.",
          s: [
            "<b>Step 1 — Definitions.</b> Moore: $\\text{output} = f(\\text{state})$ — outputs are attached to states. Mealy: $\\text{output} = f(\\text{state}, \\text{input})$ — outputs are attached to transitions.",
            "<b>Step 2 — Timing consequence.</b> Moore outputs change only at clock edges (when the state register updates) — glitch-free and synchronous. Mealy outputs can change asynchronously mid-cycle whenever an input wiggles, which can propagate combinational glitches downstream.",
            "<b>Step 3 — Answer the question asked.</b> 'Output depends only on current state' is the literal definition of MOORE."
          ],
          a: "Moore machine.",
          v: "Trade-off check: a Mealy machine reacts one cycle earlier (output responds to the input within the same cycle) and often needs FEWER states for the same job — e.g. a sequence detector typically saves one state in Mealy form. Design practice: Moore for clean synchronous interfaces; register Mealy outputs if you need both speed and glitch immunity ✓."

        })
      },
      { q: "Shift register: 4-bit register with input $D_{in} = 1$, clocked 4 times. Final state (initial 0000):",
        choices: ["$1111$", "$0001$", "$0000$", "$1000$"],
        correct: 0,
        ref: "Handbook §16 (Shift registers)",
        solution: S({
          c: "A serial-in shift register moves every stored bit one stage per clock edge while the serial input fills the vacated entry stage. With $D_{in}$ held at 1, ones march in one per clock.",
          s: [
            "<b>Step 1 — Structure.</b><br><svg viewBox='-10 0 360 120' width='340' xmlns='http://www.w3.org/2000/svg' style='display:block;margin:.5em auto;max-width:100%;background:#fff;border-radius:6px'><g stroke='#1f4e79' stroke-width='1.6' fill='none' stroke-linecap='round'><text x='22' y='40' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>D_in=1</text><line x1='4' y1='50' x2='42' y2='50'/><polyline points='35,46 43,50 35,54'/><rect x='44' y='28' width='56' height='48'/><text x='72' y='56' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>FF₃</text><line x1='100' y1='50' x2='118' y2='50'/><polyline points='111,46 119,50 111,54'/><rect x='120' y='28' width='56' height='48'/><text x='148' y='56' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>FF₂</text><line x1='176' y1='50' x2='194' y2='50'/><polyline points='187,46 195,50 187,54'/><rect x='196' y='28' width='56' height='48'/><text x='224' y='56' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>FF₁</text><line x1='252' y1='50' x2='270' y2='50'/><polyline points='263,46 271,50 263,54'/><rect x='272' y='28' width='56' height='48'/><text x='300' y='56' text-anchor='middle' font-size='11' fill='#1f4e79' stroke='none'>FF₀</text><line x1='20' y1='100' x2='300' y2='100'/><line x1='72' y1='100' x2='72' y2='76'/><line x1='148' y1='100' x2='148' y2='76'/><line x1='224' y1='100' x2='224' y2='76'/><line x1='300' y1='100' x2='300' y2='76'/><text x='10' y='112' font-size='11' fill='#1f4e79' stroke='none'>CLK</text></g></svg>Four D flip-flops in a chain; each clock edge copies its neighbor's value (and FF₃ copies $D_{in}$).",
            "<b>Step 2 — Clock-by-clock table.</b> Start 0000 → after clk 1: <span style='font-family:monospace'>1000</span> → clk 2: <span style='font-family:monospace'>1100</span> → clk 3: <span style='font-family:monospace'>1110</span> → clk 4: <span style='font-family:monospace'>1111</span>.",
            "<b>Step 3 — Generalize.</b> After $k$ clocks with a constant input, the register holds $k$ copies of that input; after 4 clocks the 4-bit register is fully loaded: 1111. (The same final state results regardless of shift direction — only the intermediate patterns differ.)"
          ],
          a: "$1111$ — all four ones after four clocks.",
          v: "Distractor audit: 0001 / 1000 are the state after ONE clock (direction-dependent); 0000 ignores the input entirely. Application check: this is exactly how a SIPO (serial-in, parallel-out) register converts a UART bit stream into a parallel byte — 8 clocks to load 8 bits, then read all outputs at once ✓."

        })
      },
      { q: "FFT bit-reversal: 8-point FFT input index 3 (binary 011) corresponds to output bin:",
        choices: ["$6$ (binary 110)", "$3$", "$5$", "$7$"],
        correct: 0,
        ref: "Handbook §10 (FFT bit-reversal)",
        solution: S({
          c: "The radix-2 decimation-in-time FFT repeatedly splits inputs into even/odd halves. Unrolling that recursion reorders the inputs into BIT-REVERSED index order — reverse the binary index to find where each sample goes.",
          s: [
            "<b>Step 1 — Write the index in binary.</b> 8-point FFT → 3-bit indices. Index $3 = 011_2$.",
            "<b>Step 2 — Reverse the bit string.</b> $011 \\to 110$ (MSB and LSB swap; middle bit stays).",
            "<b>Step 3 — Convert back.</b> $110_2 = 6$. Input sample $x[3]$ pairs with output position 6 in the bit-reversed ordering.",
            "<b>Step 4 — Why this happens.</b> Each even/odd split sorts on the LSB, then the next LSB, etc. — reading the sort keys in reverse order is precisely bit reversal."
          ],
          a: "Bin 6 ($110_2$).",
          v: "Full permutation check for $N=8$: 0↔0, 1↔4, 2↔2, 3↔6, 5↔5, 7↔7 — note 3 and 6 swap as a pair, consistent with our answer (bit reversal is its own inverse) ✓. Practical note: whether the INPUT or the OUTPUT ends up bit-reversed depends on DIT vs DIF formulation; either way one reordering pass of $O(N)$ restores natural order."

        })
      }
    ],

    // ====================== Ch 16: Computer Systems ======================
    16: [
      { q: "Pipeline hazard types in a 5-stage RISC pipeline. Data hazard occurs when:",
        choices: ["A later instruction depends on the result of an earlier instruction still in pipeline.", "Two instructions compete for the same execution unit.", "Branch outcome not yet known.", "Memory bus is busy."],
        correct: 0,
        ref: "Handbook §17 (Pipeline hazards)",
        solution: S({
          c: "A data hazard (RAW — read-after-write) arises when an instruction needs a register value that a still-in-flight earlier instruction has computed but not yet written back.",
          s: [
            "<b>Step 1 — The canonical example.</b> <span style='font-family:monospace'>add r1, r2, r3</span> followed immediately by <span style='font-family:monospace'>sub r4, r1, r5</span>: the <span style='font-family:monospace'>sub</span> reaches its register-read stage while <span style='font-family:monospace'>add</span> is still 2 stages from write-back — it would read a STALE r1.",
            "<b>Step 2 — Mitigations.</b> Forwarding (bypass paths route the EX-stage result straight into the next instruction's EX input — removes most bubbles); stalling (insert a bubble when forwarding can't help, e.g. load-use needs 1 stall); out-of-order execution with register renaming (removes false dependencies entirely).",
            "<b>Step 3 — Separate the other hazard classes.</b> Two instructions competing for one execution unit = STRUCTURAL hazard. Unresolved branch direction = CONTROL hazard. A busy memory bus is a structural/memory-system issue, not a data dependency."
          ],
          a: "A later instruction depends on the result of an earlier instruction still in the pipeline (RAW dependency).",
          v: "Taxonomy completeness check: RAW is the only TRUE dependency; WAR and WAW are name conflicts that exist only with out-of-order or register reuse and vanish under renaming ✓. Quantitative sense: with full forwarding, a classic 5-stage RISC needs a stall only for load-use (1 cycle) — compilers schedule an independent instruction into that slot when possible."

        })
      },
      { q: "Cache coherence protocol MESI: state 'I' means:",
        choices: ["Invalid — line not present or stale.", "Modified.", "Exclusive.", "Shared."],
        correct: 0,
        ref: "Handbook §17 (Cache coherence)",
        solution: S({
          c: "MESI names the four states a cache line can hold in an invalidation-based coherence protocol: Modified, Exclusive, Shared, Invalid.",
          s: [
            "<b>Step 1 — Decode the states.</b> M: dirty, only copy, memory stale. E: clean, only copy. S: clean, other caches may also hold it. I: line holds NO usable data — either never loaded or invalidated by another core's write.",
            "<b>Step 2 — Focus on 'I'.</b> Invalid means any access misses: the data must be (re)fetched from memory or another cache. A line enters I when a different core writes to that address (its invalidation broadcast kills all other copies).",
            "<b>Step 3 — Transitions out of I.</b> Read miss → S (others have it) or E (no one else does); write miss → issue read-for-ownership, land in M."
          ],
          a: "Invalid — the cached line is absent or stale and cannot be used.",
          v: "Protocol-family check: MOESI (AMD/ARM A-class) adds Owned — a dirty line that may be shared, cutting write-back traffic; MESIF (Intel) adds Forward — designates which sharer answers snoop requests. The E state's whole purpose: a core that later writes an E line can go to M silently, with NO bus transaction — the common private-data fast path ✓."

        })
      }
    ],

    // ====================== Ch 17: Software Engineering ======================
    17: [
      { q: "Binary search tree (BST) in-order traversal yields:",
        choices: ["Sorted ascending order", "Random order", "Reverse insertion order", "Pre-order from root"],
        correct: 0,
        ref: "Handbook §18 (Tree traversals)",
        solution: S({
          c: "The BST invariant (left subtree < node < right subtree) composed with in-order traversal (Left, Node, Right) emits keys in sorted ascending order.",
          s: [
            "<b>Step 1 — The traversal rule.</b> In-order: recursively visit the left subtree, emit the node, recursively visit the right subtree.",
            "<b>Step 2 — Induction argument.</b> Assume in-order sorts any smaller BST. At a node: the left subtree's output is sorted and all $<$ key; the key comes next; the right subtree's output is sorted and all $>$ key. Concatenation is therefore fully sorted — and the base case (empty tree) is trivially sorted.",
            "<b>Step 3 — Eliminate distractors.</b> Pre-order (Node first) emits the ROOT first — useful for copying trees, not sorting. Output order is determined by the invariant, not by insertion history or randomness."
          ],
          a: "Sorted ascending order.",
          v: "Quick concrete check: insert 5, 3, 8, 1 → in-order yields 1, 3, 5, 8 ✓. Complexity context: 'tree sort' = $n$ inserts ($O(n\\log n)$ average into a balanced tree) + one $O(n)$ in-order pass. Caveat: inserting already-sorted data into an UNBALANCED BST degenerates it into a linked list ($O(n^{2})$ total) — the reason AVL/red-black trees exist."

        })
      },
      { q: "Dynamic programming: longest common subsequence (LCS) of strings length $m$ and $n$ has time complexity:",
        choices: ["$O(mn)$", "$O(m+n)$", "$O(2^{\\min(m,n)})$", "$O(\\log mn)$"],
        correct: 0,
        ref: "Handbook §18 (Dynamic programming)",
        solution: S({
          c: "LCS is the textbook 2-D dynamic program: a table $L[i][j]$ = LCS length of the first $i$ chars of $s_1$ and first $j$ chars of $s_2$, filled once per cell in constant time.",
          s: [
            "<b>Step 1 — Recurrence.</b> If $s_1[i] = s_2[j]$: $L[i][j] = L[i-1][j-1] + 1$ (extend the diagonal match). Otherwise: $L[i][j] = \\max(L[i-1][j],\\ L[i][j-1])$ (drop a character from one string).",
            "<b>Step 2 — Count the work.</b> The table has $m \\times n$ cells; each cell reads at most three previously-computed neighbors — $O(1)$ per cell. Total: $O(mn)$ time.",
            "<b>Step 3 — Eliminate distractors.</b> $O(m+n)$ is too good — every character pair interaction matters; $O(2^{\\min(m,n)})$ is the NAIVE recursion without memoization (exactly what DP eliminates); $O(\\log mn)$ has no mechanism."
          ],
          a: "$O(mn)$ time.",
          v: "Space check: the plain table is $O(mn)$, but each row depends only on the previous row → $O(\\min(m,n))$ space if only the LENGTH is needed (recovering the actual subsequence needs the full table or Hirschberg's divide-and-conquer trick, still $O(mn)$ time) ✓. Relatives: edit distance fills the same table shape with a different recurrence — same $O(mn)$ bound."

        })
      },
      { q: "Graph BFS time complexity in adjacency list representation, $V$ vertices, $E$ edges:",
        choices: ["$O(V + E)$", "$O(V^{2})$", "$O(E\\log V)$", "$O(VE)$"],
        correct: 0,
        ref: "Handbook §18 (Graph BFS/DFS)",
        solution: S({
          c: "BFS with an adjacency LIST touches every vertex once (queue in/out) and scans every edge a constant number of times — total $O(V + E)$.",
          s: [
            "<b>Step 1 — Vertex work.</b> Each vertex is enqueued and dequeued at most once (the visited mark guarantees it): $O(V)$.",
            "<b>Step 2 — Edge work.</b> When a vertex is dequeued, BFS scans its adjacency list. Summed over all vertices, the lists contain each edge twice (undirected) or once (directed): $O(E)$.",
            "<b>Step 3 — Combine and contrast.</b> $O(V) + O(E) = O(V+E)$. With an adjacency MATRIX, scanning a vertex's neighbors costs $O(V)$ regardless of degree → $O(V^{2})$ total — markedly worse for sparse graphs where $E \\ll V^{2}$."
          ],
          a: "$O(V + E)$ — linear in the size of the graph representation.",
          v: "Distractor audit: $O(E\\log V)$ is Dijkstra with a binary heap (BFS needs no priority queue — the FIFO queue exploits unit edge weights); $O(VE)$ is Bellman-Ford (handles negative weights). Optimality note: BFS already reads the whole input once, so $O(V+E)$ is asymptotically optimal — and it yields shortest paths in EDGE COUNT as a free by-product ✓."

        })
      }
    ]
  };

  // Append to QUESTION_BANK in place
  for (const chapter of QUESTION_BANK.chapters) {
    const extras = EXTRAS[chapter.id];
    if (extras && Array.isArray(extras)) {
      chapter.questions = chapter.questions.concat(extras);
    }
  }
})();
