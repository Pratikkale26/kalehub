import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { selectedWork, otherWork, type Work } from "@/data/work"

/** How many of otherWork the homepage shows. The rest are on /projects. */
const ALSO_BUILT_ON_HOMEPAGE = 4
import { Reveal, Section, StatusPill } from "@/components/section"

function ProofLinks({ item }: { item: Work }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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
  )
}

function SelectedRow({ item }: { item: Work }) {
  return (
    <article className="grid gap-4 border-t border-border py-8 md:grid-cols-[9.5rem_1fr] md:gap-8 md:py-10">
      {/* Rail: the scan column. Domain, when, and what state it's in. */}
      <div className="flex min-w-0 flex-row flex-wrap items-center gap-x-4 gap-y-1 md:flex-col md:items-start md:gap-2">
        <span className="label-mono text-foreground">{item.domain}</span>
        <span className="label-mono">{item.period}</span>
        <StatusPill status={item.status} note={item.statusNote} />
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
        <p className="mt-0.5 text-sm text-[hsl(var(--brand))]">{item.tagline}</p>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        {item.notes && (
          <ul className="mt-4 space-y-1.5">
            {item.notes.map((n) => (
              <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-border" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1">
          {item.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <ProofLinks item={item} />
        </div>
      </div>
    </article>
  )
}

function CompactRow({ item }: { item: Work }) {
  return (
    <article className="grid gap-2 border-t border-border py-5 md:grid-cols-[9.5rem_1fr] md:gap-8">
      <div className="flex min-w-0 flex-row flex-wrap items-center gap-x-4 gap-y-1 md:flex-col md:items-start md:gap-2">
        <span className="label-mono">{item.domain}</span>
        <StatusPill status={item.status} note={item.statusNote} />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-medium tracking-tight">{item.name}</h3>
          <span className="text-sm text-muted-foreground">{item.tagline}</span>
        </div>

        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <ProofLinks item={item} />
          <span className="font-mono text-[11px] text-muted-foreground">
            {item.stack.slice(0, 4).join(" · ")}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function WorkSection() {
  return (
    <Section
      id="work"
      index="01"
      title="Selected work"
      intro="Three threads: compilers, realtime SDKs, and observability. Every claim below links to something you can go and check."
    >
      <div>
        {selectedWork.map((item, i) => (
          <Reveal key={item.slug} delay={Math.min(i * 0.04, 0.12)}>
            <SelectedRow item={item} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mb-1 mt-16 text-base font-semibold tracking-tight">Also built</h3>
        <p className="mb-2 text-sm text-muted-foreground">
          Shipped, but not the headline. {otherWork.length - ALSO_BUILT_ON_HOMEPAGE} more on{" "}
          <Link href="/projects" className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-[hsl(var(--brand))]">
            the projects page
          </Link>
          .
        </p>
      </Reveal>

      <div>
        {otherWork.slice(0, ALSO_BUILT_ON_HOMEPAGE).map((item) => (
          <Reveal key={item.slug}>
            <CompactRow item={item} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 text-sm">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 font-medium underline decoration-[hsl(var(--brand))] decoration-2 underline-offset-4"
          >
            All projects, grouped by domain
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="https://github.com/Pratikkale26?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Experiments and forks live on GitHub
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}
