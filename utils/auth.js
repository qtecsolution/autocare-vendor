import axios from 'axios';
import { setAccessTokenToCookies, setRefreshTokenToCookies } from '@/actions/actions';

export const login = async (number, password) => {
    try {
        const response = await axios.post('https://www.spider.autocare.com.bd/seller-panel-api/login/', {
            username: number,
            password: password,
        });

        const { access, refresh } = response.data;

        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        await setAccessTokenToCookies(access);
        await setRefreshTokenToCookies(refresh);

        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};