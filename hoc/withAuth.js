// hoc/withAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteAccessToken, deleteRefreshToken } from '@/actions/actions';
import axiosWithBaseURL from '@/lib/axiosWithBaseURL';
import axiosInstance from '@/lib/axiosInstance';

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
          const response = await axiosInstance.get('/seller-panel-api/seller-info/');
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
