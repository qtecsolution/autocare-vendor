import React from 'react'
import EditServicePage from './EditServicePage'
import axiosInstance from '@/lib/axiosInstance';

async function getServiceDetails(id) {
    const response = await axiosInstance.get(`/seller-panel-api/frontend/service-details/${id}/`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
    }
    return response.data;
}

async function page({ params }) {
    const serviceDetails = await getServiceDetails(params.id);
    return (
        <EditServicePage serviceDetails={serviceDetails} />
    )
}

export default page