"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const terminalLines = [
    "The internet is quickly shifting toward a bot-dominated environment, with autonomous AI agents consuming far more content than human users. Agentic traffic surged by roughly 1,300% in early 2025, and non-human systems now make up more than half of all web traffic, signaling that AI agents—not individual subscribers—will become the primary consumers of articles, videos, transcripts, and premium updates.",
    "",
    "Since bot consumption volume is dramatically higher than human consumption, this structure can increase total site revenue by 200 to 600% or more. Even conservative analyses show that machine-driven micro-payments can easily surpass human subscription revenue, particularly in sports where real-time updates, recruiting data, highlight clips, and practice summaries are the raw material AI agents rely on.",
    "",
    "The modern web is a space where AI systems directly fetch, summarize, and reuse pay-walled information, bypassing the traditional human-driven subscription and page-view model that publishers have relied on for decades. With this shift, a pay-walled site cannot depend solely on human subscribers. It must monetize bots just as aggressively as it monetizes people.",
    "",
    "Because bots cannot subscribe or log in, the solution is to require payment on every access attempt. When an agent requests any locked asset—an article, a breakdown, a podcast transcript, or a premium video clip—the server simply issues a payment requirement before releasing the content. This turns each bot request into a revenue event.",
    "",
    "Emerging 'pay-per-crawl' tools demonstrate that publishers can reliably charge bots for access without altering their existing content, and early deployments show that bot-metered access can generate several multiples more revenue than the same content generates from humans.",
    "",
    "The key advantage is volume: bots consume at industrial scale. While a human might read a handful of articles per day, AI systems generating summaries, prediction models, and highlight outputs may ingest hundreds or thousands of assets daily. Every one of those accesses becomes monetizable.",
    "",
    "This model requires no new content formats or technical restructuring. The same pay-walled content you already create for human subscribers becomes the content that bots must pay to access. Verification exists only to confirm which agent is paying—not to restrict access. Bots are not throttled; they are monetized.",
    "",
    "As autonomous systems continue to replace human browsing, AlumniDeFi's paywall becomes the universal gateway through which both humans and bots must pass, and every bot request becomes a new, high-volume revenue stream that did not exist in the old internet.",
  ]

  return (
    <section className="relative pt-24 pb-10 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Modern payment infrastructure for digital media</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance max-w-4xl mx-auto">
              Stop losing revenue to <span className="text-primary">legacy billing</span>
            </h1>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Replace 1998 payment systems with modern architecture. Zero chargebacks. Zero friction. Built specifically
              for subscription media companies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Button size="default" className="gap-2 font-medium" asChild>
                <a href="#calculator">
                  See the Numbers
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="default" variant="outline" className="font-medium bg-transparent" asChild>
                <Link href="/demo">See Demo</Link>
              </Button>
            </div>

            <div className="pt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="space-y-1 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all hover:bg-card/50">
                <div className="text-3xl font-bold text-primary">50%+</div>
                <div className="text-xs text-muted-foreground">Revenue Lift</div>
              </div>
              <div className="space-y-1 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all hover:bg-card/50">
                <div className="text-3xl font-bold text-primary">70%</div>
                <div className="text-xs text-muted-foreground">Less Churn</div>
              </div>
              <div className="space-y-1 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all hover:bg-card/50">
                <div className="text-3xl font-bold text-primary">10%</div>
                <div className="text-xs text-muted-foreground">AlumniDeFi Fee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
