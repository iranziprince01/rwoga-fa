import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/hero/Hero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SEO } from '@/components/ui/SEO'
import { Statistics } from '@/components/stats/Statistics'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import {
  aboutContent,
  focusAreas,
  IMAGES,
  projects,
  stats,
  testimonials,
} from '@/data/content'
import { PartnerLogoGrid } from '@/components/cards/PartnerLogoGrid'
import { Testimonials } from '@/components/testimonials/Testimonials'
import { getIcon } from '@/utils'

export function HomePage() {
  const featured = projects.find((p) => p.id === 'sewing-hope') ?? projects[0]

  return (
    <>
      <SEO path="/" />
      <Hero />

      <section className="relative -mt-10 pb-20">
        <div className="container-page">
          <Reveal>
            <div className="rounded-3xl border border-navy-900/8 bg-white/90 p-6 shadow-lift backdrop-blur sm:p-8">
              <p className="mb-6 text-center text-sm font-semibold tracking-[0.14em] text-blue-500 uppercase">
                Our Impact
              </p>
              <Statistics stats={stats} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gradient-cream py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <CloudinaryImage
                src={IMAGES.whoWeAre}
                alt="Members of Rwoga Family Association standing together"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Who We Are"
              title="From Five Students to a Growing Movement"
            />
            <div className="mt-6 space-y-4">
              {aboutContent.whoWeAreHome.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="prose-rwoga">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink to="/about" variant="amber" size="lg">
                More About Us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Focus Areas"
            title="Where we invest our energy"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = getIcon(area.icon)
              return (
                <Reveal key={area.title} delay={index * 0.05}>
                  <article className="h-full rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-100 text-navy-900">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-navy-900">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{area.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <CloudinaryImage
                src={featured.image}
                alt="Featured impact story from Rwoga community work"
                width={1000}
                height={800}
                className="aspect-[5/4] w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader eyebrow="Featured Impact" title={featured.title} />
            <p className="mt-6 prose-rwoga">{featured.summary}</p>
            <div className="mt-8">
              <ButtonLink to="/impact" variant="amber" size="lg">
                Read More
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Community"
            title="What people are saying"
            light
            className="mb-12"
          />
          <Testimonials items={testimonials} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Partners & Supporters"
            title="Building with those who believe in refugee communities"
            align="center"
            className="mb-12"
          />
          <PartnerLogoGrid />
          <div className="mt-8 text-center">
            <ButtonLink to="/contact" variant="amber" size="lg">
              Partner With Us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Get Involved"
            title="Every contribution creates opportunity."
            description="Whether you choose to partner, volunteer, sponsor, or donate, your support helps refugee communities build brighter futures."
            primaryLabel="Get Involved"
            primaryTo="/get-involved"
            secondaryLabel="Support Our Mission"
            secondaryTo="/donate"
          />
        </div>
      </section>
    </>
  )
}
