import "./globals.css";

import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "The Battle's End — x402 Paywall Demo",
  description:
    "An x402-powered newsstand modeled after The Battle's End. Explore memberships, pay-per-article access, and live payments in test mode.",
  keywords: [
    "x402",
    "paywall",
    "battle",
    "the battles end",
    "nextjs",
    "membership",
    "crypto payments",
  ],
  openGraph: {
    title: "The Battle's End x402 Demo",
    description:
      "Pay for premium storytelling with x402, complete with membership tiers and a live test facilitator endpoint.",
    url: "https://thebattlesend-demo.vercel.app",
    siteName: "The Battle's End x402 Demo",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
