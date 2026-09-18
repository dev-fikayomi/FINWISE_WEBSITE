import { Wallet, PiggyBank, TrendingUp } from 'lucide-react'

export default function PhoneMock() {
  return (
    <div className="relative mx-auto w-64 rounded-[2.2rem] border border-white/10 bg-ink-800 p-3 shadow-2xl">
      <div className="rounded-[1.6rem] bg-ink-900 p-4">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-sm font-bold text-white">Finwise</span>
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400 to-gold-500" />
        </div>

        <p className="text-xs text-mist-500">Total Balance</p>
        <p className="mt-1 font-display text-2xl font-extrabold text-white">
          &#8358;152,600<span className="text-mist-500">.00</span>
        </p>
        <p className="mt-1 flex items-center gap-1 text-xs text-teal-400">
          <TrendingUp className="h-3 w-3" /> +&#8358;18,600 this month
        </p>

        <div className="mt-5 flex gap-2">
          <div className="flex-1 rounded-xl border border-white/5 bg-ink-800 p-3">
            <PiggyBank className="mb-2 h-4 w-4 text-gold-500" />
            <p className="text-[11px] text-mist-500">Savings Goal</p>
            <p className="text-sm font-semibold text-white">72%</p>
          </div>
          <div className="flex-1 rounded-xl border border-white/5 bg-ink-800 p-3">
            <Wallet className="mb-2 h-4 w-4 text-teal-400" />
            <p className="text-[11px] text-mist-500">Credit Score</p>
            <p className="text-sm font-semibold text-white">720</p>
          </div>
        </div>

        <div className="mt-4 h-16 rounded-xl bg-gradient-to-t from-gold-500/10 to-transparent" />
      </div>
    </div>
  )
}
