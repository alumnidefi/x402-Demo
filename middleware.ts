import type { Address } from "viem"
import { paymentMiddleware, type Network, type Resource } from "x402-next"
import { type NextRequest, NextResponse } from "next/server"

const payTo = process.env.RESOURCE_WALLET_ADDRESS as Address | undefined

if (!payTo) {
  throw new Error("RESOURCE_WALLET_ADDRESS is required to initialize the x402 paywall.")
}

const network = (process.env.NETWORK || "base") as Network
const facilitatorUrl = (process.env.NEXT_PUBLIC_FACILITATOR_URL ?? "https://www.x402.org/facilitator") as Resource

const paywallConfig = {
  appName: "AlumniDeFi Sports Demo",
  appLogo: "/icon.svg",
  sessionTokenEndpoint: "/api/x402/session-token",
  cdpClientKey: "alumnidefi-sports-demo",
}

const routes = {
  "/demo/content/market-snapshot": {
    price: "10000", // 0.01 in smallest units
    network,
    config: {
      description: "Premium market analysis reveals key trends",
      mimeType: "text/html",
    },
  },
  "/demo/content/trend-recap": {
    price: "10000",
    network,
    config: {
      description: "2-minute video breakdown of latest trends",
      mimeType: "text/html",
    },
  },
  "/demo/content/live-event": {
    price: "10000",
    network,
    config: {
      description: "Live YouTube event with industry experts",
      mimeType: "text/html",
    },
  },
  "/demo/content/data-snapshot": {
    price: "10000",
    network,
    config: {
      description: "Comprehensive data analysis with insights",
      mimeType: "text/html",
    },
  },
  "/demo/content/research-report": {
    price: "10000",
    network,
    config: {
      description: "Full 20-page research report with analysis",
      mimeType: "text/html",
    },
  },
  "/demo/content/video-breakdown": {
    price: "10000",
    network,
    config: {
      description: "Complete 15-minute video analysis",
      mimeType: "text/html",
    },
  },
}

const facilitator = { url: facilitatorUrl }

const paywallHandler = paymentMiddleware(payTo, routes, facilitator, paywallConfig)

const PAID_COOKIE_PREFIX = "x402-paid-"

function resolveContentId(pathname: string) {
  const match = pathname.match(/^\/demo\/content\/([^/]+)/)
  return match ? match[1] : null
}

export async function middleware(request: NextRequest) {
  try {
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
  } catch (error) {
    console.error("[v0] Middleware error:", error)
    console.error("[v0] Error stack:", error instanceof Error ? error.stack : "No stack trace")

    // Return a proper error response instead of crashing
    return new NextResponse(
      JSON.stringify({
        error: "Payment system temporarily unavailable",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}

export const config = {
  matcher: ["/demo/content/:path*"],
  runtime: "nodejs",
}
