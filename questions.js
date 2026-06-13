// FE Electrical Question Bank — v2 with structured detailed solutions
// (c) Hai Nguyen — for personal study use

// ============================================================
// Solution renderer helper
//   S({ c: concept, s: [step1, step2, ...], a: answer, v: verify })
// All fields optional; MathJax processes $...$ inside any of them.
// ============================================================
function S(p) {
  let h = '';
  if (p.c) h += `<div class="sol-concept"><b>📐 Khái niệm / Concept:</b> ${p.c}</div>`;
  if (p.s && p.s.length) {
    h += '<ol class="sol-steps">';
    p.s.forEach(step => { h += `<li>${step}</li>`; });
    h += '</ol>';
  }
  if (p.a) h += `<div class="sol-answer"><b>✅ Đáp án / Answer:</b> ${p.a}</div>`;
  if (p.v) h += `<div class="sol-check"><i>🔍 Kiểm tra / Check:</i> ${p.v}</div>`;
  return h;
}

const QUESTION_BANK = {
  meta: {
    handbook: "NCEES FE Reference Handbook v10.0",
    spec: "FE Electrical & Computer CBT Exam Specifications, effective July 2020",
    total_test_questions: 110,
    time_minutes: 330,
  },
  chapters: [
    // ====================== Ch 1: Mathematics ======================
    {
      id: 1, name_en: "Mathematics", name_vn: "Toán học", fe_count: [11, 17],
      questions: [
        { q: "Solve $2x^2 - 4x + 5 = 0$. Express roots in $a+bj$ form.",
          choices: ["$1 \\pm j\\sqrt{6}/2$", "$2 \\pm j\\sqrt{3}$", "$1 \\pm j2$", "$-1 \\pm j\\sqrt{6}/2$"],
          correct: 0,
          solution: S({
            c: "The quadratic formula $x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ solves any $ax^2+bx+c=0$; a NEGATIVE discriminant gives complex-conjugate roots.",
            s: [
              "<b>Step 1 — Coefficients.</b> $a=2$, $b=-4$, $c=5$.",
              "<b>Step 2 — Discriminant.</b> $\\Delta=(-4)^2-4(2)(5)=16-40=-24<0$ -> complex.",
              "<b>Step 3 — Apply formula.</b> $\\sqrt{-24}=2j\\sqrt6$, so $x=\\dfrac{4\\pm2j\\sqrt6}{4}=1\\pm\\dfrac{j\\sqrt6}{2}$.",
              "<b>Step 4 — Distractor audit.</b> $2\\pm j\\sqrt3$ and $-1\\pm j\\sqrt6/2$ mis-handle $-b/2a=+1$; $1\\pm j2$ assumes $\\Delta=-16$."
            ],
            a: "$x=1\\pm\\dfrac{j\\sqrt6}{2}$",
            v: "Vieta: sum $=2=-b/a$ and product $=1+1.5=2.5=c/a$ ✓. Numerically $x\\approx1\\pm1.225j$."
          }),
          ref: "Handbook p.35" },

        { q: "Convert $z = 6\\angle 30°$ to rectangular form.",
          choices: ["$5.20 + j3.00$", "$3.00 + j5.20$", "$6\\cos 30° + j6\\sin 30°$ which equals $5.20+j3.00$", "Both A and C"],
          correct: 3,
          solution: S({
            c: "Polar to rectangular: $z=r\\cos\\theta+jr\\sin\\theta$. Here the answer is 'Both A and C' because both express the same value.",
            s: [
              "<b>Step 1 — Real part.</b> $6\\cos30°=6(0.866)=5.196$.",
              "<b>Step 2 — Imag part.</b> $6\\sin30°=6(0.5)=3.000$.",
              "<b>Step 3 — Recognize both forms.</b> Choice A (numeric $5.20+j3.00$) and choice C (symbolic, equal to it) are BOTH correct.",
              "<b>Step 4 — Distractor audit.</b> $3.00+j5.20$ swaps real/imag (used $\\sin$ for real); picking only A misses that C states the same thing."
            ],
            a: "Both A and C ($z\\approx5.20+j3.00$).",
            v: "$|z|=\\sqrt{5.196^2+3^2}=\\sqrt{36}=6$ ✓ recovers the original magnitude."
          }),
          ref: "Handbook p.36" },

        { q: "Find $z_1 \\cdot z_2$ where $z_1 = 4\\angle 60°$, $z_2 = 2\\angle 30°$.",
          choices: ["$8\\angle 90°$", "$8\\angle 30°$", "$6\\angle 90°$", "$2\\angle 30°$"],
          correct: 0,
          solution: S({
            c: "Multiplying complex numbers in POLAR form: multiply magnitudes, ADD angles -> $(r_1\\angle\\theta_1)(r_2\\angle\\theta_2)=r_1r_2\\angle(\\theta_1+\\theta_2)$.",
            s: [
              "<b>Step 1 — Magnitudes.</b> $4\\times2=8$.",
              "<b>Step 2 — Angles.</b> $60°+30°=90°$.",
              "<b>Step 3 — Combine.</b> $8\\angle90°=0+j8$.",
              "<b>Step 4 — Distractor audit.</b> $8\\angle30°$ subtracts angles; $6\\angle90°$ adds magnitudes ($4+2$); $2\\angle30°$ divides."
            ],
            a: "$z_1 z_2=8\\angle90°=j8$",
            v: "Rectangular cross-check: $(2+j2\\sqrt3)(\\sqrt3+j)=0+j8$ ✓. Polar wins for products; rectangular for sums."
          }),
          ref: "Handbook p.36" },

        { q: "Find $\\sin(2\\theta)$ if $\\sin\\theta = 0.6$, $\\cos\\theta = 0.8$.",
          choices: ["$0.48$", "$0.96$", "$0.28$", "$1.4$"],
          correct: 1,
          solution: S({
            c: "Double-angle identity: $\\sin(2\\theta)=2\\sin\\theta\\cos\\theta$.",
            s: [
              "<b>Step 1 — Substitute.</b> $2(0.6)(0.8)$.",
              "<b>Step 2 — Multiply.</b> $=2(0.48)=0.96$.",
              "<b>Step 3 — Distractor audit.</b> $0.48$ forgets the factor of 2; $0.28$ is a $\\cos2\\theta$ confusion; $1.4$ adds $\\sin+\\cos$."
            ],
            a: "$\\sin2\\theta=0.96$",
            v: "Consistency: $\\sin^2\\theta+\\cos^2\\theta=0.36+0.64=1$ ✓, so the given values are valid."
          }),
          ref: "Handbook p.37" },

        { q: "In a triangle with $a=8$, $b=10$, included angle $C=60°$, find side $c$.",
          choices: ["$9.17$", "$8.66$", "$11.49$", "$6.93$"],
          correct: 0,
          solution: S({
            c: "Law of cosines for SAS (two sides + included angle): $c^2=a^2+b^2-2ab\\cos C$.",
            s: [
              "<b>Step 1 — Substitute.</b> $c^2=8^2+10^2-2(8)(10)\\cos60°$.",
              "<b>Step 2 — Compute.</b> $=64+100-160(0.5)=164-80=84$.",
              "<b>Step 3 — Root.</b> $c=\\sqrt{84}\\approx9.17$.",
              "<b>Step 4 — Distractor audit.</b> $8.66$ used a wrong angle; $11.49$ ADDED the $2ab\\cos C$ term; $6.93$ mis-scales."
            ],
            a: "$c\\approx9.17$",
            v: "Triangle inequality: $c$ lies between $|a-b|=2$ and $a+b=18$ ✓."
          }),
          ref: "Handbook p.37" },

        { q: "Determinant of $A = \\begin{pmatrix}2&1&3\\\\0&4&-1\\\\5&2&0\\end{pmatrix}$ is:",
          choices: ["$-61$", "$61$", "$-19$", "$23$"],
          correct: 0,
          solution: S({
            c: "3x3 determinant by cofactor expansion along row 1: $|A|=a_{11}M_{11}-a_{12}M_{12}+a_{13}M_{13}$ (alternating signs +,-,+).",
            s: [
              "<b>Step 1 — Minors.</b> $M_{11}=(4)(0)-(-1)(2)=2$; $M_{12}=(0)(0)-(-1)(5)=5$; $M_{13}=(0)(2)-(4)(5)=-20$.",
              "<b>Step 2 — Combine with signs.</b> $|A|=2(2)-1(5)+3(-20)=4-5-60$.",
              "<b>Step 3 — Total.</b> $=-61$.",
              "<b>Step 4 — Distractor audit.</b> $+61$ drops a sign; $-19$ and $23$ mishandle a minor or the cofactor signs."
            ],
            a: "$|A|=-61$",
            v: "$|A|\\ne0$, so $A$ is invertible. Expanding along any other row gives the same $-61$."
          }),
          ref: "Handbook p.57" },

        { q: "If $A$ is $3\\times 4$ and $B$ is $4\\times 2$, dimension of $AB$ is:",
          choices: ["$3\\times 2$", "$4\\times 4$", "$2\\times 3$", "Undefined"],
          correct: 0,
          solution: S({
            c: "Matrix multiply rule: $(m\\times n)(n\\times p)=(m\\times p)$ - inner dimensions must MATCH, outer dimensions form the result.",
            s: [
              "<b>Step 1 — Check inner.</b> $A$ has 4 columns, $B$ has 4 rows: $4=4$ ✓ (defined).",
              "<b>Step 2 — Outer = result.</b> $m\\times p=3\\times2$.",
              "<b>Step 3 — Distractor audit.</b> $4\\times4$ and $2\\times3$ scramble the dimensions; 'undefined' would apply to $BA$ (inner 2 vs 3)."
            ],
            a: "$AB$ is $3\\times2$.",
            v: "Order matters: $BA$ here is UNDEFINED - matrix multiplication is not commutative."
          }),
          ref: "Handbook p.57" },

        { q: "Inverse of $A = \\begin{pmatrix}3&4\\\\2&5\\end{pmatrix}$:",
          choices: ["$\\frac{1}{7}\\begin{pmatrix}5&-4\\\\-2&3\\end{pmatrix}$", "$\\frac{1}{23}\\begin{pmatrix}5&-4\\\\-2&3\\end{pmatrix}$", "$\\begin{pmatrix}5&-4\\\\-2&3\\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix}3&-4\\\\-2&5\\end{pmatrix}$"],
          correct: 0,
          solution: S({
            c: "2x2 inverse: $A^{-1}=\\dfrac{1}{|A|}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$ - swap the diagonal, negate the off-diagonal, divide by det.",
            s: [
              "<b>Step 1 — Determinant.</b> $|A|=(3)(5)-(4)(2)=15-8=7$.",
              "<b>Step 2 — Swap/negate.</b> $\\begin{pmatrix}5&-4\\\\-2&3\\end{pmatrix}$.",
              "<b>Step 3 — Divide by det.</b> $A^{-1}=\\dfrac17\\begin{pmatrix}5&-4\\\\-2&3\\end{pmatrix}$.",
              "<b>Step 4 — Distractor audit.</b> The $1/23$ version uses a wrong det; the un-divided matrix forgets $/|A|$; the last option swaps the wrong entries."
            ],
            a: "$A^{-1}=\\dfrac17\\begin{pmatrix}5&-4\\\\-2&3\\end{pmatrix}$",
            v: "Check $AA^{-1}$ top-left: $\\frac17[(3)(5)+(4)(-2)]=\\frac{7}{7}=1$ ✓."
          }),
          ref: "Handbook p.57" },

        { q: "Solve by Cramer's rule: $3x+2y=7$, $x-y=1$. Find $x$.",
          choices: ["$1.8$", "$1.0$", "$0.8$", "$2.5$"],
          correct: 0,
          solution: S({
            c: "Cramer's rule: $x_i=|A_i|/|A|$, where $A_i$ replaces column $i$ of the coefficient matrix with the right-hand-side vector.",
            s: [
              "<b>Step 1 — Determinant.</b> $A=\\begin{pmatrix}3&2\\\\1&-1\\end{pmatrix}$, $|A|=(3)(-1)-(2)(1)=-5$.",
              "<b>Step 2 — Replace col 1.</b> $A_x=\\begin{pmatrix}7&2\\\\1&-1\\end{pmatrix}$, $|A_x|=(7)(-1)-(2)(1)=-9$.",
              "<b>Step 3 — Divide.</b> $x=-9/-5=1.8$.",
              "<b>Step 4 — Distractor audit.</b> $1.0$ guesses; $0.8$ is actually $y$; $2.5$ is wrong."
            ],
            a: "$x=1.8$",
            v: "Then $y=x-1=0.8$; check eq.1: $3(1.8)+2(0.8)=5.4+1.6=7$ ✓."
          }),
          ref: "Handbook p.57" },

        { q: "Eigenvalues of $A = \\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$:",
          choices: ["$5, 2$", "$4, 3$", "$3, -2$", "$6, 1$"],
          correct: 0,
          solution: S({
            c: "Eigenvalues solve $\\det(A-\\lambda I)=0$. For 2x2: $\\lambda^2-\\text{tr}(A)\\lambda+|A|=0$.",
            s: [
              "<b>Step 1 — Trace and det.</b> $\\text{tr}=4+3=7$; $|A|=(4)(3)-(1)(2)=10$.",
              "<b>Step 2 — Characteristic eq.</b> $\\lambda^2-7\\lambda+10=0$.",
              "<b>Step 3 — Factor.</b> $(\\lambda-5)(\\lambda-2)=0\\Rightarrow\\lambda=5,2$.",
              "<b>Step 4 — Distractor audit.</b> $4,3$ are diagonal entries (not eigenvalues of a non-diagonal matrix); $3,-2$ and $6,1$ fail the trace/det checks."
            ],
            a: "$\\lambda=5,\\ 2$",
            v: "Sum $5+2=7=$ trace ✓; product $5\\times2=10=$ det ✓ - eigenvalues always satisfy both."
          }),
          ref: "Handbook p.58" },

        { q: "Find $x$ that minimizes $f(x) = x^2 - 6x + 11$.",
          choices: ["$3$", "$2$", "$6$", "$-3$"],
          correct: 0,
          solution: S({
            c: "To minimize: set $f'(x)=0$ for critical points, then confirm with $f''>0$ (concave up = minimum).",
            s: [
              "<b>Step 1 — Derivative.</b> $f'(x)=2x-6$.",
              "<b>Step 2 — Critical point.</b> $2x-6=0\\Rightarrow x=3$.",
              "<b>Step 3 — Confirm.</b> $f''(x)=2>0$ -> minimum.",
              "<b>Step 4 — Distractor audit.</b> $6$ is $-b$ (forgot $/2a$); $2$ is the MIN VALUE $f(3)$, not the location; $-3$ has wrong sign."
            ],
            a: "$x=3$ (with $f_{\\min}=2$)",
            v: "Vertex shortcut: $x=-b/(2a)=6/2=3$ ✓ - matches the calculus."
          }),
          ref: "Handbook p.47-49" },

        { q: "Evaluate $\\int_0^2 (3x^2 + 2x)\\,dx$.",
          choices: ["$12$", "$10$", "$14$", "$8$"],
          correct: 0,
          solution: S({
            c: "Power rule $\\int x^n dx=\\dfrac{x^{n+1}}{n+1}$, then the fundamental theorem: $\\int_a^b f=F(b)-F(a)$.",
            s: [
              "<b>Step 1 — Antiderivative.</b> $\\int(3x^2+2x)dx=x^3+x^2$.",
              "<b>Step 2 — At bounds.</b> $F(2)=8+4=12$; $F(0)=0$.",
              "<b>Step 3 — Subtract.</b> $12-0=12$.",
              "<b>Step 4 — Distractor audit.</b> $10$, $14$, $8$ come from antiderivative or arithmetic slips."
            ],
            a: "$\\int_0^2=12$",
            v: "Sanity: the integrand is positive and rising on $[0,2]$, so a value near 12 (well under the $16\\times2$ bounding box) is reasonable."
          }),
          ref: "Handbook p.49" },

        { q: "$\\frac{d}{dx}[x^2 \\ln x]$ equals:",
          choices: ["$2x\\ln x + x$", "$2x\\ln x$", "$x + \\ln x$", "$2/x$"],
          correct: 0,
          solution: S({
            c: "Product rule $(uv)'=u'v+uv'$ with $u=x^2$, $v=\\ln x$.",
            s: [
              "<b>Step 1 — Pieces.</b> $u'=2x$, $v'=1/x$.",
              "<b>Step 2 — Apply.</b> $(2x)(\\ln x)+(x^2)(1/x)$.",
              "<b>Step 3 — Simplify.</b> $=2x\\ln x+x$.",
              "<b>Step 4 — Distractor audit.</b> $2x\\ln x$ drops the second term; $x+\\ln x$ and $2/x$ misapply the rule."
            ],
            a: "$2x\\ln x+x$",
            v: "At $x=1$: $2(1)(0)+1=1$ ✓ - the slope is 1 there, matching a numerical check."
          }),
          ref: "Handbook p.47" },

        { q: "Find general solution of $y' + 3y = 0$.",
          choices: ["$y = Ce^{-3x}$", "$y = Ce^{3x}$", "$y = C\\cos 3x$", "$y = Cx^{-3}$"],
          correct: 0,
          solution: S({
            c: "First-order linear homogeneous ODE $y'+ay=0$ has solution $y=Ce^{-ax}$ (characteristic root $r=-a$).",
            s: [
              "<b>Step 1 — Characteristic eq.</b> $r+3=0\\Rightarrow r=-3$.",
              "<b>Step 2 — General solution.</b> $y=Ce^{-3x}$.",
              "<b>Step 3 — Distractor audit.</b> $Ce^{3x}$ has the wrong sign (would GROW); $C\\cos3x$ needs imaginary roots; $Cx^{-3}$ isn't exponential."
            ],
            a: "$y=Ce^{-3x}$",
            v: "Plug back: $y'+3y=-3Ce^{-3x}+3Ce^{-3x}=0$ ✓. Negative root -> decaying solution."
          }),
          ref: "Handbook p.54-55" },

        { q: "Solve $y'' + 4y' + 13y = 0$. The roots of the char eq are:",
          choices: ["$-2 \\pm 3j$", "$2 \\pm 3j$", "$-4 \\pm \\sqrt{36}$", "$-2, -13$"],
          correct: 0,
          solution: S({
            c: "Second-order ODE $ay''+by'+cy=0$ -> characteristic equation $ar^2+br+c=0$; a negative discriminant gives complex roots (damped oscillation).",
            s: [
              "<b>Step 1 — Characteristic eq.</b> $r^2+4r+13=0$.",
              "<b>Step 2 — Discriminant.</b> $16-52=-36<0$ -> complex.",
              "<b>Step 3 — Roots.</b> $r=\\dfrac{-4\\pm6j}{2}=-2\\pm3j$.",
              "<b>Step 4 — Distractor audit.</b> $2\\pm3j$ has wrong real-part sign; $-4\\pm\\sqrt{36}$ misreads the discriminant; $-2,-13$ assumes real roots."
            ],
            a: "$r=-2\\pm3j$",
            v: "Real part $-2$ -> the solution $e^{-2x}(C_1\\cos3x+C_2\\sin3x)$ decays; imag part 3 -> oscillation frequency."
          }),
          ref: "Handbook p.55" },

        { q: "Find angle between $\\vec{A} = 3\\hat{i}+4\\hat{j}$ and $\\vec{B} = \\hat{i}+2\\hat{j}+2\\hat{k}$.",
          choices: ["$42.8°$", "$60°$", "$30°$", "$48°$"],
          correct: 0,
          solution: S({
            c: "Angle from the dot product: $\\cos\\theta=\\dfrac{\\vec A\\cdot\\vec B}{|\\vec A||\\vec B|}$.",
            s: [
              "<b>Step 1 — Dot product.</b> $(3)(1)+(4)(2)+(0)(2)=11$.",
              "<b>Step 2 — Magnitudes.</b> $|\\vec A|=\\sqrt{25}=5$; $|\\vec B|=\\sqrt{1+4+4}=3$.",
              "<b>Step 3 — Cosine and angle.</b> $\\cos\\theta=11/15=0.733\\Rightarrow\\theta\\approx42.8°$.",
              "<b>Step 4 — Distractor audit.</b> $60°,30°,48°$ correspond to wrong cosine values."
            ],
            a: "$\\theta\\approx42.8°$",
            v: "Range check: $0°$ would be parallel, $90°$ perpendicular - 42.8° is in between, as the positive dot product implies."
          }),
          ref: "Handbook p.38" },

        { q: "$\\vec{A} \\times \\vec{B}$ for $\\vec{A}=2\\hat{i}+\\hat{k}$, $\\vec{B}=\\hat{i}+\\hat{j}-\\hat{k}$:",
          choices: ["$-\\hat{i}+3\\hat{j}+2\\hat{k}$", "$\\hat{i}-3\\hat{j}+2\\hat{k}$", "$3\\hat{i}+\\hat{j}-\\hat{k}$", "$-\\hat{i}-3\\hat{j}-2\\hat{k}$"],
          correct: 0,
          solution: S({
            c: "Cross product via the determinant of the i-j-k matrix over the two vectors' components.",
            s: [
              "<b>Step 1 — Components.</b> $A=(2,0,1)$, $B=(1,1,-1)$.",
              "<b>Step 2 — i, j, k.</b> $i:(0)(-1)-(1)(1)=-1$; $j:-[(2)(-1)-(1)(1)]=3$; $k:(2)(1)-(0)(1)=2$.",
              "<b>Step 3 — Combine.</b> $-\\hat i+3\\hat j+2\\hat k$.",
              "<b>Step 4 — Distractor audit.</b> The other options flip signs (especially the j-term's required minus) or scramble components."
            ],
            a: "$-\\hat i+3\\hat j+2\\hat k$",
            v: "Perpendicularity check: $(\\vec A\\times\\vec B)\\cdot\\vec A=(-1)(2)+(3)(0)+(2)(1)=0$ ✓ - the cross product is normal to both."
          }),
          ref: "Handbook p.38" },

        { q: "$\\log_2(64) + \\log_3(81)$ equals:",
          choices: ["$10$", "$12$", "$8$", "$14$"],
          correct: 0,
          solution: S({
            c: "Use $\\log_b(b^n)=n$ - find the power that produces each argument.",
            s: [
              "<b>Step 1 — First log.</b> $\\log_2 64=\\log_2 2^6=6$.",
              "<b>Step 2 — Second log.</b> $\\log_3 81=\\log_3 3^4=4$.",
              "<b>Step 3 — Sum.</b> $6+4=10$.",
              "<b>Step 4 — Distractor audit.</b> $12$, $8$, $14$ come from mis-powering 64 or 81."
            ],
            a: "$10$",
            v: "Verify: $2^6=64$ and $3^4=81$ ✓. A log just asks 'what exponent?'."
          }),
          ref: "Handbook p.36" },

        { q: "Find $\\lim_{x\\to 0} \\dfrac{\\sin 3x}{x}$.",
          choices: ["$3$", "$1$", "$0$", "$\\infty$"],
          correct: 0,
          solution: S({
            c: "Key limit $\\lim_{u\\to0}\\dfrac{\\sin u}{u}=1$; rewrite to match the form.",
            s: [
              "<b>Step 1 — Force the form.</b> $\\dfrac{\\sin3x}{x}=3\\cdot\\dfrac{\\sin3x}{3x}$.",
              "<b>Step 2 — Take limit.</b> As $x\\to0$, $\\dfrac{\\sin3x}{3x}\\to1$, so the limit is $3\\times1=3$.",
              "<b>Step 3 — Distractor audit.</b> $1$ forgets the factor of 3; $0$ and $\\infty$ misjudge the $0/0$ form."
            ],
            a: "Limit $=3$",
            v: "L'Hopital confirms: $\\lim\\dfrac{3\\cos3x}{1}\\big|_{x=0}=3$ ✓."
          }),
          ref: "Handbook p.47" },

        { q: "Series Taylor expansion of $e^x$ around $x=0$, first 3 terms:",
          choices: ["$1 + x + x^2/2$", "$1 - x + x^2/2$", "$x + x^2/2 + x^3/6$", "$1 + x + x^2$"],
          correct: 0,
          solution: S({
            c: "Maclaurin series $f(x)=\\sum\\dfrac{f^{(n)}(0)}{n!}x^n$. For $e^x$ every derivative is $e^x$, so $f^{(n)}(0)=1$.",
            s: [
              "<b>Step 1 — Terms.</b> $\\dfrac{1}{0!}=1$, $\\dfrac{1}{1!}x=x$, $\\dfrac{1}{2!}x^2=x^2/2$.",
              "<b>Step 2 — First three.</b> $1+x+\\dfrac{x^2}{2}$.",
              "<b>Step 3 — Distractor audit.</b> $1-x+x^2/2$ is $e^{-x}$; the others drop the constant or use wrong coefficients."
            ],
            a: "$1+x+\\dfrac{x^2}{2}$",
            v: "At $x=0.1$: $1+0.1+0.005=1.105$ vs actual $e^{0.1}\\approx1.105$ ✓."
          }),
          ref: "Handbook p.50" },
      ],
    },
    // ====================== Ch 2: Probability & Statistics ======================
    {
      id: 2, name_en: "Probability & Statistics", name_vn: "Xác suất – Thống kê", fe_count: [4, 6],
      questions: [
        { q: "Sample mean of {4, 8, 6, 5, 7}:",
          choices: ["$6.0$", "$5.5$", "$6.5$", "$7.0$"],
          correct: 0,
          solution: S({
            c: "Sample mean: $\\bar x=\\dfrac1n\\sum x_i$ - the sum divided by the count.",
            s: [
              "<b>Step 1 — Sum.</b> $4+8+6+5+7=30$.",
              "<b>Step 2 — Divide by n=5.</b> $30/5=6.0$.",
              "<b>Step 3 — Distractor audit.</b> $5.5$, $6.5$, $7.0$ are off - the arithmetic mean is exactly 6."
            ],
            a: "$\\bar x=6.0$",
            v: "The mean sits in the middle of the data range (4 to 8) ✓ - a basic sanity check."
          }),
          ref: "Handbook p.63" },

        { q: "Sample standard deviation of {4, 8, 6, 5, 7}:",
          choices: ["$1.581$", "$1.414$", "$2.0$", "$2.5$"],
          correct: 0,
          solution: S({
            c: "Sample std: $s=\\sqrt{\\dfrac{1}{n-1}\\sum(x_i-\\bar x)^2}$. The $n-1$ (Bessel's correction) gives an unbiased estimate.",
            s: [
              "<b>Step 1 — Squared deviations from $\\bar x=6$.</b> $4,4,0,1,1$; sum $=10$.",
              "<b>Step 2 — Sample variance.</b> $s^2=10/(5-1)=2.5$.",
              "<b>Step 3 — Root.</b> $s=\\sqrt{2.5}\\approx1.581$.",
              "<b>Step 4 — Distractor audit.</b> $1.414=\\sqrt2$ uses POPULATION /n (wrong here); $2.0$ and $2.5$ confuse variance/std."
            ],
            a: "$s\\approx1.581$",
            v: "Sample uses $n-1$, population uses $n$ - the question asks SAMPLE, so 1.581 not 1.414 ✓."
          }),
          ref: "Handbook p.63" },

        { q: "Probability of drawing 2 aces in a row from a 52-card deck without replacement:",
          choices: ["$1/221$", "$1/169$", "$1/52$", "$1/26$"],
          correct: 0,
          solution: S({
            c: "Dependent events multiply with conditional probability: $P(A_1\\cap A_2)=P(A_1)P(A_2|A_1)$. Without replacement, the deck shrinks.",
            s: [
              "<b>Step 1 — First ace.</b> $4/52=1/13$.",
              "<b>Step 2 — Second ace (3 left in 51).</b> $3/51=1/17$.",
              "<b>Step 3 — Multiply.</b> $(1/13)(1/17)=1/221$.",
              "<b>Step 4 — Distractor audit.</b> $1/169=(4/52)^2$ assumes WITH replacement; $1/52$ and $1/26$ are single-draw values."
            ],
            a: "$P=1/221\\approx0.45\\%$",
            v: "Without replacement is slightly LESS likely than with ($1/221<1/169$) because removing the first ace lowers the second chance ✓."
          }),
          ref: "Handbook p.64-65" },

        { q: "Test scores are $N(\\mu=75, \\sigma=10)$. What % score above 90?",
          choices: ["$6.68\\%$", "$15\\%$", "$1\\%$", "$32\\%$"],
          correct: 0,
          solution: S({
            c: "Standardize with $z=(x-\\mu)/\\sigma$, then read $P(Z>z)$ from the normal table.",
            s: [
              "<b>Step 1 — z-score.</b> $z=(90-75)/10=1.5$.",
              "<b>Step 2 — Table.</b> $P(Z\\le1.5)=0.9332$.",
              "<b>Step 3 — Complement.</b> $P(Z>1.5)=1-0.9332=0.0668=6.68\\%$.",
              "<b>Step 4 — Distractor audit.</b> $15\\%$ is near $z=1$; $1\\%$ is near $z=2.3$; $32\\%$ is near $z=0.5$."
            ],
            a: "$\\approx6.68\\%$",
            v: "Empirical-rule check: ~16% above $z=1$ (score 85), ~2.5% above $z=2$ (score 95) - so 6.68% at score 90 fits between ✓."
          }),
          ref: "Handbook p.67" },

        { q: "Game pays $5 with $p=0.2$, $2 with $p=0.5$, $0 otherwise. Expected payout:",
          choices: ["$\\$2.00$", "$\\$3.50$", "$\\$1.00$", "$\\$2.30$"],
          correct: 0,
          solution: S({
            c: "Expected value: $E[X]=\\sum x_i P(x_i)$ - probability-weighted average of payouts.",
            s: [
              "<b>Step 1 — Missing prob.</b> $P(\\$0)=1-0.2-0.5=0.3$.",
              "<b>Step 2 — Weighted terms.</b> $5(0.2)=1.0$; $2(0.5)=1.0$; $0(0.3)=0$.",
              "<b>Step 3 — Sum.</b> $E[X]=2.00$.",
              "<b>Step 4 — Distractor audit.</b> $\\$3.50$ averages the nonzero payouts; $\\$1.00$ keeps one term; $\\$2.30$ misweights."
            ],
            a: "$E[X]=\\$2.00$",
            v: "Decision rule: play only if the cost to enter is below the $2.00 expected payout ✓."
          }),
          ref: "Handbook p.65" },

        { q: "Variance of a binomial distribution $B(n,p)$:",
          choices: ["$np(1-p)$", "$np$", "$n(1-p)$", "$p(1-p)$"],
          correct: 0,
          solution: S({
            c: "A binomial counts successes in $n$ independent trials: mean $\\mu=np$, variance $\\sigma^2=np(1-p)$.",
            s: [
              "<b>Step 1 — Match.</b> $\\sigma^2=np(1-p)$.",
              "<b>Step 2 — Distractor audit.</b> $np$ is the MEAN; $n(1-p)$ and $p(1-p)$ drop a factor."
            ],
            a: "$\\sigma^2=np(1-p)$",
            v: "Variance is MAXIMIZED at $p=0.5$ (most uncertainty) - e.g. 100 fair flips: $\\mu=50$, $\\sigma^2=25$, $\\sigma=5$ ✓."
          }),
          ref: "Handbook p.66" },

        { q: "If A and B are independent events with $P(A)=0.4$, $P(B)=0.3$, find $P(A\\cup B)$.",
          choices: ["$0.58$", "$0.70$", "$0.12$", "$0.42$"],
          correct: 0,
          solution: S({
            c: "Union: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. For INDEPENDENT events, $P(A\\cap B)=P(A)P(B)$.",
            s: [
              "<b>Step 1 — Intersection.</b> $0.4\\times0.3=0.12$.",
              "<b>Step 2 — Inclusion-exclusion.</b> $0.4+0.3-0.12=0.58$.",
              "<b>Step 3 — Distractor audit.</b> $0.70$ forgets to subtract overlap (the mutually-exclusive case); $0.12$ is the intersection; $0.42$ is wrong."
            ],
            a: "$P(A\\cup B)=0.58$",
            v: "The $-0.12$ avoids double-counting the overlap - subtracting it is the whole point of inclusion-exclusion ✓."
          }),
          ref: "Handbook p.64-65" },

        { q: "Six-sided die rolled. $P(\\text{prime number})$ where primes among 1-6 are {2,3,5}:",
          choices: ["$1/2$", "$1/3$", "$2/3$", "$1/4$"],
          correct: 0,
          solution: S({
            c: "Classical probability: $P=\\dfrac{\\text{favorable}}{\\text{total}}$.",
            s: [
              "<b>Step 1 — Favorable.</b> Primes in 1-6: {2,3,5} -> 3 outcomes.",
              "<b>Step 2 — Total.</b> 6 faces.",
              "<b>Step 3 — Divide.</b> $3/6=1/2$.",
              "<b>Step 4 — Distractor audit.</b> $1/3$ counts only 2 primes; $2/3$ counts 4; $1/4$ is wrong."
            ],
            a: "$P=1/2$",
            v: "Key reminder: 1 is NOT prime by definition - including it (4 outcomes) would wrongly give 2/3 ✓."
          }),
          ref: "Handbook p.64" },
      ],
    },
    // ====================== Ch 3: Ethics ======================
    {
      id: 3, name_en: "Ethics & Professional Practice", name_vn: "Đạo đức & Nghề nghiệp", fe_count: [4, 6],
      questions: [
        { q: "Per NCEES Model Rules, engineers shall hold paramount the:",
          choices: ["Safety, health, and welfare of the public", "Client's financial interest", "Employer's profitability", "Engineering society's reputation"],
          correct: 0,
          solution: S({
            c: "NCEES Rule of Professional Conduct #1 - the foundational engineering ethic: the engineer's first responsibility is the PUBLIC.",
            s: [
              "<b>Step 1 — The rule.</b> Engineers shall hold paramount the safety, health, and welfare of the public.",
              "<b>Step 2 — Distractor audit.</b> Client finances, employer profit, and society reputation all rank BELOW public welfare, never above it.",
              "<b>Step 3 — Exam heuristic.</b> When unsure, the answer is almost always 'public safety'."
            ],
            a: "Public safety, health, and welfare.",
            v: "This is exactly why an engineer may refuse unsafe work even when directed by a boss - the public duty overrides loyalty."
          }),
          ref: "Handbook p.4-5" },

        { q: "An engineer is offered consulting work outside their area of expertise. The most ethical response is:",
          choices: ["Decline or partner with someone qualified", "Accept and learn on the job", "Subcontract anonymously", "Refuse all outside consulting"],
          correct: 0,
          solution: S({
            c: "NCEES Rule #2: perform services ONLY in your area of competence. Working unqualified risks public harm.",
            s: [
              "<b>Step 1 — Match.</b> Decline, or partner with someone qualified.",
              "<b>Step 2 — Distractor audit.</b> 'Accept and learn on the job' violates Rule 2; 'subcontract anonymously' still puts your name on unqualified work; 'refuse ALL consulting' is needlessly restrictive."
            ],
            a: "Decline or partner with a qualified engineer.",
            v: "You may stamp work outside your specialty ONLY if you have thoroughly reviewed it and accept full responsibility (responsible charge)."
          }),
          ref: "Handbook p.4" },

        { q: "Coca-Cola's secret formula is protected as a:",
          choices: ["Trade secret", "Patent", "Copyright", "Trademark"],
          correct: 0,
          solution: S({
            c: "IP categories: PATENT (inventions, 20 yr), COPYRIGHT (creative works, life+70), TRADEMARK (brand identifiers), TRADE SECRET (confidential business info, indefinite while kept secret).",
            s: [
              "<b>Step 1 — Match.</b> Trade secret.",
              "<b>Step 2 — Why.</b> The formula has been protected 100+ years - far beyond a patent's 20, and patents REQUIRE public disclosure (a secret wouldn't survive).",
              "<b>Step 3 — Distractor audit.</b> Patent/copyright/trademark all expire or require disclosure; only a trade secret lasts indefinitely while secret."
            ],
            a: "Trade secret.",
            v: "Other famous trade secrets: KFC's spice blend, Google's ranking algorithm, WD-40's formula - all kept rather than patented."
          }),
          ref: "Handbook p.11" },

        { q: "A patent on an invention typically lasts:",
          choices: ["20 years", "10 years", "Life + 70 years", "Indefinite"],
          correct: 0,
          solution: S({
            c: "A US utility patent lasts 20 years from the FILING date; after expiry the invention enters the public domain.",
            s: [
              "<b>Step 1 — Match.</b> 20 years.",
              "<b>Step 2 — Distractor audit.</b> 10 years is too short; 'life + 70' is COPYRIGHT; 'indefinite' is a trade secret. (Design patents are 15 years.)"
            ],
            a: "20 years.",
            v: "Patents trade temporary monopoly for PUBLIC disclosure - after 20 years anyone can use the invention freely, which is the deal society strikes with inventors."
          }),
          ref: "Handbook p.11" },

        { q: "An engineer should disclose conflicts of interest to:",
          choices: ["All affected parties in writing", "Only the immediate supervisor", "No one, to avoid problems", "Only after the project is complete"],
          correct: 0,
          solution: S({
            c: "Rule 4 (faithful agent/trustee): disclose ALL conflicts proactively and IN WRITING so clients can make informed decisions.",
            s: [
              "<b>Step 1 — Match.</b> All affected parties, in writing.",
              "<b>Step 2 — Distractor audit.</b> 'Only the supervisor' is too narrow; 'no one' hides the conflict; 'after the project' is too late - disclose BEFORE work begins."
            ],
            a: "All affected parties, in writing.",
            v: "Even an APPARENT conflict must be disclosed - perception of bias is itself a problem, and written disclosure protects both engineer and client."
          }),
          ref: "Handbook p.4" },

        { q: "Reviewing another engineer's work without permission is permitted when:",
          choices: ["Required by public safety", "Asked by a friend", "Competing for the same project", "Never"],
          correct: 0,
          solution: S({
            c: "General courtesy: don't review another engineer's work without their knowledge - EXCEPT when public safety is at risk (Rule 1 overrides).",
            s: [
              "<b>Step 1 — Match.</b> When required by public safety.",
              "<b>Step 2 — Distractor audit.</b> 'A friend asks' or 'competing for the project' are not valid reasons; 'never' is wrong (safety is the exception)."
            ],
            a: "When required by public safety.",
            v: "Even then, document your concerns and report to the proper authority - the public-welfare duty justifies the review, not personal or competitive motives."
          }),
          ref: "Handbook p.5-7" },
      ],
    },
    // ====================== Ch 4: Engineering Economics ======================
    {
      id: 4, name_en: "Engineering Economics", name_vn: "Kinh tế Kỹ thuật", fe_count: [5, 8],
      questions: [
        { q: "How much to invest today at 8%/yr to have $10,000 in 5 years?",
          choices: ["$\\$6,806$", "$\\$8,500$", "$\\$7,350$", "$\\$5,000$"],
          correct: 0,
          solution: S({
            c: "Present worth: $P=\\dfrac{F}{(1+i)^n}$ - discount the future amount back $n$ periods.",
            s: [
              "<b>Step 1 — Identify.</b> $F=10{,}000$, $i=0.08$, $n=5$.",
              "<b>Step 2 — Growth factor.</b> $(1.08)^5=1.4693$.",
              "<b>Step 3 — Divide.</b> $P=10{,}000/1.4693=\\$6{,}806$.",
              "<b>Step 4 — Distractor audit.</b> $\\$8{,}500$ and $\\$7{,}350$ under-discount; $\\$5{,}000$ over-discounts."
            ],
            a: "$P\\approx\\$6{,}806$",
            v: "Check: $6{,}806\\times1.4693\\approx10{,}000$ ✓ - it grows back to the target."
          }),
          ref: "Handbook p.230" },

        { q: "Annual payment to amortize $20,000 loan at 6% over 4 years:",
          choices: ["$\\$5,772$", "$\\$5,000$", "$\\$6,500$", "$\\$4,800$"],
          correct: 0,
          solution: S({
            c: "Capital recovery factor: $A=P\\dfrac{i(1+i)^n}{(1+i)^n-1}$ converts a present principal into level annual payments.",
            s: [
              "<b>Step 1 — Growth.</b> $(1.06)^4=1.2625$.",
              "<b>Step 2 — CRF.</b> $\\dfrac{0.06(1.2625)}{0.2625}=0.2886$.",
              "<b>Step 3 — Payment.</b> $A=20{,}000\\times0.2886=\\$5{,}772$/yr.",
              "<b>Step 4 — Distractor audit.</b> $\\$5{,}000$ is just $P/4$ (ignores interest); $\\$6{,}500$ and $\\$4{,}800$ are off."
            ],
            a: "$A\\approx\\$5{,}772$/year",
            v: "Total paid $4\\times5772=\\$23{,}088$, so $\\$3{,}088$ interest on $\\$20{,}000$ over 4 years at 6% ✓ - the same formula behind every fixed loan/mortgage."
          }),
          ref: "Handbook p.232" },

        { q: "Fixed cost $50k/yr, variable $30/unit, price $80/unit. Break-even quantity:",
          choices: ["$1000$ units", "$625$ units", "$1667$ units", "$2500$ units"],
          correct: 0,
          solution: S({
            c: "Break-even: revenue = total cost. Each unit's contribution margin $(P-VC)$ pays down fixed cost, so $Q=FC/(P-VC)$.",
            s: [
              "<b>Step 1 — Margin.</b> $80-30=\\$50$/unit.",
              "<b>Step 2 — Divide.</b> $Q=50{,}000/50=1000$ units.",
              "<b>Step 3 — Distractor audit.</b> $625$ uses price (80) as the divisor; $1667$ uses VC; $2500$ is wrong."
            ],
            a: "$Q=1000$ units",
            v: "At Q=1000: revenue $=80{,}000$; cost $=50{,}000+30(1000)=80{,}000$ ✓ - they balance exactly."
          }),
          ref: "Handbook p.232" },

        { q: "Equipment costs $50k, salvage $5k after 10 yrs. Straight-line book value after 6 years:",
          choices: ["$\\$23,000$", "$\\$27,000$", "$\\$20,000$", "$\\$30,000$"],
          correct: 0,
          solution: S({
            c: "Straight-line: equal annual depreciation $D=(C-SV)/n$; book value $BV_t=C-tD$.",
            s: [
              "<b>Step 1 — Annual D.</b> $(50{,}000-5{,}000)/10=\\$4{,}500$/yr.",
              "<b>Step 2 — Cumulative.</b> $6\\times4{,}500=27{,}000$.",
              "<b>Step 3 — Book value.</b> $50{,}000-27{,}000=\\$23{,}000$.",
              "<b>Step 4 — Distractor audit.</b> $\\$27{,}000$ is the accumulated DEPRECIATION, not the book value; $\\$20{,}000$/$\\$30{,}000$ are off."
            ],
            a: "$BV_6=\\$23{,}000$",
            v: "At year 10: $50{,}000-10(4{,}500)=\\$5{,}000=SV$ ✓ - straight-line lands exactly on salvage."
          }),
          ref: "Handbook p.230" },

        { q: "Future value of $1000 invested at 10% for 5 years:",
          choices: ["$\\$1,611$", "$\\$1,500$", "$\\$1,700$", "$\\$1,100$"],
          correct: 0,
          solution: S({
            c: "Compound growth: $F=P(1+i)^n$.",
            s: [
              "<b>Step 1 — Factor.</b> $(1.10)^5=1.6105$.",
              "<b>Step 2 — Multiply.</b> $F=1000\\times1.6105=\\$1{,}611$.",
              "<b>Step 3 — Distractor audit.</b> $\\$1{,}500$ assumes simple interest ($1000+5\\times100$); $\\$1{,}100$ is one year; $\\$1{,}700$ overshoots."
            ],
            a: "$F\\approx\\$1{,}611$",
            v: "Rule of 72: at 10% money doubles in ~7.2 yr, so after 5 yr ~1.6x ✓. Compound ($1611) beats simple ($1500)."
          }),
          ref: "Handbook p.230" },

        { q: "$2000$ deposited annually for 10 years at 5%. Future value:",
          choices: ["$\\$25,156$", "$\\$20,000$", "$\\$30,000$", "$\\$18,500$"],
          correct: 0,
          solution: S({
            c: "Future value of an annuity: $F=A\\dfrac{(1+i)^n-1}{i}$ - each deposit compounds for a different number of years; the sum is geometric.",
            s: [
              "<b>Step 1 — Factor.</b> $(1.05)^{10}=1.6289$; $(F/A)=(1.6289-1)/0.05=12.578$.",
              "<b>Step 2 — Multiply.</b> $F=2000\\times12.578=\\$25{,}157$.",
              "<b>Step 3 — Distractor audit.</b> $\\$20{,}000$ is the deposits with NO interest; $\\$30{,}000$/$\\$18{,}500$ are off."
            ],
            a: "$F\\approx\\$25{,}157$",
            v: "Raw deposits total $\\$20{,}000$; compounding adds ~$\\$5{,}157$ ✓ - earlier deposits grow the longest."
          }),
          ref: "Handbook p.231" },

        { q: "Two projects A: NPV=$50k, life=5yr; B: NPV=$80k, life=10yr. Which is better if at same i?",
          choices: ["Need EUAW comparison for unequal lives", "B (higher NPV)", "A (faster payback)", "Same"],
          correct: 0,
          solution: S({
            c: "UNEQUAL lives: you cannot compare NPVs directly. Convert each to Equivalent Uniform Annual Worth: $EUAW=NPV\\times(A/P,i,n)$ (a per-year basis).",
            s: [
              "<b>Step 1 — Match.</b> Need an EUAW comparison.",
              "<b>Step 2 — Why.</b> Project A (5 yr) could repeat to cover B's 10 years - so higher raw NPV alone (B) doesn't decide it.",
              "<b>Step 3 — Distractor audit.</b> 'B (higher NPV)' and 'A (faster payback)' ignore the life mismatch; 'same' is wrong."
            ],
            a: "Compare via EUAW.",
            v: "At i=10%: $EUAW_A=50k(0.2638)=\\$13{,}190$/yr vs $EUAW_B=80k(0.1627)=\\$13{,}016$/yr - A actually wins slightly, despite lower NPV ✓."
          }),
          ref: "Handbook p.232" },

        { q: "Inflation rate $f=3\\%$, real rate $i_r = 5\\%$. Nominal interest rate:",
          choices: ["$8.15\\%$", "$8\\%$", "$2\\%$", "$15\\%$"],
          correct: 0,
          solution: S({
            c: "Fisher equation (exact): $1+i_{nom}=(1+i_r)(1+f)$ - NOT simple addition.",
            s: [
              "<b>Step 1 — Multiply.</b> $(1.05)(1.03)=1.0815$.",
              "<b>Step 2 — Subtract 1.</b> $i_{nom}=0.0815=8.15\\%$.",
              "<b>Step 3 — Distractor audit.</b> $8\\%$ is the APPROXIMATION $i_r+f$; $2\\%$ subtracts; $15\\%$ is wrong."
            ],
            a: "$i_{nom}\\approx8.15\\%$",
            v: "The simple sum $i_r+f=8\\%$ is close; the exact Fisher value (8.15%) is slightly higher due to the cross-term $i_r f$, which matters more at high rates ✓."
          }),
          ref: "Handbook p.230" },
      ],
    },
    // ====================== Ch 5: Electrical Materials ======================
    {
      id: 5, name_en: "Properties of Electrical Materials", name_vn: "Tính chất Vật liệu Điện", fe_count: [4, 6],
      questions: [
        { q: "Intrinsic carrier concentration in pure silicon at 300K is approximately:",
          choices: ["$1.5 \\times 10^{10}$ cm$^{-3}$", "$1 \\times 10^{16}$ cm$^{-3}$", "$1 \\times 10^{22}$ cm$^{-3}$", "$1 \\times 10^{6}$ cm$^{-3}$"],
          correct: 0,
          solution: S({
            c: "Intrinsic carrier concentration $n_i$ depends exponentially on temperature and bandgap; for Si at 300 K it's a memorized constant.",
            s: [
              "<b>Step 1 — Match.</b> $n_i\\approx1.5\\times10^{10}$ cm$^{-3}$ (Si, 300 K).",
              "<b>Step 2 — Distractor audit.</b> $10^{16}$ is a typical DOPING level; $10^{22}$ is near atomic density; $10^6$ is GaAs-like (larger bandgap)."
            ],
            a: "$n_i\\approx1.5\\times10^{10}$ cm$^{-3}$",
            v: "Si atomic density is ~$5\\times10^{22}$ cm$^{-3}$, so only ~1 in $10^{12}$ atoms gives an intrinsic carrier - which is why doping (even ppm levels) dominates conductivity."
          }),
          ref: "Handbook p.354" },

        { q: "n-type Si doped at $N_D = 10^{16}$ cm$^{-3}$. Hole concentration $p$:",
          choices: ["$2.25\\times 10^4$ cm$^{-3}$", "$10^{16}$ cm$^{-3}$", "$10^{10}$ cm$^{-3}$", "$0$"],
          correct: 0,
          solution: S({
            c: "Mass-action law at equilibrium: $n\\cdot p=n_i^2$. For heavy n-type doping, $n\\approx N_D$.",
            s: [
              "<b>Step 1 — Majority.</b> $n\\approx N_D=10^{16}$.",
              "<b>Step 2 — Minority.</b> $p=n_i^2/n=(1.5\\times10^{10})^2/10^{16}$.",
              "<b>Step 3 — Compute.</b> $=2.25\\times10^{20}/10^{16}=2.25\\times10^4$ cm$^{-3}$.",
              "<b>Step 4 — Distractor audit.</b> $10^{16}$ is the ELECTRON (majority) level; $10^{10}$ is intrinsic; 0 is wrong."
            ],
            a: "$p\\approx2.25\\times10^4$ cm$^{-3}$",
            v: "Holes are ~$10^{12}\\times$ fewer than electrons here - doping makes one carrier dominate, the basis of n/p regions and junctions."
          }),
          ref: "Handbook p.354" },

        { q: "Copper wire 2 m long, 1 mm² cross-section, $\\rho=1.72\\times 10^{-8}$ $\\Omega$m. Resistance:",
          choices: ["$0.0344\\ \\Omega$", "$34.4\\ \\Omega$", "$3.44\\ \\Omega$", "$0.344\\ \\Omega$"],
          correct: 0,
          solution: S({
            c: "Conductor resistance: $R=\\rho L/A$. The trap is converting mm$^2$ to m$^2$.",
            s: [
              "<b>Step 1 — Convert area.</b> $1$ mm$^2=10^{-6}$ m$^2$.",
              "<b>Step 2 — Apply.</b> $R=(1.72\\times10^{-8})(2)/10^{-6}$.",
              "<b>Step 3 — Compute.</b> $=3.44\\times10^{-8}/10^{-6}=0.0344\\ \\Omega$.",
              "<b>Step 4 — Distractor audit.</b> $34.4\\ \\Omega$, $3.44\\ \\Omega$, $0.344\\ \\Omega$ are all area-conversion (power-of-ten) errors."
            ],
            a: "$R\\approx0.0344\\ \\Omega$ (34.4 m$\\Omega$)",
            v: "~30 m$\\Omega$ per meter for this gauge matches real household wiring ✓ - copper's tiny resistivity keeps wire losses low."
          }),
          ref: "Handbook p.354" },

        { q: "Which material is a typical electrical insulator?",
          choices: ["Glass", "Aluminum", "Silicon", "Copper"],
          correct: 0,
          solution: S({
            c: "Conductivity tiers: conductors $\\sigma>10^5$ S/m; semiconductors $10^{-6}$ to $10^4$; insulators $\\sigma<10^{-8}$ S/m.",
            s: [
              "<b>Step 1 — Match.</b> Glass ($\\sigma\\sim10^{-12}$ S/m) -> insulator.",
              "<b>Step 2 — Distractor audit.</b> Aluminum and copper are conductors ($\\sim10^7$ S/m); pure silicon is a semiconductor."
            ],
            a: "Glass.",
            v: "Other common insulators: rubber, ceramic, plastics, SiO2 - their huge bandgaps leave almost no free carriers, the opposite of metals."
          }),
          ref: "Handbook p.354" },

        { q: "Doping silicon with arsenic (Group V) produces:",
          choices: ["n-type material", "p-type material", "Intrinsic material", "Insulator"],
          correct: 0,
          solution: S({
            c: "Silicon has 4 valence electrons. Group V (P, As, Sb) DONATES an extra electron -> n-type; Group III (B, Al, Ga) ACCEPTS one (makes a hole) -> p-type.",
            s: [
              "<b>Step 1 — Match.</b> Arsenic is Group V -> donor -> n-type.",
              "<b>Step 2 — Distractor audit.</b> p-type needs a Group III dopant (boron); 'intrinsic' is undoped; doping never makes an insulator."
            ],
            a: "n-type.",
            v: "Mnemonic: Donor -> Dominant electrons -> Negative carriers -> n-type ✓. Group V's 5th electron is loosely bound and easily freed to conduct."
          }),
          ref: "Handbook p.354" },

        { q: "Drift current density in a semiconductor is:",
          choices: ["$J = q(n\\mu_n + p\\mu_p)E = \\sigma E$", "$J = -qD\\nabla n$", "$J = nev$", "$J = \\sigma E^2$"],
          correct: 0,
          solution: S({
            c: "Semiconductors carry current two ways: DRIFT (driven by an E-field) and DIFFUSION (driven by a concentration gradient). Drift sums both carrier types: $J=q(n\\mu_n+p\\mu_p)E=\\sigma E$.",
            s: [
              "<b>Step 1 — Match.</b> $J=q(n\\mu_n+p\\mu_p)E=\\sigma E$.",
              "<b>Step 2 — Distractor audit.</b> $-qD\\nabla n$ is the DIFFUSION current; $nev$ is incomplete (single species, no field); $\\sigma E^2$ is wrong (current is LINEAR in E)."
            ],
            a: "$J=q(n\\mu_n+p\\mu_p)E=\\sigma E$",
            v: "This defines conductivity $\\sigma=q(n\\mu_n+p\\mu_p)$ - and $J=\\sigma E$ is just Ohm's law in point form. Diffusion adds the gradient-driven term in junction devices."
          }),
          ref: "Handbook p.354" },
      ],
    },
    // ====================== Ch 6: Circuit Analysis ======================
    {
      id: 6, name_en: "Circuit Analysis (DC & AC)", name_vn: "Phân tích Mạch", fe_count: [11, 17],
      questions: [
        { q: "$12$V drives $R_1=2\\Omega$ series with ($R_2=6\\Omega \\| R_3=3\\Omega$). Total current:",
          choices: ["$3$ A", "$2$ A", "$4$ A", "$6$ A"],
          correct: 0,
          solution: S({
            c: "Reduce series-parallel networks step by step: combine the parallel pair, add the series part, then apply Ohm's law $I=V/R_{eq}$.",
            s: [
              "<b>Step 1 — Parallel.</b> $R_2\\|R_3=(6)(3)/(6+3)=2\\ \\Omega$.",
              "<b>Step 2 — Series.</b> $R_{eq}=2+2=4\\ \\Omega$.",
              "<b>Step 3 — Ohm's law.</b> $I=12/4=3$ A.",
              "<b>Step 4 — Distractor audit.</b> $2$ A uses $R_{eq}=6$; $4$ A and $6$ A drop the parallel step."
            ],
            a: "$I=3$ A",
            v: "Power check: $P=VI=36$ W delivered by the source - consistent with the resistances."
          }),
          ref: "Handbook p.356" },

        { q: "In a circuit with 24V source, 8Ω series, 4Ω at load terminals. $V_{Th}$ at load is:",
          choices: ["$24$ V", "$12$ V", "$16$ V", "$0$ V"],
          correct: 0,
          solution: S({
            c: "Thevenin voltage = OPEN-circuit voltage at the terminals. With the load removed, no current flows, so series resistors drop nothing.",
            s: [
              "<b>Step 1 — Open the load.</b> No current -> $I=0$.",
              "<b>Step 2 — No drops.</b> Both series resistors drop 0 V.",
              "<b>Step 3 — Read terminal voltage.</b> $V_{Th}=$ source $=24$ V.",
              "<b>Step 4 — Distractor audit.</b> $12$/$16$ V assume a voltage divider (would apply only if the load resistor were in PARALLEL across the terminals)."
            ],
            a: "$V_{Th}=24$ V",
            v: "Series resistance with no load carries no current and thus drops no voltage - the open-circuit terminal sees the full source."
          }),
          ref: "Handbook p.357" },

        { q: "$R_{Th}$ for above (zero sources): 8Ω in series with 4Ω equals:",
          choices: ["$12\\ \\Omega$", "$8\\ \\Omega$", "$2.67\\ \\Omega$", "$4\\ \\Omega$"],
          correct: 0,
          solution: S({
            c: "Thevenin resistance = resistance seen from the terminals with all INDEPENDENT sources zeroed (voltage source -> short, current source -> open).",
            s: [
              "<b>Step 1 — Zero the 24 V.</b> Replace it with a wire.",
              "<b>Step 2 — Look back.</b> The 4 ohm and 8 ohm are now in series.",
              "<b>Step 3 — Add.</b> $R_{Th}=4+8=12\\ \\Omega$.",
              "<b>Step 4 — Distractor audit.</b> $8$ or $4$ ohm drop a resistor; $2.67$ ohm would be the PARALLEL combination."
            ],
            a: "$R_{Th}=12\\ \\Omega$",
            v: "Only INDEPENDENT sources are zeroed; dependent sources (if present) stay and require a test-source method."
          }),
          ref: "Handbook p.357" },

        { q: "Max power transfer occurs when $R_L$ equals:",
          choices: ["$R_{Th}$", "$R_{Th}^2$", "$2 R_{Th}$", "$R_{Th}/2$"],
          correct: 0,
          solution: S({
            c: "Maximum Power Transfer Theorem: the load gets the most power when $R_L=R_{Th}$; then $P_{max}=V_{Th}^2/(4R_{Th})$.",
            s: [
              "<b>Step 1 — Match.</b> $R_L=R_{Th}$.",
              "<b>Step 2 — Why.</b> Setting $dP_L/dR_L=0$ on $P_L=V_{Th}^2 R_L/(R_{Th}+R_L)^2$ yields $R_L=R_{Th}$.",
              "<b>Step 3 — Distractor audit.</b> $R_{Th}^2$, $2R_{Th}$, $R_{Th}/2$ don't satisfy the derivative condition."
            ],
            a: "$R_L=R_{Th}$",
            v: "Caveat: this maximizes POWER, not EFFICIENCY - at the match only 50% reaches the load (half lost in $R_{Th}$). For efficiency you want $R_L\\gg R_{Th}$."
          }),
          ref: "Handbook p.360" },

        { q: "Impedance of $L=20$ mH at $\\omega=1000$ rad/s:",
          choices: ["$j20\\ \\Omega$", "$j2\\ \\Omega$", "$-j50\\ \\Omega$", "$j0.02\\ \\Omega$"],
          correct: 0,
          solution: S({
            c: "Inductor impedance is purely imaginary: $Z_L=j\\omega L$ (positive imag -> V leads I by 90 degrees).",
            s: [
              "<b>Step 1 — Convert.</b> $L=20$ mH $=0.02$ H.",
              "<b>Step 2 — Multiply.</b> $\\omega L=1000\\times0.02=20$.",
              "<b>Step 3 — Add j.</b> $Z_L=j20\\ \\Omega$.",
              "<b>Step 4 — Distractor audit.</b> $j2$ and $j0.02$ are unit slips; $-j50$ is capacitive (wrong sign and element)."
            ],
            a: "$Z_L=j20\\ \\Omega$",
            v: "Pure imaginary -> an ideal inductor stores energy but dissipates none. Reactance grows with frequency ($X_L=\\omega L$)."
          }),
          ref: "Handbook p.360" },

        { q: "RLC series at $\\omega=1000$: $R=10$, $X_L=20$, $X_C=10$. Total Z:",
          choices: ["$10 + j10\\ \\Omega$", "$10\\ \\Omega$", "$10 + j30$", "$30\\ \\Omega$"],
          correct: 0,
          solution: S({
            c: "Series impedances add: $Z=R+j(X_L-X_C)$ - the reactances partly cancel.",
            s: [
              "<b>Step 1 — Real part.</b> $R=10$.",
              "<b>Step 2 — Net reactance.</b> $X_L-X_C=20-10=+10$ (net inductive).",
              "<b>Step 3 — Combine.</b> $Z=10+j10\\ \\Omega$.",
              "<b>Step 4 — Distractor audit.</b> $10\\ \\Omega$ assumes resonance ($X_L=X_C$); $10+j30$ ADDS the reactances; $30\\ \\Omega$ adds magnitudes."
            ],
            a: "$Z=10+j10\\ \\Omega$",
            v: "Magnitude $\\sqrt{200}\\approx14.14\\ \\Omega$ at angle $45°$ lagging - net inductive since $X_L>X_C$ (above resonance)."
          }),
          ref: "Handbook p.360" },

        { q: "$V_{RMS}$ of $v(t) = 10\\sin(\\omega t)$ V:",
          choices: ["$7.07$ V", "$10$ V", "$3.18$ V", "$5$ V"],
          correct: 0,
          solution: S({
            c: "For a pure sinusoid, $V_{RMS}=V_m/\\sqrt2\\approx0.707V_m$.",
            s: [
              "<b>Step 1 — Peak.</b> $V_m=10$ V.",
              "<b>Step 2 — Divide.</b> $10/\\sqrt2\\approx7.07$ V.",
              "<b>Step 3 — Distractor audit.</b> $10$ V is the peak; $3.18$ V is $V_m/\\pi$ (half-wave average); $5$ V is wrong."
            ],
            a: "$V_{RMS}\\approx7.07$ V",
            v: "Reminder: US household '120 V' is RMS, so the peak is $120\\sqrt2\\approx170$ V - RMS gives the equivalent DC heating value."
          }),
          ref: "Handbook p.360" },

        { q: "Power factor of a load with $Z = 10+j10$:",
          choices: ["$0.707$ lagging", "$0.5$ lagging", "$1.0$", "$0.866$ leading"],
          correct: 0,
          solution: S({
            c: "Power factor $pf=\\cos\\theta$ where $\\theta=\\angle Z$. POSITIVE imaginary (inductive) -> current lags -> LAGGING pf.",
            s: [
              "<b>Step 1 — Angle.</b> $\\theta=\\arctan(10/10)=45°$.",
              "<b>Step 2 — Cosine.</b> $\\cos45°=0.707$.",
              "<b>Step 3 — Sign.</b> $+j$ -> inductive -> lagging.",
              "<b>Step 4 — Distractor audit.</b> $0.5$ is $\\cos60°$; $1.0$ is purely resistive; '0.866 leading' is capacitive (wrong sign)."
            ],
            a: "$pf=0.707$ lagging",
            v: "Motors (inductive) cause lagging pf; capacitor banks correct it back toward 1, cutting line current and losses."
          }),
          ref: "Handbook p.362" },

        { q: "120 V RMS across $Z=14.14\\angle 45°$. Real power:",
          choices: ["$720$ W", "$1018$ W", "$510$ W", "$8.49$ W"],
          correct: 0,
          solution: S({
            c: "Real power $P=V_{rms}I_{rms}\\cos\\theta$ - the $\\cos\\theta$ (power factor) accounts for the phase shift.",
            s: [
              "<b>Step 1 — Current.</b> $I_{rms}=120/14.14=8.485$ A.",
              "<b>Step 2 — Power factor.</b> $\\cos45°=0.707$.",
              "<b>Step 3 — Real power.</b> $P=120\\times8.485\\times0.707=720$ W.",
              "<b>Step 4 — Distractor audit.</b> $1018$ W forgets pf (apparent VA); $510$/$8.49$ W are off."
            ],
            a: "$P=720$ W",
            v: "Cross-check $P=I^2R=(8.485)^2(10)=720$ W - only the resistive part dissipates real power."
          }),
          ref: "Handbook p.362" },

        { q: "RC time constant: $R=1$ k$\\Omega$, $C=100\\ \\mu$F:",
          choices: ["$0.1$ s", "$0.01$ s", "$1$ s", "$10$ ms"],
          correct: 0,
          solution: S({
            c: "RC time constant $\\tau=RC$; units of ohm-farad are seconds.",
            s: [
              "<b>Step 1 — Convert.</b> $C=100\\ \\mu$F $=10^{-4}$ F.",
              "<b>Step 2 — Multiply.</b> $\\tau=(1000)(10^{-4})=0.1$ s.",
              "<b>Step 3 — Distractor audit.</b> $0.01$ s and $1$ s are power-of-ten slips; '10 ms' is off by 10."
            ],
            a: "$\\tau=0.1$ s (100 ms)",
            v: "After $5\\tau=500$ ms the capacitor is >99% charged - the standard 'settled' rule of thumb."
          }),
          ref: "Handbook p.358" },

        { q: "Capacitor charged with $\\tau = 0.1$ s. After 1 s, voltage is approximately:",
          choices: ["$> 99\\%$ of final", "$50\\%$", "$63\\%$", "$Steady too long$"],
          correct: 0,
          solution: S({
            c: "Charging: $v_C(t)=V_\\infty(1-e^{-t/\\tau})$. Milestones: $1\\tau\\to63\\%$, $3\\tau\\to95\\%$, $5\\tau\\to99.3\\%$.",
            s: [
              "<b>Step 1 — Count tau.</b> $t/\\tau=1/0.1=10$ time constants.",
              "<b>Step 2 — Evaluate.</b> $1-e^{-10}\\approx99.995\\%$.",
              "<b>Step 3 — Distractor audit.</b> $50\\%$/$63\\%$ are ~$0.7\\tau$/$1\\tau$, far short of 10 tau."
            ],
            a: ">99% of final value.",
            v: "10 time constants is far past the '5-tau settled' rule, so the cap is effectively fully charged."
          }),
          ref: "Handbook p.358" },

        { q: "Voltage divider: $V_{in} = 12$V across $R_1 = 4$Ω + $R_2 = 8$Ω. $V_2$:",
          choices: ["$8$ V", "$4$ V", "$6$ V", "$12$ V"],
          correct: 0,
          solution: S({
            c: "Voltage divider: $V_k=V_{in}\\dfrac{R_k}{R_{total}}$ - voltage splits in proportion to each series resistance.",
            s: [
              "<b>Step 1 — Total.</b> $R_{total}=4+8=12\\ \\Omega$.",
              "<b>Step 2 — Apply.</b> $V_2=12(8/12)=8$ V.",
              "<b>Step 3 — Check.</b> $V_1=12(4/12)=4$ V, and $4+8=12$ ✓ (KVL).",
              "<b>Step 4 — Distractor audit.</b> $4$ V is the drop across $R_1$; $6$ V is an even split; $12$ V is the whole source."
            ],
            a: "$V_2=8$ V",
            v: "The LARGER resistor drops the larger voltage - intuitive and a quick sanity check on any divider."
          }),
          ref: "Handbook p.356" },

        { q: "Two 6Ω resistors in parallel: equivalent:",
          choices: ["$3\\ \\Omega$", "$12\\ \\Omega$", "$6\\ \\Omega$", "$2\\ \\Omega$"],
          correct: 0,
          solution: S({
            c: "Equal resistors in parallel: $R_{eq}=R/n$ (a special case of $1/R_{eq}=\\sum1/R_i$).",
            s: [
              "<b>Step 1 — Apply.</b> $6/2=3\\ \\Omega$.",
              "<b>Step 2 — Distractor audit.</b> $12\\ \\Omega$ adds them (series); $6\\ \\Omega$ ignores the parallel; $2\\ \\Omega$ is wrong."
            ],
            a: "$R_{eq}=3\\ \\Omega$",
            v: "Parallel resistance is always LESS than the smallest resistor - more paths means less total opposition."
          }),
          ref: "Handbook p.356" },

        { q: "Energy stored in $C = 100\\ \\mu$F at $V = 50$ V:",
          choices: ["$0.125$ J", "$0.5$ J", "$0.25$ J", "$5$ J"],
          correct: 0,
          solution: S({
            c: "Capacitor energy: $W=\\tfrac12CV^2$ (analogous to $\\tfrac12mv^2$).",
            s: [
              "<b>Step 1 — Convert.</b> $C=10^{-4}$ F; $V^2=2500$.",
              "<b>Step 2 — Apply.</b> $W=\\tfrac12(10^{-4})(2500)=0.125$ J.",
              "<b>Step 3 — Distractor audit.</b> $0.25$ J forgets the $\\tfrac12$; $0.5$ J and $5$ J are off."
            ],
            a: "$W=0.125$ J",
            v: "The $V^2$ dependence means doubling voltage QUADRUPLES stored energy - why HV capacitor banks are dangerous."
          }),
          ref: "Handbook p.358" },

        { q: "Energy stored in $L = 10$ mH at $I = 2$ A:",
          choices: ["$0.02$ J", "$0.04$ J", "$0.01$ J", "$0.1$ J"],
          correct: 0,
          solution: S({
            c: "Inductor energy: $W=\\tfrac12LI^2$ - the dual of the capacitor formula.",
            s: [
              "<b>Step 1 — Convert.</b> $L=0.01$ H; $I^2=4$.",
              "<b>Step 2 — Apply.</b> $W=\\tfrac12(0.01)(4)=0.02$ J.",
              "<b>Step 3 — Distractor audit.</b> $0.04$ J forgets the $\\tfrac12$; $0.01$ J and $0.1$ J are off."
            ],
            a: "$W=0.02$ J",
            v: "Interrupting this current abruptly releases the energy as a voltage spike ($v=L\\,di/dt$) - which is why flyback diodes protect switches driving coils."
          }),
          ref: "Handbook p.358" },

        { q: "Current through a $10\\ \\Omega$ resistor dissipating $100$ W:",
          choices: ["$\\sqrt{10}$ A $\\approx 3.16$ A", "$10$ A", "$1$ A", "$100$ A"],
          correct: 0,
          solution: S({
            c: "Power-current relation: $P=I^2R$; solve $I=\\sqrt{P/R}$.",
            s: [
              "<b>Step 1 — Rearrange.</b> $I^2=P/R=100/10=10$.",
              "<b>Step 2 — Root.</b> $I=\\sqrt{10}\\approx3.16$ A.",
              "<b>Step 3 — Distractor audit.</b> $10$ A would be $P=1000$ W; $1$ A gives 10 W; $100$ A is absurd."
            ],
            a: "$I\\approx3.16$ A",
            v: "Cross-check: $V=IR=31.6$ V, $P=V^2/R=31.6^2/10\\approx100$ W ✓."
          }),
          ref: "Handbook p.356" },

        { q: "Average value of a half-wave rectified sinusoid with peak $V_m$:",
          choices: ["$V_m/\\pi$", "$2V_m/\\pi$", "$V_m/2$", "$V_m/\\sqrt{2}$"],
          correct: 0,
          solution: S({
            c: "A half-wave rectifier passes only the positive half; the DC (average) value is area-of-one-hump over a FULL period: $V_{DC}=V_m/\\pi$.",
            s: [
              "<b>Step 1 — Integrate.</b> $\\dfrac1T\\int_0^{T/2}V_m\\sin(\\omega t)\\,dt$ (other half is 0).",
              "<b>Step 2 — Result.</b> $V_m/\\pi\\approx0.318V_m$.",
              "<b>Step 3 — Distractor audit.</b> $2V_m/\\pi$ is FULL-wave average; $V_m/2$ is half-wave RMS; $V_m/\\sqrt2$ is full-sine RMS."
            ],
            a: "$V_{DC}=V_m/\\pi$",
            v: "Full-wave rectification doubles the DC value to $2V_m/\\pi$ since it captures BOTH humps ✓."
          }),
          ref: "Handbook p.383" },

        { q: "Apparent power for $V_{rms}=240$V, $I_{rms}=5$A, $pf=0.8$:",
          choices: ["$1200$ VA", "$960$ W", "$720$ VAR", "$1500$ VA"],
          correct: 0,
          solution: S({
            c: "Apparent power $|S|=V_{rms}I_{rms}$ - independent of power factor (P and Q depend on pf, but |S| does not).",
            s: [
              "<b>Step 1 — Apply.</b> $|S|=240\\times5=1200$ VA.",
              "<b>Step 2 — Distractor audit.</b> $960$ W is REAL power ($|S|\\cos\\theta$); $720$ VAR is REACTIVE ($|S|\\sin\\theta$); $1500$ VA is wrong."
            ],
            a: "$|S|=1200$ VA",
            v: "Units distinguish them: VA (apparent), W (real), VAR (reactive). Equipment is rated in VA/kVA because |S| sets the CURRENT regardless of pf."
          }),
          ref: "Handbook p.362" },
      ],
    },
    // ====================== Ch 7: Linear Systems ======================
    {
      id: 7, name_en: "Linear Systems", name_vn: "Hệ tuyến tính", fe_count: [5, 8],
      questions: [
        { q: "Laplace transform of $\\sin(\\omega t)$:",
          choices: ["$\\omega/(s^2+\\omega^2)$", "$s/(s^2+\\omega^2)$", "$1/(s^2+\\omega^2)$", "$\\omega/s$"],
          correct: 0,
          solution: S({
            c: "Memorize the pair: $\\mathcal L\\{\\sin\\omega t\\}=\\dfrac{\\omega}{s^2+\\omega^2}$ (numerator $\\omega$); cosine has $s$ on top.",
            s: [
              "<b>Step 1 — Match.</b> $\\omega/(s^2+\\omega^2)$.",
              "<b>Step 2 — Distractor audit.</b> $s/(s^2+\\omega^2)$ is COSINE; $1/(s^2+\\omega^2)$ drops the $\\omega$; $\\omega/s$ is wrong."
            ],
            a: "$\\dfrac{\\omega}{s^2+\\omega^2}$",
            v: "Cosine -> s on top, sine -> omega on top - the single distinguishing detail. The $+\\omega^2$ keeps poles imaginary ($\\pm j\\omega$), giving oscillation."
          }),
          ref: "Handbook p.56" },

        { q: "Series RLC with $L=10$ mH, $C=10\\ \\mu$F. Resonant freq $\\omega_0$:",
          choices: ["$3162$ rad/s", "$1000$ rad/s", "$5000$ rad/s", "$500$ rad/s"],
          correct: 0,
          solution: S({
            c: "Resonance is where $X_L=X_C$ cancel: $\\omega_0=1/\\sqrt{LC}$.",
            s: [
              "<b>Step 1 — Product.</b> $LC=(0.01)(10^{-5})=10^{-7}$; $\\sqrt{LC}=3.162\\times10^{-4}$.",
              "<b>Step 2 — Reciprocal.</b> $\\omega_0=1/3.162\\times10^{-4}\\approx3162$ rad/s.",
              "<b>Step 3 — Distractor audit.</b> $1000$, $5000$, $500$ rad/s come from LC or root slips."
            ],
            a: "$\\omega_0\\approx3162$ rad/s",
            v: "In Hz: $f_0=\\omega_0/2\\pi\\approx503$ Hz. At $\\omega_0$ the impedance is purely resistive ($Z=R$)."
          }),
          ref: "Handbook p.361" },

        { q: "Quality factor Q for series RLC ($R=10$, $L=10$ mH, $\\omega_0=3162$ rad/s):",
          choices: ["$3.16$", "$10$", "$1$", "$31.6$"],
          correct: 0,
          solution: S({
            c: "Series-RLC quality factor: $Q=\\omega_0 L/R$. High Q -> sharp, narrow resonance.",
            s: [
              "<b>Step 1 — Numerator.</b> $\\omega_0 L=3162(0.01)=31.62$.",
              "<b>Step 2 — Divide by R.</b> $31.62/10=3.16$.",
              "<b>Step 3 — Distractor audit.</b> $10$ ignores $\\omega_0 L$; $1$ and $31.6$ mis-divide."
            ],
            a: "$Q\\approx3.16$",
            v: "Q scale: an RLC filter is ~10, a crystal exceeds 10,000 - higher Q means a more selective (narrower-band) resonance."
          }),
          ref: "Handbook p.361" },

        { q: "Bandwidth of RLC with $\\omega_0=3162$, $Q=3.16$:",
          choices: ["$1000$ rad/s", "$3162$ rad/s", "$316$ rad/s", "$10$ rad/s"],
          correct: 0,
          solution: S({
            c: "The -3 dB bandwidth relates to Q by $BW=\\omega_0/Q$ - high Q gives narrow BW.",
            s: [
              "<b>Step 1 — Apply.</b> $BW=3162/3.16=1000$ rad/s.",
              "<b>Step 2 — Distractor audit.</b> $3162$ is $\\omega_0$ itself; $316$ and $10$ misuse Q."
            ],
            a: "$BW=1000$ rad/s",
            v: "The half-power cutoffs sit at $\\omega_0\\pm BW/2$ (~2662 and 3662 rad/s). Doubling Q would halve the bandwidth - the selectivity trade."
          }),
          ref: "Handbook p.361" },

        { q: "Inverse Laplace of $1/(s+2)$:",
          choices: ["$e^{-2t}$", "$e^{2t}$", "$\\sin 2t$", "$2t$"],
          correct: 0,
          solution: S({
            c: "Pair: $\\mathcal L\\{e^{at}\\}=\\dfrac{1}{s-a}$. So $1/(s+2)=1/(s-(-2))\\to e^{-2t}$.",
            s: [
              "<b>Step 1 — Match.</b> $a=-2$.",
              "<b>Step 2 — Invert.</b> $e^{-2t}$.",
              "<b>Step 3 — Distractor audit.</b> $e^{2t}$ has wrong sign (would grow); $\\sin2t$ needs $s^2+4$; $2t$ is $2/s^2$."
            ],
            a: "$f(t)=e^{-2t}$",
            v: "Pole at $s=-2$ (left-half plane) -> a decaying, stable exponential. The pole's sign is everything."
          }),
          ref: "Handbook p.56" },

        { q: "Solve $y'+2y=6$, $y(0)=0$ via Laplace. $Y(s)$:",
          choices: ["$6/[s(s+2)]$", "$6/(s+2)$", "$6/s^2$", "$6s/(s^2+2)$"],
          correct: 0,
          solution: S({
            c: "Laplace turns the ODE into algebra using $\\mathcal L\\{y'\\}=sY-y(0)$ and $\\mathcal L\\{6\\}=6/s$.",
            s: [
              "<b>Step 1 — Transform.</b> $sY-0+2Y=6/s$.",
              "<b>Step 2 — Factor.</b> $Y(s+2)=6/s$.",
              "<b>Step 3 — Solve.</b> $Y(s)=\\dfrac{6}{s(s+2)}$.",
              "<b>Step 4 — Distractor audit.</b> $6/(s+2)$ forgets the $1/s$ forcing; $6/s^2$ and $6s/(s^2+2)$ mishandle the transform."
            ],
            a: "$Y(s)=\\dfrac{6}{s(s+2)}$",
            v: "Partial fractions give $3/s-3/(s+2)$, so $y(t)=3(1-e^{-2t})$ - rising to the steady state $6/2=3$ ✓."
          }),
          ref: "Handbook p.56" },

        { q: "Transfer function $H(s) = 10/(s+5)$. DC gain:",
          choices: ["$2$", "$10$", "$5$", "$0.5$"],
          correct: 0,
          solution: S({
            c: "DC gain = $H(0)$ (the steady-state response to a constant input).",
            s: [
              "<b>Step 1 — Set s=0.</b> $H(0)=10/(0+5)=2$.",
              "<b>Step 2 — Distractor audit.</b> $10$ is the numerator; $5$ the pole; $0.5$ inverts."
            ],
            a: "DC gain = 2",
            v: "A constant input is scaled by 2 at steady state. Time constant $\\tau=1/5=0.2$ s; after $5\\tau=1$ s the output is ~99% of $2\\times$input."
          }),
          ref: "Handbook p.365" },

        { q: "At resonance, series RLC impedance equals:",
          choices: ["$R$", "$\\omega L$", "$0$", "$\\infty$"],
          correct: 0,
          solution: S({
            c: "At $\\omega_0$, $X_L=X_C$ so the reactances cancel: $Z=R+j(X_L-X_C)=R$ - purely resistive (minimum impedance).",
            s: [
              "<b>Step 1 — Match.</b> $Z=R$.",
              "<b>Step 2 — Distractor audit.</b> $\\omega L$ is the inductive reactance (cancelled at $\\omega_0$); $0$ is series resonance taken too far; $\\infty$ is PARALLEL resonance."
            ],
            a: "$Z=R$",
            v: "Minimum impedance at resonance -> MAXIMUM current, in phase with voltage (pf=1). Parallel resonance is the dual (max Z)."
          }),
          ref: "Handbook p.361" },
      ],
    },
    // ====================== Ch 8: Signal Processing ======================
    {
      id: 8, name_en: "Signal Processing", name_vn: "Xử lý Tín hiệu", fe_count: [5, 8],
      questions: [
        { q: "Nyquist rate for a 4 kHz signal:",
          choices: ["$> 8$ kHz", "$2$ kHz", "$4$ kHz", "$16$ kHz"],
          correct: 0,
          solution: S({
            c: "Nyquist-Shannon: to reconstruct a band-limited signal of max frequency $f_{max}$, sample at $f_s>2f_{max}$.",
            s: [
              "<b>Step 1 — Apply.</b> $f_s>2(4)=8$ kHz.",
              "<b>Step 2 — Distractor audit.</b> $2$/$4$ kHz are too slow (aliasing); $16$ kHz works but isn't the minimum."
            ],
            a: "$f_s>8$ kHz",
            v: "Below $2f_{max}$, high frequencies fold back as false low ones - irreversibly. CD audio samples at 44.1 kHz for a ~22 kHz limit."
          }),
          ref: "Handbook p.375" },

        { q: "70 Hz signal sampled at 100 Hz. Apparent (aliased) frequency:",
          choices: ["$30$ Hz", "$70$ Hz", "$170$ Hz", "$50$ Hz"],
          correct: 0,
          solution: S({
            c: "Above Nyquist ($f_s/2$), a signal aliases (folds): $f_{alias}=|f-kf_s|$ for the nearest integer k.",
            s: [
              "<b>Step 1 — Nyquist.</b> $f_s/2=50$ Hz; 70>50 -> aliases.",
              "<b>Step 2 — Fold.</b> $|70-100|=30$ Hz.",
              "<b>Step 3 — Distractor audit.</b> $70$ Hz ignores aliasing; $170$ Hz adds; $50$ Hz is the Nyquist limit."
            ],
            a: "Apparent $f=30$ Hz",
            v: "Same effect as a strobe or the 'wagon-wheel' illusion in film - under-sampling makes a fast signal masquerade as a slow one."
          }),
          ref: "Handbook p.375" },

        { q: "RC LPF cutoff for $R=1$ k$\\Omega$, $C=0.1\\ \\mu$F:",
          choices: ["$1592$ Hz", "$10$ kHz", "$159$ Hz", "$100$ Hz"],
          correct: 0,
          solution: S({
            c: "First-order RC low-pass cutoff: $f_c=\\dfrac{1}{2\\pi RC}$ - the -3 dB point.",
            s: [
              "<b>Step 1 — RC.</b> $10^3\\times10^{-7}=10^{-4}$ s.",
              "<b>Step 2 — Cutoff.</b> $f_c=1/(2\\pi\\times10^{-4})\\approx1592$ Hz.",
              "<b>Step 3 — Distractor audit.</b> $159$ Hz drops the $1/2\\pi$ vs $\\omega_c$ confusion; $10$ kHz uses $\\omega_c$ not $f_c$; $100$ Hz is off."
            ],
            a: "$f_c\\approx1592$ Hz",
            v: "Above $f_c$ the gain falls at -20 dB/decade. Note $\\omega_c=1/RC=10^4$ rad/s; divide by $2\\pi$ for Hz."
          }),
          ref: "Handbook p.375" },

        { q: "Magnitude (dB) at cutoff of a 1st-order LPF:",
          choices: ["$-3$ dB", "$0$ dB", "$-6$ dB", "$-20$ dB"],
          correct: 0,
          solution: S({
            c: "The cutoff (corner) frequency is DEFINED as where magnitude drops by $\\sqrt2$: $20\\log(1/\\sqrt2)=-3.01$ dB.",
            s: [
              "<b>Step 1 — Magnitude.</b> $|H(j\\omega_c)|=1/\\sqrt2\\approx0.707$.",
              "<b>Step 2 — dB.</b> $20\\log(0.707)\\approx-3$ dB.",
              "<b>Step 3 — Distractor audit.</b> $0$ dB is the passband; $-6$ dB is half-amplitude; $-20$ dB is a decade past cutoff."
            ],
            a: "$-3$ dB",
            v: "It's the HALF-POWER point - power $\\propto V^2$, so $0.707^2=0.5$ means half the input power. That's why the cutoff is the -3 dB frequency."
          }),
          ref: "Handbook p.375" },

        { q: "Z-transform of $\\delta[n]$:",
          choices: ["$1$", "$1/(1-z^{-1})$", "$z$", "$0$"],
          correct: 0,
          solution: S({
            c: "Z-transform $X(z)=\\sum x[n]z^{-n}$. The unit impulse is 1 only at $n=0$, so the sum collapses to a constant 1.",
            s: [
              "<b>Step 1 — Evaluate.</b> $\\sum\\delta[n]z^{-n}=\\delta[0]z^0=1$.",
              "<b>Step 2 — Distractor audit.</b> $1/(1-z^{-1})$ is the unit STEP; $z$ is a time-advance; 0 is wrong."
            ],
            a: "$X(z)=1$",
            v: "Flat over all frequencies - the discrete mirror of $\\mathcal L\\{\\delta(t)\\}=1$. An impulse contains every frequency equally, which is why it probes a system fully."
          }),
          ref: "Handbook p.376" },

        { q: "20 log(0.707) =",
          choices: ["$-3$ dB", "$3$ dB", "$-6$ dB", "$0$ dB"],
          correct: 0,
          solution: S({
            c: "Decibels for voltage/current: $\\text{dB}=20\\log_{10}(\\text{ratio})$ (power uses $10\\log$).",
            s: [
              "<b>Step 1 — Recognize.</b> $0.707=1/\\sqrt2$.",
              "<b>Step 2 — Compute.</b> $20\\log(1/\\sqrt2)=-10\\log2=-3.01$ dB.",
              "<b>Step 3 — Distractor audit.</b> $+3$ dB has wrong sign; $-6$ dB is half-amplitude; $0$ dB is unity."
            ],
            a: "$\\approx-3$ dB",
            v: "Memorize: $\\times\\sqrt2\\to+3$ dB, $\\times2\\to+6$ dB, $\\times10\\to+20$ dB - the dB shortcuts used constantly in filters and gain."
          }),
          ref: "Handbook p.375" },

        { q: "Roll-off rate of 1st order filter beyond cutoff:",
          choices: ["$-20$ dB/decade", "$-40$ dB/decade", "$-10$ dB/decade", "$-6$ dB/decade"],
          correct: 0,
          solution: S({
            c: "An nth-order filter rolls off at $-20n$ dB/decade ($-6n$ dB/octave) in the stop-band.",
            s: [
              "<b>Step 1 — Apply.</b> 1st order -> $-20$ dB/decade.",
              "<b>Step 2 — Distractor audit.</b> $-40$ dB/dec is 2nd order; $-10$ dB/dec doesn't occur; $-6$ dB/dec confuses octave with decade."
            ],
            a: "$-20$ dB/decade",
            v: "Equivalent to $-6$ dB/octave (each doubling of frequency halves the amplitude). Steeper rolloff needs higher order = more poles."
          }),
          ref: "Handbook p.375" },

        { q: "A signal contains components from 0 to 10 kHz. Min sampling rate to avoid aliasing:",
          choices: ["$> 20$ kHz", "$10$ kHz", "$5$ kHz", "$40$ kHz"],
          correct: 0,
          solution: S({
            c: "Nyquist: $f_s>2f_{max}$.",
            s: [
              "<b>Step 1 — Apply.</b> $f_s>2(10)=20$ kHz.",
              "<b>Step 2 — Distractor audit.</b> $10$/$5$ kHz are too slow; $40$ kHz works but exceeds the minimum."
            ],
            a: "$f_s>20$ kHz",
            v: "In practice use $f_s\\ge2.2f_{max}$ to leave a guard band for the anti-alias filter's finite rolloff ✓ - exactly why CD's 44.1 kHz exceeds 40 kHz."
          }),
          ref: "Handbook p.375" },
      ],
    },
    // ====================== Ch 9: Electronics ======================
    {
      id: 9, name_en: "Electronics", name_vn: "Điện tử", fe_count: [7, 11],
      questions: [
        { q: "Inverting op-amp: $R_{in}=10$ k$\\Omega$, $R_f=100$ k$\\Omega$, $v_{in}=0.2$ V. $v_{out}$:",
          choices: ["$-2$ V", "$+2$ V", "$-0.2$ V", "$-20$ V"],
          correct: 0,
          solution: S({
            c: "Inverting amplifier gain: $v_{out}=-\\dfrac{R_f}{R_{in}}v_{in}$ (negative = inverted).",
            s: [
              "<b>Step 1 — Gain.</b> $-100/10=-10$.",
              "<b>Step 2 — Apply.</b> $v_{out}=-10(0.2)=-2$ V.",
              "<b>Step 3 — Distractor audit.</b> $+2$ V misses the sign; $-0.2$ V forgets the gain; $-20$ V uses gain $-100$."
            ],
            a: "$v_{out}=-2$ V",
            v: "Derived from the two golden rules: virtual ground ($v_-=0$) plus no input current, then KCL. Gain depends only on the resistor RATIO."
          }),
          ref: "Handbook p.380" },

        { q: "Non-inverting op-amp: $R_{in}=10$ k$\\Omega$, $R_f=100$ k$\\Omega$, $v_{in}=0.2$ V. $v_{out}$:",
          choices: ["$2.2$ V", "$2.0$ V", "$-2.0$ V", "$-2.2$ V"],
          correct: 0,
          solution: S({
            c: "Non-inverting amplifier gain: $v_{out}=\\left(1+\\dfrac{R_f}{R_{in}}\\right)v_{in}$ - always at least 1, no inversion.",
            s: [
              "<b>Step 1 — Gain.</b> $1+100/10=11$.",
              "<b>Step 2 — Apply.</b> $v_{out}=11(0.2)=2.2$ V.",
              "<b>Step 3 — Distractor audit.</b> $2.0$ V uses the INVERTING gain magnitude (10); negative options ignore the non-inverting sign."
            ],
            a: "$v_{out}=2.2$ V",
            v: "Same resistors as the inverting case, but the $1+R_f/R_{in}$ form gives 11 instead of -10 - the '+1' is the signature of the non-inverting topology."
          }),
          ref: "Handbook p.380" },

        { q: "BJT with $\\beta=100$, $I_C=5$ mA. Base current:",
          choices: ["$50\\ \\mu$A", "$5$ mA", "$0.5$ mA", "$5\\ \\mu$A"],
          correct: 0,
          solution: S({
            c: "Active-region relation: $I_C=\\beta I_B$, so $I_B=I_C/\\beta$.",
            s: [
              "<b>Step 1 — Divide.</b> $5\\text{ mA}/100=0.05$ mA.",
              "<b>Step 2 — Convert.</b> $=50\\ \\mu$A.",
              "<b>Step 3 — Distractor audit.</b> $5$ mA echoes $I_C$; $0.5$ mA uses $\\beta=10$; $5\\ \\mu$A uses $\\beta=1000$."
            ],
            a: "$I_B=50\\ \\mu$A",
            v: "Closure: $I_E=I_B+I_C=5.05$ mA ✓ - the small base current controls a 100x larger collector current."
          }),
          ref: "Handbook p.384" },

        { q: "BJT with $\\beta=100$. $\\alpha$ equals:",
          choices: ["$0.990$", "$0.500$", "$1.000$", "$100$"],
          correct: 0,
          solution: S({
            c: "BJT parameter conversion: $\\alpha=\\dfrac{\\beta}{\\beta+1}$ (and $\\beta=\\dfrac{\\alpha}{1-\\alpha}$).",
            s: [
              "<b>Step 1 — Apply.</b> $100/101=0.9901$.",
              "<b>Step 2 — Distractor audit.</b> $0.500$ and $1.000$ are wrong; $100$ is $\\beta$ itself."
            ],
            a: "$\\alpha\\approx0.990$",
            v: "$\\alpha=I_C/I_E$ is just under 1 - about 99% of emitter current reaches the collector, the other 1% leaving through the base ✓."
          }),
          ref: "Handbook p.384" },

        { q: "Half-wave rectifier with peak 10V across load. $V_{DC}$:",
          choices: ["$3.18$ V", "$6.37$ V", "$10$ V", "$5$ V"],
          correct: 0,
          solution: S({
            c: "Half-wave rectifier average (DC) value: $V_{DC}=V_m/\\pi$ - only one half-cycle conducts.",
            s: [
              "<b>Step 1 — Apply.</b> $10/\\pi\\approx3.18$ V.",
              "<b>Step 2 — Distractor audit.</b> $6.37$ V is FULL-wave ($2V_m/\\pi$); $10$ V is the peak; $5$ V is wrong."
            ],
            a: "$V_{DC}\\approx3.18$ V",
            v: "Full-wave doubles it to $6.37$ V by capturing both half-cycles ✓. Adding a smoothing capacitor pushes the DC even closer to the peak."
          }),
          ref: "Handbook p.383" },

        { q: "Forward voltage drop of an ideal silicon diode in conduction:",
          choices: ["$0.7$ V", "$0.3$ V", "$1.0$ V", "$0$ V"],
          correct: 0,
          solution: S({
            c: "The constant-voltage-drop model for a forward-biased silicon diode: $V_F\\approx0.7$ V.",
            s: [
              "<b>Step 1 — Match.</b> 0.7 V (silicon).",
              "<b>Step 2 — Distractor audit.</b> 0.3 V is GERMANIUM (or Schottky); 1.0 V and 0 V don't fit silicon. (LEDs are 1.5-3 V.)"
            ],
            a: "$V_F=0.7$ V (Si).",
            v: "The 0.7 V model is fine for circuit analysis; the exact Shockley equation $I_D=I_s(e^{V_D/nV_T}-1)$ is the precise form. Don't confuse $V_F$ (0.7 V) with thermal voltage $V_T$ (26 mV)."
          }),
          ref: "Handbook p.383" },

        { q: "Two op-amp golden rules (ideal, in negative feedback):",
          choices: ["$v_+ = v_-$ and $i_+ = i_- = 0$", "Input bias current is finite", "Open-loop gain is finite", "Output impedance is infinite"],
          correct: 0,
          solution: S({
            c: "Ideal op-amp with negative feedback obeys two golden rules: $v_+=v_-$ (virtual short, from infinite gain) and $i_+=i_-=0$ (no input current, from infinite input impedance).",
            s: [
              "<b>Step 1 — Match.</b> $v_+=v_-$ and $i_+=i_-=0$.",
              "<b>Step 2 — Distractor audit.</b> Finite bias current, finite open-loop gain, and infinite output impedance all describe NON-ideal op-amps."
            ],
            a: "$v_+=v_-$ and $i_+=i_-=0$",
            v: "These two rules plus KCL/KVL solve any ideal op-amp circuit - the virtual short lets you set $v_-$, and zero input current lets you do KCL at the node freely."
          }),
          ref: "Handbook p.380" },

        { q: "Differential op-amp with all $R = R_f$: $v_{out}=$",
          choices: ["$v_2 - v_1$", "$v_1 + v_2$", "$v_1 - v_2$", "$-v_1$"],
          correct: 0,
          solution: S({
            c: "Difference amplifier: $v_{out}=\\dfrac{R_f}{R_{in}}(v_2-v_1)$ when the resistor pairs match. With $R_f=R_{in}$ the gain is 1.",
            s: [
              "<b>Step 1 — Gain.</b> $R_f/R_{in}=1$.",
              "<b>Step 2 — Output.</b> $v_{out}=v_2-v_1$.",
              "<b>Step 3 — Distractor audit.</b> $v_1+v_2$ is a summer; $v_1-v_2$ flips the sign; $-v_1$ ignores $v_2$."
            ],
            a: "$v_{out}=v_2-v_1$",
            v: "It amplifies the DIFFERENCE while rejecting common-mode noise - the heart of instrumentation amplifiers (high CMRR)."
          }),
          ref: "Handbook p.380" },

        { q: "Full-wave bridge rectifier with peak 10V. $V_{DC}$:",
          choices: ["$6.37$ V", "$3.18$ V", "$10$ V", "$5$ V"],
          correct: 0,
          solution: S({
            c: "Full-wave rectifier average: $V_{DC}=2V_m/\\pi$ - both half-cycles contribute, twice the half-wave value.",
            s: [
              "<b>Step 1 — Apply.</b> $2(10)/\\pi\\approx6.37$ V.",
              "<b>Step 2 — Distractor audit.</b> $3.18$ V is HALF-wave ($V_m/\\pi$); $10$ V is the peak; $5$ V is wrong."
            ],
            a: "$V_{DC}\\approx6.37$ V",
            v: "Twice the half-wave DC because no half-cycle is wasted ✓. A smoothing capacitor pushes $V_{DC}$ further toward the peak and cuts ripple."
          }),
          ref: "Handbook p.383" },

        { q: "MOSFET in saturation: $I_D \\propto$",
          choices: ["$(V_{GS}-V_{th})^2$", "$V_{DS}$", "$V_{GS}$", "$V_{DS}^2$"],
          correct: 0,
          solution: S({
            c: "Long-channel MOSFET in saturation: $I_D=\\tfrac{k_n}{2}(V_{GS}-V_{th})^2$ - SQUARE-LAW in the overdrive voltage, nearly independent of $V_{DS}$.",
            s: [
              "<b>Step 1 — Match.</b> $(V_{GS}-V_{th})^2$.",
              "<b>Step 2 — Distractor audit.</b> $V_{DS}$/$V_{DS}^2$ describe the TRIODE region; $V_{GS}$ (linear) omits the threshold and the square."
            ],
            a: "$I_D\\propto(V_{GS}-V_{th})^2$",
            v: "Contrast the BJT: $I_C\\propto e^{V_{BE}/V_T}$ (exponential). The MOSFET's square-law vs the BJT's exponential is a key device distinction."
          }),
          ref: "Handbook p.386" },

        { q: "Op-amp summing amplifier with $R_f=10$k, $R_1=R_2=5$k, $v_1=1$V, $v_2=2$V:",
          choices: ["$-6$ V", "$-3$ V", "$6$ V", "$3$ V"],
          correct: 0,
          solution: S({
            c: "Inverting summer: $v_{out}=-R_f\\left(\\dfrac{v_1}{R_1}+\\dfrac{v_2}{R_2}\\right)$ - each input weighted by $R_f/R_k$.",
            s: [
              "<b>Step 1 — Per-input gains.</b> $-10/5=-2$ each.",
              "<b>Step 2 — Combine.</b> $-2(1)-2(2)=-6$ V.",
              "<b>Step 3 — Distractor audit.</b> $-3$ V uses gain -1; positive options miss the inverting sign."
            ],
            a: "$v_{out}=-6$ V",
            v: "If $R_f=R_1=R_2$, it's a direct (negated) sum $-(v_1+v_2)$; unequal resistors weight the inputs - the basis of analog mixing/weighted averages."
          }),
          ref: "Handbook p.380" },

        { q: "Zener diode purpose:",
          choices: ["Voltage regulation in reverse breakdown", "Forward rectification only", "Amplification", "Switching only"],
          correct: 0,
          solution: S({
            c: "A Zener diode is built to operate in REVERSE BREAKDOWN, where its voltage stays nearly constant ($V_Z$) over a wide current range - ideal for voltage regulation/reference.",
            s: [
              "<b>Step 1 — Match.</b> Voltage regulation in reverse breakdown.",
              "<b>Step 2 — Distractor audit.</b> Forward rectification is an ordinary diode; Zeners don't amplify; switching is a different role."
            ],
            a: "Voltage regulation (reverse breakdown).",
            v: "A series resistor sizes the current so the Zener stays in its safe range across input variation - giving a stable output. Normal diodes AVOID breakdown; Zeners exploit it."
          }),
          ref: "Handbook p.383" },
      ],
    },
    // ====================== Ch 10: Power Systems ======================
    {
      id: 10, name_en: "Power Systems", name_vn: "Hệ thống Điện", fe_count: [8, 12],
      questions: [
        { q: "Wye-connected load with $V_{LN}=120$ V. Line-to-line voltage:",
          choices: ["$208$ V", "$120$ V", "$240$ V", "$69.3$ V"],
          correct: 0,
          solution: S({
            c: "Wye relations: $V_{LL}=\\sqrt3\\,V_{LN}$ (line current = phase current). The $\\sqrt3$ comes from subtracting two phase voltages 120 degrees apart.",
            s: [
              "<b>Step 1 — Apply.</b> $V_{LL}=\\sqrt3\\times120\\approx208$ V.",
              "<b>Step 2 — Distractor audit.</b> $120$ V is line-to-neutral; $69.3$ V divides by $\\sqrt3$; $240$ V is split-phase, not wye."
            ],
            a: "$V_{LL}\\approx208$ V",
            v: "The standard US commercial 120/208 V system (Europe: 230/400 V) - the $\\sqrt3$ between phase and line voltage is wye's signature."
          }),
          ref: "Handbook p.363" },

        { q: "Delta-connected load. Relationship between line and phase current:",
          choices: ["$I_L = \\sqrt{3} I_\\phi$", "$I_L = I_\\phi$", "$I_L = I_\\phi/\\sqrt{3}$", "$I_L = 3 I_\\phi$"],
          correct: 0,
          solution: S({
            c: "Delta relations: $V_{LL}=V_\\phi$ but $I_L=\\sqrt3\\,I_\\phi$ - the dual of wye (where VOLTAGE gets the $\\sqrt3$).",
            s: [
              "<b>Step 1 — Match.</b> $I_L=\\sqrt3\\,I_\\phi$.",
              "<b>Step 2 — Why.</b> Line current is the vector sum of two adjacent phase currents 120 degrees apart.",
              "<b>Step 3 — Distractor audit.</b> $I_L=I_\\phi$ is WYE; $I_\\phi/\\sqrt3$ inverts; $3I_\\phi$ is wrong."
            ],
            a: "$I_L=\\sqrt3\\,I_\\phi$",
            v: "Y vs Delta: line VOLTAGE gets $\\sqrt3$ in wye, line CURRENT gets $\\sqrt3$ in delta - the same total power either way."
          }),
          ref: "Handbook p.363" },

        { q: "Balanced 3-φ load: $V_{LL}=480$, $I_L=20$, $pf=0.85$ lagging. Real power:",
          choices: ["$14.1$ kW", "$10$ kW", "$16.6$ kW", "$8.7$ kW"],
          correct: 0,
          solution: S({
            c: "Three-phase real power in line quantities: $P_{3\\phi}=\\sqrt3\\,V_{LL}I_L\\cos\\theta$.",
            s: [
              "<b>Step 1 — Apparent.</b> $\\sqrt3\\times480\\times20=16{,}628$ VA.",
              "<b>Step 2 — Real.</b> $\\times0.85=14{,}134$ W = 14.1 kW.",
              "<b>Step 3 — Distractor audit.</b> $16.6$ kW forgets pf (that's |S|); $10$/$8.7$ kW are off."
            ],
            a: "$P\\approx14.1$ kW",
            v: "The $\\sqrt3$ formula works for both Y and Delta when stated in LINE quantities ✓. Reactive part: $Q=\\sqrt3 V_{LL}I_L\\sin\\theta\\approx8.7$ kVAR."
          }),
          ref: "Handbook p.363" },

        { q: "Same load as previous. Apparent power |S|:",
          choices: ["$16.6$ kVA", "$14.1$ kVA", "$10$ kVA", "$20$ kVA"],
          correct: 0,
          solution: S({
            c: "Apparent power $|S|=\\sqrt3\\,V_{LL}I_L$ - independent of power factor.",
            s: [
              "<b>Step 1 — Apply.</b> $\\sqrt3\\times480\\times20\\approx16{,}628$ VA = 16.6 kVA.",
              "<b>Step 2 — Distractor audit.</b> $14.1$ kVA is REAL power (includes pf); $10$/$20$ kVA are off."
            ],
            a: "$|S|\\approx16.6$ kVA",
            v: "Power triangle: $Q=\\sqrt{16.6^2-14.1^2}\\approx8.7$ kVAR. |S| sets the current and equipment rating regardless of pf."
          }),
          ref: "Handbook p.363" },

        { q: "Ideal transformer 4800/240 V, 10 kVA. Turns ratio $a$:",
          choices: ["$20$", "$1/20$", "$48$", "$2$"],
          correct: 0,
          solution: S({
            c: "Turns ratio $a=N_1/N_2=V_1/V_2$ (primary over secondary).",
            s: [
              "<b>Step 1 — Apply.</b> $a=4800/240=20$.",
              "<b>Step 2 — Distractor audit.</b> $1/20$ inverts; $48$ and $2$ are arithmetic errors."
            ],
            a: "$a=20$",
            v: "A 20:1 step-down: secondary has 1/20 the turns, 1/20 the voltage, 20x the current. Power is (nearly) conserved."
          }),
          ref: "Handbook p.364" },

        { q: "Above transformer: primary rated current:",
          choices: ["$2.08$ A", "$41.7$ A", "$20$ A", "$0.5$ A"],
          correct: 0,
          solution: S({
            c: "Rated current = $S_{rated}/V_{rated}$ on each side; the SAME apparent power, so current scales inversely with voltage.",
            s: [
              "<b>Step 1 — Apply.</b> $I_1=10{,}000/4800\\approx2.08$ A.",
              "<b>Step 2 — Distractor audit.</b> $41.7$ A is the SECONDARY current ($10{,}000/240$); $20$ A and $0.5$ A are off."
            ],
            a: "$I_1\\approx2.08$ A",
            v: "Ratio check: $I_1/I_2=2.08/41.67=1/20=1/a$ ✓ - the low-voltage side carries proportionally more current."
          }),
          ref: "Handbook p.364" },

        { q: "PF correction: load draws $P=10$ kW at $pf=0.7$. Find Qc to raise to $pf=0.95$:",
          choices: ["$\\approx 6.91$ kVAR", "$10$ kVAR", "$3.29$ kVAR", "$2.5$ kVAR"],
          correct: 0,
          solution: S({
            c: "PF correction: add capacitors supplying $Q_C=P(\\tan\\theta_1-\\tan\\theta_2)$, where $\\theta=\\arccos(pf)$.",
            s: [
              "<b>Step 1 — Angles.</b> $\\theta_1=\\arccos0.7=45.6°$ ($\\tan=1.020$); $\\theta_2=\\arccos0.95=18.2°$ ($\\tan=0.329$).",
              "<b>Step 2 — Apply.</b> $Q_C=10{,}000(1.020-0.329)\\approx6{,}915$ VAR.",
              "<b>Step 3 — Distractor audit.</b> $10$ kVAR overshoots; $3.29$/$2.5$ kVAR misuse the tangent difference."
            ],
            a: "$Q_C\\approx6.91$ kVAR",
            v: "Adding leading VARs cancels part of the load's lagging VARs -> lower |S|, lower line current, less $I^2R$ loss, lower utility penalty ✓."
          }),
          ref: "Handbook p.364" },

        { q: "Reflected impedance from secondary to primary (ideal xfmr, ratio $a$):",
          choices: ["$Z'_2 = a^2 Z_2$", "$Z'_2 = Z_2/a$", "$Z'_2 = a Z_2$", "$Z'_2 = Z_2/a^2$"],
          correct: 0,
          solution: S({
            c: "Reflected impedance: $Z'_2=a^2 Z_2$ - impedance scales by the SQUARE of the turns ratio.",
            s: [
              "<b>Step 1 — Reason.</b> Voltage scales by $a$, current by $1/a$, so $Z=V/I$ scales by $a^2$.",
              "<b>Step 2 — Distractor audit.</b> $Z_2/a$, $aZ_2$, $Z_2/a^2$ use the wrong power of $a$."
            ],
            a: "$Z'_2=a^2 Z_2$",
            v: "This lets you 'move' a secondary impedance to the primary side and combine everything on one side - the basis of transformer impedance matching."
          }),
          ref: "Handbook p.364" },

        { q: "Synchronous speed of a 4-pole motor at 60 Hz:",
          choices: ["$1800$ rpm", "$3600$ rpm", "$900$ rpm", "$1500$ rpm"],
          correct: 0,
          solution: S({
            c: "Synchronous speed: $n_s=\\dfrac{120f}{p}$ (f in Hz, p = poles).",
            s: [
              "<b>Step 1 — Apply.</b> $120\\times60/4=1800$ rpm.",
              "<b>Step 2 — Distractor audit.</b> $3600$ rpm is 2-pole; $1200$ rpm is 6-pole; $1500$ rpm is 4-pole at 50 Hz."
            ],
            a: "$n_s=1800$ rpm",
            v: "At 60 Hz: 2-pole=3600, 4-pole=1800, 6-pole=1200 rpm - fewer poles spin faster. Induction motors run slightly below this (slip)."
          }),
          ref: "Handbook p.365" },

        { q: "Slip $s=0.04$, synchronous 1800 rpm. Rotor speed:",
          choices: ["$1728$ rpm", "$72$ rpm", "$1872$ rpm", "$1800$ rpm"],
          correct: 0,
          solution: S({
            c: "Induction-motor slip: $s=(n_s-n_r)/n_s$, so rotor speed $n_r=n_s(1-s)$.",
            s: [
              "<b>Step 1 — Apply.</b> $n_r=1800(1-0.04)=1800(0.96)=1728$ rpm.",
              "<b>Step 2 — Distractor audit.</b> $72$ rpm is the slip SPEED ($n_s-n_r$); $1872$ rpm exceeds synchronous; $1800$ rpm is zero slip."
            ],
            a: "$n_r=1728$ rpm",
            v: "Typical full-load slip is 2-5%. At no load slip is near 0 (rotor nearly synchronous); slip is what induces rotor current and makes torque."
          }),
          ref: "Handbook p.365" },

        { q: "Wye-connected with $V_{LN}=120$, $Z_\\phi = 10\\angle 30°$. Phase current:",
          choices: ["$12\\angle -30°$ A", "$12\\angle 30°$ A", "$20.8\\angle -30°$ A", "$120\\angle 0°$ A"],
          correct: 0,
          solution: S({
            c: "Phase current $I_\\phi=V_\\phi/Z_\\phi$; for wye, $V_\\phi=V_{LN}$. Phasor division: divide magnitudes, subtract angles.",
            s: [
              "<b>Step 1 — Voltage.</b> $V_\\phi=120\\angle0°$.",
              "<b>Step 2 — Divide.</b> $120/10=12$; $0°-30°=-30°$.",
              "<b>Step 3 — Distractor audit.</b> $12\\angle+30°$ adds the angle; $20.8\\angle-30°$ uses $V_{LL}$; $120\\angle0°$ forgets to divide by Z."
            ],
            a: "$I_\\phi=12\\angle-30°$ A",
            v: "Current LAGS by 30 degrees -> inductive load (positive Z angle), consistent with a lagging power factor ✓."
          }),
          ref: "Handbook p.363" },

        { q: "Voltage regulation (VR) is defined as:",
          choices: ["$\\frac{V_{NL}-V_{FL}}{V_{FL}}\\times 100\\%$", "$V_{FL}/V_{NL}$", "$V_{NL}+V_{FL}$", "$V_{FL}-V_{NL}$"],
          correct: 0,
          solution: S({
            c: "Voltage regulation: $VR=\\dfrac{V_{NL}-V_{FL}}{V_{FL}}\\times100\\%$ - how much terminal voltage sags from no-load to full-load.",
            s: [
              "<b>Step 1 — Match.</b> $(V_{NL}-V_{FL})/V_{FL}\\times100\\%$.",
              "<b>Step 2 — Distractor audit.</b> The ratio $V_{FL}/V_{NL}$, the sum, and the bare difference aren't the VR definition."
            ],
            a: "$VR=\\dfrac{V_{NL}-V_{FL}}{V_{FL}}\\times100\\%$",
            v: "LOWER VR is better (more stable output). Ideal transformer: 0%; real units: a few % from winding R and leakage. Some texts use $V_{NL}$ in the denominator - check the convention."
          }),
          ref: "Handbook p.364" },
      ],
    },
    // ====================== Ch 11: Electromagnetics ======================
    {
      id: 11, name_en: "Electromagnetics", name_vn: "Điện từ trường", fe_count: [4, 6],
      questions: [
        { q: "Parallel-plate capacitor: $A=100$ cm², $d=1$ mm, $\\varepsilon_r=4$. C =",
          choices: ["$354$ pF", "$354$ nF", "$0.354$ pF", "$3.54\\ \\mu$F"],
          correct: 0,
          solution: S({
            c: "Parallel-plate capacitance: $C = \\dfrac{\\varepsilon_0 \\varepsilon_r A}{d}$. $\\varepsilon_0 = 8.854\\times 10^{-12}$ F/m.",
            s: [
              "Convert area: $A = 100$ cm² $= 0.01$ m². Distance: $d = 1$ mm $= 0.001$ m.",
              "Plug in: $C = (8.854\\times 10^{-12})(4)(0.01)/0.001$.",
              "Numerator: $8.854\\times 10^{-12} \\cdot 0.04 = 3.54\\times 10^{-13}$.",
              "Divide by $d=10^{-3}$: $C = 3.54\\times 10^{-10}$ F $= 354$ pF."
            ],
            a: "$C \\approx 354$ pF",
            v: "Higher $\\varepsilon_r$ → more capacitance. Smaller $d$ → more capacitance (but breakdown risk)."
          }),
          ref: "Handbook p.355" },

        { q: "Transmission line $Z_0=50\\ \\Omega$ terminated with $Z_L=75+j25\\ \\Omega$. $|\\Gamma|$:",
          choices: ["$0.277$", "$0.5$", "$0.1$", "$0.707$"],
          correct: 0,
          solution: S({
            c: "Reflection coefficient: $\\Gamma = \\dfrac{Z_L - Z_0}{Z_L + Z_0}$. Magnitude $|\\Gamma|$ between 0 (matched) and 1 (totally reflected).",
            s: [
              "Numerator: $Z_L - Z_0 = (75+j25) - 50 = 25 + j25$. $|num| = \\sqrt{625+625} = \\sqrt{1250} \\approx 35.36$.",
              "Denominator: $Z_L + Z_0 = 125 + j25$. $|den| = \\sqrt{15625+625} = \\sqrt{16250} \\approx 127.48$.",
              "$|\\Gamma| = 35.36/127.48 \\approx 0.277$."
            ],
            a: "$|\\Gamma| \\approx 0.277$",
            v: "Power reflected ratio: $|\\Gamma|^2 \\approx 0.077 = 7.7\\%$. Power delivered: 92.3% of incident."
          }),
          ref: "Handbook p.368" },

        { q: "From above $|\\Gamma|=0.277$. VSWR:",
          choices: ["$1.77$", "$2.0$", "$1.0$", "$5.0$"],
          correct: 0,
          solution: S({
            c: "Voltage Standing Wave Ratio: $\\text{VSWR} = \\dfrac{1+|\\Gamma|}{1-|\\Gamma|}$. Range: 1 (matched) to ∞ (open/short).",
            s: [
              "Numerator: $1 + 0.277 = 1.277$.",
              "Denominator: $1 - 0.277 = 0.723$.",
              "VSWR = $1.277/0.723 \\approx 1.766$."
            ],
            a: "VSWR ≈ 1.77",
            v: "Antennas with VSWR < 2 considered well matched. VSWR = 1.5 is ~96% power transfer."
          }),
          ref: "Handbook p.368" },

        { q: "Long straight wire carries $I=10$ A. B-field at $r=1$ m ($\\mu_0=4\\pi\\times 10^{-7}$):",
          choices: ["$2\\ \\mu$T", "$10\\ \\mu$T", "$2$ T", "$0.2$ mT"],
          correct: 0,
          solution: S({
            c: "Ampère's law for an infinite wire: $B = \\dfrac{\\mu_0 I}{2\\pi r}$.",
            s: [
              "$\\mu_0 I = (4\\pi\\times 10^{-7})(10) = 4\\pi \\times 10^{-6}$.",
              "$2\\pi r = 2\\pi$.",
              "$B = (4\\pi \\times 10^{-6})/(2\\pi) = 2\\times 10^{-6}$ T = 2 µT."
            ],
            a: "$B = 2$ µT",
            v: "Earth's surface B-field is ~50 µT — about 25× stronger than this wire field at 1 m."
          }),
          ref: "Handbook p.355" },

        { q: "Energy in inductor $L=10$ mH at $I=2$ A:",
          choices: ["$0.02$ J", "$0.04$ J", "$0.01$ J", "$0.001$ J"],
          correct: 0,
          solution: S({
            c: "Magnetic energy: $W = \\dfrac{1}{2} L I^2$.",
            s: [
              "$L = 0.01$ H, $I^2 = 4$.",
              "$W = 0.5 \\cdot 0.01 \\cdot 4 = 0.02$ J."
            ],
            a: "$W = 0.02$ J",
            v: "Energy = 20 mJ. This much energy released as spark when current is interrupted suddenly."
          }),
          ref: "Handbook p.355" },

        { q: "Coulomb's law constant $k_e$:",
          choices: ["$8.99\\times 10^9$ N·m²/C²", "$8.85\\times 10^{-12}$ F/m", "$6.626\\times 10^{-34}$ J·s", "$1.6\\times 10^{-19}$ C"],
          correct: 0,
          solution: S({
            c: "Coulomb constant: $k_e = \\dfrac{1}{4\\pi\\varepsilon_0} \\approx 8.99\\times 10^9$ N·m²/C². Used in $F = k_e Q_1 Q_2 / r^2$.",
            s: [
              "Choice A: Coulomb constant ✓.",
              "Choice B: permittivity of free space $\\varepsilon_0$.",
              "Choice C: Planck's constant $h$.",
              "Choice D: elementary charge $e$."
            ],
            a: "$k_e = 8.99\\times 10^9$ N·m²/C²",
            v: "Connection: $1/(4\\pi \\cdot 8.854\\times 10^{-12}) \\approx 8.99\\times 10^9$ ✓"
          }),
          ref: "Handbook p.355" },

        { q: "Maxwell's equation $\\nabla\\times E$ equals:",
          choices: ["$-\\partial B/\\partial t$", "$\\rho/\\varepsilon_0$", "$J$", "$0$"],
          correct: 0,
          solution: S({
            c: "Faraday's law (Maxwell #3): $\\nabla\\times \\vec{E} = -\\dfrac{\\partial \\vec{B}}{\\partial t}$. A time-varying magnetic field induces a circulating electric field.",
            s: [
              "Choice A: Faraday's law ✓.",
              "Choice B: Gauss for E: $\\nabla\\cdot \\vec{E} = \\rho/\\varepsilon_0$.",
              "Choice C: part of Ampère-Maxwell: $\\nabla\\times \\vec{H} = \\vec{J} + \\partial \\vec{D}/\\partial t$.",
              "Choice D: Gauss for B: $\\nabla\\cdot \\vec{B} = 0$ (no magnetic monopoles)."
            ],
            a: "$\\nabla\\times \\vec{E} = -\\partial \\vec{B}/\\partial t$",
            v: "This law is the basis of electromagnetic induction — transformers, generators, RF antennas."
          }),
          ref: "Handbook p.355" },
      ],
    },
    // ====================== Ch 12: Control Systems ======================
    {
      id: 12, name_en: "Control Systems", name_vn: "Hệ thống Điều khiển", fe_count: [6, 9],
      questions: [
        { q: "Unity feedback, $G(s) = 10/(s+2)$. Closed-loop $T(s)$:",
          choices: ["$10/(s+12)$", "$10/(s+2)$", "$(s+2)/10$", "$10s/(s+12)$"],
          correct: 0,
          solution: S({
            c: "Closed-loop transfer function for negative unity feedback: $T(s) = \\dfrac{G(s)}{1 + G(s)}$.",
            s: [
              "Form: $T = \\dfrac{10/(s+2)}{1 + 10/(s+2)}$.",
              "Multiply top and bottom by $(s+2)$: $T = \\dfrac{10}{(s+2) + 10} = \\dfrac{10}{s+12}$."
            ],
            a: "$T(s) = \\dfrac{10}{s+12}$",
            v: "The pole moved from $-2$ (open loop) to $-12$ (closed loop) — faster response."
          }),
          ref: "Handbook p.365" },

        { q: "DC gain of $T(s) = 10/(s+12)$:",
          choices: ["$0.833$", "$10$", "$12$", "$1$"],
          correct: 0,
          solution: S({
            c: "DC gain: $T(0)$.",
            s: [
              "Substitute $s = 0$: $T(0) = 10/12 = 5/6 \\approx 0.833$."
            ],
            a: "DC gain $\\approx 0.833$",
            v: "Time constant: $\\tau = 1/12$ s; steady-state output of step is $0.833 \\cdot$ input."
          }),
          ref: "Handbook p.366" },

        { q: "Poles of $T(s) = 5/(s^2+3s+2)$. System is:",
          choices: ["Stable (poles at $-1, -2$)", "Unstable", "Marginally stable", "Oscillatory"],
          correct: 0,
          solution: S({
            c: "Stability: all poles must lie in the open left half-plane (negative real parts).",
            s: [
              "Factor denominator: $s^2+3s+2 = (s+1)(s+2)$.",
              "Poles: $s = -1, -2$.",
              "Both have negative real parts → in LHP → <b>stable</b>."
            ],
            a: "Stable; poles at $-1, -2$",
            v: "Time response is overdamped (two real distinct poles)."
          }),
          ref: "Handbook p.365" },

        { q: "Steady-state error to step input for Type-0 system with $K_p = 9$:",
          choices: ["$1/10$", "$1/9$", "$0$", "$\\infty$"],
          correct: 0,
          solution: S({
            c: "Final value theorem applied: for Type-0 system with unit step input, $e_{ss} = \\dfrac{1}{1+K_p}$, where $K_p = \\lim_{s\\to 0} G(s)H(s)$ (position constant).",
            s: [
              "Type 0 has $K_p$ finite (so $e_{ss}$ to step is finite, nonzero).",
              "Plug in: $e_{ss} = 1/(1+9) = 1/10 = 0.1$ (10%)."
            ],
            a: "$e_{ss} = 1/10 = 0.1$",
            v: "To eliminate step error, use Type 1+ (integrator in loop) which gives $K_p = \\infty$ and $e_{ss}=0$."
          }),
          ref: "Handbook p.366" },

        { q: "Series combination of $G_1=4$ and $G_2=5$:",
          choices: ["$G_{eq}=20$", "$G_{eq}=9$", "$G_{eq}=0.8$", "$G_{eq}=1.25$"],
          correct: 0,
          solution: S({
            c: "Block diagram reduction: blocks in series multiply ($G_1 G_2$); blocks in parallel add ($G_1 + G_2$).",
            s: [
              "Series: $G_{eq} = G_1 \\cdot G_2 = 4 \\cdot 5 = 20$."
            ],
            a: "$G_{eq} = 20$",
            v: "If in parallel (summing junction): $G_{eq} = 4 + 5 = 9$ (choice B)."
          }),
          ref: "Handbook p.365" },

        { q: "Bode magnitude (dB) at $\\omega=10$ rad/s for $H(s) = 1/s$:",
          choices: ["$-20$ dB", "$20$ dB", "$0$ dB", "$10$ dB"],
          correct: 0,
          solution: S({
            c: "For $H(s)=1/s$, $|H(j\\omega)| = 1/\\omega$. In dB: $20\\log_{10}(1/\\omega) = -20\\log_{10}\\omega$.",
            s: [
              "At $\\omega = 10$: $|H| = 1/10 = 0.1$.",
              "dB: $20\\log_{10}(0.1) = 20(-1) = -20$ dB."
            ],
            a: "$-20$ dB",
            v: "Integrator $1/s$ has straight-line Bode magnitude with slope $-20$ dB/decade, crossing 0 dB at $\\omega = 1$."
          }),
          ref: "Handbook p.366" },

        { q: "Routh array first column: $1, 2, -1, 5$. Number of RHP poles:",
          choices: ["$2$ (two sign changes)", "$1$", "$0$", "$3$"],
          correct: 0,
          solution: S({
            c: "Routh-Hurwitz criterion: number of sign changes in the first column = number of right-half-plane (unstable) poles.",
            s: [
              "Sequence: $1 \\to 2$ (no change), $2 \\to -1$ (sign change #1), $-1 \\to 5$ (sign change #2).",
              "Total: 2 sign changes → 2 RHP poles."
            ],
            a: "2 RHP poles → unstable",
            v: "Any RHP pole → instability. Routh saves us from explicit factoring."
          }),
          ref: "Handbook p.365" },

        { q: "Settling time (2%) of $G(s)=K/(s+a)$ with $a=4$:",
          choices: ["$\\approx 1$ s", "$\\approx 0.25$ s", "$\\approx 4$ s", "$\\approx 2$ s"],
          correct: 0,
          solution: S({
            c: "First-order system: $\\tau = 1/a$. 2% settling time $t_s \\approx 4\\tau = 4/a$.",
            s: [
              "$\\tau = 1/4 = 0.25$ s.",
              "$t_s \\approx 4 \\cdot 0.25 = 1$ s."
            ],
            a: "$t_s \\approx 1$ s",
            v: "Rule of thumb: 5% settling = $3\\tau$, 2% = $4\\tau$, 1% = $5\\tau$."
          }),
          ref: "Handbook p.366" },

        { q: "Phase margin for stability requires PM > $0$. Typical good design:",
          choices: ["$30°$ to $60°$", "$> 180°$", "$< 0°$", "Exactly $0°$"],
          correct: 0,
          solution: S({
            c: "Phase margin (PM) measures how much added phase delay would cause instability. PM > 0 → stable. Good design: 30-60° for good damping.",
            s: [
              "PM = 180° + ∠G(jω_gc) where ω_gc is gain crossover frequency.",
              "PM < 30°: too oscillatory, ringing.",
              "PM = 45-60°: well-damped (target).",
              "PM = 60° corresponds roughly to $\\zeta \\approx 0.6$."
            ],
            a: "30° to 60°",
            v: "Auto-tuning algorithms (Ziegler-Nichols, etc.) typically target PM ≈ 45°."
          }),
          ref: "Handbook p.366" },

        { q: "Damping ratio $\\zeta=0.707$ in 2nd-order system gives:",
          choices: ["Underdamped, about 4% overshoot", "Critically damped, no overshoot", "Overdamped", "Undamped oscillation"],
          correct: 0,
          solution: S({
            c: "2nd-order system damping cases — based on $\\zeta$ (damping ratio): $\\zeta = 0$ undamped (pure oscillation); $0 < \\zeta < 1$ underdamped (overshoots, then decays); $\\zeta = 1$ critically damped (fastest with no overshoot); $\\zeta > 1$ overdamped (slow, no overshoot).",
            s: [
              "$\\zeta = 0.707 = 1/\\sqrt{2}$ is in $(0, 1)$ → <b>underdamped</b>.",
              "Overshoot formula: $M_p = e^{-\\zeta\\pi/\\sqrt{1-\\zeta^2}}$.",
              "Plug $\\zeta = 0.707$: $M_p = e^{-0.707\\pi/0.707} = e^{-\\pi} \\approx 0.043 = 4.3\\%$ overshoot.",
              "$\\zeta = 0.707$ is a common target — fast and well-damped."
            ],
            a: "Underdamped, ~4.3% overshoot",
            v: "Common control-design targets: $\\zeta = 0.5$ (~16% overshoot), $\\zeta = 0.707$ (~4% overshoot), $\\zeta = 1$ (0% overshoot but slow)."
          }),
          ref: "Handbook p.366" },
      ],
    },
    // ====================== Ch 13: Communications ======================
    {
      id: 13, name_en: "Communications", name_vn: "Thông tin Liên lạc", fe_count: [5, 8],
      questions: [
        { q: "AM carrier 1 MHz modulated by 5 kHz audio. Bandwidth:",
          choices: ["$10$ kHz", "$5$ kHz", "$1$ MHz", "$2$ MHz"],
          correct: 0,
          solution: S({
            c: "AM (DSB-LC) bandwidth: $BW = 2 f_m$ where $f_m$ is the highest message frequency. The carrier $f_c$ doesn't affect bandwidth.",
            s: [
              "$BW = 2 \\cdot 5{,}000 = 10{,}000$ Hz $= 10$ kHz."
            ],
            a: "$BW = 10$ kHz",
            v: "Two sidebands at $f_c \\pm f_m$ require total bandwidth $2 f_m$. The carrier is in the middle."
          }),
          ref: "Handbook p.371" },

        { q: "AM upper sideband frequency for above:",
          choices: ["$1.005$ MHz", "$0.995$ MHz", "$1.05$ MHz", "$5$ kHz"],
          correct: 0,
          solution: S({
            c: "AM produces two sidebands: $f_{USB} = f_c + f_m$ (upper), $f_{LSB} = f_c - f_m$ (lower).",
            s: [
              "$f_{USB} = 1{,}000{,}000 + 5{,}000 = 1{,}005{,}000$ Hz $= 1.005$ MHz."
            ],
            a: "$f_{USB} = 1.005$ MHz",
            v: "$f_{LSB} = 0.995$ MHz. Each sideband carries the same info — that's why SSB (single-sideband) is half the bandwidth of AM."
          }),
          ref: "Handbook p.371" },

        { q: "PCM: audio max 4 kHz, Nyquist sampling, 8 bits/sample. Bit rate:",
          choices: ["$64$ kbps", "$32$ kbps", "$8$ kbps", "$128$ kbps"],
          correct: 0,
          solution: S({
            c: "PCM bit rate: $R_b = f_s \\cdot n_{bits}$. Nyquist sampling: $f_s = 2 f_{max}$.",
            s: [
              "$f_s = 2 \\cdot 4 = 8$ kHz.",
              "$R_b = 8{,}000 \\cdot 8 = 64{,}000$ bps $= 64$ kbps."
            ],
            a: "$R_b = 64$ kbps",
            v: "This is exactly the G.711 telephone codec rate — μ-law/A-law 8 kHz × 8 bits."
          }),
          ref: "Handbook p.371" },

        { q: "SQNR for 8-bit uniform quantizer (sinusoid):",
          choices: ["$\\approx 50$ dB", "$\\approx 6$ dB", "$\\approx 24$ dB", "$\\approx 100$ dB"],
          correct: 0,
          solution: S({
            c: "Quantization SNR for uniform quantization of a full-scale sinusoid: $\\text{SQNR} \\approx 6.02\\,n + 1.76$ dB (memorize).",
            s: [
              "Plug $n = 8$ bits: $6.02 \\cdot 8 + 1.76 = 48.16 + 1.76 = 49.92$ dB.",
              "Each additional bit adds ~6 dB."
            ],
            a: "$\\approx 50$ dB",
            v: "CD audio 16-bit gives $\\approx 98$ dB SQNR — well beyond audible noise floor."
          }),
          ref: "Handbook p.371" },

        { q: "FM modulation index $\\beta$ when $\\Delta f = 75$ kHz, $f_m = 15$ kHz:",
          choices: ["$5$", "$15$", "$0.2$", "$75$"],
          correct: 0,
          solution: S({
            c: "FM modulation index (for tone modulation): $\\beta = \\Delta f / f_m$ where $\\Delta f$ is peak frequency deviation.",
            s: [
              "$\\beta = 75/15 = 5$."
            ],
            a: "$\\beta = 5$",
            v: "Commercial FM broadcasting uses $\\Delta f = 75$ kHz max, audio up to 15 kHz, so $\\beta_{max} \\approx 5$."
          }),
          ref: "Handbook p.371" },

        { q: "Carson's rule BW for above ($\\Delta f=75$ kHz, $f_m=15$ kHz):",
          choices: ["$180$ kHz", "$150$ kHz", "$30$ kHz", "$75$ kHz"],
          correct: 0,
          solution: S({
            c: "Carson's rule for FM bandwidth: $BW \\approx 2(\\Delta f + f_m)$. Approximation, captures ~98% of signal power.",
            s: [
              "$BW = 2(75 + 15) = 2 \\cdot 90 = 180$ kHz."
            ],
            a: "$BW \\approx 180$ kHz",
            v: "FCC allocates 200 kHz per FM station — Carson's rule (180 kHz) plus guard band."
          }),
          ref: "Handbook p.371" },

        { q: "AM modulation index $m=0.5$. Efficiency:",
          choices: ["$11.1\\%$", "$50\\%$", "$25\\%$", "$100\\%$"],
          correct: 0,
          solution: S({
            c: "AM efficiency (fraction of power in sidebands, the only part carrying information): $\\eta = \\dfrac{m^2}{2 + m^2}$.",
            s: [
              "Plug in: $\\eta = (0.5)^2 / (2 + (0.5)^2) = 0.25/2.25 \\approx 0.111 = 11.1\\%$."
            ],
            a: "$\\eta \\approx 11.1\\%$",
            v: "Max efficiency at $m=1$: $\\eta = 1/3 = 33.3\\%$. Most AM power is wasted in the carrier (which carries no info)."
          }),
          ref: "Handbook p.371" },

        { q: "TDM, FDM, CDM are types of:",
          choices: ["Multiplexing", "Modulation", "Coding", "Filtering"],
          correct: 0,
          solution: S({
            c: "Multiplexing: techniques to share a channel among multiple signals.",
            s: [
              "TDM (Time Division Multiplexing): users take turns in time slots.",
              "FDM (Frequency Division): each user on a different frequency band.",
              "CDM (Code Division): users separated by orthogonal codes (CDMA cell networks)."
            ],
            a: "Multiplexing techniques",
            v: "Modulation (AM, FM, PSK) — different concept: how to put a signal onto a carrier."
          }),
          ref: "Handbook p.371" },
      ],
    },
    // ====================== Ch 14: Computer Networks ======================
    {
      id: 14, name_en: "Computer Networks", name_vn: "Mạng Máy tính", fe_count: [4, 6],
      questions: [
        { q: "Usable host IPs in subnet 10.0.0.0/27:",
          choices: ["$30$", "$32$", "$28$", "$62$"],
          correct: 0,
          solution: S({
            c: "Subnet math: host bits $h = 32 - \\text{prefix}$. Total addresses $= 2^h$. Subtract 2 for network address (all-0 host) and broadcast (all-1 host).",
            s: [
              "Host bits: $32 - 27 = 5$.",
              "Total addresses: $2^5 = 32$.",
              "Usable hosts: $32 - 2 = 30$."
            ],
            a: "$30$ usable hosts",
            v: "Common subnet sizes: /24 → 254 hosts; /25 → 126; /26 → 62; /27 → 30; /28 → 14; /29 → 6; /30 → 2 (point-to-point)."
          }),
          ref: "Handbook p.393" },

        { q: "OSI layer of routers:",
          choices: ["Layer 3 (Network)", "Layer 2 (Data Link)", "Layer 4 (Transport)", "Layer 7 (Application)"],
          correct: 0,
          solution: S({
            c: "OSI layers and devices: L1 (Physical) = hubs, cables; L2 (Data Link) = switches, bridges; L3 (Network) = routers; L4 (Transport) = TCP/UDP; L5-7 = software.",
            s: [
              "Routers read the IP packet header (which is Layer 3 info) to forward.",
              "MAC addresses (L2) are used only on each local hop.",
              "Therefore routers operate at L3."
            ],
            a: "Layer 3 (Network)",
            v: "Modern 'L3 switches' are essentially routers in switch hardware — both forward by IP."
          }),
          ref: "Handbook p.399" },

        { q: "OSI layer of switches:",
          choices: ["Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 1 (Physical)", "Layer 7 (Application)"],
          correct: 0,
          solution: S({
            c: "Switches forward Ethernet frames based on MAC address tables (CAM table). MAC is Layer 2.",
            s: [
              "Switch learns: when a frame arrives on a port, record source MAC → port.",
              "Switch forwards: look up destination MAC in table → send to that port.",
              "No IP involvement → not L3."
            ],
            a: "Layer 2 (Data Link)",
            v: "Hubs are L1 (just repeat signals to all ports). Switches are smarter — they selectively forward."
          }),
          ref: "Handbook p.399" },

        { q: "Mnemonic for OSI layers (top to bottom):",
          choices: ["All People Seem To Need Data Processing", "Please Do Not Throw Sausage Pizza Away", "Sally Stops Twins Daring Pizzas Plenty", "Apple Pizza Stems"],
          correct: 0,
          solution: S({
            c: "OSI layers (top → bottom): <b>A</b>pplication, <b>P</b>resentation, <b>S</b>ession, <b>T</b>ransport, <b>N</b>etwork, <b>D</b>ata Link, <b>P</b>hysical.",
            s: [
              "Top→bottom: APSTNDP → 'All People Seem To Need Data Processing'.",
              "Bottom→top: PDNTSPA → 'Please Do Not Throw Sausage Pizza Away'.",
              "Both are standard mnemonics."
            ],
            a: "All People Seem To Need Data Processing (top → bottom)",
            v: "Note: choice B is correct but in reverse order (bottom → top)."
          }),
          ref: "Handbook p.399" },

        { q: "TCP is best described as:",
          choices: ["Connection-oriented, reliable", "Connectionless, fast", "Stateless", "Broadcast-only"],
          correct: 0,
          solution: S({
            c: "TCP (Transmission Control Protocol): reliable, ordered delivery via 3-way handshake (SYN, SYN-ACK, ACK) and ACKs. UDP: connectionless, unreliable, fast (no handshake).",
            s: [
              "TCP features: connection setup, sequence numbers, ACKs, retransmission, flow control, congestion control.",
              "Use cases: web (HTTP), email (SMTP), file transfer (FTP).",
              "UDP use cases: video streaming, gaming, VoIP — where speed matters more than reliability."
            ],
            a: "Connection-oriented, reliable",
            v: "Both run over IP (L3). TCP/UDP are L4."
          }),
          ref: "Handbook p.400" },

        { q: "How many total addresses in /24 subnet:",
          choices: ["$256$", "$24$", "$254$", "$65,536$"],
          correct: 0,
          solution: S({
            c: "Subnet size: $2^{(32 - \\text{prefix})}$ total addresses.",
            s: [
              "$2^{32-24} = 2^8 = 256$ total.",
              "Usable: $256 - 2 = 254$ (choice C is usable, not total)."
            ],
            a: "$256$ total addresses",
            v: "/24 is the common 'class C' size."
          }),
          ref: "Handbook p.393" },

        { q: "Firewall is primarily for:",
          choices: ["Filtering network traffic", "Routing", "Switching", "Encryption only"],
          correct: 0,
          solution: S({
            c: "Firewall: enforces traffic policies (allow/deny rules) at network boundaries. Can be packet-filter (L3/L4) or stateful or application-aware (L7).",
            s: [
              "Common rules: block incoming from internet except port 80/443.",
              "Stateful firewalls track connection state to distinguish initiation from response.",
              "Next-generation firewalls do deep packet inspection."
            ],
            a: "Filtering network traffic",
            v: "Encryption is the job of VPN/TLS, though many firewalls support VPN too."
          }),
          ref: "Handbook p.412" },
      ],
    },
    // ====================== Ch 15: Digital Systems ======================
    {
      id: 15, name_en: "Digital Systems", name_vn: "Hệ thống Số", fe_count: [8, 12],
      questions: [
        { q: "Binary 10110101 in decimal:",
          choices: ["$181$", "$165$", "$201$", "$129$"],
          correct: 0,
          solution: S({
            c: "Binary to decimal: sum $b_i \\cdot 2^i$ over set bits. Or use place values 128, 64, 32, 16, 8, 4, 2, 1 from left.",
            s: [
              "Bits: 1 0 1 1 0 1 0 1.",
              "Place values: 128, 64, 32, 16, 8, 4, 2, 1.",
              "Active bits: 128 + 32 + 16 + 4 + 1 = 181."
            ],
            a: "$181$",
            v: "Crosscheck: 181 in hex = AD₁₆ (see next problem if relevant)."
          }),
          ref: "Handbook p.388" },

        { q: "Decimal 173 in hex:",
          choices: ["$\\text{AD}$", "$\\text{D7}$", "$\\text{B5}$", "$\\text{AC}$"],
          correct: 0,
          solution: S({
            c: "Decimal to hex: divide by 16 repeatedly, read remainders bottom-up. Or split into upper/lower nibble: $173 = 16 \\cdot q + r$.",
            s: [
              "$173 / 16 = 10$ remainder $13$.",
              "$10 = A_{16}$, $13 = D_{16}$.",
              "Combine: $173_{10} = \\text{AD}_{16}$."
            ],
            a: "$\\text{AD}_{16}$",
            v: "Hex letters: A=10, B=11, C=12, D=13, E=14, F=15."
          }),
          ref: "Handbook p.388" },

        { q: "Hex DEAD in binary:",
          choices: ["1101 1110 1010 1101", "1101 1110 1010 1110", "1010 1101 1110 1101", "1110 1110 1011 1101"],
          correct: 0,
          solution: S({
            c: "Hex to binary: each hex digit = 4 bits. Direct lookup, no math needed.",
            s: [
              "D = 1101, E = 1110, A = 1010, D = 1101.",
              "Concatenate: 1101 1110 1010 1101."
            ],
            a: "1101 1110 1010 1101",
            v: "0xDEAD = 57,005 in decimal. Famous 'magic number' in programming."
          }),
          ref: "Handbook p.388" },

        { q: "$-13$ in 8-bit two's complement:",
          choices: ["1111 0011", "0000 1101", "1000 1101", "1111 0010"],
          correct: 0,
          solution: S({
            c: "Two's complement of negative number: <b>flip all bits then add 1</b>. Equivalent to: subtract from $2^n$.",
            s: [
              "$+13$ in 8 bits: 0000 1101.",
              "Flip all bits: 1111 0010.",
              "Add 1: 1111 0011."
            ],
            a: "1111 0011 (binary)",
            v: "Check: as signed 8-bit, $1111\\,0011 = -128 + 64 + 32 + 16 + 2 + 1 = -13$ ✓"
          }),
          ref: "Handbook p.389" },

        { q: "Simplify $F = AB + AB' + A'B$:",
          choices: ["$A + B$", "$AB$", "$A'B'$", "$A \\oplus B$"],
          correct: 0,
          solution: S({
            c: "Boolean simplification: use $X + X' = 1$ and absorption $X + X'Y = X + Y$.",
            s: [
              "Group: $AB + AB' = A(B + B') = A \\cdot 1 = A$.",
              "Now $F = A + A'B$.",
              "Apply absorption ($X + X'Y = X+Y$): $F = A + B$."
            ],
            a: "$F = A + B$",
            v: "Truth table check: $F = AB+AB'+A'B$ is true when at least one of $A, B$ is true — same as $A+B$ ✓"
          }),
          ref: "Handbook p.389" },

        { q: "DeMorgan: $(A \\cdot B)' = $",
          choices: ["$A' + B'$", "$A' \\cdot B'$", "$A \\oplus B$", "$A + B$"],
          correct: 0,
          solution: S({
            c: "DeMorgan's laws: $(AB)' = A' + B'$ and $(A+B)' = A'B'$. Convert NAND to OR-of-NOTs and NOR to AND-of-NOTs.",
            s: [
              "NAND identity: $(A \\cdot B)' = A' + B'$.",
              "Choice B is $(A+B)'$ — the dual."
            ],
            a: "$A' + B'$",
            v: "Used in logic minimization and to convert gate types (e.g., NAND-only or NOR-only designs)."
          }),
          ref: "Handbook p.389" },

        { q: "8-bit signed range (two's complement):",
          choices: ["$-128$ to $+127$", "$-127$ to $+128$", "$0$ to $255$", "$-255$ to $+255$"],
          correct: 0,
          solution: S({
            c: "$n$-bit two's complement range: $-2^{n-1}$ to $2^{n-1} - 1$. The negative side has one extra value (no $+0/-0$ distinction).",
            s: [
              "$n = 8$: $-2^7$ to $2^7 - 1$ = $-128$ to $+127$.",
              "Unsigned 8-bit: 0 to 255 (choice C)."
            ],
            a: "$-128$ to $+127$",
            v: "16-bit signed: $-32{,}768$ to $+32{,}767$. 32-bit signed: $-2{,}147{,}483{,}648$ to $+2{,}147{,}483{,}647$."
          }),
          ref: "Handbook p.389" },

        { q: "JK flip-flop with $J=K=1$ on clock edge:",
          choices: ["Toggles output", "Sets output", "Resets output", "Holds output"],
          correct: 0,
          solution: S({
            c: "JK truth table: $J=0,K=0$: hold; $J=1,K=0$: set ($Q=1$); $J=0,K=1$: reset ($Q=0$); $J=1,K=1$: toggle ($Q \\to \\bar{Q}$).",
            s: [
              "$J=K=1$ is the toggle condition.",
              "On each clock edge, $Q$ flips state."
            ],
            a: "Toggles",
            v: "JK avoids the indeterminate state of SR latch ($S=R=1$ is forbidden); JK turns that into a useful toggle."
          }),
          ref: "Handbook p.391" },

        { q: "D flip-flop output after clock edge:",
          choices: ["$Q = D$", "$Q$ toggles", "$Q = 0$", "$Q = \\bar{D}$"],
          correct: 0,
          solution: S({
            c: "D (delay) flip-flop: output Q takes the value of D at the clock edge. Effectively delays D by one clock cycle.",
            s: [
              "On clock edge: $Q \\leftarrow D$.",
              "Between edges: $Q$ holds last value.",
              "Used in registers, pipelines, synchronizers."
            ],
            a: "$Q = D$",
            v: "JK with $J=D, K=\\bar{D}$ behaves identically to a D flip-flop."
          }),
          ref: "Handbook p.391" },

        { q: "Boolean: $(A+1)$ equals:",
          choices: ["$1$", "$A$", "$0$", "$A'$"],
          correct: 0,
          solution: S({
            c: "OR with constant 1: always 1 (one true input already makes the OR true). 'Annihilator' for OR.",
            s: [
              "$A + 1 = 1$ regardless of $A$.",
              "Dual: $A \\cdot 0 = 0$ (annihilator for AND)."
            ],
            a: "$1$",
            v: "Identity laws: $A + 0 = A$, $A \\cdot 1 = A$ (additive/multiplicative identity)."
          }),
          ref: "Handbook p.389" },

        { q: "How many flip-flops needed to count from 0 to 15?",
          choices: ["$4$", "$15$", "$5$", "$3$"],
          correct: 0,
          solution: S({
            c: "$N$ states require $\\lceil \\log_2 N \\rceil$ flip-flops (each FF stores 1 bit = 1 binary digit).",
            s: [
              "0 to 15 = 16 distinct states.",
              "$\\log_2 16 = 4$, so 4 flip-flops."
            ],
            a: "4 flip-flops",
            v: "n flip-flops → $2^n$ states: 1FF=2, 2FF=4, 3FF=8, 4FF=16, ..."
          }),
          ref: "Handbook p.391" },

        { q: "AND of $A=1010_2$ with $B=1100_2$:",
          choices: ["$1000_2$", "$1110_2$", "$0110_2$", "$0010_2$"],
          correct: 0,
          solution: S({
            c: "Bitwise AND: result bit is 1 only where <b>both</b> input bits are 1.",
            s: [
              "  1 0 1 0",
              "AND 1 1 0 0",
              "  = 1 0 0 0"
            ],
            a: "$1000_2$",
            v: "Bitwise OR would give 1110₂; XOR gives 0110₂ (choice C)."
          }),
          ref: "Handbook p.388" },
      ],
    },
    // ====================== Ch 16: Computer Systems ======================
    {
      id: 16, name_en: "Computer Systems", name_vn: "Hệ thống Máy tính", fe_count: [5, 8],
      questions: [
        { q: "Address lines needed for 4 GB byte-addressable memory:",
          choices: ["$32$", "$30$", "$28$", "$36$"],
          correct: 0,
          solution: S({
            c: "Address bits needed: $n = \\log_2(\\text{addressable units})$. For $N$ bytes: $n = \\log_2 N$.",
            s: [
              "$4$ GB $= 4 \\cdot 2^{30} = 2^2 \\cdot 2^{30} = 2^{32}$ bytes.",
              "$n = 32$ address lines."
            ],
            a: "$32$ address lines",
            v: "This is why 32-bit CPUs are limited to 4 GB of RAM — out of address space."
          }),
          ref: "Handbook p.407" },

        { q: "Cache hit rate $95\\%$, $t_{cache}=2$ ns, $t_{main}=80$ ns. Effective time:",
          choices: ["$5.9$ ns", "$2$ ns", "$80$ ns", "$50$ ns"],
          correct: 0,
          solution: S({
            c: "Effective access time: $t_{avg} = h \\cdot t_{cache} + (1-h) \\cdot t_{main}$, where $h$ is hit rate. (Simple model; assumes miss goes directly to main memory.)",
            s: [
              "Hit contribution: $0.95 \\cdot 2 = 1.9$ ns.",
              "Miss contribution: $0.05 \\cdot 80 = 4.0$ ns.",
              "Total: $t_{avg} = 1.9 + 4.0 = 5.9$ ns."
            ],
            a: "$t_{avg} = 5.9$ ns",
            v: "13.5× faster than no cache (80 ns) — huge speedup from a 95% hit rate."
          }),
          ref: "Handbook p.407" },

        { q: "Von Neumann vs Harvard architecture:",
          choices: ["Harvard has separate data and instruction memory", "Von Neumann uses Harvard layout", "Same thing", "Harvard is older"],
          correct: 0,
          solution: S({
            c: "Von Neumann: single shared memory for instructions and data, single bus. Harvard: separate memory + bus for instructions vs data. Harvard allows simultaneous fetch and read.",
            s: [
              "Von Neumann (most desktop CPUs, simplicity): one memory, one bus.",
              "Harvard (DSPs, many microcontrollers): two memories, two buses → parallel access."
            ],
            a: "Harvard has separate instruction/data memory",
            v: "Modern CPUs use 'modified Harvard' — separate L1 caches for instructions and data, but unified main memory."
          }),
          ref: "Handbook p.408" },

        { q: "RAM types fastest-to-slowest in access time:",
          choices: ["SRAM > DRAM > Flash", "DRAM > SRAM > Flash", "Flash > SRAM > DRAM", "All equal"],
          correct: 0,
          solution: S({
            c: "Memory speed/cost tradeoffs: SRAM (fastest, expensive — used for cache); DRAM (cheaper, slower — main RAM, needs refresh); Flash (non-volatile but slower — storage).",
            s: [
              "SRAM: ~1-10 ns (used in caches).",
              "DRAM: ~10-100 ns (main memory).",
              "Flash/SSD: 25-100 µs read (~1000× slower than DRAM)."
            ],
            a: "SRAM > DRAM > Flash",
            v: "Each level is roughly 100-1000× slower as you go bigger/cheaper."
          }),
          ref: "Handbook p.407" },

        { q: "1 KB = ",
          choices: ["$1024$ bytes", "$1000$ bytes", "$1024$ bits", "$2^{20}$ bytes"],
          correct: 0,
          solution: S({
            c: "In computing (binary): 1 KB = $2^{10}$ = 1024 bytes. (SI 'kilo' = 1000.) Some standards use 'KiB' for the binary unit and 'kB' for 1000.",
            s: [
              "Binary: 1 KB = $2^{10}$ = 1024 bytes.",
              "1 MB = $2^{20}$ = 1,048,576 bytes (choice D).",
              "1 GB = $2^{30}$, 1 TB = $2^{40}$, ..."
            ],
            a: "$1024$ bytes",
            v: "Disk vendors sometimes use 1000-based for marketing — '500 GB' drive is 500×10⁹ bytes, ~465 GiB."
          }),
          ref: "Handbook p.407" },

        { q: "Big-endian stores most significant byte at:",
          choices: ["Lowest address", "Highest address", "Random", "Middle"],
          correct: 0,
          solution: S({
            c: "Endianness: byte ordering in multi-byte data. Big-endian: MSB first (lowest address). Little-endian: LSB first (lowest address).",
            s: [
              "Big-endian (network byte order, IBM, Sun): MSB at low address — 'reads' naturally.",
              "Little-endian (x86, ARM): LSB at low address — easier arithmetic."
            ],
            a: "Lowest address",
            v: "Mnemonic: 'big-end-first'. TCP/IP uses big-endian — hence 'network byte order'."
          }),
          ref: "Handbook p.408" },

        { q: "Memory hierarchy from fastest to largest:",
          choices: ["Registers→Cache→RAM→SSD→HDD", "HDD→SSD→RAM→Cache→Registers", "Cache→Registers→RAM→HDD", "RAM→Cache→Registers→SSD"],
          correct: 0,
          solution: S({
            c: "Memory hierarchy: trade-off speed vs capacity vs cost. Higher levels = faster, smaller, more expensive.",
            s: [
              "Registers (fastest, ~32-64 of them): < 1 ns.",
              "L1/L2/L3 cache (SRAM): 1-30 ns.",
              "Main memory (DRAM): 50-100 ns.",
              "SSD: 25-100 µs.",
              "HDD: 5-10 ms.",
              "Tape: seconds."
            ],
            a: "Registers → Cache → RAM → SSD → HDD",
            v: "Each level is typically 10-100× larger and 10-100× slower than the one above."
          }),
          ref: "Handbook p.407" },

        { q: "32-bit address space size:",
          choices: ["$4$ GB", "$4$ MB", "$2$ GB", "$8$ GB"],
          correct: 0,
          solution: S({
            c: "Address space = $2^n$ bytes where $n$ is the address width.",
            s: [
              "$2^{32} = 4{,}294{,}967{,}296 \\approx 4.29 \\times 10^9$ bytes.",
              "$= 4$ GiB (binary) or roughly 4 GB."
            ],
            a: "$4$ GB",
            v: "Why 32-bit OSs are capped at 4 GB RAM (less if some address space reserved for I/O)."
          }),
          ref: "Handbook p.407" },
      ],
    },
    // ====================== Ch 17: Software Engineering ======================
    {
      id: 17, name_en: "Software Engineering", name_vn: "Kỹ thuật Phần mềm", fe_count: [4, 6],
      questions: [
        { q: "Big-O of nested for loops (each 1..n):",
          choices: ["$O(n^2)$", "$O(n)$", "$O(n\\log n)$", "$O(1)$"],
          correct: 0,
          solution: S({
            c: "Time complexity = product of nested loop counts. Two nested loops over $n$ → $n \\cdot n = n^2$ operations.",
            s: [
              "Outer: $n$ iterations.",
              "Inner: $n$ iterations per outer.",
              "Total: $n^2$ → $O(n^2)$."
            ],
            a: "$O(n^2)$",
            v: "Three nested loops would be $O(n^3)$, etc."
          }),
          ref: "Handbook p.415" },

        { q: "Max comparisons in binary search of 1024 elements:",
          choices: ["$10$", "$1024$", "$32$", "$512$"],
          correct: 0,
          solution: S({
            c: "Binary search halves the search space each step → $O(\\log_2 n)$ comparisons.",
            s: [
              "$\\log_2 1024 = 10$ (since $2^{10} = 1024$).",
              "Worst case: 10 comparisons to find or rule out any element."
            ],
            a: "$10$ comparisons",
            v: "Linear search would need up to 1024 comparisons — binary is 100× faster here."
          }),
          ref: "Handbook p.415" },

        { q: "Big-O of merge sort:",
          choices: ["$O(n\\log n)$", "$O(n^2)$", "$O(n)$", "$O(\\log n)$"],
          correct: 0,
          solution: S({
            c: "Merge sort: divide-and-conquer. $\\log n$ levels of recursion, each level merges $n$ elements → $O(n \\log n)$.",
            s: [
              "Recurrence: $T(n) = 2T(n/2) + O(n)$.",
              "Solving: $T(n) = O(n \\log n)$.",
              "Heap sort and quicksort (avg) also $O(n \\log n)$."
            ],
            a: "$O(n\\log n)$",
            v: "Worst case quicksort is $O(n^2)$ but average is $O(n \\log n)$. Merge sort is reliably $O(n \\log n)$."
          }),
          ref: "Handbook p.415" },

        { q: "Big-O of bubble sort:",
          choices: ["$O(n^2)$", "$O(n\\log n)$", "$O(n)$", "$O(2^n)$"],
          correct: 0,
          solution: S({
            c: "Bubble sort makes up to $n$ passes, each comparing up to $n-1$ adjacent pairs and swapping → $O(n^2)$.",
            s: [
              "Outer loop: $n$ passes.",
              "Inner loop: $n-1$ comparisons.",
              "Total: $n(n-1)/2 \\approx n^2/2 = O(n^2)$."
            ],
            a: "$O(n^2)$",
            v: "Insertion sort and selection sort are also $O(n^2)$. Use for small lists only."
          }),
          ref: "Handbook p.415" },

        { q: "Stack data structure follows:",
          choices: ["LIFO", "FIFO", "Random", "Priority"],
          correct: 0,
          solution: S({
            c: "Stack: Last-In-First-Out. Last item pushed is first popped.",
            s: [
              "Operations: push (add to top), pop (remove from top), peek/top (view top without removing).",
              "Implementation: array with index, or linked list.",
              "Use cases: function call stack, undo/redo, expression evaluation."
            ],
            a: "LIFO",
            v: "Queue is FIFO (first-in first-out) — opposite ordering."
          }),
          ref: "Handbook p.415" },

        { q: "Hash table average lookup complexity (good hash):",
          choices: ["$O(1)$", "$O(\\log n)$", "$O(n)$", "$O(n^2)$"],
          correct: 0,
          solution: S({
            c: "Hash table with good hash function: average $O(1)$ lookup (constant). Worst case $O(n)$ if all keys collide.",
            s: [
              "Hash function maps key → bucket index in $O(1)$.",
              "With low collision rate, retrieval is $O(1)$ on average.",
              "Bad hash or full table → degrades toward $O(n)$."
            ],
            a: "$O(1)$ average",
            v: "Why dictionaries/maps are so heavily used in modern programming."
          }),
          ref: "Handbook p.415" },
      ],
    },
  ],
};

if (typeof window !== "undefined") window.QUESTION_BANK = QUESTION_BANK;
if (typeof module !== "undefined") module.exports = QUESTION_BANK;
