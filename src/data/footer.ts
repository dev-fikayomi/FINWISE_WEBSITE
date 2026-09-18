export interface FooterGroup {
  title: string
  links: { label: string; href: string }[]
}

export const footerGroups: FooterGroup[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'BFI', href: '/bfi' },
      { label: 'Resources', href: '/resources' },
      { label: 'Security & Trust', href: '/security-trust' },
      { label: 'Partners', href: '/partners' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Individuals', href: '/solution/individuals' },
      { label: 'Parent & Families', href: '/solution/families' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Credit & Risk Management', href: '/credit-risk' },
      { label: 'Kids Financial Learning App', href: '/solution/families' },
      { label: 'Savings & Goal', href: '/savings-goal' },
      { label: 'Family & Child Account', href: '/family-child-account' },
      { label: 'Allowance & Task System', href: '/allowance-tasks' },
      { label: 'Family Legacy & Asset Allocation', href: '/solution/families' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/legal' },
      { label: 'Privacy Policy', href: '/legal' },
      { label: 'Cookie Policy', href: '/legal' },
    ],
  },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'X', href: 'https://x.com', icon: 'x' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Threads', href: 'https://threads.net', icon: 'threads' },
] as const
