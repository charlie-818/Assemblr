import React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, JetBrains_Mono } from "next/font/google"

import "./globals.css"

// Load fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cabinetGrotesk = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-cabinet-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "OrgFoundry | Build, Fund, and Govern Your Organization",
  description:
    "A complete platform for creating and managing modern organizations with transparent governance and flexible funding options.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cabinetGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

