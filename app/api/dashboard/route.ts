import { NextResponse } from "next/server";
import { getCountryScore, getBankRatio, getRatingDistribution, getCountryComparison } from "@/lib/db";

export async function GET() {
    try{
        const [countryScores, bankRatios, ratingDistributions, countryComparisons] = 
          await Promise.all([
            getCountryScore(),
            getBankRatio(),
            getRatingDistribution(),
            getCountryComparison()
          ]);

        return NextResponse.json({
            countryScores,
            bankRatios,
            ratingDistributions,
            countryComparisons
        });
    }  
    catch (error) {
        return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });  
    }
}