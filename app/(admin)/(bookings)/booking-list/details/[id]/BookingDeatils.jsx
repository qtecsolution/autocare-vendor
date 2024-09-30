'use client'
import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'
import { convertToAMPM } from '@/utils/timeFormat'
import Link from 'next/link';

function BookingDeatils({ bookingDetails }) {
  console.log(bookingDetails, 'bkd');

  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />

        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                <div className="d-flex flex-column gap-2">
                  <h1 className="title">Bookings Details</h1>
                  <div className="breadcrumb-inner">
                    <ul className="list-unstyled d-flex align-items-center">
                      <li className="shopping-icon">
                        <a href="/">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path
                              d="M10.625 10.625C10.625 10.7908 10.5592 10.9497 10.4419 11.0669C10.3247 11.1842 10.1658 11.25 10 11.25C9.83424 11.25 9.67527 11.1842 9.55806 11.0669C9.44085 10.9497 9.375 10.7908 9.375 10.625C9.375 10.4592 9.44085 10.3003 9.55806 10.1831C9.67527 10.0658 9.83424 10 10 10C10.1658 10 10.3247 10.0658 10.4419 10.1831C10.5592 10.3003 10.625 10.4592 10.625 10.625ZM6.25 13.125C6.41576 13.125 6.57473 13.0592 6.69194 12.9419C6.80915 12.8247 6.875 12.6658 6.875 12.5C6.875 12.3342 6.80915 12.1753 6.69194 12.0581C6.57473 11.9408 6.41576 11.875 6.25 11.875C6.08424 11.875 5.92527 11.9408 5.80806 12.0581C5.69085 12.1753 5.625 12.3342 5.625 12.5C5.625 12.6658 5.69085 12.8247 5.80806 12.9419C5.92527 13.0592 6.08424 13.125 6.25 13.125ZM6.875 14.375C6.875 14.5408 6.80915 14.6997 6.69194 14.8169C6.57473 14.9342 6.41576 15 6.25 15C6.08424 15 5.92527 14.9342 5.80806 14.8169C5.69085 14.6997 5.625 14.5408 5.625 14.375C5.625 14.2092 5.69085 14.0503 5.80806 13.9331C5.92527 13.8158 6.08424 13.75 6.25 13.75C6.41576 13.75 6.57473 13.8158 6.69194 13.9331C6.80915 14.0503 6.875 14.2092 6.875 14.375ZM8.125 13.125C8.29076 13.125 8.44973 13.0592 8.56694 12.9419C8.68415 12.8247 8.75 12.6658 8.75 12.5C8.75 12.3342 8.68415 12.1753 8.56694 12.0581C8.44973 11.9408 8.29076 11.875 8.125 11.875C7.95924 11.875 7.80027 11.9408 7.68306 12.0581C7.56585 12.1753 7.5 12.3342 7.5 12.5C7.5 12.6658 7.56585 12.8247 7.68306 12.9419C7.80027 13.0592 7.95924 13.125 8.125 13.125ZM8.75 14.375C8.75 14.5408 8.68415 14.6997 8.56694 14.8169C8.44973 14.9342 8.29076 15 8.125 15C7.95924 15 7.80027 14.9342 7.68306 14.8169C7.56585 14.6997 7.5 14.5408 7.5 14.375C7.5 14.2092 7.56585 14.0503 7.68306 13.9331C7.80027 13.8158 7.95924 13.75 8.125 13.75C8.29076 13.75 8.44973 13.8158 8.56694 13.9331C8.68415 14.0503 8.75 14.2092 8.75 14.375ZM10 13.125C10.1658 13.125 10.3247 13.0592 10.4419 12.9419C10.5592 12.8247 10.625 12.6658 10.625 12.5C10.625 12.3342 10.5592 12.1753 10.4419 12.0581C10.3247 11.9408 10.1658 11.875 10 11.875C9.83424 11.875 9.67527 11.9408 9.55806 12.0581C9.44085 12.1753 9.375 12.3342 9.375 12.5C9.375 12.6658 9.44085 12.8247 9.55806 12.9419C9.67527 13.0592 9.83424 13.125 10 13.125ZM10.625 14.375C10.625 14.5408 10.5592 14.6997 10.4419 14.8169C10.3247 14.9342 10.1658 15 10 15C9.83424 15 9.67527 14.9342 9.55806 14.8169C9.44085 14.6997 9.375 14.5408 9.375 14.375C9.375 14.2092 9.44085 14.0503 9.55806 13.9331C9.67527 13.8158 9.83424 13.75 10 13.75C10.1658 13.75 10.3247 13.8158 10.4419 13.9331C10.5592 14.0503 10.625 14.2092 10.625 14.375ZM11.875 13.125C12.0408 13.125 12.1997 13.0592 12.3169 12.9419C12.4342 12.8247 12.5 12.6658 12.5 12.5C12.5 12.3342 12.4342 12.1753 12.3169 12.0581C12.1997 11.9408 12.0408 11.875 11.875 11.875C11.7092 11.875 11.5503 11.9408 11.4331 12.0581C11.3158 12.1753 11.25 12.3342 11.25 12.5C11.25 12.6658 11.3158 12.8247 11.4331 12.9419C11.5503 13.0592 11.7092 13.125 11.875 13.125ZM12.5 14.375C12.5 14.5408 12.4342 14.6997 12.3169 14.8169C12.1997 14.9342 12.0408 15 11.875 15C11.7092 15 11.5503 14.9342 11.4331 14.8169C11.3158 14.6997 11.25 14.5408 11.25 14.375C11.25 14.2092 11.3158 14.0503 11.4331 13.9331C11.5503 13.8158 11.7092 13.75 11.875 13.75C12.0408 13.75 12.1997 13.8158 12.3169 13.9331C12.4342 14.0503 12.5 14.2092 12.5 14.375ZM13.75 13.125C13.9158 13.125 14.0747 13.0592 14.1919 12.9419C14.3092 12.8247 14.375 12.6658 14.375 12.5C14.375 12.3342 14.3092 12.1753 14.1919 12.0581C14.0747 11.9408 13.9158 11.875 13.75 11.875C13.5842 11.875 13.4253 11.9408 13.3081 12.0581C13.1908 12.1753 13.125 12.3342 13.125 12.5C13.125 12.6658 13.1908 12.8247 13.3081 12.9419C13.4253 13.0592 13.5842 13.125 13.75 13.125ZM12.5 10.625C12.5 10.7908 12.4342 10.9497 12.3169 11.0669C12.1997 11.1842 12.0408 11.25 11.875 11.25C11.7092 11.25 11.5503 11.1842 11.4331 11.0669C11.3158 10.9497 11.25 10.7908 11.25 10.625C11.25 10.4592 11.3158 10.3003 11.4331 10.1831C11.5503 10.0658 11.7092 10 11.875 10C12.0408 10 12.1997 10.0658 12.3169 10.1831C12.4342 10.3003 12.5 10.4592 12.5 10.625ZM13.75 11.25C13.9158 11.25 14.0747 11.1842 14.1919 11.0669C14.3092 10.9497 14.375 10.7908 14.375 10.625C14.375 10.4592 14.3092 10.3003 14.1919 10.1831C14.0747 10.0658 13.9158 10 13.75 10C13.5842 10 13.4253 10.0658 13.3081 10.1831C13.1908 10.3003 13.125 10.4592 13.125 10.625C13.125 10.7908 13.1908 10.9497 13.3081 11.0669C13.4253 11.1842 13.5842 11.25 13.75 11.25Z"
                              fill="#0F766D" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M5.625 1.875C5.79076 1.875 5.94973 1.94085 6.06694 2.05806C6.18415 2.17527 6.25 2.33424 6.25 2.5V3.75H13.75V2.5C13.75 2.33424 13.8158 2.17527 13.9331 2.05806C14.0503 1.94085 14.2092 1.875 14.375 1.875C14.5408 1.875 14.6997 1.94085 14.8169 2.05806C14.9342 2.17527 15 2.33424 15 2.5V3.75H15.625C16.288 3.75 16.9239 4.01339 17.3928 4.48223C17.8616 4.95107 18.125 5.58696 18.125 6.25V15.625C18.125 16.288 17.8616 16.9239 17.3928 17.3928C16.9239 17.8616 16.288 18.125 15.625 18.125H4.375C3.71196 18.125 3.07607 17.8616 2.60723 17.3928C2.13839 16.9239 1.875 16.288 1.875 15.625V6.25C1.875 5.58696 2.13839 4.95107 2.60723 4.48223C3.07607 4.01339 3.71196 3.75 4.375 3.75H5V2.5C5 2.33424 5.06585 2.17527 5.18306 2.05806C5.30027 1.94085 5.45924 1.875 5.625 1.875ZM16.875 9.375C16.875 9.04348 16.7433 8.72554 16.5089 8.49112C16.2745 8.2567 15.9565 8.125 15.625 8.125H4.375C4.04348 8.125 3.72554 8.2567 3.49112 8.49112C3.2567 8.72554 3.125 9.04348 3.125 9.375V15.625C3.125 15.9565 3.2567 16.2745 3.49112 16.5089C3.72554 16.7433 4.04348 16.875 4.375 16.875H15.625C15.9565 16.875 16.2745 16.7433 16.5089 16.5089C16.7433 16.2745 16.875 15.9565 16.875 15.625V9.375Z"
                              fill="#0F766D" />
                          </svg>
                        </a>
                      </li>
                      <li className="breadcrumb-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </li>

                      <li>
                        <a href="#" className="breadcrumb-text">
                          Booking Management
                        </a>
                      </li>
                      <li className="breadcrumb-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </li>

                      <li>
                        <a href="#" className="breadcrumb-text">
                          Booking
                        </a>
                      </li>
                      <li className="breadcrumb-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="#D0D5DD" stroke-width="1.33333" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </li>

                      <li className="breadcrumb-active">
                        Details
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <Link href={"/booking-list/reschedule/" + bookingDetails?.bookings?.id} className="save-draft-btn active">Reschedule</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="order-details">
            <div className="order-details-inner">
              <div className="order-details-inner-head">
                <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row">
                  <h1 className="heading">
                    Booking Information
                  </h1>
                  <div className="d-flex gap-2 align-items-center">
                    <h1 className="heading">
                      Booking Information:
                    </h1>
                    <p className="heading color-text">
                      {bookingDetails?.bookings?.total_price} Tk
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-details-inner-body">
                <div className="row g-4 g-xl-5">
                  <div className="col-xl-4">
                    <div className="d-flex flex-column gap-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Date
                        </p>
                        <p className="bold-text">
                          {bookingDetails?.bookings?.booking_date}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Booking ID
                        </p>
                        <p className="bold-text">
                          # {bookingDetails?.bookings?.booking_id}
                        </p>
                      </div>

                      {/* <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Tracking No
                        </p>
                        <p className="bold-text">
                          TA264W
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="d-flex flex-column gap-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Customer
                        </p>
                        <p className="bold-text">
                          {bookingDetails?.bookings?.customer?.full_name}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Contact
                        </p>
                        <p className="bold-text">
                          {bookingDetails?.bookings?.customer?.phone_number}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Email
                        </p>
                        <p className="bold-text">
                          {bookingDetails?.bookings?.customer?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="d-flex justify-content-end align-items-center h-100">
                      <div className="d-flex align-items-center gap-2">
                        <p className="light-text">Status</p>
                        <p className="status pending">{bookingDetails?.bookings?.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <div className="order-details">
            <div className="order-details-inner">
              <div className="order-details-inner-head">
                <h1 className="heading">
                  Vehicle Details
                </h1>
              </div>
              <div className="order-details-inner-body">
                <div className="row g-4 g-xl-5">
                  <div className="col-xl-4">
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Type
                          </p>
                          <p className="bold-text">
                            {bookingDetails?.bookings?.vehicle?.vehicle_type}
                          </p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Select Car Brand
                          </p>
                          <p className="bold-text">
                            {bookingDetails?.bookings?.vehicle?.brand}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Model
                          </p>
                          <p className="bold-text">
                            {bookingDetails?.bookings?.vehicle?.model}
                          </p>
                        </div>
                      </div>

                      {/* <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Engine (Optional)
                          </p>
                          <p className="bold-text">
                            Evening
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <div className="order-details">
            <div className="order-details-inner">
              <div className="order-details-inner-head">
                <h1 className="heading">
                  Service Details
                </h1>
              </div>
              <div className="order-details-inner-body">
                <div className="row g-3 g-xl-4">
                  <div className="col-lg-4">
                    <div className="row g-4">

                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Booking Date
                          </p>
                          <p className="bold-text">
                            {bookingDetails?.bookings?.booking_date}
                          </p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="d-flex flex-column">
                          <p className="light-text">
                            Time
                          </p>
                          <div className="d-flex align-items-center gap-2">
                            <figure className="icon">
                              <img width={15} height={15} src={bookingDetails?.bookings?.booking_time_slot?.icon} />
                            </figure>
                            <p className="bold-text mt-1">
                              {bookingDetails?.bookings?.booking_time_slot?.time_slot}
                            </p>
                            <p className="extra-light-text mt-1">
                              {convertToAMPM(bookingDetails?.bookings?.booking_time_slot?.opening_time)} to  {convertToAMPM(bookingDetails?.bookings?.booking_time_slot?.closing_time)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">

                    <div className="d-flex flex-column gap-1">
                      <p className="light-text">
                        Description
                      </p>
                      <p className="bold-text">
                        {bookingDetails?.bookings?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <div className="order-details">
            <div className="order-details-inner">
              <div className="order-details-inner-head">
                <h1 className="heading">
                  Uploaded Photo or Video
                </h1>
              </div>
              <div className="order-details-inner-body">
                <div className="row g-3 g-xl-4">
                  <div className="col-sm-6 col-lg-4 col-xl-3 d-flex gap-3">
                    {bookingDetails?.bookings?.images?.map((item, index) => (
                      <figure className="position-relative" key={index + 1}>
                        <img className="w-100 rounded-4" src={item?.image} alt="Image" />
                      </figure>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
      <div className='mb-5'>
      </div>
    </main>
  )
}

export default BookingDeatils