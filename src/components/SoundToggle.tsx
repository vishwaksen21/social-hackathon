import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

// You can replace this src with your own ambient MP3 file placed in the /public folder
const AMBIENT_TRACK = 'https://assets.mixkit.co/active_storage/sfx/285/285-preview.mp3' 

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(AMBIENT_TRACK)
    audioRef.current.loop = true
    audioRef.current.volume = 0.2 // Soft background 
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleSound = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e))
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring' }}
      onClick={toggleSound}
      className={`fixed bottom-6 lg:bottom-10 right-6 lg:right-10 z-[100] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all duration-500 shadow-2xl ${
        isPlaying 
        ? 'bg-primary/20 border-primary text-primary shadow-[0_0_30px_rgba(255,255,0,0.5)]' 
        : 'bg-white/5 border-white/20 text-white/50 hover:bg-white/10 hover:text-white hover:scale-105'
      }`}
      aria-label="Toggle Ambient Sound"
    >
      {/* Pulse effect when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border border-primary animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50" />
      )}
      
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </motion.button>
  )
}
