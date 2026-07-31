import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site'

type SEOProps = {
  title?: string
  description?: string
  path?: string
  image?: string
}

export function SEO({
  title,
  description = SITE.description,
  path = '',
  image,
}: SEOProps) {
  const fullTitle = title ? `${title} · ${SITE.shortName}` : `${SITE.name} · ${SITE.tagline}`
  const url = `${SITE.url}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.name} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
