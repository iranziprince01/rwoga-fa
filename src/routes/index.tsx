import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
)
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ProgramsPage = lazy(() =>
  import('@/pages/ProgramsPage').then((m) => ({ default: m.ProgramsPage })),
)
const ProgramDetailPage = lazy(() =>
  import('@/pages/ProgramDetailPage').then((m) => ({ default: m.ProgramDetailPage })),
)
const ImpactPage = lazy(() =>
  import('@/pages/ImpactPage').then((m) => ({ default: m.ImpactPage })),
)
const LeadershipPage = lazy(() =>
  import('@/pages/LeadershipPage').then((m) => ({ default: m.LeadershipPage })),
)
const GetInvolvedPage = lazy(() =>
  import('@/pages/GetInvolvedPage').then((m) => ({ default: m.GetInvolvedPage })),
)
const DonatePage = lazy(() =>
  import('@/pages/DonatePage').then((m) => ({ default: m.DonatePage })),
)
const TransparencyPage = lazy(() =>
  import('@/pages/TransparencyPage').then((m) => ({ default: m.TransparencyPage })),
)
const GalleryPage = lazy(() =>
  import('@/pages/GalleryPage').then((m) => ({ default: m.GalleryPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

function PageLoader() {
  return (
    <div className="flex min-h-[50svh] items-center justify-center pt-28" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-pulse rounded-full bg-amber-500/40" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="programs/:programId" element={<ProgramDetailPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="donate" element={<DonatePage />} />
          <Route path="transparency" element={<TransparencyPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
