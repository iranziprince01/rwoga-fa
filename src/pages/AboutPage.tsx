import { PageHero } from '@/components/hero/PageHero'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Timeline } from '@/components/timeline/Timeline'
import { CTA } from '@/components/cta/CTA'
import { Reveal } from '@/components/motion/Reveal'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { aboutContent, pillars, timeline, values } from '@/data/content'
import { getIcon } from '@/utils'

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn who Rwoga Family Association is: a refugee-led youth association founded by Congolese students at African Leadership University."
        path="/about"
      />
      <PageHero eyebrow="About Rwoga" title="Who We Are" />

      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow="Who we are"
              title="A refugee-led association for lasting change"
            />
            <div className="mt-6 space-y-4">
              {aboutContent.whoWeAre.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="prose-rwoga">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src="/about01.jpg"
                alt="Members of Rwoga Family Association"
                width={1000}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-[2rem] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <CloudinaryImage
                src="/star.jpg"
                alt="A bright leading star in the night sky"
                width={1000}
                height={800}
                className="aspect-[5/4] w-full -scale-x-100"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Meaning behind Rwoga"
              title="The leading star"
            />
            <div className="mt-6 space-y-4">
              {aboutContent.meaning.map((paragraph) => {
                const phrase = 'the leading star'
                if (!paragraph.includes(phrase)) {
                  return (
                    <p key={paragraph.slice(0, 40)} className="prose-rwoga">
                      {paragraph}
                    </p>
                  )
                }

                const [before, after] = paragraph.split(phrase)
                return (
                  <p key={paragraph.slice(0, 40)} className="prose-rwoga">
                    {before}
                    <strong className="font-semibold text-navy-900">{phrase}</strong>
                    {after}
                  </p>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Mission & Vision"
                title="Why we gather, and where we aim"
              />
            </Reveal>
            <div className="mt-10 grid gap-6">
              <Reveal delay={0.06}>
                <div className="flex flex-col rounded-3xl border border-navy-900/8 bg-white px-7 py-9 shadow-soft">
                  <p className="text-sm font-semibold tracking-[0.14em] text-blue-500 uppercase">Our Mission</p>
                  <p className="mt-5 text-base leading-relaxed text-navy-900 sm:text-lg">
                    {aboutContent.mission}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="flex flex-col rounded-3xl bg-navy-900 px-7 py-9 text-white shadow-soft">
                  <p className="text-sm font-semibold tracking-[0.14em] text-amber-400 uppercase">Our Vision</p>
                  <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                    {aboutContent.vision}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src="/misvis.jpg"
                alt="Members of Rwoga Family Association working toward a shared mission and vision"
                width={1174}
                height={1440}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-[center_22%] lg:aspect-[3/4]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <img
          src="/RwogaValues.jpg"
          alt=""
          aria-hidden
          width={1800}
          height={1200}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
        />
        <div aria-hidden className="absolute inset-0 bg-navy-950/80" />
        <div className="container-page relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeader
                eyebrow="Core values"
                title="What guides every decision"
                light
              />
            </Reveal>

            <div className="relative">
              <div
                aria-hidden
                className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-gradient-to-b from-amber-500/80 via-white/20 to-white/10 sm:left-[1.4rem]"
              />
              <ol className="space-y-0">
                {values.map((value, index) => {
                  const Icon = getIcon(value.icon)
                  const isLast = index === values.length - 1
                  return (
                    <Reveal key={value.title} delay={index * 0.08}>
                      <li className="relative grid grid-cols-[2.5rem_1fr] gap-5 py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-10 first:pt-0 last:pb-0">
                        <div className="relative z-10 flex justify-center">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-navy-950 shadow-soft sm:h-11 sm:w-11">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                          </span>
                        </div>
                        <div
                          className={
                            isLast
                              ? 'min-w-0'
                              : 'min-w-0 border-b border-white/15 pb-8 sm:pb-10'
                          }
                        >
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="font-display text-sm font-bold tracking-[0.18em] text-amber-400">
                              0{index + 1}
                            </span>
                            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                              {value.title}
                            </h3>
                          </div>
                          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
                            {value.description}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
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

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Focus"
            title="Four foundations for lasting change"
            light
            className="mb-12"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="font-display text-sm font-bold text-amber-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <CTA
            eyebrow="Leadership"
            title="Meet the people stewarding Rwoga"
            description="Explore our leadership committee, departments, sub-families, and volunteers."
            primaryLabel="Leadership"
            primaryTo="/leadership"
            secondaryLabel="Get involved"
            secondaryTo="/get-involved"
          />
        </div>
      </section>
    </>
  )
}
