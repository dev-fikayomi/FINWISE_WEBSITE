import {
  Brain,
  Activity,
  UserCog,
  RefreshCcw,
  ClipboardCheck,
  Signal,
  Cpu,
  Gauge,
  Sparkles,
  Landmark,
  PiggyBank,
  ListChecks,
  CreditCard,
  Users,
  ShieldCheck,
  GraduationCap,
  Lightbulb,
  Target,
} from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import bfiHeroImage from '@/Assest/BFI_Hero.png'
import bfiSubHeroImage from '@/Assest/BFI_Sub_Hero.png'
import BFi_Sub_Hero from '@/Assest/BFI_Sub.png'
import Seventy from '@/Assest/icon.png'
import Personalized from '@/Assest/icon (1).png'
import Smart from '@/Assest/icon (2).png'
import { SectionHeading, IconTile, NumberedRow } from '@/components/ui/Atoms'

const pillars = [
  { icon: <Cpu className="h-5 w-5" />, title: 'AI Powered', description: 'BFI uses intelligent algorithms to analyze your financial behaviors and deliver meaningful insights that help you make smarter money decisions.' },
  { icon: <Activity className="h-5 w-5" />, title: 'Behavior Driven', description: 'Every spending, saving, and planning decision contributes to understanding your financial behaviors and improving your financial intelligence over time.' },
  { icon: <UserCog className="h-5 w-5" />, title: 'Personalized', description: 'Your financial journey is unique. BFI provides tailored recommendations based on your goals, habits, and financial activities.' },
  { icon: <RefreshCcw className="h-5 w-5" />, title: 'Always Learning', description: 'BFI continuously evolves with you, adapting its insights and recommendations as your financial habits and life circumstances change.' },
]

const dimensions = [
  { title: 'Impulse Control', description: 'It helps identify whether your financial decisions are intentional or driven by short-term wants. It looks at how consistently you pause, consider your priorities, and avoid unnecessary spending.' },
  { title: 'Planning', description: 'Evaluates how effectively you prepare for future financial goals and commitments. It reflects how well you set priorities.' },
  { title: 'Saving Consistency', description: 'Tracks how regularly you contribute towards your goals, rewarding steady habits over occasional large deposits.' },
  { title: 'Spending Awareness', description: 'Measures how closely your everyday spending aligns with your stated goals and priorities.' },
  { title: 'Repayment Discipline', description: 'Reflects how reliably you meet financial commitments and obligations over time.' },
]

const howItWorks = [
  { icon: <ClipboardCheck className="h-5 w-5" />, title: 'Assessment', description: 'Start by completing a simple financial baseline assessment that helps understand your goals, habits, and relationship with money.' },
  { icon: <Signal className="h-5 w-5" />, title: 'Financial Signals', description: 'BFI securely observes key financial behaviors such as spending consistency, savings, and repayment activities to build a clearer picture of your financial habits.' },
  { icon: <Brain className="h-5 w-5" />, title: 'AI Analysis', description: 'Our proprietary intelligence engine analyzes your financial behaviors across multiple dimensions to identify trends, strengths, and opportunities for improvement.' },
  { icon: <Gauge className="h-5 w-5" />, title: 'BFI Score', description: 'Receive a personalized Behavioral Financial Intelligence score ranging from 300 to 850, designed to reflect your overall financial health and habits.' },
  { icon: <Sparkles className="h-5 w-5" />, title: 'Recommendations', description: 'Get tailored insights, smart nudges, and personalized recommendations that empower you to make better financial decisions and achieve your goals faster.' },
]

const powers = [
  { icon: <ClipboardCheck className="h-5 w-5" />, title: 'Baseline Assessment', description: 'Complete a simple financial assessment to help BFI understand your goals, habits, and financial behaviors from day one.' },
  { icon: <Landmark className="h-5 w-5" />, title: 'Bank Transaction Patterns', description: 'Securely analyze your spending and saving patterns to uncover meaningful insights about your financial habits.' },
  { icon: <PiggyBank className="h-5 w-5" />, title: 'Savings Consistency', description: 'Track how regularly you save towards your financial goals and build healthy money habits over time.' },
  { icon: <ListChecks className="h-5 w-5" />, title: 'Task Completion', description: 'Measure your financial discipline through completed tasks, milestones, and goal-oriented activities within the platform.' },
  { icon: <CreditCard className="h-5 w-5" />, title: 'Credit Repayment History', description: 'Evaluate your repayment behavior to promote responsible credit usage and improve your financial profile.' },
]

const experience = [
  { icon: <Users className="h-5 w-5" />, title: 'Family Permissions', description: 'Intelligent permissions help parents manage allowances, tasks, and financial experiences for their children.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Legacy Planning', description: 'Build a long-term financial foundation with recommendations that support your familys future aspirations.' },
  { icon: <GraduationCap className="h-5 w-5" />, title: 'Financial Learning', description: 'Access learning experiences tailored to your financial intelligence level and goals.' },
  { icon: <Lightbulb className="h-5 w-5" />, title: 'Smart Recommendations', description: 'Get proactive nudges and actionable insights that help improve your financial decisions over time.' },
  { icon: <Target className="h-5 w-5" />, title: 'Savings Guidance', description: 'Receive personalized savings recommendations based on your financial habits, goals, and progress.' },
  { icon: <CreditCard className="h-5 w-5" />, title: 'Credit Eligibility', description: 'Unlock financial opportunities that align with your behaviour and repayment history.' },
]

export default function BFIEngine() {
  return (
    <div>
      <div
        className="relative overflow-hidden border-b border-white/5"
        style={{
          backgroundImage: ` url(${bfiHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       
        <div className="relative">
          <PageHero
            crumb="BFI"
            title="Build Better Financial Habits, One Decision at a Time."
            description="BFI helps you understand your financial behaviors and provides personalized recommendations that help you make smarter money decisions."
          
          />
        </div>
      </div>

      <section className="relative overflow-hidden border-t border-white/5 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bfiSubHeroImage})` }}
        />
        <div className="absolute inset-0 bg-[#071521]/20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="min-h-[420px]" />
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Five Dimensions"
            title="The Five Dimensions of Financial Intelligence"
            description="Your BFI score is built around five core financial behaviors that shape how you spend, save, plan, and make decisions for your future."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {dimensions.map((d, i) => (
              <NumberedRow key={d.title} number={String(i + 1).padStart(2, '0')} title={d.title} description={d.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url(${BFi_Sub_Hero})`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,22,31,0.30),_rgba(7,18,28,0.80)_58%,_rgba(7,18,28,0.92))]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="How BFI Works"
            title="The Intelligence Layer Behind Every Decision on Finwise."
            description="From your financial habits to personalized recommendations, BFI works quietly in the background to help you make smarter financial decisions every day."
          />

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="rounded-full border border-gold-500/40 bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-[0_0_25px_rgba(227,175,73,0.25)] transition hover:brightness-110"
            >
              Get Baseline Assessment
            </button>
          </div>

          <div className="mt-14 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-5">
            {howItWorks.map((h, index) => (
              <div
                key={h.title}
                data-aos="fade-up"
                className="group min-h-[240px] rounded-[26px] border border-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                style={{
                  backgroundColor: [
                    'rgba(20, 38, 52, 0.82)',
                    'rgba(25, 47, 44, 0.82)',
                    'rgba(27, 59, 57, 0.82)',
                    'rgba(24, 46, 53, 0.82)',
                    'rgba(38, 62, 80, 0.82)',
                  ][index % 5],
                }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold-500">
                  {h.icon}
                </div>
                <h3 className="font-display text-[1.1rem] font-semibold leading-tight text-white">
                  {h.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-300">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">BFI Score</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              What Powers Your BFI Score?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Your Behavioral Financial Intelligence score is built from meaningful financial behaviors that reflect how you plan, save, spend, and manage your financial responsibilities over time.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {powers.map((p, index) => (
              <div
                key={p.title}
                className={[
                  'rounded-[26px] border p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-200 hover:-translate-y-1',
                  index === 1 ? 'border-blue-500/20 bg-[#0d2340]' : 'border-white/5 bg-[#101d2e]/90',
                ].join(' ')}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/40 bg-[#091825] text-gold-500">
                  {p.icon}
                </div>

                <h3 className="font-display text-[1.7rem] font-semibold leading-tight tracking-[-0.03em] text-white">
                  {p.title}
                </h3>

                <p className="mt-3 max-w-[28ch] text-[0.98rem] leading-relaxed text-mist-300">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Benefits from BFI</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              What You'll Receive From BFI
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              Your financial behaviors are transformed into meaningful scores, personalized insights, and actionable recommendations that help you make smarter financial decisions every day.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div
              data-aos="fade-up"
              className="flex min-h-[440px] flex-col rounded-[28px] border border-white/10 bg-[#0b1b2b]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="mt-3 flex h-20 w-20 items-start justify-start">
                <img src={Seventy} alt="BFI score" className="h-full w-full object-contain" />
              </div>

              <h3 className="mt-7 text-left font-display text-[1.05rem] font-semibold leading-tight text-white md:text-[1.4rem]">
                Your BFI Score (300&ndash;850)
              </h3>

              <p className="mt-4 text-left text-base leading-relaxed text-mist-300">
                Receive a Behavioral Financial Intelligence score that reflects your financial habits, helping you understand where you stand and how you can improve over time.
              </p>

              <div className="mt-auto pt-6">
                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-[#1b2d3b]">
                  <div
                    className="h-full rounded-full bg-[#E3AF49] transition-[width] duration-1000 ease-out"
                    style={{ width: `${(750 / 850) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-left text-sm text-mist-400">750 / 850</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="80"
              className="flex min-h-[440px] flex-col rounded-[28px] border border-white/10 bg-[#0b1b2b]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
               <div className="mt-3 flex h-20 w-20 items-start justify-start">
                <img src={Personalized} alt="Personalized insights" className="h-full w-full object-contain" />
              </div>

              <h3 className="mt-7 text-left font-display text-[1.05rem] font-semibold leading-tight text-white md:text-[1.4rem]">
                Personalized Financial Insights
              </h3>

              <p className="mt-4 text-left text-base leading-relaxed text-mist-300">
                Get easy-to-understand insights based on your financial behaviours. These examples are anonymized and are for illustration purposes only.
              </p>

              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-gold-500/20 bg-[#1b1a12] p-4 text-sm leading-relaxed text-gold-400">
                  Your spending habits suggest you're on track to achieve your emergency fund target.
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="160"
              className="flex min-h-[440px] flex-col rounded-[28px] border border-white/10 bg-[#0b1b2b]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="mt-3 flex h-20 w-20 items-start justify-start">
                <img src={Smart} alt="Smart recommendations" className="h-full w-full object-contain" />
              </div>

              <h3 className="mt-7 text-left font-display text-[1.05rem] font-semibold leading-tight text-white md:text-[1.4rem]">
                Smart Recommendations &amp; Nudges
              </h3>

              <p className="mt-4 text-left text-base leading-relaxed text-mist-300">
                Receive timely suggestions that encourage healthier financial habits and help you stay aligned with your goals.
              </p>

              <div className="mt-auto pt-6">
                <div className="rounded-xl border border-[#3de3ad]/20 bg-[#0f2c2a] p-4 text-sm leading-relaxed text-[#75f0c8]">
                  You've maintained good repayment habits. You may be eligible for additional financial opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071521] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Intelligence</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              The Intelligence Behind Your Finwise Experience
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-mist-300 md:text-lg">
              BFI doesn&apos;t work in isolation. It powers the recommendations, permissions, and financial experiences you receive across the entire Finwise platform.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {experience.map((e, i) => (
              <div key={e.title} className="border-b border-white/10 pb-5">
                <div className="flex items-start gap-4">
                  <div className="flex min-w-[42px] items-center justify-center pt-1 text-sm font-semibold text-gold-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-[1.8rem] font-bold leading-tight tracking-[-0.04em] text-white">
                      {e.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-mist-300">
                      {e.description}
                    </p>
                    <div className="mt-5 h-px w-full bg-gradient-to-r from-gold-500/80 via-gold-500/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
