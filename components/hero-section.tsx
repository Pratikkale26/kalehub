"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DownloadIcon, ArrowRightIcon } from "lucide-react"
import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return
      
      const { clientX, clientY } = ev
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      
      const x = (clientX - left) / width
      const y = (clientY - top) / height
      
      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }
    
    document.addEventListener("mousemove", updateMousePosition)
    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])
  
  const skills = [
    "Web3",
    "DePIN",
    "Solana",
    "Full-Stack",
    "SaaS",
    "React",
    "Node.js",
    "TypeScript",
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/pratikkale26",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/pratikkale26",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/pratikkale26",
      icon: "twitter"
    }
  ]
  
  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 overflow-hidden"
      style={{
        "--mouse-x": "0.5",
        "--mouse-y": "0.5",
      } as React.CSSProperties}
    >
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x)*40%)_calc(50%+var(--mouse-y)*40%),hsl(var(--primary)/10%),transparent_50%)]"
        aria-hidden="true"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 max-w-4xl mx-auto text-center md:text-left pt-20"
      >
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
          <Badge 
            variant="outline"
            className="mb-2 px-4 py-1.5 border-primary/30 bg-primary/5 text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Superteam IN Member
          </Badge>
          <Badge 
            variant="outline"
            className="mb-2 px-4 py-1.5 border-chart-3/30 bg-chart-3/5 text-chart-3 font-mono text-sm hover:bg-chart-3/10 transition-colors"
          >
            Solana Turbin3 Graduate
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2 hover:from-chart-2 hover:to-primary transition-all duration-300">
            Pratik Kale
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
          <span>Full-Stack & Web3 Engineer</span>
        </h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed">
          Web3, full-stack developer, and Solana-funded builder passionate about creating innovative solutions that push the boundaries of technology.
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
          {skills.map((skill) => (
            <Badge 
              key={skill}
              variant="secondary" 
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105",
                skill === "Web3" && "bg-chart-1/20 text-chart-1 hover:bg-chart-1/30",
                skill === "DePIN" && "bg-chart-2/20 text-chart-2 hover:bg-chart-2/30",
                skill === "Solana" && "bg-chart-3/20 text-chart-3 hover:bg-chart-3/30",
                skill === "Full-Stack" && "bg-chart-4/20 text-chart-4 hover:bg-chart-4/30",
              )}
            >
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
          <Button className="group hover:scale-105 transition-transform">
            <Link href="#projects">View Projects</Link>
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" asChild className="hover:scale-105 transition-transform">
            <Link href="/Pratik_Kale_CV.pdf" target="_blank" download>
              Resume
              <DownloadIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">{link.name}</span>
              <i className={`fab fa-${link.icon} text-xl`} />
            </Link>
          ))}
        </div>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </div>
    </div>
  )
}