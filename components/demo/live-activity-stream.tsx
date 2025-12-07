"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const activities = [
  { text: "User unlocked Premium Article", amount: "$0.05" },
  { text: "User purchased Video Clip", amount: "$0.10" },
  { text: "User accessed Data Snapshot", amount: "$0.25" },
  { text: "User unlocked Full Report", amount: "$1.00" },
  { text: "User purchased Research Brief", amount: "$0.50" },
  { text: "User accessed Live Event Replay", amount: "$0.75" },
]

export function LiveActivityStream() {
  const [visibleActivities, setVisibleActivities] = useState<typeof activities>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleActivities((prev) => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)]
        const newActivities = [randomActivity, ...prev].slice(0, 6)
        return newActivities
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="live-activity" className="py-10 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">Live Activity</h2>

        <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
          <div className="space-y-3">
            {visibleActivities.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">Watching for activity...</div>
            ) : (
              visibleActivities.map((activity, index) => (
                <div
                  key={`${activity.text}-${index}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 animate-in fade-in slide-in-from-top-2 duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm">{activity.text}</span>
                  </div>
                  <span className="text-sm font-medium text-primary">{activity.amount}</span>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
