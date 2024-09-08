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
                    Business Type
                  </h1>

                  <p className="form-details">
                    Select your account preferences
                  </p>
                </div>

                <form className="form-inner">
                  <div className="login-checkbox-inner">
                    <div>
                      <input className="login-checkbox" type="radio" name="account-type" id="login-checkbox1"/>
                      <label className="label-border" for="login-checkbox1" tabindex="4">Product</label>
                    </div>

                    <div>
                      <input className="login-checkbox" type="radio" name="account-type" id="login-checkbox2"/>
                      <label className="label-border" for="login-checkbox2" tabindex="4">Service</label>
                    </div>

                    <div>
                      <input className="login-checkbox" type="radio" name="account-type" id="login-checkbox3"/>
                      <label className="label-border" for="login-checkbox3" tabindex="4">Both</label>
                    </div>
                  </div>

                  <div className="inner-input">
                    <label className="input-label" for="email">Email Address</label>
                    <div className="input-field">
                      <input type="email" name="" id="email" placeholder="Type here" />
                    </div>
                  </div>

                  <Link href="successful-status" className="login-btn">
                    Finish
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
