"use client";

import { cqm } from "@/lib/cq";

const ACHIEVEMENTS = [
  {
    title: "Top Performer",
    subtitle: "Masuk Top 3 Leaderboard",
    color: "#4b0a95",
    cardBg: "#e0e1ff",
    icon: "/visual/profile/ach-crown.png",
  },
  {
    title: "Never Give Up",
    subtitle: "Mengulang soal yang salah sampai benar",
    color: "#4c3100",
    cardBg: "#fff6bf",
    icon: "/visual/profile/ach-medal.png",
  },
  {
    title: "Streak Master",
    subtitle: "Belajar 7 hari berturut-turut",
    color: "#28373f",
    cardBg: "#e3eff6",
    icon: "/visual/profile/ach-shield.png",
  },
];

export function Achievement() {
  return (
    <section>
      <h2
        className="font-bold"
        style={{ fontSize: cqm(32), lineHeight: 1.25, color: "#2a235c" }}
      >
        Achievment
      </h2>

      {/* 1 container untuk semua achievement */}
      <div
        className="flex w-full flex-col"
        style={{
          gap: cqm(20),
          marginTop: cqm(25),
          borderRadius: cqm(20),
          backgroundColor: "#ffffff",
          border: `${cqm(2)} solid #e7e2f5`,
          boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.08)`,
          padding: cqm(24),
        }}
      >
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.title}
            className="flex w-full items-center"
            style={{
              gap: cqm(32),
              borderRadius: cqm(16),
              backgroundColor: a.cardBg,
              padding: `${cqm(20)} ${cqm(32)}`,
            }}
          >
            {/* ikon */}
            <img
              src={a.icon}
              alt={a.title}
              className="shrink-0"
              style={{
                width: cqm(88),
                height: cqm(88),
                objectFit: "contain",
              }}
            />
            {/* judul + sub judul */}
            <div className="flex min-w-0 flex-col" style={{ gap: cqm(8) }}>
              <p
                className="font-bold"
                style={{
                  fontSize: cqm(24),
                  lineHeight: 1.25,
                  color: a.color,
                }}
              >
                {a.title}
              </p>
              <p
                className="font-medium"
                style={{
                  fontSize: cqm(16),
                  lineHeight: 1.4,
                  color: a.color,
                }}
              >
                {a.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
