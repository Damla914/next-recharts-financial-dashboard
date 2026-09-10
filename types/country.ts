export interface CountryScore{
    id: string,
    countryName: string,
    countryCode: string,
    year: number,
    totalScore: number,
    economicScore: number,
    politicalScore: number,
    rating: "AAA" | "AA" | "A" | "BBB" | "BB" | "B" | "CCC"
}

export interface CountryComparison{
    dimension: `Economic` | `Political` | `Financial` | `Social` | `Governance`,
    [countryCode: string]: string | number;
}