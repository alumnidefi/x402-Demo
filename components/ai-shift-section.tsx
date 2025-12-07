import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AIShiftSection() {
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Next Shift in Digital Media</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Automated AI agents are rapidly becoming the primary consumers of premium content.
          </p>
          <div className="pt-2">
            <Link href="/ai-era">
              <Button variant="outline" size="sm">
                Why This Matters
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto">
          <div className="space-y-1 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all hover:bg-card/50">
            <div className="text-3xl font-bold text-primary">+1,300%</div>
            <div className="text-xs text-muted-foreground">Growth in non-human traffic in early 2025.</div>
          </div>

          <div className="space-y-1 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all hover:bg-card/50">
            <div className="text-3xl font-bold text-primary">50%+</div>
            <div className="text-xs text-muted-foreground">Of all web traffic is now machine-generated.</div>
          </div>

          <div className="space-y-1 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50 transition-all hover:bg-card/50">
            <div className="text-3xl font-bold text-primary">200–600%</div>
            <div className="text-xs text-muted-foreground">
              Estimated revenue lift from automated pay-per-use consumption.
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto mb-10">
          Your future audience won't only be human—machines will read your content and pay for every interaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-semibold text-lg">
              1
            </div>
            <p className="text-sm text-foreground">Earn money from the 97% of visitors who never subscribe</p>
          </div>

          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-semibold text-lg">
              2
            </div>
            <p className="text-sm text-foreground">Create a new revenue stream from automated traffic</p>
          </div>

          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 space-y-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-semibold text-lg">
              3
            </div>
            <p className="text-sm text-foreground">Reduce failed payments and chargebacks to zero</p>
          </div>
        </div>
      </div>
    </section>
  )
}
