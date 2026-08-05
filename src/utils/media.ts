import { blobAssets, type BlobAssetPath } from '@/data/blobAssets'

/**
 * Resolve a local public photo path to its Vercel Blob CDN URL.
 * Absolute http(s) URLs and non-blob assets (e.g. SVGs) pass through unchanged.
 */
export function mediaUrl(path: string): string {
  if (!path) return path
  if (path.startsWith('http://') || path.startsWith('https://')) return path

  const key = (path.startsWith('/') ? path : `/${path}`) as BlobAssetPath
  return blobAssets[key] ?? path
}
