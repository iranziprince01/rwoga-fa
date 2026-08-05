import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Reveal } from '@/components/motion/Reveal'
import { cn, toTitleCase } from '@/utils'

type Props = {
  eyebrow?: string
  title: string
  description: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
  variant?: 'light' | 'dark' | 'amber'
  className?: string
}

export function CTA({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  variant = 'dark',
  className,
}: Props) {
  const styles = {
    dark: 'gradient-mesh text-white',
    light: 'bg-cream-100 text-navy-900 border border-navy-900/8',
    amber: 'bg-gradient-to-br from-amber-100 via-cream-100 to-cream-50 text-navy-900 border border-amber-500/20',
  }

  return (
    <Reveal>
      <section
        className={cn(
          'relative overflow-hidden rounded-2xl px-5 py-10 sm:rounded-3xl sm:px-10 sm:py-16 lg:px-14',
          styles[variant],
          className,
        )}
      >
        <div className="relative z-10 max-w-2xl min-w-0">
          {eyebrow && (
            <p
              className={cn(
                'mb-3 text-xs font-semibold tracking-[0.14em] uppercase sm:text-sm',
                variant === 'dark' ? 'text-amber-400' : 'text-blue-500',
              )}
            >
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance break-words sm:text-4xl">
            {toTitleCase(title)}
          </h2>
          <p
            className={cn(
              'mt-4 text-base leading-relaxed break-words sm:text-lg',
              variant === 'dark' ? 'text-white/75' : 'text-navy-800/70',
            )}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              to={primaryTo}
              variant={variant === 'dark' ? 'amber' : 'primary'}
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            {secondaryLabel && secondaryTo && (
              <ButtonLink
                to={secondaryTo}
                variant={variant === 'dark' ? 'outline' : 'secondary'}
                size="lg"
                className={cn(
                  'w-full sm:w-auto',
                  variant === 'dark'
                    ? 'border-2 border-white bg-white/10 font-semibold text-white hover:bg-white/20'
                    : 'border-2 border-navy-900/25 font-semibold',
                )}
              >
                {secondaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            )}
          </div>
        </div>
        {variant === 'dark' && (
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"
            aria-hidden
          />
        )}
      </section>
    </Reveal>
  )
}
