import React from 'react';
import axiosInstance from '@/lib/axiosInstance';
import Vouchers from './Vouchers';

export default async function page() {
  let res = await axiosInstance.get(
    '/seller-panel-api/frontend/voucher-list/?filter_by='
  );
  return <Vouchers vouchers={res?.data?.results?.vouchers} />;
}
