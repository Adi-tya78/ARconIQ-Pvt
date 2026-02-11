'use client'

import { motion } from 'framer-motion'
import { BrandName } from '@/components/brand-name'
import Link from 'next/link'

export default function TermsOfService() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using ARconIQ's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of changes.`
    },
    {
      title: '2. Services Offered',
      content: `ARconIQ provides the following consultancy and outsourcing services:

• AI Model Training & Evaluation: Annotation, data labeling, and model evaluation services
• Customer Support: Email, chat, and phone support solutions
• Data Handling & Management: Data entry, cleaning, and database management
• Content Moderation: Social media, e-commerce, and user-generated content moderation
• Specialized Services: As agreed upon in individual service agreements

All services are delivered according to project specifications and quality standards agreed upon in writing.`
    },
    {
      title: '3. Service Level Agreements',
      content: `• Delivery: ARconIQ commits to deliver services within agreed timelines
• Quality: Services meet industry standards and client specifications
• Communication: Regular updates on project progress and milestones
• Issue Resolution: We address issues promptly and maintain transparency
• SLA Credits: Service failures may result in credits as per individual contracts`
    },
    {
      title: '4. Client Responsibilities',
      content: `As a client, you agree to:

• Provide Clear Requirements: Communicate detailed project specifications
• Timely Feedback: Provide feedback within agreed response times
• Payment: Pay invoices according to agreed terms
• Compliance: Ensure all data provided complies with applicable laws
• Confidentiality: Maintain confidentiality of project details`
    },
    {
      title: '5. Intellectual Property Rights',
      content: `• Client Data Ownership: All client data and materials remain your property
• Work Product: Deliverables created for you remain your intellectual property
• ARconIQ IP: Our methodologies, tools, and processes remain our property
• Restricted Use: You cannot use our processes or tools without express permission
• Attribution: You agree to acknowledge ARconIQ's contribution where applicable`
    },
    {
      title: '6. Confidentiality & NDA',
      content: `Both parties agree to maintain strict confidentiality:

• Confidential Information: All project details, data, and processes are confidential
• Employee NDAs: All ARconIQ employees sign non-disclosure agreements
• Annotator Agreements: Data annotators and content moderators are under NDA
• Survival: Confidentiality obligations survive contract termination
• Exceptions: Information in public domain or independently developed`
    },
    {
      title: '7. Data Protection & Security',
      content: `• Data Security: ARconIQ implements industry-standard security measures
• Encryption: All data in transit and at rest is encrypted
• Access Control: Only authorized personnel access client data
• Backup: Regular backups ensure data integrity and recovery
• GDPR Compliance: For EU clients, we comply with GDPR requirements
• Data Processing: Data Processing Agreements available upon request`
    },
    {
      title: '8. Limitation of Liability',
      content: `• Indirect Damages: ARconIQ is not liable for indirect, consequential, or punitive damages
• Liability Cap: Our total liability is limited to fees paid in the relevant service period
• Service Errors: We are not liable for errors resulting from client-provided instructions
• Force Majeure: We are not liable for events beyond our reasonable control
• Exception: Limitations do not apply to gross negligence or willful misconduct`
    },
    {
      title: '9. Payment Terms',
      content: `• Invoicing: Services are invoiced monthly or per milestone as agreed
• Payment Due: Invoices are due within 30 days of receipt (or as specified)
• Late Payment: Interest may accrue on late payments at 1.5% per month
• Currency: Payments are in USD unless otherwise specified
• Non-Payment: Continued non-payment may result in service suspension`
    },
    {
      title: '10. Termination',
      content: `• Termination for Convenience: Either party may terminate with 30 days written notice
• Termination for Cause: Immediate termination for material breach
• Data Return: Upon termination, all client data is returned securely
• Final Invoice: Outstanding fees remain due upon termination
• Post-Termination: Confidentiality obligations survive termination`
    },
    {
      title: '11. Warranties & Disclaimers',
      content: `• Service Quality: We warrant services will be performed professionally and in accordance with industry standards
• AS IS: Except as expressly stated, services are provided "as is"
• No Warranties: We disclaim warranties of merchantability, fitness, or non-infringement
• Third-Party Services: We are not responsible for third-party service failures
• Website Use: Use of our website is at your own risk`
    },
    {
      title: '12. Indemnification',
      content: `You agree to indemnify and hold ARconIQ harmless from:

• Legal Claims: Claims arising from your use of our services
• Data Compliance: Claims related to data you provided
• Infringement: Claims that your data infringes third-party rights
• Negligence: Claims arising from your negligence
• All Costs: Including attorneys' fees and court costs`
    },
    {
      title: '13. Dispute Resolution',
      content: `• Negotiation: Disputes will first be addressed through good-faith negotiation
• Mediation: If unresolved, disputes proceed to mediation
• Arbitration: Disputes are resolved through binding arbitration under [Jurisdiction] law
• Legal Fees: The prevailing party may recover reasonable legal fees
• No Class Action: All disputes must be addressed individually`
    },
    {
      title: '14. AI Model Training & Annotation Services',
      content: `For clients engaging AI model training services:

• Data Quality: We employ trained annotators to ensure data quality
• Consensus: Critical data points undergo multi-annotator review
• Evaluation: Model evaluation follows agreed metrics and benchmarks
• Delivery: Annotated datasets are delivered in specified formats
• Revision: Limited revisions are included; additional revisions are billable`
    },
    {
      title: '15. Content Moderation Services',
      content: `For content moderation clients:

• Moderation Standards: Content is moderated per agreed guidelines
• Appeal Process: Users can appeal moderation decisions
• Accuracy: We maintain high accuracy standards and monitor performance
• Escalation: Complex cases are escalated to senior moderators
• Reporting: Regular moderation reports and metrics are provided`
    },
    {
      title: '16. Governing Law & Jurisdiction',
      content: `These Terms are governed by the laws of [Your Jurisdiction]. Both parties agree to submit to the exclusive jurisdiction of courts in [Your Jurisdiction]. You waive any objection based on inconvenient forum.`
    },
    {
      title: '17. Contact Information',
      content: `For questions about these terms:

Email: legal@arconiq.com
Address: ARconIQ Solutions Pvt Ltd
Phone: +91 [Your Phone Number]

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
            Terms of Service
          </h1>
          <p className="text-lg text-zinc-400 mb-12">
            Our service terms and client obligations for <BrandName />
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
            <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zinc-300 mb-6">
              Contact our team to discuss a customized service agreement tailored to your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
