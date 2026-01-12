"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  { name: "AI Training", icon: "AI" },
  { name: "Support", icon: "CS" },
  { name: "Data", icon: "DH" },
  { name: "Moderation", icon: "CM" },
  { name: "Analytics", icon: "AN" },
  { name: "Automation", icon: "AU" },
  { name: "Integration", icon: "IN" },
  { name: "Consulting", icon: "CO" },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
          Comprehensive Solutions for Your Business
        </p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] h-16 mx-8 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-zinc-400">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-cyan-400">{service.icon}</span>
                </div>
                <span className="font-medium text-zinc-300" style={{ fontFamily: "var(--font-instrument-sans)" }}>
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
