import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      data-aos="fade-up"
      className="text-sm font-semibold tracking-wide text-gold-500"
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      {eyebrow && (
        <p data-aos="fade-up" className="mb-3 text-sm font-semibold text-gold-500">
          {eyebrow}
        </p>
      )}
      <h2
        data-aos="fade-up"
        data-aos-delay="80"
        className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-4 text-base leading-relaxed text-mist-400"
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {trail.map((item, i) => {
        const isLast = i === trail.length - 1
        return (
          <span key={item.label} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link to={item.href} className="text-mist-400 hover:text-mist-100">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'font-medium text-gold-500' : 'text-mist-400'}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="h-3.5 w-3.5 text-mist-500" />}
          </span>
        )
      })}
    </nav>
  )
}

export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div data-aos="fade-up">
      <p className="font-display text-3xl font-extrabold text-gold-500 sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-mist-400">{label}</p>
    </div>
  )
}

export function NumberedRow({
  number,
  title,
  description,
  active = false,
}: {
  number: number | string
  title: string
  description: string
  active?: boolean
}) {
  return (
    <div
      data-aos="fade-up"
      className={
        'flex flex-col gap-3 rounded-2xl border p-6 sm:flex-row sm:items-center sm:gap-6 ' +
        (active
          ? 'border-gold-500/40 bg-ink-700/60'
          : 'border-white/5 bg-ink-800/60')
      }
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold-500/30 font-display text-base font-bold text-gold-500">
        {number}
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-mist-400">{description}</p>
      </div>
    </div>
  )
}

export function IconTile({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div
      data-aos="fade-up"
      className="group h-full rounded-[24px]  border-transparent bg-[#1D2A3D78]/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-gold-400/30"
    >
      <div className="mb-5 flex h-14 w-10 items-center justify-center rounded-2xl shadow-black/20">
        {icon}
      </div>
      <h3 className="font-display text-[1.1rem] font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist-300">{description}</p>
    </div>
  )
}

export function Card({
  children,
  className = '',
  aos = 'fade-up',
}: {
  children: ReactNode
  className?: string
  aos?: string
}) {
  return (
    <div
      data-aos={aos}
      className={
        'rounded-2xl border border-white/5 bg-ink-800/60 p-6 ' + className
      }
    >
      {children}
    </div>
  )
}
