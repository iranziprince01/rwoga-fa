import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { IMAGES } from '@/data/content'
import { toTitleCase } from '@/utils'

const easeOut = [0.22, 1, 0.36, 1] as const
const LETTER_STAGGER = 0.055
const LETTER_DURATION = 0.75
const TITLE_START_DELAY = 0.4

export function Hero() {
  const reduce = useReducedMotion()
  const titleText = toTitleCase('Lighting the Way for Refugee Communities')
  const words = titleText.split(' ')
  const letterCount = words.reduce((sum, word) => sum + word.length, 0)
  const afterTitleDelay = TITLE_START_DELAY + (letterCount * LETTER_STAGGER)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: easeOut } 
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      x: ['-15vw', '15vw', '-15vw'],
      transition: { 
        opacity: { duration: 0.8, ease: easeOut },
        filter: { duration: 0.8, ease: easeOut },
        x: { duration: 10, repeat: Infinity, ease: 'easeInOut' as const }
      } 
    }
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="h-full w-full"
          initial={reduce ? false : { scale: 1.14, opacity: 0.72 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 10, ease: easeOut }}
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/65 via-navy-900/68 to-navy-950/82" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgb(11_46_31_/0.25)_0%,rgb(6_26_18_/0.62)_100%)]" />
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

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-32 text-center">
        <motion.div 
          className="mx-auto flex w-full max-w-5xl flex-col items-center"
          variants={containerVariants}
          initial={reduce ? "visible" : "hidden"}
          animate="visible"
        >
          {/* Top subtle badge */}
          <motion.div 
            variants={badgeVariants}
            className="relative mb-10 inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            {/* Shimmer reflection passing over the badge */}
            <motion.div 
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
              animate={{ x: ['-200%', '300%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
            />
            <span className="relative text-xs font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 uppercase">
              From Challenges to Champions
            </span>
          </motion.div>

          <h1
            className="font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-[5rem] lg:leading-[1.08]"
            aria-label={titleText}
          >
            {words.map((word, wordIndex) => {
              const baseIndex = words
                .slice(0, wordIndex)
                .reduce((sum, current) => sum + current.length, 0)

              return (
                <span
                  key={`${word}-${wordIndex}`}
                  className="mr-[0.28em] inline-block whitespace-nowrap last:mr-0"
                  aria-hidden="true"
                >
                  {word.split('').map((letter, charIndex) => (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      className="inline-block"
                      initial={reduce ? false : { opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: LETTER_DURATION,
                        delay: TITLE_START_DELAY + (baseIndex + charIndex) * LETTER_STAGGER,
                        ease: easeOut,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              )
            })}
          </h1>

          <motion.div
            aria-hidden
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: afterTitleDelay, ease: easeOut }}
            className="mt-7 h-px w-16 origin-center bg-amber-500/80"
          />

          <motion.p
            variants={itemVariants}
            className="mt-10 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl md:text-2xl font-light tracking-wide"
          >
            <span className="font-semibold text-white drop-shadow-md">Rwoga Family Association</span> is a refugee-led 
            association founded by Congolese students at African Leadership University who believe that 
            those closest to a community's challenges are also closest to its solutions.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: afterTitleDelay + 0.28, ease: easeOut }}
            className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center"
          >
            <ButtonLink to="/impact" variant="amber" size="lg" className="w-full sm:w-auto">
              Explore Our Impact
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink to="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
              Partner With Us
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}
