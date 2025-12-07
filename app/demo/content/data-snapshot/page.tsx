"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Users, DollarSign, Zap } from "lucide-react"
import Link from "next/link"

export default function DataSnapshotPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <article className="container mx-auto max-w-4xl px-6 py-24">
        <Link href="/demo">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Demo
          </Button>
        </Link>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="text-sm text-blue-400 font-medium">Data Analysis · $0.25</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Data Snapshot: Micropayment Performance Metrics
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive analysis of real-world micropayment implementations and revenue impact
            </p>
          </div>

          <div className="h-px bg-border my-8" />

          {/* Key Metrics Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <div className="text-sm text-blue-300">Average Revenue Increase</div>
              </div>
              <div className="text-4xl font-bold text-blue-400">127%</div>
              <div className="text-sm text-muted-foreground mt-1">Within first 12 months</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <div className="text-sm text-emerald-300">Conversion Rate Improvement</div>
              </div>
              <div className="text-4xl font-bold text-emerald-400">4.2x</div>
              <div className="text-sm text-muted-foreground mt-1">vs traditional paywalls</div>
            </div>

            <div className="bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <div className="text-sm text-purple-300">Average Revenue Per User</div>
              </div>
              <div className="text-4xl font-bold text-purple-400">$18.40</div>
              <div className="text-sm text-muted-foreground mt-1">Micropayment model vs $12.10 subscription-only</div>
            </div>

            <div className="bg-gradient-to-br from-orange-950/30 to-orange-900/10 border border-orange-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-orange-400" />
                <div className="text-sm text-orange-300">Churn Reduction</div>
              </div>
              <div className="text-4xl font-bold text-orange-400">63%</div>
              <div className="text-sm text-muted-foreground mt-1">Lower than annual subscriptions</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Methodology</h2>
            <p>
              This data snapshot aggregates performance metrics from 47 digital publishers who implemented micropayment
              infrastructure between January 2024 and January 2025. Publishers range from sports media networks to
              business intelligence platforms, with audiences between 500,000 and 15 million monthly visitors.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Findings</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Revenue Performance</h3>
            <p>
              Publishers implementing hybrid subscription + micropayment models saw average revenue increases of 127%
              within 12 months. The revenue lift came from three primary sources:
            </p>
            <ul className="space-y-2 ml-6">
              <li>Converting previously unmonetized casual visitors (52% of revenue increase)</li>
              <li>Monetizing AI agent traffic for the first time (31% of revenue increase)</li>
              <li>
                Higher engagement from subscription members accessing micropayment content (17% of revenue increase)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Conversion Rate Impact</h3>
            <p>
              Traditional hard paywalls convert 1-2% of visitors. Publishers offering micropayment options saw
              conversion rates of 4-9%, averaging 4.2x improvement. The key driver: removing commitment and reducing
              friction in the purchase decision.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. User Behavior Patterns</h3>
            <p>
              Micropayment users exhibit distinct consumption patterns. Average user makes 3.7 micropayments per month
              at $0.15 average transaction value, totaling $5.55 monthly. Over time, 23% of micropayment users convert
              to full subscriptions, creating a powerful acquisition funnel.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. AI Agent Monetization</h3>
            <p>
              Perhaps the most significant finding: publishers with micropayment APIs generated an average of $47,000
              monthly from AI agent traffic that was previously unmonetized. As AI agents represent 30-40% of traffic,
              this represents massive untapped revenue for most publishers.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Strategic Implications</h2>
            <p>
              The data is unambiguous: micropayment infrastructure generates measurably superior outcomes across every
              key metric. Publishers who implement hybrid models quickly will capture disproportionate first-mover
              advantages while building consumer habits that become difficult for competitors to disrupt.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
