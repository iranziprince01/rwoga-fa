/** Indexable static routes for sitemap generation and SEO audits. */
export const STATIC_SEO_ROUTES = [
  '/',
  '/about',
  '/programs',
  '/impact',
  '/leadership',
  '/get-involved',
  '/donate',
  '/transparency',
  '/gallery',
  '/contact',
] as const

/** Program detail slugs — keep in sync with `programs` in content.ts */
export const PROGRAM_SEO_ROUTES = [
  '/programs/education-support',
  '/programs/student-leadership',
  '/programs/women-empowerment',
  '/programs/community-outreach',
  '/programs/career-development',
  '/programs/mentorship',
  '/programs/digital-literacy',
] as const

export const ALL_SEO_ROUTES = [...STATIC_SEO_ROUTES, ...PROGRAM_SEO_ROUTES] as const
