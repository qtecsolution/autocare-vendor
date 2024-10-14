import React from 'react';
import CommissionRates from './CommissionRates';
import axiosWithBaseURL from '@/lib/axiosWithBaseURL';

export default async function Page() {
  try {
    const response = await axiosWithBaseURL.get('/api/frontend/categories/');
    if (response.status !== 200 ) {
      throw new Error('Failed to fetch data');
    }

    const categories = await response.data;
    return <CommissionRates categories={categories} />;
  } catch (error) {
    return <div className="p-5">Error: {error.message}</div>;
  }
}
