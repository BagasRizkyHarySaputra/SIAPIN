/**
 * Sistem Backup Database SIAPIN.
 *
 * Cara pakai:
 *  - Manual:   npx tsx lib/backup.ts
 *  - Otomatis: tambahkan ke cron/package.json script (lihat README di bawah)
 *
 * Backup = salinan file SQLite (.db) + dump JSON (semua tabel) ke folder `backups/`,
 * lalu catat log-nya ke tabel BackupLog.
 */
import { mkdirSync, copyFileSync, writeFileSync, statSync, readdirSync } from "fs";
import { join } from "path";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
});
const prisma = new PrismaClient({ adapter });

const BACKUP_DIR = process.env.BACKUP_DIR ?? "./backups";
const DB_FILE = process.env.DATABASE_URL?.replace("file:", "") ?? "./prisma/dev.db";

function ts() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

async function main() {
  mkdirSync(BACKUP_DIR, { recursive: true });

  const stamp = ts();
  const base = join(BACKUP_DIR, `siapin-backup-${stamp}`);

  // 1) Salinan file SQLite (recovery instant kalau db korup)
  copyFileSync(DB_FILE, `${base}.db`);
  const dbSize = statSync(`${base}.db`).size;

  // 2) Dump JSON semua tabel (portable, bisa dibaca manusia / dipindah ke Supabase)
  const dump: Record<string, unknown[]> = {};
  const tables = [
    "User", "UserProfile", "AiDiagnostic", "InputNilai", "RiwayatPengerjaan",
    "JawabanUser", "Mapel", "PaketSoal", "Soal", "Guru", "Leaderboard",
    "Achievement", "UserAchievement",
  ];
  for (const t of tables) {
    try {
      dump[t] = await (prisma as any)[t[0].toLowerCase() + t.slice(1)].findMany();
    } catch {
      dump[t] = [];
    }
  }
  const jsonPath = `${base}.json`;
  writeFileSync(jsonPath, JSON.stringify(dump, null, 2));
  const jsonSize = statSync(jsonPath).size;

  // 3) Catat ke BackupLog
  await prisma.backupLog.create({
    data: {
      nama: process.argv.includes("--auto") ? "otomatis-harian" : "manual",
      tipe: "full",
      filePath: `${base}.db`,
      ukuran: dbSize,
      status: "success",
    },
  });

  console.log(`✅ Backup sukses: ${base}.db (${dbSize} B) + ${base}.json (${jsonSize} B)`);

  // 4) Pruning: simpan 10 backup terakhir saja
  const files = readdirSync(BACKUP_DIR).filter((f) => f.endsWith(".db")).sort();
  const remove = files.slice(0, Math.max(0, files.length - 10));
  for (const f of remove) {
    try {
      // hapus juga .json pasangannya
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("fs").unlinkSync(join(BACKUP_DIR, f));
      const j = f.replace(/\.db$/, ".json");
      require("fs").unlinkSync(join(BACKUP_DIR, j));
      console.log(`  🧹 hapus backup lama: ${f}`);
    } catch { /* ignore */ }
  }
}

main()
  .catch((e) => {
    console.error("❌ Backup gagal:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
