'use client'
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function IdentityVerifyPage() {
    const [step, setStep] = useState(1);
    const [idType, setIdType] = useState(1)
    const [frontPartFile, setFrontPartFile] = useState(null);
    const [backPartFile, setBackPartFile] = useState(null);
    const [sellerImage, setSellerImage] = useState(null);

    const handleChangeIdType = (type) => {
        setIdType(type);
    };

    const complete1stStep = async (e) => {
        e.preventDefault();
        if (!idType) {
            toast.custom((t) => (
                <AlertToast
                    message={"ID Type Required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {
            setStep(2);
        }
    }

    const handleFrontPartUpload = (e) => {
        setFrontPartFile(e.target.files[0]);
    };

    const handleBackPartUpload = (e) => {
        setBackPartFile(e.target.files[0]);
    };

    const complete2ndStep = async (e) => {
        e.preventDefault();
        if (!frontPartFile) {
            toast.custom((t) => (
                <AlertToast
                    message={"Front Part File Required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        }
        else if (idType !== 2 && !backPartFile) {
            toast.custom((t) => (
                <AlertToast
                    message={"Back Part File Required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {
            setStep(3);
        }
    }
    const handleSellerImageUpload = (e) => {
        setSellerImage(e.target.files[0]);
    };

    const completeFinalStep = async (e) => {
        e.preventDefault();
        if (!sellerImage) {
            toast.custom((t) => (
                <AlertToast
                    message={"Seller Image Required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {
            // const accessToken = localStorage.getItem('accessToken');
            const formData = new FormData();
            formData.append('verificationType', idType);
            formData.append('frontPart', frontPartFile);
            formData.append('backPart', backPartFile);
            formData.append('sellerImage', sellerImage);

            try {
                const response = await axiosInstance.post('/seller-panel-api/seller-identity-verification/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
                toast.custom((t) => (
                    <SuccessToast
                        message={response.data.message}
                        dismiss={() => toast.dismiss(t.id)}
                    />
                ));
                setStep(4);
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
    function check2ndButtonDisable() {
        if (idType === 2) {
            if (!frontPartFile) {
                return true;
            } else {
                return false;
            }
        } else {
            if (!frontPartFile || !backPartFile) {
                return true;
            } else {
                return false;
            }
        }
    }
    function check3rdButtonDisable() {

        if (!sellerImage) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <>
            {step === 1 &&
                <section className="login-section">
                    <div className="container">
                        <div className="login-section-inner d-flex justify-content-center align-items-center">
                            <div className="right">
                                <div className="login-form">
                                    <div className="d-flex flex-column gap-3">
                                        <h1 className="form-title">
                                            Identity Verification
                                        </h1>

                                        <p className="form-details">
                                            Help Us verify your Identity by providing more info
                                        </p>
                                    </div>

                                    <form className="form-inner">
                                        <div className="login-checkbox-inner">
                                            <p className="text">
                                                Choose ID type
                                            </p>
                                            <div>
                                                <input className="login-radio" type="radio" name="account-type" id="login-checkbox1"
                                                    checked={idType === 1}
                                                    onChange={() => handleChangeIdType(1)}
                                                />
                                                <label className="label-border" for="login-checkbox1" tabindex="4">Government ID</label>
                                            </div>

                                            <div>
                                                <input className="login-radio" type="radio" name="account-type" id="login-checkbox2"
                                                    checked={idType === 2}
                                                    onChange={() => handleChangeIdType(2)}
                                                />
                                                <label className="label-border" for="login-checkbox2" tabindex="4">Passport</label>
                                            </div>

                                            <div>
                                                <input className="login-radio" type="radio" name="account-type" id="login-checkbox3"
                                                    checked={idType === 3}
                                                    onChange={() => handleChangeIdType(3)}
                                                />
                                                <label className="label-border" for="login-checkbox3" tabindex="4">Driver's license</label>
                                            </div>
                                        </div>

                                        <button onClick={complete1stStep} className="login-btn">
                                            Continue
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {step === 2 &&
                <section className="login-section">
                    <div className="container">
                        <div className="login-section-inner d-flex justify-content-center align-items-center">
                            <div className="right">
                                <div className="login-form">
                                    <div className="d-flex flex-column gap-3">
                                        <h1 className="form-title">
                                            Upload Documents
                                        </h1>

                                        <p className="form-details">
                                            Make sure your photos are not blurry and it shows you face clearly.
                                        </p>
                                    </div>

                                    <form className="form-inner">
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex flex-column gap-2">
                                                <p className="text">
                                                    Front Part <span className='text-danger'>*</span>
                                                </p>
                                                <label for="frontPart" className="upload-card">
                                                    <figure>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613"
                                                                stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </figure>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="color-text">Click to upload</p>
                                                        <p className="paragraph">or drag and drop</p>
                                                    </div>
                                                    <p className="paragraph">{frontPartFile ? frontPartFile?.name : 'CSV, DOC, PDF, PNG & JPG'}</p>
                                                    <input type="file" id="frontPart" accept=".csv,.doc,.docx,.pdf,.png,.jpg,.jpeg" onChange={handleFrontPartUpload} />
                                                </label>
                                            </div>

                                            {idType === 2 ? ''
                                                :
                                                <div className="d-flex flex-column gap-2">
                                                    <p className="text">
                                                        Back Part <span className='text-danger'>*</span>
                                                    </p>
                                                    <label for="backPart" className="upload-card">
                                                        <figure>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <path
                                                                    d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613"
                                                                    stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </figure>
                                                        <div className="d-flex align-items-center gap-1">
                                                            <p className="color-text">Click to upload</p>
                                                            <p className="paragraph">or drag and drop</p>
                                                        </div>
                                                        <p className="paragraph">{backPartFile ? backPartFile?.name : 'CSV, DOC, PDF, PNG & JPG'}</p>
                                                        <input type="file" id="backPart" accept=".csv,.doc,.docx,.pdf,.png,.jpg,.jpeg" onChange={handleBackPartUpload} />
                                                    </label>
                                                </div>
                                            }
                                        </div>


                                        <button onClick={complete2ndStep} className={`login-btn ${check2ndButtonDisable() ? 'show_disable_button' : ''}`} disabled={check2ndButtonDisable()}>
                                            Continue
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {step === 3 &&
                <section className="login-section">
                    <div className="container">
                        <div className="login-section-inner d-flex justify-content-center align-items-center">
                            <div className="right">
                                <div className="login-form">
                                    <div className="d-flex flex-column gap-3">
                                        <h1 className="form-title">
                                            Vendor Profile Image
                                        </h1>
                                        <p className="form-details">
                                            Make sure your photos are not blurry and it shows you face clearly.
                                        </p>
                                    </div>
                                    <div className="form-inner">
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex flex-column gap-2">
                                                <label for="uploadPhoto" className="upload-card">
                                                    <figure>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path
                                                                d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613"
                                                                stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </figure>
                                                    <div className="d-flex align-items-center gap-1">
                                                        <p className="color-text">Click to upload</p>
                                                        <p className="paragraph">or drag and drop</p>
                                                    </div>
                                                    <p className="paragraph">{sellerImage ? sellerImage?.name : 'PNG , JPG & JPEG'}</p>
                                                    <input type="file" name="" id="uploadPhoto" accept=".png,.jpg,.jpeg" onChange={handleSellerImageUpload} />
                                                </label>
                                            </div>
                                        </div>


                                        <button onClick={completeFinalStep} className={`login-btn ${check3rdButtonDisable() ? 'show_disable_button' : ''}`} disabled={check3rdButtonDisable()}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {step === 4 &&
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

                                    <img src="/assets/images/successful.svg" alt="Congratulation" />


                                    <div className="d-flex flex-column gap-2 mt-3">
                                        <h1>
                                            Almost Done!
                                        </h1>
                                        <p>
                                            Thank You for application. We're reviewing your identity.
                                        </p>
                                    </div>

                                    <div className="d-flex gap-3 align-items-center mt-4">
                                        <Link href="/" className="dashboard-btn">
                                            Dashboard
                                        </Link>
                                        <Link href="/business-setup" className="add-product-btn">
                                            Setup Store
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <div className='pb-5'>

            </div>
        </>
    )
}

export default IdentityVerifyPage