import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-10 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 text-center space-y-8 border-2">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to modernize your payments?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              See how AlumniDeFi can double your subscriber base and eliminate transaction fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 font-medium" asChild>
              <Link href="/demo">
                See Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-medium bg-transparent">
              <Mail className="w-4 h-4" />
              Contact Sales
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>Built for digital media companies. Trusted by platforms with millions of monthly visitors.</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
