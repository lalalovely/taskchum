import { createContext } from 'react';

import { User } from '../../commons/types/User.type';

export const UserContext = createContext<User>({
  name: '',
  id: '',
  email: '',
} as User);
