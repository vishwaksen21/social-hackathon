import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'

export default function Results() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24 min-h-[70vh] flex flex-col justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] bg-primary/10 blur-[100px] md:blur-[130px] rounded-full"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

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

          {/* Glow Layer */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle,rgba(255,255,0,0.08),transparent_70%)]" />

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
    </div>
  )
}
