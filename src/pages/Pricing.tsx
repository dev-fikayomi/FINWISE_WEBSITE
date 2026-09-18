import { Check } from 'lucide-react'
import PageHero from '@/components/layout/PageHero'
import OrbitVisual from '@/components/ui/OrbitVisual'
import { CreditCard } from 'lucide-react'
import Button from '@/components/ui/Button'

const plans = [
  {
    name: 'Individual',
    price: 'Free',
    description: 'For anyone starting their personal financial journey.',
    features: ['BFI score & insights', 'Unlimited savings goals', 'Bank account linking', 'Emergency fund access'],
    highlighted: false,
  },
  {
    name: 'Family',
    price: '\u20a62,500/mo',
    description: 'For parents managing children\u2019s financial growth.',
    features: ['Everything in Individual', 'Unlimited child profiles', 'Allowance & task system', 'Family shared goals', 'Legacy planning tools'],
    highlighted: true,
  },
  {
    name: 'Partner',
    price: 'Custom',
    description: 'For financial institutions and credit providers.',
    features: ['EDI data access', 'Permissioned user reach', 'Dedicated integration support', 'Compliance reporting'],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <div>
      <div
      
      ></div>
      <PageHero
        crumb="Pricing"
        title="Simple pricing for every stage of your journey."
        description="Whether you're building personal habits, guiding a family, or partnering with Finwise, there's a plan built around your goals."
        media={<OrbitVisual icon={<CreditCard className="h-10 w-10" />} tone="gold" size="lg" />}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              className={
                'flex flex-col rounded-3xl border p-8 ' +
                (plan.highlighted
                  ? 'border-gold-500/50 bg-gradient-to-b from-gold-500/10 to-ink-800'
                  : 'border-white/5 bg-ink-800/60')
              }
            >
              <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 font-display text-3xl font-extrabold text-gold-500">{plan.price}</p>
              <p className="mt-3 text-sm text-mist-400">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button to="/contact" variant={plan.highlighted ? 'primary' : 'secondary'} className="mt-8 w-full justify-center">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
