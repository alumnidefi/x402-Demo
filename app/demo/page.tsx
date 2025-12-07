"use client"
import { DemoHero } from "@/components/demo/demo-hero"
import { InteractiveDemoTiles } from "@/components/demo/interactive-demo-tiles"
import { MicropaymentCalculator } from "@/components/demo/micropayment-calculator"
import { PodcastWorkflow } from "@/components/demo/podcast-workflow"
import { YouTubeWorkflow } from "@/components/demo/youtube-workflow"
import { UseCases } from "@/components/demo/use-cases"
import { LiveActivityStream } from "@/components/demo/live-activity-stream"
import { DemoFinalCTA } from "@/components/demo/demo-final-cta"
import { Navigation } from "@/components/navigation"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <DemoHero />
      <InteractiveDemoTiles />
      <MicropaymentCalculator />
      <PodcastWorkflow />
      <YouTubeWorkflow />
      <UseCases />
      <LiveActivityStream />
      <DemoFinalCTA />
    </main>
  )
}
