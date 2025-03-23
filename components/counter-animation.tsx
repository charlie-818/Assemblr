"use client"

import { useEffect, useState } from "react"

interface CounterAnimationProps {
  value: number
  duration?: number
  decimals?: number
}

export function CounterAnimation({ value, duration = 2000, decimals = 0 }: CounterAnimationProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const progressRatio = Math.min(progress / duration, 1)
      // Use easeOutExpo for a nice deceleration effect
      const easing = progressRatio === 1 ? 1 : 1 - Math.pow(2, -10 * progressRatio)

      setCount(Math.floor(easing * value))

      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <>{count.toLocaleString(undefined, { maximumFractionDigits: decimals })}</>
}

