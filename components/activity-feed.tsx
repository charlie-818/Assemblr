"use client"

import { useState, useEffect } from "react"
import { BarChart3, Coins, FileText, Users, Vote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ActivityFeed() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "member",
      title: "New member joined",
      description: "Jane Smith joined the organization",
      time: "2 hours ago",
      icon: Users,
    },
    {
      id: 2,
      type: "proposal",
      title: "Proposal created",
      description: 'New proposal: "Community Event Budget"',
      time: "5 hours ago",
      icon: Vote,
    },
    {
      id: 3,
      type: "treasury",
      title: "Treasury transaction",
      description: "$2,500 transferred to development fund",
      time: "Yesterday",
      icon: Coins,
    },
    {
      id: 4,
      type: "report",
      title: "Monthly report generated",
      description: "April 2025 organization report is ready",
      time: "2 days ago",
      icon: BarChart3,
    },
  ])

  const [showNewActivity, setShowNewActivity] = useState(false)

  useEffect(() => {
    // Simulate new activity coming in
    const timer = setTimeout(() => {
      const newActivity = {
        id: 5,
        type: "document",
        title: "New document created",
        description: '"Q2 Strategy Plan" added to documents',
        time: "Just now",
        icon: FileText,
      }

      setActivities((prev) => [newActivity, ...prev])
      setShowNewActivity(true)

      // Hide the "new" indicator after 5 seconds
      setTimeout(() => {
        setShowNewActivity(false)
      }, 5000)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const getIconColor = (type: string) => {
    switch (type) {
      case "member":
        return "text-blue-500"
      case "proposal":
        return "text-purple-500"
      case "treasury":
        return "text-green-500"
      case "report":
        return "text-orange-500"
      case "document":
        return "text-indigo-500"
      default:
        return "text-primary"
    }
  }

  const getIconBgColor = (type: string) => {
    switch (type) {
      case "member":
        return "bg-blue-100"
      case "proposal":
        return "bg-purple-100"
      case "treasury":
        return "bg-green-100"
      case "report":
        return "bg-orange-100"
      case "document":
        return "bg-indigo-100"
      default:
        return "bg-primary/10"
    }
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={index === 0 && showNewActivity ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-4 relative"
          >
            {index === 0 && showNewActivity && (
              <motion.div
                className="absolute -left-2 -top-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                New
              </motion.div>
            )}

            <div className={`rounded-full p-2 ${getIconBgColor(activity.type)}`}>
              <activity.icon className={`h-4 w-4 ${getIconColor(activity.type)}`} />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

