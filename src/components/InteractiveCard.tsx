import { HTMLMotionProps, motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent, useRef } from 'react'

export default function InteractiveCard({
  children,
  className = '',
  ...props
}: HTMLMotionProps<'div'> & {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    // Calculate normalized coordinates (-1 to 1) based on card boundaries
    const pctX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const pctY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    x.set(pctX)
    y.set(pctY)
    if (props.onMouseMove) props.onMouseMove(e)
  }

  function handleMouseLeave(e: MouseEvent<HTMLDivElement>) {
    x.set(0)
    y.set(0)
    if (props.onMouseLeave) props.onMouseLeave(e)
  }

  // Tilt effect constraints
  const rotateX = useTransform(mouseY, [-1, 1], [4, -4])
  const rotateY = useTransform(mouseX, [-1, 1], [-4, 4])
  
  // Spotlight effect tracking the cursor
  const background = useMotionTemplate`radial-gradient(350px circle at ${(mouseX.get() + 1) * 50}% ${(mouseY.get() + 1) * 50}%, rgba(255, 255, 0, 0.08), transparent 70%)`

  return (
    <motion.div
      ref={ref}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...props.style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      className={`relative group ${className}`}
    >
      {/* The glow effect layer */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100 overflow-hidden mix-blend-screen">
        <motion.div
          className="w-full h-full absolute inset-0"
          style={{ background }}
        />
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full rounded-[inherit]">
        {children}
      </div>
    </motion.div>
  )
}
