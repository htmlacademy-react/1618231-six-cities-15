import axios, { AxiosInstance} from 'axios';
import { TIME_OUT, BACKEND_URL } from '../constans';
import { getToken } from './token';

export const createAPI = () : AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIME_OUT
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );
  return api;
};
