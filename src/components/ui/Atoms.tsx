import { type ReactNode, useEffect, useRef, useState } from 'react'
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
  const containerRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const valueParts = value.match(/^([^0-9]*)([\d,.]+)([KMB]?)(\+?)$/i)
  const number = valueParts ? Number(valueParts[2].replace(/,/g, '')) : 0
  const multiplier = valueParts
    ? { K: 1_000, M: 1_000_000, B: 1_000_000_000 }[valueParts[3].toUpperCase() as 'K' | 'M' | 'B'] || 1
    : 1
  const target = number * multiplier

  useEffect(() => {
    const parts = value.match(/^([^0-9]*)([\d,.]+)([KMB]?)(\+?)$/i)
    const container = containerRef.current
    if (!container || !parts) return

    let frame = 0

    const finish = () => setCount(target)
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        finish()
        return
      }

      const startedAt = performance.now()
      const duration = 1200
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCount(target * easedProgress)

        if (progress < 1) frame = requestAnimationFrame(animate)
        else finish()
      }

      frame = requestAnimationFrame(animate)
    }, { threshold: 0.35 })

    observer.observe(container)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, value])

  const displayValue = valueParts
    ? count >= target
      ? value
      : `${valueParts[1]}${new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(count)}${valueParts[4]}`
    : value

  return (
    <div ref={containerRef} data-aos="fade-up">
      <p className="font-display text-3xl font-extrabold text-gold-500 sm:text-4xl">
        <span aria-hidden="true">{displayValue}</span>
        <span className="sr-only">{value}</span>
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
  className = '',
}: {
  icon: ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      data-aos="fade-up"
      className={`group h-full rounded-[24px] border-transparent bg-[#1D2A3D78]/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-gold-400/30 ${className}`}
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
