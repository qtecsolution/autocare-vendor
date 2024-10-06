'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function EditPage({ manufacturerDetails }) {
    const [step, setStep] = useState(1);
    const [manufacturerName, setManufacturerName] = useState(manufacturerDetails?.name)
    const [manufacturerImage, setManufacturerImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null);
    const router = useRouter();

    const handleManufacturerImage = (e) => {
        setManufacturerImage(e.target.files[0]);
    };
    useEffect(() => {
        if (manufacturerImage) {
            const objectUrl = URL.createObjectURL(manufacturerImage);
            setImagePreview(objectUrl);

            // Clean up the URL object when the component is unmounted or a new file is selected
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [manufacturerImage]);

    const updateManufacturer = async (e) => {
        e.preventDefault();

        if (!manufacturerName) {
            toast.custom((t) => (
                <AlertToast
                    message="Manufacturer Name Required !"
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {
            const formData = new FormData();
            formData.append('manufacturerName', manufacturerName);
            formData.append('image', manufacturerImage ? manufacturerImage : '');
            try {
                const response = await axiosInstance.put(`/seller-panel-api/frontend/update-manufacturer/${manufacturerDetails?.id}/`, formData, {
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
                setStep(2);
                router.refresh();
            } catch (error) {
                console.log(error);
                toast.custom((t) => (
                    <AlertToast
                        message={error?.response?.data?.message || "Something Wrong !"}
                        dismiss={() => toast.dismiss(t.id)}
                    />
                ));
            }
        }
    }

    return (
        <>
            {
                step === 1 &&
                <section className="setup-store-section">
                    <div className="container">
                        <div className="setup-store-section-inner">
                            <div className="d-flex justify-content-center">
                                <div className="center">
                                    <div className="d-flex align-items-start flex-column gap-3">
                                        <h1 className="title">
                                            Edit Brand
                                        </h1>

                                        <p className="details text-start">
                                            Ensure Accuracy and Authenticity for a Trusted Shopping Experience
                                        </p>
                                    </div>

                                    <form className="setup-store-form form-inner">
                                        <div className="inner-input">
                                            <label className="input-label" for="manufacturerName">Brand Name <span className="text-danger">*</span></label>
                                            <div className="input-field">
                                                <input type="text" name="" id="manufacturerName" placeholder="Type here" value={manufacturerName} onChange={(e) => setManufacturerName(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column gap-2">
                                            <label className="input-label" far="frontPart"> Manufacturer Image <span className="text-danger">*</span>
                                            </label>
                                            <label for="manufacturerImage" className="upload-card">
                                                <figure>
                                                    {imagePreview ? (
                                                        <img src={imagePreview} alt="Selected Brand" />
                                                    ) : manufacturerDetails?.logo ? (
                                                        <img src={manufacturerDetails.logo} alt={manufacturerDetails.name} />
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M6.66675 13.3333L10.0001 10M10.0001 10L13.3334 13.3333M10.0001 10V17.5M16.6667 13.9524C17.6847 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2814 5.83333 13.7501 5.83333C13.568 5.83333 13.3976 5.73833 13.3052 5.58145C12.2185 3.73736 10.2121 2.5 7.91675 2.5C4.46497 2.5 1.66675 5.29822 1.66675 8.75C1.66675 10.4718 2.36295 12.0309 3.48921 13.1613"
                                                                stroke="#475467"
                                                                strokeWidth="1.66667"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    )}
                                                </figure>
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className="color-text">Click to upload</p>
                                                    <p className="paragraph">or drag and drop</p>
                                                </div>
                                                <p className="paragraph">{manufacturerImage ? manufacturerImage?.name : 'PNG, JPG & JPEG'}</p>
                                                <input type="file" id="manufacturerImage" accept=".png,.jpg,.jpeg" onChange={handleManufacturerImage} />
                                            </label>
                                        </div>

                                        <button className="login-btn" onClick={updateManufacturer}>
                                            Update
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {
                step === 2 &&
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
                                            Congratulation!
                                        </h1>
                                        <p>
                                            Your application is submitted. Please allow us some time to review all the documents and we will get
                                            back to you asap.
                                        </p>
                                    </div>

                                    <div className="d-flex gap-3 align-items-center mt-4">
                                        <Link href="/manufacturer" className="dashboard-btn">
                                            Manufacturer List
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            <div className="pb-5"></div>
        </>
    )
}

export default EditPage