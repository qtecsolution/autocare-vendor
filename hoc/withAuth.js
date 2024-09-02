// hoc/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const validateToken = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          router.push('/login');
        } else {
          try {
            const response = await axios.get('https://www.spider.autocare.com.bd/api/customer-info/', {
                headers: { Authorization: `Bearer ${accessToken}` },
              });
            if (response.status !== 200 || response.data.code === 'token_not_valid') {
              throw new Error('Token is invalid or expired');
            }
          } catch (error) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('customerInfo');
            router.push('/login');
          }
        }
      };

      validateToken();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
