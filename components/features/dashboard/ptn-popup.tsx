"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cqm } from "@/lib/cq";
import { PTN_LIST, findPtn, prodiByPtn } from "@/lib/data/ptn";

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

// Daftar universitas dari data riil (75 PTN SNBT 2026). Popup menampilkan
// PTN unggulan terlebih dahulu (yang sering dipilih), sisanya menyusul.
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

/** Combobox — user bisa mengetik untuk mempersempit daftar pilihan.
 * Dipakai untuk pilih universitas & jurusan/prodi. Menggantikan <select>
 * biasa agar daftar panjang (75 PTN / 90+ prodi) tetap mudah dicari. */
function SearchSelect({
  ariaLabel,
  name,
  options,
  placeholder,
  value,
  onSelect,
  disabled,
  emptyText,
}: {
  ariaLabel: string;
  name: string;
  options: string[];
  placeholder: string;
  value: string;
  onSelect: (v: string) => void;
  disabled?: boolean;
  /** Teks saat dropdown terbuka tapi tidak ada opsi yang cocok. */
  emptyText?: string;
}) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);

  // Sinkronkan query saat value berubah dari luar (mis. reset saat ganti univ)
  useEffect(() => {
    setQuery(value);
  }, [value]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.toLowerCase().includes(q));
  }, [query, options]);

  const listRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  function choose(v: string) {
    onSelect(v);
    setQuery(v);
    setOpen(false);
    setHighlight(-1);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter")) {
      if (e.key === "ArrowDown") {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      if (open && highlight >= 0 && filtered[highlight]) {
        e.preventDefault();
        choose(filtered[highlight]);
      } else if (open && filtered.length === 1) {
        e.preventDefault();
        choose(filtered[0]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} style={{ position: "relative", width: "100%" }}>
      <input
        aria-label={ariaLabel}
        name={name}
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        autoComplete="off"
        value={query}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          setHighlight(-1);
          // update nilai tersimpan — hanya set bila cocok persis, biar tombol Simpan
          // tetap memakai pilihan valid; jika user mengetik bebas, form tetap butuh pilihan.
          const v = e.target.value;
          const exact = options.find(
            (o) => o.toLowerCase() === v.trim().toLowerCase()
          );
          onSelect(exact ? exact : v);
        }}
        onKeyDown={onKeyDown}
        required
        style={{
          ...inputBox,
          opacity: disabled ? 0.55 : 1,
          background: disabled ? "#f0f0f5" : "#ffffff",
          cursor: disabled ? "not-allowed" : "text",
        }}
      />
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

      {open && !disabled && (
        <div
          ref={listRef}
          role="listbox"
          className="searchselect-dropdown"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            zIndex: 60,
            maxHeight: cqm(240),
            overflowY: "auto",
            backgroundColor: "#ffffff",
            borderRadius: cqm(14),
            border: `${cqm(2)} solid rgba(28, 20, 81, 0.25)`,
            boxShadow: "0 12px 40px rgba(28, 20, 81, 0.18)",
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                padding: cqm(14),
                fontSize: cqm(15),
                color: "#8a8a9a",
              }}
            >
              {emptyText ?? "Tidak ada pilihan yang cocok"}
            </div>
          ) : (
            filtered.slice(0, 80).map((o, idx) => {
              const active = idx === highlight;
              return (
                <button
                  key={o}
                  type="button"
                  role="option"
                  aria-selected={o === value}
                  onMouseEnter={() => setHighlight(idx)}
                  onClick={() => choose(o)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: active ? "#f5eafb" : "transparent",
                    border: "none",
                    paddingBlock: cqm(10),
                    paddingInline: cqm(16),
                    fontSize: cqm(16),
                    color: "#1c1451",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    borderRadius: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {o}
                </button>
              );
            })
          )}
        </div>
      )}
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
  const [univ, setUniv] = useState(initial?.univ ?? "");
  const [jurusan, setJurusan] = useState(initial?.jurusan ?? "");
  const [snbt, setSnbt] = useState(initial?.snbt ?? "");
  const [rapot, setRapot] = useState(initial?.rapot ?? "");
  const [snbtWarn, setSnbtWarn] = useState(false);
  const [rapotWarn, setRapotWarn] = useState(false);
  const [snbtMsg, setSnbtMsg] = useState("");
  const [rapotMsg, setRapotMsg] = useState("");
  const [formErr, setFormErr] = useState("");
  // Semua universitas riil dari dataset SNBT 2026 (75 PTN): yang populer
  // (8 besar) ditampilkan lebih dulu, lalu sisanya mengikuti abjad.
  const univList = useMemo(() => {
    const namaSet = new Set<string>();
    for (const u of UNIVERSITAS) namaSet.add(u);
    const list = [...UNIVERSITAS];
    for (const p of PTN_LIST) {
      if (!namaSet.has(p.nama)) {
        namaSet.add(p.nama);
        list.push(p.nama);
      }
    }
    return list;
  }, []);

  // Prodi riil milik universitas terpilih (dari dataset PTN).
  const jurusanList = useMemo(() => {
    if (!univ) return [];
    const ptn = findPtn(univ);
    if (!ptn) return [];
    return prodiByPtn(ptn.id).map((p) => p.nama);
  }, [univ]);

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
    const jenisVal = String(fd.get("jenis") ?? "");
    const univVal = String(fd.get("univ") ?? "").trim();
    const jurusanVal = String(fd.get("jurusan") ?? "").trim();
    const snbtVal = String(fd.get("snbt") ?? "").trim();
    const rapotVal = String(fd.get("rapot") ?? "").trim();

    // --- validasi input numerik (SNBT & rapot): hanya angka/desimal ---
    const numRe = /^\d{1,3}([.,]\d{1,2})?$/;
    if (snbtVal && !numRe.test(snbtVal)) {
      setSnbtWarn(true);
      setFormErr("Nilai SNBT harus berupa angka (contoh: 650 atau 620.5).");
      return;
    }
    if (rapotVal && !numRe.test(rapotVal)) {
      setRapotWarn(true);
      setFormErr("Rata-rata rapot harus berupa angka (contoh: 87 atau 90.5).");
      return;
    }

    // --- validasi pilihan universitas & jurusan harus cocok dgn daftar ---
    const univCocok = univList.some(
      (u) => u.toLowerCase() === univVal.toLowerCase()
    );
    if (!univVal || !univCocok) {
      setFormErr(
        univVal
          ? "Universitas tidak ada di daftar. Pilih dari daftar yang muncul saat mengetik."
          : "Silakan pilih universitas dulu."
      );
      return;
    }
    const jurCocok = jurusanList.some(
      (j) => j.toLowerCase() === jurusanVal.toLowerCase()
    );
    if (!jurusanVal || !jurCocok) {
      setFormErr(
        jurusanVal
          ? "Jurusan/prodi tidak ada di daftar universitas tsb. Pilih dari daftar yang muncul."
          : "Silakan pilih jurusan/prodi dulu."
      );
      return;
    }

    setFormErr("");
    onSave({
      jenis: jenisVal,
      snbt: snbtVal,
      rapot: rapotVal,
      univ: univCocok
        ? univList.find((u) => u.toLowerCase() === univVal.toLowerCase())!
        : univVal,
      jurusan: jurCocok
        ? jurusanList.find((j) => j.toLowerCase() === jurusanVal.toLowerCase())!
        : jurusanVal,
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
                  value={snbt}
                  onChange={(e) => {
                    // hanya izinkan digit & satu titik/koma desimal
                    const v = e.target.value;
                    const clean = v.replace(/[^\d.,]/g, "").replace(/([.,].*)[.,]/g, "$1");
                    setSnbt(clean);
                    if (v !== clean) {
                      // ada karakter non-angka yang dibuang (mis. paste huruf)
                      setSnbtWarn(true);
                      setSnbtMsg("Nilai SNBT hanya boleh angka (huruf tidak bisa diketik).");
                    } else {
                      setSnbtWarn(false);
                      setSnbtMsg("");
                    }
                  }}
                  onKeyDown={(e) => {
                    if (/^[a-zA-Z]$/.test(e.key)) {
                      e.preventDefault();
                      setSnbtWarn(true);
                      setSnbtMsg("Nilai SNBT hanya boleh angka (huruf tidak bisa diketik).");
                    }
                  }}
                  style={{
                    ...inputBox,
                    marginTop: cqm(15),
                    ...(snbtWarn
                      ? { borderColor: "#e11d48", boxShadow: "0 0 0 3px rgba(225,29,72,0.15)" }
                      : {}),
                  }}
                />
                {snbtWarn && (
                  <span
                    role="alert"
                    style={{
                      marginTop: cqm(10),
                      fontSize: cqm(14),
                      color: "#e11d48",
                      lineHeight: 1.4,
                    }}
                  >
                    {snbtMsg || "Nilai SNBT harus berupa angka."}
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col" style={{ marginTop: cqm(60) }}>
                <FieldLabel>Rata - Rata Rapot</FieldLabel>
                <input
                  type="text"
                  inputMode="decimal"
                  aria-label="Rata-rata rapot"
                  name="rapot"
                  value={rapot}
                  onChange={(e) => {
                    const v = e.target.value;
                    const clean = v.replace(/[^\d.,]/g, "").replace(/([.,].*)[.,]/g, "$1");
                    setRapot(clean);
                    if (v !== clean) {
                      setRapotWarn(true);
                      setRapotMsg("Rata-rata rapot hanya boleh angka (huruf tidak bisa diketik).");
                    } else {
                      setRapotWarn(false);
                      setRapotMsg("");
                    }
                  }}
                  onKeyDown={(e) => {
                    if (/^[a-zA-Z]$/.test(e.key)) {
                      e.preventDefault();
                      setRapotWarn(true);
                      setRapotMsg("Rata-rata rapot hanya boleh angka (huruf tidak bisa diketik).");
                    }
                  }}
                  style={{
                    ...inputBox,
                    marginTop: cqm(13),
                    ...(rapotWarn
                      ? { borderColor: "#e11d48", boxShadow: "0 0 0 3px rgba(225,29,72,0.15)" }
                      : {}),
                  }}
                />
                {rapotWarn && (
                  <span
                    role="alert"
                    style={{
                      marginTop: cqm(10),
                      fontSize: cqm(14),
                      color: "#e11d48",
                      lineHeight: 1.4,
                    }}
                  >
                    {rapotMsg || "Rata-rata rapot harus berupa angka."}
                  </span>
                )}
              </div>
            </div>

            {/* kanan: universitas & jurusan */}
            <div className="flex w-full flex-col">
              <StepHeader no="2" title="Pilih Universitas & Jurusan" />
              <div className="flex w-full flex-col" style={{ marginTop: cqm(64) }}>
                <FieldLabel>Pilih Universitas</FieldLabel>
                <div style={{ marginTop: cqm(19) }}>
                  <SearchSelect
                    ariaLabel="Pilih universitas"
                    name="univ"
                    options={univList}
                    placeholder="Ketik & pilih universitas"
                    value={univ}
                    onSelect={(v) => {
                      setUniv(v);
                      // reset jurusan bila ganti univ
                      setJurusan("");
                    }}
                    emptyText="Universitas tidak ditemukan. Ketik nama lain."
                  />
                </div>
              </div>
              <div className="flex w-full flex-col" style={{ marginTop: cqm(58) }}>
                <FieldLabel>Pilih Jurusan Universitas</FieldLabel>
                <div style={{ marginTop: cqm(15) }}>
                  <SearchSelect
                    ariaLabel="Pilih jurusan universitas"
                    name="jurusan"
                    options={jurusanList}
                    placeholder={
                      univ ? "Ketik & pilih jurusan/prodi" : "Pilih universitas dulu"
                    }
                    value={jurusan}
                    onSelect={setJurusan}
                    disabled={!univ}
                    emptyText="Prodi tidak ditemukan di universitas ini."
                  />
                </div>
              </div>
              {formErr && (
                <p
                  role="alert"
                  style={{
                    marginTop: cqm(20),
                    fontSize: cqm(15),
                    color: "#e11d48",
                    lineHeight: 1.5,
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {formErr}
                </p>
              )}
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
