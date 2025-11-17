import { Address } from "viem";
import { paymentMiddleware, Network, Resource } from "x402-next";
import { NextRequest, NextResponse } from "next/server";
import { premiumArticles } from "./lib/articles";

const payTo = process.env.RESOURCE_WALLET_ADDRESS as Address | undefined;

if (!payTo) {
  throw new Error("RESOURCE_WALLET_ADDRESS is required to initialize the x402 paywall.");
}

const network = (process.env.NETWORK ?? "base-sepolia") as Network;
const facilitatorUrl = (process.env.NEXT_PUBLIC_FACILITATOR_URL ?? "https://www.x402.org/facilitator") as Resource;

console.log("[x402 config] Initialized with:");
console.log("  - payTo:", payTo);
console.log("  - network:", network);
console.log("  - facilitator:", facilitatorUrl);

const paywallConfig = {
  appName: "The Battle's End x402 Demo",
  appLogo: "/logo.svg",
  sessionTokenEndpoint: "/api/x402/session-token",
  cdpClientKey: process.env.NEXT_PUBLIC_CDP_CLIENT_KEY || "thebattlesend-demo",
};

const routes = Object.fromEntries(
  premiumArticles.map((article) => [
    `/stories/${article.slug}`,
    {
      price: article.paymentPrice,
      network,
      config: {
        description: article.excerpt,
        mimeType: "text/html",
      },
    },
  ])
);

const facilitator = { url: facilitatorUrl };

// Call paymentMiddleware directly - it returns the middleware function
const paywallHandler = paymentMiddleware(payTo, routes, facilitator, paywallConfig);

const PAID_COOKIE_PREFIX = "x402-paid-";

function resolveSlug(pathname: string) {
  const match = pathname.match(/^\/stories\/([^/]+)/);
  return match ? match[1] : null;
}

export async function middleware(request: NextRequest) {
  const slug = resolveSlug(request.nextUrl.pathname);
  if (slug) {
    const paidReceipt = request.cookies.get(`${PAID_COOKIE_PREFIX}${slug}`)?.value;
    if (paidReceipt) {
      return NextResponse.next();
    }
  }

  const response = await paywallHandler(request);

  if (slug && response.headers.get("x-payment-response") && response.status === 200) {
    response.cookies.set({
      name: `${PAID_COOKIE_PREFIX}${slug}`,
      value: response.headers.get("x-payment-response") ?? "",
      path: `/stories/${slug}`,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60,
    });
  }

  return response;
}

export const config = {
  matcher: ["/stories/:path*"],
  runtime: "nodejs",
};
