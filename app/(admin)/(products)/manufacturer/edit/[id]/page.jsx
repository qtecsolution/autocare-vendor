import axiosInstance from '@/lib/axiosInstance';
import React from 'react'
import EditPage from './EditPage';

async function getManufacturerDetails(id) {
    const response = await axiosInstance.get(`/seller-panel-api/frontend/update-manufacturer/${id}/`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
    }
    return response.data;
}
async function page({ params }) {
    const manufacturerDetails = await getManufacturerDetails(params.id);
    return (
        <EditPage manufacturerDetails={manufacturerDetails} />
    )
}

export default page