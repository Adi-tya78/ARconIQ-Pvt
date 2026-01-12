"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    price: "Custom",
    features: [
      "Initial consultation",
      "Basic support services",
      "Email management",
      "Monthly reporting",
      "Dedicated account manager",
    ],
    cta: "Get Quote",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For businesses ready to scale operations",
    price: "Custom",
    features: [
      "Everything in Starter",
      "AI model training",
      "Content moderation",
      "Data handling",
      "Priority support",
      "Weekly check-ins",
      "Custom integrations",
    ],
    cta: "Get Quote",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Full-service partnership for large organizations",
    price: "Custom",
    features: [
      "Everything in Growth",
      "Dedicated team",
      "24/7 support coverage",
      "Custom workflows",
      "SLA guarantees",
      "On-site consulting",
      "Strategic planning",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
]

function BorderBeam() {
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
      <div
        className="absolute w-24 h-24 bg-cyan-500/20 blur-xl border-beam"
        style={{
          offsetPath: "rect(0 100% 100% 0 round 16px)",
        }}
      />
    </div>
  )
}

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Flexible Engagement Models
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Every business is unique. We create custom packages tailored to your specific needs and budget.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-zinc-900 border-cyan-500/50"
                  : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-600"
              }`}
            >
              {plan.highlighted && <BorderBeam />}

              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">Tailored to your requirements</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.highlighted
                    ? "shimmer-btn bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                    : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                }`}
                asChild
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
