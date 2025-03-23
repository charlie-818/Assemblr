"use client"

import { useEffect, useRef } from "react"

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      return { width, height }
    }

    let { width, height } = setCanvasDimensions()

    // Handle resize
    const handleResize = () => {
      const dimensions = setCanvasDimensions()
      width = dimensions.width
      height = dimensions.height
    }

    window.addEventListener("resize", handleResize)

    // Create particles
    const particleCount = 100
    const particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `hsla(${Math.random() * 60 + 210}, 70%, 60%, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > width) this.x = 0
        else if (this.x < 0) this.x = width

        if (this.y > height) this.y = 0
        else if (this.y < 0) this.y = height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create connections between particles
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 100, 255, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Draw organization structure
    function drawOrganizationStructure() {
      // Draw central node
      ctx.fillStyle = "rgba(100, 100, 255, 0.8)"
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 30, 0, Math.PI * 2)
      ctx.fill()

      // Draw connecting nodes
      const nodeCount = 5
      const radius = 120

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2
        const x = width / 2 + Math.cos(angle) * radius
        const y = height / 2 + Math.sin(angle) * radius

        // Draw node
        ctx.fillStyle = "rgba(100, 150, 255, 0.6)"
        ctx.beginPath()
        ctx.arc(x, y, 20, 0, Math.PI * 2)
        ctx.fill()

        // Draw connection to center
        ctx.beginPath()
        ctx.strokeStyle = "rgba(100, 150, 255, 0.4)"
        ctx.lineWidth = 3
        ctx.moveTo(width / 2, height / 2)
        ctx.lineTo(x, y)
        ctx.stroke()

        // Draw sub-nodes
        const subNodeCount = 3
        const subRadius = 50

        for (let j = 0; j < subNodeCount; j++) {
          const subAngle = angle + ((j / subNodeCount - 0.5) * Math.PI) / 2
          const subX = x + Math.cos(subAngle) * subRadius
          const subY = y + Math.sin(subAngle) * subRadius

          // Draw sub-node
          ctx.fillStyle = "rgba(150, 200, 255, 0.5)"
          ctx.beginPath()
          ctx.arc(subX, subY, 10, 0, Math.PI * 2)
          ctx.fill()

          // Draw connection to parent node
          ctx.beginPath()
          ctx.strokeStyle = "rgba(150, 200, 255, 0.3)"
          ctx.lineWidth = 2
          ctx.moveTo(x, y)
          ctx.lineTo(subX, subY)
          ctx.stroke()
        }
      }
    }

    // Animation loop
    let animationFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Update and draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      drawConnections()
      drawOrganizationStructure()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="relative w-full h-[550px] rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: "100%", height: "100%" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-6 rounded-lg bg-background/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-2">Organization Structure</h3>
          <p className="text-sm text-muted-foreground max-w-[300px]">
            Visualize and manage your organization's structure with powerful tools
          </p>
        </div>
      </div>
    </div>
  )
}

