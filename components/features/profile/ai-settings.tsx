"use client";

import { cqm } from "@/lib/cq";

const PROGRESS_BARS = [
  { label: "TKA SMP", value: "-", barBg: "#cfedc0", border: "#688d37", color: "#688d37" },
  { label: "TKA SMA", value: "-", barBg: "#c9cef4", border: "#5858b8", color: "#5858b8" },
  { label: "SNBT", value: "-", barBg: "#e3aec2", border: "#df5b97", color: "#df5b97" },
];

function AiDiagnostic() {
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
          {PROGRESS_BARS.map((b) => (
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
                {b.value}
              </span>
            </div>
          ))}
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

function Settings() {
  return (
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
          height: cqm(284),
          borderRadius: cqm(30),
          backgroundColor: "#f5eafb",
          border: `${cqm(2)} solid rgba(132, 121, 138, 0.55)`, // #84798a
        }}
      >
        {MENU.map((m, i) => {
          const y = [30, 122, 214][i]; // 1098/1190/1282 - 1068
          return (
            <div key={m.label} style={{ position: "absolute", left: 0, right: 0, top: cqm(y) }}>
              {/* circle ikon */}
              <div
                style={{
                  position: "absolute",
                  left: cqm(24), // 755-731
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
              {/* separator */}
              {i < 2 && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: cqm(65), // 1163-1098 = 65 setelah baris 1
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
