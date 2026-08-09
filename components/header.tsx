"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#proof", label: "Proof" },
  { href: "#open-source", label: "Open source" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile sheet on Escape.
  React.useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        isScrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="#top" className="font-mono text-sm font-medium tracking-tight">
          pratik kale
          <span className="text-[hsl(var(--brand))]">.</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-2 hidden md:block">
            <ModeToggle />
          </div>

          <div className="flex items-center md:hidden">
            <ModeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto max-w-5xl px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-border last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
