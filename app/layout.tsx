import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rizzlord - #1 Dating Assistant',
  description: 'Your ultimate dating assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
