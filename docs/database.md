# Ekosistem Database SIAPIN

> Satu database besar yang menyatukan **5 domain** aplikasi bimbel SIAPIN:
> bank soal, user & profil (AI diagnostic, grafik, input nilai), guru, leaderboard, dan backup.

## Stack

| Bagian | Teknologi |
|---|---|
| Database | **SQLite** (file `prisma/dev.db`) |
| ORM | **Prisma 7.10** (driver adapter `@prisma/adapter-better-sqlite3`) |
| Migrasi | `prisma migrate dev` (folder `prisma/migrations/`) |
| Client | generated ke `lib/generated/prisma/`, singleton di `lib/db.ts` |
| Seed | `prisma/seed.ts` (via `tsx`) |
| Backup | `lib/backup.ts` → folder `backups/` |
| Akses dari UI | API route `app/api/**` → repo `lib/repo/**` → `prisma` |

> **Kenapa SQLite?** Lomba web development — demo harus aman meski internet
> mati. SQLite = file lokal, jalan offline penuh, tetap "database beneran"
> (relasi, foreign key, query, backup). Kalau mau online setelah lomba,
> tinggal ganti datasource ke Postgres/Supabase — schema & repo tidak berubah.

---

## Diagram Relasi (ringkas)

```
User 1──1 UserProfile
User 1──1 AiDiagnostic          (nilai TKA SMP/SMA/SNBT + progress + grafik)
User 1──N InputNilai            (hasil popup "Mulai Input Nilai" → rekomendasi PTN)
User 1──N RiwayatPengerjaan     (sesi ngerjain soal)
  RiwayatPengerjaan N──1 PaketSoal
  RiwayatPengerjaan 1──N JawabanUser  N──1 Soal

Mode (enum) 1──N Mapel 1──N PaketSoal 1──N Soal

Guru                          (info guru di /bimble)

User 1──1 Leaderboard          (poin, streak, peringkat)
User 1──N UserAchievement N──1 Achievement

BackupLog                     (riwayat backup otomatis/manual)
```

---

## Domain & Model

### 1. Bank Soal (`Mapel`, `PaketSoal`, `Soal`)
- **Mode**: `TKA_SMA`, `TKA_SMP`, `SNBT` (enum).
- **Mapel** = subtes dalam satu mode (mis. SNBT → PPU, PBM, LBI, LBE; TKA SMP → Matematika, IPA, dll).
- **PaketSoal** = paket 1..8 per mapel, tipe `latihan`/`ujian`.
- **Soal** = satu butir; stimulus/prompt/options/explanation disimpan sebagai **JSON string**
  (format asli komponen: `SoalSeg[]` = `{t, b?}`), answer `"A".."D"`.

### 2. User & Profil (`User`, `UserProfile`, `AiDiagnostic`, `InputNilai`)
- **User**: akun (email, name, password mock, role SISWA/GURU/ADMIN, avatar).
- **UserProfile**: data tampilan profil — nama lengkap, streak days, total soal, akurasi.
- **AiDiagnostic**: nilai & progress tiap mode + `rawData` JSON untuk grafik radar.
- **InputNilai**: hasil isi nilai di dashboard → rekomendasi PTN (disimpan historis).

### 3. Guru (`Guru`)
- Info guru /bimble: nama, bidang, mode, rating, jumlah ulasan, harga, jadwal.
- Field presentasi kartu: `bg`, `shadow`, `avatarPath`, `stars` (JSON), `siswaLabel`,
  `panelData` (JSON panel detail + reviews).

### 4. Leaderboard (`Leaderboard`, `Achievement`, `UserAchievement`)
- **Leaderboard**: total poin, streak, peringkat per user.
- **Achievement**: definisi (kode, nama, deskripsi, syarat JSON).
- **UserAchievement**: achievement yang sudah dibuka user.

### 5. Backup (`BackupLog`)
- Mencatat setiap backup: nama, tipe, path file, ukuran, status.

---

## Pola Akses Data

```
[UI client component]
   │  fetch()
   ▼
[API route  app/api/**]        → validasi + panggil repo
   ▼
[Repository  lib/repo/**]      → query Prisma terpusat (soal.ts, user.ts, guru.ts, leaderboard.ts)
   ▼
[PrismaClient  lib/db.ts]      → singleton + adapter better-sqlite3
   ▼
[(SQLite) prisma/dev.db]
```

Semua query lewat **repository** — komponen tidak pernah menyentuh Prisma langsung.

---

## Backup & Restore

### Backup manual
```bash
npm run db:backup            # = tsx lib/backup.ts
```

### Backup otomatis (cron / scheduler)
Tambahkan ke crontab (contoh backup tiap jam 03.00):
```bash
0 3 * * * cd /home/itechnowebdev/siapin && npm run db:backup >> /tmp/siapin-backup.log 2>&1
```

### Yang dihasilkan (folder `backups/`)
1. `siapin-backup-<timestamp>.db` — salinan file SQLite (recovery instan).
2. `siapin-backup-<timestamp>.json` — dump JSON semua tabel (portable / siap migrasi ke Supabase).
3. Catatan di tabel `BackupLog`.
- **Pruning otomatis**: hanya 10 backup terakhir disimpan.

### Restore
```bash
# 1. stop dev server, 2. salin balik file .db
cp backups/siapin-backup-<timestamp>.db prisma/dev.db
npm run dev
```

---

## Seed

```bash
npm run db:seed    # = tsx prisma/seed.ts  (idempotent — aman dijalankan ulang)
```

Mengisi: 14 mapel (3 mode), paket + 20 soal Matematika TKA SMP, 13+ guru bimble,
10 entri leaderboard, 3 achievement, user demo `contoh@gmail.com` / `contoh123`.

---

## Migrasi & Perubahan Schema

```bash
npx prisma migrate dev --name <nama_perubahan>   # dev: buat + terapkan
npx prisma generate                               # regenerate client
npx prisma studio                                 # inspeksi data (UI)
```

Aturan: **setiap ubah `schema.prisma`** → migrate + generate + (kalau data berubah) seed.

---

## Menuju Produksi (setelah lomba)

1. Ganti datasource SQLite → Postgres/Supabase.
2. Ganti `lib/db.ts` adapter (better-sqlite3 → @prisma/adapter-pg / supabase).
3. `prisma migrate deploy` di cloud.
4. Auth mock → Supabase Auth; password mock → hash.
5. Backup file → backup cloud (Supabase pitr / pg_dump).
