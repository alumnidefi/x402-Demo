"use client"

import { Card } from "@/components/ui/card"
import { FileText, Calendar, Database, Video } from "lucide-react"

export function UseCases() {
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-10">Use Cases</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-blue-950/30 to-blue-900/10 border-blue-500/20 hover:border-blue-500/40 transition-all">
            <FileText className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="font-semibold mb-2">Articles</h3>
            <p className="text-sm text-muted-foreground">
              Charge per premium insight rather than locking everything behind a subscription
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-950/30 to-purple-900/10 border-purple-500/20 hover:border-purple-500/40 transition-all">
            <Calendar className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="font-semibold mb-2">Live Events</h3>
            <p className="text-sm text-muted-foreground">Pay-per-event or pay-per-replay for short or long sessions</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <Database className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-semibold mb-2">Data & APIs</h3>
            <p className="text-sm text-muted-foreground">Pay-per-query or per dataset access</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-950/30 to-orange-900/10 border-orange-500/20 hover:border-orange-500/40 transition-all">
            <Video className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="font-semibold mb-2">Premium Media</h3>
            <p className="text-sm text-muted-foreground">Full-length videos, audio drops, or deep-dive PDFs</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
