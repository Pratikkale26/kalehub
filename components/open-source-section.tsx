import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { contributions } from "@/data/proof"
import { Reveal, Section } from "@/components/section"
import { cn } from "@/lib/utils"

function StateTag({ state }: { state: "merged" | "open" }) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
        state === "merged"
          ? "border-[hsl(var(--live))]/40 text-[hsl(var(--live))]"
          : "border-border text-muted-foreground"
      )}
    >
      {state}
    </span>
  )
}

export default function OpenSourceSection() {
  return (
    <Section
      id="open-source"
      index="03"
      title="Open source"
      intro="Other people's codebases. An open pull request is not a merged one, so both are labelled."
    >
      <div>
        {contributions.map((c) => (
          <Reveal key={c.repo}>
            <div className="grid gap-3 border-t border-border py-6 md:grid-cols-[14rem_1fr] md:gap-8">
              <div>
                <Link
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-mono text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-[hsl(var(--brand))]"
                >
                  {c.repo}
                  <ArrowUpRight
                    className="h-3 w-3 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                    aria-hidden="true"
                  />
                </Link>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.about}</p>
                {c.scale && <p className="label-mono mt-1.5">{c.scale}</p>}
              </div>

              <ul className="space-y-2.5">
                {c.prs.map((pr) => (
                  <li key={pr.number} className="flex items-start gap-3">
                    <StateTag state={pr.state} />
                    <Link
                      href={pr.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed text-muted-foreground underline decoration-transparent underline-offset-4 transition-colors hover:text-foreground hover:decoration-[hsl(var(--brand))]"
                    >
                      <span className="font-mono text-xs tabular-nums">#{pr.number}</span>{" "}
                      {pr.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
