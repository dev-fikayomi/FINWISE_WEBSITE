import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Newspaper } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import BlogCover from '@/components/ui/BlogCover'
import ResourceCover from '@/Assest/Resource.png'
import { blogPosts, categories } from '@/data/blog'

const PAGE_SIZE = 6

export default function Resources() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [page, setPage] = useState(1)

  const filtered = blogPosts.filter((p) => category === 'All' || p.category === category)
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const featured = blogPosts[0]

  return (
    <div>
      <div
        className="relative overflow-hidden border-b border-white/5 "
        style={{
          backgroundImage: `url(${ResourceCover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
      <div className="relative">
      <PageHero
        crumb="Resources"
        title="Understanding Your Financial Behaviour: Where Better Habits Begin"
        description="Your financial habits influence the decisions you make every day. Understanding those patterns is the first step toward making more intentional choices with money."
        primaryCta={{ label: 'Read Article', to: `/resources/${featured.slug}` }}
        secondaryCta={{ label: 'See how BFI works', to: '/bfi' }}
        // media={<OrbitVisual icon={<Newspaper className="h-10 w-10" />} tone="teal" size="lg" />}
      />
      </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div data-aos="fade-up" className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gold-500">Latest from Finwise</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Practical ideas for everyday financial life.</h2>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c)
                setPage(1)
              }}
              className={
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors ' +
                (category === c
                  ? 'border-gold-500 bg-gold-500 text-ink-950'
                  : 'border-white/10 text-mist-300 hover:border-white/30')
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <Link
              key={post.slug}
              to={`/resources/${post.slug}`}
              data-aos="fade-up"
              className="group overflow-hidden rounded-2xl border border-white/5 bg-ink-800/60 transition-colors hover:border-gold-500/30"
            >
              <BlogCover variant={post.cover} className="h-40 w-full" />
              <div className="p-6">
                <p className="text-xs text-mist-500">
                  <span className="text-gold-500">{post.category}</span> &middot; {post.date} &middot; {post.readTime}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{post.excerpt}</p>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-500">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
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
