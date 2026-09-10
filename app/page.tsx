'use client'

import CountryScoreChart from '@/components/charts/countryScoreChart';
import RatingDistributionChart from '@/components/charts/ratingDistributionChart';
import BankRatiosChart from '@/components/charts/bankRatiosChart';
import CountryComparisonCharts from '@/components/charts/countryComparisonChart';
import StatCardsGroup from '@/components/dashboard/StatCardsGroup';

export default function Dashboard() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className = "max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <StatCardsGroup />
        <div className = "grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CountryScoreChart />
          <RatingDistributionChart />
          <BankRatiosChart />
          <CountryComparisonCharts />
        </div>
      </main>
    </div>
  );    
}
