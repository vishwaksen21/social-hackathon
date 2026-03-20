import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorGlow() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Smooth spring for the large trailing glow
  const smoothX = useSpring(cursorX, { stiffness: 100, damping: 25 })
  const smoothY = useSpring(cursorY, { stiffness: 100, damping: 25 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [cursorX, cursorY])

  return (
    <>
      {/* Small exact white dot for precision */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Large yellowish trailing glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,0,0.06) 0%, transparent 60%)',
          borderRadius: '50%',
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
