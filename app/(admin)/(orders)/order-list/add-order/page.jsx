import React from "react";
import AddOrderPage from "./AddOrderPage";
import axiosInstance from "@/lib/axiosInstance";

async function getOrderIntData() {
  const response = await axiosInstance.get(`/seller-panel-api/frontend/place-order-initial-data/`);
  if (response.status !== 200) {
      throw new Error("Failed to fetch data");
  }
  return response.data;
}

async function page() {
  const orderIntData = await getOrderIntData();
  return <AddOrderPage orderIntData={orderIntData}/>;
}

export default page;
