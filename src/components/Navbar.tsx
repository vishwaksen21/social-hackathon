import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '../utils/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
        }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-[70px]' : 'h-[90px]'
          }`}
      >

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-1 font-poppins font-black tracking-wider"
        >
          <span className="text-primary text-4xl group-hover:drop-shadow-[0_0_12px_rgba(255,255,0,0.9)] transition-all">
            &lt;
          </span>
          <span className="text-white text-3xl">/</span>
          <span className="text-primary text-4xl group-hover:drop-shadow-[0_0_12px_rgba(255,255,0,0.9)] transition-all">
            &gt;
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-10 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path

            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative font-montserrat text-base tracking-wide transition-all"
              >
                <span
                  className={`transition-all ${isActive
                      ? 'text-primary'
                      : 'text-white/80 hover:text-primary'
                    }`}
                >
                  {link.label}
                </span>

                {/* Animated underline */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}