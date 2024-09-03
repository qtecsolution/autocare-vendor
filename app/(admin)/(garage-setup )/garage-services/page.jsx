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
                Services
              </h1>

              <p class="details">
                Please choose Product categories that offered
              </p>
            </div>

            <form class="setup-store-form">
              <div class="login-checkbox-inner">
                <div>
                  <input class="login-checkbox" type="checkbox" name="account-type" id="login-checkbox1" />
                  <label class="label-border" for="login-checkbox1" tabindex="4">Engine & Transmission </label>
                </div>

                <div>
                  <input class="login-checkbox" type="checkbox" name="account-type" id="login-checkbox2" />
                  <label class="label-border" for="login-checkbox2" tabindex="4">Electrical & Electronics</label>
                </div>

                <div>
                  <input class="login-checkbox" type="checkbox" name="account-type" id="login-checkbox3" />
                  <label class="label-border" for="login-checkbox3" tabindex="4">Brakes & Suspension</label>
                </div>

                <div>
                  <input class="login-checkbox" type="checkbox" name="account-type" id="login-checkbox4" />
                  <label class="label-border" for="login-checkbox4" tabindex="4">Tires & Wheels</label>
                </div>

                <div>
                  <input class="login-checkbox" type="checkbox" name="account-type" id="login-checkbox5" />
                  <label class="label-border" for="login-checkbox5" tabindex="4">Paint Sealants</label>
                </div>

                <div>
                  <input class="login-checkbox" type="checkbox" name="account-type" id="login-checkbox6" />
                  <label class="label-border" for="login-checkbox6" tabindex="4">Turbo Traverse</label>
                </div>

                <div>
                  <input class="login-checkbox" type="checkbox" name="account-type" id="login-checkbox7" />
                  <label class="label-border" for="login-checkbox7" tabindex="4">Fuel System</label>
                </div>
              </div>

              <Link href="/garage-successful" class="login-btn">
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
