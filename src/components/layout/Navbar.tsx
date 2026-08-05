import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/constants/navigation'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      if (!isHome) {
        setScrolled(true)
        return
      }
      // Switch to white once the dark hero is mostly left behind
      const heroExit = Math.min(window.innerHeight * 0.45, 320)
      setScrolled(window.scrollY > heroExit)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [isHome])

  useEffect(() => {
    setOpen(false)
    setExpanded(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) {
        setOpen(false)
        setExpanded(null)
        document.body.style.overflow = ''
      }
    }
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const solid = !isHome || scrolled || open

  const isSectionActive = (link: (typeof NAV_LINKS)[number]) => {
    if (link.children?.length) {
      return link.children.some(
        (child) =>
          location.pathname === child.href || location.pathname.startsWith(`${child.href}/`),
      )
    }
    if (link.href === '/') return location.pathname === '/'
    return location.pathname === link.href || location.pathname.startsWith(`${link.href}/`)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-navy-900/8 bg-white/95 shadow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-page flex h-[3.35rem] items-center justify-between gap-4 sm:h-14 lg:h-16" aria-label="Primary">
        <Logo
          variant={solid ? 'color' : 'white'}
          className="h-full"
          imgClassName="h-8 sm:h-9 lg:h-10"
        />

        <div className="hidden items-center gap-2 lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const sectionActive = isSectionActive(link)
              return (
              <li key={link.href} className="relative">
                {link.children ? (
                  <div
                    className="group/dropdown relative"
                    onMouseEnter={() => setExpanded(link.label)}
                    onMouseLeave={() => setExpanded(null)}
                  >
                    <button
                      type="button"
                      className={cn(
                        'relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                        solid
                          ? sectionActive
                            ? 'bg-amber-100 text-navy-900'
                            : 'text-navy-800 hover:bg-navy-900/5 hover:text-navy-900'
                          : sectionActive
                            ? 'bg-white/20 text-white'
                            : 'text-white/85 hover:bg-white/10 hover:text-white',
                        sectionActive &&
                          'after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-amber-500',
                      )}
                      aria-expanded={expanded === link.label}
                      aria-haspopup="true"
                      aria-current={sectionActive ? 'page' : undefined}
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                    </button>
                    <div
                      className={cn(
                        'invisible absolute top-full left-1/2 z-50 min-w-[180px] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all group-hover/dropdown:visible group-hover/dropdown:translate-y-0 group-hover/dropdown:opacity-100',
                        expanded === link.label && 'visible -translate-x-1/2 translate-y-0 opacity-100',
                      )}
                    >
                      <div className="rounded-2xl border border-navy-900/8 bg-white p-2 shadow-lift">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={({ isActive }) =>
                              cn(
                                'block rounded-xl px-3 py-2.5 text-center text-sm font-semibold transition-colors hover:bg-cream-100',
                                isActive
                                  ? 'bg-amber-100 text-navy-900'
                                  : 'text-navy-900',
                              )
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      cn(
                        'relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors',
                        solid
                          ? isActive
                            ? 'bg-amber-100 text-navy-900'
                            : 'text-navy-800 hover:bg-navy-900/5 hover:text-navy-900'
                          : isActive
                            ? 'bg-white/20 text-white'
                            : 'text-white/85 hover:bg-white/10 hover:text-white',
                        isActive &&
                          'after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-amber-500',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
              )
            })}
          </ul>
          <ButtonLink to="/donate" variant="amber" size="sm" className="ml-1">
            Donate
          </ButtonLink>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl lg:hidden',
            solid ? 'text-navy-900 hover:bg-navy-900/5' : 'text-white hover:bg-white/10',
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-navy-900/8 bg-cream-50 lg:hidden"
          >
            <div className="container-page max-h-[calc(100svh-4rem)] space-y-1 overflow-y-auto py-4">
              {NAV_LINKS.map((link) => {
                const sectionActive = isSectionActive(link)
                return (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        className={cn(
                          'flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-bold',
                          sectionActive ? 'bg-amber-100 text-navy-900' : 'text-navy-900',
                        )}
                        onClick={() =>
                          setExpanded((current) => (current === link.label ? null : link.label))
                        }
                        aria-expanded={expanded === link.label}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            'h-4 w-4 transition-transform',
                            expanded === link.label && 'rotate-180',
                          )}
                        />
                      </button>
                      {expanded === link.label && (
                        <div className="mb-2 ml-2 space-y-1 border-l border-navy-900/10 pl-3">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.href}
                              to={child.href}
                              className={({ isActive }) =>
                                cn(
                                  'block rounded-lg px-3 py-3 text-sm font-semibold',
                                  isActive
                                    ? 'bg-amber-100 text-navy-900'
                                    : 'text-navy-800 hover:bg-cream-200',
                                )
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.href}
                      end={link.href === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-xl px-3 py-3 font-bold',
                          isActive
                            ? 'bg-amber-100 text-navy-900'
                            : 'text-navy-900 hover:bg-cream-200',
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
                )
              })}
              <div className="pt-3">
                <ButtonLink to="/donate" variant="amber" className="w-full">
                  Donate
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
