import React from 'react'
import DashBoardPage from './DashBoardPage'
import axiosInstance from '@/lib/axiosInstance';

async function getDashboardInfo() {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/dashboard/`
    );
    const dashboardinfo = response.data;
    
    return {
      props: {
        dashboardinfo
      }
    };
  } catch (error) {
    return {
      props: {
        dashboardinfo: [],
      }
    };
  }
}

async function page() {
  const dashBoardInfo = await getDashboardInfo();  
  return (
    <DashBoardPage dashBoardInfo={dashBoardInfo} />
  )
}

export default page