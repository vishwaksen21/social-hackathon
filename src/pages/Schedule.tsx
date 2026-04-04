import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Clock } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import MagneticButton from '../components/MagneticButton'
import {
  EVENT_TIMELINE,
  DAY1_SCHEDULE,
  DAY2_SCHEDULE,
  REGISTER_URL,
} from '../utils/data'

/* ---------- Schedule Row ---------- */
function ScheduleRow({ time, event, location, index }: any) {
  return (
    <InteractiveCard
      className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 md:px-6 md:py-4 hover:bg-white/[0.04] transition"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-2 md:grid md:grid-cols-[120px_1fr_auto] md:gap-6 items-start md:items-center">

        <div className="text-primary font-semibold flex items-center gap-2 text-xs md:text-sm">
          <Clock size={14} />
          {time}
        </div>

        <div className="text-white font-medium text-sm md:text-base">
          {event}
        </div>

        <div className="text-white/50 text-xs flex items-center gap-1">
          <MapPin size={12} />
          {location}
        </div>

      </div>
    </InteractiveCard>
  )
}

/* ---------- Page ---------- */
export default function Schedule() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24">

      {/* ---------- Title ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-6xl mb-3 md:mb-5">
          Event <span className="text-primary">Schedule</span>
        </h1>

        <p className="text-white/60 max-w-md mx-auto text-xs sm:text-sm md:text-base">
          Track every milestone and make the most of your hackathon journey.
        </p>
      </motion.div>

      {/* ---------- Timeline ---------- */}
      <div className="mb-14 md:mb-24">
        <div className="relative max-w-2xl mx-auto">

          {/* Line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[2px] bg-primary/40" />

          <div className="space-y-8 md:space-y-10">
            {EVENT_TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-3 md:left-4 -translate-x-1/2 top-4 md:top-5 w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded-full shadow-[0_0_10px_theme(colors.primary)]" />

                {/* Card */}
                <div className="ml-8 md:ml-10 w-full">
                  <InteractiveCard className="card-glass px-4 py-3 md:px-5 md:py-4">
                    <p className="text-primary font-bold text-xs md:text-sm mb-1">
                      {item.date}
                    </p>
                    <p className="text-white text-sm md:text-base font-medium">
                      {item.event}
                    </p>
                  </InteractiveCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Day Sections ---------- */}
      <div className="space-y-12 md:space-y-16 mb-16 md:mb-20">
        {[
          { title: 'Day 1 – The Beginning', date: 'May 13, 2026', rows: DAY1_SCHEDULE },
          { title: 'Day 2 – Final Sprint', date: 'May 14, 2026', rows: DAY2_SCHEDULE },
        ].map(({ title, date, rows }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-1 mb-5 md:mb-6">
              <h2 className="font-poppins font-bold text-lg md:text-2xl">
                {title}
              </h2>
              <p className="text-primary text-xs md:text-sm">{date}</p>
            </div>

            {/* Rows */}
            <div className="space-y-3">
              {rows.map((row, i) => (
                <ScheduleRow key={i} index={i} {...row} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---------- CTA ---------- */}
      <motion.div
        className="text-center max-w-md mx-auto mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="text-white/80 text-base md:text-lg mb-5">
          Ready to build something impactful?
        </p>

        <div className="flex justify-center items-center gap-2 text-primary/80 text-xs md:text-sm mb-5">
          <MapPin size={14} />
          CMRIT, Bangalore
        </div>

        <MagneticButton>
          <motion.a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-black font-bold text-xs md:text-sm uppercase rounded-xl shadow-[0_0_20px_rgba(255,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,0,0.6)] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now <ExternalLink size={16} />
          </motion.a>
        </MagneticButton>
      </motion.div>

      {/* ---------- Note ---------- */}
      <div className="text-center text-white/40 text-[10px] md:text-xs mt-12 md:mt-16">
        Schedule may change. Updates will be shared via WhatsApp.
      </div>
    </div>
  )
}