"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { AccountCard } from "@/components/features/profile/account-card";
import { StatCards } from "@/components/features/profile/stat-cards";
import { Achievement } from "@/components/features/profile/achievement";
import { AiAndSettings } from "@/components/features/profile/ai-settings";
import { AuthPopup } from "@/components/features/profile/auth-popup";
import { EditProfilePopup } from "@/components/features/profile/edit-profile-popup";
import { useAuth } from "@/lib/store/auth";
import { cqm } from "@/lib/cq";

export default function ProfilePage() {
  const [authOpen, setAuthOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const { user, refreshStats } = useAuth();

  // Setiap /profile dibuka, pastikan statistik (streak/total soal/akurasi/
  // progress AI Diagnostic) selalu dari DB — termasuk setelah mengerjakan soal.
  useEffect(() => {
    if (user?.email) refreshStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className="flex min-h-screen w-full flex-col bg-[#dbe9ea]"
      style={{ minHeight: "100dvh", overflowX: "clip" }}
    >
      <Navbar />

      {/* white sheet (Rectangle 159) — mulai y196; padding kiri 74 (konten desain x73/74)
          flex-col: blok2 tersusun rapat dari atas mengikuti alur normal (tanpa mt-auto),
          sehingga saat viewport tinggi pun konten tetap rapat — tidak menempel ke dasar. */}
      <div
        className="profile-scope relative mx-auto flex w-full flex-1 flex-col bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
          paddingInline: cqm(46),
          paddingTop: cqm(75), // account y271 - sheet y196
          paddingBottom: cqm(83), // sisa putih ke bawah sheet (render PNG terpotong 1435)
        }}
      >
        {/* account card (Rectangle 76) */}
        <AccountCard
          onLoginClick={() => setAuthOpen(true)}
          onEditClick={() => setEditOpen(true)}
        />

        {/* 3 stat cards: y473 - (271+170) = 32 */}
        <div style={{ marginTop: cqm(32) }}>
          <StatCards />
        </div>

        {/* achievement title: y675 - (473+170) = 32 */}
        <div style={{ marginTop: cqm(32) }}>
          <Achievement />
        </div>

        {/* AI Diagnostic + Lainnya: title y1003 - (740+231) = 32
            Tanpa mt-auto — konten rapat dari atas (lihat komentar sheet). */}
        <div style={{ paddingTop: cqm(32) }}>
          <AiAndSettings />
        </div>
      </div>

      {/* popup login / register */}
      {authOpen && <AuthPopup onClose={() => setAuthOpen(false)} />}

      {/* popup edit profile (saat sudah login) */}
      {editOpen && <EditProfilePopup onClose={() => setEditOpen(false)} />}
    </main>
  );
}
