import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AIEraPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
            The Future of Sports Intelligence: Machine-Driven Revenue
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              In the next phase of college sports, the competitive edge will come from automated intelligence, not just
              human scouting. Every program will deploy AI agents that constantly scan regional beat writers, podcasts,
              YouTube channels, practice reports, recruiting notes, message boards, and local coverage looking for the
              smallest edge that might enhance game planning or recruiting strategy. The most valuable information is
              often buried inside hyper-local reporting: a minor injury noticed at practice, a subtle shift in a depth
              chart, a quote from a position coach, or a recruiting hint dropped in a small-market article. AI will
              harvest all of it.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              These bots cannot operate on traditional subscription models; they need per-article and per-event access
              at scale, thousands of times per week across all conferences and opponents. That shift—from human readers
              to machine readers—creates an entirely new revenue stream for publishers. Machine-driven consumption will
              dwarf human consumption, and a system that supports frictionless micropayments becomes essential.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              When every coaching staff, analytics firm, sportsbook, and scouting department is running automated agents
              that pay for each piece of content they analyze, the resulting micropayment volume will reach levels that
              obliterate traditional subscription revenue numbers. This is where the future of sports information is
              headed, and publishers that adopt AlumniDeFi's machine-ready payment layer now will own the monetization
              engine for that new era.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button size="lg" variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
