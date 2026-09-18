'use client';

import React, { useState } from 'react';
import { updateCountryComparison } from '@/lib/actions/countryComparison';

const DIMENSIONS = ['Economic', 'Political', 'Financial', 'Social', 'Governance'];

interface RecordItem {
  id: number;
  dimension: string;
  countryCode: string;
  score: number;
}

export default function EditCountryComparisonModal({ item }: { item: RecordItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    dimension: item.dimension,
    countryCode: item.countryCode,
    score: item.score.toString(),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await updateCountryComparison(item.id, {
      dimension: formData.dimension,
      countryCode: formData.countryCode,
      score: Number(formData.score),
    });

    setLoading(false);

    if (res.success) {
      setIsOpen(false);
    } else {
      alert('Error updating record!');
    }
  };

  return (
    <>
      <button 
          onClick={() => setIsOpen(true)} 
          className="px-4 py-2 text-xs font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50">
            Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Edit Country Dimension Score</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Dimension</label>
                <select
                  value={formData.dimension}
                  onChange={(e) => setFormData({ ...formData, dimension: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500 bg-white"
                >
                  {DIMENSIONS.map((dim) => (
                    <option key={dim} value={dim}>
                      {dim}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Country Code</label>
                <input
                  type="text"
                  required
                  maxLength={3}
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value.toUpperCase() })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500 uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Score</label>
                <input
                  type="number"
                  required
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.score}
                  onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}