export type Role = {
  org: string
  title: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    org: "OnlyFounders",
    title: "Backend Developer (freelance)",
    period: "Aug 2025",
    points: [
      "Built a Solana liquidity-pool indexer that captures on-chain transactions, derives token prices, and streams live LP metrics to production dashboards",
      "Integrated token launch and liquidity flows across DBC and DAMM v2",
      "Shipped CI/CD, plus Prometheus and Grafana for monitoring and alerting",
    ],
  },
  {
    org: "DecentralWatch",
    title: "Founder & Lead Developer",
    period: "Mar 2025 — Jun 2025",
    points: [
      "Architected a decentralized uptime monitoring network, scaling to 50+ validators across 6 countries in one month",
      "Designed a gasless WebSocket relay coordinating distributed validators and mirroring state on Solana",
      "Hit sub-100ms global validation latency with multi-region relays",
    ],
  },
  {
    org: "IIT Madras startup",
    title: "CTO (former)",
    period: "2025",
    points: ["Led full-stack engineering and product development"],
  },
]

export type Credential = {
  title: string
  detail: string
  period: string
}

export const credentials: Credential[] = [
  {
    title: "SuperDevs — top 1% selection",
    detail: "Selected into the Solana ecosystem's SuperDevs cohort",
    period: "2026",
  },
  {
    title: "Turbin3 — graduate",
    detail: "Solana development program covering program architecture and on-chain systems",
    period: "2025",
  },
  {
    title: "HackHazards '25 — mentor",
    detail:
      "Mentored 500+ students and resolved 40+ technical queries at a 12K+ participant hackathon",
    period: "Apr 2025",
  },
  {
    title: "IIT Madras — B.S. Data Science and Applications",
    detail: "Ranked in the top 10 coders in the BS degree programme",
    period: "Sept 2023 — 2027 (expected)",
  },
]
