import { useMemo, useState } from 'react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { Gallery } from '@/components/media/Gallery'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { galleryImages, projects } from '@/data/content'
import type { ProjectStatus } from '@/types'
import { cn } from '@/utils'

const filters: Array<'all' | ProjectStatus> = ['all', 'active', 'planned', 'completed']

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('all')
  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  )

  return (
    <>
      <SEO
        title="Projects"
        description="Discover Rwoga projects including Sewing Hope, Learning Without Limits, Food With Dignity, and Recognizing Excellence."
        path="/projects"
      />
      <PageHero
        eyebrow="Projects"
        title="Stories of collective action"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project status filters">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors',
                  filter === item
                    ? 'bg-navy-900 text-white'
                    : 'border border-navy-900/10 bg-white text-navy-800 hover:bg-cream-100',
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page space-y-16">
          <SectionHeader
            eyebrow="In depth"
            title="Project stories & highlights"
            description="Qualitative progress markers, not inflated metrics. We share what we are building and learning."
          />
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-28 grid gap-8 rounded-3xl border border-navy-900/8 bg-white p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
            >
              <Reveal>
                <CloudinaryImage
                  src={project.image}
                  alt=""
                  width={800}
                  height={600}
                  className="aspect-[5/4] w-full rounded-2xl"
                />
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-sm font-semibold tracking-[0.12em] text-blue-500 uppercase">
                  {project.category} · {project.status}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy-900">{project.title}</h3>
                <p className="mt-3 text-navy-800/75 leading-relaxed">{project.description}</p>
                <h4 className="mt-6 text-sm font-semibold tracking-[0.12em] text-navy-900 uppercase">
                  Impact highlights
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.impactHighlights.map((item) => (
                    <li key={item} className="text-sm text-navy-800/75">
                      · {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Gallery"
            title="Moments from the work"
            description="Placeholder imagery representing the atmosphere of learning, leadership, and community."
            className="mb-10"
          />
          <Gallery images={galleryImages.slice(0, 6)} showFilters={false} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Impact"
            title="Follow the outcomes as they grow"
            description="Visit our Impact page for statistics framing, timeline progress, and community stories."
            primaryLabel="View impact"
            primaryTo="/impact"
            secondaryLabel="Partner with us"
            secondaryTo="/partners"
            variant="light"
          />
        </div>
      </section>
    </>
  )
}
