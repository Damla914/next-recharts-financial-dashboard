'use server'

import {prisma} from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getAllRatings() {
    try{
        return await prisma.ratingDistribution.findMany({
            orderBy: {rating: 'desc'}
        });

    } catch(error) {
        console.error('Error fetching ratings', error);
        throw error;
    }    
}

export async function updateRatings(
    id: number, 
    formData: {
       rating: string;
       count: number;
    }
) {
    try{
        const updatedRating = await prisma.ratingDistribution.update({
            where: {id},
            data: {
                rating: formData.rating,
                count: Number(formData.count)
            },
        });

        revalidatePath('/ratings');
        revalidatePath('/');

        return {success: true, data: updatedRating }

    } catch(error) {
        console.error('Error updating ratings', error);
        return { success: false, error: 'Failed to update ratings' };
    }    
}
