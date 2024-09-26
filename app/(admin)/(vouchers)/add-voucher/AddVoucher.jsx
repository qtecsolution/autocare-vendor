"use client"
export default function AddVoucher() {
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

              <input className="page-search-input" type="text" name="" id="search-input" placeholder="Search"/>
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

        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 className="title">Voucher</h1>
                  <p className="details mt-1">Make Changes and publish for review</p>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <a href="" className="add-product-btn">
                    <span>Publish</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="add-voucher-section">
          <div className="add-voucher-section-inner">
            <div className="row g-4">
              <div className="col-xl-8">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="random-code-inner">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="input-title">Code <span className="text-danger">*</span></p>
                          <p className="color-text">Generate random code</p>
                        </div>
                        <input className="input-field" type="text" name="" id=""
                          placeholder="Enter code, No special Sign or spaces"/>
                        <p className="light-text">Customer must enter this code at the checkout</p>
                      </div>

                      <div className="voucher-type-inner">
                        <p className="input-title">Voucher Type <span className="text-danger">*</span></p>
                        <div className="row g-3">
                          <div className="col-6 col-sm-3">
                            <div className="radio-button-inner">
                              <label className="radio-button-container">General
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3">
                            <div className="radio-button-inner">
                              <label className="radio-button-container">Category
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3">
                            <div className="radio-button-inner">
                              <label className="radio-button-container">Brand
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                          <div className="col-6 col-sm-3">
                            <div className="radio-button-inner">
                              <label className="radio-button-container">Product
                                <input type="radio" name="radio"/>
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-6 col-sm-4">
                            <div className="box">
                              <label className="category-select-label"> Exclude Category </label>
                              <select className="wide selectize">
                                <option data-display="Select">Select</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Another option</option>
                                <option value="4">Potato</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-6 col-sm-4">
                            <div className="box">
                              <label className="category-select-label">Exclude Brand</label>
                              <select className="wide selectize">
                                <option data-display="Select">Select</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Another option</option>
                                <option value="4">Potato</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-6 col-sm-4">
                            <div className="box">
                              <label className="category-select-label">Exclude Product</label>
                              <select className="wide selectize">
                                <option data-display="Select">Select</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Another option</option>
                                <option value="4">Potato</option>
                              </select>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-6">
                            <div className="box">
                              <label className="category-select-label">
                                Discount Type <span className="text-danger">*</span>
                              </label>
                              <select className="wide selectize">
                                <option data-display="Select">Select</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Another option</option>
                                <option value="4">Potato</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="box">
                              <label className="category-select-label">
                                Discount Value <span className="text-danger">*</span>
                              </label>
                              <input className="input-field" type="text" name="" id="" placeholder="0"/>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-6 col-sm-4">
                            <div className="box">
                              <label className="category-select-label">
                                Minimum Purchase <span className="text-danger">*</span>
                              </label>
                              <input className="input-field" type="text" name="" id="" placeholder="0"/>
                            </div>
                          </div>

                          <div className="col-6 col-sm-4">
                            <div className="box">
                              <label className="category-select-label">
                                Maximum Discount
                              </label>
                              <input className="input-field" type="text" name="" id="" placeholder="0"/>
                            </div>
                          </div>

                          <div className="col-6 col-sm-4">
                            <div className="box">
                              <label className="category-select-label">
                                Usage limit
                              </label>
                              <input className="input-field" type="text" name="" id="" placeholder="0"/>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-6">
                            <div className="box">
                              <label className="category-select-label">
                                Minimum Purchase <span className="text-danger">*</span>
                              </label>
                              <div className="date-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                  fill="none">
                                  <path
                                    d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.75272 2.69754 5.27581 3.04917 4.92417C3.40081 4.57254 3.87772 4.375 4.375 4.375H15.625C16.1223 4.375 16.5992 4.57254 16.9508 4.92417C17.3025 5.27581 17.5 5.75272 17.5 6.25V15.625M2.5 15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625M2.5 15.625V9.375C2.5 8.87772 2.69754 8.40081 3.04917 8.04917C3.40081 7.69754 3.87772 7.5 4.375 7.5H15.625C16.1223 7.5 16.5992 7.69754 16.9508 8.04917C17.3025 8.40081 17.5 8.87772 17.5 9.375V15.625"
                                    stroke="#7B7F95" stroke-width="1.25" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                </svg>
                                <input type="text" id="start-date" placeholder="DD/MM/YYYY"/>
                              </div>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="box">
                              <label className="category-select-label">
                                Minimum Purchase <span className="text-danger">*</span>
                              </label>
                              <div className="date-input">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                  fill="none">
                                  <path
                                    d="M10 5V10H13.75M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                    stroke="#7B7F95" stroke-width="1.25" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                </svg>
                                <input type="text" placeholder="10:00 PM"/>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="d-flex align-items-center gap-3">
                              <label className="switch">
                                <span className="close-btn">
                                  <svg xmlns="http:www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                    fill="none">
                                    <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                    <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                </span>
                                <input type="checkbox" checked/>
                                <span className="slider round"></span>
                              </label>
                              <p className="text">is active</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-sm-5"></div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="right-section">
                        <div className="d-flex justify-content-between align-items-center">
                          <h1 className="title">Status</h1>
                          <span className="draft-btn">Draft</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="right-section">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-column gap-3">
                            <h1 className="title">Summary</h1>
                            <h1 className="title text-uppercase">FREESHIPPING26</h1>
                          </div>

                          <div className="">
                            <p className="text">Type & Method</p>
                            <ul className="mt-1">
                              <li className="light-text">General</li>
                              <li className="light-text">Fixed</li>
                            </ul>
                          </div>

                          <div className="">
                            <p className="text">Details</p>
                            <ul className="mt-1">
                              <li className="light-text">Minimum Purchase 10</li>
                              <li className="light-text">Usage limit 2</li>
                              <li className="light-text">Valid from Nov 11 - 20 of 2024</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="mb-5 mb-sm-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}