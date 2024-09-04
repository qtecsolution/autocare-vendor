import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'

function CampaignListPage() {
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="order-management-section">
                    <div className="order-management-section-inner">
                        <div className="order-management-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="title"> Campaign List </h1>
                                <button className="new-campaign-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10.0001 4.16663V15.8333M4.16675 9.99996H15.8334" stroke="white" stroke-width="1.67"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span>
                                        New Campaign
                                    </span>
                                </button>
                            </div>

                            <div className="d-flex align-items-center gap-3 all-buttons-inner">
                                <button className="manage-products-btn active">
                                    <span className="text">All</span>
                                    <span className="number">365</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Available Campaign</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Registered Campaign</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Ineligible Campaign</span>
                                    <span className="number">0</span>
                                </button>

                                <button className="manage-products-btn">
                                    <span className="text">Daily Sales</span>
                                    <span className="number">0</span>
                                </button>
                            </div>
                        </div>

                        <div className="order-management-body">
                            <div className="order-management-body-top">
                                <div className="order-management-search-inner">
                                    <form action="" className="order-form">
                                        <div className="order-input">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                                    stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <input type="text" name="" id="" placeholder="Search Campaigns" />
                                        </div>
                                    </form>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    <div className="w-100">
                                        <select className="wide selectize">
                                            <option data-display="Select">Status</option>
                                            <option value="1">Status 1</option>
                                        </select>
                                    </div>

                                    <div className="w-100">
                                        <select className="wide selectize">
                                            <option data-display="Select">Newest</option>
                                            <option value="1">Oldest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5"></div>
                            <div className="p-5"></div>
                            <div className="p-5"></div>
                            {/* 
                            <div className="order-management-body-main-content">
                                <div className="main-content-inner">
                                    <img src="./assets/images/no-campaigns-found.svg" alt="No Order Found img" />
                                    <h3 className="title">
                                        No Campaigns Found
                                    </h3>
                                    <p className="details">
                                        There’s no Campaigns found in your list at this moment. Your list will show here.
                                    </p>
                                </div>
                            </div>  */}
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default CampaignListPage