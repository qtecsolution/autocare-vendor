"use client"
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import Link from 'next/link';

function BusinessSetupPage() {

    const [step, setStep] = useState(1);
    const [businessType, setBusinessType] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const [timeSlots, setTimeSlots] = useState([{ slot: 1, openingTime: '', closingTime: '' }]);
    const [tradeLicenseFile, setTradeLicenseFile] = useState(null);
    const [tinBinFile, setTinBinFile] = useState(null);

    const time_slot_options = [
        { value: 1, label: 'Morning' },
        { value: 2, label: 'Noon' },
        { value: 3, label: 'Afternoon' },
        { value: 4, label: 'Evening' },
    ];

    const addTimeSlot = () => {
        if (timeSlots.length < 4) {
            setTimeSlots([
                ...timeSlots,
                { slot: timeSlots.length + 1, openingTime: '', closingTime: '' },
            ]);
        }
    };

    const handleTimeSlotChange = (index, field, value) => {
        const updatedTimeSlots = [...timeSlots];
        updatedTimeSlots[index][field] = value;
        setTimeSlots(updatedTimeSlots);
    };


    const getLocation = (e) => {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    // Handle different error codes
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            toast.custom((t) => (
                                <AlertToast
                                    message="User denied the request for Geolocation."
                                    dismiss={() => toast.dismiss(t.id)}
                                />
                            ));
                            break;
                        case error.POSITION_UNAVAILABLE:
                            toast.custom((t) => (
                                <AlertToast
                                    message="Location information is unavailable."
                                    dismiss={() => toast.dismiss(t.id)}
                                />
                            ));
                            break;
                        case error.TIMEOUT:
                            toast.custom((t) => (
                                <AlertToast
                                    message="The request to get user location timed out."
                                    dismiss={() => toast.dismiss(t.id)}
                                />
                            ));
                            break;
                        default:
                            toast.custom((t) => (
                                <AlertToast
                                    message="An unknown error occurred."
                                    dismiss={() => toast.dismiss(t.id)}
                                />
                            ));
                            break;
                    }
                }
            );
        } else {
            toast.custom((t) => (
                <AlertToast
                    message="Geolocation is not supported by this browser."
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        }
    };


    const complete1stStep = async (e) => {
        e.preventDefault();
        if (!businessName) {
            toast.custom((t) => (
                <AlertToast
                    message="Business Name Required !"
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!location.latitude && !location.longitude) {
            toast.custom((t) => (
                <AlertToast
                    message="Location Required !"
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!selectedDivision) {
            toast.custom((t) => (
                <AlertToast
                    message="Division Required !"
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!selectedDistrict) {
            toast.custom((t) => (
                <AlertToast
                    message="District Required !"
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!selectedCity) {
            toast.custom((t) => (
                <AlertToast
                    message="City Required !"
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {
            setStep(businessType === 1 ? 3 : 2);
        }
    }

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axiosInstance.get('/seller-panel-api/setup-business/');
                const places = response.data.places;
                setBusinessType(response.data.business_type);

                const divisionOptions = places.map((place) => ({
                    value: place.id,
                    label: place.name,
                    cities: place.cities,
                }));

                setDivisions(divisionOptions);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);

    const handleDivisionChange = (selectedOption) => {
        setSelectedDivision(selectedOption);
        const divisionCities = selectedOption.cities;

        const districtOptions = divisionCities.map((city) => ({
            value: city.id,
            label: city.name,
            thanas: city.thanas, // Store thanas to filter cities later
        }));

        setDistricts(districtOptions);
        setCities([]); // Reset cities when a new division is selected
        setSelectedDistrict(null); // Reset district selection
        setSelectedCity(null); // Reset city selection
    };

    const handleDistrictChange = (selectedOption) => {
        setSelectedDistrict(selectedOption);

        // Map cities based on the selected district
        const cityOptions = selectedOption.thanas.map((thana) => ({
            value: thana.id,
            label: thana.name,
        }));

        setCities(cityOptions);
        setSelectedCity(null);
    };

    const complete2ndStep = async (e) => {
        e.preventDefault();
        if (!timeSlots) {
            toast.custom((t) => (
                <AlertToast
                    message="Time Slot Required !"
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {
            setStep(3);
        }
    }

    const handleTradeLicenseFile = (e) => {
        setTradeLicenseFile(e.target.files[0]);
    };
    const handleTinBinFile = (e) => {
        setTinBinFile(e.target.files[0]);
    };

    const completeFinalStep = async (e) => {
        e.preventDefault();
        if (!tradeLicenseFile) {
            toast.custom((t) => (
                <AlertToast
                    message={"Trade License File Required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else if (!tinBinFile) {
            toast.custom((t) => (
                <AlertToast
                    message={"TIN/BIN File Required !"}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        } else {

            const formData = new FormData();
            formData.append('name', businessName);
            formData.append('latitude', location.latitude);
            formData.append('longitude', location.longitude);
            formData.append('divisionId', selectedDivision?.value);
            formData.append('cityId', selectedDistrict?.value);
            formData.append('thanaId', selectedCity?.value);
            formData.append('timeSlot', JSON.stringify(timeSlots));
            formData.append('tradeLicence', tradeLicenseFile);
            formData.append('binCertificate', tinBinFile);

            try {
                const response = await axiosInstance.post('/seller-panel-api/setup-business/', formData, {
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

    return (
        <>
            {step === 1 &&
                <section className="setup-store-section">
                    <div className="container">
                        <div className="setup-store-section-inner">
                            <div className="d-flex justify-content-center">
                                <div className="center">
                                    <div className="d-flex flex-column gap-3">
                                        <h1 className="title">
                                            Setup {businessType === 1 ? 'Store' : businessType === 2 ? 'Garage' : 'Store/Garage'}
                                        </h1>

                                        <p className="details">
                                            Please submit your {businessType === 1 ? 'Store' : businessType === 2 ? 'Garage' : 'Store/Garage'} information to setup.
                                        </p>
                                    </div>

                                    <form className="setup-store-form">
                                        <div className="inner-input">
                                            <label className="input-label" for="BusinessName">{businessType === 1 ? 'Store' : businessType === 2 ? 'Garage' : 'Store/Garage'} Name</label>
                                            <div className="input-field">
                                                <input type="text" name="" id="BusinessName" placeholder="Type here" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="inner-input">
                                            <label className="input-label" for="Address">Location</label>
                                            <div className="input-field" onClick={getLocation}>
                                                <input type="text" name="" id="Address" readOnly value={location.latitude && location.longitude ? location.latitude + " " + location.longitude : ''} />
                                                <div className="location">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M7.75239 15.1465L7.75479 15.1473C7.91239 15.2161 8.00039 15.2001 8.00039 15.2001C8.00039 15.2001 8.08839 15.2161 8.24679 15.1473L8.24839 15.1465L8.25319 15.1441L8.26759 15.1377C8.34353 15.1024 8.41849 15.0651 8.49239 15.0257C8.64119 14.9489 8.84919 14.8337 9.09799 14.6793C9.59399 14.3721 10.254 13.9065 10.9172 13.2673C12.242 11.9905 13.6004 9.9945 13.6004 7.2001C13.6004 6.4647 13.4555 5.73649 13.1741 5.05707C12.8927 4.37765 12.4802 3.76031 11.9602 3.2403C11.4402 2.72029 10.8228 2.3078 10.1434 2.02637C9.46399 1.74495 8.73579 1.6001 8.00039 1.6001C7.26499 1.6001 6.53679 1.74495 5.85736 2.02637C5.17794 2.3078 4.5606 2.72029 4.04059 3.2403C3.52058 3.76031 3.10809 4.37765 2.82667 5.05707C2.54524 5.73649 2.40039 6.4647 2.40039 7.2001C2.40039 9.9937 3.75879 11.9905 5.08439 13.2673C5.63939 13.8004 6.24887 14.2736 6.90279 14.6793C7.15606 14.8366 7.41662 14.9818 7.68359 15.1145L7.73319 15.1377L7.74759 15.1441L7.75239 15.1465ZM8.00039 9.0001C8.47778 9.0001 8.93562 8.81046 9.27318 8.47289C9.61075 8.13532 9.80039 7.67749 9.80039 7.2001C9.80039 6.72271 9.61075 6.26487 9.27318 5.92731C8.93562 5.58974 8.47778 5.4001 8.00039 5.4001C7.523 5.4001 7.06516 5.58974 6.7276 5.92731C6.39003 6.26487 6.20039 6.72271 6.20039 7.2001C6.20039 7.67749 6.39003 8.13532 6.7276 8.47289C7.06516 8.81046 7.523 9.0001 8.00039 9.0001Z"
                                                            fill="#7B7F95" />
                                                    </svg>
                                                    <p>Set on map</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div >
                                            <label className="category-select-label">Division</label>
                                            <Select
                                                value={selectedDivision}
                                                onChange={handleDivisionChange}
                                                options={divisions}
                                                placeholder="Select Division"
                                            />
                                        </div>

                                        <div >
                                            <label className="category-select-label">District</label>
                                            <Select
                                                value={selectedDistrict}
                                                onChange={handleDistrictChange}
                                                options={districts}
                                                placeholder="Select District"
                                                isDisabled={!selectedDivision} // Disable district until a division is selected
                                            />
                                        </div>

                                        <div >
                                            <label className="category-select-label">Thana</label>
                                            <Select
                                                value={selectedCity}
                                                onChange={setSelectedCity}
                                                options={cities}
                                                placeholder="Select Thana"
                                                isDisabled={!selectedDistrict} // Disable city until a district is selected
                                            />
                                        </div>

                                        <button onClick={complete1stStep} className="login-btn">
                                            Save & Continue
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
                <section className="setup-store-section">
                    <div className="container">
                        <div className="setup-store-section-inner">
                            <div className="d-flex justify-content-center">
                                <div className="center">
                                    <div className="d-flex flex-column gap-3">
                                        <h1 className="title">
                                            Availabilities
                                        </h1>

                                        <p className="details">
                                            Please submit your Garage information to setup.
                                        </p>
                                    </div>

                                    <form className="setup-store-form" >
                                        {timeSlots.map((slot, index) => (
                                            <div className="row" key={index}>
                                                <div className="col-4">
                                                    <div >
                                                        <label className="category-select-label">Time Slot</label>
                                                        <Select
                                                            value={time_slot_options.find(option => option.value === slot.slot)}
                                                            onChange={(selectedOption) => handleTimeSlotChange(index, 'slot', selectedOption.value)}
                                                            options={time_slot_options}

                                                            placeholder="Select"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="inner-input">
                                                        <label className="input-label" htmlFor={`openingTime-${index}`}>Opening Time</label>
                                                        <div className="input-field">
                                                            <input
                                                                type="time"
                                                                id={`openingTime-${index}`}
                                                                value={slot.openingTime}
                                                                onChange={(e) => handleTimeSlotChange(index, 'openingTime', e.target.value)}
                                                                placeholder="Type here"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="inner-input">
                                                        <label className="input-label" htmlFor={`closingTime-${index}`}>Closing Time</label>
                                                        <div className="input-field">
                                                            <input
                                                                type="time"
                                                                id={`closingTime-${index}`}
                                                                value={slot.closingTime}
                                                                onChange={(e) => handleTimeSlotChange(index, 'closingTime', e.target.value)}
                                                                placeholder="Type here"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {timeSlots.length < 4 && (
                                            <div className="">
                                                <button type="button" className="login-btn" onClick={addTimeSlot}>
                                                    Add more Time Slot
                                                </button>
                                            </div>
                                        )}

                                        <button className="login-btn" onClick={complete2ndStep}>
                                            Save & Continue
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {
                step === 3 &&
                <section className="login-section">
                    <div className="container">
                        <div className="login-section-inner d-flex justify-content-center align-items-center">
                            <div className="right">
                                <div className="login-form">
                                    <div className="d-flex flex-column gap-3">
                                        <h1 className="form-title">
                                            Verify
                                        </h1>

                                        <p className="form-details">
                                            Help Us verify your Store by providing more info
                                        </p>
                                    </div>

                                    <form className="form-inner">
                                        <div className="d-flex flex-column gap-4">
                                            <div className="d-flex flex-column gap-2">
                                                <p className="text">
                                                    Trade License <span className="text-danger">*</span>
                                                </p>
                                                <label for="tradeLicense" className="upload-card">
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
                                                    <p className="paragraph">{tradeLicenseFile ? tradeLicenseFile?.name : 'CSV, DOC, PDF, PNG & JPG'}</p>
                                                    <input type="file" id="tradeLicense" accept=".csv,.doc,.docx,.pdf,.png,.jpg,.jpeg" onChange={handleTradeLicenseFile} />
                                                </label>
                                                <p className="light-text">
                                                    Please submit updated recent file
                                                </p>
                                            </div>

                                            <div className="d-flex flex-column gap-2">
                                                <p className="text">
                                                    TIN Certificate / BIN Certificate *
                                                </p>
                                                <label for="tinBin" className="upload-card">
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
                                                    <p className="paragraph">{tinBinFile ? tinBinFile?.name : 'CSV, DOC, PDF, PNG & JPG'}</p>
                                                    <input type="file" id="tinBin" accept=".csv,.doc,.docx,.pdf,.png,.jpg,.jpeg" onChange={handleTinBinFile} />
                                                </label>
                                                <p className="light-text">Please submit updated recent file</p>
                                            </div>
                                        </div>


                                        <button onClick={completeFinalStep} className="login-btn">
                                            Submit Application
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {
                step === 4 &&
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
                                            You’ve successfully created your account.
                                        </p>
                                    </div>

                                    <div className="d-flex flex-column flex-sm-row gap-2 align-items-center mt-4">
                                        <Link href="/" className="dashboard-btn">
                                            Manage Business
                                        </Link>
                                        <Link href="/add-product" className="add-product-btn">
                                            Add Product
                                        </Link>
                                        <Link href="/add-service" className="add-product-btn">
                                            Add Service
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

export default BusinessSetupPage