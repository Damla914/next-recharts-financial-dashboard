import CountryScoreChart from '@/components/charts/countryScoreChart';
import RatingDistributionChart from '@/components/charts/ratingDistributionChart';
import BankRatiosChart from '@/components/charts/bankRatiosChart';
import CountryComparisonCharts from '@/components/charts/countryComparisonChart';
import StatCardsGroup from '@/components/dashboard/StatCardsGroup';
import { getCountryScore, getBankRatio, getCountryComparison, getRatingDistribution, getDashboardStats } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const [countryScore, bankRatio, ratingDistribution, countryComparison, stats] = 
    await Promise.all([
      getCountryScore(),
      getBankRatio(),
      getRatingDistribution(),
      getCountryComparison(),
      getDashboardStats(),
    ]);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className = "max-w-7xl mx-auto py-4 px-4 lg:px-8">
        <StatCardsGroup stats = {stats} />
        <div className = "grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CountryScoreChart data={countryScore} />
          <RatingDistributionChart data={ratingDistribution} />
          <BankRatiosChart data={bankRatio} />
          <CountryComparisonCharts data={countryComparison}/>
        </div>
      </main>
    </div>
  );    
}
