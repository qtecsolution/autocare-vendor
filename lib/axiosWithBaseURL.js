import axios from 'axios';

const axiosWithBaseURL = axios.create({
    baseURL: 'https://www.spider.autocare.com.bd',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosWithBaseURL;