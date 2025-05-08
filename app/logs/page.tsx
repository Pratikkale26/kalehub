'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeftIcon, CalendarIcon, Terminal, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import Link from "next/link"
import { buildLogs } from "@/data/build-logs"
import { cn } from "@/lib/utils"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  }).format(date)
}

export default function BuildLogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLog, setSelectedLog] = useState<typeof buildLogs[0] | null>(null)
  
  const filteredLogs = buildLogs.filter(log => 
    log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

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
    <main className="min-h-screen py-20">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">
              <span className="font-mono text-primary">#</span> Build Logs
            </h1>
            <Terminal className="text-chart-2 h-6 w-6" />
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search logs by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No logs found matching your search.</p>
          </div>
        )}
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
    </main>
  )
} 