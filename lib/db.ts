import { PrismaClient } from '@prisma/client';
import { prisma } from './prisma';

export async function getCountryScore(){
    try{
        const rawData = await prisma.countryScore.findMany({
            orderBy: { year: 'asc' },
        });

        const formattedData = rawData.reduce((acc, curr) => {
           let existing = acc.find((item) => item.year == curr.year);
           if(!existing){
             existing = {year: curr.year};
             acc.push(existing)
            }

            const codeMap: Record<string, string> = {
               'Turkey': 'TR',
               'Germany': 'DE',
               'Japan': 'JP',
               'Greece': 'GR',
            };

            const key = codeMap[curr.countryName] || curr.countryName;
            existing[key] = curr.totalScore;

            return acc;
        }, [] as Record<string, any>[]);

        return formattedData;

    } catch (error) {
        console.error('Error fetching country scores:', error);
        throw error;
    }
}

export async function getBankRatio(){
    try{
        return await prisma.bankRatio.findMany({
            orderBy: { year: 'asc' },
        });
    }
    catch (error) {
        console.error('Error fetching bank ratios:', error);
        throw error;
    }
}

export async function getRatingDistribution(){
    try{
        return await prisma.ratingDistribution.findMany({
            orderBy: { count: 'desc' },
        });
    }
    catch (error) {
        console.error('Error fetching rating distributions:', error);
        throw error;
    }
}

export async function getCountryComparison(){
    try{
        const rawData = await prisma.countryComparison.findMany();

        const formattedData = rawData.reduce((acc, curr) => {
            const existing = acc.find((item) => item.dimension === curr.dimension);
            if(existing) {
                existing[curr.countryCode] = curr.score;
            } else {
                acc.push({
                    dimension: curr.dimension,
                    [curr.countryCode]: curr.score,
                });
            }

            return acc;
        }, [] as Record<string, any>[]);
        
        return formattedData;
    }
    catch (error) {
        console.error('Error fetching country comparisons:', error);
        throw error;
    }
}

export async function getDashboardStats() {
  try {
    const latestCountryScores = await prisma.countryScore.findMany({
      orderBy: { year: 'desc' },
      take: 4,
    });
    
    const latestBankRatio = await prisma.bankRatio.findFirst({
      orderBy: { year: 'desc' },
    });

    // Ortalama Skor Hesaplama
    const avgScore = latestCountryScores.length > 0
      ? (latestCountryScores.reduce((acc, curr) => acc + curr.totalScore, 0) / latestCountryScores.length).toFixed(1)
      : '0';

    return {
      averageRiskScore: avgScore,
      latestROA: latestBankRatio ? `%${latestBankRatio.roa}` : '%0',
      latestROE: latestBankRatio ? `%${latestBankRatio.roe}` : '%0',
      totalCountries: latestCountryScores.length,
    };
  } catch (error) {
    console.error('Error calculating dashboard stats:', error);
    throw error;
  }
}