import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <section class="setup-store-section">
        <div class="container">
          <div class="setup-store-section-inner">
            <div class="d-flex justify-content-center">
              <div class="center">
                <div class="d-flex flex-column gap-3">
                  <h1 class="title">
                    Availabilities
                  </h1>
    
                  <p class="details">
                    Please submit your Garage information to setup.
                  </p>
                </div>
    
                <form class="setup-store-form">
                  <div class="box">
                    <label class="category-select-label"> Business Hours </label>
                    <select class="wide selectize">
                      <option data-display="Select">Everyday</option>
                      <option value="1">Dhaka</option>
                      <option value="2">Another option</option>
                      <option value="4">Potato</option>
                    </select>
                  </div>
    
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <div class="box">
                        <label class="category-select-label"> Opening Time </label>
                        <select class="wide selectize">
                          <option data-display="Select">Select</option>
                          <option value="1">Dhaka</option>
                          <option value="2">Another option</option>
                          <option value="4">Potato</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="box">
                        <label class="category-select-label"> Closing Time </label>
                        <select class="wide selectize">
                          <option data-display="Select">Select</option>
                          <option value="1">Dhaka</option>
                          <option value="2">Another option</option>
                          <option value="4">Potato</option>
                        </select>
                      </div>
                    </div>
                  </div>
    
                  <div class="box">
                    <label class="category-select-label"> Break Time </label>
                    <select class="wide selectize">
                      <option data-display="Select">Select</option>
                      <option value="1">Dhaka</option>
                      <option value="2">Another option</option>
                      <option value="4">Potato</option>
                    </select>
                  </div>
    
                  <Link href="/garage-services" class="login-btn">
                    Confirm
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
