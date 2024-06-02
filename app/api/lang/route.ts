import { NextRequest, NextResponse } from "next/server"

let language: string = "XX"

export async function GET() {
  return NextResponse.json({
    language,
  })
}
