import { useState, type FormEvent } from 'react'
import { Headset } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Atoms'
import OrbitVisual from '@/components/ui/OrbitVisual'
import contactHero from '@/Assest/Contact_hero.png'
import Button from '@/components/ui/Button'

const routes = [
  { key: 'get-started', title: 'Get Started', description: 'Ready to start building better financial habits?', heading: 'Let\u2019s get you started', body: 'Create personal and emergency savings goals with clear targets, timelines, and contributions that help you stay focused on what matters.', interest: 'Managing my finances' },
  { key: 'signup-help', title: 'Sign-up Help', description: 'Need help creating your Finwise account?', heading: 'We\u2019ll help you get set up', body: 'Tell us where you got stuck and our onboarding team will follow up with step-by-step guidance.', interest: 'Account setup help' },
  { key: 'partnerships', title: 'Partnerships', description: 'Interested in working with Finwise?', heading: 'Let\u2019s explore a partnership', body: 'Share a bit about your organisation and what you\u2019re looking to build, and we\u2019ll route it to our partnerships team.', interest: 'Exploring a partnership' },
  { key: 'press', title: 'Press & Media', description: 'Looking for Finwise information, assets, or media contact?', heading: 'Let\u2019s talk to press', body: 'Send us your enquiry and deadline, and our communications team will get back to you.', interest: 'Press & media enquiry' },
  { key: 'support', title: 'Support', description: 'Already using Finwise and need assistance?', heading: 'We\u2019re here to help', body: 'Describe the issue you\u2019re experiencing and our support team will follow up as soon as possible.', interest: 'Existing customer support' },
] as const

export default function Contact() {
  const [active, setActive] = useState<(typeof routes)[number]['key']>('get-started')
  const [submitted, setSubmitted] = useState(false)
  const current = routes.find((r) => r.key === active)!

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
       <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        <div className="relative">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-10">
          <div className="mb-8" data-aos="fade-up">
            <Breadcrumb trail={[{ label: 'Home', href: '/' }, { label: 'Contact Finwise' }]} />
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 data-aos="fade-up" className="font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
                Tell us what you need &mdash; we'll route you right.
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="mt-5 max-w-lg text-base leading-relaxed text-mist-400">
                Whether you're ready to get started, need help, want to explore a
                partnership, or have a press enquiry, choose what you're looking for and
                we'll point you in the right direction.
              </p>
            </div>
            
          </div>
        </div>
      </section>
</div>
</div>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div data-aos="fade-up" className="grid gap-8 rounded-3xl border border-white/5 bg-ink-900/60 p-6 sm:p-10 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-3">
            {routes.map((r) => (
              <button
                key={r.key}
                onClick={() => {
                  setActive(r.key)
                  setSubmitted(false)
                }}
                className={
                  'rounded-2xl border p-5 text-left transition-colors ' +
                  (active === r.key
                    ? 'border-gold-500/50 bg-ink-800'
                    : 'border-transparent bg-ink-800/60 hover:border-white/10')
                }
              >
                <p className="font-display text-base font-semibold text-white">{r.title}</p>
                <p className="mt-1 text-xs text-mist-400">{r.description}</p>
              </button>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">{current.title}</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{current.heading}</h2>
            <p className="mt-3 max-w-xl text-sm text-mist-400">{current.body}</p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-5 rounded-2xl border border-white/5 bg-ink-800/60 p-6">
              <div>
                <label className="text-sm text-mist-300">Full Name</label>
                <input required type="text" placeholder="Enter your full name" className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-mist-500 focus:border-gold-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm text-mist-300">Email Address</label>
                <input required type="email" placeholder="Enter your email address" className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-mist-500 focus:border-gold-500 focus:outline-none" />
              </div>
              <div>
                <label className="text-sm text-mist-300">I am interested in</label>
                <select className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white focus:border-gold-500 focus:outline-none" defaultValue={current.interest}>
                  <option>{current.interest}</option>
                  {routes.filter((r) => r.key !== active).map((r) => (
                    <option key={r.key}>{r.interest}</option>
                  ))}
                </select>
              </div>
              <Button type="submit" variant="primary" withArrow>
                {submitted ? 'Sent!' : 'Get Started'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
