"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

const footerLinks = {
  Services: ["AI Training", "Customer Support", "Data Handling", "Content Moderation", "Email Management"],
  Company: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/arconiq-logo-full.png"
                alt="ARconIQ Solutions Pvt Ltd"
                width={160}
                height={160}
                className="w-32 h-auto object-contain"
              />
            </Link>
            <p className="text-sm text-zinc-500 mb-4">
              Expert consultancy in AI, customer support, and business operations.
            </p>
            <div className="text-xs text-zinc-600 space-y-1">
              <p>Aditya Yadav — CEO & Co-Founder</p>
              <p>Raash Gupta — CFO & Co-Founder</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} <BrandName size="sm" /> Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors">
              Twitter
            </a>
            <a href="mailto:hello@arconiq.com" className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
