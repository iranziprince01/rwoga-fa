import { Check } from 'lucide-react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PartnerCard } from '@/components/cards/PartnerCard'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { partnerCategories } from '@/data/content'
import { PartnerLogoGrid } from '@/components/cards/PartnerLogoGrid'

const benefits = [
  'Direct relationship with a refugee-led youth association',
  'Opportunities to co-design ethical, youth-centered initiatives',
  'Visibility among communities committed to education and leadership',
  'Transparent partnership communication as reporting systems mature',
  'Meaningful engagement for mentors, staff, and student volunteers',
]

const opportunities = [
  {
    title: 'Mentorship partnerships',
    description: 'Connect professionals with members for guidance on education, careers, and leadership.',
  },
  {
    title: 'Learning & skills collaborations',
    description: 'Co-host workshops, bootcamps, or resource drives that remove barriers to learning.',
  },
  {
    title: 'Institutional sponsorship',
    description: 'Support program delivery, materials, devices, and community gatherings.',
  },
  {
    title: 'Research & storytelling',
    description: 'Collaborate on ethical documentation of learning and youth leadership practice.',
  },
]

export function PartnersPage() {
  return (
    <>
      <SEO
        title="Partners & Supporters"
        description="Partner with Rwoga Family Association to expand opportunity for refugee youth through mentorship, sponsorship, and collaboration."
        path="/partners"
      />
      <PageHero
        eyebrow="Partners & Supporters"
        title="Collaborate with purpose"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Why partner"
              title="Interested in partnering with us?"
              description="Our work is strengthened through collaboration with institutions, organizations, volunteers, and supporters who believe in creating opportunities for refugee communities. Contact our leadership team to explore meaningful collaboration opportunities."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="space-y-3 rounded-3xl border border-navy-900/8 bg-white p-8 shadow-soft">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-navy-800/80">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-sage-600" aria-hidden />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Opportunities"
            title="Ways we can collaborate"
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {opportunities.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-xl font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Partner categories"
            title="Who we hope to walk with"
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((partner, index) => (
              <Reveal key={partner.id} delay={index * 0.04}>
                <PartnerCard partner={partner} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Logo wall"
            title="Partners & Supporters"
            description="Organizations walking with refugee youth through education, protection, and opportunity."
            light
            align="center"
            className="mb-10"
          />
          <PartnerLogoGrid tone="dark" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Start a conversation"
            title="Contact our leadership team"
            description="Explore meaningful collaboration opportunities that create lasting opportunities for refugee communities."
            primaryLabel="Contact partnerships"
            primaryTo="/contact"
            secondaryLabel="Support Our Mission"
            secondaryTo="/donate"
            variant="amber"
          />
        </div>
      </section>
    </>
  )
}
