"use client";

import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";

const ACHIEVEMENTS = [
  {
    title: "Top Performer",
    subtitle: "Masuk Top 3 Leaderboard",
    color: "#4b0a95",
    cardBg: "#e0e1ff",
    edge: "#b388e6",
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
    edge: "#d9b45c",
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
    edge: "#93a3b8",
    icon: "/visual/profile/ach-shield.png",
    iconW: 94,
    iconH: 127,
    iconTop: 24, // 764 - 740
  },
] as const;

/** Status tercapai utk tiap achievement (dihitung dari data asli di server). */
type AchievementKey = "Top Performer" | "Never Give Up" | "Streak Master";
function useAchievementStatus(): Record<AchievementKey, boolean> {
  const { user } = useAuth();
  const a = user?.stats?.achievements;
  return {
    "Top Performer": a?.topPerformer ?? false,
    "Never Give Up": a?.neverGiveUp ?? false,
    "Streak Master": a?.streakMaster ?? false,
  };
}

/** Chip kecil "Tercapai"/"Terkunci" di pojok kartu — tidak mengubah dimensi kartu. */
function StatusBadge({ achieved, color }: { achieved: boolean; color: string }) {
  return (
    <span
      className="pointer-events-none absolute inline-flex items-center rounded-full font-bold"
      style={{
        top: cqm(8),
        right: cqm(8),
        padding: `${cqm(3)} ${cqm(10)}`,
        fontSize: cqm(10),
        lineHeight: 1.4,
        letterSpacing: "0.02em",
        color: achieved ? "#ffffff" : color,
        backgroundColor: achieved ? "#3bb273" : "rgba(255,255,255,0.55)",
        border: achieved ? "none" : `${cqm(1)} solid ${color}33`,
        boxShadow: achieved ? `0 ${cqm(2)} ${cqm(6)} rgba(59,178,115,0.35)` : "none",
      }}
    >
      {achieved ? "✓ Tercapai" : "Terkunci"}
    </span>
  );
}

export function Achievement() {
  const status = useAchievementStatus();

  return (
    <section>
      <h2
        className="font-bold"
        style={{ fontSize: cqm(32), lineHeight: 1.25, color: "#2a235c" }}
      >
        Achievment
      </h2>

      {/* HP: 1 container untuk semua achievement (juga dipakai desktop portrait) */}
      <div
        className="flex w-full flex-col desk:hidden"
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
            className="relative flex w-full items-center"
            style={{
              gap: cqm(32),
              borderRadius: cqm(16),
              backgroundColor: a.cardBg,
              padding: `${cqm(20)} ${cqm(32)}`,
            }}
          >
            <StatusBadge achieved={status[a.title]} color={a.color} />
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

      {/* Desktop (landscape ≥768px): 3 kartu sejajar seperti Figma */}
      <div className="hidden w-full desk:flex" style={{ gap: cqm(40), marginTop: cqm(25) }}>
        {ACHIEVEMENTS.map((a) => (
          <div
            key={a.title}
            className="relative"
            style={{
              width: cqm(404),
              height: cqm(231),
              borderRadius: cqm(20),
              backgroundColor: a.cardBg,
              boxShadow: `0 ${cqm(4)} ${cqm(16)} rgba(28,20,81,0.08), 0 ${cqm(5)} 0 ${a.edge}`,
            }}
          >
            <StatusBadge achieved={status[a.title]} color={a.color} />
            {/* ikon achievement */}
            <img
              src={a.icon}
              alt={a.title}
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: cqm(a.iconTop),
                width: cqm(a.iconW),
                height: cqm(a.iconH),
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
                top: cqm(143), // 883 - 740
                fontSize: cqm(24),
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
                top: cqm(177), // 917 - 740
                fontSize: cqm(12),
                lineHeight: 1.25,
                color: a.color,
                textAlign: "center",
                paddingInline: cqm(20),
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
