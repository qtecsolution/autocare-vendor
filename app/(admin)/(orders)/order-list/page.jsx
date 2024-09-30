import React from 'react'
import OrderListPage from './OrderListPage';
import axiosInstance from '@/lib/axiosInstance';

async function getOrders(q, page, filter_by, pageSize) {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/order-list/?q=${q}&page=${page}&filter_by=${filter_by}&page_size=${pageSize}`
    );
    const orders = response.data;
    const noOrdersFound = orders.length === 0;
    return {
      props: {
        orders,
        noOrdersFound,
      }
    };
  } catch (error) {
    return {
      props: {
        orders: [],
        noOrdersFound: true,
      }
    };
  }
}

async function page({ searchParams }) {
  const { q, page, filter_by } = searchParams;
  const pageSize = 5;
  const allOrders = await getOrders(q ? q : '', page ? page : 1, filter_by, pageSize);
  const calculateTotalPage = Math.ceil(allOrders.props.orders?.count / pageSize);
  return (
    <OrderListPage allOrders={allOrders} pageProps={page}
      calculatedTotalPages={calculateTotalPage} />
  )
}

export default page