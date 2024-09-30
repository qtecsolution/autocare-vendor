import React from 'react'
import ReSchedulePage from './ReSchedulePage'
import axiosInstance from '@/lib/axiosInstance';

async function getBookingDetails(id) {
  const response = await axiosInstance.get(`/seller-panel-api/frontend/service-booking-details/${id}/`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return response.data;
}

async function page({ params }) {
  const bookingDetails = await getBookingDetails(params.id);
  return (
    <ReSchedulePage bookingDetails={bookingDetails} />
  )
}

export default page