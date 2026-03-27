'use client'

import { motion } from "framer-motion"
import { MessageSquare, CheckCircle, ArrowRight, Clock, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

export default function EmailManagementPage() {
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
              <MessageSquare className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Email Management Services</h1>
              <p className="text-xl text-zinc-400">
                Professional email handling that keeps your inbox organized and responses timely.
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
              <div className="text-cyan-400 text-2xl font-bold">{"<"}2hr</div>
              <div className="text-sm text-zinc-400">Response Time</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">99%</div>
              <div className="text-sm text-zinc-400">First Response Rate</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">Custom Rules</div>
              <div className="text-sm text-zinc-400">Smart Filtering</div>
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
            <h2 className="text-3xl font-bold mb-8">Email Management Done Right</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 mb-6">
                Email is critical to business communication, yet managing high email volumes can be overwhelming. Our professional email management services take this burden off your shoulders, ensuring every email receives prompt, professional attention.
              </p>
              <p className="text-zinc-300 mb-6">
                From initial triage and categorization to response drafting and follow-up, we handle all aspects of email management. This allows you to focus on strategic tasks while maintaining excellent communication standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What We Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Email Triage & Categorization",
                description: "Sort and prioritize incoming emails by urgency, topic, and required action.",
                icon: MessageSquare,
              },
              {
                title: "Professional Responses",
                description: "Draft and send professional, customized responses to email inquiries.",
                icon: CheckCircle,
              },
              {
                title: "Inbox Organization",
                description: "Organize and archive emails using your preferred system and standards.",
                icon: BarChart3,
              },
              {
                title: "Follow-up Management",
                description: "Track pending responses and ensure timely follow-ups on important emails.",
                icon: Clock,
              },
              {
                title: "Calendar Coordination",
                description: "Schedule meetings and coordinate calendars through email communication.",
                icon: ArrowRight,
              },
              {
                title: "Reporting & Analytics",
                description: "Provide detailed reports on email volume, response times, and key metrics.",
                icon: Zap,
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
                title: "Reduced Email Stress",
                description: "Eliminate the overwhelm of high email volumes and constant inbox notifications.",
              },
              {
                title: "Faster Response Times",
                description: "Ensure important emails get responses within hours, not days.",
              },
              {
                title: "Improved Organization",
                description: "Maintain a clean, organized inbox with consistent categorization and archiving.",
              },
              {
                title: "Never Miss an Email",
                description: "Comprehensive tracking ensures no critical email falls through the cracks.",
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
            <h2 className="text-3xl font-bold mb-4">Reclaim Your Time</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let us handle your emails while you focus on what matters most.
            </p>
            <Link
              href="/?section=contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Start Email Management
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
