import { AnimatedCounter } from '@/components/motion/AnimatedCounter'
import type { StatItem } from '@/types'
import { cn } from '@/utils'

type Props = {
  stats: StatItem[]
  className?: string
  light?: boolean
}

export function ImpactCard({
  label,
  value,
  suffix,
  prefix,
  note,
  light,
}: StatItem & { light?: boolean }) {
  return (
    <div
      className={cn(
        'rounded-2xl p-4 text-center sm:p-6',
        light
          ? 'border border-white/10 bg-white/5 backdrop-blur'
          : 'border border-navy-900/8 bg-white shadow-soft',
      )}
    >
      <p
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-5xl',
          light ? 'text-amber-400' : 'text-navy-900',
        )}
      >
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </p>
      <p className={cn('mt-2 font-semibold', light ? 'text-white' : 'text-navy-900')}>
        {label}
      </p>
      {note && (
        <p className={cn('mt-1 text-sm', light ? 'text-white/60' : 'text-slate-soft')}>
          {note}
        </p>
      )}
    </div>
  )
}

export function Statistics({ stats, className, light }: Props) {
  const cols =
    stats.length >= 5
      ? 'sm:grid-cols-2 lg:grid-cols-5'
      : stats.length === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={cn('grid gap-4', cols, className)}>
      {stats.map((stat) => (
        <ImpactCard key={stat.id} {...stat} light={light} />
      ))}
    </div>
  )
}
