'use client'

import { motion } from "framer-motion"
import { Brain, CheckCircle, ArrowRight, BarChart3, Zap, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

export default function AIModelTrainingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/arconiq-logo-icon.png"
              alt="ARconIQ"
              width={40}
              height={40}
              className="w-10 h-auto"
            />
            <BrandName size="sm" />
          </Link>
          <Link href="/#services" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
            Back to Services
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4 mb-8"
          >
            <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Model Training</h1>
              <p className="text-xl text-zinc-400">
                Expert training and fine-tuning of AI models tailored to your specific business needs and use cases.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mt-12"
          >
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">500+</div>
              <div className="text-sm text-zinc-400">Models Trained</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">98%</div>
              <div className="text-sm text-zinc-400">Accuracy Rate</div>
            </div>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="text-cyan-400 text-2xl font-bold">50ms</div>
              <div className="text-sm text-zinc-400">Avg Inference Time</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 mb-6">
                Our AI Model Training service provides end-to-end solutions for developing, training, and deploying custom machine learning models. Whether you need to build a model from scratch or fine-tune existing models for your specific domain, our expert team has the experience and infrastructure to deliver high-performance solutions.
              </p>
              <p className="text-zinc-300 mb-6">
                We work with cutting-edge frameworks and technologies, ensuring your models are optimized for both accuracy and efficiency. Our approach combines data science expertise with practical business insights to create models that drive real value for your organization.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Model Development",
                description: "Build machine learning models from scratch tailored to your specific use case, data, and performance requirements.",
                icon: Brain,
              },
              {
                title: "Model Fine-tuning",
                description: "Leverage pre-trained models and fine-tune them on your proprietary data for optimal performance.",
                icon: Zap,
              },
              {
                title: "Data Preparation",
                description: "Professional data cleaning, labeling, annotation, and preprocessing to ensure high-quality training datasets.",
                icon: BarChart3,
              },
              {
                title: "Model Optimization",
                description: "Optimize models for production deployment with techniques like quantization, pruning, and compression.",
                icon: Lock,
              },
              {
                title: "Performance Monitoring",
                description: "Continuous monitoring and evaluation of model performance with regular updates and improvements.",
                icon: CheckCircle,
              },
              {
                title: "Deployment & Integration",
                description: "Seamless deployment of trained models into your existing infrastructure with full technical support.",
                icon: ArrowRight,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors"
              >
                <item.icon className="w-6 h-6 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Use Cases</h2>
          <div className="space-y-6">
            {[
              {
                title: "Computer Vision Models",
                description: "Image classification, object detection, and visual recognition systems for your industry-specific needs.",
              },
              {
                title: "Natural Language Processing",
                description: "Text analysis, sentiment analysis, and language understanding models for customer insights.",
              },
              {
                title: "Predictive Analytics",
                description: "Forecasting models for demand prediction, customer behavior analysis, and business intelligence.",
              },
              {
                title: "Recommendation Systems",
                description: "Personalized recommendation engines that improve user engagement and conversion rates.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="flex items-start gap-4 p-6 rounded-lg bg-zinc-900 border border-zinc-800"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Process</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Discovery & Planning", description: "Understand your requirements, data, and business goals" },
              { step: "2", title: "Data Collection & Preparation", description: "Gather and prepare high-quality training data" },
              { step: "3", title: "Model Development", description: "Build and train custom models using best practices" },
              { step: "4", title: "Testing & Validation", description: "Rigorous testing to ensure accuracy and reliability" },
              { step: "5", title: "Optimization & Deployment", description: "Fine-tune for performance and deploy to production" },
              { step: "6", title: "Monitoring & Support", description: "Continuous monitoring and ongoing optimization" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="flex items-start gap-4 p-6 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Train Your AI Model?</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let's discuss how our AI training expertise can help your business succeed.
            </p>
            <Link
              href="/?section=contact"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
