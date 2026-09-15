'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '@/components/ui/statCard';

interface StatCardsGroupProps {
  stats?: {
    averageRiskScore: string;
    latestROA: string;
    latestROE: string;
    totalCountries: number;
  };
}

export default function StatCardsGroup({stats}: StatCardsGroupProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <StatCard
        title="Avg Country Score"
        value={stats?.averageRiskScore ?? 'N/A'}
        description="Global average risk performance"
      />
      <StatCard
        title="Bank ROA"
        value={stats?.latestROA ?? 'N/A'}
        description="Return on assets for latest year"
      />
      <StatCard
        title="Bank ROE"
        value={stats?.latestROE ?? 'N/A'}
        description="Return on equity for latest year"
      />
      <StatCard
        title="Tracked Countries"
        value={stats?.totalCountries ?? 0}
        description="Total active countries in system"
      />
    </motion.div>
  );
}