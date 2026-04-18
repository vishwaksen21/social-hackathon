import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import Background from './components/Background'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Themes = lazy(() => import('./pages/Themes'))
const Schedule = lazy(() => import('./pages/Schedule'))
const Prizes = lazy(() => import('./pages/Prizes'))
const Team = lazy(() => import('./pages/Team'))
const Results = lazy(() => import('./pages/Results'))
const FAQs = lazy(() => import('./pages/FAQs'))
const Contact = lazy(() => import('./pages/Contact'))
const Gallery = lazy(() => import('./pages/Gallery'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo({ top: 0, behavior: 'auto' })}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: 'blur(10px)', y: 15 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        exit={{ opacity: 0, filter: 'blur(10px)', y: -15 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/team" element={<Team />} />
          <Route path="/results" element={<Results />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Background />
      <MainLayout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,0,0.5)]" />
          </div>
        }>
          <AnimatedRoutes />
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
