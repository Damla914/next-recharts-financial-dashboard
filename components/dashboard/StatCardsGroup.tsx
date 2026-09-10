'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '@/components/ui/statCard';

import countriesData from '@/data/countries.json';
import bankRatiosData from '@/data/bank-ratios.json';
import ratingDistributionData from '@/data/rating-distribution.json';

import { CountryScore } from '@/types/country';
import { BankRatio } from '@/types/bank';
import { RatingDistribution } from '@/types/rating';

const countries = countriesData as CountryScore[];
const bankRatios = bankRatiosData as BankRatio[];
const ratings = ratingDistributionData as RatingDistribution[];

export default function StatCardsGroup() {
  // 1. Ortalama Ülke Skoru (2024 Yılı)
  const countries2024 = countries.filter((c) => c.year === 2024);
  const avgScore = (
    countries2024.reduce((acc, curr) => acc + curr.totalScore, 0) / countries2024.length
  ).toFixed(1);

  // 2. En Yüksek Ülke Skoru (2024 Yılı)
  const topCountry = countries2024.reduce(
    (max, curr) => (curr.totalScore > max.totalScore ? curr : max),
    countries2024[0]
  );

  // 3. Güncel Banka ROE Değeri (2024 Yılı)
  const latestBankRatio = bankRatios.find((b) => b.year === 2024);
  const currentROE = latestBankRatio ? `%${latestBankRatio.roe}` : 'N/A';

  // 4. Yüksek Dereceli Banka/Kurum Sayısı (AAA ve AA Toplamı)
  const topTierCount = ratings
    .filter((r) => r.rating === 'AAA' || r.rating === 'AA')
    .reduce((acc, curr) => acc + curr.count, 0);

  return (
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <StatCard
        title="Avg Country Score"
        value={avgScore}
        description="2024 Global average performance"
      />
      <StatCard
        title="Top Performing Risk"
        value={topCountry?.totalScore || 'N/A'}
        description={`${topCountry?.countryName} (Rating: ${topCountry?.rating})`}
      />
      <StatCard
        title="Bank ROE (2024)"
        value={currentROE}
        description="Return on equity for latest year"
      />
      <StatCard
        title="Top Tier Rated FI"
        value={topTierCount}
        description="Total AAA and AA rated institutions"
      />
    </motion.div>
  );
}