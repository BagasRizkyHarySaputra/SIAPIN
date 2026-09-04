"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { DrillBoard } from "@/components/features/soal/drill-board";
import { LoginGate } from "@/components/features/dashboard/login-gate";
import { modeBySlug } from "@/lib/data/modes";
import { cq, cqm } from "@/lib/cq";

/** Halaman pengerjaan soal: /soal/[slug]/pengerjaan/[subtes]/[paket]/[tipe].
 *  paket 1–8, tipe drilling|ujian. Layout 1:1 Figma (client component). */
export default function PengerjaanPage({
  params,
}: {
  params: Promise<{ slug: string; subtes: string; paket: string; tipe: string }>;
}) {
  const { slug, subtes, paket, tipe } = use(params);
  const mode = modeBySlug(slug);
  const paketNo = Number(paket);
  const subtesValid =
    !!mode && mode.subtests.some((s) => s.slug === subtes);
  if (
    !mode ||
    !subtesValid ||
    !Number.isInteger(paketNo) ||
    paketNo < 1 ||
    paketNo > 8 ||
    (tipe !== "drilling" && tipe !== "ujian")
  ) {
    notFound();
  }

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
          <DrillBoard
            modeSlug={slug}
            subtesSlug={subtes}
            paket={paketNo}
            tipe={tipe as "drilling" | "ujian"}
          />
        </div>
      </main>
    </LoginGate>
  );
}
