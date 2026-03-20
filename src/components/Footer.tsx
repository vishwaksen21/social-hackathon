import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { SOCIAL_LINKS } from '../utils/data'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const socialItems = [
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: SOCIAL_LINKS.email, label: 'Email' },
]

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false)

  return (
    <footer className="relative z-10 mt-20">

      {/* Top gradient line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8">

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialItems.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              title={label}
              className="relative w-12 h-12 flex items-center justify-center rounded-full 
              border border-white/10 bg-white/5 backdrop-blur-md text-white
              hover:bg-primary hover:text-black hover:border-primary
              transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(255,255,0,0.4)]"
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}

          {/* Phone Button */}
          <div className="relative">
            <motion.button
              className="w-12 h-12 flex items-center justify-center rounded-full 
              border border-white/10 bg-white/5 backdrop-blur-md text-white
              hover:bg-primary hover:text-black hover:border-primary
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,0,0.4)]"
              onMouseEnter={() => setShowPhone(true)}
              onMouseLeave={() => setShowPhone(false)}
              onClick={() => setShowPhone((v) => !v)}
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
              {showPhone && (
                <motion.div
                  className="absolute bottom-14 left-1/2 -translate-x-1/2 
                  bg-black/90 backdrop-blur-xl border border-white/10 
                  text-white text-xs font-medium px-4 py-2 rounded-lg 
                  shadow-[0_8px_30px_rgba(0,0,0,0.6)] whitespace-nowrap"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                >
                  {SOCIAL_LINKS.phone}

                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 
                  border-4 border-transparent border-t-black/90" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer Text */}
        <p className="text-white/40 text-sm tracking-wide font-montserrat text-center">
          © 2026 <span className="text-white">The Social Hackathon</span>. Crafted with ⚡ and innovation.
        </p>
      </div>
    </footer>
  )
}