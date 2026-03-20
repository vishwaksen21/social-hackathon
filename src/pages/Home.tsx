import { motion } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import InteractiveCard from '../components/InteractiveCard'
import MagneticButton from '../components/MagneticButton'
import { REGISTER_URL, STATS } from '../utils/data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-4 md:pt-16">

      {/* HERO */}
      <section className="relative flex-1 flex flex-col justify-center px-4 sm:px-6 pb-12 max-w-6xl mx-auto w-full mt-6 md:mt-0">

        {/* Background glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,0,0.08),transparent_40%)]" />

        <motion.div
          className="flex flex-col items-start gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] sm:text-xs font-montserrat font-semibold tracking-widest uppercase backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            National Level Hackathon 2026
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-poppins font-black uppercase leading-[1.1] md:leading-[0.9] text-white"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
          >
            <span className="block">THE</span>
            <span className="block gradient-text-yellow drop-shadow-[0_0_20px_rgba(255,255,0,0.25)]">
              SOCIAL
            </span>
            <span className="block">
              HACKATHON<span className="text-primary">.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="max-w-lg">
            <p className="font-poppins text-lg sm:text-xl font-semibold text-white">
              CMR Institute of Technology
            </p>
            <p className="mt-2 text-white/60 font-inter text-sm sm:text-base leading-relaxed">
              Bringing together innovators and builders to craft impactful solutions
              for real-world challenges through technology and creativity.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full">

            <MagneticButton>
              <motion.a
                href={REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-primary text-black font-montserrat font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(255,255,0,0.3)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <ExternalLink size={16} />
              </motion.a>
            </MagneticButton>

            <MagneticButton>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white/5 backdrop-blur-md text-white font-montserrat font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  Learn More
                  <ChevronDown size={16} />
                </Link>
              </motion.div>
            </MagneticButton>

          </motion.div>

          {/* Countdown */}
          <motion.div variants={itemVariants}>
            <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest mb-2 font-montserrat">
              Event starts in
            </p>
            <CountdownTimer />
          </motion.div>

        </motion.div>

        {/* Prize Badge → FIXED FOR MOBILE */}
        <motion.div
          className="absolute top-4 right-4 md:top-16 md:right-6 flex md:flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,0,0.25)]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-white/50 text-[8px] md:text-[10px] uppercase">Prize</span>
          <span className="text-primary font-poppins font-black text-sm md:text-xl">₹50K</span>
          <span className="text-white/50 text-[8px] md:text-[10px]">Pool</span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="w-full mt-14 md:mt-20 border-t border-white/5 pt-8 md:pt-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {STATS.map((stat) => (
              <InteractiveCard key={stat.label} className="card-glass p-4 md:p-6 text-center group">
                <div className="font-poppins text-lg md:text-xl font-black text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest font-montserrat">
                  {stat.label}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

      </section>

      {/* Marquee */}
      <div className="w-full overflow-hidden py-3 md:py-4 bg-primary/5 border-y border-primary/10">
        <div className="flex whitespace-nowrap animate-[scroll_18s_linear_infinite]">
          {Array(4).fill('AI • WEB3 • IOT • CLOUD • OPEN SOURCE • SECURITY • ').map((text, i) => (
            <span key={i} className="text-primary/50 font-montserrat font-bold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase px-4 md:px-6">
              {text}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}
