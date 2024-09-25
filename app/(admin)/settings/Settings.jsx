'use client';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import { BUSINESS_TYPE } from '@/lib/businessType';
import { getAuthUser } from '@/utils/auth';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Select from 'react-select';
import { useRouter } from 'next/navigation';

export default function Settings() {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    phone2: '',
    dob: '',
  });
  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [storeData, setStore] = useState({
    businessTypeId: '',
    name: '',
    location: '',
    divisionId: '',
    cityId: '',
    thanaId: '',
    logo: '',
    banner: '',
  });
  const [loading, setLoading] = useState(true);
  const [showSecPhoneInput, setShowSecPhoneInput] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getAuthUser();
        console.log('user:', user);
        setUser({
          fullName: user.full_name || '',
          email: user.email || '',
          phone: user.phone_number || '',
          phone2: user.secondary_phone_number || '',
          dob: user.birth_date || '',
        });
        setStore({
          name: user.store.name || '',
          location: user.store.address || '',
          city: user.store.city.name || '',
          logo: user.store.logo || '',
          banner: user.store.banner || '',
          businessTypeId: user.business_type.id || '',
        });
        setShowSecPhoneInput(user.secondary_phone_number ? true : false);
        setSelectedDivision(user.store.division.id);
        setSelectedDistrict(user.store.thana.id);
        setSelectedCity(user.store.city.id);
        setThumbnailPreview(user.store.logo);
        setMainImagePreview(user.store.banner_image);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false);
      }
    };
    const fetchPlaces = async () => {
      try {
        const response = await axiosInstance.get(
          '/seller-panel-api/setup-business/'
        );
        const places = response.data.places;
        const divisionOptions = places.map(place => ({
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
    fetchUserData();
  }, []);
  useEffect(() => {
    if (thumbnail) {
      const objectUrl = URL.createObjectURL(thumbnail);
      setThumbnailPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [thumbnail]);

  useEffect(() => {
    if (mainImage) {
      const objectUrl = URL.createObjectURL(mainImage);
      setMainImagePreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [mainImage]);
  if (loading) return <div>Loading...</div>;
  const handleDivisionChange = selectedOption => {
    setSelectedDivision(selectedOption);
    const divisionCities = selectedOption.cities;

    const districtOptions = divisionCities.map(city => ({
      value: city.id,
      label: city.name,
      thanas: city.thanas, // Store thanas to filter cities later
    }));

    setDistricts(districtOptions);
    setCities([]); // Reset cities when a new division is selected
    setSelectedDistrict(null); // Reset district selection
    setSelectedCity(null); // Reset city selection
  };

  const handleDistrictChange = selectedOption => {
    setSelectedDistrict(selectedOption);

    // Map cities based on the selected district
    const cityOptions = selectedOption.thanas.map(thana => ({
      value: thana.id,
      label: thana.name,
    }));

    setCities(cityOptions);
    setSelectedCity(null);
  };

  const handleThumbnailImage = e => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const { width, height } = img;
        if (width === height) {
          // Valid 1:1 ratio, update thumbnail
          setThumbnail(file);
        } else {
          // Show an error message if the image ratio is not 1:1
          toast.custom(t => (
            <AlertToast
              message="Thumbnail must have a 1:1 aspect ratio."
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
        }
      };
    }
  };

  const removeThumbnailImage = e => {
    e.preventDefault();
    setThumbnail(null);
    setThumbnailPreview(null);
  };

  const handleMainImage = e => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const { width, height } = img;
        if (true) {
          setMainImage(file);
        } else {
          toast.custom(t => (
            <AlertToast
              message="Thumbnail must have a 1:1 aspect ratio."
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
        }
      };
    }
  };
  const removeMainImage = e => {
    e.preventDefault();
    setMainImage(null);
    setMainImagePreview(null);
  };

  const isValidateFields = () => {
    setErrors({});
    let tempErrors = {};

    if (!user.fullName.trim()) {
      tempErrors.fullName = 'Full Name Required';
    }

    if (!user.email.trim()) {
      tempErrors.email = 'Email is required';
    }

    if (!user.phone.trim()) {
      tempErrors.phone = 'Phone required';
    }

    if (!user.dob.trim()) {
      tempErrors.dob = 'Date of birth required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // User data update
  const handleUserUpdate = async () => {
    // Call the isValidateFields function
    if (!isValidateFields()) {
      toast.custom(t => (
        <AlertToast
          message="Please Enter All Required Fields"
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
      return;
    }
    if (window.confirm('Are you sure you want to update your profile?')) {
      try {
        const formData = new FormData();
        formData.append('fullName', user.fullName);
        formData.append('email', user.email);
        formData.append('phone', user.phone2);
        formData.append('secondaryPhoneNumber', user.phone2);
        formData.append('dateOfBirth', user.dob);
        const response = await axiosInstance.put(
          '/seller-panel-api/seller-profile/',
          formData
        );
        localStorage.setItem('seller', JSON.stringify(response.data.seller));
        toast.custom(t => (
          <SuccessToast
            message="Seller Profile Updated Successfully"
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      } catch (error) {
        console.error('Error updating profile:', error);
        toast.custom(t => (
          <AlertToast
            message="Failed to update profile. Please try again."
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  };
  const isValidateBussinessFields = () => {
    setErrors({});
    let tempErrors = {};

    if (!storeData.businessTypeId) {
      tempErrors.businessTypeId = 'Business Type is required';
    }
    if (!storeData.name.trim()) {
      tempErrors.storeName = 'Store Name is required';
    }
    if (!storeData.location.trim()) {
      tempErrors.location = 'Location is required';
    }
    if (!selectedDivision?.value) {
      tempErrors.division = 'Division is required';
    }
    if (!selectedDistrict?.value) {
      tempErrors.district = 'District is required';
    }
    if (!selectedCity?.value) {
      tempErrors.city = 'City is required';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // bussiness data update
  const handleBusinessUpdate = async () => {
    if (!isValidateBussinessFields()) {
      toast.custom(t => (
        <AlertToast
          message="Please Enter All Required Fields"
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
      return;
    }
    if (window.confirm('Are you sure you want to update your bussiness?')) {
      try {
        const formData = new FormData();
        formData.append('accountType', storeData.businessTypeId);
        formData.append('storeName', storeData.name);
        formData.append('location', storeData.location);
        formData.append('divisionId', selectedDivision?.value);
        formData.append('cityId', selectedDistrict?.value);
        formData.append('thanaId', selectedCity?.value);
        if (thumbnail) {
          formData.append('logo', thumbnail);
        }
        if (mainImage) {
          formData.append('bannerImage', mainImage);
        }
        const response = await axiosInstance.put(
          '/seller-panel-api/update-business/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        localStorage.setItem('seller', JSON.stringify(response.data.seller));
        toast.custom(t => (
          <SuccessToast
            message="Business Profile Updated Successfully"
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      } catch (error) {
        console.error('Error updating profile:', error);
        toast.custom(t => (
          <AlertToast
            message={ error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  };
  // update password
  const handlePasswordUpdate = async () => {
    setErrors({});
    if (security.newPassword.trim() !== security.confirmPassword.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        confirmPassword: 'Confirm password does not matched',
      }));
      return;
    }
    if (window.confirm('Are you sure want to update password?')) {
      try {
        const formData = new FormData();
        formData.append('currentPassword', security.currentPassword);
        formData.append('newPassword', security.newPassword);
        const response = await axiosInstance.post(
          '/seller-panel-api/request-for-change-password/',
          formData
        );
        toast.custom(t => (
          <SuccessToast
            message="An Otp Sent You phone"
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
        // router.push(
        //   `/verify-otp?XYKS1=${encodeURIComponent(
        //     security.newPassword
        //   )}&XCKS2=${encodeURIComponent(user.phone)}`
        // );
      } catch (error) {
        toast.custom(t => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
        console.error('Error updating profile:', error);
      }
    }
  };
  return (
    <section className="settings-body">
      <div className="settings-body-inner">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="basic-info active"
              id="basic-info-tab"
              data-bs-toggle="tab"
              data-bs-target="#basic-info"
              type="button"
              role="tab"
              aria-controls="basic-info"
              aria-selected="true"
            >
              Profile
            </button>

            <button
              className="basic-info"
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected="false"
            >
              Business
            </button>

            <button
              className="basic-info"
              id="price-stock-tab"
              data-bs-toggle="tab"
              data-bs-target="#price-stock"
              type="button"
              role="tab"
              aria-controls="price-stock"
              aria-selected="false"
            >
              Security
            </button>

            <button
              className="basic-info"
              id="vehicle-information-tab"
              data-bs-toggle="tab"
              data-bs-target="#vehicle-information"
              type="button"
              role="tab"
              aria-controls="vehicle-information"
              aria-selected="false"
            >
              User Management
            </button>

            <button
              className="basic-info"
              id="shipping-warranty-tab"
              data-bs-toggle="tab"
              data-bs-target="#shipping-warranty"
              type="button"
              role="tab"
              aria-controls="shipping-warranty"
              aria-selected="false"
            >
              Notifications
            </button>
          </div>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade active show"
            id="basic-info"
            role="tabpanel"
            aria-labelledby="basic-info-tab"
          >
            <div className="profile-section">
              <div className="profile-section-inner">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column gap-3">
                      <div className="input-inner">
                        <div className="label-inner">
                          <label for="userName" className="input-label">
                            User Name <span className="text-danger">*</span>
                          </label>
                        </div>

                        <input
                          className="input-field"
                          type="text"
                          required
                          name=""
                          value={user.fullName}
                          onChange={e =>
                            setUser({
                              ...user,
                              fullName: e.target.value,
                            })
                          }
                          id="userName"
                          placeholder="Enter your name"
                        />
                        {errors.fullName && (
                          <span className="text-danger">{errors.fullName}</span>
                        )}
                      </div>

                      <div className="input-inner">
                        <div className="label-inner">
                          <label for="number" className="input-label">
                            Mobile Number <span className="text-danger">*</span>
                          </label>
                          <p
                            className="add-another"
                            onClick={() => setShowSecPhoneInput(true)}
                          >
                            Add another
                          </p>
                        </div>
                        <input
                          className="input-field number"
                          disabled
                          type="number"
                          required
                          name=""
                          id="number"
                          value={user.phone}
                          onChange={e =>
                            setUser({
                              ...user,
                              phone: e.target.value,
                            })
                          }
                          placeholder="Enter your phone"
                        />{' '}
                        {errors.phone && (
                          <span className="text-danger">{errors.phone}</span>
                        )}
                        {showSecPhoneInput && (
                          <>
                            <input
                              className="input-field number"
                              type="text"
                              id="number"
                              value={user.phone2}
                              onChange={e =>
                                setUser({
                                  ...user,
                                  phone2: e.target.value,
                                })
                              }
                              placeholder="Enter seconadary phone"
                            />
                            {errors.phone2 && (
                              <span className="text-danger">
                                {errors.phone2}
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      <div className="input-inner">
                        <div className="label-inner">
                          <label for="Email" className="input-label">
                            Email Address <span className="text-danger">*</span>
                          </label>
                          {/* <p className="add-another">Verify Email</p> */}
                        </div>

                        <input
                          className="input-field"
                          type="email"
                          required
                          name=""
                          id="Email"
                          value={user.email}
                          onChange={e =>
                            setUser({
                              ...user,
                              email: e.target.value,
                            })
                          }
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <span className="text-danger">{errors.email}</span>
                        )}
                      </div>

                      <div className="input-inner">
                        <div className="label-inner">
                          <label for="start-date" className="input-label">
                            Date of Birth <span className="text-danger">*</span>
                          </label>
                        </div>
                        <input
                          className="input-field"
                          type="date"
                          required
                          id="start-date"
                          value={user.dob}
                          onChange={e =>
                            setUser({
                              ...user,
                              dob: e.target.value,
                            })
                          }
                          placeholder="Enter your birth date"
                        />{' '}
                        {errors.dob && (
                          <span className="text-danger">{errors.dob}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex justify-content-end">
                      <button
                        className="new-campaign-btn d-inline-flex"
                        onClick={handleUserUpdate}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.16602 1.66675H7.49935C3.33268 1.66675 1.66602 3.33341 1.66602 7.50008V12.5001C1.66602 16.6667 3.33268 18.3334 7.49935 18.3334H12.4993C16.666 18.3334 18.3327 16.6667 18.3327 12.5001V10.8334"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.3675 2.51663L6.80088 9.0833C6.55088 9.3333 6.30088 9.82497 6.25088 10.1833L5.89254 12.6916C5.75921 13.6 6.40088 14.2333 7.30921 14.1083L9.81754 13.75C10.1675 13.7 10.6592 13.45 10.9175 13.2L17.4842 6.6333C18.6175 5.49997 19.1509 4.1833 17.4842 2.51663C15.8175 0.849966 14.5009 1.3833 13.3675 2.51663Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.4258 3.45825C12.9841 5.44992 14.5424 7.00825 16.5424 7.57492"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Update Profile</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pb-5"></div>
                <div className="pb-5"></div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <div className="d-flex flex-column gap-4">
              <div className="profile-section">
                <div className="profile-section-inner">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex flex-column gap-3">
                        <div className="input-inner">
                          <div className="label-inner">
                            <label for="accountType" className="input-label">
                              Account Type{' '}
                              <span className="text-danger">*</span>
                            </label>
                            {/* <p className="add-another">Apply for garage</p> */}
                          </div>
                          <Select
                            name="accountType"
                            options={BUSINESS_TYPE.map(type => ({
                              value: type.id,
                              label: type.label,
                            }))}
                            placeholder="Select Business Type"
                            onChange={option =>
                              setStore({
                                ...storeData,
                                businessTypeId: Number(option.value),
                              })
                            }
                            value={BUSINESS_TYPE.find(
                              type => type.id === storeData.businessTypeId
                            )}
                          />
                          {errors.businessTypeId && (
                            <span className="text-danger">
                              {errors.businessTypeId}
                            </span>
                          )}
                        </div>

                        <div className="input-inner">
                          <div className="label-inner">
                            <label for="storeName" className="input-label">
                              Store Name <span className="text-danger">*</span>
                            </label>
                            {/* <p className="add-another">Request for change</p> */}
                          </div>

                          <input
                            className="input-field"
                            type="text"
                            name=""
                            id="storeName"
                            value={storeData.name}
                            onChange={e =>
                              setStore({
                                ...storeData,
                                name: e.target.value,
                              })
                            }
                            placeholder="Enter your store name"
                          />
                          {errors.storeName && (
                            <span className="text-danger">
                              {errors.storeName}
                            </span>
                          )}
                        </div>
                        <div class="input-inner">
                          <div class="label-inner">
                            <label for="Location" class="input-label">
                              Location <span className="text-danger">*</span>
                            </label>
                          </div>
                          <input
                            class="input-field"
                            type="text"
                            name=""
                            required
                            value={storeData.location}
                            onChange={e =>
                              setStore({
                                ...storeData,
                                location: e.target.value,
                              })
                            }
                            id="Location"
                            placeholder="Enter Your Location"
                          />
                          {errors.location && (
                            <span className="text-danger">
                              {errors.location}
                            </span>
                          )}
                        </div>
                        <div className="input-inner">
                          <label className="label-inner category-select-label">
                            Division <span className="text-danger">*</span>
                          </label>
                          <Select
                            value={selectedDivision}
                            onChange={handleDivisionChange}
                            options={divisions}
                            placeholder="Select Division"
                          />
                          {errors.division && (
                            <span className="text-danger">
                              {errors.division}
                            </span>
                          )}
                        </div>

                        <div className="input-inner">
                          <label className="label-inner category-select-label">
                            District <span className="text-danger">*</span>
                          </label>
                          <Select
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            options={districts}
                            placeholder="Select District"
                            // isDisabled={!selectedDivision}
                          />
                          {errors.district && (
                            <span className="text-danger">
                              {errors.district}
                            </span>
                          )}
                        </div>

                        <div>
                          <label className="label-inner category-select-label">
                            Thana <span className="text-danger">*</span>
                          </label>
                          <Select
                            value={selectedCity}
                            onChange={setSelectedCity}
                            options={cities}
                            placeholder="Select Thana"
                            // isDisabled={!selectedDistrict}
                          />
                          {errors.city && (
                            <span className="text-danger">{errors.city}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex justify-content-end">
                        <button
                          onClick={handleBusinessUpdate}
                          className="new-campaign-btn d-inline-flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M9.16602 1.66675H7.49935C3.33268 1.66675 1.66602 3.33341 1.66602 7.50008V12.5001C1.66602 16.6667 3.33268 18.3334 7.49935 18.3334H12.4993C16.666 18.3334 18.3327 16.6667 18.3327 12.5001V10.8334"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M13.3675 2.51663L6.80088 9.0833C6.55088 9.3333 6.30088 9.82497 6.25088 10.1833L5.89254 12.6916C5.75921 13.6 6.40088 14.2333 7.30921 14.1083L9.81754 13.75C10.1675 13.7 10.6592 13.45 10.9175 13.2L17.4842 6.6333C18.6175 5.49997 19.1509 4.1833 17.4842 2.51663C15.8175 0.849966 14.5009 1.3833 13.3675 2.51663Z"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.4258 3.45825C12.9841 5.44992 14.5424 7.00825 16.5424 7.57492"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span>Update Business</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-section">
                <div className="profile-section-inner">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="product-image-section">
                        <div className="product-img-head">
                          <div className="d-flex align-items-center gap-1">
                            <h1 className="title">Business Logo </h1>
                          </div>

                          <h1 className="example-text">See Example</h1>
                        </div>

                        <div className="product-img-body">
                          <div className="uplod-img">
                            {thumbnailPreview && (
                              <div className="product-img">
                                <img src={thumbnailPreview} alt="thumbnail" />
                                <div className="img-close-btn">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="42"
                                    height="42"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    onClick={removeThumbnailImage}
                                  >
                                    <g filter="url(#filter0_dd_239_17341)">
                                      <circle
                                        cx="21"
                                        cy="19.9995"
                                        r="15"
                                        fill="white"
                                      />
                                    </g>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.7219 14.7371C15.8354 14.6237 15.9892 14.5601 16.1496 14.5601C16.31 14.5601 16.4639 14.6237 16.5774 14.7371L20.9917 19.1514L25.406 14.7371C25.4614 14.6776 25.5282 14.6299 25.6024 14.5968C25.6767 14.5637 25.7568 14.546 25.8381 14.5445C25.9194 14.5431 26.0001 14.558 26.0754 14.5885C26.1508 14.6189 26.2193 14.6642 26.2767 14.7217C26.3342 14.7792 26.3795 14.8476 26.41 14.923C26.4404 14.9984 26.4554 15.0791 26.4539 15.1604C26.4525 15.2416 26.4347 15.3218 26.4016 15.396C26.3685 15.4703 26.3208 15.5371 26.2614 15.5925L21.8471 20.0068L26.2614 24.4211C26.3208 24.4765 26.3685 24.5433 26.4016 24.6176C26.4347 24.6918 26.4525 24.772 26.4539 24.8532C26.4554 24.9345 26.4404 25.0152 26.41 25.0906C26.3795 25.1659 26.3342 25.2344 26.2767 25.2919C26.2193 25.3494 26.1508 25.3947 26.0754 25.4251C26.0001 25.4555 25.9194 25.4705 25.8381 25.4691C25.7568 25.4676 25.6767 25.4498 25.6024 25.4168C25.5282 25.3837 25.4614 25.336 25.406 25.2765L20.9917 20.8622L16.5774 25.2765C16.4626 25.3834 16.3109 25.4416 16.1541 25.4389C15.9973 25.4361 15.8477 25.3726 15.7368 25.2617C15.6259 25.1508 15.5623 25.0012 15.5596 24.8444C15.5568 24.6876 15.615 24.5358 15.7219 24.4211L20.1362 20.0068L15.7219 15.5925C15.6086 15.479 15.5449 15.3252 15.5449 15.1648C15.5449 15.0044 15.6086 14.8506 15.7219 14.7371Z"
                                      fill="#525468"
                                    />
                                    <defs>
                                      <filter
                                        id="filter0_dd_239_17341"
                                        x="0.545455"
                                        y="0.908603"
                                        width="40.9091"
                                        height="40.9091"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feMorphology
                                          radius="1.36364"
                                          operator="dilate"
                                          in="SourceAlpha"
                                          result="effect1_dropShadow_239_17341"
                                        />
                                        <feOffset dy="1.36364" />
                                        <feGaussianBlur stdDeviation="2.04545" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_239_17341"
                                        />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset dy="1.36364" />
                                        <feGaussianBlur stdDeviation="1.36364" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="effect1_dropShadow_239_17341"
                                          result="effect2_dropShadow_239_17341"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect2_dropShadow_239_17341"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            )}

                            {thumbnail ? (
                              ''
                            ) : (
                              <div className="add-product-img-inner">
                                <label
                                  for="thumbnail-img"
                                  className="add-product-img"
                                >
                                  <input
                                    className="add-product-img-input"
                                    type="file"
                                    name=""
                                    id="thumbnail-img"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={handleThumbnailImage}
                                  />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                  >
                                    <path
                                      d="M15 5.62451V24.3745M24.375 14.9995H5.625"
                                      stroke="#0F766D"
                                      stroke-width="1.875"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </label>
                              </div>
                            )}
                          </div>
                          <div className="">
                            <ul className="add-product-img-list">
                              <li>Image Ratio: 1:1 </li>
                              <li>Max file size: 1MB.</li>
                              <li>Format: png, jpg</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="product-image-section">
                        <div className="product-img-head">
                          <div className="d-flex align-items-center gap-1">
                            <h1 className="title">Cover Photo </h1>
                          </div>
                        </div>

                        <div className="product-img-body">
                          <div className="uplod-img">
                            {mainImagePreview && (
                              <div className="product-img">
                                <img src={mainImagePreview} alt="thumbnail" />
                                <div className="img-close-btn">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="42"
                                    height="42"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    onClick={removeMainImage}
                                  >
                                    <g filter="url(#filter0_dd_239_17341)">
                                      <circle
                                        cx="21"
                                        cy="19.9995"
                                        r="15"
                                        fill="white"
                                      />
                                    </g>
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M15.7219 14.7371C15.8354 14.6237 15.9892 14.5601 16.1496 14.5601C16.31 14.5601 16.4639 14.6237 16.5774 14.7371L20.9917 19.1514L25.406 14.7371C25.4614 14.6776 25.5282 14.6299 25.6024 14.5968C25.6767 14.5637 25.7568 14.546 25.8381 14.5445C25.9194 14.5431 26.0001 14.558 26.0754 14.5885C26.1508 14.6189 26.2193 14.6642 26.2767 14.7217C26.3342 14.7792 26.3795 14.8476 26.41 14.923C26.4404 14.9984 26.4554 15.0791 26.4539 15.1604C26.4525 15.2416 26.4347 15.3218 26.4016 15.396C26.3685 15.4703 26.3208 15.5371 26.2614 15.5925L21.8471 20.0068L26.2614 24.4211C26.3208 24.4765 26.3685 24.5433 26.4016 24.6176C26.4347 24.6918 26.4525 24.772 26.4539 24.8532C26.4554 24.9345 26.4404 25.0152 26.41 25.0906C26.3795 25.1659 26.3342 25.2344 26.2767 25.2919C26.2193 25.3494 26.1508 25.3947 26.0754 25.4251C26.0001 25.4555 25.9194 25.4705 25.8381 25.4691C25.7568 25.4676 25.6767 25.4498 25.6024 25.4168C25.5282 25.3837 25.4614 25.336 25.406 25.2765L20.9917 20.8622L16.5774 25.2765C16.4626 25.3834 16.3109 25.4416 16.1541 25.4389C15.9973 25.4361 15.8477 25.3726 15.7368 25.2617C15.6259 25.1508 15.5623 25.0012 15.5596 24.8444C15.5568 24.6876 15.615 24.5358 15.7219 24.4211L20.1362 20.0068L15.7219 15.5925C15.6086 15.479 15.5449 15.3252 15.5449 15.1648C15.5449 15.0044 15.6086 14.8506 15.7219 14.7371Z"
                                      fill="#525468"
                                    />
                                    <defs>
                                      <filter
                                        id="filter0_dd_239_17341"
                                        x="0.545455"
                                        y="0.908603"
                                        width="40.9091"
                                        height="40.9091"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feMorphology
                                          radius="1.36364"
                                          operator="dilate"
                                          in="SourceAlpha"
                                          result="effect1_dropShadow_239_17341"
                                        />
                                        <feOffset dy="1.36364" />
                                        <feGaussianBlur stdDeviation="2.04545" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="BackgroundImageFix"
                                          result="effect1_dropShadow_239_17341"
                                        />
                                        <feColorMatrix
                                          in="SourceAlpha"
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                          result="hardAlpha"
                                        />
                                        <feOffset dy="1.36364" />
                                        <feGaussianBlur stdDeviation="1.36364" />
                                        <feColorMatrix
                                          type="matrix"
                                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in2="effect1_dropShadow_239_17341"
                                          result="effect2_dropShadow_239_17341"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect2_dropShadow_239_17341"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            )}

                            {mainImage ? (
                              ''
                            ) : (
                              <div className="add-product-img-inner">
                                <label
                                  for="product-main-img"
                                  className="add-product-img"
                                  style={{ width: '700px' }}
                                >
                                  {' '}
                                  <div class="d-flex flex-column justify-content-center align-items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="34"
                                      height="34"
                                      viewBox="0 0 34 34"
                                      fill="none"
                                    >
                                      <path
                                        d="M16.9991 23.3755V13.813M16.9991 13.813L21.2491 18.063M16.9991 13.813L12.7491 18.063M9.56162 27.6255C8.04498 27.6271 6.57744 27.088 5.42254 26.105C4.26764 25.1219 3.50105 23.7593 3.26044 22.2619C3.01983 20.7645 3.32096 19.2303 4.10975 17.9349C4.89854 16.6395 6.12331 15.6678 7.56412 15.1943C7.19395 13.2976 7.57653 11.3313 8.63085 9.71177C9.68517 8.09226 11.3284 6.9467 13.2127 6.51767C15.0969 6.08863 17.0742 6.40983 18.7257 7.41323C20.3772 8.41663 21.5734 10.0234 22.0609 11.8934C22.8145 11.6483 23.6218 11.6188 24.3913 11.8083C25.1609 11.9977 25.8621 12.3986 26.4159 12.9656C26.9696 13.5326 27.3538 14.2431 27.525 15.017C27.6962 15.7908 27.6476 16.5971 27.3847 17.3448C28.5445 17.7877 29.5126 18.6227 30.1211 19.7048C30.7296 20.787 30.9401 22.048 30.7162 23.2691C30.4922 24.4902 29.8479 25.5944 28.8949 26.3901C27.942 27.1858 26.7406 27.6229 25.4991 27.6255H9.56162Z"
                                        stroke="#0F766D"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                    <p class="text">
                                      Drag &amp; drop your Image here or{' '}
                                      <span>Browse</span>
                                    </p>
                                  </div>
                                  <input
                                    className="add-product-img-input"
                                    type="file"
                                    name=""
                                    id="product-main-img"
                                    accept=".png,.jpg,.jpeg"
                                    onChange={handleMainImage}
                                  />
                                </label>
                              </div>
                            )}
                          </div>
                          {/* <div className="">
                            <ul className="add-product-img-list">
                              <li>Image Ratio: 1:1 </li>
                              <li>Max file size: 1MB.</li>
                              <li>Format: png, jpg</li>
                            </ul>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="price-stock"
            role="tabpanel"
            aria-labelledby="price-stock-tab"
          >
            <div className="profile-section">
              <div className="profile-section-inner">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column gap-3">
                      <div className="input-inner">
                        <div className="label-inner">
                          <label for="password" className="input-label">
                            Current Password
                          </label>
                        </div>

                        <div className="password-field">
                          <input
                            className=""
                            type={showPassword ? 'text' : 'password'}
                            name=""
                            id="password"
                            value={security.currentPassword}
                            onChange={e =>
                              setSecurity({
                                ...security,
                                currentPassword: e.target.value,
                              })
                            }
                            placeholder="Enter Current Password"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <path
                              d="M2.65306 5.482C2.02937 6.21812 1.56494 7.07547 1.28906 8C2.1504 10.892 4.82906 13 7.99973 13C8.66173 13 9.30173 12.908 9.9084 12.7367M4.15173 4.152C5.29349 3.39857 6.63178 2.99792 7.99973 3C11.1704 3 13.8484 5.108 14.7097 7.99867C14.2377 9.57823 13.2244 10.9411 11.8477 11.848M4.15173 4.152L1.99973 2M4.15173 4.152L6.58506 6.58533M11.8477 11.848L13.9997 14M11.8477 11.848L9.4144 9.41467C9.60013 9.22893 9.74746 9.00844 9.84798 8.76577C9.9485 8.52309 10.0002 8.263 10.0002 8.00033C10.0002 7.73767 9.9485 7.47757 9.84798 7.2349C9.74746 6.99223 9.60013 6.77173 9.4144 6.586C9.22866 6.40027 9.00817 6.25294 8.76549 6.15242C8.52282 6.0519 8.26273 6.00016 8.00006 6.00016C7.7374 6.00016 7.4773 6.0519 7.23463 6.15242C6.99196 6.25294 6.77146 6.40027 6.58573 6.586M9.41373 9.414L6.5864 6.58667"
                              stroke="#60637A"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="input-inner">
                        <div className="label-inner">
                          <label for="NewPassword" className="input-label">
                            New Password
                          </label>
                        </div>

                        <input
                          className="input-field number"
                          type="password"
                          name=""
                          id="NewPassword"
                          placeholder="Enter New Password"
                          value={security.newPassword}
                          onChange={e =>
                            setSecurity({
                              ...security,
                              newPassword: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="input-inner">
                        <div className="label-inner">
                          <label for="RepeatPassword" className="input-label">
                            Repeat Password
                          </label>
                        </div>
                        <input
                          className="input-field number"
                          type="password"
                          name=""
                          id="RepeatPassword"
                          placeholder="Enter Password again"
                          value={security.confirmPassword}
                          onChange={e =>
                            setSecurity({
                              ...security,
                              confirmPassword: e.target.value,
                            })
                          }
                        />{' '}
                        {errors.confirmPassword && (
                          <span className="text-danger">
                            {errors.confirmPassword}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex justify-content-end">
                      <button
                        onClick={handlePasswordUpdate}
                        className="new-campaign-btn d-inline-flex"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M9.16602 1.66675H7.49935C3.33268 1.66675 1.66602 3.33341 1.66602 7.50008V12.5001C1.66602 16.6667 3.33268 18.3334 7.49935 18.3334H12.4993C16.666 18.3334 18.3327 16.6667 18.3327 12.5001V10.8334"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.3675 2.51663L6.80088 9.0833C6.55088 9.3333 6.30088 9.82497 6.25088 10.1833L5.89254 12.6916C5.75921 13.6 6.40088 14.2333 7.30921 14.1083L9.81754 13.75C10.1675 13.7 10.6592 13.45 10.9175 13.2L17.4842 6.6333C18.6175 5.49997 19.1509 4.1833 17.4842 2.51663C15.8175 0.849966 14.5009 1.3833 13.3675 2.51663Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.4258 3.45825C12.9841 5.44992 14.5424 7.00825 16.5424 7.57492"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Update Password</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="vehicle-information"
            role="tabpanel"
            aria-labelledby="vehicle-information-tab"
          >
            <div className="user-management">
              <div className="user-management-inner">
                <h1 className="text-danger">
                  User Management is under development
                </h1>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="shipping-warranty"
            role="tabpanel"
            aria-labelledby="shipping-warranty-tab"
          >
            <div className="notifications-section">
              <div className="notifications-section-inner">
                <h1 className="text-danger">
                  Notifications is under development
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
