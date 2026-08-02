import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { programs } from '@/data/content'
import { getIcon } from '@/utils'

export function ProgramDetailPage() {
  const { programId } = useParams<{ programId: string }>()
  const program = programs.find((item) => item.id === programId)
  const Icon = program ? getIcon(program.icon) : null

  if (!program || !Icon) {
    return <Navigate to="/programs" replace />
  }

  const currentIndex = programs.findIndex((item) => item.id === program.id)
  const previous = programs[(currentIndex - 1 + programs.length) % programs.length]
  const next = programs[(currentIndex + 1) % programs.length]

  return (
    <>
      <SEO
        title={program.title}
        description={program.summary}
        path={`/programs/${program.id}`}
      />
      <PageHero eyebrow="Program" title={program.title} />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mb-8">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All programs
            </Link>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <CloudinaryImage
                  src={program.image}
                  alt=""
                  width={1000}
                  height={800}
                  className={['aspect-[5/4] w-full', program.imagePosition].filter(Boolean).join(' ')}
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 text-navy-900">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <p className="text-sm font-semibold tracking-[0.12em] text-blue-500 uppercase">
                Overview
              </p>
              <p className="mt-4 prose-rwoga">{program.description}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-navy-900/8 bg-white p-8 shadow-soft">
              <h2 className="text-sm font-semibold tracking-[0.12em] text-blue-500 uppercase">
                Expected outcomes
              </h2>
              <ul className="mt-5 space-y-3">
                {program.outcomes.map((item) => (
                  <li key={item} className="text-base leading-relaxed text-navy-800/75">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-navy-900/8 bg-white p-8 shadow-soft">
              <h2 className="text-sm font-semibold tracking-[0.12em] text-blue-500 uppercase">
                Future goals
              </h2>
              <ul className="mt-5 space-y-3">
                {program.futureGoals.map((item) => (
                  <li key={item} className="text-base leading-relaxed text-navy-800/75">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ButtonLink to={`/programs/${previous.id}`} variant="secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {previous.title}
          </ButtonLink>
          <ButtonLink to={`/programs/${next.id}`} variant="secondary">
            {next.title}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Get involved"
            title="Help this program grow"
            description="Volunteer, partner, or contribute resources so more refugee communities can benefit."
            primaryLabel="Get involved"
            primaryTo="/get-involved"
            secondaryLabel="Donate"
            secondaryTo="/donate"
            variant="amber"
          />
        </div>
      </section>
    </>
  )
}
