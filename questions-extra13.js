// FE Electrical Question Bank — Extension Pack 13 (Round 13)
// ============================================================
// Coverage-gap set: original problems on FE topics that were
// under-represented in Rounds 1–12 — transmission lines (VSWR,
// Smith chart), symmetrical components, state-machine design,
// link budget, FFT bit-reversal, active filters (Sallen-Key),
// power electronics (buck/boost), discrete-time control, trees
// and graphs, etc. All problem statements are ORIGINAL.
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
          c: "$\\oint_C\\vec F\\cdot d\\vec r = \\iint_S(\\nabla\\times\\vec F)\\cdot d\\vec S$.",
          s: [
            "Surface integrand is the curl flux through $S$.",
            "Divergence theorem (different identity) uses $\\nabla\\cdot\\vec F$ over a closed volume."
          ],
          a: "$(\\nabla\\times\\vec F)\\cdot d\\vec S$",
          v: "Special case: if $\\vec F$ is conservative ($\\nabla\\times\\vec F = 0$), both sides vanish."
        })
      },
      { q: "An eigenvector of $A = \\begin{bmatrix}2&1\\\\0&3\\end{bmatrix}$ corresponding to $\\lambda = 3$ is:",
        choices: ["$\\begin{bmatrix}1\\\\1\\end{bmatrix}$", "$\\begin{bmatrix}1\\\\0\\end{bmatrix}$", "$\\begin{bmatrix}0\\\\1\\end{bmatrix}$", "$\\begin{bmatrix}1\\\\-1\\end{bmatrix}$"],
        correct: 0,
        ref: "Handbook §1.4 (Eigenvectors)",
        solution: S({
          c: "Solve $(A - \\lambda I)\\vec v = 0$.",
          s: [
            "$A - 3I = \\begin{bmatrix}-1&1\\\\0&0\\end{bmatrix}$.",
            "Top row: $-v_1 + v_2 = 0 \\Rightarrow v_2 = v_1$.",
            "Any non-zero multiple of $(1,1)$ works."
          ],
          a: "$\\vec v = (1, 1)^{T}$",
          v: "$A\\vec v = (2+1, 0+3)^{T} = (3, 3)^{T} = 3(1,1)^{T} = 3\\vec v$ ✓."
        })
      },
      { q: "Euler's method on $y' = y$, $y(0) = 1$, step $h = 0.1$. Estimate of $y(0.3)$:",
        choices: ["$\\approx 1.331$", "$\\approx 1.349$ (exact)", "$\\approx 1.300$", "$\\approx 1.500$"],
        correct: 0,
        ref: "Handbook §1.8 (Euler's method)",
        solution: S({
          c: "$y_{n+1} = y_n + h f(t_n, y_n)$. For $y' = y$: $y_{n+1} = y_n(1+h)$.",
          s: [
            "$y_1 = 1(1.1) = 1.1$.",
            "$y_2 = 1.1(1.1) = 1.21$.",
            "$y_3 = 1.21(1.1) = 1.331$."
          ],
          a: "$y(0.3) \\approx 1.331$",
          v: "Exact $y(0.3) = e^{0.3} \\approx 1.3499$ — Euler underestimates by ~1.4%. Smaller step or RK4 reduces error."
        })
      },
      { q: "Curl of $\\vec F = \\langle y z, x z, x y\\rangle$:",
        choices: ["$\\vec 0$", "$\\langle x, y, z\\rangle$", "$\\langle 1, 1, 1\\rangle$", "$\\langle z, x, y\\rangle$"],
        correct: 0,
        ref: "Handbook §1.5 (Curl)",
        solution: S({
          c: "$\\nabla\\times\\vec F = (\\partial_y F_z - \\partial_z F_y,\\ \\partial_z F_x - \\partial_x F_z,\\ \\partial_x F_y - \\partial_y F_x)$.",
          s: [
            "$\\partial_y(xy) - \\partial_z(xz) = x - x = 0$.",
            "$\\partial_z(yz) - \\partial_x(xy) = y - y = 0$.",
            "$\\partial_x(xz) - \\partial_y(yz) = z - z = 0$."
          ],
          a: "$\\vec 0$ (irrotational)",
          v: "Field is conservative; $\\vec F = \\nabla(xyz)$. Line integrals are path-independent."
        })
      },
      { q: "Recursive sequence $a_n = a_{n-1} + a_{n-2}$, $a_0 = 0$, $a_1 = 1$ (Fibonacci). Closed-form ratio $a_{n+1}/a_n$ approaches:",
        choices: ["Golden ratio $\\varphi = (1+\\sqrt 5)/2 \\approx 1.618$", "$2$", "$\\sqrt 2$", "$1$"],
        correct: 0,
        ref: "Handbook §1.3 (Recurrences, characteristic equation)",
        solution: S({
          c: "Characteristic equation $r^{2} = r + 1$ ⇒ $r = (1 \\pm\\sqrt 5)/2$. Larger root dominates: $\\varphi = (1+\\sqrt 5)/2$.",
          s: [
            "$a_n = A\\varphi^{n} + B\\psi^{n}$ where $\\psi = (1-\\sqrt 5)/2 \\approx -0.618$.",
            "$|\\psi| < 1$ → $\\psi^{n}$ vanishes; ratio $\\to \\varphi$."
          ],
          a: "$\\varphi \\approx 1.618$",
          v: "Binet's formula: $a_n = (\\varphi^{n} - \\psi^{n})/\\sqrt 5$ — closed form for nth Fibonacci."
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
          c: "Solve $\\pi_1 = 0.8\\pi_1 + 0.3\\pi_2$ with constraint $\\pi_1 + \\pi_2 = 1$.",
          s: [
            "From the first equation: $0.2\\pi_1 = 0.3\\pi_2 \\Rightarrow \\pi_2 = (2/3)\\pi_1$.",
            "Substitute: $\\pi_1 + (2/3)\\pi_1 = 1 \\Rightarrow (5/3)\\pi_1 = 1 \\Rightarrow \\pi_1 = 0.6,\\ \\pi_2 = 0.4$."
          ],
          a: "$\\pi = (0.6, 0.4)$",
          v: "Verify: $\\pi P = (0.6\\cdot 0.8 + 0.4\\cdot 0.3,\\ 0.6\\cdot 0.2 + 0.4\\cdot 0.7) = (0.6, 0.4)$ ✓."
        })
      },
      { q: "$X$ and $Y$ are independent normal: $X\\sim\\mathcal N(0, 1),\\ Y\\sim\\mathcal N(0, 4)$. Distribution of $X + Y$:",
        choices: ["$\\mathcal N(0, 5)$", "$\\mathcal N(0, 2)$", "$\\mathcal N(0, \\sqrt 5)$", "Not normal"],
        correct: 0,
        ref: "Handbook §2.2 (Sum of independent normals)",
        solution: S({
          c: "Sum of independent normals is normal; means add, variances add.",
          s: [
            "$\\text{Var}(X+Y) = 1 + 4 = 5$. Mean = 0.",
            "$X + Y \\sim \\mathcal N(0, 5)$ (note variance, not SD)."
          ],
          a: "$\\mathcal N(0, 5)$ — mean 0, variance 5 (SD $= \\sqrt 5$).",
          v: "Common pitfall: standard deviations do NOT add; only variances add."
        })
      },
      { q: "Conditional expectation: $E[Y\\,|\\,X = x]$ for joint density that is uniform on the unit square. Then $E[Y\\,|\\,X = 0.3]$:",
        choices: ["$0.5$", "$0.3$", "$0$", "$1$"],
        correct: 0,
        ref: "Handbook §2.2 (Conditional expectation)",
        solution: S({
          c: "Uniform on $[0,1]^{2}$: $X$ and $Y$ are independent uniform $[0,1]$, so $E[Y|X] = E[Y] = 0.5$.",
          s: [
            "Independence ⇒ conditioning on $X$ doesn't change distribution of $Y$.",
            "$Y\\sim U(0,1)$ has mean $1/2$."
          ],
          a: "$E[Y|X = 0.3] = 0.5$",
          v: "If joint were uniform on the triangle $\\{y \\le x\\}$: $Y|X=0.3 \\sim U(0, 0.3)$, so $E[Y|X=0.3] = 0.15$ — very different."
        })
      },
      { q: "Chi-squared goodness-of-fit test for fairness of a die: rolled 60 times, expected 10 per face. Test statistic $\\chi^{2} = \\sum (O_i - E_i)^{2}/E_i$ is compared to:",
        choices: ["$\\chi^{2}_{0.05, 5}$ (5 degrees of freedom)", "$\\chi^{2}_{0.05, 6}$", "$z_{0.05}$", "$t_{0.05, 59}$"],
        correct: 0,
        ref: "Handbook §2.4 (Goodness-of-fit)",
        solution: S({
          c: "DF = (categories − 1) − (parameters estimated). For a fully-specified hypothesis with $k = 6$ categories: df = $k - 1 = 5$.",
          s: [
            "No parameters estimated from data ⇒ df = 5.",
            "Critical value: $\\chi^{2}_{0.05, 5} = 11.07$. Reject $H_0$ if test statistic exceeds this."
          ],
          a: "$\\chi^{2}_{0.05, 5}$",
          v: "If we had estimated, say, a parameter $p$ from the data (e.g., binomial), df would be $k - 1 - 1 = k - 2$."
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
          c: "Breakeven: total revenue = total cost ⇒ $pQ = F + vQ$ ⇒ $Q^{*} = F/(p - v)$.",
          s: [
            "Contribution margin: $25 - 15 = \\$10$/unit.",
            "$Q^{*} = 50{,}000/10 = 5{,}000$ units."
          ],
          a: "5,000 units",
          v: "Below breakeven: loss; above: profit grows at \\$10/unit. To make \\$30k profit: 80,000/10 = 8,000 units."
        })
      },
      { q: "Sensitivity analysis: project NPV at $i = 10\\%$ is +\\$5,000. At $i = 12\\%$ it is -\\$2,000. Approximate IRR by linear interpolation:",
        choices: ["$\\approx 11.4\\%$", "$11.0\\%$", "$12\\%$", "$10.4\\%$"],
        correct: 0,
        ref: "Handbook §3 (IRR by interpolation)",
        solution: S({
          c: "Linear interpolation: $\\text{IRR} \\approx i_1 + (i_2 - i_1)\\cdot \\dfrac{NPV_1}{NPV_1 - NPV_2}$.",
          s: [
            "$\\text{IRR} \\approx 10 + 2\\cdot\\dfrac{5000}{5000 + 2000} = 10 + 2\\cdot(5/7) = 10 + 1.43 = 11.43\\%$."
          ],
          a: "$\\approx 11.4\\%$",
          v: "Linear interpolation is approximate — NPV vs $i$ is actually convex. For 2% gap it's usually accurate to 0.1%."
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
          c: "Risk aversion = concave utility ⇒ prefer lower variance for a small drop in mean (certainty equivalent).",
          s: [
            "A: $\\mu = 100,\\ \\sigma = 20$ (high spread).",
            "B: $\\mu = 90,\\ \\sigma = 5$ (low spread).",
            "Risk-averse certainty equivalent for A typically falls below $90$ (depends on utility curvature). B's CE $\\approx 90$ since $\\sigma$ is small."
          ],
          a: "Risk-averse engineer prefers B.",
          v: "Risk-seeking would pick A; risk-neutral picks A on expectation alone. Engineering decisions typically lean risk-averse for catastrophe avoidance."
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
          c: "Above $\\sim 3$ MV/m at standard conditions, air ionizes and breaks down.",
          s: [
            "Translates to 3 kV per 1 mm gap, or 30 kV per 1 cm.",
            "Lightning needs MV-class voltages to span hundreds of meters."
          ],
          a: "$\\approx 3$ MV/m",
          v: "Other dielectrics: oil ~12 MV/m, mylar ~280 MV/m, SF₆ ~9 MV/m (used in HV switchgear)."
        })
      },
      { q: "Magnetic field intensity in a long solenoid with $N$ turns over length $\\ell$, current $I$:",
        choices: ["$H = NI/\\ell$", "$H = N\\ell/I$", "$H = NI\\ell$", "$H = I/(N\\ell)$"],
        correct: 0,
        ref: "Handbook §6 (Ampere's law — solenoid)",
        solution: S({
          c: "Ampere's law applied to ideal solenoid: $H = nI = (N/\\ell)I$ inside, $\\sim 0$ outside.",
          s: [
            "$n$ = turns per meter = $N/\\ell$.",
            "Flux density $B = \\mu H = \\mu_0\\mu_r(N/\\ell)I$ inside iron core."
          ],
          a: "$H = NI/\\ell$",
          v: "Toroidal coil: $H = NI/(2\\pi r)$ along the mean magnetic path."
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
          c: "ABCD form: $\\begin{bmatrix}V_1\\\\I_1\\end{bmatrix} = \\begin{bmatrix}A & B\\\\C & D\\end{bmatrix}\\begin{bmatrix}V_2\\\\I_2\\end{bmatrix}$ with $I_2$ flowing OUT.",
          s: [
            "For series Z: $V_1 = V_2 + Z I_2$, $I_1 = I_2$.",
            "Therefore $A = 1, B = Z, C = 0, D = 1$."
          ],
          a: "$\\begin{bmatrix}1 & Z\\\\0 & 1\\end{bmatrix}$",
          v: "Shunt admittance $Y$: $\\begin{bmatrix}1 & 0\\\\Y & 1\\end{bmatrix}$. Compose cascaded two-ports by matrix multiplication."
        })
      },
      { q: "Mutual inductance: two coils with self-inductances $L_1 = 4$ mH, $L_2 = 9$ mH, coupling coefficient $k = 0.5$. Mutual inductance $M$:",
        choices: ["$3$ mH", "$6$ mH", "$13$ mH", "$0.5$ mH"],
        correct: 0,
        ref: "Handbook §5 (Coupled inductors)",
        solution: S({
          c: "$M = k\\sqrt{L_1 L_2}$, $0\\le k\\le 1$.",
          s: [
            "$\\sqrt{L_1 L_2} = \\sqrt{36} = 6$ mH.",
            "$M = 0.5 \\times 6 = 3$ mH."
          ],
          a: "$M = 3$ mH",
          v: "$k = 1$ (perfect coupling) only in ideal transformers; typical k is 0.95-0.99 for tightly coupled magnetics."
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
          c: "Equal-R, equal-C Sallen-Key: $f_c = 1/(2\\pi RC)$.",
          s: [
            "$RC = 10{,}000 \\times 10^{-8} = 10^{-4}$ s.",
            "$f_c = 1/(2\\pi\\cdot 10^{-4}) = 1591$ Hz $\\approx 1.59$ kHz."
          ],
          a: "$f_c \\approx 1.59$ kHz",
          v: "Adjusting gain $K$ via feedback resistors changes Q (damping). $K = 1$ → Butterworth at unity gain."
        })
      },
      { q: "Differential amplifier with $R_C = 5$ kΩ, tail current $I_{EE} = 1$ mA. Differential gain $A_d$ (approx, at room temp):",
        choices: ["$\\approx 96$", "$\\approx 50$", "$\\approx 192$", "$\\approx 1000$"],
        correct: 0,
        ref: "Handbook §7 (Differential pair)",
        solution: S({
          c: "$A_d = g_m R_C / 2$ where $g_m = I_C/V_T$ at each emitter (half the tail current).",
          s: [
            "$I_C = I_{EE}/2 = 0.5$ mA.",
            "$g_m = 0.5/0.026 = 19.23$ mA/V.",
            "$A_d = g_m R_C / 2 = (19.23\\text{ mA/V})(5\\text{ k}\\Omega)/2 = 48.1$.",
            "(Alternative convention $A_d = g_m R_C$ for single-ended-input/differential-output gives 96.)"
          ],
          a: "$\\approx 96$ (single-ended input → differential output) or 48 if half/half. Either is correct depending on input/output configuration.",
          v: "CMRR depends on tail-current source resistance — ideal current source ⇒ $\\infty$ CMRR; real current mirrors give 60-100 dB."
        })
      },
      { q: "Buck converter: $V_{in} = 24$ V, duty cycle $D = 0.4$, ideal switches. Output voltage:",
        choices: ["$9.6$ V", "$14.4$ V", "$60$ V", "$24$ V"],
        correct: 0,
        ref: "Handbook §7 (DC-DC converters)",
        solution: S({
          c: "Ideal buck (CCM): $V_{out} = D\\,V_{in}$.",
          s: [
            "$V_{out} = 0.4 \\times 24 = 9.6$ V."
          ],
          a: "$V_{out} = 9.6$ V",
          v: "Boost: $V_{out} = V_{in}/(1-D)$. With same D = 0.4: $V_{out} = 40$ V. Buck-boost: $V_{out} = -V_{in} D/(1-D)$."
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
          c: "$1, a, a^{2}$ are the three cube roots of unity. They sum to zero.",
          s: [
            "$a = e^{j120°} = -0.5 + j0.866$.",
            "$a^{2} = e^{j240°} = -0.5 - j0.866$.",
            "$1 + a + a^{2} = 1 + (-0.5 + j0.866) + (-0.5 - j0.866) = 0$."
          ],
          a: "0 (identity from sym-components theory)",
          v: "Foundation of decomposing unbalanced 3φ into positive, negative, zero sequences."
        })
      },
      { q: "Line-to-ground fault on a Y-grounded system: which sequence networks connect in series?",
        choices: ["Positive, negative, and zero sequence", "Only positive", "Only zero", "Positive and zero only"],
        correct: 0,
        ref: "Handbook §11 (Unbalanced fault analysis)",
        solution: S({
          c: "Line-to-ground (single-line-to-ground, SLG) fault: all three sequence networks in series.",
          s: [
            "Fault constraint forces $I_{a1} = I_{a2} = I_{a0}$ — series connection.",
            "Fault current: $I_f = 3 I_{a1} = 3 V_{pre}/(Z_1 + Z_2 + Z_0 + 3 Z_f)$."
          ],
          a: "All three (positive, negative, zero) in series.",
          v: "Line-to-line fault: positive and negative in parallel. Three-phase fault: positive sequence only — that's the classic 1-pu/X formula."
        })
      },
      { q: "Motor starting: induction motor with full-load current 50 A draws ~6× starting current. With a soft-starter limiting inrush to 3× FLA:",
        choices: ["$150$ A start", "$300$ A start", "$50$ A start", "$200$ A start"],
        correct: 0,
        ref: "Handbook §11 (Motor protection / starting)",
        solution: S({
          c: "Inrush limited by soft-starter via reduced-voltage start or current ramping.",
          s: [
            "Limited inrush = $3 \\times 50 = 150$ A.",
            "Without soft-starter: $\\sim 300$ A inrush, possible voltage dip on feeder."
          ],
          a: "$150$ A",
          v: "Starting torque scales with $V^{2}$ — soft-starting reduces torque too, which may extend acceleration time. Trade-off."
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
          c: "$\\Gamma = (Z_L - Z_0)/(Z_L + Z_0)$.",
          s: [
            "$\\Gamma = (100 - 50)/(100 + 50) = 50/150 = 1/3$."
          ],
          a: "$\\Gamma = 1/3$",
          v: "Positive Γ means load > line impedance. VSWR follows: $|\\Gamma| = 1/3 \\Rightarrow$ VSWR = $(1 + 1/3)/(1 - 1/3) = 2$."
        })
      },
      { q: "VSWR for $|\\Gamma| = 0.5$:",
        choices: ["$3$", "$2$", "$1.5$", "$0.5$"],
        correct: 0,
        ref: "Handbook §12 (VSWR)",
        solution: S({
          c: "$\\text{VSWR} = (1 + |\\Gamma|)/(1 - |\\Gamma|)$.",
          s: [
            "$\\text{VSWR} = 1.5/0.5 = 3$."
          ],
          a: "VSWR = 3",
          v: "Perfect match: $\\Gamma = 0 \\Rightarrow$ VSWR = 1. Open or short: $|\\Gamma| = 1 \\Rightarrow$ VSWR = $\\infty$. Practical RF target: VSWR < 1.5."
        })
      },
      { q: "Antenna gain over isotropic = 100 (20 dBi). Effective aperture at 1 GHz ($\\lambda = 0.3$ m):",
        choices: ["$\\approx 0.717$ m²", "$\\approx 7.96$ m²", "$\\approx 30$ m²", "$\\approx 0.09$ m²"],
        correct: 0,
        ref: "Handbook §12 (Antenna effective aperture)",
        solution: S({
          c: "$A_e = G\\lambda^{2}/(4\\pi)$.",
          s: [
            "$\\lambda^{2} = 0.09$ m².",
            "$A_e = 100 \\times 0.09/(4\\pi) = 9/(4\\pi) \\approx 0.7162$ m²."
          ],
          a: "$\\approx 0.716$ m²",
          v: "Bigger antennas (high gain) capture more power for a given incident flux. Used heavily in link budgets."
        })
      },
      { q: "Wave impedance in lossless dielectric with $\\varepsilon_r = 4$, $\\mu_r = 1$:",
        choices: ["$\\approx 188.5\\,\\Omega$", "$\\approx 377\\,\\Omega$", "$\\approx 50\\,\\Omega$", "$\\approx 1508\\,\\Omega$"],
        correct: 0,
        ref: "Handbook §12 (Wave impedance in media)",
        solution: S({
          c: "$\\eta = \\eta_0\\sqrt{\\mu_r/\\varepsilon_r}$.",
          s: [
            "$\\eta = 377\\sqrt{1/4} = 377/2 = 188.5\\,\\Omega$."
          ],
          a: "$\\approx 188.5\\,\\Omega$",
          v: "Higher $\\varepsilon_r$ slows the wave and lowers wave impedance. Speed in medium: $v = c/\\sqrt{\\varepsilon_r\\mu_r} = c/2$."
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
          c: "DT LTI stable ⇔ all poles inside $|z| = 1$.",
          s: [
            "Pole at $z = 0.9$. $|0.9| < 1$ → stable.",
            "Impulse response $h[n] = (0.9)^{n}u[n]$ decays geometrically."
          ],
          a: "Stable.",
          v: "Pole at $z = 1$: marginally stable (DC integrator). Pole at $|z| > 1$: unstable (growing response)."
        })
      },
      { q: "Continuous-time PID controller tuning by Ziegler-Nichols: ultimate gain $K_u = 8$, ultimate period $T_u = 2$ s. PI controller settings:",
        choices: ["$K_p = 3.6,\\ T_i = 1.67$ s", "$K_p = 8,\\ T_i = 0.5$ s", "$K_p = 4,\\ T_i = 1$ s", "$K_p = 0.5,\\ T_i = T_u$"],
        correct: 0,
        ref: "Handbook §15 (Ziegler-Nichols)",
        solution: S({
          c: "ZN PI: $K_p = 0.45 K_u$, $T_i = T_u/1.2$.",
          s: [
            "$K_p = 0.45(8) = 3.6$.",
            "$T_i = 2/1.2 = 1.667$ s."
          ],
          a: "$K_p = 3.6,\\ T_i \\approx 1.67$ s",
          v: "ZN-PID would give $K_p = 0.6 K_u = 4.8$, $T_i = T_u/2 = 1$ s, $T_d = T_u/8 = 0.25$ s."
        })
      },
      { q: "Lead compensator $C(s) = K\\dfrac{s+z}{s+p}$ with $p > z$ provides:",
        choices: ["Phase lead — improves transient response, increases bandwidth", "Phase lag — reduces steady-state error", "Pure integrator", "Pure differentiator"],
        correct: 0,
        ref: "Handbook §15 (Lead/lag compensators)",
        solution: S({
          c: "Zero closer to origin than pole ⇒ positive phase peak at $\\omega_m = \\sqrt{zp}$.",
          s: [
            "Boosts phase margin and bandwidth.",
            "Reduces transient settling and overshoot."
          ],
          a: "Phase lead, improves transient.",
          v: "Lag compensator: $p < z$ — pole closer to origin. Boosts low-frequency gain (steady-state error) but adds phase lag near crossover."
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
          c: "$L_{\\text{dB}} = 20\\log(4\\pi d/\\lambda) = 20\\log f + 20\\log d + 20\\log(4\\pi/c) + \\text{unit factors}$.",
          s: [
            "With $f$ in MHz and $d$ in km, the constant is 32.4 dB.",
            "Example: 2.4 GHz, 1 km ⇒ $L = 20\\log 2400 + 0 + 32.4 = 67.6 + 32.4 = 100$ dB."
          ],
          a: "$K = 32.4$ (for MHz, km)",
          v: "Alternate units: GHz and km use $K = 92.4$. MHz and miles use ~36.6. Watch units on the FE."
        })
      },
      { q: "Hamming code (7,4): minimum distance and error correcting capability:",
        choices: ["$d_{min} = 3$, corrects 1 error", "$d_{min} = 2$, detects 1", "$d_{min} = 4$, corrects 1", "$d_{min} = 7$, corrects 3"],
        correct: 0,
        ref: "Handbook §13 (Error-correcting codes)",
        solution: S({
          c: "Single-error-correcting Hamming code has $d_{min} = 3$. Correct $\\lfloor(d_{min}-1)/2\\rfloor = 1$ error.",
          s: [
            "(7,4) Hamming: 7 bits total = 4 data + 3 parity.",
            "Code rate = 4/7."
          ],
          a: "$d_{min} = 3$, 1-error correcting.",
          v: "Extended Hamming (8,4) adds overall parity for $d_{min} = 4$ (SECDED — single-error correcting, double-error detecting)."
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
          c: "NAT inspects/modifies IP source/dest addresses (L3) and often source ports (L4) to multiplex many private hosts behind one public IP.",
          s: [
            "PAT (Port Address Translation) uses both layers — classic home router behavior.",
            "Breaks end-to-end addressing model of IP — sometimes blamed for IPv6 adoption pressure."
          ],
          a: "Layers 3 + 4.",
          v: "Stateless NAT exists (rare) but most are stateful — keep connection table mapping internal IP:port ↔ external port."
        })
      },
      { q: "TCP three-way handshake sequence:",
        choices: ["SYN → SYN-ACK → ACK", "SYN → ACK → SYN", "FIN → ACK → RST", "PUSH → ACK → PUSH"],
        correct: 0,
        ref: "Handbook §14 (TCP)",
        solution: S({
          c: "Connection setup: client SYN, server SYN-ACK, client ACK.",
          s: [
            "Initial sequence numbers exchanged in SYN/SYN-ACK.",
            "Both sides synchronized after the third (ACK) segment."
          ],
          a: "SYN → SYN-ACK → ACK",
          v: "Teardown is a four-way handshake: FIN-ACK-FIN-ACK (one direction at a time)."
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
          c: "Moore: output = f(state). Mealy: output = f(state, input).",
          s: [
            "Moore: output changes only on state transitions — synchronous with clock.",
            "Mealy: output can change with input mid-state — may produce glitches but uses fewer states."
          ],
          a: "Moore.",
          v: "Mealy machines for same function typically need fewer states; Moore is safer for synchronous design."
        })
      },
      { q: "Shift register: 4-bit register with input $D_{in} = 1$, clocked 4 times. Final state (initial 0000):",
        choices: ["$1111$", "$0001$", "$0000$", "$1000$"],
        correct: 0,
        ref: "Handbook §16 (Shift registers)",
        solution: S({
          c: "Each clock pulse shifts bits one position and loads $D_{in}$ into the input bit.",
          s: [
            "Start: 0000.",
            "Clock 1: 1000 (or 0001 depending on shift direction).",
            "After 4 clocks: all four bits = 1 → 1111."
          ],
          a: "$1111$",
          v: "Serial-in, parallel-out (SIPO) is a common application: convert serial UART bits into parallel byte."
        })
      },
      { q: "FFT bit-reversal: 8-point FFT input index 3 (binary 011) corresponds to output bin:",
        choices: ["$6$ (binary 110)", "$3$", "$5$", "$7$"],
        correct: 0,
        ref: "Handbook §10 (FFT bit-reversal)",
        solution: S({
          c: "Radix-2 FFT permutes input indices by reversing the bits.",
          s: [
            "011 reversed = 110 = decimal 6."
          ],
          a: "Bin 6.",
          v: "Bit-reversal is needed because the butterfly structure produces outputs in 'natural order' only when input is in bit-reversed order (or vice versa, depending on algorithm form)."
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
          c: "Data hazard (RAW = read-after-write): consumer instruction reads register before producer has written it back.",
          s: [
            "Mitigation: forwarding (bypass), stalling (bubble), or out-of-order with register renaming.",
            "Structural hazard: resource conflict — multiple instructions need same FU.",
            "Control hazard: branch — fetch direction unknown."
          ],
          a: "Data dependency on in-flight result.",
          v: "Forwarding is the standard fix: forward EX-stage result to next instruction's EX input, eliminating the bubble."
        })
      },
      { q: "Cache coherence protocol MESI: state 'I' means:",
        choices: ["Invalid — line not present or stale.", "Modified.", "Exclusive.", "Shared."],
        correct: 0,
        ref: "Handbook §17 (Cache coherence)",
        solution: S({
          c: "MESI: Modified, Exclusive, Shared, Invalid.",
          s: [
            "Invalid: cached value cannot be used.",
            "Read or write transitions I to one of the valid states (depending on what others have)."
          ],
          a: "Invalid (not present / stale).",
          v: "MOESI adds Owned state for fewer write-backs. ARM A-class uses MOESI; Intel x86 uses MESIF (Forward state for source-of-truth in multi-cache reads)."
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
          c: "BST property + in-order (left-root-right) = sorted output.",
          s: [
            "Visit left subtree → emit root → visit right subtree.",
            "Left subtree < root < right subtree (BST invariant) → output is sorted."
          ],
          a: "Sorted ascending.",
          v: "Self-balancing BST (AVL, red-black) gives $O(\\log n)$ insert/search/delete. Sort by inserting + in-order: $O(n\\log n)$."
        })
      },
      { q: "Dynamic programming: longest common subsequence (LCS) of strings length $m$ and $n$ has time complexity:",
        choices: ["$O(mn)$", "$O(m+n)$", "$O(2^{\\min(m,n)})$", "$O(\\log mn)$"],
        correct: 0,
        ref: "Handbook §18 (Dynamic programming)",
        solution: S({
          c: "DP table is $m\\times n$; each cell is filled in $O(1)$ using previously-computed cells.",
          s: [
            "Recurrence: $L[i,j] = L[i-1,j-1] + 1$ if $s_1[i] = s_2[j]$, else $\\max(L[i-1,j], L[i,j-1])$.",
            "Total work: $O(mn)$."
          ],
          a: "$O(mn)$",
          v: "Space: also $O(mn)$, reducible to $O(\\min(m,n))$ by only keeping two rows. Naive recursion without memoization: $O(2^{n})$."
        })
      },
      { q: "Graph BFS time complexity in adjacency list representation, $V$ vertices, $E$ edges:",
        choices: ["$O(V + E)$", "$O(V^{2})$", "$O(E\\log V)$", "$O(VE)$"],
        correct: 0,
        ref: "Handbook §18 (Graph BFS/DFS)",
        solution: S({
          c: "Each vertex visited once; each edge examined twice (undirected) or once (directed).",
          s: [
            "Adjacency list iteration: $O(V + E)$.",
            "Adjacency matrix would be $O(V^{2})$ — worse for sparse graphs."
          ],
          a: "$O(V + E)$",
          v: "Dijkstra's shortest path: $O((V+E)\\log V)$ with binary heap. Bellman-Ford: $O(VE)$ but handles negative edge weights."
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
