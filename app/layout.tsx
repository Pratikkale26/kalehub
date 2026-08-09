import './globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Self-hosted rather than next/font/google: no third-party request on page load,
// no build-time dependency on fonts.gstatic.com being reachable.
const inter = localFont({
  src: './fonts/InterVariable.woff2',
  weight: '100 900',
  variable: '--font-inter',
  display: 'swap',
});

const mono = localFont({
  src: './fonts/JetBrainsMonoVariable.woff2',
  weight: '100 800',
  variable: '--font-mono',
  display: 'swap',
});

const title = 'Pratik Kale — Blockchain Infrastructure & Systems Engineer';
const description =
  'I build the infrastructure developers build on: compilers, realtime SDKs, and observability tooling across Solana, Avalanche, and Monad. Creator of Anvil, SolSocket, and ICM Trace.';

export const metadata: Metadata = {
  metadataBase: new URL('https://kalehub.com'),
  title,
  description,
  icons: { icon: '/favicon.ico' },
  keywords: [
    'Pratik Kale',
    'blockchain infrastructure engineer',
    'Solana engineer',
    'systems engineer',
    'developer tooling',
    'Anvil',
    'Anchor transpiler',
    'Pinocchio',
    'SolSocket',
    'MonSocket',
    'ICM Trace',
    'Avalanche Teleporter',
    'Monad',
    'Rust',
    'TypeScript',
    'DePIN',
  ],
  authors: [{ name: 'Pratik Kale', url: 'https://kalehub.com' }],
  creator: 'Pratik Kale',
  publisher: 'Pratik Kale',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kalehub.com',
    siteName: 'Pratik Kale',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@PratikKale26',
  },
  alternates: { canonical: 'https://kalehub.com' },
};

// Next 15 wants viewport as its own export, not a metadata key.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfb' },
    { media: '(prefers-color-scheme: dark)', color: '#100f0e' },
  ],
};

/** Helps search engines connect the site to the person and their profiles. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pratik Kale',
  url: 'https://kalehub.com',
  jobTitle: 'Blockchain Infrastructure & Systems Engineer',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology Madras' },
  sameAs: [
    'https://github.com/Pratikkale26',
    'https://x.com/PratikKale26',
    'https://www.linkedin.com/in/pratikkale26/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} font-sans bg-background text-foreground min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="theme">
          <a
            href="#work"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
          >
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
