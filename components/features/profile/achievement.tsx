"use client";

import { cq } from "@/lib/cq";

const ACHIEVEMENTS = [
  {
    title: "Top Performer",
    subtitle: "Masuk Top 3 Leaderboard",
    color: "#4b0a95",
    cardBg: "#e0e1ff",
    icon: "/visual/profile/ach-crown.png",
    iconW: 100,
    iconH: 98,
    iconTop: 37, // 777 - 740
  },
  {
    title: "Never Give Up",
    subtitle: "Mengulang soal yang salah sampai benar",
    color: "#4c3100",
    cardBg: "#fff6bf",
    icon: "/visual/profile/ach-medal.png",
    iconW: 100,
    iconH: 100,
    iconTop: 42, // 782 - 740
  },
  {
    title: "Streak Master",
    subtitle: "Belajar 7 hari berturut-turut",
    color: "#28373f",
    cardBg: "#e3eff6",
    icon: "/visual/profile/ach-shield.png",
    iconW: 94,
    iconH: 127,
    iconTop: 24, // 764 - 740
  },
];

export function Achievement() {
  return (
    <section>
      <h2
        className="font-bold"
        style={{ fontSize: cq(32), lineHeight: 1.25, color: "#2a235c" }}
      >
        Achievment
      </h2>

      <div className="flex w-full" style={{ gap: cq(40), marginTop: cq(25) }}>
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.title}
            className="relative"
            style={{
              width: cq(404),
              height: cq(231),
              borderRadius: cq(20),
              backgroundColor: a.cardBg,
              boxShadow: `0 ${cq(4)} ${cq(16)} rgba(28,20,81,0.08)`,
            }}
          >
            {/* ikon achievement */}
            <img
              src={a.icon}
              alt={a.title}
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: cq(a.iconTop),
                width: cq(a.iconW),
                height: cq(a.iconH),
                objectFit: "contain",
              }}
            />
            {/* judul */}
            <p
              className="font-bold"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: cq(143), // 883 - 740
                fontSize: cq(24),
                lineHeight: 1.25,
                color: a.color,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {a.title}
            </p>
            {/* sub judul */}
            <p
              className="font-medium"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: cq(177), // 917 - 740
                fontSize: cq(12),
                lineHeight: 1.25,
                color: a.color,
                textAlign: "center",
                paddingInline: cq(20),
              }}
            >
              {a.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
