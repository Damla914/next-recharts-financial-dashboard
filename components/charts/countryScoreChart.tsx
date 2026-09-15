'use client'

import React from 'react';
import { CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

interface CountryScoreChartProps {
  data: any[];
}

const CountryScoreChart = ({data = []}: CountryScoreChartProps) => {
    return(
        <Card className="bg-white backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-gray-200  mx-2 md:mx-0">
            <CardHeader>
              <CardTitle className = "text-xl font-bold text-gray-800 text-center md:text-left">
                <Link href = '/country-scores' className="hover:text-gray-400 transition-colors cursor-pointer">
                    Country Score Comparison
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className = "h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data = {data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f99a"/>
                        <XAxis dataKey="year" stroke="#111827" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
                        <YAxis stroke="#111827" tick={{ fontSize: 12 }} width={40} domain={[50, 100]} />
                        <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc', borderRadius: '4px', borderColor: '#ccc', fontSize: 12 }} />
                        <Legend wrapperStyle={{ paddingTop: 10, fontSize: 12 }} />
                        <Line type = "natural" dataKey="TR" name="Türkiye" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: "#0ea5e9", r: 3 }} activeDot={{ r: 4 , strokeWidth: 2 }} />
                        <Line type = "natural" dataKey="DE" name="Germany" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 3 }} activeDot={{ r: 4 , strokeWidth: 2 }} />
                        <Line type = "natural" dataKey="JP" name="Japan" stroke="#f59e0b" strokeWidth={3} dot={{ fill: "#f59e0b", r: 3 }} activeDot={{ r: 4 , strokeWidth: 2 }} />
                        <Line type = "natural" dataKey="GR" name="Greece" stroke="#f43f5e" strokeWidth={3} dot={{ fill: "#f43f5e", r: 3 }} activeDot={{ r: 4 , strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default CountryScoreChart;