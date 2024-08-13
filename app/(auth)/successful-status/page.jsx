import Header from '@/components/auth/Header'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <section className="login-section">
        <div className="container">
          <div className="login-section-inner">
            <div className="d-flex justify-content-center">
              <div className="center">

                <figure className="close-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </figure>

                <img src="./assets/images/Congratulation.svg" alt="Congratulation" />

                <div className="d-flex flex-column gap-2">
                  <h1>
                    Congratulation!
                  </h1>
                  <p>
                    You’ve successfully created your account.
                  </p>
                </div>

                <div className="d-flex gap-3 align-items-center mt-4">
                  <Link href="/admin" className="dashboard-btn">
                    Dashboard
                  </Link>
                  <Link href="/admin/add-product" className="add-product-btn">
                    Add Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
