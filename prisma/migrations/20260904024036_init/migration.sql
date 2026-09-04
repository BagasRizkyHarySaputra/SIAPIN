-- CreateTable
CREATE TABLE "Mapel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mode" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,
    "icon" TEXT,
    "urutan" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PaketSoal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mapelId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tipe" TEXT,
    "urutan" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PaketSoal_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Soal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paketId" TEXT NOT NULL,
    "no" INTEGER NOT NULL,
    "stimulus" TEXT,
    "prompt" TEXT NOT NULL,
    "options" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "explanationTitle" TEXT,
    "explanation" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Soal_paketId_fkey" FOREIGN KEY ("paketId") REFERENCES "PaketSoal" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "avatar" TEXT,
    "role" TEXT NOT NULL DEFAULT 'SISWA',
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "namaLengkap" TEXT,
    "streakDays" INTEGER NOT NULL DEFAULT 0,
    "totalSoal" INTEGER NOT NULL DEFAULT 0,
    "akurasi" REAL,
    "aiDiagnosticProgress" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AiDiagnostic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "tkaSmp" REAL NOT NULL DEFAULT 0,
    "tkaSma" REAL NOT NULL DEFAULT 0,
    "snbt" REAL NOT NULL DEFAULT 0,
    "progressTkaSmp" INTEGER NOT NULL DEFAULT 0,
    "progressTkaSma" INTEGER NOT NULL DEFAULT 0,
    "progressSnbt" INTEGER NOT NULL DEFAULT 0,
    "rawData" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AiDiagnostic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InputNilai" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "nilaiTkaSmp" REAL,
    "nilaiTkaSma" REAL,
    "nilaiSnbt" REAL,
    "hasil" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "InputNilai_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RiwayatPengerjaan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "paketId" TEXT NOT NULL,
    "skor" INTEGER NOT NULL,
    "benar" INTEGER NOT NULL,
    "salah" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "waktu" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RiwayatPengerjaan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RiwayatPengerjaan_paketId_fkey" FOREIGN KEY ("paketId") REFERENCES "PaketSoal" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JawabanUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "riwayatId" TEXT NOT NULL,
    "soalId" TEXT NOT NULL,
    "jawaban" TEXT NOT NULL,
    "benar" BOOLEAN NOT NULL,
    CONSTRAINT "JawabanUser_riwayatId_fkey" FOREIGN KEY ("riwayatId") REFERENCES "RiwayatPengerjaan" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "JawabanUser_soalId_fkey" FOREIGN KEY ("soalId") REFERENCES "Soal" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Guru" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nama" TEXT NOT NULL,
    "bidang" TEXT NOT NULL,
    "mode" TEXT,
    "foto" TEXT,
    "deskripsi" TEXT,
    "rating" REAL NOT NULL DEFAULT 0,
    "jumlahUlasan" INTEGER NOT NULL DEFAULT 0,
    "harga" REAL,
    "jadwal" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Leaderboard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "totalPoin" INTEGER NOT NULL DEFAULT 0,
    "streak" INTEGER NOT NULL DEFAULT 0,
    "peringkat" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Leaderboard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kode" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,
    "ikon" TEXT,
    "syarat" JSONB
);

-- CreateTable
CREATE TABLE "UserAchievement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "unlockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserAchievement_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "Achievement" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BackupLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "nama" TEXT NOT NULL,
    "tipe" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "ukuran" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'success',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BackupLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Mapel_mode_slug_key" ON "Mapel"("mode", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "PaketSoal_mapelId_nama_key" ON "PaketSoal"("mapelId", "nama");

-- CreateIndex
CREATE UNIQUE INDEX "Soal_paketId_no_key" ON "Soal"("paketId", "no");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AiDiagnostic_userId_key" ON "AiDiagnostic"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "JawabanUser_riwayatId_soalId_key" ON "JawabanUser"("riwayatId", "soalId");

-- CreateIndex
CREATE UNIQUE INDEX "Leaderboard_userId_key" ON "Leaderboard"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_kode_key" ON "Achievement"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "UserAchievement_userId_achievementId_key" ON "UserAchievement"("userId", "achievementId");
