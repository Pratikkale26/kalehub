import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pratik Kale</h3>
            <p className="text-muted-foreground max-w-md">
              Full-Stack & Web3 Engineer building innovative solutions in the decentralized space.
            </p>
            <div className="mt-4">
              <a href="mailto:pratikkale7661@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                pratikkale7661@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#tech-stack" className="text-muted-foreground hover:text-primary transition-colors">Tech Stack</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="https://github.com/pratikkale26" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/pratikkale26" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://twitter.com/pratikkale26" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
              </a>
              <a href="https://kalehub.com" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Portfolio
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pratik Kale. All rights reserved.</p>
          <p className="mt-1 font-mono text-xs">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}