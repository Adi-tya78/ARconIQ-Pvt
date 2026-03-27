'use client'

import { motion } from "framer-motion"
import { BarChart3, CheckCircle, ArrowRight, Zap, Lock, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

export default function BusinessProjectsPage() {
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
              <BarChart3 className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Business Projects</h1>
              <p className="text-xl text-zinc-400">
                Custom solutions designed specifically for your unique business challenges.
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
              <div className="text-cyan-400 text-2xl font-bold">100+</div>
              <div className="text-sm text-zinc-400">Projects Completed</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">95%</div>
              <div className="text-sm text-zinc-400">Client Satisfaction</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">Flexible</div>
              <div className="text-sm text-zinc-400">Engagement Models</div>
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
            <h2 className="text-3xl font-bold mb-8">Tailored Solutions for Your Business</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 mb-6">
                No two businesses are the same, and neither should their solutions be. Our Business Projects service provides custom, tailored solutions for virtually any business challenge you face.
              </p>
              <p className="text-zinc-300 mb-6">
                Whether you need process optimization, technology implementation, market research, or specialized consulting, our diverse team brings expertise across industries and domains. We combine strategic thinking with practical execution to deliver measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Project Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Process Optimization",
                description: "Streamline your business processes to improve efficiency, reduce costs, and enhance productivity.",
                icon: Zap,
              },
              {
                title: "Technology Integration",
                description: "Implement and integrate new technologies into your existing business infrastructure.",
                icon: Brain,
              },
              {
                title: "Operations Management",
                description: "Manage and optimize your day-to-day operations for maximum efficiency and quality.",
                icon: BarChart3,
              },
              {
                title: "Specialized Consulting",
                description: "Expert consulting on industry-specific challenges and opportunities.",
                icon: CheckCircle,
              },
              {
                title: "Quality Assurance",
                description: "Comprehensive QA and testing services to ensure product and service excellence.",
                icon: Lock,
              },
              {
                title: "Custom Development",
                description: "Build custom solutions tailored to your specific business requirements.",
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

      {/* Industries */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
          <div className="space-y-6">
            {[
              {
                title: "E-commerce & Retail",
                description: "Solutions for online and offline retail operations, inventory management, and customer engagement.",
              },
              {
                title: "SaaS & Technology",
                description: "Custom development, optimization, and consulting for software and technology companies.",
              },
              {
                title: "Healthcare & Wellness",
                description: "Specialized solutions for healthcare operations, patient management, and compliance.",
              },
              {
                title: "Finance & Fintech",
                description: "Expertise in financial operations, compliance, and innovative financial technology solutions.",
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

      {/* Engagement Models */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Flexible Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Project-Based",
                description: "Fixed-scope projects with defined deliverables and timelines.",
              },
              {
                title: "Retainer",
                description: "Ongoing support and services on a monthly retainer basis.",
              },
              {
                title: "Time & Materials",
                description: "Flexible engagement for projects with evolving requirements.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">Let's Solve Your Challenge</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Discuss your business project and find the perfect solution for your needs.
            </p>
            <Link
              href="/?section=contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Start Your Project Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
