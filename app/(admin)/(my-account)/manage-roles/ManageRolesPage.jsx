import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'
import Link from 'next/link'

function ManageRolesPage() {
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="order-management-section">
                    <div className="order-management-section-inner">
                        <div className="order-management-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="title">User Management</h1>
                                <Link href="/add-new-role" className="new-campaign-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M9.99984 4.16675V15.8334M4.1665 10.0001H15.8332" stroke="white" stroke-width="1.67"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>
                                        Add New Role
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="user-management-section">
                    <div className="user-management-section-inner">
                        <div className="user-management-all-btn">
                            <Link href="/user-management" className="user-management-btn">Manage Sub Account</Link>
                            <Link href="#" className="user-management-btn active">Manage Roles</Link>
                        </div>

                        <div className="user-management-inner">
                            <div className="user-role-body-inner">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Roles</th>
                                                <th scope="col">Role Description</th>
                                                <th scope="col" className="text-center">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <p className="email-text">
                                                        Full Access
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="email-text">
                                                        The Seller Full Access role aims to manage his whole account like products, orders, reports,
                                                        settings.
                                                    </p>
                                                </td>

                                                <td>
                                                    <p className="text-center roles-text">
                                                        View Permission
                                                    </p>
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

export default ManageRolesPage