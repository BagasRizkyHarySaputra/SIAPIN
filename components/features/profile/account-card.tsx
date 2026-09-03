"use client";

import { cqm } from "@/lib/cq";

/** Account card (Rectangle 76) — state belum login. */
export function AccountCard() {
  return (
    <div
      className="flex w-full items-center"
      style={{
        minHeight: cqm(170),
        borderRadius: cqm(50),
        backgroundColor: "#f4e0df",
        // stroke #f5c3c2 2px desain — trap: cqm(2) solid
        border: `${cqm(2)} solid #f5c3c2`,
        paddingLeft: cqm(54), // 128 - 74
        paddingRight: cqm(60), // btn kanan 60 (1141..1305 dalam card 74..1365)
      }}
    >
      {/* avatar bulat (crop sudah di-mask lingkaran, bg card transparan) */}
      <img
        src="/visual/profile/avatar-default.png"
        alt="Profil"
        className="shrink-0"
        style={{
          width: cqm(105),
          height: cqm(105),
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      {/* nama + sub — flex-1 + truncate biar tidak tabrakan tombol di HP */}
      <div
        className="flex min-w-0 flex-1 flex-col"
        style={{ marginLeft: cqm(56), gap: cqm(4) }}
      >
        <p
          className="truncate font-bold"
          style={{
            fontSize: cqm(36),
            lineHeight: 1.25,
            color: "#2a235c",
          }}
        >
          Anymous
        </p>
        <p
          className="truncate font-bold"
          style={{
            fontSize: cqm(24),
            lineHeight: 1.2,
            color: "#2a235c",
          }}
        >
          -
        </p>
      </div>

      {/* tombol Login (Rectangle edit profile) */}
      <button
        type="button"
        className="shrink-0"
        style={{
          width: cqm(164),
          height: cqm(59),
          borderRadius: cqm(40),
          backgroundColor: "#f5c3c2",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: cqm(24),
        }}
      >
        <span
          className="font-bold"
          style={{ fontSize: cqm(24), color: "#6c6363" }}
        >
          Login
        </span>
      </button>
    </div>
  );
}
