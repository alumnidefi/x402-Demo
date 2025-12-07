import type { Address } from "viem"
import { paymentMiddleware, type Network } from "x402-next"
import { facilitator } from "@coinbase/x402"
import { type NextRequest, NextResponse } from "next/server"

const payTo = process.env.RESOURCE_WALLET_ADDRESS as Address | undefined

if (!payTo) {
  throw new Error("RESOURCE_WALLET_ADDRESS is required to initialize the x402 paywall.")
}

const network = process.env.NETWORK as Network

if (!process.env.CDP_API_KEY_ID || !process.env.CDP_API_KEY_SECRET) {
  console.error("\n⚠️  CONFIGURATION ERROR:")
  console.error("CDP API keys are required. Add these to your environment variables:")
  console.error("  - CDP_API_KEY_ID")
  console.error("  - CDP_API_KEY_SECRET")
  console.error("\nGet your keys from: https://cdp.coinbase.com\n")
  throw new Error("CDP API keys required")
}

const routes = {
  "/demo/content/market-snapshot": {
    price: "$0.01",
    network,
    config: {
      description: "Premium market analysis reveals key trends",
      mimeType: "text/html",
    },
  },
  "/demo/content/trend-recap": {
    price: "$0.01",
    network,
    config: {
      description: "2-minute video breakdown of latest trends",
      mimeType: "text/html",
    },
  },
  "/demo/content/live-event": {
    price: "$0.01",
    network,
    config: {
      description: "Live YouTube event with industry experts",
      mimeType: "text/html",
    },
  },
  "/demo/content/data-snapshot": {
    price: "$0.01",
    network,
    config: {
      description: "Comprehensive data analysis with insights",
      mimeType: "text/html",
    },
  },
  "/demo/content/research-report": {
    price: "$0.01",
    network,
    config: {
      description: "Full 20-page research report with analysis",
      mimeType: "text/html",
    },
  },
  "/demo/content/video-breakdown": {
    price: "$0.01",
    network,
    config: {
      description: "Complete 15-minute video analysis",
      mimeType: "text/html",
    },
  },
}

const paywallConfig = {
  appName: "AlumniDeFi Sports Demo",
  appLogo: "/icon.svg",
  sessionTokenEndpoint: "/api/x402/session-token",
  cdpClientKey: "vTNwiI2OF8M5CpWwPnYBY5bif5bFAfKX",
}

const paywallHandler = paymentMiddleware(payTo, routes, facilitator, paywallConfig)

const PAID_COOKIE_PREFIX = "x402-paid-"

function resolveContentId(pathname: string) {
  const match = pathname.match(/^\/demo\/content\/([^/]+)/)
  return match ? match[1] : null
}

export async function middleware(request: NextRequest) {
  const contentId = resolveContentId(request.nextUrl.pathname)

  if (contentId) {
    const paidReceipt = request.cookies.get(`${PAID_COOKIE_PREFIX}${contentId}`)?.value
    if (paidReceipt) {
      return NextResponse.next()
    }
  }

  const response = await paywallHandler(request)

  if (contentId && response.headers.get("x-payment-response") && response.status === 200) {
    response.cookies.set({
      name: `${PAID_COOKIE_PREFIX}${contentId}`,
      value: response.headers.get("x-payment-response") ?? "",
      path: `/demo/content/${contentId}`,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60,
    })
  }

  return response
}

export const config = {
  matcher: ["/demo/content/:path*"],
  runtime: "nodejs",
}
