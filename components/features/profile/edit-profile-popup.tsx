"use client";

import { useEffect, useRef, useState, type ChangeEvent, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { cqm } from "@/lib/cq";
import { useAuth } from "@/lib/store/auth";

const DEFAULT_AVATAR = "/visual/profile/avatar-default.png";

/** Target ukuran data URL avatar — dibulatkan ≤ ~1 KB (1.024 char). */
const TARGET_CHARS = 1024;
/** Kualitas JPEG awal saat kompresi (0–1). Diturunkan bertahap bila masih besar. */
const START_QUALITY = 0.85;
const MIN_QUALITY = 0.4;

/**
 * Kompres & ubah file gambar jadi data URL JPEG persegi sekecil mungkin
 * (≤ ~1 KB) supaya hemat penyimpanan localStorage & chat. Gambar dipusatkan
 * ala crop-avatar, dimensi diturunkan bertahap sampai muat target.
 */
function readImageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      try {
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;

        const make = (size: number, quality: number): string => {
          const canvas = document.createElement("canvas");
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext("2d");
          if (!ctx) throw new Error("no canvas");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, size, size);
          ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
          return canvas.toDataURL("image/jpeg", quality);
        };

        // Iterasi: mulai dari 96px, kecilkan ukuran & turunkan kualitas sampai
        // data URL ≤ target. Data URL jpeg 96px biasanya sudah < 1 KB.
        let best: string | null = null;
        const sizes = [96, 80, 64, 48, 40, 32];
        for (const size of sizes) {
          for (const q of [START_QUALITY, 0.7, 0.55, MIN_QUALITY]) {
            const dataUrl = make(size, q);
            if (dataUrl.length <= TARGET_CHARS) {
              best = dataUrl;
              break;
            }
            // simpan kandidat terkecil (bila tak ada yang muat)
            if (!best || dataUrl.length < best.length) best = dataUrl;
          }
          if (best && best.length <= TARGET_CHARS) break;
        }
        // fallback paling kecil yang pernah dibuat (selalu ada)
        const result = best ?? make(32, MIN_QUALITY);
        URL.revokeObjectURL(url);
        resolve(result);
      } catch (e) {
        URL.revokeObjectURL(url);
        reject(e);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("gagal baca gambar"));
    };
    img.src = url;
  });
}

/**
 * Popup "Edit Profile" — mengikuti desain Figma 369-1127.
 * Avatar & tombol kamera bisa diklik → pilih gambar dari perangkat (ala IG),
 * lalu pratinjau; Simpan menyimpan nama/telepon + foto profil.
 * Email sengaja dibuat read-only: email adalah identitas login (jembatan ke DB),
 * mengubahnya tanpa verifikasi bikin profil "nge-bug"/terpisah dari riwayat.
 */
export function EditProfilePopup({ onClose }: { onClose: () => void }) {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [phone, setPhone] = useState(user?.phone ?? "");
  const [avatar, setAvatar] = useState<string | undefined>(user?.avatar);
  const [busy, setBusy] = useState(false);
  const [warn, setWarn] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

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

  const pickFile = () => fileRef.current?.click();

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // biar file sama bisa dipilih ulang
    setWarn(null);
    if (!file) return;
    // hanya menerima gambar — selain gambar ditolak dengan pesan jelas
    if (!file.type.startsWith("image/")) {
      setWarn("File harus berupa gambar (jpg, png, webp, dll).");
      return;
    }
    setBusy(true);
    try {
      const dataUrl = await readImageFile(file);
      setAvatar(dataUrl);
      setWarn(null);
    } catch {
      setWarn("Gambar tidak bisa dibaca. Coba file lain.");
    } finally {
      setBusy(false);
    }
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    updateProfile({ name, phone, avatar });
    onClose();
  };

  return (
    <div
      className="soal-popup-backdrop profile-scope"
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
        aria-label="Edit Profile"
        className="edit-profile-scope"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: cqm(759),
          maxWidth: "calc(100vw - 48px)",
          backgroundColor: "#ffffff",
          borderRadius: cqm(50),
          border: `${cqm(2)} solid #6c6363`,
          boxShadow: "0 24px 80px rgba(28, 20, 81, 0.25)",
          position: "relative",
          padding: cqm(48),
        }}
      >
        {/* judul */}
        <h2
          className="font-bold"
          style={{
            margin: 0,
            fontSize: cqm(28),
            color: "#2a235c",
            textAlign: "center",
          }}
        >
          Edit Profile
        </h2>

        <form
          onSubmit={submit}
          className="flex w-full flex-col items-center md:flex-row md:items-center"
          style={{
            marginTop: cqm(28),
            gap: cqm(40),
          }}
        >
          {/* KIRI (desktop): avatar + tombol kamera */}
          <div
            className="flex flex-col items-center"
            style={{ flexShrink: 0 }}
          >
          {/* avatar + tombol kamera — klik untuk ganti foto */}
          <div style={{ position: "relative", width: cqm(129), height: cqm(129) }}>
            <button
              type="button"
              aria-label="Ganti foto profil"
              onClick={pickFile}
              disabled={busy}
              title="Ganti foto profil"
              style={{
                display: "block",
                padding: 0,
                border: "none",
                background: "transparent",
                borderRadius: "50%",
                cursor: busy ? "wait" : "pointer",
                overflow: "hidden",
              }}
            >
              <img
                src={avatar ?? DEFAULT_AVATAR}
                alt="Avatar"
                style={{
                  width: cqm(129),
                  height: cqm(129),
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `${cqm(3)} solid #f5c3c2`,
                  display: "block",
                }}
              />
            </button>
            {/* tombol kamera kecil di pojok */}
            <button
              type="button"
              aria-label="Ganti foto"
              onClick={pickFile}
              disabled={busy}
              style={{
                position: "absolute",
                right: cqm(2),
                bottom: cqm(2),
                width: cqm(30),
                height: cqm(30),
                borderRadius: "50%",
                backgroundColor: "#fff1f0",
                border: `${cqm(1)} solid #f6cbca`,
                cursor: busy ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{ width: cqm(15), height: cqm(15) }}
                fill="none"
                stroke="#f6cbca"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </button>
            {/* input file tersembunyi */}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
              style={{ display: "none" }}
              aria-hidden
              tabIndex={-1}
            />
          </div>
          <p
            className="ep-hint font-bold"
            style={{
              margin: 0,
              marginTop: -cqm(16),
              fontSize: cqm(12),
              color: warn ? "#ef5b7e" : "#f6b4b2",
              cursor: "default",
              textAlign: "center",
              maxWidth: cqm(400),
            }}
          >
            {busy
              ? "Memproses…"
              : warn ?? "Tekan foto untuk ganti profil (khusus gambar, otomatis diperkecil)"}
          </p>
          </div>

          {/* KANAN (desktop): deretan field + tombol simpan */}
          <div
            className="flex w-full min-w-0 flex-col items-center md:items-stretch"
            style={{ flex: 1, gap: cqm(24) }}
          >
          {/* Nama Lengkap */}
          <Field label="Nama Lengkap">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              className="ep-input"
              placeholder="Nama kamu"
            />
          </Field>

          {/* Nomor Telepon */}
          <Field label="Nomor Telepon">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
              className="ep-input"
              placeholder="(kalau mau nambahin)"
            />
          </Field>

          {/* Email — read-only: identitas login, tidak bisa diubah di sini */}
          <Field label="Email">
            <input
              type="email"
              value={user?.email ?? ""}
              readOnly
              disabled
              className="ep-input"
              style={{ ...inputStyle, opacity: 0.75, cursor: "not-allowed" }}
              placeholder="email dia saat login"
            />
          </Field>

          {/* Simpan */}
          <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <button
              type="submit"
              className="ep-save cursor-pointer font-bold transition hover:brightness-[0.96]"
              style={{
                width: cqm(86),
                height: cqm(34),
                borderRadius: cqm(50),
                backgroundColor: "#ffffff",
                border: `${cqm(2)} solid #f5c3c2`,
                color: "#f5c3c2",
                fontSize: cqm(12),
                fontFamily: "inherit",
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

const inputStyle: CSSProperties = {
  width: "100%",
  height: cqm(52),
  borderRadius: cqm(20),
  border: `${cqm(2)} solid #f5c3c2`,
  backgroundColor: "#fff0f0",
  color: "#2a235c",
  fontSize: cqm(16),
  paddingInline: cqm(18),
  outline: "none",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

/** Field dengan floating label pink di atas (menimpa border atas). */
function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const fieldW = cqm(377);
  return (
    <div style={{ position: "relative", width: fieldW }}>
      {children}
      <span
        className="ep-label font-bold"
        style={{
          position: "absolute",
          top: 0,
          left: cqm(16),
          transform: "translateY(-50%)",
          backgroundColor: "#f5c3c2",
          color: "#ffffff",
          fontSize: cqm(13),
          lineHeight: 1,
          paddingInline: cqm(10),
          paddingBlock: cqm(4),
          borderRadius: cqm(16),
          whiteSpace: "nowrap",
          zIndex: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
}
