import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import { FAQS } from '../utils/data'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24 min-h-screen">

      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-primary/10 blur-[100px] md:blur-[130px] top-[10%] left-[-50px]" />
        <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-primary/5 blur-[80px] md:blur-[100px] bottom-[20%] right-[-50px]" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 md:mb-16"
      >
        <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-5xl mb-3 md:mb-4 leading-tight">
          Common{' '}
          <span className="text-primary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">
            Questions
          </span>
        </h1>

        <p className="text-white/60 font-inter max-w-md md:max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-2">
          Everything you need to know about The Social Hackathon 2026.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="space-y-3 md:space-y-4">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i

          return (
            <InteractiveCard
              key={i}
              className={`overflow-hidden rounded-xl md:rounded-2xl border bg-white/[0.02] backdrop-blur-xl transition-all duration-300 ${
                isOpen
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
                  className={`font-inter font-semibold text-sm md:text-base pr-4 leading-snug ${
                    isOpen
                      ? 'text-primary'
                      : 'text-white group-hover:text-primary/80'
                  }`}
                >
                  {faq.q}
                </h3>

                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition ${
                    isOpen
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
    </div>
  )
}
