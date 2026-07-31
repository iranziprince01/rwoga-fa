import type { ButtonHTMLAttributes, ReactNode } from 'react'
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
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  children?: ReactNode
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
