import Link from 'next/link'
import React from 'react'

export default function page() {
  return (  
    <section class="login-section">
    <div class="container">
      <div class="login-section-inner">
        <div class="d-flex justify-content-center">
          <div class="center">
            <div class="d-flex flex-column gap-2 mt-3">
              <h1>
                Page Not Found !
              </h1>
              {/* <p>
                Goto Home
              </p> */}
            </div>

            <div class="d-flex gap-3 align-items-center mt-4">
               {/* <Link href="/" class="add-product-btn">
                Home
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
