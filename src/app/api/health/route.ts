import { NextResponse } from "next/server";
import { healthService } from "@/services/health.service";

export async function GET() {
  try {
    const health = healthService.getHealth();
    return NextResponse.json(health);
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Internal server error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
