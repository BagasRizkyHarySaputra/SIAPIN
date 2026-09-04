"use client";

import { cqm } from "@/lib/cq";

export function PilihPtn({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="w-full">
      <div
        className="relative flex w-full flex-col gap-[calc(2.7778cqw*var(--pm,1))] overflow-hidden rounded-[calc(4.86cqw*var(--ds,1))] py-[calc(2.7778cqw*var(--pm,1))] md:flex-row md:items-center md:justify-between md:gap-0 md:py-0"
        style={{
          borderStyle: "solid",
          borderWidth: cqm(2),
          borderColor: "rgba(108, 99, 99, 0.5)",
          borderRadius: cqm(70),
          minHeight: cqm(314),
          paddingInline: cqm(63),
        }}
      >
        {/* Left text block — heading + (maskot beside bubble) */}
        <div style={{ maxWidth: cqm(520) }}>
          <h2
            className="font-bold"
            style={{ fontSize: cqm(24), color: "#1c1451", lineHeight: 1.3 }}
          >
            Siapkah anda memasuki ptn impian anda?
          </h2>

          {/* maskot + bubble row */}
          <div
            className="mt-[calc(1.2cqw*var(--ds,1))] flex items-end"
            style={{ gap: cqm(8) }}
          >
            {/* Maskot (kura-kura) — from Figma at left of bubble */}
            <img
              src="/visual/maskot.png"
              alt="Maskot"
              className="pointer-events-none select-none"
              style={{
                width: cqm(140),
                height: "auto",
                marginBottom: cqm(-30),
              }}
            />
            {/* bubble */}
            <div
              className="flex items-center rounded-[calc(1.4cqw*var(--ds,1))] px-[calc(1.5cqw*var(--ds,1))] py-[calc(1.2cqw*var(--ds,1))]"
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
                style={{ fontSize: cqm(16), color: "#1c1451", lineHeight: 1.4 }}
              >
                Yuk mulai memasukan data nilai anda dan pilih universitas
                impianmu
              </span>
            </div>
          </div>
        </div>

        {/* Right text + button */}
        <div
          className="ml-0 flex flex-col items-start md:ml-[calc(2.7778cqw*var(--ds,1))]"
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
          <button
            type="button"
            onClick={onOpen}
            className="mt-[calc(0.9cqw*var(--ds,1))] flex cursor-pointer items-center justify-center rounded-full font-bold text-white transition-opacity hover:opacity-90"
            style={{
              height: cqm(67),
              paddingInline: cqm(30),
              backgroundColor: "#e3aec2",
              borderStyle: "solid",
              borderWidth: cqm(1),
              borderColor: "rgba(108, 99, 99, 0.2)", // #6c6363 @ 20% — samar agar tidak menonjol di atas fill pink
              fontSize: cqm(24),
              fontFamily: "inherit",
            }}
          >
            Mulai Iput Nilai →
          </button>
        </div>

        {/* Maskot illustration (right-ish, from design at x~126 y~1813 w161 h164) */}
        <img
          src="/visual/maskot.png"
          alt=""
          aria-hidden
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
