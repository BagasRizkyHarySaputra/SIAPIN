"use client";

import Link from "next/link";
import { cqm } from "@/lib/cq";

export function PilihPtn() {
  return (
    <section className="w-full">
      <div
        className="relative flex w-full flex-col gap-[calc(2.7778cqw*var(--pm,1))] overflow-hidden rounded-[4.86cqw] py-[calc(2.7778cqw*var(--pm,1))] md:flex-row md:items-center md:justify-between md:gap-0 md:py-0"
        style={{
          borderStyle: "solid",
          borderWidth: cqm(2),
          borderColor: "rgba(108, 99, 99, 0.5)",
          borderRadius: cqm(70),
          minHeight: cqm(314),
          paddingInline: cqm(63),
        }}
      >
        {/* Left text block */}
        <div style={{ maxWidth: cqm(520) }}>
          <h2
            className="font-bold"
            style={{ fontSize: cqm(24), color: "#1c1451", lineHeight: 1.3 }}
          >
            Siapkah anda memasuki ptn impian anda?
          </h2>
          {/* bubble */}
          <div
            className="mt-[1.2cqw] inline-flex items-center rounded-[1.4cqw] px-[1.1cqw] py-[0.9cqw]"
            style={{
              backgroundColor: "#e0f0cf",
              borderStyle: "solid",
              borderWidth: cqm(1),
              borderColor: "rgba(104, 141, 55, 0.3)", // #688d37 @ 30%
              borderRadius: cqm(20),
            }}
          >
            <span
              className="font-normal"
              style={{ fontSize: cqm(16), color: "#1c1451" }}
            >
              Yuk mulai memasukan data nilai anda dan pilih universitas impianmu
            </span>
          </div>
        </div>

        {/* Right text + button */}
        <div
          className="ml-0 flex flex-col items-start md:ml-[2.7778cqw]"
        >
          <span
            className="font-bold"
            style={{ fontSize: cqm(24), color: "#1c1451" }}
          >
            Dapatkan rekomendasi
          </span>
          <span
            className="font-bold"
            style={{ fontSize: cqm(24), color: "#1c1451" }}
          >
            Hitung peluangmu masuk PTN!
          </span>
          <Link
            href="/peluang-ptn"
            className="mt-[0.9cqw] flex items-center justify-center rounded-full font-bold text-white transition-opacity hover:opacity-90"
            style={{
              height: cqm(67),
              paddingInline: cqm(30),
              backgroundColor: "#e3aec2",
              borderStyle: "solid",
              borderWidth: cqm(1),
              borderColor: "rgba(108, 99, 99, 0.2)", // #6c6363 @ 20% — samar agar tidak menonjol di atas fill pink
              fontSize: cqm(24),
            }}
          >
            Mulai Iput Nilai →
          </Link>
        </div>

        {/* Maskot illustration (right-ish, from design at x~126 y~1813 w161 h164) */}
        <img
          src="/visual/maskot.png"
          alt="Maskot"
          className="pointer-events-none select-none"
          style={{
            position: "absolute",
            right: cqm(20),
            bottom: 0,
            width: cqm(161),
            height: "auto",
            opacity: 0,
          }}
        />
      </div>
    </section>
  );
}
