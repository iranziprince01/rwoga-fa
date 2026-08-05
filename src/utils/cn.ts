import { CLOUDINARY } from '@/constants/site'
import { mediaUrl } from './media'

type CloudinaryOptions = {
  width?: number
  height?: number
  crop?: 'fill' | 'fit' | 'limit'
  quality?: 'auto' | number
  format?: 'auto' | 'webp' | 'jpg' | 'png'
}

/**
 * Resolve image sources for the app.
 * Local photo paths map to Vercel Blob CDN URLs; Cloudinary public IDs still work.
 */
export function getImageUrl(
  source: string,
  options: CloudinaryOptions = {},
): string {
  if (source.startsWith('http') || source.startsWith('/')) {
    return mediaUrl(source)
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
