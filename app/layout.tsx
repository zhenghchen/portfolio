import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zheng Chen - Full Stack Developer & UI/UX Designer',
  description: 'Passionate developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. Specializing in React, Node.js, and modern web technologies.',
  keywords: 'full stack developer, react developer, nodejs, web development, ui ux design, portfolio',
  authors: [{ name: 'Zheng Chen' }],
  creator: 'Zheng Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zhenghchen.dev',
    title: 'Zheng Chen - Full Stack Developer & UI/UX Designer',
    description: 'Passionate developer creating beautiful, functional digital experiences.',
    siteName: 'Zheng Chen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zheng Chen - Full Stack Developer',
    description: 'Passionate developer creating beautiful, functional digital experiences.',
    creator: '@zhenghchen',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
