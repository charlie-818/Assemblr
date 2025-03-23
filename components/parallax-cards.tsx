"use client"

import type React from "react"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Building, Coins, FileText, Users, Vote } from "lucide-react"
import { motion } from "framer-motion"

import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ParallaxCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      title: "Organization Creation",
      description: "Define your organization's structure, mission, and branding",
      icon: Building,
      link: "/features/organization",
      items: [
        "Multiple organization types",
        "Custom branding options",
        "Flexible structure templates",
        "Complete customization",
      ],
    },
    {
      title: "Funding Mechanisms",
      description: "Multiple ways to fund your organization and manage resources",
      icon: Coins,
      link: "/features/funding",
      items: ["Membership dues & donations", "Investment rounds", "Token creation & management", "Treasury dashboard"],
    },
    {
      title: "Governance Structure",
      description: "Customizable governance systems for transparent decision-making",
      icon: Vote,
      link: "/features/governance",
      items: ["DAO integration", "Proposal & voting systems", "Customizable parameters", "Role-based permissions"],
    },
    {
      title: "Member Management",
      description: "Tools for onboarding, communication, and member coordination",
      icon: Users,
      link: "/features/members",
      items: ["User onboarding flows", "Member dashboards", "Directory & communication", "Contribution tracking"],
    },
    {
      title: "Legal & Compliance",
      description: "Tools to ensure your organization meets legal requirements",
      icon: FileText,
      link: "/features/legal",
      items: ["Bylaw templates", "Jurisdiction compliance", "Audit trails", "Privacy controls"],
    },
    {
      title: "Multi-Chain Support",
      description: "Blockchain integration with support for multiple networks",
      icon: Building,
      link: "/features/blockchain",
      items: ["Ethereum, Solana & more", "Wallet connectivity", "Decentralized storage", "API integrations"],
    },
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    const cards = containerRef.current.querySelectorAll(".feature-card-parallax")
    cards.forEach((card) => {
      const cardElement = card as HTMLElement
      const cardRect = cardElement.getBoundingClientRect()
      const cardCenterX = cardRect.left + cardRect.width / 2
      const cardCenterY = cardRect.top + cardRect.height / 2

      const distanceX = (e.clientX - cardCenterX) / 30
      const distanceY = (e.clientY - cardCenterY) / 30

      cardElement.style.transform = `perspective(1000px) rotateY(${distanceX * -1}deg) rotateX(${distanceY}deg) translateZ(10px)`
    })
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".feature-card-parallax")
    cards.forEach((card) => {
      const cardElement = card as HTMLElement
      cardElement.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)"
    })
  }

  return (
    <div
      ref={containerRef}
      className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-card-parallax rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <CardHeader className="pb-2">
            <feature.icon className="feature-icon mb-4" />
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              {feature.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={activeIndex === index ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href={feature.link}
              className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              Learn more
              <ArrowRight className="h-3 w-3" />
            </Link>
          </CardFooter>
        </motion.div>
      ))}
    </div>
  )
}

