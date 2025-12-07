"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, Video, FileText, BarChart3, Newspaper, ImageIcon, Radio } from "lucide-react"

interface MediaStat {
  icon: any
  category: string
  revenue: number
  count: number
  color: string
  gradient: string
}

export function MediaLeaderboard() {
  const [mediaStats, setMediaStats] = useState<MediaStat[]>([
    {
      icon: Video,
      category: "Video Clips",
      revenue: 12450,
      count: 1245,
      color: "text-slate-400",
      gradient: "from-slate-500/10",
    },
    {
      icon: Newspaper,
      category: "Full Reports",
      revenue: 9800,
      count: 98,
      color: "text-slate-500",
      gradient: "from-slate-600/10",
    },
    {
      icon: BarChart3,
      category: "Data Snapshots",
      revenue: 8750,
      count: 350,
      color: "text-cyan-500",
      gradient: "from-cyan-500/10",
    },
    {
      icon: FileText,
      category: "Articles",
      revenue: 6200,
      count: 1240,
      color: "text-blue-500",
      gradient: "from-blue-500/10",
    },
    {
      icon: Radio,
      category: "Live Events",
      revenue: 4500,
      count: 90,
      color: "text-sky-500",
      gradient: "from-sky-500/10",
    },
    {
      icon: ImageIcon,
      category: "Photo Galleries",
      revenue: 3100,
      count: 206,
      color: "text-teal-500",
      gradient: "from-teal-500/10",
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMediaStats((prev) =>
        prev
          .map((stat) => {
            const increment = Math.floor(Math.random() * 50) + 10
            const countIncrement = Math.floor(Math.random() * 3) + 1
            return {
              ...stat,
              revenue: stat.revenue + increment,
              count: stat.count + countIncrement,
            }
          })
          .sort((a, b) => b.revenue - a.revenue),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="bg-gradient-to-br from-slate-500/5 via-background to-background border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span className="bg-gradient-to-r from-slate-400 to-cyan-500 bg-clip-text text-transparent">
                Media Leaderboard
              </span>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Top performing content by revenue</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mediaStats.map((stat, index) => {
            const Icon = stat.icon
            const rankColors = ["text-yellow-500", "text-slate-400", "text-amber-700"]
            const rankColor = index < 3 ? rankColors[index] : "text-muted-foreground"

            return (
              <div
                key={stat.category}
                className={`flex items-center justify-between p-3 rounded-lg bg-gradient-to-r ${stat.gradient} to-background border border-border/50 transition-all duration-500`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg font-bold ${rankColor} w-6`}>#{index + 1}</span>
                  <div className={`p-2 bg-background/50 rounded-lg`}>
                    <Icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{stat.category}</div>
                    <div className="text-xs text-muted-foreground">{stat.count.toLocaleString()} transactions</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${stat.color}`}>{formatCurrency(stat.revenue)}</div>
                  <div className="flex items-center gap-1 justify-end">
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                    <span className="text-xs text-emerald-500">Live</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
