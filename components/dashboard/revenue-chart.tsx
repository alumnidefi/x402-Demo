"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { TrendingUp } from "lucide-react"

export function RevenueChart() {
  const [data, setData] = useState([
    { time: "Week 1", articles: 4000, videos: 3500, data: 2800, reports: 2100, live: 1800 },
    { time: "Week 2", articles: 5900, videos: 4800, data: 3600, reports: 2900, live: 2400 },
    { time: "Week 3", articles: 7400, videos: 6500, data: 4200, reports: 3500, live: 3300 },
    { time: "Week 4", articles: 9600, videos: 8100, data: 5100, reports: 4400, live: 4100 },
    { time: "This Week", articles: 11500, videos: 10200, data: 6300, reports: 5300, live: 4900 },
  ])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev]
        const lastPoint = newData[newData.length - 1]
        newData[newData.length - 1] = {
          ...lastPoint,
          articles: lastPoint.articles + Math.floor(Math.random() * 120) + 60,
          videos: lastPoint.videos + Math.floor(Math.random() * 100) + 50,
          data: lastPoint.data + Math.floor(Math.random() * 80) + 40,
          reports: lastPoint.reports + Math.floor(Math.random() * 60) + 30,
          live: lastPoint.live + Math.floor(Math.random() * 70) + 35,
        }
        return newData
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`
    }
    return `$${value}`
  }

  const currentWeekTotal = data[data.length - 1]
    ? Object.entries(data[data.length - 1])
        .filter(([key]) => key !== "time")
        .reduce((sum, [, value]) => sum + (value as number), 0)
    : 0

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-semibold mb-2">{payload[0]?.payload?.time}</p>
          {payload.reverse().map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.stroke }} />
                <span className="capitalize">
                  {entry.dataKey === "live"
                    ? "Live Events"
                    : entry.dataKey === "reports"
                      ? "Full Reports"
                      : entry.dataKey === "videos"
                        ? "Video Clips"
                        : entry.dataKey === "data"
                          ? "Data"
                          : "Articles"}
                </span>
              </div>
              <span className="font-medium">${entry.value.toLocaleString()}</span>
            </div>
          ))}
          <div className="border-t border-border mt-2 pt-2 flex justify-between">
            <span className="text-xs font-semibold">Total:</span>
            <span className="text-xs font-semibold">
              ${payload.reduce((sum: number, entry: any) => sum + entry.value, 0).toLocaleString()}
            </span>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="bg-gradient-to-br from-slate-500/5 via-background to-background border-border/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-slate-400 to-cyan-500 bg-clip-text text-transparent">
                Revenue Trend
              </span>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Weekly revenue by content type</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Total This Week</p>
              <p className="text-lg font-bold text-cyan-400">${(currentWeekTotal / 1000).toFixed(0)}K</p>
            </div>
            <TrendingUp className="h-5 w-5 text-cyan-500" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.95)",
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis dataKey="time" stroke="hsl(var(--foreground))" fontSize={12} tick={{ fill: "#ffffff" }} />
              <YAxis
                stroke="hsl(var(--foreground))"
                fontSize={12}
                tickFormatter={formatYAxis}
                tick={{ fill: "#ffffff" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="colorArticles" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(100, 116, 139)" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="rgb(100, 116, 139)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorVideos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(59, 130, 246)" stopOpacity={1} />
                  <stop offset="95%" stopColor="rgb(59, 130, 246)" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(20, 184, 166)" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="rgb(20, 184, 166)" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(6, 182, 212)" stopOpacity={0.85} />
                  <stop offset="95%" stopColor="rgb(6, 182, 212)" stopOpacity={0.25} />
                </linearGradient>
                <linearGradient id="colorLive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(251, 191, 36)" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="rgb(251, 191, 36)" stopOpacity={0.25} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="articles"
                stackId="1"
                stroke="rgba(255, 255, 255, 0.3)"
                fill="url(#colorArticles)"
                strokeWidth={1}
                strokeLinecap="round"
              />
              <Area
                type="monotone"
                dataKey="videos"
                stackId="1"
                stroke="rgba(255, 255, 255, 0.4)"
                fill="url(#colorVideos)"
                strokeWidth={1}
                strokeLinecap="round"
              />
              <Area
                type="monotone"
                dataKey="data"
                stackId="1"
                stroke="rgba(255, 255, 255, 0.4)"
                fill="url(#colorData)"
                strokeWidth={1}
                strokeLinecap="round"
              />
              <Area
                type="monotone"
                dataKey="reports"
                stackId="1"
                stroke="rgba(255, 255, 255, 0.4)"
                fill="url(#colorReports)"
                strokeWidth={1}
                strokeLinecap="round"
              />
              <Area
                type="monotone"
                dataKey="live"
                stackId="1"
                stroke="rgba(255, 255, 255, 0.5)"
                fill="url(#colorLive)"
                strokeWidth={1}
                strokeLinecap="round"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-slate-500" />
            <span>Articles</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-blue-500" />
            <span>Video Clips</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-teal-500" />
            <span>Data</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-cyan-500" />
            <span>Full Reports</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-amber-500" />
            <span>Live Events</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
