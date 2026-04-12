import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import InteractiveCard from '../components/InteractiveCard'
import MagneticButton from '../components/MagneticButton'
import { HACKATHON_SLUG, STATS, THEMES } from '../utils/data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Home() {
  // Load the Devfolio Apply SDK once per mount
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://apply.devfolio.co/v2/sdk.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  const marqueeText = `${THEMES.map((t) => t.title).join(' • ')} • `.toUpperCase()

  return (
    <div className="flex flex-col pt-4 md:pt-16 overflow-x-hidden">

      {/* HERO */}
      <section className="relative flex flex-col px-4 sm:px-6 pb-12 pt-6 md:pt-10 max-w-6xl mx-auto w-full mt-4 md:mt-0 overflow-hidden">

        <motion.div
          className="flex flex-col items-start gap-6 md:gap-10"
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
            className="font-poppins font-black uppercase leading-[1.1] text-white"
            style={{ fontSize: 'clamp(2.2rem, 10vw, 7.5rem)' }}
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
          <motion.div variants={itemVariants} className="max-w-lg space-y-2">
            <p className="font-poppins text-lg sm:text-xl font-semibold text-white">
              CMR Institute of Technology
            </p>
            <p className="text-white/60 font-inter text-sm sm:text-base leading-relaxed">
              Bringing together innovators and builders to craft impactful solutions
              for real-world challenges through technology and creativity.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mt-2">

            {/* Custom Devfolio Apply Button */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0"
            >
              <a 
                href={`https://${HACKATHON_SLUG}.devfolio.co`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-2.5 bg-[#3770FF] text-white rounded-xl hover:bg-blue-600 transition-all font-semibold font-inter shadow-lg overflow-hidden border border-[#3770FF]"
              >
                <div className="bg-white p-1 rounded-sm flex items-center justify-center">
                  <img
                    src="/devfolio-logo.png"
                    alt="Devfolio"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-lg">Apply with Devfolio</span>
              </a>
            </motion.div>

            <MagneticButton>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white/5 backdrop-blur-md text-white font-montserrat font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-xl border border-white/10 hover:bg-white/10 transition-all shadow-lg"
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

        {/* Prize Badge */}
        <motion.div
          className="absolute top-4 right-2 sm:top-6 sm:right-6 md:top-16 md:right-12 
          w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 
          flex flex-col items-center justify-center 
          rounded-full border border-primary/40 bg-primary/10 backdrop-blur-xl 
          shadow-[0_0_30px_rgba(255,255,0,0.25)] z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
        >
          <span className="text-white/60 font-montserrat font-bold text-[8px] sm:text-[10px] md:text-sm uppercase tracking-[0.2em] mb-1">
            Prize
          </span>
          <span className="text-primary font-poppins font-black text-xl sm:text-3xl md:text-5xl leading-none">
            ₹50K
          </span>
          <span className="text-white/60 font-montserrat font-medium text-[8px] sm:text-[10px] md:text-sm tracking-[0.2em] mt-1">
            Pool
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="w-full mt-10 sm:mt-14 md:mt-20 border-t border-white/5 pt-8 md:pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {STATS.map((stat) => (
              <InteractiveCard key={stat.label} className="card-glass p-3 sm:p-4 md:p-6 text-center group">
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
        <motion.div
          className="flex whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
        >
          <span className="text-primary/50 font-montserrat font-bold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase px-4 md:px-6">
            {marqueeText}
          </span>
          <span
            aria-hidden="true"
            className="text-primary/50 font-montserrat font-bold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase px-4 md:px-6"
          >
            {marqueeText}
          </span>
        </motion.div>
      </div>

    </div>
  )
}