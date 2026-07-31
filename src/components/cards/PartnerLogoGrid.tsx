import { partnerLogos } from '@/data/content'
import { cn } from '@/utils'
import { Reveal } from '@/components/motion/Reveal'

type Props = {
  className?: string
  /** Use darker tiles for dark page sections */
  tone?: 'light' | 'dark'
}

export function PartnerLogoGrid({ className, tone = 'light' }: Props) {
  return (
    <div className={cn('grid grid-cols-2 gap-4 md:grid-cols-4', className)}>
      {partnerLogos.map((partner, index) => (
        <Reveal key={partner.id} delay={index * 0.05}>
          <div
            className={cn(
              'flex aspect-[3/1.45] items-center justify-center overflow-hidden rounded-2xl px-4 py-5',
              tone === 'light'
                ? 'border border-navy-900/8 bg-white shadow-soft'
                : 'border border-white/10 bg-white',
            )}
          >
            <img
              src={partner.src}
              alt={partner.name}
              loading="lazy"
              decoding="async"
              className="max-h-16 w-full max-w-[200px] scale-110 object-contain sm:max-h-20 sm:scale-125"
            />
          </div>
        </Reveal>
      ))}
    </div>
  )
}
