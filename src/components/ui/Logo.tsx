import finwiseLogo from '@/Assest/Finwise_Logo.png'

interface LogoProps {
  className?: string
  size?: 'sm' | 'lg'
}

export default function Logo({ className = '', size = 'sm' }: LogoProps) {
  const logoHeight = size === 'lg' ? 'h-10 sm:h-12' : 'h-7 sm:h-8'

  return (
    <img
      src={finwiseLogo}
      alt="Finwise logo"
      className={`block w-auto ${logoHeight} ${className}`}
    />
  )
}
