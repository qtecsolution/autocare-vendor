import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'
import Link from 'next/link'

function UserManagementPage() {
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="order-management-section">
                    <div className="order-management-section-inner">
                        <div className="order-management-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="title">User Management</h1>
                                <Link href="/add-sub-account" className="new-campaign-btn">
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

                <section className="user-management-section">
                    <div className="user-management-section-inner">
                        <div className="user-management-all-btn">
                            <Link href="/add-sub-account" className="user-management-btn active">Manage Sub Account</Link>
                            <Link href="/manage-roles" className="user-management-btn ">Manage Roles</Link>
                        </div>

                        <div className="user-management-inner">
                            <div className="user-management-inner-top">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="box">
                                        <select className="wide selectize">
                                            <option data-display="Select">Role</option>
                                            <option value="1">Role 1</option>
                                            <option value="2">Role 2</option>
                                            <option value="4">Role 3</option>
                                        </select>
                                    </div>

                                    <div className="box">
                                        <select className="wide selectize">
                                            <option data-display="Select">Status</option>
                                            <option value="1">Status 1</option>
                                            <option value="2">Status 2</option>
                                            <option value="4">Status 3</option>
                                        </select>
                                    </div>

                                    <div className="box">
                                        <select className="wide selectize">
                                            <option data-display="Select">Email</option>
                                            <option value="1">Email 1</option>
                                            <option value="2">Email 2</option>
                                            <option value="4">Email 3</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="right">
                                    <button className="reset-btn">
                                        <span>Reset Filters</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3.5 10.5002L10.5 3.50024M3.5 3.50024L10.5 10.5002" stroke="#1F2937"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="user-management-body-inner">
                                <div className="table-container">
                                    <table className="product-table">
                                        <thead>
                                            <tr>
                                                <th className="product-info-header">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox" />
                                                    <label for="table-header-checkbox" tabindex="4">Name</label>
                                                </th>
                                                <th>Email</th>
                                                <th>Roles</th>
                                                <th className="text-center">STATUS</th>
                                                <th className="text-center">Is Owner Account</th>
                                                <th className="text-center">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="user-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox1" />
                                                    <label for="table-header-checkbox1" className="name-text" tabindex="4">Md Nasif An Nahin</label>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        nasifnurency@gmail.com
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text roles-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <label className="switch">
                                                        <span className="close-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                                fill="none">
                                                                <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>

                                                <td className="text-center">
                                                    <span className="owner-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M7.16917 3.16584C7.5208 2.76019 7.95561 2.43496 8.44406 2.21223C8.93251 1.98951 9.46317 1.87449 10 1.875C11.1308 1.875 12.1442 2.375 12.8308 3.16584C13.3664 3.12759 13.904 3.20507 14.4069 3.39301C14.9099 3.58094 15.3666 3.87493 15.7458 4.255C16.1258 4.63422 16.4196 5.09073 16.6076 5.59355C16.7955 6.09637 16.8731 6.63373 16.835 7.16917C17.2405 7.52088 17.5656 7.95572 17.7881 8.44416C18.0107 8.93261 18.1256 9.46323 18.125 10C18.1255 10.5368 18.0105 11.0675 17.7878 11.5559C17.565 12.0444 17.2398 12.4792 16.8342 12.8308C16.8722 13.3663 16.7947 13.9036 16.6067 14.4065C16.4188 14.9093 16.1249 15.3658 15.745 15.745C15.3658 16.1249 14.9093 16.4188 14.4065 16.6067C13.9036 16.7947 13.3663 16.8722 12.8308 16.8342C12.4792 17.2398 12.0444 17.565 11.5559 17.7878C11.0675 18.0105 10.5368 18.1255 10 18.125C9.46317 18.1255 8.93251 18.0105 8.44406 17.7878C7.95561 17.565 7.5208 17.2398 7.16917 16.8342C6.63365 16.8725 6.09615 16.7952 5.59317 16.6074C5.0902 16.4196 4.63352 16.1258 4.25417 15.7458C3.87414 15.3665 3.58018 14.9099 3.39225 14.4069C3.20432 13.9039 3.12682 13.3664 3.165 12.8308C2.75951 12.4791 2.43444 12.0443 2.21186 11.5558C1.98927 11.0674 1.87439 10.5368 1.875 10C1.875 8.86917 2.375 7.85583 3.16584 7.16917C3.12772 6.63372 3.20525 6.09635 3.39319 5.59352C3.58112 5.09069 3.87504 4.63419 4.255 4.255C4.63419 3.87504 5.09069 3.58112 5.59352 3.39318C6.09635 3.20525 6.63372 3.12772 7.16917 3.16584ZM13.0083 8.48834C13.0583 8.42171 13.0945 8.34576 13.1147 8.26496C13.135 8.18415 13.1388 8.10012 13.1261 8.0178C13.1134 7.93547 13.0844 7.85652 13.0407 7.78558C12.9971 7.71464 12.9397 7.65315 12.8719 7.60471C12.8041 7.55627 12.7273 7.52187 12.6461 7.50353C12.5648 7.48518 12.4807 7.48326 12.3987 7.49789C12.3167 7.51251 12.2385 7.54338 12.1686 7.58868C12.0987 7.63398 12.0385 7.69279 11.9917 7.76167L9.295 11.5367L7.94167 10.1833C7.82319 10.0729 7.66648 10.0128 7.50457 10.0157C7.34265 10.0185 7.18816 10.0841 7.07365 10.1987C6.95914 10.3132 6.89355 10.4676 6.89069 10.6296C6.88783 10.7915 6.94794 10.9482 7.05834 11.0667L8.93334 12.9417C8.99749 13.0058 9.07484 13.0552 9.15999 13.0864C9.24515 13.1176 9.33608 13.1299 9.42647 13.1224C9.51686 13.115 9.60455 13.088 9.68344 13.0432C9.76234 12.9985 9.83054 12.9371 9.88334 12.8633L13.0083 8.48834Z"
                                                                fill="#0F766D" />
                                                        </svg>
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
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
                                                <td className="user-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox2" />
                                                    <label for="table-header-checkbox2" className="name-text" tabindex="4">Md Nasif An Nahin</label>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        nasifnurency@gmail.com
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text roles-text">
                                                        Product Management
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <label className="switch">
                                                        <span className="close-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                                fill="none">
                                                                <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>

                                                <td className="text-center">
                                                    <span className="owner-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                                                                fill="#FF3E50" />
                                                        </svg>
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
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
                                                <td className="user-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox3" />
                                                    <label for="table-header-checkbox3" className="name-text" tabindex="4">Md Nasif An Nahin</label>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        nasifnurency@gmail.com
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text roles-text">
                                                        Service Management
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <label className="switch">
                                                        <span className="close-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                                fill="none">
                                                                <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>

                                                <td className="text-center">
                                                    <span className="owner-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                                                                fill="#FF3E50" />
                                                        </svg>
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
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
                                                <td className="user-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox4" />
                                                    <label for="table-header-checkbox4" className="name-text" tabindex="4">Md Nasif An Nahin</label>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        nasifnurency@gmail.com
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text roles-text">
                                                        Account Control
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <label className="switch">
                                                        <span className="close-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                                fill="none">
                                                                <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>

                                                <td className="text-center">
                                                    <span className="owner-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                                                                fill="#FF3E50" />
                                                        </svg>
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
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
                                                <td className="user-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox5" />
                                                    <label for="table-header-checkbox5" className="name-text" tabindex="4">Md Nasif An Nahin</label>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        nasifnurency@gmail.com
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text roles-text">
                                                        Limited Access
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <label className="switch">
                                                        <span className="close-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                                fill="none">
                                                                <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>

                                                <td className="text-center">
                                                    <span className="owner-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                                                                fill="#FF3E50" />
                                                        </svg>
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
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
                                                <td className="user-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox6" />
                                                    <label for="table-header-checkbox6" className="name-text" tabindex="4">Md Nasif An Nahin</label>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        nasifnurency@gmail.com
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text roles-text">
                                                        Order Management
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <label className="switch">
                                                        <span className="close-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                                fill="none">
                                                                <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>

                                                <td className="text-center">
                                                    <span className="owner-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                                                                fill="#FF3E50" />
                                                        </svg>
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
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
                                                <td className="user-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox7" />
                                                    <label for="table-header-checkbox7" className="name-text" tabindex="4">Md Nasif An Nahin</label>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        nasifnurency@gmail.com
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="pice-text roles-text">
                                                        Stock Update
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <label className="switch">
                                                        <span className="close-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                                fill="none">
                                                                <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                                <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                                                                    stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                        <input type="checkbox" checked />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </td>

                                                <td className="text-center">
                                                    <span className="owner-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM8.56667 7.68333C8.50945 7.62193 8.44045 7.57268 8.36378 7.53852C8.28712 7.50436 8.20435 7.48599 8.12043 7.48451C8.03652 7.48303 7.95316 7.49846 7.87534 7.5299C7.79751 7.56133 7.72682 7.60812 7.66747 7.66747C7.60812 7.72682 7.56133 7.79751 7.5299 7.87534C7.49846 7.95316 7.48303 8.03652 7.48451 8.12043C7.48599 8.20435 7.50436 8.28712 7.53852 8.36378C7.57268 8.44045 7.62193 8.50945 7.68333 8.56667L9.11667 10L7.68333 11.4333C7.62193 11.4906 7.57268 11.5596 7.53852 11.6362C7.50436 11.7129 7.48599 11.7956 7.48451 11.8796C7.48303 11.9635 7.49846 12.0468 7.5299 12.1247C7.56133 12.2025 7.60812 12.2732 7.66747 12.3325C7.72682 12.3919 7.79751 12.4387 7.87534 12.4701C7.95316 12.5015 8.03652 12.517 8.12043 12.5155C8.20435 12.514 8.28712 12.4956 8.36378 12.4615C8.44045 12.4273 8.50945 12.3781 8.56667 12.3167L10 10.8833L11.4333 12.3167C11.4906 12.3781 11.5596 12.4273 11.6362 12.4615C11.7129 12.4956 11.7956 12.514 11.8796 12.5155C11.9635 12.517 12.0468 12.5015 12.1247 12.4701C12.2025 12.4387 12.2732 12.3919 12.3325 12.3325C12.3919 12.2732 12.4387 12.2025 12.4701 12.1247C12.5015 12.0468 12.517 11.9635 12.5155 11.8796C12.514 11.7956 12.4956 11.7129 12.4615 11.6362C12.4273 11.5596 12.3781 11.4906 12.3167 11.4333L10.8833 10L12.3167 8.56667C12.3781 8.50945 12.4273 8.44045 12.4615 8.36378C12.4956 8.28712 12.514 8.20435 12.5155 8.12043C12.517 8.03652 12.5015 7.95316 12.4701 7.87534C12.4387 7.79751 12.3919 7.72682 12.3325 7.66747C12.2732 7.60812 12.2025 7.56133 12.1247 7.5299C12.0468 7.49846 11.9635 7.48303 11.8796 7.48451C11.7956 7.48599 11.7129 7.50436 11.6362 7.53852C11.5596 7.57268 11.4906 7.62193 11.4333 7.68333L10 9.11667L8.56667 7.68333Z"
                                                                fill="#FF3E50" />
                                                        </svg>
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <figure className="action-btn">
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
                <div className="mb-5"></div>
            </div>
        </main>
    )
}

export default UserManagementPage