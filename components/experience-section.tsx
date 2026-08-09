import { experience, credentials } from "@/data/experience"
import { Reveal, Section } from "@/components/section"

export default function ExperienceSection() {
  return (
    <Section id="experience" index="04" title="Experience & background">
      <div>
        {experience.map((role) => (
          <Reveal key={role.org}>
            <div className="grid gap-2 border-t border-border py-6 md:grid-cols-[9.5rem_1fr] md:gap-8">
              <span className="label-mono md:pt-1">{role.period}</span>

              <div>
                <h3 className="font-medium tracking-tight">
                  {role.title}
                  <span className="text-muted-foreground"> · {role.org}</span>
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {role.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-border" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}

        {credentials.map((c) => (
          <Reveal key={c.title}>
            <div className="grid gap-2 border-t border-border py-6 md:grid-cols-[9.5rem_1fr] md:gap-8">
              <span className="label-mono md:pt-1">{c.period}</span>
              <div>
                <h3 className="font-medium tracking-tight">{c.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {c.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
