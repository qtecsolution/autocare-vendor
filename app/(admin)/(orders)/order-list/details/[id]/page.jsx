import React from 'react'
import DetailsPage from './DetailsPage'
import axiosInstance from '@/lib/axiosInstance';

async function getOrderDetails(id) {
  const response = await axiosInstance.get(`/seller-panel-api/frontend/order-detail/${id}/`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return response.data;
}
async function page({ params }) {
  const orderDetails = await getOrderDetails(params.id);
  return (
    <DetailsPage orderDetails={orderDetails} />
  )
}

export default page