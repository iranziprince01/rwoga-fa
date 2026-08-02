import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { ProgramCard } from '@/components/cards/ProgramCard'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { programs } from '@/data/content'

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
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
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
        <div className="container-page">
          <CTA
            eyebrow="Impact"
            title="See how programs create change"
            description="Explore our impact stories and the communities we serve across Rwanda."
            primaryLabel="View impact"
            primaryTo="/impact"
            secondaryLabel="Support programs"
            secondaryTo="/donate"
          />
        </div>
      </section>
    </>
  )
}
