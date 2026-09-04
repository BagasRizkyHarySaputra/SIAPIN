"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/store/auth";
import { AuthPopup } from "@/components/features/profile/auth-popup";

/**
 * LoginGate — membungkus halaman yang WAJIB login (/dashboard, /soal/*).
 * Selama user belum login, children TIDAK dirender (hindari fetch API tanpa
 * auth & render konten mahal) dan popup login mode "required" ditampilkan —
 * tidak bisa ditutup sampai berhasil login. Layout halaman tidak diubah.
 */
export function LoginGate({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Hindari flash sebelum hydration selesai.
  if (!hydrated) return null;

  if (!user) {
    return (
      <>
        {/* Navbar tetap tampil agar ada jalan keluar ke halaman publik */}
        <AuthPopup required onClose={() => {}} />
      </>
    );
  }

  return <>{children}</>;
}
