"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  {
    model: "Legacy Annual",
    gross: 1200000,
    fees: 37800, // $1,200,000 × 0.029 + (10,000 × $0.30) = $34,800 + $3,000
    net: 1162200,
  },
  {
    model: "AlumniDeFi Monthly",
    gross: 4020000, // $1,620,000 subscription + $2,400,000 micropayments
    fees: 402000, // 10% of $4,020,000
    net: 3618000, // $4,020,000 - $402,000
  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
        <p className="font-semibold text-sm mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">${Number(entry.value).toLocaleString()}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function RevenueComparisonChart() {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Revenue Comparison</CardTitle>
        <CardDescription className="text-xs">Annual revenue by billing model</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pb-4">
        <ChartContainer
          config={{
            net: {
              label: "Net Revenue",
              color: "#3b82f6",
            },
            fees: {
              label: "Legacy Processor Fees",
              color: "#f43f5e",
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
                tick={{ fill: "#ffffff", fontSize: 11 }}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                width={50}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255, 255, 255, 0.05)" }} />
              <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "11px" }} />
              <Bar dataKey="net" fill="#3b82f6" name="Net Revenue" radius={[4, 4, 0, 0]} />
              <Bar dataKey="fees" fill="#f43f5e" name="Legacy Processor Fees" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
