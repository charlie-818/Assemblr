"use client"

import { useEffect, useState } from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function MemberActivityChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const labels = ["Votes", "Comments", "Proposals", "Contributions", "Referrals"]

    const thisWeekData = [42, 28, 5, 12, 8]
    const lastWeekData = [35, 22, 3, 9, 5]

    setChartData({
      labels,
      datasets: [
        {
          label: "This Week",
          data: thisWeekData,
          backgroundColor: "rgba(99, 102, 241, 0.8)",
          borderRadius: 6,
        },
        {
          label: "Last Week",
          data: lastWeekData,
          backgroundColor: "rgba(99, 102, 241, 0.3)",
          borderRadius: 6,
        },
      ],
    })
  }, [])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return <Bar data={chartData} options={options} />
}

