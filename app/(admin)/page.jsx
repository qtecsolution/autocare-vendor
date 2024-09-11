import GlobalSearch from '@/components/admin/GlobalSearch'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div id="content">

      <div class="main-content">
        <div class="inner-content">
          <GlobalSearch />
        </div>


        <div class="page-header">
          <div class="d-flex flex-column gap-1">
            <h1 class="page-title">
              Welcome back, Olivia
            </h1>
            <p class="page-text">
              Track, manage and forecast your customers and orders.
            </p>
          </div>
        </div>

        <div class="sales-details">
          <div class="sales-details-cart">
            <div class="top-content">
              <h4 class="title">
                Total Revenue
              </h4>
              <figure class="three-dots-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path
                    d="M10.6663 10.8333C11.1266 10.8333 11.4997 10.4602 11.4997 9.99992C11.4997 9.53968 11.1266 9.16659 10.6663 9.16659C10.2061 9.16659 9.83301 9.53968 9.83301 9.99992C9.83301 10.4602 10.2061 10.8333 10.6663 10.8333Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.6663 4.99992C11.1266 4.99992 11.4997 4.62682 11.4997 4.16659C11.4997 3.70635 11.1266 3.33325 10.6663 3.33325C10.2061 3.33325 9.83301 3.70635 9.83301 4.16659C9.83301 4.62682 10.2061 4.99992 10.6663 4.99992Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.6663 16.6666C11.1266 16.6666 11.4997 16.2935 11.4997 15.8333C11.4997 15.373 11.1266 14.9999 10.6663 14.9999C10.2061 14.9999 9.83301 15.373 9.83301 15.8333C9.83301 16.2935 10.2061 16.6666 10.6663 16.6666Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </figure>
            </div>

            <div class="bottom-content">
              <div class="bottom-content-text">
                <h2 class="number">2,420</h2>
                <div class="increase-inner">
                  <figure class="increase-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9.99984 15.8334V4.16675M9.99984 4.16675L4.1665 10.0001M9.99984 4.16675L15.8332 10.0001"
                        stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </figure>
                  <p class="increase-text">
                    <span class="increase">40%</span> vs last month
                  </p>
                </div>
              </div>

              <figure class="increase-graph">
                <svg xmlns="http://www.w3.org/2000/svg" width="99" height="50" viewBox="0 0 99 50" fill="none">
                  <path
                    d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                    fill="#ECFDF3" />
                  <path
                    d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                    fill="url(#paint0_linear_1_13305)" />
                  <path
                    d="M1.6665 49C15.3056 44.4536 19.7568 26.9737 33.6665 25C46.4906 23.1804 52.9367 39.9551 65.6665 37C81.1037 33.4164 82.0696 2.29974 97.6665 1"
                    stroke="#12B76A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_1_13305" x1="49.6665" y1="1" x2="49.6665" y2="49"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0.641167" stop-color="white" stop-opacity="0" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </figure>
            </div>

          </div>

          <div class="sales-details-cart">
            <div class="top-content">
              <h4 class="title">
                Total Sales
              </h4>
              <figure class="three-dots-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path
                    d="M10.6663 10.8333C11.1266 10.8333 11.4997 10.4602 11.4997 9.99992C11.4997 9.53968 11.1266 9.16659 10.6663 9.16659C10.2061 9.16659 9.83301 9.53968 9.83301 9.99992C9.83301 10.4602 10.2061 10.8333 10.6663 10.8333Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.6663 4.99992C11.1266 4.99992 11.4997 4.62682 11.4997 4.16659C11.4997 3.70635 11.1266 3.33325 10.6663 3.33325C10.2061 3.33325 9.83301 3.70635 9.83301 4.16659C9.83301 4.62682 10.2061 4.99992 10.6663 4.99992Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.6663 16.6666C11.1266 16.6666 11.4997 16.2935 11.4997 15.8333C11.4997 15.373 11.1266 14.9999 10.6663 14.9999C10.2061 14.9999 9.83301 15.373 9.83301 15.8333C9.83301 16.2935 10.2061 16.6666 10.6663 16.6666Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </figure>
            </div>

            <div class="bottom-content">
              <div class="bottom-content-text">
                <h2 class="number">316</h2>
                <div class="increase-inner">
                  <figure class="increase-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9.99984 15.8334V4.16675M9.99984 4.16675L4.1665 10.0001M9.99984 4.16675L15.8332 10.0001"
                        stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </figure>
                  <p class="increase-text">
                    <span class="increase">20%</span> vs last month
                  </p>
                </div>
              </div>

              <figure class="increase-graph">
                <svg xmlns="http://www.w3.org/2000/svg" width="99" height="50" viewBox="0 0 99 50" fill="none">
                  <path
                    d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                    fill="#ECFDF3" />
                  <path
                    d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                    fill="url(#paint0_linear_1_13305)" />
                  <path
                    d="M1.6665 49C15.3056 44.4536 19.7568 26.9737 33.6665 25C46.4906 23.1804 52.9367 39.9551 65.6665 37C81.1037 33.4164 82.0696 2.29974 97.6665 1"
                    stroke="#12B76A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_1_13305" x1="49.6665" y1="1" x2="49.6665" y2="49"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0.641167" stop-color="white" stop-opacity="0" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </figure>
            </div>

          </div>

          <div class="sales-details-cart">
            <div class="top-content">
              <h4 class="title">
                Total Service Provided
              </h4>
              <figure class="three-dots-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path
                    d="M10.6663 10.8333C11.1266 10.8333 11.4997 10.4602 11.4997 9.99992C11.4997 9.53968 11.1266 9.16659 10.6663 9.16659C10.2061 9.16659 9.83301 9.53968 9.83301 9.99992C9.83301 10.4602 10.2061 10.8333 10.6663 10.8333Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.6663 4.99992C11.1266 4.99992 11.4997 4.62682 11.4997 4.16659C11.4997 3.70635 11.1266 3.33325 10.6663 3.33325C10.2061 3.33325 9.83301 3.70635 9.83301 4.16659C9.83301 4.62682 10.2061 4.99992 10.6663 4.99992Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M10.6663 16.6666C11.1266 16.6666 11.4997 16.2935 11.4997 15.8333C11.4997 15.373 11.1266 14.9999 10.6663 14.9999C10.2061 14.9999 9.83301 15.373 9.83301 15.8333C9.83301 16.2935 10.2061 16.6666 10.6663 16.6666Z"
                    stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </figure>
            </div>

            <div class="bottom-content">
              <div class="bottom-content-text">
                <h2 class="number">1,210</h2>
                <div class="increase-inner">
                  <figure class="increase-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M10.3333 4.16675V15.8334M10.3333 15.8334L16.1667 10.0001M10.3333 15.8334L4.5 10.0001"
                        stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </figure>
                  <p class="decrease-text">
                    <span class="decrease">10%</span> vs last month
                  </p>
                </div>
              </div>

              <figure class="increase-graph">
                <svg xmlns="http://www.w3.org/2000/svg" width="98" height="50" viewBox="0 0 98 50" fill="none">
                  <path
                    d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
                    fill="#FEF3F2" />
                  <path
                    d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
                    fill="url(#paint0_linear_1_13337)" />
                  <path
                    d="M97 49C83.3609 44.4536 78.9097 26.9737 65 25C52.1759 23.1804 45.7298 39.9551 33 37C17.5628 33.4164 16.5969 2.29974 1 1"
                    stroke="#F04438" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_1_13337" x1="49" y1="1" x2="49" y2="49"
                      gradientUnits="userSpaceOnUse">
                      <stop offset="0.641167" stop-color="white" stop-opacity="0" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </figure>
            </div>

          </div>
        </div>

        <div class="dashboard-inner">
          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">On Delivery</h3>
            <h1 class="dashboard-cart-number">20</h1>
            <div class="dashboard-cart-increase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 15.8333V4.16663M9.99984 4.16663L4.1665 9.99996M9.99984 4.16663L15.8332 9.99996"
                  stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>40%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Pending</h3>
            <h1 class="dashboard-cart-number">20</h1>
            <div class="dashboard-cart-decrease">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
                  stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>10%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Shipped</h3>
            <h1 class="dashboard-cart-number">10</h1>
            <div class="dashboard-cart-increase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 15.8333V4.16663M9.99984 4.16663L4.1665 9.99996M9.99984 4.16663L15.8332 9.99996"
                  stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>90%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Returned</h3>
            <h1 class="dashboard-cart-number">8</h1>
            <div class="dashboard-cart-decrease">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
                  stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>10%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Failed Delivery</h3>
            <h1 class="dashboard-cart-number">2</h1>
            <div class="dashboard-cart-decrease">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
                  stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>10%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Total Booking</h3>
            <h1 class="dashboard-cart-number">20</h1>
            <div class="dashboard-cart-increase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 15.8333V4.16663M9.99984 4.16663L4.1665 9.99996M9.99984 4.16663L15.8332 9.99996"
                  stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>40%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Scheduled Booking</h3>
            <h1 class="dashboard-cart-number">20</h1>
            <div class="dashboard-cart-decrease">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
                  stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>10%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Ongoing Booking</h3>
            <h1 class="dashboard-cart-number">10</h1>
            <div class="dashboard-cart-increase">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 15.8333V4.16663M9.99984 4.16663L4.1665 9.99996M9.99984 4.16663L15.8332 9.99996"
                  stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>90%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Pending Payment</h3>
            <h1 class="dashboard-cart-number">8</h1>
            <div class="dashboard-cart-decrease">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
                  stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>10%</p>
            </div>
          </div>

          <div class="dashboard-cart">
            <h3 class="dashboard-cart-title">Cancelled Booking</h3>
            <h1 class="dashboard-cart-number">2</h1>
            <div class="dashboard-cart-decrease">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
                  stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p>10%</p>
            </div>
          </div>
        </div>

        <div class="notifications-badges">
          <div class="row g-4">
            <div class="col-lg-8">
              <div class="d-flex flex-column gap-4">
                <h1 class="title">
                  Recent Notifications
                </h1>
                <div class="recent-notification-inner">
                  <div class="recent-notification-inner-cart">
                    <div class="d-flex gap-3">
                      <figure class="success-img">
                        <img src="./assets/images/success-icon.png" alt="" />
                      </figure>
                      <div class="cart-content">
                        <div class="d-flex flex-column gap-2">
                          <div class="d-flex flex-column gap-1">
                            <h3 class="title">You just got a New Order <span class="success">#123456</span></h3>
                            <p class="details">A new order has been placed.</p>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <a href="" class="dsismiss-btn">
                              Dismiss
                            </a>
                            <a href="#" class="viewChanges-btn">
                              View changes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="notification-inner-cart-right">
                      <button class="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                      <div class="d-flex align-items-center gap-2">
                        <figure class="date-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                            fill="none">
                            <path
                              d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                              stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </figure>
                        <p class="notification-time">Just Now</p>
                      </div>
                    </div>
                  </div>

                  <div class="recent-notification-inner-cart">
                    <div class="d-flex gap-3">
                      <figure class="success-img">
                        <img src="./assets/images/alart-icon.png" alt="" />
                      </figure>
                      <div class="cart-content">
                        <div class="d-flex flex-column gap-2">
                          <div class="d-flex flex-column gap-1">
                            <h3 class="title">We’ve just released a new feature</h3>
                            <p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                              pariatur,
                              ipsum
                              dolor.</p>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <a href="" class="dsismiss-btn">
                              Dismiss
                            </a>
                            <a href="#" class="viewChanges-btn">
                              View changes
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="notification-inner-cart-right">
                      <button class="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                      <div class="d-flex align-items-center gap-2">
                        <figure class="date-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                            fill="none">
                            <path
                              d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                              stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </figure>
                        <p class="notification-time">24 July 2024, 10:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div class="recent-notification-inner-cart">
                    <div class="d-flex gap-3">
                      <figure class="success-img">
                        <img src="./assets/images/canceled-icon.png" alt="" />
                      </figure>
                      <div class="cart-content">
                        <div class="d-flex flex-column gap-2">
                          <div class="d-flex flex-column gap-1">
                            <h3 class="title">Order <span class="canceled">#123456</span> has been Canceled</h3>
                            <p class="details">A new order has been placed.</p>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <a href="" class="dsismiss-btn">
                              Dismiss
                            </a>
                            <a href="#" class="viewChanges-btn">
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="notification-inner-cart-right">
                      <button class="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </button>
                      <div class="d-flex align-items-center gap-2">
                        <figure class="date-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                            fill="none">
                            <path
                              d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                              stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </figure>
                        <p class="notification-time">24 July 2024, 10:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="d-flex flex-column gap-4">
                <h1 class="title">
                  Earned Badges
                </h1>
                <div class="badges-inner">
                  <h2 class="sub-title">
                    You have earned 6 badges out of 12
                  </h2>
                  <div class="d-flex flex-wrap gap-3">
                    <div class="badge flagship-store">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M12.9982 6.33301H3V6.74967C3 6.97069 3.0878 7.18265 3.24408 7.33893C3.40036 7.49521 3.61232 7.58301 3.83333 7.58301H5.08333C5.30435 7.58301 5.51631 7.49521 5.67259 7.33893C5.82887 7.18265 5.91667 6.97069 5.91667 6.74967C5.91667 6.97069 6.00446 7.18265 6.16074 7.33893C6.31702 7.49521 6.52899 7.58301 6.75 7.58301H9.25C9.47101 7.58301 9.68297 7.49521 9.83926 7.33893C9.99554 7.18265 10.0833 6.97069 10.0833 6.74967C10.0833 6.97069 10.1711 7.18265 10.3274 7.33893C10.4837 7.49521 10.6957 7.58301 10.9167 7.58301H12.1667C12.3877 7.58301 12.5996 7.49521 12.7559 7.33893C12.9122 7.18265 13 6.97069 13 6.74967V6.33301H12.9982Z"
                            fill="#AF52DE" />
                          <path
                            d="M12.8978 5.91667L12.1509 3.30208C12.126 3.21504 12.0734 3.13848 12.0011 3.08398C11.9288 3.02947 11.8408 2.99999 11.7502 3H9.8418L10.4251 5.91667H12.8978Z"
                            fill="#AF52DE" />
                          <path
                            d="M6.15858 3H4.25014C4.15961 2.99999 4.07155 3.02947 3.99926 3.08398C3.92698 3.13848 3.87441 3.21504 3.84952 3.30208L3.10254 5.91667H5.57525L6.15858 3Z"
                            fill="#AF52DE" />
                          <path d="M8.99168 3H7.00814L6.4248 5.91667H9.57501L8.99168 3Z" fill="#AF52DE" />
                          <path
                            d="M10.917 7.99973C10.6093 7.99998 10.3125 7.88632 10.0837 7.68066C9.85484 7.88632 9.55798 7.99998 9.25033 7.99973H6.75033C6.44267 7.99998 6.14581 7.88632 5.91699 7.68066C5.68817 7.88632 5.39132 7.99998 5.08366 7.99973H3.83366C3.69162 7.99943 3.55069 7.97476 3.41699 7.92681V12.5831C3.41699 12.6936 3.46089 12.7995 3.53903 12.8777C3.61717 12.9558 3.72315 12.9997 3.83366 12.9997H4.66699V9.24973C4.66699 9.13922 4.71089 9.03324 4.78903 8.9551C4.86717 8.87696 4.97315 8.83306 5.08366 8.83306H7.16699C7.2775 8.83306 7.38348 8.87696 7.46162 8.9551C7.53976 9.03324 7.58366 9.13922 7.58366 9.24973V12.9997H12.167C12.2775 12.9997 12.3835 12.9558 12.4616 12.8777C12.5398 12.7995 12.5837 12.6936 12.5837 12.5831V7.92681C12.45 7.97476 12.309 7.99943 12.167 7.99973H10.917ZM11.3337 10.4997C11.3337 10.6102 11.2898 10.7162 11.2116 10.7944C11.1335 10.8725 11.0275 10.9164 10.917 10.9164H8.83366C8.72315 10.9164 8.61717 10.8725 8.53903 10.7944C8.46089 10.7162 8.41699 10.6102 8.41699 10.4997V9.24973C8.41699 9.13922 8.46089 9.03324 8.53903 8.9551C8.61717 8.87696 8.72315 8.83306 8.83366 8.83306H10.917C11.0275 8.83306 11.1335 8.87696 11.2116 8.9551C11.2898 9.03324 11.3337 9.13922 11.3337 9.24973V10.4997Z"
                            fill="#AF52DE" />
                        </svg>
                      </figure>

                      <p class="title">
                        Flagship Store
                      </p>
                    </div>

                    <div class="badge certified-store">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.61301 2.75071L10.3588 3.30895C10.5628 3.46162 10.7775 3.53976 11.0318 3.55392L11.962 3.60565C12.5189 3.63664 12.9713 4.0162 13.0985 4.55931L13.311 5.46633C13.3691 5.71439 13.4833 5.91226 13.6691 6.08659L14.3483 6.72413C14.7551 7.10585 14.8576 7.68737 14.606 8.18521L14.1857 9.01661C14.0708 9.24399 14.0311 9.469 14.0613 9.72195L14.1719 10.647C14.2381 11.2008 13.9429 11.7122 13.4301 11.9318L12.5737 12.2985C12.3395 12.3989 12.1645 12.5457 12.0251 12.7589L11.5152 13.5386C11.2099 14.0054 10.655 14.2074 10.121 14.046L9.2293 13.7765C8.98541 13.7028 8.75696 13.7028 8.51307 13.7765L7.62132 14.046C7.08736 14.2074 6.5325 14.0054 6.22719 13.5386L5.7173 12.7589C5.57785 12.5457 5.40283 12.3989 5.16861 12.2986L4.31231 11.9318C3.79955 11.7122 3.5043 11.2008 3.5705 10.6469L3.68107 9.72193C3.71129 9.46894 3.67164 9.24396 3.55668 9.01659L3.13642 8.18518C2.88477 7.68737 2.98733 7.10585 3.39404 6.72411L4.07331 6.08656C4.25907 5.9122 4.37331 5.71436 4.43141 5.4663L4.64389 4.55928C4.77112 4.01617 5.22344 3.63661 5.7804 3.60562L6.71053 3.55389C6.96493 3.53973 7.17963 3.46159 7.38358 3.30892L8.12936 2.75068C8.57595 2.41643 9.16645 2.41643 9.61301 2.75071ZM8.39548 8.61994L7.58613 7.8106C7.37636 7.60085 7.03611 7.60085 6.82633 7.8106C6.61658 8.02037 6.61658 8.36062 6.82633 8.57037L8.01674 9.76075C8.22649 9.9705 8.56677 9.9705 8.77652 9.76075C9.49405 9.04322 10.2034 8.31764 10.9176 7.59681C11.1258 7.38664 11.1252 7.04747 10.9153 6.83872C10.7053 6.62991 10.3652 6.6305 10.1567 6.84108L8.39548 8.61994ZM8.8712 4.26787C7.75768 4.26787 6.74953 4.71923 6.01974 5.44899C5.28999 6.17874 4.83863 7.18689 4.83863 8.30042C4.83863 9.41394 5.29002 10.4221 6.01974 11.1518C6.7495 11.8816 7.75765 12.333 8.8712 12.333C9.98472 12.333 10.9929 11.8816 11.7226 11.1518C12.4524 10.4221 12.9037 9.41394 12.9037 8.30042C12.9037 7.18687 12.4524 6.17874 11.7226 5.44899C10.9929 4.71926 9.98475 4.26787 8.8712 4.26787ZM11.4011 5.77056C10.7536 5.12312 9.8592 4.72267 8.8712 4.72267C7.8832 4.72267 6.98875 5.12312 6.34132 5.77056C5.69388 6.418 5.29343 7.31245 5.29343 8.30045C5.29343 9.28844 5.69388 10.1829 6.34132 10.8303C6.98875 11.4778 7.8832 11.8782 8.8712 11.8782C9.8592 11.8782 10.7536 11.4778 11.4011 10.8303C12.0485 10.1829 12.449 9.28844 12.449 8.30045C12.449 7.31245 12.0485 6.418 11.4011 5.77056ZM10.3865 14.5522L11.2703 16.4507C11.2841 16.4802 11.3112 16.4984 11.3438 16.4999C11.3763 16.5014 11.405 16.4857 11.4214 16.4576L12.0806 15.3231L13.3731 15.5489C13.4052 15.5545 13.4356 15.5427 13.4554 15.5168C13.4753 15.491 13.4788 15.4585 13.4651 15.429L12.3661 13.0684L11.8958 13.7875C11.5564 14.3065 10.9816 14.5874 10.3865 14.5522ZM7.39006 14.5499C6.78284 14.598 6.19251 14.3164 5.84661 13.7875L5.39561 13.0979L4.31035 15.429C4.29659 15.4585 4.30014 15.491 4.31998 15.5168C4.33979 15.5427 4.37024 15.5545 4.40233 15.5489L5.69484 15.3231L6.35408 16.4576C6.37045 16.4857 6.39913 16.5014 6.43168 16.4999C6.46423 16.4984 6.49137 16.4802 6.50513 16.4507L7.39006 14.5499Z"
                            fill="#3786FC" />
                        </svg>
                      </figure>

                      <p class="title">
                        Certified Store
                      </p>
                    </div>

                    <div class="badge top-seller">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M7.93639 12.8461C6.81256 12.8461 5.75647 12.5512 4.84082 12.0352V14.5958C4.84082 14.7328 4.91029 14.8605 5.02536 14.9349C5.1404 15.0093 5.28532 15.0202 5.41028 14.964L7.93639 13.8273L10.4625 14.964C10.5154 14.9878 10.5719 14.9995 10.6281 14.9995C10.7048 14.9995 10.7811 14.9777 10.8474 14.9348C10.9625 14.8605 11.032 14.7328 11.032 14.5958V12.0352C10.1163 12.5511 9.06022 12.8461 7.93639 12.8461Z"
                            fill="#26BF6A" />
                          <path
                            d="M7.94103 1C4.89827 1 2.42285 3.47545 2.42285 6.51818C2.42285 8.43729 3.4078 10.1304 4.89855 11.1194C4.91331 11.1292 4.92805 11.139 4.94289 11.1486C4.96091 11.1603 4.97895 11.1719 4.9971 11.1834C5.01214 11.1929 5.02729 11.2023 5.04243 11.2117C5.06042 11.2229 5.07838 11.234 5.09651 11.245C5.12086 11.2597 5.14542 11.2742 5.17002 11.2885C5.19252 11.3017 5.21518 11.3145 5.23787 11.3274C5.25433 11.3366 5.27079 11.3459 5.28736 11.355C5.30548 11.365 5.32363 11.3749 5.34187 11.3847C5.35882 11.3938 5.37591 11.4027 5.39297 11.4117C5.41068 11.4209 5.42834 11.4302 5.44617 11.4393C5.47539 11.4542 5.50475 11.4688 5.53431 11.4832C5.5529 11.4922 5.57165 11.501 5.59035 11.5099C5.60957 11.519 5.62879 11.528 5.64814 11.5369C5.66575 11.545 5.68341 11.5529 5.7011 11.5608C5.72054 11.5695 5.74006 11.578 5.75963 11.5864C5.7765 11.5937 5.79334 11.6011 5.81029 11.6082C5.84372 11.6223 5.87732 11.6361 5.91106 11.6495C5.92574 11.6553 5.9405 11.6609 5.95524 11.6665C5.97793 11.6753 6.00065 11.684 6.0235 11.6925C6.04018 11.6987 6.05694 11.7048 6.07369 11.7109C6.09595 11.7189 6.11831 11.7267 6.1407 11.7345C6.15639 11.7399 6.17203 11.7454 6.18781 11.7507C6.22351 11.7627 6.2593 11.7744 6.29533 11.7857C6.30744 11.7895 6.31963 11.7931 6.33177 11.7968C6.35851 11.8049 6.38527 11.813 6.4122 11.8208C6.4277 11.8252 6.44326 11.8296 6.45881 11.8339C6.48391 11.8409 6.50906 11.8477 6.5343 11.8544C6.54881 11.8582 6.56325 11.8621 6.57779 11.8658C6.61565 11.8754 6.65366 11.8848 6.69185 11.8937C6.70087 11.8958 6.70997 11.8977 6.71899 11.8997C6.75008 11.9068 6.78122 11.9136 6.81252 11.9201C6.8269 11.9231 6.84131 11.926 6.85569 11.9289C6.88335 11.9344 6.9111 11.9397 6.93891 11.9448C6.95233 11.9473 6.96575 11.9499 6.9792 11.9522C7.01906 11.9593 7.05903 11.966 7.09919 11.9722C7.10491 11.9731 7.11065 11.9738 7.11636 11.9747C7.15185 11.98 7.18741 11.985 7.22312 11.9897C7.23651 11.9914 7.24996 11.993 7.26339 11.9947C7.2931 11.9984 7.32288 12.0017 7.35273 12.0049C7.36561 12.0063 7.37845 12.0077 7.39136 12.009C7.43278 12.0131 7.47433 12.0169 7.516 12.0201C7.51865 12.0204 7.52135 12.0205 7.524 12.0207C7.5634 12.0236 7.60299 12.0261 7.64263 12.0282C7.6555 12.0289 7.66838 12.0295 7.68128 12.0301C7.71237 12.0315 7.74353 12.0327 7.77481 12.0337C7.78752 12.0341 7.80023 12.0345 7.81295 12.0348C7.85557 12.0357 7.89822 12.0364 7.94105 12.0364C7.98389 12.0364 8.02657 12.0358 8.06916 12.0348C8.0819 12.0345 8.09459 12.034 8.1073 12.0337C8.13852 12.0327 8.16969 12.0315 8.20083 12.0301C8.21373 12.0295 8.22661 12.0289 8.23948 12.0282C8.27912 12.0261 8.31868 12.0237 8.3581 12.0207C8.36076 12.0205 8.36346 12.0204 8.36611 12.0201C8.40781 12.0169 8.44931 12.0131 8.49075 12.009C8.50365 12.0078 8.5165 12.0063 8.52938 12.0049C8.55923 12.0018 8.58901 11.9984 8.61872 11.9947C8.63215 11.993 8.6456 11.9914 8.65899 11.9897C8.6947 11.985 8.73026 11.98 8.76575 11.9747C8.77146 11.9738 8.7772 11.9731 8.78292 11.9722C8.82308 11.966 8.86305 11.9593 8.90291 11.9522C8.91636 11.9499 8.92978 11.9473 8.9432 11.9448C8.97101 11.9397 8.99876 11.9344 9.02642 11.9289C9.04083 11.926 9.05524 11.9231 9.06959 11.9201C9.10086 11.9136 9.13203 11.9068 9.16311 11.8997C9.17216 11.8977 9.18127 11.8957 9.19029 11.8937C9.22845 11.8848 9.26645 11.8754 9.30435 11.8658C9.31889 11.8621 9.33335 11.8582 9.34784 11.8544C9.37308 11.8477 9.39823 11.8409 9.42332 11.8339C9.43888 11.8296 9.45443 11.8252 9.46993 11.8208C9.49686 11.813 9.52363 11.805 9.55037 11.7968C9.5625 11.7931 9.57472 11.7895 9.58681 11.7857C9.62281 11.7744 9.65863 11.7627 9.69433 11.7507C9.71008 11.7454 9.72574 11.7399 9.74143 11.7345C9.76382 11.7267 9.78616 11.7189 9.80844 11.7109C9.8252 11.7048 9.84196 11.6987 9.85863 11.6925C9.88146 11.684 9.90421 11.6753 9.9269 11.6665C9.94163 11.6608 9.9564 11.6553 9.97108 11.6495C10.0048 11.6361 10.0384 11.6223 10.0718 11.6082C10.0888 11.6011 10.1056 11.5937 10.1225 11.5864C10.1421 11.578 10.1616 11.5695 10.181 11.5608C10.1987 11.5529 10.2164 11.545 10.234 11.5369C10.2533 11.528 10.2726 11.519 10.2918 11.5099C10.3105 11.501 10.3292 11.4922 10.3478 11.4832C10.3774 11.4688 10.4067 11.4542 10.436 11.4393C10.4538 11.4302 10.4715 11.4209 10.4892 11.4117C10.5062 11.4027 10.5233 11.3938 10.5403 11.3847C10.5585 11.3749 10.5767 11.365 10.5948 11.355C10.6113 11.3459 10.6278 11.3366 10.6443 11.3274C10.667 11.3145 10.6896 11.3017 10.7121 11.2885C10.7367 11.2742 10.7613 11.2597 10.7856 11.245C10.8038 11.234 10.8217 11.2229 10.8397 11.2117C10.8549 11.2023 10.87 11.1929 10.885 11.1834C10.9032 11.1719 10.9212 11.1603 10.9392 11.1486C10.9541 11.139 10.9688 11.1292 10.9836 11.1194C12.4743 10.1304 13.4593 8.43729 13.4593 6.51818C13.4592 3.47545 10.9838 1 7.94103 1ZM6.05677 5.71065H5.65301V7.72949C5.65301 7.95249 5.47222 8.13326 5.24925 8.13326C5.02627 8.13326 4.84548 7.95247 4.84548 7.72949V5.71065H4.44169C4.21869 5.71065 4.03793 5.52986 4.03793 5.30689C4.03793 5.08391 4.21872 4.90312 4.44169 4.90312H6.05677C6.27977 4.90312 6.46054 5.08391 6.46054 5.30689C6.46054 5.52986 6.27977 5.71065 6.05677 5.71065ZM9.15234 7.19114C9.15234 7.71063 8.72972 8.13328 8.2102 8.13328H7.67185C7.15236 8.13328 6.72971 7.71066 6.72971 7.19114V5.84524C6.72971 5.32575 7.15234 4.9031 7.67185 4.9031H8.2102C8.72969 4.9031 9.15234 5.32572 9.15234 5.84524V7.19114ZM11.8442 5.97983C11.8442 6.49931 11.4215 6.92194 10.902 6.92194H10.2291V7.72949C10.2291 7.95249 10.0483 8.13326 9.82531 8.13326C9.60234 8.13326 9.42155 7.95247 9.42155 7.72949V5.84524C9.42155 5.32575 9.84417 4.9031 10.3637 4.9031H10.902C11.4215 4.9031 11.8442 5.32572 11.8442 5.84524V5.97983Z"
                            fill="#26BF6A" />
                          <path
                            d="M10.9024 5.71289H10.3641C10.2899 5.71289 10.2295 5.77325 10.2295 5.84748V6.11665H10.9024C10.9767 6.11665 11.037 6.05629 11.037 5.98207V5.84748C11.037 5.77325 10.9767 5.71289 10.9024 5.71289Z"
                            fill="#26BF6A" />
                          <path
                            d="M8.21005 5.71289H7.6717C7.59747 5.71289 7.53711 5.77325 7.53711 5.84748V7.19338C7.53711 7.26761 7.59747 7.32797 7.6717 7.32797H8.21005C8.28427 7.32797 8.34464 7.26761 8.34464 7.19338V5.84748C8.34466 5.77325 8.28427 5.71289 8.21005 5.71289Z"
                            fill="#26BF6A" />
                        </svg>
                      </figure>

                      <p class="title">
                        Top Seller
                      </p>
                    </div>

                    <div class="badge new-arrival">

                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M11.0078 8.50781C11.0078 8.40281 10.9428 8.31031 10.8478 8.27531L9.45531 7.74531C8.19031 7.26531 7.20281 6.22531 6.74781 4.89281L6.24531 3.42781C6.21031 3.32531 6.11531 3.25781 6.00781 3.25781C5.90031 3.25781 5.80531 3.32531 5.77031 3.42781L5.26781 4.89281C4.81281 6.22531 3.82531 7.26531 2.56031 7.74531L1.16781 8.27531C1.07281 8.31031 1.00781 8.40281 1.00781 8.50781C1.00781 8.61281 1.07281 8.70531 1.16781 8.74031L2.56031 9.27031C3.82531 9.75031 4.81281 10.7903 5.26781 12.1228L5.77031 13.5878C5.80531 13.6903 5.90031 13.7578 6.00781 13.7578C6.11531 13.7578 6.21031 13.6903 6.24531 13.5878L6.74781 12.1228C7.20281 10.7903 8.19031 9.75031 9.45531 9.27031L10.8478 8.74031C10.9428 8.70531 11.0078 8.61281 11.0078 8.50781Z"
                            fill="#0D9488" />
                          <path
                            d="M9.67281 3.99281L10.4053 4.25781C11.0378 4.48531 11.5303 4.97781 11.7578 5.61031L12.0228 6.34281C12.0578 6.44281 12.1528 6.50781 12.2578 6.50781C12.3628 6.50781 12.4578 6.44281 12.4928 6.34281L12.7578 5.61031C12.9853 4.97781 13.4778 4.48531 14.1103 4.25781L14.8428 3.99281C14.9428 3.95781 15.0078 3.86281 15.0078 3.75781C15.0078 3.65281 14.9428 3.55781 14.8428 3.52281L14.1103 3.25781C13.4778 3.03031 12.9853 2.53781 12.7578 1.90531L12.4928 1.17281C12.4578 1.07281 12.3628 1.00781 12.2578 1.00781C12.1528 1.00781 12.0578 1.07281 12.0228 1.17281L11.7578 1.90531C11.5303 2.53781 11.0378 3.03031 10.4053 3.25781L9.67281 3.52281C9.57281 3.55781 9.50781 3.65281 9.50781 3.75781C9.50781 3.86281 9.57281 3.95781 9.67281 3.99281ZM10.5753 3.72781C11.3478 3.45031 11.9503 2.84781 12.2278 2.07531L12.2578 1.99531L12.2878 2.07531C12.5653 2.84781 13.1678 3.45031 13.9403 3.72781L14.0203 3.75781L13.9403 3.78781C13.1678 4.06531 12.5653 4.66781 12.2878 5.44031L12.2578 5.52031L12.2278 5.44031C11.9503 4.66781 11.3478 4.06531 10.5753 3.78781L10.4953 3.75781L10.5753 3.72781Z"
                            fill="#0D9488" />
                          <path
                            d="M14.8428 12.2728L14.1828 12.0353C13.9028 11.9328 13.6528 11.7728 13.4478 11.5678C13.2428 11.3628 13.0828 11.1128 12.9803 10.8328L12.7428 10.1728C12.7078 10.0728 12.6128 10.0078 12.5078 10.0078C12.4028 10.0078 12.3078 10.0728 12.2728 10.1728L12.0353 10.8328C11.8328 11.3928 11.3928 11.8328 10.8328 12.0353L10.1728 12.2728C10.0728 12.3078 10.0078 12.4028 10.0078 12.5078C10.0078 12.6128 10.0728 12.7078 10.1728 12.7428L10.8328 12.9803C11.3928 13.1828 11.8328 13.6228 12.0353 14.1828L12.2728 14.8428C12.3078 14.9428 12.4028 15.0078 12.5078 15.0078C12.6128 15.0078 12.7078 14.9428 12.7428 14.8428L12.9803 14.1828C13.1828 13.6228 13.6228 13.1828 14.1828 12.9803L14.8428 12.7428C14.9428 12.7078 15.0078 12.6128 15.0078 12.5078C15.0078 12.4028 14.9428 12.3078 14.8428 12.2728Z"
                            fill="#0D9488" />
                        </svg>
                      </figure>

                      <p class="title">
                        New Arrival
                      </p>
                    </div>

                    <div class="badge customer-favorite">

                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.42336 7.45539C6.23357 5.86101 8.08065 5.49433 9.26211 6.06617C10.5452 6.6862 11.1007 8.44992 10.5706 10.5347C10.2124 11.9435 8.86677 13.6525 7.65926 14.8574C7.53617 14.9805 7.35641 15.0287 7.18837 14.9837C5.53994 14.5441 3.52026 13.7365 2.50554 12.6957C1.0043 11.1548 0.603098 9.35066 1.4042 8.17181C2.14146 7.08545 3.92472 6.47974 5.42336 7.45539Z"
                            fill="#31BCC6" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.19269 3.54575C4.31318 3.78673 4.21548 4.08046 3.97385 4.20095C3.73287 4.32144 3.43913 4.22375 3.31864 3.98212L2.993 3.33082C2.87251 3.08984 2.9702 2.7961 3.21183 2.67561C3.45281 2.55512 3.74655 2.65282 3.86704 2.89445L4.19269 3.54575Z"
                            fill="#31BCC6" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.4588 12.45C11.3383 12.209 11.436 11.9152 11.6777 11.7948C11.9186 11.6743 12.2124 11.772 12.3329 12.0136L12.6585 12.6649C12.779 12.9059 12.6813 13.1996 12.4397 13.3201C12.1987 13.4406 11.905 13.3429 11.7845 13.1013L11.4588 12.45Z"
                            fill="#31BCC6" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M2.67066 6.48175C2.42968 6.60224 2.13595 6.50454 2.01546 6.26291C1.89497 6.02193 1.99266 5.7282 2.23429 5.60771L2.88559 5.28206C3.12657 5.16157 3.42031 5.25926 3.5408 5.50089C3.66129 5.74187 3.56359 6.03561 3.32196 6.1561L2.67066 6.48175Z"
                            fill="#31BCC6" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12.9813 9.51448C13.2223 9.39399 13.516 9.49168 13.6365 9.73332C13.757 9.9743 13.6593 10.268 13.4177 10.3885L12.7664 10.7142C12.5254 10.8347 12.2316 10.737 12.1112 10.4953C11.9907 10.2544 12.0884 9.96062 12.33 9.84013L12.9813 9.51448Z"
                            fill="#31BCC6" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.55236 6.18984C5.49374 6.03092 5.4449 5.87461 5.40647 5.72156C4.87696 3.63675 5.43187 1.87434 6.71493 1.25365C7.89638 0.681811 9.74346 1.04849 10.5537 2.64352C12.0523 1.66722 13.8356 2.27358 14.5728 3.3593C15.3733 4.53815 14.9714 6.34094 13.4761 7.87866C12.9752 8.39318 12.2379 8.85691 11.414 9.24182C11.4753 7.46182 10.7426 6.05893 9.54547 5.47927C8.3816 4.91655 6.68627 5.08524 5.55236 6.18984Z"
                            fill="#31BCC6" />
                        </svg>
                      </figure>

                      <p class="title">
                        Customer Favorite
                      </p>
                    </div>

                    <div class="badge fast-shipper">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M10.3314 3.16602C9.37544 3.16602 8.44096 3.44949 7.64613 3.98058C6.85129 4.51167 6.23179 5.26654 5.86596 6.14971C5.50014 7.03289 5.40443 8.00471 5.59092 8.94229C5.77742 9.87986 6.23775 10.7411 6.9137 11.417C7.58965 12.093 8.45087 12.5533 9.38845 12.7398C10.326 12.9263 11.2978 12.8306 12.181 12.4648C13.0642 12.0989 13.8191 11.4794 14.3502 10.6846C14.8812 9.88977 15.1647 8.95529 15.1647 7.99935C15.163 6.71801 14.6532 5.48966 13.7471 4.58361C12.8411 3.67757 11.6127 3.16778 10.3314 3.16602ZM11.8514 9.51935C11.7576 9.61298 11.6305 9.66558 11.498 9.66558C11.3655 9.66558 11.2385 9.61298 11.1447 9.51935L9.99805 8.35268C9.90425 8.259 9.8515 8.13191 9.85138 7.99935V5.99935C9.85138 5.86674 9.90406 5.73956 9.99783 5.6458C10.0916 5.55203 10.2188 5.49935 10.3514 5.49935C10.484 5.49935 10.6112 5.55203 10.7049 5.6458C10.7987 5.73956 10.8514 5.86674 10.8514 5.99935V7.79268L11.8714 8.81268C11.9624 8.90906 12.0114 9.03764 12.0077 9.17016C12.0039 9.30267 11.9477 9.42828 11.8514 9.51935Z"
                            fill="#F9851A" />
                          <path
                            d="M4.33105 8.49902H1.33105C1.19845 8.49902 1.07127 8.44634 0.977501 8.35258C0.883733 8.25881 0.831055 8.13163 0.831055 7.99902C0.831055 7.86642 0.883733 7.73924 0.977501 7.64547C1.07127 7.5517 1.19845 7.49902 1.33105 7.49902H4.33105C4.46366 7.49902 4.59084 7.5517 4.68461 7.64547C4.77838 7.73924 4.83105 7.86642 4.83105 7.99902C4.83105 8.13163 4.77838 8.25881 4.68461 8.35258C4.59084 8.44634 4.46366 8.49902 4.33105 8.49902Z"
                            fill="#F9851A" />
                          <path
                            d="M4.99772 5.83301H3.33105C3.19845 5.83301 3.07127 5.78033 2.9775 5.68656C2.88373 5.59279 2.83105 5.46562 2.83105 5.33301C2.83105 5.2004 2.88373 5.07322 2.9775 4.97945C3.07127 4.88569 3.19845 4.83301 3.33105 4.83301H4.99772C5.13033 4.83301 5.25751 4.88569 5.35127 4.97945C5.44504 5.07322 5.49772 5.2004 5.49772 5.33301C5.49772 5.46562 5.44504 5.59279 5.35127 5.68656C5.25751 5.78033 5.13033 5.83301 4.99772 5.83301Z"
                            fill="#F9851A" />
                          <path
                            d="M4.99772 11.166H3.33105C3.19845 11.166 3.07127 11.1133 2.9775 11.0196C2.88373 10.9258 2.83105 10.7986 2.83105 10.666C2.83105 10.5334 2.88373 10.4062 2.9775 10.3125C3.07127 10.2187 3.19845 10.166 3.33105 10.166H4.99772C5.13033 10.166 5.25751 10.2187 5.35127 10.3125C5.44504 10.4062 5.49772 10.5334 5.49772 10.666C5.49772 10.7986 5.44504 10.9258 5.35127 11.0196C5.25751 11.1133 5.13033 11.166 4.99772 11.166Z"
                            fill="#F9851A" />
                        </svg>
                      </figure>

                      <p class="title">
                        Fast Shipper
                      </p>
                    </div>

                    <div class="badge">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M7.73143 7.13849C7.73143 6.98979 7.85197 6.86926 8.00069 6.86926C8.1494 6.86926 8.26994 6.98979 8.26994 7.13849V10.7834L8.76483 10.2748C10.8073 8.17572 10.7841 4.78321 8.71303 2.71229L8.00069 2L7.28834 2.71229C5.21728 4.78321 5.19404 8.17572 7.23654 10.2748L7.73143 10.7834V7.13849Z"
                            fill="#7B7F95" />
                          <path
                            d="M4.30988 11.9441C4.20472 11.839 4.20472 11.6685 4.30988 11.5634C4.41504 11.4582 4.58549 11.4582 4.69065 11.5634L7.19277 14.0653V13.5038C7.19277 10.5347 4.77706 8.11914 1.80775 8.11914H1V9.06145C1 12.0305 3.41571 14.4461 6.38502 14.4461H6.812L4.30988 11.9441Z"
                            fill="#7B7F95" />
                          <path
                            d="M8.80762 13.5038V14.0653L11.3097 11.5634C11.4149 11.4582 11.5854 11.4582 11.6905 11.5634C11.7957 11.6685 11.7957 11.839 11.6905 11.9441L9.18839 14.4461H9.61537C12.5847 14.4461 15.0004 12.0305 15.0004 9.06145V8.11914H14.1926C11.2233 8.11914 8.80762 10.5347 8.80762 13.5038Z"
                            fill="#7B7F95" />
                        </svg>
                      </figure>

                      <p class="title">
                        Eco-Friendly
                      </p>
                    </div>

                    <div class="badge">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_360_8610)">
                            <path
                              d="M5.09443 14.2512C4.98905 14.1721 4.85734 14.0931 4.75196 14.0404C4.7783 13.8297 4.75196 13.5926 4.69927 13.3555C4.5939 12.9603 4.38315 12.5915 4.09337 12.249C3.82993 12.4598 3.69821 12.8286 3.7509 13.2237C3.56649 13.0393 3.38209 12.8549 3.22403 12.6705C3.3294 12.4861 3.38209 12.249 3.38209 12.0119C3.40843 11.6168 3.3294 11.2216 3.145 10.8264C2.80253 10.9582 2.59178 11.3006 2.53909 11.6958C2.40737 11.485 2.302 11.2479 2.19662 11.0372C2.35468 10.8791 2.4864 10.6684 2.56543 10.4313C2.69715 10.0625 2.7235 9.66729 2.64446 9.24579C2.27565 9.29848 1.95953 9.56192 1.80147 9.95708C1.72244 9.69364 1.66975 9.45654 1.6434 9.1931C1.85415 9.08772 2.03856 8.90331 2.17028 8.69256C2.38103 8.37643 2.53909 7.98127 2.56543 7.55977C2.17028 7.50708 1.77512 7.71783 1.53803 8.08665C1.53803 7.82321 1.56437 7.53342 1.59072 7.26998C1.82781 7.21729 2.0649 7.08557 2.27565 6.92751C2.56543 6.69041 2.80253 6.34794 2.96059 5.95278C2.59178 5.79471 2.14393 5.90009 1.80147 6.21622C1.8805 5.95278 1.95953 5.66299 2.0649 5.39955C2.32834 5.4259 2.59178 5.34686 2.82887 5.24149C3.17134 5.08342 3.48746 4.81998 3.7509 4.45117C3.43478 4.18773 2.96059 4.18773 2.53909 4.42482C2.69715 4.16138 2.85521 3.92428 3.03962 3.68719C3.27671 3.79256 3.56649 3.79256 3.85628 3.73988C4.25143 3.66084 4.64659 3.50278 5.0154 3.21299C4.7783 2.87052 4.30412 2.7388 3.80359 2.87052C4.1724 2.52805 4.56755 2.21192 5.04174 1.94848C5.17346 1.86945 5.22615 1.71138 5.14712 1.57966C5.06809 1.44794 4.88368 1.39525 4.75196 1.47429C4.25143 1.76407 3.80359 2.10654 3.40843 2.47536C3.61918 1.94848 3.64553 1.47429 3.40843 1.10547C2.93425 1.4216 2.59178 1.94848 2.51275 2.39633C2.43372 2.7388 2.4864 3.02859 2.64446 3.26568C2.43372 3.52912 2.24931 3.81891 2.09125 4.08235C2.14393 3.52912 2.01222 3.05493 1.69609 2.79149C1.32728 3.29203 1.16922 3.8716 1.22191 4.31945C1.24825 4.66192 1.37997 4.92536 1.59072 5.10977C1.459 5.4259 1.35362 5.71568 1.27459 6.03181C1.16922 5.50493 0.932124 5.08342 0.536969 4.89902C0.326219 5.47858 0.326219 6.05816 0.484282 6.47966C0.616 6.79579 0.800406 7.00654 1.06384 7.13826C1.01116 7.45439 1.01116 7.77052 1.01116 8.08665C0.774062 7.61245 0.431594 7.29633 0.010095 7.24364C-0.0425924 7.84955 0.11547 8.40278 0.378907 8.77159C0.563313 9.03504 0.82675 9.1931 1.09019 9.24579C1.11653 9.56192 1.19556 9.8517 1.24825 10.1415C0.905781 9.77267 0.510625 9.56192 0.0891261 9.6146C0.194501 10.2205 0.484282 10.7211 0.853093 10.9845C1.09019 11.1952 1.37997 11.2743 1.61706 11.2479C1.72244 11.5114 1.85415 11.8012 1.98587 12.0383C1.53803 11.8539 1.11653 11.7485 0.747719 11.9065C1.01116 12.4598 1.43265 12.8813 1.85415 13.0657C2.14393 13.1974 2.40737 13.1974 2.64446 13.1447C2.82887 13.3818 3.01328 13.5926 3.22403 13.8033C2.77618 13.6979 2.38103 13.7243 2.09125 13.9614C2.51275 14.4356 3.06596 14.7254 3.54015 14.8044C3.82993 14.8571 4.09337 14.8044 4.30412 14.699C4.40949 14.778 4.54121 14.8571 4.64659 14.9361C4.85734 15.0678 5.12077 14.9888 5.22615 14.778C5.33152 14.5936 5.27883 14.3565 5.09443 14.2512Z"
                              fill="#7B7F95" />
                            <path
                              d="M15.5788 10.1414C15.6578 9.85161 15.7105 9.53548 15.7368 9.2457C16.0003 9.19301 16.2374 9.03494 16.4481 8.7715C16.7116 8.40269 16.8696 7.84946 16.8169 7.24355C16.3954 7.29624 16.053 7.63871 15.8159 8.08656C15.8159 7.77043 15.7895 7.4543 15.7632 7.13817C16.0003 7.03279 16.211 6.7957 16.3427 6.47957C16.5008 6.05806 16.5271 5.47849 16.2901 4.89892C15.8949 5.08333 15.6578 5.50484 15.5524 6.03172C15.4734 5.71559 15.368 5.39946 15.2363 5.10968C15.4471 4.92527 15.5788 4.66183 15.6051 4.31935C15.6578 3.8715 15.4997 3.29193 15.1309 2.7914C14.7885 3.05484 14.6831 3.55538 14.7358 4.08226C14.525 3.79247 14.3406 3.52903 14.1299 3.26559C14.2879 3.05484 14.3406 2.73871 14.2616 2.39624C14.1826 1.94839 13.8401 1.42151 13.3132 1C13.0761 1.34247 13.1025 1.84301 13.3132 2.36989C12.9181 2.00108 12.4702 1.6586 11.9697 1.36882C11.838 1.28978 11.6536 1.34247 11.5745 1.47419C11.4955 1.60591 11.5482 1.76398 11.6799 1.84301C12.1278 2.10645 12.5492 2.42258 12.9181 2.76505C12.4175 2.63333 11.9433 2.76505 11.7063 3.10753C12.0751 3.39731 12.4702 3.55538 12.8654 3.63441C13.1552 3.6871 13.4449 3.6871 13.682 3.58172C13.8664 3.81882 14.0508 4.08226 14.1826 4.31935C13.7611 4.08226 13.2869 4.08226 12.9707 4.3457C13.2342 4.68817 13.5503 4.97796 13.8928 5.13602C14.1562 5.26774 14.4197 5.32043 14.6567 5.29409C14.7621 5.55753 14.8412 5.82097 14.9202 6.11075C14.5777 5.79462 14.1299 5.68925 13.7611 5.84731C13.9191 6.24247 14.1562 6.58494 14.446 6.82204C14.6567 7.00645 14.8938 7.11183 15.1309 7.16451C15.1573 7.42796 15.1836 7.71774 15.1836 7.98118C14.9465 7.61236 14.5514 7.40161 14.1562 7.4543C14.2089 7.8758 14.3406 8.27097 14.5514 8.58709C14.6831 8.79785 14.8675 8.98226 15.0782 9.08763C15.0256 9.35107 14.9729 9.58817 14.9202 9.85161C14.7621 9.45645 14.4723 9.16666 14.0772 9.14032C13.9982 9.56183 14.0508 9.98333 14.1562 10.3258C14.2352 10.5629 14.3406 10.7737 14.525 10.9317C14.4197 11.1688 14.3143 11.3796 14.1826 11.5903C14.1299 11.1952 13.9191 10.8527 13.5767 10.721C13.3922 11.1161 13.3132 11.5113 13.3396 11.9064C13.3396 12.1435 13.3922 12.3806 13.4976 12.5651C13.3396 12.7495 13.1552 12.9339 12.9707 13.1183C13.0234 12.7231 12.9181 12.3543 12.6283 12.1435C12.3385 12.486 12.1277 12.8548 12.0224 13.25C11.9697 13.4871 11.9433 13.7242 11.9697 13.9349C11.8643 14.014 11.7589 14.093 11.6272 14.1457C11.4428 14.2511 11.3901 14.4882 11.4692 14.6726C11.5745 14.8833 11.838 14.9624 12.0487 14.8306C12.1804 14.7516 12.2858 14.6726 12.3912 14.5935C12.6019 14.6989 12.8654 14.7516 13.1552 14.6989C13.6293 14.6199 14.1826 14.3301 14.6041 13.8559C14.3143 13.6188 13.9191 13.5925 13.4713 13.6978C13.682 13.4871 13.8664 13.2763 14.0508 13.0392C14.2879 13.0919 14.5514 13.0656 14.8412 12.9602C15.2627 12.7758 15.6841 12.3806 15.9476 11.8011C15.5788 11.643 15.1573 11.7484 14.7621 11.9855C14.8938 11.722 15.0256 11.4586 15.1309 11.1952C15.3944 11.1952 15.6578 11.1161 15.8949 10.9317C16.2374 10.6419 16.5535 10.1677 16.6589 9.56183C16.3164 9.56183 15.9212 9.79892 15.5788 10.1414Z"
                              fill="#7B7F95" />
                            <path
                              d="M11.6284 12.565L11.0752 9.37734L13.3935 7.11174C13.4725 7.03271 13.4988 6.92734 13.4725 6.8483C13.4461 6.74293 13.3671 6.69024 13.2617 6.6639L10.0478 6.1897L8.62525 3.29185C8.57256 3.21282 8.49353 3.13379 8.38816 3.13379C8.28278 3.13379 8.20375 3.18648 8.15106 3.29185L6.72851 6.1897L3.51457 6.6639C3.4092 6.69024 3.33017 6.74293 3.30382 6.8483C3.27748 6.95368 3.30382 7.05906 3.38286 7.11174L5.7011 9.37734L5.14788 12.565C5.12154 12.6703 5.17423 12.7757 5.25326 12.8284C5.33229 12.8811 5.43766 12.9074 5.54304 12.8548L8.38816 11.3268L11.2596 12.8284C11.286 12.8548 11.3387 12.8548 11.3913 12.8548C11.444 12.8548 11.4967 12.8284 11.5494 12.8021C11.6021 12.7494 11.6548 12.6703 11.6284 12.565Z"
                              fill="#7B7F95" />
                          </g>
                          <defs>
                            <clipPath id="clip0_360_8610">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </figure>

                      <p class="title">
                        Quality Assured
                      </p>
                    </div>

                    <div class="badge">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_360_8618)">
                            <path
                              d="M5.78094 3.98536H10.3558C10.4861 3.98536 10.5931 4.08507 10.6046 4.21239C10.7206 5.14929 10.6626 6.12484 10.485 6.77404C10.2786 7.52876 9.90956 8.08932 9.46128 8.45526C8.87443 8.93423 8.11801 9.10029 7.39389 8.85643C7.11812 8.76355 6.89796 8.63782 6.67426 8.45526C6.22598 8.08932 5.85692 7.52876 5.65049 6.77404C5.47244 6.1231 5.41458 5.14512 5.53182 4.20501L5.53178 4.20434C5.54761 4.07736 5.6561 3.98458 5.78094 3.98536ZM10.1322 4.48514H6.00335C5.928 5.26406 5.98327 6.10399 6.13077 6.64322C6.28174 7.19526 6.58489 7.7835 7.06059 8.1242C7.74405 8.577 8.38304 8.59955 9.06347 8.13268C9.54217 7.80199 9.8552 7.19009 10.0048 6.64322C10.1523 6.10399 10.2075 5.26403 10.1322 4.48514Z"
                              fill="#7B7F95" />
                            <path
                              d="M3.08174 11.6151C3.07303 11.6135 3.06406 11.6126 3.05491 11.6126C3.04539 11.6126 3.03605 11.6136 3.02705 11.6153L3 11.6154C3.02856 10.9528 3.14336 10.3028 3.4088 9.84761C3.62368 9.47905 3.94273 9.24121 4.40415 9.24121H6.73514C6.86451 9.52146 7.01507 9.67557 7.22235 9.76233C7.40826 9.84015 7.62584 9.85554 7.91135 9.85831V10.437V10.4375V10.4381C7.91094 10.8017 7.70982 11.0589 7.4304 11.2364C6.99659 11.512 6.38276 11.6038 5.99031 11.605L4.85524 11.6089C4.84395 11.6076 4.83236 11.6076 4.82074 11.6091L3.08174 11.6151Z"
                              fill="#7B7F95" />
                            <path
                              d="M3.20117 14.0738V11.9048L4.72223 11.8994C4.80806 12.3559 5.00796 14.0624 3.20117 14.0738Z"
                              fill="#7B7F95" />
                            <path
                              d="M4.65448 15.9985H3.20117V14.3658C3.92515 14.3645 4.37709 14.1353 4.65448 13.8125V15.9985Z"
                              fill="#7B7F95" />
                            <path
                              d="M7.923 16.0003H4.94336V13.2963C5.12462 12.7698 5.06362 12.1881 5.01476 11.9017L5.98931 11.8982C6.42095 11.897 7.09898 11.7942 7.58498 11.4854C7.70816 11.4072 7.81945 11.3162 7.91248 11.2109L7.923 16.0003ZM7.50815 13.3781C7.58845 13.3781 7.65354 13.3129 7.65354 13.2327C7.65354 13.1524 7.58845 13.0873 7.50815 13.0873H6.59977C6.51948 13.0873 6.45438 13.1524 6.45438 13.2327C6.45438 13.3129 6.51948 13.3781 6.59977 13.3781H7.50815ZM7.50815 15.1264C7.58845 15.1264 7.65354 15.0613 7.65354 14.981C7.65354 14.9007 7.58845 14.8356 7.50815 14.8356H6.59977C6.51948 14.8356 6.45438 14.9007 6.45438 14.981C6.45438 15.0613 6.51948 15.1264 6.59977 15.1264H7.50815Z"
                              fill="#7B7F95" />
                            <path
                              d="M11.1939 15.9968H8.21364L8.20312 11.2109C8.29549 11.3147 8.40568 11.4046 8.52749 11.482C9.01349 11.7907 9.69153 11.8935 10.1232 11.8948L11.1225 11.8983C11.0736 12.1847 11.0126 12.7663 11.1939 13.2928V15.9968ZM9.30579 12.9312C9.24586 12.8713 9.16302 12.8342 9.0715 12.8342C8.97998 12.8342 8.89718 12.8713 8.83725 12.9312C8.77732 12.9912 8.74023 13.074 8.74023 13.1655C8.74023 13.257 8.77732 13.3398 8.83725 13.3998C8.89718 13.4597 8.97998 13.4968 9.0715 13.4968C9.16302 13.4968 9.24586 13.4597 9.30579 13.3998C9.36572 13.3398 9.4028 13.257 9.4028 13.1655C9.4028 13.074 9.36572 12.9912 9.30579 12.9312ZM9.30579 14.8069C9.24582 14.7469 9.16298 14.7099 9.0715 14.7099C8.98002 14.7099 8.89718 14.7469 8.83725 14.8069C8.77732 14.8668 8.74023 14.9497 8.74023 15.0412C8.74023 15.1327 8.77732 15.2155 8.83725 15.2754C8.89718 15.3354 8.97998 15.3724 9.0715 15.3724C9.16302 15.3724 9.24586 15.3353 9.30579 15.2754C9.36572 15.2155 9.4028 15.1326 9.4028 15.0412C9.4028 14.9497 9.36572 14.8668 9.30579 14.8069Z"
                              fill="#7B7F95" />
                            <path
                              d="M12.9377 14.3658V15.9985H11.4844V13.8125C11.7619 14.1353 12.2137 14.3645 12.9377 14.3658Z"
                              fill="#7B7F95" />
                            <path
                              d="M12.9352 11.9047V14.0737C11.1285 14.0623 11.3283 12.356 11.4141 11.8994L12.9352 11.9047Z"
                              fill="#7B7F95" />
                            <path
                              d="M10.1242 11.605L11.2834 11.609C11.2951 11.6076 11.3071 11.6076 11.3193 11.6091L13.0571 11.6152C13.0659 11.6136 13.0751 11.6126 13.0844 11.6126C13.0941 11.6126 13.1035 11.6136 13.1127 11.6154H13.1145C13.0859 10.9528 12.9711 10.3028 12.7057 9.84761C12.4908 9.47905 12.1717 9.24121 11.7103 9.24121H9.37934C9.24996 9.52146 9.0994 9.67557 8.89212 9.76233C8.70625 9.84015 8.48863 9.85554 8.20312 9.85831V10.437C8.20312 10.8012 8.40439 11.0587 8.68407 11.2364C9.11789 11.512 9.73171 11.6038 10.1242 11.605Z"
                              fill="#7B7F95" />
                            <path
                              d="M6.48535 9.67772C6.48535 9.81573 6.59724 9.92763 6.73525 9.92763C6.87326 9.92763 6.98511 9.81573 6.98511 9.67772V8.17862C6.98511 8.0406 6.87326 7.92871 6.73525 7.92871C6.59724 7.92871 6.48535 8.0406 6.48535 8.17862V9.67772Z"
                              fill="#7B7F95" />
                            <path
                              d="M9.12695 9.57172C9.12695 9.70974 9.2388 9.82163 9.37682 9.82163C9.51483 9.82163 9.62672 9.70974 9.62672 9.57172V8.19913C9.62672 8.06111 9.51483 7.94922 9.37682 7.94922C9.2388 7.94922 9.12695 8.06111 9.12695 8.19913V9.57172Z"
                              fill="#7B7F95" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.1715 1.77174C10.9059 2.30333 10.4799 3.31844 10.5978 4.16851H5.53458C5.65252 3.31844 5.22652 2.30333 4.96094 1.77174C4.9978 1.75177 5.03131 1.72642 5.06042 1.69671C5.89913 2.43995 6.23306 2.00859 6.36402 1.61715C6.39059 1.62246 6.41805 1.62527 6.44616 1.62527C6.53971 1.62527 6.62606 1.59442 6.69555 1.54231C7.20391 2.078 7.65765 1.69524 7.90128 1.1084C7.95386 1.12264 8.00914 1.13028 8.06623 1.13028C8.12129 1.13028 8.17472 1.1232 8.22565 1.10987C8.46566 1.69295 8.92472 2.08125 9.4368 1.54224C9.50633 1.59438 9.59268 1.62527 9.68626 1.62527C9.71434 1.62527 9.7418 1.6225 9.76833 1.61719C9.89922 2.00866 10.2333 2.44002 11.072 1.69671C11.1011 1.72642 11.1346 1.75177 11.1715 1.77174ZM6.69643 2.81817C6.88057 2.81817 7.02988 2.96749 7.02988 3.15163C7.02988 3.33582 6.88057 3.4851 6.69643 3.4851C6.51229 3.4851 6.36299 3.33582 6.36299 3.15163C6.36299 2.96749 6.51229 2.81817 6.69643 2.81817ZM8.06619 2.81817C8.25037 2.81817 8.39964 2.96749 8.39964 3.15163C8.39964 3.33582 8.25037 3.4851 8.06619 3.4851C7.88205 3.4851 7.73278 3.33582 7.73278 3.15163C7.73278 2.96749 7.88205 2.81817 8.06619 2.81817ZM9.43599 2.81817C9.62013 2.81817 9.76944 2.96749 9.76944 3.15163C9.76944 3.33582 9.62013 3.4851 9.43599 3.4851C9.25185 3.4851 9.10255 3.33582 9.10255 3.15163C9.10255 2.96749 9.25185 2.81817 9.43599 2.81817Z"
                              fill="#7B7F95" />
                            <path
                              d="M8.06814 1.00156C8.3447 1.00156 8.5689 0.777354 8.5689 0.500781C8.5689 0.224207 8.3447 0 8.06814 0C7.79158 0 7.56738 0.224207 7.56738 0.500781C7.56738 0.777354 7.79158 1.00156 8.06814 1.00156Z"
                              fill="#7B7F95" />
                            <path
                              d="M6.44701 1.49659C6.60598 1.49659 6.73485 1.36772 6.73485 1.20875C6.73485 1.04977 6.60598 0.920898 6.44701 0.920898C6.28805 0.920898 6.15918 1.04977 6.15918 1.20875C6.15918 1.36772 6.28805 1.49659 6.44701 1.49659Z"
                              fill="#7B7F95" />
                            <path
                              d="M4.76342 1.69191C4.92239 1.69191 5.05126 1.56303 5.05126 1.40406C5.05126 1.24508 4.92239 1.11621 4.76342 1.11621C4.60445 1.11621 4.47559 1.24508 4.47559 1.40406C4.47559 1.56303 4.60445 1.69191 4.76342 1.69191Z"
                              fill="#7B7F95" />
                            <path
                              d="M9.68627 1.49659C9.84524 1.49659 9.97411 1.36772 9.97411 1.20875C9.97411 1.04977 9.84524 0.920898 9.68627 0.920898C9.52731 0.920898 9.39844 1.04977 9.39844 1.20875C9.39844 1.36772 9.52731 1.49659 9.68627 1.49659Z"
                              fill="#7B7F95" />
                            <path
                              d="M11.3718 1.69093C11.5308 1.69093 11.6597 1.56206 11.6597 1.40308C11.6597 1.24411 11.5308 1.11523 11.3718 1.11523C11.2129 1.11523 11.084 1.24411 11.084 1.40308C11.084 1.56206 11.2129 1.69093 11.3718 1.69093Z"
                              fill="#7B7F95" />
                          </g>
                          <defs>
                            <clipPath id="clip0_360_8618">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </figure>

                      <p class="title">
                        Discount King
                      </p>
                    </div>

                    <div class="badge">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_360_8643)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.94658 10.4993C8.84718 10.7491 9.07178 11.0067 9.4436 11.247C8.27837 11.6975 7.03751 11.7277 5.86457 11.2879C5.86434 11.288 6.3135 11.0268 6.25946 10.7027C7.08859 11.2156 8.39512 11.2241 8.9454 10.499L8.94658 10.4993ZM9.81812 11.4604C10.6598 11.8909 11.8366 12.2328 12.1532 12.3175C13.544 12.7553 13.1319 16.0004 13.1319 16.0004H11.7719L11.3161 14.3412L10.8574 16.0004H8.14598V13.1647C8.70508 13.0961 9.26389 12.9229 9.823 12.6445L9.82067 11.4619L9.81812 11.4604ZM7.04301 16.0004H4.33153L3.8757 14.3412L3.41706 16.0004H2.05706C2.05706 16.0004 1.64496 12.7553 3.03575 12.3175C3.03575 12.3175 4.41144 12.0052 5.36732 11.5609L5.36596 11.5617V12.6445C5.92506 12.9221 6.48416 13.0954 7.04331 13.1643L7.04301 16.0004Z"
                              fill="#7B7F95" />
                            <path
                              d="M7.59436 12.7057C7.74948 12.7057 7.87524 12.5693 7.87524 12.4012C7.87524 12.233 7.74948 12.0967 7.59436 12.0967C7.43923 12.0967 7.31348 12.233 7.31348 12.4012C7.31348 12.5693 7.43923 12.7057 7.59436 12.7057Z"
                              fill="#7B7F95" />
                            <path
                              d="M6.36975 12.5113C6.52487 12.5113 6.65063 12.375 6.65063 12.2068C6.65063 12.0387 6.52487 11.9023 6.36975 11.9023C6.21462 11.9023 6.08887 12.0387 6.08887 12.2068C6.08887 12.375 6.21462 12.5113 6.36975 12.5113Z"
                              fill="#7B7F95" />
                            <path
                              d="M8.82287 12.5113C8.978 12.5113 9.10375 12.375 9.10375 12.2068C9.10375 12.0387 8.978 11.9023 8.82287 11.9023C8.66775 11.9023 8.54199 12.0387 8.54199 12.2068C8.54199 12.375 8.66775 12.5113 8.82287 12.5113Z"
                              fill="#7B7F95" />
                            <path d="M5.36035 11.5578L5.86642 11.2842L6.1724 11.3891L5.3664 11.8312L5.36035 11.5578Z"
                              fill="#7B7F95" />
                            <path d="M9.44173 11.2451L9.82271 11.4627L9.82212 11.7776L9.10449 11.3661L9.44173 11.2451Z"
                              fill="#7B7F95" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.05226 11.1709H6.46358L6.46206 9.47605L6.05078 9.4043L6.05226 11.1709Z"
                              fill="#7B7F95" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.73828 11.0802H9.14953L9.14979 9.22852L8.7385 9.44487L8.73828 11.0802Z"
                              fill="#7B7F95" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.3214 4.98363C10.5673 5.60244 10.8042 6.23995 10.8941 6.9029C10.9617 7.40139 10.9413 7.88928 10.8118 8.37651C10.7914 8.45298 10.7483 8.5461 10.7128 8.61608C10.6344 8.77054 10.534 8.91633 10.4138 9.04115C10.1195 9.34664 9.759 9.47641 9.36783 9.46612C9.22909 9.60766 9.07599 9.73533 8.90827 9.84528C8.53921 10.0873 8.11804 10.2296 7.67631 10.2477C7.23882 10.2657 6.80997 10.1595 6.42662 9.94928C6.19129 9.82022 5.98039 9.65653 5.79444 9.46756C5.36164 9.50635 4.96158 9.38289 4.6388 9.05595C4.51815 8.93375 4.4165 8.79073 4.33674 8.63874C4.29979 8.56832 4.25122 8.46701 4.23195 8.38909C4.08693 7.80225 4.01537 7.17115 4.14843 6.57516C4.26975 6.03164 4.46138 5.5064 4.66468 4.98894V3.61673H10.3214V4.98363ZM9.84603 7.46029C9.89187 7.21083 9.91852 6.95893 9.92955 6.71194C9.93107 6.6788 9.92645 6.64676 9.91424 6.61587C9.87998 6.52935 9.78882 6.46432 9.70016 6.4173C9.52927 6.35688 9.35044 6.30787 9.17656 6.25793C8.76237 6.13897 8.29004 6.0037 7.8961 5.77668C7.7894 5.71807 7.69022 5.65208 7.60363 5.57682C7.57861 5.55637 7.55421 5.53534 7.53048 5.51363C7.43211 5.57557 7.32039 5.6241 7.2139 5.6657C7.06195 5.72501 6.90564 5.77528 6.75058 5.82592C6.59504 5.87674 6.43951 5.92764 6.28589 5.98396C5.94809 6.10786 5.40549 6.32865 5.26335 6.69035C5.22984 6.77572 5.21991 6.86485 5.23035 6.95583C5.29535 7.52319 5.45015 8.09634 5.74277 8.5905C5.96777 8.97051 6.27504 9.30176 6.66473 9.5155C6.9689 9.68229 7.30946 9.76799 7.65667 9.75378C8.0086 9.73939 8.34337 9.62372 8.63713 9.43109C9.03354 9.17118 9.33077 8.78959 9.53761 8.36684C9.67779 8.08039 9.77789 7.77409 9.84603 7.46029ZM8.87793 2.42326C8.9134 2.4781 8.98626 2.49641 9.04365 2.46356C9.04782 2.46116 9.05181 2.45828 9.05605 2.45585L10.8277 1.4457L10.3487 3.39159H4.63733L4.15828 1.4457L5.95293 2.46891C6.00984 2.4946 6.08038 2.47526 6.11105 2.41857L6.11566 2.41008L7.49301 0L8.87793 2.42326ZM7.67383 1.92355C7.63135 1.86801 7.56679 1.81338 7.49301 1.81338C7.41923 1.81338 7.35468 1.86801 7.31219 1.92355C7.22966 2.03144 7.19497 2.17571 7.19497 2.30969C7.19497 2.44367 7.22966 2.58794 7.31219 2.69579C7.35468 2.75134 7.41923 2.80596 7.49301 2.80596C7.56679 2.80596 7.63135 2.75134 7.67383 2.69579C7.7564 2.58794 7.79106 2.44367 7.79106 2.30969C7.79106 2.17571 7.7564 2.03144 7.67383 1.92355Z"
                              fill="#7B7F95" />
                          </g>
                          <defs>
                            <clipPath id="clip0_360_8643">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </figure>

                      <p class="title">
                        Discount Queen
                      </p>
                    </div>

                    <div class="badge">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_360_8658)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12.5019 11.7251C12.4162 11.8043 12.3036 11.8481 12.1869 11.8476C12.0726 11.8466 11.9624 11.8047 11.8763 11.7295C11.7906 11.8071 11.6791 11.8501 11.5634 11.8501C11.4478 11.8501 11.3363 11.8071 11.2506 11.7295L10.9422 12.038C11.0081 12.1184 11.0512 12.2151 11.0669 12.318C11.0669 12.5673 10.975 12.5673 10.975 12.878C10.975 13.6545 11.8763 13.906 11.8763 13.906C11.8763 13.906 12.7797 13.6545 12.7797 12.878H12.7819C12.7819 12.5673 12.6878 12.5673 12.6878 12.318C12.7046 12.2155 12.7475 12.119 12.8125 12.038L12.5019 11.7251ZM8 10.406L7.125 11.281L7.34375 12.156H8.65625L8.875 11.281L8 10.406ZM5.64843 9.45455L6.19531 11.3161C6.20077 11.3342 6.21093 11.3505 6.22476 11.3634C6.23858 11.3764 6.25558 11.3854 6.27402 11.3896C6.29246 11.3938 6.31169 11.3931 6.32976 11.3875C6.34782 11.3819 6.36408 11.3716 6.37689 11.3577L8 9.74978L9.6275 11.3619C9.63972 11.376 9.65548 11.3866 9.67316 11.3926C9.69084 11.3986 9.7098 11.3998 9.72808 11.396C9.74636 11.3922 9.7633 11.3836 9.77715 11.3711C9.79099 11.3586 9.80125 11.3426 9.80685 11.3248L10.4281 9.45669C10.5838 9.46186 10.7382 9.48684 10.8875 9.53103C12.1125 9.88109 13.3375 10.406 14.3 11.1936C14.5131 11.3605 14.6865 11.5727 14.8076 11.8148C14.9286 12.0569 14.9944 12.3229 15 12.5935V16.0935H8.875L8.64094 12.5935H7.36782L7.125 16.0935H1V12.5935C1.00564 12.3229 1.07137 12.0569 1.19243 11.8148C1.3135 11.5727 1.48687 11.3605 1.7 11.1936C2.73518 10.4502 3.88908 9.88804 5.1125 9.53103C5.28744 9.4842 5.46737 9.45852 5.64843 9.45455ZM4.57 4.2286C5.60369 4.93965 6.82849 5.32097 8.08312 5.32235C9.27492 5.32249 10.4418 4.98087 11.4453 4.33798C11.4803 4.53586 11.4986 4.73632 11.5 4.93726C11.4983 5.42588 11.3943 5.90873 11.1947 6.35472C10.9951 6.80072 10.7043 7.19998 10.3411 7.52681C9.97785 7.85363 9.55021 8.10078 9.08569 8.25235C8.62117 8.40392 8.13006 8.45654 7.64397 8.40683C7.15788 8.35713 6.68759 8.20619 6.26336 7.96374C5.83913 7.72129 5.47037 7.3927 5.18081 6.99912C4.89124 6.60554 4.6873 6.15569 4.5821 5.67852C4.4769 5.20136 4.47278 4.70746 4.57 4.2286ZM7.5625 0.573228L7.27593 0.846666C7.33365 0.917932 7.37141 1.00325 7.38533 1.0939C7.38533 1.31265 7.30438 1.31265 7.30438 1.58822C7.30438 2.27509 8.10063 2.49384 8.10063 2.49384C8.10063 2.49384 8.89688 2.27295 8.89688 1.58822H8.90563C8.90563 1.31265 8.82469 1.31265 8.82033 1.0939C8.83476 1.00341 8.87245 0.918214 8.9297 0.846666L8.65626 0.573228C8.58373 0.640919 8.48858 0.679152 8.38938 0.680466C8.28821 0.680056 8.19049 0.6436 8.11377 0.577641C8.03755 0.644461 7.93948 0.681041 7.83812 0.680466C7.7359 0.681362 7.63723 0.642974 7.5625 0.573228ZM7.85561 -0.936234C7.93364 -0.978094 8.02081 -1 8.10936 -1C8.19791 -1 8.28508 -0.978094 8.36311 -0.936234C8.85969 -0.673618 10.0781 -0.0939884 10.5703 0.0941408C11.2392 0.325111 11.9224 0.512175 12.6156 0.654141L12.6069 0.660691C12.6994 0.681254 12.7847 0.726273 12.8539 0.791047C12.923 0.855822 12.9736 0.937978 13.0001 1.02894C13.0267 1.1199 13.0284 1.21634 13.005 1.30818C12.9817 1.40001 12.934 1.48389 12.8672 1.55105L11.9922 2.42605V2.68639C11.9918 2.84514 11.9516 3.00125 11.8751 3.14039C11.7987 3.27952 11.6885 3.39721 11.5547 3.48264L11.1019 3.77572C10.1754 4.37283 9.09296 4.68231 7.9909 4.66518C6.88883 4.64805 5.81651 4.30506 4.90907 3.67945L4.62689 3.48477C4.5008 3.39774 4.39771 3.28141 4.32646 3.14578C4.25521 3.01015 4.21793 2.85925 4.21782 2.70605V2.4195L3.34282 1.5445C3.27594 1.47735 3.22832 1.39347 3.20493 1.30163C3.18153 1.20979 3.18322 1.11335 3.20982 1.02239C3.23641 0.93142 3.28694 0.849261 3.35612 0.784486C3.4253 0.719711 3.5106 0.674695 3.60312 0.654137C4.29635 0.512173 4.97957 0.325109 5.64843 0.0941367C6.1406 -0.0939925 7.35906 -0.673618 7.85561 -0.936234Z"
                              fill="#7B7F95" />
                          </g>
                          <defs>
                            <clipPath id="clip0_360_8658">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </figure>

                      <p class="title">
                        Responsive Seller
                      </p>
                    </div>

                    <div class="badge">
                      <figure class="badge-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M10.1463 11.8789C10.0986 11.8859 10.0504 11.8894 10.0021 11.8894H5.11321C5.06494 11.8894 5.01675 11.8859 4.96899 11.8789C4.92176 12.2377 4.79954 12.6739 4.54399 13.1848C4.51857 13.2356 4.50657 13.2921 4.50913 13.3488C4.51168 13.4056 4.52871 13.4608 4.55859 13.5091C4.58847 13.5574 4.63022 13.5973 4.67985 13.625C4.72949 13.6527 4.78538 13.6672 4.84221 13.6672C5.1684 13.6672 5.62732 13.4188 6.01135 13.0343C6.1872 12.8572 6.34141 12.6598 6.47074 12.4464C6.38924 12.784 6.33543 13.0966 6.33543 13.3338C6.33543 14.4163 7.36477 14.9434 7.40857 14.9653C7.45486 14.9884 7.5059 15.0005 7.55766 15.0005C7.60941 15.0005 7.66045 14.9884 7.70674 14.9653C7.75055 14.9434 8.77988 14.4163 8.77988 13.3338C8.77988 13.0966 8.72608 12.784 8.64458 12.4464C8.77391 12.6598 8.92812 12.8572 9.10397 13.0343C9.48799 13.4188 9.94691 13.6672 10.2731 13.6672C10.3299 13.6672 10.3858 13.6526 10.4354 13.625C10.4851 13.5973 10.5268 13.5574 10.5567 13.5091C10.5865 13.4607 10.6036 13.4056 10.6061 13.3488C10.6087 13.2921 10.5967 13.2356 10.5712 13.1848C10.3158 12.6739 10.1935 12.2377 10.1463 11.8789Z"
                            fill="#7B7F95" />
                          <path
                            d="M13.9782 8.75806C13.6272 7.83911 12.6741 7.22168 11.6062 7.22168C10.7622 7.22168 9.95146 7.56514 9.30063 8.19324C9.21918 8.45382 8.70854 9.61154 8.62207 9.88828H10.0019C10.2641 9.88815 10.5158 9.99137 10.7024 10.1756C10.7542 10.1377 10.809 10.1042 10.8663 10.0753C11.248 9.88447 11.7444 9.90428 12.1014 10.1246C12.332 10.2669 12.6073 10.5536 12.6081 11.111C12.6082 11.1753 12.6269 11.2382 12.662 11.2921C12.697 11.346 12.7469 11.3887 12.8056 11.4149C12.8643 11.4411 12.9294 11.4497 12.9929 11.4398C13.0564 11.4299 13.1158 11.4018 13.1637 11.3589C14.0201 10.593 14.317 9.64506 13.9782 8.75806Z"
                            fill="#7B7F95" />
                          <path
                            d="M6.49309 9.88828C6.40662 9.61154 5.89587 8.45382 5.81453 8.19324C5.16356 7.56514 4.35287 7.22168 3.50898 7.22168C2.44117 7.22168 1.48794 7.83911 1.13694 8.75806C0.798054 9.64506 1.09503 10.593 1.95142 11.3589C1.99935 11.4018 2.05866 11.4299 2.12219 11.4398C2.18573 11.4497 2.25078 11.4411 2.3095 11.4149C2.36823 11.3887 2.41811 11.346 2.45315 11.2921C2.48819 11.2382 2.50688 11.1753 2.50697 11.111C2.50783 10.5536 2.78297 10.2669 3.01367 10.1246C3.37078 9.90428 3.86714 9.88447 4.24881 10.0753C4.30609 10.1042 4.36091 10.1377 4.4127 10.1756C4.5993 9.99139 4.85098 9.88817 5.11317 9.88828H6.49309Z"
                            fill="#7B7F95" />
                          <path
                            d="M6.7396 9.88865H8.37521C8.48335 9.58927 8.60074 9.25561 8.71927 8.90348C9.18546 7.51868 9.66852 5.85156 9.66852 4.88878C9.66852 2.99474 7.86968 1.17417 7.7931 1.09762C7.73059 1.03512 7.64581 1 7.5574 1C7.469 1 7.38422 1.03512 7.32171 1.09762C7.24513 1.17417 5.44629 2.99474 5.44629 4.88878C5.44629 5.85156 5.92935 7.51868 6.39554 8.90348C6.51407 9.25561 6.63146 9.58927 6.7396 9.88865Z"
                            fill="#7B7F95" />
                          <path
                            d="M10.0009 10.2217H5.11198C4.74379 10.2217 4.44531 10.5201 4.44531 10.8883C4.44531 11.2565 4.74379 11.555 5.11198 11.555H10.0009C10.3691 11.555 10.6675 11.2565 10.6675 10.8883C10.6675 10.5201 10.3691 10.2217 10.0009 10.2217Z"
                            fill="#7B7F95" />
                        </svg>
                      </figure>

                      <p class="title">
                        Reliable Vendor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default page