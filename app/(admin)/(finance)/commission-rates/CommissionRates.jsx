'use client';

import GlobalSearch from '@/components/admin/GlobalSearch';
import React, { useState } from 'react';

export default function CommissionRates({ categories }) {
  const [expandedCategories, setExpandedCategories] = useState({});

  // Function to toggle visibility of category's children
  const toggleCategory = categoryId => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };

  // Function to recursively render categories and their children
  const renderCategory = (category, level = 0) => {
    return (
      <React.Fragment key={category.id}>
        <tr>
          <td>
            <div
              className="d-flex align-items-center gap-2 commission-level"
              style={{ paddingLeft: `${level * 20}px` }} // Indent based on level
            >
              <figure>
                {category.children && category.children.length > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    onClick={() => toggleCategory(category.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d={
                        expandedCategories[category.id]
                          ? 'M5 12.5L10 7.5L15 12.5' // Arrow up
                          : 'M5 7.5L10 12.5L15 7.5' // Arrow down
                      }
                      stroke="#98A2B3"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </figure>
              <p
                className="pice-text"
                onClick={() => toggleCategory(category.id)}
                style={{ cursor: 'pointer', margin: 0 }}
              >
                {category.name}
              </p>
            </div>
          </td>
          <td className="text-center">
            <p className="pice-text">{category.commission_rate || '-'}</p>
          </td>
        </tr>

        {/* Render children recursively if the category is expanded */}
        {expandedCategories[category.id] &&
          category.children &&
          category.children.map(child => renderCategory(child, level + 1))}
      </React.Fragment>
    );
  };

  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex justify-content-between align-items-center">
                <h1 className="title">Commission Rates</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="manage-all-brand-section">
          <div className="manage-all-brand-section-inner">
            <div className="manage-all-brand-section-inner-header">
              <form className="all-products-form">
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
                    ></path>
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
            </div>

            <div className="manage-all-brand-section-inner-body">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-light">
                    <tr scope="col">
                      <th scope="col" className="table-header-text">
                        Category Name
                      </th>
                      <th scope="col" className="text-center table-header-text">
                        Commissions (%)
                      </th>
                    </tr>
                  </thead>{' '}
                  <tbody>
                    {categories.map(category => renderCategory(category))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
