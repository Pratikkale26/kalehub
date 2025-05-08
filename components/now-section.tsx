"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const nowItems = [
  {
    title: "Building Decentralwatch validator network",
    description: "Working on scaling the validator network and improving node health monitoring",
    category: "Development"
  },
  {
    title: "Learning Kubernetes for scaling infrastructure",
    description: "Deep diving into K8s for better deployment and scaling strategies",
    category: "Learning"
  },
  {
    title: "Optimizing WebSockets for canvaschat",
    description: "Improving real-time communication performance and reliability",
    category: "Development"
  },
  {
    title: "Mentoring at Solana hackathons",
    description: "Helping developers build their first Web3 applications",
    category: "Community"
  },
  {
    title: "Working on Web3 UX improvements",
    description: "Making blockchain interactions more intuitive and user-friendly",
    category: "Research"
  }
]

export function NowSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % nowItems.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + nowItems.length) % nowItems.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % nowItems.length)
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 max-w-sm w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-primary" />
            <h3 className="font-mono text-sm font-semibold">Now</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? (
              <Play className="h-3 w-3" />
            ) : (
              <Pause className="h-3 w-3" />
            )}
          </Button>
        </div>
        
        <div className="relative h-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-primary" />
                  <p className="text-sm font-medium">{nowItems[currentIndex].title}</p>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  {nowItems[currentIndex].description}
                </p>
                <div className="pl-6">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {nowItems[currentIndex].category}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex space-x-1">
            {nowItems.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "block h-1 rounded-full transition-all duration-300",
                  i === currentIndex 
                    ? "w-4 bg-primary" 
                    : "w-1.5 bg-muted"
                )}
              />
            ))}
          </div>
          
          <div className={cn(
            "flex items-center space-x-1 transition-opacity duration-200",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={handleNext}
            >
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}