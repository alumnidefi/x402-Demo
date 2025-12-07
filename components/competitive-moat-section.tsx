import { Card } from "@/components/ui/card"
import { Shield, DollarSign, Zap, Ban } from "lucide-react"

export function CompetitiveMoatSection() {
  return (
    <section className="py-10 px-6 bg-gradient-to-br from-indigo-500/5 via-background to-violet-500/5">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-3 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Why Traditional Networks Can't Compete</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto text-balance">
            Credit card networks have studied micropayments for over 20 years, but their fundamental economics make it
            structurally impossible to adopt the AlumniDeFi model
          </p>
        </div>

        <Card className="p-6 md:p-8 border-2 bg-card/50 backdrop-blur mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-base leading-relaxed text-muted-foreground">
              Credit card networks operate on fixed per-transaction fees, high fraud-prevention overhead, and chargeback
              liability—which means microtransactions cost more to process than it brings in. Every micropayment
              triggers the same fraud checks, authorization layers, and risk scoring as a $200 purchase, so the cost
              structure collapses immediately. The AlumniDeFi model is designed so merchants do not pay network fees.
              That is the entire point of the facilitator architecture.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 space-y-3 border-2 transition-all duration-300 hover:shadow-xl hover:border-indigo-500/50 hover:scale-105 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
              <DollarSign className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Revenue Cannibalization</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Current networks depend heavily on subscription billing as one of their fastest-growing profit centers.
              Shifting to pay-per-use transactions would directly cannibalize their own revenue streams, making it
              economically irrational for them to pursue this model.
            </p>
          </Card>

          <Card className="p-5 space-y-3 border-2 transition-all duration-300 hover:shadow-xl hover:border-violet-500/50 hover:scale-105 group">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <Zap className="w-5 h-5 text-violet-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Technical Limitations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Traditional networks cannot match sub-penny settlement costs or instant finality. They cannot operate at
              the scale or speed required for millions of micro-transactions, and their architecture was designed for
              high-value, low-frequency payments.
            </p>
          </Card>

          <Card className="p-5 space-y-3 border-2 transition-all duration-300 hover:shadow-xl hover:border-indigo-500/50 hover:scale-105 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
              <Shield className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Legacy Infrastructure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every transaction requires the same fraud prevention infrastructure regardless of amount. The cost to
              process a $10 payment is nearly identical to a $100 payment, making low-value recurring payments
              economically impossible within their existing system.
            </p>
          </Card>

          <Card className="p-5 space-y-3 border-2 transition-all duration-300 hover:shadow-xl hover:border-violet-500/50 hover:scale-105 group">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <Ban className="w-5 h-5 text-violet-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Systemic Conflict</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For these reasons, legacy payment networks are extremely unlikely to ever implement a model like
              AlumniDeFi's. Attempting to do so would undermine the core of their existing business—creating a
              structural competitive moat for AlumniDeFi.
            </p>
          </Card>
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border-2 border-indigo-500/20">
          <div className="text-center space-y-3">
            <h3 className="text-xl md:text-2xl font-bold">Our Unfair Advantage</h3>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built from the ground up for modern digital media, AlumniDeFi eliminates the structural limitations that
              prevent legacy networks from competing. This isn't just better technology—it's a fundamentally different
              economic model they cannot replicate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
