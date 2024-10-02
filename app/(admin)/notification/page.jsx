import React from 'react'
import NotificationPage from './NotificationPage'
import axiosInstance from '@/lib/axiosInstance';

async function getNotifications(page, pageSize) {
  try {
    const response = await axiosInstance.get(
      `/seller-panel-api/frontend/notification/?page=${page}&page_size=${pageSize}`
    );
    const notifications = response.data;
    const noNotificationFound = notifications.length === 0;
    return {
      props: {
        notifications,
        noNotificationFound,
      }
    };
  } catch (error) {
    return {
      props: {
        notifications: [],
        noNotificationFound: true,
      }
    };
  }
}
async function page({ searchParams }) {
  const { page } = searchParams;
  const pageSize = 5;
  const allNotification = await getNotifications(page ? page : 1, pageSize);
  const calculatedTotalPages = Math.ceil(allNotification.props.notifications?.count / pageSize);
  return (
    <NotificationPage allNotification={allNotification} pageProps={page}
      calculatedTotalPages={calculatedTotalPages} />
  )
}

export default page