import axios from 'axios';

import config from '../configs/config.dev.json';

export const baseURL = `${config.API_URL}/api/`;
const ApiClient = axios.create({ baseURL });

export default ApiClient;
