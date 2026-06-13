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
        solution: S({
          c: "The unit step's transform — first entry of every Laplace table: $\\mathcal L\\{u(t)\\} = 1/s$, from $\\int_0^{\\infty}e^{-st}dt = 1/s$.",
          s: [
            "<b>Step 1 — Integrate.</b> $\\left[-\\dfrac{e^{-st}}{s}\\right]_0^{\\infty} = 0 - \\left(-\\dfrac1s\\right) = \\dfrac1s$.",
            "<b>Step 2 — Distractor audit.</b> 1 is the IMPULSE's transform; $s$ is differentiation's operator; $\\delta(s)$ mixes domains."
          ],
          a: "$1/s$",
          v: "Consistency: a step is the integral of an impulse, and dividing the impulse's transform (1) by $s$ — the integration operator — gives $1/s$ ✓ — the table entries respect calculus."

        }), ref: "Handbook p.56" },
      { q: "Laplace of $\\delta(t)$ (unit impulse):",
        choices: ["$1$", "$1/s$", "$0$", "$s$"], correct: 0,
        solution: S({
          c: "The impulse is the identity of transforms: sifting collapses the integral to one point — $\\mathcal L\\{\\delta(t)\\} = e^{-s\\cdot0} = 1$.",
          s: [
            "<b>Step 1 — Sift.</b> $\\int_0^{\\infty}\\delta(t)e^{-st}dt = e^{0} = 1$.",
            "<b>Step 2 — Distractor audit.</b> $1/s$ is the STEP; 0 would mean the impulse vanishes; $s$ is the derivative operator."
          ],
          a: "$1$",
          v: "Why this makes $\\delta$ special: feeding it to a system returns $H(s)\\times1 = H(s)$ — the impulse response IS the transfer function in time clothing ✓ — the entire reason impulse testing characterizes systems."

        }), ref: "Handbook p.56" },
      { q: "Transfer function of an integrator:",
        choices: ["$H(s) = 1/s$", "$H(s) = s$", "$H(s) = 1$", "$H(s) = s^2$"], correct: 0,
        solution: S({
          c: "Calculus → algebra is the Laplace bargain: INTEGRATION in time = division by $s$; differentiation = multiplication by $s$. An integrator is $H(s) = 1/s$.",
          s: [
            "<b>Step 1 — Match.</b> $H = 1/s$.",
            "<b>Step 2 — Distractor audit.</b> $s$ is the DIFFERENTIATOR; 1 is a wire; $s^{2}$ differentiates twice."
          ],
          a: "$H(s) = 1/s$",
          v: "Fingerprints to recognize it anywhere: Bode slope −20 dB/dec through all frequencies, constant −90° phase, infinite DC gain (it accumulates forever) ✓ — and in control loops it's the type-raising, error-killing block."

        }), ref: "Handbook p.56" },
      { q: "First-order LPF $H(s) = K/(s + a)$. Time constant:",
        choices: ["$\\tau = 1/a$", "$\\tau = a$", "$\\tau = K$", "$\\tau = a/K$"], correct: 0,
        solution: S({
          c: "Match to the standard form: $\\dfrac{K}{s + 1/\\tau}$ — the time constant is the RECIPROCAL of the pole magnitude: $\\tau = 1/a$.",
          s: [
            "<b>Step 1 — Compare denominators.</b> $s + a \\leftrightarrow s + 1/\\tau \\Rightarrow \\tau = 1/a$.",
            "<b>Step 2 — Distractor audit.</b> $\\tau = a$ forgets the inversion; $K$ is the gain (independent); $a/K$ mixes the two."
          ],
          a: "$\\tau = 1/a$",
          v: "Triple identity worth one card: pole at $-a$ ↔ $\\tau = 1/a$ ↔ bandwidth $= a$ rad/s — one number, three names ✓ (fast pole = short τ = wide band)."

        }), ref: "Handbook p.366" },
      { q: "Bandwidth of $H(s) = 10/(s+5)$:",
        choices: ["$5$ rad/s", "$10$ rad/s", "$1$ rad/s", "$50$ rad/s"], correct: 0,
        solution: S({
          c: "First-order low-pass bandwidth = the pole magnitude (where the response is −3 dB): pole at $-5$ → BW $= 5$ rad/s.",
          s: [
            "<b>Step 1 — Read the pole.</b> $s = -5 \\Rightarrow \\omega_c = 5$ rad/s.",
            "<b>Step 2 — Distractor audit.</b> 10 reads the numerator (that's the gain); 1 and 50 garble the ratio."
          ],
          a: "BW $= 5$ rad/s ($\\approx 0.8$ Hz).",
          v: "Verify the −3 dB: at $\\omega = 5$, $|H| = 10/\\sqrt{25+25} = 10/7.07 = 1.414$ — exactly $1/\\sqrt2$ of the DC gain 2 ✓."

        }), ref: "Handbook p.366" },
      { q: "Phase at DC of $H(s) = 1/(s+1)$:",
        choices: ["$0°$", "$-45°$", "$-90°$", "$90°$"], correct: 0,
        solution: S({
          c: "Evaluate at $\\omega = 0$: $H(j0) = 1/1 = 1$ — a positive REAL number, whose phase is 0°.",
          s: [
            "<b>Step 1 — Substitute.</b> $H(0) = 1$ → phase 0°.",
            "<b>Step 2 — The trajectory for context.</b> Phase slides to −45° AT the corner ($\\omega = 1$) and approaches −90° far above — the distractors are the OTHER landmarks of the same curve.",
            "<b>Step 3 — Distractor audit.</b> −45° is the corner value; −90° the high-frequency limit; +90° would need a zero."
          ],
          a: "$0°$ at DC.",
          v: "General rule worth keeping: any system with a finite, positive DC gain has 0° phase at DC ✓ — phase shifts develop only where poles/zeros begin to act (within ~a decade of their corner)."

        }), ref: "Handbook p.366" },
      { q: "Resonant frequency of $H(s) = 1/(s^2 + 0.1 s + 100)$:",
        choices: ["$10$ rad/s", "$100$ rad/s", "$1$ rad/s", "$5$ rad/s"], correct: 0,
        solution: S({
          c: "Match the denominator to $s^{2} + 2\\zeta\\omega_ns + \\omega_n^{2}$: the CONSTANT term is $\\omega_n^{2}$.",
          s: [
            "<b>Step 1 — Natural frequency.</b> $\\omega_n^{2} = 100 \\Rightarrow \\omega_n = 10$ rad/s.",
            "<b>Step 2 — Damping for the full picture.</b> $2\\zeta\\omega_n = 0.1 \\Rightarrow \\zeta = 0.005$ — nearly undamped → the resonant PEAK sits essentially at $\\omega_n$.",
            "<b>Step 3 — Distractor audit.</b> 100 forgets the square root; 1 and 5 misread coefficients."
          ],
          a: "$\\omega_n = 10$ rad/s",
          v: "Sharpness read: $Q = 1/(2\\zeta) = 100$ — a violent, narrow resonance (peak gain ~100× the DC level) ✓. Fine print: the exact peak is at $\\omega_n\\sqrt{1-2\\zeta^{2}}$, indistinguishable from 10 at this tiny ζ."

        }), ref: "Handbook p.366" },
      { q: "If $H(s) = 1/[(s+1)(s+2)]$, time-domain impulse response includes:",
        choices: ["$e^{-t}$ and $e^{-2t}$ terms", "Sine and cosine", "Constant only", "Ramp"], correct: 0,
        solution: S({
          c: "Each REAL pole contributes one decaying exponential to the impulse response: pole at $s = -a$ → term $e^{-at}$.",
          s: [
            "<b>Step 1 — Read the poles.</b> $-1$ and $-2$ → terms $e^{-t}$ and $e^{-2t}$.",
            "<b>Step 2 — Distractor audit.</b> Sines/cosines need COMPLEX poles; a constant needs a pole at the origin; a ramp needs a DOUBLE origin pole."
          ],
          a: "$e^{-t}$ and $e^{-2t}$ terms.",
          v: "Partial fractions supply the weights: $H = \\dfrac{1}{s+1} - \\dfrac{1}{s+2}$ → $h(t) = e^{-t} - e^{-2t}$ ✓ — pole LOCATIONS fix the shapes, residues fix the amounts; the pole-map-to-time-domain dictionary in one example."

        }), ref: "Handbook p.56" },
      { q: "Group delay of $H(s) = e^{-2s}$ (pure delay):",
        choices: ["$2$ seconds (constant)", "Variable", "$1/2$ second", "$0$"], correct: 0,
        solution: S({
          c: "$e^{-as}$ is the Laplace signature of a PURE TIME DELAY of $a$ seconds. Group delay $= -d\\phi/d\\omega$, and with phase $\\phi = -2\\omega$ (linear), the delay is constant: 2 s.",
          s: [
            "<b>Step 1 — Phase.</b> $\\angle H(j\\omega) = -2\\omega$ — linear in frequency.",
            "<b>Step 2 — Differentiate.</b> $-d\\phi/d\\omega = 2$ s, the same at every frequency.",
            "<b>Step 3 — Distractor audit.</b> 'Variable' would need NONlinear phase; 1/2 inverts; 0 is no delay."
          ],
          a: "2 seconds, constant.",
          v: "Why constant group delay is gold: every frequency arrives equally late → the waveform's SHAPE survives ✓ — the property linear-phase FIR filters chase and dispersive channels destroy. Magnitude check: $|e^{-2j\\omega}| = 1$ — a delay changes timing, never amplitude."

        }), ref: "Handbook p.366" },
      { q: "$H(s) = 5(s+2)/[(s+1)(s+3)]$. Number of zeros and poles:",
        choices: ["1 zero, 2 poles", "2 zeros, 2 poles", "1 zero, 1 pole", "0 zeros, 3 poles"], correct: 0,
        solution: S({
          c: "Count roots where they live: ZEROS in the numerator, POLES in the denominator (the constant 5 is gain, not a root).",
          s: [
            "<b>Step 1 — Zeros.</b> $s + 2 = 0$ → one zero at $-2$.",
            "<b>Step 2 — Poles.</b> $(s+1)(s+3)$ → two poles, at $-1$ and $-3$.",
            "<b>Step 3 — Distractor audit.</b> '2 zeros' counts the gain or a phantom; the others miscount."
          ],
          a: "1 zero, 2 poles.",
          v: "Vocabulary the count unlocks: poles > zeros makes the function (strictly) PROPER — realizable as a causal physical system, with $|H| \\to 0$ at high frequency ✓. Relative degree 1 here → high-frequency rolloff of −20 dB/dec."

        }), ref: "Handbook p.365" },
    ],

    // ====================== Ch 8: Signal — +10 ======================
    8: [
      { q: "Energy of a discrete signal $x[n] = \\{1, 2, -1\\}$:",
        choices: ["$6$", "$2$", "$0$", "$3$"], correct: 0,
        solution: S({
          c: "Discrete-signal energy: $E = \\sum|x[n]|^{2}$ — square each sample, add.",
          s: [
            "<b>Step 1 — Square and sum.</b> $1 + 4 + 1 = 6$.",
            "<b>Step 2 — Distractor audit.</b> 2 SUMS the samples (signs cancel — exactly why energy squares); 3 counts samples; 0 confuses with the sum of this nearly-balanced signal."
          ],
          a: "$E = 6$",
          v: "Why squares: energy must be positive and sign-blind — $(-1)^{2}$ counts the same as $1^{2}$ ✓. Parseval's theorem later guarantees the same 6 shows up in the frequency domain."

        }), ref: "Handbook p.376" },
      { q: "Periodic signal has __ Fourier series:",
        choices: ["Discrete spectrum", "Continuous spectrum", "No spectrum", "Random spectrum"], correct: 0,
        solution: S({
          c: "Periodicity ↔ DISCRETE spectrum: a periodic signal contains only exact integer multiples (harmonics) of its fundamental — spectral lines, not a continuum.",
          s: [
            "<b>Step 1 — Match.</b> Discrete (line) spectrum.",
            "<b>Step 2 — The duality.</b> APERIODIC signals need the continuous Fourier TRANSFORM — every frequency present in general.",
            "<b>Step 3 — Distractor audit.</b> 'Continuous' belongs to aperiodic; 'no spectrum'/'random' have no basis."
          ],
          a: "Discrete spectrum (harmonics).",
          v: "Concrete anchor: a square wave's spectrum is lines at $f_0, 3f_0, 5f_0, \\ldots$ with $1/n$ amplitudes ✓. The duality chain to remember: periodic↔discrete spectrum, discrete time↔periodic spectrum — sampling and Fourier series are mirror images."

        }), ref: "Handbook p.371-376" },
      { q: "Convolution in time = ___ in frequency:",
        choices: ["Multiplication", "Convolution again", "Addition", "Differentiation"], correct: 0,
        solution: S({
          c: "The convolution theorem — DSP's central shortcut: convolution in time ⇔ MULTIPLICATION in frequency: $\\mathcal F\\{x*h\\} = X(\\omega)H(\\omega)$.",
          s: [
            "<b>Step 1 — Match.</b> Multiplication.",
            "<b>Step 2 — Why it matters.</b> Filtering (a convolution) becomes 'multiply the spectrum by $H(\\omega)$' — the whole reason filters are SPECIFIED by frequency response.",
            "<b>Step 3 — The mirror.</b> Multiplication in time ⇔ convolution in frequency (windowing spreads spectra — spectral leakage)."
          ],
          a: "Multiplication.",
          v: "Computational payoff: FFT → multiply → inverse FFT beats direct convolution for long filters ($N\\log N$ vs $N^{2}$) — 'fast convolution' ✓."

        }), ref: "Handbook p.376" },
      { q: "A 1st order HPF cutoff at 1 kHz, signal at 100 Hz, gain:",
        choices: ["$\\approx -20$ dB (attenuated)", "$0$ dB", "$+20$ dB", "$-3$ dB"], correct: 0,
        solution: S({
          c: "A high-pass filter attenuates BELOW its cutoff at 20 dB/decade (first order). The signal at 100 Hz sits one decade UNDER the 1-kHz corner.",
          s: [
            "<b>Step 1 — Count decades.</b> $1000/100 = 10\\times$ below cutoff → 1 decade.",
            "<b>Step 2 — Apply the slope.</b> $-20$ dB.",
            "<b>Step 3 — Distractor audit.</b> 0 dB is the PASSBAND (above cutoff); +20 dB would be gain; −3 dB is AT the corner."
          ],
          a: "$\\approx -20$ dB.",
          v: "Mirror symmetry with the LPF case: same slope, opposite side of the corner ✓. Exact value: $20\\log\\frac{0.1}{\\sqrt{1.01}} = -20.04$ dB — asymptote essentially exact a decade out."

        }), ref: "Handbook p.375" },
      { q: "Notch filter is used to:",
        choices: ["Remove a narrow band of frequencies", "Pass all frequencies", "Amplify one frequency", "Generate signals"], correct: 0,
        solution: S({
          c: "A notch (band-stop) filter removes a NARROW band and passes everything else — the inverse of a narrow bandpass.",
          s: [
            "<b>Step 1 — Match.</b> Remove a narrow band of frequencies.",
            "<b>Step 2 — The canonical use.</b> Killing 60-Hz mains hum in audio and instrumentation (50 Hz in EU) without touching the rest of the signal.",
            "<b>Step 3 — Distractor audit.</b> 'Pass all' is an all-pass; 'amplify one' is a resonator; filters don't generate."
          ],
          a: "Remove a narrow band (band-stop).",
          v: "Implementation anchors: twin-T RC network or series/parallel RLC tuned to the offending frequency; quality factor sets how surgical the notch is ✓ — high Q removes 60 Hz while sparing 55 and 65."

        }), ref: "Handbook p.375" },
      { q: "Nyquist plot for an integrator $H(s) = 1/s$ starts at:",
        choices: ["$-j\\infty$ (low freq)", "Origin", "$+j\\infty$", "$1$"], correct: 0,
        solution: S({
          c: "Trace $H(j\\omega) = 1/(j\\omega) = -j/\\omega$: pure negative-imaginary at every frequency — starting at $-j\\infty$ as $\\omega\\to0^{+}$ and shrinking to the origin as $\\omega\\to\\infty$.",
          s: [
            "<b>Step 1 — Low-frequency end.</b> $\\omega\\to0^{+}$: magnitude blows up along the NEGATIVE imaginary axis → $-j\\infty$.",
            "<b>Step 2 — High end.</b> $\\to 0$ — the plot is the lower imaginary semi-axis.",
            "<b>Step 3 — Distractor audit.</b> Origin is the END; $+j\\infty$ has the wrong sign ($1/j = -j$); 1 would be a flat gain."
          ],
          a: "At $-j\\infty$ (low-frequency end).",
          v: "Phase view confirms: an integrator holds −90° at ALL frequencies — the plot can only live on the negative imaginary axis ✓ — and this quarter-circle-at-infinity detail is what closes Nyquist contours for type-1 loops."

        }), ref: "Handbook p.366" },
      { q: "Quantization noise power of an n-bit ADC over full-scale range $V_{FS}$:",
        choices: ["$\\Delta^2/12$ where $\\Delta = V_{FS}/2^n$", "$\\Delta$", "$V_{FS}/n$", "$2^n$"], correct: 0,
        solution: S({
          c: "Uniform quantization error is spread evenly over ±Δ/2 (one LSB wide); the variance of that uniform distribution is the noise power: $\\Delta^{2}/12$, with $\\Delta = V_{FS}/2^{n}$.",
          s: [
            "<b>Step 1 — Match.</b> $\\Delta^{2}/12$.",
            "<b>Step 2 — Where 12 comes from.</b> Var of Uniform($-\\Delta/2, \\Delta/2$) $= \\Delta^{2}/12$ — the same '12' as the uniform-distribution variance in statistics.",
            "<b>Step 3 — Distractor audit.</b> Δ alone is the step, not a power; the rest are dimensional mismatches."
          ],
          a: "$\\Delta^{2}/12$",
          v: "This is the seed of the famous formula: ratio it against a full-scale sine's power and the dB version collapses to $SQNR = 6.02n + 1.76$ ✓ — the '6 dB per bit' rule traces straight back to this 12."

        }), ref: "Handbook p.375" },
      { q: "Sample-and-hold output between samples is:",
        choices: ["Constant (held value)", "Linearly interpolated", "Zero", "Smoothed"], correct: 0,
        solution: S({
          c: "A zero-order hold (ZOH) — the standard sample-and-hold — FREEZES each sample's value until the next arrives: a staircase output.",
          s: [
            "<b>Step 1 — Match.</b> Constant (held) value between samples.",
            "<b>Step 2 — The spectral price.</b> The staircase imposes a $\\text{sinc}$-shaped droop on the spectrum and leaves images at multiples of $f_s$ — hence the reconstruction (smoothing) filter after every DAC.",
            "<b>Step 3 — Distractor audit.</b> Linear interpolation is a FIRST-order hold; zero between samples describes impulse trains; 'smoothed' is the filter's job, later."
          ],
          a: "Constant — held at the last sample value.",
          v: "You've seen the staircase on any scope probing a DAC output ✓. The droop is real: at $f_s/2$ the ZOH already loses $\\sin(\\pi/2)/(\\pi/2) \\approx -3.9$ dB — precision systems pre-compensate for it."

        }), ref: "Handbook p.375" },
      { q: "FIR vs IIR filter primary difference:",
        choices: ["FIR has finite impulse response; IIR has infinite", "Same thing", "IIR is non-causal", "FIR is unstable"], correct: 0,
        solution: S({
          c: "The names say it: FIR — Finite Impulse Response (feedforward only; the response to an impulse dies after N taps); IIR — Infinite Impulse Response (feedback; the response rings forever, decaying).",
          s: [
            "<b>Step 1 — Match.</b> FIR finite, IIR infinite impulse response — feedforward vs feedback structure.",
            "<b>Step 2 — The engineering trade.</b> FIR: unconditionally stable, exact linear phase available, but needs MANY taps for sharp cutoffs. IIR: sharp response from few coefficients, but stability and phase must be managed.",
            "<b>Step 3 — Distractor audit.</b> Both are causal as implemented; FIR is never unstable (no poles except at origin)."
          ],
          a: "FIR has finite impulse response; IIR infinite (feedback).",
          v: "Selection rule of practice: phase-critical (data, audio crossovers) → FIR; compute-constrained sharp filtering → IIR (elliptic/Butterworth digitized) ✓ — the trade appears on every DSP design review."

        }), ref: "Handbook p.376" },
      { q: "Discrete-time signal $x[n]$ shifted: $x[n - 2]$ means:",
        choices: ["Delayed by 2 samples", "Advanced by 2", "Doubled", "Halved"], correct: 0,
        solution: S({
          c: "Index arithmetic reads backwards from intuition: $x[n-2]$ — SUBTRACTING in the index — is a DELAY: today's output is the input from 2 samples ago.",
          s: [
            "<b>Step 1 — Match.</b> Delayed by 2 samples.",
            "<b>Step 2 — Check with a point.</b> The value that was at $n = 0$ now appears at $n = 2$ — the signal moved RIGHT (later) ✓.",
            "<b>Step 3 — Distractor audit.</b> $x[n+2]$ is the ADVANCE (non-causal for real-time); doubling/halving touch amplitude, not time."
          ],
          a: "Delayed by 2 samples.",
          v: "Transform fingerprint: a $k$-sample delay multiplies the z-transform by $z^{-k}$ ✓ — which is why digital filter diagrams label their memory boxes '$z^{-1}$': each is one sample of delay."

        }), ref: "Handbook p.376" },
    ],

    // ====================== Ch 9: Electronics — +20 ======================
    9: [
      { q: "Common-mode gain of an ideal op-amp:",
        choices: ["Zero", "$\\infty$", "$1$", "Depends"], correct: 0,
        solution: S({
          c: "An ideal op-amp amplifies only the DIFFERENCE between its inputs; anything common to both (same signal on + and −) is rejected completely: common-mode gain = 0, hence CMRR = ∞.",
          s: [
            "<b>Step 1 — Match.</b> Zero.",
            "<b>Step 2 — Distractor audit.</b> ∞ is the DIFFERENTIAL gain (the other ideal property — the swap trap); 1 and 'depends' describe nothing ideal."
          ],
          a: "Zero (ideal).",
          v: "Reality check: real op-amps leak a little common-mode through — CMRR 80-120 dB, meaning common-mode gain is $10^{4}$-$10^{6}$ times smaller than differential, not zero ✓ — the ideal is the limit the spec approaches."

        }), ref: "Handbook p.380" },
      { q: "Slew rate of $1$ V/µs: max frequency for full-scale 10V signal:",
        choices: ["$\\approx 15.9$ kHz", "$1$ MHz", "$100$ Hz", "$10$ MHz"], correct: 0,
        solution: S({
          c: "A sinusoid's steepest slope is $2\\pi fV_{peak}$ (at its zero crossings). The op-amp tracks it only if that slope stays below the slew rate: $f_{max} = \\dfrac{SR}{2\\pi V_{peak}}$ — the 'full-power bandwidth'.",
          s: [
            "<b>Step 1 — Convert SR.</b> 1 V/µs $= 10^{6}$ V/s.",
            "<b>Step 2 — Apply.</b> $f_{max} = \\dfrac{10^{6}}{2\\pi\\times10} \\approx 15.9$ kHz.",
            "<b>Step 3 — Distractor audit.</b> 1 MHz ignores the amplitude (that's small-signal GBW thinking); 100 Hz and 10 MHz slip decades."
          ],
          a: "$f_{max} \\approx 15.9$ kHz",
          v: "The amplitude trade this formula encodes: at 1 V peak the same op-amp manages 159 kHz — big swings slew-limit TEN times sooner ✓. Symptom above the limit: sine in, triangle out."

        }), ref: "Handbook p.380" },
      { q: "BJT $\\beta = 50$. $I_C = 100$ mA. $I_B$:",
        choices: ["$2$ mA", "$5000$ mA", "$50$ mA", "$0.05$ mA"], correct: 0,
        solution: S({
          c: "Active-region current gain run backwards: $I_B = I_C/\\beta$.",
          s: [
            "<b>Step 1 — Divide.</b> $100\\,\\text{mA}/50 = 2$ mA.",
            "<b>Step 2 — Distractor audit.</b> 5000 mA MULTIPLIES; 50 echoes β; 0.05 over-divides."
          ],
          a: "$I_B = 2$ mA",
          v: "Closure: $I_E = I_C + I_B = 102$ mA ✓. Design reading: the base needs a real 2 mA of drive here — power BJTs' modest β is why MOSFETs (voltage-driven gates) took over switching."

        }), ref: "Handbook p.384" },
      { q: "$V_{CE,sat}$ of typical BJT in saturation:",
        choices: ["$\\approx 0.2$ V", "$0.7$ V", "$5$ V", "$0$ V"], correct: 0,
        solution: S({
          c: "Saturation = the BJT switch fully ON: both junctions forward-biased, collector-emitter voltage collapsed to a small residual ≈ 0.2 V.",
          s: [
            "<b>Step 1 — Match.</b> $V_{CE,sat} \\approx 0.2$ V.",
            "<b>Step 2 — Distractor audit.</b> 0.7 V is $V_{BE}$ — the base-emitter diode drop, the eternal mix-up; 5 V is cutoff territory; exactly 0 is ideal-switch fiction."
          ],
          a: "$\\approx 0.2$ V",
          v: "Why it matters: ON-state loss $= I_C\\times0.2$ V — small but not zero (100 mA → 20 mW) ✓. The 0.2/0.7 pair also explains why saturated logic (old TTL) output lows sat near 0.2 V."

        }), ref: "Handbook p.384" },
      { q: "Class B audio amp: efficiency limit:",
        choices: ["$\\approx 78.5\\%$ ($\\pi/4$)", "$50\\%$", "$25\\%$", "$100\\%$"], correct: 0,
        solution: S({
          c: "Class B: a push-pull pair, each transistor conducting exactly half the cycle (180°) — no idle bias current. Theoretical efficiency ceiling: $\\pi/4 \\approx 78.5\\%$.",
          s: [
            "<b>Step 1 — Match.</b> 78.5%.",
            "<b>Step 2 — Class ladder for the distractors.</b> 25% = Class A resistive; 50% = Class A transformer-coupled; 100% is thermodynamically off-limits for linear stages (Class D switching gets >90%).",
            "<b>Step 3 — The catch.</b> Pure Class B suffers crossover distortion at the handoff near zero — Class AB adds a sliver of bias to fix it, costing a few points of efficiency."
          ],
          a: "$\\pi/4 \\approx 78.5\\%$",
          v: "Where π/4 comes from: average output power vs average supply draw for a full-swing sine — the math integrates to exactly π/4 ✓. Real Class B/AB amps land 60-70%."

        }), ref: "Handbook p.384" },
      { q: "Op-amp comparator output:",
        choices: ["Saturated high or low (no feedback)", "Linear", "Zero", "Random"], correct: 0,
        solution: S({
          c: "A comparator is an op-amp with NO feedback: the huge open-loop gain multiplies any input difference past the supply limits — output lives at one RAIL or the other, never in between.",
          s: [
            "<b>Step 1 — Match.</b> Saturated high or low.",
            "<b>Step 2 — The rule.</b> $v_+ > v_-$ → $+V_{sat}$; $v_+ < v_-$ → $-V_{sat}$ — a 1-bit answer to 'which input is bigger?'.",
            "<b>Step 3 — Distractor audit.</b> 'Linear' requires negative feedback (the virtual-short world); zero/random have no mechanism."
          ],
          a: "Saturated at a rail (no feedback → no linear region).",
          v: "Applications that ARE this behavior: zero-crossing detectors, ADC front-ends, thermostat logic ✓. Practical note: dedicated comparator ICs (LM393) switch faster than op-amps pressed into the role — they're built to slam rails."

        }), ref: "Handbook p.380" },
      { q: "MOSFET threshold voltage $V_{th}$ for nMOS in enhancement:",
        choices: ["Positive (typically 0.5-2 V)", "Negative", "Zero", "$10$ V"], correct: 0,
        solution: S({
          c: "Enhancement-mode nMOS is OFF at zero gate voltage; it needs a POSITIVE $V_{GS}$ beyond threshold (typically +0.5 to +2 V) to invert the channel and conduct.",
          s: [
            "<b>Step 1 — Match.</b> Positive, ~0.5-2 V.",
            "<b>Step 2 — The sign map.</b> pMOS enhancement: $V_{th} < 0$; DEPLETION devices flip the logic (conduct at zero, need bias to turn OFF).",
            "<b>Step 3 — Distractor audit.</b> Negative is pMOS; zero would be depletion-ish; 10 V is no modern threshold."
          ],
          a: "Positive — typically 0.5-2 V.",
          v: "Trend note: logic-process thresholds have scaled down with supply voltages (0.3-0.5 V at advanced nodes) — leakage vs speed is the trade ✓. 'Logic-level' power FETs are specified to enhance fully at 4.5 V gate drive."

        }), ref: "Handbook p.386" },
      { q: "Op-amp $A_{OL} = 10^5$, $A_{CL} = 100$. Loop gain $A\\beta$:",
        choices: ["$10^3 - 1 \\approx 10^3$", "$10^5$", "$100$", "$10^7$"], correct: 0,
        solution: S({
          c: "Loop gain — the quantity feedback theory cares about — is $A\\beta$. From $A_{CL} = \\dfrac{A_{OL}}{1 + A\\beta}$: $A\\beta = \\dfrac{A_{OL}}{A_{CL}} - 1$.",
          s: [
            "<b>Step 1 — Plug in.</b> $10^{5}/100 - 1 = 999 \\approx 10^{3}$.",
            "<b>Step 2 — Distractor audit.</b> $10^{5}$ is the open-loop gain; 100 the closed-loop; $10^{7}$ multiplies them."
          ],
          a: "$A\\beta \\approx 10^{3}$",
          v: "What the 1000 buys: gain accuracy and distortion improve by the factor $1 + A\\beta \\approx 1000$ — the closed-loop gain sits within 0.1% of the ideal $1/\\beta$ ✓. Loop gain IS the currency of feedback design."

        }), ref: "Handbook p.380" },
      { q: "Increasing feedback ($\\beta$ larger) does what to bandwidth?",
        choices: ["Widens bandwidth (gain-BW tradeoff)", "Narrows", "No effect", "Causes oscillation"], correct: 0,
        solution: S({
          c: "The gain-bandwidth conservation law: $A_{CL}\\times BW = $ GBW (constant). MORE feedback → LOWER closed-loop gain → WIDER bandwidth, in exact proportion.",
          s: [
            "<b>Step 1 — Match.</b> Widens bandwidth.",
            "<b>Step 2 — See it numerically.</b> GBW = 1 MHz: gain 100 → 10 kHz; raise feedback so gain = 10 → 100 kHz.",
            "<b>Step 3 — Distractor audit.</b> 'Narrows' inverts the law; 'no effect' denies it; oscillation concerns PHASE margin, not β's size per se."
          ],
          a: "Widens bandwidth (gain-bandwidth trade).",
          v: "The design corollary: need both gain AND bandwidth? Cascade low-gain stages — two ×10 stages each at 100 kHz beat one ×100 stage at 10 kHz ✓."

        }), ref: "Handbook p.380" },
      { q: "Schottky diode advantage over Si diode:",
        choices: ["Lower forward drop (~0.3 V)", "Higher voltage", "Slower switching", "Cheaper always"], correct: 0,
        solution: S({
          c: "A Schottky diode is a METAL-semiconductor junction: majority-carrier conduction gives a LOW forward drop (~0.3 V vs silicon's 0.7) and near-zero reverse-recovery time.",
          s: [
            "<b>Step 1 — Match.</b> Lower forward drop (~0.3 V) — plus fast switching as the bonus.",
            "<b>Step 2 — Distractor audit.</b> Higher voltage is actually a Schottky WEAKNESS (limited reverse ratings, more leakage); 'slower' inverts; 'cheaper always' isn't a physical property.",
            "<b>Step 3 — The price paid.</b> Higher reverse leakage and modest breakdown voltages — Schottkys own the low-voltage, high-frequency corner."
          ],
          a: "Lower forward drop, ≈0.3 V (and fast switching).",
          v: "Where the 0.4-V saving matters: a 5-V/10-A buck loses 7 W to silicon diodes but 3 W to Schottkys — efficiency points you can feel ✓. RF detectors exploit the speed side of the same physics."

        }), ref: "Handbook p.383" },
      { q: "Power dissipation in a switching MOSFET:",
        choices: ["$P_{cond} = I^2 R_{ds,on}$ + switching losses", "$IV$ always", "Zero in saturation", "$V_{ds}^2/R$"], correct: 0,
        solution: S({
          c: "A switching MOSFET loses power TWO ways: conduction loss while ON ($P_{cond} = I^2R_{ds,on}$ — it's just a small resistor) plus switching loss during each transition, when voltage and current overlap: $P_{sw} \\approx \\tfrac{1}{2}V_{ds}I(t_r + t_f)f_{sw}$.",
          s: [
            "<b>Step 1 — Match.</b> $I^2R_{ds,on}$ + switching losses.",
            "<b>Step 2 — Why transitions cost.</b> Mid-switch, the FET briefly holds BOTH high voltage and high current — that $V\\times I$ overlap, $f_{sw}$ times a second, is the switching loss.",
            "<b>Step 3 — Distractor audit.</b> '$IV$ always' describes a LINEAR pass element (the loss switching exists to avoid); 'zero' is the ideal-switch fantasy; $V_{ds}^2/R$ misapplies resistor formulas."
          ],
          a: "$P = I^2R_{ds,on} + $ switching (transition-overlap) losses.",
          v: "The design tension this creates: higher $f_{sw}$ shrinks inductors/capacitors but scales switching loss linearly ✓ — soft-switching (ZVS/ZCS) topologies exist precisely to break that trade."

        }), ref: "Handbook p.386" },
      { q: "Output impedance of an emitter follower:",
        choices: ["Very low (≈ $r_e$ + $R_S/\\beta$)", "Very high", "$R_C$", "Zero exactly"], correct: 0,
        solution: S({
          c: "The emitter follower (common-collector) is THE buffer stage: gain ≈ 1, but it transforms impedances — looking into the emitter you see the source resistance DIVIDED by $(\\beta+1)$: $Z_{out} \\approx r_e + R_S/(\\beta+1)$, typically just ohms.",
          s: [
            "<b>Step 1 — Match.</b> Very low.",
            "<b>Step 2 — Feel the division.</b> $R_S = 10$ kΩ, β = 100, $r_e = 25$ Ω → $Z_{out} \\approx 25 + 99 \\approx 124$ Ω — a 10-kΩ source now looks like ~120 Ω.",
            "<b>Step 3 — Distractor audit.</b> 'Very high' describes its INPUT side (the same β-multiplication, run the other way); $R_C$ belongs to common-emitter outputs; exactly zero needs an ideal op-amp."
          ],
          a: "Very low: $Z_{out} \\approx r_e + R_S/(\\beta+1)$ — ohms to tens of ohms.",
          v: "The two-sided check: high $Z_{in}$ (≈$\\beta R_E$) + low $Z_{out}$ + gain ≈ 1 = the complete buffer résumé ✓ — it's why followers sit between delicate sources and heavy loads."

        }), ref: "Handbook p.384" },
      { q: "Two transistors in cascode configuration provide:",
        choices: ["High gain + high bandwidth (Miller reduced)", "Lower gain", "Just isolation", "Lower input Z"], correct: 0,
        solution: S({
          c: "Cascode = common-emitter stage feeding a common-base stage stacked on top. The CB stage pins the CE collector voltage nearly constant, killing the MILLER EFFECT — the gain-multiplied input capacitance that normally strangles CE bandwidth.",
          s: [
            "<b>Step 1 — Match.</b> High gain + high bandwidth.",
            "<b>Step 2 — The Miller story.</b> In a plain CE amp, feedback capacitance $C_{\\mu}$ appears at the input magnified by $(1+|A_v|)$. Cascode holds the CE stage's voltage gain near 1 → no magnification → bandwidth survives.",
            "<b>Step 3 — Distractor audit.</b> Gain is NOT lower (the CB stage passes the full current through to the load); 'just isolation' undersells it; input Z is set by the CE stage, unchanged."
          ],
          a: "CE-gain with CB-bandwidth: Miller effect suppressed.",
          v: "Where you meet it: RF front-ends, op-amp internals, current sources needing high output impedance ✓ — one extra transistor buys a decade of bandwidth."

        }), ref: "Handbook p.384" },
      { q: "An op-amp is configured as integrator. Input is square wave. Output is:",
        choices: ["Triangle wave", "Square wave inverted", "Sine wave", "Zero"], correct: 0,
        solution: S({
          c: "An integrator outputs the running INTEGRAL of its input. A square wave is a sequence of constant levels — and the integral of a constant is a straight-line RAMP. Alternating constants → alternating ramps → triangle wave.",
          s: [
            "<b>Step 1 — Trace one cycle.</b> Input high (constant +V): output ramps one way at a fixed slope. Input flips low: slope reverses. Repeat → triangle.",
            "<b>Step 2 — Distractor audit.</b> Inverted square is what a unity AMPLIFIER would give; sine requires a filter picking off the fundamental; zero has no mechanism.",
            "<b>Step 3 — The inverse pair.</b> Differentiator does the reverse: triangle in → square out. Integrate/differentiate are the calculus pair of op-amp circuits."
          ],
          a: "Triangle wave.",
          v: "Slope check: ramp rate $= V_{in}/(RC)$ — bigger input or smaller RC → steeper triangle ✓. This square→triangle trick is exactly how function generators synthesize their triangle output."

        }), ref: "Handbook p.380" },
      { q: "Voltage regulator IC like 7805 has minimum input voltage of about:",
        choices: ["$\\sim 7$ V (dropout 2 V above output)", "$5$ V", "$12$ V", "$0$ V"], correct: 0,
        solution: S({
          c: "A linear regulator must keep some minimum 'headroom' between input and output — the DROPOUT voltage — or regulation collapses. The classic 7805 (5 V out) needs about 2 V of headroom: $V_{in} \\ge 7$ V.",
          s: [
            "<b>Step 1 — Match.</b> ~7 V (5 V output + 2 V dropout).",
            "<b>Step 2 — Distractor audit.</b> 5 V gives zero headroom — output sags out of regulation; 12 V works fine but isn't the MINIMUM; 0 V is no regulator at all.",
            "<b>Step 3 — The modern fix.</b> LDO (low-dropout) regulators shrink the headroom to 0.1-0.5 V — essential for battery rails like 3.7 V → 3.3 V, where a 7805-style part physically can't fit."
          ],
          a: "$V_{in,min} \\approx 7$ V for a 7805.",
          v: "Thermal corollary: every volt ABOVE the minimum burns as heat — $P = (V_{in}-5)\\times I$; at 12 V in and 1 A that's 7 W on the heatsink ✓ — run linear regulators near their dropout, not far above it."

        }), ref: "Handbook p.383" },
      { q: "Common-collector (emitter-follower): voltage gain ≈",
        choices: ["$\\approx 1$ (just under)", "$-\\beta$", "$+\\beta R_C$", "$0$"], correct: 0,
        solution: S({
          c: "The common-collector (emitter follower): input at base, output at emitter. The emitter FOLLOWS the base (one $V_{BE}$ below), so voltage gain is just under 1: $A_v = \\dfrac{R_E}{R_E + r_e} \\approx 1$.",
          s: [
            "<b>Step 1 — Match.</b> ≈ 1 (slightly under).",
            "<b>Step 2 — Distractor audit.</b> $-\\beta$-flavored gains belong to common-EMITTER (inverting, large); $+\\beta R_C$ isn't dimensionally a voltage gain; 0 would mean no output.",
            "<b>Step 3 — Why use a gain-of-1 stage?</b> CURRENT gain ≈ β and the impedance transformation — it's a buffer, not an amplifier."
          ],
          a: "$A_v \\approx 1$ (non-inverting, just under unity).",
          v: "Numbers: $R_E = 1$ kΩ, $r_e = 25$ Ω → $A_v = 1000/1025 = 0.976$ ✓ — 'follows' to within 2.4%, while the source sees a load β times lighter."

        }), ref: "Handbook p.384" },
      { q: "BJT amplifier with low input impedance:",
        choices: ["Common-Base (CB)", "Common-Emitter", "Common-Collector", "Class A"], correct: 0,
        solution: S({
          c: "The three BJT topologies sort cleanly by input impedance: Common-Base is the LOW one — its input is the emitter, looking straight into $r_e = 25\\,\\text{mV}/I_E$, just ohms.",
          s: [
            "<b>Step 1 — Match.</b> Common-Base.",
            "<b>Step 2 — The Z-ladder.</b> CB: $r_e$ (ohms — low). CE: $\\beta r_e$ (kΩ — medium). CC: $\\beta R_E$ (100s of kΩ — high). Same $r_e$, different multipliers.",
            "<b>Step 3 — Distractor audit.</b> CE and CC sit higher on the ladder; 'Class A' is a BIAS class, not a topology — a category-error distractor."
          ],
          a: "Common-Base: $Z_{in} \\approx r_e$, ohms-low.",
          v: "Why low-Z input is a FEATURE: at $I_E = 0.5$ mA, $r_e = 50$ Ω — naturally close to 50-Ω RF lines ✓, which is why CB stages front RF receivers (and they dodge Miller, too)."

        }), ref: "Handbook p.384" },
      { q: "Op-amp instrumentation amplifier: 3 op-amps with specific R network. Used for:",
        choices: ["High-CMRR differential amplification", "Logarithmic conversion", "Filtering", "Comparators"], correct: 0,
        solution: S({
          c: "An instrumentation amplifier (INA): three op-amps — two buffering inputs, one differencing — built to amplify a tiny DIFFERENCE riding on a large common voltage. Signature specs: CMRR > 100 dB, huge $Z_{in}$, gain set by ONE resistor.",
          s: [
            "<b>Step 1 — Match.</b> High-CMRR differential amplification.",
            "<b>Step 2 — Why not a plain diff-amp?</b> A one-op-amp difference amplifier loads its sources and its CMRR hangs on perfect resistor matching; the INA's input buffers fix both.",
            "<b>Step 3 — Distractor audit.</b> Log conversion uses a diode/BJT in feedback; filtering needs reactive elements; comparators run open-loop."
          ],
          a: "Precision differential amplifier with very high CMRR and $Z_{in}$.",
          v: "The use-case test: a strain-gauge bridge offers millivolts of signal on volts of common-mode — only 100+ dB of rejection makes that readable ✓. ECG amplifiers face the same problem (µV heartbeats on volts of body noise); INA125/AD620 are the stock answers."

        }), ref: "Handbook p.380" },
      { q: "Voltage-controlled oscillator (VCO) frequency is proportional to:",
        choices: ["Control voltage (linearly)", "Power supply", "Temperature", "Capacitor charge"], correct: 0,
        solution: S({
          c: "A VCO is an oscillator whose output FREQUENCY is steered by an input voltage — ideally linearly: $f_{out} = f_0 + K_{VCO}V_{ctrl}$, with $K_{VCO}$ in Hz/V.",
          s: [
            "<b>Step 1 — Match.</b> Control voltage, linearly.",
            "<b>Step 2 — Distractor audit.</b> Supply and temperature CAN shift a VCO — but as unwanted drift, not the design relationship; 'capacitor charge' describes the internal mechanism of some VCOs, not the control law."
          ],
          a: "$f_{out} \\propto V_{ctrl}$ (slope $K_{VCO}$, Hz/V).",
          v: "Where it lives: the VCO is the tunable heart of every PLL — the loop measures phase error and trims $V_{ctrl}$ until the VCO locks ✓. Same idea drives FM modulators (voltage = audio, frequency follows) and clock synthesizers."

        }), ref: "Handbook p.383" },
      { q: "Pulse-width modulation (PWM) duty cycle:",
        choices: ["Ratio of ON time to total period", "Frequency", "Amplitude", "Phase"], correct: 0,
        solution: S({
          c: "PWM encodes a value in TIME, not amplitude: the duty cycle $D = t_{on}/T$ is the fraction of each period the signal is high (0-100%). The average value delivered is $D \\times V_{high}$.",
          s: [
            "<b>Step 1 — Match.</b> Ratio of ON time to total period.",
            "<b>Step 2 — Anchor points.</b> $D = 50\\%$: symmetric square wave; $D = 100\\%$: solid high; $D = 10\\%$: brief blips.",
            "<b>Step 3 — Distractor audit.</b> Frequency is $1/T$ — PWM typically holds it FIXED and varies only $t_{on}$; amplitude and phase aren't what PWM modulates."
          ],
          a: "$D = t_{on}/T$, from 0 to 100%.",
          v: "Why the trick wins: the switch is always fully ON or fully OFF — minimal dissipation — yet a filter (or a motor's inertia, or your eye watching an LED) recovers the smooth average $DV$ ✓. Buck converters literally compute $V_{out} = DV_{in}$."

        }), ref: "Handbook p.383" },
    ],

    // ====================== Ch 10: Power — +15 ======================
    10: [
      { q: "120 V single phase, 1500 W resistive load. Current:",
        choices: ["$12.5$ A", "$1500$ A", "$0.08$ A", "$180$ A"], correct: 0,
        solution: S({
          c: "For a purely RESISTIVE load, power factor = 1 and the power formula collapses to the simplest case: $P = VI$, so $I = P/V$.",
          s: [
            "<b>Step 1 — Divide.</b> $I = 1500/120 = 12.5$ A.",
            "<b>Step 2 — Distractor audit.</b> 1500 A forgets to divide; 0.08 A divides the WRONG way ($V/P$); 180 A is $1500/8.33$ — nothing."
          ],
          a: "$I = 12.5$ A",
          v: "Sanity anchor: US 15-A branch circuits exist precisely because 1500-W appliances (hair dryer, space heater, kettle) draw ~12.5 A — one such load nearly fills the circuit ✓."

        }), ref: "Handbook p.362" },
      { q: "3-phase delta-connected source with $V_{LL}=480$ V. Each phase voltage:",
        choices: ["$480$ V", "$277$ V", "$240$ V", "$830$ V"], correct: 0,
        solution: S({
          c: "The Δ/Y voltage-current duality: in DELTA, each phase winding is connected directly between two lines, so $V_{phase} = V_{LL}$ (it's the CURRENTS that differ by $\\sqrt{3}$). In WYE it's the reverse: $V_{phase} = V_{LL}/\\sqrt{3}$.",
          s: [
            "<b>Step 1 — Apply delta rule.</b> $V_{phase} = V_{LL} = 480$ V.",
            "<b>Step 2 — Distractor audit.</b> 277 V $= 480/\\sqrt{3}$ — the WYE phase voltage, the classic swap; 240 V halves; 830 V $= 480\\sqrt{3}$ multiplies when nothing should."
          ],
          a: "$V_{phase} = 480$ V (delta).",
          v: "The memory device: Δ looks like windings strung line-to-line — same voltage, split currents; Y has a neutral point — split voltages, same currents ✓. 480/277 V is exactly the US commercial Y system's pair."

        }), ref: "Handbook p.363" },
      { q: "Power dissipated in line resistance: 3-phase 120 A line current, 0.1 Ω per line:",
        choices: ["$\\approx 4320$ W (sum of 3 lines)", "$\\approx 1440$ W (one line)", "$\\approx 14.4$ W", "Zero"], correct: 0,
        solution: S({
          c: "Each conductor of a 3-phase line carries the line current through its own resistance, dissipating $I^2R$ — and there are THREE conductors: $P_{loss} = 3I_L^2R$.",
          s: [
            "<b>Step 1 — One line.</b> $120^2\\times0.1 = 1440$ W.",
            "<b>Step 2 — Three lines.</b> $3\\times1440 = 4320$ W.",
            "<b>Step 3 — Distractor audit.</b> 1440 W stops at one conductor; 14.4 W drops $I^2$ to $I$; zero ignores resistance."
          ],
          a: "$P_{loss} = 4320$ W total.",
          v: "The grid's founding equation: same power at 10× the voltage needs 1/10 the current → 1/100 the $I^2R$ loss ✓ — which is the entire reason transmission runs at hundreds of kV and transformers won the AC-vs-DC war."

        }), ref: "Handbook p.363" },
      { q: "Single-phase 240 V/120 V split-phase service is common in:",
        choices: ["US residential", "European residential", "Industrial only", "Aviation"], correct: 0,
        solution: S({
          c: "US residential service is SPLIT-PHASE: one transformer secondary, center-tapped and grounded. Each 'hot' leg is 120 V to neutral; hot-to-hot gives 240 V.",
          s: [
            "<b>Step 1 — Match.</b> US residential.",
            "<b>Step 2 — How the two voltages divide the work.</b> 120 V: outlets, lights, electronics. 240 V (both legs): dryer, range, A/C, EV charger.",
            "<b>Step 3 — Distractor audit.</b> European homes: single 230 V leg, no split; industry uses 3-phase (208/480 V); aircraft use 115 V at 400 Hz."
          ],
          a: "US residential (240 V center-tapped → two 120-V legs).",
          v: "Naming precision worth keeping: split-phase is NOT two-phase — the two legs are 180° apart (one winding, opposite ends), not 90° ✓. Balanced legs also cancel neutral current — why the neutral can be sized same as the hots."

        }), ref: "Handbook p.363" },
      { q: "Capacitor bank used for PF correction is connected in:",
        choices: ["Parallel with load", "Series with load", "Series with source", "Replaces load"], correct: 0,
        solution: S({
          c: "Inductive loads (motors) draw lagging reactive power. A capacitor connected in PARALLEL supplies leading VARs locally, cancelling the lagging VARs — the utility then ships mostly real power.",
          s: [
            "<b>Step 1 — Match.</b> Parallel with the load.",
            "<b>Step 2 — Why parallel and not series?</b> Parallel leaves the load's voltage untouched — the load never knows the capacitor exists; SERIES capacitance would drop voltage and carry full load current (that's a transmission-line compensation trick, different job).",
            "<b>Step 3 — Distractor audit.</b> 'Series with source' and 'replaces load' both disturb the circuit being corrected."
          ],
          a: "In parallel (shunt) with the inductive load.",
          v: "The vector picture: load draws $P + jQ_L$; capacitor injects $-jQ_C$; the source sees $P + j(Q_L - Q_C)$ — angle shrinks, pf → 1 ✓. Utilities bill industrial customers for poor pf, so banks (often contactor-switched in steps) pay for themselves."

        }), ref: "Handbook p.363" },
      { q: "Star-Delta motor starter purpose:",
        choices: ["Reduce starting current (~1/3 of direct-online)", "Increase starting torque", "Speed control", "Reverse rotation"], correct: 0,
        solution: S({
          c: "A large induction motor started direct-on-line gulps 6-8× rated current. The Y-Δ starter first connects the windings in WYE — each sees $V/\\sqrt{3}$ — then switches to DELTA at speed. Lower voltage → current AND torque both drop to 1/3.",
          s: [
            "<b>Step 1 — Match.</b> Reduce starting current to ~1/3 of DOL.",
            "<b>Step 2 — Where 1/3 comes from.</b> Phase voltage down by $\\sqrt{3}$; torque $\\propto V^2$ → $(1/\\sqrt{3})^2 = 1/3$; line current likewise 1/3.",
            "<b>Step 3 — Distractor audit.</b> Torque DECREASES (the price, not the goal — so only light-start loads qualify: fans, pumps); speed control needs a VFD; reversal = swap two phases."
          ],
          a: "Cut starting inrush to ≈1/3 of direct-on-line.",
          v: "The fine print that fails exams and motors: the Y→Δ transition causes a current spike if switched at the wrong moment, and starting torque of 1/3 may stall a loaded conveyor ✓ — modern soft-starters and VFDs replaced Y-Δ for exactly these reasons."

        }), ref: "Handbook p.365" },
      { q: "Open-circuit test of transformer measures:",
        choices: ["Core (iron) losses primarily", "Winding (copper) losses", "Insulation", "Voltage ratio only"], correct: 0,
        solution: S({
          c: "The two classic transformer tests split the loss budget. OPEN-circuit test: rated voltage, secondary open → only tiny magnetizing current flows → copper loss negligible → wattmeter reads CORE (iron) loss.",
          s: [
            "<b>Step 1 — Match.</b> Core losses.",
            "<b>Step 2 — The mirror test.</b> SHORT-circuit test: low voltage, rated current → flux tiny → core loss negligible → wattmeter reads COPPER loss. The pair fully populates the equivalent-circuit model.",
            "<b>Step 3 — Distractor audit.</b> Copper loss belongs to the SC test (the eternal swap); insulation is a hipot test; the ratio is a side-benefit, not what the test 'measures'."
          ],
          a: "Core (iron) losses — hysteresis + eddy currents.",
          v: "Why the split matters operationally: core loss runs 24/7 whenever energized (voltage-set), copper loss tracks load² ✓ — so an always-on, lightly-loaded transformer should be optimized for low core loss."

        }), ref: "Handbook p.364" },
      { q: "Per-unit (pu) impedance of a transformer is the same on both sides because:",
        choices: ["Base impedance also transforms by $a^2$", "Real impedance is the same", "Both sides have same windings", "Coincidence"], correct: 0,
        solution: S({
          c: "Per-unit = actual value ÷ base value. Across a transformer, actual impedance transforms by $a^2$ (turns ratio squared) — but the BASE impedance $Z_{base} = V_{base}^2/S_{base}$ ALSO transforms by $a^2$ (voltage base scales by $a$, power base is common). The ratio is identical on both sides.",
          s: [
            "<b>Step 1 — Match.</b> Base impedance also transforms by $a^2$ — the $a^2$'s cancel.",
            "<b>Step 2 — Distractor audit.</b> The real (ohmic) impedance is NOT the same on both sides — it differs by $a^2$, which is the whole point; 'same windings' is false; 'coincidence' — it's engineered, by choosing bases that track the ratio."
          ],
          a: "$Z_{pu}$ is side-independent because base and actual scale together.",
          v: "What this buys: in a grid with 13.8 kV, 138 kV, and 500 kV sections, per-unit erases every transformer — the network becomes one flat impedance diagram ✓. It's why nameplate impedance is quoted as '5%' with no side specified."

        }), ref: "Handbook p.363-364" },
      { q: "Synchronous generator frequency depends on:",
        choices: ["Rotor speed and pole count", "Voltage only", "Load only", "Stator winding"], correct: 0,
        solution: S({
          c: "A synchronous machine's electrical frequency is mechanically LOCKED to its shaft: $f = \\dfrac{P\\times N}{120}$, with $P$ = number of poles, $N$ = speed in rpm.",
          s: [
            "<b>Step 1 — Match.</b> Rotor speed and pole count — nothing else.",
            "<b>Step 2 — Feel the formula.</b> 60 Hz options: 2 poles @ 3600 rpm (steam turbine), 4 @ 1800, dozens of poles @ ~100 rpm (hydro).",
            "<b>Step 3 — Distractor audit.</b> Voltage is set by field excitation (a separate knob); load affects the torque ANGLE, not locked frequency; stator winding sets voltage/phases, not f."
          ],
          a: "$f = PN/120$ — speed × poles.",
          v: "Check 4-pole: $4\\times1800/120 = 60$ Hz ✓. Grid corollary: paralleling a generator requires matching frequency, voltage, AND phase before the breaker closes — get it wrong and the grid wins."

        }), ref: "Handbook p.365" },
      { q: "DC machine commutator function:",
        choices: ["Converts AC in armature to DC at brushes (or vice versa)", "Generates field", "Bearings", "Cooling"], correct: 0,
        solution: S({
          c: "Inside any rotating DC machine the armature conductors actually carry AC — each conductor's EMF flips every half-turn as it passes opposite poles. The COMMUTATOR is a mechanical rectifier: a segmented copper ring that swaps the brush connections every half-rotation, so the outside world sees DC.",
          s: [
            "<b>Step 1 — Match.</b> Converts armature AC ↔ brush DC.",
            "<b>Step 2 — Both directions.</b> Generator: internal AC → DC out. Motor: DC in gets commutated so torque always pushes the SAME way — without it, the rotor would just jitter.",
            "<b>Step 3 — Distractor audit.</b> The FIELD comes from field windings or magnets; bearings and cooling are mechanical bystanders."
          ],
          a: "Mechanical AC↔DC converter between armature and brushes.",
          v: "The maintenance reality this creates: brushes wear, spark, and limit speed — which is why 'brushless DC' motors moved the magnets to the rotor and replaced the commutator with electronic switching ✓."

        }), ref: "Handbook p.365" },
      { q: "Three-phase induction motor reversal:",
        choices: ["Swap any two of the three lines", "Reverse polarity", "Change frequency", "Reduce voltage"], correct: 0,
        solution: S({
          c: "An induction motor follows its ROTATING magnetic field, whose direction is set by the phase sequence (A-B-C vs A-C-B). Swapping ANY two of the three supply lines reverses the sequence — and the motor.",
          s: [
            "<b>Step 1 — Match.</b> Swap any two lines.",
            "<b>Step 2 — Distractor audit.</b> 'Reverse polarity' is a DC concept — AC has no fixed polarity; changing frequency changes SPEED (that's a VFD's job); reducing voltage just weakens torque ($\\propto V^2$)."
          ],
          a: "Interchange any two of the three phases.",
          v: "Field check: this is literally how reversing starters are wired — two contactors, interlocked, with two leads crossed ✓. The single-phase exception: no rotating field to reverse — you must re-wire the start winding or capacitor instead."

        }), ref: "Handbook p.365" },
      { q: "Power factor of pure inductor:",
        choices: ["$0$ (lagging)", "$1$", "$0.5$", "$-1$"], correct: 0,
        solution: S({
          c: "Power factor $= \\cos\\theta$, where θ is the angle between voltage and current. A pure inductor puts current 90° BEHIND voltage: $\\cos 90° = 0$ — 'zero, lagging'.",
          s: [
            "<b>Step 1 — Match.</b> 0 (lagging).",
            "<b>Step 2 — What pf = 0 means physically.</b> Energy sloshes into the magnetic field and back out every quarter-cycle — average REAL power is exactly zero; everything is reactive (VARs).",
            "<b>Step 3 — Distractor audit.</b> 1 is a pure resistor; 0.5 implies θ = 60° (a mixed load); −1 isn't a power factor — pf is a cosine magnitude tagged 'leading' or 'lagging'."
          ],
          a: "pf = 0, lagging.",
          v: "Symmetry check: a pure CAPACITOR is also pf = 0 but LEADING (ELI the ICE man: inductor L — EMF leads I; capacitor C — I leads EMF) ✓ — which is exactly why capacitors can cancel inductive VARs."

        }), ref: "Handbook p.362" },
      { q: "Wye-connected load: line voltage 480V, line current 25 A, pf 0.85. Total real power:",
        choices: ["$\\approx 17.66$ kW", "$\\approx 20$ kW", "$\\approx 12$ kW", "$\\approx 8.4$ kW"], correct: 0,
        solution: S({
          c: "Universal 3-phase power formula (works for Y or Δ when stated in LINE quantities): $P = \\sqrt{3}\\,V_{LL}I_L\\cos\\theta$.",
          s: [
            "<b>Step 1 — Apparent power.</b> $S = \\sqrt{3}\\times480\\times25 = 20{,}785$ VA ≈ 20.8 kVA.",
            "<b>Step 2 — Real power.</b> $P = S\\cos\\theta = 20{,}785\\times0.85 = 17{,}667$ W ≈ 17.66 kW.",
            "<b>Step 3 — Distractor audit.</b> 20 kW is S mislabeled as P (forgot the pf); 12 kW drops the $\\sqrt{3}$; 8.4 kW commits both sins."
          ],
          a: "$P \\approx 17.7$ kW",
          v: "The √3's origin, so it never feels arbitrary: per-phase $P = 3V_{ph}I_{ph}\\cos\\theta$ with $V_{ph} = V_{LL}/\\sqrt{3}$ (wye) → $3/\\sqrt{3} = \\sqrt{3}$ ✓. Reactive completes the triangle: $Q = S\\sin\\theta \\approx 10.9$ kVAR."

        }), ref: "Handbook p.363" },
      { q: "Voltage drop across transmission line = ?",
        choices: ["$I \\cdot (R + jX)$", "$I \\cdot R$", "$I \\cdot X$", "$IL$"], correct: 0,
        solution: S({
          c: "A real transmission line is not just wire resistance — its conductors form loops with INDUCTANCE, so the series impedance is complex: $Z = R + jX$. Voltage drop is the phasor product $\\Delta V = I(R + jX)$.",
          s: [
            "<b>Step 1 — Match.</b> $I(R + jX)$.",
            "<b>Step 2 — Why X can't be ignored.</b> For typical lines $X > R$ (often 3-10×) — the REACTIVE drop dominates; modeling only $IR$ badly underestimates regulation.",
            "<b>Step 3 — Distractor audit.</b> $IR$ alone and $IX$ alone are each half the story; $IL$ confuses inductance with its reactance $\\omega L$."
          ],
          a: "$\\Delta V = I(R + jX)$ — a complex (phasor) drop.",
          v: "Model ladder for perspective: short line (<80 km) → series $R+jX$ as here; medium → add shunt capacitance (π-model); long → distributed ABCD parameters ✓. The phasor nature also explains why drawing MORE reactive current sags voltage hardest."

        }), ref: "Handbook p.363" },
      { q: "Transformer rated 100 kVA, 13.8 kV / 480 V. Short-circuit current (primary, rated impedance 5%):",
        choices: ["$\\approx 145$ A (20× rated)", "Rated 7.25 A", "$\\approx 7.25$ A", "$10$ A"], correct: 0,
        solution: S({
          c: "A transformer's nameplate impedance (here 5% = 0.05 pu) IS its short-circuit current rating in disguise: with a bolted fault on the secondary, the only thing limiting current is that impedance, so $I_{SC} = I_{rated}/Z_{pu}$.",
          s: [
            "<b>Step 1 — Rated primary current.</b> $I_{rated} = S/V = 100{,}000/13{,}800 = 7.25$ A.",
            "<b>Step 2 — Fault current.</b> $I_{SC} = 7.25/0.05 = 145$ A — exactly $1/0.05 = 20\\times$ rated.",
            "<b>Step 3 — Distractor audit.</b> 7.25 A (twice offered) is the RATED current — a fault is 20× worse; 10 A is a guess."
          ],
          a: "$I_{SC} \\approx 145$ A on the primary (20× rated).",
          v: "Why the number runs protection engineering: breakers and fuses must INTERRUPT this current, and bus bracing must survive its magnetic forces ✓. Note the trade hiding in Z%: lower impedance → better regulation but FIERCER fault currents."

        }), ref: "Handbook p.364" },
    ],

    // ====================== Ch 11: EM — +8 ======================
    11: [
      { q: "Electrostatic force between two 1 C charges 1 m apart:",
        choices: ["$\\approx 9 \\times 10^9$ N (HUGE)", "$1$ N", "$10^{-9}$ N", "$8.99$ N"], correct: 0,
        solution: S({
          c: "Coulomb's law: $F = \\dfrac{k_e q_1 q_2}{r^2}$ with $k_e = 8.99\\times10^{9}$ N·m²/C². With ones everywhere, the answer IS the constant.",
          s: [
            "<b>Step 1 — Plug in.</b> $F = 8.99\\times10^{9}\\times1\\times1/1^2 \\approx 9\\times10^{9}$ N.",
            "<b>Step 2 — Grasp the size.</b> ~9 billion newtons — roughly the weight of a million tons. Two coulombs a meter apart would tear themselves apart.",
            "<b>Step 3 — Distractor audit.</b> 1 N treats $k_e$ as 1; $10^{-9}$ inverts the constant; 8.99 N drops the $10^9$."
          ],
          a: "$F \\approx 9\\times10^{9}$ N — enormous.",
          v: "The real lesson: 1 C is a huge charge — static electricity lives at µC and nC scales ✓ (a doorknob zap is ~µC). Currents move coulombs per second only because conductors stay NEUTRAL while charge flows through."

        }), ref: "Handbook p.355" },
      { q: "Electric field of a point charge at distance $r$:",
        choices: ["$E = k_e q/r^2$", "$E = k_e q/r$", "$E = q r$", "$E = qr^2$"], correct: 0,
        solution: S({
          c: "Electric field = force per unit test charge: $E = F/q_{test}$. Dividing Coulomb's law by $q_{test}$: $E = \\dfrac{k_e q}{r^2}$ — inverse-SQUARE, pointing radially.",
          s: [
            "<b>Step 1 — Match.</b> $E = k_e q/r^2$.",
            "<b>Step 2 — The geometry ladder (worth memorizing as a set).</b> Point charge: $1/r^2$. Infinite LINE charge: $1/r$. Infinite PLANE: constant. Each lost dimension of spreading softens the falloff.",
            "<b>Step 3 — Distractor audit.</b> $k_eq/r$ is the POTENTIAL's form (V, not E); $qr$ and $qr^2$ grow with distance — backwards."
          ],
          a: "$E = k_e q/r^2$, radial.",
          v: "Units check: N·m²/C² × C / m² = N/C = V/m ✓. The $1/r^2$ is geometry itself — the same flux through ever-larger spheres of area $4\\pi r^2$ — which is why gravity obeys the identical law."

        }), ref: "Handbook p.355" },
      { q: "Voltage between parallel plates with E-field $E$ and separation $d$:",
        choices: ["$V = Ed$", "$V = E/d$", "$V = Ed^2$", "$V = E + d$"], correct: 0,
        solution: S({
          c: "Between parallel plates the field is UNIFORM, so the integral $V = \\int E\\,dx$ collapses to a product: $V = Ed$.",
          s: [
            "<b>Step 1 — Match.</b> $V = Ed$.",
            "<b>Step 2 — Distractor audit.</b> $E/d$ rearranges the inverse relation wrongly (it's $E = V/d$); $Ed^2$ and $E+d$ fail dimensionally."
          ],
          a: "$V = Ed$",
          v: "Units read it back: (V/m)×m = V ✓. The inverse form $E = V/d$ is the practical one: 5 kV across a 1-mm gap = 5 MV/m — beyond air's ~3 MV/m breakdown, so it arcs. That division is the whole science of insulation spacing."

        }), ref: "Handbook p.355" },
      { q: "Faraday's law: induced EMF =",
        choices: ["$-d\\Phi/dt$", "$+d\\Phi/dt$", "$\\Phi$", "$1/\\Phi$"], correct: 0,
        solution: S({
          c: "Faraday's law: a CHANGING magnetic flux through a loop induces an EMF around it: $\\mathcal{E} = -\\dfrac{d\\Phi_B}{dt}$. The minus sign is Lenz's law — the induced current opposes the change that made it.",
          s: [
            "<b>Step 1 — Match.</b> $-d\\Phi/dt$.",
            "<b>Step 2 — Why the sign matters.</b> Lenz = energy conservation in disguise: if induction AIDED the change, flux would grow its own cause — a free-energy machine. Opposition is what makes generators take torque to turn.",
            "<b>Step 3 — Distractor audit.</b> $+d\\Phi/dt$ violates exactly that; $\\Phi$ alone — STEADY flux induces nothing (the most-tested misconception); $1/\\Phi$ is dimensionless nonsense."
          ],
          a: "$\\mathcal{E} = -d\\Phi_B/dt$",
          v: "Everything AC stands on this one line: generators (motion changes Φ), transformers (AC current changes Φ), induction motors (rotating field changes Φ through rotor bars) ✓. Multi-turn coils just multiply: $\\mathcal{E} = -N\\,d\\Phi/dt$."

        }), ref: "Handbook p.355" },
      { q: "Inductance of a solenoid: $N = 200$, $l = 10$ cm, $A = 5$ cm², $\\mu_r = 1$:",
        choices: ["$\\approx 25\\ \\mu$H", "$25$ mH", "$2.5$ H", "$250$ µH"], correct: 0,
        solution: S({
          c: "Solenoid inductance: $L = \\dfrac{\\mu_0\\mu_r N^2 A}{l}$ — note inductance scales as turns SQUARED (each turn both makes flux and links it).",
          s: [
            "<b>Step 1 — SI units first.</b> $A = 5$ cm² $= 5\\times10^{-4}$ m²; $l = 0.1$ m; $\\mu_0 = 4\\pi\\times10^{-7}$ H/m.",
            "<b>Step 2 — Compute.</b> $N^2A/l = 40{,}000\\times5\\times10^{-4}/0.1 = 200$. Then $L = 4\\pi\\times10^{-7}\\times200 \\approx 2.51\\times10^{-5}$ H.",
            "<b>Step 3 — Distractor audit.</b> 25 mH and 2.5 H are unit-conversion slips (cm² left unconverted, or both errors); 250 µH is one stray factor of 10."
          ],
          a: "$L \\approx 25$ µH",
          v: "Order-of-magnitude instinct: air-core coils live in µH; mH needs ferrite or iron ($\\mu_r$ of 100s-1000s — the formula's one free multiplier); H means a massive iron-core choke ✓. The $N^2$ is the designer's lever: double the turns, quadruple the L."

        }), ref: "Handbook p.355" },
      { q: "EM wave impedance of free space:",
        choices: ["$\\approx 377\\ \\Omega$", "$50\\ \\Omega$", "$1\\ \\Omega$", "$0$"], correct: 0,
        solution: S({
          c: "Free space itself has a wave impedance — the fixed ratio of E to H in a propagating wave: $\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} \\approx 377\\ \\Omega$ (exactly $120\\pi$). A memorized constant.",
          s: [
            "<b>Step 1 — Match.</b> ≈377 Ω.",
            "<b>Step 2 — Distractor audit.</b> 50 Ω is COAX-CABLE impedance — a human design choice, not nature's (the classic confusion); 1 Ω and 0 have no basis.",
            "<b>Step 3 — Inside a dielectric.</b> $\\eta = \\eta_0/\\sqrt{\\varepsilon_r}$ (non-magnetic) — denser medium, lower impedance, same pattern as $v = c/\\sqrt{\\varepsilon_r}$."
          ],
          a: "$\\eta_0 = 120\\pi \\approx 377\\ \\Omega$",
          v: "Units check: in a wave, E is V/m and H is A/m — their ratio is V/A = ohms ✓. Where it bites: an antenna is precisely a matching device between a 50-Ω line and 377-Ω space — mismatch either interface and power reflects."

        }), ref: "Handbook p.368" },
      { q: "Wavelength of microwave at 2.45 GHz (microwave oven):",
        choices: ["$\\approx 12.2$ cm", "$30$ cm", "$1$ m", "$1$ mm"], correct: 0,
        solution: S({
          c: "Wavelength and frequency share the speed of light: $\\lambda = c/f$.",
          s: [
            "<b>Step 1 — Divide.</b> $\\lambda = \\dfrac{3\\times10^{8}}{2.45\\times10^{9}} = 0.1224$ m $\\approx 12.2$ cm.",
            "<b>Step 2 — Distractor audit.</b> 30 cm is 1 GHz's wavelength; 1 m is 300 MHz; 1 mm is 300 GHz — each a decade-slip on the same formula."
          ],
          a: "$\\lambda \\approx 12.2$ cm",
          v: "Why your microwave has a turntable: standing waves put hot spots every HALF wavelength ≈ 6 cm apart — stationary food cooks in stripes ✓. Wi-Fi shares this 2.4-GHz band, which is also why the oven can jam the router."

        }), ref: "Handbook p.368" },
      { q: "For a TEM wave in dielectric ($\\varepsilon_r = 4$): speed:",
        choices: ["$\\approx 1.5\\times 10^8$ m/s", "$3\\times 10^8$ m/s", "$3\\times 10^8/4$", "$3\\times 10^8 \\cdot 4$"], correct: 0,
        solution: S({
          c: "Light slows in a dielectric: $v = \\dfrac{c}{\\sqrt{\\varepsilon_r}}$ (non-magnetic media, $\\mu_r = 1$). Note the SQUARE ROOT — the most-tested detail.",
          s: [
            "<b>Step 1 — Apply.</b> $\\sqrt{4} = 2$, so $v = c/2 = 1.5\\times10^{8}$ m/s.",
            "<b>Step 2 — Distractor audit.</b> $c$ unchanged ignores the medium; $c/4$ forgets the square root (THE trap); $c\\times4$ exceeds light speed — impossible."
          ],
          a: "$v = 1.5\\times10^{8}$ m/s",
          v: "The practical name is VELOCITY FACTOR: polyethylene coax ($\\varepsilon_r \\approx 2.25$) → VF $= 1/1.5 \\approx 0.66$ — signals crawl at 2/3 of c, about 20 cm/ns ✓. Cable-length timing (radar delay lines, phased antennas) is built on this number."

        }), ref: "Handbook p.368" },
    ],

    // ====================== Ch 12: Control — +12 ======================
    12: [
      { q: "Open-loop step response of $G(s) = 1/(s+2)$:",
        choices: ["$(1 - e^{-2t})/2 \\cdot u(t)$", "$e^{-2t}$", "Constant 0.5", "Sine wave"], correct: 0,
        solution: S({
          c: "Step response in the Laplace world: multiply by the step's transform $1/s$, then invert: $Y(s) = G(s)\\cdot\\dfrac{1}{s}$. Partial fractions split it into pieces you can look up.",
          s: [
            "<b>Step 1 — Set up.</b> $Y(s) = \\dfrac{1}{s(s+2)}$.",
            "<b>Step 2 — Partial fractions.</b> $\\dfrac{1}{s(s+2)} = \\dfrac{1/2}{s} - \\dfrac{1/2}{s+2}$ (cover-up: at $s=0$ → 1/2; at $s=-2$ → −1/2).",
            "<b>Step 3 — Invert term by term.</b> $1/s \\to u(t)$; $1/(s+2) \\to e^{-2t}$. So $y(t) = \\tfrac{1}{2}(1 - e^{-2t})u(t)$.",
            "<b>Step 4 — Distractor audit.</b> $e^{-2t}$ alone is the IMPULSE response (forgot the $1/s$); constant 0.5 is only the final value; nothing oscillates — the pole is real."
          ],
          a: "$y(t) = \\tfrac{1}{2}(1 - e^{-2t})u(t)$",
          v: "Two checks beat one: final-value theorem $\\lim_{s\\to0} sY(s) = 1/2$ ✓ matches DC gain $G(0) = 1/2$; and the time constant $\\tau = 1/2$ s says 63% of the way up at $t = 0.5$ s — plug in: $\\tfrac12(1-e^{-1}) = 0.316 = 63\\%$ of 0.5 ✓."

        }), ref: "Handbook p.366" },
      { q: "Steady-state error for type-2 system to ramp input:",
        choices: ["$0$", "$1/K_v$", "Infinite", "$1/K_p$"], correct: 0,
        solution: S({
          c: "SYSTEM TYPE = number of pure integrators ($s = 0$ poles) in the open loop. Each integrator 'absorbs' one polynomial degree of input: an integrator can track what one degree below it throws. Type 2 vs a ramp (degree 1): two integrators against one degree — perfect tracking, zero error.",
          s: [
            "<b>Step 1 — The error grid (memorize as a staircase).</b> Type 0: step → $\\tfrac{1}{1+K_p}$, ramp → ∞. Type 1: step → 0, ramp → $1/K_v$, parabola → ∞. Type 2: step, ramp → 0; parabola → $1/K_a$.",
            "<b>Step 2 — Read off.</b> Type 2 + ramp → 0.",
            "<b>Step 3 — Distractor audit.</b> $1/K_v$ is the TYPE-1 ramp answer (one row off — the standard trap); infinite would be type 0; $1/K_p$ pairs with steps."
          ],
          a: "$e_{ss} = 0$",
          v: "The pattern in one sentence: each system type zeroes the error for inputs up to degree (type − 1), gives a FINITE error at degree = type, and loses entirely above ✓ — one rule replaces the whole table."

        }), ref: "Handbook p.366" },
      { q: "Maximum overshoot $M_p$ for $\\zeta = 0.6$:",
        choices: ["$\\approx 9.5\\%$", "$0\\%$", "$50\\%$", "$25\\%$"], correct: 0,
        solution: S({
          c: "For a standard 2nd-order underdamped system, peak overshoot depends ONLY on damping ratio: $M_p = e^{-\\pi\\zeta/\\sqrt{1-\\zeta^2}}$.",
          s: [
            "<b>Step 1 — The radical.</b> $\\sqrt{1 - 0.36} = 0.8$.",
            "<b>Step 2 — The exponent.</b> $-\\pi(0.6)/0.8 = -2.356$.",
            "<b>Step 3 — Exponentiate.</b> $e^{-2.356} \\approx 0.0948 \\to 9.5\\%$.",
            "<b>Step 4 — Distractor audit.</b> 0% needs $\\zeta \\ge 1$ — critically damped or overdamped, no oscillation at all; 50% would be $\\zeta \\approx 0.22$; 25% is $\\zeta \\approx 0.4$."
          ],
          a: "$M_p \\approx 9.5\\%$",
          v: "Calibration points worth carrying into the exam: ζ = 0.5 → 16%, 0.6 → 9.5%, 0.707 → 4.3%, 1.0 → 0% ✓ — and note $\\omega_n$ appears nowhere: frequency sets HOW FAST you overshoot, ζ sets HOW MUCH."

        }), ref: "Handbook p.366" },
      { q: "Pole at origin in open-loop transfer means:",
        choices: ["Type-1 system (integrator)", "Type-0", "Unstable", "Resonant"], correct: 0,
        solution: S({
          c: "A pole at $s = 0$ IS an integrator ($1/s$ = integration in Laplace). Count them in the OPEN loop and you have the system TYPE — the single number that predicts steady-state errors.",
          s: [
            "<b>Step 1 — Match.</b> One pole at origin → Type 1.",
            "<b>Step 2 — What Type 1 buys.</b> Zero steady-state error to a step, finite error $1/K_v$ to a ramp.",
            "<b>Step 3 — Distractor audit.</b> Type 0 has NO origin pole; an OPEN-loop integrator doesn't make the CLOSED loop unstable (closed-loop poles decide that); 'resonant' needs a complex pole pair, not $s=0$."
          ],
          a: "Type-1 system — one open-loop integrator.",
          v: "Intuition for why integrators kill step error: any persistent error keeps charging the integrator, ramping the actuator until the error is driven to zero — only $e = 0$ is an equilibrium ✓. (Same reason the I in PID exists.)"

        }), ref: "Handbook p.366" },
      { q: "Routh array first column has all positive entries. Conclusion:",
        choices: ["All poles in LHP — stable", "Unstable", "Marginal", "Cannot tell"], correct: 0,
        solution: S({
          c: "The Routh-Hurwitz criterion reads stability straight off the characteristic polynomial — no root-solving: the number of SIGN CHANGES down the first column equals the number of right-half-plane poles.",
          s: [
            "<b>Step 1 — Apply.</b> All entries positive → zero sign changes → zero RHP poles → STABLE.",
            "<b>Step 2 — Distractor audit.</b> Unstable requires at least one sign change; marginal shows up as a ROW OF ZEROS (poles on the jω-axis — handle with the auxiliary equation); 'cannot tell' underrates the theorem — it's conclusive.",
            "<b>Step 3 — The special cases worth one glance.</b> Zero in the first column (others nonzero): substitute ε and take limits. Entire row zero: differentiate the auxiliary polynomial."
          ],
          a: "All poles in the LHP — the system is stable.",
          v: "Why Routh survives in the calculator age: it works SYMBOLICALLY — leave a gain K in the polynomial and the first-column conditions hand you the exact stability range of K ✓, which is its classic exam role."

        }), ref: "Handbook p.365" },
      { q: "Lead compensator pole-zero relationship:",
        choices: ["Zero closer to origin than pole", "Pole closer to origin", "Pole = zero", "Both at origin"], correct: 0,
        solution: S({
          c: "A lead compensator $\\dfrac{s+z}{s+p}$ needs $z < p$ — ZERO closer to the origin. Between those corner frequencies the zero's +90° arrives before the pole's −90°, leaving a hump of POSITIVE (lead) phase.",
          s: [
            "<b>Step 1 — Match.</b> Zero closer to origin ($z < p$).",
            "<b>Step 2 — What the phase hump is FOR.</b> Injected near the gain-crossover frequency, it raises PHASE MARGIN → less overshoot, faster response — lead is the frequency-domain cousin of derivative action.",
            "<b>Step 3 — Distractor audit.</b> Pole closer ($p < z$) is a LAG compensator — negative phase, used instead to boost low-frequency gain and shrink steady-state error; $p = z$ cancels itself; both at origin is no compensator."
          ],
          a: "$z < p$: zero nearer the origin → positive phase lead.",
          v: "The duality table to retain: LEAD ↔ better transient/phase margin ↔ derivative-like; LAG ↔ better steady-state accuracy ↔ integral-like; lead-lag ↔ both ✓. Max lead occurs at $\\omega_m = \\sqrt{zp}$, the geometric mean — place IT at crossover."

        }), ref: "Handbook p.366" },
      { q: "PID controller derivative term effect on:",
        choices: ["Adds damping, predicts future, but amplifies noise", "Eliminates SS error", "Increases gain only", "No effect"], correct: 0,
        solution: S({
          c: "The D term computes $K_d\\,de/dt$ — it reacts to how FAST the error is changing, not its size. That look-ahead adds DAMPING (it sees overshoot coming and brakes early), but differentiating also magnifies high-frequency NOISE.",
          s: [
            "<b>Step 1 — Match.</b> Adds damping / anticipates, but amplifies noise.",
            "<b>Step 2 — The three terms, divided.</b> P reacts to present error; I erases STEADY-STATE error (accumulates the past); D anticipates the future. The question pins the D role precisely.",
            "<b>Step 3 — Distractor audit.</b> 'Eliminates SS error' is the INTEGRAL term's job (the classic mix-up); 'increases gain only' describes P; 'no effect' is wrong."
          ],
          a: "Adds damping and anticipation — at the cost of noise amplification.",
          v: "The practical fix that confirms the trade: real controllers use a 'filtered derivative' $\\dfrac{K_d s}{1 + s/N}$ — a low-pass cap on the D gain so noise doesn't blow up the actuator ✓. Pure D is never used alone (it ignores constant errors entirely)."

        }), ref: "Handbook p.366" },
      { q: "A system has $\\omega_n = 5$ rad/s, $\\zeta = 0.5$. Damped frequency:",
        choices: ["$\\approx 4.33$ rad/s", "$5$ rad/s", "$2.5$ rad/s", "$10$ rad/s"], correct: 0,
        solution: S({
          c: "An underdamped system rings at its DAMPED frequency, which is the natural frequency pulled down by damping: $\\omega_d = \\omega_n\\sqrt{1 - \\zeta^2}$.",
          s: [
            "<b>Step 1 — Radical.</b> $\\sqrt{1 - 0.25} = \\sqrt{0.75} = 0.866$.",
            "<b>Step 2 — Multiply.</b> $\\omega_d = 5\\times0.866 = 4.33$ rad/s.",
            "<b>Step 3 — Distractor audit.</b> 5 rad/s is $\\omega_n$ itself (the UNdamped frequency — true only at ζ = 0); 2.5 halves; 10 doubles."
          ],
          a: "$\\omega_d \\approx 4.33$ rad/s",
          v: "The geometry behind it: the pole sits at $-\\zeta\\omega_n \\pm j\\omega_d$ — a point distance $\\omega_n$ from the origin at angle $\\cos^{-1}\\zeta$ off the negative-real axis, so $\\omega_d$ is just its imaginary (vertical) coordinate ✓. Damping always lowers the ringing frequency."

        }), ref: "Handbook p.366" },
      { q: "Bode plot magnitude slope of pure $K$ (gain only):",
        choices: ["$0$ dB/dec (flat)", "$-20$ dB/dec", "$+20$ dB/dec", "Variable"], correct: 0,
        solution: S({
          c: "A pure gain $K$ has the same magnitude at EVERY frequency — so its Bode magnitude is a horizontal line: slope 0 dB/decade, sitting at $20\\log_{10}K$.",
          s: [
            "<b>Step 1 — Match.</b> 0 dB/dec (flat).",
            "<b>Step 2 — Distractor audit.</b> −20 dB/dec is a POLE ($1/s$); +20 is a ZERO ($s$); 'variable' would need mixed dynamics. K alone has none.",
            "<b>Step 3 — Phase too.</b> A positive constant adds 0° of phase (a negative K would add ±180°)."
          ],
          a: "0 dB/decade — flat, at $20\\log K$.",
          v: "Why this is the Bode baseline: every transfer function is a product, and on the log scale products ADD — you stack the flat K level, then tilt by ∓20 dB/dec at each zero/pole corner ✓. K just sets the starting height."

        }), ref: "Handbook p.366" },
      { q: "Differentiator $H(s) = s$: Bode magnitude:",
        choices: ["$+20$ dB/dec (rising)", "Flat", "$-20$ dB/dec", "Constant"], correct: 0,
        solution: S({
          c: "For $H(s) = s$, the magnitude is $|H(j\\omega)| = \\omega$ — it grows in direct proportion to frequency. In dB that's $20\\log\\omega$, a line rising at +20 dB/decade.",
          s: [
            "<b>Step 1 — Match.</b> +20 dB/dec, rising.",
            "<b>Step 2 — Why +20.</b> Ten times the frequency → ten times the magnitude → $20\\log 10 = +20$ dB. That's the definition of one decade of +20 slope.",
            "<b>Step 3 — Distractor audit.</b> Flat is a constant; −20 is the INTEGRATOR $1/s$ (exact opposite — the most common confusion); 'constant' ignores the s entirely."
          ],
          a: "+20 dB/decade (and constant +90° phase).",
          v: "The integrator/differentiator mirror, worth memorizing as a pair: $1/s$ → −20 dB/dec, −90°; $s$ → +20 dB/dec, +90° ✓. The rising gain is also why pure differentiators amplify high-frequency noise — same caution as PID's D term."

        }), ref: "Handbook p.366" },
      { q: "Closed-loop poles all in LHP. Conclusion:",
        choices: ["Closed-loop stable", "Open loop unstable", "Marginal", "Insufficient info"], correct: 0,
        solution: S({
          c: "Stability is decided ENTIRELY by where the CLOSED-loop poles sit. All in the left-half plane (negative real parts) → every natural mode decays → BIBO stable. Full stop.",
          s: [
            "<b>Step 1 — Match.</b> Closed-loop stable.",
            "<b>Step 2 — The key insight (and the trap).</b> Open-loop stability is IRRELEVANT to this conclusion — feedback routinely stabilizes open-loop-unstable plants (an inverted pendulum, a fighter jet). So 'open loop unstable' is neither implied nor contradicted.",
            "<b>Step 3 — Distractor audit.</b> Marginal needs poles ON the jω-axis; 'insufficient info' underrates a complete pole map — LHP poles ARE the definition of stable."
          ],
          a: "The closed-loop system is stable.",
          v: "Why 'left = decay': a pole at $s = \\sigma + j\\omega$ produces $e^{\\sigma t}$; σ < 0 means shrinking, σ > 0 growing, σ = 0 sustained ✓. Feedback's whole purpose is to drag poles leftward into that stable region."

        }), ref: "Handbook p.365" },
      { q: "Block diagram: input $X$ → $G_1$ → summing junction (- feedback from $H_1$) → $G_2$ → output $Y$. Transfer function:",
        choices: ["$Y/X = G_1 G_2/(1 + G_1 H_1)$ ... depends on where feedback taps", "Always $G_1 G_2$", "Always $1/G$", "$G + H$"], correct: 0,
        solution: S({
          c: "Block-diagram reduction has one workhorse rule: a NEGATIVE feedback loop with forward gain $G$ and feedback gain $H$ collapses to $\\dfrac{G}{1 + GH}$. Blocks simply in series MULTIPLY.",
          s: [
            "<b>Step 1 — Reduce the inner loop.</b> The feedback $H_1$ wraps the forward path; that loop becomes $\\dfrac{G_1}{1 + G_1H_1}$ (using the stated topology).",
            "<b>Step 2 — Series with $G_2$.</b> Multiply: $\\dfrac{Y}{X} = \\dfrac{G_1G_2}{1 + G_1H_1}$.",
            "<b>Step 3 — Distractor audit.</b> 'Always $G_1G_2$' ignores feedback; '$1/G$' and '$G+H$' aren't reduction results — series multiplies, loops use the $1/(1+GH)$ rule, parallel paths add."
          ],
          a: "$\\dfrac{Y}{X} = \\dfrac{G_1G_2}{1 + G_1H_1}$ (topology-dependent).",
          v: "The caveat the answer flags honestly: WHERE the feedback taps matters — if $H_1$ enclosed both $G_1$ and $G_2$, the result would be $\\dfrac{G_1G_2}{1 + G_1G_2H_1}$ ✓. Always identify exactly what the loop wraps before applying the formula."

        }), ref: "Handbook p.365" },
    ],

    // ====================== Ch 13: Comm — +10 ======================
    13: [
      { q: "PCM telephone channel: 8000 samples/s × 8 bits = ",
        choices: ["$64$ kbps", "$8$ kbps", "$1$ Mbps", "$56$ kbps"], correct: 0,
        solution: S({
          c: "Pulse-code modulation bit rate is simply samples per second × bits per sample.",
          s: [
            "<b>Step 1 — Multiply.</b> $8000\\times8 = 64{,}000$ bps = 64 kbps.",
            "<b>Step 2 — Where the numbers come from.</b> 8 kHz sampling = 2× the 4-kHz voice band (Nyquist); 8 bits = 256 quantization levels (μ-law/A-law companding).",
            "<b>Step 3 — Distractor audit.</b> 8 kbps drops a factor of 8; 1 Mbps is wildly high; 56 kbps is the old modem cap (one bit robbed for signaling) — a real but different number."
          ],
          a: "64 kbps",
          v: "This 64-kbps 'DS0' is the atom of the entire telephone hierarchy: 24 of them make a 1.544-Mbps T1, and it's why ISDN and early digital lines came in 64-kbps chunks ✓."

        }), ref: "Handbook p.371" },
      { q: "Hartley channel capacity for noiseless 4 kHz channel, 8 levels:",
        choices: ["$24$ kbps", "$8$ kbps", "$32$ kbps", "$4$ kbps"], correct: 0,
        solution: S({
          c: "Hartley's law (noiseless, M discrete levels): $C = 2B\\log_2 M$. The $2B$ is the Nyquist symbol rate; $\\log_2 M$ is bits carried per symbol.",
          s: [
            "<b>Step 1 — Bits per symbol.</b> $\\log_2 8 = 3$.",
            "<b>Step 2 — Symbol rate.</b> $2B = 2\\times4000 = 8000$ symbols/s.",
            "<b>Step 3 — Multiply.</b> $C = 8000\\times3 = 24{,}000$ bps = 24 kbps.",
            "<b>Step 4 — Distractor audit.</b> 8 kbps forgot $\\log_2 M$; 32 kbps used $\\log_2 16$; 4 kbps is just B."
          ],
          a: "24 kbps",
          v: "The catch real systems hit: Hartley says more LEVELS → more capacity with no limit — but noise blurs closely-spaced levels, so Shannon ($C = B\\log_2(1+S/N)$) sets the true ceiling ✓. Noiseless is the ideal Hartley assumes."

        }), ref: "Handbook p.371" },
      { q: "AM with carrier 1 MHz, modulation index $m = 1$ (full modulation):",
        choices: ["Sideband power equals 1/3 of total", "All power in carrier", "All in sidebands", "Equal split"], correct: 0,
        solution: S({
          c: "In standard AM the carrier holds a FIXED amount of power and conveys NO information; only the sidebands carry the message. Sideband fraction: $\\eta = \\dfrac{m^2}{2 + m^2}$.",
          s: [
            "<b>Step 1 — Plug m = 1.</b> $\\eta = \\dfrac{1}{2+1} = \\dfrac{1}{3}$.",
            "<b>Step 2 — Split it.</b> Two symmetric sidebands → each carries 1/6 of total; the carrier hogs the remaining 2/3.",
            "<b>Step 3 — Distractor audit.</b> 'All in carrier' / 'all in sidebands' ignore the split; 'equal' would be 1/2 each, never true for standard AM."
          ],
          a: "Sidebands = 1/3 of total power (carrier wastes 2/3).",
          v: "This 67% waste is exactly WHY efficient variants exist: DSB-SC removes the carrier, SSB removes carrier AND one sideband — half the bandwidth, far less power ✓. Standard AM keeps the carrier only so cheap envelope detectors work."

        }), ref: "Handbook p.371" },
      { q: "Bandwidth of QPSK modulating bit stream at $R_b$ bps:",
        choices: ["$\\approx R_b/2$", "$\\approx R_b$", "$2 R_b$", "$4 R_b$"], correct: 0,
        solution: S({
          c: "Bandwidth scales with SYMBOL rate, not bit rate. QPSK packs 2 bits per symbol, so its symbol rate — and thus bandwidth — is half the bit rate: $BW \\approx R_b/2$.",
          s: [
            "<b>Step 1 — Bits per symbol.</b> QPSK has 4 phases → $\\log_2 4 = 2$ bits/symbol.",
            "<b>Step 2 — Symbol rate.</b> $R_s = R_b/2$, and minimum BW ≈ $R_s$.",
            "<b>Step 3 — Distractor audit.</b> $R_b$ is BPSK (1 bit/symbol); $R_b/4$ would be 16-QAM; $2R_b$, $4R_b$ go the wrong way entirely."
          ],
          a: "$BW \\approx R_b/2$",
          v: "The spectral-efficiency ladder this sits on: BPSK 1 bit/Hz, QPSK 2, 16-QAM 4, 64-QAM 6 ✓ — each step doubles the constellation to send more bits in the same band, paying in required SNR (denser points, smaller noise margin)."

        }), ref: "Handbook p.371" },
      { q: "Hamming distance between 10110 and 11011:",
        choices: ["$3$", "$2$", "$5$", "$0$"], correct: 0,
        solution: S({
          c: "Hamming distance = the count of bit positions where two equal-length codewords DIFFER (equivalently, the number of 1s in their XOR).",
          s: [
            "<b>Step 1 — Align and compare.</b> 1<b>0</b>1<b>10</b> vs 1<b>1</b>1<b>01</b>: positions 2, 4, 5 differ; 1 and 3 match.",
            "<b>Step 2 — Count.</b> 3 differing positions.",
            "<b>Step 3 — Distractor audit.</b> 2 misses one; 5 counts every position; 0 would mean identical."
          ],
          a: "Hamming distance = 3.",
          v: "Why coders care: a code with MINIMUM distance $d$ can DETECT $d-1$ errors and CORRECT $\\lfloor(d-1)/2\\rfloor$ ✓ — so spacing valid codewords far apart in Hamming space is literally how error-correcting codes buy reliability."

        }), ref: "Handbook p.371" },
      { q: "ASK modulation efficiency:",
        choices: ["Poor — wastes power in carrier", "Best", "Same as FSK", "Linear with $m$"], correct: 0,
        solution: S({
          c: "Amplitude-shift keying encodes bits by turning carrier amplitude up/down (on-off keying in the extreme). Because amplitude itself carries the data, power is wasted and the signal is fragile to amplitude noise/fading.",
          s: [
            "<b>Step 1 — Match.</b> Poor efficiency / noise-sensitive.",
            "<b>Step 2 — Why FSK and PSK beat it.</b> They have a CONSTANT envelope — info lives in frequency or phase — so amplifiers can run in efficient saturation and amplitude noise doesn't corrupt the bit.",
            "<b>Step 3 — Distractor audit.</b> 'Best' is backwards; 'same as FSK' is false (FSK is more robust); 'linear with m' confuses ASK with analog AM's index."
          ],
          a: "Poor — amplitude-based, power-wasteful, noise-prone.",
          v: "Where ASK survives anyway: dirt-cheap short-range links — TV remotes, garage openers, basic RFID — where simplicity beats efficiency ✓. Fiber optics also use on-off keying because light amplitude is easy to switch and detect."

        }), ref: "Handbook p.371" },
      { q: "Why use modulation? Primary reason:",
        choices: ["Shift to higher frequency for antenna size, multiplexing", "Reduce signal power", "Increase bandwidth", "Smaller signals"], correct: 0,
        solution: S({
          c: "Modulation lifts a low-frequency 'baseband' message onto a high-frequency CARRIER. That upward shift is what makes practical antennas, channel sharing, and good propagation possible.",
          s: [
            "<b>Step 1 — Match.</b> Higher frequency → feasible antenna size + multiplexing.",
            "<b>Step 2 — The antenna driver.</b> Efficient antennas are ~λ/4. Baseband audio (~3 kHz, λ = 100 km) would need a 25-km antenna; shift to 100 MHz and λ/4 ≈ 0.75 m.",
            "<b>Step 3 — Distractor audit.</b> Modulation doesn't reduce power or shrink signals; it generally INCREASES bandwidth (sidebands) — the opposite of 'increase bandwidth' being the goal."
          ],
          a: "To reach a frequency where antennas are practical and many channels coexist (FDM).",
          v: "The multiplexing payoff makes it concrete: every FM station shares the air by sitting at its own carrier — your radio tunes one out of dozens ✓. Same principle stacks TV channels, cellular bands, and Wi-Fi."

        }), ref: "Handbook p.371" },
      { q: "Shannon capacity: $C = B\\log_2(1 + S/N)$. Doubling B with same SNR:",
        choices: ["Doubles C", "Quadruples C", "Halves C", "No effect"], correct: 0,
        solution: S({
          c: "In Shannon's law $C = B\\log_2(1 + S/N)$, bandwidth $B$ sits OUTSIDE the log as a linear multiplier. So with SNR held fixed, doubling B doubles C.",
          s: [
            "<b>Step 1 — Apply.</b> $C' = 2B\\log_2(1+S/N) = 2C$.",
            "<b>Step 2 — Distractor audit.</b> 'Quadruples' would need B², which it isn't; 'halves' is backwards; 'no effect' ignores the linear term."
          ],
          a: "Doubles C.",
          v: "The subtlety worth knowing: in real systems widening B also lets in more noise ($N = N_0B$), which DROPS the SNR inside the log — so capacity rises but sub-linearly, approaching the bandwidth-limited ceiling $C \\to 1.44\\,S/N_0$ ✓. The clean 'doubles' holds only at fixed SNR, as stated."

        }), ref: "Handbook p.371" },
      { q: "Manchester encoding: how many transitions per bit?",
        choices: ["Exactly 1 (mid-bit)", "0", "2", "Variable"], correct: 0,
        solution: S({
          c: "Manchester coding forces exactly ONE transition in the MIDDLE of every bit — the DIRECTION of that mid-bit edge (rising vs falling) encodes 0 vs 1.",
          s: [
            "<b>Step 1 — Match.</b> Exactly 1 mid-bit transition.",
            "<b>Step 2 — What the guaranteed edge buys.</b> SELF-CLOCKING — the receiver recovers timing from every bit, no separate clock line; and zero DC offset (each bit is half-high, half-low).",
            "<b>Step 3 — Distractor audit.</b> 0 transitions would lose clock sync on long runs (the problem Manchester solves); 2 and 'variable' describe other schemes."
          ],
          a: "One transition per bit, mid-bit.",
          v: "The cost that pins it down: guaranteeing an edge every bit DOUBLES the bandwidth vs raw NRZ ✓ — which is why classic 10-Mbps Ethernet used it (robust clocking) but faster standards switched to more bandwidth-efficient codes."

        }), ref: "Handbook p.371" },
      { q: "TDMA, FDMA, CDMA differ by:",
        choices: ["Time slots, frequency bands, code separation", "Same thing", "Amplitude levels", "Phase angles"], correct: 0,
        solution: S({
          c: "Three ways to let many users share one physical channel: split it by TIME (TDMA), by FREQUENCY (FDMA), or by orthogonal CODES occupying the same time and frequency (CDMA).",
          s: [
            "<b>Step 1 — Match.</b> Time slots / frequency bands / code separation.",
            "<b>Step 2 — Anchor each.</b> FDMA: each user a distinct band (analog AMPS, FM radio). TDMA: each user a time slot on a shared band (GSM 2G). CDMA: all users overlap, separated by spreading codes (IS-95/3G).",
            "<b>Step 3 — Distractor audit.</b> 'Same thing' ignores the distinct axes; amplitude levels and phase angles are MODULATION dimensions, not multiple-access methods."
          ],
          a: "Time slots (TDMA), frequency bands (FDMA), spreading codes (CDMA).",
          v: "Modern systems blend them: 4G/5G OFDMA carves the channel into a TIME×FREQUENCY grid of resource blocks — FDMA and TDMA at once ✓ — showing these are orthogonal axes you can combine, not rival choices."

        }), ref: "Handbook p.371" },
    ],

    // ====================== Ch 14: Networks — +8 ======================
    14: [
      { q: "$/16$ subnet has __ usable hosts:",
        choices: ["$65{,}534$", "$65{,}536$", "$16{,}382$", "$254$"], correct: 0,
        solution: S({
          c: "An IPv4 address is 32 bits. The CIDR prefix /16 fixes the first 16 bits as NETWORK, leaving 32−16 = 16 HOST bits. Usable hosts = $2^{(host\\ bits)} - 2$ (subtract the all-zeros network address and all-ones broadcast address).",
          s: [
            "<b>Step 1 — Host bits.</b> $32 - 16 = 16$.",
            "<b>Step 2 — Total addresses.</b> $2^{16} = 65{,}536$.",
            "<b>Step 3 — Subtract reserved 2.</b> $65{,}536 - 2 = 65{,}534$ usable.",
            "<b>Step 4 — Distractor audit.</b> 65,536 forgets the −2; 16,382 is a /18 ($2^{14}-2$); 254 is a /24."
          ],
          a: "65,534 usable hosts.",
          v: "Why exactly two are unusable: the all-host-bits-0 address NAMES the network, the all-host-bits-1 is its BROADCAST — neither can be assigned to a machine ✓. The formula $2^h - 2$ works for every prefix length."

        }), ref: "Handbook p.393" },
      { q: "Loopback IPv4 address:",
        choices: ["$127.0.0.1$", "$0.0.0.0$", "$255.255.255.255$", "$10.0.0.1$"], correct: 0,
        solution: S({
          c: "The loopback address refers a host to ITSELF — packets sent there never touch the wire, looping back inside the network stack. The conventional one is 127.0.0.1.",
          s: [
            "<b>Step 1 — Match.</b> 127.0.0.1.",
            "<b>Step 2 — Distractor audit.</b> 0.0.0.0 means 'this host/any' (used to bind all interfaces); 255.255.255.255 is limited broadcast; 10.0.0.1 is an ordinary private-range address."
          ],
          a: "127.0.0.1 (IPv6: ::1).",
          v: "Scope worth knowing: the ENTIRE 127.0.0.0/8 block is reserved for loopback — 16 million addresses all pointing home ✓. It's how you test a local server ('localhost') with no network at all."

        }), ref: "Handbook p.394" },
      { q: "MAC address bits:",
        choices: ["$48$", "$32$", "$64$", "$128$"], correct: 0,
        solution: S({
          c: "A standard IEEE MAC (Media Access Control) address — the hardware address burned into a network interface — is 48 bits, written as six hex byte-pairs (e.g. 00:1A:2B:3C:4D:5E).",
          s: [
            "<b>Step 1 — Match.</b> 48 bits.",
            "<b>Step 2 — How the 48 split.</b> First 3 bytes = OUI (manufacturer ID assigned by IEEE); last 3 bytes = device serial set by the vendor.",
            "<b>Step 3 — Distractor audit.</b> 32 bits is an IPv4 address (different layer); 64 and 128 confuse it with IPv6's 128-bit address or EUI-64."
          ],
          a: "48 bits.",
          v: "Layer check that keeps the two address types straight: MAC = Layer-2, fixed to the hardware, used within a local segment; IP = Layer-3, assigned by the network, used to route between segments ✓. ARP is the bridge that maps one to the other."

        }), ref: "Handbook p.399" },
      { q: "Network packet routing decision is made at:",
        choices: ["L3 (Network) — IP", "L2 (Data link)", "L4 (Transport)", "L7 (Application)"], correct: 0,
        solution: S({
          c: "Forwarding a packet BETWEEN networks is a Layer-3 (Network) decision, made on the IP destination address — that's the router's job.",
          s: [
            "<b>Step 1 — Match.</b> L3 (Network) — IP.",
            "<b>Step 2 — Contrast with L2.</b> Within ONE local network, switches forward by MAC address (L2). Routing means crossing between networks → L3.",
            "<b>Step 3 — Distractor audit.</b> L4 (transport, TCP/UDP ports) handles end-to-end delivery, not path choice; L7 (application) is HTTP/DNS, far above routing."
          ],
          a: "Layer 3 (Network), using IP addresses.",
          v: "The mental model: switches = within-neighborhood (MAC/L2); routers = between-city highways (IP/L3) ✓. A packet's journey alternates — L2 hop to the local router, L3 decision, L2 hop on the next segment, repeat."

        }), ref: "Handbook p.399" },
      { q: "Default web port for HTTPS:",
        choices: ["$443$", "$80$", "$22$", "$25$"], correct: 0,
        solution: S({
          c: "Well-known TCP ports map services to fixed numbers so clients know where to knock. HTTPS (HTTP secured with TLS) lives on port 443.",
          s: [
            "<b>Step 1 — Match.</b> 443.",
            "<b>Step 2 — Distractor audit.</b> 80 is plain HTTP (unencrypted); 22 is SSH; 25 is SMTP (email)."
          ],
          a: "Port 443.",
          v: "A few more worth memorizing for the exam: 80 HTTP, 443 HTTPS, 22 SSH, 25 SMTP, 53 DNS, 21 FTP ✓ — the 'well-known' range is 0-1023, reserved for these standard services."

        }), ref: "Handbook p.394" },
      { q: "Subnet mask $255.255.255.0$ corresponds to CIDR:",
        choices: ["$/24$", "$/16$", "$/8$", "$/32$"], correct: 0,
        solution: S({
          c: "A subnet mask marks NETWORK bits with 1s. Each octet of 255 is binary 11111111 = eight 1-bits, and CIDR notation /N just counts those network bits.",
          s: [
            "<b>Step 1 — Count the 255s.</b> 255.255.255.0 = three full octets of ones = $3\\times8 = 24$ bits.",
            "<b>Step 2 — Write CIDR.</b> /24.",
            "<b>Step 3 — Distractor audit.</b> /16 is 255.255.0.0; /8 is 255.0.0.0; /32 (255.255.255.255) is a single host."
          ],
          a: "/24.",
          v: "Cross-check via host count: /24 leaves 8 host bits → $2^8-2 = 254$ usable — the familiar size of a home/office subnet ✓. Mask and prefix are two notations for the identical split."

        }), ref: "Handbook p.393" },
      { q: "TCP 3-way handshake messages:",
        choices: ["SYN, SYN-ACK, ACK", "SYN, ACK, FIN", "GET, OK, BYE", "REQ, RESP, ACK"], correct: 0,
        solution: S({
          c: "TCP opens a reliable connection with a three-message handshake that synchronizes sequence numbers both ways: SYN → SYN-ACK → ACK.",
          s: [
            "<b>Step 1 — Trace it.</b> Client sends SYN (here's my starting sequence #); server replies SYN-ACK (acknowledges, sends its own #); client sends ACK (acknowledges server's #). Connection established.",
            "<b>Step 2 — Distractor audit.</b> FIN belongs to connection TEARDOWN (a separate exchange); GET/OK/BYE and REQ/RESP/ACK are made-up — those aren't TCP segment flags."
          ],
          a: "SYN, SYN-ACK, ACK.",
          v: "Why three and not two: each side must both ANNOUNCE its sequence number and CONFIRM it received the other's — three messages is the minimum that does both ✓. Teardown uses FIN/ACK pairs, often four messages."

        }), ref: "Handbook p.400" },
      { q: "Wireshark is:",
        choices: ["Network packet analyzer/sniffer", "Firewall", "VPN", "Router"], correct: 0,
        solution: S({
          c: "Wireshark is a packet analyzer (sniffer): it captures raw network traffic off an interface and dissects each packet protocol-by-protocol for inspection.",
          s: [
            "<b>Step 1 — Match.</b> Network packet analyzer / sniffer.",
            "<b>Step 2 — Distractor audit.</b> A firewall FILTERS traffic; a VPN ENCRYPTS/tunnels it; a router FORWARDS it — Wireshark only OBSERVES, changing nothing."
          ],
          a: "An open-source packet sniffer/analyzer.",
          v: "What it's actually for: debugging protocols, diagnosing slow connections, security forensics, and learning how TCP/HTTP/DNS really look on the wire ✓ — you'd literally watch the SYN/SYN-ACK/ACK handshake fly by in its capture window."

        }), ref: "Handbook p.412" },
    ],

    // ====================== Ch 15: Digital — +12 ======================
    15: [
      { q: "Binary 10001 in decimal:",
        choices: ["$17$", "$15$", "$19$", "$32$"], correct: 0,
        solution: S({
          c: "A binary number is a sum of powers of 2: each 1-bit contributes $2^{position}$, counting positions from 0 at the right.",
          s: [
            "<b>Step 1 — Label positions.</b> $1\\,0\\,0\\,0\\,1$ → bits at positions 4,3,2,1,0.",
            "<b>Step 2 — Add the 1-bits.</b> position 4 → $2^4 = 16$; position 0 → $2^0 = 1$. Sum $= 17$.",
            "<b>Step 3 — Distractor audit.</b> 15 and 19 are off-by-counting errors; 32 would be $2^5$ (one bit too far left)."
          ],
          a: "17.",
          v: "Reverse check: 17 = 16 + 1 → bits 4 and 0 set → 10001 ✓. Quick instinct: a 1 followed by zeros is exactly $2^{(\\#zeros)}$, so 10000 = 16 and the trailing 1 just adds one."

        }), ref: "Handbook p.388" },
      { q: "Decimal 200 in binary:",
        choices: ["$11001000$", "$11000100$", "$10101010$", "$11111000$"], correct: 0,
        solution: S({
          c: "Convert decimal → binary by subtracting the largest fitting power of 2 repeatedly (or equivalently, decompose into powers of 2).",
          s: [
            "<b>Step 1 — Greedy decompose.</b> $200 = 128 + 72 = 128 + 64 + 8 = 2^7 + 2^6 + 2^3$.",
            "<b>Step 2 — Set those bits.</b> positions 7,6,3 → 1 1 0 0 1 0 0 0.",
            "<b>Step 3 — Distractor audit.</b> 11000100 = 196; 10101010 = 170; 11111000 = 248 — each flips the wrong bits."
          ],
          a: "11001000.",
          v: "Add it back: $128 + 64 + 8 = 200$ ✓. Sanity: 200 < 256 = $2^8$, so it fits in 8 bits exactly — and an even number must end in 0, which 11001000 does."

        }), ref: "Handbook p.388" },
      { q: "$\\text{4A}_{16} + \\text{B5}_{16}$ = ?",
        choices: ["$\\text{FF}_{16}$", "$\\text{F0}_{16}$", "$\\text{100}_{16}$", "$\\text{AB}_{16}$"], correct: 0,
        solution: S({
          c: "Hex arithmetic: each hex digit is 4 bits (0-F = 0-15). Convert to decimal, add, convert back — or add digit-columns with carry.",
          s: [
            "<b>Step 1 — To decimal.</b> 4A = $4\\times16 + 10 = 74$; B5 = $11\\times16 + 5 = 181$.",
            "<b>Step 2 — Add.</b> $74 + 181 = 255$.",
            "<b>Step 3 — Back to hex.</b> $255 = FF$ (both nibbles all-ones).",
            "<b>Step 4 — Distractor audit.</b> F0 = 240; 100₁₆ = 256 (one too many); AB = 171 — none equal 255."
          ],
          a: "FF₁₆.",
          v: "Column check confirms with no carry: low nibble A+5 = F (15), high nibble 4+B = F (15) → FF ✓. Worth remembering: FF = 255 = the largest 8-bit value, which is why it caps a byte."

        }), ref: "Handbook p.388" },
      { q: "How many minterms in a 4-variable Boolean function (max):",
        choices: ["$16$", "$4$", "$8$", "$32$"], correct: 0,
        solution: S({
          c: "A function of $n$ variables has a truth table with $2^n$ rows. A MINTERM is a row where the output is 1; the maximum number of them is therefore $2^n$ (every row outputs 1).",
          s: [
            "<b>Step 1 — Apply.</b> $2^4 = 16$ rows → up to 16 minterms.",
            "<b>Step 2 — Distractor audit.</b> 4 confuses variables with rows; 8 is $2^3$ (three variables); 32 is $2^5$."
          ],
          a: "16.",
          v: "Boundary cases that frame it: 0 minterms = the constant-0 function; 16 minterms = constant-1; anything between is a real logic function ✓. This 16 is also why a 4-variable Karnaugh map has exactly 16 cells."

        }), ref: "Handbook p.389" },
      { q: "JK flip-flop with J=0, K=0:",
        choices: ["Hold", "Set", "Reset", "Toggle"], correct: 0,
        solution: S({
          c: "The JK flip-flop is the universal edge-triggered storage cell. Its four input combinations: 00 = HOLD (no change), 10 = SET (Q→1), 01 = RESET (Q→0), 11 = TOGGLE (Q flips).",
          s: [
            "<b>Step 1 — Look up 00.</b> J=0, K=0 → Hold (output keeps its previous value).",
            "<b>Step 2 — Distractor audit.</b> Set is 10; Reset is 01; Toggle is 11 — the question asks the one input pair that does NOTHING."
          ],
          a: "Hold — output unchanged.",
          v: "Why JK beats the SR latch: it gives the otherwise-forbidden 11 input a USEFUL job (toggle) instead of an illegal state ✓ — which is exactly what makes JK flip-flops the building block of counters."

        }), ref: "Handbook p.391" },
      { q: "SR latch input S=1, R=1 (simultaneously):",
        choices: ["Forbidden (indeterminate)", "Set", "Reset", "Toggle"], correct: 0,
        solution: S({
          c: "An SR (Set-Reset) latch is built from cross-coupled NOR (or NAND) gates. Asserting Set AND Reset at once is FORBIDDEN: it forces both outputs to the same level, breaking the Q/Q̄ complement, and the next state is indeterminate (a race) when the inputs release together.",
          s: [
            "<b>Step 1 — Match.</b> Forbidden / indeterminate.",
            "<b>Step 2 — Why it's illegal.</b> The latch's whole job is to hold Q and its complement; S=R=1 makes Q = Q̄, a contradiction — and which value 'wins' on release depends on tiny timing differences.",
            "<b>Step 3 — Distractor audit.</b> Set (10) and Reset (01) are the single-input cases; toggle isn't even an SR behavior."
          ],
          a: "Forbidden (indeterminate output).",
          v: "The historical fix proves the point: the JK flip-flop redefines that same 11 input as a clean TOGGLE, eliminating the forbidden state ✓ — which is why JK, not SR, underlies real sequential logic."

        }), ref: "Handbook p.391" },
      { q: "Ripple carry adder for 4-bit numbers: number of full adders needed:",
        choices: ["$4$", "$8$", "$16$", "$3$"], correct: 0,
        solution: S({
          c: "A ripple-carry adder chains one FULL ADDER per bit position; each full adder sums two input bits plus the carry rippling in from the bit below.",
          s: [
            "<b>Step 1 — One per bit.</b> 4-bit numbers → 4 full adders.",
            "<b>Step 2 — The chain.</b> Carry-out of bit 0 feeds carry-in of bit 1, and so on; the final carry-out is the overflow/5th bit.",
            "<b>Step 3 — Distractor audit.</b> 8 and 16 over-count; 3 forgets the carry must propagate through every position (the LSB could be a half-adder, but 'full adders for the design' is 4)."
          ],
          a: "4 full adders.",
          v: "The cost this structure reveals: carry must ripple end-to-end, so delay grows LINEARLY with bit width ✓ — which is precisely why fast machines use carry-lookahead adders to compute carries in parallel."

        }), ref: "Handbook p.390" },
      { q: "Demultiplexer (1-to-N) with 4 outputs needs ___ select lines:",
        choices: ["$2$", "$4$", "$3$", "$1$"], correct: 0,
        solution: S({
          c: "A demultiplexer routes one input to one of N outputs; to address N outputs you need enough select lines to count them in binary: $\\lceil\\log_2 N\\rceil$.",
          s: [
            "<b>Step 1 — Apply.</b> $\\log_2 4 = 2$ select lines.",
            "<b>Step 2 — Distractor audit.</b> 4 confuses select lines with outputs; 3 would address 8; 1 addresses only 2."
          ],
          a: "2 select lines.",
          v: "The pattern across the family: 2 selects → 4 outputs, 3 → 8, 4 → 16 ✓ — identical to a multiplexer's selects and to the address-bits-vs-memory-locations relationship ($2^{addr}$ = locations)."

        }), ref: "Handbook p.390" },
      { q: "Bit-shift left by 1: equivalent to:",
        choices: ["Multiplying by 2", "Dividing by 2", "Adding 1", "Bit complement"], correct: 0,
        solution: S({
          c: "Shifting a binary number LEFT by one position appends a 0 on the right and moves every digit up one power of 2 — that MULTIPLIES the value by 2 (just as appending a 0 in decimal multiplies by 10).",
          s: [
            "<b>Step 1 — Example.</b> $1010_2 = 10 \\to 10100_2 = 20$. Doubled.",
            "<b>Step 2 — Distractor audit.</b> Dividing by 2 is a RIGHT shift (opposite direction); 'adding 1' sets a bit, not a shift; complement flips bits."
          ],
          a: "Multiply by 2.",
          v: "Why hardware loves it: a shift is just rewiring — far cheaper than a multiplier — so compilers turn $x\\times2$ into $x\\ll1$ ✓. Caution: right shifts need the ARITHMETIC variant (sign-extend) to divide signed numbers correctly."

        }), ref: "Handbook p.389" },
      { q: "Tri-state buffer outputs:",
        choices: ["High, Low, or High-impedance", "Just High or Low", "Always Low", "Random"], correct: 0,
        solution: S({
          c: "A tri-state buffer has a third output state beyond 0 and 1: high-impedance (Hi-Z), an electrically DISCONNECTED state. An Enable input chooses between driving (0/1) and floating (Hi-Z).",
          s: [
            "<b>Step 1 — Match.</b> High, Low, or High-impedance.",
            "<b>Step 2 — What Hi-Z is for.</b> Many devices can share one bus wire if all but one sit in Hi-Z — the active driver 'owns' the bus while the others electrically vanish.",
            "<b>Step 3 — Distractor audit.</b> 'Just High or Low' is an ordinary buffer (no third state); 'always Low' and 'random' aren't buffer behaviors."
          ],
          a: "0, 1, or Hi-Z.",
          v: "The failure it prevents: two outputs driving opposite levels onto one wire = bus contention (a short, possibly damaging) ✓ — Hi-Z is what makes shared data buses, in memory and CPUs, physically possible."

        }), ref: "Handbook p.391" },
      { q: "Convert 0.625 (decimal) to binary fraction:",
        choices: ["$0.101_2$", "$0.110_2$", "$0.011_2$", "$0.111_2$"], correct: 0,
        solution: S({
          c: "Convert a decimal FRACTION to binary by repeatedly multiplying by 2; each step's INTEGER part (0 or 1) is the next binary digit after the point, reading top-down.",
          s: [
            "<b>Step 1 — ×2.</b> $0.625\\times2 = 1.25$ → digit 1, keep 0.25.",
            "<b>Step 2 — ×2.</b> $0.25\\times2 = 0.5$ → digit 0, keep 0.5.",
            "<b>Step 3 — ×2.</b> $0.5\\times2 = 1.0$ → digit 1, fraction hits 0, stop.",
            "<b>Step 4 — Read top-down.</b> 0.101₂. Distractors 0.110/0.011/0.111 mis-order or mis-count the bits."
          ],
          a: "0.101₂.",
          v: "Place-value check: $2^{-1} + 2^{-3} = 0.5 + 0.125 = 0.625$ ✓. Note many decimals (like 0.1) NEVER terminate in binary — 0.625 is lucky because it's a clean sum of $1/2$ and $1/8$."

        }), ref: "Handbook p.388" },
      { q: "Synchronous counter advantages over async ripple:",
        choices: ["No accumulated propagation delay, glitch-free", "Simpler", "Fewer connections", "Lower power"], correct: 0,
        solution: S({
          c: "In a SYNCHRONOUS counter every flip-flop is clocked by the SAME edge, so all bits update simultaneously. An ASYNCHRONOUS (ripple) counter clocks each stage from the previous one, so delays add up and fleeting wrong states appear during transitions.",
          s: [
            "<b>Step 1 — Match.</b> No accumulated propagation delay → glitch-free, faster.",
            "<b>Step 2 — Why ripple glitches.</b> Counting 0111→1000, the carry must ripple through every bit one delay at a time, so the output momentarily shows invalid combinations — bad for downstream decoding.",
            "<b>Step 3 — Distractor audit.</b> Synchronous is NOT simpler or fewer-connections (it needs extra steering logic) and not inherently lower-power — its win is timing reliability."
          ],
          a: "No accumulated delay — all bits change together, glitch-free.",
          v: "The trade stated plainly: sync costs more gates but its settling time is ONE flip-flop delay regardless of width, while ripple's grows with bit count ✓ — which is why high-speed and decoded counters are synchronous."

        }), ref: "Handbook p.391" },
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
