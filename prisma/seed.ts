import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // 1. Eski verileri temizle
  await prisma.countryScore.deleteMany();
  await prisma.bankRatio.deleteMany();
  await prisma.ratingDistribution.deleteMany();
  await prisma.countryComparison.deleteMany();

  // 2. Country Scores Seed
  const countriesPath = path.join(process.cwd(), 'data', 'countries.json');
  if (fs.existsSync(countriesPath)) {
    const countriesData = JSON.parse(fs.readFileSync(countriesPath, 'utf-8'));
    for (const item of countriesData) {
      await prisma.countryScore.create({
        data: {
          countryName: item.countryName || item.country || '',
          year: Number(item.year),
          totalScore: Number(item.totalScore),
          economicScore: Number(item.economicScore),
          politicalScore: Number(item.politicalScore),
          rating: item.rating || '',
        },
      });
    }
    console.log('✅ Country scores seeded successfully.');
  }

  // 3. Bank Ratios Seed
  const bankRatiosPath = path.join(process.cwd(), 'data', 'bank-ratios.json');
  if (fs.existsSync(bankRatiosPath)) {
    const bankRatiosData = JSON.parse(fs.readFileSync(bankRatiosPath, 'utf-8'));
    for (const item of bankRatiosData) {
      await prisma.bankRatio.create({
        data: {
          year: Number(item.year),
          roa: Number(item.roa),
          roe: Number(item.roe),
          capitalAdequacy: Number(item.capitalAdequacy),
          nplRatio: Number(item.nplRatio),
        },
      });
    }
    console.log('✅ Bank ratios seeded successfully.');
  }

  // 4. Rating Distributions Seed
  // Not: Dosya adının data/ içindeki adıyla birebir tuttuğundan emin ol (rating-distribution.json veya rating-distributions.json)
  const ratingDistributionsPath = path.join(process.cwd(), 'data', 'rating-distribution.json');
  const ratingPathToUse = fs.existsSync(ratingDistributionsPath) 
    ? ratingDistributionsPath 
    : path.join(process.cwd(), 'data', 'rating-distributions.json');

  if (fs.existsSync(ratingPathToUse)) {
    const ratingDistributionsData = JSON.parse(fs.readFileSync(ratingPathToUse, 'utf-8'));
    for (const item of ratingDistributionsData) {
      await prisma.ratingDistribution.create({
        data: {
          rating: item.rating,
          count: Number(item.count),
        },
      });
    }
    console.log('✅ Rating distributions seeded successfully.');
  }

  // 5. Country Comparisons (Dinamik Satır Bazlı Seeding)
  const countryComparisonsPath = path.join(process.cwd(), 'data', 'country-comparison.json');
  const comparisonPathToUse = fs.existsSync(countryComparisonsPath)
    ? countryComparisonsPath
    : path.join(process.cwd(), 'data', 'country-comparisons.json');

  if (fs.existsSync(comparisonPathToUse)) {
    const countryComparisonsData = JSON.parse(fs.readFileSync(comparisonPathToUse, 'utf-8'));

    for (const item of countryComparisonsData) {
      // dimension dışındaki tüm alanları (TR, DE, US, IN...) dinamik olarak ayırır
      const { dimension, ...countryScores } = item;

      for (const [countryCode, score] of Object.entries(countryScores)) {
        await prisma.countryComparison.create({
          data: {
            dimension: String(dimension),
            countryCode: countryCode, // TR, DE, US, IN dinamik olarak atanır
            score: Number(score),      // 66, 90, 86 dinamik olarak atanır
          },
        });
      }
    }
    console.log('✅ Country comparisons dynamically seeded successfully.');
  }

  console.log('🚀 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });