import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SOCIAL_LINKS, REGISTER_URL, FAQS } from '../utils/data'
import { Phone, Mail, Instagram, Linkedin, ExternalLink, Plus, Minus } from 'lucide-react'
import MagneticButton from '../components/MagneticButton'
import InteractiveCard from '../components/InteractiveCard'

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#090909] relative overflow-hidden font-inter text-white flex flex-col items-center pt-24 md:pt-32 pb-24 px-4 sm:px-6 w-full">

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
          className="text-center mb-12 md:mb-16"
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

        {/* Divider */}
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16 md:my-28" />

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 w-full"
        >
          <h2 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-5xl mb-3 md:mb-4 leading-tight">
            Common{' '}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">
              Questions
            </span>
          </h2>
          <p className="text-white/60 font-inter max-w-md md:max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Everything you need to know about The Social Hackathon 2026.
          </p>
        </motion.div>

        <div className="w-full max-w-3xl space-y-3 md:space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <InteractiveCard
                key={i}
                className={`overflow-hidden rounded-xl md:rounded-2xl border bg-white/[0.02] backdrop-blur-xl transition-all duration-300 ${isOpen
                    ? 'border-primary/40 shadow-[0_0_25px_rgba(255,255,0,0.15)]'
                    : 'border-white/10'
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Question */}
                <button
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left group active:scale-[0.99] transition"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <h3
                    className={`font-inter font-semibold text-sm md:text-base pr-4 leading-snug ${isOpen
                        ? 'text-primary'
                        : 'text-white group-hover:text-primary/80'
                      }`}
                  >
                    {faq.q}
                  </h3>

                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition ${isOpen
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'border-white/20 text-white/50'
                      }`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 md:px-6 pb-5 md:pb-6 text-white/70 font-inter text-xs sm:text-sm md:text-base leading-relaxed border-t border-white/5">
                        <div className="pt-3 md:pt-4">{faq.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </InteractiveCard>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 flex flex-col items-center text-center w-full">
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