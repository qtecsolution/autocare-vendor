"use client"
import GlobalSearch from '@/components/admin/GlobalSearch'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import { usePathname, useRouter } from 'next/navigation';
import Pagination from '@/components/admin/Pagination';
import { formatDate } from '@/utils/formatDate';
import { getAuthUser } from '@/utils/auth';

function ManufacturerPage({ allManufacturer, pageProps, calculatedTotalPages }) {
    const [currentPage, setCurrentPage] = useState(parseInt(pageProps) || 1);
    const totalPages = calculatedTotalPages;
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

        // Only add query parameters if they exist
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.set('q', searchQuery);
        if (page > 1) queryParams.set('page', page);
        if (filter) queryParams.set('filter', filter);

        const queryString = queryParams.toString();
        router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
    };

    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.set('q', searchQuery);
        if (currentPage > 1) queryParams.set('page', searchQuery ? 1 : currentPage);
        if (filter) queryParams.set('filter', filter);

        const queryString = queryParams.toString();
        router.push(queryString ? `${pathname}/?${queryString}` : pathname, { scroll: false });
    }, [searchQuery, currentPage, filter]);

    const isToastShown = useRef(false);
    const sellerInfo = getAuthUser();
    useEffect(() => {
        const businessType = sellerInfo?.business_type?.name;
        if (businessType === "Service") {
            router.push('/');
        }
        const isVerified = sellerInfo?.store?.is_verified;
        if (!isVerified) {
            router.push('/');
            if (!isToastShown.current) {
                isToastShown.current = true;
                toast.custom((t) => (
                    <AlertToast
                        message={!sellerInfo?.store ? "First you need to create a store !" : "Your store is not verified !"}
                        dismiss={() => toast.dismiss(t.id)}
                    />
                ));
            }
        }
    }, [sellerInfo, router]);

    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="manage-product-section">
                    <div className="manage-product-section-header">
                        <h3 className="heading-text">
                            Manufacturer
                        </h3>

                        <div className="d-flex align-items-center gap-3">
                            <Link href="manufacturer/add" className="add-product-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332" stroke="white" stroke-width="1.67"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Add Manufacturer</span>
                            </Link>
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-3 all-buttons-inner">
                        <button className={`manage-products-btn ${filter === '' ? 'active' : ''}`}
                            onClick={() => setFilter('')}>
                            All <span>{allManufacturer?.props?.manufacturer?.results?.allManufacturersCount}</span>
                        </button>

                        <button className={`manage-products-btn ${filter === 'active' ? 'active' : ''}`}
                            onClick={() => setFilter('active')}>
                            Active <span>{allManufacturer?.props?.manufacturer?.results?.activeManufacturersCount}</span>
                        </button>

                        <button className={`manage-products-btn ${filter === 'inactive' ? 'active' : ''}`}
                            onClick={() => setFilter('inactive')}>
                            Inactive <span>{allManufacturer?.props?.manufacturer?.results?.inactiveManufacturers}</span>
                        </button>
                    </div>
                </section>

                <section className="manage-all-brand-section">
                    <div className="manage-all-brand-section-inner">
                        <div className="manage-all-brand-section-inner-header">
                            <form className="all-products-form">
                                <label for="search-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                            stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </label>

                                <input className="page-search-input" type="text" name="" id="search-input" placeholder="Search"
                                    required
                                    value={searchQuery}
                                    onChange={handleSearchQuery}
                                />
                            </form>
                        </div>

                        <div className="manage-all-brand-section-inner-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr scope="col">
                                            <th className="product-info-header">
                                                {/* <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox" /> */}
                                                <label for="table-header-checkbox" tabindex="4">Manufacturer Name</label>
                                            </th>
                                            {/* <th scope="col">Relation</th>
                                        <th scope="col">Category</th> */}
                                            <th scope="col">Logo</th>
                                            <th scope="col" className="text-center">Authorization Date</th>
                                            <th scope="col" className="text-center">STATUS</th>
                                            <th scope="col" className="text-center">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allManufacturer?.props?.manufacturer?.results?.manufacturers?.map((manufacturer) => (
                                            <tr key={manufacturer?.id}>
                                                <td className="product-info-inner">
                                                    <div className="product-info">
                                                        {/* <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox1" /> */}
                                                        <label className="label-text" for="table-header-checkbox1" tabindex="4">{manufacturer?.name}</label>
                                                    </div>
                                                </td>

                                                <td className="text-center">
                                                    <img src={manufacturer?.logo ? manufacturer.logo : ''} alt={manufacturer?.name} width="40" height="40" />
                                                </td>
                                                <td className="text-center">
                                                    <p className="pice-text ">
                                                        {formatDate(manufacturer?.updated_at)}
                                                    </p>
                                                </td>

                                                <td className="text-center">
                                                    <span className={`status ${manufacturer?.is_active ? 'active' : 'inactive'}`}>{manufacturer?.is_active ? 'Active' : 'Inactive'}</span>
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
                                                            <li><Link href={"/manufacturer/edit/" + manufacturer?.id} class="dropdown-item">Edit</Link></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
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

export default ManufacturerPage