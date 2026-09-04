"use client";

import { useEffect, useMemo, useState } from "react";
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

// Urutan & warna label subtes per mode (dari modes.ts) — dipakai grafik radar.
const SUBTES_META: Record<string, { slug: string; short: string; color: string }[]> =
  Object.fromEntries(
    modes.map((m) => [
      m.slug,
      m.subtests.map((s) => ({
        slug: s.slug,
        short: s.short ?? s.name,
        color: s.color,
      })),
    ]),
  );

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

interface SubAgg {
  benar: number;
  total: number;
  sesi: number;
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
    perSubtes?: Record<string, SubAgg>;
    perSubtesByMode?: Record<string, Record<string, SubAgg>>;
  };
  error?: string;
}

const MODE_ORDER = ["tka-smp", "tka-sma", "snbt"] as const;

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
  // perSubtesByMode mentah dari API — kunci per subtes slug
  const [rawByMode, setRawByMode] = useState<Record<string, Record<string, SubAgg>>>({});
  // mode yang sedang dipilih di grafik radar (default "snbt")
  const [activeMode, setActiveMode] = useState<string>("snbt");
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

        const byMode = d.perSubtesByMode ?? {};
        setRawByMode(byMode);

        const totalSoalAll = Object.values(byMode).reduce(
          (acc, subs) =>
            acc +
            Object.values(subs).reduce((a, s) => a + (s?.total ?? 0), 0),
          0,
        );
        if (totalSoalAll === 0) {
          setKosong(true);
          return;
        }
        setKosong(false);

        // default mode: yang pertama punya data (urutan tetap tka-smp→sma→snbt)
        const first = MODE_ORDER.find((m) => {
          const subs = byMode[m] ?? {};
          return Object.values(subs).some((s) => (s?.total ?? 0) > 0);
        });
        if (first) setActiveMode((prev) => prev || first);
      })
      .catch(() => {
        if (aktif) setKosong(true);
      });
    return () => {
      aktif = false;
    };
  }, [email]);

  const totalSesi = progress.reduce((a, b) => a + b.sesi, 0);

  // --- Data radar utk mode aktif: SEMUA subtes mode tsb jadi sumbu.
  // Subtes yg belum dikerjakan → nilai 0 (titik tengah). Akurasi 0..1.
  const radar = useMemo(() => {
    const metas = SUBTES_META[activeMode] ?? [];
    const subs = rawByMode[activeMode] ?? {};
    const labels: string[] = [];
    const values: number[] = [];
    const done: boolean[] = [];
    for (const meta of metas) {
      const agg = subs[meta.slug];
      const total = agg?.total ?? 0;
      labels.push(meta.short);
      values.push(
        total > 0 ? Math.round(((agg?.benar ?? 0) / total) * 100) / 100 : 0,
      );
      done.push(total > 0);
    }
    return { labels, values, done, nDone: done.filter(Boolean).length };
  }, [activeMode, rawByMode]);

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
          {/* mode pills — klik untuk ganti mode grafik */}
          <div className="flex gap-[calc(0.9cqw*var(--ds,1))]">
            {MODE_ORDER.map((slug) => {
              const st = MODE_STYLE[slug];
              const active = slug === activeMode;
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setActiveMode(slug)}
                  className="cursor-pointer font-bold transition"
                  style={{
                    height: cqm(30),
                    paddingInline: cqm(16),
                    borderRadius: cqm(999),
                    border: "none",
                    fontSize: cqm(15),
                    color: active ? "#ffffff" : st.color,
                    backgroundColor: active ? st.color : "transparent",
                    boxShadow: active
                      ? "none"
                      : `inset 0 0 0 ${cqm(2)} ${st.color}`,
                    opacity: 1,
                  }}
                >
                  {st.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* radar: semua subtes mode aktif sebagai sumbu, label mengelilingi */}
        <div
          className="flex items-center justify-center"
          style={{ marginTop: cqm(40) }}
        >
          {!kosong && radar.labels.length > 0 ? (
            <div className="relative flex items-center justify-center">
              <RadarChart
                size={360}
                labels={radar.labels}
                values={radar.values}
                showEmpty
              />
              {radar.nDone === 0 && (
                <p
                  className="font-bold"
                  style={{
                    position: "absolute",
                    maxWidth: cqm(170),
                    textAlign: "center",
                    fontSize: cqm(13),
                    color: "#b0b0c0",
                    lineHeight: 1.45,
                    pointerEvents: "none",
                  }}
                >
                  Belum ada data pengerjaan. Coba kerjakan latihan soal{" "}
                  {MODE_STYLE[activeMode]?.label ?? ""}!
                </p>
              )}
            </div>
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
