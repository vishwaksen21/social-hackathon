import { motion } from 'framer-motion'
import { Trophy, Cpu, Code2, Sparkles, Gift } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'

export default function Prizes() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24 min-h-screen">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-primary/10 blur-[120px] md:blur-[150px] top-1/4 left-1/2 -translate-x-1/2" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-6 leading-tight">
          Rewards &{' '}
          <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.4)]">
            Prizes
          </span>
        </h1>

        <p className="text-white/60 max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
          Compete for a ₹50,000 prize pool — split across Hardware and Software tracks.
        </p>
      </motion.div>

      {/* Track-Based Prizes */}
      <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto mb-16 md:mb-20">

        {/* Hardware */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <InteractiveCard className="card-glass p-6 md:p-10 text-center rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl group">

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Cpu className="text-primary" size={34} />
              </div>
            </div>

            <h3 className="font-poppins font-bold text-lg md:text-xl text-white mb-2">
              Hardware Track
            </h3>

            <div className="font-poppins font-black text-3xl md:text-4xl text-primary mb-3 group-hover:scale-110 transition">
              ₹25,000
            </div>

            <p className="text-white/60 text-xs md:text-sm">
              For the best hardware-driven innovation and implementation.
            </p>
          </InteractiveCard>
        </motion.div>

        {/* Software */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <InteractiveCard className="card-glass p-6 md:p-10 text-center rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl group">

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Code2 className="text-primary" size={34} />
              </div>
            </div>

            <h3 className="font-poppins font-bold text-lg md:text-xl text-white mb-2">
              Software Track
            </h3>

            <div className="font-poppins font-black text-3xl md:text-4xl text-primary mb-3 group-hover:scale-110 transition">
              ₹25,000
            </div>

            <p className="text-white/60 text-xs md:text-sm">
              For the best software solution with impact and scalability.
            </p>
          </InteractiveCard>
        </motion.div>
      </div>

      {/* Highlight Badge */}
      <div className="flex justify-center mb-16">
        <div className="px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-montserrat uppercase tracking-widest">
          Total Prize Pool ₹50,000
        </div>
      </div>

      {/* Perks */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-poppins font-bold text-xl md:text-3xl text-center mb-8 md:mb-10">
          Perks for Everyone
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">

          <InteractiveCard className="card-glass p-5 md:p-8 rounded-2xl flex items-start gap-4 md:gap-5 border border-white/10 bg-white/5">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-white text-base md:text-lg mb-1">
                Participation Certificates
              </h3>
              <p className="text-white/60 text-xs md:text-sm">
                All valid participants will receive verified certificates.
              </p>
            </div>
          </InteractiveCard>

          <InteractiveCard className="card-glass p-5 md:p-8 rounded-2xl flex items-start gap-4 md:gap-5 border border-white/10 bg-white/5">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Gift className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-white text-base md:text-lg mb-1">
                Exclusive Swag
              </h3>
              <p className="text-white/60 text-xs md:text-sm">
                Goodies and merch for all active participants.
              </p>
            </div>
          </InteractiveCard>

        </div>
      </motion.div>
    </div>
  )
}
