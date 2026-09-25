import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import clsx from 'clsx'

export interface NewsItem {
  image: string
  date: string
  readTime: string
  title: string
  excerpt: string
  href?: string
}

interface NewsCarouselProps {
  items: NewsItem[]
}

export default function NewsCarousel({ items }: NewsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const syncActiveFromScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-news-card]')
    if (!card) return
    const step = card.offsetWidth + 24 // card width + gap-6
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
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-news-card]')
    if (!card) return
    const step = card.offsetWidth + 24
    const clamped = Math.min(items.length - 1, Math.max(0, index))
    el.scrollTo({ left: clamped * step, behavior: 'smooth' })
    setActive(clamped)
  }

  return (
    <div>
      <div className="flex items-center justify-end gap-2 pb-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-colors hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(active + 1)}
          disabled={active === items.length - 1}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist-300 transition-colors hover:border-gold-500/50 hover:text-gold-500 disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="rounded-3xl border border-white/5 bg-ink-900/40 p-4 sm:p-6">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((n) => (
            <article
              key={n.title}
              data-news-card
              className="w-[90%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/5 bg-ink-800/80 sm:w-[calc(50%-12px)]"
            >
              <img src={n.image} alt="" className="h-40 w-full object-cover sm:h-44" />
              <div className="p-6">
                <p className="text-xs text-mist-500">
                  <span className="text-gold-500">{n.date}</span> &middot; {n.readTime}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{n.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{n.excerpt}</p>
                <a
                  href={n.href ?? '#'}
                  className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-500"
                >
                  Read Release <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((n, i) => (
          <button
            key={n.title}
            type="button"
            aria-label={`Go to ${n.title}`}
            onClick={() => goTo(i)}
            className={clsx(
              'h-2 rounded-full transition-all',
              i === active ? 'w-6 bg-gold-500' : 'w-2 bg-mist-400/50 hover:bg-mist-300',
            )}
          />
        ))}
      </div>
    </div>
  )
}
