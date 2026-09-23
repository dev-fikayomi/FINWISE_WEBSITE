import {
  Wallet,
  PiggyBank,
  Rocket,
  Target,
  Sparkles,
  LineChart,
  BadgeCheck,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import homeHero from '@/Assest/new_Home.png'
import homeScreenMock from '@/Assest/Home_Screen_Mock.png'
import homePic from '@/Assest/Home_Pic.png'
import familyAccount from '@/Assest/Family_Account_Icon.png'
import TaskReward from '@/Assest/Task&Reward.png'
import ChildAccount from '@/Assest/Child_Account_Profile_Icon.png'
import familyBackground from '@/Assest/Frame 1272629187.png'
import { SectionHeading, StatItem, IconTile } from '@/components/ui/Atoms'
import PersonAvatar from '@/components/ui/PersonAvatar'
import ComplianceBadges from '@/components/ui/ComplianceBadges'
import { testimonials } from '@/data/testimonials'

const journeySteps = [
  {
    number: '01',
    title: 'Spend',
    description:
      'Take control of everyday money. Transfer money, pay bills, and manage your wallet, cards, and everyday expenses with ease.',
  },
  {
    number: '02',
    title: 'Save',
    description:
      'Turn intentions into consistent habits. Set meaningful savings goals, track your progress, and build healthier financial habits over time.',
  },
  {
    number: '03',
    title: 'Grow',
    description:
      'Make your money work towards your future. Invest, build wealth, and stay focused on the financial goals that matter most to you.',
  },
  {
    number: '04',
    title: 'Family',
    description:
      'Connect with your spouse, manage your children\u2019s tasks and allowances, set limits, support their goals and help them develop better money habits.',
  },
]

const familyFeatures = [
  { icon: <img src={familyAccount} alt="Family Accounts" className="h-6 w-6 rounded-md object-cover" />, title: 'Family Accounts', description: 'Stay connected to your children’s activities, goals and financial progress while keeping everyone’s account independent.' },
  { icon: <img src={ChildAccount} alt="Child Financial Profiles" className="h-6 w-6 rounded-md object-cover" />, title: 'Child Financial Profiles', description: 'Create personalized financial experiences for each child based on their needs and learning stage.' },
  { icon: <img src={TaskReward} alt="Tasks & Rewards" className="h-6 w-6 rounded-md object-cover" />, title: 'Tasks & Rewards', description: 'Turn everyday responsibilities into rewarding financial lessons that encourage positive behaviour by creating tasks, set rewards.' },
  { icon: <img src={familyAccount} alt="Shared Family Goals" className="h-6 w-6 rounded-md object-cover" />, title: 'Shared Family Goals', description: 'Set and achieve meaningful financial goals together, from family experiences to education and future savings.' },
  { icon: <img src={familyAccount} alt="Legacy Planning" className="h-6 w-6 rounded-md object-cover" />, title: 'Legacy Planning', description: 'Encourage long-term saving, responsible money habits and a mindset that prepares your family for the future.' },
  { icon: <img src={familyAccount} alt="Spouse Linking" className="h-6 w-6 rounded-md object-cover" />, title: 'Spouse Linking', description: 'Connect securely and choose exactly what they can view or manage across all family finances.' },
  { icon: <img src={familyAccount} alt="Virtual Cards" className="h-6 w-6 rounded-md object-cover" />, title: 'Virtual Cards', description: 'Create virtual cards instantly for online purchases, set individual spending limits, lock cards to specific merchants and stay in control of every transaction.' },
  { icon: <img src={familyAccount} alt="FinWise Tag" className="h-6 w-6 rounded-md object-cover" />, title: 'FinWise Tag', description: 'Create your unique FinWise Tag and make instant, fee-free transfers to other FinWise users — simple, memorable and built for everyday payments.' },
  { icon: <img src={familyAccount} alt="Bank Transfers" className="h-6 w-6 rounded-md object-cover" />, title: 'Bank Transfers', description: 'Transfer directly from your FinWise Wallet to any Nigerian bank account, save frequent recipients as beneficiaries and know the cost and status before you confirm.' },
]

const individualFeatures = [
  { icon: <Sparkles className="h-5 w-5" />, title: 'Personalized Financial Plans', description: 'Receive tailored financial plans designed around your lifestyle, goals, and financial priorities.' },
  { icon: <Target className="h-5 w-5" />, title: 'Smart Savings Goals', description: 'Create and track savings goals for life\u2019s important milestones with ease and confidence.' },
  { icon: <LineChart className="h-5 w-5" />, title: 'Financial Behaviour Insights', description: 'Receive personalized insights that highlight patterns, strengths, and areas to improve.' },
  { icon: <BadgeCheck className="h-5 w-5" />, title: 'Credit Opportunities', description: 'Access responsible credit options that align with your financial profile and needs.' },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-white/5 bg-ink-950"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(5, 10, 14, 0.88) 0%, rgba(5, 10, 14, 0.72) 38%, rgba(5, 10, 14, 0.38) 100%), url(${homeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 85% 5%, rgba(63,227,196,0.14), transparent), radial-gradient(35% 35% at 5% 90%, rgba(238,171,60,0.10), transparent)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1
              data-aos="fade-up"
              className="font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
            >
              Build better money habits. A smarter financial life for{' '}
              <span className="text-gold-500">everyone.</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-6 max-w-lg text-base leading-relaxed text-mist-200"
            >
              Finwise helps individuals and families create intentional financial plans,
              develop healthier money habits, and achieve lifelong financial goals &mdash;
              all powered by Behavioral Financial Intelligence (BFI).
            </p>
            <div data-aos="fade-up" data-aos-delay="180" className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">Get Started</Button>
              <Button to="/bfi" variant="secondary">See how BFI works</Button>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="120" className="hidden lg:block" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 border-t border-white/5 px-5 py-10 sm:px-8 md:grid-cols-4">
          <StatItem value="1K+" label="Families building better habits" />
          <StatItem value="1K+" label="Money managed through FinWise" />
          <StatItem value="1K+" label="Financial goals created" />
          <StatItem value="#2M+" label="Child profiles managed" />
        </div>
      </section>

      {/* JOURNEY STEPS */}
      <section className="w-full py-20" style={{ backgroundColor: 'rgba(29, 42, 61, 0.47)' }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-6">
            <SectionHeading
              align="left"
              title="Everything you need to build a smarter financial life."
            />
            <img
              src={homeScreenMock}
              alt="Finwise app screen mockup"
              className="w-full rounded-[28px] border border-white/10 bg-ink-900/60 object-cover shadow-2xl shadow-black/20"
            />
          </div>
          <div className="flex flex-col divide-y divide-white/5">
            {journeySteps.map((step) => (
              <div key={step.number} data-aos="fade-up" className="flex gap-5 py-5">
                <span className="font-display text-sm font-bold text-gold-500">{step.number}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section
        className="relative overflow-hidden border-t border-white/5 py-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 15, 18, 0.72), rgba(10, 15, 18, 0.86)), url(${familyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(rgba(29, 42, 61, 0.47)),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Parents & Families"
            title="Raise Financially Intelligent Families."
            description="Help your children build healthy money habits while creating intentional financial goals for your entire family."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {familyFeatures.map((f) => (
              <IconTile key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">
            Individual Users
          </p>
          <h2 data-aos="fade-up" data-aos-delay="60" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Your Financial Journey Starts With You.
          </h2>
          <p data-aos="fade-up" data-aos-delay="120" className="mt-4 text-base leading-relaxed text-mist-400">
            Whether you're saving for your first milestone or planning for long-term
            success, Finwise helps you make smarter financial decisions every day.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="space-y-6">
            {individualFeatures.map((f, i) => (
              <div
                key={f.title}
                // data-aos="fade-left"
                data-aos-delay={i * 60}
                className="border-b pb-6 last:border-b-0 last:pb-0"
                style={{ borderColor: 'rgba(227, 175, 73, 1)' }}
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-2xl font-bold leading-none text-gold-500 sm:text-3xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-[2.1rem]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-mist-400 sm:text-lg">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-left" className="relative flex justify-center lg:justify-end">
            <img
              src={homePic}
              alt="Finwise savings and BFI score preview"
              className="w-full max-w-sm rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/20"
            />
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Compliance & Security"
            title="Your Financial Data. Your Control."
            description="Finwise is built around secure financial connections, transparent data sharing, and controls that keep you in charge of your information."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { title: 'Protected financial connections', description: 'Bank connections and financial information are handled through secure open banking infrastructure and controlled access mechanisms.' },
              { title: 'You decide what gets shared', description: 'Data sharing is granular, time-bound, and revocable, giving you control over what information is shared with whom.' },
              { title: 'Built with regulatory awareness', description: 'Finwise is designed around applicable financial, privacy, and open banking requirements, including NDPR and CBN Open Banking Guidelines.' },
            ].map((c) => (
              <div key={c.title} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <h3 className="font-display text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{c.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ComplianceBadges />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Building Better Financial Futures Together."
          description="Hear how individuals and families are building healthier relationships with money through Finwise."
        />

        <div className="mt-12 overflow-x-auto pb-3">
          <div className="flex min-w-max gap-5 md:gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                // data-aos="fade-up"
                className="w-[40vw] max-w-[300px] shrink-0 rounded-[10px] border border-white/10 bg-[#0b1c2a] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6"
              >
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-ink-800/80 p-2">
                  <PersonAvatar
                    seed={t.avatarSeed}
                    size={150}
                    className="h-[150px] w-[150px] rounded-[18px] object-cover"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="font-display text-[1.6rem] font-bold leading-none tracking-[-0.04em] text-white">
                      {t.name}
                    </h3>
                    <p className="mt-2 text-sm text-mist-300">{t.role}</p>
                  </div>

                </div>

                <p className="mt-5 text-base leading-relaxed text-mist-200 sm:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-gradient-to-b from-ink-900 to-ink-950 py-24 text-center">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 data-aos="fade-up" className="font-display text-3xl font-bold text-white sm:text-4xl">
            Your Financial Future Starts Today.
          </h2>
          <p data-aos="fade-up" data-aos-delay="80" className="mt-4 text-base text-mist-400">
            Join Finwise and take the first step toward building smarter financial habits,
            achieving meaningful goals, and creating a lasting legacy.
          </p>
          <div data-aos="fade-up" data-aos-delay="150" className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="primary">Get Started</Button>
            <Button to="/contact" variant="secondary">Talk to Our Team</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
