'use server'

import {prisma} from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

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


export async function createCountryScore(formData: {
    countryName: string,
    year: number
    totalScore: number;
    economicScore: number;
    politicalScore: number;
    rating: string;
}) {
    try{
        const newScore = await prisma.countryScore.create({
            data: {
                countryName: formData.countryName,
                year: Number(formData.year),
                totalScore: Number(formData.totalScore),
                economicScore: Number(formData.economicScore),
                politicalScore: Number(formData.politicalScore),
                rating: formData.rating
            },
        });

        revalidatePath('/country-scores');
        revalidatePath('/');

        return {success: true, data: newScore }

    } catch(error) {
        console.error('Error creating country scores', error);
        return { success: false, error: 'Failed to create country score' };
    }    
}

export async function updateCountryScore(
    id: number, 
    formData: {
       countryName: string,
       year: number
       totalScore: number;
       economicScore: number;
       politicalScore: number;
       rating: string;
    }
) {
    try{
        const updatedScore = await prisma.countryScore.update({
            where: {id},
            data: {
                countryName: formData.countryName,
                year: Number(formData.year),
                totalScore: Number(formData.totalScore),
                economicScore: Number(formData.economicScore),
                politicalScore: Number(formData.politicalScore),
                rating: formData.rating
            },
        });

        revalidatePath('/country-scores');
        revalidatePath('/');

        return {success: true, data: updatedScore }

    } catch(error) {
        console.error('Error updating country scores', error);
        return { success: false, error: 'Failed to update country score' };
    }    
}

export async function DeleteCountryScore(id: number) {
    try{
        await prisma.countryScore.delete({
            where: {id},
        });

        revalidatePath('/country-scores');
        revalidatePath('/');

        return {success: true}

    } catch(error) {
        console.error('Error deleting country scores', error);
        return { success: false, error: 'Failed to delete country score' };
    }    
}