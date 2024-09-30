import GlobalSearch from '@/components/admin/GlobalSearch';
import React from 'react';

export default function EmptyFeedback() {
  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch/>
        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <h1 className="title">Review</h1>
            </div>

            <div className="order-management-body">
              <div className="order-management-body-main-content">
                <div className="main-content-inner">
                  <div className="py-5"></div>
                  <img
                    src="./assets/images/no-review-found.svg"
                    alt="No Review Found"
                  />
                  <h3 className="title">No Review Found</h3>
                  <p className="details">
                    You didn’t get any order yet. All your order will show us
                    here in the list.
                  </p>
                  <div className="py-5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
