import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'

function GarageManagementPage() {
    return (
        <main id="content">
            <div className="inner-content">
                <GlobalSearch />
                <section className="manage-product-section">
                    <div className="manage-product-section-header">
                        <h3 className="heading-text">
                            Garage Management
                        </h3>

                        <div className="d-flex align-items-center gap-3">
                            <a href="./edit-garage.html" className="add-product-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M9.16602 1.6665H7.49935C3.33268 1.6665 1.66602 3.33317 1.66602 7.49984V12.4998C1.66602 16.6665 3.33268 18.3332 7.49935 18.3332H12.4993C16.666 18.3332 18.3327 16.6665 18.3327 12.4998V10.8332"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M13.3675 2.51688L6.80088 9.08354C6.55088 9.33354 6.30088 9.82521 6.25088 10.1835L5.89254 12.6919C5.75921 13.6002 6.40088 14.2335 7.30921 14.1085L9.81754 13.7502C10.1675 13.7002 10.6592 13.4502 10.9175 13.2002L17.4842 6.63354C18.6175 5.50021 19.1509 4.18354 17.4842 2.51688C15.8175 0.850211 14.5009 1.38354 13.3675 2.51688Z"
                                        stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12.4258 3.4585C12.9841 5.45016 14.5424 7.0085 16.5424 7.57516" stroke="white"
                                        stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Edit Garage</span>
                            </a>
                        </div>
                    </div>
                </section>


                <section className="store-info-section">
                    <div className="store-info-section-inner">
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-between align-items-sm-center">
                                    <div className="d-flex store-name">
                                        <h1 className="text">Mayer Doa Parts Store</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M10.6871 6.91606L9.9507 5.42383L9.21428 6.91606C9.13849 7.06957 8.99205 7.17601 8.82256 7.20061L7.17578 7.43991L8.36743 8.60144C8.48999 8.72098 8.54597 8.89312 8.51704 9.06193L8.23571 10.7021L9.70864 9.92767C9.78438 9.88782 9.86757 9.86795 9.9507 9.86795C10.0338 9.86795 10.117 9.88787 10.1928 9.92767L11.6657 10.7021L11.3843 9.06193C11.3554 8.89317 11.4114 8.72098 11.534 8.60144L12.7256 7.43991L11.0788 7.20061C10.9094 7.17601 10.7629 7.06957 10.6871 6.91606Z"
                                                fill="#0D941B" />
                                            <path
                                                d="M17.4347 8.52464C17.3901 8.38756 17.3901 8.24263 17.4347 8.1055L17.8563 6.8081C18.0871 6.0978 17.8361 5.32559 17.2319 4.88654L16.1283 4.08468C16.0117 3.99994 15.9264 3.88268 15.8819 3.74555L15.4603 2.44814C15.2295 1.73785 14.5726 1.2606 13.8257 1.2606H12.4615C12.3174 1.2606 12.1795 1.21581 12.0629 1.13107L10.9592 0.329216C10.355 -0.109739 9.54303 -0.109739 8.9388 0.329216L7.83517 1.13107C7.71854 1.21581 7.58068 1.2606 7.43653 1.2606H6.07233C5.32551 1.2606 4.66859 1.73785 4.43772 2.4482L4.01614 3.74566C3.97161 3.88273 3.8864 3.99999 3.76977 4.08473L2.66614 4.88659C2.06196 5.32559 1.81101 6.0978 2.04183 6.8081L2.46341 8.10556C2.50799 8.24263 2.50799 8.38756 2.46341 8.52469L2.04183 9.82215C1.81101 10.5325 2.06196 11.3047 2.66619 11.7437L3.76987 12.5456C3.8865 12.6303 3.97166 12.7476 4.01619 12.8847L4.43777 14.1822C4.66864 14.8925 5.32551 15.3697 6.07238 15.3697H7.43659C7.58074 15.3697 7.71859 15.4145 7.83522 15.4992L8.93891 16.301C9.2411 16.5206 9.595 16.6303 9.94911 16.6303C10.3031 16.6303 10.6572 16.5206 10.9593 16.3011L12.063 15.4992C12.1796 15.4145 12.3175 15.3697 12.4616 15.3697H13.8258C14.5726 15.3697 15.2296 14.8925 15.4604 14.1821L15.882 12.8846C15.9266 12.7476 16.0117 12.6303 16.1284 12.5456L17.232 11.7437C17.8363 11.3047 18.0872 10.5325 17.8564 9.8221L17.4347 8.52464ZM14.2051 7.44952L12.4545 9.15587L12.8678 11.5653C12.9013 11.7605 12.821 11.9577 12.6608 12.0742C12.5701 12.14 12.4628 12.1735 12.3549 12.1735C12.2721 12.1735 12.189 12.1538 12.1129 12.1138L9.94905 10.9761L7.78518 12.1137C7.60997 12.2058 7.39752 12.1906 7.23734 12.0742C7.07717 11.9578 6.9969 11.7605 7.03035 11.5653L7.44361 9.15587L5.69304 7.44952C5.55123 7.3113 5.50025 7.10457 5.56143 6.91625C5.62266 6.72793 5.78543 6.5907 5.98134 6.56219L8.40064 6.21063L9.48253 4.01841C9.57018 3.84086 9.75101 3.72844 9.94905 3.72844C10.1471 3.72844 10.3279 3.84086 10.4156 4.01841L11.4975 6.21063L13.9168 6.56219C14.1127 6.59065 14.2755 6.72793 14.3367 6.91625C14.3979 7.10457 14.3468 7.3113 14.2051 7.44952Z"
                                                fill="#0D941B" />
                                            <path
                                                d="M19.7403 15.3213L17.2828 12.8633L16.7444 13.254L16.3485 14.4718C15.9922 15.5694 14.9772 16.3066 13.8234 16.3066H12.5431L12.0391 16.6723L15.2144 19.8471C15.3128 19.9454 15.4459 19.9996 15.5822 19.9996C15.6176 19.9996 15.6535 19.9959 15.6889 19.9881C15.8605 19.9522 16.0026 19.832 16.0665 19.6687L17.0497 17.1561L19.5618 16.1734C19.7257 16.1094 19.8459 15.9674 19.8818 15.7952C19.9177 15.6235 19.8646 15.4451 19.7403 15.3213Z"
                                                fill="#0D941B" />
                                            <path
                                                d="M7.34965 16.3066H6.0694C4.91557 16.3066 3.90064 15.5694 3.54429 14.4718L3.14841 13.254L2.60999 12.8633L0.15251 15.3213C0.0281797 15.4451 -0.024882 15.6235 0.0110127 15.7952C0.0469073 15.9674 0.167076 16.1094 0.330943 16.1734L2.84305 17.1561L3.82625 19.6687C3.89023 19.832 4.03225 19.9522 4.20392 19.9881C4.2393 19.9959 4.27519 19.9996 4.31057 19.9996C4.44686 19.9996 4.58004 19.9454 4.67836 19.8471L7.85373 16.6723L7.34965 16.3066Z"
                                                fill="#0D941B" />
                                        </svg>
                                    </div>

                                    <div>
                                        <button className="store-btn">Flagship Store</button>
                                    </div>

                                </div>

                                <div className="store-address">
                                    <p className="text">
                                        Plot- 105, Road- 01, Block- A Shagufta Housing, Dhaka 1216,
                                    </p>
                                </div>
                            </div>

                            <div className="business-hours">
                                <div className="business-hours-inner">
                                    <h1 className="hedding">
                                        Business Hours
                                    </h1>
                                    <div className="d-flex flex-column gap-2">
                                        <p className="pra">
                                            Saturday - Friday
                                        </p>
                                        <p className="pra">
                                            10 AM - 12 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="business-hours-inner">
                                    <h1 className="hedding">
                                        Break Time
                                    </h1>
                                    <div className="d-flex flex-column gap-2">
                                        <p className="pra">
                                            01 PM - 02 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="business-hours-inner">
                                    <h1 className="hedding">
                                        Holiday
                                    </h1>
                                    <div className="d-flex flex-column gap-2">
                                        <p className="pra">
                                            No
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="profile-photo-section">
                    <div className="profile-photo-section-inner">
                        <div className="d-flex flex-column gap-3">
                            <div className="profile-photo-inner">
                                <p className="text">
                                    Profile Photo
                                </p>
                                <div>
                                    <label className="profile-photo-label" for="profile-photo">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                            <path
                                                d="M16.9991 23.3745V13.812M16.9991 13.812L21.2491 18.062M16.9991 13.812L12.7491 18.062M9.56162 27.6245C8.04498 27.6262 6.57744 27.0871 5.42254 26.104C4.26764 25.1209 3.50105 23.7583 3.26044 22.2609C3.01983 20.7635 3.32096 19.2293 4.10975 17.9339C4.89854 16.6386 6.12331 15.6668 7.56412 15.1933C7.19395 13.2966 7.57653 11.3303 8.63085 9.7108C9.68517 8.09128 11.3284 6.94572 13.2127 6.51669C15.0969 6.08766 17.0742 6.40885 18.7257 7.41225C20.3772 8.41565 21.5734 10.0225 22.0609 11.8924C22.8145 11.6473 23.6218 11.6178 24.3913 11.8073C25.1609 11.9968 25.8621 12.3976 26.4159 12.9646C26.9696 13.5316 27.3538 14.2422 27.525 15.016C27.6962 15.7898 27.6476 16.5961 27.3847 17.3438C28.5445 17.7868 29.5126 18.6217 30.1211 19.7039C30.7296 20.786 30.9401 22.047 30.7162 23.2681C30.4922 24.4892 29.8479 25.5934 28.8949 26.3891C27.942 27.1849 26.7406 27.6219 25.4991 27.6245H9.56162Z"
                                                stroke="#0F766D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <input type="file" name="" id="profile-photo" />
                                    </label>
                                </div>
                            </div>

                            <div className="cover-photo-inner">
                                <p className="text">
                                    Profile Photo
                                </p>

                                <label className="cover-photo-label" for="cover-photo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <path
                                            d="M16.9991 23.3745V13.812M16.9991 13.812L21.2491 18.062M16.9991 13.812L12.7491 18.062M9.56162 27.6245C8.04498 27.6262 6.57744 27.0871 5.42254 26.104C4.26764 25.1209 3.50105 23.7583 3.26044 22.2609C3.01983 20.7635 3.32096 19.2293 4.10975 17.9339C4.89854 16.6386 6.12331 15.6668 7.56412 15.1933C7.19395 13.2966 7.57653 11.3303 8.63085 9.7108C9.68517 8.09128 11.3284 6.94572 13.2127 6.51669C15.0969 6.08766 17.0742 6.40885 18.7257 7.41225C20.3772 8.41565 21.5734 10.0225 22.0609 11.8924C22.8145 11.6473 23.6218 11.6178 24.3913 11.8073C25.1609 11.9968 25.8621 12.3976 26.4159 12.9646C26.9696 13.5316 27.3538 14.2422 27.525 15.016C27.6962 15.7898 27.6476 16.5961 27.3847 17.3438C28.5445 17.7868 29.5126 18.6217 30.1211 19.7039C30.7296 20.786 30.9401 22.047 30.7162 23.2681C30.4922 24.4892 29.8479 25.5934 28.8949 26.3891C27.942 27.1849 26.7406 27.6219 25.4991 27.6245H9.56162Z"
                                            stroke="#0F766D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="text">Drag & drop your Image here or <span>Browse</span></p>

                                    <input type="file" name="" id="cover-photo" />
                                </label>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-categories-section">
                    <div className="service-categories-section-inner">
                        <div className="d-flex flex-column gap-2">
                            <h1 className="heading-text">Service Categories</h1>

                            <div className="categories">
                                <div className="categories-inner">
                                    <p className="text">Toyota Camry</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#98A2B3" stroke-width="1.66667"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className="categories-inner">
                                    <p className="text">Honda Accord</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#98A2B3" stroke-width="1.66667"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className="categories-inner">
                                    <p className="text">Ford Mustang</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#98A2B3" stroke-width="1.66667"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className="categories-inner">
                                    <p className="text">Chevrolet Malibu</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#98A2B3" stroke-width="1.66667"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <button className="categories-add-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5 10H15" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M10 15V5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    <p className="text">Add More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default GarageManagementPage