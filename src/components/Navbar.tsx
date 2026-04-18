import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  Info,
  Image,
  CalendarDays,
  Trophy,
  Users,
  Award,
  HelpCircle,
  ExternalLink,
  Camera,
} from 'lucide-react'
import { NAV_LINKS, REGISTER_URL } from '../utils/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const mobileLinks = useMemo(
    () => [
      { label: 'Home', path: '/', Icon: Home },
      { label: 'About', path: '/about', Icon: Info },
      { label: 'Themes', path: '/themes', Icon: Image },
      { label: 'Schedule', path: '/schedule', Icon: CalendarDays },
      { label: 'Prizes', path: '/prizes', Icon: Trophy },
      { label: 'Team', path: '/team', Icon: Users },
      { label: 'Results', path: '/results', Icon: Award },
      { label: 'Gallery', path: '/gallery', Icon: Camera },
      { label: 'Contact', path: '/contact', Icon: HelpCircle },
    ],
    []
  )

  /* ---------- Scroll Effect ---------- */
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
      className="fixed top-0 left-0 right-0 z-[100]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pt-3 md:pt-4">
        <div
          className={`w-full rounded-[20px] border border-white/10 backdrop-blur-xl transition-all duration-500 ${scrolled
              ? 'bg-black/70 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
              : 'bg-black/40'
            }`}
        >

          {/* ---------- Desktop Navbar ---------- */}
          <div className="hidden md:flex items-center justify-between px-5 lg:px-6 h-[72px]">
            <Link to="/" className="flex items-center gap-1 font-poppins font-black">
              <span className="text-primary text-3xl md:text-4xl">&lt;</span>
              <span className="text-white text-2xl md:text-3xl">/</span>
              <span className="text-primary text-3xl md:text-4xl">&gt;</span>
            </Link>

            <nav className="flex items-center gap-7 lg:gap-9">
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

              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="ml-2 px-4 py-2 bg-primary text-black font-montserrat font-bold text-xs uppercase tracking-widest rounded-lg hover:scale-105 transition-all duration-300"
              >
                Register
              </a>
            </nav>
          </div>

          {/* ---------- Mobile Navbar (Logo + Scrollable Nav) ---------- */}
          <div className="md:hidden flex flex-col">

            {/* Logo */}
            <div className="flex items-center justify-center h-[60px]">
              <Link to="/" className="flex items-center gap-1 font-poppins font-black">
                <span className="text-primary text-2xl">&lt;</span>
                <span className="text-white text-xl">/</span>
                <span className="text-primary text-2xl">&gt;</span>
              </Link>
            </div>

            {/* Scrollable Nav */}
            <nav
              aria-label="Primary"
              className="flex items-center gap-3 px-3 pb-3 overflow-x-auto no-scrollbar"
            >
              {mobileLinks.map(({ label, path, Icon }) => {
                const isActive = location.pathname === path

                return (
                  <Link
                    key={path}
                    to={path}
                    className={`flex flex-col items-center justify-center shrink-0 min-w-[64px] h-[56px] rounded-2xl transition ${isActive
                        ? 'bg-white/10 border border-primary/30 text-primary'
                        : 'text-white/70'
                      }`}
                  >
                    <Icon size={20} />
                    <span className="text-[10px] mt-1">{label}</span>
                  </Link>
                )
              })}

              {/* Register */}
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center shrink-0 min-w-[64px] h-[56px] rounded-2xl bg-primary text-black font-semibold"
              >
                <ExternalLink size={20} />
                <span className="text-[10px] mt-1">Register</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  )
}