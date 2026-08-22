import { SITE } from '@/constants/site'
import { mediaUrl } from '@/utils/media'

export type BreadcrumbItem = {
  name: string
  path: string
}

export type JsonLd = Record<string, unknown>

/** Build an absolute URL for canonical, OG, and schema fields. */
export function absoluteUrl(path = ''): string {
  if (!path || path === '/') return SITE.url
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE.url}${normalized}`
}

/** Resolve share images to absolute URLs (Blob CDN or site origin). */
export function seoImageUrl(image?: string): string {
  const src = image ?? SITE.ogImage
  const resolved = mediaUrl(src)
  if (resolved.startsWith('http://') || resolved.startsWith('https://')) return resolved
  return absoluteUrl(resolved)
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logos.color),
    image: seoImageUrl(),
    description: SITE.description,
    email: SITE.email,
    foundingDate: SITE.founded,
    areaServed: {
      '@type': 'Country',
      name: 'Rwanda',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kigali',
      addressCountry: 'RW',
    },
    sameAs: [SITE.social.linkedin, SITE.social.instagram],
  }
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    description: SITE.description,
    publisher: {
      '@id': `${SITE.url}/#organization`,
    },
    inLanguage: SITE.locale,
  }
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      '@id': `${SITE.url}/#website`,
    },
    about: {
      '@id': `${SITE.url}/#organization`,
    },
    inLanguage: SITE.locale,
  }
}

/** Shared SEO props for standard inner pages (breadcrumbs + WebPage schema). */
export function pageSeoProps({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image?: string
}) {
  return {
    title,
    description,
    path,
    image,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: title, path },
    ] satisfies BreadcrumbItem[],
    jsonLd: webPageSchema({ title, description, path }),
  }
}
