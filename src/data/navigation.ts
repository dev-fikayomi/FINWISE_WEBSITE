export interface NavLink {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href?: string
  children?: NavLink[]
}

export const primaryNav: NavItem[] = [
  { label: 'BFI Engine', href: '/bfi' },
  {
    label: 'Solution',
    children: [
      { label: 'Individuals', href: '/solution/individuals' },
      { label: 'Parent & Families', href: '/solution/families' },
    ],
  },
  { label: 'Security & Trust', href: '/security-trust' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    children: [
      { label: 'Blog & Articles', href: '/resources' },
      { label: 'Bank Linking & Secure Data', href: '/bank-linking' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About', href: '/about' },
      { label: 'Press & Newsroom', href: '/press' },
      { label: 'Customer Stories', href: '/customer-stories' },
      { label: 'Career', href: '/career' },
    ],
  },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]
