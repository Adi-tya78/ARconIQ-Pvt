'use client'

import { motion } from "framer-motion"
import { Database, CheckCircle, ArrowRight, Lock, BarChart3, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

export default function DataHandlingPage() {
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
              <Database className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Data Handling & Management</h1>
              <p className="text-xl text-zinc-400">
                Secure, organized, and compliant data processing solutions for your business operations.
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
              <div className="text-cyan-400 text-2xl font-bold">99.9%</div>
              <div className="text-sm text-zinc-400">Uptime SLA</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">AES-256</div>
              <div className="text-sm text-zinc-400">Encryption</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">GDPR</div>
              <div className="text-sm text-zinc-400">Compliant</div>
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
            <h2 className="text-3xl font-bold mb-8">Comprehensive Data Solutions</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 mb-6">
                In today's data-driven world, managing information efficiently and securely is critical. Our data handling services provide enterprise-grade solutions for data organization, storage, processing, and analysis.
              </p>
              <p className="text-zinc-300 mb-6">
                We ensure your data is handled with the highest standards of security, compliance, and efficiency. Whether you need data migration, cleaning, organization, or real-time processing, our expertise covers all aspects of data management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Data Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Data Organization",
                description: "Organize and structure raw data into meaningful datasets ready for analysis and decision-making.",
                icon: Database,
              },
              {
                title: "Data Cleaning & Validation",
                description: "Remove inconsistencies, duplicates, and errors to ensure high-quality, reliable data.",
                icon: CheckCircle,
              },
              {
                title: "Data Migration",
                description: "Seamlessly migrate data from legacy systems to modern infrastructure with zero data loss.",
                icon: ArrowRight,
              },
              {
                title: "Secure Storage",
                description: "Enterprise-grade secure storage with encryption, backup, and disaster recovery protocols.",
                icon: Lock,
              },
              {
                title: "Data Analytics",
                description: "Transform raw data into actionable insights with advanced analytics and reporting.",
                icon: BarChart3,
              },
              {
                title: "Real-time Processing",
                description: "Process streaming data in real-time for immediate insights and automated decision-making.",
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

      {/* Security & Compliance */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Security & Compliance</h2>
          <div className="space-y-6">
            {[
              {
                title: "GDPR Compliance",
                description: "Full compliance with General Data Protection Regulation requirements and data subject rights.",
              },
              {
                title: "Data Encryption",
                description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring maximum security.",
              },
              {
                title: "Access Control",
                description: "Role-based access control and authentication mechanisms to prevent unauthorized access.",
              },
              {
                title: "Audit Trails",
                description: "Comprehensive logging and audit trails for accountability and compliance verification.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="flex items-start gap-4 p-6 rounded-lg bg-zinc-900 border border-zinc-800"
              >
                <Lock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
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
            <h2 className="text-3xl font-bold mb-4">Secure Your Data Today</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Trust our experts to handle and protect your most valuable business asset.
            </p>
            <Link
              href="/?section=contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Data Handling Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
