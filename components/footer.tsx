import Link from "next/link"
import { profile } from "@/data/profile"

const links = [
  { label: "GitHub", href: profile.links.github },
  { label: "X", href: profile.links.x },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "Email", href: profile.links.email },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="label-mono">
          © {new Date().getFullYear()} Pratik Kale · Built with Next.js, deployed on Vercel
        </p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
