import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { footerGroups, socialLinks } from '@/data/footer'
import FooterLogo from '@/Assest/footer_Logo.png'
import SocialIcon from '@/components/ui/SocialIcon'

// How much of the logo area must be on screen before the entrance plays.
const PLAY_AT = 0.3

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Static box that never moves: this is what the observer watches.
  const logoAreaRef = useRef<HTMLDivElement>(null)
  // The element that actually animates (.footer-logo).
  const logoRef = useRef<HTMLDivElement>(null)
  const logoImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const area = logoAreaRef.current
    const logo = logoRef.current
    const img = logoImgRef.current
    if (!area || !logo || !img) return

    let cancelled = false
    let played = false
    let observer: IntersectionObserver | undefined

    const startObserving = () => {
      if (cancelled) return

      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[entries.length - 1]

          // Enough of the logo area is visible: play once.
          if (entry.intersectionRatio >= PLAY_AT) {
            if (!played) {
              played = true
              logo.classList.add('footer-logo-visible')
            }
            return
          }

          // Completely off screen: reset so it can play again next time.
          // Anything in between (partly visible) is left alone, so the
          // animation is never restarted while the user can see it.
          if (!entry.isIntersecting) {
            played = false
            logo.classList.remove('footer-logo-visible')
          }
        },
        { threshold: [0, PLAY_AT] },
      )

      observer.observe(area)
    }

    // Wait until the image is downloaded and decoded, so the animation
    // never starts on an empty box or stalls while the PNG decodes.
    img.decode().then(startObserving, startObserving)

    return () => {
      cancelled = true
      observer?.disconnect()
    }
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

      <div className="bg-ink-950 px-5 py-12 text-center sm:py-16">
        {/* Static wrapper: observed, never transformed */}
        <div ref={logoAreaRef} className="mx-auto w-full max-w-[1000px]">
          {/* Animated element */}
          <div ref={logoRef} className="footer-logo">
            <img
              ref={logoImgRef}
              src={FooterLogo}
              alt="Finwise footer logo"
              decoding="async"
              className="footer-logo-image block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
