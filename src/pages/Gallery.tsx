import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const GALLERY_IMAGES = [
  { id: 1, src: '/social/social1.jpg', span: 'col-span-1 sm:col-span-2 md:col-span-2 sm:row-span-2 row-span-1' },
  { id: 2, src: '/social/social2.jpg', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 3, src: '/social/social3.jpg', span: 'col-span-1 md:col-span-1 sm:row-span-2 row-span-1' },
  { id: 4, src: '/social/social4.jpg', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 5, src: '/social/social5.jpg', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 6, src: '/social/social6.jpeg', span: 'col-span-1 md:col-span-1 row-span-2 md:row-span-2', fit: 'contain' },
  { id: 7, src: '/social/social7.jpeg', span: 'col-span-1 sm:col-span-2 md:col-span-2 sm:row-span-2 row-span-1', fit: 'contain' },
  { id: 8, src: '/social/social8.jpeg', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 9, src: '/social/social9.jpeg', span: 'col-span-1 sm:col-span-2 md:col-span-2 sm:row-span-2 row-span-1' },
  { id: 10, src: '/social/social10.jpeg', span: 'col-span-1 sm:col-span-2 md:col-span-2 sm:row-span-2 row-span-1' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-[#090909] relative overflow-hidden font-inter text-white w-full flex items-center justify-center">

      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.05'%3E%3Cpath d='M40 0L80 40L40 80L0 40z'/%3E%3Cpath d='M0 0L80 80M80 0L0 80'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:py-24">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="font-poppins font-black uppercase text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-6 leading-tight">
            Past{' '}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]">
              Memories
            </span>
          </h1>

          <p className="text-white/60 max-w-md md:max-w-xl mx-auto text-xs sm:text-sm md:text-base font-inter leading-relaxed px-4">
            A glimpse into the innovation, teamwork, and excitement from our previous hackathons.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] sm:auto-rows-[160px] md:auto-rows-[200px] gap-3 sm:gap-4 md:gap-5 relative z-10">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i % 8) * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative rounded-[16px] sm:rounded-[20px] overflow-hidden cursor-pointer bg-white/[0.03] border border-white/[0.08] ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 z-10 ${img.fit === 'contain'
                    ? 'bg-black/5 opacity-0 group-hover:opacity-100'
                    : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100'
                  }`}
              />

              {/* Image */}
              <img
                src={img.src}
                className={`w-full h-full transform transition-transform duration-700 ease-in-out ${img.fit === 'contain'
                    ? 'object-contain bg-white p-2 group-hover:scale-[1.02]'
                    : 'object-cover group-hover:scale-110'
                  }`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 z-50"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Enlarged image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}