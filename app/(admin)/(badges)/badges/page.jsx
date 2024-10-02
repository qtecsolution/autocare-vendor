import GlobalSearch from '@/components/admin/GlobalSearch';
import axiosInstance from '@/lib/axiosInstance';
import React from 'react';
import Badge from './Badge';
async function getMyBadges() {
  const response = await axiosInstance.get('seller-panel-api/seller-badges/');
  return response.data;
}
const BadgeColor = [
  'flagshipStore',
  'topSeller',
  'newArrival',
  'customerFavorite',
  'fastShipper',
  'topSeller',
  'qualityAssured',
  'discountKing',
  'discountQueen',
  'responsiveSeller',
  'reliableVendor',
]; 
export default async function page() {
  const badges = await getMyBadges();
  return (
    <main id="content">
      <div className="inner-content">
        <GlobalSearch />
        <section className="earned-badge-section mt-4">
          <div className="earned-badge-section-inner">
            <h1 className="title">Badges</h1>

            <div className="mt-4 earned-badge-inner">
              <h2 className="sub-title">Earned badge</h2>

              <div className="badge-section-inner">
                {badges?.map((badge, index) => (
                  <Badge
                    key={index}
                    badge={badge?.badge}
                    color={BadgeColor[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
