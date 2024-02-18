import axios, {AxiosInstance} from 'axios';
import { TIME_OUT, BACKEND_URL } from '../constans';

export const createAPI = () : AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIME_OUT
  });

  return api;
};
