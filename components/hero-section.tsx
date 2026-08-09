import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { profile } from "@/data/profile"
import { Reveal } from "@/components/section"

const primaryLinks = [
  { label: "GitHub", href: profile.links.github },
  { label: "X", href: profile.links.x },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Superteam", href: profile.links.superteam },
  { label: "Résumé", href: profile.links.resume },
]

export default function HeroSection() {
  return (
    <header className="mx-auto max-w-5xl px-5 pb-16 pt-28 sm:px-8 md:pb-24 md:pt-36">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="min-w-0 flex-1">
          <Reveal>
            <p className="label-mono">{profile.role}</p>

            <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
              {profile.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              {profile.credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Pixel art — rendered without smoothing so the grid stays crisp. */}
        <Reveal className="shrink-0">
          <Image
            src="/pratik-kale.png"
            alt="Pratik Kale"
            width={600}
            height={600}
            priority
            className="h-24 w-24 rounded-lg border border-border md:h-36 md:w-36"
            style={{ imageRendering: "pixelated" }}
          />
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href="#work"
            className="font-medium underline decoration-[hsl(var(--brand))] decoration-2 underline-offset-4 transition-colors hover:text-[hsl(var(--brand))]"
          >
            See the work
          </Link>

          {primaryLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden="true"
              />
            </Link>
          ))}

          <a
            href={profile.links.email}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>
      </Reveal>
    </header>
  )
}
