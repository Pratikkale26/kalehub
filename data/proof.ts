/**
 * Headline numbers.
 *
 * Rule for this file: every entry must be something a stranger could go and
 * verify from a public source. No view counts, no engagement metrics, no
 * self-reported "impact" percentages.
 */
export type Stat = {
  value: string
  label: string
  detail: string
  href?: string
}

export const stats: Stat[] = [
  {
    value: "$12,130",
    label: "Earned on Superteam Earn",
    detail: "Across 36 submissions and 2 wins — the figures are public on my profile",
    href: "https://superteam.fun/earn/t/Pratikkale26",
  },
  {
    value: "196",
    label: "Byte-equal differential tests",
    detail: "Anvil's proof gate — data, lamports, and owner compared in a real VM, not just a green cargo build",
  },
  {
    value: "30–48%",
    label: "Compute units saved",
    detail: "Measured on bundled demos, Anchor vs Anvil-emitted Pinocchio, deployed side by side",
  },
  {
    value: "4",
    label: "Packages on npm",
    detail: "anvil-sol, solsocket, monsocket, @avapulse/icm-core — all open source",
  },
  {
    value: "4",
    label: "Chains shipped on",
    detail: "Solana, Avalanche, Monad, and Sui — production code on each",
  },
  {
    value: "2",
    label: "Grants received",
    detail: "Superteam India ($5K USDG) and Solana × CoinDCX",
  },
]

export type Pkg = {
  name: string
  href: string
  description: string
  version: string
  license: string
  /** Rounded down and dated, because a static page cannot refresh it. */
  installs: string
}

export const packages: Pkg[] = [
  {
    name: "anvil-sol",
    href: "https://www.npmjs.com/package/anvil-sol",
    description: "Anchor → Pinocchio/Native transpiler and byte-equivalence verifier",
    version: "0.8.0",
    license: "Apache-2.0",
    installs: "300+",
  },
  {
    name: "solsocket",
    href: "https://www.npmjs.com/package/solsocket",
    description: "Realtime rooms, presence, and state subscriptions for Solana",
    version: "0.2.1",
    license: "MIT",
    installs: "500+",
  },
  {
    name: "monsocket",
    href: "https://www.npmjs.com/package/monsocket",
    description: "The same realtime primitive, on Monad",
    version: "0.1.0",
    license: "MIT",
    installs: "100+",
  },
  {
    name: "@avapulse/icm-core",
    href: "https://www.npmjs.com/package/@avapulse/icm-core",
    description: "Teleporter/ICM message lifecycle engine — decoding, correlation, state machine",
    version: "0.1.0",
    license: "MIT",
    installs: "60+",
  },
]

/** When the npm install figures were last read. Refresh these together. */
export const packagesAsOf = "August 2026"

export type PullRequest = {
  number: number
  title: string
  href: string
  state: "merged" | "open"
}

export type Contribution = {
  repo: string
  href: string
  /** What the upstream project actually is. */
  about: string
  scale?: string
  prs: PullRequest[]
}

/**
 * Only PRs to projects other than my own, and only merged or currently open.
 * State is written plainly — an open PR is not a merged one.
 */
export const contributions: Contribution[] = [
  {
    repo: "block/buzz",
    href: "https://github.com/block/buzz",
    about: "Block's hive-mind communication platform, written in Rust",
    scale: "25.5k stars",
    prs: [
      {
        number: 4931,
        title: "fix(cli): read social publish body from stdin for the `-` sentinel",
        href: "https://github.com/block/buzz/pull/4931",
        state: "open",
      },
      {
        number: 4922,
        title: "fix(acp): accept conventional boolean spellings for env-backed flags",
        href: "https://github.com/block/buzz/pull/4922",
        state: "open",
      },
      {
        number: 4918,
        title: "fix(relay): republish group metadata when a huddle auto-archives",
        href: "https://github.com/block/buzz/pull/4918",
        state: "open",
      },
      {
        number: 4882,
        title: "fix(relay): tombstone workflow definition events on NIP-09 deletion",
        href: "https://github.com/block/buzz/pull/4882",
        state: "open",
      },
    ],
  },
  {
    repo: "magicblock-labs/Solana.Unity-SDK",
    href: "https://github.com/magicblock-labs/Solana.Unity-SDK",
    about: "MagicBlock's open-source Unity SDK for Solana",
    prs: [
      {
        number: 264,
        title: "feat(mwa): API parity, auth cache, disconnect/reconnect UX",
        href: "https://github.com/magicblock-labs/Solana.Unity-SDK/pull/264",
        state: "open",
      },
    ],
  },
  {
    repo: "blueshift-gg/blueshift-dashboard",
    href: "https://github.com/blueshift-gg/blueshift-dashboard",
    about: "Blueshift's Solana developer learning platform",
    prs: [
      {
        number: 311,
        title: "Add dynamic, localized descriptions to course cards",
        href: "https://github.com/blueshift-gg/blueshift-dashboard/pull/311",
        state: "merged",
      },
    ],
  },
]
