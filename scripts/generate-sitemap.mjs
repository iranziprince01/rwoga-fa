import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const SITE_URL = 'https://rwoga.org'

/** Keep in sync with src/constants/seoRoutes.ts */
const ROUTES = [
  '/',
  '/about',
  '/programs',
  '/programs/education-support',
  '/programs/student-leadership',
  '/programs/women-empowerment',
  '/programs/community-outreach',
  '/programs/career-development',
  '/programs/mentorship',
  '/programs/digital-literacy',
  '/impact',
  '/leadership',
  '/get-involved',
  '/donate',
  '/transparency',
  '/gallery',
  '/contact',
]

const lastmod = new Date().toISOString().slice(0, 10)

const urls = ROUTES.map((path) => {
  const loc = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const priority = path === '/' ? '1.0' : path.startsWith('/programs/') ? '0.7' : '0.8'
  const changefreq = path === '/' ? 'weekly' : path.startsWith('/programs/') ? 'monthly' : 'monthly'

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(root, 'public', 'sitemap.xml'), sitemap, 'utf8')
console.log(`Generated sitemap with ${ROUTES.length} URLs → public/sitemap.xml`)
