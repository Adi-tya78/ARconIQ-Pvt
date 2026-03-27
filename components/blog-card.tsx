"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: number
  category: string
  image: string
  index: number
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  category,
  image,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-full rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ background: image }}
          />

          <div className="relative p-6 md:p-8 h-full flex flex-col">
            {/* Category badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 line-clamp-3 group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-zinc-400 text-sm md:text-base mb-6 flex-grow line-clamp-2">
              {excerpt}
            </p>

            {/* Meta information */}
            <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
              <div className="flex items-center gap-4 text-xs md:text-sm text-zinc-500">
                <span>{date}</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{readingTime} min read</span>
                </div>
              </div>

              {/* Arrow icon */}
              <div className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
