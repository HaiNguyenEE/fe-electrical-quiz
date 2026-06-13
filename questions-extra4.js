// FE Electrical Question Bank — Extension Pack 4 (~170 problems)
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") return;

  const P = {
    // ====================== Ch 1: Math — +18 ======================
    1: [
      { q: "$|3-j4|$ = ", choices: ["$5$", "$1$", "$25$", "$7$"], correct: 0,
        solution: S({
          c: "Magnitude of a complex number = its distance from the origin: $|a+jb| = \\sqrt{a^{2}+b^{2}}$ — the sign of $b$ vanishes under the square.",
          s: [
            "<b>Step 1 — Square and add.</b> $3^{2} + (-4)^{2} = 25$.",
            "<b>Step 2 — Root.</b> $|z| = 5$.",
            "<b>Step 3 — Distractor audit.</b> 1 subtracts inside the root; 25 forgets the root; 7 adds magnitudes."
          ],
          a: "$5$",
          v: "The 3-4-5 triangle yet again ✓ — and the conjugate $3+j4$ has the SAME magnitude, since reflection doesn't change distance."
        }), ref: "Handbook p.36" },
      { q: "Complex number in exponential form: $z = 5\\angle 60°$ as $re^{j\\theta}$ with $\\theta$ in radians:",
        choices: ["$5 e^{j\\pi/3}$", "$5 e^{j60}$", "$5 e^{j\\pi/6}$", "$60 e^{j5}$"], correct: 0,
        solution: S({
          c: "Polar and exponential forms are the same data in two costumes: $r\\angle\\theta = re^{j\\theta}$ — BUT the exponent demands RADIANS: multiply degrees by $\\pi/180$.",
          s: [
            "<b>Step 1 — Convert the angle.</b> $60° = 60\\times\\pi/180 = \\pi/3$ rad.",
            "<b>Step 2 — Assemble.</b> $5e^{j\\pi/3}$.",
            "<b>Step 3 — Distractor audit.</b> $5e^{j60}$ leaves degrees in the exponent — 60 RADIANS is ~9.5 full turns; $\\pi/6$ is 30°; $60e^{j5}$ swaps the roles."
          ],
          a: "$5e^{j\\pi/3}$",
          v: "Euler unpack: $5(\\cos60° + j\\sin60°) = 2.5 + j4.33$ ✓. Radians-in-exponentials is non-negotiable — calculus identities like $\\frac{d}{dt}e^{j\\omega t} = j\\omega e^{j\\omega t}$ only work in radians."
        }), ref: "Handbook p.36" },
      { q: "Solve $|2x-1| = 5$:",
        choices: ["$x=3$ or $x=-2$", "$x=3$ only", "$x=2$ only", "$x=-3$ or $x=2$"], correct: 0,
        solution: S({
          c: "An absolute-value equation splits in two: $|y| = k$ means $y = +k$ OR $y = -k$ — solve both branches, keep both answers.",
          s: [
            "<b>Step 1 — Positive branch.</b> $2x - 1 = 5 \\Rightarrow x = 3$.",
            "<b>Step 2 — Negative branch.</b> $2x - 1 = -5 \\Rightarrow x = -2$.",
            "<b>Step 3 — Distractor audit.</b> Single-answer choices drop a branch; '$-3$ or 2' solves the branches with sign slips."
          ],
          a: "$x = 3$ or $x = -2$",
          v: "Substitute both: $|6-1| = 5$ ✓, $|-4-1| = 5$ ✓. Geometric read: points where $2x-1$ sits 5 units from zero — symmetric about $x = 1/2$, and indeed $3$ and $-2$ straddle it equally ✓."
        }), ref: "Handbook p.35" },
      { q: "$\\tan^{-1}(1) + \\tan^{-1}(\\sqrt{3})$ = (in degrees)",
        choices: ["$105°$", "$120°$", "$90°$", "$135°$"], correct: 0,
        solution: S({
          c: "Reference angles to know cold: $\\tan45° = 1$ and $\\tan60° = \\sqrt3$ — so the inverse tangents are 45° and 60°.",
          s: [
            "<b>Step 1 — Evaluate each.</b> $\\tan^{-1}(1) = 45°$; $\\tan^{-1}(\\sqrt3) = 60°$.",
            "<b>Step 2 — Add.</b> $45 + 60 = 105°$.",
            "<b>Step 3 — Distractor audit.</b> 90° pairs 45+45; 120° pairs 60+60; 135° pairs 45+90."
          ],
          a: "$105°$",
          v: "The full mini-table worth caching: $\\tan30° = 1/\\sqrt3$, $\\tan45° = 1$, $\\tan60° = \\sqrt3$ — with sine/cosine versions, it answers a surprising fraction of trig questions ✓."
        }), ref: "Handbook p.37" },
      { q: "Find $y$ when $\\ln y = 2.5$:",
        choices: ["$y \\approx 12.18$", "$y=2.5$", "$y \\approx 0.082$", "$y=5$"], correct: 0,
        solution: S({
          c: "Natural log and $e^{x}$ undo each other: $\\ln y = 2.5 \\Rightarrow y = e^{2.5}$.",
          s: [
            "<b>Step 1 — Exponentiate.</b> $y = e^{2.5} \\approx 12.18$.",
            "<b>Step 2 — Distractor audit.</b> 2.5 forgets to invert; 0.082 is $e^{-2.5}$ (sign slip); 5 doubles."
          ],
          a: "$y \\approx 12.18$",
          v: "Bracket check: $e^{2} = 7.39 < 12.18 < e^{3} = 20.1$ ✓. Quick mental ladder: $e \\approx 2.72$, $e^{2} \\approx 7.4$, $e^{3} \\approx 20$ — enough to sanity-check any exponential answer."
        }), ref: "Handbook p.36" },
      { q: "Matrix $A = \\begin{pmatrix}1&2&3\\\\0&4&5\\\\0&0&6\\end{pmatrix}$. Determinant:",
        choices: ["$24$", "$30$", "$0$", "$1$"], correct: 0,
        solution: S({
          c: "A TRIANGULAR matrix (zeros below the diagonal here) gives up its determinant for free: the product of the diagonal entries.",
          s: [
            "<b>Step 1 — Multiply the diagonal.</b> $1\\times4\\times6 = 24$.",
            "<b>Step 2 — Distractor audit.</b> 30 adds strays; 0 would need a zero ON the diagonal; 1 takes only the first entry."
          ],
          a: "$24$",
          v: "Why it works: cofactor expansion down the first column hits only the diagonal path — every other product crosses a zero ✓. Bonus: the eigenvalues are 1, 4, 6 — diagonal again."
        }), ref: "Handbook p.57" },
      { q: "If $A = \\begin{pmatrix}1&0\\\\0&-2\\end{pmatrix}$, $A^3 = $",
        choices: ["$\\begin{pmatrix}1&0\\\\0&-8\\end{pmatrix}$", "$\\begin{pmatrix}3&0\\\\0&-6\\end{pmatrix}$", "$\\begin{pmatrix}1&0\\\\0&8\\end{pmatrix}$", "Cannot compute"], correct: 0,
        solution: S({
          c: "Powers of a DIAGONAL matrix act entry-by-entry: $D^{n}$ = each diagonal element raised to $n$ — no matrix multiplication needed.",
          s: [
            "<b>Step 1 — Cube each entry.</b> $1^{3} = 1$; $(-2)^{3} = -8$.",
            "<b>Step 2 — Assemble.</b> $\\text{diag}(1, -8)$.",
            "<b>Step 3 — Distractor audit.</b> 'diag(3,−6)' MULTIPLIES by 3 instead of cubing; '+8' loses the odd-power sign; 'cannot compute' — diagonal powers are the easiest case there is."
          ],
          a: "$\\begin{pmatrix}1&0\\\\0&-8\\end{pmatrix}$",
          v: "Odd power preserves sign: $(-2)^{3} = -8$ ✓ (an even power would give +). This entrywise rule is the payoff of diagonalization — hard matrix powers reduce to scalar powers."
        }), ref: "Handbook p.57" },
      { q: "Transpose of $A = \\begin{pmatrix}1&2\\\\3&4\\\\5&6\\end{pmatrix}$:",
        choices: ["$\\begin{pmatrix}1&3&5\\\\2&4&6\\end{pmatrix}$", "Same matrix", "$\\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}$", "Negative"], correct: 0,
        solution: S({
          c: "Transpose swaps rows and columns: entry $(i,j)$ moves to $(j,i)$, and a $3\\times2$ matrix becomes $2\\times3$.",
          s: [
            "<b>Step 1 — Columns become rows.</b> Column 1 of A = (1,3,5) → row 1 of $A^{T}$; column 2 = (2,4,6) → row 2.",
            "<b>Step 2 — Check the shape.</b> $3\\times2 \\to 2\\times3$ ✓.",
            "<b>Step 3 — Distractor audit.</b> 'Same matrix' needs symmetry (square + $a_{ij}=a_{ji}$); the row-reshuffle option just reflows numbers; 'negative' confuses transpose with negation."
          ],
          a: "$\\begin{pmatrix}1&3&5\\\\2&4&6\\end{pmatrix}$",
          v: "Self-inverse check: transposing again returns the original, $(A^{T})^{T} = A$ ✓. Companion rules: $(AB)^{T} = B^{T}A^{T}$ (order flips) — the detail product-transpose questions test."
        }), ref: "Handbook p.57" },
      { q: "$f(x) = x^3 - 3x$. Find local minimum value.",
        choices: ["$-2$ (at $x=1$)", "$0$", "$2$ (at $x=-1$)", "$-1$"], correct: 0,
        solution: S({
          c: "Local extrema live where $f' = 0$; the SECOND derivative sorts them: $f'' > 0$ → minimum (curve opens up), $f'' < 0$ → maximum.",
          s: [
            "<b>Step 1 — Critical points.</b> $f' = 3x^{2} - 3 = 0 \\Rightarrow x = \\pm1$.",
            "<b>Step 2 — Classify.</b> $f'' = 6x$: at $x = 1$, $f'' = 6 > 0$ → MIN; at $x = -1$, $f'' = -6 < 0$ → max.",
            "<b>Step 3 — Evaluate the minimum.</b> $f(1) = 1 - 3 = -2$.",
            "<b>Step 4 — Distractor audit.</b> '+2 at $x=-1$' is the local MAX; 0 and −1 are neither."
          ],
          a: "Local minimum value $= -2$ (at $x = 1$).",
          v: "Symmetry check: $x^{3}-3x$ is odd, so max and min values mirror: $f(-1) = +2$ ✓. The question asks for the VALUE, not the location — a classic careful-reading point."
        }), ref: "Handbook p.47-49" },
      { q: "$\\int e^{-2x} dx$:",
        choices: ["$-\\frac{1}{2}e^{-2x} + C$", "$e^{-2x} + C$", "$-2 e^{-2x} + C$", "$\\frac{1}{2}e^{-2x} + C$"], correct: 0,
        solution: S({
          c: "Exponential integration rule: $\\int e^{ax}dx = \\dfrac{e^{ax}}{a} + C$ — divide by the inner coefficient (the reverse of the chain rule).",
          s: [
            "<b>Step 1 — Apply with a = −2.</b> $\\int e^{-2x}dx = \\dfrac{e^{-2x}}{-2} + C = -\\tfrac12e^{-2x} + C$.",
            "<b>Step 2 — Distractor audit.</b> $e^{-2x}$ forgets the ÷a; $-2e^{-2x}$ MULTIPLIES by a (that's the derivative's factor); $+\\tfrac12$ drops the sign."
          ],
          a: "$-\\tfrac12e^{-2x} + C$",
          v: "Differentiate back — the universal check: $\\dfrac{d}{dx}\\left[-\\tfrac12e^{-2x}\\right] = -\\tfrac12(-2)e^{-2x} = e^{-2x}$ ✓."

        }), ref: "Handbook p.49" },
      { q: "Indefinite integral $\\int 1/(x^2+1) dx$:",
        choices: ["$\\tan^{-1}(x) + C$", "$\\ln(x^2+1) + C$", "$1/(x+1) + C$", "$x/(x+1) + C$"], correct: 0,
        solution: S({
          c: "A standard form worth instant recall: $\\int\\dfrac{dx}{x^{2}+1} = \\arctan x + C$ — the inverse-tangent's defining integral.",
          s: [
            "<b>Step 1 — Match the form.</b> Denominator $x^{2} + 1$, numerator $dx$ → arctangent.",
            "<b>Step 2 — Distractor audit.</b> $\\ln(x^{2}+1)$ would need an $x$ in the numerator (u-substitution case, off by the factor 2); $1/(x+1)$ confuses with a linear denominator; the last is noise."
          ],
          a: "$\\arctan x + C$",
          v: "The scaled sibling to carry: $\\int\\dfrac{dx}{x^{2}+a^{2}} = \\dfrac1a\\arctan\\dfrac{x}{a} + C$ ✓ — and definite check: $\\int_0^{1} = \\arctan1 = \\pi/4 \\approx 0.785$, plausible for area under a curve starting at height 1."

        }), ref: "Handbook p.49" },
      { q: "ODE $y'' + 9y = 0$ general solution:",
        choices: ["$C_1\\cos 3x + C_2\\sin 3x$", "$C_1 e^{3x} + C_2 e^{-3x}$", "$C_1 + C_2 x$", "$C e^{-9x}$"], correct: 0,
        solution: S({
          c: "Constant-coefficient ODEs crack via the characteristic equation: $y''+9y = 0 \\to r^{2}+9 = 0 \\to r = \\pm j3$. PURELY IMAGINARY roots = pure oscillation: $C_1\\cos3x + C_2\\sin3x$.",
          s: [
            "<b>Step 1 — Characteristic roots.</b> $r = \\pm3j$ — zero real part (no damping term $y'$ in the ODE).",
            "<b>Step 2 — Write the solution family.</b> $y = C_1\\cos3x + C_2\\sin3x$.",
            "<b>Step 3 — Distractor audit.</b> $C_1e^{3x}+C_2e^{-3x}$ belongs to $y''-9y = 0$ (real roots ±3); $C_1 + C_2x$ to $y''=0$ (double zero root); $Ce^{-9x}$ to first order."
          ],
          a: "$y = C_1\\cos3x + C_2\\sin3x$",
          v: "Physics name-check: this is the undamped oscillator (mass-spring, LC tank) at $\\omega = 3$ ✓. Sign map to memorize: $y''+\\omega^{2}y$ → sines/cosines; $y''-\\omega^{2}y$ → real exponentials/hyperbolics."

        }), ref: "Handbook p.55" },
      { q: "$\\nabla f$ for $f(x,y,z) = x^2 y + z^3$ at $(1,2,1)$:",
        choices: ["$(4, 1, 3)$", "$(2, 1, 3)$", "$(4, 1, 1)$", "$(2, 0, 1)$"], correct: 0,
        solution: S({
          c: "The gradient stacks the three partial derivatives — differentiate by each variable while freezing the others — then evaluate at the point.",
          s: [
            "<b>Step 1 — Partials.</b> $f_x = 2xy$; $f_y = x^{2}$; $f_z = 3z^{2}$.",
            "<b>Step 2 — Evaluate at (1,2,1).</b> $f_x = 4$; $f_y = 1$; $f_z = 3$.",
            "<b>Step 3 — Distractor audit.</b> $(2,1,3)$ forgets the $y$ in $f_x$; $(4,1,1)$ drops the 3 in $f_z$; $(2,0,1)$ garbles several."
          ],
          a: "$\\nabla f = (4, 1, 3)$",
          v: "Meaning check: $(4,1,3)$ points where $f$ climbs fastest from $(1,2,1)$, at rate $|\\nabla f| = \\sqrt{26}$ ✓ — and any directional derivative is just $\\nabla f\\cdot\\hat u$, the follow-up the FE likes."

        }), ref: "Handbook p.38" },
      { q: "$\\sum_{k=0}^{4} 2^k$ = ",
        choices: ["$31$", "$32$", "$15$", "$16$"], correct: 0,
        solution: S({
          c: "A finite geometric sum: $\\sum_{k=0}^{n}r^{k} = \\dfrac{r^{n+1}-1}{r-1}$ — or for small cases, just add.",
          s: [
            "<b>Step 1 — Direct add.</b> $1+2+4+8+16 = 31$.",
            "<b>Step 2 — Formula confirms.</b> $(2^{5}-1)/(2-1) = 31$.",
            "<b>Step 3 — Distractor audit.</b> 32 is $2^{5}$ (the NEXT power, off-by-one); 15 stops at $2^{3}$; 16 is just the last term."
          ],
          a: "$31$",
          v: "Binary reading that locks it in: $11111_2 = 31$ — the sum of the first five powers of 2 IS a 5-bit all-ones value, $2^{5}-1$ ✓ (same identity as 'max unsigned n-bit = $2^n - 1$')."

        }), ref: "Handbook p.50" },
      { q: "Average rate of change of $f(x) = x^2$ on $[1, 4]$:",
        choices: ["$5$", "$15$", "$3$", "$9$"], correct: 0,
        solution: S({
          c: "Average rate of change = the SECANT slope: $\\dfrac{f(b)-f(a)}{b-a}$ — no calculus needed, just two endpoint values.",
          s: [
            "<b>Step 1 — Endpoints.</b> $f(4) = 16$, $f(1) = 1$.",
            "<b>Step 2 — Slope.</b> $(16-1)/(4-1) = 15/3 = 5$.",
            "<b>Step 3 — Distractor audit.</b> 15 is the rise alone; 3 the run; 9 is $f$ at the midpoint-ish."
          ],
          a: "$5$",
          v: "MVT tie-in: some $c \\in (1,4)$ has the instantaneous rate 5 — here $2c = 5 \\Rightarrow c = 2.5$, comfortably inside ✓ — average and instantaneous rates meeting is exactly the Mean Value Theorem."

        }), ref: "Handbook p.47" },
      { q: "$\\dfrac{d}{dx}[\\arctan(x)]$ = ",
        choices: ["$\\dfrac{1}{1+x^2}$", "$\\dfrac{1}{\\sqrt{1-x^2}}$", "$\\dfrac{-1}{1+x^2}$", "$\\sec^2 x$"], correct: 0,
        solution: S({
          c: "Inverse-trig derivative to memorize: $\\dfrac{d}{dx}\\arctan x = \\dfrac{1}{1+x^{2}}$.",
          s: [
            "<b>Step 1 — Recall (or derive).</b> $y = \\arctan x \\Rightarrow \\tan y = x \\Rightarrow \\sec^{2}y\\,y' = 1 \\Rightarrow y' = \\cos^{2}y = \\dfrac{1}{1+\\tan^{2}y} = \\dfrac{1}{1+x^{2}}$.",
            "<b>Step 2 — Distractor audit.</b> $1/\\sqrt{1-x^{2}}$ is $\\arcsin$'s derivative (the classic mix-up); the negative version is $\\text{arccot}$; $\\sec^{2}x$ is tan's FORWARD derivative."
          ],
          a: "$\\dfrac{1}{1+x^{2}}$",
          v: "Consistency with the integral two questions ago: $\\int dx/(1+x^{2}) = \\arctan x$ — derivative and antiderivative pair up ✓. Behavior check: slope 1 at $x=0$, →0 at ±∞ (arctan flattens toward ±π/2) ✓."

        }), ref: "Handbook p.47" },
      { q: "Slope of tangent to $y = \\ln x$ at $x = e$:",
        choices: ["$1/e$", "$1$", "$0$", "$e$"], correct: 0,
        solution: S({
          c: "Tangent slope = derivative evaluated at the point: $y = \\ln x \\Rightarrow y' = 1/x$.",
          s: [
            "<b>Step 1 — Evaluate.</b> $y'(e) = 1/e \\approx 0.368$.",
            "<b>Step 2 — Distractor audit.</b> 1 is the slope at $x = 1$; 0 is the limit at $\\infty$; $e$ inverts the answer."
          ],
          a: "$1/e$",
          v: "Trend check: $\\ln x$ rises ever more slowly — slope 1 at $x=1$, $1/e$ at $x=e$, $1/10$ at $x=10$ — monotonically flattening, never zero ✓. (Tangent line bonus: at $(e, 1)$ with slope $1/e$, the line passes through the origin.)"

        }), ref: "Handbook p.47" },
      { q: "$\\lim_{x \\to 0} \\dfrac{1-\\cos x}{x^2}$ = ",
        choices: ["$1/2$", "$0$", "$1$", "Does not exist"], correct: 0,
        solution: S({
          c: "A $0/0$ indeterminate form — resolve by L'Hôpital (differentiate top and bottom) or the small-angle expansion $\\cos x \\approx 1 - x^{2}/2$.",
          s: [
            "<b>Step 1 — L'Hôpital once.</b> $\\dfrac{\\sin x}{2x}$ — still $0/0$.",
            "<b>Step 2 — Again.</b> $\\dfrac{\\cos x}{2} \\to \\dfrac12$.",
            "<b>Step 3 — Distractor audit.</b> 0 assumes the top dies faster (same $x^{2}$ order — it doesn't); 1 misremembers $\\sin x/x$; 'DNE' confuses indeterminate with undefined."
          ],
          a: "$1/2$",
          v: "Taylor route (one line): $1-\\cos x = x^{2}/2 - x^{4}/24 + \\cdots$ → divide by $x^{2}$ → $1/2$ ✓. Numeric: $x = 0.1$ gives 0.49958 — already at the answer ✓."

        }), ref: "Handbook p.47" },
    ],

    // ====================== Ch 2: Probability — +12 ======================
    2: [
      { q: "Mean of {3, 5, 7, 9}:", choices: ["$6$", "$5$", "$7$", "$24$"], correct: 0,
        solution: S({
          c: "Mean = sum ÷ count — the balance point of the data.",
          s: [
            "<b>Step 1 — Sum.</b> $3+5+7+9 = 24$.",
            "<b>Step 2 — Divide by 4.</b> $24/4 = 6$.",
            "<b>Step 3 — Distractor audit.</b> 5 and 7 are data values; 24 is the un-divided sum."
          ],
          a: "$6$",
          v: "Structure bonus: the data are equally spaced, so mean = median = midpoint of (3,9) = 6 ✓ — symmetric data make all the centers coincide."

        }), ref: "Handbook p.63" },
      { q: "Mode of {2, 3, 3, 4, 5, 5, 5}:", choices: ["$5$", "$3$", "$4$", "Multiple"], correct: 0,
        solution: S({
          c: "Mode = the most FREQUENT value (not the largest, not the middle).",
          s: [
            "<b>Step 1 — Tally.</b> 5 appears ×3; 3 appears ×2; 2 and 4 once each.",
            "<b>Step 2 — Pick the winner.</b> Mode = 5.",
            "<b>Step 3 — Distractor audit.</b> 3 is runner-up; 4 is the median; 'multiple' would need a tie for first."
          ],
          a: "$5$",
          v: "Vocabulary completeness: a two-way tie = bimodal; all values distinct = no mode ✓. Mode is the only center that works for CATEGORICAL data (most common color, etc.) — its real claim to existence."

        }), ref: "Handbook p.63" },
      { q: "P(at least one head in 3 fair coin flips):",
        choices: ["$7/8$", "$1/8$", "$1/2$", "$3/8$"], correct: 0,
        solution: S({
          c: "'At least one' is the complement trick's home turf: $P(\\ge1) = 1 - P(\\text{none})$ — one subtraction beats summing seven cases.",
          s: [
            "<b>Step 1 — Probability of NO heads.</b> $(1/2)^{3} = 1/8$ (TTT).",
            "<b>Step 2 — Complement.</b> $1 - 1/8 = 7/8$.",
            "<b>Step 3 — Distractor audit.</b> 1/8 is the complement itself; 1/2 is one flip; 3/8 is EXACTLY one head."
          ],
          a: "$7/8$",
          v: "Direct count confirms: of 8 outcomes only TTT lacks a head → 7/8 ✓. Reflex to build: the phrase 'at least one' should trigger the complement before any summing starts."

        }), ref: "Handbook p.65" },
      { q: "Conditional prob $P(B|A) = 0.6$, $P(A) = 0.4$. $P(A \\cap B)$ = ",
        choices: ["$0.24$", "$0.6$", "$0.4$", "$1.0$"], correct: 0,
        solution: S({
          c: "The multiplication rule — the definition of conditional probability rearranged: $P(A\\cap B) = P(A)\\,P(B|A)$.",
          s: [
            "<b>Step 1 — Multiply.</b> $0.4\\times0.6 = 0.24$.",
            "<b>Step 2 — Distractor audit.</b> 0.6 and 0.4 echo the givens; 1.0 adds them."
          ],
          a: "$P(A\\cap B) = 0.24$",
          v: "Counting check per 100 trials: A happens 40 times; of those, 60% also have B → 24 of 100 ✓. The joint can never exceed either marginal (0.24 < 0.4 ✓) — a free sanity bound."

        }), ref: "Handbook p.65" },
      { q: "Quality control: 100 widgets, 3 defective. Probability 1 random widget is defective:",
        choices: ["$0.03$", "$0.3$", "$0.97$", "$3$"], correct: 0,
        solution: S({
          c: "Classical probability: favorable ÷ total, for equally likely draws.",
          s: [
            "<b>Step 1 — Divide.</b> $3/100 = 0.03$.",
            "<b>Step 2 — Distractor audit.</b> 0.3 misplaces the decimal; 0.97 is the GOOD-widget probability (complement); 3 forgets to divide."
          ],
          a: "$0.03$ (3%)",
          v: "Complement closure: $0.03 + 0.97 = 1$ ✓. This 3% is also the defect RATE the binomial/Poisson questions build on — same number, next level up."

        }), ref: "Handbook p.64" },
      { q: "Continuous uniform distribution on $[0, 10]$. Mean and std dev:",
        choices: ["$\\mu=5, \\sigma\\approx 2.89$", "$\\mu=5, \\sigma=10/12$", "$\\mu=10, \\sigma=5$", "$\\mu=5, \\sigma=5$"], correct: 0,
        solution: S({
          c: "Uniform $U(a,b)$ formulas to recall as a pair: mean $\\mu = \\dfrac{a+b}{2}$ (the midpoint), variance $\\sigma^{2} = \\dfrac{(b-a)^{2}}{12}$ — note the 12, and that σ needs the square root.",
          s: [
            "<b>Step 1 — Mean.</b> $(0+10)/2 = 5$.",
            "<b>Step 2 — Variance then SD.</b> $\\sigma^{2} = 100/12 = 8.33$ → $\\sigma = 2.89$.",
            "<b>Step 3 — Distractor audit.</b> '$\\sigma = 10/12$' forgets BOTH the square and the root; '$\\sigma = 5$' guesses the mean; '$\\mu = 10$' takes the endpoint."
          ],
          a: "$\\mu = 5$, $\\sigma \\approx 2.89$",
          v: "Plausibility: σ ≈ 29% of the range is the uniform's signature ($1/\\sqrt{12} = 0.289$) ✓ — narrower than half-range because mass near the center contributes small deviations."

        }), ref: "Handbook p.67" },
      { q: "Poisson process with rate $\\lambda = 2$ events/hour. P(exactly 3 events in 1 hour):",
        choices: ["$\\approx 0.180$", "$\\approx 0.667$", "$\\approx 0.135$", "$\\approx 0.500$"], correct: 0,
        solution: S({
          c: "Poisson counts random arrivals: $P(k) = \\dfrac{\\lambda^{k}e^{-\\lambda}}{k!}$ with $\\lambda$ = expected count in the window.",
          s: [
            "<b>Step 1 — Plug in.</b> $P(3) = \\dfrac{2^{3}e^{-2}}{3!} = \\dfrac{8\\times0.1353}{6}$.",
            "<b>Step 2 — Evaluate.</b> $= 0.180$.",
            "<b>Step 3 — Distractor audit.</b> 0.135 is $e^{-2}$ alone (that's $P(0)$); 0.667 is $\\lambda/3$; 0.5 is a shrug."
          ],
          a: "$P(3) \\approx 0.180$",
          v: "Shape check: the mean is 2, so $P(2) = 0.271$ should exceed $P(3) = 0.180$, which exceeds $P(4) = 0.090$ ✓ — the answer sits correctly on the downhill side of the peak."

        }), ref: "Handbook p.66" },
      { q: "Standard error of mean: $\\sigma=10$, $n=25$. SE = ",
        choices: ["$2$", "$10$", "$0.4$", "$25$"], correct: 0,
        solution: S({
          c: "Standard error of the mean: $SE = \\sigma/\\sqrt n$ — sample averages wobble less than individuals, by the root of the sample size.",
          s: [
            "<b>Step 1 — Apply.</b> $10/\\sqrt{25} = 10/5 = 2$.",
            "<b>Step 2 — Distractor audit.</b> 10 forgets the $\\sqrt n$ entirely; 0.4 divides by $n$ instead of $\\sqrt n$ (the classic); 25 echoes $n$."
          ],
          a: "$SE = 2$",
          v: "Behavior check: to halve this SE you'd need $n = 100$ — four times the data for double the precision, the $\\sqrt{}$ law of statistics ✓."

        }), ref: "Handbook p.69" },
      { q: "Linear regression: $y = mx + b$. Best fit minimizes:",
        choices: ["Sum of squared residuals", "Sum of residuals", "Maximum residual", "Slope"], correct: 0,
        solution: S({
          c: "'Least squares' is literal: the best-fit line minimizes the SUM OF SQUARED residuals $\\sum(y_i - \\hat y_i)^{2}$ — squaring keeps signs from cancelling and penalizes big misses hardest.",
          s: [
            "<b>Step 1 — Match.</b> Sum of squared residuals.",
            "<b>Step 2 — Why not the others.</b> Plain sum of residuals is ZERO for any line through the mean point (positives cancel negatives); minimizing the max residual is a different (minimax) criterion; the slope is an OUTPUT, not the objective.",
            "<b>Step 3 — The payoff.</b> Squaring makes the calculus clean — normal equations with closed-form slope/intercept."
          ],
          a: "Sum of squared residuals.",
          v: "The robustness footnote worth knowing: squared loss is outlier-sensitive (one wild point drags the line); absolute-deviation regression resists outliers but loses the closed form ✓ — choice of loss IS a modeling decision."

        }), ref: "Handbook p.69" },
      { q: "Correlation coefficient range:",
        choices: ["$-1 \\le r \\le 1$", "$0 \\le r \\le 1$", "$-\\infty \\le r \\le \\infty$", "$0 \\le r \\le 100$"], correct: 0,
        solution: S({
          c: "Pearson's $r$ is normalized covariance — bounded by construction: $-1 \\le r \\le 1$. Sign gives direction, magnitude gives strength of LINEAR association.",
          s: [
            "<b>Step 1 — Match.</b> $[-1, 1]$.",
            "<b>Step 2 — Anchor the endpoints.</b> $r = \\pm1$: points exactly on a line (slope sign = r's sign); $r = 0$: no LINEAR relationship.",
            "<b>Step 3 — Distractor audit.</b> $[0,1]$ forgets negative correlation; unbounded confuses $r$ with covariance; $[0,100]$ confuses with percentages."
          ],
          a: "$-1 \\le r \\le 1$",
          v: "Two cautions packed in one symbol: $r = 0$ does NOT mean independent (a perfect parabola scores ~0), and $r^{2}$ — the variance-explained fraction — is the companion the FE asks next ✓."

        }), ref: "Handbook p.69" },
      { q: "Z-score $z = 2$ corresponds to:",
        choices: ["$\\approx 97.7\\%$ percentile", "$\\approx 95\\%$", "$\\approx 50\\%$", "$\\approx 99.7\\%$"], correct: 0,
        solution: S({
          c: "A z-score's percentile is the cumulative normal: $P(Z \\le 2) = \\Phi(2) = 0.9772$ — the value is 2 SDs above the mean, beating ~97.7% of the distribution.",
          s: [
            "<b>Step 1 — Look up.</b> $\\Phi(2) = 0.9772 \\to$ 97.7th percentile.",
            "<b>Step 2 — Reconcile with the 95% rule.</b> ±2σ holds ~95%, leaving 2.5% in EACH tail → below +2σ is $95 + 2.5 = 97.5\\%$ ✓ (table value 97.72).",
            "<b>Step 3 — Distractor audit.</b> 95% is the TWO-sided coverage; 50% is z = 0; 99.7% is the ±3σ band."
          ],
          a: "$\\approx 97.7$th percentile.",
          v: "The one-sided ladder to memorize: $z = 1 \\to 84\\%$, $z = 2 \\to 97.7\\%$, $z = 3 \\to 99.87\\%$ — converts instantly between z and percentile in either direction ✓."

        }), ref: "Handbook p.67" },
      { q: "Hypothesis testing: $\\alpha = 0.05$. Reject $H_0$ when:",
        choices: ["p-value < 0.05", "p-value > 0.05", "Statistic = 0", "Statistic > $\\alpha$"], correct: 0,
        solution: S({
          c: "The decision rule of significance testing: reject $H_0$ when the p-value (how surprising the data would be IF $H_0$ were true) falls below the pre-chosen threshold α.",
          s: [
            "<b>Step 1 — Match.</b> Reject when $p < \\alpha = 0.05$.",
            "<b>Step 2 — Read the two numbers correctly.</b> α = the false-alarm rate you accept in advance; p = the evidence strength computed from data. Small p = data too unlikely under $H_0$ → reject.",
            "<b>Step 3 — Distractor audit.</b> '$p > 0.05$' inverts the rule (that's FAIL to reject); the statistic-based options compare incomparable quantities."
          ],
          a: "Reject $H_0$ when p-value < 0.05.",
          v: "Interpretation guardrails the FE may probe: failing to reject ≠ proving $H_0$; and α = 0.05 means 1-in-20 true nulls get falsely rejected — stricter fields use 0.01 or tighter ✓."

        }), ref: "Handbook p.70" },
    ],

    // ====================== Ch 3: Ethics — +5 ======================
    3: [
      { q: "An engineer is asked to falsify test data. They should:",
        choices: ["Refuse, document, and report through proper channels", "Comply and report later", "Modify slightly", "Resign quietly"], correct: 0,
        solution: S({
          c: "Falsifying test data is a double violation: dishonesty (statements must be truthful) and endangerment (decisions built on fake data put the public at risk). The compliant sequence: refuse, document, report.",
          s: [
            "<b>Step 1 — Refuse.</b> No qualifier — 'slightly modified' data is falsified data.",
            "<b>Step 2 — Document.</b> Record who asked, what, when — the paper trail protects both the public and the engineer.",
            "<b>Step 3 — Report through channels.</b> Supervisor → management → licensing board, escalating as needed. Distractors fail: 'comply now, report later' makes you a participant; quiet resignation leaves the falsified data in play."
          ],
          a: "Refuse, document, and report through proper channels.",
          v: "The pattern from every data-integrity scandal (emissions cheating, test-lab fraud): engineers who complied 'temporarily' became co-defendants ✓ — refusal at the first request is also the cheapest exit."

        }), ref: "Handbook p.5" },
      { q: "A licensed PE acts as expert witness in litigation. They must:",
        choices: ["Be impartial and truthful regardless of who hired them", "Support the hiring party", "Stay silent on weaknesses", "Match opposing expert"], correct: 0,
        solution: S({
          c: "An expert witness serves the COURT, not the client who pays: testimony must be objective, complete, and truthful — including facts that hurt the hiring side.",
          s: [
            "<b>Step 1 — Match.</b> Impartial and truthful, regardless of retention.",
            "<b>Step 2 — Why.</b> The expert's role is educator to judge/jury; advocacy is the LAWYER's job. Slanted expertise is misrepresentation under the code.",
            "<b>Step 3 — Distractor audit.</b> 'Support the hiring party' converts expert into advocate; concealing weaknesses is testimony-by-omission; 'matching' the opposing expert abandons independent judgment."
          ],
          a: "Be impartial and truthful regardless of who hired them.",
          v: "Enforcement reality: boards have suspended licenses over slanted testimony, and courts disqualify experts who act as advocates ✓. Practical tell of a good expert: their report reads the same no matter which side commissioned it."

        }), ref: "Handbook p.5" },
      { q: "Continuing education for licensed PEs is typically:",
        choices: ["Required (specific PDH hours per renewal)", "Optional", "Only for management", "Not regulated"], correct: 0,
        solution: S({
          c: "Licensure is maintained, not just earned: most US states require Professional Development Hours (PDH) each renewal cycle — typically 15-30 PDH per 2 years, sometimes with mandatory ethics content.",
          s: [
            "<b>Step 1 — Match.</b> Required, with specific hour counts per renewal.",
            "<b>Step 2 — Distractor audit.</b> 'Optional' understates a license CONDITION; 'only management' and 'not regulated' have no basis."
          ],
          a: "Required — specific PDH per renewal (varies by state).",
          v: "Why it exists: codes, materials, and tools change faster than careers — competence (the thing the license certifies) decays without upkeep ✓. NCEES tracks PDH centrally for multi-state practitioners."

        }), ref: "Handbook p.11" },
      { q: "An engineer's primary professional obligation is to:",
        choices: ["Public health, safety, and welfare", "Employer", "Profession", "Self"], correct: 0,
        solution: S({
          c: "The first canon, verbatim concept: hold PARAMOUNT the safety, health, and welfare of the PUBLIC — above employer, profession, and self.",
          s: [
            "<b>Step 1 — Match.</b> Public health, safety, and welfare.",
            "<b>Step 2 — The hierarchy.</b> Public > client/employer > profession > self — the tiebreaker for nearly every ethics scenario.",
            "<b>Step 3 — Distractor audit.</b> Employer is a REAL duty (faithful agent) but subordinate; profession and self rank lower still."
          ],
          a: "The public's health, safety, and welfare.",
          v: "Why 'paramount': licensure exists BECAUSE the public can't evaluate engineering work — the license is a public trust, so the public ranks first by construction ✓. Expect 2-3 FE questions to reduce to this one line."

        }), ref: "Handbook p.5" },
      { q: "Whose stamp/seal goes on engineering drawings?",
        choices: ["The PE who prepared or thoroughly reviewed the work", "Senior partner", "Owner", "Any licensed person"], correct: 0,
        solution: S({
          c: "The seal belongs to the engineer in RESPONSIBLE CHARGE — the licensee who prepared the work or thoroughly reviewed and directed it. Authority over the work, not seniority, decides.",
          s: [
            "<b>Step 1 — Match.</b> The PE who prepared or thoroughly reviewed it.",
            "<b>Step 2 — Distractor audit.</b> 'Senior partner' — rank confers nothing without review; 'owner' isn't a licensee role; 'any licensed person' invites plan stamping — sealing unreviewed work, a leading cause of license discipline.",
            "<b>Step 3 — Large-project reality.</b> Multi-discipline jobs carry MULTIPLE seals — each PE stamps the sheets they actually controlled."
          ],
          a: "The PE who prepared or thoroughly reviewed the work (responsible charge).",
          v: "Test of responsible charge boards actually apply: could this engineer answer detailed questions about the design's assumptions and calculations? If not, the seal was a rubber stamp ✓."

        }), ref: "Handbook p.5" },
    ],

    // ====================== Ch 4: Econ — +10 ======================
    4: [
      { q: "$P = \\$5000$, $i = 6\\%$/yr, $n = 10$ yrs. Future value:",
        choices: ["$\\approx \\$8954$", "$\\$8000$", "$\\$5300$", "$\\$5600$"], correct: 0,
        solution: S({
          c: "Single-payment compounding: $F = P(1+i)^{n}$ — each year multiplies the balance by 1.06.",
          s: [
            "<b>Step 1 — Growth factor.</b> $(1.06)^{10} = 1.7908$.",
            "<b>Step 2 — Scale.</b> $F = 5000\\times1.7908 = \\$8{,}954$.",
            "<b>Step 3 — Distractor audit.</b> \\$8,000 is SIMPLE interest ($5000(1+0.6)$); \\$5,300 is ONE year; \\$5,600 is two years' simple."
          ],
          a: "$F \\approx \\$8{,}954$",
          v: "Rule-of-72 check: at 6%, doubling takes ~12 years — 10 years should land a bit short of double ($\\$10{,}000$), and \\$8,954 does ✓."

        }), ref: "Handbook p.230" },
      { q: "Annual deposits of $1000 for 20 years at 7%. Future value:",
        choices: ["$\\approx \\$40{,}995$", "$\\$20{,}000$", "$\\$70{,}000$", "$\\$33{,}066$"], correct: 0,
        solution: S({
          c: "Future worth of an annuity: $F = A\\cdot\\dfrac{(1+i)^{n}-1}{i}$ — every deposit compounds from ITS year to the end.",
          s: [
            "<b>Step 1 — Factor.</b> $(1.07)^{20} = 3.8697$ → $(F/A) = 2.8697/0.07 = 40.995$.",
            "<b>Step 2 — Scale.</b> $F = 1000\\times40.995 = \\$40{,}995$.",
            "<b>Step 3 — Distractor audit.</b> \\$20,000 is bare principal (no interest); \\$70,000 over-compounds; \\$33,066 garbles the factor."
          ],
          a: "$F \\approx \\$40{,}995$",
          v: "Bracket check: must exceed \\$20,000 (deposits) but stay below a \\$20,000 lump invested 20 years ($\\times3.87 = \\$77{,}000$-ish)... more precisely below $1000\\times20\\times(1.07)^{20}$; \\$41k sits sensibly — interest roughly DOUBLED the contributions over 20 years at 7% ✓."

        }), ref: "Handbook p.231" },
      { q: "Sinking fund: save annually to accumulate $\\$50{,}000$ in 5 years at $i=6\\%$. Annual deposit:",
        choices: ["$\\approx \\$8870$", "$\\$10{,}000$", "$\\$5000$", "$\\$12{,}500$"], correct: 0,
        solution: S({
          c: "A sinking fund asks the annuity question in reverse: what equal annual deposit $A$ grows to a target $F$? $A = F\\big/\\dfrac{(1+i)^{n}-1}{i}$ — divide by the (F/A) factor.",
          s: [
            "<b>Step 1 — Factor.</b> $(F/A, 6\\%, 5) = (1.06^{5}-1)/0.06 = 5.6371$.",
            "<b>Step 2 — Divide.</b> $A = 50{,}000/5.6371 = \\$8{,}870$.",
            "<b>Step 3 — Distractor audit.</b> \\$10,000 ignores interest ($50k/5$); \\$5,000 and \\$12,500 have no consistent route."
          ],
          a: "$A \\approx \\$8{,}870$ per year.",
          v: "Sense check: interest contributes the gap between $5\\times8870 = \\$44{,}350$ deposited and \\$50,000 reached — about \\$5,650 of growth, reasonable for 6% over 5 years ✓. Sinking funds are how bond issuers and HOAs pre-fund big obligations."

        }), ref: "Handbook p.231" },
      { q: "Net present value (NPV) decision rule:",
        choices: ["Accept if NPV > 0", "Accept if NPV = 0", "Accept if NPV < 0", "Reject all"], correct: 0,
        solution: S({
          c: "NPV discounts every cash flow to today at the required rate and nets them. The rule is one line: ACCEPT when NPV > 0 — the project beats the alternative of earning $i$ elsewhere.",
          s: [
            "<b>Step 1 — Match.</b> Accept if NPV > 0.",
            "<b>Step 2 — The boundary cases.</b> NPV = 0: earns EXACTLY the required rate — indifferent; NPV < 0: destroys value relative to the benchmark — reject.",
            "<b>Step 3 — Mutually exclusive add-on.</b> When only one project can be chosen: pick the LARGEST positive NPV."
          ],
          a: "Accept if NPV > 0.",
          v: "Why NPV is the gold standard: it measures dollars of wealth added at your actual cost of capital, and unlike IRR it never gives multiple/misleading answers on odd cash-flow patterns ✓."

        }), ref: "Handbook p.232" },
      { q: "MARR (minimum attractive rate of return) is:",
        choices: ["Threshold below which projects are rejected", "Maximum possible return", "Market rate only", "Always zero"], correct: 0,
        solution: S({
          c: "MARR — minimum attractive rate of return — is the firm's hurdle: the return a project must clear to deserve capital, set from cost of capital plus a risk premium.",
          s: [
            "<b>Step 1 — Match.</b> The threshold below which projects are rejected (IRR < MARR → no).",
            "<b>Step 2 — Where the number comes from.</b> Safe alternative (e.g., bonds) + risk premium for the venture class; typically 10-15% for established firms, higher for risky plays.",
            "<b>Step 3 — Distractor audit.</b> 'Maximum return' inverts; 'market rate only' ignores risk adjustment; zero would approve everything."
          ],
          a: "The minimum required return — the accept/reject threshold.",
          v: "Consistency across tools: discounting at MARR makes 'NPV > 0' and 'IRR > MARR' the SAME test for well-behaved projects ✓ — one hurdle, two phrasings."

        }), ref: "Handbook p.232" },
      { q: "Depreciation reduces:",
        choices: ["Taxable income (saving taxes)", "Asset value to zero immediately", "Loan principal", "Revenue"], correct: 0,
        solution: S({
          c: "Depreciation is a NON-CASH expense: no money leaves when you book it, but it reduces TAXABLE income — so it saves real cash through lower taxes: the 'depreciation tax shield' $= D\\times t$.",
          s: [
            "<b>Step 1 — Match.</b> Reduces taxable income → saves taxes.",
            "<b>Step 2 — Quantify.</b> \\$10,000 of depreciation at a 25% tax rate saves \\$2,500 of actual cash.",
            "<b>Step 3 — Distractor audit.</b> Asset value falls per the SCHEDULE, not to zero at once; loan principal and revenue are untouched by an accounting entry."
          ],
          a: "Taxable income — generating tax savings ($D\\times t$).",
          v: "Why MACRS front-loads: earlier deductions = earlier tax savings = higher PRESENT value of the shield ✓ — the time value of money applied to the tax code, and the whole reason depreciation method choice matters in project analysis."

        }), ref: "Handbook p.230" },
      { q: "Payback period for $\\$10{,}000$ investment returning $\\$2{,}500$/yr:",
        choices: ["4 years (simple)", "5 years", "$25\\%$", "Cannot tell"], correct: 0,
        solution: S({
          c: "Simple payback = initial cost ÷ annual return — how long until the cash returns equal the outlay, IGNORING time value.",
          s: [
            "<b>Step 1 — Divide.</b> $10{,}000/2{,}500 = 4$ years.",
            "<b>Step 2 — Distractor audit.</b> 5 years pads arbitrarily; 25% is the reciprocal dressed as a rate; 'cannot tell' — simple payback needs exactly these two numbers."
          ],
          a: "4 years (simple).",
          v: "The metric's honest limits: ignores discounting (discounted payback runs LONGER) and ignores everything AFTER payback — a project earning forever and one dying at year 5 score identically ✓. Use as a quick risk screen, never the final word."

        }), ref: "Handbook p.232" },
      { q: "Tax credit vs tax deduction (simplistic): a $\\$1000$ credit saves $\\$1000$; a $\\$1000$ deduction saves:",
        choices: ["$\\$1000 \\times$ marginal tax rate", "$\\$1000$", "Nothing", "Twice as much"], correct: 0,
        solution: S({
          c: "A CREDIT subtracts from the tax BILL dollar-for-dollar; a DEDUCTION subtracts from taxable INCOME — its cash value is deduction × marginal tax rate.",
          s: [
            "<b>Step 1 — Apply.</b> \\$1,000 deduction at a 25% bracket saves $1000\\times0.25 = \\$250$.",
            "<b>Step 2 — Compare.</b> The \\$1,000 CREDIT saves \\$1,000 — four times more at this bracket.",
            "<b>Step 3 — Distractor audit.</b> '\\$1000' confuses deduction with credit; 'nothing' and 'twice' have no mechanism."
          ],
          a: "Deduction × marginal tax rate.",
          v: "General ranking: credits ≥ equal-size deductions always (equality only at a 100% tax rate) ✓. Engineering-economics tie-in: depreciation is a DEDUCTION — its shield formula $D\\times t$ is exactly this question's answer."

        }), ref: "Handbook p.230" },
      { q: "If MARR is 10%, project with IRR of 8% should be:",
        choices: ["Rejected", "Accepted", "Studied more", "Postponed"], correct: 0,
        solution: S({
          c: "The IRR decision rule: accept if IRR ≥ MARR — the project must out-earn the hurdle.",
          s: [
            "<b>Step 1 — Compare.</b> IRR 8% < MARR 10% → reject.",
            "<b>Step 2 — Distractor audit.</b> 'Accept' inverts the rule; 'study more'/'postpone' dodge a complete comparison — the numbers already decide."
          ],
          a: "Rejected.",
          v: "Equivalent check: discounting the project's cash flows at 10% would give NPV < 0 (since IRR — the zero-NPV rate — is only 8%) ✓ — the two rules agree, as they must for conventional cash flows."

        }), ref: "Handbook p.232" },
      { q: "Real interest rate from nominal 8% and inflation 3%:",
        choices: ["$\\approx 4.85\\%$", "$5\\%$", "$11\\%$", "$2.7\\%$"], correct: 0,
        solution: S({
          c: "Fisher equation, exact form: $1 + i_{real} = \\dfrac{1 + i_{nominal}}{1 + f}$ — purchasing-power growth is nominal growth deflated by inflation.",
          s: [
            "<b>Step 1 — Divide.</b> $1.08/1.03 = 1.04854$.",
            "<b>Step 2 — Subtract 1.</b> $i_{real} = 4.85\\%$.",
            "<b>Step 3 — Distractor audit.</b> 5% is the SUBTRACTION approximation (close, but the exam offers the exact value); 11% adds inflation; 2.7% has no route."
          ],
          a: "$\\approx 4.85\\%$",
          v: "Round trip: $(1.0485)(1.03) = 1.0800$ ✓. The gap between 5% and 4.85% is the cross-term $i_r\\times f$ — small at low rates, large in high-inflation economies, which is when the exact Fisher form earns its keep."

        }), ref: "Handbook p.230" },
    ],

    // ====================== Ch 5: Materials — +4 ======================
    5: [
      { q: "Aluminum vs copper as a conductor: aluminum has ___ conductivity:",
        choices: ["Lower (about 60% of Cu)", "Higher", "Same", "Zero"], correct: 0,
        solution: S({
          c: "Conductivity benchmark: copper $\\sigma \\approx 5.96\\times10^{7}$ S/m, aluminum $\\approx 3.5\\times10^{7}$ S/m — aluminum conducts at roughly 60% of copper.",
          s: [
            "<b>Step 1 — Take the ratio.</b> $3.5/5.96 \\approx 0.59$ → ~60%.",
            "<b>Step 2 — Why aluminum still wins overhead.</b> Per unit WEIGHT it actually conducts better (≈2× lighter), so transmission lines are aluminum; buildings and windings stay copper.",
            "<b>Step 3 — Distractor audit.</b> 'Higher'/'same' invert or ignore the data; zero is absurd for a metal."
          ],
          a: "Lower — about 60% of copper.",
          v: "Design consequence: equal-resistance aluminum needs ~1.6× the cross-section ✓ — consistent with the resistivity ratio seen from the other side ($\\rho_{Al}/\\rho_{Cu} \\approx 1.6$)."

        }), ref: "Handbook p.354" },
      { q: "Ohm's law in terms of current density:",
        choices: ["$\\vec{J} = \\sigma\\vec{E}$", "$V = IR$", "$\\vec{F} = q\\vec{E}$", "$P = IV$"], correct: 0,
        solution: S({
          c: "Ohm's law has two faces: the FIELD (microscopic) form $\\vec J = \\sigma\\vec E$ — current density proportional to local field — and the CIRCUIT form $V = IR$ you get by integrating it over a uniform conductor.",
          s: [
            "<b>Step 1 — Match.</b> 'In terms of current density' = $\\vec J = \\sigma\\vec E$.",
            "<b>Step 2 — See the connection.</b> Integrate: $V = EL$, $I = JA$ → $V = (\\rho L/A)I = IR$ — the circuit law falls out.",
            "<b>Step 3 — Distractor audit.</b> $V = IR$ is the integrated cousin (right law, wrong form for the question); $\\vec F = q\\vec E$ is the Lorentz force; $P = IV$ is power."
          ],
          a: "$\\vec J = \\sigma\\vec E$",
          v: "Unit check: (S/m)(V/m) = A/m² ✓. The field form is the one that generalizes — to non-uniform conductors, semiconductors, and electromagnetic field solvers."

        }), ref: "Handbook p.354" },
      { q: "Power dissipation density in resistive material:",
        choices: ["$\\sigma E^2$ (W/m³)", "$\\sigma E$", "$E/\\sigma$", "$\\rho J$"], correct: 0,
        solution: S({
          c: "Power per unit VOLUME in a conductor: $p = \\vec J\\cdot\\vec E = \\sigma E^{2}$ (equivalently $\\rho J^{2}$) — the local, field version of $P = I^{2}R$.",
          s: [
            "<b>Step 1 — Match.</b> $\\sigma E^{2}$, in W/m³.",
            "<b>Step 2 — Connect to the circuit form.</b> Integrate over the conductor's volume → total $P = I^{2}R$ ✓.",
            "<b>Step 3 — Distractor audit.</b> $\\sigma E$ is just current density (A/m²); $E/\\sigma$ has no meaning; $\\rho J$ misses a factor of J."
          ],
          a: "$p = \\sigma E^{2}$ (W/m³).",
          v: "Unit check: (S/m)(V/m)² = (A/V·m)(V²/m²) = W/m³ ✓. Where the local view matters: hot spots in busbars and fuses — power concentrates where E (or J) is largest, not uniformly."

        }), ref: "Handbook p.354" },
      { q: "Magnetic permeability of free space $\\mu_0$:",
        choices: ["$4\\pi \\times 10^{-7}$ H/m", "$8.85 \\times 10^{-12}$ F/m", "$1$", "$3 \\times 10^8$"], correct: 0,
        solution: S({
          c: "The two vacuum constants must never swap: $\\mu_0 = 4\\pi\\times10^{-7}$ H/m (permeability — magnetic) and $\\varepsilon_0 = 8.854\\times10^{-12}$ F/m (permittivity — electric).",
          s: [
            "<b>Step 1 — Match.</b> $\\mu_0 = 4\\pi\\times10^{-7} \\approx 1.257\\times10^{-6}$ H/m.",
            "<b>Step 2 — Distractor audit.</b> $8.85\\times10^{-12}$ is $\\varepsilon_0$ (the classic swap); 1 is the RELATIVE permeability of vacuum; $3\\times10^{8}$ is $c$."
          ],
          a: "$\\mu_0 = 4\\pi\\times10^{-7}$ H/m",
          v: "Cross-check that binds all three constants: $c = 1/\\sqrt{\\mu_0\\varepsilon_0} = 3\\times10^{8}$ m/s ✓ — remember any two, derive the third. (Post-2019 SI makes $\\mu_0$ a measured value, but it differs from $4\\pi\\times10^{-7}$ only in the 10th digit.)"

        }), ref: "Handbook p.355" },
    ],

    // ====================== Ch 6: Circuits — +20 ======================
    6: [
      { q: "Source transformation: $V_{Th} = 24$ V, $R_{Th} = 8$Ω → Norton equivalent:",
        choices: ["$I_N = 3$ A, $R_N = 8$Ω", "$I_N = 24$ A", "$I_N = 8$ A", "$I_N = 3$ A, $R_N = 1/8$Ω"], correct: 0,
        solution: S({
          c: "Thevenin → Norton: $I_N = V_{Th}/R_{Th}$, resistance unchanged ($R_N = R_{Th}$) — two interchangeable masks for one circuit.",
          s: [
            "<b>Step 1 — Convert.</b> $I_N = 24/8 = 3$ A; $R_N = 8\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 24 A and 8 A misuse the division; '$R_N = 1/8$' wrongly inverts the resistance."
          ],
          a: "$I_N = 3$ A, $R_N = 8\\,\\Omega$",
          v: "Two-terminal test: short → Thevenin gives $24/8 = 3$ A = $I_N$ ✓; open → Norton gives $3\\times8 = 24$ V = $V_{Th}$ ✓ — equivalent at both extremes, hence for every load."

        }), ref: "Handbook p.357" },
      { q: "If $I = 2$ A flows through a 5Ω resistor for 30 s, energy dissipated:",
        choices: ["$600$ J", "$60$ J", "$300$ J", "$10$ J"], correct: 0,
        solution: S({
          c: "Energy = power × time, with $P = I^{2}R$ for a resistor.",
          s: [
            "<b>Step 1 — Power.</b> $P = 2^{2}\\times5 = 20$ W.",
            "<b>Step 2 — Energy.</b> $W = 20\\times30 = 600$ J.",
            "<b>Step 3 — Distractor audit.</b> 60 J uses $P = I\\!R$ unsquared ($2\\times5\\times$... loosely); 300 halves; 10 J is $I^{2}R/2$ noise."
          ],
          a: "$W = 600$ J",
          v: "Alternative route: $V = IR = 10$ V → $P = VI = 20$ W ✓ same energy. Scale feel: 600 J warms ~1.4 g of water by 100°C — a small resistor would get HOT ✓."

        }), ref: "Handbook p.356" },
      { q: "Power delivered by an ideal 12V battery if it pushes 0.5 A through external circuit:",
        choices: ["$6$ W", "$24$ W", "$12$ W", "$2$ W"], correct: 0,
        solution: S({
          c: "Source power: $P = VI$ — voltage across the source times current through it.",
          s: [
            "<b>Step 1 — Multiply.</b> $P = 12\\times0.5 = 6$ W.",
            "<b>Step 2 — Distractor audit.</b> 24 W inverts the current ($12/0.5$); 12 W forgets the current; 2 W has no route."
          ],
          a: "$P = 6$ W",
          v: "Conservation check: whatever the battery delivers, the external circuit dissipates — 6 W out = 6 W consumed ✓. ('Ideal' matters: a real battery would ALSO burn $I^{2}r$ internally — the next question's subject.)"

        }), ref: "Handbook p.356" },
      { q: "Internal resistance of 9V battery: drops to 8.5V when delivering 0.5 A. Internal R:",
        choices: ["$1\\ \\Omega$", "$0.5\\ \\Omega$", "$17\\ \\Omega$", "$0.05\\ \\Omega$"], correct: 0,
        solution: S({
          c: "A real battery = ideal EMF in series with internal resistance: $V_{terminal} = EMF - IR_{int}$. The sag under load REVEALS $R_{int}$.",
          s: [
            "<b>Step 1 — Measure the sag.</b> $9 - 8.5 = 0.5$ V lost internally at 0.5 A.",
            "<b>Step 2 — Ohm's law on the sag.</b> $R_{int} = 0.5/0.5 = 1\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 0.5 Ω halves; 17 Ω divides terminal voltage by current ($8.5/0.5$ — the LOAD's resistance); 0.05 slips a decade."
          ],
          a: "$R_{int} = 1\\,\\Omega$",
          v: "Why batteries warm up: $I^{2}R_{int} = 0.25$ W of heat inside the cell ✓. Diagnostic use: a 'dead' battery often shows fine open-circuit voltage but huge $R_{int}$ — sag under load is the real health test."

        }), ref: "Handbook p.357" },
      { q: "Three 4Ω resistors all in parallel:",
        choices: ["$4/3 \\approx 1.33\\ \\Omega$", "$12\\ \\Omega$", "$4\\ \\Omega$", "$1\\ \\Omega$"], correct: 0,
        solution: S({
          c: "Shortcut for EQUAL resistors in parallel: $R_{eq} = R/n$.",
          s: [
            "<b>Step 1 — Apply.</b> $4/3 \\approx 1.33\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 12 Ω is the SERIES sum; 4 Ω forgets the combination; 1 Ω over-divides."
          ],
          a: "$R_{eq} = 4/3 \\approx 1.33\\,\\Omega$",
          v: "Bound check: below the smallest branch (4 Ω) ✓. The $R/n$ shortcut also explains paralleling for power: three equal resistors share current equally, tripling the wattage rating at a third the resistance."

        }), ref: "Handbook p.356" },
      { q: "Current through 6Ω in parallel with 12Ω (combined fed by 30V source):",
        choices: ["$I_{6}=5$ A, $I_{12}=2.5$ A", "Both 5 A", "$I_6=2.5$ A", "Both 2.5 A"], correct: 0,
        solution: S({
          c: "Parallel branches share the same VOLTAGE; each draws its own current by Ohm's law: $I = V/R$ per branch.",
          s: [
            "<b>Step 1 — Each branch.</b> $I_6 = 30/6 = 5$ A; $I_{12} = 30/12 = 2.5$ A.",
            "<b>Step 2 — Read the pattern.</b> The SMALLER resistance carries the LARGER current — inverse sharing.",
            "<b>Step 3 — Distractor audit.</b> 'Both 5' or 'both 2.5' would need equal resistances."
          ],
          a: "$I_6 = 5$ A, $I_{12} = 2.5$ A",
          v: "KCL closure: total 7.5 A from the source → $R_{eq} = 30/7.5 = 4\\,\\Omega = 6\\|12$ ✓ — currents, voltage, and equivalent resistance all reconcile."

        }), ref: "Handbook p.356" },
      { q: "RL transient: starting from $i=0$ at $t=0$, with $V=12$ V, $R=4\\ \\Omega$, $L=8$ mH. Steady-state current:",
        choices: ["$3$ A", "$12$ A", "$0.375$ A", "$8$ mA"], correct: 0,
        solution: S({
          c: "At DC steady state an inductor is a WIRE (zero volts across it, since $V = L\\,di/dt$ and the current has stopped changing) — the final current is set by the resistor alone: $I_{ss} = V/R$.",
          s: [
            "<b>Step 1 — Replace L with a wire.</b> Circuit reduces to 12 V across 4 Ω.",
            "<b>Step 2 — Ohm.</b> $I_{ss} = 12/4 = 3$ A.",
            "<b>Step 3 — Distractor audit.</b> 12 A forgets R's value... ($12/1$); 0.375 misuses L; 8 mA echoes the inductance."
          ],
          a: "$I_{ss} = 3$ A",
          v: "Timing context: $\\tau = L/R = 8\\,\\text{mH}/4 = 2$ ms — the current reaches 95% of 3 A within 6 ms ✓. Steady-state rules to keep paired: inductor → short, capacitor → open."

        }), ref: "Handbook p.358" },
      { q: "RC circuit time constant in seconds, $R = 100$ Ω, $C = 1$ mF:",
        choices: ["$0.1$ s", "$10^{-4}$ s", "$1$ s", "$10$ s"], correct: 0,
        solution: S({
          c: "$\\tau = RC$ — the only trap is the unit prefix: 1 mF = $10^{-3}$ F (MILLIfarad, an unusually large but legitimate value).",
          s: [
            "<b>Step 1 — Multiply.</b> $\\tau = 100\\times10^{-3} = 0.1$ s.",
            "<b>Step 2 — Distractor audit.</b> $10^{-4}$ s misreads mF as µF — exactly the planted error; 1 s and 10 s slip further."
          ],
          a: "$\\tau = 0.1$ s",
          v: "Prefix discipline: m = $10^{-3}$, µ = $10^{-6}$, n = $10^{-9}$ — the mF/µF confusion is the most common RC-problem error on the exam ✓ (memory aid: kΩ·mF = s, kΩ·µF = ms)."

        }), ref: "Handbook p.358" },
      { q: "60 Hz AC, peak $V_m = 170$ V. RMS value:",
        choices: ["$120$ V", "$170$ V", "$240$ V", "$85$ V"], correct: 0,
        solution: S({
          c: "For a sinusoid, RMS (the DC-equivalent heating value) is peak over root-two: $V_{rms} = V_m/\\sqrt2$.",
          s: [
            "<b>Step 1 — Divide.</b> $170/1.414 \\approx 120$ V.",
            "<b>Step 2 — Distractor audit.</b> 170 confuses peak with RMS; 240 MULTIPLIES by √2 (wrong direction); 85 halves instead."
          ],
          a: "$V_{rms} = 120$ V",
          v: "This IS the US wall outlet: '120 V' on the label is RMS; the waveform actually swings ±170 V ✓. Direction memory: RMS is always SMALLER than peak for a sine (peak/1.414)."

        }), ref: "Handbook p.360" },
      { q: "$V_m = 100$, $I_m = 5$ at $\\theta = 0°$ phase between. Average power:",
        choices: ["$250$ W", "$500$ W", "$70.7$ W", "$0$ W"], correct: 0,
        solution: S({
          c: "Average AC power from PEAK quantities carries a ÷2: $P = \\dfrac{V_mI_m}{2}\\cos\\theta$ (the ÷2 converts peak·peak to rms·rms).",
          s: [
            "<b>Step 1 — Apply with θ = 0.</b> $P = \\dfrac{100\\times5}{2}\\times1 = 250$ W.",
            "<b>Step 2 — Distractor audit.</b> 500 W forgets the ÷2 (uses peaks as if RMS); 70.7 misapplies √2; 0 would need θ = 90°."
          ],
          a: "$P = 250$ W",
          v: "RMS route confirms: $V_{rms}I_{rms} = (70.7)(3.54) = 250$ W ✓ — the ÷2 and the two ÷√2's are the same correction."

        }), ref: "Handbook p.362" },
      { q: "Capacitor in DC steady state acts as:",
        choices: ["Open circuit", "Short", "$1\\ \\Omega$", "Variable resistor"], correct: 0,
        solution: S({
          c: "At DC ($\\omega = 0$), capacitive impedance $Z_C = 1/(j\\omega C)$ blows up to infinity — the capacitor is an OPEN circuit: fully charged, zero current.",
          s: [
            "<b>Step 1 — Match.</b> Open circuit.",
            "<b>Step 2 — Time-domain view.</b> $i = C\\,dv/dt$: voltage stopped changing → current = 0 — same conclusion without phasors.",
            "<b>Step 3 — Distractor audit.</b> 'Short' is the INDUCTOR's DC behavior (the mirror twin); fixed or variable resistance has no basis."
          ],
          a: "Open circuit.",
          v: "The DC-analysis recipe this enables: redraw the circuit with caps OPEN and inductors SHORTED, then solve resistively — the standard first move on every steady-state problem ✓."

        }), ref: "Handbook p.358" },
      { q: "Inductor in DC steady state:",
        choices: ["Short circuit (acts as wire)", "Open circuit", "Capacitor", "Negative R"], correct: 0,
        solution: S({
          c: "At DC, inductive impedance $Z_L = j\\omega L = 0$ — the inductor is a plain WIRE: constant current, zero voltage across it ($v = L\\,di/dt = 0$).",
          s: [
            "<b>Step 1 — Match.</b> Short circuit (acts as wire).",
            "<b>Step 2 — Distractor audit.</b> 'Open' is the CAPACITOR's DC role — the pair the FE loves to swap; the rest are noise."
          ],
          a: "Short circuit.",
          v: "Pairing to lock: DC steady state — L short, C open; at very HIGH frequency they swap roles (L blocks, C passes) ✓ — two lines that solve a dozen exam questions."

        }), ref: "Handbook p.358" },
      { q: "Three sources in parallel: 12V, 12V, 12V all ideal. Output across all:",
        choices: ["$12$ V (but circulating currents possible)", "$36$ V", "$4$ V", "Indeterminate"], correct: 0,
        solution: S({
          c: "Ideal equal voltage sources in parallel agree on the node voltage: 12 V. The caveat that matters in practice: REAL sources with slightly different EMFs drive circulating currents through each other's internal resistances.",
          s: [
            "<b>Step 1 — Match.</b> 12 V output (with the circulating-current caveat).",
            "<b>Step 2 — Why not 36 V.</b> SERIES stacks voltages; parallel does not — parallel shares CURRENT capability.",
            "<b>Step 3 — Distractor audit.</b> 4 V wrongly divides; 'indeterminate' overstates — equal ideal sources are consistent."
          ],
          a: "12 V — but real paralleled sources need matching (circulating currents).",
          v: "Practice rule this encodes: parallel batteries must be same chemistry/age/charge, and battery banks use balancing — a 0.5-V mismatch across two 50-mΩ internal resistances circulates 5 A of pure waste heat ✓."

        }), ref: "Handbook p.356" },
      { q: "Three resistors equal value 10Ω each: one config gives 30Ω, another gives 3.33Ω. Which is which?",
        choices: ["Series→30, Parallel→3.33", "Reversed", "Both 10", "Cannot tell"], correct: 0,
        solution: S({
          c: "The two extremes of combining $n$ equal resistors: SERIES multiplies ($nR$), PARALLEL divides ($R/n$).",
          s: [
            "<b>Step 1 — Series.</b> $3\\times10 = 30\\,\\Omega$.",
            "<b>Step 2 — Parallel.</b> $10/3 = 3.33\\,\\Omega$.",
            "<b>Step 3 — Distractor audit.</b> 'Reversed' swaps the rules; 'both 10' ignores combination."
          ],
          a: "Series → 30 Ω; parallel → 3.33 Ω.",
          v: "Sanity bounds that never fail: series result > largest element; parallel result < smallest element ✓ — a 5-second check that catches swapped formulas every time."

        }), ref: "Handbook p.356" },
      { q: "Impedance $Z = 30 + j40$. Convert to polar:",
        choices: ["$50\\angle 53.13°$", "$70\\angle 45°$", "$50\\angle 30°$", "$30\\angle 53°$"], correct: 0,
        solution: S({
          c: "Rectangular → polar: magnitude $|Z| = \\sqrt{R^{2}+X^{2}}$, angle $\\theta = \\arctan(X/R)$.",
          s: [
            "<b>Step 1 — Magnitude.</b> $\\sqrt{900+1600} = 50$.",
            "<b>Step 2 — Angle.</b> $\\arctan(40/30) = 53.13°$.",
            "<b>Step 3 — Distractor audit.</b> $70\\angle45°$ adds parts and guesses the angle; $50\\angle30°$ uses the wrong arctan; $30\\angle53°$ takes R as the magnitude."
          ],
          a: "$Z = 50\\angle53.13°\\,\\Omega$",
          v: "The 3-4-5 family at work again (×10) ✓ — and the positive angle says INDUCTIVE: current will lag by 53°, power factor 0.6, all readable from this one conversion."

        }), ref: "Handbook p.360" },
      { q: "Apparent power S in VA when $V = 240$ V RMS, $I = 10$ A RMS:",
        choices: ["$2400$ VA", "$1697$ VA", "$48{,}000$ VA", "$24$ kW"], correct: 0,
        solution: S({
          c: "Apparent power = RMS volts × RMS amps: $|S| = V_{rms}I_{rms}$, in VOLT-AMPERES — what the wiring carries regardless of power factor.",
          s: [
            "<b>Step 1 — Multiply.</b> $240\\times10 = 2400$ VA.",
            "<b>Step 2 — Distractor audit.</b> 1697 wrongly divides by √2 (the values are ALREADY RMS); 48,000 multiplies twice; '24 kW' has both wrong value and wrong UNIT — S is VA, not W."
          ],
          a: "$|S| = 2400$ VA",
          v: "Unit discipline: VA (apparent), W (real $= S\\cos\\theta$), VAR (reactive $= S\\sin\\theta$) ✓ — transformers and breakers are rated in VA/kVA precisely because heating follows current independent of pf."

        }), ref: "Handbook p.362" },
      { q: "Two impedances in series: $Z_1 = 10\\angle 0°$, $Z_2 = 10\\angle 90°$. Total:",
        choices: ["$10 + j10$ = $14.14\\angle 45°$", "$20\\angle 45°$", "$100\\angle 90°$", "$0$"], correct: 0,
        solution: S({
          c: "Series impedances ADD as complex numbers — convert polar to rectangular first, since addition lives in rectangular.",
          s: [
            "<b>Step 1 — Convert.</b> $10\\angle0° = 10$; $10\\angle90° = j10$.",
            "<b>Step 2 — Add.</b> $10 + j10$.",
            "<b>Step 3 — Back to polar.</b> $\\sqrt{200}\\angle\\arctan(1) = 14.14\\angle45°$.",
            "<b>Step 4 — Distractor audit.</b> $20\\angle45°$ adds magnitudes (the forbidden shortcut); $100\\angle90°$ MULTIPLIES; 0 would need opposite phasors."
          ],
          a: "$Z = 10 + j10 = 14.14\\angle45°\\,\\Omega$",
          v: "Bound check: vector sum (14.14) < scalar sum (20) for non-aligned parts ✓. Rule of thumb: rectangular for add/subtract, polar for multiply/divide — switching forms IS the technique."

        }), ref: "Handbook p.360" },
      { q: "Inductive impedance at 1 kHz: $L = 1$ mH. $X_L$:",
        choices: ["$\\approx 6.28\\ \\Omega$", "$1\\ \\Omega$", "$1000\\ \\Omega$", "$0.159$"], correct: 0,
        solution: S({
          c: "Inductive reactance: $X_L = \\omega L = 2\\pi fL$ — grows linearly with frequency.",
          s: [
            "<b>Step 1 — Plug in.</b> $X_L = 2\\pi(1000)(10^{-3}) = 2\\pi \\approx 6.28\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 1 Ω forgets $2\\pi f$; 1000 Ω misuses f alone; 0.159 is $1/2\\pi$ — the CAPACITIVE pattern leaking in."
          ],
          a: "$X_L \\approx 6.28\\,\\Omega$",
          v: "Scaling check: at 10 kHz it would be 62.8 Ω — ten times the frequency, ten times the reactance ✓ (linear in f, unlike $X_C \\propto 1/f$)."

        }), ref: "Handbook p.360" },
      { q: "Capacitive impedance at 1 kHz: $C = 1$ µF. $X_C$:",
        choices: ["$\\approx 159\\ \\Omega$", "$1000\\ \\Omega$", "$0.159\\ \\Omega$", "$6.28\\ \\Omega$"], correct: 0,
        solution: S({
          c: "Capacitive reactance: $X_C = \\dfrac{1}{\\omega C} = \\dfrac{1}{2\\pi fC}$ — SHRINKS as frequency rises.",
          s: [
            "<b>Step 1 — Plug in.</b> $X_C = \\dfrac{1}{2\\pi(1000)(10^{-6})} = \\dfrac{1}{6.28\\times10^{-3}} \\approx 159\\,\\Omega$.",
            "<b>Step 2 — Distractor audit.</b> 1000 echoes f; 0.159 inverts the answer; 6.28 is the INDUCTIVE twin from the previous question."
          ],
          a: "$X_C \\approx 159\\,\\Omega$",
          v: "Opposite trends to lock as a pair: $X_L\\uparrow$ with f, $X_C\\downarrow$ with f — they CROSS at resonance ($f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$), the fact every filter and tank circuit is built on ✓. (The 159 ↔ $1/2\\pi$ ≈ 0.159 numerology recurs constantly — recognize it.)"

        }), ref: "Handbook p.360" },
      { q: "AC source $v = 100\\cos\\omega t$ V, current $i = 10\\cos(\\omega t - 30°)$. Real power:",
        choices: ["$\\approx 433$ W", "$1000$ W", "$500$ W", "$250$ W"], correct: 0,
        solution: S({
          c: "Real power with a phase shift: $P = \\dfrac{V_mI_m}{2}\\cos\\theta$ — θ is the angle BETWEEN voltage and current (here 30°, current lagging).",
          s: [
            "<b>Step 1 — Read θ.</b> $i$ lags $v$ by 30°.",
            "<b>Step 2 — Apply.</b> $P = \\dfrac{100\\times10}{2}\\cos30° = 500\\times0.866 = 433$ W.",
            "<b>Step 3 — Distractor audit.</b> 1000 W uses peaks with no ÷2 and no pf; 500 W forgets the power factor; 250 W uses $\\cos60°$."
          ],
          a: "$P \\approx 433$ W",
          v: "Triangle completion: $S = 500$ VA, $Q = 500\\sin30° = 250$ VAR, and $\\sqrt{433^{2}+250^{2}} = 500$ ✓. The lag direction also labels the load: inductive (ELI) ✓."

        }), ref: "Handbook p.362" },
    ],

    // ====================== Ch 7: Linear Systems — +10 ======================
    7: [
      { q: "Laplace of $u(t)$ (unit step):",
        choices: ["$1/s$", "$1$", "$s$", "$\\delta(s)$"], correct: 0,
        solution: S({ c: "Standard.", s: ["$\\mathcal{L}\\{u(t)\\} = \\int_0^\\infty 1 \\cdot e^{-st} dt = 1/s$."], a: "$1/s$" }), ref: "Handbook p.56" },
      { q: "Laplace of $\\delta(t)$ (unit impulse):",
        choices: ["$1$", "$1/s$", "$0$", "$s$"], correct: 0,
        solution: S({ c: "Standard.", s: ["Sifting property: $\\int_0^\\infty \\delta(t) e^{-st} dt = e^0 = 1$."], a: "$1$" }), ref: "Handbook p.56" },
      { q: "Transfer function of an integrator:",
        choices: ["$H(s) = 1/s$", "$H(s) = s$", "$H(s) = 1$", "$H(s) = s^2$"], correct: 0,
        solution: S({ c: "Integration in time = division by $s$ in Laplace.", s: ["Differentiation: multiplication by $s$."], a: "$1/s$", v: "Pure integrator has infinite DC gain — accumulates indefinitely." }), ref: "Handbook p.56" },
      { q: "First-order LPF $H(s) = K/(s + a)$. Time constant:",
        choices: ["$\\tau = 1/a$", "$\\tau = a$", "$\\tau = K$", "$\\tau = a/K$"], correct: 0,
        solution: S({ c: "Standard form: $H(s) = K/(s + 1/\\tau)$. Compare.", s: ["Time constant = inverse of pole magnitude."], a: "$\\tau = 1/a$" }), ref: "Handbook p.366" },
      { q: "Bandwidth of $H(s) = 10/(s+5)$:",
        choices: ["$5$ rad/s", "$10$ rad/s", "$1$ rad/s", "$50$ rad/s"], correct: 0,
        solution: S({ c: "1st-order LPF: $-3$dB at pole frequency.", s: ["Pole at $s=-5$, so $\\omega_c = 5$ rad/s."], a: "$5$ rad/s", v: "In Hz: $5/(2\\pi) \\approx 0.796$ Hz." }), ref: "Handbook p.366" },
      { q: "Phase at DC of $H(s) = 1/(s+1)$:",
        choices: ["$0°$", "$-45°$", "$-90°$", "$90°$"], correct: 0,
        solution: S({ c: "At $\\omega = 0$: $H(0) = 1/1 = 1$ (real). Phase = 0°.", s: ["As $\\omega$ increases, phase moves toward $-90°$ (1st-order LPF)."], a: "$0°$" }), ref: "Handbook p.366" },
      { q: "Resonant frequency of $H(s) = 1/(s^2 + 0.1 s + 100)$:",
        choices: ["$10$ rad/s", "$100$ rad/s", "$1$ rad/s", "$5$ rad/s"], correct: 0,
        solution: S({ c: "Standard 2nd-order: $s^2 + 2\\zeta\\omega_n s + \\omega_n^2$. Compare: $\\omega_n^2 = 100 \\Rightarrow \\omega_n = 10$.", s: ["Damping: $2\\zeta\\omega_n = 0.1 \\Rightarrow \\zeta = 0.005$ (very lightly damped)."], a: "$10$ rad/s", v: "Low damping → sharp resonance peak. $Q = 1/(2\\zeta) = 100$." }), ref: "Handbook p.366" },
      { q: "If $H(s) = 1/[(s+1)(s+2)]$, time-domain impulse response includes:",
        choices: ["$e^{-t}$ and $e^{-2t}$ terms", "Sine and cosine", "Constant only", "Ramp"], correct: 0,
        solution: S({ c: "Each pole contributes an exponential in time. Pole at $s = -a \\to e^{-at}$.", s: ["Two distinct poles → two exponentials."], a: "$e^{-t}, e^{-2t}$", v: "Partial fractions decomposition gives the coefficients." }), ref: "Handbook p.56" },
      { q: "Group delay of $H(s) = e^{-2s}$ (pure delay):",
        choices: ["$2$ seconds (constant)", "Variable", "$1/2$ second", "$0$"], correct: 0,
        solution: S({ c: "$e^{-as}$ in Laplace = time shift by $a$ seconds. Constant group delay = $a$.", s: ["Linear phase: $\\angle H(j\\omega) = -2\\omega$.", "Group delay: $-d\\phi/d\\omega = 2$."], a: "$2$ s", v: "Ideal delay preserves waveform shape — important in audio/communications." }), ref: "Handbook p.366" },
      { q: "$H(s) = 5(s+2)/[(s+1)(s+3)]$. Number of zeros and poles:",
        choices: ["1 zero, 2 poles", "2 zeros, 2 poles", "1 zero, 1 pole", "0 zeros, 3 poles"], correct: 0,
        solution: S({ c: "Zeros: roots of numerator. Poles: roots of denominator.", s: ["Numerator $s+2$ has 1 zero at $s=-2$.", "Denominator has 2 poles at $s=-1, -3$."], a: "1 zero, 2 poles", v: "When poles > zeros, called 'proper'; ensures system is causal/realizable." }), ref: "Handbook p.365" },
    ],

    // ====================== Ch 8: Signal — +10 ======================
    8: [
      { q: "Energy of a discrete signal $x[n] = \\{1, 2, -1\\}$:",
        choices: ["$6$", "$2$", "$0$", "$3$"], correct: 0,
        solution: S({ c: "Energy: $E = \\sum |x[n]|^2$.", s: ["$1^2 + 2^2 + (-1)^2 = 1 + 4 + 1 = 6$."], a: "$6$" }), ref: "Handbook p.376" },
      { q: "Periodic signal has __ Fourier series:",
        choices: ["Discrete spectrum", "Continuous spectrum", "No spectrum", "Random spectrum"], correct: 0,
        solution: S({ c: "Periodic signals decompose into discrete harmonics — frequencies are integer multiples of fundamental.", s: ["Aperiodic signals → continuous Fourier transform."], a: "Discrete spectrum (harmonics)", v: "Square wave: contains odd harmonics 1, 3, 5, ... of fundamental." }), ref: "Handbook p.371-376" },
      { q: "Convolution in time = ___ in frequency:",
        choices: ["Multiplication", "Convolution again", "Addition", "Differentiation"], correct: 0,
        solution: S({ c: "Convolution theorem: $\\mathcal{F}\\{x * h\\} = X(\\omega) H(\\omega)$.", s: ["This is why we describe filters via $H(\\omega)$ — just multiply the input spectrum.", "Reverse: multiplication in time = convolution in frequency."], a: "Multiplication", v: "Saves computation: FFT-based fast convolution." }), ref: "Handbook p.376" },
      { q: "A 1st order HPF cutoff at 1 kHz, signal at 100 Hz, gain:",
        choices: ["$\\approx -20$ dB (attenuated)", "$0$ dB", "$+20$ dB", "$-3$ dB"], correct: 0,
        solution: S({ c: "HPF: opposite of LPF. Frequencies below cutoff attenuated at 20 dB/decade.", s: ["From 100 Hz to 1 kHz is 1 decade below cutoff: -20 dB."], a: "$-20$ dB" }), ref: "Handbook p.375" },
      { q: "Notch filter is used to:",
        choices: ["Remove a narrow band of frequencies", "Pass all frequencies", "Amplify one frequency", "Generate signals"], correct: 0,
        solution: S({ c: "Notch filter: very narrow stop band. Typical use: remove 60 Hz mains hum from audio/instrumentation.", s: ["Inverse of bandpass.", "Implemented with parallel RLC or twin-T networks."], a: "Remove specific narrow band" }), ref: "Handbook p.375" },
      { q: "Nyquist plot for an integrator $H(s) = 1/s$ starts at:",
        choices: ["$-j\\infty$ (low freq)", "Origin", "$+j\\infty$", "$1$"], correct: 0,
        solution: S({ c: "At $\\omega \\to 0^+$: $H(j\\omega) = 1/(j\\omega) \\to -j\\infty$.", s: ["At $\\omega \\to \\infty$: $H \\to 0$.", "Nyquist trace: pure imaginary axis from $-j\\infty$ to 0."], a: "$-j\\infty$", v: "Phase always $-90°$ for ideal integrator." }), ref: "Handbook p.366" },
      { q: "Quantization noise power of an n-bit ADC over full-scale range $V_{FS}$:",
        choices: ["$\\Delta^2/12$ where $\\Delta = V_{FS}/2^n$", "$\\Delta$", "$V_{FS}/n$", "$2^n$"], correct: 0,
        solution: S({ c: "Uniform quantization: error uniformly distributed over $\\pm \\Delta/2$. Variance = $\\Delta^2/12$.", s: ["For full-scale sinusoid signal of variance $V_{FS}^2/8$: SQNR ≈ $1.5 \\cdot 2^{2n}$ ≈ $6.02n + 1.76$ dB."], a: "$\\Delta^2/12$" }), ref: "Handbook p.375" },
      { q: "Sample-and-hold output between samples is:",
        choices: ["Constant (held value)", "Linearly interpolated", "Zero", "Smoothed"], correct: 0,
        solution: S({ c: "ZOH (zero-order hold): holds each sample's value until the next sample.", s: ["Effect: introduces $\\text{sinc}$-shape frequency response.", "Followed by reconstruction filter to smooth."], a: "Constant value" }), ref: "Handbook p.375" },
      { q: "FIR vs IIR filter primary difference:",
        choices: ["FIR has finite impulse response; IIR has infinite", "Same thing", "IIR is non-causal", "FIR is unstable"], correct: 0,
        solution: S({ c: "FIR: output depends only on inputs (feedforward). IIR: output depends on past outputs (feedback).", s: ["FIR: always stable, linear phase possible, more taps for same selectivity.", "IIR: efficient (fewer coefficients), but stability concerns."], a: "FIR finite, IIR infinite response" }), ref: "Handbook p.376" },
      { q: "Discrete-time signal $x[n]$ shifted: $x[n - 2]$ means:",
        choices: ["Delayed by 2 samples", "Advanced by 2", "Doubled", "Halved"], correct: 0,
        solution: S({ c: "Subtraction in index = delay. $x[n-k]$ is $x$ delayed by $k$ samples.", s: ["Z-transform: multiplication by $z^{-k}$.", "$x[n+k]$ would be advance."], a: "Delayed by 2 samples" }), ref: "Handbook p.376" },
    ],

    // ====================== Ch 9: Electronics — +20 ======================
    9: [
      { q: "Common-mode gain of an ideal op-amp:",
        choices: ["Zero", "$\\infty$", "$1$", "Depends"], correct: 0,
        solution: S({ c: "Ideal op-amp: infinite differential gain, ZERO common-mode gain → CMRR = ∞.", s: ["Real op-amps have small but non-zero common-mode gain."], a: "Zero" }), ref: "Handbook p.380" },
      { q: "Slew rate of $1$ V/µs: max frequency for full-scale 10V signal:",
        choices: ["$\\approx 15.9$ kHz", "$1$ MHz", "$100$ Hz", "$10$ MHz"], correct: 0,
        solution: S({ c: "Max sinusoid frequency: $f_{max} = \\text{SR}/(2\\pi V_{peak})$.", s: ["$SR = 10^6$ V/s, $V_{peak} = 10$ V.", "$f_{max} = 10^6/(2\\pi \\cdot 10) = 15915$ Hz $\\approx 15.9$ kHz."], a: "$\\approx 15.9$ kHz", v: "Above this, output cannot keep up with input — slew-rate distortion (triangulation)." }), ref: "Handbook p.380" },
      { q: "BJT $\\beta = 50$. $I_C = 100$ mA. $I_B$:",
        choices: ["$2$ mA", "$5000$ mA", "$50$ mA", "$0.05$ mA"], correct: 0,
        solution: S({ c: "$I_B = I_C/\\beta$.", s: ["$100/50 = 2$ mA."], a: "$2$ mA" }), ref: "Handbook p.384" },
      { q: "$V_{CE,sat}$ of typical BJT in saturation:",
        choices: ["$\\approx 0.2$ V", "$0.7$ V", "$5$ V", "$0$ V"], correct: 0,
        solution: S({ c: "Saturated BJT: low $V_{CE}$, both junctions forward-biased.", s: ["Memorize: $V_{CE,sat} \\approx 0.2$ V."], a: "$0.2$ V" }), ref: "Handbook p.384" },
      { q: "Class B audio amp: efficiency limit:",
        choices: ["$\\approx 78.5\\%$ ($\\pi/4$)", "$50\\%$", "$25\\%$", "$100\\%$"], correct: 0,
        solution: S({ c: "Class B: two transistors each conduct 180°. Theoretical max efficiency = $\\pi/4 \\approx 78.5\\%$.", s: ["Real Class B: 60-70% due to losses.", "Class AB: slightly less efficient but eliminates crossover distortion."], a: "$\\approx 78.5\\%$" }), ref: "Handbook p.384" },
      { q: "Op-amp comparator output:",
        choices: ["Saturated high or low (no feedback)", "Linear", "Zero", "Random"], correct: 0,
        solution: S({ c: "Comparator: op-amp without feedback. Tiny input difference → output rails (saturates).", s: ["$v_+ > v_-$: output = $+V_{sat}$.", "$v_+ < v_-$: output = $-V_{sat}$.", "Used in: zero-crossing detector, peak detector, A/D conversion."], a: "Saturated rails" }), ref: "Handbook p.380" },
      { q: "MOSFET threshold voltage $V_{th}$ for nMOS in enhancement:",
        choices: ["Positive (typically 0.5-2 V)", "Negative", "Zero", "$10$ V"], correct: 0,
        solution: S({ c: "Enhancement nMOS: $V_{th} > 0$. Needs positive gate voltage to form channel.", s: ["pMOS enhancement: $V_{th} < 0$.", "Depletion mode: opposite signs."], a: "Positive (0.5-2 V typical)" }), ref: "Handbook p.386" },
      { q: "Op-amp $A_{OL} = 10^5$, $A_{CL} = 100$. Loop gain $A\\beta$:",
        choices: ["$10^3 - 1 \\approx 10^3$", "$10^5$", "$100$", "$10^7$"], correct: 0,
        solution: S({ c: "$A_{CL} = A_{OL}/(1 + A\\beta)$. Solve: $A\\beta = A_{OL}/A_{CL} - 1 \\approx 10^5/100 - 1 = 999$.", s: ["Equivalently: $1/\\beta \\approx 100$ (closed-loop gain)."], a: "$\\approx 10^3$" }), ref: "Handbook p.380" },
      { q: "Increasing feedback ($\\beta$ larger) does what to bandwidth?",
        choices: ["Widens bandwidth (gain-BW tradeoff)", "Narrows", "No effect", "Causes oscillation"], correct: 0,
        solution: S({ c: "Gain-bandwidth product is constant. More feedback (smaller closed-loop gain) → larger BW.", s: ["$f_{cl} \\times A_{cl} = $ GBW.", "Reducing gain extends usable frequency range."], a: "Widens BW" }), ref: "Handbook p.380" },
      { q: "Schottky diode advantage over Si diode:",
        choices: ["Lower forward drop (~0.3 V)", "Higher voltage", "Slower switching", "Cheaper always"], correct: 0,
        solution: S({ c: "Schottky: metal-semiconductor junction. Lower $V_F$ (~0.3 V vs 0.7 V), faster switching.", s: ["Used in: rectifiers (lower loss), high-frequency switching, RF detection."], a: "Lower $V_F$ ≈ 0.3 V" }), ref: "Handbook p.383" },
      { q: "Power dissipation in a switching MOSFET:",
        choices: ["$P_{cond} = I^2 R_{ds,on}$ + switching losses", "$IV$ always", "Zero in saturation", "$V_{ds}^2/R$"], correct: 0,
        solution: S({ c: "Switching losses: $P_{sw} = \\frac{1}{2} V_{ds} I (t_{rise} + t_{fall}) f_{sw}$. Plus conduction $I^2 R_{ds,on}$.", s: ["Hard switching: significant power lost in transitions.", "Soft switching (zero-voltage/current): reduces losses."], a: "Conduction + switching losses" }), ref: "Handbook p.386" },
      { q: "Output impedance of an emitter follower:",
        choices: ["Very low (≈ $r_e$ + $R_S/\\beta$)", "Very high", "$R_C$", "Zero exactly"], correct: 0,
        solution: S({ c: "Emitter follower acts as buffer: high $Z_{in}$, low $Z_{out}$.", s: ["$Z_{out} \\approx r_e + R_{source}/(\\beta+1)$.", "Typical: a few ohms to tens of ohms."], a: "Very low" }), ref: "Handbook p.384" },
      { q: "Two transistors in cascode configuration provide:",
        choices: ["High gain + high bandwidth (Miller reduced)", "Lower gain", "Just isolation", "Lower input Z"], correct: 0,
        solution: S({ c: "Cascode = CE + CB stack. CB stage isolates output from input — Miller capacitance impact reduced.", s: ["Same gain as CE alone but much wider bandwidth.", "Common in RF amplifiers and op-amp internals."], a: "High gain + wide BW" }), ref: "Handbook p.384" },
      { q: "An op-amp is configured as integrator. Input is square wave. Output is:",
        choices: ["Triangle wave", "Square wave inverted", "Sine wave", "Zero"], correct: 0,
        solution: S({ c: "Integral of square wave (constant during each half) is linear ramp → triangle.", s: ["Conversely: differentiator of triangle would give square."], a: "Triangle wave" }), ref: "Handbook p.380" },
      { q: "Voltage regulator IC like 7805 has minimum input voltage of about:",
        choices: ["$\\sim 7$ V (dropout 2 V above output)", "$5$ V", "$12$ V", "$0$ V"], correct: 0,
        solution: S({ c: "Linear regulators need 'dropout voltage' = $V_{in,min} - V_{out}$.", s: ["7805: standard ~2 V dropout, so $V_{in} \\ge 7$ V.", "LDO variants: 0.3-0.5 V dropout."], a: "$\\sim 7$ V" }), ref: "Handbook p.383" },
      { q: "Common-collector (emitter-follower): voltage gain ≈",
        choices: ["$\\approx 1$ (just under)", "$-\\beta$", "$+\\beta R_C$", "$0$"], correct: 0,
        solution: S({ c: "CC: input at base, output at emitter, follows input.", s: ["$A_v = R_E/(R_E + r_e) \\approx 1$ when $R_E \\gg r_e$."], a: "$\\approx 1$" }), ref: "Handbook p.384" },
      { q: "BJT amplifier with low input impedance:",
        choices: ["Common-Base (CB)", "Common-Emitter", "Common-Collector", "Class A"], correct: 0,
        solution: S({ c: "CB has $Z_{in} \\approx r_e \\approx 25\\ \\Omega/I_E$ (mA). Very low.", s: ["CE: $\\beta r_e$ medium.", "CC (emitter follower): $\\beta R_E$ high."], a: "Common-Base", v: "CB used in RF for matching to 50-ohm transmission lines." }), ref: "Handbook p.384" },
      { q: "Op-amp instrumentation amplifier: 3 op-amps with specific R network. Used for:",
        choices: ["High-CMRR differential amplification", "Logarithmic conversion", "Filtering", "Comparators"], correct: 0,
        solution: S({ c: "INA: very high CMRR (>100 dB), high $Z_{in}$, single gain resistor.", s: ["Used in: bridge sensors (strain gauges, thermocouples), medical instrumentation (ECG).", "Common ICs: INA125, AD620."], a: "High-CMRR diff amp" }), ref: "Handbook p.380" },
      { q: "Voltage-controlled oscillator (VCO) frequency is proportional to:",
        choices: ["Control voltage (linearly)", "Power supply", "Temperature", "Capacitor charge"], correct: 0,
        solution: S({ c: "VCO: output frequency varies linearly with input control voltage.", s: ["Key element of PLL (phase-locked loop).", "Used in FM modulation, frequency synthesis, clock generation."], a: "Control voltage" }), ref: "Handbook p.383" },
      { q: "Pulse-width modulation (PWM) duty cycle:",
        choices: ["Ratio of ON time to total period", "Frequency", "Amplitude", "Phase"], correct: 0,
        solution: S({ c: "Duty cycle = $t_{on}/T$ (0 to 100%).", s: ["50% duty = symmetric square wave.", "Used in motor speed control, switching power supplies, LED dimming."], a: "$t_{on}/T$" }), ref: "Handbook p.383" },
    ],

    // ====================== Ch 10: Power — +15 ======================
    10: [
      { q: "120 V single phase, 1500 W resistive load. Current:",
        choices: ["$12.5$ A", "$1500$ A", "$0.08$ A", "$180$ A"], correct: 0,
        solution: S({ c: "$P = VI$ for resistive (pf=1).", s: ["$I = P/V = 1500/120 = 12.5$ A."], a: "$12.5$ A", v: "Hair dryer or coffee maker — typical 1500W appliance." }), ref: "Handbook p.362" },
      { q: "3-phase delta-connected source with $V_{LL}=480$ V. Each phase voltage:",
        choices: ["$480$ V", "$277$ V", "$240$ V", "$830$ V"], correct: 0,
        solution: S({ c: "Delta: $V_{phase} = V_{LL}$.", s: ["Delta connection has phase voltage = line voltage."], a: "$480$ V" }), ref: "Handbook p.363" },
      { q: "Power dissipated in line resistance: 3-phase 120 A line current, 0.1 Ω per line:",
        choices: ["$\\approx 4320$ W (sum of 3 lines)", "$\\approx 1440$ W (one line)", "$\\approx 14.4$ W", "Zero"], correct: 0,
        solution: S({ c: "Each line: $P = I^2 R$. Three lines.", s: ["Per line: $120^2 \\cdot 0.1 = 1440$ W.", "Three lines: $3 \\cdot 1440 = 4320$ W."], a: "$\\approx 4320$ W", v: "Why higher voltage → lower current → lower I²R losses." }), ref: "Handbook p.363" },
      { q: "Single-phase 240 V/120 V split-phase service is common in:",
        choices: ["US residential", "European residential", "Industrial only", "Aviation"], correct: 0,
        solution: S({ c: "US homes: 240V split into two 120V hot legs by center-tapped transformer.", s: ["240V for high-power loads (dryer, range, AC).", "120V for normal outlets, lights."], a: "US residential" }), ref: "Handbook p.363" },
      { q: "Capacitor bank used for PF correction is connected in:",
        choices: ["Parallel with load", "Series with load", "Series with source", "Replaces load"], correct: 0,
        solution: S({ c: "Shunt capacitors provide leading VAR to offset lagging VAR of inductive loads.", s: ["Improves PF without affecting load operation.", "Sometimes switched in steps via contactors."], a: "Parallel" }), ref: "Handbook p.363" },
      { q: "Star-Delta motor starter purpose:",
        choices: ["Reduce starting current (~1/3 of direct-online)", "Increase starting torque", "Speed control", "Reverse rotation"], correct: 0,
        solution: S({ c: "Starts in Y (lower phase voltage → lower inrush), switches to Δ (full power) once near speed.", s: ["Reduces starting current to ~1/3 of DOL.", "Starting torque also reduced to 1/3 — only suitable for light loads at start."], a: "Reduce starting current" }), ref: "Handbook p.365" },
      { q: "Open-circuit test of transformer measures:",
        choices: ["Core (iron) losses primarily", "Winding (copper) losses", "Insulation", "Voltage ratio only"], correct: 0,
        solution: S({ c: "OC test: rated V on one side, other open. Only excitation current flows → core losses dominate.", s: ["Short-circuit test: low V, rated I, primarily copper losses.", "Together: characterize the transformer model."], a: "Core losses" }), ref: "Handbook p.364" },
      { q: "Per-unit (pu) impedance of a transformer is the same on both sides because:",
        choices: ["Base impedance also transforms by $a^2$", "Real impedance is the same", "Both sides have same windings", "Coincidence"], correct: 0,
        solution: S({ c: "Actual Z transforms by $a^2$. Base Z also transforms by $a^2$ (since $Z_{base} = V^2/S$ and V scales by $a$). Ratio = same.", s: ["Why per-unit is preferred for multi-voltage systems — uniform numbers across all parts."], a: "Base also scales" }), ref: "Handbook p.363-364" },
      { q: "Synchronous generator frequency depends on:",
        choices: ["Rotor speed and pole count", "Voltage only", "Load only", "Stator winding"], correct: 0,
        solution: S({ c: "$f = (poles \\cdot rpm)/120$ for synchronous machines.", s: ["Constant speed → constant frequency.", "Grid-tie requires synchronization (frequency, voltage, phase match)."], a: "Speed × poles" }), ref: "Handbook p.365" },
      { q: "DC machine commutator function:",
        choices: ["Converts AC in armature to DC at brushes (or vice versa)", "Generates field", "Bearings", "Cooling"], correct: 0,
        solution: S({ c: "Rotating armature generates AC; commutator reverses connections to brushes every half-rotation → unidirectional DC at brushes.", s: ["In DC motor: brush-fed DC current is commutated → torque in same direction."], a: "AC↔DC rectification" }), ref: "Handbook p.365" },
      { q: "Three-phase induction motor reversal:",
        choices: ["Swap any two of the three lines", "Reverse polarity", "Change frequency", "Reduce voltage"], correct: 0,
        solution: S({ c: "Swapping two phases reverses the rotating magnetic field direction → motor reverses.", s: ["Single-phase induction: must reconfigure capacitor or use start winding reversal."], a: "Swap two phases" }), ref: "Handbook p.365" },
      { q: "Power factor of pure inductor:",
        choices: ["$0$ (lagging)", "$1$", "$0.5$", "$-1$"], correct: 0,
        solution: S({ c: "Pure inductor: V leads I by 90°. $\\cos 90° = 0$.", s: ["All power is reactive, none real."], a: "$0$ lagging" }), ref: "Handbook p.362" },
      { q: "Wye-connected load: line voltage 480V, line current 25 A, pf 0.85. Total real power:",
        choices: ["$\\approx 17.66$ kW", "$\\approx 20$ kW", "$\\approx 12$ kW", "$\\approx 8.4$ kW"], correct: 0,
        solution: S({ c: "$P = \\sqrt{3} V_{LL} I_L \\cos\\theta$.", s: ["$\\sqrt{3} \\cdot 480 \\cdot 25 = 20{,}785$ VA.", "$P = 20785 \\cdot 0.85 = 17{,}667$ W."], a: "$\\approx 17.67$ kW" }), ref: "Handbook p.363" },
      { q: "Voltage drop across transmission line = ?",
        choices: ["$I \\cdot (R + jX)$", "$I \\cdot R$", "$I \\cdot X$", "$IL$"], correct: 0,
        solution: S({ c: "Line has resistance and inductive reactance. Drop is complex.", s: ["Short line: $\\Delta V = I \\cdot Z_{line}$ approximately.", "Long line: distributed parameters; use ABCD model."], a: "$I(R + jX)$" }), ref: "Handbook p.363" },
      { q: "Transformer rated 100 kVA, 13.8 kV / 480 V. Short-circuit current (primary, rated impedance 5%):",
        choices: ["$\\approx 145$ A (20× rated)", "Rated 7.25 A", "$\\approx 7.25$ A", "$10$ A"], correct: 0,
        solution: S({ c: "Short-circuit current $\\approx I_{rated}/Z_{pu}$.", s: ["$I_{rated} = 100000/13800 = 7.25$ A.", "$I_{SC} = 7.25/0.05 = 145$ A (20× rated)."], a: "$\\approx 145$ A", v: "Why fault current calculations matter — selecting protective devices that can interrupt these currents safely." }), ref: "Handbook p.364" },
    ],

    // ====================== Ch 11: EM — +8 ======================
    11: [
      { q: "Electrostatic force between two 1 C charges 1 m apart:",
        choices: ["$\\approx 9 \\times 10^9$ N (HUGE)", "$1$ N", "$10^{-9}$ N", "$8.99$ N"], correct: 0,
        solution: S({ c: "Coulomb: $F = k_e q_1 q_2/r^2$.", s: ["$F = 8.99\\times 10^9 \\cdot 1 \\cdot 1 / 1^2 = 8.99\\times 10^9$ N."], a: "$\\sim 9\\times 10^9$ N", v: "1 C is enormous — typical charges are µC or smaller." }), ref: "Handbook p.355" },
      { q: "Electric field of a point charge at distance $r$:",
        choices: ["$E = k_e q/r^2$", "$E = k_e q/r$", "$E = q r$", "$E = qr^2$"], correct: 0,
        solution: S({ c: "From Coulomb force: $E = F/q_{test} = k_e q/r^2$.", s: ["Falls off as $1/r^2$ — same as gravity.", "Line charge: $E \\propto 1/r$. Plane charge: $E$ constant."], a: "$k_e q/r^2$" }), ref: "Handbook p.355" },
      { q: "Voltage between parallel plates with E-field $E$ and separation $d$:",
        choices: ["$V = Ed$", "$V = E/d$", "$V = Ed^2$", "$V = E + d$"], correct: 0,
        solution: S({ c: "Uniform field: $V = \\int E \\, dx = Ed$ for distance $d$.", s: ["$E = V/d$ inversely."], a: "$V = Ed$" }), ref: "Handbook p.355" },
      { q: "Faraday's law: induced EMF =",
        choices: ["$-d\\Phi/dt$", "$+d\\Phi/dt$", "$\\Phi$", "$1/\\Phi$"], correct: 0,
        solution: S({ c: "EMF = $-d\\Phi_B/dt$. Negative sign (Lenz's law): induced current opposes the flux change.", s: ["Time-varying flux through loop → EMF around loop."], a: "$-d\\Phi/dt$", v: "Generators, transformers, induction motors all rely on this." }), ref: "Handbook p.355" },
      { q: "Inductance of a solenoid: $N = 200$, $l = 10$ cm, $A = 5$ cm², $\\mu_r = 1$:",
        choices: ["$\\approx 25\\ \\mu$H", "$25$ mH", "$2.5$ H", "$250$ µH"], correct: 0,
        solution: S({ c: "$L = \\mu_0 \\mu_r N^2 A/l$.", s: ["$L = (4\\pi\\times 10^{-7})(200)^2 (5\\times 10^{-4})/(0.1)$.", "$= (4\\pi\\times 10^{-7})(40000)(0.005) = 4\\pi\\times 10^{-5} \\cdot 0.1 \\approx 2.51\\times 10^{-5}$ H = 25 µH."], a: "$\\approx 25$ µH" }), ref: "Handbook p.355" },
      { q: "EM wave impedance of free space:",
        choices: ["$\\approx 377\\ \\Omega$", "$50\\ \\Omega$", "$1\\ \\Omega$", "$0$"], correct: 0,
        solution: S({ c: "$\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} \\approx 377\\ \\Omega$ (or $120\\pi$).", s: ["Memorized value.", "In dielectric: $\\eta = \\eta_0/\\sqrt{\\varepsilon_r}$ (for non-magnetic)."], a: "$\\approx 377\\ \\Omega$" }), ref: "Handbook p.368" },
      { q: "Wavelength of microwave at 2.45 GHz (microwave oven):",
        choices: ["$\\approx 12.2$ cm", "$30$ cm", "$1$ m", "$1$ mm"], correct: 0,
        solution: S({ c: "$\\lambda = c/f$.", s: ["$\\lambda = 3\\times 10^8/2.45\\times 10^9 = 0.1224$ m = 12.24 cm."], a: "$\\approx 12.2$ cm", v: "Why microwave ovens have hot/cold spots ~6 cm apart (half-wavelength standing waves)." }), ref: "Handbook p.368" },
      { q: "For a TEM wave in dielectric ($\\varepsilon_r = 4$): speed:",
        choices: ["$\\approx 1.5\\times 10^8$ m/s", "$3\\times 10^8$ m/s", "$3\\times 10^8/4$", "$3\\times 10^8 \\cdot 4$"], correct: 0,
        solution: S({ c: "$v = c/\\sqrt{\\varepsilon_r}$ (non-magnetic).", s: ["$v = c/2 = 1.5\\times 10^8$ m/s."], a: "$\\approx 1.5\\times 10^8$ m/s", v: "Coax with PE dielectric ($\\varepsilon_r \\approx 2.25$): velocity factor ~0.66." }), ref: "Handbook p.368" },
    ],

    // ====================== Ch 12: Control — +12 ======================
    12: [
      { q: "Open-loop step response of $G(s) = 1/(s+2)$:",
        choices: ["$(1 - e^{-2t})/2 \\cdot u(t)$", "$e^{-2t}$", "Constant 0.5", "Sine wave"], correct: 0,
        solution: S({ c: "Y(s) = G(s)/s. Partial fractions.", s: ["$Y(s) = 1/[s(s+2)] = (1/2)[1/s - 1/(s+2)]$.", "Inverse: $(1/2)(1 - e^{-2t})$."], a: "$(1-e^{-2t})/2$", v: "Final value 0.5 = DC gain × step amplitude." }), ref: "Handbook p.366" },
      { q: "Steady-state error for type-2 system to ramp input:",
        choices: ["$0$", "$1/K_v$", "Infinite", "$1/K_p$"], correct: 0,
        solution: S({ c: "Type-2 has 2 integrators → handles ramp perfectly.", s: ["Type-0 step: $1/(1+K_p)$. Type-1 step: 0; ramp: $1/K_v$. Type-2 ramp: 0; parabola: $1/K_a$."], a: "$0$" }), ref: "Handbook p.366" },
      { q: "Maximum overshoot $M_p$ for $\\zeta = 0.6$:",
        choices: ["$\\approx 9.5\\%$", "$0\\%$", "$50\\%$", "$25\\%$"], correct: 0,
        solution: S({ c: "$M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$.", s: ["$\\zeta = 0.6$: $\\sqrt{1-0.36} = 0.8$. $\\pi(0.6/0.8) = 2.36$. $e^{-2.36} \\approx 0.0948$."], a: "$\\approx 9.5\\%$", v: "$\\zeta=0.7$ → ~4.6%. $\\zeta=0.5$ → ~16%. Linear in pre-exp expression but exponential overall." }), ref: "Handbook p.366" },
      { q: "Pole at origin in open-loop transfer means:",
        choices: ["Type-1 system (integrator)", "Type-0", "Unstable", "Resonant"], correct: 0,
        solution: S({ c: "Number of $s=0$ poles in open loop = system type.", s: ["Affects steady-state error formulas."], a: "Type-1" }), ref: "Handbook p.366" },
      { q: "Routh array first column has all positive entries. Conclusion:",
        choices: ["All poles in LHP — stable", "Unstable", "Marginal", "Cannot tell"], correct: 0,
        solution: S({ c: "No sign changes → no RHP poles → stable.", s: ["Special cases: row of zeros (marginal) or zero in first column (auxiliary equation)."], a: "Stable" }), ref: "Handbook p.365" },
      { q: "Lead compensator pole-zero relationship:",
        choices: ["Zero closer to origin than pole", "Pole closer to origin", "Pole = zero", "Both at origin"], correct: 0,
        solution: S({ c: "Lead: $(s+z)/(s+p)$ with $z < p$. Adds positive phase between $z$ and $p$.", s: ["Lag: $z > p$. Lead-lag: combines both."], a: "$z < p$" }), ref: "Handbook p.366" },
      { q: "PID controller derivative term effect on:",
        choices: ["Adds damping, predicts future, but amplifies noise", "Eliminates SS error", "Increases gain only", "No effect"], correct: 0,
        solution: S({ c: "$K_d \\cdot de/dt$: responds to rate of error change.", s: ["Adds damping: anticipates overshoot.", "Drawback: amplifies high-freq noise.", "Often filtered (PID with derivative filter)."], a: "Adds damping" }), ref: "Handbook p.366" },
      { q: "A system has $\\omega_n = 5$ rad/s, $\\zeta = 0.5$. Damped frequency:",
        choices: ["$\\approx 4.33$ rad/s", "$5$ rad/s", "$2.5$ rad/s", "$10$ rad/s"], correct: 0,
        solution: S({ c: "$\\omega_d = \\omega_n \\sqrt{1-\\zeta^2}$.", s: ["$\\sqrt{1-0.25} = 0.866$.", "$\\omega_d = 5 \\cdot 0.866 = 4.33$ rad/s."], a: "$\\approx 4.33$ rad/s" }), ref: "Handbook p.366" },
      { q: "Bode plot magnitude slope of pure $K$ (gain only):",
        choices: ["$0$ dB/dec (flat)", "$-20$ dB/dec", "$+20$ dB/dec", "Variable"], correct: 0,
        solution: S({ c: "Constant in $s$ → no slope in Bode.", s: ["Phase contribution: 0° (assuming K > 0)."], a: "0 dB/dec" }), ref: "Handbook p.366" },
      { q: "Differentiator $H(s) = s$: Bode magnitude:",
        choices: ["$+20$ dB/dec (rising)", "Flat", "$-20$ dB/dec", "Constant"], correct: 0,
        solution: S({ c: "$|H(j\\omega)| = \\omega$. dB: $20\\log\\omega$. Slope: 20 dB/dec.", s: ["Phase: $+90°$ (constant)."], a: "+20 dB/dec" }), ref: "Handbook p.366" },
      { q: "Closed-loop poles all in LHP. Conclusion:",
        choices: ["Closed-loop stable", "Open loop unstable", "Marginal", "Insufficient info"], correct: 0,
        solution: S({ c: "Stability of closed-loop is determined by closed-loop pole locations.", s: ["Open-loop instability doesn't preclude closed-loop stability — feedback can stabilize."], a: "Stable" }), ref: "Handbook p.365" },
      { q: "Block diagram: input $X$ → $G_1$ → summing junction (- feedback from $H_1$) → $G_2$ → output $Y$. Transfer function:",
        choices: ["$Y/X = G_1 G_2/(1 + G_1 H_1)$ ... depends on where feedback taps", "Always $G_1 G_2$", "Always $1/G$", "$G + H$"], correct: 0,
        solution: S({ c: "Use block diagram reduction rules. Negative feedback around the front part: $G_1/(1+G_1 H_1)$. Then series with $G_2$.", s: ["Depends on exact topology. The given structure: $G_1/(1+G_1 H_1) \\cdot G_2$."], a: "Depends; using given: $G_1 G_2/(1+G_1 H_1)$" }), ref: "Handbook p.365" },
    ],

    // ====================== Ch 13: Comm — +10 ======================
    13: [
      { q: "PCM telephone channel: 8000 samples/s × 8 bits = ",
        choices: ["$64$ kbps", "$8$ kbps", "$1$ Mbps", "$56$ kbps"], correct: 0,
        solution: S({ c: "Bit rate = samples/s × bits/sample.", s: ["$8000 \\cdot 8 = 64{,}000$ bps = 64 kbps."], a: "$64$ kbps" }), ref: "Handbook p.371" },
      { q: "Hartley channel capacity for noiseless 4 kHz channel, 8 levels:",
        choices: ["$24$ kbps", "$8$ kbps", "$32$ kbps", "$4$ kbps"], correct: 0,
        solution: S({ c: "Hartley: $C = 2B \\log_2 M$.", s: ["$C = 2(4000) \\log_2 8 = 8000 \\cdot 3 = 24000$ bps."], a: "$24$ kbps" }), ref: "Handbook p.371" },
      { q: "AM with carrier 1 MHz, modulation index $m = 1$ (full modulation):",
        choices: ["Sideband power equals 1/3 of total", "All power in carrier", "All in sidebands", "Equal split"], correct: 0,
        solution: S({ c: "$\\eta = m^2/(2+m^2) = 1/3$ for m=1.", s: ["Each sideband carries 1/6 of total power."], a: "1/3 of total in sidebands", v: "Why suppressed-carrier AM (DSB-SC) is more efficient." }), ref: "Handbook p.371" },
      { q: "Bandwidth of QPSK modulating bit stream at $R_b$ bps:",
        choices: ["$\\approx R_b/2$", "$\\approx R_b$", "$2 R_b$", "$4 R_b$"], correct: 0,
        solution: S({ c: "QPSK: 2 bits/symbol, symbol rate $R_b/2$. Bandwidth $\\approx$ symbol rate.", s: ["BPSK: BW $\\approx R_b$.", "16-QAM: BW $\\approx R_b/4$."], a: "$R_b/2$" }), ref: "Handbook p.371" },
      { q: "Hamming distance between 10110 and 11011:",
        choices: ["$3$", "$2$", "$5$", "$0$"], correct: 0,
        solution: S({ c: "Hamming distance: number of bit positions that differ.", s: ["10110", "11011", "Diff: pos 2, 4, 5 → 3 differences."], a: "$3$", v: "Codes with min Hamming distance $d$ can detect $d-1$ errors and correct $\\lfloor(d-1)/2\\rfloor$." }), ref: "Handbook p.371" },
      { q: "ASK modulation efficiency:",
        choices: ["Poor — wastes power in carrier", "Best", "Same as FSK", "Linear with $m$"], correct: 0,
        solution: S({ c: "ASK varies amplitude → wastes carrier power when transmitting 0 (or vice versa).", s: ["FSK / PSK have constant envelope — more efficient."], a: "Poor" }), ref: "Handbook p.371" },
      { q: "Why use modulation? Primary reason:",
        choices: ["Shift to higher frequency for antenna size, multiplexing", "Reduce signal power", "Increase bandwidth", "Smaller signals"], correct: 0,
        solution: S({ c: "Modulation: shifts baseband to carrier frequency. Allows: (1) practical antenna size, (2) FDM channel sharing, (3) better propagation at certain frequencies.", s: ["Antenna efficient size ≈ λ/4. At low freq, antennas would be impossibly large."], a: "Antenna size, multiplexing" }), ref: "Handbook p.371" },
      { q: "Shannon capacity: $C = B\\log_2(1 + S/N)$. Doubling B with same SNR:",
        choices: ["Doubles C", "Quadruples C", "Halves C", "No effect"], correct: 0,
        solution: S({ c: "Linear in B.", s: ["Doubling B → doubles C (SNR unchanged)."], a: "Doubles" }), ref: "Handbook p.371" },
      { q: "Manchester encoding: how many transitions per bit?",
        choices: ["Exactly 1 (mid-bit)", "0", "2", "Variable"], correct: 0,
        solution: S({ c: "Manchester: each bit period has transition in middle (encoding 0 or 1 by direction).", s: ["Pro: self-clocking, no DC offset.", "Con: doubles signal bandwidth."], a: "1 mid-bit transition" }), ref: "Handbook p.371" },
      { q: "TDMA, FDMA, CDMA differ by:",
        choices: ["Time slots, frequency bands, code separation", "Same thing", "Amplitude levels", "Phase angles"], correct: 0,
        solution: S({ c: "Multiple access methods for sharing channel.", s: ["TDMA: time slots (GSM 2G).", "FDMA: frequency bands (FM radio, AMPS).", "CDMA: spreading codes (CDMA2000, 3G)."], a: "Time, freq, code" }), ref: "Handbook p.371" },
    ],

    // ====================== Ch 14: Networks — +8 ======================
    14: [
      { q: "$/16$ subnet has __ usable hosts:",
        choices: ["$65{,}534$", "$65{,}536$", "$16{,}382$", "$254$"], correct: 0,
        solution: S({ c: "Host bits = 32 - 16 = 16. Total = $2^{16}$, usable = total - 2.", s: ["$65536 - 2 = 65534$."], a: "$65{,}534$" }), ref: "Handbook p.393" },
      { q: "Loopback IPv4 address:",
        choices: ["$127.0.0.1$", "$0.0.0.0$", "$255.255.255.255$", "$10.0.0.1$"], correct: 0,
        solution: S({ c: "Loopback: refers to local host. $127.0.0.0/8$ all reserved for loopback.", s: ["Doesn't leave the host's network stack.", "IPv6 loopback: ::1."], a: "$127.0.0.1$" }), ref: "Handbook p.394" },
      { q: "MAC address bits:",
        choices: ["$48$", "$32$", "$64$", "$128$"], correct: 0,
        solution: S({ c: "Standard IEEE MAC: 48 bits, usually 6 hex pairs.", s: ["First 3 bytes: OUI (organization).", "Last 3 bytes: vendor-assigned."], a: "$48$ bits" }), ref: "Handbook p.399" },
      { q: "Network packet routing decision is made at:",
        choices: ["L3 (Network) — IP", "L2 (Data link)", "L4 (Transport)", "L7 (Application)"], correct: 0,
        solution: S({ c: "Routers use IP (L3) to forward across networks.", s: ["Within local network: L2 (switches use MAC)."], a: "L3" }), ref: "Handbook p.399" },
      { q: "Default web port for HTTPS:",
        choices: ["$443$", "$80$", "$22$", "$25$"], correct: 0,
        solution: S({ c: "HTTPS = HTTP over TLS, standard on port 443.", s: ["HTTP: 80 (unencrypted)."], a: "$443$" }), ref: "Handbook p.394" },
      { q: "Subnet mask $255.255.255.0$ corresponds to CIDR:",
        choices: ["$/24$", "$/16$", "$/8$", "$/32$"], correct: 0,
        solution: S({ c: "$255 = 11111111_2 = 8$ ones each octet. Three full octets = 24 bits.", s: ["$255.255.255.0 = /24$."], a: "$/24$" }), ref: "Handbook p.393" },
      { q: "TCP 3-way handshake messages:",
        choices: ["SYN, SYN-ACK, ACK", "SYN, ACK, FIN", "GET, OK, BYE", "REQ, RESP, ACK"], correct: 0,
        solution: S({ c: "TCP connection: client SYN → server SYN-ACK → client ACK.", s: ["After handshake: data transfer with sequence numbers + ACKs."], a: "SYN, SYN-ACK, ACK" }), ref: "Handbook p.400" },
      { q: "Wireshark is:",
        choices: ["Network packet analyzer/sniffer", "Firewall", "VPN", "Router"], correct: 0,
        solution: S({ c: "Wireshark captures and dissects network traffic. Open-source.", s: ["Used for debugging, security analysis, learning protocols."], a: "Packet sniffer" }), ref: "Handbook p.412" },
    ],

    // ====================== Ch 15: Digital — +12 ======================
    15: [
      { q: "Binary 10001 in decimal:",
        choices: ["$17$", "$15$", "$19$", "$32$"], correct: 0,
        solution: S({ c: "Place values.", s: ["$16 + 0 + 0 + 0 + 1 = 17$."], a: "$17$" }), ref: "Handbook p.388" },
      { q: "Decimal 200 in binary:",
        choices: ["$11001000$", "$11000100$", "$10101010$", "$11111000$"], correct: 0,
        solution: S({ c: "Decompose.", s: ["$200 = 128 + 64 + 8 = 2^7+2^6+2^3$.", "Binary: 11001000."], a: "$11001000$" }), ref: "Handbook p.388" },
      { q: "$\\text{4A}_{16} + \\text{B5}_{16}$ = ?",
        choices: ["$\\text{FF}_{16}$", "$\\text{F0}_{16}$", "$\\text{100}_{16}$", "$\\text{AB}_{16}$"], correct: 0,
        solution: S({ c: "Convert to decimal, add, convert back.", s: ["4A = 74. B5 = 181. Sum = 255 = FF.", "Equivalently: 4 + B = F (15); A + 5 = F (15)."], a: "$\\text{FF}$" }), ref: "Handbook p.388" },
      { q: "How many minterms in a 4-variable Boolean function (max):",
        choices: ["$16$", "$4$", "$8$", "$32$"], correct: 0,
        solution: S({ c: "$2^n$ rows in truth table → up to $2^n$ minterms.", s: ["Each row could be 0 or 1; rows where output is 1 = minterms."], a: "$16$" }), ref: "Handbook p.389" },
      { q: "JK flip-flop with J=0, K=0:",
        choices: ["Hold", "Set", "Reset", "Toggle"], correct: 0,
        solution: S({ c: "JK truth table: 0,0=hold; 1,0=set; 0,1=reset; 1,1=toggle.", s: [""], a: "Hold" }), ref: "Handbook p.391" },
      { q: "SR latch input S=1, R=1 (simultaneously):",
        choices: ["Forbidden (indeterminate)", "Set", "Reset", "Toggle"], correct: 0,
        solution: S({ c: "Simultaneous S=R=1: both outputs forced HIGH → race condition when released.", s: ["JK FF resolves this by toggling instead."], a: "Forbidden" }), ref: "Handbook p.391" },
      { q: "Ripple carry adder for 4-bit numbers: number of full adders needed:",
        choices: ["$4$", "$8$", "$16$", "$3$"], correct: 0,
        solution: S({ c: "One full adder per bit position.", s: ["LSB can use half-adder if no carry in.", "MSB carries out as overflow."], a: "$4$ full adders" }), ref: "Handbook p.390" },
      { q: "Demultiplexer (1-to-N) with 4 outputs needs ___ select lines:",
        choices: ["$2$", "$4$", "$3$", "$1$"], correct: 0,
        solution: S({ c: "$\\log_2 N$ select lines.", s: ["$\\log_2 4 = 2$."], a: "$2$" }), ref: "Handbook p.390" },
      { q: "Bit-shift left by 1: equivalent to:",
        choices: ["Multiplying by 2", "Dividing by 2", "Adding 1", "Bit complement"], correct: 0,
        solution: S({ c: "$1010_2 \\to 10100_2$. $10_{10} \\to 20_{10}$.", s: ["Right shift = divide by 2.", "Arithmetic right shift preserves sign bit."], a: "$\\times 2$" }), ref: "Handbook p.389" },
      { q: "Tri-state buffer outputs:",
        choices: ["High, Low, or High-impedance", "Just High or Low", "Always Low", "Random"], correct: 0,
        solution: S({ c: "Tri-state has Enable input. When disabled: output is high-Z (effectively disconnected).", s: ["Allows multiple drivers on shared bus — only one active at a time."], a: "0, 1, or Hi-Z" }), ref: "Handbook p.391" },
      { q: "Convert 0.625 (decimal) to binary fraction:",
        choices: ["$0.101_2$", "$0.110_2$", "$0.011_2$", "$0.111_2$"], correct: 0,
        solution: S({ c: "Multiply by 2 repeatedly, collect integer parts.", s: ["$0.625 \\times 2 = 1.25$ → 1, keep 0.25.", "$0.25 \\times 2 = 0.5$ → 0, keep 0.5.", "$0.5 \\times 2 = 1.0$ → 1, done.", "Read: 0.101."], a: "$0.101_2$", v: "$1/2 + 1/8 = 0.5 + 0.125 = 0.625$ ✓" }), ref: "Handbook p.388" },
      { q: "Synchronous counter advantages over async ripple:",
        choices: ["No accumulated propagation delay, glitch-free", "Simpler", "Fewer connections", "Lower power"], correct: 0,
        solution: S({ c: "Sync: all FFs change on same clock edge → outputs change together.", s: ["Async ripple: each FF triggers next → delays add up, transient states appear.", "Sync more complex but reliable."], a: "No accumulated delay" }), ref: "Handbook p.391" },
    ],

    // ====================== Ch 16: CompSys — +12 ======================
    16: [
      { q: "ISA = ",
        choices: ["Instruction Set Architecture", "Internal System Address", "Industry Standard Adapter", "Internet Service Account"], correct: 0,
        solution: S({ c: "ISA = abstract interface between hardware and software. Defines available instructions, registers, addressing modes.", s: ["Examples: x86, ARM, RISC-V, MIPS."], a: "Instruction Set Architecture" }), ref: "Handbook p.408" },
      { q: "RISC vs CISC:",
        choices: ["RISC = simple uniform instructions; CISC = complex variable", "Same thing", "RISC is older", "CISC is faster"], correct: 0,
        solution: S({ c: "RISC: fixed-length instructions, load/store, register-based. CISC: variable-length, complex memory operations.", s: ["ARM, RISC-V, MIPS = RISC.", "x86 = CISC (though internally translates to micro-ops, blurring line)."], a: "RISC: simple; CISC: complex" }), ref: "Handbook p.408" },
      { q: "Cache hit time vs main memory access time:",
        choices: ["Cache much faster (10-100×)", "Same", "Cache slower", "Variable"], correct: 0,
        solution: S({ c: "L1 cache: 1-5 ns. Main memory (DRAM): 50-100 ns.", s: ["L2/L3 between.", "SSD: 25-100 µs (1000× slower).", "HDD: ms (1000× slower again)."], a: "10-100× faster" }), ref: "Handbook p.407" },
      { q: "Virtual memory provides:",
        choices: ["Per-process address space, more memory than physical", "Faster RAM", "Encryption", "Backup"], correct: 0,
        solution: S({ c: "VM: each process sees its own address space; OS+MMU translates to physical. Allows over-commit via paging to disk.", s: ["Page table entries map virtual to physical.", "TLB caches translations for speed."], a: "Process isolation + more memory" }), ref: "Handbook p.408" },
      { q: "Pipelining improves throughput, not necessarily:",
        choices: ["Individual instruction latency", "Total work", "Code complexity", "Memory usage"], correct: 0,
        solution: S({ c: "Each instruction takes same total time (or slightly more due to stage delays). But many overlap → higher throughput.", s: ["Latency: time for one instruction.", "Throughput: instructions per second."], a: "Latency unchanged" }), ref: "Handbook p.408" },
      { q: "Branch prediction misprediction penalty in deep pipeline:",
        choices: ["Many wasted cycles (flush + refetch)", "None", "1 cycle", "Random"], correct: 0,
        solution: S({ c: "Mispredicted branch → flush pipeline, fetch from correct address. Cost: pipeline depth.", s: ["Modern CPU: 15-20 cycles penalty.", "Why branch prediction (accuracy >95%) is so important."], a: "Cycles = pipeline depth" }), ref: "Handbook p.408" },
      { q: "SIMD (Single Instruction Multiple Data):",
        choices: ["Same op on multiple data simultaneously (vector ops)", "Multiple programs in parallel", "Memory replication", "Cache coherency"], correct: 0,
        solution: S({ c: "SIMD: one instruction operates on a vector of values in one cycle.", s: ["x86: MMX, SSE, AVX. ARM: NEON.", "Used in: graphics, scientific computing, ML."], a: "Vector operations" }), ref: "Handbook p.408" },
      { q: "GPU vs CPU:",
        choices: ["GPU: many simple cores (parallel); CPU: few complex cores (serial)", "Same", "GPU only graphics", "CPU is faster always"], correct: 0,
        solution: S({ c: "GPU: thousands of small cores, good for parallel/SIMD work. CPU: few cores, complex (branch prediction, caches).", s: ["GPU excels: graphics, ML, simulations.", "CPU excels: branching code, single-threaded tasks."], a: "GPU parallel; CPU serial+complex" }), ref: "Handbook p.408" },
      { q: "Stack pointer points to:",
        choices: ["Top of stack (most recent push)", "Bottom of stack", "Middle", "Heap"], correct: 0,
        solution: S({ c: "SP register tracks the next free stack slot (or current top).", s: ["Stack typically grows downward (toward lower addresses).", "Push: SP decreases, then write. Pop: read, then SP increases."], a: "Top of stack" }), ref: "Handbook p.408" },
      { q: "Interrupt vs polling:",
        choices: ["Interrupt: device notifies CPU; Polling: CPU checks", "Same", "Polling is faster", "Interrupt is older"], correct: 0,
        solution: S({ c: "Interrupt: hardware signals CPU on event → CPU handles. Polling: CPU periodically checks status.", s: ["Interrupts: efficient for rare events.", "Polling: simpler, useful for high-rate events."], a: "Interrupt vs poll" }), ref: "Handbook p.408" },
      { q: "ARM vs x86: ARM is generally:",
        choices: ["Lower power, RISC, dominant in mobile", "Older", "Faster on desktop", "Cheaper to license"], correct: 0,
        solution: S({ c: "ARM: low power consumption, RISC architecture. Used in: phones, tablets, embedded systems, Apple Silicon Macs.", s: ["x86: higher performance per-thread historically, more complex.", "ARM gaining server share too (AWS Graviton)."], a: "Lower power, mobile-focused" }), ref: "Handbook p.408" },
      { q: "Word size of a 32-bit processor:",
        choices: ["$32$ bits", "$32$ bytes", "$4$ bits", "$8$ bits"], correct: 0,
        solution: S({ c: "Word size = natural unit of data processing.", s: ["32-bit: 4-byte word, 32-bit address space (≤4 GB).", "64-bit: 8-byte word, huge address space."], a: "$32$ bits" }), ref: "Handbook p.407" },
    ],

    // ====================== Ch 17: Software — +8 ======================
    17: [
      { q: "Big-O of accessing array index $a[i]$:",
        choices: ["$O(1)$", "$O(n)$", "$O(\\log n)$", "$O(n^2)$"], correct: 0,
        solution: S({ c: "Array random access: constant time via pointer arithmetic.", s: ["Linked list access: $O(n)$ — must traverse from head."], a: "$O(1)$" }), ref: "Handbook p.415" },
      { q: "Inserting into sorted array at correct position:",
        choices: ["$O(n)$ — shift elements", "$O(1)$", "$O(\\log n)$", "$O(n^2)$"], correct: 0,
        solution: S({ c: "Find position (binary search): $O(\\log n)$. Shift remaining: $O(n)$. Total: $O(n)$.", s: ["Linked list version: insertion $O(1)$ if you have pointer to spot."], a: "$O(n)$" }), ref: "Handbook p.415" },
      { q: "Recursion uses ___ data structure (implicit):",
        choices: ["Stack", "Queue", "Heap", "Array"], correct: 0,
        solution: S({ c: "Each recursive call adds a frame to call stack.", s: ["LIFO: most recent call returns first.", "Stack overflow: too deep recursion exhausts stack memory."], a: "Stack" }), ref: "Handbook p.415" },
      { q: "Heap data structure (binary heap):",
        choices: ["Tree where parent ≤ children (min-heap)", "Linear array", "Hashtable", "Stack"], correct: 0,
        solution: S({ c: "Heap: complete binary tree with heap property.", s: ["Min-heap: parent ≤ children → root is minimum.", "Max-heap: parent ≥ children → root is max.", "Implemented as array (parent at $i/2$, children at $2i$ and $2i+1$)."], a: "Tree with order property" }), ref: "Handbook p.415" },
      { q: "Priority queue typically implemented as:",
        choices: ["Heap (O(log n) operations)", "Stack", "Array", "Linked list"], correct: 0,
        solution: S({ c: "Heap: insert $O(\\log n)$, extract-min $O(\\log n)$. Used for: Dijkstra's algorithm, A* search, OS task scheduling.", s: ["Array-based: $O(n)$ insert OR extract.", "Sorted array: insert $O(n)$, extract $O(1)$."], a: "Heap" }), ref: "Handbook p.415" },
      { q: "Memory allocated on heap vs stack: difference:",
        choices: ["Heap: dynamic, programmer-managed; Stack: automatic, function-local", "Same", "Heap is faster", "Stack is unlimited"], correct: 0,
        solution: S({ c: "Stack: automatic (function variables), fast, LIFO, limited size. Heap: dynamic (malloc/new), flexible size, slower allocation, programmer must free.", s: ["Memory leaks: heap memory not freed.", "Stack overflow: too deep recursion / too large stack frames."], a: "Heap dynamic; Stack automatic" }), ref: "Handbook p.415" },
      { q: "Big-O of Hash table worst case (with collisions):",
        choices: ["$O(n)$", "$O(1)$", "$O(\\log n)$", "$O(n^2)$"], correct: 0,
        solution: S({ c: "Worst case: all keys collide into one bucket → linear search.", s: ["Good hash + reasonable load: average O(1).", "Modern implementations resize when load > threshold."], a: "$O(n)$ worst" }), ref: "Handbook p.415" },
      { q: "Time complexity of finding max in unsorted array of n elements:",
        choices: ["$O(n)$", "$O(1)$", "$O(\\log n)$", "$O(n^2)$"], correct: 0,
        solution: S({ c: "Must examine every element to be sure max wasn't somewhere later.", s: ["Sorted array: O(1) — max is last element.", "Heap: O(1) for max-heap."], a: "$O(n)$" }), ref: "Handbook p.415" },
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
  console.log(`Pack 4: +${added} → bank total ${total}`);
})();
