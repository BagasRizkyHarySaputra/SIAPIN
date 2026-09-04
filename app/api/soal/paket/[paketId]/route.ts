import { NextResponse } from "next/server";
import { soalRepo } from "@/lib/repo/soal";

/**
 * GET /api/soal/paket/[paketId] — satu paket lengkap beserta soalnya.
 * Dipakai halaman pengerjaan soal.
 */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ paketId: string }> }
) {
  const { paketId } = await ctx.params;
  try {
    const paket = await prismaFindPaket(paketId);
    if (!paket) return NextResponse.json({ error: "Paket tidak ditemukan" }, { status: 404 });
    return NextResponse.json({ data: paket });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

async function prismaFindPaket(paketId: string) {
  const { prisma } = await import("@/lib/db");
  return prisma.paketSoal.findUnique({
    where: { id: paketId },
    include: {
      mapel: true,
      soal: { orderBy: { no: "asc" } },
    },
  });
}
