"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import {
  BimbleSection,
  GuruCards,
  TEACHERS,
  type BimbleTeacher,
} from "@/components/features/bimble/bimble-section";
import {
  TEACHER_PANEL_DATA,
  TeacherPanel,
} from "@/components/features/bimble/teacher-panel";
import { cqm } from "@/lib/cq";

const EXIT_MS = 250;

/** Normalisasi string mapel untuk pencocokan (case + spasi ganda). */
function norm(s: string): string {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

/** Ambil daftar mapel unik dari subject guru.
 *  Subject berformat "Mapel - Jenjang" (mis. "B. Indonesia - TKA SMP" atau
 *  "Matematika  - SNBT - TKA") → mapel pokok = segmen PERTAMA saja.
 *  Kapitalisasi asli dipertahankan untuk tampilan opsi. */
function uniqueSubjects(teachers: BimbleTeacher[]): string[] {
  const set = new Set<string>();
  for (const t of teachers) {
    const first = t.subject.split("-")[0];
    const p = first.trim().replace(/\s+/g, " ");
    if (p) set.add(p);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

/** Client wrapper halaman /bimble — menerima guru dari DATABASE (server component).
 *  Layout & interaksi 1:1 dengan desain; hanya sumber data kartu yang dari db.
 *  Search & dropdown mapel memfilter daftar guru secara real-time. */
export default function BimbleClient({ teachers }: { teachers?: BimbleTeacher[] }) {
  // null = state normal (frame 333-496); terisi = state "click" (frame 333-1055)
  const [selected, setSelected] = useState<string | null>(null);
  // id panel yang sedang animasi keluar (tetap render sampai selesai)
  const [closingId, setClosingId] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  // Filter search & mapel
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("Semua Mapel");

  const clearTimer = () => {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => clearTimer, []);

  const open = (id: string) => {
    clearTimer();
    setClosingId(null);
    setSelected(id);
  };

  const close = () => {
    if (!selected || closingId) return;
    setClosingId(selected);
    setSelected(null);
    // 250ms = durasi bimblePanelOut (CSS) — setelah itu unmount.
    timer.current = window.setTimeout(() => {
      setClosingId(null);
      timer.current = null;
    }, EXIT_MS);
  };

  const handleSelect = (id: string) => {
    if (id === selected && !closingId) close();
    else open(id);
  };

  // Daftar mapel unik dari guru yang TERSEDIA (selalu dari daftar penuh, bukan hasil filter)
  const source = teachers && teachers.length > 0 ? teachers : TEACHERS;
  const subjects = useMemo(() => uniqueSubjects(source), [source]);

  // Daftar guru hasil filter — diteruskan ke GuruCards. [] = tampilkan empty state.
  const visibleTeachers = useMemo(() => {
    const q = norm(query);
    return source.filter((t) => {
      const matchQ =
        !q ||
        norm(t.name).includes(q) ||
        norm(t.subject).includes(q) ||
        norm(t.siswa).includes(q);
      const matchS = subject === "Semua Mapel" || norm(t.subject).includes(norm(subject));
      return matchQ && matchS;
    });
  }, [teachers, query, subject]);

  const visibleId = selected ?? closingId;
  const visible = visibleId ? TEACHER_PANEL_DATA[visibleId] : undefined;
  const isClosing = closingId !== null;

  return (
    <main
      className="bimble-page bimble-scope flex min-h-screen w-full flex-col bg-[#dbe9ea]"
      style={{ minHeight: "100dvh", containerType: "inline-size" }}
    >
      <Navbar />

      {/* white rounded container (Rectangle 159) — full 100% lebar layar */}
      <div
        className="relative mx-auto flex w-full flex-1 flex-col bg-white"
        style={{
          borderTopLeftRadius: cqm(70),
          borderTopRightRadius: cqm(70),
          paddingInline: cqm(84),
        }}
      >
        {/* Rectangle 159 top (y=196) → heading (y=246) = 50px */}
        <div style={{ paddingTop: cqm(50) }}>
          <BimbleSection
            query={query}
            onQueryChange={setQuery}
            subject={subject}
            onSubjectChange={setSubject}
            subjects={subjects}
          />
        </div>

        {/* lavender band (Rectangle 160) — full-bleed, dengan hairline atas #b5b0b0 */}
        <div
          className="relative flex-1"
          style={{
            backgroundColor: "#f5eafb",
            borderTop: `${cqm(1)} solid #b5b0b0`,
            marginTop: cqm(34),
            marginInline: `calc(${cqm(84)} * -1)`,
            paddingTop: cqm(61),
            paddingBottom: cqm(73),
            paddingInline: cqm(84),
          }}
        >
          {/* layout desktop/HP diatur CSS murni (.bimble-area di globals.css) */}
          <div
            className={visible ? "bimble-area bimble-area--active" : "bimble-area"}
          >
            <div className="bimble-cards">
              <GuruCards
                activeId={visibleId}
                onSelect={handleSelect}
                onPageChange={close}
                teachers={visibleTeachers}
                closingId={closingId}
                emptyState={
                  <div
                    className="flex flex-col items-center justify-center bg-white"
                    style={{
                      minHeight: `calc(${cqm(209)} * 3)`,
                      border: `${cqm(2)} solid #c9cef4`,
                      borderRadius: cqm(16),
                      padding: cqm(40),
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: cqm(40), lineHeight: 1.3 }}>🔍</span>
                    <p
                      className="font-bold"
                      style={{
                        fontSize: cqm(32),
                        color: "#1c1451",
                        marginTop: cqm(16),
                        marginBottom: 0,
                      }}
                    >
                      Guru tidak ditemukan
                    </p>
                    <p
                      className="font-normal"
                      style={{
                        fontSize: cqm(26),
                        color: "#7e7e7e",
                        marginTop: cqm(8),
                        marginBottom: 0,
                      }}
                    >
                      Coba ubah kata kunci atau pilih mata pelajaran lain.
                    </p>
                  </div>
                }
                panelNode={
                  visible ? (
                    <TeacherPanel t={visible} onClose={close} />
                  ) : undefined
                }
              />
            </div>
            {visible && (
              <div
                key={visible.id}
                className={`bimble-panel${isClosing ? " bimble-panel-closing" : ""}`}
              >
                <TeacherPanel t={visible} onClose={close} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
