import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle, 
  XCircle, 
  Search, 
  Award, 
  ShieldCheck, 
  QrCode, 
  User,
  GraduationCap,
  Calendar,
  Printer,
  Sparkles,
  Layers
} from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import { CERTIFICATES, CertificateRecord } from '../utils/certificates'

export default function Verify() {
  const [searchParams, setSearchParams] = useSearchParams()
  const idQuery = searchParams.get('id') || ''
  
  const [inputVal, setInputVal] = useState(idQuery)
  const [searchedId, setSearchedId] = useState(idQuery)
  const [showStudio, setShowStudio] = useState(false)
  const [studioSearch, setStudioSearch] = useState('')

  // Pagination for the studio grid to avoid loading all 326 images at once
  const [studioPage, setStudioPage] = useState(1)
  const itemsPerPage = 12

  // Keep input synchronized if URL query changes
  useEffect(() => {
    if (idQuery) {
      setInputVal(idQuery)
      setSearchedId(idQuery.trim().toUpperCase())
    } else {
      setSearchedId('')
    }
  }, [idQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim()) return
    const cleanId = inputVal.trim().toUpperCase()
    setSearchParams({ id: cleanId })
    setSearchedId(cleanId)
  }

  // Find single certificate match
  const certMatch = CERTIFICATES.find(
    c => c.id.trim().toUpperCase() === searchedId.trim().toUpperCase()
  )

  // Filtered certificates for the studio view
  const filteredCertificates = useMemo(() => {
    if (!studioSearch.trim()) return CERTIFICATES
    const q = studioSearch.toLowerCase()
    return CERTIFICATES.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.id.toLowerCase().includes(q) || 
      c.college.toLowerCase().includes(q)
    )
  }, [studioSearch])

  // Paginated chunk
  const paginatedCertificates = useMemo(() => {
    const start = (studioPage - 1) * itemsPerPage
    return filteredCertificates.slice(start, start + itemsPerPage)
  }, [filteredCertificates, studioPage])

  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage)

  // Helper function to print a specific badge view cleanly
  const printBadge = (cert: CertificateRecord) => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
      `https://social-hackathon.vercel.app/verify?id=${cert.id}`
    )}`
    
    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    printWindow.document.write(`
      <html>
        <head>
          <title>${cert.name}</title>
          <style>
            body {
              font-family: 'Inter', system-ui, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background-color: #ffffff;
            }
            .badge-container {
              border: 3px solid #111;
              padding: 40px;
              border-radius: 24px;
              text-align: center;
              max-w: 400px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .qr-image {
              width: 240px;
              height: 240px;
              margin-bottom: 16px;
            }
            .cert-id {
              font-size: 28px;
              font-weight: 900;
              letter-spacing: 2px;
              color: #000;
              font-family: monospace;
              margin-top: 10px;
            }
            .name {
              font-size: 22px;
              font-weight: 700;
              color: #333;
              margin-top: 20px;
            }
            .college {
              font-size: 16px;
              color: #666;
              margin-top: 4px;
            }
            .event {
              font-size: 14px;
              font-weight: bold;
              color: #10B981;
              margin-top: 24px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
          </style>
        </head>
        <body>
          <div class="badge-container">
            <!-- QR Code -->
            <img src="${qrUrl}" class="qr-image" alt="QR Code" />
            
            <!-- Unique ID Just Below QR -->
            <div class="cert-id">${cert.id}</div>
            
            <div class="name">${cert.name}</div>
            <div class="college">${cert.college}</div>
            <div class="event">✅ Official Verified Record</div>
          </div>
          <script>
            // Wait for image load before printing
            setTimeout(() => {
              window.print();
            }, 1000);
          </script>
        </body>
      </html>
    `)
    printWindow.document.close()
  }

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-20 md:pt-12 md:pb-28 min-h-[calc(100vh-160px)] flex flex-col justify-between">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div>
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs sm:text-sm font-medium mb-4"
          >
            <ShieldCheck size={16} />
            <span>Official Portal</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins font-black uppercase text-2xl sm:text-4xl md:text-5xl tracking-tight mb-3"
          >
            Certificate <span className="text-primary">Verification</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto text-xs sm:text-sm md:text-base"
          >
            Verify the authenticity of certificates issued for The Social Hackathon’26
          </motion.p>
        </div>

        {/* Search Input Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-md mx-auto mb-6"
        >
          <form onSubmit={handleSearch} className="relative flex items-center">
            <div className="absolute left-4 text-white/40 pointer-events-none">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Enter Certificate ID (e.g. TSH26-A7X91K)"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-full bg-white/5 border border-white/15 focus:border-primary rounded-xl py-3.5 pl-11 pr-24 text-sm md:text-base text-white placeholder-white/40 outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(255,255,0,0.15)] font-mono uppercase"
            />
            <button
              type="submit"
              className="absolute right-1.5 bg-primary hover:bg-primary-dark text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition duration-200"
            >
              Verify
            </button>
          </form>
          {/* Quick example clickers */}
          <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-white/40">
            <span>Try sample ID:</span>
            <button 
              type="button" 
              onClick={() => {
                setInputVal("TSH26-A7X91K");
                setSearchParams({ id: "TSH26-A7X91K" });
              }}
              className="text-primary/80 hover:text-primary underline font-mono cursor-pointer"
            >
              TSH26-A7X91K
            </button>
            <span>or</span>
            <button 
              type="button" 
              onClick={() => {
                setInputVal("TSH26-1005");
                setSearchParams({ id: "TSH26-1005" });
              }}
              className="text-primary/80 hover:text-primary underline font-mono cursor-pointer"
            >
              TSH26-1005
            </button>
          </div>
        </motion.div>

        {/* Toggle Studio Button */}
        <div className="text-center mb-10">
          <button
            type="button"
            onClick={() => {
              setShowStudio(!showStudio)
              // Reset pagination on toggle
              setStudioPage(1)
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition duration-200"
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span>{showStudio ? "Close QR Generator Studio" : `👑 Open Bulk QR Generator Studio (${CERTIFICATES.length} Badges)`}</span>
          </button>
        </div>

        {/* Results Container */}
        <AnimatePresence mode="wait">
          {showStudio ? (
            /* BULK QR STUDIO VIEW */
            <motion.div
              key="studio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="border-t border-white/10 pt-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="text-primary" size={20} />
                    <span>Real-Time Scannable Badges</span>
                  </h2>
                  <p className="text-xs text-white/50 mt-0.5">
                    Each QR code points directly to its live verification page with the unique ID securely stamped below.
                  </p>
                </div>

                {/* Studio Search filter */}
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-2.5 text-white/40" size={14} />
                  <input
                    type="text"
                    placeholder="Filter by name or ID..."
                    value={studioSearch}
                    onChange={(e) => {
                      setStudioSearch(e.target.value)
                      setStudioPage(1)
                    }}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Grid of Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedCertificates.map((cert) => {
                  const liveUrl = `https://social-hackathon.vercel.app/verify?id=${cert.id}`
                  const qrImgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(liveUrl)}`

                  return (
                    <div 
                      key={cert.id} 
                      className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center justify-between hover:border-white/20 transition duration-300 group"
                    >
                      <div className="w-full">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/70 block w-max mx-auto mb-3">
                          {cert.role}
                        </span>

                        {/* Composite Visual Container: QR + ID Just Below */}
                        <div className="bg-white p-4 rounded-xl inline-block shadow-md border border-white/20 group-hover:scale-105 transition duration-300">
                          <img 
                            src={qrImgUrl} 
                            alt={`QR for ${cert.id}`} 
                            className="w-32 sm:w-36 h-32 sm:h-36 mx-auto object-contain"
                            loading="lazy"
                          />
                          {/* Unique ID printed exactly below the QR code inside the white badge wrapper */}
                          <div className="text-black font-mono font-black text-sm sm:text-base tracking-wider mt-2.5 pt-2 border-t border-black/10 select-all">
                            {cert.id}
                          </div>
                        </div>

                        <h3 className="text-sm font-semibold text-white mt-4 line-clamp-1">{cert.name}</h3>
                        <p className="text-xs text-white/60 mt-0.5 line-clamp-1">{cert.college}</p>
                      </div>

                      {/* Print / View option */}
                      <button
                        type="button"
                        onClick={() => printBadge(cert)}
                        className="mt-4 w-full py-2 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-black font-semibold text-xs transition duration-200 flex items-center justify-center gap-1.5"
                      >
                        <Printer size={14} />
                        <span>Print Scannable Badge</span>
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-white/5">
                  <button
                    type="button"
                    disabled={studioPage === 1}
                    onClick={() => setStudioPage(p => Math.max(p - 1, 1))}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 disabled:pointer-events-none text-xs text-white"
                  >
                    Previous
                  </button>
                  <span className="text-xs text-white/50 px-2">
                    Page <strong className="text-white">{studioPage}</strong> of {totalPages}
                  </span>
                  <button
                    type="button"
                    disabled={studioPage === totalPages}
                    onClick={() => setStudioPage(p => Math.min(p + 1, totalPages))}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 disabled:opacity-30 disabled:pointer-events-none text-xs text-white"
                  >
                    Next
                  </button>
                </div>
              )}
            </motion.div>
          ) : searchedId ? (
            <motion.div
              key={searchedId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {certMatch ? (
                /* Valid Certificate UI */
                <InteractiveCard className="w-full rounded-2xl border-2 border-emerald-500/40 bg-emerald-950/10 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden">
                  <div className="p-6 sm:p-8">
                    
                    {/* Header Banner */}
                    <div className="flex flex-col items-center text-center pb-6 border-b border-emerald-500/20">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      >
                        <CheckCircle size={36} className="stroke-[2.5]" />
                      </motion.div>
                      
                      <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 flex items-center gap-2">
                        ✅ Certificate Verified
                      </h2>
                      <p className="text-xs sm:text-sm text-emerald-400/80 mt-1 font-mono">
                        Official Record Found
                      </p>
                    </div>

                    {/* Content split grid: Info on left, Scannable QR + ID below on right */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-6 items-center">
                      
                      {/* Left Side: Participant Details */}
                      <div className="md:col-span-3 space-y-4">
                        
                        {/* Name */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-emerald-400/80">
                            <User size={18} />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Name</p>
                            <p className="text-base sm:text-lg font-semibold text-white">{certMatch.name}</p>
                          </div>
                        </div>

                        {/* College */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-emerald-400/80">
                            <GraduationCap size={18} />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-white/50 font-medium">College</p>
                            <p className="text-sm sm:text-base text-white/90">{certMatch.college}</p>
                          </div>
                        </div>

                        {/* Role */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-emerald-400/80">
                            <Award size={18} />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Role</p>
                            <p className="text-sm sm:text-base text-primary font-medium">{certMatch.role}</p>
                          </div>
                        </div>

                        {/* Certificate ID */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-emerald-400/80">
                            <ShieldCheck size={18} />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Certificate ID</p>
                            <p className="text-sm sm:text-base font-mono font-bold text-emerald-400">{certMatch.id}</p>
                          </div>
                        </div>

                        {/* Event */}
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 text-emerald-400/80">
                            <Calendar size={18} />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Event</p>
                            <p className="text-sm sm:text-base text-white/80">{certMatch.event}</p>
                          </div>
                        </div>

                      </div>

                      {/* Right Side: The live Scannable QR Code + ID securely stamped below */}
                      <div className="md:col-span-2 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-emerald-500/20 pt-6 md:pt-0 md:pl-6">
                        <p className="text-[11px] uppercase tracking-wider text-emerald-400/80 font-semibold mb-3">
                          Official Digital QR Badge
                        </p>

                        {/* White inner wrapper ensuring optimal camera contrast */}
                        <div className="bg-white p-4 rounded-xl shadow-lg border border-white/20 text-center">
                          <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
                              `https://social-hackathon.vercel.app/verify?id=${certMatch.id}`
                            )}`}
                            alt={`QR for ${certMatch.id}`}
                            className="w-32 h-32 mx-auto object-contain"
                          />
                          {/* Unique ID rendered clearly just below the QR code */}
                          <div className="text-black font-mono font-black text-sm tracking-widest mt-2 pt-2 border-t border-black/10 select-all">
                            {certMatch.id}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => printBadge(certMatch)}
                          className="mt-4 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition duration-200 flex items-center gap-1.5"
                        >
                          <Printer size={13} />
                          <span>Print Badge View</span>
                        </button>
                      </div>

                    </div>

                  </div>
                  
                  {/* Footer decoration */}
                  <div className="bg-emerald-500/10 px-6 py-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px] text-emerald-400/80 font-mono">
                    <span>STATUS: AUTHENTIC</span>
                    <span>SECURELY SIGNED</span>
                  </div>
                </InteractiveCard>
              ) : (
                /* Invalid Certificate UI */
                <InteractiveCard className="w-full rounded-2xl border-2 border-rose-500/40 bg-rose-950/10 backdrop-blur-md shadow-[0_0_30px_rgba(244,63,94,0.15)] overflow-hidden max-w-xl mx-auto">
                  <div className="p-6 sm:p-8 text-center">
                    
                    <motion.div 
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 mx-auto flex items-center justify-center text-rose-400 mb-4 shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                    >
                      <XCircle size={36} className="stroke-[2.5]" />
                    </motion.div>

                    <h2 className="text-xl sm:text-2xl font-bold text-rose-400 mb-2">
                      ❌ Invalid Certificate
                    </h2>
                    
                    <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-6">
                      The Certificate ID <span className="font-mono text-white font-bold bg-white/5 px-1.5 py-0.5 rounded border border-white/10">{searchedId}</span> does not exist in our official verification records.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left text-xs text-white/60 space-y-2">
                      <p className="font-semibold text-white/80">Tips for verification:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Ensure there are no extra spaces or typographical errors.</li>
                        <li>Verify that the certificate ID matches exactly with the printed document.</li>
                        <li>If you believe this is an error, please reach out to the event organizers.</li>
                      </ul>
                    </div>

                  </div>

                  <div className="bg-rose-500/10 px-6 py-3 border-t border-rose-500/20 text-center text-[11px] text-rose-400/80 font-mono">
                    SECURITY NOTICE: RECORD NOT FOUND
                  </div>
                </InteractiveCard>
              )}
            </motion.div>
          ) : (
            /* Idle Instruction state */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-10 border border-white/5 rounded-2xl bg-white/[0.01] max-w-xl mx-auto"
            >
              <QrCode size={40} className="mx-auto text-white/20 mb-3" />
              <p className="text-sm text-white/40">
                Enter a Certificate ID above or scan a certificate QR code to verify its authenticity.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>



    </div>
  )
}
