"use client";

import { useEffect, useState } from "react";
import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";
import { signIn } from "next-auth/react";

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

export function AuthPopup({
  onClose,
  required = false,
}: {
  onClose: () => void;
  /** Mode "gate": popup tidak bisa ditutup (dipakai halaman yang wajib login). */
  required?: boolean;
}) {
  const { login, register, accounts } = useAuth();
  const [view, setView] = useState<"login" | "register" | "forgot">("login");
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [googleOn, setGoogleOn] = useState(false);

  // login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  // register state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  // forgot state
  const [fpEmail, setFpEmail] = useState("");
  const [fpDone, setFpDone] = useState<string | null>(null);

  // Cek apakah Google OAuth dikonfigurasi (server) — tampilkan tombol bila ya.
  useEffect(() => {
    fetch("/api/auth/config")
      .then((r) => r.json())
      .then((j) => setGoogleOn(Boolean(j?.data?.googleEnabled)))
      .catch(() => setGoogleOn(false));
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !required) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, required]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const email = loginEmail.trim().toLowerCase();
    const found = accounts.find((a) => a.email.toLowerCase() === email);

    // 1) Akun lokal (mock) → login langsung seperti biasa.
    if (found && (!found.password || found.password === loginPass)) {
      login({
        name: found.name,
        email: found.email,
        phone: found.phone,
        avatar: found.avatar,
        mode: "snbt",
        joinedAt: found.joinedAt ?? formatJoinedAt(new Date()),
      });
      syncToDb({
        name: found.name,
        email: found.email,
        phone: found.phone,
        avatar: found.avatar,
      });
      onClose();
      return;
    }

    // 2) Bukan akun lokal / password salah → coba Auth.js credentials
    //    (user server yang email-nya sudah diverifikasi, mis. contoh@gmail.com).
    setBusy(true);
    try {
      const res = await signIn("credentials", {
        email,
        password: loginPass,
        redirect: false,
      });
      if (res?.error) {
        // signIn error "CredentialsSignin" → email/password salah di server.
        setError(
          found
            ? "Password salah. Coba lagi."
            : "Email belum terdaftar atau password salah."
        );
        return;
      }
      // Sukses: sesi server terbentuk. AuthBridge akan menyamakan store.
      // Ambil nama dari server via sesi (fallback: input).
      const name = found?.name ?? email.split("@")[0];
      login({
        name,
        email,
        mode: "snbt",
        joinedAt: found?.joinedAt ?? formatJoinedAt(new Date()),
      });
      syncToDb({ name, email });
      onClose();
    } catch {
      setError("Gagal terhubung ke server. Coba lagi.");
    } finally {
      setBusy(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    if (regPass !== regConfirm) {
      setError("Konfirmasi password tidak cocok.");
      return;
    }
    const name = regName.trim();
    const email = regEmail.trim().toLowerCase();
    if (!name || !email) return;

    // Akun demo/lokal lama tetap daftar via mock (tanpa email verifikasi).
    const isSeed = [
      "contoh@gmail.com",
    ].includes(email);
    if (accounts.some((a) => a.email.toLowerCase() === email) || isSeed) {
      setError("Email sudah terdaftar. Silakan login.");
      return;
    }

    setBusy(true);
    try {
      const r = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password: regPass }),
      });
      const j = await r.json();
      if (!r.ok) {
        setError(j?.error ?? "Gagal mendaftar. Coba lagi.");
        return;
      }
      // Registrasi server → TIDAK auto-login; tunggu verifikasi email.
      const simUrl = j?.data?.simUrl as string | undefined;
      setView("login");
      setLoginEmail(email);
      setNotice(
        simUrl
          ? "Akun dibuat! Buka link verifikasi (mode simulasi) lalu login:"
          : "Akun dibuat! Cek email kamu untuk link verifikasi, lalu login."
      );
      if (simUrl) setFpDone(simUrl); // reuse state utk tampilkan link
    } catch {
      setError("Gagal terhubung ke server. Coba lagi.");
    } finally {
      setBusy(false);
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    const email = fpEmail.trim().toLowerCase();
    if (!email) return;
    setBusy(true);
    try {
      const r = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const j = await r.json();
      if (!r.ok) {
        setError(j?.error ?? "Gagal memproses. Coba lagi.");
        return;
      }
      const simUrl = j?.data?.simUrl as string | undefined;
      if (simUrl) {
        setFpDone(simUrl);
      } else {
        setFpDone("sent");
      }
    } catch {
      setError("Gagal terhubung ke server. Coba lagi.");
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    try {
      await signIn("google", { callbackUrl: window.location.pathname });
    } catch {
      setError("Google login gagal / belum dikonfigurasi.");
    }
  };

  const switchTo = (v: "login" | "register" | "forgot") => {
    setError(null);
    setNotice(null);
    setFpDone(null);
    setView(v);
  };

  /** Sinkronkan user mock (localStorage) ke DB Prisma via API — fire & forget. */
  function syncToDb(u: {
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
  }) {
    try {
      fetch("/api/user/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: u.email,
          name: u.name,
          phone: u.phone,
          avatar: u.avatar,
        }),
      }).catch(() => {
        /* non-blokir */
      });
    } catch {
      /* non-blokir */
    }
  }

  return (
    <div
      className="soal-popup-backdrop auth-scope"
      onClick={required ? undefined : onClose}
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
              {!required && <CloseButton bg="#dfe3ff" onClose={onClose} />}
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
              {notice && (
                <p
                  className="font-medium"
                  style={{
                    fontSize: cqm(14),
                    color: "#188038",
                    textAlign: "center",
                    margin: `${cqm(14)} 0 0`,
                    lineHeight: 1.5,
                    wordBreak: "break-word",
                  }}
                >
                  {notice}
                  {fpDone && fpDone !== "sent" && (
                    <a
                      href={fpDone}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "block", color: "#4b0a95", fontWeight: 700, marginTop: cqm(6) }}
                    >
                      Buka link verifikasi ↗
                    </a>
                  )}
                </p>
              )}
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
                  disabled={busy}
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
                    opacity: busy ? 0.6 : 1,
                  }}
                >
                  {busy ? "Memproses..." : "Masuk"}
                </button>
              </form>

              {/* Lupa password */}
              <button
                type="button"
                onClick={() => switchTo("forgot")}
                className="cursor-pointer"
                style={{
                  background: "none",
                  border: "none",
                  marginTop: cqm(14),
                  fontSize: cqm(15),
                  color: "#8b87e6",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  fontFamily: "inherit",
                  alignSelf: "center",
                }}
              >
                Lupa password?
              </button>

              {/* Google OAuth (hanya bila dikonfigurasi) */}
              {googleOn && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: cqm(12),
                      marginTop: cqm(14),
                    }}
                  >
                    <span style={{ flex: 1, height: cqm(1), background: "#ddd" }} />
                    <span style={{ fontSize: cqm(13), color: "#999" }}>atau</span>
                    <span style={{ flex: 1, height: cqm(1), background: "#ddd" }} />
                  </div>
                  <button
                    type="button"
                    onClick={handleGoogle}
                    className="cursor-pointer font-medium transition hover:brightness-[0.97]"
                    style={{
                      width: "100%",
                      height: cqm(60),
                      borderRadius: cqm(30),
                      backgroundColor: "#ffffff",
                      border: `${cqm(2)} solid #dadce0`,
                      color: "#3c4043",
                      fontSize: cqm(17),
                      fontFamily: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: cqm(10),
                      marginTop: cqm(14),
                    }}
                  >
                    <svg viewBox="0 0 48 48" style={{ width: cqm(22), height: cqm(22) }} aria-hidden>
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                    </svg>
                    Lanjut dengan Google
                  </button>
                </>
              )}

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
              {!required && <CloseButton bg="#f6d5d5" onClose={onClose} />}
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

            {/* ===== FORGOT PASSWORD (overlay di atas face login, view=forgot) ===== */}
            {view === "forgot" && (
              <div
                className="auth-face"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingTop: cqm(80),
                  paddingBottom: cqm(64),
                  paddingInline: cqm(70),
                  borderRadius: cqm(40),
                  backgroundColor: "#ffffff",
                }}
              >
                {!required && <CloseButton bg="#dfe3ff" onClose={onClose} />}
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
                <p
                  className="font-medium"
                  style={{
                    fontSize: cqm(16),
                    color: "#8b87e6",
                    textAlign: "center",
                    margin: `${cqm(4)} 0 0`,
                  }}
                >
                  Atur Ulang Password
                </p>
                <p
                  style={{
                    fontSize: cqm(14),
                    color: "#777",
                    textAlign: "center",
                    margin: `${cqm(10)} 0 0`,
                    lineHeight: 1.5,
                  }}
                >
                  Masukkan email akunmu. Kami akan kirim link untuk membuat
                  password baru.
                </p>
                <form
                  onSubmit={handleForgot}
                  className="flex w-full flex-col"
                  style={{ gap: cqm(20), marginTop: cqm(22) }}
                >
                  <EmailField value={fpEmail} onChange={setFpEmail} />
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
                  {fpDone && (
                    <p
                      className="font-medium"
                      style={{
                        fontSize: cqm(14),
                        color: "#188038",
                        textAlign: "center",
                        margin: 0,
                        lineHeight: 1.5,
                        wordBreak: "break-word",
                      }}
                    >
                      {fpDone === "sent"
                        ? "Kalau email terdaftar, link reset sudah dikirim ke email kamu."
                        : "Link reset (mode simulasi) — buka untuk ganti password:"}
                      {fpDone !== "sent" && (
                        <a
                          href={fpDone}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: "block",
                            color: "#4b0a95",
                            fontWeight: 700,
                            marginTop: cqm(6),
                          }}
                        >
                          Buka link reset ↗
                        </a>
                      )}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={busy}
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
                      opacity: busy ? 0.6 : 1,
                    }}
                  >
                    {busy ? "Memproses..." : "Kirim Link Reset"}
                  </button>
                </form>
                <button
                  type="button"
                  onClick={() => switchTo("login")}
                  className="cursor-pointer"
                  style={{
                    background: "none",
                    border: "none",
                    marginTop: cqm(18),
                    fontSize: cqm(15),
                    color: "#8b87e6",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    fontFamily: "inherit",
                    alignSelf: "center",
                  }}
                >
                  ← Kembali ke Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
