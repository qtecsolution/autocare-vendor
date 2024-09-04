import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'

function FlashSalesPage() {
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="order-management-section">
                    <div className="order-management-section-inner">
                        <div className="order-management-header">
                            <h1 className="title">Flash Sales</h1>

                            <div className="new-registration">
                                <div className="row g-3">
                                    <div className="col-sm-8">
                                        <div className="left-content">
                                            <h1 className="title">
                                                {/* New Registration Entrance of Autocare Flash Sales. <br> Check Now! */}
                                                New Registration Entrance of Autocare Flash Sales. Check Now!
                                            </h1>

                                            <p className="details">
                                                Get 10% extra on joining.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="right-content">
                                            <button className="check-now-btn">
                                                <span>Check Now</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M3 10C3 9.80109 3.07902 9.61033 3.21967 9.46968C3.36032 9.32903 3.55109 9.25001 3.75 9.25001H14.388L10.23 5.29001C10.1557 5.22257 10.0956 5.1409 10.0534 5.04983C10.0112 4.95875 9.98771 4.86014 9.98432 4.75982C9.98093 4.65951 9.99771 4.55953 10.0337 4.46582C10.0696 4.37211 10.124 4.28657 10.1937 4.21427C10.2633 4.14196 10.3467 4.08437 10.439 4.04491C10.5313 4.00544 10.6306 3.9849 10.7309 3.9845C10.8313 3.98411 10.9307 4.00386 11.0233 4.0426C11.1159 4.08133 11.1998 4.13826 11.27 4.21001L16.77 9.46001C16.8426 9.52997 16.9003 9.61385 16.9398 9.70663C16.9792 9.79941 16.9995 9.89919 16.9995 10C16.9995 10.1008 16.9792 10.2006 16.9398 10.2934C16.9003 10.3862 16.8426 10.47 16.77 10.54L11.27 15.79C11.1998 15.8618 11.1159 15.9187 11.0233 15.9574C10.9307 15.9962 10.8313 16.0159 10.7309 16.0155C10.6306 16.0151 10.5313 15.9946 10.439 15.9551C10.3467 15.9156 10.2633 15.8581 10.1937 15.7857C10.124 15.7134 10.0696 15.6279 10.0337 15.5342C9.99771 15.4405 9.98093 15.3405 9.98432 15.2402C9.98771 15.1399 10.0112 15.0413 10.0534 14.9502C10.0956 14.8591 10.1557 14.7774 10.23 14.71L14.388 10.75H3.75C3.55109 10.75 3.36032 10.671 3.21967 10.5303C3.07902 10.3897 3 10.1989 3 10Z"
                                                        fill="#0F766D" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-management-body">

                            <div className="flash-sales-content">

                                <p className="details">
                                    Flash sales are short-term promotions offering significant discounts on selected products or services,
                                    usually lasting for a few hours or days. These sales create a sense of urgency, encouraging quick
                                    purchases and driving a surge in sales within a limited timeframe.
                                </p>

                                <ol className="list">
                                    <li>
                                        Boosts Sales Quickly: <span>Generates a rapid increase in sales and revenue.</span>
                                    </li>
                                    <li>
                                        Clears Inventory: <span>Helps move excess or slow-moving stock quickly.</span>
                                    </li>
                                    <li>
                                        Attracts New Customers: <span>Draws in customers who may not have purchased otherwise.</span>
                                    </li>
                                    <li>
                                        Enhances Brand Visibility: <span>Creates buzz and increases brand awareness.</span>
                                    </li>
                                    <li>
                                        Encourages Repeat Business: <span>Often leads to follow-up purchases from satisfied
                                            customers.</span>
                                    </li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default FlashSalesPage