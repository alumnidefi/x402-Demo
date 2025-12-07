import { Card } from "@/components/ui/card"
import { Code2, DollarSign, Lock, Zap, FileText, Users } from "lucide-react"

export function PlatformFeaturesSection() {
  return (
    <section className="py-10 px-6 bg-gradient-to-br from-cyan-500/5 via-background to-teal-500/5">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-2 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Create Unlimited Paywalls Instantly</h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto text-balance">
            Modern publishers need the ability to place paid access anywhere—without calling a developer or waiting on a
            third-party vendor. You decide what to lock, when to lock it, and how much it costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-5 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-cyan-500/50 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Code2 className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Simple Console for Total Control</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create paywalls with one click, set pricing, choose member access, and copy embed codes. The moment you
              save, it's live—no technical knowledge required.
            </p>
          </Card>

          <Card className="p-5 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-cyan-500/50 group">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
              <DollarSign className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Flexible Pricing for Every Situation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Control pricing at the individual content level: $0.10 for breaking updates, $1.00 for premium segments,
              $5.00 for priority interactions. Adjust prices instantly to respond to high-traffic moments.
            </p>
          </Card>

          <Card className="p-5 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-cyan-500/50 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Lock className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Automatic Access for Paid Members</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Existing subscribers never pay twice. The system automatically unlocks all paywalls for members—no extra
              steps, no friction. Protect your subscription product while monetizing non-subscribers.
            </p>
          </Card>

          <Card className="p-5 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-teal-500/50 group">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
              <FileText className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Works Across Every Type of Content</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Place paywalls on articles, recruiting updates, videos, podcasts, live streams, data feeds, team-site
              pages, and special events.{" "}
              <span className="font-semibold text-foreground">If you can publish it, you can monetize it.</span>
            </p>
          </Card>

          <Card className="p-5 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-cyan-500/50 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Zap className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">No Limits, No Development Needed</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Never wait on developers, contractors, or vendors. Your staff controls every paywall, price, and premium
              piece—giving you the ability to monetize fast during breaking news and high-traffic cycles.
            </p>
          </Card>

          <Card className="p-5 space-y-3 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-teal-500/50 group">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
              <Users className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold">Modern Paywall Flexibility</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed for organizations that want to keep their subscription model intact while unlocking entirely new
              revenue from non-subscribers. Turn engagement into revenue without disrupting your existing business.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
