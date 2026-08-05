import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { Reveal } from '@/components/motion/Reveal'
import type { GalleryImage } from '@/types'
import { cn } from '@/utils'

type Props = {
  images: GalleryImage[]
  className?: string
}

/** Varied mosaic spans for a modern masonry feel */
const mosaicPattern = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  'sm:row-span-2',
  '',
  'sm:col-span-2',
  '',
  '',
  'sm:row-span-2',
  'sm:col-span-2',
  '',
  '',
] as const

export function Gallery({ images, className }: Props) {
  const titleId = useId()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex === null ? null : images[activeIndex]

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current
      return (current - 1 + images.length) % images.length
    })
  }, [images.length])
  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current
      return (current + 1) % images.length
    })
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, close, showNext, showPrev])

  return (
    <>
      <div
        className={cn(
          'grid auto-rows-[140px] grid-cols-2 gap-2.5 sm:auto-rows-[180px] sm:grid-cols-3 sm:gap-3 lg:auto-rows-[220px] lg:grid-cols-4 lg:gap-4',
          className,
        )}
      >
        {images.map((image, index) => {
          const span = mosaicPattern[index % mosaicPattern.length]
          return (
            <Reveal key={image.id} delay={Math.min(index * 0.03, 0.24)}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'group relative h-full w-full overflow-hidden rounded-2xl bg-cream-200 shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                  span,
                )}
                aria-label={`Open gallery image ${index + 1} of ${images.length}`}
              >
                <CloudinaryImage
                  src={image.src}
                  alt=""
                  width={900}
                  height={900}
                  className={cn(
                    'h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
                    image.imagePosition,
                  )}
                />
                <span className="pointer-events-none absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/15" />
              </button>
            </Reveal>
          )
        })}
      </div>

      {active && activeIndex !== null && typeof document !== 'undefined'
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={close}
            >
              <p id={titleId} className="sr-only">
                Gallery image {activeIndex + 1} of {images.length}
              </p>

              <button
                type="button"
                onClick={close}
                className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showPrev()
                }}
                className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showNext()
                }}
                className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:inline-flex"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>

              <div
                className="relative max-h-[85svh] w-full max-w-5xl overflow-hidden rounded-2xl shadow-lift"
                onClick={(event) => event.stopPropagation()}
              >
                <CloudinaryImage
                  src={active.src}
                  alt=""
                  width={1600}
                  height={1200}
                  className="max-h-[85svh] w-full object-contain"
                />
              </div>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showPrev()
                  }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    showNext()
                  }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
