"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Brain, Headphones, Database, Shield, MessageSquare, BarChart3 } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function AIModelAnimation() {
  const [nodes, setNodes] = useState([1, 2, 3, 4, 5])

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prev) => prev.map(() => Math.random()))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-3 mt-4">
      {nodes.map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

function SupportAnimation() {
  const [messages, setMessages] = useState([true, true, false])

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => {
        const newMessages = [...prev]
        const idx = Math.floor(Math.random() * 3)
        newMessages[idx] = !newMessages[idx]
        return newMessages
      })
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col gap-2 mt-4">
      {messages.map((active, i) => (
        <motion.div
          key={i}
          className={`h-2 rounded-full ${active ? "bg-gradient-to-r from-cyan-500 to-blue-500" : "bg-zinc-700"}`}
          style={{ width: `${60 + i * 15}%` }}
          animate={{ opacity: active ? 1 : 0.4 }}
        />
      ))}
    </div>
  )
}

function DataFlowAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="grid grid-cols-4 gap-2 mt-4">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="h-6 rounded bg-gradient-to-r from-cyan-500/30 to-blue-500/30"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
    </div>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Our Consultancy Services
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From AI model training to customer support, we provide end-to-end solutions that help your business operate
            efficiently and scale confidently.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-fit mb-4">
                  <Brain className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Model Training</h3>
                <p className="text-zinc-400 text-sm">
                  Expert training and fine-tuning of AI models for your specific use cases. We handle data preparation,
                  model selection, and continuous optimization.
                </p>
              </div>
            </div>
            <AIModelAnimation />
            <div className="grid grid-cols-3 gap-4 mt-6">
              {["Custom Models", "Fine-tuning", "Deployment"].map((item) => (
                <div key={item} className="text-center p-3 rounded-lg bg-zinc-800/50">
                  <div className="text-sm font-medium text-zinc-300">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-fit mb-4">
              <Headphones className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Customer Support</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Professional email and chat support services that keep your customers happy.
            </p>
            <SupportAnimation />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-fit mb-4">
              <Database className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Data Handling</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Secure data processing, organization, and management solutions.
            </p>
            <DataFlowAnimation />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-fit mb-4">
              <Shield className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Content Moderation</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Keep your platform safe with expert content review and moderation.
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">
                24/7
              </span>
              <span className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">
                AI + Human
              </span>
              <span className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">
                Scalable
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-fit mb-4">
              <MessageSquare className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Management</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Professional email response and inbox management for your business.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 text-sm">
              <span className="font-mono">{"<"}2hr</span>
              <span className="text-zinc-500">avg response time</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-fit mb-4">
              <BarChart3 className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Business Projects</h3>
            <p className="text-zinc-400 text-sm mb-4">Custom solutions for any business challenge you face.</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">
                Custom
              </span>
              <span className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">
                Flexible
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
