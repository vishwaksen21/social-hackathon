import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import InteractiveCard from '../components/InteractiveCard'
import { STATS, TESTIMONIALS, KEY_DATES } from '../utils/data'

type ScrollRevealProps = {
  children: ReactNode
  delay?: number
}

function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,0,0.06),transparent_50%)]" />

      {/* Title */}
      <ScrollReveal>
        <h1
          className="font-poppins font-black text-center uppercase mb-3 gradient-text"
          style={{ fontSize: 'clamp(2rem, 9vw, 5rem)' }}
        >
          About SH
        </h1>
        <div className="w-20 h-[2px] bg-primary rounded-full mx-auto mb-12 md:mb-16 opacity-70" />
      </ScrollReveal>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-10 md:gap-12 mb-16 md:mb-24">

        {/* Left */}
        <ScrollReveal>
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-poppins font-semibold text-primary text-lg md:text-xl uppercase tracking-wide border-b border-primary/20 pb-2 md:pb-3">
              Our Mission
            </h2>

            <p className="text-white/70 leading-relaxed font-inter text-sm md:text-base">
              The Social Hackathon (SH) is a national-level innovation event hosted by
              CMR Institute of Technology, Bangalore.
            </p>

            <p className="text-white/70 leading-relaxed font-inter text-sm md:text-base">
              It brings together creators, developers, and thinkers to solve meaningful
              real-world problems using technology.
            </p>

            <p className="text-white/70 leading-relaxed font-inter text-sm md:text-base">
              From sustainability to healthcare, SH encourages participants to go beyond
              code and build impactful solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {STATS.map((stat, i) => (
              <InteractiveCard
                key={stat.label}
                className="card-glass p-4 md:p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-poppins text-xl md:text-3xl font-black text-primary mb-1">
                  {stat.value}
                </div>

                <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest font-montserrat">
                  {stat.label}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Testimonials */}
      <ScrollReveal>
        <h2 className="font-poppins font-semibold text-center text-lg md:text-xl uppercase tracking-widest mb-3">
          What Participants Say
        </h2>
        <div className="w-16 h-[2px] bg-primary mx-auto mb-8 md:mb-12 opacity-70" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-24">
        {TESTIMONIALS.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <InteractiveCard className="card-glass p-5 md:p-6 group h-full">
              <div className="text-primary text-xs mb-2">★★★★★</div>

              <p className="text-white/65 italic text-xs md:text-sm leading-relaxed mb-3">
                {t.text}
              </p>

              <p className="text-white font-semibold text-sm">{t.author}</p>
              <p className="text-primary text-[10px] md:text-xs mt-1">{t.role}</p>
            </InteractiveCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Timeline */}
      <ScrollReveal>
        <div className="max-w-xl md:max-w-2xl mx-auto card-glass p-5 md:p-6">
          <h2 className="text-center font-poppins text-base md:text-lg uppercase mb-6 md:mb-8">
            Key Dates
          </h2>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />

            <div className="space-y-5 md:space-y-6">
              {KEY_DATES.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start pl-10 md:pl-12 relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute left-[6px] md:left-[10px] top-2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-primary bg-black" />

                  <InteractiveCard className="card-glass px-4 py-3 md:px-5 md:py-4 w-full">
                    <p className="text-primary font-bold text-xs md:text-sm mb-1">
                      {item.date}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm">
                      {item.event}
                    </p>
                  </InteractiveCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
