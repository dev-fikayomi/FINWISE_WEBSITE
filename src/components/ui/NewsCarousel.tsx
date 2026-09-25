import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

export interface NewsItem {
  image: string
  date: string
  readTime: string
  title: string
  excerpt: string
  href?: string
}

interface LatestNewsSectionProps {
  eyebrow?: string
  heading?: string
  items: NewsItem[]
}

export default function NewsCarousel({
  eyebrow = 'Latest News',
  heading = "What's happening at Finwise.",
  items,
}: LatestNewsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const syncActiveFromScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-news-card]')
    if (!card) return
    const step = card.offsetWidth + 24
    const index = Math.round(el.scrollLeft / step)
    setActive(Math.min(items.length - 1, Math.max(0, index)))
  }, [items.length])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    let frame: number
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
    if (!el || items.length <= 1) return

    const card = el.querySelector<HTMLElement>('[data-news-card]')
    if (!card) return

    const gap = 24
    const step = card.getBoundingClientRect().width + gap
    const maxScroll = el.scrollWidth - el.clientWidth
    const clamped = Math.min(items.length - 1, Math.max(0, index))
    const targetLeft = clamped * step
    const boundedLeft = Math.min(Math.max(targetLeft, 0), maxScroll)

    el.scrollTo({ left: boundedLeft, behavior: 'smooth' })
    setActive(clamped)
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">{eyebrow}</p>
          <h2 className="mt-2 font-display text-[2.8rem] font-bold leading-[1.02] tracking-[-0.06em] text-white sm:text-[4rem]">
            {heading}
          </h2>
        </div>

        <div className="flex shrink-0 gap-3 pt-1">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-colors hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(active + 1)}
            disabled={active === items.length - 1}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-colors hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((n, index) => (
          <article
            key={n.title}
            data-news-card
            className={
              index === active
                ? 'w-[90%] shrink-0 snap-start rounded-[30px] border border-white/10 bg-[#1a2d3d]/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:w-[58%]'
                : 'w-[90%] shrink-0 snap-start rounded-[30px] border border-white/10 bg-[#1a2d3d]/75 p-5 opacity-90 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:w-[42%]'
            }
          >
            <img src={n.image} alt="" className="h-44 w-full rounded-[22px] object-cover sm:h-52" />
            <div className="pt-5">
              <p className="text-sm text-mist-500">
                <span className="text-gold-500">{n.date}</span>
                <span className="mx-2 text-mist-600">|</span>
                {n.readTime}
              </p>
              <h3 className="mt-3 font-display text-[1.8rem] font-semibold leading-tight text-white">{n.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-mist-400">{n.excerpt}</p>
              <a href={n.href ?? '#'} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-500">
                Read Release <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((n, i) => (
          <button
            key={n.title}
            type="button"
            aria-label={`Go to ${n.title}`}
            onClick={() => goTo(i)}
            className={
              i === active
                ? 'h-2.5 w-9 rounded-full bg-gold-500 transition-all'
                : 'h-2.5 w-4 rounded-full bg-mist-500/40 transition-all hover:bg-mist-400/60'
            }
          />
        ))}
      </div>
    </section>
  )
}
