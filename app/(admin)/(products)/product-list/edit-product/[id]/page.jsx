import React from 'react'
import EditProductPage from './EditProductPage'
import axiosInstance from '@/lib/axiosInstance';

async function getProductDetails(id) {
    const response = await axiosInstance.get(`/seller-panel-api/frontend/product-detail/${id}/`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
    }
    return response.data;
}

async function page({ params }) {
    const productDetails = await getProductDetails(params.id);
    return (
        <EditProductPage productDetails={productDetails} />
    )
}

export default page