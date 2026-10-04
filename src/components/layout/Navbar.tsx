import { useEffect, useState } from 'react'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
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
      onMouseLeave={() => setOpenDropdown(null)}
      className={clsx(
        'sticky top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-white/10 bg-ink-950/95 backdrop-blur-md'
          : 'border-white/10 bg-ink-950/90 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-18 max-w-[1544px] items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden h-full items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative h-full"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            >
              {item.children ? (
                <button
                  type="button"
                  aria-expanded={openDropdown === item.label}
                  aria-controls={`nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={clsx(
                    'relative flex h-full items-center gap-1 px-4 py-2 text-base font-medium transition-colors after:absolute after:inset-x-4 after:bottom-0 after:h-[3px] after:origin-center after:scale-x-0 after:bg-teal-400 after:transition-transform hover:text-teal-400 hover:after:scale-x-100',
                    openDropdown === item.label && 'text-teal-400 after:scale-x-100',
                  )}
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={clsx(
                      'h-3.5 w-3.5 transition-transform',
                      openDropdown === item.label && 'rotate-180',
                    )}
                  />
                </button>
              ) : (
                <RouterNavLink
                  to={item.href!}
                  className={({ isActive }) =>
                    clsx(
                      'relative flex h-full items-center px-4 py-2 text-base font-medium transition-colors after:absolute after:inset-x-4 after:bottom-0 after:h-[3px] after:origin-center after:scale-x-0 after:bg-teal-400 after:transition-transform hover:text-teal-400 hover:after:scale-x-100',
                      isActive && 'text-teal-400 after:scale-x-100',
                      !isActive && 'text-mist-300',
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
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

      {openDropdown && (
        <div
          id={`nav-dropdown-${openDropdown.toLowerCase().replace(/\s+/g, '-')}`}
          className="absolute inset-x-0 top-full hidden min-h-[200px] border-y border-white/10 bg-[#172235] shadow-2xl shadow-black/40 lg:block"
        >
          <div className="mx-auto grid max-w-[1544px] content-start gap-6 px-5 py-8 sm:px-8 md:grid-cols-[280px_minmax(0,1fr)] md:gap-7">
            <div className="pt-2">
              <p className="font-display text-4xl font-bold text-gold-400">
                {openDropdown}
              </p>
              <div className="mt-2 h-[3px] w-40 bg-gradient-to-r from-teal-400 to-transparent" />
            </div>
            <div className="grid w-full max-w-[880px] gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
              {primaryNav
                .find((item) => item.label === openDropdown)
                ?.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    onClick={() => setOpenDropdown(null)}
                    className="group flex min-h-[96px] w-full max-w-[322px] flex-col justify-start rounded-xl border border-white/30 bg-[linear-gradient(135deg,rgba(43,36,70,0.98)_0%,rgba(33,47,77,0.98)_55%,rgba(19,62,85,0.98)_100%)] p-2 transition duration-200 hover:-translate-y-0.5 hover:border-teal-300/70 hover:shadow-lg hover:shadow-teal-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 sm:p-4"
                  >
                    <span className="flex items-center justify-between gap-4 font-display text-sm font-bold text-white">
                      {child.label}
                      <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="mt-4 max-w-md text-sm leading-relaxed text-mist-200">
                      {child.description ?? child.label}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

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
