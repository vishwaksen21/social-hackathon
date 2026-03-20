import { useState, useEffect } from 'react'
import { EVENT_DATE } from '../utils/data'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

function getTimeLeft(): TimeLeft {
  const now = new Date().getTime()
  const distance = EVENT_DATE.getTime() - now

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
    expired: false,
  }
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (timeLeft.expired) {
    return (
      <div className="inline-flex items-center gap-3 px-6 py-4 border border-primary/40 rounded-2xl bg-primary/10">
        <span className="text-primary font-poppins font-bold text-xl tracking-widest">EVENT STARTED</span>
      </div>
    )
  }

  const items = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ]

  return (
    <div className="flex gap-3 flex-wrap">
      {items.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center px-5 py-4 bg-white/5 border border-white/10 rounded-2xl min-w-[80px] backdrop-blur-sm"
        >
          <span className="font-poppins text-4xl font-bold text-white tabular-nums leading-none mb-1">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-white/50 text-xs uppercase tracking-widest font-montserrat">{label}</span>
        </div>
      ))}
    </div>
  )
}
