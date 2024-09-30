'use client';
import GlobalSearch from '@/components/admin/GlobalSearch';
import ProductFeedback from './ProductFeedback';
import ServiceFeedBack from './ServiceFeedBack';
function Feedback() {
  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <h1 className="title">Review</h1>
            </div>

            <div className="review-section mt-5">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-tabs-button active"
                    id="Product-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Product"
                    type="button"
                    role="tab"
                    aria-controls="Product"
                    aria-selected="true"
                  >
                    Product
                  </button>

                  <button
                    className="nav-tabs-button"
                    id="Services-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Services"
                    type="button"
                    role="tab"
                    aria-controls="Services"
                    aria-selected="false"
                  >
                    Services
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <ProductFeedback />
                <ServiceFeedBack />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Feedback;
