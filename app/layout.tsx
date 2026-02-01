import type React from "react"
import type { Metadata } from "next"
import { Manrope, Orbitron, Poppins, Dosis } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const calSans = Poppins({
  subsets: ["latin"],
  variable: "--font-cal-sans",
  weight: ["600", "700"],
})

const instrumentSans = Dosis({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ARconIQ - AI & Business Process Consultancy",
  description:
    "Expert consultancy services in AI model training, customer support, data handling, and content moderation. Founded by Aditya Yadav and Raash Gupta.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${calSans.variable} ${instrumentSans.variable} ${orbitron.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
