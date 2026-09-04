import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * GET /api/guru?scope=bimble (default) → guru tampilan /bimble (13 kartu, data presentasi).
 * GET /api/guru?scope=all → semua guru.
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const scope = url.searchParams.get("scope") ?? "bimble";
    const where = scope === "bimble" ? { id: { startsWith: "bimble-" } } : {};
    const gurus = await prisma.guru.findMany({
      where,
      orderBy: { nama: "asc" },
    });
    return NextResponse.json({ data: gurus });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
