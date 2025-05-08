import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
});

export const metadata: Metadata = {
  title: 'Pratik Kale | Web3 Founder & Full-Stack Developer',
  description: 'Web3 founder, full-stack developer, and Solana-funded builder with expertise in DePIN, SaaS, and blockchain technologies. Building innovative solutions in the Web3 space.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'Pratik Kale',
    'Pratik',
    'Kale',
    'PratikKale',
    'Pratik Kale Surat',
    'Pratik Kale Gujarat',
    'Pratik Kale India',
    'Web3',
    'DePIN',
    'Solana',
    'Full-Stack Developer',
    'Founder',
    'Blockchain',
    'React',
    'TypeScript',
    'Node.js',
    'Web Development',
    'Blockchain Developer',
    'Web3 Developer',
    'Solana Developer',
    'Full Stack Developer Surat',
    'Web3 Developer Surat',
    'Blockchain Developer Surat'
  ],
  authors: [{ name: 'Pratik Kale' }],
  creator: 'Pratik Kale',
  publisher: 'Pratik Kale',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kalehub.com',
    title: 'Pratik Kale | Web3 Founder & Full-Stack Developer',
    description: 'Web3 founder, full-stack developer, and Solana-funded builder with expertise in DePIN, SaaS, and blockchain technologies. Building innovative solutions in the Web3 space.',
    siteName: 'KaleHub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pratik Kale - Web3 Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pratik Kale | Web3 Founder & Full-Stack Developer',
    description: 'Web3 founder, full-stack developer, and Solana-funded builder with expertise in DePIN, SaaS, and blockchain technologies.',
    creator: '@kalehub',
    images: ['/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  alternates: {
    canonical: 'https://kalehub.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-foreground min-h-screen`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={true}
          storageKey="theme"
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}