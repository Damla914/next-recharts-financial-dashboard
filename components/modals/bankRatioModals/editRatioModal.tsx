'use client'

import { updateBankRatio } from "@/lib/actions/bankRatio";
import { updateRatings } from "@/lib/actions/ratings";
import { useState } from "react";

interface countryScoreItem {
  id: number;
  year: number;
  roe: number;
  roa: number;
  capitalAdequacy: number;
  nplRatio: number;
}

export default function EditRatioModal({item}: {item: countryScoreItem}) {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        year: item.year,
        roa: item.roa,
        roe: item.roe,
        capitalAdequacy: item.capitalAdequacy,
        nplRatio: item.nplRatio,
    });

    const handleSubmit = async (e: React.FormEvent) => {
            
        e.preventDefault();
        setLoading(true);
    
        const res = await updateBankRatio(item.id, {
                year: Number(formData.year),
                roa: Number(formData.roa),
                roe: Number(formData.roe),
                capitalAdequacy: Number(formData.capitalAdequacy),
                nplRatio: Number(formData.nplRatio),
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
                                <label className="block text-xs font-semibold text-slate-600 mb-1">ROA</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.roa} 
                                   onChange={(e) => setFormData({ ...formData, roa: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                              </div>
                            </div>
    
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">ROE</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.roe} 
                                   onChange={(e) => setFormData({ ...formData, roe: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Capital Adequacy</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.capitalAdequacy} 
                                   onChange={(e) => setFormData({ ...formData, capitalAdequacy: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
                              </div>   
                              <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">NPL Ratio</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.nplRatio} 
                                   onChange={(e) => setFormData({ ...formData, nplRatio: Number(e.target.value) })}
                                   className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-sky-500"
                                />
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