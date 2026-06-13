// FE Electrical Question Bank — Extension Pack 8 (~150 problems)
// Drawing from FE Reference Handbook deep-dive: Probability (p.63-85),
// Economics (p.229-237), Materials Science (p.94-106), Instrumentation (p.219-228)
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") return;

  const P = {
    // Math — +10 (additional Handbook-based)
    1: [
      { q: "Numerical integration: Trapezoid rule for $\\int f(x)dx$ on $[a,b]$ with 2 intervals:",
        choices: ["$(h/2)[f_0 + 2f_1 + f_2]$ where $h=(b-a)/2$", "$h \\cdot f_1$", "$(b-a)(f_0+f_2)/2$", "Simpson's 3rd"], correct: 0,
        solution: S({
          c: "The composite trapezoid rule approximates an integral by summing trapezoids: $(h/2)[f_0 + 2(\\text{interior}) + f_n]$, with $h=(b-a)/n$.",
          s: ["<b>Step 1 — For n=2.</b> One interior point $f_1$: $(h/2)[f_0 + 2f_1 + f_2]$.","<b>Step 2 — Distractor audit.</b> $h\\cdot f_1$ is the midpoint rule; $(b-a)(f_0+f_2)/2$ is a single trapezoid (no interior); Simpson's is a different rule."],
          a: "$(h/2)[f_0 + 2f_1 + f_2]$",
          v: "Interior points are doubled because each is shared by two adjacent trapezoids - the endpoints count once. Error is $O(h^2)$; Simpson's (parabolas) does better at $O(h^4)$."
        }), ref: "p.61" },
      { q: "Simpson's 1/3 rule requires:",
        choices: ["Even number of intervals (odd points)", "Any n", "Only n=1", "Odd n"], correct: 0,
        solution: S({
          c: "Simpson's 1/3 rule fits a parabola through each group of 3 points, so it needs an EVEN number of intervals (odd number of points).",
          s: ["<b>Step 1 — Match.</b> Even number of intervals.","<b>Step 2 — Distractor audit.</b> 'Any n' and 'odd n' break the pairing; n=1 is too few."],
          a: "Even number of intervals.",
          v: "The 1-4-2-4-...-1 weight pattern requires pairs of intervals - which is why Simpson's needs even n. It's far more accurate ($O(h^4)$) than the trapezoid rule for smooth functions."
        }), ref: "p.61" },
      { q: "Newton-Raphson root-finding: $f(x) = x^3 - 8$, $x_0 = 2.1$. Next iterate:",
        choices: ["$\\approx 2.001$", "$2$", "$1.9$", "$2.2$"], correct: 0,
        solution: S({
          c: "Newton-Raphson: $x_{n+1} = x_n - f(x_n)/f'(x_n)$, with $f'(x)=3x^2$ here.",
          s: ["<b>Step 1 — Evaluate.</b> $f(2.1)=9.261-8=1.261$; $f'(2.1)=3(4.41)=13.23$.","<b>Step 2 — Iterate.</b> $2.1 - 1.261/13.23 = 2.005$.","<b>Step 3 — Distractor audit.</b> 2 is the exact root (limit, not one step); 1.9 and 2.2 are off."],
          a: "$\\approx 2.005$",
          v: "It's converging fast toward the true root 2 (since $2^3=8$) - Newton's quadratic convergence roughly doubles the correct digits each step."
        }), ref: "p.61" },
      { q: "Euler's method for $y' = f(x,y)$, step $h$:",
        choices: ["$y_{n+1} = y_n + h \\cdot f(x_n, y_n)$", "$y_{n+1} = y_n \\cdot f$", "$y_n + h^2$", "Linear sum"], correct: 0,
        solution: S({
          c: "Forward Euler is the simplest ODE integrator: step along the current slope, $y_{n+1} = y_n + h\\,f(x_n,y_n)$.",
          s: ["<b>Step 1 — Match.</b> $y_{n+1} = y_n + h\\,f(x_n,y_n)$.","<b>Step 2 — Distractor audit.</b> The others aren't the Euler update."],
          a: "$y_{n+1} = y_n + h\\,f(x_n,y_n)$",
          v: "Local error $O(h^2)$, global $O(h)$ - crude but intuitive. Runge-Kutta (RK4) samples the slope multiple times per step for much higher accuracy, the standard upgrade."
        }), ref: "p.62" },
      { q: "Taylor series of $f$ around $x_0$, second-order approximation:",
        choices: ["$f(x_0) + f'(x_0)(x-x_0) + (1/2)f''(x_0)(x-x_0)^2$", "$f(x_0) + f'$", "Linear", "Just $f(x_0)$"], correct: 0,
        solution: S({
          c: "Taylor series: $f(x) = \\sum \\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n$. Second-order keeps the first three terms (constant, linear, quadratic).",
          s: ["<b>Step 1 — Match.</b> $f(x_0) + f'(x_0)(x-x_0) + \\tfrac12 f''(x_0)(x-x_0)^2$.","<b>Step 2 — Distractor audit.</b> The others stop at linear or constant order."],
          a: "$f(x_0)+f'(x_0)(x-x_0)+\\tfrac12 f''(x_0)(x-x_0)^2$",
          v: "Each term refines the approximation: value, then slope, then curvature - the basis of linearization (1st order) and many numerical methods. Higher orders add smaller corrections near $x_0$."
        }), ref: "p.50" },
      { q: "Cofactor expansion of 4×4 matrix: typical number of subdeterminants computed:",
        choices: ["$4$ (along one row/col)", "$16$", "$24$", "$1$"], correct: 0,
        solution: S({
          c: "Cofactor (Laplace) expansion along one row or column of an n×n matrix produces n minors (each one size (n-1)x(n-1)). For 4×4, that's 4 minors.",
          s: ["<b>Step 1 — Match.</b> 4 minors (along one row/col).","<b>Step 2 — Distractor audit.</b> 16 is all entries; 24 is 4!; 1 is too few."],
          a: "4 (one per entry in the chosen row/col).",
          v: "Choose the row/col with the most ZEROS to skip those minors - each 4x4 minor is a 3x3 determinant, so the work compounds. For large matrices, Gaussian elimination is far cheaper."
        }), ref: "p.57" },
      { q: "L'Hôpital's rule applies when limit gives:",
        choices: ["$0/0$ or $\\infty/\\infty$", "Finite values", "Any limit", "Linear"], correct: 0,
        solution: S({
          c: "L'Hopital's rule applies only to INDETERMINATE forms $0/0$ or $\\infty/\\infty$: then $\\lim f/g = \\lim f'/g'$.",
          s: ["<b>Step 1 — Match.</b> $0/0$ or $\\infty/\\infty$.","<b>Step 2 — Distractor audit.</b> A determinate (finite) limit doesn't need it; it doesn't apply to 'any' limit."],
          a: "$0/0$ or $\\infty/\\infty$.",
          v: "Other indeterminate forms ($0\\cdot\\infty$, $\\infty-\\infty$, $1^\\infty$, $0^0$) must first be ALGEBRAICALLY rewritten into a $0/0$ or $\\infty/\\infty$ quotient before applying the rule."
        }), ref: "p.47" },
      { q: "Vector triple product: $\\vec{A}\\cdot(\\vec{B}\\times\\vec{C})$ is a:",
        choices: ["Scalar", "Vector", "Matrix", "Zero always"], correct: 0,
        solution: S({
          c: "The scalar triple product: cross product gives a vector, then dotting with a vector gives a SCALAR. Geometrically it's the signed volume of the parallelepiped spanned by A, B, C.",
          s: ["<b>Step 1 — Match.</b> Scalar.","<b>Step 2 — Distractor audit.</b> The VECTOR triple product $A\\times(B\\times C)$ gives a vector; this dot version gives a scalar; not a matrix; not always zero."],
          a: "A scalar (the box volume).",
          v: "If the scalar triple product is ZERO, the three vectors are coplanar (zero volume) - a quick linear-dependence test. It equals the determinant of the matrix with rows A, B, C."
        }), ref: "p.38" },
      { q: "Convergence of $\\sum 1/n^p$ requires:",
        choices: ["$p > 1$", "$p \\ge 1$", "Any $p$", "$p < 0$"], correct: 0,
        solution: S({
          c: "The p-series $\\sum 1/n^p$ converges if and only if $p > 1$ (strictly greater).",
          s: ["<b>Step 1 — Match.</b> $p > 1$.","<b>Step 2 — Distractor audit.</b> $p \\ge 1$ wrongly includes $p=1$ (the harmonic series, which DIVERGES)."],
          a: "$p > 1$.",
          v: "The boundary case $p=1$ (harmonic series) diverges despite its terms shrinking - the classic counterintuitive result. $p=2$ converges to $\\pi^2/6$."
        }), ref: "p.50" },
      { q: "Determinant of $\\begin{pmatrix}1&2\\\\3&6\\end{pmatrix}$:",
        choices: ["$0$ (singular)", "$6$", "$12$", "$3$"], correct: 0,
        solution: S({
          c: "2x2 determinant is $ad-bc$. Here the second row is 3x the first, so the rows are linearly DEPENDENT and the determinant is 0 (singular matrix).",
          s: ["<b>Step 1 — Compute.</b> $(1)(6)-(2)(3) = 6-6 = 0$.","<b>Step 2 — Distractor audit.</b> 6, 12, 3 ignore the cancellation."],
          a: "$0$ (singular).",
          v: "Det = 0 means no inverse exists and the rows/columns are linearly dependent - here row 2 = 3 x row 1, a dead giveaway before even computing."
        }), ref: "p.57" },
    ],

    // Probability & Statistics — +25 (deep dive from p.63-85)
    2: [
      { q: "Permutations $P(n, r)$ formula:",
        choices: ["$n!/(n-r)!$", "$n!$", "$n!/r!$", "$n^r$"], correct: 0,
        solution: S({
          c: "Permutations (order matters): $P(n,r) = \\dfrac{n!}{(n-r)!}$ - the number of ordered arrangements of r items from n.",
          s: ["<b>Step 1 — Match.</b> $n!/(n-r)!$.","<b>Step 2 — Distractor audit.</b> $n!$ arranges all n; $n!/r!$ is wrong; $n^r$ allows repetition."],
          a: "$n!/(n-r)!$",
          v: "Example: $P(5,3)=5\\cdot4\\cdot3=60$. Permutations COUNT order; combinations don't (divide by an extra $r!$). Ranking = permutation, choosing = combination."
        }), ref: "p.64" },
      { q: "Combinations: $C(10, 4)$:",
        choices: ["$210$", "$5040$", "$24$", "$40$"], correct: 0,
        solution: S({
          c: "Combinations (order irrelevant): $C(n,k)=\\dfrac{n!}{k!(n-k)!}$.",
          s: ["<b>Step 1 — Apply.</b> $\\dfrac{10\\cdot9\\cdot8\\cdot7}{4!} = \\dfrac{5040}{24} = 210$.","<b>Step 2 — Distractor audit.</b> 5040 is $P(10,4)$ (ordered); 24 is 4!; 40 is wrong."],
          a: "$210$",
          v: "$C(10,4)=210$ ways to choose a 4-person team from 10 - dividing the 5040 ordered arrangements by 4! removes the orderings that don't matter."
        }), ref: "p.64" },
      { q: "P(A ∪ B) where A, B mutually exclusive: $P(A)=0.3$, $P(B)=0.4$:",
        choices: ["$0.7$", "$0.12$", "$0.5$", "$0.1$"], correct: 0,
        solution: S({
          c: "For MUTUALLY EXCLUSIVE events, $P(A\\cap B)=0$, so $P(A\\cup B)=P(A)+P(B)$.",
          s: ["<b>Step 1 — Apply.</b> $0.3+0.4 = 0.7$.","<b>Step 2 — Distractor audit.</b> 0.12 multiplies (that's independence); 0.5 and 0.1 are wrong."],
          a: "$0.7$",
          v: "Mutually exclusive means they can't both happen, so no overlap to subtract - just add. Don't confuse with INDEPENDENT (where you'd multiply for the intersection)."
        }), ref: "p.64" },
      { q: "Bayes' theorem: $P(A|B)$ in terms of $P(B|A)$:",
        choices: ["$P(A|B) = P(B|A)P(A)/P(B)$", "$P(A|B) = P(B|A)$", "$P(A|B) = P(A)P(B)$", "$1/P(A)$"], correct: 0,
        solution: S({
          c: "Bayes' theorem inverts a conditional: $P(A|B) = \\dfrac{P(B|A)P(A)}{P(B)}$.",
          s: ["<b>Step 1 — Match.</b> $P(B|A)P(A)/P(B)$.","<b>Step 2 — Distractor audit.</b> $P(B|A)$ alone forgets the prior/evidence; $P(A)P(B)$ is independence; $1/P(A)$ is nonsense."],
          a: "$P(B|A)P(A)/P(B)$",
          v: "It updates a prior $P(A)$ with evidence B - the engine of medical diagnosis, spam filters, and ML classifiers. Ignoring the prior $P(A)$ causes the base-rate fallacy."
        }), ref: "p.65" },
      { q: "Expected value of discrete RV: $\\mu_X = ?$",
        choices: ["$\\sum x_i p(x_i)$", "$\\sum x_i$", "$\\sum p(x_i)$", "$\\max p$"], correct: 0,
        solution: S({
          c: "Expected value of a discrete random variable is the probability-weighted sum: $\\mu_X = \\sum x_i\\,p(x_i)$.",
          s: ["<b>Step 1 — Match.</b> $\\sum x_i p(x_i)$.","<b>Step 2 — Distractor audit.</b> $\\sum x_i$ ignores probabilities; $\\sum p(x_i)=1$; max p is the mode."],
          a: "$\\sum x_i p(x_i)$",
          v: "It's the long-run average - each outcome weighted by how likely it is. For a fair die: $\\sum k/6 = 3.5$, the 'expected' roll even though you can't roll 3.5."
        }), ref: "p.66" },
      { q: "Variance: $\\sigma^2 = E[X^2] - $ ?",
        choices: ["$\\mu^2$", "$\\mu$", "$\\sigma$", "$2\\mu$"], correct: 0,
        solution: S({
          c: "The computational variance formula: $\\sigma^2 = E[X^2] - \\mu^2$ (mean of squares minus square of mean).",
          s: ["<b>Step 1 — Match.</b> $\\mu^2$.","<b>Step 2 — Distractor audit.</b> $\\mu$, $\\sigma$, $2\\mu$ don't complete the identity."],
          a: "$\\sigma^2 = E[X^2] - \\mu^2$",
          v: "Equivalent to $E[(X-\\mu)^2]$ but easier to compute in one pass - this 'mean of squares minus square of mean' form is a workhorse in statistics."
        }), ref: "p.66" },
      { q: "Binomial coefficient $\\binom{n}{k}$:",
        choices: ["$\\frac{n!}{k!(n-k)!}$", "$n!$", "$n^k$", "$n - k$"], correct: 0,
        solution: S({
          c: "The binomial coefficient $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$ counts ways to choose k from n (= combinations).",
          s: ["<b>Step 1 — Match.</b> $n!/[k!(n-k)!]$.","<b>Step 2 — Distractor audit.</b> $n!$, $n^k$, $n-k$ aren't the coefficient."],
          a: "$\\dfrac{n!}{k!(n-k)!}$",
          v: "It's also the coefficient of $x^k y^{n-k}$ in $(x+y)^n$ (binomial theorem) and a row entry of Pascal's triangle - the same number, three viewpoints."
        }), ref: "p.64" },
      { q: "Geometric distribution: P(first success on k-th trial), success prob $p$:",
        choices: ["$(1-p)^{k-1} p$", "$p^k$", "$\\binom{n}{k}p^k$", "$p$"], correct: 0,
        solution: S({
          c: "Geometric distribution: $k-1$ failures then one success, $P(k) = (1-p)^{k-1}p$.",
          s: ["<b>Step 1 — Match.</b> $(1-p)^{k-1}p$.","<b>Step 2 — Distractor audit.</b> $p^k$ forgets the failures; $\\binom{n}{k}p^k$ is binomial; $p$ alone is one trial."],
          a: "$(1-p)^{k-1}p$",
          v: "Models 'how long until the first success' - mean $1/p$, variance $(1-p)/p^2$. It's memoryless: past failures don't change the future."
        }), ref: "p.66" },
      { q: "Standard normal table $\\Phi(1.96)$:",
        choices: ["$\\approx 0.975$", "$0.95$", "$0.50$", "$0.999$"], correct: 0,
        solution: S({
          c: "$\\Phi(1.96) = 0.975$ - the cumulative probability up to z=1.96 for a standard normal. (Worth memorizing.)",
          s: ["<b>Step 1 — Match.</b> 0.975.","<b>Step 2 — Distractor audit.</b> 0.95 is $\\Phi(1.645)$; 0.50 is the center; 0.999 is ~$\\Phi(3.1)$."],
          a: "$\\approx 0.975$",
          v: "This is WHY a two-sided 95% confidence interval uses +/-1.96: it leaves 2.5% in each tail ($\\Phi(1.96)=0.975$). $\\Phi(1.645)=0.95$ is the one-sided cousin."
        }), ref: "p.67" },
      { q: "T-distribution converges to normal as:",
        choices: ["Degrees of freedom → ∞", "Sample size = 0", "Variance = 0", "Sample mean fixed"], correct: 0,
        solution: S({
          c: "The Student t-distribution approaches the standard normal as its degrees of freedom go to infinity.",
          s: ["<b>Step 1 — Match.</b> Degrees of freedom -> infinity.","<b>Step 2 — Distractor audit.</b> Sample-size-0, variance-0, fixed-mean aren't the convergence condition."],
          a: "df -> infinity.",
          v: "For df > 30, t is essentially z - which is why small samples (where sigma is estimated) use the wider-tailed t, while large samples can use the normal."
        }), ref: "p.68" },
      { q: "Chi-square test statistic: $\\sum (O-E)^2/E$ tests:",
        choices: ["Goodness of fit / independence", "Mean", "Variance", "Median"], correct: 0,
        solution: S({
          c: "The chi-square statistic $\\sum(O-E)^2/E$ compares OBSERVED to EXPECTED frequencies - testing goodness-of-fit or independence.",
          s: ["<b>Step 1 — Match.</b> Goodness of fit / independence.","<b>Step 2 — Distractor audit.</b> Means use t-tests; variances use F-tests; median uses nonparametric tests."],
          a: "Goodness of fit / independence.",
          v: "A large chi-square means observed counts stray far from the model's expectation -> reject the null hypothesis. It works on CATEGORICAL frequency data."
        }), ref: "p.70" },
      { q: "Type I error in hypothesis testing:",
        choices: ["Reject true null hypothesis", "Accept false null", "Compute mean wrong", "Sample too small"], correct: 0,
        solution: S({
          c: "A Type I error is REJECTING a TRUE null hypothesis - a false positive. Its rate is the significance level alpha.",
          s: ["<b>Step 1 — Match.</b> Reject true null (false positive).","<b>Step 2 — Distractor audit.</b> 'Accept false null' is Type II (false negative); the others aren't error types."],
          a: "Reject a true null (false positive).",
          v: "Type I (alpha, false alarm) and Type II (beta, missed detection) trade off - lowering one usually raises the other unless you increase sample size."
        }), ref: "p.70" },
      { q: "Power of statistical test:",
        choices: ["$1 - \\beta$ (probability of detecting true effect)", "$\\alpha$", "$\\beta$", "$1$"], correct: 0,
        solution: S({
          c: "Power = $1-\\beta$ - the probability of correctly DETECTING a true effect (rejecting a false null).",
          s: ["<b>Step 1 — Match.</b> $1-\\beta$.","<b>Step 2 — Distractor audit.</b> alpha is Type I rate; beta is the miss rate; 1 is impossible."],
          a: "$1-\\beta$.",
          v: "Power rises with larger sample size, larger true effect, and smaller variance - which is why studies do 'power analysis' to size their samples before collecting data."
        }), ref: "p.70" },
      { q: "Confidence interval for mean (sigma known): $\\bar{x} \\pm z_{\\alpha/2}\\sigma/\\sqrt{n}$. For 99% CI, $z$ =",
        choices: ["$2.576$", "$1.96$", "$1.645$", "$2.0$"], correct: 0,
        solution: S({
          c: "For a 99% confidence interval, $z_{\\alpha/2} = z_{0.005} = 2.576$ (leaving 0.5% in each tail).",
          s: ["<b>Step 1 — Match.</b> 2.576.","<b>Step 2 — Distractor audit.</b> 1.96 is 95%; 1.645 is 90% (or one-sided 95%); 2.0 is a rough approximation."],
          a: "$z = 2.576$",
          v: "Memorize the trio: 90% -> 1.645, 95% -> 1.96, 99% -> 2.576. Higher confidence = wider interval = larger z, the price of more certainty."
        }), ref: "p.69" },
      { q: "Linear regression $y = \\beta_0 + \\beta_1 x$. Slope $\\beta_1$ estimator:",
        choices: ["$\\sum (x_i - \\bar{x})(y_i - \\bar{y}) / \\sum (x_i - \\bar{x})^2$", "$\\bar{y}/\\bar{x}$", "$\\sum xy/\\sum x$", "Median"], correct: 0,
        solution: S({
          c: "The least-squares slope is $\\beta_1 = \\dfrac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^2}$ - covariance of x,y over variance of x.",
          s: ["<b>Step 1 — Match.</b> The standard LS ratio.","<b>Step 2 — Distractor audit.</b> $\\bar y/\\bar x$, $\\sum xy/\\sum x$, median don't minimize squared error."],
          a: "$\\dfrac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^2}$",
          v: "It's the slope that minimizes total squared residuals - and the intercept follows as $\\beta_0 = \\bar y - \\beta_1\\bar x$ (the line passes through the mean point)."
        }), ref: "p.69" },
      { q: "Coefficient of determination $R^2$:",
        choices: ["Fraction of variance explained by model", "Correlation coefficient", "Error", "Always 1"], correct: 0,
        solution: S({
          c: "$R^2$ is the fraction of the response's variance EXPLAINED by the model, ranging 0 (no fit) to 1 (perfect fit).",
          s: ["<b>Step 1 — Match.</b> Fraction of variance explained.","<b>Step 2 — Distractor audit.</b> The correlation coefficient is r (R^2 is its square in simple regression); it's not 'error' or always 1."],
          a: "Fraction of variance explained.",
          v: "$R^2=0.9$ means the model accounts for 90% of the variability - but a high $R^2$ doesn't prove causation or a correct model (watch for overfitting)."
        }), ref: "p.69" },
      { q: "ANOVA tests for:",
        choices: ["Differences among multiple group means", "Variance only", "Single mean", "Correlation"], correct: 0,
        solution: S({
          c: "ANOVA (Analysis of Variance) uses an F-test to compare multiple GROUP MEANS, by comparing between-group variance to within-group variance.",
          s: ["<b>Step 1 — Match.</b> Differences among multiple group means.","<b>Step 2 — Distractor audit.</b> Despite the name it tests MEANS (via variances); not a single mean or correlation."],
          a: "Differences among multiple group means.",
          v: "Null hypothesis: all group means are equal. ANOVA extends the two-sample t-test to 3+ groups without inflating the Type I error from multiple pairwise tests."
        }), ref: "p.70" },
      { q: "P(at least one ace in 5-card hand):",
        choices: ["$1 - C(48,5)/C(52,5) \\approx 0.341$", "$4/52$", "$1/13$", "$5/52$"], correct: 0,
        solution: S({
          c: "Use the COMPLEMENT: $P(\\ge 1) = 1 - P(\\text{none})$, where P(no aces) = $C(48,5)/C(52,5)$.",
          s: ["<b>Step 1 — No aces.</b> $C(48,5)/C(52,5) = 1{,}712{,}304/2{,}598{,}960 = 0.659$.","<b>Step 2 — Complement.</b> $1 - 0.659 = 0.341$.","<b>Step 3 — Distractor audit.</b> $4/52$, $1/13$, $5/52$ are single-card probabilities."],
          a: "$\\approx 0.341$",
          v: "'At least one' problems are almost always easier via the complement (none) - directly summing P(exactly 1)+P(2)+... is far more work."
        }), ref: "p.65" },
      { q: "Normal distribution PDF symmetric about:",
        choices: ["Mean $\\mu$", "Mode", "Zero always", "Median only"], correct: 0,
        solution: S({
          c: "The normal distribution is symmetric about its mean $\\mu$, where mean = median = mode all coincide.",
          s: ["<b>Step 1 — Match.</b> Mean $\\mu$.","<b>Step 2 — Distractor audit.</b> Mode/median equal the mean here so they're not distinct; 'zero always' is only the STANDARD normal."],
          a: "The mean $\\mu$.",
          v: "Only the STANDARD normal centers at 0; a general normal centers at $\\mu$ - the bell is perfectly symmetric, so its skewness is zero."
        }), ref: "p.67" },
      { q: "Joint probability $P(A,B)$ for independent: ",
        choices: ["$P(A) P(B)$", "$P(A) + P(B)$", "$\\max$", "$\\min$"], correct: 0,
        solution: S({
          c: "For INDEPENDENT events, the joint probability factors: $P(A,B) = P(A)P(B)$.",
          s: ["<b>Step 1 — Match.</b> $P(A)P(B)$.","<b>Step 2 — Distractor audit.</b> $P(A)+P(B)$ is for unions of disjoint events; max/min are wrong."],
          a: "$P(A)P(B)$.",
          v: "Independence means one event tells you nothing about the other, so their probabilities multiply - the defining property, distinct from mutually-exclusive (which would make the joint 0)."
        }), ref: "p.64" },
      { q: "Standard error of sample proportion $\\hat{p}$: ",
        choices: ["$\\sqrt{\\hat{p}(1-\\hat{p})/n}$", "$\\hat{p}/n$", "$\\sqrt{n}$", "$1/n$"], correct: 0,
        solution: S({
          c: "Standard error of a sample proportion: $SE = \\sqrt{\\dfrac{\\hat p(1-\\hat p)}{n}}$.",
          s: ["<b>Step 1 — Match.</b> $\\sqrt{\\hat p(1-\\hat p)/n}$.","<b>Step 2 — Distractor audit.</b> $\\hat p/n$, $\\sqrt n$, $1/n$ have the wrong form."],
          a: "$\\sqrt{\\hat p(1-\\hat p)/n}$",
          v: "SE is maximized at $\\hat p = 0.5$ (giving the widest margin) - which is why pollsters use 0.5 for conservative worst-case sample-size planning."
        }), ref: "p.69" },
      { q: "Sample size for desired margin of error $E$: $n =$",
        choices: ["$(z\\sigma/E)^2$", "$z\\sigma/E$", "$\\sigma/E$", "$E/\\sigma$"], correct: 0,
        solution: S({
          c: "Solve the margin formula $E = z\\sigma/\\sqrt n$ for n: $n = (z\\sigma/E)^2$.",
          s: ["<b>Step 1 — Match.</b> $(z\\sigma/E)^2$.","<b>Step 2 — Distractor audit.</b> The non-squared forms don't follow from solving for n."],
          a: "$n = (z\\sigma/E)^2$",
          v: "The squaring means halving the margin E QUADRUPLES the required n - precision scales expensively, the recurring theme of sampling."
        }), ref: "p.69" },
      { q: "Independent events vs disjoint events:",
        choices: ["Different: independent → $P(A∩B) = P(A)P(B)$. Disjoint → $P(A∩B) = 0$.", "Same", "Disjoint implies independent", "Always related"], correct: 0,
        solution: S({
          c: "DISTINCT concepts: independent means $P(A\\cap B)=P(A)P(B)$ (no info shared); disjoint (mutually exclusive) means $P(A\\cap B)=0$ (can't co-occur).",
          s: ["<b>Step 1 — Match.</b> Independent: product; disjoint: zero intersection.","<b>Step 2 — Distractor audit.</b> Not 'same'; disjoint does NOT imply independent (in fact, for nonzero probs, disjoint implies DEPENDENT)."],
          a: "Distinct concepts.",
          v: "Counterexample: die rolls a 1 (A) vs a 2 (B) are disjoint, but if A happened then $P(B)=0\\ne1/6$ - knowing A changed B, so they're dependent. Disjoint and independent rarely coexist."
        }), ref: "p.64-65" },
      { q: "Sample standard deviation uses denominator:",
        choices: ["$n-1$ (Bessel correction)", "$n$", "$n+1$", "$\\sqrt{n}$"], correct: 0,
        solution: S({
          c: "Sample variance divides by $n-1$ (Bessel's correction) for an unbiased estimate: $s^2 = \\dfrac{\\sum(x_i-\\bar x)^2}{n-1}$.",
          s: ["<b>Step 1 — Match.</b> $n-1$.","<b>Step 2 — Distractor audit.</b> $n$ is for POPULATION variance; $n+1$ and $\\sqrt n$ are wrong."],
          a: "$n-1$ (Bessel's correction).",
          v: "Dividing by $n$ would underestimate spread because $\\bar x$ is itself estimated from the data (using up one degree of freedom) - the $n-1$ corrects that bias."
        }), ref: "p.63" },
      { q: "Exponential distribution: P(X > t) = ",
        choices: ["$e^{-\\lambda t}$", "$\\lambda e^{-\\lambda t}$", "$1 - e^{-\\lambda t}$", "$\\lambda t$"], correct: 0,
        solution: S({
          c: "The exponential distribution's survival function (CCDF) is $P(X>t) = e^{-\\lambda t}$.",
          s: ["<b>Step 1 — Match.</b> $e^{-\\lambda t}$.","<b>Step 2 — Distractor audit.</b> $\\lambda e^{-\\lambda t}$ is the PDF; $1-e^{-\\lambda t}$ is the CDF; $\\lambda t$ is wrong."],
          a: "$P(X>t) = e^{-\\lambda t}$",
          v: "The exponential is MEMORYLESS: $P(X>s+t \\mid X>s)=P(X>t)$ - a component's remaining life doesn't depend on how long it's already survived. Models random failure times and arrival gaps (Poisson)."
        }), ref: "p.67" },
    ],

    // Ethics — +5
    3: [
      { q: "Ghostwriting a sealed engineering document under another's PE license:",
        choices: ["Fraud — both parties may face license revocation", "Acceptable practice", "Common in industry", "Only ethical violation"], correct: 0,
        solution: S({
          c: "Sealing work prepared by someone NOT under the PE's responsible charge is fraud - both the ghostwriter and the stamping PE face professional misconduct charges.",
          s: ["<b>Step 1 — Match.</b> Fraud; both parties risk license revocation.","<b>Step 2 — Distractor audit.</b> 'Acceptable'/'common in industry' rationalize it; it's more than ONLY an ethics violation (often criminal too)."],
          a: "Fraud (both parties liable).",
          v: "The seal certifies a licensed engineer took responsible charge - bypassing that betrays public safety and is criminal in many jurisdictions, not just an ethics lapse."
        }), ref: "p.5" },
      { q: "Engineer receives confidential info from former employer:",
        choices: ["Must not use for current employer's benefit", "Free to use", "Share with peers", "Sell"], correct: 0,
        solution: S({
          c: "Confidentiality obligations PERSIST after employment ends - the engineer must not use a former employer's proprietary information to benefit a new one.",
          s: ["<b>Step 1 — Match.</b> Must not use for current employer's benefit.","<b>Step 2 — Distractor audit.</b> 'Free to use', 'share', 'sell' all violate the duty."],
          a: "Cannot use it.",
          v: "Both ethics canons and NDAs bind the engineer beyond the job's end - misusing trade secrets risks lawsuits and license discipline. The duty outlives the paycheck."
        }), ref: "p.5" },
      { q: "Engineer disagrees with employer's design decision on safety grounds:",
        choices: ["Document position; if unsafe, refuse to participate or report", "Sign anyway", "Quit silently", "Ignore"], correct: 0,
        solution: S({
          c: "When safety is at stake: DOCUMENT your professional position, escalate internally, and refuse to participate (or report externally) if the danger is real.",
          s: ["<b>Step 1 — Match.</b> Document; refuse or report if unsafe.","<b>Step 2 — Distractor audit.</b> Signing anyway, quitting silently, or ignoring all abandon the public-safety duty (Canon 1)."],
          a: "Document, then refuse/report.",
          v: "The escalation path: record your concern, exhaust internal channels first, then go external only if danger is imminent and unaddressed - public welfare is paramount and overrides employer loyalty."
        }), ref: "p.5" },
      { q: "Public statements about engineering should:",
        choices: ["Be objective, truthful, in area of expertise", "Promote employer", "Match popular opinion", "Avoid technical detail"], correct: 0,
        solution: S({
          c: "NCEES Canon 3: public statements must be objective, truthful, and made only within the engineer's area of competence.",
          s: ["<b>Step 1 — Match.</b> Objective, truthful, in area of expertise.","<b>Step 2 — Distractor audit.</b> Promoting the employer, matching popular opinion, or hiding detail all compromise objectivity."],
          a: "Objective, truthful, within expertise.",
          v: "Engineers carry public trust, so professional statements must be evidence-based and within competence - not marketing, not bandwagon, not dumbed-down to mislead."
        }), ref: "p.5" },
      { q: "Engineer's relationship with media: should disclose:",
        choices: ["Sponsorship/affiliations relevant to topic", "Personal life", "Income", "Nothing"], correct: 0,
        solution: S({
          c: "Engineers must disclose any sponsorships or affiliations relevant to the topic - transparency where an interest could bias the message.",
          s: ["<b>Step 1 — Match.</b> Sponsorship/affiliations relevant to the topic.","<b>Step 2 — Distractor audit.</b> Personal life and income aren't required; 'nothing' violates transparency."],
          a: "Relevant interests/affiliations.",
          v: "Disclosure lets the audience weigh potential bias - the same principle as conflict-of-interest disclosure in any professional opinion (Canon 3 objectivity)."
        }), ref: "p.5" },
    ],

    // Economics — +15 (deep dive from p.229-237)
    4: [
      { q: "Cash flow diagram convention:",
        choices: ["Up arrow = inflow; Down arrow = outflow", "Reverse", "All up", "Random"], correct: 0,
        solution: S({
          c: "Standard cash-flow diagram: UP arrows = inflows (receipts), DOWN arrows = outflows (payments), along a horizontal time axis in periods.",
          s: ["<b>Step 1 — Match.</b> Up = inflow, down = outflow.","<b>Step 2 — Distractor audit.</b> 'Reverse', 'all up', 'random' break the convention."],
          a: "Up = receive, down = pay.",
          v: "A consistent sign convention is essential before computing NPV/IRR - one side's perspective (lender vs borrower) flips all the arrows, so fix it first."
        }), ref: "p.229" },
      { q: "Nominal interest rate vs effective: $r_{nom} = 12\\%$ compounded monthly:",
        choices: ["$EAR = (1.01)^{12}-1 \\approx 12.68\\%$", "$12\\%$", "$13\\%$", "$15\\%$"], correct: 0,
        solution: S({
          c: "Effective annual rate from monthly compounding: $EAR = (1 + r/m)^m - 1$.",
          s: ["<b>Step 1 — Apply.</b> $(1.01)^{12} - 1 = 12.68\\%$.","<b>Step 2 — Distractor audit.</b> 12% is the nominal (ignores compounding); 13% and 15% overstate."],
          a: "$EAR \\approx 12.68\\%$",
          v: "Monthly compounding makes the true cost 12.68%, not 12% - more frequent compounding always raises EAR toward the continuous limit ($e^{0.12}-1 = 12.75\\%$)."
        }), ref: "p.230" },
      { q: "Capital recovery factor $(A/P, i, n)$ for $i=5\\%, n=20$:",
        choices: ["$\\approx 0.0802$", "$0.05$", "$0.1$", "$0.5$"], correct: 0,
        solution: S({
          c: "Capital recovery factor: $(A/P,i,n) = \\dfrac{i(1+i)^n}{(1+i)^n - 1}$ - converts a present sum to equal annual payments.",
          s: ["<b>Step 1 — Growth.</b> $(1.05)^{20} = 2.6533$.","<b>Step 2 — Apply.</b> $0.05\\times2.6533/1.6533 = 0.0802$.","<b>Step 3 — Distractor audit.</b> 0.05 is just i; 0.1 and 0.5 are wrong."],
          a: "$\\approx 0.0802$",
          v: "It's the factor behind every amortized loan payment - a $100k loan at 5% over 20 years costs $8,020/yr. As $n\\to\\infty$, (A/P) approaches just i (perpetuity)."
        }), ref: "p.231" },
      { q: "Gradient cash flow: increases by $G$ each period. Present worth factor:",
        choices: ["$(P/G, i, n) = [(1+i)^n - in - 1]/[i^2(1+i)^n]$", "$Gn$", "$1/i$", "Linear"], correct: 0,
        solution: S({
          c: "An ARITHMETIC gradient (cash flow growing by a fixed $G$ each period) has present-worth factor $(P/G,i,n) = \\dfrac{(1+i)^n - in - 1}{i^2(1+i)^n}$.",
          s: ["<b>Step 1 — Match.</b> The standard $(P/G)$ formula.","<b>Step 2 — Distractor audit.</b> $Gn$, $1/i$, 'linear' ignore discounting."],
          a: "$(P/G,i,n) = \\dfrac{(1+i)^n-in-1}{i^2(1+i)^n}$",
          v: "Use this for steadily-INCREASING (by fixed dollars) maintenance or revenue. It differs from the GEOMETRIC gradient (fixed PERCENTAGE growth) - know which one the problem describes."
        }), ref: "p.231" },
      { q: "Effective annual rate from continuous compounding at $r$:",
        choices: ["$EAR = e^r - 1$", "$r$", "$e^r$", "$r + 1$"], correct: 0,
        solution: S({
          c: "Continuous compounding is the limit of $(1+r/n)^n$ as $n\\to\\infty$, giving $EAR = e^r - 1$.",
          s: ["<b>Step 1 — Match.</b> $e^r - 1$.","<b>Step 2 — Distractor audit.</b> $r$ ignores compounding; $e^r$ forgets the $-1$; $r+1$ is wrong."],
          a: "$EAR = e^r - 1$",
          v: "It's the absolute ceiling on EAR for a given nominal rate - e.g. 10% nominal gives 10.52% continuous, the most any compounding frequency can reach."
        }), ref: "p.230" },
      { q: "Capitalized worth (perpetuity): $A$ forever at $i$ — present worth:",
        choices: ["$A/i$", "$A \\cdot i$", "$A \\cdot n$", "$\\infty$"], correct: 0,
        solution: S({
          c: "A perpetuity (equal payment A forever) has present worth $P = A/i$.",
          s: ["<b>Step 1 — Match.</b> $A/i$.","<b>Step 2 — Distractor audit.</b> $A\\cdot i$, $A\\cdot n$, infinity ignore discounting (distant payments shrink to ~0)."],
          a: "$P = A/i$",
          v: "Finite despite infinite payments, because far-future amounts discount toward zero - e.g. $5k/yr maintenance forever at 4% = $125k. Used for endowments and 'perpetual' infrastructure costs."
        }), ref: "p.231" },
      { q: "MACRS depreciation: 5-year property first year %:",
        choices: ["$20\\%$ (200% DB with half-year convention)", "$10\\%$", "$50\\%$", "$25\\%$"], correct: 0,
        solution: S({
          c: "MACRS 5-year property (200% declining balance with half-year convention) takes 20% in year 1.",
          s: ["<b>Step 1 — Match.</b> 20%.","<b>Step 2 — Distractor audit.</b> 10%/50%/25% don't match the MACRS schedule."],
          a: "20%.",
          v: "The full 5-year schedule spans 6 calendar years: 20, 32, 19.2, 11.52, 11.52, 5.76% - the half-year convention assumes assets are placed in service mid-year, splitting year 1."
        }), ref: "p.230" },
      { q: "Straight-line depreciation rate per year for n-year life:",
        choices: ["$(C - SV)/n$ per year (or 1/n of depreciable basis)", "$C/n$", "$1/n$ of book value", "Variable"], correct: 0,
        solution: S({
          c: "Straight-line spreads the depreciable basis (cost minus salvage) evenly: $D = (C - SV)/n$ per year.",
          s: ["<b>Step 1 — Match.</b> $(C-SV)/n$.","<b>Step 2 — Distractor audit.</b> $C/n$ ignores salvage; '1/n of book value' is declining-balance; not variable."],
          a: "$(C-SV)/n$ per year.",
          v: "The simplest method - equal annual deductions. MACRS/SYD front-load depreciation instead (bigger early tax shield), but all sum to the same total over the asset's life."
        }), ref: "p.230" },
      { q: "Book value at end of year $t$ (straight-line):",
        choices: ["$C - tD$", "$C/t$", "$D \\cdot t$", "$SV$"], correct: 0,
        solution: S({
          c: "Book value = initial cost minus accumulated depreciation: $BV = C - tD$ (with $D$ the annual straight-line amount).",
          s: ["<b>Step 1 — Match.</b> $C - tD$.","<b>Step 2 — Distractor audit.</b> $C/t$, $D\\cdot t$ (accumulated dep., not book value), $SV$ (only at end) are wrong."],
          a: "$BV = C - tD$.",
          v: "At the end of life ($t=n$), book value equals the salvage value SV by construction - straight-line draws a straight ramp from C down to SV."
        }), ref: "p.230" },
      { q: "Sum-of-years-digits (SYD) depreciation, year 1 of 5-year life:",
        choices: ["$5/15 = 33.3\\%$ of depreciable basis", "$20\\%$", "$40\\%$", "$50\\%$"], correct: 0,
        solution: S({
          c: "SYD is an accelerated method using declining fractions over a denominator of $1+2+\\cdots+n$. For 5 years the denominator is 15; year 1 takes $5/15$.",
          s: ["<b>Step 1 — Denominator.</b> $1+2+3+4+5 = 15$.","<b>Step 2 — Year 1 fraction.</b> $5/15 = 33.3\\%$.","<b>Step 3 — Distractor audit.</b> 20% is straight-line; 40%/50% are wrong."],
          a: "$5/15 \\approx 33\\%$.",
          v: "Fractions decline 5/15, 4/15, ..., 1/15 - front-loading depreciation like MACRS for an early tax shield, but by a simpler arithmetic rule."
        }), ref: "p.230" },
      { q: "Income tax effect on after-tax cash flow:",
        choices: ["Taxable income × tax rate subtracted from pre-tax CF", "No effect", "Always doubles", "Only at end"], correct: 0,
        solution: S({
          c: "After-tax cash flow = before-tax cash flow minus taxes, where tax = (tax rate) x (taxable income). Depreciation reduces taxable income (a 'tax shield').",
          s: ["<b>Step 1 — Match.</b> Taxable income x tax rate, subtracted from pre-tax CF.","<b>Step 2 — Distractor audit.</b> 'No effect', 'always doubles', 'only at end' are wrong."],
          a: "ATCF = BTCF - (rate x taxable income).",
          v: "Depreciation isn't a cash flow itself, but it LOWERS taxable income, reducing taxes paid - the 'depreciation tax shield' that makes accelerated methods (MACRS) valuable."
        }), ref: "p.230" },
      { q: "Bond YTM solving: bond at face value means YTM equals:",
        choices: ["Coupon rate", "Zero", "Inflation", "Real rate"], correct: 0,
        solution: S({
          c: "A bond trades at PAR (face value) exactly when its yield to maturity equals its coupon rate.",
          s: ["<b>Step 1 — Match.</b> Coupon rate.","<b>Step 2 — Distractor audit.</b> Zero/inflation/real-rate aren't the par condition."],
          a: "= Coupon rate.",
          v: "The three cases: YTM = coupon -> par; YTM > coupon -> discount (price below par); YTM < coupon -> premium. The bond's price adjusts so its yield matches the market rate."
        }), ref: "p.230" },
      { q: "Future worth of present sum: $F = $ ",
        choices: ["$P(1+i)^n$ for compound", "$P \\cdot i \\cdot n$", "$P/n$", "$P + i$"], correct: 0,
        solution: S({
          c: "Compound growth of a present sum: $F = P(1+i)^n$.",
          s: ["<b>Step 1 — Match.</b> $P(1+i)^n$.","<b>Step 2 — Distractor audit.</b> $Pin$ is simple-interest growth (linear); $P/n$ and $P+i$ are wrong."],
          a: "$F = P(1+i)^n$",
          v: "Compound interest grows EXPONENTIALLY (interest earns interest); simple interest $P(1+in)$ grows linearly. Over long horizons the difference is dramatic."
        }), ref: "p.230" },
      { q: "Loan payment with $i$ per period, $n$ periods, principal $P$:",
        choices: ["$A = P[i(1+i)^n / ((1+i)^n - 1)]$", "$A = P/n$", "$A = Pi$", "$A = P + i$"], correct: 0,
        solution: S({
          c: "The level loan payment uses the capital-recovery factor: $A = P\\dfrac{i(1+i)^n}{(1+i)^n - 1} = P\\cdot(A/P,i,n)$.",
          s: ["<b>Step 1 — Match.</b> $P[i(1+i)^n/((1+i)^n-1)]$.","<b>Step 2 — Distractor audit.</b> $P/n$ ignores interest; $Pi$ is one period's interest; $P+i$ is wrong."],
          a: "$A = P\\cdot(A/P,i,n)$",
          v: "This is the formula behind every fixed-rate mortgage or car loan - early payments are mostly interest, later ones mostly principal, but the total payment A stays constant."
        }), ref: "p.231" },
      { q: "Break-even: $Q^* = $ ?",
        choices: ["$F/(p - v)$", "$F + v$", "$pQ$", "$p - v$"], correct: 0,
        solution: S({
          c: "Break-even quantity = fixed cost / contribution margin per unit: $Q^* = F/(p - v)$, where p is price and v is variable cost per unit.",
          s: ["<b>Step 1 — Match.</b> $F/(p-v)$.","<b>Step 2 — Distractor audit.</b> $F+v$, $pQ$, $p-v$ alone aren't the break-even quantity."],
          a: "$Q^* = F/(p-v)$",
          v: "Each unit contributes $(p-v)$ toward fixed costs; once enough units cover F, you break even - above $Q^*$ you profit. The CONTRIBUTION margin, not price, drives it."
        }), ref: "p.232" },
    ],

    // Materials — +10 (deep dive from p.94-106)
    5: [
      { q: "Atomic packing factor (APF) of FCC:",
        choices: ["$0.74$", "$0.68$", "$0.52$", "$1.0$"], correct: 0,
        solution: S({
          c: "Atomic packing factor = fraction of unit-cell volume filled by atoms. FCC (face-centered cubic) is closest-packed at 0.74.",
          s: ["<b>Step 1 — Match.</b> 0.74.","<b>Step 2 — Distractor audit.</b> 0.68 is BCC; 0.52 is simple cubic; 1.0 is impossible (gaps always remain)."],
          a: "0.74.",
          v: "0.74 is the densest possible packing of equal spheres (FCC and HCP both achieve it) - which is why FCC metals like Cu, Al, Au are dense and ductile."
        }), ref: "p.95" },
      { q: "BCC structure atoms per unit cell:",
        choices: ["$2$", "$4$", "$1$", "$8$"], correct: 0,
        solution: S({
          c: "Count shared atoms: BCC has 1 center atom (fully inside) + 8 corners shared 1/8 each = 1 + 1 = 2.",
          s: ["<b>Step 1 — Apply.</b> $1 + 8\\times\\tfrac18 = 2$.","<b>Step 2 — Distractor audit.</b> FCC has 4; simple cubic has 1; 8 counts corners without sharing."],
          a: "2 atoms.",
          v: "Corner atoms are shared among 8 cells, face atoms among 2 - accounting for sharing gives SC=1, BCC=2, FCC=4 atoms per cell. BCC metals: Fe (alpha), W, Cr."
        }), ref: "p.95" },
      { q: "Yield strength vs ultimate tensile strength:",
        choices: ["UTS > yield (UTS at max stress before necking)", "Equal", "Yield > UTS", "Random"], correct: 0,
        solution: S({
          c: "In a tensile test, UTS (the maximum stress, just before necking) exceeds the yield strength (where plastic deformation begins).",
          s: ["<b>Step 1 — Match.</b> UTS > yield.","<b>Step 2 — Distractor audit.</b> They're not equal; yield is never above UTS."],
          a: "UTS > yield.",
          v: "Stress-strain stages: elastic -> yield (plastic onset) -> UTS (peak) -> necking -> fracture. Designers keep working stress BELOW yield to stay elastic (with a safety factor)."
        }), ref: "p.96" },
      { q: "Hooke's law in elastic region: $\\sigma = E\\varepsilon$. E is:",
        choices: ["Young's modulus (modulus of elasticity)", "Strain", "Poisson", "Density"], correct: 0,
        solution: S({
          c: "In Hooke's law $\\sigma = E\\varepsilon$, E is Young's modulus (modulus of elasticity) - the material's stiffness, the slope of the elastic stress-strain line.",
          s: ["<b>Step 1 — Match.</b> Young's modulus.","<b>Step 2 — Distractor audit.</b> Strain is $\\varepsilon$; Poisson's ratio relates lateral/axial strain; density is unrelated."],
          a: "Young's modulus.",
          v: "Higher E = stiffer (less stretch per stress): steel ~200 GPa, copper ~110 GPa, aluminum ~70 GPa. It's a material property independent of part geometry."
        }), ref: "p.96" },
      { q: "Poisson's ratio range for typical metals:",
        choices: ["$\\nu \\approx 0.25-0.35$", "$0$", "$1.0$", "$-0.5$"], correct: 0,
        solution: S({
          c: "Poisson's ratio (lateral strain / axial strain) is about 0.25-0.35 for most metals.",
          s: ["<b>Step 1 — Match.</b> 0.25-0.35.","<b>Step 2 — Distractor audit.</b> 0 is cork-like; ~0.5 is rubber (incompressible); negative is exotic auxetic materials."],
          a: "$\\nu \\approx 0.25$-$0.35$.",
          v: "It captures how much a material bulges sideways when stretched - near 0.5 means volume-preserving (rubber), near 0 means little lateral response (cork)."
        }), ref: "p.96" },
      { q: "Brittle vs ductile material in tensile test:",
        choices: ["Brittle fails near elastic limit; ductile shows significant plastic deformation", "Same behavior", "Brittle stretches more", "Ductile cracks first"], correct: 0,
        solution: S({
          c: "A BRITTLE material fractures near its elastic limit with little plastic deformation; a DUCTILE material undergoes significant plastic stretching before breaking.",
          s: ["<b>Step 1 — Match.</b> Brittle fails near elastic limit; ductile deforms plastically first.","<b>Step 2 — Distractor audit.</b> They differ; brittle stretches LESS; ductile doesn't crack first."],
          a: "Brittle: little plastic deformation.",
          v: "Ductility gives warning before failure (visible yielding/necking) - cast iron and ceramics snap suddenly (brittle), while Cu, Al, mild steel deform first (ductile, safer)."
        }), ref: "p.96" },
      { q: "Coefficient of thermal expansion units:",
        choices: ["$1/°C$ or $1/K$", "$\\Omega$/°C", "m/°C", "Watts"], correct: 0,
        solution: S({
          c: "Thermal expansion coefficient is strain per degree, so units are 1/degC (or 1/K): $\\Delta L = \\alpha L_0\\Delta T$.",
          s: ["<b>Step 1 — Match.</b> 1/degC or 1/K.","<b>Step 2 — Distractor audit.</b> Ohm/degC, m/degC, watts aren't strain-per-temperature."],
          a: "$1/$degC (or 1/K).",
          v: "It predicts dimensional change with temperature - copper ~17e-6/degC. Mismatched alpha between bonded materials causes thermal stress/warping (and bimetallic strips)."
        }), ref: "p.96" },
      { q: "Phase diagram: eutectic point:",
        choices: ["Lowest melting point of an alloy composition", "Pure metal", "Random", "Highest temperature"], correct: 0,
        solution: S({
          c: "The eutectic point is the composition with the LOWEST melting temperature, where liquid solidifies directly into two solid phases at a single temperature.",
          s: ["<b>Step 1 — Match.</b> Lowest melting point of the alloy.","<b>Step 2 — Distractor audit.</b> Not a pure metal, not random, not the highest temperature."],
          a: "Lowest melting point composition.",
          v: "Classic example: 63% Sn / 37% Pb solder melts sharply at 183 degC (a single temperature, no mushy zone) - the low, sharp melt point is why eutectic alloys make good solders."
        }), ref: "p.105" },
      { q: "Lever rule in phase diagram: fraction of phases:",
        choices: ["Inverse-proportional to tie-line segments", "Equal", "Direct proportional", "Cannot determine"], correct: 0,
        solution: S({
          c: "The lever rule gives phase fractions from a tie line: each phase's fraction is the OPPOSITE arm length divided by the total tie-line length (inverse-proportional).",
          s: ["<b>Step 1 — Match.</b> Inverse-proportional to tie-line segments.","<b>Step 2 — Distractor audit.</b> Not equal or directly-proportional; it IS determinable."],
          a: "Lever rule (opposite-arm / total).",
          v: "Like balancing a physical lever about the overall composition point - the phase farther from your composition is present in SMALLER fraction. It quantifies how much of each phase coexists."
        }), ref: "p.105" },
      { q: "Hardness testing: Brinell vs Rockwell:",
        choices: ["Both indentation tests, different indenter/load", "Same", "Brinell electrical", "Rockwell magnetic"], correct: 0,
        solution: S({
          c: "Both Brinell and Rockwell are INDENTATION hardness tests - they differ in indenter shape and load (Brinell: large ball, measures impression area; Rockwell: cone/ball, measures depth).",
          s: ["<b>Step 1 — Match.</b> Both indentation tests, different indenter/load.","<b>Step 2 — Distractor audit.</b> Not 'same'; neither is electrical or magnetic."],
          a: "Both indentation methods.",
          v: "Brinell suits coarse/heterogeneous materials (big impression averages out); Rockwell is fast and direct-reading. Vickers/Knoop handle microhardness (tiny indents). All correlate with strength."
        }), ref: "p.103" },
    ],

    // Circuits — +20
    6: [
      { q: "$\\delta(t)$ (impulse) input to integrator gives:",
        choices: ["Step output $u(t)$", "Zero", "Another impulse", "Linear ramp"], correct: 0,
        solution: S({
          c: "Integrating an impulse gives a step: $\\int_{-\\infty}^{t}\\delta(\\tau)\\,d\\tau = u(t)$.",
          s: ["<b>Step 1 — Match.</b> Step output $u(t)$.","<b>Step 2 — Distractor audit.</b> Zero/another-impulse/ramp don't follow from integrating delta."],
          a: "Step $u(t)$.",
          v: "The integration ladder: impulse -> step -> ramp -> parabola (each integration). Differentiation runs the other way - this pairing underlies all signal/system relationships."
        }), ref: "p.56" },
      { q: "Step input to differentiator:",
        choices: ["Impulse $\\delta(t)$", "Zero", "Ramp", "Same step"], correct: 0,
        solution: S({
          c: "Differentiating a step gives an impulse: the step's instantaneous jump has infinite slope at $t=0$, captured by $\\delta(t)$.",
          s: ["<b>Step 1 — Match.</b> Impulse $\\delta(t)$.","<b>Step 2 — Distractor audit.</b> Zero/ramp/same-step don't result from differentiating a step."],
          a: "Impulse $\\delta(t)$.",
          v: "It's the inverse of the previous question: $\\dfrac{d}{dt}u(t) = \\delta(t)$. Differentiation moves UP the ladder (step->impulse), integration moves down."
        }), ref: "p.56" },
      { q: "Capacitor voltage at $t = 0^-$ then voltage source applied at $t=0$: $v_C(0^+)$ =",
        choices: ["$v_C(0^-)$ — continuous", "$V_s$", "$0$", "$\\infty$"], correct: 0,
        solution: S({
          c: "Capacitor voltage is CONTINUOUS - it cannot jump instantaneously (would need infinite current, $i=C\\,dv/dt$). So $v_C(0^+) = v_C(0^-)$.",
          s: ["<b>Step 1 — Match.</b> $v_C(0^-)$ (continuous).","<b>Step 2 — Distractor audit.</b> It does NOT jump to $V_s$, 0, or infinity at the instant of switching."],
          a: "$v_C(0^+) = v_C(0^-)$.",
          v: "This continuity rule sets the INITIAL CONDITION for transient analysis - the cap then charges toward $V_s$ exponentially. Its dual: inductor current is continuous."
        }), ref: "p.358" },
      { q: "Inductor current at $t = 0^+$:",
        choices: ["$i_L(0^-)$ — continuous", "$V_s/R$", "$0$", "$\\infty$"], correct: 0,
        solution: S({
          c: "Inductor current is CONTINUOUS - it cannot change instantaneously (would need infinite voltage, $v=L\\,di/dt$). So $i_L(0^+) = i_L(0^-)$.",
          s: ["<b>Step 1 — Match.</b> $i_L(0^-)$ (continuous).","<b>Step 2 — Distractor audit.</b> It doesn't instantly become $V_s/R$, 0, or infinity."],
          a: "$i_L(0^+) = i_L(0^-)$.",
          v: "The companion to the capacitor rule: cap VOLTAGE and inductor CURRENT are the continuous state variables - they set every transient's starting point."
        }), ref: "p.358" },
      { q: "Star ($Y$) and delta ($\\Delta$) conversion for balanced load: $Z_Y = ?$",
        choices: ["$Z_\\Delta / 3$", "$3 Z_\\Delta$", "$Z_\\Delta$", "$Z_\\Delta^2$"], correct: 0,
        solution: S({
          c: "For a balanced load, $Z_Y = Z_\\Delta/3$ (and conversely $Z_\\Delta = 3Z_Y$).",
          s: ["<b>Step 1 — Match.</b> $Z_\\Delta/3$.","<b>Step 2 — Distractor audit.</b> $3Z_\\Delta$ is the reverse; $Z_\\Delta$ and $Z_\\Delta^2$ are wrong."],
          a: "$Z_Y = Z_\\Delta/3$.",
          v: "Delta-to-Y divides by 3, Y-to-Delta multiplies by 3 - the factor-of-3 relationship that simplifies three-phase and bridge networks into series/parallel form."
        }), ref: "p.363" },
      { q: "Apparent power triangle: $P, Q, S$ relationship:",
        choices: ["$S = \\sqrt{P^2 + Q^2}$", "$S = P + Q$", "$S = P/Q$", "$S = PQ$"], correct: 0,
        solution: S({
          c: "The power triangle is Pythagorean: $S = \\sqrt{P^2 + Q^2}$ (apparent = hypotenuse of real P and reactive Q).",
          s: ["<b>Step 1 — Match.</b> $S = \\sqrt{P^2+Q^2}$.","<b>Step 2 — Distractor audit.</b> $P+Q$, $P/Q$, $PQ$ ignore the right-triangle relationship."],
          a: "$S = \\sqrt{P^2+Q^2}$",
          v: "Power factor is $\\cos\\theta = P/S$. The triangle (S in VA, P in W, Q in VAR) ties all AC power quantities together - know two, get the third."
        }), ref: "p.362" },
      { q: "RMS value of full-wave rectified sinusoid (peak $V_m$):",
        choices: ["$V_m/\\sqrt{2}$ — same as original sinusoid!", "$V_m$", "$V_m/2$", "$V_m/\\pi$"], correct: 0,
        solution: S({
          c: "A full-wave rectified sine has the SAME RMS as the original sine, $V_m/\\sqrt2$ - because squaring makes the flipped negative halves identical to positive ones.",
          s: ["<b>Step 1 — Match.</b> $V_m/\\sqrt2$.","<b>Step 2 — Distractor audit.</b> $V_m/2$ is HALF-wave RMS; $V_m$ is the peak; $V_m/\\pi$ is the half-wave AVERAGE."],
          a: "$V_m/\\sqrt2$.",
          v: "RMS measures heating, which depends on the SQUARE - and flipping the negative half (full-wave) doesn't change the squared values, so RMS is unchanged. Half-wave loses half the energy, giving $V_m/2$."
        }), ref: "p.383" },
      { q: "Two AC sources $v_1 = 10\\cos\\omega t$ and $v_2 = 10\\sin\\omega t$ in series:",
        choices: ["$\\sqrt{2} \\cdot 10\\cos(\\omega t - 45°)$", "$20\\cos\\omega t$", "$0$", "$10\\sqrt{2}$"], correct: 0,
        solution: S({
          c: "Add as phasors. $\\cos\\to 10\\angle0°$, and $\\sin\\to 10\\angle-90°$ (sine lags cosine by 90 degrees). Sum the phasors.",
          s: ["<b>Step 1 — Phasors.</b> $10\\angle0° + 10\\angle-90° = 10 - j10$.","<b>Step 2 — Polar.</b> magnitude $10\\sqrt2$, angle $-45°$.","<b>Step 3 — Distractor audit.</b> $20\\cos\\omega t$ wrongly adds magnitudes; 0 ignores the sum; $10\\sqrt2$ drops the phase."],
          a: "$10\\sqrt2\\cos(\\omega t - 45°)$",
          v: "Two equal but 90-degree-apart sinusoids combine to $\\sqrt2$ times the amplitude at 45 degrees - the phasor sum, NOT 20. This is why AC sources can't just be added arithmetically."
        }), ref: "p.360" },
      { q: "Voltage across pure inductor leads current by:",
        choices: ["$90°$", "$0$", "$-90°$", "$180°$"], correct: 0,
        solution: S({
          c: "In an inductor, $v = L\\,di/dt$, so for a sinusoid the voltage LEADS the current by 90 degrees.",
          s: ["<b>Step 1 — Match.</b> +90 degrees.","<b>Step 2 — Distractor audit.</b> 0 is resistive; -90 is capacitive (V lags); 180 is inversion."],
          a: "+90 degrees (V leads I).",
          v: "Mnemonic ELI the ICE man: in an inductor (L), EMF (E) leads I; in a capacitor (C), I leads E. Resistor: in phase."
        }), ref: "p.358" },
      { q: "Series RC: at $\\omega \\to \\infty$, cap acts as:",
        choices: ["Short circuit ($X_C \\to 0$)", "Open", "$R$", "Variable"], correct: 0,
        solution: S({
          c: "Capacitive reactance $X_C = 1/(\\omega C) \\to 0$ as frequency rises - so at high frequency a capacitor behaves as a SHORT circuit.",
          s: ["<b>Step 1 — Match.</b> Short circuit ($X_C\\to0$).","<b>Step 2 — Distractor audit.</b> At DC ($\\omega=0$) it's an OPEN; not R; not variable in the limit."],
          a: "Short circuit.",
          v: "Capacitors block DC (open) and pass high frequencies (short) - the basis of coupling/bypass capacitors and high-pass filters. Inductors do the opposite."
        }), ref: "p.358" },
      { q: "Series RL: at $\\omega \\to \\infty$, inductor acts as:",
        choices: ["Open ($X_L \\to \\infty$)", "Short", "$R$", "Variable"], correct: 0,
        solution: S({
          c: "Inductive reactance $X_L = \\omega L \\to \\infty$ as frequency rises - so at high frequency an inductor behaves as an OPEN circuit.",
          s: ["<b>Step 1 — Match.</b> Open ($X_L\\to\\infty$).","<b>Step 2 — Distractor audit.</b> At DC ($\\omega=0$) it's a SHORT; not R; not variable in the limit."],
          a: "Open circuit.",
          v: "Inductors pass DC (short) and block high frequencies (open) - exactly opposite to capacitors. This is the basis of low-pass filtering and RF chokes."
        }), ref: "p.358" },
      { q: "Energy stored in a charged capacitor reversibly: ",
        choices: ["$\\frac{1}{2}QV = \\frac{1}{2}CV^2 = Q^2/(2C)$", "$QV$", "$2QV$", "Variable"], correct: 0,
        solution: S({
          c: "Capacitor stored energy: $W = \\tfrac12 QV = \\tfrac12 CV^2 = Q^2/(2C)$ - three equivalent forms (using $Q=CV$).",
          s: ["<b>Step 1 — Match.</b> $\\tfrac12 QV = \\tfrac12 CV^2 = Q^2/(2C)$.","<b>Step 2 — Distractor audit.</b> $QV$ (without the 1/2) and $2QV$ double-count; not variable."],
          a: "$\\tfrac12 CV^2$.",
          v: "The 1/2 arises because voltage RISES from 0 to V as charge accumulates (you average it) - not the full QV. The $V^2$ means doubling voltage quadruples stored energy."
        }), ref: "p.358" },
      { q: "Power triangle: $|S|^2 = P^2 + Q^2$. Units:",
        choices: ["VA, W, VAR respectively", "All in W", "All in VA", "Hz"], correct: 0,
        solution: S({
          c: "Each power has its own unit: apparent S in VA (volt-amperes), real P in W (watts), reactive Q in VAR (volt-amperes reactive).",
          s: ["<b>Step 1 — Match.</b> VA, W, VAR respectively.","<b>Step 2 — Distractor audit.</b> They're NOT all the same unit; Hz is frequency."],
          a: "VA (S), W (P), VAR (Q).",
          v: "Distinct units flag the distinct concepts: P does real work (W), Q sloshes energy back and forth (VAR), S is the total the source must supply (VA). Equipment is rated in VA/kVA because that sets the current."
        }), ref: "p.362" },
      { q: "Phasor representation of $5\\cos(\\omega t - 30°)$ V:",
        choices: ["$5\\angle -30°$ V (peak phasor)", "$5\\angle 30°$", "$3.54\\angle -30°$ (RMS)", "Both A and C valid"], correct: 0,
        solution: S({
          c: "Phasor = amplitude at phase angle. Using the PEAK convention, $5\\cos(\\omega t-30°) \\to 5\\angle-30°$ (RMS convention would give $3.54\\angle-30°$).",
          s: ["<b>Step 1 — Match.</b> $5\\angle-30°$ (peak).","<b>Step 2 — Distractor audit.</b> $5\\angle+30°$ flips the sign; RMS is also valid but the question's first answer uses peak."],
          a: "$5\\angle-30°$ (peak phasor).",
          v: "Phasors assume a COSINE reference; sine would shift -90 first. Stay consistent with peak OR RMS throughout a problem - mixing them is a classic error."
        }), ref: "p.360" },
      { q: "Three-phase balanced: sum of three line currents (Y connection without neutral, balanced load):",
        choices: ["$0$ (Kirchhoff's at the neutral node)", "$3 I_\\phi$", "Random", "$\\sqrt{3} I_L$"], correct: 0,
        solution: S({
          c: "Three balanced currents are 120 degrees apart and equal in magnitude, so their phasor sum is ZERO (Kirchhoff's law at the neutral node).",
          s: ["<b>Step 1 — Match.</b> 0.","<b>Step 2 — Distractor audit.</b> $3I_\\phi$ would add magnitudes (ignoring phase); $\\sqrt3 I_L$ relates line/phase, not the sum."],
          a: "0.",
          v: "This cancellation is WHY a balanced three-phase system needs no neutral wire (three-wire delivery) - the return currents cancel. An UNbalanced load breaks this, and the neutral then carries the difference."
        }), ref: "p.363" },
      { q: "Wattmeter measures: $W = V I \\cos\\theta$. With $V_{rms} = 200$, $I_{rms} = 5$, $\\theta = 60°$:",
        choices: ["$500$ W", "$1000$ W", "$0$", "$200$ W"], correct: 0,
        solution: S({
          c: "A wattmeter reads real power $P = V_{rms}I_{rms}\\cos\\theta$.",
          s: ["<b>Step 1 — Apply.</b> $200\\times5\\times\\cos60° = 1000\\times0.5 = 500$ W.","<b>Step 2 — Distractor audit.</b> 1000 W forgets the pf (that's apparent VA); 0 needs 90 deg; 200 W is wrong."],
          a: "$500$ W.",
          v: "A true wattmeter measures REAL power (with the cos factor built in), unlike a V x I product which gives apparent VA - here only half the 1000 VA is real power (pf 0.5)."
        }), ref: "p.362" },
      { q: "Two-wattmeter method for 3-phase: $P_{total} =$",
        choices: ["$W_1 + W_2$ (sum of both readings)", "$W_1 - W_2$", "$\\sqrt{W_1 W_2}$", "Variable"], correct: 0,
        solution: S({
          c: "The two-wattmeter method gives total three-phase power as the SUM of the two readings: $P_{total} = W_1 + W_2$ (works for 3-wire systems, balanced or not).",
          s: ["<b>Step 1 — Match.</b> $W_1 + W_2$.","<b>Step 2 — Distractor audit.</b> Difference, geometric mean, 'variable' are wrong."],
          a: "$W_1 + W_2$.",
          v: "At power factor below 0.5, ONE wattmeter reads negative - you still ADD (a negative value), and the difference $\\sqrt3(W_1-W_2)$ actually gives the reactive power Q. A clever two-meter trick for three-phase."
        }), ref: "p.363" },
      { q: "Capacitor voltage builds up during charging follows:",
        choices: ["$v(t) = V_s(1 - e^{-t/\\tau})$ (exponential approach)", "Linear ramp", "Step instantly", "Random"], correct: 0,
        solution: S({
          c: "RC charging from zero follows an exponential approach: $v(t) = V_s(1 - e^{-t/\\tau})$, with $\\tau = RC$.",
          s: ["<b>Step 1 — Match.</b> $V_s(1-e^{-t/\\tau})$.","<b>Step 2 — Distractor audit.</b> Not a linear ramp, instant step, or random."],
          a: "$v(t) = V_s(1-e^{-t/\\tau})$.",
          v: "Landmarks: 63.2% at $1\\tau$, 86.5% at $2\\tau$, ~99% at $5\\tau$ (effectively done). The exponential reflects current falling as the cap voltage approaches the source."
        }), ref: "p.358" },
      { q: "Op amp slew rate of 10 V/µs. Max sinusoid frequency for 5V amplitude undistorted:",
        choices: ["$\\approx 318$ kHz", "$10$ MHz", "$1$ Hz", "$1$ kHz"], correct: 0,
        solution: S({
          c: "Full-power bandwidth from slew rate: $f_{max} = \\dfrac{SR}{2\\pi V_{peak}}$ (the sine's max slope $2\\pi f V_{peak}$ must not exceed SR).",
          s: ["<b>Step 1 — Convert.</b> SR = 10 V/us = $10^7$ V/s.","<b>Step 2 — Apply.</b> $10^7/(2\\pi\\times5) = 318{,}310$ Hz.","<b>Step 3 — Distractor audit.</b> 10 MHz ignores amplitude; 1 Hz and 1 kHz are far off."],
          a: "$\\approx 318$ kHz.",
          v: "Bigger amplitude slew-limits at LOWER frequency - at 1 V peak the same op-amp reaches 1.6 MHz. This LARGE-signal limit is distinct from the small-signal gain-bandwidth product."
        }), ref: "p.380" },
      { q: "$V_{rms}$ of a sawtooth wave with peak $V_m$:",
        choices: ["$V_m/\\sqrt{3}$", "$V_m/\\sqrt{2}$", "$V_m/2$", "$V_m$"], correct: 0,
        solution: S({
          c: "A sawtooth (or triangular) wave has RMS = $V_m/\\sqrt3 \\approx 0.577 V_m$.",
          s: ["<b>Step 1 — Match.</b> $V_m/\\sqrt3$.","<b>Step 2 — Distractor audit.</b> $V_m/\\sqrt2$ is a SINE; $V_m/2$ is half-wave-rectified sine; $V_m$ is a square wave."],
          a: "$V_m/\\sqrt3$.",
          v: "RMS factor ladder: square = 1, sine = 0.707, sawtooth/triangle = 0.577 - flatter waveforms pack more RMS per peak. The $1/\\sqrt3$ comes from integrating the linear ramp squared."
        }), ref: "p.360" },
    ],

    // Instrumentation — Added to Ch 6 (Circuit Analysis treats it) — +6 (Handbook p.219-228)
    // Actually FE Electrical doesn't have a separate Instrumentation chapter
    // But we can add to Circuits as instrumentation problems

    // Linear Sys — +10
    7: [
      { q: "Bode plot magnitude in dB for first-order pole at break frequency:",
        choices: ["$-3$ dB exact, asymptote intersects at $0$ dB", "$0$ dB exact", "$-20$ dB", "$-6$ dB"], correct: 0,
        solution: S({ c: "At pole: exact -3 dB. Asymptotes meet at 0 dB.", s: [""], a: "$-3$ dB at break" }), ref: "p.366" },
      { q: "Frequency at which 2nd-order system magnitude peaks (for $\\zeta < 0.707$):",
        choices: ["$\\omega_r = \\omega_n\\sqrt{1-2\\zeta^2}$", "$\\omega_n$", "$\\omega_d$", "$2\\omega_n$"], correct: 0,
        solution: S({ c: "Resonant frequency: slightly less than $\\omega_n$. Exists only for under-damped enough ($\\zeta < 0.707$).", s: [""], a: "$\\omega_n\\sqrt{1-2\\zeta^2}$" }), ref: "p.366" },
      { q: "Peak magnitude: $M_r = $",
        choices: ["$1/(2\\zeta\\sqrt{1-\\zeta^2})$", "$1$", "$1/\\zeta$", "$\\omega_n$"], correct: 0,
        solution: S({ c: "Peak in frequency response.", s: ["High Q (low $\\zeta$): large peak."], a: "$1/(2\\zeta\\sqrt{1-\\zeta^2})$" }), ref: "p.366" },
      { q: "Laplace of derivative $f'(t)$:",
        choices: ["$sF(s) - f(0^-)$", "$F(s)/s$", "$F(s) + f(0)$", "$sf(0)$"], correct: 0,
        solution: S({ c: "Differentiation rule.", s: [""], a: "$sF(s) - f(0)$" }), ref: "p.56" },
      { q: "Laplace of $\\int_0^t f(\\tau) d\\tau$:",
        choices: ["$F(s)/s$", "$sF(s)$", "$F(s)$", "$1/F(s)$"], correct: 0,
        solution: S({ c: "Integration: divide by $s$.", s: [""], a: "$F(s)/s$" }), ref: "p.56" },
      { q: "Laplace shifting: $\\mathcal{L}\\{e^{-at}f(t)\\}$:",
        choices: ["$F(s+a)$", "$F(s-a)$", "$F(s)/a$", "$e^{-a}F(s)$"], correct: 0,
        solution: S({ c: "Frequency shifting / first shifting theorem.", s: [""], a: "$F(s+a)$" }), ref: "p.56" },
      { q: "Final value of step response $y(t)$ for stable LTI system: ",
        choices: ["DC gain × input magnitude", "Always 0", "Always 1", "Unbounded"], correct: 0,
        solution: S({ c: "Final value = $H(0)$ × step magnitude.", s: ["Provided system is stable (all poles in LHP)."], a: "$H(0) \\cdot $step" }), ref: "p.56" },
      { q: "Settling time relationship to $\\zeta\\omega_n$ in 2nd-order system:",
        choices: ["$t_s \\approx 4/(\\zeta\\omega_n)$ for 2% settling", "$1/\\zeta$", "$\\omega_n$", "Independent"], correct: 0,
        solution: S({ c: "Envelope decays as $e^{-\\zeta\\omega_n t}$. 2% in $\\sim 4$ time constants of $\\zeta\\omega_n$.", s: [""], a: "$4/(\\zeta\\omega_n)$" }), ref: "p.366" },
      { q: "Underdamped 2nd-order: peak time $t_p = ?$",
        choices: ["$\\pi/\\omega_d$", "$\\omega_n$", "$0$", "$\\zeta$"], correct: 0,
        solution: S({ c: "First maximum at $t = \\pi/\\omega_d$ where $\\omega_d = \\omega_n\\sqrt{1-\\zeta^2}$.", s: [""], a: "$\\pi/\\omega_d$" }), ref: "p.366" },
      { q: "Rise time of overdamped 2nd-order system:",
        choices: ["Slower than critically damped", "Faster", "Same", "Zero"], correct: 0,
        solution: S({ c: "Overdamped: real poles, slow response. Critically damped: fastest non-oscillatory.", s: [""], a: "Slower" }), ref: "p.366" },
    ],

    // Signal — +10
    8: [
      { q: "Discrete Fourier Transform (DFT) of N samples produces:",
        choices: ["N complex frequency bins", "N real bins", "1 number", "Infinite"], correct: 0,
        solution: S({ c: "DFT: $N$ time samples → $N$ frequency samples.", s: [""], a: "N bins" }), ref: "p.376" },
      { q: "FFT complexity vs direct DFT:",
        choices: ["$O(N\\log N)$ vs $O(N^2)$", "Same", "FFT slower", "Direct faster"], correct: 0,
        solution: S({ c: "FFT exploits symmetries.", s: ["For $N = 1024$: FFT ~10k ops, DFT ~10^6."], a: "$N\\log N$ vs $N^2$" }), ref: "p.376" },
      { q: "Sinc function $\\text{sinc}(x) = \\sin(\\pi x)/(\\pi x)$. Value at $x = 0$:",
        choices: ["$1$ (limit)", "$0$", "Undefined", "$\\infty$"], correct: 0,
        solution: S({ c: "Removable singularity. $\\lim_{x\\to 0}\\sin(\\pi x)/(\\pi x) = 1$.", s: ["First zeros: $x = \\pm 1, \\pm 2, ...$"], a: "$1$" }), ref: "p.376" },
      { q: "Ideal LPF impulse response in time domain:",
        choices: ["Sinc function (non-causal)", "Delta", "Step", "Exponential"], correct: 0,
        solution: S({ c: "Rectangular in freq ↔ sinc in time. Ideal LPF requires infinite-length sinc → non-causal.", s: ["Why real LPF approximations: Butterworth, Chebyshev."], a: "Sinc" }), ref: "p.376" },
      { q: "Sampled signal spectrum is:",
        choices: ["Periodic with period $f_s$", "Constant", "Single tone", "Random"], correct: 0,
        solution: S({ c: "Sampling in time = periodic replication in frequency.", s: [""], a: "Periodic" }), ref: "p.375" },
      { q: "Anti-aliasing filter ideal cutoff:",
        choices: ["$f_s/2$ (Nyquist)", "$f_s$", "$2f_s$", "$0$"], correct: 0,
        solution: S({ c: "Remove everything above Nyquist before sampling.", s: ["Practical: cut off well below to allow filter roll-off."], a: "$f_s/2$" }), ref: "p.375" },
      { q: "Decimation by factor $M$: input rate $f_s$ → output rate:",
        choices: ["$f_s/M$", "$Mf_s$", "$f_s$", "$0$"], correct: 0,
        solution: S({ c: "Keep every M-th sample.", s: ["Must pre-filter to prevent aliasing."], a: "$f_s/M$" }), ref: "p.375" },
      { q: "Interpolation by factor $L$: insert zeros between samples then:",
        choices: ["LPF to remove images", "Multiply", "Done", "Decimate"], correct: 0,
        solution: S({ c: "Zero-stuffing creates spectral images. LPF removes them.", s: ["Result: new samples at original signal's interpolated values."], a: "LPF" }), ref: "p.375" },
      { q: "Total harmonic distortion (THD): measure of:",
        choices: ["Signal purity (lower = cleaner)", "Bandwidth", "Phase", "Bandwidth"], correct: 0,
        solution: S({ c: "THD = ratio of harmonic powers to fundamental.", s: ["Audio amplifiers: <0.01% THD desirable. Lossy comp: higher."], a: "Signal purity" }), ref: "p.371" },
      { q: "Quantization noise PSD in ADC: approximately:",
        choices: ["$\\Delta^2/(12 f_s)$", "$\\Delta$", "$0$", "$\\infty$"], correct: 0,
        solution: S({ c: "Quantization noise variance $\\Delta^2/12$ spread uniformly over $[0, f_s/2]$.", s: ["Oversampling: spread same noise over wider band → less in signal band → SNR boost."], a: "$\\Delta^2/(12 f_s)$" }), ref: "p.375" },
    ],

    // Electronics — +15
    9: [
      { q: "Diode equation (Shockley): $I_D = I_S(e^{V_D/(nV_T)} - 1)$. At room temp, $nV_T \\approx$:",
        choices: ["$25-50$ mV typically", "$0.7$ V", "$1$ V", "$1$ mV"], correct: 0,
        solution: S({ c: "Thermal voltage $V_T = kT/q \\approx 25.85$ mV at 300K. Ideality factor $n \\in [1, 2]$.", s: [""], a: "$\\sim 25$-50 mV" }), ref: "p.383" },
      { q: "BJT $V_{BE}$ has temperature coefficient approximately:",
        choices: ["$-2$ mV/°C", "$+2$ mV/°C", "$0$", "$+0.7$ V"], correct: 0,
        solution: S({ c: "$V_{BE}$ decreases ~2 mV per °C rise.", s: ["Used in bandgap references and temperature sensors."], a: "$-2$ mV/°C" }), ref: "p.384" },
      { q: "Op amp input offset voltage typical:",
        choices: ["Few mV (precision: ~µV)", "$V_{cc}$", "$0$ exactly", "$1$ V"], correct: 0,
        solution: S({ c: "$V_{OS}$: small DC error required at inputs for zero output.", s: ["General-purpose: 1-10 mV. Precision (chopper-stabilized): <µV."], a: "Few mV" }), ref: "p.380" },
      { q: "MOSFET $V_{GS}(\\text{th})$ for power MOSFETs typically:",
        choices: ["$1$-$4$ V", "$0$", "$10$ V", "$-5$ V"], correct: 0,
        solution: S({ c: "Power MOSFET threshold: enough to overcome bulk-channel barrier but low enough for logic-level drive.", s: ["Logic-level MOSFETs: $V_{th} \\approx 1-2$ V to drive from 3.3V."], a: "$1-4$ V" }), ref: "p.386" },
      { q: "BJT in cutoff has $V_{BE}$:",
        choices: ["Less than 0.5 V", "Greater than 0.7", "$V_{CE}$", "$0$ exactly"], correct: 0,
        solution: S({ c: "Below conduction threshold, BJT off.", s: ["Active: $V_{BE} \\approx 0.7$ V. Saturation: $V_{BE} \\approx 0.8$ V (slightly higher)."], a: "$V_{BE} < 0.5$ V" }), ref: "p.384" },
      { q: "Photovoltaic cell short-circuit current $I_{SC}$:",
        choices: ["Proportional to light intensity", "Constant", "Proportional to voltage", "Random"], correct: 0,
        solution: S({ c: "More photons → more electron-hole pairs → more current.", s: ["Open-circuit voltage: logarithmic with intensity."], a: "$\\propto$ light intensity" }), ref: "p.383" },
      { q: "Differential amplifier CMRR is improved by:",
        choices: ["Matched components and current source tail", "Higher gain", "Larger transistors", "Faster"], correct: 0,
        solution: S({ c: "Mismatch in differential pair degrades CMRR. Current source tail much higher impedance than resistor.", s: ["Modern op-amps achieve >100 dB CMRR."], a: "Matching + current source" }), ref: "p.380" },
      { q: "Op amp output stage: push-pull complementary BJTs operate in:",
        choices: ["Class AB (slight bias to eliminate crossover)", "Class A", "Class B", "Class C"], correct: 0,
        solution: S({ c: "Class AB: small standing current eliminates crossover distortion of pure Class B.", s: [""], a: "Class AB" }), ref: "p.384" },
      { q: "Transistor as switch in saturation: power loss approximately:",
        choices: ["$V_{CE,sat} \\cdot I_C$ (low)", "$V_{CC} \\cdot I_C$ (high)", "$0$", "$V_{CC}^2/R$"], correct: 0,
        solution: S({ c: "In saturation: low $V_{CE} \\approx 0.2$ V → low power loss.", s: ["Cutoff: $I_C \\approx 0$ → also low loss.", "Linear region (transition): high loss — minimize switching time."], a: "$V_{CE,sat} I_C$" }), ref: "p.384" },
      { q: "Boost converter output ripple voltage:",
        choices: ["Depends on output cap, load, switching freq", "Constant", "Zero", "Equal to input"], correct: 0,
        solution: S({ c: "Ripple $\\Delta V = I_o D / (C f_{sw})$.", s: ["Higher $C$, higher $f$ → less ripple."], a: "Multiple factors" }), ref: "p.383" },
      { q: "Voltage-controlled current source: ideal output impedance:",
        choices: ["Infinite", "Zero", "$R$", "Variable"], correct: 0,
        solution: S({ c: "Ideal current source: I doesn't depend on V → infinite Z.", s: ["Real: finite output Z. MOSFET in saturation approximates."], a: "Infinite" }), ref: "p.380" },
      { q: "Ideal current source output current:",
        choices: ["Independent of load voltage", "Linear in V", "Zero", "Equal to V"], correct: 0,
        solution: S({ c: "Definition of ideal current source.", s: [""], a: "Constant" }), ref: "p.356" },
      { q: "Photodiode reverse-biased: current proportional to:",
        choices: ["Optical power incident on junction", "Bias voltage", "Temperature only", "Random"], correct: 0,
        solution: S({ c: "Photodiode in reverse bias: photocurrent $\\propto$ light, mostly independent of bias.", s: [""], a: "Optical power" }), ref: "p.383" },
      { q: "Op amp bandwidth-gain tradeoff: high gain implies:",
        choices: ["Low bandwidth (constant GBW)", "High bandwidth", "Same", "Unrelated"], correct: 0,
        solution: S({ c: "Gain × Bandwidth = constant (GBW product).", s: ["Op amp 741: GBW ~1 MHz. Modern: 100s MHz to GHz."], a: "Low BW" }), ref: "p.380" },
      { q: "Class D amplifier efficiency typical:",
        choices: ["$> 90\\%$ (switching mode)", "$25\\%$", "$50\\%$", "$78\\%$"], correct: 0,
        solution: S({ c: "Class D: transistors fully on or off → low dissipation.", s: ["Output filter recovers analog signal."], a: "$> 90\\%$" }), ref: "p.384" },
    ],

    // Power — +15
    10: [
      { q: "Single-phase service voltage in US households (RMS, line to neutral):",
        choices: ["$120$ V", "$240$ V", "$208$ V", "$480$ V"], correct: 0,
        solution: S({ c: "US standard 120/240V split-phase.", s: ["Europe: 230V line-neutral, 400V line-line."], a: "$120$ V" }), ref: "p.363" },
      { q: "Common 3-phase voltages in US commercial:",
        choices: ["208/120 (small), 480/277 (large)", "230/400", "Only 600V", "12kV"], correct: 0,
        solution: S({ c: "US: 208Y/120 small building, 480Y/277 large.", s: [""], a: "208 or 480" }), ref: "p.363" },
      { q: "Transmission line model: short line (<80 km), use:",
        choices: ["Series impedance only", "Distributed", "ABCD", "Pi model"], correct: 0,
        solution: S({ c: "Short line: capacitance negligible. Just R+jX.", s: ["Medium (80-250 km): nominal-π. Long: distributed."], a: "Series Z only" }), ref: "p.363" },
      { q: "Per-unit system advantage:",
        choices: ["Transformer impedances same on both sides", "Faster computation", "Lower voltage", "Eliminate Y/Δ"], correct: 0,
        solution: S({ c: "PU normalizes to base — voltage-level-independent.", s: ["Reduces calculation errors crossing transformer boundaries."], a: "Transformer-independent" }), ref: "p.363" },
      { q: "Power flow analysis: P-V curves represent:",
        choices: ["Voltage stability margin (knee point = collapse)", "Frequency", "Reactive", "Random"], correct: 0,
        solution: S({ c: "P-V (nose) curves: at heavy load, voltage drops; knee = stability limit.", s: ["Operating beyond knee: voltage collapse."], a: "V stability" }), ref: "p.363" },
      { q: "Symmetrical components: positive, negative, zero sequence describe:",
        choices: ["Unbalanced 3-φ system decomposition", "Frequency components", "Harmonics", "Phase shifts"], correct: 0,
        solution: S({ c: "Fortescue's theorem: any unbalanced 3-φ = sum of three balanced sets.", s: ["Used in fault analysis."], a: "Unbalance decomposition" }), ref: "p.363" },
      { q: "Three-phase balanced load: zero-sequence current:",
        choices: ["Zero (no neutral current)", "Equal to phase current", "Maximum", "Random"], correct: 0,
        solution: S({ c: "Balanced operation: only positive sequence present.", s: ["Zero-sequence: indicates ground fault or single-phase load on 3-φ."], a: "Zero" }), ref: "p.363" },
      { q: "Three-phase L-G fault: dominant current type:",
        choices: ["Has positive, negative, AND zero sequence (all equal)", "Just positive", "Random", "AC only"], correct: 0,
        solution: S({ c: "Line-to-ground fault: all three sequence currents equal at fault point.", s: ["Used in protection relay settings."], a: "All three equal" }), ref: "p.363" },
      { q: "Transformer connection $\\Delta-Y$: phase shift between primary and secondary line voltages:",
        choices: ["$30°$ (typical)", "$0$", "$90°$", "$120°$"], correct: 0,
        solution: S({ c: "$\\Delta-Y$ (ANSI standard): secondary lags primary by 30°.", s: ["Different connection: leading 30°. Always 30° multiple."], a: "$30°$" }), ref: "p.364" },
      { q: "Power transformer voltage ratio determined by:",
        choices: ["Turns ratio", "Frequency", "Load", "Phase"], correct: 0,
        solution: S({ c: "$V_1/V_2 = N_1/N_2$ for ideal.", s: ["Practical: tap changers adjust ratio slightly to regulate output."], a: "Turns ratio" }), ref: "p.364" },
      { q: "Synchronous machine: damper windings function:",
        choices: ["Damp rotor oscillations, aid starting", "Cooling", "Insulation", "Excitation"], correct: 0,
        solution: S({ c: "Damper bars: induced currents oppose rotor angle swings.", s: ["Also enable line-start (induction starting) for synchronous motors."], a: "Damping + starting" }), ref: "p.365" },
      { q: "DC motor speed proportional to:",
        choices: ["Back EMF (~ armature voltage at constant field)", "Current", "Torque", "Power"], correct: 0,
        solution: S({ c: "$E_b = k\\phi\\omega$. For constant flux: $\\omega \\propto E_b$.", s: ["Speed control via $V_a$ (for $\\omega < $ base) or field weakening (for $\\omega > $ base)."], a: "Back EMF" }), ref: "p.365" },
      { q: "Induction motor: rotor current frequency vs line frequency:",
        choices: ["$f_r = s \\cdot f_{line}$", "Same", "Constant", "Doubled"], correct: 0,
        solution: S({ c: "Rotor sees slip frequency.", s: ["At rated slip 3%: rotor current at 1.8 Hz (60 Hz line)."], a: "$s \\cdot f_{line}$" }), ref: "p.365" },
      { q: "Motor starting torque for NEMA design B:",
        choices: ["~125-150% FLT", "$100\\%$", "$300\\%$", "$50\\%$"], correct: 0,
        solution: S({ c: "Standard squirrel-cage motor.", s: ["Design A, B, C, D differ in torque-speed curves.", "Design D: high slip, high torque for cranes."], a: "$125-150\\%$" }), ref: "p.365" },
      { q: "Synchronous condenser purpose:",
        choices: ["Provide reactive power (no active load) for voltage support", "Cooling", "Filtering harmonics", "Active power generation"], correct: 0,
        solution: S({ c: "Synchronous machine spinning at no-load — adjustable Q via excitation.", s: ["Modern: SVCs (static VAR compensators) often replace."], a: "Reactive support" }), ref: "p.365" },
    ],

    // EM — +5
    11: [
      { q: "Reflection coefficient at quarter-wave transformer ($Z_0 = \\sqrt{Z_s Z_L}$):",
        choices: ["Zero (matched)", "$1$", "$-1$", "Variable"], correct: 0,
        solution: S({ c: "Quarter-wave matching: $Z_{in} = Z_0^2/Z_L = Z_s$ → matched.", s: ["Used at single frequency to match dissimilar impedances."], a: "Zero" }), ref: "p.368" },
      { q: "Smith chart represents:",
        choices: ["Normalized impedance on complex plane (and reflection coefficient)", "Power vs frequency", "Voltage", "Time"], correct: 0,
        solution: S({ c: "Smith chart: graphical tool for transmission line and matching calcs.", s: ["Constant-R and constant-X circles overlay Γ disk."], a: "Norm. Z + Γ" }), ref: "p.368" },
      { q: "Standing wave ratio (SWR): for $|\\Gamma|=0.5$:",
        choices: ["$3$", "$0.5$", "$1.5$", "$2$"], correct: 0,
        solution: S({ c: "$SWR = (1+|\\Gamma|)/(1-|\\Gamma|)$.", s: ["$1.5/0.5 = 3$."], a: "$3$" }), ref: "p.368" },
      { q: "Half-wave dipole input impedance:",
        choices: ["$\\approx 73 + j42$ Ω", "$50$ Ω exactly", "$0$", "Infinite"], correct: 0,
        solution: S({ c: "Half-wave dipole: ~73 Ω resistive, slight inductive.", s: ["Folded dipole: ~300 Ω. Useful for matching."], a: "$\\sim 73$ Ω" }), ref: "p.368" },
      { q: "Antenna radiation pattern: dipole has:",
        choices: ["Donut/toroidal pattern (omnidirectional in plane perpendicular to wire)", "Forward only", "Spherical", "Random"], correct: 0,
        solution: S({ c: "Dipole maximum perpendicular to wire; null along wire axis.", s: [""], a: "Donut" }), ref: "p.368" },
    ],

    // Control — +10
    12: [
      { q: "Nichols chart: shows:",
        choices: ["Open-loop magnitude vs phase", "Time response", "Pole locations", "Stability boundary"], correct: 0,
        solution: S({ c: "Nichols: log-magnitude vs phase, useful for closed-loop synthesis.", s: ["Alternative to Bode."], a: "$|GH|$ vs $\\angle GH$" }), ref: "p.366" },
      { q: "Sensitivity function $S(s) = 1/(1+GH)$. Smaller |S|:",
        choices: ["Better disturbance rejection and reference tracking", "Worse", "More oscillation", "Higher gain"], correct: 0,
        solution: S({ c: "$S$ measures how output responds to disturbance / reference error.", s: ["Bode's integral: can't make S small over all frequencies."], a: "Better rejection" }), ref: "p.365" },
      { q: "Complementary sensitivity $T = 1 - S = GH/(1+GH)$:",
        choices: ["Closed-loop transfer function (also): $T(s) = Y/R$", "Just disturbance", "Time-delay model", "Frequency"], correct: 0,
        solution: S({ c: "Same $T$ as closed-loop transfer function.", s: [""], a: "CL transfer fn" }), ref: "p.365" },
      { q: "Pole at origin: integrator type:",
        choices: ["Type 1 system (zero steady-state error to step)", "Type 0", "Type 2", "Type 3"], correct: 0,
        solution: S({ c: "Number of integrators = type number.", s: [""], a: "Type 1" }), ref: "p.366" },
      { q: "Bode plot: integrator at $\\omega = 0.1$ (very low freq):",
        choices: ["Large positive dB (1/0.1 → +20 dB)", "Zero", "Negative", "Constant"], correct: 0,
        solution: S({ c: "$|1/(j\\omega)| = 1/\\omega = 10$ at $\\omega=0.1$. $20\\log 10 = 20$ dB.", s: ["Slope: -20 dB/decade."], a: "$+20$ dB" }), ref: "p.366" },
      { q: "Closed-loop step response 5% overshoot corresponds to approximately:",
        choices: ["$\\zeta \\approx 0.69$", "$\\zeta = 1$", "$\\zeta = 0.5$", "$\\zeta = 0.1$"], correct: 0,
        solution: S({ c: "$M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$. Solve for 5%.", s: ["$\\zeta \\approx 0.69$ gives $M_p \\approx 5.05\\%$."], a: "$\\approx 0.69$" }), ref: "p.366" },
      { q: "Robust control: tracks reference well despite:",
        choices: ["Model uncertainty and disturbances", "Only constant", "Only at DC", "Random"], correct: 0,
        solution: S({ c: "Robust: performance preserved with uncertain plant.", s: ["$H_\\infty$ control formalizes this."], a: "Uncertainty rejection" }), ref: "p.365" },
      { q: "Discrete-time vs continuous-time stability boundary:",
        choices: ["Continuous: $\\text{Re}(s) < 0$; Discrete: $|z| < 1$", "Same", "Reverse", "Random"], correct: 0,
        solution: S({ c: "Continuous: LHP. Discrete: inside unit circle.", s: ["Bilinear transform maps between them."], a: "LHP vs unit disk" }), ref: "p.376" },
      { q: "Bode plot: pole and zero close together create:",
        choices: ["Doublet — small effect, may approximately cancel", "Large peak", "Resonance", "Instability"], correct: 0,
        solution: S({ c: "Pole-zero doublet (close together): small net contribution.", s: ["Often used intentionally in compensator design."], a: "Doublet (small effect)" }), ref: "p.366" },
      { q: "Damping ratio related to overshoot inversely:",
        choices: ["Higher $\\zeta$ → less overshoot", "Higher $\\zeta$ → more overshoot", "Independent", "Linear"], correct: 0,
        solution: S({ c: "$\\zeta = 0$: pure oscillation, 100% overshoot. $\\zeta = 1$: 0% overshoot.", s: [""], a: "Inverse" }), ref: "p.366" },
    ],

    // Comm — +8
    13: [
      { q: "Bit error probability (BEP) for BPSK in AWGN: ",
        choices: ["$Q(\\sqrt{2E_b/N_0})$", "$E_b/N_0$", "$1/N_0$", "$\\log_2 M$"], correct: 0,
        solution: S({ c: "Standard BPSK BER formula.", s: ["$Q(x)$ = standard normal upper tail."], a: "$Q(\\sqrt{2E_b/N_0})$" }), ref: "p.371" },
      { q: "Eye diagram crosshair height represents:",
        choices: ["Noise margin", "Bandwidth", "Frequency", "Phase"], correct: 0,
        solution: S({ c: "Eye opening height: how much noise tolerable before bit error.", s: ["Width: timing margin."], a: "Noise margin" }), ref: "p.371" },
      { q: "Forward Error Correction (FEC) trades:",
        choices: ["Bandwidth (redundancy) for lower error rate", "Speed for accuracy", "Both", "Power for noise"], correct: 0,
        solution: S({ c: "FEC: add redundant bits → receiver can detect/correct errors.", s: ["Cost: less efficient use of bandwidth."], a: "BW for error rate" }), ref: "p.371" },
      { q: "Reed-Solomon codes are good for:",
        choices: ["Burst errors (used in CDs, QR codes, DSL)", "Random errors only", "Encryption", "Compression"], correct: 0,
        solution: S({ c: "RS: corrects burst errors well due to symbol-based coding.", s: ["Used: CDs (scratches), DSL, QR codes."], a: "Burst errors" }), ref: "p.371" },
      { q: "Eye pattern closure due to:",
        choices: ["ISI (inter-symbol interference) and jitter", "Higher bandwidth", "Better SNR", "Lower freq"], correct: 0,
        solution: S({ c: "ISI: previous symbol's tail affecting current decision.", s: ["Jitter: timing variation. Both close the eye → more bit errors."], a: "ISI + jitter" }), ref: "p.371" },
      { q: "Bandwidth efficient modulation chooses higher M when:",
        choices: ["SNR is high enough to distinguish more constellation points", "Low SNR", "Low cost", "Always"], correct: 0,
        solution: S({ c: "More constellation points → tighter spacing → need higher SNR.", s: ["64-QAM (6 bps/Hz) needs ~28 dB; QPSK (2 bps/Hz) needs ~10 dB for similar BER."], a: "High SNR" }), ref: "p.371" },
      { q: "Coherent demodulation requires:",
        choices: ["Carrier phase and frequency reference at receiver", "Only frequency", "Nothing extra", "Higher power"], correct: 0,
        solution: S({ c: "Coherent receiver: needs to know carrier phase to demodulate.", s: ["Phase recovery: PLL or pilot-aided."], a: "Carrier reference" }), ref: "p.371" },
      { q: "Signal-to-noise ratio (SNR) units:",
        choices: ["Dimensionless ratio (often in dB)", "Watts", "Hz", "V"], correct: 0,
        solution: S({ c: "Power ratio, dimensionless. dB = $10\\log_{10}(S/N)$.", s: [""], a: "Ratio (dB common)" }), ref: "p.371" },
    ],

    // Networks — +5
    14: [
      { q: "DNS query types: A record vs MX:",
        choices: ["A: name to IPv4; MX: mail server", "Same", "A is for email", "MX is for IPv6"], correct: 0,
        solution: S({ c: "Various DNS record types serve different purposes.", s: ["AAAA: IPv6. CNAME: alias. TXT: arbitrary text."], a: "A: IP; MX: mail" }), ref: "p.400" },
      { q: "HTTPS vs HTTP differences:",
        choices: ["HTTPS adds TLS encryption layer (typically port 443)", "Same", "HTTPS is slower always", "Different content"], correct: 0,
        solution: S({ c: "HTTPS: HTTP-over-TLS.", s: ["Encrypts client-server communication. Modern web standard."], a: "TLS encryption" }), ref: "p.412" },
      { q: "TCP socket: identified by:",
        choices: ["(local IP, local port, remote IP, remote port) — 4-tuple", "Just IP", "Port only", "MAC"], correct: 0,
        solution: S({ c: "TCP connection 4-tuple uniquely identifies a connection.", s: ["Allows multiple connections between same two hosts on different port pairs."], a: "4-tuple" }), ref: "p.400" },
      { q: "Half-open TCP connection (SYN flood attack):",
        choices: ["Attacker sends SYN but never ACK — exhausts server resources", "Closes properly", "Normal traffic", "Application layer"], correct: 0,
        solution: S({ c: "DoS technique: many SYNs without follow-up ACK fill server's connection table.", s: ["Mitigation: SYN cookies, rate limiting, firewalls."], a: "DoS attack" }), ref: "p.412" },
      { q: "Inter-domain routing protocol used between ISPs:",
        choices: ["BGP", "OSPF", "RIP", "ARP"], correct: 0,
        solution: S({ c: "BGP (Border Gateway Protocol): policy-based path vector between ASes.", s: ["OSPF / RIP: intra-AS (within single network)."], a: "BGP" }), ref: "p.400" },
    ],

    // Digital — +10
    15: [
      { q: "JK FF excitation table: from $Q=0$ to $Q^+ = 1$:",
        choices: ["$J=1$, $K=$ don't care", "$J=K=0$", "$J=0$, $K=1$", "Both 1"], correct: 0,
        solution: S({ c: "Transition 0→1: set (J=1) or toggle (J=K=1). K doesn't matter when Q=0.", s: [""], a: "$J=1, K=X$" }), ref: "p.391" },
      { q: "Race condition in async circuits caused by:",
        choices: ["Multiple inputs changing near-simultaneously", "Single input", "Slow clock", "Static signals"], correct: 0,
        solution: S({ c: "Race: outcome depends on which input change reaches output first.", s: ["Mitigation: synchronous design with clock-driven FFs."], a: "Concurrent changes" }), ref: "p.391" },
      { q: "PLA (Programmable Logic Array): both AND and OR planes programmable. Cost vs PAL:",
        choices: ["More flexible but slower/more area", "Always faster", "Always cheaper", "Identical"], correct: 0,
        solution: S({ c: "PLA: full flexibility. PAL: fixed OR plane → simpler, faster.", s: [""], a: "Flexible but slower" }), ref: "p.390" },
      { q: "FPGA configuration storage:",
        choices: ["SRAM (volatile, reconfigurable)", "ROM", "Hard-coded", "Magnetic"], correct: 0,
        solution: S({ c: "Most FPGAs: SRAM-based config → erased on power-off, reloaded on power-up.", s: ["Anti-fuse FPGAs: one-time programmable.", "Flash FPGAs: non-volatile."], a: "SRAM" }), ref: "p.391" },
      { q: "Sequential vs combinational logic:",
        choices: ["Sequential has memory (state); combinational only present inputs", "Same", "Combinational is faster", "Sequential is older"], correct: 0,
        solution: S({ c: "Combinational: output = $f(\\text{current inputs})$.", s: ["Sequential: output = $f(\\text{inputs, state})$ — includes FFs/latches."], a: "Memory vs not" }), ref: "p.391" },
      { q: "Setup-hold violation result:",
        choices: ["Metastability — output may settle to wrong value or oscillate briefly", "Damage", "Reset", "Speed up"], correct: 0,
        solution: S({ c: "Metastable: not a clean 0 or 1 for some time before resolving.", s: ["Synchronizer chain mitigates between clock domains."], a: "Metastability" }), ref: "p.391" },
      { q: "Number of inputs to 16-to-1 MUX (data + select):",
        choices: ["16 data + 4 select = 20", "16", "20", "32"], correct: 0,
        solution: S({ c: "MUX with $N$ inputs needs $\\log_2 N$ select lines.", s: ["16 data + 4 select."], a: "20 total" }), ref: "p.390" },
      { q: "BCD adder for 9 + 1: result needs correction (add 6) because:",
        choices: ["10 > 9 valid BCD; must produce '10' as two digits", "BCD only goes to 9", "Same as binary", "Random"], correct: 0,
        solution: S({ c: "BCD invalid: digit > 9. Add 6 (0110) to shift into next BCD digit.", s: [""], a: "Carry to next decade" }), ref: "p.390" },
      { q: "Gray code adjacent values differ by 1 bit, advantage in:",
        choices: ["Encoders, K-maps, async circuits — avoids transient incorrect codes", "Faster computation", "Encryption", "Compression"], correct: 0,
        solution: S({ c: "Gray code: only one transition at a time → no glitch on transitions.", s: [""], a: "Glitch avoidance" }), ref: "p.388" },
      { q: "Synchronous FSM design steps:",
        choices: ["State diagram → state table → state encoding → logic equations", "Random", "Just write code", "Start with hardware"], correct: 0,
        solution: S({ c: "Standard methodology for state machine design.", s: [""], a: "Standard flow" }), ref: "p.391" },
    ],

    // CompSys — +10
    16: [
      { q: "Big-endian byte order: 0x12345678 in memory at address 0x100:",
        choices: ["100:12, 101:34, 102:56, 103:78", "100:78, 101:56, 102:34, 103:12", "Random", "All same"], correct: 0,
        solution: S({ c: "Big-endian: MSB first (at low address).", s: ["Used: network byte order (TCP/IP), SPARC, PowerPC."], a: "MSB at low address" }), ref: "p.408" },
      { q: "Memory hierarchy access times (typical):",
        choices: ["Register: <1 ns, L1: 1-3 ns, L2: 5-15 ns, RAM: 50-100 ns, SSD: 25 µs, HDD: 5 ms", "All similar", "DRAM fastest", "Tape fast"], correct: 0,
        solution: S({ c: "Each tier roughly 10× slower as we go down.", s: [""], a: "Wide range" }), ref: "p.407" },
      { q: "Spinning waiting (busy-wait) loop:",
        choices: ["Wastes CPU cycles", "Saves power", "Faster", "Used for I/O"], correct: 0,
        solution: S({ c: "Busy-wait: CPU loops checking condition.", s: ["Alternative: blocking with interrupt/wakeup. Better for low-CPU."], a: "Wastes CPU" }), ref: "p.408" },
      { q: "RAID 5: requires minimum disks:",
        choices: ["$3$ (data + distributed parity)", "$2$", "$4$", "$5$"], correct: 0,
        solution: S({ c: "RAID 5: striping with distributed parity. Min 3 disks.", s: ["Tolerates 1 disk failure.", "Capacity: $(N-1) \\cdot \\text{disk size}$."], a: "$3$" }), ref: "p.407" },
      { q: "RAID 10 (1+0): combines:",
        choices: ["Mirroring + striping (typically 4+ disks)", "Just striping", "Just parity", "Three different schemes"], correct: 0,
        solution: S({ c: "RAID 10: stripe across mirrored pairs.", s: ["Performance of striping + redundancy of mirroring."], a: "Mirror + stripe" }), ref: "p.407" },
      { q: "x86 vs ARM instruction set:",
        choices: ["x86: CISC, variable length; ARM: RISC, fixed length", "Same", "x86 is RISC", "ARM is CISC"], correct: 0,
        solution: S({ c: "x86: complex instructions, variable encoding 1-15 bytes.", s: ["ARM: 32-bit fixed (AArch32) or 16/32-bit mixed (Thumb), simpler decode."], a: "CISC vs RISC" }), ref: "p.408" },
      { q: "Out-of-order (OoO) execution:",
        choices: ["Reorder instructions for parallelism while preserving observable semantics", "Slower", "Skip instructions", "Linear"], correct: 0,
        solution: S({ c: "OoO: execute when operands ready, in any order, then retire in program order.", s: ["Major performance gain over in-order CPUs."], a: "Reorder for ILP" }), ref: "p.408" },
      { q: "DMA controller benefits:",
        choices: ["Offloads I/O bulk transfers from CPU", "Faster CPU", "More memory", "Reduces cost"], correct: 0,
        solution: S({ c: "DMA transfers without CPU intervention.", s: ["CPU can compute while DMA moves data."], a: "Offloads CPU" }), ref: "p.408" },
      { q: "Memory-mapped I/O:",
        choices: ["I/O devices appear as memory addresses", "I/O has own bus", "Special instructions", "Same as paging"], correct: 0,
        solution: S({ c: "MMIO: device registers in memory address space → load/store access.", s: ["Alternative: port-mapped I/O (x86 IN/OUT)."], a: "Devices in memory space" }), ref: "p.408" },
      { q: "Cache thrashing:",
        choices: ["Repeated misses due to working set > cache", "Cache hit", "Fast access", "Coherence"], correct: 0,
        solution: S({ c: "Working set doesn't fit → cache evicts useful data, then refetches.", s: ["Performance plummets.", "Mitigation: larger cache, better algorithms with locality."], a: "Excessive misses" }), ref: "p.407" },
    ],

    // Software — +8
    17: [
      { q: "Big-O of insertion sort (worst case):",
        choices: ["$O(n^2)$", "$O(n)$", "$O(n\\log n)$", "$O(\\log n)$"], correct: 0,
        solution: S({ c: "Insertion sort: shift elements in inner loop.", s: ["Best case (sorted input): O(n)."], a: "$O(n^2)$" }), ref: "p.415" },
      { q: "Insertion sort best case:",
        choices: ["$O(n)$ (already sorted input)", "$O(n^2)$", "$O(\\log n)$", "$O(1)$"], correct: 0,
        solution: S({ c: "Already sorted: each insertion is O(1) (no shift).", s: ["Useful for nearly-sorted data."], a: "$O(n)$" }), ref: "p.415" },
      { q: "Linked list vs array memory:",
        choices: ["List: extra pointer per node; Array: contiguous, less overhead per element", "Same", "List always smaller", "Array always larger"], correct: 0,
        solution: S({ c: "Linked list: O(1) extra per node for pointer(s).", s: ["Array: just data elements + length field."], a: "List has pointer overhead" }), ref: "p.415" },
      { q: "Recursion vs iteration: memory:",
        choices: ["Recursion uses stack frames (more memory)", "Iteration more memory", "Same", "Random"], correct: 0,
        solution: S({ c: "Each recursive call adds stack frame.", s: ["Tail-call optimization (in some languages): equivalent to iteration."], a: "Recursion: more stack" }), ref: "p.415" },
      { q: "Hash function for strings: must:",
        choices: ["Be deterministic, distribute uniformly", "Random", "Always 0", "Use only first char"], correct: 0,
        solution: S({ c: "Good hash: same input → same output, uniform distribution.", s: ["Common: polynomial hash, FNV, MurmurHash, xxHash."], a: "Deterministic + uniform" }), ref: "p.415" },
      { q: "Sorted array search:",
        choices: ["$O(\\log n)$ with binary search", "$O(n)$", "$O(1)$", "$O(n^2)$"], correct: 0,
        solution: S({ c: "Binary search on sorted array.", s: [""], a: "$O(\\log n)$" }), ref: "p.415" },
      { q: "Stack overflow in recursion:",
        choices: ["Too deep recursion exhausts stack memory", "RAM full", "Heap leak", "GC fail"], correct: 0,
        solution: S({ c: "Each recursive call uses stack. Deep recursion → stack overflow.", s: ["Iterative version or TCO avoids this."], a: "Stack exhaustion" }), ref: "p.408" },
      { q: "DFS traversal order on binary tree (root, then recursively):",
        choices: ["Preorder, inorder, postorder variants", "BFS only", "Random", "Just one order"], correct: 0,
        solution: S({ c: "Preorder: root, left, right. Inorder: left, root, right. Postorder: left, right, root.", s: ["Inorder of BST: sorted output."], a: "Three variants" }), ref: "p.415" },
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
  console.log(`Pack 8: +${added} → bank total ${total}`);
})();
