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

                <div class="">
                  <button class="setMultipleLanguage-btn">
                    Set Multiple Language
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#030D18" stroke-width="1.16667"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="category-select">
                <div class="box">
                  <label class="category-select-label">Select Category <span>*</span></label>
                  <select class="wide" id="seachable-select">
                    <option data-display="Select">Nothing</option>
                    <option value="1">Some option</option>
                    <option value="2">Another option</option>
                    <option value="3" disabled>A disabled option</option>
                    <option value="4">Potato</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="add-product-footer">
        <div class="d-flex align-items-center gap-3">
          <Link href="./add-Product2.html" class="save-draft-btn active">
            Save Draft
          </Link>

          <Link href="/add-product-4" class="confirm-btn active">
            Confirm
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page