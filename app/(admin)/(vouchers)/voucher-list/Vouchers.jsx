'use client';

import Link from 'next/link';
import ConfirmModal from '@/components/admin/confirm-modal/ConfirmModal';
import { useEffect, useState } from 'react';

import axiosInstance from '@/lib/axiosInstance';
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import { useRouter, useSearchParams } from 'next/navigation';
function Vouchers() {
  const router = useRouter();

  const [activeCount, setActiveCount] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [inActiveCount, setInactiveCount] = useState(0);
  const [allVouchersCount, setAllVouchersCount] = useState(0);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);

  // Pagination and filtering state
  const [filterBy, setFilterBy] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const searchParams = useSearchParams();

  const [voucherList, setVoucherList] = useState();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openConfirmModal = item_id => {
    setSelectedItemId(item_id);
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  const handleDelete = async id => {
    try {
      const response = await axiosInstance.delete(
        `/seller-panel-api/frontend/delete-voucher/${selectedItemId}/`
      );
      // Update local state to remove deleted voucher
      setVoucherList(prevList =>
        prevList.filter(item => item.id !== selectedItemId)
      );

      toast.custom(t => (
        <SuccessToast
          message={response.data.message}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
      setIsConfirmModalOpen(false);
    } catch (error) {
      toast.custom(t => (
        <AlertToast
          message={error.response.data.message || 'Something Wrong !'}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    }
  };

  const fetchVouchers = async (
    filter = filterBy,
    pageSize = pageSize,
    page
  ) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/seller-panel-api/frontend/voucher-list/?filter_by=${filter}&page=${page}&page_size=${pageSize}`
      );
      const data = response?.data?.results;
      setVoucherList(data?.vouchers || []);
      setActiveCount(data?.activeVouchersCount || 0);
      setInactiveCount(data?.inactiveVouchersCount || 0);
      setAllVouchersCount(data?.allVouchersCount || 0);
      if (response?.data?.next != null) setNextPage(response?.data?.next);
      if (response?.data?.prev != null) setPrevPage(response?.data?.prev);
      setTotalPage(Math.ceil(data?.allVouchersCount / pageSize));
    } catch (error) {
      console.error('Error fetching vouchers:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const filterParam = searchParams.get('filter_by') || '';
    const pageSizeParam = searchParams.get('page_size') || pageSize;
    const page = searchParams.get('page') || 1;

    setFilterBy(filterParam);
    setPageSize(pageSizeParam);
    setCurrentPage(page);
    fetchVouchers(filterParam, pageSizeParam, page);
  }, [searchParams]);

  // Handle filter change
  const filter = newFilter => {
    setFilterBy(newFilter);
    router.push(
      `/voucher-list/?filter_by=${newFilter}&page=${currentPage}&page_size=${pageSize}`
    );
  };

  // Handle page size change
  const goToPage = page => {
    setCurrentPage(page);
    router.push(
      `/voucher-list/?filter_by=${filterBy}&page=${page}&page_size=${pageSize}`
    );
  };

  // Handle page size change
  const goToNext = () => {
    let curP = parseInt(currentPage) + 1;
    if (totalPage + 1 <= curP) return;
    setCurrentPage(curP);
    router.push(
      `/voucher-list/?filter_by=${filterBy}&page=${curP}&page_size=${pageSize}`
    );
  };
  const goToPrev = () => {
    let curP = parseInt(currentPage) - 1;
    if (curP == 0) return;
    setCurrentPage(curP);
    router.push(
      `/voucher-list/?filter_by=${filterBy}&page=${curP}&page_size=${pageSize}`
    );
  };
  return (
    <main id="content">
      <div className="inner-content">
        <section className="page-top-section">
          <div className="page-top-section-inner">
            <form className="search-form">
              <label for="search-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>

              <input
                className="page-search-input"
                type="text"
                name=""
                id="search-input"
                placeholder="Search"
              />
            </form>

            <a href="./notification.html" className="notification-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.25022 9C5.25022 7.20979 5.96138 5.4929 7.22725 4.22703C8.49312 2.96116 10.21 2.25 12.0002 2.25C13.7904 2.25 15.5073 2.96116 16.7732 4.22703C18.0391 5.4929 18.7502 7.20979 18.7502 9V9.75C18.7502 11.873 19.5502 13.807 20.8682 15.27C20.9503 15.361 21.0089 15.4707 21.0388 15.5896C21.0686 15.7084 21.0689 15.8328 21.0396 15.9518C21.0103 16.0708 20.9523 16.1808 20.8707 16.2722C20.789 16.3636 20.6862 16.4335 20.5712 16.476C19.0272 17.046 17.4112 17.466 15.7402 17.719C15.7778 18.2331 15.7091 18.7495 15.5381 19.2359C15.3672 19.7222 15.0979 20.1681 14.7469 20.5457C14.396 20.9233 13.9709 21.2245 13.4983 21.4304C13.0257 21.6364 12.5157 21.7427 12.0002 21.7427C11.4847 21.7427 10.9747 21.6364 10.5021 21.4304C10.0295 21.2245 9.60448 20.9233 9.25351 20.5457C8.90254 20.1681 8.63319 19.7222 8.46229 19.2359C8.29138 18.7495 8.22259 18.2331 8.26022 17.719C6.61187 17.4692 4.99321 17.0524 3.42922 16.475C3.31435 16.4326 3.21161 16.3627 3.12998 16.2715C3.04834 16.1802 2.99029 16.0703 2.9609 15.9515C2.9315 15.8326 2.93166 15.7084 2.96135 15.5896C2.99103 15.4708 3.04936 15.3611 3.13122 15.27C4.49802 13.7567 5.2533 11.7892 5.25022 9.75V9ZM9.75222 17.9C9.73942 18.2032 9.7881 18.5058 9.8953 18.7897C10.0025 19.0736 10.166 19.3329 10.376 19.5519C10.586 19.771 10.8382 19.9453 11.1173 20.0644C11.3964 20.1835 11.6968 20.2448 12.0002 20.2448C12.3037 20.2448 12.604 20.1835 12.8831 20.0644C13.1622 19.9453 13.4144 19.771 13.6244 19.5519C13.8344 19.3329 13.9979 19.0736 14.1051 18.7897C14.2123 18.5058 14.261 18.2032 14.2482 17.9C12.7526 18.0347 11.2479 18.0347 9.75222 17.9Z"
                  fill="#7B7F95"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="title">Vouchers</h1>

                <div className="d-flex align-items-center gap-3">
                  <Link href="/add-voucher" className="add-product-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332"
                        stroke="white"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Add Voucher</span>
                  </Link>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 all-buttons-inner">
                <button
                  onClick={() => filter('')}
                  className={`manage-products-btn ${
                    filterBy === '' ? 'active' : ''
                  }`}
                >
                  <span className="text">All</span>
                  <span className="number">{allVouchersCount}</span>
                </button>

                <button
                  onClick={() => filter('active')}
                  className={`manage-products-btn ${
                    filterBy === 'active' ? 'active' : ''
                  }`}
                >
                  <span className="text">Active</span>
                  <span className="number">{activeCount || 0}</span>
                </button>

                <button
                  onClick={() => filter('inactive')}
                  className={`manage-products-btn ${
                    filterBy === 'inactive' ? 'active' : ''
                  }`}
                >
                  <span className="text">Inactive</span>
                  <span className="number"> {inActiveCount}</span>
                </button>

                {/* <button className="manage-products-btn">
                  <span className="text">Draft</span>
                  <span className="number">0</span>
                </button>

                <button className="manage-products-btn">
                  <span className="text">Scheduled</span>
                  <span className="number">0</span>
                </button>

                <button className="manage-products-btn">
                  <span className="text">Expired</span>
                  <span className="number">0</span>
                </button> */}

                {/* <!-- <button className="manage-products-btn">
                  <span className="text">Deleted</span>
                  <span className="number">0</span>
                </button> --> */}
              </div>
            </div>

            <div className="order-management-body">
              <div className="order-management-body-top">
                <div className="order-management-search-inner">
                  <form action="" className="order-form">
                    {/* <div className="order-input">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                          stroke="#667085"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <input type="text" name="" id="" placeholder="Order No" />
                    </div> */}
                  </form>
                </div>

                {/* <div className="box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M3.97208 2.21607C3.89373 2.13766 3.80069 2.07546 3.69828 2.03303C3.59588 1.99059 3.48612 1.96875 3.37527 1.96875C3.26442 1.96875 3.15466 1.99059 3.05226 2.03303C2.94985 2.07546 2.85681 2.13766 2.77846 2.21607L1.09096 3.90357C0.932673 4.06185 0.84375 4.27653 0.84375 4.50038C0.84375 4.72423 0.932673 4.93891 1.09096 5.09719C1.24924 5.25548 1.46392 5.3444 1.68777 5.3444C1.91162 5.3444 2.1263 5.25548 2.28458 5.09719L2.53152 4.8497V15.1879C2.53152 15.4117 2.62042 15.6263 2.77865 15.7845C2.93688 15.9427 3.15149 16.0316 3.37527 16.0316C3.59905 16.0316 3.81366 15.9427 3.97189 15.7845C4.13013 15.6263 4.21902 15.4117 4.21902 15.1879V4.8497L4.46596 5.09719C4.62424 5.25548 4.83892 5.3444 5.06277 5.3444C5.28662 5.3444 5.5013 5.25548 5.65958 5.09719C5.81787 4.93891 5.90679 4.72423 5.90679 4.50038C5.90679 4.27653 5.81787 4.06185 5.65958 3.90357L3.97208 2.21607Z"
                      fill="#60637A"
                    />
                    <path
                      d="M16.3125 2.53125H7.3125C7.08872 2.53125 6.87411 2.62014 6.71588 2.77838C6.55764 2.93661 6.46875 3.15122 6.46875 3.375C6.46875 3.59878 6.55764 3.81339 6.71588 3.97162C6.87411 4.12986 7.08872 4.21875 7.3125 4.21875H16.3125C16.5363 4.21875 16.7509 4.12986 16.9091 3.97162C17.0674 3.81339 17.1562 3.59878 17.1562 3.375C17.1562 3.15122 17.0674 2.93661 16.9091 2.77838C16.7509 2.62014 16.5363 2.53125 16.3125 2.53125Z"
                      fill="#60637A"
                    />
                    <path
                      d="M14.0625 6.46875H7.3125C7.08872 6.46875 6.87411 6.55764 6.71588 6.71588C6.55764 6.87411 6.46875 7.08872 6.46875 7.3125C6.46875 7.53628 6.55764 7.75089 6.71588 7.90912C6.87411 8.06736 7.08872 8.15625 7.3125 8.15625H14.0625C14.2863 8.15625 14.5009 8.06736 14.6591 7.90912C14.8174 7.75089 14.9062 7.53628 14.9062 7.3125C14.9062 7.08872 14.8174 6.87411 14.6591 6.71588C14.5009 6.55764 14.2863 6.46875 14.0625 6.46875Z"
                      fill="#60637A"
                    />
                    <path
                      d="M11.8125 10.4062H7.3125C7.08872 10.4062 6.87411 10.4951 6.71588 10.6534C6.55764 10.8116 6.46875 11.0262 6.46875 11.25C6.46875 11.4738 6.55764 11.6884 6.71588 11.8466C6.87411 12.0049 7.08872 12.0938 7.3125 12.0938H11.8125C12.0363 12.0938 12.2509 12.0049 12.4091 11.8466C12.5674 11.6884 12.6562 11.4738 12.6562 11.25C12.6562 11.0262 12.5674 10.8116 12.4091 10.6534C12.2509 10.4951 12.0363 10.4062 11.8125 10.4062Z"
                      fill="#60637A"
                    />
                    <path
                      d="M9.5625 14.3438H7.3125C7.08872 14.3438 6.87411 14.4326 6.71588 14.5909C6.55764 14.7491 6.46875 14.9637 6.46875 15.1875C6.46875 15.4113 6.55764 15.6259 6.71588 15.7841C6.87411 15.9424 7.08872 16.0312 7.3125 16.0312H9.5625C9.78628 16.0312 10.0009 15.9424 10.1591 15.7841C10.3174 15.6259 10.4062 15.4113 10.4062 15.1875C10.4062 14.9637 10.3174 14.7491 10.1591 14.5909C10.0009 14.4326 9.78628 14.3438 9.5625 14.3438Z"
                      fill="#60637A"
                    />
                  </svg>
                  <select className="wide selectize">
                    <option data-display="Select">Newest</option>
                    <option value="1">Oldest</option>
                  </select>
                </div> */}
              </div>

              {!loading ? (
                <div className="order-management-body-inner">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">
                            {/* <input
                            className="table-header-checkbox"
                            type="checkbox"
                            id="table-header-checkbox"
                          /> */}
                            <label for="table-header-checkbox" tabindex="4">
                              Discount Type
                            </label>
                          </th>
                          {/* <th>Code</th> */}
                          <th className="text-center">Discount Value</th>
                          <th className="text-center">voucher Used</th>
                          <th className="text-center">STATUS</th>
                          <th className="text-center">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {voucherList?.map((voucher, index) => (
                          <tr key={voucher?.id}>
                            <td className="product-info-inner">
                              <div className="product-info">
                                {/* <input
                                className="table-header-checkbox"
                                type="checkbox"
                                id="table-header-checkbox1"
                              /> */}
                                <label
                                  className="id-text text-capitalize"
                                  for="table-header-checkbox1"
                                  tabindex="4"
                                >
                                  {voucher?.discount_type}
                                </label>
                              </div>
                            </td>

                            {/* <td>
                            <p className="id-text"> {voucher.voucher_code}</p>
                          </td> */}

                            <td>
                              <p className="id-text text-center">
                                {voucher?.discount_value} Tk
                              </p>
                            </td>

                            <td className="text-center">
                              <p className="id-text">{voucher?.used_count}</p>
                            </td>

                            <td className="text-center">
                              {voucher?.is_active ? (
                                <span className="badge bg-success">Active</span>
                              ) : (
                                <span className="badge bg-danger">
                                  Inactive
                                </span>
                              )}
                            </td>

                            <td className="text-center">
                              <div className="d-flex gap-2 align-items-center justify-content-center">
                                <Link
                                  href={'/edit-voucher/' + voucher?.id}
                                  className="edit-btn"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                  >
                                    <path
                                      d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                      stroke="#A7AAB9"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </Link>

                                <button
                                  className="delete-btn"
                                  onClick={() => openConfirmModal(voucher?.id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                  >
                                    <path
                                      d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                      stroke="#A7AAB9"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="p-4">Loading...</div>
              )}
            </div>
          </div>
        </section>

        {allVouchersCount > pageSize ? (
          <section className="pagination-section">
            <div className="pagination-section-inner">
              <div className="left">
                <p className="text">
                  Showing {currentPage * pageSize - pageSize + 1} to{' '}
                  {currentPage * pageSize > allVouchersCount
                    ? allVouchersCount
                    : currentPage * pageSize}{' '}
                  of {allVouchersCount} entries
                </p>
              </div>
              <div className="right">
                <nav className="pagination-nav">
                  <ul className="list-unstyled d-flex align-items-center gap-2">
                    <li className="pagination-nav-list">
                      <button
                        className="pagination-nav-link previous"
                        onClick={goToPrev}
                      >
                        « Previous
                      </button>
                    </li>
                    {Array.from({ length: totalPage }, (_, index) => (
                      <li
                        key={index + 1}
                        className={`pagination-nav-list ${
                          currentPage === index + 1 ? 'active' : ''
                        }`}
                      >
                        <a
                          className={`pagination-nav-link ${
                            currentPage == index + 1 ? 'btn btn-primary' : ''
                          }`}
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            goToPage(index + 1);
                          }}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}

                    <li className="pagination-nav-list">
                      <button
                        className="pagination-nav-link next"
                        onClick={goToNext}
                      >
                        Next »
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        ) : (
          ''
        )}
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        title="Delete Item"
        message="Are you sure you want to delete this item ?"
        onConfirm={handleDelete}
        onClose={closeConfirmModal}
        button_name="Delete"
      />
    </main>
  );
}

export default Vouchers;
