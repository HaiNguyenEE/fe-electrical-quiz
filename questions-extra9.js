// FE Electrical Question Bank — Extension Pack 9
// Circuit problems WITH SVG schematic diagrams (addressing diagram gap)
(function () {
  if (typeof QUESTION_BANK === "undefined" || typeof S === "undefined") return;

  // ===== SVG helper templates for circuit elements =====
  // Use single quotes inside SVG attributes (so they work in double-quoted JS strings)

  // Series RLC circuit SVG
  const svgSeriesRLC = (Vs, R, L, C) => `<svg viewBox='0 0 320 180' width='320'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<rect x='40' y='30' width='200' height='100'/>
<circle cx='40' cy='80' r='18'/><text x='40' y='84' text-anchor='middle' fill='#1f4e79' stroke='none' font-size='14'>+</text><text x='40' y='115' text-anchor='middle' fill='#1f4e79' stroke='none' font-size='12'>${Vs}V</text>
<rect x='90' y='22' width='40' height='16' fill='#fff'/><text x='110' y='15' text-anchor='middle' fill='#1f4e79' stroke='none' font-size='12'>R=${R}Ω</text>
<g transform='translate(140,22)'><path d='M0 8 q5 -10 10 0 q5 -10 10 0 q5 -10 10 0 q5 -10 10 0' fill='none'/></g>
<text x='165' y='15' text-anchor='middle' fill='#1f4e79' stroke='none' font-size='12'>L=${L}</text>
<line x1='195' y1='14' x2='195' y2='30'/><line x1='185' y1='30' x2='205' y2='30'/><line x1='185' y1='34' x2='205' y2='34'/><line x1='195' y1='34' x2='195' y2='42'/>
<text x='195' y='15' text-anchor='middle' fill='#1f4e79' stroke='none' font-size='12'>C=${C}</text>
</g></svg>`;

  // Simple series resistor circuit
  const svgSeries2R = (V, R1, R2) => `<svg viewBox='0 0 280 160' width='280'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<rect x='40' y='40' width='200' height='80'/>
<circle cx='40' cy='80' r='16'/><text x='40' y='84' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>${V}V</text>
<rect x='80' y='32' width='40' height='16' fill='#fff'/><text x='100' y='25' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>${R1}</text>
<rect x='150' y='32' width='40' height='16' fill='#fff'/><text x='170' y='25' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>${R2}</text>
<text x='220' y='80' stroke='none' fill='#1f4e79' font-size='13'>→I</text>
</g></svg>`;

  // Parallel 2-R + source
  const svgParallel2R = (V, R1, R2) => `<svg viewBox='0 0 280 180' width='280'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<line x1='40' y1='40' x2='220' y2='40'/><line x1='40' y1='140' x2='220' y2='140'/>
<circle cx='40' cy='90' r='16'/><line x1='40' y1='40' x2='40' y2='74'/><line x1='40' y1='106' x2='40' y2='140'/>
<text x='40' y='94' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>${V}V</text>
<rect x='120' y='65' width='20' height='50' fill='#fff'/><text x='150' y='95' stroke='none' fill='#1f4e79' font-size='12'>R₁=${R1}</text>
<line x1='130' y1='40' x2='130' y2='65'/><line x1='130' y1='115' x2='130' y2='140'/>
<rect x='190' y='65' width='20' height='50' fill='#fff'/><text x='220' y='95' stroke='none' fill='#1f4e79' font-size='12'>R₂=${R2}</text>
<line x1='200' y1='40' x2='200' y2='65'/><line x1='200' y1='115' x2='200' y2='140'/>
</g></svg>`;

  // Voltage divider
  const svgVDivider = (V, R1, R2) => `<svg viewBox='0 0 280 200' width='280'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<line x1='40' y1='40' x2='40' y2='160'/><line x1='40' y1='40' x2='180' y2='40'/><line x1='40' y1='160' x2='180' y2='160'/>
<line x1='180' y1='40' x2='180' y2='75'/><line x1='180' y1='125' x2='180' y2='160'/>
<rect x='165' y='75' width='30' height='20' fill='#fff'/><text x='220' y='90' stroke='none' fill='#1f4e79' font-size='12'>R₁=${R1}Ω</text>
<rect x='165' y='105' width='30' height='20' fill='#fff'/><text x='220' y='120' stroke='none' fill='#1f4e79' font-size='12'>R₂=${R2}Ω</text>
<line x1='180' y1='95' x2='180' y2='105'/>
<text x='15' y='100' stroke='none' fill='#1f4e79' font-size='13'>${V}V</text>
<text x='250' y='100' stroke='none' fill='#1f4e79' font-size='11'>V₂?</text>
<line x1='195' y1='115' x2='240' y2='115' stroke-dasharray='3 3'/>
</g></svg>`;

  // RC circuit (charging)
  const svgRC = (V, R, C) => `<svg viewBox='0 0 280 160' width='280'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<rect x='40' y='40' width='200' height='80'/>
<circle cx='40' cy='80' r='16'/><text x='40' y='84' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>${V}V</text>
<rect x='80' y='32' width='40' height='16' fill='#fff'/><text x='100' y='25' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>R=${R}</text>
<line x1='180' y1='65' x2='200' y2='65'/><line x1='180' y1='95' x2='200' y2='95'/><line x1='190' y1='40' x2='190' y2='65'/><line x1='190' y1='95' x2='190' y2='120'/>
<text x='190' y='25' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>C=${C}</text>
</g></svg>`;

  // Inverting op-amp
  const svgInvOpAmp = (Rf, Rin) => `<svg viewBox='0 0 320 180' width='320'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<polygon points='160,50 160,130 230,90' fill='#fff'/>
<text x='170' y='75' stroke='none' fill='#1f4e79' font-size='14'>−</text><text x='170' y='115' stroke='none' fill='#1f4e79' font-size='14'>+</text>
<line x1='60' y1='75' x2='110' y2='75'/>
<rect x='110' y='67' width='40' height='16' fill='#fff'/><text x='130' y='60' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>R_in=${Rin}</text>
<line x1='150' y1='75' x2='160' y2='75'/>
<line x1='150' y1='75' x2='150' y2='30'/><line x1='150' y1='30' x2='230' y2='30'/>
<rect x='180' y='22' width='40' height='16' fill='#fff'/><text x='200' y='15' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>R_f=${Rf}</text>
<line x1='230' y1='30' x2='230' y2='90'/>
<line x1='230' y1='90' x2='280' y2='90'/>
<text x='40' y='80' stroke='none' fill='#1f4e79' font-size='12'>v_in</text>
<text x='285' y='95' stroke='none' fill='#1f4e79' font-size='12'>v_out</text>
<line x1='160' y1='115' x2='100' y2='115'/><line x1='100' y1='115' x2='100' y2='150'/>
<polygon points='95,150 105,150 100,160' fill='#1f4e79'/>
</g></svg>`;

  // Thevenin (with source + 2 R)
  const svgThevenin = (Vs, R1, R2) => `<svg viewBox='0 0 320 180' width='320'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<rect x='40' y='40' width='200' height='80'/>
<circle cx='40' cy='80' r='16'/><text x='40' y='84' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>${Vs}V</text>
<rect x='80' y='32' width='40' height='16' fill='#fff'/><text x='100' y='25' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>${R1}Ω</text>
<line x1='180' y1='40' x2='180' y2='65'/>
<rect x='170' y='65' width='20' height='40' fill='#fff'/><text x='205' y='90' stroke='none' fill='#1f4e79' font-size='11'>${R2}Ω</text>
<line x1='180' y1='105' x2='180' y2='120'/>
<line x1='240' y1='65' x2='260' y2='65'/><line x1='240' y1='95' x2='260' y2='95'/>
<circle cx='260' cy='65' r='3' fill='#1f4e79'/><circle cx='260' cy='95' r='3' fill='#1f4e79'/>
<text x='270' y='70' stroke='none' fill='#1f4e79' font-size='12'>A</text>
<text x='270' y='100' stroke='none' fill='#1f4e79' font-size='12'>B</text>
</g></svg>`;

  // BJT common-emitter
  const svgCE_BJT = (Vcc, Rc, Rb) => `<svg viewBox='0 0 300 220' width='300'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<line x1='150' y1='20' x2='150' y2='200'/>
<text x='160' y='25' stroke='none' fill='#1f4e79' font-size='12'>+V_CC=${Vcc}V</text>
<rect x='135' y='55' width='30' height='20' fill='#fff'/><text x='180' y='70' stroke='none' fill='#1f4e79' font-size='11'>R_C=${Rc}</text>
<circle cx='150' cy='115' r='25' fill='#fff'/>
<line x1='130' y1='115' x2='150' y2='115'/>
<line x1='150' y1='95' x2='160' y2='105'/><polygon points='155,103 165,99 162,108' fill='#1f4e79'/>
<line x1='150' y1='135' x2='160' y2='125'/>
<line x1='150' y1='150' x2='150' y2='200'/>
<line x1='40' y1='115' x2='130' y2='115'/>
<rect x='65' y='107' width='40' height='16' fill='#fff'/><text x='85' y='100' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>R_B=${Rb}</text>
<text x='15' y='120' stroke='none' fill='#1f4e79' font-size='12'>v_in</text>
<line x1='40' y1='195' x2='240' y2='195'/>
<polygon points='235,195 245,195 240,205' fill='#1f4e79'/>
<text x='245' y='208' stroke='none' fill='#1f4e79' font-size='11'>GND</text>
<line x1='180' y1='65' x2='220' y2='65'/><line x1='220' y1='65' x2='220' y2='115'/><line x1='220' y1='115' x2='180' y2='115'/>
<text x='225' y='90' stroke='none' fill='#1f4e79' font-size='11'>v_out</text>
</g></svg>`;

  // 3-phase Y source
  const svgWyeSrc = () => `<svg viewBox='0 0 280 200' width='280'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<circle cx='140' cy='100' r='3' fill='#1f4e79'/><text x='150' y='105' stroke='none' fill='#1f4e79' font-size='10'>N</text>
<line x1='140' y1='100' x2='140' y2='40'/><circle cx='140' cy='40' r='14'/><text x='140' y='44' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>V_a</text>
<line x1='140' y1='100' x2='80' y2='160'/><circle cx='80' cy='160' r='14'/><text x='80' y='164' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>V_b</text>
<line x1='140' y1='100' x2='200' y2='160'/><circle cx='200' cy='160' r='14'/><text x='200' y='164' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='11'>V_c</text>
<line x1='140' y1='26' x2='140' y2='15'/><circle cx='140' cy='12' r='3' fill='#1f4e79'/><text x='150' y='15' stroke='none' fill='#1f4e79' font-size='10'>a</text>
<line x1='70' y1='168' x2='60' y2='178'/><circle cx='58' cy='180' r='3' fill='#1f4e79'/><text x='40' y='185' stroke='none' fill='#1f4e79' font-size='10'>b</text>
<line x1='210' y1='168' x2='220' y2='178'/><circle cx='222' cy='180' r='3' fill='#1f4e79'/><text x='225' y='185' stroke='none' fill='#1f4e79' font-size='10'>c</text>
</g></svg>`;

  // RL circuit
  const svgRL = (V, R, L) => `<svg viewBox='0 0 280 160' width='280'><g stroke='#1f4e79' fill='none' stroke-width='1.8'>
<rect x='40' y='40' width='200' height='80'/>
<circle cx='40' cy='80' r='16'/><text x='40' y='84' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='13'>${V}V</text>
<rect x='80' y='32' width='40' height='16' fill='#fff'/><text x='100' y='25' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>R=${R}</text>
<g transform='translate(160,30)'><path d='M0 10 q4 -10 8 0 q4 -10 8 0 q4 -10 8 0 q4 -10 8 0' fill='none'/></g>
<text x='180' y='25' text-anchor='middle' stroke='none' fill='#1f4e79' font-size='12'>L=${L}</text>
</g></svg>`;

  const P = {
    // Ch 6 Circuit Analysis — 18 problems WITH diagrams
    6: [
      { q: `Find the current through the loop. ${svgSeries2R(24, "6Ω", "6Ω")}`,
        choices: ["$2$ A", "$4$ A", "$1$ A", "$8$ A"], correct: 0,
        solution: S({
          c: "A single series loop carries ONE current. Resistances in series add: $R_{eq}=R_1+R_2$, then Ohm's law gives $I=V/R_{eq}$.",
          s: [
            "<b>Step 1 — Combine in series.</b> $R_{eq}=6+6=12$ Ω.",
            "<b>Step 2 — Ohm's law.</b> $I=V/R_{eq}=24/12=2$ A.",
            "<b>Step 3 — Distractor audit.</b> $4$ A uses a single $6$ Ω ($24/6$); $1$ A doubles to $24$ Ω; $8$ A divides by $3$."
          ],
          a: "$I = 2$ A",
          v: "Power balance: $P=I^2R_{eq}=2^2(12)=48$ W $=VI=24(2)=48$ W ✓."
        }), ref: "Handbook p.356" },

      { q: `Find the voltage $V_2$ across $R_2$. ${svgVDivider(20, 4, 6)}`,
        choices: ["$12$ V", "$8$ V", "$20$ V", "$10$ V"], correct: 0,
        solution: S({
          c: "A series voltage divider splits the source in proportion to resistance: $V_2=V_{in}\\,\\dfrac{R_2}{R_1+R_2}$.",
          s: [
            "<b>Step 1 — Total resistance.</b> $R_1+R_2=4+6=10$ Ω.",
            "<b>Step 2 — Apply the divider.</b> $V_2=20\\cdot 6/10=12$ V.",
            "<b>Step 3 — Distractor audit.</b> $8$ V is $V_1$ (across $R_1$); $20$ V ignores the divider; $10$ V assumes an equal split."
          ],
          a: "$V_2 = 12$ V",
          v: "KVL: $V_1+V_2=8+12=20$ V ✓; loop current $20/10=2$ A across $6$ Ω gives $12$ V ✓."
        }), ref: "Handbook p.356" },

      { q: `Find total current drawn from the source. ${svgParallel2R(12, "4Ω", "12Ω")}`,
        choices: ["$4$ A", "$3$ A", "$1$ A", "$16$ A"], correct: 0,
        solution: S({
          c: "Parallel resistors share the same voltage; combine by product-over-sum $R_{eq}=\\dfrac{R_1R_2}{R_1+R_2}$, then $I=V/R_{eq}$.",
          s: [
            "<b>Step 1 — Parallel combine.</b> $R_{eq}=4\\cdot 12/(4+12)=48/16=3$ Ω.",
            "<b>Step 2 — Source current.</b> $I=V/R_{eq}=12/3=4$ A.",
            "<b>Step 3 — Distractor audit.</b> $3$ A is only $I_1$ ($12/4$); $1$ A is only $I_2$ ($12/12$); $16$ A puts $R_1+R_2$ in the numerator."
          ],
          a: "$I_{total} = 4$ A",
          v: "KCL: $I_1+I_2=12/4+12/12=3+1=4$ A ✓."
        }), ref: "Handbook p.356" },

      { q: `Find total impedance of series RLC at $\\omega = 1000$ rad/s. ${svgSeriesRLC(100, 10, "50mH", "10µF")}`,
        choices: ["$Z = 10 - j50$ Ω (capacitive)", "$Z = 10 + j50$ Ω", "$10$ Ω", "$10+j150$"], correct: 0,
        solution: S({
          c: "Series RLC impedance is $Z=R+j(X_L-X_C)$ with $X_L=\\omega L$ and $X_C=1/(\\omega C)$. When $X_C>X_L$ the net reactance is negative (capacitive).",
          s: [
            "<b>Step 1 — Inductive reactance.</b> $X_L=\\omega L=1000(0.05)=50$ Ω.",
            "<b>Step 2 — Capacitive reactance.</b> $X_C=1/(\\omega C)=1/(1000\\cdot 10^{-5})=100$ Ω.",
            "<b>Step 3 — Combine.</b> $Z=10+j(50-100)=10-j50$ Ω.",
            "<b>Step 4 — Distractor audit.</b> $10+j50$ flips the sign of the net reactance; $10$ Ω and $50$ Ω keep only one term and drop the imaginary part."
          ],
          a: "$Z = 10 - j50$ Ω (capacitive)",
          v: "$|Z|=\\sqrt{10^2+50^2}=\\sqrt{2600}\\approx 51$ Ω, angle $\\arctan(-50/10)=-78.7°$ ✓ — current leads voltage."
        }), ref: "Handbook p.360" },

      { q: `Compute $V_{Th}$ (open-circuit) and $R_{Th}$ at terminals A-B. ${svgThevenin(30, 10, 20)}`,
        choices: ["$V_{Th}=20$V, $R_{Th}=6.67$Ω", "$V_{Th}=30$V, $R_{Th}=30$Ω", "$V_{Th}=10$V, $R_{Th}=20$Ω", "$V_{Th}=20$V, $R_{Th}=20$Ω"], correct: 0,
        solution: S({
          c: "Open-circuit voltage at A-B comes from voltage division; $R_{Th}$ is the resistance seen with the independent source replaced by a short.",
          s: [
            "<b>Step 1 — $V_{Th}$ (terminals open).</b> No load current, so $V_{Th}=30\\cdot 20/(10+20)=20$ V across $R_2$.",
            "<b>Step 2 — $R_{Th}$ (source shorted).</b> $R_1\\parallel R_2=10\\cdot 20/30=6.67$ Ω.",
            "<b>Step 3 — Distractor audit.</b> $30$ V/$30$ Ω forgets the divider; $10$ V/$20$ Ω takes $R_1$'s drop and $R_2$ alone; $20$ V/$20$ Ω uses $R_2$ as $R_{Th}$ (ignores the parallel short)."
          ],
          a: "$V_{Th}=20$ V, $R_{Th}=6.67$ Ω",
          v: "Max-power load $R_L=R_{Th}=6.67$ Ω delivers $P_{max}=V_{Th}^2/(4R_{Th})=400/26.7=15$ W ✓."
        }), ref: "Handbook p.357" },

      { q: `Time constant of the RC circuit. ${svgRC(12, "1 kΩ", "10 µF")}`,
        choices: ["$10$ ms", "$1$ ms", "$100$ µs", "$1$ s"], correct: 0,
        solution: S({
          c: "A single R charging a single C has time constant $\\tau=RC$ — the time to reach 63% of the final voltage.",
          s: [
            "<b>Step 1 — Convert units.</b> $R=1000$ Ω, $C=10$ µF $=10^{-5}$ F.",
            "<b>Step 2 — Multiply.</b> $\\tau=RC=1000\\cdot 10^{-5}=10^{-2}$ s $=10$ ms.",
            "<b>Step 3 — Distractor audit.</b> $1$ ms drops a decade on $C$; $100$ µs drops two decades; $1$ s ignores the $10^{-5}$ scale."
          ],
          a: "$\\tau = 10$ ms",
          v: "After $5\\tau=50$ ms the capacitor is $>99\\%$ charged ✓ — the standard 'fully charged' rule of thumb."
        }), ref: "Handbook p.358" },

      { q: `Capacitor voltage at $t = 5$ ms (initially 0V) in the RC circuit. ${svgRC(12, "1 kΩ", "10 µF")}`,
        choices: ["$\\approx 4.72$ V", "$12$ V", "$0$", "$6$ V"], correct: 0,
        solution: S({
          c: "A charging capacitor follows $v_C(t)=V_s\\left(1-e^{-t/\\tau}\\right)$, rising from 0 toward the source voltage.",
          s: [
            "<b>Step 1 — Time constant.</b> $\\tau=RC=10$ ms (same $1$ kΩ, $10$ µF).",
            "<b>Step 2 — Normalized time.</b> $t/\\tau=5/10=0.5$.",
            "<b>Step 3 — Evaluate.</b> $v_C=12(1-e^{-0.5})=12(1-0.6065)=12(0.3935)=4.72$ V.",
            "<b>Step 4 — Distractor audit.</b> $12$ V assumes fully charged; $0$ V assumes uncharged; $6$ V wrongly treats half a time constant as half voltage."
          ],
          a: "$v_C \\approx 4.72$ V",
          v: "At $t=\\tau$ it would reach $12(1-0.368)=7.6$ V; at $0.5\\tau$ we are below that, and $4.72<7.6$ ✓."
        }), ref: "Handbook p.358" },

      { q: `Steady-state current in this RL circuit (DC source). ${svgRL(12, "4Ω", "100mH")}`,
        choices: ["$3$ A", "$0$", "$12$ A", "$1.2$ A"], correct: 0,
        solution: S({
          c: "In DC steady state the inductor current is constant, so $v_L=L\\,di/dt=0$ — the inductor behaves as a short circuit. Then $I=V/R$.",
          s: [
            "<b>Step 1 — Inductor becomes a short.</b> $di/dt=0\\Rightarrow v_L=0$.",
            "<b>Step 2 — Ohm's law on R.</b> $I_{ss}=V/R=12/4=3$ A.",
            "<b>Step 3 — Distractor audit.</b> $0$ A is the inductor's INITIAL current (open at $t=0^+$), not steady state; $12$ A forgets $R$; $1.2$ A inserts a wrong decade."
          ],
          a: "$I_{ss} = 3$ A",
          v: "With $v_L=0$, all 12 V is across the $4$ Ω: $4(3)=12$ V ✓."
        }), ref: "Handbook p.358" },

      { q: `For the same RL circuit, find time constant. ${svgRL(12, "4Ω", "100mH")}`,
        choices: ["$25$ ms", "$1$ ms", "$400$ s", "$50$ ms"], correct: 0,
        solution: S({
          c: "The RL time constant is $\\tau=L/R$ — note it is L OVER R (inverse arrangement of the RC product).",
          s: [
            "<b>Step 1 — Values.</b> $L=100$ mH $=0.1$ H, $R=4$ Ω.",
            "<b>Step 2 — Divide.</b> $\\tau=L/R=0.1/4=0.025$ s $=25$ ms.",
            "<b>Step 3 — Distractor audit.</b> $50$ ms doubles $L$; $400$ s inverts the ratio ($R/L$); $1$ ms drops $L$'s decade."
          ],
          a: "$\\tau = 25$ ms",
          v: "Cross-check: $R/L=4/0.1=40\\ \\mathrm{s}^{-1}$, whose inverse is $0.025$ s ✓ — confirms $\\tau=L/R$."
        }), ref: "Handbook p.358" },

      { q: `Find output voltage $v_{out}$ if $v_{in} = 0.5$ V (DC). ${svgInvOpAmp("100 kΩ", "10 kΩ")}`,
        choices: ["$-5$ V", "$+5$ V", "$-0.5$ V", "$-50$ V"], correct: 0,
        solution: S({
          c: "Ideal inverting amplifier: $v_{out}=-\\dfrac{R_f}{R_{in}}v_{in}$. The minus sign is a 180° phase inversion.",
          s: [
            "<b>Step 1 — Closed-loop gain.</b> $-R_f/R_{in}=-100\\text{k}/10\\text{k}=-10$.",
            "<b>Step 2 — Output.</b> $v_{out}=-10(0.5)=-5$ V.",
            "<b>Step 3 — Distractor audit.</b> $+5$ V drops the inverting sign; $-0.5$ V uses unity gain; $-50$ V multiplies the resistances ($100\\times 0.5$) instead of using their ratio."
          ],
          a: "$v_{out} = -5$ V",
          v: "Virtual short holds $v_-=0$; input current $0.5/10\\text{k}=50$ µA through $R_f$ drops $50\\,\\mu\\text{A}\\cdot 100\\text{k}=5$ V, so the output sits at $-5$ V ✓."
        }), ref: "Handbook p.380" },

      { q: `Find resonant frequency. ${svgSeriesRLC(100, 10, "50mH", "10µF")}`,
        choices: ["$\\approx 225$ Hz", "$\\approx 712$ Hz", "$1000$ Hz", "$\\approx 318$ Hz"], correct: 0,
        solution: S({
          c: "Series RLC resonance is where $X_L=X_C$, at $f_0=\\dfrac{1}{2\\pi\\sqrt{LC}}$. There the reactances cancel and $Z=R$.",
          s: [
            "<b>Step 1 — Product LC.</b> $LC=(0.05)(10^{-5})=5\\times 10^{-7}$.",
            "<b>Step 2 — Angular resonance.</b> $\\sqrt{LC}=7.07\\times 10^{-4}$, so $\\omega_0=1/\\sqrt{LC}=1414$ rad/s.",
            "<b>Step 3 — Convert to hertz.</b> $f_0=\\omega_0/2\\pi=1414/6.283\\approx 225$ Hz.",
            "<b>Step 4 — Distractor audit.</b> $712$ Hz mis-reads $C$ as $1$ µF; $1000$ Hz quotes the drive $\\omega$ as if it were $f$; $318$ Hz mishandles the square root of $LC$."
          ],
          a: "$f_0 \\approx 225$ Hz",
          v: "At $f_0$: $X_L=\\omega_0L=1414(0.05)=70.7$ Ω and $X_C=1/(\\omega_0C)=1/(1414\\cdot 10^{-5})=70.7$ Ω — equal ✓, so $Z=R=10$ Ω."
        }), ref: "Handbook p.361" },

      { q: `Find $V_{LL}$ if each phase voltage is 120 V (in this Y configuration). ${svgWyeSrc()}`,
        choices: ["$\\approx 208$ V", "$120$ V", "$240$ V", "$60$ V"], correct: 0,
        solution: S({
          c: "In a balanced wye (Y) source, line-to-line voltage is larger by $\\sqrt3$: $V_{LL}=\\sqrt3\\,V_{LN}$ (and leads $V_{LN}$ by 30°).",
          s: [
            "<b>Step 1 — Apply the factor.</b> $V_{LL}=\\sqrt3(120)=1.732(120)$.",
            "<b>Step 2 — Compute.</b> $\\approx 207.8\\approx 208$ V.",
            "<b>Step 3 — Distractor audit.</b> $120$ V confuses line with phase; $240$ V doubles (split-phase idea, not 3-phase); $60$ V halves."
          ],
          a: "$\\approx 208$ V",
          v: "This is the standard US 120/208 V wye system ✓ ($\\sqrt3\\cdot 120=208$)."
        }), ref: "Handbook p.363" },

      { q: `In voltage divider, find $V_2$ if $V_{in}$ increases to $40$V. ${svgVDivider(40, 4, 6)}`,
        choices: ["$24$ V", "$30$ V", "$40$ V", "$8$ V"], correct: 0,
        solution: S({
          c: "The divider is LINEAR in its input: $V_2=V_{in}\\,\\dfrac{R_2}{R_1+R_2}$, so doubling $V_{in}$ doubles $V_2$.",
          s: [
            "<b>Step 1 — Fixed ratio.</b> $R_2/(R_1+R_2)=6/10=0.6$.",
            "<b>Step 2 — Scale the input.</b> $V_2=40(0.6)=24$ V.",
            "<b>Step 3 — Distractor audit.</b> $30$ V assumes a near-equal split; $40$ V ignores the divider; $8$ V is left over from the 20 V case."
          ],
          a: "$V_2 = 24$ V",
          v: "Linearity check: 20 V in gave 12 V out; doubling to 40 V doubles to 24 V ✓."
        }), ref: "Handbook p.356" },

      { q: `Op-amp output for $v_{in} = -0.3$V. ${svgInvOpAmp("100 kΩ", "10 kΩ")}`,
        choices: ["$+3$ V", "$-3$ V", "$+0.3$ V", "$-30$ V"], correct: 0,
        solution: S({
          c: "Inverting amp $v_{out}=-(R_f/R_{in})v_{in}$: a NEGATIVE input produces a POSITIVE output.",
          s: [
            "<b>Step 1 — Gain.</b> $-100\\text{k}/10\\text{k}=-10$.",
            "<b>Step 2 — Output.</b> $v_{out}=-10(-0.3)=+3$ V.",
            "<b>Step 3 — Distractor audit.</b> $-3$ V keeps the input's sign; $+0.3$ V uses unity gain; $-30$ V multiplies by resistances, not their ratio."
          ],
          a: "$+3$ V",
          v: "Sign rule: an inverting amp flips polarity, so a $-0.3$ V input must give a positive output ✓."
        }), ref: "Handbook p.380" },

      { q: `What gain would be needed in the op-amp circuit to produce $v_{out} = -2$V from $v_{in} = 0.1$V? ${svgInvOpAmp("R_f", "10 kΩ")}`,
        choices: ["$|A_v| = 20$, so $R_f = 200$ kΩ", "$R_f = 100$ kΩ", "$R_f = 50$ kΩ", "$R_f = 20$ kΩ"], correct: 0,
        solution: S({
          c: "Set the gain magnitude equal to the required $|v_{out}/v_{in}|$, then solve $R_f=|A_v|R_{in}$.",
          s: [
            "<b>Step 1 — Required gain.</b> $|A_v|=|v_{out}/v_{in}|=2/0.1=20$.",
            "<b>Step 2 — Solve for $R_f$.</b> $R_f=|A_v|R_{in}=20(10\\text{k})=200$ kΩ.",
            "<b>Step 3 — Distractor audit.</b> $100$ kΩ gives gain 10; $50$ kΩ gives 5; $20$ kΩ gives 2 — all undershoot the needed 20."
          ],
          a: "$R_f = 200$ kΩ",
          v: "Back-check: $v_{out}=-(200\\text{k}/10\\text{k})(0.1)=-(20)(0.1)=-2$ V ✓."
        }), ref: "Handbook p.380" },

      { q: `Voltage across $R_2$ if $R_1 = 5\\Omega$, $R_2 = 15\\Omega$, $V_{in} = 24$V. ${svgVDivider(24, 5, 15)}`,
        choices: ["$18$ V", "$6$ V", "$12$ V", "$8$ V"], correct: 0,
        solution: S({
          c: "Voltage divider once more: $V_2=V_{in}\\,\\dfrac{R_2}{R_1+R_2}$ — the larger resistor takes the larger share.",
          s: [
            "<b>Step 1 — Total resistance.</b> $R_1+R_2=5+15=20$ Ω.",
            "<b>Step 2 — Share of the source.</b> $V_2=24(15/20)=24(0.75)=18$ V.",
            "<b>Step 3 — Distractor audit.</b> $6$ V is $V_1$ across $5$ Ω; $12$ V assumes an equal split; $8$ V uses the wrong ratio."
          ],
          a: "$V_2 = 18$ V",
          v: "KVL: $V_1+V_2=6+18=24$ V ✓; the $15$ Ω (3/4 of total) takes 3/4 of 24 V."
        }), ref: "Handbook p.356" },

      { q: `Find Norton current $I_N$ (short-circuit current at terminals A-B). ${svgThevenin(30, 10, 20)}`,
        choices: ["$3$ A", "$30$ A", "$0.667$ A", "$2$ A"], correct: 0,
        solution: S({
          c: "Norton current is the SHORT-CIRCUIT current at the terminals, equal to $I_N=V_{Th}/R_{Th}$ for the same network.",
          s: [
            "<b>Step 1 — Short A-B.</b> $R_2$ is bypassed, so the source drives only $R_1=10$ Ω.",
            "<b>Step 2 — Short-circuit current.</b> $I_N=30/10=3$ A.",
            "<b>Step 3 — Cross-check.</b> $I_N=V_{Th}/R_{Th}=20/6.67=3$ A.",
            "<b>Step 4 — Distractor audit.</b> $30$ A shorts everything (forgets $R_1$); $0.667$ A inverts the ratio; $2$ A mis-applies $V_{Th}$ over the wrong resistance."
          ],
          a: "$I_N = 3$ A",
          v: "Source-transformation consistency: $V_{Th}=I_N R_{Th}=3(6.67)=20$ V ✓ matches the open-circuit voltage."
        }), ref: "Handbook p.357" },

      { q: `Common-emitter amp: find $I_B$ (assuming $V_{BE} = 0.7$V, $V_{in}$ = $V_{CC}$ for biasing through $R_B$). ${svgCE_BJT(12, "1kΩ", "220kΩ")}`,
        choices: ["$\\approx 51.4$ µA", "$12$ mA", "$50$ mA", "$1$ µA"], correct: 0,
        solution: S({
          c: "Base current through a base resistor: $I_B=\\dfrac{V_{CC}-V_{BE}}{R_B}$, using the 0.7 V silicon base-emitter drop.",
          s: [
            "<b>Step 1 — Net driving voltage.</b> $V_{CC}-V_{BE}=12-0.7=11.3$ V.",
            "<b>Step 2 — Divide by $R_B$.</b> $I_B=11.3/220{,}000=51.4$ µA.",
            "<b>Step 3 — Distractor audit.</b> $12$ mA and $50$ mA ignore the size of $R_B$ (off by $10^3$); $1$ µA over-shrinks the result."
          ],
          a: "$\\approx 51.4$ µA",
          v: "With $\\beta=100$: $I_C=5.14$ mA, $V_{R_C}=5.14$ V, $V_{CE}=12-5.14=6.86$ V $>0.2$ V → active region ✓."
        }), ref: "Handbook p.384" },
    ],

    // Ch 9 Electronics — 8 with diagrams
    9: [
      { q: `Compute $v_{out}$ for $v_{in} = 0.4$V. ${svgInvOpAmp("220 kΩ", "10 kΩ")}`,
        choices: ["$-8.8$ V", "$+8.8$ V", "$-0.4$ V", "$+22$ V"], correct: 0,
        solution: S({
          c: "Inverting amp $v_{out}=-(R_f/R_{in})v_{in}$. Watch the supply rails — a large gain can saturate the output.",
          s: [
            "<b>Step 1 — Gain.</b> $-220\\text{k}/10\\text{k}=-22$.",
            "<b>Step 2 — Output.</b> $v_{out}=-22(0.4)=-8.8$ V.",
            "<b>Step 3 — Distractor audit.</b> $+8.8$ V drops the sign; $-0.4$ V uses unity gain; $+22$ V quotes the gain magnitude as a voltage."
          ],
          a: "$-8.8$ V",
          v: "If the rails are $\\pm 9$ V, $-8.8$ V is just inside the linear range ✓ — a larger input would clip."
        }), ref: "Handbook p.380" },

      { q: `BJT amp: find $V_{CE}$ if $\\beta = 100$. ${svgCE_BJT(12, "1kΩ", "220kΩ")}`,
        choices: ["$\\approx 6.86$ V", "$0.2$ V", "$12$ V", "$0$ V"], correct: 0,
        solution: S({
          c: "Bias chain: $I_B=(V_{CC}-V_{BE})/R_B$, then $I_C=\\beta I_B$, then KVL on the collector loop: $V_{CE}=V_{CC}-I_CR_C$.",
          s: [
            "<b>Step 1 — Base current.</b> $I_B=(12-0.7)/220\\text{k}=51.4$ µA.",
            "<b>Step 2 — Collector current.</b> $I_C=\\beta I_B=100(51.4\\,\\mu\\text{A})=5.14$ mA.",
            "<b>Step 3 — KVL.</b> $V_{R_C}=5.14\\text{mA}(1\\text{k})=5.14$ V, so $V_{CE}=12-5.14=6.86$ V.",
            "<b>Step 4 — Distractor audit.</b> $0.2$ V is saturation (not this bias); $12$ V assumes $I_C=0$ (cutoff); $0$ V is impossible with a 12 V supply."
          ],
          a: "$V_{CE} \\approx 6.86$ V",
          v: "$0.2$ V $< V_{CE}=6.86$ V $< 12$ V → transistor is in the active region ✓."
        }), ref: "Handbook p.384" },

      { q: `For the BJT amp, find small-signal voltage gain (assuming $r_e \\approx 5$ Ω for this current). ${svgCE_BJT(12, "1kΩ", "220kΩ")}`,
        choices: ["$|A_v| \\approx 200$ (inverting)", "$|A_v| = 1$", "$|A_v| = 100$", "$|A_v| \\approx 5$"], correct: 0,
        solution: S({
          c: "Common-emitter small-signal gain with no emitter degeneration: $|A_v|\\approx R_C/r_e$, where $r_e$ is the intrinsic emitter resistance; the output is inverted.",
          s: [
            "<b>Step 1 — Apply.</b> $|A_v|=R_C/r_e=1000/5=200$.",
            "<b>Step 2 — Phase.</b> Output is 180° out of phase with the input (inverting).",
            "<b>Step 3 — Distractor audit.</b> $1$ assumes a unity buffer; $100$ confuses gain with $\\beta$; $5$ quotes $r_e$ itself."
          ],
          a: "$|A_v| \\approx 200$",
          v: "Adding an un-bypassed emitter resistor $R_E$ would lower this to $\\approx R_C/(r_e+R_E)$ — less gain, more stability ✓."
        }), ref: "Handbook p.384" },

      { q: `Op-amp non-inverting amp gain for $R_f = 90$ kΩ, $R_{in} = 10$ kΩ:`,
        choices: ["$+10$ (non-inverting)", "$-10$", "$+9$", "$+0.1$"], correct: 0,
        solution: S({
          c: "Non-inverting amplifier: $A_v=1+\\dfrac{R_f}{R_{in}}$ — always $\\ge 1$ and positive (no phase inversion).",
          s: [
            "<b>Step 1 — Resistor ratio.</b> $R_f/R_{in}=90/10=9$.",
            "<b>Step 2 — Add the 1.</b> $A_v=1+9=10$.",
            "<b>Step 3 — Distractor audit.</b> $-10$ is the inverting result; $+9$ forgets the '+1'; $+0.1$ inverts the ratio."
          ],
          a: "$+10$ (non-inverting)",
          v: "A non-inverting gain can never fall below 1; $1+90/10=10>1$ ✓, with positive sign."
        }), ref: "Handbook p.380" },

      { q: `Half-wave rectifier with $V_m = 24$ V peak. Average DC output:`,
        choices: ["$\\approx 7.64$ V", "$24$ V", "$12$ V", "$\\approx 15.3$ V"], correct: 0,
        solution: S({
          c: "The average (DC) value of a half-wave rectified sine is $V_{DC}=V_m/\\pi$ — only one half-cycle contributes.",
          s: [
            "<b>Step 1 — Apply the formula.</b> $V_{DC}=V_m/\\pi=24/3.1416$.",
            "<b>Step 2 — Compute.</b> $\\approx 7.64$ V.",
            "<b>Step 3 — Distractor audit.</b> $24$ V is the peak; $12$ V just halves the peak (wrong model); $15.3$ V is the FULL-wave value $2V_m/\\pi$."
          ],
          a: "$\\approx 7.64$ V",
          v: "Full-wave would give $2V_m/\\pi=15.28$ V — exactly twice the half-wave average ✓."
        }), ref: "Handbook p.383" },

      { q: `Zener regulator: $V_Z = 5.1$ V, $R_s = 330$ Ω, $V_s = 12$ V. Load draws 5 mA. Zener current:`,
        choices: ["$\\approx 15.9$ mA", "$5$ mA", "$36.4$ mA", "$10$ mA"], correct: 0,
        solution: S({
          c: "In a shunt Zener regulator the series-resistor current splits between load and Zener: $I_Z=I_s-I_{load}$, with $I_s=(V_s-V_Z)/R_s$.",
          s: [
            "<b>Step 1 — Series current.</b> $I_s=(12-5.1)/330=6.9/330=20.9$ mA.",
            "<b>Step 2 — Subtract the load.</b> $I_Z=20.9-5=15.9$ mA.",
            "<b>Step 3 — Distractor audit.</b> $5$ mA is the load current; $36.4$ mA uses $V_s/R_s$ (forgets $V_Z$); $10$ mA mis-subtracts."
          ],
          a: "$I_Z \\approx 15.9$ mA",
          v: "KCL at the Zener node: $I_s=I_Z+I_{load}=15.9+5=20.9$ mA ✓; $I_Z>0$ confirms regulation holds."
        }), ref: "Handbook p.383" },

      { q: `Inverting summer: $v_1 = 1$V via 10kΩ, $v_2 = 2$V via 20kΩ, $R_f = 20$ kΩ. Output:`,
        choices: ["$-4$ V", "$-3$ V", "$+4$ V", "$-1.5$ V"], correct: 0,
        solution: S({
          c: "Inverting summer: each input contributes $-R_f/R_i$, and outputs add by superposition: $v_{out}=-R_f\\left(\\dfrac{v_1}{R_1}+\\dfrac{v_2}{R_2}\\right)$.",
          s: [
            "<b>Step 1 — Branch currents.</b> $v_1/R_1=1/10\\text{k}=0.1$ mA; $v_2/R_2=2/20\\text{k}=0.1$ mA.",
            "<b>Step 2 — Sum and scale.</b> $v_{out}=-20\\text{k}(0.1\\text{mA}+0.1\\text{mA})=-20\\text{k}(0.2\\text{mA})=-4$ V.",
            "<b>Step 3 — Distractor audit.</b> $-3$ V mis-adds the currents; $+4$ V drops the sign; $-1.5$ V uses a wrong resistor pairing."
          ],
          a: "$-4$ V",
          v: "Per-input gains: $v_1$ sees $-20\\text{k}/10\\text{k}=-2$ (→ $-2$ V); $v_2$ sees $-20\\text{k}/20\\text{k}=-1$ (→ $-2$ V); total $-4$ V ✓."
        }), ref: "Handbook p.380" },

      { q: `Class A amp efficiency upper limit (resistor-coupled):`,
        choices: ["$25\\%$", "$78.5\\%$", "$50\\%$", "$100\\%$"], correct: 0,
        solution: S({
          c: "Theoretical maximum collector efficiency depends on topology: resistor/series-fed Class A = 25%, transformer-coupled Class A = 50%, Class B push-pull = 78.5%.",
          s: [
            "<b>Step 1 — Identify topology.</b> Resistor- (series-) coupled Class A.",
            "<b>Step 2 — Read the ceiling.</b> Maximum efficiency = 25%.",
            "<b>Step 3 — Distractor audit.</b> $78.5\\%$ is Class B push-pull; $50\\%$ is transformer-coupled Class A; $100\\%$ is unphysical for a linear amp."
          ],
          a: "$25\\%$",
          v: "Class A conducts for the full 360° (always biased on), dissipating power even at idle → lowest efficiency of the classes ✓."
        }), ref: "Handbook p.384" },
    ],

    // Ch 10 Power Systems — 6 with diagrams
    10: [
      { q: `3-phase Y source with $V_a = V_b = V_c = 120$ V phase-to-neutral. Line-to-line voltage $V_{ab}$ magnitude: ${svgWyeSrc()}`,
        choices: ["$\\approx 208$ V", "$120$ V", "$240$ V", "$\\approx 415$ V"], correct: 0,
        solution: S({
          c: "Balanced wye source: $|V_{LL}|=\\sqrt3\\,|V_{LN}|$, and $V_{ab}$ leads $V_a$ by 30°.",
          s: [
            "<b>Step 1 — Apply.</b> $|V_{ab}|=\\sqrt3(120)$.",
            "<b>Step 2 — Compute.</b> $\\approx 207.8\\approx 208$ V.",
            "<b>Step 3 — Distractor audit.</b> $120$ V is the phase voltage; $240$ V doubles; $415$ V is $\\sqrt3\\times 240$ (uses the wrong phase voltage)."
          ],
          a: "$\\approx 208$ V",
          v: "Standard 120/208 V wye ✓; the $\\sqrt3$ factor arises from the 120° angle between phase voltages."
        }), ref: "Handbook p.363" },

      { q: `If the Y source supplies a balanced load drawing 15 A line current at unity pf, total power: ${svgWyeSrc()}`,
        choices: ["$\\approx 5.4$ kW", "$\\approx 1.8$ kW", "$\\approx 3.6$ kW", "$\\approx 7.2$ kW"], correct: 0,
        solution: S({
          c: "Total three-phase power uses LINE quantities: $P=\\sqrt3\\,V_{LL}I_L\\cos\\theta$. At unity pf, $\\cos\\theta=1$.",
          s: [
            "<b>Step 1 — Line-to-line voltage.</b> $V_{LL}=\\sqrt3(120)=208$ V.",
            "<b>Step 2 — Compute power.</b> $P=\\sqrt3(208)(15)(1)=5403$ W $\\approx 5.4$ kW.",
            "<b>Step 3 — Distractor audit.</b> $1.8$ kW is one phase ($P/3$); $3.6$ kW drops the $\\sqrt3$; $7.2$ kW double-counts."
          ],
          a: "$\\approx 5.4$ kW",
          v: "Per-phase: $V_{LN}I_L=120(15)=1.8$ kW; $\\times 3$ phases $=5.4$ kW ✓ (matches $\\sqrt3 V_{LL}I_L$)."
        }), ref: "Handbook p.363" },

      { q: `Convert 3-phase Δ load with $Z_\\Delta = 30$ Ω per branch to equivalent Y:`,
        choices: ["$Z_Y = 10$ Ω", "$30$ Ω", "$90$ Ω", "$3.3$ Ω"], correct: 0,
        solution: S({
          c: "Balanced delta-to-wye conversion divides each branch impedance by 3: $Z_Y=Z_\\Delta/3$.",
          s: [
            "<b>Step 1 — Apply.</b> $Z_Y=30/3$.",
            "<b>Step 2 — Result.</b> $Z_Y=10$ Ω.",
            "<b>Step 3 — Distractor audit.</b> $30$ Ω forgets to convert; $90$ Ω multiplies by 3 (the reverse direction); $3.3$ Ω divides by 9."
          ],
          a: "$Z_Y = 10$ Ω",
          v: "Reverse check: $Z_\\Delta=3Z_Y=3(10)=30$ Ω ✓ recovers the delta branch."
        }), ref: "Handbook p.363" },

      { q: `Ideal transformer 480/120 V, 5 kVA. Primary rated current:`,
        choices: ["$\\approx 10.4$ A", "$41.7$ A", "$5$ A", "$24$ A"], correct: 0,
        solution: S({
          c: "Apparent power relates terminal current by $S=VI$, so $I=S/V$ on each winding (same kVA both sides for an ideal transformer).",
          s: [
            "<b>Step 1 — Primary current.</b> $I_1=S/V_1=5000/480=10.42$ A.",
            "<b>Step 2 — Secondary (context).</b> $I_2=5000/120=41.7$ A.",
            "<b>Step 3 — Distractor audit.</b> $41.7$ A is the SECONDARY current; $5$ A drops a factor; $24$ A uses a wrong voltage."
          ],
          a: "$I_1 \\approx 10.4$ A",
          v: "Turns ratio $480/120=4{:}1$ step-down → secondary current is $4\\times$ primary: $41.7/10.4\\approx 4$ ✓."
        }), ref: "Handbook p.364" },

      { q: `Three-phase 480V system supplies 10 kW at $pf = 0.7$ lagging. Required line current:`,
        choices: ["$\\approx 17.2$ A", "$10$ A", "$\\approx 12.0$ A", "$\\approx 24.1$ A"], correct: 0,
        solution: S({
          c: "Solve the three-phase power equation for current: $I_L=\\dfrac{P}{\\sqrt3\\,V_{LL}\\cos\\theta}$. A low power factor demands MORE current for the same real power.",
          s: [
            "<b>Step 1 — Denominator.</b> $\\sqrt3(480)(0.7)=582$.",
            "<b>Step 2 — Divide.</b> $I_L=10000/582=17.18$ A.",
            "<b>Step 3 — Distractor audit.</b> $12.0$ A is the unity-pf current; $10$ A drops the $\\sqrt3$; $24.1$ A halves the pf."
          ],
          a: "$\\approx 17.2$ A",
          v: "At pf $=1$ the same 10 kW needs only $10000/(\\sqrt3\\cdot 480)=12.0$ A — the 0.7 pf raises it to 17.2 A ✓, illustrating why pf correction cuts current."
        }), ref: "Handbook p.363" },

      { q: `Induction motor: 4-pole, 60 Hz, full-load slip 4%. Rotor speed:`,
        choices: ["$1728$ rpm", "$1800$ rpm", "$1750$ rpm", "$72$ rpm"], correct: 0,
        solution: S({
          c: "Synchronous speed $n_s=120f/p$; the rotor runs slower by the slip: $n_r=n_s(1-s)$.",
          s: [
            "<b>Step 1 — Synchronous speed.</b> $n_s=120(60)/4=1800$ rpm.",
            "<b>Step 2 — Apply slip.</b> $n_r=1800(1-0.04)=1800(0.96)=1728$ rpm.",
            "<b>Step 3 — Distractor audit.</b> $1800$ rpm ignores slip (that is $n_s$); $1750$ rpm is a guess; $72$ rpm is the slip speed $s\\,n_s$ itself."
          ],
          a: "$1728$ rpm",
          v: "Slip speed $=n_s-n_r=1800-1728=72$ rpm $=0.04(1800)$ ✓ — consistent with $s=4\\%$."
        }), ref: "Handbook p.365" },
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
  console.log(`Pack 9 (with diagrams): +${added} → bank total ${total}`);
})();
