import { Landmark, Fingerprint, RefreshCcw, KeyRound, Clock3, Lock, ShieldCheck, Eye, UserCheck, Filter, Layers, BadgeCheck } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, NumberedRow } from '@/components/ui/Atoms'

const steps = [
  { number: 1, title: 'Verify Identity', description: 'Confirm your identity using your BVN to securely connect eligible financial accounts.' },
  { number: 2, title: 'Link Bank Accounts', description: 'Select and authorize the accounts you\u2019d like Finwise to access.' },
  { number: 3, title: 'Secure Data Updates', description: 'With your permission, account information is periodically refreshed to support financial insights and family financial views.' },
]

const control = [
  { icon: <KeyRound className="h-5 w-5" />, title: 'Granular Permissions', description: 'Choose which accounts, information types, and services can access your data.' },
  { icon: <Clock3 className="h-5 w-5" />, title: 'Time-Bound Access', description: 'Permissions can be granted for defined periods and reviewed whenever needed.' },
  { icon: <Lock className="h-5 w-5" />, title: 'Revoke Anytime', description: 'You can withdraw access at any time directly from your account settings.' },
]

const edi = [
  { icon: <UserCheck className="h-4 w-4" />, title: 'User Permission First', description: 'No information is shared without your explicit approval.' },
  { icon: <Filter className="h-4 w-4" />, title: 'Limited Data Access', description: 'Partners receive only the information required for the specific service you\u2019ve requested.' },
  { icon: <Layers className="h-4 w-4" />, title: 'Aggregated Financial View', description: 'Shared information is organized into a secure, simplified format designed to support better financial decisions and service delivery.' },
  { icon: <BadgeCheck className="h-4 w-4" />, title: 'Verified Partners Only', description: 'Access is limited to approved institutions that meet Finwise\u2019s security and compliance requirements.' },
]

const built = [
  { icon: <Fingerprint className="h-5 w-5" />, title: 'Encrypted Connections', description: 'Information is protected during transmission and storage using modern security standards.' },
  { icon: <KeyRound className="h-5 w-5" />, title: 'Permission Controls', description: 'Manage who can access your information and for how long.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Verified Access', description: 'Only approved institutions can participate within the Finwise ecosystem.' },
  { icon: <Eye className="h-5 w-5" />, title: 'Full Transparency', description: 'Review and manage your data-sharing activity whenever you choose.' },
]

export default function BankLinking() {
  return (
    <div>
      <PageHero
        crumb="Bank Linking & Secure Data"
        title="Securely Connect Your Financial World"
        description="Link your bank accounts, manage permissions, and securely share financial information while staying in complete control of your data."
        secondaryCta={{ label: 'See how BFI works', to: '/bfi' }}
        media={<OrbitVisual icon={<Landmark className="h-10 w-10" />} tone="gold" size="lg" badges={[<Lock className="h-4 w-4" />, <RefreshCcw className="h-4 w-4" />]} />}
        stats={[
          { value: '1K+', label: 'Bank Accounts Linked' },
          { value: '1K+', label: 'Secure Data Connections' },
          { value: '99%', label: 'Secure Data Availability' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="How Bank Linking Works"
          title="Connect Your Accounts in a Few Simple Steps"
          description="Finwise securely connects to supported financial institutions using regulated open banking technology and your verified BVN information."
        />
        <div className="mt-12 grid gap-4">
          {steps.map((s) => (
            <NumberedRow key={s.title} {...s} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Eligibility"
            title="You Decide What Gets Shared"
            description="Your financial information remains under your control at all times. Sharing permissions are specific, temporary, and easy to manage."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {control.map((c) => (
              <div key={c.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-400">{c.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="External Data Interface (EDI)"
          title="Secure Data Sharing With Trusted Partners"
          description="When you choose to share information, verified partner institutions can access only the data necessary to provide their services."
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-ink-800">
            <Landmark className="h-16 w-16 text-teal-400/70" strokeWidth={1.2} />
          </div>
          <div className="flex flex-col divide-y divide-white/5">
            {edi.map((e) => (
              <div key={e.title} data-aos="fade-up" className="flex gap-4 py-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-500/30 text-gold-500">{e.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{e.title}</h3>
                  <p className="mt-1 text-sm text-mist-400">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Privacy & Security"
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
    </div>
  )
}
