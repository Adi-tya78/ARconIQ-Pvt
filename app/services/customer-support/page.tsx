'use client'

import { motion } from "framer-motion"
import { Headphones, CheckCircle, ArrowRight, Clock, Globe, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

export default function CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/arconiq-logo-icon.png"
              alt="ARconIQ"
              width={40}
              height={40}
              className="w-10 h-auto"
            />
            <BrandName size="sm" />
          </Link>
          <Link href="/#services" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
            Back to Services
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4 mb-8"
          >
            <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
              <Headphones className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Customer Support Services</h1>
              <p className="text-xl text-zinc-400">
                Professional email and chat support that keeps your customers satisfied and your business running smoothly.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mt-12"
          >
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">2hr</div>
              <div className="text-sm text-zinc-400">Avg Response Time</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">95%</div>
              <div className="text-sm text-zinc-400">Resolution Rate</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">24/7</div>
              <div className="text-sm text-zinc-400">Support Coverage</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Support Services?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 mb-6">
                Our customer support team is trained to handle your customers with professionalism and care. We manage email inquiries, live chat, and escalations with efficiency and empathy, ensuring every customer feels valued and heard.
              </p>
              <p className="text-zinc-300 mb-6">
                Whether you need overflow support during peak hours or full-time support operations, we scale to match your business needs. Our multilingual team and 24/7 availability mean your customers are always supported.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Support Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Email Support",
                description: "Prompt and professional email responses handling customer inquiries, complaints, and requests.",
                icon: Headphones,
              },
              {
                title: "Live Chat Support",
                description: "Real-time chat support for immediate customer assistance and quick issue resolution.",
                icon: Globe,
              },
              {
                title: "Ticket Management",
                description: "Organized ticket system ensuring no customer inquiry falls through the cracks.",
                icon: CheckCircle,
              },
              {
                title: "Multilingual Support",
                description: "Support your global customer base with multilingual support teams across different regions.",
                icon: Clock,
              },
              {
                title: "Technical Support",
                description: "Specialized technical support for resolving product and service-related issues.",
                icon: BarChart3,
              },
              {
                title: "Escalation Management",
                description: "Expert handling of complex issues and customer escalations with priority attention.",
                icon: ArrowRight,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors"
              >
                <item.icon className="w-6 h-6 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Key Benefits</h2>
          <div className="space-y-6">
            {[
              {
                title: "Reduced Customer Churn",
                description: "High-quality support improves customer satisfaction and loyalty, reducing churn rates.",
              },
              {
                title: "Faster Issue Resolution",
                description: "Our experienced team resolves issues quickly, minimizing customer frustration and downtime.",
              },
              {
                title: "Scalable Operations",
                description: "Scale support operations without hiring and training new staff, reducing operational costs.",
              },
              {
                title: "Performance Analytics",
                description: "Detailed reports and metrics on support performance, customer satisfaction, and trends.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="flex items-start gap-4 p-6 rounded-lg bg-zinc-900 border border-zinc-800"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Elevate Your Customer Support</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let us handle your customer support while you focus on growing your business.
            </p>
            <Link
              href="/?section=contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Start Your Support Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
