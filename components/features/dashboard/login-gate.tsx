"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/store/auth";
import { AuthPopup } from "@/components/features/profile/auth-popup";

/**
 * LoginGate — membungkus halaman yang WAJIB login (/dashboard, /soal/*).
 *
 * Saat user belum login, popup login mode "required" tampil (tidak bisa
 * ditutup sampai berhasil login).
 *
 * Prop `showContentWhileLocked`:
 *  - true  (dipakai /dashboard): konten halaman TETAP dirender di belakang
 *    popup, sehingga setelah login TIDAK perlu render ulang dari nol — hemat
 *    biaya render/fetch & transisi terasa instan.
 *  - false (default, /soal/*): konten disembunyikan selama belum login —
 *    konten latihan (paket/soal) tetap terkunci dari pengunjung anonim.
 */
export function LoginGate({
  children,
  showContentWhileLocked = false,
}: {
  children: React.ReactNode;
  showContentWhileLocked?: boolean;
}) {
  const { user } = useAuth();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Hindari flash sebelum hydration selesai — konten & popup sama-sama
  // ditentukan setelah hydrated agar state user final sudah diketahui.
  if (!hydrated) return null;

  if (user) return <>{children}</>;

  // Belum login.
  return (
    <>
      {showContentWhileLocked ? children : null}
      <AuthPopup required onClose={() => {}} />
    </>
  );
}
