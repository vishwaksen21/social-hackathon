import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Clock, CalendarDays } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import MagneticButton from '../components/MagneticButton'
import {
  EVENT_TIMELINE,
  DAY1_SCHEDULE,
  DAY2_SCHEDULE,
  REGISTER_URL,
} from '../utils/data'

/* ---------- Schedule Row ---------- */
function ScheduleRow({
  time,
  event,
  location,
  index,
}: {
  time: string
  event: string
  location: string
  index: number
}) {
  return (
    <InteractiveCard
      className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 md:px-6 md:py-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {/* Mobile */}
      <div className="flex flex-col gap-2 md:hidden">
        <div className="text-primary text-sm font-semibold">{time}</div>
        <div className="text-white text-sm font-medium">{event}</div>
        <div className="flex items-center gap-1 text-white/50 text-xs">
          <MapPin size={12} />
          {location}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-[140px_1fr_auto] gap-6 items-center">
        <div className="text-primary font-semibold flex items-center gap-2">
          <Clock size={16} />
          {time}
        </div>
        <div className="text-white font-medium">{event}</div>
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
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24">



      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-6 leading-tight">
          Event{' '}
          <span className="text-primary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">
            Schedule
          </span>
        </h1>

        <p className="text-white/60 max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          Plan your journey, meet deadlines, and build something incredible.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mb-16 md:mb-32">
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-20">
          <div className="h-px bg-gradient-to-r from-transparent to-primary/50 w-16 md:w-40" />
          <h2 className="font-montserrat font-bold text-primary text-sm md:text-xl uppercase tracking-widest">
            Milestones
          </h2>
          <div className="h-px bg-gradient-to-l from-transparent to-primary/50 w-16 md:w-40" />
        </div>

        <div className="space-y-10 md:space-y-16 max-w-4xl mx-auto">
          {EVENT_TIMELINE.map((item, i) => (
            <motion.div
              key={item.step}
              className="flex flex-col md:flex-row items-start md:items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Dot */}
              <div className="flex items-center justify-center md:w-[16%]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black border-[2px] md:border-[3px] border-primary rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-[0_0_15px_rgba(255,255,0,0.4)]">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-[45%]">
                <InteractiveCard className="card-glass p-4 md:p-8 rounded-2xl">
                  <p className="text-primary font-bold text-lg md:text-3xl mb-1">
                    {item.step}
                  </p>

                  <p className="text-white text-sm md:text-base font-semibold mb-2">
                    {item.event}
                  </p>

                  <p className="text-white/50 text-xs md:text-sm flex items-center gap-2">
                    <CalendarDays size={14} />
                    {item.date}
                  </p>
                </InteractiveCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Day Sections */}
      <div className="max-w-4xl mx-auto mb-16 md:mb-20">
        {[
          { title: 'Day 1 – The Beginning', date: 'May 13, 2026', rows: DAY1_SCHEDULE },
          { title: 'Day 2 – Final Sprint', date: 'May 14, 2026', rows: DAY2_SCHEDULE },
        ].map(({ title, date, rows }) => (
          <motion.div
            key={title}
            className="mb-14 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="mb-6 md:mb-10 flex flex-col md:flex-row md:justify-between border-b border-primary/20 pb-3 gap-1">
              <h2 className="font-poppins font-bold text-lg md:text-3xl text-white">
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

      {/* CTA */}
      <motion.div
        className="relative rounded-2xl p-[1px] bg-gradient-to-b from-primary/30 to-transparent max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="card-glass p-6 md:p-12 text-center rounded-2xl bg-black/60 backdrop-blur-xl">
          <p className="text-white/80 text-base md:text-xl mb-5">
            Want to be part of the change?
          </p>

          <a
            href="https://maps.google.com/?q=CMRIT+Brookfield+Bangalore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary text-xs md:text-sm mb-6"
          >
            <MapPin size={16} />
            Join us at CMRIT, Bangalore
          </a>

          <MagneticButton>
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 px-6 md:px-10 py-4 md:py-5 bg-primary text-black font-bold text-sm uppercase rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now <ExternalLink size={16} />
            </motion.a>
          </MagneticButton>
        </div>
      </motion.div>

      {/* Note */}
      <motion.div
        className="border-l-4 border-primary bg-primary/10 p-4 md:p-6 rounded-r-xl text-white/60 text-xs md:text-sm max-w-4xl mx-auto mt-16 md:mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <strong className="text-primary">Note:</strong> Schedule may change.
        Updates will be shared via WhatsApp.
      </motion.div>
    </div>
  )
}
