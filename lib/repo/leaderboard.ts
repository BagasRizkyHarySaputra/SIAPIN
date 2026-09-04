import { prisma } from "@/lib/db";

/** Repository Leaderboard. */
export const leaderboardRepo = {
  /** Top-N peringkat + akurasi. Akurasi dihitung dari UserProfile.akurasi. */
  async top(n = 10) {
    return prisma.leaderboard.findMany({
      orderBy: [{ totalPoin: "desc" }],
      take: n,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            profile: { select: { akurasi: true, streakDays: true } },
          },
        },
      },
    });
  },

  /** Top-N peringkat khusus satu mode (TKA_SMP / TKA_SMA / SNBT). */
  async topByMode(mode: "TKA_SMP" | "TKA_SMA" | "SNBT", n = 10) {
    return prisma.leaderboard.findMany({
      where: { mode },
      orderBy: [{ totalPoin: "desc" }],
      take: n,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            profile: { select: { akurasi: true, streakDays: true } },
          },
        },
      },
    });
  },

  /** Posisi user tertentu di leaderboard. */
  async rankOf(userId: string) {
    const rows = await prisma.leaderboard.findMany({
      orderBy: [{ totalPoin: "desc" }],
      select: { userId: true },
    });
    const idx = rows.findIndex((r) => r.userId === userId);
    return idx === -1 ? null : idx + 1;
  },

  /** Update poin/streak user (setelah selesai ngerjain soal). */
  async upsert(userId: string, data: { totalPoin?: number; streak?: number }) {
    const clean = Object.fromEntries(
      Object.entries(data).filter(([, v]) => v !== undefined)
    ) as Record<string, unknown>;
    return prisma.leaderboard.upsert({
      where: { userId },
      update: clean as any,
      create: { userId, ...clean } as any,
    });
  },
};

/** Repository Achievement. */
export const achievementRepo = {
  /** Semua definisi achievement. */
  async list() {
    return prisma.achievement.findMany();
  },

  /** Achievement yang sudah dibuka user. */
  async unlockedBy(userId: string) {
    return prisma.userAchievement.findMany({
      where: { userId },
      include: { achievement: true },
      orderBy: { unlockedAt: "asc" },
    });
  },

  /** Buka achievement untuk user (kalau belum). */
  async unlock(userId: string, kode: string) {
    const ach = await prisma.achievement.findUnique({ where: { kode } });
    if (!ach) return null;
    return prisma.userAchievement.upsert({
      where: { userId_achievementId: { userId, achievementId: ach.id } },
      update: {},
      create: { userId, achievementId: ach.id },
    });
  },
};
