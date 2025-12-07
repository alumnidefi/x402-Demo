import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, Calculator, CheckCircle2 } from "lucide-react"

export function MethodologySection() {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">How These Estimates Were Calculated</h2>
            <p className="text-muted-foreground">Transparent methodology based on real traffic data</p>
          </div>

          <Card className="border-slate-700/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-slate-400" />
                Traffic Data Source
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                All revenue projections on this page are based on publicly available traffic data. Assumptions are 18
                million to 25 million monthly visits.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-700/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-slate-400" />
                Conversion Rate Assumptions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                To model what micropayments could generate, we applied standard conversion rates used in digital media:{" "}
                1% (low), 3% (base), 5% (high), and 10% (aggressive).
              </p>
              <p>
                Each conversion rate simply reflects the percentage of visitors who choose to make a small payment (for
                example, $0.10 for a recruiting update or quick video clip). These payments are in addition to existing
                subscription revenue and do not replace or affect the $120 annual plan.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                Revenue Formula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950/50 border border-slate-700 rounded-lg p-6 text-center">
                <p className="font-mono text-base text-blue-400">
                  Monthly Visitors × Conversion Rate × Average Price × 12 Months
                </p>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The result shows the total new gross revenue created by micropayments. AlumniDeFi's fee is calculated as
                a flat 10% of that amount.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-700/50 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Transparent & Verifiable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                This approach creates transparent, conservative estimates that any partner can verify using their own
                traffic numbers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
