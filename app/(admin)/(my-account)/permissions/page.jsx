import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section class="permissions-section">
    <div class="container">
      <div class="permissions-section-inner">
        <div class="permissions-section-inner-header">
          <h2 class="title">Permissions</h2>
          <div class="d-flex gap-4 flex-column flex-sm-row align-items-sm-center">
            <button class="product-btn active">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4.35289 1.875C3.93873 1.875 3.54123 2.04 3.24873 2.33333L2.16539 3.415C1.60558 3.97377 1.27848 4.72404 1.25007 5.51448C1.22165 6.30493 1.49403 7.07675 2.01226 7.67428C2.5305 8.27181 3.25605 8.65059 4.04257 8.73424C4.82909 8.81788 5.61807 8.60017 6.25039 8.125C6.77289 8.51667 7.42206 8.75 8.12539 8.75C8.82873 8.75 9.47873 8.51667 10.0004 8.125C10.5221 8.51667 11.1721 8.75 11.8754 8.75C12.5787 8.75 13.2279 8.51667 13.7504 8.125C14.3827 8.60017 15.1717 8.81788 15.9582 8.73424C16.7447 8.65059 17.4703 8.27181 17.9885 7.67428C18.5068 7.07675 18.7791 6.30493 18.7507 5.51448C18.7223 4.72404 18.3952 3.97377 17.8354 3.415L16.7521 2.3325C16.4592 2.0397 16.062 1.87514 15.6479 1.875H4.35289Z"
                  fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.5 16.8748V9.57896C3.68333 10.1406 5.06667 10.1398 6.25 9.57896C6.83594 9.85688 7.47649 10.0007 8.125 9.99979C8.795 9.99979 9.43167 9.84812 10 9.57812C10.5859 9.85634 11.2264 10.0004 11.875 9.99979C12.545 9.99979 13.1808 9.84812 13.75 9.57812C14.9333 10.1398 16.3167 10.1406 17.5 9.57896V16.8748H18.125C18.2908 16.8748 18.4497 16.9406 18.5669 17.0578C18.6842 17.1751 18.75 17.334 18.75 17.4998C18.75 17.6656 18.6842 17.8245 18.5669 17.9417C18.4497 18.0589 18.2908 18.1248 18.125 18.1248H1.875C1.70924 18.1248 1.55027 18.0589 1.43306 17.9417C1.31585 17.8245 1.25 17.6656 1.25 17.4998C1.25 17.334 1.31585 17.1751 1.43306 17.0578C1.55027 16.9406 1.70924 16.8748 1.875 16.8748H2.5ZM5 11.8748C5 11.709 5.06585 11.5501 5.18306 11.4328C5.30027 11.3156 5.45924 11.2498 5.625 11.2498H8.125C8.29076 11.2498 8.44973 11.3156 8.56694 11.4328C8.68415 11.5501 8.75 11.709 8.75 11.8748V14.3748C8.75 14.5406 8.68415 14.6995 8.56694 14.8167C8.44973 14.9339 8.29076 14.9998 8.125 14.9998H5.625C5.45924 14.9998 5.30027 14.9339 5.18306 14.8167C5.06585 14.6995 5 14.5406 5 14.3748V11.8748ZM11.875 11.2498C11.7092 11.2498 11.5503 11.3156 11.4331 11.4328C11.3158 11.5501 11.25 11.709 11.25 11.8748V16.2498C11.25 16.5948 11.53 16.8748 11.875 16.8748H14.375C14.5408 16.8748 14.6997 16.8089 14.8169 16.6917C14.9342 16.5745 15 16.4156 15 16.2498V11.8748C15 11.709 14.9342 11.5501 14.8169 11.4328C14.6997 11.3156 14.5408 11.2498 14.375 11.2498H11.875Z"
                  fill="white" />
              </svg>

              <span>
                Product
              </span>
            </button>

            <button class="product-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.4996 5.62492C10.4994 4.94159 10.6593 4.26771 10.9664 3.6573C11.2736 3.04688 11.7194 2.5169 12.2683 2.10983C12.8171 1.70275 13.4537 1.42989 14.127 1.31313C14.8003 1.19636 15.4915 1.23893 16.1454 1.43742C16.2487 1.46873 16.3422 1.52628 16.4167 1.60446C16.4912 1.68264 16.5441 1.77879 16.5704 1.88353C16.5967 1.98827 16.5954 2.09803 16.5666 2.20212C16.5378 2.3062 16.4826 2.40105 16.4062 2.47742L13.6396 5.24325C13.6921 5.63909 13.8696 6.02159 14.1737 6.32575C14.4779 6.62992 14.8604 6.80742 15.2571 6.85909L18.0221 4.09325C18.0984 4.01691 18.1933 3.96166 18.2974 3.93289C18.4014 3.90411 18.5112 3.9028 18.616 3.92907C18.7207 3.95534 18.8168 4.0083 18.895 4.08278C18.9732 4.15727 19.0308 4.25074 19.0621 4.35409C19.2697 5.03813 19.3066 5.76265 19.1695 6.46425C19.0324 7.16585 18.7254 7.82317 18.2755 8.37869C17.8256 8.93421 17.2463 9.37101 16.5885 9.65087C15.9307 9.93074 15.2143 10.0451 14.5021 9.98409C13.6537 9.91242 12.9437 10.0674 12.5779 10.5124L6.61956 17.7499C6.3756 18.0447 6.07276 18.2853 5.73043 18.4563C5.38811 18.6273 5.01385 18.725 4.63161 18.743C4.24938 18.761 3.8676 18.699 3.51071 18.5609C3.15382 18.4229 2.82969 18.2118 2.55908 17.9413C2.28847 17.6707 2.07734 17.3466 1.93921 16.9898C1.80108 16.6329 1.73899 16.2512 1.75693 15.8689C1.77486 15.4867 1.87241 15.1124 2.04334 14.77C2.21427 14.4277 2.45481 14.1248 2.74956 13.8808L9.98623 7.92159C10.4304 7.55492 10.5862 6.84575 10.5146 5.99742C10.5044 5.87352 10.4994 5.74924 10.4996 5.62492ZM3.9304 15.9374C3.9304 15.7717 3.99625 15.6127 4.11346 15.4955C4.23067 15.3783 4.38964 15.3124 4.5554 15.3124H4.56206C4.72782 15.3124 4.8868 15.3783 5.00401 15.4955C5.12122 15.6127 5.18706 15.7717 5.18706 15.9374V15.9441C5.18706 16.1098 5.12122 16.2688 5.00401 16.386C4.8868 16.5032 4.72782 16.5691 4.56206 16.5691H4.5554C4.38964 16.5691 4.23067 16.5032 4.11346 16.386C3.99625 16.2688 3.9304 16.1098 3.9304 15.9441V15.9374Z"
                  fill="#6B7280" />
                <path
                  d="M8.89644 7.19963L7.06227 5.3663V4.0613C7.06227 3.95339 7.03433 3.84733 6.98117 3.75343C6.92801 3.65953 6.85145 3.581 6.75894 3.52546L3.63394 1.65046C3.51442 1.57881 3.37438 1.54916 3.23607 1.56623C3.09777 1.58329 2.96913 1.64608 2.87061 1.74463L2.24561 2.36963C2.14706 2.46816 2.08426 2.59679 2.0672 2.7351C2.05014 2.8734 2.07979 3.01344 2.15144 3.13296L4.02644 6.25796C4.08197 6.35048 4.16051 6.42704 4.25441 6.48019C4.34831 6.53335 4.45437 6.56129 4.56227 6.5613H5.86561L7.58394 8.27963L8.89644 7.1988V7.19963Z"
                  fill="#6B7280" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.9629 14.4408L14.4487 17.9258C14.7099 18.1869 15.0199 18.3941 15.3612 18.5354C15.7024 18.6768 16.0681 18.7495 16.4375 18.7495C16.8068 18.7495 17.1725 18.6768 17.5138 18.5354C17.855 18.3941 18.1651 18.1869 18.4262 17.9258C18.6874 17.6646 18.8946 17.3545 19.0359 17.0133C19.1772 16.6721 19.25 16.3064 19.25 15.937C19.25 15.5677 19.1772 15.2019 19.0359 14.8607C18.8946 14.5195 18.6874 14.2094 18.4262 13.9483L15.6712 11.1941C15.2489 11.254 14.8212 11.266 14.3962 11.2299C14.0679 11.2016 13.8279 11.2249 13.6737 11.2649C13.6249 11.2753 13.578 11.293 13.5346 11.3174L10.9629 14.4408ZM13.8079 13.3074C13.9251 13.1904 14.0839 13.1246 14.2496 13.1246C14.4152 13.1246 14.574 13.1904 14.6912 13.3074L16.2537 14.8708C16.3151 14.928 16.3644 14.997 16.3985 15.0736C16.4327 15.1503 16.4511 15.2331 16.4525 15.317C16.454 15.4009 16.4386 15.4843 16.4072 15.5621C16.3757 15.6399 16.3289 15.7106 16.2696 15.77C16.2102 15.8293 16.1395 15.8761 16.0617 15.9075C15.9839 15.939 15.9005 15.9544 15.8166 15.9529C15.7327 15.9514 15.6499 15.9331 15.5733 15.8989C15.4966 15.8647 15.4276 15.8155 15.3704 15.7541L13.8079 14.1916C13.6908 14.0744 13.6251 13.9156 13.6251 13.7499C13.6251 13.5843 13.6908 13.4254 13.8079 13.3083V13.3074Z"
                  fill="#6B7280" />
              </svg>
              <span>
                Services
              </span>
            </button>
          </div>
        </div>

        <div class="permissions-section-inner-body">
          <div class="row g-4">
            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox"/>
                  <label for="permissions-checkbox" tabindex="4">login</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox2"/>
                  <label for="permissions-checkbox2" tabindex="4">Notifications_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox3"/>
                  <label for="permissions-checkbox3" tabindex="4">Registration_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox4"/>
                  <label for="permissions-checkbox4" tabindex="4">Registration_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox5"/>
                  <label for="permissions-checkbox5" tabindex="4">Products_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox6"/>
                  <label for="permissions-checkbox6" tabindex="4">Products_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox7"/>
                  <label for="permissions-checkbox7" tabindex="4">Orders_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox8"/>
                  <label for="permissions-checkbox8" tabindex="4">Orders_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox9"/>
                  <label for="permissions-checkbox9" tabindex="4">Reports_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox10"/>
                  <label for="permissions-checkbox10" tabindex="4">login</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox11"/>
                  <label for="permissions-checkbox11" tabindex="4">Notifications_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox12"/>
                  <label for="permissions-checkbox12" tabindex="4">Registration_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox13"/>
                  <label for="permissions-checkbox13" tabindex="4">login</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox14"/>
                  <label for="permissions-checkbox14" tabindex="4">Notifications_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox15"/>
                  <label for="permissions-checkbox15" tabindex="4">Registration_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox16"/>
                  <label for="permissions-checkbox16" tabindex="4">login</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox17"/>
                  <label for="permissions-checkbox17" tabindex="4">Notifications_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox18"/>
                  <label for="permissions-checkbox18" tabindex="4">Registration_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox19"/>
                  <label for="permissions-checkbox19" tabindex="4">login</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox20"/>
                  <label for="permissions-checkbox20" tabindex="4">Notifications_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox21"/>
                  <label for="permissions-checkbox21" tabindex="4">Registration_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox22"/>
                  <label for="permissions-checkbox22" tabindex="4">login</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox23"/>
                  <label for="permissions-checkbox23" tabindex="4">Notifications_write</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <div>
                  <input class="permissions-checkbox" type="checkbox" id="permissions-checkbox24"/>
                  <label for="permissions-checkbox24" tabindex="4">Registration_read</label>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="">
                <button class="save-btn ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
