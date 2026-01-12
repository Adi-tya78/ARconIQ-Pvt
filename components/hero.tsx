"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

const founders = [
  { name: "Aditya Yadav", role: "CEO & Co-Founder" },
  { name: "Raash Gupta", role: "CFO & Co-Founder" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />

      {/* Subtle radial glow - cyan tinted */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Image
            src="/arconiq-logo-full.png"
            alt="ARconIQ Solutions Pvt Ltd"
            width={280}
            height={280}
            className="mx-auto w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500 pulse-glow" />
          <span className="text-sm text-zinc-400">AI & Business Process Experts</span>
        </motion.div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
        >
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Scale Your Business.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              We Handle the Rest.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <BrandName size="lg" /> provides expert consultancy in AI model training, customer support, data handling, and
          content moderation. Let us manage your operations so you can focus on growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="shimmer-btn bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-cyan-500/20"
            asChild
          >
            <a href="#contact">
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 bg-transparent"
            asChild
          >
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-6">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border-2 border-zinc-950">
                  <span className="text-white font-bold text-sm">{founder.name[0]}</span>
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-sm text-zinc-300 font-medium">{founder.name}</p>
                  <p className="text-xs text-zinc-500">{founder.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            <Link href="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Meet the founders
            </Link>{" "}
            behind <BrandName size="sm" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}
