import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({ children }: { children: ReactNode }) {
  const location = useLocation()

  return (
    <div className="relative min-h-screen flex flex-col z-10 overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
