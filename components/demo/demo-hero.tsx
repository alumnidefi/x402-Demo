"use client"

import { Button } from "@/components/ui/button"

export function DemoHero() {
  const scrollToLiveActivity = () => {
    const liveActivitySection = document.getElementById("live-activity")
    if (liveActivitySection) {
      liveActivitySection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative pt-24 pb-10 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Experience Pay-Per-Content in One Click.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instant access to articles, videos, and data with tiny payments instead of subscriptions.
          </p>
          <div className="flex items-center justify-center">
            <Button size="lg" variant="outline" className="font-medium bg-transparent" onClick={scrollToLiveActivity}>
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
