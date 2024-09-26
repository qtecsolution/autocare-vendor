import React from 'react'

function EmptyProductList() {
  return (
    <div className="manage-all-product-section-inner-empty-body">
      <figure>
        <img src="/assets/images/no-products.svg" alt="image" />
      </figure>
      <h1 className="title">No Product Found</h1>
      <p className="details">You didn’t upload any product yet. All of your products will show here</p>
    </div>
  )
}

export default EmptyProductList