// hoc/withAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { deleteAccessToken, deleteRefreshToken } from '@/actions/actions';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const validateToken = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          router.push('/login');
          return;
        }

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
          await deleteAccessToken();
          await deleteRefreshToken();

          router.push('/login');
          return;
        }

        setIsLoading(false);
      };

      validateToken();
    }, [router]);

    if (isLoading) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
