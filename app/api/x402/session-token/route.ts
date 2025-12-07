import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 })
    }

    // In production, validate and store the session token
    // For demo purposes, we'll just acknowledge it
    return NextResponse.json({ success: true, token })
  } catch (error) {
    console.error("[x402] Session token error:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
