import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../utils/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-[70px]' : 'h-[90px]'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-1 font-poppins font-black tracking-wider"
          >
            <span className="text-primary text-3xl md:text-4xl">&lt;</span>
            <span className="text-white text-2xl md:text-3xl">/</span>
            <span className="text-primary text-3xl md:text-4xl">&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative font-montserrat text-base tracking-wide"
                >
                  <span
                    className={`transition-all ${
                      isActive
                        ? 'text-primary'
                        : 'text-white/80 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </span>

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden px-4 py-2 rounded-xl border border-white/20 text-white backdrop-blur-lg"
          >
            MENU +
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 z-40"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg tracking-wide hover:text-primary transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
