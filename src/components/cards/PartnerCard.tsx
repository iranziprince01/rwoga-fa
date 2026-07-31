import type { PartnerCategory } from '@/types'
import { cn } from '@/utils'

type Props = {
  partner: PartnerCategory
  className?: string
}

export function PartnerCard({ partner, className }: Props) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift',
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 text-sm font-bold tracking-wide text-navy-700">
        {partner.name.slice(0, 2).toUpperCase()}
      </div>
      <h3 className="font-display text-lg font-bold text-navy-900">{partner.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{partner.description}</p>
    </article>
  )
}
