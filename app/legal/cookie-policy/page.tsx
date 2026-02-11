'use client'

import { motion } from 'framer-motion'
import { BrandName } from '@/components/brand-name'
import Link from 'next/link'

export default function CookiePolicy() {
  const cookies = [
    {
      name: 'Essential Cookies',
      cookies: ['_sessionid', 'csrf_token', 'lang_pref'],
      purpose: 'Required for website functionality, security, and basic navigation',
      duration: 'Session or 1 year'
    },
    {
      name: 'Analytics Cookies',
      cookies: ['_ga', '_gid', '_gat'],
      purpose: 'Help us understand how you use our website to improve user experience',
      duration: '1-2 years'
    },
    {
      name: 'Marketing Cookies',
      cookies: ['_fbp', 'utm_source', '_hjid'],
      purpose: 'Track campaign performance and personalize content',
      duration: 'Various (up to 2 years)'
    },
    {
      name: 'Third-Party Cookies',
      cookies: ['Google Analytics', 'LinkedIn Pixel', 'HubSpot'],
      purpose: 'Provided by external services for analytics and marketing',
      duration: 'Varies by service'
    }
  ]

  const sections = [
    {
      title: '1. What Are Cookies?',
      content: `Cookies are small text files stored on your device that contain information about your browsing activity. They allow websites to remember your preferences and improve your user experience. There are two main types:

• Session Cookies: Temporary cookies deleted when you close your browser
• Persistent Cookies: Remain on your device until they expire or you delete them`
    },
    {
      title: '2. Why We Use Cookies',
      content: `ARconIQ uses cookies for several important reasons:

• Functionality: To enable essential website features and navigation
• Security: To prevent fraud and protect your account
• Analytics: To understand how visitors use our website
• Performance: To optimize website speed and responsiveness
• Marketing: To track campaign effectiveness and personalize content`
    },
    {
      title: '3. Types of Cookies We Use',
      content: `We use the following categories of cookies on our website, detailed in the table below.`
    },
    {
      title: '4. Third-Party Cookies',
      content: `Our website includes third-party services that use cookies:

• Google Analytics: Analyzes website traffic and user behavior
• LinkedIn Insight Tag: Tracks LinkedIn ad performance
• HubSpot: Manages contact information and marketing campaigns
• Payment Processors: Facilitate secure transactions

These third parties have their own cookie policies, and we recommend reviewing them on their respective websites.`
    },
    {
      title: '5. How to Control Cookies',
      content: `You have full control over cookies on your device:

• Browser Settings: Most browsers allow you to control or disable cookies
• Cookie Management Tools: Use built-in cookie management features
• Opt-Out: Some services offer opt-out options for tracking cookies
• Third-Party Tools: Cookie consent tools can help manage preferences

Note: Disabling essential cookies may affect website functionality.`
    },
    {
      title: '6. Google Analytics',
      content: `We use Google Analytics to understand website traffic:

• Data Collection: Google Analytics collects anonymized data about how you use our site
• Tracking ID: Google uses a unique identifier to track sessions
• IP Masking: We've enabled IP anonymization to protect privacy
• Opt-Out: You can opt out using the Google Analytics opt-out browser extension
• Privacy: Google's privacy policy governs their data collection`
    },
    {
      title: '7. Marketing & Retargeting Cookies',
      content: `We use cookies for marketing purposes:

• Ad Targeting: Cookies help us show relevant ads on other platforms
• Campaign Tracking: We track which campaigns drive website visits
• Audience Segmentation: We create audience segments for personalized marketing
• Opt-Out: You can opt out of personalized ads in your ad preferences`
    },
    {
      title: '8. GDPR & Consent',
      content: `For visitors in the European Union:

• Consent Required: We require explicit consent before using non-essential cookies
• Cookie Banner: A banner appears on first visit allowing you to accept or reject cookies
• Consent Recording: Your preferences are recorded and respected
• Right to Withdraw: You can change your preferences at any time
• Legitimate Interest: We assess legitimate interest for non-essential cookies`
    },
    {
      title: '9. Cookie Retention & Deletion',
      content: `• Retention Periods: Essential cookies are retained as long as necessary; others per legal requirements
• Automatic Deletion: Persistent cookies are automatically deleted after expiration
• Manual Deletion: You can delete cookies manually through browser settings
• Data Cleanup: Upon request, we can delete cookies associated with your account
• Cookie Reset: Clearing browser cache will delete all stored cookies`
    },
    {
      title: '10. Emerging Technologies',
      content: `Beyond cookies, we may use:

• Web Beacons: Transparent pixels that track page views
• Local Storage: Browser storage for user preferences
• Service Workers: For offline functionality and performance
• Fingerprinting: To detect fraud and security threats

These technologies follow the same privacy principles as cookies.`
    },
    {
      title: '11. Cookie Policy Updates',
      content: `We may update this policy to reflect changes in our practices or new technologies. Significant updates will be communicated via email or website notice. Your continued use of our website constitutes acceptance of updated policies.`
    },
    {
      title: '12. Contact & Support',
      content: `For questions about our cookie practices:

Email: privacy@arconiq.com
Address: ARconIQ Solutions Pvt Ltd
Phone: +91 [Your Phone Number]

We're happy to clarify our cookie use and help you manage your preferences.

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
            Cookie Policy
          </h1>
          <p className="text-lg text-zinc-400 mb-12">
            Understanding how <BrandName /> uses cookies and tracking technologies
          </p>

          <div className="prose prose-invert max-w-none">
            {sections.slice(0, 3).map((section, idx) => (
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

            {/* Cookie Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Cookie Types & Details</h2>
              <div className="space-y-6">
                {cookies.map((category, idx) => (
                  <div key={idx} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">{category.name}</h3>
                    <div className="space-y-3 text-zinc-300">
                      <div>
                        <p className="font-semibold text-white text-sm">Cookies:</p>
                        <p className="text-sm">{category.cookies.join(', ')}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">Purpose:</p>
                        <p className="text-sm">{category.purpose}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">Duration:</p>
                        <p className="text-sm">{category.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {sections.slice(3).map((section, idx) => (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (idx + 3) * 0.05 }}
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 bg-zinc-900 rounded-xl border border-zinc-800"
          >
            <h3 className="text-xl font-bold text-white mb-4">Manage Your Preferences</h3>
            <p className="text-zinc-300 mb-6">
              You can update your cookie preferences at any time. Our consent banner appears on first visit, and you can always adjust your settings.
            </p>
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors">
              Update Cookie Preferences
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
