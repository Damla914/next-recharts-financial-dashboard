import { PrismaClient } from '@prisma/client';
import { prisma } from './prisma';

export async function getCountryScore(){
    try{
        return await prisma.countryScore.findMany({
            orderBy: { year: 'desc' },
        });
    }
    catch (error) {
        console.error('Error fetching country scores:', error);
        throw error;
    }
}

export async function getBankRatio(){
    try{
        return await prisma.bankRatio.findMany({
            orderBy: { year: 'desc' },
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