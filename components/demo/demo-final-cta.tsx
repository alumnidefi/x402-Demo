"use client"

import { Button } from "@/components/ui/button"

export function DemoFinalCTA() {
  return (
    <section className="relative py-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 opacity-50" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Add Pay-Per-Content to Your Site in Minutes.</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Keep your subscriptions and unlock a new revenue stream from the rest of your audience.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="font-medium">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
