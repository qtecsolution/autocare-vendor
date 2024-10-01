
import GlobalSearch from '@/components/admin/GlobalSearch';
import Image from 'next/image';
import React from 'react';
import image from '@/public/assets/images/no-income-yet.svg';
export default function EmptyFinance() {
  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <h1 className="title">Finance</h1>
            </div>

            <div className="order-management-body">
              <div className="order-management-body-main-content">
                <div className="main-content-inner">
                  <Image
                    src={image}
                    height={200}
                    width={200}
                    alt="No Order Found img"
                  />
                  <h3 className="title">No Income Yet</h3>
                  <p className="details">
                    You didn’t any income yet. All of your income details will
                    show here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
