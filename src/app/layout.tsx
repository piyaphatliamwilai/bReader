import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const sarabun = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'bocchi.read',
  description: 'Bocchi reading, redefined.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sarabun.className}>{children}</body>
    </html>
  )
}
