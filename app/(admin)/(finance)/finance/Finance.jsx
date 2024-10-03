'use client';

import GlobalSearch from '@/components/admin/GlobalSearch';
import { TRANSACTION_STATUS } from '@/lib/TransactionStatus';
import React, { useEffect, useState } from 'react';
import styles from './Finance.module.css';
import Select from 'react-select';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/lib/axiosInstance';
import moment from 'moment';
import EmptyFinance from './EmptyFinance';

const dateRanges = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 Days', value: 'last7days' },
  { label: 'Last 30 Days', value: 'last30days' },
];
const statusClasses = {
  Pending: 'pending',
  Paid: 'delivered',
  Cancelled: 'cancelled',
  Hold: 'pending',
  InProgress: 'processing',
};
const pageSize = 10;
const STATUS = TRANSACTION_STATUS;

export default function Finance() {
  const router = useRouter();
  const [revenue, setRevenue] = useState('0');
  const [commission, setCommission] = useState('0');
  const [storeRevenue, setStoreRevenue] = useState('0');
  const [payouts, setPayouts] = useState('0');
  const [refunds, setRefunds] = useState('0');
  const [balance, setBalance] = useState('0');
  const [histories, setHistories] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItem, setTotalItem] = useState(1);
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState();
  const [selectedFinanceRange, setSelectedFinanceRange] = useState(null);
  const [selectedTransactionRange, setSelectedTransactionRange] =
    useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        '/seller-panel-api/frontend/finance-report/'
      );
      const data = response?.data?.results;
      setRevenue(data?.total_revenue);
      setCommission(data?.platform_commission_fee);
      setStoreRevenue(data?.net_store_revenue);
      setPayouts(data?.total_payouts);
      setRefunds(data?.total_refunds);
      setBalance(data?.current_balance);
      setHistories(data?.payouts_history);

      setTotalItem(response?.data?.count);
      setTotalPage(Math.ceil(response?.data?.count / pageSize));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePaymentStatus = selectedOption => {
    setPaymentStatus(selectedOption?.id);
  };
  const handleFinanceDateRangeChange = selectedOption => {
    setSelectedFinanceRange(selectedOption);
  };
  const handleTransactionDateRangeChange = selectedOption => {
    setSelectedTransactionRange(selectedOption);
  };

  const getDateRange = range => {
    if (!range) return { startDate: '', endDate: '' };

    const today = moment();
    switch (range.value) {
      case 'today':
        return {
          startDate: today.format('YYYY-MM-DD'),
          endDate: today.format('YYYY-MM-DD'),
        };
      case 'yesterday':
        return {
          startDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
          endDate: moment().format('YYYY-MM-DD'),
        };
      case 'last7days':
        return {
          startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
          endDate: moment().format('YYYY-MM-DD'),
        };
      case 'last30days':
        return {
          startDate: moment().subtract(30, 'days').format('YYYY-MM-DD'),
          endDate: moment().format('YYYY-MM-DD'),
        };
      default:
        return { startDate: '', endDate: '' };
    }
  };

  useEffect(() => {
    const { startDate: financeStartDate, endDate: financeEndDate } =
      getDateRange(selectedFinanceRange);
    const { startDate: transactionStartDate, endDate: transactionEndDate } =
      getDateRange(selectedTransactionRange);

    // Update URL with query parameters
    const queryParams = new URLSearchParams({
      finance_start_date: financeStartDate || '',
      finance_end_date: financeEndDate || '',
      transaction_start_date: transactionStartDate || '',
      transaction_end_date: transactionEndDate || '',
      payment_status: paymentStatus || '',
      // page: currentPage.toString(),
      // page_size: pageSize.toString(),
    });

    router.push(`/finance/?${queryParams.toString()}`);
  }, [
    selectedFinanceRange,
    selectedTransactionRange,
    paymentStatus,
    currentPage,
    pageSize,
  ]);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      const { startDate: financeStartDate, endDate: financeEndDate } =
        getDateRange(selectedFinanceRange);
      const { startDate: transactionStartDate, endDate: transactionEndDate } =
        getDateRange(selectedTransactionRange);
      try {
        const response = await axiosInstance.get(
          '/seller-panel-api/frontend/finance-report/',
          {
            params: {
              finance_start_date: financeStartDate,
              finance_end_date: financeEndDate,
              transaction_start_date: transactionStartDate,
              transaction_end_date: transactionEndDate,
              payment_status: paymentStatus,
              page: currentPage,
              page_size: pageSize,
            },
          }
        );
        const data = response?.data?.results;
        setRevenue(data?.total_revenue);
        setCommission(data?.platform_commission_fee);
        setStoreRevenue(data?.net_store_revenue);
        setPayouts(data?.total_payouts);
        setRefunds(data?.total_refunds);
        setBalance(data?.current_balance);
        setHistories(data?.payouts_history);
        setTotalItem(response?.data?.count);
        setTotalPage(Math.ceil(response?.data?.count / pageSize));
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [
    selectedFinanceRange,
    selectedTransactionRange,
    paymentStatus,
    currentPage,
    pageSize,
  ]);

  // Handle page size change
  const goToPage = page => {
    setCurrentPage(page);
  };
  const goToNext = () => {
    let curP = parseInt(currentPage) + 1;
    if (totalPage + 1 <= curP) return;
    setCurrentPage(curP);
  };
  const goToPrev = () => {
    let curP = parseInt(currentPage) - 1;
    if (curP == 0) return;
    setCurrentPage(curP);
  };
  if (!totalItem) {
    return <EmptyFinance />;
  }

  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="title">Finance</h1>
                <Select
                  className={`selectize ${styles.select}`}
                  options={dateRanges}
                  value={selectedFinanceRange}
                  onChange={handleFinanceDateRangeChange}
                  placeholder="Select Range"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="finance-section">
          <div className="finance-section-inner">
            <div className="d-flex flex-wrap gap-3">
              <div className="revenue-card">
                <h3 className="title">Total Revenue</h3>
                {!loading ? (
                  <h1 className="price">{revenue} Tk</h1>
                ) : (
                  <h1 className="price">Loading...</h1>
                )}
              </div>

              <div className="revenue-card">
                <h3 className="title">Platform Commission Fee</h3>
                {!loading ? (
                  <h1 className="price">{commission} Tk</h1>
                ) : (
                  <h1 className="price">Loading...</h1>
                )}
              </div>

              <div className="revenue-card">
                <h3 className="title">Net Store Revenue</h3>
                {!loading ? (
                  <h1 className="price">{storeRevenue} Tk</h1>
                ) : (
                  <h1 className="price">Loading...</h1>
                )}
              </div>

              <div className="revenue-card">
                <h3 className="title">Total Payouts</h3>
                {!loading ? (
                  <h1 className="price">{payouts} Tk</h1>
                ) : (
                  <h1 className="price">Loading...</h1>
                )}
              </div>

              <div className="revenue-card">
                <h3 className="title">Total Refunds</h3>
                {!loading ? (
                  <h1 className="price">{refunds} Tk</h1>
                ) : (
                  <h1 className="price">Loading...</h1>
                )}
              </div>
            </div>
            <div className="mt-4">
              <p className="title">Balance</p>
              <div className="revenue-card w-100 mt-3">
                <h3 className="title">Total Balance</h3>
                {!loading ? (
                  <h1 className="color-text">{balance} Tk</h1>
                ) : (
                  <h1 className="color-text">Loading...</h1>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="payouts-history-section">
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h1 className="title">Payouts History</h1>
            <div className="d-flex align-items-center gap-3">
              <div className="box">
                <Select
                  className={styles.select}
                  options={STATUS}
                  onChange={handlePaymentStatus}
                  placeholder="Status"
                />
              </div>
               <div className="box">
               {/* <div className="box month-box d-flex align-items-center"> */}
                {/*<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3.97208 2.21607C3.89373 2.13766 3.80069 2.07546 3.69828 2.03303C3.59588 1.99059 3.48612 1.96875 3.37527 1.96875C3.26442 1.96875 3.15466 1.99059 3.05226 2.03303C2.94985 2.07546 2.85681 2.13766 2.77846 2.21607L1.09096 3.90357C0.932673 4.06185 0.84375 4.27653 0.84375 4.50038C0.84375 4.72423 0.932673 4.93891 1.09096 5.09719C1.24924 5.25548 1.46392 5.3444 1.68777 5.3444C1.91162 5.3444 2.1263 5.25548 2.28458 5.09719L2.53152 4.8497V15.1879C2.53152 15.4117 2.62042 15.6263 2.77865 15.7845C2.93688 15.9427 3.15149 16.0316 3.37527 16.0316C3.59905 16.0316 3.81366 15.9427 3.97189 15.7845C4.13013 15.6263 4.21902 15.4117 4.21902 15.1879V4.8497L4.46596 5.09719C4.62424 5.25548 4.83892 5.3444 5.06277 5.3444C5.28662 5.3444 5.5013 5.25548 5.65958 5.09719C5.81787 4.93891 5.90679 4.72423 5.90679 4.50038C5.90679 4.27653 5.81787 4.06185 5.65958 3.90357L3.97208 2.21607Z"
                    fill="#60637A"
                  ></path>
                  <path
                    d="M16.3125 2.53125H7.3125C7.08872 2.53125 6.87411 2.62014 6.71588 2.77838C6.55764 2.93661 6.46875 3.15122 6.46875 3.375C6.46875 3.59878 6.55764 3.81339 6.71588 3.97162C6.87411 4.12986 7.08872 4.21875 7.3125 4.21875H16.3125C16.5363 4.21875 16.7509 4.12986 16.9091 3.97162C17.0674 3.81339 17.1562 3.59878 17.1562 3.375C17.1562 3.15122 17.0674 2.93661 16.9091 2.77838C16.7509 2.62014 16.5363 2.53125 16.3125 2.53125Z"
                    fill="#60637A"
                  ></path>
                  <path
                    d="M14.0625 6.46875H7.3125C7.08872 6.46875 6.87411 6.55764 6.71588 6.71588C6.55764 6.87411 6.46875 7.08872 6.46875 7.3125C6.46875 7.53628 6.55764 7.75089 6.71588 7.90912C6.87411 8.06736 7.08872 8.15625 7.3125 8.15625H14.0625C14.2863 8.15625 14.5009 8.06736 14.6591 7.90912C14.8174 7.75089 14.9062 7.53628 14.9062 7.3125C14.9062 7.08872 14.8174 6.87411 14.6591 6.71588C14.5009 6.55764 14.2863 6.46875 14.0625 6.46875Z"
                    fill="#60637A"
                  ></path>
                  <path
                    d="M11.8125 10.4062H7.3125C7.08872 10.4062 6.87411 10.4951 6.71588 10.6534C6.55764 10.8116 6.46875 11.0262 6.46875 11.25C6.46875 11.4738 6.55764 11.6884 6.71588 11.8466C6.87411 12.0049 7.08872 12.0938 7.3125 12.0938H11.8125C12.0363 12.0938 12.2509 12.0049 12.4091 11.8466C12.5674 11.6884 12.6562 11.4738 12.6562 11.25C12.6562 11.0262 12.5674 10.8116 12.4091 10.6534C12.2509 10.4951 12.0363 10.4062 11.8125 10.4062Z"
                    fill="#60637A"
                  ></path>
                  <path
                    d="M9.5625 14.3438H7.3125C7.08872 14.3438 6.87411 14.4326 6.71588 14.5909C6.55764 14.7491 6.46875 14.9637 6.46875 15.1875C6.46875 15.4113 6.55764 15.6259 6.71588 15.7841C6.87411 15.9424 7.08872 16.0312 7.3125 16.0312H9.5625C9.78628 16.0312 10.0009 15.9424 10.1591 15.7841C10.3174 15.6259 10.4062 15.4113 10.4062 15.1875C10.4062 14.9637 10.3174 14.7491 10.1591 14.5909C10.0009 14.4326 9.78628 14.3438 9.5625 14.3438Z"
                    fill="#60637A"
                  ></path>
                </svg> */}
                {/* <select className="selectize">
                  <option data-display="Select">This Month</option>
                  <option value="1">This Month1</option>
                  <option value="2">This Month2</option>
                </select> */}
                <Select
                  className={styles.select}
                  options={dateRanges}
                  value={selectedTransactionRange}
                  onChange={handleTransactionDateRangeChange}
                  placeholder="Select Range"
                />
              </div>
            </div>
          </div>

          <div className="order-details mt-4">
            <div className="order-details-inner">
              <div className="order-management-body-inner">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th className="rating-header">Date</th>
                        <th className="">Payout ID</th>
                        <th className="">Amount</th>
                        <th className="">Method</th>
                        <th className="text-center Status-header">Status</th>
                      </tr>
                    </thead>
                    {!loading ? (
                      <tbody>
                        {histories.map(history => (
                          <tr key={history?.id}>
                            <td>
                              <p className="date">
                                {moment(history?.created_at).format(
                                  'YYYY-MM-DD'
                                )}
                              </p>
                            </td>
                            <td>
                              <p className="date">#{history?.id}</p>
                            </td>
                            <td>
                              <p className="amount">{history?.amount} Tk</p>
                            </td>
                            <td>
                              {' '}
                              <p className="amount">
                                {history?.payment_method}
                              </p>
                            </td>
                            <td className="text-center">
                              <span
                                className={`status ${
                                  statusClasses[
                                    history?.status.replace(/\s+/g, '')
                                  ] || ''
                                }`}
                              >
                                {history?.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                      <div>Loading...</div>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {totalItem > pageSize ? (
          <section className="pagination-section mt-2">
            <div className="pagination-section-inner">
              <div className="left">
                <p className="text">
                  Showing {currentPage * pageSize - pageSize + 1} to{' '}
                  {currentPage * pageSize > totalItem
                    ? totalItem
                    : currentPage * pageSize}{' '}
                  of {totalItem} entries
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
                      <li key={index + 1} className="pagination-nav-list">
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
    </main>
  );
}
