import axios from 'axios';

import { isDev } from 'Utils/';

const devUrl = 'http://localhost:49187/api';
const prodUrl = '';

export const getBaseUrl = () => (isDev ? devUrl : prodUrl);

axios.defaults.baseURL = getBaseUrl();

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};
