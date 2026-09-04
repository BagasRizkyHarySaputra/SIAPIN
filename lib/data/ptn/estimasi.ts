import type { ProdiInfo } from "./index";
import { findPtn, prodiByPtn } from "./index";

/**
 * Engine estimasi peluang lolos SNBT — model probabilistik berbasis:
 *  - passing grade estimasi prodi (pg) & rentang pgLow–pgHigh → μ, σ
 *  - rasio keketatan (peminat/kursi) → koreksi logistik
 *  - CDF normal standar untuk probabilitas
 *
 * Referensi metodologi: SNPMB tidak menerbitkan passing grade resmi; angka di sini
 * adalah statistik historis dari dataset LolosKampus (SNPMB 2025/2026). Hasil
 * bersifat ESTIMASI, bukan jaminan.
 */

/** CDF distribusi normal standar (approx Abramowitz & Stegun 7.1.26). */
export function normCdf(z: number): number {
  // valid untuk z > 0; gunakan simetri utk z < 0
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp((-z * z) / 2);
  const p =
    d *
    t *
    (0.31938153 +
      t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return z >= 0 ? 1 - p : p;
}

/** Inverse CDF normal (quantile) — dipakai untuk menghitung skor aman. */
export function normInv(p: number): number {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  // Beasley–Springer–Moro aproximation (rasional)
  const a = [
    -39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269,
    -30.66479806614716, 2.506628277459239,
  ];
  const b = [
    -54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972,
    -13.28068155288572,
  ];
  const c = [
    -0.007784894002430293, -0.3223964580411365, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];
  const d = [
    0.007784695709041462, 0.3224671290700398, 2.445134137142996,
    3.754408661907416,
  ];
  const pl = 0.02425;
  let q: number, r: number;
  if (p < pl) {
    q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
  if (p > 1 - pl) {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -(
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
  q = p - 0.5;
  r = q * q;
  return (
    (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
    (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
  );
}

export interface EstimasiProdiInput {
  /** Skor total SNBT/UTBK user (skala 0–1000). */
  skor: number;
  prodi: ProdiInfo;
}

export interface HasilEstimasi {
  peluangPersen: number; // 0..100
  zona: "Aman" | "Kompetitif" | "Borderline" | "Berisiko";
  z: number;
  muPg: number;
  sigmaPg: number;
  rasio: number;
  dayaTampung: number | null;
  peminat: number | null;
  label: string; // "peluang tinggi/sedang/rendah"
  pesan: string;
}

const LABEL = (p: number) =>
  p >= 75 ? "Peluang Tinggi" : p >= 50 ? "Peluang Sedang" : p >= 25 ? "Peluang Rendah" : "Peluang Sangat Rendah";

/**
 * Estimasi peluang untuk 1 prodi.
 * - μ = pg (passing grade estimasi), σ = (pgHigh - pgLow) / (2*1.28) asumsi 80% CI.
 * - z = (skor - μ)/σ
 * - P = Φ(z)  (probabilitas skor menembus ambang)
 * - Koreksi keketatan: kalau rasio tinggi (>15) dan skor di bawah μ, diskon.
 */
export function estimasiProdi({ skor, prodi }: EstimasiProdiInput): HasilEstimasi {
  const pg = prodi.pg ?? prodi.pgLow ?? prodi.pgHigh;
  if (pg == null || pg <= 0) {
    return {
      peluangPersen: 50,
      zona: "Kompetitif",
      z: 0,
      muPg: 700,
      sigmaPg: 30,
      rasio: prodi.rasio ?? 10,
      dayaTampung: prodi.dt2026,
      peminat: prodi.peminat2025,
      label: "Peluang Sedang",
      pesan: "Data passing grade belum tersedia untuk prodi ini; estimasi memakai asumsi umum.",
    };
  }

  const lo = prodi.pgLow ?? pg * 0.95;
  const hi = prodi.pgHigh ?? pg * 1.05;
  // Asumsi rentang = 80% CI → σ = (hi-lo)/(2*z80) = (hi-lo)/2.56
  const sigma = Math.max(1, (hi - lo) / 2.56);
  const z = (skor - pg) / sigma;

  const pCdf = normCdf(z);
  const rasio = prodi.rasio ?? 10;

  // Koreksi keketatan: model logistik ringan.
  // - rasio <= 5  → hampir tanpa koreksi
  // - rasio tinggi → peluang diturunkan jika skor masih di zona ambigu
  let p = pCdf;
  if (rasio > 5) {
    const penalti = Math.min(0.3, Math.log(rasio / 4) * 0.12);
    // Penalti paling besar saat z sekitar 0 (borderline); makin besar z, makin kecil efeknya.
    const bobotZ = Math.max(0, 1 - Math.abs(z) / 1.8);
    p = p - penalti * bobotZ;
  }
  // Sedikit bantuan jika peminat menurun (rasio rendah) & skor di atas pg
  if (rasio > 0 && rasio <= 5 && z > 0.5) {
    p = Math.min(0.98, p + 0.03);
  }

  const peluang = Math.round(Math.max(2, Math.min(98, p * 100)));
  const zona: HasilEstimasi["zona"] =
    peluang >= 80
      ? "Aman"
      : peluang >= 50
        ? "Kompetitif"
        : peluang >= 20
          ? "Borderline"
          : "Berisiko";

  const pesan =
    zona === "Aman"
      ? `Skormu berada jauh di atas perkiraan ambang ${Math.round(pg)} prodi ini. Peluangmu sangat besar.`
      : zona === "Kompetitif"
        ? `Skormu berada di sekitar ambang ${Math.round(pg)}. Dengan daya tampung ${prodi.dt2026 ?? "?"} kursi, persaingan ketat tapi masih terbuka.`
        : zona === "Borderline"
          ? `Skormu sedikit di bawah perkiraan ambang ${Math.round(pg)}. Butuh peningkatan ±${Math.max(5, Math.round((pg - skor) / sigma * 15))} poin untuk aman.`
          : `Skormu masih jauh di bawah ambang ${Math.round(pg)} prodi ini. Jadikan pilihan impian, siapkan pilihan penyeimbang.`;

  return {
    peluangPersen: peluang,
    zona,
    z: Math.round(z * 100) / 100,
    muPg: Math.round(pg),
    sigmaPg: Math.round(sigma),
    rasio: Math.round(rasio * 10) / 10,
    dayaTampung: prodi.dt2026,
    peminat: prodi.peminat2025,
    label: LABEL(peluang),
    pesan,
  };
}

/**
 * Rekomendasi peningkatan peluang — daftar aksi prioritas berbasis gap.
 * @param skor skor user
 * @param target muPg prodi incaran
 * @param riwayatPerSubtes ringkasan akurasi per subtes (untuk rekomendasi belajar)
 */
export interface RekomendasiItem {
  n: string;
  title: string;
  desc: string;
  prio: "Prioritas Tinggi" | "Prioritas Sedang" | "Prioritas Rendah";
  bg: string;
  numBg: string;
  prioBg: string;
}

export function buatRekomendasi(
  skor: number,
  target: number,
  lemah: { subtes: string; akurasi: number }[],
): RekomendasiItem[] {
  const gap = target - skor;
  const recs: RekomendasiItem[] = [];

  if (gap > 30) {
    recs.push({
      n: "1",
      title: "Tingkatkan Skor SNBT/TKA",
      desc: `Skormu ${Math.round(skor)} masih ${Math.round(gap)} poin di bawah estimasi ambang ${Math.round(target)}. Targetkan minimal ${Math.round(target + 20)} agar lebih aman.`,
      prio: "Prioritas Tinggi",
      bg: "#fbe3e6",
      numBg: "#f2a3b5",
      prioBg: "#ef5b7e",
    });
  } else if (gap > 0) {
    recs.push({
      n: "1",
      title: "Kunci Ambang Kompetitif",
      desc: `Skormu ${Math.round(skor)} mendekati ambang ${Math.round(target)}. Naikkan ${Math.round(gap)} poin untuk masuk zona aman.`,
      prio: "Prioritas Tinggi",
      bg: "#fbe3e6",
      numBg: "#f2a3b5",
      prioBg: "#ef5b7e",
    });
  } else {
    recs.push({
      n: "1",
      title: "Pertahankan Skor Stabil",
      desc: `Skormu sudah di atas ambang ${Math.round(target)} prodi incaran. Jaga konsistensi dengan tryout rutin.`,
      prio: "Prioritas Rendah",
      bg: "#ece9f8",
      numBg: "#b3a7e6",
      prioBg: "#8b7ed8",
    });
  }

  // rekomendasi subtes terlemah (dari riwayat pengerjaan)
  if (lemah.length > 0) {
    const top = lemah[0];
    recs.push({
      n: "2",
      title: "Perkuat " + top.subtes,
      desc: `Akurasimu di ${top.subtes} baru ${Math.round(top.akurasi)}%. Fokus latihan subtes ini paling cepat menaikkan skor.`,
      prio: "Prioritas Sedang",
      bg: "#e9f5e4",
      numBg: "#9ccc65",
      prioBg: "#7cb342",
    });
  } else {
    recs.push({
      n: "2",
      title: "Perkuat Subtes Terlemah",
      desc: "Gunakan menu Latihan Soal untuk menemukan subtes yang paling banyak salah, lalu fokus di sana.",
      prio: "Prioritas Sedang",
      bg: "#e9f5e4",
      numBg: "#9ccc65",
      prioBg: "#7cb342",
    });
  }

  recs.push({
    n: "3",
    title: "Latihan Soal Secara Konsisten",
    desc: "Kerjakan minimal 20 soal per hari dan review pembahasan untuk menutup lubang pemahaman.",
    prio: "Prioritas Rendah",
    bg: "#ece9f8",
    numBg: "#b3a7e6",
    prioBg: "#8b7ed8",
  });

  return recs.slice(0, 3);
}

/** Konversi nilai rapor (0-100) menjadi padanan skor SNBT (0-1000) — sekadar pendekatan. */
export function raporKeSkor(rapot: number): number {
  const c = Math.max(0, Math.min(100, rapot));
  return Math.round((c / 100) * 800 + 100); // 100..900
}

/** Konversi nilai SNBT lama (skala UTBK 2009-2022, 0-100) ke skala 0-1000. */
export function snbtLamaKeSkor(nilai: number): number {
  return Math.round(Math.max(0, Math.min(100, nilai)) * 10);
}

export interface PtnInput {
  jenis: string;
  snbt: string;
  rapot: string;
  univ: string;
  jurusan: string;
}

/**
 * Hitung skor gabungan user dari input popup.
 * Skala akhir 0-1000.
 */
export function skorGabungan(input: PtnInput): number {
  const rapot = parseFloat(input.rapot) || 0;
  const snbt = parseFloat(input.snbt) || 0;
  const jenis = input.jenis;

  // Nilai SNBT langsung (0-1000) atau TKA
  if (jenis === "Nilai TKA/SNBT Sebelumnya") {
    if (snbt > 100) return Math.round(snbt); // sudah skala 1000
    return snbtLamaKeSkor(snbt); // skala 0-100
  }

  // Nilai rapor atau ujian sekolah → konversi ke skala SNBT, bobot 0.9
  return Math.round(raporKeSkor(rapot) * 0.9 + (snbt > 100 ? snbt : snbt * 10) * 0.1);
}
