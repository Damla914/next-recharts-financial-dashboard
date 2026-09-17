'use server'

import {prisma} from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getAllBankRatio() {
    try{
        return await prisma.bankRatio.findMany({
            orderBy: [ 
                {year: 'desc'},
            ],
        });
    }catch(error){
        console.error('Error fetching Bank Ratios', error);
        throw error;
    }    
}

export async function createBankRatio(formData: {
    year: number
    roa: number;
    roe: number;
    capitalAdequacy: number;
    nplRatio: string;
}) {
    try{
        const newRatio = await prisma.bankRatio.create({
            data: {
                year: Number(formData.year),
                roa: Number(formData.roa),
                roe: Number(formData.roe),
                capitalAdequacy: Number(formData.capitalAdequacy),
                nplRatio: Number(formData.nplRatio),
            },
        });

        revalidatePath('/bank-ratios');
        revalidatePath('/');

        return {success: true, data: newRatio }

    } catch(error) {
        console.error('Error creating ratios', error);
        return { success: false, error: 'Failed to create ratios' };
    }    
}

export async function updateBankRatio(
    id: number, 
    formData: {
       year: number
       roa: number;
       roe: number;
       capitalAdequacy: number;
       nplRatio: number;
    }
) {
    try{
        const updatedRatio = await prisma.bankRatio.update({
            where: {id},
            data: {
                year: Number(formData.year),
                roa: Number(formData.roa),
                roe: Number(formData.roe),
                capitalAdequacy: Number(formData.capitalAdequacy),
                nplRatio: Number(formData.nplRatio),
            },
        });

        revalidatePath('/bank-ratios');
        revalidatePath('/');

        return {success: true, data: updatedRatio }

    } catch(error) {
        console.error('Error updating ratios', error);
        return { success: false, error: 'Failed to update ratios' };
    }    
}

export async function deleteBankRatios(id: number) {
    try{
        await prisma.bankRatio.delete({
            where: {id},
        });

        revalidatePath('/bank-ratios');
        revalidatePath('/');

        return {success: true}

    } catch(error) {
        console.error('Error deleting ratios', error);
        return { success: false, error: 'Failed to delete ratios' };
    }    
}