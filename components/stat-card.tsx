"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  change: string
  changeText: string
  icon: ReactNode
  href: string
  linkText: string
  chartData: number[]
  chartColor?: string
}

export function StatCard({
  title,
  value,
  change,
  changeText,
  icon,
  href,
  linkText,
  chartData,
  chartColor = "var(--chart-primary)",
}: StatCardProps) {
  // Calculate chart points
  const chartHeight = 40
  const chartWidth = 100
  const max = Math.max(...chartData)
  const min = Math.min(...chartData)
  const range = max - min

  const points = chartData
    .map((value, index) => {
      const x = (index / (chartData.length - 1)) * chartWidth
      const y = chartHeight - ((value - min) / range) * chartHeight
      return `${x},${y}`
    })
    .join(" ")

  return (
    <Card className="overflow-hidden group">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          <span className={change.startsWith("+") ? "text-green-500" : "text-red-500"}>{change}</span>
          <span className="ml-1">{changeText}</span>
        </div>

        <div className="mt-4 h-10">
          <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
            <motion.polyline
              points={points}
              fill="none"
              stroke={chartColor || "var(--chart-primary)"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.polyline
              points={`0,${chartHeight} ${points} ${chartWidth},${chartHeight}`}
              fill={`url(#gradient-${title.replace(/\s+/g, "-")})`}
              strokeWidth="0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id={`gradient-${title.replace(/\s+/g, "-")}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={chartColor || "var(--chart-primary)"} stopOpacity="0.5" />
                <stop offset="100%" stopColor={chartColor || "var(--chart-primary)"} stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={href}>
          <Button variant="ghost" size="sm" className="gap-1 group-hover:bg-primary/10 transition-colors">
            {linkText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

