"use client";

import { useEffect } from "react";
import { cqm } from "@/lib/cq";

const OPTIONS = [
  {
    key: "drilling",
    title: "Drilling",
    desc: "Tanpa Timer - Pembahasan",
    bg: "#d9e8e6",
    border: "#7d9b98",
    circle: "#8ba3a0",
  },
  {
    key: "ujian",
    title: "Ujian",
    desc: "30 Menit - Skor Akhir",
    bg: "#ece7f3",
    border: "#9a8fa8",
    circle: "#8f86a3",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: cqm(28), height: cqm(28) }}
      fill="none"
      stroke="#1c1451"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function SoalPopup({
  title,
  onClose,
  onPick,
}: {
  title: string;
  onClose: () => void;
  onPick: (tipe: string) => void;
}) {
  // Kunci scroll body + tutup pakai Escape selama popup terbuka.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="soal-popup-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: cqm(24),
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="soal-popup-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "calc(100vw - 48px)",
          maxWidth: cqm(1087),
          maxHeight: "90dvh",
          overflowY: "auto",
          backgroundColor: "#ffffff",
          borderRadius: cqm(50),
          border: `${cqm(2)} solid #d9d9d9`,
          boxShadow: "0 24px 80px rgba(28, 20, 81, 0.25)",
          paddingTop: cqm(57),
          paddingBottom: cqm(55),
          paddingLeft: cqm(75),
          paddingRight: cqm(60),
        }}
      >
        {/* tombol tutup */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="cursor-pointer transition hover:brightness-[0.94]"
          style={{
            position: "absolute",
            right: cqm(49),
            top: cqm(45),
            width: cqm(60),
            height: cqm(60),
            borderRadius: "50%",
            backgroundColor: "#f5c3c2",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: cqm(26), height: cqm(26) }}
            fill="none"
            stroke="#ffffff"
            strokeWidth={2.5}
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <h2
          className="font-bold"
          style={{
            fontSize: cqm(40),
            color: "#1c1451",
            lineHeight: 1.2,
            margin: 0,
            paddingRight: cqm(125),
          }}
        >
          {title}
        </h2>
        <p
          className="font-medium"
          style={{
            fontSize: cqm(20),
            color: "#6f6a85",
            lineHeight: 1.3,
            margin: 0,
            marginTop: cqm(13),
          }}
        >
          Pilih Mode Latihan
        </p>

        {/* Drilling / Ujian — selalu sejajar 1 baris (skala lokal popup) */}
        <div
          className="popup-scope flex flex-row items-center justify-center"
          style={{ gap: cqm(78), marginTop: cqm(28) }}
        >
          {OPTIONS.map((o) => (
            <button
              key={o.key}
              type="button"
              onClick={() => onPick(o.key)}
              className="cursor-pointer text-left transition hover:brightness-[0.97]"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: cqm(314),
                height: cqm(260),
                borderRadius: cqm(20),
                backgroundColor: o.bg,
                border: `${cqm(2)} solid ${o.border}`,
                overflow: "hidden",
                fontFamily: "inherit",
                padding: 0,
              }}
            >
              <span
                className="font-bold"
                aria-hidden
                style={{
                  position: "absolute",
                  right: cqm(20),
                  top: cqm(4),
                  fontSize: cqm(96),
                  lineHeight: 1,
                  color: "#ffffff",
                  opacity: 0.9,
                }}
              >
                1
              </span>
              <span
                className="font-bold"
                style={{
                  position: "absolute",
                  left: cqm(23),
                  top: cqm(118),
                  fontSize: cqm(32),
                  lineHeight: 1.2,
                  color: "#1c1451",
                }}
              >
                {o.title}
              </span>
              <span
                style={{
                  position: "absolute",
                  left: cqm(23),
                  top: cqm(157),
                  fontSize: cqm(16),
                  lineHeight: 1.4,
                  color: "#1c1451",
                }}
              >
                {o.desc}
              </span>
              <span
                style={{
                  position: "absolute",
                  right: cqm(45),
                  top: cqm(171),
                  width: cqm(60),
                  height: cqm(60),
                  borderRadius: "50%",
                  backgroundColor: o.circle,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowIcon />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
