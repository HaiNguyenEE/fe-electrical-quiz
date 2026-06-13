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
        choices: ["$\\approx 2.005$", "$2$", "$1.9$", "$2.2$"], correct: 0,
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
        choices: ["$1 - C(48,5)/C(52,5) \\approx 0.341$", "$4/52$", "$20/52$", "$5/52$"], correct: 0,
        solution: S({
          c: "Use the COMPLEMENT: $P(\\ge 1) = 1 - P(\\text{none})$, where P(no aces) = $C(48,5)/C(52,5)$.",
          s: ["<b>Step 1 — No aces.</b> $C(48,5)/C(52,5) = 1{,}712{,}304/2{,}598{,}960 = 0.659$.","<b>Step 2 — Complement.</b> $1 - 0.659 = 0.341$.","<b>Step 3 — Distractor audit.</b> $4/52$, $20/52$, $5/52$ are naive single-/scaled-card probabilities that ignore the without-replacement counting."],
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
      { q: "Phasor representation of $5\\cos(\\omega t - 30°)$ V using the PEAK convention:",
        choices: ["$5\\angle -30°$ V", "$5\\angle 30°$ V", "$3.54\\angle -30°$ V", "$5\\angle -60°$ V"], correct: 0,
        solution: S({
          c: "Phasor = amplitude at phase angle. Using the PEAK convention, $5\\cos(\\omega t-30°) \\to 5\\angle-30°$.",
          s: ["<b>Step 1 — Match.</b> Peak amplitude 5 at angle $-30°$ → $5\\angle-30°$.","<b>Step 2 — Distractor audit.</b> $5\\angle+30°$ flips the sign; $3.54\\angle-30°$ is the RMS magnitude (wrong under the stated peak convention); $5\\angle-60°$ doubles the angle."],
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
        solution: S({
          c: "At the break (corner) frequency, a first-order pole is EXACTLY -3 dB below the low-frequency asymptote; the straight-line asymptotes meet at 0 dB there.",
          s: ["<b>Step 1 — Match.</b> -3 dB exact (asymptotes meet at 0 dB).","<b>Step 2 — Distractor audit.</b> 0 dB is the asymptote (not exact); -20 dB is a decade above; -6 dB is wrong."],
          a: "-3 dB at the break.",
          v: "The -3 dB (half-power) point DEFINES the corner frequency - the actual curve sags 3 dB below the idealized straight-line asymptotes at that single point."
        }), ref: "p.366" },
      { q: "Frequency at which 2nd-order system magnitude peaks (for $\\zeta < 0.707$):",
        choices: ["$\\omega_r = \\omega_n\\sqrt{1-2\\zeta^2}$", "$\\omega_n$", "$\\omega_d$", "$2\\omega_n$"], correct: 0,
        solution: S({
          c: "The RESONANT peak frequency is $\\omega_r = \\omega_n\\sqrt{1-2\\zeta^2}$ - slightly below $\\omega_n$, and it only EXISTS when $\\zeta < 0.707$.",
          s: ["<b>Step 1 — Match.</b> $\\omega_r = \\omega_n\\sqrt{1-2\\zeta^2}$.","<b>Step 2 — Distractor audit.</b> $\\omega_n$ is the natural freq; $\\omega_d$ is the DAMPED (transient) freq; $2\\omega_n$ is wrong."],
          a: "$\\omega_r = \\omega_n\\sqrt{1-2\\zeta^2}$.",
          v: "Note THREE distinct frequencies: $\\omega_n$ (natural), $\\omega_d=\\omega_n\\sqrt{1-\\zeta^2}$ (damped ringing), $\\omega_r=\\omega_n\\sqrt{1-2\\zeta^2}$ (frequency-response peak). Above $\\zeta=0.707$ there's no peak at all."
        }), ref: "p.366" },
      { q: "Peak magnitude: $M_r = $",
        choices: ["$1/(2\\zeta\\sqrt{1-\\zeta^2})$", "$1$", "$1/\\zeta$", "$\\omega_n$"], correct: 0,
        solution: S({
          c: "The resonant peak magnitude (for $\\zeta<0.707$) is $M_r = \\dfrac{1}{2\\zeta\\sqrt{1-\\zeta^2}}$ - it grows large as damping shrinks.",
          s: ["<b>Step 1 — Match.</b> $1/(2\\zeta\\sqrt{1-\\zeta^2})$.","<b>Step 2 — Distractor audit.</b> 1, $1/\\zeta$, $\\omega_n$ aren't the peak formula."],
          a: "$M_r = 1/(2\\zeta\\sqrt{1-\\zeta^2})$.",
          v: "Low damping (high Q) means a tall, sharp resonant peak - $\\zeta=0.1$ gives $M_r\\approx5$ (a 5x amplification at resonance). This is why lightly-damped systems can over-respond to inputs near $\\omega_r$."
        }), ref: "p.366" },
      { q: "Laplace of derivative $f'(t)$:",
        choices: ["$sF(s) - f(0^-)$", "$F(s)/s$", "$F(s) + f(0)$", "$sf(0)$"], correct: 0,
        solution: S({
          c: "Laplace differentiation rule: $\\mathcal L\\{f'(t)\\} = sF(s) - f(0^-)$ - multiply by s, subtract the initial value.",
          s: ["<b>Step 1 — Match.</b> $sF(s) - f(0^-)$.","<b>Step 2 — Distractor audit.</b> $F(s)/s$ is integration; the others are wrong."],
          a: "$sF(s) - f(0)$.",
          v: "The $-f(0)$ term carries the INITIAL CONDITION into the solution - which is exactly why Laplace transforms solve initial-value ODEs so cleanly (algebra instead of calculus)."
        }), ref: "p.56" },
      { q: "Laplace of $\\int_0^t f(\\tau) d\\tau$:",
        choices: ["$F(s)/s$", "$sF(s)$", "$F(s)$", "$1/F(s)$"], correct: 0,
        solution: S({
          c: "Laplace integration rule: dividing by s. $\\mathcal L\\{\\int_0^t f\\,d\\tau\\} = F(s)/s$.",
          s: ["<b>Step 1 — Match.</b> $F(s)/s$.","<b>Step 2 — Distractor audit.</b> $sF(s)$ is differentiation; the others are wrong."],
          a: "$F(s)/s$.",
          v: "Differentiation = multiply by s, integration = divide by s - the s-domain turns calculus into algebra. The $1/s$ factor is literally an integrator block."
        }), ref: "p.56" },
      { q: "Laplace shifting: $\\mathcal{L}\\{e^{-at}f(t)\\}$:",
        choices: ["$F(s+a)$", "$F(s-a)$", "$F(s)/a$", "$e^{-a}F(s)$"], correct: 0,
        solution: S({
          c: "First shifting theorem (frequency shift): multiplying by $e^{-at}$ in time replaces $s$ with $s+a$ in the transform: $F(s+a)$.",
          s: ["<b>Step 1 — Match.</b> $F(s+a)$.","<b>Step 2 — Distractor audit.</b> $F(s-a)$ has the wrong sign; the others don't follow the theorem."],
          a: "$F(s+a)$.",
          v: "An $e^{-at}$ envelope shifts the poles LEFT by a (more stable / faster decay) - which is how you get damped sinusoids like $e^{-at}\\sin(\\omega t)$ from plain sines."
        }), ref: "p.56" },
      { q: "Final value of step response $y(t)$ for stable LTI system: ",
        choices: ["DC gain × input magnitude", "Always 0", "Always 1", "Unbounded"], correct: 0,
        solution: S({
          c: "For a stable system, the step response settles to the DC gain times the step magnitude: $y(\\infty) = H(0)\\times(\\text{step})$.",
          s: ["<b>Step 1 — Match.</b> DC gain x input magnitude.","<b>Step 2 — Distractor audit.</b> Not 'always 0/1'; unbounded only for unstable systems."],
          a: "$H(0)\\times$ step.",
          v: "This is the Final Value Theorem result - valid only if the system is STABLE (all poles in the LHP). The dynamics fade and only the DC behavior remains."
        }), ref: "p.56" },
      { q: "Settling time relationship to $\\zeta\\omega_n$ in 2nd-order system:",
        choices: ["$t_s \\approx 4/(\\zeta\\omega_n)$ for 2% settling", "$1/\\zeta$", "$\\omega_n$", "Independent"], correct: 0,
        solution: S({
          c: "The response envelope decays as $e^{-\\zeta\\omega_n t}$, so 2% settling takes about 4 of those time constants: $t_s \\approx 4/(\\zeta\\omega_n)$.",
          s: ["<b>Step 1 — Match.</b> $t_s \\approx 4/(\\zeta\\omega_n)$ (2%).","<b>Step 2 — Distractor audit.</b> $1/\\zeta$, $\\omega_n$ alone, 'independent' miss the product."],
          a: "$t_s \\approx 4/(\\zeta\\omega_n)$.",
          v: "$\\zeta\\omega_n$ (the pole's real part) governs settling - push poles further LEFT to settle faster. Use 3 instead of 4 for the 5% band."
        }), ref: "p.366" },
      { q: "Underdamped 2nd-order: peak time $t_p = ?$",
        choices: ["$\\pi/\\omega_d$", "$\\omega_n$", "$0$", "$\\zeta$"], correct: 0,
        solution: S({
          c: "The first overshoot peak occurs at $t_p = \\pi/\\omega_d$, where $\\omega_d = \\omega_n\\sqrt{1-\\zeta^2}$ is the damped frequency.",
          s: ["<b>Step 1 — Match.</b> $\\pi/\\omega_d$.","<b>Step 2 — Distractor audit.</b> $\\omega_n$, 0, $\\zeta$ aren't a time."],
          a: "$t_p = \\pi/\\omega_d$.",
          v: "Peak time is half the damped oscillation PERIOD (the first crest) - higher $\\omega_d$ means a faster-peaking, snappier response. Only underdamped systems overshoot and have a peak time."
        }), ref: "p.366" },
      { q: "Rise time of overdamped 2nd-order system:",
        choices: ["Slower than critically damped", "Faster", "Same", "Zero"], correct: 0,
        solution: S({
          c: "An OVERDAMPED system (two real poles, $\\zeta>1$) rises SLOWER than a critically-damped one - it's sluggish, with no overshoot.",
          s: ["<b>Step 1 — Match.</b> Slower than critically damped.","<b>Step 2 — Distractor audit.</b> Not faster, same, or zero."],
          a: "Slower than critically damped.",
          v: "Critical damping ($\\zeta=1$) is the FASTEST response with NO overshoot - overdamped is slower (over-braked), underdamped is faster but overshoots/rings. Critical is the sweet spot for no-overshoot speed."
        }), ref: "p.366" },
    ],

    // Signal — +10
    8: [
      { q: "Discrete Fourier Transform (DFT) of N samples produces:",
        choices: ["N complex frequency bins", "N real bins", "1 number", "Infinite"], correct: 0,
        solution: S({
          c: "An N-point DFT produces N complex frequency bins (magnitude and phase at each).",
          s: ["<b>Step 1 — Match.</b> N complex frequency bins.","<b>Step 2 — Distractor audit.</b> Bins are COMPLEX not real; not 1 number or infinite."],
          a: "N complex bins.",
          v: "Each bin carries magnitude AND phase. For a real input the bins are conjugate-symmetric, so only N/2+1 are independent - but the DFT itself outputs N complex values."
        }), ref: "p.376" },
      { q: "FFT complexity vs direct DFT:",
        choices: ["$O(N\\log N)$ vs $O(N^2)$", "Same", "FFT slower", "Direct faster"], correct: 0,
        solution: S({
          c: "The Fast Fourier Transform computes the DFT in $O(N\\log N)$ vs the direct $O(N^2)$ - by recursively exploiting symmetry (divide and conquer).",
          s: ["<b>Step 1 — Match.</b> $O(N\\log N)$ vs $O(N^2)$.","<b>Step 2 — Distractor audit.</b> Not 'same'; FFT is faster, not slower."],
          a: "$O(N\\log N)$ vs $O(N^2)$.",
          v: "For N=1024: ~10,000 ops (FFT) vs ~1,000,000 (direct) - a 100x speedup that made real-time spectral analysis practical. The savings grow with N."
        }), ref: "p.376" },
      { q: "Sinc function $\\text{sinc}(x) = \\sin(\\pi x)/(\\pi x)$. Value at $x = 0$:",
        choices: ["$1$ (limit)", "$0$", "Undefined", "$\\infty$"], correct: 0,
        solution: S({
          c: "At $x=0$, sinc is a removable singularity (0/0) whose limit is 1: $\\lim_{x\\to0}\\dfrac{\\sin(\\pi x)}{\\pi x}=1$.",
          s: ["<b>Step 1 — Match.</b> 1 (the limit).","<b>Step 2 — Distractor audit.</b> 0 is where it CROSSES at integer x; not undefined or infinite."],
          a: "$1$.",
          v: "sinc(0)=1, with zeros at every nonzero integer x - this shape is the impulse response of an ideal low-pass filter and the heart of the sampling/reconstruction theorem."
        }), ref: "p.376" },
      { q: "Ideal LPF impulse response in time domain:",
        choices: ["Sinc function (non-causal)", "Delta", "Step", "Exponential"], correct: 0,
        solution: S({
          c: "An ideal (brick-wall) low-pass filter has a SINC impulse response - the inverse Fourier transform of a rectangular passband. It extends infinitely in BOTH directions, making it non-causal.",
          s: ["<b>Step 1 — Match.</b> Sinc (non-causal).","<b>Step 2 — Distractor audit.</b> Delta is a pass-through; step and exponential aren't the ideal LPF response."],
          a: "Sinc function (non-causal).",
          v: "Because the sinc extends to t<0, an ideal LPF can't be built (would need to respond before the input) - which is why real filters (Butterworth, Chebyshev) APPROXIMATE it with causal, finite responses."
        }), ref: "p.376" },
      { q: "Sampled signal spectrum is:",
        choices: ["Periodic with period $f_s$", "Constant", "Single tone", "Random"], correct: 0,
        solution: S({
          c: "Sampling a signal in time makes its spectrum PERIODIC, repeating every $f_s$ (the sample rate) - the spectrum is replicated at each multiple of $f_s$.",
          s: ["<b>Step 1 — Match.</b> Periodic with period $f_s$.","<b>Step 2 — Distractor audit.</b> Not constant, single-tone, or random."],
          a: "Periodic (period $f_s$).",
          v: "These spectral REPLICAS are why aliasing happens: if the original spectrum is wider than $f_s/2$, adjacent copies overlap and corrupt the baseband - hence the Nyquist requirement and anti-alias filtering."
        }), ref: "p.375" },
      { q: "Anti-aliasing filter ideal cutoff:",
        choices: ["$f_s/2$ (Nyquist)", "$f_s$", "$2f_s$", "$0$"], correct: 0,
        solution: S({
          c: "The ideal anti-aliasing cutoff is the Nyquist frequency $f_s/2$ - remove everything above it before sampling.",
          s: ["<b>Step 1 — Match.</b> $f_s/2$ (Nyquist).","<b>Step 2 — Distractor audit.</b> $f_s$, $2f_s$ are too high; 0 removes everything."],
          a: "$f_s/2$.",
          v: "In practice you cut off somewhat BELOW $f_s/2$ to leave room for the filter's finite roll-off (the transition band) - which is partly why CD audio samples at 44.1 kHz for a 20-kHz limit."
        }), ref: "p.375" },
      { q: "Decimation by factor $M$: input rate $f_s$ → output rate:",
        choices: ["$f_s/M$", "$Mf_s$", "$f_s$", "$0$"], correct: 0,
        solution: S({
          c: "Decimation by M keeps every Mth sample, so the output rate is $f_s/M$.",
          s: ["<b>Step 1 — Match.</b> $f_s/M$.","<b>Step 2 — Distractor audit.</b> $Mf_s$ is interpolation (upsampling); $f_s$ is unchanged; 0 is wrong."],
          a: "$f_s/M$.",
          v: "You MUST low-pass filter first (to below the new Nyquist $f_s/2M$) or discarded high frequencies alias - decimation is the downsampling half of multirate DSP."
        }), ref: "p.375" },
      { q: "Interpolation by factor $L$: insert zeros between samples then:",
        choices: ["LPF to remove images", "Multiply", "Done", "Decimate"], correct: 0,
        solution: S({
          c: "Interpolation (upsampling) by L: insert L-1 zeros between samples, then LOW-PASS FILTER to remove the spectral images that zero-stuffing creates.",
          s: ["<b>Step 1 — Match.</b> LPF to remove images.","<b>Step 2 — Distractor audit.</b> 'Multiply', 'done', 'decimate' skip the essential filtering step."],
          a: "Low-pass filter (to remove images).",
          v: "Zero-stuffing alone creates copies of the spectrum; the LPF (interpolation filter) smooths them out, computing the in-between sample values - the upsampling counterpart to decimation."
        }), ref: "p.375" },
      { q: "Total harmonic distortion (THD): measure of:",
        choices: ["Signal purity (lower = cleaner)", "Bandwidth", "Phase", "Noise floor"], correct: 0,
        solution: S({
          c: "THD measures signal PURITY - the ratio of total harmonic power to the fundamental. Lower THD = cleaner, more linear signal.",
          s: ["<b>Step 1 — Match.</b> Signal purity (lower = cleaner).","<b>Step 2 — Distractor audit.</b> Bandwidth, phase, and noise floor are separate specs — THD is specifically harmonic content relative to the fundamental."],
          a: "Signal purity.",
          v: "Quality audio amps target THD below 0.01%; nonlinear distortion adds harmonics not present in the original - THD quantifies how much. It's a key spec for amplifiers and power systems."
        }), ref: "p.371" },
      { q: "Quantization noise PSD in ADC: approximately:",
        choices: ["$\\Delta^2/(12 f_s)$", "$\\Delta$", "$0$", "$\\infty$"], correct: 0,
        solution: S({
          c: "ADC quantization noise has variance $\\Delta^2/12$ (uniform over one step $\\Delta$), spread across the band $[0, f_s/2]$, giving a power spectral density $\\approx \\Delta^2/(12 f_s)$.",
          s: ["<b>Step 1 — Match.</b> $\\Delta^2/(12 f_s)$.","<b>Step 2 — Distractor audit.</b> $\\Delta$ alone, 0, infinity aren't the PSD."],
          a: "$\\Delta^2/(12 f_s)$.",
          v: "This is why OVERSAMPLING boosts SNR: the same total noise ($\\Delta^2/12$) spreads over a WIDER band, so less of it falls in the signal band - the principle behind sigma-delta converters."
        }), ref: "p.375" },
    ],

    // Electronics — +15
    9: [
      { q: "Diode equation (Shockley): $I_D = I_S(e^{V_D/(nV_T)} - 1)$. At room temp, $nV_T \\approx$:",
        choices: ["$25-50$ mV typically", "$0.7$ V", "$1$ V", "$1$ mV"], correct: 0,
        solution: S({
          c: "The thermal voltage $V_T=kT/q\\approx25.85$ mV at 300 K; with ideality factor $n$ (1 to 2), $nV_T$ is roughly 25-50 mV.",
          s: ["<b>Step 1 — Match.</b> 25-50 mV.","<b>Step 2 — Distractor audit.</b> 0.7 V is the FORWARD DROP (not $nV_T$); 1 V and 1 mV are off."],
          a: "$\\sim 25$-50 mV.",
          v: "This small $nV_T$ is why diode current changes ~10x per ~60 mV ($\\approx 2.3 nV_T$) - the steep exponential. Don't confuse it with the ~0.7 V conduction drop."
        }), ref: "p.383" },
      { q: "BJT $V_{BE}$ has temperature coefficient approximately:",
        choices: ["$-2$ mV/°C", "$+2$ mV/°C", "$0$", "$+0.7$ V"], correct: 0,
        solution: S({
          c: "$V_{BE}$ DECREASES about 2 mV for each degC rise (at fixed current).",
          s: ["<b>Step 1 — Match.</b> -2 mV/degC.","<b>Step 2 — Distractor audit.</b> +2 mV/degC has wrong sign; 0 ignores it; +0.7 V is the drop, not a coefficient."],
          a: "$-2$ mV/degC.",
          v: "This predictable -2 mV/degC is exploited in bandgap voltage references (cancelled against a +temp-coef term) and in BJT temperature sensors. It also drives thermal runaway in power BJTs."
        }), ref: "p.384" },
      { q: "Op amp input offset voltage typical:",
        choices: ["Few mV (precision: ~µV)", "$V_{cc}$", "$0$ exactly", "$1$ V"], correct: 0,
        solution: S({
          c: "Input offset voltage $V_{OS}$ is the small DC voltage needed between inputs to zero the output - typically a few mV (precision parts reach microvolts).",
          s: ["<b>Step 1 — Match.</b> Few mV (precision ~uV).","<b>Step 2 — Distractor audit.</b> Not $V_{cc}$, not exactly 0, not 1 V."],
          a: "A few mV.",
          v: "$V_{OS}$ limits DC accuracy in high-gain circuits (it gets amplified too). Chopper-stabilized/auto-zero op-amps trim it to <1 uV for precision instrumentation."
        }), ref: "p.380" },
      { q: "MOSFET $V_{GS}(\\text{th})$ for power MOSFETs typically:",
        choices: ["$1$-$4$ V", "$0$", "$10$ V", "$-5$ V"], correct: 0,
        solution: S({
          c: "Power MOSFET threshold voltage is typically 1-4 V - high enough to stay off from noise, low enough to switch.",
          s: ["<b>Step 1 — Match.</b> 1-4 V.","<b>Step 2 — Distractor audit.</b> 0 would be always-on; 10 V is too high; -5 V is a p-channel/depletion value."],
          a: "$1$-$4$ V.",
          v: "'Logic-level' MOSFETs are specified at the low end (~1-2 V threshold) so a 3.3 V or 5 V microcontroller can fully turn them on without a gate driver."
        }), ref: "p.386" },
      { q: "BJT in cutoff has $V_{BE}$:",
        choices: ["Less than 0.5 V", "Greater than 0.7", "$V_{CE}$", "$0$ exactly"], correct: 0,
        solution: S({
          c: "In CUTOFF the base-emitter junction is below its conduction threshold, so $V_{BE} < 0.5$ V and the transistor is off.",
          s: ["<b>Step 1 — Match.</b> Less than 0.5 V.","<b>Step 2 — Distractor audit.</b> >0.7 V is active/saturation; $V_{CE}$ is a different terminal; 'exactly 0' is too strict."],
          a: "$V_{BE} < 0.5$ V.",
          v: "The region map by $V_{BE}$: <0.5 V cutoff, ~0.7 V active, ~0.8 V saturation. Cutoff and saturation are the two switch states; active is the amplifying region."
        }), ref: "p.384" },
      { q: "Photovoltaic cell short-circuit current $I_{SC}$:",
        choices: ["Proportional to light intensity", "Constant", "Proportional to voltage", "Random"], correct: 0,
        solution: S({
          c: "A solar cell's short-circuit current is PROPORTIONAL to light intensity (more photons -> more electron-hole pairs -> more current).",
          s: ["<b>Step 1 — Match.</b> Proportional to light intensity.","<b>Step 2 — Distractor audit.</b> Not constant or proportional to voltage; not random."],
          a: "Proportional to light intensity.",
          v: "$I_{SC}$ scales linearly with illumination, while open-circuit VOLTAGE rises only LOGARITHMICALLY - which is why solar output is current-driven and panels are rated at standard 1000 W/m^2."
        }), ref: "p.383" },
      { q: "Differential amplifier CMRR is improved by:",
        choices: ["Matched components and current source tail", "Higher gain", "Larger transistors", "Faster"], correct: 0,
        solution: S({
          c: "CMRR improves with well-MATCHED components and a high-impedance CURRENT-SOURCE tail (vs a plain resistor) in the differential pair.",
          s: ["<b>Step 1 — Match.</b> Matched components + current-source tail.","<b>Step 2 — Distractor audit.</b> Higher gain, larger transistors, or speed don't directly set CMRR."],
          a: "Matching and a current-source tail.",
          v: "Mismatch lets common-mode signals leak to the output; the current-source tail presents huge impedance to common-mode while passing the difference - modern op-amps reach >100 dB CMRR this way."
        }), ref: "p.380" },
      { q: "Op amp output stage: push-pull complementary BJTs operate in:",
        choices: ["Class AB (slight bias to eliminate crossover)", "Class A", "Class B", "Class C"], correct: 0,
        solution: S({
          c: "Op-amp output stages use CLASS AB - a small standing bias current keeps both transistors slightly on, eliminating the crossover distortion of pure Class B.",
          s: ["<b>Step 1 — Match.</b> Class AB.","<b>Step 2 — Distractor audit.</b> Class A is inefficient (always on); Class B has crossover distortion; Class C is for RF."],
          a: "Class AB.",
          v: "Class AB gets near Class B's efficiency (~78%) while smoothing the handoff near zero crossing where Class B would distort - the standard for linear audio/op-amp output stages."
        }), ref: "p.384" },
      { q: "Transistor as switch in saturation: power loss approximately:",
        choices: ["$V_{CE,sat} \\cdot I_C$ (low)", "$V_{CC} \\cdot I_C$ (high)", "$0$", "$V_{CC}^2/R$"], correct: 0,
        solution: S({
          c: "In saturation $V_{CE}$ collapses to ~0.2 V, so conduction loss is small: $P \\approx V_{CE,sat}\\cdot I_C$.",
          s: ["<b>Step 1 — Match.</b> $V_{CE,sat}\\cdot I_C$ (low).","<b>Step 2 — Distractor audit.</b> $V_{CC}\\cdot I_C$ would be huge (linear region); 0 is ideal; $V_{CC}^2/R$ misapplies."],
          a: "$V_{CE,sat}\\cdot I_C$ (low).",
          v: "A switch is efficient in BOTH end states - saturation (low V) and cutoff (low I) dissipate little. The loss happens during the TRANSITION (linear region), so fast switching minimizes it."
        }), ref: "p.384" },
      { q: "Boost converter output ripple voltage:",
        choices: ["Depends on output cap, load, switching freq", "Constant", "Zero", "Equal to input"], correct: 0,
        solution: S({
          c: "Output ripple depends on the output capacitor, load current, duty cycle, and switching frequency: $\\Delta V \\approx I_o D/(C f_{sw})$.",
          s: ["<b>Step 1 — Match.</b> Depends on output cap, load, switching freq.","<b>Step 2 — Distractor audit.</b> It's not constant, zero, or equal to input."],
          a: "Depends on C, load, and $f_{sw}$.",
          v: "Bigger output capacitance or higher switching frequency reduces ripple - the design trade is cost/size vs ripple. The output cap supplies the load while the switch is off."
        }), ref: "p.383" },
      { q: "Voltage-controlled current source: ideal output impedance:",
        choices: ["Infinite", "Zero", "$R$", "Variable"], correct: 0,
        solution: S({
          c: "An ideal current source delivers the same current regardless of load voltage, so its output impedance is INFINITE.",
          s: ["<b>Step 1 — Match.</b> Infinite.","<b>Step 2 — Distractor audit.</b> Zero is an ideal VOLTAGE source; R and 'variable' are non-ideal."],
          a: "Infinite.",
          v: "Infinite output impedance = current independent of voltage (a flat horizontal I-V line). A MOSFET in saturation approximates it; real sources have large but finite output Z."
        }), ref: "p.380" },
      { q: "Ideal current source output current:",
        choices: ["Independent of load voltage", "Linear in V", "Zero", "Equal to V"], correct: 0,
        solution: S({
          c: "An ideal current source pushes a FIXED current regardless of the load voltage across it.",
          s: ["<b>Step 1 — Match.</b> Independent of load voltage.","<b>Step 2 — Distractor audit.</b> Not linear in V (that's a resistor), not zero, not equal to V."],
          a: "Constant (load-independent).",
          v: "The dual of an ideal voltage source (fixed V, any current). The current source fixes I and lets V be whatever the load demands - the source supplies whatever voltage is needed."
        }), ref: "p.356" },
      { q: "Photodiode reverse-biased: current proportional to:",
        choices: ["Optical power incident on junction", "Bias voltage", "Temperature only", "Random"], correct: 0,
        solution: S({
          c: "A reverse-biased photodiode's photocurrent is proportional to the INCIDENT OPTICAL POWER, largely independent of the bias voltage.",
          s: ["<b>Step 1 — Match.</b> Optical power on the junction.","<b>Step 2 — Distractor audit.</b> Not the bias voltage (it just sets the operating mode), not temperature-only, not random."],
          a: "Incident optical power.",
          v: "This linear light-to-current response makes the photodiode an excellent optical sensor - reverse bias widens the depletion region for speed and keeps the photocurrent proportional to light."
        }), ref: "p.383" },
      { q: "Op amp bandwidth-gain tradeoff: high gain implies:",
        choices: ["Low bandwidth (constant GBW)", "High bandwidth", "Same", "Unrelated"], correct: 0,
        solution: S({
          c: "Gain x Bandwidth = constant (the GBW product), so HIGH closed-loop gain means LOW bandwidth.",
          s: ["<b>Step 1 — Match.</b> Low bandwidth.","<b>Step 2 — Distractor audit.</b> Not high bandwidth, same, or unrelated - they trade off inversely."],
          a: "Low bandwidth.",
          v: "With GBW = 1 MHz, gain 100 gives 10 kHz bandwidth, gain 10 gives 100 kHz. To get both high gain AND bandwidth, cascade lower-gain stages."
        }), ref: "p.380" },
      { q: "Class D amplifier efficiency typical:",
        choices: ["$> 90\\%$ (switching mode)", "$25\\%$", "$50\\%$", "$78\\%$"], correct: 0,
        solution: S({
          c: "Class D (switching) amplifiers reach >90% efficiency because the transistors are fully ON or OFF, dissipating little power.",
          s: ["<b>Step 1 — Match.</b> >90% (switching mode).","<b>Step 2 — Distractor audit.</b> 25% is Class A; 50% is transformer Class A; 78% is Class B."],
          a: ">90%.",
          v: "Like a switch (low loss in both states), Class D modulates a high-frequency PWM signal then filters it back to analog - the high efficiency is why it dominates modern audio and motor drives."
        }), ref: "p.384" },
    ],

    // Power — +15
    10: [
      { q: "Single-phase service voltage in US households (RMS, line to neutral):",
        choices: ["$120$ V", "$240$ V", "$208$ V", "$480$ V"], correct: 0,
        solution: S({
          c: "US homes use 120/240 V split-phase: line-to-neutral is 120 V (and line-to-line 240 V).",
          s: ["<b>Step 1 — Match.</b> 120 V.","<b>Step 2 — Distractor audit.</b> 240 V is line-to-line; 208/480 are three-phase systems."],
          a: "120 V.",
          v: "A center-tapped transformer gives two 120 V legs (180 deg apart) for outlets and 240 V across them for big appliances. Europe uses 230 V line-neutral."
        }), ref: "p.363" },
      { q: "Common 3-phase voltages in US commercial:",
        choices: ["208/120 (small), 480/277 (large)", "230/400", "Only 600V", "12kV"], correct: 0,
        solution: S({
          c: "US commercial three-phase: 208Y/120 V for smaller buildings, 480Y/277 V for larger ones.",
          s: ["<b>Step 1 — Match.</b> 208/120 (small), 480/277 (large).","<b>Step 2 — Distractor audit.</b> 230/400 is European; 'only 600V' and 12kV are wrong for this scale."],
          a: "208 or 480 (Y systems).",
          v: "The pairs follow the wye $\\sqrt3$ rule: $208/\\sqrt3=120$, $480/\\sqrt3=277$. The line-line value runs motors; the line-neutral value runs lighting (277 V) and outlets (120 V)."
        }), ref: "p.363" },
      { q: "Transmission line model: short line (<80 km), use:",
        choices: ["Series impedance only", "Distributed", "ABCD", "Pi model"], correct: 0,
        solution: S({
          c: "For a SHORT line (<80 km), shunt capacitance is negligible - model it as just the series impedance R + jX.",
          s: ["<b>Step 1 — Match.</b> Series impedance only.","<b>Step 2 — Distractor audit.</b> Pi-model is for MEDIUM lines (80-250 km); distributed/ABCD for LONG lines."],
          a: "Series impedance only.",
          v: "The model ladder: short -> series R+jX; medium -> add shunt C (nominal-pi); long -> distributed parameters (ABCD). Capacitance matters more as length grows."
        }), ref: "p.363" },
      { q: "Per-unit system advantage:",
        choices: ["Transformer impedances same on both sides", "Faster computation", "Lower voltage", "Eliminate Y/Δ"], correct: 0,
        solution: S({
          c: "In per-unit, a transformer's impedance is the SAME on both sides (the turns-ratio scaling cancels), so transformers 'disappear' from the impedance diagram.",
          s: ["<b>Step 1 — Match.</b> Transformer impedances same on both sides.","<b>Step 2 — Distractor audit.</b> Not just 'faster' or 'lower voltage'; it doesn't eliminate Y/Delta."],
          a: "Transformer-independent impedances.",
          v: "Per-unit normalizes everything to common bases, removing the $a^2$ impedance jumps at each transformer - hugely simplifying multi-voltage power-flow and fault calculations."
        }), ref: "p.363" },
      { q: "Power flow analysis: P-V curves represent:",
        choices: ["Voltage stability margin (knee point = collapse)", "Frequency", "Reactive", "Random"], correct: 0,
        solution: S({
          c: "P-V (nose) curves show voltage stability: as load power rises, voltage drops; the 'knee' (nose tip) is the maximum loadable point - beyond it, voltage collapses.",
          s: ["<b>Step 1 — Match.</b> Voltage stability margin (knee = collapse).","<b>Step 2 — Distractor audit.</b> Not frequency, reactive-only, or random."],
          a: "Voltage stability margin.",
          v: "Operating near the knee is dangerous - a small load increase triggers voltage collapse (a cause of major blackouts). The distance from the operating point to the knee is the stability margin."
        }), ref: "p.363" },
      { q: "Symmetrical components: positive, negative, zero sequence describe:",
        choices: ["Unbalanced 3-φ system decomposition", "Frequency components", "Harmonics", "Phase shifts"], correct: 0,
        solution: S({
          c: "Fortescue's theorem: ANY unbalanced three-phase set decomposes into three BALANCED sets - positive, negative, and zero sequence.",
          s: ["<b>Step 1 — Match.</b> Unbalanced 3-phase decomposition.","<b>Step 2 — Distractor audit.</b> Not frequency components, harmonics, or simple phase shifts."],
          a: "Unbalanced-system decomposition.",
          v: "This is the master tool for UNBALANCED fault analysis - each sequence network is balanced and analyzable separately, then combined per the fault type (L-G, L-L, etc.)."
        }), ref: "p.363" },
      { q: "Three-phase balanced load: zero-sequence current:",
        choices: ["Zero (no neutral current)", "Equal to phase current", "Maximum", "Random"], correct: 0,
        solution: S({
          c: "A balanced three-phase load has ONLY positive-sequence current; the zero-sequence (and negative-sequence) components are ZERO.",
          s: ["<b>Step 1 — Match.</b> Zero (no neutral current).","<b>Step 2 — Distractor audit.</b> Not equal to phase current, maximum, or random."],
          a: "Zero.",
          v: "Zero-sequence current is the in-phase component that flows in the neutral/ground - its presence SIGNALS a ground fault or unbalance, which is why ground-fault relays detect it."
        }), ref: "p.363" },
      { q: "Three-phase L-G fault: dominant current type:",
        choices: ["Has positive, negative, AND zero sequence (all equal)", "Just positive", "Random", "AC only"], correct: 0,
        solution: S({
          c: "In a single line-to-ground fault, all three sequence currents (positive, negative, zero) are EQUAL at the fault point.",
          s: ["<b>Step 1 — Match.</b> All three sequences equal.","<b>Step 2 — Distractor audit.</b> 'Just positive' is balanced operation; not random or AC-only."],
          a: "Positive = negative = zero sequence.",
          v: "This equality means the three sequence networks connect in SERIES for an L-G fault - the standard analysis that sets protective-relay ground-fault settings."
        }), ref: "p.363" },
      { q: "Transformer connection $\\Delta-Y$: phase shift between primary and secondary line voltages:",
        choices: ["$30°$ (typical)", "$0$", "$90°$", "$120°$"], correct: 0,
        solution: S({
          c: "A delta-wye transformer introduces a 30-degree phase shift between primary and secondary line voltages (ANSI standard: secondary lags by 30).",
          s: ["<b>Step 1 — Match.</b> 30 degrees.","<b>Step 2 — Distractor audit.</b> 0 is for Y-Y or Delta-Delta; 90/120 are wrong."],
          a: "30 degrees.",
          v: "This 30-degree shift matters when PARALLELING transformers - only same-shift groups can be paralleled, or circulating currents flow. It's always a multiple of 30 for standard connections."
        }), ref: "p.364" },
      { q: "Power transformer voltage ratio determined by:",
        choices: ["Turns ratio", "Frequency", "Load", "Phase"], correct: 0,
        solution: S({
          c: "The voltage ratio equals the turns ratio: $V_1/V_2 = N_1/N_2$ (for an ideal transformer).",
          s: ["<b>Step 1 — Match.</b> Turns ratio.","<b>Step 2 — Distractor audit.</b> Not frequency, load, or phase."],
          a: "Turns ratio.",
          v: "Voltage scales with turns, current inversely - power is (nearly) conserved. Real transformers add tap-changers to trim the ratio for output-voltage regulation under varying load."
        }), ref: "p.364" },
      { q: "Synchronous machine: damper windings function:",
        choices: ["Damp rotor oscillations, aid starting", "Cooling", "Insulation", "Excitation"], correct: 0,
        solution: S({
          c: "Damper (amortisseur) windings carry induced currents that OPPOSE rotor-angle oscillations, damping swings - and they also enable induction-style line starting.",
          s: ["<b>Step 1 — Match.</b> Damp rotor oscillations, aid starting.","<b>Step 2 — Distractor audit.</b> Not cooling, insulation, or excitation."],
          a: "Damping + starting.",
          v: "When the rotor swings off synchronous speed, the dampers see slip and induce currents that brake the swing - improving transient stability. They also let a synchronous motor self-start as an induction motor."
        }), ref: "p.365" },
      { q: "DC motor speed proportional to:",
        choices: ["Back EMF (~ armature voltage at constant field)", "Current", "Torque", "Power"], correct: 0,
        solution: S({
          c: "Back-EMF relates to speed by $E_b = k\\phi\\omega$; at constant field flux, speed is proportional to back-EMF (which tracks the applied armature voltage).",
          s: ["<b>Step 1 — Match.</b> Back-EMF (~ armature voltage at constant field).","<b>Step 2 — Distractor audit.</b> Current/torque relate to LOAD; power is V x I."],
          a: "Back-EMF (~ armature voltage).",
          v: "This gives two speed-control regimes: vary armature VOLTAGE below base speed (constant torque), or WEAKEN the field above base speed (constant power, less torque)."
        }), ref: "p.365" },
      { q: "Induction motor: rotor current frequency vs line frequency:",
        choices: ["$f_r = s \\cdot f_{line}$", "Same", "Constant", "Doubled"], correct: 0,
        solution: S({
          c: "Rotor current frequency is the SLIP frequency: $f_r = s\\cdot f_{line}$, where s is the slip.",
          s: ["<b>Step 1 — Match.</b> $f_r = s\\cdot f_{line}$.","<b>Step 2 — Distractor audit.</b> Not the same as line frequency, constant, or doubled."],
          a: "$f_r = s\\cdot f_{line}$.",
          v: "At standstill (s=1) the rotor sees full line frequency; running near synchronous (s small) it sees a low slip frequency - e.g. 3% slip on 60 Hz gives 1.8 Hz rotor current."
        }), ref: "p.365" },
      { q: "Motor starting torque for NEMA design B:",
        choices: ["~125-150% FLT", "$100\\%$", "$300\\%$", "$50\\%$"], correct: 0,
        solution: S({
          c: "NEMA Design B (the standard general-purpose squirrel-cage motor) has starting torque around 125-150% of full-load torque.",
          s: ["<b>Step 1 — Match.</b> ~125-150% FLT.","<b>Step 2 — Distractor audit.</b> 100% is too low for starting; 300% is Design C/D; 50% wouldn't start loads."],
          a: "$\\approx 125$-150% FLT.",
          v: "NEMA designs A/B/C/D tailor the torque-speed curve: Design D (high slip) gives ~300% starting torque for cranes/hoists; Design B balances starting torque, efficiency, and inrush for general use."
        }), ref: "p.365" },
      { q: "Synchronous condenser purpose:",
        choices: ["Provide reactive power (no active load) for voltage support", "Cooling", "Filtering harmonics", "Active power generation"], correct: 0,
        solution: S({
          c: "A synchronous condenser is a synchronous machine spinning at no mechanical load, used purely to supply/absorb REACTIVE power (adjustable via its excitation) for voltage support.",
          s: ["<b>Step 1 — Match.</b> Provide reactive power for voltage support.","<b>Step 2 — Distractor audit.</b> Not cooling, harmonic filtering, or active-power generation."],
          a: "Reactive power / voltage support.",
          v: "Over-excited it supplies VARs (like a capacitor); under-excited it absorbs them - continuously adjustable, unlike fixed capacitor banks. Modern static VAR compensators (SVCs) often replace them."
        }), ref: "p.365" },
    ],

    // EM — +5
    11: [
      { q: "Reflection coefficient at quarter-wave transformer ($Z_0 = \\sqrt{Z_s Z_L}$):",
        choices: ["Zero (matched)", "$1$", "$-1$", "Variable"], correct: 0,
        solution: S({
          c: "A quarter-wave transformer with $Z_0=\\sqrt{Z_s Z_L}$ matches source to load: input impedance $Z_{in}=Z_0^2/Z_L=Z_s$, so reflection is ZERO.",
          s: ["<b>Step 1 — Match.</b> Zero (matched).","<b>Step 2 — Distractor audit.</b> 1 is open, -1 is short; with proper $Z_0$ it's matched."],
          a: "Zero (matched).",
          v: "The quarter-wave section transforms impedance via $Z_{in}=Z_0^2/Z_L$ - choosing $Z_0$ as the geometric mean matches two real impedances at ONE frequency. A staple of RF matching."
        }), ref: "p.368" },
      { q: "Smith chart represents:",
        choices: ["Normalized impedance on complex plane (and reflection coefficient)", "Power vs frequency", "Voltage", "Time"], correct: 0,
        solution: S({
          c: "The Smith chart plots NORMALIZED impedance on the complex reflection-coefficient plane - a graphical tool for transmission-line and matching calculations.",
          s: ["<b>Step 1 — Match.</b> Normalized impedance (and reflection coefficient).","<b>Step 2 — Distractor audit.</b> Not power-vs-frequency, voltage, or time."],
          a: "Normalized Z and reflection coefficient.",
          v: "Constant-resistance and constant-reactance circles overlay the gamma disk - letting you read impedance, VSWR, and design matching networks graphically. Still taught despite modern software."
        }), ref: "p.368" },
      { q: "Standing wave ratio (SWR): for $|\\Gamma|=0.5$:",
        choices: ["$3$", "$0.5$", "$1.5$", "$2$"], correct: 0,
        solution: S({
          c: "VSWR relates to reflection coefficient: $SWR = \\dfrac{1+|\\Gamma|}{1-|\\Gamma|}$.",
          s: ["<b>Step 1 — Apply.</b> $(1+0.5)/(1-0.5) = 1.5/0.5 = 3$.","<b>Step 2 — Distractor audit.</b> 0.5 is gamma itself; 1.5 and 2 misuse the formula."],
          a: "$SWR = 3$.",
          v: "SWR ranges 1 (perfect match, gamma=0) to infinity (total reflection, |gamma|=1). SWR=3 means a noticeable mismatch - antenna systems typically target SWR < 2."
        }), ref: "p.368" },
      { q: "Half-wave dipole input impedance:",
        choices: ["$\\approx 73 + j42$ Ω", "$50$ Ω exactly", "$0$", "Infinite"], correct: 0,
        solution: S({
          c: "A half-wave dipole has input impedance ~73 + j42 ohms (about 73 ohms resistive, slightly inductive).",
          s: ["<b>Step 1 — Match.</b> ~73 + j42 ohms.","<b>Step 2 — Distractor audit.</b> Not exactly 50 ohms, 0, or infinite."],
          a: "$\\approx 73 + j42$ ohms.",
          v: "The ~73 ohm resistive part is close to (but not exactly) 50 ohm coax - hence small mismatch. A FOLDED dipole multiplies this to ~300 ohms, handy for matching to twin-lead/baluns."
        }), ref: "p.368" },
      { q: "Antenna radiation pattern: dipole has:",
        choices: ["Donut/toroidal pattern (omnidirectional in plane perpendicular to wire)", "Forward only", "Spherical", "Random"], correct: 0,
        solution: S({
          c: "A dipole radiates in a DONUT (toroidal) pattern - omnidirectional in the plane perpendicular to the wire, with nulls along the wire's axis.",
          s: ["<b>Step 1 — Match.</b> Donut/toroidal pattern.","<b>Step 2 — Distractor audit.</b> Not forward-only (that's a Yagi/directional), spherical (isotropic ideal), or random."],
          a: "Donut (toroidal) pattern.",
          v: "Maximum radiation broadside (perpendicular to the wire), zero off the ends - which is why you orient a dipole's length perpendicular to the direction you want to reach."
        }), ref: "p.368" },
    ],

    // Control — +10
    12: [
      { q: "Nichols chart: shows:",
        choices: ["Open-loop magnitude vs phase", "Time response", "Pole locations", "Stability boundary"], correct: 0,
        solution: S({
          c: "A Nichols chart plots open-loop log-MAGNITUDE versus PHASE on one diagram - useful for reading closed-loop response and stability margins.",
          s: ["<b>Step 1 — Match.</b> Open-loop magnitude vs phase.","<b>Step 2 — Distractor audit.</b> Not time response, pole locations, or just a boundary line."],
          a: "$|GH|$ vs $\\angle GH$.",
          v: "It combines Bode's two plots (magnitude and phase) into one curve, with overlaid closed-loop contours - handy for loop-shaping design. An alternative graphical view to Bode/Nyquist."
        }), ref: "p.366" },
      { q: "Sensitivity function $S(s) = 1/(1+GH)$. Smaller |S|:",
        choices: ["Better disturbance rejection and reference tracking", "Worse", "More oscillation", "Higher gain"], correct: 0,
        solution: S({
          c: "The sensitivity function $S=1/(1+GH)$ measures how much disturbances and reference errors reach the output. SMALLER |S| means BETTER disturbance rejection and tracking.",
          s: ["<b>Step 1 — Match.</b> Better disturbance rejection / tracking.","<b>Step 2 — Distractor audit.</b> Smaller S is better, not worse; it doesn't add oscillation or gain by itself."],
          a: "Better disturbance rejection.",
          v: "High loop gain GH makes S small - but Bode's integral theorem says you CAN'T make S small at ALL frequencies (push it down here, it pops up there). Design is about WHERE to make S small."
        }), ref: "p.365" },
      { q: "Complementary sensitivity $T = 1 - S = GH/(1+GH)$:",
        choices: ["Closed-loop transfer function (also): $T(s) = Y/R$", "Just disturbance", "Time-delay model", "Frequency"], correct: 0,
        solution: S({
          c: "The complementary sensitivity $T = GH/(1+GH)$ IS the closed-loop transfer function $Y/R$, and $S + T = 1$ always.",
          s: ["<b>Step 1 — Match.</b> Closed-loop transfer function $Y/R$.","<b>Step 2 — Distractor audit.</b> Not 'just disturbance', a time-delay model, or frequency."],
          a: "Closed-loop transfer function.",
          v: "$S+T=1$ is a fundamental constraint: you want T~1 (good tracking) at low frequencies and S~1 (noise rejection / robustness) at high frequencies - they trade off across the spectrum."
        }), ref: "p.365" },
      { q: "Pole at origin: integrator type:",
        choices: ["Type 1 system (zero steady-state error to step)", "Type 0", "Type 2", "Type 3"], correct: 0,
        solution: S({
          c: "A pole at the origin (s=0) is an integrator; the NUMBER of such poles is the system TYPE. One integrator -> Type 1 -> zero steady-state error to a step.",
          s: ["<b>Step 1 — Match.</b> Type 1.","<b>Step 2 — Distractor audit.</b> Type 0 has no origin pole; Type 2/3 have two/three."],
          a: "Type 1.",
          v: "Type sets steady-state accuracy: Type 1 zeroes STEP error, Type 2 zeroes RAMP error, etc. Each integrator absorbs one more degree of input polynomial."
        }), ref: "p.366" },
      { q: "Bode plot: integrator at $\\omega = 0.1$ (very low freq):",
        choices: ["Large positive dB (1/0.1 → +20 dB)", "Zero", "Negative", "Constant"], correct: 0,
        solution: S({
          c: "An integrator $1/(j\\omega)$ has magnitude $1/\\omega$, which is LARGE at low frequency. At $\\omega=0.1$: $1/0.1=10$, i.e. $20\\log10 = +20$ dB.",
          s: ["<b>Step 1 — Apply.</b> $|1/j\\omega| = 1/0.1 = 10 = +20$ dB.","<b>Step 2 — Distractor audit.</b> Zero/negative/constant miss the high low-frequency gain."],
          a: "$+20$ dB.",
          v: "The integrator's magnitude falls at -20 dB/decade with a -90 deg phase - infinite gain at DC is what lets it drive steady-state error to zero. At high frequency its gain shrinks."
        }), ref: "p.366" },
      { q: "Closed-loop step response 5% overshoot corresponds to approximately:",
        choices: ["$\\zeta \\approx 0.69$", "$\\zeta = 1$", "$\\zeta = 0.5$", "$\\zeta = 0.1$"], correct: 0,
        solution: S({
          c: "From $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$, a 5% overshoot needs $\\zeta \\approx 0.69$.",
          s: ["<b>Step 1 — Solve.</b> $M_p=0.05$ gives $\\zeta \\approx 0.69$.","<b>Step 2 — Distractor audit.</b> $\\zeta=1$ is 0% (no overshoot); 0.5 is ~16%; 0.1 is ~73%."],
          a: "$\\zeta \\approx 0.69$.",
          v: "The popular design target $\\zeta=0.7$ gives ~4.6% overshoot - a good balance of speed and minimal overshoot. Calibration: 0.5->16%, 0.7->5%, 1.0->0%."
        }), ref: "p.366" },
      { q: "Robust control: tracks reference well despite:",
        choices: ["Model uncertainty and disturbances", "Only constant", "Only at DC", "Random"], correct: 0,
        solution: S({
          c: "Robust control maintains performance despite MODEL UNCERTAINTY and disturbances - the real plant differs from the design model.",
          s: ["<b>Step 1 — Match.</b> Model uncertainty and disturbances.","<b>Step 2 — Distractor audit.</b> Not limited to constant inputs, DC, or random."],
          a: "Model uncertainty and disturbances.",
          v: "H-infinity control formalizes robustness by bounding worst-case sensitivity - crucial because no model is exact, and a controller tuned to a nominal model must tolerate real-world deviation."
        }), ref: "p.365" },
      { q: "Discrete-time vs continuous-time stability boundary:",
        choices: ["Continuous: $\\text{Re}(s) < 0$; Discrete: $|z| < 1$", "Same", "Reverse", "Random"], correct: 0,
        solution: S({
          c: "Continuous-time systems are stable with poles in the left-half plane (Re(s)<0); discrete-time systems require poles INSIDE the unit circle (|z|<1).",
          s: ["<b>Step 1 — Match.</b> Continuous: Re(s)<0; discrete: |z|<1.","<b>Step 2 — Distractor audit.</b> They're different (not same/reverse)."],
          a: "LHP (continuous) vs unit disk (discrete).",
          v: "The bilinear transform maps the LHP onto the inside of the unit circle precisely to preserve stability when converting a continuous design to digital. Same idea, two coordinate systems."
        }), ref: "p.376" },
      { q: "Bode plot: pole and zero close together create:",
        choices: ["Doublet — small effect, may approximately cancel", "Large peak", "Resonance", "Instability"], correct: 0,
        solution: S({
          c: "A pole and zero very close together form a DOUBLET - their effects nearly cancel, giving only a small net contribution to the response.",
          s: ["<b>Step 1 — Match.</b> Doublet - small effect, near cancellation.","<b>Step 2 — Distractor audit.</b> Not a large peak, resonance, or instability."],
          a: "A doublet (small net effect).",
          v: "Doublets are sometimes introduced deliberately in compensators for fine local shaping - but a slow doublet can cause a long, slow 'tail' in the transient response (a known pitfall)."
        }), ref: "p.366" },
      { q: "Damping ratio related to overshoot inversely:",
        choices: ["Higher $\\zeta$ → less overshoot", "Higher $\\zeta$ → more overshoot", "Independent", "Linear"], correct: 0,
        solution: S({
          c: "Higher damping ratio means LESS overshoot. At $\\zeta=0$ there's sustained oscillation (effectively 100%); at $\\zeta\\ge1$ there's no overshoot.",
          s: ["<b>Step 1 — Match.</b> Higher $\\zeta$ -> less overshoot.","<b>Step 2 — Distractor audit.</b> Not 'more overshoot', independent, or linear (it's exponential)."],
          a: "Inverse (more damping, less overshoot).",
          v: "Overshoot $M_p=e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$ falls steeply with $\\zeta$ - which is why adding damping (or derivative control) tames a ringing, oscillatory response."
        }), ref: "p.366" },
    ],

    // Comm — +8
    13: [
      { q: "Bit error probability (BEP) for BPSK in AWGN: ",
        choices: ["$Q(\\sqrt{2E_b/N_0})$", "$E_b/N_0$", "$1/N_0$", "$\\log_2 M$"], correct: 0,
        solution: S({
          c: "BPSK bit-error probability in additive white Gaussian noise: $P_b = Q\\left(\\sqrt{2E_b/N_0}\\right)$, where Q is the standard-normal tail.",
          s: ["<b>Step 1 — Match.</b> $Q(\\sqrt{2E_b/N_0})$.","<b>Step 2 — Distractor audit.</b> $E_b/N_0$ is the SNR-per-bit (input, not the error rate); the others aren't BER formulas."],
          a: "$P_b = Q(\\sqrt{2E_b/N_0})$.",
          v: "BER drops sharply (exponentially) as $E_b/N_0$ rises - the Q-function's steep tail. BPSK/QPSK share this optimal curve; higher-order QAM needs more $E_b/N_0$ for the same BER."
        }), ref: "p.371" },
      { q: "Eye diagram crosshair height represents:",
        choices: ["Noise margin", "Bandwidth", "Frequency", "Phase"], correct: 0,
        solution: S({
          c: "The vertical EYE OPENING height represents the NOISE MARGIN - how much noise the signal can tolerate before a bit is misread.",
          s: ["<b>Step 1 — Match.</b> Noise margin.","<b>Step 2 — Distractor audit.</b> Not bandwidth, frequency, or phase; the WIDTH represents timing margin."],
          a: "Noise margin.",
          v: "A wide-open eye = healthy signal (big noise and timing margins); a closing eye warns of ISI, jitter, or noise. Eye height -> noise margin, eye width -> timing margin."
        }), ref: "p.371" },
      { q: "Forward Error Correction (FEC) trades:",
        choices: ["Bandwidth (redundancy) for lower error rate", "Speed for accuracy", "Both", "Power for noise"], correct: 0,
        solution: S({
          c: "FEC adds redundant bits so the receiver can detect AND correct errors WITHOUT retransmission - trading BANDWIDTH (the overhead) for a lower error rate.",
          s: ["<b>Step 1 — Match.</b> Bandwidth (redundancy) for lower error rate.","<b>Step 2 — Distractor audit.</b> Not strictly speed-for-accuracy or power-for-noise."],
          a: "Bandwidth for error rate.",
          v: "FEC enables reliable one-way links (deep space, broadcast) where retransmission is impractical - the cost is sending extra parity bits, lowering the effective data rate (code rate < 1)."
        }), ref: "p.371" },
      { q: "Reed-Solomon codes are good for:",
        choices: ["Burst errors (used in CDs, QR codes, DSL)", "Random errors only", "Encryption", "Compression"], correct: 0,
        solution: S({
          c: "Reed-Solomon codes correct BURST errors well because they operate on SYMBOLS (groups of bits) rather than individual bits.",
          s: ["<b>Step 1 — Match.</b> Burst errors (CDs, QR codes, DSL).","<b>Step 2 — Distractor audit.</b> They handle bursts especially (not random-only); not encryption or compression."],
          a: "Burst errors.",
          v: "A scratch on a CD or a smudge on a QR code damages CONSECUTIVE symbols - RS corrects those clustered errors, which is why it's everywhere data faces localized damage."
        }), ref: "p.371" },
      { q: "Eye pattern closure due to:",
        choices: ["ISI (inter-symbol interference) and jitter", "Higher bandwidth", "Better SNR", "Lower freq"], correct: 0,
        solution: S({
          c: "The eye closes due to INTER-SYMBOL INTERFERENCE (a previous symbol's tail bleeding into the current decision) and JITTER (timing variation).",
          s: ["<b>Step 1 — Match.</b> ISI and jitter.","<b>Step 2 — Distractor audit.</b> Higher bandwidth and better SNR would OPEN the eye; lower frequency isn't the cause."],
          a: "ISI and jitter.",
          v: "ISI closes the eye vertically (amplitude), jitter horizontally (timing) - both push the signal toward the decision threshold and raise bit errors. Equalizers fight ISI."
        }), ref: "p.371" },
      { q: "Bandwidth efficient modulation chooses higher M when:",
        choices: ["SNR is high enough to distinguish more constellation points", "Low SNR", "Low cost", "Always"], correct: 0,
        solution: S({
          c: "Higher-order modulation (larger M) packs more bits per symbol but crowds the constellation - so it's chosen only when SNR is HIGH enough to distinguish the closer points.",
          s: ["<b>Step 1 — Match.</b> SNR high enough to distinguish more points.","<b>Step 2 — Distractor audit.</b> Low SNR can't support it; not about cost; not 'always'."],
          a: "When SNR is high.",
          v: "This is why adaptive modulation (Wi-Fi, LTE) drops to QPSK in poor conditions and ramps to 64/256-QAM when SNR allows - maximizing throughput within the noise budget."
        }), ref: "p.371" },
      { q: "Coherent demodulation requires:",
        choices: ["Carrier phase and frequency reference at receiver", "Only frequency", "Nothing extra", "Higher power"], correct: 0,
        solution: S({
          c: "Coherent demodulation requires a carrier PHASE and FREQUENCY reference at the receiver (synchronized to the transmitter).",
          s: ["<b>Step 1 — Match.</b> Carrier phase and frequency reference.","<b>Step 2 — Distractor audit.</b> Frequency alone isn't enough; it does need extra (phase recovery); not just higher power."],
          a: "A carrier (phase) reference.",
          v: "Phase recovery (via a PLL or pilot tone) is the cost of coherent demod - in exchange you get the best BER. Non-coherent schemes (DPSK, envelope detection) skip it at a ~3 dB penalty."
        }), ref: "p.371" },
      { q: "Signal-to-noise ratio (SNR) units:",
        choices: ["Dimensionless ratio (often in dB)", "Watts", "Hz", "V"], correct: 0,
        solution: S({
          c: "SNR is a dimensionless power RATIO, usually expressed in decibels: $\\text{SNR}_{dB}=10\\log_{10}(S/N)$.",
          s: ["<b>Step 1 — Match.</b> Dimensionless ratio (often dB).","<b>Step 2 — Distractor audit.</b> Watts, Hz, V are absolute units, not a ratio."],
          a: "A dimensionless ratio (dB common).",
          v: "dB compresses the wide range of power ratios - 10 dB = 10x, 20 dB = 100x, 30 dB = 1000x. SNR is the key input to Shannon capacity and BER curves."
        }), ref: "p.371" },
    ],

    // Networks — +5
    14: [
      { q: "DNS query types: A record vs MX:",
        choices: ["A: name to IPv4; MX: mail server", "Same", "A is for email", "MX is for IPv6"], correct: 0,
        solution: S({
          c: "DNS record types serve different lookups: an A record maps a name to an IPv4 address; an MX record names the mail server for a domain.",
          s: ["<b>Step 1 — Match.</b> A: name->IPv4; MX: mail server.","<b>Step 2 — Distractor audit.</b> A isn't for email; MX isn't for IPv6 (that's AAAA)."],
          a: "A: address; MX: mail exchanger.",
          v: "Other records: AAAA (IPv6), CNAME (alias), TXT (arbitrary text, used for SPF/verification), NS (name servers). Each query type retrieves a different kind of record."
        }), ref: "p.400" },
      { q: "HTTPS vs HTTP differences:",
        choices: ["HTTPS adds TLS encryption layer (typically port 443)", "Same", "HTTPS is slower always", "Different content"], correct: 0,
        solution: S({
          c: "HTTPS is HTTP wrapped in a TLS encryption layer (typically on port 443), securing the client-server communication.",
          s: ["<b>Step 1 — Match.</b> HTTPS adds TLS encryption (port 443).","<b>Step 2 — Distractor audit.</b> Not 'same'; not 'always slower' (overhead is small); same content, just encrypted."],
          a: "HTTPS = HTTP over TLS.",
          v: "TLS provides confidentiality, integrity, and server authentication (via certificates) - now the web default. Port 80 is plain HTTP; 443 is HTTPS."
        }), ref: "p.412" },
      { q: "TCP socket: identified by:",
        choices: ["(local IP, local port, remote IP, remote port) — 4-tuple", "Just IP", "Port only", "MAC"], correct: 0,
        solution: S({
          c: "A TCP connection is uniquely identified by a 4-TUPLE: (local IP, local port, remote IP, remote port).",
          s: ["<b>Step 1 — Match.</b> The 4-tuple.","<b>Step 2 — Distractor audit.</b> IP alone, port alone, or MAC don't uniquely identify a connection."],
          a: "(local IP, local port, remote IP, remote port).",
          v: "The 4-tuple lets ONE server port (e.g. 443) handle thousands of simultaneous connections - each distinguished by the client's IP/port. It's how web servers multiplex many users."
        }), ref: "p.400" },
      { q: "Half-open TCP connection (SYN flood attack):",
        choices: ["Attacker sends SYN but never ACK — exhausts server resources", "Closes properly", "Normal traffic", "Application layer"], correct: 0,
        solution: S({
          c: "A SYN flood is a denial-of-service attack: the attacker sends many SYN packets but never completes the handshake (no final ACK), exhausting the server's connection table.",
          s: ["<b>Step 1 — Match.</b> SYN without ACK - exhausts server resources.","<b>Step 2 — Distractor audit.</b> It doesn't close properly, isn't normal traffic, and operates at the transport layer."],
          a: "A DoS attack (resource exhaustion).",
          v: "Each half-open connection ties up server memory waiting for the ACK that never comes - filling the backlog. Mitigations: SYN cookies, rate limiting, firewalls."
        }), ref: "p.412" },
      { q: "Inter-domain routing protocol used between ISPs:",
        choices: ["BGP", "OSPF", "RIP", "ARP"], correct: 0,
        solution: S({
          c: "BGP (Border Gateway Protocol) is the inter-domain (between autonomous systems / ISPs) routing protocol of the internet.",
          s: ["<b>Step 1 — Match.</b> BGP.","<b>Step 2 — Distractor audit.</b> OSPF/RIP are INTRA-domain (within one network); ARP is Layer 2 address resolution."],
          a: "BGP.",
          v: "BGP is a policy-based path-vector protocol that glues the internet's ~100k autonomous systems together - its trust-based design means a misconfiguration can cause global route leaks/outages."
        }), ref: "p.400" },
    ],

    // Digital — +10
    15: [
      { q: "JK FF excitation table: from $Q=0$ to $Q^+ = 1$:",
        choices: ["$J=1$, $K=$ don't care", "$J=K=0$", "$J=0$, $K=1$", "Both 1"], correct: 0,
        solution: S({
          c: "To force a JK flip-flop from Q=0 to Q=1, you need J=1 (SET); K is a 'don't care' because at Q=0 it has no effect.",
          s: ["<b>Step 1 — Match.</b> J=1, K=X (don't care).","<b>Step 2 — Distractor audit.</b> J=K=0 holds (stays 0); J=0,K=1 resets; the question needs a 0->1 transition."],
          a: "$J=1$, $K=X$.",
          v: "Excitation tables (what inputs CAUSE a desired transition) are the reverse of truth tables - the don't-cares they expose are what make JK-based counter/FSM design efficient."
        }), ref: "p.391" },
      { q: "Race condition in async circuits caused by:",
        choices: ["Multiple inputs changing near-simultaneously", "Single input", "Slow clock", "Static signals"], correct: 0,
        solution: S({
          c: "An async race condition arises when MULTIPLE inputs change nearly simultaneously - the outcome depends on which change propagates first.",
          s: ["<b>Step 1 — Match.</b> Multiple inputs changing near-simultaneously.","<b>Step 2 — Distractor audit.</b> A single input or static signals don't race; slow clock isn't the cause."],
          a: "Concurrent input changes.",
          v: "Synchronous design eliminates races by only sampling at clock edges (after signals settle) - which is why nearly all real logic is clock-driven, not asynchronous."
        }), ref: "p.391" },
      { q: "PLA (Programmable Logic Array): both AND and OR planes programmable. Cost vs PAL:",
        choices: ["More flexible but slower/more area", "Always faster", "Always cheaper", "Identical"], correct: 0,
        solution: S({
          c: "A PLA (both AND and OR planes programmable) is MORE flexible than a PAL but slower and larger (more area).",
          s: ["<b>Step 1 — Match.</b> More flexible but slower/more area.","<b>Step 2 — Distractor audit.</b> Not 'always faster/cheaper'; not identical to PAL."],
          a: "More flexible, slower/larger.",
          v: "The PAL's FIXED OR plane is simpler and faster - the classic flexibility-vs-speed trade. Both predate CPLDs/FPGAs, which generalized programmable logic much further."
        }), ref: "p.390" },
      { q: "FPGA configuration storage:",
        choices: ["SRAM (volatile, reconfigurable)", "ROM", "Hard-coded", "Magnetic"], correct: 0,
        solution: S({
          c: "Most FPGAs store their configuration in SRAM - volatile and reconfigurable, so the bitstream must be reloaded on every power-up.",
          s: ["<b>Step 1 — Match.</b> SRAM (volatile, reconfigurable).","<b>Step 2 — Distractor audit.</b> Anti-fuse FPGAs are one-time; flash FPGAs are non-volatile; not magnetic."],
          a: "SRAM (volatile).",
          v: "SRAM-based FPGAs are infinitely reconfigurable (great for development) but need an external config flash to reload at boot. Anti-fuse and flash variants trade reconfigurability for non-volatility."
        }), ref: "p.391" },
      { q: "Sequential vs combinational logic:",
        choices: ["Sequential has memory (state); combinational only present inputs", "Same", "Combinational is faster", "Sequential is older"], correct: 0,
        solution: S({
          c: "SEQUENTIAL logic has MEMORY (state) - output depends on inputs AND past state; COMBINATIONAL logic depends only on present inputs.",
          s: ["<b>Step 1 — Match.</b> Sequential has memory/state; combinational doesn't.","<b>Step 2 — Distractor audit.</b> Not 'same'; speed/age aren't the distinction."],
          a: "Memory (state) vs none.",
          v: "Flip-flops/latches make a circuit sequential (counters, registers, FSMs); pure gate networks (adders, MUXes) are combinational. Sequential logic is what lets digital systems remember."
        }), ref: "p.391" },
      { q: "Setup-hold violation result:",
        choices: ["Metastability — output may settle to wrong value or oscillate briefly", "Damage", "Reset", "Speed up"], correct: 0,
        solution: S({
          c: "A setup/hold violation can drive a flip-flop into METASTABILITY - the output hovers between 0 and 1 (or oscillates) before settling unpredictably.",
          s: ["<b>Step 1 — Match.</b> Metastability.","<b>Step 2 — Distractor audit.</b> Not physical damage, a reset, or a speedup."],
          a: "Metastability.",
          v: "It's the classic hazard when crossing clock domains (input async to the clock) - a two-flip-flop synchronizer gives the metastable state time to resolve before downstream logic uses it."
        }), ref: "p.391" },
      { q: "Number of inputs to 16-to-1 MUX (data + select):",
        choices: ["16 data + 4 select = 20", "16", "20", "32"], correct: 0,
        solution: S({
          c: "A 16-to-1 MUX needs 16 data inputs plus $\\log_2 16 = 4$ select lines = 20 total inputs.",
          s: ["<b>Step 1 — Apply.</b> $16 + 4 = 20$.","<b>Step 2 — Distractor audit.</b> 16 forgets the selects; 32 over-counts; '20' alone matches but the answer notes the breakdown."],
          a: "16 data + 4 select = 20.",
          v: "The select lines scale logarithmically: $N$ data inputs need $\\log_2 N$ selects (8->3, 16->4, 32->5). The selects form the binary 'address' of which input to route through."
        }), ref: "p.390" },
      { q: "BCD adder for 9 + 1: result needs correction (add 6) because:",
        choices: ["The sum $1010$ is an invalid BCD code, so $+6$ forces a carry into the next decade", "BCD digits can legally exceed 9", "BCD addition is identical to plain binary", "The correction is arbitrary"], correct: 0,
        solution: S({
          c: "$9+1=10$, but binary 1010 isn't a valid BCD digit (BCD only encodes 0-9). Adding 6 (0110) corrects it, producing a carry into the next decade and 0000 in this one.",
          s: ["<b>Step 1 — Reason.</b> The 4-bit sum $1010$ lands in the invalid range (10-15), so adding 6 skips that gap and carries a 1 into the next decade.","<b>Step 2 — Distractor audit.</b> BCD digits CANNOT exceed 9 (that's why the fix exists); BCD addition is NOT the same as plain binary; the $+6$ is a precise rule, not arbitrary."],
          a: "Carry to the next decade (add 6).",
          v: "BCD wastes codes 1010-1111, so any sum landing there needs the +6 fix to skip the gap - this is how BCD adders keep each 4-bit group a valid decimal digit, used in displays and finance."
        }), ref: "p.390" },
      { q: "Gray code adjacent values differ by 1 bit, advantage in:",
        choices: ["Encoders, K-maps, async circuits — avoids transient incorrect codes", "Faster computation", "Encryption", "Compression"], correct: 0,
        solution: S({
          c: "Gray code's single-bit-change property prevents transient wrong codes during transitions - valuable in rotary ENCODERS, K-maps, and asynchronous circuits.",
          s: ["<b>Step 1 — Match.</b> Encoders, K-maps, async circuits (avoids transient codes).","<b>Step 2 — Distractor audit.</b> Not faster computation, encryption, or compression."],
          a: "Glitch/transient avoidance.",
          v: "If multiple bits changed at once (like binary 0111->1000), brief intermediate values could be misread - Gray code's one-bit transitions eliminate that ambiguity. K-maps use it so adjacent cells differ by one variable."
        }), ref: "p.388" },
      { q: "Synchronous FSM design steps:",
        choices: ["State diagram → state table → state encoding → logic equations", "Random", "Just write code", "Start with hardware"], correct: 0,
        solution: S({
          c: "Standard FSM design flow: state diagram -> state table -> state encoding (assign bit patterns) -> derive logic equations for next-state and outputs.",
          s: ["<b>Step 1 — Match.</b> Diagram -> table -> encoding -> equations.","<b>Step 2 — Distractor audit.</b> Not random, 'just write code', or 'start with hardware'."],
          a: "Diagram -> table -> encoding -> equations.",
          v: "This systematic methodology turns a behavioral spec into gates and flip-flops - the encoding choice (binary, one-hot, Gray) affects the resulting logic complexity and speed."
        }), ref: "p.391" },
    ],

    // CompSys — +10
    16: [
      { q: "Big-endian byte order: 0x12345678 in memory at address 0x100:",
        choices: ["100:12, 101:34, 102:56, 103:78", "100:78, 101:56, 102:34, 103:12", "Random", "All same"], correct: 0,
        solution: S({
          c: "Big-endian stores the MOST-significant byte at the LOWEST address: 0x12 at 0x100, then 0x34, 0x56, 0x78.",
          s: ["<b>Step 1 — Match.</b> 100:12, 101:34, 102:56, 103:78.","<b>Step 2 — Distractor audit.</b> The reverse (78 first) is LITTLE-endian; not random or all-same."],
          a: "MSB at the low address.",
          v: "Big-endian is 'network byte order' (TCP/IP, also SPARC/PowerPC); x86 is little-endian (LSB first). Mismatches require byte-swapping when exchanging binary data between systems."
        }), ref: "p.408" },
      { q: "Memory hierarchy access times (typical):",
        choices: ["Register: <1 ns, L1: 1-3 ns, L2: 5-15 ns, RAM: 50-100 ns, SSD: 25 µs, HDD: 5 ms", "All similar", "DRAM fastest", "Tape fast"], correct: 0,
        solution: S({
          c: "Access time grows by roughly 10x at each level down: register <1 ns, L1 ~1-3 ns, L2 ~5-15 ns, DRAM ~50-100 ns, SSD ~25 us, HDD ~5 ms.",
          s: ["<b>Step 1 — Match.</b> The wide-range tiered list.","<b>Step 2 — Distractor audit.</b> Not 'all similar'; DRAM isn't fastest; tape is slowest, not fast."],
          a: "Tiered, ~10x slower per level.",
          v: "The enormous span (sub-ns registers to ms disks - a factor of a MILLION+) is exactly why caching and locality matter so much: keeping hot data in fast tiers dominates real performance."
        }), ref: "p.407" },
      { q: "Spinning waiting (busy-wait) loop:",
        choices: ["Wastes CPU cycles", "Saves power", "Faster", "Used for I/O"], correct: 0,
        solution: S({
          c: "A busy-wait (spin) loop has the CPU repeatedly check a condition, WASTING CPU cycles while it waits.",
          s: ["<b>Step 1 — Match.</b> Wastes CPU cycles.","<b>Step 2 — Distractor audit.</b> It doesn't save power or run faster; it's a poor fit for slow I/O."],
          a: "Wastes CPU cycles.",
          v: "The alternative - blocking and waking on an interrupt - frees the CPU for other work. Spinning is justified ONLY for very short waits where the wake-up overhead would exceed the spin."
        }), ref: "p.408" },
      { q: "RAID 5: requires minimum disks:",
        choices: ["$3$ (data + distributed parity)", "$2$", "$4$", "$5$"], correct: 0,
        solution: S({
          c: "RAID 5 stripes data with DISTRIBUTED parity, requiring a minimum of 3 disks. It tolerates one disk failure.",
          s: ["<b>Step 1 — Match.</b> 3 disks.","<b>Step 2 — Distractor audit.</b> 2 is RAID 1 (mirror); 4/5 aren't the minimum for RAID 5."],
          a: "3 disks.",
          v: "Usable capacity is $(N-1)$ disks (one disk's worth goes to parity, spread across all). It survives ANY single drive failure by reconstructing from parity - the rebuild is the vulnerable window."
        }), ref: "p.407" },
      { q: "RAID 10 (1+0): combines:",
        choices: ["Mirroring + striping (typically 4+ disks)", "Just striping", "Just parity", "Three different schemes"], correct: 0,
        solution: S({
          c: "RAID 10 combines MIRRORING and STRIPING - it stripes data across mirrored pairs (needs 4+ disks).",
          s: ["<b>Step 1 — Match.</b> Mirroring + striping.","<b>Step 2 — Distractor audit.</b> Not just striping (RAID 0) or just parity (RAID 5); only two schemes combined."],
          a: "Mirror + stripe.",
          v: "It gets striping's speed AND mirroring's redundancy (tolerates multiple failures if not in the same pair) - at the cost of 50% capacity. Favored for high-performance databases."
        }), ref: "p.407" },
      { q: "x86 vs ARM instruction set:",
        choices: ["x86: CISC, variable length; ARM: RISC, fixed length", "Same", "x86 is RISC", "ARM is CISC"], correct: 0,
        solution: S({
          c: "x86 is CISC (complex, variable-length instructions); ARM is RISC (simpler, fixed-length instructions, easier to decode/pipeline).",
          s: ["<b>Step 1 — Match.</b> x86 CISC/variable; ARM RISC/fixed.","<b>Step 2 — Distractor audit.</b> Not 'same'; x86 isn't RISC; ARM isn't CISC."],
          a: "CISC (x86) vs RISC (ARM).",
          v: "x86 instructions span 1-15 bytes (complex decode); ARM uses fixed 32-bit (or 16/32-bit Thumb). RISC's regularity aids pipelining and power efficiency - why ARM dominates mobile. Modern x86 decodes CISC into RISC-like micro-ops internally."
        }), ref: "p.408" },
      { q: "Out-of-order (OoO) execution:",
        choices: ["Reorder instructions for parallelism while preserving observable semantics", "Slower", "Skip instructions", "Linear"], correct: 0,
        solution: S({
          c: "Out-of-order execution REORDERS instructions to run them as soon as their operands are ready (exploiting instruction-level parallelism), while preserving the program's observable results (retiring in order).",
          s: ["<b>Step 1 — Match.</b> Reorder for parallelism, preserve semantics.","<b>Step 2 — Distractor audit.</b> Not slower, not skipping instructions, not linear/in-order."],
          a: "Reorder for ILP (results preserved).",
          v: "OoO keeps execution units busy during stalls (e.g. a cache miss) by running independent later instructions first - a major speedup over in-order CPUs. A reorder buffer ensures correct retirement order."
        }), ref: "p.408" },
      { q: "DMA controller benefits:",
        choices: ["Offloads I/O bulk transfers from CPU", "Faster CPU", "More memory", "Reduces cost"], correct: 0,
        solution: S({
          c: "A DMA controller OFFLOADS bulk I/O transfers from the CPU - moving data between device and memory without per-byte CPU involvement.",
          s: ["<b>Step 1 — Match.</b> Offloads I/O bulk transfers from CPU.","<b>Step 2 — Distractor audit.</b> Not a faster CPU, more memory, or cheaper - it frees the CPU."],
          a: "Offloads the CPU.",
          v: "While DMA moves a disk block or network packet, the CPU computes in parallel, getting an interrupt only when the whole transfer completes - essential for high-throughput I/O."
        }), ref: "p.408" },
      { q: "Memory-mapped I/O:",
        choices: ["I/O devices appear as memory addresses", "I/O has own bus", "Special instructions", "Same as paging"], correct: 0,
        solution: S({
          c: "Memory-mapped I/O places device registers in the regular MEMORY address space, so ordinary load/store instructions access them.",
          s: ["<b>Step 1 — Match.</b> I/O devices appear as memory addresses.","<b>Step 2 — Distractor audit.</b> Port-mapped I/O uses SEPARATE address space and special instructions (x86 IN/OUT); not the same as paging."],
          a: "Devices in the memory address space.",
          v: "MMIO is clean - no special I/O instructions, full addressing modes work on devices. The alternative, port-mapped I/O (x86's IN/OUT), keeps I/O in its own space. ARM and most RISC use MMIO exclusively."
        }), ref: "p.408" },
      { q: "Cache thrashing:",
        choices: ["Repeated misses due to working set > cache", "Cache hit", "Fast access", "Coherence"], correct: 0,
        solution: S({
          c: "Cache thrashing is repeated cache MISSES because the active working set is larger than the cache - useful data is evicted and immediately refetched.",
          s: ["<b>Step 1 — Match.</b> Repeated misses (working set > cache).","<b>Step 2 — Distractor audit.</b> Not a cache hit, fast access, or coherence."],
          a: "Excessive misses from a too-large working set.",
          v: "Performance plummets toward main-memory speeds when thrashing - mitigated by larger caches, better data layout, or restructuring algorithms to improve locality (e.g. cache-blocking matrix code)."
        }), ref: "p.407" },
    ],

    // Software — +8
    17: [
      { q: "Big-O of insertion sort (worst case):",
        choices: ["$O(n^2)$", "$O(n)$", "$O(n\\log n)$", "$O(\\log n)$"], correct: 0,
        solution: S({
          c: "Insertion sort's worst case is $O(n^2)$ - each element may shift past all prior ones (reverse-sorted input).",
          s: ["<b>Step 1 — Match.</b> $O(n^2)$.","<b>Step 2 — Distractor audit.</b> $O(n)$ is its BEST case; $O(n\\log n)$ is mergesort/heapsort; $O(\\log n)$ is too fast."],
          a: "$O(n^2)$.",
          v: "Despite the quadratic worst case, insertion sort is fast for SMALL or NEARLY-SORTED data (low constant, adaptive) - which is why hybrid sorts (Timsort) use it on small partitions."
        }), ref: "p.415" },
      { q: "Insertion sort best case:",
        choices: ["$O(n)$ (already sorted input)", "$O(n^2)$", "$O(\\log n)$", "$O(1)$"], correct: 0,
        solution: S({
          c: "On already-sorted input, insertion sort runs in $O(n)$ - each element needs no shifting, just one comparison.",
          s: ["<b>Step 1 — Match.</b> $O(n)$ (already sorted).","<b>Step 2 — Distractor audit.</b> $O(n^2)$ is the worst case; $O(\\log n)$ and $O(1)$ are too fast."],
          a: "$O(n)$.",
          v: "This ADAPTIVE behavior (fast on nearly-sorted data) is insertion sort's selling point - it makes a great finishing pass and is used inside Timsort/introsort for small or partially-ordered runs."
        }), ref: "p.415" },
      { q: "Linked list vs array memory:",
        choices: ["List: extra pointer per node; Array: contiguous, less overhead per element", "Same", "List always smaller", "Array always larger"], correct: 0,
        solution: S({
          c: "A linked list stores an extra POINTER per node (overhead); an array stores elements contiguously with minimal per-element overhead.",
          s: ["<b>Step 1 — Match.</b> List has pointer overhead; array is contiguous.","<b>Step 2 — Distractor audit.</b> Not 'same'; list isn't always smaller; array isn't always larger."],
          a: "List: pointer overhead; array: contiguous.",
          v: "The trade: arrays are memory-compact and cache-friendly (great for iteration) but costly to insert/resize; lists insert cheaply but waste space on pointers and scatter through memory (poor cache locality)."
        }), ref: "p.415" },
      { q: "Recursion vs iteration: memory:",
        choices: ["Recursion uses stack frames (more memory)", "Iteration more memory", "Same", "Random"], correct: 0,
        solution: S({
          c: "Recursion consumes STACK frames (one per call), using more memory than iteration, which uses a fixed amount.",
          s: ["<b>Step 1 — Match.</b> Recursion uses stack frames (more memory).","<b>Step 2 — Distractor audit.</b> Iteration isn't more memory; not 'same' or random."],
          a: "Recursion uses more (stack).",
          v: "Deep recursion risks STACK OVERFLOW; iteration avoids it. Tail-call optimization (in some languages) compiles tail recursion to a loop, erasing the memory penalty."
        }), ref: "p.415" },
      { q: "Hash function for strings: must:",
        choices: ["Be deterministic, distribute uniformly", "Random", "Always 0", "Use only first char"], correct: 0,
        solution: S({
          c: "A good string hash must be DETERMINISTIC (same string -> same hash) and distribute keys UNIFORMLY (minimize collisions).",
          s: ["<b>Step 1 — Match.</b> Deterministic, uniform distribution.","<b>Step 2 — Distractor audit.</b> Not random (breaks lookup); not always 0; using only the first char clusters badly."],
          a: "Deterministic and uniform.",
          v: "Uniformity keeps hash-table operations near O(1) by spreading keys across buckets - common choices: polynomial hashing, FNV, MurmurHash, xxHash. Cryptographic hashes add irreversibility (different goal)."
        }), ref: "p.415" },
      { q: "Sorted array search:",
        choices: ["$O(\\log n)$ with binary search", "$O(n)$", "$O(1)$", "$O(n^2)$"], correct: 0,
        solution: S({
          c: "A sorted array supports BINARY SEARCH in $O(\\log n)$ - halving the search range each step.",
          s: ["<b>Step 1 — Match.</b> $O(\\log n)$ (binary search).","<b>Step 2 — Distractor audit.</b> $O(n)$ is linear search (any array); $O(1)$ needs a hash/index; $O(n^2)$ is wrong."],
          a: "$O(\\log n)$.",
          v: "Binary search of a million items takes only ~20 comparisons - but it REQUIRES sorted data. If you search repeatedly, sort once ($O(n\\log n)$) then binary-search many times."
        }), ref: "p.415" },
      { q: "Stack overflow in recursion:",
        choices: ["Too deep recursion exhausts stack memory", "RAM full", "Heap leak", "GC fail"], correct: 0,
        solution: S({
          c: "Stack overflow happens when recursion goes TOO DEEP and exhausts the limited call-stack memory.",
          s: ["<b>Step 1 — Match.</b> Too-deep recursion exhausts the stack.","<b>Step 2 — Distractor audit.</b> Not full RAM, a heap leak, or GC failure - it's the bounded stack."],
          a: "Stack memory exhaustion.",
          v: "Each call adds a frame to the fixed-size stack (typically 1-8 MB); unbounded recursion overflows it. Convert to iteration, add a base case, or rely on tail-call optimization to avoid it."
        }), ref: "p.408" },
      { q: "DFS traversal order on binary tree (root, then recursively):",
        choices: ["Preorder, inorder, postorder variants", "BFS only", "Random", "Just one order"], correct: 0,
        solution: S({
          c: "Depth-first traversal of a binary tree comes in three variants by WHEN the root is visited: PREorder (root, left, right), INorder (left, root, right), POSTorder (left, right, root).",
          s: ["<b>Step 1 — Match.</b> Preorder, inorder, postorder variants.","<b>Step 2 — Distractor audit.</b> BFS is the breadth-first (level-order) alternative; not random or single-order."],
          a: "Preorder, inorder, postorder.",
          v: "INorder traversal of a binary SEARCH tree yields sorted output - a key property. Preorder is used to copy/serialize a tree; postorder to delete it (children before parent)."
        }), ref: "p.415" },
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
