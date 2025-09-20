import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zhenghchen.dev'),
  title: 'Zheng Chen - Software Engineer | Backend & AI',
  description: 'A creative coder building practical AI tools and high-performance systems.',
  keywords: 'full stack developer, react developer, nextjs, web development, ui ux design, portfolio, ai, machine learning, data science, python, javascript, typescript, html, css, react, nextjs, node.js, express, mongodb, sql, no sql, aws, docker',
  authors: [{ name: 'Zheng Chen' }],
  creator: 'Zheng Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zhenghchen.dev',
    title: 'Zheng Chen - Software Engineer | Backend & AI',
    description: 'Passionate developer creating beautiful, functional digital experiences.',
    siteName: 'Zheng Chen Portfolio',
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
