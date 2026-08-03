import { Link } from 'react-router-dom'
import { SITE } from '@/constants/site'
import { cn } from '@/utils'

type LogoProps = {
  variant?: 'white' | 'color'
  className?: string
  imgClassName?: string
  to?: string
}

export function Logo({
  variant = 'color',
  className,
  imgClassName,
  to = '/',
}: LogoProps) {
  const src = SITE.logos[variant]

  return (
    <Link
      to={to}
      className={cn('inline-flex shrink-0 items-center leading-none', className)}
      aria-label={`${SITE.name} home`}
    >
      <img
        src={src}
        alt={SITE.name}
        width={130}
        height={90}
        className={cn(
          'block w-auto object-contain object-left',
          imgClassName ?? 'h-12 sm:h-14',
        )}
        decoding="async"
      />
    </Link>
  )
}
