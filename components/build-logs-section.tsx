"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRightIcon, CalendarIcon, Terminal, Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type BuildLog = {
  date: string
  title: string
  content: string
  project?: string
  tags: string[]
  status?: 'completed' | 'in-progress' | 'planned'
  impact?: string
  challenges?: string[]
  nextSteps?: string[]
}

const buildLogs: BuildLog[] = [
  // {
  //   date: "2023-09-15",
  //   title: "Solving state management in DecentralWatch",
  //   content: "Today I refactored the state management in DecentralWatch to use Zustand. This simplified a lot of the component logic and fixed several race conditions we were seeing with the previous Redux setup. Need to write tests to make sure everything's solid.",
  //   project: "DecentralWatch",
  //   tags: ["Zustand", "Refactor", "State Management"],
  //   status: "completed",
  //   impact: "Reduced bundle size by 15% and improved state update performance by 40%",
  //   challenges: ["Migrating existing Redux state", "Handling async operations"],
  //   nextSteps: ["Write comprehensive tests", "Document the new state management pattern"]
  // },
  {
    date: "2025-04-20",
    title: "Implemented electron app for DecentralWatch node",
    content: "I've been working on a desktop app for DecentralWatch Node that allows validators to monitor websites and get real-time updates on their status. It's a simple app that uses Electron and React. I'm still learning about Electron, but I'm getting the hang of it. I'm also learning about the different ways to store data in Electron apps.",
    project: "DecentralWatch",
    tags: ["Electron", "React", "Node.js"],
    status: "completed",
    impact: "Reduced server load by 40% and improved real-time updates",
    challenges: ["WebSocket reconnection logic", "State synchronization"],
    nextSteps: ["Add error tracking", "Implement fallback mechanism"]
  },
  {
    date: "2025-04-26",
    title: "Started learning Rust for Solana programs",
    content: "Beginning my journey with Rust for Solana program development. The lifetime is challenging but I'm getting the hang of it. Built a simple counter program as a first step.",
    project: undefined,
    tags: ["Rust", "Solana", "Learning"],
    status: "in-progress",
    impact: "Building foundation for Solana program development",
    challenges: ["Rust ownership model", "Solana program architecture"],
    nextSteps: ["Complete Rust fundamentals", "Build more complex programs"]
  },
  {
    date: "2025-05-12",
    title: "First tests with CrowdLens voting mechanism",
    content: "Implemented the initial version of the reputation-weighted voting system for CrowdLens. Next up: adding quadratic voting to prevent whale dominance in the feedback process.",
    project: "CrowdLens",
    tags: ["Voting", "Solana", "Smart Contract"],
    status: "in-progress",
    impact: "Created foundation for decentralized feedback system",
    challenges: ["Vote manipulation prevention", "Gas optimization"],
    nextSteps: ["Implement quadratic voting", "Add vote delegation"]
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).format(date)
}

export default function BuildLogsSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProject, setSelectedProject] = useState<string>("all")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [selectedLog, setSelectedLog] = useState<BuildLog | null>(null)

  const projects = Array.from(new Set(buildLogs.map(log => log.project).filter(Boolean)))
  
  const filteredLogs = buildLogs.filter(log => {
    const matchesSearch = 
      log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesProject = selectedProject === "all" || log.project === selectedProject
    const matchesStatus = selectedStatus === "all" || log.status === selectedStatus
    
    return matchesSearch && matchesProject && matchesStatus
  })

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-500/30'
      case 'in-progress':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/30'
      case 'planned':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30'
      default:
        return 'bg-primary/10 text-primary border-primary/30'
    }
  }

  return (
    <section id="build-logs" className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl font-bold">
                <span className="font-mono text-primary">#</span> Build Logs
              </h2>
              <Terminal className="text-chart-2 h-6 w-6" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Raw, unfiltered updates from my development journey. These build logs document the real process 
              of shipping products, with all the challenges and victories along the way.
            </p>
          </div>
          
          <Link href="/logs">
            <Button variant="outline" className="group">
              View All Logs
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              {projects.map(project => (
                <SelectItem key={project} value={project || ""}>
                  {project}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="planned">Planned</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-6">
          {filteredLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-card/70 backdrop-blur transition-all duration-300 hover:border-primary/30 cursor-pointer"
                onClick={() => setSelectedLog(log)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{formatDate(log.date)}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {log.status && (
                        <Badge 
                          variant="outline" 
                          className={cn("text-xs", getStatusColor(log.status))}
                        >
                          {log.status}
                        </Badge>
                      )}
                      
                      {log.project && (
                        <Badge 
                          variant="outline" 
                          className={cn(
                            "text-xs",
                            log.project === "DecentralWatch" && "bg-chart-1/10 text-chart-1 border-chart-1/30",
                            log.project === "CrowdLens" && "bg-chart-2/10 text-chart-2 border-chart-2/30"
                          )}
                        >
                          {log.project}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{log.title}</h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground whitespace-pre-line line-clamp-3">{log.content}</p>
                </CardContent>
                
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {log.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedLog} onOpenChange={() => setSelectedLog(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedLog?.title}</DialogTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>{selectedLog?.date && formatDate(selectedLog.date)}</span>
              </div>
              {selectedLog?.project && (
                <Badge 
                  variant="outline" 
                  className={cn(
                    "text-xs",
                    selectedLog.project === "DecentralWatch" && "bg-chart-1/10 text-chart-1 border-chart-1/30",
                    selectedLog.project === "CrowdLens" && "bg-chart-2/10 text-chart-2 border-chart-2/30"
                  )}
                >
                  {selectedLog.project}
                </Badge>
              )}
              {selectedLog?.status && (
                <Badge 
                  variant="outline" 
                  className={cn("text-xs", getStatusColor(selectedLog.status))}
                >
                  {selectedLog.status}
                </Badge>
              )}
            </div>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">
                {selectedLog?.content}
              </p>
            </div>

            {selectedLog?.impact && (
              <div className="space-y-2">
                <h3 className="font-semibold">Impact</h3>
                <p className="text-muted-foreground">
                  {selectedLog.impact}
                </p>
              </div>
            )}

            {selectedLog?.challenges && selectedLog.challenges.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold">Challenges</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {selectedLog.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedLog?.nextSteps && selectedLog.nextSteps.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold">Next Steps</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {selectedLog.nextSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              {selectedLog?.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedLog(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}