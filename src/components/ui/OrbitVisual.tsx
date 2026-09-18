import { type ReactNode } from 'react'
import clsx from 'clsx'

interface OrbitVisualProps {
  icon: ReactNode
  badges?: ReactNode[]
  size?: 'sm' | 'md' | 'lg'
  tone?: 'teal' | 'gold'
}

const sizes = {
  sm: 'h-56 w-56 sm:h-64 sm:w-64',
  md: 'h-72 w-72 sm:h-80 sm:w-80',
  lg: 'h-80 w-80 sm:h-96 sm:w-96',
}

export default function OrbitVisual({
  icon,
  badges = [],
  size = 'md',
  tone = 'teal',
}: OrbitVisualProps) {
  const glow = tone === 'teal' ? 'from-teal-500/25' : 'from-gold-500/25'
  return (
    <div className={clsx('relative mx-auto flex items-center justify-center', sizes[size])}>
      <div
        className={clsx(
          'absolute inset-0 rounded-full bg-gradient-to-br to-transparent blur-2xl',
          glow,
        )}
      />
      <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-6 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-dashed border-gold-500/20" />
      <div className="absolute inset-14 rounded-full border border-teal-500/20" />

      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-ink-800/90 text-teal-400 shadow-2xl backdrop-blur">
        {icon}
      </div>

      {badges.map((b, i) => (
        <div
          key={i}
          className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-800/95 text-gold-500 shadow-lg"
          style={
            [
              { top: '4%', left: '8%' },
              { top: '10%', right: '2%' },
              { bottom: '8%', left: '0%' },
              { bottom: '2%', right: '10%' },
            ][i % 4]
          }
        >
          {b}
        </div>
      ))}
    </div>
  )
}
