import { NextResponse } from "next/server";
import { authService } from "@/services/auth.service";

export async function GET() {
  const user = await authService.getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(user);
}
