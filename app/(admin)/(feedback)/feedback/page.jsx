import React from 'react';
import axiosInstance from '@/lib/axiosInstance';
import Feedback from './Feedback';
import EmptyFeedback from './EmptyFeedback';
async function getProductFeedback() {
  const response = await axiosInstance.get(
    '/seller-panel-api/frontend/review-list/?type=product'
  );
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response?.data?.count;
}
async function getServiceFeedback() {
  const response = await axiosInstance.get(
    '/seller-panel-api/frontend/review-list/?type=service'
  );
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response?.data?.count;
}
export default async function page() {
  const ProductFeedbackCount = await getProductFeedback();
  const ServiceFeedbackCount = await getServiceFeedback();
  const totalItem = ProductFeedbackCount + ServiceFeedbackCount;
  return totalItem>0?<Feedback/>:<EmptyFeedback />;
}
