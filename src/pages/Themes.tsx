import { motion } from 'framer-motion'
import InteractiveCard from '../components/InteractiveCard'
import { THEMES } from '../utils/data'
import { useState } from 'react'

type Theme = {
  id: number
  title: string
  description: string
  icon: string
  focuses: string[]
}

const fallbackIcons = ['🌐', '🏙️', '📚', '⚡', '❤️', '🌾', '🐾']

export default function Themes() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-primary/10 blur-[120px] md:blur-[140px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/5 blur-[100px] md:blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="font-poppins font-black text-3xl sm:text-4xl md:text-6xl mb-3 md:mb-4">
          Hack<span className="text-primary">Themes</span>
        </h1>

        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
          Choose a domain and build impactful solutions for real-world problems.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        {(THEMES as Theme[]).map((theme, i) => (
          <ThemeCard key={theme.id} theme={theme} index={i} />
        ))}

      </div>
    </div>
  )
}

/* ---------- Card ---------- */
function ThemeCard({ theme, index }: { theme: Theme; index: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <InteractiveCard
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(255,255,0,0.08),transparent_60%)]" />

      {/* Header */}
      <div className="flex items-center justify-between px-4 md:px-5 py-3 md:py-4 border-b border-white/5">

        <div className="flex items-center gap-2 md:gap-3 min-w-0">

          {/* Icon */}
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/15 flex items-center justify-center text-sm md:text-lg shrink-0">
            {!imgError ? (
              <img
                src={theme.icon}
                alt={theme.title}
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              fallbackIcons[theme.id - 1] || '🚀'
            )}
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-sm md:text-base leading-tight truncate">
            {theme.title}
          </h3>
        </div>

        {/* Number */}
        <span className="text-[10px] md:text-xs text-white/30 font-mono">
          {theme.id.toString().padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3 md:space-y-4">

        {/* Description */}
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
          {theme.description}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {theme.focuses.slice(0, 4).map((focus, j) => (
            <span
              key={j}
              className="px-2.5 md:px-3 py-1 text-[10px] md:text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
            >
              {focus}
            </span>
          ))}

          {theme.focuses.length > 4 && (
            <span className="px-2.5 md:px-3 py-1 text-[10px] md:text-xs rounded-full bg-primary/10 text-primary">
              +{theme.focuses.length - 4}
            </span>
          )}
        </div>
      </div>

    </InteractiveCard>
  )
}
