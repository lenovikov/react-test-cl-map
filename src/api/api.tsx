import axios from 'axios';
import { Request } from '../types';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export const request = async (options: Request) => {
  const { method, data, url } = options;
  return await axiosInstance({
    method,
    data: data || {},
    url,
  });
};
