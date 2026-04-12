import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAV_LINKS, SOCIAL_LINKS } from '../utils/data'
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
    <footer className="relative z-10 mt-12 md:mt-20">
      {/* Top divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Footer nav row (like the screenshot) */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-montserrat uppercase tracking-widest text-white/70">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Main footer content */}
        <div className="mt-8 md:mt-10 grid gap-8 md:gap-10 items-center md:grid-cols-[1.1fr_1.8fr_1.1fr]">
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-primary text-3xl md:text-4xl font-poppins font-black">&lt;</span>
              <span className="text-white text-2xl md:text-3xl font-poppins font-black">/</span>
              <span className="text-primary text-3xl md:text-4xl font-poppins font-black">&gt;</span>

              <span className="ml-2 hidden sm:inline text-white font-poppins font-bold tracking-wide">
                The Social Hackathon
              </span>
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-white">
              Follow our{' '}
              <span className="text-primary">socials</span>
            </h2>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center md:justify-end gap-4">
          {socialItems.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              title={label}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
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
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
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
        </div>

        {/* Devfolio Sponsor Badge — FIXED */}
<div className="mt-8 md:mt-10 flex flex-col items-center gap-4">
  
  <p className="text-white/50 text-[10px] font-montserrat uppercase tracking-widest">
    Powered by
  </p>

  {/* STATIC IMAGE (important for Devfolio bot) */}
  <img
    src="/devfolio-logo.png"
    alt="Devfolio"
    className="h-10 w-auto object-contain"
  />

</div>

        {/* Bottom line + copyright */}
        <div className="mt-8 md:mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="mt-5 text-white/40 text-xs sm:text-sm tracking-wide font-montserrat text-center">
          © 2026 <span className="text-white">The Social Hackathon</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}