"use client";

import { useEffect, useState } from "react";
import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";
import { modes } from "@/lib/data/modes";
import { RadarChart } from "./radar-chart";

// Warna per mode — konsisten dengan modes.ts
const MODE_STYLE: Record<string, { label: string; color: string }> = {
  "tka-smp": { label: "TKA SMP", color: "#688d37" },
  "tka-sma": { label: "TKA SMA", color: "#5858b8" },
  snbt: { label: "SNBT", color: "#df5b97" },
};

// Peta slug subtes → label (dari modes.ts) untuk grafik radar.
function subtesLabel(slug: string): string {
  for (const m of modes) {
    const s = m.subtests.find((x) => x.slug === slug);
    if (s) return s.short ?? s.name;
  }
  // normalisasi beberapa nama umum
  const map: Record<string, string> = {
    "b-inggris": "B. Inggris",
    matematika: "Matematika",
    ipa: "IPA",
    fisika: "Fisika",
    kimia: "Kimia",
    biologi: "Biologi",
    ekonomi: "Ekonomi",
    pm: "PM",
    ppu: "PPU",
    pbm: "PBM",
    pk: "PK",
    lbi: "LBI",
    lbe: "LBE",
  };
  return map[slug] ?? slug;
}

interface DiagResp {
  data?: {
    progress?: { tkaSmp: number; tkaSma: number; snbt: number };
    ringkasan?: {
      totalSesi?: number;
      tkaSmp?: { benar: number; total: number; sesi: number };
      tkaSma?: { benar: number; total: number; sesi: number };
      snbt?: { benar: number; total: number; sesi: number };
    };
    perSubtes?: Record<string, { benar: number; total: number; sesi: number }>;
  };
  error?: string;
}

export function AiDiagnostic() {
  const { user } = useAuth();
  const email = user?.email ?? null;

  const [progress, setProgress] = useState<
    { label: string; color: string; pct: number; sesi: number }[]
  >([
    { label: "TKA SMP", color: "#688d37", pct: 0, sesi: 0 },
    { label: "TKA SMA", color: "#5858b8", pct: 0, sesi: 0 },
    { label: "SNBT", color: "#df5b97", pct: 0, sesi: 0 },
  ]);
  const [radar, setRadar] = useState<{ labels: string[]; values: number[] }>({
    labels: [],
    values: [],
  });
  const [kosong, setKosong] = useState(false);

  useEffect(() => {
    if (!email) return;
    let aktif = true;
    fetch(`/api/diagnostik?email=${encodeURIComponent(email)}`)
      .then((r) => r.json())
      .then((j: DiagResp) => {
        if (!aktif) return;
        const d = j.data;
        if (!d || j.error) {
          setKosong(true);
          return;
        }
        const p = d.progress ?? { tkaSmp: 0, tkaSma: 0, snbt: 0 };
        const ring = d.ringkasan ?? {};
        setProgress([
          {
            label: "TKA SMP",
            color: "#688d37",
            pct: p.tkaSmp ?? 0,
            sesi: ring.tkaSmp?.sesi ?? 0,
          },
          {
            label: "TKA SMA",
            color: "#5858b8",
            pct: p.tkaSma ?? 0,
            sesi: ring.tkaSma?.sesi ?? 0,
          },
          {
            label: "SNBT",
            color: "#df5b97",
            pct: p.snbt ?? 0,
            sesi: ring.snbt?.sesi ?? 0,
          },
        ]);

        // radar dari per-subtes (top 8 by jumlah soal)
        const sub = d.perSubtes ?? {};
        const entries = Object.entries(sub)
          .filter(([, v]) => v.total > 0)
          .sort((a, b) => b[1].total - a[1].total)
          .slice(0, 8);
        if (entries.length === 0) {
          setKosong(true);
          setRadar({ labels: [], values: [] });
          return;
        }
        setKosong(false);
        setRadar({
          labels: entries.map(([slug]) => subtesLabel(slug)),
          values: entries.map(([, v]) =>
            Math.round((v.benar / v.total) * 100) / 100,
          ),
        });
      })
      .catch(() => {
        if (aktif) setKosong(true);
      });
    return () => {
      aktif = false;
    };
  }, [email]);

  const totalSesi = progress.reduce((a, b) => a + b.sesi, 0);

  return (
    <div
      className="ai-scope flex w-full flex-col items-stretch gap-[calc(4.5139cqw*var(--pm,1))] overflow-hidden rounded-[calc(4.86cqw*var(--ds,1))] bg-white md:flex-row md:gap-0"
      style={{
        border: `${cqm(2)} solid rgba(108, 99, 99, 0.5)`,
        borderRadius: cqm(70),
      }}
    >
      {/* Left panel — Diagnostic AI */}
      <div
        className="flex flex-col justify-between"
        style={{
          flexGrow: 564,
          flexShrink: 1,
          flexBasis: 0,
          paddingInline: cqm(60),
          paddingBlock: cqm(54),
        }}
      >
        <div>
          <h2
            className="font-bold"
            style={{ fontSize: cqm(24), color: "#1c1451" }}
          >
            Diagnostic AI
          </h2>
          <p
            className="mt-[calc(0.6cqw*var(--ds,1))] font-bold"
            style={{ fontSize: cqm(16), color: "#1c1451" }}
          >
            Temukan Kelemahanmu dan perbaiki!
          </p>

          {/* progress list — dari riwayat pengerjaan riil */}
          <div className="mt-[calc(2.6cqw*var(--ds,1))] flex flex-col gap-[calc(1.7cqw*var(--ds,1))]">
            {progress.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-[calc(1cqw*var(--ds,1))]"
              >
                <span
                  className="font-bold"
                  style={{
                    width: cqm(104),
                    fontSize: cqm(24),
                    color: p.color,
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.label}
                </span>
                <div
                  className="overflow-hidden rounded-full"
                  style={{
                    width: cqm(142),
                    height: cqm(23),
                    border: `${cqm(1)} solid ${p.color}`,
                    backgroundColor: "transparent",
                  }}
                >
                  {p.pct > 0 && (
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, p.pct)}%`,
                        backgroundColor: p.color,
                      }}
                    />
                  )}
                </div>
                <span
                  className="font-bold"
                  style={{ fontSize: cqm(12), color: p.color }}
                >
                  {p.pct}%
                </span>
              </div>
            ))}
          </div>
          {totalSesi === 0 && (
            <p
              className="font-normal"
              style={{
                marginTop: cqm(14),
                fontSize: cqm(13),
                color: "#8a8a9a",
                lineHeight: 1.4,
              }}
            >
              Belum ada riwayat pengerjaan. Kerjakan latihan soal di menu Soal
              agar diagnostik terisi otomatis.
            </p>
          )}
        </div>

        {/* mascot motivation bubble */}
        <div
          className="flex items-center gap-[calc(0.9cqw*var(--ds,1))]"
          style={{ marginTop: cqm(20) }}
        >
          <img
            src="/visual/maskot.png"
            alt="Maskot SIAPIN"
            style={{ width: cqm(70), height: cqm(71), objectFit: "contain" }}
          />
          <div
            className="flex items-center rounded-[calc(1.04cqw*var(--ds,1))] px-[calc(1.4cqw*var(--ds,1))] py-[calc(0.9cqw*var(--ds,1))]"
            style={{
              backgroundColor: "#e0f0cf",
              border: `${cqm(1)} solid #688d37`,
              borderRadius: cqm(15),
            }}
          >
            <span
              className="font-normal"
              style={{ fontSize: cqm(16), color: "#1c1451" }}
            >
              {totalSesi === 0
                ? "Mulai latihan pertamamu sekarang!"
                : "Ayo tingkatkan dan jangan mudah menyerah!"}
            </span>
          </div>
        </div>
      </div>

      {/* Vertical divider (desktop saja; HP pakai gap) */}
      <div
        aria-hidden
        className="hidden md:block"
        style={{
          // min 1px agar tetap terlihat di layar sempit (sub-pixel < 1px di-render 0 oleh browser)
          width: `clamp(1px, ${cqm(2)}, 2px)`,
          flexShrink: 0,
          backgroundColor: "#6c6363",
          marginTop: cqm(54),
          marginBottom: cqm(37),
        }}
      />

      {/* Right panel — Grafik Diagnostic */}
      <div
        className="flex flex-col"
        style={{
          flexGrow: 603,
          flexShrink: 1,
          flexBasis: 0,
          paddingInline: cqm(60),
          paddingBlock: cqm(54),
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-[calc(1cqw*var(--ds,1))]">
          <h3
            className="font-bold"
            style={{ fontSize: cqm(24), color: "#1c1451" }}
          >
            Grafik Diagnostic
          </h3>
          {/* mode pills */}
          <div className="flex gap-[calc(0.9cqw*var(--ds,1))]">
            {[
              { t: "TKA SMP", c: "#cfedc0" },
              { t: "TKA SMA", c: "#5858b8" },
              { t: "SNBT", c: "#e3aec2" },
            ].map((p) => (
              <span
                key={p.t}
                className="flex items-center justify-center rounded-full font-bold text-white"
                style={{
                  height: cqm(30),
                  paddingInline: cqm(16),
                  backgroundColor: p.c,
                  fontSize: cqm(16),
                }}
              >
                {p.t}
              </span>
            ))}
          </div>
        </div>

        {/* radar: labels left, chart right */}
        <div
          className="flex items-center"
          style={{ gap: cqm(20), marginTop: cqm(40) }}
        >
          {radar.labels.length > 0 ? (
            <>
              <div className="flex flex-col gap-[calc(0.8cqw*var(--ds,1))]">
                {radar.labels.map((s) => (
                  <span
                    key={s}
                    className="font-bold"
                    style={{
                      fontSize: cqm(16),
                      color: "#1c1451",
                      lineHeight: 1.2,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <RadarChart size={340} labels={radar.labels} values={radar.values} />
            </>
          ) : (
            <p
              className="font-normal"
              style={{ fontSize: cqm(14), color: "#8a8a9a", lineHeight: 1.5 }}
            >
              {kosong
                ? "Belum ada data pengerjaan untuk ditampilkan. Selesaikan latihan soal pada menu Soal, lalu grafik ini akan terisi otomatis."
                : "Memuat data diagnostik…"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
