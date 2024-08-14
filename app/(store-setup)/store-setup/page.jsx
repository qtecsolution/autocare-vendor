import React from 'react'

function page() {
  return (
    
  <section class="setup-store-section">
  <div class="container">
    <div class="setup-store-section-inner">
      <div class="d-flex justify-content-center">
        <div class="center">
          <div class="d-flex flex-column gap-3">
            <h1 class="title">
              Setup Store
            </h1>

            <p class="details">
              Please submit your Store information to setup.
            </p>
          </div>

          <form class="setup-store-form">
            <div class="inner-input">
              <label class="input-label" for="Password">Store Name</label>
              <div class="input-field">
                <input type="password" name="" id="Password" placeholder="Type here" />
              </div>
            </div>

            <div class="inner-input">
              <label class="input-label" for="Address">Location</label>
              <div class="input-field">
                <input type="text" name="" id="Address" placeholder="Full Address" />
                <div class="location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.75239 15.1465L7.75479 15.1473C7.91239 15.2161 8.00039 15.2001 8.00039 15.2001C8.00039 15.2001 8.08839 15.2161 8.24679 15.1473L8.24839 15.1465L8.25319 15.1441L8.26759 15.1377C8.34353 15.1024 8.41849 15.0651 8.49239 15.0257C8.64119 14.9489 8.84919 14.8337 9.09799 14.6793C9.59399 14.3721 10.254 13.9065 10.9172 13.2673C12.242 11.9905 13.6004 9.9945 13.6004 7.2001C13.6004 6.4647 13.4555 5.73649 13.1741 5.05707C12.8927 4.37765 12.4802 3.76031 11.9602 3.2403C11.4402 2.72029 10.8228 2.3078 10.1434 2.02637C9.46399 1.74495 8.73579 1.6001 8.00039 1.6001C7.26499 1.6001 6.53679 1.74495 5.85736 2.02637C5.17794 2.3078 4.5606 2.72029 4.04059 3.2403C3.52058 3.76031 3.10809 4.37765 2.82667 5.05707C2.54524 5.73649 2.40039 6.4647 2.40039 7.2001C2.40039 9.9937 3.75879 11.9905 5.08439 13.2673C5.63939 13.8004 6.24887 14.2736 6.90279 14.6793C7.15606 14.8366 7.41662 14.9818 7.68359 15.1145L7.73319 15.1377L7.74759 15.1441L7.75239 15.1465ZM8.00039 9.0001C8.47778 9.0001 8.93562 8.81046 9.27318 8.47289C9.61075 8.13532 9.80039 7.67749 9.80039 7.2001C9.80039 6.72271 9.61075 6.26487 9.27318 5.92731C8.93562 5.58974 8.47778 5.4001 8.00039 5.4001C7.523 5.4001 7.06516 5.58974 6.7276 5.92731C6.39003 6.26487 6.20039 6.72271 6.20039 7.2001C6.20039 7.67749 6.39003 8.13532 6.7276 8.47289C7.06516 8.81046 7.523 9.0001 8.00039 9.0001Z"
                      fill="#7B7F95" />
                  </svg>
                  <p>Set on map</p>
                </div>
              </div>
            </div>

            <div class="box">
              <label class="category-select-label"> City </label>
              <select class="wide selectize">
                <option data-display="Select">Select</option>
                <option value="1">Dhaka</option>
                <option value="2">Another option</option>
                <option value="4">Potato</option>
              </select>
            </div>

            <a href="store-availabilities" class="login-btn">
              Save & Continue
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default page