import React from 'react'
import BrandListPage from './BrandListPage'
import axiosInstance from '@/lib/axiosInstance';

async function getBrands(q, page, filter, pageSize) {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/brand-list/?q=${q}&page=${page}&filter=${filter}&page_size=${pageSize}`
    );
    const brands = response.data;
    const noBrandsFound = brands.length === 0;
    return {
      props: {
        brands,
        noBrandsFound,
      }
    };
  } catch (error) {
    return {
      props: {
        brands: [],
        noBrandsFound: true,
      }
    };
  }
}

async function page({ searchParams }) {
  const { q, page, filter } = searchParams;
  const pageSize = 5;
  const allBrands = await getBrands(q ? q : '', page ? page : 1, filter, pageSize);
  const calculatedTotalPages = Math.ceil(allBrands.props.brands?.count / pageSize);
  return (
    <BrandListPage allBrands={allBrands} pageProps={page}
      calculatedTotalPages={calculatedTotalPages} />
  )
}

export default page