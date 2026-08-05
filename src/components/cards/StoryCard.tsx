import type { Story } from '@/types'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { cn } from '@/utils'

type Props = {
  story: Story
  className?: string
}

export function StoryCard({ story, className }: Props) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-soft transition-all duration-500 hover:shadow-lift',
        className,
      )}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <CloudinaryImage
          src={story.image}
          alt=""
          width={800}
          height={500}
          className="h-full w-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold text-navy-900 text-balance sm:text-xl">
          {story.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed break-words text-navy-800/75 sm:text-base">
          {story.excerpt}
        </p>
        {story.author ? (
          <p className="mt-5 text-sm font-medium text-navy-900">
            {story.author}
            {story.role ? (
              <span className="font-normal text-slate-soft"> · {story.role}</span>
            ) : null}
          </p>
        ) : null}
      </div>
    </article>
  )
}
