'use client'

import { motion } from 'framer-motion'
import { BrandName } from '@/components/brand-name'
import Link from 'next/link'

export default function Disclaimer() {
  const sections = [
    {
      title: '1. General Disclaimer',
      content: `This disclaimer applies to the ARconIQ Solutions Pvt Ltd website and all services offered. While we strive to provide accurate and up-to-date information, ARconIQ does not warrant the completeness, accuracy, reliability, or timeliness of any information on this website or in our services. Use of our website and services is at your own risk.`
    },
    {
      title: '2. Service Disclaimers',
      content: `For all ARconIQ services:

• Best Efforts: ARconIQ provides services with professional care but does not guarantee results
• AI Model Training: Model performance depends on input data quality; results vary by use case
• Accuracy Limitations: Content moderation, annotation, and evaluation are subject to human and system limitations
• No Professional Advice: Our services are not substitutes for professional legal, financial, or medical advice
• Client Responsibility: Clients are responsible for validating our output and making final decisions
• Third-Party Data: We are not responsible for errors in data provided by clients or third parties`
    },
    {
      title: '3. No Warranty',
      content: `ARconIQ provides services and website content "AS IS" without warranty. We explicitly disclaim:

• Merchantability: Services are not warranted to be fit for any particular purpose
• Non-Infringement: We do not warrant deliverables do not infringe third-party rights
• Availability: Website uptime is not guaranteed; service interruptions may occur
• Accuracy: Information may contain errors; we do not warrant accuracy
• Compatibility: Services may not be compatible with all systems or platforms
• Completeness: Information may be incomplete; we do not warrant completeness`
    },
    {
      title: '4. Limitation of Liability',
      content: `To the maximum extent permitted by law:

• Indirect Damages: ARconIQ is not liable for indirect, incidental, or consequential damages
• Data Loss: ARconIQ is not liable for loss of data or business interruption
• Liability Cap: Total liability is capped at fees paid in the relevant billing period
• Exceptions: Limitations do not apply to gross negligence, willful misconduct, or fraud
• Third-Party Claims: We are not liable for third-party claims arising from your use of services
• Force Majeure: ARconIQ is not liable for events beyond reasonable control`
    },
    {
      title: '5. AI & Machine Learning Disclaimers',
      content: `For services involving artificial intelligence:

• Model Limitations: AI models have inherent limitations and error rates
• Training Data: Model performance depends on training data quality and representativeness
• Bias Awareness: AI systems may contain or amplify biases present in training data
• Human Review: Critical decisions should not rely solely on AI output; human review is recommended
• Continuous Learning: Models may improve or degrade as they process new data
• No Liability: ARconIQ is not liable for decisions made based on AI-generated output
• Regular Testing: Clients should conduct regular testing and validation of AI output`
    },
    {
      title: '6. Content Moderation Disclaimers',
      content: `For content moderation services:

• Error Margin: Moderation has inherent error rates; some content may be missed or incorrectly flagged
• Cultural Variation: Moderation guidelines may vary by culture, context, and region
• Judgment Calls: Complex decisions involve human judgment and may be disputed
• Appeals Process: Users have right to appeal moderation decisions
• Volume Limitations: High-volume moderation may increase error rates
• No Liability: We are not liable for content that passes through our moderation or is incorrectly removed
• Contextual Understanding: Moderators rely on provided context; hidden context may affect accuracy`
    },
    {
      title: '7. Data Handling Disclaimers',
      content: `For data handling and management services:

• Data Quality: ARconIQ is not responsible for quality of data provided by clients
• Data Validation: Clients are responsible for validating data before submission
• Data Accuracy: While we employ quality controls, some errors may persist
• Loss Prevention: ARconIQ implements safeguards but cannot guarantee zero data loss
• Client Verification: Clients must verify deliverables before relying on them
• No Liability: ARconIQ is not liable for decisions based on data deliverables
• Retention Responsibility: Clients are responsible for maintaining their own data backups`
    },
    {
      title: '8. Website Use Disclaimers',
      content: `Regarding website use:

• Accuracy: Website information is provided in good faith but may contain errors
• Updates: Information may become outdated; we do not guarantee updates
• Links: External links are provided for convenience; we do not endorse linked content
• Accessibility: While we aim for accessibility, some content may not be accessible to all users
• User Conduct: You are responsible for compliance with all laws while using our website
• Prohibited Use: You may not use our website for illegal, harmful, or unethical purposes
• Account Security: You are responsible for maintaining account password confidentiality`
    },
    {
      title: '9. Third-Party Services',
      content: `ARconIQ disclaims responsibility for:

• Third-Party Providers: Services provided by payment processors, hosting providers, or analytics services
• Third-Party Content: Content, products, or services offered by third parties
• Third-Party Links: External website content accessed through our links
• Third-Party Policies: Privacy policies and terms of service of third-party providers
• Third-Party Breaches: Data breaches at third-party providers are not our liability
• Vendor Selection: Clients should review third-party terms independently`
    },
    {
      title: '10. Regulatory & Legal Disclaimers',
      content: `• No Legal Advice: ARconIQ is not providing legal advice; consult an attorney for legal matters
• No Tax Advice: Services do not constitute tax advice; consult a tax professional
• No Medical Advice: Services do not constitute medical advice; consult healthcare professionals
• Industry Standards: While we follow best practices, we do not guarantee industry compliance
• Regulatory Changes: We are not responsible for impacts of regulatory or legal changes
• Your Responsibility: You are responsible for ensuring compliance with applicable laws`
    },
    {
      title: '11. Service-Specific Disclaimers',
      content: `• Email Support: We aim to respond to support requests within specified timeframes but do not guarantee response times
• API Services: API uptime is not guaranteed; service interruptions may occur
• Custom Development: Custom solutions may have limitations; testing is your responsibility
• Training Services: Training does not guarantee mastery or implementation success
• Consulting: Recommendations are advisory; actual results depend on implementation`
    },
    {
      title: '12. Disclaimer Limitations',
      content: `This disclaimer does not limit:

• Our liability for gross negligence or willful misconduct
• Our liability for fraud or fraudulent misrepresentation
• Our indemnification obligations under contracts
• Your statutory rights as a consumer
• Our obligations under mandatory laws
• Liability that cannot be limited by law`
    },
    {
      title: '13. Assumptions of Risk',
      content: `By using our services, you acknowledge and accept:

• Risks Associated with Services: You understand inherent risks in our services
• Technology Risks: You understand risks inherent in online and cloud-based services
• Data Risks: You understand risks in data handling and processing
• AI Risks: You understand limitations and risks of AI and machine learning
• Security Risks: You understand risks of cyber attacks and data breaches
• Business Risks: Business outcomes depend on many factors beyond our control`
    },
    {
      title: '14. Indemnification',
      content: `You agree to indemnify ARconIQ from:

• Legal Claims: Claims arising from your use of our services
• Data Claims: Claims related to data you provided
• Content Claims: Claims related to content you submitted
• Compliance Claims: Claims that your use violates applicable laws
• Third-Party Claims: Claims from third parties based on your actions
• All Costs: Including attorney fees, court costs, and settlement amounts`
    },
    {
      title: '15. Interpretation',
      content: `• Severability: If any provision is found unenforceable, others remain in effect
• No Waiver: Failure to enforce a right does not constitute waiver of that right
• Entire Agreement: This disclaimer is part of our complete agreement with you
• Amendment: We may amend this disclaimer at any time without notice
• Survival: Disclaimers survive termination of services or website use`
    },
    {
      title: '16. Contact & Questions',
      content: `For questions about this disclaimer:

Email: legal@arconiq.com
Address: ARconIQ Solutions Pvt Ltd
Phone: +91 [Your Phone Number]

If you do not agree with this disclaimer, please do not use our website or services.

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
            Disclaimer
          </h1>
          <p className="text-lg text-zinc-400 mb-12">
            Important disclaimers regarding <BrandName /> services
          </p>

          <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-6 mb-12">
            <p className="text-orange-200 text-sm font-semibold">
              ⚠️ Important: Please read this disclaimer carefully. By using our services, you accept all terms and disclaimers outlined below.
            </p>
          </div>

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
            <h3 className="text-xl font-bold text-white mb-4">Have Questions?</h3>
            <p className="text-zinc-300 mb-6">
              Our legal team is available to clarify any terms, disclaimers, or service limitations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Legal Team
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
