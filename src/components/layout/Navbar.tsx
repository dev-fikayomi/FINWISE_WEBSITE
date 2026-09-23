import { useEffect, useState } from 'react'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { primaryNav } from '@/data/navigation'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-white/10 bg-ink-950/90 backdrop-blur-md'
          : 'border-transparent bg-ink-950/40 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <button
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-mist-300 transition-colors hover:text-white"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              ) : (
                <RouterNavLink
                  to={item.href!}
                  className={({ isActive }) =>
                    clsx(
                      'rounded-full px-3 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-gold-500' : 'text-mist-300 hover:text-white',
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-56 rounded-xl border border-white/10 bg-ink-800 p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-mist-300 hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
         
          <Button to="/contact" variant="primary">
            Get Started
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-mist-100 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-ink-950 px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-white/5 py-2">
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-2 text-sm font-medium text-mist-200"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={clsx(
                          'h-4 w-4 transition-transform',
                          openDropdown === item.label && 'rotate-180',
                        )}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="flex flex-col gap-1 pb-2 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="py-1.5 text-sm text-mist-400 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href!} className="block py-2 text-sm font-medium text-mist-200">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
           
            <Button to="/contact" variant="primary" className="flex-1">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
