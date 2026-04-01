import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'

export default function Results() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12"
      >
        <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-6 leading-tight">
          Hackathon{' '}
          <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.5)]">
            Results
          </span>
        </h1>

        <p className="text-white/60 max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base font-inter leading-relaxed px-2">
          The final stage of innovation — where ideas turn into impact.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl md:max-w-2xl mx-auto w-full"
      >
        <InteractiveCard className="relative card-glass p-6 sm:p-8 md:p-14 text-center group rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">


          {/* Icon */}
          <div className="flex justify-center mb-6 md:mb-8 relative">
            <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-primary/10 blur-3xl rounded-full" />

            <motion.div
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock
                size={26}
                className="md:w-8 md:h-8 opacity-90 drop-shadow-[0_0_10px_rgba(255,255,0,0.6)]"
              />
            </motion.div>
          </div>

          {/* Heading */}
          <h2 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-white mb-3 md:mb-4">
            Results Coming Soon
          </h2>

          {/* Subtext */}
          <p className="text-white/60 font-inter text-xs sm:text-sm md:text-base leading-relaxed max-w-md mx-auto px-1">
            Stay tuned — results will be announced shortly.
          </p>

        </InteractiveCard>
      </motion.div>

      {/* 2025 Highlights (from last year's brochure) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-14 md:mt-20"
      >
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-poppins font-black uppercase text-xl sm:text-2xl md:text-4xl leading-tight">
            2025{' '}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.35)]">
              Highlights
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-inter leading-relaxed px-2 mt-2">
            A quick look back at last year’s winning innovations.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          <InteractiveCard className="card-glass p-5 md:p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
            <p className="text-white/70 font-inter text-xs md:text-sm leading-relaxed">
              <span className="text-primary font-semibold">Participants:</span> 90 teams shortlisted nationwide for the on-campus hackathon.
            </p>
          </InteractiveCard>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <InteractiveCard className="card-glass p-5 md:p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="flex items-center justify-between mb-3">
                <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                  1st Prize
                </p>
                <span className="text-white/40 text-[10px] md:text-xs font-mono">2025</span>
              </div>
              <p className="text-white font-poppins font-bold text-base md:text-lg leading-snug">
                Miniaturized electro-osmotic pump for non-invasive cancer drug delivery
              </p>
              <p className="text-white/60 font-inter text-xs md:text-sm mt-2">
                Team Tools Squad (CMRIT)
              </p>
            </InteractiveCard>

            <InteractiveCard className="card-glass p-5 md:p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="flex items-center justify-between mb-3">
                <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-widest">
                  2nd Prize
                </p>
                <span className="text-white/40 text-[10px] md:text-xs font-mono">2025</span>
              </div>
              <p className="text-white font-poppins font-bold text-base md:text-lg leading-snug">
                WildlifeRailGuard — an AI-driven system preventing train-animal collisions
              </p>
              <p className="text-white/60 font-inter text-xs md:text-sm mt-2">
                Team GARUDA (Amrita Vishwa Vidyapeetham)
              </p>
            </InteractiveCard>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
