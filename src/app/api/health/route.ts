import { NextResponse } from "next/server";
import { healthService } from "@/services/health.service";

export async function GET() {
  const health = healthService.getHealth();
  return NextResponse.json(health);
}
