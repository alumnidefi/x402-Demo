import { Navigation } from "@/components/navigation"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { LiveConsumption } from "@/components/dashboard/live-consumption"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { MediaLeaderboard } from "@/components/dashboard/media-leaderboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-10">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Revenue Da$hboard
              </h1>
              <p className="text-muted-foreground">Real-time revenue tracking and media consumption analytics</p>
            </div>

            <DashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <MediaLeaderboard />
            </div>

            <LiveConsumption />
          </div>
        </div>
      </main>
    </div>
  )
}
