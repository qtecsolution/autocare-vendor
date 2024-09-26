import React from "react";

const Pagination = ({ totalPages, currentPage, handlePagination }) => {
    const renderPageNumbers = () => {
        let pages = [];

        if (totalPages > 0) {
            if (totalPages <= 5) {
                pages = Array.from({ length: totalPages }, (_, index) => index + 1);
            } else {
                if (currentPage <= 3) {
                    pages = [1, 2, 3, '...', totalPages];
                } else if (currentPage >= totalPages - 2) {
                    pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
                } else {
                    pages = [
                        1,
                        '...',
                        currentPage - 1,
                        currentPage,
                        currentPage + 1,
                        '...',
                        totalPages,
                    ];
                }
            }
        }

        return pages.map((page, index) => (
            <li key={index} className="pagination-nav-list">
                {typeof page === 'number' ? (
                    <button
                        onClick={() => handlePagination(page)}
                        className="pagination-nav-link"
                        style={{ border: "none" }}
                    >
                        {page}
                    </button>
                ) : (
                    <span className="pagination-nav-link">
                        {page}
                    </span>
                )}
            </li>
        ));
    };

    return (
        <nav className="pagination-nav">
            {totalPages > 0 &&
                <ul className="list-unstyled d-flex align-items-center gap-2">
                    <li className="pagination-nav-list">
                        <button
                            onClick={() => handlePagination(Math.max(currentPage - 1, 1))}
                            disabled={currentPage === 1}
                            className="pagination-nav-link previous"
                        >
                            « Previous
                        </button>
                    </li>
                    {renderPageNumbers()}
                    <li className="pagination-nav-list">
                        <button
                            onClick={() => handlePagination(Math.min(currentPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="pagination-nav-link next"
                        >
                            Next »
                        </button>
                    </li>
                </ul>
            }
        </nav>
    );
};

export default Pagination;