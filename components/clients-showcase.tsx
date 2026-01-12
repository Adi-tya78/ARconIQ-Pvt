"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Brain, Languages, MapPin, ShieldCheck, ShoppingBag, Globe, ChevronRight, Building2 } from "lucide-react"
import { BrandName } from "./brand-name"
import Image from "next/image"

const clients = [
  {
    name: "Turing",
    logo: "/logos/turing-logo.png",
    logoBg: "bg-zinc-900",
    color: "from-violet-500 to-purple-600",
    borderColor: "border-violet-500/30",
    glowColor: "violet",
    industry: "AI & Technology",
    projects: [
      {
        title: "AI Model Annotation",
        description:
          "Comprehensive data annotation services for training advanced AI models with high accuracy and consistency.",
        icon: Brain,
      },
      {
        title: "AI Model Evaluation",
        description: "Rigorous evaluation and quality assessment of AI model outputs to ensure optimal performance.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    name: "Outlier",
    logo: "/logos/outlier-logo.png",
    logoBg: "bg-white",
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/30",
    glowColor: "emerald",
    industry: "AI Research",
    projects: [
      {
        title: "AI Language Training Models",
        description: "Training large language models with multilingual expertise across diverse language families.",
        icon: Languages,
      },
      {
        title: "Mathematics LLM Training",
        description:
          "Specialized training for mathematical reasoning and problem-solving capabilities in LLMs with syntax expertise.",
        icon: Brain,
      },
    ],
  },
  {
    name: "TELUS Digital",
    subtitle: "(formerly TELUS International)",
    logo: "/logos/telus-logo.png",
    logoBg: "bg-white",
    color: "from-purple-500 to-green-500",
    borderColor: "border-purple-500/30",
    glowColor: "purple",
    industry: "Digital Solutions",
    projects: [
      {
        title: "Social Media Evaluation",
        description:
          "Comprehensive social media content evaluation and analysis for enhanced platform safety and user experience.",
        icon: Globe,
      },
      {
        title: "Google Maps Data Enhancement",
        description:
          "Customer management and data updation for Google Maps business location improvements and accuracy.",
        icon: MapPin,
      },
    ],
  },
  {
    name: "E-Commerce Client",
    subtitle: "(China)",
    logo: "/logos/china-ecommerce-logo.jpg",
    logoBg: "bg-zinc-900",
    color: "from-red-500 to-amber-500",
    borderColor: "border-red-500/30",
    glowColor: "red",
    industry: "E-Commerce",
    projects: [
      {
        title: "Content Moderation",
        description: "Filtering e-commerce content and product analysis to maintain platform quality and compliance.",
        icon: ShoppingBag,
      },
      {
        title: "Seller Profile Evaluation",
        description:
          "Comprehensive evaluation of seller profile uploads to ensure authenticity and marketplace integrity.",
        icon: ShieldCheck,
      },
    ],
  },
]

export function ClientsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedClient, setExpandedClient] = useState<number | null>(null)

  return (
    <section ref={ref} id="clients" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-6">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-zinc-400">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            <BrandName size="lg" /> has delivered exceptional results for global enterprises across AI, technology, and
            digital transformation projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(`client-${index}`)
                  element?.scrollIntoView({ behavior: "smooth", block: "center" })
                  setExpandedClient(index)
                }}
              >
                <div
                  className={`relative w-28 h-20 md:w-40 md:h-24 rounded-xl ${client.logoBg} border border-zinc-700/50 p-3 flex items-center justify-center group-hover:border-cyan-500/50 transition-all duration-300 overflow-hidden`}
                >
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-white transition-colors font-medium">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              id={`client-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl bg-zinc-900/50 border ${client.borderColor} p-6 hover:bg-zinc-900/80 transition-all duration-500 cursor-pointer`}
              onClick={() => setExpandedClient(expandedClient === index ? null : index)}
              style={{
                boxShadow:
                  expandedClient === index
                    ? `0 0 60px -10px var(--${client.glowColor}-glow, rgba(6, 182, 212, 0.3))`
                    : "none",
              }}
            >
              {/* Client Header - Updated logo display with proper backgrounds */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-xl ${client.logoBg} border border-zinc-700/50 p-2 flex items-center justify-center overflow-hidden relative`}
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-cal-sans)" }}>
                      {client.name}
                    </h3>
                    {client.subtitle && <p className="text-sm text-zinc-500">{client.subtitle}</p>}
                    <p className="text-sm text-zinc-400">{client.industry}</p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                    expandedClient === index ? "rotate-90" : ""
                  }`}
                />
              </div>

              {/* Projects */}
              <div className="space-y-4">
                {client.projects.map((project, pIndex) => (
                  <motion.div
                    key={project.title}
                    initial={false}
                    animate={{
                      height: expandedClient === index ? "auto" : pIndex === 0 ? "auto" : 0,
                      opacity: expandedClient === index ? 1 : pIndex === 0 ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/30">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${client.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}
                      >
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{project.title}</h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Expand hint */}
              {client.projects.length > 1 && expandedClient !== index && (
                <p className="text-xs text-zinc-500 mt-4 text-center">
                  Click to see all {client.projects.length} projects
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Global Clients", value: "4+" },
            { label: "Projects Delivered", value: "8+" },
            { label: "Industries Served", value: "4" },
            { label: "Success Rate", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
              <div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
