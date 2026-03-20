import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { TEAM_MEMBERS } from '../utils/data'

type Member = {
  name: string
  role: string
  image: string
  linkedin?: string
}

/* ---------- Card ---------- */
const TeamMemberCard = ({ member, index }: { member: Member; index: number }) => {
  const imageUrl = member.image || '/place-holder.png'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="w-full group relative mt-12"
    >

      {/* Base Card */}
      <div className="relative transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
        <div className="card-glass rounded-[24px] pt-16 pb-6 px-4 border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-lg h-full min-h-[140px] flex flex-col justify-end">
          <h3 className="text-base md:text-lg font-poppins font-bold text-center text-primary">
            {member.name}
          </h3>
          <p className="text-center text-white/50 font-inter text-xs tracking-wider uppercase font-semibold mt-1">
            {member.role}
          </p>
        </div>

        {/* Avatar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={imageUrl}
            alt={member.name}
            className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-[3px] border-[#0a0a0a] shadow-[0_0_20px_rgba(255,255,0,0.15)] bg-zinc-900"
          />
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 rounded-[24px] opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex flex-col items-center justify-center p-4 overflow-hidden shadow-[0_0_30px_rgba(255,255,0,0.2)] border border-primary/30">

        {/* Background Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center z-10 w-full h-full">
          <h3 className="text-lg md:text-xl font-poppins font-bold text-primary text-center">
            {member.name}
          </h3>

          <p className="text-white/80 text-xs font-inter uppercase tracking-widest text-center mt-1 mb-4">
            {member.role}
          </p>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-black hover:scale-110 shadow-[0_0_15px_rgba(255,255,0,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin className="h-5 w-5" />
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
    <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 min-h-screen">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[150px] top-0 left-1/2 -translate-x-1/2" />
      </div>

      {/* 🚀 Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="font-poppins font-black uppercase text-3xl md:text-6xl mb-6">
          Meet The{' '}
          <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.4)]">
            Team
          </span>
        </h1>

        <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base font-inter leading-relaxed">
          The core team behind the hackathon — building, organizing, and making it happen.
        </p>
      </motion.div>

      {/* 👥 Team Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-16 md:grid-cols-3 md:gap-x-8 md:gap-y-24">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}