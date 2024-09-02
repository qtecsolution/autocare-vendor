import axios from 'axios';

export const login = async (number, password) => {
  try {
    const response = await axios.post('/api/login', {
      number,
      password,
    });

    const { accessToken } = response.data;

    // Store the token in local storage
    localStorage.setItem('accessToken', accessToken);

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};