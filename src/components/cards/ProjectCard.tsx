import { Link } from 'react-router-dom'
import type { Project, ProjectStatus } from '@/types'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { cn } from '@/utils'

const statusStyles: Record<ProjectStatus, string> = {
  active: 'bg-sage-100 text-sage-600',
  completed: 'bg-blue-300/30 text-navy-800',
  planned: 'bg-amber-100 text-navy-800',
}

const statusLabels: Record<ProjectStatus, string> = {
  active: 'Active',
  completed: 'Completed',
  planned: 'Planned',
}

type Props = {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: Props) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <CloudinaryImage
          src={project.image}
          alt=""
          width={800}
          height={500}
          className="h-full w-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold',
              statusStyles[project.status],
            )}
          >
            {statusLabels[project.status]}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-navy-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">{project.summary}</p>
        <Link
          to={`/projects#${project.id}`}
          className="mt-5 text-sm font-semibold text-blue-500 transition-colors hover:text-navy-900"
        >
          View project details
        </Link>
      </div>
    </article>
  )
}
