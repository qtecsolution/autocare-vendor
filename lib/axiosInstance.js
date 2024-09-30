import { getAccessTokenFromCookies } from "@/actions/actions";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.spider.autocare.com.bd",
  timeout: 100000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await getAccessTokenFromCookies();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
