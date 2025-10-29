import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Murat Sahin | Medior .NET Engineer & Full-Stack Developer',
  description: 'Portfolio of Murat Sahin, a Medior .NET Engineer specializing in cloud solutions, modern architecture, and full-stack development. Located in Den Haag, Netherlands.',
  generator: 'Next.js',
  keywords: [
    '.NET Engineer',
    'Full-Stack Developer',
    'C#',
    'TypeScript',
    'React',
    'Next.js',
    'Docker',
    'Azure',
    'Cloud Development',
    'Web Development',
    'Portfolio',
    'Den Haag',
    'Netherlands'
  ],
  authors: [{ name: 'Murat Sahin' }],
  creator: 'Murat Sahin',
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://murat-sahin.dev',
    siteName: 'Murat Sahin - Portfolio',
    title: 'Murat Sahin | Medior .NET Engineer & Full-Stack Developer',
    description: 'Explore the portfolio of Murat Sahin, a skilled Medior .NET Engineer with expertise in cloud solutions, modern architecture, and full-stack development.',
    images: [
      {
        url: 'https://murat-sahin.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Murat Sahin Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Murat Sahin | Medior .NET Engineer & Full-Stack Developer',
    description: 'Medior .NET Engineer specializing in cloud solutions and modern architecture. Check out my portfolio and projects.',
    images: ['https://murat-sahin.dev/og-image.png'],
  },
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
  verification: {
    google: 'your-google-verification-code-here', // Replace with your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://murat-sahin.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
