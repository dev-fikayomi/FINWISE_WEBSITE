import { useState } from 'react'
import { MessageCircleHeart } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import PersonAvatar from '@/components/ui/PersonAvatar'
import CustomerStoriesHero from '@/Assest/Customer_hero.png'
import { testimonials } from '@/data/testimonials'

const PAGE_SIZE = 6

export default function CustomerStories() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(testimonials.length / PAGE_SIZE)
  const visible = testimonials.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div>
       <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${CustomerStoriesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        <div className="relative">
      <PageHero
        crumb="Customer Stories"
        title="Real stories. Better financial journeys."
        description="Short intro about how Finwise helps individuals and families build better financial habits."
        // media={<OrbitVisual icon={<MessageCircleHeart className="h-10 w-10" />} tone="teal" size="lg" />}
      />
      </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <div key={t.name + t.quote.slice(0, 8)} data-aos="fade-up" className="rounded-2xl border border-white/5 bg-ink-800/60 p-6">
              <PersonAvatar seed={t.avatarSeed} size={48} />
              <h3 className="mt-4 font-display text-base font-semibold text-white">{t.name}</h3>
              <p className="text-xs text-mist-500">{t.role}</p>
              <p className="mt-3 text-sm italic leading-relaxed text-mist-300">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-950 disabled:opacity-40"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={
                  'h-9 w-9 rounded-full text-sm font-semibold ' +
                  (n === page ? 'bg-white text-ink-950' : 'border border-white/10 text-mist-300')
                }
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-950 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
