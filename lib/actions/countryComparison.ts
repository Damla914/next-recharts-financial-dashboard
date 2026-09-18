'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getAllCountryComparisons() {
  try {
    return await prisma.countryComparison.findMany({
      orderBy: { countryCode: 'asc' },
    });
  } catch (error) {
    console.error('Error fetching country comparisons:', error);
    throw new Error('Failed to fetch country comparisons');
  }
}

export async function createCountryComparison(formData: {
  dimension: string;
  score: number;
  countryCode: string;
}) {
  try {
    const newItem = await prisma.countryComparison.create({
      data: {
        dimension: formData.dimension,
        score: Number(formData.score),
        countryCode: formData.countryCode,
      },
    });

    revalidatePath('/country-comparison');
    revalidatePath('/');

    return { success: true, data: newItem };
  } catch (error) {
    console.error('Error creating country comparison:', error);
    return { success: false, error: 'Failed to create country comparison' };
  }
}

export async function updateCountryComparison(
    id: number,
    formData: {
       dimension: string;
       score: number;
       countryCode: string;
    }
) {
  try {
    const updatedItem = await prisma.countryComparison.update({
      where: { id },
      data: {
        dimension: formData.dimension,
        score: Number(formData.score),
        countryCode: formData.countryCode,
      },
    });

    revalidatePath('/country-comparison');
    revalidatePath('/');

    return { success: true, data: updatedItem };
  } catch (error) {
    console.error('Error updating country comparison:', error);
    return { success: false, error: 'Failed to update country comparison' };
  }
}

export async function deleteCountryComparison(id: number) {
  try {
    await prisma.countryComparison.delete({
      where: { id },
    });

    revalidatePath('/country-comparison');
    revalidatePath('/');

    return { success: true };
  } catch (error) {
    console.error('Error deleting country comparison:', error);
    return { success: false, error: 'Failed to delete country comparison' };
  }
}