import { Clock } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import { SHORTLISTED_SOFTWARE, SHORTLISTED_HARDWARE, WAITLIST_SOFTWARE, WAITLIST_HARDWARE } from '../utils/data'

type Team = {
  team: string
  leader: string
  college: string
}

export default function Results() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-14 md:pt-12 md:pb-20">

      {/* Title */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="font-poppins font-black uppercase text-3xl sm:text-4xl md:text-6xl mb-4">
          Round 1 <span className="text-primary">Shortlist</span>
        </h1>

        <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
          Congratulations to the teams moving forward. Waiting list teams will be updated if slots open up.
        </p>
      </div>

      {/* Software */}
      <ResultsCard title="Software Track - Shortlisted" data={SHORTLISTED_SOFTWARE} />
      {WAITLIST_SOFTWARE.length > 0 && (
        <ResultsCard title="Software Track - Waiting List" data={WAITLIST_SOFTWARE} isWaitlist />
      )}

      {/* Hardware */}
      <ResultsCard title="Hardware Track - Shortlisted" data={SHORTLISTED_HARDWARE} />
      {WAITLIST_HARDWARE.length > 0 && (
        <ResultsCard title="Hardware Track - Waiting List" data={WAITLIST_HARDWARE} isWaitlist />
      )}

    </div>
  )
}


/* ================= REUSABLE CARD ================= */

function ResultsCard({
  title,
  data,
  isWaitlist = false,
}: {
  title: string
  data: Team[]
  isWaitlist?: boolean
}) {
  return (
    <div className="mb-10">

      <InteractiveCard className={`card-glass p-4 sm:p-6 md:p-8 rounded-2xl border bg-white/[0.03] ${isWaitlist ? 'border-orange-500/20' : 'border-white/10'}`}>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isWaitlist ? 'bg-orange-500/10 border border-orange-500/30 text-orange-500' : 'bg-primary/10 border border-primary/30 text-primary'}`}>
            <Clock size={18} />
          </div>

          <h2 className={`font-poppins font-bold text-xl md:text-2xl ${isWaitlist ? 'text-orange-400' : 'text-primary'}`}>
            {title}
          </h2>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-auto max-h-[400px] rounded-lg border border-white/10">

          <table className="w-full min-w-[700px] text-sm text-left text-white/80">

            {/* Sticky Header */}
            <thead className={`text-xs uppercase bg-white/5 sticky top-0 z-10 ${isWaitlist ? 'text-orange-400' : 'text-primary'}`}>
              <tr>
                <th className="px-5 py-3">Team Name</th>
                <th className="px-5 py-3">Leader</th>
                <th className="px-5 py-3">Institution</th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 ? (
                data.map((team, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/5 hover:bg-white/[0.04]"
                  >
                    <td className="px-5 py-3 font-medium text-white">
                      {team.team}
                    </td>
                    <td className="px-5 py-3">
                      {team.leader}
                    </td>
                    <td className="px-5 py-3">
                      {team.college}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-white/40">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </InteractiveCard>
    </div>
  )
}