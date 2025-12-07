"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import Link from "next/link"

export default function TrendRecapPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <article className="container mx-auto max-w-4xl px-6 py-24">
        <Link href="/demo">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Demo
          </Button>
        </Link>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="text-sm text-blue-400 font-medium">Video Content · $0.10</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Short Video: Industry Trends Recap</h1>
            <p className="text-xl text-muted-foreground">
              2-minute breakdown of the latest developments in digital media monetization
            </p>
          </div>

          {/* Video Player Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border border-border/50">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500">
                <Play className="w-10 h-10 text-blue-400 ml-1" />
              </div>
              <p className="text-sm text-muted-foreground">Video Player</p>
            </div>
          </div>

          <div className="h-px bg-border my-8" />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Video Transcript</h2>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                <span className="text-blue-400 font-mono text-sm mr-3">[00:00]</span>
                The digital media industry is at an inflection point. After a decade of subscription dominance, we're
                seeing the emergence of something entirely new.
              </p>

              <p>
                <span className="text-blue-400 font-mono text-sm mr-3">[00:15]</span>
                Micropayments aren't a new concept, but the technology has finally caught up to the vision. Blockchain
                infrastructure, instant settlement, and near-zero transaction fees have made true pay-per-content models
                economically viable for the first time.
              </p>

              <p>
                <span className="text-blue-400 font-mono text-sm mr-3">[00:32]</span>
                Here's what's driving adoption: subscription fatigue is real. The average consumer is maxed out at 4-6
                subscriptions. Publishers launching micropayment options are seeing conversion rates 3-5x higher than
                traditional paywalls.
              </p>

              <p>
                <span className="text-blue-400 font-mono text-sm mr-3">[00:48]</span>
                But the real story is AI agents. They now represent 30-40% of traffic to premium content, and they don't
                subscribe—they consume and extract at scale. Micropayment APIs are the only way to monetize this massive
                and growing audience.
              </p>

              <p>
                <span className="text-blue-400 font-mono text-sm mr-3">[01:05]</span>
                Early data from publishers who've implemented hybrid models shows dramatic results: 120-150% revenue
                increases within the first year, higher audience satisfaction, and entirely new revenue streams from AI
                agent traffic.
              </p>

              <p>
                <span className="text-blue-400 font-mono text-sm mr-3">[01:23]</span>
                The transformation is happening now. Publishers who move quickly will establish network effects and
                capture disproportionate value. Those who wait risk becoming obsolete as consumption patterns shift
                permanently.
              </p>

              <p>
                <span className="text-blue-400 font-mono text-sm mr-3">[01:42]</span>
                The future of digital media isn't subscription-only or micropayment-only—it's giving audiences choice
                and capturing value from every type of consumer, human and artificial. That's the trend that matters
                most in 2025.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
