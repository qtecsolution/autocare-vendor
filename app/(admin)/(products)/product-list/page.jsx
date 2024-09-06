import React from 'react'
import AllProductPage from './AllProductPage'
import axiosWithBaseURL from '@/lib/axiosWithBaseURL';
import axios from 'axios';

async function getProducts(q, page, pageSize) {
  try {
    const response = await axiosWithBaseURL.get(
      `/api/frontend/store-all-products/qsl-qa/?q=${q}&page=${page}&page_size=${pageSize}`
    );
    const products = response.data;
    const noProductsFound = products.length === 0;
    return {
      props: {
        products,
        noProductsFound,
      }
    };
  } catch (error) {
    return {
      props: {
        products: [],
        noProductsFound: true,
      }
    };
  }
}

async function page({ searchParams }) {
  const { q, page } = searchParams;
  const pageSize = 5;
  const allProducts = await getProducts(q ? q : '', page ? page : 1, pageSize );
  const calculateTotalPage = Math.ceil(allProducts.props.products?.count / pageSize);
  return (
    <AllProductPage allProducts={allProducts} pageProps={page}
      calculatedTotalPages={calculateTotalPage} />
  )
}

export default page