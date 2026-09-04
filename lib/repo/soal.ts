import { prisma } from "@/lib/db";

/**
 * Repository Mapel & Soal — satu-satunya pintu akses data bank soal.
 */
export const soalRepo = {
  /** Semua mapel per mode (dipakai halaman pilih mapel / soal). */
  async listMapel(mode?: string) {
    return prisma.mapel.findMany({
      where: mode ? { mode: mode as any } : undefined,
      orderBy: [{ mode: "asc" }, { urutan: "asc" }],
      include: { paketSoal: true },
    });
  },

  /** Detail satu mapel + paketnya (halaman /soal/[mode]). */
  async getMapel(mode: string, slug: string) {
    return prisma.mapel.findUnique({
      where: { mode_slug: { mode: mode as any, slug } },
      include: { paketSoal: { include: { _count: { select: { soal: true } } } } },
    });
  },

  /** Semua paket dari satu mapel (dengan jumlah soal). */
  async listPaket(mapelId: string) {
    return prisma.paketSoal.findMany({
      where: { mapelId },
      orderBy: { urutan: "asc" },
      include: { _count: { select: { soal: true } } },
    });
  },

  /** Semua soal dalam satu paket, urut by no. */
  async listSoal(paketId: string) {
    return prisma.soal.findMany({
      where: { paketId },
      orderBy: { no: "asc" },
    });
  },
};
