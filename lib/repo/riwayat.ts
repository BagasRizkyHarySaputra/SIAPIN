import { prisma } from "@/lib/db";

/**
 * Repository RiwayatPengerjaan & diagnostik — menyimpan/membaca hasil sesi
 * pengerjaan soal (bank statis TS) per user (diidentifikasi via email).
 *
 * Riwayat tidak wajib memiliki PaketSoal DB: bank soal hidup sebagai file TS
 * statis, jadi identitas sesi disimpan di kolom mode/subtes/paketKe/tipe.
 */

export interface SimpanRiwayatInput {
  email: string;
  mode: string; // tka-smp | tka-sma | snbt
  subtes: string; // mis. matematika, pm, ppu, ...
  paketKe?: number | null;
  tipe?: string | null; // drilling | ujian
  benar: number;
  salah: number;
  total: number;
  skor: number; // 0-100
  waktu?: number | null; // detik
}

export interface RiwayatRingkas {
  id: string;
  mode: string | null;
  subtes: string | null;
  paketKe: number | null;
  tipe: string | null;
  benar: number;
  salah: number;
  total: number;
  skor: number;
  waktu: number | null;
  createdAt: Date;
}

/** Cari user by email (atau buat minimal bila belum ada). */
export async function findOrCreateUserByEmail(email: string) {
  const lower = email.trim().toLowerCase();
  const existing = await prisma.user.findUnique({ where: { email: lower } });
  if (existing) return existing;
  // Buat user minimal — nama diambil dari bagian depan email.
  const name = lower.split("@")[0].replace(/[^a-zA-Z0-9 ]/g, " ").trim() || "Siswa";
  return prisma.user.create({
    data: {
      email: lower,
      name,
      password: "mock", // mock auth — tidak dipakai login DB
      role: "SISWA",
    },
  });
}

export const riwayatRepo = {
  /** Simpan satu riwayat sesi. User di-upsert by email bila belum ada. */
  async simpan(input: SimpanRiwayatInput) {
    const user = await findOrCreateUserByEmail(input.email);
    return prisma.riwayatPengerjaan.create({
      data: {
        userId: user.id,
        mode: input.mode,
        subtes: input.subtes,
        paketKe: input.paketKe ?? null,
        tipe: input.tipe ?? null,
        benar: input.benar,
        salah: input.salah,
        total: input.total,
        skor: input.skor,
        waktu: input.waktu ?? null,
      },
    });
  },

  /** Semua riwayat milik satu email, terbaru dulu. */
  async listByEmail(email: string): Promise<RiwayatRingkas[]> {
    const user = await prisma.user.findUnique({ where: { email: email.trim().toLowerCase() } });
    if (!user) return [];
    const rows = await prisma.riwayatPengerjaan.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return rows.map((r) => ({
      id: r.id,
      mode: r.mode,
      subtes: r.subtes,
      paketKe: r.paketKe,
      tipe: r.tipe,
      benar: r.benar,
      salah: r.salah,
      total: r.total,
      skor: r.skor,
      waktu: r.waktu,
      createdAt: r.createdAt,
    }));
  },
};
