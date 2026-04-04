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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24">

      {/* ---------- Title ---------- */}
      <ScrollReveal>
        <h1 className="font-poppins font-black text-center uppercase mb-3 text-2xl sm:text-3xl md:text-6xl">
          About <span className="text-primary">SH</span>
        </h1>
        <div className="w-16 md:w-20 h-[2px] bg-primary mx-auto mb-10 md:mb-16 opacity-70" />
      </ScrollReveal>

      {/* ---------- Mission + Stats ---------- */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-14 md:mb-24">

        {/* Mission */}
        <ScrollReveal>
          <div className="space-y-4 md:space-y-5">
            <h2 className="font-poppins font-semibold text-primary text-base md:text-xl uppercase tracking-wide">
              Our Mission
            </h2>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              The Social Hackathon (SH) is a national-level innovation event hosted by
              CMR Institute of Technology, Bangalore.
            </p>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              It brings together creators, developers, and thinkers to solve meaningful
              real-world problems using technology.
            </p>

            <p className="text-white/70 text-sm md:text-base leading-relaxed">
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
                className="card-glass p-4 md:p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-poppins text-lg md:text-3xl font-black text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* ---------- Testimonials ---------- */}
      <ScrollReveal>
        <h2 className="font-poppins font-semibold text-center text-base md:text-xl uppercase tracking-widest mb-3">
          What Participants Say
        </h2>
        <div className="w-14 md:w-16 h-[2px] bg-primary mx-auto mb-8 md:mb-12 opacity-70" />
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-24">
        {TESTIMONIALS.map((t, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <InteractiveCard className="card-glass p-4 md:p-6 h-full hover:scale-[1.02] transition">
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

      {/* ---------- Timeline ---------- */}
      <ScrollReveal>
        <div className="max-w-xl md:max-w-2xl mx-auto card-glass p-4 md:p-6">
          <h2 className="text-center font-poppins text-sm md:text-lg uppercase mb-6 md:mb-8">
            Key Dates
          </h2>

          <div className="relative">

            {/* Line */}
            <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[2px] bg-primary/40 rounded-full opacity-70" />

            <div className="space-y-7 md:space-y-8">
              {KEY_DATES.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-3 md:left-4 -translate-x-1/2 top-4 md:top-5 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary shadow-[0_0_10px_theme(colors.primary)]" />

                  {/* Card */}
                  <InteractiveCard className="ml-8 md:ml-10 w-full card-glass px-4 py-3 md:px-5 md:py-4">
                    <p className="text-primary font-bold text-xs md:text-sm mb-1">
                      {item.date}
                    </p>
                    <p className="text-white/70 text-sm md:text-base">
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