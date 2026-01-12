import type React from "react"
import type { Metadata } from "next"
import { Manrope, Orbitron } from "next/font/google"
import localFont from "next/font/local"
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

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
  display: "swap",
})

const instrumentSans = localFont({
  src: "./fonts/InstrumentSans-Variable.woff2",
  variable: "--font-instrument-sans",
  display: "swap",
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
