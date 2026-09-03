"use client";

import { cqm } from "@/lib/cq";

function Star({ color, style }: { color: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 72"
      style={{ width: cqm(60), height: cqm(72), ...style }}
      aria-hidden
    >
      <path
        d="M30 2 L37 24 L60 30 L37 36 L30 58 L23 36 L0 30 L23 24 Z"
        fill={color}
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative w-full"
      style={{
        paddingTop: cqm(84),
        paddingBottom: cqm(24),
      }}
    >
      {/* decorative stars */}
      <Star color="#f6e3e9" style={{ position: "absolute", left: cqm(100), top: cqm(20) }} />
      <Star color="#e6b2e2" style={{ position: "absolute", left: cqm(70), top: cqm(140) }} />
      <Star color="#c9cef4" style={{ position: "absolute", right: cqm(100), top: cqm(20) }} />
      <Star color="#cfb1ed" style={{ position: "absolute", right: cqm(66), top: cqm(140) }} />

      <div className="flex flex-col items-center text-center">
        <h1
          className="font-bold"
          style={{
            fontSize: cqm(64),
            lineHeight: 1.26,
            color: "#454545",
          }}
        >
          RAIH KAMPUS IMPIANMU!
        </h1>
        <div className="mt-[0.4cqw] flex items-center gap-[1cqw]">
          <span
            className="font-bold"
            style={{ fontSize: cqm(64), color: "#cfb1ed", lineHeight: 1.26 }}
          >
            SIAP
          </span>
          <span
            className="inline-flex items-center rounded-[1.74cqw] px-[0.9cqw] font-bold text-white"
            style={{
              backgroundColor: "#cfb1ed",
              borderRadius: cqm(25),
              fontSize: cqm(64),
              lineHeight: 1.26,
              paddingInline: cqm(22),
              paddingBlock: cqm(0),
            }}
          >
            TAKLUKKAN?
          </span>
        </div>
      </div>
    </section>
  );
}
