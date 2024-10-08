"use client"
import GlobalSearch from '@/components/admin/GlobalSearch'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Pagination from '@/components/admin/Pagination';
import { usePathname, useRouter } from "next/navigation";
import Select from 'react-select';
import EmptyServiceList from './EmptyServiceList';

function ServiceListPage({ allServices, pageProps, calculatedTotalPages }) {

    const [currentPage, setCurrentPage] = useState(parseInt(pageProps) || 1);
    const totalPages = calculatedTotalPages;
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    const handleSearchQuery = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
    };

    const handlePagination = (page) => {
        setCurrentPage(page);

        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.set('q', searchQuery);
        if (page > 1) queryParams.set('page', page);
        if (filter) queryParams.set('filter_by', filter);

        const queryString = queryParams.toString();
        router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
    };

    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.set('q', searchQuery);
        if (currentPage > 1) queryParams.set('page', searchQuery ? 1 : currentPage);
        if (filter) queryParams.set('filter_by', filter);

        const queryString = queryParams.toString();
        router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
    }, [searchQuery, currentPage, filter]);

    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="manage-product-section">
                    <div className="manage-product-section-header">
                        <h3 className="heading-text">
                            Services
                        </h3>

                        <div className="d-flex align-items-center gap-3">
                            {/* <a href="#" className="import-btn">
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
                            </a> */}
                            <Link href="/add-service" className="add-product-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332" stroke="white" stroke-width="1.67"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Add Service</span>
                            </Link>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 all-buttons-inner">
                        <button className={`manage-products-btn ${filter === '' ? 'active' : ''}`}
                            onClick={() => setFilter('')}>
                            All <span>{allServices?.props?.services?.results?.allServicesCount}</span>
                        </button>

                        <button className={`manage-products-btn ${filter === 'active' ? 'active' : ''}`}
                            onClick={() => setFilter('active')}>
                            Active <span>{allServices?.props?.services?.results?.activeServicesCount}</span>
                        </button>

                        <button className={`manage-products-btn ${filter === 'inactive' ? 'active' : ''}`}
                            onClick={() => setFilter('inactive')}>
                            Inactive <span>{allServices?.props?.services?.results?.inactiveServicesCount}</span>
                        </button>
                    </div>
                </section>

                <section className="manage-all-product-section">
                    <div className="manage-all-product-section-inner">
                        <div className="manage-all-product-section-inner-header">
                            <div className="all-products-form">
                                <label for="search-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                            stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </label>

                                <input
                                    className="page-search-input"
                                    type="text"
                                    id="search-input"
                                    placeholder="Search"
                                    required
                                    value={searchQuery}
                                    onChange={handleSearchQuery}
                                />
                            </div>
                        </div>

                        {allServices?.props?.services?.results?.services?.length > 0 ?
                            <div className="manage-all-product-section-inner-body">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="thead-light">
                                            <tr>
                                                <th scope="col" class="product-info-header">
                                                    <input class="table-header-checkbox" type="checkbox" id="table-header-checkbox" />
                                                    <label for="table-header-checkbox" tabindex="4">Product</label>
                                                </th>
                                                <th scope="col">Price</th>
                                                {/* <th scope="col">Availabilities</th> */}
                                                <th scope="col" class="text-center">booked</th>
                                                <th scope="col" class="text-center">active</th>
                                                <th scope="col" class="text-center">STATUS</th>
                                                <th scope="col" class="text-center">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allServices?.props?.services?.results?.services?.map((service) => (
                                                <tr key={service?.id}>
                                                    <td class="product-info-inner">
                                                        <div class="product-info">
                                                            <input class="table-body-checkbox" type="checkbox" id="table-body-checkbox" />
                                                            <label class="d-flex align-items-center flex-shrink-0" for="table-body-checkbox" tabindex="4">
                                                                <img class="product-image" src={service?.image} alt="Service Image" />
                                                            </label>

                                                            <div class="product-details d-flex flex-column gap-2">
                                                                <p class="title">{service?.name}</p>

                                                                <div class="d-flex align-items-center gap-3">
                                                                    {/* <div class="d-flex align-items-center gap-2 buy-product">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                                                        fill="none">
                                                                        <path
                                                                            d="M1.3125 1.3125C1.19647 1.3125 1.08519 1.35859 1.00314 1.44064C0.921094 1.52269 0.875 1.63397 0.875 1.75C0.875 1.86603 0.921094 1.97731 1.00314 2.05936C1.08519 2.14141 1.19647 2.1875 1.3125 2.1875H2.121C2.22017 2.1875 2.3065 2.254 2.33217 2.34967L3.82433 7.945C3.35567 8.06711 2.94074 8.34122 2.64454 8.7244C2.34834 9.10758 2.1876 9.57819 2.1875 10.0625C2.1875 10.304 2.3835 10.5 2.625 10.5H11.8125C11.9285 10.5 12.0398 10.4539 12.1219 10.3719C12.2039 10.2898 12.25 10.1785 12.25 10.0625C12.25 9.94647 12.2039 9.83519 12.1219 9.75314C12.0398 9.67109 11.9285 9.625 11.8125 9.625H3.13717C3.22766 9.36904 3.3953 9.14744 3.61699 8.99073C3.83868 8.83402 4.10351 8.74992 4.375 8.75H10.9188C11.0008 8.75 11.0811 8.72698 11.1506 8.68356C11.2201 8.64014 11.276 8.57807 11.312 8.50442C11.978 7.13773 12.5547 5.72933 13.0387 4.28808C13.0578 4.23107 13.0649 4.17072 13.0597 4.11082C13.0545 4.05091 13.0369 3.99273 13.0082 3.93991C12.9794 3.88708 12.9401 3.84075 12.8927 3.8038C12.8452 3.76686 12.7907 3.74009 12.7324 3.72517C9.6558 2.94067 6.48786 2.57241 3.31333 2.63025L3.178 2.1245C3.11591 1.8916 2.97862 1.68573 2.78748 1.53889C2.59633 1.39205 2.36204 1.31246 2.121 1.3125H1.3125ZM2.1875 11.8125C2.1875 11.5804 2.27969 11.3579 2.44378 11.1938C2.60788 11.0297 2.83044 10.9375 3.0625 10.9375C3.29456 10.9375 3.51712 11.0297 3.68122 11.1938C3.84531 11.3579 3.9375 11.5804 3.9375 11.8125C3.9375 12.0446 3.84531 12.2671 3.68122 12.4312C3.51712 12.5953 3.29456 12.6875 3.0625 12.6875C2.83044 12.6875 2.60788 12.5953 2.44378 12.4312C2.27969 12.2671 2.1875 12.0446 2.1875 11.8125ZM9.625 11.8125C9.625 11.5804 9.71719 11.3579 9.88128 11.1938C10.0454 11.0297 10.2679 10.9375 10.5 10.9375C10.7321 10.9375 10.9546 11.0297 11.1187 11.1938C11.2828 11.3579 11.375 11.5804 11.375 11.8125C11.375 12.0446 11.2828 12.2671 11.1187 12.4312C10.9546 12.5953 10.7321 12.6875 10.5 12.6875C10.2679 12.6875 10.0454 12.5953 9.88128 12.4312C9.71719 12.2671 9.625 12.0446 9.625 11.8125Z"
                                                                            fill="#7B7F95" />
                                                                    </svg>
                                                                    <p>3256</p>
                                                                </div> */}

                                                                    {/* <div class="d-flex align-items-center gap-2 see-product">
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
                                                                </div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div>
                                                            <p class="pice-text">
                                                                {service?.maximum_price ? service?.maximum_price : service?.minimum_price} Tk
                                                            </p>
                                                        </div>
                                                    </td>

                                                    {/* <td>
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
                                                        <input type="checkbox" checked />
                                                        <span class="slider round"></span>
                                                    </label>
                                                </td> */}

                                                    <td class="text-center">
                                                        <p class="pice-text">
                                                            50
                                                        </p>
                                                    </td>

                                                    <td class="text-center">
                                                        <p class="pice-text ">
                                                            50
                                                        </p>
                                                    </td>

                                                    <td class="text-center">
                                                        <span className={`status ${service?.is_active ? 'active' : 'inactive'}`}>{service?.is_active ? 'Active' : 'Inactive'}</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <div class="dropdown">
                                                            <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <figure className="action-btn">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21" fill="none">
                                                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                                                                        <circle cx="2.5" cy="10.5" r="2.5" fill="#D9D9D9" />
                                                                        <circle cx="2.5" cy="18.5" r="2.5" fill="#D9D9D9" />
                                                                    </svg>
                                                                </figure>
                                                            </button>
                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                <li><Link href={"/service-list/edit-service/" + service?.id} class="dropdown-item">Edit</Link></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            : <EmptyServiceList />
                        }
                    </div>
                </section>

                <section className="pagination-section">
                    <div className="pagination-section-inner">
                        <div className="left">
                            {/* <p className="text">Showing 1 to 10 of 23 entries</p> */}
                        </div>
                        <div className="right">
                            <Pagination
                                totalPages={totalPages}
                                currentPage={currentPage}
                                handlePagination={handlePagination}
                            />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default ServiceListPage