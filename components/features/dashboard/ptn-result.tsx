"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";
import { findPtn, prodiByPtn, type ProdiInfo } from "@/lib/data/ptn";
import { logoPtnByNama, initials as initialsLogo } from "@/lib/data/ptn/logo";
import {
  buatRekomendasi,
  estimasiProdi,
  skorGabungan,
  type HasilEstimasi,
} from "@/lib/data/ptn/estimasi";
import type { PtnData } from "./ptn-popup";

/** Inisial nama — dipakai fallback logo. */
function initials(name: string) {
  return initialsLogo(name);
}

/** Logo universitas bulat — gambar logo bila ada, fallback inisial. */
function LogoPtn({
  nama,
  size,
  fontSize,
}: {
  nama: string;
  size: number;
  fontSize: number;
}) {
  const src = logoPtnByNama(nama);
  const bg = src ? "#ffffff" : "#1c1451";
  const color = src ? "#1c1451" : "#ffffff";
  const pad = src ? cqm(6) : 0;
  if (src) {
    return (
      <span
        className="flex shrink-0 items-center justify-center"
        style={{
          width: cqm(size),
          height: cqm(size),
          borderRadius: "50%",
          backgroundColor: bg,
          border: `${cqm(1.5)} solid #e3e3ee`,
          overflow: "hidden",
          padding: pad,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={nama}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </span>
    );
  }
  return (
    <span
      className="flex shrink-0 items-center justify-center font-bold"
      style={{
        width: cqm(size),
        height: cqm(size),
        borderRadius: "50%",
        backgroundColor: bg,
        color,
        fontSize: cqm(fontSize),
      }}
    >
      {initials(nama)}
    </span>
  );
}


/** Warna zona peluang — mengikuti gaya existing (#45b8ac teal, #e2603c oranye). */
function zonaWarna(zona: HasilEstimasi["zona"]) {
  switch (zona) {
    case "Aman":
      return { main: "#45b8ac", label: "Peluang Tinggi", caption: "Kuat! Pertahankan konsistensi belajarmu." };
    case "Kompetitif":
      return { main: "#8bc34a", label: "Peluang Cukup", caption: "Peluangmu cukup baik, tetap tingkatkan nilai." };
    case "Borderline":
      return { main: "#e2603c", label: "Peluang Sedang", caption: "Kamu masih perlu meningkatkan nilai untuk memperbesar peluangmu." };
    default:
      return { main: "#d9534f", label: "Peluang Rendah", caption: "Perlu peningkatan signifikan. Ikuti rekomendasi di samping." };
  }
}

function Donut({ pct, color }: { pct: number; color: string }) {
  const r = 48;
  const C = 2 * Math.PI * r;
  const p = Math.max(0, Math.min(100, pct));
  const filled = (C * p) / 100;
  return (
    <svg
      viewBox="0 0 120 120"
      style={{ width: cqm(110), height: cqm(110) }}
      aria-hidden
    >
      <circle cx="60" cy="60" r={r} fill="none" stroke="#2a235c" strokeWidth="16" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${C}`}
        transform="rotate(-90 60 60)"
      />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: 22, fontWeight: 700, fill: "#1c1451" }}
      >
        {Math.round(p)}%
      </text>
    </svg>
  );
}

/** Cari prodi riil pada PTN pilihan user (nama jurusan = nama prodi dari dropdown). */
function cariProdi(univ: string, jurusan: string): ProdiInfo | undefined {
  if (!univ || !jurusan) return undefined;
  const ptn = findPtn(univ);
  if (!ptn) return undefined;
  const q = jurusan.trim().toLowerCase();
  const prodis = prodiByPtn(ptn.id);
  return (
    prodis.find((p) => p.nama.toLowerCase() === q) ??
    prodis.find((p) => p.nama.toLowerCase().includes(q) || q.includes(p.nama.toLowerCase()))
  );
}

interface SubtesRingkas {
  subtes: string;
  akurasi: number;
}

export function PtnResult({
  data,
  onEdit,
}: {
  data: PtnData;
  onEdit: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const [lemah, setLemah] = useState<SubtesRingkas[]>([]);
  const [infoTambahan, setInfoTambahan] = useState("");

  // Scroll halus ke hasil begitu muncul setelah Simpan.
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  const prodi = useMemo(() => cariProdi(data.univ, data.jurusan), [data.univ, data.jurusan]);

  // Ambil breakdown akurasi per subtes dari riwayat pengerjaan user (DB)
  // untuk menyusun rekomendasi yang presisi & sesuai kelemahan riil.
  useEffect(() => {
    if (!user?.email) return;
    let hidup = true;
    fetch(`/api/diagnostik?email=${encodeURIComponent(user.email)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!hidup || !j) return;
        const br = Array.isArray(j.breakdownSubtes) ? j.breakdownSubtes : [];
        const list: SubtesRingkas[] = br
          .filter((b: any) => b.total > 0)
          .map((b: any) => ({
            subtes: b.subtes,
            akurasi: Math.round((b.benar / b.total) * 100),
          }))
          .sort((a: any, b: any) => a.akurasi - b.akurasi)
          .slice(0, 3);
        setLemah(list);
      })
      .catch(() => {});
    return () => {
      hidup = false;
    };
  }, [user?.email]);

  const skor = useMemo(() => skorGabungan(data), [data]);
  const hasil = useMemo<HasilEstimasi | null>(() => {
    if (!prodi) return null;
    return estimasiProdi({ skor, prodi });
  }, [prodi, skor]);

  const warna = hasil ? zonaWarna(hasil.zona) : zonaWarna("Borderline");
  const pct = hasil ? hasil.peluangPersen : 0;

  // Rekomendasi dinamis: gap skor → target + kelemahan subtes riil.
  const recs = useMemo(() => {
    if (!hasil || !prodi) return [];
    const target = Math.max(prodi.pg ?? hasil.muPg, hasil.muPg);
    return buatRekomendasi(skor, target, lemah);
  }, [hasil, prodi, skor, lemah]);

  // info daya tampung / peminat prodi (data riil)
  useEffect(() => {
    if (!prodi) return;
    const dt = prodi.dt2026 != null ? `Daya tampung SNBT 2026: ${prodi.dt2026} kursi` : "";
    const pm = prodi.peminat2025 != null ? `Peminat 2025: ${prodi.peminat2025.toLocaleString("id-ID")}` : "";
    setInfoTambahan([dt, pm].filter(Boolean).join(" · "));
  }, [prodi]);

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
          <LogoPtn nama={data.univ} size={72} fontSize={28} />
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
        {infoTambahan && (
          <p
            style={{
              fontSize: cqm(12),
              lineHeight: 1.4,
              color: "#6c6363",
              margin: 0,
              marginTop: cqm(10),
              textAlign: "center",
            }}
          >
            {infoTambahan}
          </p>
        )}
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
          <Donut pct={pct} color={warna.main} />
        </div>
        <p
          className="font-bold"
          style={{
            fontSize: cqm(18),
            color: warna.main,
            margin: 0,
            marginTop: cqm(12),
          }}
        >
          {hasil ? warna.label : "Pilih Prodi"}
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
          {hasil ? warna.caption : "Lengkapi pilihan universitas & jurusan untuk melihat estimasi peluang masuk."}
        </p>
        {hasil && prodi && (
          <>
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
              Estimasi nilai kompetitif: {Math.round(prodi.pg ?? hasil.muPg)}
            </span>
            <p
              style={{
                fontSize: cqm(11),
                color: "#8a8a9a",
                margin: 0,
                marginTop: cqm(8),
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              Skormu saat ini: {skor} · Rasio keketatan {hasil.rasio.toFixed(1)}:1
              {hasil.dayaTampung ? ` · ${hasil.dayaTampung} kursi` : ""}
            </p>
          </>
        )}
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
          {recs.length === 0 ? (
            <p style={{ fontSize: cqm(13), color: "#6c6363", margin: 0, lineHeight: 1.5 }}>
              Simpan pilihan universitas & jurusan terlebih dahulu untuk melihat
              rekomendasi peningkatan peluang yang dipersonalisasi.
            </p>
          ) : (
            recs.map((r) => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
