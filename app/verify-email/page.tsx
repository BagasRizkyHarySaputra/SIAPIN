"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function VerifyContent() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token") ?? "";
  const email = params.get("email") ?? "";
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");
  const [message, setMessage] = useState("Memverifikasi email kamu...");

  useEffect(() => {
    if (!token || !email) {
      setState("error");
      setMessage("Tautan verifikasi tidak lengkap.");
      return;
    }
    fetch(`/api/auth/verify-email?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`)
      .then(async (r) => {
        const j = await r.json();
        if (r.ok) {
          setState("ok");
          setMessage("Email kamu berhasil diverifikasi! Silakan login.");
        } else {
          setState("error");
          setMessage(j?.error ?? "Verifikasi gagal.");
        }
      })
      .catch(() => {
        setState("error");
        setMessage("Terjadi kesalahan jaringan.");
      });
  }, [token, email]);

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f0ff", padding: 24 }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: "32px 28px", maxWidth: 420, width: "100%", textAlign: "center", boxShadow: "0 10px 30px rgba(75,10,149,0.12)" }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>
          {state === "loading" ? "⏳" : state === "ok" ? "✅" : "⚠️"}
        </div>
        <h1 style={{ margin: "0 0 8px", fontSize: 20, color: "#1a1a2e" }}>
          {state === "loading" ? "Memverifikasi..." : state === "ok" ? "Berhasil!" : "Verifikasi Gagal"}
        </h1>
        <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6, margin: "0 0 20px" }}>{message}</p>
        {state !== "loading" && (
          <button
            onClick={() => router.push("/profile")}
            style={{ background: "#4b0a95", color: "#fff", border: "none", padding: "12px 24px", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}
          >
            Ke Halaman Login
          </button>
        )}
      </div>
    </main>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Memuat...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
