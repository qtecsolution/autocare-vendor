import React from 'react';
import EditVoucher from './EditVoucher';
import axiosInstance from '@/lib/axiosInstance';
async function getVoucher(id) {
  const response = await axiosInstance.get(
    `/seller-panel-api/frontend/voucher-detail/${id}/`
  );
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
}
async function getVoucherCreationDta() {
  const response = await axiosInstance.get(
    `/seller-panel-api/frontend/voucher-data/`
  );
  if (response.status !== 200) {
    throw new Error('Failed to fetch data');
  }
  return response.data;
}

export default async function page({ params }) {
    const voucher = await getVoucher(params.id);
    console.log("vocuhre:", voucher);
  const voucherCreationData = await getVoucherCreationDta();
  return (
    <EditVoucher voucherCreationData={voucherCreationData} voucher={voucher} />
  );
}
