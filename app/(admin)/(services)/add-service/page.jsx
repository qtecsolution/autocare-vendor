import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div id="content">
    <div class="inner-content">
      <section class="page-top-section">
        <div class="page-top-section-inner">
          <form class="search-form">
            <label for="search-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </label>

            <input class="page-search-input" type="text" name="" id="search-input" placeholder="Search" />
          </form>

          <a href="./notification.html" class="notification-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.25022 9C5.25022 7.20979 5.96138 5.4929 7.22725 4.22703C8.49312 2.96116 10.21 2.25 12.0002 2.25C13.7904 2.25 15.5073 2.96116 16.7732 4.22703C18.0391 5.4929 18.7502 7.20979 18.7502 9V9.75C18.7502 11.873 19.5502 13.807 20.8682 15.27C20.9503 15.361 21.0089 15.4707 21.0388 15.5896C21.0686 15.7084 21.0689 15.8328 21.0396 15.9518C21.0103 16.0708 20.9523 16.1808 20.8707 16.2722C20.789 16.3636 20.6862 16.4335 20.5712 16.476C19.0272 17.046 17.4112 17.466 15.7402 17.719C15.7778 18.2331 15.7091 18.7495 15.5381 19.2359C15.3672 19.7222 15.0979 20.1681 14.7469 20.5457C14.396 20.9233 13.9709 21.2245 13.4983 21.4304C13.0257 21.6364 12.5157 21.7427 12.0002 21.7427C11.4847 21.7427 10.9747 21.6364 10.5021 21.4304C10.0295 21.2245 9.60448 20.9233 9.25351 20.5457C8.90254 20.1681 8.63319 19.7222 8.46229 19.2359C8.29138 18.7495 8.22259 18.2331 8.26022 17.719C6.61187 17.4692 4.99321 17.0524 3.42922 16.475C3.31435 16.4326 3.21161 16.3627 3.12998 16.2715C3.04834 16.1802 2.99029 16.0703 2.9609 15.9515C2.9315 15.8326 2.93166 15.7084 2.96135 15.5896C2.99103 15.4708 3.04936 15.3611 3.13122 15.27C4.49802 13.7567 5.2533 11.7892 5.25022 9.75V9ZM9.75222 17.9C9.73942 18.2032 9.7881 18.5058 9.8953 18.7897C10.0025 19.0736 10.166 19.3329 10.376 19.5519C10.586 19.771 10.8382 19.9453 11.1173 20.0644C11.3964 20.1835 11.6968 20.2448 12.0002 20.2448C12.3037 20.2448 12.604 20.1835 12.8831 20.0644C13.1622 19.9453 13.4144 19.771 13.6244 19.5519C13.8344 19.3329 13.9979 19.0736 14.1051 18.7897C14.2123 18.5058 14.261 18.2032 14.2482 17.9C12.7526 18.0347 11.2479 18.0347 9.75222 17.9Z"
                fill="#7B7F95" />
            </svg>
          </a>
        </div>
      </section>
    </div>
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1">
        <div class="page-header">
          <div class="d-flex flex-column gap-1">
            <h1 class="page-title">
              Add Service
            </h1>
            <p class="page-text">
              Seamlessly Add and Manage Your Services
            </p>
          </div>
        </div>

        <div class="add-product-content">
          <div class="add-product-header">
            <div class="add-product-header-inner">
              <div class="add-product-header-item">
                <div class="number active">
                  1
                </div>

                <h4 class="text active">
                  Basic Info
                </h4>
              </div>

              <div class="add-product-header-item">
                <div class="number">
                  2
                </div>

                <h4 class="text">
                  Description
                </h4>
              </div>

              <div class="add-product-header-item">
                <div class="number">
                  3
                </div>

                <h4 class="text">
                  Price, Stock & Variants
                </h4>
              </div>

              <div class="add-product-header-item">
                <div class="number">
                  4
                </div>

                <h4 class="text">
                  Shipping & Warranty
                </h4>
              </div>
            </div>

            <div class="inner-bar-chart">
              <div class="bar-chart">

              {/* <div class="bar" style="width: 100%;">
                  <span style="width: 20%;"></span> */}
                <div class="bar">
                  <span></span>
                </div>
              </div>
              <p class="text">10%</p>
            </div>
          </div>

          <div class="add-product-body">
            <form class="d-flex flex-column gap-4">
              <div class="d-flex flex-column gap-2">
                <div class="input-field-name">
                  <label for="product-name">Product Name <span>*</span></label>
                </div>
                <div class="row">
                  <div class="col-9">
                    <div class="input-field">
                      <input type="text" name="product-name" id="product-name"
                        placeholder="Ex. Sony a6400 mirrorless camera" />
                      <p class="text">82/100</p>
                    </div>
                  </div>
                  <div class="col-3 align-self-center">
                    <a class="languages-btn" href="#">
                      Translate to other Languages
                    </a>
                  </div>
                </div>
              </div>

              <div class="category-select">
                <div class="box">
                  <label class="category-select-label">Select Category <span>*</span></label>
                  <select class="wide selectize">
                    <option data-display="Select">Nothing</option>
                    <option value="1">Some option</option>
                    <option value="2">Another option</option>
                    <option value="4">Potato</option>
                  </select>
                </div>

                <div class="category-suggestions">
                  <h5 class="category-suggestions-title">Category Suggestions</h5>

                  {/* <!-- Checkboxes --> */}
                  <div class="d-flex flex-column gap-2">
                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox1"/>
                      <label for="checkbox1" tabindex="1">Cameras&gt;Mirrorless</label>
                    </div>
                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox2"/>
                      <label for="checkbox2" tabindex="2">Cameras&gt;DSLR&gt;Body Only</label>
                    </div>

                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox3"/>
                      <label for="checkbox3" tabindex="3">Cameras&gt;DSLR&gt;Sets</label>
                    </div>

                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox4"/>
                      <label for="checkbox4" tabindex="4">Cameras&gt;Video & Action Camcorder&gt;360 Cameras</label>
                    </div>

                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox5"/>
                      <label for="checkbox5" tabindex="5"> Cameras&gt;oint & Shoot&gt;Underwater Digital Cameras </label>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="add-product-footer">
        <div class="d-flex align-items-center gap-3">
          <Link href="#" class="save-draft-btn active">
            Save Draft
          </Link>

          <Link href="/add-service-2" class="confirm-btn active">
            Confirm
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page