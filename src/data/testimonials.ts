export interface Testimonial {
  name: string
  role: string
  quote: string
  avatarSeed: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Yetunde O.',
    role: 'Young Professional, Lagos',
    quote:
      'I stopped guessing where my money was going and started building better financial habits. Finwise didn\u2019t just change how I manage money, it changed how I think about it.',
    avatarSeed: 'yetunde',
  },
  {
    name: 'Tunde A.',
    role: 'Young Professional, Lagos',
    quote:
      'Watching my kids complete tasks and actually see their savings grow taught them more in a year than any allowance jar ever did.',
    avatarSeed: 'tunde',
  },
  {
    name: 'Amara O.',
    role: 'Individual Saver',
    quote:
      'We\u2019re not just planning for tomorrow anymore. We\u2019re building a financially intelligent future for generations to come.',
    avatarSeed: 'amara',
  },
  {
    name: 'Tolu B.',
    role: 'Parent',
    quote:
      'Finwise helped us make money conversations part of our family routine. My children are beginning to understand saving, responsibility, and why planning ahead matters.',
    avatarSeed: 'tolu',
  },
  {
    name: 'Daniel K.',
    role: 'Individual Saver',
    quote:
      'Having a specific goal made saving feel different. I could see what I was working toward and stay focused on making regular contributions.',
    avatarSeed: 'daniel',
  },
  {
    name: 'Chinedu M.',
    role: 'Individual Saver',
    quote:
      'Understanding my financial behaviour made me realise that some of my spending habits were holding me back. Seeing those patterns gave me a better starting point for making changes.',
    avatarSeed: 'chinedu',
  },
  {
    name: 'Blessing N.',
    role: 'Parent',
    quote:
      'I wanted my children to learn about money early, but I didn\u2019t know where to start. Finwise gives us a simple way to introduce saving, responsibility, and everyday financial decisions.',
    avatarSeed: 'blessing',
  },
  {
    name: 'Femi A.',
    role: 'Individual Saver',
    quote:
      'Seeing my financial behaviour improve over time gave me more confidence. I became more intentional about planning, saving, and thinking about my longer-term goals.',
    avatarSeed: 'femi',
  },
]

export function avatarUrl(seed: string) {
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=101a2e`
}
