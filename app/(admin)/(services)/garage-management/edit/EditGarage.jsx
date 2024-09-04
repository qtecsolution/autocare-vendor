import GlobalSearch from '@/components/admin/GlobalSearch'
import React from 'react'
import Link from 'next/link'

function EditGarage() {
    return (
        <>
            <main class="flex-grow-1">
                <section class="edit-garage-header">
                    <div class="container">
                        <div class="edit-garage-header-inner">
                            <div class="header-text">
                                <h1 class="title">Edit Garage</h1>
                                <p class="details">Make Changes and publish for review</p>
                            </div>
                            <button class="confirm-btn active">Confirm</button>
                        </div>
                    </div>
                </section>

                <section class="edit-garage-body">
                    <div class="container">
                        <div class="edit-garage-body-inner">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="basic-info active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                        type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                        Basic Info
                                    </button>
                                    <button class="basic-info" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                        type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                        Availabilities
                                    </button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div class="store-name-section">
                                        <div class="store-name-section-inner">
                                            <div class="input-inner">
                                                <label class="input-label" for="store-name">Store/Garage Name</label>
                                                <input class="input-field" type="text" name="store-name" id="store-name"
                                                    placeholder="Enter Store/Garage Name" />
                                            </div>

                                            <div class="input-inner">
                                                <label class="input-label" for="short-description">Short Description</label>
                                                <div class="input-field-inner">
                                                    <input type="text" name="short-description" id="short-description"
                                                        placeholder="Enter Short Description" />
                                                    <div class="location">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                                            fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M7.75239 15.1465L7.75479 15.1473C7.91239 15.2161 8.00039 15.2001 8.00039 15.2001C8.00039 15.2001 8.08839 15.2161 8.24679 15.1473L8.24839 15.1465L8.25319 15.1441L8.26759 15.1377C8.34353 15.1024 8.41849 15.0651 8.49239 15.0257C8.64119 14.9489 8.84919 14.8337 9.09799 14.6793C9.59399 14.3721 10.254 13.9065 10.9172 13.2673C12.242 11.9905 13.6004 9.9945 13.6004 7.2001C13.6004 6.4647 13.4555 5.73649 13.1741 5.05707C12.8927 4.37765 12.4802 3.76031 11.9602 3.2403C11.4402 2.72029 10.8228 2.3078 10.1434 2.02637C9.46399 1.74495 8.73579 1.6001 8.00039 1.6001C7.26499 1.6001 6.53679 1.74495 5.85736 2.02637C5.17794 2.3078 4.5606 2.72029 4.04059 3.2403C3.52058 3.76031 3.10809 4.37765 2.82667 5.05707C2.54524 5.73649 2.40039 6.4647 2.40039 7.2001C2.40039 9.9937 3.75879 11.9905 5.08439 13.2673C5.63939 13.8004 6.24887 14.2736 6.90279 14.6793C7.15606 14.8366 7.41662 14.9818 7.68359 15.1145L7.73319 15.1377L7.74759 15.1441L7.75239 15.1465ZM8.00039 9.0001C8.47778 9.0001 8.93562 8.81046 9.27318 8.47289C9.61075 8.13532 9.80039 7.67749 9.80039 7.2001C9.80039 6.72271 9.61075 6.26487 9.27318 5.92731C8.93562 5.58974 8.47778 5.4001 8.00039 5.4001C7.523 5.4001 7.06516 5.58974 6.7276 5.92731C6.39003 6.26487 6.20039 6.72271 6.20039 7.2001C6.20039 7.67749 6.39003 8.13532 6.7276 8.47289C7.06516 8.81046 7.523 9.0001 8.00039 9.0001Z"
                                                                fill="#7B7F95" />
                                                        </svg>
                                                        <p class="text">Set on map</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box">
                                                <label class="category-select-label">City</label>
                                                <select class="wide selectize">
                                                    <option data-display="Select">Dhaka, Bangladesh</option>
                                                    <option value="1">Dhaka, Bangladesh1</option>
                                                    <option value="2">Dhaka, Bangladesh2</option>
                                                    <option value="4">Dhaka, Bangladesh3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div class="store-name-section">
                                        <div class="store-name-section-inner">
                                            <div class="box">
                                                <label class="category-select-label">Business Hours</label>
                                                <select class="wide selectize">
                                                    <option data-display="Select">Everyday</option>
                                                    <option value="1">Everyday1</option>
                                                    <option value="2">Everyday2</option>
                                                    <option value="4">Everyday3</option>
                                                </select>
                                            </div>

                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="box">
                                                        <label class="category-select-label">Opening Time</label>
                                                        <select class="wide selectize">
                                                            <option data-display="Select">10 PM</option>
                                                            <option value="1">02 PM</option>
                                                            <option value="2">03 PM</option>
                                                            <option value="4">04 PM</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="box">
                                                        <label class="category-select-label">Closing Time</label>
                                                        <select class="wide selectize">
                                                            <option data-display="Select">10 PM</option>
                                                            <option value="1">02 PM</option>
                                                            <option value="2">03 PM</option>
                                                            <option value="4">04 PM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box">
                                                <label class="category-select-label">Break Time</label>
                                                <select class="wide selectize">
                                                    <option data-display="Select">01 PM</option>
                                                    <option value="1">02 PM</option>
                                                    <option value="2">03 PM</option>
                                                    <option value="4">04 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div class="container">
                    <div class="card p-3 shadow">
                        <nav>
                            <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                    type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                                    type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                            </div>
                        </nav>
                        <div class="tab-content p-3 border bg-light" id="nav-tabContent">
                            <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <p><strong>This is some placeholder content the Home tab's associated content.</strong>
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
                                    classes to control the content visibility and styling. You can use it with tabs, pills, and any
                                    other <code>.nav</code>-powered navigation.</p>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <p><strong>This is some placeholder content the Profile tab's associated content.</strong>
                                    Clicking another tab will toggle the visibility of this one for the next.
                                    The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                    tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <p><strong>This is some placeholder content the Contact tab's associated content.</strong>
                                    Clicking another tab will toggle the visibility of this one for the next.
                                    The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
                                    tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                            </div>
                        </div>
                    </div>
                </div>  */}
                <section class="edit-garage-footer">
                    <div class="container">
                        <div class="edit-garage-footer-inner">
                            <button class="save-draft-btn active">Cancel</button>
                            <button class="save-changes-btn ">Save Changes</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default EditGarage