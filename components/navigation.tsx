"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const isDemo = pathname === "/demo"
  const isDashboard = pathname === "/dashboard"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image src="/alumnidefi-logo.png" alt="AlumniDeFi" width={200} height={64} className="h-16 w-auto invert" />
          </Link>

          {!isDemo && !isDashboard && (
            <div className="hidden md:flex items-center gap-8">
              <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                The Problem
              </a>
              <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </a>
              <a href="#case-study" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Case Study
              </a>
              <Link href="/ai-era" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                AI Era Monetization
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button size="sm" variant="ghost" className="font-medium text-sm">
                Da$hboard
              </Button>
            </Link>

            {!isDemo && !isDashboard && (
              <Link href="/demo">
                <Button size="sm" className="font-medium text-sm">
                  See Demo
                </Button>
              </Link>
            )}

            {isDashboard && (
              <Link href="/demo">
                <Button size="sm" variant="outline" className="font-medium text-sm bg-transparent">
                  Back to Demo
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
