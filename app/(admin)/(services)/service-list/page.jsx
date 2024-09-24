import Link from 'next/link'
import React from 'react'
import ServiceListPage from './ServiceListPage'

import axiosInstance from '@/lib/axiosInstance';

async function getServices(q, page, filter_by, pageSize) {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/service-list/?q=${q}&page=${page}&filter_by=${filter_by}&page_size=${pageSize}`
    );
    const services = response.data;
    const noServicesFound = services.length === 0;
    return {
      props: {
        services,
        noServicesFound,
      }
    };
  } catch (error) {
    return {
      props: {
        services: [],
        noServicesFound: true,
      }
    };
  }
}

async function page({ searchParams }) {
  const { q, page, filter_by } = searchParams;
  const pageSize = 5;
  const allServices = await getServices(q ? q : '', page ? page : 1, filter_by, pageSize);
  const calculateTotalPage = Math.ceil(allServices.props.services?.count / pageSize);
  return (
    <ServiceListPage allServices={allServices} pageProps={page}
      calculatedTotalPages={calculateTotalPage} />
  )
}

export default page