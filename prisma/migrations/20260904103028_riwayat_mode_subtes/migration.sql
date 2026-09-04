-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RiwayatPengerjaan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "paketId" TEXT,
    "mode" TEXT,
    "subtes" TEXT,
    "paketKe" INTEGER,
    "tipe" TEXT,
    "skor" INTEGER NOT NULL,
    "benar" INTEGER NOT NULL,
    "salah" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "waktu" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RiwayatPengerjaan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RiwayatPengerjaan_paketId_fkey" FOREIGN KEY ("paketId") REFERENCES "PaketSoal" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_RiwayatPengerjaan" ("benar", "createdAt", "id", "paketId", "salah", "skor", "total", "userId", "waktu") SELECT "benar", "createdAt", "id", "paketId", "salah", "skor", "total", "userId", "waktu" FROM "RiwayatPengerjaan";
DROP TABLE "RiwayatPengerjaan";
ALTER TABLE "new_RiwayatPengerjaan" RENAME TO "RiwayatPengerjaan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
