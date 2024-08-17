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
                  <div class="row">
                    <div class="col-9">
                      <div class="input-field">
                        <input type="text" name="product-name" id="product-name"
                          placeholder="Ex. Sony a6400 mirrorless camera" />
                        <p class="text">82/100</p>
                      </div>
                    </div>
                    <div class="col-3 align-self-center">
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

                  <div class="category-suggestions">
                    <h5 class="category-suggestions-title">Category Suggestions</h5>

                    {/* <!-- Checkboxes --> */}
                    <div class="d-flex flex-column gap-2">
                      <div class="form-checkbox">
                        <input class="checkbox" type="checkbox" id="checkbox1"/>
                        <label for="checkbox1" tabindex="1">Cameras &gt; Mirrorless</label>
                      </div>
                      <div class="form-checkbox">
                        <input class="checkbox" type="checkbox" id="checkbox2"/>
                        <label for="checkbox2" tabindex="2">Cameras&gt;DSLR&gt;Body Only</label>
                      </div>

                      <div class="form-checkbox">
                        <input class="checkbox" type="checkbox" id="checkbox3"/>
                        <label for="checkbox3" tabindex="3">Cameras&gt;DSLR&gt;Sets</label>
                      </div>

                      <div class="form-checkbox">
                        <input class="checkbox" type="checkbox" id="checkbox4"/>
                        <label for="checkbox4" tabindex="4">Cameras&gt;Video & Action Camcorder&gt;360 Cameras</label>
                      </div>

                      <div class="form-checkbox">
                        <input class="checkbox" type="checkbox" id="checkbox5"/>
                        <label for="checkbox5" tabindex="5">Cameras&gt;Point & Shoot&gt;Underwater Digital Cameras</label>
                      </div>
                    </div>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="add-product-footer">
          <div class="d-flex align-items-center gap-3">
            <Link href="#" class="save-draft-btn active">
              Save Draft
            </Link>

            <Link href="/add-product-3" class="confirm-btn active">
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page