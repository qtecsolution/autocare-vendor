import Header from '@/components/auth/Header'
import Link from 'next/link'
import React from 'react'
// import '@/public/assets/js/input-otp'

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

                        Enter the 6-digit code send to <span>+8801765821451</span>
                      </p>
                    </div>

                    <form className="form-inner">
                      <div className="otp-inputs">
                        <input autofocus placeholder="-" type="text" maxlength="1" className="otp-input" id="otp-1" onkeyup="moveToNext(this, 'otp-2')" />
                        <input placeholder="-" type="text" maxlength="1" className="otp-input" id="otp-2" onkeyup="moveToNext(this, 'otp-3')" />
                        <input placeholder="-" type="text" maxlength="1" className="otp-input" id="otp-3" onkeyup="moveToNext(this, 'otp-4')" />
                        <input placeholder="-" type="text" maxlength="1" className="otp-input" id="otp-4" onkeyup="moveToNext(this, 'otp-5')" />
                        <input placeholder="-" type="text" maxlength="1" className="otp-input" id="otp-5" onkeyup="moveToNext(this, 'otp-6')" />
                        <input placeholder="-" type="text" maxlength="1" className="otp-input" id="otp-6" onkeyup="submitCode()" />
                      </div>

                      <Link href="/create-account" className="login-btn">
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
