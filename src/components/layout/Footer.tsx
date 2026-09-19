import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import { footerGroups, socialLinks } from '@/data/footer'
import SocialIcon from '@/components/ui/SocialIcon'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-mist-100">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-mist-400 transition-colors hover:text-gold-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo />

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-colors hover:border-gold-500/50 hover:text-gold-500"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2 sm:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-full border border-white/10 bg-ink-800 px-4 py-2.5 text-sm text-white placeholder:text-mist-500 focus:border-gold-500 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-gold-400"
            >
              {submitted ? 'Thanks!' : 'Subscribe'}
            </button>
          </form>
        </div>

        <p className="mt-8 text-xs text-mist-500">
          © {new Date().getFullYear()} FSIL. All savings and credit products are provided by
          licensed partner institutions.
        </p>
      </div>

      <div className="border-t border-white/5 py-10 text-center">
        <div className="flex justify-center" data-aos="fade-down" data-aos-offset="80" data-aos-duration="700">
          <img
            src="/src/Assest/footer_Logo.png"
            alt="Finwise footer logo"
            className="h-auto max-w-[500px] object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
