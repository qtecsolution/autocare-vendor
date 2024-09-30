'use client'
import React, { useState } from 'react'
import { convertToAMPM } from '@/utils/timeFormat'
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import { useRouter } from 'next/navigation';

function ReSchedulePage({ bookingDetails }) {

  const [selectedDate, setSelectedDate] = useState(bookingDetails?.bookings?.booking_date)
  const [selectedTime, setSelectedTime] = useState(bookingDetails?.bookings?.booking_time_slot)
  const [dateError, setDateError] = useState('');
  const router = useRouter();

  const handleSelectedTime = (timeSlot) => {
    setSelectedTime(timeSlot);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setDateError('Date Required !');
    } else {
      try {
        const response = await axiosInstance.put(`/seller-panel-api/frontend/service-booking-reschedule/${bookingDetails?.bookings?.id}/`, {
          bookingDate: selectedDate,
          bookingTimeSlot: selectedTime
        })
        toast.custom((t) => (
          <SuccessToast
            message={response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
        router.push('/booking-list');
      } catch (error) {
        toast.custom((t) => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }

  return (
    <>
      <section class="setup-store-section d-flex justify-content-center w-100">
        <div class="setup-store-section-inner">
          <div class="d-flex justify-content-center">
            <div class="center">
              <div class="d-flex align-items-start flex-column gap-3">
                <h1 class="title">
                  Reschedule
                </h1>

                <p class="details text-start">
                  Please select Date and time to reschedule booking
                </p>
              </div>

              <div class="setup-store-form form-inner">
                <div class="inner-input">
                  <label class="input-label" for="brandName">Select Date</label>
                  <div class="input-field">
                    <input type="date" id="start-date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M6.66797 1.66663V4.16663" stroke="#525468" stroke-width="1.25" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.332 1.66663V4.16663" stroke="#525468" stroke-width="1.25" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.91797 7.57495H17.0846" stroke="#525468" stroke-width="1.25" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M17.5 7.08329V14.1666C17.5 16.6666 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6666 2.5 14.1666V7.08329C2.5 4.58329 3.75 2.91663 6.66667 2.91663H13.3333C16.25 2.91663 17.5 4.58329 17.5 7.08329Z"
                        stroke="#525468" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M13.0762 11.4167H13.0836" stroke="#525468" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M13.0762 13.9167H13.0836" stroke="#525468" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.99412 11.4167H10.0016" stroke="#525468" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.99412 13.9167H10.0016" stroke="#525468" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M6.91209 11.4167H6.91957" stroke="#525468" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M6.91209 13.9167H6.91957" stroke="#525468" stroke-width="1.66667" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg> */}
                  </div>
                  <div>
                    <small className='text-danger'>{dateError}</small>
                  </div>
                </div>

                <div class="reschedule-time-select">
                  <p class="text">Select Time</p>
                  <div class="row g-4">
                    {bookingDetails?.timeSlots?.map((timeSlot) => (
                      <div className="col-6" key={timeSlot?.id} onClick={() => handleSelectedTime(timeSlot)}>
                        <label htmlFor={`rescheduleTime${timeSlot?.id}`} className="d-flex align-items-center justify-content-between gap-2 reschedule-item">
                          <div className="d-flex align-items-center gap-2">
                            <figure className="icon">
                              <img src={timeSlot?.icon} alt='icon' width={15} height={15} />
                            </figure>
                            <div className="date-text">
                              <h4>{timeSlot?.time_slot}</h4>
                              <p>{convertToAMPM(timeSlot?.opening_time)} to {convertToAMPM(timeSlot?.closing_time)}</p>
                            </div>
                          </div>
                          <div className="radio-button-container">
                            <input
                              id={`rescheduleTime${timeSlot?.id}`} // Unique ID for each radio button
                              type="radio"
                              checked={selectedTime?.id === timeSlot?.id}
                              name="radio" // Same name for grouping
                              onChange={() => handleSelectedTime(timeSlot)} // Handle change
                            />
                            <span className="checkmark"></span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <button class="login-btn" onClick={handleSubmit}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="pb-5"></div>
    </>
  )
}

export default ReSchedulePage