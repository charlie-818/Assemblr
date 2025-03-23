"use client"

import { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  ChartData,
  ChartOptions,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ArcElement)

type ChartDataType = ChartData<'doughnut', number[], string>;

export function GovernanceActivityChart() {
  const [chartData, setChartData] = useState<ChartDataType>({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const labels = ["Passed", "Failed", "In Progress", "Pending"]

    const data = [12, 5, 8, 3]

    setChartData({
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            "rgba(34, 197, 94, 0.8)",
            "rgba(239, 68, 68, 0.8)",
            "rgba(99, 102, 241, 0.8)",
            "rgba(234, 179, 8, 0.8)",
          ],
          borderColor: [
            "rgba(34, 197, 94, 1)",
            "rgba(239, 68, 68, 1)",
            "rgba(99, 102, 241, 1)",
            "rgba(234, 179, 8, 1)",
          ],
          borderWidth: 1,
        },
      ],
    })
  }, [])

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || ""
            const value = context.raw || 0
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0)
            const percentage = Math.round((value / total) * 100)
            return `${label}: ${value} (${percentage}%)`
          },
        },
      },
    },
    cutout: "70%",
  }

  return (
    <div className="relative h-full flex items-center justify-center">
      <Doughnut data={chartData} options={options} />
      <div className="absolute text-center">
        <div className="text-4xl font-bold">28</div>
        <div className="text-sm text-muted-foreground">Total Proposals</div>
      </div>
    </div>
  )
}

