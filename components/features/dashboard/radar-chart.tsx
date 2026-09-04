"use client";

/** Radar chart approximation matching the "Grafik Diagnostic" design:
 * pentagon/hexagon grid in #e5e7eb, magenta #c207af data polygon + dots.
 * Pure SVG so it scales with the container (cqw sizing handled by parent). */

// Default fallback — dipakai bila parent tidak mengirim data riil.
const DEFAULT_LABELS = [
  "Matematika",
  "B. Indonesia",
  "B. Inggris",
  "Ekonomi",
  "Biologi",
  "Kimia",
  "PKN",
  "Sejarah",
];

// values 0..1 per label (roughly matching the magenta polygon in the design)
const DEFAULT_VALUES = [0.72, 0.55, 0.6, 0.68, 0.5, 0.42, 0.58, 0.5];

export function RadarChart({
  size = 340,
  labelSide = "left",
  labels = DEFAULT_LABELS,
  values = DEFAULT_VALUES,
}: {
  size?: number;
  labelSide?: "left" | "right";
  labels?: string[];
  /** 0..1 per label */
  values?: number[];
}) {
  const cx = size / 2;
  const cy = size / 2;
  const R = size * 0.36;
  const n = labels.length;

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, r: number) => {
    const a = angle(i);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
  };
  const poly = (r: number) =>
    Array.from({ length: n }, (_, i) => point(i, r).join(",")).join(" ");

  // data polygon points (clamp 0..1)
  const safe = values.map((v) => Math.max(0, Math.min(1, v || 0)));
  const dataPts = labels.map((_, i) => point(i, R * (safe[i] ?? 0))).join(" ");

  return (
    <div
      className="relative"
      style={{
        width: "100%",
        maxWidth: `calc(${((size / 1440) * 100).toFixed(4)}cqw * var(--pm, 1))`,
        aspectRatio: "1 / 1",
      }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full overflow-visible">
        {/* grid rings */}
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <polygon
            key={f}
            points={poly(R * f)}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={1}
          />
        ))}
        {/* spokes */}
        {labels.map((_, i) => {
          const [x, y] = point(i, R);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          );
        })}
        {/* data polygon */}
        <polygon
          points={dataPts}
          fill="rgba(194,7,175,0.18)"
          stroke="#c207af"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        {/* data dots */}
        {labels.map((_, i) => {
          const [x, y] = point(i, R * (safe[i] ?? 0));
          return <circle key={i} cx={x} cy={y} r={4} fill="#c207af" />;
        })}
      </svg>
    </div>
  );
}
