import { Card } from "@/components/ui/card"
import { Coins, Gauge, Receipt, Sparkles, Users } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-10 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">What AlumniDeFi Enables</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto text-balance">
            Unlock capabilities impossible with legacy processors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold">Monthly Billing That Works</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No expirations, no declines, no fraud checks. Cuts involuntary churn by 50-70% and unlocks massive
              audiences unwilling to pay $119 upfront. Plus micropayments add significant additional revenue.
            </p>
          </Card>

          <Card className="p-4 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Coins className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold">Competitive Transaction Fees</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Just 10% to AlumniDeFi with no legacy transaction fess. Keep more of every dollar while increasing revenue
              with microtransactions.
            </p>
          </Card>

          <Card className="p-4 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Gauge className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold">Instant Settlement</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Funds settle immediately. No delays, no withheld payouts, no reconciliation burdens, while Subscribers
              bypass all micropayments with their subscription.
            </p>
          </Card>

          <Card className="p-4 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Receipt className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold">Dynamic Content Pricing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Charge $0.10 for breaking news, $1 for premium recruiting notes, $2 during coaching searches.
              Microtransactions made frictionless.
            </p>
          </Card>

          <Card className="p-4 space-y-2 bg-gradient-to-br from-primary to-accent text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-3xl font-bold">50%+</div>
            <h3 className="text-base font-bold">Revenue Increase</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Without adding staff, creating new content, or changing editorial operations.
            </p>
          </Card>

          <Card className="p-4 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 group bg-card/50 backdrop-blur">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Sparkles className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-base font-bold">Seamless Experience</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tap "Subscribe Monthly", approve authorization, never think about billing again. No stored cards, no
              passwords, no friction.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
