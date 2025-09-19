// app/layout.js
import './globals.css'

export const metadata = {
  title: 'AppVersal — Reimagined (Case Study)',
  description: 'Next.js + Tailwind + Framer Motion demo by Sahil Khatri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}