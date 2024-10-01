import React from 'react'
import ReturnOrderPage from './ReturnOrderPage'
import axiosInstance from '@/lib/axiosInstance';

async function getReturnOrders(q, page, filter_by, pageSize, startDate, endDate) {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/order-return-list/?q=${q}&page=${page}&filter_by=${filter_by}&page_size=${pageSize}&start_date=${startDate}&end_date=${endDate}`
    );
    const returnorders = response.data;
    const noReturnOrdersFound = returnorders.length === 0;

    return {
      props: {
        returnorders,
        noReturnOrdersFound,
      }
    };
  } catch (error) {
    return {
      props: {
        returnorders: [],
        noReturnOrdersFound: true,
      }
    };
  }
}
async function page({ searchParams }) {
  const { q, page, filter_by, start_date, end_date } = searchParams;

  const pageSize = 5;
  const allReturnOrders = await getReturnOrders(q ? q : '', page ? page : 1, filter_by ? filter_by : '', pageSize, start_date ? start_date : '', end_date ? end_date : '');
  const calculateTotalPage = Math.ceil(allReturnOrders.props.returnorders?.count / pageSize);
  return (
    <ReturnOrderPage allReturnOrders={allReturnOrders} pageProps={page}
      calculatedTotalPages={calculateTotalPage} />
  )
}

export default page