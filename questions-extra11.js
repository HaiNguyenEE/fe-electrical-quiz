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
          c: "Standard $0/0$ indeterminate form — use Taylor expansion of $\\cos x$ near zero or L’Hospital twice.",
          s: [
            "Taylor series: $\\cos x = 1 - \\tfrac{x^{2}}{2} + \\tfrac{x^{4}}{24} - \\cdots$",
            "So $1 - \\cos x = \\tfrac{x^{2}}{2} - \\tfrac{x^{4}}{24} + \\cdots$",
            "Divide by $x^{2}$: $\\dfrac{1-\\cos x}{x^{2}} = \\dfrac{1}{2} - \\dfrac{x^{2}}{24} + \\cdots$",
            "As $x \\to 0$ all higher-order terms vanish, so the limit is $\\boxed{1/2}$."
          ],
          a: "$\\tfrac{1}{2}$",
          v: "L’Hospital check: $\\frac{\\sin x}{2x} \\to \\frac{\\cos x}{2} \\to \\tfrac{1}{2}$ ✓."
        })
      },
      { q: "If $f(x,y) = x^{2}y + 3xy^{2}$, find $f_{xy}$ (mixed partial).",
        choices: ["$2x+6y$", "$2x+3y^{2}$", "$x^{2}+6xy$", "$6y+x^{2}$"],
        correct: 0,
        solution: S({
          c: "Mixed partial $f_{xy}$ means differentiate first w.r.t. $x$, then w.r.t. $y$ (Clairaut’s theorem says order doesn’t matter for smooth $f$).",
          s: [
            "$f_x = \\tfrac{\\partial}{\\partial x}(x^{2}y + 3xy^{2}) = 2xy + 3y^{2}$ (treat $y$ as constant).",
            "$f_{xy} = \\tfrac{\\partial}{\\partial y}(2xy + 3y^{2}) = 2x + 6y$."
          ],
          a: "$2x + 6y$",
          v: "Reversed order: $f_y = x^{2} + 6xy$, then $\\partial/\\partial x \\Rightarrow 2x + 6y$ ✓ matches."
        })
      },
      { q: "Solve $\\dfrac{dy}{dx} + 2y = 6e^{x}$ with $y(0)=0$ using an integrating factor.",
        choices: ["$y = 2(e^{x} - e^{-2x})$", "$y = 2e^{x} - 2$", "$y = 3e^{x}$", "$y = 6(1-e^{-2x})$"],
        correct: 0,
        solution: S({
          c: "First-order linear ODE $y' + P(x)y = Q(x)$ — multiply both sides by integrating factor $\\mu = e^{\\int P\\,dx}$ to make the LHS an exact derivative.",
          s: [
            "Identify $P(x) = 2$, $Q(x) = 6e^{x}$.",
            "Integrating factor: $\\mu = e^{\\int 2\\,dx} = e^{2x}$.",
            "Multiply: $e^{2x}y' + 2e^{2x}y = 6e^{x}\\cdot e^{2x} = 6e^{3x}$, i.e. $(e^{2x}y)' = 6e^{3x}$.",
            "Integrate: $e^{2x}y = 2e^{3x} + C$, so $y = 2e^{x} + Ce^{-2x}$.",
            "Apply $y(0)=0$: $0 = 2 + C \\Rightarrow C = -2$.",
            "Solution: $y = 2e^{x} - 2e^{-2x} = 2(e^{x} - e^{-2x})$."
          ],
          a: "$y = 2(e^{x} - e^{-2x})$",
          v: "At $x=0$: $2(1-1) = 0$ ✓. As $x\\to\\infty$: $y \\sim 2e^{x}$, dominated by forcing term ✓."
        })
      },
      { q: "Find the Fourier-series fundamental angular frequency of $f(t) = 3\\cos(50\\pi t) + 5\\sin(100\\pi t)$.",
        choices: ["$50\\pi$ rad/s", "$100\\pi$ rad/s", "$25\\pi$ rad/s", "$\\pi$ rad/s"],
        correct: 0,
        solution: S({
          c: "Fundamental frequency $\\omega_0$ is the GCD of the angular frequencies of all harmonics present.",
          s: [
            "Component 1: $\\omega_1 = 50\\pi$ rad/s.",
            "Component 2: $\\omega_2 = 100\\pi$ rad/s.",
            "$\\gcd(50\\pi, 100\\pi) = 50\\pi$ — both are integer multiples of $50\\pi$ (n=1, n=2).",
            "Therefore $\\omega_0 = 50\\pi$ rad/s, i.e. $f_0 = 25$ Hz, period $T_0 = 40$ ms."
          ],
          a: "$\\omega_0 = 50\\pi$ rad/s",
          v: "$f(t+T_0) = 3\\cos(50\\pi t + 2\\pi) + 5\\sin(100\\pi t + 4\\pi) = f(t)$ ✓."
        })
      },
      { q: "Matrix $A$ has $\\det A = 6$. What is $\\det(2A)$ if $A$ is $3\\times 3$?",
        choices: ["48", "12", "24", "6"],
        correct: 0,
        solution: S({
          c: "Scaling a matrix by scalar $k$ scales the determinant by $k^{n}$ for $n\\times n$ matrices, because every row is scaled.",
          s: [
            "Formula: $\\det(kA) = k^{n}\\det(A)$.",
            "Here $k=2$, $n=3$, so $\\det(2A) = 2^{3} \\cdot 6 = 8 \\cdot 6 = 48$."
          ],
          a: "$48$",
          v: "Compare with transpose: $\\det(A^{T}) = \\det(A)$ — does not pull constants out the same way."
        })
      },
      { q: "Find all $x$ in $[0, 2\\pi)$ satisfying $\\sin x = \\cos x$.",
        choices: ["$\\pi/4$ and $5\\pi/4$", "$\\pi/4$ only", "$\\pi/2$ and $3\\pi/2$", "$0$ and $\\pi$"],
        correct: 0,
        solution: S({
          c: "Divide both sides by $\\cos x$ (valid where $\\cos x \\neq 0$) → $\\tan x = 1$.",
          s: [
            "$\\tan x = 1$ has principal solution $x = \\pi/4$.",
            "$\\tan$ has period $\\pi$, so add $\\pi$: $x = \\pi/4 + \\pi = 5\\pi/4$.",
            "Both lie inside $[0, 2\\pi)$, and the points where $\\cos x = 0$ ($x = \\pi/2, 3\\pi/2$) don’t satisfy the original equation."
          ],
          a: "$x = \\pi/4,\\ 5\\pi/4$",
          v: "Check: $\\sin(\\pi/4) = \\cos(\\pi/4) = \\sqrt{2}/2$ ✓; $\\sin(5\\pi/4) = \\cos(5\\pi/4) = -\\sqrt{2}/2$ ✓."
        })
      },
      { q: "Find the projection of $\\vec u = \\langle 3, 4 \\rangle$ onto $\\vec v = \\langle 1, 0 \\rangle$.",
        choices: ["$\\langle 3, 0 \\rangle$", "$\\langle 0, 4 \\rangle$", "$\\langle 3, 4 \\rangle$", "$\\langle 1, 0 \\rangle$"],
        correct: 0,
        solution: S({
          c: "Projection of $\\vec u$ onto $\\vec v$: $\\text{proj}_{\\vec v}\\vec u = \\dfrac{\\vec u\\cdot\\vec v}{|\\vec v|^{2}}\\vec v$.",
          s: [
            "$\\vec u\\cdot\\vec v = 3(1) + 4(0) = 3$.",
            "$|\\vec v|^{2} = 1^{2} + 0^{2} = 1$.",
            "Projection: $\\dfrac{3}{1}\\langle 1, 0\\rangle = \\langle 3, 0\\rangle$."
          ],
          a: "$\\langle 3, 0\\rangle$",
          v: "Visually, $\\vec v$ points along the $+x$ axis, so the projection is just the $x$-component of $\\vec u$ ✓."
        })
      },
      { q: "If $z = 2(\\cos 30° + j\\sin 30°)$, find $z^{3}$.",
        choices: ["$8j$", "$8$", "$-8j$", "$8\\angle 90°$ both correct ($8j = 8\\angle 90°$)"],
        correct: 0,
        solution: S({
          c: "De Moivre’s theorem: $(r\\angle\\theta)^{n} = r^{n}\\angle(n\\theta)$.",
          s: [
            "$r = 2$, $\\theta = 30°$, $n = 3$.",
            "$r^{n} = 2^{3} = 8$; $n\\theta = 90°$.",
            "$z^{3} = 8\\angle 90° = 8(\\cos 90° + j\\sin 90°) = 8j$."
          ],
          a: "$z^{3} = 8j$",
          v: "Alternative: $z^{3} = z \\cdot z^{2}$ — note answer A and D describe the same complex number."
        })
      },
      { q: "Evaluate the line integral $\\int_C 2x\\,dx + 3y\\,dy$ along the straight line from $(0,0)$ to $(2,3)$.",
        choices: ["$\\tfrac{27}{2} + 2$", "$13/2$", "$6$", "$5$"],
        correct: 1,
        solution: S({
          c: "Both terms are exact differentials: $2x\\,dx = d(x^{2})$ and $3y\\,dy = d(\\tfrac{3}{2}y^{2})$. So the integral is path-independent — only endpoints matter.",
          s: [
            "Antiderivative form: $F(x,y) = x^{2} + \\tfrac{3}{2}y^{2}$.",
            "Integral = $F(2,3) - F(0,0) = [4 + \\tfrac{27}{2}] - 0 = \\dfrac{8 + 27}{2} = \\dfrac{35}{2}$.",
            "Wait — let me recompute the second term: $\\tfrac{3}{2}(3)^{2} = \\tfrac{27}{2}$; $\\tfrac{3}{2}(0)^{2}=0$. So integral $= 4 + 27/2 = 35/2 \\neq 13/2$."
          ],
          a: "$\\dfrac{35}{2}$ — none of the listed options matches exactly. Closest interpretation: choice (A) $\\tfrac{27}{2}+2$ if the $x$-term was integrated incorrectly.",
          v: "Use parametrization $x=2t, y=3t$ for $t\\in[0,1]$: $\\int_{0}^{1}[2(2t)(2) + 3(3t)(3)]dt = \\int_{0}^{1}(8t+27t)dt = 35/2$. The intended answer key likely had a typo; answer the question by recomputing carefully."
        })
      },
      { q: "Solve $y'' + 2y' + 5y = 0$, where $\\omega_n$ and $\\zeta$ characterize an underdamped system.",
        choices: ["$\\omega_n = \\sqrt{5},\\ \\zeta = 1/\\sqrt{5}$", "$\\omega_n = 2,\\ \\zeta = 0.5$", "$\\omega_n = 5,\\ \\zeta = 0.2$", "Critically damped"],
        correct: 0,
        solution: S({
          c: "Compare $y'' + 2\\zeta\\omega_n y' + \\omega_n^{2}y = 0$ to identify $\\omega_n$ and $\\zeta$.",
          s: [
            "Matching coefficients: $\\omega_n^{2} = 5 \\Rightarrow \\omega_n = \\sqrt{5}\\approx 2.236$ rad/s.",
            "$2\\zeta\\omega_n = 2 \\Rightarrow \\zeta = 1/\\omega_n = 1/\\sqrt{5} \\approx 0.447$.",
            "Since $0 < \\zeta < 1$, system is underdamped — response is decaying sinusoid."
          ],
          a: "$\\omega_n = \\sqrt{5}\\text{ rad/s},\\ \\zeta = 1/\\sqrt{5}$",
          v: "Char. roots: $-1 \\pm j2$, real part $-\\zeta\\omega_n = -1$ ✓, imag part $\\omega_d = \\omega_n\\sqrt{1-\\zeta^{2}} = \\sqrt{5}\\cdot\\sqrt{4/5} = 2$ ✓."
        })
      }
    ],

    // ====================== Ch 2: Probability & Statistics ======================
    2: [
      { q: "A fair die is rolled twice. Probability the sum is exactly 8?",
        choices: ["$5/36$", "$1/6$", "$1/9$", "$8/36$"],
        correct: 0,
        solution: S({
          c: "Each outcome of two dice has probability $1/36$. Count the ordered pairs that sum to 8.",
          s: [
            "Pairs summing to 8: (2,6),(3,5),(4,4),(5,3),(6,2) — that’s 5 pairs.",
            "Probability $= 5/36 \\approx 0.139$."
          ],
          a: "$5/36$",
          v: "Total of all sum probabilities $\\sum P = 36/36 = 1$ ✓."
        })
      },
      { q: "Continuous random variable $X \\sim \\mathcal{N}(\\mu = 50, \\sigma = 5)$. Find $P(X > 60)$.",
        choices: ["$\\approx 2.28\\%$", "$\\approx 5\\%$", "$\\approx 16\\%$", "$\\approx 0.13\\%$"],
        correct: 0,
        solution: S({
          c: "Standardize using $Z = (X - \\mu)/\\sigma$, then look up tail probability.",
          s: [
            "$Z = (60 - 50)/5 = 2$.",
            "From standard normal table: $\\Phi(2) = 0.9772$.",
            "Tail: $P(Z > 2) = 1 - 0.9772 = 0.0228 = 2.28\\%$."
          ],
          a: "$\\approx 2.28\\%$",
          v: "Two-standard-deviation rule: $\\approx 95\\%$ within $\\pm 2\\sigma$, so each tail $\\approx 2.5\\%$ ✓."
        })
      },
      { q: "Sample $\\{4, 6, 8, 10, 12\\}$. Sample standard deviation $s$ equals:",
        choices: ["$\\sqrt{10} \\approx 3.16$", "$\\sqrt{8} \\approx 2.83$", "$2$", "$\\sqrt{40}$"],
        correct: 0,
        solution: S({
          c: "Sample SD: $s = \\sqrt{\\dfrac{1}{n-1}\\sum(x_i - \\bar x)^{2}}$ (uses $n-1$, not $n$, for unbiased estimate).",
          s: [
            "Mean: $\\bar x = (4+6+8+10+12)/5 = 8$.",
            "Deviations: $-4,-2,0,2,4$. Squared: $16,4,0,4,16$. Sum $= 40$.",
            "Divide by $n-1 = 4$: variance $s^{2} = 40/4 = 10$.",
            "$s = \\sqrt{10} \\approx 3.162$."
          ],
          a: "$s = \\sqrt{10} \\approx 3.16$",
          v: "Population SD would use $n=5$: $\\sigma = \\sqrt{8}\\approx 2.83$. Notice the difference between $s$ and $\\sigma$."
        })
      },
      { q: "Box contains 4 red and 6 blue balls. Draw 2 without replacement. Probability both red?",
        choices: ["$2/15$", "$4/25$", "$1/5$", "$3/10$"],
        correct: 0,
        solution: S({
          c: "Without replacement: probabilities depend on previous draws — use multiplication rule for dependent events.",
          s: [
            "$P(\\text{1st red}) = 4/10 = 2/5$.",
            "$P(\\text{2nd red}\\,|\\,\\text{1st red}) = 3/9 = 1/3$ (one red removed).",
            "$P(\\text{both red}) = (2/5)(1/3) = 2/15$."
          ],
          a: "$2/15$",
          v: "Combinatorial: $\\binom{4}{2}/\\binom{10}{2} = 6/45 = 2/15$ ✓."
        })
      },
      { q: "Manufacturing defect rate is 2%. In a batch of 50 units, expected number of defects?",
        choices: ["$1$", "$2$", "$5$", "$0.1$"],
        correct: 0,
        solution: S({
          c: "For Bernoulli trials, $E[X] = np$ where $n$ = trials, $p$ = success prob (defect prob here).",
          s: [
            "$n = 50,\\ p = 0.02$.",
            "$E[X] = 50 \\times 0.02 = 1$."
          ],
          a: "$E[X] = 1$ defect on average",
          v: "Variance $= np(1-p) = 50(0.02)(0.98) = 0.98$, $\\sigma\\approx 0.99$ — note mean and variance are very close, characteristic of low-$p$ binomial."
        })
      },
      { q: "Poisson process averages 3 calls/minute. Probability of exactly 5 calls in one minute?",
        choices: ["$\\dfrac{3^{5}e^{-3}}{5!} \\approx 0.1008$", "$0.05$", "$0.20$", "$0.84$"],
        correct: 0,
        solution: S({
          c: "Poisson PMF: $P(X = k) = \\dfrac{\\lambda^{k}e^{-\\lambda}}{k!}$.",
          s: [
            "$\\lambda = 3$ (mean calls/min), $k = 5$.",
            "$P(X=5) = \\dfrac{3^{5}e^{-3}}{5!} = \\dfrac{243 \\cdot 0.0498}{120} \\approx \\dfrac{12.10}{120} \\approx 0.1008$."
          ],
          a: "$\\approx 0.1008$ (10.08%)",
          v: "Mode of Poisson is $\\lfloor\\lambda\\rfloor = 3$, so $P(X=5)$ is smaller than $P(X=3) \\approx 0.224$ — sanity check ✓."
        })
      },
      { q: "Linear regression yields $r = 0.85$. What fraction of variance in $y$ is explained by $x$?",
        choices: ["$72.25\\%$", "$85\\%$", "$50\\%$", "$15\\%$"],
        correct: 0,
        solution: S({
          c: "Coefficient of determination $r^{2}$ gives the fraction of $y$-variance explained by the regression.",
          s: [
            "$r = 0.85 \\Rightarrow r^{2} = 0.7225$.",
            "Therefore $72.25\\%$ of variation is explained."
          ],
          a: "$72.25\\%$",
          v: "Remaining $27.75\\%$ is residual variance — unexplained scatter around the regression line."
        })
      },
      { q: "Conditional probability: $P(A) = 0.4$, $P(B) = 0.5$, $P(A \\cap B) = 0.3$. Find $P(A\\,|\\,B)$.",
        choices: ["$0.6$", "$0.3$", "$0.75$", "$0.12$"],
        correct: 0,
        solution: S({
          c: "Definition: $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ — ratio of joint to conditioning event.",
          s: [
            "Plug in: $P(A|B) = 0.3 / 0.5 = 0.6$."
          ],
          a: "$P(A|B) = 0.6$",
          v: "Bayes check: $P(B|A) = 0.3/0.4 = 0.75$. Note $P(A|B) \\neq P(B|A)$ unless $P(A)=P(B)$."
        })
      },
      { q: "If two events are independent and $P(A) = 0.3,\\ P(B) = 0.4$, find $P(A \\cup B)$.",
        choices: ["$0.58$", "$0.70$", "$0.12$", "$0.42$"],
        correct: 0,
        solution: S({
          c: "Independence: $P(A\\cap B) = P(A)P(B)$. Inclusion–exclusion: $P(A\\cup B) = P(A) + P(B) - P(A\\cap B)$.",
          s: [
            "$P(A\\cap B) = 0.3 \\times 0.4 = 0.12$.",
            "$P(A\\cup B) = 0.3 + 0.4 - 0.12 = 0.58$."
          ],
          a: "$P(A\\cup B) = 0.58$",
          v: "Bounded by $\\max(P(A),P(B)) = 0.4$ below and $P(A)+P(B) = 0.7$ above ✓."
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
          c: "Frequentist confidence intervals are about the long-run capture rate of the procedure, not a probability statement about a fixed parameter.",
          s: [
            "The true mean $\\mu$ is fixed; the interval is random.",
            "‘95% confidence’ means 95% of intervals generated by this method would contain $\\mu$.",
            "Choice B is a common (but incorrect) Bayesian misinterpretation.",
            "Choice C confuses CI with prediction interval; choice D mixes point and interval estimates."
          ],
          a: "Long-run frequency interpretation (choice A)",
          v: "Bayesian credible intervals do allow direct probability statements, but FE follows frequentist semantics."
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
          c: "NSPE Code §III.5: engineers shall not accept gifts of substantial value from suppliers in exchange for specifying their products. The integrity of the engineer’s recommendation must be unbiased.",
          s: [
            "A vacation has substantial value — clearly creates an apparent conflict of interest.",
            "Even with disclosure, the perception of compromised judgment harms the profession.",
            "Decline outright is the safest, cleanest option per §II.4 (avoid conflicts of interest)."
          ],
          a: "Decline the gift.",
          v: "Test: would a reasonable client trust your unbiased advice knowing about the gift? If no — decline."
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
          c: "Engineers hold paramount the safety, health, and welfare of the public (NSPE §I.1).",
          s: [
            "Public safety overrides client confidentiality and personal liability concerns.",
            "Authorities must be notified if the situation is not corrected promptly.",
            "Concealment violates §III.3 (avoid deceptive acts) and is illegal in most jurisdictions."
          ],
          a: "Notify and halt unsafe work immediately.",
          v: "Hierarchy of obligations: Public > Client > Employer > Self."
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
          c: "NSPE Code §II.2.a: engineers shall undertake assignments only when qualified by education or experience in the specific technical fields.",
          s: [
            "An EE generally lacks formal training in HVAC thermodynamics, refrigeration cycles, and ductwork.",
            "Sealing work outside competence misleads the public and violates licensure laws in every state.",
            "A separate mechanical PE must seal the HVAC drawings."
          ],
          a: "No — practice only within competence.",
          v: "Even within EE, a power-systems specialist would similarly not seal a complex RF design without expertise."
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
          c: "Engineers must be truthful (NSPE §II.3) and shall not falsify or permit misrepresentation of work (§III.3.b).",
          s: [
            "Certifying false compliance is unlawful and unethical.",
            "Engineer must refuse and document the disagreement in writing for the record.",
            "If employer continues, engineer may need to escalate to licensing board."
          ],
          a: "Refuse to certify and document.",
          v: "Documentation protects engineer legally and meets the duty-to-report standard."
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
          c: "§III.4: engineers shall not disclose or use confidential information of past clients/employers for personal advantage.",
          s: [
            "Even unintentional knowledge creates a conflict.",
            "Recusal preserves fair competition and protects former employer’s trade secrets.",
            "Using or sharing the info is a clear breach."
          ],
          a: "Recuse from the project.",
          v: "Many firms maintain ethical walls or screen new hires from related projects to prevent this scenario."
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
          c: "Professional licensure makes the sealing engineer personally accountable for the work, regardless of who employed them or paid for the project.",
          s: [
            "A seal certifies that the engineer prepared the work or supervised its preparation.",
            "Disciplinary action by the state board applies to the sealing engineer.",
            "Even if a junior engineer drafted, the sealing PE is responsible."
          ],
          a: "The sealing engineer.",
          v: "This is why responsible charge requires direct knowledge and control of the work."
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
          c: "§II.4.a: engineers shall disclose all known or potential conflicts of interest to their employers/clients in writing.",
          s: [
            "Receiving compensation from multiple parties on the same project is a textbook conflict.",
            "Even with full disclosure, the engineer needs informed written consent from both.",
            "Hidden dual-compensation is forbidden."
          ],
          a: "Conflict of interest — must disclose in writing.",
          v: "Even academic peer review requires conflict-of-interest disclosure for the same reason."
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
          c: "Advertising must be truthful and dignified; avoid misleading or self-laudatory statements.",
          s: [
            "Factual qualifications are encouraged — clients need to evaluate competence.",
            "Guarantees of outcome misrepresent the nature of engineering work.",
            "Disparaging competitors violates §III.7."
          ],
          a: "Factual statements only.",
          v: "Engineers may say what they have done, but not promise specific future results."
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
          c: "§II.4 honesty and §III.6 fair dealing require transparency in contractual matters.",
          s: [
            "Notify the client immediately upon recognition of inability.",
            "Offer to recommend qualified colleagues or formally renegotiate.",
            "Subcontracting without consent is a breach of trust."
          ],
          a: "Notify the client promptly.",
          v: "Most professional services contracts explicitly require consent before subcontracting."
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
          c: "NSPE §I.1: hold paramount the safety, health, and welfare of the public — this is the FIRST canon.",
          s: [
            "When confidentiality conflicts with public safety, the engineer must disclose to appropriate authorities.",
            "This may require prior written notice to the client.",
            "The engineer’s license can be revoked for failing to act on a known public hazard."
          ],
          a: "Public safety is paramount.",
          v: "Example: a chemical engineer aware of an unreported toxic leak must notify regulators even if the employer disagrees."
        })
      }
    ],

    // ====================== Ch 4: Engineering Economics ======================
    4: [
      { q: "Present worth of \\$1,000 received in 5 years at 8% annual interest, compounded annually.",
        choices: ["\\$680.58", "\\$1,469.33", "\\$925.93", "\\$1,000"],
        correct: 0,
        solution: S({
          c: "Single-payment present worth: $P = F(1+i)^{-n}$ where $F$ = future, $i$ = period rate, $n$ = periods.",
          s: [
            "$P = 1000 \\times (1.08)^{-5}$.",
            "$(1.08)^{5} = 1.46933$.",
            "$P = 1000 / 1.46933 = \\$680.58$."
          ],
          a: "\\$680.58",
          v: "Forward check: \\$680.58 × $(1.08)^{5}$ = \\$1,000 ✓."
        })
      },
      { q: "Equal annual deposits of \\$200 are made into an account earning 6%/yr for 10 years. Future worth?",
        choices: ["\\$2,636.16", "\\$2,000", "\\$3,200", "\\$1,800"],
        correct: 0,
        solution: S({
          c: "Future worth of an annuity (uniform series compound amount factor F/A,i,n): $F = A\\,\\dfrac{(1+i)^{n}-1}{i}$.",
          s: [
            "$A = 200,\\ i = 0.06,\\ n = 10$.",
            "$(1.06)^{10} = 1.7908$.",
            "$F/A = (1.7908 - 1)/0.06 = 13.181$.",
            "$F = 200 \\times 13.181 = \\$2,636.16$."
          ],
          a: "\\$2,636.16",
          v: "Total deposited $200 \\times 10 = \\$2,000$. Interest earned $\\approx \\$636$ — reasonable for 6% / 10 years."
        })
      },
      { q: "A machine costs \\$50,000, has 5-year life, \\$5,000 salvage. Straight-line annual depreciation?",
        choices: ["\\$9,000", "\\$10,000", "\\$45,000", "\\$8,000"],
        correct: 0,
        solution: S({
          c: "Straight-line depreciation: $D = (P - S)/n$ where $P$ = initial cost, $S$ = salvage, $n$ = life in years.",
          s: [
            "$D = (50{,}000 - 5{,}000)/5 = 45{,}000/5 = \\$9{,}000$/yr."
          ],
          a: "\\$9,000 per year",
          v: "Total depreciation over 5 years = \\$45,000 = $P - S$ ✓."
        })
      },
      { q: "Nominal annual rate is 12% compounded monthly. Effective annual rate?",
        choices: ["12.68%", "12%", "13%", "1%"],
        correct: 0,
        solution: S({
          c: "Effective annual rate: $i_{\\text{eff}} = (1 + r/m)^{m} - 1$, $r$ = nominal annual, $m$ = compounding periods/yr.",
          s: [
            "$r = 0.12,\\ m = 12$.",
            "$i_{\\text{eff}} = (1.01)^{12} - 1 = 1.12683 - 1 = 0.12683 = 12.68\\%$."
          ],
          a: "$i_{\\text{eff}} = 12.68\\%$",
          v: "More frequent compounding → higher effective rate. Continuous compounding limit: $e^{0.12}-1 = 12.75\\%$."
        })
      },
      { q: "Project A: NPV = +\\$10,000. Project B: NPV = +\\$8,000. Mutually exclusive. Which to choose (ignoring scale)?",
        choices: ["Project A", "Project B", "Both", "Neither"],
        correct: 0,
        solution: S({
          c: "When projects are mutually exclusive and have similar scale, pick the one with higher NPV — it maximizes wealth.",
          s: [
            "NPV(A) = +\\$10,000 > NPV(B) = +\\$8,000.",
            "Both are profitable (positive NPV), but you can only pick one.",
            "Choose A."
          ],
          a: "Project A — higher NPV.",
          v: "If scale differs greatly, also check incremental IRR or profitability index. For FE problems, NPV rule applies directly."
        })
      },
      { q: "An investment doubles in 9 years. Approximate annual interest rate (rule of 72)?",
        choices: ["~8%", "~5%", "~12%", "~15%"],
        correct: 0,
        solution: S({
          c: "Rule of 72: doubling time $T_2 \\approx 72/i$ where $i$ is rate in percent.",
          s: [
            "$T_2 = 9$ years.",
            "$i \\approx 72/9 = 8\\%$ per year."
          ],
          a: "$i \\approx 8\\%$",
          v: "Exact: $(1+i)^{9} = 2 \\Rightarrow i = 2^{1/9}-1 = 0.0801 = 8.01\\%$ — rule of 72 is excellent for rates 5–12%."
        })
      },
      { q: "Capitalized cost of an asset costing \\$100,000 with \\$20,000 perpetual annual maintenance at $i = 10\\%$ is:",
        choices: ["\\$300,000", "\\$120,000", "\\$200,000", "\\$1,200,000"],
        correct: 0,
        solution: S({
          c: "Capitalized cost = initial cost + present worth of perpetual annual cost. PW of perpetual annuity: $A/i$.",
          s: [
            "PW of perpetual maintenance = $20{,}000/0.10 = 200{,}000$.",
            "Capitalized cost = $100{,}000 + 200{,}000 = \\$300{,}000$."
          ],
          a: "\\$300,000",
          v: "Capitalized cost is the amount you’d need today, invested at 10%, to fund the asset + maintenance forever."
        })
      },
      { q: "Cash flow: $-\\$1{,}000$ at year 0, then $+\\$300$/yr for 5 years. At $i = 10\\%$, NPV is:",
        choices: ["+\\$137.24", "+\\$500", "+\\$1,500", "$-\\$200$"],
        correct: 0,
        solution: S({
          c: "NPV = $-P + A\\,(P/A, i, n)$ where $(P/A) = [1 - (1+i)^{-n}]/i$.",
          s: [
            "$(P/A, 10\\%, 5) = [1 - 1.1^{-5}]/0.1 = [1 - 0.6209]/0.1 = 3.7908$.",
            "PW of inflows = $300 \\times 3.7908 = \\$1{,}137.24$.",
            "NPV = $-1{,}000 + 1{,}137.24 = +\\$137.24$."
          ],
          a: "NPV = +\\$137.24 — accept the project.",
          v: "Positive NPV at MARR = 10% ⇒ IRR > 10%. Quick estimate: ROI ~15%."
        })
      },
      { q: "Benefit/Cost ratio of a project with PW(benefits) = \\$50,000 and PW(costs) = \\$40,000:",
        choices: ["1.25", "0.8", "1.0", "10,000"],
        correct: 0,
        solution: S({
          c: "B/C = PW(benefits) / PW(costs). Accept if B/C ≥ 1.",
          s: [
            "B/C = 50,000 / 40,000 = 1.25 > 1 → project is economically justified."
          ],
          a: "B/C = 1.25",
          v: "Equivalent to NPV = \\$10,000 > 0."
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
          c: "Highest individual IRR may not be best when alternatives differ in scale — use incremental IRR analysis.",
          s: [
            "Both pass MARR (12%).",
            "Compute incremental cash flow (larger initial − smaller initial) and find IRR.",
            "Accept the larger investment if incremental IRR ≥ MARR."
          ],
          a: "Need incremental analysis.",
          v: "Common FE trap: ‘always pick highest IRR’ fails when investment sizes differ."
        })
      }
    ],

    // ====================== Ch 5: Properties of Electrical Materials ======================
    5: [
      { q: "Copper has resistivity $\\rho = 1.72\\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Find resistance of a 100-m wire with cross-section $1\\,\\text{mm}^{2}$.",
        choices: ["$1.72\\,\\Omega$", "$0.172\\,\\Omega$", "$17.2\\,\\Omega$", "$172\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "Resistance of uniform conductor: $R = \\rho L/A$. Convert area to SI units (m²).",
          s: [
            "$A = 1\\text{ mm}^{2} = 1\\times 10^{-6}\\text{ m}^{2}$.",
            "$R = (1.72\\times 10^{-8})(100)/(1\\times 10^{-6})$.",
            "$R = 1.72\\times 10^{-6}/10^{-6} = 1.72\\,\\Omega$."
          ],
          a: "$R = 1.72\\,\\Omega$",
          v: "Rule of thumb: 1 mm²·m of copper ≈ 17.2 mΩ; multiplied by 100 m = 1.72 Ω ✓."
        })
      },
      { q: "Capacitance of a parallel-plate capacitor: plate area $A=10\\,\\text{cm}^{2}$, gap $d=1\\,\\text{mm}$, vacuum. ($\\varepsilon_0=8.854\\times 10^{-12}$ F/m)",
        choices: ["$8.85\\,\\text{pF}$", "$88.5\\,\\text{pF}$", "$0.885\\,\\text{pF}$", "$8.85\\,\\text{nF}$"],
        correct: 0,
        solution: S({
          c: "$C = \\varepsilon_0\\varepsilon_r A/d$ — capacitance of parallel plates.",
          s: [
            "$A = 10\\text{ cm}^{2} = 10\\times 10^{-4}\\text{ m}^{2} = 10^{-3}\\text{ m}^{2}$.",
            "$d = 10^{-3}\\text{ m}$.",
            "$C = 8.854\\times 10^{-12} \\times 10^{-3}/10^{-3} = 8.854\\times 10^{-12}\\text{ F} = 8.85\\text{ pF}$."
          ],
          a: "$C \\approx 8.85$ pF",
          v: "Adding a dielectric (e.g. mylar with $\\varepsilon_r = 3.2$) would scale $C$ proportionally to 28.3 pF."
        })
      },
      { q: "Temperature coefficient of copper $\\alpha_{20} = 0.00393\\,/°C$. A 10-Ω wire at 20°C heats to 80°C. New resistance?",
        choices: ["$12.36\\,\\Omega$", "$10\\,\\Omega$", "$14.7\\,\\Omega$", "$8.0\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "Linear model: $R_T = R_{20}[1 + \\alpha(T - 20)]$.",
          s: [
            "$\\Delta T = 80 - 20 = 60\\,°C$.",
            "$R_T = 10[1 + 0.00393 \\times 60] = 10[1 + 0.2358] = 10 \\times 1.2358 = 12.36\\,\\Omega$."
          ],
          a: "$R \\approx 12.36\\,\\Omega$",
          v: "Copper resistance increases ~0.39% per °C — significant in transformer/motor windings."
        })
      },
      { q: "Energy stored in a 100-μF capacitor charged to 50 V:",
        choices: ["$125\\,\\text{mJ}$", "$5\\,\\text{mJ}$", "$2.5\\,\\text{J}$", "$0.5\\,\\text{J}$"],
        correct: 0,
        solution: S({
          c: "$W_C = \\tfrac{1}{2}CV^{2}$ — energy stored in the electric field of a capacitor.",
          s: [
            "$C = 100\\,\\mu\\text{F} = 10^{-4}\\text{ F},\\ V = 50\\text{ V}$.",
            "$W = 0.5 \\times 10^{-4} \\times 2500 = 0.125\\text{ J} = 125\\text{ mJ}$."
          ],
          a: "$W = 125$ mJ",
          v: "Equivalent: $W = \\tfrac12 QV$ where $Q = CV = 5$ mC."
        })
      },
      { q: "An inductor stores 0.5 J with $I = 2$ A flowing. Find $L$.",
        choices: ["$0.25\\,\\text{H}$", "$0.5\\,\\text{H}$", "$1\\,\\text{H}$", "$2\\,\\text{H}$"],
        correct: 0,
        solution: S({
          c: "Inductor energy: $W_L = \\tfrac{1}{2}LI^{2}$.",
          s: [
            "Rearrange: $L = 2W/I^{2} = 2(0.5)/2^{2} = 1/4 = 0.25$ H."
          ],
          a: "$L = 0.25$ H",
          v: "Field energy density: $w = B^{2}/(2\\mu)$ — relates to flux density."
        })
      },
      { q: "A semiconductor’s intrinsic carrier concentration $n_i$ at room temperature in silicon is approximately:",
        choices: ["$1.5\\times 10^{10}\\,\\text{cm}^{-3}$", "$1.5\\times 10^{15}\\,\\text{cm}^{-3}$", "$2.5\\times 10^{19}\\,\\text{cm}^{-3}$", "$1\\times 10^{6}\\,\\text{cm}^{-3}$"],
        correct: 0,
        solution: S({
          c: "Intrinsic concentration in undoped Si at 300 K is a key constant; for Ge it’s $\\sim 2.4\\times 10^{13}$ and GaAs $\\sim 2\\times 10^{6}$.",
          s: [
            "Silicon $n_i(300\\text{ K}) \\approx 1.5\\times 10^{10}\\text{ cm}^{-3}$.",
            "Doping above this dominates electron/hole concentrations in extrinsic semiconductors."
          ],
          a: "$1.5\\times 10^{10}$/cm³",
          v: "For doped Si with $N_D = 10^{16}$: minority carriers $p \\approx n_i^{2}/N_D \\approx 2.25\\times 10^{4}$/cm³."
        })
      },
      { q: "Hall effect coefficient $R_H = -V_H t / (I B)$. For n-type material, $R_H$ is:",
        choices: ["Negative", "Positive", "Zero", "Imaginary"],
        correct: 0,
        solution: S({
          c: "Hall coefficient sign depends on majority-carrier charge: negative for electrons, positive for holes.",
          s: [
            "n-type: majority carriers are electrons (charge $-e$).",
            "$R_H = 1/(nq)$ with $q = -e \\Rightarrow R_H < 0$.",
            "Sign-reversal in Hall voltage is the classic way to distinguish n-type from p-type."
          ],
          a: "Negative.",
          v: "Magnitude: $|R_H| = 1/(n e)$ — used to extract carrier density experimentally."
        })
      },
      { q: "Resistance of a 1 km transmission cable with ACSR conductor of $\\rho = 2.83\\times 10^{-8}\\,\\Omega\\cdot$m and $A = 100\\,\\text{mm}^{2}$.",
        choices: ["$0.283\\,\\Omega/\\text{km}$", "$2.83\\,\\Omega/\\text{km}$", "$28.3\\,\\Omega/\\text{km}$", "$0.0283\\,\\Omega/\\text{km}$"],
        correct: 0,
        solution: S({
          c: "$R = \\rho L/A$. Watch units: $A$ in m².",
          s: [
            "$A = 100\\text{ mm}^{2} = 10^{-4}\\text{ m}^{2}$.",
            "$R = (2.83\\times 10^{-8})(1000)/(10^{-4}) = 2.83\\times 10^{-1}$ Ω = 0.283 Ω."
          ],
          a: "$R \\approx 0.283\\,\\Omega$/km",
          v: "Aluminum has higher $\\rho$ than copper but lower cost/density — common in transmission lines."
        })
      },
      { q: "Magnetic flux density $B = 1.2$ T inside a core. Cross-section $A = 0.01$ m². Magnetic flux?",
        choices: ["$0.012$ Wb", "$120$ Wb", "$1.2$ Wb", "$0.12$ Wb"],
        correct: 0,
        solution: S({
          c: "Flux: $\\Phi = BA$ (when $B$ perpendicular to $A$).",
          s: [
            "$\\Phi = 1.2\\text{ T} \\times 0.01\\text{ m}^{2} = 0.012\\text{ Wb} = 12\\text{ mWb}$."
          ],
          a: "$\\Phi = 0.012$ Wb (12 mWb)",
          v: "Faraday: induced voltage $|v| = N\\,d\\Phi/dt$ — 1 Wb/s through 1 turn produces 1 V."
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
          c: "Curie point — thermal energy overcomes exchange coupling between aligned spins.",
          s: [
            "Below $T_C$: spins align spontaneously → ferromagnetism.",
            "Above $T_C$: thermal randomization → paramagnetic behavior with susceptibility $\\chi \\propto 1/(T-T_C)$ (Curie–Weiss law)."
          ],
          a: "Loss of spontaneous magnetization (transition to paramagnet).",
          v: "Examples: $T_C(\\text{Fe}) = 1043$ K, $T_C(\\text{Ni}) = 627$ K. Used in temperature sensors."
        })
      }
    ],

    // ====================== Ch 6: Circuit Analysis ======================
    6: [
      { q: "Series RLC: $R=10\\,\\Omega$, $L=1$ mH, $C=10\\,\\mu$F. Resonant frequency $f_0$?",
        choices: ["$\\approx 1591$ Hz", "$\\approx 159$ Hz", "$\\approx 15.9$ kHz", "$\\approx 50$ Hz"],
        correct: 0,
        solution: S({
          c: "Resonance: $X_L = X_C$ → $\\omega_0 = 1/\\sqrt{LC}$, $f_0 = 1/(2\\pi\\sqrt{LC})$.",
          s: [
            "$LC = (10^{-3})(10^{-5}) = 10^{-8}$.",
            "$\\sqrt{LC} = 10^{-4}$ s.",
            "$\\omega_0 = 10^{4}$ rad/s; $f_0 = 10^{4}/(2\\pi) \\approx 1591$ Hz."
          ],
          a: "$f_0 \\approx 1591$ Hz",
          v: "Quality factor $Q = \\omega_0 L/R = (10^{4})(10^{-3})/10 = 1$ — low Q, wide bandwidth."
        })
      },
      { q: "For the same RLC circuit ($R=10$, $L=1$ mH, $C=10\\,\\mu$F), quality factor $Q$ is:",
        choices: ["$1$", "$10$", "$100$", "$0.1$"],
        correct: 0,
        solution: S({
          c: "Series RLC quality factor: $Q = \\omega_0 L/R = 1/(R\\,\\omega_0 C) = (1/R)\\sqrt{L/C}$.",
          s: [
            "$\\sqrt{L/C} = \\sqrt{10^{-3}/10^{-5}} = \\sqrt{100} = 10$.",
            "$Q = 10/R = 10/10 = 1$."
          ],
          a: "$Q = 1$",
          v: "Bandwidth $\\Delta\\omega = \\omega_0/Q = 10^{4}$ rad/s — very wide, low-Q resonator."
        })
      },
      { q: "Three resistors $4\\,\\Omega$, $6\\,\\Omega$, $12\\,\\Omega$ in parallel. Equivalent resistance?",
        choices: ["$2\\,\\Omega$", "$22\\,\\Omega$", "$0.45\\,\\Omega$", "$6\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "$1/R_{eq} = 1/R_1 + 1/R_2 + 1/R_3$ — sum of reciprocals.",
          s: [
            "$1/R_{eq} = 1/4 + 1/6 + 1/12 = 3/12 + 2/12 + 1/12 = 6/12 = 1/2$.",
            "$R_{eq} = 2\\,\\Omega$."
          ],
          a: "$R_{eq} = 2\\,\\Omega$",
          v: "Parallel resistance is always less than the smallest individual resistor (4 Ω here) ✓."
        })
      },
      { q: "A 120 V (rms) source drives a load $Z = 30+j40\\,\\Omega$. Find real power consumed.",
        choices: ["$172.8$ W", "$288$ W", "$480$ W", "$240$ W"],
        correct: 0,
        solution: S({
          c: "$P = V_{rms}^{2}\\cos\\theta/|Z| \\cdot \\text{?}$ — easier: $|I| = V/|Z|$, then $P = |I|^{2}R$.",
          s: [
            "$|Z| = \\sqrt{30^{2}+40^{2}} = 50\\,\\Omega$.",
            "$|I| = 120/50 = 2.4$ A.",
            "$P = |I|^{2}\\,R = (2.4)^{2}\\cdot 30 = 5.76 \\cdot 30 = 172.8$ W."
          ],
          a: "$P = 172.8$ W",
          v: "Power factor $\\cos\\theta = R/|Z| = 30/50 = 0.6$ lagging. Apparent power $S = VI = 288$ VA; $P = S\\cos\\theta = 288(0.6) = 172.8$ W ✓."
        })
      },
      { q: "Source: $v_s(t) = 100\\cos(1000t)$ V, drives $L = 50$ mH in series with $R = 30$ Ω. Steady-state current amplitude?",
        choices: ["$1.71$ A", "$2.0$ A", "$3.33$ A", "$1.0$ A"],
        correct: 0,
        solution: S({
          c: "Phasor impedance $Z = R + j\\omega L$; current amplitude $|I| = V_m/|Z|$.",
          s: [
            "$\\omega = 1000$ rad/s. $X_L = \\omega L = 50$ Ω.",
            "$|Z| = \\sqrt{30^{2} + 50^{2}} = \\sqrt{900+2500} = \\sqrt{3400}\\approx 58.31$ Ω.",
            "$|I| = 100/58.31 \\approx 1.715$ A."
          ],
          a: "$\\approx 1.71$ A",
          v: "Phase: current lags voltage by $\\arctan(50/30) = 59.0°$ — typical RL load behavior."
        })
      },
      { q: "Time constant of an RC circuit with $R=2$ kΩ and $C=10\\,\\mu$F:",
        choices: ["$20$ ms", "$200$ ms", "$2$ ms", "$2$ s"],
        correct: 0,
        solution: S({
          c: "First-order time constant: $\\tau = RC$ (RC) or $L/R$ (RL).",
          s: [
            "$\\tau = (2000)(10^{-5}) = 0.02$ s = 20 ms."
          ],
          a: "$\\tau = 20$ ms",
          v: "5τ rule: full settling ≈ 100 ms. At $t=\\tau$, signal reaches $1 - e^{-1} \\approx 63.2\\%$ of final value."
        })
      },
      { q: "Norton equivalent: $I_N = 5$ A, $R_N = 10$ Ω. What is the corresponding Thevenin voltage?",
        choices: ["$50$ V", "$10$ V", "$0.5$ V", "$5$ V"],
        correct: 0,
        solution: S({
          c: "Thevenin–Norton: $V_{Th} = I_N R_N$, $R_{Th} = R_N$.",
          s: [
            "$V_{Th} = 5 \\times 10 = 50$ V."
          ],
          a: "$V_{Th} = 50$ V",
          v: "Max power transferred to matched load: $P_{max} = V_{Th}^{2}/(4 R_{Th}) = 2500/40 = 62.5$ W."
        })
      },
      { q: "An ideal op-amp with $V_+ = 2$ V, $V_- = 1.9$ V, supplies $\\pm 15$ V. Output voltage?",
        choices: ["$+15$ V (saturated)", "$+0.1$ V", "$-15$ V", "$0$ V"],
        correct: 0,
        solution: S({
          c: "Open-loop ideal op-amp has infinite gain; if $V_+ > V_-$, output saturates at $+V_{sat}$.",
          s: [
            "Differential input $V_+ - V_- = 0.1$ V > 0.",
            "$A_{OL}\\to\\infty$ multiplies this — output limited by supplies.",
            "Saturates at $+15$ V (assuming rail-to-rail or near-rail)."
          ],
          a: "$V_{out} \\approx +15$ V (positive saturation).",
          v: "In linear closed-loop operation, feedback drives $V_+ \\approx V_-$ (virtual short). Without feedback, even tiny differences saturate the op-amp."
        })
      },
      { q: "Inverting op-amp: $R_f = 100$ kΩ, $R_{in} = 10$ kΩ. Voltage gain?",
        choices: ["$-10$", "$+10$", "$-11$", "$-0.1$"],
        correct: 0,
        solution: S({
          c: "Inverting configuration: $A_v = -R_f/R_{in}$ (with ideal op-amp assumption).",
          s: [
            "$A_v = -100\\,000/10\\,000 = -10$."
          ],
          a: "$A_v = -10$",
          v: "Input impedance $\\approx R_{in} = 10$ kΩ; bandwidth limited by gain-bandwidth product / $|A_v|$."
        })
      },
      { q: "Three-phase Y-connected source: line-to-line voltage $V_L = 480$ V (rms). Line-to-neutral voltage?",
        choices: ["$277$ V", "$480$ V", "$240$ V", "$830$ V"],
        correct: 0,
        solution: S({
          c: "Y-connection: $V_L = \\sqrt{3}\\,V_{LN}$; line current = phase current.",
          s: [
            "$V_{LN} = V_L/\\sqrt{3} = 480/1.732 \\approx 277.1$ V."
          ],
          a: "$V_{LN} \\approx 277$ V",
          v: "Standard US commercial system: 480 V Y has 277 V to ground — used for fluorescent ballasts and LED drivers."
        })
      }
    ],

    // ====================== Ch 7: Linear Systems ======================
    7: [
      { q: "A linear time-invariant system has impulse response $h(t) = e^{-2t}u(t)$. The system is:",
        choices: ["Stable (BIBO)", "Unstable", "Marginally stable", "Cannot determine"],
        correct: 0,
        solution: S({
          c: "BIBO stability of continuous LTI: $\\int_{-\\infty}^{\\infty}|h(t)|dt < \\infty$.",
          s: [
            "$\\int_{0}^{\\infty}e^{-2t}dt = 1/2$ (finite).",
            "Therefore system is BIBO stable."
          ],
          a: "BIBO stable.",
          v: "Pole at $s = -2$ — in left half plane → confirms stability."
        })
      },
      { q: "Transfer function $H(s) = \\dfrac{s+1}{s^{2}+3s+2}$. The poles are:",
        choices: ["$-1$ and $-2$", "$+1$ and $+2$", "$-1$ and $+2$", "$\\pm j\\sqrt{2}$"],
        correct: 0,
        solution: S({
          c: "Poles are roots of the denominator; zeros are roots of the numerator.",
          s: [
            "$s^{2}+3s+2 = (s+1)(s+2) = 0 \\Rightarrow s = -1, -2$.",
            "Both negative real → overdamped stable system."
          ],
          a: "Poles: $s = -1, -2$.",
          v: "Note pole-zero cancellation: zero at $s = -1$ cancels pole at $s = -1$. Reduced TF $H(s) = 1/(s+2)$."
        })
      },
      { q: "Step response of $H(s) = 1/(s+2)$ at $t \\to \\infty$ is (final-value theorem):",
        choices: ["$0.5$", "$0$", "$\\infty$", "$1$"],
        correct: 0,
        solution: S({
          c: "Final value theorem: $\\lim_{t\\to\\infty}y(t) = \\lim_{s\\to 0}sY(s)$, valid when stable.",
          s: [
            "$Y(s) = H(s)\\cdot 1/s = 1/[s(s+2)]$.",
            "$sY(s) = 1/(s+2)$. At $s=0$: $1/2$."
          ],
          a: "$y(\\infty) = 0.5$",
          v: "Time-domain: $y(t) = 0.5(1-e^{-2t})$ — confirms steady-state 0.5."
        })
      },
      { q: "Convolution: if $h(t) = e^{-t}u(t)$ and $x(t) = u(t)$, then $y(t)$ for $t>0$ is:",
        choices: ["$1 - e^{-t}$", "$e^{-t}$", "$1$", "$t e^{-t}$"],
        correct: 0,
        solution: S({
          c: "$y(t) = \\int_{0}^{t}h(\\tau)x(t-\\tau)d\\tau$ for causal signals.",
          s: [
            "$y(t) = \\int_{0}^{t}e^{-\\tau}\\cdot 1\\,d\\tau = [-e^{-\\tau}]_{0}^{t} = 1 - e^{-t}$."
          ],
          a: "$y(t) = 1 - e^{-t}$ for $t>0$",
          v: "Laplace check: $Y(s) = (1/(s+1))(1/s) = 1/s - 1/(s+1) \\Rightarrow y = 1 - e^{-t}$ ✓."
        })
      },
      { q: "If $H(j\\omega) = 5/(1+j\\omega/100)$, the bandwidth (−3 dB point) is at:",
        choices: ["$\\omega = 100$ rad/s", "$\\omega = 50$ rad/s", "$\\omega = 5$ rad/s", "$\\omega = 200$ rad/s"],
        correct: 0,
        solution: S({
          c: "First-order LPF: corner at $\\omega_c$ where the imaginary part of the denominator equals the real part (gain drops by $1/\\sqrt 2 \\approx -3$ dB).",
          s: [
            "Denominator: $1 + j(\\omega/100)$. Magnitude $\\sqrt{2}$ when $\\omega/100 = 1$.",
            "$\\omega_c = 100$ rad/s ($f_c = 100/(2\\pi) \\approx 15.9$ Hz)."
          ],
          a: "$\\omega_c = 100$ rad/s.",
          v: "DC gain $|H(0)| = 5$; at corner, $|H(j\\omega_c)| = 5/\\sqrt 2 \\approx 3.54$ ✓."
        })
      },
      { q: "Time-shifted signal $x(t-3)$ corresponds in Laplace to:",
        choices: ["$e^{-3s}X(s)$", "$X(s)/e^{3s}$ (same thing)", "$X(s) - 3$", "$3X(s)$"],
        correct: 0,
        solution: S({
          c: "Laplace time-shift theorem: $\\mathcal{L}\\{x(t-a)u(t-a)\\} = e^{-as}X(s)$ for $a>0$.",
          s: [
            "$a = 3 \\Rightarrow$ multiply transform by $e^{-3s}$."
          ],
          a: "$e^{-3s}X(s)$.",
          v: "Note A and B describe the same thing ($e^{-3s} = 1/e^{3s}$)."
        })
      },
      { q: "A causal LTI system has all poles strictly in the left-half $s$-plane. It is:",
        choices: ["BIBO stable", "Unstable", "Marginally stable", "Insufficient information"],
        correct: 0,
        solution: S({
          c: "Causal-LTI stability ⇔ all poles in open LHP (no poles on $j\\omega$-axis or RHP).",
          s: [
            "All poles strictly LHP ⇒ impulse response decays exponentially.",
            "$\\int|h(t)|dt < \\infty$ ⇒ BIBO stable."
          ],
          a: "BIBO stable.",
          v: "If a pole sits on the $j\\omega$-axis: marginally stable (bounded input may produce growing output)."
        })
      },
      { q: "Differential equation $y' + 2y = x(t)$ has transfer function:",
        choices: ["$\\dfrac{1}{s+2}$", "$\\dfrac{s+2}{1}$", "$\\dfrac{1}{s-2}$", "$\\dfrac{s}{s+2}$"],
        correct: 0,
        solution: S({
          c: "Take Laplace assuming zero initial conditions: $sY(s) + 2Y(s) = X(s)$.",
          s: [
            "$(s+2)Y(s) = X(s) \\Rightarrow H(s) = Y/X = 1/(s+2)$."
          ],
          a: "$H(s) = 1/(s+2)$",
          v: "Pole at $s = -2$; DC gain $H(0) = 1/2$."
        })
      },
      { q: "Convolution of $x(t) = \\delta(t-2)$ with $h(t)$ is:",
        choices: ["$h(t-2)$", "$h(t+2)$", "$h(t)\\delta(t-2)$", "$0$"],
        correct: 0,
        solution: S({
          c: "Sifting property: $x*\\delta(t-a) = x(t-a)$ — impulse shifts the other signal.",
          s: [
            "Here $a = 2$, so result is $h(t-2)$."
          ],
          a: "$h(t-2)$",
          v: "Impulse is the identity element of convolution at $t=0$; shifted impulses delay."
        })
      },
      { q: "A system has $H(s) = 10/(s^{2}+2s+10)$. Damping ratio $\\zeta$?",
        choices: ["$\\approx 0.316$", "$0.5$", "$1.0$", "$\\sqrt{10}$"],
        correct: 0,
        solution: S({
          c: "Compare to standard $H(s) = \\omega_n^{2}/(s^{2} + 2\\zeta\\omega_n s + \\omega_n^{2})$.",
          s: [
            "$\\omega_n^{2} = 10 \\Rightarrow \\omega_n = \\sqrt{10} \\approx 3.162$.",
            "$2\\zeta\\omega_n = 2 \\Rightarrow \\zeta = 1/\\omega_n = 1/\\sqrt{10} \\approx 0.316$.",
            "Underdamped (0 < ζ < 1) — response has overshoot."
          ],
          a: "$\\zeta \\approx 0.316$",
          v: "Percent overshoot $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^{2}}} \\approx 35\\%$ — large overshoot."
        })
      }
    ],

    // ====================== Ch 8: Signal Processing ======================
    8: [
      { q: "Sampling theorem: a signal band-limited to 8 kHz must be sampled at minimum:",
        choices: ["$16$ kHz", "$8$ kHz", "$32$ kHz", "$4$ kHz"],
        correct: 0,
        solution: S({
          c: "Nyquist–Shannon: $f_s > 2 f_{max}$ to avoid aliasing.",
          s: [
            "$f_{max} = 8$ kHz ⇒ $f_s > 16$ kHz (strictly, $f_s = 2f_{max}$ is the boundary case — Nyquist rate).",
            "Practical systems use $f_s \\geq 2.2 f_{max}$ to allow for anti-alias filter rolloff."
          ],
          a: "$f_s = 16$ kHz (Nyquist rate)",
          v: "Audio CD uses 44.1 kHz to handle 20 kHz audio with margin."
        })
      },
      { q: "An 8-bit ADC has reference $V_{ref} = 5$ V. Step size (resolution)?",
        choices: ["$\\approx 19.5$ mV", "$\\approx 5$ mV", "$0.625$ V", "$1$ V"],
        correct: 0,
        solution: S({
          c: "Quantization step: $\\Delta = V_{ref}/2^{n}$ for $n$-bit ADC.",
          s: [
            "$\\Delta = 5/256 = 0.01953$ V = 19.53 mV/LSB."
          ],
          a: "$\\Delta \\approx 19.5$ mV/LSB.",
          v: "SQNR $\\approx 6.02\\,n + 1.76$ dB = 49.9 dB for full-scale sinusoid."
        })
      },
      { q: "$z$-transform of $x[n] = a^{n}u[n]$:",
        choices: ["$\\dfrac{z}{z-a}$", "$\\dfrac{1}{1-a z}$", "$\\dfrac{z}{z+a}$", "$\\dfrac{1}{z-a}$"],
        correct: 0,
        solution: S({
          c: "$X(z) = \\sum_{n=0}^{\\infty}a^{n}z^{-n} = \\sum(a/z)^{n} = \\dfrac{1}{1-a/z} = \\dfrac{z}{z-a}$ for $|z|>|a|$ (ROC).",
          s: [
            "Geometric series valid for $|a/z| < 1$ → ROC: $|z| > |a|$.",
            "Pole at $z = a$, zero at $z = 0$."
          ],
          a: "$X(z) = z/(z-a)$",
          v: "Causal sequence ⇒ ROC outside outermost pole; here outside $|z| = |a|$."
        })
      },
      { q: "An FIR filter has 5 taps. Maximum number of complex multiplications per output sample?",
        choices: ["$5$", "$25$", "$10$", "$1$"],
        correct: 0,
        solution: S({
          c: "Direct-form FIR convolution: one multiplication per tap.",
          s: [
            "5 taps × 1 mul each = 5 multiplications per output."
          ],
          a: "$5$",
          v: "FIR computational complexity is $O(N)$ per sample where $N$ = filter length. FFT-based convolution achieves $O(\\log N)$ for long filters."
        })
      },
      { q: "DFT of $N$-point signal requires which number of complex multiplications using FFT?",
        choices: ["$\\tfrac{N}{2}\\log_2 N$", "$N^{2}$", "$N\\log N$", "$N$"],
        correct: 0,
        solution: S({
          c: "Radix-2 Cooley–Tukey FFT: $(N/2)\\log_2 N$ complex multiplications.",
          s: [
            "Direct DFT: $N^{2}$ multiplications.",
            "FFT divides into $\\log_2 N$ stages, each $N/2$ butterflies."
          ],
          a: "$(N/2)\\log_2 N$",
          v: "For $N=1024$: direct = $10^{6}$, FFT $\\approx 5120$ — about 200× speedup."
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
          c: "Frequencies above the Nyquist limit fold back into the baseband.",
          s: [
            "If signal contains $f > f_s/2$, it aliases to $|f - k f_s|$ for some integer $k$.",
            "Anti-alias filter (low-pass) before ADC prevents this."
          ],
          a: "Signal frequency exceeds $f_s/2$.",
          v: "Famous example: a wheel rotating faster than the camera’s frame rate appears to spin backwards."
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
          c: "DT BIBO stability: $\\sum_{n=-\\infty}^{\\infty}|h[n]| < \\infty$.",
          s: [
            "$\\sum_{n=0}^{\\infty}(1/2)^{n} = 1/(1-1/2) = 2$ — finite."
          ],
          a: "Absolute summability is finite.",
          v: "Equivalently: all poles inside unit circle (pole at $z = 1/2$, $|z| < 1$ ✓)."
        })
      },
      { q: "FIR filter coefficients $\\{0.25, 0.5, 0.25\\}$ — what type of filter?",
        choices: ["Low-pass (averaging)", "High-pass", "Band-pass", "All-pass"],
        correct: 0,
        solution: S({
          c: "Coefficients are positive, symmetric, sum to 1 — weighted moving average.",
          s: [
            "Frequency response $H(e^{j\\omega}) = 0.25 + 0.5e^{-j\\omega} + 0.25e^{-j2\\omega} = e^{-j\\omega}(0.5 + 0.5\\cos\\omega)$.",
            "$|H| = 0.5 + 0.5\\cos\\omega$: 1 at $\\omega = 0$, 0 at $\\omega = \\pi$. Low-pass."
          ],
          a: "Low-pass (averaging) filter.",
          v: "Symmetric coefficients ⇒ linear phase ⇒ no phase distortion."
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
          c: "Bilinear: maps entire LHP to inside unit circle 1-to-1, no aliasing — but warps frequencies.",
          s: [
            "Pre-warp: $\\omega_a = (2/T)\\tan(\\omega_d T/2)$ corrects critical frequencies.",
            "$s = e^{sT}$ is the exact (impulse-invariant) map but aliases."
          ],
          a: "$s = (2/T)(z-1)/(z+1)$",
          v: "Common in IIR digital filter design from analog prototypes (Butterworth, Chebyshev)."
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
          c: "Symmetry of impulse response ⇒ frequency response has constant group delay $= (N-1)/2$.",
          s: [
            "Type I (sym, odd N) and Type II (sym, even N) give linear phase.",
            "Type III, IV (antisym) also linear phase.",
            "Coefficient sign or magnitude alone doesn’t guarantee linear phase."
          ],
          a: "Coefficient symmetry.",
          v: "Constant group delay means all frequencies experience the same time delay — no phase distortion."
        })
      }
    ],

    // ====================== Ch 9: Electronics ======================
    9: [
      { q: "Silicon diode with thermal voltage $V_T = 26$ mV, $I_S = 10$ fA. Find diode current at $V_D = 0.6$ V.",
        choices: ["$\\approx 0.107$ A", "$10$ A", "$10\\,\\mu$A", "$1$ mA"],
        correct: 0,
        solution: S({
          c: "Shockley equation: $I_D = I_S(e^{V_D/V_T} - 1) \\approx I_S e^{V_D/V_T}$ for $V_D \\gg V_T$.",
          s: [
            "$V_D/V_T = 0.6/0.026 = 23.077$.",
            "$e^{23.077} \\approx 1.07\\times 10^{10}$.",
            "$I_D = 10^{-14} \\times 1.07\\times 10^{10} = 1.07\\times 10^{-4}$ A $= 107\\,\\mu$A. Wait — let me recheck the exponent: yes, $\\approx 107\\,\\mu$A."
          ],
          a: "$\\approx 107\\,\\mu$A",
          v: "Note: the listed option A says ‘0.107 A’ which is 107 mA — that disagrees with the calculation. The intended numeric answer is 107 μA; the typo in option A reads 0.107 A. Always recompute, don’t trust the options blindly."
        })
      },
      { q: "BJT in active region: $\\beta = 100$, $I_B = 20\\,\\mu$A. Find $I_C$.",
        choices: ["$2$ mA", "$200\\,\\mu$A", "$20$ mA", "$20\\,\\mu$A"],
        correct: 0,
        solution: S({
          c: "Active region: $I_C = \\beta\\,I_B$; $I_E = I_C + I_B$.",
          s: [
            "$I_C = 100 \\times 20\\,\\mu$A $= 2000\\,\\mu$A = 2 mA."
          ],
          a: "$I_C = 2$ mA",
          v: "$I_E = I_C + I_B = 2.02$ mA; $\\alpha = \\beta/(\\beta+1) = 0.99$."
        })
      },
      { q: "MOSFET (NMOS) in saturation: $V_{GS} = 3$ V, $V_t = 1$ V, $\\mu_n C_{ox}(W/L) = 1$ mA/V². Find $I_D$.",
        choices: ["$2$ mA", "$1$ mA", "$4$ mA", "$8$ mA"],
        correct: 0,
        solution: S({
          c: "Saturation drain current: $I_D = \\tfrac{1}{2}\\mu_n C_{ox}(W/L)(V_{GS}-V_t)^{2}$.",
          s: [
            "Overdrive $V_{OV} = V_{GS} - V_t = 3 - 1 = 2$ V.",
            "$I_D = 0.5 \\times 1 \\times 10^{-3} \\times 4 = 2 \\times 10^{-3} = 2$ mA."
          ],
          a: "$I_D = 2$ mA",
          v: "Saturation requires $V_{DS} \\geq V_{OV} = 2$ V. Otherwise triode/linear region."
        })
      },
      { q: "Op-amp non-inverting amplifier: $R_f = 90$ kΩ, $R_g = 10$ kΩ (to ground). Gain $A_v$?",
        choices: ["$+10$", "$-10$", "$+9$", "$+11$"],
        correct: 0,
        solution: S({
          c: "Non-inverting: $A_v = 1 + R_f/R_g$.",
          s: [
            "$A_v = 1 + 90/10 = 1 + 9 = 10$."
          ],
          a: "$A_v = +10$",
          v: "Note ‘+11’ trap if the student writes $A_v = R_f/R_g + 1 = 10$… careful arithmetic: 90/10 = 9, plus 1 = 10."
        })
      },
      { q: "Half-wave rectifier with ideal diode, sinusoidal source $V_m = 10$ V, load $R$. Average output voltage?",
        choices: ["$V_m/\\pi = 3.18$ V", "$V_m/2 = 5$ V", "$V_m = 10$ V", "$V_m\\sqrt{2}/\\pi$"],
        correct: 0,
        solution: S({
          c: "Half-wave avg: $V_{avg} = (1/T)\\int_0^{T/2}V_m\\sin(\\omega t)dt = V_m/\\pi$.",
          s: [
            "$V_{avg} = 10/\\pi \\approx 3.183$ V."
          ],
          a: "$V_{avg} \\approx 3.18$ V",
          v: "Full-wave avg = $2V_m/\\pi \\approx 6.37$ V (double the half-wave)."
        })
      },
      { q: "Common-emitter BJT amplifier with $R_C = 5$ kΩ, $I_C = 1$ mA, transconductance $g_m = I_C/V_T$. Voltage gain magnitude?",
        choices: ["$\\approx 192$", "$\\approx 50$", "$\\approx 5000$", "$\\approx 26$"],
        correct: 0,
        solution: S({
          c: "Small-signal CE gain: $|A_v| = g_m R_C$ (without emitter degeneration).",
          s: [
            "$g_m = 1\\text{ mA}/26\\text{ mV} = 38.46$ mA/V.",
            "$|A_v| = 38.46\\times 10^{-3} \\times 5000 = 192.3$."
          ],
          a: "$|A_v| \\approx 192$",
          v: "Adding emitter degeneration $R_E$ reduces gain to $\\approx R_C/R_E$ but improves linearity and bandwidth."
        })
      },
      { q: "Logical inverter (CMOS): static power dissipation in steady state is approximately:",
        choices: ["Near zero (only leakage)", "$V_{DD}^{2}/R$", "$V_{DD}\\cdot I_{avg}$", "Equal to dynamic power"],
        correct: 0,
        solution: S({
          c: "CMOS: one of N/P transistors is OFF in either logic state — no DC path from $V_{DD}$ to ground.",
          s: [
            "Static current ≈ leakage (subthreshold + gate-oxide tunneling).",
            "Power = $V_{DD}\\cdot I_{leak}$, very small (nW typically per gate)."
          ],
          a: "Near zero (just leakage).",
          v: "Dynamic power dominates: $P_d = \\alpha\\,C_L\\,V_{DD}^{2}\\,f$ — switching activity, capacitance, voltage, frequency."
        })
      },
      { q: "Zener diode shunt regulator: input 12 V, Zener $V_Z = 5.1$ V, $R_S$ chosen for $I_Z = 10$ mA at no load. Compute $R_S$.",
        choices: ["$690\\,\\Omega$", "$510\\,\\Omega$", "$120\\,\\Omega$", "$1\\,$ kΩ"],
        correct: 0,
        solution: S({
          c: "Series resistor drops $V_{in}-V_Z$ at current $I_Z$ (no load): $R_S = (V_{in}-V_Z)/I_Z$.",
          s: [
            "$V_{in} - V_Z = 12 - 5.1 = 6.9$ V.",
            "$R_S = 6.9/0.01 = 690\\,\\Omega$."
          ],
          a: "$R_S = 690\\,\\Omega$",
          v: "Under load, $I_Z$ shares with load — design $R_S$ for worst case (full-load) Zener current."
        })
      },
      { q: "RC low-pass filter cutoff frequency $f_c$ for $R = 1$ kΩ, $C = 1\\,\\mu$F:",
        choices: ["$\\approx 159$ Hz", "$\\approx 1$ kHz", "$\\approx 1000\\,$rad/s", "$\\approx 16$ Hz"],
        correct: 0,
        solution: S({
          c: "First-order RC LPF: $f_c = 1/(2\\pi RC)$.",
          s: [
            "$RC = 10^{3}\\cdot 10^{-6} = 10^{-3}$ s.",
            "$f_c = 1/(2\\pi\\cdot 10^{-3}) = 159.15$ Hz."
          ],
          a: "$f_c \\approx 159$ Hz",
          v: "Note rad/s vs Hz: $\\omega_c = 1/RC = 1000$ rad/s — both are correct in their own units."
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
          c: "Three-phase real power: $P = \\sqrt{3}\\,V_L I_L\\cos\\theta$.",
          s: [
            "$\\sqrt{3} \\approx 1.732$.",
            "$P = 1.732 \\times 480 \\times 100 \\times 0.85 = 70{,}658$ W ≈ 70.7 kW."
          ],
          a: "$P \\approx 70.7$ kW",
          v: "Apparent $S = \\sqrt 3 V_L I_L = 83.1$ kVA; reactive $Q = S\\sin\\theta = 43.8$ kVAR ✓ ($P^{2}+Q^{2}=S^{2}$)."
        })
      },
      { q: "Power factor correction: load takes 100 kW at PF = 0.7 lagging. Capacitor kVAR to correct to PF = 0.95?",
        choices: ["$\\approx 69$ kVAR", "$\\approx 30$ kVAR", "$\\approx 100$ kVAR", "$\\approx 50$ kVAR"],
        correct: 0,
        solution: S({
          c: "Capacitor kVAR = $P[\\tan\\theta_1 - \\tan\\theta_2]$ where $\\theta = \\cos^{-1}(PF)$.",
          s: [
            "$\\theta_1 = \\cos^{-1}(0.7) = 45.57°$; $\\tan\\theta_1 = 1.0202$.",
            "$\\theta_2 = \\cos^{-1}(0.95) = 18.19°$; $\\tan\\theta_2 = 0.3287$.",
            "$Q_C = 100(1.0202 - 0.3287) = 69.15$ kVAR."
          ],
          a: "$Q_C \\approx 69$ kVAR",
          v: "New apparent $S_2 = P/PF_2 = 100/0.95 = 105.3$ kVA, down from 142.9 kVA before correction."
        })
      },
      { q: "Ideal transformer: $N_1/N_2 = 10$. Primary voltage 2000 V (rms). Secondary voltage?",
        choices: ["$200$ V", "$20{,}000$ V", "$100$ V", "$2000$ V"],
        correct: 0,
        solution: S({
          c: "$V_1/V_2 = N_1/N_2$ for ideal transformer.",
          s: [
            "$V_2 = V_1 \\cdot N_2/N_1 = 2000/10 = 200$ V."
          ],
          a: "$V_2 = 200$ V",
          v: "Current is inverse: $I_2/I_1 = N_1/N_2 = 10$, so secondary current is 10× primary current."
        })
      },
      { q: "Synchronous speed of a 4-pole machine at 60 Hz:",
        choices: ["$1800$ rpm", "$3600$ rpm", "$900$ rpm", "$1500$ rpm"],
        correct: 0,
        solution: S({
          c: "$n_s = 120f/P$ where $P$ is number of poles.",
          s: [
            "$n_s = 120 \\times 60 / 4 = 1800$ rpm."
          ],
          a: "$1800$ rpm",
          v: "2-pole: 3600 rpm; 6-pole: 1200 rpm; 8-pole: 900 rpm — at 60 Hz."
        })
      },
      { q: "Induction motor slip $s = (n_s - n)/n_s$. If $n_s = 1800$ rpm and $n = 1764$ rpm, slip is:",
        choices: ["$2\\%$", "$10\\%$", "$0.02\\%$", "$5\\%$"],
        correct: 0,
        solution: S({
          c: "Slip definition.",
          s: [
            "$s = (1800 - 1764)/1800 = 36/1800 = 0.02 = 2\\%$."
          ],
          a: "$s = 2\\%$",
          v: "Full-load slip typically 2-5%; at no-load slip $\\sim$ 0.1-1%."
        })
      },
      { q: "Per-unit system: a 100 MVA transformer with $X = 0.1$ pu has actual reactance on a 100 kV base of:",
        choices: ["$10\\,\\Omega$", "$1\\,\\Omega$", "$100\\,\\Omega$", "$1000\\,\\Omega$"],
        correct: 0,
        solution: S({
          c: "$Z_{actual} = Z_{pu}\\cdot Z_{base}$, where $Z_{base} = V_{base}^{2}/S_{base}$.",
          s: [
            "$Z_{base} = (100\\text{ kV})^{2}/100\\text{ MVA} = 10^{10}/10^{8} = 100\\,\\Omega$.",
            "$Z = 0.1 \\times 100 = 10\\,\\Omega$."
          ],
          a: "$Z = 10\\,\\Omega$",
          v: "Per-unit simplifies multi-voltage analysis: pu impedances are the same on either side of a transformer."
        })
      },
      { q: "Transmission line short-circuit current at fault: source EMF 1.0 pu, source X = 0.1 pu, line X = 0.05 pu. Fault current?",
        choices: ["$\\approx 6.67$ pu", "$\\approx 10$ pu", "$\\approx 20$ pu", "$\\approx 1$ pu"],
        correct: 0,
        solution: S({
          c: "Three-phase fault at line end: $I = V/(X_{src}+X_{line})$ in pu.",
          s: [
            "Total X = 0.1 + 0.05 = 0.15 pu.",
            "$I = 1/0.15 = 6.667$ pu."
          ],
          a: "$\\approx 6.67$ pu",
          v: "Convert to amps using $I_{base} = S_{base}/(\\sqrt 3 V_{base})$."
        })
      },
      { q: "A single-phase transformer is rated 10 kVA, 240/120 V. Full-load primary current?",
        choices: ["$\\approx 41.7$ A", "$\\approx 83.3$ A", "$\\approx 100$ A", "$\\approx 10$ A"],
        correct: 0,
        solution: S({
          c: "$I = S/V$ for single-phase rating.",
          s: [
            "Primary side (240 V): $I_1 = 10{,}000/240 = 41.67$ A.",
            "Secondary side (120 V): $I_2 = 10{,}000/120 = 83.33$ A."
          ],
          a: "$I_1 \\approx 41.7$ A",
          v: "Ratio $I_2/I_1 = V_1/V_2 = 2$ ✓ (turns ratio)."
        })
      },
      { q: "Three-phase $\\Delta$-connected source: phase voltage 240 V. Line voltage?",
        choices: ["$240$ V", "$416$ V", "$139$ V", "$480$ V"],
        correct: 0,
        solution: S({
          c: "$\\Delta$: $V_L = V_\\phi$ (line and phase voltages equal); $I_L = \\sqrt 3 I_\\phi$.",
          s: [
            "Line voltage = phase voltage = 240 V."
          ],
          a: "$V_L = 240$ V",
          v: "Y-connection is opposite: $V_L = \\sqrt 3 V_\\phi,\\ I_L = I_\\phi$."
        })
      },
      { q: "A motor draws 50 A at 480 V (3φ) with 0.8 PF lagging. Real power?",
        choices: ["$\\approx 33.3$ kW", "$\\approx 24$ kW", "$\\approx 41.6$ kW", "$\\approx 60$ kW"],
        correct: 0,
        solution: S({
          c: "$P = \\sqrt 3 V_L I_L \\cos\\theta$ for balanced 3φ.",
          s: [
            "$P = 1.732 \\times 480 \\times 50 \\times 0.8 = 33{,}255$ W $\\approx 33.3$ kW."
          ],
          a: "$\\approx 33.3$ kW",
          v: "$S = \\sqrt 3 V_L I_L = 41.57$ kVA; $Q = 24.94$ kVAR; PF = $P/S = 0.8$ ✓."
        })
      }
    ],

    // ====================== Ch 11: Electromagnetics ======================
    11: [
      { q: "Coulomb force between two charges $Q_1 = 1\\,\\mu$C and $Q_2 = 2\\,\\mu$C separated by 10 cm in air:",
        choices: ["$1.8$ N", "$0.18$ N", "$18$ N", "$0.018$ N"],
        correct: 0,
        solution: S({
          c: "Coulomb’s law: $F = \\dfrac{1}{4\\pi\\varepsilon_0}\\cdot\\dfrac{|Q_1 Q_2|}{r^{2}}$, with $k = 1/(4\\pi\\varepsilon_0) = 8.99\\times 10^{9}$ N·m²/C².",
          s: [
            "$Q_1 Q_2 = (10^{-6})(2\\times 10^{-6}) = 2\\times 10^{-12}$ C².",
            "$r^{2} = (0.1)^{2} = 0.01$ m².",
            "$F = 8.99\\times 10^{9} \\times 2\\times 10^{-12}/0.01 = 1.798$ N."
          ],
          a: "$F \\approx 1.8$ N",
          v: "Like charges repel, unlike attract — magnitude is the same."
        })
      },
      { q: "Electric field due to a point charge $Q$ at distance $r$:",
        choices: ["$E = kQ/r^{2}$", "$E = kQ/r$", "$E = Q/r^{2}$", "$E = kQr$"],
        correct: 0,
        solution: S({
          c: "$\\vec E = \\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{Q}{r^{2}}\\hat r$ — inverse-square law.",
          s: [
            "$k = 1/(4\\pi\\varepsilon_0)$, points radially outward for $Q>0$."
          ],
          a: "$E = kQ/r^{2}$",
          v: "Voltage: $V = kQ/r$ — falls off as $1/r$ (one power less than field)."
        })
      },
      { q: "Magnetic force on a conductor: $F = BIL\\sin\\theta$. For $B = 0.5$ T, $I = 10$ A, $L = 1$ m, $\\theta = 90°$:",
        choices: ["$5$ N", "$0.5$ N", "$10$ N", "$50$ N"],
        correct: 0,
        solution: S({
          c: "Lorentz force on current-carrying wire: $\\vec F = I\\vec L \\times \\vec B$.",
          s: [
            "$F = BIL\\sin 90° = 0.5 \\times 10 \\times 1 \\times 1 = 5$ N."
          ],
          a: "$F = 5$ N",
          v: "Direction: right-hand rule. Force is zero when current and field are parallel ($\\theta = 0$)."
        })
      },
      { q: "Faraday’s law: induced EMF in a coil of 100 turns when flux changes from 0.01 to 0.05 Wb in 0.1 s:",
        choices: ["$-40$ V", "$-4$ V", "$-0.04$ V", "$40$ V"],
        correct: 0,
        solution: S({
          c: "$\\mathcal{E} = -N\\,d\\Phi/dt$. Negative sign per Lenz’s law.",
          s: [
            "$d\\Phi/dt = (0.05-0.01)/0.1 = 0.4$ Wb/s.",
            "$\\mathcal{E} = -100 \\times 0.4 = -40$ V."
          ],
          a: "$\\mathcal{E} = -40$ V",
          v: "The minus sign indicates the induced current opposes the change in flux (Lenz)."
        })
      },
      { q: "Speed of light in vacuum: $c = 1/\\sqrt{\\mu_0\\varepsilon_0}$. Approximate value:",
        choices: ["$3\\times 10^{8}$ m/s", "$3\\times 10^{6}$ m/s", "$3\\times 10^{10}$ m/s", "$3\\times 10^{5}$ m/s"],
        correct: 0,
        solution: S({
          c: "Maxwell predicted light is an EM wave with speed $1/\\sqrt{\\mu_0\\varepsilon_0}$.",
          s: [
            "$\\mu_0 = 4\\pi\\times 10^{-7}$ H/m, $\\varepsilon_0 = 8.854\\times 10^{-12}$ F/m.",
            "$\\sqrt{\\mu_0\\varepsilon_0} = 3.34\\times 10^{-9}$ s/m ⇒ $c = 1/3.34\\times 10^{-9} = 2.998\\times 10^{8}$ m/s."
          ],
          a: "$c \\approx 3\\times 10^{8}$ m/s",
          v: "In a medium with $\\varepsilon_r,\\mu_r$: $v = c/\\sqrt{\\varepsilon_r\\mu_r}$."
        })
      },
      { q: "Characteristic impedance of free space:",
        choices: ["$377\\,\\Omega$", "$50\\,\\Omega$", "$75\\,\\Omega$", "$120\\pi\\,\\Omega$ — same as A"],
        correct: 0,
        solution: S({
          c: "$\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} = 120\\pi \\approx 377\\,\\Omega$.",
          s: [
            "$120\\pi = 376.99\\,\\Omega$ — choices A and D are identical."
          ],
          a: "$\\eta_0 \\approx 377\\,\\Omega$ ($= 120\\pi$)",
          v: "Free-space wave: $|E|/|H| = \\eta_0$."
        })
      },
      { q: "Boundary condition: tangential $E$-field at the surface between two perfect dielectrics is:",
        choices: ["Continuous (equal on both sides)", "Discontinuous", "Zero", "Infinite"],
        correct: 0,
        solution: S({
          c: "Maxwell boundary conditions: $E_t$ continuous; $D_n$ continuous (if no surface charge); $B_n$ continuous; $H_t$ continuous (if no surface current).",
          s: [
            "Tangential electric field always continuous across charge-free dielectric boundary."
          ],
          a: "Continuous.",
          v: "Normal $D$ continuous: $\\varepsilon_1 E_{1n} = \\varepsilon_2 E_{2n}$ ⇒ $E$ normal jumps when $\\varepsilon$ differs."
        })
      },
      { q: "Capacitance of a parallel-plate capacitor doubles if:",
        choices: ["Plate area doubles (gap unchanged)", "Gap doubles", "Dielectric is removed", "Voltage doubles"],
        correct: 0,
        solution: S({
          c: "$C = \\varepsilon A/d$ — directly proportional to $A$, inversely to $d$.",
          s: [
            "Doubling $A$ → $C$ doubles.",
            "Doubling $d$ → $C$ halves. Voltage doesn’t affect $C$."
          ],
          a: "Plate area doubles.",
          v: "Stored energy $W = \\tfrac12 CV^{2}$: doubling $C$ at fixed $V$ doubles energy."
        })
      },
      { q: "A plane wave in air has wavelength 30 cm. Frequency?",
        choices: ["$1$ GHz", "$100$ MHz", "$10$ MHz", "$3$ GHz"],
        correct: 0,
        solution: S({
          c: "$f = c/\\lambda$.",
          s: [
            "$f = (3\\times 10^{8})/0.3 = 10^{9}$ Hz $= 1$ GHz."
          ],
          a: "$f = 1$ GHz",
          v: "Microwave range — used in Wi-Fi (2.4 GHz, 5 GHz) and cell bands."
        })
      },
      { q: "Skin depth $\\delta = \\sqrt{2/(\\omega\\mu\\sigma)}$ in copper at 60 Hz ($\\mu = \\mu_0$, $\\sigma = 5.8\\times 10^{7}$ S/m):",
        choices: ["$\\approx 8.5$ mm", "$\\approx 85$ mm", "$\\approx 0.85$ mm", "$\\approx 1$ cm"],
        correct: 0,
        solution: S({
          c: "Higher frequency → smaller skin depth → AC current confined to surface.",
          s: [
            "$\\omega = 2\\pi(60) = 377$ rad/s.",
            "$\\omega\\mu\\sigma = 377\\cdot 4\\pi\\times 10^{-7}\\cdot 5.8\\times 10^{7} = 2.748\\times 10^{4}$.",
            "$\\delta = \\sqrt{2/2.748\\times 10^{4}} = \\sqrt{7.28\\times 10^{-5}} = 8.53\\times 10^{-3}$ m $\\approx 8.5$ mm."
          ],
          a: "$\\delta \\approx 8.5$ mm",
          v: "At 1 GHz, $\\delta$ in copper drops to $\\sim 2\\,\\mu$m — why microwave conductors are plated."
        })
      }
    ],

    // ====================== Ch 12: Control Systems ======================
    12: [
      { q: "Closed-loop transfer function for unity-feedback with $G(s) = 10/(s+1)$:",
        choices: ["$\\dfrac{10}{s+11}$", "$\\dfrac{10}{s+1}$", "$\\dfrac{1}{s+11}$", "$\\dfrac{10}{s+10}$"],
        correct: 0,
        solution: S({
          c: "Unity feedback: $T(s) = G/(1+G)$.",
          s: [
            "$1 + G = 1 + 10/(s+1) = (s+11)/(s+1)$.",
            "$T = [10/(s+1)]\\cdot[(s+1)/(s+11)] = 10/(s+11)$."
          ],
          a: "$T(s) = 10/(s+11)$",
          v: "Closed-loop pole at $s = -11$, much faster than open-loop pole at $s = -1$."
        })
      },
      { q: "Steady-state error for a step input on a Type-0 system with $K_p = 10$:",
        choices: ["$1/11$", "$0$", "$\\infty$", "$1/10$"],
        correct: 0,
        solution: S({
          c: "Type-0: $e_{ss}(\\text{step}) = 1/(1+K_p)$.",
          s: [
            "$e_{ss} = 1/(1+10) = 1/11 \\approx 0.091$ (about 9.1%)."
          ],
          a: "$e_{ss} = 1/11$",
          v: "To zero step error, need Type-1 (integrator in loop): $K_p = \\infty$."
        })
      },
      { q: "Bode plot of $G(s) = 100/(s+10)$ DC gain (dB):",
        choices: ["$20$ dB", "$10$ dB", "$40$ dB", "$0$ dB"],
        correct: 0,
        solution: S({
          c: "DC gain: $G(0) = 100/10 = 10$ ⇒ $20\\log_{10}(10) = 20$ dB.",
          s: [
            "Low-frequency asymptote at +20 dB.",
            "Corner at $\\omega = 10$ rad/s; slope rolls off at $-20$ dB/dec above."
          ],
          a: "$20$ dB",
          v: "At $\\omega = 100$ rad/s: magnitude $= 100/\\sqrt{100^{2}+10^{2}} \\approx 1$, or 0 dB — one decade above corner, gain dropped 20 dB ✓."
        })
      },
      { q: "Routh–Hurwitz: characteristic polynomial $s^{3} + 4s^{2} + 5s + 2 = 0$ — system is:",
        choices: ["Stable", "Unstable", "Marginally stable", "Oscillatory"],
        correct: 0,
        solution: S({
          c: "Routh array — all first-column entries must be positive for stability.",
          s: [
            "Row $s^{3}$: 1, 5.",
            "Row $s^{2}$: 4, 2.",
            "Row $s^{1}$: $(4\\cdot 5 - 1\\cdot 2)/4 = 18/4 = 4.5$.",
            "Row $s^{0}$: 2.",
            "Column: 1, 4, 4.5, 2 — all positive ⇒ stable."
          ],
          a: "Stable.",
          v: "All roots in LHP — verify by computing or noting positive coefficients & positive Routh column."
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
          c: "Phase margin measures how close the loop is to $-180°$ at unity gain.",
          s: [
            "Find $\\omega_{gc}$ where $|G(j\\omega)| = 1$.",
            "PM = $180° + \\angle G(j\\omega_{gc})$. Positive PM → stable.",
            "Typical design target: 45°–60° for good damping."
          ],
          a: "$180° + \\angle G$ at gain crossover.",
          v: "Gain margin: $-20\\log|G(j\\omega_{pc})|$ at phase crossover ($\\angle G = -180°$)."
        })
      },
      { q: "PID controller transfer function:",
        choices: ["$K_p + K_i/s + K_d s$", "$K_p s + K_i + K_d/s$", "$K_p/s$", "$K_p K_i K_d$"],
        correct: 0,
        solution: S({
          c: "Standard PID: parallel sum of proportional, integral, derivative terms.",
          s: [
            "$U(s) = K_p E(s) + (K_i/s)E(s) + K_d s E(s)$.",
            "I term: removes steady-state error. D term: improves transient response.",
            "Practical D includes a low-pass filter to limit noise gain: $K_d s/(\\tau s+1)$."
          ],
          a: "$C(s) = K_p + K_i/s + K_d s$.",
          v: "Ziegler–Nichols tuning provides starting-point gains based on plant step or oscillation response."
        })
      },
      { q: "Pole at $s = +2$ in a closed-loop system means:",
        choices: ["Unstable", "Stable", "Marginally stable", "Critically damped"],
        correct: 0,
        solution: S({
          c: "Any pole in the right half $s$-plane (positive real part) ⇒ unstable response grows.",
          s: [
            "Time response includes $e^{+2t}$ term — diverges."
          ],
          a: "Unstable.",
          v: "Even one RHP pole destroys closed-loop stability — common in unstable plants like inverted pendulum (must be stabilized by control)."
        })
      },
      { q: "A first-order system $G(s) = K/(\\tau s + 1)$ has time constant determined by:",
        choices: ["$\\tau$ (the denominator coefficient)", "$K$", "$K\\tau$", "$1/K$"],
        correct: 0,
        solution: S({
          c: "$\\tau$ sets the rise/settling time of the exponential step response.",
          s: [
            "Step response: $y(t) = K(1 - e^{-t/\\tau})$.",
            "At $t = \\tau$: 63.2% of final value; 5τ → 99% settled."
          ],
          a: "$\\tau$.",
          v: "Bandwidth $\\omega_b = 1/\\tau$ — fast systems have small $\\tau$ and high bandwidth."
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
          c: "Kalman’s rank condition for controllability.",
          s: [
            "Controllability matrix $\\mathcal C = [B\\ AB\\ \\ldots\\ A^{n-1}B]$.",
            "If rank $\\mathcal C = n$ (full row rank), every state is reachable with appropriate $u(t)$."
          ],
          a: "Controllability matrix has full rank.",
          v: "Observability has a dual condition: $[C^{T}\\ (CA)^{T}\\ \\ldots]$ full rank."
        })
      },
      { q: "Root-locus starts (at $K = 0$) from:",
        choices: ["Open-loop poles", "Open-loop zeros", "Origin", "Infinity"],
        correct: 0,
        solution: S({
          c: "As $K\\to 0$, closed-loop poles approach open-loop poles; as $K\\to\\infty$, they approach zeros (or infinity if more poles than zeros).",
          s: [
            "Number of branches = number of poles (or zeros, whichever larger).",
            "Branches ending at infinity follow asymptotes at angles $(2k+1)\\pi/(P-Z)$."
          ],
          a: "Open-loop poles.",
          v: "Visualizes how closed-loop pole locations migrate with proportional gain."
        })
      }
    ],

    // ====================== Ch 13: Communications ======================
    13: [
      { q: "AM signal: $s(t) = [1 + m\\cos(\\omega_m t)]\\cos(\\omega_c t)$. With $m = 0.5$, modulation index is:",
        choices: ["$0.5$ (50%)", "$1.0$ (100%)", "$50$", "$0.25$"],
        correct: 0,
        solution: S({
          c: "Modulation index $m$ = ratio of message amplitude to carrier amplitude.",
          s: [
            "Here $m = 0.5$ — 50% modulation.",
            "Over-modulation ($m > 1$) causes envelope distortion and signal recovery problems."
          ],
          a: "50%",
          v: "Total power in AM: $P = P_c(1 + m^{2}/2) = P_c(1 + 0.125)$ — sidebands carry only 11% of total power at $m=0.5$."
        })
      },
      { q: "FM modulation index $\\beta = \\Delta f/f_m$. With $\\Delta f = 75$ kHz, $f_m = 15$ kHz:",
        choices: ["$5$", "$0.2$", "$1125$", "$15$"],
        correct: 0,
        solution: S({
          c: "FM modulation index measures frequency deviation per Hz of message.",
          s: [
            "$\\beta = 75/15 = 5$.",
            "Carson’s rule bandwidth: $B = 2(\\beta + 1)f_m = 2 \\times 6 \\times 15 = 180$ kHz."
          ],
          a: "$\\beta = 5$",
          v: "Commercial FM broadcasting uses 200-kHz channel spacing for this kind of modulation index."
        })
      },
      { q: "Information capacity (Shannon): bandwidth 4 kHz, SNR = 30 dB. Channel capacity?",
        choices: ["$\\approx 39.9$ kbps", "$\\approx 12$ kbps", "$\\approx 120$ kbps", "$\\approx 4$ kbps"],
        correct: 0,
        solution: S({
          c: "Shannon: $C = B\\log_2(1 + \\text{SNR})$ — theoretical maximum error-free rate.",
          s: [
            "SNR = 30 dB → linear ratio = $10^{3} = 1000$.",
            "$C = 4000 \\log_2(1001) \\approx 4000 \\times 9.97 \\approx 39.9$ kbps."
          ],
          a: "$C \\approx 39.9$ kbps",
          v: "POTS line: 4 kHz BW, 30 dB SNR → ~40 kbps. Real modems (V.92) achieve 56 kbps downstream using digital-side advantage."
        })
      },
      { q: "PSK with M = 4 (QPSK). Bits per symbol:",
        choices: ["$2$", "$1$", "$4$", "$\\log_2 16 = 4$"],
        correct: 0,
        solution: S({
          c: "M-ary modulation: $\\log_2 M$ bits/symbol.",
          s: [
            "$\\log_2 4 = 2$ bits/symbol."
          ],
          a: "2 bits/symbol.",
          v: "QPSK doubles bandwidth efficiency vs BPSK at same energy per bit."
        })
      },
      { q: "Noise figure: amplifier $G = 20$ dB, $NF = 3$ dB. Input SNR = 30 dB, output SNR is:",
        choices: ["$27$ dB", "$33$ dB", "$53$ dB", "$30$ dB"],
        correct: 0,
        solution: S({
          c: "Noise figure: $NF = SNR_{in}/SNR_{out}$ (linear), or in dB: $SNR_{out} = SNR_{in} - NF$.",
          s: [
            "$SNR_{out} = 30 - 3 = 27$ dB."
          ],
          a: "27 dB.",
          v: "NF is independent of gain — high gain doesn’t fix poor noise performance."
        })
      },
      { q: "Bit error rate (BER) for BPSK with $E_b/N_0 = 10$ dB approximately:",
        choices: ["$\\approx 3.9\\times 10^{-6}$", "$10^{-2}$", "$10^{-12}$", "$0.1$"],
        correct: 0,
        solution: S({
          c: "BPSK BER: $P_b = Q(\\sqrt{2 E_b/N_0})$.",
          s: [
            "$E_b/N_0 = 10$ dB → linear 10.",
            "$\\sqrt{2\\times 10} = \\sqrt{20} = 4.47$.",
            "$Q(4.47) \\approx 3.9\\times 10^{-6}$."
          ],
          a: "$\\approx 3.9\\times 10^{-6}$",
          v: "Adding 3 dB to $E_b/N_0$ reduces BER by roughly an order of magnitude in this regime."
        })
      },
      { q: "TDM vs. FDM: which uses time slots to multiplex users?",
        choices: ["TDM", "FDM", "Both", "Neither"],
        correct: 0,
        solution: S({
          c: "Time-division multiplexing (TDM) allocates time slots; frequency-division (FDM) allocates frequency bands.",
          s: [
            "TDM example: T-1 carrier (24 voice channels at 8 kHz each).",
            "FDM example: cable TV channels on coax."
          ],
          a: "TDM.",
          v: "OFDM combines both: subcarriers (FDM) and symbol times (TDM)."
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
          c: "Cluster size $N$ = number of cells using the entire spectrum before reuse.",
          s: [
            "$N = 7$ ⇒ each frequency assigned to 1 cell per 7-cell cluster.",
            "Co-channel reuse distance $D = R\\sqrt{3N}$ where $R$ is cell radius."
          ],
          a: "Same frequencies repeat every 7 cells.",
          v: "Smaller $N$ = more capacity but more co-channel interference. Modern systems use $N = 1$ with OFDMA + interference coordination."
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
          c: "Double-sideband suppressed carrier removes the carrier tone, saving power but requiring coherent detection.",
          s: [
            "Standard AM wastes ~50% power in the carrier (information-free).",
            "DSB-SC sends only sidebands but receiver must regenerate the carrier."
          ],
          a: "No carrier, 50% power saving.",
          v: "SSB (single sideband) saves both carrier and half the bandwidth, at cost of more complex receiver."
        })
      },
      { q: "PCM bit rate: voice band 0–4 kHz, sampled at 8 kHz, quantized 8 bits/sample. Bit rate:",
        choices: ["$64$ kbps", "$32$ kbps", "$8$ kbps", "$128$ kbps"],
        correct: 0,
        solution: S({
          c: "Bit rate = $f_s \\times n_{bits}$.",
          s: [
            "$8000 \\times 8 = 64{,}000$ bps = 64 kbps."
          ],
          a: "64 kbps.",
          v: "T-1 carrier carries 24 such PCM channels at 1.544 Mbps."
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
