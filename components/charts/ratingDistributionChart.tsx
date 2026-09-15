'use client';

import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

interface ratingDistributionChartProps{
    data: any[];
}

const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#f43f5e', '#a855f7', '#f97316', '#3b82f6']; 

const RatingDistributionChart = ({data = []}: ratingDistributionChartProps) => {
    return(
        <Card className="bg-white backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-gray-200  mx-2 md:mx-0">
            <CardHeader>
              <CardTitle className = "text-xl font-bold text-gray-800 text-center md:text-left">
                <Link href= '/ratings' className='hover:text-gray-400 transition-colors cursor-pointer'>
                    Rating Distribution
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className = "h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie 
                        data={data} 
                        cx="50%" 
                        cy="50%" 
                        labelLine= {false} 
                        dataKey="count"
                        nameKey="rating"
                        label={({ name, percent }: { name?: string; percent?: number }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc', borderRadius: '4px', borderColor: '#ccc', fontSize: 12 }} />
                        <Legend iconType="circle" layout="horizontal" align="center" wrapperStyle={{ paddingTop: 10, fontSize: 12 }} />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default RatingDistributionChart;