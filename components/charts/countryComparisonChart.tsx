'use client';

import React from 'react';
import { ResponsiveContainer, RadarChart, PolarAngleAxis, PolarGrid, Radar, Tooltip, Legend } from 'recharts';
import countryComparisonData from '@/data/country-comparison.json';
import { CountryComparison } from "@/types/country";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const data = countryComparisonData as CountryComparison[];

const CountryComparisonCharts = () => {
  return (
    <Card className="bg-white backdrop-blur-md shadow-lg rounded-xl border border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 text-center md:text-left">
          Country Comparison
        </CardTitle>
      </CardHeader>
      <CardContent className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
            <PolarAngleAxis dataKey="dimension" tick={{ fill: '#4b5563', fontSize: 12 }} />
            <PolarGrid stroke="#e2e8f0" />
            <Radar name="Germany" dataKey="DE" stroke="#f59e0b" fill="#f59e0b" fillOpacity={1} strokeWidth={2} />
            <Radar name="USA" dataKey="US" stroke="#3b82f6" fill="#3b82f6" fillOpacity={1} strokeWidth={2} />
            <Radar name="India" dataKey="IN" stroke="#10b981" fill="#10b981" fillOpacity={1} strokeWidth={2} />
            <Radar name="Türkiye" dataKey="TR" stroke="#a855f7" fill="#a855f7" fillOpacity={1} strokeWidth={2} />
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: 12 }} />
            <Legend wrapperStyle={{ paddingTop: 10, fontSize: 12 }} />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CountryComparisonCharts;