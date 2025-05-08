"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

type TechCategory = "frontend" | "backend" | "database" | "blockchain" | "infrastructure" | "tools"

type TechItem = {
  name: string
  level: "exploring" | "familiar" | "proficient" | "expert"
  category: TechCategory
}

const techStack: TechItem[] = [
  // Frontend
  { name: "Next.js", level: "expert", category: "frontend" },
  { name: "React", level: "expert", category: "frontend" },
  { name: "TypeScript", level: "expert", category: "frontend" },
  { name: "Tailwind", level: "expert", category: "frontend" },
  { name: "ShadCN UI", level: "proficient", category: "frontend" },
  { name: "Electron", level: "proficient", category: "frontend" },
  { name: "Framer Motion", level: "proficient", category: "frontend" },
  { name: "Zustand", level: "proficient", category: "frontend" },
  { name: "React Query", level: "proficient", category: "frontend" },
  
  // Backend
  { name: "Node.js", level: "expert", category: "backend" },
  { name: "Express", level: "expert", category: "backend" },
  { name: "Prisma", level: "proficient", category: "backend" },
  { name: "WebSockets", level: "proficient", category: "backend" },
  { name: "GraphQL", level: "familiar", category: "backend" },
  { name: "tRPC", level: "familiar", category: "backend" },
  { name: "Kafka", level: "exploring", category: "backend" },
  
  // Database
  { name: "PostgreSQL", level: "proficient", category: "database" },
  { name: "MongoDB", level: "proficient", category: "database" },
  { name: "Redis", level: "familiar", category: "database" },
  { name: "Supabase", level: "proficient", category: "database" },
  
  // Blockchain
  { name: "Solana", level: "proficient", category: "blockchain" },
  { name: "Anchor", level: "proficient", category: "blockchain" },
  { name: "Ethereum", level: "familiar", category: "blockchain" },
  { name: "Solidity", level: "familiar", category: "blockchain" },
  { name: "Rust", level: "familiar", category: "blockchain" },
  { name: "Web3.js", level: "proficient", category: "blockchain" },
  { name: "Wallet Adapters", level: "proficient", category: "blockchain" },
  
  // Infrastructure
  { name: "Docker", level: "proficient", category: "infrastructure" },
  { name: "AWS", level: "familiar", category: "infrastructure" },
  { name: "Vercel", level: "proficient", category: "infrastructure" },
  { name: "CI/CD", level: "familiar", category: "infrastructure" },
  { name: "Kubernetes", level: "exploring", category: "infrastructure" },
  { name: "Turborepo", level: "familiar", category: "infrastructure" },
  
  // Tools
  { name: "Git", level: "expert", category: "tools" },
  { name: "Jest", level: "proficient", category: "tools" },
  { name: "Storybook", level: "familiar", category: "tools" },
  { name: "Clerk", level: "proficient", category: "tools" },
  { name: "OpenAI API", level: "proficient", category: "tools" },
  { name: "Figma", level: "familiar", category: "tools" },
]

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TechCategory>("frontend")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  
  const filterTechByCategory = (category: TechCategory) => {
    return techStack.filter(tech => tech.category === category)
  }
  
  const levelOrder = {
    "expert": 4,
    "proficient": 3,
    "familiar": 2,
    "exploring": 1
  }
  
  const sortByLevel = (a: TechItem, b: TechItem) => {
    return levelOrder[b.level] - levelOrder[a.level]
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert": return "hsl(var(--chart-1))"
      case "proficient": return "hsl(var(--chart-2))"
      case "familiar": return "hsl(var(--chart-3))"
      default: return "hsl(var(--chart-4))"
    }
  }

  const getCategoryColor = (category: TechCategory) => {
    switch (category) {
      case "frontend": return "hsl(var(--chart-1))"
      case "backend": return "hsl(var(--chart-2))"
      case "database": return "hsl(var(--chart-3))"
      case "blockchain": return "hsl(var(--chart-4))"
      case "infrastructure": return "hsl(var(--chart-5))"
      case "tools": return "hsl(var(--primary))"
    }
  }
  
  return (
    <section id="tech-stack" className="py-20 md:py-32">
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="font-mono text-primary">#</span> Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            The technologies, frameworks, and tools I use to build products. This evolving stack represents my journey as a developer from frontend to blockchain.
          </p>
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 min-h-[500px] flex items-center justify-center">
              <div className="relative w-[600px] h-[400px] rounded-2xl overflow-hidden">
                <Image 
                  src="/1.jpg"
                  alt="Technology Network Visualization"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
            
            <div className="lg:w-1/2 flex items-center">
              <Tabs defaultValue="frontend" value={activeTab} onValueChange={(value) => setActiveTab(value as TechCategory)}>
                <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="database">Database</TabsTrigger>
                  <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                  <TabsTrigger value="infrastructure">Infra</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
                {(["frontend", "backend", "database", "blockchain", "infrastructure", "tools"] as TechCategory[]).map((category) => (
                  <TabsContent key={category} value={category} className="mt-0">
                    <div className="bg-accent/30 rounded-lg p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filterTechByCategory(category).sort(sortByLevel).map((tech) => (
                          <div 
                            key={tech.name} 
                            className="bg-card border border-border/50 rounded-md p-4 relative overflow-hidden"
                          >
                            <div 
                              className="absolute bottom-0 left-0 h-1"
                              style={{ 
                                width: tech.level === "expert" ? "100%" 
                                  : tech.level === "proficient" ? "75%" 
                                  : tech.level === "familiar" ? "50%" 
                                  : "25%",
                                background: getLevelColor(tech.level)
                              }}
                            />
                            <h3 className="font-medium mb-1">{tech.name}</h3>
                            <p className="text-xs text-muted-foreground capitalize">{tech.level}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}