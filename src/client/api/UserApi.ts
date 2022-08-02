import { User } from '../../commons/types/User.type';

import ApiClient from './ApiClient';

const url = 'users';

async function createUser(params: User): Promise<User> {
  const { data } = await ApiClient.post<User>(url, params);
  return data;
}

async function getUser(id: string): Promise<User> {
  const { data } = await ApiClient.get<User>(`${url}/${id}`);
  return data;
}

export default {
  createUser,
  getUser,
};
