"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Select from 'react-select';
import CustomQuillEditor from './CustomQuill';

function AddProductPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <>
      <main id="content">
        <section className="edit-garage-header">
          <div className="edit-garage-header-inner">
            <div className="header-text">
              <h1 className="title">Add Product</h1>
              <p className="details">Make Changes and publish for review</p>
            </div>
          </div>
        </section>

        <section className="edit-garage-body">
          <div className="edit-garage-body-inner">
            <div className="d-flex flex-column gap-3">
              <div className="edit-product">
                <form className="d-flex flex-column gap-4">
                  <div className="d-flex flex-column gap-2">
                    <div className="input-field-name">
                      <label for="product-name">Product Name <span>*</span></label>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="input-field-languages">
                          <div className="d-flex align-items-center gap-3 flex-grow-1">
                            <button className="languages-btn-select">
                              English
                            </button>
                            <input type="text" name="product-name" id="product-name"
                              placeholder="Sony Mirrors camera A6400" />
                          </div>
                          <p className="text">82/100</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <div className="input-field-languages">
                          <div className="d-flex align-items-center gap-3 flex-grow-1">
                            <button className="languages-btn-select">
                              Bangla
                            </button>
                            <input type="text" name="product-name" id="product-name"
                              placeholder="Sony মিররলেস ক্যামেরা a6400" />
                          </div>
                          <p className="text">82/100</p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column gap-2">
                      <div className="input-field-name">
                        <label for="product-name">Short Description</label>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="input-field-languages">
                            <div className="d-flex align-items-center gap-3 flex-grow-1">
                              <button className="languages-btn-select">
                                English
                              </button>
                              <input type="text" name="product-name" id="product-name"
                                placeholder="High-quality ceramic brake pads designed for a quieter and cleaner braking experience." />
                            </div>
                            <p className="text">82/100</p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12">
                          <div className="input-field-languages">
                            <div className="d-flex align-items-center gap-3 flex-grow-1">
                              <button className="languages-btn-select">
                                Bangla
                              </button>
                              <input type="text" name="product-name" id="product-name"
                                placeholder="উচ্চ-মানের সিরামিক ব্রেক প্যাডগুলি একটি শান্ত এবং পরিষ্কার ব্রেকিং অভিজ্ঞতার জন্য ডিজাইন করা হয়েছে।" />
                            </div>
                            <p className="text">82/100</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <input className="box-checkbox" type="checkbox" id="checkbox4" />
                      <label className="label-short-description" for="checkbox4" tabindex="4">Is short description
                        active</label>
                    </div>
                  </div>

                  <div className="category-select">
                    <div className="box">
                      <label className="category-select-label">Category <span>*</span></label>
                      <select className="wide selectize">
                        <option data-display="Select">Category</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>

                    <div className="box">
                      <label className="category-select-label">Sub Category</label>
                      <select className="wide selectize">
                        <option data-display="Select">Sub Category</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>

                    <div className="box">
                      <label className="category-select-label">Sub Sub Category</label>
                      <select className="wide selectize">
                        <option data-display="Select">Sub Sub Category</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>

              <div className="product-image-section">
                <div className="product-img-head">
                  <div className="d-flex align-items-center gap-1">
                    <h1 className="title">Product Image <span>*</span> </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                        stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  <h1 className="example-text">
                    See Example
                  </h1>
                </div>

                <div className="product-img-body">
                  <div className="uplod-img">
                    <div className="product-img">
                      <img src="/assets/images/product-image3.png" alt="" />
                      <div className="img-close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                          <g filter="url(#filter0_dd_239_17341)">
                            <circle cx="21" cy="19.9995" r="15" fill="white" />
                          </g>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.7219 14.7371C15.8354 14.6237 15.9892 14.5601 16.1496 14.5601C16.31 14.5601 16.4639 14.6237 16.5774 14.7371L20.9917 19.1514L25.406 14.7371C25.4614 14.6776 25.5282 14.6299 25.6024 14.5968C25.6767 14.5637 25.7568 14.546 25.8381 14.5445C25.9194 14.5431 26.0001 14.558 26.0754 14.5885C26.1508 14.6189 26.2193 14.6642 26.2767 14.7217C26.3342 14.7792 26.3795 14.8476 26.41 14.923C26.4404 14.9984 26.4554 15.0791 26.4539 15.1604C26.4525 15.2416 26.4347 15.3218 26.4016 15.396C26.3685 15.4703 26.3208 15.5371 26.2614 15.5925L21.8471 20.0068L26.2614 24.4211C26.3208 24.4765 26.3685 24.5433 26.4016 24.6176C26.4347 24.6918 26.4525 24.772 26.4539 24.8532C26.4554 24.9345 26.4404 25.0152 26.41 25.0906C26.3795 25.1659 26.3342 25.2344 26.2767 25.2919C26.2193 25.3494 26.1508 25.3947 26.0754 25.4251C26.0001 25.4555 25.9194 25.4705 25.8381 25.4691C25.7568 25.4676 25.6767 25.4498 25.6024 25.4168C25.5282 25.3837 25.4614 25.336 25.406 25.2765L20.9917 20.8622L16.5774 25.2765C16.4626 25.3834 16.3109 25.4416 16.1541 25.4389C15.9973 25.4361 15.8477 25.3726 15.7368 25.2617C15.6259 25.1508 15.5623 25.0012 15.5596 24.8444C15.5568 24.6876 15.615 24.5358 15.7219 24.4211L20.1362 20.0068L15.7219 15.5925C15.6086 15.479 15.5449 15.3252 15.5449 15.1648C15.5449 15.0044 15.6086 14.8506 15.7219 14.7371Z"
                            fill="#525468" />
                          <defs>
                            <filter id="filter0_dd_239_17341" x="0.545455" y="0.908603" width="40.9091" height="40.9091"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha"
                                result="effect1_dropShadow_239_17341" />
                              <feOffset dy="1.36364" />
                              <feGaussianBlur stdDeviation="2.04545" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239_17341" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="1.36364" />
                              <feGaussianBlur stdDeviation="1.36364" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                              <feBlend mode="normal" in2="effect1_dropShadow_239_17341"
                                result="effect2_dropShadow_239_17341" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_239_17341"
                                result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="product-img">
                      <img src="/assets/images/product-image3.png" alt="" />
                      <div className="img-close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                          <g filter="url(#filter0_dd_239_17341)">
                            <circle cx="21" cy="19.9995" r="15" fill="white" />
                          </g>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.7219 14.7371C15.8354 14.6237 15.9892 14.5601 16.1496 14.5601C16.31 14.5601 16.4639 14.6237 16.5774 14.7371L20.9917 19.1514L25.406 14.7371C25.4614 14.6776 25.5282 14.6299 25.6024 14.5968C25.6767 14.5637 25.7568 14.546 25.8381 14.5445C25.9194 14.5431 26.0001 14.558 26.0754 14.5885C26.1508 14.6189 26.2193 14.6642 26.2767 14.7217C26.3342 14.7792 26.3795 14.8476 26.41 14.923C26.4404 14.9984 26.4554 15.0791 26.4539 15.1604C26.4525 15.2416 26.4347 15.3218 26.4016 15.396C26.3685 15.4703 26.3208 15.5371 26.2614 15.5925L21.8471 20.0068L26.2614 24.4211C26.3208 24.4765 26.3685 24.5433 26.4016 24.6176C26.4347 24.6918 26.4525 24.772 26.4539 24.8532C26.4554 24.9345 26.4404 25.0152 26.41 25.0906C26.3795 25.1659 26.3342 25.2344 26.2767 25.2919C26.2193 25.3494 26.1508 25.3947 26.0754 25.4251C26.0001 25.4555 25.9194 25.4705 25.8381 25.4691C25.7568 25.4676 25.6767 25.4498 25.6024 25.4168C25.5282 25.3837 25.4614 25.336 25.406 25.2765L20.9917 20.8622L16.5774 25.2765C16.4626 25.3834 16.3109 25.4416 16.1541 25.4389C15.9973 25.4361 15.8477 25.3726 15.7368 25.2617C15.6259 25.1508 15.5623 25.0012 15.5596 24.8444C15.5568 24.6876 15.615 24.5358 15.7219 24.4211L20.1362 20.0068L15.7219 15.5925C15.6086 15.479 15.5449 15.3252 15.5449 15.1648C15.5449 15.0044 15.6086 14.8506 15.7219 14.7371Z"
                            fill="#525468" />
                          <defs>
                            <filter id="filter0_dd_239_17341" x="0.545455" y="0.908603" width="40.9091" height="40.9091"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha"
                                result="effect1_dropShadow_239_17341" />
                              <feOffset dy="1.36364" />
                              <feGaussianBlur stdDeviation="2.04545" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239_17341" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="1.36364" />
                              <feGaussianBlur stdDeviation="1.36364" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                              <feBlend mode="normal" in2="effect1_dropShadow_239_17341"
                                result="effect2_dropShadow_239_17341" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_239_17341"
                                result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="product-img">
                      <img src="/assets/images/product-image3.png" alt="" />
                      <div className="img-close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                          <g filter="url(#filter0_dd_239_17341)">
                            <circle cx="21" cy="19.9995" r="15" fill="white" />
                          </g>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.7219 14.7371C15.8354 14.6237 15.9892 14.5601 16.1496 14.5601C16.31 14.5601 16.4639 14.6237 16.5774 14.7371L20.9917 19.1514L25.406 14.7371C25.4614 14.6776 25.5282 14.6299 25.6024 14.5968C25.6767 14.5637 25.7568 14.546 25.8381 14.5445C25.9194 14.5431 26.0001 14.558 26.0754 14.5885C26.1508 14.6189 26.2193 14.6642 26.2767 14.7217C26.3342 14.7792 26.3795 14.8476 26.41 14.923C26.4404 14.9984 26.4554 15.0791 26.4539 15.1604C26.4525 15.2416 26.4347 15.3218 26.4016 15.396C26.3685 15.4703 26.3208 15.5371 26.2614 15.5925L21.8471 20.0068L26.2614 24.4211C26.3208 24.4765 26.3685 24.5433 26.4016 24.6176C26.4347 24.6918 26.4525 24.772 26.4539 24.8532C26.4554 24.9345 26.4404 25.0152 26.41 25.0906C26.3795 25.1659 26.3342 25.2344 26.2767 25.2919C26.2193 25.3494 26.1508 25.3947 26.0754 25.4251C26.0001 25.4555 25.9194 25.4705 25.8381 25.4691C25.7568 25.4676 25.6767 25.4498 25.6024 25.4168C25.5282 25.3837 25.4614 25.336 25.406 25.2765L20.9917 20.8622L16.5774 25.2765C16.4626 25.3834 16.3109 25.4416 16.1541 25.4389C15.9973 25.4361 15.8477 25.3726 15.7368 25.2617C15.6259 25.1508 15.5623 25.0012 15.5596 24.8444C15.5568 24.6876 15.615 24.5358 15.7219 24.4211L20.1362 20.0068L15.7219 15.5925C15.6086 15.479 15.5449 15.3252 15.5449 15.1648C15.5449 15.0044 15.6086 14.8506 15.7219 14.7371Z"
                            fill="#525468" />
                          <defs>
                            <filter id="filter0_dd_239_17341" x="0.545455" y="0.908603" width="40.9091" height="40.9091"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha"
                                result="effect1_dropShadow_239_17341" />
                              <feOffset dy="1.36364" />
                              <feGaussianBlur stdDeviation="2.04545" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239_17341" />
                              <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dy="1.36364" />
                              <feGaussianBlur stdDeviation="1.36364" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                              <feBlend mode="normal" in2="effect1_dropShadow_239_17341"
                                result="effect2_dropShadow_239_17341" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_239_17341"
                                result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    <div className="add-product-img-inner">
                      <label for="add-product-img" className="add-product-img">
                        <input className="add-product-img-input" type="file" name="" id="add-product-img" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                          <path d="M15 5.62451V24.3745M24.375 14.9995H5.625" stroke="#0F766D" stroke-width="1.875"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </label>
                    </div>

                    <div className="add-product-img-inner">
                      <label for="add-product-img" className="add-product-img">
                        <input className="add-product-img-input" type="file" name="" id="add-product-img" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                          <path d="M15 5.62451V24.3745M24.375 14.9995H5.625" stroke="#0F766D" stroke-width="1.875"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <ul className="add-product-img-list">
                      <li>Image Ration </li>
                      <li>Max file size: 1MB.</li>
                      <li>Format: png, jpg</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="youtube-thumbnail">
                <div className="product-img-head">
                  <div className="d-flex align-items-center gap-1">
                    <h1 className="title">Youtube thumbnail</h1>
                  </div>

                  <h1 className="example-text">
                    See Example
                  </h1>
                </div>

                <div className="product-img-body">
                  <div className="product-thumbnail">
                    <img src="/assets/images/thumbnail.png" alt="" />
                  </div>

                  <div className="">
                    <ul className="add-product-img-list">
                      <li>Image Ration </li>
                      <li>Max file size: 1MB.</li>
                      <li>Format: png, jpg</li>
                    </ul>
                  </div>
                </div>

                <div className="product-img-footer">
                  <label className="input-label" for="youtube-link">Youtube Link</label>
                  <div className="input-inner">
                    <p className="text">http://www.youtube.com/</p>
                    <input className="input" type="text" name="" id="youtube-link" placeholder="Type here" />

                    <figure className="input-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                          stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </figure>
                  </div>
                </div>
              </div>

              <div className="brand-name">
                <div className="row g-3">
                  <div className="col-sm-6 col-lg-6 col-xl-4">
                    <div className="inner-input">
                      <div className="box">
                        <label className="category-select-label">Brand <span>*</span></label>
                        <select className="wide selectize">
                          <option data-display="Select">Ford</option>
                          <option value="1">Ford 1</option>
                          <option value="2">Ford 2</option>
                          <option value="4">Ford 3</option>
                        </select>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <label className="switch">
                          <span className="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked />
                          <span className="slider round"></span>
                        </label>
                        <p>Is Brand active</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6 col-xl-4">
                    <div className="inner-input">
                      <div className="box">
                        <label className="category-select-label">Manufacturer</label>
                        <select className="wide selectize">
                          <option data-display="Select">Manufacturer</option>
                          <option value="1">Ford 1</option>
                          <option value="2">Ford 2</option>
                          <option value="4">Ford 3</option>
                        </select>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <label className="switch">
                          <span className="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked />
                          <span className="slider round"></span>
                        </label>
                        <p>Is Brand active</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-6 col-xl-4">
                    <div className="inner-input">
                      <div className="d-flex flex-column gap-2">
                        <label className="label-text" for="part">Warranty</label>
                        <input className="input" type="text" name="" id="part" placeholder="XYZ-6789" />
                      </div>
                      <div className="d-flex gap-2 align-items-center">

                        <label className="switch">
                          <span className="close-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                          <input type="checkbox" checked />
                          <span className="slider round"></span>
                        </label>
                        <p>Is Brand active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="vehicle-information">
                <div className="add-product-body">
                  <form className="d-flex flex-column gap-4">
                    <div className="tag-container">
                      <label className="category-select-label">Vehicle Type</label>
                      <select className="wide selectize">
                        <option data-display="Select">Vehicle Type</option>
                        <option value="1">Some option</option>
                        <option value="2">Another option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>

                    <div className="tag-container">
                      <label for="tag-input-1">Compatible Brand <span className="text-danger">*</span></label>
                      <div className="tags-input" id="tags-input-1">
                        <input type="text" id="tag-input-1" />
                      </div>
                    </div>

                    <div className="tag-container">
                      <label for="tag-input-2">Car Model</label>
                      <div className="tags-input" id="tags-input-2">
                        <input type="text" id="tag-input-2" />
                      </div>
                    </div>

                    <div className="tag-container">
                      <label for="tag-input-3">Car Model Year</label>
                      <div className="tags-input" id="tags-input-3">
                        <input type="text" id="tag-input-3" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="description">
              <div className="main-description">
                <label for="" className="main-description-label">
                  Main Description English
                </label>
                <div className="editor-container">
                  {/* <div className="toolbar" id="toolbar">
                    <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center w-100">
                      <div className="toolbar-inner">
                        <div className="d-flex align-items-center">
                          <button className="ql-undo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M3.88432 4.66572L5.57467 6.35608L4.63186 7.29889L1.33203 3.99905L4.63186 0.699219L5.57467 1.64203L3.88432 3.33239H8.66536C11.6109 3.33239 13.9987 5.7202 13.9987 8.66575C13.9987 11.6112 11.6109 13.9991 8.66536 13.9991H2.66536V12.6658H8.66536C10.8745 12.6658 12.6654 10.8749 12.6654 8.66575C12.6654 6.45658 10.8745 4.66572 8.66536 4.66572H3.88432Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                          <button className="ql-redo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M12.1144 4.66572H7.33333C5.12419 4.66572 3.33333 6.45658 3.33333 8.66575C3.33333 10.8749 5.12419 12.6658 7.33333 12.6658H13.3333V13.9991H7.33333C4.38781 13.9991 2 11.6112 2 8.66575C2 5.7202 4.38781 3.33239 7.33333 3.33239H12.1144L10.424 1.64203L11.3669 0.699219L14.6667 3.99905L11.3669 7.29889L10.424 6.35608L12.1144 4.66572Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                        </div>
                        <select className="ql-font"></select>
                        <select className="ql-size"></select>

                        <div className="d-flex align-items-center">
                          <button className="ql-bold"></button>
                          <button className="ql-italic"></button>
                          <button className="ql-underline"></button>
                        </div>
                        <div className="d-flex align-items-center">
                          <button className="ql-list" value="ordered"></button>
                          <button className="ql-list" value="bullet"></button>
                          <button className="ql-align" value=""></button>
                          <button className="ql-align" value="center"></button>
                          <button className="ql-align" value="right"></button>
                          <button className="ql-blockquote"></button>
                        </div>
                        <button className="ql-strike"></button>
                        <button className="ql-clean"></button>
                      </div>

                      <a href="#" className="link-example">See Example</a>
                    </div>
                  </div>
                  
                  <div className="editor" id="editor"></div> */}
                    <CustomQuillEditor editorId="editor1" toolbarId="toolbar1" placeholder="Write here for editor 1" />
                </div>
              </div>

              <div className="main-description">
                <label for="" className="main-description-label">
                  Main Description Bangla
                </label>
                {/* <div className="editor-container">
                  <div className="toolbar" id="toolbar1">
                    <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center w-100">
                      <div className="toolbar-inner">
                        <div className="d-flex align-items-center">
                          <button className="ql-undo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M3.88432 4.66572L5.57467 6.35608L4.63186 7.29889L1.33203 3.99905L4.63186 0.699219L5.57467 1.64203L3.88432 3.33239H8.66536C11.6109 3.33239 13.9987 5.7202 13.9987 8.66575C13.9987 11.6112 11.6109 13.9991 8.66536 13.9991H2.66536V12.6658H8.66536C10.8745 12.6658 12.6654 10.8749 12.6654 8.66575C12.6654 6.45658 10.8745 4.66572 8.66536 4.66572H3.88432Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                          <button className="ql-redo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M12.1144 4.66572H7.33333C5.12419 4.66572 3.33333 6.45658 3.33333 8.66575C3.33333 10.8749 5.12419 12.6658 7.33333 12.6658H13.3333V13.9991H7.33333C4.38781 13.9991 2 11.6112 2 8.66575C2 5.7202 4.38781 3.33239 7.33333 3.33239H12.1144L10.424 1.64203L11.3669 0.699219L14.6667 3.99905L11.3669 7.29889L10.424 6.35608L12.1144 4.66572Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                        </div>
                        <select className="ql-font"></select>
                        <select className="ql-size"></select>

                        <div className="d-flex align-items-center">
                          <button className="ql-bold"></button>
                          <button className="ql-italic"></button>
                          <button className="ql-underline"></button>
                        </div>
                        <div className="d-flex align-items-center">
                          <button className="ql-list" value="ordered"></button>
                          <button className="ql-list" value="bullet"></button>
                          <button className="ql-align" value=""></button>
                          <button className="ql-align" value="center"></button>
                          <button className="ql-align" value="right"></button>
                          <button className="ql-blockquote"></button>
                        </div>
                        <button className="ql-strike"></button>
                        <button className="ql-clean"></button>
                      </div>

                      <a href="#" className="link-example">See Example</a>
                    </div>
                  </div>
                  <div className="editor" id="editor1"></div>
                </div> */}
              </div>

              <div className="main-description">
                <label for="" className="main-description-label">
                  Specification English
                </label>
                {/* <div className="editor-container">
                  <div className="toolbar" id="toolbar2">
                    <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center w-100">
                      <div className="toolbar-inner">
                        <div className="d-flex align-items-center">
                          <button className="ql-undo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M3.88432 4.66572L5.57467 6.35608L4.63186 7.29889L1.33203 3.99905L4.63186 0.699219L5.57467 1.64203L3.88432 3.33239H8.66536C11.6109 3.33239 13.9987 5.7202 13.9987 8.66575C13.9987 11.6112 11.6109 13.9991 8.66536 13.9991H2.66536V12.6658H8.66536C10.8745 12.6658 12.6654 10.8749 12.6654 8.66575C12.6654 6.45658 10.8745 4.66572 8.66536 4.66572H3.88432Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                          <button className="ql-redo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M12.1144 4.66572H7.33333C5.12419 4.66572 3.33333 6.45658 3.33333 8.66575C3.33333 10.8749 5.12419 12.6658 7.33333 12.6658H13.3333V13.9991H7.33333C4.38781 13.9991 2 11.6112 2 8.66575C2 5.7202 4.38781 3.33239 7.33333 3.33239H12.1144L10.424 1.64203L11.3669 0.699219L14.6667 3.99905L11.3669 7.29889L10.424 6.35608L12.1144 4.66572Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                        </div>
                        <select className="ql-font"></select>
                        <select className="ql-size"></select>

                        <div className="d-flex align-items-center">
                          <button className="ql-bold"></button>
                          <button className="ql-italic"></button>
                          <button className="ql-underline"></button>
                        </div>
                        <div className="d-flex align-items-center">
                          <button className="ql-list" value="ordered"></button>
                          <button className="ql-list" value="bullet"></button>
                          <button className="ql-align" value=""></button>
                          <button className="ql-align" value="center"></button>
                          <button className="ql-align" value="right"></button>
                          <button className="ql-blockquote"></button>
                        </div>
                        <button className="ql-strike"></button>
                        <button className="ql-clean"></button>
                      </div>

                      <a href="#" className="link-example">See Example</a>
                    </div>
                  </div>
                  <div className="editor" id="editor2"></div>
                </div> */}
              </div>

              <div className="main-description">
                <label for="" className="main-description-label">
                  Specification Bangla
                </label>
                {/* <div className="editor-container">
                  <div className="toolbar" id="toolbar3">
                    <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center w-100">
                      <div className="toolbar-inner">
                        <div className="d-flex align-items-center">
                          <button className="ql-undo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M3.88432 4.66572L5.57467 6.35608L4.63186 7.29889L1.33203 3.99905L4.63186 0.699219L5.57467 1.64203L3.88432 3.33239H8.66536C11.6109 3.33239 13.9987 5.7202 13.9987 8.66575C13.9987 11.6112 11.6109 13.9991 8.66536 13.9991H2.66536V12.6658H8.66536C10.8745 12.6658 12.6654 10.8749 12.6654 8.66575C12.6654 6.45658 10.8745 4.66572 8.66536 4.66572H3.88432Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                          <button className="ql-redo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M12.1144 4.66572H7.33333C5.12419 4.66572 3.33333 6.45658 3.33333 8.66575C3.33333 10.8749 5.12419 12.6658 7.33333 12.6658H13.3333V13.9991H7.33333C4.38781 13.9991 2 11.6112 2 8.66575C2 5.7202 4.38781 3.33239 7.33333 3.33239H12.1144L10.424 1.64203L11.3669 0.699219L14.6667 3.99905L11.3669 7.29889L10.424 6.35608L12.1144 4.66572Z"
                                fill="#0A0A0A" />
                            </svg>
                          </button>
                        </div>
                        <select className="ql-font"></select>
                        <select className="ql-size"></select>

                        <div className="d-flex align-items-center">
                          <button className="ql-bold"></button>
                          <button className="ql-italic"></button>
                          <button className="ql-underline"></button>
                        </div>
                        <div className="d-flex align-items-center">
                          <button className="ql-list" value="ordered"></button>
                          <button className="ql-list" value="bullet"></button>
                          <button className="ql-align" value=""></button>
                          <button className="ql-align" value="center"></button>
                          <button className="ql-align" value="right"></button>
                          <button className="ql-blockquote"></button>
                        </div>
                        <button className="ql-strike"></button>
                        <button className="ql-clean"></button>
                      </div>

                      <a href="#" className="link-example">See Example</a>
                    </div>
                  </div>
                  <div className="editor" id="editor3"></div>
                </div> */}
              </div>
            </div>

            <div className="price-stock">


              <div className="tag-container">
                <label for="tag-input-4">Tags</label>
                <div className="tags-input" id="tags-input-4">
                  <input type="text" id="tag-input-4" />
                </div>
              </div>

              <div className="meta-description">
                <label className="label-text" for="Meta-description">Meta description</label>
                <textarea className="input" name="" id="Meta-description" cols="30" rows="3"
                  placeholder="Enter meta description"></textarea>
              </div>

              <div className="tag-container">
                <label for="tag-meta">Meta Keywords</label>
                <div className="tags-input" id="tags-meta">
                  <input type="text" id="tag-meta" />
                </div>
              </div>
            </div>

            <div className="brand-name">
              <div className="row g-3">
                <div className="col-sm-6 col-lg-6">
                  <div className="inner-input">
                    <div className="d-flex flex-column gap-2">
                      <label className="label-text" for="manufacturer">
                        Stock <span className="text-danger">*</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                            stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </label>
                      <input className="input" type="text" name="" id="manufacturer" placeholder="Ford" />
                    </div>

                  </div>
                </div>

                <div className="col-sm-6 col-lg-6">
                  <div className="inner-input">
                    <div className="d-flex flex-column gap-2">
                      <label className="label-text" for="part">
                        SKU Name <span className="text-danger">*</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                            stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </label>
                      <input className="input" type="text" name="" id="part" placeholder="XYZ-6789" />
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="price-stock">
              <div className="row g-3">
                <div className="col-sm-6 col-md-3">
                  <div className="inner-input">
                    <div className="d-flex flex-column gap-2">
                      <label className="label-text" for="manufacturer">Price <span>*</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                            stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </label>
                      <input className="input" type="text" name="" id="manufacturer" placeholder="৳" />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-3">
                  <div className="inner-input">
                    <div className="d-flex flex-column gap-2">
                      <label className="label-text" for="manufacturer">Discount Price
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                            stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </label>
                      <input className="input" type="text" name="" id="manufacturer" placeholder="৳" />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="inner-input">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex align-items-center justify-content-between">
                        <label className="label-text" for="manufacturer">Final Price
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                              stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </label>
                        <p className="commission-text">
                          Commission 5%
                        </p>
                      </div>
                      <div className="commission">
                        <p className="price">
                          ৳ 9,999
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="inner-input">
                    <div className="d-flex flex-column gap-2">
                      <label className="label-text" for="part">VAT (%)</label>
                      <input className="input" type="text" name="" id="part" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="add-product-footer">
          <div className="d-flex align-items-center justify-content-between w-100 gap-3">
            <a href="#" className="save-draft-btn active">
              Save Draft
            </a>

            <a href="#" className="confirm-btn active ">
              Save and Continue
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default AddProductPage