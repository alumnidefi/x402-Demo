"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, CheckCircle2, Radio, ArrowRight } from "lucide-react"

interface ContentCard {
  id: string
  title: string
  price: number
  type: string
  content: string
  href: string
}

const contentCards: ContentCard[] = [
  {
    id: "market-snapshot",
    title: "Premium Article: Market Snapshot",
    price: 0.01,
    type: "Snack Content",
    content: "This premium market analysis reveals key trends and opportunities in the digital media landscape...",
    href: "/demo/content/market-snapshot",
  },
  {
    id: "trend-recap",
    title: "Short Video Clip: Trend Recap",
    price: 0.01,
    type: "Snack Content",
    content: "Watch this 2-minute video breakdown of the latest industry trends and insights...",
    href: "/demo/content/trend-recap",
  },
  {
    id: "live-event",
    title: "Live Event: Expert Q&A Session",
    price: 0.01,
    type: "Live Event",
    content:
      "Join our live YouTube event with industry experts answering questions in real-time. Stream access includes full replay rights...",
    href: "/demo/content/live-event",
  },
  {
    id: "data-snapshot",
    title: "Data Snapshot: Key Insights",
    price: 0.01,
    type: "Medium Content",
    content: "Access comprehensive data analysis with actionable insights for your business strategy...",
    href: "/demo/content/data-snapshot",
  },
  {
    id: "research-report",
    title: "Deep-Dive Research Report",
    price: 0.01,
    type: "High-Value Content",
    content: "Full 20-page research report with detailed market analysis, forecasts, and strategic recommendations...",
    href: "/demo/content/research-report",
  },
  {
    id: "video-breakdown",
    title: "Full Video Breakdown",
    price: 0.01,
    type: "High-Value Content",
    content: "Complete 15-minute video analysis with expert commentary and visual data presentations...",
    href: "/demo/content/video-breakdown",
  },
]

export function InteractiveDemoTiles() {
  const [unlockedCards, setUnlockedCards] = useState<Set<string>>(new Set())

  const handleUnlock = (href: string, id: string) => {
    window.location.href = href
  }

  return (
    <section className="py-6 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-3">Interactive Demo</h2>
          <p className="text-muted-foreground">Click any card to unlock content with a micropayment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentCards.map((card) => {
            const isUnlocked = unlockedCards.has(card.id)
            const isLiveEvent = card.type === "Live Event"

            return (
              <Card
                key={card.id}
                className={`p-5 transition-all duration-300 ${
                  isUnlocked
                    ? "bg-emerald-950/20 border-emerald-500/30"
                    : isLiveEvent
                      ? "bg-red-950/20 border-red-500/30 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10"
                      : "bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-xs text-muted-foreground">{card.type}</div>
                        {isLiveEvent && !isUnlocked && (
                          <div className="flex items-center gap-1 text-xs text-red-500">
                            <Radio className="w-3 h-3 animate-pulse" />
                            <span>LIVE</span>
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm leading-tight">{card.title}</h3>
                    </div>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    ) : (
                      <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>

                  {isUnlocked ? (
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground leading-relaxed">{card.content}</div>
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        Read Full Content
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      className={`w-full font-medium ${isLiveEvent ? "bg-red-600 hover:bg-red-700" : ""}`}
                      onClick={() => handleUnlock(card.href, card.id)}
                    >
                      Unlock for ${card.price.toFixed(2)}
                    </Button>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
