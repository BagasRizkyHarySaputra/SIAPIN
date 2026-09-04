import { prisma } from "@/lib/db";

/**
 * Repository User & Profil — data user + AI diagnostic + input nilai + riwayat.
 */
export const userRepo = {
  /** Profil lengkap user (profil, diagnostic, leaderboard, achievement). */
  async getFullProfile(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        diagnostic: true,
        leaderboard: true,
        inputNilai: { orderBy: { createdAt: "desc" }, take: 1 },
        achievements: { include: { achievement: true } },
        riwayat: {
          orderBy: { createdAt: "desc" },
          take: 10,
          include: { paket: { include: { mapel: true } } },
        },
      },
    });
  },

  /** Cari user by email (untuk login). */
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  },

  /** Update profil (nama/telepon/avatar). */
  async updateProfile(userId: string, patch: { name?: string; phone?: string; avatar?: string; namaLengkap?: string }) {
    return prisma.$transaction(async (tx) => {
      const user = await tx.user.update({
        where: { id: userId },
        data: {
          name: patch.name,
          phone: patch.phone,
          avatar: patch.avatar,
        },
      });
      if (patch.namaLengkap !== undefined || patch.name !== undefined) {
        await tx.userProfile.upsert({
          where: { userId },
          update: { namaLengkap: patch.namaLengkap ?? patch.name },
          create: { userId, namaLengkap: patch.namaLengkap ?? patch.name },
        });
      }
      return user;
    });
  },

  /** Simpan/mutakhirkan AI diagnostic user. */
  async saveDiagnostic(userId: string, data: {
    tkaSmp?: number; tkaSma?: number; snbt?: number;
    progressTkaSmp?: number; progressTkaSma?: number; progressSnbt?: number;
    rawData?: unknown;
  }) {
    const clean = Object.fromEntries(
      Object.entries(data).filter(([, v]) => v !== undefined)
    ) as Record<string, unknown>;
    return prisma.aiDiagnostic.upsert({
      where: { userId },
      update: clean as any,
      create: { userId, ...clean } as any,
    });
  },

  /** Simpan hasil "Mulai Input Nilai" (rekomendasi PTN). */
  async saveInputNilai(userId: string, nilai: {
    nilaiTkaSmp?: number; nilaiTkaSma?: number; nilaiSnbt?: number; hasil?: unknown;
  }) {
    const clean = Object.fromEntries(
      Object.entries(nilai).filter(([, v]) => v !== undefined)
    ) as Record<string, unknown>;
    return prisma.inputNilai.create({
      data: { userId, ...clean } as any,
    });
  },
};
