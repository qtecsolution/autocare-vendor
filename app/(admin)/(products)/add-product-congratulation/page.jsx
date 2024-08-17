import Link from 'next/link'
import React from 'react'
function page() {
  return (
    <div id="content">
    <div class="d-flex flex-column h-100">
      <div class="flex-grow-1 d-flex align-items-center justify-content-center">
        <div class="congratulation-body">
          <figure class="img">
            <img src="./assets/images/Congratulation.svg" alt=""/>
          </figure>

          <h2 class="title">
            Congratulation!
          </h2>
          <p class="details">
            Your product has been uploaded for Review. After the authentication we will update this to your store.
          </p>

          <div class="buttons">
            <Link href="/product-list" class="manage-btn">
              Manage Products
            </Link>

            <Link  href="/product-add" class="add-btn">
              Add New Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page