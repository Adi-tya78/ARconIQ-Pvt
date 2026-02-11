"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ArrowRight, Linkedin, Twitter, Mail, Target, Lightbulb, Users, TrendingUp, Globe, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BrandName } from "@/components/brand-name"

const teamMembers = [
  {
    name: "Aditya Yadav",
    role: "CEO & Co-Founder",
    bio: "With extensive corporate experience in outsourcing business operations, Aditya brings a unique blend of strategic vision and hands-on expertise. A Bachelor's in Business Administration graduate who chose to step away from his MBA to pursue his vision of creating a value-driven entity. His deep understanding of AI training models, client operations, and the complete product delivery cycle makes him the driving force behind ARconIQ's operational excellence.",
    expertise: ["AI Model Training", "Client Operations", "Product Delivery Cycle", "Business Strategy"],
    education: "BBA | Former MBA Candidate",
    image: "/aditya-yadav-headshot.png",
    color: "cyan",
  },
  {
    name: "Raash Gupta",
    role: "CFO & Co-Founder",
    bio: "Raash holds a Master's degree in Commerce (M.Com) and brings a deep understanding of core financial concepts and strategic financial planning to ARconIQ. His expertise in financial management, budgeting, and fiscal strategy ensures that every client engagement is backed by sound financial principles. As CFO, he oversees the financial health of both ARconIQ and the financial consulting services offered to clients.",
    expertise: ["Financial Strategy", "Corporate Finance", "Budget Management", "Financial Analysis"],
    education: "M.Com (Masters in Commerce)",
    image: "/raash-gupta-headshot.png",
    color: "blue",
  },
  {
    name: "Bhumi Sharma",
    role: "Global Resource Head & Partner",
    bio: "Bhumi brings exceptional technological insight and resource management capabilities to ARconIQ. With a Bachelor's degree in Technology, she possesses a rare ability to match the right resources with the right projects, ensuring optimal outcomes for every engagement. She oversees all global ethics, corporate compliance, and human resource functionalities, making her instrumental in maintaining ARconIQ's commitment to ethical business practices.",
    expertise: ["Resource Management", "Global Ethics & Compliance", "Human Resources", "Project-Resource Matching"],
    education: "B.Tech (Bachelor of Technology)",
    image: "/bhumi-sharma-headshot.png",
    color: "emerald",
  },
]

const values = [
  {
    title: "Value-Driven Excellence",
    description:
      "Born from the vision of creating meaningful impact, we prioritize delivering genuine value over short-term gains. Every solution is designed to create lasting positive change for your business.",
    icon: Target,
  },
  {
    title: "Innovation with Purpose",
    description:
      "We combine cutting-edge AI expertise with practical business acumen, ensuring that technology serves your goals—not the other way around.",
    icon: Lightbulb,
  },
  {
    title: "Complete Ownership",
    description:
      "From AI model training to final delivery, we take full ownership of every project. Our end-to-end approach ensures seamless execution and accountability.",
    icon: Users,
  },
  {
    title: "Financial Integrity",
    description:
      "With strong financial foundations guiding our decisions, we provide transparent pricing, measurable ROI, and sustainable solutions that respect your budget.",
    icon: TrendingUp,
  },
  {
    title: "Global Ethics & Compliance",
    description:
      "We maintain the highest standards of corporate ethics and global compliance, ensuring that every engagement upholds integrity and respects international business practices.",
    icon: Globe,
  },
]

const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-zinc-950">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <Image
                src="/arconiq-logo-full.png"
                alt="ARconIQ Solutions Pvt Ltd"
                width={200}
                height={200}
                className="mx-auto w-40 sm:w-48 h-auto object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 pulse-glow" />
              <span className="text-sm text-zinc-400">
                About <BrandName size="sm" />
              </span>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
            >
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  variants={textRevealVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  Building Value-Driven
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  variants={textRevealVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  Business Solutions
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
            >
              <BrandName size="lg" /> was founded with a clear vision: to create a value-driven entity that helps
              businesses scale through expert AI consultancy, operational excellence, and sound financial strategy.
            </motion.p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 px-4 bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
                  Our Vision
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  To become the most trusted partner for businesses seeking to leverage AI and operational excellence.
                  We envision a world where companies of all sizes can access enterprise-grade AI capabilities and
                  operational support, enabling them to compete and thrive in the digital age.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
                  Our Approach
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  We combine Aditya{"'"}s hands-on expertise in AI model training and complete product delivery cycles
                  with Raash{"'"}s financial acumen and strategic planning, all supported by Bhumi{"'"}s exceptional
                  resource management and ethical oversight. This unique blend ensures every project is technically
                  excellent, financially sound, and ethically compliant.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-cal-sans)" }}>
                  Global Ethics
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Under Bhumi{"'"}s leadership, we maintain the highest standards of corporate ethics and compliance
                  across all global operations. Every project is matched with the right resources, and every engagement
                  upholds integrity and respects international business practices while delivering exceptional value.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section - Updated from Founders to Leadership Team */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-cal-sans)" }}
              >
                Meet Our Leadership
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Click on a card to learn more about our leadership team.
              </p>
            </motion.div>

            {/* Single Row Leadership Cards */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onClick={() => setSelectedMember(member)}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 w-[220px]">
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                        member.color === "cyan"
                          ? "from-cyan-500/0 group-hover:from-cyan-500/10"
                          : member.color === "blue"
                            ? "from-blue-500/0 group-hover:from-blue-500/10"
                            : "from-emerald-500/0 group-hover:from-emerald-500/10"
                      } to-transparent transition-all duration-300 pointer-events-none`}
                    />

                    <div className="flex flex-col items-center text-center relative z-10">
                      {/* Profile Image */}
                      <div
                        className={`w-24 h-24 rounded-full p-1 mb-4 bg-gradient-to-br ${
                          member.color === "cyan"
                            ? "from-cyan-500 to-cyan-600"
                            : member.color === "blue"
                              ? "from-blue-500 to-blue-600"
                              : "from-emerald-500 to-emerald-600"
                        }`}
                      >
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover object-top"
                        />
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {member.name}
                      </h3>

                      {/* Role */}
                      <p
                        className={`text-sm font-medium ${
                          member.color === "cyan"
                            ? "text-cyan-400"
                            : member.color === "blue"
                              ? "text-blue-400"
                              : "text-emerald-400"
                        }`}
                      >
                        {member.role}
                      </p>

                      {/* Click indicator */}
                      <div className="mt-4 flex items-center gap-1 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        <span>View Profile</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popup Modal for Team Member Details */}
        <AnimatePresence>
          {selectedMember && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-2xl max-h-[85vh] overflow-y-auto"
              >
                <div
                  className={`bg-zinc-900 border rounded-3xl p-6 sm:p-8 relative ${
                    selectedMember.color === "cyan"
                      ? "border-cyan-500/30"
                      : selectedMember.color === "blue"
                        ? "border-blue-500/30"
                        : "border-emerald-500/30"
                  }`}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-zinc-400" />
                  </button>

                  {/* Header with Image and Basic Info */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    <div
                      className={`w-32 h-32 rounded-2xl p-1 bg-gradient-to-br ${
                        selectedMember.color === "cyan"
                          ? "from-cyan-500 to-cyan-600"
                          : selectedMember.color === "blue"
                            ? "from-blue-500 to-blue-600"
                            : "from-emerald-500 to-emerald-600"
                      }`}
                    >
                      <img
                        src={selectedMember.image || "/placeholder.svg"}
                        alt={selectedMember.name}
                        className="w-full h-full rounded-xl object-cover object-top"
                      />
                    </div>

                    <div className="text-center sm:text-left flex-1">
                      <h3
                        className="text-2xl sm:text-3xl font-bold text-white mb-2"
                        style={{ fontFamily: "var(--font-cal-sans)" }}
                      >
                        {selectedMember.name}
                      </h3>
                      <p
                        className={`text-lg font-semibold mb-2 ${
                          selectedMember.color === "cyan"
                            ? "text-cyan-400"
                            : selectedMember.color === "blue"
                              ? "text-blue-400"
                              : "text-emerald-400"
                        }`}
                      >
                        {selectedMember.role}
                      </p>
                      <span className="inline-block px-3 py-1 text-sm bg-zinc-800 rounded-full text-zinc-400">
                        {selectedMember.education}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">About</h4>
                    <p className="text-zinc-300 leading-relaxed">{selectedMember.bio}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 text-sm rounded-full border ${
                            selectedMember.color === "cyan"
                              ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                              : selectedMember.color === "blue"
                                ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                                : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 border-t border-zinc-800">
                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Connect</h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors group"
                      >
                        <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors group"
                      >
                        <Twitter className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-cyan-500/20 flex items-center justify-center transition-colors group"
                      >
                        <Mail className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Our Story Section */}
        <section className="py-24 px-4 bg-zinc-900/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-cal-sans)" }}
              >
                Our Story
              </h2>
              <div className="text-zinc-400 space-y-4 text-left max-w-3xl mx-auto">
                <p>
                  <BrandName /> was born from a shared conviction that businesses deserve more than cookie-cutter
                  solutions. When Aditya, with his extensive corporate experience in outsourcing and a bold decision to
                  leave his MBA program to pursue a vision of creating real value, met Raash, a Master{"'"}s in Commerce
                  graduate with deep financial expertise, they recognized an opportunity to build something different.
                </p>
                <p>
                  Aditya{"'"}s hands-on experience managing AI training models, client operations, and complete product
                  delivery cycles, combined with Raash{"'"}s mastery of financial strategy and corporate finance,
                  created the perfect foundation for <BrandName />. But they knew that to truly operate on a global
                  scale with integrity, they needed someone exceptional to manage resources and uphold ethical
                  standards.
                </p>
                <p>
                  That{"'"}s when Bhumi Sharma joined as Global Resource Head & Partner. With her Bachelor{"'"}s in
                  Technology and remarkable ability to match the right resources with the right projects, she brought
                  the final piece of the puzzle. Her oversight of global ethics, corporate compliance, and human
                  resources ensures that every <BrandName /> engagement operates with the highest standards of
                  integrity.
                </p>
                <p>
                  Today, <BrandName /> helps businesses of all sizes harness the power of AI, streamline their customer
                  support operations, manage data effectively, and moderate content at scale. Our approach is simple:
                  understand your challenges deeply, apply our combined expertise in operations, finance, and resource
                  management, and deliver solutions that create measurable impact.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-cal-sans)" }}
              >
                Our Values
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                The principles shaped by our leadership team{"'"}s experiences that guide everything we do at{" "}
                <BrandName />.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 ${
                    index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-zinc-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Image
                src="/arconiq-logo-full.png"
                alt="ARconIQ Solutions"
                width={120}
                height={120}
                className="mx-auto w-24 h-auto object-contain mb-6"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-cal-sans)" }}
            >
              Ready to Work with Us?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let{"'"}s discuss how <BrandName /> can help transform your business operations with our AI expertise,
              financial acumen, and commitment to excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8">
                <Link href="/#contact">
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
