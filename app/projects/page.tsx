import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { selectedWork, otherWork, type Work } from "@/data/work"
import { StatusPill } from "@/components/section"

export const metadata: Metadata = {
  title: "Projects — Pratik Kale",
  description:
    "The full archive: compilers, realtime SDKs, observability tooling, and applications across Solana, Avalanche, Monad, and Sui.",
  alternates: { canonical: "https://kalehub.com/projects" },
}

const DOMAIN_ORDER = ["Compilers", "Realtime SDKs", "Observability", "Applications"] as const

const DOMAIN_BLURB: Record<string, string> = {
  Compilers: "Making on-chain code cheaper to run, without making it harder to write.",
  "Realtime SDKs": "The same realtime primitive — rooms, presence, shared state — across execution environments.",
  Observability: "Catching the failures that report themselves as successes.",
  Applications: "Products built end to end, mostly earlier work.",
}

function Row({ item }: { item: Work }) {
  return (
    <article className="grid gap-3 border-t border-border py-6 md:grid-cols-[9.5rem_1fr] md:gap-8">
      <div className="flex min-w-0 flex-row flex-wrap items-center gap-x-4 gap-y-1 md:flex-col md:items-start md:gap-2">
        <span className="label-mono">{item.period}</span>
        <StatusPill status={item.status} note={item.statusNote} />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-medium tracking-tight">{item.name}</h3>
          <span className="text-sm text-[hsl(var(--brand))]">{item.tagline}</span>
        </div>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        {item.notes && (
          <ul className="mt-3 space-y-1.5">
            {item.notes.map((n) => (
              <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-border" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {item.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-[hsl(var(--brand))]"
            >
              {l.label}
              <ArrowUpRight
                className="h-3 w-3 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        <p className="mt-3 font-mono text-[11px] text-muted-foreground">{item.stack.join(" · ")}</p>
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  const all = [...selectedWork, ...otherWork]

  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-28 sm:px-8 md:pt-36">
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
        Back
      </Link>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">Projects</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {all.length} projects across Solana, Avalanche, Monad, and Sui, grouped by what they are for.
        Each links to source, a package, or a running deployment.
      </p>

      <div className="mt-14 space-y-16">
        {DOMAIN_ORDER.map((domain) => {
          const items = all.filter((w) => w.domain === domain)
          if (items.length === 0) return null

          return (
            <section key={domain}>
              <h2 className="text-lg font-semibold tracking-tight">{domain}</h2>
              <p className="mb-4 mt-1 text-sm text-muted-foreground">{DOMAIN_BLURB[domain]}</p>
              {items.map((item) => (
                <Row key={item.slug} item={item} />
              ))}
            </section>
          )
        })}
      </div>
    </div>
  )
}
