import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { stats, packages, packagesAsOf } from "@/data/proof"
import { Reveal, Section } from "@/components/section"

export default function ProofSection() {
  return (
    <Section
      id="proof"
      index="02"
      title="Proof"
      intro="Every number here has a public source. No view counts, no self-reported impact percentages."
    >
      {/* KPI row — stat tiles, no plot. Value in sans, proportional figures. */}
      <Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="text-3xl font-semibold tracking-tight md:text-4xl">{s.value}</dd>
              <dt className="mt-1.5 text-sm font-medium">
                {s.href ? (
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors hover:decoration-[hsl(var(--brand))]"
                  >
                    {s.label}
                    <ArrowUpRight
                      className="h-3 w-3 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                      aria-hidden="true"
                    />
                  </Link>
                ) : (
                  s.label
                )}
              </dt>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.detail}</p>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal>
        <h3 className="mb-1 mt-16 text-base font-semibold tracking-tight">Published packages</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Installs are monthly, rounded down, read {packagesAsOf}.
        </p>
      </Reveal>

      <Reveal>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-y border-border">
                <th scope="col" className="label-mono py-2.5 pr-4 font-normal">
                  Package
                </th>
                <th scope="col" className="label-mono py-2.5 pr-4 font-normal">
                  What it does
                </th>
                <th scope="col" className="label-mono py-2.5 pr-4 font-normal">
                  Version
                </th>
                <th scope="col" className="label-mono py-2.5 pr-4 font-normal">
                  License
                </th>
                <th scope="col" className="label-mono py-2.5 text-right font-normal">
                  Installs
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((p) => (
                <tr key={p.name} className="border-b border-border align-top">
                  <td className="py-3 pr-4">
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-mono text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-[hsl(var(--brand))]"
                    >
                      {p.name}
                      <ArrowUpRight
                        className="h-3 w-3 text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                        aria-hidden="true"
                      />
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-sm text-muted-foreground">{p.description}</td>
                  <td className="py-3 pr-4 font-mono text-xs tabular-nums text-muted-foreground">
                    {p.version}
                  </td>
                  <td className="py-3 pr-4 font-mono text-xs text-muted-foreground">{p.license}</td>
                  <td className="py-3 text-right font-mono text-xs tabular-nums text-muted-foreground">
                    {p.installs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  )
}
