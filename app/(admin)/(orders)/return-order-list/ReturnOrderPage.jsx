'use client'
import React, { useEffect } from 'react'
import GlobalSearch from '@/components/admin/GlobalSearch'
import EmptyReturnOrderPage from './EmptyReturnOrderPage'
import { useState } from 'react';
import Pagination from '@/components/admin/Pagination';
import { usePathname, useRouter } from "next/navigation";
import moment from 'moment';
import { convertToAMPM } from '@/utils/timeFormat'

function ReturnOrderPage({ allReturnOrders, pageProps, calculatedTotalPages }) {
  const [currentPage, setCurrentPage] = useState(parseInt(pageProps) || 1);
  const totalPages = calculatedTotalPages;
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const [selectedRange, setSelectedRange] = useState('');
  const [customDateDisable, setCustomDateDisable] = useState(true);

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
    if (startDate) queryParams.set('start_date', startDate);
    if (endDate) queryParams.set('end_date', endDate);

    const queryString = queryParams.toString();
    router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams();
    if (searchQuery) queryParams.set('q', searchQuery);
    if (currentPage > 1) queryParams.set('page', searchQuery ? 1 : currentPage);
    if (filter) queryParams.set('filter_by', filter);
    if (startDate) queryParams.set('start_date', startDate);
    if (endDate) queryParams.set('end_date', endDate);

    const queryString = queryParams.toString();
    router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
  }, [searchQuery, currentPage, filter, startDate, endDate]);


  const handleRangeClick = (range) => {
    setSelectedRange(selectedRange === range ? '' : range);

    const today = moment().format('YYYY-MM-DD');

    switch (range) {
      case 'Today':
        setStartDate(selectedRange === 'Today' ? '' : today);
        setEndDate(selectedRange === 'Today' ? '' : today);
        setCustomDateDisable(true);
        break;

      case 'Yesterday':
        setStartDate(selectedRange === 'Yesterday' ? '' : moment().subtract(1, 'days').format('YYYY-MM-DD'));
        setEndDate(selectedRange === 'Yesterday' ? '' : today);
        setCustomDateDisable(true);
        break;

      case 'Last 7 Days':
        setStartDate(selectedRange === 'Last 7 Days' ? '' : moment().subtract(7, 'days').format('YYYY-MM-DD'));
        setEndDate(selectedRange === 'Last 7 Days' ? '' : today);
        setCustomDateDisable(true);
        break;

      case 'Last 30 Days':
        setStartDate(selectedRange === 'Last 30 Days' ? '' : moment().subtract(30, 'days').format('YYYY-MM-DD'));
        setEndDate(selectedRange === 'Last 30 Days' ? '' : today);
        setCustomDateDisable(true);
        break;

      case 'Custom':
        setCustomDateDisable(!customDateDisable);
        setStartDate('');
        setEndDate('');
        break;

      default:
        setStartDate(null);
        setEndDate(null);
        setCustomDateDisable(true);
    }
  };
  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />

        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="title">Return Orders</h1>
              </div>

              <div className="d-flex align-items-center gap-3 all-buttons-inner">
                <button className={`manage-products-btn ${filter === '' ? 'active' : ''}`}
                  onClick={() => setFilter('')}>
                  All <span>{allReturnOrders?.props?.returnorders?.results?.total_return_requests_count}</span>
                </button>

                <button className={`manage-products-btn ${filter === '1' ? 'active' : ''}`}
                  onClick={() => setFilter('1')}>
                  <span className="text">Requested</span>
                  <span className="number">{allReturnOrders?.props?.returnorders?.results?.requested_return_requests_count}</span>
                </button>

                <button className={`manage-products-btn ${filter === '2' ? 'active' : ''}`}
                  onClick={() => setFilter('2')}>
                  <span className="text">Approved</span>
                  <span className="number">{allReturnOrders?.props?.returnorders?.results?.approved_return_requests_count}</span>
                </button>

                <button className={`manage-products-btn ${filter === '3' ? 'active' : ''}`}
                  onClick={() => setFilter('3')}>
                  <span className="text">Rejected</span>
                  <span className="number">{allReturnOrders?.props?.returnorders?.results?.rejected_return_requests_count}</span>
                </button>
              </div>
            </div>

            <div className="order-management-body">
              <div className="order-management-body-top">
                <div className="order-management-search-inner">
                  <div action="" className="order-form">
                    <div className="order-input">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                          stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <input type="text" name="" id="" placeholder="Order No" required
                        value={searchQuery}
                        onChange={handleSearchQuery} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-management-body-middle">
                <div className="content">
                  <p className="text">
                    Requested Date:
                  </p>

                  <div className="content-all-btn">
                    <button
                      className={`order-date-btn ${selectedRange === 'Today' ? 'active' : ''}`}
                      onClick={() => handleRangeClick('Today')}
                    >
                      Today
                    </button>

                    <button
                      className={`order-date-btn ${selectedRange === 'Yesterday' ? 'active' : ''}`}
                      onClick={() => handleRangeClick('Yesterday')}
                    >
                      Yesterday
                    </button>

                    <button
                      className={`order-date-btn ${selectedRange === 'Last 7 Days' ? 'active' : ''}`}
                      onClick={() => handleRangeClick('Last 7 Days')}
                    >
                      Last 7 Days
                    </button>

                    <button
                      className={`order-date-btn ${selectedRange === 'Last 30 Days' ? 'active' : ''}`}
                      onClick={() => handleRangeClick('Last 30 Days')}
                    >
                      Last 30 Days
                    </button>
                    <button
                      className={`order-date-btn ${selectedRange === 'Custom' ? 'active' : ''}`}
                      onClick={() => handleRangeClick('Custom')}
                    >
                      Custom
                    </button>

                    <div className="date-picker">
                      <input type="date" id="start-date" placeholder="Start Date" onChange={(e) => setStartDate(e.target.value)} value={startDate} disabled={customDateDisable} />
                      <input type="date" id="end-date" placeholder="End Date" onChange={(e) => setEndDate(e.target.value)} value={endDate} disabled={customDateDisable} />
                    </div>
                  </div>
                </div>
              </div>

              {allReturnOrders?.props?.returnorders?.count > 0 ?
                <div className="order-management-body-inner">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>customer info</th>
                          <th className="text-center">Item</th>
                          <th className="text-center">Amount</th>
                          <th className="text-center">Payment Method</th>
                          {/* <th className="text-center">Payment STATUS</th> */}
                          <th className="text-center">Return Status</th>
                          <th className="text-center">Return Reason</th>
                          {/* <th className="text-center">ACTIONS</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {allReturnOrders?.props?.returnorders?.results?.return_requests?.map((returnOrder) => (
                          <tr key={returnOrder?.id}>
                            <td>
                              <p className="id-text">
                                #{returnOrder?.order_id}
                              </p>
                            </td>

                            <td>
                              <div className="d-flex flex-column gap-1">
                                <p className="id-text">
                                  {returnOrder?.customer_name}
                                </p>
                                <p className="info-text">{returnOrder?.customer_phone_number}</p>
                                <p className="info-text">{returnOrder?.customer_email}</p>
                              </div>
                            </td>



                            <td>
                              <p className="id-text text-center">
                                {returnOrder?.item_quantity}
                              </p>
                            </td>

                            <td className="text-center">
                              <p className="id-text">
                                {returnOrder?.price} tk
                              </p>
                            </td>
                            <td className="text-center">
                              <p className="id-text">
                                {returnOrder?.payment_method}
                              </p>
                            </td>

                            <td className="text-center">
                              <span className="status pending">{returnOrder?.status}</span>
                            </td>

                            <td>
                              <p className="id-text text-center">
                                {returnOrder?.return_reason}
                              </p>
                            </td>

                            {/* <td className="text-center">
                              <figure className="action-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21"
                                  fill="none">
                                  <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                  <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                                  <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                                </svg>
                              </figure>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                :
                <EmptyReturnOrderPage />
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

export default ReturnOrderPage