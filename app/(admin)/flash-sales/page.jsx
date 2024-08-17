
export default function Home() {
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
            <h1 class="title">Flash Sales</h1>

            <div class="new-registration">
              <div class="row g-3">
                <div class="col-sm-8">
                  <div class="left-content">
                    <h1 class="title">
                      {/* New Registration Entrance of Autocare Flash Sales. <br> Check Now! */}
                      New Registration Entrance of Autocare Flash Sales. Check Now!
                    </h1>

                    <p class="details">
                      Get 10% extra on joining.
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="right-content">
                    <button class="check-now-btn">
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

          <div class="order-management-body">

            <div class="flash-sales-content">

              <p class="details">
                Flash sales are short-term promotions offering significant discounts on selected products or services,
                usually lasting for a few hours or days. These sales create a sense of urgency, encouraging quick
                purchases and driving a surge in sales within a limited timeframe.
              </p>

              <ol class="list">
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
