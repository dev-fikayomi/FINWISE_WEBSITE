interface SocialIconProps {
  name: 'instagram' | 'x' | 'facebook' | 'threads'
  className?: string
}

export default function SocialIcon({ name, className = 'h-4 w-4' }: SocialIconProps) {
  switch (name) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M14 9h2.5V6H14c-2 0-3.4 1.4-3.4 3.4V11H8.5v3H10.6v6h2.9v-6h2.4l.5-3h-2.9V9.7c0-.5.3-.7.7-.7Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M5 4.5 10.6 12 5.2 19.5H7l4.4-6.1 3.6 6.1H19l-6-9.9L18 4.5h-1.8l-4 5.6-3.3-5.6H5Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'threads':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 3c-4.4 0-7.2 2.9-7.2 9s2.8 9 7.2 9c3.6 0 6.1-2 6.7-5.2.4-2.2-.4-3.9-2.1-4.7-.2-2.4-1.6-3.9-4-3.9-1.7 0-3 .8-3.6 2l1.5.7c.4-.7 1-1.1 2-1.1 1.2 0 1.9.7 2.1 1.9-2.6-.2-4.9.6-4.9 3 0 1.7 1.4 2.8 3.2 2.8 1.8 0 3-1 3.4-2.6.6.5.8 1.2.6 2.1-.4 2.1-2.1 3.4-4.9 3.4-3.3 0-5.4-2.2-5.4-7.4s2.1-7.4 5.4-7.4c1.8 0 3.2.7 4.1 1.9l1.4-1.1C15.9 3.9 14.1 3 12 3Zm-.5 9.9c0-1 1-1.4 2.3-1.4.5 0 1 0 1.4.1-.2 1.4-.9 2.3-2.1 2.3-.9 0-1.6-.4-1.6-1Z"
            fill="currentColor"
          />
        </svg>
      )
  }
}
