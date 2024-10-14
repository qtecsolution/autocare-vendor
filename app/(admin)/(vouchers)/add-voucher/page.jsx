import React from 'react';
import AddVoucher from './AddVoucher';
import axiosInstance from '@/lib/axiosInstance';

export default async function page() {
  let res;

  try {
    res = await axiosInstance.get('/seller-panel-api/frontend/voucher-data/');
  } catch (error) {
    console.log(error)
  }

  return <AddVoucher voucherCreationData={res?.data} />;
}
