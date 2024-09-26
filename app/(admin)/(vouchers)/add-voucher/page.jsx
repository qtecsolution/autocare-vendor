import React from 'react'
import AddVoucher from './AddVoucher';
import axiosInstance from '@/lib/axiosInstance';

export default async function page() {
    let res = await axiosInstance('/seller-panel-api/frontend/voucher-data/');
    return <AddVoucher voucherCreationData={res?.data} />;
}
