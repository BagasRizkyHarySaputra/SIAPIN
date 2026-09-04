import { prisma } from "@/lib/db";
import BimbleClient from "./bimble-client";
import { TEACHERS } from "@/lib/data/teachers";
import type { BimbleTeacher } from "@/components/features/bimble/bimble-section";

/**
 * Server component — guru kartu diambil dari DATABASE (tabel Guru, id "bimble-*").
 * Urutan mengikuti TEACHERS (desain). Layout sepenuhnya di BimbleClient (1:1 Figma).
 */
export default async function BimblePage() {
  let teachers: BimbleTeacher[] = [];
  try {
    const rows = await prisma.guru.findMany({
      where: { id: { startsWith: "bimble-" } },
    });
    // urut sesuai urutan TEACHERS (desain), bukan alfabet
    const order = new Map(TEACHERS.map((t, i) => [t.id, i]));
    rows.sort((a, b) => {
      const ia = order.get(a.id.replace(/^bimble-/, "")) ?? 999;
      const ib = order.get(b.id.replace(/^bimble-/, "")) ?? 999;
      return ia - ib;
    });
    teachers = rows.map((g) => {
      let stars: number[] = [];
      try {
        stars = JSON.parse(g.stars ?? "[]");
      } catch {
        stars = [];
      }
      return {
        id: g.id.replace(/^bimble-/, ""),
        name: g.nama,
        subject: g.bidang,
        siswa: g.siswaLabel ?? "",
        bg: g.bg ?? "#e3aec2",
        shadow: g.shadow ?? "#d77d9f",
        avatar: g.avatarPath ?? "/visual/bimble/guru-pudjo.png",
        stars,
      };
    });
  } catch {
    teachers = [];
  }
  return <BimbleClient teachers={teachers} />;
}
