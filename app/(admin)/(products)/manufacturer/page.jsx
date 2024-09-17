import React from 'react'
import ManufacturerPage from './ManufacturerPage'
import axiosInstance from '@/lib/axiosInstance';

async function getManufacturer(q, page, filter, pageSize) {
    try {
        const response = await axiosInstance.get(
            `/seller-panel-api/frontend/manufacturer-list/?q=${q}&page=${page}&filter=${filter}&page_size=${pageSize}`
        );
        const manufacturer = response.data;
        const noManufacturerFound = manufacturer.length === 0;
        return {
            props: {
                manufacturer,
                noManufacturerFound,
            }
        };
    } catch (error) {
        return {
            props: {
                manufacturer: [],
                noManufacturerFound: true,
            }
        };
    }
}
async function page({ searchParams }) {
    const { q, page, filter } = searchParams;
    const pageSize = 5;
    const allManufacturer = await getManufacturer(q ? q : '', page ? page : 1, filter, pageSize);
    const calculatedTotalPages = Math.ceil(allManufacturer.props.manufacturer?.count / pageSize);
    return (
        <ManufacturerPage allManufacturer={allManufacturer} pageProps={page}
        calculatedTotalPages={calculatedTotalPages} />
    )
}

export default page