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
                Add User
              </h1>
            </div>

            <form class="setup-store-form">
              <div class="box">
                <label class="category-select-label"> Role </label>
                <select class="wide selectize">
                  <option data-display="Select">Select</option>
                  <option value="1">Dhaka</option>
                  <option value="2">Another option</option>
                  <option value="4">Potato</option>
                </select>
              </div>

              <div class="inner-input">
                <label class="input-label" for="description">Role Description</label>
                <div class="input-field">
                  <textarea name="" id="description" cols="30" rows="4" placeholder="Explain"></textarea>
                </div>
              </div>


              <Link href="/permissions" class="login-btn">
                Continue
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
