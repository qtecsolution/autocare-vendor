import Link from 'next/link'
import React from 'react'

export default function page() {
  return (  
    <section class="login-section">
    <div class="container">
      <div class="login-section-inner">
        <div class="d-flex justify-content-center">
          <div class="center">

            <figure class="close-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </figure>

            <img src="./assets/images/successful.svg" alt="Congratulation" />
            

            <div class="d-flex flex-column gap-2 mt-3">
              <h1>
                Congratulation!
              </h1>
              <p>
              You’re all set! Your garage is ready to go online.
              </p>
            </div>

            <div class="d-flex gap-3 align-items-center mt-4">
              <Link href="/admin" class="dashboard-btn">
                Manage Garage
              </Link>
              <Link href="/products/add" class="add-product-btn">
                Add Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
