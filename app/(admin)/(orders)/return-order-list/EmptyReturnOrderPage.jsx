import React from 'react'

function EmptyReturnOrderPage() {
  return (
    <div className="order-management-body-main-content">
      <div className="main-content-inner">
        <img src="/assets/images/no-return-item.svg" alt="No Order Found img" />
        <h3 className="title">
          No Return Order Items
        </h3>
        <p className="details">
          You don't have any return order yet. All of your return order will show here.
        </p>
      </div>
    </div>
  )
}

export default EmptyReturnOrderPage