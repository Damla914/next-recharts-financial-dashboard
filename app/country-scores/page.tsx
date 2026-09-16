import CreateScoreModal from "@/components/modals/createScoreModal";
import { getAllCountryScores } from "@/lib/actions/countryScores";
import Link from "next/link";

export default async function CountryScorePage(){

  const countryScores = await getAllCountryScores()

  return(
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start items-start gap-4">
          <Link href = '/' className="text-sm text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1 mb-2">
            ← Back To Dashboard
          </Link>
          <CreateScoreModal />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center text-sm text-slate-600 table-fixed">
              <thead className="bg-slate-100 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Country</th>
                  <th className="px-6 py-4">Year</th>
                  <th className="px-6 py-4">Total Score</th>
                  <th className="px-6 py-4">Economical</th>
                  <th className="px-6 py-4">Political</th>
                  <th className="px-6 py-4">Rating</th>
                </tr>
              </thead>
              <tbody className="divide divide-slate-200">
                {countryScores.map((score) => (
                  <tr key={score.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.countryName}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.year}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.totalScore}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.economicScore}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.politicalScore}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}