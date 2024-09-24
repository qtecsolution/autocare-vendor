import React from 'react'
import EditVariantPage from './EditVariantPage'

import axiosInstance from '@/lib/axiosInstance';

async function getVariantDetails(v_id) {
    const response = await axiosInstance.get(`/seller-panel-api/frontend/product-variant/${v_id}/get-variant-details/`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
    }
    return response.data;
}


async function page({ params }) {
    const variantDetails = await getVariantDetails(params.v_id);
    return (
        <EditVariantPage productID={params.id} variantID={params.v_id} variantDetails={variantDetails} />
    )
}

export default page