"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { getAllBlogPosts } from "@/lib/blog-data"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Insights & Strategies
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance">
              Deep dives into AI innovation, customer excellence, and business optimization. Discover how leading companies are transforming their operations.
            </p>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {posts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readingTime={post.readingTime}
                  category={post.category}
                  image={post.image}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 border-t border-zinc-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Let&apos;s discuss how ARconIQ can help you achieve your strategic goals.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Start Your Journey
            </a>
          </motion.div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
