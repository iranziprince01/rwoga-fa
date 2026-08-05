import { cn, toTitleCase } from '@/utils'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        'max-w-3xl min-w-0',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-xs font-semibold tracking-[0.14em] uppercase sm:text-sm',
            light ? 'text-amber-400' : 'text-blue-500',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-2xl font-bold tracking-tight text-balance break-words sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-navy-900',
        )}
      >
        {title.includes('\n') ? (
          title.split('\n').map((line) => (
            <span key={line} className="block">
              {toTitleCase(line)}
            </span>
          ))
        ) : (
          toTitleCase(title)
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed break-words sm:text-lg',
            light ? 'text-white/75' : 'text-navy-800/70',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
