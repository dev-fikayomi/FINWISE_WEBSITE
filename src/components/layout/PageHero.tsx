import { type ReactNode } from 'react'
import { Breadcrumb } from '@/components/ui/Atoms'
import Button from '@/components/ui/Button'

interface PageHeroProps {
  crumb: string
  title: ReactNode
  description: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
  media?: ReactNode
  backgroundImage?: string
  stats?: { value: string; label: string }[]
}

export default function PageHero({
  crumb,
  title,
  description,
  primaryCta = { label: 'Get Started', to: '/contact' },
  secondaryCta = { label: 'See how BFI works', to: '/bfi' },
  media,
  backgroundImage,
  stats,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-white/5"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(90deg, rgba(5, 10, 14, 0.88) 0%, rgba(5, 10, 14, 0.72) 38%, rgba(5, 10, 14, 0.38) 100%), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {backgroundImage && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 85% 5%, rgba(63,227,196,0.14), transparent), radial-gradient(35% 35% at 5% 90%, rgba(238,171,60,0.10), transparent)',
          }}
        />
      )}

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pt-10">
        <div className="mb-8" data-aos="fade-up">
          <Breadcrumb trail={[{ label: 'Home', href: '/' }, { label: crumb }]} />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1
              data-aos="fade-up"
              className="font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl"
            >
              {title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-5 max-w-lg text-base leading-relaxed text-mist-400"
            >
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="180" className="mt-8 flex flex-wrap gap-3">
              <Button to={primaryCta.to} variant="primary">
                {primaryCta.label}
              </Button>
              <Button to={secondaryCta.to} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
          </div>

          {media && (
            <div data-aos="fade-left" data-aos-delay="120" className="relative">
              {media}
            </div>
          )}
        </div>

        {stats && (
          <div
            data-aos="fade-up"
            className="mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-extrabold text-gold-500 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-mist-400">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
