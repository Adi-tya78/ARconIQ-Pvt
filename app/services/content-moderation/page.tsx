'use client'

import { motion } from "framer-motion"
import { Shield, CheckCircle, ArrowRight, Clock, Globe, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

export default function ContentModerationPage() {
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
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Content Moderation Services</h1>
              <p className="text-xl text-zinc-400">
                Keep your platform safe and user-friendly with expert content review and moderation services.
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
              <div className="text-cyan-400 text-2xl font-bold">24/7</div>
              <div className="text-sm text-zinc-400">Round the Clock</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">98%</div>
              <div className="text-sm text-zinc-400">Accuracy Rate</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">10+ Languages</div>
              <div className="text-sm text-zinc-400">Multilingual Support</div>
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
            <h2 className="text-3xl font-bold mb-8">Protect Your Community</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 mb-6">
                Content moderation is essential for maintaining a safe, respectful online environment. Our expert moderation team combines human judgment with AI-powered tools to identify and manage inappropriate content efficiently.
              </p>
              <p className="text-zinc-300 mb-6">
                From e-commerce platforms to social media communities, we ensure your content meets your standards and legal requirements. Our multilingual team covers global markets, and our 24/7 availability means violations are caught immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Moderation Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "User-Generated Content Review",
                description: "Review and moderate text, images, and videos posted by users to maintain community standards.",
                icon: Shield,
              },
              {
                title: "E-commerce Product Moderation",
                description: "Review product listings, descriptions, and images for compliance and policy violations.",
                icon: BarChart3,
              },
              {
                title: "Community Guidelines Enforcement",
                description: "Enforce your specific community guidelines and policies across all user interactions.",
                icon: CheckCircle,
              },
              {
                title: "Harmful Content Detection",
                description: "Identify and remove harmful, illegal, or offensive content with precision and speed.",
                icon: Globe,
              },
              {
                title: "Real-time Moderation",
                description: "Instant moderation of content with immediate action on policy violations.",
                icon: Clock,
              },
              {
                title: "Appeals Management",
                description: "Fair and transparent handling of user appeals against moderation decisions.",
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

      {/* Use Cases */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
          <div className="space-y-6">
            {[
              {
                title: "Social Media Platforms",
                description: "Moderate user posts, comments, and interactions to create safe communities.",
              },
              {
                title: "E-commerce Marketplaces",
                description: "Review product listings, seller profiles, and transactions for fraud and compliance.",
              },
              {
                title: "Online Gaming",
                description: "Monitor in-game chat, user profiles, and interactions for toxic behavior.",
              },
              {
                title: "Content Platforms",
                description: "Review user-uploaded videos, articles, and media for policy compliance.",
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
            <h2 className="text-3xl font-bold mb-4">Create a Safer Community</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let our experts handle content moderation so you can focus on growth.
            </p>
            <Link
              href="/?section=contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Start Moderation Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
