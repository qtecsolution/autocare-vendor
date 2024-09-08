"use client"
import GlobalSearch from '@/components/admin/GlobalSearch'
import React, { useState } from 'react'
import Link from 'next/link'
import Select from 'react-select';

function BrandListPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedNew, setSelectedNew] = useState(null);

    const categories = [
        { value: 'cat1', label: 'Category 1' },
        { value: 'cat2', label: 'Category 2' },
        { value: 'cat3', label: 'Category 3' },
    ];
    const statuses = [
        { value: 'st1', label: 'Status 1' },
        { value: 'st2', label: 'Status 2' },
        { value: 'st3', label: 'Status 3' },
    ];
    const newest = [
        { value: 'new1', label: 'New 1' },
        { value: 'new2', label: 'New 2' },
        { value: 'new3', label: 'New 3' },
    ];
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="manage-product-section">
                    <div className="manage-product-section-header">
                        <h3 className="heading-text">
                            Brand Management
                        </h3>

                        <div className="d-flex align-items-center gap-3">
                            <a href="./apply-for-brand.html" className="add-product-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332" stroke="white" stroke-width="1.67"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Apply For New Brand</span>
                            </a>
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
                                    <Select
                                        defaultValue={selectedCategory}
                                        onChange={setSelectedCategory}
                                        options={categories}
                                        className='bg-color selectize'
                                        placeholder="Category"
                                    />
                                </div>

                                <div className="box">
                                    <Select
                                        defaultValue={selectedStatus}
                                        onChange={setSelectedStatus}
                                        options={statuses}
                                        className='bg-color selectize'
                                        placeholder="Status"
                                    />
                                </div>

                                <div className="box">
                                    <Select
                                        defaultValue={selectedNew}
                                        onChange={setSelectedNew}
                                        options={newest}
                                        className='bg-color selectize'
                                        placeholder="Newest"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="manage-all-product-section-inner-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="thead-light">
                                        <tr scope="col">
                                            <th className="product-info-header">
                                                <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox" />
                                                <label for="table-header-checkbox" tabindex="4">Brand Details</label>
                                            </th>
                                            <th scope="col">Relation</th>
                                            <th scope="col">Category</th>
                                            <th scope="col" className="text-center">Authorization Date</th>
                                            <th scope="col" className="text-center">STATUS</th>
                                            <th scope="col" className="text-center">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-info-inner">
                                                <div className="product-info">
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox1" />
                                                    <label className="label-text" for="table-header-checkbox1" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Engine & Transmission
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox2" />
                                                    <label className="label-text" for="table-header-checkbox2" tabindex="4">Ford</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Brakes & Suspension
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox3" />
                                                    <label className="label-text" for="table-header-checkbox3" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Brand / Manufacturer
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Tires & Wheels
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
                                                </p>
                                            </td>

                                            <td className="text-center">
                                                <span className="status violation">Rejected</span>
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox4" />
                                                    <label className="label-text" for="table-header-checkbox4" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Fuel System
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox5" />
                                                    <label className="label-text" for="table-header-checkbox5" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Engine & Transmission
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox1" />
                                                    <label className="label-text" for="table-header-checkbox1" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Engine & Transmission
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox2" />
                                                    <label className="label-text" for="table-header-checkbox2" tabindex="4">Ford</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Brakes & Suspension
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox3" />
                                                    <label className="label-text" for="table-header-checkbox3" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Brand / Manufacturer
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Tires & Wheels
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
                                                </p>
                                            </td>

                                            <td className="text-center">
                                                <span className="status violation">Rejected</span>
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox4" />
                                                    <label className="label-text" for="table-header-checkbox4" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Fuel System
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox5" />
                                                    <label className="label-text" for="table-header-checkbox5" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Engine & Transmission
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox1" />
                                                    <label className="label-text" for="table-header-checkbox1" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Engine & Transmission
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox2" />
                                                    <label className="label-text" for="table-header-checkbox2" tabindex="4">Ford</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Brakes & Suspension
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox3" />
                                                    <label className="label-text" for="table-header-checkbox3" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Brand / Manufacturer
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Tires & Wheels
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
                                                </p>
                                            </td>

                                            <td className="text-center">
                                                <span className="status violation">Rejected</span>
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox4" />
                                                    <label className="label-text" for="table-header-checkbox4" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Fuel System
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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
                                                    <input className="table-header-checkbox" type="checkbox" id="table-header-checkbox5" />
                                                    <label className="label-text" for="table-header-checkbox5" tabindex="4">Toyota</label>
                                                </div>
                                            </td>

                                            <td>
                                                <div>
                                                    <p className="relation-text">
                                                        Exclusive Distributor
                                                    </p>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-4">
                                                    <p className="pice-text">
                                                        Engine & Transmission
                                                    </p>
                                                </div>
                                            </td>

                                            <td className="text-center">
                                                <p className="pice-text ">
                                                    20/12/2000
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

export default BrandListPage