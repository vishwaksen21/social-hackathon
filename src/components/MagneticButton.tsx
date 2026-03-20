import { motion, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

export default function MagneticButton({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Smoother, slightly loose springs for a magnetic feel
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    // Calculate distance from center of the button
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    // Pull the button towards the cursor (strength: 0.2)
    x.set(middleX * 0.2)
    y.set(middleY * 0.2)
  }

  const handleMouseLeave = () => {
    // Snap back to center
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
