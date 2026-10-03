import { NextResponse } from "next/server";
import { AutomationEngine } from "@/lib/automation/workflow-engine";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = parseFloat(searchParams.get("lat") || "21.1702");
  const lng = parseFloat(searchParams.get("lng") || "72.8311");

  const insolation = await AutomationEngine.fetchSolarInsolationData(lat, lng);
  return NextResponse.json({ ok: true, data: insolation });
}
