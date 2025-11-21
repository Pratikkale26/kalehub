"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "Co-Founder & Full-Stack Developer",
    company: "SoApp",
    location: "IIT-M Incubated",
    period: "2023 - Present",
    description: "Building a social collaboration platform from scratch. Led the development of the frontend infrastructure and implemented real-time collaboration features using WebSockets and Canvas API.",
    achievements: [
      "Architected scalable frontend architecture serving 10k+ users",
      "Implemented real-time collaboration features with sub-100ms latency",
      "Led a team of 3 developers in agile development practices"
    ],
    tech: ["Next.js", "TypeScript", "WebSockets", "Canvas API", "PostgreSQL"],
    link: "https://soapp.tech"
  },
  {
    title: "Web3 Developer & DePIN Specialist",
    company: "DecentralWatch",
    location: "Remote",
    period: "2023 - Present",
    description: "Developed a DePIN uptime monitoring solution with Electron desktop app and web dashboard. Received Solana x CoinDCX grant for innovation in decentralized infrastructure.",
    achievements: [
      "Built monitoring solution for 50+ Solana validators",
      "Received Solana x CoinDCX grant for DePIN innovation",
      "Reduced infrastructure monitoring costs by 40% for clients"
    ],
    tech: ["Solana", "Electron", "React", "Node.js", "Web3.js"],
    link: "https://watch.kalehub.com"
  },
  {
    title: "Hackathon Mentor & Technical Lead",
    company: "Hackhazards",
    location: "Pan India",
    period: "2022 - Present",
    description: "Mentored 1200+ developers across multiple hackathons. Led technical workshops on Web3 development, React, and full-stack development.",
    achievements: [
      "Mentored 1200+ developers in Web3 and full-stack development",
      "Led Hackhazards'25 with 17k+ participants",
      "Conducted 50+ technical workshops and training sessions"
    ],
    tech: ["Web3", "Solana", "React", "Node.js", "Teaching"],
    link: null
  },
  {
    title: "Full-Stack Developer",
    company: "Flowrge",
    location: "Remote",
    period: "2022 - 2023",
    description: "Developed automation platform for workflow optimization. Built REST APIs and responsive frontend with advanced data visualization.",
    achievements: [
      "Automated workflows for 20+ enterprise clients",
      "Reduced manual processing time by 60%",
      "Implemented real-time analytics dashboard"
    ],
    tech: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
    link: null
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-accent/10">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="font-mono text-primary">#</span> Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            My journey through building products, mentoring developers, and contributing to the Web3 ecosystem. From startups to hackathons, each role has shaped my approach to solving complex problems.
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border/50" />
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:justify-between gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="bg-card/70 backdrop-blur border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <span>{experience.company}</span>
                            {experience.link && (
                              <Link 
                                href={experience.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary/80 transition-colors"
                              >
                                <ExternalLinkIcon className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}