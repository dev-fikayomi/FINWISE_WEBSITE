export interface NavLink {
  label: string
  href: string
  description?: string
}

export interface NavItem {
  label: string
  href?: string
  children?: NavLink[]
}

export const primaryNav: NavItem[] = [
   {
    label: 'Company',
    children: [
      { label: 'About', href: '/about', description: 'Learn about FinWise and our mission,and how we are changing the way people think about money.' },
      { label: 'Careers', href: '/career', description: 'Join the team shaping a healthier financial future for everyone.' },
      { label: 'Press', href: '/press', description: 'Find Finwise news,announcements,media resources,and press information.' },
      //
      
    ],
  },
  { label: 'BFI Engine', href: '/bfi' },
  {
    label: 'Solution',
    children: [
      {
        label: 'For Individuals',
        href: '/solution/individuals',
        description: 'Build better financial habits, save with purpose, and make smarter decisions with your money.',
      },
      {
        label: 'For Parents & Families',
        href: '/solution/families',
        description: 'Manage family finances, support your children, and build stronger financial habits together.',
      },
    ],
  },
  // { label: 'Security & Trust', href: '/security-trust' },
  { label: 'Allowance & Task System', href: '/allowance-tasks' },
  
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        href: '/resources',
        description: 'Practical insights to help you understand money and build better financial habits.',
      },
      {
         label: 'Customer Stories', href: '/customer-stories', description: 'See how people and families are making progress with FinWise.' ,
      },
    ],
  },
 
  
  { label: 'Contact', href: '/contact' },
]
