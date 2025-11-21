"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GraduationCapIcon, CalendarIcon, MapPinIcon, AwardIcon } from "lucide-react"
import Link from "next/link"

const education = [
  {
    degree: "B.S in Data Science",
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, India",
    period: "2021 - 2025",
    description: "Pursuing Bachelor's degree in Data Science with focus on machine learning, statistical analysis, and computational mathematics. Relevant coursework includes algorithms, data structures, database systems, and distributed computing.",
    achievements: [
      "GPA: 8.5/10",
      "Dean's List for Academic Excellence (2022, 2023)",
      "Teaching Assistant for Data Structures course",
      "Lead organizer of IIT-M Web3 Community"
    ],
    activities: [
      "Web3 Community Lead",
      "Competitive Programming Team",
      "Data Science Club",
      "Hackathon Organizer"
    ]
  }
]

const certifications = [
  {
    name: "Solana Development",
    issuer: "Solana Foundation",
    date: "2023",
    credential: "Advanced Solana Programming",
    link: "https://www.solana.com"
  },
  {
    name: "Web3.js Development",
    issuer: "Ethereum Foundation",
    date: "2023",
    credential: "DApp Development Certification",
    link: "https://ethereum.org"
  },
  {
    name: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    credential: "Complete Web Development Bootcamp",
    link: "https://freecodecamp.org"
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "2022",
    credential: "Advanced ML Algorithms and Applications",
    link: "https://online.stanford.edu"
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="font-mono text-primary">#</span> Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            My academic foundation and continuous learning journey in computer science, data science, and emerging technologies.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Education */}
            <div className="lg:col-span-2">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-accent/30 rounded-xl p-8 border border-border/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCapIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
                          <AwardIcon className="w-4 h-4 text-primary" />
                          Academic Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Extracurricular Activities</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card/70 backdrop-blur border border-border/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <AwardIcon className="w-5 h-5 text-primary" />
                    Certifications
                  </h3>
                  
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={cert.name} className="border-b border-border/30 last:border-0 pb-4 last:pb-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-sm">{cert.name}</h4>
                          <span className="text-xs text-muted-foreground">{cert.date}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{cert.credential}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                          {cert.link && (
                            <Link 
                              href={cert.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:text-primary/80 transition-colors"
                            >
                              Verify
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Learning Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-primary/5 to-chart-2/5 rounded-xl p-8 border border-border/50">
              <h3 className="text-lg font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Beyond formal education, I&apos;m committed to continuous learning in emerging technologies. 
                I regularly participate in hackathons, contribute to open-source projects, and stay updated 
                with the latest developments in Web3, AI, and full-stack development.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">Self-Taught Developer</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">Open Source Contributor</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">Hackathon Enthusiast</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">Technical Writer</Badge>
                <Badge variant="outline" className="hover:bg-primary/10 transition-colors">Community Builder</Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}