"use client"

import { Card } from "@/components/ui/card"

export function YouTubeWorkflow() {
  return (
    <section className="py-6 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center mb-4">What You Can Do on YouTube</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            YouTube lets you restrict access, unlike podcast apps. You have three workable options:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Option 1 */}
          <Card className="p-6 bg-card/50 backdrop-blur border-red-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-red-400">1</span>
              </div>
              <h4 className="font-semibold text-red-400">Upload a short teaser and link to the full episode</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Upload a 1–3 minute preview to YouTube</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Put the link to the full episode on your site in the description and as a pinned comment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Fans click → land on your website → unlock and watch/listen</span>
              </li>
            </ul>
            <p className="text-xs text-red-400 mt-4 font-medium">This is the most common method for paid creators.</p>
          </Card>

          {/* Option 2 */}
          <Card className="p-6 bg-card/50 backdrop-blur border-red-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-red-400">2</span>
              </div>
              <h4 className="font-semibold text-red-400">
                Upload the full episode as "Unlisted" and only reveal the link after unlock
              </h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Upload the full episode to YouTube</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Set it to Unlisted (not searchable, not public)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>When someone unlocks on your website, you show them the Unlisted link</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>They can watch on YouTube normally, but only if they have the link</span>
              </li>
            </ul>
            <p className="text-xs text-red-400 mt-4 font-medium">
              This gives fans the YouTube player experience while keeping control.
            </p>
          </Card>

          {/* Option 3 */}
          <Card className="p-6 bg-card/50 backdrop-blur border-red-500/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-red-400">3</span>
              </div>
              <h4 className="font-semibold text-red-400">
                Host the full video on your site and embed a YouTube player
              </h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Upload the full episode as Unlisted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Embed that unlisted video on your website behind your paywall</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Fans never see the YouTube URL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>It behaves like a normal YouTube player inside your site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>You still keep full paywall control</span>
              </li>
            </ul>
            <p className="text-xs text-red-400 mt-4 font-medium">
              This is the cleanest solution if you want all traffic controlled by you.
            </p>
          </Card>
        </div>

        {/* What You Cannot Do */}
        <Card className="p-8 bg-red-500/5 backdrop-blur border-red-500/20 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-red-400">What You Cannot Do on YouTube</h3>
          <p className="text-muted-foreground mb-4">You cannot:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span>
              <span>Insert a paywall inside the YouTube platform itself</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span>
              <span>Charge viewers directly on YouTube unless you use their built-in membership system</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 mt-1">✕</span>
              <span>Block viewers from watching once the video is fully public</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4 font-medium">
            If something is Public on YouTube, it cannot be paywalled.
          </p>
        </Card>

        {/* Recommended Setup */}
        <Card className="p-8 bg-emerald-500/5 backdrop-blur border-emerald-500/30">
          <h3 className="text-xl font-semibold mb-4 text-emerald-400">Recommended Setup</h3>
          <p className="text-muted-foreground mb-4">The smoothest method is:</p>
          <div className="bg-muted/50 p-4 rounded border border-emerald-500/20">
            <p className="text-foreground">
              Upload preview → link to your site → unlock full episode → play in your site's YouTube embed.
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            It is simple, requires zero technical setup, and gives you full monetization control.
          </p>
        </Card>
      </div>
    </section>
  )
}
