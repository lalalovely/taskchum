import axios, { AxiosError } from 'axios';

import { showError } from '../contexts/AlertDialogContext';
import { auth } from '../services/FirebaseService';
import config from '../configs/config';

export const baseURL = `${config.apiUrl}/api/`;
const ApiClient = axios.create({ baseURL });

ApiClient.interceptors.response.use((res) => res, interceptErrorResponse);

ApiClient.interceptors.request.use(async (config) => {
  if (config.headers === undefined) {
    config.headers = {};
  } else {
    const token = await auth.currentUser?.getIdToken(true);
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
}, interceptErrorResponse);

function interceptErrorResponse(error: AxiosError) {
  showError(error.message, 'error', 'Error');
}

export default ApiClient;
