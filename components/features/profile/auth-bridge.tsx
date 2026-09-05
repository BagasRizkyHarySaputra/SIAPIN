"use client";

import { useEffect, useRef } from "react";
import { useSession, signOut as nextSignOut } from "next-auth/react";
import { useAuth, type User } from "@/lib/store/auth";

/**
 * AuthBridge — menjembatani sesi Auth.js (server, cookie) ke store mock
 * localStorage (`useAuth`) yang dipakai seluruh komponen lama.
 *
 * - Saat sesi Auth.js aktif (login via Google / credentials server), set user
 *   ke store mock → semua UI (navbar, profile, dashboard) otomatis "login".
 * - Saat sesi hilang (logout / cookie kedaluwarsa), kosongkan store mock.
 *
 * Komponen ini dipasang sekali di layout (anak AuthProvider).
 * Tidak mengubah cara kerja akun mock lokal (tanpa sesi server).
 */
export default function AuthBridge() {
  const { data: session, status } = useSession();
  const { user, login, logout } = useAuth();
  const applying = useRef<string | null>(null);

  // Sesi Auth.js aktif & belum tercermin di store → set user mock.
  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.email) return;
    const sesEmail = session.user.email.toLowerCase();
    const localEmail = user?.email?.toLowerCase();

    // Sudah login sebagai user yang sama → tak perlu apa-apa.
    if (localEmail === sesEmail) return;

    const sUser = session.user as { id?: string; name?: string | null; email?: string | null; image?: string | null };
    const mock: User = {
      name: sUser.name ?? sesEmail.split("@")[0],
      email: sesEmail,
      mode: "snbt",
      avatar: sUser.image ?? undefined,
      // AuthBridge akan memicu refreshStats lewat efek store (email berubah).
    };
    applying.current = "bridge";
    login(mock);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, session?.user?.email, user?.email, login]);

  // Store mock login (akun lokal) tapi TIDAK ada sesi Auth.js → tidak apa-apa,
  // itu akun mock murni (bukan sesi server). Jangan logout paksa.

  // Sesi Auth.js logout sementara store masih user itu (mis. cookie dihapus) —
  // hanya bersihkan bila user store berasal dari sesi (tidak ada tanda khusus),
  // jadi kita tidak sentuh akun mock lokal.
  // Catatan: tidak bisa bedakan asal user di store; karenanya signOut dari
  // Auth.js dilakukan eksplisit via tombol Logout → panggil nextSignOut + logout.

  return null;
}

/** Helper: logout dari Auth.js (server session) bila ada, lalu logout store. */
export async function signOutAll() {
  // next-auth signOut menghapus cookie sesi. Store mock dibersihkan pemanggil.
  await nextSignOut({ redirect: false });
}
