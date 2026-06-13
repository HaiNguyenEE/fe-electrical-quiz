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
        solution: S({
          c: "A series voltage divider splits the source voltage in proportion to resistance: $V_2 = V_{in}\\cdot\\dfrac{R_2}{R_1+R_2}$.",
          s: [
            "<b>Step 1 — Apply.</b> $V_2 = 24\\cdot\\dfrac{4}{8+4} = 24\\cdot\\dfrac{4}{12} = 8$ V.",
            "<b>Step 2 — Distractor audit.</b> 12 V would be an even split (equal R); 16 V is the drop across $R_1$; 24 V is the whole source."
          ],
          a: "$V_2 = 8$ V",
          v: "Check: $V_1 = 24\\cdot8/12 = 16$ V, and $V_1+V_2 = 24$ V ✓ (KVL). The smaller resistor drops the smaller voltage — $R_2$ is half of $R_1$, so it gets half the voltage."

        }), ref: "p.356" },
      { q: "Calc current through 5Ω resistor in parallel with 10Ω with $V$ = 20V across:",
        choices: ["$4$ A through 5Ω; $2$ A through 10Ω", "$6$ A; $0$ A", "Both 4 A", "Both 2 A"], correct: 0,
        solution: S({
          c: "Elements in PARALLEL share the SAME voltage. Current divides by Ohm's law: $I = V/R$ in each branch (smaller R → bigger current).",
          s: [
            "<b>Step 1 — Same V = 20 V on both.</b> $I_5 = 20/5 = 4$ A.",
            "<b>Step 2 — Other branch.</b> $I_{10} = 20/10 = 2$ A.",
            "<b>Step 3 — Distractor audit.</b> '6 A; 0 A' and 'both equal' violate Ohm's law per branch."
          ],
          a: "4 A through 5Ω; 2 A through 10Ω.",
          v: "Total current 6 A splits inversely to resistance — the 5Ω (lower R) hogs twice the current of the 10Ω ✓. Series shares current; parallel shares voltage."

        }), ref: "p.356" },
      { q: "Power factor correction adds:",
        choices: ["Shunt capacitor for inductive load", "Series inductor", "Higher voltage", "More resistors"], correct: 0,
        solution: S({
          c: "Inductive loads (motors) draw LAGGING reactive power. A SHUNT (parallel) capacitor supplies LEADING reactive power that cancels it, raising the power factor toward 1.",
          s: [
            "<b>Step 1 — Match.</b> Shunt capacitor for inductive load.",
            "<b>Step 2 — Distractor audit.</b> A series inductor would WORSEN it; higher voltage and more resistors don't correct pf."
          ],
          a: "A shunt (parallel) capacitor.",
          v: "The capacitor's leading VARs offset the load's lagging VARs locally, so the source delivers mostly real power ✓ — cutting line current and $I^2R$ losses. It's wired in PARALLEL so it doesn't change the load's voltage."

        }), ref: "p.362" },
      { q: "$V_s = 100$ V drives series $R = 10$Ω, $L = 0.1$H, $C = 100$µF at $\\omega = 100$ rad/s. Total Z:",
        choices: ["$10 + j(10-100)$ = $10 - j90$", "$10 + j10$", "$10 - j10$", "$100$"], correct: 0,
        solution: S({
          c: "Series RLC impedance: $Z = R + j(X_L - X_C)$, where $X_L=\\omega L$ and $X_C=1/(\\omega C)$. The reactances partly cancel.",
          s: [
            "<b>Step 1 — Reactances.</b> $X_L=\\omega L=100(0.1)=10\\ \\Omega$; $X_C=1/(\\omega C)=1/(100\\cdot10^{-4})=100\\ \\Omega$.",
            "<b>Step 2 — Combine.</b> $Z = 10 + j(10-100) = 10 - j90\\ \\Omega$.",
            "<b>Step 3 — Distractor audit.</b> $10+j10$ keeps only $X_L$; $10-j10$ mis-subtracts; $100$ ignores reactance."
          ],
          a: "$Z = 10 - j90\\ \\Omega$ (net capacitive).",
          v: "Negative imaginary part → CAPACITIVE (current leads voltage) ✓. Since $X_C \\gg X_L$, the capacitor dominates — we're well BELOW the resonant frequency where they'd cancel exactly."

        }), ref: "p.360" },
      { q: "Find Norton equivalent: voltage source 24V with 12Ω series.",
        choices: ["$I_N = 2$ A, $R_N = 12$Ω", "$24$ A", "$1$ A", "$0.5$ A"], correct: 0,
        solution: S({
          c: "Source transformation: a Thévenin (voltage source $V_{Th}$ + series $R$) converts to a Norton (current source $I_N$ ∥ same $R$) via $I_N = V_{Th}/R_{Th}$, with $R_N = R_{Th}$.",
          s: [
            "<b>Step 1 — Norton current.</b> $I_N = 24/12 = 2$ A.",
            "<b>Step 2 — Resistance unchanged.</b> $R_N = 12\\ \\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 24 A forgets the resistance; 1 A and 0.5 A misdivide."
          ],
          a: "$I_N = 2$ A, $R_N = 12\\ \\Omega$.",
          v: "$I_N$ is also the SHORT-CIRCUIT current (short the terminals: $24/12 = 2$ A) ✓ — Norton and Thévenin are the same network seen two ways, with R identical in both."

        }), ref: "p.357" },
      { q: "What is the rms value of a half-wave rectified sinusoid of peak $V_m$?",
        choices: ["$V_m/2$", "$V_m/\\pi$", "$V_m/\\sqrt{2}$", "$2V_m/\\pi$"], correct: 0,
        solution: S({
          c: "A half-wave rectifier passes only one half of each cycle (the other half is zero). Because only half the energy is present, its RMS is $V_m/2$ (vs $V_m/\\sqrt2$ for a full sine).",
          s: [
            "<b>Step 1 — Match.</b> $V_m/2$.",
            "<b>Step 2 — Distractor audit.</b> $V_m/\\pi$ is the AVERAGE (DC) value; $V_m/\\sqrt2$ is the FULL-sine RMS; $2V_m/\\pi$ is the full-wave average."
          ],
          a: "$V_{rms} = V_m/2$",
          v: "Compare the family: full sine RMS $V_m/\\sqrt2=0.707V_m$; half-wave RMS $V_m/2=0.5V_m$; half-wave average $V_m/\\pi=0.318V_m$ ✓. Half-wave keeps half the cycle, so RMS² is half → RMS is $V_m/2$."

        }), ref: "p.383" },
      { q: "An AC source provides $V = 100\\sin(\\omega t)$ V. Half-wave rectified output average:",
        choices: ["$\\approx 31.8$ V", "$50$ V", "$100$ V", "$0$"], correct: 0,
        solution: S({
          c: "The AVERAGE (DC) value of a half-wave rectified sine is $V_{DC} = V_m/\\pi$.",
          s: [
            "<b>Step 1 — Apply.</b> $V_{DC} = 100/\\pi = 31.83$ V.",
            "<b>Step 2 — Distractor audit.</b> 50 V over-estimates; 100 V is the peak; 0 would be a symmetric AC (the rectifier removes the negative half)."
          ],
          a: "$\\approx 31.83$ V",
          v: "A FULL-wave rectifier doubles this to $2V_m/\\pi = 63.7$ V ✓ — it captures both half-cycles. The DC value (average) is what a moving-coil meter reads; the RMS ($V_m/2=50$ V here) is what determines heating."

        }), ref: "p.383" },
      { q: "Energy stored in 200 µF cap charged to 20 V:",
        choices: ["$40$ mJ", "$2$ mJ", "$0.4$ J", "$80$ mJ"], correct: 0,
        solution: S({
          c: "Capacitor energy: $W = \\tfrac12 CV^2$.",
          s: [
            "<b>Step 1 — Apply.</b> $W = \\tfrac12(200\\times10^{-6})(20^2) = \\tfrac12(200\\times10^{-6})(400) = 0.04$ J = 40 mJ.",
            "<b>Step 2 — Distractor audit.</b> 2 mJ forgets to square V; 0.4 J slips a decade; 80 mJ forgets the ½."
          ],
          a: "$W = 40$ mJ",
          v: "The $V^2$ dependence means doubling voltage QUADRUPLES stored energy ✓ — which is why high-voltage capacitor banks store dangerous energy. Units: F·V² = J."

        }), ref: "p.358" },
      { q: "RC discharge: 100V across cap, $\\tau = 1$ s. At $t = 3$ s:",
        choices: ["$\\approx 4.98$ V", "$50$ V", "$10$ V", "$0$"], correct: 0,
        solution: S({
          c: "A discharging capacitor decays exponentially: $v(t) = V_0 e^{-t/\\tau}$.",
          s: [
            "<b>Step 1 — At t = 3τ.</b> $v = 100\\,e^{-3} = 100(0.0498) = 4.98$ V.",
            "<b>Step 2 — Distractor audit.</b> 50 V would be ~0.7τ; 10 V ~2.3τ; 0 would need many more τ."
          ],
          a: "$\\approx 4.98$ V",
          v: "The discharge ladder: after $1\\tau$→37%, $2\\tau$→13.5%, $3\\tau$→5%, $5\\tau$→0.7% ✓. The '5τ rule' (≈99% done) is why a capacitor is considered fully discharged after five time constants."

        }), ref: "p.358" },
      { q: "Switching frequency 1 kHz: period",
        choices: ["$1$ ms", "$1$ µs", "$1$ Hz", "$1$ s"], correct: 0,
        solution: S({
          c: "Period and frequency are reciprocals: $T = 1/f$.",
          s: [
            "<b>Step 1 — Apply.</b> $T = 1/1000 = 0.001$ s = 1 ms.",
            "<b>Step 2 — Distractor audit.</b> 1 µs is 1 MHz; 1 Hz and 1 s confuse the units."
          ],
          a: "$T = 1$ ms",
          v: "Handy anchors: 1 kHz↔1 ms, 1 MHz↔1 µs, 1 GHz↔1 ns ✓ — each factor of 1000 in frequency is a factor of 1000 in period, the other way."

        }), ref: "p.360" },
      { q: "Calculate $i(t) = di/dt$ of $i(t) = 5\\cos(100t)$ A at $t = 0$:",
        choices: ["$0$ (since $\\sin 0 = 0$, and derivative is $-500\\sin$)", "$500$", "$5$", "$-5$"], correct: 0,
        solution: S({
          c: "The derivative of $\\cos$ is $-\\sin$ (times the chain-rule factor): $\\dfrac{d}{dt}[5\\cos(100t)] = -500\\sin(100t)$.",
          s: [
            "<b>Step 1 — Differentiate.</b> $di/dt = -5(100)\\sin(100t) = -500\\sin(100t)$.",
            "<b>Step 2 — At t = 0.</b> $\\sin 0 = 0$, so $di/dt = 0$.",
            "<b>Step 3 — Distractor audit.</b> 500 is the PEAK rate (at $\\sin=\\pm1$); 5 and −5 confuse the value with the derivative."
          ],
          a: "$di/dt = 0$ at $t=0$.",
          v: "A cosine is at its PEAK at $t=0$, where its slope is momentarily zero ✓ — the rate of change is MAXIMUM (±500) where the cosine crosses zero, a quarter period later."

        }), ref: "p.358" },
      { q: "Across what element is voltage AND current in phase?",
        choices: ["Resistor (only)", "Inductor", "Capacitor", "Any"], correct: 0,
        solution: S({
          c: "For a pure RESISTOR, $v = iR$ holds instantaneously, so voltage and current have the same waveform and ZERO phase difference. Reactive elements shift the phase by 90°.",
          s: [
            "<b>Step 1 — Match.</b> Resistor only.",
            "<b>Step 2 — Distractor audit.</b> Inductor: V LEADS I by 90°; Capacitor: V LAGS I by 90°; 'any' is false."
          ],
          a: "Resistor (V and I in phase).",
          v: "Mnemonic ELI the ICE man: in an inductor (L), EMF leads I; in a capacitor (C), I leads EMF ✓. Only the resistor has them aligned — which is why a resistor dissipates real power continuously, while pure reactances don't."

        }), ref: "p.360" },
      { q: "Calc avg power for $v = 50\\cos\\omega t$, $i = 10\\cos(\\omega t-60°)$:",
        choices: ["$125$ W", "$250$ W", "$500$ W", "$0$"], correct: 0,
        solution: S({
          c: "Average AC power: $P = \\dfrac{V_m I_m}{2}\\cos\\theta$, where θ is the phase angle between voltage and current.",
          s: [
            "<b>Step 1 — Phase angle.</b> $\\theta = 60°$ (current lags by 60°).",
            "<b>Step 2 — Apply.</b> $P = \\dfrac{50\\times10}{2}\\cos60° = 250\\times0.5 = 125$ W.",
            "<b>Step 3 — Distractor audit.</b> 250 W forgets $\\cos\\theta$ (apparent power); 500 W forgets the ½ too; 0 would need θ=90°."
          ],
          a: "$P = 125$ W",
          v: "The $\\cos60°=0.5$ is the power factor — only HALF the apparent power (250 VA) becomes real power ✓. The other half sloshes back and forth as reactive power."

        }), ref: "p.362" },
      { q: "Wye source with $V_{LL} = 240$ V supplies a 3-phase load. Phase voltage:",
        choices: ["$\\approx 138.6$ V", "$240$ V", "$416$ V", "$80$ V"], correct: 0,
        solution: S({
          c: "In a wye connection, phase (line-to-neutral) voltage is line-to-line divided by $\\sqrt3$: $V_\\phi = V_{LL}/\\sqrt3$.",
          s: [
            "<b>Step 1 — Apply.</b> $V_\\phi = 240/\\sqrt3 = 240/1.732 = 138.6$ V.",
            "<b>Step 2 — Distractor audit.</b> 240 V is line-to-line (delta phase); 416 V MULTIPLIES by $\\sqrt3$; 80 V divides by 3."
          ],
          a: "$V_\\phi \\approx 138.6$ V",
          v: "The $\\sqrt3$ factor is wye's signature ✓ — in DELTA, phase voltage equals line voltage instead. The familiar 208/120 V building system is the same relationship: $208/\\sqrt3 = 120$ V."

        }), ref: "p.363" },
      { q: "Two 100 µF caps in series:",
        choices: ["$50$ µF", "$200$ µF", "$100$ µF", "$10$ µF"], correct: 0,
        solution: S({
          c: "Capacitors in SERIES combine by reciprocals (like resistors in parallel): $1/C_{eq} = 1/C_1 + 1/C_2$. Two equal caps give half: $C/2$.",
          s: [
            "<b>Step 1 — Apply.</b> $1/C_{eq} = 1/100 + 1/100 = 2/100 \\Rightarrow C_{eq} = 50$ µF.",
            "<b>Step 2 — Distractor audit.</b> 200 µF would be PARALLEL (caps add in parallel); 100 µF and 10 µF are wrong."
          ],
          a: "$C_{eq} = 50$ µF",
          v: "Capacitors are the OPPOSITE of resistors: series caps combine like parallel resistors, parallel caps add ✓ — because capacitance is inversely related to plate separation, and series effectively increases separation."

        }), ref: "p.358" },
      { q: "Calc rms of $i(t) = 5 + 3\\cos\\omega t$ (DC + AC):",
        choices: ["$\\sqrt{25 + 9/2} \\approx 5.43$", "$5$", "$3$", "$8$"], correct: 0,
        solution: S({
          c: "For a signal with a DC component plus an AC component, the total RMS combines them in quadrature: $I_{rms} = \\sqrt{I_{DC}^2 + I_{AC,rms}^2}$ (since the DC and AC parts are orthogonal).",
          s: [
            "<b>Step 1 — AC RMS.</b> $I_{AC,rms} = 3/\\sqrt2 = 2.12$ A.",
            "<b>Step 2 — Combine.</b> $\\sqrt{5^2 + 2.12^2} = \\sqrt{25 + 4.5} = \\sqrt{29.5} = 5.43$ A.",
            "<b>Step 3 — Distractor audit.</b> 5 is DC only; 3 is AC peak; 8 wrongly adds peaks ($5+3$)."
          ],
          a: "$I_{rms} \\approx 5.43$ A",
          v: "Add in QUADRATURE, never linearly — the DC and AC contributions are independent (orthogonal) so their squared values add ✓. This is the same rule as combining independent error sources."

        }), ref: "p.360" },
      { q: "Total impedance of 4Ω in series with parallel(6Ω, j8Ω):",
        choices: ["$\\approx 8.35\\angle 20.2°$ Ω", "$10$", "$j8$", "$14$"], correct: 0,
        solution: S({
          c: "Combine the parallel pair first (product-over-sum with complex arithmetic), then add the series resistor. Convert to polar at the end for magnitude/angle.",
          s: [
            "<b>Step 1 — Parallel.</b> $\\dfrac{(6)(j8)}{6+j8} = \\dfrac{j48}{6+j8}$. Multiply by conjugate: $\\dfrac{j48(6-j8)}{100} = \\dfrac{384 + j288}{100} = 3.84 + j2.88$.",
            "<b>Step 2 — Add series 4Ω.</b> $Z = 4 + 3.84 + j2.88 = 7.84 + j2.88$.",
            "<b>Step 3 — Polar.</b> $|Z| = \\sqrt{7.84^2 + 2.88^2} = \\sqrt{69.8} = 8.35$; angle $= \\arctan(2.88/7.84) = 20.2°$.",
            "<b>Step 4 — Distractor audit.</b> 10, j8, 14 ignore the complex parallel combination."
          ],
          a: "$Z \\approx 8.35\\angle 20.2°\\ \\Omega$",
          v: "Sanity: the real part 7.84 alone would give 7.84∠0°, and adding the +j2.88 reactance bumps the magnitude to 8.35 and tilts it 20° inductive ✓. Order matters — reduce the parallel block before adding the series element."

        }), ref: "p.360" },
      { q: "Short-circuit current of 24V source with 6Ω internal R:",
        choices: ["$4$ A", "$0.25$ A", "$24$ A", "$144$ A"], correct: 0,
        solution: S({
          c: "Shorting the terminals leaves only the internal resistance to limit current: $I_{SC} = V/R_{internal}$.",
          s: [
            "<b>Step 1 — Apply.</b> $I_{SC} = 24/6 = 4$ A.",
            "<b>Step 2 — Distractor audit.</b> 0.25 A inverts ($R/V$); 24 A forgets R; 144 A multiplies."
          ],
          a: "$I_{SC} = 4$ A",
          v: "This is also the NORTON current of the source ✓. Internal resistance is what keeps short-circuit current finite — an ideal source (R=0) would deliver infinite current, which is why real sources and supplies have current limits."

        }), ref: "p.357" },
      { q: "Capacitor voltage cannot change:",
        choices: ["Instantaneously (requires infinite current)", "At all", "Quickly", "Without breaking"], correct: 0,
        solution: S({
          c: "Capacitor current is $i = C\\,dv/dt$. A sudden (step) change in voltage would require $dv/dt=\\infty$, hence INFINITE current — physically impossible. So capacitor voltage is continuous.",
          s: [
            "<b>Step 1 — Match.</b> Cannot change instantaneously.",
            "<b>Step 2 — Distractor audit.</b> 'At all' is wrong (it changes, just not instantly); 'quickly'/'without breaking' miss the continuity principle."
          ],
          a: "Instantaneously (would need infinite current).",
          v: "The dual rule: an INDUCTOR's current can't change instantly (would need infinite voltage, $v=L\\,di/dt$) ✓. These two continuity rules set the initial conditions for every transient circuit analysis."

        }), ref: "p.358" },
      { q: "Crest factor of pure sinusoid:",
        choices: ["$\\sqrt{2} \\approx 1.414$", "$2$", "$1$", "$\\pi$"], correct: 0,
        solution: S({
          c: "Crest factor = peak value / RMS value — a measure of how 'peaky' a waveform is. For a sinusoid, peak is $V_m$ and RMS is $V_m/\\sqrt2$, so crest factor $= \\sqrt2$.",
          s: [
            "<b>Step 1 — Apply.</b> $V_m / (V_m/\\sqrt2) = \\sqrt2 \\approx 1.414$.",
            "<b>Step 2 — Distractor audit.</b> 2 and π aren't the sine's crest factor; 1 is a square wave (peak = RMS)."
          ],
          a: "$\\sqrt2 \\approx 1.414$",
          v: "Crest-factor ladder: square wave = 1 (flat), sine = √2, triangle = √3 ✓. High crest factor (spiky signals) stresses amplifiers and meters — true-RMS meters handle it, averaging meters don't."

        }), ref: "p.360" },
    ],

    // Linear Sys — +10
    7: [
      { q: "Laplace transform of $\\cos(2t)$:",
        choices: ["$s/(s^2+4)$", "$2/(s^2+4)$", "$s/(s^2-4)$", "$1/(s-2)$"], correct: 0,
        solution: S({
          c: "Standard Laplace pair: $\\mathcal L\\{\\cos\\omega t\\} = \\dfrac{s}{s^2+\\omega^2}$. Here $\\omega=2$ so $\\omega^2=4$.",
          s: [
            "<b>Step 1 — Apply.</b> $s/(s^2+4)$.",
            "<b>Step 2 — Distractor audit.</b> $2/(s^2+4)$ is $\\sin2t$ (numerator $\\omega$, not $s$); $s/(s^2-4)$ is $\\cosh2t$; $1/(s-2)$ is $e^{2t}$."
          ],
          a: "$s/(s^2+4)$",
          v: "Cosine→s in numerator, sine→ω in numerator — the distinguishing detail ✓. The $+\\omega^2$ (not $-\\omega^2$) keeps the poles imaginary ($\\pm j2$), giving oscillation rather than the hyperbolic growth of $s^2-4$."

        }), ref: "p.56" },
      { q: "Transfer function $H(s) = 1$ corresponds to:",
        choices: ["Identity (passthrough)", "Differentiator", "Integrator", "Delay"], correct: 0,
        solution: S({
          c: "A transfer function of exactly 1 means output = input at every frequency — a passthrough (identity) system.",
          s: [
            "<b>Step 1 — Match.</b> Identity / passthrough.",
            "<b>Step 2 — Distractor audit.</b> Differentiator is $H=s$; integrator is $H=1/s$; delay is $H=e^{-\\tau s}$."
          ],
          a: "Identity (passthrough).",
          v: "$H=1$ has flat 0-dB magnitude and 0° phase everywhere ✓ — it changes nothing. It's the reference baseline against which gain ($H=K$) and dynamics (poles/zeros) are measured."

        }), ref: "p.365" },
      { q: "Two systems in series total transfer function:",
        choices: ["$H_1 \\cdot H_2$ (multiplication)", "Addition", "Average", "Subtraction"], correct: 0,
        solution: S({
          c: "When LTI systems are CASCADED (series), their transfer functions MULTIPLY: $H = H_1 H_2$ (the output of one feeds the input of the next).",
          s: [
            "<b>Step 1 — Match.</b> $H_1\\cdot H_2$.",
            "<b>Step 2 — Distractor audit.</b> Addition is for PARALLEL paths; average/subtraction aren't block-diagram rules."
          ],
          a: "$H_1 H_2$ (multiply).",
          v: "On a Bode plot, cascading means magnitudes (in dB) and phases ADD, since multiplication becomes addition on the log scale ✓ — which is why you build Bode plots by stacking each factor's contribution."

        }), ref: "p.365" },
      { q: "Steady-state response of LTI system to $\\cos\\omega t$:",
        choices: ["$|H(j\\omega)|\\cos(\\omega t + \\angle H)$", "$\\cos\\omega t$", "Always 0", "$H(0)$"], correct: 0,
        solution: S({
          c: "An LTI system's steady-state response to a sinusoid is ANOTHER sinusoid at the SAME frequency, scaled by $|H(j\\omega)|$ and phase-shifted by $\\angle H(j\\omega)$: output $= |H|\\cos(\\omega t + \\angle H)$.",
          s: [
            "<b>Step 1 — Match.</b> $|H(j\\omega)|\\cos(\\omega t + \\angle H)$.",
            "<b>Step 2 — Distractor audit.</b> Plain $\\cos\\omega t$ ignores gain/phase; 'always 0' and '$H(0)$' (DC gain) are wrong."
          ],
          a: "$|H(j\\omega)|\\cos(\\omega t + \\angle H)$.",
          v: "This 'eigenfunction' property — sinusoid in, same-frequency sinusoid out — is EXACTLY why frequency-domain (Bode) analysis works ✓. $|H|$ and $\\angle H$ at each ω fully characterize a linear system."

        }), ref: "p.365" },
      { q: "Pole at $s = 5$ (RHP):",
        choices: ["Unstable — exponentially growing $e^{5t}$", "Stable", "Marginal", "Oscillatory"], correct: 0,
        solution: S({
          c: "A pole at $s=\\sigma$ produces a time term $e^{\\sigma t}$. A RIGHT-half-plane pole ($\\sigma>0$) gives $e^{+5t}$ — exponential GROWTH → unstable.",
          s: [
            "<b>Step 1 — Match.</b> Unstable, growing $e^{5t}$.",
            "<b>Step 2 — Distractor audit.</b> Stable needs LHP ($\\sigma<0$); marginal is on the axis ($\\sigma=0$); oscillatory needs an imaginary part."
          ],
          a: "Unstable (exponential growth).",
          v: "The rule in one line: LHP poles decay (stable), jω-axis poles sustain (marginal), RHP poles grow (unstable) ✓ — any single RHP pole makes the whole system unstable regardless of the others."

        }), ref: "p.365" },
      { q: "Pole on imaginary axis:",
        choices: ["Marginally stable (pure oscillation)", "Stable", "Unstable", "Critically damped"], correct: 0,
        solution: S({
          c: "Poles exactly on the imaginary axis ($s=\\pm j\\omega$) give $e^{\\pm j\\omega t}$ — pure sinusoids that neither grow nor decay. This is MARGINAL stability.",
          s: [
            "<b>Step 1 — Match.</b> Marginally stable (pure oscillation).",
            "<b>Step 2 — Distractor audit.</b> Stable requires decay (LHP); unstable requires growth (RHP); 'critically damped' is a real-pole, non-oscillatory condition."
          ],
          a: "Marginally stable (undamped oscillation).",
          v: "Marginal is the knife-edge between stable and unstable ✓ — an ideal LC oscillator sits here. In practice it's fragile: any parameter drift can tip it into instability, so true marginal stability is avoided in designs."

        }), ref: "p.365" },
      { q: "Effect of negative feedback in time domain:",
        choices: ["Reduces sensitivity to gain variations, can speed up response", "Slows response", "Adds instability", "No effect"], correct: 0,
        solution: S({
          c: "Negative feedback trades raw gain for desirable properties: reduced SENSITIVITY to component/gain variations, wider bandwidth, lower distortion, and often faster response.",
          s: [
            "<b>Step 1 — Match.</b> Reduces sensitivity to gain variations; can speed response.",
            "<b>Step 2 — Distractor audit.</b> It generally SPEEDS response (wider BW), and properly applied IMPROVES stability — 'slows'/'adds instability'/'no effect' are wrong."
          ],
          a: "Reduces sensitivity (and widens bandwidth).",
          v: "The core benefit: closed-loop behavior depends mainly on the (stable, precise) feedback network, not the (variable) open-loop gain ✓ — which is why op-amp circuits are so reproducible. Excessive feedback with phase lag CAN destabilize, but that's a design fault, not the intent."

        }), ref: "p.365" },
      { q: "Bandwidth of cascade of identical 1st-order LPFs (3 of them, each $\\omega_c = 100$):",
        choices: ["$\\approx 51$ rad/s (narrower than single)", "$300$", "$100$", "$33.3$"], correct: 0,
        solution: S({
          c: "Cascading identical low-pass stages NARROWS the overall bandwidth (each stage attenuates, so the combined −3 dB point drops): $\\omega_{c,total} = \\omega_c\\sqrt{2^{1/n}-1}$.",
          s: [
            "<b>Step 1 — Factor for n=3.</b> $\\sqrt{2^{1/3}-1} = \\sqrt{0.2599} = 0.51$.",
            "<b>Step 2 — Apply.</b> $\\omega_{c,total} = 100\\times0.51 = 51$ rad/s.",
            "<b>Step 3 — Distractor audit.</b> 300 and 100 ignore the narrowing; 33.3 wrongly assumes linear division."
          ],
          a: "$\\approx 51$ rad/s (narrower than one stage).",
          v: "Each stage's gentle rolloff starts before $\\omega_c$, so three in series cross −3 dB EARLIER than one ✓ — the price of a steeper ultimate rolloff (−60 dB/dec for three stages vs −20 for one)."

        }), ref: "p.366" },
      { q: "Pulse response of a system = derivative of:",
        choices: ["Step response", "Impulse response", "Ramp response", "Sine response"], correct: 0,
        solution: S({
          c: "Among the standard test responses, a narrow pulse ≈ the derivative of a step (a pulse is a step up immediately followed by a step down). So the pulse response relates to the STEP response.",
          s: [
            "<b>Step 1 — Match.</b> Step response.",
            "<b>Step 2 — Distractor audit.</b> The hierarchy: impulse response is the derivative of step response; step is the integral of impulse; ramp is the integral of step."
          ],
          a: "Step response.",
          v: "The integration chain ties them together: impulse → (integrate) → step → (integrate) → ramp ✓. Differentiating a step gives an impulse; a real finite pulse is the difference of two steps."

        }), ref: "p.56" },
      { q: "Inverse Laplace of $4/(s^2+16)$:",
        choices: ["$\\sin 4t$", "$\\cos 4t$", "$e^{-4t}$", "$4t$"], correct: 0,
        solution: S({
          c: "Standard pair: $\\dfrac{\\omega}{s^2+\\omega^2} \\leftrightarrow \\sin\\omega t$. Here the numerator 4 matches $\\omega=4$ (since $\\omega^2=16$).",
          s: [
            "<b>Step 1 — Identify.</b> $\\omega=4$, numerator $=\\omega=4$ → sine form.",
            "<b>Step 2 — Apply.</b> $\\mathcal L^{-1}\\{4/(s^2+16)\\} = \\sin4t$.",
            "<b>Step 3 — Distractor audit.</b> $\\cos4t$ would need $s$ in the numerator; $e^{-4t}$ is $1/(s+4)$; $4t$ is $4/s^2$."
          ],
          a: "$\\sin 4t$",
          v: "Cosine has $s$ on top, sine has $\\omega$ on top — the numerator tells you which ✓. The numerator conveniently equals 4, so no scaling factor is needed; otherwise you'd factor out $\\omega$."

        }), ref: "p.56" },
    ],

    // Signal — +10
    8: [
      { q: "Z-transform of $u[n]$ (unit step):",
        choices: ["$z/(z-1) = 1/(1-z^{-1})$", "$1$", "$z$", "$0$"], correct: 0,
        solution: S({
          c: "The unit step $u[n]$ is 1 for $n\\ge0$. Its Z-transform is the geometric series $\\sum_{n=0}^\\infty z^{-n} = \\dfrac{1}{1-z^{-1}} = \\dfrac{z}{z-1}$ (for $|z|>1$).",
          s: [
            "<b>Step 1 — Sum the series.</b> $\\sum z^{-n} = 1/(1-z^{-1})$.",
            "<b>Step 2 — Rewrite.</b> Multiply top and bottom by $z$: $z/(z-1)$.",
            "<b>Step 3 — Distractor audit.</b> 1 is the unit IMPULSE $\\delta[n]$; $z$ is a time advance; 0 is wrong."
          ],
          a: "$z/(z-1)$",
          v: "It's the discrete-time analog of the continuous step's $1/s$ ✓. The pole at $z=1$ (on the unit circle) reflects that the step never decays — marginally stable, like the integrator it represents."

        }), ref: "p.376" },
      { q: "Z-transform region of convergence (ROC) for causal sequence:",
        choices: ["$|z| > r_{max\\,pole}$ — outside outermost pole", "Inside innermost pole", "All z", "$|z| = 1$"], correct: 0,
        solution: S({
          c: "For a CAUSAL sequence (zero for n<0), the ROC is the region OUTSIDE the outermost pole: $|z| > r_{max\\,pole}$.",
          s: [
            "<b>Step 1 — Match.</b> $|z| > $ (radius of outermost pole).",
            "<b>Step 2 — Distractor audit.</b> 'Inside innermost pole' is the ANTI-causal case; 'all z' only for finite sequences; '$|z|=1$' is just the unit circle."
          ],
          a: "Outside the outermost pole.",
          v: "For STABILITY the ROC must include the unit circle ✓ — so a causal system is stable iff all poles are INSIDE $|z|=1$ (then $|z|>r_{max}$ contains $|z|=1$). ROC direction (out vs in) encodes causality."

        }), ref: "p.376" },
      { q: "Digital filter stable iff:",
        choices: ["All poles inside unit circle", "All zeros inside", "Real coefficients", "Linear phase"], correct: 0,
        solution: S({
          c: "A discrete-time (digital) filter is stable if and only if all its poles lie INSIDE the unit circle ($|z|<1$) in the z-plane.",
          s: [
            "<b>Step 1 — Match.</b> All poles inside the unit circle.",
            "<b>Step 2 — Distractor audit.</b> ZERO locations don't affect stability; real coefficients and linear phase are separate properties."
          ],
          a: "All poles inside $|z|=1$.",
          v: "It's the discrete analog of 'poles in the left-half plane' for continuous systems ✓ — the bilinear transform maps the LHP to the inside of the unit circle precisely to preserve this. Zeros can sit anywhere."

        }), ref: "p.376" },
      { q: "Convolution length: $L_1 = 5$ samples, $L_2 = 8$. Output length:",
        choices: ["$12$ ($L_1+L_2-1$)", "$13$", "$5$", "$40$"], correct: 0,
        solution: S({
          c: "Linear convolution of two finite sequences produces an output of length $L_1 + L_2 - 1$.",
          s: [
            "<b>Step 1 — Apply.</b> $5 + 8 - 1 = 12$.",
            "<b>Step 2 — Distractor audit.</b> 13 forgets the $-1$; 5 keeps only the first input's length; 40 multiplies."
          ],
          a: "12 samples.",
          v: "The $-1$ accounts for the overlap at the endpoints ✓. This matters for FFT-based fast convolution: you must zero-pad both signals to at least length 12 to avoid circular-convolution wraparound."

        }), ref: "p.376" },
      { q: "DFT of length-N sequence: number of bins:",
        choices: ["$N$ (frequency resolution $f_s/N$)", "$N/2$", "Half the samples", "Infinite"], correct: 0,
        solution: S({
          c: "The DFT of an N-point sequence produces exactly N frequency bins, spaced $f_s/N$ apart.",
          s: [
            "<b>Step 1 — Match.</b> N bins (resolution $f_s/N$).",
            "<b>Step 2 — Distractor audit.</b> $N/2$ counts only the UNIQUE bins for real signals (symmetry); 'infinite' confuses with the continuous transform."
          ],
          a: "N bins.",
          v: "For real inputs the spectrum is conjugate-symmetric, so only $N/2+1$ bins are independent ✓ — the rest are mirror images. Frequency resolution $f_s/N$ improves with longer records, the basis of why you collect more samples for finer detail."

        }), ref: "p.376" },
      { q: "Windowing in FFT used to:",
        choices: ["Reduce spectral leakage", "Increase resolution", "Speed up FFT", "Filter noise"], correct: 0,
        solution: S({
          c: "Multiplying a finite data record by a smooth WINDOW (Hann, Hamming, Blackman) tapers its ends to zero, reducing SPECTRAL LEAKAGE — the smearing caused by the abrupt truncation of a non-integer number of cycles.",
          s: [
            "<b>Step 1 — Match.</b> Reduce spectral leakage.",
            "<b>Step 2 — Distractor audit.</b> It doesn't increase resolution (it slightly WORSENS it), speed up the FFT, or filter noise."
          ],
          a: "Reduce spectral leakage.",
          v: "The trade: windows shrink the side lobes (less leakage) but WIDEN the main lobe (coarser resolution) ✓ — different windows pick different points on that trade. A rectangular 'window' (no taper) has the sharpest peak but worst leakage."

        }), ref: "p.376" },
      { q: "Zero-padding before FFT:",
        choices: ["Interpolates frequency bins (finer freq grid)", "Adds new frequencies", "Reduces resolution", "Errors"], correct: 0,
        solution: S({
          c: "Appending zeros before the FFT does NOT add new information — it interpolates the spectrum onto a FINER frequency grid (more closely-spaced samples of the underlying DTFT).",
          s: [
            "<b>Step 1 — Match.</b> Interpolates frequency bins (finer grid).",
            "<b>Step 2 — Distractor audit.</b> It adds no new frequencies/information, doesn't reduce resolution, and causes no errors."
          ],
          a: "Interpolates the spectrum (finer bin spacing).",
          v: "Key distinction: zero-padding improves the DISPLAY (smoother curve, easier peak-picking) but NOT the true RESOLUTION — that's set by the actual data length ✓. To truly resolve two close frequencies you need a longer record, not more zeros."

        }), ref: "p.376" },
      { q: "Aliasing prevention by:",
        choices: ["Anti-aliasing LPF before sampling", "After-DAC filter", "Both", "High sample rate alone"], correct: 0,
        solution: S({
          c: "Aliasing is prevented by an ANTI-ALIASING low-pass filter placed BEFORE the sampler, removing any content above the Nyquist frequency $f_s/2$ before it can fold down.",
          s: [
            "<b>Step 1 — Match.</b> Anti-aliasing LPF before sampling.",
            "<b>Step 2 — Distractor audit.</b> The post-DAC filter is RECONSTRUCTION (removes images, doesn't prevent aliasing); high sample rate alone helps but a filter is still needed."
          ],
          a: "An anti-aliasing LPF before sampling.",
          v: "Timing is everything: once high frequencies alias during sampling, NO later filter can separate them from real low-frequency content ✓ — so the filter must act BEFORE the ADC. The post-DAC filter solves the mirror problem (images)."

        }), ref: "p.375" },
      { q: "Decimation by factor M:",
        choices: ["Keep every Mth sample (requires LPF first)", "Average M samples", "Random selection", "Time reverse"], correct: 0,
        solution: S({
          c: "Decimation reduces sample rate by keeping every Mth sample. But you must LOW-PASS FILTER first (to below the new Nyquist $f_s/2M$), or the discarded high frequencies will alias.",
          s: [
            "<b>Step 1 — Match.</b> Keep every Mth sample (after anti-alias LPF).",
            "<b>Step 2 — Distractor audit.</b> It's not averaging M samples, random selection, or time reversal — it's filter-then-downsample."
          ],
          a: "Keep every Mth sample (filter first).",
          v: "The filter step is the critical, often-forgotten part ✓ — downsampling lowers the Nyquist limit, so anything above the NEW limit must be removed first. Decimation + its opposite (interpolation) are the basis of multirate DSP and sample-rate conversion."

        }), ref: "p.375" },
      { q: "Bilinear transform: maps:",
        choices: ["Continuous LHP to digital inside unit circle", "Time to frequency", "Linear to nonlinear", "Reverse"], correct: 0,
        solution: S({
          c: "The bilinear transform $s = \\dfrac{2}{T}\\dfrac{z-1}{z+1}$ converts a continuous (analog) filter to a discrete (digital) one, mapping the entire stable LHP onto the INSIDE of the unit circle — so stability is preserved.",
          s: [
            "<b>Step 1 — Match.</b> Continuous LHP → digital inside unit circle.",
            "<b>Step 2 — Distractor audit.</b> It's a complex-frequency (s↔z) map, not time↔frequency, not linear↔nonlinear."
          ],
          a: "Stable analog (LHP) → stable digital (inside |z|=1).",
          v: "It lets you design in the well-understood analog domain (Butterworth, Chebyshev) then convert ✓. The one quirk is frequency WARPING — the nonlinear $\\omega$ mapping requires 'pre-warping' critical frequencies before transforming."

        }), ref: "p.376" },
    ],

    // Electronics — +15
    9: [
      { q: "Voltage regulator dropout: difference between input and output:",
        choices: ["Min $V_{in} - V_{out}$ for proper regulation", "Always 1V", "Zero ideal", "Maximum"], correct: 0,
        solution: S({
          c: "Dropout voltage is the MINIMUM input-minus-output difference a linear regulator needs to keep regulating. Below it, the output sags and follows the input.",
          s: [
            "<b>Step 1 — Match.</b> Minimum $V_{in}-V_{out}$ for proper regulation.",
            "<b>Step 2 — Distractor audit.</b> Not 'always 1V' (it varies); not 'zero ideal' (even ideal LDOs need some headroom); not a maximum."
          ],
          a: "Minimum $V_{in}-V_{out}$ for regulation.",
          v: "Standard linear regulators need ~2 V; LDOs (low-dropout) need only 0.1-0.5 V ✓ — crucial for battery rails (e.g. 3.7 V → 3.3 V), where a standard regulator simply couldn't fit in the headroom."

        }), ref: "p.383" },
      { q: "BJT thermal runaway:",
        choices: ["Higher T → higher leakage → more current → more heat → ...", "Stable", "Fixed", "Reverse"], correct: 0,
        solution: S({
          c: "Thermal runaway is a POSITIVE feedback loop: higher temperature → more collector current/leakage → more power dissipated → even higher temperature → … which can destroy the device.",
          s: [
            "<b>Step 1 — Match.</b> Higher T → more current → more heat → repeat.",
            "<b>Step 2 — Distractor audit.</b> 'Stable'/'fixed'/'reverse' miss the self-reinforcing nature."
          ],
          a: "Positive thermal feedback (self-reinforcing).",
          v: "Mitigations all add NEGATIVE feedback or remove heat: an emitter resistor (current rises → $V_E$ rises → $V_{BE}$ drops → current falls), heat sinks, and current limiting ✓. BJTs are more prone than MOSFETs, whose $R_{DS,on}$ rises with T (self-limiting)."

        }), ref: "p.384" },
      { q: "Op-amp open-loop gain typical:",
        choices: ["$10^5$ to $10^6$ at DC", "$1$", "$100$", "Infinite ideal"], correct: 0,
        solution: S({
          c: "A real op-amp's open-loop DC gain is very high but FINITE — typically $10^5$ to $10^6$ (100-120 dB) — and it rolls off with frequency.",
          s: [
            "<b>Step 1 — Match.</b> $10^5$ to $10^6$ at DC.",
            "<b>Step 2 — Distractor audit.</b> 1 and 100 are far too low; 'infinite' is the IDEAL assumption, not a real value."
          ],
          a: "$10^5$-$10^6$ at DC.",
          v: "This huge open-loop gain is what makes the 'virtual short' approximation work in feedback circuits ✓ — the closed-loop gain is set almost entirely by the resistors, with error $\\sim 1/(A\\beta)$. Gain rolls off at −20 dB/dec above the first pole (often just a few Hz)."

        }), ref: "p.380" },
      { q: "What does '741' refer to in '741 op-amp'?",
            choices: ["Classic general-purpose op-amp IC", "Pin count", "Frequency", "Manufacturer code"], correct: 0,
        solution: S({
          c: "The '741' (μA741) is a specific classic general-purpose op-amp IC — Fairchild's 1968 design that became the industry standard for decades.",
          s: [
            "<b>Step 1 — Match.</b> Classic general-purpose op-amp IC.",
            "<b>Step 2 — Distractor audit.</b> It's not a pin count, frequency, or manufacturer code — it's a part-number for a specific chip."
          ],
          a: "A classic op-amp IC type.",
          v: "The 741 is a teaching staple (internally: differential input, gain stage, Class-AB output) ✓. Modern jobs use better parts — TL081 (FET input), LM358 (single-supply), OP07 (precision) — but the 741 defined the template."

        }), ref: "p.380" },
      { q: "BJT $\\beta$ varies with:", choices: ["Temperature, current, device-to-device", "Only voltage", "Constant", "Frequency only"], correct: 0,
        solution: S({
          c: "A BJT's current gain $\\beta$ is NOT a fixed constant — it varies with temperature, collector current, and from device to device (typically anywhere 50-300).",
          s: [
            "<b>Step 1 — Match.</b> Temperature, current, device-to-device.",
            "<b>Step 2 — Distractor audit.</b> 'Only voltage', 'constant', 'frequency only' all understate β's variability."
          ],
          a: "Temperature, current, and unit-to-unit.",
          v: "This unreliability is EXACTLY why good bias designs use feedback (voltage-divider + emitter resistor) to set the Q-point nearly independent of β ✓ — you can't trust the datasheet's β to be the value in YOUR specific transistor."

        }), ref: "p.384" },
      { q: "Photoresistor (LDR) resistance under bright light:",
        choices: ["Decreases (more carriers)", "Increases", "Constant", "Negative"], correct: 0,
        solution: S({
          c: "A photoresistor (LDR) drops in resistance under light: photons free extra charge carriers, increasing conductivity → lower resistance.",
          s: [
            "<b>Step 1 — Match.</b> Decreases (more carriers).",
            "<b>Step 2 — Distractor audit.</b> 'Increases' is backwards; resistance isn't constant or negative."
          ],
          a: "Resistance decreases under light.",
          v: "Range: dark ~MΩ, bright ~kΩ ✓ — a huge swing that's easy to read in a voltage divider. Used in automatic streetlights, camera light meters, and night-lights. (Response is slow, so not for fast signals.)"

        }), ref: "p.383" },
      { q: "Op-amp slew rate effect on slewing distortion at high frequencies:",
        choices: ["Triangulates large sinusoids when SR insufficient", "No effect", "Increases gain", "Decreases impedance"], correct: 0,
        solution: S({
          c: "Slew rate (SR) is the max rate the output can change (V/µs). If a signal demands a faster $dv/dt$ than SR, the output can't keep up — large sinusoids get distorted into triangles.",
          s: [
            "<b>Step 1 — Match.</b> Triangulates large sinusoids when SR is insufficient.",
            "<b>Step 2 — The condition.</b> A sine $V_m\\sin\\omega t$ has max slope $\\omega V_m$; need $SR > \\omega V_m$ to avoid slewing.",
            "<b>Step 3 — Distractor audit.</b> SR limiting doesn't increase gain or change impedance — it clips the slope."
          ],
          a: "Slew-rate distortion (sine → triangle).",
          v: "This sets the 'full-power bandwidth' $f_{max}=SR/(2\\pi V_m)$ ✓ — big swings slew-limit at lower frequencies than small ones. It's a LARGE-signal limit, distinct from the small-signal gain-bandwidth product."

        }), ref: "p.380" },
      { q: "Common-emitter input impedance:",
        choices: ["$\\approx \\beta r_e$ — typically kΩ", "Very low", "$R_C$", "Infinite"], correct: 0,
        solution: S({
          c: "Looking into the base of a common-emitter stage, you see $\\beta$ times the intrinsic emitter resistance: $Z_{in} \\approx \\beta r_e$, typically a few kΩ.",
          s: [
            "<b>Step 1 — Match.</b> $\\approx \\beta r_e$, ~kΩ.",
            "<b>Step 2 — Numbers.</b> At $I_E=1$ mA, $r_e\\approx26$ Ω; with $\\beta=100$, $Z_{in}\\approx2.6$ kΩ.",
            "<b>Step 3 — Distractor audit.</b> 'Very low' is common-BASE; $R_C$ is the OUTPUT side; 'infinite' would be a MOSFET gate."
          ],
          a: "$\\approx \\beta r_e$ (kΩ range).",
          v: "Note the impedance ladder: CB low ($r_e$), CE medium ($\\beta r_e$), CC high ($\\beta R_E$) ✓. Lower bias current raises $r_e$ and thus $Z_{in}$ — a design knob, traded against gain and noise."

        }), ref: "p.384" },
      { q: "Class C amplifier conducts:",
        choices: ["< 180° (narrow pulse, very efficient at RF)", "Full 360°", "180°", "270°"], correct: 0,
        solution: S({
          c: "A Class C amplifier conducts for LESS than 180° of each cycle — a brief current pulse. This makes it very efficient (>90%) but highly nonlinear, so it needs an LC tank to reconstruct the sine.",
          s: [
            "<b>Step 1 — Match.</b> < 180° (narrow pulse, very efficient at RF).",
            "<b>Step 2 — The class ladder.</b> A = 360°, AB = 180-360°, B = 180°, C < 180°.",
            "<b>Step 3 — Distractor audit.</b> 360° is Class A; 180° is Class B; 270° isn't a standard class."
          ],
          a: "< 180° conduction angle.",
          v: "Class C trades linearity for efficiency, so it only suits CONSTANT-envelope RF (FM, CW transmitters) where a tuned tank filters the pulse back into a clean sine ✓ — it would badly distort audio or AM."

        }), ref: "p.384" },
      { q: "PNP transistor: emitter is at:",
        choices: ["Higher potential than collector in active region", "Lower", "Same", "Grounded"], correct: 0,
        solution: S({
          c: "A PNP transistor is the mirror of NPN: in active region the emitter is at the HIGHEST potential — $V_E > V_B > V_C$ — and conventional current flows OUT of the collector, into the emitter.",
          s: [
            "<b>Step 1 — Match.</b> Emitter higher than collector.",
            "<b>Step 2 — Distractor audit.</b> 'Lower'/'same'/'grounded' describe NPN or arbitrary cases, not PNP active biasing."
          ],
          a: "Higher potential than the collector.",
          v: "PNP is used for HIGH-SIDE switching and as the complementary half of push-pull (Class AB) output stages ✓. Everything is flipped from NPN: voltages, current directions, and the sign of $V_{BE}$."

        }), ref: "p.384" },
      { q: "$V_{BE}$ for PNP in active region:",
        choices: ["$\\approx -0.7$ V (base lower than emitter)", "$+0.7$ V", "$0$", "$5$ V"], correct: 0,
        solution: S({
          c: "For a PNP in active region the emitter is ABOVE the base, so $V_{BE} = V_B - V_E \\approx -0.7$ V (negative). Equivalently $V_{EB} \\approx +0.7$ V.",
          s: [
            "<b>Step 1 — Match.</b> $\\approx -0.7$ V (base below emitter).",
            "<b>Step 2 — Distractor audit.</b> $+0.7$ V is the NPN value; 0 means off; 5 V is breakdown territory."
          ],
          a: "$V_{BE} \\approx -0.7$ V.",
          v: "The junction still needs ~0.7 V of forward bias — the sign just flips because the emitter is on top ✓. Many texts quote $V_{EB}\\approx+0.7$ V for PNP to keep the number positive; same physics, opposite reference."

        }), ref: "p.384" },
      { q: "Common drain (source follower) — same as which BJT topology?",
        choices: ["Common-collector (emitter follower)", "Common-emitter", "Common-base", "None"], correct: 0,
        solution: S({
          c: "The common-drain (source follower) MOSFET stage is the direct analog of the BJT common-collector (emitter follower): output follows input, voltage gain ≈ 1, high $Z_{in}$, low $Z_{out}$.",
          s: [
            "<b>Step 1 — Match.</b> Common-collector (emitter follower).",
            "<b>Step 2 — Distractor audit.</b> Common-emitter ↔ common-source (inverting gain); common-base ↔ common-gate; not 'none'."
          ],
          a: "Common-collector (emitter follower).",
          v: "The three-way analogy: CS↔CE, CD↔CC, CG↔CB ✓ — same role, MOSFET vs BJT. Both followers are BUFFERS: unity gain but strong impedance transformation for driving loads."

        }), ref: "p.386" },
      { q: "Power MOSFET avalanche rating:",
        choices: ["Max energy in unclamped inductive load", "$V_{DS}$ max", "$I_D$ max", "$R_{DS,on}$"], correct: 0,
        solution: S({
          c: "The avalanche rating ($E_{AS}$) specifies how much ENERGY a power MOSFET can safely absorb when an unclamped inductive load forces it into breakdown at turn-off.",
          s: [
            "<b>Step 1 — Match.</b> Max energy in an unclamped inductive load.",
            "<b>Step 2 — Distractor audit.</b> $V_{DS}$ max, $I_D$ max, and $R_{DS,on}$ are separate ratings — this one is about ENERGY during avalanche."
          ],
          a: "Max avalanche energy (inductive turn-off).",
          v: "When you switch off an inductor, $v=L\\,di/dt$ spikes the drain into avalanche; an avalanche-rated FET can survive absorbing that energy without a snubber ✓ — valuable in motor drives and flyback supplies where inductive kickback is unavoidable."

        }), ref: "p.386" },
      { q: "Differential pair (long-tail pair) at heart of op-amp:",
        choices: ["Two matched transistors, current mirror tail, high CMRR", "Single transistor", "Cascode", "Class AB"], correct: 0,
        solution: S({
          c: "The differential (long-tail) pair is two matched transistors sharing a common current-source 'tail'. It amplifies the DIFFERENCE of two inputs while rejecting what's common — giving high CMRR.",
          s: [
            "<b>Step 1 — Match.</b> Two matched transistors, current-mirror tail, high CMRR.",
            "<b>Step 2 — Distractor audit.</b> A single transistor can't reject common-mode; cascode and Class AB are other stages, not the input pair."
          ],
          a: "Matched pair with a current-source tail.",
          v: "It's the universal front-end of op-amps, comparators, and instrumentation amps ✓ — matching and the constant tail current are what make the common-mode rejection high. Gain stages and an output buffer follow it."

        }), ref: "p.380" },
      { q: "Wien bridge oscillator: needed condition for oscillation:",
        choices: ["Loop gain = 1, phase = 0 (Barkhausen)", "Loop gain > 1", "Phase = 90°", "No feedback"], correct: 0,
        solution: S({
          c: "Sustained oscillation requires the BARKHAUSEN criterion: loop gain magnitude $|A\\beta|=1$ AND total loop phase $=0°$ (or 360°) at the oscillation frequency.",
          s: [
            "<b>Step 1 — Match.</b> Loop gain = 1, phase = 0 (Barkhausen).",
            "<b>Step 2 — Distractor audit.</b> $|A\\beta|>1$ makes the amplitude grow until clipping (needs AGC to settle to 1); phase = 90° or no feedback won't oscillate."
          ],
          a: "$|A\\beta|=1$, $\\angle A\\beta = 0$ (Barkhausen).",
          v: "In practice you set $|A\\beta|$ slightly above 1 to START oscillation, then an automatic gain control (e.g. a lamp or JFET) pulls it back to exactly 1 for a clean sine ✓. Wien bridge frequency: $f_0=1/(2\\pi RC)$."

        }), ref: "p.380" },
    ],

    // Power — +15
    10: [
      { q: "Apparent power of 480V single phase, 20 A:",
        choices: ["$9.6$ kVA", "$24$ kVA", "$5$ kVA", "$48$ kVA"], correct: 0,
        solution: S({
          c: "Apparent power (VA) for single-phase is simply $|S| = V\\cdot I$ — voltage times current, regardless of power factor.",
          s: [
            "<b>Step 1 — Apply.</b> $480\\times20 = 9600$ VA = 9.6 kVA.",
            "<b>Step 2 — Distractor audit.</b> 24 kVA, 5 kVA, 48 kVA come from arithmetic/decimal slips."
          ],
          a: "9.6 kVA",
          v: "Apparent power sets the CURRENT (and thus wire/equipment sizing), which is why transformers are rated in kVA not kW ✓. Real power $P = |S|\\cos\\theta$ would be less, depending on the load's power factor."

        }), ref: "p.362" },
      { q: "Reactive power of $|S| = 10$ kVA at $pf = 0.6$:",
        choices: ["$8$ kVAR", "$6$ kVAR", "$10$ kVAR", "$4$ kVAR"], correct: 0,
        solution: S({
          c: "From the power triangle, $Q = |S|\\sin\\theta$, where $\\sin\\theta=\\sqrt{1-pf^2}$ (since $pf=\\cos\\theta$).",
          s: [
            "<b>Step 1 — sin θ.</b> $\\sqrt{1-0.6^2} = \\sqrt{0.64} = 0.8$.",
            "<b>Step 2 — Apply.</b> $Q = 10\\times0.8 = 8$ kVAR.",
            "<b>Step 3 — Distractor audit.</b> 6 kVAR is the REAL power ($P=|S|\\cos\\theta$); 10 is S; 4 misuses the formula."
          ],
          a: "$Q = 8$ kVAR",
          v: "It's a 6-8-10 power triangle: $P=6$ kW, $Q=8$ kVAR, $S=10$ kVA ✓. A pf of 0.6 is quite poor — Q exceeds P — making this a prime candidate for capacitor pf-correction."

        }), ref: "p.362" },
      { q: "Why is high voltage used for long-distance transmission?",
        choices: ["Low current → low $I^2R$ losses", "Safety", "Easier insulation", "Cheaper equipment"], correct: 0,
        solution: S({
          c: "For a fixed power $P=VI$, raising voltage lowers the current proportionally. Since line losses are $I^2R$, lower current means dramatically less loss.",
          s: [
            "<b>Step 1 — Match.</b> Low current → low $I^2R$ losses.",
            "<b>Step 2 — Distractor audit.</b> High voltage is actually HARDER to insulate and needs pricier equipment — those are costs, not the reason. Safety isn't improved by high voltage."
          ],
          a: "Lower current → lower $I^2R$ losses.",
          v: "10× the voltage → 1/10 the current → 1/100 the loss ✓ — the founding equation of the power grid. The trade is insulation, clearance, and corona losses, which is why transmission steps up to hundreds of kV but distribution steps back down."

        }), ref: "p.363" },
      { q: "Voltage at customer's house too low (brownout). Likely cause:",
        choices: ["High load on transformer/feeder; voltage drop", "Wiring fault inside house", "Power factor", "Air conditioner"], correct: 0,
        solution: S({
          c: "A brownout (sustained low voltage) usually comes from an OVERLOADED feeder/transformer: heavy current causes a large $IZ$ voltage drop along the distribution line, so the terminal voltage sags.",
          s: [
            "<b>Step 1 — Match.</b> High load on transformer/feeder → voltage drop.",
            "<b>Step 2 — Distractor audit.</b> An internal house fault affects one circuit, not steady low voltage everywhere; pf and one AC unit aren't the system-level cause."
          ],
          a: "Feeder/transformer overload.",
          v: "Heat waves trigger brownouts: everyone's AC draws current at once, $IZ$ drop spikes, voltage sags ✓. Utilities use tap-changing transformers and capacitor banks to hold voltage; deliberate brownouts shed load to prevent blackouts."

        }), ref: "p.363" },
      { q: "Synchronous motor at no load: stator and rotor field angle:",
        choices: ["Aligned ($\\delta \\approx 0$)", "$90°$ apart", "Random", "Opposing"], correct: 0,
        solution: S({
          c: "The load angle δ (between stator and rotor fields) grows with mechanical load — torque is proportional to $\\sin\\delta$. At NO load there's no torque needed, so $\\delta\\approx0$ (fields aligned).",
          s: [
            "<b>Step 1 — Match.</b> Aligned ($\\delta\\approx0$).",
            "<b>Step 2 — Distractor audit.</b> 90° apart is the PULL-OUT (max torque) point; 'random'/'opposing' don't describe synchronous operation."
          ],
          a: "$\\delta \\approx 0$ (aligned).",
          v: "As load increases, δ widens; at δ=90° the motor reaches PULL-OUT torque, and beyond that it falls OUT of sync and stalls ✓. The load angle is the synchronous machine's torque 'throttle.'"

        }), ref: "p.365" },
      { q: "Squirrel-cage rotor:",
        choices: ["Used in induction motors — no electrical connection to rotor", "Used in DC motors", "Synchronous machines only", "Generators"], correct: 0,
        solution: S({
          c: "A squirrel-cage rotor — shorted conductor bars joined by end rings — is the rotor of an INDUCTION motor. It has NO external electrical connection (no brushes or slip rings); currents are INDUCED in it.",
          s: [
            "<b>Step 1 — Match.</b> Induction motors — no electrical connection to rotor.",
            "<b>Step 2 — Distractor audit.</b> DC motors use a commutator/armature; synchronous machines have a DC-excited rotor; it's not specific to generators."
          ],
          a: "The induction-motor rotor.",
          v: "No brushes = rugged, cheap, low-maintenance — which is why the squirrel-cage induction motor is the workhorse of industry ✓. The wound-rotor (slip-ring) variant exists for special starting/speed control, but cage rotors dominate."

        }), ref: "p.365" },
      { q: "VFD (Variable Frequency Drive):",
        choices: ["Varies AC frequency to control motor speed", "DC drive", "Constant freq", "Voltage only"], correct: 0,
        solution: S({
          c: "A VFD controls AC motor speed by varying the supply FREQUENCY (since synchronous speed $=120f/P$). Internally it rectifies AC to DC, then inverts to a variable-frequency AC output.",
          s: [
            "<b>Step 1 — Match.</b> Varies AC frequency to control motor speed.",
            "<b>Step 2 — Distractor audit.</b> It's not a DC drive, not constant-frequency, and varies frequency (with voltage tracking, 'V/f') — not voltage alone."
          ],
          a: "Variable-frequency AC for speed control.",
          v: "Big energy savings: a fan/pump at half speed draws roughly 1/8 the power (cube law), vs throttling at full speed ✓. VFDs keep V/f roughly constant to maintain torque, and dominate modern HVAC, pumps, and conveyors."

        }), ref: "p.365" },
      { q: "Inrush current of motor on full-voltage start:",
        choices: ["5-7× full-load current", "Equal to FL", "Less than FL", "Random"], correct: 0,
        solution: S({
          c: "An induction motor started across-the-line draws a locked-rotor (inrush) current of about 5-7× its full-load current, lasting under a second until it spins up.",
          s: [
            "<b>Step 1 — Match.</b> 5-7× full-load current.",
            "<b>Step 2 — Distractor audit.</b> Equal-to or less-than full-load would leave no starting torque; it's not random."
          ],
          a: "5-7× full-load current.",
          v: "This inrush sags the line voltage (lights flicker when a big motor starts) and stresses gear ✓ — which is why soft-starters, VFDs, and Y-Δ or autotransformer starters exist to tame it on large motors."

        }), ref: "p.365" },
      { q: "Capacitor-start single-phase motor:",
        choices: ["Cap creates phase shift in auxiliary winding for starting", "DC cap only", "Higher voltage", "Filtering"], correct: 0,
        solution: S({
          c: "A single-phase supply makes only a PULSATING field (no rotation), so the motor can't self-start. A capacitor in series with an auxiliary winding creates a PHASE-SHIFTED current, producing a temporary rotating field to start it.",
          s: [
            "<b>Step 1 — Match.</b> Cap creates phase shift in the auxiliary (start) winding.",
            "<b>Step 2 — Distractor audit.</b> It's not a DC-only cap, not for higher voltage, not for filtering — its job is phase shift for starting torque."
          ],
          a: "Phase shift in the start winding for starting.",
          v: "Once near speed, a centrifugal switch disconnects the start winding/capacitor ✓ — it's needed only to get the rotor moving. This is why single-phase motors need extra hardware that three-phase (inherently rotating field) motors don't."

        }), ref: "p.365" },
      { q: "Stepper motor: rotates by:",
        choices: ["Discrete steps (e.g., 1.8° per pulse)", "Continuous", "Variable rates", "Random"], correct: 0,
        solution: S({
          c: "A stepper motor moves in DISCRETE steps — each input pulse advances the rotor by a fixed angle (commonly 1.8°, i.e. 200 steps/revolution). It positions OPEN-LOOP (no feedback needed).",
          s: [
            "<b>Step 1 — Match.</b> Discrete steps (e.g. 1.8°/pulse).",
            "<b>Step 2 — Distractor audit.</b> It's not continuous rotation or random — the defining trait is precise, repeatable steps."
          ],
          a: "In discrete fixed-angle steps.",
          v: "Count the pulses and you know the position — no encoder required ✓, which is why steppers run printers, CNC, and 3D printers. The trade: they can lose steps if overloaded (open-loop), and waste power holding position."

        }), ref: "p.365" },
      { q: "Power transformer K-factor rating:",
        choices: ["Capability to handle harmonic currents without overheating", "Voltage rating", "kVA size", "Efficiency"], correct: 0,
        solution: S({
          c: "K-factor rates a transformer's ability to serve HARMONIC-rich (nonlinear) loads without overheating. Harmonics cause extra eddy-current heating, so K-rated transformers are oversized/better-cooled.",
          s: [
            "<b>Step 1 — Match.</b> Capability to handle harmonic currents without overheating.",
            "<b>Step 2 — Distractor audit.</b> It's not the voltage rating, kVA size, or efficiency — it's specifically about harmonic tolerance."
          ],
          a: "Harmonic-handling capability.",
          v: "Higher K (4, 13, 20) suits loads with more harmonics — banks of computer power supplies, VFDs, LED drivers ✓. Standard transformers feeding heavy nonlinear loads can overheat from harmonic currents the nameplate kVA didn't anticipate."

        }), ref: "p.364" },
      { q: "Ferromagnetic core in transformer: function:",
        choices: ["Increases flux coupling between windings", "Cooling", "Insulation", "Just structural"], correct: 0,
        solution: S({
          c: "The high-permeability iron core concentrates and channels magnetic flux, giving tight COUPLING between primary and secondary windings (most flux links both).",
          s: [
            "<b>Step 1 — Match.</b> Increases flux coupling between windings.",
            "<b>Step 2 — Distractor audit.</b> The core isn't for cooling, insulation, or mere structure — it's the magnetic flux path."
          ],
          a: "Concentrates flux for tight coupling.",
          v: "Air-core transformers have low coupling but no iron losses, so they're used at RF where iron losses would be unacceptable ✓. The iron core's downside — hysteresis and eddy losses — is fought with silicon steel and laminations."

        }), ref: "p.364" },
      { q: "Eddy current losses in transformer core mitigated by:",
        choices: ["Laminated core (thin insulated layers)", "Larger core", "Higher voltage", "DC operation"], correct: 0,
        solution: S({
          c: "Changing flux induces circulating EDDY currents in the conductive core, dissipating heat. LAMINATING the core (thin, individually-insulated layers) breaks up these current loops.",
          s: [
            "<b>Step 1 — Match.</b> Laminated core (thin insulated layers).",
            "<b>Step 2 — Distractor audit.</b> A larger core or higher voltage wouldn't help; DC operation isn't an option for a transformer (it needs changing flux)."
          ],
          a: "Laminations (thin insulated layers).",
          v: "Eddy loss scales as $t^2 f^2$ (lamination thickness and frequency squared) ✓ — so thinner laminations cut loss sharply, and high-frequency transformers use very thin laminations or ferrite cores. Laminations attack eddy loss; better steel attacks hysteresis."

        }), ref: "p.364" },
      { q: "Hysteresis losses in transformer core:",
        choices: ["Heat from cyclic magnetization of core", "Copper resistance", "Air gap", "Insulation"], correct: 0,
        solution: S({
          c: "Hysteresis loss is the energy spent re-magnetizing the core each cycle — proportional to the AREA of the material's B-H loop. It shows up as heat.",
          s: [
            "<b>Step 1 — Match.</b> Heat from cyclic magnetization (B-H loop area).",
            "<b>Step 2 — Distractor audit.</b> Copper resistance is $I^2R$ (winding) loss; air gap and insulation aren't hysteresis."
          ],
          a: "B-H loop area (per cycle, ×frequency).",
          v: "Mitigated with low-hysteresis SILICON STEEL (narrow loop), or ferrites at high frequency ✓. Together with eddy loss (fought by laminations), hysteresis makes up the frequency-dependent CORE loss — distinct from the load-dependent copper loss."

        }), ref: "p.364" },
      { q: "Generator regulation (no-load to full-load):",
        choices: ["$(V_{NL}-V_{FL})/V_{FL} \\times 100\\%$", "Same as efficiency", "Always 0", "Volts only"], correct: 0,
        solution: S({
          c: "Voltage regulation measures how much terminal voltage sags from no-load to full-load: $VR = \\dfrac{V_{NL}-V_{FL}}{V_{FL}}\\times100\\%$.",
          s: [
            "<b>Step 1 — Match.</b> $(V_{NL}-V_{FL})/V_{FL}\\times100\\%$.",
            "<b>Step 2 — Distractor audit.</b> It's not efficiency (that's power out/in), not always 0, and a percentage not just volts."
          ],
          a: "$VR = \\dfrac{V_{NL}-V_{FL}}{V_{FL}}\\times100\\%$",
          v: "LOWER regulation is better — it means the output voltage holds steady under load ✓. Synchronous generators run 5-15% typically; an AVR (automatic voltage regulator) trims excitation to keep VR low as load swings."

        }), ref: "p.365" },
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
