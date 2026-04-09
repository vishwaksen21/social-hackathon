import { motion, AnimatePresence } from 'framer-motion'
import InteractiveCard from '../components/InteractiveCard'
import React, { useState, useEffect } from 'react'
import { THEMES } from '../utils/data'

type ThemeOverride = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  buttons: string[]
}

const OVERRIDE_THEMES: ThemeOverride[] = [
  {
    id: 1,
    title: 'Smart Cities & Infrastructure',
    description: 'Smart Cities focus on building sustainable, efficient, and technology-driven urban environments. This includes urban planning, smart transportation, and energy-efficient systems powered by AI and data analytics.',
    icon: (
      <svg className="w-8 h-8 text-[#EED244]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M14 21V9h3v12M9 7h2m-2 4h2m-2 4h2m-2 4h2M15 11h1M3 21h18" />
        <path d="M5 21v-4a2 2 0 012-2h1M5 15h2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      </svg>
    ),
    buttons: ['Urban Planning', 'Smart Traffic', 'Energy Optimization'],
  },
  {
    id: 2,
    title: 'Education & Digital Empowerment',
    description: 'Education and digital platforms are transforming how knowledge is delivered and accessed. With initiatives like IndiaStack, technology is enabling inclusive and personalized learning.',
    icon: (
      <svg className="w-8 h-8 text-[#EED244]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 5-9 5-9-5 9-5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13v7m0 0a4 4 0 01-4-4v-3m4 7a4 4 0 004-4v-3M5.5 6.5v7.36c0 .7.33 1.36.88 1.77A9.97 9.97 0 0012 18.5a9.97 9.97 0 005.62-1.87c.55-.41.88-1.07.88-1.77V6.5" />
      </svg>
    ),
    buttons: ['Personalized Learning', 'Skill Development', 'Digital Identity'],
  },
  {
    id: 3,
    title: 'Health, Well-being & AI for Impact',
    description: 'Technology and AI are revolutionizing healthcare by improving accessibility, diagnostics, and patient care. AI-driven systems can help in early disease detection and inclusive delivery.',
    icon: (
      <svg className="w-8 h-8 text-[#EED244]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4c-3 0-5 2-5 4.5 0 1 .5 2 1 2.5-.5 1-1 2-1 3.5 0 2.5 2.5 4.5 5 4.5s5-2 5-4.5c0-1.5-.5-2.5-1-3.5.5-.5 1-1.5 1-2.5C17 6 15 4 12 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v15" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10h6M9 14h6" />
      </svg>
    ),
    buttons: ['AI Diagnostics', 'Telemedicine', 'Mental Health Support'],
  },
  {
    id: 4,
    title: 'Agriculture & Food Systems',
    description: 'Agriculture is a critical sector that can benefit from technology to improve productivity, sustainability, and resilience. Smart farming techniques can enhance crop yield and reduce wastage.',
    icon: (
      <svg className="w-8 h-8 text-[#EED244]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22V10" />
        <path d="M12 10C8 10 6 12 6 14C6 16 8 16 12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 10C16 10 18 12 18 14C18 16 16 16 12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6C8 6 6 8 6 10C6 12 8 12 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6C16 6 18 8 18 10C18 12 16 12 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C8 2 6 4 6 6C6 8 8 8 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C16 2 18 4 18 6C18 8 16 8 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    buttons: ['Precision Agriculture', 'Smart Irrigation', 'Crop Monitoring'],
  },
  {
    id: 5,
    title: 'Climate Tech & Sustainability',
    description: 'Climate technology focuses on addressing environmental challenges through innovative solutions such as renewable energy, waste management, and sustainable resource usage.',
    icon: (
      <svg className="w-8 h-8 text-[#EED244]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-2 3-3 6-3 9s1 6 3 9c2-3 3-6 3-9s-1-6-3-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18" />
      </svg>
    ),
    buttons: ['Renewable Energy', 'EV Infrastructure', 'Pollution Monitoring'],
  },
  {
    id: 6,
    title: 'Financial Inclusion & Social Good',
    description: 'Financial inclusion ensures that everyone has access to banking, credit, and digital financial services. Technology also supports social good initiatives such as community development.',
    icon: (
      <svg className="w-8 h-8 text-[#EED244]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-1" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 14h5v-4h-5v4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9h.01" />
      </svg>
    ),
    buttons: ['Digital Payments', 'Microfinance', 'Social Good Platforms'],
  }
]

export default function Themes() {
  const [selectedThemeId, setSelectedThemeId] = useState<number | null>(null)

  useEffect(() => {
    if (selectedThemeId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedThemeId])

  const selectedOverride = OVERRIDE_THEMES.find(t => t.id === selectedThemeId)
  const selectedOriginal = THEMES.find(t => t.id === selectedThemeId)

  return (
    <div className="min-h-screen bg-[#090909] relative overflow-hidden font-inter text-white w-full flex items-center justify-center">
      {/* Subtle geometric repeating wireframe pattern of interconnected diamonds */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.05'%3E%3Cpath d='M40 0L80 40L40 80L0 40z'/%3E%3Cpath d='M0 0L80 80M80 0L0 80'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-8 md:px-12 pt-20 pb-28">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="font-poppins font-black text-[2.5rem] sm:text-5xl md:text-[5rem] mb-4 md:mb-6 tracking-tight leading-tight">
            <span className="text-white">Hack</span><span className="text-primary">Themes</span>
          </h1>

          <p className="text-[#a1a1aa] text-[15px] sm:text-[17px] max-w-2xl mx-auto font-normal">
            Choose a domain and build impactful solutions for real-world problems.
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {OVERRIDE_THEMES.map((theme, i) => (
            <div key={theme.id} onClick={() => setSelectedThemeId(theme.id)} className="cursor-pointer h-full outline-none focus:outline-none">
              <ThemeCard theme={theme} index={i} />
            </div>
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedThemeId && selectedOverride && selectedOriginal && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedThemeId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#141414] border border-white/10 rounded-[28px] shadow-[0_0_80px_rgba(0,0,0,0.8)] cursor-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top ambient glow */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#EED244]/80 to-transparent opacity-60" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#EED244]/5 to-transparent pointer-events-none" />
              
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-12 items-start">
                
                {/* Left side: Icon, Title, Desc */}
                <div className="flex-1 space-y-6 md:sticky md:top-0">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-16 h-16 rounded-[20px] bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                      {selectedOverride.icon}
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-[34px] h-[34px] rounded-full bg-[#EED244]/10 border border-[#EED244]/20 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-[#EED244] font-mono tracking-widest pl-[1px]">
                            {selectedOverride.id.toString().padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.2]">
                        {selectedOverride.title}
                      </h2>
                    </div>
                  </div>

                </div>

                {/* Right side: Focuses list */}
                <div className="flex-1 w-full bg-white/[0.02] rounded-[24px] p-6 sm:p-8 border border-white/[0.05]">
                  <h3 className="text-[#EED244] font-semibold text-sm tracking-wider uppercase mb-6 flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EED244] shadow-[0_0_8px_rgba(238,210,68,0.8)]"></span>
                    Detailed Focus Areas
                  </h3>
                  
                  <ul className="space-y-4">
                    {selectedOriginal.focuses.map((focus, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        key={idx} 
                        className="flex gap-4 items-start"
                      >
                        <div className="mt-[2px] shrink-0 w-5 h-5 rounded-full bg-[#EED244]/10 border border-[#EED244]/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#EED244]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[14px] sm:text-[15px] text-gray-300 leading-snug">{focus}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedThemeId(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ThemeCard({ theme, index }: { theme: ThemeOverride; index: number }) {
  return (
    <InteractiveCard
      className="group relative rounded-[20px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-[16px] overflow-hidden transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15] shadow-lg flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 6) * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Subtle edge glow / top light */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex flex-col h-full p-6 md:p-[30px] space-y-6">
        
        {/* Header: Icon, Title, Num */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="shrink-0 flex items-center justify-center">
              {theme.icon}
            </div>
            <h3 className="text-white font-semibold text-[17px] md:text-[19px] leading-[1.3] tracking-wide">
              {theme.title}
            </h3>
          </div>
          
          {/* Number badge */}
          <div className="w-[30px] h-[30px] rounded-full bg-[#EED244]/10 border border-[#EED244]/20 flex items-center justify-center shrink-0 ml-1">
            <span className="text-[11px] font-bold text-[#EED244] font-mono tracking-widest pl-[1px]">
              {theme.id.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-[8px] pt-1 flex-grow items-start content-start">
          {theme.buttons.map((btn, j) => (
            <span
              key={j}
              className="px-[14px] py-[6px] text-[11px] font-medium rounded-full bg-white/[0.04] text-[#d4d4d8] border border-white/[0.08]"
            >
              {btn}
            </span>
          ))}
          <span className="px-[14px] py-[6px] text-[11px] font-medium rounded-full bg-[#EED244]/10 text-[#EED244] border border-[#EED244]/20 flex items-center gap-1 mt-auto">
            View Details <span className="text-[13px] leading-none ml-0.5 mt-[-1px]">›</span>
          </span>
        </div>
        
      </div>
    </InteractiveCard>
  )
}