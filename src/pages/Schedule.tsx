import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Clock, CalendarDays } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import MagneticButton from '../components/MagneticButton'
import { EVENT_TIMELINE, DAY1_SCHEDULE, DAY2_SCHEDULE, REGISTER_URL } from '../utils/data'

function ScheduleRow({ time, event, location, index }: { time: string; event: string; location: string; index: number }) {
  return (
    <InteractiveCard
      className="relative group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl mb-4 overflow-hidden transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, type: 'spring' }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, borderColor: 'rgba(255,255,0,0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
    >
      <div className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[140px_1fr_auto] gap-3 md:gap-6 items-center px-4 py-3 md:px-6 md:py-5 w-full h-full">
        <div className="flex items-center gap-2 text-primary font-poppins font-semibold text-sm md:text-base border-r border-white/10 pr-3">
          <Clock size={16} className="text-primary/60 hidden md:block" />
          {time}
        </div>
        <span className="text-white font-inter font-medium text-sm md:text-base leading-tight group-hover:text-primary transition-colors">{event}</span>
        <div className="flex items-center gap-1.5 text-white/50 text-[10px] md:text-xs font-montserrat tracking-wide text-right bg-white/5 px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/5">
          <MapPin size={12} className="text-white/30" />
          {location}
        </div>
      </div>
    </InteractiveCard>
  )
}

export default function Schedule() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[150px] top-[10%] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-primary/5 blur-[120px] bottom-[20%] right-[-100px]" />
      </div>

      {/* 🚀 Title */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 md:mb-24">
        <h1 className="font-poppins font-black uppercase text-3xl md:text-6xl mb-6">
          Event <span className="text-primary drop-shadow-[0_0_20px_rgba(255,255,0,0.4)]">Schedule</span>
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base font-inter leading-relaxed">
          The complete roadmap for the hackathon. Plan your journey, meet deadlines, and build something incredible over these magical days.
        </p>
      </motion.div>

      {/* Event Timeline */}
      <div className="mb-32">
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="h-px bg-gradient-to-r from-transparent to-primary/50 w-24 md:w-40" />
          <h2 className="font-montserrat font-bold text-primary text-center uppercase tracking-widest text-lg md:text-xl">
            Major Milestones
          </h2>
          <div className="h-px bg-gradient-to-l from-transparent to-primary/50 w-24 md:w-40" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center glowing line */}
          <motion.div 
            className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(255,255,0,0.5)]" 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />

          <div className="space-y-16">
            {EVENT_TIMELINE.map((item, i) => (
              <motion.div
                key={item.step}
                className={`flex items-center ${item.side === 'right' ? 'flex-row' : 'flex-row-reverse'} gap-0`}
                initial={{ opacity: 0, x: item.side === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
              >
                {/* Content card */}
                <div className={`w-[48%] md:w-[45%] ${item.side === 'right' ? 'text-left pl-3 md:pl-10' : 'text-right pr-3 md:pr-10'}`}>
                  <InteractiveCard
                    className="card-glass p-4 md:p-8 inline-block w-full group relative overflow-hidden transition-all border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-2xl"
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(255,255,0,0.15)' }}
                  >
                    <p className="font-poppins font-black text-primary text-3xl md:text-4xl mb-2 drop-shadow-[0_0_10px_rgba(255,255,0,0.4)]">{item.step}</p>
                    <p className="font-montserrat font-bold text-white text-sm md:text-base uppercase mb-3 tracking-wide leading-tight group-hover:text-primary transition-colors">{item.event}</p>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs font-inter bg-white/5 inline-flex px-3 py-1.5 rounded-full border border-white/10">
                      <CalendarDays size={14} className="text-primary/60" />
                      {item.date}
                    </div>
                  </InteractiveCard>
                </div>

                {/* Center marker */}
                <div className="w-[16%] flex justify-center relative">
                  <motion.div
                    className="w-12 h-12 bg-black border-[3px] border-primary rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,255,0,0.5)] z-10 text-primary font-poppins font-bold text-sm"
                    whileInView={{ scale: [0, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5, type: 'spring' }}
                  >
                     <div className="absolute w-6 h-6 bg-primary/30 rounded-full animate-pulse blur-sm" />
                    {item.step}
                  </motion.div>
                </div>

                {/* Empty spacer */}
                <div className="w-[48%] md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Day schedules */}
      <div className="max-w-4xl mx-auto mb-20">
        {[
          { title: 'Day 1 \u2013 The Beginning', date: 'May 13, 2026', rows: DAY1_SCHEDULE },
          { title: 'Day 2 \u2013 Final Sprint', date: 'May 14, 2026', rows: DAY2_SCHEDULE },
        ].map(({ title, date, rows }, sectionIndex) => (
          <motion.div 
            key={title} 
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between border-b border-primary/20 pb-4 gap-2">
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white tracking-wide">
                {title}
              </h2>
              <p className="text-primary font-montserrat font-semibold text-sm tracking-wider">{date}</p>
            </div>
            
            <div className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[140px_1fr_auto] gap-3 md:gap-6 px-4 md:px-6 mb-4 text-[10px] md:text-xs font-montserrat font-bold text-primary/60 uppercase tracking-widest pl-2">
              <span>Time</span><span>Event Details</span><span className="text-right">Location</span>
            </div>
            <div className="space-y-3">
              {rows.map((row, i) => (
                <ScheduleRow key={i} index={i} {...row} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Layer */}
      <motion.div
        className="relative rounded-[32px] p-[1px] bg-gradient-to-b from-primary/30 to-transparent max-w-3xl mx-auto overflow-hidden mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="card-glass p-8 md:p-12 text-center rounded-[31px] bg-black/60 backdrop-blur-2xl">
          <p className="text-white/80 font-inter text-lg md:text-xl font-medium mb-6">Want to be part of the change?</p>
          <a
            href="https://maps.google.com/?q=CMRIT+Brookfield+Bangalore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary/80 font-montserrat text-sm border-b border-primary/20 pb-1 mb-8 hover:text-primary transition-colors"
          >
            <MapPin size={16} />
            Join us at CMRIT, Brookfield, Bangalore
          </a>
          <div />
          <MagneticButton>
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-black font-montserrat font-black text-sm md:text-base uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(255,255,0,0.5)] transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Register Now <ExternalLink size={16} />
            </motion.a>
          </MagneticButton>
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        className="border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent p-5 md:p-6 rounded-r-2xl text-white/50 text-sm md:text-[15px] font-inter leading-relaxed max-w-4xl mx-auto mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <strong className="text-primary">Important Note:</strong> The schedule outlined above is subject to minor changes based on final preparations. Real-time updates and announcements will be broadcasted through the official participant WhatsApp group. Do carry your original college identity card during the check-in process.
      </motion.div>
    </div>
  )
}
