"use client"

import { Card } from "@/components/ui/card"

export function PodcastWorkflow() {
  return (
    <section className="py-6 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center mb-4">How Paid Podcast Episodes Work</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Most podcast apps (Apple Podcasts, Spotify, Google Podcasts, etc.) can only play whatever audio file you
            upload to them. They cannot lock an episode behind a paywall. Because of that limitation, paid podcasts work
            a little differently—but the setup is very simple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-purple-400">1</span>
              </div>
              {/* </CHANGE> */}
              <div>
                <h4 className="font-semibold mb-2">You upload a short preview to the podcast apps</h4>
                <p className="text-sm text-muted-foreground">
                  Instead of uploading the full episode to Apple or Spotify, you upload a 1–3 minute teaser. This audio
                  plays normally in every app, just like a regular episode.
                </p>
              </div>
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-purple-400">2</span>
              </div>
              {/* </CHANGE> */}
              <div>
                <h4 className="font-semibold mb-2">You upload the full episode to your own website</h4>
                <p className="text-sm text-muted-foreground">
                  The complete episode lives on your site, not inside Apple or Spotify. This is what allows you to
                  control access.
                </p>
              </div>
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-purple-400">3</span>
              </div>
              {/* </CHANGE> */}
              <div>
                <h4 className="font-semibold mb-2">
                  The description in Apple/Spotify tells listeners where to get the full episode
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Inside the episode description, you simply add a line such as:
                </p>
                <div className="bg-muted/50 p-3 rounded border border-border/50">
                  <p className="text-xs font-mono text-foreground">
                    "Full episode available at www.yourwebsite.com/episode123"
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  When listeners tap the link, they go to your site, where they can unlock the full audio instantly.
                </p>
              </div>
            </div>
          </Card>

          {/* Step 4 */}
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-purple-400">4</span>
              </div>
              {/* </CHANGE> */}
              <div>
                <h4 className="font-semibold mb-2">Listeners play the full episode on your website</h4>
                <p className="text-sm text-muted-foreground">
                  Once unlocked, the episode streams from your site in any browser. No app downloads, no special setup.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
