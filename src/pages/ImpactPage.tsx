import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Statistics } from '@/components/stats/Statistics'
import { Timeline } from '@/components/timeline/Timeline'
import { StoryCard } from '@/components/cards/StoryCard'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { stats, stories, timeline } from '@/data/content'

const impactStats = stats.filter((s) => s.id !== 'founded')

export function ImpactPage() {
  return (
    <>
      <SEO
        title="Impact"
        description="Explore Rwoga’s impact across members, communities, projects, and lives reached through education, leadership, and collective action."
        path="/impact"
      />
      <PageHero eyebrow="Impact" title="Progress that creates opportunity" />

      <section className="bg-amber-100 section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="At a glance"
            title="Impact by the numbers"
            className="mb-10"
          />
          <Statistics stats={impactStats} />
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-20">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="From five students to a growing community"
              />
              <Timeline events={timeline.slice(0, 3)} className="mt-10" />
            </div>

            <div className="lg:pt-2">
              <Timeline events={timeline.slice(3)} startIndex={3} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Stories"
            title="Stories that show the work"
            className="mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {stories.map((story, index) => (
              <Reveal key={story.id} delay={index * 0.06}>
                <StoryCard story={story} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <CTA
            eyebrow="Support the mission"
            title="Every contribution creates opportunity"
            description="Partner, volunteer, sponsor, or donate to help refugee communities build brighter futures."
            primaryLabel="Support Our Mission"
            primaryTo="/donate"
            secondaryLabel="Get Involved"
            secondaryTo="/get-involved"
            variant="amber"
          />
        </div>
      </section>
    </>
  )
}
