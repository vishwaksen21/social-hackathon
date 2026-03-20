import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import InteractiveCard from '../components/InteractiveCard'
import { STATS, TESTIMONIALS, KEY_DATES } from '../utils/data'

/* ---------- ScrollReveal Component ---------- */
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- About Page ---------- */
export default function About() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 py-20">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,0,0.06),transparent_50%)]" />

      {/* Title */}
      <ScrollReveal>
        <h1
          className="font-poppins font-black text-center uppercase mb-4 gradient-text"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          About SH
        </h1>
        <div className="w-24 h-[2px] bg-primary rounded-full mx-auto mb-20 opacity-70" />
      </ScrollReveal>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mb-24">

        {/* Left */}
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="font-poppins font-semibold text-primary text-xl uppercase tracking-wide border-b border-primary/20 pb-3">
              Our Mission
            </h2>

            <p className="text-white/70 leading-relaxed font-inter">
              The Social Hackathon (SH) is a national-level innovation event hosted by
              CMR Institute of Technology, Bangalore.
            </p>

            <p className="text-white/70 leading-relaxed font-inter">
              It brings together creators, developers, and thinkers to solve meaningful
              real-world problems using technology.
            </p>

            <p className="text-white/70 leading-relaxed font-inter">
              From sustainability to healthcare, SH encourages participants to go beyond
              code and build solutions that truly make an impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((stat: { label: string; value: string }, i: number) => (
              <InteractiveCard
                key={stat.label}
                className="card-glass p-6 text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="font-poppins text-3xl font-black text-primary mb-2 group-hover:scale-110 transition">
                  {stat.value}
                </div>

                <div className="text-white/50 text-xs uppercase tracking-widest font-montserrat">
                  {stat.label}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Testimonials */}
      <ScrollReveal>
        <h2 className="font-poppins font-semibold text-center text-xl uppercase tracking-widest mb-4">
          What Participants Say
        </h2>
        <div className="w-20 h-[2px] bg-primary mx-auto mb-12 opacity-70" />
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 mb-24">
        {TESTIMONIALS.map(
          (
            t: { text: string; author: string; role: string },
            i: number
          ) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <InteractiveCard
                className="card-glass p-6 relative overflow-hidden group h-full"
                whileHover={{ y: -6 }}
              >
                <div className="absolute text-5xl text-primary/5 top-2 left-4 select-none">
                  "
                </div>

                <div className="relative z-10">
                  <div className="text-primary text-sm mb-2">★★★★★</div>

                  <p className="text-white/65 italic text-sm leading-relaxed mb-4">
                    {t.text}
                  </p>

                  <p className="text-white font-semibold text-sm">
                    {t.author}
                  </p>
                  <p className="text-primary text-xs mt-1">{t.role}</p>
                </div>
              </InteractiveCard>
            </ScrollReveal>
          )
        )}
      </div>

      {/* Timeline */}
      <ScrollReveal>
        <div className="max-w-2xl mx-auto card-glass p-6">
          <h2 className="text-center font-poppins text-lg uppercase mb-8">
            Key Dates
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />

            <div className="space-y-6">
              {KEY_DATES.map(
                (item: { date: string; event: string }, i: number) => (
                  <motion.div
                    key={i}
                    className="flex items-start pl-12 relative group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="absolute left-[10px] top-2 w-3 h-3 rounded-full border border-primary bg-black group-hover:scale-125 transition" />

                    <InteractiveCard className="card-glass px-5 py-4 w-full group-hover:border-primary/30 transition">
                      <p className="text-primary font-bold text-sm mb-1">
                        {item.date}
                      </p>
                      <p className="text-white/70 text-sm">{item.event}</p>
                    </InteractiveCard>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}