import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "ac's portfolio",
  description: "ac's portfolio - Data-driven solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
