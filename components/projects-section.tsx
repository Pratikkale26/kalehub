"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const displayedProjects = projects.slice(0, 6)
  
  return (
    <section id="projects" className="py-20 md:py-32 bg-accent/10">
      <div className="container max-w-6xl">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="font-mono text-primary">#</span> Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my recent projects, focused on Web3, DePIN, and innovative technologies. Each project represents a step in my journey as a builder.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="h-full overflow-hidden border-border/50 bg-card/70 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={cn(
                      "h-full w-full object-cover transition-transform duration-500",
                      hoveredIndex === index && "scale-110"
                    )}
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    {project.grant && (
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {project.grant}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <Badge key={badge} variant="secondary">{badge}</Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <GithubIcon className="h-4 w-4" />
                      <span>Repo</span>
                    </Button>
                  </Link>
                  
                  {project.links.live && (
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ExternalLinkIcon className="h-4 w-4" />
                        <span>Live</span>
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}