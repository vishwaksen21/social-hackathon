import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Circuit grid */}
      <div className="absolute inset-0 circuit-bg opacity-10" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)]" />


    </div>
  )
}
