// FE Electrical Question Bank — Extension Pack 10
// Diagrams for Digital, Control, Electronics chapters
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") return;

  // ============ SVG helpers ============

  // AND gate
  const svgAND = (label) => `<svg viewBox='0 0 160 100' width='160'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<path d='M40 20 L80 20 A30 30 0 0 1 80 80 L40 80 Z' fill='#fff'/>
<line x1='10' y1='35' x2='40' y2='35'/><line x1='10' y1='65' x2='40' y2='65'/>
<line x1='110' y1='50' x2='150' y2='50'/>
<text x='5' y='40' stroke='none' fill='#1f4e79' font-size='12'>A</text>
<text x='5' y='70' stroke='none' fill='#1f4e79' font-size='12'>B</text>
<text x='75' y='55' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='14'>${label || "AND"}</text>
<text x='145' y='45' stroke='none' fill='#1f4e79' font-size='12'>Y</text>
</g></svg>`;

  // OR gate
  const svgOR = (label) => `<svg viewBox='0 0 160 100' width='160'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<path d='M30 20 Q60 20 100 50 Q60 80 30 80 Q55 50 30 20 Z' fill='#fff'/>
<line x1='10' y1='35' x2='38' y2='35'/><line x1='10' y1='65' x2='38' y2='65'/>
<line x1='100' y1='50' x2='150' y2='50'/>
<text x='5' y='40' stroke='none' fill='#1f4e79' font-size='12'>A</text>
<text x='5' y='70' stroke='none' fill='#1f4e79' font-size='12'>B</text>
<text x='60' y='55' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='14'>${label || "OR"}</text>
<text x='145' y='45' stroke='none' fill='#1f4e79' font-size='12'>Y</text>
</g></svg>`;

  // NAND
  const svgNAND = () => `<svg viewBox='0 0 170 100' width='170'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<path d='M40 20 L80 20 A30 30 0 0 1 80 80 L40 80 Z' fill='#fff'/>
<circle cx='115' cy='50' r='5' fill='#fff'/>
<line x1='10' y1='35' x2='40' y2='35'/><line x1='10' y1='65' x2='40' y2='65'/>
<line x1='120' y1='50' x2='160' y2='50'/>
<text x='5' y='40' stroke='none' fill='#1f4e79' font-size='12'>A</text>
<text x='5' y='70' stroke='none' fill='#1f4e79' font-size='12'>B</text>
<text x='75' y='55' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>NAND</text>
<text x='155' y='45' stroke='none' fill='#1f4e79' font-size='12'>Y</text>
</g></svg>`;

  // XOR
  const svgXOR = () => `<svg viewBox='0 0 170 100' width='170'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<path d='M30 20 Q55 50 30 80' fill='none'/>
<path d='M38 20 Q63 20 108 50 Q63 80 38 80 Q63 50 38 20 Z' fill='#fff'/>
<line x1='10' y1='35' x2='42' y2='35'/><line x1='10' y1='65' x2='42' y2='65'/>
<line x1='108' y1='50' x2='160' y2='50'/>
<text x='5' y='40' stroke='none' fill='#1f4e79' font-size='12'>A</text>
<text x='5' y='70' stroke='none' fill='#1f4e79' font-size='12'>B</text>
<text x='65' y='55' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>XOR</text>
<text x='155' y='45' stroke='none' fill='#1f4e79' font-size='12'>Y</text>
</g></svg>`;

  // D Flip-Flop
  const svgDFF = () => `<svg viewBox='0 0 180 130' width='180'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<rect x='50' y='20' width='80' height='90' fill='#fff'/>
<text x='65' y='40' stroke='none' fill='#1f4e79' font-size='13'>D</text>
<text x='95' y='110' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='10'>D-FF</text>
<text x='110' y='40' stroke='none' fill='#1f4e79' font-size='13'>Q</text>
<text x='106' y='95' stroke='none' fill='#1f4e79' font-size='13'>Q̄</text>
<line x1='20' y1='35' x2='50' y2='35'/>
<line x1='130' y1='35' x2='160' y2='35'/>
<line x1='130' y1='90' x2='160' y2='90'/>
<text x='10' y='40' stroke='none' fill='#1f4e79' font-size='11'>D</text>
<text x='165' y='40' stroke='none' fill='#1f4e79' font-size='11'>Q</text>
<text x='165' y='95' stroke='none' fill='#1f4e79' font-size='11'>Q̄</text>
<path d='M50 75 L60 70 L50 65' fill='none'/>
<line x1='20' y1='70' x2='50' y2='70'/>
<text x='10' y='75' stroke='none' fill='#1f4e79' font-size='10'>CLK</text>
</g></svg>`;

  // JK Flip-Flop
  const svgJKFF = () => `<svg viewBox='0 0 180 150' width='180'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<rect x='50' y='20' width='80' height='110' fill='#fff'/>
<text x='60' y='40' stroke='none' fill='#1f4e79' font-size='13'>J</text>
<text x='60' y='120' stroke='none' fill='#1f4e79' font-size='13'>K</text>
<text x='95' y='130' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='10'>JK-FF</text>
<line x1='20' y1='35' x2='50' y2='35'/>
<line x1='20' y1='115' x2='50' y2='115'/>
<line x1='130' y1='35' x2='160' y2='35'/>
<line x1='130' y1='115' x2='160' y2='115'/>
<text x='10' y='40' stroke='none' fill='#1f4e79' font-size='11'>J</text>
<text x='10' y='120' stroke='none' fill='#1f4e79' font-size='11'>K</text>
<text x='165' y='40' stroke='none' fill='#1f4e79' font-size='11'>Q</text>
<text x='165' y='120' stroke='none' fill='#1f4e79' font-size='11'>Q̄</text>
<path d='M50 80 L60 75 L50 70' fill='none'/>
<line x1='20' y1='75' x2='50' y2='75'/>
<text x='10' y='80' stroke='none' fill='#1f4e79' font-size='10'>CLK</text>
</g></svg>`;

  // K-map (2-var)
  const svgKMap2 = (vals) => `<svg viewBox='0 0 200 150' width='200'><g stroke='#1f4e79' fill='none' stroke-width='1.5'>
<text x='30' y='30' stroke='none' fill='#1f4e79' font-size='12'>A\\B</text>
<text x='80' y='30' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>0</text>
<text x='140' y='30' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>1</text>
<text x='40' y='65' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>0</text>
<text x='40' y='105' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>1</text>
<rect x='60' y='40' width='60' height='40' fill='#fff'/><text x='90' y='65' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='14'>${vals[0]}</text>
<rect x='120' y='40' width='60' height='40' fill='#fff'/><text x='150' y='65' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='14'>${vals[1]}</text>
<rect x='60' y='80' width='60' height='40' fill='#fff'/><text x='90' y='105' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='14'>${vals[2]}</text>
<rect x='120' y='80' width='60' height='40' fill='#fff'/><text x='150' y='105' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='14'>${vals[3]}</text>
</g></svg>`;

  // K-map (3-var: A on top, BC on side)
  const svgKMap3 = (vals) => `<svg viewBox='0 0 320 160' width='320'><g stroke='#1f4e79' fill='none' stroke-width='1.5'>
<text x='30' y='30' stroke='none' fill='#1f4e79' font-size='11'>BC\\A</text>
<text x='100' y='30' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>0</text>
<text x='180' y='30' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>1</text>
<text x='40' y='55' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>00</text>
<text x='40' y='85' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>01</text>
<text x='40' y='115' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>11</text>
<text x='40' y='145' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>10</text>
<g fill='#fff'>
<rect x='70' y='40' width='60' height='25'/><rect x='130' y='40' width='60' height='25'/>
<rect x='70' y='65' width='60' height='25'/><rect x='130' y='65' width='60' height='25'/>
<rect x='70' y='90' width='60' height='25'/><rect x='130' y='90' width='60' height='25'/>
<rect x='70' y='115' width='60' height='25'/><rect x='130' y='115' width='60' height='25'/>
</g>
<g stroke='none' fill='#1f4e79' font-size='14'>
<text x='100' y='58' text-anchor='middle'>${vals[0]}</text><text x='160' y='58' text-anchor='middle'>${vals[1]}</text>
<text x='100' y='83' text-anchor='middle'>${vals[2]}</text><text x='160' y='83' text-anchor='middle'>${vals[3]}</text>
<text x='100' y='108' text-anchor='middle'>${vals[4]}</text><text x='160' y='108' text-anchor='middle'>${vals[5]}</text>
<text x='100' y='133' text-anchor='middle'>${vals[6]}</text><text x='160' y='133' text-anchor='middle'>${vals[7]}</text>
</g>
</g></svg>`;

  // Block diagram: G with negative feedback H
  const svgBlockFB = (G, H) => `<svg viewBox='0 0 380 140' width='380'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<line x1='10' y1='70' x2='60' y2='70'/>
<circle cx='75' cy='70' r='15' fill='#fff'/>
<text x='75' y='75' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='14'>+</text>
<text x='65' y='95' stroke='none' fill='#1f4e79' font-size='11'>−</text>
<line x1='90' y1='70' x2='130' y2='70'/>
<rect x='130' y='55' width='80' height='30' fill='#fff'/>
<text x='170' y='75' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>${G}</text>
<line x1='210' y1='70' x2='340' y2='70'/>
<line x1='280' y1='70' x2='280' y2='115'/>
<rect x='240' y='100' width='80' height='30' fill='#fff'/>
<text x='280' y='120' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>${H}</text>
<line x1='240' y1='115' x2='75' y2='115'/>
<line x1='75' y1='115' x2='75' y2='85'/>
<polygon points='73,87 77,87 75,82' fill='#1f4e79'/>
<polygon points='215,67 215,73 222,70' fill='#1f4e79'/>
<text x='25' y='65' stroke='none' fill='#1f4e79' font-size='11'>R(s)</text>
<text x='320' y='65' stroke='none' fill='#1f4e79' font-size='11'>Y(s)</text>
</g></svg>`;

  // Pole-zero plot
  const svgPoleZero = (poles, zeros) => `<svg viewBox='0 0 240 200' width='240'><g stroke='#1f4e79' fill='none' stroke-width='1.5'>
<line x1='20' y1='100' x2='220' y2='100'/><polygon points='220,100 213,96 213,104' fill='#1f4e79'/>
<line x1='120' y1='20' x2='120' y2='180'/><polygon points='120,20 116,27 124,27' fill='#1f4e79'/>
<text x='215' y='115' stroke='none' fill='#1f4e79' font-size='11'>Re(s)</text>
<text x='100' y='30' stroke='none' fill='#1f4e79' font-size='11'>Im(s)</text>
${poles.map(p => `<g stroke='#c00' stroke-width='2'><line x1='${120+p[0]*20-5}' y1='${100-p[1]*20-5}' x2='${120+p[0]*20+5}' y2='${100-p[1]*20+5}'/><line x1='${120+p[0]*20-5}' y1='${100-p[1]*20+5}' x2='${120+p[0]*20+5}' y2='${100-p[1]*20-5}'/></g>`).join("")}
${zeros.map(z => `<circle cx='${120+z[0]*20}' cy='${100-z[1]*20}' r='5' stroke='#1f4e79' fill='none'/>`).join("")}
<text x='10' y='115' stroke='none' fill='#1f4e79' font-size='10'>× = pole, ○ = zero</text>
</g></svg>`;

  // Op-amp non-inverting
  const svgNonInvOpAmp = (Rf, Rg) => `<svg viewBox='0 0 320 180' width='320'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<polygon points='160,50 160,130 230,90' fill='#fff'/>
<text x='170' y='75' stroke='none' fill='#1f4e79' font-size='14'>−</text><text x='170' y='115' stroke='none' fill='#1f4e79' font-size='14'>+</text>
<line x1='80' y1='110' x2='160' y2='110'/>
<text x='50' y='115' stroke='none' fill='#1f4e79' font-size='12'>v_in</text>
<line x1='160' y1='75' x2='150' y2='75'/><line x1='150' y1='75' x2='150' y2='150'/>
<rect x='180' y='65' width='40' height='16' fill='#fff'/><text x='200' y='62' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>R_f=${Rf}</text>
<line x1='150' y1='75' x2='150' y2='30'/><line x1='150' y1='30' x2='180' y2='30'/>
<line x1='220' y1='30' x2='240' y2='30'/><line x1='240' y1='30' x2='240' y2='90'/>
<line x1='230' y1='90' x2='240' y2='90'/>
<line x1='240' y1='90' x2='290' y2='90'/>
<rect x='140' y='150' width='20' height='30' fill='#fff'/><text x='180' y='175' stroke='none' fill='#1f4e79' font-size='11'>R_g=${Rg}</text>
<line x1='150' y1='180' x2='150' y2='200'/>
<polygon points='145,200 155,200 150,210' fill='#1f4e79'/>
<text x='295' y='95' stroke='none' fill='#1f4e79' font-size='12'>v_out</text>
</g></svg>`;

  const P = {
    // Ch 15 Digital Systems — 15 with diagrams
    15: [
      { q: `Find Y for $A=1$, $B=1$. ${svgAND()}`,
        choices: ["$Y = 1$", "$Y = 0$", "Undefined", "$Y = A$"], correct: 0,
        solution: S({ c: "AND: output 1 only when ALL inputs are 1.", s: ["$1 \\cdot 1 = 1$."], a: "$Y = 1$" }), ref: "Handbook p.389" },

      { q: `Truth table value Y for inputs $A=1$, $B=0$. ${svgAND()}`,
        choices: ["$Y = 0$", "$Y = 1$", "$Y$ = don't care", "Toggle"], correct: 0,
        solution: S({ c: "AND requires both 1.", s: ["$1 \\cdot 0 = 0$."], a: "$Y = 0$" }), ref: "Handbook p.389" },

      { q: `For OR gate, Y when $A=0$, $B=1$. ${svgOR()}`,
        choices: ["$Y = 1$", "$Y = 0$", "$Y = X$", "$Y$ unknown"], correct: 0,
        solution: S({ c: "OR: output 1 if ANY input is 1.", s: ["$0 + 1 = 1$."], a: "$Y = 1$" }), ref: "Handbook p.389" },

      { q: `NAND output for $A=B=1$. ${svgNAND()}`,
        choices: ["$Y = 0$", "$Y = 1$", "$Y = A$", "$Y$ undefined"], correct: 0,
        solution: S({ c: "NAND = NOT(AND). AND of 1,1 = 1; NAND = 0.", s: [""], a: "$Y = 0$" }), ref: "Handbook p.389" },

      { q: `XOR output for $A=B=1$. ${svgXOR()}`,
        choices: ["$Y = 0$", "$Y = 1$", "$Y = A$", "$Y$ undefined"], correct: 0,
        solution: S({ c: "XOR: 1 when inputs DIFFER. Same → 0.", s: ["$1 \\oplus 1 = 0$."], a: "$Y = 0$" }), ref: "Handbook p.389" },

      { q: `Simplify Boolean function from K-map. ${svgKMap2(["1", "0", "1", "1"])}`,
        choices: ["$F = A + \\bar{B}$", "$F = AB$", "$F = A \\oplus B$", "$F = \\bar{A}$"], correct: 0,
        solution: S({
          c: "K-map for 2 vars (A on rows, B on cols). Group 1s.",
          s: [
            "Cells: $\\bar{A}\\bar{B}=1$, $\\bar{A}B=0$, $A\\bar{B}=1$, $AB=1$.",
            "Group 1 (top-left + bottom-left): $\\bar{B}$ (covers $\\bar{A}\\bar{B}$ and $A\\bar{B}$).",
            "Group 2 (bottom row): $A$ (covers $A\\bar{B}$ and $AB$).",
            "Simplified: $F = A + \\bar{B}$."
          ],
          a: "$F = A + \\bar{B}$"
        }), ref: "Handbook p.390" },

      { q: `Simplify from K-map. ${svgKMap2(["0", "1", "1", "1"])}`,
        choices: ["$F = A + B$", "$F = AB$", "$F = \\bar{A}\\bar{B}$", "$F = A \\oplus B$"], correct: 0,
        solution: S({
          c: "Group adjacent 1s.",
          s: [
            "Cells: only $\\bar{A}\\bar{B} = 0$, others = 1.",
            "Three 1s grouped as: $A$ (bottom row) + $B$ (right column).",
            "$F = A + B$."
          ],
          a: "$F = A + B$"
        }), ref: "Handbook p.390" },

      { q: `3-variable K-map: simplify. ${svgKMap3(["1", "0", "1", "0", "0", "1", "0", "1"])}`,
        choices: ["$F = A \\oplus B \\oplus C$ (or equivalently odd parity)", "$F = ABC$", "$F = A + B + C$", "$F = \\bar{A}\\bar{B}\\bar{C}$"], correct: 0,
        solution: S({
          c: "Pattern shows 1s on alternating positions — characteristic of XOR/odd-parity.",
          s: [
            "Minterms with 1: cells (A=0,BC=00)=1, (A=0,BC=11)=1, (A=1,BC=01)=1, (A=1,BC=10)=1.",
            "In terms of (A,B,C): 000=1, 011=1, 101=1, 110=1. These have odd number of 1s.",
            "Odd parity → $F = A \\oplus B \\oplus C$."
          ],
          a: "$F = A \\oplus B \\oplus C$",
          v: "XOR detects odd number of 1s in inputs."
        }), ref: "Handbook p.390" },

      { q: `D Flip-Flop: $D = 1$ at clock edge. Output Q after edge: ${svgDFF()}`,
        choices: ["$Q = 1$", "$Q = 0$", "Toggle", "Hold previous"], correct: 0,
        solution: S({ c: "D-FF: Q follows D at clock edge.", s: ["Next state $Q^+ = D = 1$."], a: "$Q = 1$" }), ref: "Handbook p.391" },

      { q: `JK Flip-Flop with $J=K=1$ at clock edge, previous $Q=0$. Output: ${svgJKFF()}`,
        choices: ["$Q = 1$ (toggled)", "$Q = 0$", "Hold", "Indeterminate"], correct: 0,
        solution: S({ c: "JK with $J=K=1$: toggle.", s: ["$Q^+ = \\bar{Q} = \\bar{0} = 1$."], a: "$Q = 1$" }), ref: "Handbook p.391" },

      { q: `JK with $J=0, K=1$, previous $Q = 1$. Next Q: ${svgJKFF()}`,
        choices: ["$Q = 0$ (reset)", "$Q = 1$", "Toggle", "Hold"], correct: 0,
        solution: S({ c: "JK: $J=0, K=1$ → reset.", s: ["$Q^+ = 0$."], a: "$Q = 0$" }), ref: "Handbook p.391" },

      { q: `How many states does 5-bit binary counter cycle through?`,
        choices: ["$32$", "$5$", "$16$", "$64$"], correct: 0,
        solution: S({ c: "$2^n$ for n-bit counter.", s: ["$2^5 = 32$."], a: "$32$" }), ref: "Handbook p.391" },

      { q: `XOR truth table: $A \\oplus 1$ equals: ${svgXOR()}`,
        choices: ["$\\bar{A}$ (inverter)", "$A$", "$1$", "$0$"], correct: 0,
        solution: S({ c: "XOR with constant 1 = NOT.", s: ["$0 \\oplus 1 = 1$; $1 \\oplus 1 = 0$. Inverts A."], a: "$\\bar{A}$", v: "Why XOR is used as 'conditional inverter' in arithmetic circuits." }), ref: "Handbook p.389" },

      { q: `K-map cells corresponding to all minterms equal 1. Simplified F: ${svgKMap3(["1","1","1","1","1","1","1","1"])}`,
        choices: ["$F = 1$ (always true)", "$F = A$", "$F = 0$", "$F = ABC$"], correct: 0,
        solution: S({ c: "All cells 1 = tautology.", s: ["F is always true regardless of inputs."], a: "$F = 1$" }), ref: "Handbook p.390" },

      { q: `K-map all 0s except cell A=1,B=1: ${svgKMap2(["0","0","0","1"])}`,
        choices: ["$F = AB$", "$F = A + B$", "$F = \\bar{A}\\bar{B}$", "$F = A \\oplus B$"], correct: 0,
        solution: S({ c: "Only minterm $AB$ is 1.", s: [""], a: "$F = AB$" }), ref: "Handbook p.390" },
    ],

    // Ch 12 Control Systems — 10 with block diagrams
    12: [
      { q: `Find closed-loop transfer function $T(s) = Y(s)/R(s)$ for $G(s) = 10/(s+5)$, $H(s) = 1$. ${svgBlockFB("G(s)", "H(s)")}`,
        choices: ["$T(s) = 10/(s+15)$", "$10/(s+5)$", "$1/(s+5)$", "$15/s$"], correct: 0,
        solution: S({
          c: "Negative feedback: $T = G/(1+GH)$.",
          s: [
            "$T = (10/(s+5))/(1 + 10/(s+5))$.",
            "Multiply both by $(s+5)$: $T = 10/((s+5)+10) = 10/(s+15)$."
          ],
          a: "$T(s) = 10/(s+15)$",
          v: "Closed-loop pole at $s=-15$ — faster than open-loop pole at $-5$."
        }), ref: "Handbook p.365" },

      { q: `DC gain of $T(s) = 10/(s+15)$ (system above): ${svgBlockFB("G(s)", "H(s)")}`,
        choices: ["$2/3 \\approx 0.667$", "$10$", "$15$", "$1$"], correct: 0,
        solution: S({ c: "DC gain = $T(0)$.", s: ["$T(0) = 10/15 = 2/3$."], a: "$0.667$" }), ref: "Handbook p.366" },

      { q: `For $G(s) = K/(s(s+5))$, unity feedback. What is type number? ${svgBlockFB("G(s)", "1")}`,
        choices: ["Type 1 (one $s$ in denominator)", "Type 0", "Type 2", "Type 3"], correct: 0,
        solution: S({ c: "System type = # of integrators (poles at origin) in $G(s)H(s)$.", s: ["One $s$ → Type 1."], a: "Type 1", v: "Type 1: zero steady-state error to step, finite error to ramp." }), ref: "Handbook p.366" },

      { q: `Pole-zero plot shown: system is. ${svgPoleZero([[-2, 0], [-2, 0]], [[-1, 0]])}`,
        choices: ["Stable (poles in LHP)", "Unstable", "Marginal", "Cannot tell"], correct: 0,
        solution: S({ c: "Stability: all poles in LHP (negative real parts).", s: ["Pole at $s=-2$ (double): real, negative → LHP. Stable."], a: "Stable" }), ref: "Handbook p.365" },

      { q: `Pole-zero plot: ${svgPoleZero([[-1, 2], [-1, -2]], [])}`,
        choices: ["Stable, underdamped (oscillatory decay)", "Unstable", "Overdamped", "Critically damped"], correct: 0,
        solution: S({
          c: "Complex conjugate poles in LHP: underdamped 2nd-order.",
          s: ["Poles at $s = -1 \\pm j2$. Real part negative → stable. Imaginary part nonzero → oscillation.", "$\\omega_n = \\sqrt{1+4} = \\sqrt{5}$, $\\zeta = 1/\\sqrt{5} \\approx 0.447$."],
          a: "Stable underdamped"
        }), ref: "Handbook p.366" },

      { q: `Pole-zero plot: ${svgPoleZero([[1, 0]], [])}`,
        choices: ["Unstable (pole in RHP)", "Stable", "Marginal", "Underdamped"], correct: 0,
        solution: S({ c: "RHP pole → response grows exponentially.", s: ["$e^{1 \\cdot t} = e^t$ grows."], a: "Unstable" }), ref: "Handbook p.365" },

      { q: `Pole-zero plot: ${svgPoleZero([[0, 2], [0, -2]], [])}`,
        choices: ["Marginally stable (sustained oscillation)", "Stable decay", "Unstable", "DC"], correct: 0,
        solution: S({ c: "Poles on imaginary axis: pure oscillation at $\\omega = 2$ rad/s.", s: ["Neither grows nor decays."], a: "Marginal" }), ref: "Handbook p.365" },

      { q: `For unity feedback with $G(s) = 100/[(s+1)(s+10)]$, steady-state error to unit step: ${svgBlockFB("G(s)", "1")}`,
        choices: ["$e_{ss} = 1/11 \\approx 0.091$", "$0$", "$1/10$", "$\\infty$"], correct: 0,
        solution: S({
          c: "Type 0 system, $K_p = \\lim_{s\\to 0} G(s) = 100/10 = 10$. $e_{ss} = 1/(1+K_p)$.",
          s: ["$K_p = 100/[(0+1)(0+10)] = 10$.", "$e_{ss} = 1/11 \\approx 0.0909$."],
          a: "$\\approx 0.091$"
        }), ref: "Handbook p.366" },

      { q: `Series combination of $G_1(s) = 2/(s+1)$ and $G_2(s) = 5/(s+3)$:`,
        choices: ["$G_1 G_2 = 10/[(s+1)(s+3)]$", "$G_1 + G_2$", "$10/(s^2+4s+3)$ — same as A", "Both A and C"], correct: 0,
        solution: S({ c: "Series TF multiply. Then expand denominator.", s: ["$G_1 G_2 = 10/[(s+1)(s+3)] = 10/(s^2 + 4s + 3)$. A and C are same expression."], a: "Both equivalent forms" }), ref: "Handbook p.365" },

      { q: `Settling time (2%) of system with $\\zeta = 0.5$, $\\omega_n = 10$ rad/s:`,
        choices: ["$t_s = 4/(\\zeta\\omega_n) = 0.8$ s", "$4$ s", "$10$ s", "$0.4$ s"], correct: 0,
        solution: S({ c: "$t_s \\approx 4/(\\zeta\\omega_n)$ for 2% settling.", s: ["$4/(0.5 \\cdot 10) = 0.8$ s."], a: "$0.8$ s" }), ref: "Handbook p.366" },
    ],

    // Ch 9 Electronics — 8 more with diagrams
    9: [
      { q: `Find $v_{out}$ for $v_{in} = 0.5$ V. ${svgNonInvOpAmp("90 kΩ", "10 kΩ")}`,
        choices: ["$+5$ V", "$-5$ V", "$+0.5$ V", "$+4.5$ V"], correct: 0,
        solution: S({
          c: "Non-inverting: $A_v = 1 + R_f/R_g$. Positive gain.",
          s: ["$A_v = 1 + 90/10 = 10$.", "$v_{out} = 10 \\cdot 0.5 = 5$ V."],
          a: "$+5$ V"
        }), ref: "Handbook p.380" },

      { q: `Find required $R_f$ for non-inverting gain of $+11$ with $R_g = 1$ kΩ. ${svgNonInvOpAmp("R_f", "R_g")}`,
        choices: ["$R_f = 10$ kΩ", "$R_f = 11$ kΩ", "$R_f = 1$ kΩ", "$R_f = 100$ kΩ"], correct: 0,
        solution: S({ c: "$1 + R_f/R_g = 11 \\Rightarrow R_f = 10 R_g$.", s: ["$R_f = 10$ kΩ."], a: "$10$ kΩ" }), ref: "Handbook p.380" },

      { q: `Voltage follower (unity buffer): when $v_{in} = 3.7$ V, $v_{out}$ = ${svgNonInvOpAmp("0", "∞")}`,
        choices: ["$3.7$ V", "$0$", "$-3.7$ V", "$1$ V"], correct: 0,
        solution: S({
          c: "Buffer: gain = 1. $v_{out} = v_{in}$.",
          s: ["Voltage follower has $R_f = 0$ (direct connection), effectively unity gain.", "Provides high $Z_{in}$, low $Z_{out}$ — isolation."],
          a: "$3.7$ V"
        }), ref: "Handbook p.380" },

      { q: `Inverter logic-level: input HIGH (3.3V), CMOS inverter output:`,
        choices: ["LOW (close to 0V)", "HIGH (3.3V)", "Floating", "1.65V"], correct: 0,
        solution: S({ c: "CMOS inverter: output = NOT(input).", s: ["High in → low out."], a: "LOW" }), ref: "Handbook p.389" },

      { q: `Diode in forward-biased silicon: drop:`,
        choices: ["$\\approx 0.7$ V", "$0$", "$1.4$ V", "$2$ V"], correct: 0,
        solution: S({ c: "Standard Si diode forward drop.", s: [""], a: "$0.7$ V" }), ref: "Handbook p.383" },

      { q: `Two diodes in series forward biased:`,
        choices: ["$\\approx 1.4$ V total drop", "$0.7$ V", "$0$", "$0.35$ V"], correct: 0,
        solution: S({ c: "Series: drops add.", s: ["$0.7 + 0.7 = 1.4$ V."], a: "$1.4$ V" }), ref: "Handbook p.383" },

      { q: `Zener regulator: how to choose series resistor $R_s$:`,
        choices: ["Limit current so $I_{Z,min} \\le I_Z \\le I_{Z,max}$ across all operating conditions", "Make $R_s = 0$", "$R_s$ should be $\\infty$", "Match load R"], correct: 0,
        solution: S({ c: "Design $R_s$ for safe Zener current under input variation + load variation.", s: ["Lower bound: ensure $I_Z \\ge I_{Z,min}$ at min input / max load.", "Upper bound: ensure $I_Z \\le I_{Z,max}$ at max input / no load."], a: "Stay in valid Zener current range" }), ref: "Handbook p.383" },

      { q: `Op-amp differentiator output for triangle wave input:`,
        choices: ["Square wave", "Triangle (same)", "Sinusoid", "Zero"], correct: 0,
        solution: S({ c: "Derivative of triangle wave: constant slopes alternating sign → square wave.", s: [""], a: "Square wave", v: "Conversely: integrator of square produces triangle." }), ref: "Handbook p.380" },
    ],

    // Ch 7 Linear Systems — 5 with pole-zero diagrams
    7: [
      { q: `Pole-zero plot of system. Identify behavior. ${svgPoleZero([[-3, 0]], [[-1, 0]])}`,
        choices: ["Stable 1st-order with zero at -1, pole at -3", "Unstable", "Oscillatory", "Integrator"], correct: 0,
        solution: S({ c: "Pole in LHP → stable. Zero affects shape but not stability.", s: ["$H(s) = K(s+1)/(s+3)$ form."], a: "Stable with lead behavior" }), ref: "Handbook p.365" },

      { q: `Pole-zero plot: ${svgPoleZero([[-1, 0], [-1, 0]], [])}`,
        choices: ["Critically damped (repeated real pole)", "Underdamped", "Overdamped", "Unstable"], correct: 0,
        solution: S({ c: "Repeated real pole at $-1$: $\\zeta = 1$ (critically damped).", s: ["Fastest non-oscillatory response."], a: "Critically damped" }), ref: "Handbook p.366" },

      { q: `Pole-zero plot: ${svgPoleZero([[-2, 0], [-5, 0]], [])}`,
        choices: ["Overdamped 2nd-order (real distinct poles, both negative)", "Underdamped", "Critically damped", "Unstable"], correct: 0,
        solution: S({ c: "Two distinct real poles in LHP: overdamped.", s: ["Dominant pole closer to origin (-2) determines bulk of response."], a: "Overdamped" }), ref: "Handbook p.366" },

      { q: `Pole-zero plot showing pole on positive real axis: ${svgPoleZero([[2, 0]], [[-1, 0]])}`,
        choices: ["Unstable (RHP pole grows exponentially)", "Stable due to zero", "Marginal", "Linear"], correct: 0,
        solution: S({ c: "RHP pole → instability. Zero can change shape but cannot stabilize.", s: [""], a: "Unstable" }), ref: "Handbook p.365" },

      { q: `Pole-zero diagram of integrator: ${svgPoleZero([[0, 0]], [])}`,
        choices: ["Pole at origin → integrator, type-1 contribution", "Stable", "Differentiator", "Constant"], correct: 0,
        solution: S({ c: "Pole at $s=0$: $1/s$ = integrator. Marginally stable.", s: ["In loop: adds one to system type."], a: "Integrator" }), ref: "Handbook p.56" },
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
  console.log(`Pack 10 (diagrams Digital/Control/Electronics/LinSys): +${added} → total ${total}`);
})();
