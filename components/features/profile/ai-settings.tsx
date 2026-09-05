"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";
import { ConfirmPopup } from "@/components/features/profile/confirm-popup";

const PROGRESS_BARS = [
  { label: "TKA SMP", barBg: "#cfedc0", border: "#688d37", color: "#688d37" },
  { label: "TKA SMA", barBg: "#c9cef4", border: "#5858b8", color: "#5858b8" },
  { label: "SNBT", barBg: "#e3aec2", border: "#df5b97", color: "#df5b97" },
];

function AiDiagnostic() {
  const { user } = useAuth();
  const progress = user?.stats?.progress ?? [];

  return (
    <section className="w-full md:w-[40.2778cqw] md:shrink-0">
      <h2
        className="font-bold"
        style={{ fontSize: cqm(32), lineHeight: 1.25, color: "#2a235c" }}
      >
        AI Diagnostic
      </h2>
      <div
        className="relative"
        style={{
          marginTop: cqm(25),
          width: "100%",
          height: cqm(284),
          borderRadius: cqm(30),
          backgroundColor: "#dbe9ea",
          border: `${cqm(2)} solid rgba(88, 88, 184, 0.55)`, // #5858b8
        }}
      >
        <p
          className="font-bold"
          style={{
            position: "absolute",
            left: cqm(46), // 119-73
            top: cqm(35), // 1103-1068
            fontSize: cqm(32),
            lineHeight: 1.25,
            color: "#2a235c",
          }}
        >
          Progress
        </p>
        <div
          style={{
            position: "absolute",
            left: cqm(46),
            right: cqm(68), // 580-46-466: bar full-width mengikuti box
            top: cqm(107), // 1175-1068
            display: "flex",
            flexDirection: "column",
            gap: cqm(20), // 1221-1175-26 = 20
          }}
        >
          {PROGRESS_BARS.map((b) => {
            const val = progress.find((p) => p.label === b.label)?.value ?? "-";
            return (
              <div
                key={b.label}
                className="relative"
                style={{
                  width: "100%",
                  height: cqm(26),
                  borderRadius: cqm(20),
                  backgroundColor: b.barBg,
                  border: `${cqm(2)} solid ${b.border}`,
                }}
              >
                <span
                  className="font-bold"
                  style={{
                    position: "absolute",
                    left: cqm(18), // 137-119
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: cqm(16),
                    lineHeight: 1.25,
                    color: b.color,
                  }}
                >
                  {b.label}
                </span>
                <span
                  className="font-bold"
                  style={{
                    position: "absolute",
                    right: cqm(14), // 585-518-... kira
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: cqm(16),
                    lineHeight: 1.25,
                    color: b.color,
                  }}
                >
                  {val}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const MENU = [
  { label: "Bantuan", icon: "help" },
  { label: "Hapus Akun", icon: "trash" },
  { label: "Log Out", icon: "logout" },
];

type ConfirmKind = "logout" | "delete" | null;

function Settings() {
  const { logout, deleteAccount } = useAuth();
  const [confirm, setConfirm] = useState<ConfirmKind>(null);

  const handleClick = (label: string) => {
    if (label === "Log Out") setConfirm("logout");
    else if (label === "Hapus Akun") setConfirm("delete");
  };

  return (
    <>
      <section className="w-full md:w-[43.0556cqw] md:shrink-0">
      <h2
        className="font-bold"
        style={{ fontSize: cqm(32), lineHeight: 1.25, color: "#2a235c" }}
      >
        Lainnya
      </h2>
      <div
        className="relative"
        style={{
          marginTop: cqm(25),
          width: "100%",
          height: cqm(306), // 3 baris: 30 + 3×92 = 306 (baris 3 tdk terpotong)
          borderRadius: cqm(30),
          backgroundColor: "#f5eafb",
          border: `${cqm(2)} solid rgba(132, 121, 138, 0.55)`, // #84798a
        }}
      >
        {MENU.map((m, i) => {
          const y = [30, 122, 214][i]; // 1098/1190/1282 - 1068
          return (
            <div
              key={m.label}
              onClick={() => handleClick(m.label)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClick(m.label);
              }}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: cqm(y),
                height: cqm(92), // tinggi baris menu (jarak antar baris 92px)
                cursor: m.label === "Log Out" ? "pointer" : "default",
              }}
            >
              {/* circle ikon — center vertikal sejajar label & chevron */}
              <div
                style={{
                  position: "absolute",
                  left: cqm(24), // 755-731
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: cqm(40),
                  height: cqm(40),
                  borderRadius: "50%",
                  backgroundColor: "#84798a",
                }}
              >
                {m.icon === "help" && (
                  <span
                    className="font-bold"
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: cqm(20),
                      color: "#2a235c",
                    }}
                  >
                    ?
                  </span>
                )}
                {m.icon === "trash" && <TrashIcon />}
                {m.icon === "logout" && <LogoutIcon />}
              </div>
              {/* label */}
              <span
                className="font-bold"
                style={{
                  position: "absolute",
                  left: cqm(81), // 812-731
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: cqm(24),
                  lineHeight: 1.25,
                  color: "#2a235c",
                  whiteSpace: "nowrap",
                }}
              >
                {m.label}
              </span>
              {/* chevron */}
              <span
                className="font-bold"
                style={{
                  position: "absolute",
                  right: cqm(60), // 1351-1268-...
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: cqm(30),
                  color: "#1c1451",
                }}
              >
                &lt;
              </span>
              {/* separator — di DASAR container (92) = tepat di tengah antara
                  konten baris ini & baris berikutnya, sehingga tiap baris
                  benar-benar center (sebelumnya di 65 → konten nempel garis). */}
              {i < 2 && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: cqm(92),
                    height: cqm(2),
                    backgroundColor: "rgba(132,121,138,0.5)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      </section>

      {confirm === "logout" && (
        <ConfirmPopup
          title="Log Out"
          message="Anda yakin ingin keluar dari akun anda?"
          confirmLabel="Konfirmasi"
          onConfirm={async () => {
            setConfirm(null);
            // 1. Hapus sesi Auth.js (cookie) — kalau login via Google/credentials.
            // 2. AuthBridge akan melihat sesi hilang → store mock ikut logout.
            await signOut({ redirect: false }).catch(() => {});
            // 3. Bersihkan store mock (localStorage) langsung.
            logout();
            // 4. Balik ke beranda.
            window.location.href = "/";
          }}
          onClose={() => setConfirm(null)}
        />
      )}
      {confirm === "delete" && (
        <ConfirmPopup
          title="Hapus Akun"
          message="Anda yakin ingin menghapus akun anda? Seluruh data (riwayat, diagnostik, leaderboard) akan dihapus permanen."
          confirmLabel="Konfirmasi"
          onConfirm={async () => {
            setConfirm(null);
            // Tandai akun sedang dihapus → AuthBridge tidak akan auto-login
            // dari sesi lama yang masih sempat terbaca sebelum cookie hilang.
            const em = (() => {
              try { return JSON.parse(localStorage.getItem("siapin.user") || "null")?.email || ""; } catch { return ""; }
            })();
            if (em) {
              try { sessionStorage.setItem("siapin.deleting", em); } catch { /* ignore */ }
            }
            // 1. Hapus SESI Auth.js (cookie) DULU — supaya AuthBridge tidak
            //    login-ulang & sync tidak menciptakan ulang user setelah dihapus.
            await signOut({ redirect: false }).catch(() => {});
            // 2. Hapus user dari DATABASE (semua data terkait ikut cascade)
            //    + bersihkan store mock (localStorage).
            await deleteAccount();
            // 3. Hapus penanda (sesi sudah bersih; tab ini boleh login lagi).
            try { sessionStorage.removeItem("siapin.deleting"); } catch { /* ignore */ }
            // 4. Balik ke beranda.
            window.location.href = "/";
          }}
          onClose={() => setConfirm(null)}
        />
      )}
    </>
  );
}

function TrashIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      style={{
        position: "absolute",
        inset: 0,
        margin: "auto",
        width: cqm(18),
        height: cqm(18),
      }}
      fill="none"
      stroke="#1c1451"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 5h14M7 2h4l1 3H6l1-3zM4 5l1 11h8l1-11" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg
      viewBox="0 0 18 17"
      style={{
        position: "absolute",
        inset: 0,
        margin: "auto",
        width: cqm(18),
        height: cqm(17),
      }}
      fill="none"
      stroke="#1c1451"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 2H3v13h8M7 8.5h8M11.5 5.5 14.5 8.5l-3 3" />
    </svg>
  );
}

export function AiAndSettings() {
  return (
    <div className="flex w-full flex-col md:flex-row" style={{ gap: cqm(78) }}>
      <AiDiagnostic />
      <Settings />
    </div>
  );
}
