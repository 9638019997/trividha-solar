import { NextResponse } from "next/server";
import { SolarOcrProcessor } from "@/lib/ai/ocr-service";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const result = await SolarOcrProcessor.processElectricityBill(
      Buffer.from(body.fileBase64 || "", "base64"),
      body.mimeType || "application/pdf"
    );
    return NextResponse.json({ ok: true, data: result });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
