export const isDev = process.env.NODE_ENV === 'development';

export const FETCHING_STATE = {
  FETCHING: 'FETCHING',
  LOADED: 'LOADED',
  UPDATED: 'UPDATED',
  ERROR: 'ERROR',
};

const devUrl = 'http://localhost:49187/api';
const prodUrl = 'https://webtraderapi.azurewebsites.net/api';

export const getBaseUrl = () => (isDev ? devUrl : prodUrl);
