"use client";

import { useEffect } from "react";
import { cqm } from "@/lib/cq";

export interface PtnData {
  jenis: string;
  snbt: string;
  rapot: string;
  univ: string;
  jurusan: string;
}

const JENIS_NILAI = [
  "Nilai TKA/SNBT Sebelumnya",
  "Nilai Rapot Semester",
  "Nilai Ujian Sekolah",
];

const UNIVERSITAS = [
  "Universitas Gadjah Mada",
  "Universitas Indonesia",
  "Institut Teknologi Bandung",
  "Universitas Diponegoro",
  "Universitas Airlangga",
  "Institut Teknologi Sepuluh Nopember",
  "Universitas Padjadjaran",
  "Universitas Brawijaya",
];

const JURUSAN = [
  "Kedokteran",
  "Teknik Informatika",
  "Teknik Elektro",
  "Manajemen",
  "Akuntansi",
  "Hukum",
  "Psikologi",
  "Farmasi",
];

function Chevron() {
  return (
    <svg
      viewBox="0 0 20 12"
      style={{ width: cqm(20), height: cqm(12), flexShrink: 0 }}
      fill="none"
      stroke="#1c1451"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M1 1 L10 10 L19 1" />
    </svg>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-bold"
      style={{ fontSize: cqm(20), color: "#1c1451", lineHeight: 1.25, margin: 0 }}
    >
      {children}
    </p>
  );
}

const inputBox: React.CSSProperties = {
  width: "100%",
  height: cqm(57),
  borderRadius: cqm(16),
  border: `${cqm(2)} solid #1c1451`,
  backgroundColor: "#ffffff",
  paddingInline: cqm(21),
  fontSize: cqm(20),
  color: "#1c1451",
  outline: "none",
  fontFamily: "inherit",
};

function Select({
  ariaLabel,
  name,
  options,
  placeholder,
  initial,
}: {
  ariaLabel: string;
  name: string;
  options: string[];
  placeholder: string;
  initial?: string;
}) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <select
        aria-label={ariaLabel}
        name={name}
        defaultValue={initial && options.includes(initial) ? initial : ""}
        required
        style={{
          ...inputBox,
          appearance: "none",
          WebkitAppearance: "none",
          paddingRight: cqm(52),
          cursor: "pointer",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span
        aria-hidden
        style={{
          position: "absolute",
          right: cqm(21),
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          pointerEvents: "none",
        }}
      >
        <Chevron />
      </span>
    </div>
  );
}

function StepHeader({ no, title }: { no: string; title: string }) {
  return (
    <div className="flex items-center" style={{ gap: cqm(29) }}>
      <span
        className="flex shrink-0 items-center justify-center font-bold"
        style={{
          width: cqm(50),
          height: cqm(50),
          borderRadius: "50%",
          backgroundColor: "#e3aec2",
          color: "#ffffff",
          fontSize: cqm(24),
        }}
      >
        {no}
      </span>
      <h3
        className="font-bold"
        style={{ fontSize: cqm(36), color: "#1c1451", lineHeight: 1.25, margin: 0 }}
      >
        {title}
      </h3>
    </div>
  );
}

export function PtnPopup({
  onClose,
  initial,
  onSave,
}: {
  onClose: () => void;
  initial?: PtnData | null;
  onSave: (d: PtnData) => void;
}) {
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSave({
      jenis: String(fd.get("jenis") ?? ""),
      snbt: String(fd.get("snbt") ?? ""),
      rapot: String(fd.get("rapot") ?? ""),
      univ: String(fd.get("univ") ?? ""),
      jurusan: String(fd.get("jurusan") ?? ""),
    });
  }

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
        aria-label="Nilai dan Peluang Masuk PTN"
        className="soal-popup-panel ptn-popup-scope"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "calc(100vw - 48px)",
          maxWidth: cqm(1250),
          maxHeight: "90dvh",
          overflowY: "auto",
          backgroundColor: "#ffffff",
          borderRadius: cqm(70),
          border: `${cqm(2)} solid #6c6363`,
          boxShadow: "0 24px 80px rgba(28, 20, 81, 0.25)",
          paddingTop: cqm(71),
          paddingBottom: cqm(85),
          paddingInline: cqm(70),
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
            right: cqm(79),
            top: cqm(61),
            width: cqm(66),
            height: cqm(66),
            borderRadius: "50%",
            backgroundColor: "#e3aec2",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: cqm(28), height: cqm(28) }}
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
          style={{ fontSize: cqm(36), color: "#1c1451", lineHeight: 1.25, margin: 0 }}
        >
          Nilai dan Peluang Masuk PTN
        </h2>
        <p style={{ fontSize: cqm(24), color: "#1c1451", lineHeight: 1.3, margin: 0, marginTop: cqm(32) }}>
          Lengkapi data di bawah ini untuk menghitung peluangmu
        </p>

        <form onSubmit={handleSubmit}>
          <div
            className="grid md:grid-cols-2"
            style={{ marginTop: cqm(88), columnGap: cqm(138), rowGap: cqm(56) }}
          >
            {/* kiri: data nilai */}
            <div className="flex w-full flex-col">
              <StepHeader no="1" title="Masukan Data Nilai" />
              <div className="flex w-full flex-col" style={{ marginTop: cqm(64) }}>
                <FieldLabel>Pilih Jenis Nilai</FieldLabel>
                <div style={{ marginTop: cqm(19) }}>
                  <Select
                    ariaLabel="Pilih jenis nilai"
                    name="jenis"
                    options={JENIS_NILAI}
                    placeholder="Nilai TKA/SNBT Sebelumnya"
                    initial={initial?.jenis}
                  />
                </div>
              </div>
              <div className="flex w-full flex-col" style={{ marginTop: cqm(58) }}>
                <FieldLabel>Nilai SNBT</FieldLabel>
                <input
                  type="text"
                  inputMode="decimal"
                  aria-label="Nilai SNBT"
                  name="snbt"
                  defaultValue={initial?.snbt ?? ""}
                  style={{ ...inputBox, marginTop: cqm(15) }}
                />
              </div>
              <div className="flex w-full flex-col" style={{ marginTop: cqm(60) }}>
                <FieldLabel>Rata - Rata Rapot</FieldLabel>
                <input
                  type="text"
                  inputMode="decimal"
                  aria-label="Rata-rata rapot"
                  name="rapot"
                  defaultValue={initial?.rapot ?? ""}
                  style={{ ...inputBox, marginTop: cqm(13) }}
                />
              </div>
            </div>

            {/* kanan: universitas & jurusan */}
            <div className="flex w-full flex-col">
              <StepHeader no="2" title="Pilih Universitas & Jurusan" />
              <div className="flex w-full flex-col" style={{ marginTop: cqm(64) }}>
                <FieldLabel>Pilih Universitas</FieldLabel>
                <div style={{ marginTop: cqm(19) }}>
                  <Select
                    ariaLabel="Pilih universitas"
                    name="univ"
                    options={UNIVERSITAS}
                    placeholder="Pilih universitas"
                    initial={initial?.univ}
                  />
                </div>
              </div>
              <div className="flex w-full flex-col" style={{ marginTop: cqm(58) }}>
                <FieldLabel>Pilih Jurusan Universitas</FieldLabel>
                <div style={{ marginTop: cqm(15) }}>
                  <Select
                    ariaLabel="Pilih jurusan universitas"
                    name="jurusan"
                    options={JURUSAN}
                    placeholder="Pilih jurusan"
                    initial={initial?.jurusan}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="cursor-pointer font-bold transition hover:brightness-[0.97]"
                style={{
                  width: "100%",
                  height: cqm(82),
                  borderRadius: cqm(16),
                  backgroundColor: "#e3aec2",
                  border: "none",
                  color: "#ffffff",
                  fontSize: cqm(32),
                  fontFamily: "inherit",
                  marginTop: cqm(53),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
