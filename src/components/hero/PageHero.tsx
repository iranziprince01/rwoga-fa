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
    <section className={cn('relative overflow-hidden gradient-mesh pt-32 pb-16 sm:pt-36 sm:pb-20', className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.12) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div className="container-page relative">
        <FadeIn>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-amber-400 uppercase">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {toTitleCase(title)}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
