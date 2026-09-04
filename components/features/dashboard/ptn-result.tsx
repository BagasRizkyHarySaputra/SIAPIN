"use client";

import { useEffect, useRef } from "react";
import { cqm } from "@/lib/cq";
import type { PtnData } from "./ptn-popup";

const RECS = [
  {
    n: "1",
    title: "Tingkatkan Nilai SNBT/TKA",
    desc: "Targetkan skor minimal 760 untuk peluang lebih tinggi.",
    prio: "Prioritas Tinggi",
    bg: "#fbe3e6",
    numBg: "#f2a3b5",
    prioBg: "#ef5b7e",
  },
  {
    n: "2",
    title: "Perkuat Mata Pelajaran Utama",
    desc: "Fokus pada Matematika, Fisika dan Informatika.",
    prio: "Prioritas Sedang",
    bg: "#e9f5e4",
    numBg: "#9ccc65",
    prioBg: "#7cb342",
  },
  {
    n: "3",
    title: "Latihan Soal Secara Konsisten",
    desc: "Kerjakan minimal 20 soal per hari.",
    prio: "Prioritas Rendah",
    bg: "#ece9f8",
    numBg: "#b3a7e6",
    prioBg: "#8b7ed8",
  },
];

function initials(name: string) {
  const w = name.split(/\s+/).filter(Boolean);
  return ((w[0]?.[0] ?? "") + (w[1]?.[0] ?? "")).toUpperCase() || "?";
}

function Donut() {
  const r = 48;
  const C = 2 * Math.PI * r;
  const teal = C * 0.62;
  return (
    <svg
      viewBox="0 0 120 120"
      style={{ width: cqm(110), height: cqm(110) }}
      aria-hidden
    >
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#2a235c"
        strokeWidth="16"
      />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#45b8ac"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray={`${teal} ${C}`}
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
}

export function PtnResult({
  data,
  onEdit,
}: {
  data: PtnData;
  onEdit: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll halus ke hasil begitu muncul setelah Simpan.
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  return (
    <div
      ref={ref}
      className="grid w-full md:grid-cols-3"
      style={{ gap: cqm(40), scrollMarginTop: cqm(24) }}
    >
      {/* kartu universitas pilihan */}
      <div
        className="flex w-full flex-col items-center"
        style={{
          borderRadius: cqm(30),
          backgroundColor: "#ffffff",
          border: `${cqm(2)} solid #688d37`,
          boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.08)`,
          padding: cqm(32),
        }}
      >
        <div className="flex w-full items-center" style={{ gap: cqm(20) }}>
          <span
            className="flex shrink-0 items-center justify-center font-bold"
            style={{
              width: cqm(72),
              height: cqm(72),
              borderRadius: "50%",
              backgroundColor: "#1c1451",
              color: "#ffffff",
              fontSize: cqm(28),
            }}
          >
            {initials(data.univ)}
          </span>
          <p
            className="font-bold"
            style={{
              fontSize: cqm(18),
              lineHeight: 1.3,
              color: "#1c1451",
              margin: 0,
            }}
          >
            {data.univ}
          </p>
        </div>
        <p
          className="font-bold"
          style={{
            fontSize: cqm(18),
            color: "#1c1451",
            margin: 0,
            marginTop: cqm(20),
            textAlign: "center",
          }}
        >
          {data.jurusan}
        </p>
        <button
          type="button"
          onClick={onEdit}
          className="cursor-pointer font-bold transition hover:brightness-[0.97]"
          style={{
            marginTop: cqm(20),
            borderRadius: cqm(50),
            backgroundColor: "#ffffff",
            border: `${cqm(2)} solid #688d37`,
            color: "#1c1451",
            fontSize: cqm(16),
            fontFamily: "inherit",
            paddingInline: cqm(28),
            height: cqm(44),
          }}
        >
          Ubah Pilihan
        </button>
      </div>

      {/* kartu estimasi peluang */}
      <div
        className="flex w-full flex-col items-center"
        style={{
          borderRadius: cqm(30),
          backgroundColor: "#ffffff",
          border: `${cqm(2)} solid #2a235c`,
          boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.08)`,
          padding: cqm(32),
        }}
      >
        <p
          className="font-bold"
          style={{ fontSize: cqm(20), color: "#1c1451", margin: 0 }}
        >
          Estimasi Peluang Masuk
        </p>
        <div style={{ marginTop: cqm(16) }}>
          <Donut />
        </div>
        <p
          className="font-bold"
          style={{
            fontSize: cqm(18),
            color: "#e2603c",
            margin: 0,
            marginTop: cqm(12),
          }}
        >
          Peluang Sedang
        </p>
        <p
          style={{
            fontSize: cqm(15),
            lineHeight: 1.4,
            color: "#1c1451",
            margin: 0,
            marginTop: cqm(8),
            textAlign: "center",
          }}
        >
          Kamu masih perlu meningkatkan nilai untuk memperbesar peluangmu.
        </p>
        <span
          className="font-bold"
          style={{
            marginTop: cqm(12),
            borderRadius: cqm(50),
            backgroundColor: "#ececf1",
            color: "#6c6363",
            fontSize: cqm(14),
            paddingInline: cqm(20),
            paddingBlock: cqm(8),
          }}
        >
          Estimasi nilai kompetitif: 760
        </span>
      </div>

      {/* kartu rekomendasi */}
      <div
        className="flex w-full flex-col"
        style={{
          borderRadius: cqm(30),
          backgroundColor: "#ffffff",
          border: `${cqm(2)} solid #e3aec2`,
          boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.08)`,
          padding: cqm(24),
        }}
      >
        <p
          className="font-bold"
          style={{ fontSize: cqm(17), color: "#1c1451", margin: 0 }}
        >
          Rekomendasi untuk Meningkatkan Peluang
        </p>
        <div className="flex flex-col" style={{ gap: cqm(12), marginTop: cqm(16) }}>
          {RECS.map((r) => (
            <div
              key={r.n}
              className="flex items-center"
              style={{
                gap: cqm(12),
                borderRadius: cqm(14),
                backgroundColor: r.bg,
                padding: cqm(12),
              }}
            >
              <span
                className="flex shrink-0 items-center justify-center font-bold"
                style={{
                  width: cqm(28),
                  height: cqm(28),
                  borderRadius: "50%",
                  backgroundColor: r.numBg,
                  color: "#ffffff",
                  fontSize: cqm(14),
                }}
              >
                {r.n}
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <p
                  className="font-bold"
                  style={{ fontSize: cqm(14), color: "#1c1451", margin: 0 }}
                >
                  {r.title}
                </p>
                <p style={{ fontSize: cqm(12), color: "#1c1451", margin: 0 }}>
                  {r.desc}
                </p>
              </div>
              <span
                className="shrink-0 font-bold"
                style={{
                  borderRadius: cqm(50),
                  backgroundColor: r.prioBg,
                  color: "#ffffff",
                  fontSize: cqm(10),
                  paddingInline: cqm(10),
                  paddingBlock: cqm(4),
                  whiteSpace: "nowrap",
                }}
              >
                {r.prio}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
