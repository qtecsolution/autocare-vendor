import React from 'react'

function EmptyOrderList() {
  return (
    <div className="order-management-body-main-content">
      <div className="main-content-inner">
        <img src="/assets/images/no-order-found.svg" alt="No Order Found img" />
        <h3 className="title">
          No Order Found
        </h3>
        <p className="details">
          You didn’t get any order yet. All your order will show us here in the list.
        </p>
      </div>
    </div>
  )
}

export default EmptyOrderList