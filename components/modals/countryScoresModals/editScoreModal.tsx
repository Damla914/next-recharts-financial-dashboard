'use client'

import { updateCountryScore } from "@/lib/actions/countryScores";
import { useState } from "react";

interface countryScoreItem {
  id: number;
  countryName: string;
  year: number;
  totalScore: number;
  economicScore: number;
  politicalScore: number;
  rating: string;
}

export default function EditScoreModal({item}: {item: countryScoreItem}) {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        countryName: item.countryName,
        year: item.year,
        totalScore: item.totalScore,
        economicScore: item.economicScore,
        politicalScore: item.politicalScore,
        rating: item.rating,
    });

    const handleSubmit = async (e: React.FormEvent) => {
            
        e.preventDefault();
        setLoading(true);
    
        const res = await updateCountryScore(item.id, {
                countryName: formData.countryName,
                year: Number(formData.year),
                totalScore: Number(formData.totalScore),
                economicScore: Number(formData.economicScore),
                politicalScore: Number(formData.politicalScore),
                rating: formData.rating,
        });
    
        setLoading(false);
    
        if(res.success){
            setIsOpen(false)
        } else {
            alert('Error Editing Record')
        }
    };
    
    return(
      <>
        <button 
            onClick={() => setIsOpen(true)} 
            className="px-4 py-2 text-xs font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50">
              Edit
        </button>
    
        {isOpen &&(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-4">
                    <h2 className="text-xl font-bold text-slate-800">Edit Country Score</h2>
    
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Country Name</label>
                                <input 
                                   type="text" 
                                   required 
                                   value={formData.countryName} 
                                   onChange={(e) => setFormData({ ...formData, countryName: e.target.value })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                            </div>
    
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Year</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.year} 
                                   onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Total Score</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.totalScore} 
                                   onChange={(e) => setFormData({ ...formData, totalScore: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                              </div>
                            </div>
    
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Economic Score</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.economicScore} 
                                   onChange={(e) => setFormData({ ...formData, economicScore: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Political Score</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.politicalScore} 
                                   onChange={(e) => setFormData({ ...formData, politicalScore: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                              </div>                        
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Rating</label>
                                <select
                                   value={formData.rating} 
                                   onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                >
                                    {['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC'].map((r) => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                              </div>
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
        )
    
}