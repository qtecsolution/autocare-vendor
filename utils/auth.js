import axios from 'axios';

export const login = async (number, password) => {
    try {
        const response = await axios.post('https://www.spider.autocare.com.bd/api/token/', {
            username: number,
            password: password,
        });

        const { access, refresh, customer } = response.data;

        localStorage.setItem('accessToken', access); // Save access token
        localStorage.setItem('refreshToken', refresh); // Save refresh token
        localStorage.setItem('customerInfo', JSON.stringify(customer));

        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};