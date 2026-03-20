import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import Background from './components/Background'
import CursorGlow from './components/CursorGlow'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Themes = lazy(() => import('./pages/Themes'))
const Schedule = lazy(() => import('./pages/Schedule'))
const Prizes = lazy(() => import('./pages/Prizes'))
const Team = lazy(() => import('./pages/Team'))
const Results = lazy(() => import('./pages/Results'))
const FAQs = lazy(() => import('./pages/FAQs'))

// PageTransition component standardizing our blur-fade logic
function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 15 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(10px)', y: -15 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/themes" element={<PageTransition><Themes /></PageTransition>} />
        <Route path="/schedule" element={<PageTransition><Schedule /></PageTransition>} />
        <Route path="/prizes" element={<PageTransition><Prizes /></PageTransition>} />
        <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/results" element={<PageTransition><Results /></PageTransition>} />
        <Route path="/faqs" element={<PageTransition><FAQs /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Background />
      <CursorGlow />
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
