import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Gallery } from '@/components/media/Gallery'
import { CTA } from '@/components/cta/CTA'
import { galleryImages } from '@/data/content'

export function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Explore moments of community, learning, and leadership from the Rwoga Family Association journey."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="Community, education, and leadership"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Visual stories"
            title="Community outreach, education, women empowerment, leadership, events, and volunteers"
            className="mb-10"
          />
          <Gallery images={galleryImages} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Share"
            title="Have photos from a Rwoga gathering?"
            description="We welcome member-consented images that honor dignity and storytelling ethics."
            primaryLabel="Get in touch"
            primaryTo="/contact"
            secondaryLabel="Read the news"
            secondaryTo="/news"
            variant="light"
          />
        </div>
      </section>
    </>
  )
}
