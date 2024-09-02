import axios from 'axios';

const token = 'your-auth-token'; // Replace with your token

const axiosAuthInstance = axios.create({
  baseURL: 'https://www.spider.autocare.com.bd/', 
  timeout: 100000,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default axiosAuthInstance;