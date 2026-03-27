"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react"
import Link from "next/link"
import { BlogCard } from "@/components/blog-card"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-zinc-400 pb-8 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <span>{post.date}</span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">{post.sections.overview}</p>
            </div>

            {/* Growth Metrics */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Key Growth Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.sections.growthMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="text-cyan-400 text-2xl md:text-3xl font-bold mb-2">
                      {metric.value}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{metric.metric}</h3>
                    <p className="text-zinc-400 text-sm">{metric.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Implementation Strategy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Implementation Strategy</h2>
              <div className="p-8 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-900/20">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {post.sections.implementationStrategy}
                </p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
              <ul className="space-y-4">
                {post.sections.keyBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex gap-4 p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center text-zinc-950 font-bold text-sm mt-0.5">
                      ✓
                    </div>
                    <span className="text-white">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Real-World Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.sections.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-zinc-400">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.sections.faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 transition-all cursor-pointer"
                  >
                    <summary className="flex items-center gap-3 font-semibold text-white list-none">
                      <span className="text-cyan-400 transition-transform group-open:rotate-180">
                        ▼
                      </span>
                      {faq.question}
                    </summary>
                    <p className="mt-4 text-zinc-400 ml-8">{faq.answer}</p>
                  </motion.details>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Related Posts */}
        {(prevPost || nextPost) && (
          <section className="py-16 md:py-24 px-4 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12">More Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {prevPost && (
                  <BlogCard
                    slug={prevPost.slug}
                    title={prevPost.title}
                    excerpt={prevPost.excerpt}
                    date={prevPost.date}
                    readingTime={prevPost.readingTime}
                    category={prevPost.category}
                    image={prevPost.image}
                    index={0}
                  />
                )}
                {nextPost && (
                  <BlogCard
                    slug={nextPost.slug}
                    title={nextPost.title}
                    excerpt={nextPost.excerpt}
                    date={nextPost.date}
                    readingTime={nextPost.readingTime}
                    category={nextPost.category}
                    image={nextPost.image}
                    index={1}
                  />
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 border-t border-zinc-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement These Solutions?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Let&apos;s discuss how we can help your organization achieve these results.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
