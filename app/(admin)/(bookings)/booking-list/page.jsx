import React from 'react'
import BookingPage from './BookingPage'

import axiosInstance from '@/lib/axiosInstance';

async function getBookings(q, page, filter_by, pageSize, timeSlotId, startDate, endDate) {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/service-booking-list/?q=${q}&page=${page}&filter_by=${filter_by}&page_size=${pageSize}&time_slot_id=${timeSlotId}&start_date=${startDate}&end_date=${endDate}`
    );
    const bookings = response.data;
    const noBookingsFound = bookings.length === 0;
    return {
      props: {
        bookings,
        noBookingsFound,
      }
    };
  } catch (error) {
    return {
      props: {
        bookings: [],
        noBookingsFound: true,
      }
    };
  }
}

async function page({ searchParams }) {
  const { q, page, filter_by, time_slot_id, start_date, end_date } = searchParams;

  const pageSize = 5;
  const allBookings = await getBookings(q ? q : '', page ? page : 1, filter_by, pageSize, time_slot_id ? time_slot_id : '', start_date ? start_date : '', end_date ? end_date : '');
  const calculateTotalPage = Math.ceil(allBookings.props.bookings?.count / pageSize);
  return (
    <BookingPage allBookings={allBookings} pageProps={page}
      calculatedTotalPages={calculateTotalPage} />
  )
}

export default page