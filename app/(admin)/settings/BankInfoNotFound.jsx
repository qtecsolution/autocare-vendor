import React from 'react'

function BankInfoNotFound({setStep}) {
  return (
    <div className="profile-section">
      <div className="profile-section-inner">
        <div className="row g-4">
          <div className="col-12">
            <div
              className="d-flex flex-column justify-content-center align-items-center gap-3 bankInformation-notFound">
              <figure className="notfound-img">
                <img src="/assets/images/bankInformation.svg" alt="" />
              </figure>
              <h2 className="title">Nothing Found</h2>
              <p className="paragraph">
                You don’t have any billing method yet. Please add a bank account to get payment.
              </p>

              <button className="new-campaign-btn px-5" onClick={()=>setStep(2)}>
                <span>
                  + Add Bank
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankInfoNotFound