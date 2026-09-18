import { avatarUrl } from '@/data/testimonials'
import clsx from 'clsx'

export default function PersonAvatar({
  seed,
  size = 48,
  className,
}: {
  seed: string
  size?: number
  className?: string
}) {
  return (
    <img
      src={avatarUrl(seed)}
      alt=""
      width={size}
      height={size}
      className={clsx('rounded-full border border-white/10 bg-ink-800', className)}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  )
}
