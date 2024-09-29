'use client'
import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'

function BookingDeatils({ bookingDetails }) {
  console.log(bookingDetails,'bkd');
  
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
                  <a href="" className="save-draft-btn active">Reschedule</a>
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
                          6/6/24
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Booking ID
                        </p>
                        <p className="bold-text">
                          #5498504
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Tracking No
                        </p>
                        <p className="bold-text">
                          TA264W
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="d-flex flex-column gap-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Customer
                        </p>
                        <p className="bold-text">
                          Md Mamunur Rashid
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Contact
                        </p>
                        <p className="bold-text">
                          +8801970000000
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Email
                        </p>
                        <p className="bold-text">
                          email@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="d-flex justify-content-end align-items-center h-100">
                      <div className="d-flex align-items-center gap-2">
                        <p className="light-text">Status</p>
                        <p className="status pending">Pending</p>
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
                            Sedan Car
                          </p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Select Car Brand
                          </p>
                          <p className="bold-text">
                            Toyota
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
                            Evening
                          </p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Engine (Optional)
                          </p>
                          <p className="bold-text">
                            Evening
                          </p>
                        </div>
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
                            6 Jun 2024
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
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"
                                fill="none">
                                <path
                                  d="M15.4286 9.92118C15.4286 10.0917 15.4963 10.2552 15.6169 10.3757C15.7374 10.4963 15.9009 10.564 16.0714 10.564L17.3571 10.564C17.5276 10.564 17.6912 10.4963 17.8117 10.3757C17.9323 10.2552 18 10.0917 18 9.92118C18 9.75068 17.9323 9.58717 17.8117 9.46661C17.6912 9.34605 17.5276 9.27832 17.3571 9.27832L16.0714 9.27832C15.9009 9.27832 15.7374 9.34605 15.6169 9.46661C15.4963 9.58717 15.4286 9.75068 15.4286 9.92118Z"
                                  fill="#525468" />
                                <path
                                  d="M2.57227 9.92118C2.57227 9.75068 2.50454 9.58717 2.38398 9.46661C2.26342 9.34605 2.0999 9.27832 1.92941 9.27832L0.643694 9.27832C0.473198 9.27832 0.309685 9.34605 0.189125 9.46661C0.0685663 9.58717 0.000837305 9.75068 0.000837298 9.92118C0.00083729 10.0917 0.0685663 10.2552 0.189125 10.3757C0.309684 10.4963 0.473198 10.564 0.643694 10.564L1.92941 10.564C2.0999 10.564 2.26342 10.4963 2.38398 10.3757C2.50454 10.2552 2.57227 10.0917 2.57227 9.92118Z"
                                  fill="#525468" />
                                <path
                                  d="M9.64258 2.84947L9.64258 1.56376C9.64258 1.39326 9.57485 1.22975 9.45429 1.10919C9.33373 0.988628 9.17022 0.920898 8.99972 0.920898C8.82922 0.920898 8.66571 0.988628 8.54515 1.10919C8.42459 1.22975 8.35686 1.39326 8.35686 1.56376L8.35686 2.84947C8.35686 3.01997 8.42459 3.18348 8.54515 3.30404C8.66571 3.4246 8.82922 3.49233 8.99972 3.49233C9.17022 3.49233 9.33373 3.4246 9.45429 3.30404C9.57485 3.18348 9.64258 3.01997 9.64258 2.84947Z"
                                  fill="#525468" />
                                <path
                                  d="M4.45478 4.4662L3.54578 3.55656C3.42515 3.43593 3.26155 3.36816 3.09096 3.36816C2.92037 3.36816 2.75676 3.43593 2.63613 3.55656C2.51551 3.67718 2.44774 3.84079 2.44774 4.01138C2.44774 4.18197 2.51551 4.34557 2.63613 4.4662L3.54513 5.3752C3.60444 5.4366 3.67537 5.48557 3.7538 5.51926C3.83223 5.55296 3.91659 5.57069 4.00195 5.57143C4.08731 5.57217 4.17196 5.55591 4.25096 5.52359C4.32997 5.49126 4.40174 5.44353 4.4621 5.38317C4.52246 5.32281 4.5702 5.25103 4.60252 5.17203C4.63484 5.09302 4.65111 5.00837 4.65037 4.92301C4.64962 4.83766 4.63189 4.7533 4.5982 4.67487C4.56451 4.59644 4.51553 4.5255 4.45413 4.4662L4.45478 4.4662Z"
                                  fill="#525468" />
                                <path
                                  d="M13.5457 4.4662C13.4286 4.58744 13.3638 4.74983 13.3653 4.91839C13.3667 5.08694 13.4343 5.24818 13.5535 5.36737C13.6727 5.48656 13.834 5.55417 14.0025 5.55563C14.1711 5.5571 14.3335 5.4923 14.4547 5.3752L15.3643 4.4662C15.485 4.34557 15.5527 4.18197 15.5527 4.01138C15.5527 3.84079 15.485 3.67718 15.3643 3.55656C15.2437 3.43593 15.0801 3.36816 14.9095 3.36816C14.7389 3.36816 14.5753 3.43593 14.4547 3.55656L13.5457 4.4662Z"
                                  fill="#525468" />
                                <path
                                  d="M14.104 10.5645C14.1554 10.1375 14.1554 9.70585 14.104 9.27882C13.9506 8.03314 13.3469 6.88656 12.4068 6.05509C11.4666 5.22362 10.2548 4.76465 8.99972 4.76465C7.74463 4.76465 6.53286 5.22362 5.59269 6.05509C4.65252 6.88656 4.04886 8.03314 3.89543 9.27882C3.844 9.70585 3.844 10.1375 3.89543 10.5645C4.04886 11.8102 4.65252 12.9568 5.59269 13.7883C6.53286 14.6197 7.74463 15.0787 8.99972 15.0787C10.2548 15.0787 11.4666 14.6197 12.4068 13.7883C13.3469 12.9568 13.9506 11.8102 14.104 10.5645ZM5.20043 9.27882C5.35153 8.38043 5.81609 7.56465 6.51164 6.97631C7.20718 6.38797 8.08872 6.06515 8.99972 6.06515C9.91072 6.06515 10.7923 6.38797 11.4878 6.97631C12.1834 7.56465 12.6479 8.38043 12.799 9.27882C12.838 9.49088 12.8573 9.70607 12.8569 9.92168L5.14258 9.92168C5.14211 9.70607 5.16148 9.49088 5.20043 9.27882Z"
                                  fill="#525468" />
                              </svg>
                            </figure>
                            <p className="bold-text mt-1">
                              Evening
                            </p>
                            <p className="extra-light-text mt-1">
                              8am to 12pm
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
                        My Toyota Sedan Car making some odd noise from few days. My Toyota Sedan Car making some odd
                        noise from few days.
                      </p>
                    </div>

                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex flex-column gap-1">
                      <p className="light-text">
                        Description
                      </p>
                      <p className="bold-text">
                        My Toyota Sedan Car making some odd noise from few days. My Toyota Sedan Car making some odd
                        noise from few days.
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
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <figure className="position-relative">
                      <img className="w-100 rounded-4" src="/assets/images/uploaded-photo.png" alt="Video" />
                      <img className="position-absolute top-50 start-50 translate-middle pointer"
                        src="/assets/images/play.svg" alt="play btn" />
                    </figure>
                  </div>

                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <figure>
                      <img className="w-100 rounded-4" src="/assets/images/uploaded-photo.png" alt="Video" />
                    </figure>
                  </div>

                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <figure>
                      <img className="w-100 rounded-4" src="/assets/images/uploaded-photo.png" alt="Video" />
                    </figure>
                  </div>

                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <figure>
                      <img className="w-100 rounded-4" src="/assets/images/uploaded-photo.png" alt="Video" />
                    </figure>
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