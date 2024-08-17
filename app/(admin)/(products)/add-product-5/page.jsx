import Link from 'next/link'
import React from 'react'
function page() {
  return (
    <div id="content">
      <div class="d-flex flex-column h-100">
        <div class="flex-grow-1">
          <div class="page-header">
            <div class="d-flex flex-column gap-1">
              <h1 class="page-title">
                Add Product
              </h1>
              <p class="page-text">
                Seamlessly Add and Manage Your Products
              </p>
            </div>
          </div>

          <div class="add-product-content">
            <div class="add-product-header">
              <div class="add-product-header-inner">
                <div class="add-product-header-item">
                  <div class="number active">
                    1
                  </div>

                  <h4 class="text active">
                    Basic Info
                  </h4>
                </div>

                <div class="add-product-header-item">
                  <div class="number">
                    2
                  </div>

                  <h4 class="text">
                    Description
                  </h4>
                </div>

                <div class="add-product-header-item">
                  <div class="number">
                    3
                  </div>

                  <h4 class="text">
                    Price, Stock & Variants
                  </h4>
                </div>

                <div class="add-product-header-item">
                  <div class="number">
                    4
                  </div>

                  <h4 class="text">
                    Shipping & Warranty
                  </h4>
                </div>
              </div>

              <div class="inner-bar-chart">
                <div class="bar-chart">
                  <div class="bar" style={{width: '100%'}}>
                    <span style={{width: '20%'}}></span>
                  </div>
                </div>
                <p class="text">10%</p>
              </div>
            </div>

            <div class="add-product-body">
              <form class="d-flex flex-column gap-4">
                <div class="d-flex flex-column gap-2">
                  <div class="input-field-name">
                    <label for="product-name">Product Name <span>*</span></label>
                  </div>
                  <div class="row g-2">
                    <div class="col-md-8  col-lg-7 col-xl-8 col-xxl-9">
                      <div class="input-field">
                        <input type="text" name="product-name" id="product-name"
                          placeholder="Ex. Sony a6400 mirrorless camera" />
                        <p class="text">82/100</p>
                      </div>
                    </div>
                    <div class="col-md-4  col-lg-5 col-xl-4 col-xxl-3 align-self-center">
                      <a class="languages-btn" href="#">
                        Translate to other Languages
                      </a>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <div class="input-field-languages">
                        <div class="d-flex align-items-center gap-3 flex-grow-1">
                          <button class="languages-btn-select">
                            Bangla
                          </button>
                          <input type="text" name="product-name" id="product-name"
                            placeholder="Sony মিররলেস ক্যামেরা a6400" />
                        </div>
                        <p class="text">82/100</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="category-select">
                  <div class="box">
                    <label class="category-select-label">Select Category <span>*</span></label>
                    <select class="wide selectize">
                      <option data-display="Select">Nothing</option>
                      <option value="1">Some option</option>
                      <option value="2">Another option</option>
                      <option value="4">Potato</option>
                    </select>
                  </div>
                </div>
              </form>


            </div>

            <div class="product-image-section">
              <div class="product-image-section-header">
                <h3 class="title">
                  <span>Product Image <span class="star">*</span></span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z"
                      stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>

                <a class="link" href="#">See Example</a>
              </div>

              <div class="product-image-section-body">
                <div class="left">
                  <figure class="product-image-inner">
                    <img class="image" src="./assets/images/product-image1.png" alt="product-img" />
                    <div class="close-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <g filter="url(#filter0_dd_1_14868)">
                          <circle cx="21" cy="20" r="15" fill="white" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.7224 14.738C15.8359 14.6247 15.9897 14.561 16.1501 14.561C16.3105 14.561 16.4644 14.6247 16.5778 14.738L20.9921 19.1523L25.4064 14.738C25.4619 14.6786 25.5287 14.6309 25.6029 14.5978C25.6772 14.5647 25.7573 14.5469 25.8386 14.5455C25.9198 14.5441 26.0006 14.559 26.0759 14.5895C26.1513 14.6199 26.2198 14.6652 26.2772 14.7227C26.3347 14.7802 26.38 14.8486 26.4105 14.924C26.4409 14.9993 26.4558 15.0801 26.4544 15.1613C26.453 15.2426 26.4352 15.3228 26.4021 15.397C26.369 15.4712 26.3213 15.5381 26.2619 15.5935L21.8476 20.0078L26.2619 24.4221C26.3213 24.4775 26.369 24.5443 26.4021 24.6185C26.4352 24.6928 26.453 24.7729 26.4544 24.8542C26.4558 24.9355 26.4409 25.0162 26.4105 25.0916C26.38 25.1669 26.3347 25.2354 26.2772 25.2929C26.2198 25.3503 26.1513 25.3956 26.0759 25.4261C26.0006 25.4565 25.9198 25.4715 25.8386 25.47C25.7573 25.4686 25.6772 25.4508 25.6029 25.4177C25.5287 25.3847 25.4619 25.337 25.4064 25.2775L20.9921 20.8632L16.5778 25.2775C16.4631 25.3844 16.3114 25.4426 16.1545 25.4398C15.9977 25.4371 15.8481 25.3736 15.7372 25.2627C15.6264 25.1518 15.5628 25.0022 15.5601 24.8454C15.5573 24.6886 15.6155 24.5368 15.7224 24.4221L20.1367 20.0078L15.7224 15.5935C15.6091 15.48 15.5454 15.3262 15.5454 15.1658C15.5454 15.0054 15.6091 14.8515 15.7224 14.738Z"
                          fill="#525468" />
                        <defs>
                          <filter id="filter0_dd_1_14868" x="0.545455" y="0.909091" width="40.9091" height="40.9091"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha"
                              result="effect1_dropShadow_1_14868" />
                            <feOffset dy="1.36364" />
                            <feGaussianBlur stdDeviation="2.04545" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_14868" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1.36364" />
                            <feGaussianBlur stdDeviation="1.36364" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_1_14868"
                              result="effect2_dropShadow_1_14868" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_14868" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </figure>

                  <figure class="product-image-inner">
                    <img class="image" src="./assets/images/product-image2.png" alt="product-img" />
                    <div class="close-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <g filter="url(#filter0_dd_1_14868)">
                          <circle cx="21" cy="20" r="15" fill="white" />
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.7224 14.738C15.8359 14.6247 15.9897 14.561 16.1501 14.561C16.3105 14.561 16.4644 14.6247 16.5778 14.738L20.9921 19.1523L25.4064 14.738C25.4619 14.6786 25.5287 14.6309 25.6029 14.5978C25.6772 14.5647 25.7573 14.5469 25.8386 14.5455C25.9198 14.5441 26.0006 14.559 26.0759 14.5895C26.1513 14.6199 26.2198 14.6652 26.2772 14.7227C26.3347 14.7802 26.38 14.8486 26.4105 14.924C26.4409 14.9993 26.4558 15.0801 26.4544 15.1613C26.453 15.2426 26.4352 15.3228 26.4021 15.397C26.369 15.4712 26.3213 15.5381 26.2619 15.5935L21.8476 20.0078L26.2619 24.4221C26.3213 24.4775 26.369 24.5443 26.4021 24.6185C26.4352 24.6928 26.453 24.7729 26.4544 24.8542C26.4558 24.9355 26.4409 25.0162 26.4105 25.0916C26.38 25.1669 26.3347 25.2354 26.2772 25.2929C26.2198 25.3503 26.1513 25.3956 26.0759 25.4261C26.0006 25.4565 25.9198 25.4715 25.8386 25.47C25.7573 25.4686 25.6772 25.4508 25.6029 25.4177C25.5287 25.3847 25.4619 25.337 25.4064 25.2775L20.9921 20.8632L16.5778 25.2775C16.4631 25.3844 16.3114 25.4426 16.1545 25.4398C15.9977 25.4371 15.8481 25.3736 15.7372 25.2627C15.6264 25.1518 15.5628 25.0022 15.5601 24.8454C15.5573 24.6886 15.6155 24.5368 15.7224 24.4221L20.1367 20.0078L15.7224 15.5935C15.6091 15.48 15.5454 15.3262 15.5454 15.1658C15.5454 15.0054 15.6091 14.8515 15.7224 14.738Z"
                          fill="#525468" />
                        <defs>
                          <filter id="filter0_dd_1_14868" x="0.545455" y="0.909091" width="40.9091" height="40.9091"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha"
                              result="effect1_dropShadow_1_14868" />
                            <feOffset dy="1.36364" />
                            <feGaussianBlur stdDeviation="2.04545" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_14868" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1.36364" />
                            <feGaussianBlur stdDeviation="1.36364" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_1_14868"
                              result="effect2_dropShadow_1_14868" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_14868" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </figure>

                  <label for="upplode-img1" class="product-image-inner-file">
                    <input type="file" id="upplode-img1" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </label>

                  <label for="upplode-img2" class="product-image-inner-file">
                    <input type="file" id="upplode-img2" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </label>

                  <label for="upplode-img3" class="product-image-inner-file">
                    <input type="file" id="upplode-img3" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </label>
                </div>

                <div class="right">
                  <ul>
                    <li>Image Ration </li>
                    <li>Max file size: 1MB.</li>
                    <li>Format: png, jpg</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="promotion-image-video-section">
              <div class="row g-4">
                <div class="col-xl-6">
                  <div class="promotion-image-inner">
                    <div class="promotion-image-header">
                      <h4>Promotion Image</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z"
                          stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>

                    <div class="row g-4 align-items-center justify-content-between">
                      <div class="col-md-8">
                        <label class="promotion-image-uploader" for="promotion-image">
                          <input class="file" type="file" name="" id="promotion-image" />
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                            fill="none">
                            <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875"
                              stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </label>
                      </div>
                      <div class="col-md-4">
                        <div class="right">
                          <ul>
                            <li>Image Ration </li>
                            <li>Max file size: 1MB.</li>
                            <li>Format: png, jpg</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6">
                  <div class="promotion-image-inner">
                    <div class="promotion-image-header">
                      <h4>Video</h4>
                    </div>

                    <div class="row g-4 align-items-center justify-content-between">
                      <div class="col-md-6">
                        <label class="promotion-image-uploader" for="promotion-image">
                          <input class="file" type="file" name="" id="promotion-image" />
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                            fill="none">
                            <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875"
                              stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </label>
                      </div>
                      <div class="col-md-6">
                        <div class="right">
                          <ul>
                            <li>Min size: 480x480 px. </li>
                            <li>Max video length: 60 seconds. </li>
                            <li>Max file size: 100MB.</li>
                            <li>Supported Format: mp4</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-description-section">
            <div class="main-description-content">

              <div class="main-description">
                <label for="" class="main-description-label">
                  Main Description <span>*</span>
                </label>
                <div class="editor-container">
                  <div id="toolbar">
                    <div class="toolbar-inner">
                      <div class="d-flex align-items-center">
                        <button class="ql-undo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path
                              d="M3.88432 4.66572L5.57467 6.35608L4.63186 7.29889L1.33203 3.99905L4.63186 0.699219L5.57467 1.64203L3.88432 3.33239H8.66536C11.6109 3.33239 13.9987 5.7202 13.9987 8.66575C13.9987 11.6112 11.6109 13.9991 8.66536 13.9991H2.66536V12.6658H8.66536C10.8745 12.6658 12.6654 10.8749 12.6654 8.66575C12.6654 6.45658 10.8745 4.66572 8.66536 4.66572H3.88432Z"
                              fill="#0A0A0A" />
                          </svg>
                        </button>
                        <button class="ql-redo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                            fill="none">
                            <path
                              d="M12.1144 4.66572H7.33333C5.12419 4.66572 3.33333 6.45658 3.33333 8.66575C3.33333 10.8749 5.12419 12.6658 7.33333 12.6658H13.3333V13.9991H7.33333C4.38781 13.9991 2 11.6112 2 8.66575C2 5.7202 4.38781 3.33239 7.33333 3.33239H12.1144L10.424 1.64203L11.3669 0.699219L14.6667 3.99905L11.3669 7.29889L10.424 6.35608L12.1144 4.66572Z"
                              fill="#0A0A0A" />
                          </svg>
                        </button>
                      </div>
                      <select class="ql-font"></select>
                      <select class="ql-size"></select>

                      <div class="d-flex align-items-center">
                        <button class="ql-bold"></button>
                        <button class="ql-italic"></button>
                        <button class="ql-underline"></button>
                      </div>
                      <div class="d-flex align-items-center">
                        <button class="ql-list" value="ordered"></button>
                        <button class="ql-list" value="bullet"></button>
                        <button class="ql-align" value=""></button>
                        <button class="ql-align" value="center"></button>
                        <button class="ql-align" value="right"></button>
                        <button class="ql-blockquote"></button>
                      </div>
                      <button class="ql-strike"></button>
                      <button class="ql-clean"></button>
                    </div>
                  </div>
                  <div id="editor"></div>
                </div>
              </div>

              <div class="highlights">
                <label class="highlights-label" for="highlights">Highlights <span>*</span></label>

                <textarea class="highlights-input" name="" id="highlights" cols="30" rows="10"
                  placeholder="Write here"></textarea>
              </div>

              <div class="highlights">
                <label class="highlights-label" for="box">What's in the box <span>*</span></label>

                <input class="box-input" type="text" name="" id="box"/>
              </div>
            </div>
          </div>
        </div>

        <div class="add-product-footer mt-5">
          <div class="d-flex align-items-center gap-3">
            <a href="./add-Product4.html" class="save-draft-btn active">
              Save Draft
            </a>

            <Link href="/add-product-6" class="confirm-btn active">
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page