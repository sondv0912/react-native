import axios from 'axios';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

const appAxios = axios.create();

appAxios.interceptors.request.use(
  config => {
    const accessToken = null;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

appAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

function axiosDefault<T>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> {
  return appAxios(config)
    .then((response: AxiosResponse<T>) => response)
    .catch(error => {
      throw error;
    });
}

export default axiosDefault;
