import { useContext, useEffect, useState } from 'react';

import { User } from '../../commons/types/User.type';
import UserApi from '../api/UserApi';
import { auth } from '../services/FirebaseService';

export default function useAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const authStateChanged = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await UserApi.getUser(userAuth.uid);
        setUser(user);
      } else {
        setError(new Error('Unauthenticated'));
      }
      setIsLoading(false);
    });

    return () => {
      authStateChanged();
    };
  }, []);

  return {
    error,
    isLoading,
    user,
  };
}
