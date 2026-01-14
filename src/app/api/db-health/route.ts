import { NextResponse } from "next/server";
import { dbHealthService } from "@/services/db-health.service";

export async function GET() {
  const result = await dbHealthService.checkHealth();

  if (!result.ok) {
    return NextResponse.json(result, { status: 500 });
  }

  return NextResponse.json(result);
}
