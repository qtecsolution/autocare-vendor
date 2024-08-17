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
                <label class="input-label" for="email">Email</label>
                <div class="input-field">
                  <input type="email" name="" id="email" placeholder="Valid Email Address" />
                </div>
              </div>

              <div class="inner-input">
                <label class="input-label" for="name">Name</label>
                <div class="input-field">
                  <input type="text" name="" id="name" placeholder="Type here" />
                </div>
              </div>

              <div class="inner-input">
                <label class="input-label" for="password">Password</label>
                <div class="input-field">
                  <input type="password" name="" id="password" placeholder="****************" />
                </div>
              </div>

              <div class="">
                <input class="box-checkbox" type="checkbox" id="box-checkbox" />
                <label for="box-checkbox" class="label-text" tabindex="4">Send username and password to new
                  user email</label>
              </div>

              <a href="#" class="login-btn">
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
