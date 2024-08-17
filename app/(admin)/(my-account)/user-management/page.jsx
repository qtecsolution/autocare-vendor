import Link from 'next/link'
import React from 'react'
export default function page() {
  return (
    <main id="content">
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

            <input class="page-search-input" type="text" name="" id="search-input" placeholder="Search"/>
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

      <section class="order-management-section">
        <div class="order-management-section-inner">
          <div class="order-management-header">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="title">User Management</h1>
              <Link href="/add-sub-account" class="new-campaign-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99984 4.16675V15.8334M4.1665 10.0001H15.8332" stroke="white" stroke-width="1.67"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>
                  Add Sub Account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section class="user-management-section">
        <div class="user-management-section-inner">
          <div class="user-management-all-btn">
            <Link href="/add-sub-account" class="user-management-btn active">Manage Sub Account</Link>
            <Link href="/manage-roles" class="user-management-btn ">Manage Roles</Link>
          </div>

          <div class="user-management-inner">
            <div class="user-management-inner-top">
              <div class="d-flex align-items-center gap-3">
                <div class="box">
                  <select class="wide selectize">
                    <option data-display="Select">Role</option>
                    <option value="1">Role 1</option>
                    <option value="2">Role 2</option>
                    <option value="4">Role 3</option>
                  </select>
                </div>

                <div class="box">
                  <select class="wide selectize">
                    <option data-display="Select">Status</option>
                    <option value="1">Status 1</option>
                    <option value="2">Status 2</option>
                    <option value="4">Status 3</option>
                  </select>
                </div>

                <div class="box">
                  <select class="wide selectize">
                    <option data-display="Select">Email</option>
                    <option value="1">Email 1</option>
                    <option value="2">Email 2</option>
                    <option value="4">Email 3</option>
                  </select>
                </div>
              </div>

              <div class="right">
                <button class="reset-btn">
                  <span>Reset Filters</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3.5 10.5002L10.5 3.50024M3.5 3.50024L10.5 10.5002" stroke="#1F2937"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="user-management-body-inner">
              <div class="table-container">
                <table class="product-table">
                  <thead>
                    <tr>
                      <th class="product-info-header">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox" />
                        <label for="table-header-checkbox" tabindex="4">Name</label>
                      </th>
                      <th>Email</th>
                      <th>Roles</th>
                      <th class="text-center">STATUS</th>
                      <th class="text-center">Is Owner Account</th>
                      <th class="text-center">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="user-info">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox1" />
                        <label for="table-header-checkbox1" class="name-text" tabindex="4">Md Nasif An Nahin</label>
                      </td>

                      <td>
                        <p class="email-text">
                          nasifnurency@gmail.com
                        </p>
                      </td>

                      <td>
                        <p class="pice-text roles-text">
                          Full Access
                        </p>
                      </td>

                      <td class="text-center">
                        <label class="switch">
                          <span class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked/>
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td class="text-center">
                        <span class="owner-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M7.16917 3.16584C7.5208 2.76019 7.95561 2.43496 8.44406 2.21223C8.93251 1.98951 9.46317 1.87449 10 1.875C11.1308 1.875 12.1442 2.375 12.8308 3.16584C13.3664 3.12759 13.904 3.20507 14.4069 3.39301C14.9099 3.58094 15.3666 3.87493 15.7458 4.255C16.1258 4.63422 16.4196 5.09073 16.6076 5.59355C16.7955 6.09637 16.8731 6.63373 16.835 7.16917C17.2405 7.52088 17.5656 7.95572 17.7881 8.44416C18.0107 8.93261 18.1256 9.46323 18.125 10C18.1255 10.5368 18.0105 11.0675 17.7878 11.5559C17.565 12.0444 17.2398 12.4792 16.8342 12.8308C16.8722 13.3663 16.7947 13.9036 16.6067 14.4065C16.4188 14.9093 16.1249 15.3658 15.745 15.745C15.3658 16.1249 14.9093 16.4188 14.4065 16.6067C13.9036 16.7947 13.3663 16.8722 12.8308 16.8342C12.4792 17.2398 12.0444 17.565 11.5559 17.7878C11.0675 18.0105 10.5368 18.1255 10 18.125C9.46317 18.1255 8.93251 18.0105 8.44406 17.7878C7.95561 17.565 7.5208 17.2398 7.16917 16.8342C6.63365 16.8725 6.09615 16.7952 5.59317 16.6074C5.0902 16.4196 4.63352 16.1258 4.25417 15.7458C3.87414 15.3665 3.58018 14.9099 3.39225 14.4069C3.20432 13.9039 3.12682 13.3664 3.165 12.8308C2.75951 12.4791 2.43444 12.0443 2.21186 11.5558C1.98927 11.0674 1.87439 10.5368 1.875 10C1.875 8.86917 2.375 7.85583 3.16584 7.16917C3.12772 6.63372 3.20525 6.09635 3.39319 5.59352C3.58112 5.09069 3.87504 4.63419 4.255 4.255C4.63419 3.87504 5.09069 3.58112 5.59352 3.39318C6.09635 3.20525 6.63372 3.12772 7.16917 3.16584ZM13.0083 8.48834C13.0583 8.42171 13.0945 8.34576 13.1147 8.26496C13.135 8.18415 13.1388 8.10012 13.1261 8.0178C13.1134 7.93547 13.0844 7.85652 13.0407 7.78558C12.9971 7.71464 12.9397 7.65315 12.8719 7.60471C12.8041 7.55627 12.7273 7.52187 12.6461 7.50353C12.5648 7.48518 12.4807 7.48326 12.3987 7.49789C12.3167 7.51251 12.2385 7.54338 12.1686 7.58868C12.0987 7.63398 12.0385 7.69279 11.9917 7.76167L9.295 11.5367L7.94167 10.1833C7.82319 10.0729 7.66648 10.0128 7.50457 10.0157C7.34265 10.0185 7.18816 10.0841 7.07365 10.1987C6.95914 10.3132 6.89355 10.4676 6.89069 10.6296C6.88783 10.7915 6.94794 10.9482 7.05834 11.0667L8.93334 12.9417C8.99749 13.0058 9.07484 13.0552 9.15999 13.0864C9.24515 13.1176 9.33608 13.1299 9.42647 13.1224C9.51686 13.115 9.60455 13.088 9.68344 13.0432C9.76234 12.9985 9.83054 12.9371 9.88334 12.8633L13.0083 8.48834Z"
                              fill="#0F766D" />
                          </svg>
                        </span>
                      </td>

                      <td class="text-center">
                        <figure class="action-btn">
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
                      <td class="user-info">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox2" />
                        <label for="table-header-checkbox2" class="name-text" tabindex="4">Md Nasif An Nahin</label>
                      </td>

                      <td>
                        <p class="email-text">
                          nasifnurency@gmail.com
                        </p>
                      </td>

                      <td>
                        <p class="pice-text roles-text">
                          Product Management
                        </p>
                      </td>

                      <td class="text-center">
                        <label class="switch">
                          <span class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked/>
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td class="text-center">
                        <span class="owner-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                              fill="#FF3E50" />
                          </svg>
                        </span>
                      </td>

                      <td class="text-center">
                        <figure class="action-btn">
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
                      <td class="user-info">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox3" />
                        <label for="table-header-checkbox3" class="name-text" tabindex="4">Md Nasif An Nahin</label>
                      </td>

                      <td>
                        <p class="email-text">
                          nasifnurency@gmail.com
                        </p>
                      </td>

                      <td>
                        <p class="pice-text roles-text">
                          Service Management
                        </p>
                      </td>

                      <td class="text-center">
                        <label class="switch">
                          <span class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked/>
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td class="text-center">
                        <span class="owner-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                              fill="#FF3E50" />
                          </svg>
                        </span>
                      </td>

                      <td class="text-center">
                        <figure class="action-btn">
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
                      <td class="user-info">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox4" />
                        <label for="table-header-checkbox4" class="name-text" tabindex="4">Md Nasif An Nahin</label>
                      </td>

                      <td>
                        <p class="email-text">
                          nasifnurency@gmail.com
                        </p>
                      </td>

                      <td>
                        <p class="pice-text roles-text">
                          Account Control
                        </p>
                      </td>

                      <td class="text-center">
                        <label class="switch">
                          <span class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked/>
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td class="text-center">
                        <span class="owner-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                              fill="#FF3E50" />
                          </svg>
                        </span>
                      </td>

                      <td class="text-center">
                        <figure class="action-btn">
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
                      <td class="user-info">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox5" />
                        <label for="table-header-checkbox5" class="name-text" tabindex="4">Md Nasif An Nahin</label>
                      </td>

                      <td>
                        <p class="email-text">
                          nasifnurency@gmail.com
                        </p>
                      </td>

                      <td>
                        <p class="pice-text roles-text">
                          Limited Access
                        </p>
                      </td>

                      <td class="text-center">
                        <label class="switch">
                          <span class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked/>
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td class="text-center">
                        <span class="owner-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                              fill="#FF3E50" />
                          </svg>
                        </span>
                      </td>

                      <td class="text-center">
                        <figure class="action-btn">
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
                      <td class="user-info">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox6" />
                        <label for="table-header-checkbox6" class="name-text" tabindex="4">Md Nasif An Nahin</label>
                      </td>

                      <td>
                        <p class="email-text">
                          nasifnurency@gmail.com
                        </p>
                      </td>

                      <td>
                        <p class="pice-text roles-text">
                          Order Management
                        </p>
                      </td>

                      <td class="text-center">
                        <label class="switch">
                          <span class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked/>
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td class="text-center">
                        <span class="owner-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                              fill="#FF3E50" />
                          </svg>
                        </span>
                      </td>

                      <td class="text-center">
                        <figure class="action-btn">
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
                      <td class="user-info">
                        <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox7" />
                        <label for="table-header-checkbox7" class="name-text" tabindex="4">Md Nasif An Nahin</label>
                      </td>

                      <td>
                        <p class="email-text">
                          nasifnurency@gmail.com
                        </p>
                      </td>

                      <td>
                        <p class="pice-text roles-text">
                          Stock Update
                        </p>
                      </td>

                      <td class="text-center">
                        <label class="switch">
                          <span class="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked/>
                          <span class="slider round"></span>
                        </label>
                      </td>

                      <td class="text-center">
                        <span class="owner-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                              fill="#FF3E50" />
                          </svg>
                        </span>
                      </td>

                      <td class="text-center">
                        <figure class="action-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21"
                            fill="none">
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
        </div>
      </section>
      <div class="mb-5"></div>
    </div>
  </main>
  )
}
