"use client";

import { cq } from "@/lib/cq";

type Row = {
  rank: string;
  name: string;
  accuracy: string;
  points: string;
  avatar: string;
  /** apakah kartu punya drop shadow (desain: hanya baris 1,4,6) */
  shadow: boolean;
};

const ROWS: Row[] = [
  { rank: "4", name: "gapyearsedih", accuracy: "81.35%", points: "20.0k poin", avatar: "/visual/leaderboard/row-1.png", shadow: true },
  { rank: "5", name: "kaina", accuracy: "81.30%", points: "19.9k poin", avatar: "/visual/leaderboard/row-2.png", shadow: false },
  { rank: "6", name: "kayla", accuracy: "80.00%", points: "19.1k poin", avatar: "/visual/leaderboard/row-3.png", shadow: false },
  { rank: "7", name: "astama wiboso", accuracy: "79.90%", points: "18.9k poin", avatar: "/visual/leaderboard/row-4.png", shadow: true },
  { rank: "8", name: "kaina", accuracy: "79.30%", points: "18.1k poin", avatar: "/visual/leaderboard/row-5.png", shadow: false },
  { rank: "9", name: "sandy", accuracy: "78.00%", points: "17.7k poin", avatar: "/visual/leaderboard/row-6.png", shadow: true },
  { rank: "10", name: "kita akan lawan", accuracy: "77.30%", points: "17.0k poin", avatar: "/visual/leaderboard/row-7.png", shadow: false },
];

/** Jarak antar kartu (top berikutnya − top sebelumnya − 128) dari Figma. */
const GAPS = [45, 59, 45, 59, 59, 45];

export function LeaderboardRows() {
  let prevGap = 0;
  return (
    <div style={{ width: "100%" }}>
      {ROWS.map((r, i) => {
        const marginTop = i === 0 ? 0 : GAPS[i - 1];
        prevGap = marginTop;
        return (
          <div
            key={i}
            style={{
              position: "relative",
              width: cq(1088),
              height: cq(128),
              marginInline: "auto",
              marginTop: cq(marginTop),
              borderRadius: cq(50),
              backgroundColor: "#ffffff",
              boxShadow: r.shadow
                ? `0 ${cq(4)} ${cq(4)} rgba(0,0,0,0.25)`
                : "none",
            }}
          >
            {/* nomor urut */}
            <div
              style={{
                position: "absolute",
                left: cq(44),
                top: cq(39),
                width: cq(50),
                height: cq(50),
                borderRadius: "50%",
                backgroundColor: "#dbe9ea",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="font-bold"
                style={{ fontSize: cq(24), color: "#272156", lineHeight: 1 }}
              >
                {r.rank}
              </span>
            </div>

            {/* avatar */}
            <img
              src={r.avatar}
              alt={r.name}
              style={{
                position: "absolute",
                left: cq(143),
                top: cq(22),
                width: cq(83),
                height: cq(83),
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            {/* username */}
            <p
              className="font-bold"
              style={{
                position: "absolute",
                left: cq(311),
                top: cq(29),
                fontSize: cq(23),
                color: "#2a235c",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {r.name}
            </p>

            {/* icon union-1 (chart) 20×20 */}
            <svg
              width={cq(20)}
              height={cq(20)}
              viewBox="0 0 20 20"
              style={{
                position: "absolute",
                left: cq(310),
                top: cq(76),
              }}
            >
              <rect x="3" y="10" width="3.5" height="7" rx="1" fill="#1c1451" />
              <rect x="8.5" y="5" width="3.5" height="12" rx="1" fill="#1c1451" />
              <rect x="14" y="8" width="3.5" height="9" rx="1" fill="#1c1451" />
            </svg>

            {/* rata % */}
            <span
              className="font-bold"
              style={{
                position: "absolute",
                left: cq(341),
                top: cq(74),
                fontSize: cq(19),
                color: "#2a235c",
                lineHeight: cq(24),
              }}
            >
              rata {r.accuracy}
            </span>

            {/* poin */}
            <span
              className="font-bold"
              style={{
                position: "absolute",
                left: cq(468),
                top: cq(74),
                fontSize: cq(19),
                color: "#2a235c",
                lineHeight: cq(24),
              }}
            >
              {r.points}
            </span>
          </div>
        );
      })}
    </div>
  );
}
