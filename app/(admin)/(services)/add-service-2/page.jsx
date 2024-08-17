
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div id="content">
      <div class="inner-content">
        <section class="page-top-section">
          <div class="page-top-section-inner">
            <form class="search-form">
              <label for="search-svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </label>

              <input class="page-search-input" type="text" name="" id="search-input" placeholder="Search" />
            </form>

            <Link href="./notification.html" class="notification-svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25022 9C5.25022 7.20979 5.96138 5.4929 7.22725 4.22703C8.49312 2.96116 10.21 2.25 12.0002 2.25C13.7904 2.25 15.5073 2.96116 16.7732 4.22703C18.0391 5.4929 18.7502 7.20979 18.7502 9V9.75C18.7502 11.873 19.5502 13.807 20.8682 15.27C20.9503 15.361 21.0089 15.4707 21.0388 15.5896C21.0686 15.7084 21.0689 15.8328 21.0396 15.9518C21.0103 16.0708 20.9523 16.1808 20.8707 16.2722C20.789 16.3636 20.6862 16.4335 20.5712 16.476C19.0272 17.046 17.4112 17.466 15.7402 17.719C15.7778 18.2331 15.7091 18.7495 15.5381 19.2359C15.3672 19.7222 15.0979 20.1681 14.7469 20.5457C14.396 20.9233 13.9709 21.2245 13.4983 21.4304C13.0257 21.6364 12.5157 21.7427 12.0002 21.7427C11.4847 21.7427 10.9747 21.6364 10.5021 21.4304C10.0295 21.2245 9.60448 20.9233 9.25351 20.5457C8.90254 20.1681 8.63319 19.7222 8.46229 19.2359C8.29138 18.7495 8.22259 18.2331 8.26022 17.719C6.61187 17.4692 4.99321 17.0524 3.42922 16.475C3.31435 16.4326 3.21161 16.3627 3.12998 16.2715C3.04834 16.1802 2.99029 16.0703 2.9609 15.9515C2.9315 15.8326 2.93166 15.7084 2.96135 15.5896C2.99103 15.4708 3.04936 15.3611 3.13122 15.27C4.49802 13.7567 5.2533 11.7892 5.25022 9.75V9ZM9.75222 17.9C9.73942 18.2032 9.7881 18.5058 9.8953 18.7897C10.0025 19.0736 10.166 19.3329 10.376 19.5519C10.586 19.771 10.8382 19.9453 11.1173 20.0644C11.3964 20.1835 11.6968 20.2448 12.0002 20.2448C12.3037 20.2448 12.604 20.1835 12.8831 20.0644C13.1622 19.9453 13.4144 19.771 13.6244 19.5519C13.8344 19.3329 13.9979 19.0736 14.1051 18.7897C14.2123 18.5058 14.261 18.2032 14.2482 17.9C12.7526 18.0347 11.2479 18.0347 9.75222 17.9Z" fill="#7B7F95"></path>
              </svg>
            </Link>
          </div>
        </section>
      </div>
      <div class="d-flex flex-column h-100">
        <div class="flex-grow-1">
          <div class="page-header">
            <div class="d-flex flex-column gap-1">
              <h1 class="page-title">
                Add Service
              </h1>
              <p class="page-text">
                Seamlessly Add and Manage Your Services
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
                    Price, Stock &amp; Variants
                  </h4>
                </div>

                <div class="add-product-header-item">
                  <div class="number">
                    4
                  </div>

                  <h4 class="text">
                    Shipping &amp; Warranty
                  </h4>
                </div>
              </div>

              <div class="inner-bar-chart">
                <div class="bar-chart">
                  <div class="bar" style={{ width: '100%' }}>
                  <span style={{ width: '20%' }}></span>
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
                  <div class="row">
                    <div class="col-9">
                      <div class="input-field">
                        <input type="text" name="product-name" id="product-name" placeholder="Ex. Sony a6400 mirrorless camera" />
                        <p class="text">82/100</p>
                      </div>
                    </div>
                    <div class="col-3 align-self-center">
                      <Link class="languages-btn" href="#">
                        Translate to other Languages
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="category-select">
                  <div class="box">
                    <label class="category-select-label">Select Category <span>*</span></label>
                    <select class="wide selectize"  style={{ opacity: 0, width: '0px', padding: '0px', height: '0px' }}>
                      <option data-display="Select">Nothing</option>
                      <option value="1">Some option</option>
                      <option value="2">Another option</option>
                      <option value="4">Potato</option>
                    </select><div class="nice-select wide selectize" tabindex="0"><span class="current">Nothing</span><div class="nice-select-dropdown"><ul class="list"><li data-value="Nothing" class="option selected null">Nothing</li><li data-value="1" class="option null">Some option</li><li data-value="2" class="option null">Another option</li><li data-value="4" class="option null">Potato</li></ul></div></div>
                  </div>
                  {/* 
                <!-- <div class="category-suggestions">
                  <h5 class="category-suggestions-title">Category Suggestions</h5> --> */}

                  {/* <!-- Checkboxes --> */}
                  {/* <!-- <div class="d-flex flex-column gap-2">
                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox1" />
                      <label for="checkbox1" tabindex="1">Cameras>Mirrorless</label>
                    </div>
                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox2" />
                      <label for="checkbox2" tabindex="2">Cameras>DSLR>Body Only</label>
                    </div>

                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox3" />
                      <label for="checkbox3" tabindex="3">Cameras>DSLR>Sets</label>
                    </div>

                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox4" />
                      <label for="checkbox4" tabindex="4">Cameras>Video & Action Camcorder>360 Cameras</label>
                    </div>

                    <div class="form-checkbox">
                      <input class="checkbox" type="checkbox" id="checkbox5" />
                      <label for="checkbox5" tabindex="5">Cameras>Point & Shoot>Underwater Digital Cameras</label>
                    </div>
                  </div> --> */}

                  {/* <!-- </div> --> */}


                </div>
              </form>
            </div>

            <div class="product-image-section">
              <div class="product-image-section-header">
                <h3 class="title">
                  <span>Service Image <span class="star">*</span></span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </h3>

                <Link class="link" href="#">See Example</Link>
              </div>

              <div class="product-image-section-body">
                <div class="left">
                  <figure class="product-image-inner">
                    <img class="image" src="/assets/images/service-image1.png" alt="product-img" />
                    <div class="close-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <g filter="url(#filter0_dd_1_14868)">
                          <circle cx="21" cy="20" r="15" fill="white"></circle>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7224 14.738C15.8359 14.6247 15.9897 14.561 16.1501 14.561C16.3105 14.561 16.4644 14.6247 16.5778 14.738L20.9921 19.1523L25.4064 14.738C25.4619 14.6786 25.5287 14.6309 25.6029 14.5978C25.6772 14.5647 25.7573 14.5469 25.8386 14.5455C25.9198 14.5441 26.0006 14.559 26.0759 14.5895C26.1513 14.6199 26.2198 14.6652 26.2772 14.7227C26.3347 14.7802 26.38 14.8486 26.4105 14.924C26.4409 14.9993 26.4558 15.0801 26.4544 15.1613C26.453 15.2426 26.4352 15.3228 26.4021 15.397C26.369 15.4712 26.3213 15.5381 26.2619 15.5935L21.8476 20.0078L26.2619 24.4221C26.3213 24.4775 26.369 24.5443 26.4021 24.6185C26.4352 24.6928 26.453 24.7729 26.4544 24.8542C26.4558 24.9355 26.4409 25.0162 26.4105 25.0916C26.38 25.1669 26.3347 25.2354 26.2772 25.2929C26.2198 25.3503 26.1513 25.3956 26.0759 25.4261C26.0006 25.4565 25.9198 25.4715 25.8386 25.47C25.7573 25.4686 25.6772 25.4508 25.6029 25.4177C25.5287 25.3847 25.4619 25.337 25.4064 25.2775L20.9921 20.8632L16.5778 25.2775C16.4631 25.3844 16.3114 25.4426 16.1545 25.4398C15.9977 25.4371 15.8481 25.3736 15.7372 25.2627C15.6264 25.1518 15.5628 25.0022 15.5601 24.8454C15.5573 24.6886 15.6155 24.5368 15.7224 24.4221L20.1367 20.0078L15.7224 15.5935C15.6091 15.48 15.5454 15.3262 15.5454 15.1658C15.5454 15.0054 15.6091 14.8515 15.7224 14.738Z" fill="#525468"></path>
                        <defs>
                          <filter id="filter0_dd_1_14868" x="0.545455" y="0.909091" width="40.9091" height="40.9091" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_14868"></feMorphology>
                            <feOffset dy="1.36364"></feOffset>
                            <feGaussianBlur stdDeviation="2.04545"></feGaussianBlur>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_14868"></feBlend>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feOffset dy="1.36364"></feOffset>
                            <feGaussianBlur stdDeviation="1.36364"></feGaussianBlur>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
                            <feBlend mode="normal" in2="effect1_dropShadow_1_14868" result="effect2_dropShadow_1_14868"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_14868" result="shape"></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </figure>

                  <figure class="product-image-inner">
                    <img class="image" src="/assets/images/service-image2.png" alt="product-img" />
                    <div class="close-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <g filter="url(#filter0_dd_1_14868)">
                          <circle cx="21" cy="20" r="15" fill="white"></circle>
                        </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7224 14.738C15.8359 14.6247 15.9897 14.561 16.1501 14.561C16.3105 14.561 16.4644 14.6247 16.5778 14.738L20.9921 19.1523L25.4064 14.738C25.4619 14.6786 25.5287 14.6309 25.6029 14.5978C25.6772 14.5647 25.7573 14.5469 25.8386 14.5455C25.9198 14.5441 26.0006 14.559 26.0759 14.5895C26.1513 14.6199 26.2198 14.6652 26.2772 14.7227C26.3347 14.7802 26.38 14.8486 26.4105 14.924C26.4409 14.9993 26.4558 15.0801 26.4544 15.1613C26.453 15.2426 26.4352 15.3228 26.4021 15.397C26.369 15.4712 26.3213 15.5381 26.2619 15.5935L21.8476 20.0078L26.2619 24.4221C26.3213 24.4775 26.369 24.5443 26.4021 24.6185C26.4352 24.6928 26.453 24.7729 26.4544 24.8542C26.4558 24.9355 26.4409 25.0162 26.4105 25.0916C26.38 25.1669 26.3347 25.2354 26.2772 25.2929C26.2198 25.3503 26.1513 25.3956 26.0759 25.4261C26.0006 25.4565 25.9198 25.4715 25.8386 25.47C25.7573 25.4686 25.6772 25.4508 25.6029 25.4177C25.5287 25.3847 25.4619 25.337 25.4064 25.2775L20.9921 20.8632L16.5778 25.2775C16.4631 25.3844 16.3114 25.4426 16.1545 25.4398C15.9977 25.4371 15.8481 25.3736 15.7372 25.2627C15.6264 25.1518 15.5628 25.0022 15.5601 24.8454C15.5573 24.6886 15.6155 24.5368 15.7224 24.4221L20.1367 20.0078L15.7224 15.5935C15.6091 15.48 15.5454 15.3262 15.5454 15.1658C15.5454 15.0054 15.6091 14.8515 15.7224 14.738Z" fill="#525468"></path>
                        <defs>
                          <filter id="filter0_dd_1_14868" x="0.545455" y="0.909091" width="40.9091" height="40.9091" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_14868"></feMorphology>
                            <feOffset dy="1.36364"></feOffset>
                            <feGaussianBlur stdDeviation="2.04545"></feGaussianBlur>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_14868"></feBlend>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                            <feOffset dy="1.36364"></feOffset>
                            <feGaussianBlur stdDeviation="1.36364"></feGaussianBlur>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
                            <feBlend mode="normal" in2="effect1_dropShadow_1_14868" result="effect2_dropShadow_1_14868"></feBlend>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_14868" result="shape"></feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </figure>

                  <label for="upplode-img1" class="product-image-inner-file">
                    <input type="file" id="upplode-img1" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </label>

                  <label for="upplode-img2" class="product-image-inner-file">
                    <input type="file" id="upplode-img2" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </label>

                  <label for="upplode-img3" class="product-image-inner-file">
                    <input type="file" id="upplode-img3" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"></path>
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
                        <path d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </div>

                    <div class="row g-4 align-items-center justify-content-between">
                      <div class="col-md-8">
                        <label class="promotion-image-uploader" for="promotion-image">
                          <input class="file" type="file" name="" id="promotion-image" />
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"></path>
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
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M15 5.625V24.375M24.375 15H5.625" stroke="#0D9488" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"></path>
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
                  <div id="toolbar" class="ql-toolbar ql-snow">
                    <div class="toolbar-inner">
                      <div class="d-flex align-items-center">
                        <button class="ql-undo" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.88432 4.66572L5.57467 6.35608L4.63186 7.29889L1.33203 3.99905L4.63186 0.699219L5.57467 1.64203L3.88432 3.33239H8.66536C11.6109 3.33239 13.9987 5.7202 13.9987 8.66575C13.9987 11.6112 11.6109 13.9991 8.66536 13.9991H2.66536V12.6658H8.66536C10.8745 12.6658 12.6654 10.8749 12.6654 8.66575C12.6654 6.45658 10.8745 4.66572 8.66536 4.66572H3.88432Z" fill="#0A0A0A"></path>
                          </svg>
                        </button>
                        <button class="ql-redo" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.1144 4.66572H7.33333C5.12419 4.66572 3.33333 6.45658 3.33333 8.66575C3.33333 10.8749 5.12419 12.6658 7.33333 12.6658H13.3333V13.9991H7.33333C4.38781 13.9991 2 11.6112 2 8.66575C2 5.7202 4.38781 3.33239 7.33333 3.33239H12.1144L10.424 1.64203L11.3669 0.699219L14.6667 3.99905L11.3669 7.29889L10.424 6.35608L12.1144 4.66572Z" fill="#0A0A0A"></path>
                          </svg>
                        </button>
                      </div>
                      <span class="ql-font ql-picker"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-0"><svg viewBox="0 0 18 18"> <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon> <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon> </svg></span><span class="ql-picker-options" aria-hidden="true" tabindex="-1" id="ql-picker-options-0"><span tabindex="0" role="button" class="ql-picker-item ql-selected"></span><span tabindex="0" role="button" class="ql-picker-item" data-value="serif"></span><span tabindex="0" role="button" class="ql-picker-item" data-value="monospace"></span></span></span><select class="ql-font" style={{display: 'none'}}><option selected="selected"></option><option value="serif"></option><option value="monospace"></option></select>
                      <span class="ql-size ql-picker"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-1"><svg viewBox="0 0 18 18"> <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon> <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon> </svg></span><span class="ql-picker-options" aria-hidden="true" tabindex="-1" id="ql-picker-options-1"><span tabindex="0" role="button" class="ql-picker-item" data-value="small"></span><span tabindex="0" role="button" class="ql-picker-item ql-selected"></span><span tabindex="0" role="button" class="ql-picker-item" data-value="large"></span><span tabindex="0" role="button" class="ql-picker-item" data-value="huge"></span></span></span><select class="ql-size" style={{display: 'none'}}><option value="small"></option><option selected="selected"></option><option value="large"></option><option value="huge"></option></select>

                      <div class="d-flex align-items-center">
                        <button class="ql-bold" type="button"><svg viewBox="0 0 18 18"> <path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path> <path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path> </svg></button>
                        <button class="ql-italic" type="button"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line> <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line> <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line> </svg></button>
                        <button class="ql-underline" type="button"><svg viewBox="0 0 18 18"> <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path> <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect> </svg></button>
                      </div>
                      <div class="d-flex align-items-center">
                        <button class="ql-list" value="ordered" type="button"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line> <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line> <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line> <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path> <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path> <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path> </svg></button>
                        <button class="ql-list" value="bullet" type="button"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line> <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line> <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line> <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line> <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line> </svg></button>
                        <button class="ql-align" value="" type="button"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line> <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line> <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line> </svg></button>
                        <button class="ql-align" value="center" type="button"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line> <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line> <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line> </svg></button>
                        <button class="ql-align" value="right" type="button"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line> <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line> <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line> </svg></button>
                        <button class="ql-blockquote" type="button"><svg viewBox="0 0 18 18"> <rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"></rect> <rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"></rect> <path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"></path> <path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"></path> </svg></button>
                      </div>
                      <button class="ql-strike" type="button"><svg viewBox="0 0 18 18"> <line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"></line> <path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"></path> <path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"></path> </svg></button>
                      <button class="ql-clean" type="button"><svg class="" viewBox="0 0 18 18"> <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line> <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line> <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line> <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line> <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect> </svg></button>
                    </div>
                  </div>
                  <div id="editor" class="ql-container ql-snow">
                    <div class="ql-editor ql-blank" data-gramm="false" contenteditable="true" data-placeholder="Write here">
                      {/* <p><br></p> */}
                      <br />
                    </div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden">
                      <Link class="ql-preview" target="_blank" href="about:blank"></Link>
                      <input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" />
                        <Link class="ql-action" href=""></Link><Link class="ql-remove" href=""></Link>
                        </div>
                        </div>
                </div>
              </div>

              {/* <!-- <div class="highlights">
              <label class="highlights-label" for="highlights">Highlights <span>*</span></label>

              <textarea class="highlights-input" name="" id="highlights" cols="30" rows="10"
                placeholder="Write here"></textarea>
            </div>

            <div class="highlights">
              <label class="highlights-label" for="box">What's in the box <span>*</span></label>

              <input class="box-input" type="text" name="" id="box" />
            </div> --> */}
            </div>
          </div>

          <div class="price-section">
            <div class="inner-price-section">
              <div class="row">
                <div class="col-3">
                  <div class="inner-input">
                    <label class="label" for="">Price <span>*</span></label>
                    <input class="input" type="text" name="" id="" placeholder="৳" />
                  </div>
                </div>
                <div class="col-3">
                  <div class="inner-input">
                    <label class="label" for="">Special Price
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z" stroke="#0D9488" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </label>
                    <input class="input" type="text" name="" id="" placeholder="৳" />
                  </div>
                </div>

                <div class="col-3">
                  <div class="inner-input">
                    <label class="label" for="">Discount
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z" stroke="#0D9488" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </label>
                    <input class="input" type="text" name="" id="" placeholder="" />
                  </div>
                </div>

                <div class="col-3">
                  <div class="inner-input">
                    <p class="label mb-2" for="">Availability
                    </p>

                    <label class="switch mt-1">
                      <span class="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                      <input type="checkbox" checked="" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="add-product-footer">
          <div class="d-flex align-items-center gap-3">
            <Link href="#" class="save-draft-btn active">
              Save Draft
            </Link>

            <Link href="/service-list" class="confirm-btn active">
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
