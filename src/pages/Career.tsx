import { Rocket, Users, Lightbulb, Heart, Compass, Layers, Target as TargetIcon, ArrowUpRight, Palette, Code2, Megaphone } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, NumberedRow, Card } from '@/components/ui/Atoms'
import careersHero from '@/Assest/Career_hero.png'
import Button from '@/components/ui/Button'

const why = [
  { title: 'Meaningful Impact', description: 'Build products that help people understand money and create healthier financial habits.' },
  { title: 'Solve Real Problems', description: 'Work on complex challenges across financial intelligence, family finance, education, and technology.' },
  { title: 'Build for the Long Term', description: 'Help shape a platform designed to support people through different stages of life.' },
]

const howWeWork = [
  { icon: <Users className="h-4 w-4" />, title: 'People First', description: 'We design and build with real people and their needs at the centre.' },
  { icon: <Lightbulb className="h-4 w-4" />, title: 'Stay Curious', description: 'We ask questions, learn continuously, and challenge assumptions.' },
  { icon: <Heart className="h-4 w-4" />, title: 'Own the Outcome', description: 'We take responsibility for our work and care about what it creates.' },
  { icon: <TargetIcon className="h-4 w-4" />, title: 'Build With Purpose', description: 'Every feature, decision, and interaction should contribute to a better financial future.' },
]

const life = [
  { title: 'Behaviour First', description: 'Opportunities to develop your skills and expand your thinking.' },
  { title: 'Meaningful Ownership', description: 'Take responsibility for work that directly contributes to the product.' },
  { title: 'Collaborative Teams', description: 'Work alongside different perspectives and expertise.' },
  { title: 'Purpose-Driven Work', description: 'Build technology focused on lifelong financial capability.' },
]

const roles = [
  { icon: <Palette className="h-5 w-5" />, title: 'Product Designer', meta: 'Design \u00b7 Full-time', description: 'Help shape intuitive, accessible experiences across Finwise\u2019s financial intelligence and family-focused products.' },
  { icon: <Code2 className="h-5 w-5" />, title: 'Software Engineer', meta: 'Engineering \u00b7 Full-time', description: 'Build reliable, secure, and scalable technology that powers Finwise\u2019s financial intelligence platform.' },
  { icon: <Megaphone className="h-5 w-5" />, title: 'Growth / Marketing', meta: 'Growth \u00b7 Full-time', description: 'Help introduce Finwise to the people and families who can benefit from it.' },
]

export default function Career() {
  return (
    <div>
       <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${careersHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        <div className="relative">
      <PageHero
        crumb="Career"
        title="Build something that changes how families relate to money."
        description="Finwise is building a new way for people and families to understand money, build better habits, and plan for the future. Join a team working to make financial intelligence more practical, personal, and lifelong."
        // media={<OrbitVisual icon={<Rocket className="h-10 w-10" />} tone="teal" size="lg" badges={[<Layers className="h-4 w-4" />, <Compass className="h-4 w-4" />]} />}
      />
  </div>
  </div>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Why Finwise"
          title="Work on something that matters beyond the screen."
          description="Financial decisions shape families, opportunities, and generations. At Finwise, your work contributes to technology that helps people build stronger financial habits and make more informed decisions."
        />
        <div className="mt-12 grid gap-4">
          {why.map((w, i) => (
            <NumberedRow key={w.title} number={i + 1} title={w.title} description={w.description} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Thoughtful people. Ambitious ideas. Meaningful work."
          />
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div data-aos="fade-right" className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-ink-900">
              <Users className="h-16 w-16 text-teal-400/70" strokeWidth={1.2} />
            </div>
            <div className="flex flex-col divide-y divide-white/5">
              {howWeWork.map((h) => (
                <div key={h.title} data-aos="fade-up" className="flex gap-4 py-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold-500/30 text-gold-500">{h.icon}</div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">{h.title}</h3>
                    <p className="mt-1 text-sm text-mist-400">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="Life at Finwise" title="A place to grow while building something new." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {life.map((l) => (
            <Card key={l.title}>
              <h3 className="font-display text-base font-semibold text-white">{l.title}</h3>
              <p className="mt-2 text-sm text-mist-400">{l.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Open Roles" title="Find your place at Finwise." align="left" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} data-aos="fade-up" className="flex flex-col rounded-2xl border border-white/5 bg-ink-800/60 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">{r.icon}</div>
                <h3 className="font-display text-base font-semibold text-white">{r.title}</h3>
                <p className="mt-1 text-xs text-mist-500">{r.meta}</p>
                <p className="mt-3 flex-1 text-sm text-mist-400">{r.description}</p>
                <Button to="/contact" variant="ghost" withArrow className="mt-5 w-full justify-center">
                  View Role
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-lg px-5 sm:px-8">
          <ArrowUpRight className="mx-auto h-8 w-8 text-gold-500" />
          <h2 data-aos="fade-up" className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            Don't see the right role yet?
          </h2>
          <p data-aos="fade-up" data-aos-delay="60" className="mt-3 text-sm text-mist-400">
            We're always glad to hear from people who care about building better financial
            futures.
          </p>
          <Button to="/contact" variant="primary" className="mt-6">Get In Touch</Button>
        </div>
      </section>
    </div>
  )
}
