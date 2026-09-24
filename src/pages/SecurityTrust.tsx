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

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Regulatory &amp; Compliance</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Built Around the Standards That Matter
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Finwise is designed around the applicable regulatory, privacy, and financial requirements relevant to its services.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {regulatory.map((r) => (
              <div
                key={r.title}
                data-aos="fade-up"
                className="rounded-[28px] border border-white/10 bg-[#101d2e]/90 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/40 bg-[#0d1722] text-gold-500">
                  <Landmark className="h-6 w-6" />
                </div>
                <h3 className="font-display text-[1.2rem] font-semibold leading-tight text-white">{r.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-mist-300">{r.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <ComplianceBadges />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Security &amp; Privacy</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Built Around Security and Privacy
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Every connection, permission, and data-sharing action is designed with security, transparency, and user control in mind.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Encrypted Connections',
                description: 'Information is protected during transmission and storage using modern security standards.',
                color: 'bg-[#B9BEDF]',
                icon: <Lock className="h-10 w-10 text-ink-900" />,
              },
              {
                title: 'Permission Controls',
                description: 'Manage who can access your information and for how long.',
                color: 'bg-[#C49AE8]',
                icon: <KeyRound className="h-10 w-10 text-ink-900" />,
              },
              {
                title: 'Verified Access',
                description: 'Only approved institutions can participate within the Finwise ecosystem.',
                color: 'bg-[#F6A450]',
                icon: <ShieldCheck className="h-10 w-10 text-ink-900" />,
              },
              {
                title: 'Full Transparency',
                description: 'Review and manage your data-sharing activity whenever you choose.',
                color: 'bg-[#7C8A9A]',
                icon: <Eye className="h-10 w-10 text-ink-900" />,
              },
            ].map((b) => (
              <div
                key={b.title}
                data-aos="fade-up"
                className={`${b.color} flex min-h-[395px] flex-col rounded-[30px] border border-white/10 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]`}
              >
                <div className="mx-auto mt-2 flex h-40 w-40 items-center justify-center rounded-[24px] border-[8px] border-[#f2d8a0] bg-[#e7d8c2] shadow-[inset_0_6px_12px_rgba(255,255,255,0.4),0_12px_25px_rgba(0,0,0,0.15)]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#d2b774] bg-[#f5e8cf] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-[#d2b774] bg-[#edf3f7] text-[#1a2733]">
                      {b.icon}
                    </div>
                  </div>
                </div>

                <h3 className="mt-7 text-center font-display text-[1.05rem] font-semibold leading-tight text-ink-950 md:text-[1.3rem]">
                  {b.title}
                </h3>

                <p className="mt-3 text-center text-base leading-relaxed text-[#1e2d3a]">
                  {b.description}
                </p>
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
