"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function MicropaymentCalculator() {
  const [visitors, setVisitors] = useState(1000000)
  const [percent, setPercent] = useState(20)
  const [avgSpend, setAvgSpend] = useState(1.5)

  const [visitorsDisplay, setVisitorsDisplay] = useState("1,000,000")

  const participatingUsers = visitors * (percent / 100)
  const monthlyRevenue = participatingUsers * avgSpend
  const lift = monthlyRevenue // This equals subscription revenue, doubling total

  const handleVisitorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, "")
    if (!isNaN(Number(value)) && value !== "") {
      setVisitors(Number(value))
      setVisitorsDisplay(Number(value).toLocaleString("en-US"))
    } else if (value === "") {
      setVisitors(0)
      setVisitorsDisplay("")
    }
  }

  return (
    <section className="py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
          <h2 className="text-2xl font-bold mb-6">Revenue Calculator</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <Label htmlFor="visitors" className="text-sm">
                Monthly Visitors
              </Label>
              <Input
                id="visitors"
                type="text"
                value={visitorsDisplay}
                onChange={handleVisitorsChange}
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="percent" className="text-sm">
                % Using Micropayments
              </Label>
              <Input
                id="percent"
                type="number"
                value={percent}
                onChange={(e) => setPercent(Number(e.target.value) || 0)}
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="spend" className="text-sm">
                Avg. Spend per User
              </Label>
              <Input
                id="spend"
                type="number"
                step="0.10"
                value={avgSpend}
                onChange={(e) => setAvgSpend(Number(e.target.value) || 0)}
                className="bg-background/50"
              />
            </div>
          </div>

          <div className="space-y-3 p-6 rounded-lg bg-primary/10 border border-primary/20">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Projected Micropayment Revenue</span>
              <span className="text-3xl font-bold text-primary">
                ${monthlyRevenue.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                <span className="text-base text-muted-foreground">/month</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Micropayments can double your revenue (2x multiplier)</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
