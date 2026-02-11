'use client'

import { motion } from 'framer-motion'
import { BrandName } from '@/components/brand-name'
import Link from 'next/link'

export default function DataProcessingAgreement() {
  const sections = [
    {
      title: '1. Purpose & Scope',
      content: `This Data Processing Agreement (DPA) governs how ARconIQ processes personal data on behalf of its clients (Data Controllers) in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.

Scope: This DPA applies to all services involving data processing, including:
• AI Model Training & Data Annotation
• Customer Support Services
• Data Handling & Management
• Content Moderation
• Analytics & Reporting`
    },
    {
      title: '2. Definitions',
      content: `• Data Controller: The entity that determines the purposes and means of data processing (Client)
• Data Processor: The entity that processes data on behalf of the Controller (ARconIQ)
• Personal Data: Information relating to an identified or identifiable individual
• Processing: Any operation performed on personal data
• Subprocessor: Third parties engaged by ARconIQ to assist with processing`
    },
    {
      title: '3. Processing Instructions',
      content: `• Client Authority: ARconIQ processes data only on documented written instructions from the Client
• Scope Limitation: Processing is limited to the scope, nature, purpose, and duration specified in the Service Agreement
• Prohibition: ARconIQ will not process data for purposes beyond those authorized by the Client
• Instruction Documentation: All processing instructions are documented in a Data Processing Addendum (DPA Addendum)`
    },
    {
      title: '4. Processor Obligations',
      content: `ARconIQ commits to:

• Confidentiality: Ensure all personnel bound by confidentiality obligations
• Security: Implement technical and organizational measures to protect data
• Access Control: Limit access to data to authorized personnel only
• Audit Rights: Provide the Client with audit and inspection capabilities
• Assistance: Assist with Client's compliance obligations under GDPR
• Data Subject Rights: Help fulfill data subject requests (access, deletion, etc.)
• Incident Notification: Notify Client of any data breaches without undue delay`
    },
    {
      title: '5. Data Security Measures',
      content: `ARconIQ implements the following security measures:

• Encryption: All data in transit (TLS 1.2+) and at rest (AES-256) is encrypted
• Access Control: Role-based access control (RBAC) limits data access
• Authentication: Multi-factor authentication for employee access
• Monitoring: Continuous monitoring for unauthorized access attempts
• Firewalls: Enterprise-grade firewalls and intrusion detection systems
• Backup: Regular encrypted backups stored in geographically diverse locations
• Virus Protection: Malware scanning and antivirus software
• Vulnerability Management: Regular security audits and penetration testing`
    },
    {
      title: '6. Employee Training & Confidentiality',
      content: `• Background Checks: All ARconIQ employees undergo background verification
• Confidentiality Agreements: 100% of employees sign NDAs before handling data
• Data Protection Training: Annual GDPR and data protection training for all staff
• Annotation Training: Specialized training for annotators and content moderators
• Disciplinary Measures: Breaches result in disciplinary action up to termination`
    },
    {
      title: '7. Subprocessors',
      content: `• Authorization: ARconIQ will not engage subprocessors without prior written Client consent
• List of Subprocessors: Current subprocessor list available upon request
• Notice of Changes: 30-day notice provided before adding/changing subprocessors
• DPA Requirements: All subprocessors execute DPAs with equivalent protections
• Liability: ARconIQ remains liable for subprocessor performance
• Subprocessor Access: Clients can challenge subprocessor engagement`
    },
    {
      title: '8. Data Subject Rights',
      content: `ARconIQ assists Clients in fulfilling data subject rights:

• Right to Access: Support requests for data subjects to access their data
• Right to Correction: Facilitate correction of inaccurate data
• Right to Deletion: Process data deletion requests (right to be forgotten)
• Right to Portability: Provide data in structured, portable formats
• Right to Restrict: Limit processing of data as requested
• Right to Object: Support objections to processing
• Response Timeline: Assist in responding within 30-day statutory deadlines`
    },
    {
      title: '9. Data Breach Notification',
      content: `In case of a personal data breach:

• Immediate Notice: ARconIQ notifies Client immediately (within 24 hours if possible)
• Information Provided: Notice includes nature, scope, and potential impact of breach
• Investigation: ARconIQ conducts thorough investigation and documents findings
• Mitigation: Immediate measures taken to stop unauthorized access
• Cooperation: Full cooperation with Client in notifying authorities and data subjects
• Record Keeping: Maintenance of detailed breach records for regulatory review
• Liability: ARconIQ liable for breaches caused by failure to comply with this DPA`
    },
    {
      title: '10. Data Transfers',
      content: `For international data transfers:

• EU-US: Transfers to US follow Standard Contractual Clauses (SCCs) and EU adequacy determinations
• Non-EU Transfers: All transfers outside EU follow approved mechanisms
• Third Countries: ARconIQ ensures appropriate safeguards for non-adequate countries
• Impact Assessments: Data Protection Impact Assessments (DPIA) completed as needed
• Supplementary Measures: Additional technical measures for at-risk transfers
• Client Responsibility: Client responsible for legal basis of transfer to ARconIQ`
    },
    {
      title: '11. Data Retention & Deletion',
      content: `• Client Instruction: Data is retained only as long as Client instructs
• Service Termination: Upon service termination, Client may request data return or deletion
• Deletion Confirmation: Written confirmation of deletion provided within 30 days
• Residual Data: ARconIQ deletes all copies except those required by law
• Legal Obligations: Data retained if legally required by applicable regulations
• Backup Retention: Backups deleted within standard retention periods`
    },
    {
      title: '12. Audit & Compliance',
      content: `ARconIQ supports Client audits and compliance verification:

• Audit Rights: Clients may audit ARconIQ's compliance with this DPA
• Third-Party Auditors: Independent security audits conducted annually
• Certifications: SOC 2 Type II, ISO 27001 certifications maintained
• Reporting: Compliance reports provided upon request
• Cooperation: Full cooperation with regulatory authorities
• Inspection Access: Client may conduct on-site inspections with reasonable notice`
    },
    {
      title: '13. International Data Protection Laws',
      content: `ARconIQ complies with:

• GDPR (EU): General Data Protection Regulation for EU data subjects
• CCPA (California): California Consumer Privacy Act for California residents
• PIPEDA (Canada): Personal Information Protection and Electronic Documents Act
• LGPD (Brazil): Lei Geral de Proteção de Dados for Brazilian data subjects
• Local Laws: Applicable data protection laws in service delivery locations`
    },
    {
      title: '14. Special Categories of Data',
      content: `For processing special categories of data (sensitive data):

• Enhanced Safeguards: Additional security measures implemented
• Justified Processing: Legal basis for processing established by Client
• Restricted Access: Access limited to essential personnel only
• Anonymization: Data anonymized or pseudonymized where possible
• Purpose Limitation: Data used only for specified purposes
• Impact Assessment: Data Protection Impact Assessment completed`
    },
    {
      title: '15. Dispute Resolution & Liability',
      content: `• Governing Law: DPA governed by laws of the jurisdiction specified in Service Agreement
• Jurisdiction: Disputes resolved in courts of agreed jurisdiction
• Arbitration: Binding arbitration available as alternative dispute mechanism
• Liability Cap: Liability limited to fees paid in relevant service period
• Indemnification: ARconIQ indemnifies Client for GDPR violations
• No Limitation: Liability not limited for gross negligence or willful misconduct`
    },
    {
      title: '16. Contact & Updates',
      content: `• Data Protection Officer: available@arconiq.com or +91 [Phone Number]
• Privacy Inquiries: privacy@arconiq.com for all data protection questions
• Policy Updates: ARconIQ may update this DPA with 30 days written notice
• Client Acceptance: Updates require Client's written acceptance
• Continued Use: Continued service use constitutes acceptance of updates

Last Updated: January 2026
Version: 2.0`
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
            Data Processing Agreement (DPA)
          </h1>
          <p className="text-lg text-zinc-400 mb-12">
            GDPR-compliant data processing terms for <BrandName /> services
          </p>

          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mb-12">
            <p className="text-blue-200 text-sm">
              <strong>Important:</strong> This DPA is a standard template. For clients engaging AI model training, data handling, or content moderation services, a customized DPA will be provided as part of your Service Agreement.
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
            <h3 className="text-xl font-bold text-white mb-4">Need a Customized DPA?</h3>
            <p className="text-zinc-300 mb-6">
              For specific projects involving data processing, we'll provide a detailed Data Processing Addendum tailored to your service requirements and data protection needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              Request a DPA
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
