import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { boardMembers, currentLeadership } from '@/data/content'
import type { Leader } from '@/types'
import { mediaUrl } from '@/utils'
import { HandHeart, HeartHandshake, Leaf, Waypoints } from 'lucide-react'

function LeaderGrid({ people }: { people: Leader[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {people.map((leader) => (
        <article
          key={leader.id}
          className="overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-soft"
        >
          <div className="aspect-[2/3] overflow-hidden bg-navy-950">
            <img
              src={mediaUrl(leader.image)}
              alt={`Portrait of ${leader.name}`}
              width={800}
              height={1200}
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover object-center"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold leading-snug tracking-wide text-blue-500 uppercase sm:text-sm">
              {leader.role}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold break-words text-navy-900 sm:text-xl">
              {leader.name}
            </h3>
          </div>
        </article>
      ))}
    </div>
  )
}

export function LeadershipPage() {
  return (
    <>
      <SEO
        title="Leadership"
        description="Meet Rwoga’s advisors and current leadership team."
        path="/leadership"
      />
      <PageHero
        eyebrow="Leadership"
        title="People stewarding Rwoga"
      />

      <section className="section-pad">
        <div className="container-page">
          <SectionHeader
            title="Our Advisors"
            className="mb-10"
          />
          <LeaderGrid people={boardMembers} />
        </div>
      </section>

      <section className="bg-cream-100 section-pad">
        <div className="container-page">
          <SectionHeader
            title="Our Leadership Committee"
            className="mb-10"
          />
          <LeaderGrid people={currentLeadership} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 section-pad">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 12% 18%, rgb(31 122 82 / 0.28), transparent 55%), radial-gradient(ellipse 55% 45% at 88% 82%, rgb(240 148 125 / 0.16), transparent 50%)',
          }}
        />
        <div className="container-page relative z-10">
          <Reveal>
            <SectionHeader
              title="Care structures inside the association"
              description="Sub-families are smaller peer groups that help members feel known, supported, and connected beyond large gatherings."
              light
              className="mb-12 max-w-2xl"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Peer check-ins', Icon: HeartHandshake },
              { title: 'Welcome support', Icon: HandHeart },
              { title: 'Local coordination', Icon: Leaf },
              { title: 'A living bridge', Icon: Waypoints },
            ].map((point, index) => (
              <Reveal key={point.title} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-5 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-navy-950">
                    <point.Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy-900 sm:text-xl">
                    {point.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 rounded-3xl border border-navy-900/8 bg-white p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-xl font-bold text-navy-900 sm:text-2xl">
                We have 4 Sub-Families
              </h3>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {['Bright', 'Inganji', 'The Bunch', 'Urumuri'].map(
                  (family, index) => (
                    <li
                      key={family}
                      className="flex items-center gap-3 rounded-2xl border border-navy-900/10 bg-cream-50 px-4 py-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950 font-display text-sm font-bold text-amber-400">
                        {index + 1}
                      </span>
                      <span className="font-medium text-navy-900">{family}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <CTA
            eyebrow="Serve with us"
            title="Leadership is an invitation to service"
            description="Volunteers strengthen every department and initiative. Share your skills and join the work."
            primaryLabel="Get involved"
            primaryTo="/get-involved"
            secondaryLabel="Contact"
            secondaryTo="/contact"
          />
        </div>
      </section>
    </>
  )
}
