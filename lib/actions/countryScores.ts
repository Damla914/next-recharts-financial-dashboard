import {prisma} from '@/lib/prisma';

export async function getAllCountryScores() {
    try{
        return await prisma.countryScore.findMany({
            orderBy: [ 
                {year: 'desc'},
                {countryName: 'asc'}
            ],
        });
    }catch(error){
        console.error('Error fetching country scores', error);
        throw error;
    }    
}
