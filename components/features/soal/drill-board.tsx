"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cqm } from "@/lib/cq";
import { BANK_SOAL, type BankSoal } from "@/lib/data/soal";
import { getPaketSoal } from "@/lib/data/bank";

const NAVY = "#1c1451";
const TEAL = "#849ea0";

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: cqm(30), height: cqm(30) }}
      fill="none"
      stroke="#ffffff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="9 14 4 9 9 4" />
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: cqm(26), height: cqm(26) }}
      fill="none"
      stroke="#6f7d33"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z" />
    </svg>
  );
}

function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

/* ---------- Corat-coret fullscreen (ala DM Instagram) ---------- */

interface Stroke {
  color: string;
  width: number;
  erase?: boolean;
  pts: { x: number; y: number }[];
}

const DOODLE_COLORS = ["#1c1451", "#df5b97", "#849ea0", "#ff7324", "#16a9dd"];

function DoodleOverlay({
  strokes,
  onStrokes,
  onClose,
}: {
  strokes: Stroke[];
  onStrokes: (s: Stroke[]) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const drawing = useRef<Stroke | null>(null);
  const [color, setColor] = useState(DOODLE_COLORS[0]);
  const [width] = useState(4);
  const [tool, setTool] = useState<"pen" | "eraser">("pen");

  function draw() {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const all = drawing.current ? [...strokes, drawing.current] : strokes;
    for (const s of all) {
      if (s.pts.length === 0) continue;
      ctx.globalCompositeOperation = s.erase
        ? "destination-out"
        : "source-over";
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width;
      ctx.beginPath();
      ctx.moveTo(s.pts[0].x, s.pts[0].y);
      for (const p of s.pts) ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  }

  // Siapkan ukuran kanvas + gambar ulang tiap ada perubahan.
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const fit = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = Math.floor(window.innerWidth * dpr);
      cv.height = Math.floor(window.innerHeight * dpr);
      draw();
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  // Kunci scroll + Escape untuk tutup.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  function at(e: { clientX: number; clientY: number }) {
    const r = ref.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  return (
    <div
      className="doodle-scope"
      style={{ position: "fixed", inset: 0, zIndex: 60 }}
      role="dialog"
      aria-modal="true"
      aria-label="Corat-coret"
    >
      <canvas
        ref={ref}
        onPointerDown={(e) => {
          (e.target as Element).setPointerCapture(e.pointerId);
          drawing.current =
            tool === "eraser"
              ? { color: "#000000", width: 28, erase: true, pts: [at(e)] }
              : { color, width, pts: [at(e)] };
          draw();
        }}
        onPointerMove={(e) => {
          if (!drawing.current) return;
          const native = e.nativeEvent as PointerEvent;
          const evs =
            typeof native.getCoalescedEvents === "function"
              ? native.getCoalescedEvents()
              : [native];
          const r = ref.current!.getBoundingClientRect();
          for (const ev of evs) {
            drawing.current.pts.push({
              x: ev.clientX - r.left,
              y: ev.clientY - r.top,
            });
          }
          draw();
        }}
        onPointerUp={() => {
          if (drawing.current) {
            onStrokes([...strokes, drawing.current]);
            drawing.current = null;
          }
        }}
        onPointerCancel={() => {
          drawing.current = null;
          draw();
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          touchAction: "none",
          cursor: tool === "eraser" ? "cell" : "crosshair",
        }}
      />
      {/* toolbar */}
      <div
        className="flex items-center"
        style={{
          position: "absolute",
          top: cqm(24),
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(92vw, 560px)",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: cqm(12),
          columnGap: cqm(16),
          backgroundColor: "rgba(255,255,255,0.95)",
          borderRadius: cqm(50),
          border: `${cqm(2)} solid #d9d9d9`,
          boxShadow: "0 8px 30px rgba(28,20,81,0.18)",
          paddingInline: cqm(24),
          paddingBlock: cqm(12),
        }}
      >
        {DOODLE_COLORS.map((c) => (
          <button
            key={c}
            type="button"
            aria-label={`Warna ${c}`}
            onClick={() => {
              setColor(c);
              setTool("pen");
            }}
            className="cursor-pointer"
            style={{
              width: cqm(32),
              height: cqm(32),
              borderRadius: "50%",
              backgroundColor: c,
              border:
                c === color && tool === "pen"
                  ? `${cqm(3)} solid #1c1451`
                  : `${cqm(2)} solid rgba(28,20,81,0.2)`,
              padding: 0,
            }}
          />
        ))}
        <button
          type="button"
          onClick={() => setTool(tool === "eraser" ? "pen" : "eraser")}
          aria-label="Penghapus"
          title="Penghapus"
          aria-pressed={tool === "eraser"}
          className="cursor-pointer"
          style={{
            width: cqm(44),
            height: cqm(44),
            borderRadius: "50%",
            backgroundColor: tool === "eraser" ? "#1c1451" : "#ffffff",
            border:
              tool === "eraser"
                ? `${cqm(3)} solid #1c1451`
                : `${cqm(2)} solid rgba(28,20,81,0.2)`,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: cqm(24), height: cqm(24) }}
            fill="none"
            stroke={tool === "eraser" ? "#ffffff" : "#1c1451"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
            <path d="M22 21H7" />
            <path d="m5 11 9 9" />
          </svg>
        </button>
        <span
          aria-hidden
          style={{ width: cqm(2), alignSelf: "stretch", backgroundColor: "#d9d9d9" }}
        />
        <button
          type="button"
          onClick={() => onStrokes(strokes.slice(0, -1))}
          disabled={strokes.length === 0}
          aria-label="Urungkan"
          title="Urungkan"
          className="cursor-pointer"
          style={{
            background: "none",
            border: "none",
            padding: cqm(4),
            display: "flex",
            opacity: strokes.length === 0 ? 0.35 : 1,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: cqm(26), height: cqm(26) }}
            fill="none"
            stroke="#1c1451"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <polyline points="9 14 4 9 9 4" />
            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => onStrokes([])}
          disabled={strokes.length === 0}
          aria-label="Hapus semua"
          title="Hapus semua"
          className="cursor-pointer"
          style={{
            background: "none",
            border: "none",
            padding: cqm(4),
            display: "flex",
            opacity: strokes.length === 0 ? 0.35 : 1,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: cqm(26), height: cqm(26) }}
            fill="none"
            stroke="#1c1451"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M4 7h16M9 4h6l1 3H8l1-3zM6 7l1 13h10l1-13" />
          </svg>
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Selesai"
          title="Selesai"
          className="cursor-pointer font-bold"
          style={{
            backgroundColor: "#1c1451",
            color: "#ffffff",
            border: "none",
            borderRadius: cqm(50),
            paddingInline: cqm(24),
            height: cqm(44),
            fontSize: cqm(18),
            fontFamily: "inherit",
          }}
        >
          Selesai
        </button>
      </div>
    </div>
  );
}

/** Panel pink pembahasan — dipakai di kolom kiri (desktop) & bawah kartu (HP). */
function ExpPanel({ q }: { q: BankSoal }) {
  return (
    <div
      className="drill-exp-scope drill-exp-enter"
      style={{
        borderRadius: cqm(20),
        backgroundColor: "#f6e3e9",
        border: `${cqm(2)} solid #e3aec2`,
        paddingTop: cqm(24),
        paddingBottom: cqm(28),
        paddingInline: cqm(25),
      }}
    >
      <p
        className="font-bold"
        style={{ fontSize: cqm(24), color: "#ec5f8a", margin: 0 }}
      >
        Pembahasan
      </p>
      <p
        className="font-bold"
        style={{
          fontSize: cqm(20),
          color: "#ec5f8a",
          margin: 0,
          marginTop: cqm(12),
        }}
      >
        {q.explanationTitle}
      </p>
      <div style={{ marginTop: cqm(16) }}>
        {q.explanation.map((line, i) => (
          <p
            key={i}
            style={{
              fontSize: cqm(20),
              lineHeight: 1.45,
              color: "#ec5f8a",
              margin: 0,
              marginTop: i === 0 ? 0 : cqm(10),
            }}
          >
            {line.map((seg, j) => (
              <span
                key={j}
                style={{ fontWeight: seg.b ? 700 : 400 }}
              >
                {seg.t}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}

export function DrillBoard({
  modeSlug,
  subtesSlug,
  paket,
  tipe,
}: {
  modeSlug: string;
  subtesSlug: string;
  paket: number;
  tipe: "drilling" | "ujian";
}) {
  const router = useRouter();
  // Bank soal dinamis per mode+subtes+paket; fallback ke BANK_SOAL lama.
  const SOAL = getPaketSoal(modeSlug, subtesSlug, paket).length
    ? getPaketSoal(modeSlug, subtesSlug, paket)
    : BANK_SOAL;
  const total = SOAL.length;
  const [qi, setQi] = useState(0); // mulai di Soal 1
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [showExp, setShowExp] = useState(false);
  const [left, setLeft] = useState(30 * 60);
  const [doodleOpen, setDoodleOpen] = useState(false);
  const [doodles, setDoodles] = useState<Record<number, Stroke[]>>({});

  const q = SOAL[qi];
  const answered = SOAL.filter((s) => picks[s.no]).length;

  // Timer khusus mode ujian.
  useEffect(() => {
    if (tipe !== "ujian") return;
    const id = setInterval(() => {
      setLeft((v) => (v > 0 ? v - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [tipe]);

  function goto(n: number) {
    setQi(Math.min(Math.max(n, 0), total - 1));
    setShowExp(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function pick(key: string) {
    setPicks((p) => ({ ...p, [q.no]: key }));
  }

  return (
    <main
      className="drill-scope flex min-h-screen h-[100dvh] w-full flex-col bg-white md:h-auto"
      style={{
        minHeight: "100dvh",
        paddingInline: cqm(64),
        paddingBottom: cqm(60),
      }}
    >
      {/* header: tombol kembali + judul */}
      <div className="drill-head-scope relative">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Kembali"
          className="cursor-pointer transition hover:brightness-[0.95]"
          style={{
            position: "absolute",
            left: 0,
            top: cqm(71),
            width: cqm(66),
            height: cqm(66),
            borderRadius: "50%",
            backgroundColor: "#e3aec2",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BackIcon />
        </button>
        <h1
          className="font-display text-center font-semibold"
          style={{
            paddingTop: cqm(59),
            fontSize: cqm(64),
            color: "#454545",
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          SIAPIN
        </h1>
      </div>

      {/* progress */}
      <div
        className="drill-head-scope flex flex-col items-center"
        style={{ marginTop: cqm(46) }}
      >
        <div
          style={{
            width: cqm(333),
            height: cqm(18),
            borderRadius: cqm(50),
            border: `${cqm(2)} solid #c9cef4`,
            backgroundColor: "transparent",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${(answered / total) * 100}%`,
              backgroundColor: "#c9cef4",
              borderRadius: cqm(50),
              transition: "width 0.3s ease",
            }}
          />
        </div>
        {tipe === "ujian" && (
          <p
            className="font-bold"
            style={{
              margin: 0,
              marginTop: cqm(12),
              fontSize: cqm(20),
              color: left < 60 ? "#df5b97" : NAVY,
            }}
          >
            {fmtTime(left)}
          </p>
        )}
      </div>

      {/* konten: kartu soal dulu di HP, daftar di bawahnya (desktop sebaliknya) */}
      <div
        className="drill-row-scope flex flex-1 flex-col md:flex-row"
        style={{ marginTop: cqm(10), gap: cqm(62) }}
      >
        {/* kiri (desktop) / bawah (HP) */}
        <div className="order-3 w-full shrink-0 md:order-1 md:w-[calc(24.0278cqw*var(--pm,1))]">
          <p
            className="font-bold"
            style={{ fontSize: cqm(24), color: NAVY, margin: 0 }}
          >
            Daftar Soal
          </p>
          <div
            className="drill-num-scope mx-auto grid w-full max-w-[250px] grid-cols-5 md:max-w-none"
            style={{ marginTop: cqm(26), gap: cqm(24), rowGap: cqm(26) }}
          >
            {SOAL.map((s, i) => {
              const isCurrent = i === qi;
              const isAnswered = !!picks[s.no];
              return (
                <button
                  key={s.no}
                  type="button"
                  onClick={() => goto(i)}
                  className="flex cursor-pointer items-center justify-center font-bold transition hover:brightness-[0.96] active:scale-[0.95] md:max-w-[calc(3.4722cqw*var(--pm,1))]"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: cqm(10),
                    backgroundColor: isCurrent
                      ? "#f4e0df"
                      : isAnswered
                        ? "#e6f0ee"
                        : "#ffffff",
                    border: `${cqm(2)} solid ${isAnswered && !isCurrent ? TEAL : "#6c6363"}`,
                    color: NAVY,
                    fontSize: cqm(24),
                    fontFamily: "inherit",
                  }}
                >
                  {s.no}
                </button>
              );
            })}
          </div>

          {/* panel pembahasan (desktop) */}
          {showExp && (
            <div className="hidden md:block" style={{ marginTop: cqm(27) }}>
              <ExpPanel q={q} />
            </div>
          )}
        </div>

        {/* kanan (desktop) / atas (HP): kartu soal (melar penuh) + tombol aksi */}
        <div className="order-1 flex min-w-0 flex-1 flex-col md:order-2">
          <div
            key={q.no}
            className="drill-card-scope drill-q-enter min-h-0 overflow-y-auto md:min-h-[auto] md:overflow-visible"
            style={{
              flex: 1,
              borderRadius: cqm(20),
              backgroundColor: "#dbe9ea",
              border: `${cqm(2)} solid ${TEAL}`,
              paddingTop: cqm(36),
              paddingBottom: cqm(40),
              paddingLeft: cqm(52),
              paddingRight: cqm(42),
            }}
          >
            <div className="drill-text-scope">
            <p
              className="font-bold"
              style={{ fontSize: cqm(24), color: NAVY, margin: 0 }}
            >
              Soal {q.no} dari {total}
            </p>
            <div style={{ marginTop: cqm(26) }}>
              {q.stimulus.map((par, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: cqm(20),
                    lineHeight: 1.6,
                    color: NAVY,
                    margin: 0,
                    marginTop: i === 0 ? 0 : cqm(12),
                  }}
                >
                  {par}
                </p>
              ))}
              <p
                style={{
                  fontSize: cqm(20),
                  lineHeight: 1.6,
                  color: NAVY,
                  margin: 0,
                  marginTop: cqm(16),
                }}
              >
                {q.prompt.map((seg, i) => (
                  <span key={i} style={{ fontWeight: seg.b ? 700 : 400 }}>
                    {seg.t}
                  </span>
                ))}
              </p>
            </div>
            </div>
            <div
              className="flex flex-col"
              style={{ gap: cqm(27), marginTop: cqm(48) }}
            >
              {q.options.map((o) => {
                const isActive = picks[q.no] === o.key;
                return (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => pick(o.key)}
                    className="flex cursor-pointer items-center transition hover:brightness-[0.98] active:scale-[0.99]"
                    style={{
                      height: cqm(86),
                      borderRadius: cqm(50),
                      backgroundColor: isActive ? TEAL : "#ffffff",
                      border: "none",
                      boxShadow: isActive
                        ? `0 ${cqm(4)} ${cqm(14)} rgba(28, 20, 81, 0.22)`
                        : `0 ${cqm(2)} ${cqm(8)} rgba(28, 20, 81, 0.08)`,
                      paddingLeft: cqm(46),
                      gap: cqm(20),
                      fontFamily: "inherit",
                      textAlign: "left",
                    }}
                  >
                    <span
                      className="font-bold"
                      style={{ fontSize: cqm(36), color: NAVY, lineHeight: 1 }}
                    >
                      {o.key}
                    </span>
                    <span style={{ fontSize: cqm(20), color: NAVY }}>
                      {o.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* tombol aksi — selebar kartu di HP, cluster tengah di desktop */}
          <div
            className="flex items-center justify-center"
            style={{ gap: cqm(20), marginTop: cqm(55) }}
          >
            <button
              type="button"
              onClick={() => setShowExp(!showExp)}
              className="min-w-0 flex-1 cursor-pointer font-bold transition hover:brightness-[0.97] md:flex-none md:max-w-[calc(18.3333cqw*var(--pm,1))]"
              style={{
                width: "100%",
                minHeight: cqm(47),
                borderRadius: cqm(50),
                backgroundColor: "#f6e3e9",
                border: `${cqm(2)} solid #e3aec2`,
                color: "#e3aec2",
                fontSize: cqm(24),
                fontFamily: "inherit",
              }}
            >
              Pembahasan
            </button>
            <button
              type="button"
              onClick={() => setDoodleOpen(true)}
              aria-label="Corat-coret"
              title="Corat-coret"
              className="shrink-0 cursor-pointer transition hover:brightness-[0.95]"
              style={{
                width: cqm(47),
                height: cqm(47),
                borderRadius: "50%",
                backgroundColor: "#e3e6c1",
                border: `${cqm(2)} solid #a1ac46`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PencilIcon />
            </button>
            <button
              type="button"
              onClick={() => goto(qi + 1)}
              className="min-w-0 flex-1 cursor-pointer font-bold transition hover:brightness-[0.97] md:flex-none md:max-w-[calc(18.3333cqw*var(--pm,1))]"
              style={{
                width: "100%",
                minHeight: cqm(47),
                borderRadius: cqm(50),
                backgroundColor: "#f5eafb",
                border: `${cqm(2)} solid #cfb1ed`,
                color: "#cfb1ed",
                fontSize: cqm(24),
                fontFamily: "inherit",
              }}
            >
              Berikutnya
            </button>
          </div>
        </div>

        {/* panel pembahasan (HP) — di bawah kartu, Daftar Soal otomatis kegeser */}
        {showExp && (
          <div className="order-2 md:hidden" style={{ marginTop: cqm(27) }}>
            <ExpPanel q={q} />
          </div>
        )}
      </div>

      {/* ruang napas bawah agar konten tidak nempel layar (HP saja) */}
      <div className="h-10 shrink-0 md:h-0" aria-hidden />

      {/* overlay corat-coret */}
      {doodleOpen && (
        <DoodleOverlay
          strokes={doodles[q.no] ?? []}
          onStrokes={(s) => setDoodles((d) => ({ ...d, [q.no]: s }))}
          onClose={() => setDoodleOpen(false)}
        />
      )}
    </main>
  );
}
