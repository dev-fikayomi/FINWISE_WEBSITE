import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { footerGroups, socialLinks } from '@/data/footer'
import FooterLogo from '@/Assest/footer_Logo.png'
import SocialIcon from '@/components/ui/SocialIcon'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const footerLogoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const logo = footerLogoRef.current
    if (!logo) return

    const observer = new IntersectionObserver(([entry]) => {
      logo.classList.toggle('footer-logo-visible', entry.isIntersecting)
    }, { threshold: 0.1 })

    observer.observe(logo)
    return () => observer.disconnect()
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-5 sm:gap-x-7">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-medium uppercase text-mist-100">
                {group.title}
              </h4>
              <ul className="mt-3 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs leading-4 text-mist-400 transition-colors hover:text-gold-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 flex min-h-44 flex-col justify-between sm:col-span-1 sm:min-h-[244px]">
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 text-gold-500 transition-colors hover:border-gold-500/50 hover:bg-ink-800 hover:text-gold-400"
                >
                  <SocialIcon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-ink-800 sm:max-w-none">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-white/5 px-4 py-3 text-xs text-white placeholder:text-mist-300 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gold-500"
              />
              <button
                type="submit"
                className="shrink-0 bg-gold-500 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-gold-400"
              >
                {submitted ? 'Thanks!' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        <div className="mt-7 border-t border-white/50 pt-4">
          <p className="text-[11px] text-mist-400">
            © {new Date().getFullYear()} Finwise. All savings and credit products are provided by licensed partner institutions.
          </p>
        </div>
      </div>

      <div className="bg-black px-5 py-12 text-center sm:py-16">
        <div ref={footerLogoRef} className="footer-logo mx-auto flex justify-center">
          <img
            src={FooterLogo}
            alt="Finwise footer logo"
            className="h-auto w-full max-w-[1000px] object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
