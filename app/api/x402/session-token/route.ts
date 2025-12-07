import { type NextRequest, NextResponse } from "next/server"
import * as jose from "jose"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { destinationWalletAddress } = body

    if (!destinationWalletAddress) {
      return NextResponse.json({ error: "Missing destinationWalletAddress" }, { status: 400 })
    }

    const apiKeyId = process.env.CDP_API_KEY_ID
    const apiKeySecret = process.env.CDP_API_KEY_SECRET

    if (!apiKeyId || !apiKeySecret) {
      console.error("[v0] Missing CDP API credentials")
      return NextResponse.json({ error: "CDP API credentials not configured" }, { status: 500 })
    }

    const privateKey = await jose.importPKCS8(
      `-----BEGIN PRIVATE KEY-----\n${apiKeySecret}\n-----END PRIVATE KEY-----`,
      "ES256",
    )

    const jwt = await new jose.SignJWT({})
      .setProtectedHeader({ alg: "ES256", kid: apiKeyId, nonce: crypto.randomUUID() })
      .setIssuedAt()
      .setExpirationTime("1m")
      .sign(privateKey)

    const onrampResponse = await fetch("https://api.developer.coinbase.com/onramp/v1/token", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destinationWallets: [
          {
            address: destinationWalletAddress,
            blockchains: ["base"],
            assets: ["USDC"],
            supportedNetworks: ["base"],
          },
        ],
      }),
    })

    if (!onrampResponse.ok) {
      const errorText = await onrampResponse.text()
      console.error("[v0] Coinbase Onramp API error:", onrampResponse.status, errorText)
      return NextResponse.json(
        { error: "Failed to create onramp session", details: errorText },
        { status: onrampResponse.status },
      )
    }

    const data = await onrampResponse.json()
    return NextResponse.json({ token: data.token })
  } catch (error) {
    console.error("[v0] Session token error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
