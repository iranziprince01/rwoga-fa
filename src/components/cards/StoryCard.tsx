import type { Story } from '@/types'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { cn } from '@/utils'

type Props = {
  story: Story
  className?: string
}

export function StoryCard({ story, className }: Props) {
  const framework = [
    { label: 'Challenge', text: story.challenge },
    { label: 'Action', text: story.action },
    { label: 'Impact', text: story.impact },
    { label: 'Next Steps', text: story.nextSteps },
  ].filter((item) => item.text)

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
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-navy-900 text-balance">
          {story.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-800/70">{story.excerpt}</p>

        {framework.length > 0 ? (
          <dl className="mt-5 space-y-3 border-t border-navy-900/8 pt-5">
            {framework.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold tracking-[0.12em] text-amber-600 uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-navy-800/75">{item.text}</dd>
              </div>
            ))}
          </dl>
        ) : story.author ? (
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
