import React from 'react'

function Progress4() {
  return (
    <div className="">
      <div className="" style={{ zIndex: "0", position: 'relative' }}>
        <ul className="progressbar text-center">
          <li className="active step0">
            <div className="step-content">
              <h3 className="heading">
                Order Placed
              </h3>
            </div>
          </li>
          <li className="active step0">
            <div className="step-content">
              <h3 className="heading">
                Processing
              </h3>
            </div>
          </li>
          <li className="active step0">
            <div className="step-content">
              <h3 className="heading">
                Payment
              </h3>
            </div>
          </li>
          <li className="active step0">
            <div className="step-content">
              <button className="primary-button py-2">
                Confirmed
              </button>
            </div>
          </li>
          <li className=" step0">
            <div className="step-content">
              <h3 className="heading">
                Shipped
              </h3>

            </div>
          </li>
          <li className=" step0">
            <div className="step-content">
              <h3 className="heading">
                Delivered
              </h3>

            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Progress4