"use client";

import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";

interface AccountCardProps {
  onLoginClick?: () => void;
  onEditClick?: () => void;
}

/**
 * Account card (Rectangle 76).
 * - Belum login → nama "Anymous", subtitle "-", tombol "Login".
 * - Sudah login  → nama user, "Bergabung sejak <tanggal>", tombol "Edit Profile".
 */
export function AccountCard({ onLoginClick, onEditClick }: AccountCardProps) {
  const { user } = useAuth();
  const loggedIn = Boolean(user);

  return (
    <div
      className="flex w-full items-center"
      style={{
        minHeight: cqm(170),
        borderRadius: cqm(50),
        backgroundColor: "#f4e0df",
        // stroke #f5c3c2 2px desain
        border: `${cqm(2)} solid #f5c3c2`,
        paddingLeft: cqm(54), // 128 - 74
        paddingRight: cqm(60), // btn kanan 60
      }}
    >
      {/* avatar bulat */}
      <img
        src={user?.avatar ?? "/visual/profile/avatar-default.png"}
        alt="Profil"
        className="shrink-0"
        style={{
          width: cqm(105),
          height: cqm(105),
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      {/* nama + sub */}
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
          {loggedIn ? user!.name : "Anymous"}
        </p>
        <p
          className="truncate font-bold"
          style={{
            fontSize: cqm(24),
            lineHeight: 1.2,
            color: "#2a235c",
          }}
        >
          {loggedIn ? `Bergabung sejak ${user!.joinedAt ?? ""}` : "-"}
        </p>
      </div>

      {/* tombol Login / Edit Profile */}
      <button
        type="button"
        onClick={loggedIn ? onEditClick : onLoginClick}
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
          {loggedIn ? "Edit Profile" : "Login"}
        </span>
      </button>
    </div>
  );
}
