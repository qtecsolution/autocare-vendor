'use client';

import GlobalSearch from '@/components/admin/GlobalSearch';
import React, { useEffect, useState } from 'react';

export default function CommissionRates({ categories }) {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  // Handle input change
  const handleSearchChange = e => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  // Function to filter categories and their children with match children expanded

  // const filterCategories = (categories, term) => {
  //   return categories.reduce((acc, category) => {
  //     const hasMatchingChild = category.children && category.children.length > 0
  //       ? filterCategories(category.children, term).length > 0
  //       : false;

  //     // Check if category matches or has matching children
  //     if (category.name.toLowerCase().includes(term) || hasMatchingChild) {
  //       acc.push({
  //         ...category,
  //         children: hasMatchingChild ? filterCategories(category.children, term) : category.children,
  //       });
  //       // Ensure the parent category is expanded if it has matching children
  //       if (hasMatchingChild) {
  //         setExpandedCategories(prevState => ({
  //           ...prevState,
  //           [category.id]: true, // Expand parent category
  //         }));
  //       }
  //     }
  //     return acc;
  //   }, []);
  // };

  // Function to filter only root category
  const filterCategories = (data, term) => {
    const filtered = data.filter(category =>
      category.name.toLowerCase().includes(term)
    );
    return filtered;
  };

  useEffect(() => {
    // Filter categories based on the search term
    if (searchTerm !== '') {
      const filtered = filterCategories(categories, searchTerm);
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchTerm]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prevState) => {
      const newState = {};

      newState[categoryId] = !prevState[categoryId];
      return newState;
    });
  };

  const toggleSubCategory = (subcategoryId, parentCategoryId) => {
    setExpandedCategories((prevState) => {
      const newState = {};

      // Loop through all keys (categories and subcategories)
      Object.keys(prevState).forEach((key) => {
        // Keep unrelated categories/subcategories open
        if (!key.startsWith(`${parentCategoryId}_`)) {
          newState[key] = prevState[key];
        }
      });

      // Toggle the clicked subcategory
      newState[`${parentCategoryId}_${subcategoryId}`] = !prevState[`${parentCategoryId}_${subcategoryId}`];

      return newState;
    });
  };

  // Renders a category row with its subcategories
  const renderCategory = (category, level = 0) => {
    const isExpanded = expandedCategories[category.id] || false;

    return (
      <React.Fragment key={category.id}>
        <tr>
          <td>
            <div
              className="d-flex align-items-center gap-2 commission-level"
              style={{ paddingLeft: `${level * 20}px` }}
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
                        isExpanded
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

        {isExpanded &&
          category.children &&
          category.children.map((child) => renderSubCategory(child, level + 1, category.id))}
      </React.Fragment>
    );
  };

  // Renders a subcategory row
  const renderSubCategory = (subcategory, level, parentCategoryId) => {
    const isExpanded = expandedCategories[`${parentCategoryId}_${subcategory.id}`] || false;

    return (
      <React.Fragment key={subcategory.id}>
        <tr>
          <td>
            <div
              className="d-flex align-items-center gap-2 commission-level"
              style={{ paddingLeft: `${level * 20}px` }}
            >
              <figure>
                {subcategory.children && subcategory.children.length > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    onClick={() => toggleSubCategory(subcategory.id, parentCategoryId)}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      d={
                        isExpanded
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
                onClick={() => toggleSubCategory(subcategory.id, parentCategoryId)}
                style={{ cursor: 'pointer', margin: 0 }}
              >
                {subcategory.name}
              </p>
            </div>
          </td>
          <td className="text-center">
            <p className="pice-text">{subcategory.commission_rate || '-'}</p>
          </td>
        </tr>

        {isExpanded &&
          subcategory.children &&
          subcategory.children.map((subChild) =>
            renderSubCategory(subChild, level + 1, parentCategoryId)
          )}
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
                  name="name"
                  id="search-input"
                  onChange={handleSearchChange}
                  placeholder="Enter name"
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
                    {filteredCategories?.map(category =>
                      renderCategory(category)
                    )}
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
