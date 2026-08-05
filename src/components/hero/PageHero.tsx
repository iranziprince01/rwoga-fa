import { FadeIn } from '@/components/motion/Reveal'
import { cn, toTitleCase } from '@/utils'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function PageHero({ eyebrow, title, description, className }: Props) {
  return (
    <section className={cn('relative overflow-hidden gradient-mesh pt-28 pb-14 sm:pt-36 sm:pb-20', className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.12) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="container-page relative min-w-0">
        <FadeIn>
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-amber-400 uppercase sm:text-sm">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              'font-display font-extrabold tracking-tight text-white text-balance break-words',
              title.includes('\n')
                ? 'max-w-4xl text-3xl leading-tight sm:text-5xl lg:text-6xl'
                : 'max-w-3xl text-3xl sm:text-5xl lg:text-6xl',
            )}
          >
            {title.includes('\n') ? (
              title.split('\n').map((line) => (
                <span key={line} className="block sm:whitespace-nowrap">
                  {toTitleCase(line)}
                </span>
              ))
            ) : (
              toTitleCase(title)
            )}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
