import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - ARconIQ | AI & Business Insights",
  description: "Read expert insights on AI model training, customer support, data handling, content moderation, and business process optimization.",
  openGraph: {
    title: "Blog - ARconIQ | AI & Business Insights",
    description: "Read expert insights on AI model training, customer support, data handling, content moderation, and business process optimization.",
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
