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
      className={cn('inline-flex shrink-0 items-center', className)}
      aria-label={`${SITE.name} home`}
    >
      <img
        src={src}
        alt={SITE.name}
        width={200}
        height={60}
        className={cn('h-12 w-auto object-contain sm:h-14', imgClassName)}
        decoding="async"
      />
    </Link>
  )
}
