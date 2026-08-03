import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { contributions, getInvolvedPaths } from '@/data/content'
import { getIcon } from '@/utils'

const paths = getInvolvedPaths

export function GetInvolvedPage() {
  return (
    <>
      <SEO
        title="Get Involved"
        description="Become a member, mentor, partner, or donate. Join Rwoga Family Association in supporting refugee youth leadership."
        path="/get-involved"
      />
      <PageHero
        eyebrow="Get involved"
        title="There are many ways to walk with us"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paths.map((path, index) => (
              <Reveal key={path.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-3xl border border-navy-900/8 bg-white p-8 shadow-soft">
                  <h2 className="font-display text-2xl font-bold text-navy-900">{path.title}</h2>
                  <p className="mt-3 flex-1 text-navy-800/70 leading-relaxed">{path.description}</p>
                  <div className="mt-6">
                    <ButtonLink
                      to={path.to}
                      variant="primary"
                      size="lg"
                      external={path.external}
                      className="w-full font-semibold"
                    >
                      {path.label}
                    </ButtonLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            title="Give what you have: skills, tools, or presence"
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contributions.map((item, index) => {
              const Icon = getIcon(item.icon)
              return (
                <Reveal key={item.id} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-5 shadow-soft">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-100 text-navy-900">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Ready?"
            title="Tell us how you’d like to contribute"
            description="Share a short note about your skills, availability, or partnership idea. We’ll follow up with care."
            primaryLabel="Contact Rwoga"
            primaryTo="/contact"
            secondaryLabel="Donate"
            secondaryTo="/donate"
          />
        </div>
      </section>
    </>
  )
}
