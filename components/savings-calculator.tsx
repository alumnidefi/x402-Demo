"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, TrendingUp } from "lucide-react"

export function SavingsCalculator() {
  const [subscribers, setSubscribers] = useState("10000")

  const ANNUAL_PRICE = 120
  const MONTHLY_PRICE = 12
  const ACTIVE_MONTHS = 9

  const getMicropaymentRate = (subs: number): number => {
    if (subs <= 10000) return 4
    if (subs <= 50000) return 5
    if (subs <= 150000) return 6
    return 8
  }

  const formatWithCommas = (value: string) => {
    const num = value.replace(/,/g, "")
    if (!num) return ""
    return Number(num).toLocaleString()
  }

  const handleSubscribersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "")
    if (rawValue === "" || /^\d+$/.test(rawValue)) {
      setSubscribers(rawValue)
    }
  }

  const calculations = useMemo(() => {
    const subs = Number(subscribers) || 0

    const annualSubs = Math.round(subs * 0.5)
    const monthlySubs = Math.round(subs * 0.5)

    // Current Subscription Model
    const annualRevenue = annualSubs * ANNUAL_PRICE
    const monthlyRevenue = monthlySubs * ACTIVE_MONTHS * MONTHLY_PRICE
    const legacyGross = annualRevenue + monthlyRevenue

    // Processor fees: 2.9% + $0.30 per transaction
    const annualTransactions = annualSubs
    const monthlyTransactions = monthlySubs * ACTIVE_MONTHS
    const annualFees = annualRevenue * 0.029 + annualTransactions * 0.3
    const monthlyFees = monthlyRevenue * 0.029 + monthlyTransactions * 0.3
    const legacyFees = annualFees + monthlyFees
    const legacyNet = legacyGross - legacyFees

    const micropaymentRate = getMicropaymentRate(subs)
    const monthlyMicropayments = subs * micropaymentRate
    const micropaymentsRevenue = monthlyMicropayments * 12

    // Hybrid Model - same subscription revenue + micropayments
    const subscriptionRevenue = legacyGross
    const totalModernGross = subscriptionRevenue + micropaymentsRevenue
    const modernFees = micropaymentsRevenue * 0.1
    const modernNet = totalModernGross - modernFees

    const savings = modernNet - legacyNet
    const percentIncrease = legacyNet > 0 ? Math.round((savings / legacyNet) * 100) : 0

    return {
      legacyGross,
      legacyFees,
      legacyNet,
      annualSubs,
      monthlySubs,
      subscriptionRevenue,
      monthlyMicropayments,
      micropaymentsRevenue,
      totalModernGross,
      modernFees,
      modernNet,
      savings,
      percentIncrease,
      micropaymentRate,
    }
  }, [subscribers])

  return (
    <section id="calculator" className="py-10 px-6 bg-gradient-to-br from-emerald-950/30 via-background to-cyan-950/20">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-2 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Calculate Your Savings</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance">
            Enter your subscriber count to model your potential revenue lift
          </p>
        </div>

        <Card className="border-2 border-emerald-500/30 shadow-2xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Revenue Calculator</CardTitle>
            <CardDescription className="text-sm">See how much more you could earn with AlumniDeFi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="subscribers" className="text-sm font-semibold">
                  Current Subscribers
                </Label>
                <Input
                  id="subscribers"
                  type="text"
                  value={formatWithCommas(subscribers)}
                  onChange={handleSubscribersChange}
                  placeholder="10,000"
                  className="h-10"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
              {/* Legacy Model */}
              <div className="space-y-3 p-4 bg-secondary/50 rounded-lg">
                <h3 className="text-base font-bold text-muted-foreground">Current Subscription Model</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs">Annual Subs ({calculations.annualSubs.toLocaleString()}) × $120:</span>
                    <span className="font-mono font-bold text-sm">
                      ${(calculations.annualSubs * ANNUAL_PRICE).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs">
                      Monthly Subs ({calculations.monthlySubs.toLocaleString()}) × 9mo × $12:
                    </span>
                    <span className="font-mono font-bold text-sm">
                      ${(calculations.monthlySubs * ACTIVE_MONTHS * MONTHLY_PRICE).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-xs">Total Subscription Revenue:</span>
                    <span className="font-mono font-bold text-sm">${calculations.legacyGross.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs">Processor Fees (2.9% + $0.30):</span>
                    <span className="font-mono font-bold text-sm text-destructive">
                      -${Math.round(calculations.legacyFees).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-semibold text-xs">Net Revenue:</span>
                    <span className="font-mono font-bold">${Math.round(calculations.legacyNet).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Hybrid Model */}
              <div className="space-y-3 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/30">
                <h3 className="text-base font-bold text-primary">Hybrid Model</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs">Subscription Revenue:</span>
                    <span className="font-mono font-bold text-sm text-primary">
                      ${Math.round(calculations.subscriptionRevenue).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs">
                      Micropayments (${calculations.monthlyMicropayments.toLocaleString()}/mo):
                    </span>
                    <span className="font-mono font-bold text-sm text-emerald-500">
                      +${Math.round(calculations.micropaymentsRevenue).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-primary/30">
                    <span className="text-xs">Total Gross Revenue:</span>
                    <span className="font-mono font-bold text-sm text-primary">
                      ${Math.round(calculations.totalModernGross).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs">AlumniDeFi Fee (10%):</span>
                    <span className="font-mono font-bold text-sm text-orange-600">
                      -${Math.round(calculations.modernFees).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-primary/30">
                    <span className="font-semibold text-xs">Net Revenue:</span>
                    <span className="font-mono font-bold text-primary">
                      ${Math.round(calculations.modernNet).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Highlight */}
            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center md:text-left">
                    <div className="flex items-center gap-2 text-xs opacity-90">
                      <TrendingUp className="w-4 h-4" />
                      <span>Your Annual Revenue Lift</span>
                    </div>
                    <div className="text-3xl font-bold">+${Math.round(calculations.savings).toLocaleString()}</div>
                    <div className="text-sm opacity-90">{calculations.percentIncrease}% revenue increase</div>
                  </div>
                  <ArrowRight className="w-10 h-10 opacity-50 rotate-90 md:rotate-0" />
                  <div className="text-center md:text-right space-y-1">
                    <div className="text-base font-semibold">
                      Turn your existing audience into revenue with no friction or redesign.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
