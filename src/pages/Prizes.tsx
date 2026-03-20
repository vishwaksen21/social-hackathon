import { motion } from 'framer-motion'
import { Trophy, Medal, Award, Sparkles, Gift } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'

export default function Prizes() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 min-h-screen">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[150px] top-1/4 left-1/2 -translate-x-1/2" />
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 md:mb-20">
        <h1 className="font-poppins font-black uppercase text-3xl md:text-6xl mb-6">
          Rewards & <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.4)]">Prizes</span>
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base font-inter leading-relaxed">
          Compete against the brightest minds for a massive ₹50,000 prize pool, exclusive perks, and industry recognition.
        </p>
      </motion.div>

      {/* Podium Grid */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-20 items-end">
        {/* RUNNER UP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <InteractiveCard className="relative card-glass p-6 md:p-8 text-center group rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl h-[280px] md:h-[320px] flex flex-col justify-center shadow-[0_0_30px_rgba(212,212,216,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
            <div className="flex justify-center mb-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-zinc-400/10 flex items-center justify-center border border-zinc-400/30">
                <Medal size={28} className="text-zinc-300 drop-shadow-[0_0_10px_rgba(212,212,216,0.6)]" />
              </div>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white mb-1 relative z-10">Runner Up</h3>
            <div className="font-poppins font-black text-3xl text-zinc-300 mb-4 drop-shadow-[0_0_10px_rgba(212,212,216,0.5)] group-hover:scale-110 transition-transform relative z-10">₹15,000</div>
            <p className="text-white/50 font-inter text-xs tracking-wide uppercase relative z-10">Second Place</p>
          </InteractiveCard>
        </motion.div>

        {/* WINNER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <InteractiveCard className="relative card-glass p-6 md:p-10 text-center group rounded-[32px] border border-primary/30 bg-primary/[0.05] backdrop-blur-xl h-[340px] md:h-[380px] flex flex-col justify-center shadow-[0_0_40px_rgba(255,255,0,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
            <div className="flex justify-center mb-6 relative z-10">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <div className="relative w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                <Trophy size={40} className="text-primary drop-shadow-[0_0_15px_rgba(255,255,0,0.8)]" />
              </div>
            </div>
            <h3 className="font-poppins font-bold text-2xl text-white mb-2 relative z-10">Grand Prize</h3>
             <div className="font-poppins font-black text-5xl text-primary mb-4 drop-shadow-[0_0_20px_rgba(255,255,0,0.6)] group-hover:scale-110 transition-transform relative z-10">₹25,000</div>
            <p className="text-primary/80 font-inter text-sm tracking-widest uppercase font-bold relative z-10">First Place</p>
          </InteractiveCard>
        </motion.div>

        {/* SECOND RUNNER UP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="order-3"
        >
          <InteractiveCard className="relative card-glass p-6 md:p-8 text-center group rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl h-[250px] md:h-[280px] flex flex-col justify-center shadow-[0_0_30px_rgba(251,146,60,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />
            <div className="flex justify-center mb-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-orange-400/10 flex items-center justify-center border border-orange-400/30">
                <Award size={28} className="text-orange-300 drop-shadow-[0_0_10px_rgba(251,146,60,0.6)]" />
              </div>
            </div>
            <h3 className="font-poppins font-bold text-xl text-white mb-1 relative z-10">2nd Runner Up</h3>
            <div className="font-poppins font-black text-3xl text-orange-300 mb-4 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)] group-hover:scale-110 transition-transform relative z-10">₹10,000</div>
            <p className="text-white/50 font-inter text-xs tracking-wide uppercase relative z-10">Third Place</p>
          </InteractiveCard>
        </motion.div>
      </div>

      {/* Additional Perks */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-center mb-10">Perks for Everyone</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <InteractiveCard className="card-glass p-6 md:p-8 rounded-2xl flex items-start gap-5 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-white text-lg mb-2">Participation Certificates</h3>
              <p className="text-white/60 font-inter text-sm leading-relaxed">Every valid submission and attendee will receive verified certificates recognizing their effort and contribution.</p>
            </div>
          </InteractiveCard>
          <InteractiveCard className="card-glass p-6 md:p-8 rounded-2xl flex items-start gap-5 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Gift className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-white text-lg mb-2">Exclusive Swag</h3>
              <p className="text-white/60 font-inter text-sm leading-relaxed">T-shirts, stickers, and premium goodies for all accepted hackers who complete the 24-hour sprint.</p>
            </div>
          </InteractiveCard>
        </div>
      </motion.div>
    </div>
  )
}
