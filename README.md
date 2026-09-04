# 📚 SIAPIN — Siap Taklukkan PTN Impianmu

Platform bimbel/education online untuk persiapan **SNBT, TKA SMA, dan TKA SMP** — drill soal, pantau progress, dan estimasi peluang masuk PTN.

## 🚀 Menjalankan Project

```bash
npm install --legacy-peer-deps
npm run db:seed   # seed database SQLite (opsional)
npm run dev       # development
npm run build && npm run start  # production
```

> Catatan: install npm wajib `--legacy-peer-deps` (bug `edgesOut`). Prisma di-pin di `7.10.0`.

---

# 📚 Sumber Data

Dokumen ini mencatat **semua sumber data** yang dipakai SIAPIN (aplikasi bimbel/persiapan SNBT, TKA SMA, TKA SMP). Dibuat agar penulisan deskripsi/credit/kontributor nanti lebih mudah & transparan.

---

## 1. Bank Soal (2.158 soal orisinal)

Bank soal SIAPIN **ditulis orisinal** (bukan disalin dari web) sebagai file TypeScript statis:

| Mode | Subtes | Jumlah |
|---|---|---|
| SNBT | Penalaran Matematika (pm) | 150 |
| SNBT | Pengetahuan & Pemahaman Umum (ppu) | 150 |
| SNBT | Pemahaman Bacaan & Menulis (pbm) | 150 |
| SNBT | Pengetahuan Kuantitatif (pk) | 150 |
| SNBT | Literasi Bahasa Indonesia (lbi) | 150 |
| SNBT | Literasi Bahasa Inggris (lbe) | 150 |
| TKA SMA | Matematika | 150 |
| TKA SMA | Fisika | 150 |
| TKA SMA | Kimia | 150 |
| TKA SMA | Biologi | 160 |
| TKA SMA | Ekonomi | 150 |
| TKA SMP | Matematika | 150 |
| TKA SMP | IPA | 198 |
| TKA SMP | Bahasa Inggris | 150 |
| **Total** | | **2.158** |

Lokasi: `lib/data/bank/banks/{snbt,tka-sma,tka-smp}/`

**Struktur materi mengacu pada:**
- Struktur resmi SNBT 2026 — SNPMB BPPP Kemdikbud (https://snpmb.bppp.kemdikbud.go.id)
- Struktur TKA Pusmendik / Pusmenjar

> Bank soal ditulis dengan bantuan AI generatif lalu **diverifikasi kebenaran jawaban & sintaks** (tsc, grep, distribusi A/B/C/D) sebelum dipakai.

---

## 2. Data PTN, Prodi, Daya Tampung & Passing Grade

Untuk fitur **"Estimasi Peluang Masuk PTN"**, SIAPIN memakai dataset publik:

| Data | Cakupan | Sumber |
|---|---|---|
| Daftar 75 PTN (kode, wilayah, tier, total daya tampung, total peminat, akurasi) | 75 PTN | `ptn_index.parquet` — [TeguhEP/LolosKampus](https://github.com/TeguhEP/LolosKampus) |
| 3.825 prodi (daya tampung 2026, peminat 2025, rasio keketatan, passing grade estimasi + low/high, kategori kompetisi) | 75 PTN × 3.825 prodi | `passing_grade_ref.parquet` — [TeguhEP/LolosKampus](https://github.com/TeguhEP/LolosKampus) |
| Data historis daya tampung & peminat SNBT per prodi (2021–2025) | 543 prodi (8 PTN target) | `/tmp/detail_snbt.json` hasil crawling — [divarvian/daya-tampung](https://github.com/divarvian/daya-tampung) |

**Sumber asli yang dirujuk dataset LolosKampus:**
- **SNPMB SNBT 2021–2026** — data resmi daya tampung & peminat (https://snpmb.bppp.kemdikbud.go.id)
- **Schoolfess Community 2022–2025** — data crowdsourced nilai UTBK (untuk rekonstruksi passing grade estimasi)

> ⚠️ Passing grade adalah **estimasi** (rekonstruksi dari data crowdsource), bukan ambang resmi SNPMB.

### Metodologi Estimasi Peluang

**Rujukan konsep (LolosKampus):** estimasi memakai kombinasi dua sinyal — rasio keketatan & selisih nilai terhadap passing grade:

```text
prob = 0.50 × signal_rasio + 0.50 × signal_pg

signal_rasio = sigmoid(-0.8 × gap_normalized)   // rasio keketatan (peminat/kursi)
signal_pg    = sigmoid(0.055 × pg_gap)           // selisih nilai siswa − PG estimasi

Status LolosKampus:
  SANGAT AMAN  ≥ 75%   (nilai jauh di atas PG)
  AMAN         60–75%  (nilai di atas PG)
  BERJUANG     35–60%  (nilai mendekati PG)
  GAMBLING     < 35%   (nilai di bawah PG)
```

**Engine aktual SIAPIN** (`lib/data/ptn/estimasi.ts`) memakai model **probabilistik CDF normal** yang lebih presisi:

```text
μ      = passing grade estimasi prodi (pg)
σ      = (pgHigh − pgLow) / (2 × 1.28)     // asumsi rentang PG = 80% confidence interval
z      = (skor_user − μ) / σ
P      = Φ(z)                               // CDF normal standar
diskon = rasio_keketatan tinggi (>15) & skor < μ → peluang dikoreksi turun
zona   = Aman / Kompetitif / Borderline / Berisiko
```

Keduanya memakai **data riil** `pg`, `pgLow`, `pgHigh`, `rasio`, `dayaTampung`, `peminat` dari dataset LolosKampus (lihat tabel §2).

---

## 3. Distribusi Skor UTBK (untuk normalisasi nilai)

| Parameter | Nilai | Sumber |
|---|---|---|
| Distribusi UTBK 2026 | μ = 554.03, σ = 74.6, N ≈ 909.654 peserta | [TeguhEP/LolosKampus](https://github.com/TeguhEP/LolosKampus) `app_config.json` |

---

## 4. Gambar / Aset Visual

| Aset | Sumber |
|---|---|
| Figma design system SIAPIN | `/home/sijawara/figma-ya/ITechno-WebDevelopment/` |
| Avatar default | `/visual/profile/avatar-default.png` |
| Foto guru bimble | `/visual/bimble/*` (guru ilustrasi) |
| Preview login dashboard | `/siapin-previews/*` (screenshot referensi) |

---

## 5. Kode / Library Pihak Ketiga

| Library | Lisensi | Catatan |
|---|---|---|
| Next.js 16, React 19, Tailwind v4, TypeScript | MIT | Framework inti |
| Prisma 7 (SQLite) | Apache-2.0 | ORM + DB |
| Plus Jakarta Sans, Baloo 2 (Google Fonts) | OFL | Tipografi |

## 6. Struktur Data di Project

File data statis yang dipakai fitur estimasi & diagnostik:

```
lib/data/ptn/
├── snbt-2026.json        # 75 PTN + 3.825 prodi (data utama, 808 KB)
└── index.ts              # barrel: tipe PtnInfo/ProdiInfo + helper findPtn/prodiByPtn/PTN_LIST
lib/data/ptn/estimasi.ts  # engine CDF normal: estimasiProdi(), buatRekomendasi(), skorGabungan()
lib/data/bank/banks/      # 2.158 soal statis per subtes (14 file TS)
lib/repo/riwayat.ts       # repository simpan/list riwayat pengerjaan (Prisma)
app/api/riwayat/          # POST /api/riwayat — simpan hasil jawaban
app/api/diagnostik/       # GET /api/diagnostik?email= — agregasi progress per user
app/api/user/sync/        # POST /api/user/sync — upsert user mock → DB
```

## 7. Cara Update Data

- **Bank soal**: edit file TS di `lib/data/bank/banks/` lalu jalankan `npx tsc --noEmit` & `grep -c "no:"` untuk verifikasi.
- **Data PTN/prodi**: saat SNPMB merilis daya tampung tahun baru —
  1. Dapatkan parquet terbaru dari [TeguhEP/LolosKampus](https://github.com/TeguhEP/LolosKampus) (`data/app/passing_grade_ref.parquet`, `ptn_index.parquet`)
  2. Jalankan skrip ekstraksi (lihat riwayat commit: pandas → `snbt-2026.json`)
  3. Pastikan `index.ts` tipe tetap cocok, lalu `npx tsc --noEmit`

## 8. Lisensi & Atribusi Data

| Data | Lisensi | Catatan |
|---|---|---|
| Bank soal SIAPIN (2.158) | © SIAPIN — orisinal | Ditulis tim SIAPIN + bantuan AI, diverifikasi |
| Dataset LolosKampus | Repo publik, **tanpa lisensi eksplisit** | Data faktual daya tampung/peminat berasal dari SNPMB (data publik pemerintah); PG = estimasi komunitas |
| Dataset divarvian/daya-tampung | Repo publik, **tanpa lisensi eksplisit** | Data agregasi daya tampung SNPMB |
| Data resmi SNPMB | Publik (pemerintah) | https://snpmb.bppp.kemdikbud.go.id |

> Jika SIAPIN dipublikasikan/dikomersialkan, sebaiknya: (1) kredit `TeguhEP/LolosKampus` & `divarvian/daya-tampung` di footer/tentang, (2) verifikasi ulang angka lewat portal SNPMB resmi.

## 9. Deskripsi Singkat (siap pakai)

> **SIAPIN — Siap Taklukkan PTN Impianmu.** Platform bimbingan belajar online untuk persiapan SNBT, TKA SMA, & TKA SMP. 2.158 soal latihan orisinal + pembahasan, diagnostik AI otomatis dari hasil pengerjaan (grafik radar per subtes), dan estimasi peluang lolos ke 75 PTN / 3.825 prodi berbasis passing grade & daya tampung riil — lengkap dengan rekomendasi untuk meningkatkan peluang.

---

## ⚠️ Disclaimer

- Semua angka **peluang** bersifat **estimasi** berbasis data historis & model statistik.
- SIAPIN **bukan** tool resmi SNPMB/Kemdikbud/PTN manapun; hasil tidak menjamin kelulusan.
- Selalu verifikasi informasi terbaru di https://snpmb.bppp.kemdikbud.go.id

---

*Dokumen ini diperbarui: 2026-09-04.*
