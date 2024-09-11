import { setAccessTokenToCookies, setRefreshTokenToCookies } from '@/actions/actions';
import axiosWithBaseURL from '@/lib/axiosWithBaseURL';

export const login = async (number, password) => {
    try {
        const response = await axiosWithBaseURL.post('/seller-panel-api/login/', {
            username: number,
            password: password,
        });

        const { access, refresh, seller } = response.data;

        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        localStorage.setItem("seller", JSON.stringify(seller));
        await setAccessTokenToCookies(access);
        await setRefreshTokenToCookies(refresh);

        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const getAuthUser = () => {
    const userInfo = localStorage.getItem('seller');
    return userInfo ? JSON.parse(userInfo) : null;
}