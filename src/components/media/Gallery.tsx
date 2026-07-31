import { useMemo, useState } from 'react'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import type { GalleryImage } from '@/types'
import { cn } from '@/utils'
import { Reveal } from '@/components/motion/Reveal'

type Props = {
  images: GalleryImage[]
  className?: string
  showFilters?: boolean
}

export function Gallery({ images, className, showFilters = true }: Props) {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(images.map((i) => i.category)))],
    [images],
  )
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? images : images.filter((i) => i.category === active)

  return (
    <div className={className}>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                active === category
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-navy-800 hover:bg-cream-200 border border-navy-900/10',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <Reveal key={image.id} delay={index * 0.05}>
            <figure className="group overflow-hidden rounded-2xl bg-cream-200 shadow-soft">
              <div className="aspect-[4/3] overflow-hidden">
                <CloudinaryImage
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {(image.caption || image.category) && (
                <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="text-sm font-medium text-navy-900">
                    {image.caption ?? image.alt}
                  </span>
                  <span className="text-xs tracking-wide text-slate-soft uppercase">
                    {image.category}
                  </span>
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
