"use client";

import { useEffect, type ReactNode } from "react";
import { cqm } from "@/lib/cq";

interface ConfirmPopupProps {
  /** Judul popup: "Log Out" / "Hapus Akun" */
  title: string;
  /** Pertanyaan konfirmasi */
  message: string;
  /** Teks tombol konfirmasi kanan, mis. "Konfirmasi" */
  confirmLabel: string;
  onConfirm: () => void;
  onClose: () => void;
  children?: ReactNode;
}

/**
 * Popup konfirmasi (Log Out / Hapus Akun) — desain Figma 369-827 & 369-983.
 * Kartu putih 701x297, radius 50, border #6c6363.
 * Tombol kiri "Batal" (#ff9e97/#e24151), tombol kanan "Konfirmasi" (#e9ffdb/#47ad7d/#49b482).
 */
export function ConfirmPopup({
  title,
  message,
  confirmLabel = "Konfirmasi",
  onConfirm,
  onClose,
  children,
}: ConfirmPopupProps) {
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

  const btnBase = {
    height: cqm(44.7),
    borderRadius: cqm(16),
    borderWidth: cqm(2),
    fontSize: cqm(24),
    fontWeight: 700 as const,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "filter 0.15s",
  } as const;

  return (
    <div
      className="soal-popup-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
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
          width: "calc(100vw - 48px)",
          maxWidth: cqm(701),
          backgroundColor: "#ffffff",
          borderRadius: cqm(50),
          border: `${cqm(2)} solid #6c6363`,
          boxShadow: "0 24px 80px rgba(28, 20, 81, 0.25)",
          padding: `${cqm(62)} ${cqm(66)} ${cqm(46)}`,
          position: "relative",
        }}
      >
        {/* judul */}
        <h2
          className="font-bold"
          style={{
            fontSize: cqm(36),
            lineHeight: 1.2,
            color: "#1c1451",
            margin: 0,
            textAlign: "center",
          }}
        >
          {title}
        </h2>

        {/* pertanyaan */}
        <p
          className="font-normal"
          style={{
            fontSize: cqm(20),
            lineHeight: 1.25,
            color: "#1c1451",
            margin: 0,
            marginTop: cqm(18),
            textAlign: "center",
          }}
        >
          {message}
        </p>

        {/* konten ekstra (mis. hapus akun: peringatan data hilang) */}
        {children}

        {/* tombol aksi */}
        <div
          className="flex w-full items-center justify-center"
          style={{ gap: cqm(30), marginTop: cqm(30) }}
        >
          <button
            type="button"
            onClick={onClose}
            className="font-bold"
            style={{
              ...btnBase,
              width: cqm(183.9),
              backgroundColor: "#ff9e97",
              borderStyle: "solid",
              borderColor: "#e24151",
              color: "#e24151",
            }}
          >
            Batal
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="font-bold"
            style={{
              ...btnBase,
              width: cqm(183.9),
              backgroundColor: "#e9ffdb",
              borderStyle: "solid",
              borderColor: "#47ad7d",
              color: "#49b482",
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
