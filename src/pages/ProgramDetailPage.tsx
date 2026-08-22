import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Handshake, HeartHandshake } from 'lucide-react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { programs } from '@/data/content'
import { getIcon } from '@/utils'
import { webPageSchema } from '@/utils/seo'

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

  const featuredLayouts: Record<string, { focusImage: string; deliverImage: string }> = {
    'education-support': { focusImage: '/p01.jpeg', deliverImage: '/p11.jpeg' },
    'student-leadership': { focusImage: '/p02.jpeg', deliverImage: '/p21.jpg' },
    'women-empowerment': { focusImage: '/p03.jpg', deliverImage: '/p31.jpg' },
    'community-outreach': { focusImage: '/p04.jpg', deliverImage: '/p41.jpg' },
    'career-development': { focusImage: '/p05.jpg', deliverImage: '/p51.jpg' },
    mentorship: { focusImage: '/p06.jpg', deliverImage: '/p61.jpeg' },
    'digital-literacy': { focusImage: '/p07.jpg', deliverImage: '/p71.jpg' },
  }
  const featured = featuredLayouts[program.id]

  return (
    <>
      <SEO
        title={program.title}
        description={program.summary}
        path={`/programs/${program.id}`}
        image={program.image}
        type="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: program.title, path: `/programs/${program.id}` },
        ]}
        jsonLd={webPageSchema({
          title: program.title,
          description: program.summary,
          path: `/programs/${program.id}`,
        })}
      />
      <PageHero eyebrow="Program" title={program.title} description={program.summary} />

      <section className="bg-white section-pad">
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
              <SectionHeader eyebrow="Overview" title={`How ${program.title} works`} />
              <div className="mt-6 space-y-4">
                {program.approach.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="prose-rwoga">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-navy-900/8 bg-cream-50 px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.12em] text-blue-500 uppercase">
                  Who it serves
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/75">{program.whoItServes}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Focus areas"
            title="What this program prioritizes"
            description="Clear priorities keep our work focused on lasting opportunity for refugee communities."
            className="mb-10"
          />
          {featured ? (
            <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {program.focusAreas.map((area, index) => (
                  <Reveal key={area} delay={index * 0.04}>
                    <div className="h-full rounded-2xl border border-navy-900/8 bg-white px-4 py-5 shadow-soft sm:px-5 sm:py-6">
                      <span className="font-display text-2xl font-bold text-amber-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold break-words text-navy-900 sm:mt-4 sm:text-lg">
                        {area}
                      </h3>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.08}>
                <div className="h-full overflow-hidden rounded-[2rem] shadow-lift">
                  <CloudinaryImage
                    src={featured.focusImage}
                    alt={`${program.title} focus areas`}
                    width={900}
                    height={900}
                    className="h-full min-h-[20rem] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {program.focusAreas.map((area, index) => (
                <Reveal key={area} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-navy-900/8 bg-white px-5 py-6 shadow-soft">
                    <span className="font-display text-2xl font-bold text-amber-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{area}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white section-pad">
        {featured ? (
          <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <CloudinaryImage
                  src={featured.deliverImage}
                  alt={`${program.title} activities`}
                  width={900}
                  height={700}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <SectionHeader
                eyebrow="How we deliver"
                title="Activities that create change"
                className="mb-8"
              />
              <ul className="space-y-4">
                {program.activities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-navy-900/8 bg-cream-50 px-5 py-4 shadow-soft"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-base leading-relaxed text-navy-800/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ) : (
          <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                eyebrow="How we deliver"
                title="Activities that create change"
                description="Each activity is grounded in real needs we have seen across camps, campuses, and member life."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ul className="space-y-4">
                {program.activities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-navy-900/8 bg-cream-50 px-5 py-4 shadow-soft"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-base leading-relaxed text-navy-800/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        )}
      </section>

      <section className="bg-cream-100 section-pad">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-navy-900/8 bg-white p-8 shadow-soft">
              <h2 className="text-sm font-semibold tracking-[0.12em] text-blue-500 uppercase">
                Expected outcomes
              </h2>
              <ul className="mt-5 space-y-3">
                {program.outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-navy-800/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                    {item}
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
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-navy-800/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Support this program"
            title="Sponsorship and partnership opportunities"
            description="Your support helps refugee communities access tools, training, and pathways that create lasting opportunity."
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {program.supportNeeds.map((need, index) => (
              <Reveal key={need} delay={index * 0.04}>
                <div className="flex h-full gap-4 rounded-2xl border border-navy-900/8 bg-cream-50 px-5 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-navy-900">
                    {index % 2 === 0 ? (
                      <HeartHandshake className="h-5 w-5" aria-hidden />
                    ) : (
                      <Handshake className="h-5 w-5" aria-hidden />
                    )}
                  </span>
                  <p className="text-base leading-relaxed text-navy-800/80">{need}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink to="/contact" variant="amber" size="lg" className="w-full sm:w-auto">
              Sponsor this program
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary" size="lg" className="w-full border-2 border-navy-900/25 font-semibold sm:w-auto">
              Become a partner
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-12 sm:py-16">
        <div className="container-page flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <ButtonLink
            to={`/programs/${previous.id}`}
            variant="secondary"
            className="w-full justify-start text-left sm:w-auto sm:max-w-[45%]"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="truncate">{previous.title}</span>
          </ButtonLink>
          <ButtonLink
            to={`/programs/${next.id}`}
            variant="secondary"
            className="w-full justify-end text-right sm:w-auto sm:max-w-[45%]"
          >
            <span className="truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
