import type { FormEvent } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { FOOTER_LINKS } from '@/constants/navigation'
import { SITE } from '@/constants/site'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

function SocialIcon({ name }: { name: 'linkedin' | 'instagram' | 'facebook' }) {
  const paths = {
    linkedin:
      'M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.96V23h-4V8.5z',
    instagram:
      'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.52.01-4.76.07-2.25.1-3.3 1.16-3.4 3.4-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.1 2.24 1.15 3.3 3.4 3.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.24-.1 3.3-1.16 3.4-3.4.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.1-2.24-1.16-3.3-3.4-3.4-1.24-.06-1.61-.07-4.76-.07zm0 3.06a5.18 5.18 0 1 1 0 10.36 5.18 5.18 0 0 1 0-10.36zm0 1.8a3.38 3.38 0 1 0 0 6.76 3.38 3.38 0 0 0 0-6.76zm5.34-3.5a1.21 1.21 0 1 1 0 2.42 1.21 1.21 0 0 1 0-2.42z',
    facebook:
      'M14 8.5h2.5V5.2c0-1.1.1-2.7 2.7-2.7H19.5V.2C19.1.1 17.6 0 15.9 0 12.4 0 10 2.1 10 6v2.5H7.5V12H10v12h4V12h2.7l.3-3.5z',
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d={paths[name]} />
    </svg>
  )
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-navy-900/8 bg-navy-950 text-white">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" imgClassName="h-14 sm:h-16" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {SITE.tagline}
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/65">
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </p>
              <p className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden />
                <span>{SITE.location}</span>
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              {(
                [
                  { href: SITE.social.linkedin, name: 'linkedin' as const, label: 'LinkedIn' },
                  { href: SITE.social.instagram, name: 'instagram' as const, label: 'Instagram' },
                  { href: SITE.social.facebook, name: 'facebook' as const, label: 'Facebook' },
                ]
              ).map(({ href, name, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>

          {(
            [
              ['Explore', FOOTER_LINKS.explore],
              ['Engage', FOOTER_LINKS.engage],
              ['Trust', FOOTER_LINKS.trust],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold tracking-[0.12em] text-amber-400 uppercase">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-2xl font-bold">Stay close to the journey</h2>
            </div>
            {submitted ? (
              <p className="rounded-xl bg-sage-100/10 px-4 py-3 text-sm text-sage-100" role="status">
                Thank you. Newsletter signup will go live with our mailing system.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex w-full flex-col gap-2 sm:flex-row lg:min-w-[360px]">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-11 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-amber-400 focus:outline-none"
                />
                <Button type="submit" variant="amber">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</p>
          <p>Lighting the way for refugee communities.</p>
        </div>
      </div>
    </footer>
  )
}
