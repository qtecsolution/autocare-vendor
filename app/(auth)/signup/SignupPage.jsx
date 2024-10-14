'use client'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import axiosWithBaseURL from '@/lib/axiosWithBaseURL'
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import { setAccessTokenToCookies, setRefreshTokenToCookies } from '@/actions/actions';
import Header from '@/components/auth/Header';
import Header2 from '@/components/auth/Header2';

function SignupPage() {
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [businessType, setBusinessType] = useState(1);
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [otpAccessToken, setOtpAccessToken] = useState('');


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

    const verifyPhoneNumber = async (event) => {
        event.preventDefault();

        const phoneNumberRegex = /^\d{11,}$/;

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
            toast.custom((t) => (
                <AlertToast
                    message={error.response.data.message}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
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

    const ClearOldOTP = () => {
        setOtp('');
        inputsRef.current.forEach((input) => {
            if (input) {
                input.value = '';
            }
        });

        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
        updateOtp();
    }

    const resendOTP = async (event) => {
        event.preventDefault();
        ClearOldOTP();
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

    const createProfileStep1 = async (event) => {
        event.preventDefault();

        if (!fullName) {
            toast.custom((t) => (
                <AlertToast
                    message={"Full name required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!password) {
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
            setStep(4);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };
    const handleChangeBusinessType = (type) => {
        setBusinessType(type);
    };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const createProfileStep2 = async (event) => {
        event.preventDefault();

        if (!businessType) {
            toast.custom((t) => (
                <AlertToast
                    message={"Business Type required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!email) {
            toast.custom((t) => (
                <AlertToast
                    message={"Email required!"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!validateEmail(email)) {
            toast.custom((t) => (
                <AlertToast
                    message={"Invalid email format!"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {
            try {
                const response = await axiosWithBaseURL.post('/seller-panel-api/create-account/', {
                    fullName: fullName,
                    phoneNumber: phoneNumber,
                    email: email,
                    password: password,
                    businessType: businessType
                }, {
                    headers: {
                        Authorization: `Bearer ${otpAccessToken}`,
                    },
                }
                );

                if (response.status === 200) {
                    setStep(3);
                    toast.custom((t) => (
                        <SuccessToast
                            message={response.data.message}
                            dismiss={() => toast.dismiss(t.id)}
                        />
                    ));
                    localStorage.setItem('accessToken', response.data.access);
                    localStorage.setItem('refreshToken', response.data.refresh);
                    localStorage.setItem("seller", JSON.stringify(response.data.seller));
                    await setAccessTokenToCookies(response.data.access);
                    await setRefreshTokenToCookies(response.data.refresh);
                    setStep(5);
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

    function check1stStepButton() {
        if (phoneNumber.length < 11 || phoneNumber.length > 11) {
            return true;
        } else {
            return false;
        }
    }
    function check3rdStepButton() {
        if (fullName.length < 1 || password.length < 4 || repeatPassword.length < 4) {
            return true;
        } else {
            return false;
        }
    }
    function check4thStepButton() {
        if (!email) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            {step === 5 ? <Header2 /> : <Header />}
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
                                                        Already have an account?{" "}
                                                        <Link href="/login">Login</Link>
                                                    </p>
                                                </div>

                                                <form className="form-inner">
                                                    <div className="inner-input">
                                                        <label className="input-label" for="phone-number">Phone Number <span className='text-danger'>*</span></label>
                                                        <div className="input-field">
                                                            <input type="number" name="" id="phone-number" placeholder="Enter Number" min={0}
                                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <button className={`login-btn ${check1stStepButton() ? 'show_disable_button' : ''}`} onClick={verifyPhoneNumber} disabled={check1stStepButton()}>
                                                        Verify
                                                    </button>
                                                </form>
                                            </div>}
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
                                                        <label className="input-label" for="full-name">Full Name <span className='text-danger'>*</span></label>
                                                        <div className="input-field">
                                                            <input type="text" name="" id="full-name" placeholder="Type here"
                                                                value={fullName}
                                                                onChange={(e) => setFullName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>

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

                                                    <button className={`login-btn ${check3rdStepButton() ? 'show_disable_button' : ''}`} onClick={createProfileStep1} disabled={check3rdStepButton()}>
                                                        Next
                                                    </button>
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

                                                <div className="form-inner">
                                                    <div className="login-checkbox-inner">
                                                        <div>
                                                            <input
                                                                className="login-checkbox"
                                                                type="radio"
                                                                id="login-checkbox1"
                                                                checked={businessType === 1} // Select if businessType is 1 (Product)
                                                                onChange={() => handleChangeBusinessType(1)}
                                                            />
                                                            <label className="label-border" htmlFor="login-checkbox1">
                                                            Sell Products
                                                            </label>
                                                        </div>

                                                        <div>
                                                            <input
                                                                className="login-checkbox"
                                                                type="radio"
                                                                id="login-checkbox2"
                                                                checked={businessType === 2} // Select if businessType is 2 (Service)
                                                                onChange={() => handleChangeBusinessType(2)}
                                                            />
                                                            <label className="label-border" htmlFor="login-checkbox2">
                                                            Provide services
                                                            </label>
                                                        </div>

                                                        <div>
                                                            <input
                                                                className="login-checkbox"
                                                                type="radio"
                                                                id="login-checkbox3"
                                                                checked={businessType === 3} // Select if businessType is 3 (Both)
                                                                onChange={() => handleChangeBusinessType(3)}
                                                            />
                                                            <label className="label-border" htmlFor="login-checkbox3">
                                                                Both
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className="inner-input">
                                                        <label className="input-label" htmlFor="email">Email Address <span className='text-danger'>*</span></label>
                                                        <div className="input-field">
                                                            <input
                                                                type='email'
                                                                id="email"
                                                                placeholder="Type here"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <button className={`login-btn ${check4thStepButton() ? 'show_disable_button' : ''}`} onClick={createProfileStep2} disabled={check4thStepButton()}>
                                                        Finish
                                                    </button>
                                                </div>
                                            </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                    </div>
                </section>}
            {step === 5 &&
                <section className="login-section">
                    <div className="container">
                        <div className="login-section-inner">
                            <div className="d-flex justify-content-center">
                                <div className="center">

                                    <figure className="close-btn">
                                        <Link href="/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 18L18 6M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </figure>

                                    <img src="/assets/images/Congratulation.svg" alt="Congratulation" />

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
                                        <Link href="/identity-verify" className="add-product-btn">
                                            Verify Identity
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                    </div>
                </section>}
        </>
    )
}

export default SignupPage