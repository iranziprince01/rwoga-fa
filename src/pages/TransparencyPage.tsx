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
  'Financial Reports',
  'Governance',
  'Policies',
] as const

export function TransparencyPage() {
  return (
    <>
      <SEO
        title="Transparency"
        description="Rwoga’s transparency hub for annual reports, financial reports, governance documents, constitution, policies, and impact reports."
        path="/transparency"
      />
      <PageHero
        eyebrow="Resources"
        title="Reports, governance, and policies"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our commitment"
            title="Resources that build trust"
            description="Annual reports, impact reports, financial reports, constitution, governance, leadership structure, and policies will be published here as they are finalized."
            className="mb-12 max-w-3xl"
          />

          <div className="grid gap-4 md:grid-cols-5">
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
                  <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-blue-500 uppercase">
                    {doc.category}
                    {doc.year ? ` · ${doc.year}` : ''}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy-900">{doc.title}</h3>
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
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Constitution',
              body: 'Will outline member rights, leadership selection, and organizational purpose.',
            },
            {
              title: 'Financial stewardship',
              body: 'Policies for budgeting, approvals, and reporting will be published for public trust.',
            },
            {
              title: 'Impact accountability',
              body: 'We will share what worked, what we learned, and where we still need to grow.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl bg-navy-900 p-6 text-white">
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Questions"
            title="Ask us about governance"
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
