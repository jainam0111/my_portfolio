import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GrainOverlay from '@/components/GrainOverlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jainam Bhavsar',
  description: 'Portfolio of Jainam Bhavsar - AI Engineer, Event Technologist, and Creative Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GrainOverlay />
        {children}
      </body>
    </html>
  )
}
