'use client'

import { motion } from 'framer-motion'
import { BrandName } from '@/components/brand-name'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information about you when you visit our website, request our services, or communicate with us. This includes:
      
• Personal Information: Name, email address, phone number, company name, and job title
• Business Information: Company details, project requirements, and service preferences
• Technical Information: IP address, browser type, pages visited, and usage patterns
• AI Model & Data Handling: When you engage our AI training or data handling services, we collect data according to specific project agreements and data processing agreements (DPAs)`
    },
    {
      title: '2. How We Use Your Information',
      content: `ARconIQ uses the information we collect for the following purposes:

• Service Delivery: To provide AI model training, customer support, data handling, content moderation, and email management services
• Communication: To respond to inquiries, provide project updates, and send service-related notifications
• Improvement: To enhance our services, analyze user needs, and develop new offerings
• Compliance: To comply with legal obligations and maintain records for audit purposes
• Analytics: To understand how our services are used and optimize performance`
    },
    {
      title: '3. Data Protection & Security',
      content: `We take data protection seriously, especially given our work in AI model training and data handling:

• Encryption: All data is transmitted and stored using industry-standard encryption
• Access Control: Only authorized employees have access to your data
• Data Minimization: We collect only the data necessary for our services
• Retention: Data is retained only as long as necessary for service delivery and legal compliance
• Security Measures: We implement firewalls, secure servers, and regular security audits`
    },
    {
      title: '4. GDPR & International Compliance',
      content: `ARconIQ complies with the General Data Protection Regulation (GDPR) and other international data protection laws:

• Right to Access: You can request access to your personal data
• Right to Correction: You can request corrections to inaccurate data
• Right to Deletion: You can request deletion of your data (subject to legal retention requirements)
• Right to Portability: You can request your data in a structured, machine-readable format
• Data Processing Agreements: For AI training and data handling projects, we establish formal DPAs ensuring compliance`
    },
    {
      title: '5. Cookies & Tracking',
      content: `Our website uses cookies to enhance user experience:

• Essential Cookies: Required for website functionality
• Analytics Cookies: To understand how you use our website
• Marketing Cookies: To personalize content and track campaign performance

You can disable cookies through your browser settings, though this may affect website functionality.`
    },
    {
      title: '6. Third-Party Services',
      content: `We use third-party services for analytics, payment processing, and email communication:

• Analytics: Google Analytics for website traffic analysis
• Payment Processing: Secure payment gateways for service billing
• Email Services: For transactional and marketing communications

These third parties are contractually obligated to protect your data.`
    },
    {
      title: '7. AI Model Training & Data Handling',
      content: `For clients engaging our AI model training and data handling services:

• Confidentiality: All client data used for training is treated as confidential
• Annotation & Evaluation: Data annotators and evaluators sign NDAs
• Data Integrity: We ensure data accuracy through quality assurance processes
• Model Ownership: Trained models and intellectual property remain as per contractual agreements
• Compliance: All services comply with relevant data protection regulations`
    },
    {
      title: '8. Content Moderation Services',
      content: `For our content moderation clients:

• Sensitive Data Handling: We treat user-generated content with appropriate care
• Moderator Access: Only trained moderators access content, under strict confidentiality
• Audit Trails: We maintain logs of moderation actions for compliance
• Client Data: We do not use client data for our own purposes`
    },
    {
      title: '9. Your Rights',
      content: `You have the following rights regarding your personal data:

• Right to Know: What data we collect and how it's used
• Right to Delete: Request deletion of your data
• Right to Opt-Out: Unsubscribe from marketing communications
• Right to Complaint: Lodge a complaint with relevant data protection authorities
• Right to Transparency: Understand our data practices`
    },
    {
      title: '10. Changes to This Policy',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or website notice. Your continued use of our services constitutes acceptance of updated policies.`
    },
    {
      title: '11. Contact Us',
      content: `For privacy concerns, questions, or to exercise your rights:

Email: privacy@arconiq.com
Address: ARconIQ Solutions Pvt Ltd
Phone: +91 [Your Phone Number]

Our Data Protection Officer is available to address all privacy-related inquiries.

Last Updated: January 2026`
    }
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
            <span>←</span> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-zinc-400 mb-12">
            How <BrandName /> protects and manages your personal data
          </p>

          <div className="prose prose-invert max-w-none">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-8 bg-zinc-900 rounded-xl border border-zinc-800"
          >
            <h3 className="text-xl font-bold text-white mb-4">Need More Information?</h3>
            <p className="text-zinc-300 mb-6">
              For specific inquiries about our AI model training, data handling, or content moderation services, please contact our privacy team.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
