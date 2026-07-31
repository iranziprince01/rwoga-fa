import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { useScrollToHash } from '@/hooks/useScrollToHash'

export function MainLayout() {
  const location = useLocation()
  useScrollToHash()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900 focus:shadow-lift"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
