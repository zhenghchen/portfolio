import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zhenghchen.github.io'),
  title: 'Zheng Chen - Software Engineer | Fullstack & AI',
  description: 'Computer Science student at Oregon State University specializing in AI research and full-stack development. Building efficient backend systems, RESTful APIs, and practical AI applications.',
  keywords: 'Zheng Chen, Software Engineer, AI Research, Full Stack Developer, Oregon State University, Machine Learning, Python, Java, TypeScript, React, Next.js, PyTorch, HuggingFace, FastAPI, Spring Boot',
  authors: [{ name: 'Zheng Chen' }],
  creator: 'Zheng Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zhenghchen.github.io',
    title: 'Zheng Chen - Software Engineer | Fullstack & AI',
    description: 'Computer Science student at Oregon State University. AI Research Intern building practical AI applications and optimizing high-performance systems.',
    siteName: 'Zheng Chen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zheng Chen - Software Engineer',
    description: 'AI Research & Full-Stack Development',
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
