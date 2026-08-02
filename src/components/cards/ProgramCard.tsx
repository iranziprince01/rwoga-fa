import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Program } from '@/types'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { cn, getIcon } from '@/utils'

type Props = {
  program: Program
  className?: string
}

export function ProgramCard({ program, className }: Props) {
  const Icon = getIcon(program.icon)

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <CloudinaryImage
          src={program.image}
          alt=""
          width={800}
          height={500}
          className={cn(
            'h-full w-full transition-transform duration-700 group-hover:scale-105',
            program.imagePosition,
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
        <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-navy-900 backdrop-blur">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-navy-900">{program.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">{program.summary}</p>
        <Link
          to={`/programs/${program.id}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 transition-colors hover:text-navy-900"
        >
          Explore program
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
