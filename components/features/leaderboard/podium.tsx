"use client";

import { cqm } from "@/lib/cq";

/** 1:1 data podium (top 3) — dari Figma LEADERBOARD frame 337-1256. */
export type PodiumPerson = {
  rank: 1 | 2 | 3;
  name: string;
  points: string;
  bodyColor: string;
  capColor: string;
  ringColor: string;
  avatar: string;
  /** tinggi body (sampai bottom 1096) */
  bodyH: number;
  /** top body relatif kolom */
  bodyTop: number;
  /** posisi avatar (top) relatif kolom */
  avatarTop: number;
  /** posisi teks nama (y) relatif kolom */
  nameY: number;
  /** posisi pill (y) relatif kolom */
  pillY: number;
};

const PODIUM: PodiumPerson[] = [
  {
    rank: 2,
    name: "thesapisang",
    points: "30.7K poin",
    bodyColor: "#fff6bf",
    capColor: "#a8a381",
    ringColor: "#f7d416",
    avatar: "/visual/leaderboard/podium-2.png",
    bodyH: 392,
    bodyTop: 47,
    avatarTop: 121,
    nameY: 292,
    pillY: 335,
  },
  {
    rank: 1,
    name: "wibiotwitb",
    points: "50.5K poin",
    bodyColor: "#cbecff",
    capColor: "#456e7d",
    ringColor: "#5858b8",
    avatar: "/visual/leaderboard/podium-1.png",
    bodyH: 500,
    bodyTop: 48,
    avatarTop: 101,
    nameY: 293,
    pillY: 336,
  },
  {
    rank: 3,
    name: "maukeits",
    points: "29.1K poin",
    bodyColor: "#ffe4ed",
    capColor: "#a05971",
    ringColor: "#e0659e",
    avatar: "/visual/leaderboard/podium-3.png",
    bodyH: 313,
    bodyTop: 48,
    avatarTop: 83,
    nameY: 247,
    pillY: 290,
  },
];

/** Trapesium cap podium — VECTOR Figma: atas menyempit (191px), melebar ke body. */
function Cap({ color, height }: { color: string; height: number }) {
  const w = 361;
  const topW = 191;
  const x1 = (w - topW) / 2; // 85
  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <polygon
        points={`${x1},0 ${w - x1},0 ${w},${height} 0,${height}`}
        fill={color}
      />
    </svg>
  );
}

export function Podium({ items }: { items?: PodiumPerson[] }) {
  const list = items && items.length > 0 ? items : PODIUM;
  return (
    <div
      className="podium-scope"
      style={{
        display: "flex",
        alignItems: "flex-end",
        width: cqm(1083),
        height: cqm(549),
        marginInline: "auto",
        position: "relative",
      }}
    >
      {list.map((p) => {
        const colH = p.bodyTop + p.bodyH; // tinggi total kolom (cap+body)
        return (
          <div
            key={p.rank}
            style={{
              width: cqm(361),
              height: cqm(colH),
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* cap trapesium */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: cqm(48) }}>
              <Cap color={p.capColor} height={48} />
            </div>

            {/* body kolom */}
            <div
              style={{
                position: "absolute",
                top: cqm(p.bodyTop),
                left: 0,
                width: "100%",
                height: cqm(p.bodyH),
                backgroundColor: p.bodyColor,
                borderBottomLeftRadius: cqm(10),
                borderBottomRightRadius: cqm(10),
              }}
            />

            {/* avatar bulat (ring sudah ter-bake di PNG) */}
            <img
              src={p.avatar}
              alt={p.name}
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: cqm(p.avatarTop),
                width: cqm(141),
                height: cqm(141),
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            {/* nama */}
            <p
              className="font-bold text-center"
              style={{
                position: "absolute",
                top: cqm(p.nameY),
                left: 0,
                width: "100%",
                fontSize: cqm(24),
                color: "#2a235c",
                lineHeight: 1.2,
              }}
            >
              {p.name}
            </p>

            {/* pill poin (glass) */}
            <div
              style={{
                position: "absolute",
                top: cqm(p.pillY),
                left: "50%",
                transform: "translateX(-50%)",
                width: cqm(188),
                height: cqm(53),
                borderRadius: cqm(50),
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: `0 ${cqm(4)} ${cqm(30)} rgba(0,0,0,0.1)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="font-bold"
                style={{ fontSize: cqm(24), color: "#2a235c", lineHeight: 1.2 }}
              >
                {p.points}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
