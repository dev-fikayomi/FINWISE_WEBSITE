import { Wallet, Compass, Sparkles, TrendingUp, Landmark, Target, ShieldQuestion, Award, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Breadcrumb, SectionHeading, NumberedRow } from '@/components/ui/Atoms'
import Button from '@/components/ui/Button'
import individualsHero from '@/Assest/INDIVIDUAL_SCREEN_Hero.png'

const journey = [
  { title: 'Understand Your Behavior', description: 'See how spending, saving, planning, and everyday financial choices influence your financial habits and overall BFI profile.' },
  { title: 'Receive Personalized Insights', description: 'Get relevant recommendations, alerts, and supportive nudges based on your financial behavior and goals.' },
  { title: 'Make Better Decisions', description: 'Use those insights to strengthen financial habits, improve consistency, and make choices that better support your future.' },
]

const goals = [
  { icon: <Target className="h-5 w-5" />, title: 'Personal Goals', description: 'Save toward meaningful milestones such as education, travel, major purchases, career plans, or other personal priorities.' },
  { icon: <ShieldQuestion className="h-5 w-5" />, title: 'Emergency Savings', description: 'Build a dedicated financial safety net that helps prepare you for unexpected expenses and changing circumstances.' },
  { icon: <Sparkles className="h-5 w-5" />, title: 'BFI-Powered Guidance', description: 'Your savings behavior contributes to your financial intelligence profile, while supportive reminders help you get back on track when contributions are missed.' },
]

const credit = [
  { title: 'Savings History', description: 'Consistent saving helps demonstrate financial discipline and strengthens your overall eligibility profile.' },
  { title: 'BFI Profile', description: 'Your financial habits provide a broader understanding of how you plan, spend, save, and manage responsibilities.' },
  { title: 'Verified Partners', description: 'Explore credit products offered by approved financial institutions through the Finwise ecosystem.' },
  { title: 'Responsible Borrowing', description: 'Recommendations are designed to support financial progress while encouraging borrowing that aligns with your circumstances and goals.' },
]

export default function Individuals() {
  return (
    <div>
      <section
        className="relative overflow-hidden border-b border-white/5"
        style={{
          backgroundImage: `url(${individualsHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-10">
          <div className="mb-8" data-aos="fade-up">
            <Breadcrumb trail={[{ label: 'Home', href: '/' }, { label: 'Solution', href: '/solution/individuals' }, { label: 'Individuals' }]} />
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 data-aos="fade-up" className="font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
                Build Better Financial Habits. Build Your Future.
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="mt-5 max-w-lg text-base leading-relaxed text-mist-400">
                Finwise helps you understand your financial behavior, save with purpose, and
                make more confident financial decisions.
              </p>
              <div data-aos="fade-up" data-aos-delay="180" className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact" variant="primary">Get Started</Button>
                <Button to="/bfi" variant="secondary">See how BFI works</Button>
              </div>
            </div>

            
          </div>

          <div data-aos="fade-up" className="mt-16 grid grid-cols-1 gap-8 border-t border-white/5 pt-10 sm:grid-cols-3">
            <div><p className="font-display text-3xl font-extrabold text-gold-500">1K+</p><p className="mt-1 text-sm text-mist-400">Behavior Dimensions Tracked</p></div>
            <div><p className="font-display text-3xl font-extrabold text-gold-500">1K+</p><p className="mt-1 text-sm text-mist-400">Financial Insights Delivered</p></div>
            <div><p className="font-display text-3xl font-extrabold text-gold-500">1K+</p><p className="mt-1 text-sm text-mist-400">Individual Savers</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Your Financial Journey"
          title="Financial Growth Starts With Understanding Yourself"
          description="Finwise uses Behavioral Financial Intelligence to understand your financial habits and turn everyday behavior into personalized insights that help you make more confident financial decisions."
        />
        <div className="mt-12 grid gap-4">
          {journey.map((j, i) => (
            <NumberedRow key={j.title} number={i + 1} title={j.title} description={j.description} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Save With Purpose"
            title="Turn Your Goals Into Consistent Progress"
            description="Create personal and emergency savings goals with clear targets, timelines, and contributions that help you stay focused on what matters."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {goals.map((g) => (
              <div key={g.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">{g.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Responsible Credit Access"
          title="Opportunities Built Around Better Financial Habits"
          description="Finwise helps eligible users discover credit products from verified partner institutions. Eligibility is informed by your savings behavior and BFI profile \u2014 not simply a traditional credit score."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right" className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-900">
            <Landmark className="h-16 w-16 text-gold-500/70" strokeWidth={1.2} />
          </div>
          <div className="flex flex-col divide-y divide-white/5">
            {credit.map((c) => (
              <div key={c.title} data-aos="fade-up" className="flex gap-4 py-4">
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-mist-400">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Real Progress"
            title="Build Habits You Can See"
            description="Your progress becomes clearer as your financial behavior improves over time."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-7">
              <TrendingUp className="h-8 w-8 text-gold-500" />
              <p className="mt-4 font-display text-2xl font-bold text-white">612 &rarr; 704</p>
              <p className="mt-1 text-sm font-semibold text-mist-200">BFI Improvement</p>
              <p className="mt-2 text-sm text-mist-400">Better planning, spending awareness, and saving consistency can contribute to a stronger BFI profile.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="80" className="rounded-2xl border border-white/5 bg-ink-800/60 p-7">
              <Wallet className="h-8 w-8 text-teal-400" />
              <p className="mt-4 font-display text-2xl font-bold text-white">&#8358;420K &rarr; &#8358;800K</p>
              <p className="mt-1 text-sm font-semibold text-mist-200">Savings Progress</p>
              <p className="mt-2 text-sm text-mist-400">Consistent contributions help move meaningful goals closer to completion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20 text-center">
        <div className="mx-auto max-w-xl px-5 sm:px-8">
          <Compass className="mx-auto h-8 w-8 text-gold-500" />
          <h2 data-aos="fade-up" className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to understand your financial behavior?
          </h2>
          <div data-aos="fade-up" data-aos-delay="100" className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="primary">Get Started</Button>
            <Button to="/solution/families" variant="secondary">Explore Family Solutions</Button>
          </div>
          <p className="mt-6 text-xs text-mist-500">
            Looking for family tools instead? <Link to="/solution/families" className="text-gold-500">See Parent & Families</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
