import { useEffect, useId, useMemo, useState } from 'react';

const WIDTH = 300;
const HEIGHT = 46;
const PADDING = 3;
const POINTS = 26;
const SEED = 42;

/** Small, fast, deterministic PRNG so the sparkline is stable across renders. */
function mulberry32(seed) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Build a smooth-ish random walk that looks like live telemetry. */
function buildPaths() {
  const random = mulberry32(SEED);
  const coords = [];
  let value = 0.55;
  for (let i = 0; i < POINTS; i += 1) {
    value += (random() - 0.5) * 0.28;
    value = Math.max(0.12, Math.min(0.92, value));
    const x = PADDING + (i / (POINTS - 1)) * (WIDTH - PADDING * 2);
    const y = HEIGHT - PADDING - value * (HEIGHT - PADDING * 2);
    coords.push([x, y]);
  }
  const line = coords
    .map((point, i) => `${i ? 'L' : 'M'}${point[0].toFixed(1)} ${point[1].toFixed(1)}`)
    .join(' ');
  const area = `${line} L ${WIDTH - PADDING} ${HEIGHT} L ${PADDING} ${HEIGHT} Z`;
  return { line, area };
}

/** Decorative "render performance" sparkline that draws itself on mount. */
export function Sparkline({ label = 'render performance', value = '0.84s' }) {
  const { line, area } = useMemo(() => buildPaths(), []);
  const [drawn, setDrawn] = useState(false);
  const gradientId = `spark-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    const id = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="flex h-full flex-col justify-center rounded-xl border border-line bg-surface px-4 py-3.5">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.04em] text-faint">{label}</span>
        <span className="font-mono text-[0.92rem] font-semibold text-up">{value}</span>
      </div>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true" className="block h-[46px] w-full">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={area}
          fill={`url(#${gradientId})`}
          className={cxArea(drawn)}
        />
        <path
          d={line}
          className={cxLine(drawn)}
        />
      </svg>
    </div>
  );
}

const cxArea = (drawn) =>
  `transition-opacity delay-700 duration-1000 ${drawn ? 'opacity-90' : 'opacity-0'}`;

const cxLine = (drawn) =>
  `fill-none stroke-accent [stroke-dasharray:600] [stroke-dashoffset:600] [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2] ${drawn ? 'animate-draw' : ''}`;
