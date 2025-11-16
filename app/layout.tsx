import "./globals.css";

import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "The Battle's End — Premium Dispatches",
  description:
    "A Battle's End inspired paywall for recruiting, basketball, and investigative dispatches. Explore tiered membership and pay-per-article drops.",
  keywords: ["paywall", "battle", "the battles end", "membership", "premium media"],
  openGraph: {
    title: "The Battle's End Premium Dispatches",
    description:
      "Pay for premium storytelling, membership tiers, and curated paywall drops inspired by Battle's End.",
    url: "https://thebattlesend-demo.vercel.app",
    siteName: "The Battle's End Premium Dispatches",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
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
