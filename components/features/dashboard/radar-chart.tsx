"use client";

import React from "react";

/** Radar chart — grid konsentris #e5e7eb, poligon data magenta #c207af + titik.
 * Label ditulis MENGELILINGI chart di ujung tiap sumbu (gaya grafik stats
 * mobile), jadi semua sumbu selalu terlihat & mudah dibaca. Pure SVG. */

// Default fallback — dipakai bila parent tidak mengirim data riil.
const DEFAULT_LABELS = ["PM", "PPU", "PBM", "PK", "LBI", "LBE"];
const DEFAULT_VALUES = [0.75, 0, 0, 0.5, 0, 0];

interface Pt {
  x: number;
  y: number;
}

export function RadarChart({
  size = 340,
  labels = DEFAULT_LABELS,
  values = DEFAULT_VALUES,
  showEmpty = true,
}: {
  /** Ukuran viewBox SVG (persegi). */
  size?: number;
  labels?: string[];
  /** 0..1 per label */
  values?: number[];
  /** true: label subtes yang belum dikerjakan (nilai 0) tetap tampil. */
  showEmpty?: boolean;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const R = size * 0.33; // sedikit lebih kecil agar ruang label di tepi
  const n = labels.length;

  // sudut mulai dari atas (-90deg), searah jarum jam
  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, r: number): Pt => {
    const a = angle(i);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };
  const poly = (r: number) =>
    Array.from({ length: n }, (_, i) => {
      const p = point(i, r);
      return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ");

  const safe = values.map((v) => Math.max(0, Math.min(1, v || 0)));
  const dataPts = labels
    .map((_, i) => {
      const p = point(i, R * (safe[i] ?? 0));
      return `${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    })
    .join(" ");

  // Posisi label: perpanjang jari-jari sedikit melewati lingkaran terluar.
  const labelR = R + size * 0.075;

  return (
    <div
      className="relative shrink-0"
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
          const p = point(i, R);
          return (
            <line
              key={`spoke-${i}`}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          );
        })}
        {/* data polygon */}
        {n > 2 ? (
          <polygon
            points={dataPts}
            fill="rgba(194,7,175,0.18)"
            stroke="#c207af"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        ) : (
          /* 2 sumbu → garis (bukan poligon tertutup) */
          <polyline
            points={dataPts}
            fill="none"
            stroke="#c207af"
            strokeWidth={2}
          />
        )}
        {/* data dots */}
        {labels.map((_, i) => {
          const p = point(i, R * (safe[i] ?? 0));
          const isZero = safe[i] === 0;
          return (
            <circle
              key={`dot-${i}`}
              cx={p.x}
              cy={p.y}
              r={isZero ? 2.5 : 4}
              fill={isZero ? "#c9c9d6" : "#c207af"}
            />
          );
        })}
        {/* label tiap sumbu — mengelilingi chart */}
        {labels.map((label, i) => {
          if (!showEmpty && safe[i] === 0) return null;
          const p = point(i, labelR);
          const a = angle(i);
          // text-anchor berdasar posisi sudut
          const cos = Math.cos(a);
          const sin = Math.sin(a);
          let anchor: "start" | "middle" | "end" = "middle";
          if (Math.abs(cos) < 0.25) anchor = "middle";
          else if (cos > 0) anchor = "start";
          else anchor = "end";
          const dy = sin > 0.35 ? 14 : sin < -0.35 ? -6 : 4;
          return (
            <text
              key={`label-${i}`}
              x={p.x}
              y={p.y + dy}
              textAnchor={anchor}
              fill={safe[i] === 0 ? "#9aa0ae" : "#1c1451"}
              fontSize={15}
              fontWeight={700}
              fontFamily="inherit"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
