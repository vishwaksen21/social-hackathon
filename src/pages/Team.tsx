import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { TEAM_MEMBERS } from '../utils/data'
import { useState } from 'react'

type Member = {
  name: string
  role: string
  image: string
  linkedin?: string
}

const TeamMemberCard = ({ member, index }: { member: Member; index: number }) => {
  const [open, setOpen] = useState(false)
  const imageUrl = member.image || '/place-holder.png'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="w-full group relative mt-10 md:mt-12"
      onClick={() => setOpen(!open)} // 👉 tap for mobile
    >

      {/* Base Card */}
      <div
        className={`relative transition-all duration-300 ${
          open ? 'opacity-0 scale-95' : 'group-hover:opacity-0 group-hover:scale-95'
        }`}
      >
        <div className="card-glass rounded-2xl pt-14 md:pt-16 pb-5 px-3 md:px-4 border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-lg min-h-[120px] flex flex-col justify-end">
          <h3 className="text-sm md:text-lg font-poppins font-bold text-center text-primary">
            {member.name}
          </h3>

          <p className="text-center text-white/50 font-inter text-[10px] md:text-xs tracking-wider uppercase font-semibold mt-1">
            {member.role}
          </p>
        </div>

        {/* Avatar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={imageUrl}
            alt={member.name}
            className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full border-[3px] border-[#0a0a0a] shadow-[0_0_15px_rgba(255,255,0,0.15)] bg-zinc-900"
          />
        </div>
      </div>

      {/* Overlay (Hover + Mobile Tap) */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center p-4 overflow-hidden border border-primary/30 shadow-[0_0_25px_rgba(255,255,0,0.2)]
        ${
          open
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100'
        }`}
      >

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center z-10 w-full h-full text-center">
          <h3 className="text-base md:text-xl font-poppins font-bold text-primary">
            {member.name}
          </h3>

          <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-widest mt-1 mb-3">
            {member.role}
          </p>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ---------- Page ---------- */
export default function Team() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24 min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 blur-[120px] md:blur-[150px] top-0 left-1/2 -translate-x-1/2" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-6 leading-tight">
          Meet The{' '}
          <span className="text-primary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">
            Team
          </span>
        </h1>

        <p className="text-white/60 max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base font-inter leading-relaxed">
          The core team behind the hackathon — building, organizing, and making it happen.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-14 md:gap-y-20">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
