import { motion } from 'framer-motion'
import InteractiveCard from '../components/InteractiveCard'
import { THEMES } from '../utils/data'
import { useState } from 'react'

/* ---------- Types ---------- */
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
    <div className="relative max-w-7xl mx-auto px-6 py-24">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[140px] top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-primary/5 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* 🚀 Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="font-poppins font-black text-5xl md:text-6xl mb-4">
          Hack<span className="text-primary">Themes</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Choose a domain and build impactful solutions for real-world problems.
        </p>
      </motion.div>

      {/* 💡 Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {(THEMES as Theme[]).map((theme, i) => (
          <ThemeCard key={theme.id} theme={theme} index={i} />
        ))}

      </div>
    </div>
  )
}

/* ---------- Redesigned Card ---------- */
function ThemeCard({ theme, index }: { theme: Theme; index: number }) {
  const [imgError, setImgError] = useState(false)

  return (
    <InteractiveCard
      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(255,255,0,0.08),transparent_60%)]" />

      {/* Top Strip */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">

        <div className="flex items-center gap-3">

          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-lg">
            {!imgError ? (
              <img
                src={theme.icon}
                alt={theme.title}
                className="w-6 h-6 object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              fallbackIcons[theme.id - 1] || '🚀'
            )}
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
            {theme.title}
          </h3>
        </div>

        {/* Number */}
        <span className="text-xs text-white/30 font-mono">
          {theme.id.toString().padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed">
          {theme.description}
        </p>

        {/* Focus Chips */}
        <div className="flex flex-wrap gap-2">
          {theme.focuses.slice(0, 5).map((focus, j) => (
            <span
              key={j}
              className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10 hover:border-primary/40 transition"
            >
              {focus}
            </span>
          ))}

          {theme.focuses.length > 5 && (
            <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
              +{theme.focuses.length - 5}
            </span>
          )}
        </div>
      </div>

    </InteractiveCard>
  )
}