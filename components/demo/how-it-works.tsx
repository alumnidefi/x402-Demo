"use client"

import { Card } from "@/components/ui/card"
import { MousePointerClick, DollarSign, Zap } from "lucide-react"

export function HowItWorks() {
  const scrollToLiveActivity = () => {
    const liveActivitySection = document.getElementById("live-activity")
    if (liveActivitySection) {
      liveActivitySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-10 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-3xl font-bold text-center mb-10 cursor-pointer hover:text-primary transition-colors"
          onClick={scrollToLiveActivity}
        >
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Step cards column */}
          <div className="grid grid-cols-1 gap-6 md:flex-1">
            <Card className="p-6 text-center bg-card/50 backdrop-blur border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MousePointerClick className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Click to access content</h3>
              <p className="text-sm text-muted-foreground">User taps Read, Watch, or Download</p>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Approve a tiny payment</h3>
              <p className="text-sm text-muted-foreground">User completes a cents-level payment quickly</p>
            </Card>

            <Card className="p-6 text-center bg-card/50 backdrop-blur border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Content unlocks instantly</h3>
              <p className="text-sm text-muted-foreground">Access is immediate</p>
            </Card>
          </div>

          <div className="md:w-80 flex-shrink-0">
            <Card className="p-6 bg-card/50 backdrop-blur border-border/50 h-full">
              <h3 className="font-semibold mb-4">Why It Works Now</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">
                    Traditional processors are too expensive for micro-content
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">AlumniDeFi rails support sub-cent settlement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span className="text-muted-foreground">No logins or passwords required</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
