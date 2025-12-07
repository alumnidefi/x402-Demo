"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  {
    model: "Legacy Annual",
    subscribers: 10000,
    potential: 10000,
  },
  {
    model: "AlumniDeFi Monthly",
    subscribers: 20000,
    potential: 50000,
  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
        <p className="font-semibold text-sm mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">{Number(entry.value).toLocaleString()}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function SubscriberGrowthChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Subscriber Expansion</CardTitle>
        <CardDescription className="text-xs">Current vs. potential subscriber base</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pb-4">
        <ChartContainer
          config={{
            subscribers: {
              label: "Current Subscribers",
              color: "#10b981",
            },
            potential: {
              label: "Market Potential",
              color: "#8b5cf6",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
              <XAxis
                dataKey="model"
                className="text-[10px]"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                interval={0}
                angle={-15}
                textAnchor="end"
                height={50}
              />
              <YAxis
                className="text-[10px]"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                width={50}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255, 255, 255, 0.05)" }} />
              <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "11px" }} />
              <Bar dataKey="subscribers" fill="#10b981" name="Current Subscribers" radius={[4, 4, 0, 0]} />
              <Bar dataKey="potential" fill="#8b5cf6" name="Market Potential" radius={[4, 4, 0, 0]} opacity={0.7} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
