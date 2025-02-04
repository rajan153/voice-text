import { databaseConnectionSystem } from "@/src/config/Database";
import { NextRequest, NextResponse } from "next/server";

databaseConnectionSystem();

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}
