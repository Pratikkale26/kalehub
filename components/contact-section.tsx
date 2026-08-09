import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { profile } from "@/data/profile"
import { Reveal } from "@/components/section"

const channels = [
  { label: "Email", value: profile.email, href: profile.links.email },
  { label: "GitHub", value: "Pratikkale26", href: profile.links.github },
  { label: "X", value: "@PratikKale26", href: profile.links.x },
  { label: "LinkedIn", value: "pratikkale26", href: profile.links.linkedin },
  { label: "Superteam Earn", value: "Pratikkale26", href: profile.links.superteam },
]

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
        <Reveal>
          <div className="flex items-baseline gap-3">
            <span className="label-mono tabular-nums">06</span>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Get in touch</h2>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Looking for infrastructure and systems engineering roles and internships. Always up for
            collaborating on Solana, Avalanche, or Monad tooling. Email is fastest.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <dl className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {channels.map((c) => (
              <div key={c.label} className="border-t border-border pt-3">
                <dt className="label-mono">{c.label}</dt>
                <dd className="mt-1">
                  <Link
                    href={c.href}
                    target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-[hsl(var(--brand))]"
                  >
                    {c.value}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                      aria-hidden="true"
                    />
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
