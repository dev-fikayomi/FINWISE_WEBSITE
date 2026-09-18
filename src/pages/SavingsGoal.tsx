import { Lock, Target, BellRing, Home as HomeIcon, LocateFixed, Sparkles, FileCheck2, Clock3, Wallet } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, NumberedRow, IconTile } from '@/components/ui/Atoms'
import Button from '@/components/ui/Button'
import PersonAvatar from '@/components/ui/PersonAvatar'

const goalTypes = [
  { icon: <Target className="h-5 w-5" />, title: 'Personal Goals', description: 'Save intentionally for the things that matter most to you, with flexible targets and contribution plans.' },
  { icon: <BellRing className="h-5 w-5" />, title: 'Emergency Fund', description: 'Build a financial safety net for unexpected expenses and gain peace of mind when life doesn\u2019t go according to plan.' },
  { icon: <HomeIcon className="h-5 w-5" />, title: 'Family & Child Goals', description: 'Create shared savings goals for education, birthdays, family experiences, and your children\u2019s future milestones.' },
]

const habits = [
  { icon: <LocateFixed className="h-5 w-5" />, title: 'Save Consistently', description: 'Consistent contributions help strengthen your Behavioral Financial Intelligence profile over time.' },
  { icon: <BellRing className="h-5 w-5" />, title: 'Personalized Nudges', description: 'Missed a savings contribution? BFI provides supportive reminders and practical suggestions to help you stay on track.' },
  { icon: <Sparkles className="h-5 w-5" />, title: 'Smarter Recommendations', description: 'Receive personalized savings recommendations that adapt to your goals and financial habits.' },
]

const emergencySteps = [
  { icon: <FileCheck2 className="h-4 w-4" />, title: 'Submit Request', description: 'Tell us why you need access to your emergency savings.' },
  { icon: <FileCheck2 className="h-4 w-4" />, title: 'Supporting Information', description: 'In certain cases, supporting documents may be requested to help protect your long-term savings goals.' },
  { icon: <Clock3 className="h-4 w-4" />, title: 'Cooling-Off Period', description: 'A short review period provides an opportunity to confirm your decision and ensure you\u2019re withdrawing funds intentionally.' },
  { icon: <Wallet className="h-4 w-4" />, title: 'Receive Funds', description: 'Once approved, your emergency savings become available for withdrawal.' },
]

export default function SavingsGoal() {
  return (
    <div>
      <PageHero
        crumb="Savings & Goal"
        title="Save With Purpose. Grow With Confidence."
        description="Build meaningful savings habits for life's biggest milestones \u2014 from personal goals and emergency funds to your family's future."
        primaryCta={{ label: 'Start Saving Today', to: '/contact' }}
        media={<OrbitVisual icon={<Lock className="h-10 w-10" />} tone="gold" size="lg" badges={[<Target className="h-4 w-4" />, <Wallet className="h-4 w-4" />]} />}
        stats={[
          { value: '1K+', label: 'Savings goals created' },
          { value: '1K+', label: 'Total saved through FinWise' },
          { value: '1K+', label: 'Savings goals completed' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Goal Savings"
          title="Goal-Based Savings Designed Around Your Life"
          description="BFI is Finwise's proprietary AI-powered intelligence engine that understands how you interact with money and helps you build healthier financial habits over time."
        />
        <div className="mt-12 grid gap-4">
          {goalTypes.map((g) => (
            <div
              key={g.title}
              data-aos="fade-up"
              className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-ink-800/60 p-6 sm:flex-row sm:items-start sm:gap-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-500">{g.icon}</div>
              <div>
                <h3 className="font-display text-base font-semibold text-white">{g.title}</h3>
                <p className="mt-1 text-sm text-mist-400">{g.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How BFI Help You Save Better"
            title="Better Saving Habits. Smarter Financial Decisions."
            description="BFI rewards consistency, not perfection. The more intentional your savings habits become, the more personalized guidance you'll receive."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {habits.map((h) => (
              <IconTile key={h.title} {...h} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Emergency Fund Access"
          title="Access Your Emergency Savings When You Need It Most."
          description="Your emergency fund is there to support you during life's unexpected moments \u2014 while encouraging thoughtful financial decisions."
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-gold-500/10 to-ink-800">
            <BellRing className="h-16 w-16 text-gold-500/70" strokeWidth={1.2} />
          </div>
          <div className="flex flex-col gap-6">
            {emergencySteps.map((s, i) => (
              <div key={s.title} data-aos="fade-up" data-aos-delay={i * 60} className="flex gap-4 border-b border-white/5 pb-6 last:border-none">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-500/30 text-gold-500">{s.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-mist-400">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-ink-900 to-ink-950 py-24 text-center">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 data-aos="fade-up" className="font-display text-3xl font-bold text-white sm:text-4xl">
            Start Saving For What Matters Most.
          </h2>
          <p data-aos="fade-up" data-aos-delay="80" className="mt-4 text-base text-mist-400">
            Build healthy financial habits, achieve meaningful milestones, and create a
            more confident financial future with Finwise.
          </p>
          <div data-aos="fade-up" data-aos-delay="130" className="mt-6 flex -space-x-3 [&>*]:ring-2 [&>*]:ring-ink-950">
            {['a', 'b', 'c', 'd'].map((s) => (
              <PersonAvatar key={s} seed={s} size={40} />
            ))}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-800 text-xs font-semibold text-white ring-2 ring-ink-950">44k+</span>
          </div>
          <div data-aos="fade-up" data-aos-delay="180" className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="primary">Get Started</Button>
            <Button to="/contact" variant="secondary">Start Saving</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
