// Data PTN & prodi SNBT 2026 — sumber: dataset LolosKampus (TeguhEP) berbasis
// SNPMB 2025/2026. Berisi passing grade estimasi, daya tampung, peminat, rasio
// keketatan per prodi. Dipakai untuk estimasi peluang masuk PTN.
import snbt from "./snbt-2026.json";

// Field mengikuti struktur JSON mentah (snake_case) agar kompatibel langsung.
export interface PtnInfo {
  id: string;
  kode: string;
  nama: string;
  wilayah: string;
  provinsi: string;
  tier: number | null;
  tier_label: string;
  n_prodi: number;
  total_dt_2026: number;
  total_peminat: number;
  avg_rasio: number | null;
  avg_pg_est: number | null;
  acc_rate: number | null;
}

export interface ProdiInfo {
  ptnId: string;
  kode: string;
  nama: string;
  jenjang: string;
  dt2026: number | null;
  peminat2025: number | null;
  rasio: number | null;
  pg: number | null;
  pgLow: number | null;
  pgHigh: number | null;
  kategori: string;
}

const SRC = snbt as unknown as {
  ptn: PtnInfo[];
  prodi: ProdiInfo[];
};

export const PTN_LIST: PtnInfo[] = SRC.ptn;
export const PRODI_LIST: ProdiInfo[] = SRC.prodi;

/** Cari PTN berdasarkan nama (case-insensitive, cocok dgn daftar lama popup). */
export function findPtn(nama: string): PtnInfo | undefined {
  const q = nama.trim().toLowerCase();
  return PTN_LIST.find((p) => p.nama.toLowerCase() === q);
}

/** Semua prodi milik satu PTN (urut abjad, sarjana dulu). */
export function prodiByPtn(ptnId: string): ProdiInfo[] {
  return PRODI_LIST.filter((p) => p.ptnId === ptnId).sort((a, b) => {
    const ja = a.jenjang === "Sarjana" ? 0 : 1;
    const jb = b.jenjang === "Sarjana" ? 0 : 1;
    if (ja !== jb) return ja - jb;
    return a.nama.localeCompare(b.nama);
  });
}

export function ptnById(id: string): PtnInfo | undefined {
  return PTN_LIST.find((p) => p.id === id);
}

/** Nama PTN → id PTN (helper lookup). */
export function ptnIdByName(nama: string): string | undefined {
  return findPtn(nama)?.id;
}
