import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../utils/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  /* ---------- Scroll Effect ---------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ---------- Close Menu on Route Change ---------- */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  /* ---------- Lock Body Scroll (FIXED CLEANUP) ---------- */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* 🔥 HEADER */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
          }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-[65px]' : 'h-[85px]'
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 font-poppins font-black">
            <span className="text-primary text-3xl md:text-4xl">&lt;</span>
            <span className="text-white text-2xl md:text-3xl">/</span>
            <span className="text-primary text-3xl md:text-4xl">&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <Link key={link.path} to={link.path} className="relative">
                  <span
                    className={`text-sm tracking-wide transition ${isActive
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

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden px-4 py-2 rounded-xl border border-white/20 text-white backdrop-blur-lg active:scale-95 transition"
          >
            MENU +
          </button>
        </div>
      </motion.header>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 left-0 right-0 z-[110] bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 pt-24 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex flex-col items-center gap-6">

                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-white text-xl font-medium hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Close */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="mt-6 text-sm text-white/60 hover:text-primary"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}