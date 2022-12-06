import axios from 'axios';
import {API_URL} from '../constants/urls';
const defaultOptions = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

let axiosClient = axios.create(defaultOptions);

export default axiosClient;
