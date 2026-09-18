import { ShieldCheck, Fingerprint, Lock, Clock3, KeyRound, Eye, Mail, Landmark } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, NumberedRow } from '@/components/ui/Atoms'
import ComplianceBadges from '@/components/ui/ComplianceBadges'
import Button from '@/components/ui/Button'
import securityHero from '@/Assest/security_Hero.png'

const controls = [
  { number: 1, title: 'Granular Permissions', description: 'Choose which information can be accessed and what services can use your data.' },
  { number: 2, title: 'Time-Bound Access', description: 'Permissions can be limited to defined periods and reviewed whenever needed.' },
  { number: 3, title: 'Revoke Anytime', description: 'Withdraw access when you no longer want a service or partner to access your information.' },
]

const privacy = [
  { icon: <KeyRound className="h-5 w-5" />, title: 'Granular Permissions', description: 'Choose which information can be accessed and what services can use your data.' },
  { icon: <Clock3 className="h-5 w-5" />, title: 'Time-Bound Access', description: 'Permissions can be limited to defined periods and reviewed whenever needed.' },
  { icon: <Lock className="h-5 w-5" />, title: 'Revoke Anytime', description: 'Withdraw access when you no longer want a service or partner to access your information.' },
]

const regulatory = [
  { title: 'Data Protection', description: 'Finwise is designed around Nigeria\u2019s data-protection requirements for handling personal and financial information.' },
  { title: 'Secure Financial Data Sharing', description: 'Financial connections and data sharing follow applicable open banking requirements.' },
  { title: 'Applicable Intermediation', description: 'Applicable SEC requirements are considered for investment-adjacent intermediation activities within Finwise\u2019s defined scope.' },
]

const built = [
  { icon: <Fingerprint className="h-5 w-5" />, title: 'Encrypted Connections', description: 'Information is protected during transmission and storage using modern security standards.' },
  { icon: <KeyRound className="h-5 w-5" />, title: 'Permission Controls', description: 'Manage who can access your information and for how long.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Verified Access', description: 'Only approved institutions can participate within the Finwise ecosystem.' },
  { icon: <Eye className="h-5 w-5" />, title: 'Full Transparency', description: 'Review and manage your data-sharing activity whenever you choose.' },
]

export default function SecurityTrust() {
  return (
    <div>
      <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${securityHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        <div className="relative">
          <PageHero
            crumb="Security & Trust"
            title="Your Financial World, Protected"
            description="Finwise is built around secure financial connections, controlled access, and transparent data practices designed to keep your financial information protected."
            // media={<OrbitVisual icon={<ShieldCheck className="h-10 w-10" />} tone="gold" size="lg" badges={[<Lock className="h-4 w-4" />, <Fingerprint className="h-4 w-4" />]} />}
          />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="How Finwise Protects Your Data"
          title="Security Built Into Every Layer"
          description="Finwise gives you clear control over how your financial information is accessed, shared, and managed."
        />
        <div className="mt-12 grid gap-4">
          {controls.map((c) => (
            <NumberedRow key={c.title} {...c} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Privacy & Control"
            title="You Decide What Gets Shared"
            description="Finwise gives you clear control over how your financial information is accessed, shared, and managed."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {privacy.map((p) => (
              <div key={p.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-400">{p.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Regulatory & Compliance"
          title="Built Around the Standards That Matter"
          description="Finwise is designed around the applicable regulatory, privacy, and financial requirements relevant to its services."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {regulatory.map((r) => (
            <div key={r.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
              <Landmark className="h-6 w-6 text-gold-500" />
              <h3 className="mt-4 font-display text-base font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-mist-400">{r.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ComplianceBadges />
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Security & Privacy"
            title="Built Around Security and Privacy"
            description="Every connection, permission, and data-sharing action is designed with security, transparency, and user control in mind."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {built.map((b) => (
              <div key={b.title} data-aos="fade-up" className="rounded-2xl border border-white/10 bg-gradient-to-b from-ink-700/60 to-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">{b.icon}</div>
                <h3 className="font-display text-sm font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-mist-400">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <h2 data-aos="fade-up" className="font-display text-2xl font-bold text-white sm:text-3xl">
          Help Us Keep Finwise Secure
        </h2>
        <p data-aos="fade-up" data-aos-delay="80" className="mt-4 text-sm text-mist-400">
          If you discover a potential security vulnerability, let our team know so we can
          investigate and address it responsibly.
        </p>
        <p data-aos="fade-up" data-aos-delay="120" className="mt-6 text-xs font-semibold uppercase tracking-wide text-red-400/80">
          Report a Security Concern
        </p>
        <div data-aos="fade-up" data-aos-delay="160" className="mt-4">
          <Button href="mailto:security@finwise.com" variant="primary">
            <Mail className="h-4 w-4" /> security@finwise.com
          </Button>
        </div>
      </section>
    </div>
  )
}
