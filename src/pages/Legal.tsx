import { useState } from 'react'
import { Breadcrumb } from '@/components/ui/Atoms'
import LegalHero from '@/Assest/Legal_hero.png'

const sections = [
  {
    key: 'terms',
    title: 'Terms of Service',
    description: 'Understand the terms and conditions that apply when you use Finwise.',
    heading: 'The terms that guide your use of Finwise.',
    intro:
      'These Terms of Service explain the rules, responsibilities, and conditions that apply when you access or use Finwise. They help ensure a clear and transparent relationship between Finwise, our users, and the services we provide.',
    items: [
      { title: '1. Acceptance of Terms', body: 'By creating an account or using any part of Finwise, you agree to be bound by these Terms of Service and any policies referenced within them.' },
      { title: '2. About Finwise', body: 'Finwise provides behavioural financial intelligence, savings tools, family account management, and access to credit products offered by licensed partner institutions.' },
      { title: '3. Eligibility & Account Responsibilities', body: 'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.' },
      { title: '4. Use of Services', body: 'You agree to use Finwise only for lawful purposes and in accordance with these terms and any applicable regulatory requirements.' },
      { title: '5. Partner Products', body: 'Savings, credit, and investment-adjacent products referenced on Finwise are provided by licensed partner institutions and are subject to their own terms.' },
      { title: '6. Limitation of Liability', body: 'Finwise is provided on an "as is" basis. We work to keep the platform accurate and reliable but cannot guarantee uninterrupted availability.' },
      { title: '7. Changes to These Terms', body: 'We may update these Terms of Service from time to time. Continued use of Finwise after changes take effect constitutes acceptance of the revised terms.' },
    ],
  },
  {
    key: 'privacy',
    title: 'Privacy Policy',
    description: 'Learn how Finwise collects, uses, protects, and manages personal information.',
    heading: 'How Finwise handles your personal information.',
    intro:
      'This Privacy Policy explains what personal and financial information Finwise collects, how it is used, and the choices you have in managing it.',
    items: [
      { title: '1. Information We Collect', body: 'We collect information you provide directly, such as your name, contact details, and BVN, along with financial information shared through linked accounts.' },
      { title: '2. How We Use Your Information', body: 'Information is used to provide Finwise services, generate your BFI profile, personalize recommendations, and meet regulatory obligations.' },
      { title: '3. Sharing With Partners', body: 'Information is only shared with verified partner institutions when you explicitly grant permission for a specific service.' },
      { title: '4. Data Retention', body: 'We retain personal information for as long as necessary to provide our services and meet legal and regulatory requirements.' },
      { title: '5. Your Rights', body: 'You can request access to, correction of, or deletion of your personal information, subject to applicable law.' },
    ],
  },
  {
    key: 'cookies',
    title: 'Cookie Policy',
    description: 'Understand how cookies and similar technologies are used across the Finwise website.',
    heading: 'How Finwise uses cookies.',
    intro:
      'Cookies help us understand how the Finwise website is used and improve your experience. This policy explains the categories of cookies we use.',
    items: [
      { title: '1. Essential Cookies', body: 'Required for core site functionality such as security and account access.' },
      { title: '2. Analytics Cookies', body: 'Help us understand how visitors interact with the Finwise website so we can improve it.' },
      { title: '3. Managing Cookies', body: 'You can manage or disable cookies through your browser settings at any time.' },
    ],
  },
  {
    key: 'regulatory',
    title: 'Regulatory Disclosures',
    description: 'Review important information about Finwise\u2019s regulatory position, partnerships, and role in financial services.',
    heading: 'Our regulatory position and disclosures.',
    intro:
      'Finwise operates as a technology platform that connects users to licensed financial partner institutions. This section outlines our regulatory posture.',
    items: [
      { title: '1. Licensed Partners', body: 'All savings, credit, and deposit products accessible through Finwise are provided by licensed partner institutions regulated by the appropriate authorities.' },
      { title: '2. Data Protection Compliance', body: 'Finwise is designed around applicable data protection requirements, including the Nigeria Data Protection Regulation (NDPR).' },
      { title: '3. Open Banking Compliance', body: 'Bank linking and data sharing follow the CBN Open Banking Guidelines and applicable regulatory frameworks.' },
    ],
  },
]

export default function Legal() {
  const [active, setActive] = useState('terms')
  const current = sections.find((s) => s.key === active)!

  return (
    <div>
      <div
        className="relative overflow-hidden border-b border-white/5"
        style={{
          backgroundImage: `url(${LegalHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <section className="border-b border-white/5 py-16 text-left">
          <div className="mx-auto max-w-3xl pl-0 pr-1 text-left sm:pl-0 sm:pr-8">
            <div className="mb-6 flex justify-start" data-aos="fade-up">
              <Breadcrumb trail={[{ label: 'Home', href: '/' }, { label: 'Legal' }]} />
            </div>
            <h1 data-aos="fade-up" data-aos-delay="60" className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Clear terms. Clear privacy. Clear responsibility.
            </h1>
            <p data-aos="fade-up" data-aos-delay="120" className="mt-4 text-sm text-mist-400">
              Find the legal information that explains how Finwise operates, how your
              information is handled, and the responsibilities that come with using our
              services.
            </p>
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className="flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={
                  'rounded-2xl border p-5 text-left transition-colors ' +
                  (active === s.key
                    ? 'border-gold-500/50 bg-ink-800'
                    : 'border-transparent bg-ink-800/60 hover:border-white/10')
                }
              >
                <p className="font-display text-base font-semibold text-white">{s.title}</p>
                <p className="mt-1 text-xs text-mist-400">{s.description}</p>
              </button>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">{current.title}</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{current.heading}</h2>
            <p className="mt-4 text-sm leading-relaxed text-mist-400">{current.intro}</p>

            <div className="mt-8 space-y-6">
              {current.items.map((item) => (
                <div key={item.title} className="border-b border-white/5 pb-6 last:border-none">
                  <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
