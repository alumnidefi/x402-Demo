"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Video, FileText, BarChart3, Radio, ImageIcon, Newspaper, Activity } from "lucide-react"

const mediaCategories = [
  { icon: FileText, category: "Premium Article", price: "$0.05", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Video, category: "Video Clip", price: "$0.10", color: "text-purple-500", bg: "bg-purple-500/10" },
  { icon: BarChart3, category: "Data Snapshot", price: "$0.25", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Newspaper, category: "Full Report", price: "$1.00", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: ImageIcon, category: "Photo Gallery", price: "$0.15", color: "text-pink-500", bg: "bg-pink-500/10" },
  { icon: Radio, category: "Live Event Access", price: "$0.50", color: "text-red-500", bg: "bg-red-500/10" },
]

interface ActivityItem {
  icon: any
  category: string
  price: string
  color: string
  bg: string
  timestamp: number
}

export function LiveConsumption() {
  const [activities, setActivities] = useState<ActivityItem[]>([])

  useEffect(() => {
    const interval = setInterval(
      () => {
        const randomMedia = mediaCategories[Math.floor(Math.random() * mediaCategories.length)]
        setActivities((prev) => [{ ...randomMedia, timestamp: Date.now() }, ...prev].slice(0, 8))
      },
      Math.random() * 2000 + 2000,
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-gradient-to-br from-emerald-500/5 via-background to-background border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-emerald-500 animate-pulse" />
          <CardTitle className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            Live Media Consumption
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">Real-time micropayment activity across all content types</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">Waiting for activity...</div>
          ) : (
            activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <div
                  key={`${activity.category}-${activity.timestamp}-${index}`}
                  className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${activity.bg} to-background border border-border/50 animate-in fade-in slide-in-from-top-2 duration-300`}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${activity.bg} rounded-lg`}>
                      <Icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <span className="text-sm font-medium">{activity.category}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className={`text-sm font-bold ${activity.color}`}>{activity.price}</span>
                </div>
              )
            })
          )}
        </div>
      </CardContent>
    </Card>
  )
}
