import { NextResponse } from "next/server"

export const dynamic = "force-static"

export function GET() {
  return new NextResponse("77448228", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
