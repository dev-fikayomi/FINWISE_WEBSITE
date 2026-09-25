import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Compass, Target, Ear, Sparkles, Globe2, ShieldCheck } from 'lucide-react'
import clsx from 'clsx'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { SectionHeading, Card } from '@/components/ui/Atoms'
import PersonAvatar from '@/components/ui/PersonAvatar'
import AboutHero from '@/Assest/About_hero.png'
import FinwiseIcon from '@/Assest/finwise.png'
import MiniMap from '@/Assest/MiniMap.png'
import CompassImage from '@/Assest/compass.png' 
import HomePic from '@/Assest/Home_Pic.png'
import Button from '@/components/ui/Button'

const beliefs = [
  { icon: <img src={FinwiseIcon} alt="Finwise" />, title: 'Understand Your Behaviour', description: 'Better financial decisions start with understanding the habits and behaviours behind them.' },
  { icon: <img src={FinwiseIcon} alt="Finwise" />, title: 'Build Better Habits', description: 'Small, consistent actions around saving, planning, learning, and responsibility can create meaningful long-term change.' },
  { icon: <img src={FinwiseIcon} alt="Finwise" />, title: 'Think Beyond Yourself', description: 'Financial wellbeing can extend across families, helping parents guide children and prepare future generations.' },
]

const approach = [
  { title: 'Behaviour First', description: 'Financial products become more useful when they\u2019re informed by how people actually behave.' },
  { title: 'Partner Powered', description: 'Finwise works through trusted financial institutions and partners for financial services it does not provide directly.' },
  { title: 'Family Connected', description: 'Parents and children can build financial capability together while maintaining appropriate controls and protections.' },
  { title: 'Designed for the Long Term', description: 'From a first savings goal to family planning and legacy allocation, Finwise is designed around financial progress over time.' },
]

interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
}

const team: TeamMember[] = [
  { name: 'Amara Okafor', role: 'Co-Founder & CEO', bio: 'Amara leads Finwise with a focus on making financial planning more accessible and practical for individuals and families. He brings together product vision, technology, and financial inclusion to drive the company\u2019s mission.', photo: AboutHero },
  { name: 'Daniel Adeyemi', role: 'Chief Product Officer', bio: 'Daniel leads the development of Finwise\u2019s user experiences and financial products, ensuring they are simple, useful, and built around real-life needs. Her work focuses on turning complex financial concepts into tools people can confidently use.', photo: HomePic },
  { name: 'Daniela Cruz', role: 'Chief Trust Officer', bio: 'Daniela leads the trust and security posture of Finwise, ensuring data and financial connections meet the highest standards while turning complex compliance concepts into tools people can confidently rely on.', photo: AboutHero },
]

function TeamCarousel({ members }: { members: TeamMember[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const syncActiveFromScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return

    const card = el.querySelector<HTMLElement>('[data-card]')
    if (!card) return

    const step = card.offsetWidth + 24
    const index = Math.round(el.scrollLeft / step)
    setActive(Math.min(members.length - 1, Math.max(0, index)))
  }, [members.length])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(syncActiveFromScroll)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [syncActiveFromScroll])

  function goTo(index: number) {
    const el = trackRef.current
    if (!el) return

    const card = el.querySelector<HTMLElement>('[data-card]')
    if (!card) return

    const step = card.offsetWidth + 24
    const clamped = Math.min(members.length - 1, Math.max(0, index))
    el.scrollTo({ left: clamped * step, behavior: 'smooth' })
    setActive(clamped)
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {members.map((m) => (
          <article
            key={m.name}
            data-card
            className="flex w-[88%] shrink-0 snap-start flex-col gap-6 rounded-[28px] border border-white/10 bg-[rgba(12,24,38,0.7)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:w-[70%] sm:flex-row sm:p-8 lg:w-[46%]"
          >
            <img
              src={m.photo}
              alt={m.name}
              className="h-56 w-full shrink-0 rounded-[20px] border border-white/10 object-cover sm:h-auto sm:w-40 sm:aspect-[3/4] lg:w-44"
              loading="lazy"
            />
            <div className="min-w-0">
              <h3 className="font-display text-[2rem] font-bold leading-none text-white">{m.name}</h3>
              <p className="mt-1 text-base text-gold-500">{m.role}</p>
              <hr className="my-4 border-white/10" />
              <p className="text-base leading-relaxed text-mist-300">{m.bio}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-colors hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {members.map((m, i) => (
            <button
              key={m.name}
              type="button"
              aria-label={`Go to ${m.name}`}
              onClick={() => goTo(i)}
              className={clsx(
                'rounded-full transition-all',
                i === active
                  ? 'h-3.5 w-3.5 border-2 border-gold-500 bg-transparent'
                  : 'h-2.5 w-2.5 bg-mist-400/60 hover:bg-mist-300',
              )}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(active + 1)}
          disabled={active === members.length - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-colors hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

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
          <img
            src={CompassImage}
            alt="Compass"
            className="h-[420px] w-full rounded-3xl object-cover opacity-95"
          />
          <div>
            <p data-aos="fade-up" className="text-sm font-semibold text-gold-500">Our Mission</p>
            <h2 data-aos="fade-up" data-aos-delay="60" className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Helping people build better relationships with money.
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="mt-5 text-sm leading-relaxed text-mist-400">
              Finwise exists to make financial literacy practical, personal, and continuous for every individual.
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
                <div className="mb-4 flex h-11 w-11 ">{b.icon}</div>
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
              Finance shouldn't only tell you what you have. It should help you understand what to do next.
            </h2>
            <p data-aos="fade-up" data-aos-delay="120" className="mt-5 text-sm leading-relaxed text-mist-400">
              Traditional financial tools often focus on balances, transactions, and individual products.

              Finwise is being built around a different idea: your financial behaviour, goals, family responsibilities, and future plans should work together.

              That's why BFI sits at the centre of Finwise  connecting insights across savings, family tools, responsible credit access, financial education, and long-term planning.
            </p>
           
            <div data-aos="fade-up" data-aos-delay="200" className="mt-6">
              <Button to="/bfi" variant="primary" className="!text-white">
                Discover the BFI Engine
              </Button>
            </div>
          </div>
          <div data-aos="" className="flex  items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br  to-ink-900">
            <img
              src={MiniMap}
              alt="Compass"
              className="h-[420px] w-full rounded-3xl object-cover opacity-95"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#071b2c] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">Our Approach</p>
            <h2 className="font-display text-[2.2rem] font-bold leading-[1.08] text-white sm:text-[3.4rem]">
              One financial journey. Many stages of life.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {approach.map((a) => (
              <div
                key={a.title}
                className="rounded-[28px] border border-white/10 bg-[rgba(14,25,38,0.72)] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <h3 className="font-display text-[1.65rem] font-semibold leading-tight text-white">
                  {a.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-mist-400">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="border-t border-white/5 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px] rounded-[32px] border border-white/10 bg-[#071b2c]/80 px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-500">Built for trust &amp; scale</p>
            <h2 className="font-display text-[2.4rem] font-bold leading-[1.08] text-white sm:text-[3rem] lg:text-[3.3rem]">
              Technology designed to grow with the people who use it.
            </h2>

            <p className="mx-auto mt-7 max-w-[980px] text-lg leading-[1.7] text-mist-400">
              Finwise is built on a secure, independently scalable architecture designed to support different financial services while maintaining clear separation, reliability, and control.
            </p>

            <p className="mx-auto mt-5 max-w-[980px] text-lg leading-[1.7] text-mist-400">
              From behavioural intelligence to family financial management and secure data sharing, each part of the platform is designed to work together without sacrificing security or flexibility.
            </p>

            <div className="mt-8 flex justify-center">
              <Button to="/security-trust" variant="primary" className="!text-ink-950 !bg-gold-500 px-8 py-3 text-base font-semibold">
                Explore Security &amp; Trust
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8">
        <div className="rounded-[32px] border border-white/10 bg-[#071b2c]/80 px-4 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Our People</p>
            <h2 className="font-display text-[2.2rem] font-bold leading-[1.08] text-white sm:text-[3rem]">
              Built by people who believe financial capability can change lives.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-mist-400">
              Finwise brings together experience across technology, financial services, behavioural intelligence, and product design to build tools that support people and families for the long term.
            </p>
          </div>

          <div className="mt-12">
            <TeamCarousel members={team} />
          </div>
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
