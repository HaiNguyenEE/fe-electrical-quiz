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
        solution: S({
          c: "Kirchhoff's Current Law (KCL): currents into a node equal currents out (net = 0) — charge conservation.",
          s: ["<b>Step 1 — Match.</b> KCL.","<b>Step 2 — Distractor audit.</b> KVL is voltages around a loop; Ohm's is V=IR; Tellegen is a power theorem."],
          a: "Kirchhoff's Current Law.",
          v: "KCL (nodes/charge) and KVL (loops/energy) are the two pillars of circuit analysis - KCL drives nodal analysis."
        }), ref: "p.356" },
      { q: "Three identical resistors $R$ in star (Y): equivalent in $\\Delta$:",
        choices: ["$3R$", "$R$", "$R/3$", "$9R$"], correct: 0,
        solution: S({
          c: "For a BALANCED load, the Y-to-Delta conversion is $Z_\\Delta = 3Z_Y$.",
          s: ["<b>Step 1 — Apply.</b> $Z_\\Delta = 3R$.","<b>Step 2 — Distractor audit.</b> $R/3$ is the reverse (Delta to Y); $R$ and $9R$ are wrong factors."],
          a: "$3R$",
          v: "Direction matters: Y to Delta multiply by 3, Delta to Y divide by 3 (balanced) - simplifies three-phase and bridge networks."
        }), ref: "p.363" },
      { q: "Cap initially at 0V charges to $V_s = 24$V via $R = 1$ kΩ, $C = 1000$ µF. Time to reach 12V:",
        choices: ["$\\approx 0.693$ s", "$1$ s", "$5$ s", "$0.5$ s"], correct: 0,
        solution: S({
          c: "Charging: $v(t)=V_s(1-e^{-t/\\tau})$. Reaching HALF the final voltage needs $e^{-t/\\tau}=0.5$, so $t=\\tau\\ln2$.",
          s: ["<b>Step 1 — Time constant.</b> $\\tau = RC = 10^3\\times10^{-3} = 1$ s.","<b>Step 2 — Half-voltage time.</b> $t=\\tau\\ln2 = 0.693$ s.","<b>Step 3 — Distractor audit.</b> 1 s is one full tau (63%); 5 s is about 5 tau (99%); 0.5 s is a guess."],
          a: "$t \\approx 0.693$ s",
          v: "$\\ln2\\approx0.693$ is the half-life of exponential charging - reaching 50% always takes $0.693\\tau$, like radioactive half-life."
        }), ref: "p.358" },
      { q: "Maximum power transferred to load from $V_{Th} = 10$ V, $R_{Th} = 5$Ω:",
        choices: ["$5$ W (when $R_L = 5$Ω)", "$10$ W", "$20$ W", "$2$ W"], correct: 0,
        solution: S({
          c: "Maximum power transfer occurs when $R_L=R_{Th}$, delivering $P_{max}=V_{Th}^2/(4R_{Th})$.",
          s: ["<b>Step 1 — Apply.</b> $100/(4\\times5)=5$ W.","<b>Step 2 — Distractor audit.</b> 10 W and 20 W forget the factor of 4; 2 W is wrong."],
          a: "$P_{max}=5$ W (at $R_L=5\\ \\Omega$).",
          v: "At the match, efficiency is only 50% (half the power is lost in $R_{Th}$) - matching suits signals; power systems want $R_L \\gg R_{source}$ for efficiency."
        }), ref: "p.360" },
      { q: "Series RLC at resonance, current is:",
        choices: ["Maximum, in phase with V", "Minimum", "Lagging", "Leading"], correct: 0,
        solution: S({
          c: "At series resonance $X_L=X_C$ cancel, leaving $Z=R$ (minimum impedance), so current is MAXIMUM and in phase with V.",
          s: ["<b>Step 1 — Match.</b> Maximum, in phase with V.","<b>Step 2 — Distractor audit.</b> 'Minimum' current is PARALLEL resonance; lagging/leading mean off-resonance reactance."],
          a: "Maximum and in phase.",
          v: "Series resonance = min Z = max current; parallel = max Z = min current (the dual) - purely resistive at $f_0$, so pf = 1."
        }), ref: "p.361" },
      { q: "Inductor $V = L\\,di/dt$. If $i(t) = 3\\sin(100t)$ A, $L = 50$ mH, peak voltage:",
        choices: ["$15$ V", "$50$ V", "$3$ V", "$300$ V"], correct: 0,
        solution: S({
          c: "Inductor voltage is $V=L\\,di/dt$; the peak of the derivative sets the peak voltage.",
          s: ["<b>Step 1 — Derivative.</b> $di/dt=300\\cos(100t)$; peak 300 A/s.","<b>Step 2 — Voltage.</b> $V_{peak}=0.05\\times300=15$ V.","<b>Step 3 — Distractor audit.</b> 50, 3, 300 V drop or misplace a factor."],
          a: "$V_{peak}=15$ V",
          v: "Equivalently $V_{peak}=\\omega L I_{peak}=X_L I_{peak}$; voltage leads current by 90 degrees (peaks when current is zero-crossing fastest)."
        }), ref: "p.358" },
      { q: "Two capacitors $C_1=2$ µF and $C_2=4$ µF in parallel, then series with $C_3=6$ µF. Total:",
        choices: ["$3$ µF", "$12$ µF", "$2$ µF", "$1$ µF"], correct: 0,
        solution: S({
          c: "Capacitors ADD in parallel and combine by RECIPROCALS in series (opposite of resistors).",
          s: ["<b>Step 1 — Parallel.</b> $C_1+C_2=6$ uF.","<b>Step 2 — Series with C3.</b> $(6\\times6)/(6+6)=3$ uF.","<b>Step 3 — Distractor audit.</b> 12 uF adds all (all-parallel); 2 and 1 uF mis-combine."],
          a: "$3$ uF",
          v: "Two equal caps in series give half - capacitance is opposite to resistance. Work inside-out: combine the parallel pair first, then the series step."
        }), ref: "p.358" },
      { q: "Z = 50 + j20 Ω in polar form:",
        choices: ["$\\approx 53.85\\angle 21.8°$", "$70\\angle 45°$", "$50\\angle 20°$", "$30\\angle 90°$"], correct: 0,
        solution: S({
          c: "Rectangular to polar: magnitude $|Z|=\\sqrt{R^2+X^2}$, angle $\\theta=\\arctan(X/R)$.",
          s: ["<b>Step 1 — Magnitude.</b> $\\sqrt{2500+400}=\\sqrt{2900}=53.85$.","<b>Step 2 — Angle.</b> $\\arctan(20/50)=21.8$ deg.","<b>Step 3 — Distractor audit.</b> $70\\angle45$ adds components; $50\\angle20$ drops reactance from magnitude; $30\\angle90$ wrong."],
          a: "$\\approx 53.85\\angle 21.8°$",
          v: "Positive angle means inductive (current lags) - polar form is best for multiply/divide of impedances; rectangular for series addition."
        }), ref: "p.360" },
      { q: "Three-phase Y source, $V_{LN} = 120$ V, $Z_\\phi = 8\\ \\Omega$ resistive. Total power:",
        choices: ["$5400$ W", "$1800$ W", "$15$ W", "$45$ W"], correct: 0,
        solution: S({
          c: "Per-phase: phase current $I_\\phi=V_\\phi/Z$, phase power $P_\\phi=I_\\phi^2 R$, total $=3P_\\phi$.",
          s: ["<b>Step 1 — Phase current.</b> $120/8=15$ A.","<b>Step 2 — Phase power.</b> $15^2\\times8=1800$ W.","<b>Step 3 — Total.</b> $3\\times1800=5400$ W.","<b>Step 4 — Distractor audit.</b> 1800 W is one phase; 15 and 45 are sub-results."],
          a: "$P_{total}=5400$ W",
          v: "For a resistive wye load, total power is 3x the per-phase power - equals $\\sqrt3 V_{LL}I_L$ with pf=1. Per-phase is the cleanest route."
        }), ref: "p.363" },
      { q: "AC sinusoid $v(t) = 50\\sin(\\omega t + 30°)$. Phasor:",
        choices: ["$50\\angle 30°$ (peak) or $35.4\\angle 30°$ (RMS)", "$50\\angle 0°$", "$30\\angle 50°$", "$50\\angle -30°$"], correct: 0,
        solution: S({
          c: "A phasor captures amplitude and phase: $50\\sin(\\omega t+30°) \\to 50\\angle30°$ (peak) or $35.4\\angle30°$ (RMS).",
          s: ["<b>Step 1 — Match.</b> $50\\angle30°$ (peak) or $35.4\\angle30°$ (RMS).","<b>Step 2 — Distractor audit.</b> $50\\angle0$ drops phase; $30\\angle50$ swaps magnitude/angle; $50\\angle-30$ flips sign."],
          a: "$50\\angle 30°$ (peak).",
          v: "Phasors drop the shared time dependence, turning calculus into algebra - be consistent with peak vs RMS throughout."
        }), ref: "p.360" },
      { q: "Reactive power Q for $V_{rms}=100$, $I_{rms}=5$, $\\theta = 60°$ (V leads I):",
        choices: ["$\\approx 433$ VAR", "$250$ VAR", "$500$ VAR", "$\\approx 250$ W"], correct: 0,
        solution: S({
          c: "Reactive power $Q=V_{rms}I_{rms}\\sin\\theta$. With V leading I (inductive), Q is positive.",
          s: ["<b>Step 1 — Apply.</b> $100\\times5\\times\\sin60° = 500\\times0.866 = 433$ VAR.","<b>Step 2 — Distractor audit.</b> 250 VAR uses cos (real power); 500 VAR forgets sin; '250 W' mislabels units."],
          a: "$Q \\approx 433$ VAR (inductive).",
          v: "Q uses sin, P uses cos - here S=500 VA splits into P=250 W and Q=433 VAR ($\\sqrt{250^2+433^2}=500$)."
        }), ref: "p.362" },
      { q: "Average power for $V_{rms}=100$, $I_{rms}=5$, $\\theta=60°$:",
        choices: ["$250$ W", "$500$ W", "$\\approx 433$ W", "$0$"], correct: 0,
        solution: S({
          c: "Average (real) power $P=V_{rms}I_{rms}\\cos\\theta$, where $\\cos\\theta$ is the power factor.",
          s: ["<b>Step 1 — Apply.</b> $100\\times5\\times\\cos60° = 500\\times0.5 = 250$ W.","<b>Step 2 — Distractor audit.</b> 500 W forgets pf; 433 W used sin (that's Q); 0 needs 90 deg."],
          a: "$P = 250$ W",
          v: "Same V, I, theta as the Q question - P uses cos (250 W), Q uses sin (433 VAR). pf 0.5 means only half the 500 VA is real power."
        }), ref: "p.362" },
      { q: "Two impedances $Z_1 = 6+j8$ and $Z_2 = 8+j6$ in parallel. Total Z:",
        choices: ["$\\approx 5.04\\angle 45°$ (computed)", "$14+j14$", "$7+j7$", "$50$"], correct: 0,
        solution: S({
          c: "Parallel impedances: $Z=\\dfrac{Z_1 Z_2}{Z_1+Z_2}$, easiest in polar (multiply over add).",
          s: ["<b>Step 1 — Sum.</b> $Z_1+Z_2=14+j14=14\\sqrt2\\angle45°$.","<b>Step 2 — Product.</b> $10\\angle53.13° \\times 10\\angle36.87° = 100\\angle90°$.","<b>Step 3 — Divide.</b> $100\\angle90° / (19.8\\angle45°) = 5.05\\angle45°$.","<b>Step 4 — Distractor audit.</b> $14+j14$ is the SUM; $7+j7$ halves it; 50 is wrong."],
          a: "$\\approx 5.05\\angle 45°$",
          v: "Both inputs have magnitude 10; their symmetric mix lands at 45 degrees - product-over-sum in polar keeps the arithmetic clean."
        }), ref: "p.360" },
      { q: "Total power dissipated in a 3-phase 480 V Y-source delivering 30 A at pf 0.9:",
        choices: ["$\\approx 22.4$ kW", "$13.0$ kW", "$15$ kW", "$25$ kW"], correct: 0,
        solution: S({
          c: "Three-phase real power: $P=\\sqrt3\\,V_{LL}I_L\\cos\\theta$.",
          s: ["<b>Step 1 — Apply.</b> $\\sqrt3\\times480\\times30\\times0.9 = 22{,}448$ W.","<b>Step 2 — Distractor audit.</b> 13.0 kW drops the $\\sqrt3$; 15 and 25 kW are off."],
          a: "$P \\approx 22.4$ kW",
          v: "The $\\sqrt3$ is the three-phase signature - single-phase would be just $VI\\cos\\theta$. Apparent power here is 24.9 kVA."
        }), ref: "p.363" },
      { q: "Voltage drop on 100 ft #14 AWG copper (R ≈ 0.253 Ω/100 ft each way = 0.506 round trip) at 15 A:",
        choices: ["$\\approx 7.6$ V", "$3.8$ V", "$15$ V", "$0.25$ V"], correct: 0,
        solution: S({
          c: "Voltage drop $V=I\\times R_{roundtrip}$ (current flows out AND back, so use the round-trip resistance).",
          s: ["<b>Step 1 — Apply.</b> $15\\times0.506 = 7.59$ V.","<b>Step 2 — Distractor audit.</b> 3.8 V uses one-way R; 15 V and 0.25 V are wrong."],
          a: "$\\approx 7.6$ V",
          v: "NEC recommends drop under 3% (about 3.6 V on 120 V) - 7.6 V exceeds it, signaling the need for heavier wire on a long run."
        }), ref: "p.354" },
      { q: "Three resistors in series: 5Ω, 10Ω, 15Ω. Current with 60V source:",
        choices: ["$2$ A", "$4$ A", "$6$ A", "$0.5$ A"], correct: 0,
        solution: S({
          c: "Series resistances ADD; then Ohm's law: $I=V/R_{total}$.",
          s: ["<b>Step 1 — Total.</b> $5+10+15=30\\ \\Omega$.","<b>Step 2 — Current.</b> $60/30=2$ A.","<b>Step 3 — Distractor audit.</b> 4, 6, 0.5 A misuse the total."],
          a: "$I = 2$ A",
          v: "In series the SAME current flows through all elements - 2 A here drops 10 V, 20 V, 30 V across the three (summing to 60 V, KVL)."
        }), ref: "p.356" },
      { q: "Energy delivered by 12V battery providing 2A for 1 hr:",
        choices: ["$86.4$ kJ (or 24 Wh)", "$24$ J", "$24$ kWh", "$86.4$ J"], correct: 0,
        solution: S({
          c: "Energy $W=Pt$, with $P=VI$ and time in seconds (or use watt-hours directly).",
          s: ["<b>Step 1 — Power.</b> $P=12\\times2=24$ W.","<b>Step 2 — Energy.</b> $24\\times3600 = 86{,}400$ J = 86.4 kJ = 24 Wh.","<b>Step 3 — Distractor audit.</b> 24 J forgets time; 24 kWh is off by 1000; 86.4 J drops a factor."],
          a: "$86.4$ kJ (= 24 Wh)",
          v: "Watt-hours and joules both work: 24 W for 1 h = 24 Wh = 86.4 kJ (since 1 Wh = 3600 J) - batteries are rated in Ah/Wh for this reason."
        }), ref: "p.356" },
      { q: "Calculate phasor impedance: 100Ω resistor, 200mH inductor in series at 50 Hz:",
        choices: ["$100 + j62.8$ Ω", "$100 + j10$", "$100\\angle 90°$", "$200\\angle 0°$"], correct: 0,
        solution: S({
          c: "Series R-L impedance: $Z=R+jX_L$ with $X_L=2\\pi f L$.",
          s: ["<b>Step 1 — Reactance.</b> $X_L=2\\pi(50)(0.2)=62.83\\ \\Omega$.","<b>Step 2 — Combine.</b> $Z=100+j62.8\\ \\Omega$.","<b>Step 3 — Distractor audit.</b> $100+j10$ drops the $2\\pi f$; $100\\angle90$ and $200\\angle0$ are wrong."],
          a: "$Z = 100+j62.8\\ \\Omega$",
          v: "Inductive reactance rises with frequency - at DC this would be just 100 ohms (inductor a short), at high frequency it dominates."
        }), ref: "p.360" },
      { q: "Cap and inductor in parallel at resonance:",
        choices: ["Acts as open circuit (infinite Z)", "Short", "Just R", "Acts as wire"], correct: 0,
        solution: S({
          c: "An ideal parallel LC 'tank' at resonance has $X_L=X_C$ cancelling, giving (ideally) INFINITE impedance - an open circuit.",
          s: ["<b>Step 1 — Match.</b> Acts as an open circuit (infinite Z).","<b>Step 2 — Distractor audit.</b> 'Short' is series resonance; 'just R'/'wire' ignore the tank behavior."],
          a: "Open circuit at $\\omega_0$.",
          v: "With real losses it's a very high but finite peak (Q-dependent) - the tank blocks the resonant frequency while passing others, the basis of band-stop/pass filters."
        }), ref: "p.361" },
      { q: "Power factor of $Z = 6 + j8$ (in series):",
        choices: ["$0.6$ lagging", "$0.8$", "$1.0$", "$0.6$ leading"], correct: 0,
        solution: S({
          c: "Power factor $=\\cos\\theta$ where $\\theta=\\arctan(X/R)$. Positive reactance means inductive, so LAGGING.",
          s: ["<b>Step 1 — Angle.</b> $\\theta=\\arctan(8/6)=53.13°$.","<b>Step 2 — pf.</b> $\\cos53.13°=0.6$, lagging (inductive).","<b>Step 3 — Distractor audit.</b> 0.8 is $\\sin$ (or R/X mixup); 1.0 is purely resistive; '0.6 leading' would be capacitive."],
          a: "$0.6$ lagging.",
          v: "It's a 3-4-5-style triangle: R=6, X=8, |Z|=10, so pf=R/|Z|=0.6 - inductive loads always lag (current behind voltage)."
        }), ref: "p.362" },
      { q: "Star-to-delta transformation with $Z_Y = 9+j12$ each: $Z_\\Delta$:",
        choices: ["$27 + j36$ each", "$3 + j4$ each", "$9+j12$ each", "$81+j144$ each"], correct: 0,
        solution: S({
          c: "Balanced Y-to-Delta: $Z_\\Delta = 3Z_Y$ (multiply each impedance by 3).",
          s: ["<b>Step 1 — Apply.</b> $3(9+j12)=27+j36$.","<b>Step 2 — Distractor audit.</b> $3+j4$ DIVIDES by 3 (Delta to Y); $9+j12$ unchanged; $81+j144$ multiplies wrongly."],
          a: "$27+j36$ each.",
          v: "Y to Delta multiplies by 3 (both real and imaginary parts scale) - the reverse, Delta to Y, divides by 3."
        }), ref: "p.363" },
      { q: "Power dissipated by 100Ω resistor with $i = 2 + 3\\sin(\\omega t)$ A:",
        choices: ["$\\approx 850$ W (DC²+AC²RMS²)R", "$400$ W", "$900$ W", "$700$ W"], correct: 0,
        solution: S({
          c: "RMS of DC+AC combines in quadrature: $I_{rms}^2 = I_{DC}^2 + I_{AC,rms}^2$. Then $P=I_{rms}^2 R$.",
          s: ["<b>Step 1 — RMS squared.</b> $2^2 + (3/\\sqrt2)^2 = 4 + 4.5 = 8.5$.","<b>Step 2 — Power.</b> $8.5\\times100 = 850$ W.","<b>Step 3 — Distractor audit.</b> 400 W is DC only; 900 W adds peaks; 700 W is wrong."],
          a: "$\\approx 850$ W",
          v: "DC and AC contributions are orthogonal, so their squared values add (never add the amplitudes linearly) - same rule as combining independent error sources."
        }), ref: "p.360" },
      { q: "Energy in 1µH inductor at 100 mA:",
        choices: ["$5$ nJ", "$5$ µJ", "$5$ mJ", "$0.1$ µJ"], correct: 0,
        solution: S({
          c: "Inductor energy $W=\\tfrac12 LI^2$.",
          s: ["<b>Step 1 — Apply.</b> $\\tfrac12(10^{-6})(0.1^2) = \\tfrac12(10^{-6})(0.01) = 5\\times10^{-9}$ J.","<b>Step 2 — Distractor audit.</b> 5 uJ and 5 mJ slip decades; 0.1 uJ is wrong."],
          a: "$5$ nJ",
          v: "Tiny energy (nanojoules) at small L and modest current - the $I^2$ dependence means current dominates the stored energy."
        }), ref: "p.358" },
      { q: "$V_{rms}$ of triangular wave with peak $V_m$:",
        choices: ["$V_m/\\sqrt{3}$", "$V_m/\\sqrt{2}$", "$V_m$", "$V_m/2$"], correct: 0,
        solution: S({
          c: "RMS depends on waveform shape. A triangular (or sawtooth) wave has RMS $=V_m/\\sqrt3$.",
          s: ["<b>Step 1 — Match.</b> $V_m/\\sqrt3 \\approx 0.577 V_m$.","<b>Step 2 — Distractor audit.</b> $V_m/\\sqrt2$ is a SINE; $V_m$ is a square wave; $V_m/2$ is half-wave-rectified sine."],
          a: "$V_m/\\sqrt3$",
          v: "RMS factor ladder: square=1, sine=$1/\\sqrt2$=0.707, triangle/sawtooth=$1/\\sqrt3$=0.577 - flatter waveforms have higher RMS for the same peak."
        }), ref: "p.360" },
      { q: "Time constant of RL circuit with 200Ω and 50 mH:",
        choices: ["$0.25$ ms", "$250$ s", "$10$ s", "$5$ ms"], correct: 0,
        solution: S({
          c: "RL time constant is $\\tau=L/R$ (not RC - that's the capacitor form).",
          s: ["<b>Step 1 — Apply.</b> $\\tau=0.05/200=0.00025$ s = 0.25 ms.","<b>Step 2 — Distractor audit.</b> 250 s multiplies; 10 s and 5 ms misuse the formula."],
          a: "$\\tau = 0.25$ ms",
          v: "RL uses L/R, RC uses RC - both yield seconds. After 5 tau (1.25 ms) the inductor current essentially reaches its final value."
        }), ref: "p.358" },
    ],

    // Linear Sys — +12
    7: [
      { q: "Inverse Laplace of $1/(s+a)^2$:",
        choices: ["$te^{-at}$", "$e^{-at}$", "$te^{at}$", "$1/(at)$"], correct: 0,
        solution: S({
          c: "Standard pair: $\\dfrac{n!}{(s+a)^{n+1}} \\leftrightarrow t^n e^{-at}$. For $n=1$, $1/(s+a)^2 \\leftrightarrow te^{-at}$.",
          s: ["<b>Step 1 — Match n=1.</b> $te^{-at}$.","<b>Step 2 — Distractor audit.</b> $e^{-at}$ is $1/(s+a)$; $te^{at}$ has wrong sign; $1/(at)$ is not a transform pair."],
          a: "$te^{-at}$",
          v: "The repeated pole at $s=-a$ produces the extra factor of $t$ - the signature of a double pole (critically-damped response)."
        }), ref: "p.56" },
      { q: "Transfer function order = highest power of $s$ in denominator. For $H(s) = 1/(s^3+2s^2+5s+1)$:",
        choices: ["$3$rd order", "$1$st", "$5$th", "$2$nd"], correct: 0,
        solution: S({
          c: "System ORDER = highest power of $s$ in the denominator (= number of poles = number of state variables).",
          s: ["<b>Step 1 — Match.</b> Highest power is $s^3$ -> 3rd order.","<b>Step 2 — Distractor audit.</b> 1st/2nd undercount; 5th confuses with a coefficient."],
          a: "3rd order.",
          v: "Order sets the number of independent energy-storage elements and the complexity of the dynamics - a 3rd-order system needs 3 state variables."
        }), ref: "p.365" },
      { q: "DC gain of $H(s) = 12/(s^2+5s+6)$:",
        choices: ["$2$", "$12$", "$6$", "$1$"], correct: 0,
        solution: S({
          c: "DC gain = $H(0)$ (substitute $s=0$, the steady-state/zero-frequency response).",
          s: ["<b>Step 1 — Set s=0.</b> $12/(0+0+6)=2$.","<b>Step 2 — Distractor audit.</b> 12 is the numerator; 6 the constant term; 1 is wrong."],
          a: "$H(0)=2$",
          v: "Apply a 1 V step and the output settles to 2 - the $s$-terms (dynamics) vanish at DC, leaving constant/constant."
        }), ref: "p.366" },
      { q: "Two systems in parallel: $H_1 = 3$, $H_2 = -2$. Total:",
        choices: ["$1$", "$-6$", "$5$", "$-2/3$"], correct: 0,
        solution: S({
          c: "PARALLEL transfer functions ADD: $H = H_1 + H_2$ (series would multiply).",
          s: ["<b>Step 1 — Add.</b> $3 + (-2) = 1$.","<b>Step 2 — Distractor audit.</b> $-6$ multiplies (series); 5 and $-2/3$ are wrong combinations."],
          a: "$1$",
          v: "Parallel paths sum their outputs; series paths multiply - the two basic block-diagram reduction rules."
        }), ref: "p.365" },
      { q: "Phase of $H(s) = 1/(s+1)$ at $\\omega = 1$:",
        choices: ["$-45°$", "$0°$", "$-90°$", "$+45°$"], correct: 0,
        solution: S({
          c: "A first-order pole contributes phase $-\\arctan(\\omega/\\omega_c)$. AT the corner ($\\omega=\\omega_c$), that's exactly $-45°$.",
          s: ["<b>Step 1 — At corner.</b> $\\omega=1=\\omega_c$ -> $-\\arctan(1) = -45°$.","<b>Step 2 — Distractor audit.</b> $0°$ is far below the corner; $-90°$ is far above; $+45°$ would be a zero."],
          a: "$-45°$",
          v: "The corner-frequency landmarks: a pole gives $-45°$ at $\\omega_c$, approaching $-90°$ a decade above and $0°$ a decade below."
        }), ref: "p.366" },
      { q: "Bandwidth of overdamped 2nd-order system: dominant pole at $s = -2$. BW:",
        choices: ["$\\approx 2$ rad/s (dominant pole approximation)", "$\\sqrt{2}$", "$1$", "Infinite"], correct: 0,
        solution: S({
          c: "Dominant-pole approximation: when one pole is much closer to the origin than the others, the bandwidth is set by it: $BW \\approx |p_{dominant}|$.",
          s: ["<b>Step 1 — Apply.</b> $BW \\approx 2$ rad/s.","<b>Step 2 — Distractor audit.</b> $\\sqrt2$ and 1 are unrelated; 'infinite' ignores the pole."],
          a: "$\\approx 2$ rad/s",
          v: "The slowest pole (nearest the origin) dominates the response - valid when other poles are several times farther out."
        }), ref: "p.366" },
      { q: "Pole at $s = -2 \\pm j5$. Natural frequency $\\omega_n$:",
        choices: ["$\\sqrt{29} \\approx 5.39$ rad/s", "$5$", "$2$", "$7$"], correct: 0,
        solution: S({
          c: "For complex poles $-\\sigma \\pm j\\omega_d$, the natural frequency is the DISTANCE from the origin: $\\omega_n = \\sqrt{\\sigma^2 + \\omega_d^2}$.",
          s: ["<b>Step 1 — Apply.</b> $\\sqrt{2^2+5^2} = \\sqrt{29} = 5.39$ rad/s.","<b>Step 2 — Distractor audit.</b> 5 is the imaginary part ($\\omega_d$); 2 the real part; 7 wrongly adds."],
          a: "$\\omega_n = \\sqrt{29} \\approx 5.39$ rad/s",
          v: "$\\omega_n$ is the pole's radius; the imaginary part $\\omega_d=5$ is the DAMPED (ringing) frequency, always less than $\\omega_n$."
        }), ref: "p.366" },
      { q: "Damping ratio $\\zeta$ for pole at $-2 \\pm j5$:",
        choices: ["$2/\\sqrt{29} \\approx 0.371$", "$0.5$", "$0.707$", "$1.0$"], correct: 0,
        solution: S({
          c: "Damping ratio $\\zeta = \\dfrac{|\\text{Re}|}{\\omega_n} = \\dfrac{\\sigma}{\\sqrt{\\sigma^2+\\omega_d^2}}$ = cosine of the angle from the negative-real axis.",
          s: ["<b>Step 1 — Apply.</b> $2/\\sqrt{29} = 0.371$.","<b>Step 2 — Distractor audit.</b> 0.5, 0.707, 1.0 are common ζ values but not this pole's."],
          a: "$\\zeta \\approx 0.371$",
          v: "ζ < 1 means underdamped (the $\\pm j5$ confirms oscillation) - this ζ≈0.37 gives noticeable overshoot (~28%)."
        }), ref: "p.366" },
      { q: "Final value of $y(t)$ for $Y(s) = 5/(s(s+2))$:",
        choices: ["$2.5$", "$5$", "$0$", "$\\infty$"], correct: 0,
        solution: S({
          c: "Final Value Theorem: $\\lim_{t\\to\\infty} y(t) = \\lim_{s\\to0} sY(s)$ (valid for stable systems).",
          s: ["<b>Step 1 — Multiply by s.</b> $sY = 5/(s+2)$.","<b>Step 2 — Let s->0.</b> $5/2 = 2.5$.","<b>Step 3 — Distractor audit.</b> 5 forgets the limit; 0 misreads; infinity needs an unstable pole."],
          a: "$y(\\infty) = 2.5$",
          v: "The $1/s$ factor signals a step input; the system settles to 2.5 - FVT is a shortcut for steady state when the system is stable."
        }), ref: "p.56" },
      { q: "Initial value $y(0^+)$ for $Y(s) = 2s/(s^2+1)$:",
        choices: ["$2$", "$0$", "$1$", "$\\infty$"], correct: 0,
        solution: S({
          c: "Initial Value Theorem: $y(0^+) = \\lim_{s\\to\\infty} sY(s)$.",
          s: ["<b>Step 1 — Form sY.</b> $s\\cdot 2s/(s^2+1) = 2s^2/(s^2+1)$.","<b>Step 2 — Let s->infinity.</b> $\\to 2$.","<b>Step 3 — Distractor audit.</b> 0, 1, infinity mis-evaluate the limit."],
          a: "$y(0^+) = 2$",
          v: "IVT (s->infinity) probes the instant of t=0; FVT (s->0) probes t->infinity - the two ends of the time response, read off in the s-domain."
        }), ref: "p.56" },
      { q: "BIBO stability requires:",
        choices: ["Bounded input → bounded output", "Linear", "Time-invariant", "Causal"], correct: 0,
        solution: S({
          c: "BIBO = Bounded-Input, Bounded-Output: every bounded input produces a bounded output.",
          s: ["<b>Step 1 — Match.</b> Bounded input -> bounded output.","<b>Step 2 — Distractor audit.</b> Linearity, time-invariance, and causality are SEPARATE properties, not the BIBO definition."],
          a: "Bounded input -> bounded output.",
          v: "For an LTI system, BIBO stability is equivalent to all poles lying in the left-half plane (continuous) or inside the unit circle (discrete)."
        }), ref: "p.365" },
      { q: "Pole-zero cancellation may cause:",
        choices: ["Hidden modes (uncontrollable/unobservable)", "Always stable", "Infinite gain", "Phase shift"], correct: 0,
        solution: S({
          c: "Canceling a pole with a zero can HIDE internal modes - if an UNSTABLE pole is canceled, the system looks BIBO-stable from input/output but a state can still grow (uncontrollable or unobservable mode).",
          s: ["<b>Step 1 — Match.</b> Hidden modes (uncontrollable/unobservable).","<b>Step 2 — Distractor audit.</b> It does NOT guarantee stability; not infinite gain; not merely a phase shift."],
          a: "Hidden (uncontrollable/unobservable) modes.",
          v: "This is why you never cancel a right-half-plane pole with a zero - the internal state still blows up even though the transfer function looks fine."
        }), ref: "p.365" },
    ],

    // Signal — +12
    8: [
      { q: "Nyquist rate for signal up to 20 kHz:",
        choices: ["$> 40$ kHz", "$20$ kHz", "$10$ kHz", "$80$ kHz"], correct: 0,
        solution: S({
          c: "Nyquist: sample at MORE than twice the highest frequency, $f_s > 2 f_{max}$.",
          s: ["<b>Step 1 — Apply.</b> $> 2\\times20 = 40$ kHz.","<b>Step 2 — Distractor audit.</b> 20 kHz and 10 kHz are too slow (aliasing); 80 kHz works but isn't the minimum."],
          a: "$> 40$ kHz",
          v: "This is exactly why CD audio uses 44.1 kHz for a 20-kHz hearing limit - the margin above 40 kHz leaves room for the anti-alias filter rolloff."
        }), ref: "p.375" },
      { q: "Anti-aliasing filter type:",
        choices: ["Low-pass before sampler", "High-pass", "Notch", "Bandpass after"], correct: 0,
        solution: S({
          c: "An anti-aliasing filter is a LOW-PASS placed BEFORE the sampler, removing content above the Nyquist frequency so it cannot fold into the band.",
          s: ["<b>Step 1 — Match.</b> Low-pass before the sampler.","<b>Step 2 — Distractor audit.</b> High-pass/notch remove the wrong band; a post-sampler filter is too late for aliasing."],
          a: "Low-pass, before sampling.",
          v: "Timing is everything: once high frequencies alias during sampling, no later filter can separate them from real low-frequency content."
        }), ref: "p.375" },
      { q: "DFT bin spacing for $N$-point DFT, $f_s$ sampling:",
        choices: ["$f_s/N$ Hz", "$f_s$", "$2 f_s$", "$1$ Hz"], correct: 0,
        solution: S({
          c: "DFT frequency resolution (bin spacing) is $f_s/N$ - the sample rate divided by the number of points.",
          s: ["<b>Step 1 — Match.</b> $f_s/N$ Hz.","<b>Step 2 — Distractor audit.</b> $f_s$, $2f_s$, and a fixed 1 Hz ignore the dependence on N."],
          a: "$f_s/N$ Hz.",
          v: "More points (or longer record) = finer resolution - e.g. 1024 points at 8 kHz gives 7.8-Hz bins. True resolution comes from record LENGTH, not zero-padding."
        }), ref: "p.376" },
      { q: "Hanning window vs rectangular: tradeoff:",
        choices: ["Hanning: less leakage but wider main lobe", "Same", "Hanning is faster", "Rect is better"], correct: 0,
        solution: S({
          c: "A Hanning (Hann) window tapers the data ends to zero, REDUCING spectral leakage - but at the cost of a WIDER main lobe (coarser frequency resolution).",
          s: ["<b>Step 1 — Match.</b> Hanning: less leakage, wider main lobe.","<b>Step 2 — Distractor audit.</b> Not 'same'; not faster; rectangular has the sharpest peak but worst leakage, so 'rect is better' is one-sided."],
          a: "Less leakage, wider main lobe.",
          v: "Every window picks a point on the leakage-vs-resolution trade - rectangular = sharp peak/bad leakage; Hann/Hamming/Blackman = progressively less leakage, wider lobes."
        }), ref: "p.376" },
      { q: "FIR filter: impulse response length 10. Group delay:",
        choices: ["$4.5$ samples (constant if symmetric)", "$10$", "$5$", "$0$"], correct: 0,
        solution: S({
          c: "A linear-phase (symmetric-coefficient) FIR filter has constant group delay $(N-1)/2$ samples.",
          s: ["<b>Step 1 — Apply.</b> $(10-1)/2 = 4.5$ samples.","<b>Step 2 — Distractor audit.</b> 10 is the full length; 5 and 0 misuse the formula."],
          a: "$4.5$ samples.",
          v: "Constant group delay (no phase distortion) is FIR's headline advantage over IIR - the whole signal is just delayed by $(N-1)/2$, preserving waveform shape."
        }), ref: "p.376" },
      { q: "Aliasing of 8 kHz signal sampled at 6 kHz:",
        choices: ["Apparent $2$ kHz ($|8-6|$)", "$8$ kHz", "$0$", "$14$ kHz"], correct: 0,
        solution: S({
          c: "Above Nyquist ($f_s/2 = 3$ kHz), the signal folds: $f_{alias} = |f - f_s|$.",
          s: ["<b>Step 1 — Check.</b> 8 kHz > 3 kHz -> aliases.","<b>Step 2 — Fold.</b> $|8-6| = 2$ kHz.","<b>Step 3 — Distractor audit.</b> 8 ignores aliasing; 0 and 14 miscompute the fold."],
          a: "$2$ kHz",
          v: "An 8-kHz tone masquerades as 2 kHz, indistinguishable from a real 2-kHz signal - which is why the anti-alias filter must remove it BEFORE sampling."
        }), ref: "p.375" },
      { q: "Magnitude response of $H(j\\omega) = 1/(1 + j\\omega/\\omega_c)$ at $\\omega = \\omega_c$:",
        choices: ["$1/\\sqrt{2} = -3$ dB", "$1$", "$0$", "$1/2$"], correct: 0,
        solution: S({
          c: "At the corner frequency, a first-order low-pass has magnitude $1/\\sqrt{1+1} = 1/\\sqrt2 = 0.707$, i.e. $-3$ dB.",
          s: ["<b>Step 1 — Apply.</b> $|H| = 1/\\sqrt{1+(\\omega_c/\\omega_c)^2} = 1/\\sqrt2$.","<b>Step 2 — dB.</b> $20\\log(0.707) = -3.01$ dB.","<b>Step 3 — Distractor audit.</b> 1 is DC; 0 is far above; 1/2 is the -6 dB point."],
          a: "$1/\\sqrt2 = -3$ dB",
          v: "The -3 dB (half-POWER) point DEFINES the cutoff frequency - amplitude is 0.707 of max, power is half."
        }), ref: "p.375" },
      { q: "$\\delta[n]$ Fourier transform (DTFT):",
        choices: ["Constant 1 (flat spectrum)", "$\\delta(\\omega)$", "$1/(j\\omega)$", "Cosine"], correct: 0,
        solution: S({
          c: "The unit impulse has a FLAT spectrum: its DTFT is constant (= 1) at all frequencies.",
          s: ["<b>Step 1 — Match.</b> Constant 1 (flat spectrum).","<b>Step 2 — Distractor audit.</b> $\\delta(\\omega)$ is the transform of a CONSTANT (DC); $1/(j\\omega)$ is an integrator; cosine is wrong."],
          a: "Constant 1 (flat).",
          v: "An impulse contains ALL frequencies equally - which is why the impulse response fully characterizes a system (feeding it 'every frequency at once')."
        }), ref: "p.376" },
      { q: "Bode plot 1st-order pole at $\\omega = 10$. Asymptotic mag at $\\omega = 100$:",
        choices: ["$-20$ dB", "$0$ dB", "$-3$ dB", "$-40$ dB"], correct: 0,
        solution: S({
          c: "A first-order pole rolls off at $-20$ dB/decade above its corner. One decade above (10 -> 100), that's $-20$ dB.",
          s: ["<b>Step 1 — Apply.</b> 1 decade past the corner -> $-20$ dB.","<b>Step 2 — Distractor audit.</b> 0 dB is at/below the corner; $-3$ dB is AT the corner; $-40$ dB is two decades up."],
          a: "$-20$ dB",
          v: "Each pole adds $-20$ dB/decade of slope above its corner - stack poles for steeper rolloff (two poles -> $-40$ dB/dec)."
        }), ref: "p.366" },
      { q: "Bode plot 1st-order zero at 10. Asymptotic mag at $\\omega = 100$:",
        choices: ["$+20$ dB", "$0$", "$-20$", "$+3$"], correct: 0,
        solution: S({
          c: "A first-order ZERO rises at $+20$ dB/decade above its corner - the mirror image of a pole.",
          s: ["<b>Step 1 — Apply.</b> 1 decade above 10 -> $+20$ dB.","<b>Step 2 — Distractor audit.</b> 0 is at/below corner; $-20$ is a pole; $+3$ is the at-corner value."],
          a: "$+20$ dB",
          v: "Poles bend the magnitude DOWN ($-20$ dB/dec), zeros bend it UP ($+20$ dB/dec) - a Bode plot is just the sum of these straight-line asymptotes."
        }), ref: "p.366" },
      { q: "Group delay of $H(s) = 1$ (unity):",
        choices: ["$0$", "$\\infty$", "$1$", "Undefined"], correct: 0,
        solution: S({
          c: "Group delay is $-d\\phi/d\\omega$ (rate of phase change). A constant transfer function has zero phase everywhere, so zero group delay.",
          s: ["<b>Step 1 — Match.</b> 0.","<b>Step 2 — Distractor audit.</b> infinity, 1, undefined are wrong - flat 0 phase gives 0 delay."],
          a: "$0$",
          v: "A pure passthrough delays nothing - any frequency-dependent phase (poles/zeros/delay) would create nonzero group delay and possibly waveform distortion."
        }), ref: "p.366" },
      { q: "Z-transform of $a^n u[n]$:",
        choices: ["$1/(1-az^{-1}) = z/(z-a)$", "$1$", "$z/(z+a)$", "$a^n/z$"], correct: 0,
        solution: S({
          c: "Geometric sequence Z-transform: $\\sum a^n z^{-n} = \\dfrac{1}{1-az^{-1}} = \\dfrac{z}{z-a}$ (for $|z|>|a|$).",
          s: ["<b>Step 1 — Match.</b> $z/(z-a)$.","<b>Step 2 — Distractor audit.</b> 1 is the impulse; $z/(z+a)$ flips the sign of a; $a^n/z$ is not a transform."],
          a: "$z/(z-a)$",
          v: "The pole at $z=a$ governs stability: $|a|<1$ (pole inside unit circle) means the sequence decays - the discrete analog of $1/(s+a)$ for $e^{-at}$."
        }), ref: "p.376" },
    ],

    // Electronics — +20
    9: [
      { q: "Inverting amp $R_f = 50$ k, $R_{in} = 5$ k, $v_{in} = 100$ mV. Output:",
        choices: ["$-1.0$ V", "$+1.0$ V", "$-10$ V", "$-0.01$ V"], correct: 0,
        solution: S({
          c: "Inverting amplifier gain is $-R_f/R_{in}$; output $= $ gain $\\times v_{in}$.",
          s: ["<b>Step 1 — Gain.</b> $-50k/5k = -10$.","<b>Step 2 — Output.</b> $-10\\times0.1 = -1.0$ V.","<b>Step 3 — Distractor audit.</b> $+1.0$ misses the sign; $-10$ forgets to scale by vin; $-0.01$ is off."],
          a: "$-1.0$ V",
          v: "The minus sign is the inverting topology's signature - output is 180 degrees out of phase. Gain depends only on the resistor RATIO, not the op-amp."
        }), ref: "p.380" },
      { q: "Non-inverting amp output when $v_{in} = 0$:",
        choices: ["$0$ V", "$\\infty$", "$V_{cc}$", "$-V_{cc}$"], correct: 0,
        solution: S({
          c: "A non-inverting amp has positive gain in the linear region: $v_{out}=G\\,v_{in}$. Zero in gives zero out.",
          s: ["<b>Step 1 — Apply.</b> $G\\times0 = 0$ V.","<b>Step 2 — Distractor audit.</b> infinity/$\\pm V_{cc}$ would require saturation (no negative feedback) - not the linear case."],
          a: "$0$ V",
          v: "With negative feedback the op-amp stays linear, so output tracks input proportionally - zero input, zero output (ignoring tiny offset voltage)."
        }), ref: "p.380" },
      { q: "Voltage follower input impedance:",
        choices: ["Very high (ideal op-amp's $Z_{in}$)", "Zero", "$R$", "$1$ Ω"], correct: 0,
        solution: S({
          c: "A voltage follower (buffer) presents the op-amp's full (very high) input impedance - it barely loads the source.",
          s: ["<b>Step 1 — Match.</b> Very high.","<b>Step 2 — Distractor audit.</b> Zero/R/1 ohm contradict the high-Zin purpose of a buffer."],
          a: "Very high (op-amp Zin).",
          v: "Unity gain but huge Zin and low Zout makes it the ideal buffer - isolating a delicate source from a heavy load without loading it down."
        }), ref: "p.380" },
      { q: "BJT bias: $V_{CC} = 12$, $R_C = 1$ kΩ, $R_B = 220$ kΩ, $\\beta = 100$. $V_{BE}=0.7$V. $I_B$:",
        choices: ["$\\approx 51.4$ µA", "$10$ mA", "$1$ mA", "$0.05$ mA"], correct: 0,
        solution: S({
          c: "Base current from the base loop: $I_B=(V_{CC}-V_{BE})/R_B$.",
          s: ["<b>Step 1 — Apply.</b> $(12-0.7)/220000 = 51.4$ uA.","<b>Step 2 — Distractor audit.</b> 10 mA, 1 mA, 0.05 mA misplace the kohm/voltage."],
          a: "$I_B \\approx 51.4$ uA",
          v: "Fixed-bias (single $R_B$) makes $I_B$ depend only on supply and $R_B$ - but the resulting Q-point varies with beta, the weakness this design has."
        }), ref: "p.384" },
      { q: "Above BJT: $I_C$:",
        choices: ["$\\approx 5.14$ mA", "$0.5$ mA", "$50$ mA", "$1$ A"], correct: 0,
        solution: S({
          c: "In active region, $I_C=\\beta I_B$.",
          s: ["<b>Step 1 — Apply.</b> $100\\times51.4\\,\\mu A = 5.14$ mA.","<b>Step 2 — Distractor audit.</b> 0.5 mA, 50 mA, 1 A misuse beta."],
          a: "$I_C \\approx 5.14$ mA",
          v: "Collector current is beta times base current - and because beta varies unit-to-unit, this Q-point isn't well controlled (why voltage-divider bias is preferred)."
        }), ref: "p.384" },
      { q: "$V_{CE}$ for above:",
        choices: ["$\\approx 6.86$ V (active region)", "$0.2$ V", "$12$ V", "$0$"], correct: 0,
        solution: S({
          c: "Collector loop: $V_{CE}=V_{CC}-I_C R_C$.",
          s: ["<b>Step 1 — Apply.</b> $12-5.14\\times1 = 6.86$ V.","<b>Step 2 — Check region.</b> 6.86 V is between $V_{CE,sat}$ (0.2) and $V_{CC}$ (12) -> active.","<b>Step 3 — Distractor audit.</b> 0.2 V is saturation; 12 V is cutoff; 0 is wrong."],
          a: "$V_{CE} \\approx 6.86$ V (active).",
          v: "Sitting near mid-supply is ideal for a linear amplifier - it gives symmetric headroom for the output to swing both ways without clipping."
        }), ref: "p.384" },
      { q: "Class A amp: transistor conducts for:",
        choices: ["Full 360°", "180°", "Pulses only", "Variable"], correct: 0,
        solution: S({
          c: "Class A conducts over the FULL 360 degrees of the cycle - the transistor never turns off.",
          s: ["<b>Step 1 — Match.</b> Full 360 degrees.","<b>Step 2 — Distractor audit.</b> 180 deg is Class B; pulses are Class C; 'variable' isn't a class."],
          a: "360 degrees.",
          v: "Continuous conduction gives Class A the lowest distortion but worst efficiency (<=25-50%) - it draws full bias current even with no signal."
        }), ref: "p.384" },
      { q: "Push-pull (Class B) amp uses:",
        choices: ["Two complementary transistors", "One BJT", "Single FET", "MOSFET only"], correct: 0,
        solution: S({
          c: "Class B push-pull uses two COMPLEMENTARY transistors (NPN+PNP, or N+P MOSFET), each conducting one half-cycle.",
          s: ["<b>Step 1 — Match.</b> Two complementary transistors.","<b>Step 2 — Distractor audit.</b> A single BJT/FET can't push AND pull; 'MOSFET only' is too narrow."],
          a: "A complementary transistor pair.",
          v: "Efficiency jumps to ~78.5% (vs Class A) since each device is off half the time - the cost is crossover distortion near zero, fixed by Class AB biasing."
        }), ref: "p.384" },
      { q: "Zener regulator: $V_Z = 5.6$ V, $I_{Z,min} = 5$ mA. With load 1 kΩ, source 12V, find $R_s$:",
        choices: ["$\\approx 581$ Ω", "$1$ kΩ", "$100$ Ω", "$2$ kΩ"], correct: 0,
        solution: S({
          c: "The series resistor must pass the load current PLUS the Zener's minimum current: $R_s=(V_{in}-V_Z)/(I_{load}+I_{Z,min})$.",
          s: ["<b>Step 1 — Load current.</b> $I_{load}=5.6/1000=5.6$ mA.","<b>Step 2 — Total.</b> $I_s=5.6+5=10.6$ mA.","<b>Step 3 — Resistor.</b> $R_s=(12-5.6)/0.0106 \\approx 600\\ \\Omega$ (the only choice near this).","<b>Step 4 — Distractor audit.</b> 1k, 100, 2k Ohm all fail to keep the Zener above its minimum current."],
          a: "$R_s \\approx 580$-$600\\ \\Omega$",
          v: "Size $R_s$ for the WORST case (max load + minimum Zener current) so the Zener never drops out of regulation - too large an $R_s$ starves it."
        }), ref: "p.383" },
      { q: "Op-amp output current limit typically:",
        choices: ["~20-50 mA (general purpose)", "1 A", "1 µA", "Unlimited"], correct: 0,
        solution: S({
          c: "General-purpose op-amps source/sink only about 20-50 mA (internally short-circuit protected).",
          s: ["<b>Step 1 — Match.</b> ~20-50 mA.","<b>Step 2 — Distractor audit.</b> 1 A needs a POWER op-amp; 1 uA is far too low; 'unlimited' is impossible."],
          a: "~20-50 mA.",
          v: "To drive heavier loads (speakers, motors) you add a buffer transistor stage or use a power op-amp (1-5 A) - the small-signal op-amp alone can't supply much current."
        }), ref: "p.380" },
      { q: "Common-emitter amplifier output impedance:",
        choices: ["$\\approx R_C$ (collector resistor)", "Very low", "Zero", "$r_e$"], correct: 0,
        solution: S({
          c: "Looking into the collector, output impedance is approximately $R_C$ (in parallel with the large intrinsic $r_o$).",
          s: ["<b>Step 1 — Match.</b> $\\approx R_C$.","<b>Step 2 — Distractor audit.</b> 'Very low'/'zero' describe a follower output; $r_e$ is the emitter side."],
          a: "$\\approx R_C$.",
          v: "High output impedance is typical of CE stages - which is why they often feed a follower (low Zout) to drive real loads. Input impedance, by contrast, is ~beta*re."
        }), ref: "p.384" },
      { q: "Crystal oscillator stability:",
        choices: ["1-100 ppm typically", "1%", "10%", "No drift"], correct: 0,
        solution: S({
          c: "Quartz crystals achieve frequency stability around 1-100 ppm (parts per million) over temperature.",
          s: ["<b>Step 1 — Match.</b> 1-100 ppm.","<b>Step 2 — Distractor audit.</b> 1% and 10% are RC-oscillator territory; 'no drift' is impossible."],
          a: "1-100 ppm.",
          v: "Temperature-compensated (TCXO) and oven-controlled (OCXO) versions reach 10^-8 to 10^-9 - which is why every precise clock and RF reference uses a crystal, not an RC network."
        }), ref: "p.380" },
      { q: "An LC oscillator frequency:",
        choices: ["$f_0 = 1/(2\\pi\\sqrt{LC})$", "$RC$", "Same as $\\omega L$", "Fixed"], correct: 0,
        solution: S({
          c: "An LC tank oscillates at its resonant frequency $f_0=\\dfrac{1}{2\\pi\\sqrt{LC}}$.",
          s: ["<b>Step 1 — Match.</b> $1/(2\\pi\\sqrt{LC})$.","<b>Step 2 — Distractor audit.</b> $RC$ is an RC oscillator; $\\omega L$ is reactance; 'fixed' ignores L and C."],
          a: "$f_0 = 1/(2\\pi\\sqrt{LC})$.",
          v: "At $f_0$, $X_L=X_C$ cancel and the tank sustains oscillation - the same resonance formula as a series/parallel RLC. Depends only on the LC product."
        }), ref: "p.361" },
      { q: "Photodiode operating mode for max speed:",
        choices: ["Reverse bias", "Forward bias", "Zero bias", "AC"], correct: 0,
        solution: S({
          c: "REVERSE bias (photoconductive mode) widens the depletion region, speeding carrier collection and lowering junction capacitance - the fastest mode.",
          s: ["<b>Step 1 — Match.</b> Reverse bias.","<b>Step 2 — Distractor audit.</b> Forward bias floods the junction; zero bias (photovoltaic) is low-noise but SLOW; AC isn't a bias mode."],
          a: "Reverse bias.",
          v: "Wider depletion = lower capacitance = faster response, ideal for high-speed optical receivers - the trade is more dark current (noise) than zero-bias photovoltaic mode."
        }), ref: "p.383" },
      { q: "MOSFET enhancement vs depletion mode:",
        choices: ["Enhancement: needs gate V > $V_{th}$ to turn on; depletion conducts at $V_{GS}=0$", "Same", "Depletion is always on", "Enhancement is faster"], correct: 0,
        solution: S({
          c: "ENHANCEMENT-mode MOSFETs are normally OFF (need $V_{GS}$ beyond $V_{th}$ to conduct); DEPLETION-mode are normally ON (conduct at $V_{GS}=0$, need bias to turn off).",
          s: ["<b>Step 1 — Match.</b> Enhancement needs gate V > Vth; depletion conducts at VGS=0.","<b>Step 2 — Distractor audit.</b> Not 'same'; 'depletion always on' is too absolute; speed isn't the distinction."],
          a: "Enhancement normally-off; depletion normally-on.",
          v: "Almost all digital/power MOSFETs are enhancement-mode (normally off = safe default) - depletion-mode is niche (e.g. some RF and current-source applications)."
        }), ref: "p.386" },
      { q: "Power dissipated by 5V Zener carrying 100 mA:",
        choices: ["$0.5$ W", "$5$ W", "$50$ mW", "$2.5$ W"], correct: 0,
        solution: S({
          c: "Power in a Zener is $P=V_Z I_Z$.",
          s: ["<b>Step 1 — Apply.</b> $5\\times0.1 = 0.5$ W.","<b>Step 2 — Distractor audit.</b> 5 W, 50 mW, 2.5 W misplace a factor."],
          a: "$0.5$ W",
          v: "You'd pick at least a 1 W Zener here for derating margin - exceeding the Zener's power rating destroys it, so the series resistor must limit current."
        }), ref: "p.383" },
      { q: "Inverting summer with $R_f = R_1 = R_2 = 10$ k. $v_1 = 1$, $v_2 = 2$. Output:",
        choices: ["$-3$ V", "$+3$ V", "$3/2$ V", "$0$"], correct: 0,
        solution: S({
          c: "An inverting summing amp: $v_{out}=-R_f\\sum(v_i/R_i)$. With all resistors equal, $v_{out}=-(v_1+v_2)$.",
          s: ["<b>Step 1 — Apply.</b> $-(1+2) = -3$ V.","<b>Step 2 — Distractor audit.</b> $+3$ misses the sign; $3/2$ averages; 0 is wrong."],
          a: "$-3$ V",
          v: "Equal resistors give a true (inverted) sum - choosing different $R_i$ would weight the inputs, the basis of analog mixing and weighted-average circuits."
        }), ref: "p.380" },
      { q: "Common-source MOSFET amp output impedance:",
        choices: ["$R_D \\| r_o$", "Zero", "Infinite", "$r_e$"], correct: 0,
        solution: S({
          c: "Output impedance of a common-source stage is $R_D \\| r_o$ (drain resistor in parallel with the transistor's intrinsic output resistance).",
          s: ["<b>Step 1 — Match.</b> $R_D \\| r_o$.","<b>Step 2 — Distractor audit.</b> Zero/infinite are wrong; $r_e$ is a BJT quantity."],
          a: "$R_D \\| r_o$.",
          v: "Usually $r_o \\gg R_D$, so $Z_{out}\\approx R_D$ - analogous to the BJT common-emitter's $\\approx R_C$. Common-source is the MOSFET inverting gain stage."
        }), ref: "p.386" },
      { q: "Buck-boost converter polarity of output (continuous mode):",
        choices: ["Opposite sign of input (inverted)", "Same sign", "Always positive", "AC"], correct: 0,
        solution: S({
          c: "The standard (inverting) buck-boost converter produces an output of OPPOSITE polarity to the input.",
          s: ["<b>Step 1 — Match.</b> Opposite sign (inverted).","<b>Step 2 — Distractor audit.</b> 'Same sign'/'always positive' describe non-inverting topologies; output is DC, not AC."],
          a: "Inverted (opposite sign).",
          v: "Non-inverting alternatives (Cuk, SEPIC) preserve polarity but need more components - the basic buck-boost trades that for simplicity, useful when a negative rail is wanted."
        }), ref: "p.383" },
      { q: "ADC SAR (Successive Approximation Register) speed:",
        choices: ["Medium ($\\sim$ MSps for 12-bit)", "Fastest", "Slow", "Hz range"], correct: 0,
        solution: S({
          c: "A SAR ADC does a binary search - one comparison per bit - giving MEDIUM speed (around MSps for 12-bit) and good resolution.",
          s: ["<b>Step 1 — Match.</b> Medium (~MSps for 12-bit).","<b>Step 2 — Distractor audit.</b> Flash is fastest; sigma-delta is slow/high-res; 'Hz range' is far too slow."],
          a: "Medium speed.",
          v: "The ADC speed/resolution ladder: flash (fastest, low bits, expensive) > pipelined > SAR (balanced) > sigma-delta (slow, highest resolution) - SAR is the popular general-purpose choice."
        }), ref: "p.388" },
    ],

    // Power — +18
    10: [
      { q: "Line current for 30 kW load at $V_{LL} = 480$ V, $pf = 0.85$:",
        choices: ["$\\approx 42.5$ A", "$\\$30$ A", "$\\$60$ A", "$\\$15$ A"], correct: 0,
        solution: S({
          c: "Solve the three-phase power formula for current: $I_L = \\dfrac{P}{\\sqrt3\\,V_{LL}\\cos\\theta}$.",
          s: ["<b>Step 1 — Apply.</b> $30000/(1.732\\times480\\times0.85) = 42.45$ A.","<b>Step 2 — Distractor audit.</b> 30/60/15 A ignore the $\\sqrt3$, voltage, or pf."],
          a: "$I_L \\approx 42.5$ A",
          v: "Lower pf would RAISE this current for the same 30 kW - which is why poor pf wastes line capacity and is penalized."
        }), ref: "p.363" },
      { q: "Wye→Delta with each Y impedance $5\\angle 30°$ Ω. Delta phase Z:",
        choices: ["$15\\angle 30°$ Ω", "$5\\angle 30°$", "$1.67\\angle 30°$", "$25\\angle 60°$"], correct: 0,
        solution: S({
          c: "Balanced Y-to-Delta: $Z_\\Delta = 3Z_Y$.",
          s: ["<b>Step 1 — Apply.</b> $3\\times5\\angle30° = 15\\angle30°$.","<b>Step 2 — Distractor audit.</b> $5\\angle30$ unchanged; $1.67\\angle30$ divides (Delta to Y); $25\\angle60$ wrong."],
          a: "$15\\angle 30°$ Ω",
          v: "The angle is unchanged; only the magnitude triples - Y to Delta multiplies by 3, Delta to Y divides by 3."
        }), ref: "p.363" },
      { q: "Transformer with primary 240V, secondary 24V. Reflect 10Ω load on secondary to primary:",
        choices: ["$1000$ Ω", "$1$ Ω", "$10$ Ω", "$100$ Ω"], correct: 0,
        solution: S({
          c: "Impedance reflects across a transformer by the turns ratio SQUARED: $Z' = a^2 Z$, where $a = N_1/N_2 = V_1/V_2$.",
          s: ["<b>Step 1 — Turns ratio.</b> $a = 240/24 = 10$.","<b>Step 2 — Reflect.</b> $10^2\\times10 = 1000\\ \\Omega$.","<b>Step 3 — Distractor audit.</b> 1 Ohm divides; 10 forgets to reflect; 100 uses $a$ not $a^2$."],
          a: "$1000\\ \\Omega$",
          v: "Impedance scales as turns-ratio SQUARED - the basis of impedance matching with transformers (e.g. tube amp output to 8-Ohm speaker)."
        }), ref: "p.364" },
      { q: "Motor at 60 Hz, 4 poles, 1750 rpm full-load. Slip:",
        choices: ["$\\approx 2.8\\%$", "$5\\%$", "$10\\%$", "$0$"], correct: 0,
        solution: S({
          c: "Slip = $(n_s - n)/n_s$, where synchronous speed $n_s = 120f/p$.",
          s: ["<b>Step 1 — Sync speed.</b> $120\\times60/4 = 1800$ rpm.","<b>Step 2 — Slip.</b> $(1800-1750)/1800 = 2.78\\%$.","<b>Step 3 — Distractor audit.</b> 5% and 10% overestimate; 0 would be synchronous (no induction torque)."],
          a: "$\\approx 2.78\\%$",
          v: "Induction motors MUST slip (a few %) to induce rotor current and make torque - zero slip means no torque, which is why they never quite reach synchronous speed."
        }), ref: "p.365" },
      { q: "DC motor armature current with $V = 220$V, $E_b = 200$V, $R_a = 0.5$Ω:",
        choices: ["$40$ A", "$20$ A", "$440$ A", "$100$ A"], correct: 0,
        solution: S({
          c: "Armature current $I_a = (V - E_b)/R_a$, where $E_b$ is the back-EMF.",
          s: ["<b>Step 1 — Apply.</b> $(220-200)/0.5 = 40$ A.","<b>Step 2 — Distractor audit.</b> 20 A halves wrongly; 440 A forgets $E_b$; 100 A is off."],
          a: "$I_a = 40$ A",
          v: "Back-EMF $E_b$ rises with speed and OPPOSES the supply - at startup $E_b=0$, so inrush is huge ($220/0.5=440$ A), which is why DC motors need starting resistors."
        }), ref: "p.365" },
      { q: "Active power formula in three-phase using line quantities:",
        choices: ["$P = \\sqrt{3} V_{LL} I_L \\cos\\theta$", "$P = V_{LL} I_L \\cos\\theta$", "$P = 3 V_{LL} I_L$", "$V/R$"], correct: 0,
        solution: S({
          c: "Three-phase real power in line quantities: $P = \\sqrt3\\,V_{LL}I_L\\cos\\theta$ (valid for both Y and Delta).",
          s: ["<b>Step 1 — Match.</b> $\\sqrt3 V_{LL}I_L\\cos\\theta$.","<b>Step 2 — Distractor audit.</b> Missing $\\sqrt3$, or '$3V_{LL}I_L$' (no pf), or '$V/R$' are wrong."],
          a: "$P = \\sqrt3\\,V_{LL}I_L\\cos\\theta$",
          v: "The $\\sqrt3$ arises because $V_{LL}=\\sqrt3 V_{phase}$ in wye - this single formula works for any balanced three-phase load in line terms."
        }), ref: "p.363" },
      { q: "Transformer turns ratio 10:1 step down. Apply 4800V primary, get:",
        choices: ["$480$ V", "$48{,}000$ V", "$4800$ V", "$48$ V"], correct: 0,
        solution: S({
          c: "Voltage steps by the turns ratio: $V_2 = V_1/a$ for a step-down (a:1).",
          s: ["<b>Step 1 — Apply.</b> $4800/10 = 480$ V.","<b>Step 2 — Distractor audit.</b> 48,000 V steps UP; 4800 V unchanged; 48 V over-divides."],
          a: "$480$ V",
          v: "Step-down lowers voltage but RAISES current by the same ratio (power conserved) - the secondary here carries 10x the primary current."
        }), ref: "p.364" },
      { q: "Apparent vs real power: $|S|^2$ =",
        choices: ["$P^2 + Q^2$", "$P + Q$", "$P - Q$", "$P/Q$"], correct: 0,
        solution: S({
          c: "The power triangle relates the three powers: $|S|^2 = P^2 + Q^2$ (apparent = hypotenuse of real and reactive).",
          s: ["<b>Step 1 — Match.</b> $P^2+Q^2$.","<b>Step 2 — Distractor audit.</b> $P+Q$, $P-Q$, $P/Q$ ignore the right-triangle (Pythagorean) relationship."],
          a: "$|S|^2 = P^2 + Q^2$",
          v: "S in VA, P in W, Q in VAR form a right triangle - power factor is $\\cos\\theta = P/|S|$. Know any two and you get the third."
        }), ref: "p.362" },
      { q: "Per-unit impedance of 50 MVA, 13.8 kV transformer with $Z_{actual} = 0.5$ Ω:",
        choices: ["$\\approx 0.131$ pu", "$0.5$ pu", "$1.0$ pu", "$10$ pu"], correct: 0,
        solution: S({
          c: "Per-unit: $Z_{pu} = Z_{actual}/Z_{base}$, where $Z_{base} = V_{base}^2/S_{base}$.",
          s: ["<b>Step 1 — Base impedance.</b> $13800^2/50{,}000{,}000 = 3.808\\ \\Omega$.","<b>Step 2 — Per-unit.</b> $0.5/3.808 = 0.131$ pu.","<b>Step 3 — Distractor audit.</b> 0.5 pu forgets to divide; 1.0 and 10 pu are wrong."],
          a: "$\\approx 0.131$ pu",
          v: "Per-unit normalizes a whole multi-voltage system to common bases, making transformers 'disappear' from the impedance diagram - the standard for power-flow and fault studies."
        }), ref: "p.363" },
      { q: "Synchronous speed of 2-pole machine at 50 Hz:",
        choices: ["$3000$ rpm", "$1500$ rpm", "$6000$ rpm", "$1800$ rpm"], correct: 0,
        solution: S({
          c: "Synchronous speed $n_s = 120f/p$.",
          s: ["<b>Step 1 — Apply.</b> $120\\times50/2 = 3000$ rpm.","<b>Step 2 — Distractor audit.</b> 1500 is 4-pole; 6000 doubles; 1800 is 60 Hz/4-pole."],
          a: "$3000$ rpm",
          v: "Fewer poles = faster - a 2-pole machine spins twice as fast as a 4-pole at the same frequency. At 60 Hz the 2-pole value is 3600 rpm."
        }), ref: "p.365" },
      { q: "Three-phase rectifier output ripple vs single-phase:",
        choices: ["Lower ripple, 6-pulse per cycle", "Higher", "Same", "Zero"], correct: 0,
        solution: S({
          c: "A three-phase full-wave rectifier produces 6 pulses per cycle, giving much LOWER ripple than a single-phase (2-pulse) rectifier.",
          s: ["<b>Step 1 — Match.</b> Lower ripple, 6 pulses/cycle.","<b>Step 2 — Distractor audit.</b> Not higher, not the same, not zero."],
          a: "Lower ripple (6-pulse).",
          v: "More pulses per cycle = smoother DC = smaller filter needed - which is why industrial DC supplies use three-phase rectification. 12-pulse setups smooth it even further."
        }), ref: "p.383" },
      { q: "Power factor 0.5 lagging means:",
        choices: ["$\\theta = 60°$, current lags voltage", "Resistive", "Capacitive", "Leading"], correct: 0,
        solution: S({
          c: "pf $=\\cos\\theta = 0.5$ means $\\theta=60°$; 'lagging' means current lags voltage (inductive load).",
          s: ["<b>Step 1 — Angle.</b> $\\arccos0.5 = 60°$.","<b>Step 2 — Distractor audit.</b> Resistive is pf=1; capacitive/leading have current ahead of voltage."],
          a: "$\\theta=60°$, current lags (inductive).",
          v: "A pf of 0.5 is poor - reactive power equals $\\sqrt3$ times real power here, heavily loading the line. Motors (inductive) cause lagging pf; capacitor banks correct it."
        }), ref: "p.362" },
      { q: "Voltage drop in transmission line approximately:",
        choices: ["$V_R \\approx |I|(R\\cos\\theta + X\\sin\\theta)$", "$IR$ only", "$IZ$ vector", "$V$"], correct: 0,
        solution: S({
          c: "The approximate line voltage drop (regulation) is $\\Delta V \\approx |I|(R\\cos\\theta + X\\sin\\theta)$, combining resistive and reactive drops weighted by the load angle.",
          s: ["<b>Step 1 — Match.</b> $|I|(R\\cos\\theta + X\\sin\\theta)$.","<b>Step 2 — Distractor audit.</b> '$IR$ only' drops the reactance; the others are incomplete."],
          a: "$\\Delta V \\approx |I|(R\\cos\\theta + X\\sin\\theta)$",
          v: "Both R and X matter, weighted by the power-factor angle - for inductive loads (lagging) the $X\\sin\\theta$ term often dominates, since $X \\gg R$ on long lines."
        }), ref: "p.363" },
      { q: "Why X >> R for long transmission lines:",
        choices: ["Inductive reactance dominates over copper R", "Capacitive", "Mutual coupling", "Frequency low"], correct: 0,
        solution: S({
          c: "On long transmission lines, inductive reactance ($X=\\omega L\\times$length) dominates the relatively small conductor resistance R.",
          s: ["<b>Step 1 — Match.</b> Inductive reactance dominates over R.","<b>Step 2 — Distractor audit.</b> Not capacitive-dominated, not mutual coupling, not low frequency."],
          a: "Inductive reactance dominates.",
          v: "Because X >> R, real power flow is governed mainly by the voltage PHASE ANGLE across the line ($P \\approx V_1V_2\\sin\\delta/X$) - the foundation of power-flow and stability analysis."
        }), ref: "p.363" },
      { q: "Capacitor bank for PF correction: $P = 50$ kW, raise PF 0.7→0.95:",
        choices: ["$\\approx 34.6$ kVAR", "$50$ kVAR", "$10$ kVAR", "$15$ kVAR"], correct: 0,
        solution: S({
          c: "Required capacitor VARs: $Q_C = P(\\tan\\theta_1 - \\tan\\theta_2)$, where $\\theta=\\arccos(pf)$.",
          s: ["<b>Step 1 — Angles.</b> $\\theta_1=\\arccos0.7=45.6°$ ($\\tan=1.02$); $\\theta_2=\\arccos0.95=18.2°$ ($\\tan=0.329$).","<b>Step 2 — Apply.</b> $Q_C=50(1.02-0.329)=34.6$ kVAR.","<b>Step 3 — Distractor audit.</b> 50/10/15 kVAR misuse the tangent difference."],
          a: "$\\approx 34.6$ kVAR",
          v: "The capacitor supplies leading VARs to cancel part of the load's lagging VARs, raising pf without changing P - cutting line current and losses."
        }), ref: "p.362" },
      { q: "Three-phase fault current $I_{SC}$ in pu: $V_{pu} = 1.0$, $Z_{pu} = 0.1$:",
        choices: ["$10$ pu", "$1$ pu", "$0.1$ pu", "$100$ pu"], correct: 0,
        solution: S({
          c: "Per-unit short-circuit current is simply $I_{SC} = V_{pu}/Z_{pu}$.",
          s: ["<b>Step 1 — Apply.</b> $1.0/0.1 = 10$ pu.","<b>Step 2 — Distractor audit.</b> 1, 0.1, 100 pu misuse the division."],
          a: "$10$ pu",
          v: "10 pu means the fault current is 10x rated - exactly the inverse of the per-unit impedance. Lower system impedance gives FIERCER faults, which protective devices must interrupt."
        }), ref: "p.363" },
      { q: "DC generator with $V_t = 240$V, $I_a = 50$A, $R_a = 0.2$Ω. Generated EMF:",
        choices: ["$250$ V", "$240$ V", "$230$ V", "$10$ V"], correct: 0,
        solution: S({
          c: "A generator's internal EMF must EXCEED terminal voltage by the armature drop (it supplies current outward): $E_g = V_t + I_a R_a$.",
          s: ["<b>Step 1 — Apply.</b> $240 + 50\\times0.2 = 250$ V.","<b>Step 2 — Distractor audit.</b> 240 V forgets the drop; 230 V SUBTRACTS (that's a motor); 10 V is just the drop."],
          a: "$E_g = 250$ V",
          v: "Note the sign vs a MOTOR: generator $E_g=V_t+I_aR_a$ (EMF above terminal), motor $E_b=V_t-I_aR_a$ (back-EMF below) - the armature drop flips direction with power flow."
        }), ref: "p.365" },
      { q: "Service factor of motor at FL means:",
        choices: ["Continuous-duty capacity multiplier of nameplate rating", "Voltage tolerance", "Frequency", "Starting current"], correct: 0,
        solution: S({
          c: "Service factor is a continuous-duty overload multiplier on the nameplate rating - SF 1.15 means it can run continuously at 115% of rated power.",
          s: ["<b>Step 1 — Match.</b> Continuous-duty capacity multiplier of nameplate.","<b>Step 2 — Distractor audit.</b> Not voltage tolerance, frequency, or starting current."],
          a: "Continuous overload capacity.",
          v: "Running in the SF zone shortens insulation life and lowers efficiency, so it's for occasional overload - SF 1.0 means no margin; 1.15-1.25 is typical general-purpose."
        }), ref: "p.365" },
    ],

    // EM — +8
    11: [
      { q: "EM wave wavelength in vacuum at 300 MHz:",
        choices: ["$1$ m", "$300$ m", "$0.3$ m", "$3$ m"], correct: 0,
        solution: S({
          c: "Wavelength $\\lambda = c/f$.",
          s: ["<b>Step 1 — Apply.</b> $3\\times10^8 / 3\\times10^8 = 1$ m.","<b>Step 2 — Distractor audit.</b> 300 m is 1 MHz; 0.3 m is 1 GHz; 3 m is 100 MHz."],
          a: "$1$ m",
          v: "Handy anchor: 300 MHz <-> 1 m (and scales inversely) - useful for sizing antennas (~lambda/4 = 25 cm here)."
        }), ref: "p.368" },
      { q: "Power density of EM wave with $E_{rms} = 1$ V/m in vacuum:",
        choices: ["$\\approx 2.65$ mW/m²", "$1$ W/m²", "$120\\pi$ W/m²", "$0$"], correct: 0,
        solution: S({
          c: "Poynting (power) density: $S = E_{rms}^2/\\eta_0$, with free-space impedance $\\eta_0 \\approx 377\\ \\Omega$.",
          s: ["<b>Step 1 — Apply.</b> $1^2/377 = 2.65\\times10^{-3}$ W/m^2 = 2.65 mW/m^2.","<b>Step 2 — Distractor audit.</b> 1 W/m^2 ignores $\\eta_0$; $120\\pi$ misuses it; 0 is wrong."],
          a: "$\\approx 2.65$ mW/m^2",
          v: "The 377-Ohm free-space impedance links E and power density - the same constant that relates E and H in a propagating wave ($\\eta_0=120\\pi$)."
        }), ref: "p.368" },
      { q: "$\\nabla \\cdot \\vec{E} = \\rho/\\varepsilon_0$ is:",
        choices: ["Gauss's law (E-field divergence from charge)", "Faraday", "Ampere", "Coulomb"], correct: 0,
        solution: S({
          c: "This is GAUSS'S LAW (the first Maxwell equation): the divergence of E equals charge density over permittivity - electric field lines originate on charge.",
          s: ["<b>Step 1 — Match.</b> Gauss's law.","<b>Step 2 — Distractor audit.</b> Faraday is $\\nabla\\times E=-\\partial B/\\partial t$; Ampere involves $\\nabla\\times B$; Coulomb is the force law."],
          a: "Gauss's law.",
          v: "It says charges are the SOURCES/SINKS of electric field - the integral form ($\\oint E\\cdot dA = Q/\\varepsilon_0$) is the symmetry tool for finding fields of charged spheres, lines, planes."
        }), ref: "p.355" },
      { q: "Permittivity of vacuum $\\varepsilon_0$ ≈",
        choices: ["$8.854 \\times 10^{-12}$ F/m", "$1$ F/m", "$\\mu_0$", "$10^{-7}$"], correct: 0,
        solution: S({
          c: "$\\varepsilon_0 \\approx 8.854\\times10^{-12}$ F/m - a fundamental constant in all of electrostatics and wave propagation.",
          s: ["<b>Step 1 — Match.</b> $8.854\\times10^{-12}$ F/m.","<b>Step 2 — Distractor audit.</b> 1 F/m is absurd; $\\mu_0$ is the magnetic constant; $10^{-7}$ is the order of $\\mu_0$."],
          a: "$8.854\\times10^{-12}$ F/m.",
          v: "Pairs with $\\mu_0=4\\pi\\times10^{-7}$ H/m to set $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ - appears in Coulomb's law, capacitance, and Gauss's law."
        }), ref: "p.355" },
      { q: "Transmission line characteristic impedance for $L'=0.5$ µH/m, $C'=200$ pF/m:",
        choices: ["$50$ Ω", "$100$ Ω", "$25$ Ω", "$0.5$ Ω"], correct: 0,
        solution: S({
          c: "Characteristic impedance of a lossless line: $Z_0 = \\sqrt{L'/C'}$ (per-unit-length inductance over capacitance).",
          s: ["<b>Step 1 — Apply.</b> $\\sqrt{0.5\\times10^{-6}/200\\times10^{-12}} = \\sqrt{2500} = 50\\ \\Omega$.","<b>Step 2 — Distractor audit.</b> 100, 25, 0.5 Ohm come from ratio/root errors."],
          a: "$Z_0 = 50\\ \\Omega$",
          v: "$Z_0$ depends on the L/C RATIO (geometry/dielectric), not the line length - 50 Ohm is the ubiquitous standard for RF coax and microstrip."
        }), ref: "p.368" },
      { q: "Reflection coefficient at matched load:",
        choices: ["$\\Gamma = 0$ (no reflection)", "$1$", "$-1$", "Infinite"], correct: 0,
        solution: S({
          c: "Reflection coefficient $\\Gamma = (Z_L-Z_0)/(Z_L+Z_0)$. A MATCHED load ($Z_L=Z_0$) gives $\\Gamma=0$ - no reflection.",
          s: ["<b>Step 1 — Apply.</b> $Z_L=Z_0$ -> $\\Gamma=0$.","<b>Step 2 — Distractor audit.</b> $+1$ is open; $-1$ is short; infinite isn't possible."],
          a: "$\\Gamma = 0$ (no reflection).",
          v: "Matched = all power absorbed by the load, none bounced back (VSWR=1) - the goal of impedance matching in RF/transmission systems."
        }), ref: "p.368" },
      { q: "Short-circuited transmission line: $\\Gamma$ at short:",
        choices: ["$-1$ (180° phase flip)", "$+1$", "$0$", "$0.5$"], correct: 0,
        solution: S({
          c: "At a short ($Z_L=0$): $\\Gamma = (0-Z_0)/(0+Z_0) = -1$ - full reflection with a 180-degree phase flip.",
          s: ["<b>Step 1 — Apply.</b> $\\Gamma = -1$.","<b>Step 2 — Distractor audit.</b> $+1$ is an OPEN; 0 is matched; 0.5 is partial."],
          a: "$\\Gamma = -1$",
          v: "Short -> $\\Gamma=-1$ (voltage inverts), Open -> $\\Gamma=+1$ (voltage doubles at the end), Matched -> $\\Gamma=0$ - the three canonical termination cases."
        }), ref: "p.368" },
      { q: "Microstrip $Z_0$ depends on:",
        choices: ["Trace width, dielectric height, $\\varepsilon_r$", "Just length", "Frequency only", "Color"], correct: 0,
        solution: S({
          c: "Microstrip characteristic impedance depends on the geometry (trace width, substrate height) and the dielectric constant $\\varepsilon_r$.",
          s: ["<b>Step 1 — Match.</b> Trace width, dielectric height, and $\\varepsilon_r$.","<b>Step 2 — Distractor audit.</b> Not just length, not frequency alone, certainly not color."],
          a: "Geometry (W, H) and $\\varepsilon_r$.",
          v: "Designers solve these formulas to hit 50 Ohm for a given board stackup - wider trace or thinner/higher-$\\varepsilon_r$ dielectric lowers $Z_0$."
        }), ref: "p.368" },
    ],

    // Control — +12
    12: [
      { q: "PID controller transfer function in parallel form:",
        choices: ["$K_p + K_i/s + K_d s$", "$K_p(K_i)(K_d)$", "$K/s$", "Just $K$"], correct: 0,
        solution: S({
          c: "Parallel-form PID transfer function: $K_p + \\dfrac{K_i}{s} + K_d s$ (proportional + integral + derivative).",
          s: ["<b>Step 1 — Match.</b> $K_p + K_i/s + K_d s$.","<b>Step 2 — Distractor audit.</b> Multiplying the gains, $K/s$, or 'just K' aren't the PID structure."],
          a: "$K_p + K_i/s + K_d s$",
          v: "The $1/s$ is the integrator (kills steady-state error), the $s$ is the differentiator (adds damping) - each term shapes a different aspect of the response."
        }), ref: "p.366" },
      { q: "Pure proportional control of plant $G = 1/(s+1)$, K = 10. Closed-loop pole:",
        choices: ["$s = -11$", "$s = -1$", "$s = -10$", "$s = -1/10$"], correct: 0,
        solution: S({
          c: "Unity-feedback closed loop: $T = \\dfrac{KG}{1+KG}$. Find the pole from the denominator.",
          s: ["<b>Step 1 — Form T.</b> $T = \\dfrac{10/(s+1)}{1+10/(s+1)} = \\dfrac{10}{s+11}$.","<b>Step 2 — Pole.</b> $s = -11$.","<b>Step 3 — Distractor audit.</b> $-1$ is the OPEN-loop pole; $-10$ and $-1/10$ misuse K."],
          a: "$s = -11$",
          v: "Feedback moved the pole from $-1$ to $-11$ - higher gain pushes it further left (faster response). This pole-shifting is the whole point of feedback control."
        }), ref: "p.365" },
      { q: "If $G(s) = K/s$ and $H(s) = 1$ (unity feedback), closed-loop is:",
        choices: ["$K/(s+K)$ (1st-order LPF)", "$1$", "$1/(s+1)$", "$Ks$"], correct: 0,
        solution: S({
          c: "Unity feedback of an integrator: $T = \\dfrac{G}{1+G} = \\dfrac{K/s}{1+K/s} = \\dfrac{K}{s+K}$ - a first-order low-pass.",
          s: ["<b>Step 1 — Form T.</b> $K/(s+K)$.","<b>Step 2 — Read it.</b> Pole at $-K$, DC gain $K/K=1$.","<b>Step 3 — Distractor audit.</b> 1, $1/(s+1)$, $Ks$ don't follow the feedback formula."],
          a: "$K/(s+K)$ (1st-order LPF).",
          v: "Wrapping feedback around an integrator turns it into a stable first-order tracker with unity DC gain and bandwidth K - the basis of simple servo loops."
        }), ref: "p.365" },
      { q: "Gain crossover frequency $\\omega_{gc}$:",
        choices: ["Where $|G(j\\omega)H(j\\omega)| = 1$", "Where phase = 0", "DC", "Resonance"], correct: 0,
        solution: S({
          c: "The gain crossover frequency is where the open-loop magnitude $|G(j\\omega)H(j\\omega)| = 1$ (0 dB).",
          s: ["<b>Step 1 — Match.</b> Where $|GH| = 1$.","<b>Step 2 — Distractor audit.</b> Phase = -180 is the PHASE crossover; DC and resonance are different points."],
          a: "Where $|GH| = 1$.",
          v: "At $\\omega_{gc}$ you read off the PHASE MARGIN (how far phase is from -180) - the key stability metric. It also roughly equals the closed-loop bandwidth."
        }), ref: "p.366" },
      { q: "Phase crossover frequency $\\omega_{pc}$:",
        choices: ["Where phase = -180°", "Where gain = 1", "DC", "Resonance"], correct: 0,
        solution: S({
          c: "The phase crossover frequency is where the open-loop PHASE = -180 degrees.",
          s: ["<b>Step 1 — Match.</b> Where phase = -180.","<b>Step 2 — Distractor audit.</b> Gain = 1 is the GAIN crossover; DC/resonance are different."],
          a: "Where phase = $-180°$.",
          v: "At $\\omega_{pc}$ you read off the GAIN MARGIN (how far $|GH|$ is below 1) - if gain reaches 1 exactly at -180 phase, the loop is on the edge of instability."
        }), ref: "p.366" },
      { q: "Lead compensator effect on $\\omega_{gc}$:",
        choices: ["Shifts $\\omega_{gc}$ higher (faster response)", "Shifts lower", "No effect", "Random"], correct: 0,
        solution: S({
          c: "A lead compensator adds gain and positive phase at high frequencies, pushing the gain crossover HIGHER - giving faster response.",
          s: ["<b>Step 1 — Match.</b> Shifts $\\omega_{gc}$ higher (faster).","<b>Step 2 — Distractor audit.</b> It doesn't lower it or leave it unchanged."],
          a: "Higher $\\omega_{gc}$ (faster response).",
          v: "Lead is the frequency-domain cousin of derivative action - it boosts bandwidth AND adds phase margin near crossover, improving both speed and stability."
        }), ref: "p.366" },
      { q: "Acceptable gain margin minimum:",
        choices: ["$\\ge 6$ dB typically", "$0$ dB", "$\\infty$", "$3$ dB"], correct: 0,
        solution: S({
          c: "A common robustness rule of thumb: gain margin >= 6 dB.",
          s: ["<b>Step 1 — Match.</b> >= 6 dB.","<b>Step 2 — Distractor audit.</b> 0 dB is the edge of instability; infinity is unrealistic; 3 dB is too marginal."],
          a: ">= 6 dB.",
          v: "GM >= 6 dB means the loop gain could double before instability - paired with phase margin >= 30-45 degrees for a robust design with reasonable damping."
        }), ref: "p.366" },
      { q: "Acceptable phase margin minimum:",
        choices: ["$\\ge 30°$ (60° is better)", "$\\ge 0°$", "$\\ge 90°$", "$0°$"], correct: 0,
        solution: S({
          c: "Phase margin >= 30 degrees is the usual minimum; 45-60 degrees is the preferred target for a well-damped response.",
          s: ["<b>Step 1 — Match.</b> >= 30 degrees (60 is better).","<b>Step 2 — Distractor audit.</b> >= 0 is on the edge; >= 90 is overly conservative/sluggish; 0 is unstable-adjacent."],
          a: ">= 30 degrees.",
          v: "Phase margin is the frequency-domain stand-in for damping ratio - ~60 degrees is the sweet spot (fast with little overshoot); low PM means a ringing, near-unstable response."
        }), ref: "p.366" },
      { q: "Integral term in PI controller eliminates:",
        choices: ["Steady-state error to step", "Overshoot", "Noise", "Settling time"], correct: 0,
        solution: S({
          c: "The integral term adds a pole at the origin (an integrator), raising the system TYPE and driving steady-state error to a STEP to zero.",
          s: ["<b>Step 1 — Match.</b> Steady-state error to a step.","<b>Step 2 — Distractor audit.</b> It doesn't reduce overshoot (often worsens it), filter noise, or shorten settling."],
          a: "Steady-state step error.",
          v: "Any residual error keeps charging the integrator until the error is driven to zero - the only stable point. This is exactly why nearly every controller includes an I term."
        }), ref: "p.366" },
      { q: "Derivative term in PID:",
        choices: ["Improves damping but amplifies noise", "No effect", "Eliminates offset", "Adds gain only"], correct: 0,
        solution: S({
          c: "The derivative term adds phase lead -> DAMPING (it anticipates and brakes overshoot), but it also AMPLIFIES high-frequency noise.",
          s: ["<b>Step 1 — Match.</b> Improves damping but amplifies noise.","<b>Step 2 — Distractor audit.</b> Not 'no effect'; 'eliminates offset' is the INTEGRAL term; not just gain."],
          a: "Damping (with noise amplification).",
          v: "Because differentiating boosts high frequencies, real controllers use a FILTERED derivative $\\dfrac{K_d s}{1+s/N}$ to cap the noise gain - pure D is rarely used alone."
        }), ref: "p.366" },
      { q: "Time scaling: if $G(s)$ stable, $G(s/T)$ for $T > 0$:",
        choices: ["Still stable but slower", "Unstable", "Faster", "Unrelated"], correct: 0,
        solution: S({
          c: "Replacing $s$ with $s/T$ scales time: the poles all scale by $T$ along rays from the origin. For $T>0$ they stay in the left-half plane, so the system remains STABLE (just rescaled in speed).",
          s: ["<b>Step 1 — Match.</b> Still stable but slower (for T > 1).","<b>Step 2 — Distractor audit.</b> It can't become unstable for $T>0$; speed depends on T (slower if T>1)."],
          a: "Stable, time-rescaled.",
          v: "Since poles only move radially (sign of real part preserved), LHP stays LHP - time scaling stretches or compresses the response without changing stability."
        }), ref: "p.365" },
      { q: "Closed-loop bandwidth ≈ gain crossover frequency for:",
        choices: ["Common 1st-order or moderately damped systems", "Always", "Never", "Only DC"], correct: 0,
        solution: S({
          c: "For common first-order or moderately-damped second-order systems, closed-loop bandwidth is approximately the open-loop gain crossover frequency.",
          s: ["<b>Step 1 — Match.</b> Common 1st-order / moderately damped systems.","<b>Step 2 — Distractor audit.</b> 'Always' overstates (exact relation varies); 'never'/'only DC' are wrong."],
          a: "Approximately, for moderate damping.",
          v: "This rule of thumb lets you estimate bandwidth straight from a Bode plot's crossover - handy for quick design, though the exact factor depends on the damping ratio."
        }), ref: "p.366" },
    ],

    // Comm — +12
    13: [
      { q: "BPSK transmits how many bits per symbol?",
        choices: ["$1$", "$2$", "$4$", "$8$"], correct: 0,
        solution: S({
          c: "BPSK has 2 phase states (0 and pi), so it carries $\\log_2 2 = 1$ bit per symbol.",
          s: ["<b>Step 1 — Apply.</b> $\\log_2 2 = 1$ bit.","<b>Step 2 — Distractor audit.</b> 2 is QPSK; 4 is 16-QAM; 8 is 256-QAM."],
          a: "1 bit/symbol.",
          v: "Fewest bits = most ROBUST: BPSK's two far-apart points give the best noise immunity at the cost of the lowest data rate."
        }), ref: "p.371" },
      { q: "QPSK uses ___ symbol states:",
        choices: ["$4$ (2 bits each)", "$2$", "$8$", "$16$"], correct: 0,
        solution: S({
          c: "QPSK (Quadrature PSK) has 4 phase states, carrying 2 bits per symbol.",
          s: ["<b>Step 1 — Apply.</b> 4 states, 2 bits each.","<b>Step 2 — Distractor audit.</b> 2 is BPSK; 8 is 8-PSK; 16 is 16-QAM."],
          a: "4 states (2 bits each).",
          v: "QPSK doubles BPSK's rate in the same bandwidth with essentially the same energy-per-bit performance - a free win, hence its ubiquity."
        }), ref: "p.371" },
      { q: "16-QAM transmits ___ bits per symbol:",
        choices: ["$4$", "$2$", "$8$", "$16$"], correct: 0,
        solution: S({
          c: "Bits per symbol = $\\log_2(\\text{constellation size})$. $\\log_2 16 = 4$.",
          s: ["<b>Step 1 — Apply.</b> $\\log_2 16 = 4$ bits.","<b>Step 2 — Distractor audit.</b> 2 is QPSK; 8 is 256-QAM; 16 is the point count, not bits."],
          a: "4 bits/symbol.",
          v: "More bits/symbol = higher data rate but needs higher SNR (points are closer together) - 16-QAM needs ~18 dB SNR for a good BER."
        }), ref: "p.371" },
      { q: "AM bandwidth for message with $f_m$ = 5 kHz:",
        choices: ["$10$ kHz", "$5$ kHz", "$2.5$ kHz", "$15$ kHz"], correct: 0,
        solution: S({
          c: "Standard AM (double-sideband) bandwidth is twice the highest message frequency: $BW = 2f_m$.",
          s: ["<b>Step 1 — Apply.</b> $2\\times5 = 10$ kHz.","<b>Step 2 — Distractor audit.</b> 5 kHz is SSB; 2.5 kHz halves; 15 kHz is wrong."],
          a: "$10$ kHz",
          v: "AM carries both an upper and lower sideband (mirror images), so it needs double the message bandwidth - SSB cuts that in half by sending only one."
        }), ref: "p.371" },
      { q: "SSB bandwidth for message with $f_m$ = 5 kHz:",
        choices: ["$5$ kHz", "$10$ kHz", "$2.5$ kHz", "$15$ kHz"], correct: 0,
        solution: S({
          c: "Single-sideband transmits only ONE sideband, so its bandwidth equals the message bandwidth: $BW = f_m$.",
          s: ["<b>Step 1 — Apply.</b> $5$ kHz.","<b>Step 2 — Distractor audit.</b> 10 kHz is AM (both sidebands); 2.5 and 15 kHz are wrong."],
          a: "$5$ kHz",
          v: "SSB is the most spectrum-efficient analog scheme - half the bandwidth of AM and no wasted carrier power, which is why ham radio and old telephony favored it."
        }), ref: "p.371" },
      { q: "Carrier-to-noise ratio (CNR) units:",
        choices: ["dB (logarithmic ratio)", "Watts", "Hz", "Volts"], correct: 0,
        solution: S({
          c: "CNR is a power RATIO, conventionally expressed in decibels (dB).",
          s: ["<b>Step 1 — Match.</b> dB (logarithmic ratio).","<b>Step 2 — Distractor audit.</b> Watts/Hz/Volts are absolute units, not a ratio."],
          a: "dB.",
          v: "Like SNR, CNR is dimensionless - dB compresses the huge dynamic range of power ratios into manageable numbers (10 dB = 10x, 20 dB = 100x)."
        }), ref: "p.371" },
      { q: "Spectral efficiency unit:",
        choices: ["bps/Hz", "bps", "Hz/bit", "W/Hz"], correct: 0,
        solution: S({
          c: "Spectral efficiency measures data rate per unit bandwidth: bits per second per hertz (bps/Hz).",
          s: ["<b>Step 1 — Match.</b> bps/Hz.","<b>Step 2 — Distractor audit.</b> bps is raw rate; Hz/bit inverts it; W/Hz is power spectral density."],
          a: "bps/Hz.",
          v: "It's how you compare modulation schemes fairly - QPSK ~2 bps/Hz, 64-QAM ~6 bps/Hz - and what Shannon's limit ultimately bounds for a given SNR."
        }), ref: "p.371" },
      { q: "Shannon limit for AWGN channel:",
        choices: ["$C = B\\log_2(1 + S/N)$ bps", "$C = BS/N$", "$C = SN/B$", "$C = SNR$"], correct: 0,
        solution: S({
          c: "The Shannon-Hartley theorem gives channel capacity: $C = B\\log_2(1+S/N)$ bits/second.",
          s: ["<b>Step 1 — Match.</b> $C = B\\log_2(1+S/N)$.","<b>Step 2 — Distractor audit.</b> The other forms drop the logarithm or misplace S, N, B."],
          a: "$C = B\\log_2(1+S/N)$ bps.",
          v: "This is the absolute upper bound on error-free data rate - bandwidth helps linearly, SNR only logarithmically. No code can beat it."
        }), ref: "p.371" },
      { q: "Carrier frequency 100 MHz, FM deviation 50 kHz, audio 10 kHz. Carson BW:",
        choices: ["$120$ kHz", "$50$ kHz", "$200$ kHz", "$100$ MHz"], correct: 0,
        solution: S({
          c: "Carson's rule for FM bandwidth: $BW = 2(\\Delta f + f_m)$, where $\\Delta f$ is peak deviation and $f_m$ the modulating frequency.",
          s: ["<b>Step 1 — Apply.</b> $2(50 + 10) = 120$ kHz.","<b>Step 2 — Distractor audit.</b> 50 kHz is just the deviation; 200 kHz over-counts; 100 MHz is the carrier (irrelevant to BW)."],
          a: "$120$ kHz",
          v: "Note the carrier frequency doesn't enter the bandwidth - only deviation and message do. Wider deviation buys noise immunity at the cost of more spectrum."
        }), ref: "p.371" },
      { q: "Source coding (compression):",
        choices: ["Removes redundancy in data", "Adds error correction", "Modulates", "Encrypts"], correct: 0,
        solution: S({
          c: "Source coding REMOVES redundancy to represent information with fewer bits (e.g. Huffman, Lempel-Ziv). It's the opposite job from channel coding.",
          s: ["<b>Step 1 — Match.</b> Removes redundancy in data.","<b>Step 2 — Distractor audit.</b> Adding error correction is CHANNEL coding; modulation and encryption are separate."],
          a: "Compression (redundancy removal).",
          v: "Source vs channel coding are complementary: source coding SHRINKS data (efficiency), channel coding ADDS controlled redundancy back (reliability over noisy channels)."
        }), ref: "p.371" },
      { q: "Channel coding rate $R_c = k/n$ means:",
        choices: ["k info bits per n coded bits", "k errors per n bits", "Speed", "Frequency"], correct: 0,
        solution: S({
          c: "Code rate $R_c = k/n$: $k$ information bits are carried in $n$ transmitted (coded) bits. Lower rate = more redundancy = stronger protection.",
          s: ["<b>Step 1 — Match.</b> k info bits per n coded bits.","<b>Step 2 — Distractor audit.</b> It's not errors-per-bit, a speed, or a frequency."],
          a: "k info bits per n coded bits.",
          v: "Example: Hamming(7,4) has rate 4/7 - 3 parity bits protect 4 data bits. The trade is reliability (more correction) vs efficiency (lower rate)."
        }), ref: "p.371" },
      { q: "Differential encoding (e.g., DPSK):",
        choices: ["Encodes by phase changes (not absolute phase)", "Differential equation", "Subtracts", "Linear"], correct: 0,
        solution: S({
          c: "Differential encoding (DPSK) carries information in phase CHANGES between successive symbols, not the absolute phase - so the receiver needs no phase reference.",
          s: ["<b>Step 1 — Match.</b> Encodes by phase changes (not absolute phase).","<b>Step 2 — Distractor audit.</b> Not a differential equation, subtraction, or 'linear'."],
          a: "Encoded in phase changes.",
          v: "DPSK trades ~3 dB worse BER for a much simpler receiver (no carrier phase recovery) - valuable where establishing a phase reference is hard or costly."
        }), ref: "p.371" },
    ],

    // Networks — +10
    14: [
      { q: "MAC address bytes:",
        choices: ["$6$ (48 bits)", "$4$", "$8$", "$32$"], correct: 0,
        solution: S({
          c: "A standard IEEE MAC address is 48 bits = 6 bytes (written as 6 hex pairs, e.g. XX:XX:XX:XX:XX:XX).",
          s: ["<b>Step 1 — Apply.</b> 48 bits / 8 = 6 bytes.","<b>Step 2 — Distractor audit.</b> 4 bytes is an IPv4 address; 8 and 32 are wrong."],
          a: "6 bytes (48 bits).",
          v: "First 3 bytes = manufacturer OUI, last 3 = device serial - a Layer-2 hardware address, distinct from the Layer-3 IP address."
        }), ref: "p.399" },
      { q: "IPv4 multicast address range:",
        choices: ["$224.0.0.0 - 239.255.255.255$ (Class D)", "$10.0.0.0/8$", "$127.0.0.0/8$", "$192.168.0.0/16$"], correct: 0,
        solution: S({
          c: "Class D (multicast) spans 224.0.0.0 to 239.255.255.255 - addresses for one-to-many group delivery.",
          s: ["<b>Step 1 — Match.</b> 224-239 first octet.","<b>Step 2 — Distractor audit.</b> 10/8 and 192.168/16 are private unicast; 127/8 is loopback."],
          a: "224.0.0.0 - 239.255.255.255.",
          v: "Multicast efficiently serves streaming, IGMP, and routing protocols (OSPF) - one packet reaches all subscribers instead of a separate copy per receiver."
        }), ref: "p.394" },
      { q: "Hub vs switch differences:",
        choices: ["Hub broadcasts to all ports; switch forwards selectively by MAC", "Same", "Hub is newer", "Switch slower"], correct: 0,
        solution: S({
          c: "A HUB (Layer 1) repeats every incoming bit to ALL ports; a SWITCH (Layer 2) learns MAC addresses and forwards frames only to the destination port.",
          s: ["<b>Step 1 — Match.</b> Hub broadcasts to all; switch forwards selectively by MAC.","<b>Step 2 — Distractor audit.</b> Not 'same'; hubs are OLDER; switches are faster."],
          a: "Hub broadcasts; switch forwards by MAC.",
          v: "A switch gives each port its own collision-free, full-duplex segment - far better than a hub's shared, collision-prone medium. Hubs are essentially obsolete."
        }), ref: "p.399" },
      { q: "OSPF uses what algorithm to find shortest path?",
        choices: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Heap sort"], correct: 0,
        solution: S({
          c: "OSPF is a link-state protocol that runs Dijkstra's shortest-path algorithm on the learned topology.",
          s: ["<b>Step 1 — Match.</b> Dijkstra's.","<b>Step 2 — Distractor audit.</b> Bellman-Ford is RIP (distance-vector); Floyd-Warshall is all-pairs; heap sort isn't a routing algorithm."],
          a: "Dijkstra's algorithm.",
          v: "Each OSPF router builds the full map then computes shortest paths itself - faster convergence and no routing loops vs distance-vector's neighbor-rumor approach."
        }), ref: "p.400" },
      { q: "Default gateway:",
        choices: ["Router for traffic outside local subnet", "DNS server", "Switch", "DHCP server"], correct: 0,
        solution: S({
          c: "The default gateway is the router a host sends packets to when the destination is OUTSIDE its local subnet.",
          s: ["<b>Step 1 — Match.</b> Router for traffic outside the local subnet.","<b>Step 2 — Distractor audit.</b> Not a DNS server, switch, or DHCP server (though DHCP often assigns the gateway)."],
          a: "The outbound router.",
          v: "When a host's routing table has no specific route, it sends to the default gateway - the 'door' to everything beyond the local network."
        }), ref: "p.400" },
      { q: "Latency in ms = round-trip time. For 10 ms RTT, propagation delay (assuming negligible queuing):",
        choices: ["$\\approx 5$ ms one-way", "$10$ ms one-way", "$0$", "$100$ ms"], correct: 0,
        solution: S({
          c: "Round-trip time = 2x the one-way delay (there and back), so one-way ~ RTT/2.",
          s: ["<b>Step 1 — Apply.</b> $10/2 = 5$ ms one-way.","<b>Step 2 — Distractor audit.</b> 10 ms one-way ignores the round trip; 0 and 100 ms are wrong."],
          a: "$\\approx 5$ ms one-way.",
          v: "Ping reports RTT; halve it for one-way latency (assuming a symmetric path) - useful for estimating distance, since propagation is bounded by light speed."
        }), ref: "p.399" },
      { q: "VLAN purpose:",
        choices: ["Logical segmentation on physical switch", "Encryption", "Speed boost", "Routing"], correct: 0,
        solution: S({
          c: "A VLAN (Virtual LAN) logically segments one physical switch into separate broadcast domains - isolating traffic without separate hardware.",
          s: ["<b>Step 1 — Match.</b> Logical segmentation on a physical switch.","<b>Step 2 — Distractor audit.</b> VLANs don't encrypt, speed up, or route (routing between VLANs needs a Layer-3 device)."],
          a: "Logical network segmentation.",
          v: "VLANs separate departments, security zones, or voice/data on shared infrastructure - confining broadcasts and improving security/manageability."
        }), ref: "p.399" },
      { q: "Reliable delivery in TCP enforced by:",
        choices: ["Sequence numbers + ACKs + retransmission", "Just sequence numbers", "Just ACK", "UDP fallback"], correct: 0,
        solution: S({
          c: "TCP guarantees reliable, ordered delivery using sequence numbers, acknowledgments (ACKs), and retransmission of unacknowledged data.",
          s: ["<b>Step 1 — Match.</b> Sequence numbers + ACKs + retransmission.","<b>Step 2 — Distractor audit.</b> Sequence numbers or ACKs ALONE aren't sufficient; UDP has no such mechanism."],
          a: "Sequence numbers, ACKs, and retransmission.",
          v: "The sender numbers bytes and resends anything not ACKed in time; the receiver reorders by sequence number - this trio is what makes TCP reliable (vs UDP's fire-and-forget)."
        }), ref: "p.400" },
      { q: "UDP characteristics:",
        choices: ["Connectionless, no reliability, low overhead", "Connection-oriented", "Reliable", "Heavy header"], correct: 0,
        solution: S({
          c: "UDP is connectionless, unreliable (no ACKs/retransmission), and low-overhead (8-byte header) - fast but best-effort.",
          s: ["<b>Step 1 — Match.</b> Connectionless, no reliability, low overhead.","<b>Step 2 — Distractor audit.</b> Connection-oriented and reliable describe TCP; UDP's header is small, not heavy."],
          a: "Connectionless and fast.",
          v: "UDP suits real-time/latency-sensitive traffic (DNS, VoIP, gaming, streaming) where a late retransmission is useless - speed and low overhead beat guaranteed delivery."
        }), ref: "p.400" },
      { q: "ARP request is sent to:",
        choices: ["Broadcast MAC FF:FF:FF:FF:FF:FF", "Specific MAC", "Multicast", "Source"], correct: 0,
        solution: S({
          c: "An ARP request ('who has this IP?') is BROADCAST to all hosts on the local network using the destination MAC FF:FF:FF:FF:FF:FF.",
          s: ["<b>Step 1 — Match.</b> Broadcast MAC FF:FF:FF:FF:FF:FF.","<b>Step 2 — Distractor audit.</b> The REPLY is unicast back to the requester; it's not multicast or sent to source."],
          a: "Broadcast (FF:FF:FF:FF:FF:FF).",
          v: "ARP bridges Layer 3 (IP) to Layer 2 (MAC): broadcast the question, the owner replies with its MAC, and the result is cached - so each address resolves only occasionally."
        }), ref: "p.399" },
    ],

    // Digital — +20
    15: [
      { q: "Binary 10101010 in decimal:",
        choices: ["$170$", "$85$", "$255$", "$160$"], correct: 0,
        solution: S({
          c: "Sum the place values ($2^n$) of the 1-bits.",
          s: ["<b>Step 1 — Add.</b> $128+32+8+2 = 170$.","<b>Step 2 — Distractor audit.</b> 85 is 01010101 (the complement); 255 is all ones; 160 drops bits."],
          a: "$170$",
          v: "10101010 alternates bits - its complement 01010101 = 85, and together they sum to 255 (all ones). A quick consistency check."
        }), ref: "p.388" },
      { q: "Hex 0xFF in decimal:",
        choices: ["$255$", "$256$", "$15$", "$170$"], correct: 0,
        solution: S({
          c: "Hex to decimal: each digit times its $16^n$ place. $FF = 15\\times16 + 15$.",
          s: ["<b>Step 1 — Apply.</b> $240 + 15 = 255$.","<b>Step 2 — Distractor audit.</b> 256 is $2^8$ (one more); 15 is single F; 170 is 0xAA."],
          a: "$255$",
          v: "0xFF = 255 = the largest 8-bit value (one full byte of ones) - worth memorizing as a landmark."
        }), ref: "p.388" },
      { q: "Largest 16-bit unsigned integer:",
        choices: ["$65{,}535$", "$32{,}767$", "$255$", "$65{,}536$"], correct: 0,
        solution: S({
          c: "An n-bit unsigned integer ranges 0 to $2^n - 1$.",
          s: ["<b>Step 1 — Apply.</b> $2^{16} - 1 = 65{,}535$.","<b>Step 2 — Distractor audit.</b> 32,767 is the signed max ($2^{15}-1$); 255 is 8-bit; 65,536 forgets the $-1$."],
          a: "$65{,}535$",
          v: "The $-1$ matters: $2^{16}=65{,}536$ is the COUNT of values (0 to 65,535), and the largest VALUE is one less."
        }), ref: "p.389" },
      { q: "Two's complement 8-bit range:",
        choices: ["$-128$ to $+127$", "$-127$ to $+128$", "$0$ to $255$", "$-255$ to $+255$"], correct: 0,
        solution: S({
          c: "Signed n-bit two's complement spans $-2^{n-1}$ to $+2^{n-1}-1$ (one extra negative value).",
          s: ["<b>Step 1 — Apply.</b> $-2^7$ to $2^7-1$ = $-128$ to $+127$.","<b>Step 2 — Distractor audit.</b> '-127 to +128' is backwards; '0 to 255' is unsigned; '-255 to 255' is wrong."],
          a: "$-128$ to $+127$.",
          v: "There's one more negative than positive because 0 takes a 'positive' slot - the asymmetry is two's complement's signature (and why $-128$ has no positive twin)."
        }), ref: "p.389" },
      { q: "Boolean: $A + AB$ simplifies to:",
        choices: ["$A$ (absorption)", "$AB$", "$B$", "$0$"], correct: 0,
        solution: S({
          c: "Absorption law: $A + AB = A(1+B) = A$ (since $1+B=1$).",
          s: ["<b>Step 1 — Factor.</b> $A(1+B) = A\\cdot1 = A$.","<b>Step 2 — Distractor audit.</b> $AB$, $B$, $0$ all ignore the absorption identity."],
          a: "$A$",
          v: "If A is true the expression is true regardless of B, so B is redundant - absorption is one of the most useful simplification laws in logic minimization."
        }), ref: "p.389" },
      { q: "Boolean: $AB + A\\bar{B}$:",
        choices: ["$A$", "$B$", "$AB$", "$\\bar{B}$"], correct: 0,
        solution: S({
          c: "Factor out A: $A(B+\\bar B) = A\\cdot1 = A$ (a variable OR its complement = 1).",
          s: ["<b>Step 1 — Factor.</b> $A(B+\\bar B)$.","<b>Step 2 — Simplify.</b> $B+\\bar B=1$, so $=A$.","<b>Step 3 — Distractor audit.</b> $B$, $AB$, $\\bar B$ ignore the complement identity."],
          a: "$A$",
          v: "$B+\\bar B=1$ (the complement law) is the key - B drops out entirely. This is the algebraic version of combining two adjacent K-map cells."
        }), ref: "p.389" },
      { q: "NOR truth: 1 iff:",
        choices: ["Both inputs are 0", "Both 1", "Differ", "Same"], correct: 0,
        solution: S({
          c: "NOR = NOT(OR). Its output is 1 ONLY when all inputs are 0 (the one case where OR is 0).",
          s: ["<b>Step 1 — Match.</b> Both inputs 0.","<b>Step 2 — Distractor audit.</b> 'Both 1'/'differ'/'same' don't match the NOR table."],
          a: "Both inputs 0.",
          v: "NOR is functionally COMPLETE - any logic function can be built from NOR gates alone (as can NAND), which is why they're fundamental in IC design."
        }), ref: "p.389" },
      { q: "NAND truth: 0 iff:",
        choices: ["Both 1", "Both 0", "Differ", "Same"], correct: 0,
        solution: S({
          c: "NAND = NOT(AND). Its output is 0 ONLY when all inputs are 1 (the one case where AND is 1).",
          s: ["<b>Step 1 — Match.</b> Both inputs 1.","<b>Step 2 — Distractor audit.</b> 'Both 0'/'differ'/'same' don't match the NAND table."],
          a: "Both inputs 1.",
          v: "Like NOR, NAND is functionally complete - entire CPUs can be (and are) built from NAND gates. CMOS makes NAND/NOR cheaper than AND/OR (fewer transistors)."
        }), ref: "p.389" },
      { q: "Half adder Sum (XOR) and Carry (AND): inputs $A=B=1$:",
        choices: ["Sum=0, Carry=1", "S=1, C=1", "S=1, C=0", "S=0, C=0"], correct: 0,
        solution: S({
          c: "Half adder: Sum $= A\\oplus B$, Carry $= A\\cdot B$. For $A=B=1$: Sum $=1\\oplus1=0$, Carry $=1\\cdot1=1$.",
          s: ["<b>Step 1 — Sum.</b> $1\\oplus1=0$.","<b>Step 2 — Carry.</b> $1\\cdot1=1$.","<b>Step 3 — Distractor audit.</b> The others mismatch XOR/AND."],
          a: "Sum=0, Carry=1.",
          v: "1+1 = binary 10: sum bit 0, carry bit 1 - exactly what the half adder computes. Chaining full adders (with carry-in) builds multi-bit addition."
        }), ref: "p.390" },
      { q: "Mod-10 counter (decade): how many flip-flops minimum?",
        choices: ["$4$ (need 10 states ≤ $2^4$)", "$10$", "$3$", "$5$"], correct: 0,
        solution: S({
          c: "Need enough flip-flops so $2^n \\ge$ number of states: $\\lceil\\log_2 10\\rceil = 4$.",
          s: ["<b>Step 1 — Apply.</b> $2^3=8 < 10 \\le 16=2^4$ -> 4 FFs.","<b>Step 2 — Distractor audit.</b> 3 only reaches 8 states; 10 and 5 over-count."],
          a: "4 flip-flops.",
          v: "4 FFs give 16 states; logic detects 10 and resets to 0, skipping 10-15 - the standard BCD decade counter. You always round the log UP."
        }), ref: "p.391" },
      { q: "Mealy machine outputs change when:",
        choices: ["State or input changes", "Clock edge only", "Power-on", "Reset"], correct: 0,
        solution: S({
          c: "A Mealy machine's output is a combinational function of state AND input, so it can change whenever EITHER changes.",
          s: ["<b>Step 1 — Match.</b> State or input changes.","<b>Step 2 — Distractor audit.</b> 'Clock edge only' is MOORE; power-on/reset are special events, not the general rule."],
          a: "State or input changes.",
          v: "This makes Mealy outputs faster (react to input immediately) but possibly glitchy - Moore outputs (state-only) change only at clock edges, cleaner but a cycle slower."
        }), ref: "p.391" },
      { q: "D-FF setup violation cause:",
        choices: ["Metastability — output may be neither 0 nor 1 temporarily", "Faster operation", "Damage", "Reset"], correct: 0,
        solution: S({
          c: "If data changes too close to the clock edge (violating setup time), the flip-flop can enter METASTABILITY - output hovers between 0 and 1 before settling unpredictably.",
          s: ["<b>Step 1 — Match.</b> Metastability.","<b>Step 2 — Distractor audit.</b> It's not faster operation, physical damage, or a reset."],
          a: "Metastability.",
          v: "Crossing clock domains is the classic cause - mitigated with a two-FF synchronizer chain that gives metastability time to resolve before the signal is used."
        }), ref: "p.391" },
      { q: "BCD: 7 in 4 bits:",
        choices: ["$0111$", "$111$", "$1000$", "$0110$"], correct: 0,
        solution: S({
          c: "BCD encodes each decimal digit in 4 bits: 7 = 4+2+1 = 0111.",
          s: ["<b>Step 1 — Apply.</b> 0111.","<b>Step 2 — Distractor audit.</b> 111 is only 3 bits; 1000 is 8; 0110 is 6."],
          a: "$0111$",
          v: "BCD always uses 4 bits per digit (0-9), wasting codes 1010-1111 - the trade for easy decimal display/conversion."
        }), ref: "p.388" },
      { q: "Bitwise XOR of $1100$ and $1010$:",
        choices: ["$0110$", "$1000$", "$1110$", "$0000$"], correct: 0,
        solution: S({
          c: "XOR outputs 1 where the bits DIFFER, 0 where they match.",
          s: ["<b>Step 1 — Compare.</b> 1100 vs 1010: bit3 same(0), bit2 differ(1), bit1 differ(1), bit0 same(0) -> 0110.","<b>Step 2 — Distractor audit.</b> 1000 is AND-ish; 1110 is OR; 0000 would be identical inputs."],
          a: "$0110$",
          v: "XOR is the 'difference detector' - used for parity, toggling bits, and (XOR with itself = 0) the basis of simple swaps and checksums."
        }), ref: "p.388" },
      { q: "PLA (Programmable Logic Array) vs PAL:",
        choices: ["PLA: programmable AND + OR; PAL: prog AND + fixed OR", "Same", "PAL is older only", "PLA has fewer outputs"], correct: 0,
        solution: S({
          c: "A PLA has BOTH a programmable AND-plane and a programmable OR-plane (most flexible). A PAL has a programmable AND-plane but a FIXED OR-plane (simpler, cheaper).",
          s: ["<b>Step 1 — Match.</b> PLA: programmable AND + OR; PAL: programmable AND + fixed OR.","<b>Step 2 — Distractor audit.</b> Not 'same'; the difference is the OR-plane flexibility, not age or output count."],
          a: "PLA both programmable; PAL fixed OR.",
          v: "PLA's extra flexibility costs speed/area; PAL trades it for simplicity - both are ancestors of today's CPLDs and FPGAs."
        }), ref: "p.390" },
      { q: "Tristate buffer outputs when enable is low (active-high enable):",
        choices: ["High impedance (Hi-Z)", "$0$", "$1$", "Floating undefined"], correct: 0,
        solution: S({
          c: "With an active-high enable held LOW, the tristate buffer is DISABLED -> output goes high-impedance (Hi-Z), electrically disconnected.",
          s: ["<b>Step 1 — Match.</b> High impedance (Hi-Z).","<b>Step 2 — Distractor audit.</b> 0 and 1 are driven states (enabled); 'floating undefined' mischaracterizes the controlled Hi-Z."],
          a: "High impedance (Hi-Z).",
          v: "Hi-Z lets many devices share one bus wire - only the enabled driver controls it, the rest 'let go.' Without it, simultaneous drivers would short."
        }), ref: "p.391" },
      { q: "Don't care in K-map represented by:",
        choices: ["$X$ or $d$", "$0$", "$1$", "Empty"], correct: 0,
        solution: S({
          c: "A 'don't care' (output value irrelevant for that input combo) is marked X (or d) on a Karnaugh map.",
          s: ["<b>Step 1 — Match.</b> X or d.","<b>Step 2 — Distractor audit.</b> 0 and 1 are fixed outputs; 'empty' isn't standard notation."],
          a: "$X$ (or $d$).",
          v: "Don't cares are GOLD for minimization - you may treat each as 0 OR 1, whichever makes bigger groupings and a simpler expression. They arise from impossible/unused input combos."
        }), ref: "p.390" },
      { q: "Convert decimal 25 to binary:",
        choices: ["$11001$", "$10101$", "$01001$", "$10011$"], correct: 0,
        solution: S({
          c: "Decompose into powers of 2 (or repeatedly divide by 2).",
          s: ["<b>Step 1 — Decompose.</b> $25 = 16+8+1 = 2^4+2^3+2^0$.","<b>Step 2 — Bits.</b> 11001.","<b>Step 3 — Distractor audit.</b> 10101=21; 01001=9; 10011=19."],
          a: "$11001$",
          v: "Check: $16+8+1=25$ ✓. Odd numbers always end in 1 (bit 0 set), which 11001 does - a quick sanity test."
        }), ref: "p.388" },
      { q: "Hex 0x1A + 0x06 = ?",
        choices: ["$0x20$", "$0x1F$", "$0x26$", "$0x16$"], correct: 0,
        solution: S({
          c: "Convert to decimal, add, convert back (or add hex columns with carry).",
          s: ["<b>Step 1 — Decimal.</b> 0x1A = 26; 0x06 = 6.","<b>Step 2 — Add.</b> $26+6 = 32 = 0x20$.","<b>Step 3 — Distractor audit.</b> 0x1F=31; 0x26 adds wrong; 0x16=22."],
          a: "$0x20$",
          v: "Column check: A(10)+6 = 16 = 0x10, write 0 carry 1; 1+0+1 = 2 -> 0x20 ✓. Hex rolls over at 16, not 10."
        }), ref: "p.388" },
      { q: "How many bits to address 1 MB byte-addressable memory:",
        choices: ["$20$", "$10$", "$30$", "$24$"], correct: 0,
        solution: S({
          c: "Bits needed = $\\log_2(\\text{locations})$. 1 MB = $2^{20}$ bytes.",
          s: ["<b>Step 1 — Apply.</b> $\\log_2(2^{20}) = 20$ bits.","<b>Step 2 — Distractor audit.</b> 10 bits = 1 KB; 30 bits = 1 GB; 24 bits = 16 MB."],
          a: "$20$ bits.",
          v: "Memory landmarks: 10 bits -> 1 KB, 20 -> 1 MB, 30 -> 1 GB, 32 -> 4 GB ✓ - each 10 address bits multiplies capacity by 1024."
        }), ref: "p.407" },
    ],

    // CompSys — +10
    16: [
      { q: "Pipeline IF, ID, EX, MEM, WB stages: standard for:",
        choices: ["Classic RISC 5-stage", "x86", "ARM7", "GPU"], correct: 0,
        solution: S({
          c: "IF/ID/EX/MEM/WB is the classic 5-stage RISC (MIPS) pipeline: Instruction Fetch, Decode, Execute, Memory, Write-Back.",
          s: ["<b>Step 1 — Match.</b> Classic RISC 5-stage.","<b>Step 2 — Distractor audit.</b> x86 (CISC) has far deeper, more complex pipelines; ARM7 and GPUs differ."],
          a: "Classic RISC 5-stage.",
          v: "It's the textbook teaching model - each stage handles a different instruction simultaneously, raising THROUGHPUT (not single-instruction latency)."
        }), ref: "p.408" },
      { q: "Cache locality types:",
        choices: ["Temporal + Spatial", "Time + Space + Code", "Just spatial", "Memory + I/O"], correct: 0,
        solution: S({
          c: "Two forms of locality: TEMPORAL (recently used data likely reused soon) and SPATIAL (data near a recent access likely used soon).",
          s: ["<b>Step 1 — Match.</b> Temporal + Spatial.","<b>Step 2 — Distractor audit.</b> The other lists invent categories."],
          a: "Temporal and spatial.",
          v: "Caches exploit both: temporal by keeping recent items, spatial by fetching whole cache LINES (neighbors) - which is why sequential array access is so much faster than random."
        }), ref: "p.407" },
      { q: "Direct-mapped cache: address with 4-bit offset, 6-bit index, 22-bit tag. Cache size:",
        choices: ["$2^{6} \\cdot 2^4 = 1024$ bytes = 1 KB", "$2^{22}$", "$64$ bytes", "$10$ KB"], correct: 0,
        solution: S({
          c: "Cache size = (number of lines) x (bytes per line) = $2^{index} \\times 2^{offset}$.",
          s: ["<b>Step 1 — Lines.</b> $2^6 = 64$.","<b>Step 2 — Line size.</b> $2^4 = 16$ bytes.","<b>Step 3 — Total.</b> $64\\times16 = 1024$ bytes = 1 KB.","<b>Step 4 — Distractor audit.</b> $2^{22}$ is the tag space; 64 bytes is one set of lines; 10 KB is wrong."],
          a: "$1$ KB.",
          v: "The TAG (22 bits) is stored per line but doesn't count toward DATA size - only index (which line) x offset (byte within line) gives the data capacity."
        }), ref: "p.407" },
      { q: "Volatility: which RAM is volatile?",
        choices: ["DRAM and SRAM (both)", "Only DRAM", "Only SRAM", "Neither"], correct: 0,
        solution: S({
          c: "Both DRAM and SRAM are VOLATILE - they lose their contents when power is removed.",
          s: ["<b>Step 1 — Match.</b> DRAM and SRAM (both).","<b>Step 2 — Distractor audit.</b> 'Only DRAM'/'only SRAM' are wrong; 'neither' is false."],
          a: "Both volatile.",
          v: "Flash and ROM are NON-volatile (retain data without power). DRAM additionally needs periodic REFRESH even while powered; SRAM holds its bit as long as power is on."
        }), ref: "p.407" },
      { q: "Word-aligned data for 32-bit machine:",
        choices: ["Address divisible by 4", "By 8", "By 1", "Random"], correct: 0,
        solution: S({
          c: "A 32-bit (4-byte) word is aligned when its address is divisible by 4.",
          s: ["<b>Step 1 — Match.</b> Address divisible by 4.","<b>Step 2 — Distractor audit.</b> Divisible by 8 is 64-bit alignment; by 1 means no alignment; 'random' is wrong."],
          a: "Address divisible by 4.",
          v: "Aligned access completes in one bus cycle; an unaligned word may straddle two and take two cycles (or fault) - compilers pad structs to keep fields aligned."
        }), ref: "p.407" },
      { q: "Floating-point IEEE 754 single-precision:",
        choices: ["1 sign + 8 exponent + 23 mantissa = 32 bits", "16 bits", "64 bits", "Variable"], correct: 0,
        solution: S({
          c: "IEEE 754 single-precision (32 bits) = 1 sign bit + 8 exponent bits + 23 mantissa (fraction) bits.",
          s: ["<b>Step 1 — Match.</b> 1 + 8 + 23 = 32 bits.","<b>Step 2 — Distractor audit.</b> 16 bits is half-precision; 64 is double (1+11+52); not variable."],
          a: "1 sign + 8 exp + 23 mantissa = 32 bits.",
          v: "The 8-bit exponent gives the huge dynamic range (~10^38); the 23-bit mantissa gives ~7 decimal digits of precision. Double (64-bit) extends both: 1+11+52."
        }), ref: "p.388" },
      { q: "Cache coherence protocols (multicore): MESI states:",
        choices: ["Modified, Exclusive, Shared, Invalid", "Memory ECC", "Sync, write", "Stack"], correct: 0,
        solution: S({
          c: "MESI tracks each cache line's state across cores: Modified, Exclusive, Shared, Invalid - keeping multiple caches consistent.",
          s: ["<b>Step 1 — Match.</b> Modified, Exclusive, Shared, Invalid.","<b>Step 2 — Distractor audit.</b> ECC is error correction; the others aren't coherence states."],
          a: "Modified, Exclusive, Shared, Invalid.",
          v: "MESI lets one core write (Modified) while invalidating others' copies, avoiding stale reads without flushing to memory each time - the backbone of multicore consistency (variants MOESI/MESIF refine sharing)."
        }), ref: "p.408" },
      { q: "Process address space components:",
        choices: ["Text, data, heap, stack", "Just code", "Just data", "Memory"], correct: 0,
        solution: S({
          c: "A process's virtual address space typically has four regions: TEXT (code), DATA (globals), HEAP (dynamic, grows up), and STACK (locals/calls, grows down).",
          s: ["<b>Step 1 — Match.</b> Text, data, heap, stack.","<b>Step 2 — Distractor audit.</b> 'Just code'/'just data' are incomplete."],
          a: "Text, data, heap, stack.",
          v: "Heap and stack grow toward each other from opposite ends - a collision is 'out of memory.' This layout is why stack overflow (deep recursion) and heap leaks are distinct failure modes."
        }), ref: "p.408" },
      { q: "Interrupt vs trap:",
        choices: ["Interrupt: external; trap: software-triggered", "Same", "Trap is faster", "Interrupt is for OS only"], correct: 0,
        solution: S({
          c: "An INTERRUPT is an asynchronous EXTERNAL hardware event (a device signaling); a TRAP is a synchronous INTERNAL software event (syscall, divide-by-zero, page fault).",
          s: ["<b>Step 1 — Match.</b> Interrupt external; trap software-triggered.","<b>Step 2 — Distractor audit.</b> Not 'same'; speed isn't the distinction; interrupts aren't OS-only."],
          a: "Interrupt = external; trap = internal.",
          v: "Interrupts arrive unpredictably (between any instructions); traps occur deterministically AT a specific instruction - both transfer control to a handler, but for different reasons."
        }), ref: "p.408" },
      { q: "Hyperthreading:",
        choices: ["One physical core appears as 2 logical (better utilization)", "Two cores in one", "Faster clock", "Encryption"], correct: 0,
        solution: S({
          c: "Hyperthreading makes one PHYSICAL core appear as two LOGICAL cores, interleaving two threads to better utilize idle execution resources.",
          s: ["<b>Step 1 — Match.</b> One physical core appears as 2 logical.","<b>Step 2 — Distractor audit.</b> It's not two real cores, a faster clock, or encryption."],
          a: "One core -> two logical cores.",
          v: "When one thread stalls (cache miss), the other uses the idle execution units - typically ~15-30% throughput gain, not a doubling, since they SHARE the physical hardware."
        }), ref: "p.408" },
    ],

    // Software — +10
    17: [
      { q: "Algorithm complexity of Heapsort:",
        choices: ["$O(n\\log n)$ worst case", "$O(n^2)$", "$O(n)$", "$O(\\log n)$"], correct: 0,
        solution: S({
          c: "Heapsort builds a heap in O(n), then does n extract-max operations at O(log n) each: total $O(n\\log n)$ - guaranteed in the worst case.",
          s: ["<b>Step 1 — Apply.</b> $O(n) + n\\times O(\\log n) = O(n\\log n)$.","<b>Step 2 — Distractor audit.</b> $O(n^2)$ is the quicksort worst case; $O(n)$ and $O(\\log n)$ are too fast for comparison sorts."],
          a: "$O(n\\log n)$ worst case.",
          v: "Unlike quicksort (which can degrade to $O(n^2)$), heapsort GUARANTEES $O(n\\log n)$ and sorts in place - the trade is worse cache behavior, so quicksort is often faster in practice."
        }), ref: "p.415" },
      { q: "Hash collision resolution: chaining means:",
        choices: ["Linked list at each bucket", "Probe next bucket", "Discard", "Resize immediately"], correct: 0,
        solution: S({
          c: "CHAINING stores colliding entries in a linked list (or similar) AT each bucket.",
          s: ["<b>Step 1 — Match.</b> Linked list at each bucket.","<b>Step 2 — Distractor audit.</b> Probing the next bucket is OPEN ADDRESSING; discard/resize aren't collision resolution per se."],
          a: "Linked list per bucket.",
          v: "Chaining vs open addressing are the two main strategies - both keep average lookup O(1) at low load factor, but chaining degrades more gracefully when the table fills."
        }), ref: "p.415" },
      { q: "Tail recursion can be optimized to:",
        choices: ["Iteration (no stack growth)", "Faster recursion", "Same as regular", "Faster memory"], correct: 0,
        solution: S({
          c: "A TAIL call (recursion as the function's last action) can be optimized into ITERATION, reusing the current stack frame instead of growing the stack.",
          s: ["<b>Step 1 — Match.</b> Iteration (no stack growth).","<b>Step 2 — Distractor audit.</b> It's not 'faster recursion' or 'faster memory' - it's converting recursion to a loop."],
          a: "Iteration (TCO).",
          v: "Tail-call optimization avoids stack overflow on deep recursion - some languages (Scheme, Scala) guarantee it; others (Python, Java) don't, so deep recursion there must be rewritten as loops."
        }), ref: "p.415" },
      { q: "Compile-time vs run-time:",
        choices: ["Compile: before exec; run-time: during exec", "Same", "Compile is faster", "Random"], correct: 0,
        solution: S({
          c: "Compile-time happens BEFORE execution (code generation, static type checks); run-time happens DURING execution (actual computation, dynamic behavior).",
          s: ["<b>Step 1 — Match.</b> Compile: before exec; run-time: during exec.","<b>Step 2 — Distractor audit.</b> Not 'same'; neither is universally 'faster'; not random."],
          a: "Before vs during execution.",
          v: "Templates/macros and type checking are compile-time; reflection, dynamic dispatch, and exceptions are run-time - catching errors at compile time is cheaper than at run time."
        }), ref: "p.415" },
      { q: "Linked list vs array dynamic insertion:",
        choices: ["List: $O(1)$ with pointer; Array: $O(n)$ shift", "Both $O(1)$", "Both $O(n)$", "List slower"], correct: 0,
        solution: S({
          c: "Inserting into a linked list is O(1) once you hold the position (just relink pointers); into an array it's O(n) because elements must shift.",
          s: ["<b>Step 1 — Match.</b> List O(1) with pointer; array O(n) shift.","<b>Step 2 — Distractor audit.</b> Not 'both O(1)' or 'both O(n)'; the list is faster for insertion."],
          a: "List O(1) (with pointer); array O(n).",
          v: "The flip side: arrays give O(1) random ACCESS while lists need O(n) traversal - choose based on whether you do more inserts/deletes or more lookups."
        }), ref: "p.415" },
      { q: "Bubble sort best case:",
        choices: ["$O(n)$ if optimized with early exit on sorted input", "Always $O(n^2)$", "$O(\\log n)$", "$O(n!)$"], correct: 0,
        solution: S({
          c: "An optimized bubble sort exits early if a full pass makes no swaps (already sorted), giving O(n) best case.",
          s: ["<b>Step 1 — Match.</b> O(n) with early-exit on sorted input.","<b>Step 2 — Distractor audit.</b> Unoptimized is always $O(n^2)$; it's never $O(\\log n)$ or $O(n!)$."],
          a: "$O(n)$ best (already sorted).",
          v: "Best case O(n), average/worst O(n^2) - bubble sort is mainly pedagogical; for real work use $O(n\\log n)$ sorts (quicksort, mergesort, heapsort)."
        }), ref: "p.415" },
      { q: "Recursive vs iterative tree traversal:",
        choices: ["Recursive cleaner; iterative may need explicit stack", "Recursive slower", "Same code", "Iterative is impossible"], correct: 0,
        solution: S({
          c: "Tree traversal is naturally RECURSIVE (cleaner code); an iterative version must use an EXPLICIT stack to simulate the recursion's call frames.",
          s: ["<b>Step 1 — Match.</b> Recursive cleaner; iterative needs explicit stack.","<b>Step 2 — Distractor audit.</b> Recursion isn't necessarily slower; the code differs; iterative IS possible."],
          a: "Recursive cleaner; iterative uses a stack.",
          v: "Recursion uses the CALL stack implicitly; the iterative form makes that stack explicit - useful when recursion depth would overflow, or for fine control over traversal order."
        }), ref: "p.415" },
      { q: "Garbage collection (GC) in Java/C#/Python:",
        choices: ["Automatic memory management", "Manual free", "Stack only", "No effect"], correct: 0,
        solution: S({
          c: "Garbage collection is AUTOMATIC memory management: the runtime reclaims memory no longer referenced, freeing the programmer from manual free()/delete.",
          s: ["<b>Step 1 — Match.</b> Automatic memory management.","<b>Step 2 — Distractor audit.</b> Manual free is C/C++; GC isn't stack-only and definitely has effects (pauses)."],
          a: "Automatic memory management.",
          v: "GC eliminates leaks and dangling pointers but adds overhead and occasional PAUSES - generational GC optimizes by collecting short-lived objects most often (most objects die young)."
        }), ref: "p.415" },
      { q: "Trie data structure:",
        choices: ["Tree for storing strings with shared prefixes", "Hash variant", "Array", "Stack"], correct: 0,
        solution: S({
          c: "A trie (prefix tree) stores strings by character: each node is a character, and a root-to-node path spells a prefix. Strings sharing prefixes share nodes.",
          s: ["<b>Step 1 — Match.</b> Tree for strings with shared prefixes.","<b>Step 2 — Distractor audit.</b> It's not a hash variant, plain array, or stack."],
          a: "Prefix tree.",
          v: "Tries give fast prefix lookups - O(key length), independent of how many keys are stored - which is why they power autocomplete, spell-checkers, and IP routing tables (longest-prefix match)."
        }), ref: "p.415" },
      { q: "Big-O of finding all pairs that sum to target in array (naive):",
        choices: ["$O(n^2)$", "$O(n)$", "$O(n\\log n)$", "$O(1)$"], correct: 0,
        solution: S({
          c: "The naive approach checks every pair with nested loops: $O(n^2)$.",
          s: ["<b>Step 1 — Match.</b> $O(n^2)$ naive.","<b>Step 2 — Distractor audit.</b> $O(n)$ is the HASH-SET optimization; $O(n\\log n)$ would be sort-based two-pointer; $O(1)$ is impossible."],
          a: "$O(n^2)$ naive.",
          v: "A hash set cuts it to O(n): for each element, check if (target - element) was already seen - storing complements as you go. Classic time-vs-space trade."
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
  console.log(`Pack 7: +${added} → bank total ${total}`);
})();
