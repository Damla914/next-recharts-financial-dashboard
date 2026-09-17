import EditRatingModal from "@/components/modals/ratingsModal/editRatingModal";
import { getAllRatings } from "@/lib/actions/ratings";
import Link from "next/link";
import React from "react"

export default async function ratingsPage(){

  const ratingsData = await getAllRatings();
  
  return(
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Link href = '/' className="text-sm text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1 mb-2">
            ← Back To Dashboard
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center text-sm text-slate-600 min-w-[650px]">
              <thead className="bg-slate-100 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Count</th>
                  <th className="px-6 py-4">Edit</th>
                </tr>
              </thead>
              <tbody className="divide divide-slate-200">
                {ratingsData.map((score) => (
                  <tr key={score.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.rating}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{score.count}</td>
                    <td className="px-6 py-4">
                      <EditRatingModal item={score} />
                    </td>
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