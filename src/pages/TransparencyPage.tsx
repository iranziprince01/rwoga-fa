import { Download, FileText } from 'lucide-react'
import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { documents } from '@/data/content'
import { cn } from '@/utils'

const categories = [
  'Annual Reports',
  'Impact Reports',
] as const

export function TransparencyPage() {
  return (
    <>
      <SEO
        title="Resources"
        description="Rwoga’s resource hub for annual reports and impact reports."
        path="/transparency"
      />
      <PageHero
        eyebrow="Resources"
        title="Reports that build trust"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our commitment"
            title="Open resources for a growing association"
            description="Annual reports and impact reports will be published here as they are finalized."
            className="mb-12 max-w-3xl"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {categories.map((category, index) => (
              <Reveal key={category} delay={index * 0.04}>
                <div className="rounded-2xl border border-navy-900/8 bg-cream-100 px-4 py-5 text-center">
                  <p className="font-display text-sm font-bold text-navy-900">{category}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Documents"
            title="Reports & policies library"
            description="Placeholder downloadable cards. Connect real PDF assets when documents are finalized."
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {documents.map((doc, index) => (
              <Reveal key={doc.id} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-100 text-navy-900">
                      <FileText className="h-5 w-5" aria-hidden />
                    </div>
                    <span
                      className={cn(
                        'rounded-full px-3 py-1 text-xs font-semibold',
                        doc.status === 'available'
                          ? 'bg-sage-100 text-sage-600'
                          : 'bg-amber-100 text-navy-800',
                      )}
                    >
                      {doc.status === 'available' ? 'Available' : 'Coming soon'}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{doc.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/70">
                    {doc.description}
                  </p>
                  <button
                    type="button"
                    disabled={doc.status !== 'available'}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-navy-900/10 px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-cream-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Download className="h-4 w-4" aria-hidden />
                    {doc.status === 'available' ? 'Download' : 'Notify when ready'}
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Questions"
            title="Ask Us About Partnerships"
            description="We welcome thoughtful questions from members, partners, and supporters about how Rwoga operates."
            primaryLabel="Contact us"
            primaryTo="/contact"
            secondaryLabel="Leadership"
            secondaryTo="/leadership"
          />
        </div>
      </section>
    </>
  )
}
