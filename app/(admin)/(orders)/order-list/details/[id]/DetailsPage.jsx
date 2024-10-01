'use client'
import GlobalSearch from '@/components/admin/GlobalSearch'
import Progress6 from '@/components/admin/progressbar/Progress6'
import axiosInstance from '@/lib/axiosInstance'
import { formatDate } from '@/utils/formatDate'
import React from 'react'


function DetailsPage({ orderDetails }) {

  const downloadInvoice = async () => {
    try {
      const response = await axiosInstance.get(`/seller-panel-api/frontend/download-order-invoice/${orderDetails?.order?.id}/`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;

      link.setAttribute('download', `invoice_${orderDetails?.order?.id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading the invoice:', error);
    }
  };

  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                <div className="d-flex flex-column gap-2">
                  <h1 className="title">Order Details</h1>
                  <div className="breadcrumb-inner">
                    <ul className="list-unstyled d-flex align-items-center">
                      <li className="shopping-icon">
                        <a href="/">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.24958 5V5.625H4.59374C3.79374 5.625 3.12374 6.22833 3.03958 7.02417L1.98708 17.0242C1.96418 17.242 1.98733 17.4621 2.05501 17.6704C2.12268 17.8787 2.23338 18.0704 2.37993 18.2331C2.52647 18.3958 2.70558 18.5259 2.90564 18.615C3.10571 18.704 3.32226 18.75 3.54124 18.75H16.4579C16.6769 18.75 16.8934 18.704 17.0935 18.615C17.2936 18.5259 17.4727 18.3958 17.6192 18.2331C17.7658 18.0704 17.8765 17.8787 17.9441 17.6704C18.0118 17.4621 18.035 17.242 18.0121 17.0242L16.9596 7.02417C16.9192 6.64012 16.7381 6.28463 16.4511 6.02626C16.1641 5.76789 15.7916 5.62494 15.4054 5.625H13.7496V5C13.7496 4.00544 13.3545 3.05161 12.6512 2.34835C11.948 1.64509 10.9941 1.25 9.99958 1.25C9.00501 1.25 8.05119 1.64509 7.34793 2.34835C6.64466 3.05161 6.24958 4.00544 6.24958 5ZM9.99958 2.5C9.33654 2.5 8.70065 2.76339 8.23181 3.23223C7.76297 3.70107 7.49958 4.33696 7.49958 5V5.625H12.4996V5C12.4996 4.33696 12.2362 3.70107 11.7673 3.23223C11.2985 2.76339 10.6626 2.5 9.99958 2.5ZM7.49958 9.375C7.49958 10.038 7.76297 10.6739 8.23181 11.1428C8.70065 11.6116 9.33654 11.875 9.99958 11.875C10.6626 11.875 11.2985 11.6116 11.7673 11.1428C12.2362 10.6739 12.4996 10.038 12.4996 9.375V8.75C12.4996 8.58424 12.5654 8.42527 12.6826 8.30806C12.7998 8.19085 12.9588 8.125 13.1246 8.125C13.2903 8.125 13.4493 8.19085 13.5665 8.30806C13.6837 8.42527 13.7496 8.58424 13.7496 8.75V9.375C13.7496 10.3696 13.3545 11.3234 12.6512 12.0266C11.948 12.7299 10.9941 13.125 9.99958 13.125C9.00501 13.125 8.05119 12.7299 7.34793 12.0266C6.64466 11.3234 6.24958 10.3696 6.24958 9.375V8.75C6.24958 8.58424 6.31542 8.42527 6.43263 8.30806C6.54984 8.19085 6.70882 8.125 6.87458 8.125C7.04034 8.125 7.19931 8.19085 7.31652 8.30806C7.43373 8.42527 7.49958 8.58424 7.49958 8.75V9.375Z"
                              fill="#7B7F95" />
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
                          Order Management
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
                          Orders
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
                <div className="d-flex align-items-center gap-3">
                  <button className="primary-50-button" onClick={downloadInvoice}>Download Invoice</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="order-details">
            <div className="order-details-inner">
              <div className="order-details-inner-head">
                <h1 className="heading">
                  Order Details
                </h1>
              </div>
              <div className="order-details-inner-body">
                <div className="row g-4 g-xl-5">
                  <div className="col-xl-4">
                    <div className="d-flex flex-column gap-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Date & Time
                        </p>
                        <p className="bold-text">
                          {orderDetails?.order?.created_at
                            ? new Date(orderDetails.order.created_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }) +
                            ' ' +
                            new Date(orderDetails.order.created_at).toLocaleTimeString('en-US', {
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            })
                            : 'Loading...'}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Order ID
                        </p>
                        <p className="bold-text">
                          #{orderDetails?.order?.order_id}
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
                          {orderDetails?.order?.customer?.full_name}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Contact
                        </p>
                        <p className="bold-text">
                          {orderDetails?.order?.customer?.phone_number}
                        </p>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="light-text">
                          Email
                        </p>
                        <p className="bold-text">
                          {orderDetails?.order?.customer?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="d-flex justify-content-end align-items-center h-100">
                      <div className="d-flex align-items-center gap-2">
                        <p className="light-text">Status</p>
                        <p className="status pending">{orderDetails?.order?.payment_status}</p>
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
                  Delivery Information
                </h1>
              </div>
              <div className="order-details-inner-body">
                <div className="row g-4 g-xl-5">
                  {/* <div className="col-xl-4">
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Shipping Status
                          </p>
                          <p className="bold-text">
                            Warehouse
                          </p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Delivery Method
                          </p>
                          <p className="bold-text">
                            Express
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-xl-4">
                    <div className="d-flex flex-column gap-1">
                      <p className="light-text">
                        Shipping Address
                      </p>
                      <p className="bold-text">
                        {orderDetails?.order?.shipping_address}
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
                  Payment Details
                </h1>
              </div>
              <div className="order-details-inner-body">
                <div className="row g-4 g-xl-5">
                  <div className="col-xl-4">
                    <div className="row">
                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Method
                          </p>
                          <p className="bold-text">
                            {orderDetails?.order?.payment_method}
                          </p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="d-flex flex-column gap-1">
                          <p className="light-text">
                            Payment Status:
                          </p>
                          <p className="bold-text">
                            {orderDetails?.order?.payment_status}
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

        <section className="mt-5">
          <div className="order-details">
            <div className="order-details-inner">
              <div className="order-details-inner-head">
                <h1 className="heading">
                  Purchase Details
                </h1>
              </div>

              <div className="order-management-body-inner">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="thead-light">
                      <tr>
                        <th>Product</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">rice per Unit</th>
                        <th className="text-center">Total Price</th>
                        <th className="text-center">status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails?.items?.map((item) => (
                        <React.Fragment key={item?.order_item_id}>
                          <tr>
                            <td className="border-bottom-0">
                              <div className="d-flex align-items-center gap-2 order-details-product">
                                <div className="">
                                  <p className="itemName-text">
                                    Purolator Oil Filter 133500I99 – Fits Toyota Qualis
                                  </p>
                                  <div className="d-flex align-items-center gap-2 mt-1">
                                    <p className="light-text">manufacturer: <span>ZZVF</span></p>
                                    <p className="light-text">Part Number: <span>ZZVF</span></p>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="border-bottom-0">
                              <p className="id-text text-center">
                                2
                              </p>
                            </td>

                            <td className="border-bottom-0">
                              <p className="id-text text-center">
                                10,000 Tk
                              </p>
                            </td>

                            <td className="border-bottom-0">
                              <p className="id-text text-center">
                                20,000 Tk
                              </p>
                            </td>

                            <td className="border-bottom-0 text-center">
                              <div className="">
                                <span className="status processing ">Processing</span>
                                <p className="delivered-time mt-2">Delivered On: 05 Feb 2024 </p>
                              </div>
                            </td>

                            <td className="text-center border-bottom-0">
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

                          <tr>
                            <td colspan="6" className="border-top-0">
                              <Progress6 />
                            </td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="row g-4 g-xl-5">
            <div className="col-lg-6">
              <div className="order-details">
                <div className="order-details-inner">
                  <div className="order-details-inner-head">
                    <h1 className="heading">
                      Additional Note
                    </h1>
                  </div>

                  <div className="order-details-inner-body">
                    <div className="row g-4 g-xl-5">
                      <p className="bold-text">Please deliver as soon as possible..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="total-summary">
                <h1 className="heading">
                  Total Summary
                </h1>

                <div className="d-flex flex-column gap-3">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <p className="light-text">Subtotal</p>
                      <p className="bold-text">10,000 Tk</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <p className="light-text">Shipping Cost</p>
                      <p className="bold-text">+ 200 Tk</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <p className="light-text">Discount</p>
                      <p className="color-text">- 500 Tk</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <p className="light-text">Commission</p>
                      <p className="color-text">- 200 Tk</p>
                    </div>
                  </div>

                  <div className="border-top pt-3">
                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <p className="total-text">Subtotal</p>
                      <p className="total-color-text">10,000 Tk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  )
}

export default DetailsPage