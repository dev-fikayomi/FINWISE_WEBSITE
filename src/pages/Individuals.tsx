import { Wallet, Compass, Sparkles, TrendingUp, Landmark, Target, ShieldQuestion, Award, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Breadcrumb, SectionHeading, NumberedRow } from '@/components/ui/Atoms'
import FinwiseIcon from '@/Assest/finwise.png'
import ProgressImage from '@/Assest/Vector 3.png'
import ProgressImage2 from '@/Assest/Vector4.png'
import Button from '@/components/ui/Button'
import individualsHero from '@/Assest/INDIVIDUAL_SCREEN_Hero.png'

const journey = [
  { title: 'Understand Your Behavior', description: 'See how spending, saving, planning, and everyday financial choices influence your financial habits and overall BFI profile.' },
  { title: 'Receive Personalized Insights', description: 'Get relevant recommendations, alerts, and supportive nudges based on your financial behavior and goals.' },
  { title: 'Make Better Decisions', description: 'Use those insights to strengthen financial habits, improve consistency, and make choices that better support your future.' },
]

const goals = [
  { icon: <img src={FinwiseIcon} alt="Personal goals" className="h-15 w-15 object-contain" />, title: 'Personal Goals', description: 'Save toward meaningful milestones such as education, travel, major purchases, career plans, or other personal priorities.' },
  { icon: <img src={FinwiseIcon} alt="Emergency savings" className="h-15 w-15 object-contain" />, title: 'Emergency Savings', description: 'Build a dedicated financial safety net that helps prepare you for unexpected expenses and changing circumstances.' },
  { icon: <img src={FinwiseIcon} alt="BFI-powered guidance" className="h-15 w-15 object-contain" />, title: 'BFI-Powered Guidance', description: 'Your savings behavior contributes to your financial intelligence profile, while supportive reminders help you get back on track when contributions are missed.' },
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

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Your Financial Journey</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Financial Growth Starts With Understanding Yourself
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Finwise uses Behavioral Financial Intelligence to understand your financial habits and turn everyday behavior into personalized insights that help you make more confident financial decisions.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {journey.map((j, i) => (
              <div
                key={j.title}
                className="flex items-center gap-5 rounded-[26px] border border-white/10 bg-[#18283a]/90 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold-500/40 bg-[#0d1722] text-xl font-bold text-gold-500">
                  {i + 1}
                </div>

                <div className="flex flex-1 items-center justify-between gap-5">
                  <h3 className="font-display text-[1.1rem] font-bold leading-tight text-white md:text-[1.8rem]">
                    {j.title.split(' ').map((word, idx) => (
                      idx === 0 || idx === j.title.split(' ').length - 1 ? <span key={idx} className="block">{word}</span> : null
                    ))}
                  </h3>

                  <p className="max-w-2xl text-left text-base leading-relaxed text-mist-300">
                    {j.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Save With Purpose</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Turn Your Goals Into Consistent Progress
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Create personal and emergency savings goals with clear targets, timelines, and contributions that help you stay focused on what matters.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {goals.map((g) => (
              <div
                key={g.title}
                data-aos="fade-up"
                className="rounded-[24px] border border-white/10 bg-[#101d2e]/90 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center ">
                  <div className="">
                    {g.icon}
                  </div>
                </div>

                <h3 className="mt-7 text-center font-display text-[1.3rem] font-semibold leading-tight text-white">
                  {g.title}
                </h3>

                <p className="mt-4 text-center text-base leading-relaxed text-mist-300">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Responsible Credit Access</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Opportunities Built Around Better Financial Habits
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Finwise helps eligible users discover credit products from verified partner institutions. Eligibility is informed by your savings behavior and BFI profile — not simply a traditional credit score.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="flex min-h-[360px] items-center justify-center rounded-[24px] border border-white/10 bg-[#0d1d2d]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className="flex h-[220px] w-[420px] items-center justify-center rounded-[20px] border border-white/10 bg-[#101d2e]/70">
                <Landmark className="h-16 w-16 text-gold-500/70" strokeWidth={1.2} />
              </div>
            </div>

            <div className="space-y-0">
              {credit.map((c, index) => (
                <div key={c.title} className={index !== credit.length - 1 ? 'border-b border-white/10 pb-5' : ''}>
                  <div className="flex items-start gap-4 py-5">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center text-gold-500">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-display text-[1.1rem] font-bold leading-tight text-white md:text-[1.8rem]">
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
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Real Progress</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Build Habits You Can See
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Your progress becomes clearer as your financial behavior improves over time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-[#101d2e]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="h-50 overflow-hidden rounded-[18px] border border-white/5 bg-[#0c1825]">
                <img src={ProgressImage} alt="BFI improvement" className="h-full w-full object-cover" />
              </div>

              <div className="mt-6">
                <h3 className="font-display text-[1.1rem] font-semibold text-white md:text-[1.6rem]">BFI Improvement</h3>
                <p className="mt-3 text-[1.2rem] font-bold text-gold-500">612 → 704</p>
                <p className="mt-3 text-base leading-relaxed text-mist-300">
                  Better planning, spending awareness, and saving consistency can contribute to a stronger BFI profile.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#101d2e]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="h-50 overflow-hidden rounded-[18px] border border-white/5 bg-[#0c1825]">
                <img src={ProgressImage2} alt="Savings progress" className="h-full w-full object-cover" />
              </div>

              <div className="mt-6">
                <h3 className="font-display text-[1.1rem] font-semibold text-white md:text-[1.6rem]">Savings Progress</h3>
                <p className="mt-3 text-[1.2rem] font-bold text-gold-500">₦420K → ₦800K</p>
                <p className="mt-3 text-base leading-relaxed text-mist-300">
                  Consistent contributions help move meaningful goals closer to completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}
