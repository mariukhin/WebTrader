import axios from 'axios';

export default function API() {
  return axios.create({
    baseURL: 'http://localhost:49187/api',
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' },
  });
}
