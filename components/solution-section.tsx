import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="py-10 px-6 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">AlumniDeFi's Modern Payment Architecture</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto text-balance">
            Programmable billing built specifically for digital media
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">No cards. No chargebacks. No friction.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Subscribers approve a secure recurring payment authorization using biometric authentication. Once
                approved, they never interact with billing again.
              </p>
            </div>

            <div className="space-y-1.5">
              {[
                "No cards on file",
                "No chargebacks or expirations",
                "Just 10% fee to AlumniDeFi",
                "No involuntary churn",
                "Instant settlement",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2 p-2 rounded-md transition-colors hover:bg-primary/5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-5 bg-card/50 backdrop-blur-sm border border-border/50">
            <div className="space-y-4">
              <h4 className="text-base font-bold">How It Works</h4>

              <div className="space-y-3">
                <div className="flex gap-3 p-2 rounded-md transition-colors hover:bg-primary/5">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    1
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-semibold text-sm">Platform sends billing request</div>
                    <div className="text-xs text-muted-foreground">Monthly payment due</div>
                  </div>
                </div>

                <div className="flex gap-3 p-2 rounded-md transition-colors hover:bg-primary/5">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    2
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-semibold text-sm">Wallet executes payment</div>
                    <div className="text-xs text-muted-foreground">Authorized payment processes automatically</div>
                  </div>
                </div>

                <div className="flex gap-3 p-2 rounded-md transition-colors hover:bg-primary/5">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-xs">
                    3
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-semibold text-sm">Funds settle instantly</div>
                    <div className="text-xs text-muted-foreground">No intermediaries, no reversals, no risk</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
