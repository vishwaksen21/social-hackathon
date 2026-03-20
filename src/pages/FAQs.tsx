import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import { FAQS } from '../utils/data'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="relative max-w-3xl mx-auto px-6 py-24 min-h-screen">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-primary/10 blur-[130px] top-[10%] left-[-50px]" />
        <div className="absolute w-[300px] h-[300px] bg-primary/5 blur-[100px] bottom-[20%] right-[-50px]" />
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="font-poppins font-black uppercase text-4xl md:text-5xl mb-4">
          Common <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.4)]">Questions</span>
        </h1>
        <p className="text-white/60 font-inter max-w-lg mx-auto text-sm md:text-base">
          Everything you need to know about The Social Hackathon 2026.
        </p>
      </motion.div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <InteractiveCard
            key={i}
            className={`overflow-hidden transition-all duration-300 rounded-2xl border bg-white/[0.02] backdrop-blur-xl ${
              openIndex === i ? 'border-primary/40 shadow-[0_0_30px_rgba(255,255,0,0.15)]' : 'border-white/10 hover:border-white/20'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className={`font-inter font-semibold text-sm md:text-base pr-4 transition-colors ${openIndex === i ? 'text-primary' : 'text-white group-hover:text-primary/80'}`}>
                {faq.q}
              </h3>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                openIndex === i ? 'bg-primary/10 border-primary text-primary' : 'border-white/20 text-white/50 group-hover:bg-white/5'
              }`}>
                {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-5 md:px-6 pb-6 pt-0 text-white/70 font-inter text-sm md:text-base leading-relaxed border-t border-white/5 mt-2">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </InteractiveCard>
        ))}
      </div>
    </div>
  )
}
