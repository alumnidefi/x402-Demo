"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import Link from "next/link"

export default function VideoBreakdownPage() {
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
            <div className="text-sm text-blue-400 font-medium">Video Analysis · $1.00</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Complete Video Breakdown: Implementing Micropayments at Scale
            </h1>
            <p className="text-xl text-muted-foreground">
              15-minute deep-dive with expert commentary, visual data presentations, and step-by-step implementation
              guide
            </p>
          </div>

          {/* Video Player Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-blue-950/50 to-gray-900 rounded-lg overflow-hidden border border-border/50">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500">
                <Play className="w-12 h-12 text-blue-400 ml-1" />
              </div>
              <p className="text-sm text-muted-foreground">15:42 Video · High Quality</p>
            </div>
          </div>

          <div className="h-px bg-border my-8" />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Video Overview</h2>
            <p className="text-foreground/90 leading-relaxed">
              This comprehensive video breakdown provides everything publishers need to understand, evaluate, and
              implement micropayment infrastructure. Featuring visual data presentations, animated architecture
              diagrams, and real-world implementation examples from successful publishers.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-card/30 backdrop-blur border border-border/50 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Chapter 1 (0:00 - 3:15)</div>
                <div className="text-sm text-muted-foreground">
                  Market context and the subscription saturation crisis
                </div>
              </div>
              <div className="bg-card/30 backdrop-blur border border-border/50 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Chapter 2 (3:15 - 6:30)</div>
                <div className="text-sm text-muted-foreground">Technology infrastructure and how it works</div>
              </div>
              <div className="bg-card/30 backdrop-blur border border-border/50 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Chapter 3 (6:30 - 10:00)</div>
                <div className="text-sm text-muted-foreground">
                  AI agent monetization opportunity and implementation
                </div>
              </div>
              <div className="bg-card/30 backdrop-blur border border-border/50 rounded-lg p-4">
                <div className="text-sm font-medium mb-2">Chapter 4 (10:00 - 15:42)</div>
                <div className="text-sm text-muted-foreground">
                  Step-by-step implementation roadmap and best practices
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12">Full Transcript</h2>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold mb-3">Chapter 1: The Market Opportunity (0:00 - 3:15)</h3>
                <p>
                  Let's start with the numbers that matter. The average consumer is subscribed to 4.2 paid services,
                  down from 5.7 just two years ago. Sixty-eight percent report they've hit their personal subscription
                  limit. This isn't temporary—it's a structural market saturation that fundamentally changes publisher
                  economics.
                </p>
                <p className="mt-3">
                  For publishers, this manifests as spiraling customer acquisition costs—up 34% year-over-year—and
                  declining retention. The subscription-only model has reached its ceiling. Publishers need new
                  monetization strategies that work with consumer behavior, not against it.
                </p>
                <p className="mt-3">
                  Enter micropayments. Instead of asking consumers to commit $120 annually, you're offering a $0.10
                  article, a $0.25 data snapshot, a $1 video. No commitment, no friction, just instant value exchange.
                  Early adopters are seeing conversion rates 4-5x higher than traditional paywalls.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Chapter 2: Technology That Finally Works (3:15 - 6:30)</h3>
                <p>
                  Previous micropayment attempts failed because the technology wasn't ready. Transaction fees made small
                  payments economically impossible. You can't profitably process a $0.10 transaction when the payment
                  processor charges $0.30 plus 2.9%.
                </p>
                <p className="mt-3">
                  Modern infrastructure has solved this. Layer-2 blockchain solutions reduce transaction costs to
                  fractions of a cent. You can profitably process a $0.05 transaction with better unit economics than
                  traditional processors. Instant settlement provides real-time liquidity, and modern wallets offer user
                  experiences that match or exceed traditional checkout flows.
                </p>
                <p className="mt-3">
                  The architecture is straightforward: Publishers integrate a simple API, users authenticate with
                  biometric wallets, and payments settle instantly on-chain. The entire stack is battle-tested,
                  scalable, and ready for mainstream adoption.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Chapter 3: The AI Agent Revolution (6:30 - 10:00)</h3>
                <p>
                  Here's the opportunity most publishers are missing: AI agents now represent 30-40% of traffic to
                  premium content sites. These agents don't browse, don't click ads, and don't subscribe. They extract,
                  summarize, and repurpose content at scale.
                </p>
                <p className="mt-3">
                  For publishers without micropayment APIs, this traffic generates zero revenue. It's worse than
                  zero—you're paying bandwidth and infrastructure costs to serve content that generates no return.
                  Publishers with agent-friendly payment infrastructure are monetizing this traffic for the first time.
                </p>
                <p className="mt-3">
                  The numbers are significant. Publishers with micropayment APIs generate an average of $47,000 monthly
                  from AI agent traffic that was previously unmonetized. As agent traffic grows to 60-70% by 2027, this
                  represents a massive and growing revenue stream that most publishers haven't even recognized exists.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Chapter 4: Implementation Roadmap (10:00 - 15:42)</h3>
                <p>
                  Implementation is simpler than most publishers expect. Modern platforms handle the complexity—wallet
                  infrastructure, payment processing, transaction settlement—so you can focus on content strategy and
                  pricing optimization.
                </p>
                <p className="mt-3">
                  The typical timeline is 2-6 weeks from decision to launch. Week one: technical integration and
                  testing. Week two through four: content strategy, pricing experimentation, and user experience
                  optimization. Weeks five and six: marketing launch and iteration based on early data.
                </p>
                <p className="mt-3">
                  Best practices from successful publishers: Start with high-value content that offers clear, immediate
                  value. Price aggressively low—your goal is volume and habit formation. Offer bundle options and volume
                  discounts. Prominently feature micropayment options alongside traditional subscriptions to maximize
                  choice and revenue.
                </p>
                <p className="mt-3">
                  The data is clear: Publishers implementing hybrid subscription plus micropayment models see 120-150%
                  revenue increases within 12 months. The transformation is happening now. The question isn't whether to
                  implement micropayments, but how quickly you can move to capture first-mover advantages before the
                  market becomes saturated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
