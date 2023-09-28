import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  console.log(token, 'token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
