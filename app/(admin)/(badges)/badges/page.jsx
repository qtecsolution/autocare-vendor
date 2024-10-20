import GlobalSearch from '@/components/admin/GlobalSearch';
import axiosInstance from '@/lib/axiosInstance';
import React from 'react';
import Badge from './Badge';
import BadgesPage from './BadgesPage';
async function getMyBadges() {
  const response = await axiosInstance.get('/seller-panel-api/store-earned-badges-history/');
  return response.data;
}
const BadgeColor = [
  'flagshipStore',
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
  console.log(badges,'B');
  
  return (
    <BadgesPage badges={badges} BadgeColor={BadgeColor}/>
  );
}
