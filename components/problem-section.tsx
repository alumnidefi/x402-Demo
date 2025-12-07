import { Card } from "@/components/ui/card"
import { AlertTriangle, CreditCard, TrendingDown } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problem" className="py-10 px-6 bg-secondary/20 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">The Problem With Legacy Billing</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto text-balance">
            2025 media companies running on 1998 payment technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 space-y-3 bg-card/50 backdrop-blur-sm border border-border/50 transition-all hover:border-border">
            <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
              <TrendingDown className="w-4 h-4 text-destructive" />
            </div>
            <h3 className="text-base font-bold">Annual Billing Workaround</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Platforms charge annually not because fans want it, but because monthly billing collapses under 8-15% card
              failures and constant disputes.
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>12 chargeback possibilites per year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>Card expirations and fraud triggers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>High support volume and disputes</span>
              </div>
            </div>
          </Card>

          <Card className="p-5 space-y-3 bg-card/50 backdrop-blur-sm border border-border/50 transition-all hover:border-border">
            <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-destructive" />
            </div>
            <h3 className="text-base font-bold">High Processor Costs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard 2.9% + $0.30 per transaction drains revenue. Legacy processors take significant fees on every
              transaction.
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>Delayed payouts and batching</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>Fraud and dispute risk costs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>Additional compliance overhead</span>
              </div>
            </div>
          </Card>

          <Card className="p-5 space-y-3 bg-card/50 backdrop-blur-sm border border-border/50 transition-all hover:border-border">
            <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </div>
            <h3 className="text-base font-bold">Conversion Ceiling</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              With millions of monthly visitors, only a small fraction conver to paid subscribers. Annual billing blocks
              70-90% of potential subscribers.
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>Too much upfront friction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>Unreliable monthly options</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-destructive" />
                <span>Limited monetization tiers</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
