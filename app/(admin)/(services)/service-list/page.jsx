import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main id="content">
    <div className="inner-content">
      <section className="page-top-section">
        <div className="page-top-section-inner">
          <form className="search-form">
            <label for="search-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </label>

            <input className="page-search-input" type="text" name="" id="search-input" placeholder="Search" />
          </form>

          <a href="./notification.html" className="notification-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.25022 9C5.25022 7.20979 5.96138 5.4929 7.22725 4.22703C8.49312 2.96116 10.21 2.25 12.0002 2.25C13.7904 2.25 15.5073 2.96116 16.7732 4.22703C18.0391 5.4929 18.7502 7.20979 18.7502 9V9.75C18.7502 11.873 19.5502 13.807 20.8682 15.27C20.9503 15.361 21.0089 15.4707 21.0388 15.5896C21.0686 15.7084 21.0689 15.8328 21.0396 15.9518C21.0103 16.0708 20.9523 16.1808 20.8707 16.2722C20.789 16.3636 20.6862 16.4335 20.5712 16.476C19.0272 17.046 17.4112 17.466 15.7402 17.719C15.7778 18.2331 15.7091 18.7495 15.5381 19.2359C15.3672 19.7222 15.0979 20.1681 14.7469 20.5457C14.396 20.9233 13.9709 21.2245 13.4983 21.4304C13.0257 21.6364 12.5157 21.7427 12.0002 21.7427C11.4847 21.7427 10.9747 21.6364 10.5021 21.4304C10.0295 21.2245 9.60448 20.9233 9.25351 20.5457C8.90254 20.1681 8.63319 19.7222 8.46229 19.2359C8.29138 18.7495 8.22259 18.2331 8.26022 17.719C6.61187 17.4692 4.99321 17.0524 3.42922 16.475C3.31435 16.4326 3.21161 16.3627 3.12998 16.2715C3.04834 16.1802 2.99029 16.0703 2.9609 15.9515C2.9315 15.8326 2.93166 15.7084 2.96135 15.5896C2.99103 15.4708 3.04936 15.3611 3.13122 15.27C4.49802 13.7567 5.2533 11.7892 5.25022 9.75V9ZM9.75222 17.9C9.73942 18.2032 9.7881 18.5058 9.8953 18.7897C10.0025 19.0736 10.166 19.3329 10.376 19.5519C10.586 19.771 10.8382 19.9453 11.1173 20.0644C11.3964 20.1835 11.6968 20.2448 12.0002 20.2448C12.3037 20.2448 12.604 20.1835 12.8831 20.0644C13.1622 19.9453 13.4144 19.771 13.6244 19.5519C13.8344 19.3329 13.9979 19.0736 14.1051 18.7897C14.2123 18.5058 14.261 18.2032 14.2482 17.9C12.7526 18.0347 11.2479 18.0347 9.75222 17.9Z"
                fill="#7B7F95" />
            </svg>
          </a>
        </div>
      </section>

      <section className="manage-product-section">
        <div className="manage-product-section-header">
          <h3 className="heading-text">
            Services
          </h3>

          <div className="d-flex align-items-center gap-3">
            <a href="#" className="import-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_119_933)">
                  <path
                    d="M13.3335 13.3332L10.0002 9.9999M10.0002 9.9999L6.66688 13.3332M10.0002 9.9999V17.4999M16.9919 15.3249C17.8047 14.8818 18.4467 14.1806 18.8168 13.3321C19.1868 12.4835 19.2637 11.5359 19.0354 10.6388C18.807 9.7417 18.2865 8.94616 17.5558 8.37778C16.8251 7.80939 15.9259 7.50052 15.0002 7.4999H13.9502C13.698 6.52427 13.2278 5.61852 12.5752 4.85073C11.9225 4.08295 11.1042 3.47311 10.182 3.06708C9.25967 2.66104 8.25734 2.46937 7.25031 2.50647C6.24328 2.54358 5.25777 2.80849 4.36786 3.28129C3.47795 3.7541 2.7068 4.42249 2.1124 5.23622C1.51799 6.04996 1.11579 6.98785 0.936028 7.9794C0.756269 8.97095 0.803632 9.99035 1.07456 10.961C1.34548 11.9316 1.83291 12.8281 2.50021 13.5832"
                    stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_119_933">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Import</span>
            </a>
            <Link href="/product-add" className="add-product-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332" stroke="white" stroke-width="1.67"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Add Product</span>
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 all-buttons-inner">
          <button className="manage-products-btn active">
            All <span>0</span>
          </button>

          <button className="manage-products-btn">
            Active <span>0</span>
          </button>

          <button className="manage-products-btn">
            Inactive <span>0</span>
          </button>

          <button className="manage-products-btn">
            Draft <span>0</span>
          </button>

          <button className="manage-products-btn">
            Pending <span>0</span>
          </button>

          <button className="manage-products-btn">
            Rejected <span>0</span>
          </button>

          <button className="manage-products-btn">
            Deleted <span>0</span>
          </button>
        </div>
      </section>

      <section className="manage-all-product-section">
        <div className="manage-all-product-section-inner">
          <div className="manage-all-product-section-inner-header">
            <form className="all-products-form">
              <label for="search-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </label>

              <input className="page-search-input" type="text" name="" id="search-input" placeholder="Search" />
            </form>

            <div className="d-flex gap-3 align-items-center">
              <div className="box">
                <select className="bg-color selectize">
                  <option data-display="Select">Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="4">Category 3</option>
                </select>
              </div>

              <div className="box">
                <select className="bg-color selectize">
                  <option data-display="Select">Status</option>
                  <option value="1">Status 1</option>
                  <option value="2">Status 2</option>
                  <option value="4">Status 3</option>
                </select>
              </div>

              <div className="box">
                <select className="bg-color selectize">
                  <option data-display="Select">Newest</option>
                  <option value="1">Newest 1</option>
                  <option value="2">Newest 2</option>
                  <option value="4">Newest 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="manage-all-product-section-inner-body">
            <div className="table-container">
              <table className="product-table">
                <thead>
                  <tr>
                    <th className="product-info-header">
                      <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox" />
                      <label for="table-header-checkbox" tabindex="4">Product</label>
                    </th>
                    <th>Price</th>
                    <th>In Stock</th>
                    <th className="text-center">sold</th>
                    <th className="text-center">Wishlist</th>
                    <th className="text-center">STATUS</th>
                    <th className="text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox" />
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox" tabindex="4">
                          <img className="product-image" src="/assets/images/products1.png" alt="Product Image" />
                        </label>

                        <div className="product-details d-flex flex-column gap-2">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          230
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status active">Active</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox1" />
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox1"
                          tabindex="4">
                          <img className="product-image" src="/assets/images/products2.png" alt="Product Image" />
                        </label>

                        <div className="product-details d-flex flex-column gap-2 flex-shrink-0">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          658
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status inactive">Inactive</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox2" />
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox2"
                          tabindex="4">
                          <img className="product-image" src="/assets/images/products3.png" alt="Product Image" />
                        </label>

                        <div className="product-details d-flex flex-column gap-2">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          230
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status draft">Draft</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox3" />
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox3"
                          tabindex="4">
                          <img className="product-image" src="/assets/images/products1.png" alt="Product Image" />
                        </label>

                        <div className="product-details d-flex flex-column gap-2">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          230
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status pending">Pending</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox4" />
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox4"
                          tabindex="4">
                          <img className="product-image" src="/assets/images/products4.png" alt="Product Image" />
                        </label>

                        <div className="product-details d-flex flex-column gap-2">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          230
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status active">Active</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox5"/>
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox5"
                          tabindex="4">
                          <img className="product-image" src="/assets/images/products5.png" alt="Product Image"/>
                        </label>

                        <div className="product-details d-flex flex-column gap-2">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          230
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status active">Active</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox6" />
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox6"
                          tabindex="4">
                          <img className="product-image" src="/assets/images/products6.png" alt="Product Image" />
                        </label>

                        <div className="product-details d-flex flex-column gap-2">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          230
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status violation">Violation</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>

                  <tr>
                    <td className="product-info-inner">
                      <div className="product-info">
                        <input className="table-body-checkbox" type="checkbox" id="table-body-checkbox7" />
                        <label className="d-flex align-items-center flex-shrink-0" for="table-body-checkbox7"
                          tabindex="4">
                          <img className="product-image" src="/assets/images/products7.png" alt="Product Image" />
                        </label>

                        <div className="product-details d-flex flex-column gap-2">
                          <p className="title">Purolator Oil Filter 133500I99 - Fits Toyota Qualis</p>

                          <div className="d-flex align-items-center gap-3">
                            <div className="d-flex align-items-center gap-2 buy-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 see-product">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path
                                  d="M7 8.75C7.46413 8.75 7.90925 8.56563 8.23744 8.23744C8.56563 7.90925 8.75 7.46413 8.75 7C8.75 6.53587 8.56563 6.09075 8.23744 5.76256C7.90925 5.43437 7.46413 5.25 7 5.25C6.53587 5.25 6.09075 5.43437 5.76256 5.76256C5.43437 6.09075 5.25 6.53587 5.25 7C5.25 7.46413 5.43437 7.90925 5.76256 8.23744C6.09075 8.56563 6.53587 8.75 7 8.75Z"
                                  fill="#7B7F95" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.771754 6.67742C1.63975 4.06933 4.09967 2.1875 7.00059 2.1875C9.89975 2.1875 12.3585 4.06758 13.2277 6.67333C13.2977 6.8845 13.2977 7.112 13.2277 7.32258C12.3603 9.93067 9.89975 11.8125 6.99942 11.8125C4.10025 11.8125 1.64092 9.93242 0.772337 7.32667C0.70219 7.11593 0.70219 6.88815 0.772337 6.67742H0.771754ZM10.0625 7C10.0625 7.81223 9.73985 8.59118 9.16552 9.16551C8.59119 9.73984 7.81223 10.0625 7 10.0625C6.18778 10.0625 5.40882 9.73984 4.83449 9.16551C4.26016 8.59118 3.9375 7.81223 3.9375 7C3.9375 6.18777 4.26016 5.40882 4.83449 4.83449C5.40882 4.26016 6.18778 3.9375 7 3.9375C7.81223 3.9375 8.59119 4.26016 9.16552 4.83449C9.73985 5.40882 10.0625 6.18777 10.0625 7Z"
                                  fill="#7B7F95" />
                              </svg>
                              <p>3256</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <p className="pice-text">
                          5,000 Tk
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-4">
                        <p className="pice-text">
                          230
                        </p>

                        <div className="d-flex align-items-center gap-2">
                          <button className="edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                          <button className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                              fill="none">
                              <path
                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="text-center">
                      <p className="pice-text">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <p className="pice-text ">
                        50
                      </p>
                    </td>

                    <td className="text-center">
                      <span className="status violation">Violation</span>
                    </td>
                    <td className="text-center">
                      <figure className="action-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                          <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                        </svg>
                      </figure>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="pagination-section">
        <div className="pagination-section-inner">
          <div className="left">
            <p className="text">Showing 1 to 10 of 23 entries</p>
          </div>
          <div className="right">
            <nav className="pagination-nav">
              <ul className="list-unstyled d-flex align-items-center gap-2">
                <li className="pagination-nav-list">
                  <a className="pagination-nav-link previous" href="">
                    « Previous
                  </a>
                </li>

                <li className="pagination-nav-list">
                  <a className="pagination-nav-link" href="">
                    1
                  </a>
                </li>
                <li className="pagination-nav-list">
                  <a className="pagination-nav-link" href="">
                    2
                  </a>
                </li>
                <li className="pagination-nav-list">
                  <a className="pagination-nav-link" href="">
                    3
                  </a>
                </li>

                <li className="pagination-nav-list">
                  <a className="pagination-nav-link" href="">
                    •••
                  </a>
                </li>
                <li className="pagination-nav-list">
                  <a className="pagination-nav-link" href="">
                    10
                  </a>
                </li>

                <li className="pagination-nav-list">
                  <a className="pagination-nav-link next" href="">
                    Next »
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

    </div>
  </main>

  )
}

export default page