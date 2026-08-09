"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * One reveal for the whole site. Small distance, short duration, once only —
 * motion should acknowledge the scroll, not perform for it.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Section({
  id,
  index,
  title,
  intro,
  children,
  className,
}: {
  id: string
  /** The "01", "02" rail marker. Keeps the page feeling like a document. */
  index: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 border-t border-border", className)}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <div className="flex items-baseline gap-3">
              <span className="label-mono tabular-nums">{index}</span>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
            </div>
            {intro && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {intro}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

/** Status dot + text label. Never colour alone — the word always ships with it. */
export function StatusPill({ status, note }: { status: "active" | "shipped" | "archived"; note?: string }) {
  const text = status === "active" ? "Active" : status === "shipped" ? "Shipped" : "Archived"

  // No whitespace-nowrap: a long statusNote must be allowed to wrap, or it sets
  // the min-content width of its grid track and pushes the page sideways.
  return (
    <span className="inline-flex items-start gap-1.5">
      <span
        aria-hidden="true"
        className={cn(
          "mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full",
          status === "active" && "bg-[hsl(var(--live))]",
          status === "shipped" && "bg-muted-foreground",
          status === "archived" && "border border-muted-foreground bg-transparent"
        )}
      />
      <span className="label-mono">{note ?? text}</span>
    </span>
  )
}
