import { useState, type FormEvent } from 'react'
import { Handshake, Radar, Eye, Link2, KeyRound, Filter, ShieldCheck, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import ParthnershipHero from '@/Assest/Parthner_hero.png'
// import SharedFamily from '@/Assest/Shared_Family.png'
import { SectionHeading, NumberedRow } from '@/components/ui/Atoms'
import Button from '@/components/ui/Button'
import FinwiseLogo from '@/Assest/finwise.png'
import PartnerLogo from '@/Assest/Pathner_image.png'

const steps = [
  { number: 1, title: 'Reach', description: 'Connect with users who are actively building better financial habits and working toward their financial goals.' },
  { number: 2, title: 'Understand', description: 'Access permissioned and aggregated financial information through Finwise\u2019s EDI framework.' },
  { number: 3, title: 'Connect', description: 'Deliver relevant financial services through a controlled partnership experience.' },
]

const trust = [
  { icon:  <img src={FinwiseLogo} alt="Finwise" /> , title: 'Permission-Based Access', description: 'Partners only receive access to information that users have explicitly permitted.' },
  { icon:  <img src={FinwiseLogo} alt="Finwise" /> , title: 'Data Minimization', description: 'Only relevant, permissioned information is shared for the intended use.' },
  { icon:  <img src={FinwiseLogo} alt="Finwise" /> , title: 'Secure Infrastructure', description: 'Financial data is handled through secure systems and controlled access mechanisms.' },
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
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            How It Works
          </p>
          <h2 className="font-display text-[2.8rem] font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-[4rem]">
            A smarter way to connect with financially engaged users.
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-mist-300 sm:text-[1.2rem]">
            Finwise enables financial institutions and credit providers to connect with users through a structured,
            consent-based integration model.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {steps.map((s) => (
            <div
              key={s.title}
              data-aos="fade-up"
              className="mx-auto flex max-w-[1180px] items-center gap-6 rounded-[26px] border border-white/10 bg-[#1c2a38]/80 px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_28px_rgba(0,0,0,0.12)] sm:px-6 sm:py-6"
            >
              <div className="flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-[16px] border border-[#d9c27d]/30 bg-[#2a3542] font-display text-[2.4rem] font-bold text-gold-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-[108px] sm:w-[124px] sm:text-[3rem]">
                {s.number}
              </div>

              <div className="flex flex-1 items-center gap-4 text-left sm:gap-8">
                <h3 className="font-display text-[1.7rem] font-semibold leading-none text-white sm:text-[2.2rem]">
                  {s.title}
                </h3>
                <p className="max-w-3xl text-base leading-relaxed text-mist-300 sm:text-[1.1rem]">
                  {s.description}
                </p>
              </div>
            </div>
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
                <div className="mb-4 flex h-11 w-11 ">{t.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
            User Control
          </p>
          <h2 className="font-display text-[2.8rem] font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-[4rem]">
            Users stay in control of their data.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 sm:text-[1.2rem]">
            Finwise&apos;s consent framework gives users visibility and control over how their financial information is shared with partners.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.08fr_1.2fr]">
          <div
            data-aos="fade-right"
            className="overflow-hidden rounded-[28px] border border-white/10 bg-[#1b2d3d] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <img
              src={PartnerLogo}
              alt="People working together"
              className="h-[460px] w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col">
            {control.map((c, index) => (
              <div
                key={c.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="border-t border-white/8 py-5 first:border-t-0 first:pt-0"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-gold-500">
                    <span className="text-xl leading-none">→</span>
                  </div>

                  <div>
                    <h3 className="font-display text-[1.7rem] font-semibold leading-snug text-white">
                      {c.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-mist-300">
                      {c.description}
                    </p>
                  </div>
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
