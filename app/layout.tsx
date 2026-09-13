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

const siteUrl = "https://arconiqs.co.in"
const siteName = "ARconIQ Solutions Pvt Ltd"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARconIQ Solutions | AI & Business Process Consultancy",
    template: "%s | ARconIQ Solutions",
  },
  description:
    "ARconIQ Solutions Pvt Ltd delivers AI model training, customer support, data handling, content moderation, and business process consultancy. Founded by Aditya Yadav and Raash Gupta.",
  keywords: [
    "ARconIQ Solutions",
    "ARconIQS",
    "ARconIQ",
    "Aditya Yadav ARconIQS",
    "Raash Gupta ARconIQS",
    "AI consultancy",
    "business process consultancy",
  ],
  authors: [
    { name: "Aditya Yadav", url: siteUrl },
    { name: "Raash Gupta", url: siteUrl },
  ],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "ARconIQ Solutions | AI & Business Process Consultancy",
    description:
      "AI and business process consultancy founded by Aditya Yadav and Raash Gupta.",
    images: [{ url: "/arconiq-logo-icon.png", alt: "ARconIQ Solutions logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARconIQ Solutions | AI & Business Process Consultancy",
    description:
      "AI and business process consultancy founded by Aditya Yadav and Raash Gupta.",
    images: ["/arconiq-logo-icon.png"],
  },
  generator: "v0.app",
  icons: {
    icon: "/arconiq-logo-icon.png",
    shortcut: "/arconiq-logo-icon.png",
    apple: "/arconiq-logo-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${orbitron.variable} font-sans antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: siteName,
                  alternateName: ["ARconIQS", "ARconIQ Solutions"],
                  url: siteUrl,
                  logo: `${siteUrl}/arconiq-logo-icon.png`,
                  founder: [
                    { "@type": "Person", name: "Aditya Yadav" },
                    { "@type": "Person", name: "Raash Gupta" },
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/arconiq-solutions-pvt-ltd/",
                  ],
                  email: "mailto:founders@arconiqs.co.in",
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  name: siteName,
                  url: siteUrl,
                  publisher: { "@id": `${siteUrl}/#organization` },
                },
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
