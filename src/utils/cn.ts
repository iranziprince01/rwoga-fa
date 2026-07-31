import { CLOUDINARY } from '@/constants/site'

type CloudinaryOptions = {
  width?: number
  height?: number
  crop?: 'fill' | 'fit' | 'limit'
  quality?: 'auto' | number
  format?: 'auto' | 'webp' | 'jpg' | 'png'
}

/**
 * Cloudinary-ready image helper.
 * Falls back to Unsplash/local placeholders when using full URLs or relative paths.
 */
export function getImageUrl(
  source: string,
  options: CloudinaryOptions = {},
): string {
  if (source.startsWith('http') || source.startsWith('/')) {
    return source
  }

  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
  } = options

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
    width || height ? `c_${crop}` : null,
  ]
    .filter(Boolean)
    .join(',')

  return `${CLOUDINARY.baseUrl}/${CLOUDINARY.cloudName}/image/upload/${transforms}/${source}`
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
