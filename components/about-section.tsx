"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Users, Rocket } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="font-mono text-primary">#</span> About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                I&apos;m a Web3, full-stack developer, and Solana-funded builder with a passion for creating
                decentralized solutions that solve real problems. Currently focused on building DePIN infrastructure
                and exploring the intersection of AI and blockchain.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-accent/30 rounded-xl p-6 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Builder</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Self-taught developer turned Superteam India member. Building innovative solutions in Web3 and DePIN.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-accent/30 rounded-xl p-6 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Mentor</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Mentored 1200+ developers through hackathons and workshops. Passionate about growing the Web3 ecosystem.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-accent/30 rounded-xl p-6 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Innovator</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Building in public with radical transparency. Sharing the real journey of creating products people love.
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-accent/30 rounded-xl p-6 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Current Focus</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Exploring AI + Blockchain integration and contributing to open-source projects in the Web3 space.
                  </p>
                </motion.div>
              </div>
            </div>
            
            <div className="md:col-span-5">
              <div className="bg-accent/50 rounded-xl p-6 space-y-6 border border-border/50">
                <div>
                  <h4 className="font-mono text-sm text-muted-foreground mb-3">
                    $ background
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group hover:bg-accent/30 p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Full-Stack Development</p>
                        <p className="text-sm text-muted-foreground">2+ years experience</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group hover:bg-accent/30 p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Web3 & Blockchain</p>
                        <p className="text-sm text-muted-foreground">1+ years experience</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-mono text-sm text-muted-foreground mb-3">
                    $ achievements
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group hover:bg-accent/30 p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Superteam India</p>
                        <p className="text-sm text-muted-foreground">Recognized Builder</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group hover:bg-accent/30 p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Solana x CoinDCX</p>
                        <p className="text-sm text-muted-foreground">Grant Recipient</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 group hover:bg-accent/30 p-3 rounded-lg transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm">→</span>
                      </div>
                      <div>
                        <p className="font-medium">Hackhazards&apos;25</p>
                        <p className="text-sm text-muted-foreground">Lead Mentor (17k+ participants)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-mono text-sm text-muted-foreground mb-3">
                    $ interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">DePIN</Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">Zero Knowledge</Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">AI + Blockchain</Badge>
                    <Badge variant="outline" className="hover:bg-primary/10 transition-colors">Open Source</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}