import { Clock } from 'lucide-react'
import InteractiveCard from '../components/InteractiveCard'
import { SHORTLISTED_SOFTWARE, SHORTLISTED_HARDWARE } from '../utils/data'

type Team = {
  team: string
  track?: string
  leader?: string
  college: string
  location?: string
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
          Congratulations to the teams moving forward.
        </p>
      </div>

      {/* Software */}
      <ResultsCard title="Software Track - Shortlisted" data={SHORTLISTED_SOFTWARE} />

      {/* Hardware */}
      <ResultsCard title="Hardware Track - Shortlisted" data={SHORTLISTED_HARDWARE} />

    </div>
  )
}


/* ================= REUSABLE CARD ================= */

function ResultsCard({
  title,
  data,
}: {
  title: string
  data: Team[]
}) {
  return (
    <div className="mb-10">

      <InteractiveCard className={`card-glass p-4 sm:p-6 md:p-8 rounded-2xl border bg-white/[0.03] border-white/10`}>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30 text-primary`}>
            <Clock size={18} />
          </div>

          <h2 className={`font-poppins font-bold text-xl md:text-2xl text-primary`}>
            {title}
          </h2>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-auto max-h-[400px] rounded-lg border border-white/10">

          <table className="w-full min-w-[700px] text-sm text-left text-white/80">

            {/* Sticky Header */}
            <thead className={`text-xs uppercase bg-white/5 sticky top-0 z-10 text-primary`}>
              <tr>
                <th className="px-5 py-3">Team Name</th>
                <th className="px-5 py-3">Track</th>
                <th className="px-5 py-3">Institution</th>
                <th className="px-5 py-3">Location</th>
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
                      {team.track || '-'}
                    </td>
                    <td className="px-5 py-3">
                      {team.college}
                    </td>
                    <td className="px-5 py-3">
                      {team.location || '-'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-white/40">
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