/**
 * Seed — mengisi database SIAPIN dari data master project.
 *
 * Sumber:
 *  - lib/data/modes.ts  → Mapel (subtes per mode) + paket kosong
 *  - lib/data/soal.ts   → BANK_SOAL (20 soal matematika SMP → paket 1)
 *  - lib/data/gurus.ts  → Guru untuk halaman /bimble
 *  - data leaderboard (komponen) → Leaderboard
 *  - achievement (komponen)     → Achievement
 *  - akun demo: contoh@gmail.com / contoh123
 *
 * Jalankan: npx prisma db seed   (atau: npx tsx prisma/seed.ts)
 */
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { modes } from "../lib/data/modes";
import { BANK_SOAL } from "../lib/data/soal";
import { gurus } from "../lib/data/gurus";
import { TEACHERS } from "../lib/data/teachers";
import { TEACHER_PANELS } from "../lib/data/teacher-panels";
import type { Mode } from "../lib/types";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
});
const prisma = new PrismaClient({ adapter });

/** Konversi slug mode UI ("snbt") → enum Prisma ("SNBT") */
function toMode(slug: string): "SNBT" | "TKA_SMA" | "TKA_SMP" {
  if (slug === "snbt") return "SNBT";
  if (slug === "tka-sma") return "TKA_SMA";
  return "TKA_SMP";
}

async function seedMapelSoal() {
  console.log("🌱 Seeding Mapel + Soal...");

  for (const mode of modes as Mode[]) {
    const prismaMode = toMode(mode.slug);
    for (const sub of mode.subtests) {
      // Mapel (subtes) — upsert per (mode, slug)
      const mapel = await prisma.mapel.upsert({
        where: { mode_slug: { mode: prismaMode, slug: sub.slug } },
        update: { nama: sub.name, deskripsi: sub.description, urutan: sub.questionCount },
        create: {
          mode: prismaMode,
          slug: sub.slug,
          nama: sub.name,
          deskripsi: sub.description,
          urutan: sub.questionCount,
        },
      });

      // Untuk mapel Matematika TKA SMP: seed 1 paket berisi BANK_SOAL (20 soal)
      if (mode.slug === "tka-smp" && sub.slug === "matematika") {
        const paket = await prisma.paketSoal.upsert({
          where: { mapelId_nama: { mapelId: mapel.id, nama: "Paket 1" } },
          update: {},
          create: { mapelId: mapel.id, nama: "Paket 1", tipe: "latihan", urutan: 1 },
        });

        const existing = await prisma.soal.count({ where: { paketId: paket.id } });
        if (existing === 0) {
          for (const s of BANK_SOAL) {
            await prisma.soal.create({
              data: {
                paketId: paket.id,
                no: s.no,
                stimulus: s.stimulus.length ? JSON.stringify(s.stimulus) : null,
                prompt: JSON.stringify(s.prompt),
                options: JSON.stringify(s.options),
                answer: s.answer,
                explanationTitle: s.explanationTitle,
                explanation: JSON.stringify(s.explanation),
              },
            });
          }
          console.log(`  ✔ Mapel ${sub.name} (${mode.slug}) → Paket 1, ${BANK_SOAL.length} soal`);
        }
      }
    }
  }

  // Paket kosong 1..8 untuk mapel lain (struktur UI 8 paket)
  // — hanya dibuat kalau mapel belum punya paket sama sekali (opsional, ringan)
  console.log("  ✔ Mapel selesai");
}

async function seedGuru() {
  console.log("🌱 Seeding Guru...");
  // Upsert pakai id statis agar id konsisten: "mr-pudjo" → dipakai UI
  for (const g of gurus) {
    const idStable = g.id.replace(/^mr-|^miss-/, "") + "-" + g.id; // id db stabil
    await prisma.guru.upsert({
      where: { id: g.id },
      update: {
        nama: g.title,
        bidang: g.subject,
        rating: g.rating,
        jumlahUlasan: g.students,
        deskripsi: g.about,
      },
      create: {
        id: g.id,
        nama: g.title,
        bidang: g.subject,
        rating: g.rating,
        jumlahUlasan: g.students,
        deskripsi: g.about,
        foto: null,
      },
    });
  }
  console.log(`  ✔ ${gurus.length} guru`);

  // Seed 13 guru tampilan /bimble (dari TEACHERS) — dengan data presentasi lengkap
  // + panelData JSON (data panel popup, dari lib/data/teacher-panels.ts).
  for (const t of TEACHERS) {
    const panel = TEACHER_PANELS[t.id];
    const data = {
      nama: t.name,
      bidang: t.subject,
      bg: t.bg,
      shadow: t.shadow,
      avatarPath: t.avatar,
      stars: JSON.stringify(t.stars),
      siswaLabel: t.siswa,
      panelData: panel ? JSON.stringify(panel) : null,
      foto: null,
    };
    await prisma.guru.upsert({
      where: { id: `bimble-${t.id}` },
      update: data,
      create: { id: `bimble-${t.id}`, ...data },
    });
  }
  console.log(`  ✔ ${TEACHERS.length} guru bimble (+ panelData lengkap)`);
}

async function seedAchievement() {
  console.log("🌱 Seeding Achievement...");
  const defs = [
    { kode: "top-performer", nama: "Top Performer", deskripsi: "Masuk 3 besar leaderboard", syarat: { type: "rank", max: 3 } },
    { kode: "never-give-up", nama: "Never Give Up", deskripsi: "Menyelesaikan 1 paket soal penuh", syarat: { type: "paket_selesai", min: 1 } },
    { kode: "streak-master", nama: "Streak Master", deskripsi: "Belajar 5 hari berturut-turut", syarat: { type: "streak", min: 5 } },
  ];
  for (const d of defs) {
    await prisma.achievement.upsert({
      where: { kode: d.kode },
      update: { nama: d.nama, deskripsi: d.deskripsi, syarat: d.syarat },
      create: { kode: d.kode, nama: d.nama, deskripsi: d.deskripsi, syarat: d.syarat },
    });
  }
  console.log(`  ✔ ${defs.length} achievement`);
}

async function seedUserDemo() {
  console.log("🌱 Seeding user demo + profil + diagnostic + leaderboard...");

  // Hapus dulu user demo lama (kalau ada) agar id/state konsisten saat reseed
  const existing = await prisma.user.findUnique({ where: { email: "contoh@gmail.com" } });
  if (existing) {
    // biarkan — hanya update
  }

  const user = await prisma.user.upsert({
    where: { email: "contoh@gmail.com" },
    update: {},
    create: {
      email: "contoh@gmail.com",
      name: "Contoh User",
      password: "contoh123", // mock — TODO: hash saat produksi
      phone: "081234567890",
      role: "SISWA",
      joinedAt: new Date("2025-08-17"),
    },
  });

  // Hapus baris leaderboard demo (kalau ada dari seed versi lama) —
  // user demo baru masuk leaderboard setelah mengerjakan soal beneran.
  await prisma.leaderboard.deleteMany({ where: { userId: user.id } });

  await prisma.userProfile.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      namaLengkap: "Contoh User",
      streakDays: 5,
      totalSoal: 370,
      akurasi: 78,
    },
  });

  await prisma.aiDiagnostic.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      tkaSmp: 62,
      tkaSma: 55,
      snbt: 70,
      progressTkaSmp: 10,
      progressTkaSma: 20,
      progressSnbt: 50,
    },
  });

  // NOTE: user demo sengaja TIDAK diberi baris leaderboard di seed.
  // Ia baru muncul di leaderboard setelah mengerjakan soal (perilaku realistis),
  // dan podium tetap menampilkan 3 besar sesuai desain (wibiotwitb, thesapisang, maukeits).

  // Achievement demo user (streak master tercapai)
  const ach = await prisma.achievement.findUnique({ where: { kode: "streak-master" } });
  if (ach) {
    await prisma.userAchievement.upsert({
      where: { userId_achievementId: { userId: user.id, achievementId: ach.id } },
      update: {},
      create: { userId: user.id, achievementId: ach.id },
    });
  }

  console.log(`  ✔ User demo: ${user.email}`);
}

/** Seed leaderboard — 30 dummy user (10 per mode TKA_SMP / TKA_SMA / SNBT).
 *  Tiap mode punya rangkaian user & poin sendiri, supaya tab mode beda-beda. */
async function seedLeaderboard() {
  console.log("🌱 Seeding Leaderboard (30 dummy user / 3 mode)...");

  const entries: {
    mode: "TKA_SMP" | "TKA_SMA" | "SNBT";
    username: string;
    points: number;
    acc: number;
  }[] = [
    // ---- SNBT (10) — urutan podium & rows sesuai desain ----
    { mode: "SNBT", username: "wibiotwitb", points: 50500, acc: 90 },
    { mode: "SNBT", username: "thesapisang", points: 30700, acc: 88 },
    { mode: "SNBT", username: "maukeits", points: 29100, acc: 85 },
    { mode: "SNBT", username: "gapyearsedih", points: 20000, acc: 81.35 },
    { mode: "SNBT", username: "kaina", points: 19900, acc: 81.3 },
    { mode: "SNBT", username: "kayla", points: 19100, acc: 80 },
    { mode: "SNBT", username: "astama wiboso", points: 18900, acc: 79.9 },
    { mode: "SNBT", username: "kaina2", points: 18100, acc: 79.3 },
    { mode: "SNBT", username: "sandy", points: 17700, acc: 78 },
    { mode: "SNBT", username: "kita akan lawan", points: 17000, acc: 77.3 },
    // ---- TKA SMA (10) ----
    { mode: "TKA_SMA", username: "raihmimpi", points: 48200, acc: 89.5 },
    { mode: "TKA_SMA", username: "semangat45", points: 45100, acc: 88.2 },
    { mode: "TKA_SMA", username: "sbmptnking", points: 43900, acc: 87.6 },
    { mode: "TKA_SMA", username: "lulusptn", points: 41200, acc: 86.1 },
    { mode: "TKA_SMA", username: "nguliksoal", points: 38800, acc: 84.7 },
    { mode: "TKA_SMA", username: "juara1", points: 35600, acc: 83.9 },
    { mode: "TKA_SMA", username: "rafi belajar", points: 34100, acc: 82.8 },
    { mode: "TKA_SMA", username: "dewi s", points: 32900, acc: 82.1 },
    { mode: "TKA_SMA", username: "anakfisika", points: 30500, acc: 81.4 },
    { mode: "TKA_SMA", username: "bimbelmania", points: 29800, acc: 80.6 },
    // ---- TKA SMP (10) ----
    { mode: "TKA_SMP", username: "si paling rajin", points: 47200, acc: 92.1 },
    { mode: "TKA_SMP", username: "cimong", points: 46100, acc: 91.3 },
    { mode: "TKA_SMP", username: "pejuang smp", points: 44500, acc: 90.4 },
    { mode: "TKA_SMP", username: "matematika asik", points: 42300, acc: 89.2 },
    { mode: "TKA_SMP", username: "ipa jaya", points: 40100, acc: 88.5 },
    { mode: "TKA_SMP", username: "bintang kelas", points: 38700, acc: 87.7 },
    { mode: "TKA_SMP", username: "nisa cerdas", points: 36400, acc: 86.3 },
    { mode: "TKA_SMP", username: "raka pintar", points: 35200, acc: 85.6 },
    { mode: "TKA_SMP", username: "kakak kelas", points: 33800, acc: 84.9 },
    { mode: "TKA_SMP", username: "adik smp", points: 31200, acc: 83.8 },
  ];

  // Reset semua baris leaderboard lama (biar konsisten & tidak dobel)
  await prisma.leaderboard.deleteMany({});
  // Hapus user "ghost" leaderboard lama yang tidak dipakai lagi (email lb-*)
  const oldGhosts = await prisma.user.findMany({
    where: { email: { startsWith: "lb-" } },
  });
  if (oldGhosts.length) {
    await prisma.user.deleteMany({ where: { id: { in: oldGhosts.map((u) => u.id) } } });
  }

  // Kelompokkan per mode & beri peringkat berurutan (1..10) per mode
  const byMode: Record<string, typeof entries> = { TKA_SMP: [], TKA_SMA: [], SNBT: [] };
  for (const e of entries) byMode[e.mode].push(e);

  let count = 0;
  // Eksekusi upsert berurutan (await) — lebih aman & rapi
  for (const mode of ["TKA_SMP", "TKA_SMA", "SNBT"] as const) {
    const list = byMode[mode].sort((a, b) => b.points - a.points);
    for (let idx = 0; idx < list.length; idx++) {
      const e = list[idx];
      const email = `lb-${mode.toLowerCase()}-${e.username.replace(/\s+/g, "-").toLowerCase()}@siapin.local`;
      const user = await prisma.user.upsert({
        where: { email },
        update: { name: e.username },
        create: {
          email,
          name: e.username,
          password: "x", // dummy — tidak bisa login
          role: "SISWA",
        },
      });
      await prisma.leaderboard.upsert({
        where: { userId: user.id },
        update: { mode, totalPoin: e.points, peringkat: idx + 1 },
        create: { userId: user.id, mode, totalPoin: e.points, peringkat: idx + 1 },
      });
      await prisma.userProfile.upsert({
        where: { userId: user.id },
        update: { akurasi: e.acc },
        create: { userId: user.id, akurasi: e.acc },
      });
      count++;
    }
  }

  console.log(`  ✔ ${count} entri leaderboard (10 per mode)`);
}

async function main() {
  console.log("=== SEED SIAPIN ===\n");
  await seedMapelSoal();
  await seedGuru();
  await seedAchievement();
  await seedUserDemo();
  await seedLeaderboard();

  const totals = {
    user: await prisma.user.count(),
    mapel: await prisma.mapel.count(),
    paket: await prisma.paketSoal.count(),
    soal: await prisma.soal.count(),
    guru: await prisma.guru.count(),
    leaderboard: await prisma.leaderboard.count(),
    achievement: await prisma.achievement.count(),
  };
  console.log("\n=== HASIL SEED ===");
  console.table(totals);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
