'use client'
import React, { useState } from 'react'
import BankInfoNotFound from './BankInfoNotFound';

function BankInfoPage() {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="d-flex flex-column gap-4">
        {/* <BankInfoNotFound/> */}
        {step === 1 &&
          <div className="profile-section">
            <div className="profile-section-inner">
              <div className="row g-4">
                <div className="col-12">
                  <div className="d-flex flex-column gap-3 bankInformation-list">
                    <div className="bankInformation-list-item d-flex flex-column gap-3">
                      <div className="bankInformation-list-item-inner border-bottom pb-2">
                        <div className="row">
                          <div className="col-6">
                            <div className="d-flex flex-column gap-1">
                              <h3 className="title">The City Bank PLC</h3>
                              <p className="paragraph">Md Mamunur Rashid</p>
                              <p className="paragraph">3051465054660</p>
                              <p className="paragraph">Pallabi Branch</p>
                            </div>
                          </div>

                          <div className="col-6">
                            <button className="primary-bankInformation">
                              Primary
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bankInformation-list-item-inner border-bottom pb-2">
                        <div className="row">
                          <div className="col-6">
                            <div className="d-flex flex-column gap-1">
                              <h3 className="title">The City Bank PLC</h3>
                              <p className="paragraph">Md Mamunur Rashid</p>
                              <p className="paragraph">3051465054660</p>
                              <p className="paragraph">Pallabi Branch</p>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div className="">
                        <button className="new-campaign-btn px-5">
                          <span>
                            + Add Bank
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {step === 2 &&
          <div className="profile-section">
            <div className="profile-section-inner">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="d-flex flex-column gap-3">
                    <div className="input-inner">
                      <div className="label-inner">
                        <label for="accountType" className="input-label">
                          Account Holder's Name
                        </label>
                      </div>

                      <input className="input-field" type="text" name="" id="accountType"
                        placeholder="Write here" />
                    </div>

                    <div className="input-inner">
                      <div className="label-inner">
                        <label for="storeName" className="input-label">
                          Account Number
                        </label>
                      </div>

                      <input className="input-field" type="text" name="" id="storeName" placeholder="Write here" />
                    </div>

                    <div className="input-inner">
                      <div className="label-inner">
                        <label for="Location" className="input-label">
                          Your Bank
                        </label>
                      </div>
                      <select className="wide selectize">
                        <option data-display="Select">Select</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>

                    <div className="input-inner">
                      <div className="label-inner">
                        <label for="Location" className="input-label">
                          Branch
                        </label>
                      </div>
                      <select className="wide selectize">
                        <option data-display="Select">Select</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <label className="switch">
                        <span className="close-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                            fill="none">
                            <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </span>
                        <input type="checkbox" checked />
                        <span className="slider round"></span>
                      </label>
                      <p className="Primary-active-text">Is Primary</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {step === 3 &&
          <div className="profile-section">
            <div className="profile-section-inner">
              <div className="row g-4">
                <div className="col-12">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center gap-3 bankInformation-notFound">
                    <figure className="notfound-img">
                      <img src="./assets/images/Bank-Added-icon.png" alt="" />
                    </figure>
                    <h2 className="title">Bank Added</h2>
                    <p className="paragraph">
                      You have successfully added your bank to Autocare vendor panel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className='mb-5'>
      </div>
    </>
  )
}

export default BankInfoPage