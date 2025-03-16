import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chihiro Yano",
  description: "ポートフォリオサイト",
    generator: 'v0.dev',
  icons: {
    icon: '/icon_kawaii.jpg',
    apple: '/icon_kawaii.jpg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'