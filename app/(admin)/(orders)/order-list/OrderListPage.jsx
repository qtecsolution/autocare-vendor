'use client'
import GlobalSearch from '@/components/admin/GlobalSearch'
import React, { useState } from 'react'
import Select from 'react-select';

function OrderListPage() {
    const [selectedNew, setSelectedNew] = useState(null);
    const newest = [
        { value: 'new1', label: 'New 1' },
        { value: 'new2', label: 'New 2' },
        { value: 'new3', label: 'New 3' },
    ];
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="order-management-section">
                    <div className="order-management-section-inner">
                        <div className="order-management-header">
                            <h1 className="title">Order Management</h1>

                            <div className="d-flex align-items-center gap-3 all-buttons-inner">
                                <button className="manage-products-btn active">
                                    <span className="text">All</span>
                                    <span className="number">365</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Unpaid</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">To Ship</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Shipping</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Delivered</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Failed Delivery</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Cancellation</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Return Or Refund</span> <span>0</span>
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
                                            <input type="text" name="" id="" placeholder="Order No" />
                                        </div>
                                    </form>

                                    <form action="" className="order-form">
                                        <div className="order-input">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                                    stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <input type="text" name="" id="" placeholder="Order No" />
                                        </div>
                                    </form>
                                </div>

                                <div className="box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path
                                            d="M3.97208 2.21607C3.89373 2.13766 3.80069 2.07546 3.69828 2.03303C3.59588 1.99059 3.48612 1.96875 3.37527 1.96875C3.26442 1.96875 3.15466 1.99059 3.05226 2.03303C2.94985 2.07546 2.85681 2.13766 2.77846 2.21607L1.09096 3.90357C0.932673 4.06185 0.84375 4.27653 0.84375 4.50038C0.84375 4.72423 0.932673 4.93891 1.09096 5.09719C1.24924 5.25548 1.46392 5.3444 1.68777 5.3444C1.91162 5.3444 2.1263 5.25548 2.28458 5.09719L2.53152 4.8497V15.1879C2.53152 15.4117 2.62042 15.6263 2.77865 15.7845C2.93688 15.9427 3.15149 16.0316 3.37527 16.0316C3.59905 16.0316 3.81366 15.9427 3.97189 15.7845C4.13013 15.6263 4.21902 15.4117 4.21902 15.1879V4.8497L4.46596 5.09719C4.62424 5.25548 4.83892 5.3444 5.06277 5.3444C5.28662 5.3444 5.5013 5.25548 5.65958 5.09719C5.81787 4.93891 5.90679 4.72423 5.90679 4.50038C5.90679 4.27653 5.81787 4.06185 5.65958 3.90357L3.97208 2.21607Z"
                                            fill="#60637A" />
                                        <path
                                            d="M16.3125 2.53125H7.3125C7.08872 2.53125 6.87411 2.62014 6.71588 2.77838C6.55764 2.93661 6.46875 3.15122 6.46875 3.375C6.46875 3.59878 6.55764 3.81339 6.71588 3.97162C6.87411 4.12986 7.08872 4.21875 7.3125 4.21875H16.3125C16.5363 4.21875 16.7509 4.12986 16.9091 3.97162C17.0674 3.81339 17.1562 3.59878 17.1562 3.375C17.1562 3.15122 17.0674 2.93661 16.9091 2.77838C16.7509 2.62014 16.5363 2.53125 16.3125 2.53125Z"
                                            fill="#60637A" />
                                        <path
                                            d="M14.0625 6.46875H7.3125C7.08872 6.46875 6.87411 6.55764 6.71588 6.71588C6.55764 6.87411 6.46875 7.08872 6.46875 7.3125C6.46875 7.53628 6.55764 7.75089 6.71588 7.90912C6.87411 8.06736 7.08872 8.15625 7.3125 8.15625H14.0625C14.2863 8.15625 14.5009 8.06736 14.6591 7.90912C14.8174 7.75089 14.9062 7.53628 14.9062 7.3125C14.9062 7.08872 14.8174 6.87411 14.6591 6.71588C14.5009 6.55764 14.2863 6.46875 14.0625 6.46875Z"
                                            fill="#60637A" />
                                        <path
                                            d="M11.8125 10.4062H7.3125C7.08872 10.4062 6.87411 10.4951 6.71588 10.6534C6.55764 10.8116 6.46875 11.0262 6.46875 11.25C6.46875 11.4738 6.55764 11.6884 6.71588 11.8466C6.87411 12.0049 7.08872 12.0938 7.3125 12.0938H11.8125C12.0363 12.0938 12.2509 12.0049 12.4091 11.8466C12.5674 11.6884 12.6562 11.4738 12.6562 11.25C12.6562 11.0262 12.5674 10.8116 12.4091 10.6534C12.2509 10.4951 12.0363 10.4062 11.8125 10.4062Z"
                                            fill="#60637A" />
                                        <path
                                            d="M9.5625 14.3438H7.3125C7.08872 14.3438 6.87411 14.4326 6.71588 14.5909C6.55764 14.7491 6.46875 14.9637 6.46875 15.1875C6.46875 15.4113 6.55764 15.6259 6.71588 15.7841C6.87411 15.9424 7.08872 16.0312 7.3125 16.0312H9.5625C9.78628 16.0312 10.0009 15.9424 10.1591 15.7841C10.3174 15.6259 10.4062 15.4113 10.4062 15.1875C10.4062 14.9637 10.3174 14.7491 10.1591 14.5909C10.0009 14.4326 9.78628 14.3438 9.5625 14.3438Z"
                                            fill="#60637A" />
                                    </svg>
                                    <Select
                                        defaultValue={selectedNew}
                                        onChange={setSelectedNew}
                                        options={newest}
                                        className='bg-color selectize'
                                        placeholder="Newest"
                                    />
                                </div>

                            </div>

                            <div className="order-management-body-middle">
                                <div className="content">
                                    <p className="text">
                                        Order Date:
                                    </p>

                                    <div className="content-all-btn">
                                        <button className="order-date-btn active">
                                            Today
                                        </button>

                                        <button className="order-date-btn">
                                            Yesterday
                                        </button>

                                        <button className="order-date-btn">
                                            Last 7 Days
                                        </button>

                                        <button className="order-date-btn">
                                            Last 30 Days
                                        </button>

                                        <div className="date-picker">
                                            <input type="text" id="start-date" placeholder="Start Date" />
                                            <input type="text" id="end-date" placeholder="End Date" />
                                        </div>
                                    </div>
                                </div>

                                <div className="content">
                                    <p className="text">
                                        Order Type:
                                    </p>

                                    <div className="content-all-btn">
                                        <button className="order-date-btn active">
                                            All
                                        </button>

                                        <button className="order-date-btn">
                                            Normal
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="order-management-body-inner">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="product-info-header">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox" />
                                                    <label for="table-header-checkbox" tabindex="4">Product</label>
                                                </th>
                                                <th className="text-center">Total amount</th>
                                                <th className="text-center">delivery</th>
                                                <th className="text-center">STATUS</th>
                                                <th className="text-center">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-info-inner">
                                                    <div className="product-info">
                                                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox" />
                                                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox"
                                                            tabindex="4">
                                                            <img className="product-image" src="/assets/images/products1.png" alt="Product Image" />
                                                        </label>

                                                        <div className="product-details d-flex flex-column gap-2">
                                                            <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td>
                                                    <p className="pice-text text-center">
                                                        ৳ 1,889
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text text-center">
                                                        236
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <span className="status delivered">Delivered</span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21"
                                                            fill="none">
                                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                                            <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                                                            <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                                                        </svg>
                                                    </figure>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pagination-section">
                    <div className="pagination-section-inner">
                        <div className="left">
                            <p className="text">Showing 1 to 10 of 23 entries</p>
                        </div>
                        <div className="right">
                            <nav className="pagination-nav">
                                <ul className="list-unstyled d-flex align-items-center gap-2">
                                    <li className="pagination-nav-list">
                                        <a className="pagination-nav-link previous" href="">
                                            « Previous
                                        </a>
                                    </li>

                                    <li className="pagination-nav-list">
                                        <a className="pagination-nav-link" href="">
                                            1
                                        </a>
                                    </li>
                                    <li className="pagination-nav-list">
                                        <a className="pagination-nav-link" href="">
                                            2
                                        </a>
                                    </li>
                                    <li className="pagination-nav-list">
                                        <a className="pagination-nav-link" href="">
                                            3
                                        </a>
                                    </li>

                                    <li className="pagination-nav-list">
                                        <a className="pagination-nav-link" href="">
                                            •••
                                        </a>
                                    </li>
                                    <li className="pagination-nav-list">
                                        <a className="pagination-nav-link" href="">
                                            10
                                        </a>
                                    </li>

                                    <li className="pagination-nav-list">
                                        <a className="pagination-nav-link next" href="">
                                            Next »
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default OrderListPage