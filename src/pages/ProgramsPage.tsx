import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProgramCard } from '@/components/cards/ProgramCard'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { programs } from '@/data/content'

const programPillars = [
  {
    title: 'Education & skills',
    description: 'Learning support, digital access, and career readiness that open doors.',
  },
  {
    title: 'Leadership & mentorship',
    description: 'Young refugee leaders grow through practice, guidance, and peer networks.',
  },
  {
    title: 'Community & livelihoods',
    description: 'Outreach and women’s empowerment that meet real needs with dignity.',
  },
]

export function ProgramsPage() {
  return (
    <>
      <SEO
        title="Programs"
        description="Explore Rwoga’s programs in student leadership, educational support, women empowerment, community outreach, mentorship, and more."
        path="/programs"
      />
      <PageHero
        eyebrow="Programs"
        title="How we empower refugee communities"
        description="From education and leadership to livelihoods and digital access, our programs turn compassion into practical opportunity across Rwanda."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {programPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-navy-900/8 bg-cream-50 px-6 py-7">
                  <p className="text-xs font-semibold tracking-[0.12em] text-blue-500 uppercase">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-bold text-navy-900">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our programs"
            title="Seven pathways for lasting opportunity"
            description="Each program is designed by refugee youth for refugee communities—grounded in real needs, delivered with care, and open to partners who want to grow impact with us."
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program, index) => (
              <Reveal key={program.id} delay={index * 0.05}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Work with us"
              title="Sponsor a program or become a partner"
              description="Organizations, institutions, and individuals can fund specific program needs—or partner with Rwoga to design lasting pathways for refugee youth."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact" variant="amber" size="lg">
                Sponsor a program
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="secondary"
                size="lg"
                className="border-2 border-navy-900/25 font-semibold"
              >
                Partner with us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-4">
              {[
                'Fund awards, learning kits, devices, or vocational tools',
                'Offer internships, mentorship, and professional expertise',
                'Co-design outreach and livelihood initiatives with our teams',
                'Help us publish clearer impact as programs grow',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-navy-900/8 bg-white px-5 py-4 text-navy-900 shadow-soft"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Impact"
            title="See how programs create change"
            description="Explore our impact stories, then sponsor a program or partner with us to help refugee communities build brighter futures."
            primaryLabel="View impact"
            primaryTo="/impact"
            secondaryLabel="Sponsor a program"
            secondaryTo="/contact"
            variant="amber"
          />
        </div>
      </section>
    </>
  )
}
