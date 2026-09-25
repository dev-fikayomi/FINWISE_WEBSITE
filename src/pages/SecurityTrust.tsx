import { ShieldCheck, Fingerprint, Lock, Clock3, KeyRound, Eye, Mail, Landmark } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, NumberedRow } from '@/components/ui/Atoms'
import ComplianceBadges from '@/components/ui/ComplianceBadges'
import Button from '@/components/ui/Button'
import securityHero from '@/Assest/security_Hero.png'
import LockPic from '@/Assest/LockPic.png'
import FinwiseLogo from '@/Assest/finwise.png'
const controls = [
  { number: 1, title: 'Granular Permissions', description: 'Choose which information can be accessed and what services can use your data.' },
  { number: 2, title: 'Time-Bound Access', description: 'Permissions can be limited to defined periods and reviewed whenever needed.' },
  { number: 3, title: 'Revoke Anytime', description: 'Withdraw access when you no longer want a service or partner to access your information.' },
]

const privacy = [
  { icon: <img src={FinwiseLogo} alt="Finwise" /> , title: 'Granular Permissions', description: 'Choose which information can be accessed and what services can use your data.' },
  { icon: <img src={FinwiseLogo} alt="Finwise" />, title: 'Time-Bound Access', description: 'Permissions can be limited to defined periods and reviewed whenever needed.' },
  { icon: <img src={FinwiseLogo} alt="Finwise" />, title: 'Revoke Anytime', description: 'Withdraw access when you no longer want a service or partner to access your information.' },
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
                <div className="mb-4 flex h-11 w-11 items-center ">{p.icon}</div>
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

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Encrypted Connections',
                description: 'Information is protected during transmission and storage using modern security standards.',
                gradient: 'bg-gradient-to-br from-[#747AB8] to-[#747AB8]',
                overlay: 'bg-[#747AB8]/50',
              },
              {
                title: 'Permission Controls',
                description: 'Manage who can access your information and for how long.',
                gradient: 'bg-gradient-to-br from-[#B583E8] to-[#8347CC]',
                overlay: 'bg-[#A179D7]/18',
              },
              {
                title: 'Verified Access',
                description: 'Only approved institutions can participate within the Finwise ecosystem.',
                gradient: 'bg-gradient-to-br from-[#F3A23E] to-[#E4780F]',
                overlay: 'bg-[#E78022]/18',
              },
              {
                title: 'Full Transparency',
                description: 'Review and manage your data-sharing activity whenever you choose.',
                gradient: 'bg-gradient-to-br from-[#2E3548] to-[#171B26]',
                overlay: 'bg-[#303549]/12',
              },
            ].map((b, i) => (
              <div
                key={b.title}
                // data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`relative flex h-[420px] flex-col overflow-hidden rounded-[30px] bg-gradient-to-br p-4 shadow-xl ${b.gradient}`}
              >
                <div className={`absolute inset-0 ${b.overlay}`} />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/15 to-transparent" />

                <div className="relative z-1 flex flex-1 items-center justify-center pt-2">
                  <img
                    src={LockPic}
                    alt=""
                    className="h-[220px] w-[220px] -rotate-[15deg] object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.28)] sm:h-[250px] sm:w-[250px]"
                  />
                </div>

                <div className="relative z-10 mt-1 px-2 pb-2">
                  <h3 className="font-display text-[1.05rem] font-semibold leading-tight text-white sm:text-[1.3rem]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-[1.5] text-white/80">
                    {b.description}
                  </p>
                </div>
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
