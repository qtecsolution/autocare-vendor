
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

          <a href="./notification.html" class="notification-svg active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M5.25022 9C5.25022 7.20979 5.96138 5.4929 7.22725 4.22703C8.49312 2.96116 10.21 2.25 12.0002 2.25C13.7904 2.25 15.5073 2.96116 16.7732 4.22703C18.0391 5.4929 18.7502 7.20979 18.7502 9V9.75C18.7502 11.873 19.5502 13.807 20.8682 15.27C20.9503 15.361 21.0089 15.4707 21.0388 15.5896C21.0686 15.7084 21.0689 15.8328 21.0396 15.9518C21.0103 16.0708 20.9523 16.1808 20.8707 16.2722C20.789 16.3636 20.6862 16.4335 20.5712 16.476C19.0272 17.046 17.4112 17.466 15.7402 17.719C15.7778 18.2331 15.7091 18.7495 15.5381 19.2359C15.3672 19.7222 15.0979 20.1681 14.7469 20.5457C14.396 20.9233 13.9709 21.2245 13.4983 21.4304C13.0257 21.6364 12.5157 21.7427 12.0002 21.7427C11.4847 21.7427 10.9747 21.6364 10.5021 21.4304C10.0295 21.2245 9.60448 20.9233 9.25351 20.5457C8.90254 20.1681 8.63319 19.7222 8.46229 19.2359C8.29138 18.7495 8.22259 18.2331 8.26022 17.719C6.61187 17.4692 4.99321 17.0524 3.42922 16.475C3.31435 16.4326 3.21161 16.3627 3.12998 16.2715C3.04834 16.1802 2.99029 16.0703 2.9609 15.9515C2.9315 15.8326 2.93166 15.7084 2.96135 15.5896C2.99103 15.4708 3.04936 15.3611 3.13122 15.27C4.49802 13.7567 5.2533 11.7892 5.25022 9.75V9ZM9.75222 17.9C9.73942 18.2032 9.7881 18.5058 9.8953 18.7897C10.0025 19.0736 10.166 19.3329 10.376 19.5519C10.586 19.771 10.8382 19.9453 11.1173 20.0644C11.3964 20.1835 11.6968 20.2448 12.0002 20.2448C12.3037 20.2448 12.604 20.1835 12.8831 20.0644C13.1622 19.9453 13.4144 19.771 13.6244 19.5519C13.8344 19.3329 13.9979 19.0736 14.1051 18.7897C14.2123 18.5058 14.261 18.2032 14.2482 17.9C12.7526 18.0347 11.2479 18.0347 9.75222 17.9Z"
                fill="#7B7F95" />
            </svg>
          </a>
        </div>
      </section>

      <div class="notification-inner">
        <h1 class="title">Notification</h1>

        <div class="d-flex flex-column gap-3">
          <div class="notification-inner-cart">
            <div class="d-flex gap-3">
              <figure class="success-img">
                <img src="./assets/images/success-icon.png" alt="" />
              </figure>
              <div class="cart-content">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex flex-column gap-1">
                    <h3 class="title">You just got a New Order <span class="success">#123456</span></h3>
                    <p class="details">A new order has been placed.</p>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <a href="" class="dsismiss-btn">
                      Dismiss
                    </a>
                    <a href="#" class="viewChanges-btn">
                      View changes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="notification-inner-cart-right">
              <button class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <div class="d-flex align-items-center gap-2">
                <figure class="date-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                      stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </figure>
                <p class="notification-time">Just Now</p>
              </div>
            </div>
          </div>

          <div class="notification-inner-cart">
            <div class="d-flex gap-3">
              <figure class="success-img">
                <img src="./assets/images/success-icon.png" alt="" />
              </figure>
              <div class="cart-content">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex flex-column gap-1">
                    <h3 class="title">You just got a New Order <span class="success">#123456</span></h3>
                    <p class="details">A new order has been placed.</p>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <a href="" class="dsismiss-btn">
                      Dismiss
                    </a>
                    <a href="#" class="viewChanges-btn">
                      View changes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="notification-inner-cart-right">
              <button class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <div class="d-flex align-items-center gap-2">
                <figure class="date-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                      stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </figure>
                <p class="notification-time">Just Now</p>
              </div>
            </div>
          </div>

          <div class="notification-inner-cart">
            <div class="d-flex gap-3">
              <figure class="success-img">
                <img src="./assets/images/success-icon.png" alt="" />
              </figure>
              <div class="cart-content">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex flex-column gap-1">
                    <h3 class="title">You just got a New Order <span class="success">#123456</span></h3>
                    <p class="details">A new order has been placed.</p>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <a href="" class="dsismiss-btn">
                      Dismiss
                    </a>
                    <a href="#" class="viewChanges-btn">
                      View changes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="notification-inner-cart-right">
              <button class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <div class="d-flex align-items-center gap-2">
                <figure class="date-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                      stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </figure>
                <p class="notification-time">30 mins ago</p>
              </div>
            </div>
          </div>

          <div class="notification-inner-cart">
            <div class="d-flex gap-3">
              <figure class="success-img">
                <img src="./assets/images/success-icon.png" alt="" />
              </figure>
              <div class="cart-content">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex flex-column gap-1">
                    <h3 class="title">You just got a New Order <span class="success">#123456</span></h3>
                    <p class="details">A new order has been placed.</p>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <a href="" class="dsismiss-btn">
                      Dismiss
                    </a>
                    <a href="#" class="viewChanges-btn">
                      View changes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="notification-inner-cart-right">
              <button class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <div class="d-flex align-items-center gap-2">
                <figure class="date-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                      stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </figure>
                <p class="notification-time">1 hour ago</p>
              </div>
            </div>
          </div>

          <div class="notification-inner-cart">
            <div class="d-flex gap-3">
              <figure class="success-img">
                <img src="./assets/images/canceled-icon.png" alt="" />
              </figure>
              <div class="cart-content">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex flex-column gap-1">
                    <h3 class="title">Order <span class="canceled">#123456</span> has been Canceled</h3>
                    <p class="details">A new order has been placed.</p>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <a href="" class="dsismiss-btn">
                      Dismiss
                    </a>
                    <a href="#" class="viewChanges-btn">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="notification-inner-cart-right">
              <button class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <div class="d-flex align-items-center gap-2">
                <figure class="date-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                      stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </figure>
                <p class="notification-time">24 July 2024, 10:00 PM</p>
              </div>
            </div>
          </div>

          <div class="notification-inner-cart">
            <div class="d-flex gap-3">
              <figure class="success-img">
                <img src="./assets/images/alart-icon.png" alt="" />
              </figure>
              <div class="cart-content">
                <div class="d-flex flex-column gap-2">
                  <div class="d-flex flex-column gap-1">
                    <h3 class="title">We’ve just released a new feature</h3>
                    <p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur,
                      ipsum
                      dolor.</p>
                  </div>
                  <div class="d-flex align-items-center gap-3">
                    <a href="" class="dsismiss-btn">
                      Dismiss
                    </a>
                    <a href="#" class="viewChanges-btn">
                      View changes
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="notification-inner-cart-right">
              <button class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <div class="d-flex align-items-center gap-2">
                <figure class="date-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                      stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </figure>
                <p class="notification-time">24 July 2024, 10:00 PM</p>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  </main>
  )
}
