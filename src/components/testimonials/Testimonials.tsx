import { Quote } from 'lucide-react'
import type { Testimonial } from '@/types'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { Reveal } from '@/components/motion/Reveal'
import { cn } from '@/utils'

type Props = {
  items: Testimonial[]
  className?: string
}

export function Testimonials({ items, className }: Props) {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-3', className)}>
      {items.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.08}>
          <blockquote className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft">
            <Quote className="h-8 w-8 text-amber-500" aria-hidden />
            <p className="mt-4 flex-1 text-navy-800/80 leading-relaxed">“{item.quote}”</p>
            <footer className="mt-6 flex items-center gap-3">
              {item.image && (
                <CloudinaryImage
                  src={item.image}
                  alt=""
                  width={80}
                  height={80}
                  className="h-11 w-11 rounded-full"
                />
              )}
              <div>
                <cite className="not-italic font-semibold text-navy-900">{item.name}</cite>
                <p className="text-sm text-slate-soft">{item.role}</p>
              </div>
            </footer>
          </blockquote>
        </Reveal>
      ))}
    </div>
  )
}
