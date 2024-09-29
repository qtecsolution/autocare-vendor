import React from 'react'

function EmptyBookingPage() {
  return (
    <div class="order-management-body-main-content">
      <div class="main-content-inner">
        <img src="/assets/images/no-return-item.svg" alt="No Order Found img" />
        <h3 class="title">
          No Booking Found
        </h3>
        <p class="details">
          You don't have any booking yet. All of your booking will show here.
        </p>
      </div>
    </div>
  )
}

export default EmptyBookingPage