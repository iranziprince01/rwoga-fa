import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site'
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  seoImageUrl,
  type BreadcrumbItem,
  type JsonLd,
} from '@/utils/seo'

type SEOProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  breadcrumbs?: BreadcrumbItem[]
  jsonLd?: JsonLd | JsonLd[]
}

function toJsonLdArray(jsonLd?: JsonLd | JsonLd[]): JsonLd[] {
  if (!jsonLd) return []
  return Array.isArray(jsonLd) ? jsonLd : [jsonLd]
}

export function SEO({
  title,
  description = SITE.description,
  path = '',
  image,
  type = 'website',
  noindex = false,
  breadcrumbs,
  jsonLd,
}: SEOProps) {
  const fullTitle = title ? `${title} · ${SITE.shortName}` : `${SITE.name} · ${SITE.tagline}`
  const url = absoluteUrl(path)
  const shareImage = seoImageUrl(image)
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  const structuredData = [
    ...toJsonLdArray(jsonLd),
    ...(breadcrumbs && breadcrumbs.length > 1 ? [buildBreadcrumbSchema(breadcrumbs)] : []),
  ]

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SITE.keywords} />
      <meta name="author" content={SITE.name} />
      <meta name="robots" content={robots} />
      {!noindex && <link rel="canonical" href={url} />}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale.replace('_', '-')} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:alt" content={`${SITE.name} — ${description}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:image:alt" content={`${SITE.name} — ${description}`} />

      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
