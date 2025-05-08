"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BrainCog, Lightbulb, MessageSquare, ThumbsUp, X } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type Idea = {
  title: string
  description: string
  tags: string[]
  upvotes: number
  comments: number
  isUpvoted?: boolean
  author?: string
  date?: string
}

const initialIdeas: Idea[] = [
  {
    title: "Decentralized Credential Verification",
    description: "A system that allows institutions to issue verifiable credentials on-chain, and individuals to share them without revealing unnecessary information.",
    tags: ["ZK Proofs", "Identity", "Privacy"],
    upvotes: 24,
    comments: 7,
  },
  {
    title: "AI-Powered On-Chain Governance",
    description: "Using AI to analyze and summarize governance proposals, providing insights and potential impacts to DAO participants.",
    tags: ["DAO", "Governance", "AI"],
    upvotes: 18,
    comments: 5,
  },
  {
    title: "Cross-Chain Identity Protocol",
    description: "A protocol that allows users to maintain a single identity across multiple blockchains, with attestations and reputation.",
    tags: ["Identity", "Cross-Chain", "Solana"],
    upvotes: 32,
    comments: 9,
  },
  {
    title: "Developer-Focused Block Explorer",
    description: "A block explorer built specifically for developers, with better UI for debugging transactions and smart contracts.",
    tags: ["Dev Tools", "UX", "Debugging"],
    upvotes: 15,
    comments: 3,
  },
]

export default function IdeaBoardSection() {
  const [ideas, setIdeas] = useState(initialIdeas)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null)
  const [newIdea, setNewIdea] = useState({
    title: "",
    description: "",
    tags: "",
  })
  const [sortBy, setSortBy] = useState<'upvotes' | 'recent'>('upvotes')
  
  const handleUpvote = (index: number) => {
    setIdeas(prevIdeas => 
      prevIdeas.map((idea, i) => 
        i === index
          ? { 
              ...idea, 
              upvotes: idea.isUpvoted ? idea.upvotes - 1 : idea.upvotes + 1,
              isUpvoted: !idea.isUpvoted 
            }
          : idea
      )
    )
  }

  const handleSubmitIdea = () => {
    const tags = newIdea.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    const newIdeaWithMetadata = {
      ...newIdea,
      tags,
      upvotes: 0,
      comments: 0,
      author: "Anonymous", // In a real app, this would be the logged-in user
      date: new Date().toISOString(),
    }
    setIdeas(prev => [newIdeaWithMetadata, ...prev])
    setNewIdea({ title: "", description: "", tags: "" })
    setIsModalOpen(false)
  }
  
  const handleIdeaClick = (idea: Idea) => {
    setSelectedIdea(idea)
  }

  const handleCloseIdeaDetails = () => {
    setSelectedIdea(null)
  }
  
  const sortedIdeas = [...ideas].sort((a, b) => {
    if (sortBy === 'upvotes') {
      return b.upvotes - a.upvotes
    }
    return new Date(b.date || '').getTime() - new Date(a.date || '').getTime()
  })
  
  return (
    <section id="ideas" className="py-20 md:py-32 bg-accent/20">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl font-bold">
                <span className="font-mono text-primary">#</span> Project Ideas
              </h2>
              <Lightbulb className="text-chart-4 h-6 w-6" />
            </div>
            <p className="text-muted-foreground max-w-2xl">
              My public idea board. These are concepts I&apos;m considering building or exploring in the future. 
              Feel free to upvote ideas you find interesting or reach out if you would like to collaborate.
            </p>
          </div>
          
          <div className="flex gap-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'upvotes' | 'recent')}
              className="px-3 py-2 rounded-md border border-input bg-background"
            >
              <option value="upvotes">Most Upvoted</option>
              <option value="recent">Most Recent</option>
            </select>
            
            <Button onClick={() => setIsModalOpen(true)}>
              <BrainCog className="mr-2 h-4 w-4" />
              Suggest an Idea
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedIdeas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full bg-card/70 backdrop-blur transition-all duration-300 hover:border-primary/30 cursor-pointer"
                onClick={() => handleIdeaClick(idea)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{idea.title}</CardTitle>
                    {idea.author && (
                      <Badge variant="outline" className="text-xs">
                        by {idea.author}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{idea.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-primary/5">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                      "gap-2 text-muted-foreground",
                      idea.isUpvoted && "text-chart-4"
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleUpvote(index)
                    }}
                  >
                    <ThumbsUp className={cn(
                      "h-4 w-4",
                      idea.isUpvoted && "fill-chart-4"
                    )} />
                    <span>{idea.upvotes}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    <span>{idea.comments}</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Suggest a New Idea</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newIdea.title}
                onChange={(e) => setNewIdea(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter a descriptive title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newIdea.description}
                onChange={(e) => setNewIdea(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your idea in detail"
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={newIdea.tags}
                onChange={(e) => setNewIdea(prev => ({ ...prev, tags: e.target.value }))}
                placeholder="e.g. Web3, AI, Privacy"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitIdea}>
              Submit Idea
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedIdea} onOpenChange={handleCloseIdeaDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedIdea?.title}</DialogTitle>
            {selectedIdea?.author && (
              <p className="text-sm text-muted-foreground">
                Suggested by {selectedIdea.author} • {new Date(selectedIdea.date || '').toLocaleDateString()}
              </p>
            )}
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">
                {selectedIdea?.description}
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {selectedIdea?.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-primary/5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t">
              <Button 
                variant="ghost" 
                className={cn(
                  "gap-2",
                  selectedIdea?.isUpvoted && "text-chart-4"
                )}
                onClick={(e) => {
                  e.stopPropagation()
                  handleUpvote(sortedIdeas.findIndex(i => i.title === selectedIdea?.title))
                }}
              >
                <ThumbsUp className={cn(
                  "h-5 w-5",
                  selectedIdea?.isUpvoted && "fill-chart-4"
                )} />
                <span>{selectedIdea?.upvotes} Upvotes</span>
              </Button>
              
              <Button variant="ghost" className="gap-2">
                <MessageSquare className="h-5 w-5" />
                <span>{selectedIdea?.comments} Comments</span>
              </Button>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseIdeaDetails}>
              Close
            </Button>
            <Button variant="default">
              <MessageSquare className="mr-2 h-4 w-4" />
              Add Comment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}