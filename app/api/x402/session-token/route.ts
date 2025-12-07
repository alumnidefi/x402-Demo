import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { walletAddress } = body

    if (!walletAddress) {
      return NextResponse.json({ error: "Wallet address is required" }, { status: 400 })
    }

    const cdpApiKey = process.env.CDP_API_KEY_ID
    const cdpApiSecret = process.env.CDP_API_KEY_SECRET

    if (!cdpApiKey || !cdpApiSecret) {
      console.error("[x402] CDP API keys not configured for onramp")
      return NextResponse.json({ error: "Onramp not configured" }, { status: 500 })
    }

    // Generate JWT for CDP API authentication
    const jwt = await generateCDPJWT(cdpApiKey, cdpApiSecret)

    // Call Coinbase Onramp API to create session token
    const onrampResponse = await fetch("https://api.developer.coinbase.com/onramp/v1/token", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destinationWallets: [
          {
            address: walletAddress,
            blockchains: ["base"],
            assets: ["USDC"],
            supportedNetworks: ["base"],
          },
        ],
      }),
    })

    if (!onrampResponse.ok) {
      const errorText = await onrampResponse.text()
      console.error("[x402] Onramp API error:", errorText)
      return NextResponse.json({ error: "Failed to create onramp session" }, { status: 500 })
    }

    const onrampData = await onrampResponse.json()

    return NextResponse.json({
      token: onrampData.token,
      channelId: onrampData.channelId,
    })
  } catch (error) {
    console.error("[x402] Session token error:", error)
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}

async function generateCDPJWT(apiKeyName: string, privateKey: string): Promise<string> {
  const header = {
    alg: "ES256",
    typ: "JWT",
    kid: apiKeyName,
  }

  const payload = {
    sub: apiKeyName,
    iss: "coinbase-cloud",
    aud: ["cdp_service"],
    nbf: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60,
  }

  // Import crypto for JWT signing
  const crypto = await import("crypto")

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString("base64url")
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url")
  const message = `${encodedHeader}.${encodedPayload}`

  const sign = crypto.createSign("SHA256")
  sign.update(message)
  sign.end()

  const signature = sign.sign(privateKey, "base64url")

  return `${message}.${signature}`
}
