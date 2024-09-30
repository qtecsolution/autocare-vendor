'use client'
import GlobalSearch from '@/components/admin/GlobalSearch'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Pagination from '@/components/admin/Pagination';
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link'
import EmptyBookingPage from './EmptyBookingPage';
import moment from 'moment';
import { convertToAMPM } from '@/utils/timeFormat'

function BookingPage({ allBookings, pageProps, calculatedTotalPages }) {
  const [currentPage, setCurrentPage] = useState(parseInt(pageProps) || 1);
  const totalPages = calculatedTotalPages;
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [timeSlotId, setTimeSlotId] = useState('');
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
    if (timeSlotId) queryParams.set('time_slot_id', timeSlotId);
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
    if (timeSlotId) queryParams.set('time_slot_id', timeSlotId);
    if (startDate) queryParams.set('start_date', startDate);
    if (endDate) queryParams.set('end_date', endDate);

    const queryString = queryParams.toString();
    router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
  }, [searchQuery, currentPage, filter, timeSlotId, startDate, endDate]);


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
              <h1 className="title">Bookings</h1>

              <div className="d-flex align-items-center gap-3 all-buttons-inner">
                <button className={`manage-products-btn ${filter === '' ? 'active' : ''}`}
                  onClick={() => setFilter('')}>
                  All <span>{allBookings?.props?.bookings?.results?.allBookingsCount}</span>
                </button>

                <button className={`manage-products-btn ${filter === 'active' ? 'active' : ''}`}
                  onClick={() => setFilter('active')}>
                  Active <span>{allBookings?.props?.bookings?.results?.activeBookingsCount}</span>
                </button>

                <button className={`manage-products-btn ${filter === 'inactive' ? 'active' : ''}`}
                  onClick={() => setFilter('inactive')}>
                  Inactive <span>{allBookings?.props?.bookings?.results?.inactiveBookingsCount}</span>
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
                      <input type="text" name="" id="" placeholder="Search"
                        required
                        value={searchQuery}
                        onChange={handleSearchQuery} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-management-body-middle">
                <div className="content">
                  <p className="text">
                    Order Date:
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

                <div className="content">
                  <p className="text">
                    Order Type:
                  </p>
                  <div className="content-all-btn">
                    {allBookings?.props?.bookings?.results?.timeSlots?.map((timeSlot) => (
                      <button className={`order-date-btn ${timeSlotId === timeSlot?.id ? 'active' : ''} `} key={timeSlot?.id} onClick={() => setTimeSlotId(timeSlotId === timeSlot?.id ? '' : timeSlot?.id)}>
                        <div className="d-flex align-items-center gap-2">
                          <figure className="icon">
                            <img src={timeSlot?.icon} width={15} height={15} />
                          </figure>
                          <div className="date-text">
                            <h4>{timeSlot?.time_slot}</h4>
                            <p>{convertToAMPM(timeSlot?.opening_time)} to {convertToAMPM(timeSlot?.closing_time)}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {allBookings?.props?.bookings?.count > 0 ?
                <div className="order-management-body-inner">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th>Date</th>
                          <th>Booking ID</th>
                          <th>Service</th>
                          <th>Time</th>
                          <th>price</th>
                          <th>Status</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allBookings?.props?.bookings?.results?.bookings?.map((booking) =>
                        (
                          <tr key={booking?.id}>
                            <td>
                              <p className="id-text">
                                {booking?.booking_date}
                              </p>
                            </td>

                            <td>
                              <p className="id-text">
                                {booking?.booking_id}
                              </p>
                            </td>

                            <td>
                              <Link href={"/booking-list/details/" + booking?.id} className="itemName-text">
                                {booking?.service?.name?.length > 25 ? booking?.service?.name.slice(0, 25) + "..." : booking?.service?.name}
                              </Link>
                            </td>

                            <td>
                              <div className="d-flex gap-2 align-items-center morning">
                                <figure>
                                  <img src={booking?.booking_time_slot?.icon} width={15} height={15} />
                                </figure>
                                <p className="id-text text-center">
                                  {booking?.booking_time_slot?.time_slot}
                                </p>
                              </div>
                            </td>

                            <td>
                              <p className="id-text">
                                {booking?.total_price} TK
                              </p>
                            </td>

                            <td>
                              <span className={`status ${booking?.status === 'Booking Placed' ? 'approved' : 'cancelled'}`}>{booking?.status}</span>
                            </td>

                            <td className="text-center">
                              <div class="dropdown">
                                <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                  <figure className="action-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                                      <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                      <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                                      <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                                    </svg>
                                  </figure>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                  <li><Link href={"/booking-list/reschedule/" + booking?.id} class="dropdown-item">Reschedule</Link></li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                : <EmptyBookingPage />
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

      </div >
    </main >
  )
}

export default BookingPage