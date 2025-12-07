"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Radio, MessageCircle, Users } from "lucide-react"
import Link from "next/link"

export default function LiveEventPage() {
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
            <div className="flex items-center gap-2">
              <div className="text-sm text-red-400 font-medium">Live Event · $1.00</div>
              <div className="flex items-center gap-1 text-xs text-red-500">
                <Radio className="w-3 h-3 animate-pulse" />
                <span>LIVE NOW</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert Q&A: The Future of Content Monetization
            </h1>
            <p className="text-xl text-muted-foreground">
              Live interactive session with industry leaders discussing micropayments, AI agents, and the evolving media
              landscape
            </p>
          </div>

          {/* Live Stream Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-red-950/50 to-gray-900 rounded-lg overflow-hidden border-2 border-red-500/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500 animate-pulse">
                <Radio className="w-10 h-10 text-red-400" />
              </div>
              <p className="text-sm text-muted-foreground">Live Stream Active</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1,247 watching</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Chat Simulation */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="h-px bg-border" />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Event Details</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Join us for an exclusive live Q&A session with three industry pioneers who are reshaping digital
                  content monetization. This interactive event covers:
                </p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Real-world case studies from publishers who've increased revenue 120%+ with micropayments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Technical implementation strategies and common pitfalls to avoid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Monetizing AI agent traffic: the massive opportunity most publishers are missing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Hybrid subscription + micropayment models that maximize revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Live Q&A with your questions answered by our expert panel</span>
                  </li>
                </ul>
                <p className="text-foreground/90 leading-relaxed pt-4">
                  <strong>Bonus:</strong> All attendees receive full replay access and exclusive downloadable resources
                  including implementation checklists and revenue projection models.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                </div>
                <div className="space-y-3 text-sm">
                  <div className="space-y-1">
                    <div className="font-medium text-blue-400">Sarah_Publisher</div>
                    <div className="text-muted-foreground">How long does implementation typically take?</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-emerald-400">Mike_Tech</div>
                    <div className="text-muted-foreground">Amazing insights! This is the future</div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-purple-400">Alex_Media</div>
                    <div className="text-muted-foreground">Can you share more data on AI agent monetization?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
