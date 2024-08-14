import React from 'react'

function page() {
  return (
    <div id="content">
      <div className="d-flex flex-column h-100">
        <div className="flex-grow-1">
          <div className="page-header">
            <div className="d-flex flex-column gap-1">
              <h1 className="page-title">
                Add Product
              </h1>
              <p className="page-text">
                Seamlessly Add and Manage Your Products
              </p>
            </div>
          </div>

          <div className="add-product-content">
            <div className="add-product-header">
              <div className="add-product-header-inner">
                <div className="add-product-header-item">
                  <div className="number active">
                    1
                  </div>

                  <h4 className="text active">
                    Basic Info
                  </h4>
                </div>

                <div className="add-product-header-item">
                  <div className="number">
                    2
                  </div>

                  <h4 className="text">
                    Description
                  </h4>
                </div>

                <div className="add-product-header-item">
                  <div className="number">
                    3
                  </div>

                  <h4 className="text">
                    Price, Stock & Variants
                  </h4>
                </div>

                <div className="add-product-header-item">
                  <div className="number">
                    4
                  </div>

                  <h4 className="text">
                    Shipping & Warranty
                  </h4>
                </div>
              </div>

              <div className="inner-bar-chart">
                <div className="bar-chart">
                  {/* <div className="bar" style="width: 100%;">
                    <span style="width: 0%;"></span> */}
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <p className="text">0%</p>
              </div>
            </div>

            <div className="add-product-body">
              <form className="d-flex flex-column gap-4">
                <div className="d-flex flex-column gap-2">
                  <div className="input-field-name">
                    <label for="product-name">Product Name <span>*</span></label>
                  </div>
                  <div className="row">
                    <div className="col-9">
                      <div className="input-field">
                        <input type="text" name="product-name" id="product-name"
                          placeholder="Ex. Sony a6400 mirrorless camera" />
                        <p className="text">82/100</p>
                      </div>
                    </div>
                    <div className="col-3 align-self-center">
                      <a className="languages-btn" href="./add-Product2.html">
                        Translate to other Languages
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page