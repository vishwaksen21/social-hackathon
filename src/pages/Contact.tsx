import { motion } from 'framer-motion'
import { SOCIAL_LINKS, REGISTER_URL } from '../utils/data'
import { Phone, Mail, Instagram, Linkedin, ExternalLink } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#090909] relative overflow-hidden font-inter text-white flex flex-col items-center justify-center pt-28 pb-24 px-6 w-full">

      {/* Subtle geometric repeating wireframe pattern of interconnected diamonds */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.05'%3E%3Cpath d='M40 0L80 40L40 80L0 40z'/%3E%3Cpath d='M0 0L80 80M80 0L0 80'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-[5rem] mb-4 md:mb-6 tracking-tight leading-tight">
            <span className="text-white">Contact</span><span className="text-primary"> Us</span>
          </h1>

          <p className="text-[#a1a1aa] text-[15px] sm:text-[17px] max-w-2xl mx-auto font-normal px-4">
            Have questions about the Social Hackathon? We’re here to help. Reach out through any channel below.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          {[
            {
              title: "Phone",
              value: SOCIAL_LINKS.phone,
              href: `tel:${SOCIAL_LINKS.phone.replace(/\s+/g, '')}`,

              icon: Phone
            },
            {
              title: "Email",
              value: SOCIAL_LINKS.email.replace('mailto:', ''),
              href: SOCIAL_LINKS.email,

              icon: Mail
            },
            {
              title: "Instagram",
              value: "@socialhackathon_cmrit",
              href: SOCIAL_LINKS.instagram,

              icon: Instagram
            },
            {
              title: "LinkedIn",
              value: "Innovation Club",
              href: SOCIAL_LINKS.linkedin,

              icon: Linkedin
            }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative p-6 sm:p-8 rounded-[20px] bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08] hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(238,210,68,0.15)] hover:-translate-y-2 flex flex-col items-start"
            >
              {/* Subtle edge glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 rounded-full flex items-center justify-center bg-[#EED244]/10 border border-[#EED244]/20 text-[#EED244] group-hover:scale-110 transition">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 font-poppins">{item.title}</h3>
              <p className="text-[#a1a1aa] text-sm sm:text-[15px]">{item.value}</p>

            </a>
          ))}

        </motion.div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center text-center">
          <p className="text-[#a1a1aa] mb-5 text-[15px] sm:text-[17px]">
            Ready to build something impactful?
          </p>

          <MagneticButton>
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-black font-montserrat font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(238,210,68,0.3)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER NOW
              <ExternalLink size={16} />
            </motion.a>
          </MagneticButton>
        </div>

      </div>
    </div>
  )
}