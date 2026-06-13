// FE Electrical Question Bank — Extension Pack 6 (~180 problems)
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") return;

  const P = {
    // Math — +15
    1: [
      { q: "Find the inverse of $A = \\begin{pmatrix}2&1\\\\3&2\\end{pmatrix}$.",
        choices: ["$\\begin{pmatrix}2&-1\\\\-3&2\\end{pmatrix}$", "$\\begin{pmatrix}-2&1\\\\3&-2\\end{pmatrix}$", "Not invertible", "$\\frac{1}{2}A$"], correct: 0,
        solution: S({
          c: "For a 2×2 matrix $A=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$, the inverse is $A^{-1} = \\dfrac{1}{|A|}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$: swap the diagonal, negate the off-diagonal, divide by the determinant.",
          s: [
            "<b>Step 1 — Determinant.</b> $|A| = ad-bc = (2)(2)-(1)(3) = 1$. Nonzero → invertible.",
            "<b>Step 2 — Swap/negate.</b> $\\begin{pmatrix}2&-1\\\\-3&2\\end{pmatrix}$.",
            "<b>Step 3 — Divide by det (=1).</b> Unchanged.",
            "<b>Step 4 — Distractor audit.</b> 'Not invertible' would need det=0; $\\frac12A$ and the all-negated option don't follow the formula."
          ],
          a: "$\\begin{pmatrix}2&-1\\\\-3&2\\end{pmatrix}$",
          v: "Verify $AA^{-1}=I$: top-left $(2)(2)+(1)(-3)=1$ ✓. A determinant of exactly 1 is the lucky case where no division is needed."

        }), ref: "p.57" },
      { q: "Solve $3y' + 6y = 12$ with $y(0) = 0$.",
        choices: ["$y(t) = 2(1 - e^{-2t})$", "$y = 4t$", "$y = e^{-2t}$", "$y = 2e^{2t}$"], correct: 0,
        solution: S({
          c: "A first-order linear ODE solves as steady-state (particular) + transient (homogeneous): $y = y_p + Ce^{-t/\\tau}$. Normalize first by dividing through by the leading coefficient.",
          s: [
            "<b>Step 1 — Normalize.</b> Divide by 3: $y' + 2y = 4$.",
            "<b>Step 2 — Steady state.</b> Set $y'=0$: $2y_p=4 \\Rightarrow y_p=2$. Homogeneous part: $Ce^{-2t}$.",
            "<b>Step 3 — Apply IC.</b> $y(0)=2+C=0 \\Rightarrow C=-2$, so $y=2(1-e^{-2t})$.",
            "<b>Step 4 — Distractor audit.</b> $4t$ isn't exponential; $e^{-2t}$ ignores the forcing; $2e^{2t}$ has the wrong (growing) sign."
          ],
          a: "$y = 2(1-e^{-2t})$",
          v: "Limits: $y(0)=0$ ✓ and $y(\\infty)\\to2$ (the steady state) ✓. This is the same rise shape as a charging RC circuit toward its final value."

        }), ref: "p.54" },
      { q: "$\\sin\\theta = 0.8$, find $\\tan\\theta$ in Q1:",
        choices: ["$4/3$", "$3/4$", "$0.8$", "$\\sqrt{0.36}$"], correct: 0,
        solution: S({
          c: "Given one trig ratio, find the others via the Pythagorean identity $\\sin^2+\\cos^2=1$, then $\\tan=\\sin/\\cos$. Quadrant I means all ratios are positive.",
          s: [
            "<b>Step 1 — Cosine.</b> $\\cos\\theta = \\sqrt{1-0.8^2} = \\sqrt{0.36} = 0.6$ (positive in Q1).",
            "<b>Step 2 — Tangent.</b> $\\tan\\theta = 0.8/0.6 = 4/3$.",
            "<b>Step 3 — Distractor audit.</b> $3/4$ inverts it; 0.8 is $\\sin$; $\\sqrt{0.36}=0.6$ is $\\cos$."
          ],
          a: "$\\tan\\theta = 4/3$",
          v: "It's the 3-4-5 triangle: sin=4/5=0.8, cos=3/5=0.6, tan=4/3 ✓ — recognizing this Pythagorean triple lets you skip the algebra entirely."

        }), ref: "p.37" },
      { q: "If $f(x) = x^3 + 2x$, find $f^{-1}(3)$:",
        choices: ["$1$", "$3$", "$\\sqrt{3}$", "$2$"], correct: 0,
        solution: S({
          c: "Finding $f^{-1}(3)$ means solving $f(x)=3$ — the input that produces output 3. For a strictly increasing function, the solution is unique.",
          s: [
            "<b>Step 1 — Set up.</b> $x^3+2x=3$.",
            "<b>Step 2 — Try simple values.</b> $x=1$: $1+2=3$ ✓. So $f^{-1}(3)=1$.",
            "<b>Step 3 — Distractor audit.</b> 3 confuses input with output; $\\sqrt3$ and 2 don't satisfy the equation."
          ],
          a: "$f^{-1}(3) = 1$",
          v: "Uniqueness check: $f'(x)=3x^2+2>0$ everywhere → $f$ is strictly increasing → exactly one solution ✓. No need to find a general inverse formula; just solve for the one value."

        }), ref: "p.35" },
      { q: "Volume of cylinder: $r=2$, $h=5$:",
        choices: ["$20\\pi$", "$10\\pi$", "$40\\pi$", "$4\\pi$"], correct: 0,
        solution: S({
          c: "Cylinder volume = base area × height = $\\pi r^2 h$.",
          s: [
            "<b>Step 1 — Apply.</b> $V = \\pi(2^2)(5) = \\pi(4)(5) = 20\\pi$.",
            "<b>Step 2 — Distractor audit.</b> $10\\pi$ forgets to square r; $40\\pi$ doubles wrongly; $4\\pi$ drops the height."
          ],
          a: "$V = 20\\pi$",
          v: "Numerically ≈ 62.8 cubic units ✓. The $r^2$ (not $r$) is the common slip — area scales with radius squared."

        }), ref: "p.39" },
      { q: "Surface area of sphere: $r = 3$:",
        choices: ["$36\\pi$", "$9\\pi$", "$12\\pi$", "$108\\pi$"], correct: 0,
        solution: S({
          c: "Sphere surface area is $A = 4\\pi r^2$ (its volume, for contrast, is $\\tfrac43\\pi r^3$).",
          s: [
            "<b>Step 1 — Apply.</b> $A = 4\\pi(3^2) = 4\\pi(9) = 36\\pi$.",
            "<b>Step 2 — Distractor audit.</b> $9\\pi$ forgets the 4; $12\\pi$ uses $4\\pi r$; $108\\pi$ is the volume-ish $4\\pi r^3$ mistake."
          ],
          a: "$A = 36\\pi$",
          v: "Don't confuse area ($4\\pi r^2$) with volume ($\\tfrac43\\pi r^3 = 36\\pi$ here too, coincidentally at r=3) ✓ — at r=3 both happen to equal 36π, a fun coincidence, but the formulas differ."

        }), ref: "p.39" },
      { q: "Hyperbolic identity: $\\cosh^2 x - \\sinh^2 x = ?$",
        choices: ["$1$", "$-1$", "$\\sin 2x$", "$0$"], correct: 0,
        solution: S({
          c: "The hyperbolic functions obey $\\cosh^2 x - \\sinh^2 x = 1$ — like the circular $\\cos^2+\\sin^2=1$ but with a MINUS sign (and it equals 1 for all x).",
          s: [
            "<b>Step 1 — Use definitions.</b> $\\cosh x=(e^x+e^{-x})/2$, $\\sinh x=(e^x-e^{-x})/2$.",
            "<b>Step 2 — Square and subtract.</b> $\\dfrac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4} = \\dfrac{4}{4} = 1$.",
            "<b>Step 3 — Distractor audit.</b> $-1$ flips the sign; $\\sin2x$ is unrelated; 0 is wrong."
          ],
          a: "1",
          v: "The minus sign reflects the geometry: circular functions parametrize a circle ($x^2+y^2=1$), hyperbolic ones a hyperbola ($x^2-y^2=1$) ✓ — hence the names."

        }), ref: "p.37" },
      { q: "Integrate $\\int x \\cos x \\, dx$:",
        choices: ["$x\\sin x + \\cos x + C$", "$\\sin x + C$", "$x \\sin x - \\cos x + C$", "$\\sin x - x\\cos x + C$"], correct: 0,
        solution: S({
          c: "Integration by parts: $\\int u\\,dv = uv - \\int v\\,du$. Choose $u$ to be the part that SIMPLIFIES when differentiated (here $u=x$, since $du=dx$).",
          s: [
            "<b>Step 1 — Assign.</b> $u=x \\Rightarrow du=dx$; $dv=\\cos x\\,dx \\Rightarrow v=\\sin x$.",
            "<b>Step 2 — Apply.</b> $x\\sin x - \\int\\sin x\\,dx = x\\sin x + \\cos x + C$.",
            "<b>Step 3 — Distractor audit.</b> $\\sin x+C$ forgets the product; the $-\\cos x$ variants get the sign of the second term wrong."
          ],
          a: "$x\\sin x + \\cos x + C$",
          v: "Differentiate back: $\\sin x + x\\cos x - \\sin x = x\\cos x$ ✓. The 'LIATE' rule (pick u in order: Log, Inverse, Algebraic, Trig, Exp) tells you to choose the algebraic $x$ as u here."

        }), ref: "p.49" },
      { q: "Convergent series test for $\\sum 1/n^2$:",
        choices: ["Converges (p-series with p=2)", "Diverges", "Oscillates", "Unknown"], correct: 0,
        solution: S({
          c: "The p-series $\\sum 1/n^p$ CONVERGES if and only if $p>1$. The exponent decides everything.",
          s: [
            "<b>Step 1 — Identify p.</b> $\\sum 1/n^2$ has $p=2$.",
            "<b>Step 2 — Test.</b> $2>1$ → converges.",
            "<b>Step 3 — Distractor audit.</b> 'Diverges' would need $p\\le1$ (e.g. the harmonic series $p=1$); series of positive terms don't 'oscillate'."
          ],
          a: "Converges (p=2 > 1).",
          v: "Famous exact value (the Basel problem): $\\sum 1/n^2 = \\pi^2/6 \\approx 1.645$ ✓. Contrast the harmonic series ($p=1$) which DIVERGES despite its terms shrinking — the p=1 boundary is the key dividing line."

        }), ref: "p.50" },
      { q: "Newton's method for $f(x) = x^2 - 2$ starting $x_0 = 1$: next iterate:",
        choices: ["$x_1 = 1.5$", "$x_1 = 2$", "$x_1 = 0$", "$x_1 = \\sqrt{2}$"], correct: 0,
        solution: S({
          c: "Newton's method iterates $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$ — following the tangent line to its x-intercept to home in on a root.",
          s: [
            "<b>Step 1 — Evaluate.</b> $f(1)=1-2=-1$; $f'(x)=2x$, so $f'(1)=2$.",
            "<b>Step 2 — Iterate.</b> $x_1 = 1 - (-1)/2 = 1.5$.",
            "<b>Step 3 — Distractor audit.</b> 2 and 0 misapply the formula; $\\sqrt2$ is the eventual LIMIT, not the first iterate."
          ],
          a: "$x_1 = 1.5$",
          v: "It's converging to $\\sqrt2\\approx1.414$: the next step gives $x_2\\approx1.417$, already 3 correct digits ✓ — Newton's quadratic convergence roughly doubles accuracy each step."

        }), ref: "p.61" },
      { q: "Continuity at $x_0$ requires:",
        choices: ["$\\lim_{x\\to x_0} f(x) = f(x_0)$", "Just $f(x_0)$ defined", "Limit exists only", "Derivative exists"], correct: 0,
        solution: S({
          c: "A function is continuous at $x_0$ when three things hold together: $f(x_0)$ is defined, the limit $\\lim_{x\\to x_0}f(x)$ exists, AND they are EQUAL. The full condition is $\\lim_{x\\to x_0}f(x)=f(x_0)$.",
          s: [
            "<b>Step 1 — Match.</b> $\\lim_{x\\to x_0}f(x)=f(x_0)$.",
            "<b>Step 2 — Distractor audit.</b> 'Just $f(x_0)$ defined' or 'limit exists only' are each just ONE of the three needed conditions; 'derivative exists' is a STRONGER property."
          ],
          a: "$\\lim_{x\\to x_0} f(x) = f(x_0)$.",
          v: "Differentiable ⟹ continuous, but NOT the reverse — $|x|$ is continuous at 0 yet not differentiable there ✓. Continuity is the weaker, more basic requirement."

        }), ref: "p.47" },
      { q: "$\\sin(\\pi - x) = ?$",
        choices: ["$\\sin x$", "$-\\sin x$", "$\\cos x$", "$0$"], correct: 0,
        solution: S({
          c: "The supplementary-angle identity: $\\sin(\\pi-x)=\\sin x$ — sine is symmetric about 90°. (Derive it from the angle-subtraction formula.)",
          s: [
            "<b>Step 1 — Expand.</b> $\\sin\\pi\\cos x - \\cos\\pi\\sin x = (0)\\cos x - (-1)\\sin x = \\sin x$.",
            "<b>Step 2 — Distractor audit.</b> $-\\sin x$ has the wrong sign; $\\cos x$ would be the $\\sin(\\pi/2-x)$ co-function identity; 0 is wrong."
          ],
          a: "$\\sin x$",
          v: "Geometric meaning: angles $x$ and $\\pi-x$ are supplementary and share the same sine height ✓ — e.g. $\\sin30°=\\sin150°=0.5$. (Cosine, by contrast, flips sign: $\\cos(\\pi-x)=-\\cos x$.)"

        }), ref: "p.37" },
      { q: "If $z_1 = 4+j3$ and $z_2 = 1-j2$, find $z_1 + z_2$:",
        choices: ["$5 + j1$", "$3 + j5$", "$4 - j6$", "$5 - j1$"], correct: 0,
        solution: S({
          c: "Complex addition is component-wise: add real parts, add imaginary parts.",
          s: [
            "<b>Step 1 — Add.</b> Real: $4+1=5$. Imag: $3+(-2)=1$.",
            "<b>Step 2 — Distractor audit.</b> $3+j5$ swaps parts; $4-j6$ and $5-j1$ mishandle signs."
          ],
          a: "$5+j$",
          v: "Addition is easiest in rectangular form (just stack components) ✓ — whereas multiplication/division are easiest in polar. Knowing which form suits which operation saves work."

        }), ref: "p.36" },
      { q: "Matrix multiplication associative? $(AB)C = A(BC)$:",
        choices: ["Yes (always, when dimensions allow)", "No", "Only for square", "Only for diagonal"], correct: 0,
        solution: S({
          c: "Matrix multiplication IS associative — $(AB)C = A(BC)$ — whenever the dimensions are compatible. But it is NOT commutative ($AB \\ne BA$ in general).",
          s: [
            "<b>Step 1 — Match.</b> Yes, always (when dimensions allow).",
            "<b>Step 2 — Distractor audit.</b> 'No' is false; it's not limited to square or diagonal matrices — associativity holds generally."
          ],
          a: "Yes — associative (but not commutative).",
          v: "Associativity is what lets you chain transformations and optimize the multiplication ORDER (matrix-chain ordering) for efficiency ✓. The lack of COMMUTATIVITY is the property that trips people up — order of factors matters."

        }), ref: "p.57" },
      { q: "Eigenvalue of identity matrix $I_n$:",
        choices: ["$1$ (with multiplicity $n$)", "$0$", "$n$", "Various"], correct: 0,
        solution: S({
          c: "The identity matrix leaves every vector unchanged: $I\\vec x=\\vec x=1\\cdot\\vec x$. So EVERY nonzero vector is an eigenvector, all with eigenvalue $\\lambda=1$ (multiplicity $n$).",
          s: [
            "<b>Step 1 — Reason.</b> $I\\vec x = \\vec x$ for all $\\vec x$ → $\\lambda=1$.",
            "<b>Step 2 — Confirm via char. poly.</b> $\\det(I-\\lambda I)=(1-\\lambda)^n=0 \\Rightarrow \\lambda=1$, $n$-fold.",
            "<b>Step 3 — Distractor audit.</b> 0 would be a singular matrix; $n$ confuses eigenvalue with dimension; 'various' is wrong."
          ],
          a: "$\\lambda = 1$ (multiplicity n).",
          v: "Consistent with the trace and determinant: $\\text{tr}(I)=n=\\sum\\lambda_i = n(1)$ ✓ and $\\det(I)=1=\\prod\\lambda_i=1^n$ ✓. The identity is the simplest possible eigen-problem."

        }), ref: "p.58" },
    ],

    // Prob — +8
    2: [
      { q: "P(spade or king) drawing 1 card:",
        choices: ["$16/52 = 4/13$", "$13/52$", "$17/52$", "$12/52$"], correct: 0,
        solution: S({
          c: "Inclusion-exclusion: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Subtract the overlap so it isn't counted twice.",
          s: [
            "<b>Step 1 — Count each.</b> 13 spades, 4 kings.",
            "<b>Step 2 — Subtract overlap.</b> The king of spades is in both → $13+4-1=16$.",
            "<b>Step 3 — Probability.</b> $16/52 = 4/13$.",
            "<b>Step 4 — Distractor audit.</b> $13/52$ counts only spades; $17/52$ forgets to remove the overlap; $12/52$ over-subtracts."
          ],
          a: "$4/13$",
          v: "The −1 is the whole point of inclusion-exclusion ✓ — without it you'd double-count the one card that's both a spade AND a king."

        }), ref: "p.65" },
      { q: "Variance of binomial $B(20, 0.3)$:",
        choices: ["$4.2$", "$6$", "$2.05$", "$14$"], correct: 0,
        solution: S({
          c: "A binomial distribution $B(n,p)$ has variance $\\sigma^2 = np(1-p)$.",
          s: [
            "<b>Step 1 — Apply.</b> $\\sigma^2 = 20(0.3)(0.7) = 4.2$.",
            "<b>Step 2 — Distractor audit.</b> 6 is the MEAN ($np$); 2.05 is the standard deviation ($\\sqrt{4.2}$); 14 misuses the formula."
          ],
          a: "$\\sigma^2 = 4.2$",
          v: "Don't confuse mean ($np=6$) with variance ($np(1-p)=4.2$) with SD ($\\sqrt{4.2}=2.05$) ✓. Variance is maximized at $p=0.5$ (most uncertainty) and shrinks toward the extremes."

        }), ref: "p.66" },
      { q: "If $X$ has mean 100, variance 25, then $Y = 2X + 10$ has mean and variance:",
        choices: ["$\\mu_Y=210$, $\\sigma_Y^2=100$", "$210, 25$", "$110, 25$", "$210, 50$"], correct: 0,
        solution: S({
          c: "Linear transformation rules: $E[aX+b]=aE[X]+b$ (mean shifts and scales), but $\\text{Var}(aX+b)=a^2\\text{Var}(X)$ — the constant $b$ drops out and the scale is SQUARED.",
          s: [
            "<b>Step 1 — Mean.</b> $E[Y]=2(100)+10=210$.",
            "<b>Step 2 — Variance.</b> $\\text{Var}(Y)=2^2(25)=100$ (the +10 has no effect).",
            "<b>Step 3 — Distractor audit.</b> '210, 25' forgets to scale variance; '110, 25' misadds the mean; '210, 50' uses $a$ instead of $a^2$."
          ],
          a: "$\\mu_Y=210$, $\\sigma_Y^2=100$.",
          v: "Why $b$ vanishes from variance: shifting data doesn't change its SPREAD ✓; only stretching (the factor $a$) does, and spread scales as $a^2$ because variance is in squared units."

        }), ref: "p.66" },
      { q: "Hypergeometric: pick 5 from population with 10 successes and 20 failures. P(2 successes):",
        choices: ["$\\binom{10}{2}\\binom{20}{3}/\\binom{30}{5}$", "$(2/5)$", "$\\binom{30}{5}$", "$0.4$"], correct: 0,
        solution: S({
          c: "The HYPERGEOMETRIC distribution models sampling WITHOUT replacement: $P(k)=\\dfrac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$, with $N$ total, $K$ successes, $n$ drawn.",
          s: [
            "<b>Step 1 — Identify.</b> $N=30$, $K=10$ successes, $n=5$ drawn, $k=2$ wanted.",
            "<b>Step 2 — Apply.</b> $P=\\dfrac{\\binom{10}{2}\\binom{20}{3}}{\\binom{30}{5}}$.",
            "<b>Step 3 — Distractor audit.</b> $2/5$ and 0.4 ignore the combinatorics; $\\binom{30}{5}$ alone is just the denominator."
          ],
          a: "$\\dfrac{\\binom{10}{2}\\binom{20}{3}}{\\binom{30}{5}}$",
          v: "Use hypergeometric (not binomial) when draws AREN'T replaced, so probabilities shift each draw ✓ — e.g. dealing cards or quality-inspecting a finite batch. Binomial assumes replacement (constant p)."

        }), ref: "p.66" },
      { q: "Sum of n indep Poisson($\\lambda_i$):",
        choices: ["Poisson with $\\lambda_{total} = \\sum \\lambda_i$", "Not Poisson", "Exponential", "Normal"], correct: 0,
        solution: S({
          c: "Poisson distributions are CLOSED under addition: the sum of independent Poisson variables is Poisson, with rate equal to the sum of the rates: $\\lambda_{total}=\\sum\\lambda_i$.",
          s: [
            "<b>Step 1 — Match.</b> Poisson with $\\lambda_{total}=\\sum\\lambda_i$.",
            "<b>Step 2 — Distractor audit.</b> It stays Poisson (not 'not Poisson'); it's not exponential (that's the WAITING TIME between events) or normal."
          ],
          a: "Poisson($\\sum\\lambda_i$).",
          v: "Intuitive: two independent counting processes combine into one counting process whose rate is the total ✓ — e.g. two checkout lines with rates 3 and 5/hr give a combined Poisson(8/hr) stream."

        }), ref: "p.66" },
      { q: "Two normal RVs $X_1$ ~ $N(10, 4)$, $X_2$ ~ $N(20, 9)$ independent. $X_1 + X_2$ distribution:",
        choices: ["$N(30, 13)$", "$N(30, 5)$", "$N(15, 6.5)$", "$N(30, 25)$"], correct: 0,
        solution: S({
          c: "For INDEPENDENT normals, the sum is normal with means added AND variances added: $X_1+X_2 \\sim N(\\mu_1+\\mu_2,\\ \\sigma_1^2+\\sigma_2^2)$.",
          s: [
            "<b>Step 1 — Mean.</b> $10+20=30$.",
            "<b>Step 2 — Variance.</b> $4+9=13$ (add VARIANCES, not standard deviations).",
            "<b>Step 3 — Distractor audit.</b> $N(30,5)$ wrongly added SDs ($2+3$); $N(15,6.5)$ averaged; $N(30,25)$ is off."
          ],
          a: "$N(30, 13)$.",
          v: "The classic trap: variances add, standard deviations DON'T ✓ — here SD of the sum is $\\sqrt{13}=3.6$, not $2+3=5$. This 'add in quadrature' rule underlies error propagation."

        }), ref: "p.67" },
      { q: "Margin of error in poll proportions: $1/\\sqrt{n}$ approximation. For $n = 400$:",
        choices: ["$\\pm 5\\%$", "$\\pm 1\\%$", "$\\pm 10\\%$", "$\\pm 0.5\\%$"], correct: 0,
        solution: S({
          c: "For a proportion near 0.5 at 95% confidence, margin of error is approximately $MOE \\approx 1/\\sqrt n$.",
          s: [
            "<b>Step 1 — Apply.</b> $1/\\sqrt{400}=1/20=0.05=5\\%$.",
            "<b>Step 2 — Distractor audit.</b> ±1% would need $n=10{,}000$; ±10% is $n=100$; ±0.5% needs $n=40{,}000$."
          ],
          a: "$\\pm 5\\%$",
          v: "The $\\sqrt n$ law explains why polls quote ±3-5%: a typical $n\\approx1000$ gives ±3%, and cutting the margin in half requires QUADRUPLING the sample ✓ — diminishing returns make ultra-precise polls expensive."

        }), ref: "p.69" },
      { q: "Goodness of fit: $\\chi^2$ test compares:",
        choices: ["Observed vs expected frequencies", "Means", "Variances", "Correlations"], correct: 0,
        solution: S({
          c: "The chi-square goodness-of-fit test compares OBSERVED frequencies against EXPECTED frequencies: $\\chi^2=\\sum\\dfrac{(O-E)^2}{E}$. A large value signals a poor fit (observations stray from the model).",
          s: [
            "<b>Step 1 — Match.</b> Observed vs expected frequencies.",
            "<b>Step 2 — Distractor audit.</b> Means are compared by t-tests; variances by F-tests; correlations by r — $\\chi^2$ is for CATEGORICAL frequency data."
          ],
          a: "Observed vs expected frequencies.",
          v: "Used for dice-fairness, contingency tables, and distribution fitting ✓ — you reject the model if $\\chi^2$ exceeds the critical value for the degrees of freedom. It squares deviations and normalizes by expected count."

        }), ref: "p.70" },
    ],

    // Ethics — +3
    3: [
      { q: "If approached with bribery, an engineer must:",
        choices: ["Refuse, document, report", "Accept and warn later", "Negotiate", "Ignore"], correct: 0,
        solution: S({
          c: "Bribery violates both the engineering ethics code AND criminal law. The required response: refuse, document the request, and report it.",
          s: [
            "<b>Step 1 — Match.</b> Refuse, document, report.",
            "<b>Step 2 — Distractor audit.</b> 'Accept and warn later', 'negotiate', and 'ignore' all involve complicity or inaction — none is acceptable."
          ],
          a: "Refuse, document, and report.",
          v: "Documenting protects you and creates a record; reporting (to employer, board, or law enforcement) fulfills the public-trust duty ✓ — silence can make you complicit in a crime."

        }), ref: "p.5" },
      { q: "Engineers must report public-welfare-affecting violations to:",
        choices: ["Appropriate authority (board, regulator)", "Just supervisor", "Nobody", "Only when asked"], correct: 0,
        solution: S({
          c: "When a violation threatens public welfare, the engineer must escalate to the APPROPRIATE AUTHORITY — typically the licensing board or regulator, after exhausting the internal chain.",
          s: [
            "<b>Step 1 — Match.</b> Appropriate authority (board, regulator).",
            "<b>Step 2 — Distractor audit.</b> 'Just supervisor' may be insufficient if ignored; 'nobody' / 'only when asked' abandon the public-safety duty."
          ],
          a: "The appropriate authority (board/regulator).",
          v: "Best practice: try internal resolution FIRST (supervisor, management), then go external if unaddressed ✓ — Canon 1 (public welfare paramount) and whistleblower protections back this escalation path."

        }), ref: "p.5" },
      { q: "Engineering record retention period (typical):",
        choices: ["Years or decades (varies by jurisdiction)", "1 week", "Until project ends", "Indefinite by law"], correct: 0,
        solution: S({
          c: "Engineering records (drawings, calculations, correspondence) must be kept through the LIABILITY period — typically years to decades, varying by jurisdiction and project type.",
          s: [
            "<b>Step 1 — Match.</b> Years to decades (jurisdiction-dependent).",
            "<b>Step 2 — Distractor audit.</b> '1 week' and 'until project ends' are far too short; 'indefinite by law' overstates — statutes of repose eventually cap liability."
          ],
          a: "Years to decades (varies by jurisdiction).",
          v: "Typical: 7-10 years for civil work, longer for aviation/medical ✓. The STATUTE OF REPOSE limits how long after completion you can be sued — records are kept at least that long to defend your work."

        }), ref: "p.11" },
    ],

    // Econ — +7
    4: [
      { q: "Inflation rate 4% per year. $1000 today worth in real terms after 5 years:",
        choices: ["$\\approx \\$822$", "$\\$1217$", "$\\$1000$", "$\\$1200$"], correct: 0,
        solution: S({
          c: "Inflation erodes purchasing power. The real (constant-dollar) value of money in the future is nominal ÷ inflation factor: $1000/(1+f)^n$.",
          s: [
            "<b>Step 1 — Inflation factor.</b> $(1.04)^5 = 1.2167$.",
            "<b>Step 2 — Real value.</b> $1000/1.2167 = \\$822$.",
            "<b>Step 3 — Distractor audit.</b> $\\$1217$ MULTIPLIED (that's future nominal cost of $1000 of goods); $\\$1000$ ignores inflation; $\\$1200$ is a rough guess."
          ],
          a: "$\\approx \\$822$",
          v: "Note the direction: $1000 cash kept under a mattress BUYS only $822 worth after 5 years of 4% inflation ✓ — which is why money must earn at least the inflation rate just to hold real value."

        }), ref: "p.230" },
      { q: "Effective vs nominal: 8% APR compounded continuously:",
        choices: ["$EAR \\approx 8.33\\%$", "$8\\%$", "$16\\%$", "$\\approx 9\\%$"], correct: 0,
        solution: S({
          c: "Continuous compounding gives the maximum effective rate: $EAR = e^r - 1$.",
          s: [
            "<b>Step 1 — Apply.</b> $EAR = e^{0.08}-1 = 1.0833-1 = 8.33\\%$.",
            "<b>Step 2 — Distractor audit.</b> 8% ignores compounding; 16% doubles wrongly; 9% overshoots."
          ],
          a: "$EAR \\approx 8.33\\%$",
          v: "Continuous compounding is the CEILING — quarterly gives 8.24%, monthly 8.30%, continuous 8.33% ✓. More frequent compounding raises EAR but with rapidly diminishing returns toward the $e^r-1$ limit."

        }), ref: "p.230" },
      { q: "AOC (Annual Operating Cost) negative cash flow each year. NPV at $i$:",
        choices: ["Negative", "Positive", "Zero", "Cannot tell"], correct: 0,
        solution: S({
          c: "If every cash flow is negative (a cost-only project), the net present value is necessarily negative — there's no income to offset.",
          s: [
            "<b>Step 1 — Reason.</b> All flows < 0 → NPV < 0.",
            "<b>Step 2 — Distractor audit.</b> Positive/zero are impossible without inflows; 'cannot tell' is wrong — the sign is determined."
          ],
          a: "Negative.",
          v: "For cost-only comparisons you don't seek positive NPV — you pick the LEAST negative (lowest-cost) alternative ✓. This is why service/infrastructure projects use equivalent-annual-cost rather than profit metrics."

        }), ref: "p.231" },
      { q: "Future worth of $\\$200$/yr deposits for 30 years at 6%:",
        choices: ["$\\approx \\$15{,}815$", "$\\$6000$", "$\\$10{,}000$", "$\\$200$"], correct: 0,
        solution: S({
          c: "The future worth of a uniform annual series uses the compound-amount factor: $F = A\\cdot(F/A,i,n)$ where $(F/A)=\\dfrac{(1+i)^n-1}{i}$.",
          s: [
            "<b>Step 1 — Growth factor.</b> $(1.06)^{30}=5.7435$.",
            "<b>Step 2 — (F/A).</b> $(5.7435-1)/0.06 = 79.06$.",
            "<b>Step 3 — Multiply.</b> $F=200\\times79.06 = \\$15{,}812$.",
            "<b>Step 4 — Distractor audit.</b> $\\$6000$ is just the deposits ($200\\times30$, ignoring interest); $\\$10{,}000$ and $\\$200$ are far off."
          ],
          a: "$\\approx \\$15{,}812$",
          v: "Compounding nearly TRIPLES the $6000 of raw deposits ✓ — the magic of long-horizon compound interest. Earlier deposits grow the most because they compound longest."

        }), ref: "p.231" },
      { q: "Break-even point quantity: $FC = \\$20{,}000$, $P = \\$30$, $VC = \\$10$:",
        choices: ["$1000$ units", "$667$ units", "$2000$ units", "$500$ units"], correct: 0,
        solution: S({
          c: "Break-even is where total revenue equals total cost. Per unit, each sale contributes $(P-VC)$ toward fixed costs, so $Q=\\dfrac{FC}{P-VC}$.",
          s: [
            "<b>Step 1 — Contribution margin.</b> $P-VC = 30-10 = \\$20$/unit.",
            "<b>Step 2 — Divide.</b> $Q = 20{,}000/20 = 1000$ units.",
            "<b>Step 3 — Distractor audit.</b> 667 uses P alone ($20000/30$); 2000 uses VC; 500 doubles the margin."
          ],
          a: "1000 units.",
          v: "Above 1000 units you profit, below it you lose ✓. The contribution margin $(P-VC)$, not the price, is what pays down fixed cost — a key insight for pricing decisions."

        }), ref: "p.232" },
      { q: "Equivalent annual cost (EAC) of $\\$100{,}000$ now over 10 years at 6%:",
        choices: ["$\\approx \\$13{,}587$/yr", "$\\$10{,}000$", "$\\$6{,}000$", "$\\$20{,}000$"], correct: 0,
        solution: S({
          c: "EAC spreads a present cost into equal annual amounts using the capital-recovery factor: $EAC = P\\cdot(A/P,i,n)$ where $(A/P)=\\dfrac{i(1+i)^n}{(1+i)^n-1}$.",
          s: [
            "<b>Step 1 — Capital-recovery factor.</b> $(A/P,6\\%,10) = \\dfrac{0.06(1.06)^{10}}{(1.06)^{10}-1} = 0.13587$.",
            "<b>Step 2 — Multiply.</b> $EAC = 100{,}000\\times0.13587 = \\$13{,}587$/yr.",
            "<b>Step 3 — Distractor audit.</b> $\\$10{,}000$ ignores interest (just $P/n$); $\\$6000$ is only the first-year interest; $\\$20{,}000$ is too high."
          ],
          a: "$\\approx \\$13{,}587$/yr",
          v: "EAC > $P/n$ = $10,000 because it accounts for the TIME VALUE of the tied-up capital ✓. It's the standard way to compare alternatives with different lifespans on an apples-to-apples annual basis."

        }), ref: "p.232" },
      { q: "Bond yield to maturity (YTM) interpretation:",
        choices: ["Rate of return if held to maturity", "Coupon rate", "Current price/par", "Risk level"], correct: 0,
        solution: S({
          c: "Yield to maturity is the bond's internal rate of return — the single discount rate that equates the present value of all its cash flows (coupons + face value) to its current price, ASSUMING it's held to maturity.",
          s: [
            "<b>Step 1 — Match.</b> Rate of return if held to maturity.",
            "<b>Step 2 — Distractor audit.</b> Coupon rate is fixed at issue (different); current price/par is just the ratio; risk is a separate concept (though it influences YTM)."
          ],
          a: "The IRR of the bond if held to maturity.",
          v: "The relationship to price: YTM > coupon → bond trades at a DISCOUNT; YTM < coupon → premium ✓. YTM is what lets you compare bonds with different coupons and prices on equal footing."

        }), ref: "p.230" },
    ],

    // Materials — +5
    5: [
      { q: "Drift velocity of electrons in Cu with current density $J$:",
        choices: ["$v_d = J/(nq)$ — typically mm/s scale", "Near speed of light", "Random thermal", "Static"], correct: 0,
        solution: S({
          c: "Drift velocity is the slow average speed of charge carriers under a field: $v_d = J/(nq)$, where $n$ is carrier density and $q$ the charge. It's surprisingly tiny — millimeters per second.",
          s: [
            "<b>Step 1 — Match.</b> $v_d=J/(nq)$, mm/s scale.",
            "<b>Step 2 — Distractor audit.</b> Not near light speed (that's the FIELD/signal, not the electrons); not purely random thermal (drift is the net average on top of thermal motion); not static."
          ],
          a: "$v_d = J/(nq)$ — very slow (mm/s).",
          v: "The paradox: electrons crawl at mm/s, yet a light switches on instantly because the electromagnetic FIELD propagates near $c$ ✓ — the electrons everywhere in the wire start moving almost together, like water already filling a pipe."

        }), ref: "p.354" },
      { q: "Cu electron density approximately:",
        choices: ["$8.5\\times 10^{28}$/m³", "$10^{20}$", "$10^{16}$", "$10^{6}$"], correct: 0,
        solution: S({
          c: "Copper contributes about one free electron per atom, giving a free-electron density of roughly $8.5\\times10^{28}$ per m³ — essentially its atomic density.",
          s: [
            "<b>Step 1 — Match.</b> $\\sim8.5\\times10^{28}$/m³.",
            "<b>Step 2 — Distractor audit.</b> $10^{20}$, $10^{16}$, $10^6$ are far too low — those resemble SEMICONDUCTOR carrier densities, not metals."
          ],
          a: "$\\sim 10^{28}$/m³.",
          v: "This huge carrier density is exactly why metals conduct so well, AND why drift velocity is so slow (lots of carriers each moving little) ✓. Semiconductors have ~$10^{16}$/m³ — a trillion times fewer, hence far higher resistivity."

        }), ref: "p.354" },
      { q: "Energy bandgap of GaAs:",
        choices: ["$\\approx 1.42$ eV", "$1.12$ eV", "$5$ eV", "$0$"], correct: 0,
        solution: S({
          c: "Gallium arsenide has a bandgap of $E_g \\approx 1.42$ eV — larger than silicon's 1.12 eV, and crucially it's a DIRECT bandgap.",
          s: [
            "<b>Step 1 — Match.</b> ≈1.42 eV.",
            "<b>Step 2 — Distractor audit.</b> 1.12 eV is SILICON; 5 eV is an insulator (diamond-like); 0 is a metal/semimetal."
          ],
          a: "$E_g \\approx 1.42$ eV.",
          v: "GaAs's DIRECT bandgap lets it emit light efficiently (LEDs, lasers) — which silicon's indirect gap can't ✓ — and its high electron mobility suits high-speed RF. The trade is cost and fragility vs cheap, robust silicon."

        }), ref: "p.354" },
      { q: "Thermal voltage at room temp:",
        choices: ["$V_T \\approx 25.85$ mV", "$0.7$ V", "$1$ V", "$1$ µV"], correct: 0,
        solution: S({
          c: "The thermal voltage $V_T = kT/q$ sets the scale of semiconductor behavior. At room temperature (~300 K) it's about 25.85 mV (often rounded to 26 mV).",
          s: [
            "<b>Step 1 — Match.</b> ≈25.85 mV.",
            "<b>Step 2 — Distractor audit.</b> 0.7 V is a diode's FORWARD DROP (not $V_T$); 1 V and 1 µV are off by orders of magnitude."
          ],
          a: "$V_T \\approx 26$ mV.",
          v: "$V_T$ appears in the Shockley diode equation and BJT/MOSFET models ✓ — it's why a diode's current changes ~10× per 60 mV ($\\approx 2.3 V_T$) of voltage. It rises slightly with temperature ($\\propto T$)."

        }), ref: "p.354" },
      { q: "Photovoltaic effect:",
        choices: ["Photon energy > $E_g$ → e-h pair → current", "Heat → voltage", "Magnetic → current", "Mechanical"], correct: 0,
        solution: S({
          c: "In the photovoltaic effect, a photon with energy ABOVE the bandgap ($h\\nu > E_g$) is absorbed, knocking an electron free and creating an electron-hole pair. A p-n junction's built-in field separates them, driving a current.",
          s: [
            "<b>Step 1 — Match.</b> Photon energy > $E_g$ → e-h pair → current.",
            "<b>Step 2 — Distractor audit.</b> Heat→voltage is THERMOELECTRIC (Seebeck); magnetic→current is induction/Hall; mechanical→voltage is piezoelectric."
          ],
          a: "Light → electron-hole pairs → current.",
          v: "The bandgap sets the cutoff: photons below $E_g$ pass through unabsorbed (wasted), while energy far above $E_g$ is lost as heat ✓ — which is why silicon's 1.12 eV gap (capturing much of the solar spectrum) makes good solar cells."

        }), ref: "p.354" },
    ],

    // Circuits — +20
    6: [
      { q: "Find $V_2$ in voltage divider: $V_{in}=24$V, $R_1=8$Ω, $R_2=4$Ω.",
        choices: ["$8$ V", "$12$ V", "$16$ V", "$24$ V"], correct: 0,
        solution: S({ c: "$V_2 = V_{in} \\cdot R_2/(R_1+R_2)$.", s: ["$V_2 = 24 \\cdot 4/12 = 8$ V."], a: "$8$ V" }), ref: "p.356" },
      { q: "Calc current through 5Ω resistor in parallel with 10Ω with $V$ = 20V across:",
        choices: ["$4$ A through 5Ω; $2$ A through 10Ω", "$6$ A; $0$ A", "Both 4 A", "Both 2 A"], correct: 0,
        solution: S({ c: "Same V across both parallel branches. $I = V/R$.", s: ["$I_5 = 20/5 = 4$ A. $I_{10} = 20/10 = 2$ A."], a: "4 A and 2 A" }), ref: "p.356" },
      { q: "Power factor correction adds:",
        choices: ["Shunt capacitor for inductive load", "Series inductor", "Higher voltage", "More resistors"], correct: 0,
        solution: S({ c: "Inductive load draws lagging Q; cap supplies leading Q → cancels.", s: [""], a: "Shunt capacitor" }), ref: "p.362" },
      { q: "$V_s = 100$ V drives series $R = 10$Ω, $L = 0.1$H, $C = 100$µF at $\\omega = 100$ rad/s. Total Z:",
        choices: ["$10 + j(10-100)$ = $10 - j90$", "$10 + j10$", "$10 - j10$", "$100$"], correct: 0,
        solution: S({ c: "$Z_L = j\\omega L = j10$. $Z_C = -j/(\\omega C) = -j100$. Series sum.", s: ["$Z = 10 + j10 - j100 = 10 - j90$."], a: "$10 - j90$ Ω (capacitive net)" }), ref: "p.360" },
      { q: "Find Norton equivalent: voltage source 24V with 12Ω series.",
        choices: ["$I_N = 2$ A, $R_N = 12$Ω", "$24$ A", "$1$ A", "$0.5$ A"], correct: 0,
        solution: S({ c: "$I_N = V_{Th}/R_{Th}$.", s: ["$24/12 = 2$ A. $R_N = 12$ Ω."], a: "$2$ A; $12$ Ω" }), ref: "p.357" },
      { q: "What is the rms value of a half-wave rectified sinusoid of peak $V_m$?",
        choices: ["$V_m/2$", "$V_m/\\pi$", "$V_m/\\sqrt{2}$", "$2V_m/\\pi$"], correct: 0,
        solution: S({ c: "Half-wave: contains only half the energy of full sinusoid.", s: ["Average value: $V_m/\\pi$. RMS: $V_m/2$.", "Full sine RMS: $V_m/\\sqrt{2}$."], a: "$V_m/2$" }), ref: "p.383" },
      { q: "An AC source provides $V = 100\\sin(\\omega t)$ V. Half-wave rectified output average:",
        choices: ["$\\approx 31.8$ V", "$50$ V", "$100$ V", "$0$"], correct: 0,
        solution: S({ c: "$V_{DC} = V_m/\\pi$.", s: ["$100/\\pi \\approx 31.83$ V."], a: "$\\approx 31.83$ V" }), ref: "p.383" },
      { q: "Energy stored in 200 µF cap charged to 20 V:",
        choices: ["$40$ mJ", "$2$ mJ", "$0.04$ J = 40 mJ (same)", "$80$ mJ"], correct: 0,
        solution: S({ c: "$W = CV^2/2$.", s: ["$200\\times 10^{-6} \\cdot 400/2 = 0.04$ J = 40 mJ."], a: "$40$ mJ" }), ref: "p.358" },
      { q: "RC discharge: 100V across cap, $\\tau = 1$ s. At $t = 3$ s:",
        choices: ["$\\approx 4.98$ V", "$50$ V", "$10$ V", "$0$"], correct: 0,
        solution: S({ c: "$v(t) = V_0 e^{-t/\\tau}$.", s: ["$100 \\cdot e^{-3} = 100 \\cdot 0.0498 = 4.98$ V."], a: "$\\approx 4.98$ V" }), ref: "p.358" },
      { q: "Switching frequency 1 kHz: period",
        choices: ["$1$ ms", "$1$ µs", "$1$ Hz", "$1$ s"], correct: 0,
        solution: S({ c: "$T = 1/f$.", s: ["$T = 1/1000 = 0.001$ s = 1 ms."], a: "$1$ ms" }), ref: "p.360" },
      { q: "Calculate $i(t) = di/dt$ of $i(t) = 5\\cos(100t)$ A at $t = 0$:",
        choices: ["$0$ (since $\\sin 0 = 0$, and derivative is $-500\\sin$)", "$500$", "$5$", "$-5$"], correct: 0,
        solution: S({ c: "$di/dt = -500\\sin(100t)$. At $t=0$: $\\sin 0 = 0$, so $di/dt = 0$.", s: ["Maximum rate of change at t when $\\sin = 1$."], a: "$0$ at $t=0$" }), ref: "p.358" },
      { q: "Across what element is voltage AND current in phase?",
        choices: ["Resistor (only)", "Inductor", "Capacitor", "Any"], correct: 0,
        solution: S({ c: "Pure R: $V = IR$ instantaneously → same waveform, same phase.", s: ["L: V leads I by 90°.", "C: V lags I by 90°."], a: "Resistor" }), ref: "p.360" },
      { q: "Calc avg power for $v = 50\\cos\\omega t$, $i = 10\\cos(\\omega t-60°)$:",
        choices: ["$125$ W", "$250$ W", "$500$ W", "$0$"], correct: 0,
        solution: S({ c: "$P = (V_m I_m / 2)\\cos\\theta$. $\\theta=60°$.", s: ["$P = (50\\cdot 10/2)\\cos 60° = 250 \\cdot 0.5 = 125$ W."], a: "$125$ W" }), ref: "p.362" },
      { q: "Wye source with $V_{LL} = 240$ V supplies a 3-phase load. Phase voltage:",
        choices: ["$\\approx 138.6$ V", "$240$ V", "$416$ V", "$80$ V"], correct: 0,
        solution: S({ c: "$V_\\phi = V_{LL}/\\sqrt{3}$.", s: ["$240/1.732 = 138.6$ V."], a: "$\\approx 138.6$ V" }), ref: "p.363" },
      { q: "Two 100 µF caps in series:",
        choices: ["$50$ µF", "$200$ µF", "$100$ µF", "$10$ µF"], correct: 0,
        solution: S({ c: "Caps in series: $1/C_{eq} = 1/C_1 + 1/C_2$. Equal: $C/2$.", s: ["$100/2 = 50$ µF."], a: "$50$ µF" }), ref: "p.358" },
      { q: "Calc rms of $i(t) = 5 + 3\\cos\\omega t$ (DC + AC):",
        choices: ["$\\sqrt{25 + 9/2} \\approx 5.43$", "$5$", "$3$", "$8$"], correct: 0,
        solution: S({ c: "RMS of DC + AC: $\\sqrt{V_{DC}^2 + V_{AC,RMS}^2}$.", s: ["$V_{AC,RMS} = 3/\\sqrt{2} = 2.12$.", "Total: $\\sqrt{25 + 4.5} = \\sqrt{29.5} \\approx 5.43$ A."], a: "$\\approx 5.43$ A" }), ref: "p.360" },
      { q: "Total impedance of 4Ω in series with parallel(6Ω, j8Ω):",
        choices: ["Calc parallel first then add: $\\approx 7.84\\angle 21.6°$ Ω", "$10$", "$j8$", "$14$"], correct: 0,
        solution: S({ c: "$Z_{parallel} = (6)(j8)/(6+j8) = j48/(6+j8)$. Multiply by conjugate: $j48(6-j8)/(36+64) = (j288+384)/100 = 3.84 + j2.88$.", s: ["Series with 4: $Z = 4+3.84+j2.88 = 7.84+j2.88$.", "Magnitude: $\\sqrt{61.4+8.3} \\approx 8.34$. Angle: $\\arctan(2.88/7.84) \\approx 20.2°$."], a: "$\\approx 8.34\\angle 20.2°$ Ω" }), ref: "p.360" },
      { q: "Short-circuit current of 24V source with 6Ω internal R:",
        choices: ["$4$ A", "$0.25$ A", "$24$ A", "$144$ A"], correct: 0,
        solution: S({ c: "SC current = $V/R_{internal}$.", s: ["$24/6 = 4$ A."], a: "$4$ A" }), ref: "p.357" },
      { q: "Capacitor voltage cannot change:",
        choices: ["Instantaneously (requires infinite current)", "At all", "Quickly", "Without breaking"], correct: 0,
        solution: S({ c: "$i = C\\,dv/dt$. Step change in v → infinite i → impossible.", s: ["Dual: inductor current can't change instantly."], a: "Instantaneously" }), ref: "p.358" },
      { q: "Crest factor of pure sinusoid:",
        choices: ["$\\sqrt{2} \\approx 1.414$", "$2$", "$1$", "$\\pi$"], correct: 0,
        solution: S({ c: "Crest factor = peak/RMS.", s: ["For sinusoid: $V_m / (V_m/\\sqrt{2}) = \\sqrt{2}$.", "Square wave: 1. Triangle: $\\sqrt{3}$."], a: "$\\sqrt{2}$" }), ref: "p.360" },
    ],

    // Linear Sys — +10
    7: [
      { q: "Laplace transform of $\\cos(2t)$:",
        choices: ["$s/(s^2+4)$", "$2/(s^2+4)$", "$s/(s^2-4)$", "$1/(s-2)$"], correct: 0,
        solution: S({ c: "$\\mathcal{L}\\{\\cos\\omega t\\} = s/(s^2+\\omega^2)$. $\\omega = 2$.", s: [""], a: "$s/(s^2+4)$" }), ref: "p.56" },
      { q: "Transfer function $H(s) = 1$ corresponds to:",
        choices: ["Identity (passthrough)", "Differentiator", "Integrator", "Delay"], correct: 0,
        solution: S({ c: "Constant H = output equals input.", s: [""], a: "Passthrough" }), ref: "p.365" },
      { q: "Two systems in series total transfer function:",
        choices: ["$H_1 \\cdot H_2$ (multiplication)", "Addition", "Average", "Subtraction"], correct: 0,
        solution: S({ c: "Series cascade: output of one = input of next. TF multiply.", s: [""], a: "$H_1 H_2$" }), ref: "p.365" },
      { q: "Steady-state response of LTI system to $\\cos\\omega t$:",
        choices: ["$|H(j\\omega)|\\cos(\\omega t + \\angle H)$", "$\\cos\\omega t$", "Always 0", "$H(0)$"], correct: 0,
        solution: S({ c: "SS sine in → sine out, scaled by |H| and shifted by ∠H.", s: ["This is why Bode plots characterize LTI systems."], a: "$|H|\\cos(\\omega t+\\angle H)$" }), ref: "p.365" },
      { q: "Pole at $s = 5$ (RHP):",
        choices: ["Unstable — exponentially growing $e^{5t}$", "Stable", "Marginal", "Oscillatory"], correct: 0,
        solution: S({ c: "RHP pole → exponential growth.", s: [""], a: "Unstable" }), ref: "p.365" },
      { q: "Pole on imaginary axis:",
        choices: ["Marginally stable (pure oscillation)", "Stable", "Unstable", "Critically damped"], correct: 0,
        solution: S({ c: "$s = \\pm j\\omega$: pure sinusoid, no decay or growth.", s: [""], a: "Marginal" }), ref: "p.365" },
      { q: "Effect of negative feedback in time domain:",
        choices: ["Reduces sensitivity to gain variations, can speed up response", "Slows response", "Adds instability", "No effect"], correct: 0,
        solution: S({ c: "Negative feedback benefits: sensitivity reduction, wider BW (gain BW tradeoff), linearization.", s: [""], a: "Reduces sensitivity" }), ref: "p.365" },
      { q: "Bandwidth of cascade of identical 1st-order LPFs (3 of them, each $\\omega_c = 100$):",
        choices: ["$\\approx 51$ rad/s (narrower than single)", "$300$", "$100$", "$33.3$"], correct: 0,
        solution: S({ c: "Cascade reduces bandwidth: $\\omega_{c,total} = \\omega_c \\sqrt{2^{1/n}-1}$.", s: ["$n=3$: factor $\\sqrt{0.2599} = 0.51$.", "BW = $100 \\cdot 0.51 = 51$ rad/s."], a: "$\\approx 51$ rad/s" }), ref: "p.366" },
      { q: "Pulse response of a system = derivative of:",
        choices: ["Step response", "Impulse response", "Ramp response", "Sine response"], correct: 0,
        solution: S({ c: "Pulse = step minus delayed step → can be derived from step response.", s: ["Or: impulse + scaled.", "Step response = integral of impulse response."], a: "Step response" }), ref: "p.56" },
      { q: "Inverse Laplace of $4/(s^2+16)$:",
        choices: ["$\\sin 4t$", "$\\cos 4t$", "$e^{-4t}$", "$4t$"], correct: 0,
        solution: S({ c: "Pair: $\\omega/(s^2+\\omega^2) \\leftrightarrow \\sin\\omega t$. $\\omega = 4$.", s: [""], a: "$\\sin 4t$" }), ref: "p.56" },
    ],

    // Signal — +10
    8: [
      { q: "Z-transform of $u[n]$ (unit step):",
        choices: ["$z/(z-1) = 1/(1-z^{-1})$", "$1$", "$z$", "$0$"], correct: 0,
        solution: S({ c: "Geometric series.", s: ["$\\sum_{n=0}^\\infty z^{-n} = 1/(1-z^{-1}) = z/(z-1)$."], a: "$z/(z-1)$" }), ref: "p.376" },
      { q: "Z-transform region of convergence (ROC) for causal sequence:",
        choices: ["$|z| > r_{max\\,pole}$ — outside outermost pole", "Inside innermost pole", "All z", "$|z| = 1$"], correct: 0,
        solution: S({ c: "Causal: ROC is outside outermost pole. Anti-causal: inside innermost.", s: ["For stability: ROC must include unit circle."], a: "Outside outer pole" }), ref: "p.376" },
      { q: "Digital filter stable iff:",
        choices: ["All poles inside unit circle", "All zeros inside", "Real coefficients", "Linear phase"], correct: 0,
        solution: S({ c: "$z$-plane stability: poles inside $|z|<1$.", s: ["Continuous equivalent: poles in LHP."], a: "Poles inside |z|=1" }), ref: "p.376" },
      { q: "Convolution length: $L_1 = 5$ samples, $L_2 = 8$. Output length:",
        choices: ["$12$ ($L_1+L_2-1$)", "$13$", "$5$", "$40$"], correct: 0,
        solution: S({ c: "$L_{out} = L_1 + L_2 - 1$.", s: ["$5+8-1 = 12$."], a: "$12$" }), ref: "p.376" },
      { q: "DFT of length-N sequence: number of bins:",
        choices: ["$N$ (frequency resolution $f_s/N$)", "$N/2$", "Half the samples", "Infinite"], correct: 0,
        solution: S({ c: "DFT: same number of frequency bins as time samples.", s: ["For real signals: bins are symmetric (only N/2 unique)."], a: "$N$ bins" }), ref: "p.376" },
      { q: "Windowing in FFT used to:",
        choices: ["Reduce spectral leakage", "Increase resolution", "Speed up FFT", "Filter noise"], correct: 0,
        solution: S({ c: "Window functions (Hann, Hamming, Blackman) reduce side lobes in FFT.", s: ["Cost: main lobe widens (slight resolution loss)."], a: "Reduce leakage" }), ref: "p.376" },
      { q: "Zero-padding before FFT:",
        choices: ["Interpolates frequency bins (finer freq grid)", "Adds new frequencies", "Reduces resolution", "Errors"], correct: 0,
        solution: S({ c: "Padding with zeros doesn't add information but creates finer-grained sampling of DTFT.", s: ["Useful for plotting / finer peak location."], a: "Interpolates spectrum" }), ref: "p.376" },
      { q: "Aliasing prevention by:",
        choices: ["Anti-aliasing LPF before sampling", "After-DAC filter", "Both", "High sample rate alone"], correct: 0,
        solution: S({ c: "Anti-aliasing filter (before sampling) removes content above $f_s/2$.", s: ["Reconstruction filter (after DAC) removes images."], a: "Pre-sampling LPF" }), ref: "p.375" },
      { q: "Decimation by factor M:",
        choices: ["Keep every Mth sample (requires LPF first)", "Average M samples", "Random selection", "Time reverse"], correct: 0,
        solution: S({ c: "Decimation reduces sample rate. First filter to prevent aliasing, then downsample.", s: ["Multirate processing builds on this."], a: "Every Mth sample" }), ref: "p.375" },
      { q: "Bilinear transform: maps:",
        choices: ["Continuous LHP to digital inside unit circle", "Time to frequency", "Linear to nonlinear", "Reverse"], correct: 0,
        solution: S({ c: "Bilinear: $s = (2/T)(z-1)/(z+1)$ → maps stable analog to stable digital filter.", s: ["Used for: analog filter design first, then convert to digital."], a: "Stable s → stable z" }), ref: "p.376" },
    ],

    // Electronics — +15
    9: [
      { q: "Voltage regulator dropout: difference between input and output:",
        choices: ["Min $V_{in} - V_{out}$ for proper regulation", "Always 1V", "Zero ideal", "Maximum"], correct: 0,
        solution: S({ c: "Below dropout, output starts to follow input (no longer regulated).", s: ["Standard linear: ~2V. LDO: 0.1-0.5V."], a: "Min $V_{drop}$" }), ref: "p.383" },
      { q: "BJT thermal runaway:",
        choices: ["Higher T → higher leakage → more current → more heat → ...", "Stable", "Fixed", "Reverse"], correct: 0,
        solution: S({ c: "Positive temperature feedback: I_C↑ → P↑ → T↑ → leakage↑ → I_C↑. Can destroy device.", s: ["Mitigation: emitter resistor (negative feedback), heat sink, current limiting."], a: "Positive thermal feedback" }), ref: "p.384" },
      { q: "Op-amp open-loop gain typical:",
        choices: ["$10^5$ to $10^6$ at DC", "$1$", "$100$", "Infinite ideal"], correct: 0,
        solution: S({ c: "Real op-amp DC gain very high (but finite). Rolls off with frequency.", s: [""], a: "$10^5$-$10^6$" }), ref: "p.380" },
      { q: "What does '741' refer to in '741 op-amp'?",
            choices: ["Classic general-purpose op-amp IC", "Pin count", "Frequency", "Manufacturer code"], correct: 0,
        solution: S({ c: "The 741 (μA741) was Fairchild's pioneering op-amp from 1968. Industry standard for decades.", s: ["Modern equivalents: TL081, LM358, OP07 for various needs."], a: "Classic IC type" }), ref: "p.380" },
      { q: "BJT $\\beta$ varies with:", choices: ["Temperature, current, device-to-device", "Only voltage", "Constant", "Frequency only"], correct: 0,
        solution: S({ c: "$\\beta$: varies 50-300× typically, depends on T, I_C, manufacturing.", s: ["Why bias designs use feedback to be insensitive."], a: "T, I, device" }), ref: "p.384" },
      { q: "Photoresistor (LDR) resistance under bright light:",
        choices: ["Decreases (more carriers)", "Increases", "Constant", "Negative"], correct: 0,
        solution: S({ c: "Light → photogenerated carriers → lower resistance.", s: ["Dark: high R (MΩ). Bright: low R (kΩ).", "Used in: light sensors, automatic streetlights."], a: "Decreases" }), ref: "p.383" },
      { q: "Op-amp slew rate effect on slewing distortion at high frequencies:",
        choices: ["Triangulates large sinusoids when SR insufficient", "No effect", "Increases gain", "Decreases impedance"], correct: 0,
        solution: S({ c: "SR limit: cannot maintain sine shape if $dv/dt > SR$.", s: ["For sine $V_m \\sin\\omega t$: max slope $= \\omega V_m$. Need $SR > \\omega V_m$."], a: "Triangulation distortion" }), ref: "p.380" },
      { q: "Common-emitter input impedance:",
        choices: ["$\\approx \\beta r_e$ — typically kΩ", "Very low", "$R_C$", "Infinite"], correct: 0,
        solution: S({ c: "Looking into base: $\\beta$ times intrinsic emitter resistance $r_e$.", s: ["At $I_E = 1$ mA, $r_e \\approx 26$ Ω, $\\beta = 100$: $Z_{in} \\approx 2.6$ kΩ.", "Higher $\\beta$ or lower current: higher input impedance."], a: "$\\beta r_e$ ~ kΩ" }), ref: "p.384" },
      { q: "Class C amplifier conducts:",
        choices: ["< 180° (narrow pulse, very efficient at RF)", "Full 360°", "180°", "270°"], correct: 0,
        solution: S({ c: "Class C: conducts brief pulse, very efficient (>90%). Used in RF transmitters where output is tuned.", s: ["Nonlinear — needs LC tank to recover sine wave.", "Class A=360°, AB ≈ 180-360°, B=180°, C<180°."], a: "<180°" }), ref: "p.384" },
      { q: "PNP transistor: emitter is at:",
        choices: ["Higher potential than collector in active region", "Lower", "Same", "Grounded"], correct: 0,
        solution: S({ c: "PNP active: V_E > V_B > V_C. Reversed from NPN.", s: ["Current flow conventionally: out of emitter in PNP."], a: "Higher than collector" }), ref: "p.384" },
      { q: "$V_{BE}$ for PNP in active region:",
        choices: ["$\\approx -0.7$ V (base lower than emitter)", "$+0.7$ V", "$0$", "$5$ V"], correct: 0,
        solution: S({ c: "PNP: emitter-base forward bias means $V_E > V_B$ → $V_{BE} = V_B - V_E < 0$.", s: ["$V_{EB} \\approx +0.7$ V (in some texts)."], a: "$-0.7$ V" }), ref: "p.384" },
      { q: "Common drain (source follower) — same as which BJT topology?",
        choices: ["Common-collector (emitter follower)", "Common-emitter", "Common-base", "None"], correct: 0,
        solution: S({ c: "Both have output following input (≈ unity voltage gain, low Z_out, high Z_in).", s: [""], a: "Common-collector" }), ref: "p.386" },
      { q: "Power MOSFET avalanche rating:",
        choices: ["Max energy in unclamped inductive load", "$V_{DS}$ max", "$I_D$ max", "$R_{DS,on}$"], correct: 0,
        solution: S({ c: "When MOSFET turns off inductive load, body diode + parasitic BJT can avalanche.", s: ["Rated $E_{AS}$ specifies how much energy device can absorb safely."], a: "Energy in inductive load" }), ref: "p.386" },
      { q: "Differential pair (long-tail pair) at heart of op-amp:",
        choices: ["Two matched transistors, current mirror tail, high CMRR", "Single transistor", "Cascode", "Class AB"], correct: 0,
        solution: S({ c: "Diff pair: matched pair sharing current source — high CMRR.", s: ["Front-end of op-amps, comparators, instrumentation amps.", "Followed by gain stages and output buffer."], a: "Diff pair w/ tail" }), ref: "p.380" },
      { q: "Wien bridge oscillator: needed condition for oscillation:",
        choices: ["Loop gain = 1, phase = 0 (Barkhausen)", "Loop gain > 1", "Phase = 90°", "No feedback"], correct: 0,
        solution: S({ c: "Barkhausen criterion: $|A\\beta| = 1$ and $\\angle(A\\beta) = 0$ at oscillation frequency.", s: ["In practice: $|A\\beta|$ slightly > 1 with AGC limiting.", "Wien bridge: $f_0 = 1/(2\\pi RC)$."], a: "Barkhausen" }), ref: "p.380" },
    ],

    // Power — +15
    10: [
      { q: "Apparent power of 480V single phase, 20 A:",
        choices: ["$9.6$ kVA", "$24$ kVA", "$5$ kVA", "$48$ kVA"], correct: 0,
        solution: S({ c: "$|S| = V \\cdot I$.", s: ["$480 \\cdot 20 = 9600$ VA."], a: "$9.6$ kVA" }), ref: "p.362" },
      { q: "Reactive power of $|S| = 10$ kVA at $pf = 0.6$:",
        choices: ["$8$ kVAR", "$6$ kVAR", "$10$ kVAR", "$4$ kVAR"], correct: 0,
        solution: S({ c: "$\\sin\\theta = \\sqrt{1-pf^2}$. $Q = |S|\\sin\\theta$.", s: ["$\\sin = \\sqrt{0.64} = 0.8$.", "$Q = 10 \\cdot 0.8 = 8$ kVAR."], a: "$8$ kVAR" }), ref: "p.362" },
      { q: "Why is high voltage used for long-distance transmission?",
        choices: ["Low current → low $I^2R$ losses", "Safety", "Easier insulation", "Cheaper equipment"], correct: 0,
        solution: S({ c: "Power $P = VI$ fixed by load. Higher V → lower I → less I²R loss in line.", s: ["Tradeoff: insulation cost, corona losses.", "Stepped up at generation, stepped down at customer."], a: "Low I²R loss" }), ref: "p.363" },
      { q: "Voltage at customer's house too low (brownout). Likely cause:",
        choices: ["High load on transformer/feeder; voltage drop", "Wiring fault inside house", "Power factor", "Air conditioner"], correct: 0,
        solution: S({ c: "Overloaded distribution: high current → high $IZ$ drop → terminal V drops.", s: ["Heat waves cause: AC loads spike → brownouts.", "Tap changers can adjust transformer output."], a: "Feeder overload" }), ref: "p.363" },
      { q: "Synchronous motor at no load: stator and rotor field angle:",
        choices: ["Aligned ($\\delta \\approx 0$)", "$90°$ apart", "Random", "Opposing"], correct: 0,
        solution: S({ c: "Load angle $\\delta$ increases with load. No load → no torque → $\\delta = 0$.", s: ["Pull-out torque at $\\delta = 90°$ — beyond that, motor falls out of sync."], a: "$\\delta \\approx 0$" }), ref: "p.365" },
      { q: "Squirrel-cage rotor:",
        choices: ["Used in induction motors — no electrical connection to rotor", "Used in DC motors", "Synchronous machines only", "Generators"], correct: 0,
        solution: S({ c: "Squirrel cage = short-circuited rotor bars + end rings. Induction motors most common.", s: ["No brushes/slip rings → robust, low maintenance.", "Wound rotor (slip ring) alternative for VFD use."], a: "Induction motor rotor" }), ref: "p.365" },
      { q: "VFD (Variable Frequency Drive):",
        choices: ["Varies AC frequency to control motor speed", "DC drive", "Constant freq", "Voltage only"], correct: 0,
        solution: S({ c: "VFD: rectifies AC → DC → inverts to variable freq AC. Motor speed proportional to freq.", s: ["Used: industrial pumps, fans, conveyors, HVAC.", "Energy savings: motor speed matches load."], a: "Variable freq AC" }), ref: "p.365" },
      { q: "Inrush current of motor on full-voltage start:",
        choices: ["5-7× full-load current", "Equal to FL", "Less than FL", "Random"], correct: 0,
        solution: S({ c: "Locked-rotor (start) current: 5-7× FL typically. Lasts < 1 sec usually.", s: ["Mitigation: soft-starter, VFD, autotransformer starter."], a: "5-7×" }), ref: "p.365" },
      { q: "Capacitor-start single-phase motor:",
        choices: ["Cap creates phase shift in auxiliary winding for starting", "DC cap only", "Higher voltage", "Filtering"], correct: 0,
        solution: S({ c: "Single-phase motors need help starting (no rotating field). Cap creates phase-shifted current in start winding → mock rotating field.", s: ["Once near speed, centrifugal switch disconnects start winding."], a: "Phase shift for starting" }), ref: "p.365" },
      { q: "Stepper motor: rotates by:",
        choices: ["Discrete steps (e.g., 1.8° per pulse)", "Continuous", "Variable rates", "Random"], correct: 0,
        solution: S({ c: "Stepper: each input pulse moves rotor by fixed angle. Open-loop positioning.", s: ["1.8° typical (200 steps/rev).", "Used in: printers, CNC, 3D printers."], a: "Discrete steps" }), ref: "p.365" },
      { q: "Power transformer K-factor rating:",
        choices: ["Capability to handle harmonic currents without overheating", "Voltage rating", "kVA size", "Efficiency"], correct: 0,
        solution: S({ c: "K-factor: extra cooling/oversizing for nonlinear loads (electronics, VFDs).", s: ["Higher K-factor (4, 13, 20) for more harmonic-rich loads."], a: "Harmonic capability" }), ref: "p.364" },
      { q: "Ferromagnetic core in transformer: function:",
        choices: ["Increases flux coupling between windings", "Cooling", "Insulation", "Just structural"], correct: 0,
        solution: S({ c: "High permeability iron core concentrates flux → tight magnetic coupling.", s: ["Air-core transformers: low coupling, used in RF where iron losses unacceptable."], a: "Flux coupling" }), ref: "p.364" },
      { q: "Eddy current losses in transformer core mitigated by:",
        choices: ["Laminated core (thin insulated layers)", "Larger core", "Higher voltage", "DC operation"], correct: 0,
        solution: S({ c: "Laminations: break up eddy current paths. Loss $\\propto t^2 f^2$.", s: [""], a: "Laminations" }), ref: "p.364" },
      { q: "Hysteresis losses in transformer core:",
        choices: ["Heat from cyclic magnetization of core", "Copper resistance", "Air gap", "Insulation"], correct: 0,
        solution: S({ c: "B-H loop area = energy lost per cycle. Heated material.", s: ["Mitigation: low-hysteresis silicon steel, ferrites (high-freq)."], a: "B-H loop area" }), ref: "p.364" },
      { q: "Generator regulation (no-load to full-load):",
        choices: ["$(V_{NL}-V_{FL})/V_{FL} \\times 100\\%$", "Same as efficiency", "Always 0", "Volts only"], correct: 0,
        solution: S({ c: "Voltage regulation measures stability under load.", s: ["Low VR = good (small change). Synchronous gen: 5-15% typical."], a: "Std VR formula" }), ref: "p.365" },
    ],

    // EM — +8
    11: [
      { q: "Wave equation: $\\nabla^2 E = \\mu\\varepsilon (\\partial^2 E/\\partial t^2)$. Speed:",
        choices: ["$c = 1/\\sqrt{\\mu\\varepsilon}$", "$\\mu\\varepsilon$", "$\\mu/\\varepsilon$", "$\\sqrt{\\mu\\varepsilon}$"], correct: 0,
        solution: S({ c: "From wave eq form: $v = 1/\\sqrt{\\mu\\varepsilon}$.", s: ["In vacuum: $c = 1/\\sqrt{\\mu_0\\varepsilon_0} \\approx 3\\times 10^8$ m/s."], a: "$1/\\sqrt{\\mu\\varepsilon}$" }), ref: "p.355" },
      { q: "Polarization of antenna:",
        choices: ["Direction of E-field of emitted wave", "Polar coordinate system", "Charge separation", "Phase angle"], correct: 0,
        solution: S({ c: "Antenna polarization (linear V/H, circular RH/LH) — must match for max signal.", s: ["Linear V: dipole vertical. Circular: helical antenna."], a: "E-field direction" }), ref: "p.368" },
      { q: "Antenna gain definition:",
        choices: ["Ratio of antenna's max radiated power density to isotropic", "Same as efficiency", "Amplification", "Phase shift"], correct: 0,
        solution: S({ c: "Gain (dBi): how much an antenna focuses energy compared to isotropic radiator.", s: ["Dipole: ~2.15 dBi. Yagi: 6-15 dBi. Parabolic: 20-50+ dBi."], a: "Directivity vs isotropic" }), ref: "p.368" },
      { q: "Friis formula for received power:",
        choices: ["$P_r = P_t G_t G_r (\\lambda/4\\pi d)^2$", "$P_r = P_t \\cdot d$", "$P_r = P_t/d$", "$P_r = G$"], correct: 0,
        solution: S({ c: "Free-space path loss formula.", s: ["Path loss: $(\\lambda/4\\pi d)^2$. Power falls $1/d^2$.", "Gain factors $G_t G_r$ help against this."], a: "Friis formula" }), ref: "p.368" },
      { q: "Radiated power from short dipole proportional to:",
        choices: ["$\\omega^2$ (or $1/\\lambda^2$)", "Constant", "$\\omega$", "$1/\\omega$"], correct: 0,
        solution: S({ c: "Larmor formula: power radiated $\\propto (di/dt)^2$ averaged.", s: ["Higher freq → more radiation.", "Why low-freq antennas are huge (poor efficiency at long $\\lambda$)."], a: "$\\omega^2$" }), ref: "p.368" },
      { q: "Permittivity of vacuum $\\varepsilon_0$:",
        choices: ["$\\approx 8.854\\times 10^{-12}$ F/m", "$1$ F/m", "$\\mu_0$", "$10^{-7}$"], correct: 0,
        solution: S({ c: "Memorize.", s: [""], a: "$8.854\\times 10^{-12}$ F/m" }), ref: "p.355" },
      { q: "Electric flux density $D$ in dielectric: $D = ?$",
        choices: ["$\\varepsilon E$", "$\\varepsilon_0 E$", "$E$", "$\\mu E$"], correct: 0,
        solution: S({ c: "Constitutive: $D = \\varepsilon E$ where $\\varepsilon = \\varepsilon_0\\varepsilon_r$.", s: ["$D$ continuous across dielectric interface (unlike E)."], a: "$\\varepsilon E$" }), ref: "p.355" },
      { q: "Boundary condition for $E$ at conductor surface:",
        choices: ["Tangential $E = 0$, normal $D = \\rho_s$", "$E = 0$", "Normal $E = 0$", "All same"], correct: 0,
        solution: S({ c: "Static conductor: no E inside. At surface: tangential E = 0; normal D = surface charge density.", s: [""], a: "Tang E=0, normal D=$\\rho_s$" }), ref: "p.355" },
    ],

    // Control — +12
    12: [
      { q: "PID parallel form: output =",
        choices: ["$K_p e + K_i\\int e\\,dt + K_d\\,de/dt$", "$K_p + K_i + K_d$", "$\\int e dt$", "$K_p e$"], correct: 0,
        solution: S({ c: "Standard PID parallel form.", s: ["Series form: $K_c(1 + 1/(\\tau_i s) + \\tau_d s)$.", "Both equivalent with different parameter mapping."], a: "P + I + D" }), ref: "p.366" },
      { q: "Ziegler-Nichols ultimate-gain method: increase $K_p$ until:",
        choices: ["Sustained oscillation at $K_u$", "Steady state", "Instability", "First peak"], correct: 0,
        solution: S({ c: "$K_u$ = ultimate gain (point of sustained oscillation). $P_u$ = oscillation period.", s: ["Then apply formulas to get PID parameters."], a: "Sustained oscillation" }), ref: "p.366" },
      { q: "Servomechanism vs regulator:",
        choices: ["Servo follows reference; regulator rejects disturbances", "Same", "Servo is digital", "Regulator is analog"], correct: 0,
        solution: S({ c: "Servo: tracks reference inputs (positioning, trajectory). Regulator: keeps output at setpoint despite disturbances.", s: ["Many systems do both."], a: "Tracking vs disturbance rejection" }), ref: "p.365" },
      { q: "Type-0, $K_v = $",
        choices: ["$0$", "$1$", "$\\infty$", "Finite nonzero"], correct: 0,
        solution: S({ c: "Type-0: $K_v = \\lim_{s\\to 0} s G(s) H(s) = 0$ (no s in denominator).", s: ["Hence ramp error infinite for type-0."], a: "$0$" }), ref: "p.366" },
      { q: "Hand-tuned PID: typical starting ratio $\\tau_d / \\tau_i$:",
        choices: ["About $0.25$ ($\\tau_d \\approx \\tau_i/4$)", "$10$", "$1$", "$0.1$"], correct: 0,
        solution: S({ c: "Z-N classic: $\\tau_d = \\tau_i/4$.", s: [""], a: "$\\approx 1/4$" }), ref: "p.366" },
      { q: "Lyapunov stability:",
        choices: ["Method to prove stability without solving system", "Same as Bode", "Linear only", "Discrete only"], correct: 0,
        solution: S({ c: "Lyapunov: find energy-like function V(x) decreasing along trajectories. Works for nonlinear systems.", s: [""], a: "Energy-based proof" }), ref: "p.365" },
      { q: "Discrete-time z-plane stability requires:",
        choices: ["Poles inside unit circle", "Outside", "On real axis", "Symmetric"], correct: 0,
        solution: S({ c: "Same as before — fundamental for digital control.", s: [""], a: "$|z| < 1$" }), ref: "p.376" },
      { q: "State-space: x' = Ax + Bu; y = Cx + Du. Output y depends on:",
        choices: ["States x and input u", "States only", "Input only", "Neither"], correct: 0,
        solution: S({ c: "Output eq: state contribution Cx + direct input feedthrough Du.", s: ["D = 0 in most physical systems (no instant input→output)."], a: "x and u (via C, D)" }), ref: "p.365" },
      { q: "Controllability of state space system: test:",
        choices: ["Controllability matrix $[B, AB, A^2 B, ...]$ has full rank", "Eigenvalues real", "Bounded inputs", "Linearity"], correct: 0,
        solution: S({ c: "Kalman's test. Rank n → fully controllable.", s: ["Controllable: can reach any state from any other in finite time."], a: "Rank test on $[B, AB, ...]$" }), ref: "p.365" },
      { q: "Anti-windup in PID:",
        choices: ["Prevents integral term from growing when actuator saturates", "Filters", "Adds derivative", "Increases gain"], correct: 0,
        solution: S({ c: "If actuator saturated, integral keeps accumulating. When error reverses, integrator must 'unwind' → overshoot.", s: ["Solutions: clamp integral when saturated, back-calculation, conditional integration."], a: "Prevents integral windup" }), ref: "p.366" },
      { q: "Cascade vs feedforward control:",
        choices: ["Cascade: nested loops; Feedforward: predicts disturbance", "Same", "Opposite", "Both same"], correct: 0,
        solution: S({ c: "Different strategies. Cascade: inner-outer loop, addresses different time scales. Feedforward: anticipates and compensates measured disturbances.", s: ["Often combined for robust control."], a: "Different methods" }), ref: "p.365" },
      { q: "Settling time $t_s$ for $\\zeta = 0.7, \\omega_n = 4$ rad/s (2%):",
        choices: ["$\\approx 1.43$ s", "$1$ s", "$3$ s", "$0.5$ s"], correct: 0,
        solution: S({ c: "$t_s \\approx 4/(\\zeta\\omega_n)$.", s: ["$4/(0.7 \\cdot 4) = 1.43$ s."], a: "$\\approx 1.43$ s" }), ref: "p.366" },
    ],

    // Comm — +10
    13: [
      { q: "AM signal $s(t) = A_c(1+m\\cos\\omega_m t)\\cos\\omega_c t$. Sideband power if carrier is $P_c = 100$ W, $m = 0.5$:",
        choices: ["$12.5$ W (total sidebands)", "$50$ W", "$100$ W", "$200$ W"], correct: 0,
        solution: S({ c: "Sideband power: $P_c m^2/2$.", s: ["$P_{SB} = 100 \\cdot 0.25/2 = 12.5$ W total (6.25 W each sideband)."], a: "$12.5$ W" }), ref: "p.371" },
      { q: "DSB-SC vs DSB-LC:",
        choices: ["SC suppresses carrier — more power efficient", "Same", "LC is for SSB", "SC has stronger carrier"], correct: 0,
        solution: S({ c: "DSB-SC: double sideband, suppressed carrier. All power in sidebands → efficient.", s: ["DSB-LC (regular AM): wastes power in carrier.", "SSB: even more efficient — only one sideband."], a: "SC more efficient" }), ref: "p.371" },
      { q: "Coherent vs non-coherent demodulation:",
        choices: ["Coherent needs phase reference; non doesn't", "Same", "Non needs more bandwidth", "Coherent is digital"], correct: 0,
        solution: S({ c: "Coherent (synchronous): better BER, requires phase-locked local oscillator. Non-coherent (envelope detection): simpler but worse BER.", s: ["AM envelope detection: simplest non-coherent.", "DSB-SC requires coherent demod."], a: "Phase reference needed for coherent" }), ref: "p.371" },
      { q: "ASK in noise vs PSK:",
        choices: ["PSK better BER (3dB advantage in BPSK over OOK)", "ASK better", "Same", "Depends"], correct: 0,
        solution: S({ c: "PSK uses both polarities — more distance in constellation → better BER.", s: ["BPSK ~3 dB better than coherent OOK ASK."], a: "PSK better" }), ref: "p.371" },
      { q: "FM threshold effect:",
        choices: ["Below threshold SNR, output noise spikes abruptly", "Linear all the way", "Threshold is gain", "No effect"], correct: 0,
        solution: S({ c: "FM SNR improves linearly with input SNR above threshold (~10 dB). Below: 'capture effect' breaks down, noise dominates.", s: [""], a: "Abrupt noise increase" }), ref: "p.371" },
      { q: "Discrete digital constellation 64-QAM symbols per second of bandwidth:",
        choices: ["6 bits/symbol → ~6 bps/Hz", "16 bps/Hz", "32 bps/Hz", "1 bps/Hz"], correct: 0,
        solution: S({ c: "64-QAM: $\\log_2 64 = 6$ bits/symbol.", s: ["With ideal Nyquist filtering, symbol rate ≈ BW → 6 bps/Hz.", "Real systems: rolloff reduces slightly."], a: "~6 bps/Hz" }), ref: "p.371" },
      { q: "Higher-order QAM (256-QAM vs 16-QAM):",
        choices: ["More bps/Hz but needs higher SNR", "Always better", "Simpler", "Lower bandwidth"], correct: 0,
        solution: S({ c: "More constellation points → smaller min distance → need higher SNR.", s: ["256-QAM: 8 bps/Hz, needs ~30 dB SNR for BER $10^{-6}$.", "16-QAM: 4 bps/Hz, ~18 dB."], a: "Higher BPS/Hz, higher SNR" }), ref: "p.371" },
      { q: "Doppler shift on a 1 GHz signal from car at 30 m/s:",
        choices: ["$\\approx 100$ Hz", "$1$ kHz", "$10$ Hz", "$1$ Hz"], correct: 0,
        solution: S({ c: "$\\Delta f = (v/c) f$.", s: ["$\\Delta f = (30/3\\times 10^8)(10^9) = 100$ Hz."], a: "$\\approx 100$ Hz", v: "Higher freq + faster vehicle = bigger Doppler. 5G needs Doppler compensation." }), ref: "p.371" },
      { q: "Spread spectrum benefits:",
        choices: ["Anti-jam, low power detection, multi-user via codes", "Higher data rate only", "Lower BW", "Linear"], correct: 0,
        solution: S({ c: "Spread spectrum: signal energy spread over wide BW → looks like noise.", s: ["Military/secure: hard to detect.", "Commercial: CDMA cell phones, WiFi (originally), Bluetooth (FHSS)."], a: "Multiple benefits" }), ref: "p.371" },
      { q: "Hamming(7,4) code: rate:",
        choices: ["$4/7$", "$7/4$", "$1$", "$3/7$"], correct: 0,
        solution: S({ c: "Code rate = info bits / total bits. (7,4) means 7 transmitted bits with 4 info bits.", s: ["Can correct any single-bit error."], a: "$4/7$" }), ref: "p.371" },
    ],

    // Networks — +8
    14: [
      { q: "ICMP used for:",
        choices: ["Diagnostics: ping, traceroute, error msgs", "TCP setup", "DNS", "DHCP"], correct: 0,
        solution: S({ c: "ICMP: control/diagnostic protocol over IP. Ping uses ICMP echo request/reply.", s: ["Traceroute: TTL trick using ICMP TTL exceeded responses."], a: "Ping, traceroute" }), ref: "p.400" },
      { q: "MTU (Maximum Transmission Unit) typical Ethernet:",
        choices: ["$1500$ bytes", "$1024$", "$9000$", "$64$"], correct: 0,
        solution: S({ c: "Standard Ethernet: 1500 byte payload (MTU). With headers: 1518 frame size.", s: ["Jumbo frames: 9000 bytes (some networks)."], a: "$1500$" }), ref: "p.399" },
      { q: "Path MTU discovery:",
        choices: ["Find smallest MTU along route to avoid fragmentation", "Find biggest packet", "Routing protocol", "DNS"], correct: 0,
        solution: S({ c: "Different links have different MTUs. PMTU finds the smallest along path → avoid fragmentation/loss.", s: [""], a: "Find min MTU on path" }), ref: "p.400" },
      { q: "Half-duplex vs full-duplex Ethernet:",
        choices: ["Half: one direction at a time (hub); Full: simultaneous both ways (switch)", "Same", "Half is faster", "Full uses 1 wire pair"], correct: 0,
        solution: S({ c: "Half-duplex: shared medium, CSMA/CD. Full-duplex: dedicated link, no collisions.", s: ["Modern switched Ethernet: full duplex everywhere."], a: "Half: alternating; Full: simultaneous" }), ref: "p.399" },
      { q: "QoS (Quality of Service):",
        choices: ["Prioritize traffic types (voice, video) over best-effort data", "Compression", "Encryption", "Routing"], correct: 0,
        solution: S({ c: "QoS: traffic classification, queuing, scheduling to meet latency/jitter requirements.", s: ["Voice: low latency, jitter sensitive.", "Bulk data: tolerates delay but wants throughput."], a: "Traffic prioritization" }), ref: "p.399" },
      { q: "Network latency components:",
        choices: ["Propagation + transmission + queuing + processing", "Just distance", "Bandwidth only", "Random"], correct: 0,
        solution: S({ c: "End-to-end latency: sum of physical (light), transmission (packet/BW), queuing, processing.", s: ["High BW reduces transmission delay; nothing reduces propagation below speed of light."], a: "Multiple components" }), ref: "p.399" },
      { q: "Layer 2 vs Layer 3 redundancy protocols:",
        choices: ["STP (L2) prevents loops; HSRP/VRRP (L3) for gateway redundancy", "Same protocol", "STP is L4", "VRRP is L2"], correct: 0,
        solution: S({ c: "Different layers have different problems. STP: spanning tree breaks L2 loops. HSRP/VRRP: virtual default gateway for L3 redundancy.", s: [""], a: "Different layers" }), ref: "p.399" },
      { q: "Wi-Fi WPA2/WPA3 encryption:",
        choices: ["AES-based, modern wireless security", "WEP", "RC4", "None"], correct: 0,
        solution: S({ c: "Old WEP: broken (~2001). WPA: improved but vulnerabilities. WPA2: AES-CCMP standard. WPA3: even stronger.", s: ["WPA3 introduces SAE (Simultaneous Authentication of Equals)."], a: "AES-based" }), ref: "p.412" },
    ],

    // Digital — +15
    15: [
      { q: "How many states does a 3-bit binary counter cycle through?",
        choices: ["$8$", "$3$", "$4$", "$6$"], correct: 0,
        solution: S({ c: "$2^3 = 8$.", s: [""], a: "$8$" }), ref: "p.391" },
      { q: "Mealy state machine output depends on:",
        choices: ["Current state AND current input", "State only", "Input only", "Both states and inputs simultaneously synchronously"], correct: 0,
        solution: S({ c: "Mealy: outputs are functions of state and input. Moore: outputs depend on state only.", s: [""], a: "State + input (Mealy)" }), ref: "p.391" },
      { q: "Moore state machine output advantage:",
        choices: ["Output glitch-free, synchronous with clock", "Faster", "Smaller", "Asynchronous"], correct: 0,
        solution: S({ c: "Moore: output is function of state only → updates only at state transitions (clock edge).", s: ["Mealy: output can change asynchronously with input."], a: "Synchronous, glitch-free" }), ref: "p.391" },
      { q: "Bitwise OR of $0101_2$ and $0011_2$:",
        choices: ["$0111_2$", "$0001_2$", "$0110_2$", "$1000_2$"], correct: 0,
        solution: S({ c: "OR each bit position.", s: ["0101 OR 0011 = 0111."], a: "$0111$" }), ref: "p.388" },
      { q: "XNOR is also called:",
        choices: ["Equivalence", "AND", "NOT", "Identity"], correct: 0,
        solution: S({ c: "XNOR is true when inputs are equal. Sometimes called 'equivalence' or 'iff' gate.", s: [""], a: "Equivalence" }), ref: "p.389" },
      { q: "Implication $A \\to B$ false when:",
        choices: ["$A=1, B=0$", "$A=0, B=1$", "Both 0", "Both 1"], correct: 0,
        solution: S({ c: "$A \\to B$ ('A implies B') false only when antecedent true but consequent false.", s: ["Equivalent: $\\bar{A} + B$."], a: "$A=1, B=0$" }), ref: "p.389" },
      { q: "Look-up table (LUT) in FPGA implements:",
        choices: ["Any combinational function up to n inputs", "Counters", "Memory", "Clocks"], correct: 0,
        solution: S({ c: "LUT: small memory addressed by inputs, outputs the truth table value. Reprogrammable.", s: ["FPGA: thousands of LUTs + interconnect."], a: "Combinational logic" }), ref: "p.391" },
      { q: "JK FF with $J=1, K=0, Q_{prev}=1$. Next:",
        choices: ["$Q = 1$ (set/hold)", "$Q = 0$", "Toggle", "Indeterminate"], correct: 0,
        solution: S({ c: "J=1, K=0 is SET. Output = 1 regardless of previous.", s: [""], a: "$Q = 1$" }), ref: "p.391" },
      { q: "Convert 0.375 (decimal) to binary fraction:",
        choices: ["$0.011_2$", "$0.110$", "$0.101$", "$0.100$"], correct: 0,
        solution: S({ c: "0.375 = 1/4 + 1/8 = $2^{-2} + 2^{-3}$.", s: ["Binary: 0.011."], a: "$0.011$" }), ref: "p.388" },
      { q: "Pipeline register count for 5-stage pipeline:",
        choices: ["$4$ (between stages)", "$5$", "$1$", "$10$"], correct: 0,
        solution: S({ c: "5 stages need 4 inter-stage registers.", s: [""], a: "$4$" }), ref: "p.408" },
      { q: "Karnaugh map: 4-variable, identifies pair of adjacent 1s → eliminates how many variables?",
        choices: ["$1$ variable", "$2$ variables", "All", "None"], correct: 0,
        solution: S({ c: "$2^k$ cells covered eliminates $k$ variables. Pair = $2^1$ = eliminates 1.", s: [""], a: "$1$" }), ref: "p.390" },
      { q: "Asynchronous reset of FF:",
        choices: ["Independent of clock", "Triggered by clock edge", "Has delay", "Sync only"], correct: 0,
        solution: S({ c: "Async reset: takes effect immediately, no clock needed.", s: ["Synchronous reset: waits for clock edge."], a: "Clock independent" }), ref: "p.391" },
      { q: "Setup time:",
        choices: ["Min time input must be stable before clock edge", "Hold time", "Propagation", "Output stable"], correct: 0,
        solution: S({ c: "Setup time: input must be valid before clock edge to capture correctly.", s: ["Violations cause metastability or wrong value latching."], a: "Stable before edge" }), ref: "p.391" },
      { q: "Glitch in combinational circuit caused by:",
        choices: ["Different propagation delays of paths", "Bad power", "Frequency", "Random"], correct: 0,
        solution: S({ c: "Different paths from same input have different delays → transient incorrect output.", s: ["Hazards: static (one transition causes glitch) and dynamic (multiple)."], a: "Path delay mismatch" }), ref: "p.391" },
      { q: "BCD to 7-segment decoder converts:",
        choices: ["4-bit BCD digit to 7 segment-control bits", "Hex to binary", "Sums to digits", "Linear to log"], correct: 0,
        solution: S({ c: "Display digit needs 7 segments. Decoder translates 4-bit BCD (0-9) into segment activation pattern.", s: [""], a: "BCD digit → segments" }), ref: "p.390" },
    ],

    // CompSys — +10
    16: [
      { q: "Memory hierarchy: SRAM vs DRAM cost per bit:",
        choices: ["SRAM more expensive (6T vs 1T1C)", "Same", "DRAM more expensive", "Both free"], correct: 0,
        solution: S({ c: "SRAM: 6 transistors per bit. DRAM: 1 transistor + 1 capacitor per bit.", s: ["DRAM denser → cheaper.", "SRAM faster, no refresh, used in caches."], a: "SRAM costlier" }), ref: "p.407" },
      { q: "Pipeline branch penalty mitigation:",
        choices: ["Branch prediction (BTB, BHT)", "Slower clock", "Smaller cache", "Fewer registers"], correct: 0,
        solution: S({ c: "Predict branches → speculatively execute. Correct prediction = no stall. Mispredict = flush.", s: ["Modern: 95-99% accurate."], a: "Branch prediction" }), ref: "p.408" },
      { q: "Two-level page table (32-bit address, 4K page, 4K page directory entries):",
        choices: ["10-bit directory + 10-bit table + 12-bit offset", "All 32 in offset", "Single 32-bit table", "16-bit each"], correct: 0,
        solution: S({ c: "Split: 12 bits offset (4K page), remaining 20 bits split into directory (10) + table index (10).", s: [""], a: "10+10+12" }), ref: "p.408" },
      { q: "MMU's TLB caches:",
        choices: ["Virtual-to-physical address translations", "Data", "Instructions", "Branches"], correct: 0,
        solution: S({ c: "Translation Lookaside Buffer: small fast cache for page table entries. Avoids walking page table every memory access.", s: ["Typical: ~64-1024 entries.", "TLB miss: penalty 10-100 cycles."], a: "Address translations" }), ref: "p.408" },
      { q: "Race condition:",
        choices: ["Concurrent access without synchronization → wrong result", "Fast execution", "Single thread", "Hardware fault"], correct: 0,
        solution: S({ c: "Race: result depends on timing — different runs yield different results.", s: ["Mitigation: locks, atomics, message passing."], a: "Concurrent access issue" }), ref: "p.408" },
      { q: "Atomic operation:",
        choices: ["Indivisible — completes fully or not at all", "Very fast", "Single byte", "Read-only"], correct: 0,
        solution: S({ c: "Atomic ops can't be interrupted. Useful for: counters, locks, lock-free structures.", s: ["E.g., compare-and-swap (CAS), atomic increment."], a: "Indivisible" }), ref: "p.408" },
      { q: "Hash table average lookup with good hash:",
        choices: ["$O(1)$", "$O(\\log n)$", "$O(n)$", "$O(n^2)$"], correct: 0,
        solution: S({ c: "Hash maps key to bucket directly.", s: ["Worst case $O(n)$ if all collide."], a: "$O(1)$ avg" }), ref: "p.415" },
      { q: "Process scheduler types:",
        choices: ["FCFS, SJF, Round-robin, priority, multilevel", "Just FCFS", "Random only", "All same"], correct: 0,
        solution: S({ c: "OS schedulers: First-Come First-Served, Shortest Job First, Round-Robin, Priority, Multilevel.", s: ["Tradeoffs: latency, fairness, throughput.", "Modern OS: complex multilevel feedback queues."], a: "Many strategies" }), ref: "p.408" },
      { q: "Cache coherence protocol:",
        choices: ["MESI (Modified, Exclusive, Shared, Invalid)", "Routing", "Memory protection", "Address translation"], correct: 0,
        solution: S({ c: "MESI: states of cache line in multicore systems. Maintains consistency without flushing.", s: ["Variants: MOESI, MESIF."], a: "MESI" }), ref: "p.408" },
      { q: "Word alignment:",
        choices: ["Accessing aligned words is faster on most CPUs", "Slows down access", "Irrelevant", "Only for memory"], correct: 0,
        solution: S({ c: "Aligned memory access: single cycle. Unaligned: may require multiple accesses or even fault.", s: ["Compilers usually align by default."], a: "Faster aligned access" }), ref: "p.407" },
    ],

    // Software — +10
    17: [
      { q: "Quicksort pivot choice for adversary-proof:",
        choices: ["Random or median-of-three", "Always first", "Always last", "Middle index"], correct: 0,
        solution: S({ c: "Random pivot avoids worst-case $O(n^2)$ on sorted input.", s: ["Median-of-three: median of first/mid/last as pivot.", "Introsort: switches to heapsort if recursion too deep."], a: "Random / median-of-3" }), ref: "p.415" },
      { q: "Memoization:",
        choices: ["Cache results of expensive function calls", "Memory allocation", "Garbage collection", "Caching DRAM"], correct: 0,
        solution: S({ c: "Memoization: store result of pure function call, reuse on identical inputs.", s: ["Dynamic programming = recursion + memoization.", "Transparent in some languages (lazy evaluation)."], a: "Cache function results" }), ref: "p.415" },
      { q: "Heap operations: insertion and extraction:",
        choices: ["Both $O(\\log n)$", "$O(1)$", "$O(n)$", "Insertion fast, extraction slow"], correct: 0,
        solution: S({ c: "Binary heap: tree of height $\\log n$. Bubble up (insert) or down (extract) = O(log n).", s: [""], a: "Both $O(\\log n)$" }), ref: "p.415" },
      { q: "Binary search tree (BST) worst case search:",
        choices: ["$O(n)$ if unbalanced", "$O(\\log n)$", "$O(1)$", "$O(n^2)$"], correct: 0,
        solution: S({ c: "Worst case: BST degenerates to linked list (e.g., inserting sorted data).", s: ["Self-balancing trees (AVL, red-black): guarantee $O(\\log n)$."], a: "$O(n)$ worst" }), ref: "p.415" },
      { q: "Recursive Fibonacci with memoization complexity:",
        choices: ["$O(n)$ time, $O(n)$ space", "$O(2^n)$", "$O(1)$", "$O(\\log n)$"], correct: 0,
        solution: S({ c: "Each fib(k) for k=0..n computed once. Linear time with memo table.", s: ["Iterative: $O(n)$ time, $O(1)$ space."], a: "$O(n), O(n)$" }), ref: "p.415" },
      { q: "Depth-first search (DFS) uses:",
        choices: ["Stack (or recursion)", "Queue", "Heap", "Hashtable"], correct: 0,
        solution: S({ c: "DFS explores deep before backtracking — natural fit for stack/recursion.", s: ["BFS uses queue."], a: "Stack" }), ref: "p.415" },
      { q: "Big-O of finding shortest path in unweighted graph (BFS):",
        choices: ["$O(V + E)$", "$O(V \\log V)$", "$O(V^2)$", "$O(E)$"], correct: 0,
        solution: S({ c: "BFS visits each vertex and edge once.", s: ["Dijkstra (weighted): $O((V+E)\\log V)$ with priority queue."], a: "$O(V+E)$" }), ref: "p.415" },
      { q: "Big-O of accessing first vs last element of linked list:",
        choices: ["First: $O(1)$; Last: $O(n)$ (singly), $O(1)$ (doubly with tail)", "Both $O(1)$", "Both $O(n)$", "Variable"], correct: 0,
        solution: S({ c: "Singly linked: head O(1), tail O(n).", s: ["Doubly with tail pointer: tail O(1).", "Circular linked: both O(1) from current."], a: "Depends" }), ref: "p.415" },
      { q: "Algorithm with $O(n^3)$ on small input — feasible vs $n = 10^6$:",
        choices: ["Small $n$ fine; $n = 10^6$ infeasible ($10^{18}$ ops)", "Both fine", "Both bad", "Neither"], correct: 0,
        solution: S({ c: "Cubic scales poorly. $n = 10^6$: 10^18 ops = trillions of seconds.", s: ["Practical limits: $n \\le 10^3$ for $O(n^3)$ in seconds."], a: "Small only" }), ref: "p.415" },
      { q: "Software complexity metric McCabe:",
        choices: ["Cyclomatic complexity — counts independent paths", "Lines of code", "Number of functions", "Memory used"], correct: 0,
        solution: S({ c: "Cyclomatic complexity: $E - N + 2P$ for control flow graph. Roughly counts independent decision paths.", s: ["High complexity → hard to test/maintain.", "Typical guideline: keep < 10."], a: "Cyclomatic complexity" }), ref: "p.415" },
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
  console.log(`Pack 6: +${added} → bank total ${total}`);
})();
