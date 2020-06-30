import axios from 'axios';
import qs from 'qs';

const API_URL = 'https://cors-anywhere.herokuapp.com/http://store.steampowered.com';

const apiService = axios.create({
  baseURL: API_URL,
});

apiService.defaults.headers.common.Accept = 'application/json';

apiService.interceptors.request.use(
  (config) => {
    config.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: 'brackets',
      });
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response.data.code) {
      //add general response error handle
      case 401:
        return Promise.resolve(error.response);
      case 404:
        return Promise.reject(error.response.data.message || 'Something went wrong');
      case 400:
        return Promise.resolve(error.response);
      default:
        return Promise.resolve(error.response);
    }
  }
);

export default apiService;
