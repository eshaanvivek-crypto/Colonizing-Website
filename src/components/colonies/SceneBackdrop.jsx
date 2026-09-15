import { motion } from "framer-motion";

// Sketch / woodcut palette — mostly ink on parchment, minimal muted tints
export const WC = {
  ink: "#2e2415",
  inkSoft: "#4a3b25",
  paper: "#f6efdd",
  tint: "#d9c9a3",
  blue: "#9aafbd",
  green: "#7c8a66",
  brown: "#7a5f3c",
  red: "#a05a4a",
};

// Repeating diagonal hatch for shading
function Hatch({ x, y, w, h, rot = 45, step = 6, opacity = 0.22, stroke = WC.inkSoft }) {
  const lines = [];
  const n = Math.ceil((w + h) / step) + 2;
  for (let i = 0; i < n; i++) {
    const sx = x + i * step - h;
    lines.push(
      <line
        key={i}
        x1={sx}
        y1={y + h}
        x2={sx + h}
        y2={y}
        stroke={stroke}
        strokeWidth={0.7}
        opacity={opacity}
      />
    );
  }
  return <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>{lines}</g>;
}

function Cross({ x, y, w, h, opacity = 0.18 }) {
  return (
    <g>
      <Hatch x={x} y={y} w={w} h={h} rot={45} opacity={opacity} />
      <Hatch x={x} y={y} w={w} h={h} rot={-45} opacity={opacity} />
    </g>
  );
}

function Cloud({ cx, cy, s = 1 }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${s})`} stroke={WC.ink} strokeWidth={1.4} fill="none">
      <path d="M-34 4 Q -42 -8 -26 -10 Q -22 -22 -6 -16 Q 4 -24 18 -14 Q 34 -18 32 -2 Q 40 6 26 8 Q 8 12 -8 8 Q -28 12 -34 4 Z" />
      <path d="M-26 -8 Q -16 -4 -6 -8 M4 -8 Q 16 -4 26 -6" opacity={0.5} />
    </g>
  );
}

function Ship({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={WC.ink} strokeWidth={1.5} fill="none">
      <path d="M0 30 Q 8 46 26 46 L 74 46 Q 92 46 100 30 L 0 30 Z" />
      <Hatch x={4} y={32} w={92} h={14} step={5} opacity={0.25} />
      <line x1="32" y1="30" x2="32" y2="-42" />
      <line x1="70" y1="30" x2="70" y2="-52" />
      <path d="M18 -8 Q 32 -30 46 -8 L 46 8 Q 32 0 18 8 Z" />
      <Hatch x={20} y={-8} w={24} h={14} step={4} opacity={0.18} />
      <path d="M58 -12 Q 72 -36 86 -12 L 86 8 Q 72 0 58 8 Z" />
      <Hatch x={60} y={-12} w={24} h={18} step={4} opacity={0.18} />
      <motion.path
        d="M32 -42 L 48 -38 L 32 -32 Z"
        fill={WC.red}
        stroke={WC.ink}
        strokeWidth={1}
        animate={{ d: ["M32 -42 L 48 -38 L 32 -32 Z", "M32 -42 L 52 -39 L 32 -34 Z", "M32 -42 L 48 -38 L 32 -32 Z"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function Tree({ x, y, h = 60 }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={WC.ink} strokeWidth={1.6} fill="none">
      <line x1="0" y1="0" x2="0" y2={-h} strokeWidth={5} stroke={WC.ink} />
      <path d={`M0 ${-h + 12} L -8 ${-h + 4} M0 ${-h + 24} L 10 ${-h + 16}`} strokeWidth={2} opacity={0.6} />
      <circle cx="0" cy={-h - 10} r="22" />
      <circle cx="-15" cy={-h + 2} r="15" />
      <circle cx="15" cy={-h + 2} r="15" />
      <Cross x={-20} y={-h - 30} w={40} h={28} opacity={0.2} />
    </g>
  );
}

function Rock({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={WC.ink} strokeWidth={1.5} fill="none">
      <path d="M0 20 Q -10 2 8 -2 Q 28 -6 32 10 Q 40 22 26 26 Q 10 30 0 20 Z" />
      <path d="M8 -2 Q 16 6 24 8" opacity={0.5} />
      <Hatch x={4} y={4} w={24} h={18} step={4} opacity={0.22} />
    </g>
  );
}

function House({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={WC.ink} strokeWidth={1.5} fill="none">
      <rect x="0" y="0" width="70" height="44" />
      <Hatch x={2} y={2} w={66} h={40} step={5} opacity={0.18} />
      <path d="M-6 0 L 35 -30 L 76 0 Z" />
      <Hatch x={0} y={-28} w={70} h={28} step={5} opacity={0.2} rot={-45} />
      <rect x="26" y="16" width="18" height="28" />
      <line x1="26" y1="30" x2="44" y2="30" />
      <line x1="35" y1="16" x2="35" y2="44" opacity={0.4} />
    </g>
  );
}

function Wigwam({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={WC.ink} strokeWidth={1.5} fill="none">
      <path d="M0 0 Q 0 -34 26 -34 Q 52 -34 52 0 Z" />
      <line x1="0" y1="0" x2="52" y2="0" />
      <path d="M0 -12 L 52 -12 M6 -24 L 46 -24" opacity={0.5} />
      <Hatch x={4} y={-30} w={44} h={28} step={5} opacity={0.2} />
    </g>
  );
}

function Smoke({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={WC.inkSoft} strokeWidth={1.2} fill="none" opacity={0.5}>
      <circle cx="0" cy="0" r="6" />
      <circle cx="3" cy="-8" r="5" />
      <circle cx="-2" cy="-14" r="4" />
    </g>
  );
}

function CornRow({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={WC.inkSoft} strokeWidth={1.4} fill="none">
      {[-10, 0, 10].map((dx) => (
        <g key={dx} transform={`translate(${dx} 0)`}>
          <line x1="0" y1="20" x2="0" y2="0" />
          <path d="M-4 -2 Q 0 -10 4 -2 Q 0 -2 -4 -2" />
          <line x1="0" y1="14" x2="-3" y2="6" opacity={0.5} />
          <line x1="0" y1="14" x2="3" y2="6" opacity={0.5} />
        </g>
      ))}
    </g>
  );
}

function Settler({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={WC.ink} strokeWidth={1.6} fill="none">
      <path d="M-12 -54 Q 0 -68 12 -54 Z" />
      <Hatch x={-12} y={-58} w={24} h={6} step={3} opacity={0.3} />
      <rect x="-16" y="-54" width="32" height="4" />
      <circle cx="0" cy="-44" r="8" />
      <path d="M-10 -36 Q 0 -40 10 -36 L 12 -8 Q 0 -4 -12 -8 Z" />
      <Hatch x={-10} y={-36} w={22} h={28} step={4} opacity={0.2} />
      <path d="M-6 -36 L 0 -30 L 6 -36" />
      <line x1="-5" y1="-8" x2="-6" y2="6" strokeWidth={3} />
      <line x1="5" y1="-8" x2="6" y2="6" strokeWidth={3} />
      <line x1="10" y1="-30" x2="16" y2="-14" strokeWidth={3} />
    </g>
  );
}

function Wampanoag({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={WC.ink} strokeWidth={1.6} fill="none">
      <path d="M-9 -52 Q 0 -60 9 -52" />
      <rect x="-10" y="-52" width="20" height="3" stroke={WC.red} />
      <motion.path
        d="M0 -56 Q 5 -68 0 -76 Q -5 -68 0 -56"
        stroke={WC.green}
        strokeWidth={1.4}
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "0 -56" }}
      />
      <circle cx="0" cy="-44" r="8" />
      <path d="M-10 -36 Q 0 -40 10 -36 L 12 -8 Q 0 -4 -12 -8 Z" />
      <Hatch x={-10} y={-36} w={22} h={28} step={4} opacity={0.2} />
      <line x1="-8" y1="-10" x2="-8" y2="-2" />
      <line x1="0" y1="-10" x2="0" y2="-2" />
      <line x1="8" y1="-10" x2="8" y2="-2" />
      <line x1="-5" y1="-8" x2="-6" y2="6" strokeWidth={3} />
      <line x1="5" y1="-8" x2="6" y2="6" strokeWidth={3} />
      <line x1="-10" y1="-30" x2="-16" y2="-14" strokeWidth={3} />
    </g>
  );
}

function Bird({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} stroke={WC.ink} strokeWidth={1.6} fill="none">
      <motion.path
        d="M0 0 Q 6 -6 12 0 Q 18 -6 24 0"
        animate={{ d: ["M0 0 Q 6 -6 12 0 Q 18 -6 24 0", "M0 0 Q 6 4 12 0 Q 18 4 24 0", "M0 0 Q 6 -6 12 0 Q 18 -6 24 0"] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

/* ---------- Scenes (outline + hatch, minimal fill) ---------- */

function Coastal() {
  return (
    <g>
      <Cloud cx={120} cy={70} />
      <Cloud cx={420} cy={50} s={0.7} />
      <motion.g animate={{ x: [0, 60, 0] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
        <Cloud cx={640} cy={90} s={0.85} />
      </motion.g>
      <circle cx="660" cy="60" r="26" stroke={WC.ink} strokeWidth={1.4} fill="none" />
      <g stroke={WC.inkSoft} strokeWidth={1} opacity={0.5}>
        <line x1="660" y1="20" x2="660" y2="34" />
        <line x1="660" y1="86" x2="660" y2="100" />
        <line x1="620" y1="60" x2="634" y2="60" />
        <line x1="686" y1="60" x2="700" y2="60" />
      </g>
      {/* far hills */}
      <path d="M0 220 Q 200 180 380 210 T 800 200 L 800 400 L 0 400 Z" stroke={WC.ink} strokeWidth={1.4} fill="none" />
      <Hatch x={0} y={205} w={800} h={55} step={7} opacity={0.14} />
      {/* shoreline */}
      <path d="M0 250 Q 300 270 520 248 T 800 252 L 800 400 L 0 400 Z" stroke={WC.ink} strokeWidth={1.2} fill="none" opacity={0.5} />
      {/* waves */}
      {[255, 268, 280].map((y, i) => (
        <motion.path
          key={y}
          d={`M0 ${y} Q 50 ${y - 4} 100 ${y} T 200 ${y} T 300 ${y} T 400 ${y} T 500 ${y} T 600 ${y} T 700 ${y} T 800 ${y}`}
          stroke={WC.blue}
          strokeWidth={1.1}
          fill="none"
          opacity={0.6 - i * 0.12}
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.g animate={{ y: [0, -5, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "200px 240px" }}>
        <Ship x={150} y={215} />
      </motion.g>
    </g>
  );
}

function Geography() {
  return (
    <g stroke={WC.ink} fill="none">
      {/* mountains */}
      <path d="M0 230 L 140 130 L 230 210 L 360 120 L 470 215 L 600 150 L 720 220 L 800 180 L 800 300 L 0 300 Z" strokeWidth={1.5} />
      <path d="M140 130 L 100 200 L 180 200 Z" />
      <path d="M360 120 L 320 195 L 400 195 Z" />
      <path d="M600 150 L 560 210 L 640 210 Z" />
      <Hatch x={100} y={140} w={80} h={60} step={5} opacity={0.16} />
      <Hatch x={320} y={130} w={80} h={65} step={5} opacity={0.16} />
      <Hatch x={560} y={160} w={80} h={50} step={5} opacity={0.16} />
      {/* ground */}
      <path d="M0 250 Q 200 240 400 255 T 800 250 L 800 400 L 0 400 Z" strokeWidth={1.2} opacity={0.6} />
      <Rock x={120} y={300} s={1.1} />
      <Rock x={560} y={320} s={0.8} />
      <Rock x={680} y={300} s={1} />
      <Tree x={70} y={250} h={70} />
      <motion.g animate={{ rotate: [0, 1.5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "740px 270px" }}>
        <Tree x={740} y={250} h={60} />
      </motion.g>
      <motion.path
        d="M0 360 Q 200 350 400 365 T 800 360"
        stroke={WC.blue}
        strokeWidth="14"
        fill="none"
        opacity="0.4"
        animate={{ d: ["M0 360 Q 200 350 400 365 T 800 360", "M0 360 Q 200 356 400 360 T 800 362", "M0 360 Q 200 350 400 365 T 800 360"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function ColonialLife() {
  return (
    <g>
      <path d="M0 220 L 800 220 L 800 400 L 0 400 Z" stroke={WC.ink} strokeWidth={1.2} fill="none" opacity={0.5} />
      <House x={560} y={200} />
      <House x={660} y={212} s={0.8} />
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.g
          key={i}
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${80 + i * 110}px 320px` }}
        >
          <CornRow x={80 + i * 110} y={300} />
        </motion.g>
      ))}
      <motion.g animate={{ y: [0, -40], opacity: [0.5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeOut" }}>
        <Smoke x={585} y={185} />
      </motion.g>
      <motion.g animate={{ y: [0, -40], opacity: [0.4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeOut", delay: 1.5 }}>
        <Smoke x={683} y={197} s={0.8} />
      </motion.g>
    </g>
  );
}

function Decision() {
  return (
    <g>
      <path d="M0 260 L 800 260 L 800 400 L 0 400 Z" stroke={WC.ink} strokeWidth={1.2} fill="none" opacity={0.5} />
      <Wigwam x={90} y={280} />
      <Wigwam x={150} y={286} s={0.8} />
      {/* great tree */}
      <motion.g animate={{ rotate: [0, 0.8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "400px 300px" }}>
        <g transform="translate(400 290)" stroke={WC.ink} strokeWidth={1.8} fill="none">
          <line x1="0" y1="0" x2="0" y2="-120" strokeWidth={10} />
          <path d="M0 -60 L -30 -90 M0 -70 L 28 -100 M0 -80 L -20 -120 M0 -50 L 34 -70" strokeWidth={4} />
          <circle cx="0" cy="-130" r="42" />
          <circle cx="-34" cy="-110" r="28" />
          <circle cx="34" cy="-110" r="28" />
          <circle cx="0" cy="-160" r="26" />
          <Cross x={-40} y={-170} w={80} h={50} opacity={0.18} />
        </g>
      </motion.g>
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <Settler x={320} y={300} />
      </motion.g>
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
        <Wampanoag x={470} y={300} />
      </motion.g>
    </g>
  );
}

function Consequences() {
  return (
    <g>
      <motion.g animate={{ x: [-20, 20, -20] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity={0.5}>
        <g stroke={WC.ink} strokeWidth={1.4} fill="none">
          <path d="M150 70 Q 140 50 160 48 Q 168 34 188 42 Q 200 30 214 44 Q 232 40 228 58 Q 236 66 220 68 Q 200 72 182 68 Q 160 72 150 70 Z" />
          <path d="M470 60 Q 460 38 482 36 Q 492 20 514 30 Q 528 18 544 34 Q 564 30 560 50 Q 568 58 550 60 Q 528 64 506 60 Q 482 64 470 60 Z" />
        </g>
      </motion.g>
      <motion.path
        d="M300 50 L 320 110 L 300 110 L 330 180"
        stroke={WC.ink}
        strokeWidth="2"
        fill="none"
        animate={{ opacity: [0, 0, 0.8, 0, 0] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.45, 0.5, 1] }}
      />
      <path d="M0 250 L 800 250 L 800 400 L 0 400 Z" stroke={WC.ink} strokeWidth={1.2} fill="none" opacity={0.5} />
      <motion.g animate={{ rotate: [0, 4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "120px 300px" }}>
        <g transform="translate(120 300)" stroke={WC.ink} strokeWidth={1.6} fill="none">
          <line x1="0" y1="0" x2="6" y2="-70" strokeWidth={5} />
          <circle cx="10" cy="-74" r="20" />
        </g>
      </motion.g>
      <motion.g animate={{ rotate: [0, -4, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "680px 300px" }}>
        <g transform="translate(680 300)" stroke={WC.ink} strokeWidth={1.6} fill="none">
          <line x1="0" y1="0" x2="-6" y2="-66" strokeWidth={5} />
          <circle cx="-10" cy="-70" r="19" />
        </g>
      </motion.g>
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.line
          key={i}
          x1={60 + i * 90}
          y1={360}
          x2={66 + i * 90}
          y2={330}
          stroke={WC.green}
          strokeWidth="1.6"
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 2.5 + (i % 3) * 0.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${60 + i * 90}px 360px` }}
        />
      ))}
    </g>
  );
}

function Reflection() {
  return (
    <g>
      <motion.circle
        cx="400"
        cy="120"
        r="50"
        stroke={WC.ink}
        strokeWidth={1.4}
        fill="none"
        animate={{ r: [50, 54, 50] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <g stroke={WC.inkSoft} strokeWidth={1} opacity={0.4}>
        <line x1="400" y1="50" x2="400" y2="64" />
        <line x1="400" y1="176" x2="400" y2="190" />
        <line x1="330" y1="120" x2="344" y2="120" />
        <line x1="456" y1="120" x2="470" y2="120" />
      </g>
      <path d="M0 230 L 800 230 L 800 400 L 0 400 Z" stroke={WC.ink} strokeWidth={1.2} fill="none" opacity={0.5} />
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.line
          key={i}
          x1="400"
          y1="120"
          x2="400"
          y2="40"
          stroke={WC.inkSoft}
          strokeWidth="1.4"
          opacity="0.4"
          transform={`rotate(${i * 30} 400 120)`}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
      {[250, 262, 274].map((y, i) => (
        <motion.path
          key={y}
          d={`M0 ${y} Q 100 ${y - 4} 200 ${y} T 400 ${y} T 600 ${y} T 800 ${y}`}
          stroke={WC.blue}
          strokeWidth="1"
          fill="none"
          opacity={0.5 - i * 0.1}
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.g animate={{ x: [-20, 820] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
        <Bird x={0} y={90} />
        <Bird x={40} y={105} s={0.8} />
      </motion.g>
    </g>
  );
}

const SCENES = {
  welcome: Coastal,
  geography: Geography,
  colonialLife: ColonialLife,
  decision: Decision,
  consequences: Consequences,
  reflection: Reflection,
};

export default function SceneBackdrop({ scene }) {
  const Scene = SCENES[scene] || Coastal;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <Scene />
      </svg>
    </div>
  );
}

export { Settler, Wampanoag, Ship, Tree };