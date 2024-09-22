import React from 'react'
import AddVariantPage from './AddVariantPage'

import axiosInstance from '@/lib/axiosInstance';

async function getVariantData() {
    const response = await axiosInstance.get(`/seller-panel-api/frontend/get-variants-data/`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
    }
    return response.data;
}

async function page({ params }) {
    const variantData = await getVariantData(params.id);
    return (
        <AddVariantPage variantData={variantData} productId={params.id} />
    )
}

export default page