import React from 'react'

function EmptyServiceList() {
  return (
    <div className="manage-all-product-section-inner-empty-body">
      <figure>
        <img src="/assets/images/No-Services-Found.svg" alt="image" />
      </figure>
      <h1 className="title">No Services Found</h1>
      <p className="details">You didn’t upload any service yet. All of your services will show here</p>
    </div>
  )
}

export default EmptyServiceList