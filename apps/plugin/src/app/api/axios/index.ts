import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);
  const authKey = localStorage.getItem('authKey');
  /*
        Add default headers, interceptors etc..
    */
  axiosInstance.interceptors.request.use((reqConfig) => {
    if (!reqConfig.headers) {
      return reqConfig;
    }
    reqConfig.headers['auth'] = authKey as string;
    return reqConfig;
  });

  axiosInstance.interceptors.response.use((resConfig) => {
    localStorage.setItem('authKey', resConfig.headers['auth']);
    return resConfig;
  });

  return axiosInstance;
};

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: 'http://localhost:1227/api/v1',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = initialization(axiosRequestConfiguration);

export default axiosInstance;
