import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/motion/Reveal'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { CTA } from '@/components/cta/CTA'
import { newsItems } from '@/data/content'

export function NewsPage() {
  return (
    <>
      <SEO
        title="News & Events"
        description="Latest news, community activities, upcoming events, success stories, and announcements from Rwoga Family Association."
        path="/news"
      />
      <PageHero
        eyebrow="News & Events"
        title="Latest news and community activities"
      />

      <section className="section-pad">
        <div className="container-page">
          <SectionHeader
            eyebrow="Updates"
            title="Success stories and announcements"
            className="mb-10"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {newsItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.06}>
                <article className="overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-soft">
                  <CloudinaryImage
                    src={item.image}
                    alt=""
                    width={800}
                    height={500}
                    className="aspect-[16/10] w-full"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold tracking-[0.12em] text-blue-500 uppercase">
                      {item.category} · {item.date}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold text-navy-900 text-balance">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy-800/70">{item.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <CTA
            eyebrow="Stay close"
            title="Want updates in your inbox?"
            description="Use the newsletter signup in the footer, or reach out directly if you’re a journalist or partner."
            primaryLabel="Contact"
            primaryTo="/contact"
            secondaryLabel="About Rwoga"
            secondaryTo="/about"
          />
        </div>
      </section>
    </>
  )
}
