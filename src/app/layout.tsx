import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 14 Course',
  description: 'Next 14 Course by Codevolution YouTube Channel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          Header
        </header>

        {children}
        
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          Footer
        </footer>
      </body>
    </html>
  )
}
