import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  href?: string
  to?: string
  variant?: Variant
  withArrow?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-[0_8px_24px_-8px_rgba(238,171,60,0.55)] hover:-translate-y-0.5',
  secondary:
    'bg-transparent text-mist-100 border border-mist-400/40 hover:border-mist-100 hover:bg-white/5',
  ghost: 'bg-white/5 text-mist-100 hover:bg-white/10 border border-white/10',
}

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  withArrow = false,
  type = 'button',
  onClick,
  className,
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className)
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
