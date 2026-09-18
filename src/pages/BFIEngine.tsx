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

      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8">
        <SectionHeading
          eyebrow="How BFI Works"
          title="The Intelligence Layer Behind Every Decision on Finwise."
          description="From your financial habits to personalized recommendations, BFI works quietly in the background to help you make smarter financial decisions every day."
        />
        <div className="mt-14 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map((h) => (
            <IconTile key={h.title} {...h} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="BFI Score"
            title="What Powers Your BFI Score?"
            description="Your Behavioral Financial Intelligence score is built from meaningful financial behaviors that reflect how you plan, save, spend, and manage your financial responsibilities over time."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {powers.map((p) => (
              <IconTile key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Benefits from BFI"
          title="What You'll Receive From BFI"
          description="Your financial behaviors are transformed into meaningful recommendations, personalized insights, and actionable recommendations that help you make smarter financial decisions every day."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-7">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-teal-400/70 font-display text-lg font-bold text-teal-400">
              75%
            </div>
            <h3 className="mt-5 text-center font-display text-base font-semibold text-white">Your BFI Score (300&ndash;850)</h3>
            <p className="mt-2 text-center text-sm text-mist-400">Receive a Behavioral Financial Intelligence score that reflects your financial habits and how you can improve over time.</p>
            <div className="mt-5 h-2 w-full rounded-full bg-ink-600">
              <div className="h-2 w-4/5 rounded-full bg-teal-400" />
            </div>
            <p className="mt-2 text-center text-xs text-mist-500">750 / 850</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="80" className="rounded-2xl border border-white/5 bg-ink-800/60 p-7">
            <Lightbulb className="mx-auto h-9 w-9 text-gold-500" />
            <h3 className="mt-5 text-center font-display text-base font-semibold text-white">Personalized Financial Insights</h3>
            <p className="mt-2 text-center text-sm text-mist-400">Get easy-to-understand insights based on your financial behaviours. These examples are anonymized and are for illustration purposes only.</p>
            <div className="mt-5 rounded-xl border border-gold-500/20 bg-gold-500/5 p-3 text-xs text-gold-400">
              Your spending habits suggest you're on track to achieve your emergency fund target.
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="160" className="rounded-2xl border border-white/5 bg-ink-800/60 p-7">
            <Sparkles className="mx-auto h-9 w-9 text-teal-400" />
            <h3 className="mt-5 text-center font-display text-base font-semibold text-white">Smart Recommendations & Nudges</h3>
            <p className="mt-2 text-center text-sm text-mist-400">Receive timely suggestions that encourage healthier financial habits and help you stay aligned with your goals.</p>
            <div className="mt-5 rounded-xl border border-teal-400/20 bg-teal-400/5 p-3 text-xs text-teal-300">
              You've maintained good repayment habits. You're eligible for additional opportunities.
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Intelligence"
            title="The Intelligence Behind Your Finwise Experience"
            description="BFI doesn't work in isolation. It powers the recommendations, permissions, and financial experiences you receive across the entire Finwise platform."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experience.map((e) => (
              <IconTile key={e.title} {...e} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
