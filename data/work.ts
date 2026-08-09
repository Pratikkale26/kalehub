export type LinkKind = "live" | "source" | "package" | "site" | "contract"

export type ProofLink = {
  label: string
  href: string
  kind: LinkKind
}

/**
 * active   — shipping right now
 * shipped  — done and reachable
 * archived — source stands, deployment no longer running
 */
export type WorkStatus = "active" | "shipped" | "archived"

export type Work = {
  slug: string
  name: string
  /** What it is, in one line, for someone who has never heard of it. */
  tagline: string
  /** The theme it belongs to — used as the left rail of the evidence table. */
  domain: "Compilers" | "Realtime SDKs" | "Observability" | "Applications"
  description: string
  status: WorkStatus
  statusNote?: string
  period: string
  stack: string[]
  /** Hard evidence only — things someone could go and check. */
  notes?: string[]
  links: ProofLink[]
}

/** The work that defines the positioning. Shown in full. */
export const selectedWork: Work[] = [
  {
    slug: "anvil",
    name: "Anvil",
    domain: "Compilers",
    tagline: "Anchor → Pinocchio, with proof",
    description:
      "Porting Anchor to a leaner runtime by hand is a correctness risk nobody wants. Anvil does the port, then proves it — both binaries run the same instructions in a real VM until every account matches byte for byte.",
    status: "active",
    period: "Apr 2026 — present",
    stack: ["Rust", "TypeScript", "Solana", "Anchor", "Pinocchio", "LiteSVM", "SBPF", "tree-sitter"],
    notes: [
      "196 byte-equal differential tests, plus 181 cargo-build regression gates",
      "14+ externally-authored programs cloned verbatim from public repos and verified byte-equal",
      "30–48% compute-unit savings, measured side by side on a test validator",
      "klend (63 instructions) builds SBF-green — the first top Solana lending protocol fully compilable to Pinocchio",
      "Hackathon winner — Frontier × 100xDevs (7th place, $500 USDC)",
    ],
    links: [
      { label: "anvilsol.xyz", href: "https://anvilsol.xyz", kind: "site" },
      { label: "Demo", href: "https://anvil-rho.vercel.app/", kind: "live" },
      { label: "npm", href: "https://www.npmjs.com/package/anvil-sol", kind: "package" },
      { label: "Source", href: "https://github.com/Pratikkale26/Anvil", kind: "source" },
    ],
  },
  {
    slug: "solsocket",
    name: "SolSocket",
    domain: "Realtime SDKs",
    tagline: "Socket.io for Solana",
    description:
      "Rooms, presence, broadcast, and state subscriptions for Solana. The Socket.io API developers already know, backed by on-chain state instead of a server they have to run.",
    status: "active",
    period: "Jul 2026 — present",
    stack: ["TypeScript", "Solana", "MagicBlock Ephemeral Rollups", "WebSockets", "Node.js"],
    notes: ["Published to npm, open sourced under MIT"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/solsocket", kind: "package" },
      { label: "Source", href: "https://github.com/Pratikkale26/solsocket", kind: "source" },
    ],
  },
  {
    slug: "monsocket",
    name: "MonSocket",
    domain: "Realtime SDKs",
    tagline: "Socket.io for Monad — every action is a real transaction",
    description:
      "Realtime multiplayer rooms with no game server and no join fee. Presence and messages are event logs — the cheapest bytes on an EVM — while shared room state lives in one storage slot, so a late joiner reads it instead of replaying history.",
    status: "active",
    period: "Aug 2026 — present",
    stack: ["TypeScript", "Monad", "Solidity", "EIP-1559", "WebSockets"],
    notes: [
      "The Vault: a two-player co-op escape room. 3 levels, 9 puzzles impossible alone — every move, chat line, and key turn is a Monad transaction",
      "Spectating is free and wallet-less, because reading the chain costs nothing",
      "Fixed, tight gas limits: Monad charges gas_limit, not gas_used, so padding is real money",
      "Reads sweep the Proposed block — speculative state one block ahead of finality",
      "146-check BFS reachability prover over every puzzle graph, plus a two-client suite against live testnet",
    ],
    links: [
      { label: "Demo", href: "https://escapemonsocket.vercel.app", kind: "live" },
      {
        label: "Contract",
        href: "https://testnet.monadvision.com/address/0xf8a5324af88f305ea8db0b60d09c5de1219e4ab4",
        kind: "contract",
      },
      { label: "npm", href: "https://www.npmjs.com/package/monsocket", kind: "package" },
      { label: "Source", href: "https://github.com/Pratikkale26/monsocket", kind: "source" },
    ],
  },
  {
    slug: "icm-trace",
    name: "ICM Trace",
    domain: "Observability",
    tagline: "Cross-chain execution debugging for Avalanche ICM/Teleporter",
    description:
      "A successful source transaction tells you nothing about the destination. ICM Trace follows the message across chains, then re-simulates failures and decodes the revert — a root cause, not a dead end.",
    status: "active",
    period: "Jul 2026 — present",
    stack: ["TypeScript", "Next.js", "Avalanche", "Teleporter/ICM", "Solidity", "viem"],
    notes: [
      "Surfaces delivered-but-reverted messages — the failure mode explorers miss",
      "Built on @avapulse/icm-core, a lifecycle engine shared with AvaPulse",
      "Ships with a litepaper, architecture doc, and an honest live-vs-planned roadmap",
    ],
    links: [
      { label: "Live", href: "https://icm-trace.vercel.app", kind: "live" },
      { label: "npm: icm-core", href: "https://www.npmjs.com/package/@avapulse/icm-core", kind: "package" },
      { label: "Source", href: "https://github.com/Pratikkale26/icm-trace", kind: "source" },
    ],
  },
  {
    slug: "decentralwatch",
    name: "DecentralWatch",
    domain: "Observability",
    tagline: "Decentralized uptime monitoring network on Solana",
    description:
      "A DePIN network where independent validators worldwide observe service availability and earn for verifiable uptime reports. A desktop client lets them sign proofs with a local wallet.",
    status: "archived",
    statusNote: "Source available — deployment no longer running",
    period: "Mar 2025 — Jun 2025",
    stack: ["Next.js", "Node.js", "WebSockets", "Electron", "Solana", "Turborepo", "PostgreSQL"],
    notes: [
      "Scaled to 50+ validators across 6 countries in one month",
      "Sub-100ms global validation latency via multi-region relays",
      "Gasless WebSocket relay coordinating distributed validators, mirroring state on Solana",
      "Hackathon winner — 100xDevs",
      "Grant-funded — Solana × CoinDCX",
    ],
    links: [{ label: "Source", href: "https://github.com/Pratikkale26/DecentralWatch", kind: "source" }],
  },
]

/** Real work, but not the headline. Compact rows. */
export const otherWork: Work[] = [
  {
    slug: "avapulse",
    name: "AvaPulse",
    domain: "Observability",
    tagline: "Alerting-first observability for self-hosted Avalanche L1s",
    description:
      "A relayer can report healthy while messages quietly stop being delivered. AvaPulse watches the message lifecycle instead of the process.",
    status: "active",
    statusNote: "In development",
    period: "Aug 2026 — present",
    stack: ["TypeScript", "Avalanche", "Teleporter/ICM", "Prometheus", "Grafana"],
    links: [
      { label: "Live", href: "https://ava-pulse.vercel.app", kind: "live" },
      { label: "Source", href: "https://github.com/Pratikkale26/AvaPulse", kind: "source" },
    ],
  },
  {
    slug: "sui-private-transfer",
    name: "Sui Private Transfer",
    domain: "Applications",
    tagline: "Privacy-preserving token transfers on Sui",
    description: "Shielded token transfers on Sui, inspired by the zk-pool model.",
    status: "shipped",
    period: "2026",
    stack: ["Sui", "Move", "TypeScript", "Zero-knowledge proofs"],
    links: [{ label: "Source", href: "https://github.com/Pratikkale26/sui-private-transfer", kind: "source" }],
  },
  {
    slug: "sui-tx-explainer",
    name: "Sui Transaction Explainer",
    domain: "Observability",
    tagline: "Human-readable explanations of Sui transactions",
    description:
      "Explains what a Sui transaction actually did, in plain language.",
    status: "shipped",
    period: "2026",
    stack: ["TypeScript", "Next.js", "Sui", "Move"],
    links: [{ label: "Live", href: "https://sui-tx-explainer-six.vercel.app/", kind: "live" }],
  },
  {
    slug: "flowrge",
    name: "Flowrge",
    domain: "Applications",
    tagline: "No-code automation between Web2 apps and Solana",
    description:
      "Triggers off Solana events and fans out to Web2 services, and the reverse.",
    status: "shipped",
    period: "2025",
    stack: ["TypeScript", "Next.js", "Node.js", "Solana", "PostgreSQL"],
    links: [{ label: "Source", href: "https://github.com/Pratikkale26/Flowrge", kind: "source" }],
  },
  {
    slug: "sonpari",
    name: "Sonpari",
    domain: "Applications",
    tagline: "Digital gold savings and gifting",
    description:
      "Daily gold savings — accounts, purchases, groups, leaderboards. Built in the Oro Gold grant ecosystem.",
    status: "shipped",
    period: "2026",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    links: [
      { label: "Live", href: "https://sonpari-web.vercel.app/", kind: "live" },
      { label: "Source", href: "https://github.com/Pratikkale26/Sonpari", kind: "source" },
    ],
  },
  {
    slug: "dareme",
    name: "DareMe",
    domain: "Applications",
    tagline: "On-chain dares with trustless escrow",
    description:
      "Turns \"I bet you can't…\" into an escrowed on-chain challenge.",
    status: "shipped",
    period: "2026",
    stack: ["Solana", "Anchor", "Next.js", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/Pratikkale26/dareme", kind: "source" }],
  },
  {
    slug: "layersplit",
    name: "LayerSplit",
    domain: "Applications",
    tagline: "Group expense splitting on Sui, as a Telegram Mini App",
    description: "Group expense settlement inside Telegram, backed by Sui.",
    status: "shipped",
    period: "2026",
    stack: ["Sui", "Move", "TypeScript", "Telegram Mini Apps"],
    links: [{ label: "Source", href: "https://github.com/Pratikkale26/LayerSplit", kind: "source" }],
  },
  {
    slug: "crowdlens",
    name: "CrowdLens",
    domain: "Applications",
    tagline: "Community-powered AI data labeling and content oracle",
    description:
      "Collects and validates human-generated training data through community voting.",
    status: "archived",
    statusNote: "Source available",
    period: "2025",
    stack: ["Solana", "Next.js", "TypeScript"],
    links: [{ label: "Source", href: "https://github.com/Pratikkale26/CrowdLens", kind: "source" }],
  },
  {
    slug: "canvaschat",
    name: "CanvasChat",
    domain: "Applications",
    tagline: "Collaborative canvas with live chat",
    description: "Multi-user drawing surface with live cursor sync and chat.",
    status: "archived",
    statusNote: "Source available",
    period: "Dec 2024 — Feb 2025",
    stack: ["React", "TypeScript", "Node.js", "WebSockets", "Turborepo"],
    links: [{ label: "Source", href: "https://github.com/Pratikkale26/canvaschat", kind: "source" }],
  },
]
