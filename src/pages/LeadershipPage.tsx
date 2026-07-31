import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { departments, leaders } from '@/data/content'

export function LeadershipPage() {
  return (
    <>
      <SEO
        title="Leadership"
        description="Meet Rwoga’s leadership structure: executive committee, departments, and sub-family care systems."
        path="/leadership"
      />
      <PageHero
        eyebrow="Leadership"
        title="Leadership Committee"
      />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Leadership Committee"
            title="People stewarding the association"
            description="Role cards ready for confirmed names, bios, and photos."
            className="mb-10"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <Reveal key={leader.id} delay={index * 0.05}>
                <article className="overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-soft">
                  <CloudinaryImage
                    src={leader.image}
                    alt={`Portrait placeholder for ${leader.role}`}
                    width={600}
                    height={700}
                    className="aspect-[4/5] w-full"
                  />
                  <div className="p-5">
                    <p className="text-sm font-semibold tracking-[0.1em] text-blue-500 uppercase">
                      {leader.department}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-navy-900">{leader.role}</h3>
                    <p className="mt-1 text-sm text-slate-soft">{leader.name}</p>
                    <p className="mt-3 text-sm leading-relaxed text-navy-800/70">{leader.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Departments"
            title="How the association works"
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((dept, index) => (
              <Reveal key={dept.id} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-navy-900/8 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-lg font-bold text-navy-900">{dept.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{dept.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {dept.focus.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-cream-100 px-3 py-1 text-xs font-medium text-navy-800"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Sub-families"
              title="Care structures inside the association"
              description="Sub-families are smaller peer groups that help members feel known, supported, and connected beyond large gatherings. They are the everyday expression of Rwoga’s family ethos."
            />
            <ul className="mt-6 space-y-3 text-navy-800/75">
              <li>· Peer check-ins and mutual encouragement</li>
              <li>· Welcome support for new members</li>
              <li>· Local coordination for study and wellbeing</li>
              <li>· A bridge between members and departments</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy-900/8 bg-white p-8 shadow-lift">
              <h3 className="font-display text-xl font-bold text-navy-900">Organizational structure</h3>
              <ol className="mt-6 space-y-4">
                {[
                  'Leadership Committee',
                  'Departments',
                  'Sub-Families',
                  'Volunteers',
                ].map((layer, index) => (
                  <li key={layer} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-amber-400">
                      {index + 1}
                    </span>
                    <span className="font-medium text-navy-900">{layer}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
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
