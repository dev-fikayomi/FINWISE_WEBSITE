import { Compass, Target, Ear, Sparkles, Globe2, ShieldCheck } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, Card } from '@/components/ui/Atoms'
import PersonAvatar from '@/components/ui/PersonAvatar'
import AboutHero from '@/Assest/About_hero.png'
import Button from '@/components/ui/Button'

const beliefs = [
  { icon: <Ear className="h-5 w-5" />, title: 'Understand Your Behaviour', description: 'Better financial decisions start with understanding the habits and behaviours behind them.' },
  { icon: <Sparkles className="h-5 w-5" />, title: 'Build Better Habits', description: 'Small, consistent actions around saving, planning, learning, and responsibility can create meaningful long-term change.' },
  { icon: <Globe2 className="h-5 w-5" />, title: 'Think Beyond Yourself', description: 'Financial wellbeing can extend across families, helping parents guide children and prepare future generations.' },
]

const approach = [
  { title: 'Behaviour First', description: 'Financial products become more useful when they\u2019re informed by how people actually behave.' },
  { title: 'Partner Powered', description: 'Finwise works through trusted financial institutions and partners for financial services it does not provide directly.' },
  { title: 'Family Connected', description: 'Parents and children can build financial capability together while maintaining appropriate controls and protections.' },
  { title: 'Designed for the Long Term', description: 'From a first savings goal to family planning and legacy allocation, Finwise is designed around financial progress over time.' },
]

const team = [
  { name: 'Amara Okafor', role: 'Co-Founder & CEO', bio: 'Amara leads Finwise with a focus on making financial planning more accessible and practical for individuals and families. He brings together product vision, technology, and financial inclusion to drive the company\u2019s mission.', seed: 'amara-team' },
  { name: 'Daniel Adeyemi', role: 'Chief Product Officer', bio: 'Daniel leads the development of Finwise\u2019s user experiences and financial products, ensuring they are simple, useful, and built around real-life needs. Her work focuses on turning complex financial concepts into tools people can confidently use.', seed: 'daniel-team' },
  { name: 'Daniela Cruz', role: 'Chief Trust Officer', bio: 'Daniela leads the trust and security posture of Finwise, ensuring data and financial connections meet the highest standards while turning complex compliance concepts into tools people can confidently rely on.', seed: 'daniela-team' },
]

export default function About() {
  return (
    <div>
       <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${AboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        <div className="relative">
      <PageHero
        crumb="About"
        title="Building lifelong financial capability for every generation."
        description="Finwise helps individuals and families understand their financial behaviour, build better habits, plan with purpose, and create stronger financial futures for themselves and the generations that follow."
        // media={<OrbitVisual icon={<ShieldCheck className="h-10 w-10" />} tone="teal" size="lg" badges={[<Target className="h-4 w-4" />, <Compass className="h-4 w-4" />]} />}
      />
      </div>
      </div>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-right" className="flex aspect-square items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-gold-500/10 via-ink-800 to-teal-500/10">
            <Compass className="h-20 w-20 text-gold-500/70" strokeWidth={1} />
          </div>
          <div>
            <p data-aos="fade-up" className="text-sm font-semibold text-gold-500">Our Mission</p>
            <h2 data-aos="fade-up" data-aos-delay="60" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Helping people build better relationships with money.
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="mt-5 text-sm leading-relaxed text-mist-400">
              Finwise exists to make financial literacy practical, personal, and continuous.
              We combine behavioural intelligence, savings tools, family financial
              management, education, and access to trusted financial services to help
              people make better decisions throughout different stages of life.
            </p>
            <p data-aos="fade-up" data-aos-delay="180" className="mt-4 text-sm leading-relaxed text-mist-400">
              The goal isn\u2019t simply to help people complete transactions. It\u2019s to help
              people build lasting financial capability.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Believe"
            title="Financial wellbeing goes beyond money in an account."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {beliefs.map((b) => (
              <Card key={b.title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">{b.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{b.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p data-aos="fade-up" className="text-sm font-semibold text-gold-500">Why Finwise</p>
            <h2 data-aos="fade-up" data-aos-delay="60" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Finance shouldn\u2019t only tell you what you have. It should help you understand what to do next.
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="mt-5 text-sm leading-relaxed text-mist-400">
              Traditional financial tools often focus on balances, transactions, and
              individual products. Finwise is built around a different idea: your
              financial behaviour, goals, family responsibilities, and future plans
              should work together.
            </p>
            <p data-aos="fade-up" data-aos-delay="160" className="mt-4 text-sm leading-relaxed text-mist-400">
              That\u2019s why BFI sits at the centre of Finwise \u2014 connecting insights across
              savings, family tools, responsible credit access, financial education, and
              long-term planning.
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="mt-6">
              <Button to="/bfi" variant="primary">Discover the BFI Engine</Button>
            </div>
          </div>
          <div data-aos="fade-left" className="flex aspect-square items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-ink-900">
            <Globe2 className="h-20 w-20 text-teal-400/70" strokeWidth={1} />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Our Approach" title="One financial journey. Many stages of life." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {approach.map((a) => (
              <Card key={a.title}>
                <h3 className="font-display text-base font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{a.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Our People"
          title="Built by people who believe financial capability can change lives."
          description="Finwise brings together experience across technology, financial services, behavioural intelligence, and product design to build tools that support people and families for the long term."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6 text-center">
              <PersonAvatar seed={m.seed} size={88} className="mx-auto" />
              <h3 className="mt-4 font-display text-base font-semibold text-white">{m.name}</h3>
              <p className="text-xs text-gold-500">{m.role}</p>
              <p className="mt-3 text-xs leading-relaxed text-mist-400">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8">
          <div data-aos="fade-up" className="rounded-3xl border border-white/5 bg-ink-800/60 p-8">
            <p className="text-sm font-semibold text-gold-500">Careers</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">Help build a better financial future for families.</h3>
            <p className="mt-3 text-sm text-mist-400">
              We\u2019re building technology that can change how people understand money,
              habits, and plan for what comes next.
            </p>
            <Button to="/contact" variant="secondary" className="mt-6">See Open Roles</Button>
          </div>
          <div data-aos="fade-up" data-aos-delay="80" className="rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 to-ink-800 p-8">
            <p className="text-sm font-semibold text-gold-500">Get Started</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">Financial intelligence for every stage of life.</h3>
            <p className="mt-3 text-sm text-mist-400">
              From personal financial growth to family responsibility and long-term
              planning, Finwise is designed to help make more intentional financial
              decisions.
            </p>
            <Button to="/contact" variant="primary" className="mt-6">Get Started</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
