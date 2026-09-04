"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { SoalBoard } from "@/components/features/soal/soal-board";
import { LoginGate } from "@/components/features/dashboard/login-gate";
import { modeBySlug } from "@/lib/data/modes";
import { cq, cqm } from "@/lib/cq";

/** Halaman soal per mode — dibuka dari card SNBT/TKA SMA/TKA SMP di dashboard. */
export default function SoalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const mode = modeBySlug(slug);
  if (!mode) notFound();

  return (
    <LoginGate>
      <main
        className="flex min-h-screen w-full flex-col bg-[#dbe9ea]"
        style={{ minHeight: "100dvh" }}
      >
        <Navbar />

        {/* white sheet — full sampai bawah layar */}
        <div
          className="soal-scope relative mx-auto flex w-full flex-1 flex-col bg-white"
          style={{
            borderTopLeftRadius: cqm(70),
            borderTopRightRadius: cqm(70),
            paddingInline: cq(74),
            paddingTop: cqm(72),
            paddingBottom: cqm(76),
          }}
        >
          <SoalBoard mode={mode} />
        </div>
      </main>
    </LoginGate>
  );
}
