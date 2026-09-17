'use client'

import { updateRatings } from "@/lib/actions/ratings";
import { useState } from "react";

interface ratingItem {
  id: number;
  count: number;
  rating: string;
}

export default function EditRatingModal({item}: {item: ratingItem}) {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        count: item.count,
        rating: item.rating,
    });

    const handleSubmit = async (e: React.FormEvent) => {
            
        e.preventDefault();
        setLoading(true);
    
        const res = await updateRatings(item.id, {
                count: Number(formData.count),
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
                    <h2 className="text-xl font-bold text-slate-800">Edit Ratings</h2>
    
                        <form onSubmit={handleSubmit} className="space-y-3">

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
    
                            <div>
                                <label className="block text-xs font-semibold text-slate-600 mb-1">Count</label>
                                <input 
                                   type="number" 
                                   required 
                                   value={formData.count} 
                                   onChange={(e) => setFormData({ ...formData, count: Number(e.target.value) })}
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
        )
    
}