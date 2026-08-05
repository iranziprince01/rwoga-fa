import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'amber' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-900 text-white hover:bg-navy-800 shadow-soft hover:shadow-lift',
  secondary:
    'bg-white text-navy-900 border border-navy-900/10 hover:border-navy-900/20 hover:bg-cream-100 shadow-soft',
  ghost: 'bg-transparent text-navy-900 hover:bg-navy-900/5',
  amber:
    'bg-amber-500 text-navy-950 hover:bg-amber-400 shadow-soft hover:shadow-lift font-semibold',
  outline:
    'bg-transparent text-white border-2 border-white/55 hover:bg-white/10 hover:border-white/80',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm md:h-9',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base sm:px-7',
}

type Props = {
  to: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  external?: boolean
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external,
}: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
    variants[variant],
    sizes[size],
    className,
  )

  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
