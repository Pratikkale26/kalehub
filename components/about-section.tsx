import { stack, learning } from "@/data/stack"
import { Reveal, Section } from "@/components/section"

const paragraphs = [
  "I started out building products — a DePIN network, an automation platform, a pile of dApps. Then I got more interested in the layer underneath.",
  "Every project since has started as a specific annoyance. Anvil: wanting Anchor's ergonomics without its overhead. SolSocket: writing the same realtime plumbing twice. ICM Trace: a transaction that succeeded on one chain and did nothing on the other.",
  "Studying Data Science at IIT Madras alongside it. Most of what I build ends up open source.",
]

export default function AboutSection() {
  return (
    <Section id="about" index="05" title="About">
      <div className="grid gap-12 md:grid-cols-[1fr_16rem] md:gap-16">
        <Reveal>
          <div className="max-w-2xl space-y-4">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="space-y-6">
            {stack.map((g) => (
              <div key={g.group}>
                <h3 className="label-mono mb-2">{g.group}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{g.items.join(" · ")}</p>
              </div>
            ))}

            <div>
              <h3 className="label-mono mb-2">Currently going deeper</h3>
              <p className="text-sm leading-relaxed text-[hsl(var(--brand))]">{learning.join(" · ")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
