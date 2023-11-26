import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Metadata Title as an Object
export const metadata: Metadata = {
  title: {
    absolute: "",     // provide a title that completely ignores 'template title' set in the parent segment
    default: "Next.js 14 Course",     // Useful to provide a fallback title for child segments they don't explicitly specify a title
    template: "%s | Next 14",     // Create dynamic titles by adding prefix or a suffix can use 'template' property title.
  },

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
