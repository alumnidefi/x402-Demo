import { Address } from "viem";
import { NextRequest } from "next/server";
import { paymentMiddleware, Network, Resource } from "x402-next";

const payTo = process.env.RESOURCE_WALLET_ADDRESS as Address | undefined;

if (!payTo) {
  throw new Error("RESOURCE_WALLET_ADDRESS is required to initialize the x402 paywall.");
}

const network = (process.env.NETWORK ?? "base-sepolia") as Network;
const sessionTokenEndpoint = process.env.NEXT_PUBLIC_X402_SESSION_TOKEN_PATH ?? "/api/x402/session-token";
const facilitatorUrl = process.env.NEXT_PUBLIC_FACILITATOR_URL as Resource | undefined;

const paywallConfig = {
  appName: "The Battle's End x402 Demo",
  appLogo: "/logo.svg",
  sessionTokenEndpoint,
  cdpClientKey: process.env.NEXT_PUBLIC_CDP_CLIENT_KEY,
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

const facilitator = facilitatorUrl ? { url: facilitatorUrl } : undefined;

const paywall = paymentMiddleware(payTo, routes, facilitator, paywallConfig);

export const middleware = (request: NextRequest) => {
  request.headers.delete("x-payment");
  return paywall(request);
};

export const config = {
  matcher: ["/stories/:path*"],
};
