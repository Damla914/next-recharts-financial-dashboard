'use client';

import { createCountryComparison } from '@/lib/actions/countryComparison';
import React, { useState } from 'react';

const DIMENSIONS = ['Economic', 'Political', 'Financial', 'Social', 'Governance'];

export default function CreateCountryComparisonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    dimension: 'Economic',
    countryCode: '',
    score: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await createCountryComparison({
      dimension: formData.dimension,
      countryCode: formData.countryCode,
      score: Number(formData.score),
    });

    setLoading(false);

    if (res.success) {
      setIsOpen(false);
      setFormData({ dimension: 'Economic', countryCode: '', score: '' });
    } else {
      alert('Error creating record!');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
      >
        + Add Dimension Score
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Add Country Dimension Score</h2>

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
                <label className="block text-xs font-semibold text-slate-600 mb-1">Country Code (3-letter ISO)</label>
                <input
                  type="text"
                  required
                  maxLength={3}
                  placeholder="e.g. TUR, USA, DEU"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value.toUpperCase() })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500 uppercase"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Score (0 - 100)</label>
                <input
                  type="number"
                  required
                  min="0"
                  max="100"
                  step="0.1"
                  placeholder="e.g. 75.5"
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
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}