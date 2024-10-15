'use client'
import GlobalSearch from '@/components/admin/GlobalSearch'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Pagination from '@/components/admin/Pagination';
import { usePathname, useRouter } from "next/navigation";
import EmptyOrderList from './EmptyOrderList';
import axiosInstance from '@/lib/axiosInstance';

function OrderListPage({ allOrders, pageProps, calculatedTotalPages }) {
    const [currentPage, setCurrentPage] = useState(parseInt(pageProps) || 1);
    const totalPages = calculatedTotalPages;
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    const handleSearchQuery = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
    };

    const handlePagination = (page) => {
        setCurrentPage(page);

        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.set('q', searchQuery);
        if (page > 1) queryParams.set('page', page);
        if (filter) queryParams.set('filter_by', filter);

        const queryString = queryParams.toString();
        router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
    };

    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.set('q', searchQuery);
        if (currentPage > 1) queryParams.set('page', searchQuery ? 1 : currentPage);
        if (filter) queryParams.set('filter_by', filter);

        const queryString = queryParams.toString();
        router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
    }, [searchQuery, currentPage, filter]);

    const downloadExcel = async () => {
        try {
            const response = await axiosInstance.get('/seller-panel-api/frontend/export-order-items-to-excel/', {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;

            link.setAttribute('download', 'order-items.xlsx');

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);

        } catch (error) {
            console.error('Failed to download Excel file:', error);
        }
    };
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />

                <section className="order-management-section">
                    <div className="order-management-section-inner">
                        <div className="order-management-header">

                            <div className="d-flex align-items-center gap-3 all-buttons-inner">
                                <button className={`manage-products-btn ${filter === '' ? 'active' : ''}`}
                                    onClick={() => setFilter('')}>
                                    <span className="text">All</span>
                                    <span className="number">{allOrders?.props?.orders?.results?.total_orders}</span>
                                </button>

                                <button className={`manage-products-btn ${filter === 'paid' ? 'active' : ''}`}
                                    onClick={() => setFilter('paid')}>
                                    <span className="text">Paid</span>
                                    <span className="number">{allOrders?.props?.orders?.results?.paid_orders}</span>
                                </button>
                                <button className={`manage-products-btn ${filter === 'unpaid' ? 'active' : ''}`}
                                    onClick={() => setFilter('unpaid')}>
                                    <span className="text">Unpaid</span>
                                    <span className="number">{allOrders?.props?.orders?.results?.unpaid_orders}</span>
                                </button>

                                <button className={`manage-products-btn ${filter === 'partial' ? 'active' : ''}`}
                                    onClick={() => setFilter('partial')}>
                                    <span className="text">Partial</span>
                                    <span className="number">{allOrders?.props?.orders?.results?.partial_orders}</span>
                                </button>

                                <button className={`manage-products-btn ${filter === 'placed_order' ? 'active' : ''}`}
                                    onClick={() => setFilter('placed_order')}>
                                    <span className="text">Placed Order</span>
                                    <span className="number">{allOrders?.props?.orders?.results?.order_placed}</span>
                                </button>

                                <button className={`manage-products-btn ${filter === 'cancelled_order' ? 'active' : ''}`}
                                    onClick={() => setFilter('cancelled_order')}>
                                    <span className="text">Cancellation</span>
                                    <span className="number">{allOrders?.props?.orders?.results?.cancelled_orders}</span>
                                </button>
                            </div>
                        </div>

                        <div className="order-management-body">
                            <div className="order-management-body-top">
                                <div className="order-management-search-inner">
                                    <form action="" className="order-form">
                                        <div className="order-input">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                                    stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <input
                                                className="page-search-input"
                                                type="text"
                                                id="search-input"
                                                placeholder="Order No..."
                                                required
                                                value={searchQuery}
                                                onChange={handleSearchQuery}
                                            />
                                        </div>
                                    </form>
                                </div>

                                <div className="d-flex align-items-center gap-3 ">
                                    <div className="">
                                        <button className="export-btn" onClick={downloadExcel}>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                    <path
                                                        d="M10.5 1.70215V4.80005C10.5 5.22009 10.5 5.43011 10.5817 5.59055C10.6537 5.73167 10.7684 5.8464 10.9095 5.91831C11.0699 6.00005 11.28 6.00005 11.7 6.00005H14.7979M6.75 11.25L9 13.5M9 13.5L11.25 11.25M9 13.5L9 9M10.5 1.5H6.6C5.33988 1.5 4.70982 1.5 4.22852 1.74524C3.80516 1.96095 3.46095 2.30516 3.24524 2.72852C3 3.20982 3 3.83988 3 5.1V12.9C3 14.1601 3 14.7902 3.24524 15.2715C3.46095 15.6948 3.80516 16.039 4.22852 16.2548C4.70982 16.5 5.33988 16.5 6.6 16.5H11.4C12.6601 16.5 13.2902 16.5 13.7715 16.2548C14.1948 16.039 14.539 15.6948 14.7548 15.2715C15 14.7902 15 14.1601 15 12.9V6L10.5 1.5Z"
                                                        stroke="#0F766D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <span>Export</span>
                                        </button>
                                    </div>
                                    <div className="">
                                        <Link href="/order-list/add-order" className="add-product-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332" stroke="white" stroke-width="1.67"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                            <span>Add Order</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {allOrders?.props?.orders?.count > 0 ?
                                <div className="order-management-body-inner">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>customer info</th>
                                                    {/* <th className="text-center">Item</th> */}
                                                    <th className="text-center">Amount</th>
                                                    <th className="text-center">Payment method</th>
                                                    <th className="text-center">Payment STATUS</th>
                                                    {/* <th className="text-center">Order STATUS</th> */}
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {allOrders?.props?.orders?.results?.orders?.map((order) => (
                                                    <tr key={order?.id}>
                                                        <td>
                                                            <p className="id-text">
                                                                #{order?.order_id}
                                                            </p>
                                                        </td>

                                                        <td>
                                                            <div className="customer-info">
                                                                <p className="id-text">
                                                                    {order?.customer?.full_name}
                                                                </p>
                                                                <p className="number-text">
                                                                    {order?.customer?.phone_number}
                                                                </p>
                                                                <p className="number-text">
                                                                    {order?.customer?.email}
                                                                </p>
                                                            </div>
                                                        </td>

                                                        {/* <td>
                                                            <p className="id-text text-center">
                                                                2
                                                            </p>
                                                        </td> */}
                                                        <td>
                                                            <p className="id-text text-center">
                                                                {order?.total_price} TK.
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="id-text text-center">
                                                                {order?.payment_method}
                                                            </p>
                                                        </td>
                                                        <td>
                                                            <p className="id-text text-center">
                                                                {order?.payment_status}
                                                            </p>
                                                        </td>

                                                        {/* <td className="text-center">
                                                            <span className="status order-placed ">Order Placed</span>
                                                        </td> */}

                                                        <td className="text-center">
                                                            <div className="dropdown">
                                                                <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <figure className="action-btn">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                                                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                                                            <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                                                                            <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                                                                        </svg>
                                                                    </figure>
                                                                </button>
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><Link href={"/order-list/details/" + order?.id} className="dropdown-item">Details</Link></li>
                                                                    <li><Link href={"/order-list/edit-order/" + order?.id} className="dropdown-item">Edit Order</Link></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                : <EmptyOrderList />
                            }
                        </div>
                    </div>
                </section>

                <section className="pagination-section">
                    <div className="pagination-section-inner">
                        <div className="left">
                            {/* <p className="text">Showing 1 to 10 of 23 entries</p> */}
                        </div>
                        <div className="right">
                            <Pagination
                                totalPages={totalPages}
                                currentPage={currentPage}
                                handlePagination={handlePagination}
                            />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default OrderListPage