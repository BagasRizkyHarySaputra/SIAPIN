import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

/**
 * Koneksi Prisma tunggal (singleton) untuk seluruh aplikasi.
 *
 * SQLite lokal (file `prisma/dev.db`) — aman untuk demo offline lomba.
 * Dipakai oleh: API routes, Server Actions, dan script (seed/backup).
 *
 * Catatan Next.js dev: global caching mencegah kebocoran koneksi saat hot-reload.
 */

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createClient() {
  const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
  });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
