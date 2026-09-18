import { LineChart, Newspaper, TrendingUp } from 'lucide-react'
import clsx from 'clsx'

const config = {
  chart: { icon: LineChart, from: 'from-teal-500/30', to: 'to-ink-900' },
  news: { icon: Newspaper, from: 'from-gold-500/25', to: 'to-ink-900' },
  trend: { icon: TrendingUp, from: 'from-teal-400/25', to: 'to-ink-900' },
} as const

export default function BlogCover({
  variant,
  className,
}: {
  variant: keyof typeof config
  className?: string
}) {
  const { icon: Icon, from, to } = config[variant]
  return (
    <div
      className={clsx(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br',
        from,
        to,
        className,
      )}
    >
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
      <Icon className="relative h-10 w-10 text-white/70" strokeWidth={1.5} />
    </div>
  )
}
