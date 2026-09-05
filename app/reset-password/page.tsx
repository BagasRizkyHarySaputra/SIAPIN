"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function ResetContent() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token") ?? "";
  const email = params.get("email") ?? "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token || !email) {
      setState("error");
      setMessage("Tautan reset tidak lengkap.");
    }
  }, [token, email]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 6) {
      setState("error");
      setMessage("Password minimal 6 karakter.");
      return;
    }
    if (password !== confirm) {
      setState("error");
      setMessage("Konfirmasi password tidak cocok.");
      return;
    }
    setState("loading");
    setMessage("");
    const r = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, email, password }),
    });
    const j = await r.json();
    if (r.ok) {
      setState("ok");
      setMessage("Password berhasil diubah. Silakan login dengan password baru.");
    } else {
      setState("error");
      setMessage(j?.error ?? "Gagal mengubah password.");
    }
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f0ff", padding: 24 }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", maxWidth: 420, width: "100%", boxShadow: "0 10px 30px rgba(75,10,149,0.12)" }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>{state === "ok" ? "✅" : "🔑"}</div>
        <h1 style={{ margin: "0 0 4px", fontSize: 20, color: "#1a1a2e" }}>Atur Ulang Password</h1>
        <p style={{ color: "#777", fontSize: 13, margin: "0 0 20px" }}>
          {email ? `untuk ${email}` : "Buat password baru untuk akunmu"}
        </p>

        {state === "ok" ? (
          <button
            onClick={() => router.push("/profile")}
            style={{ width: "100%", background: "#4b0a95", color: "#fff", border: "none", padding: "12px", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}
          >
            Ke Halaman Login
          </button>
        ) : (
          <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
            <input
              type="password"
              placeholder="Password baru (min. 6 karakter)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: 12, borderRadius: 10, border: "1px solid #ddd", fontSize: 14 }}
            />
            <input
              type="password"
              placeholder="Ulangi password baru"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              style={{ padding: 12, borderRadius: 10, border: "1px solid #ddd", fontSize: 14 }}
            />
            {message && (
              <p style={{ color: state === "error" ? "#d33" : "#188038", fontSize: 13, margin: 0 }}>
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={state === "loading"}
              style={{ background: "#4b0a95", color: "#fff", border: "none", padding: "12px", borderRadius: 10, fontWeight: 700, cursor: "pointer", opacity: state === "loading" ? 0.6 : 1 }}
            >
              {state === "loading" ? "Menyimpan..." : "Simpan Password Baru"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Memuat...</div>}>
      <ResetContent />
    </Suspense>
  );
}
