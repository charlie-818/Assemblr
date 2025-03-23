"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Assemblr has completely transformed how we manage our organization. The governance tools are intuitive and powerful.",
    author: "Sarah Johnson",
    role: "Executive Director",
    company: "Future Foundation",
    avatar: "/avatars/avatar-1.png",
  },
  {
    quote:
      "The treasury management features have saved us countless hours and helped us make better financial decisions.",
    author: "Michael Chen",
    role: "CFO",
    company: "Blockchain Ventures",
    avatar: "/avatars/avatar-2.png",
  },
  {
    quote:
      "Setting up our DAO was seamless with Assemblr. The customization options let us create exactly what we needed.",
    author: "Elena Rodriguez",
    role: "Community Lead",
    company: "MetaCollective",
    avatar: "/avatars/avatar-3.png",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute top-0 left-0 text-primary/10">
        <Quote size={120} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-2xl md:text-3xl font-display mb-8 leading-relaxed">"{testimonials[current].quote}"</p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                <img
                  src={testimonials[current].avatar || "/placeholder.svg?height=48&width=48"}
                  alt={testimonials[current].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-primary w-4" : "bg-primary/30"
                }`}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

