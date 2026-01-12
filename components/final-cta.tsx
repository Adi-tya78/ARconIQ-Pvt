"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandName } from "@/components/brand-name"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-cal-sans)" }}
          >
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Let{"'"}s discuss how <BrandName size="lg" /> can help streamline your business processes and accelerate
            your growth. Book a free consultation today.
          </p>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Your Company Inc."
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">
                Service Interested In
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="">Select a service</option>
                <option value="ai-training">AI Model Training</option>
                <option value="customer-support">Customer Support</option>
                <option value="data-handling">Data Handling</option>
                <option value="content-moderation">Content Moderation</option>
                <option value="email-support">Email Management</option>
                <option value="other">Other / Multiple Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Describe your needs and any specific requirements..."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full shimmer-btn bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 rounded-full h-14 text-base font-medium shadow-lg shadow-cyan-500/20"
            >
              Send Message
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          {/* Contact info */}
          <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:hello@arconiq.com"
              className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">hello@arconiq.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Schedule a Call</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
