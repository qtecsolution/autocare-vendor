import axios from 'axios';

const getToken = () => localStorage.getItem('accessToken');

const axiosInstance = axios.create({
  baseURL: 'https://www.spider.autocare.com.bd', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
