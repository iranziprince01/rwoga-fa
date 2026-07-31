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

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="At a glance"
            title="Impact by the numbers"
            className="mb-10"
          />
          <Statistics stats={impactStats} />
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Our Story"
            title="How impact has grown"
          />
          <Timeline events={timeline} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Stories"
            title="Challenge. Action. Impact. Next Steps."
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

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Support the mission"
            title="Every contribution creates opportunity"
            description="Partner, volunteer, sponsor, or donate to help refugee communities build brighter futures."
            primaryLabel="Support Our Mission"
            primaryTo="/donate"
            secondaryLabel="Become a Partner"
            secondaryTo="/partners"
            variant="amber"
          />
        </div>
      </section>
    </>
  )
}
