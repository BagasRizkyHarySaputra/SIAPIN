"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cqm } from "@/lib/cq";
import { BANK_SOAL, type BankSoal } from "@/lib/data/soal";
import { getPaketSoal } from "@/lib/data/bank";
import { useAuth } from "@/lib/store/auth";

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

/** Hasil hitung sesi: skor + rekap benar/salah + analisa per blok 10 soal. */
type HasilSesi = {
  benar: number;
  salah: number;
  total: number;
  skor: number;
  blok: { label: string; benar: number; total: number }[];
};

/** Overlay hasil submit — muncul setelah tombol Submit di soal terakhir. */
function ResultOverlay({
  hasil,
  onBack,
  onRetry,
}: {
  hasil: HasilSesi;
  onBack: () => void;
  onRetry: () => void;
}) {
  const msg =
    hasil.skor >= 85
      ? "Luar biasa! Pertahankan dan asah lagi bagian yang belum sempurna."
      : hasil.skor >= 70
        ? "Bagus! Sedikit lagi menuju skor terbaik."
        : hasil.skor >= 50
          ? "Terus berlatih, kamu pasti bisa naikkan skor ini."
          : "Jangan menyerah. Pelajari pembahasan lalu coba lagi.";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        backgroundColor: "rgba(28, 20, 81, 0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: cqm(20),
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Hasil latihan"
        style={{
          width: "100%",
          maxWidth: cqm(560),
          maxHeight: "90dvh",
          overflowY: "auto",
          backgroundColor: "#ffffff",
          borderRadius: cqm(44),
          paddingTop: cqm(40),
          paddingBottom: cqm(38),
          paddingInline: cqm(40),
          textAlign: "center",
        }}
      >
        <div
          aria-hidden
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: cqm(72),
            height: cqm(72),
            margin: "0 auto",
            borderRadius: "50%",
            backgroundColor: hasil.skor >= 70 ? "#e7f4ea" : "#fdeceb",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: cqm(40), height: cqm(40) }}
            fill="none"
            stroke={hasil.skor >= 70 ? "#2f9e62" : "#e05d5d"}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2
          className="font-bold"
          style={{ fontSize: cqm(34), color: "#1c1451", margin: 0, marginTop: cqm(12) }}
        >
          Latihan Selesai
        </h2>
        <p
          className="font-medium"
          style={{ fontSize: cqm(20), color: "#6f6a85", margin: 0, marginTop: cqm(6) }}
        >
          {msg}
        </p>

        {/* Skor utama */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: cqm(18),
            marginTop: cqm(26),
          }}
        >
          <div
            style={{
              minWidth: cqm(150),
              borderRadius: cqm(28),
              backgroundColor: hasil.skor >= 70 ? "#e7f4ea" : "#fdeceb",
              paddingBlock: cqm(22),
              paddingInline: cqm(20),
            }}
          >
            <p
              className="font-bold"
              style={{ fontSize: cqm(52), color: hasil.skor >= 70 ? "#2f9e62" : "#e05d5d", margin: 0 }}
            >
              {hasil.skor}
            </p>
            <p className="font-bold" style={{ fontSize: cqm(18), color: "#1c1451", margin: 0 }}>
              Skor
            </p>
          </div>
          <div
            style={{
              minWidth: cqm(130),
              borderRadius: cqm(28),
              backgroundColor: "#f5f3fb",
              paddingBlock: cqm(22),
              paddingInline: cqm(16),
            }}
          >
            <p className="font-bold" style={{ fontSize: cqm(30), color: "#2f9e62", margin: 0 }}>
              {hasil.benar}
            </p>
            <p className="font-bold" style={{ fontSize: cqm(18), color: "#1c1451", margin: 0 }}>
              Benar
            </p>
          </div>
          <div
            style={{
              minWidth: cqm(130),
              borderRadius: cqm(28),
              backgroundColor: "#f5f3fb",
              paddingBlock: cqm(22),
              paddingInline: cqm(16),
            }}
          >
            <p className="font-bold" style={{ fontSize: cqm(30), color: "#e05d5d", margin: 0 }}>
              {hasil.salah}
            </p>
            <p className="font-bold" style={{ fontSize: cqm(18), color: "#1c1451", margin: 0 }}>
              Salah
            </p>
          </div>
        </div>

        {/* Analisa per bagian */}
        <div style={{ textAlign: "left", marginTop: cqm(28) }}>
          <p className="font-bold" style={{ fontSize: cqm(20), color: "#1c1451", margin: 0 }}>
            Analisa Kekurangan
          </p>
          <p
            className="font-medium"
            style={{ fontSize: cqm(16), color: "#6f6a85", margin: 0, marginTop: cqm(4) }}
          >
            Bagian yang masih perlu diasah ditandai.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: cqm(10), marginTop: cqm(16) }}>
            {hasil.blok.map((b, i) => {
              const pct = b.total > 0 ? Math.round((b.benar / b.total) * 100) : 0;
              const lemah = pct < 60;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: cqm(12),
                    borderRadius: cqm(16),
                    backgroundColor: lemah ? "#fdeceb" : "#eef7f0",
                    border: `${cqm(2)} solid ${lemah ? "#f3c1c0" : "#bfe0c8"}`,
                    paddingBlock: cqm(10),
                    paddingInline: cqm(16),
                  }}
                >
                  <span
                    className="font-bold"
                    style={{
                      width: cqm(118),
                      fontSize: cqm(17),
                      color: "#1c1451",
                      flexShrink: 0,
                    }}
                  >
                    {b.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: cqm(14),
                      borderRadius: cqm(8),
                      backgroundColor: "#e6e3ef",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${pct}%`,
                        borderRadius: cqm(8),
                        backgroundColor: lemah ? "#e05d5d" : "#2f9e62",
                      }}
                    />
                  </div>
                  <span
                    className="font-bold"
                    style={{ fontSize: cqm(16), color: lemah ? "#c04545" : "#2f9e62", width: cqm(64), textAlign: "right", flexShrink: 0 }}
                  >
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aksi */}
        <div
          style={{
            display: "flex",
            gap: cqm(14),
            marginTop: cqm(30),
          }}
        >
          <button
            type="button"
            onClick={onRetry}
            className="cursor-pointer font-bold transition hover:brightness-[0.97]"
            style={{
              flex: 1,
              minHeight: cqm(54),
              borderRadius: cqm(50),
              backgroundColor: "#f0f54b",
              border: "none",
              color: "#1c1451",
              fontSize: cqm(22),
              fontFamily: "inherit",
            }}
          >
            Ulangi
          </button>
          <button
            type="button"
            onClick={onBack}
            className="cursor-pointer font-bold transition hover:brightness-[0.97]"
            style={{
              flex: 1,
              minHeight: cqm(54),
              borderRadius: cqm(50),
              backgroundColor: "#1c1451",
              border: "none",
              color: "#ffffff",
              fontSize: cqm(22),
              fontFamily: "inherit",
            }}
          >
            Kembali
          </button>
        </div>
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
  const { user } = useAuth();
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
  // State hasil submit: null = belum submit, "loading" = sedang menghitung,
  // lalu objek { benar, salah, total, skor, blok } saat hasil siap.
  const [result, setResult] = useState<
    | null
    | "loading"
    | { benar: number; salah: number; total: number; skor: number; blok: { label: string; benar: number; total: number }[] }
  >(null);
  const submittedRef = useRef(false);

  const q = SOAL[qi];
  const answered = SOAL.filter((s) => picks[s.no]).length;
  const email = user?.email;

  /** Hitung skor lokal dari jawaban user (state picks) vs kunci. */
  function hitungHasil() {
    let benar = 0;
    const blokMap = new Map<number, { benar: number; total: number }>();
    for (const s of SOAL) {
      const b = s.no <= 10 ? 1 : s.no <= 20 ? 2 : s.no <= 30 ? 3 : s.no <= 40 ? 4 : 5;
      const blok = blokMap.get(b) ?? { benar: 0, total: 0 };
      blok.total += 1;
      if (picks[s.no] === s.answer) {
        benar += 1;
        blok.benar += 1;
      }
      blokMap.set(b, blok);
    }
    const total = SOAL.length;
    const skor = total > 0 ? Math.round((benar / total) * 100) : 0;
    const blok = [1, 2, 3, 4, 5].map((b) => ({
      label:
        b === 1
          ? "Soal 1-10"
          : b === 2
            ? "Soal 11-20"
            : b === 3
              ? "Soal 21-30"
              : b === 4
                ? "Soal 31-40"
                : "Soal 41-50",
      benar: blokMap.get(b)?.benar ?? 0,
      total: blokMap.get(b)?.total ?? 0,
    }));
    return { benar, salah: total - benar, total, skor, blok };
  }

  /** Kirim SATU riwayat agregat sesi ini (pengganti simpan per soal). */
  async function simpanSesi(h: { benar: number; total: number; skor: number }) {
    if (!email || submittedRef.current) return;
    submittedRef.current = true;
    try {
      await fetch("/api/riwayat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          mode: modeSlug,
          subtes: subtesSlug,
          paketKe: paket,
          tipe,
          benar: h.benar,
          salah: h.total - h.benar,
          total: h.total,
          skor: h.skor,
          waktu: tipe === "ujian" ? 30 * 60 - left : null,
        }),
      });
    } catch {
      /* non-blokir */
    }
  }

  /** Submit sesi: hitung, simulasikan menghitung, tampilkan hasil. */
  function handleSubmit() {
    if (result === "loading" || submittedRef.current) return;
    setResult("loading");
    const h = hitungHasil();
    // Jeda singkat agar terasa "menghitung skor".
    setTimeout(() => {
      void simpanSesi(h);
      setResult(h);
    }, 1200);
  }

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
    // Jawaban disimpan di state; riwayat DB dikirim agregat saat submit.
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
              onClick={() => (qi === total - 1 ? handleSubmit() : goto(qi + 1))}
              className="min-w-0 flex-1 cursor-pointer font-bold transition hover:brightness-[0.97] md:flex-none md:max-w-[calc(18.3333cqw*var(--pm,1))]"
              style={{
                width: "100%",
                minHeight: cqm(47),
                borderRadius: cqm(50),
                backgroundColor: qi === total - 1 ? "#1c1451" : "#f5eafb",
                border: `${cqm(2)} solid ${qi === total - 1 ? "#1c1451" : "#cfb1ed"}`,
                color: qi === total - 1 ? "#ffffff" : "#cfb1ed",
                fontSize: cqm(24),
                fontFamily: "inherit",
              }}
            >
              {qi === total - 1 ? "Submit" : "Berikutnya"}
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

      {/* overlay hasil submit: loading lalu skor + analisa */}
      {result === "loading" && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            backgroundColor: "rgba(28, 20, 81, 0.55)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: cqm(24),
          }}
        >
          <div
            aria-hidden
            style={{
              width: cqm(88),
              height: cqm(88),
              borderRadius: "50%",
              border: `${cqm(8)} solid rgba(255,255,255,0.25)`,
              borderTopColor: "#f0f54b",
              animation: "drillSpin 0.9s linear infinite",
            }}
          />
          <p className="font-bold" style={{ fontSize: cqm(26), color: "#ffffff", margin: 0 }}>
            Menghitung skor...
          </p>
        </div>
      )}

      {result && result !== "loading" && (
        <ResultOverlay
          hasil={result}
          onBack={() => router.push(`/soal/${modeSlug}`)}
          onRetry={() => {
            setResult(null);
            setQi(0);
            setPicks({});
            submittedRef.current = false;
            setShowExp(false);
            window.scrollTo({ top: 0 });
          }}
        />
      )}

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
