"use client"

import { Card } from "@/components/ui/card"
import { RevenueComparisonChart } from "@/components/revenue-comparison-chart"
import { SubscriberGrowthChart } from "@/components/subscriber-growth-chart"
import { ArrowRight } from "lucide-react"

export function CaseStudySection() {
  const annualSubs = 75000
  const monthlySubs = 75000
  const annualPrice = 120
  const monthlyPrice = 12
  const activeMonths = 9

  const totalSubs = annualSubs + monthlySubs // 150,000
  let micropaymentRate = 4 // default
  if (totalSubs <= 10000) {
    micropaymentRate = 4
  } else if (totalSubs <= 50000) {
    micropaymentRate = 5
  } else if (totalSubs <= 150000) {
    micropaymentRate = 6
  } else {
    micropaymentRate = 8
  }
  const monthlyMicropayments = totalSubs * micropaymentRate // 150,000 × $6 = $900,000/month
  const micropaymentsRevenue = monthlyMicropayments * 12 // $10,800,000/year

  const annualRevenue = annualSubs * annualPrice // 9,000,000
  const monthlyRevenue = monthlySubs * activeMonths * monthlyPrice // 8,100,000
  const totalSubscriptionRevenue = annualRevenue + monthlyRevenue // 17,100,000

  const annualTransactions = annualSubs
  const monthlyTransactions = monthlySubs * activeMonths
  const annualFees = annualRevenue * 0.029 + annualTransactions * 0.3
  const monthlyFees = monthlyRevenue * 0.029 + monthlyTransactions * 0.3
  const processorFees = annualFees + monthlyFees
  const currentNetRevenue = totalSubscriptionRevenue - processorFees

  const hybridSubscriptionRevenue = totalSubscriptionRevenue
  const hybridTotalGross = hybridSubscriptionRevenue + micropaymentsRevenue
  const alumniFee = micropaymentsRevenue * 0.1
  const hybridNetRevenue = hybridTotalGross - alumniFee

  const revenueLift = hybridNetRevenue - currentNetRevenue
  const revenueIncreasePercentage = Math.round((revenueLift / currentNetRevenue) * 100)

  return (
    <section id="case-study" className="py-10 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Financial Case Study: Digital Media Platform</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance">
            Switching from annual to modern monthly billing with micropayments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 space-y-4">
            <div className="space-y-1">
              <div className="text-xs font-medium text-muted-foreground">Legacy Model</div>
              <h3 className="text-2xl font-bold">Current Subscription Model</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Annual Subscribers × Annual Price</span>
                <span className="font-mono font-bold">${annualRevenue.toLocaleString()}</span>
              </div>
              <div className="text-xs text-muted-foreground px-2">
                {annualSubs.toLocaleString()} subs × ${annualPrice}
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  Monthly Subscribers × 9 Active Months × Monthly Price
                </span>
                <span className="font-mono font-bold">${monthlyRevenue.toLocaleString()}</span>
              </div>
              <div className="text-xs text-muted-foreground px-2">
                {monthlySubs.toLocaleString()} subs × {activeMonths} months × ${monthlyPrice}
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Total Subscription Revenue</span>
                <span className="font-mono font-bold">${totalSubscriptionRevenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Processor Fees (2.9% + $0.30)</span>
                <span className="font-mono font-bold text-destructive">
                  -${Math.round(processorFees).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 bg-secondary/50 rounded-lg px-3">
                <span className="font-semibold text-sm">Net Revenue</span>
                <span className="font-mono font-bold text-xl">${Math.round(currentNetRevenue).toLocaleString()}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <h4 className="text-xs font-semibold mb-2 text-muted-foreground">Industry Retention Benchmarks</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Industry retention curves for low-price digital subscriptions cluster tightly around 70–80% annual
                  retention. Price drops meaningfully reduce churn in the first 90 days, pushing average paid duration
                  close to 9 months even in volatile categories like sports and news. Sports-specific platforms (where
                  usage is seasonal) typically show 8.5–9.5 months of active billing when priced below $15.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="space-y-1">
              <div className="text-xs font-medium text-primary">AlumniDeFi Model</div>
              <h3 className="text-2xl font-bold">Hybrid Model</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Annual Subscribers × Annual Price</span>
                <span className="font-mono font-bold">${annualRevenue.toLocaleString()}</span>
              </div>
              <div className="text-xs text-muted-foreground px-2">
                {annualSubs.toLocaleString()} subs × ${annualPrice}
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  Monthly Subscribers × 9 Active Months × Monthly Price
                </span>
                <span className="font-mono font-bold">${monthlyRevenue.toLocaleString()}</span>
              </div>
              <div className="text-xs text-muted-foreground px-2">
                {monthlySubs.toLocaleString()} subs × {activeMonths} months × ${monthlyPrice}
              </div>

              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Subscription Revenue</span>
                <span className="font-mono font-bold text-primary">${hybridSubscriptionRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Micropayments</span>
                <span className="font-mono font-bold text-emerald-500">+${micropaymentsRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Total Gross Revenue</span>
                <span className="font-mono font-bold text-primary">${hybridTotalGross.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">AlumniDeFi Fee (10%)</span>
                <span className="font-mono font-bold text-orange-600">-${Math.round(alumniFee).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-primary/10 rounded-lg px-3 border border-primary/20">
                <span className="font-semibold text-sm">Net Revenue</span>
                <span className="font-mono font-bold text-xl text-primary">
                  ${Math.round(hybridNetRevenue).toLocaleString()}
                </span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-8 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs opacity-90">Annual Revenue Lift</div>
              <div className="text-4xl font-bold">+${Math.round(revenueLift).toLocaleString()}</div>
              <div className="text-base opacity-90">{revenueIncreasePercentage}% revenue increase</div>
            </div>
            <ArrowRight className="w-10 h-10 opacity-50 rotate-90 md:rotate-0" />
            <div className="text-center md:text-right space-y-1">
              <div className="text-lg font-semibold">
                Zero extra labor. Zero new content demands. Zero disruption to how your team.
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <RevenueComparisonChart />
          <SubscriberGrowthChart />
        </div>
      </div>
    </section>
  )
}
