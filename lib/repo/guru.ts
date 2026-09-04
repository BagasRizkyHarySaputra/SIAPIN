import { prisma } from "@/lib/db";

/** Repository Guru (halaman /bimble). */
export const guruRepo = {
  /** Semua guru, urut rating terbaik. */
  async list() {
    return prisma.guru.findMany({
      orderBy: [{ rating: "desc" }, { jumlahUlasan: "desc" }],
    });
  },

  /** Detail guru by id. */
  async get(id: string) {
    return prisma.guru.findUnique({ where: { id } });
  },
};
