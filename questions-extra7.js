// FE Electrical Question Bank — Extension Pack 7 (~200 problems)
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") return;

  const P = {
    // Math — +20
    1: [
      { q: "Find $|z|$ for $z = -3 + 4j$:",
        choices: ["$5$", "$1$", "$\\sqrt{7}$", "$25$"], correct: 0,
        solution: S({
          c: "The magnitude (modulus) of a complex number is $|a+bj| = \\sqrt{a^2+b^2}$ — the distance from the origin in the complex plane. The signs don't matter (they're squared).",
          s: [
            "<b>Step 1 — Square and sum.</b> $(-3)^2 + 4^2 = 9+16 = 25$.",
            "<b>Step 2 — Root.</b> $\\sqrt{25} = 5$.",
            "<b>Step 3 — Distractor audit.</b> 1 is $|{-3}|-|4|$ confusion; $\\sqrt7$ forgets to square; 25 forgets the root."
          ],
          a: "$|z| = 5$",
          v: "It's a 3-4-5 triangle ✓ — the negative real part just places z in the second quadrant, but magnitude (a distance) is always positive."

        }), ref: "p.36" },
      { q: "$(1+j)^4 = ?$", choices: ["$-4$", "$4$", "$4j$", "$2$"], correct: 0,
        solution: S({
          c: "Powers of complex numbers are easy in POLAR form (De Moivre): $z^n = r^n\\angle(n\\theta)$. Convert, raise, convert back.",
          s: [
            "<b>Step 1 — To polar.</b> $1+j = \\sqrt2\\angle45°$.",
            "<b>Step 2 — Raise to 4.</b> $(\\sqrt2)^4 = 4$; angle $4\\times45° = 180°$ → $4\\angle180°$.",
            "<b>Step 3 — To rectangular.</b> $4\\angle180° = -4$.",
            "<b>Step 4 — Distractor audit.</b> 4 forgets the angle; $4j$ would be 90°; 2 mishandles the magnitude."
          ],
          a: "$-4$",
          v: "Cross-check by squaring twice: $(1+j)^2 = 1+2j+j^2 = 2j$; then $(2j)^2 = -4$ ✓. Polar wins for high powers; rectangular for low ones."

        }), ref: "p.36" },
      { q: "Solve $x^2 + 4x + 13 = 0$:",
        choices: ["$x = -2 \\pm 3j$", "$x = -2 \\pm \\sqrt{13}$", "$x = 2 \\pm 3j$", "$x = \\pm \\sqrt{17}$"], correct: 0,
        solution: S({
          c: "Quadratic formula with a NEGATIVE discriminant yields complex-conjugate roots.",
          s: [
            "<b>Step 1 — Discriminant.</b> $\\Delta = 16-52 = -36 < 0$ → complex.",
            "<b>Step 2 — Root of negative.</b> $\\sqrt{-36} = 6j$.",
            "<b>Step 3 — Apply.</b> $x = (-4\\pm6j)/2 = -2\\pm3j$.",
            "<b>Step 4 — Distractor audit.</b> $-2\\pm\\sqrt{13}$ assumes positive Δ; $2\\pm3j$ has the wrong sign; $\\pm\\sqrt{17}$ is unrelated."
          ],
          a: "$x = -2 \\pm 3j$",
          v: "Vieta: sum $= -4 = -b/a$ ✓, product $= (-2)^2+3^2 = 13 = c/a$ ✓. Real coefficients always give conjugate-pair complex roots."

        }), ref: "p.35" },
      { q: "$\\det\\begin{pmatrix}3&-1&2\\\\0&4&5\\\\0&0&6\\end{pmatrix}$:",
        choices: ["$72$", "$24$", "$30$", "$0$"], correct: 0,
        solution: S({
          c: "The determinant of a TRIANGULAR matrix (all zeros below — or above — the diagonal) is simply the PRODUCT of the diagonal entries.",
          s: [
            "<b>Step 1 — Multiply diagonal.</b> $3\\times4\\times6 = 72$.",
            "<b>Step 2 — Distractor audit.</b> 24 and 30 are partial products; 0 would need a zero on the diagonal."
          ],
          a: "$\\det = 72$",
          v: "The off-diagonal entries (−1, 2, 5) are irrelevant for a triangular matrix ✓ — which is exactly why Gaussian elimination reduces to triangular form to compute determinants efficiently."

        }), ref: "p.57" },
      { q: "Inverse of identity matrix:",
        choices: ["Itself", "Zero matrix", "Doesn't exist", "Transpose"], correct: 0,
        solution: S({
          c: "The identity matrix $I$ satisfies $I\\cdot I = I$, so it is its own inverse: $I^{-1} = I$.",
          s: [
            "<b>Step 1 — Match.</b> Itself.",
            "<b>Step 2 — Distractor audit.</b> Zero matrix has no inverse; 'doesn't exist' is wrong ($\\det I=1\\ne0$); transpose happens to equal I too but the defining property is self-inverse."
          ],
          a: "$I^{-1} = I$",
          v: "I is the multiplicative identity for matrices — like 1 for numbers ($1^{-1}=1$) ✓. Any matrix times I is unchanged, and I times itself is I."

        }), ref: "p.57" },
      { q: "$\\dfrac{d}{dx}[\\ln(x^2+1)]$:",
        choices: ["$2x/(x^2+1)$", "$1/(x^2+1)$", "$2x$", "$\\ln(2x)$"], correct: 0,
        solution: S({
          c: "Chain rule for logarithms: $\\dfrac{d}{dx}\\ln u = \\dfrac{u'}{u}$.",
          s: [
            "<b>Step 1 — Inner derivative.</b> $u = x^2+1 \\Rightarrow u' = 2x$.",
            "<b>Step 2 — Apply.</b> $\\dfrac{2x}{x^2+1}$.",
            "<b>Step 3 — Distractor audit.</b> $1/(x^2+1)$ forgets the inner $u'$; $2x$ forgets the $/u$; $\\ln(2x)$ is nonsense."
          ],
          a: "$\\dfrac{2x}{x^2+1}$",
          v: "The $u'/u$ form is THE log-derivative pattern ✓ — always multiply by the derivative of the inside. Forgetting that inner factor is the classic chain-rule slip."

        }), ref: "p.47" },
      { q: "$\\int_0^{\\pi} \\sin x\\,dx = ?$",
        choices: ["$2$", "$0$", "$\\pi$", "$1$"], correct: 0,
        solution: S({
          c: "Definite integral: find the antiderivative ($-\\cos x$) and evaluate at the limits.",
          s: [
            "<b>Step 1 — Antiderivative.</b> $\\int\\sin x\\,dx = -\\cos x$.",
            "<b>Step 2 — Evaluate.</b> $[-\\cos x]_0^\\pi = -\\cos\\pi-(-\\cos0) = -(-1)+1 = 2$.",
            "<b>Step 3 — Distractor audit.</b> 0 would be the integral over a full $2\\pi$; π and 1 mis-evaluate."
          ],
          a: "2",
          v: "Geometrically it's the area under one sine hump (0 to π), which is exactly 2 ✓ — a useful number to remember. Over $0$ to $2\\pi$ it cancels to 0 (equal positive and negative humps)."

        }), ref: "p.49" },
      { q: "Find slope of $y = e^{2x}$ at $x = 0$:",
        choices: ["$2$", "$1$", "$0$", "$e$"], correct: 0,
        solution: S({
          c: "Slope = derivative. For $e^{2x}$, the chain rule gives $y' = 2e^{2x}$.",
          s: [
            "<b>Step 1 — Differentiate.</b> $y' = 2e^{2x}$.",
            "<b>Step 2 — Evaluate at 0.</b> $2e^0 = 2(1) = 2$.",
            "<b>Step 3 — Distractor audit.</b> 1 forgets the factor of 2; 0 is wrong; $e$ misreads."
          ],
          a: "slope $= 2$",
          v: "The 2 comes from the chain rule (derivative of the exponent $2x$) ✓ — $e^x$ alone would have slope 1 at x=0, but the '2x' doubles it."

        }), ref: "p.47" },
      { q: "$\\sum_{k=0}^{\\infty}(0.4)^k = ?$",
        choices: ["$5/3 \\approx 1.667$", "$0.4$", "$\\infty$", "$1$"], correct: 0,
        solution: S({
          c: "An infinite geometric series with $|r|<1$ converges to $\\dfrac{1}{1-r}$ (first term 1 here, ratio r).",
          s: [
            "<b>Step 1 — Identify.</b> $r = 0.4$, $|r|<1$ → converges.",
            "<b>Step 2 — Apply.</b> $\\dfrac{1}{1-0.4} = \\dfrac{1}{0.6} = \\dfrac53 \\approx 1.667$.",
            "<b>Step 3 — Distractor audit.</b> 0.4 is just one term; ∞ would need $|r|\\ge1$; 1 ignores the sum."
          ],
          a: "$5/3 \\approx 1.667$",
          v: "Sanity: $1 + 0.4 + 0.16 + \\dots$ clearly exceeds 1 but stays bounded ✓. The formula $1/(1-r)$ underlies everything from compound interest to RC-filter impulse sums."

        }), ref: "p.50" },
      { q: "Solve $y'' - 4y' + 4y = 0$:",
        choices: ["$y = (C_1+C_2 x)e^{2x}$", "$y = C_1 e^{2x} + C_2 e^{-2x}$", "$y = C\\cos 2x$", "$y = C e^{4x}$"], correct: 0,
        solution: S({
          c: "For a linear homogeneous ODE, form the CHARACTERISTIC equation. A REPEATED root $r$ gives the solution form $(C_1 + C_2 x)e^{rx}$ (the extra $x$ provides the second independent solution).",
          s: [
            "<b>Step 1 — Characteristic eq.</b> $r^2-4r+4 = (r-2)^2 = 0$ → double root $r=2$.",
            "<b>Step 2 — Write solution.</b> $(C_1 + C_2 x)e^{2x}$.",
            "<b>Step 3 — Distractor audit.</b> $C_1e^{2x}+C_2e^{-2x}$ is for DISTINCT roots; $\\cos2x$ needs imaginary roots; $Ce^{4x}$ misreads the root."
          ],
          a: "$(C_1+C_2 x)e^{2x}$",
          v: "The $C_2 x$ term is the signature of a repeated root ✓ — without it you'd have only one independent solution. This is the critically-damped case in vibration/circuit problems."

        }), ref: "p.55" },
      { q: "Vector projection of $\\vec{a}=(3,4)$ onto $\\vec{b}=(1,0)$:",
        choices: ["$(3, 0)$", "$(0, 4)$", "$(3, 4)$", "$5$"], correct: 0,
        solution: S({
          c: "The projection of $\\vec a$ onto $\\vec b$ is the 'shadow' of a along b's direction: $\\text{proj}_b a = (\\vec a\\cdot\\hat b)\\hat b$. Projecting onto a coordinate axis just keeps that component.",
          s: [
            "<b>Step 1 — Unit vector.</b> $\\hat b = (1,0)$ (already unit).",
            "<b>Step 2 — Dot then scale.</b> $\\vec a\\cdot\\hat b = 3$, so projection $= 3(1,0) = (3,0)$.",
            "<b>Step 3 — Distractor audit.</b> $(0,4)$ projects onto the y-axis; $(3,4)$ is a unchanged; 5 is $|\\vec a|$."
          ],
          a: "$(3, 0)$",
          v: "Projecting onto the x-axis simply drops the y-component ✓ — the result keeps only how much of $\\vec a$ points along $\\vec b$. The scalar projection here is 3 (the dot product)."

        }), ref: "p.38" },
      { q: "$\\sin(\\pi/6) + \\cos(\\pi/3)$:",
        choices: ["$1$", "$0$", "$\\sqrt{3}/2$", "$1/2$"], correct: 0,
        solution: S({
          c: "Evaluate using the standard special-angle values: $\\sin30° = 1/2$ and $\\cos60° = 1/2$.",
          s: [
            "<b>Step 1 — Values.</b> $\\sin(\\pi/6)=\\sin30°=1/2$; $\\cos(\\pi/3)=\\cos60°=1/2$.",
            "<b>Step 2 — Sum.</b> $1/2 + 1/2 = 1$.",
            "<b>Step 3 — Distractor audit.</b> 0, $\\sqrt3/2$, 1/2 each drop or mis-evaluate a term."
          ],
          a: "1",
          v: "Note $\\sin30° = \\cos60°$ — they're co-function complements ($\\sin\\theta=\\cos(90°-\\theta)$) ✓, which is why both equal 1/2. Memorizing the 30-60-90 values pays off constantly."

        }), ref: "p.37" },
      { q: "Average value of $f(x) = x^2$ on $[0,2]$:",
        choices: ["$4/3$", "$2$", "$8/3$", "$4$"], correct: 0,
        solution: S({
          c: "The average value of a function over $[a,b]$ is $\\dfrac{1}{b-a}\\int_a^b f\\,dx$ — total area divided by width.",
          s: [
            "<b>Step 1 — Integrate.</b> $\\int_0^2 x^2\\,dx = [x^3/3]_0^2 = 8/3$.",
            "<b>Step 2 — Divide by width.</b> $\\dfrac{1}{2}\\cdot\\dfrac{8}{3} = \\dfrac{4}{3}$.",
            "<b>Step 3 — Distractor audit.</b> 8/3 forgets to divide; 2 and 4 misuse the formula."
          ],
          a: "$4/3$",
          v: "Sanity: $f$ ranges 0 to 4 on this interval, and 4/3≈1.33 sits in that range (below the midpoint since x² is convex) ✓. The average is the height of a rectangle with the same area."

        }), ref: "p.49" },
      { q: "Solve $2^x = 32$:",
        choices: ["$x = 5$", "$x = 16$", "$x = \\log 32$", "$x = 32$"], correct: 0,
        solution: S({
          c: "Solve an exponential equation by expressing both sides as the same base, then equating exponents.",
          s: [
            "<b>Step 1 — Same base.</b> $32 = 2^5$.",
            "<b>Step 2 — Equate exponents.</b> $2^x = 2^5 \\Rightarrow x = 5$.",
            "<b>Step 3 — Distractor audit.</b> 16 is $32/2$; $\\log32$ is unsimplified; 32 is the right side."
          ],
          a: "$x = 5$",
          v: "Check: $2^5 = 32$ ✓. When the numbers aren't clean powers, take logs of both sides instead: $x = \\log_2 32 = \\ln32/\\ln2 = 5$."

        }), ref: "p.36" },
      { q: "$\\log(100) - \\log(10)$ (base 10):",
        choices: ["$1$", "$10$", "$2$", "$90$"], correct: 0,
        solution: S({
          c: "Logarithm subtraction equals the log of the quotient: $\\log A - \\log B = \\log(A/B)$.",
          s: [
            "<b>Step 1 — Combine.</b> $\\log(100/10) = \\log 10$.",
            "<b>Step 2 — Evaluate.</b> $\\log_{10}10 = 1$.",
            "<b>Step 3 — Distractor audit.</b> 10 and 90 confuse log with the numbers; 2 would be $\\log100$ alone."
          ],
          a: "1",
          v: "Or directly: $\\log100 = 2$, $\\log10 = 1$, difference $= 1$ ✓. The log laws (sum↔product, difference↔quotient) turn multiplication into addition — the original purpose of logarithms."

        }), ref: "p.36" },
      { q: "Area enclosed by $y = x^2$ and $y = 4$:",
        choices: ["$32/3$", "$8$", "$16$", "$4$"], correct: 0,
        solution: S({
          c: "Area between two curves: $\\int (\\text{top} - \\text{bottom})\\,dx$ over the interval where they bound a region. Find the intersection points first.",
          s: [
            "<b>Step 1 — Intersections.</b> $x^2 = 4 \\Rightarrow x = \\pm2$.",
            "<b>Step 2 — Integrate top minus bottom.</b> $\\int_{-2}^2 (4-x^2)\\,dx = [4x - x^3/3]_{-2}^2 = (8-8/3)-(-8+8/3) = 32/3$.",
            "<b>Step 3 — Distractor audit.</b> 8, 16, 4 come from sign or limit errors."
          ],
          a: "$32/3$",
          v: "By symmetry you could compute $2\\int_0^2(4-x^2)dx = 2(16/3) = 32/3$ ✓ — the region is symmetric about the y-axis. Always integrate (upper curve − lower curve)."

        }), ref: "p.49" },
      { q: "Derivative of $\\sec x$:",
        choices: ["$\\sec x \\tan x$", "$-\\csc x \\cot x$", "$\\tan^2 x$", "$\\sec^2 x$"], correct: 0,
        solution: S({
          c: "Standard derivative: $\\dfrac{d}{dx}\\sec x = \\sec x\\tan x$.",
          s: [
            "<b>Step 1 — Derive.</b> $\\sec x = 1/\\cos x$; quotient/chain rule gives $\\sin x/\\cos^2 x = \\sec x\\tan x$.",
            "<b>Step 2 — Distractor audit.</b> $-\\csc x\\cot x$ is the derivative of $\\csc x$; $\\sec^2x$ is the derivative of $\\tan x$; $\\tan^2x$ is wrong."
          ],
          a: "$\\sec x\\tan x$",
          v: "The reciprocal-trig derivatives pair up: $(\\sec x)'=\\sec x\\tan x$, $(\\csc x)'=-\\csc x\\cot x$ ✓ — note the minus sign goes with the 'co' functions."

        }), ref: "p.47" },
      { q: "$\\int 1/(x \\ln x)\\,dx$:",
        choices: ["$\\ln|\\ln x| + C$", "$\\ln x + C$", "$\\ln^2 x + C$", "$1/x^2 + C$"], correct: 0,
        solution: S({
          c: "Recognize a substitution: when the derivative of part of the integrand appears elsewhere. Here $u=\\ln x$ gives $du = dx/x$, which is already present.",
          s: [
            "<b>Step 1 — Substitute.</b> $u=\\ln x$, $du = dx/x$ → integral becomes $\\int (1/u)\\,du$.",
            "<b>Step 2 — Integrate.</b> $\\ln|u|+C = \\ln|\\ln x|+C$.",
            "<b>Step 3 — Distractor audit.</b> $\\ln x+C$, $\\ln^2x+C$, $1/x^2+C$ don't differentiate back correctly."
          ],
          a: "$\\ln|\\ln x| + C$",
          v: "Differentiate to check: $\\dfrac{d}{dx}\\ln(\\ln x) = \\dfrac{1}{\\ln x}\\cdot\\dfrac1x = \\dfrac{1}{x\\ln x}$ ✓. Spotting that $dx/x$ is the derivative of $\\ln x$ is the key insight."

        }), ref: "p.49" },
      { q: "Limit $\\lim_{x\\to\\infty} x e^{-x}$:",
        choices: ["$0$", "$\\infty$", "$1$", "$e$"], correct: 0,
        solution: S({
          c: "Exponential growth ALWAYS beats polynomial growth. So $xe^{-x} = x/e^x \\to 0$ as $x\\to\\infty$ (the $e^x$ in the denominator wins).",
          s: [
            "<b>Step 1 — Rewrite.</b> $xe^{-x} = x/e^x$, an $\\infty/\\infty$ form.",
            "<b>Step 2 — L'Hôpital.</b> $\\lim x/e^x = \\lim 1/e^x = 0$.",
            "<b>Step 3 — Distractor audit.</b> ∞ assumes x wins; 1 and e mis-evaluate."
          ],
          a: "0",
          v: "The hierarchy of growth: $e^x \\gg x^n \\gg \\ln x$ for large x ✓ — exponentials dominate any polynomial. This is why $xe^{-x}$ rises, peaks (at x=1), then decays to zero."

        }), ref: "p.47" },
      { q: "$\\vec{A}\\cdot\\vec{B}$ if both unit vectors at 60° angle:",
        choices: ["$1/2$", "$\\sqrt{3}/2$", "$1$", "$0$"], correct: 0,
        solution: S({
          c: "The dot product of two vectors is $\\vec A\\cdot\\vec B = |A||B|\\cos\\theta$. For unit vectors, it's just $\\cos\\theta$.",
          s: [
            "<b>Step 1 — Apply.</b> $1\\times1\\times\\cos60° = 0.5$.",
            "<b>Step 2 — Distractor audit.</b> $\\sqrt3/2$ is $\\cos30°$; 1 is $\\cos0°$ (parallel); 0 is $\\cos90°$ (perpendicular)."
          ],
          a: "$1/2$",
          v: "The dot product directly measures alignment: 1 = parallel, 0 = perpendicular, −1 = opposite ✓. At 60° the vectors are 'half aligned,' giving 0.5."

        }), ref: "p.38" },
    ],

    // Prob — +12
    2: [
      { q: "P(rolling two 6s in a row with fair die):",
        choices: ["$1/36$", "$1/6$", "$2/36$", "$1/12$"], correct: 0,
        solution: S({
          c: "Independent events multiply: $P(A\\text{ and }B) = P(A)\\times P(B)$. Each die roll is independent.",
          s: [
            "<b>Step 1 — Apply.</b> $(1/6)(1/6) = 1/36$.",
            "<b>Step 2 — Distractor audit.</b> $1/6$ is one roll; $2/36$ would be 'either'; $1/12$ is wrong."
          ],
          a: "$1/36$",
          v: "Successive independent rolls multiply ✓ — each 6 is 1/6, two in a row is $1/6\\times1/6$. Order/independence matters: this is 'AND' (multiply), not 'OR' (add)."

        }), ref: "p.64" },
      { q: "Variance of {1, 2, 3, 4, 5} (population):",
        choices: ["$2$", "$2.5$", "$5$", "$10$"], correct: 0,
        solution: S({
          c: "Population variance: $\\sigma^2 = \\dfrac{1}{n}\\sum(x_i-\\bar x)^2$ — the mean of the squared deviations from the mean.",
          s: [
            "<b>Step 1 — Mean.</b> $\\bar x = 15/5 = 3$.",
            "<b>Step 2 — Squared deviations.</b> $(-2)^2,(-1)^2,0,1^2,2^2 = 4,1,0,1,4$; sum = 10.",
            "<b>Step 3 — Divide by n.</b> $10/5 = 2$.",
            "<b>Step 4 — Distractor audit.</b> 2.5 uses $n-1$ (sample variance); 5 and 10 skip the average."
          ],
          a: "$\\sigma^2 = 2$",
          v: "Note POPULATION variance divides by $n$; SAMPLE variance divides by $n-1$ (giving 2.5 here) ✓ — the problem specifies population, so use n."

        }), ref: "p.63" },
      { q: "Number of ways to arrange 4 letters from {A,B,C,D,E}:",
        choices: ["$P(5,4) = 120$", "$24$", "$625$", "$5$"], correct: 0,
        solution: S({
          c: "Arrangements where ORDER matters = PERMUTATIONS: $P(n,r) = \\dfrac{n!}{(n-r)!}$.",
          s: [
            "<b>Step 1 — Apply.</b> $P(5,4) = 5!/1! = 120$.",
            "<b>Step 2 — Distractor audit.</b> 24 is $4!$ (arranging a fixed 4); 625 is $5^4$ (with repetition); 5 is just n."
          ],
          a: "$P(5,4) = 120$",
          v: "Order matters here (arrange = sequence) → permutation, not combination ✓. If order DIDN'T matter, it'd be $C(5,4)=5$. The $/(n-r)!$ removes the one unused letter's slot."

        }), ref: "p.64" },
      { q: "P(red queen from a deck):",
        choices: ["$2/52 = 1/26$", "$4/52$", "$1/52$", "$1/13$"], correct: 0,
        solution: S({
          c: "Probability = favorable / total. A standard deck has 52 cards; red queens are the queen of hearts and queen of diamonds = 2.",
          s: [
            "<b>Step 1 — Count.</b> 2 red queens.",
            "<b>Step 2 — Divide.</b> $2/52 = 1/26$.",
            "<b>Step 3 — Distractor audit.</b> $4/52$ counts ALL queens; $1/52$ is one card; $1/13$ counts all queens differently."
          ],
          a: "$2/52 = 1/26$",
          v: "Red = hearts + diamonds (2 of the 4 queens) ✓. Being specific about the qualifier (red AND queen) narrows 4 queens to 2."

        }), ref: "p.64" },
      { q: "Continuous uniform on [0,1]. P(X > 0.7):",
        choices: ["$0.3$", "$0.7$", "$0.5$", "$1$"], correct: 0,
        solution: S({
          c: "For a uniform distribution on $[0,1]$, probability equals length of the interval. $P(X>a) = 1-a$.",
          s: [
            "<b>Step 1 — Apply.</b> $P(X>0.7) = 1-0.7 = 0.3$.",
            "<b>Step 2 — Distractor audit.</b> 0.7 is $P(X<0.7)$; 0.5 ignores the threshold; 1 is the whole range."
          ],
          a: "0.3",
          v: "On a uniform [0,1], probability IS the sub-interval length ✓ — the region above 0.7 has length 0.3. The PDF is flat at height 1, so area = width."

        }), ref: "p.67" },
      { q: "Sample size for 95% CI with margin $\\pm 2$, $\\sigma = 10$:",
        choices: ["$n \\approx 96$", "$25$", "$10$", "$100$"], correct: 0,
        solution: S({
          c: "Margin of error $= z\\sigma/\\sqrt n$. Solve for $n$: $n = (z\\sigma/E)^2$. For 95%, $z=1.96$.",
          s: [
            "<b>Step 1 — Set up.</b> $2 = 1.96\\times10/\\sqrt n$.",
            "<b>Step 2 — Solve.</b> $\\sqrt n = 19.6/2 = 9.8$ → $n = 96.04$.",
            "<b>Step 3 — Round UP.</b> $n \\approx 96$-97 (always round up for required sample size).",
            "<b>Step 4 — Distractor audit.</b> 25, 10, 100 come from dropping z or the square."
          ],
          a: "$n \\approx 96$",
          v: "The $n\\propto1/E^2$ relationship: halving the margin QUADRUPLES the required sample ✓ — precision is expensive. Always round n UP to guarantee the margin is met."

        }), ref: "p.69" },
      { q: "Two events independent: $P(A \\cap B) = ?$",
        choices: ["$P(A) \\cdot P(B)$", "$P(A) + P(B)$", "$\\max(P(A), P(B))$", "$0$"], correct: 0,
        solution: S({
          c: "INDEPENDENCE is DEFINED by $P(A\\cap B) = P(A)\\cdot P(B)$ — one event's occurrence doesn't change the other's probability.",
          s: [
            "<b>Step 1 — Match.</b> $P(A)\\cdot P(B)$.",
            "<b>Step 2 — Distractor audit.</b> $P(A)+P(B)$ overcounts (and applies to mutually exclusive UNIONs via inclusion-exclusion); max and 0 are wrong."
          ],
          a: "$P(A)P(B)$",
          v: "Contrast with MUTUALLY EXCLUSIVE events, where $P(A\\cap B)=0$ ✓ — independent and mutually-exclusive are DIFFERENT (in fact, two events with nonzero probability can't be both)."

        }), ref: "p.64" },
      { q: "Skewness of normal distribution:",
        choices: ["$0$ (symmetric)", "$1$", "Positive", "Negative"], correct: 0,
        solution: S({
          c: "Skewness measures asymmetry. The normal distribution is perfectly symmetric (bell curve), so its skewness is 0.",
          s: [
            "<b>Step 1 — Match.</b> 0 (symmetric).",
            "<b>Step 2 — Distractor audit.</b> Positive skew = long right tail; negative = long left tail; the normal has neither."
          ],
          a: "0 (symmetric).",
          v: "For a normal, mean = median = mode (all at the center) ✓ — a hallmark of zero skew. Right-skewed data (e.g. income) has mean > median; left-skewed the reverse."

        }), ref: "p.67" },
      { q: "Maximum likelihood estimate (MLE):",
        choices: ["Parameter value that maximizes likelihood of observed data", "Sample mean only", "Median", "Mode"], correct: 0,
        solution: S({
          c: "The MLE is the parameter value that makes the OBSERVED data most probable — it maximizes the likelihood function $L(\\theta\\,|\\,\\text{data})$.",
          s: [
            "<b>Step 1 — Match.</b> Parameter value that maximizes likelihood of observed data.",
            "<b>Step 2 — Distractor audit.</b> Sample mean, median, mode are specific estimators — sometimes they EQUAL the MLE, but MLE is the general maximization principle."
          ],
          a: "The parameter maximizing the data likelihood.",
          v: "Conveniently, the MLE of a normal's mean (and a Poisson's rate) IS the sample mean ✓ — but in general you maximize $L$ (often via its log) over θ. MLE underpins regression and ML classifiers."

        }), ref: "p.69" },
      { q: "Coefficient of variation: $\\sigma/\\mu$. For data with $\\mu = 50$, $\\sigma = 10$:",
        choices: ["$0.2$ or 20%", "$5$", "$60$", "$40$"], correct: 0,
        solution: S({
          c: "Coefficient of variation $CV = \\sigma/\\mu$ — a UNITLESS measure of relative spread, letting you compare variability across different scales.",
          s: [
            "<b>Step 1 — Apply.</b> $CV = 10/50 = 0.2 = 20\\%$.",
            "<b>Step 2 — Distractor audit.</b> 5 inverts it ($\\mu/\\sigma$); 60 and 40 are sum/difference confusions."
          ],
          a: "$0.2$ (20%).",
          v: "CV's value is dimensionlessness: a SD of 10 is 'large' for a mean of 50 (20%) but tiny for a mean of 10,000 (0.1%) ✓ — CV captures that relative sense, useful for comparing datasets with different units."

        }), ref: "p.63" },
      { q: "Chebyshev's inequality: $P(|X-\\mu| \\ge k\\sigma) \\le ?$",
        choices: ["$1/k^2$", "$1/k$", "$1/2k$", "$0$"], correct: 0,
        solution: S({
          c: "Chebyshev's inequality bounds how much data lies far from the mean, for ANY distribution: $P(|X-\\mu|\\ge k\\sigma) \\le 1/k^2$.",
          s: [
            "<b>Step 1 — Match.</b> $1/k^2$.",
            "<b>Step 2 — Distractor audit.</b> $1/k$, $1/2k$, 0 aren't the bound."
          ],
          a: "$\\le 1/k^2$",
          v: "For $k=2$: at most 25% of ANY distribution lies beyond 2 SD ✓ — vs only ~5% for a normal specifically. Chebyshev is loose but UNIVERSAL (no distribution assumption), which is its power."

        }), ref: "p.66" },
      { q: "Bayes: $P(A|B) = \\dfrac{P(B|A)P(A)}{P(B)}$ — describes:",
        choices: ["Inverse conditional probability", "Joint probability", "Marginal", "Independence"], correct: 0,
        solution: S({
          c: "Bayes' theorem INVERTS a conditional probability — it computes $P(A|B)$ from $P(B|A)$, the prior $P(A)$, and the evidence $P(B)$.",
          s: [
            "<b>Step 1 — Match.</b> Inverse conditional probability.",
            "<b>Step 2 — Distractor audit.</b> Joint is $P(A\\cap B)$; marginal is $P(A)$; independence is a separate concept."
          ],
          a: "Inverse conditional probability.",
          v: "It's how you update beliefs with evidence — medical tests (P(disease|positive) from P(positive|disease)), spam filters, and ML classifiers all run on Bayes ✓. The famous base-rate trap comes from ignoring the prior $P(A)$."

        }), ref: "p.65" },
    ],

    // Ethics — +5
    3: [
      { q: "Engineer accepts a private gift from contractor on stamped project:",
        choices: ["Conflict of interest — refuse or disclose", "OK if small", "OK after project ends", "Required"], correct: 0,
        solution: S({
          c: "The 'faithful agent' canon forbids accepting anything that could compromise objectivity. A gift from a contractor on a project you're sealing is a conflict of interest.",
          s: [
            "<b>Step 1 — Match.</b> Conflict of interest — refuse or disclose.",
            "<b>Step 2 — Distractor audit.</b> 'OK if small', 'OK after project', 'required' all rationalize a compromise of objectivity."
          ],
          a: "Conflict of interest — refuse or disclose.",
          v: "Even the APPEARANCE of bias is a problem ✓ — a token gift can taint the perception of impartial engineering judgment. The safe course is to decline (or fully disclose and recuse if needed)."

        }), ref: "p.4" },
      { q: "PE works for company A but moonlights for company B (same industry):",
        choices: ["Possible conflict of interest — disclose to A", "Always forbidden", "Always allowed", "Just disclose to B"], correct: 0,
        solution: S({
          c: "Moonlighting for a competitor in the same industry creates a real or perceived conflict of interest, which must be DISCLOSED to the primary employer.",
          s: [
            "<b>Step 1 — Match.</b> Possible conflict — disclose to employer A.",
            "<b>Step 2 — Distractor audit.</b> 'Always forbidden' / 'always allowed' are too absolute; disclosing only to B misses the primary obligation."
          ],
          a: "Disclose to the primary employer.",
          v: "Transparency resolves most conflicts — the employer can then judge whether it's acceptable ✓. Many employment agreements explicitly require disclosure or bar competing outside work."

        }), ref: "p.4" },
      { q: "Engineer signs project but actual work was done by unlicensed person without review:",
        choices: ["Plan-stamping — major ethics violation", "OK if engineer is supervisor", "Acceptable", "Common practice"], correct: 0,
        solution: S({
          c: "Signing/sealing work you did not prepare OR supervise and review is 'plan-stamping' — a serious ethics violation and potential criminal fraud.",
          s: [
            "<b>Step 1 — Match.</b> Plan-stamping — major ethics violation.",
            "<b>Step 2 — Distractor audit.</b> It's only acceptable if the PE genuinely SUPERVISED and REVIEWED the work in 'responsible charge' — not the case here ('without review')."
          ],
          a: "Plan-stamping (a major violation).",
          v: "The PE's seal certifies that a licensed professional took responsible charge ✓ — stamping unreviewed work betrays that guarantee and is prohibited by every US state board, with license-revocation and legal consequences."

        }), ref: "p.5" },
      { q: "An engineer is asked to investigate a structure they previously designed:",
        choices: ["Conflict — should recuse or disclose", "Must accept", "Cannot accept", "Charge double"], correct: 0,
        solution: S({
          c: "Investigating your OWN prior design creates a self-interest bias (you may downplay your own errors). The ethical response is to disclose the conflict and recuse or bring in an independent reviewer.",
          s: [
            "<b>Step 1 — Match.</b> Conflict — recuse or disclose.",
            "<b>Step 2 — Distractor audit.</b> 'Must accept' / 'cannot accept' are too rigid; 'charge double' is irrelevant."
          ],
          a: "Conflict of interest — disclose/recuse.",
          v: "Objectivity is compromised when you investigate your own work ✓ — disclosure lets the client decide whether to proceed (often with an independent third party for credibility). The appearance of bias matters as much as actual bias."

        }), ref: "p.4-5" },
      { q: "Continuing education requirement varies by state, but commonly:",
        choices: ["15-30 PDH per 2-year renewal cycle", "Optional", "100 PDH/year", "None"], correct: 0,
        solution: S({
          c: "Most state boards require Professional Development Hours (PDH) to renew a PE license — commonly around 15-30 PDH per 2-year cycle (some mandate ethics-specific hours).",
          s: [
            "<b>Step 1 — Match.</b> 15-30 PDH per 2-year renewal.",
            "<b>Step 2 — Distractor audit.</b> 'Optional' and 'none' are wrong for most states; '100 PDH/year' is excessive."
          ],
          a: "≈15-30 PDH per 2-year cycle.",
          v: "Continuing education keeps licensees current with codes, technology, and ethics ✓ — exact requirements vary by state, so engineers track their PDH and retain documentation for audits."

        }), ref: "p.11" },
    ],

    // Econ — +10
    4: [
      { q: "Find effective annual rate from 1% per month nominal:",
        choices: ["$\\approx 12.68\\%$", "$12\\%$", "$13\\%$", "$10\\%$"], correct: 0,
        solution: S({
          c: "Effective annual rate from a periodic rate: $EAR = (1+r_{period})^m - 1$. Here 1%/month for 12 months.",
          s: [
            "<b>Step 1 — Apply.</b> $(1.01)^{12} - 1 = 1.1268 - 1 = 0.1268 = 12.68\\%$.",
            "<b>Step 2 — Distractor audit.</b> 12% is the nominal (12×1%, ignoring compounding); 13% rounds up; 10% is wrong."
          ],
          a: "$EAR \\approx 12.68\\%$",
          v: "The 0.68% gap above 12% is interest earning interest each month ✓ — a credit card 'at 1% a month' really costs 12.68% a year, a common consumer-finance gotcha."

        }), ref: "p.230" },
      { q: "Project: invest $\\$8000$ now, receive $\\$3000$/yr for 4 yrs. At $i=10\\%$, NPV:",
        choices: ["$\\approx \\$1{,}510$ (accept)", "$\\$4000$", "$\\$-1000$", "$\\$12{,}000$"], correct: 0,
        solution: S({
          c: "NPV = present value of inflows minus initial cost. Use the uniform-series present-worth factor: $NPV = -P + A(P/A,i,n)$.",
          s: [
            "<b>Step 1 — (P/A) factor.</b> $(P/A,10\\%,4) = 3.1699$.",
            "<b>Step 2 — Compute.</b> $NPV = -8000 + 3000(3.1699) = -8000 + 9510 = \\$1510$.",
            "<b>Step 3 — Decide.</b> NPV > 0 → ACCEPT.",
            "<b>Step 4 — Distractor audit.</b> $\\$4000$ ignores discounting; $-\\$1000$ has wrong sign; $\\$12{,}000$ is undiscounted total inflow."
          ],
          a: "NPV $\\approx \\$1510$ (accept).",
          v: "Positive NPV means the project earns MORE than the 10% required return ✓ — the discounted inflows ($9510) exceed the $8000 cost. The undiscounted total ($12,000) overstates value by ignoring time."

        }), ref: "p.232" },
      { q: "Inflation-adjusted return: nominal 8%, inflation 3%. Real return:",
        choices: ["$\\approx 4.85\\%$", "$5\\%$", "$11\\%$", "$24\\%$"], correct: 0,
        solution: S({
          c: "The real (inflation-adjusted) return uses the EXACT Fisher relation: $1+i_r = \\dfrac{1+i_n}{1+f}$, not simple subtraction.",
          s: [
            "<b>Step 1 — Apply.</b> $1.08/1.03 = 1.0485$ → $i_r = 4.85\\%$.",
            "<b>Step 2 — Distractor audit.</b> 5% is the rough approximation ($8\\%-3\\%$); 11% adds; 24% multiplies."
          ],
          a: "$i_r \\approx 4.85\\%$",
          v: "The simple '$8-3=5\\%$' is a decent APPROXIMATION but the exact Fisher value is 4.85% ✓ — the difference grows at higher rates, where dividing (not subtracting) matters."

        }), ref: "p.230" },
      { q: "Annual operating cost grows at $g = 5\\%$/year. PW of $\\$1000$ first-year cost over 10 years at $i = 8\\%$:",
        choices: ["$\\approx \\$8{,}530$ (geom gradient)", "$\\$10000$", "$\\$1000$", "$\\$3000$"], correct: 0,
        solution: S({
          c: "A GEOMETRIC GRADIENT (cash flow growing at rate g) has present worth $P = A_1\\dfrac{1-[(1+g)/(1+i)]^n}{i-g}$ (for $i\\ne g$).",
          s: [
            "<b>Step 1 — Ratio.</b> $(1+g)/(1+i) = 1.05/1.08 = 0.9722$; $(0.9722)^{10} = 0.754$.",
            "<b>Step 2 — Factor.</b> $(1-0.754)/(0.08-0.05) = 0.246/0.03 = 8.20$.",
            "<b>Step 3 — Apply.</b> $P = 1000\\times8.20 \\approx \\$8200$.",
            "<b>Step 4 — Distractor audit.</b> $\\$10000$ ignores discounting; $\\$1000$ is one year; $\\$3000$ is far off."
          ],
          a: "$\\approx \\$8200$",
          v: "Geometric gradients model costs/revenues that grow at a steady percentage (inflation-linked O&M, escalating rents) ✓ — distinct from an ARITHMETIC gradient (fixed dollar increase each year)."

        }), ref: "p.231" },
      { q: "MACRS vs straight-line for asset depreciation: MACRS gives:",
        choices: ["Higher early depreciation (accelerated)", "Lower depreciation", "Same total", "Random"], correct: 0,
        solution: S({
          c: "MACRS (the US accelerated method) front-loads depreciation — larger deductions in early years — vs straight-line's equal annual amounts. The lifetime TOTAL is the same.",
          s: [
            "<b>Step 1 — Match.</b> Higher early depreciation (accelerated).",
            "<b>Step 2 — Distractor audit.</b> Not lower depreciation; total is the SAME (just timed differently), so 'same total' is true but not the distinguishing answer; not random."
          ],
          a: "Accelerated (front-loaded) depreciation.",
          v: "Earlier deductions = earlier tax savings = higher NPV (time value of money) ✓ — the same total deduction, but worth more pulled forward. This is why MACRS is favored over straight-line for tax purposes."

        }), ref: "p.230" },
      { q: "Capitalized cost (infinite series): $A = \\$500$/yr at $i=5\\%$:",
        choices: ["$\\$10{,}000$", "$\\$1000$", "$\\$5000$", "$\\$25{,}000$"], correct: 0,
        solution: S({
          c: "Capitalized cost = present worth of a PERPETUITY (infinite uniform series): $P = A/i$.",
          s: [
            "<b>Step 1 — Apply.</b> $P = 500/0.05 = \\$10{,}000$.",
            "<b>Step 2 — Distractor audit.</b> $\\$1000$ and $\\$5000$ misdivide; $\\$25{,}000$ uses the wrong rate."
          ],
          a: "$\\$10{,}000$",
          v: "A perpetuity's value is finite because distant payments discount toward zero ✓ — $10,000 invested at 5% throws off $500/yr forever. Used for endowments, perpetual maintenance, and 'forever' infrastructure costs."

        }), ref: "p.231" },
      { q: "Sunk cost in economic analysis:",
        choices: ["Past cost — irrelevant to future decisions", "Future cost", "Critical to include", "Doubled"], correct: 0,
        solution: S({
          c: "A sunk cost is a past, non-recoverable expense. Rational forward-looking decisions IGNORE sunk costs — only future cash flows matter.",
          s: [
            "<b>Step 1 — Match.</b> Past cost — irrelevant to future decisions.",
            "<b>Step 2 — Distractor audit.</b> It's not a future cost; 'critical to include' is the sunk-cost FALLACY; not doubled."
          ],
          a: "Irrelevant (past, non-recoverable).",
          v: "The 'sunk cost fallacy' is throwing good money after bad because you've 'already invested so much' ✓ — economically, only incremental future costs and benefits should drive the decision."

        }), ref: "p.232" },
      { q: "Choose between two equal-life projects via:",
        choices: ["Highest NPV (same i, same n)", "Higher cost", "Lower cost only", "Highest revenue"], correct: 0,
        solution: S({
          c: "For mutually-exclusive projects with the SAME life and discount rate, pick the one with the HIGHEST NPV (it adds the most value).",
          s: [
            "<b>Step 1 — Match.</b> Highest NPV.",
            "<b>Step 2 — Distractor audit.</b> Highest/lowest cost and highest revenue ignore the net value; NPV captures both."
          ],
          a: "Highest NPV.",
          v: "NPV directly measures value added ✓. For UNEQUAL lives, you can't compare NPVs directly — convert to equivalent uniform annual worth (EUAW) first, or use a common analysis period."

        }), ref: "p.232" },
      { q: "Property tax based on:",
        choices: ["Assessed value × mill rate", "Income", "Sales", "Inflation"], correct: 0,
        solution: S({
          c: "Property tax = assessed value × tax (mill) rate, where 1 mill = $1 per $1000 of assessed value.",
          s: [
            "<b>Step 1 — Match.</b> Assessed value × mill rate.",
            "<b>Step 2 — Distractor audit.</b> Income tax is on income; sales tax on purchases; property tax is value-based, not inflation-based."
          ],
          a: "Assessed value × mill rate.",
          v: "It's an annual recurring cost in engineering-economy cash flows for facilities/land ✓. The 'mill' unit (thousandths) is the standard quote — e.g. a 20-mill rate on a $200k assessment is $4,000/yr."

        }), ref: "p.232" },
      { q: "Working capital is:",
        choices: ["Current assets minus current liabilities", "Total revenue", "Net income", "Depreciation"], correct: 0,
        solution: S({
          c: "Working capital = current assets − current liabilities — a measure of short-term liquidity (can the firm cover near-term obligations?).",
          s: [
            "<b>Step 1 — Match.</b> Current assets minus current liabilities.",
            "<b>Step 2 — Distractor audit.</b> Revenue, net income, and depreciation are income-statement items, not the liquidity balance."
          ],
          a: "Current assets − current liabilities.",
          v: "Positive working capital means short-term bills are covered; negative signals possible cash-flow trouble ✓. In project economics, working capital is often an upfront outlay RECOVERED at project end."

        }), ref: "p.230" },
    ],

    // Materials — +6
    5: [
      { q: "Hole mobility in Si vs electron mobility:",
        choices: ["Hole mobility lower (~480 vs ~1350 cm²/V·s)", "Same", "Higher", "Zero"], correct: 0,
        solution: S({
          c: "In silicon, electrons move more easily than holes: electron mobility ~1350 cm²/V·s vs hole mobility ~480 cm²/V·s (roughly 1/3).",
          s: [
            "<b>Step 1 — Match.</b> Hole mobility lower (~480 vs ~1350).",
            "<b>Step 2 — Distractor audit.</b> Not 'same', not 'higher', not 'zero' — holes are slower carriers."
          ],
          a: "Hole mobility is lower (~1/3 of electrons).",
          v: "This is why nMOS (electron-channel) transistors are faster than pMOS (hole-channel) of the same size ✓ — and why CMOS designers make pMOS wider to balance the speeds. Mobility sets carrier drift velocity per field."

        }), ref: "p.354" },
      { q: "Temperature coefficient of resistance for metals:",
        choices: ["Positive (R increases with T)", "Negative", "Zero", "Random"], correct: 0,
        solution: S({
          c: "Metals have a POSITIVE temperature coefficient: resistance RISES with temperature (~0.4%/°C for copper) as lattice vibrations scatter electrons more.",
          s: [
            "<b>Step 1 — Match.</b> Positive (R increases with T).",
            "<b>Step 2 — Distractor audit.</b> SEMICONDUCTORS have negative coefficients (heat frees more carriers); not zero or random."
          ],
          a: "Positive.",
          v: "Opposite of semiconductors ✓ — metals resist MORE when hot (more phonon scattering), semiconductors LESS (more carriers). This is exploited in PTC thermistors (temperature sensing, inrush limiting)."

        }), ref: "p.354" },
      { q: "Energy needed to free electron in Si:",
        choices: ["$\\ge E_g \\approx 1.12$ eV", "0", "100 eV", "Any energy"], correct: 0,
        solution: S({
          c: "To promote an electron from the valence band to the conduction band in silicon, you need at least the BANDGAP energy $E_g \\approx 1.12$ eV.",
          s: [
            "<b>Step 1 — Match.</b> $\\ge E_g \\approx 1.12$ eV.",
            "<b>Step 2 — Distractor audit.</b> 0 would be a metal (no gap); 100 eV is enormous; 'any energy' is wrong (below $E_g$ nothing happens)."
          ],
          a: "$\\ge 1.12$ eV.",
          v: "The corresponding photon wavelength is $hc/E_g \\approx 1.1$ µm (near-IR) ✓ — light shorter than this can free carriers (the basis of silicon photodetectors/solar cells), longer passes through unabsorbed."

        }), ref: "p.354" },
      { q: "p-n junction reverse breakdown:",
        choices: ["Sharp current increase at $V_{BR}$", "Linear", "Slow", "No effect"], correct: 0,
        solution: S({
          c: "Beyond a critical reverse voltage $V_{BR}$, a p-n junction breaks down (avalanche or Zener), and reverse current rises SHARPLY while voltage stays near $V_{BR}$.",
          s: [
            "<b>Step 1 — Match.</b> Sharp current increase at $V_{BR}$.",
            "<b>Step 2 — Distractor audit.</b> Not linear, not slow, not 'no effect' — breakdown is abrupt."
          ],
          a: "Sharp current rise at $V_{BR}$.",
          v: "This 'flat voltage, steep current' behavior is exactly what makes ZENER diodes useful as voltage references/regulators ✓, and the basis of TVS/surge protectors. Controlled breakdown is a feature, not always a failure."

        }), ref: "p.354" },
      { q: "Drift current in semiconductor: $J_n =$",
        choices: ["$q n \\mu_n E$", "$q n E^2$", "$\\mu_n E$", "$n/E$"], correct: 0,
        solution: S({
          c: "Drift current density (electrons) = charge × density × drift velocity, and drift velocity = mobility × field: $J_n = qn\\mu_n E$.",
          s: [
            "<b>Step 1 — Match.</b> $qn\\mu_n E$.",
            "<b>Step 2 — Distractor audit.</b> $qnE^2$, $\\mu_n E$, $n/E$ have wrong dependences (drift is linear in E, includes q and n)."
          ],
          a: "$J_n = qn\\mu_n E$",
          v: "Drift current is the field-driven flow ✓; its companion is DIFFUSION current (driven by concentration gradients, $J=qD\\,dn/dx$). Together they govern all semiconductor device operation. Note conductivity $\\sigma = qn\\mu$, so $J = \\sigma E$ — Ohm's law."

        }), ref: "p.354" },
      { q: "Resistor temperature coefficient $\\alpha$: for Cu ~$0.00393$/°C. R at 100°C if $R_0 = 100\\ \\Omega$ at 0°C:",
        choices: ["$\\approx 139.3\\ \\Omega$", "$100\\ \\Omega$", "$200\\ \\Omega$", "$110\\ \\Omega$"], correct: 0,
        solution: S({
          c: "Resistance changes with temperature as $R = R_0(1 + \\alpha\\Delta T)$, where $\\alpha$ is the temperature coefficient and $\\Delta T$ the change from the reference.",
          s: [
            "<b>Step 1 — Apply.</b> $R = 100(1 + 0.00393\\times100) = 100(1.393) = 139.3\\ \\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 100 Ω ignores the rise; 200 Ω overestimates; 110 Ω uses a wrong α."
          ],
          a: "$R \\approx 139.3\\ \\Omega$",
          v: "Copper resistance rises ~39% over a 100°C climb ✓ — significant for motor windings and power cables, where hot-resistance must be accounted for. This positive α is the metal signature."

        }), ref: "p.354" },
    ],

    // Circuits — +25
    6: [
      { q: "Sum of currents into a node = 0 is:",
        choices: ["Kirchhoff's Current Law (KCL)", "KVL", "Ohm's", "Tellegen"], correct: 0,
        solution: S({ c: "KCL: conservation of charge at node.", s: ["KVL: conservation of energy around loop."], a: "KCL" }), ref: "p.356" },
      { q: "Three identical resistors $R$ in star (Y): equivalent in $\\Delta$:",
        choices: ["$3R$", "$R$", "$R/3$", "$9R$"], correct: 0,
        solution: S({ c: "$Y$ to $\\Delta$ (balanced): $Z_\\Delta = 3 Z_Y$.", s: [""], a: "$3R$" }), ref: "p.363" },
      { q: "Cap initially at 0V charges to $V_s = 24$V via $R = 1$ kΩ, $C = 1000$ µF. Time to reach 12V:",
        choices: ["$\\approx 0.693$ s", "$1$ s", "$5$ s", "$0.5$ s"], correct: 0,
        solution: S({ c: "$v(t) = V_s(1-e^{-t/\\tau})$. Solve for $v = V_s/2$: $e^{-t/\\tau} = 0.5$, $t/\\tau = \\ln 2$.", s: ["$\\tau = 10^3 \\cdot 10^{-3} = 1$ s.", "$t = \\ln 2 \\cdot 1 = 0.693$ s."], a: "$0.693$ s", v: "$\\ln 2 \\approx 0.693$ — half-life equivalent." }), ref: "p.358" },
      { q: "Maximum power transferred to load from $V_{Th} = 10$ V, $R_{Th} = 5$Ω:",
        choices: ["$5$ W (when $R_L = 5$Ω)", "$10$ W", "$20$ W", "$2$ W"], correct: 0,
        solution: S({ c: "$P_{max} = V_{Th}^2/(4 R_{Th})$.", s: ["$100/20 = 5$ W."], a: "$5$ W" }), ref: "p.360" },
      { q: "Series RLC at resonance, current is:",
        choices: ["Maximum, in phase with V", "Minimum", "Lagging", "Leading"], correct: 0,
        solution: S({ c: "At resonance: $Z = R$ (purely resistive, min). Current max, in phase.", s: [""], a: "Max, in phase" }), ref: "p.361" },
      { q: "Inductor $V = L\\,di/dt$. If $i(t) = 3\\sin(100t)$ A, $L = 50$ mH, peak voltage:",
        choices: ["$15$ V", "$50$ V", "$3$ V", "$300$ V"], correct: 0,
        solution: S({ c: "$di/dt = 300\\cos(100t)$. Peak $= 300$.", s: ["$V_{peak} = L \\cdot 300 = 0.05 \\cdot 300 = 15$ V."], a: "$15$ V" }), ref: "p.358" },
      { q: "Two capacitors $C_1=2$ µF and $C_2=4$ µF in parallel, then series with $C_3=6$ µF. Total:",
        choices: ["$3$ µF", "$12$ µF", "$2$ µF", "$1$ µF"], correct: 0,
        solution: S({ c: "Parallel: add. Series: reciprocal sum.", s: ["$C_1\\|C_2 = 6$ µF.", "Series with $C_3=6$: $6 \\cdot 6/(6+6) = 3$ µF."], a: "$3$ µF" }), ref: "p.358" },
      { q: "Z = 50 + j20 Ω in polar form:",
        choices: ["$\\approx 53.85\\angle 21.8°$", "$70\\angle 45°$", "$50\\angle 20°$", "$30\\angle 90°$"], correct: 0,
        solution: S({ c: "$|Z|=\\sqrt{2500+400} = \\sqrt{2900}$. $\\angle = \\arctan(20/50)$.", s: ["$|Z| \\approx 53.85$. $\\arctan(0.4) \\approx 21.8°$."], a: "$53.85\\angle 21.8°$" }), ref: "p.360" },
      { q: "Three-phase Y source, $V_{LN} = 120$ V, $Z_\\phi = 8\\ \\Omega$ resistive. Total power:",
        choices: ["$5400$ W", "$1800$ W", "$15$ W", "$45$ W"], correct: 0,
        solution: S({ c: "Per phase: $I_\\phi = V/Z = 15$ A. $P_\\phi = I^2 R = 225 \\cdot 8 = 1800$ W. Total $3 \\times$.", s: ["$3 \\cdot 1800 = 5400$ W."], a: "$5400$ W" }), ref: "p.363" },
      { q: "AC sinusoid $v(t) = 50\\sin(\\omega t + 30°)$. Phasor:",
        choices: ["$50\\angle 30°$ (peak) or $35.4\\angle 30°$ (RMS)", "$50\\angle 0°$", "$30\\angle 50°$", "$50\\angle -30°$"], correct: 0,
        solution: S({ c: "Phasor: magnitude (peak or RMS) and phase angle.", s: ["Peak phasor: $50\\angle 30°$.", "RMS: divide by $\\sqrt{2}$."], a: "$50\\angle 30°$ (peak)" }), ref: "p.360" },
      { q: "Reactive power Q for $V_{rms}=100$, $I_{rms}=5$, $\\theta = 60°$ (V leads I):",
        choices: ["$\\approx 433$ VAR", "$250$ VAR", "$500$ VAR", "$\\approx 250$ W"], correct: 0,
        solution: S({ c: "$Q = V \\cdot I \\cdot \\sin\\theta$. Inductive load (V leads I) → Q positive.", s: ["$100 \\cdot 5 \\cdot \\sin 60° = 500 \\cdot 0.866 = 433$ VAR."], a: "$\\approx 433$ VAR" }), ref: "p.362" },
      { q: "Average power for $V_{rms}=100$, $I_{rms}=5$, $\\theta=60°$:",
        choices: ["$250$ W", "$500$ W", "$\\approx 433$ W", "$0$"], correct: 0,
        solution: S({ c: "$P = VI\\cos\\theta$.", s: ["$100 \\cdot 5 \\cdot 0.5 = 250$ W."], a: "$250$ W" }), ref: "p.362" },
      { q: "Two impedances $Z_1 = 6+j8$ and $Z_2 = 8+j6$ in parallel. Total Z:",
        choices: ["$\\approx 5.04\\angle 45°$ (computed)", "$14+j14$", "$7+j7$", "$50$"], correct: 0,
        solution: S({ c: "Parallel: $Z_1 Z_2/(Z_1+Z_2)$.", s: ["$Z_1 + Z_2 = 14+j14 = 14\\sqrt{2}\\angle 45°$.", "$Z_1 Z_2 = 10\\angle 53.13° \\cdot 10\\angle 36.87° = 100\\angle 90°$.", "Ratio: $100\\angle 90° / (14\\sqrt{2}\\angle 45°) = 5.05\\angle 45°$."], a: "$\\approx 5.05\\angle 45°$" }), ref: "p.360" },
      { q: "Total power dissipated in a 3-phase 480 V Y-source delivering 30 A at pf 0.9:",
        choices: ["$\\approx 22.4$ kW", "$13.0$ kW", "$15$ kW", "$25$ kW"], correct: 0,
        solution: S({ c: "$P = \\sqrt{3} V_{LL} I_L \\cos\\theta$.", s: ["$\\sqrt{3} \\cdot 480 \\cdot 30 \\cdot 0.9 = 22{,}448$ W."], a: "$22.4$ kW" }), ref: "p.363" },
      { q: "Voltage drop on 100 ft #14 AWG copper (R ≈ 0.253 Ω/100 ft each way = 0.506 round trip) at 15 A:",
        choices: ["$\\approx 7.6$ V", "$3.8$ V", "$15$ V", "$0.25$ V"], correct: 0,
        solution: S({ c: "$V_{drop} = I \\cdot R$ (both directions).", s: ["$15 \\cdot 0.506 = 7.59$ V."], a: "$\\approx 7.6$ V", v: "NEC: drop should be < 3% of nominal (120V → < 3.6V). This exceeds — need bigger wire." }), ref: "p.354" },
      { q: "Three resistors in series: 5Ω, 10Ω, 15Ω. Current with 60V source:",
        choices: ["$2$ A", "$4$ A", "$6$ A", "$0.5$ A"], correct: 0,
        solution: S({ c: "Series: $R_{total} = 30$. $I = V/R$.", s: ["$60/30 = 2$ A."], a: "$2$ A" }), ref: "p.356" },
      { q: "Energy delivered by 12V battery providing 2A for 1 hr:",
        choices: ["$86.4$ kJ (or 24 Wh)", "$24$ J", "$24$ kWh", "$86.4$ J"], correct: 0,
        solution: S({ c: "$W = Pt$. $P = VI = 24$ W. $t = 3600$ s.", s: ["$W = 24 \\cdot 3600 = 86{,}400$ J = 86.4 kJ = 24 Wh."], a: "$86.4$ kJ" }), ref: "p.356" },
      { q: "Calculate phasor impedance: 100Ω resistor, 200mH inductor in series at 50 Hz:",
        choices: ["$100 + j62.8$ Ω", "$100 + j10$", "$100\\angle 90°$", "$200\\angle 0°$"], correct: 0,
        solution: S({ c: "$X_L = 2\\pi f L$.", s: ["$X_L = 2\\pi(50)(0.2) = 62.83$ Ω.", "$Z = 100 + j62.83$ Ω."], a: "$100+j62.8$ Ω" }), ref: "p.360" },
      { q: "Cap and inductor in parallel at resonance:",
        choices: ["Acts as open circuit (infinite Z)", "Short", "Just R", "Acts as wire"], correct: 0,
        solution: S({ c: "Parallel LC at $\\omega_0$: ideally infinite impedance (tank).", s: ["With losses: very high but finite Q-dependent peak."], a: "Open at $\\omega_0$" }), ref: "p.361" },
      { q: "Power factor of $Z = 6 + j8$ (in series):",
        choices: ["$0.6$ lagging", "$0.8$", "$1.0$", "$0.6$ leading"], correct: 0,
        solution: S({ c: "$\\theta = \\arctan(8/6) = 53.13°$. $pf = \\cos = 0.6$. Inductive: lagging.", s: [""], a: "$0.6$ lagging" }), ref: "p.362" },
      { q: "Star-to-delta transformation with $Z_Y = 9+j12$ each: $Z_\\Delta$:",
        choices: ["$27 + j36$ each", "$3 + j4$ each", "$9+j12$ each", "$81+j144$ each"], correct: 0,
        solution: S({ c: "Balanced: $Z_\\Delta = 3 Z_Y$.", s: ["$3(9+j12) = 27+j36$."], a: "$27+j36$" }), ref: "p.363" },
      { q: "Power dissipated by 100Ω resistor with $i = 2 + 3\\sin(\\omega t)$ A:",
        choices: ["$\\approx 850$ W (DC²+AC²RMS²)R", "$400$ W", "$900$ W", "$700$ W"], correct: 0,
        solution: S({ c: "$P = I_{rms}^2 R$. $I_{rms}^2 = I_{DC}^2 + I_{AC,RMS}^2 = 4 + 9/2 = 8.5$.", s: ["$P = 8.5 \\cdot 100 = 850$ W."], a: "$\\approx 850$ W" }), ref: "p.360" },
      { q: "Energy in 1µH inductor at 100 mA:",
        choices: ["$5$ nJ", "$5$ µJ", "$5$ mJ", "$0.1$ µJ"], correct: 0,
        solution: S({ c: "$W = LI^2/2$.", s: ["$10^{-6} \\cdot 0.01/2 = 5 \\cdot 10^{-9} = 5$ nJ."], a: "$5$ nJ" }), ref: "p.358" },
      { q: "$V_{rms}$ of triangular wave with peak $V_m$:",
        choices: ["$V_m/\\sqrt{3}$", "$V_m/\\sqrt{2}$", "$V_m$", "$V_m/2$"], correct: 0,
        solution: S({ c: "Triangular wave RMS factor: $1/\\sqrt{3} \\approx 0.577$.", s: ["Sine: $1/\\sqrt{2} \\approx 0.707$.", "Square: 1.", "Sawtooth: $1/\\sqrt{3}$."], a: "$V_m/\\sqrt{3}$" }), ref: "p.360" },
      { q: "Time constant of RL circuit with 200Ω and 50 mH:",
        choices: ["$0.25$ ms", "$250$ s", "$10$ s", "$5$ ms"], correct: 0,
        solution: S({ c: "$\\tau = L/R$.", s: ["$0.05/200 = 0.00025$ s = 0.25 ms."], a: "$0.25$ ms" }), ref: "p.358" },
    ],

    // Linear Sys — +12
    7: [
      { q: "Inverse Laplace of $1/(s+a)^2$:",
        choices: ["$te^{-at}$", "$e^{-at}$", "$te^{at}$", "$1/(at)$"], correct: 0,
        solution: S({ c: "Pair: $t^n e^{-at} \\leftrightarrow n!/(s+a)^{n+1}$.", s: ["$n=1$: $te^{-at} \\leftrightarrow 1/(s+a)^2$."], a: "$te^{-at}$" }), ref: "p.56" },
      { q: "Transfer function order = highest power of $s$ in denominator. For $H(s) = 1/(s^3+2s^2+5s+1)$:",
        choices: ["$3$rd order", "$1$st", "$5$th", "$2$nd"], correct: 0,
        solution: S({ c: "Highest exponent of $s$ in denominator.", s: [""], a: "$3$rd" }), ref: "p.365" },
      { q: "DC gain of $H(s) = 12/(s^2+5s+6)$:",
        choices: ["$2$", "$12$", "$6$", "$1$"], correct: 0,
        solution: S({ c: "$H(0) = 12/6 = 2$.", s: [""], a: "$2$" }), ref: "p.366" },
      { q: "Two systems in parallel: $H_1 = 3$, $H_2 = -2$. Total:",
        choices: ["$1$", "$-6$", "$5$", "$-2/3$"], correct: 0,
        solution: S({ c: "Parallel TF adds.", s: ["$3 + (-2) = 1$."], a: "$1$" }), ref: "p.365" },
      { q: "Phase of $H(s) = 1/(s+1)$ at $\\omega = 1$:",
        choices: ["$-45°$", "$0°$", "$-90°$", "$+45°$"], correct: 0,
        solution: S({ c: "Pole at corner frequency: phase contribution is -45°.", s: [""], a: "$-45°$" }), ref: "p.366" },
      { q: "Bandwidth of overdamped 2nd-order system: dominant pole at $s = -2$. BW:",
        choices: ["$\\approx 2$ rad/s (dominant pole approximation)", "$\\sqrt{2}$", "$1$", "Infinite"], correct: 0,
        solution: S({ c: "Dominant pole approximation: BW $\\approx |p_{dominant}|$.", s: ["Valid when other poles much further from origin."], a: "$\\approx 2$ rad/s" }), ref: "p.366" },
      { q: "Pole at $s = -2 \\pm j5$. Natural frequency $\\omega_n$:",
        choices: ["$\\sqrt{29} \\approx 5.39$ rad/s", "$5$", "$2$", "$7$"], correct: 0,
        solution: S({ c: "$\\omega_n = $ distance from origin.", s: ["$\\sqrt{4+25} = \\sqrt{29}$."], a: "$\\approx 5.39$ rad/s" }), ref: "p.366" },
      { q: "Damping ratio $\\zeta$ for pole at $-2 \\pm j5$:",
        choices: ["$2/\\sqrt{29} \\approx 0.371$", "$0.5$", "$0.707$", "$1.0$"], correct: 0,
        solution: S({ c: "$\\zeta = |\\text{Re}|/\\omega_n$.", s: ["$2/\\sqrt{29} \\approx 0.371$."], a: "$\\approx 0.371$" }), ref: "p.366" },
      { q: "Final value of $y(t)$ for $Y(s) = 5/(s(s+2))$:",
        choices: ["$2.5$", "$5$", "$0$", "$\\infty$"], correct: 0,
        solution: S({ c: "FVT: $\\lim_{s\\to 0} sY = 5/2 = 2.5$.", s: [""], a: "$2.5$" }), ref: "p.56" },
      { q: "Initial value $y(0^+)$ for $Y(s) = 2s/(s^2+1)$:",
        choices: ["$2$", "$0$", "$1$", "$\\infty$"], correct: 0,
        solution: S({ c: "IVT: $\\lim_{s\\to\\infty} sY(s)$.", s: ["$\\lim 2s^2/(s^2+1) = 2$."], a: "$2$" }), ref: "p.56" },
      { q: "BIBO stability requires:",
        choices: ["Bounded input → bounded output", "Linear", "Time-invariant", "Causal"], correct: 0,
        solution: S({ c: "BIBO = Bounded-Input Bounded-Output.", s: ["For LTI: all poles in LHP."], a: "Bounded I/O" }), ref: "p.365" },
      { q: "Pole-zero cancellation may cause:",
        choices: ["Hidden modes (uncontrollable/unobservable)", "Always stable", "Infinite gain", "Phase shift"], correct: 0,
        solution: S({ c: "If unstable pole is canceled by zero, internal state may still grow → BIBO stable but internally unstable.", s: [""], a: "Hidden modes" }), ref: "p.365" },
    ],

    // Signal — +12
    8: [
      { q: "Nyquist rate for signal up to 20 kHz:",
        choices: ["$> 40$ kHz", "$20$ kHz", "$10$ kHz", "$80$ kHz"], correct: 0,
        solution: S({ c: "$f_s > 2 f_{max}$.", s: [""], a: "$> 40$ kHz" }), ref: "p.375" },
      { q: "Anti-aliasing filter type:",
        choices: ["Low-pass before sampler", "High-pass", "Notch", "Bandpass after"], correct: 0,
        solution: S({ c: "Anti-aliasing: remove frequencies above Nyquist before sampling.", s: [""], a: "LPF" }), ref: "p.375" },
      { q: "DFT bin spacing for $N$-point DFT, $f_s$ sampling:",
        choices: ["$f_s/N$ Hz", "$f_s$", "$2 f_s$", "$1$ Hz"], correct: 0,
        solution: S({ c: "Frequency resolution = $f_s/N$.", s: ["E.g., 1024-point at 8 kHz: bins every 7.8 Hz."], a: "$f_s/N$" }), ref: "p.376" },
      { q: "Hanning window vs rectangular: tradeoff:",
        choices: ["Hanning: less leakage but wider main lobe", "Same", "Hanning is faster", "Rect is better"], correct: 0,
        solution: S({ c: "Windowing reduces spectral leakage at cost of frequency resolution.", s: [""], a: "Less leakage, wider main lobe" }), ref: "p.376" },
      { q: "FIR filter: impulse response length 10. Group delay:",
        choices: ["$4.5$ samples (constant if symmetric)", "$10$", "$5$", "$0$"], correct: 0,
        solution: S({ c: "Linear-phase FIR (symmetric coefficients): group delay = $(N-1)/2$.", s: ["$N=10$: delay = 4.5 samples."], a: "$4.5$ samples" }), ref: "p.376" },
      { q: "Aliasing of 8 kHz signal sampled at 6 kHz:",
        choices: ["Apparent $2$ kHz ($|8-6|$)", "$8$ kHz", "$0$", "$14$ kHz"], correct: 0,
        solution: S({ c: "$8 > 3 = f_s/2$, alias to $|8-6| = 2$ kHz.", s: [""], a: "$2$ kHz" }), ref: "p.375" },
      { q: "Magnitude response of $H(j\\omega) = 1/(1 + j\\omega/\\omega_c)$ at $\\omega = \\omega_c$:",
        choices: ["$1/\\sqrt{2} = -3$ dB", "$1$", "$0$", "$1/2$"], correct: 0,
        solution: S({ c: "1st-order LPF at corner.", s: ["$|H| = 1/\\sqrt{1+1} = 1/\\sqrt{2}$. dB: $-3.01$."], a: "$-3$ dB" }), ref: "p.375" },
      { q: "$\\delta[n]$ Fourier transform (DTFT):",
        choices: ["Constant 1 (flat spectrum)", "$\\delta(\\omega)$", "$1/(j\\omega)$", "Cosine"], correct: 0,
        solution: S({ c: "Impulse has flat spectrum.", s: [""], a: "$1$" }), ref: "p.376" },
      { q: "Bode plot 1st-order pole at $\\omega = 10$. Asymptotic mag at $\\omega = 100$:",
        choices: ["$-20$ dB", "$0$ dB", "$-3$ dB", "$-40$ dB"], correct: 0,
        solution: S({ c: "1 decade above corner: -20 dB.", s: [""], a: "$-20$ dB" }), ref: "p.366" },
      { q: "Bode plot 1st-order zero at 10. Asymptotic mag at $\\omega = 100$:",
        choices: ["$+20$ dB", "$0$", "$-20$", "$+3$"], correct: 0,
        solution: S({ c: "Zero contributes +20 dB/decade above corner.", s: [""], a: "$+20$ dB" }), ref: "p.366" },
      { q: "Group delay of $H(s) = 1$ (unity):",
        choices: ["$0$", "$\\infty$", "$1$", "Undefined"], correct: 0,
        solution: S({ c: "Constant H = no delay or phase shift.", s: [""], a: "$0$" }), ref: "p.366" },
      { q: "Z-transform of $a^n u[n]$:",
        choices: ["$1/(1-az^{-1}) = z/(z-a)$", "$1$", "$z/(z+a)$", "$a^n/z$"], correct: 0,
        solution: S({ c: "Geometric Z-transform.", s: [""], a: "$z/(z-a)$" }), ref: "p.376" },
    ],

    // Electronics — +20
    9: [
      { q: "Inverting amp $R_f = 50$ k, $R_{in} = 5$ k, $v_{in} = 100$ mV. Output:",
        choices: ["$-1.0$ V", "$+1.0$ V", "$-10$ V", "$-0.01$ V"], correct: 0,
        solution: S({ c: "Gain $= -R_f/R_{in} = -10$.", s: ["$-10 \\cdot 0.1 = -1.0$ V."], a: "$-1.0$ V" }), ref: "p.380" },
      { q: "Non-inverting amp output when $v_{in} = 0$:",
        choices: ["$0$ V", "$\\infty$", "$V_{cc}$", "$-V_{cc}$"], correct: 0,
        solution: S({ c: "Linear with positive gain. $v_{out} = G \\cdot v_{in} = 0$.", s: [""], a: "$0$ V" }), ref: "p.380" },
      { q: "Voltage follower input impedance:",
        choices: ["Very high (ideal op-amp's $Z_{in}$)", "Zero", "$R$", "$1$ Ω"], correct: 0,
        solution: S({ c: "Buffer: no feedback to input → full op-amp Z_in seen.", s: [""], a: "Very high" }), ref: "p.380" },
      { q: "BJT bias: $V_{CC} = 12$, $R_C = 1$ kΩ, $R_B = 220$ kΩ, $\\beta = 100$. $V_{BE}=0.7$V. $I_B$:",
        choices: ["$\\approx 51.4$ µA", "$10$ mA", "$1$ mA", "$0.05$ mA"], correct: 0,
        solution: S({ c: "$I_B = (V_{CC} - V_{BE})/R_B$.", s: ["$(12-0.7)/220000 = 51.4$ µA."], a: "$\\approx 51.4$ µA" }), ref: "p.384" },
      { q: "Above BJT: $I_C$:",
        choices: ["$\\approx 5.14$ mA", "$0.5$ mA", "$50$ mA", "$1$ A"], correct: 0,
        solution: S({ c: "$I_C = \\beta I_B$.", s: ["$100 \\cdot 51.4 µA = 5.14$ mA."], a: "$\\approx 5.14$ mA" }), ref: "p.384" },
      { q: "$V_{CE}$ for above:",
        choices: ["$\\approx 6.86$ V (active region)", "$0.2$ V", "$12$ V", "$0$"], correct: 0,
        solution: S({ c: "$V_{CE} = V_{CC} - I_C R_C$.", s: ["$12 - 5.14 \\cdot 1 = 6.86$ V. Active region (between sat and cutoff)."], a: "$\\approx 6.86$ V" }), ref: "p.384" },
      { q: "Class A amp: transistor conducts for:",
        choices: ["Full 360°", "180°", "Pulses only", "Variable"], correct: 0,
        solution: S({ c: "Class A: continuous conduction → linear but inefficient.", s: [""], a: "$360°$" }), ref: "p.384" },
      { q: "Push-pull (Class B) amp uses:",
        choices: ["Two complementary transistors", "One BJT", "Single FET", "MOSFET only"], correct: 0,
        solution: S({ c: "Class B: NPN + PNP (or N/P MOSFET) — each conducts half-cycle.", s: ["Higher efficiency but crossover distortion."], a: "Complementary pair" }), ref: "p.384" },
      { q: "Zener regulator: $V_Z = 5.6$ V, $I_{Z,min} = 5$ mA. With load 1 kΩ, source 12V, find $R_s$:",
        choices: ["$\\approx 581$ Ω", "$1$ kΩ", "$100$ Ω", "$2$ kΩ"], correct: 0,
        solution: S({ c: "$R_s$ must allow $I_{load} + I_{Z,min}$ to flow.", s: ["$I_{load} = 5.6/1000 = 5.6$ mA.", "$I_s = I_{load} + I_Z = 5.6 + 5 = 10.6$ mA.", "$R_s = (12 - 5.6)/0.0106 = 604$ Ω. Close enough — round."], a: "$\\sim 600$ Ω" }), ref: "p.383" },
      { q: "Op-amp output current limit typically:",
        choices: ["~20-50 mA (general purpose)", "1 A", "1 µA", "Unlimited"], correct: 0,
        solution: S({ c: "Most general-purpose op-amps source/sink 20-50 mA short-circuit safe.", s: ["Power op-amps: 1-5 A."], a: "20-50 mA typical" }), ref: "p.380" },
      { q: "Common-emitter amplifier output impedance:",
        choices: ["$\\approx R_C$ (collector resistor)", "Very low", "Zero", "$r_e$"], correct: 0,
        solution: S({ c: "$Z_{out}$ at collector $\\approx R_C \\| r_o$, where $r_o$ usually large.", s: [""], a: "$R_C$" }), ref: "p.384" },
      { q: "Crystal oscillator stability:",
        choices: ["1-100 ppm typically", "1%", "10%", "No drift"], correct: 0,
        solution: S({ c: "Crystals: $10^{-6}$ to $10^{-8}$ stability over T.", s: ["TCXO (temp-compensated): even better. OCXO (oven-controlled): $10^{-9}$."], a: "1-100 ppm" }), ref: "p.380" },
      { q: "An LC oscillator frequency:",
        choices: ["$f_0 = 1/(2\\pi\\sqrt{LC})$", "$RC$", "Same as $\\omega L$", "Fixed"], correct: 0,
        solution: S({ c: "Tank circuit resonance.", s: [""], a: "$1/(2\\pi\\sqrt{LC})$" }), ref: "p.361" },
      { q: "Photodiode operating mode for max speed:",
        choices: ["Reverse bias", "Forward bias", "Zero bias", "AC"], correct: 0,
        solution: S({ c: "Reverse bias: widens depletion → faster carrier collection. Lower capacitance.", s: ["Zero bias (photovoltaic mode): low noise but slower."], a: "Reverse bias" }), ref: "p.383" },
      { q: "MOSFET enhancement vs depletion mode:",
        choices: ["Enhancement: needs gate V > $V_{th}$ to turn on; depletion conducts at $V_{GS}=0$", "Same", "Depletion is always on", "Enhancement is faster"], correct: 0,
        solution: S({ c: "Enhancement: 'normally off'. Depletion: 'normally on'.", s: [""], a: "Enhancement off, depletion on" }), ref: "p.386" },
      { q: "Power dissipated by 5V Zener carrying 100 mA:",
        choices: ["$0.5$ W", "$5$ W", "$50$ mW", "$2.5$ W"], correct: 0,
        solution: S({ c: "$P = V_Z \\cdot I_Z$.", s: ["$5 \\cdot 0.1 = 0.5$ W."], a: "$0.5$ W" }), ref: "p.383" },
      { q: "Inverting summer with $R_f = R_1 = R_2 = 10$ k. $v_1 = 1$, $v_2 = 2$. Output:",
        choices: ["$-3$ V", "$+3$ V", "$3/2$ V", "$0$"], correct: 0,
        solution: S({ c: "Summer: $v_{out} = -R_f \\sum v_i/R_i$.", s: ["All $R$ equal: $v_{out} = -(v_1 + v_2) = -3$."], a: "$-3$ V" }), ref: "p.380" },
      { q: "Common-source MOSFET amp output impedance:",
        choices: ["$R_D \\| r_o$", "Zero", "Infinite", "$r_e$"], correct: 0,
        solution: S({ c: "Parallel combination of drain resistor and intrinsic $r_o$.", s: [""], a: "$R_D \\| r_o$" }), ref: "p.386" },
      { q: "Buck-boost converter polarity of output (continuous mode):",
        choices: ["Opposite sign of input (inverted)", "Same sign", "Always positive", "AC"], correct: 0,
        solution: S({ c: "Standard buck-boost inverts polarity.", s: ["Non-inverting topologies (Ćuk, SEPIC) preserve polarity but more components."], a: "Inverted" }), ref: "p.383" },
      { q: "ADC SAR (Successive Approximation Register) speed:",
        choices: ["Medium ($\\sim$ MSps for 12-bit)", "Fastest", "Slow", "Hz range"], correct: 0,
        solution: S({ c: "SAR: binary search per bit. $N$-bit needs $N$ steps.", s: ["Pipelined: faster but more silicon.", "Sigma-delta: slow but high resolution.", "Flash: fastest but expensive."], a: "Medium speed" }), ref: "p.388" },
    ],

    // Power — +18
    10: [
      { q: "Line current for 30 kW load at $V_{LL} = 480$ V, $pf = 0.85$:",
        choices: ["$\\approx 42.5$ A", "$\\$30$ A", "$\\$60$ A", "$\\$15$ A"], correct: 0,
        solution: S({ c: "$P = \\sqrt{3} V_{LL} I_L \\cos\\theta$.", s: ["$I_L = P/(\\sqrt{3} V_{LL} \\cos\\theta) = 30000/(1.732 \\cdot 480 \\cdot 0.85) = 42.45$ A."], a: "$\\approx 42.5$ A" }), ref: "p.363" },
      { q: "Wye→Delta with each Y impedance $5\\angle 30°$ Ω. Delta phase Z:",
        choices: ["$15\\angle 30°$ Ω", "$5\\angle 30°$", "$1.67\\angle 30°$", "$25\\angle 60°$"], correct: 0,
        solution: S({ c: "Balanced Y→Δ: $Z_\\Delta = 3 Z_Y$.", s: ["$3 \\cdot 5\\angle 30° = 15\\angle 30°$."], a: "$15\\angle 30°$" }), ref: "p.363" },
      { q: "Transformer with primary 240V, secondary 24V. Reflect 10Ω load on secondary to primary:",
        choices: ["$1000$ Ω", "$1$ Ω", "$10$ Ω", "$100$ Ω"], correct: 0,
        solution: S({ c: "$Z' = a^2 Z$. $a = 10$.", s: ["$10^2 \\cdot 10 = 1000$ Ω."], a: "$1000$ Ω" }), ref: "p.364" },
      { q: "Motor at 60 Hz, 4 poles, 1750 rpm full-load. Slip:",
        choices: ["$\\approx 2.8\\%$", "$5\\%$", "$10\\%$", "$0$"], correct: 0,
        solution: S({ c: "Sync: $n_s = 120f/p = 1800$. Slip: $(1800-1750)/1800$.", s: ["$50/1800 = 2.78\\%$."], a: "$\\approx 2.78\\%$" }), ref: "p.365" },
      { q: "DC motor armature current with $V = 220$V, $E_b = 200$V, $R_a = 0.5$Ω:",
        choices: ["$40$ A", "$20$ A", "$440$ A", "$100$ A"], correct: 0,
        solution: S({ c: "$I_a = (V - E_b)/R_a$.", s: ["$(220-200)/0.5 = 40$ A."], a: "$40$ A" }), ref: "p.365" },
      { q: "Active power formula in three-phase using line quantities:",
        choices: ["$P = \\sqrt{3} V_{LL} I_L \\cos\\theta$", "$P = V_{LL} I_L \\cos\\theta$", "$P = 3 V_{LL} I_L$", "$V/R$"], correct: 0,
        solution: S({ c: "Standard 3-φ formula (Y or Δ).", s: [""], a: "$\\sqrt{3} V_{LL} I_L \\cos\\theta$" }), ref: "p.363" },
      { q: "Transformer turns ratio 10:1 step down. Apply 4800V primary, get:",
        choices: ["$480$ V", "$48{,}000$ V", "$4800$ V", "$48$ V"], correct: 0,
        solution: S({ c: "$V_2 = V_1/a$.", s: ["$4800/10 = 480$ V."], a: "$480$ V" }), ref: "p.364" },
      { q: "Apparent vs real power: $|S|^2$ =",
        choices: ["$P^2 + Q^2$", "$P + Q$", "$P - Q$", "$P/Q$"], correct: 0,
        solution: S({ c: "Power triangle: $|S|^2 = P^2 + Q^2$.", s: [""], a: "$P^2+Q^2$" }), ref: "p.362" },
      { q: "Per-unit impedance of 50 MVA, 13.8 kV transformer with $Z_{actual} = 0.5$ Ω:",
        choices: ["$\\approx 0.131$ pu", "$0.5$ pu", "$1.0$ pu", "$10$ pu"], correct: 0,
        solution: S({ c: "$Z_{base} = V^2/S$. $Z_{pu} = Z_{actual}/Z_{base}$.", s: ["$Z_{base} = 13800^2/50000000 = 3.808$ Ω.", "$Z_{pu} = 0.5/3.808 = 0.131$ pu."], a: "$0.131$ pu" }), ref: "p.363" },
      { q: "Synchronous speed of 2-pole machine at 50 Hz:",
        choices: ["$3000$ rpm", "$1500$ rpm", "$6000$ rpm", "$1800$ rpm"], correct: 0,
        solution: S({ c: "$n_s = 120 f / p$.", s: ["$120 \\cdot 50/2 = 3000$ rpm."], a: "$3000$ rpm" }), ref: "p.365" },
      { q: "Three-phase rectifier output ripple vs single-phase:",
        choices: ["Lower ripple, 6-pulse per cycle", "Higher", "Same", "Zero"], correct: 0,
        solution: S({ c: "3-φ full-wave: 6 pulses/cycle → smoother DC.", s: ["1-φ full-wave: 2 pulses."], a: "Lower ripple" }), ref: "p.383" },
      { q: "Power factor 0.5 lagging means:",
        choices: ["$\\theta = 60°$, current lags voltage", "Resistive", "Capacitive", "Leading"], correct: 0,
        solution: S({ c: "$\\cos 60° = 0.5$. Lagging → inductive.", s: [""], a: "$60°$ lag (inductive)" }), ref: "p.362" },
      { q: "Voltage drop in transmission line approximately:",
        choices: ["$V_R \\approx |I|(R\\cos\\theta + X\\sin\\theta)$", "$IR$ only", "$IZ$ vector", "$V$"], correct: 0,
        solution: S({ c: "Approximate voltage regulation: $\\Delta V = I(R\\cos\\theta + X\\sin\\theta)$.", s: ["Sometimes called Vd formula in distribution analysis."], a: "$IR\\cos+IX\\sin$" }), ref: "p.363" },
      { q: "Why X >> R for long transmission lines:",
        choices: ["Inductive reactance dominates over copper R", "Capacitive", "Mutual coupling", "Frequency low"], correct: 0,
        solution: S({ c: "Long lines: inductance per km × length grows; R relatively small.", s: ["Why power flow controlled mostly by phase angle (governed by reactance)."], a: "$X$ dominant" }), ref: "p.363" },
      { q: "Capacitor bank for PF correction: $P = 50$ kW, raise PF 0.7→0.95:",
        choices: ["$\\approx 34.6$ kVAR", "$50$ kVAR", "$10$ kVAR", "$15$ kVAR"], correct: 0,
        solution: S({ c: "$Q_C = P(\\tan\\theta_1 - \\tan\\theta_2)$.", s: ["$\\theta_1 = \\arccos 0.7 = 45.57°$, $\\tan = 1.0202$.", "$\\theta_2 = \\arccos 0.95 = 18.19°$, $\\tan = 0.3287$.", "$Q_C = 50(1.0202 - 0.3287) = 50 \\cdot 0.6915 = 34.58$ kVAR."], a: "$\\approx 34.6$ kVAR" }), ref: "p.362" },
      { q: "Three-phase fault current $I_{SC}$ in pu: $V_{pu} = 1.0$, $Z_{pu} = 0.1$:",
        choices: ["$10$ pu", "$1$ pu", "$0.1$ pu", "$100$ pu"], correct: 0,
        solution: S({ c: "$I_{SC,pu} = V_{pu}/Z_{pu}$.", s: ["$1/0.1 = 10$ pu."], a: "$10$ pu" }), ref: "p.363" },
      { q: "DC generator with $V_t = 240$V, $I_a = 50$A, $R_a = 0.2$Ω. Generated EMF:",
        choices: ["$250$ V", "$240$ V", "$230$ V", "$10$ V"], correct: 0,
        solution: S({ c: "Generator: $E_g = V_t + I_a R_a$ (drop is across armature when delivering current).", s: ["$240 + 50 \\cdot 0.2 = 250$ V."], a: "$250$ V" }), ref: "p.365" },
      { q: "Service factor of motor at FL means:",
        choices: ["Continuous-duty capacity multiplier of nameplate rating", "Voltage tolerance", "Frequency", "Starting current"], correct: 0,
        solution: S({ c: "SF: how much above nameplate the motor can run continuously without damage.", s: ["SF 1.0: only at nameplate.", "SF 1.15-1.25: typical general-purpose."], a: "Continuous overload" }), ref: "p.365" },
    ],

    // EM — +8
    11: [
      { q: "EM wave wavelength in vacuum at 300 MHz:",
        choices: ["$1$ m", "$300$ m", "$0.3$ m", "$3$ m"], correct: 0,
        solution: S({ c: "$\\lambda = c/f$.", s: ["$3 \\cdot 10^8 / 3 \\cdot 10^8 = 1$ m."], a: "$1$ m" }), ref: "p.368" },
      { q: "Power density of EM wave with $E_{rms} = 1$ V/m in vacuum:",
        choices: ["$\\approx 2.65$ mW/m²", "$1$ W/m²", "$120\\pi$ W/m²", "$0$"], correct: 0,
        solution: S({ c: "Poynting vector magnitude: $S = E^2/\\eta_0$. $\\eta_0 \\approx 377$ Ω.", s: ["$1^2/377 \\approx 2.65$ mW/m²."], a: "$\\approx 2.65$ mW/m²" }), ref: "p.368" },
      { q: "$\\nabla \\cdot \\vec{E} = \\rho/\\varepsilon_0$ is:",
        choices: ["Gauss's law (E-field divergence from charge)", "Faraday", "Ampere", "Coulomb"], correct: 0,
        solution: S({ c: "First Maxwell equation.", s: [""], a: "Gauss" }), ref: "p.355" },
      { q: "Permittivity of vacuum $\\varepsilon_0$ ≈",
        choices: ["$8.854 \\times 10^{-12}$ F/m", "$1$ F/m", "$\\mu_0$", "$10^{-7}$"], correct: 0,
        solution: S({ c: "Memorized constant.", s: [""], a: "$8.854\\times 10^{-12}$ F/m" }), ref: "p.355" },
      { q: "Transmission line characteristic impedance for $L'=0.5$ µH/m, $C'=200$ pF/m:",
        choices: ["$50$ Ω", "$100$ Ω", "$25$ Ω", "$0.5$ Ω"], correct: 0,
        solution: S({ c: "$Z_0 = \\sqrt{L/C}$.", s: ["$\\sqrt{0.5e-6/200e-12} = \\sqrt{2500} = 50$ Ω."], a: "$50$ Ω" }), ref: "p.368" },
      { q: "Reflection coefficient at matched load:",
        choices: ["$\\Gamma = 0$ (no reflection)", "$1$", "$-1$", "Infinite"], correct: 0,
        solution: S({ c: "$Z_L = Z_0$ → $\\Gamma = 0$. All power absorbed.", s: [""], a: "$0$" }), ref: "p.368" },
      { q: "Short-circuited transmission line: $\\Gamma$ at short:",
        choices: ["$-1$ (180° phase flip)", "$+1$", "$0$", "$0.5$"], correct: 0,
        solution: S({ c: "Short ($Z_L=0$): $\\Gamma = (0-Z_0)/(0+Z_0) = -1$.", s: ["Open: $\\Gamma = +1$."], a: "$-1$" }), ref: "p.368" },
      { q: "Microstrip $Z_0$ depends on:",
        choices: ["Trace width, dielectric height, $\\varepsilon_r$", "Just length", "Frequency only", "Color"], correct: 0,
        solution: S({ c: "Microstrip impedance formulas: depend on geometry and substrate.", s: ["Standard: 50 Ω with W/H ratio depending on dielectric."], a: "Geometry + $\\varepsilon_r$" }), ref: "p.368" },
    ],

    // Control — +12
    12: [
      { q: "PID controller transfer function in parallel form:",
        choices: ["$K_p + K_i/s + K_d s$", "$K_p(K_i)(K_d)$", "$K/s$", "Just $K$"], correct: 0,
        solution: S({ c: "Standard PID.", s: [""], a: "$K_p+K_i/s+K_d s$" }), ref: "p.366" },
      { q: "Pure proportional control of plant $G = 1/(s+1)$, K = 10. Closed-loop pole:",
        choices: ["$s = -11$", "$s = -1$", "$s = -10$", "$s = -1/10$"], correct: 0,
        solution: S({ c: "$T = KG/(1+KG) = 10/(s+1+10) = 10/(s+11)$.", s: [""], a: "$s = -11$" }), ref: "p.365" },
      { q: "If $G(s) = K/s$ and $H(s) = 1$ (unity feedback), closed-loop is:",
        choices: ["$K/(s+K)$ (1st-order LPF)", "$1$", "$1/(s+1)$", "$Ks$"], correct: 0,
        solution: S({ c: "$T = G/(1+G) = (K/s)/(1+K/s) = K/(s+K)$.", s: ["Pole at $-K$. DC gain = 1."], a: "$K/(s+K)$" }), ref: "p.365" },
      { q: "Gain crossover frequency $\\omega_{gc}$:",
        choices: ["Where $|G(j\\omega)H(j\\omega)| = 1$", "Where phase = 0", "DC", "Resonance"], correct: 0,
        solution: S({ c: "$\\omega_{gc}$: magnitude crosses 1 (0 dB).", s: ["Used to find phase margin."], a: "$|GH| = 1$" }), ref: "p.366" },
      { q: "Phase crossover frequency $\\omega_{pc}$:",
        choices: ["Where phase = -180°", "Where gain = 1", "DC", "Resonance"], correct: 0,
        solution: S({ c: "$\\omega_{pc}$: phase crosses -180°.", s: ["Used to find gain margin."], a: "Phase = $-180°$" }), ref: "p.366" },
      { q: "Lead compensator effect on $\\omega_{gc}$:",
        choices: ["Shifts $\\omega_{gc}$ higher (faster response)", "Shifts lower", "No effect", "Random"], correct: 0,
        solution: S({ c: "Lead adds gain at high freq → pushes crossover higher.", s: ["Result: faster transient response."], a: "Higher $\\omega_{gc}$" }), ref: "p.366" },
      { q: "Acceptable gain margin minimum:",
        choices: ["$\\ge 6$ dB typically", "$0$ dB", "$\\infty$", "$3$ dB"], correct: 0,
        solution: S({ c: "Design rule of thumb: GM ≥ 6 dB.", s: ["Combined with PM ≥ 30° for robust design."], a: "$\\ge 6$ dB" }), ref: "p.366" },
      { q: "Acceptable phase margin minimum:",
        choices: ["$\\ge 30°$ (60° is better)", "$\\ge 0°$", "$\\ge 90°$", "$0°$"], correct: 0,
        solution: S({ c: "PM ≥ 30° minimum, 45-60° typical target.", s: [""], a: "$\\ge 30°$" }), ref: "p.366" },
      { q: "Integral term in PI controller eliminates:",
        choices: ["Steady-state error to step", "Overshoot", "Noise", "Settling time"], correct: 0,
        solution: S({ c: "Integral adds a pole at origin → raises system type → zeros SS error to step.", s: [""], a: "SS step error" }), ref: "p.366" },
      { q: "Derivative term in PID:",
        choices: ["Improves damping but amplifies noise", "No effect", "Eliminates offset", "Adds gain only"], correct: 0,
        solution: S({ c: "D term: phase lead → damping. But high-freq noise amplified.", s: ["Usually filtered: D acts on filtered signal."], a: "Damping + noise issue" }), ref: "p.366" },
      { q: "Time scaling: if $G(s)$ stable, $G(s/T)$ for $T > 0$:",
        choices: ["Still stable but slower", "Unstable", "Faster", "Unrelated"], correct: 0,
        solution: S({ c: "$s \\to s/T$ scales time. Poles scale by T. All move along ray from origin.", s: ["LHP stays LHP for $T>0$."], a: "Stable, slower" }), ref: "p.365" },
      { q: "Closed-loop bandwidth ≈ gain crossover frequency for:",
        choices: ["Common 1st-order or moderately damped systems", "Always", "Never", "Only DC"], correct: 0,
        solution: S({ c: "Rule of thumb for moderate $\\zeta$. Exact relationship depends on system.", s: [""], a: "Approximately equal" }), ref: "p.366" },
    ],

    // Comm — +12
    13: [
      { q: "BPSK transmits how many bits per symbol?",
        choices: ["$1$", "$2$", "$4$", "$8$"], correct: 0,
        solution: S({ c: "BPSK: 2 phase states → 1 bit.", s: [""], a: "$1$" }), ref: "p.371" },
      { q: "QPSK uses ___ symbol states:",
        choices: ["$4$ (2 bits each)", "$2$", "$8$", "$16$"], correct: 0,
        solution: S({ c: "Quadrature PSK: 4 phases.", s: [""], a: "$4$" }), ref: "p.371" },
      { q: "16-QAM transmits ___ bits per symbol:",
        choices: ["$4$", "$2$", "$8$", "$16$"], correct: 0,
        solution: S({ c: "$\\log_2 16 = 4$ bits.", s: [""], a: "$4$" }), ref: "p.371" },
      { q: "AM bandwidth for message with $f_m$ = 5 kHz:",
        choices: ["$10$ kHz", "$5$ kHz", "$2.5$ kHz", "$15$ kHz"], correct: 0,
        solution: S({ c: "AM: $BW = 2 f_m$.", s: [""], a: "$10$ kHz" }), ref: "p.371" },
      { q: "SSB bandwidth for message with $f_m$ = 5 kHz:",
        choices: ["$5$ kHz", "$10$ kHz", "$2.5$ kHz", "$15$ kHz"], correct: 0,
        solution: S({ c: "SSB: only $f_m$. Half of AM.", s: [""], a: "$5$ kHz" }), ref: "p.371" },
      { q: "Carrier-to-noise ratio (CNR) units:",
        choices: ["dB (logarithmic ratio)", "Watts", "Hz", "Volts"], correct: 0,
        solution: S({ c: "Ratio in dB.", s: [""], a: "dB" }), ref: "p.371" },
      { q: "Spectral efficiency unit:",
        choices: ["bps/Hz", "bps", "Hz/bit", "W/Hz"], correct: 0,
        solution: S({ c: "Bits per second per Hz of bandwidth.", s: [""], a: "bps/Hz" }), ref: "p.371" },
      { q: "Shannon limit for AWGN channel:",
        choices: ["$C = B\\log_2(1 + S/N)$ bps", "$C = BS/N$", "$C = SN/B$", "$C = SNR$"], correct: 0,
        solution: S({ c: "Shannon-Hartley theorem.", s: [""], a: "$B\\log_2(1+S/N)$" }), ref: "p.371" },
      { q: "Carrier frequency 100 MHz, FM deviation 50 kHz, audio 10 kHz. Carson BW:",
        choices: ["$120$ kHz", "$50$ kHz", "$200$ kHz", "$100$ MHz"], correct: 0,
        solution: S({ c: "Carson: $BW = 2(\\Delta f + f_m)$.", s: ["$2(50 + 10) = 120$ kHz."], a: "$120$ kHz" }), ref: "p.371" },
      { q: "Source coding (compression):",
        choices: ["Removes redundancy in data", "Adds error correction", "Modulates", "Encrypts"], correct: 0,
        solution: S({ c: "Source coding: minimize bits to represent info (e.g., Huffman, LZ).", s: ["Channel coding: add redundancy for error correction."], a: "Compression" }), ref: "p.371" },
      { q: "Channel coding rate $R_c = k/n$ means:",
        choices: ["k info bits per n coded bits", "k errors per n bits", "Speed", "Frequency"], correct: 0,
        solution: S({ c: "Code rate: info / total. Lower rate = more redundancy.", s: ["E.g., (7,4) Hamming: rate 4/7."], a: "$k$ info per $n$ coded" }), ref: "p.371" },
      { q: "Differential encoding (e.g., DPSK):",
        choices: ["Encodes by phase changes (not absolute phase)", "Differential equation", "Subtracts", "Linear"], correct: 0,
        solution: S({ c: "DPSK: receiver doesn't need phase reference. Compares current vs previous symbol.", s: ["Cost: 3 dB worse BER vs coherent.", "Benefit: no phase recovery needed."], a: "Phase changes" }), ref: "p.371" },
    ],

    // Networks — +10
    14: [
      { q: "MAC address bytes:",
        choices: ["$6$ (48 bits)", "$4$", "$8$", "$32$"], correct: 0,
        solution: S({ c: "Standard MAC: 48 bits = 6 bytes.", s: ["Format: XX:XX:XX:XX:XX:XX (hex)."], a: "$6$ bytes" }), ref: "p.399" },
      { q: "IPv4 multicast address range:",
        choices: ["$224.0.0.0 - 239.255.255.255$ (Class D)", "$10.0.0.0/8$", "$127.0.0.0/8$", "$192.168.0.0/16$"], correct: 0,
        solution: S({ c: "Class D: 224.0.0.0/4. Multicast group addressing.", s: ["Used in: streaming, IGMP, OSPF, video conferencing."], a: "$224-239$" }), ref: "p.394" },
      { q: "Hub vs switch differences:",
        choices: ["Hub broadcasts to all ports; switch forwards selectively by MAC", "Same", "Hub is newer", "Switch slower"], correct: 0,
        solution: S({ c: "Hub: physical layer repeater. Switch: data link, learns MAC table.", s: [""], a: "Hub broadcast, switch forward" }), ref: "p.399" },
      { q: "OSPF uses what algorithm to find shortest path?",
        choices: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Heap sort"], correct: 0,
        solution: S({ c: "OSPF: link-state protocol using Dijkstra's algorithm.", s: ["RIP uses Bellman-Ford (distance-vector)."], a: "Dijkstra" }), ref: "p.400" },
      { q: "Default gateway:",
        choices: ["Router for traffic outside local subnet", "DNS server", "Switch", "DHCP server"], correct: 0,
        solution: S({ c: "Default gateway: where to send packets destined outside the host's subnet.", s: ["Typically configured via DHCP."], a: "Outbound router" }), ref: "p.400" },
      { q: "Latency in ms = round-trip time. For 10 ms RTT, propagation delay (assuming negligible queuing):",
        choices: ["$\\approx 5$ ms one-way", "$10$ ms one-way", "$0$", "$100$ ms"], correct: 0,
        solution: S({ c: "RTT = 2× one-way.", s: ["One-way ≈ 5 ms."], a: "$\\approx 5$ ms" }), ref: "p.399" },
      { q: "VLAN purpose:",
        choices: ["Logical segmentation on physical switch", "Encryption", "Speed boost", "Routing"], correct: 0,
        solution: S({ c: "VLAN: isolated broadcast domains on shared switch.", s: ["Used: separating departments, security zones, IP phones."], a: "Logical segmentation" }), ref: "p.399" },
      { q: "Reliable delivery in TCP enforced by:",
        choices: ["Sequence numbers + ACKs + retransmission", "Just sequence numbers", "Just ACK", "UDP fallback"], correct: 0,
        solution: S({ c: "TCP: sender numbers bytes; receiver ACKs. Lost or unACKed → resend.", s: [""], a: "Seq + ACK + retx" }), ref: "p.400" },
      { q: "UDP characteristics:",
        choices: ["Connectionless, no reliability, low overhead", "Connection-oriented", "Reliable", "Heavy header"], correct: 0,
        solution: S({ c: "UDP: 8-byte header, fire-and-forget.", s: ["Used: DNS queries, video streaming, gaming, VoIP."], a: "Connectionless, fast" }), ref: "p.400" },
      { q: "ARP request is sent to:",
        choices: ["Broadcast MAC FF:FF:FF:FF:FF:FF", "Specific MAC", "Multicast", "Source"], correct: 0,
        solution: S({ c: "ARP request: 'who has this IP?' — broadcast on local network.", s: ["Reply: unicast back to requester."], a: "Broadcast" }), ref: "p.399" },
    ],

    // Digital — +20
    15: [
      { q: "Binary 10101010 in decimal:",
        choices: ["$170$", "$85$", "$255$", "$160$"], correct: 0,
        solution: S({ c: "$128+32+8+2 = 170$.", s: [""], a: "$170$" }), ref: "p.388" },
      { q: "Hex 0xFF in decimal:",
        choices: ["$255$", "$256$", "$15$", "$170$"], correct: 0,
        solution: S({ c: "$F = 15$. $15 \\cdot 16 + 15 = 255$.", s: [""], a: "$255$" }), ref: "p.388" },
      { q: "Largest 16-bit unsigned integer:",
        choices: ["$65{,}535$", "$32{,}767$", "$255$", "$65{,}536$"], correct: 0,
        solution: S({ c: "$2^{16} - 1$.", s: [""], a: "$65535$" }), ref: "p.389" },
      { q: "Two's complement 8-bit range:",
        choices: ["$-128$ to $+127$", "$-127$ to $+128$", "$0$ to $255$", "$-255$ to $+255$"], correct: 0,
        solution: S({ c: "Signed n-bit: $-2^{n-1}$ to $2^{n-1}-1$.", s: [""], a: "$-128$ to $+127$" }), ref: "p.389" },
      { q: "Boolean: $A + AB$ simplifies to:",
        choices: ["$A$ (absorption)", "$AB$", "$B$", "$0$"], correct: 0,
        solution: S({ c: "Absorption: $A + AB = A(1+B) = A$.", s: [""], a: "$A$" }), ref: "p.389" },
      { q: "Boolean: $AB + A\\bar{B}$:",
        choices: ["$A$", "$B$", "$AB$", "$\\bar{B}$"], correct: 0,
        solution: S({ c: "Factor: $A(B + \\bar{B}) = A \\cdot 1 = A$.", s: [""], a: "$A$" }), ref: "p.389" },
      { q: "NOR truth: 1 iff:",
        choices: ["Both inputs are 0", "Both 1", "Differ", "Same"], correct: 0,
        solution: S({ c: "NOR = NOT OR. True only when all inputs 0.", s: [""], a: "Both 0" }), ref: "p.389" },
      { q: "NAND truth: 0 iff:",
        choices: ["Both 1", "Both 0", "Differ", "Same"], correct: 0,
        solution: S({ c: "NAND = NOT AND. False only when all inputs 1.", s: [""], a: "Both 1" }), ref: "p.389" },
      { q: "Half adder Sum (XOR) and Carry (AND): inputs $A=B=1$:",
        choices: ["Sum=0, Carry=1", "S=1, C=1", "S=1, C=0", "S=0, C=0"], correct: 0,
        solution: S({ c: "$1 \\oplus 1 = 0$. $1 \\cdot 1 = 1$.", s: [""], a: "S=0, C=1" }), ref: "p.390" },
      { q: "Mod-10 counter (decade): how many flip-flops minimum?",
        choices: ["$4$ (need 10 states ≤ $2^4$)", "$10$", "$3$", "$5$"], correct: 0,
        solution: S({ c: "$\\lceil\\log_2 10\\rceil = 4$.", s: ["4 FFs handle 0-15; logic resets at 10 → 0."], a: "$4$" }), ref: "p.391" },
      { q: "Mealy machine outputs change when:",
        choices: ["State or input changes", "Clock edge only", "Power-on", "Reset"], correct: 0,
        solution: S({ c: "Mealy: combinational output = $f(\\text{state, input})$. Changes with either.", s: [""], a: "State or input" }), ref: "p.391" },
      { q: "D-FF setup violation cause:",
        choices: ["Metastability — output may be neither 0 nor 1 temporarily", "Faster operation", "Damage", "Reset"], correct: 0,
        solution: S({ c: "Setup violation: input changing too close to clock edge → unpredictable state.", s: ["Resolved with synchronizers (two-FF chain) when crossing clock domains."], a: "Metastability" }), ref: "p.391" },
      { q: "BCD: 7 in 4 bits:",
        choices: ["$0111$", "$111$", "$1000$", "$0110$"], correct: 0,
        solution: S({ c: "7 = 4+2+1 = 0111.", s: [""], a: "$0111$" }), ref: "p.388" },
      { q: "Bitwise XOR of $1100$ and $1010$:",
        choices: ["$0110$", "$1000$", "$1110$", "$0000$"], correct: 0,
        solution: S({ c: "XOR: 1 when differ.", s: ["1100", "1010", "0110."], a: "$0110$" }), ref: "p.388" },
      { q: "PLA (Programmable Logic Array) vs PAL:",
        choices: ["PLA: programmable AND + OR; PAL: prog AND + fixed OR", "Same", "PAL is older only", "PLA has fewer outputs"], correct: 0,
        solution: S({ c: "PLA more flexible; PAL simpler.", s: ["Both predecessors to modern FPGAs/CPLDs."], a: "PLA: both prog; PAL: fixed OR" }), ref: "p.390" },
      { q: "Tristate buffer outputs when enable is low (active-high enable):",
        choices: ["High impedance (Hi-Z)", "$0$", "$1$", "Floating undefined"], correct: 0,
        solution: S({ c: "Disabled tristate: output disconnected from line.", s: ["Allows shared bus with multiple drivers."], a: "Hi-Z" }), ref: "p.391" },
      { q: "Don't care in K-map represented by:",
        choices: ["$X$ or $d$", "$0$", "$1$", "Empty"], correct: 0,
        solution: S({ c: "Don't cares: cells where output value doesn't matter. Use to simplify.", s: [""], a: "$X$ / $d$" }), ref: "p.390" },
      { q: "Convert decimal 25 to binary:",
        choices: ["$11001$", "$10101$", "$01001$", "$10011$"], correct: 0,
        solution: S({ c: "$25 = 16+8+1 = 11001$.", s: [""], a: "$11001$" }), ref: "p.388" },
      { q: "Hex 0x1A + 0x06 = ?",
        choices: ["$0x20$", "$0x1F$", "$0x26$", "$0x16$"], correct: 0,
        solution: S({ c: "26 + 6 = 32 = 0x20.", s: [""], a: "$0x20$" }), ref: "p.388" },
      { q: "How many bits to address 1 MB byte-addressable memory:",
        choices: ["$20$", "$10$", "$30$", "$24$"], correct: 0,
        solution: S({ c: "$2^{20} = 1048576 \\approx 1$ MB.", s: [""], a: "$20$" }), ref: "p.407" },
    ],

    // CompSys — +10
    16: [
      { q: "Pipeline IF, ID, EX, MEM, WB stages: standard for:",
        choices: ["Classic RISC 5-stage", "x86", "ARM7", "GPU"], correct: 0,
        solution: S({ c: "MIPS classic 5-stage pipeline. Used in textbooks for clarity.", s: [""], a: "RISC 5-stage" }), ref: "p.408" },
      { q: "Cache locality types:",
        choices: ["Temporal + Spatial", "Time + Space + Code", "Just spatial", "Memory + I/O"], correct: 0,
        solution: S({ c: "Temporal: recent access likely repeated. Spatial: nearby data accessed together.", s: [""], a: "Temporal + Spatial" }), ref: "p.407" },
      { q: "Direct-mapped cache: address with 4-bit offset, 6-bit index, 22-bit tag. Cache size:",
        choices: ["$2^{6} \\cdot 2^4 = 1024$ bytes = 1 KB", "$2^{22}$", "$64$ bytes", "$10$ KB"], correct: 0,
        solution: S({ c: "Lines = $2^6 = 64$. Line size = $2^4 = 16$ bytes. Total $= 1024$.", s: [""], a: "$1$ KB" }), ref: "p.407" },
      { q: "Volatility: which RAM is volatile?",
        choices: ["DRAM and SRAM (both)", "Only DRAM", "Only SRAM", "Neither"], correct: 0,
        solution: S({ c: "Both lose contents without power. Flash/ROM is non-volatile.", s: [""], a: "Both" }), ref: "p.407" },
      { q: "Word-aligned data for 32-bit machine:",
        choices: ["Address divisible by 4", "By 8", "By 1", "Random"], correct: 0,
        solution: S({ c: "4-byte words: align at 4-byte boundaries.", s: ["64-bit: align at 8."], a: "Divisible by 4" }), ref: "p.407" },
      { q: "Floating-point IEEE 754 single-precision:",
        choices: ["1 sign + 8 exponent + 23 mantissa = 32 bits", "16 bits", "64 bits", "Variable"], correct: 0,
        solution: S({ c: "Standard single-precision: 1+8+23.", s: ["Double: 1+11+52."], a: "1+8+23" }), ref: "p.388" },
      { q: "Cache coherence protocols (multicore): MESI states:",
        choices: ["Modified, Exclusive, Shared, Invalid", "Memory ECC", "Sync, write", "Stack"], correct: 0,
        solution: S({ c: "MESI cache line states.", s: [""], a: "MESI" }), ref: "p.408" },
      { q: "Process address space components:",
        choices: ["Text, data, heap, stack", "Just code", "Just data", "Memory"], correct: 0,
        solution: S({ c: "Typical process layout: code (text), initialized data, BSS, heap (grows up), stack (grows down).", s: [""], a: "Text/data/heap/stack" }), ref: "p.408" },
      { q: "Interrupt vs trap:",
        choices: ["Interrupt: external; trap: software-triggered", "Same", "Trap is faster", "Interrupt is for OS only"], correct: 0,
        solution: S({ c: "Interrupt: async hardware event. Trap: synchronous software event (syscall, div-by-zero).", s: [""], a: "External vs internal" }), ref: "p.408" },
      { q: "Hyperthreading:",
        choices: ["One physical core appears as 2 logical (better utilization)", "Two cores in one", "Faster clock", "Encryption"], correct: 0,
        solution: S({ c: "Intel HT: share execution resources between threads. Up to ~30% throughput gain.", s: [""], a: "Logical core sharing" }), ref: "p.408" },
    ],

    // Software — +10
    17: [
      { q: "Algorithm complexity of Heapsort:",
        choices: ["$O(n\\log n)$ worst case", "$O(n^2)$", "$O(n)$", "$O(\\log n)$"], correct: 0,
        solution: S({ c: "Heapsort: build heap O(n), then n extracts at O(log n) each.", s: ["Total $O(n\\log n)$ guaranteed (unlike quicksort which can be $O(n^2)$)."], a: "$O(n\\log n)$" }), ref: "p.415" },
      { q: "Hash collision resolution: chaining means:",
        choices: ["Linked list at each bucket", "Probe next bucket", "Discard", "Resize immediately"], correct: 0,
        solution: S({ c: "Chaining: multiple items in same bucket linked.", s: ["Open addressing: probe sequence.", "Both maintain $O(1)$ avg if load low."], a: "Linked list per bucket" }), ref: "p.415" },
      { q: "Tail recursion can be optimized to:",
        choices: ["Iteration (no stack growth)", "Faster recursion", "Same as regular", "Faster memory"], correct: 0,
        solution: S({ c: "Tail call: last action is recursive call. Compiler can reuse current stack frame.", s: ["Avoids stack overflow for deep recursion.", "Some languages (Scheme, Scala) guarantee TCO."], a: "Iteration (TCO)" }), ref: "p.415" },
      { q: "Compile-time vs run-time:",
        choices: ["Compile: before exec; run-time: during exec", "Same", "Compile is faster", "Random"], correct: 0,
        solution: S({ c: "Compile-time: code generation, static checks. Run-time: actual execution.", s: ["Templates/macros: compile-time. Reflection: run-time."], a: "Before vs during exec" }), ref: "p.415" },
      { q: "Linked list vs array dynamic insertion:",
        choices: ["List: $O(1)$ with pointer; Array: $O(n)$ shift", "Both $O(1)$", "Both $O(n)$", "List slower"], correct: 0,
        solution: S({ c: "List relink pointers. Array shift remaining elements.", s: [""], a: "List faster (with pointer)" }), ref: "p.415" },
      { q: "Bubble sort best case:",
        choices: ["$O(n)$ if optimized with early exit on sorted input", "Always $O(n^2)$", "$O(\\log n)$", "$O(n!)$"], correct: 0,
        solution: S({ c: "Optimized bubble: detect no swaps in a pass → already sorted, exit.", s: [""], a: "$O(n)$ best (sorted)" }), ref: "p.415" },
      { q: "Recursive vs iterative tree traversal:",
        choices: ["Recursive cleaner; iterative may need explicit stack", "Recursive slower", "Same code", "Iterative is impossible"], correct: 0,
        solution: S({ c: "Tree traversal naturally recursive; iterative needs stack to simulate call frames.", s: [""], a: "Recursive cleaner" }), ref: "p.415" },
      { q: "Garbage collection (GC) in Java/C#/Python:",
        choices: ["Automatic memory management", "Manual free", "Stack only", "No effect"], correct: 0,
        solution: S({ c: "GC: runtime reclaims unreferenced memory.", s: ["Generational GC: optimize for short-lived objects.", "Tradeoff: pauses, overhead."], a: "Auto mem management" }), ref: "p.415" },
      { q: "Trie data structure:",
        choices: ["Tree for storing strings with shared prefixes", "Hash variant", "Array", "Stack"], correct: 0,
        solution: S({ c: "Trie: each node represents a character. Path from root spells a string.", s: ["Used: autocomplete, dictionary, IP routing tables."], a: "Prefix tree" }), ref: "p.415" },
      { q: "Big-O of finding all pairs that sum to target in array (naive):",
        choices: ["$O(n^2)$", "$O(n)$", "$O(n\\log n)$", "$O(1)$"], correct: 0,
        solution: S({ c: "Check every pair: nested loops.", s: ["With hash set: $O(n)$ — store complements seen so far."], a: "$O(n^2)$ naive" }), ref: "p.415" },
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
  console.log(`Pack 7: +${added} → bank total ${total}`);
})();
