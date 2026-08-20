import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CloudinaryImage } from '@/components/media/CloudinaryImage'
import { IMAGES } from '@/data/content'
import { toTitleCase } from '@/utils'

export function Hero() {
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Parallax effects on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const titleText = toTitleCase('Lighting the Way for Refugee Communities')
  const words = titleText.split(" ")

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      x: ['-15vw', '15vw', '-15vw'],
      transition: { 
        opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        filter: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        x: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
      } 
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden bg-navy-950">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <motion.div
          className="h-full w-full"
          initial={reduce ? false : { scale: 1.15, filter: 'blur(4px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 10, ease: 'easeOut' }}
        >
          <CloudinaryImage
            src={IMAGES.hero}
            alt="Young people standing together in community and solidarity"
            width={2000}
            height={1200}
            loading="eager"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        {/* Advanced Gradients for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-900/60 to-navy-950/95 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.15),transparent_50%)]" />
      </motion.div>

      {!reduce && (
        <>
          <motion.div
            aria-hidden
            className="absolute top-[15%] right-[15%] h-[400px] w-[400px] rounded-full bg-amber-500/20 blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px]"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -40, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
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
            className="font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.1] [perspective:1000px]"
            aria-label={titleText}
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block whitespace-nowrap mr-[0.25em]" aria-hidden="true">
                {word.split('').map((char, j) => (
                  <motion.span 
                    key={j} 
                    className="inline-block"
                    variants={wordVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.div
            variants={itemVariants}
            className="mt-10 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
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
            variants={itemVariants}
            className="mt-12 flex w-full max-w-md flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center"
          >
            <ButtonLink 
              to="/impact" 
              variant="amber" 
              size="lg" 
              className="group w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Impact
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </ButtonLink>
            
            <ButtonLink 
              to="/contact" 
              variant="outline" 
              size="lg" 
              className="group w-full sm:w-auto hover:bg-white/10 hover:text-white transition-all duration-300 border-white/20"
            >
              Partner With Us
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}
