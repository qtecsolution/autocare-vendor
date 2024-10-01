import React from 'react';
import CommissionRates from './CommissionRates';

export default async function Page() {
  try {
    const response = await fetch(
      'https://spider.autocare.com.bd/api/frontend/categories/'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const categories = await response.json();
    return <CommissionRates categories={categories} />;
  } catch (error) {
    return <div className="p-5">Error: {error.message}</div>;
  }
}
