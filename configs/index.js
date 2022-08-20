import axios from 'axios';

import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
