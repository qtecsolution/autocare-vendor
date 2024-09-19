import React from 'react'
import AllProductPage from './AllProductPage'
import axiosInstance from '@/lib/axiosInstance';

async function getProducts(q, page, filter, pageSize) {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/product-list/?q=${q}&page=${page}&filter=${filter}&page_size=${pageSize}`
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
  const { q, page, filter } = searchParams;
  const pageSize = 5;
  const allProducts = await getProducts(q ? q : '', page ? page : 1, filter, pageSize);
  const calculateTotalPage = Math.ceil(allProducts.props.products?.count / pageSize);
  return (
    <AllProductPage allProducts={allProducts} pageProps={page}
      calculatedTotalPages={calculateTotalPage} />
  )
}

export default page