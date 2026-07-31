import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { IMAGES } from '@/data/content'
import { toTitleCase } from '@/utils'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="h-full w-full"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
        >
          <CloudinaryImage
            src={IMAGES.hero}
            alt="Young people standing together in community and solidarity"
            width={2000}
            height={1200}
            loading="eager"
            className="h-full w-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/55 via-navy-900/60 to-navy-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgb(11_46_31_/0.15)_0%,rgb(6_26_18_/0.55)_100%)]" />
      </div>

      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="absolute top-[18%] right-[10%] h-36 w-36 rounded-full bg-amber-500/15 blur-3xl"
            animate={{ y: [0, 18, 0], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-[22%] left-[8%] h-44 w-44 rounded-full bg-blue-500/15 blur-3xl"
            animate={{ y: [0, -16, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-28 text-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase sm:text-[0.9375rem]"
          >
            Rwoga Family Association
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
          >
            {toTitleCase('Lighting the Way for Refugee Communities')}
          </motion.h1>

          <motion.div
            aria-hidden
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 h-px w-16 origin-center bg-amber-500/80"
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg md:text-xl"
          >
            Rwoga Family Association is a refugee-led association founded by Congolese students at
            African Leadership University. Together, we empower communities through education,
            leadership, mentorship, and impactful initiatives that create lasting opportunities for
            refugees across Rwanda.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonLink to="/impact" variant="amber" size="lg">
              Explore Our Impact
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink to="/partners" variant="outline" size="lg">
              Partner With Us
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 text-sm font-semibold tracking-[0.2em] text-amber-400 uppercase sm:text-[0.9375rem]"
          >
            From Challenges to Champions
          </motion.p>
        </div>
      </div>
    </section>
  )
}
