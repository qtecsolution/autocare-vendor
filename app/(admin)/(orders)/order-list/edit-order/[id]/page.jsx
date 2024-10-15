import React from "react";
import axiosInstance from "@/lib/axiosInstance";
import EditOrderPage from "./EditOrderPage";

async function getOrderIntData() {
  const response = await axiosInstance.get(
    `/seller-panel-api/frontend/place-order-initial-data/`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return response.data;
}
async function getOrderDetails(id) {
  const response = await axiosInstance.get(
    `/seller-panel-api/frontend/update-order/${id}/`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return response.data;
}

async function page({ params }) {
  const orderIntData = await getOrderIntData();
  const orderDetails = await getOrderDetails(params?.id);

  return (
    <EditOrderPage orderIntData={orderIntData} orderDetails={orderDetails} />
  );
}

export default page;
