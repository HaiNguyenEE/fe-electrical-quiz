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
        solution: S({
          c: "An AND gate outputs 1 only when EVERY input is 1; otherwise 0. Boolean: $Y=A\\cdot B$.",
          s: [
            "<b>Step 1 — Inputs.</b> $A=1$, $B=1$.",
            "<b>Step 2 — AND rule.</b> $1\\cdot 1=1$.",
            "<b>Step 3 — Distractor audit.</b> $Y=0$ would need at least one 0 input; 'Undefined' and '$Y=A$' misread the gate."
          ],
          a: "$Y = 1$",
          v: "Row $11\\to 1$ is the ONLY high output in a 2-input AND ✓."
        }), ref: "Handbook p.389" },

      { q: `Truth table value Y for inputs $A=1$, $B=0$. ${svgAND()}`,
        choices: ["$Y = 0$", "$Y = 1$", "$Y$ = don't care", "Toggle"], correct: 0,
        solution: S({
          c: "AND outputs 1 only if all inputs are 1; a single 0 forces 0. $Y=A\\cdot B$.",
          s: [
            "<b>Step 1 — Inputs.</b> $A=1$, $B=0$.",
            "<b>Step 2 — AND rule.</b> $1\\cdot 0=0$.",
            "<b>Step 3 — Distractor audit.</b> $Y=1$ needs both inputs high; 'don't care' and 'Toggle' belong to other primitives."
          ],
          a: "$Y = 0$",
          v: "A 0 input is the absorbing element of AND — it dominates the output ✓."
        }), ref: "Handbook p.389" },

      { q: `For OR gate, Y when $A=0$, $B=1$. ${svgOR()}`,
        choices: ["$Y = 1$", "$Y = 0$", "$Y = X$", "$Y$ unknown"], correct: 0,
        solution: S({
          c: "An OR gate outputs 1 if ANY input is 1; it is 0 only when all inputs are 0. $Y=A+B$.",
          s: [
            "<b>Step 1 — Inputs.</b> $A=0$, $B=1$.",
            "<b>Step 2 — OR rule.</b> $0+1=1$.",
            "<b>Step 3 — Distractor audit.</b> $Y=0$ requires all-zero inputs; the symbolic options do not evaluate the gate."
          ],
          a: "$Y = 1$",
          v: "Only the $00\\to 0$ row is low in a 2-input OR; $01$ gives 1 ✓."
        }), ref: "Handbook p.389" },

      { q: `NAND output for $A=B=1$. ${svgNAND()}`,
        choices: ["$Y = 0$", "$Y = 1$", "$Y = A$", "$Y$ undefined"], correct: 0,
        solution: S({
          c: "NAND = NOT(AND): take the AND, then invert. NAND is 0 ONLY when all inputs are 1.",
          s: [
            "<b>Step 1 — AND first.</b> $1\\cdot 1=1$.",
            "<b>Step 2 — Invert.</b> $\\overline{1}=0$.",
            "<b>Step 3 — Distractor audit.</b> $Y=1$ holds for every input combination EXCEPT $11$; '$Y=A$' and 'undefined' misread the gate."
          ],
          a: "$Y = 0$",
          v: "NAND of all-ones is the gate's single 0 — the exact complement of AND's single 1 ✓."
        }), ref: "Handbook p.389" },

      { q: `XOR output for $A=B=1$. ${svgXOR()}`,
        choices: ["$Y = 0$", "$Y = 1$", "$Y = A$", "$Y$ undefined"], correct: 0,
        solution: S({
          c: "XOR (exclusive-OR) outputs 1 when the inputs DIFFER and 0 when they are the same: $Y=A\\oplus B$.",
          s: [
            "<b>Step 1 — Compare.</b> $A=B=1$ (same).",
            "<b>Step 2 — XOR rule.</b> Equal inputs → $1\\oplus 1=0$.",
            "<b>Step 3 — Distractor audit.</b> $Y=1$ would require differing inputs (01 or 10); '$Y=A$' and 'undefined' misread XOR."
          ],
          a: "$Y = 0$",
          v: "XOR is a difference detector: $00\\to0$, $11\\to0$, $01\\to1$, $10\\to1$ ✓."
        }), ref: "Handbook p.389" },

      { q: `Simplify Boolean function from K-map. ${svgKMap2(["1", "0", "1", "1"])}`,
        choices: ["$F = A + \\bar{B}$", "$F = AB$", "$F = A \\oplus B$", "$F = \\bar{A}$"], correct: 0,
        solution: S({
          c: "On a 2-variable K-map, group adjacent 1s into the largest power-of-two blocks; each block drops the variable that CHANGES across it.",
          s: [
            "<b>Step 1 — Read the cells.</b> $\\bar A\\bar B=1$, $\\bar AB=0$, $A\\bar B=1$, $AB=1$.",
            "<b>Step 2 — Group the $\\bar B$ pair.</b> $\\bar A\\bar B$ and $A\\bar B$ → $\\bar B$.",
            "<b>Step 3 — Group the $A$ pair.</b> $A\\bar B$ and $AB$ → $A$.",
            "<b>Step 4 — Distractor audit.</b> $AB$ covers one cell; $A\\oplus B$ needs the diagonal pattern; $\\bar A$ is contradicted by $\\bar AB=0$."
          ],
          a: "$F = A + \\bar{B}$",
          v: "Test $\\bar AB$ ($A=0,B=1$): $A+\\bar B=0+0=0$ ✓ — the only 0 cell."
        }), ref: "Handbook p.390" },

      { q: `Simplify from K-map. ${svgKMap2(["0", "1", "1", "1"])}`,
        choices: ["$F = A + B$", "$F = AB$", "$F = \\bar{A}\\bar{B}$", "$F = A \\oplus B$"], correct: 0,
        solution: S({
          c: "Group the 1s; when there is a single 0, the function is everything EXCEPT that one minterm.",
          s: [
            "<b>Step 1 — Read the cells.</b> Only $\\bar A\\bar B=0$; the other three are 1.",
            "<b>Step 2 — Cover the three 1s.</b> Use $A$ (bottom row) and $B$ (right column).",
            "<b>Step 3 — Distractor audit.</b> $AB$ covers one cell; $\\bar A\\bar B$ is the 0 cell itself; $A\\oplus B$ misses $AB=1$."
          ],
          a: "$F = A + B$",
          v: "$F=A+B$ is 0 only at $A=B=0$ ✓ — exactly the single 0 cell."
        }), ref: "Handbook p.390" },

      { q: `3-variable K-map: simplify. ${svgKMap3(["0", "1", "1", "0", "0", "1", "1", "0"])}`,
        choices: ["$F = A \\oplus B \\oplus C$ (or equivalently odd parity)", "$F = ABC$", "$F = A + B + C$", "$F = \\bar{A}\\bar{B}\\bar{C}$"], correct: 0,
        solution: S({
          c: "A 'checkerboard' of 1s on a K-map — where no two 1-cells are adjacent — cannot be grouped, and is the signature of the XOR / odd-parity function.",
          s: [
            "<b>Step 1 — List the 1-cells.</b> $001,010,100,111$ — every input combination with an ODD number of 1s.",
            "<b>Step 2 — No grouping possible.</b> No two 1-cells are adjacent, so no product-term block forms.",
            "<b>Step 3 — Identify.</b> Odd parity is exactly $F=A\\oplus B\\oplus C$.",
            "<b>Step 4 — Distractor audit.</b> $ABC$ is just minterm 111; $A+B+C$ would light seven cells; $\\bar A\\bar B\\bar C$ is minterm 000 (which is 0 here)."
          ],
          a: "$F = A \\oplus B \\oplus C$",
          v: "Spot-check $111$: $1\\oplus1\\oplus1=1$ ✓ (odd); $011$: $0\\oplus1\\oplus1=0$ ✓ (even) — matches the map."
        }), ref: "Handbook p.390" },

      { q: `D Flip-Flop: $D = 1$ at clock edge. Output Q after edge: ${svgDFF()}`,
        choices: ["$Q = 1$", "$Q = 0$", "Toggle", "Hold previous"], correct: 0,
        solution: S({
          c: "A D (data) flip-flop copies its $D$ input to $Q$ at the active clock edge: $Q^+=D$. Between edges it holds.",
          s: [
            "<b>Step 1 — Sample at the edge.</b> $Q^+=D$.",
            "<b>Step 2 — With $D=1$.</b> $Q^+=1$.",
            "<b>Step 3 — Distractor audit.</b> $Q=0$ would need $D=0$; 'Toggle' is JK behavior; 'Hold previous' happens only between edges, not at one."
          ],
          a: "$Q = 1$",
          v: "The defining property of a D-FF is that $Q$ FOLLOWS $D$ on each clock edge ✓."
        }), ref: "Handbook p.391" },

      { q: `JK Flip-Flop with $J=K=1$ at clock edge, previous $Q=0$. Output: ${svgJKFF()}`,
        choices: ["$Q = 1$ (toggled)", "$Q = 0$", "Hold", "Indeterminate"], correct: 0,
        solution: S({
          c: "A JK flip-flop with $J=K=1$ TOGGLES on each clock edge: $Q^+=\\bar Q$.",
          s: [
            "<b>Step 1 — Mode select.</b> $J=K=1$ → toggle.",
            "<b>Step 2 — Invert previous.</b> $Q^+=\\bar Q=\\bar 0=1$.",
            "<b>Step 3 — Distractor audit.</b> $Q=0$ would hold ($J=K=0$); 'Indeterminate' is the SR-latch forbidden state, not JK."
          ],
          a: "$Q = 1$ (toggled)",
          v: "JK eliminates the SR 'forbidden' state by defining $11$ as toggle ✓."
        }), ref: "Handbook p.391" },

      { q: `JK with $J=0, K=1$, previous $Q = 1$. Next Q: ${svgJKFF()}`,
        choices: ["$Q = 0$ (reset)", "$Q = 1$", "Toggle", "Hold"], correct: 0,
        solution: S({
          c: "JK truth table: $J=0,K=1$ is RESET, forcing $Q^+=0$ regardless of the previous state.",
          s: [
            "<b>Step 1 — Mode select.</b> $J=0,K=1$ → reset.",
            "<b>Step 2 — Output.</b> $Q^+=0$.",
            "<b>Step 3 — Distractor audit.</b> $Q=1$ would be SET ($J=1,K=0$); 'Toggle' is $J=K=1$; 'Hold' is $J=K=0$."
          ],
          a: "$Q = 0$ (reset)",
          v: "Mnemonic — $J$ sets, $K$ kills: only $K$ is high here, so the output is killed to 0 ✓."
        }), ref: "Handbook p.391" },

      { q: `How many states does 5-bit binary counter cycle through?`,
        choices: ["$32$", "$5$", "$16$", "$64$"], correct: 0,
        solution: S({
          c: "An $n$-bit binary counter cycles through $2^n$ distinct states (0 to $2^n-1$) before repeating.",
          s: [
            "<b>Step 1 — Formula.</b> States $=2^n$ with $n=5$.",
            "<b>Step 2 — Compute.</b> $2^5=32$.",
            "<b>Step 3 — Distractor audit.</b> $5$ confuses bit-count with state-count; $16=2^4$ and $64=2^6$ are off by one bit each way."
          ],
          a: "$32$",
          v: "Counts $00000$ through $11111$ = 32 values, then rolls over to $00000$ ✓."
        }), ref: "Handbook p.391" },

      { q: `XOR truth table: $A \\oplus 1$ equals: ${svgXOR()}`,
        choices: ["$\\bar{A}$ (inverter)", "$A$", "$1$", "$0$"], correct: 0,
        solution: S({
          c: "XOR with a constant 1 INVERTS the other input: $A\\oplus 1=\\bar A$ (whereas $A\\oplus 0=A$ leaves it unchanged).",
          s: [
            "<b>Step 1 — Try $A=0$.</b> $0\\oplus 1=1$.",
            "<b>Step 2 — Try $A=1$.</b> $1\\oplus 1=0$. The output is the inverse of $A$.",
            "<b>Step 3 — Distractor audit.</b> $A$ would be $A\\oplus 0$; constants $1$ or $0$ ignore the dependence on $A$."
          ],
          a: "$\\bar{A}$ (inverter)",
          v: "This 'controlled inverter' is why XOR gates appear in adders/ALUs to conditionally complement an operand ✓."
        }), ref: "Handbook p.389" },

      { q: `K-map cells corresponding to all minterms equal 1. Simplified F: ${svgKMap3(["1","1","1","1","1","1","1","1"])}`,
        choices: ["$F = 1$ (always true)", "$F = A$", "$F = 0$", "$F = ABC$"], correct: 0,
        solution: S({
          c: "If EVERY K-map cell is 1, the function is a tautology — true for all inputs: $F=1$.",
          s: [
            "<b>Step 1 — Observe.</b> All 8 cells = 1.",
            "<b>Step 2 — Group everything.</b> One block covering all cells leaves no variables → $F=1$.",
            "<b>Step 3 — Distractor audit.</b> $F=A$, $F=ABC$, and $F=0$ each leave some cells at the wrong value."
          ],
          a: "$F = 1$ (always true)",
          v: "A function that is 1 everywhere depends on no input — it is the constant 1 ✓."
        }), ref: "Handbook p.390" },

      { q: `K-map all 0s except cell A=1,B=1: ${svgKMap2(["0","0","0","1"])}`,
        choices: ["$F = AB$", "$F = A + B$", "$F = \\bar{A}\\bar{B}$", "$F = A \\oplus B$"], correct: 0,
        solution: S({
          c: "A single isolated 1 on a 2-variable map cannot be grouped; its product term uses ALL variables in the polarity set by that cell.",
          s: [
            "<b>Step 1 — Locate the lone 1.</b> Cell $A=1,B=1$.",
            "<b>Step 2 — Build the term.</b> Both variables are 1 there → product $AB$.",
            "<b>Step 3 — Distractor audit.</b> $A+B$ would light three cells; $\\bar A\\bar B$ is the opposite corner; $A\\oplus B$ is the off-diagonal pair."
          ],
          a: "$F = AB$",
          v: "$F=AB$ is 1 only at $A=B=1$ ✓ — exactly the single 1-cell."
        }), ref: "Handbook p.390" },
    ],

    // Ch 12 Control Systems — 10 with block diagrams
    12: [
      { q: `Find closed-loop transfer function $T(s) = Y(s)/R(s)$ for $G(s) = 10/(s+5)$, $H(s) = 1$. ${svgBlockFB("G(s)", "H(s)")}`,
        choices: ["$T(s) = 10/(s+15)$", "$10/(s+5)$", "$1/(s+5)$", "$15/s$"], correct: 0,
        solution: S({
          c: "Negative unity feedback collapses to $T(s)=\\dfrac{G}{1+GH}$. With $H=1$ this is $G/(1+G)$.",
          s: [
            "<b>Step 1 — Form the ratio.</b> $T=\\dfrac{10/(s+5)}{1+10/(s+5)}$.",
            "<b>Step 2 — Clear the fraction.</b> Multiply top and bottom by $(s+5)$: $T=\\dfrac{10}{(s+5)+10}=\\dfrac{10}{s+15}$.",
            "<b>Step 3 — Distractor audit.</b> $10/(s+5)$ is the open-loop $G$ (no feedback); $1/(s+5)$ drops the gain; $15/s$ mishandles the algebra."
          ],
          a: "$T(s) = 10/(s+15)$",
          v: "Feedback moved the pole from $-5$ to $-15$ → a faster closed-loop response ✓ (a hallmark of negative feedback)."
        }), ref: "Handbook p.365" },

      { q: `DC gain of $T(s) = 10/(s+15)$ (system above): ${svgBlockFB("G(s)", "H(s)")}`,
        choices: ["$2/3 \\approx 0.667$", "$10$", "$15$", "$1$"], correct: 0,
        solution: S({
          c: "The DC (steady-state) gain of a transfer function is its value at $s=0$: $T(0)$.",
          s: [
            "<b>Step 1 — Set $s=0$.</b> $T(0)=10/(0+15)$.",
            "<b>Step 2 — Compute.</b> $=10/15=2/3\\approx 0.667$.",
            "<b>Step 3 — Distractor audit.</b> $10$ is the numerator alone; $15$ is the pole magnitude; $1$ assumes unity DC gain."
          ],
          a: "$0.667$",
          v: "A unit step settles to $T(0)=0.667$; the final-value theorem gives the same ✓."
        }), ref: "Handbook p.366" },

      { q: `For $G(s) = K/(s(s+5))$, unity feedback. What is type number? ${svgBlockFB("G(s)", "1")}`,
        choices: ["Type 1 (one $s$ in denominator)", "Type 0", "Type 2", "Type 3"], correct: 0,
        solution: S({
          c: "System TYPE = the number of pure integrators (poles at $s=0$) in the open-loop $G(s)H(s)$.",
          s: [
            "<b>Step 1 — Count origin poles.</b> One factor of $s$ in the denominator.",
            "<b>Step 2 — Conclude.</b> One integrator → Type 1.",
            "<b>Step 3 — Distractor audit.</b> Type 0 has no $s$ at the origin; Type 2 needs $s^2$; Type 3 needs $s^3$."
          ],
          a: "Type 1",
          v: "Type 1 gives zero steady-state error to a STEP and a finite constant error to a RAMP ✓."
        }), ref: "Handbook p.366" },

      { q: `Pole-zero plot shown: system is. ${svgPoleZero([[-2, 0], [-2, 0]], [[-1, 0]])}`,
        choices: ["Stable (poles in LHP)", "Unstable", "Marginal", "Cannot tell"], correct: 0,
        solution: S({
          c: "A linear system is STABLE iff every pole lies in the left half-plane (negative real part). Zeros shape the response but never affect stability.",
          s: [
            "<b>Step 1 — Locate the poles.</b> Double pole at $s=-2$ (real, negative) → LHP.",
            "<b>Step 2 — Note the zero.</b> The zero at $s=-1$ changes the transient shape only.",
            "<b>Step 3 — Distractor audit.</b> 'Unstable' needs an RHP pole; 'Marginal' needs $j\\omega$-axis poles; 'Cannot tell' ignores that poles fully determine stability."
          ],
          a: "Stable (poles in LHP)",
          v: "Both poles at $-2<0$ → impulse response $\\sim e^{-2t}$ decays ✓."
        }), ref: "Handbook p.365" },

      { q: `Pole-zero plot: ${svgPoleZero([[-1, 2], [-1, -2]], [])}`,
        choices: ["Stable, underdamped (oscillatory decay)", "Unstable", "Overdamped", "Critically damped"], correct: 0,
        solution: S({
          c: "Complex-conjugate poles in the LHP give a stable but OSCILLATORY (underdamped) second-order response.",
          s: [
            "<b>Step 1 — Read the poles.</b> $s=-1\\pm j2$; real part $-1<0$ → stable.",
            "<b>Step 2 — Note the oscillation.</b> Nonzero imaginary part → damped ringing.",
            "<b>Step 3 — Parameters.</b> $\\omega_n=\\sqrt{1^2+2^2}=\\sqrt5$, $\\zeta=1/\\sqrt5\\approx 0.447$ ($0<\\zeta<1$ → underdamped).",
            "<b>Step 4 — Distractor audit.</b> 'Unstable' needs RHP; 'Overdamped' needs distinct real poles; 'Critically damped' needs a repeated real pole."
          ],
          a: "Stable, underdamped (oscillatory decay)",
          v: "$\\zeta\\approx 0.45$ lies in $(0,1)$ ✓ → ringing that decays as $e^{-t}$."
        }), ref: "Handbook p.366" },

      { q: `Pole-zero plot: ${svgPoleZero([[1, 0]], [])}`,
        choices: ["Unstable (pole in RHP)", "Stable", "Marginal", "Underdamped"], correct: 0,
        solution: S({
          c: "Any pole in the RIGHT half-plane (positive real part) makes the system unstable — its mode grows without bound.",
          s: [
            "<b>Step 1 — Locate the pole.</b> $s=+1$ → RHP.",
            "<b>Step 2 — Its mode.</b> $e^{+1\\cdot t}=e^{t}$ grows unbounded.",
            "<b>Step 3 — Distractor audit.</b> 'Stable' needs all poles in the LHP; 'Marginal' needs $j\\omega$-axis poles; 'Underdamped' describes complex LHP poles."
          ],
          a: "Unstable (pole in RHP)",
          v: "A single RHP pole is enough to destabilize, regardless of any other poles or zeros ✓."
        }), ref: "Handbook p.365" },

      { q: `Pole-zero plot: ${svgPoleZero([[0, 2], [0, -2]], [])}`,
        choices: ["Marginally stable (sustained oscillation)", "Stable decay", "Unstable", "DC"], correct: 0,
        solution: S({
          c: "Non-repeated poles exactly on the imaginary ($j\\omega$) axis give sustained, constant-amplitude oscillation — marginally stable.",
          s: [
            "<b>Step 1 — Read the poles.</b> $s=\\pm j2$ (zero real part).",
            "<b>Step 2 — Its mode.</b> $\\sim\\cos(2t)$ neither grows nor decays.",
            "<b>Step 3 — Distractor audit.</b> 'Stable decay' needs negative real parts; 'Unstable' needs RHP; 'DC' would be a pole at the origin."
          ],
          a: "Marginally stable (sustained oscillation)",
          v: "Oscillation at $\\omega=2$ rad/s with constant amplitude ✓ — the boundary between stable and unstable."
        }), ref: "Handbook p.365" },

      { q: `For unity feedback with $G(s) = 100/[(s+1)(s+10)]$, steady-state error to unit step: ${svgBlockFB("G(s)", "1")}`,
        choices: ["$e_{ss} = 1/11 \\approx 0.091$", "$0$", "$1/10$", "$\\infty$"], correct: 0,
        solution: S({
          c: "For a Type-0 system the step error is $e_{ss}=\\dfrac{1}{1+K_p}$, where $K_p=\\lim_{s\\to0}G(s)$ is the position constant.",
          s: [
            "<b>Step 1 — Position constant.</b> $K_p=\\dfrac{100}{(0+1)(0+10)}=\\dfrac{100}{10}=10$.",
            "<b>Step 2 — Step error.</b> $e_{ss}=\\dfrac{1}{1+10}=\\dfrac{1}{11}\\approx 0.091$.",
            "<b>Step 3 — Distractor audit.</b> $0$ would require a Type-1 system; $1/10$ forgets the '+1'; $\\infty$ is the ramp error for a Type-0 system."
          ],
          a: "$e_{ss} = 1/11 \\approx 0.091$",
          v: "A finite nonzero step error is exactly what a Type-0 system gives ✓ (only Type $\\ge 1$ drives step error to 0)."
        }), ref: "Handbook p.366" },

      { q: `Series combination of $G_1(s) = 2/(s+1)$ and $G_2(s) = 5/(s+3)$:`,
        choices: ["$G_1 G_2 = 10/[(s+1)(s+3)]$", "$G_1 + G_2 = (7s+11)/[(s+1)(s+3)]$", "$10/(s+4)$", "$7/[(s+1)(s+3)]$"], correct: 0,
        solution: S({
          c: "Two blocks in CASCADE (series) MULTIPLY: $G_1(s)G_2(s)$. Cascade is multiplication, not addition.",
          s: [
            "<b>Step 1 — Multiply.</b> $G_1G_2=\\dfrac{2\\cdot 5}{(s+1)(s+3)}=\\dfrac{10}{(s+1)(s+3)}$.",
            "<b>Step 2 — Equivalent expanded form.</b> $(s+1)(s+3)=s^2+4s+3$, so this equals $10/(s^2+4s+3)$.",
            "<b>Step 3 — Distractor audit.</b> $(7s+11)/[(s+1)(s+3)]$ is the SUM $G_1+G_2$ (parallel), not series; $10/(s+4)$ wrongly adds denominators; $7/[(s+1)(s+3)]$ adds numerators."
          ],
          a: "$G_1 G_2 = 10/[(s+1)(s+3)]$",
          v: "Factored and expanded forms are the same TF: $10/[(s+1)(s+3)]=10/(s^2+4s+3)$ ✓."
        }), ref: "Handbook p.365" },

      { q: `Settling time (2%) of system with $\\zeta = 0.5$, $\\omega_n = 10$ rad/s:`,
        choices: ["$t_s = 4/(\\zeta\\omega_n) = 0.8$ s", "$4$ s", "$10$ s", "$0.4$ s"], correct: 0,
        solution: S({
          c: "The 2% settling time of a standard second-order system is $t_s\\approx\\dfrac{4}{\\zeta\\omega_n}$ — set by the real part $\\zeta\\omega_n$ of the poles.",
          s: [
            "<b>Step 1 — Damping product.</b> $\\zeta\\omega_n=0.5(10)=5$.",
            "<b>Step 2 — Settling time.</b> $t_s=4/5=0.8$ s.",
            "<b>Step 3 — Distractor audit.</b> $4$ s forgets to divide by $\\zeta\\omega_n$; $10$ s uses $\\omega_n$ alone; $0.4$ s doubles the product."
          ],
          a: "$t_s = 4/(\\zeta\\omega_n) = 0.8$ s",
          v: "Pole real part $=\\zeta\\omega_n=5$, time constant $1/5=0.2$ s, and 4 time constants $=0.8$ s ✓."
        }), ref: "Handbook p.366" },
    ],

    // Ch 9 Electronics — 8 more with diagrams
    9: [
      { q: `Find $v_{out}$ for $v_{in} = 0.5$ V. ${svgNonInvOpAmp("90 kΩ", "10 kΩ")}`,
        choices: ["$+5$ V", "$-5$ V", "$+0.5$ V", "$+4.5$ V"], correct: 0,
        solution: S({
          c: "Non-inverting amplifier: $A_v=1+\\dfrac{R_f}{R_g}$, positive (no inversion). Then $v_{out}=A_v v_{in}$.",
          s: [
            "<b>Step 1 — Gain.</b> $A_v=1+90/10=10$.",
            "<b>Step 2 — Output.</b> $v_{out}=10(0.5)=+5$ V.",
            "<b>Step 3 — Distractor audit.</b> $-5$ V is the inverting result; $+0.5$ V uses unity gain; $+4.5$ V forgets the '+1' (uses $90/10\\cdot 0.5$)."
          ],
          a: "$+5$ V",
          v: "An inverting stage of gain 10 would give $-5$ V; the non-inverting sign is positive ✓."
        }), ref: "Handbook p.380" },

      { q: `Find required $R_f$ for non-inverting gain of $+11$ with $R_g = 1$ kΩ. ${svgNonInvOpAmp("R_f", "R_g")}`,
        choices: ["$R_f = 10$ kΩ", "$R_f = 11$ kΩ", "$R_f = 1$ kΩ", "$R_f = 100$ kΩ"], correct: 0,
        solution: S({
          c: "Solve the non-inverting gain $1+R_f/R_g=A_v$ for $R_f=(A_v-1)R_g$.",
          s: [
            "<b>Step 1 — Subtract the 1.</b> $R_f/R_g=11-1=10$.",
            "<b>Step 2 — Multiply by $R_g$.</b> $R_f=10(1\\text{k})=10$ kΩ.",
            "<b>Step 3 — Distractor audit.</b> $11$ kΩ forgets the '$-1$'; $1$ kΩ equals $R_g$ (gain 2); $100$ kΩ overshoots (gain 101)."
          ],
          a: "$R_f = 10$ kΩ",
          v: "Back-check: $1+10\\text{k}/1\\text{k}=1+10=11$ ✓."
        }), ref: "Handbook p.380" },

      { q: `Voltage follower (unity buffer): when $v_{in} = 3.7$ V, $v_{out}$ = ${svgNonInvOpAmp("0", "∞")}`,
        choices: ["$3.7$ V", "$0$", "$-3.7$ V", "$1$ V"], correct: 0,
        solution: S({
          c: "A voltage follower (buffer) is a non-inverting amp with $R_f=0$ and $R_g=\\infty$, giving unity gain $A_v=1$, so $v_{out}=v_{in}$.",
          s: [
            "<b>Step 1 — Unity gain.</b> $A_v=1+0/\\infty=1$.",
            "<b>Step 2 — Output.</b> $v_{out}=1(3.7)=3.7$ V.",
            "<b>Step 3 — Distractor audit.</b> $0$ and $1$ V ignore the input; $-3.7$ V would need an inverting stage."
          ],
          a: "$3.7$ V",
          v: "Its purpose is impedance buffering: very high $Z_{in}$, very low $Z_{out}$, gain exactly 1 ✓."
        }), ref: "Handbook p.380" },

      { q: `Inverter logic-level: input HIGH (3.3V), CMOS inverter output:`,
        choices: ["LOW (close to 0V)", "HIGH (3.3V)", "Floating", "1.65V"], correct: 0,
        solution: S({
          c: "A CMOS inverter outputs the LOGICAL COMPLEMENT of its input: HIGH in → LOW out, and vice-versa.",
          s: [
            "<b>Step 1 — Input.</b> HIGH (3.3 V → logic 1).",
            "<b>Step 2 — Invert.</b> Output = NOT(1) = 0 → near 0 V.",
            "<b>Step 3 — Distractor audit.</b> 'HIGH' ignores inversion; 'Floating' needs a disconnected output; '1.65 V' is the mid-supply threshold, not a logic level."
          ],
          a: "LOW (close to 0V)",
          v: "For a high input the pull-up PMOS turns off and the pull-down NMOS turns on → output pulled to ground ✓."
        }), ref: "Handbook p.389" },

      { q: `Diode in forward-biased silicon: drop:`,
        choices: ["$\\approx 0.7$ V", "$0$", "$1.4$ V", "$2$ V"], correct: 0,
        solution: S({
          c: "A forward-biased silicon p-n junction drops about 0.7 V (the constant-voltage-drop model).",
          s: [
            "<b>Step 1 — Identify.</b> Silicon junction, forward biased.",
            "<b>Step 2 — Standard drop.</b> $\\approx 0.7$ V (vs $\\approx 0.3$ V for germanium).",
            "<b>Step 3 — Distractor audit.</b> $0$ V is the ideal-diode model (no drop); $1.4$ V is two diodes; $2$ V is closer to an LED."
          ],
          a: "$\\approx 0.7$ V",
          v: "The 0.7 V is roughly constant over a wide current range — the basis of the constant-drop model ✓."
        }), ref: "Handbook p.383" },

      { q: `Two diodes in series forward biased:`,
        choices: ["$\\approx 1.4$ V total drop", "$0.7$ V", "$0$", "$0.35$ V"], correct: 0,
        solution: S({
          c: "Forward voltage drops ADD for diodes in series (the same current flows through each): $V=nV_D$.",
          s: [
            "<b>Step 1 — Count.</b> Two silicon diodes: $n=2$, $V_D=0.7$ V.",
            "<b>Step 2 — Add.</b> $2(0.7)=1.4$ V.",
            "<b>Step 3 — Distractor audit.</b> $0.7$ V counts one diode; $0$ V ignores the drops; $0.35$ V halves instead of adding."
          ],
          a: "$\\approx 1.4$ V total drop",
          v: "Series elements share current and sum their voltages (KVL): $0.7+0.7=1.4$ V ✓."
        }), ref: "Handbook p.383" },

      { q: `Zener regulator: how to choose series resistor $R_s$:`,
        choices: ["Limit current so $I_{Z,min} \\le I_Z \\le I_{Z,max}$ across all operating conditions", "Make $R_s = 0$", "$R_s$ should be $\\infty$", "Match load R"], correct: 0,
        solution: S({
          c: "The Zener series resistor $R_s$ must keep the Zener current within its valid band $I_{Z,min}\\le I_Z\\le I_{Z,max}$ across ALL input-voltage and load conditions.",
          s: [
            "<b>Step 1 — Lower bound.</b> At minimum input / maximum load, ensure $I_Z\\ge I_{Z,min}$ so regulation holds.",
            "<b>Step 2 — Upper bound.</b> At maximum input / no load, ensure $I_Z\\le I_{Z,max}$ so the Zener is not over-dissipated.",
            "<b>Step 3 — Distractor audit.</b> $R_s=0$ gives unlimited current (Zener burns out); $R_s=\\infty$ delivers no current; 'match load R' is unrelated to the current band."
          ],
          a: "Limit current so $I_{Z,min} \\le I_Z \\le I_{Z,max}$ across all operating conditions",
          v: "Both worst cases — min-input/max-load and max-input/no-load — must land inside the Zener's current range ✓."
        }), ref: "Handbook p.383" },

      { q: `Op-amp differentiator output for triangle wave input:`,
        choices: ["Square wave", "Triangle (same)", "Sinusoid", "Zero"], correct: 0,
        solution: S({
          c: "An op-amp differentiator outputs $v_{out}\\propto -\\dfrac{dv_{in}}{dt}$ — proportional to the input's slope.",
          s: [
            "<b>Step 1 — Slope of a triangle.</b> A triangle wave has piecewise-CONSTANT slope that flips sign each half-period.",
            "<b>Step 2 — Differentiate.</b> Constant slopes → constant output levels that alternate sign → a SQUARE wave.",
            "<b>Step 3 — Distractor audit.</b> 'Triangle' is the INTEGRATOR's output for a square input; 'Sinusoid' needs a sinusoidal input; 'Zero' ignores the nonzero slopes."
          ],
          a: "Square wave",
          v: "Inverse relationship: an integrator turns a square wave back into a triangle ✓."
        }), ref: "Handbook p.380" },
    ],

    // Ch 7 Linear Systems — 5 with pole-zero diagrams
    7: [
      { q: `Pole-zero plot of system. Identify behavior. ${svgPoleZero([[-3, 0]], [[-1, 0]])}`,
        choices: ["Stable 1st-order with zero at -1, pole at -3", "Unstable", "Oscillatory", "Integrator"], correct: 0,
        solution: S({
          c: "Stability depends ONLY on pole location: a pole in the LHP is stable. A zero changes the response shape (here a lead-type effect) but not stability.",
          s: [
            "<b>Step 1 — Pole.</b> $s=-3$ (negative real) → LHP → stable.",
            "<b>Step 2 — Zero.</b> $s=-1$: $H(s)=K(s+1)/(s+3)$, a lead network (zero nearer the origin than the pole).",
            "<b>Step 3 — Distractor audit.</b> 'Unstable' needs an RHP pole; 'Oscillatory' needs complex poles; 'Integrator' needs a pole at the origin."
          ],
          a: "Stable 1st-order with zero at -1, pole at -3",
          v: "Pole mode $e^{-3t}$ decays ✓; the zero at $-1$ adds phase lead, useful for compensation."
        }), ref: "Handbook p.365" },

      { q: `Pole-zero plot: ${svgPoleZero([[-1, 0], [-1, 0]], [])}`,
        choices: ["Critically damped (repeated real pole)", "Underdamped", "Overdamped", "Unstable"], correct: 0,
        solution: S({
          c: "A REPEATED real pole corresponds to $\\zeta=1$ — critically damped: the fastest response with NO overshoot.",
          s: [
            "<b>Step 1 — Poles.</b> Double pole at $s=-1$ (real, equal).",
            "<b>Step 2 — Damping.</b> Equal real poles ⇒ $\\zeta=1$ → critically damped.",
            "<b>Step 3 — Distractor audit.</b> 'Underdamped' needs complex poles; 'Overdamped' needs distinct real poles; 'Unstable' needs an RHP pole."
          ],
          a: "Critically damped (repeated real pole)",
          v: "Critically damped is the borderline ($\\zeta=1$) between oscillatory ($\\zeta<1$) and sluggish ($\\zeta>1$) ✓."
        }), ref: "Handbook p.366" },

      { q: `Pole-zero plot: ${svgPoleZero([[-2, 0], [-5, 0]], [])}`,
        choices: ["Overdamped 2nd-order (real distinct poles, both negative)", "Underdamped", "Critically damped", "Unstable"], correct: 0,
        solution: S({
          c: "Two DISTINCT real poles in the LHP give an overdamped ($\\zeta>1$) response — no oscillation, dominated by the slower pole.",
          s: [
            "<b>Step 1 — Poles.</b> $s=-2$ and $s=-5$ (real, distinct, negative).",
            "<b>Step 2 — Damping.</b> Distinct real poles ⇒ $\\zeta>1$ → overdamped.",
            "<b>Step 3 — Dominant pole.</b> The pole nearer the origin ($-2$) dominates, so the response settles roughly like $e^{-2t}$.",
            "<b>Step 4 — Distractor audit.</b> 'Underdamped' needs complex poles; 'Critically damped' needs equal poles; 'Unstable' needs RHP."
          ],
          a: "Overdamped 2nd-order (real distinct poles, both negative)",
          v: "The $-5$ pole decays $\\sim e^{-5t}$ (fast, soon negligible); the $-2$ pole dominates the tail ✓."
        }), ref: "Handbook p.366" },

      { q: `Pole-zero plot showing pole on positive real axis: ${svgPoleZero([[2, 0]], [[-1, 0]])}`,
        choices: ["Unstable (RHP pole grows exponentially)", "Stable due to zero", "Marginal", "Linear"], correct: 0,
        solution: S({
          c: "A pole in the RHP makes the system unstable; a zero — even a 'nice' LHP one — cannot cancel that instability.",
          s: [
            "<b>Step 1 — Pole.</b> $s=+2$ → RHP → unstable mode $e^{2t}$.",
            "<b>Step 2 — Zero.</b> $s=-1$ reshapes the response but cannot stabilize it.",
            "<b>Step 3 — Distractor audit.</b> 'Stable due to zero' is the classic trap (zeros never stabilize); 'Marginal' needs $j\\omega$ poles; 'Linear' is not a stability category."
          ],
          a: "Unstable (RHP pole grows exponentially)",
          v: "Only moving the POLE into the LHP stabilizes; a zero changes numerator dynamics only ✓."
        }), ref: "Handbook p.365" },

      { q: `Pole-zero diagram of integrator: ${svgPoleZero([[0, 0]], [])}`,
        choices: ["Pole at origin → integrator, type-1 contribution", "Stable", "Differentiator", "Constant"], correct: 0,
        solution: S({
          c: "A single pole at the origin ($s=0$) is a pure integrator $1/s$ — marginally stable — and it adds one to the system type in a loop.",
          s: [
            "<b>Step 1 — Identify.</b> Pole at $s=0$ → transfer function $1/s$ = integrator.",
            "<b>Step 2 — Behavior.</b> Its step response ramps without bound (marginally stable).",
            "<b>Step 3 — Distractor audit.</b> A decaying 'Stable' response needs a LHP pole; a 'Differentiator' is $s$ (a zero at the origin); a 'Constant' has no $s$ dependence."
          ],
          a: "Pole at origin → integrator, type-1 contribution",
          v: "In a feedback loop this integrator raises the system type by 1, driving step error to zero ✓."
        }), ref: "Handbook p.56" },
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
