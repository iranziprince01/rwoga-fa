import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { Gallery } from '@/components/media/Gallery'
import { galleryImages } from '@/data/content'

export function GalleryPage() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Moments from Rwoga’s community, education, leadership, and outreach work across Rwanda."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="Moments from our journey"
        description="A visual collection of community, learning, and leadership across the association."
      />

      <section className="section-pad">
        <div className="container-page">
          <Gallery images={galleryImages} />
        </div>
      </section>
    </>
  )
}
