import { motion } from 'framer-motion'
import { Clock, Cpu, Code } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'

export default function Results() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24 min-h-[70vh] flex flex-col justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/10 blur-[100px] md:blur-[130px] rounded-full"
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
        <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-6">
          Hackathon{' '}
          <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.4)]">
            Results
          </span>
        </h1>

        <p className="text-white/60 max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          The final stage of innovation — where ideas turn into impact.
        </p>
      </motion.div>

      {/* Coming Soon Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto w-full mb-10 md:mb-16"
      >
        <InteractiveCard className="relative card-glass p-6 md:p-12 text-center group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">

          <div className="flex justify-center mb-6 relative">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock size={28} />
            </motion.div>
          </div>

          <h2 className="font-poppins font-bold text-xl md:text-3xl text-white mb-3">
            Results Coming Soon
          </h2>

          <p className="text-white/60 text-xs md:text-base max-w-sm mx-auto">
            Stay tuned — results will be announced shortly.
          </p>
        </InteractiveCard>
      </motion.div>

      {/* Prize Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4 md:gap-6"
      >

        {/* Hardware Track */}
        <InteractiveCard className="card-glass p-5 md:p-6 text-center rounded-2xl border border-white/10 group">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Cpu size={22} />
            </div>
          </div>

          <h3 className="text-white font-semibold text-sm md:text-lg mb-1">
            Hardware Track
          </h3>

          <p className="text-primary font-poppins font-black text-xl md:text-2xl">
            ₹25,000
          </p>

          <p className="text-white/50 text-xs mt-2">
            For the best hardware-based innovation
          </p>
        </InteractiveCard>

        {/* Software Track */}
        <InteractiveCard className="card-glass p-5 md:p-6 text-center rounded-2xl border border-white/10 group">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Code size={22} />
            </div>
          </div>

          <h3 className="text-white font-semibold text-sm md:text-lg mb-1">
            Software Track
          </h3>

          <p className="text-primary font-poppins font-black text-xl md:text-2xl">
            ₹25,000
          </p>

          <p className="text-white/50 text-xs mt-2">
            For the best software-based solution
          </p>
        </InteractiveCard>

      </motion.div>
    </div>
  )
}
