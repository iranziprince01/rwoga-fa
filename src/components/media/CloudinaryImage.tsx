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
 * Cloudinary-ready image component.
 * Pass a Cloudinary public ID or a full URL / local path.
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
