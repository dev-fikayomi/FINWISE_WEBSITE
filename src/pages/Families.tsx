import { Users, Baby, ListChecks, Target, ShieldCheck, GraduationCap, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, IconTile } from '@/components/ui/Atoms'
import BatteryFull from '@/Assest/full.png'
import keyIcon from '@/Assest/key.png'
import LockIcon from '@/Assest/lock.png'
import Button from '@/components/ui/Button'
import familiesHero from '@/Assest/FAMILIES_Hero.png'

const pillars = [
  { icon: <Users className="h-5 w-5" />, title: 'Family Accounts', description: 'Stay connected to your children\u2019s activities, goals and financial progress while keeping everyone\u2019s account independent.' },
  { icon: <Baby className="h-5 w-5" />, title: 'Child Financial Profiles', description: 'Create personalized financial experiences for each child based on their needs and learning stage.' },
  { icon: <ListChecks className="h-5 w-5" />, title: 'Tasks & Rewards', description: 'Turn everyday responsibilities into rewarding financial lessons that encourage positive behaviour.' },
  { icon: <Target className="h-5 w-5" />, title: 'Shared Family Goals', description: 'Set and achieve meaningful financial goals together, from family experiences to education and future savings.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Legacy Planning', description: 'Encourage long-term saving, responsible money habits and a mindset that prepares your family for the future.' },
  { icon: <GraduationCap className="h-5 w-5" />, title: 'Kids Financial Learning', description: 'Age-appropriate lessons that turn everyday money moments into lasting financial literacy.' },
]

const relatedProducts = [
  { title: 'Fully Managed ', to: '/family-child-account', description: 'Parents maintain complete control over account activity, savings, allowances, and financial decisions..' },
  { title: 'Guided Access', to: '/allowance-tasks', description: 'Children can view progress, savings goals, and selected activities while parents retain approval authority..' },
  { title: 'Independent Ownership', to: '/savings-goal', description: 'Ownership automatically transfers to the child. Parents retain view-only access unless additional permissions are granted by the child..' },
]

const familyJourney = [
  {
    number: '1',
    title: 'Create Your Family Account',
    description: 'Start by setting up your primary parent or guardian account. This becomes the foundation for managing your family\'s financial activities, goals, children and permissions.',
  },
  {
    number: '2',
    title: 'Link your spouse',
    description: 'Connect your spouse\'s verified Finwise account and decide exactly how you want to manage finances together. Grant specific permissions for viewing balances, managing children, approving requests and more.',
  },
  {
    number: '3',
    title: 'Add Child Profiles',
    description: 'Create dedicated financial profiles for each child, whether they\'re young, newborn or still in the way of learning. Tools, allowances and spending limits are based on their needs and stage of life.',
  },
  {
    number: '4',
    title: 'Give Every Child a Unique ID',
    description: 'Each child receives a unique Finwise Child ID, making it easy to identify and manage their financial profile, activities, goals and progress within your family account.',
  },
]

export default function Families() {
  return (
    <div>
      <div
        className="relative overflow-hidden border-b border-white/5"
        style={{
          backgroundImage: `url(${familiesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative">
          <PageHero
            crumb="Parent & Families"
            title="Raise Financially Intelligent Families, Together."
            description="Guide your children's financial journey, share goals with your spouse, and build lasting habits that carry across generations  all from one connected family account."
            // media={<OrbitVisual icon={<Users className="h-10 w-10" />} tone="teal" size="lg" badges={[<Baby className="h-4 w-4" />, <ShieldCheck className="h-4 w-4" />]} />}
            stats={[
              { value: '1K+', label: 'Families connected' },
              { value: '1K+', label: 'Child profiles created' },
              { value: '₦2M+', label: 'Family goals created' },
            ]}
          />
        </div>
      </div>

      <section className="bg-[#0d1b2a] py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">How Family Accounts Work</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              One Family. Connected Financial Journeys.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist-300 md:text-lg">
              A parent or guardian can create and manage financial profiles for every child in the family,
              helping them build healthy money habits from an early age.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {familyJourney.map((step) => (
              <div
                key={step.number}
                data-aos="fade-up"
                className="flex items-center gap-5 rounded-[16px] border border-white/10 bg-[#2a3d52]/80 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#fff]/60 bg-transparent font-display text-2xl font-bold leading-none text-[#E3AF49] shadow-[0_0_0_1px_rgba(227,175,73,0.12)]">
                  {step.number}
                </div>

                <div className="flex min-w-0 flex-1 items-center gap-6">
                  <h3 className="w-[220px] shrink-0 font-display text-[1.03rem]  leading-tight text-white sm:text-[1.3rem]"
                   style={{ fontFamily: 'Mona Sans, sans-serif', 
                    fontWeight: 600, 
                    fontStyle: 'normal',

                   }}>
                    {step.title}
                  </h3>
                  <p
                    className="flex-1 text-[16px] leading-[162%] tracking-[0] text-mist-300"
                    style={{
                      fontFamily: 'Mona Sans, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0d1b2a] py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">AGE-BASED ACCESS & PERMISSIONS</p>
            <h2 className="mt-4 font-display  tracking-[-0.04em] text-white md:text-5xl">
              Financial Independence, Introduced Gradually.
            </h2>
            <p className="text-sm   tracking-[0.18em] ">
              Children gain access and responsibility over time, with permissions designed to match their age and stage of development.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {relatedProducts.map((p, index) => (
              <Link
                key={p.title}
                to={p.to}
                data-aos="fade-up"
                className="group flex min-h-[260px] flex-col justify-between rounded-[22px] border border-white/10 bg-[#23354d]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#E3AF49]/40"
                style={{
                  backgroundImage:
                    index === 0
                      ? 'linear-gradient(180deg, rgba(17, 29, 39, 0.86), rgba(35, 53, 77, 0.9))'
                      : index === 1
                        ? 'linear-gradient(180deg, rgba(17, 29, 39, 0.78), rgba(24, 38, 55, 0.9))'
                        : 'linear-gradient(180deg, rgba(17, 29, 39, 0.78), rgba(29, 43, 59, 0.9))',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E3AF49]/30 bg-[#0c1827] text-[#E3AF49]">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-[1.3rem] font-semibold leading-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mist-300">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-xl px-5 sm:px-8">
          <h2 data-aos="fade-up" className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to build a financially intelligent family?
          </h2>
          <div data-aos="fade-up" data-aos-delay="100" className="mt-6 flex flex-wrap justify-center gap-3">
            <Button to="/contact" variant="primary">Get Started</Button>
            <Button to="/bfi" variant="secondary">See how BFI works</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
