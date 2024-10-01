import axiosInstance from '@/lib/axiosInstance';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Star from '@/components/admin/Star';
export default function Data({ feedBackType }) {
  const router = useRouter();
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const [loading, setLoading] = useState(true);

  // Pagination and filtering state
  const [type, setType] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const searchParams = useSearchParams();

  const [feedbackList, setFeedbackList] = useState();
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

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
      setFeedbackList(prevList =>
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

  const fetchData = async (filterBy = type, pageSize = pageSize, page) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/seller-panel-api/frontend/review-list/?type=${filterBy}&page=${page}&page_size=${pageSize}`
      );
      const review = response?.data?.results;
      setFeedbackList(review);
      setTotalItem(response?.data?.count);
      setTotalPage(Math.ceil(response?.data?.count / pageSize));
    } catch (error) {
      console.error('Error fetching vouchers:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const filterBy = type;
    const pageSizeParam = searchParams.get('page_size') || pageSize;
    const page = searchParams.get('page')|| currentPage;
    setPageSize(pageSizeParam);
    setCurrentPage(page);
    fetchData(filterBy, pageSizeParam, page);
  }, [searchParams, type]);
  useEffect(() => {
    setType(feedBackType);
  }, [feedBackType]);
  // Handle filter change
  // const filter = newFilter => {
  //   setFilterBy(newFilter);
  //   router.push(
  //     `/feedback/?page=${currentPage}&page_size=${pageSize}`
  //   );
  // };

  // Handle page size change
  const goToPage = page => {
    setCurrentPage(page);
    router.push(`/feedback/?page=${page}&page_size=${pageSize}`);
  };
  // Handle page size change
  const goToNext = () => {
    let curP = parseInt(currentPage) + 1;
    if (totalPage + 1 <= curP) return;
    setCurrentPage(curP);
    router.push(`/feedback/?page=${curP}&page_size=${pageSize}`);
  };
  const goToPrev = () => {
    let curP = parseInt(currentPage) - 1;
    if (curP == 0) return;
    setCurrentPage(curP);
    router.push(`/feedback/?page=${curP}&page_size=${pageSize}`);
  };
  return (
    <>
      <div className="order-details mt-4">
        <div className="order-details-inner">
          <div className="order-management-body-inner">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th className="rating-header">Rating</th>
                    <th className="review-text">Content</th>
                    <th className="">Images</th>
                    <th className="text-end action-header">Action</th>
                  </tr>
                </thead>
                {!loading ? (
                  <tbody>
                    {feedbackList?.map((feedback, index) => (
                      <tr key={index}>
                        <td className="rating-data">
                          <div className="d-flex align-items-center">
                            {feedback?.rating &&
                              !isNaN(feedback.rating) &&
                              Array.from(
                                { length: parseInt(feedback.rating) },
                                (_, i) => <Star key={i} />
                              )}
                          </div>
                        </td>

                        <td className="review-text">
                          <p className="pice-text review-content">
                            {feedback?.review}
                          </p>
                        </td>

                        <td className="review-img">
                          <div className="d-flex gap-2">
                            {feedback?.images?.map((image, index) => (
                              <Image
                                src={image?.image}
                                width={500}
                                height={500}
                                alt="Review Image"
                              />
                            ))}
                          </div>
                        </td>

                        <td className="text-end">
                          <figure className="action-btn review">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="5"
                              height="21"
                              viewBox="0 0 5 21"
                              fill="none"
                            >
                              <circle
                                cx="2.5"
                                cy="2.5"
                                r="2.5"
                                fill="#D9D9D9"
                              />
                              <circle
                                cx="2.5"
                                cy="10.5"
                                r="2.5"
                                fill="#D9D9D9"
                              />
                              <circle
                                cx="2.5"
                                cy="18.5"
                                r="2.5"
                                fill="#D9D9D9"
                              />
                            </svg>
                          </figure>
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
    </>
  );
}
