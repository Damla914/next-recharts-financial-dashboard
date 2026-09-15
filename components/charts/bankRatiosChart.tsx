'use client';

import React from 'react';
import { BarChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

interface BankRatiosChartProps {
  data: any[];
}

const BankRatiosChart = ({data}: BankRatiosChartProps) => {
    return(
        <Card className="bg-white backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-gray-200  mx-2 md:mx-0">
            <CardHeader>
              <CardTitle className = "text-xl font-bold text-gray-800 text-center md:text-left">
                <Link href = '/bank-ratios' className='hover:text-gray-400 transition-colors cursor-pointer'>
                  Bank ROA/ROE Comparison
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className = "h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9"/>
                    <XAxis dataKey="year" stroke="#111827" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
                    <YAxis stroke="#111827" tick={{ fontSize: 12 }} width={40} domain={[0, 20]} />
                    <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc', borderRadius: '4px', borderColor: '#ccc', fontSize: 12 }} />
                    <Legend wrapperStyle={{ paddingTop: 10, fontSize: 12 }} />
                    <Bar dataKey="roa" name="ROA" fill="#f97316" barSize={20} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="roe" name="ROE" fill="#a855f7" barSize={20} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    )

}

export default BankRatiosChart;