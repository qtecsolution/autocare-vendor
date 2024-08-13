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
            <div className="row g-4">
              <div className="col-lg-6 align-self-center">
                <div className="left">
                  <h1 className="title">
                    Welcome back to Autocare
                    Vendor App
                  </h1>

                  <p className="details">
                    Your all-in-one platform for efficiently managing your garage and shop. Seamlessly track services, add
                    products, and enhance customer satisfaction.
                  </p>

                  <div className="user">
                    <div className="user-img">
                      <img src="./assets/images/user1.png" alt="userImg" />
                      <img className="img-left" src="./assets/images/user2.png" alt="userImg" />
                      <img className="img-left" src="./assets/images/user3.png" alt="userImg" />
                      <img className="img-left" src="./assets/images/user4.png" alt="userImg" />
                    </div>

                    <p className="user-text">
                      1k+ peoples joined with us. Now it’s your turn
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="right">
                  <div className="login-form">
                    <div className="d-flex flex-column gap-3">
                      <h1 className="form-title">
                        Registration
                      </h1>

                      <p className="form-details">
                        Already have an account?
                        <a href="./login.html">Login</a>
                      </p>
                    </div>

                    <form className="form-inner">
                      <div className="inner-input">
                        <label className="input-label" for="phone-number">Phone Number</label>
                        <div className="input-field">
                          <input type="number" name="" id="phone-number" placeholder="Enter number" />
                        </div>
                      </div>

                      <Link href="/otp" className="login-btn">
                        Verify
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
