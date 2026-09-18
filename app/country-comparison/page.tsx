import { getAllCountryComparisons } from "@/lib/actions/countryComparison";
import Link from "next/link";
import React from "react";
import CreateCountryComparisonModal from "@/components/modals/countryComparisonModals/createComparisonModal";
import EditCountryComparisonModal from "@/components/modals/countryComparisonModals/editComparisonModal";
import DeleteCountryComparisonModal from "@/components/modals/countryComparisonModals/deleteComparisonModal";

export default async function CountryComparisonPage() {
  const records = await getAllCountryComparisons();

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Link
            href="/"
            className="text-sm text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1"
          >
            ← Back To Dashboard
          </Link>
          <CreateCountryComparisonModal />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center text-sm text-slate-600 min-w-[600px]">
              <thead className="bg-slate-100 text-xs uppercase font-semibold text-slate-700 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 w-48 whitespace-nowrap">Dimension</th>
                  <th className="px-6 py-4 w-36 whitespace-nowrap">Country Code</th>
                  <th className="px-6 py-4 w-36 whitespace-nowrap">Score</th>
                  <th className="px-6 py-4 w-32 text-center bg-slate-100 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {records.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800 whitespace-nowrap align-middle">
                      <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-700 font-medium">
                        {item.dimension}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-800 whitespace-nowrap align-middle">{item.countryCode}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800 whitespace-nowrap align-middle">{item.score}</td>
                    <td className="px-6 py-4 align-middle">
                      <EditCountryComparisonModal  item = {item} />
                      <DeleteCountryComparisonModal id = {item.id} dimension={item.dimension} countryCode={item.countryCode} />
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