import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/Atoms'
import BlogCover from '@/components/ui/BlogCover'
import { blogPosts } from '@/data/blog'
import NotFound from './NotFound'

export default function ResourceDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5">
        <BlogCover variant={post.cover} className="absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <div className="mb-6 flex justify-center" data-aos="fade-up">
            <Breadcrumb
              trail={[
                { label: 'Home', href: '/' },
                { label: 'Resources', href: '/resources' },
                { label: 'Resources Detail' },
              ]}
            />
          </div>
          <h1 data-aos="fade-up" data-aos-delay="60" className="font-display text-3xl font-extrabold text-gold-500 sm:text-4xl">
            {post.title}
          </h1>
          <p data-aos="fade-up" data-aos-delay="120" className="mx-auto mt-4 max-w-2xl text-sm text-mist-300">
            {post.excerpt}
          </p>
          <p data-aos="fade-up" data-aos-delay="160" className="mt-6 text-xs text-mist-500">
            {post.category} &middot; {post.date} &middot; {post.readTime}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <article data-aos="fade-up" className="space-y-8 text-sm leading-relaxed text-mist-300">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Why Your Financial Behaviour Matters</h2>
            <p className="mt-3">
              The way you manage money is shaped by more than how much you earn. Everyday
              decisions &mdash; what you spend, what you save, what you postpone, and what
              you prioritize &mdash; gradually form financial habits.
            </p>
            <p className="mt-3">
              Some of these habits happen almost automatically. Others are deliberate.
              Understanding those patterns gives you a clearer picture of how you relate to
              money and where you may want to make a change.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">1. Start With Awareness</h3>
            <p className="mt-3">
              Before you can build a better financial habit, you need to understand your
              current behaviour. Ask yourself:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-mist-400">
              <li>What do I usually spend money on?</li>
              <li>How consistently do I save?</li>
              <li>Do I plan ahead for larger expenses?</li>
              <li>What happens when an unexpected expense comes up?</li>
              <li>Do my everyday decisions support my longer-term goals?</li>
            </ul>
            <p className="mt-3">
              There isn't one perfect answer. The goal is simply to become more aware of
              the patterns behind your financial decisions.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">2. From Awareness to Better Habits</h3>
            <p className="mt-3">
              Small changes can build better financial habits. Financial behaviour doesn't
              usually come from changing everything at once. It can start with small,
              repeatable actions:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-mist-400">
              <li>Track your spending: understand where your money is going before deciding what should go.</li>
              <li>Set clear goals: give your savings a purpose and make progress easier to measure.</li>
              <li>Plan ahead: think about upcoming expenses instead of reacting when they arrive.</li>
              <li>Review your habits: look at what's working and what you can improve.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">3. Your Behaviour Can Tell You More</h3>
            <p className="mt-3">
              Finwise's Behavioral Financial Intelligence (BFI) looks at patterns across
              areas such as spending awareness, planning, impulse control, risk awareness,
              and long-term thinking. Instead of simply showing you a number, BFI turns
              behavioural signals into insights and supportive nudges that can help you
              understand what to do next.
            </p>
          </div>

          <div className="rounded-2xl border border-gold-500/20 bg-gold-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-500">Example Insight</p>
            <p className="mt-2 text-sm text-mist-300">
              Spending Awareness: "You've become more consistent with tracking your spending
              this month."
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">Better Financial Habits Start With Understanding</h3>
            <p className="mt-3">
              You don't need to have everything figured out before you start making better
              financial decisions. Pay attention to your patterns, understand what
              influences your choices, and then make small changes that move you closer to
              the financial life you want.
            </p>
          </div>
        </article>
      </section>

      <section className="border-t border-white/5 bg-ink-900/60 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 data-aos="fade-up" className="font-display text-2xl font-bold text-white">Related Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/resources/${p.slug}`}
                data-aos="fade-up"
                className="group overflow-hidden rounded-2xl border border-white/5 bg-ink-800/60 transition-colors hover:border-gold-500/30"
              >
                <BlogCover variant={p.cover} className="h-36 w-full" />
                <div className="p-5">
                  <p className="text-xs text-mist-500">
                    <span className="text-gold-500">{p.category}</span> &middot; {p.date}
                  </p>
                  <h3 className="mt-2 font-display text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-xs text-mist-400">{p.excerpt}</p>
                  <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-gold-500">
                    Read Article <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
