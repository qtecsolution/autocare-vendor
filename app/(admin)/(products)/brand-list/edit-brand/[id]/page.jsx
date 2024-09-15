import axiosInstance from '@/lib/axiosInstance';
import React from 'react'
import EditBrandPage from './EditBrandPage';

async function getBrandDetails(id) {
    const response = await axiosInstance.get(`/seller-panel-api/frontend/update-brand/${id}/`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
    }
    return response.data;
}

async function page({ params }) {
    const brandDetails = await getBrandDetails(params.id);
    return (
        <EditBrandPage  brandDetails={brandDetails}/>
    )
}

export default page