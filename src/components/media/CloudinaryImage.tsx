import { getImageUrl, cn } from '@/utils'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  loading?: 'lazy' | 'eager'
  sizes?: string
}

/**
 * Image component that resolves local photos to Vercel Blob CDN URLs.
 * Pass a local public path, full URL, or Cloudinary public ID.
 */
export function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  sizes,
}: Props) {
  const url = getImageUrl(src, { width, height })

  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      sizes={sizes}
      className={cn('object-cover', className)}
    />
  )
}
