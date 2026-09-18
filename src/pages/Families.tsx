import { Users, Baby, ListChecks, Target, ShieldCheck, GraduationCap, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, IconTile } from '@/components/ui/Atoms'
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
  { title: 'Family & Child Account', to: '/family-child-account', description: 'Create and manage financial profiles for every child in the family.' },
  { title: 'Allowance & Task System', to: '/allowance-tasks', description: 'Assign tasks, set allowances, and reward responsibility.' },
  { title: 'Savings & Goal', to: '/savings-goal', description: 'Set shared family goals with clear targets and timelines.' },
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Built For Families"
          title="Everything Your Family Needs, In One Place."
          description="From your youngest child's first savings goal to long-term family legacy planning, Finwise grows with every stage of your family's journey."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <IconTile key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Explore Further" title="Dive Deeper Into Family Tools" />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {relatedProducts.map((p) => (
              <Link
                key={p.title}
                to={p.to}
                data-aos="fade-up"
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-ink-800/60 p-6 transition-colors hover:border-gold-500/30"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-mist-400">{p.description}</p>
                </div>
                <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-gold-500">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
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
