import { NextResponse } from "next/server";
import { soalRepo } from "@/lib/repo/soal";

/** GET /api/soal/mapel?mode=snbt — daftar mapel per mode (pilih mapel). */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("mode") ?? undefined;
  try {
    const mapel = await soalRepo.listMapel(mode);
    return NextResponse.json({ data: mapel });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
