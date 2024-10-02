'use client';
import React from 'react'
import GlobalSearch from '@/components/admin/GlobalSearch'
import moment from 'moment'
import { getAuthUser } from '@/utils/auth';

function DashBoardPage({ dashBoardInfo }) {
  const colorBadge = [
    'flagship-store',
    'top-seller',
    'new-arrival',
    'customer-favorite',
    'fast-shipper',
    'certified-store',
  ];
  const sellerInfo = getAuthUser();
  return (
    <div id="content">
      <div className="main-content">
        <div className="inner-content">
          <GlobalSearch />
        </div>

        <div className="page-header">
          <div className="d-flex flex-column gap-1">
            <h1 className="page-title">
              Welcome back, {sellerInfo?.full_name}
            </h1>
            <p className="page-text">
              Track, manage and forecast your customers and orders.
            </p>
          </div>
        </div>

        <div className="sales-details">
          <div className="row g-4">
            <div className="col-12">
              <div className="sales-details-cart">
                <div className="top-content">
                  <h4 className="title">Total Revenue</h4>
                  {/* <figure className="three-dots-icon">
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
                  </figure> */}
                </div>

                <div className="bottom-content">
                  <div className="bottom-content-text">
                    <h2 className="number">
                      {dashBoardInfo?.props?.dashboardinfo?.report?.revenue}
                    </h2>
                    {/* <div className="increase-inner">
                      <figure className="increase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.99984 15.8334V4.16675M9.99984 4.16675L4.1665 10.0001M9.99984 4.16675L15.8332 10.0001"
                            stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </figure>
                      <p className="increase-text">
                        <span className="increase">40%</span> vs last month
                      </p>
                    </div> */}
                  </div>

                  <figure className="increase-graph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="99"
                      height="50"
                      viewBox="0 0 99 50"
                      fill="none"
                    >
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="#ECFDF3"
                      />
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="url(#paint0_linear_1_13305)"
                      />
                      <path
                        d="M1.6665 49C15.3056 44.4536 19.7568 26.9737 33.6665 25C46.4906 23.1804 52.9367 39.9551 65.6665 37C81.1037 33.4164 82.0696 2.29974 97.6665 1"
                        stroke="#12B76A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_13305"
                          x1="49.6665"
                          y1="1"
                          x2="49.6665"
                          y2="49"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.641167"
                            stop-color="white"
                            stop-opacity="0"
                          />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="sales-details-cart">
                <div className="top-content">
                  <h4 className="title">Total Sales</h4>
                  {/* <figure className="three-dots-icon">
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
                  </figure> */}
                </div>

                <div className="bottom-content">
                  <div className="bottom-content-text">
                    <h2 className="number">
                      {dashBoardInfo?.props?.dashboardinfo?.report?.total_order}
                    </h2>
                    {/* <div className="increase-inner">
                      <figure className="increase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.99984 15.8334V4.16675M9.99984 4.16675L4.1665 10.0001M9.99984 4.16675L15.8332 10.0001"
                            stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </figure>
                      <p className="increase-text">
                        <span className="increase">20%</span> vs last month
                      </p>
                    </div> */}
                  </div>

                  <figure className="increase-graph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="99"
                      height="50"
                      viewBox="0 0 99 50"
                      fill="none"
                    >
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="#ECFDF3"
                      />
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="url(#paint0_linear_1_13305)"
                      />
                      <path
                        d="M1.6665 49C15.3056 44.4536 19.7568 26.9737 33.6665 25C46.4906 23.1804 52.9367 39.9551 65.6665 37C81.1037 33.4164 82.0696 2.29974 97.6665 1"
                        stroke="#12B76A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_13305"
                          x1="49.6665"
                          y1="1"
                          x2="49.6665"
                          y2="49"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.641167"
                            stop-color="white"
                            stop-opacity="0"
                          />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="sales-details-cart">
                <div className="top-content">
                  <h4 className="title">Total Service Provided</h4>
                  {/* <figure className="three-dots-icon">
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
                  </figure> */}
                </div>

                <div className="bottom-content">
                  <div className="bottom-content-text">
                    <h2 className="number">
                      {
                        dashBoardInfo?.props?.dashboardinfo?.report
                          ?.total_service_booking
                      }
                    </h2>
                    {/* <div className="increase-inner">
                      <figure className="increase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path d="M10.3333 4.16675V15.8334M10.3333 15.8334L16.1667 10.0001M10.3333 15.8334L4.5 10.0001"
                            stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </figure>
                      <p className="decrease-text">
                        <span className="decrease">10%</span> vs last month
                      </p>
                    </div> */}
                  </div>

                  <figure className="increase-graph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="50"
                      viewBox="0 0 98 50"
                      fill="none"
                    >
                      <path
                        d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
                        fill="#FEF3F2"
                      />
                      <path
                        d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
                        fill="url(#paint0_linear_1_13337)"
                      />
                      <path
                        d="M97 49C83.3609 44.4536 78.9097 26.9737 65 25C52.1759 23.1804 45.7298 39.9551 33 37C17.5628 33.4164 16.5969 2.29974 1 1"
                        stroke="#F04438"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_13337"
                          x1="49"
                          y1="1"
                          x2="49"
                          y2="49"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.641167"
                            stop-color="white"
                            stop-opacity="0"
                          />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="notifications-badges">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-4">
                <h1 className="title">Recent Notifications</h1>
                <div className="recent-notification-inner">
                  {dashBoardInfo?.props?.dashboardinfo?.notification?.map(
                    notification => (
                      <div
                        className="recent-notification-inner-cart"
                        key={notification?.id}
                      >
                        <div className="d-flex gap-3">
                          <figure className="success-img">
                            <img
                              src="./assets/images/success-icon.png"
                              alt=""
                            />
                          </figure>
                          <div className="cart-content">
                            <div className="d-flex flex-column gap-2">
                              <div className="d-flex flex-column gap-1">
                                <h3 className="title">
                                  {notification?.message}
                                </h3>
                                {/* <p className="details">A new order has been placed.</p> */}
                              </div>
                              {/* <div className="d-flex align-items-center gap-3">
                              <a href="" className="dsismiss-btn">
                                Dismiss
                              </a>
                              <a href="#" className="viewChanges-btn">
                                View changes
                              </a>
                            </div> */}
                            </div>
                          </div>
                        </div>

                        <div className="notification-inner-cart-right">
                          {/* <button className="close-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </button> */}
                          <div className="d-flex align-items-center gap-2">
                            <figure className="date-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                                  stroke="#6B7280"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </figure>
                            <p className="notification-time">
                              {moment(notification?.created_at).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="d-flex flex-column gap-4">
                <h1 className="title">Earned Badges</h1>
                <div className="badges-inner">
                  {/* <h2 className="sub-title">
                    You have earned 6 badges out of 12
                  </h2> */}
                  <div className="d-flex flex-wrap gap-3">
                    {dashBoardInfo?.props?.dashboardinfo?.earned_badges?.map(
                      earnedBadge => (
                        <div
                          key={earnedBadge?.id}
                          className={`badge ${
                            colorBadge[
                              Math.floor(Math.random() * colorBadge.length)
                            ]
                          }`}
                        >
                          <figure className="badge-img">
                            <img
                              src={earnedBadge?.icon}
                              width={15}
                              height={15}
                            />
                          </figure>
                          <p className="title">{earnedBadge?.badge}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage