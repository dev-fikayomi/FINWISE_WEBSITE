export interface BlogPost {
  slug: string
  category: 'Financial Behaviour' | 'Parenting & Money' | 'BFI Insight'
  date: string
  readTime: string
  title: string
  excerpt: string
  cover: 'chart' | 'news' | 'trend'
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-your-financial-behaviour',
    category: 'Financial Behaviour',
    date: '24th March 2026',
    readTime: '6 min read',
    title: 'Understanding Your Financial Behaviour: Where Better Habits Begin',
    excerpt:
      'Your financial habits influence the decisions you make every day. Understanding those patterns is the first step toward making more intentional choices with money.',
    cover: 'trend',
  },
  {
    slug: 'build-a-savings-habit-that-lasts',
    category: 'Financial Behaviour',
    date: '24th Mar 2026',
    readTime: '5 min read',
    title: 'How to Build a Savings Habit That Lasts',
    excerpt: 'Small, consistent actions can make saving easier to maintain over time.',
    cover: 'trend',
  },
  {
    slug: 'teaching-children-value-of-money',
    category: 'Parenting & Money',
    date: '8th Apr 2026',
    readTime: '4 min read',
    title: 'Teaching Children the Value of Money',
    excerpt:
      'Simple ways to introduce financial responsibility through everyday experiences.',
    cover: 'news',
  },
  {
    slug: 'what-your-spending-habits-tell-you',
    category: 'Financial Behaviour',
    date: '20th Jun 2026',
    readTime: '5 min read',
    title: 'What Your Spending Habits Can Tell You',
    excerpt:
      'Understanding where your money goes can help you make more intentional decisions.',
    cover: 'chart',
  },
  {
    slug: 'bfi-and-your-money-story',
    category: 'BFI Insight',
    date: '24th Mar 2026',
    readTime: '7 min read',
    title: 'How to Build a Savings Habit That Lasts',
    excerpt: 'Small, consistent actions can make saving easier to maintain over time.',
    cover: 'chart',
  },
  {
    slug: 'family-routines-and-money',
    category: 'Parenting & Money',
    date: '4th Apr 2026',
    readTime: '4 min read',
    title: 'Teaching Children the Value of Money',
    excerpt:
      'Simple ways to introduce financial responsibility through everyday experiences.',
    cover: 'news',
  },
]

export const categories = ['All', 'Financial Behaviour', 'Parenting & Money', 'BFI Insight'] as const
