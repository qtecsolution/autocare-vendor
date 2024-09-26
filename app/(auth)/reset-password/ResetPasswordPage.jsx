'use client'
import Header from '@/components/auth/Header'
import React, { useState, useRef } from 'react'
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosWithBaseURL from '@/lib/axiosWithBaseURL';
import { useRouter } from 'next/navigation';

function ResetPasswordPage() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpAccessToken, setOtpAccessToken] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const router = useRouter();

  const inputsRef = useRef([]);

  const handleKeyUp = (e, index) => {
    const value = e.target.value;

    if (e.key === 'Backspace') {
      if (value === '' && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (value !== '') {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }

    updateOtp();
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text');
    const otpArray = pasteData.split('').slice(0, 6);

    otpArray.forEach((char, index) => {
      if (inputsRef.current[index]) {
        inputsRef.current[index].value = char;
        if (index < inputsRef.current.length - 1) {
          inputsRef.current[index + 1].focus();
        }
      }
    });

    updateOtp();
    e.preventDefault();
  };

  const updateOtp = () => {
    const currentOtp = inputsRef.current.map((input) => input.value).join('');
    setOtp(currentOtp);
  };


  const forgotPass = async (event) => {
    event.preventDefault();

    const phoneNumberRegex = /^\d{11,}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      toast.custom((t) => (
        <AlertToast
          message={"Please enter a valid phone number (minimum 11 digits)"}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } else {
      try {
        const response = await axiosWithBaseURL.post('/seller-panel-api/forgot-password/', {
          username: phoneNumber
        });

        if (response.status === 200 && response.data?.is_otp_sent) {
          setStep(2);
          toast.custom((t) => (
            <SuccessToast
              message="OTP Sent on Your Phone Number"
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
        }
      } catch (error) {
        toast.custom((t) => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }
  function check1stStepButton() {
    if (phoneNumber.length < 11 || phoneNumber.length > 11) {
      return true;
    } else {
      return false;
    }
  }
  const verifyOTP = async (event) => {
    event.preventDefault();

    if (!otp) {
      toast.custom((t) => (
        <AlertToast
          message={"Please enter OTP Number"}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } else {
      try {
        const response = await axiosWithBaseURL.post('/seller-panel-api/verify-otp/', {
          phoneNumber: phoneNumber,
          otp: otp
        });

        if (response.status === 200) {
          setStep(3);
          toast.custom((t) => (
            <SuccessToast
              message={response.data.message}
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
          setOtpAccessToken(response.data.access);
        }
      } catch (error) {
        console.log(error);
        toast.custom((t) => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }

  const resendOTP = async (event) => {
    event.preventDefault();
    const phoneNumberRegex = /^\d{11,}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      toast.custom((t) => (
        <AlertToast
          message={"Please enter a valid phone number (minimum 11 digits)"}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } else {
      try {
        const response = await axiosWithBaseURL.post('/seller-panel-api/resend-otp/', {
          phoneNumber: phoneNumber
        });

        if (response.status === 200) {
          toast.custom((t) => (
            <SuccessToast
              message="OTP Re-Send on Your Phone Number"
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
        }
      } catch (error) {
        toast.custom((t) => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }
  
  const resetPassword = async (event) => {
    event.preventDefault();

    if (!password) {
      toast.custom((t) => (
        <AlertToast
          message={"Password required!"}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } else if (!repeatPassword) {
      toast.custom((t) => (
        <AlertToast
          message={"Confirm password required!"}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } else if (password !== repeatPassword) {
      toast.custom((t) => (
        <AlertToast
          message={"Passwords do not match!"}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } else {
      try {
        const response = await axiosWithBaseURL.put('/seller-panel-api/set-password/', {
          password: password,
        }, {
          headers: {
            Authorization: `Bearer ${otpAccessToken}`,
          },
        }
        );

        if (response.status === 200) {
          toast.custom((t) => (
            <SuccessToast
              message={response.data.message}
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
          router.push('/login');
        }
      } catch (error) {
        toast.custom((t) => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };
  function check3rdStepButton() {
    if (password.length < 4 || repeatPassword.length < 4) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
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
                      <img src="../assets/images/user1.png" alt="userImg" />
                      <img className="img-left" src="../assets/images/user2.png" alt="userImg" />
                      <img className="img-left" src="../assets/images/user3.png" alt="userImg" />
                      <img className="img-left" src="../assets/images/user4.png" alt="userImg" />
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
                          Reset Password
                        </h1>
                      </div>

                      <div className="form-inner">
                        <div className="inner-input">
                          <label className="input-label" for="phone-number">Phone Number <span
                            className="text-danger">*</span></label>
                          <div className="input-field">
                            <input type="number" name="" id="phone-number" placeholder="Enter number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                          </div>
                        </div>

                        <button className={`login-btn ${check1stStepButton() ? 'show_disable_button' : ''}`} onClick={forgotPass} disabled={check1stStepButton()}>
                          Send OTP
                        </button>
                      </div>
                    </div>
                  }
                  {step === 2 &&
                    <div className="login-form">
                      <div className="d-flex flex-column gap-3">
                        <h1 className="form-title">
                          Verify OTP
                        </h1>

                        <p className="form-details">

                          Enter the 6-digit code send to <span>{phoneNumber}</span>
                        </p>
                      </div>
                      <div className="form-inner">
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

                        <button className={`login-btn ${otp.length < 6 ? 'show_disable_button' : ''}`} onClick={verifyOTP} disabled={otp.length < 6 ? true : false}>
                          Verify
                        </button>
                        <div>
                          <span onClick={resendOTP} style={{ color: 'blue', cursor: 'pointer' }}>Resend OTP</span>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    step === 3 &&
                    <div className="login-form">
                      <div className="d-flex flex-column gap-3">
                        <h1 className="form-title">
                          Create Account
                        </h1>

                        <p className="form-details">
                          Please submit your information to create account
                        </p>
                      </div>

                      <div className="form-inner">

                        <div className="inner-input">
                          <label className="input-label" for="Password">Password <span className='text-danger'>*</span></label>
                          <div className="input-field">
                            <input type={showPassword ? "text" : "password"} name="" id="Password" placeholder="Set Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={togglePasswordVisibility}>
                              <path
                                d="M2.65306 5.482C2.02937 6.21812 1.56494 7.07547 1.28906 8C2.1504 10.892 4.82906 13 7.99973 13C8.66173 13 9.30173 12.908 9.9084 12.7367M4.15173 4.152C5.29349 3.39857 6.63178 2.99792 7.99973 3C11.1704 3 13.8484 5.108 14.7097 7.99867C14.2377 9.57823 13.2244 10.9411 11.8477 11.848M4.15173 4.152L1.99973 2M4.15173 4.152L6.58506 6.58533M11.8477 11.848L13.9997 14M11.8477 11.848L9.4144 9.41467C9.60013 9.22893 9.74746 9.00844 9.84798 8.76577C9.9485 8.52309 10.0002 8.263 10.0002 8.00033C10.0002 7.73767 9.9485 7.47757 9.84798 7.2349C9.74746 6.99223 9.60013 6.77173 9.4144 6.586C9.22866 6.40027 9.00817 6.25294 8.76549 6.15242C8.52282 6.0519 8.26273 6.00016 8.00006 6.00016C7.7374 6.00016 7.4773 6.0519 7.23463 6.15242C6.99196 6.25294 6.77146 6.40027 6.58573 6.586M9.41373 9.414L6.5864 6.58667"
                                stroke="#60637A" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>

                        <div className="inner-input">
                          <label className="input-label" for="repeat-password">Repeat Password <span className='text-danger'>*</span></label>
                          <div className="input-field">
                            <input type={showRepeatPassword ? "text" : "password"} name="" id="repeat-password" placeholder="Confirm Password"
                              value={repeatPassword}
                              onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={toggleRepeatPasswordVisibility}>
                              <path
                                d="M2.65306 5.482C2.02937 6.21812 1.56494 7.07547 1.28906 8C2.1504 10.892 4.82906 13 7.99973 13C8.66173 13 9.30173 12.908 9.9084 12.7367M4.15173 4.152C5.29349 3.39857 6.63178 2.99792 7.99973 3C11.1704 3 13.8484 5.108 14.7097 7.99867C14.2377 9.57823 13.2244 10.9411 11.8477 11.848M4.15173 4.152L1.99973 2M4.15173 4.152L6.58506 6.58533M11.8477 11.848L13.9997 14M11.8477 11.848L9.4144 9.41467C9.60013 9.22893 9.74746 9.00844 9.84798 8.76577C9.9485 8.52309 10.0002 8.263 10.0002 8.00033C10.0002 7.73767 9.9485 7.47757 9.84798 7.2349C9.74746 6.99223 9.60013 6.77173 9.4144 6.586C9.22866 6.40027 9.00817 6.25294 8.76549 6.15242C8.52282 6.0519 8.26273 6.00016 8.00006 6.00016C7.7374 6.00016 7.4773 6.0519 7.23463 6.15242C6.99196 6.25294 6.77146 6.40027 6.58573 6.586M9.41373 9.414L6.5864 6.58667"
                                stroke="#60637A" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>

                        <button className={`login-btn ${check3rdStepButton() ? 'show_disable_button' : ''}`} onClick={resetPassword} disabled={check3rdStepButton()}>
                          Reset
                        </button>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResetPasswordPage