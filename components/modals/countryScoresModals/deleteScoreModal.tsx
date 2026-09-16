'use client'

import { DeleteCountryScore } from "@/lib/actions/countryScores";
import { useState } from "react";

interface DeleteModalProps {
    id: number;
    year: number;
    countryName: string
}

export default function DeleteScoreModal({item}: {item: DeleteModalProps}) {

    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const res = await DeleteCountryScore(item.id);
        setLoading(false);
    
        if(res.success){
            setIsOpen(false)
        } else {
            alert('Error Deleting Record')
        }
    };

    return(
      <>
        <button 
            onClick={() => setIsOpen(true)} 
            className="px-4 py-2 text-xs font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50">
              Delete
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-xl font-bold">
                   !
                </div>
            
                <div>
                   <h3 className="text-lg font-bold text-slate-800">Delete Record</h3>
                   <p className="text-xs text-slate-500 mt-1">
                        Are you sure you want to delete <span className="font-semibold text-slate-700">{item.countryName} ({item.year})</span>? This action cannot be undone.
                    </p>
                </div>

                <div className="flex justify-center gap-2 pt-2">
                   <button
                       type="button"
                       onClick={() => setIsOpen(false)}
                       className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                       type="button"
                       onClick={handleDelete}
                       disabled={loading}
                       className="px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50"
                    >
                       {loading ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
          </div>
        )}
      </>
    );
}

