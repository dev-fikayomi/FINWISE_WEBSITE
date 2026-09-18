import { ShieldCheck } from 'lucide-react'

const badges = [
  { name: 'SEC', desc: 'Securities & Exchange Commission' },
  { name: 'NDIC', desc: 'Nigeria Deposit Insurance Corp.' },
  { name: 'ISO', desc: 'ISO Certified Standards' },
  { name: 'NDPC', desc: 'Nigeria Data Protection Commission' },
]

export default function ComplianceBadges() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {badges.map((b) => (
        <div
          key={b.name}
          data-aos="fade-up"
          className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-ink-800/60 px-4 py-5 text-center"
        >
          <ShieldCheck className="h-6 w-6 text-teal-400" />
          <p className="font-display text-sm font-bold text-white">{b.name}</p>
          <p className="text-[11px] leading-tight text-mist-500">{b.desc}</p>
        </div>
      ))}
    </div>
  )
}
