'use client';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newPassword = searchParams.get('XYKS1') ?? '';
  const phone = searchParams.get('XCKS2') ?? '+8801765821451';
  const [otp, setOtp] = useState('');
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

  const handlePaste = e => {
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
    const currentOtp = inputsRef.current.map(input => input.value).join('');
    setOtp(currentOtp);
  };

  const verifyOTP = async event => {
    event.preventDefault();
    if (!otp) {
      toast.custom(t => (
        <AlertToast
          message={'Please enter OTP Number'}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } else {
      try {
        const response = await axiosInstance.put(
          '/seller-panel-api/change-password/',
          {
            newPassword: newPassword,
            otp: otp,
          }
        );

        if (response.status === 200) {
          toast.custom(t => (
            <SuccessToast
              message={response.data.message}
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
        }
        router.push('/settings');
      } catch (error) {
        console.log(error);
        toast.custom(t => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  };

  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="header-section-inner d-flex align-items-center justify-content-between gap-4">
            <div className="logo">
              <a href="/">
                <img src="/assets/images/Logo-2.png" alt="logo" />
              </a>
            </div>

            <ul className="header-button list-unstyled d-flex align-items-center gap-3">
              <li>
                <a className="signUp-btn " href="">
                  Cancel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="login-section">
        <div className="container">
          <div className="login-section-inner">
            <div className="d-flex justify-content-center align-items-center">
              <div className="right">
                <div className="login-form">
                  <div className="d-flex flex-column gap-3">
                    <h1 className="form-title">Verify</h1>

                    <p className="form-details">
                      Enter the 6-digit code send to <span>{phone}</span>
                    </p>
                  </div>

                  <form className="form-inner">
                    <div className="otp-inputs" onPaste={handlePaste}>
                      {Array(6)
                        .fill('')
                        .map((_, index) => (
                          <input
                            key={index}
                            ref={el => (inputsRef.current[index] = el)}
                            type="text"
                            maxLength="1"
                            className="otp-input"
                            onKeyUp={e => handleKeyUp(e, index)}
                            autoFocus={index === 0}
                            placeholder="-"
                          />
                        ))}
                    </div>

                    <p className="resend-text">
                      Didn’t receive the code? <b>Resend</b>
                    </p>

                    <button
                      className={`login-btn ${
                        otp.length < 6 ? 'show_disable_button' : ''
                      }`}
                      onClick={verifyOTP}
                      disabled={otp.length < 6 ? true : false}
                    >
                      Verify & Update Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
