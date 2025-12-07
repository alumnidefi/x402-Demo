"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Calendar, Target } from "lucide-react"

export function DashboardStats() {
  const [today, setToday] = useState(0)
  const [thisMonth, setThisMonth] = useState(80237)
  const [thisYear, setThisYear] = useState(1098141)

  useEffect(() => {
    const interval = setInterval(() => {
      const todayIncrement = Math.floor(Math.random() * 50) + 10
      const monthIncrement = Math.floor(Math.random() * 100) + 50
      const yearIncrement = Math.floor(Math.random() * 200) + 100

      setToday((prev) => prev + todayIncrement)
      setThisMonth((prev) => prev + monthIncrement)
      setThisYear((prev) => prev + yearIncrement)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-cyan-500/10 via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
        <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Today</CardTitle>
          <div className="p-2 bg-cyan-500/10 rounded-full">
            <DollarSign className="h-4 w-4 text-cyan-500" />
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-500">
            {formatCurrency(today)}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="h-3 w-3 text-cyan-500" />
            <p className="text-xs text-cyan-500 font-medium">Live</p>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-blue-500/10 via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
        <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
          <div className="p-2 bg-blue-500/10 rounded-full">
            <Calendar className="h-4 w-4 text-blue-500" />
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent transition-all duration-500">
            {formatCurrency(thisMonth)}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="h-3 w-3 text-blue-500" />
            <p className="text-xs text-blue-500 font-medium">Monthly performance</p>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-slate-500/10 via-background to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent" />
        <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">This Year</CardTitle>
          <div className="p-2 bg-slate-500/10 rounded-full">
            <Target className="h-4 w-4 text-slate-400" />
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="text-3xl font-bold bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent transition-all duration-500">
            {formatCurrency(thisYear)}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="h-3 w-3 text-slate-400" />
            <p className="text-xs text-slate-400 font-medium">Annual revenue</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
