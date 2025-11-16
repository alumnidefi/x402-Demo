import { Address } from "viem";
import { NextRequest } from "next/server";
import { paymentMiddleware, Network } from "x402-next";

const payTo = process.env.RESOURCE_WALLET_ADDRESS as Address | undefined;

if (!payTo) {
  throw new Error("RESOURCE_WALLET_ADDRESS is required to initialize the x402 paywall.");
}

const network = (process.env.NETWORK ?? "base-sepolia") as Network;
const facilitatorUrl = process.env.NEXT_PUBLIC_FACILITATOR_URL ?? "https://x402.org/facilitator";

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

const routes = {
  "/stories/:path*": {
    price: "$1.00",
    network,
    config: {
      description: "Access to a tactical briefing with The Battle's End newsroom",
      mimeType: "text/html",
    },
  },
};

const facilitator = { url: facilitatorUrl as `${string}://${string}` };

const paywall = paymentMiddleware(payTo, routes, facilitator, paywallConfig);

export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl?.pathname || "unknown";
  try {
    console.log(`[x402 paywall] Processing: ${pathname}`);
    const response = await paywall(request);
    console.log(`[x402 paywall] ✓ Paywall middleware executed for: ${pathname}`);
    return response;
  } catch (err) {
    console.error(`[x402 paywall] ✗ Error processing ${pathname}:`, err instanceof Error ? err.message : String(err));
    throw err;
  }
};

export const config = {
  matcher: ["/stories/:path*"],
  runtime: "nodejs",
};
