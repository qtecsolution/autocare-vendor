'use client';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import { BUSINESS_TYPE } from '@/lib/businessType';
import { getAuthUser } from '@/utils/auth';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Select from 'react-select';

export default function Settings() {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    phone2: '',
    dob: '',
  });
  const [store, setStore] = useState({
    name: '',
    location: '',
    city: '',
    logo: '',
    banner: '',
    BusinesstypeId: '',
  });
  const [loading, setLoading] = useState(true);
  const [showSecPhoneInput, setShowSecPhoneInput] = useState(false);
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
          location: user.store.location || '',
          city: user.store.city.name || '',
          logo: user.store.logo || '',
          banner: user.store.banner || '',
          BusinesstypeId: user.business_type.id || '',
        });
        setShowSecPhoneInput(user.phone2 ? true : false);
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

  if (loading) return <div>Loading...</div>;

  const getLocation = e => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          // Handle different error codes
          switch (error.code) {
            case error.PERMISSION_DENIED:
              toast.custom(t => (
                <AlertToast
                  message="User denied the request for Geolocation."
                  dismiss={() => toast.dismiss(t.id)}
                />
              ));
              break;
            case error.POSITION_UNAVAILABLE:
              toast.custom(t => (
                <AlertToast
                  message="Location information is unavailable."
                  dismiss={() => toast.dismiss(t.id)}
                />
              ));
              break;
            case error.TIMEOUT:
              toast.custom(t => (
                <AlertToast
                  message="The request to get user location timed out."
                  dismiss={() => toast.dismiss(t.id)}
                />
              ));
              break;
            default:
              toast.custom(t => (
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
      toast.custom(t => (
        <AlertToast
          message="Geolocation is not supported by this browser."
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    }
  };

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

  const isValidateFields = () => {
    if (!user.fullName.trim()) {
      return false;
    }
    if (!user.email.trim()) {
      return false;
    }
    if (!user.phone.trim()) {
      return false;
    }
    if (!user.dob.trim()) {
      return false;
    }
    return true;
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
    return true;
  };

  // bussiness data update
  const handleBusinessUpdate = async () => {
    // Call the isValidateFields function
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
        formData.append('name', 'Miraz Tesla Shop');
        formData.append('latitude', '23.727272');
        formData.append('longitude', '90.365241');
        formData.append('cityId', '1');
        formData.append('thanaId', '144');
        formData.append('timeSlot');
        formData.append('tradeLicence');
        formData.append('binCertificate');
        const response = await axiosInstance.post(
          '/seller-panel-api/setup-business/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(JSON.stringify(response.data));
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
            message="Failed to update profile. Please try again."
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
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
                        />
                        {showSecPhoneInput && (
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
                        />
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
                              Account Type
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
                                ...store,
                                BusinesstypeId: Number(option.value),
                              })
                            }
                            value={BUSINESS_TYPE.find(
                              type => type.id === store.BusinesstypeId
                            )}
                          />
                        </div>

                        <div className="input-inner">
                          <div className="label-inner">
                            <label for="storeName" className="input-label">
                              Store Name
                            </label>
                            {/* <p className="add-another">Request for change</p> */}
                          </div>

                          <input
                            className="input-field"
                            type="text"
                            name=""
                            id="storeName"
                            value={store.name}
                            onChange={e =>
                              setStore({
                                ...user,
                                name: e.target.value,
                              })
                            }
                            placeholder="Enter your store name"
                          />
                        </div>

                        <div className="input-inner">
                          <div className="label-inner">
                            <label for="Location" className="input-label">
                              Location
                            </label>
                          </div>

                          <input
                            className="input-field"
                            type="text"
                            name=""
                            id="Location"
                            value={store.location}
                            onChange={e =>
                              setStore({
                                ...user,
                                location: e.target.value,
                              })
                            }
                            placeholder="Enter your store location"
                          />
                        </div>
                        <div className="input-inner">
                          <div className="label-inner">
                            <label for="City" className="input-label">
                              City
                            </label>
                          </div>

                          <input
                            className="input-field"
                            type="text"
                            name=""
                            id="City"
                            value={store.city}
                            onChange={e =>
                              setStore({
                                ...user,
                                city: e.target.value,
                              })
                            }
                            placeholder="Enter your store City"
                          />
                        </div>
                        <div className="input-inner">
                          <label className="label-inner" for="Address">
                            Location
                          </label>
                          <div
                            className="input-field d-flex d-flex-column"
                            onClick={getLocation}
                          >
                            <input
                              type="text"
                              name=""
                              id="Address"
                              readOnly
                              value={
                                location.latitude && location.longitude
                                  ? location.latitude + ' ' + location.longitude
                                  : ''
                              }
                            />
                            <div className="location">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.75239 15.1465L7.75479 15.1473C7.91239 15.2161 8.00039 15.2001 8.00039 15.2001C8.00039 15.2001 8.08839 15.2161 8.24679 15.1473L8.24839 15.1465L8.25319 15.1441L8.26759 15.1377C8.34353 15.1024 8.41849 15.0651 8.49239 15.0257C8.64119 14.9489 8.84919 14.8337 9.09799 14.6793C9.59399 14.3721 10.254 13.9065 10.9172 13.2673C12.242 11.9905 13.6004 9.9945 13.6004 7.2001C13.6004 6.4647 13.4555 5.73649 13.1741 5.05707C12.8927 4.37765 12.4802 3.76031 11.9602 3.2403C11.4402 2.72029 10.8228 2.3078 10.1434 2.02637C9.46399 1.74495 8.73579 1.6001 8.00039 1.6001C7.26499 1.6001 6.53679 1.74495 5.85736 2.02637C5.17794 2.3078 4.5606 2.72029 4.04059 3.2403C3.52058 3.76031 3.10809 4.37765 2.82667 5.05707C2.54524 5.73649 2.40039 6.4647 2.40039 7.2001C2.40039 9.9937 3.75879 11.9905 5.08439 13.2673C5.63939 13.8004 6.24887 14.2736 6.90279 14.6793C7.15606 14.8366 7.41662 14.9818 7.68359 15.1145L7.73319 15.1377L7.74759 15.1441L7.75239 15.1465ZM8.00039 9.0001C8.47778 9.0001 8.93562 8.81046 9.27318 8.47289C9.61075 8.13532 9.80039 7.67749 9.80039 7.2001C9.80039 6.72271 9.61075 6.26487 9.27318 5.92731C8.93562 5.58974 8.47778 5.4001 8.00039 5.4001C7.523 5.4001 7.06516 5.58974 6.7276 5.92731C6.39003 6.26487 6.20039 6.72271 6.20039 7.2001C6.20039 7.67749 6.39003 8.13532 6.7276 8.47289C7.06516 8.81046 7.523 9.0001 8.00039 9.0001Z"
                                  fill="#7B7F95"
                                />
                              </svg>
                            </div>
                            <p className='mx-auto'>Set on map</p>
                          </div>
                        </div>
                        <div className="input-inner">
                          <label className="label-inner category-select-label">
                            Division
                          </label>
                          <Select
                            value={selectedDivision}
                            onChange={handleDivisionChange}
                            options={divisions}
                            placeholder="Select Division"
                          />
                        </div>

                        <div className="input-inner">
                          <label className="label-inner category-select-label">
                            District
                          </label>
                          <Select
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            options={districts}
                            placeholder="Select District"
                            isDisabled={!selectedDivision} // Disable district until a division is selected
                          />
                        </div>

                        <div>
                          <label className="label-inner category-select-label">
                            Thana
                          </label>
                          <Select
                            value={selectedCity}
                            onChange={setSelectedCity}
                            options={cities}
                            placeholder="Select Thana"
                            isDisabled={!selectedDistrict} // Disable city until a district is selected
                          />
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
                      <div className="business-logo">
                        <p className="text">Business Logo</p>

                        <label
                          for="business-logo"
                          className="business-logo-label"
                        >
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
                            />
                          </svg>
                          <input type="file" name="" id="business-logo" />
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="cover-photo">
                        <p className="text">Cover Photo</p>

                        <label for="cover-photo" className="cover-photo-label">
                          <div className="d-flex flex-column justify-content-center align-items-center">
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
                              />
                            </svg>
                            <p className="text">
                              Drag & drop your Image here or <span>Browse</span>
                            </p>
                          </div>
                          <input type="file" name="" id="cover-photo" />
                        </label>
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
                            type="password"
                            name=""
                            id="password"
                            placeholder="*************"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
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
                          disabled
                          type="password"
                          name=""
                          id="NewPassword"
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
                          disabled
                          type="password"
                          name=""
                          id="RepeatPassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex justify-content-end">
                      <a
                        href="verify.html"
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
                        <span>Edit Password</span>
                      </a>
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
