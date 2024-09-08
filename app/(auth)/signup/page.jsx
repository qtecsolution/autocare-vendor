'use client'
import Header from '@/components/auth/Header'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import axiosWithBaseURL from '@/lib/axiosWithBaseURL'
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';

export default function page() {

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');

  const inputsRef = useRef([]);

  const handleKeyUp = (e, index) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '' && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.target.value !== '') {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text');
    const otpArray = pasteData.split('').slice(0, 6); // Limit to 6 characters

    otpArray.forEach((char, index) => {
      if (inputsRef.current[index]) {
        inputsRef.current[index].value = char;
        if (index < inputsRef.current.length - 1) {
          inputsRef.current[index + 1].focus();
        }
      }
    });

    e.preventDefault();
  };

  const verifyPhoneNumber = async (event) => {
    event.preventDefault();

    const phoneNumberRegex = /^\d{11,}$/;
    let formErrors = [];

    if (!phoneNumberRegex.test(phoneNumber)) {
      toast.custom((t) => (
        <AlertToast
          message={"Please enter a valid phone number (minimum 11 digits)"}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    }
    try {
      const response = await axiosWithBaseURL.post('/seller-panel-api/register/', {
        phoneNumber: phoneNumber
      });

      if (response.status === 200) {
        setStep(2);
        toast.custom((t) => (
          <SuccessToast
            message={response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div>
      <Header />
      {step !== 5 &&
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
                    {step === 1 &&
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
                              <input type="number" name="" id="phone-number" placeholder="Enter number" min={1}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                            </div>
                          </div>

                          <button className="login-btn" onClick={verifyPhoneNumber}>
                            Verify
                          </button>
                        </form>
                      </div>}
                    {step === 2 &&
                      <div className="login-form">
                        <div className="d-flex flex-column gap-3">
                          <h1 className="form-title">
                            Registration
                          </h1>

                          <p className="form-details">

                            Enter the 6-digit code send to <span>{phoneNumber}</span>
                          </p>
                        </div>

                        <form className="form-inner">
                          <div className="otp-inputs" onPaste={handlePaste}>
                            {Array(6)
                              .fill('')
                              .map((_, index) => (
                                <input
                                  key={index}
                                  ref={(el) => (inputsRef.current[index] = el)}
                                  type="text"
                                  maxLength="1"
                                  className="otp-input"
                                  onKeyUp={(e) => handleKeyUp(e, index)}
                                  autoFocus={index === 0}
                                  placeholder="-"
                                />
                              ))}
                          </div>

                          <button className="login-btn">Verify</button>
                        </form>
                      </div>}
                    {step === 3 &&
                      <div className="login-form">
                        <div className="d-flex flex-column gap-3">
                          <h1 className="form-title">
                            Create Account
                          </h1>

                          <p className="form-details">
                            Please submit your information to create account
                          </p>
                        </div>

                        <form className="form-inner">
                          <div className="inner-input">
                            <label className="input-label" for="phone-number">Full Name</label>
                            <div className="input-field">
                              <input type="number" name="" id="phone-number" placeholder="Type here" />
                            </div>
                          </div>

                          <div className="inner-input">
                            <label className="input-label" for="Password">Password</label>
                            <div className="input-field">
                              <input type="password" name="" id="Password" placeholder="Set Password" />
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                  d="M2.65306 5.482C2.02937 6.21812 1.56494 7.07547 1.28906 8C2.1504 10.892 4.82906 13 7.99973 13C8.66173 13 9.30173 12.908 9.9084 12.7367M4.15173 4.152C5.29349 3.39857 6.63178 2.99792 7.99973 3C11.1704 3 13.8484 5.108 14.7097 7.99867C14.2377 9.57823 13.2244 10.9411 11.8477 11.848M4.15173 4.152L1.99973 2M4.15173 4.152L6.58506 6.58533M11.8477 11.848L13.9997 14M11.8477 11.848L9.4144 9.41467C9.60013 9.22893 9.74746 9.00844 9.84798 8.76577C9.9485 8.52309 10.0002 8.263 10.0002 8.00033C10.0002 7.73767 9.9485 7.47757 9.84798 7.2349C9.74746 6.99223 9.60013 6.77173 9.4144 6.586C9.22866 6.40027 9.00817 6.25294 8.76549 6.15242C8.52282 6.0519 8.26273 6.00016 8.00006 6.00016C7.7374 6.00016 7.4773 6.0519 7.23463 6.15242C6.99196 6.25294 6.77146 6.40027 6.58573 6.586M9.41373 9.414L6.5864 6.58667"
                                  stroke="#60637A" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>

                          <div className="inner-input">
                            <label className="input-label" for="repeat-password">Repeat Password</label>
                            <div className="input-field">
                              <input type="password" name="" id="repeat-password" placeholder="Confirm Password" />
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                  d="M2.65306 5.482C2.02937 6.21812 1.56494 7.07547 1.28906 8C2.1504 10.892 4.82906 13 7.99973 13C8.66173 13 9.30173 12.908 9.9084 12.7367M4.15173 4.152C5.29349 3.39857 6.63178 2.99792 7.99973 3C11.1704 3 13.8484 5.108 14.7097 7.99867C14.2377 9.57823 13.2244 10.9411 11.8477 11.848M4.15173 4.152L1.99973 2M4.15173 4.152L6.58506 6.58533M11.8477 11.848L13.9997 14M11.8477 11.848L9.4144 9.41467C9.60013 9.22893 9.74746 9.00844 9.84798 8.76577C9.9485 8.52309 10.0002 8.263 10.0002 8.00033C10.0002 7.73767 9.9485 7.47757 9.84798 7.2349C9.74746 6.99223 9.60013 6.77173 9.4144 6.586C9.22866 6.40027 9.00817 6.25294 8.76549 6.15242C8.52282 6.0519 8.26273 6.00016 8.00006 6.00016C7.7374 6.00016 7.4773 6.0519 7.23463 6.15242C6.99196 6.25294 6.77146 6.40027 6.58573 6.586M9.41373 9.414L6.5864 6.58667"
                                  stroke="#60637A" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>

                          <Link href="/account-type" className="login-btn">
                            Next
                          </Link>
                        </form>
                      </div>}
                    {step === 4 &&
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
                              <input className="login-checkbox" type="radio" name="account-type" id="login-checkbox1" />
                              <label className="label-border" for="login-checkbox1" tabindex="4">Product</label>
                            </div>

                            <div>
                              <input className="login-checkbox" type="radio" name="account-type" id="login-checkbox2" />
                              <label className="label-border" for="login-checkbox2" tabindex="4">Service</label>
                            </div>

                            <div>
                              <input className="login-checkbox" type="radio" name="account-type" id="login-checkbox3" />
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
                      </div>}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>}
      {step === 5 &&
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
                    <Link href="/" className="dashboard-btn">
                      Skip
                    </Link>
                    <Link href="/product-add" className="add-product-btn">
                      Verify Identity
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>}
    </div>
  )
}
