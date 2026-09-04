"use client";

import { useEffect, useState } from "react";
import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";

function EyeIcon({ off }: { off: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: cqm(24), height: cqm(24) }}
      fill="none"
      stroke="#8a8494"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {off ? (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.6 5.1A9.8 9.8 0 0 1 12 5c7 0 10 7 10 7a17 17 0 0 1-2.9 3.6M6.6 6.6C3.6 8.2 2 12 2 12s3 7 10 7c1.5 0 2.9-.3 4.1-.8" />
          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </>
      ) : (
        <>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: cqm(70),
  borderRadius: cqm(16),
  border: `${cqm(2)} solid #6c6363`,
  paddingInline: cqm(28),
  fontSize: cqm(20),
  color: "#2a235c",
  backgroundColor: "#ffffff",
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

function NameField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="text"
      required
      placeholder="Nama Lengkap"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="auth-input"
      style={inputStyle}
    />
  );
}

function EmailField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <input
      type="email"
      required
      placeholder="Masukkan Email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="auth-input"
      style={inputStyle}
    />
  );
}

function PasswordField({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type={show ? "text" : "password"}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="auth-input"
        style={{ ...inputStyle, paddingRight: cqm(64) }}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        aria-label={show ? "Sembunyikan password" : "Tampilkan password"}
        className="cursor-pointer"
        style={{
          position: "absolute",
          right: cqm(16),
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          padding: cqm(4),
          display: "flex",
        }}
      >
        <EyeIcon off={!show} />
      </button>
    </div>
  );
}

function CloseButton({ bg, onClose }: { bg: string; onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Tutup"
      className="cursor-pointer transition hover:brightness-[0.94]"
      style={{
        position: "absolute",
        right: cqm(36),
        top: cqm(32),
        width: cqm(52),
        height: cqm(52),
        borderRadius: "50%",
        backgroundColor: bg,
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        style={{ width: cqm(22), height: cqm(22) }}
        fill="none"
        stroke="#ffffff"
        strokeWidth={2.5}
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M5 5l14 14M19 5L5 19" />
      </svg>
    </button>
  );
}

/** Format tanggal Indonesia, mis. "17 Agustus 2025". */
function formatJoinedAt(d: Date): string {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function AuthPopup({ onClose }: { onClose: () => void }) {
  const { login, register, accounts } = useAuth();
  const [view, setView] = useState<"login" | "register">("login");
  const [error, setError] = useState<string | null>(null);

  // login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  // register state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfirm, setRegConfirm] = useState("");

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = loginEmail.trim().toLowerCase();
    const found = accounts.find((a) => a.email.toLowerCase() === email);
    if (!found) {
      setError("Email belum terdaftar. Silakan daftar dulu.");
      return;
    }
    if (found.password && found.password !== loginPass) {
      setError("Password salah. Coba lagi.");
      return;
    }
    // login akun yang sudah terdaftar (termasuk akun demo contoh@gmail.com)
    login({
      name: found.name,
      email: found.email,
      phone: found.phone,
      avatar: found.avatar,
      mode: "snbt",
      joinedAt: found.joinedAt ?? formatJoinedAt(new Date()),
    });
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (regPass !== regConfirm) {
      setError("Konfirmasi password tidak cocok.");
      return;
    }
    const name = regName.trim();
    const email = regEmail.trim().toLowerCase();
    if (!name || !email) return;
    // cegah daftar dengan email yang sudah ada di DB (termasuk akun demo)
    if (accounts.some((a) => a.email.toLowerCase() === email)) {
      setError("Email sudah terdaftar. Silakan login.");
      return;
    }
    const acc = {
      name,
      email,
      password: regPass,
      joinedAt: formatJoinedAt(new Date()),
    };
    register(acc);
    login({ name: acc.name, email: acc.email, mode: "snbt", joinedAt: acc.joinedAt });
    onClose();
  };

  const switchTo = (v: "login" | "register") => {
    setError(null);
    setView(v);
  };

  return (
    <div
      className="soal-popup-backdrop auth-scope"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: cqm(24),
      }}
    >
      {/* sizer statis (animasi masuk + batas scroll) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={view === "login" ? "Login" : "Buat akun"}
        className="soal-popup-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "calc(100vw - 48px)",
          maxWidth: cqm(593),
          maxHeight: "90dvh",
          overflowY: "auto",
        }}
      >
        <div style={{ perspective: "1400px" }}>
          {/* kartu putih — INI yang nge-flip */}
          <div
            className={`auth-flip-inner${view === "register" ? " flipped" : ""}`}
            style={{
              position: "relative",
              backgroundColor: "#ffffff",
              borderRadius: cqm(40),
              border: `${cqm(2)} solid #d9d9d9`,
              boxShadow: "0 24px 80px rgba(28, 20, 81, 0.25)",
            }}
          >
            {/* ===== DEPAN: login ===== */}
            <div
              className="auth-face"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingTop: cqm(80),
                paddingBottom: cqm(64),
                paddingInline: cqm(70),
              }}
            >
              <CloseButton bg="#dfe3ff" onClose={onClose} />
              <h2
                className="font-bold"
                style={{
                  fontSize: cqm(30),
                  color: "#454545",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                SIAPIN
              </h2>
              <form
                onSubmit={handleLogin}
                className="flex w-full flex-col"
                style={{ gap: cqm(20), marginTop: cqm(22) }}
              >
                <EmailField value={loginEmail} onChange={setLoginEmail} />
                <PasswordField
                  placeholder="Masukkan Password"
                  value={loginPass}
                  onChange={setLoginPass}
                />
                {error && (
                  <p
                    className="font-medium"
                    style={{
                      fontSize: cqm(15),
                      color: "#ef5b7e",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="cursor-pointer font-bold transition hover:brightness-[0.97]"
                  style={{
                    width: "100%",
                    height: cqm(70),
                    borderRadius: cqm(35),
                    backgroundColor: "#e4e7ff",
                    border: `${cqm(2)} solid #5858b8`,
                    color: "#5858b8",
                    fontSize: cqm(24),
                    fontFamily: "inherit",
                  }}
                >
                  Masuk
                </button>
              </form>
              <button
                type="button"
                onClick={() => switchTo("register")}
                className="cursor-pointer"
                style={{
                  background: "none",
                  border: "none",
                  marginTop: cqm(24),
                  fontSize: cqm(16),
                  color: "#efa3b5",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontFamily: "inherit",
                  alignSelf: "center",
                }}
              >
                Belum punya akun? Buat akun
              </button>
            </div>

            {/* ===== BELAKANG: register ===== */}
            <div
              className="auth-face auth-face-back"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                paddingTop: cqm(80),
                paddingBottom: cqm(64),
                paddingInline: cqm(70),
              }}
            >
              <CloseButton bg="#f6d5d5" onClose={onClose} />
              <h2
                className="font-bold"
                style={{
                  fontSize: cqm(30),
                  color: "#454545",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                SIAPIN
              </h2>
              <form
                onSubmit={handleRegister}
                className="flex w-full flex-col"
                style={{ gap: cqm(20), marginTop: cqm(22) }}
              >
                <NameField value={regName} onChange={setRegName} />
                <EmailField value={regEmail} onChange={setRegEmail} />
                <PasswordField
                  placeholder="Buat Password"
                  value={regPass}
                  onChange={setRegPass}
                />
                <PasswordField
                  placeholder="Konfirmasi Password"
                  value={regConfirm}
                  onChange={setRegConfirm}
                />
                {error && (
                  <p
                    className="font-medium"
                    style={{
                      fontSize: cqm(15),
                      color: "#ef5b7e",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="cursor-pointer font-bold transition hover:brightness-[0.97]"
                  style={{
                    width: "100%",
                    height: cqm(70),
                    borderRadius: cqm(35),
                    backgroundColor: "#fbe3e6",
                    border: `${cqm(2)} solid #e3aec2`,
                    color: "#ef5b7e",
                    fontSize: cqm(24),
                    fontFamily: "inherit",
                  }}
                >
                  Buat Akun
                </button>
              </form>
              <button
                type="button"
                onClick={() => switchTo("login")}
                className="cursor-pointer"
                style={{
                  background: "none",
                  border: "none",
                  marginTop: cqm(24),
                  fontSize: cqm(16),
                  color: "#8b87e6",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontFamily: "inherit",
                  alignSelf: "center",
                }}
              >
                Sudah punya akun?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
