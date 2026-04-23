import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { CursorGlow } from "@/components/cursor-glow"

export const metadata: Metadata = {
  title: "Keel Lab | Premium Automation Platform",
  description: "Next-generation automation platform with intelligent workflows and powerful integrations",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
