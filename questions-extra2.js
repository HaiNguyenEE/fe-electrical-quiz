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
          c: "Log addition rule: $\\log_b A + \\log_b B = \\log_b(AB)$. Then convert to exponential form.",
          s: [
            "$\\log_{10}[x(x-3)] = 1 \\Rightarrow x(x-3) = 10^1 = 10$.",
            "$x^2 - 3x - 10 = 0 \\Rightarrow (x-5)(x+2) = 0$.",
            "$x = 5$ or $x = -2$. Reject $x = -2$ (log of negative undefined). So $x = 5$."
          ],
          a: "$x = 5$",
          v: "Check: $\\log 5 + \\log 2 = \\log 10 = 1$ ✓"
        }),
        ref: "Handbook p.36" },
      { q: "Magnitude of complex number $z = 3 - j4$:",
        choices: ["$5$", "$\\sqrt{7}$", "$1$", "$25$"],
        correct: 0,
        solution: S({
          c: "$|a + jb| = \\sqrt{a^2 + b^2}$ (Pythagorean).",
          s: ["$|z| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."],
          a: "$|z| = 5$",
          v: "Familiar 3-4-5 right triangle."
        }),
        ref: "Handbook p.36" },
      { q: "$\\sin(75°) \\cos(15°) - \\cos(75°)\\sin(15°)$ equals:",
        choices: ["$\\sin 60°$", "$\\cos 60°$", "$1$", "$\\sin 90°$"],
        correct: 0,
        solution: S({
          c: "Sine of difference: $\\sin(A-B) = \\sin A\\cos B - \\cos A\\sin B$.",
          s: [
            "Pattern matches $\\sin(75° - 15°) = \\sin 60° = \\sqrt{3}/2 \\approx 0.866$."
          ],
          a: "$\\sin 60°$",
          v: "Numerically: $\\sin75°\\cos15° - \\cos75°\\sin15° = 0.966\\cdot 0.966 - 0.259\\cdot 0.259 = 0.933 - 0.067 = 0.866$ ✓"
        }),
        ref: "Handbook p.37" },
      { q: "Determinant of $A = \\begin{pmatrix}a&b\\\\0&d\\end{pmatrix}$ (upper triangular):",
        choices: ["$ad$", "$abd$", "$a+d$", "$0$"],
        correct: 0,
        solution: S({
          c: "Triangular matrix determinant = product of diagonal entries.",
          s: ["$|A| = a \\cdot d - b \\cdot 0 = ad$."],
          a: "$|A| = ad$",
          v: "Generalizes: for any $n\\times n$ triangular matrix, $|A| = \\prod a_{ii}$."
        }),
        ref: "Handbook p.57" },
      { q: "Find $\\frac{d}{dx}[e^{2x}\\cos(3x)]$:",
        choices: ["$e^{2x}[2\\cos 3x - 3\\sin 3x]$", "$2e^{2x}\\cos 3x$", "$-3e^{2x}\\sin 3x$", "$e^{2x}\\sin 3x$"],
        correct: 0,
        solution: S({
          c: "Product rule: $(uv)' = u'v + uv'$. Chain rule for inside derivatives.",
          s: [
            "$u = e^{2x}$, $u' = 2e^{2x}$.",
            "$v = \\cos 3x$, $v' = -3\\sin 3x$.",
            "Combine: $u'v + uv' = 2e^{2x}\\cos 3x + e^{2x}(-3\\sin 3x) = e^{2x}(2\\cos 3x - 3\\sin 3x)$."
          ],
          a: "$e^{2x}[2\\cos 3x - 3\\sin 3x]$",
          v: "At $x=0$: derivative $= 1 \\cdot 2 = 2$. Quick check from definition would confirm."
        }),
        ref: "Handbook p.47" },
      { q: "$\\int x e^x \\, dx$ equals:",
        choices: ["$(x-1)e^x + C$", "$xe^x + C$", "$x^2 e^x/2 + C$", "$e^x + C$"],
        correct: 0,
        solution: S({
          c: "Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$. Choose $u = x$ (simplifies after differentiation), $dv = e^x dx$.",
          s: [
            "$u = x \\Rightarrow du = dx$.",
            "$dv = e^x dx \\Rightarrow v = e^x$.",
            "$\\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + C = (x-1)e^x + C$."
          ],
          a: "$(x-1)e^x + C$",
          v: "Differentiate back: $e^x + (x-1)e^x = (1 + x - 1)e^x = xe^x$ ✓"
        }),
        ref: "Handbook p.49" },
      { q: "Solve $y' = 2xy$ with $y(0) = 3$.",
        choices: ["$y = 3e^{x^2}$", "$y = 3e^{2x}$", "$y = 3x^2$", "$y = 3+x^2$"],
        correct: 0,
        solution: S({
          c: "Separable ODE: write as $dy/y = 2x\\,dx$ and integrate.",
          s: [
            "$dy/y = 2x\\,dx$.",
            "Integrate both sides: $\\ln|y| = x^2 + C$.",
            "Exponentiate: $y = Ae^{x^2}$.",
            "Apply IC $y(0) = 3$: $3 = A \\cdot e^0 \\Rightarrow A = 3$.",
            "Solution: $y = 3e^{x^2}$."
          ],
          a: "$y(x) = 3e^{x^2}$",
          v: "Plug back: $y' = 3 e^{x^2} \\cdot 2x = 6xe^{x^2}$; and $2xy = 2x \\cdot 3e^{x^2} = 6xe^{x^2}$ ✓"
        }),
        ref: "Handbook p.55" },
      { q: "$\\nabla \\cdot \\vec{F}$ for $\\vec{F} = x^2\\hat{i} + xy\\hat{j} + z\\hat{k}$:",
        choices: ["$2x + x + 1$", "$x^2 + xy + z$", "$3x$", "$2$"],
        correct: 0,
        solution: S({
          c: "Divergence: $\\nabla\\cdot\\vec{F} = \\partial F_x/\\partial x + \\partial F_y/\\partial y + \\partial F_z/\\partial z$. Yields scalar.",
          s: [
            "$\\partial(x^2)/\\partial x = 2x$.",
            "$\\partial(xy)/\\partial y = x$.",
            "$\\partial(z)/\\partial z = 1$.",
            "Sum: $2x + x + 1 = 3x + 1$. Choice A is the unsummed form."
          ],
          a: "$\\nabla\\cdot\\vec{F} = 2x + x + 1 = 3x + 1$",
          v: "Physical interpretation: net outflow per unit volume of vector field."
        }),
        ref: "Handbook p.38" },
      { q: "$\\nabla \\times \\vec{F}$ at origin for $\\vec{F} = y\\hat{i} - x\\hat{j}$:",
        choices: ["$-2\\hat{k}$", "$2\\hat{k}$", "$0$", "$\\hat{i}+\\hat{j}$"],
        correct: 0,
        solution: S({
          c: "Curl: $\\nabla\\times\\vec{F} = \\det\\begin{pmatrix}\\hat{i}&\\hat{j}&\\hat{k}\\\\\\partial_x&\\partial_y&\\partial_z\\\\F_x&F_y&F_z\\end{pmatrix}$. Yields vector.",
          s: [
            "$F_x = y$, $F_y = -x$, $F_z = 0$.",
            "$\\hat{k}$ component: $\\partial F_y/\\partial x - \\partial F_x/\\partial y = -1 - 1 = -2$.",
            "Other components vanish.",
            "Curl $= -2\\hat{k}$."
          ],
          a: "$-2\\hat{k}$",
          v: "This is a clockwise rotational field in xy-plane → curl points into the page ($-\\hat{k}$)."
        }),
        ref: "Handbook p.38" },
      { q: "$\\binom{8}{3}$ = ",
        choices: ["$56$", "$28$", "$112$", "$336$"],
        correct: 0,
        solution: S({
          c: "Binomial coefficient: $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$.",
          s: ["$\\dfrac{8!}{3!\\cdot 5!} = \\dfrac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = \\dfrac{336}{6} = 56$."],
          a: "$56$",
          v: "Pascal's triangle row 8: 1, 8, 28, 56, 70, 56, 28, 8, 1. The 4th entry (index 3) is 56."
        }),
        ref: "Handbook p.64" },
      { q: "$\\lim_{x\\to\\infty} \\dfrac{3x^2 + 5x}{x^2 - 1}$:",
        choices: ["$3$", "$0$", "$\\infty$", "$-5$"],
        correct: 0,
        solution: S({
          c: "Rational limits at infinity: ratio of leading coefficients (when degrees match).",
          s: [
            "Both numerator and denominator degree 2.",
            "Leading coefficients: 3 (top) and 1 (bottom).",
            "Limit $= 3/1 = 3$."
          ],
          a: "Limit = 3",
          v: "Divide num/den by $x^2$: $\\dfrac{3 + 5/x}{1 - 1/x^2} \\to 3/1 = 3$."
        }),
        ref: "Handbook p.47" },
      { q: "Convert $250°$ to radians.",
        choices: ["$\\approx 4.36$ rad", "$\\approx 2.18$ rad", "$\\approx 8.72$ rad", "$\\approx 1.39$ rad"],
        correct: 0,
        solution: S({
          c: "Conversion: rad = degrees × $\\pi/180$.",
          s: ["$250 \\cdot \\pi/180 = 250 \\cdot 0.01745 \\approx 4.363$ rad."],
          a: "$\\approx 4.36$ rad",
          v: "Full circle: $2\\pi \\approx 6.283$ rad; 250° is 25/36 of full = 4.36 rad ✓"
        }),
        ref: "Handbook p.37" },
    ],

    // ====================== Ch 2: Probability — +8 ======================
    2: [
      { q: "Mean of {2, 4, 4, 6, 8, 10}:",
        choices: ["$5.67$", "$6.0$", "$4.5$", "$5.0$"],
        correct: 0,
        solution: S({
          c: "$\\bar{x} = \\sum x_i / n$.",
          s: ["Sum = $2+4+4+6+8+10 = 34$. $n = 6$. $\\bar{x} = 34/6 = 5.667$."],
          a: "$\\bar{x} \\approx 5.67$",
          v: "Median = $(4+6)/2 = 5$; mode = 4. Mean is slightly higher because of the 10."
        }),
        ref: "Handbook p.63" },
      { q: "If $P(A) = 0.4$, $P(B) = 0.5$, $P(A \\cap B) = 0.2$. Are A, B independent?",
        choices: ["Yes — $P(A)P(B) = P(A \\cap B)$", "No", "Cannot tell", "Yes — $P(A)+P(B)=1$"],
        correct: 0,
        solution: S({
          c: "Definition: A, B independent iff $P(A \\cap B) = P(A)\\cdot P(B)$.",
          s: [
            "$P(A)\\cdot P(B) = 0.4 \\cdot 0.5 = 0.2$.",
            "$P(A \\cap B) = 0.2$.",
            "Equal → independent."
          ],
          a: "Yes (independent)",
          v: "Conditional: $P(A|B) = 0.2/0.5 = 0.4 = P(A)$ ✓ (B doesn't affect A's probability)."
        }),
        ref: "Handbook p.64" },
      { q: "5 cards drawn from a deck. P(all hearts)?",
        choices: ["$\\binom{13}{5}/\\binom{52}{5} \\approx 0.0005$", "$13/52$", "$(1/4)^5$", "$5/52$"],
        correct: 0,
        solution: S({
          c: "Hypergeometric (without replacement): $P = \\dfrac{\\binom{13}{5}}{\\binom{52}{5}}$.",
          s: [
            "Favorable: choose 5 from 13 hearts → $\\binom{13}{5} = 1287$.",
            "Total: $\\binom{52}{5} = 2{,}598{,}960$.",
            "$P = 1287/2598960 \\approx 0.000495 = 0.05\\%$."
          ],
          a: "≈ 0.05%",
          v: "Equivalent to royal flush rarity — quite rare!"
        }),
        ref: "Handbook p.64-65" },
      { q: "A normal distribution with $\\mu = 100$, $\\sigma = 15$. P(X between 85 and 115)?",
        choices: ["$\\approx 68\\%$", "$\\approx 95\\%$", "$\\approx 99\\%$", "$50\\%$"],
        correct: 0,
        solution: S({
          c: "Empirical rule (68-95-99.7): within 1σ ≈ 68%, 2σ ≈ 95%, 3σ ≈ 99.7%.",
          s: [
            "Range $[\\mu-\\sigma, \\mu+\\sigma] = [85, 115]$.",
            "By empirical rule: $P \\approx 68.27\\%$."
          ],
          a: "$\\approx 68\\%$",
          v: "More precisely: $P(|Z|<1) = 0.6827$."
        }),
        ref: "Handbook p.67" },
      { q: "10 coins flipped. Probability of exactly 5 heads?",
        choices: ["$\\binom{10}{5}/2^{10} \\approx 24.6\\%$", "$50\\%$", "$5\\%$", "$1/2^{10}$"],
        correct: 0,
        solution: S({
          c: "Binomial: $P(k) = \\binom{n}{k}p^k(1-p)^{n-k}$. For fair coin, $p=0.5$.",
          s: [
            "$\\binom{10}{5} = 252$.",
            "$(0.5)^{10} = 1/1024 \\approx 0.000977$.",
            "$P = 252/1024 \\approx 0.246 = 24.6\\%$."
          ],
          a: "$\\approx 24.6\\%$",
          v: "Note it's NOT 50% — coin flipping has variance!"
        }),
        ref: "Handbook p.66" },
      { q: "Median of {12, 7, 9, 15, 10, 8, 11}:",
        choices: ["$10$", "$9$", "$11$", "$10.29$"],
        correct: 0,
        solution: S({
          c: "Median = middle value when sorted. If $n$ even, average of two middle.",
          s: ["Sort: 7, 8, 9, <b>10</b>, 11, 12, 15. Middle (4th of 7) is 10."],
          a: "Median = 10",
          v: "Mean = $(7+8+9+10+11+12+15)/7 = 72/7 ≈ 10.29$. Median ≠ mean unless symmetric distribution."
        }),
        ref: "Handbook p.63" },
      { q: "If sample size doubles from 100 to 400, the standard error of the sample mean:",
        choices: ["Halves", "Doubles", "Stays same", "Quadruples"],
        correct: 0,
        solution: S({
          c: "Standard error: $SE = \\sigma/\\sqrt{n}$. Quadrupling $n$ → halving SE.",
          s: [
            "$SE_{100} = \\sigma/\\sqrt{100} = \\sigma/10$.",
            "$SE_{400} = \\sigma/\\sqrt{400} = \\sigma/20$.",
            "Ratio: $20/10 = 2$ → SE halved."
          ],
          a: "Halves",
          v: "To halve SE, you must quadruple the sample size. Why surveys aim for ~1000 — beyond that, gains are slow."
        }),
        ref: "Handbook p.69" },
      { q: "A drug claims 80% effectiveness. In 200 patients, expected number cured + std deviation:",
        choices: ["$\\mu=160$, $\\sigma\\approx 5.66$", "$\\mu=80$, $\\sigma=20$", "$\\mu=160$, $\\sigma=40$", "$\\mu=200$, $\\sigma=8$"],
        correct: 0,
        solution: S({
          c: "Binomial: $\\mu = np$, $\\sigma = \\sqrt{np(1-p)}$.",
          s: [
            "$\\mu = 200 \\cdot 0.8 = 160$.",
            "$\\sigma = \\sqrt{200 \\cdot 0.8 \\cdot 0.2} = \\sqrt{32} \\approx 5.66$."
          ],
          a: "$\\mu = 160$, $\\sigma \\approx 5.66$",
          v: "95% CI roughly $\\mu \\pm 2\\sigma$: 148.7 to 171.3. So between 149 and 171 cures expected."
        }),
        ref: "Handbook p.66" },
    ],

    // ====================== Ch 3: Ethics — +3 ======================
    3: [
      { q: "An engineer is offered a bonus by a contractor in exchange for specifying their product. Most ethical response:",
        choices: ["Refuse — accepting bonus violates faithful agent duty", "Accept but disclose to client", "Accept if product is good", "Negotiate higher bonus"],
        correct: 0,
        solution: S({
          c: "Rule 4: engineers are faithful agents of clients. Gifts/bonuses from vendors create conflicts of interest.",
          s: [
            "Refusal is the cleanest action — no perceived bias.",
            "Even with disclosure, accepting compromises objectivity.",
            "Most state boards: gift acceptance from vendors = ethics violation."
          ],
          a: "Refuse the bonus.",
          v: "Some firms allow small gifts (≤$25/year) but tighten policies are common."
        }),
        ref: "Handbook p.4" },
      { q: "An engineer's signature/seal on a document indicates:",
        choices: ["Personal responsibility for the work", "Approval by employer", "Just authentication of identity", "Optional courtesy"],
        correct: 0,
        solution: S({
          c: "Sealing/stamping = professional assertion that the work meets standards and the engineer accepts personal liability.",
          s: [
            "Not employer's responsibility; the engineer is personally liable.",
            "Liability persists even after employment changes.",
            "Use only when work is fully prepared or thoroughly reviewed."
          ],
          a: "Personal responsibility",
          v: "This is why states require licensure for stamping public-safety-affecting work."
        }),
        ref: "Handbook p.5" },
      { q: "Public welfare obligation vs. employer confidentiality — which prevails?",
        choices: ["Public welfare", "Confidentiality", "Whichever has stronger contract clause", "Always negotiate"],
        correct: 0,
        solution: S({
          c: "NCEES Rule 1 explicitly: public safety is paramount. No employment contract can override this.",
          s: [
            "Confidentiality is routine, except when public is at risk.",
            "Reporting actual safety threats is protected by law in most jurisdictions."
          ],
          a: "Public welfare prevails.",
          v: "Famous case: Roger Boisjoly warned about O-ring failures before Challenger but was overridden — leading to subsequent ethics-reform discussions."
        }),
        ref: "Handbook p.4-5" },
    ],

    // ====================== Ch 4: Economics — +5 ======================
    4: [
      { q: "$10{,}000 invested for 30 years at 6% annual compounded. Future value:",
        choices: ["$\\approx \\$57{,}435$", "$\\$28{,}000$", "$\\$100{,}000$", "$\\$60{,}000$"],
        correct: 0,
        solution: S({
          c: "$F = P(1+i)^n$.",
          s: [
            "$(1.06)^{30} = 5.7435$.",
            "$F = 10000 \\cdot 5.7435 = 57{,}435$."
          ],
          a: "$\\approx \\$57{,}435$",
          v: "Rule of 72: doubles every ~12 yrs at 6%, so in 30 yrs about $2.5\\times$ doublings = ~5.6$\\times$ original ✓"
        }),
        ref: "Handbook p.230" },
      { q: "Present worth of $\\$5000$ received 8 years from now at 5%:",
        choices: ["$\\approx \\$3{,}385$", "$\\$3{,}000$", "$\\$4{,}500$", "$\\$5{,}500$"],
        correct: 0,
        solution: S({
          c: "$P = F/(1+i)^n$.",
          s: [
            "$(1.05)^8 = 1.4775$.",
            "$P = 5000 / 1.4775 \\approx 3385$."
          ],
          a: "$\\approx \\$3{,}385$",
          v: "Future $5000 today only worth $3385 because of opportunity cost."
        }),
        ref: "Handbook p.230" },
      { q: "Annual maintenance $\\$500$/yr forever (perpetuity) at $i=8\\%$. Present worth:",
        choices: ["$\\$6{,}250$", "$\\$500$", "$\\$8{,}000$", "$\\$10{,}000$"],
        correct: 0,
        solution: S({
          c: "Perpetuity (infinite annuity): $P = A/i$.",
          s: ["$P = 500/0.08 = 6{,}250$."],
          a: "$P = \\$6{,}250$",
          v: "An infinite stream is worth a finite amount because distant payments are heavily discounted."
        }),
        ref: "Handbook p.231" },
      { q: "Loan $\\$50k$ at $i=4\\%$ monthly compounded over 5 years. Monthly payment:",
        choices: ["$\\approx \\$921$", "$\\$833$", "$\\$1041$", "$\\$700$"],
        correct: 0,
        solution: S({
          c: "Capital recovery: $A = P \\cdot \\dfrac{i(1+i)^n}{(1+i)^n - 1}$. Monthly: $i = 4\\%/12 = 0.003333$, $n = 60$.",
          s: [
            "$(1.003333)^{60} = 1.2210$.",
            "$A/P = 0.003333 \\cdot 1.2210 / 0.2210 = 0.004069/0.2210 = 0.01842$.",
            "$A = 50000 \\cdot 0.01842 = 921$."
          ],
          a: "$\\approx \\$921$/month",
          v: "Total paid: $60 \\cdot 921 = \\$55{,}260$. Interest ≈ $\\$5{,}260$ on $\\$50k$ over 5 yrs."
        }),
        ref: "Handbook p.232" },
      { q: "ROR for $\\$1000$ now to $\\$2000$ in 6 years:",
        choices: ["$\\approx 12.2\\%$", "$10\\%$", "$\\approx 16.7\\%$", "$33.3\\%$"],
        correct: 0,
        solution: S({
          c: "$F = P(1+i)^n \\Rightarrow i = (F/P)^{1/n} - 1$.",
          s: [
            "$F/P = 2$.",
            "$2^{1/6} = 1.1225$.",
            "$i = 0.1225 = 12.25\\%$."
          ],
          a: "$i \\approx 12.25\\%$",
          v: "Rule of 72: at 12.25%, doubles in 72/12.25 = 5.88 yrs ≈ 6 ✓"
        }),
        ref: "Handbook p.230" },
    ],

    // ====================== Ch 5: Materials — +4 ======================
    5: [
      { q: "Holes have ____ mobility than electrons in silicon.",
        choices: ["Lower", "Higher", "Same", "Zero"],
        correct: 0,
        solution: S({
          c: "In Si at 300K: $\\mu_n \\approx 1350$ cm²/V·s; $\\mu_p \\approx 480$ cm²/V·s. Holes move slower because they 'move' by adjacent valence electrons hopping.",
          s: [
            "$\\mu_n / \\mu_p \\approx 2.8$ → electrons are about 3× more mobile.",
            "Consequence: n-channel MOSFETs are faster than p-channel for same size."
          ],
          a: "Lower (≈3× lower)",
          v: "This asymmetry affects circuit design — pMOS is often made wider to match nMOS drive strength."
        }),
        ref: "Handbook p.354" },
      { q: "Aluminum vs copper conductors of same dimensions: aluminum has ___ resistance.",
        choices: ["Higher (about 1.6×)", "Lower", "Same", "Zero"],
        correct: 0,
        solution: S({
          c: "Cu $\\rho = 1.72\\times 10^{-8}$ Ω·m. Al $\\rho \\approx 2.82\\times 10^{-8}$ Ω·m. Ratio ≈ 1.64.",
          s: [
            "Same shape, $R \\propto \\rho$.",
            "Aluminum has ~1.6× the resistivity of copper.",
            "Aluminum is preferred for overhead transmission (lighter), copper for buildings (lower R)."
          ],
          a: "Higher, about 1.6×",
          v: "Same current handling: aluminum wire must be larger gauge than copper."
        }),
        ref: "Handbook p.354" },
      { q: "Diffusion current density driven by concentration gradient ($n$ varies in $x$):",
        choices: ["$J = qD_n\\,dn/dx$", "$J = q n\\mu E$", "$J = -q\\sigma$", "$J = 0$"],
        correct: 0,
        solution: S({
          c: "Fick's law for electron diffusion: $J_n = qD_n\\,(dn/dx)$. For holes: $J_p = -qD_p\\,(dp/dx)$ (opposite sign because hole charge is +).",
          s: [
            "$D$ = diffusion coefficient (cm²/s), related to mobility via Einstein: $D = \\mu V_T$.",
            "Drift (choice B) is a different mechanism — response to E field, not gradient."
          ],
          a: "$J = qD_n\\,dn/dx$ (Fick's law)",
          v: "In a pn junction, both diffusion AND drift contribute; at equilibrium they balance."
        }),
        ref: "Handbook p.354" },
      { q: "Insulator breakdown strength of air is approximately:",
        choices: ["$3$ kV/mm", "$0.3$ kV/mm", "$30$ kV/mm", "$300$ kV/mm"],
        correct: 0,
        solution: S({
          c: "Air dielectric strength: about 3 kV/mm (or 30 kV/cm) at sea level. Above this, ionization → arc breakdown.",
          s: [
            "Memorized value: ~3 kV/mm.",
            "Practical: lightning needs >100 m air column for many MV.",
            "Compare: SF6 gas ~89 kV/mm, oil ~12-15 kV/mm."
          ],
          a: "≈ 3 kV/mm",
          v: "Why high-voltage equipment has large air gaps."
        }),
        ref: "Handbook p.354" },
    ],

    // ====================== Ch 6: Circuits — +15 ======================
    6: [
      { q: "Two batteries (10V, 6V) in series-aiding with internal resistances 1Ω and 2Ω respectively, feeding a 7Ω load. Current?",
        choices: ["$1.6$ A", "$2$ A", "$1.0$ A", "$0.8$ A"],
        correct: 0,
        solution: S({
          c: "Series-aiding: voltages add. Total V = sum; total R = sum; I = V/R.",
          s: [
            "Total EMF: 10 + 6 = 16 V.",
            "Total R: 1 + 2 + 7 = 10 Ω.",
            "$I = 16/10 = 1.6$ A."
          ],
          a: "$I = 1.6$ A",
          v: "If batteries were series-opposing: net EMF = 10 - 6 = 4 V → I = 0.4 A."
        }),
        ref: "Handbook p.356" },
      { q: "Wheatstone bridge: $R_1=100$, $R_2=200$, $R_3=300$. For balance, $R_4$ = ?",
        choices: ["$600\\ \\Omega$", "$150\\ \\Omega$", "$200\\ \\Omega$", "$66.7\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Wheatstone bridge balanced when $R_1/R_2 = R_3/R_4$, so $R_4 = R_2 R_3 / R_1$.",
          s: [
            "$R_4 = (200)(300)/100 = 600\\ \\Omega$."
          ],
          a: "$R_4 = 600\\ \\Omega$",
          v: "At balance, no current flows through the galvanometer."
        }),
        ref: "Handbook p.357" },
      { q: "An ideal current source (5 A) drives parallel resistors 4Ω and 6Ω. Current through 4Ω resistor:",
        choices: ["$3$ A", "$2$ A", "$5$ A", "$0.5$ A"],
        correct: 0,
        solution: S({
          c: "Current divider rule (two resistors in parallel): $I_1 = I_{total} \\cdot R_2/(R_1 + R_2)$.",
          s: [
            "$I_4 = 5 \\cdot 6/(4+6) = 5 \\cdot 0.6 = 3$ A.",
            "Note: more current flows through the smaller resistor (4Ω)."
          ],
          a: "$I_{4\\Omega} = 3$ A",
          v: "$I_{6\\Omega} = 2$ A. Sum: 3+2 = 5 A ✓"
        }),
        ref: "Handbook p.356" },
      { q: "Find equivalent resistance of three 6Ω resistors: two in parallel, the result in series with the third.",
        choices: ["$9\\ \\Omega$", "$12\\ \\Omega$", "$2\\ \\Omega$", "$18\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Reduce step by step.",
          s: [
            "Parallel pair: $6\\|6 = 3\\ \\Omega$.",
            "Series with the third 6Ω: $3 + 6 = 9\\ \\Omega$."
          ],
          a: "$9\\ \\Omega$",
          v: "All three in parallel would give $6/3 = 2$ Ω; all in series $18$ Ω."
        }),
        ref: "Handbook p.356" },
      { q: "$Z = 20\\angle -60°$ Ω at 120 V RMS. Apparent, real, reactive power:",
        choices: ["$|S|=720$, $P=360$, $Q=-624$", "$|S|=720$, $P=360$, $Q=624$", "$|S|=360$, $P=720$, $Q=0$", "All zero"],
        correct: 0,
        solution: S({
          c: "$|S| = V_{rms}^2/|Z|$. $P = |S|\\cos\\theta$. $Q = |S|\\sin\\theta$. Negative $\\theta$ → capacitive → Q negative.",
          s: [
            "$I_{rms} = 120/20 = 6$ A.",
            "$|S| = 120 \\cdot 6 = 720$ VA.",
            "$P = 720 \\cos(-60°) = 720 \\cdot 0.5 = 360$ W.",
            "$Q = 720 \\sin(-60°) = 720 \\cdot (-0.866) = -624$ VAR."
          ],
          a: "$|S|=720$, $P=360$, $Q\\approx -624$",
          v: "Negative Q → capacitive (leading). Cap delivers reactive power back to source."
        }),
        ref: "Handbook p.362" },
      { q: "Series RC: $R=1$ k$\\Omega$, $C=1$ µF. Cutoff frequency:",
        choices: ["$\\approx 159$ Hz", "$10$ kHz", "$1000$ Hz", "$0.16$ Hz"],
        correct: 0,
        solution: S({
          c: "$f_c = 1/(2\\pi RC)$.",
          s: [
            "$RC = 10^{-3}$ s.",
            "$f_c = 1/(2\\pi \\cdot 10^{-3}) = 159.15$ Hz."
          ],
          a: "$f_c \\approx 159$ Hz",
          v: "Above $f_c$, voltage across C drops at -20 dB/decade (LPF on C, HPF on R)."
        }),
        ref: "Handbook p.375" },
      { q: "Parallel RLC: $R=10$ k$\\Omega$, $L=100$ mH, $C=100$ nF. Resonant frequency?",
        choices: ["$\\approx 1591$ Hz", "$10$ kHz", "$159$ Hz", "$5$ kHz"],
        correct: 0,
        solution: S({
          c: "$\\omega_0 = 1/\\sqrt{LC}$ → $f_0 = 1/(2\\pi\\sqrt{LC})$.",
          s: [
            "$LC = (0.1)(10^{-7}) = 10^{-8}$.",
            "$\\sqrt{LC} = 10^{-4}$ s.",
            "$\\omega_0 = 10^4$ rad/s.",
            "$f_0 = 10^4/(2\\pi) \\approx 1591.5$ Hz."
          ],
          a: "$f_0 \\approx 1591$ Hz",
          v: "At resonance, parallel RLC tank impedance is purely R (very high) — used in oscillators."
        }),
        ref: "Handbook p.361" },
      { q: "Capacitor charged to 100V through $R=1$ k$\\Omega$. Time to reach 95% of source voltage:",
        choices: ["$\\approx 3\\tau$", "$1\\tau$", "$\\approx 5\\tau$", "Infinite"],
        correct: 0,
        solution: S({
          c: "Charging: $v_C(t) = V_\\infty(1 - e^{-t/\\tau})$. Solve for 95%: $1 - e^{-t/\\tau} = 0.95 \\Rightarrow e^{-t/\\tau} = 0.05 \\Rightarrow t/\\tau = -\\ln 0.05 = 2.996$.",
          s: [
            "$1 - e^{-3} = 1 - 0.0498 = 0.9502$ → 95.02%, essentially $3\\tau$."
          ],
          a: "$\\approx 3\\tau$",
          v: "Milestones: $1\\tau$: 63.2%, $2\\tau$: 86.5%, $3\\tau$: 95%, $5\\tau$: 99.3%."
        }),
        ref: "Handbook p.358" },
      { q: "Three resistors 10Ω, 20Ω, 30Ω in parallel. Equivalent R:",
        choices: ["$\\approx 5.45\\ \\Omega$", "$60\\ \\Omega$", "$10\\ \\Omega$", "$20\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "$\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dfrac{1}{R_3}$.",
          s: [
            "Find common denominator (60): $1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60$.",
            "$R_{eq} = 60/11 \\approx 5.455\\ \\Omega$."
          ],
          a: "$R_{eq} \\approx 5.45\\ \\Omega$",
          v: "Always less than smallest individual R (10Ω) — characteristic of parallel."
        }),
        ref: "Handbook p.356" },
      { q: "5 V DC source feeds 10 Ω. Power dissipated:",
        choices: ["$2.5$ W", "$50$ W", "$0.5$ W", "$5$ W"],
        correct: 0,
        solution: S({
          c: "$P = V^2/R$ for a single resistor across known V.",
          s: ["$P = 5^2 / 10 = 25/10 = 2.5$ W."],
          a: "$P = 2.5$ W",
          v: "Verify: $I = 5/10 = 0.5$ A; $P = VI = 5(0.5) = 2.5$ W ✓"
        }),
        ref: "Handbook p.356" },
      { q: "AC voltage $v(t) = 50\\cos(377t + 30°)$ V. Frequency in Hz:",
        choices: ["$60$ Hz", "$377$ Hz", "$50$ Hz", "$30$ Hz"],
        correct: 0,
        solution: S({
          c: "$\\omega = 2\\pi f \\Rightarrow f = \\omega/(2\\pi)$.",
          s: ["$f = 377/(2\\pi) = 60$ Hz (US power line)."],
          a: "$f = 60$ Hz",
          v: "377 rad/s is the magic number for 60 Hz; 314 rad/s is for 50 Hz (EU)."
        }),
        ref: "Handbook p.360" },
      { q: "Effective (RMS) value of $v(t) = 20\\cos(\\omega t) + 10$ V (sinusoid + DC offset):",
        choices: ["$\\approx 17.32$ V", "$30$ V", "$\\approx 14.14$ V", "$\\approx 22.36$ V"],
        correct: 0,
        solution: S({
          c: "For sum: $V_{RMS} = \\sqrt{V_{DC}^2 + V_{AC,RMS}^2}$.",
          s: [
            "AC RMS: $20/\\sqrt{2} = 14.14$ V.",
            "DC: 10 V.",
            "$V_{RMS} = \\sqrt{14.14^2 + 10^2} = \\sqrt{200 + 100} = \\sqrt{300} \\approx 17.32$ V."
          ],
          a: "$V_{RMS} \\approx 17.32$ V",
          v: "Power dissipated in R is $V_{RMS}^2/R$ regardless of DC/AC split."
        }),
        ref: "Handbook p.360" },
      { q: "Norton current source $I_N = 3$ A, $R_N = 6\\ \\Omega$. Converting to Thevenin: $V_{Th}$ and $R_{Th}$:",
        choices: ["$V_{Th} = 18$ V, $R_{Th} = 6\\ \\Omega$", "$V_{Th} = 3$ V, $R_{Th} = 6\\ \\Omega$", "$V_{Th} = 18$ V, $R_{Th} = 0.5\\ \\Omega$", "$V_{Th} = 0.5$ V, $R_{Th} = 6\\ \\Omega$"],
        correct: 0,
        solution: S({
          c: "Source transformation: $V_{Th} = I_N \\cdot R_N$. $R_{Th} = R_N$.",
          s: [
            "$V_{Th} = 3 \\cdot 6 = 18$ V.",
            "$R_{Th} = 6\\ \\Omega$."
          ],
          a: "$V_{Th} = 18$ V, $R_{Th} = 6\\ \\Omega$",
          v: "Test: short circuit gives $V_{Th}/R_{Th} = 3$ A = $I_N$ ✓"
        }),
        ref: "Handbook p.357" },
      { q: "An inductor has $V = L(di/dt)$. If $L=2$ mH and current rises 4 A in 100 µs, voltage across:",
        choices: ["$80$ V", "$8$ V", "$200$ mV", "$0.5$ V"],
        correct: 0,
        solution: S({
          c: "$V_L = L \\cdot di/dt$.",
          s: [
            "$di/dt = 4 / 100\\times 10^{-6} = 4 \\times 10^4$ A/s.",
            "$V_L = (2\\times 10^{-3})(4\\times 10^4) = 80$ V."
          ],
          a: "$V_L = 80$ V",
          v: "Faster current change → larger inductor voltage. Why interrupting inductive loads creates voltage spikes."
        }),
        ref: "Handbook p.358" },
      { q: "Energy stored in 100 µF capacitor at 200 V:",
        choices: ["$2$ J", "$20$ mJ", "$10$ J", "$0.04$ J"],
        correct: 0,
        solution: S({
          c: "$W = \\frac{1}{2}CV^2$.",
          s: ["$W = 0.5 \\cdot 10^{-4} \\cdot 40000 = 0.5 \\cdot 4 = 2$ J."],
          a: "$W = 2$ J",
          v: "Enough to give an unpleasant shock. Discharge caps before servicing!"
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
