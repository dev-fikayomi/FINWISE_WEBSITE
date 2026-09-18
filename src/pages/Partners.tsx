import { useState, type FormEvent } from 'react'
import { Handshake, Radar, Eye, Link2, KeyRound, Filter, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import ParthnershipHero from '@/Assest/Parthner_hero.png'
import { SectionHeading, NumberedRow } from '@/components/ui/Atoms'
import Button from '@/components/ui/Button'

const steps = [
  { number: 1, title: 'Reach', description: 'Connect with users who are actively building better financial habits and working toward their financial goals.' },
  { number: 2, title: 'Understand', description: 'Access permissioned and aggregated financial information through Finwise\u2019s EDI framework.' },
  { number: 3, title: 'Connect', description: 'Deliver relevant financial services through a controlled partnership experience.' },
]

const trust = [
  { icon: <KeyRound className="h-5 w-5" />, title: 'Permission-Based Access', description: 'Partners only receive access to information that users have explicitly permitted.' },
  { icon: <Filter className="h-5 w-5" />, title: 'Data Minimization', description: 'Only relevant, permissioned information is shared for the intended use.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Secure Infrastructure', description: 'Financial data is handled through secure systems and controlled access mechanisms.' },
]

const control = [
  { icon: <Eye className="h-4 w-4" />, title: 'User chooses what to share', description: 'We design and build with real people and their needs at the centre.' },
  { icon: <CheckCircle2 className="h-4 w-4" />, title: 'Consent is granted', description: 'We ask questions, learn continuously, and challenge assumptions.' },
  { icon: <Link2 className="h-4 w-4" />, title: 'Data is securely shared', description: 'We take responsibility for our work and care about what it creates.' },
  { icon: <Handshake className="h-4 w-4" />, title: 'Partner receives permissioned information', description: 'Every feature, decision, and interaction should contribute to a better financial future.' },
]

export default function Partners() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
       <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${ParthnershipHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        <div className="relative">
      <PageHero
        crumb="Partners"
        title="Build better financial outcomes, together."
        description="Connect with Finwise to reach engaged users through a compliant, consent-based partnership model powered by financial intelligence."
        primaryCta={{ label: 'Inquire About Partnership', to: '#partner-form' }}
        secondaryCta={{ label: 'Security & Trust', to: '/security-trust' }}
        // media={<OrbitVisual icon={<Handshake className="h-10 w-10" />} tone="gold" size="lg" badges={[<Radar className="h-4 w-4" />, <ShieldCheck className="h-4 w-4" />]} />}
      />
     </div>
     </div>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A smarter way to connect with financially engaged users."
          description="Finwise enables financial institutions and credit providers to connect with users through a structured, consent-based integration model."
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
            eyebrow="Built With Trust"
            title="Partnership built around compliance and control."
            description="Finwise is designed to support secure, permission-based data sharing while keeping users in control of how their financial information is accessed."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {trust.map((t) => (
              <div key={t.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-400">{t.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="User Control"
          title="Users stay in control of their data."
          description="Finwise's consent framework gives users visibility and control over how their financial information is shared with partners."
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-900">
            <Handshake className="h-16 w-16 text-gold-500/70" strokeWidth={1.2} />
          </div>
          <div className="flex flex-col divide-y divide-white/5">
            {control.map((c) => (
              <div key={c.title} data-aos="fade-up" className="flex gap-4 py-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-500/30 text-gold-500">{c.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-mist-400">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partner-form" className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <p data-aos="fade-up" className="text-sm font-semibold text-gold-500">Let's Work Together</p>
          <h2 data-aos="fade-up" data-aos-delay="60" className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Interested in partnering with Finwise?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-sm text-mist-400">
            Tell us about your organisation and what you're looking to build. Our team will
            route your enquiry to the right people.
          </p>

          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="140"
            className="mt-10 space-y-5 rounded-2xl border border-white/5 bg-ink-800/60 p-8 text-left"
          >
            <div>
              <label className="text-sm text-mist-300">Organisation name</label>
              <input
                required
                type="text"
                placeholder="Your company name"
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-mist-500 focus:border-gold-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-mist-300">Work email</label>
              <input
                required
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-mist-500 focus:border-gold-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-mist-300">Organization type</label>
              <select className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white focus:border-gold-500 focus:outline-none">
                <option>Select organisation type</option>
                <option>Bank / Financial Institution</option>
                <option>Credit Provider</option>
                <option>Fintech</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-mist-300">What are you interested in?</label>
              <textarea
                rows={4}
                placeholder="Tell us briefly about your partnership interest."
                className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-mist-500 focus:border-gold-500 focus:outline-none"
              />
            </div>
            <Button type="submit" variant="primary" withArrow className="w-full justify-center">
              {submitted ? 'Inquiry Sent' : 'Submit Partnership Inquiry'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
