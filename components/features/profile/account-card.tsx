"use client";

import { cq } from "@/lib/cq";

/** Account card (Rectangle 76) — state belum login. */
export function AccountCard() {
  return (
    <div
      className="relative"
      style={{
        width: cq(1291),
        height: cq(170),
        borderRadius: cq(50),
        backgroundColor: "#f4e0df",
        // stroke #f5c3c2 2px desain — trap: cq(2) solid
        border: `${cq(2)} solid #f5c3c2`,
      }}
    >
      {/* avatar bulat (crop sudah di-mask lingkaran, bg card transparan) */}
      <img
        src="/visual/profile/avatar-default.png"
        alt="Profil"
        style={{
          position: "absolute",
          left: cq(54), // 128 - 74
          top: cq(32), // 303 - 271
          width: cq(105),
          height: cq(105),
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      {/* nama */}
      <p
        className="font-bold"
        style={{
          position: "absolute",
          left: cq(215), // 289 - 74
          top: cq(46), // 317 - 271
          fontSize: cq(36),
          lineHeight: 1.25,
          color: "#2a235c",
        }}
      >
        Anymous
      </p>

      {/* sub (email / username kosong) */}
      <p
        className="font-bold"
        style={{
          position: "absolute",
          left: cq(215),
          top: cq(95), // 366 - 271
          fontSize: cq(24),
          lineHeight: 1.2,
          color: "#2a235c",
        }}
      >
        -
      </p>

      {/* tombol Login (Rectangle edit profile): card 74..1365, btn 1141..1305 → kanan 60 */}
      <button
        type="button"
        style={{
          position: "absolute",
          right: cq(60),
          top: cq(55), // 326 - 271
          width: cq(164),
          height: cq(59),
          borderRadius: cq(40),
          backgroundColor: "#f5c3c2",
          cursor: "pointer",
        }}
      >
        <span
          className="font-bold"
          style={{ fontSize: cq(24), color: "#6c6363" }}
        >
          Login
        </span>
      </button>
    </div>
  );
}
