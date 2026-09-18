import { ShieldCheck, Landmark, Sparkles, FileCheck2, TrendingUp, Gauge, Repeat, LineChart, HandCoins, CheckCircle2, Lock, Eye, KeyRound } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, NumberedRow } from '@/components/ui/Atoms'

const howItWorks = [
  { title: 'Verified Credit Partners', description: 'Access credit opportunities from trusted institutions that meet Finwise partnership standards.' },
  { title: 'Personalized Matching', description: 'Receive recommendations aligned with your financial profile and borrowing needs.' },
  { title: 'Transparent Process', description: 'Applications, reviews, approvals, and loan terms remain managed by the lending partner.' },
]

const eligibility = [
  { icon: <TrendingUp className="h-5 w-5" />, title: 'Savings History', description: 'Consistent savings behavior demonstrates commitment and financial discipline.' },
  { icon: <Gauge className="h-5 w-5" />, title: 'BFI Score', description: 'Your Behavioral Financial Intelligence score reflects the financial habits that contribute to responsible borrowing.' },
  { icon: <Repeat className="h-5 w-5" />, title: 'Financial Consistency', description: 'Regular contributions, goal progress, and responsible financial decisions strengthen your eligibility profile over time.' },
]

const borrowing = [
  { icon: <LineChart className="h-4 w-4" />, title: 'Financial Awareness', description: 'Understand your borrowing capacity before applying.' },
  { icon: <HandCoins className="h-4 w-4" />, title: 'Responsible Borrowing', description: 'Access opportunities aligned with your financial situation and goals.' },
  { icon: <CheckCircle2 className="h-4 w-4" />, title: 'Better Decisions', description: 'Build confidence through informed financial choices.' },
]

const familyProtection = [
  { icon: <Lock className="h-5 w-5" />, title: 'Child Savings Protected', description: 'Bank contributions and financial information are ring-fenced through secure operational infrastructure and controlled access mechanisms.' },
  { icon: <Eye className="h-5 w-5" />, title: 'Family Transparency', description: 'Data sharing is granular, time-bound, and revocable, giving you control over what information is shared with whom.' },
  { icon: <KeyRound className="h-5 w-5" />, title: 'Role-Based Protection', description: 'Access controls ensure only eligible account types can participate in repayment recovery processes.' },
]

export default function CreditRisk() {
  return (
    <div>
      <PageHero
        crumb="Credit & Risk Management"
        title="Access Credit With Confidence."
        description="Discover credit opportunities from financial partners and lenders, guided by your financial habits, savings behavior, and BFI profile."
        media={<OrbitVisual icon={<ShieldCheck className="h-10 w-10" />} tone="gold" size="lg" badges={[<Gauge className="h-4 w-4" />, <FileCheck2 className="h-4 w-4" />]} />}
        stats={[
          { value: '1K+', label: 'Credit Assessments Completed' },
          { value: '1K+', label: 'Repayment Success Rate' },
          { value: '1%', label: 'Risk-Managed Credit' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="How Credit Works"
          title="Finwise Doesn't Lend. We Connect."
          description="Finwise helps eligible users discover and apply for credit products offered by verified financial institutions and lending partners."
        />
        <div className="mt-12 grid gap-4">
          {howItWorks.map((s, i) => (
            <NumberedRow key={s.title} number={i + 1} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Eligibility"
            title="Eligibility Goes Beyond Traditional Credit Scores"
            description="Finwise considers your financial habits and consistency \u2014 not just your borrowing history."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {eligibility.map((e) => (
              <div key={e.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-500">{e.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{e.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Responsible Borrowing"
          title="Designed to Encourage Healthy Financial Decisions"
          description="Credit recommendations are intended to support financial progress while encouraging responsible financial habits."
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-gold-500/10 to-ink-800">
            <Sparkles className="h-16 w-16 text-gold-500/70" strokeWidth={1.2} />
          </div>
          <div className="flex flex-col divide-y divide-white/5">
            {borrowing.map((b) => (
              <div key={b.title} data-aos="fade-up" className="flex gap-4 py-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-500/30 text-gold-500">{b.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{b.title}</h3>
                  <p className="mt-1 text-sm text-mist-400">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Protected Family Savings"
            title="Children's Savings Stay Protected"
            description="Custodial savings created for children are never used for repayment recovery and remain protected at all times."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {familyProtection.map((f) => (
              <div key={f.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-400">{f.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
