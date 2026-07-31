import type { TimelineEvent } from '@/types'
import { Reveal } from '@/components/motion/Reveal'
import { cn } from '@/utils'

type Props = {
  events: TimelineEvent[]
  className?: string
  /** 0-based offset so numbering stays continuous across split timelines */
  startIndex?: number
}

export function Timeline({ events, className, startIndex = 0 }: Props) {
  return (
    <ol className={cn('relative space-y-0', className)}>
      {events.map((event, index) => {
        const number = startIndex + index + 1
        return (
          <li key={`${event.year}-${event.title}`} className="relative flex gap-6 pb-10 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 bg-cream-50 font-display text-xs font-bold text-navy-900">
                {String(number).padStart(2, '0')}
              </span>
              {index < events.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-gradient-to-b from-amber-500/60 to-navy-900/10" aria-hidden />
              )}
            </div>
            <Reveal className="pb-2 pt-1.5" delay={index * 0.06}>
              <p className="text-sm font-semibold tracking-[0.12em] text-blue-500 uppercase">
                {event.year}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-navy-900">{event.title}</h3>
              <p className="mt-2 max-w-2xl text-navy-800/70 leading-relaxed">{event.description}</p>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}
